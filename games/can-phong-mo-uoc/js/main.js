var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
   music:null,
   shutterOn:[true],
   r1_Flag:[3,1,1,1,1,1],
   r1_Alpha:[1,0,0,1,1,0],

   r2_Flag:[1,1,1,1,1],
   r2_Alpha:[0,0,1,0,0],

   r3_Flag:[1,1,1,1,1,1],
   r3_Alpha:[1,0,1,1,0,0],
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
             game.load.audio('magicstars', ['assets/magicstars.mp3']);
             game.load.audio('btn09', ['assets/btn09.mp3']);
             game.load.spritesheet('soundicon', 'assets/soundicon.png',67,71,2);
             game.load.image('logo', 'assets/logo.png');
             game.load.spritesheet('effects', 'assets/effects.png',141,134);
             game.load.spritesheet('effectssd', 'assets/efftes012.png',367,335);

             //btns
             for(i=1; i<=6; i++){
             	game.load.image('btns000'+i,'assets/btn/btns000'+i+'.png');
             }

             //intro_assets
             game.load.image('i_bg','assets/intro/i_bg.jpg');
             game.load.image('i_text','assets/intro/i_text.png');


             //r1_assets
             game.load.image('back_btn','assets/r1/back_btn.png');
             game.load.image('celing','assets/r1/celing.png');
             game.load.image('celing2','assets/r1/celing2.png');
             game.load.image('i_panel','assets/r1/i_panel.png');
             game.load.image('mate','assets/r1/mate.png');
             game.load.image('next_btn','assets/r1/next_btn.png');
             game.load.image('sopha','assets/r1/sopha.png');
             game.load.image('table','assets/r1/table.png');
             game.load.image('table_light','assets/r1/table_light.png');
             game.load.image('table_light','assets/r1/table_light.png');

             for(i=1; i<=8; i++){
             	game.load.image('cot000'+i,'assets/r1/cot000'+i+'.png');
             	game.load.image('light000'+i,'assets/r1/light000'+i+'.png');
             	game.load.image('r1_floor000'+i,'assets/r1/r1_floor000'+i+'.png');
             	game.load.image('wall_patten000'+i,'assets/r1/wall_patten000'+i+'.png');
             	game.load.image('wall000'+i,'assets/r1/wall000'+i+'.png');

             	if (i<=6) {
             	game.load.image('icon'+i,'assets/r1/icon'+i+'.png');

             	}

	

             	if (i<=7) {
             	game.load.image('wall_pappers000'+i,'assets/r1/wall_pappers000'+i+'.png');
             	

             	}
             }

             //r2_assets
             game.load.image('r2_box','assets/r2/r2_box.png');
             game.load.image('r2_box2','assets/r2/r2_box2.png');
             game.load.image('r2_shado','assets/r2/r2_shado.png');
             game.load.image('r2_wall','assets/r2/r2_wall.png');
             game.load.image('r2_window','assets/r2/r2_window.png');
             game.load.image('r2_cilling','assets/r2/r2_cilling.png');
             game.load.image('r2_floor','assets/r2/r2_floor.png');

             for(i=1; i<=8; i++){
             	game.load.image('r2_carpet000'+i,'assets/r2/r2_carpet000'+i+'.png');
             	game.load.image('r2_cot000'+i,'assets/r2/r2_cot000'+i+'.png');
             	game.load.image('r2_light000'+i,'assets/r2/r2_light000'+i+'.png');
             	game.load.image('r2_scr000'+i,'assets/r2/r2_scr000'+i+'.png');
             	game.load.image('r2_wall_papper000'+i,'assets/r2/r2_wall_papper000'+i+'.png');

             	if (i<=5) {
             	game.load.image('r2_icon'+i,'assets/r2/r2_icon'+i+'.png');
          

             	}
             }

             //r3_assets
             game.load.image('r3_cilling','assets/r3/r3_cilling.png');
             game.load.image('r3_table','assets/r3/r3_table.png');
             game.load.image('r3_table_light','assets/r3/r3_table_light.png');

             for(i=1; i<=8; i++){
             	game.load.image('r3_cat000'+i,'assets/r3/r3_cat000'+i+'.png');
             	game.load.image('r3_celing_light000'+i,'assets/r3/r3_celing_light000'+i+'.png');
             	game.load.image('r3_floor000'+i,'assets/r3/r3_floor000'+i+'.png');
             	game.load.image('r3_mat000'+i,'assets/r3/r3_mat000'+i+'.png');
             	game.load.image('r3_wall000'+i,'assets/r3/r3_wall000'+i+'.png');
             	game.load.image('r3_wallpapers000'+i,'assets/r3/r3_wallpapers000'+i+'.png');

             	if (i<=6) {
             	game.load.image('r3_icon'+i,'assets/r3/r3_icon'+i+'.png');

             	}
             }

             //selaction
             game.load.image('s_text','assets/selaction/s_text.png');
             game.load.image('s1_text','assets/selaction/s1_text.png');
             game.load.image('s2_text','assets/selaction/s2_text.png');
             game.load.image('s3_text','assets/selaction/s3_text.png');
             game.load.spritesheet('s1','assets/selaction/s1.png',226,229,4);

             //title
             game.load.image('t_bg0001','assets/title/t_bg0001.jpg');
             game.load.image('t_bg0002','assets/title/t_bg0002.jpg');
             game.load.image('t_bg0003','assets/title/t_bg0003.jpg');
             game.load.image('t_text','assets/title/t_text.png');


             game.load.image('shutter','assets/shutter.jpg');

   for(i=0;i<RelatedGames.length; i++)
            {
            game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
            }
               game.load.image('Tump_frame','assets/Tump_frame.png');
          
             //LLLLL
             game.load.onFileComplete.add(this.fileLoadFunPre, this);
             
		  
   },
   fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               game.load.onFileComplete.removeAll();
               //AAAAAA
               game.state.start('title');  
            }
   },
   openLink:function(){
      CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","loading","logo");
   }
}
Main.title = function(){}

