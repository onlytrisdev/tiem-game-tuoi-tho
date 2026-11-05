var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
   music:null,
    makeupCount:[],
   applyCount:[1,1,1,0,0,0],
   
    color_111X:[190,200,220,240,320,340,360,380],
     color_111Y:[260,260,260,260,280,270,270,270],

    color_666X:[190,195,200,205,210,215,320,325,330,340,350,355],
    color_666Y:[340,340,360,360,380,380,390,390,370,360,350,350],
   
    color_777X:[190,200,210,220,230,240,310,320,330,340,350,360,375],
    color_777Y:[250,250,250,250,260,265,290,280,280,270,270,270,280],
   
    color_888X:[230,250,270,290,310],
    color_888Y:[380,380,380,380,380],
    
    shutterOn:[true],
};

Main.boot = function() {};
Main.boot.prototype = {
   preload: function(){
      game.stage.backgroundColor = '#b8175f';
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
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
             game.load.spritesheet('soundicon', 'assets/soundicon.png',91,91);
             game.load.image('logo', 'assets/logo.png');
             game.load.spritesheet('effects', 'assets/effects.png',141,134);
             game.load.spritesheet('effectssd', 'assets/efftes012.png',367,335);
             
             game.load.image('makeoverbg', 'assets/makeoverbg.jpg');
             game.load.image('dressupbg', 'assets/dressupbg.jpg');
             game.load.image('titlebg', 'assets/titlebg.jpg');
             game.load.image('introbg', 'assets/introbg.jpg');
             game.load.image('makeup_bg', 'assets/makeup_bg.jpg');
             game.load.image('finalbg', 'assets/finalbg.jpg');
             game.load.image('resetbtn', 'assets/resetbtn.png');
             game.load.image('donebtn', 'assets/donebtn.png');
             game.load.image('playbtn', 'assets/playbtn.png');
             game.load.image('nextbtn', 'assets/nextbtn.png');
             game.load.image('morebtn', 'assets/morebtn.png');
             game.load.image('popup1', 'assets/popup1.png');
             game.load.image('panel', 'assets/tool/panel.png');
             game.load.image('panel1', 'assets/dressup/panel.png');
             game.load.image('makeover_anna', 'assets/makeover/makeover_anna.png');
             game.load.image('pimple', 'assets/makeover/pimple.png');
             game.load.image('fruit', 'assets/makeover/fruit.png');
             game.load.spritesheet('picker', 'assets/tool/picker.png',134,131,10);
             game.load.spritesheet('arrow', 'assets/arrow.png',55,70,20);
             game.load.image('t1', 'assets/tool/t1.png');
             game.load.image('t3', 'assets/tool/t3.png');
             game.load.image('t4', 'assets/tool/t4.png');
             game.load.image('t5', 'assets/tool/t5.png');
             game.load.image('forwardbtn', 'assets/dressup/forwardbtn.png');
             game.load.image('backwardbtn', 'assets/dressup/backwardbtn.png');
             game.load.image('anna_body', 'assets/dressup/anna_body.png');
             game.load.image('anna_hand', 'assets/dressup/anna_hand.png');
             game.load.image('makeup_anna', 'assets/makeup/makeup_anna.png');
             game.load.image('makeup_cupboard', 'assets/makeup/makeup_cupboard.png');
             game.load.image('eye_ball', 'assets/makeup/eye_ball.png');
             game.load.image('anna_firsteyelash', 'assets/makeup/anna_firsteyelash.png');
             game.load.spritesheet('pinkcream1', 'assets/makeover/pinkcream1.png',349,154,20);
             game.load.spritesheet('pinkcream2', 'assets/makeover/pinkcream2.png',90,257,20);
             game.load.spritesheet('pinkcream3', 'assets/makeover/pinkcream3.png',103,264,20);
             game.load.spritesheet('pinkcream4', 'assets/makeover/pinkcream4.png',156,259,20);
             game.load.spritesheet('pinkcream5', 'assets/makeover/pinkcream5.png',277,229,20);
             game.load.spritesheet('pinkcreamalpha', 'assets/makeover/pinkcreamalpha.png',202,227,27);
             game.load.spritesheet('t2', 'assets/tool/t2.png',420,419,17);
             game.load.spritesheet('greencream1', 'assets/makeover/greencream1.png',349,154,20);
             game.load.spritesheet('greencream2', 'assets/makeover/greencream2.png',90,257,20);
             game.load.spritesheet('greencream3', 'assets/makeover/greencream3.png',103,264,20);
             game.load.spritesheet('greencream4', 'assets/makeover/greencream4.png',156,259,20);
             game.load.spritesheet('greencream5', 'assets/makeover/greencream5.png',277,229,20);
             game.load.spritesheet('greencreamalpha', 'assets/makeover/greencreamalpha.png',202,227,27);
             game.load.spritesheet('eyedustani1', 'assets/makeover/eyedustani1.png',230,137,23);
             game.load.spritesheet('eyedustani2', 'assets/makeover/eyedustani2.png',231,132,23);
             game.load.spritesheet('redcream1', 'assets/makeover/redcream1.png',349,154,20);
             game.load.spritesheet('redcream2', 'assets/makeover/redcream2.png',90,257,20);
             game.load.spritesheet('redcream3', 'assets/makeover/redcream3.png',103,264,20);
             game.load.spritesheet('redcream4', 'assets/makeover/redcream4.png',156,259,20);
             game.load.spritesheet('redcream5', 'assets/makeover/redcream5.png',277,229,20);
             game.load.spritesheet('redcreamalpha', 'assets/makeover/redcreamalpha.png',202,227,27);
              game.load.spritesheet('timer', 'assets/makeover/timer.png', 160, 160, 60);   
             for(var i=1;i<=4;i++)
             {
             game.load.image('dust'+i, 'assets/makeover/dust'+i+'.png');  
             game.load.image('makeup_icon'+i, 'assets/makeup/makeup_icon'+i+'.png');  
             game.load.image('makeup_t'+i, 'assets/makeup/t'+i+'.png');  
             game.load.image('anna_line'+i, 'assets/makeup/anna_line00'+i+'.png');  
             }
             for(var i=1;i<=12;i++)
             {
             game.load.image('eyelashdust'+i, 'assets/makeover/eyelash/eyelashdust'+i+'.png');  
             }
             for(var i=1;i<=8;i++)
             {
             game.load.image('tool'+i, 'assets/tool/tool'+i+'.png');  
             }
             for(var i=1;i<=2;i++)
             {
             game.load.image('eyedust'+i, 'assets/makeover/eyedust'+i+'.png');  
             }
             for(var i=1;i<=6;i++)
             {
             game.load.image('icon'+i, 'assets/dressup/icon'+i+'.png');
             game.load.image('anna_eyelash'+i, 'assets/makeup/anna_eyelash000'+i+'.png');  
             game.load.image('eyelash_icon'+i, 'assets/makeup/eyelash_icon'+i+'.png');  
             }
             for(var i=1;i<=5;i++)
             {
             game.load.image('anna_bag'+i, 'assets/dressup/anna_bag000'+i+'.png');  
             game.load.image('anna_chain'+i, 'assets/dressup/anna_chain000'+i+'.png');  
             game.load.image('anna_dress'+i, 'assets/dressup/anna_dress000'+i+'.png');  
             game.load.image('anna_earing'+i, 'assets/dressup/anna_earing000'+i+'.png');  
             game.load.image('anna_hair'+i, 'assets/dressup/anna_hair000'+i+'.png');  
             game.load.image('anna_shoe'+i, 'assets/dressup/anna_shoe000'+i+'.png');  
             game.load.image('blush_icon'+i, 'assets/makeup/blush_icon000'+i+'.png');  
             game.load.image('anna_blush'+i, 'assets/makeup/anna_blush000'+i+'.png');  
             game.load.image('anna_eyeshade'+i, 'assets/makeup/anna_eyeshade000'+i+'.png');  
             game.load.image('eyeshade_icon'+i, 'assets/makeup/eyeshade_icon'+i+'.png');  
             }
             for(var i=1;i<=7;i++)
             {
             game.load.image('anna_lipstic'+i, 'assets/makeup/anna_lipstic000'+i+'.png');  
             game.load.image('lip_icon'+i, 'assets/makeup/lip_icon'+i+'.png');  
             }
             
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
      CreateLinksInGame("Anna-S-Date-Makeover","loading","logo");
   }
}
Main.title = function(){}

Main.title.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0,0,'titlebg');
        this.levelGroup.add(this.bg);
        
         this.morebtn = game.add.sprite(73.45,738.3,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(431.25,738.3,'playbtn');
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
   CreateLinksInGame("Anna-S-Date-Makeover","menu","logo");
},
moreLink:function()
{
   CreateLinksInGame("Anna-S-Date-Makeover","menu","more");
},
btnOver:function(items){
   items.scale.x=1.05;
      items.scale.y=1.05;
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.x=1;
      items.scale.y=1;
   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
   game.state.start('intro');   
   },
}

Main.intro = function(){}

Main.intro.prototype = {
    create:function(){
      this.levelGroup = game.add.group();
      this.introbg = game.add.sprite(0,0,'introbg');
      this.levelGroup.add(this.introbg);
         
         this.morebtn = game.add.sprite(70.45,738.3,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.nextbtn = game.add.sprite(191.25,738.3,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.nextbtn);
         
         this.popup1 = game.add.sprite(250,400 ,'popup1');
         this.popup1.anchor.setTo(0.5);
         this.popup1.scale.setTo(0);
         this.levelGroup.add(this.popup1);
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
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
bringBottons:function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   game.add.tween(this.nextbtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
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
   CreateLinksInGame("Anna-S-Date-Makeover","game","logo");
},
moreLink:function(){
   CreateLinksInGame("Anna-S-Date-Makeover","game","morebutton");
},
btnOver:function(items){
   items.scale.setTo(1.05);
   effectVar = game.add.sprite(items.x-10,items.y-70,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   
},
btnOut:function(items){
   items.scale.setTo(1);
},
removeGlitter:function(evt)
{
          evt.kill();  
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('makeover');   
         });
   
   },
}

Main.makeover = function(){}

Main.makeover.prototype = {
    create:function(){
       game.physics.startSystem(Phaser.Physics.ARCADE);
       this.tool1drag=false;
       this.tool2drag=false;
       this.tool3drag=false;
       this.tool4drag=false;
       this.tool5drag=false;
       this.tool6drag=false;
       this.pickerdrag=false;
       this.pimplecount=1;
       this.eyelashcount=1;
       this.eyecount=1;
        this.levelGroup = game.add.group();
        this.annaGroup = game.add.group();
        this.dustGroup = game.add.group();
        this.pimpleGroup = game.add.group();
        this.eyelashdustGroup = game.add.group();
        this.toolGroup1 = game.add.group();
        this.toolGroup = game.add.group();
        this.toolGroup2 = game.add.group();
        this.toolGroup3 = game.add.group();
        this.rectGroup = game.add.group();
        this.arrowGroup = game.add.group();
        this.pinkcreamGroup = game.add.group();
        this.pinkcreamGroup1 = game.add.group();
        this.greencreamGroup = game.add.group();
        this.greencreamGroup1 = game.add.group();
        this.eyedustGroup = game.add.group();
        this.eyedustGroup1 = game.add.group();
        this.redcreamGroup = game.add.group();
        this.redcreamGroup1 = game.add.group();
        this.cucumberGroup = game.add.group();
        this.fruitGroup = game.add.group();
        this.timerGroup = game.add.group();
        
        this.makeoverbg=game.add.sprite(0,0,'makeoverbg');
        
        this.panel=game.add.sprite(254.5,778.5,'panel');
        this.panel.anchor.setTo(0.5);
        
        this.makeoveranna=game.add.sprite(252.5,981,'makeover_anna');
        this.makeoveranna.anchor.setTo(0.5);
        this.annaGroup.add(this.makeoveranna);
 
 var dustposX=[276.5,281.8,284.5,278.5];       
 var dustposY=[310.5,317.7,306.5,309.5];       
        for(var i=1;i<=4;i++)
        {
         this['dust'+i]=game.add.sprite(dustposX[i-1],dustposY[i-1],'dust'+i);
         this['dust'+i].anchor.setTo(0.5);
         this.dustGroup.add(this['dust'+i]);
        }
 var pimpleposX=[221.45,279.5,333.35,220.65,273.35,307.15,352.9,213.75,269.5,313.7];       
 var pimpleposY=[220.4,234.9,224.75,322.75,303.75,336.15,328.85,374.1,412.55,383.85];       
        for(var i=1;i<=10;i++)
        {
         this['pimple'+i]=game.add.sprite(pimpleposX[i-1],pimpleposY[i-1],'pimple');
         this['pimple'+i].anchor.setTo(0.5);
         this['pimple'+i].events.onInputDown.add(this.pimplefun,this);
         this.pimpleGroup.add(this['pimple'+i]);
        }
 var eyelashposX=[250.3,239.5,228.4,215.45,204.35,195.95,310.5,321.75,333.25,346.35,357.3,364.8];       
 var eyelashposY=[243.6,240.5,237.45,235.15,235.5,239,249.4,248.45,247.45,247.55,249.9,254.8];       
        for(var i=1;i<=12;i++)
        {
         this['eyelashdust'+i]=game.add.sprite(eyelashposX[i-1],eyelashposY[i-1],'eyelashdust'+i);
         this['eyelashdust'+i].anchor.setTo(0.5);
         this['eyelashdust'+i].id=i;
         this['eyelashdust'+i].events.onInputDown.add(this.eyelashfun,this);
         this.eyelashdustGroup.add(this['eyelashdust'+i]);
        }
        
 var eyeposX=[332.7,215.5];       
 var eyeposY=[307.7,295];
 var eyeaniposX=[325,215];       
 var eyeaniposY=[355,347];
 var cucumberposX=[-100,830];       
 var cucumberposY=[270,280];  
        for(var i=1;i<=2;i++)
        {
         this['eyedust'+i]=game.add.sprite(eyeposX[i-1],eyeposY[i-1],'eyedust'+i);
         this['eyedust'+i].anchor.setTo(0.5);
         this['eyedust'+i].events.onInputDown.add(this.eyefun,this);
         this.eyedustGroup.add(this['eyedust'+i]);
         this['eyedustani'+i]=game.add.sprite(eyeaniposX[i-1],eyeaniposY[i-1],'eyedustani'+i);
         this['eyedustani'+i].anchor.setTo(0.5);
         this['eyedustani'+i].visible=false;
         this['eyedustani'+i].animations.add('eyedustani'+i);
         this.eyedustGroup1.add(this['eyedustani'+i]);
         this['cucumber'+i]=game.add.sprite(cucumberposX[i-1],cucumberposY[i-1],'t5');
         this['cucumber'+i].anchor.setTo(0.5);
         this['cucumber'+i].scale.setTo(1.5);
         this['cucumber'+i].events.onInputDown.add(this.cucumberfun,this);
         this.cucumberGroup.add(this['cucumber'+i]);
        }
        
                this.annaGroup.add(this.dustGroup);
                this.annaGroup.add(this.pimpleGroup);
                this.annaGroup.add(this.eyelashdustGroup);
                this.annaGroup.add(this.eyedustGroup);
                this.annaGroup.add(this.eyedustGroup1);
       
   this.tool1=game.add.sprite(67.35,638.55,'tool1');
   this.tool1.anchor.setTo(0.5);
   this.tool1.inputEnabled=true;
   this.tool1.input.useHandCursor=true;
   this.tool1.events.onInputDown.add(this.tool1fun,this);
   this.toolGroup1.add(this.tool1);
   
   this.t1=game.add.sprite(67.35,638.55,'t1');
   this.t1.anchor.setTo(0.5);
   this.t1.visible=false;
   this.toolGroup.add(this.t1);
   
   this.tool2=game.add.sprite(252.4,661.7,'tool2');
   this.tool2.anchor.setTo(0.5);
   this.tool2.events.onInputDown.add(this.tool2fun,this);
   this.toolGroup1.add(this.tool2);
   
   this.t2=game.add.sprite(350,260,'t2');
   this.t2.anchor.setTo(0.5);
   this.t2.animations.add('t2');
   this.t2.visible=false;
   this.toolGroup.add(this.t2);
   
   this.tool3=game.add.sprite(429.7,653.35,'tool3');
   this.tool3.anchor.setTo(0.5);
   this.tool3.events.onInputDown.add(this.tool3fun,this);
   this.toolGroup1.add(this.tool3);
   
   this.tool4=game.add.sprite(66.1,636.3,'tool4');
   this.tool4.anchor.setTo(0.5);
   this.tool4.events.onInputDown.add(this.tool4fun,this);
   this.toolGroup2.add(this.tool4);
   
   this.t3=game.add.sprite(66.1,636.3,'t3');
   this.t3.anchor.setTo(0.5);
   this.t3.visible=false;
   this.toolGroup.add(this.t3);
   
   this.tool5=game.add.sprite(183.7,650,'tool2');
   this.tool5.anchor.setTo(0.5);
   this.tool5.events.onInputDown.add(this.tool5fun,this);
   this.toolGroup2.add(this.tool5);
   
   this.picker=game.add.sprite(321.4,669,'picker');
   this.picker.anchor.setTo(0.5);
   this.picker.animations.add('picker');
   this.picker.events.onInputDown.add(this.pickerfun,this);
   this.toolGroup2.add(this.picker);
  
   this.tool6=game.add.sprite(452.1,619.4,'tool5');
   this.tool6.anchor.setTo(0.5);
   this.tool6.events.onInputDown.add(this.tool6fun,this);
   this.toolGroup2.add(this.tool6); 
   
   this.tool7=game.add.sprite(57.6,636.85,'tool6');
   this.tool7.anchor.setTo(0.5);
   this.tool7.events.onInputDown.add(this.tool7fun,this);
   this.toolGroup3.add(this.tool7);
   
   this.t4=game.add.sprite(57.6,636.85,'t4');
   this.t4.anchor.setTo(0.5);
   this.t4.visible=false;
   this.toolGroup.add(this.t4);
   
   this.tool8=game.add.sprite(185.15,654.25,'tool7');
   this.tool8.anchor.setTo(0.5);
   this.tool8.events.onInputDown.add(this.tool8fun,this);
   this.toolGroup3.add(this.tool8);
   
   this.tool9=game.add.sprite(307.75,661,'tool8');
   this.tool9.anchor.setTo(0.5);
   this.tool9.events.onInputDown.add(this.tool9fun,this);
   this.toolGroup3.add(this.tool9);
  
   this.tool10=game.add.sprite(425.05,636.95,'tool2');
   this.tool10.anchor.setTo(0.5);
   this.tool10.events.onInputDown.add(this.tool10fun,this);
   this.toolGroup3.add(this.tool10);
              
   this.toolGroup2.visible=false;
   this.toolGroup3.visible=false;
   
   this.fruit=game.add.sprite(275,315,'fruit');
   this.fruit.anchor.setTo(0.5);
   this.fruit.alpha=0;
   this.fruitGroup.add(this.fruit);
   
   this.timer=game.add.sprite(-100,720,'timer');
   this.timer.anchor.setTo(0.5);
   this.timer.animations.add('timer');
   this.timerGroup.add(this.timer);
        this.rect1 = game.add.graphics(200,190);
        this.rect1.anchor.setTo(0.5);
        this.rect1.beginFill(0xFFFFFF, 0);
        this.rect1.drawRect(0, 0, 170, 50);
        this.rect1.events.onInputDown.add(this.rect1fun,this);
        this.rectGroup.add(this.rect1);
        
        this.rect2 = game.add.graphics(250,240);
        this.rect2.anchor.setTo(0.5);
        this.rect2.beginFill(0xFFFFFF, 0);
        this.rect2.drawRect(0, 0, 50, 115);
        this.rect2.events.onInputDown.add(this.rect2fun,this);
        this.rectGroup.add(this.rect2);
        
        this.rect3 = game.add.graphics(180,300);
        this.rect3.anchor.setTo(0.5);
        this.rect3.beginFill(0xFFFFFF, 0);
        this.rect3.drawRect(0, 0, 70, 90);
        this.rect3.events.onInputDown.add(this.rect3fun,this);
        this.rectGroup.add(this.rect3);
        
        this.rect4 = game.add.graphics(300,300);
        this.rect4.anchor.setTo(0.5);
        this.rect4.beginFill(0xFFFFFF, 0);
        this.rect4.drawRect(0, 0, 70, 90);
        this.rect4.events.onInputDown.add(this.rect4fun,this);
        this.rectGroup.add(this.rect4);
        
        this.rect5 = game.add.graphics(220,350);
        this.rect5.anchor.setTo(0.5);
        this.rect5.beginFill(0xFFFFFF, 0);
        this.rect5.drawRect(0, 0, 100, 70);
        this.rect5.events.onInputDown.add(this.rect5fun,this);
        this.rectGroup.add(this.rect5);
   
        this.rect6 = game.add.graphics(200,190);
        this.rect6.anchor.setTo(0.5);
        this.rect6.beginFill(0xFFFFFF, 0);
        this.rect6.drawRect(0, 0, 170, 50);
        this.rect6.events.onInputDown.add(this.rect6fun,this);
        this.rectGroup.add(this.rect6);
        
        this.rect7 = game.add.graphics(250,240);
        this.rect7.anchor.setTo(0.5);
        this.rect7.beginFill(0xFFFFFF, 0);
        this.rect7.drawRect(0, 0, 50, 115);
        this.rect7.events.onInputDown.add(this.rect7fun,this);
        this.rectGroup.add(this.rect7);
        
        this.rect8 = game.add.graphics(180,300);
        this.rect8.anchor.setTo(0.5);
        this.rect8.beginFill(0xFFFFFF, 0);
        this.rect8.drawRect(0, 0, 70, 90);
        this.rect8.events.onInputDown.add(this.rect8fun,this);
        this.rectGroup.add(this.rect8);
        
        this.rect9 = game.add.graphics(300,300);
        this.rect9.anchor.setTo(0.5);
        this.rect9.beginFill(0xFFFFFF, 0);
        this.rect9.drawRect(0, 0, 70, 90);
        this.rect9.events.onInputDown.add(this.rect9fun,this);
        this.rectGroup.add(this.rect9);
        
        this.rect10 = game.add.graphics(220,350);
        this.rect10.anchor.setTo(0.5);
        this.rect10.beginFill(0xFFFFFF, 0);
        this.rect10.drawRect(0, 0, 100, 70);
        this.rect10.events.onInputDown.add(this.rect10fun,this);
        this.rectGroup.add(this.rect10);
        
        this.rect11 = game.add.graphics(200,190);
        this.rect11.anchor.setTo(0.5);
        this.rect11.beginFill(0xFFFFFF, 0);
        this.rect11.drawRect(0, 0, 170, 50);
        this.rect11.events.onInputDown.add(this.rect11fun,this);
        this.rectGroup.add(this.rect11);
        
        this.rect12 = game.add.graphics(250,240);
        this.rect12.anchor.setTo(0.5);
        this.rect12.beginFill(0xFFFFFF, 0);
        this.rect12.drawRect(0, 0, 50, 115);
        this.rect12.events.onInputDown.add(this.rect12fun,this);
        this.rectGroup.add(this.rect12);
        
        this.rect13 = game.add.graphics(180,300);
        this.rect13.anchor.setTo(0.5);
        this.rect13.beginFill(0xFFFFFF, 0);
        this.rect13.drawRect(0, 0, 70, 90);
        this.rect13.events.onInputDown.add(this.rect13fun,this);
        this.rectGroup.add(this.rect13);
        
        this.rect14 = game.add.graphics(300,300);
        this.rect14.anchor.setTo(0.5);
        this.rect14.beginFill(0xFFFFFF, 0);
        this.rect14.drawRect(0, 0, 70, 90);
        this.rect14.events.onInputDown.add(this.rect14fun,this);
        this.rectGroup.add(this.rect14);
        
        this.rect15 = game.add.graphics(220,350);
        this.rect15.anchor.setTo(0.5);
        this.rect15.beginFill(0xFFFFFF, 0);
        this.rect15.drawRect(0, 0, 100, 70);
        this.rect15.events.onInputDown.add(this.rect15fun,this);
        this.rectGroup.add(this.rect15);
        
   this.arrow=game.add.sprite(80,570,'arrow');
   this.arrow.anchor.setTo(0.5);
   this.arrow.animations.add('arrow');
   this.arrow.animations.play('arrow',15,true);
   this.arrowGroup.add(this.arrow);
   
   var pinkcreamposX=[345,295,215,340,322];
   var pinkcreamposY=[187,365,410,410,380];
   for(var i=1;i<=5;i++)
   {
      this['pinkcream'+i]=game.add.sprite(pinkcreamposX[i-1],pinkcreamposY[i-1],'pinkcream'+i);
      this['pinkcream'+i].anchor.setTo(0.5);
      this['pinkcream'+i].visible=false;
      this['pinkcream'+i].animations.add('pinkcream'+i);
      this.pinkcreamGroup.add(this['pinkcream'+i]);
   }
   this.pinkcreamalpha=game.add.sprite(277,311,'pinkcreamalpha');
   this.pinkcreamalpha.anchor.setTo(0.5);
   this.pinkcreamalpha.scale.setTo(1.01);
   this.pinkcreamalpha.animations.add('pinkcreamalpha');
   this.pinkcreamGroup1.add(this.pinkcreamalpha);
   
      this.pinkcreamGroup1.visible=false;
      
   for(var i=1;i<=5;i++)
   {
      this['greencream'+i]=game.add.sprite(pinkcreamposX[i-1],pinkcreamposY[i-1],'greencream'+i);
      this['greencream'+i].anchor.setTo(0.5);
      this['greencream'+i].visible=false;
      this['greencream'+i].animations.add('greencream'+i);
      this.greencreamGroup.add(this['greencream'+i]);
   }
   this.greencreamalpha=game.add.sprite(277,311,'greencreamalpha');
   this.greencreamalpha.anchor.setTo(0.5);
   this.greencreamalpha.scale.setTo(1.01);
   this.greencreamalpha.animations.add('greencreamalpha');
   this.greencreamGroup1.add(this.greencreamalpha);
   
      this.greencreamGroup1.visible=false;

      for(var i=1;i<=5;i++)
   {
      this['redcream'+i]=game.add.sprite(pinkcreamposX[i-1],pinkcreamposY[i-1],'redcream'+i);
      this['redcream'+i].anchor.setTo(0.5);
      this['redcream'+i].visible=false;
      this['redcream'+i].animations.add('redcream'+i);
      this.redcreamGroup.add(this['redcream'+i]);
   }
   this.redcreamalpha=game.add.sprite(277,311,'redcreamalpha');
   this.redcreamalpha.anchor.setTo(0.5);
   this.redcreamalpha.scale.setTo(1.01);
   this.redcreamalpha.animations.add('redcreamalpha');
   this.redcreamGroup1.add(this.redcreamalpha);
   
      this.redcreamGroup1.visible=false;
      
         this.morebtn = game.add.sprite(73.45,738.3,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         
         this.donebtn = game.add.sprite(431.25,738.3,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.visible=false;
         this.donebtn.alpha=0;
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
        
                this.levelGroup.add(this.makeoverbg);
                this.levelGroup.add(this.annaGroup);
                this.levelGroup.add(this.panel);
                this.levelGroup.add(this.pinkcreamGroup1);
                this.levelGroup.add(this.greencreamGroup1);
                this.levelGroup.add(this.redcreamGroup1);
                this.levelGroup.add(this.toolGroup1);
                this.levelGroup.add(this.toolGroup2);
                this.levelGroup.add(this.toolGroup3);
                this.levelGroup.add(this.rectGroup);
                this.levelGroup.add(this.pinkcreamGroup);
                this.levelGroup.add(this.greencreamGroup);
                this.levelGroup.add(this.redcreamGroup);
                this.levelGroup.add(this.toolGroup);
                this.levelGroup.add(this.arrowGroup);
        this.levelGroup.add(this.donebtn);
                 this.levelGroup.add(this.morebtn);
 
 if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true);
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
tool1fun:function()
{
   this.t1.visible=true;
   this.tool1.inputEnabled=false;
   this.tool1.input.useHandCursor=false;
   this.rect1.inputEnabled=true;
   this.rect1.input.useHandCursor=true;
   this.arrow.angle=-30;
   this.arrow.x=this.rect1.x-20;
   this.arrow.y=this.rect1.y;
   this.tool1drag=true;
   },
rect1fun:function()
{
   this.rect1.inputEnabled=false;
   this.rect1.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t1.visible=false;
   this.pinkcream1.visible=true;
   this.pinkcream1.animations.play('pinkcream1',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t1.visible=true;
      this.arrow.x=this.rect2.x;
      this.arrow.y=this.rect2.y;
      this.rect2.inputEnabled=true;
      this.rect2.input.useHandCursor=true;
      },this);

   },
rect2fun:function()
{
   this.rect2.inputEnabled=false;
   this.rect2.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t1.visible=false;
   this.pinkcream2.visible=true;
   this.pinkcream2.animations.play('pinkcream2',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t1.visible=true;
      this.arrow.x=this.rect3.x;
      this.arrow.y=this.rect3.y;
      this.rect3.inputEnabled=true;
      this.rect3.input.useHandCursor=true;
      },this);
   },
rect3fun:function()
{
   this.rect3.inputEnabled=false;
   this.rect3.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t1.visible=false;
   this.pinkcream3.visible=true;
   this.pinkcream3.animations.play('pinkcream3',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t1.visible=true;
      this.arrow.x=this.rect4.x;
      this.arrow.y=this.rect4.y;
      this.rect4.inputEnabled=true;
      this.rect4.input.useHandCursor=true;
      },this);
   },
rect4fun:function()
{
   this.rect4.inputEnabled=false;
   this.rect4.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t1.visible=false;
   this.pinkcream4.visible=true;
   this.pinkcream4.animations.play('pinkcream4',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t1.visible=true;
      this.arrow.x=this.rect5.x;
      this.arrow.y=this.rect5.y;
      this.rect5.inputEnabled=true;
      this.rect5.input.useHandCursor=true;
      },this);
   },