Main.title.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.magicstars = game.add.audio('magicstars',1,false);
               Main.music.play();
            };
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0,0,'t_bg0001');
        this.levelGroup.add(this.bg);



          this.t_text = game.add.sprite(252,547,'t_text');
          this.t_text.anchor.setTo(0.5);
        
        game.add.tween(this.t_text.scale).to({x:0.95,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(true,300);

 game.time.events.loop(2500,function(){

       this.randomId1 = game.rnd.integerInRange(1,3);
 this.bg.loadTexture('t_bg000'+this.randomId1);
 },this);
        
         this.morebtn = game.add.sprite(75.55,749.55,'btns0004');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);

         this.playbtn = game.add.sprite(431.4,749.2,'btns0003');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
         
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
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","menu","logo");
},
moreLink:function()
{
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","menu","more");
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
   game.state.start('intro');   
   },
}
//iiiiiiiiiiiiiiiiiiii
Main.intro = function(){}

Main.intro.prototype = {
    create:function(){
      this.levelGroup = game.add.group();
      this.introbg = game.add.sprite(0,0,'i_bg');
      this.levelGroup.add(this.introbg);


         this.morebtn = game.add.sprite(75.55,749.55,'btns0004');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);


         this.playbtn = game.add.sprite(431.4,749.2,'btns0005');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
         
         this.popup1 = game.add.sprite(250.65,344,'i_text');
         this.popup1.anchor.setTo(0.5);
         this.popup1.scale.setTo(0);
         this.levelGroup.add(this.popup1);
         
         /*this.popup2 = game.add.sprite(210,180,'popup2');
         this.popup2.anchor.setTo(0.5);
         this.popup2.scale.setTo(0);
         this.levelGroup.add(this.popup2);
         
         this.popup3 = game.add.sprite(220,150,'popup3');
         this.popup3.anchor.setTo(0.5);
         this.popup3.scale.setTo(0);
         this.levelGroup.add(this.popup3);
         */
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutter');
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
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","logo");
},
moreLink:function(){
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","morebutton");
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
   game.state.start('selaction');   
         });
   
   },
}
//r11111111111111
Main.r1 = function(){}

Main.r1.prototype = {
    create:function(){

 if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.magicstars = game.add.audio('magicstars',1,false);
               Main.music.play();
            };
    	this.ri=[0,0,0,0,0,0],
        this.room1_grp = game.add.group();
        
        this.r1_floor0001 = game.add.sprite(252,556.5,'r1_floor000'+Main.r1_Flag[3]);
        this.r1_floor0001.anchor.setTo(0.5);
        this.r1_floor0001.alpha = Main.r1_Alpha[3];
        this.room1_grp.add(this.r1_floor0001);

        this.celing = game.add.sprite(252,168.5,'celing');
        this.celing.anchor.setTo(0.5);
        this.room1_grp.add(this.celing);
        
        this.wall0001 = game.add.sprite(252,257.5,'wall000'+Main.r1_Flag[0]);
        this.wall0001.anchor.setTo(0.5);
        this.wall0001.alpha = Main.r1_Alpha[0];
        this.room1_grp.add(this.wall0001);
          
        this.wall_patten0001 = game.add.sprite(252,257.5,'wall_patten000'+Main.r1_Flag[1]);
        this.wall_patten0001.anchor.setTo(0.5);
        this.wall_patten0001.alpha = Main.r1_Alpha[1];
        this.room1_grp.add(this.wall_patten0001);
        
        this.celing2 = game.add.sprite(243,102.5,'celing2');
        this.celing2.anchor.setTo(0.5);
        this.room1_grp.add(this.celing2);

        this.mate = game.add.sprite(259,677.5,'mate');
        this.mate.anchor.setTo(0.5);
        this.room1_grp.add(this.mate);
        
        this.mate = game.add.sprite(259,677.5,'mate');
        this.mate.anchor.setTo(0.5);
        this.room1_grp.add(this.mate);
        
        this.wall_pappers0001 = game.add.sprite(408,272,'wall_pappers000'+Main.r1_Flag[2]);
        this.wall_pappers0001.anchor.setTo(0.5);
        this.wall_pappers0001.alpha = Main.r1_Alpha[2];
        this.room1_grp.add(this.wall_pappers0001);
        
        this.table = game.add.sprite(257,397,'table');
        this.table.anchor.setTo(0.5);
        this.room1_grp.add(this.table);
         
        this.table_light = game.add.sprite(248,305.5,'table_light');
        this.table_light.anchor.setTo(0.5);
        this.room1_grp.add(this.table_light);
        
        this.sopha = game.add.sprite(408.5,401,'sopha');
        this.sopha.anchor.setTo(0.5);
        this.room1_grp.add(this.sopha);
        
        this.cot0001 = game.add.sprite(192.5,331.5,'cot000'+Main.r1_Flag[4]);
        this.cot0001.anchor.setTo(0.5);
        this.cot0001.alpha = Main.r1_Alpha[4];
        this.room1_grp.add(this.cot0001);
        
        this.light0001 = game.add.sprite(249,100.5,'light000'+Main.r1_Flag[5]);
        this.light0001.anchor.setTo(0.5);
        this.light0001.alpha = Main.r1_Alpha[5];
        this.room1_grp.add(this.light0001);
        
       

        this.i_panel = game.add.sprite(252,722,'i_panel');
        this.i_panel.anchor.setTo(0.5);

        this.icone_grp= game.add.group();



        this.icone_grp1 = game.add.group();
        
        this.icon1 = game.add.sprite(120.65,724.35,'icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1_cnt1 = 1;
        this.icon1.inputEnabled = true;
        this.icon1.input.useHandCursor = true;
        this.icon1.events.onInputOver.add(this.btnOver, this);
        this.icon1.events.onInputOut.add(this.btnOut, this);
        this.icon1.events.onInputDown.add(function(){


        this.wall0001.alpha = 1;
        this.icon1_cnt1 ++;
        Main.r1_Flag[0]=   this.icon1_cnt1;
               Main.r1_Alpha[0]=1;



        this.wall0001.loadTexture('wall000'+this.icon1_cnt1); 

          	Main.magicstars.play();

        effectssd = game.add.sprite(this.wall0001.x,this.wall0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);

      if (this.icon1_cnt1>= 8) {
      	this.icon1_cnt1 = 0;
      }

       this.ri[0]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        

        },this);
        this.icone_grp1.add(this.icon1);
        
        this.icon2 = game.add.sprite(249.8,724.35,'icon2');
        this.icon2.anchor.setTo(0.5);
        this.icon2_cnt1 = 1;
        this.icon2.inputEnabled = true;
        this.icon2.input.useHandCursor = true;
        this.icon2.events.onInputOver.add(this.btnOver, this);
        this.icon2.events.onInputOut.add(this.btnOut, this);
        this.icon2.events.onInputDown.add(function(){


        this.wall_patten0001.alpha = 1;
        this.icon2_cnt1 ++;
        Main.r1_Flag[1]=   this.icon2_cnt1;
               Main.r1_Alpha[1]=1;


        this.wall_patten0001.loadTexture('wall_patten000'+this.icon2_cnt1); 
  	Main.magicstars.play();

        effectssd = game.add.sprite(this.wall_patten0001.x,this.wall_patten0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon2_cnt1>= 8) {
      	this.icon2_cnt1 = 0;
      }

           this.ri[1]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        

        },this);
        this.icone_grp1.add(this.icon2);
        
        this.icon3 = game.add.sprite(378.95,724.35,'icon3');
        this.icon3.anchor.setTo(0.5);
        this.icon3_cnt1 = 1;
        this.icon3.inputEnabled = true;
        this.icon3.input.useHandCursor = true;
        this.icon3.events.onInputOver.add(this.btnOver, this);
        this.icon3.events.onInputOut.add(this.btnOut, this);
        this.icon3.events.onInputDown.add(function(){


        this.wall_pappers0001.alpha = 1;
        this.icon3_cnt1 ++;
        Main.r1_Flag[2]=   this.icon3_cnt1;

               Main.r1_Alpha[2]=1;

        this.wall_pappers0001.loadTexture('wall_pappers000'+this.icon3_cnt1); 

        Main.magicstars.play();

        effectssd = game.add.sprite(this.wall_pappers0001.x,this.wall_pappers0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);

      if (this.icon3_cnt1>= 7) {
      	this.icon3_cnt1 = 0;
      }
        
     this.ri[2]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        },this);
        this.icone_grp1.add(this.icon3);


        this.icone_grp2 = game.add.group();
        
        this.icon4 = game.add.sprite(120.65,724.35,'icon4');
        this.icon4.anchor.setTo(0.5);
        this.icon4_cnt1 = 1;
        this.icon4.inputEnabled = true;
        this.icon4.input.useHandCursor = true;
        this.icon4.events.onInputOver.add(this.btnOver, this);
        this.icon4.events.onInputOut.add(this.btnOut, this);
        this.icon4.events.onInputDown.add(function(){
        this.icon4_cnt1 ++;


        this.r1_floor0001.alpha = 1;
        Main.r1_Flag[3]=   this.icon4_cnt1;

               Main.r1_Alpha[2]=1;

        this.r1_floor0001.loadTexture('r1_floor000'+this.icon4_cnt1); 

           Main.magicstars.play();

        effectssd = game.add.sprite(this.r1_floor0001.x,this.r1_floor0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);


      if (this.icon4_cnt1>= 8) {
      	this.icon4_cnt1 = 0;
      }
        
     this.ri[3]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        },this);
        this.icone_grp2.add(this.icon4);

        this.icon5 = game.add.sprite(249.8,724.35,'icon5');
        this.icon5.anchor.setTo(0.5);
        this.icon5_cnt1 = 1;
        this.icon5.inputEnabled = true;
        this.icon5.input.useHandCursor = true;
        this.icon5.events.onInputOver.add(this.btnOver, this);
        this.icon5.events.onInputOut.add(this.btnOut, this);
        this.icon5.events.onInputDown.add(function(){
        this.icon5_cnt1 ++;


        this.cot0001.alpha = 1;
        Main.r1_Flag[4]=   this.icon5_cnt1;

               Main.r1_Alpha[4]=1;

        this.cot0001.loadTexture('cot000'+this.icon5_cnt1); 
       Main.magicstars.play();

        effectssd = game.add.sprite(this.cot0001.x,this.cot0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);

      if (this.icon5_cnt1>= 8) {
      	this.icon5_cnt1 = 0;
      }
             this.ri[4]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }

        },this);
        this.icone_grp2.add(this.icon5);

        this.icon6 = game.add.sprite(378.95,724.35,'icon6');
        this.icon6.anchor.setTo(0.5);
        this.icon6_cnt1 = 0;
        this.icon6.inputEnabled = true;
        this.icon6.input.useHandCursor = true;
        this.icon6.events.onInputOver.add(this.btnOver, this);
        this.icon6.events.onInputOut.add(this.btnOut, this);
        this.icon6.events.onInputDown.add(function(){
        this.icon6_cnt1 ++;


        this.light0001.alpha = 1;
        Main.r1_Flag[5]=   this.icon6_cnt1;

               Main.r1_Alpha[5]=1;

        this.light0001.loadTexture('light000'+this.icon6_cnt1); 
   Main.magicstars.play();

        effectssd = game.add.sprite(this.light0001.x,this.light0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);

      if (this.icon6_cnt1>= 8) {
      	this.icon6_cnt1 = 0;
      }
        
     this.ri[5]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        },this);
        this.icone_grp2.add(this.icon6);

        this.next_btn = game.add.sprite(470,725,'next_btn');
        this.next_btn.anchor.setTo(0.5);
        this.next_btn.scale.setTo(1.3);
        this.next_btn.inputEnabled = true;
        this.next_btn.input.useHandCursor = true;
        this.next_btn.events.onInputOver.add(this.btnOver, this);
        this.next_btn.events.onInputOut.add(this.btnOut, this);
        this.next_btn.events.onInputDown.add(function(){


          this.icone_grp1.visible = false;
          this.next_btn.visible = false;

          this.icone_grp2.visible = true;
          this.back_btn.visible = true;
        

        },this);
        
        this.back_btn = game.add.sprite(35,720,'back_btn');
        this.back_btn.anchor.setTo(0.5);
        this.back_btn.scale.setTo(1.3);
        this.back_btn.inputEnabled = true;
        this.back_btn.input.useHandCursor = true;
        this.back_btn.events.onInputOver.add(this.btnOver, this);
        this.back_btn.events.onInputOut.add(this.btnOut, this);
        this.back_btn.events.onInputDown.add(function(){


          this.icone_grp1.visible = true;
          this.next_btn.visible = true;

          this.icone_grp2.visible = false;
          this.back_btn.visible = false;
        

        },this);
        
    this.icone_grp.add(this.icone_grp1);
        this.icone_grp.add(this.icone_grp2);

          this.icone_grp2.visible = false;
          this.back_btn.visible = false;
        
         this.morebtn = game.add.sprite(75.55,600,'btns0004');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(1431.4,600,'btns0002');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;        
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         


         this.playbtn2 = game.add.sprite(431.4,1740,'btns0001');
         this.playbtn2.anchor.setTo(0.5);
         this.playbtn2.inputEnabled = true;
         this.playbtn2.input.useHandCursor = true;        
         this.playbtn2.events.onInputUp.add(this.enterRoom2, this);
         this.playbtn2.events.onInputOver.add(this.btnOver, this);
         this.playbtn2.events.onInputOut.add(this.btnOut, this);

             this.thumbGroup=game.add.group();
            game.load.crossOrigin='*';
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
        this.thumbGroup.y=150;


      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutter');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true)
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
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","more");
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

   thumbLink:function()
{
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","gameover","thumb",RelatedGames[this.randomId]['id']);
},   
  enterRoom:function(){
      game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
    this.icone_grp.visible = false;
    this.playbtn2.y = 740;
    this.morebtn.y = 740;
    this.playbtn.y = 1740;
     game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);

     game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

   
         },this);
         },this);
   
   },

      enterRoom2:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('intro');  

   Main. r1_Flag = [3,1,1,1,1,1];
   Main.r1_Alpha = [1,0,0,1,1,0];

   Main.r2_Flag = [1,1,1,1,1];
   Main.r2_Alpha = [0,0,1,0,0];

   Main.r3_Flag = [1,1,1,1,1,1];
   Main.r3_Alpha = [1,0,1,1,0,0]; 
         });
   
   },
    
}