rect5fun:function()
{
   this.rect5.inputEnabled=false;
   this.rect5.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t1.kill();
   this.pinkcream5.visible=true;
   this.pinkcream5.animations.play('pinkcream5',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.arrow.angle=0;
      this.arrow.x=this.tool2.x;
      this.arrow.y=this.tool2.y-50;
      this.tool2.inputEnabled=true;
      this.tool2.input.useHandCursor=true;
            this.pinkcreamGroup1.visible=true;
      this.pinkcreamGroup.visible=false;

      },this);
   },
tool2fun:function()
{
   this.tool2.inputEnabled=false;
   this.tool2.input.useHandCursor=false;
   this.tool2drag=true;
   this.arrow.angle=-30;
   this.arrow.x=this.rect1.x+50;
   this.arrow.y=this.rect1.y;
   this.rect1.inputEnabled=true;
   this.rect1.input.useHandCursor=true;
   this.rect1.events.onInputDown.removeAll();
   this.rect1.events.onInputDown.add(this.rectfun1,this);
   },
rectfun1:function()
{
   this.rect1.inputEnabled=false;
   this.rect1.input.useHandCursor=false;
   this.arrow.visible=false;
   this.tool2.visible=false;
   this.t2.visible=true;
   this.tool2drag=false;
      this.pinkcreamalpha.animations.play('pinkcreamalpha',10,false);
      game.add.tween(this.dust1).to({alpha:0},500,"Linear",true);
   this.t2.animations.play('t2',5,false).onComplete.add(function(){
         this.tool2.visible=true;
            this.arrow.visible=true;
         this.tool2.angle=0;
this.tool2.x=252.4;
this.tool2.y=661.7;
      this.arrow.angle=0;
      this.arrow.x=this.tool3.x;
      this.arrow.y=this.tool3.y-50;
   this.tool3.inputEnabled=true;
   this.tool3.input.useHandCursor=true;
      },this);
   },
tool3fun:function()
{
   this.tool3.inputEnabled=false;
   this.tool3.input.useHandCursor=false;
   this.tool3drag=true;
   this.arrow.angle=-90;
   this.arrow.x=this['pimple'+this.pimplecount].x-35;
   this.arrow.y=this['pimple'+this.pimplecount].y;
   this['pimple'+this.pimplecount].inputEnabled=true;
   this['pimple'+this.pimplecount].input.useHandCursor=true;
   },
pimplefun:function()
{
   this.arrow.visible=false;
   this['pimple'+this.pimplecount].inputEnabled=false;
   this['pimple'+this.pimplecount].input.useHandCursor=false;
   game.add.tween(this['pimple'+this.pimplecount]).to({alpha:0},700,"Linear",true).onComplete.add(function(){
      this['pimple'+this.pimplecount].kill();
      this.pimplecount++;
      if (this.pimplecount!=11) {
      this.arrow.visible=true;
      this.arrow.x=this['pimple'+this.pimplecount].x-35;
   this.arrow.y=this['pimple'+this.pimplecount].y;
      this['pimple'+this.pimplecount].inputEnabled=true;
   this['pimple'+this.pimplecount].input.useHandCursor=true;
      }
      else
      {
         this.tool3drag=false;
       game.add.tween(this.tool3).to({x:429.7,y:653.35},300,"Linear",true).onComplete.add(function(){
                        this.tool3.angle=0;
               game.time.events.add(1000,function(){ 
               this.arrow.angle=0;
   this.arrow.visible=true;
   this.toolGroup1.visible=false;
   this.toolGroup2.visible=true;
   this.arrow.x=this.tool4.x;
   this.arrow.y=this.tool4.y-65;
           this.tool4.inputEnabled=true;   
           this.tool4.input.useHandCursor=true;   
               },this);
               },this);

      }
      },this);
  },
tool4fun:function()
{
   this.t3.visible=true;
   this.tool4.inputEnabled=false;
   this.tool4.input.useHandCursor=false;
   this.rect6.inputEnabled=true;
   this.rect6.input.useHandCursor=true;
   this.arrow.angle=-30;
   this.arrow.x=this.rect6.x-20;
   this.arrow.y=this.rect6.y;
   this.tool4drag=true;
   },
rect6fun:function()
{
   this.rect6.inputEnabled=false;
   this.rect6.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t3.visible=false;
   this.greencream1.visible=true;
   this.greencream1.animations.play('greencream1',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t3.visible=true;
      this.arrow.x=this.rect7.x;
      this.arrow.y=this.rect7.y;
      this.rect7.inputEnabled=true;
      this.rect7.input.useHandCursor=true;
      },this);

   },
rect7fun:function()
{
   this.rect7.inputEnabled=false;
   this.rect7.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t3.visible=false;
   this.greencream2.visible=true;
   this.greencream2.animations.play('greencream2',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t3.visible=true;
      this.arrow.x=this.rect8.x;
      this.arrow.y=this.rect8.y;
      this.rect8.inputEnabled=true;
      this.rect8.input.useHandCursor=true;
      },this);
   },
rect8fun:function()
{
   this.rect8.inputEnabled=false;
   this.rect8.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t3.visible=false;
   this.greencream3.visible=true;
   this.greencream3.animations.play('greencream3',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t3.visible=true;
      this.arrow.x=this.rect9.x;
      this.arrow.y=this.rect9.y;
      this.rect9.inputEnabled=true;
      this.rect9.input.useHandCursor=true;
      },this);
   },
rect9fun:function()
{
   this.rect9.inputEnabled=false;
   this.rect9.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t3.visible=false;
   this.greencream4.visible=true;
   this.greencream4.animations.play('greencream4',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t3.visible=true;
      this.arrow.x=this.rect10.x;
      this.arrow.y=this.rect10.y;
      this.rect10.inputEnabled=true;
      this.rect10.input.useHandCursor=true;
      },this);
   },
rect10fun:function()
{
   this.rect10.inputEnabled=false;
   this.rect10.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t3.kill();
   this.greencream5.visible=true;
   this.greencream5.animations.play('greencream5',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.arrow.angle=0;
      this.arrow.x=this.tool5.x;
      this.arrow.y=this.tool5.y-50;
      this.tool5.inputEnabled=true;
      this.tool5.input.useHandCursor=true;
      this.greencreamGroup1.visible=true;
      this.greencreamGroup.visible=false;
      },this);
   },
tool5fun:function()
{
   console.log('hi');
   this.tool5.inputEnabled=false;
   this.tool5.input.useHandCursor=false;
   this.tool5drag=true;
   this.arrow.angle=-30;
   this.arrow.x=this.rect6.x+50;
   this.arrow.y=this.rect6.y;
   this.rect6.inputEnabled=true;
   this.rect6.input.useHandCursor=true;
   this.rect6.events.onInputDown.removeAll();
   this.rect6.events.onInputDown.add(this.rectfun2,this);
   },
rectfun2:function()
{
   this.rect6.inputEnabled=false;
   this.rect6.input.useHandCursor=false;
   this.arrow.visible=false;
   this.tool5.visible=false;
   this.t2.visible=true;
   this.tool5drag=false;
      this.greencreamalpha.animations.play('greencreamalpha',10,false);
      game.add.tween(this.dust2).to({alpha:0},500,"Linear",true);
      game.add.tween(this.dust3).to({alpha:0},500,"Linear",true);
   this.t2.animations.play('t2',5,false).onComplete.add(function(){
         this.tool5.visible=true;
            this.arrow.visible=true;
         this.tool5.angle=0;
this.tool5.x=183.7;
this.tool5.y=650;
      this.arrow.angle=0;
      this.arrow.x=this.picker.x;
      this.arrow.y=this.picker.y-50;
   this.picker.inputEnabled=true;
   this.picker.input.useHandCursor=true;
      },this);
   },
pickerfun:function()
{
   this.arrow.angle=-60;
   this.arrow.x=this.eyelashdust3.x-60;
   this.arrow.y=this.eyelashdust3.y;
   this.picker.inputEnabled=false;
   this.picker.input.useHandCursor=false;
   this.pickerdrag=true;
    for(var i=1;i<=12;i++)
        {
         this['eyelashdust'+i].inputEnabled=true;
         this['eyelashdust'+i].input.useHandCursor=true;
        }
},
eyelashfun:function(evt)
{
      this.arrow.visible=false;
   this['eyelashdust'+evt.id].kill();
   this.picker.animations.play('picker',30,true);
      this.eyelashcount++;
if(this.eyelashcount==13)
{
   this.picker.animations.stop();
      this.pickerdrag=false;
      game.add.tween(this.picker).to({x:321.4,y:669},300,"Linear",true).onComplete.add(function(){
               this.arrow.visible=true;
this.arrow.angle=0;
this.picker.angle=0;
this.arrow.x=this.tool6.x;
this.arrow.y=this.tool6.y-90;
this.tool6.inputEnabled=true;
this.tool6.input.useHandCursor=true;
         },this);
}
},
tool6fun:function()
{
   this.tool6.inputEnabled=false;
   this.tool6.input.useHandCursor=false;
   this.tool6drag=true;
   this.arrow.angle=50;
   console.log(this.eyecount);
   this.arrow.x= this['eyedust'+this.eyecount].x+50;
   this.arrow.y= this['eyedust'+this.eyecount].y-30;
   this['eyedust'+this.eyecount].inputEnabled=true;
   this['eyedust'+this.eyecount].input.useHandCursor=true;
   },
eyefun:function()
{
      console.log(this.eyecount);
      this.arrow.visible=false;
   this['eyedust'+this.eyecount].inputEnabled=false;
   this['eyedust'+this.eyecount].input.useHandCursor=false;
   this['eyedustani'+this.eyecount].visible=true;
   this.tool6.visible=false;
   this['eyedustani'+this.eyecount].animations.play('eyedustani'+this.eyecount,10,false).onComplete.add(function(){
      game.add.tween(this['eyedustani'+this.eyecount]).to({alpha:0},600,"Linear",true);
      game.add.tween(this['eyedust'+this.eyecount]).to({alpha:0},600,"Linear",true).onComplete.add(function(){
      this.eyecount++;
       if (this.eyecount!=3) {
      this.arrow.visible=true;
         this.tool6.visible=true;
         this.arrow.angle=-50;
      this.arrow.x=this['eyedust'+this.eyecount].x-55;
   this.arrow.y=this['eyedust'+this.eyecount].y-20;
      this['eyedust'+this.eyecount].inputEnabled=true;
   this['eyedust'+this.eyecount].input.useHandCursor=true;
      }
      else
      {
         this.tool6drag=false;
         this.tool6.visible=true;
         this.tool6.x=452.1;
         this.tool6.y=619.4;
                        this.tool6.angle=0;
               game.time.events.add(1000,function(){ 
               this.arrow.angle=0;
   this.arrow.visible=true;
   this.toolGroup2.visible=false;
   this.toolGroup3.visible=true;
   this.arrow.x=this.tool7.x;
   this.arrow.y=this.tool7.y-65;
           this.tool7.inputEnabled=true;   
           this.tool7.input.useHandCursor=true;   
               },this);
      }
      },this);
      },this);
   },
tool7fun:function()
{
   this.tool7.inputEnabled=false;   
   this.tool7.input.useHandCursor=false;
   this.t4.visible=true;
   this.tool7drag=true;
   this.rect11.inputEnabled=true;
   this.rect11.input.useHandCursor=true;
   this.arrow.angle=-30;
   this.arrow.x=this.rect11.x-20;
   this.arrow.y=this.rect11.y;
   },
rect11fun:function()
{
   this.rect11.inputEnabled=false;
   this.rect11.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t4.visible=false;
   this.redcream1.visible=true;
   this.redcream1.animations.play('redcream1',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t4.visible=true;
      this.arrow.x=this.rect12.x;
      this.arrow.y=this.rect12.y;
      this.rect12.inputEnabled=true;
      this.rect12.input.useHandCursor=true;
      },this);
   },
rect12fun:function()
{
   this.rect12.inputEnabled=false;
   this.rect12.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t4.visible=false;
   this.redcream2.visible=true;
   this.redcream2.animations.play('redcream2',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t4.visible=true;
      this.arrow.x=this.rect13.x;
      this.arrow.y=this.rect13.y;
      this.rect13.inputEnabled=true;
      this.rect13.input.useHandCursor=true;
      },this);
   },
rect13fun:function()
{
   this.rect13.inputEnabled=false;
   this.rect13.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t4.visible=false;
   this.redcream3.visible=true;
   this.redcream3.animations.play('redcream3',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t4.visible=true;
      this.arrow.x=this.rect14.x;
      this.arrow.y=this.rect14.y;
      this.rect14.inputEnabled=true;
      this.rect14.input.useHandCursor=true;
      },this);
   },
rect14fun:function()
{
   this.rect14.inputEnabled=false;
   this.rect14.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t4.visible=false;
   this.redcream4.visible=true;
   this.redcream4.animations.play('redcream4',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.t4.visible=true;
      this.arrow.x=this.rect15.x;
      this.arrow.y=this.rect15.y;
      this.rect15.inputEnabled=true;
      this.rect15.input.useHandCursor=true;
      },this);
   },
rect15fun:function()
{
   this.rect15.inputEnabled=false;
   this.rect15.input.useHandCursor=false;
   this.arrow.visible=false;
   this.t4.kill();
   this.redcream5.visible=true;
   this.redcream5.animations.play('redcream5',20,false).onComplete.add(function(){
      this.arrow.visible=true;
      this.arrow.angle=0;
      this.arrow.x=this.tool8.x;
      this.arrow.y=this.tool8.y-70;
      this.tool8.inputEnabled=true;
      this.tool8.input.useHandCursor=true;
      this.redcreamGroup1.visible=true;
      this.redcreamGroup.visible=false;
      },this);
   },
tool8fun:function()
{
   this.tool8.inputEnabled=false;
      this.tool8.input.useHandCursor=false;
   this.arrow.visible=false;
 game.add.tween(this.cucumber1).to({x:220,y:270},1000,"Linear",true);
 game.add.tween(this.cucumber2).to({x:330,y:280},1000,"Linear",true).onComplete.add(function(){
   this.arrow.visible=true;
   this.arrow.x=this.tool9.x;
   this.arrow.y=this.tool9.y-50;
   this.tool9.inputEnabled=true;
   this.tool9.input.useHandCursor=true;
         },this);
   },
tool9fun:function()
{
      this.arrow.visible=false;
   this.tool9.inputEnabled=false;
   this.tool9.input.useHandCursor=false;
   game.add.tween(this.fruit).to({alpha:1},1500,"Linear",true).onComplete.add(function(){
      game.add.tween(this.timer).to({x:250,y:720},500,"Linear",true).onComplete.add(function(){
         this.timer.animations.play('timer',10,false).onComplete.add(function(){
        game.add.tween(this.timer).to({x:-100,y:720},500,"Linear",true).onComplete.add(function(){
         this.arrow.visible=true;
         this.arrow.angle=-60;
         this.arrow.x=this.cucumber1.x-70;
         this.arrow.y=this.cucumber1.y-30;
         this.cucumber1.inputEnabled=true;
         this.cucumber1.input.useHandCursor=true;
         },this);
         },this);
         },this);
      },this);
   },
cucumberfun:function()
   {
         this.arrow.visible=false;
      game.add.tween(this.cucumber1).to({x:-100,y:270},1000,"Linear",true);
 game.add.tween(this.cucumber2).to({x:880,y:280},1000,"Linear",true);
   game.add.tween(this.fruit).to({alpha:0},1500,"Linear",true).onComplete.add(function(){
   this.arrow.visible=true;
   this.arrow.angle=0;
   this.arrow.x=this.tool10.x;
   this.arrow.y=this.tool10.y-50;
   this.tool10.inputEnabled=true;
   this.tool10.input.useHandCursor=true;
         },this);
      },
tool10fun:function()
{
   this.tool10.inputEnabled=false;
   this.tool10.input.useHandCursor=false;
   this.tool8drag=true;
   this.arrow.angle=-30;
   this.arrow.x=this.rect11.x+50;
   this.arrow.y=this.rect11.y;
   this.rect11.inputEnabled=true;
   this.rect11.input.useHandCursor=true;
   this.rect11.events.onInputDown.removeAll();
   this.rect11.events.onInputDown.add(this.rectfun3,this);
   },
rectfun3:function()
{
   this.rect11.inputEnabled=false;
   this.rect11.input.useHandCursor=false;
   this.arrow.visible=false;
   
   this.tool10.visible=false;
   this.t2.visible=true;
   this.tool8drag=false;
      this.redcreamalpha.animations.play('redcreamalpha',10,false);
      game.add.tween(this.dust4).to({alpha:0},500,"Linear",true);
   this.t2.animations.play('t2',5,false).onComplete.add(function(){
         this.tool10.visible=true;
         this.tool10.angle=0;
         this.arrow.animations.stop();
   this.arrow.kill();
this.tool10.x=425.05;
this.tool10.y=636.95;
//game.time.events.add(500,function(){
     game.add.tween(this.toolGroup3).to({alpha:0},500,"Linear",true).onComplete.add(function(){
    this.donebtn.visible=true;
     game.add.tween(this.donebtn).to({alpha:1},500,"Linear",true);
      },this);
},this)
   },
openLink:function()
{
   CreateLinksInGame("Anna-S-Date-Makeover","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Anna-S-Date-Makeover","game","more");
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('makeup');   
         });
   },
btnOver:function(items){
   items.scale.x=1.05;
      items.scale.y=1.05;
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.x=1;
      items.scale.y=1;
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
update:function()
{
   if (this.tool1drag) {
      this.t1.angle=-120;
    this.t1.x=game.input.activePointer.x+60;
    this.t1.y=game.input.activePointer.y-10;
   }
   if (this.tool2drag) {
      this.tool2.angle=-120;
    this.tool2.x=game.input.activePointer.x+20;
    this.tool2.y=game.input.activePointer.y+60;
   }
   if (this.tool3drag) {
    this.tool3.angle=-90;
    this.tool3.x=game.input.activePointer.x+5;
    this.tool3.y=game.input.activePointer.y+50;
   }
   if (this.tool4drag) {
    this.t3.angle=-120;
    this.t3.x=game.input.activePointer.x+60;
    this.t3.y=game.input.activePointer.y-10;
   }
    if (this.tool5drag) {
      this.tool5.angle=-120;
    this.tool5.x=game.input.activePointer.x+20;
    this.tool5.y=game.input.activePointer.y+60;
   }
   if (this.pickerdrag) {
      this.picker.angle=30;
    this.picker.x=game.input.activePointer.x+60;
    this.picker.y=game.input.activePointer.y+30;
   }
   if (this.tool6drag) {
      this.tool6.angle=-120;
    this.tool6.x=game.input.activePointer.x+45;
    this.tool6.y=game.input.activePointer.y-10;
   }
   if (this.tool7drag) {
    this.t4.angle=-120;
    this.t4.x=game.input.activePointer.x+60;
    this.t4.y=game.input.activePointer.y-10;
   }
   if (this.tool8drag) {
      this.tool10.angle=-120;
    this.tool10.x=game.input.activePointer.x+20;
    this.tool10.y=game.input.activePointer.y+60;
   }
   },
}


Main.makeup = function(){}

Main.makeup.prototype = {
    create:function(){
                     this.stepCount=1;
            //eyeshade
                     this.hitCount = 0;
                     this.hitCount2 = 0;
                     this.hitCount3 = 0;
                     this.hitCount4 = 0;
                     this.hitCount5 = 0;
                     
                this.t1Drag = false;  
                this.t11Drag = false;  
                this.t111Drag = false;  
                this.t1111Drag = false;
                this.t11111Drag = false;
                     
           //eyeshade
           
           //blush
          
                     this.hitCount6 = 0;
                     this.hitCount7 = 0;
                     this.hitCount8 = 0;
                     this.hitCount9 = 0;
                     this.hitCount10 = 0;
                     
                     this.t2Drag = false;  
                     this.t22Drag = false;   
                     this.t222Drag = false;   
                     this.t2222Drag = false;   
                     this.t22222Drag = false;   
                     
          //blush
           
             //eyelash
          
                     this.hitCount11 = 0;
                     this.hitCount12 = 0;
                     this.hitCount13 = 0;
                     this.hitCount14 = 0;
                     this.hitCount15 = 0;
                     this.hitCount16 = 0;
                     
                     this.t3Drag = false;  
                     this.t33Drag = false;   
                     this.t333Drag = false;   
                     this.t3333Drag = false;   
                     this.t33333Drag = false;   
                     this.t333333Drag = false;   
                     
          //eyelash        
                     
                //lipstic
          
                     this.hitCount17 = 0;
                     this.hitCount18 = 0;
                     this.hitCount19 = 0;
                     this.hitCount20 = 0;
                     this.hitCount21 = 0;
                     this.hitCount22 = 0;
                     this.hitCount23 = 0;
                     
                     this.t4Drag = false;  
                     this.t44Drag = false;   
                     this.t444Drag = false;   
                     this.t4444Drag = false;   
                     this.t44444Drag = false;   
                     this.t444444Drag = false;   
                     this.t4444444Drag = false;   
                     
          //lipstic    
                
            
         

        game.physics.startSystem(Phaser.Physics.ARCADE);
     
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0,0,'makeup_bg');
        this.levelGroup.add(this.bg);
        
         this.makeup_panel = game.add.sprite(254.5, 778.5, 'panel');
         this.makeup_panel.anchor.setTo(0.5);
         
        this.anna_eyeshade = game.add.sprite(280,276,'');
        this.anna_eyeshade.anchor.setTo(0.5);
        this.anna_eyeshade.visible=true;
        
      //eyeshade  
        this.anna_eyeshade1 = game.add.sprite(280,276,'anna_eyeshade1');
        this.anna_eyeshade1.anchor.setTo(0.5);
        this.anna_eyeshade1.visible=false;
        
        this.anna_eyeshade2 = game.add.sprite(280,276,'anna_eyeshade2');
        this.anna_eyeshade2.anchor.setTo(0.5);
        this.anna_eyeshade2.visible=false;
        
        this.anna_eyeshade3 = game.add.sprite(280,276,'anna_eyeshade3');
        this.anna_eyeshade3.anchor.setTo(0.5);
        this.anna_eyeshade3.visible=false;
        
        this.anna_eyeshade4 = game.add.sprite(280,276,'anna_eyeshade4');
        this.anna_eyeshade4.anchor.setTo(0.5);
        this.anna_eyeshade4.visible=false;
        
        this.anna_eyeshade5 = game.add.sprite(280,276,'anna_eyeshade5');
        this.anna_eyeshade5.anchor.setTo(0.5);
        this.anna_eyeshade5.visible=false;
    //eyeshade
    
   
    
        this.anna_blush = game.add.sprite(275,350,'');
        this.anna_blush.anchor.setTo(0.5);
        this.anna_blush.visible=true;
    
    //blush  
  
        this.anna_blush1 = game.add.sprite(275,350,'anna_blush1');
        this.anna_blush1.anchor.setTo(0.5);
        this.anna_blush1.visible=false;
        
        this.anna_blush2 = game.add.sprite(275,350,'anna_blush2');
        this.anna_blush2.anchor.setTo(0.5);
        this.anna_blush2.visible=false;
        
        this.anna_blush3 = game.add.sprite(275,350,'anna_blush3');
        this.anna_blush3.anchor.setTo(0.5);
        this.anna_blush3.visible=false;
        
        this.anna_blush4 = game.add.sprite(275,350,'anna_blush4');
        this.anna_blush4.anchor.setTo(0.5);
        this.anna_blush4.visible=false;
        
        this.anna_blush5 = game.add.sprite(275,350,'anna_blush5');
        this.anna_blush5.anchor.setTo(0.5);
        this.anna_blush5.visible=false;
   //blush  
        
         this.eye_ball = game.add.sprite(277, 286, 'eye_ball');
         this.eye_ball.anchor.setTo(0.5);
         
        this.anna_firsteyelash = game.add.sprite(278,275,'anna_firsteyelash');
        this.anna_firsteyelash.anchor.setTo(0.5);
        
        this.anna_eyelash = game.add.sprite(278,275,'');
        this.anna_eyelash.anchor.setTo(0.5);
        this.anna_eyelash.visible=true;
        
     //eyelash  
  
        this.anna_eyelash1 = game.add.sprite(278,275,'anna_eyelash1');
        this.anna_eyelash1.anchor.setTo(0.5);
        this.anna_eyelash1.visible=false;
        
        this.anna_eyelash2 = game.add.sprite(278,275,'anna_eyelash2');
        this.anna_eyelash2.anchor.setTo(0.5);
        this.anna_eyelash2.visible=false;
        
        this.anna_eyelash3 = game.add.sprite(278,275,'anna_eyelash3');
        this.anna_eyelash3.anchor.setTo(0.5);
        this.anna_eyelash3.visible=false;
      
        this.anna_eyelash4 = game.add.sprite(278,275,'anna_eyelash4');
        this.anna_eyelash4.anchor.setTo(0.5);
        this.anna_eyelash4.visible=false;
        
        this.anna_eyelash5 = game.add.sprite(278,275,'anna_eyelash5');
        this.anna_eyelash5.anchor.setTo(0.5);
        this.anna_eyelash5.visible=false;
        
        this.anna_eyelash6 = game.add.sprite(278,275,'anna_eyelash6');
        this.anna_eyelash6.anchor.setTo(0.5);
        this.anna_eyelash6.visible=false;
   //eyelash
   
        this.anna_lipstic = game.add.sprite(270,374,'');
        this.anna_lipstic.anchor.setTo(0.5);
        this.anna_lipstic.visible=true;
   
      //lipstic  
  
        this.anna_lipstic1 = game.add.sprite(270,374,'anna_lipstic1');
        this.anna_lipstic1.anchor.setTo(0.5);
        this.anna_lipstic1.visible=false;
        
        this.anna_lipstic2 = game.add.sprite(270,374,'anna_lipstic2');
        this.anna_lipstic2.anchor.setTo(0.5);
        this.anna_lipstic2.visible=false;
        
        this.anna_lipstic3 = game.add.sprite(270,374,'anna_lipstic3');
        this.anna_lipstic3.anchor.setTo(0.5);
        this.anna_lipstic3.visible=false;
        
        this.anna_lipstic4 = game.add.sprite(270,374,'anna_lipstic4');
        this.anna_lipstic4.anchor.setTo(0.5);
        this.anna_lipstic4.visible=false;
        
        this.anna_lipstic5 = game.add.sprite(270,374,'anna_lipstic5');
        this.anna_lipstic5.anchor.setTo(0.5);
        this.anna_lipstic5.visible=false;
        
        this.anna_lipstic6 = game.add.sprite(270,374,'anna_lipstic6');
        this.anna_lipstic6.anchor.setTo(0.5);
        this.anna_lipstic6.visible=false;
        
        this.anna_lipstic7 = game.add.sprite(270,374,'anna_lipstic7');
        this.anna_lipstic7.anchor.setTo(0.5);
        this.anna_lipstic7.visible=false;
   //lipstic     
       
    //eyeshade    
        this.anna_line1 = game.add.sprite(280,275,'anna_line2');
        this.anna_line1.anchor.setTo(0.5);
        this.anna_line1.visible=false;
        
        this.anna_line2 = game.add.sprite(280,275,'anna_line2');
        this.anna_line2.anchor.setTo(0.5);
        this.anna_line2.visible=false;
        
        this.anna_line3 = game.add.sprite(280,275,'anna_line2');
        this.anna_line3.anchor.setTo(0.5);
        this.anna_line3.visible=false;
        
        this.anna_line4 = game.add.sprite(280,275,'anna_line2');
        this.anna_line4.anchor.setTo(0.5);
        this.anna_line4.visible=false;
        
        this.anna_line5 = game.add.sprite(280,275,'anna_line2');
        this.anna_line5.anchor.setTo(0.5);
        this.anna_line5.visible=false;
    //eyeshade
    
    //blush    
    
        this.anna_line6 = game.add.sprite(275,340,'anna_line1');
        this.anna_line6.anchor.setTo(0.5);
        this.anna_line6.visible=false;
        
        this.anna_line7 = game.add.sprite(275,340,'anna_line1');
        this.anna_line7.anchor.setTo(0.5);
        this.anna_line7.visible=false;
        
        this.anna_line8 = game.add.sprite(275,340,'anna_line1');
        this.anna_line8.anchor.setTo(0.5);
        this.anna_line8.visible=false;
        
        this.anna_line9 = game.add.sprite(275,340,'anna_line1');
        this.anna_line9.anchor.setTo(0.5);
        this.anna_line9.visible=false;
        
        this.anna_line10 = game.add.sprite(275,340,'anna_line1');
        this.anna_line10.anchor.setTo(0.5);
        this.anna_line10.visible=false;
    //blush    
     
     //eyelash    
    
        this.anna_line11 = game.add.sprite(280,288,'anna_line4');
        this.anna_line11.anchor.setTo(0.5);
        this.anna_line11.visible=false;
        
        this.anna_line12 = game.add.sprite(280,288,'anna_line4');
        this.anna_line12.anchor.setTo(0.5);
        this.anna_line12.visible=false;
        
        this.anna_line13 = game.add.sprite(280,288,'anna_line4');
        this.anna_line13.anchor.setTo(0.5);
        this.anna_line13.visible=false;
        
        this.anna_line14 = game.add.sprite(280,288,'anna_line4');
        this.anna_line14.anchor.setTo(0.5);
        this.anna_line14.visible=false;
        
        this.anna_line15 = game.add.sprite(280,288,'anna_line4');
        this.anna_line15.anchor.setTo(0.5);
        this.anna_line15.visible=false;
        
        this.anna_line16 = game.add.sprite(280,288,'anna_line4');
        this.anna_line16.anchor.setTo(0.5);
        this.anna_line16.visible=false;
    //eyelash     
     
       //lipstic    
    
        this.anna_line17 = game.add.sprite(270,374,'anna_line3');
        this.anna_line17.anchor.setTo(0.5);
        this.anna_line17.visible=false;
        
        this.anna_line18 = game.add.sprite(270,374,'anna_line3');
        this.anna_line18.anchor.setTo(0.5);
        this.anna_line18.visible=false;
        
        this.anna_line19 = game.add.sprite(270,374,'anna_line3');
        this.anna_line19.anchor.setTo(0.5);
        this.anna_line19.visible=false;
        
        this.anna_line20 = game.add.sprite(270,374,'anna_line3');
        this.anna_line20.anchor.setTo(0.5);
        this.anna_line20.visible=false;
        
        this.anna_line21 = game.add.sprite(270,374,'anna_line3');
        this.anna_line21.anchor.setTo(0.5);
        this.anna_line21.visible=false;
        
        this.anna_line22 = game.add.sprite(270,374,'anna_line3');
        this.anna_line22.anchor.setTo(0.5);
        this.anna_line22.visible=false;
        
        this.anna_line23 = game.add.sprite(270,374,'anna_line3');
        this.anna_line23.anchor.setTo(0.5);
        this.anna_line23.visible=false;
    //lipstic       
        
   //eyeshade     
        this.t1 = game.add.sprite(100,300,'makeup_t2');
        this.t1.anchor.setTo(0.5);
        this.t1.visible=false;
        
        this.t11 = game.add.sprite(100,300,'makeup_t2');
        this.t11.anchor.setTo(0.5);
        this.t11.visible=false;
        
        this.t111 = game.add.sprite(100,300,'makeup_t2');
        this.t111.anchor.setTo(0.5);
        this.t111.visible=false;
        
        this.t1111 = game.add.sprite(100,300,'makeup_t2');
        this.t1111.anchor.setTo(0.5);
        this.t1111.visible=false;
        
        this.t11111 = game.add.sprite(100,300,'makeup_t2');
        this.t11111.anchor.setTo(0.5);
        this.t11111.visible=false;
        
    //eyeshade
    
    //blush     
   
        this.t2 = game.add.sprite(100,300,'makeup_t3');
        this.t2.anchor.setTo(0.5);
        this.t2.visible=false;
        
        this.t22 = game.add.sprite(100,300,'makeup_t3');
        this.t22.anchor.setTo(0.5);
        this.t22.visible=false;
        
        this.t222 = game.add.sprite(100,300,'makeup_t3');
        this.t222.anchor.setTo(0.5);
        this.t222.visible=false;
       
        this.t2222 = game.add.sprite(100,300,'makeup_t3');
        this.t2222.anchor.setTo(0.5);
        this.t2222.visible=false;
       
        this.t22222 = game.add.sprite(100,300,'makeup_t3');
        this.t22222.anchor.setTo(0.5);
        this.t22222.visible=false;
        
   //blush     
   //
    //eyelash     
   
        this.t3 = game.add.sprite(100,300,'makeup_t4');
        this.t3.anchor.setTo(0.5);
        this.t3.visible=false;
        
        this.t33 = game.add.sprite(100,300,'makeup_t4');
        this.t33.anchor.setTo(0.5);
        this.t33.visible=false;
        
        this.t333 = game.add.sprite(100,300,'makeup_t4');
        this.t333.anchor.setTo(0.5);
        this.t333.visible=false;
       
        this.t3333 = game.add.sprite(100,300,'makeup_t4');
        this.t3333.anchor.setTo(0.5);
        this.t3333.visible=false;
       
        this.t33333 = game.add.sprite(100,300,'makeup_t4');
        this.t33333.anchor.setTo(0.5);
        this.t33333.visible=false;
        
        this.t333333 = game.add.sprite(100,300,'makeup_t4');
        this.t333333.anchor.setTo(0.5);
        this.t333333.visible=false;
        
   //eyelash        
        //lipstic     
   
        this.t4 = game.add.sprite(100,300,'makeup_t1');
        this.t4.anchor.setTo(0.5);
        this.t4.visible=false;
        
        this.t44 = game.add.sprite(100,300,'makeup_t1');
        this.t44.anchor.setTo(0.5);
        this.t44.visible=false;
        
        this.t444 = game.add.sprite(100,300,'makeup_t1');
        this.t444.anchor.setTo(0.5);
        this.t444.visible=false;
       
        this.t4444 = game.add.sprite(100,300,'makeup_t1');
        this.t4444.anchor.setTo(0.5);
        this.t4444.visible=false;
       
        this.t44444 = game.add.sprite(100,300,'makeup_t1');
        this.t44444.anchor.setTo(0.5);
        this.t44444.visible=false;
        
        this.t444444 = game.add.sprite(100,300,'makeup_t1');
        this.t444444.anchor.setTo(0.5);
        this.t444444.visible=false;
       
        this.t4444444 = game.add.sprite(100,300,'makeup_t1');
        this.t4444444.anchor.setTo(0.5);
        this.t4444444.visible=false;
        
   //lipstic        
        
        
    this.iconGroup1 = game.add.group();
    
         this.makeup_icon1 = game.add.sprite(66.55, 595.5, 'makeup_icon1');
         this.makeup_icon1.anchor.setTo(0.5);
         this.makeup_icon1.id=1;
         this.makeup_icon1.inputEnabled = true;
         this.makeup_icon1.input.useHandCursor = true;
         this.makeup_icon1.events.onInputOver.add(this.btnOver, this);
         this.makeup_icon1.events.onInputOut.add(this.btnOut, this);
         this.makeup_icon1.events.onInputUp.add(this.iconFun1, this);
         
        
        
         this.makeup_icon2 = game.add.sprite(168.3, 640.7, 'makeup_icon2');
         this.makeup_icon2.anchor.setTo(0.5);
         this.makeup_icon2.id=2;
         this.makeup_icon2.inputEnabled = true;
         this.makeup_icon2.input.useHandCursor = true;
         this.makeup_icon2.events.onInputOver.add(this.btnOver, this);
         this.makeup_icon2.events.onInputOut.add(this.btnOut, this);
         this.makeup_icon2.events.onInputUp.add(this.iconFun2, this);
         
         this.makeup_icon3 = game.add.sprite(308.2, 634.4, 'makeup_icon3');
         this.makeup_icon3.anchor.setTo(0.5);
         this.makeup_icon3.id=3;
         this.makeup_icon3.inputEnabled = true;
         this.makeup_icon3.input.useHandCursor = true;
         this.makeup_icon3.events.onInputOver.add(this.btnOver, this);
         this.makeup_icon3.events.onInputOut.add(this.btnOut, this);
         this.makeup_icon3.events.onInputUp.add(this.iconFun3, this);
         
         
         this.makeup_icon4 = game.add.sprite(431.75, 599.2, 'makeup_icon4');
         this.makeup_icon4.anchor.setTo(0.5);
         this.makeup_icon4.id=4;
         this.makeup_icon4.inputEnabled = true;
         this.makeup_icon4.input.useHandCursor = true;
         this.makeup_icon4.events.onInputOver.add(this.btnOver, this);
         this.makeup_icon4.events.onInputOut.add(this.btnOut, this);
         this.makeup_icon4.events.onInputUp.add(this.iconFun4, this);
        
        
      this.girlGroup = game.add.group();
       this.makeup_anna = game.add.sprite(252.5,1025,'makeup_anna');
       this.makeup_anna.anchor.setTo(0.5);
       this.girlGroup.add(this.makeup_anna);
      
                this.levelGroup.add(this.girlGroup);
                this.levelGroup.add(this.makeup_panel);
                this.levelGroup.add(this.makeup_icon1);
                this.levelGroup.add(this.makeup_icon2);
                this.levelGroup.add(this.makeup_icon3);
                this.levelGroup.add(this.makeup_icon4);
              
      this.cupboardGroup1 = game.add.group();
 
          this.makeup_cupboard = game.add.sprite(48.9, 323.3, 'makeup_cupboard');
          this.makeup_cupboard.anchor.setTo(0.5);
          
          this.eyeshade_icon1 = game.add.sprite(51.7, 178.65, 'eyeshade_icon1');
          this.eyeshade_icon1.anchor.setTo(0.5);
          this.eyeshade_icon1.inputEnabled = true;
          this.eyeshade_icon1.id = 0;
          this.eyeshade_icon1.input.useHandCursor = true;
         // this.eyeshade_icon1.events.onInputOver.add(this.btnOver, this);
         // this.eyeshade_icon1.events.onInputOut.add(this.btnOut, this);
          this.eyeshade_icon1.events.onInputDown.add(this.pickT1, this);
          this.eyeshade_icon1.events.onInputUp.add(this.dropT1, this);
        
        
           this.eyeshade_icon2 = game.add.sprite(51.7, 254.05, 'eyeshade_icon2');
           this.eyeshade_icon2.anchor.setTo(0.5);
           this.eyeshade_icon2.inputEnabled = true;
           this.eyeshade_icon2.id = 1;
           this.eyeshade_icon2.input.useHandCursor = true;
         //  this.eyeshade_icon2.events.onInputOver.add(this.btnOver, this);
          // this.eyeshade_icon2.events.onInputOut.add(this.btnOut, this);
           this.eyeshade_icon2.events.onInputDown.add(this.pickT2, this);
           this.eyeshade_icon2.events.onInputUp.add(this.dropT2, this);
        
          this.eyeshade_icon3 = game.add.sprite(51.7, 325.55, 'eyeshade_icon3');
          this.eyeshade_icon3.anchor.setTo(0.5);
          this.eyeshade_icon3.inputEnabled = true;
          this.eyeshade_icon3.id = 2;
          this.eyeshade_icon3.input.useHandCursor = true;
         // this.eyeshade_icon3.events.onInputOver.add(this.btnOver, this);
         // this.eyeshade_icon3.events.onInputOut.add(this.btnOut, this);
          this.eyeshade_icon3.events.onInputDown.add(this.pickT3, this);
          this.eyeshade_icon3.events.onInputUp.add(this.dropT3, this);
        
          this.eyeshade_icon4 = game.add.sprite(51.7, 390.55, 'eyeshade_icon4');
          this.eyeshade_icon4.anchor.setTo(0.5);
          this.eyeshade_icon4.inputEnabled = true;
          this.eyeshade_icon4.id = 3;
          this.eyeshade_icon4.input.useHandCursor = true;
        //  this.eyeshade_icon4.events.onInputOver.add(this.btnOver, this);
         // this.eyeshade_icon4.events.onInputOut.add(this.btnOut, this);
          this.eyeshade_icon4.events.onInputDown.add(this.pickT4, this);
          this.eyeshade_icon4.events.onInputUp.add(this.dropT4, this);
          
          this.eyeshade_icon5 = game.add.sprite(51.7, 449.05, 'eyeshade_icon5');
          this.eyeshade_icon5.anchor.setTo(0.5);
          this.eyeshade_icon5.inputEnabled = true;
          this.eyeshade_icon5.id = 4;
          this.eyeshade_icon5.input.useHandCursor = true;
        //  this.eyeshade_icon5.events.onInputOver.add(this.btnOver, this);
         // this.eyeshade_icon5.events.onInputOut.add(this.btnOut, this);
          this.eyeshade_icon5.events.onInputDown.add(this.pickT5, this);
          this.eyeshade_icon5.events.onInputUp.add(this.dropT5, this);
        
              this.cupboardGroup1.add(this.makeup_cupboard);

                  for(i=1;i<=5;i++)
                    {
                    this.cupboardGroup1.add(this['eyeshade_icon'+i]);
                    }
         
         
         
          this.cupboardGroup1.visible=false;
     this.cupboardGroup2 = game.add.group();
   
          this.makeup_cupboard = game.add.sprite(48.9, 323.3, 'makeup_cupboard');
          this.makeup_cupboard.anchor.setTo(0.5);
          
          this.blush_icon1 = game.add.sprite(47.75, 193.1, 'blush_icon1');
          this.blush_icon1.anchor.setTo(0.5);
          this.blush_icon1.inputEnabled = true;
          this.blush_icon1.id = 0;
          this.blush_icon1.input.useHandCursor = true;
          this.blush_icon1.events.onInputDown.add(this.pickT6, this);
          this.blush_icon1.events.onInputUp.add(this.dropT6, this);
         // this.blush_icon1.events.onInputOver.add(this.btnOver, this);
         // this.blush_icon1.events.onInputOut.add(this.btnOut, this);
        
           this.blush_icon2 = game.add.sprite(47.75, 256, 'blush_icon2');
           this.blush_icon2.anchor.setTo(0.5);
           this.blush_icon2.inputEnabled = true;
           this.blush_icon2.id = 1;
           this.blush_icon2.input.useHandCursor = true;
           this.blush_icon2.events.onInputDown.add(this.pickT7, this);
           this.blush_icon2.events.onInputUp.add(this.dropT7, this);
          // this.blush_icon2.events.onInputOver.add(this.btnOver, this);
          // this.blush_icon2.events.onInputOut.add(this.btnOut, this);
          
        
          this.blush_icon3 = game.add.sprite(47.75, 320.8, 'blush_icon3');
          this.blush_icon3.anchor.setTo(0.5);
          this.blush_icon3.inputEnabled = true;
          this.blush_icon3.id = 2;
          this.blush_icon3.input.useHandCursor = true;
          this.blush_icon3.events.onInputDown.add(this.pickT8, this);
          this.blush_icon3.events.onInputUp.add(this.dropT8, this);
        //  this.blush_icon3.events.onInputOver.add(this.btnOver, this);
        //  this.blush_icon3.events.onInputOut.add(this.btnOut, this);
        
        
          this.blush_icon4 = game.add.sprite(47.75, 387.5, 'blush_icon4');
          this.blush_icon4.anchor.setTo(0.5);
          this.blush_icon4.inputEnabled = true;
          this.blush_icon4.id = 3;
          this.blush_icon4.input.useHandCursor = true;
          this.blush_icon4.events.onInputDown.add(this.pickT9, this);
          this.blush_icon4.events.onInputUp.add(this.dropT9, this);
          //this.blush_icon4.events.onInputOver.add(this.btnOver, this);
        //  this.blush_icon4.events.onInputOut.add(this.btnOut, this);
        
          this.blush_icon5 = game.add.sprite(47.75, 452.25, 'blush_icon5');
          this.blush_icon5.anchor.setTo(0.5);
          this.blush_icon5.inputEnabled = true;
          this.blush_icon5.id = 4;
          this.blush_icon5.input.useHandCursor = true;
          this.blush_icon5.events.onInputDown.add(this.pickT10, this);
          this.blush_icon5.events.onInputUp.add(this.dropT10, this);
          //this.blush_icon5.events.onInputOver.add(this.btnOver, this);
        //  this.blush_icon5.events.onInputOut.add(this.btnOut, this);
        
              this.cupboardGroup2.add(this.makeup_cupboard);
                  for(i=1;i<=5;i++)
                    {
                    this.cupboardGroup2.add(this['blush_icon'+i]);
                    }
         
          this.cupboardGroup2.visible=false;
         
         
         this.cupboardGroup3 = game.add.group();
   
          this.makeup_cupboard = game.add.sprite(48.9, 323.3, 'makeup_cupboard');
          this.makeup_cupboard.anchor.setTo(0.5);
          
          this.eyelash_icon1 = game.add.sprite(43.65, 174.05, 'eyelash_icon1');
          this.eyelash_icon1.anchor.setTo(0.5);
          this.eyelash_icon1.inputEnabled = true;
          this.eyelash_icon1.id = 0;
          this.eyelash_icon1.input.useHandCursor = true;
          this.eyelash_icon1.events.onInputDown.add(this.pickT11, this);
          this.eyelash_icon1.events.onInputUp.add(this.dropT11, this);
        //  this.eyelash_icon1.events.onInputOver.add(this.btnOver, this);
        //  this.eyelash_icon1.events.onInputOut.add(this.btnOut, this);
        
           this.eyelash_icon2 = game.add.sprite(44.05, 229.85, 'eyelash_icon2');
           this.eyelash_icon2.anchor.setTo(0.5);
           this.eyelash_icon2.inputEnabled = true;
           this.eyelash_icon2.id = 1;
           this.eyelash_icon2.input.useHandCursor = true;
           this.eyelash_icon2.events.onInputDown.add(this.pickT12, this);
           this.eyelash_icon2.events.onInputUp.add(this.dropT12, this);
         //  this.eyelash_icon2.events.onInputOver.add(this.btnOver, this);
          // this.eyelash_icon2.events.onInputOut.add(this.btnOut, this);
          
        
          this.eyelash_icon3 = game.add.sprite(46.5, 288.5, 'eyelash_icon3');
          this.eyelash_icon3.anchor.setTo(0.5);
          this.eyelash_icon3.inputEnabled = true;
          this.eyelash_icon3.id = 2;
          this.eyelash_icon3.input.useHandCursor = true;
          this.eyelash_icon3.events.onInputDown.add(this.pickT13, this);
          this.eyelash_icon3.events.onInputUp.add(this.dropT13, this);
         // this.eyelash_icon3.events.onInputOver.add(this.btnOver, this);
        //  this.eyelash_icon3.events.onInputOut.add(this.btnOut, this);
        
        
          this.eyelash_icon4 = game.add.sprite(43.65, 347.15, 'eyelash_icon4');
          this.eyelash_icon4.anchor.setTo(0.5);
          this.eyelash_icon4.inputEnabled = true;
          this.eyelash_icon4.id = 3;
          this.eyelash_icon4.input.useHandCursor = true;
          this.eyelash_icon4.events.onInputDown.add(this.pickT14, this);
          this.eyelash_icon4.events.onInputUp.add(this.dropT14, this);
         // this.eyelash_icon4.events.onInputOver.add(this.btnOver, this);
         // this.eyelash_icon4.events.onInputOut.add(this.btnOut, this);
        
          this.eyelash_icon5 = game.add.sprite(45.65, 403.75, 'eyelash_icon5');
          this.eyelash_icon5.anchor.setTo(0.5);
          this.eyelash_icon5.inputEnabled = true;
          this.eyelash_icon5.id = 4;
          this.eyelash_icon5.input.useHandCursor = true;
          this.eyelash_icon5.events.onInputDown.add(this.pickT15, this);
          this.eyelash_icon5.events.onInputUp.add(this.dropT15, this);
         // this.eyelash_icon5.events.onInputOver.add(this.btnOver, this);
         // this.eyelash_icon5.events.onInputOut.add(this.btnOut, this);
         
          this.eyelash_icon6 = game.add.sprite(46.05, 459.15, 'eyelash_icon6');
          this.eyelash_icon6.anchor.setTo(0.5);
          this.eyelash_icon6.inputEnabled = true;
          this.eyelash_icon6.id = 5;
          this.eyelash_icon6.input.useHandCursor = true;
          this.eyelash_icon6.events.onInputDown.add(this.pickT16, this);
          this.eyelash_icon6.events.onInputUp.add(this.dropT16, this);
         // this.eyelash_icon6.events.onInputOver.add(this.btnOver, this);
         // this.eyelash_icon6.events.onInputOut.add(this.btnOut, this);
         
              this.cupboardGroup3.add(this.makeup_cupboard);
   
                  for(i=1;i<=6;i++)
                    {
                     this['eyelash_icon'+i].scale.setTo(0.7);
                      this['eyelash_icon'+i].y= this['eyelash_icon'+i].y+15;
                    this.cupboardGroup3.add(this['eyelash_icon'+i]);
                    }
         
         
         
          this.cupboardGroup3.visible=false;
         
         
         this.cupboardGroup4 = game.add.group();
   
          this.makeup_cupboard = game.add.sprite(48.9, 323.3, 'makeup_cupboard');
          this.makeup_cupboard.anchor.setTo(0.5);
          
          this.lip_icon1 = game.add.sprite(47.65, 186.85, 'lip_icon1');
          this.lip_icon1.anchor.setTo(0.5);
          this.lip_icon1.inputEnabled = true;
          this.lip_icon1.id = 0;
          this.lip_icon1.input.useHandCursor = true;
          this.lip_icon1.events.onInputDown.add(this.pickT17, this);
          this.lip_icon1.events.onInputUp.add(this.dropT17, this);
        //  this.lip_icon1.events.onInputOver.add(this.btnOver, this);
         // this.lip_icon1.events.onInputOut.add(this.btnOut, this);
        
           this.lip_icon2 = game.add.sprite(49.95, 237.4, 'lip_icon2');
           this.lip_icon2.anchor.setTo(0.5);
           this.lip_icon2.inputEnabled = true;
           this.lip_icon2.id = 1;
           this.lip_icon2.input.useHandCursor = true;
           this.lip_icon2.events.onInputDown.add(this.pickT18, this);
           this.lip_icon2.events.onInputUp.add(this.dropT18, this);
          // this.lip_icon2.events.onInputOver.add(this.btnOver, this);
          // this.lip_icon2.events.onInputOut.add(this.btnOut, this);
          
        
          this.lip_icon3 = game.add.sprite(49.95, 281.25, 'lip_icon3');
          this.lip_icon3.anchor.setTo(0.5);
          this.lip_icon3.inputEnabled = true;
          this.lip_icon3.id = 2;
          this.lip_icon3.input.useHandCursor = true;
          this.lip_icon3.events.onInputDown.add(this.pickT19, this);
          this.lip_icon3.events.onInputUp.add(this.dropT19, this);
         // this.lip_icon3.events.onInputOver.add(this.btnOver, this);
         // this.lip_icon3.events.onInputOut.add(this.btnOut, this);
        
        
          this.lip_icon4 = game.add.sprite(49.95, 323.85, 'lip_icon4');
          this.lip_icon4.anchor.setTo(0.5);
          this.lip_icon4.inputEnabled = true;
          this.lip_icon4.id = 3;
          this.lip_icon4.input.useHandCursor = true;
          this.lip_icon4.events.onInputDown.add(this.pickT20, this);
          this.lip_icon4.events.onInputUp.add(this.dropT20, this);
          //this.lip_icon4.events.onInputOver.add(this.btnOver, this);
        //  this.lip_icon4.events.onInputOut.add(this.btnOut, this);
        
          this.lip_icon5 = game.add.sprite(49.95, 367.1, 'lip_icon5');
          this.lip_icon5.anchor.setTo(0.5);
          this.lip_icon5.inputEnabled = true;
          this.lip_icon5.id = 4;
          this.lip_icon5.input.useHandCursor = true;
          this.lip_icon5.events.onInputDown.add(this.pickT21, this);
          this.lip_icon5.events.onInputUp.add(this.dropT21, this);
        //  this.lip_icon5.events.onInputOver.add(this.btnOver, this);
         // this.lip_icon5.events.onInputOut.add(this.btnOut, this);
         
        
          this.lip_icon6 = game.add.sprite(49.95, 410.3, 'lip_icon6');
          this.lip_icon6.anchor.setTo(0.5);
          this.lip_icon6.inputEnabled = true;
          this.lip_icon6.id = 5;
          this.lip_icon6.input.useHandCursor = true;
          this.lip_icon6.events.onInputDown.add(this.pickT22, this);
          this.lip_icon6.events.onInputUp.add(this.dropT22, this);
        //  this.lip_icon6.events.onInputOver.add(this.btnOver, this);
         // this.lip_icon6.events.onInputOut.add(this.btnOut, this);
        
           this.lip_icon7 = game.add.sprite(49.95, 453.55, 'lip_icon7');
           this.lip_icon7.anchor.setTo(0.5);
           this.lip_icon7.inputEnabled = true;
           this.lip_icon7.id = 6;
           this.lip_icon7.input.useHandCursor = true;
           this.lip_icon7.events.onInputDown.add(this.pickT23, this);
           this.lip_icon7.events.onInputUp.add(this.dropT23, this);
          // this.lip_icon7.events.onInputOver.add(this.btnOver, this);
          // this.lip_icon7.events.onInputOut.add(this.btnOut, this);
          
              this.cupboardGroup4.add(this.makeup_cupboard);
   
                  for(i=1;i<=7;i++)
                    {
                    this.cupboardGroup4.add(this['lip_icon'+i]);
                    }
         
          this.cupboardGroup4.visible=false; 
   
   this.levelGroup.add(this.cupboardGroup1);
   this.levelGroup.add(this.cupboardGroup2);
   this.levelGroup.add(this.cupboardGroup3);
   this.levelGroup.add(this.cupboardGroup4);
   
  //eyeshade 
         
      this.circleGroup2 = game.add.group();
      this.circle1 = game.add.graphics(10,20);
      this.circle1.beginFill(0x000000, 0);
      this.circleGroup2.add(this.circle1);
      this.circleGroup2.y = 40;
      this.anna_eyeshade1.mask = this.circle1;
        
      this.circleGroup3 = game.add.group();
      this.circle2 = game.add.graphics(10,20);
      this.circle2.beginFill(0x000000, 0);
      this.circleGroup3.add(this.circle2);
      this.circleGroup3.y = 40;
      this.anna_eyeshade2.mask = this.circle2;  
        
      this.circleGroup4 = game.add.group();
      this.circle3 = game.add.graphics(10,20);
      this.circle3.beginFill(0x000000, 0);
      this.circleGroup4.add(this.circle3);
      this.circleGroup4.y = 40;
      this.anna_eyeshade3.mask = this.circle3;   
        
      this.circleGroup5 = game.add.group();
      this.circle4 = game.add.graphics(10,20);
      this.circle4.beginFill(0x000000, 0);
      this.circleGroup5.add(this.circle4);
      this.circleGroup5.y = 40;
      this.anna_eyeshade4.mask = this.circle4;
      
      this.circleGroup6 = game.add.group();
      this.circle5 = game.add.graphics(10,20);
      this.circle5.beginFill(0x000000, 0);
      this.circleGroup6.add(this.circle5);
      this.circleGroup6.y = 40;
      this.anna_eyeshade5.mask = this.circle5;    
       
    //eyeshade
    
    //blush 
  
      this.circleGroup7 = game.add.group();
      this.circle6 = game.add.graphics(10,20);
      this.circle6.beginFill(0x000000, 0);
      this.circleGroup7.add(this.circle6);
      this.circleGroup7.y = 40;
      this.anna_blush1.mask = this.circle6;    
       
      this.circleGroup8 = game.add.group();
      this.circle7 = game.add.graphics(10,20);
      this.circle7.beginFill(0x000000, 0);
      this.circleGroup8.add(this.circle7);
      this.circleGroup8.y = 40;
      this.anna_blush2.mask = this.circle7;      
       
      this.circleGroup9 = game.add.group();
      this.circle8 = game.add.graphics(10,20);
      this.circle8.beginFill(0x000000, 0);
      this.circleGroup9.add(this.circle8);
      this.circleGroup9.y = 40;
      this.anna_blush3.mask = this.circle8;    
       
      this.circleGroup10 = game.add.group();
      this.circle9 = game.add.graphics(10,20);
      this.circle9.beginFill(0x000000, 0);
      this.circleGroup10.add(this.circle9);
      this.circleGroup10.y = 40;
      this.anna_blush4.mask = this.circle9;    
       
      this.circleGroup11 = game.add.group();
      this.circle10 = game.add.graphics(10,20);
      this.circle10.beginFill(0x000000, 0);
      this.circleGroup11.add(this.circle10);
      this.circleGroup11.y = 40;
      this.anna_blush5.mask = this.circle10; 
     //blush 
  //eyelash 
  
      this.circleGroup12 = game.add.group();
      this.circle11 = game.add.graphics(10,20);
      this.circle11.beginFill(0x000000, 0);
      this.circleGroup12.add(this.circle11);
      this.circleGroup12.y = 40;
     this.anna_eyelash1.mask = this.circle11;    
       
      this.circleGroup13 = game.add.group();
      this.circle12 = game.add.graphics(10,20);
      this.circle12.beginFill(0x000000, 0);
      this.circleGroup13.add(this.circle12);
      this.circleGroup13.y = 40;
      this.anna_eyelash2.mask = this.circle12;      
       
      this.circleGroup14 = game.add.group();
      this.circle13 = game.add.graphics(10,20);
      this.circle13.beginFill(0x000000, 0);
      this.circleGroup14.add(this.circle13);
      this.circleGroup14.y = 40;
      this.anna_eyelash3.mask = this.circle13;
      
      this.circleGroup15 = game.add.group();
      this.circle14 = game.add.graphics(10,20);
      this.circle14.beginFill(0x000000, 0);
      this.circleGroup15.add(this.circle14);
      this.circleGroup15.y = 40;
      this.anna_eyelash4.mask = this.circle14;
      
      this.circleGroup16 = game.add.group();
      this.circle15 = game.add.graphics(10,20);
      this.circle15.beginFill(0x000000, 0);
      this.circleGroup16.add(this.circle15);
      this.circleGroup16.y = 40;
      this.anna_eyelash5.mask = this.circle15;
      
      this.circleGroup17 = game.add.group();
      this.circle16 = game.add.graphics(10,20);
      this.circle16.beginFill(0x000000, 0);
      this.circleGroup17.add(this.circle16);
      this.circleGroup17.y = 40;
      this.anna_eyelash6.mask = this.circle16;
       
     //eyelash
     
      //lipstic 
  
      this.circleGroup18 = game.add.group();
      this.circle17 = game.add.graphics(10,20);
      this.circle17.beginFill(0x000000, 0);
      this.circleGroup18.add(this.circle17);
      this.circleGroup18.y = 40;
      this.anna_lipstic1.mask = this.circle17;     
       
      this.circleGroup19 = game.add.group();
      this.circle18 = game.add.graphics(10,20);
      this.circle18.beginFill(0x000000, 0);
      this.circleGroup19.add(this.circle18);
      this.circleGroup19.y = 40;
      this.anna_lipstic2.mask = this.circle18;    
       
      this.circleGroup20 = game.add.group();
      this.circle19 = game.add.graphics(10,20);
      this.circle19.beginFill(0x000000, 0);
      this.circleGroup20.add(this.circle19);
      this.circleGroup20.y = 40;
      this.anna_lipstic3.mask = this.circle19;    

      this.circleGroup21 = game.add.group();
      this.circle20 = game.add.graphics(10,20);
      this.circle20.beginFill(0x000000, 0);
      this.circleGroup21.add(this.circle20);
      this.circleGroup21.y = 40;
      this.anna_lipstic4.mask = this.circle20;
      
      this.circleGroup22 = game.add.group();
      this.circle21 = game.add.graphics(10,20);
      this.circle21.beginFill(0x000000, 0);
      this.circleGroup22.add(this.circle21);
      this.circleGroup22.y = 40;
      this.anna_lipstic5.mask = this.circle21;    
       
      this.circleGroup23 = game.add.group();
      this.circle22 = game.add.graphics(10,20);
      this.circle22.beginFill(0x000000, 0);
      this.circleGroup23.add(this.circle22);
      this.circleGroup23.y = 40;
      this.anna_lipstic6.mask = this.circle22;    
       
       
      this.circleGroup24 = game.add.group();
      this.circle23 = game.add.graphics(10,20);
      this.circle23.beginFill(0x000000, 0);
      this.circleGroup24.add(this.circle23);
      this.circleGroup24.y = 40;
      this.anna_lipstic7.mask = this.circle23;
       
       
     //lipstic 
       
       
       
        //eyeshade 
    
        this.hitGroup = game.add.group();
      for(var i=0; i<=Main.color_111X.length-1; i++)
      {
      this["hitCircle1_"+i] = game.add.graphics(Main.color_111X[i],Main.color_111Y[i]);
      this["hitCircle1_"+i].beginFill(0x0000FF,0);
      this["hitCircle1_"+i].drawCircle(0,0,35);
      this["hitCircle1_"+i].id = i;
      this.hitGroup.add(this["hitCircle1_"+i]);
      game.physics.arcade.enable([this["hitCircle1_"+i]]);
      this["hitCircle1_"+i].body.collideWorldBounds = true;
      }
      
       this.hitGroup2 = game.add.group();
      for(var i=0; i<=Main.color_111X.length-1; i++)
      {
      this["hitCircle11_"+i] = game.add.graphics(Main.color_111X[i],Main.color_111Y[i]);
      this["hitCircle11_"+i].beginFill(0x0000FF,0);
      this["hitCircle11_"+i].drawCircle(0,0,35);
      this["hitCircle11_"+i].id = i;
      this.hitGroup2.add(this["hitCircle11_"+i]);
      game.physics.arcade.enable([this["hitCircle11_"+i]]);
      this["hitCircle11_"+i].body.collideWorldBounds = true;
      }
      
       this.hitGroup3 = game.add.group();
      for(var i=0; i<=Main.color_111X.length-1; i++)
      {
      this["hitCircle111_"+i] = game.add.graphics(Main.color_111X[i],Main.color_111Y[i]);
      this["hitCircle111_"+i].beginFill(0x0000FF,0);
      this["hitCircle111_"+i].drawCircle(0,0,35);
      this["hitCircle111_"+i].id = i;
      this.hitGroup2.add(this["hitCircle111_"+i]);
      game.physics.arcade.enable([this["hitCircle111_"+i]]);
      this["hitCircle111_"+i].body.collideWorldBounds = true;
      }
      
       this.hitGroup4 = game.add.group();
      for(var i=0; i<=Main.color_111X.length-1; i++)
      {
      this["hitCircle1111_"+i] = game.add.graphics(Main.color_111X[i],Main.color_111Y[i]);
      this["hitCircle1111_"+i].beginFill(0x0000FF,0);
      this["hitCircle1111_"+i].drawCircle(0,0,35);
      this["hitCircle1111_"+i].id = i;
      this.hitGroup4.add(this["hitCircle1111_"+i]);
      game.physics.arcade.enable([this["hitCircle1111_"+i]]);
      this["hitCircle1111_"+i].body.collideWorldBounds = true;
      }
      
       this.hitGroup5 = game.add.group();
      for(var i=0; i<=Main.color_111X.length-1; i++)
      {
      this["hitCircle11111_"+i] = game.add.graphics(Main.color_111X[i],Main.color_111Y[i]);
      this["hitCircle11111_"+i].beginFill(0x0000FF,0);
      this["hitCircle11111_"+i].drawCircle(0,0,35);
      this["hitCircle11111_"+i].id = i;
      this.hitGroup5.add(this["hitCircle11111_"+i]);
      game.physics.arcade.enable([this["hitCircle11111_"+i]]);
      this["hitCircle11111_"+i].body.collideWorldBounds = true;
      }
      
    //eyeshade
    
    //blush
    this.hitGroup6 = game.add.group();
      for(var i=0; i<=Main.color_666X.length-1; i++)
      {
      this["hitCircle2_"+i] = game.add.graphics(Main.color_666X[i],Main.color_666Y[i]-20);
      this["hitCircle2_"+i].beginFill(0x0000FF,0);
      this["hitCircle2_"+i].drawCircle(0,0,35);
      this["hitCircle2_"+i].id = i;
      this.hitGroup6.add(this["hitCircle2_"+i]);
      game.physics.arcade.enable([this["hitCircle2_"+i]]);
      this["hitCircle2_"+i].body.collideWorldBounds = true;
      } 
    
      this.hitGroup7 = game.add.group();
      for(var i=0; i<=Main.color_666X.length-1; i++)
      {
      this["hitCircle22_"+i] = game.add.graphics(Main.color_666X[i],Main.color_666Y[i]-20);
      this["hitCircle22_"+i].beginFill(0x0000FF,0);
      this["hitCircle22_"+i].drawCircle(0,0,35);
      this["hitCircle22_"+i].id = i;
      this.hitGroup7.add(this["hitCircle22_"+i]);
      game.physics.arcade.enable([this["hitCircle22_"+i]]);
      this["hitCircle22_"+i].body.collideWorldBounds = true;
      } 
    
    
     this.hitGroup8 = game.add.group();
      for(var i=0; i<=Main.color_666X.length-1; i++)
      {
      this["hitCircle222_"+i] = game.add.graphics(Main.color_666X[i],Main.color_666Y[i]-20);
      this["hitCircle222_"+i].beginFill(0x0000FF,0);
      this["hitCircle222_"+i].drawCircle(0,0,35);
      this["hitCircle222_"+i].id = i;
      this.hitGroup8.add(this["hitCircle222_"+i]);
      game.physics.arcade.enable([this["hitCircle222_"+i]]);
      this["hitCircle222_"+i].body.collideWorldBounds = true;
      } 
    
    this.hitGroup9 = game.add.group();
      for(var i=0; i<=Main.color_666X.length-1; i++)
      {
      this["hitCircle2222_"+i] = game.add.graphics(Main.color_666X[i],Main.color_666Y[i]-20);
      this["hitCircle2222_"+i].beginFill(0x0000FF,0);
      this["hitCircle2222_"+i].drawCircle(0,0,35);
      this["hitCircle2222_"+i].id = i;
      this.hitGroup9.add(this["hitCircle2222_"+i]);
      game.physics.arcade.enable([this["hitCircle2222_"+i]]);
      this["hitCircle2222_"+i].body.collideWorldBounds = true;
      } 
    
    this.hitGroup10 = game.add.group();
      for(var i=0; i<=Main.color_666X.length-1; i++)
      {
      this["hitCircle22222_"+i] = game.add.graphics(Main.color_666X[i],Main.color_666Y[i]-20);
      this["hitCircle22222_"+i].beginFill(0x0000FF,0);
      this["hitCircle22222_"+i].drawCircle(0,0,35);
      this["hitCircle22222_"+i].id = i;
      this.hitGroup10.add(this["hitCircle22222_"+i]);
      game.physics.arcade.enable([this["hitCircle22222_"+i]]);
      this["hitCircle22222_"+i].body.collideWorldBounds = true;
      } 
    
    //blush 
  
  //eyelash
    this.hitGroup11 = game.add.group();
      for(var i=0; i<=Main.color_777X.length-1; i++)
      {
      this["hitCircle3_"+i] = game.add.graphics(Main.color_777X[i],Main.color_777Y[i]);
      this["hitCircle3_"+i].beginFill(0x0000FF,0);
      this["hitCircle3_"+i].drawCircle(0,0,35);
      this["hitCircle3_"+i].id = i;
      this.hitGroup11.add(this["hitCircle3_"+i]);
      game.physics.arcade.enable([this["hitCircle3_"+i]]);
      this["hitCircle3_"+i].body.collideWorldBounds = true;
      } 
    
     this.hitGroup12 = game.add.group();
      for(var i=0; i<=Main.color_777X.length-1; i++)
      {
      this["hitCircle33_"+i] = game.add.graphics(Main.color_777X[i],Main.color_777Y[i]);
      this["hitCircle33_"+i].beginFill(0x0000FF,0);
      this["hitCircle33_"+i].drawCircle(0,0,35);
      this["hitCircle33_"+i].id = i;
      this.hitGroup12.add(this["hitCircle33_"+i]);
      game.physics.arcade.enable([this["hitCircle33_"+i]]);
      this["hitCircle33_"+i].body.collideWorldBounds = true;
      } 
      
     this.hitGroup13 = game.add.group();
      for(var i=0; i<=Main.color_777X.length-1; i++)
      {
      this["hitCircle333_"+i] = game.add.graphics(Main.color_777X[i],Main.color_777Y[i]);
      this["hitCircle333_"+i].beginFill(0x0000FF,0);
      this["hitCircle333_"+i].drawCircle(0,0,35);
      this["hitCircle333_"+i].id = i;
      this.hitGroup13.add(this["hitCircle333_"+i]);
      game.physics.arcade.enable([this["hitCircle333_"+i]]);
      this["hitCircle333_"+i].body.collideWorldBounds = true;
      } 
    
      this.hitGroup14 = game.add.group();
      for(var i=0; i<=Main.color_777X.length-1; i++)
      {
      this["hitCircle3333_"+i] = game.add.graphics(Main.color_777X[i],Main.color_777Y[i]);
      this["hitCircle3333_"+i].beginFill(0x0000FF,0);
      this["hitCircle3333_"+i].drawCircle(0,0,35);
      this["hitCircle3333_"+i].id = i;
      this.hitGroup14.add(this["hitCircle3333_"+i]);
      game.physics.arcade.enable([this["hitCircle3333_"+i]]);
      this["hitCircle3333_"+i].body.collideWorldBounds = true;
      }
      this.hitGroup15 = game.add.group();
      for(var i=0; i<=Main.color_777X.length-1; i++)
      {
      this["hitCircle33333_"+i] = game.add.graphics(Main.color_777X[i],Main.color_777Y[i]);
      this["hitCircle33333_"+i].beginFill(0x0000FF,0);
      this["hitCircle33333_"+i].drawCircle(0,0,35);
      this["hitCircle33333_"+i].id = i;
      this.hitGroup15.add(this["hitCircle33333_"+i]);
      game.physics.arcade.enable([this["hitCircle33333_"+i]]);
      this["hitCircle33333_"+i].body.collideWorldBounds = true;
      }
      this.hitGroup16 = game.add.group();
      for(var i=0; i<=Main.color_777X.length-1; i++)
      {
      this["hitCircle333333_"+i] = game.add.graphics(Main.color_777X[i],Main.color_777Y[i]);
      this["hitCircle333333_"+i].beginFill(0x0000FF,0);
      this["hitCircle333333_"+i].drawCircle(0,0,35);
      this["hitCircle333333_"+i].id = i;
      this.hitGroup16.add(this["hitCircle333333_"+i]);
      game.physics.arcade.enable([this["hitCircle333333_"+i]]);
      this["hitCircle333333_"+i].body.collideWorldBounds = true;
      } 
    
    //eyelash 
     //lipstic 
  
     this.hitGroup17 = game.add.group();
      for(var i=0; i<=Main.color_888X.length-1; i++)
      {
      this["hitCircle4_"+i] = game.add.graphics(Main.color_888X[i],Main.color_888Y[i]);
      this["hitCircle4_"+i].beginFill(0x0000FF,0);
      this["hitCircle4_"+i].drawCircle(0,0,35);
      this["hitCircle4_"+i].id = i;
      this.hitGroup17.add(this["hitCircle4_"+i]);
      game.physics.arcade.enable([this["hitCircle4_"+i]]);
      this["hitCircle4_"+i].body.collideWorldBounds = true;
      } 
    
     this.hitGroup18 = game.add.group();
      for(var i=0; i<=Main.color_888X.length-1; i++)
      {
      this["hitCircle44_"+i] = game.add.graphics(Main.color_888X[i],Main.color_888Y[i]);
      this["hitCircle44_"+i].beginFill(0x0000FF,0);
      this["hitCircle44_"+i].drawCircle(0,0,35);
      this["hitCircle44_"+i].id = i;
      this.hitGroup18.add(this["hitCircle44_"+i]);
      game.physics.arcade.enable([this["hitCircle44_"+i]]);
      this["hitCircle44_"+i].body.collideWorldBounds = true;
      } 
    
     this.hitGroup19 = game.add.group();
      for(var i=0; i<=Main.color_888X.length-1; i++)
      {
      this["hitCircle444_"+i] = game.add.graphics(Main.color_888X[i],Main.color_888Y[i]);
      this["hitCircle444_"+i].beginFill(0x0000FF,0);
      this["hitCircle444_"+i].drawCircle(0,0,35);
      this["hitCircle444_"+i].id = i;
      this.hitGroup19.add(this["hitCircle444_"+i]);
      game.physics.arcade.enable([this["hitCircle444_"+i]]);
      this["hitCircle444_"+i].body.collideWorldBounds = true;
      } 
    
      this.hitGroup20 = game.add.group();
      for(var i=0; i<=Main.color_888X.length-1; i++)
      {
      this["hitCircle4444_"+i] = game.add.graphics(Main.color_888X[i],Main.color_888Y[i]);
      this["hitCircle4444_"+i].beginFill(0x0000FF,0);
      this["hitCircle4444_"+i].drawCircle(0,0,35);
      this["hitCircle4444_"+i].id = i;
      this.hitGroup20.add(this["hitCircle4444_"+i]);
      game.physics.arcade.enable([this["hitCircle4444_"+i]]);
      this["hitCircle4444_"+i].body.collideWorldBounds = true;
      } 
    
     this.hitGroup21 = game.add.group();
      for(var i=0; i<=Main.color_888X.length-1; i++)
      {
      this["hitCircle44444_"+i] = game.add.graphics(Main.color_888X[i],Main.color_888Y[i]);
      this["hitCircle44444_"+i].beginFill(0x0000FF,0);
      this["hitCircle44444_"+i].drawCircle(0,0,35);
      this["hitCircle44444_"+i].id = i;
      this.hitGroup21.add(this["hitCircle44444_"+i]);
      game.physics.arcade.enable([this["hitCircle44444_"+i]]);
      this["hitCircle44444_"+i].body.collideWorldBounds = true;
      } 
    
     this.hitGroup22 = game.add.group();
      for(var i=0; i<=Main.color_888X.length-1; i++)
      {
      this["hitCircle444444_"+i] = game.add.graphics(Main.color_888X[i],Main.color_888Y[i]);
      this["hitCircle444444_"+i].beginFill(0x0000FF,0);
      this["hitCircle444444_"+i].drawCircle(0,0,35);
      this["hitCircle444444_"+i].id = i;
      this.hitGroup22.add(this["hitCircle444444_"+i]);
      game.physics.arcade.enable([this["hitCircle444444_"+i]]);
      this["hitCircle444444_"+i].body.collideWorldBounds = true;
      } 
    
      this.hitGroup23 = game.add.group();
      for(var i=0; i<=Main.color_888X.length-1; i++)
      {
      this["hitCircle4444444_"+i] = game.add.graphics(Main.color_888X[i],Main.color_888Y[i]);
      this["hitCircle4444444_"+i].beginFill(0x0000FF,0);
      this["hitCircle4444444_"+i].drawCircle(0,0,35);
      this["hitCircle4444444_"+i].id = i;
      this.hitGroup23.add(this["hitCircle4444444_"+i]);
      game.physics.arcade.enable([this["hitCircle4444444_"+i]]);
      this["hitCircle4444444_"+i].body.collideWorldBounds = true;
      } 
    //lipstic 
 
 
    //eyeshade
      this.dragCircle = game.add.graphics(0,0);
      this.dragCircle.beginFill(0xFF0000, 0);
      this.dragCircle.drawCircle(0,0,25);
      this.dragCircle.endFill(); 
        
      this.dragCircle2 = game.add.graphics(0,0);
      this.dragCircle2.beginFill(0xFF0000, 0);
      this.dragCircle2.drawCircle(0,0,25);
      this.dragCircle2.endFill();    
        
      this.dragCircle3 = game.add.graphics(0,0);
      this.dragCircle3.beginFill(0xFF0000, 0);
      this.dragCircle3.drawCircle(0,0,25);
      this.dragCircle3.endFill();
      
      this.dragCircle4 = game.add.graphics(0,0);
      this.dragCircle4.beginFill(0xFF0000, 0);
      this.dragCircle4.drawCircle(0,0,25);
      this.dragCircle4.endFill();
      
      this.dragCircle5 = game.add.graphics(0,0);
      this.dragCircle5.beginFill(0xFF0000, 0);
      this.dragCircle5.drawCircle(0,0,25);
      this.dragCircle5.endFill();   
        //eyeshade
        
        //blush
      this.dragCircle6 = game.add.graphics(0,0);
      this.dragCircle6.beginFill(0xFF0000, 0);
      this.dragCircle6.drawCircle(0,0,25);
      this.dragCircle6.endFill();     
        
      this.dragCircle7 = game.add.graphics(0,0);
      this.dragCircle7.beginFill(0xFF0000, 0);
      this.dragCircle7.drawCircle(0,0,25);
      this.dragCircle7.endFill();      
        
      this.dragCircle8 = game.add.graphics(0,0);
      this.dragCircle8.beginFill(0xFF0000, 0);
      this.dragCircle8.drawCircle(0,0,25);
      this.dragCircle8.endFill();
      
      this.dragCircle9 = game.add.graphics(0,0);
      this.dragCircle9.beginFill(0xFF0000, 0);
      this.dragCircle9.drawCircle(0,0,25);
      this.dragCircle9.endFill();   
      
      this.dragCircle10 = game.add.graphics(0,0);
      this.dragCircle10.beginFill(0xFF0000, 0);
      this.dragCircle10.drawCircle(0,0,25);
      this.dragCircle10.endFill();  
        //blush
        
     //eyelash
        
      this.dragCircle11 = game.add.graphics(0,0);
      this.dragCircle11.beginFill(0xFF0000, 0);
      this.dragCircle11.drawCircle(0,0,25);
      this.dragCircle11.endFill();   
        
      this.dragCircle12 = game.add.graphics(0,0);
      this.dragCircle12.beginFill(0xFF0000, 0);
      this.dragCircle12.drawCircle(0,0,25);
      this.dragCircle12.endFill();     
        
      this.dragCircle13 = game.add.graphics(0,0);
      this.dragCircle13.beginFill(0xFF0000, 0);
      this.dragCircle13.drawCircle(0,0,25);
      this.dragCircle13.endFill();      
        
      this.dragCircle14 = game.add.graphics(0,0);
      this.dragCircle14.beginFill(0xFF0000, 0);
      this.dragCircle14.drawCircle(0,0,25);
      this.dragCircle14.endFill();
      
      this.dragCircle15 = game.add.graphics(0,0);
      this.dragCircle15.beginFill(0xFF0000, 0);
      this.dragCircle15.drawCircle(0,0,25);
      this.dragCircle15.endFill();
      
      this.dragCircle16 = game.add.graphics(0,0);
      this.dragCircle16.beginFill(0xFF0000, 0);
      this.dragCircle16.drawCircle(0,0,25);
      this.dragCircle16.endFill(); 
        //eyelash    
        
      //lipstic
        
      this.dragCircle17 = game.add.graphics(0,0);
      this.dragCircle17.beginFill(0xFF0000, 0);
      this.dragCircle17.drawCircle(0,0,15);
      this.dragCircle17.endFill();   
        
      this.dragCircle18 = game.add.graphics(0,0);
      this.dragCircle18.beginFill(0xFF0000, 0);
      this.dragCircle18.drawCircle(0,0,15);
      this.dragCircle18.endFill();     
        
      this.dragCircle19 = game.add.graphics(0,0);
      this.dragCircle19.beginFill(0xFF0000, 0);
      this.dragCircle19.drawCircle(0,0,15);
      this.dragCircle19.endFill();      
        
      this.dragCircle20 = game.add.graphics(0,0);
      this.dragCircle20.beginFill(0xFF0000, 0);
      this.dragCircle20.drawCircle(0,0,15);
      this.dragCircle20.endFill();
      
      this.dragCircle21 = game.add.graphics(0,0);
      this.dragCircle21.beginFill(0xFF0000, 0);
      this.dragCircle21.drawCircle(0,0,15);
      this.dragCircle21.endFill();     
        
      this.dragCircle22 = game.add.graphics(0,0);
      this.dragCircle22.beginFill(0xFF0000, 0);
      this.dragCircle22.drawCircle(0,0,15);
      this.dragCircle22.endFill();      
        
      this.dragCircle23 = game.add.graphics(0,0);
      this.dragCircle23.beginFill(0xFF0000, 0);
      this.dragCircle23.drawCircle(0,0,15);
      this.dragCircle23.endFill(); 
        //lipstic    
        
        //eyeshade
    
        game.physics.arcade.enable([this.dragCircle]);
       this.dragCircle.body.collideWorldBounds = true;
       this.dragCircle.body.onCollide = new Phaser.Signal();
      this.dragCircle.body.onCollide.add(this.hitSprite, this);
        
       game.physics.arcade.enable([this.dragCircle2]);
       this.dragCircle2.body.collideWorldBounds = true;
       this.dragCircle2.body.onCollide = new Phaser.Signal();
       this.dragCircle2.body.onCollide.add(this.hitSprite2, this);  
         
       game.physics.arcade.enable([this.dragCircle3]);
       this.dragCircle3.body.collideWorldBounds = true;
       this.dragCircle3.body.onCollide = new Phaser.Signal();
       this.dragCircle3.body.onCollide.add(this.hitSprite3, this);  
         
       game.physics.arcade.enable([this.dragCircle4]);
       this.dragCircle4.body.collideWorldBounds = true;
       this.dragCircle4.body.onCollide = new Phaser.Signal();
       this.dragCircle4.body.onCollide.add(this.hitSprite4, this);
       
       game.physics.arcade.enable([this.dragCircle5]);
       this.dragCircle5.body.collideWorldBounds = true;
       this.dragCircle5.body.onCollide = new Phaser.Signal();
       this.dragCircle5.body.onCollide.add(this.hitSprite5, this);  
         
   //eyeshade
   
   //
   //blush
       game.physics.arcade.enable([this.dragCircle6]);
       this.dragCircle6.body.collideWorldBounds = true;
       this.dragCircle6.body.onCollide = new Phaser.Signal();
       this.dragCircle6.body.onCollide.add(this.hitSprite6, this);  
   
        game.physics.arcade.enable([this.dragCircle7]);
       this.dragCircle7.body.collideWorldBounds = true;
       this.dragCircle7.body.onCollide = new Phaser.Signal();
       this.dragCircle7.body.onCollide.add(this.hitSprite7, this);  
   
       game.physics.arcade.enable([this.dragCircle8]);
       this.dragCircle8.body.collideWorldBounds = true;
       this.dragCircle8.body.onCollide = new Phaser.Signal();
       this.dragCircle8.body.onCollide.add(this.hitSprite8, this);
       
         game.physics.arcade.enable([this.dragCircle9]);
       this.dragCircle9.body.collideWorldBounds = true;
       this.dragCircle9.body.onCollide = new Phaser.Signal();
       this.dragCircle9.body.onCollide.add(this.hitSprite9, this);
       
       game.physics.arcade.enable([this.dragCircle10]);
       this.dragCircle10.body.collideWorldBounds = true;
       this.dragCircle10.body.onCollide = new Phaser.Signal();
       this.dragCircle10.body.onCollide.add(this.hitSprite10, this);      

   
   //blush
   
   //eyelash
       game.physics.arcade.enable([this.dragCircle11]);
       this.dragCircle11.body.collideWorldBounds = true;
       this.dragCircle11.body.onCollide = new Phaser.Signal();
       this.dragCircle11.body.onCollide.add(this.hitSprite11, this);  
   
       game.physics.arcade.enable([this.dragCircle12]);
       this.dragCircle12.body.collideWorldBounds = true;
       this.dragCircle12.body.onCollide = new Phaser.Signal();
       this.dragCircle12.body.onCollide.add(this.hitSprite12, this);  
   
        game.physics.arcade.enable([this.dragCircle13]);
       this.dragCircle13.body.collideWorldBounds = true;
       this.dragCircle13.body.onCollide = new Phaser.Signal();
       this.dragCircle13.body.onCollide.add(this.hitSprite13, this);  
   
       game.physics.arcade.enable([this.dragCircle14]);
       this.dragCircle14.body.collideWorldBounds = true;
       this.dragCircle14.body.onCollide = new Phaser.Signal();
       this.dragCircle14.body.onCollide.add(this.hitSprite14, this);
       
       game.physics.arcade.enable([this.dragCircle15]);
       this.dragCircle15.body.collideWorldBounds = true;
       this.dragCircle15.body.onCollide = new Phaser.Signal();
       this.dragCircle15.body.onCollide.add(this.hitSprite15, this);  
   
       game.physics.arcade.enable([this.dragCircle16]);
       this.dragCircle16.body.collideWorldBounds = true;
       this.dragCircle16.body.onCollide = new Phaser.Signal();
       this.dragCircle16.body.onCollide.add(this.hitSprite16, this);
   
   //eyelash
   
   //lipstic
       game.physics.arcade.enable([this.dragCircle17]);
       this.dragCircle17.body.collideWorldBounds = true;
       this.dragCircle17.body.onCollide = new Phaser.Signal();
       this.dragCircle17.body.onCollide.add(this.hitSprite17, this);  
   
       game.physics.arcade.enable([this.dragCircle18]);
       this.dragCircle18.body.collideWorldBounds = true;
       this.dragCircle18.body.onCollide = new Phaser.Signal();
       this.dragCircle18.body.onCollide.add(this.hitSprite18, this);  
   
        game.physics.arcade.enable([this.dragCircle19]);
       this.dragCircle19.body.collideWorldBounds = true;
       this.dragCircle19.body.onCollide = new Phaser.Signal();
       this.dragCircle19.body.onCollide.add(this.hitSprite19, this);  
   
       game.physics.arcade.enable([this.dragCircle20]);
       this.dragCircle20.body.collideWorldBounds = true;
       this.dragCircle20.body.onCollide = new Phaser.Signal();
       this.dragCircle20.body.onCollide.add(this.hitSprite20, this);
       
       game.physics.arcade.enable([this.dragCircle21]);
       this.dragCircle21.body.collideWorldBounds = true;
       this.dragCircle21.body.onCollide = new Phaser.Signal();
       this.dragCircle21.body.onCollide.add(this.hitSprite21, this);  
   
        game.physics.arcade.enable([this.dragCircle22]);
       this.dragCircle22.body.collideWorldBounds = true;
       this.dragCircle22.body.onCollide = new Phaser.Signal();
       this.dragCircle22.body.onCollide.add(this.hitSprite22, this);  
   
       game.physics.arcade.enable([this.dragCircle23]);
       this.dragCircle23.body.collideWorldBounds = true;
       this.dragCircle23.body.onCollide = new Phaser.Signal();
       this.dragCircle23.body.onCollide.add(this.hitSprite23, this);  
   
   //lipstic
         
         this.morebtn = game.add.sprite(73.45,738.3,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(431.25,738.3,'donebtn');
         this.donebtn.anchor.setTo(0.5);
          this.donebtn.scale.setTo(0);
          this.donebtn.inputEnabled = true;
          this.donebtn.input.useHandCursor = true;
          this.donebtn.events.onInputUp.add(this.enterRoom, this);
          this.donebtn.events.onInputOver.add(this.btnOver, this);
          this.donebtn.events.onInputOut.add(this.btnOut, this);
         
          if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true)
        }
         
         this.logoVar = game.add.sprite(4, 6, 'logo');
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
        
  iconFun1:function()
{      
   this.cupboardGroup4.visible=true;  
   this.cupboardGroup2.visible=false;  
   this.cupboardGroup3.visible=false;  
   this.cupboardGroup1.visible=false;  
    this.stepCount++; 
  },
   iconFun2:function()
{
       this.stepCount++; 

   this.cupboardGroup1.visible=true;  
   this.cupboardGroup3.visible=false;  
   this.cupboardGroup4.visible=false;  
   this.cupboardGroup2.visible=false;    
  },
    iconFun3:function()
{
       this.stepCount++; 
   this.cupboardGroup2.visible=true;  
   this.cupboardGroup4.visible=false;  
   this.cupboardGroup1.visible=false;  
   this.cupboardGroup3.visible=false;     
  },
    iconFun4:function()
{
       this.stepCount++; 

   this.cupboardGroup3.visible=true;  
   this.cupboardGroup1.visible=false;  
   this.cupboardGroup2.visible=false;  
   this.cupboardGroup4.visible=false;     
  },  
    