//r22222
Main.r2 = function(){}

Main.r2.prototype = {
    create:function(){
   
    	this.ri=[0,0,0,0,0],

         this.room2_grp = game.add.group();

        this.r2_cilling = game.add.sprite(252,56,'r2_cilling');
        this.r2_cilling.anchor.setTo(0.5);
        this.room2_grp.add(this.r2_cilling);
        
        this.r2_floor = game.add.sprite(252,482.5,'r2_floor');
        this.r2_floor.anchor.setTo(0.5);
        this.room2_grp.add(this.r2_floor);

        this.r2_carpet0001 = game.add.sprite(241,667,'r2_carpet000'+Main.r2_Flag[4]);
        this.r2_carpet0001.anchor.setTo(0.5);
        this.r2_carpet0001.alpha = Main.r2_Alpha[4];
        this.room2_grp.add(this.r2_carpet0001);
        
      
        this.r2_wall = game.add.sprite(252,257.5,'r2_wall');
        this.r2_wall.anchor.setTo(0.5);
        this.room2_grp.add(this.r2_wall);
          
        this.r2_wall_papper0001 = game.add.sprite(252,257,'r2_wall_papper000'+Main.r2_Flag[0]);
        this.r2_wall_papper0001.anchor.setTo(0.5);
        this.r2_wall_papper0001.alpha = Main.r2_Alpha[0];
        this.room2_grp.add(this.r2_wall_papper0001);
       
        this.r2_window = game.add.sprite(456.5,212,'r2_window');
        this.r2_window.anchor.setTo(0.5);
        this.room2_grp.add(this.r2_window);

        this.r2_box = game.add.sprite(321.5,402.5,'r2_box');
        this.r2_box.anchor.setTo(0.5);
        this.room2_grp.add(this.r2_box);
        
        this.r2_cot0001 = game.add.sprite(274.5,436.5,'r2_cot000'+Main.r2_Flag[2]);
        this.r2_cot0001.anchor.setTo(0.5);
        this.r2_cot0001.alpha = Main.r2_Alpha[2];
        this.room2_grp.add(this.r2_cot0001);
        
        this.r2_light0001 = game.add.sprite(329,141,'r2_light000'+Main.r2_Flag[1]);
        this.r2_light0001.anchor.setTo(0.5);
        this.r2_light0001.alpha = Main.r2_Alpha[1];
        this.room2_grp.add(this.r2_light0001);
         
        this.r2_shado = game.add.sprite(441.5,228,'r2_shado');
        this.r2_shado.anchor.setTo(0.5);
        this.room2_grp.add(this.r2_shado);
        this.r2_shado.visible = false;
        
        this.r2_scr0001 = game.add.sprite(451.5,220,'r2_scr000'+Main.r2_Flag[4]);
        this.r2_scr0001.anchor.setTo(0.5);
        this.r2_scr0001.alpha = Main.r2_Alpha[4]
        this.room2_grp.add(this.r2_scr0001);
   
        this.r2_box2 = game.add.sprite(50,495,'r2_box2');
        this.r2_box2.anchor.setTo(0.5);
        this.room2_grp.add(this.r2_box2);
   
        
       

        this.i_panel = game.add.sprite(252,722,'i_panel');
        this.i_panel.anchor.setTo(0.5);

          this.icone_grp= game.add.group();

 
        this.icone_grp1 = game.add.group();
        
        this.icon1 = game.add.sprite(120.65,724.35,'r2_icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1_cnt1 = 1;
        this.icon1.inputEnabled = true;
        this.icon1.input.useHandCursor = true;
        this.icon1.events.onInputOver.add(this.btnOver, this);
        this.icon1.events.onInputOut.add(this.btnOut, this);
        this.icon1.events.onInputDown.add(function(){


        this.r2_wall_papper0001.alpha = 1;
        this.icon1_cnt1 ++;
        Main.r2_Flag[0]=   this.icon1_cnt1;


        this.r2_wall_papper0001.loadTexture('r2_wall_papper000'+this.icon1_cnt1); 
  Main.magicstars.play();

        effectssd = game.add.sprite(this.r2_wall_papper0001.x,this.r2_wall_papper0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon1_cnt1>= 8) {
      	this.icon1_cnt1 = 0;
      }

       this.ri[0]=1;
          if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        

        },this);
        this.icone_grp1.add(this.icon1);
        
        this.icon2 = game.add.sprite(249.8,724.35,'r2_icon2');
        this.icon2.anchor.setTo(0.5);
        this.icon2_cnt1 = 1;
        this.icon2.inputEnabled = true;
        this.icon2.input.useHandCursor = true;
        this.icon2.events.onInputOver.add(this.btnOver, this);
        this.icon2.events.onInputOut.add(this.btnOut, this);
        this.icon2.events.onInputDown.add(function(){


        this.r2_light0001.alpha = 1;
        this.icon2_cnt1 ++;
        Main.r2_Flag[1]=   this.icon2_cnt1;


        this.r2_light0001.loadTexture('r2_light000'+this.icon2_cnt1); 
Main.magicstars.play();

        effectssd = game.add.sprite(this.r2_light0001.x,this.r2_light0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon2_cnt1>= 8) {
      	this.icon2_cnt1 = 0;
      }

           this.ri[1]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        

        },this);
        this.icone_grp1.add(this.icon2);
        
        this.icon3 = game.add.sprite(378.95,724.35,'r2_icon3');
        this.icon3.anchor.setTo(0.5);
        this.icon3_cnt1 = 1;
        this.icon3.inputEnabled = true;
        this.icon3.input.useHandCursor = true;
        this.icon3.events.onInputOver.add(this.btnOver, this);
        this.icon3.events.onInputOut.add(this.btnOut, this);
        this.icon3.events.onInputDown.add(function(){


        this.r2_cot0001.alpha = 1;
        this.icon3_cnt1 ++;
        Main.r2_Flag[2]=   this.icon3_cnt1;


        this.r2_cot0001.loadTexture('r2_cot000'+this.icon3_cnt1); 
        Main.magicstars.play();

        effectssd = game.add.sprite(this.r2_cot0001.x,this.r2_cot0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon3_cnt1>= 8) {
      	this.icon3_cnt1 = 0;
      }
        
     this.ri[2]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        },this);
        this.icone_grp1.add(this.icon3);


        this.icone_grp2 = game.add.group();
        
        this.icon4 = game.add.sprite(210,724.35,'r2_icon4');
        this.icon4.anchor.setTo(0.5);
        this.icon4_cnt1 = 1;
        this.icon4.inputEnabled = true;
        this.icon4.input.useHandCursor = true;
        this.icon4.events.onInputOver.add(this.btnOver, this);
        this.icon4.events.onInputOut.add(this.btnOut, this);
        this.icon4.events.onInputDown.add(function(){
        this.icon4_cnt1 ++;


        this.r2_scr0001.alpha = 1;
        this.r2_shado.visible = true;

        Main.r2_Flag[3]=   this.icon4_cnt1;


        this.r2_scr0001.loadTexture('r2_scr000'+this.icon4_cnt1); 
Main.magicstars.play();

        effectssd = game.add.sprite(this.r2_scr0001.x,this.r2_scr0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon4_cnt1>= 8) {
      	this.icon4_cnt1 = 0;
      }
        
     this.ri[3]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        },this);
        this.icone_grp2.add(this.icon4);

        this.icon5 = game.add.sprite(350,724.35,'r2_icon5');
        this.icon5.anchor.setTo(0.5);
        this.icon5_cnt1 = 1;
        this.icon5.inputEnabled = true;
        this.icon5.input.useHandCursor = true;
        this.icon5.events.onInputOver.add(this.btnOver, this);
        this.icon5.events.onInputOut.add(this.btnOut, this);
        this.icon5.events.onInputDown.add(function(){
        this.icon5_cnt1 ++;


        this.r2_carpet0001.alpha = 1;
        Main.r2_Flag[0]=   this.icon5_cnt1;


        this.r2_carpet0001.loadTexture('r2_carpet000'+this.icon5_cnt1); 
Main.magicstars.play();

        effectssd = game.add.sprite(this.r2_carpet0001.x,this.r2_carpet0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon5_cnt1>= 8) {
      	this.icon5_cnt1 = 0;
      }
             this.ri[4]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }

        },this);
        this.icone_grp2.add(this.icon5);


        this.next_btn = game.add.sprite(470,725,'next_btn');
        this.next_btn.anchor.setTo(0.5);
        this.next_btn.scale.setTo(1.3);
        this.next_btn.inputEnabled = true;
        this.next_btn.input.useHandCursor = true;
        this.next_btn.events.onInputOver.add(this.btnOver, this);
        this.next_btn.events.onInputOut.add(this.btnOut, this);
        this.next_btn.events.onInputDown.add(function(){


          this.icone_grp1.visible = false;
          this.next_btn.visible = false;

          this.icone_grp2.visible = true;
          this.back_btn.visible = true;
        

        },this);
        
        this.back_btn = game.add.sprite(35,720,'back_btn');
        this.back_btn.anchor.setTo(0.5);
        this.back_btn.scale.setTo(1.3);
        this.back_btn.inputEnabled = true;
        this.back_btn.input.useHandCursor = true;
        this.back_btn.events.onInputOver.add(this.btnOver, this);
        this.back_btn.events.onInputOut.add(this.btnOut, this);
        this.back_btn.events.onInputDown.add(function(){


          this.icone_grp1.visible = true;
          this.next_btn.visible = true;

          this.icone_grp2.visible = false;
          this.back_btn.visible = false;
        

        },this);
        
    
          this.icone_grp2.visible = false;
          this.back_btn.visible = false;

            this.icone_grp.add(this.icone_grp1);
        this.icone_grp.add(this.icone_grp2);

        
         this.morebtn = game.add.sprite(75.55,600,'btns0004');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(1431.4,600,'btns0002');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;        
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         


         this.playbtn2 = game.add.sprite(431.4,1740,'btns0001');
         this.playbtn2.anchor.setTo(0.5);
         this.playbtn2.inputEnabled = true;
         this.playbtn2.input.useHandCursor = true;        
         this.playbtn2.events.onInputUp.add(this.enterRoom2, this);
         this.playbtn2.events.onInputOver.add(this.btnOver, this);
         this.playbtn2.events.onInputOut.add(this.btnOut, this);

             this.thumbGroup=game.add.group();
            game.load.crossOrigin='*';
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
        this.thumbGroup.y=150;
         
    
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutter');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true)
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
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","more");
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

       thumbLink:function()
{
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","gameover","thumb",RelatedGames[this.randomId]['id']);
},   
  enterRoom:function(){
      game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
    this.icone_grp.visible = false;
    this.playbtn2.y = 740;
    this.morebtn.y = 740;
    this.playbtn.y = 1740;
     game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);

     game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

   
         },this);
         },this);
   
   },

      enterRoom2:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('intro');  

   Main. r1_Flag = [3,1,1,1,1,1];
   Main.r1_Alpha = [1,0,0,1,1,0];

   Main.r2_Flag = [1,1,1,1,1];
   Main.r2_Alpha = [0,0,1,0,0];

   Main.r3_Flag = [1,1,1,1,1,1];
   Main.r3_Alpha = [1,0,1,1,0,0]; 
         });
   
   },
    

     
}