//   pickT1:function()
//{
//  
//    this.anna_line2.visible=false;
//    this.anna_line3.visible=false;
//    this.anna_line4.visible=false;
//    this.anna_line5.visible=false;
//
//    if(this.hitCount<8){
//      this.t1Drag=true;
//   }   
//    this.anna_line1.visible=true;
//   this.circle1.drawCircle(0,0,20);
//   this.anna_eyeshade1.visible = true;
//   this.anna_eyeshade2.visible = false;
//   this.anna_eyeshade3.visible = false;
//   this.anna_eyeshade4.visible = false;
//   this.anna_eyeshade5.visible = false;
//   this.t1.visible=true;
//   this.t1.alpha=1;
//      
//   this.t1.inputEnabled = false;
//   },
  pickT1:function()
{
    this.anna_line2.visible=false;
    this.anna_line3.visible=false;
    this.anna_line4.visible=false;
    this.anna_line5.visible=false;

    this.anna_line1.visible=true;
    this.circle1.drawCircle(0,0,20);
   this.anna_eyeshade1.visible = true;
   this.anna_eyeshade2.visible = false;
   this.anna_eyeshade3.visible = false;
   this.anna_eyeshade4.visible = false;
   this.anna_eyeshade5.visible = false;
   this.t1.visible=true;
      this.t1.alpha=1;

       this.t1Drag=true;
   this.t1.inputEnabled = false;
   },
   dropT1:function()
{
    this.hitCount=0;
    //this.anna_line2.visible=false;
    //this.anna_line3.visible=false;
    //this.anna_line4.visible=false;
    //this.anna_line5.visible=false;
    //this.anna_line1.visible=false;
   game.add.tween(this.t1).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         this.t1.visible=false;
         this.t1Drag = false;

      },this)
   },
   
   pickT2:function()
{
    this.anna_line1.visible=false;
    this.anna_line3.visible=false;
    this.anna_line4.visible=false;
    this.anna_line5.visible=false;

    this.anna_line2.visible=true;
    this.circle2.drawCircle(0,0,20);
   this.anna_eyeshade2.visible = true;
   this.anna_eyeshade1.visible = false;
   this.anna_eyeshade3.visible = false;
   this.anna_eyeshade4.visible = false;
   this.anna_eyeshade5.visible = false;
   this.t11.visible=true;
      this.t11.alpha=1;

       this.t11Drag=true;
   this.t11.inputEnabled = false;
   },
   dropT2:function()
{
   //this.anna_line2.visible=false;
   // this.anna_line3.visible=false;
   // this.anna_line4.visible=false;
   // this.anna_line5.visible=false;
   // this.anna_line1.visible=false;
             this.hitCount2=0;

   game.add.tween(this.t11).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         this.t11.visible=false;
         this.t11Drag = false;

      },this)
   },
   
  pickT3:function()
{
    this.anna_line2.visible=false;
    this.anna_line1.visible=false;
    this.anna_line4.visible=false;
    this.anna_line5.visible=false;
    
    this.anna_line3.visible=true;
    this.circle3.drawCircle(0,0,20);
   this.anna_eyeshade3.visible = true;
   this.anna_eyeshade1.visible = false;
   this.anna_eyeshade2.visible = false;
   this.anna_eyeshade4.visible = false;
   this.anna_eyeshade5.visible = false;
   this.t111.visible=true;
      this.t111.alpha=1;

       this.t111Drag=true;
   this.t111.inputEnabled = false;
   },
   dropT3:function()
{
                this.hitCount3=0;
//this.anna_line2.visible=false;
//    this.anna_line3.visible=false;
//    this.anna_line4.visible=false;
//    this.anna_line5.visible=false;
//    this.anna_line1.visible=false;
   
   game.add.tween(this.t111).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         this.t111.visible=false;
         this.t111Drag = false;

      },this)
   },  
   
   pickT4:function()
{
   
    this.anna_line2.visible=false;
    this.anna_line3.visible=false;
    this.anna_line1.visible=false;
    this.anna_line5.visible=false;
   
    this.anna_line4.visible=true;
    this.circle4.drawCircle(0,0,20);
   this.anna_eyeshade4.visible = true;
   this.anna_eyeshade5.visible = false;
   this.anna_eyeshade1.visible = false;
   this.anna_eyeshade2.visible = false;
   this.anna_eyeshade3.visible = false;
   this.t1111.visible=true;
         this.t1111.alpha=1;

       this.t1111Drag=true;
   this.t1111.inputEnabled = false;
   },
   dropT4:function()
{
                this.hitCount4=0;
//this.anna_line2.visible=false;
//    this.anna_line3.visible=false;
//    this.anna_line4.visible=false;
//    this.anna_line5.visible=false;
//    this.anna_line1.visible=false;
   game.add.tween(this.t1111).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         this.t1111.visible=false;
         this.t1111Drag = false;

      },this)
   },   
 pickT5:function()
{
   
    this.anna_line2.visible=false;
    this.anna_line3.visible=false;
    this.anna_line1.visible=false;
   
    this.anna_line4.visible=false;
    this.anna_line5.visible=true;
    this.circle5.drawCircle(0,0,20);
   this.anna_eyeshade5.visible = true;
   this.anna_eyeshade4.visible = false;
   this.anna_eyeshade1.visible = false;
   this.anna_eyeshade2.visible = false;
   this.anna_eyeshade3.visible = false;
   this.t11111.visible=true;
         this.t11111.alpha=1;

       this.t11111Drag=true;
   this.t11111.inputEnabled = false;
   },
   dropT5:function()
{
   //this.anna_line2.visible=false;
   // this.anna_line3.visible=false;
   // this.anna_line4.visible=false;
   // this.anna_line5.visible=false;
   // this.anna_line1.visible=false;
                this.hitCount5=0;
   game.add.tween(this.t11111).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         this.t11111.visible=false;
         this.t11111Drag = false;

      },this)
   },   