//r33333333333
Main.r3 = function(){}

Main.r3.prototype = {
    create:function(){


    	this.ri=[0,0,0,0,0,0],
        this.room1_grp = game.add.group();
        
        this.r3_floor0001 = game.add.sprite(252,444,'r3_floor000'+Main.r3_Flag[2]);
        this.r3_floor0001.anchor.setTo(0.5);
        this.r3_floor0001.alpha = Main.r3_Alpha[2];
        this.room1_grp.add(this.r3_floor0001);   

        this.r3_mat0001 = game.add.sprite(152,618.5,'r3_mat000'+Main.r3_Flag[5]);
        this.r3_mat0001.anchor.setTo(0.5);
        this.r3_mat0001.alpha = Main.r3_Alpha[5];
        this.room1_grp.add(this.r3_mat0001);

        this.r3_cilling = game.add.sprite(252,157,'r3_cilling');
        this.r3_cilling.anchor.setTo(0.5);
        this.room1_grp.add(this.r3_cilling);

           
        this.r3_wall0001 = game.add.sprite(252,248.5,'r3_wall000'+Main.r3_Flag[0]);
        this.r3_wall0001.anchor.setTo(0.5);
        this.r3_wall0001.alpha = Main.r3_Alpha[0];
        this.room1_grp.add(this.r3_wall0001);

          
        this.r3_wallpapers0001 = game.add.sprite(252,248.5,'r3_wallpapers000'+Main.r3_Flag[1]);
        this.r3_wallpapers0001.anchor.setTo(0.5);
        this.r3_wallpapers0001.alpha = Main.r3_Alpha[1];
        this.room1_grp.add(this.r3_wallpapers0001);

      
        this.r3_table = game.add.sprite(76,413,'r3_table');
        this.r3_table.anchor.setTo(0.5);
        this.room1_grp.add(this.r3_table);

        this.r3_table_light = game.add.sprite(65.5,296,'r3_table_light');
        this.r3_table_light.anchor.setTo(0.5);
        this.room1_grp.add(this.r3_table_light);
   
        this.r3_cat0001 = game.add.sprite(252,436.5,'r3_cat000'+Main.r3_Flag[3]);
        this.r3_cat0001.anchor.setTo(0.5);
        this.r3_cat0001.alpha = Main.r3_Alpha[3];
        this.room1_grp.add(this.r3_cat0001);

        this.r3_celing_light0001 = game.add.sprite(227,135.5,'r3_celing_light000'+Main.r3_Flag[4]);
        this.r3_celing_light0001.anchor.setTo(0.5);
        this.r3_celing_light0001.alpha = Main.r3_Alpha[4];
        this.room1_grp.add(this.r3_celing_light0001);


        this.i_panel = game.add.sprite(252,722,'i_panel');
        this.i_panel.anchor.setTo(0.5);
        this.icone_grp= game.add.group();

        this.icone_grp1 = game.add.group();
        
        this.icon1 = game.add.sprite(120.65,724.35,'r3_icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1_cnt1 = 1;
        this.icon1.inputEnabled = true;
        this.icon1.input.useHandCursor = true;
        this.icon1.events.onInputOver.add(this.btnOver, this);
        this.icon1.events.onInputOut.add(this.btnOut, this);
        this.icon1.events.onInputDown.add(function(){


        this.r3_wall0001.alpha = 1;
        this.icon1_cnt1 ++;
        Main.r3_Flag[0]=   this.icon1_cnt1;
               Main.r3_Alpha[0]=1;



        this.r3_wall0001.loadTexture('r3_wall000'+this.icon1_cnt1); 
Main.magicstars.play();

        effectssd = game.add.sprite(this.r3_wall0001.x,this.r3_wall0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon1_cnt1>= 8) {
      	this.icon1_cnt1 = 0;
      }

       this.ri[0]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        

        },this);
        this.icone_grp1.add(this.icon1);
        
        this.icon2 = game.add.sprite(249.8,724.35,'r3_icon2');
        this.icon2.anchor.setTo(0.5);
        this.icon2_cnt1 = 1;
        this.icon2.inputEnabled = true;
        this.icon2.input.useHandCursor = true;
        this.icon2.events.onInputOver.add(this.btnOver, this);
        this.icon2.events.onInputOut.add(this.btnOut, this);
        this.icon2.events.onInputDown.add(function(){


        this.r3_wallpapers0001.alpha = 1;
        this.icon2_cnt1 ++;
        Main.r3_Flag[1]=   this.icon2_cnt1;
               Main.r3_Alpha[1]=1;


        this.r3_wallpapers0001.loadTexture('r3_wallpapers000'+this.icon2_cnt1); 
Main.magicstars.play();

        effectssd = game.add.sprite(this.r3_wallpapers0001.x,this.r3_wallpapers0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon2_cnt1>= 8) {
      	this.icon2_cnt1 = 0;
      }

           this.ri[1]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        	
        }
        

        },this);
        this.icone_grp1.add(this.icon2);
        
        this.icon3 = game.add.sprite(378.95,724.35,'r3_icon3');
        this.icon3.anchor.setTo(0.5);
        this.icon3_cnt1 = 1;
        this.icon3.inputEnabled = true;
        this.icon3.input.useHandCursor = true;
        this.icon3.events.onInputOver.add(this.btnOver, this);
        this.icon3.events.onInputOut.add(this.btnOut, this);
        this.icon3.events.onInputDown.add(function(){


        this.r3_floor0001.alpha = 1;
        this.icon3_cnt1 ++;
        Main.r3_Flag[2]=   this.icon3_cnt1;

               Main.r3_Alpha[2]=1;

        this.r3_floor0001.loadTexture('r3_floor000'+this.icon3_cnt1); 
Main.magicstars.play();

        effectssd = game.add.sprite(this.r3_floor0001.x,this.r3_floor0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon3_cnt1>= 8) {
      	this.icon3_cnt1 = 0;
      }
        
     this.ri[2]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        },this);
        this.icone_grp1.add(this.icon3);


        this.icone_grp2 = game.add.group();
        
        this.icon4 = game.add.sprite(120.65,724.35,'r3_icon4');
        this.icon4.anchor.setTo(0.5);
        this.icon4_cnt1 = 1;
        this.icon4.inputEnabled = true;
        this.icon4.input.useHandCursor = true;
        this.icon4.events.onInputOver.add(this.btnOver, this);
        this.icon4.events.onInputOut.add(this.btnOut, this);
        this.icon4.events.onInputDown.add(function(){
        this.icon4_cnt1 ++;


        this.r3_cat0001.alpha = 1;
        Main.r3_Flag[3]=   this.icon4_cnt1;

               Main.r3_Alpha[2]=1;

        this.r3_cat0001.loadTexture('r3_cat000'+this.icon4_cnt1); 
Main.magicstars.play();

        effectssd = game.add.sprite(this.r3_cat0001.x,this.r3_cat0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon4_cnt1>= 8) {
      	this.icon4_cnt1 = 0;
      }
        
     this.ri[3]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        },this);
        this.icone_grp2.add(this.icon4);

        this.icon5 = game.add.sprite(249.8,724.35,'r3_icon5');
        this.icon5.anchor.setTo(0.5);
        this.icon5_cnt1 = 1;
        this.icon5.inputEnabled = true;
        this.icon5.input.useHandCursor = true;
        this.icon5.events.onInputOver.add(this.btnOver, this);
        this.icon5.events.onInputOut.add(this.btnOut, this);
        this.icon5.events.onInputDown.add(function(){
        this.icon5_cnt1 ++;


        this.r3_celing_light0001.alpha = 1;
        Main.r3_Flag[4]=   this.icon5_cnt1;

               Main.r3_Alpha[4]=1;

        this.r3_celing_light0001.loadTexture('r3_celing_light000'+this.icon5_cnt1); 
Main.magicstars.play();

        effectssd = game.add.sprite(this.r3_celing_light0001.x,this.r3_celing_light0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon5_cnt1>= 8) {
      	this.icon5_cnt1 = 0;
      }
             this.ri[4]=1;
        if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }

        },this);
        this.icone_grp2.add(this.icon5);

        this.icon6 = game.add.sprite(378.95,724.35,'r3_icon6');
        this.icon6.anchor.setTo(0.5);
        this.icon6_cnt1 = 0;
        this.icon6.inputEnabled = true;
        this.icon6.input.useHandCursor = true;
        this.icon6.events.onInputOver.add(this.btnOver, this);
        this.icon6.events.onInputOut.add(this.btnOut, this);
        this.icon6.events.onInputDown.add(function(){
        this.icon6_cnt1 ++;


        this.r3_mat0001.alpha = 1;
        Main.r3_Flag[5]=   this.icon6_cnt1;

               Main.r3_Alpha[5]=1;

        this.r3_mat0001.loadTexture('r3_mat000'+this.icon6_cnt1); 
            Main.magicstars.play();

        effectssd = game.add.sprite(this.r3_mat0001.x,this.r3_mat0001.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
      if (this.icon6_cnt1>= 8) {
      	this.icon6_cnt1 = 0;
      }
        
     this.ri[5]=1;
if(this.ri.indexOf(0)<0){
         game.add.tween(this.playbtn).to({x:431.4},800,Phaser.Easing.Quadratic.Out,true);
        
        }
        },this);
        this.icone_grp2.add(this.icon6);

        this.next_btn = game.add.sprite(470,725,'next_btn');
        this.next_btn.anchor.setTo(0.5);
        this.next_btn.scale.setTo(1.3);
        this.next_btn.inputEnabled = true;
        this.next_btn.input.useHandCursor = true;
        this.next_btn.events.onInputOver.add(this.btnOver, this);
        this.next_btn.events.onInputOut.add(this.btnOut, this);
        this.next_btn.events.onInputDown.add(function(){


          this.icone_grp1.visible = false;
          this.next_btn.visible = false;

          this.icone_grp2.visible = true;
          this.back_btn.visible = true;
        

        },this);
        
        this.back_btn = game.add.sprite(35,720,'back_btn');
        this.back_btn.anchor.setTo(0.5);
        this.back_btn.scale.setTo(1.3);
        this.back_btn.inputEnabled = true;
        this.back_btn.input.useHandCursor = true;
        this.back_btn.events.onInputOver.add(this.btnOver, this);
        this.back_btn.events.onInputOut.add(this.btnOut, this);
        this.back_btn.events.onInputDown.add(function(){


          this.icone_grp1.visible = true;
          this.next_btn.visible = true;

          this.icone_grp2.visible = false;
          this.back_btn.visible = false;
        

        },this);

        this.icone_grp.add(this.icone_grp1)
        this.icone_grp.add(this.icone_grp2)
        
    
          this.icone_grp2.visible = false;
          this.back_btn.visible = false;
        
         this.morebtn = game.add.sprite(75.55,600,'btns0004');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(1431.4,600,'btns0002');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;        
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
         this.playbtn2 = game.add.sprite(431.4,1740,'btns0001');
         this.playbtn2.anchor.setTo(0.5);
         this.playbtn2.inputEnabled = true;
         this.playbtn2.input.useHandCursor = true;        
         this.playbtn2.events.onInputUp.add(this.enterRoom2, this);
         this.playbtn2.events.onInputOver.add(this.btnOver, this);
         this.playbtn2.events.onInputOut.add(this.btnOut, this);

             this.thumbGroup=game.add.group();
            game.load.crossOrigin='*';
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
        this.thumbGroup.y=150;
         
    
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutter');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true)
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
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","gameover","thumb",RelatedGames[this.randomId]['id']);
},   
openLink:function()
{
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","more");
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
    this.icone_grp.visible = false;
    this.playbtn2.y = 740;
    this.morebtn.y = 740;
    this.playbtn.y = 1740;
     game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);

     game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

   
         },this);
         },this);
   
   },

      enterRoom2:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('intro');  

   Main. r1_Flag = [3,1,1,1,1,1];
   Main.r1_Alpha = [1,0,0,1,1,0];

   Main.r2_Flag = [1,1,1,1,1];
   Main.r2_Alpha = [0,0,1,0,0];

   Main.r3_Flag = [1,1,1,1,1,1];
   Main.r3_Alpha = [1,0,1,1,0,0]; 
         });
   
   },
}