pickT6:function()
{
    this.anna_line9.visible=false;
    this.anna_line10.visible=false;
    this.anna_line7.visible=false;
    this.anna_line8.visible=false;
    this.anna_line6.visible=true;
    this.circle6.drawCircle(0,0,20);
   this.anna_blush1.visible = true;
   this.anna_blush4.visible = false;
   this.anna_blush2.visible = false;
   this.anna_blush5.visible = false;
   this.anna_blush3.visible = false;
   this.t2.visible=true;
            this.t2.alpha=1;
       this.t2Drag=true;
   this.t2.inputEnabled = false;
   },
   dropT6:function()
{
   //this.anna_line9.visible=false;
   // this.anna_line10.visible=false;
   // this.anna_line7.visible=false;
   // this.anna_line8.visible=false;
   // this.anna_line6.visible=false;
                this.hitCount6=0;
   game.add.tween(this.t2).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t2.visible=false;
         this.t2Drag = false;
      },this)
   },
    pickT7:function()
{
    this.anna_line10.visible=false;
    this.anna_line6.visible=false;
    this.anna_line9.visible=false;
    this.anna_line8.visible=false;
    
    this.anna_line7.visible=true;
    this.circle7.drawCircle(0,0,20);
   this.anna_blush2.visible = true;
   this.anna_blush1.visible = false;
   this.anna_blush4.visible = false;
   this.anna_blush5.visible = false;
   this.anna_blush3.visible = false;
   this.t22.visible=true;
               this.t22.alpha=1;
       this.t22Drag=true;
   this.t22.inputEnabled = false;
   },
   dropT7:function()
{
   //this.anna_line9.visible=false;
   // this.anna_line10.visible=false;
   // this.anna_line7.visible=false;
   // this.anna_line8.visible=false;
   // this.anna_line6.visible=false;
                this.hitCount7=0;
   game.add.tween(this.t22).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t22.visible=false;
         this.t22Drag = false;
      },this)
   },    
    pickT8:function()
{
    this.anna_line6.visible=false;
    this.anna_line7.visible=false;
    this.anna_line9.visible=false;
    this.anna_line10.visible=false;
    this.anna_line8.visible=true;
    this.circle8.drawCircle(0,0,20);
   this.anna_blush3.visible = true;
   this.anna_blush1.visible = false;
   this.anna_blush5.visible = false;
   this.anna_blush2.visible = false;
   this.anna_blush4.visible = false;
   this.t222.visible=true;
   this.t222.alpha=1;
       this.t222Drag=true;
   this.t222.inputEnabled = false;
   },
   dropT8:function()
{
   //this.anna_line9.visible=false;
   // this.anna_line10.visible=false;
   // this.anna_line7.visible=false;
   // this.anna_line8.visible=false;
   // this.anna_line6.visible=false;
                this.hitCount8=0;
   game.add.tween(this.t222).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t222.visible=false;
         this.t222Drag = false;
      },this)
   },      
pickT9:function()
{
    this.anna_line6.visible=false;
    this.anna_line7.visible=false;
    this.anna_line8.visible=false;
    this.anna_line10.visible=false;
    this.anna_line9.visible=true;
    this.circle9.drawCircle(0,0,20);
   this.anna_blush4.visible = true;
   this.anna_blush1.visible = false;
   this.anna_blush5.visible = false;
   this.anna_blush2.visible = false;
   this.anna_blush3.visible = false;
   this.t2222.visible=true;
      this.t2222.alpha=1;
       this.t2222Drag=true;
   this.t2222.inputEnabled = false;
   },
   dropT9:function()
{
   //this.anna_line9.visible=false;
   // this.anna_line10.visible=false;
   // this.anna_line7.visible=false;
   // this.anna_line8.visible=false;
   // this.anna_line6.visible=false;
                this.hitCount9=0;
   game.add.tween(this.t2222).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t2222.visible=false;
         this.t2222Drag = false;
      },this)
   },
pickT10:function()
{
    this.anna_line6.visible=false;
    this.anna_line7.visible=false;
    this.anna_line8.visible=false;
    this.anna_line9.visible=false;
    this.anna_line10.visible=true;
    this.circle10.drawCircle(0,0,20);
   this.anna_blush5.visible = true;
   this.anna_blush1.visible = false;
   this.anna_blush4.visible = false;
   this.anna_blush2.visible = false;
   this.anna_blush3.visible = false;
   this.t22222.visible=true;
      this.t22222.alpha=1;
       this.t22222Drag=true;
   this.t22222.inputEnabled = false;
   },
   dropT10:function()
{
   //this.anna_line9.visible=false;
   // this.anna_line10.visible=false;
   // this.anna_line7.visible=false;
   // this.anna_line8.visible=false;
   // this.anna_line6.visible=false;
                this.hitCount10=0;
   game.add.tween(this.t22222).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t22222.visible=false;
         this.t22222Drag = false;
      },this)
   }, 
      pickT11:function()
{
    this.anna_line12.visible=false;
    this.anna_line13.visible=false;
    this.anna_line14.visible=false;
    this.anna_line15.visible=false;
    this.anna_line16.visible=false;
   
       this.anna_firsteyelash.alpha=1;

    this.anna_line11.visible=true;
    this.circle11.drawCircle(0,0,20);
   this.anna_eyelash1.visible = true;
   this.anna_eyelash2.visible = false;
   this.anna_eyelash3.visible = false;
   this.anna_eyelash4.visible = false;
   this.anna_eyelash5.visible = false;
   this.anna_eyelash6.visible = false;
   this.t3.visible=true;
      this.t3.alpha=1;
       this.t3Drag=true;
   this.t3.inputEnabled = false;
   },
   dropT11:function()
{
   //this.anna_line11.visible=false;
   //this.anna_line12.visible=false;
   // this.anna_line13.visible=false;
   // this.anna_line14.visible=false;
   // this.anna_line15.visible=false;
   // this.anna_line16.visible=false;
                this.hitCount11=0;
   game.add.tween(this.t3).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t3.visible=false;
         this.t3Drag = false;
      },this)
   },
    pickT12:function()
{
    this.anna_line11.visible=false;
    this.anna_line13.visible=false;
    this.anna_line14.visible=false;
    this.anna_line15.visible=false;
    this.anna_line16.visible=false;
   
       this.anna_firsteyelash.alpha=1;

    this.anna_line12.visible=true;
    this.circle12.drawCircle(0,0,20);
   this.anna_eyelash2.visible = true;
   this.anna_eyelash1.visible = false;
   this.anna_eyelash3.visible = false;
   this.anna_eyelash4.visible = false;
   this.anna_eyelash5.visible = false;
   this.anna_eyelash6.visible = false;
   this.t33.visible=true;
      this.t33.alpha=1;
       this.t33Drag=true;
   this.t33.inputEnabled = false;
   },
   dropT12:function()
{
   //this.anna_line11.visible=false;
   //this.anna_line12.visible=false;
   // this.anna_line13.visible=false;
   // this.anna_line14.visible=false;
   // this.anna_line15.visible=false;
   // this.anna_line16.visible=false;
                this.hitCount12=0;
   game.add.tween(this.t33).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t33.visible=false;
         this.t33Drag = false;
      },this)
   },
   pickT13:function()
{
    this.anna_line11.visible=false;
    this.anna_line12.visible=false;
    this.anna_line14.visible=false;
    this.anna_line15.visible=false;
    this.anna_line16.visible=false;
   
       this.anna_firsteyelash.alpha=1;

    this.anna_line13.visible=true;
    this.circle13.drawCircle(0,0,20);
   this.anna_eyelash3.visible = true;
   this.anna_eyelash1.visible = false;
   this.anna_eyelash2.visible = false;
   this.anna_eyelash4.visible = false;
   this.anna_eyelash5.visible = false;
   this.anna_eyelash6.visible = false;
   this.t333.visible=true;
      this.t333.alpha=1;
       this.t333Drag=true;
   this.t333.inputEnabled = false;
   },
   dropT13:function()
{
   //this.anna_line11.visible=false;
   //this.anna_line12.visible=false;
   // this.anna_line13.visible=false;
   // this.anna_line14.visible=false;
   // this.anna_line15.visible=false;
   // this.anna_line16.visible=false;
                this.hitCount13=0;
   game.add.tween(this.t333).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t333.visible=false;
         this.t333Drag = false;
      },this)
   },
 pickT14:function()
{
    this.anna_line11.visible=false;
    this.anna_line12.visible=false;
    this.anna_line13.visible=false;
    this.anna_line15.visible=false;
    this.anna_line16.visible=false;
   
       this.anna_firsteyelash.alpha=1;

    this.anna_line14.visible=true;
    this.circle14.drawCircle(0,0,20);
   this.anna_eyelash4.visible = true;
   this.anna_eyelash1.visible = false;
   this.anna_eyelash2.visible = false;
   this.anna_eyelash3.visible = false;
   this.anna_eyelash5.visible = false;
   this.anna_eyelash6.visible = false;
   this.t3333.visible=true;
      this.t3333.alpha=1;
       this.t3333Drag=true;
   this.t3333.inputEnabled = false;
   },
   dropT14:function()
{
   //this.anna_line11.visible=false;
   //this.anna_line12.visible=false;
   // this.anna_line13.visible=false;
   // this.anna_line14.visible=false;
   // this.anna_line15.visible=false;
   // this.anna_line16.visible=false;
                this.hitCount14=0;
   game.add.tween(this.t3333).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t3333.visible=false;
         this.t3333Drag = false;
      },this)
   },
pickT15:function()
{
    this.anna_line11.visible=false;
    this.anna_line12.visible=false;
    this.anna_line13.visible=false;
    this.anna_line14.visible=false;
    this.anna_line16.visible=false;
   
       this.anna_firsteyelash.alpha=1;

    this.anna_line15.visible=true;
    this.circle15.drawCircle(0,0,20);
   this.anna_eyelash5.visible = true;
   this.anna_eyelash1.visible = false;
   this.anna_eyelash2.visible = false;
   this.anna_eyelash3.visible = false;
   this.anna_eyelash4.visible = false;
   this.anna_eyelash6.visible = false;
   this.t33333.visible=true;
      this.t33333.alpha=1;
       this.t33333Drag=true;
   this.t33333.inputEnabled = false;
   },
   dropT15:function()
{
   //this.anna_line11.visible=false;
   //this.anna_line12.visible=false;
   // this.anna_line13.visible=false;
   // this.anna_line14.visible=false;
   // this.anna_line15.visible=false;
   // this.anna_line16.visible=false;
                this.hitCount15=0;
   game.add.tween(this.t33333).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t33333.visible=false;
         this.t33333Drag = false;
      },this)
   },
pickT16:function()
{
    this.anna_line11.visible=false;
    this.anna_line12.visible=false;
    this.anna_line13.visible=false;
    this.anna_line14.visible=false;
    this.anna_line15.visible=false;
   
       this.anna_firsteyelash.alpha=1;

    this.anna_line16.visible=true;
    this.circle16.drawCircle(0,0,20);
   this.anna_eyelash6.visible = true;
   this.anna_eyelash1.visible = false;
   this.anna_eyelash2.visible = false;
   this.anna_eyelash3.visible = false;
   this.anna_eyelash4.visible = false;
   this.anna_eyelash5.visible = false;
   this.t333333.visible=true;
      this.t333333.alpha=1;
       this.t333333Drag=true;
   this.t333333.inputEnabled = false;
   },
   dropT16:function()
{
   //this.anna_line11.visible=false;
   //this.anna_line12.visible=false;
   // this.anna_line13.visible=false;
   // this.anna_line14.visible=false;
   // this.anna_line15.visible=false;
   // this.anna_line16.visible=false;
                this.hitCount16=0;
   game.add.tween(this.t333333).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t333333.visible=false;
         this.t333333Drag = false;
      },this)
   },
pickT17:function()
{
    this.anna_line18.visible=false;
    this.anna_line19.visible=false;
    this.anna_line20.visible=false;
    this.anna_line21.visible=false;
    this.anna_line22.visible=false;
    this.anna_line23.visible=false;
   
    this.anna_line17.visible=true;
    this.circle17.drawCircle(0,0,20);
   this.anna_lipstic1.visible = true;
   this.anna_lipstic2.visible = false;
   this.anna_lipstic3.visible = false;
   this.anna_lipstic4.visible = false;
   this.anna_lipstic5.visible = false;
   this.anna_lipstic6.visible = false;
   this.anna_lipstic7.visible = false;
   this.t4.visible=true;
   this.t4.alpha=1;
   this.t4Drag=true;
   this.t4.inputEnabled = false;
   },
   dropT17:function()
{
   //this.anna_line17.visible=false;
   //this.anna_line18.visible=false;
   // this.anna_line19.visible=false;
   // this.anna_line20.visible=false;
   // this.anna_line21.visible=false;
   // this.anna_line22.visible=false;
   // this.anna_line23.visible=false;
                this.hitCount17=0;
   game.add.tween(this.t4).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t4.visible=false;
         this.t4Drag = false;
      },this)
   },     
pickT18:function()
{
    this.anna_line17.visible=false;
    this.anna_line19.visible=false;
    this.anna_line20.visible=false;
    this.anna_line21.visible=false;
    this.anna_line22.visible=false;
    this.anna_line23.visible=false;
   
    this.anna_line18.visible=true;
    this.circle18.drawCircle(0,0,20);
   this.anna_lipstic2.visible = true;
   this.anna_lipstic1.visible = false;
   this.anna_lipstic3.visible = false;
   this.anna_lipstic4.visible = false;
   this.anna_lipstic5.visible = false;
   this.anna_lipstic6.visible = false;
   this.anna_lipstic7.visible = false;
   this.t44.visible=true;
   this.t44.alpha=1;
   this.t44Drag=true;
   this.t44.inputEnabled = false;
   },
   dropT18:function()
{
   //this.anna_line17.visible=false;
   //this.anna_line18.visible=false;
   // this.anna_line19.visible=false;
   // this.anna_line20.visible=false;
   // this.anna_line21.visible=false;
   // this.anna_line22.visible=false;
   // this.anna_line23.visible=false;
                this.hitCount18=0;
   game.add.tween(this.t44).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t44.visible=false;
         this.t44Drag = false;
      },this)
   },
pickT19:function()
{
    this.anna_line17.visible=false;
    this.anna_line18.visible=false;
    this.anna_line20.visible=false;
    this.anna_line21.visible=false;
    this.anna_line22.visible=false;
    this.anna_line23.visible=false;
   
    this.anna_line19.visible=true;
    this.circle19.drawCircle(0,0,20);
   this.anna_lipstic3.visible = true;
   this.anna_lipstic1.visible = false;
   this.anna_lipstic2.visible = false;
   this.anna_lipstic4.visible = false;
   this.anna_lipstic5.visible = false;
   this.anna_lipstic6.visible = false;
   this.anna_lipstic7.visible = false;
   this.t444.visible=true;
   this.t444.alpha=1;
   this.t444Drag=true;
   this.t444.inputEnabled = false;
   },
   dropT19:function()
{
   //this.anna_line17.visible=false;
   //this.anna_line18.visible=false;
   // this.anna_line19.visible=false;
   // this.anna_line20.visible=false;
   // this.anna_line21.visible=false;
   // this.anna_line22.visible=false;
   // this.anna_line23.visible=false;
                this.hitCount19=0;
   game.add.tween(this.t444).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t444.visible=false;
         this.t444Drag = false;
      },this)
   },
pickT20:function()
{
   
    this.anna_line17.visible=false;
    this.anna_line18.visible=false;
    this.anna_line19.visible=false;
    this.anna_line21.visible=false;
    this.anna_line22.visible=false;
    this.anna_line23.visible=false;
   
    this.anna_line20.visible=true;
    this.circle20.drawCircle(0,0,20);
   this.anna_lipstic4.visible = true;
   this.anna_lipstic1.visible = false;
   this.anna_lipstic2.visible = false;
   this.anna_lipstic3.visible = false;
   this.anna_lipstic5.visible = false;
   this.anna_lipstic6.visible = false;
   this.anna_lipstic7.visible = false;
   this.t4444.visible=true;
   this.t4444.alpha=1;
   this.t4444Drag=true;
   this.t4444.inputEnabled = false;
   },
   dropT20:function()
{
   //this.anna_line17.visible=false;
   //this.anna_line18.visible=false;
   // this.anna_line19.visible=false;
   // this.anna_line20.visible=false;
   // this.anna_line21.visible=false;
   // this.anna_line22.visible=false;
   // this.anna_line23.visible=false;
                this.hitCount20=0;
   game.add.tween(this.t4444).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t4444.visible=false;
         this.t4444Drag = false;
      },this)
   },
pickT21:function()
{
    this.anna_line17.visible=false;
    this.anna_line18.visible=false;
    this.anna_line19.visible=false;
    this.anna_line20.visible=false;
    this.anna_line22.visible=false;
    this.anna_line23.visible=false;
   
    this.anna_line21.visible=true;
    this.circle21.drawCircle(0,0,20);
   this.anna_lipstic5.visible = true;
   this.anna_lipstic1.visible = false;
   this.anna_lipstic2.visible = false;
   this.anna_lipstic3.visible = false;
   this.anna_lipstic4.visible = false;
   this.anna_lipstic6.visible = false;
   this.anna_lipstic7.visible = false;
   this.t44444.visible=true;
   this.t44444.alpha=1;
   this.t44444Drag=true;
   this.t44444.inputEnabled = false;
   },
   dropT21:function()
{
   //this.anna_line17.visible=false;
   //this.anna_line18.visible=false;
   // this.anna_line19.visible=false;
   // this.anna_line20.visible=false;
   // this.anna_line21.visible=false;
   // this.anna_line22.visible=false;
   // this.anna_line23.visible=false;
                this.hitCount21=0;
   game.add.tween(this.t44444).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t44444.visible=false;
         this.t44444Drag = false;
      },this)
   },
pickT22:function()
{
    this.anna_line17.visible=false;
    this.anna_line18.visible=false;
    this.anna_line19.visible=false;
    this.anna_line20.visible=false;
    this.anna_line21.visible=false;
    this.anna_line23.visible=false;
   
    this.anna_line22.visible=true;
    this.circle22.drawCircle(0,0,20);
   this.anna_lipstic6.visible = true;
   this.anna_lipstic1.visible = false;
   this.anna_lipstic2.visible = false;
   this.anna_lipstic3.visible = false;
   this.anna_lipstic4.visible = false;
   this.anna_lipstic5.visible = false;
   this.anna_lipstic7.visible = false;
   this.t444444.visible=true;
   this.t444444.alpha=1;
   this.t444444Drag=true;
   this.t444444.inputEnabled = false;
   },
   dropT22:function()
{
   //this.anna_line17.visible=false;
   //this.anna_line18.visible=false;
   // this.anna_line19.visible=false;
   // this.anna_line20.visible=false;
   // this.anna_line21.visible=false;
   // this.anna_line22.visible=false;
   // this.anna_line23.visible=false;
                this.hitCount22=0;
   game.add.tween(this.t444444).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t444444.visible=false;
         this.t444444Drag = false;
      },this)
   },
pickT23:function()
{
    this.anna_line17.visible=false;
    this.anna_line18.visible=false;
    this.anna_line19.visible=false;
    this.anna_line20.visible=false;
    this.anna_line21.visible=false;
    this.anna_line22.visible=false;
   
    this.anna_line23.visible=true;
    this.circle23.drawCircle(0,0,20);
   this.anna_lipstic7.visible = true;
   this.anna_lipstic1.visible = false;
   this.anna_lipstic2.visible = false;
   this.anna_lipstic3.visible = false;
   this.anna_lipstic4.visible = false;
   this.anna_lipstic5.visible = false;
   this.anna_lipstic6.visible = false;
   this.t4444444.visible=true;
   this.t4444444.alpha=1;
   this.t4444444Drag=true;
   this.t4444444.inputEnabled = false;
   },
   dropT23:function()
{
   //this.anna_line17.visible=false;
   //this.anna_line18.visible=false;
   // this.anna_line19.visible=false;
   // this.anna_line20.visible=false;
   // this.anna_line21.visible=false;
   // this.anna_line22.visible=false;
   // this.anna_line23.visible=false;
                this.hitCount23=0;
   game.add.tween(this.t4444444).to({x:60.3, y:686.9}, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.t4444444.visible=false;
         this.t4444444Drag = false;
      },this)
   },
hitSprite:function(sprite1, sprite2){

         // this.objvar;
           if(this.hitCount==sprite2.id){
sprite2.visible=false;
            this.circle1.drawCircle(Main.color_111X[sprite2.id],Main.color_111Y[sprite2.id],155);
            this.hitCount++;
           }
     if (this.hitCount >= 8) {
      this.t1drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t1).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
         this.dragCircle.y=800;
  Main.makeupCount[0]='anna_eyeshade1';
    this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
       this.anna_eyeshade.loadTexture('anna_eyeshade1');
      this.circleGroup2.children[0].destroy();
      console.log(this.circleGroup2.children[0]);
      this.circle1 = game.add.graphics(10,20);
      this.circle1.beginFill(0x000000, 1);
      this.circleGroup2.add(this.circle1);
      this.circleGroup2.y = 40;
      this.anna_eyeshade1.mask = this.circle1;
                
              this.anna_line1.visible=false;
        },this);
     }
},     
hitSprite2:function(sprite1, sprite2){

           if(this.hitCount2==sprite2.id){
                           sprite2.visible=false;
          this.circle2.drawCircle(Main.color_111X[sprite2.id],Main.color_111Y[sprite2.id],155);
            this.hitCount2++;
           }
     if (this.hitCount2 >= 8) {
      this.t11drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t11).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
          this.dragCircle2.y=800;
Main.makeupCount[0]='anna_eyeshade2';
       this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
     this.anna_eyeshade.loadTexture('anna_eyeshade2');
      this.circleGroup3.children[0].destroy();
      console.log(this.circleGroup3.children[0]);
     this.circle2 = game.add.graphics(10,20);
      this.circle2.beginFill(0x000000, 1);
      this.circleGroup3.add(this.circle2);
      this.circleGroup3.y = 40;
      this.anna_eyeshade2.mask = this.circle2;
              this.anna_line2.visible=false;
        },this);
     }
},     
hitSprite3:function(sprite1, sprite2){
          if(this.hitCount3==sprite2.id){
                      sprite2.visible=false;
                this.circle3.drawCircle(Main.color_111X[sprite2.id],Main.color_111Y[sprite2.id],175);
                  this.hitCount3++;
           }
     if (this.hitCount3 >= 8) {
      this.t111drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t111).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
       this.dragCircle3.y=800;
Main.makeupCount[0]='anna_eyeshade3';
   this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
     this.anna_eyeshade.loadTexture('anna_eyeshade3');
      this.circleGroup4.children[0].destroy();
      console.log(this.circleGroup4.children[0]);
     this.circle3 = game.add.graphics(10,20);
      this.circle3.beginFill(0x000000, 1);
      this.circleGroup4.add(this.circle3);
      this.circleGroup4.y = 40;
      this.anna_eyeshade3.mask = this.circle3;
              this.anna_line3.visible=false;
        },this);
     }
},     
hitSprite4:function(sprite1, sprite2){
           if(this.hitCount4==sprite2.id){
                      sprite2.visible=false;
            console.log(this.hitCount4);
                 this.circle4.drawCircle(Main.color_111X[sprite2.id],Main.color_111Y[sprite2.id],155);
                  this.hitCount4++;
           }
     if (this.hitCount4 >= 8) {
      this.t1111drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t1111).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle4.y=800;
Main.makeupCount[0]='anna_eyeshade4';
   this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.anna_eyeshade.loadTexture('anna_eyeshade4');
      this.circleGroup5.children[0].destroy();
      console.log(this.circleGroup5.children[0]);
      this.circle4 = game.add.graphics(10,20);
      this.circle4.beginFill(0x000000, 1);
      this.circleGroup5.add(this.circle4);
      this.circleGroup5.y = 40;
      this.anna_eyeshade4.mask = this.circle4;
              this.anna_line4.visible=false;
        },this);
     }
},
hitSprite5:function(sprite1, sprite2){
           if(this.hitCount5==sprite2.id){
                      sprite2.visible=false;
                 this.circle5.drawCircle(Main.color_111X[sprite2.id],Main.color_111Y[sprite2.id],175);
                  this.hitCount5++;
           }
     if (this.hitCount5 >= 8) {
      this.t11111drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t11111).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle5.y=800;
Main.makeupCount[0]='anna_eyeshade5';
   this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
 }
      this.anna_eyeshade.loadTexture('anna_eyeshade5');
      this.circleGroup6.children[0].destroy();
      console.log(this.circleGroup5.children[0]);
      this.circle5 = game.add.graphics(10,20);
      this.circle5.beginFill(0x000000, 1);
      this.circleGroup6.add(this.circle5);
      this.circleGroup6.y = 40;
      this.anna_eyeshade5.mask = this.circle5;
              this.anna_line5.visible=false;
        },this);
     }
},
hitSprite6:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount6==sprite2.id){
            console.log(this.hitCount5);
                this.circle6.drawCircle(Main.color_666X[sprite2.id],Main.color_666Y[sprite2.id],200);
                  this.hitCount6++;
          }
     if (this.hitCount6 >= Main.color_666X.length-1) {
      this.t2drag = false;
      effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t2).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
       this.dragCircle6.y=800;
Main.makeupCount[1]='anna_blush1';
   this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
 }
     this.anna_blush.loadTexture('anna_blush1');
      this.circleGroup7.children[0].destroy();
      console.log(this.circleGroup6.children[0]);
      this.circle6 = game.add.graphics(10,20);
      this.circle6.beginFill(0x000000, 1);
      this.circleGroup7.add(this.circle6);
      this.circleGroup7.y = 40;
      this.anna_blush1.mask = this.circle6;
              this.anna_line6.visible=false;
        },this);
     }
},               
hitSprite7:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount7==sprite2.id){
            console.log(this.hitCount6);
              this.circle7.drawCircle(Main.color_666X[sprite2.id],Main.color_666Y[sprite2.id],200);
                  this.hitCount7++;
           }
     if (this.hitCount7 >= Main.color_666X.length-1) {
      this.t22drag = false;
      effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t22).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
    this.dragCircle7.y=800;