//sssssssssssssssss
Main.selaction = function(){}

Main.selaction.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.s_bg = game.add.sprite(0,0,'i_bg');
        this.levelGroup.add(this.s_bg);

        this.s_text = game.add.sprite(253.5,80,'s_text');
        this.s_text.anchor.setTo(0.5);
        this.s_text.scale.setTo(0.85);

        this.s1_text = game.add.sprite(340,181.9,'s1_text');
        this.s1_text.anchor.setTo(0.5);
        
        this.s1 = game.add.sprite(120,199,'s1');
        this.s1.anchor.setTo(0.5);
        this.s1.inputEnabled = true;
        this.s1.input.useHandCursor = true;
        this.s1.events.onInputOver.add(function(){
        	this.s1.frame = 1;
        },this);
        this.s1.events.onInputOut.add(function(){
        	this.s1.frame = 0;

        },this); 
        this.s1.events.onInputDown.add(function(){

        	  game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('r3');  
           },this);

        },this);

        this.s2_text = game.add.sprite(155,393.95,'s2_text');
        this.s2_text.anchor.setTo(0.5);
        
        this.s2 = game.add.sprite(387,388.55,'s1');
        this.s2.anchor.setTo(0.5);
        this.s2.inputEnabled = true;
        this.s2.input.useHandCursor = true;
        this.s2.events.onInputOver.add(function(){
        	this.s2.frame = 2;
        },this);
        this.s2.events.onInputOut.add(function(){
        	this.s2.frame = 0;

        },this); 
        this.s2.events.onInputDown.add(function(){

        	  game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
               game.state.start('r1');  
           },this);

        },this);



        this.s3_text = game.add.sprite(342.9,583,'s3_text');
        this.s3_text.anchor.setTo(0.5);
        
        this.s3 = game.add.sprite(119,573.6,'s1');
        this.s3.anchor.setTo(0.5);
        this.s3.inputEnabled = true;
        this.s3.input.useHandCursor = true;
        this.s3.events.onInputOver.add(function(){
        	this.s3.frame = 3;
        },this);
        this.s3.events.onInputOut.add(function(){
        	this.s3.frame = 0;

        },this); 
        this.s3.events.onInputDown.add(function(){

        	  game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
               game.state.start('r2');  
           },this);

        },this);

        

         this.morebtn = game.add.sprite(265.6,733.5,'btns0004');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
        
                  
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutter');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true)
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
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Which-Is-Your-Favorite-Bedroom-Style","game","more");
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

   btnOver1:function(items){

   	this.s1.frame = 1;
  this.s1.scale.setTo(this.s1.scale.x+0.05);
      effectVar = game.add.sprite(this.s1.x-30,this.s1.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut1:function(items){
    this.s1.scale.setTo(this.s1.scale.x-0.05);
   	this.s1.frame = 0;

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}






game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('intro', Main.intro);
game.state.add('title', Main.title);
game.state.add('r1', Main.r1);
game.state.add('r2', Main.r2);
game.state.add('r3', Main.r3);
game.state.add('selaction', Main.selaction);

game.state.start('boot');