Main.makeupCount[1]='anna_blush2';
     this.anna_blush.loadTexture('anna_blush2');
       this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup8.children[0].destroy();
      console.log(this.circleGroup7.children[0]);
      this.circle7 = game.add.graphics(10,20);
      this.circle7.beginFill(0x000000, 1);
      this.circleGroup8.add(this.circle7);
      this.circleGroup8.y = 40;
      this.anna_blush2.mask = this.circle7;
              this.anna_line7.visible=false;
        },this);
     }
},
hitSprite8:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount8==sprite2.id){
            console.log(this.hitCount6);
              this.circle8.drawCircle(Main.color_666X[sprite2.id],Main.color_666Y[sprite2.id],200);
                  this.hitCount8++;
           }
     if (this.hitCount8 >= Main.color_666X.length-1) {
      this.t222drag = false;
      effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t222).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
    this.dragCircle8.y=800;
Main.makeupCount[1]='anna_blush3';
     this.anna_blush.loadTexture('anna_blush3');
       this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup9.children[0].destroy();
      console.log(this.circleGroup7.children[0]);
      this.circle8 = game.add.graphics(10,20);
      this.circle8.beginFill(0x000000, 1);
      this.circleGroup9.add(this.circle8);
      this.circleGroup9.y = 40;
      this.anna_blush3.mask = this.circle8;
              this.anna_line8.visible=false;
        },this);
     }
},   
hitSprite9:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount9==sprite2.id){
            console.log(this.hitCount8);
                this.circle9.drawCircle(Main.color_666X[sprite2.id],Main.color_666Y[sprite2.id],200);
               this.hitCount9++;
           }
     if (this.hitCount9 >= Main.color_666X.length-1) {
      this.t2222drag = false;
      effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t2222).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle9.y=800;
Main.makeupCount[1]='anna_blush4';
     this.anna_blush.loadTexture('anna_blush4');
        this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup10.children[0].destroy();
      console.log(this.circleGroup9.children[0]);
      this.circle9 = game.add.graphics(10,20);
      this.circle9.beginFill(0x000000, 1);
      this.circleGroup10.add(this.circle9);
      this.circleGroup10.y = 40;
      this.anna_blush4.mask = this.circle9;
              this.anna_line9.visible=false;
        },this);
     }
},      
 hitSprite10:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount10==sprite2.id){
            console.log(this.hitCount8);
                this.circle10.drawCircle(Main.color_666X[sprite2.id],Main.color_666Y[sprite2.id],200);
               this.hitCount10++;
           }
     if (this.hitCount10 >= Main.color_666X.length-1) {
      this.t22222drag = false;
      effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t22222).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle9.y=800;
Main.makeupCount[1]='anna_blush5';
     this.anna_blush.loadTexture('anna_blush5');
        this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup11.children[0].destroy();
      console.log(this.circleGroup9.children[0]);
      this.circle10 = game.add.graphics(10,20);
      this.circle10.beginFill(0x000000, 1);
      this.circleGroup11.add(this.circle10);
      this.circleGroup11.y = 40;
      this.anna_blush5.mask = this.circle10;
              this.anna_line10.visible=false;
        },this);
     }
},     
hitSprite11:function(sprite1, sprite2){
           if(this.hitCount11==sprite2.id){
            sprite2.visible=false;
         this.circle11.drawCircle(Main.color_777X[sprite2.id],Main.color_777Y[sprite2.id],205);
                  this.hitCount11++;
           }
     if (this.hitCount11 >= Main.color_777X.length) {
                   this.anna_firsteyelash.alpha=0;
      this.t3drag = false;
   effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t3).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
     this.dragCircle11.y=800;
Main.makeupCount[2]='anna_eyelash1';
     this.anna_eyelash.loadTexture('anna_eyelash1');
     //this.anna_eyelash.x=277;
     // this.anna_eyelash.y=280;
       this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup12.children[0].destroy();
      console.log(this.circleGroup10.children[0]);
      this.circle11 = game.add.graphics(10,20);
      this.circle11.beginFill(0x000000, 1);
      this.circleGroup12.add(this.circle11);
      this.circleGroup12.y = 40;
      this.anna_eyelash1.mask = this.circle11;
              this.anna_line11.visible=false;
        },this);
     }
},
hitSprite12:function(sprite1, sprite2){
           if(this.hitCount12==sprite2.id){
            sprite2.visible=false;
         this.circle12.drawCircle(Main.color_777X[sprite2.id],Main.color_777Y[sprite2.id],205);
                  this.hitCount12++;
           }
     if (this.hitCount12 >= Main.color_777X.length) {
                   this.anna_firsteyelash.alpha=0;
      this.t33drag = false;
   effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t33).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
     this.dragCircle12.y=800;
Main.makeupCount[2]='anna_eyelash2';
     this.anna_eyelash.loadTexture('anna_eyelash2');
     //this.anna_eyelash.x=277;
     // this.anna_eyelash.y=280;
       this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup13.children[0].destroy();
      console.log(this.circleGroup10.children[0]);
      this.circle12 = game.add.graphics(10,20);
      this.circle12.beginFill(0x000000, 1);
      this.circleGroup13.add(this.circle12);
      this.circleGroup13.y = 40;
      this.anna_eyelash2.mask = this.circle12;
              this.anna_line12.visible=false;
        },this);
     }
},
hitSprite13:function(sprite1, sprite2){
           if(this.hitCount13==sprite2.id){
            sprite2.visible=false;
         this.circle13.drawCircle(Main.color_777X[sprite2.id],Main.color_777Y[sprite2.id],205);
                  this.hitCount13++;
           }
     if (this.hitCount13 >= Main.color_777X.length) {
                   this.anna_firsteyelash.alpha=0;
      this.t333drag = false;
   effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t333).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
     this.dragCircle13.y=800;
Main.makeupCount[2]='anna_eyelash3';
     this.anna_eyelash.loadTexture('anna_eyelash3');
     //this.anna_eyelash.x=277;
     // this.anna_eyelash.y=280;
       this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup14.children[0].destroy();
      console.log(this.circleGroup10.children[0]);
      this.circle13 = game.add.graphics(10,20);
      this.circle13.beginFill(0x000000, 1);
      this.circleGroup14.add(this.circle13);
      this.circleGroup14.y = 40;
      this.anna_eyelash3.mask = this.circle13;
              this.anna_line13.visible=false;
        },this);
     }
},
hitSprite14:function(sprite1, sprite2){
           if(this.hitCount14==sprite2.id){
            sprite2.visible=false;
         this.circle14.drawCircle(Main.color_777X[sprite2.id],Main.color_777Y[sprite2.id],205);
                  this.hitCount14++;
           }
     if (this.hitCount14 >= Main.color_777X.length) {
                   this.anna_firsteyelash.alpha=0;
      this.t3333drag = false;
   effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t3333).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
     this.dragCircle14.y=800;
Main.makeupCount[2]='anna_eyelash4';
     this.anna_eyelash.loadTexture('anna_eyelash4');
     //this.anna_eyelash.x=277;
     // this.anna_eyelash.y=280;
       this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup15.children[0].destroy();
      console.log(this.circleGroup10.children[0]);
      this.circle14 = game.add.graphics(10,20);
      this.circle14.beginFill(0x000000, 1);
      this.circleGroup15.add(this.circle14);
      this.circleGroup15.y = 40;
      this.anna_eyelash4.mask = this.circle14;
              this.anna_line14.visible=false;
        },this);
     }
},
hitSprite15:function(sprite1, sprite2){
           if(this.hitCount15==sprite2.id){
            sprite2.visible=false;
         this.circle15.drawCircle(Main.color_777X[sprite2.id],Main.color_777Y[sprite2.id],205);
                  this.hitCount15++;
           }
     if (this.hitCount15 >= Main.color_777X.length) {
                   this.anna_firsteyelash.alpha=0;
      this.t33333drag = false;
   effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t33333).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
     this.dragCircle15.y=800;
Main.makeupCount[2]='anna_eyelash5';
     this.anna_eyelash.loadTexture('anna_eyelash5');
     //this.anna_eyelash.x=277;
     // this.anna_eyelash.y=280;
       this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup16.children[0].destroy();
      console.log(this.circleGroup10.children[0]);
      this.circle15 = game.add.graphics(10,20);
      this.circle15.beginFill(0x000000, 1);
      this.circleGroup16.add(this.circle15);
      this.circleGroup16.y = 40;
      this.anna_eyelash5.mask = this.circle15;
              this.anna_line15.visible=false;
        },this);
     }
},
hitSprite16:function(sprite1, sprite2){
           if(this.hitCount16==sprite2.id){
            sprite2.visible=false;
         this.circle16.drawCircle(Main.color_777X[sprite2.id],Main.color_777Y[sprite2.id],205);
                  this.hitCount16++;
           }
     if (this.hitCount16 >= Main.color_777X.length) {
                   this.anna_firsteyelash.alpha=0;
      this.t333333drag = false;
   effectVar = game.add.sprite(230,300,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t333333).to({alpha:0},1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
     this.dragCircle16.y=800;
Main.makeupCount[2]='anna_eyelash6';
     this.anna_eyelash.loadTexture('anna_eyelash6');
      //this.anna_eyelash.x=277;
      //this.anna_eyelash.y=280;
       this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);

 }
      this.circleGroup17.children[0].destroy();
      console.log(this.circleGroup10.children[0]);
      this.circle16 = game.add.graphics(10,20);
      this.circle16.beginFill(0x000000, 1);
      this.circleGroup17.add(this.circle16);
      this.circleGroup17.y = 40;
      this.anna_eyelash6.mask = this.circle16;
              this.anna_line16.visible=false;
        },this);
     }
},
hitSprite17:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount17==sprite2.id){
           this.circle17.drawCircle(Main.color_888X[sprite2.id],Main.color_888Y[sprite2.id],170);
               this.hitCount17++;
           }
     
     if (this.hitCount17 >= Main.color_888X.length-1) {
      this.t4drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t4).to({alpha:0},800, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle17.y=800;
Main.makeupCount[3]='anna_lipstic1';
     this.anna_lipstic.loadTexture('anna_lipstic1');
     this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
 }
      this.circleGroup18.children[0].destroy();
      console.log(this.circleGroup18.children[0]);
      this.circle17 = game.add.graphics(10,20);
      this.circle17.beginFill(0x000000, 1);
      this.circleGroup18.add(this.circle17);
      this.circleGroup18.y = 40;
      this.anna_lipstic1.mask = this.circle17;
              this.anna_line17.visible=false;
        },this);
     }
},
hitSprite18:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount18==sprite2.id){
           this.circle18.drawCircle(Main.color_888X[sprite2.id],Main.color_888Y[sprite2.id],170);
               this.hitCount18++;
           }
     
     if (this.hitCount18 >= Main.color_888X.length-1) {
      this.t44drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t44).to({alpha:0},800, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle18.y=800;
Main.makeupCount[3]='anna_lipstic2';
     this.anna_lipstic.loadTexture('anna_lipstic2');
     this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
 }
      this.circleGroup19.children[0].destroy();
      console.log(this.circleGroup18.children[0]);
      this.circle18 = game.add.graphics(10,20);
      this.circle18.beginFill(0x000000, 1);
      this.circleGroup19.add(this.circle18);
      this.circleGroup19.y = 40;
      this.anna_lipstic2.mask = this.circle18;
              this.anna_line18.visible=false;
        },this);
     }
},
hitSprite19:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount19==sprite2.id){
           this.circle19.drawCircle(Main.color_888X[sprite2.id],Main.color_888Y[sprite2.id],170);
               this.hitCount19++;
           }
     
     if (this.hitCount19 >= Main.color_888X.length-1) {
      this.t444drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t444).to({alpha:0},800, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle19.y=800;
Main.makeupCount[3]='anna_lipstic3';
     this.anna_lipstic.loadTexture('anna_lipstic3');
     this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
 }
      this.circleGroup20.children[0].destroy();
      console.log(this.circleGroup18.children[0]);
      this.circle19 = game.add.graphics(10,20);
      this.circle19.beginFill(0x000000, 1);
      this.circleGroup20.add(this.circle19);
      this.circleGroup20.y = 40;
      this.anna_lipstic3.mask = this.circle19;
              this.anna_line19.visible=false;
        },this);
     }
},
hitSprite20:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount20==sprite2.id){
           this.circle20.drawCircle(Main.color_888X[sprite2.id],Main.color_888Y[sprite2.id],170);
               this.hitCount20++;
           }
     
     if (this.hitCount20 >= Main.color_888X.length-1) {
      this.t4444drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t4444).to({alpha:0},800, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle20.y=800;
Main.makeupCount[3]='anna_lipstic4';
     this.anna_lipstic.loadTexture('anna_lipstic4');
     this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
 }
      this.circleGroup21.children[0].destroy();
      console.log(this.circleGroup18.children[0]);
      this.circle20 = game.add.graphics(10,20);
      this.circle20.beginFill(0x000000, 1);
      this.circleGroup21.add(this.circle20);
      this.circleGroup21.y = 40;
      this.anna_lipstic4.mask = this.circle20;
              this.anna_line20.visible=false;
        },this);
     }
},
hitSprite21:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount21==sprite2.id){
           this.circle21.drawCircle(Main.color_888X[sprite2.id],Main.color_888Y[sprite2.id],170);
               this.hitCount21++;
           }
     
     if (this.hitCount21 >= Main.color_888X.length-1) {
      this.t44444drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t44444).to({alpha:0},800, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle21.y=800;
Main.makeupCount[3]='anna_lipstic5';
     this.anna_lipstic.loadTexture('anna_lipstic5');
     this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
 }
      this.circleGroup22.children[0].destroy();
      console.log(this.circleGroup18.children[0]);
      this.circle21 = game.add.graphics(10,20);
      this.circle21.beginFill(0x000000, 1);
      this.circleGroup22.add(this.circle21);
      this.circleGroup22.y = 40;
      this.anna_lipstic5.mask = this.circle21;
              this.anna_line21.visible=false;
        },this);
     }
},
hitSprite22:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount22==sprite2.id){
           this.circle22.drawCircle(Main.color_888X[sprite2.id],Main.color_888Y[sprite2.id],170);
               this.hitCount22++;
           }
     
     if (this.hitCount22 >= Main.color_888X.length-1) {
      this.t444444drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t444444).to({alpha:0},800, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle22.y=800;
Main.makeupCount[3]='anna_lipstic6';
     this.anna_lipstic.loadTexture('anna_lipstic6');
     this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
 }
      this.circleGroup23.children[0].destroy();
      console.log(this.circleGroup18.children[0]);
      this.circle22 = game.add.graphics(10,20);
      this.circle22.beginFill(0x000000, 1);
      this.circleGroup23.add(this.circle22);
      this.circleGroup23.y = 40;
      this.anna_lipstic6.mask = this.circle22;
              this.anna_line22.visible=false;
        },this);
     }
},
hitSprite23:function(sprite1, sprite2){
     sprite2.visible=false;
           if(this.hitCount23==sprite2.id){
           this.circle23.drawCircle(Main.color_888X[sprite2.id],Main.color_888Y[sprite2.id],170);
               this.hitCount23++;
           }
     
     if (this.hitCount23 >= Main.color_888X.length-1) {
      this.t4444444drag = false;
   //   effectVar = game.add.sprite(230,300,'effectssd'); 
   //effectVar.anchor.setTo(0.5);
   //effectVar.scale.setTo(1);
   //effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   //effectVar.animations.play('glitter', 30, false);
      game.add.tween(this.t4444444).to({alpha:0},800, Phaser.Easing.Linear.None, true).onComplete.add(function(){
   this.dragCircle23.y=800;
Main.makeupCount[3]='anna_lipstic7';
     this.anna_lipstic.loadTexture('anna_lipstic7');
     this.flagvalue=0;
    for (var key in Main.makeupCount) {
      if (Main.makeupCount[key]!='') {
         this.flagvalue++;
      }
    }
    if(this.flagvalue==4)
 {
 game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
 }
      this.circleGroup24.children[0].destroy();
      console.log(this.circleGroup18.children[0]);
      this.circle23 = game.add.graphics(10,20);
      this.circle23.beginFill(0x000000, 1);
      this.circleGroup24.add(this.circle23);
      this.circleGroup24.y = 40;
      this.anna_lipstic7.mask = this.circle23;
              this.anna_line23.visible=false;
        },this);
     }
},
update:function()
{
      if (this.t1Drag && this.hitCount<8) {
         console.log(this.hitCount) ;
         this.t1.inputEnabled=true;
      this.t1.x = game.input.activePointer.x;
      this.t1.y = game.input.activePointer.y+20;
      this.dragCircle.x = this.game.input.activePointer.x+28;
      this.dragCircle.y = this.game.input.activePointer.y-10;
       this.t1.angle = -50;
       //this.t1.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle, this.hitCircle1_0);   
      game.physics.arcade.collide(this.dragCircle, this.hitCircle1_1);   
      game.physics.arcade.collide(this.dragCircle, this.hitCircle1_2);   
      game.physics.arcade.collide(this.dragCircle, this.hitCircle1_3);   
      game.physics.arcade.collide(this.dragCircle, this.hitCircle1_4);   
      game.physics.arcade.collide(this.dragCircle, this.hitCircle1_5);   
      game.physics.arcade.collide(this.dragCircle, this.hitCircle1_6);   
      game.physics.arcade.collide(this.dragCircle, this.hitCircle1_7);   
      game.physics.arcade.collide(this.dragCircle, this.hitCircle1_8);   
      
      
      
         }
         
           if (this.t11Drag && this.hitCount2<8) {

         this.t11.inputEnabled=true;
      this.t11.x = game.input.activePointer.x;
      this.t11.y = game.input.activePointer.y+20;
      this.dragCircle2.x = this.game.input.activePointer.x+28;
      this.dragCircle2.y = this.game.input.activePointer.y-10;
       this.t11.angle = -50;
       //this.t11.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle2, this.hitCircle11_0);   
      game.physics.arcade.collide(this.dragCircle2, this.hitCircle11_1);   
      game.physics.arcade.collide(this.dragCircle2, this.hitCircle11_2);   
      game.physics.arcade.collide(this.dragCircle2, this.hitCircle11_3);   
      game.physics.arcade.collide(this.dragCircle2, this.hitCircle11_4);   
      game.physics.arcade.collide(this.dragCircle2, this.hitCircle11_5);   
      game.physics.arcade.collide(this.dragCircle2, this.hitCircle11_6);   
      game.physics.arcade.collide(this.dragCircle2, this.hitCircle11_7);   
      game.physics.arcade.collide(this.dragCircle2, this.hitCircle11_8);   
      
      
      
         }  
         
              if (this.t111Drag && this.hitCount3<8) {

         this.t111.inputEnabled=true;
      this.t111.x = game.input.activePointer.x;
      this.t111.y = game.input.activePointer.y+20;
      this.dragCircle3.x = this.game.input.activePointer.x+28;
      this.dragCircle3.y = this.game.input.activePointer.y-10;
       this.t111.angle = -50;
       //this.t111.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle3, this.hitCircle111_0);   
      game.physics.arcade.collide(this.dragCircle3, this.hitCircle111_1);   
      game.physics.arcade.collide(this.dragCircle3, this.hitCircle111_2);   
      game.physics.arcade.collide(this.dragCircle3, this.hitCircle111_3);   
      game.physics.arcade.collide(this.dragCircle3, this.hitCircle111_4);   
      game.physics.arcade.collide(this.dragCircle3, this.hitCircle111_5);   
      game.physics.arcade.collide(this.dragCircle3, this.hitCircle111_6);   
      game.physics.arcade.collide(this.dragCircle3, this.hitCircle111_7);   
      game.physics.arcade.collide(this.dragCircle3, this.hitCircle111_8);   
      
      
      
         }
         
                  if (this.t1111Drag && this.hitCount4<8) {

         this.t1111.inputEnabled=true;
      this.t1111.x = game.input.activePointer.x;
      this.t1111.y = game.input.activePointer.y+20;
      this.dragCircle4.x = this.game.input.activePointer.x+28;
      this.dragCircle4.y = this.game.input.activePointer.y-10;
       this.t1111.angle = -50;
       //this.t1111.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle4, this.hitCircle1111_0);   
      game.physics.arcade.collide(this.dragCircle4, this.hitCircle1111_1);   
      game.physics.arcade.collide(this.dragCircle4, this.hitCircle1111_2);   
      game.physics.arcade.collide(this.dragCircle4, this.hitCircle1111_3);   
      game.physics.arcade.collide(this.dragCircle4, this.hitCircle1111_4);   
      game.physics.arcade.collide(this.dragCircle4, this.hitCircle1111_5);   
      game.physics.arcade.collide(this.dragCircle4, this.hitCircle1111_6);   
      game.physics.arcade.collide(this.dragCircle4, this.hitCircle1111_7);   
      game.physics.arcade.collide(this.dragCircle4, this.hitCircle1111_8);   
      
      
      
         }
         
                   if (this.t11111Drag && this.hitCount5<8) {

         this.t11111.inputEnabled=true;
      this.t11111.x = game.input.activePointer.x;
      this.t11111.y = game.input.activePointer.y+20;
      this.dragCircle5.x = this.game.input.activePointer.x+28;
      this.dragCircle5.y = this.game.input.activePointer.y-10;
       this.t11111.angle = -50;
       //this.t11111.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle5, this.hitCircle11111_0);   
      game.physics.arcade.collide(this.dragCircle5, this.hitCircle11111_1);   
      game.physics.arcade.collide(this.dragCircle5, this.hitCircle11111_2);   
      game.physics.arcade.collide(this.dragCircle5, this.hitCircle11111_3);   
      game.physics.arcade.collide(this.dragCircle5, this.hitCircle11111_4);   
      game.physics.arcade.collide(this.dragCircle5, this.hitCircle11111_5);   
      game.physics.arcade.collide(this.dragCircle5, this.hitCircle11111_6);   
      game.physics.arcade.collide(this.dragCircle5, this.hitCircle11111_7);   
      game.physics.arcade.collide(this.dragCircle5, this.hitCircle11111_8);   
      
      
      
         }    
          if (this.t2Drag && this.hitCount6<12) {
         this.t2.inputEnabled=true;
      this.t2.x = game.input.activePointer.x;
      this.t2.y = game.input.activePointer.y+20;
      this.dragCircle6.x = this.game.input.activePointer.x+28;
      this.dragCircle6.y = this.game.input.activePointer.y;
       this.t2.angle = -50;
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_0);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_1);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_2);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_3);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_4);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_5);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_6);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_7);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_8);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_9);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_10);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_11);   
      game.physics.arcade.collide(this.dragCircle6, this.hitCircle2_12);   
      
         }      
        
               if (this.t22Drag && this.hitCount7<12) {
         this.t22.inputEnabled=true;
      this.t22.x = game.input.activePointer.x;
      this.t22.y = game.input.activePointer.y+20;
      this.dragCircle7.x = this.game.input.activePointer.x+28;
      this.dragCircle7.y = this.game.input.activePointer.y-0;
       this.t22.angle = -50;
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_0);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_1);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_2);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_3);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_4);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_5);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_6);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_7);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_8);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_9);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_10);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_11);   
      game.physics.arcade.collide(this.dragCircle7, this.hitCircle22_12);   
         }
                     if (this.t222Drag && this.hitCount8<12) {
         this.t222.inputEnabled=true;
      this.t222.x = game.input.activePointer.x;
      this.t222.y = game.input.activePointer.y+20;
      this.dragCircle8.x = this.game.input.activePointer.x+28;
      this.dragCircle8.y = this.game.input.activePointer.y-0;
       this.t222.angle = -50;
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_0);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_1);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_2);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_3);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_4);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_5);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_6);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_7);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_8);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_9);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_10);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_11);   
      game.physics.arcade.collide(this.dragCircle8, this.hitCircle222_12);   
         }
         if (this.t2222Drag && this.hitCount9<12) {
         this.t2222.inputEnabled=true;
      this.t2222.x = game.input.activePointer.x;
      this.t2222.y = game.input.activePointer.y+20;
      this.dragCircle9.x = this.game.input.activePointer.x+28;
      this.dragCircle9.y = this.game.input.activePointer.y-0;
       this.t2222.angle = -50;
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_0);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_1);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_2);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_3);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_4);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_5);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_6);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_7);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_8);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_9);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_10);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_11);   
      game.physics.arcade.collide(this.dragCircle9, this.hitCircle2222_12);   
         }       
          if (this.t22222Drag && this.hitCount10<12) {
         this.t22222.inputEnabled=true;
      this.t22222.x = game.input.activePointer.x;
      this.t22222.y = game.input.activePointer.y+20;
      this.dragCircle10.x = this.game.input.activePointer.x+28;
      this.dragCircle10.y = this.game.input.activePointer.y-0;
       this.t22222.angle = -50;
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_0);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_1);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_2);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_3);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_4);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_5);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_6);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_7);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_8);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_9);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_10);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_11);   
      game.physics.arcade.collide(this.dragCircle10, this.hitCircle22222_12);   
         } 
               if (this.t3Drag && this.hitCount11<Main.color_777X.length) {
         this.t3.inputEnabled=true;
      this.t3.x = game.input.activePointer.x-40;
      this.t3.y = game.input.activePointer.y+65;
      this.dragCircle11.x = this.game.input.activePointer.x+18;
      this.dragCircle11.y = this.game.input.activePointer.y-0;
       this.t3.angle = 400;
       this.t3.scale.setTo(0.7);
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_0);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_1);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_2);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_3);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_4);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_5);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_6);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_7);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_8);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_9);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_10);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_11);   
      game.physics.arcade.collide(this.dragCircle11, this.hitCircle3_12);   
      
         }        
        
             if (this.t33Drag && this.hitCount12<Main.color_777X.length) {
      
         this.t33.inputEnabled=true;
      this.t33.x = game.input.activePointer.x-40;
      this.t33.y = game.input.activePointer.y+65;
      this.dragCircle12.x = this.game.input.activePointer.x+18;
      this.dragCircle12.y = this.game.input.activePointer.y-0;
       this.t33.angle = 400;
              this.t33.scale.setTo(0.7);

      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_0);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_1);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_2);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_3);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_4);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_5);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_6);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_7);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_8);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_9);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_10);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_11);   
      game.physics.arcade.collide(this.dragCircle12, this.hitCircle33_12);   
      
         }     
                   if (this.t333Drag && this.hitCount13<Main.color_777X.length) {
      
         this.t333.inputEnabled=true;
      this.t333.x = game.input.activePointer.x-40;
      this.t333.y = game.input.activePointer.y+65;
      this.dragCircle13.x = this.game.input.activePointer.x+18;
      this.dragCircle13.y = this.game.input.activePointer.y-0;
       this.t333.angle = 400;
              this.t333.scale.setTo(0.7);

      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_0);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_1);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_2);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_3);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_4);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_5);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_6);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_7);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_8);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_9);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_10);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_11);   
      game.physics.arcade.collide(this.dragCircle13, this.hitCircle333_12);   
      
         }
             if (this.t3333Drag && this.hitCount14<Main.color_777X.length) {
      
         this.t3333.inputEnabled=true;
      this.t3333.x = game.input.activePointer.x-40;
      this.t3333.y = game.input.activePointer.y+65;
      this.dragCircle14.x = this.game.input.activePointer.x+18;
      this.dragCircle14.y = this.game.input.activePointer.y-0;
       this.t3333.angle = 400;
           this.t3333.scale.setTo(0.7);

      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_0);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_1);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_2);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_3);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_4);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_5);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_6);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_7);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_8);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_9);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_10);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_11);   
      game.physics.arcade.collide(this.dragCircle14, this.hitCircle3333_12);   
      
         }
        if (this.t33333Drag && this.hitCount15<Main.color_777X.length) {
      
         this.t33333.inputEnabled=true;
      this.t33333.x = game.input.activePointer.x-40;
      this.t33333.y = game.input.activePointer.y+65;
      this.dragCircle15.x = this.game.input.activePointer.x+18;
      this.dragCircle15.y = this.game.input.activePointer.y-0;
       this.t33333.angle = 400;
       this.t33333.scale.setTo(0.7);
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_0);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_1);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_2);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_3);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_4);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_5);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_6);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_7);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_8);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_9);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_10);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_11);   
      game.physics.arcade.collide(this.dragCircle15, this.hitCircle33333_12);   
      
         }
         if (this.t333333Drag && this.hitCount16<Main.color_777X.length) {
      
         this.t333333.inputEnabled=true;
      this.t333333.x = game.input.activePointer.x-40;
      this.t333333.y = game.input.activePointer.y+65;
      this.dragCircle16.x = this.game.input.activePointer.x+18;
      this.dragCircle16.y = this.game.input.activePointer.y-0;
       this.t333333.angle = 400;
       this.t333333.scale.setTo(0.7);
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_0);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_1);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_2);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_3);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_4);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_5);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_6);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_7);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_8);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_9);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_10);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_11);   
      game.physics.arcade.collide(this.dragCircle16, this.hitCircle333333_12);   
      
         }  
                 if (this.t4Drag){// && this.hitCount13<5) {
      
         this.t4.inputEnabled=true;
      this.t4.x = game.input.activePointer.x;
      this.t4.y = game.input.activePointer.y+20;
      this.dragCircle17.x = this.game.input.activePointer.x+32;
      this.dragCircle17.y = this.game.input.activePointer.y-25;
       this.t4.angle = 400;
      // this.t4.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_0);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_1);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_2);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_3);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_4);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_5);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_6);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_7);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_8);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_9);   
      game.physics.arcade.collide(this.dragCircle17, this.hitCircle4_10);   
      
      
         }         
      
                      if (this.t44Drag){// && this.hitCount14<5) {
      
         this.t44.inputEnabled=true;
      this.t44.x = game.input.activePointer.x;
      this.t44.y = game.input.activePointer.y+20;
      this.dragCircle18.x = this.game.input.activePointer.x+32;
      this.dragCircle18.y = this.game.input.activePointer.y-25;
       this.t44.angle = 400;
      // this.t4.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_0);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_1);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_2);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_3);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_4);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_5);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_6);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_7);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_8);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_9);   
      game.physics.arcade.collide(this.dragCircle18, this.hitCircle44_10);   
      
      
         }      
      
           if (this.t444Drag){// && this.hitCount15<5) {
      
         this.t444.inputEnabled=true;
      this.t444.x = game.input.activePointer.x;
      this.t444.y = game.input.activePointer.y+20;
      this.dragCircle19.x = this.game.input.activePointer.x+32;
      this.dragCircle19.y = this.game.input.activePointer.y-25;
       this.t444.angle = 400;
      // this.t4.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_0);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_1);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_2);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_3);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_4);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_5);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_6);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_7);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_8);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_9);   
      game.physics.arcade.collide(this.dragCircle19, this.hitCircle444_10);   
      
      
         }
                  if (this.t4444Drag){// && this.hitCount16<5) {
      
         this.t4444.inputEnabled=true;
      this.t4444.x = game.input.activePointer.x;
      this.t4444.y = game.input.activePointer.y+20;
      this.dragCircle20.x = this.game.input.activePointer.x+32;
      this.dragCircle20.y = this.game.input.activePointer.y-25;
       this.t4444.angle = 400;
      // this.t4.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_0);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_1);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_2);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_3);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_4);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_5);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_6);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_7);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_8);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_9);   
      game.physics.arcade.collide(this.dragCircle20, this.hitCircle4444_10);   
      
      
         }       
                     if (this.t44444Drag){// && this.hitCount14<5) {
      
         this.t44444.inputEnabled=true;
      this.t44444.x = game.input.activePointer.x;
      this.t44444.y = game.input.activePointer.y+20;
      this.dragCircle21.x = this.game.input.activePointer.x+32;
      this.dragCircle21.y = this.game.input.activePointer.y-25;
       this.t44444.angle = 400;
      // this.t4.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_0);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_1);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_2);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_3);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_4);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_5);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_6);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_7);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_8);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_9);   
      game.physics.arcade.collide(this.dragCircle21, this.hitCircle44444_10);   
      
      
         }      
      
           if (this.t444444Drag){// && this.hitCount15<5) {
      
         this.t444444.inputEnabled=true;
      this.t444444.x = game.input.activePointer.x;
      this.t444444.y = game.input.activePointer.y+20;
      this.dragCircle22.x = this.game.input.activePointer.x+32;
      this.dragCircle22.y = this.game.input.activePointer.y-25;
       this.t444444.angle = 400;
      // this.t4.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_0);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_1);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_2);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_3);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_4);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_5);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_6);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_7);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_8);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_9);   
      game.physics.arcade.collide(this.dragCircle22, this.hitCircle444444_10);   
      
      
         }
                  if (this.t4444444Drag){// && this.hitCount16<5) {
      
         this.t4444444.inputEnabled=true;
      this.t4444444.x = game.input.activePointer.x;
      this.t4444444.y = game.input.activePointer.y+20;
      this.dragCircle23.x = this.game.input.activePointer.x+32;
      this.dragCircle23.y = this.game.input.activePointer.y-25;
       this.t4444444.angle = 400;
      // this.t4.scale.setTo(1.2);
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_0);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_1);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_2);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_3);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_4);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_5);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_6);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_7);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_8);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_9);   
      game.physics.arcade.collide(this.dragCircle23, this.hitCircle4444444_10);   
      
      
         }        
         
      //  //if (this.stepCount==5) {
      //  //    
      //  //     game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
      //  //
      //  //    
      //  //} 
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
   CreateLinksInGame("Anna-S-Date-Makeover","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Anna-S-Date-Makeover","game","more");
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('dressup');   
         });
   },
btnOver:function(items){
   items.scale.x=1.05;
      items.scale.y=1.05;
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.x=1;
      items.scale.y=1;
   },
removeGlitter:function(evt){
      evt.kill(); 
},
}
Main.dressup = function(){}

Main.dressup.prototype = {
    create:function(){
      this.stepCount=1;
      this.levelGroup = game.add.group();
      this.iconGroup1 = game.add.group();
      this.iconGroup2 = game.add.group();
       
        this.dressupbg = game.add.sprite(0,0,'dressupbg');
        this.levelGroup.add(this.dressupbg);
        
        this.panel=game.add.sprite(69.55,356.45,'panel1');
        this.panel.anchor.setTo(0.5);
        this.levelGroup.add(this.panel);
        
         this.morebtn = game.add.sprite(79.7,740.9,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.donebtn = game.add.sprite(435.35,740.9,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
        

   var iconposX=[67,67,67,67,67];
   var iconposY=[155.85,260.25,360.6,460.05,560];
        for(var i=1;i<=5;i++)
        {
        this['icon'+i] = game.add.sprite(iconposX[i-1],iconposY[i-1] , 'icon'+i);
        this['icon'+i].anchor.setTo(0.5);
        this['icon'+i].scale.setTo(0.9);
        this['icon'+i].inputEnabled = true;
        this['icon'+i].input.useHandCursor = true;
        this['icon'+i].arrayindex = i-1;
        this['icon'+i].total = 5;
        this['icon'+i].events.onInputOver.add(this.btnOver1, this);
        this['icon'+i].events.onInputOut.add(this.btnOut1, this);
        this['icon'+i].events.onInputUp.add(this.changeItem2, this);
        this.iconGroup1.add(this['icon'+i]);
        }
   // for(var i=5;i<=6;i++)
   //     {
   //     this['icon'+i] = game.add.sprite(iconposX[i-1],iconposY[i-1] , 'icon'+i);
   //     this['icon'+i].anchor.setTo(0.5);
   //     this['icon'+i].inputEnabled = true;
   //     this['icon'+i].input.useHandCursor = true;
   //     this['icon'+i].arrayindex = i-1;
   //     this['icon'+i].total = 5;
   //     this['icon'+i].events.onInputOver.add(this.btnOver, this);
   //     this['icon'+i].events.onInputOut.add(this.btnOut, this);
   //     this['icon'+i].events.onInputUp.add(this.changeItem2, this);
   //     this.iconGroup2.add(this['icon'+i]);
   //     }
   //
   //this.iconGroup2.visible=false;
   //
   //     this.forwardbtn = game.add.sprite(65,582.85,'forwardbtn');
   //     this.forwardbtn.anchor.setTo(0.5);
   //     this.forwardbtn.inputEnabled = true;
   //     this.forwardbtn.input.useHandCursor = true;
   //     this.forwardbtn.events.onInputUp.add(this.nextSlide, this);
   //     this.forwardbtn.events.onInputOver.add(this.btnOver, this);
   //     this.forwardbtn.events.onInputOut.add(this.btnOut, this);
   //     
   //     this.backwardbtn = game.add.sprite(71,140.85,'backwardbtn');
   //     this.backwardbtn.anchor.setTo(0.5);
   //     this.backwardbtn.visible = false;
   //     this.backwardbtn.inputEnabled = true;
   //     this.backwardbtn.input.useHandCursor = true;
   //     this.backwardbtn.events.onInputUp.add(this.prevSlide, this);
   //     this.backwardbtn.events.onInputOver.add(this.btnOver, this);
   //     this.backwardbtn.events.onInputOut.add(this.btnOut, this);
        
        this.newGroup=game.add.group();
  
        this.anna_eyeshade = game.add.sprite(280,260,Main.makeupCount[0]);
        this.anna_eyeshade.anchor.setTo(0.5);
        this.anna_eyeshade.visible=true;

        this.anna_blush = game.add.sprite(275,350,Main.makeupCount[1]);
        this.anna_blush.anchor.setTo(0.5);
        this.anna_blush.visible=true;
        
        this.anna_eyelash = game.add.sprite(278,275,Main.makeupCount[2]);
        this.anna_eyelash.anchor.setTo(0.5);
        this.anna_eyelash.visible=true;
        
        this.anna_lipstic = game.add.sprite(267,372,Main.makeupCount[3]);
        this.anna_lipstic.anchor.setTo(0.5);
        this.anna_lipstic.visible=true;
        
        this.newGroup.add(this.anna_eyeshade);
         this.newGroup.add(this.anna_blush);
        this.newGroup.add(this.anna_eyelash);
        this.newGroup.add(this.anna_lipstic);

    this.newGroup.scale.setTo(0.35);    
 this.newGroup.x=170;
 this.newGroup.y=4;
 
 this.annaGroup = game.add.group();       
 this.hairGroup = game.add.group();       
 this.dressGroup = game.add.group();       
 this.shoeGroup = game.add.group();       
 this.earingGroup = game.add.group();       
 this.chainGroup = game.add.group();       
 //this.bagGroup = game.add.group();
         
         this.anna_body=game.add.sprite(257.4,381.6,'anna_body');
         this.anna_body.anchor.setTo(0.5);
         
         this.anna_hand=game.add.sprite(257.4,389.8,'anna_hand');
         this.anna_hand.anchor.setTo(0.5);
         
         this.annaGroup.add(this.anna_body);
         this.annaGroup.add(this.newGroup);
         this.annaGroup.add(this.shoeGroup);
         this.annaGroup.add(this.dressGroup);
         this.annaGroup.add(this.chainGroup);
         //this.annaGroup.add(this.bagGroup);
         this.annaGroup.add(this.anna_hand);
         this.annaGroup.add(this.earingGroup);
         this.annaGroup.add(this.hairGroup);

        
    this.retainObjects();
this.levelGroup.add(this.annaGroup);
 this.levelGroup.add(this.donebtn);
                  this.levelGroup.add(this.morebtn);

if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true);
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
nextSlide:function(){
  this.backwardbtn.visible = true;
  this['iconGroup'+this.stepCount].visible = false;
  this.stepCount++;
this['iconGroup'+this.stepCount].visible = true;
if (this.stepCount == 2) {
   this.forwardbtn.visible = false;
}
},
prevSlide:function(){
   this.forwardbtn.visible = true;
   this['iconGroup'+this.stepCount].visible = false;
this.stepCount--;
this['iconGroup'+this.stepCount].visible = true;
if (this.stepCount == 1) {
   this.backwardbtn.visible = false;
}
},
changeItem2:function(evt){
     switch(evt.arrayindex)
   {
      case 0:
   effectVar = game.add.sprite(263.2,120.9,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
         break;
      case 1:
         effectVar = game.add.sprite(255.6,423,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
         break;
       case 2:
         effectVar = game.add.sprite(276,657.65,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
         break;
       case 3:
         effectVar = game.add.sprite(267.7,115.15,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
         break;
      case 4:
         effectVar = game.add.sprite(262.85,200,'effectssd'); 
         effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
         break;
      case 5:
         effectVar = game.add.sprite(185,353,'effectssd'); 
         effectVar.anchor.setTo(0.5);
       effectVar.scale.setTo(1);
       effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
       effectVar.animations.play('glitter', 30, false);
         break;
       }
   if (Main.applyCount[evt.arrayindex] < evt.total) {
      Main.applyCount[evt.arrayindex]++;
   }
   else
   {
      Main.applyCount[evt.arrayindex] = 1;
   }
   this.retainObjects();
},
retainObjects:function(){
   this.hairGroup.removeAll();
   if (Main.applyCount[0]>=1) {
     this.hair = game.add.sprite(263.2,120.9,'anna_hair'+Main.applyCount[0]);
     this.hair.anchor.setTo(0.5);
     this.hairGroup.add(this.hair);
   }
   this.dressGroup.removeAll();
   if (Main.applyCount[1]>=1) {
     this.dress = game.add.sprite(275,474,'anna_dress'+Main.applyCount[1]);
     this.dress.anchor.setTo(0.5);
     this.dress.scale.setTo(1.05);
     if (Main.applyCount[1]==4) {
       this.dress.y=437;
       this.dress.x=257;
     }
     if (Main.applyCount[1]==5) {
       this.dress.y=462;
       this.dress.x=274.5;
       this.dress.scale.setTo(1.01);
     } 
     this.dressGroup.add(this.dress);
   }
   this.shoeGroup.removeAll();
   if (Main.applyCount[2]>=1) {
     this.shoe = game.add.sprite(276,657.65,'anna_shoe'+Main.applyCount[2]);
     this.shoe.anchor.setTo(0.5);
     this.shoeGroup.add(this.shoe);
   }
   this.earingGroup.removeAll();
   if (Main.applyCount[3]>=1) {
     this.earing = game.add.sprite(267.7,115.15,'anna_earing'+Main.applyCount[3]);
     this.earing.anchor.setTo(0.5);
     this.earingGroup.add(this.earing);
   }
   this.chainGroup.removeAll();
   if (Main.applyCount[4]>=1) {
     this.chain = game.add.sprite(262.85,200,'anna_chain'+Main.applyCount[4]);
     this.chain.anchor.setTo(0.5);
     this.chainGroup.add(this.chain);
   }
   //this.bagGroup.removeAll();
   //if (Main.applyCount[5]>=1) {
   //  this.bag = game.add.sprite(185,353,'anna_bag'+Main.applyCount[5]);
   //  this.bag.anchor.setTo(0.5);
   //  this.bagGroup.add(this.bag);
   //}
},
openLink:function()
{
   CreateLinksInGame("Anna-S-Date-Makeover","menu","logo");
},
moreLink:function()
{
   CreateLinksInGame("Anna-S-Date-Makeover","menu","more");
},
btnOver:function(items){
   items.scale.x=1.05;
      items.scale.y=1.05;
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.x=1;
      items.scale.y=1;
   },
btnOver1:function(items){
   items.scale.x=0.95;
      items.scale.y=0.95;
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut1:function(items){
   items.scale.x=0.9;
      items.scale.y=0.9;
   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('finalscreen');   
         });
   },
}
Main.finalscreen = function(){}

Main.finalscreen.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0,0,'finalbg');
        this.levelGroup.add(this.bg);
        
        this.morebtn = game.add.sprite(79.7,740.9,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.resetbtn = game.add.sprite(435.35,740.9,'resetbtn');
         this.resetbtn.anchor.setTo(0.5);
         this.resetbtn.inputEnabled = true;
         this.resetbtn.input.useHandCursor = true;
         this.resetbtn.events.onInputUp.add(this.resetfun, this);
         this.resetbtn.events.onInputOver.add(this.btnOver, this);
         this.resetbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.resetbtn);
     
         this.newGroup=game.add.group();
  
        this.anna_eyeshade = game.add.sprite(280,260,Main.makeupCount[0]);
        this.anna_eyeshade.anchor.setTo(0.5);
        this.anna_eyeshade.visible=true;

        this.anna_blush = game.add.sprite(275,350,Main.makeupCount[1]);
        this.anna_blush.anchor.setTo(0.5);
        this.anna_blush.visible=true;
        
        this.anna_eyelash = game.add.sprite(278,275,Main.makeupCount[2]);
        this.anna_eyelash.anchor.setTo(0.5);
        this.anna_eyelash.visible=true;
        
        this.anna_lipstic = game.add.sprite(267,372,Main.makeupCount[3]);
        this.anna_lipstic.anchor.setTo(0.5);
        this.anna_lipstic.visible=true;
        
        this.newGroup.add(this.anna_eyeshade);
         this.newGroup.add(this.anna_blush);
        this.newGroup.add(this.anna_eyelash);
        this.newGroup.add(this.anna_lipstic);

    this.newGroup.scale.setTo(0.35);    
 this.newGroup.x=170;
 this.newGroup.y=4;
 
 this.annaGroup = game.add.group();       
 this.hairGroup = game.add.group();       
 this.dressGroup = game.add.group();       
 this.shoeGroup = game.add.group();       
 this.earingGroup = game.add.group();       
 this.chainGroup = game.add.group();       
 //this.bagGroup = game.add.group();
         
         this.anna_body=game.add.sprite(257.4,381.6,'anna_body');
         this.anna_body.anchor.setTo(0.5);
         
         this.anna_hand=game.add.sprite(257.4,389.8,'anna_hand');
         this.anna_hand.anchor.setTo(0.5);
         
         this.annaGroup.add(this.anna_body);
         this.annaGroup.add(this.newGroup);
         this.annaGroup.add(this.shoeGroup);
         this.annaGroup.add(this.dressGroup);
         this.annaGroup.add(this.chainGroup);
         //this.annaGroup.add(this.bagGroup);
         this.annaGroup.add(this.anna_hand);
         this.annaGroup.add(this.earingGroup);
         this.annaGroup.add(this.hairGroup);

        
    this.retainObjects();
    this.annaGroup.x=70;
    this.annaGroup.y=25;
this.levelGroup.add(this.annaGroup);

 game.load.crossOrigin='*';
            this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
            this.thumbVar = game.add.sprite(167, 652, 'thumb_'+this.randomId);
            this.thumbVar.inputEnabled = true
            this.thumbVar.input.useHandCursor = true;
           this.thumbVar.events.onInputUp.add(this.thumbLink, this);
            this.thumbframeVar = game.add.sprite(165, 650, 'Tump_frame'); 
			this.thumbVar.height=this.thumbframeVar.height-2;
			this.thumbVar.width=this.thumbframeVar.width-2;

if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true);
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
retainObjects:function(){
   this.hairGroup.removeAll();
   if (Main.applyCount[0]>=1) {
     this.hair = game.add.sprite(263.2,120.9,'anna_hair'+Main.applyCount[0]);
     this.hair.anchor.setTo(0.5);
     this.hairGroup.add(this.hair);
   }
  this.dressGroup.removeAll();
   if (Main.applyCount[1]>=1) {
     this.dress = game.add.sprite(275,474,'anna_dress'+Main.applyCount[1]);
     this.dress.anchor.setTo(0.5);
     this.dress.scale.setTo(1.05);
     if (Main.applyCount[1]==4) {
       this.dress.y=437;
       this.dress.x=257;
     }
     if (Main.applyCount[1]==5) {
       this.dress.y=462;
       this.dress.x=274.5;
       this.dress.scale.setTo(1.01);
     } 
     this.dressGroup.add(this.dress);
   }
   this.shoeGroup.removeAll();
   if (Main.applyCount[2]>=1) {
     this.shoe = game.add.sprite(276,657.65,'anna_shoe'+Main.applyCount[2]);
     this.shoe.anchor.setTo(0.5);
     this.shoeGroup.add(this.shoe);
   }
   this.earingGroup.removeAll();
   if (Main.applyCount[3]>=1) {
     this.earing = game.add.sprite(267.7,115.15,'anna_earing'+Main.applyCount[3]);
     this.earing.anchor.setTo(0.5);
     this.earingGroup.add(this.earing);
   }
   this.chainGroup.removeAll();
   if (Main.applyCount[4]>=1) {
     this.chain = game.add.sprite(262.85,200,'anna_chain'+Main.applyCount[4]);
     this.chain.anchor.setTo(0.5);
     this.chainGroup.add(this.chain);
   }
   //this.bagGroup.removeAll();
   //if (Main.applyCount[5]>=1) {
   //  this.bag = game.add.sprite(185,353,'anna_bag'+Main.applyCount[5]);
   //  this.bag.anchor.setTo(0.5);
   //  this.bagGroup.add(this.bag);
   //}
},
openLink:function()
{
   CreateLinksInGame("Anna-S-Date-Makeover","gameover","logo");
},
moreLink:function()
{
   CreateLinksInGame("Anna-S-Date-Makeover","gameover","more");
},
thumbLink:function()
{
   CreateLinksInGame("Anna-S-Date-Makeover","gameover","thumb",RelatedGames[this.randomId]['id']);
},   
btnOver:function(items){
   items.scale.x=1.05;
      items.scale.y=1.05;
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.x=1;
      items.scale.y=1;
   },
removeGlitter:function(evt){
      evt.kill(); 
},
resetfun:function(){
   Main.makeupCount = [];
   Main.applyCount = [1,1,1,0,0,0];
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('intro');   
         });
   },
  
}
game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('makeover', Main.makeover);
game.state.add('dressup', Main.dressup);
game.state.add('makeup', Main.makeup);
game.state.add('finalscreen', Main.finalscreen);

game.state.start('boot');