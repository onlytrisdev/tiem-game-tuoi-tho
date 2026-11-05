var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
   music:null,
   shutterOn:[true],
   gameName:"Elsa-Wedding-Hair-Design",
   
   applyCount1:[0,0],
   doneCount1:[0,0],
   doneCount2:[0,0],
   doneCount3:[0,0],
   girlChoosed:[0,0,0,0],
   finalVar:0,
    
 //hair1
      hair1VarX:[150,150,150],
      hair1VarY:[340,420,500],
 
      hair1VarX2:[250,250,250],
      hair1VarY2:[340,420,500],
      
      hair1VarX3:[350,350,350],
      hair1VarY3:[340,420,500],
      
      hair1VarX4:[390,],
      hair1VarY4:[330,],
      
      hair1VarX5:[280,],
      hair1VarY5:[520,],
      
      hair1VarX6:[157,180,210,218],//h3
      hair1VarY6:[133,117,120,150],
      
      hair1VarX7:[175,175,200,220],//h4
      hair1VarY7:[340,310,300,307],
      
      hair1VarX8:[265,250,278],//h5
      hair1VarY8:[390,360,335],
      
      hair1VarX9:[313,293,320],//h6
      hair1VarY9:[390,360,330],
      
      hair1VarX10:[290,],//yellowband
      hair1VarY10:[370,],  
      
      hair1VarX11:[365,350,320,309],//h9
      hair1VarY11:[140,125,128,150],
      
      hair1VarX12:[382,375,350,330],//h10
      hair1VarY12:[320,295,288,300],
      
      hair1VarX13:[313,315,295,270],//h11
      hair1VarY13:[370,340,325,330],
   
      hair1VarX14:[260,240,245,260],//h12
      hair1VarY14:[330,350,375,390],
      
      hair1VarX15:[375,395,420,432],//h14
      hair1VarY15:[268,250,260,280],
      
      hair1VarX16:[380,395,420,435],//h15
      hair1VarY16:[340,324,328,350],
      
      hair1VarX17:[382,400,428,440],//h16
      hair1VarY17:[393,378,384,406],
      
      hair1VarX18:[391,410,433,445],//h17
      hair1VarY18:[447,437,443,465], 
      
      hair1VarX19:[391,410,433,448],//h18
      hair1VarY19:[530,513,517,540], 
      
      hair1VarX20:[391,412,439,450],//h19
      hair1VarY20:[580,565,571,590], 
      
      hair1VarX21:[397,416,439,455],//h20
      hair1VarY21:[615,600,601,617], 
      
      hair1VarX22:[165,140,114,107],//h22
      hair1VarY22:[290,274,287,307],  
      
      hair1VarX23:[163,140,114,107],//h23
      hair1VarY23:[378,363,372,394],  
      
      hair1VarX24:[158,140,114,105],//h25
      hair1VarY24:[455,440,441,465],  
      
      hair1VarX25:[158,140,114,103],//h26
      hair1VarY25:[530,510,520,543],  
      
      hair1VarX26:[156,140,114,98],//h27
      hair1VarY26:[580,570,570,595],  
      
      hair1VarX27:[156,140,114,100  ],//h28
      hair1VarY27:[610,603,603,620],  
      
      hair1VarX28:[373,390,415,432],//h30
      hair1VarY28:[290,270,273,288],  
      
      hair1VarX29:[350,378,397,399],//h31
      hair1VarY29:[355,350,364,385],  
      
      hair1VarX30:[150,153,173,195],//h32
      hair1VarY30:[385,360,352,355],   
      
      hair1VarX31:[233,250,272,290],//h33
      hair1VarY31:[405,390,397,412],   
      
      hair1VarX32:[235,250,272,290],//h34
      hair1VarY32:[480,465,460,473],   
      
      hair1VarX33:[247,267,290,304],//h35
      hair1VarY33:[549,538,543,561],
      
      hair1VarX34:[600,],//h34
      hair1VarY34:[250,],   
  //hair2   
      hair2VarX:[150,150,150],
      hair2VarY:[340,420,500],
 
      hair2VarX2:[250,250,250],
      hair2VarY2:[340,420,500],
      
      hair2VarX3:[350,350,350],
      hair2VarY3:[340,420,500],
      
      hair2VarX4:[390,],
      hair2VarY4:[330,],
      
      hair2VarX5:[280,],
      hair2VarY5:[520,],
      
      hair2VarX6:[157,180,210,218],//h3
      hair2VarY6:[133,117,120,150],
      
      hair2VarX7:[147,160,180,196],//h4
      hair2VarY7:[310,292,290,303], 
      
      hair2VarX8:[230,230,257],//h5
      hair2VarY8:[380,350,342],
     
      hair2VarX10:[290,],//blueband
      hair2VarY10:[370,],  
      
      hair2VarX11:[297,287,320],//h7
      hair2VarY11:[390,365,350],   
      
      hair2VarX12:[368,350,325,315],//h9
      hair2VarY12:[145,125,130,150],   
      
      hair2VarX13:[377,375,350,330],//h10
      hair2VarY13:[316,295,290,300],   
     
      hair2VarX14:[325,303,278],//h11
      hair2VarY14:[355,333,348],   
      
      hair2VarX15:[280,265,240],//h12
      hair2VarY15:[357,338,340],   
      
      hair2VarX16:[160,175,225,268],//h13
      hair2VarY16:[330,270,260,290],   
      
      hair2VarX17:[111,140,160],//h15
      hair2VarY17:[260,245,265],    
      
      hair2VarX18:[150,170,198],//h16
      hair2VarY18:[360,335,340],    
      
      hair2VarX19:[175,200,220],//h17
      hair2VarY19:[418,392,407],    
      
      hair2VarX20:[378,400,420,425],//h19
      hair2VarY20:[280,270,280,300],    
      
      hair2VarX21:[355,380,400,404],//h20
      hair2VarY21:[345,335,345,365],    
      
      hair2VarX22:[325,350,368],//h21
      hair2VarY22:[405,402,420],    
      
      hair2VarX23:[260,280,300,303],//h22
      hair2VarY23:[515,510,517,535],    
      
      hair2VarX24:[600,],//h24
      hair2VarY24:[250,],     
      
   //hair2
   //hair3
      hair3VarX:[150,150,150],
      hair3VarY:[340,420,500],
 
      hair3VarX2:[250,250,250],
      hair3VarY2:[340,420,500],
      
      hair3VarX3:[350,350,350],
      hair3VarY3:[340,420,500],
      
      hair3VarX4:[321,350,370],//h2
      hair3VarY4:[157,154,175],  
   
      hair3VarX5:[290,310,307],//h3
      hair3VarY5:[200,220,248],  
   
      hair3VarX6:[177,203,214],//h4
      hair3VarY6:[250,247,273],  
   
      hair3VarX7:[195,202,228],//h5
      hair3VarY7:[340,313,313],  
   
      hair3VarX8:[240,250,275],//h6
      hair3VarY8:[390,369,370],  
   
      hair3VarX9:[240,250,275],//h7
      hair3VarY9:[390,369,370],  
   
      hair3VarX10:[450,],//flower
      hair3VarY10:[270,],   
   
 //mmmmmmmmmmmm     
      
     colors:["0xff00ff","0xff0000","0x0000cc","0x00ff00","0x33ffff","0x330066","0xff0000","0xffff33","0x00cccc","0x6600cc","0x660066","0x339900","0x3300cc","0xcc0066","0x003366","0x003333","0x9933ff","0x990033"], 
    
    
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
        
        game.load.onFileComplete.add(this.fileLoadFun, this);  
   },gameResized: function(manager, bounds){
		var xpos = window.innerWidth - (window.innerWidth / game.width);
        var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
        manager.setUserScale(scale, scale, 0, 0);
        game.scale.pageAlignHorizontally = true;
   },fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles){
		if (progress == 100) {
            game.load.onFileComplete.removeAll();
            game.state.start('preloader');   
        }
   }
}

Main.preloader = function(){};

Main.preloader.prototype = {
   preload:function(){
	   
		this.progress = game.add.text(game.world.centerX,500,"LOADING: 0%",{font:"bold 22px Arial",fill: "#ffffff",align: "center"});
        this.progress.anchor.setTo(0.5);
		
		this.prelogo = game.add.sprite((game.width/2)-100, (game.height/2)-100, 'prelogo');        
        this.prelogo.inputEnabled = true;
		this.prelogo.statusType = "loading";
        this.prelogo.input.useHandCursor = true;
        this.prelogo.events.onInputDown.add(openLink, this);
             
        game.load.crossOrigin='*';
        game.load.audio('music', ['assets/music.mp3']);
        game.load.spritesheet('soundicon', 'assets/soundicon.png',74,90);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png',141,134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png',367,335);
		
		game.load.image('donebtn', 'assets/buttons/donebtn.png');
		game.load.image('nextbtn', 'assets/buttons/nextbtn.png');
		game.load.image('playbtn', 'assets/buttons/playbtn.png');
		game.load.image('resetbtn', 'assets/buttons/resetbtn.png');
		game.load.image('morebtn', 'assets/buttons/morebtn.png');
		
		game.load.image('lighting', 'assets/lighting.png');
		game.load.image('titlebg', 'assets/titlebg.jpg');
		game.load.image('room_bg', 'assets/room_bg.jpg');
		game.load.image('hair1_body', 'assets/hair1/hair1_body.png');
		game.load.image('hair1', 'assets/hair1/hair1.png');
		game.load.image('hair2', 'assets/hair1/hair2.png');
		game.load.image('hair3', 'assets/hair1/hair3.png');
		game.load.image('cupboard', 'assets/hair1/cupboard.png');
		game.load.image('forwardbtn', 'assets/hair1/forwardbtn.png');
		game.load.image('backwardbtn', 'assets/hair1/backwardbtn.png');
		game.load.image('char1', 'assets/char1.png');
		game.load.image('char2', 'assets/char2.png');
		game.load.image('char3', 'assets/char3.png');
		game.load.image('selection_bg', 'assets/selection_bg.jpg');        
		game.load.image('design_panel', 'assets/hair1design/design_panel.png');
        
        game.load.image('arrowbtn', 'assets/arrowbtn.png');       
        game.load.image('extra_hair1', 'assets/hair1design/extra_hair1.png');
        game.load.image('extra_hair2', 'assets/hair1design/extra_hair2.png');
        game.load.image('extra_hair3', 'assets/hair1design/extra_hair3.png');
        game.load.image('hair1_flowericon', 'assets/hair1design/hair1_flowericon.png');
        game.load.image('hair2_flowericon', 'assets/hair2design/hair2_flowericon.png');
        game.load.image('hair3_flowericon', 'assets/hair3design/hair3_flowericon.png');
        game.load.image('final_bg', 'assets/final_bg.png');
        game.load.image('elsa_body', 'assets/elsa_body.png');
        game.load.image('blue_bg', 'assets/blue_bg.png');
        game.load.image('intro_bg', 'assets/intro_bg.jpg');
        game.load.image('intro_elsa', 'assets/intro_elsa.png');
        game.load.image('popup1', 'assets/popup1.png');
 
		for (i=1;i<=5;i++) {
         game.load.image('hair1_veil'+i, 'assets/hair1/hair1_veil'+i+'.png');
         game.load.image('hair1_veilicon'+i, 'assets/hair1/hair1_veilicon'+i+'.png');
         game.load.image('final_veil'+i, 'assets/final_veil'+i+'.png');
        }
        for (i=1;i<=4;i++) {
          game.load.image('design_icon'+i, 'assets/hair1design/design_icon'+i+'.png');
        }
        
        for (i=1;i<=37;i++) {
         game.load.image('design1_'+i, 'assets/hair1design/design1_'+i+'.png');        
        }
       for (i=1;i<=23;i++) {
         game.load.image('design2_'+i, 'assets/hair2design/design2_'+i+'.png');        
        } 
        for (i=1;i<=15;i++) {
         game.load.image('design3_'+i, 'assets/hair3design/design3_'+i+'.png');        
        } 
	 for (i=1;i<=3;i++) {
         game.load.image('elsa_hair'+i, 'assets/elsa_hair'+i+'.png');        
         game.load.image('elsa_backhair'+i, 'assets/elsa_backhair'+i+'.png');        
        } 
        game.load.spritesheet('comb_line', 'assets/comb_line.png',64,250,14);
        game.load.spritesheet('elsa_eyeblink', 'assets/elsa_eyeblink.png',83,37,9);
  
		for(i=0;i<RelatedGames.length; i++){
			game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
        }
        game.load.image('Tumpframe', 'assets/Tump_frame.png');
			 
        //LLLLL
        game.load.onFileComplete.add(this.fileLoadFunPre, this);  
		  
   },fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               game.load.onFileComplete.removeAll();
               //AAAAAA
               game.state.start('title');  
            }
   }
}
Main.title = function(){};
Main.title.prototype = {
	create:function(){
		if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
		this.bg = game.add.sprite(0,0,'titlebg');
       
	    this.morebtn = game.add.sprite(60,735,"morebtn");
		this.morebtn.anchor.setTo(0.5);		
		this.morebtn.statusType = "game";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		this.donebtn = game.add.sprite(440,735,"donebtn");
		this.donebtn.anchor.setTo(0.5);				
		this.donebtn.url = "intro";
		this.donebtn.inputEnabled = true;
		this.donebtn.input.useHandCursor = true;
		this.donebtn.input.pixelPerfectClick = true;
		this.donebtn.input.pixelPerfectOver = true;
		this.donebtn.events.onInputDown.add(stateStart,this);
		this.donebtn.events.onInputOut.add(btnOut,this);
		this.donebtn.events.onInputOver.add(btnOver,this);
		
      this.tooltween1=game.add.tween(this.morebtn.scale).to({x:1.15,y:1.15},700,Phaser.Easing.Quadratic.Out,true,0,-1).yoyo(true,300);  
       this.tooltween2=game.add.tween(this.donebtn.scale).to({x:1.15,y:1.15},700,Phaser.Easing.Quadratic.Out,true,0,-1).yoyo(true,300);   
        
        
		
		this.logo = game.add.sprite(0,0,"logo");
		this.logo.anchor.setTo(0.5);
		this.logo.scale.setTo(0.8);
		this.logo.x = this.logo.width/1.85;
		this.logo.y = this.logo.height/1.7;
		this.logo.statusType = "menu";
		this.logo.inputEnabled = true;
		this.logo.input.useHandCursor = true;
		this.logo.input.pixelPerfectClick = true;
		this.logo.input.pixelPerfectOver = true;
		this.logo.events.onInputDown.add(openLink,this);
		
		this.musicbtn = game.add.sprite(0,0,"soundicon");
		this.musicbtn.anchor.setTo(0.5);
		this.musicbtn.scale.setTo(0.9);
		this.musicbtn.x = game.world.width-(this.musicbtn.width/1.8);
		this.musicbtn.y = this.musicbtn.height/1.9;
		this.musicbtn.inputEnabled = true;
		this.musicbtn.input.useHandCursor = true;
		this.musicbtn.input.pixelPerfectClick = true;
		this.musicbtn.input.pixelPerfectOver = true;
		this.musicbtn.events.onInputDown.add(changeMusic,this);
		
		musicStatus(this.musicbtn);		
				addShutter('title');
	}
};
//iiiiiiiiiiiiii
Main.intro = function(){};
Main.intro.prototype = {
	create:function(){
		if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
		this.bg = game.add.sprite(0,0,'intro_bg');		
		
        this.intro_elsa = game.add.sprite(-150,712.45,"intro_elsa");
		this.intro_elsa.anchor.setTo(0.5);
        
         this.popup1 = game.add.sprite(258.8,176.85,'popup1');
         this.popup1.anchor.setTo(0.5);
         this.popup1.scale.setTo(0);
       
	    this.morebtn = game.add.sprite(50,740,"morebtn");
		this.morebtn.anchor.setTo(0.5);		
		this.morebtn.scale.setTo(0);		
		this.morebtn.statusType = "game";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		this.donebtn = game.add.sprite(450,740,"nextbtn");
		this.donebtn.anchor.setTo(0.5);				
		this.donebtn.scale.setTo(0);				
		this.donebtn.url = "selectionScreen";
		this.donebtn.inputEnabled = true;
		this.donebtn.input.useHandCursor = true;
		this.donebtn.input.pixelPerfectClick = true;
		this.donebtn.input.pixelPerfectOver = true;
		this.donebtn.events.onInputDown.add(stateStart,this);
		this.donebtn.events.onInputOut.add(btnOut,this);
		this.donebtn.events.onInputOver.add(btnOver,this);
	
        game.add.tween(this.intro_elsa).to({x:[220,210]}, 700, Phaser.Easing.Quadratic.Out, true,2000).onComplete.add(function(){
         
    game.add.tween(this.popup1.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true,1200);
    game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true,1200);
         
         },this);  
        
        
		this.logo = game.add.sprite(0,0,"logo");
		this.logo.anchor.setTo(0.5);
		this.logo.scale.setTo(0.8);
		this.logo.x = this.logo.width/1.85;
		this.logo.y = this.logo.height/1.7;
		this.logo.statusType = "game";
		this.logo.inputEnabled = true;
		this.logo.input.useHandCursor = true;
		this.logo.input.pixelPerfectClick = true;
		this.logo.input.pixelPerfectOver = true;
		this.logo.events.onInputDown.add(openLink,this);
		
		this.musicbtn = game.add.sprite(0,0,"soundicon");
		this.musicbtn.anchor.setTo(0.5);
		this.musicbtn.scale.setTo(0.9);
		this.musicbtn.x = game.world.width-(this.musicbtn.width/1.8);
		this.musicbtn.y = this.musicbtn.height/1.9;
		this.musicbtn.inputEnabled = true;
		this.musicbtn.input.useHandCursor = true;
		this.musicbtn.input.pixelPerfectClick = true;
		this.musicbtn.input.pixelPerfectOver = true;
		this.musicbtn.events.onInputDown.add(changeMusic,this);
		
		musicStatus(this.musicbtn);
				addShutter();

	}
};
//sssssssssssssssss
Main.selectionScreen = function(){};
Main.selectionScreen.prototype = {
	create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
	 this.levelGroup = game.add.group();

        this.selectionbg = game.add.sprite(0, 0, 'selection_bg');
        this.levelGroup.add(this.selectionbg);
        
        
         this.char1 = game.add.sprite(247.9, 229.6, 'char1');
         this.char1.anchor.setTo(0.5);
         this.char1.scale.setTo(0);
         this.char1.id=1;
         this.char1.inputEnabled = true;
         this.char1.input.useHandCursor = true;
         this.char1.events.onInputUp.add(this.enterRoom1, this);
         this.char1.events.onInputOver.add(btnOver, this);
         this.char1.events.onInputOut.add(btnOut, this);
         this.levelGroup.add(this.char1);
         
         this.char2 = game.add.sprite(124.15, 610, 'char2');
         this.char2.anchor.setTo(0.5);
         this.char2.scale.setTo(0);
         this.char2.id=2;
         this.char2.inputEnabled = true;
         this.char2.input.useHandCursor = true;
         this.char2.events.onInputUp.add(this.enterRoom2, this);
         this.char2.events.onInputOver.add(btnOver, this);
         this.char2.events.onInputOut.add(btnOut, this);
         this.levelGroup.add(this.char2);
         
         this.char3 = game.add.sprite(372.6, 610, 'char3');
         this.char3.anchor.setTo(0.5);
         this.char3.scale.setTo(0);
         this.char3.id=3;
         this.char3.inputEnabled = true;
         this.char3.input.useHandCursor = true;
         this.char3.events.onInputUp.add(this.enterRoom3, this);
         this.char3.events.onInputOver.add(btnOver, this);
         this.char3.events.onInputOut.add(btnOut, this);
         this.levelGroup.add(this.char3);
        
	    this.morebtn = game.add.sprite(250,440,"morebtn");
		this.morebtn.anchor.setTo(0.5);		
		this.morebtn.scale.setTo(0);		
		this.morebtn.statusType = "game";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		game.add.tween(this.char1.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true,2000);
        game.add.tween(this.char2.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true,2000);
        game.add.tween(this.char3.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true,2000);
        game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true,2000);
		
		
        
       
		this.logo = game.add.sprite(0,0,"logo");
		this.logo.anchor.setTo(0.5);
		this.logo.scale.setTo(0.8);
		this.logo.x = this.logo.width/1.85;
		this.logo.y = this.logo.height/1.7;
		this.logo.statusType = "game";
		this.logo.inputEnabled = true;
		this.logo.input.useHandCursor = true;
		this.logo.input.pixelPerfectClick = true;
		this.logo.input.pixelPerfectOver = true;
		this.logo.events.onInputDown.add(openLink,this);
		
		this.musicbtn = game.add.sprite(0,0,"soundicon");
		this.musicbtn.anchor.setTo(0.5);
		this.musicbtn.scale.setTo(0.9);
		this.musicbtn.x = game.world.width-(this.musicbtn.width/1.8);
		this.musicbtn.y = this.musicbtn.height/1.9;
		this.musicbtn.inputEnabled = true;
		this.musicbtn.input.useHandCursor = true;
		this.musicbtn.input.pixelPerfectClick = true;
		this.musicbtn.input.pixelPerfectOver = true;
		this.musicbtn.events.onInputDown.add(changeMusic,this);
		
		musicStatus(this.musicbtn);
	     // addShutter();
		  if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true)
        }
	},
    enterRoom1:function(evt){        
         game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
            Main.girlChoosed[1]=1;
            Main.finalVar=1;
        game.state.start('demo1');    
         });
   },
 enterRoom2:function(evt){        
         game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
            Main.girlChoosed[2]=2;
             Main.finalVar=2;
        game.state.start('demo2');    
         });
   },    
 enterRoom3:function(evt){
        
         game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
            Main.girlChoosed[3]=3;
             Main.finalVar=3;
        game.state.start('demo3');    
         });
   },  
};

//h11111111111111
Main.hair1 = function(){};
Main.hair1.prototype = {
	create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
		this.levelGroup=game.add.group();
		this.bg = game.add.sprite(0,0,'room_bg');
        this.levelGroup.add(this.bg);
        this.stepCount=1;
        
		//this.hair1_body = game.add.sprite(248.05,609,"hair1_body");
		this.hair1_body = game.add.sprite(265,609,"hair1_body");
		this.hair1_body.anchor.setTo(0.5);
        
        this.hair1 = game.add.sprite(282.4,420.7,"hair1");
		this.hair1.anchor.setTo(0.5); 
        
    this.hairveilGroup1=game.add.group();   
 
       this.veilGroup=game.add.group();  
          this.hairveilGroup1.add(this.veilGroup);
        
        this.retainObjects1();
        
        this.cupboard = game.add.sprite(251.9,709.3,"cupboard");
		this.cupboard.anchor.setTo(0.5); 
       
    this.cupboardGroup1=game.add.group();   
       
        this.hair1_veilicon1 = game.add.sprite(176.5,735,"hair1_veilicon1");
		this.hair1_veilicon1.anchor.setTo(0.5);  
        this.hair1_veilicon1.arrayindex=0;
        this.hair1_veilicon1.name = 1;
        
        this.hair1_veilicon2 = game.add.sprite(348.15,750,"hair1_veilicon2");
		this.hair1_veilicon2.anchor.setTo(0.5);  
        this.hair1_veilicon2.arrayindex=0;
        this.hair1_veilicon2.name = 2;
       for(i=1;i<=2;i++)
           {
            this['hair1_veilicon'+i].inputEnabled = true;
            this['hair1_veilicon'+i].input.useHandCursor = true;
            this['hair1_veilicon'+i].events.onInputUp.add(this.changeItem2, this);
            this['hair1_veilicon'+i].events.onInputOver.add(btnOver, this);
            this['hair1_veilicon'+i].events.onInputOut.add(btnOut, this);           
           }       
      for (i=1;i<=2;i++) {
      this.cupboardGroup1.add(this["hair1_veilicon"+i]);       
        } 
    this.cupboardGroup2=game.add.group();     
        this.hair1_veilicon3 = game.add.sprite(143,740,"hair1_veilicon3");
		this.hair1_veilicon3.anchor.setTo(0.5);  
        this.hair1_veilicon3.arrayindex=0;
        this.hair1_veilicon3.name = 3;
        
        this.hair1_veilicon4 = game.add.sprite(268,760,"hair1_veilicon4");
		this.hair1_veilicon4.anchor.setTo(0.5);  
        this.hair1_veilicon4.arrayindex=0;
        this.hair1_veilicon4.name = 4;
        
        this.hair1_veilicon5 = game.add.sprite(388,790,"hair1_veilicon5");
		this.hair1_veilicon5.anchor.setTo(0.5);  
        this.hair1_veilicon5.arrayindex=0;
        this.hair1_veilicon5.name = 5;
        for(i=3;i<=5;i++)
           {
            this['hair1_veilicon'+i].inputEnabled = true;
            this['hair1_veilicon'+i].input.useHandCursor = true;
            this['hair1_veilicon'+i].events.onInputUp.add(this.changeItem2, this);
            this['hair1_veilicon'+i].events.onInputOver.add(btnOver, this);
            this['hair1_veilicon'+i].events.onInputOut.add(btnOut, this);           
           }       
        for (i=3;i<=5;i++) {
      this.cupboardGroup2.add(this["hair1_veilicon"+i]);       
        } 
       this.cupboardGroup2.visible=false;
    
            this.forwardbtn = game.add.sprite(451.7,665,'forwardbtn');
            this.forwardbtn.anchor.setTo(0.5);           
            this.forwardbtn.inputEnabled = true;
            this.forwardbtn.input.useHandCursor = true;
            this.forwardbtn.events.onInputUp.add(this.cupboardFunction1, this);
            this.forwardbtn.events.onInputOver.add(btnOver, this);
            this.forwardbtn.events.onInputOut.add(btnOut, this);
           
            this.backwardbtn = game.add.sprite(61.65,665,'backwardbtn');
            this.backwardbtn.anchor.setTo(0.5);
            this.backwardbtn.inputEnabled = true;
            this.backwardbtn.visible=false;
            this.backwardbtn.input.useHandCursor = true;
            this.backwardbtn.events.onInputUp.add(this.cupboardFunction2, this);
            this.backwardbtn.events.onInputOver.add(btnOver, this);
            this.backwardbtn.events.onInputOut.add(btnOut, this);
       
		this.morebtn = game.add.sprite(44.7,745,"morebtn");
		this.morebtn.anchor.setTo(0.5);		
		this.morebtn.statusType = "game";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		this.donebtn = game.add.sprite(458.25,745,"donebtn");
		this.donebtn.anchor.setTo(0.5);		
		this.donebtn.scale.setTo(0);		
		this.donebtn.url = "finalScreen";
		this.donebtn.inputEnabled = true;
		this.donebtn.input.useHandCursor = true;
		this.donebtn.input.pixelPerfectClick = true;
		this.donebtn.input.pixelPerfectOver = true;
		this.donebtn.events.onInputDown.add(stateStart,this);
		this.donebtn.events.onInputOut.add(btnOut,this);
		this.donebtn.events.onInputOver.add(btnOver,this);
		
		
		
		this.logo = game.add.sprite(0,0,"logo");
		this.logo.anchor.setTo(0.5);
		this.logo.scale.setTo(0.8);
		this.logo.x = this.logo.width/1.85;
		this.logo.y = this.logo.height/1.7;
		this.logo.statusType = "game";
		this.logo.inputEnabled = true;
		this.logo.input.useHandCursor = true;
		this.logo.input.pixelPerfectClick = true;
		this.logo.input.pixelPerfectOver = true;
		this.logo.events.onInputDown.add(openLink,this);
		
		this.musicbtn = game.add.sprite(0,0,"soundicon");
		this.musicbtn.anchor.setTo(0.5);
		this.musicbtn.scale.setTo(0.9);
		this.musicbtn.x = game.world.width-(this.musicbtn.width/1.8);
		this.musicbtn.y = this.musicbtn.height/1.9;
		this.musicbtn.inputEnabled = true;
		this.musicbtn.input.useHandCursor = true;
		this.musicbtn.input.pixelPerfectClick = true;
		this.musicbtn.input.pixelPerfectOver = true;
		this.musicbtn.events.onInputDown.add(changeMusic,this);
		
		musicStatus(this.musicbtn);
				addShutter();

	},
 
changeItem2:function(evt){
   Main.doneCount1[evt.arrayindex]=1;
   this.value=0;
   for (var key in Main.doneCount1) {
       if (Main.doneCount1[key]==1) {
    this.value++;
       }
   }
   if (this.value==1) {
    game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   }     
    switch(evt.arrayindex)
   {
      case 0:
   effectVar = game.add.sprite(260,200,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1.7);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
         break;      
   }     
   Main.applyCount1[evt.arrayindex] = evt.name;  
    this.retainObjects1();
  
 },
retainObjects1:function(){      
   this.hairveilGroup1.removeAll();
   if (Main.applyCount1[0]>=1) {
    this.hair1_veil1 = game.add.sprite(282,452,"hair1_veil"+Main.applyCount1[0]);
	this.hair1_veil1.anchor.setTo(0.5);
      if (Main.applyCount1[0]==5) {
               this.hair1_veil1.x=282;
               this.hair1_veil1.y=534;    
      }
       if (Main.applyCount1[0]==1) {
               this.hair1_veil1.x=282;
               this.hair1_veil1.y=408;    
      }
      if (Main.applyCount1[0]==3) {
               this.hair1_veil1.x=282;
               this.hair1_veil1.y=414;    
      }
   this.hairveilGroup1.add(this.hair1_veil1);
          }            
},
   cupboardFunction1:function(){   
            this.backwardbtn.visible = true;
            if (this.stepCount < 2) {
               this['cupboardGroup'+this.stepCount].visible = false;
               this.stepCount++;               
              this['cupboardGroup'+this.stepCount].visible = true;               
              if (this.stepCount == 2) {
                  this.forwardbtn.visible = false;
               };               
          };          
  },   
cupboardFunction2:function(){   
    this.forwardbtn.visible = true;
            if (this.stepCount> 1) {
               this['cupboardGroup'+this.stepCount].visible = false;
               this.stepCount--;               
               this['cupboardGroup'+this.stepCount].visible = true;
               if (this.stepCount == 1) {
                  this.backwardbtn.visible = false;
               }
            }         
},
removeGlitter:function(evt){
      evt.kill(); 
      },
};

//h2222222222222
Main.hair2 = function(){};
Main.hair2.prototype = {
	create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
		this.levelGroup=game.add.group();
		this.bg = game.add.sprite(0,0,'room_bg');
        this.levelGroup.add(this.bg);
        this.stepCount=1;
		//this.hair1_body = game.add.sprite(248.05,609,"hair1_body");
		this.hair1_body = game.add.sprite(275,609,"hair1_body");
		this.hair1_body.anchor.setTo(0.5);
        
        this.hair2 = game.add.sprite(269,435.35,"hair2");
		this.hair2.anchor.setTo(0.5); 
        
    this.hairveilGroup1=game.add.group();   
 
       this.veilGroup=game.add.group();  
          this.hairveilGroup1.add(this.veilGroup);
        
        this.retainObjects1();
        
        this.cupboard = game.add.sprite(251.9,709.3,"cupboard");
		this.cupboard.anchor.setTo(0.5); 
       
    this.cupboardGroup1=game.add.group();   
       
        this.hair2_veilicon1 = game.add.sprite(176.5,735,"hair1_veilicon1");
		this.hair2_veilicon1.anchor.setTo(0.5);  
        this.hair2_veilicon1.arrayindex=0;
        this.hair2_veilicon1.name = 1;
        
        this.hair2_veilicon2 = game.add.sprite(348.15,750,"hair1_veilicon2");
		this.hair2_veilicon2.anchor.setTo(0.5);  
        this.hair2_veilicon2.arrayindex=0;
        this.hair2_veilicon2.name = 2;
       for(i=1;i<=2;i++)
           {
            this['hair2_veilicon'+i].inputEnabled = true;
            this['hair2_veilicon'+i].input.useHandCursor = true;
            this['hair2_veilicon'+i].events.onInputUp.add(this.changeItem2, this);
            this['hair2_veilicon'+i].events.onInputOver.add(btnOver, this);
            this['hair2_veilicon'+i].events.onInputOut.add(btnOut, this);           
           }       
      for (i=1;i<=2;i++) {
      this.cupboardGroup1.add(this["hair2_veilicon"+i]);       
        } 
    this.cupboardGroup2=game.add.group();     
        this.hair2_veilicon3 = game.add.sprite(143,740,"hair1_veilicon3");
		this.hair2_veilicon3.anchor.setTo(0.5);  
        this.hair2_veilicon3.arrayindex=0;
        this.hair2_veilicon3.name = 3;
        
        this.hair2_veilicon4 = game.add.sprite(268,760,"hair1_veilicon4");
		this.hair2_veilicon4.anchor.setTo(0.5);  
        this.hair2_veilicon4.arrayindex=0;
        this.hair2_veilicon4.name = 4;
        
        this.hair2_veilicon5 = game.add.sprite(388,790,"hair1_veilicon5");
		this.hair2_veilicon5.anchor.setTo(0.5);  
        this.hair2_veilicon5.arrayindex=0;
        this.hair2_veilicon5.name = 5;
        for(i=3;i<=5;i++)
           {
            this['hair2_veilicon'+i].inputEnabled = true;
            this['hair2_veilicon'+i].input.useHandCursor = true;
            this['hair2_veilicon'+i].events.onInputUp.add(this.changeItem2, this);
            this['hair2_veilicon'+i].events.onInputOver.add(btnOver, this);
            this['hair2_veilicon'+i].events.onInputOut.add(btnOut, this);           
           }       
        for (i=3;i<=5;i++) {
      this.cupboardGroup2.add(this["hair2_veilicon"+i]);       
        } 
       this.cupboardGroup2.visible=false;
    
            this.forwardbtn = game.add.sprite(451.7,665,'forwardbtn');
            this.forwardbtn.anchor.setTo(0.5);           
            this.forwardbtn.inputEnabled = true;
            this.forwardbtn.input.useHandCursor = true;
            this.forwardbtn.events.onInputUp.add(this.cupboardFunction1, this);
            this.forwardbtn.events.onInputOver.add(btnOver, this);
            this.forwardbtn.events.onInputOut.add(btnOut, this);
           
            this.backwardbtn = game.add.sprite(61.65,665,'backwardbtn');
            this.backwardbtn.anchor.setTo(0.5);
            this.backwardbtn.inputEnabled = true;
            this.backwardbtn.visible=false;
            this.backwardbtn.input.useHandCursor = true;
            this.backwardbtn.events.onInputUp.add(this.cupboardFunction2, this);
            this.backwardbtn.events.onInputOver.add(btnOver, this);
            this.backwardbtn.events.onInputOut.add(btnOut, this);
       
		this.morebtn = game.add.sprite(44.7,745,"morebtn");
		this.morebtn.anchor.setTo(0.5);		
		this.morebtn.statusType = "game";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		this.donebtn = game.add.sprite(458.25,745,"donebtn");
		this.donebtn.anchor.setTo(0.5);		
		this.donebtn.scale.setTo(0);		
		this.donebtn.url = "finalScreen";
		this.donebtn.inputEnabled = true;
		this.donebtn.input.useHandCursor = true;
		this.donebtn.input.pixelPerfectClick = true;
		this.donebtn.input.pixelPerfectOver = true;
		this.donebtn.events.onInputDown.add(stateStart,this);
		this.donebtn.events.onInputOut.add(btnOut,this);
		this.donebtn.events.onInputOver.add(btnOver,this);
		
		
		
		this.logo = game.add.sprite(0,0,"logo");
		this.logo.anchor.setTo(0.5);
		this.logo.scale.setTo(0.8);
		this.logo.x = this.logo.width/1.85;
		this.logo.y = this.logo.height/1.7;
		this.logo.statusType = "game";
		this.logo.inputEnabled = true;
		this.logo.input.useHandCursor = true;
		this.logo.input.pixelPerfectClick = true;
		this.logo.input.pixelPerfectOver = true;
		this.logo.events.onInputDown.add(openLink,this);
		
		this.musicbtn = game.add.sprite(0,0,"soundicon");
		this.musicbtn.anchor.setTo(0.5);
		this.musicbtn.scale.setTo(0.9);
		this.musicbtn.x = game.world.width-(this.musicbtn.width/1.8);
		this.musicbtn.y = this.musicbtn.height/1.9;
		this.musicbtn.inputEnabled = true;
		this.musicbtn.input.useHandCursor = true;
		this.musicbtn.input.pixelPerfectClick = true;
		this.musicbtn.input.pixelPerfectOver = true;
		this.musicbtn.events.onInputDown.add(changeMusic,this);
		
		musicStatus(this.musicbtn);
				addShutter();

	},
  
changeItem2:function(evt){
   Main.doneCount2[evt.arrayindex]=1;
   this.value=0;
   for (var key in Main.doneCount2) {
       if (Main.doneCount2[key]==1) {
    this.value++;
       }
   }
   if (this.value==1) {
    game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   }     
    switch(evt.arrayindex)
   {
      case 0:
   effectVar = game.add.sprite(260,200,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1.7);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
         break;      
   }     
   Main.applyCount1[evt.arrayindex] = evt.name;  
    this.retainObjects1();
  
 },
 
  retainObjects1:function(){      
   this.hairveilGroup1.removeAll();
   if (Main.applyCount1[0]>=1) {
    this.hair1_veil1 = game.add.sprite(285,463,"hair1_veil"+Main.applyCount1[0]);
	this.hair1_veil1.anchor.setTo(0.5);
      if (Main.applyCount1[0]==5) {
               this.hair1_veil1.x=285;
               this.hair1_veil1.y=542;    
      }
       if (Main.applyCount1[0]==1) {
               this.hair1_veil1.x=285;
               this.hair1_veil1.y=420;    
      }
      if (Main.applyCount1[0]==3) {
               this.hair1_veil1.x=285;
               this.hair1_veil1.y=420;    
      }
   this.hairveilGroup1.add(this.hair1_veil1);
          }            
         
},
   cupboardFunction1:function(){   
            this.backwardbtn.visible = true;
            if (this.stepCount < 2) {
               this['cupboardGroup'+this.stepCount].visible = false;
               this.stepCount++;               
              this['cupboardGroup'+this.stepCount].visible = true;               
              if (this.stepCount == 2) {
                  this.forwardbtn.visible = false;
               };               
          };          
  },   
cupboardFunction2:function(){   
    this.forwardbtn.visible = true;
            if (this.stepCount> 1) {
               this['cupboardGroup'+this.stepCount].visible = false;
               this.stepCount--;               
               this['cupboardGroup'+this.stepCount].visible = true;
               if (this.stepCount == 1) {
                  this.backwardbtn.visible = false;
               }
            }         
},
removeGlitter:function(evt){
      evt.kill(); 
      },
};


//h3333333333
Main.hair3 = function(){};
Main.hair3.prototype = {
	create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
		this.levelGroup=game.add.group();
		this.bg = game.add.sprite(0,0,'room_bg');
        this.levelGroup.add(this.bg);
        this.stepCount=1;
		//this.hair1_body = game.add.sprite(254,609,"hair1_body");
		this.hair1_body = game.add.sprite(277,609,"hair1_body");
		this.hair1_body.anchor.setTo(0.5);
        
        this.hair3 = game.add.sprite(282.4,420.7,"hair3");
		this.hair3.anchor.setTo(0.5); 
        
    this.hairveilGroup1=game.add.group();   
 
       this.veilGroup=game.add.group();  
          this.hairveilGroup1.add(this.veilGroup);
        
        this.retainObjects1();
        
        this.cupboard = game.add.sprite(251.9,709.3,"cupboard");
		this.cupboard.anchor.setTo(0.5); 
       
    this.cupboardGroup1=game.add.group();   
       
        this.hair3_veilicon1 = game.add.sprite(176.5,735,"hair1_veilicon1");
		this.hair3_veilicon1.anchor.setTo(0.5);  
        this.hair3_veilicon1.arrayindex=0;
        this.hair3_veilicon1.name = 1;
        
        this.hair3_veilicon2 = game.add.sprite(348.15,750,"hair1_veilicon2");
		this.hair3_veilicon2.anchor.setTo(0.5);  
        this.hair3_veilicon2.arrayindex=0;
        this.hair3_veilicon2.name = 2;
       for(i=1;i<=2;i++)
           {
            this['hair3_veilicon'+i].inputEnabled = true;
            this['hair3_veilicon'+i].input.useHandCursor = true;
            this['hair3_veilicon'+i].events.onInputUp.add(this.changeItem2, this);
            this['hair3_veilicon'+i].events.onInputOver.add(btnOver, this);
            this['hair3_veilicon'+i].events.onInputOut.add(btnOut, this);           
           }       
      for (i=1;i<=2;i++) {
      this.cupboardGroup1.add(this["hair3_veilicon"+i]);       
        } 
    this.cupboardGroup2=game.add.group();     
        this.hair3_veilicon3 = game.add.sprite(143,740,"hair1_veilicon3");
		this.hair3_veilicon3.anchor.setTo(0.5);  
        this.hair3_veilicon3.arrayindex=0;
        this.hair3_veilicon3.name = 3;
        
        this.hair3_veilicon4 = game.add.sprite(268,760,"hair1_veilicon4");
		this.hair3_veilicon4.anchor.setTo(0.5);  
        this.hair3_veilicon4.arrayindex=0;
        this.hair3_veilicon4.name = 4;
        
        this.hair3_veilicon5 = game.add.sprite(388,790,"hair1_veilicon5");
		this.hair3_veilicon5.anchor.setTo(0.5);  
        this.hair3_veilicon5.arrayindex=0;
        this.hair3_veilicon5.name = 5;
        for(i=3;i<=5;i++)
           {
            this['hair3_veilicon'+i].inputEnabled = true;
            this['hair3_veilicon'+i].input.useHandCursor = true;
            this['hair3_veilicon'+i].events.onInputUp.add(this.changeItem2, this);
            this['hair3_veilicon'+i].events.onInputOver.add(btnOver, this);
            this['hair3_veilicon'+i].events.onInputOut.add(btnOut, this);           
           }       
        for (i=3;i<=5;i++) {
      this.cupboardGroup2.add(this["hair3_veilicon"+i]);       
        } 
       this.cupboardGroup2.visible=false;
    
            this.forwardbtn = game.add.sprite(451.7,665,'forwardbtn');
            this.forwardbtn.anchor.setTo(0.5);           
            this.forwardbtn.inputEnabled = true;
            this.forwardbtn.input.useHandCursor = true;
            this.forwardbtn.events.onInputUp.add(this.cupboardFunction1, this);
            this.forwardbtn.events.onInputOver.add(btnOver, this);
            this.forwardbtn.events.onInputOut.add(btnOut, this);
           
            this.backwardbtn = game.add.sprite(61.65,665,'backwardbtn');
            this.backwardbtn.anchor.setTo(0.5);
            this.backwardbtn.inputEnabled = true;
            this.backwardbtn.visible=false;
            this.backwardbtn.input.useHandCursor = true;
            this.backwardbtn.events.onInputUp.add(this.cupboardFunction2, this);
            this.backwardbtn.events.onInputOver.add(btnOver, this);
            this.backwardbtn.events.onInputOut.add(btnOut, this);
       
		this.morebtn = game.add.sprite(44.7,745,"morebtn");
		this.morebtn.anchor.setTo(0.5);		
		this.morebtn.statusType = "game";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		this.donebtn = game.add.sprite(458.25,745,"donebtn");
		this.donebtn.anchor.setTo(0.5);		
		this.donebtn.scale.setTo(0);		
		this.donebtn.url = "finalScreen";
		this.donebtn.inputEnabled = true;
		this.donebtn.input.useHandCursor = true;
		this.donebtn.input.pixelPerfectClick = true;
		this.donebtn.input.pixelPerfectOver = true;
		this.donebtn.events.onInputDown.add(stateStart,this);
		this.donebtn.events.onInputOut.add(btnOut,this);
		this.donebtn.events.onInputOver.add(btnOver,this);
		
		
		
		this.logo = game.add.sprite(0,0,"logo");
		this.logo.anchor.setTo(0.5);
		this.logo.scale.setTo(0.8);
		this.logo.x = this.logo.width/1.85;
		this.logo.y = this.logo.height/1.7;
		this.logo.statusType = "game";
		this.logo.inputEnabled = true;
		this.logo.input.useHandCursor = true;
		this.logo.input.pixelPerfectClick = true;
		this.logo.input.pixelPerfectOver = true;
		this.logo.events.onInputDown.add(openLink,this);
		
		this.musicbtn = game.add.sprite(0,0,"soundicon");
		this.musicbtn.anchor.setTo(0.5);
		this.musicbtn.scale.setTo(0.9);
		this.musicbtn.x = game.world.width-(this.musicbtn.width/1.8);
		this.musicbtn.y = this.musicbtn.height/1.9;
		this.musicbtn.inputEnabled = true;
		this.musicbtn.input.useHandCursor = true;
		this.musicbtn.input.pixelPerfectClick = true;
		this.musicbtn.input.pixelPerfectOver = true;
		this.musicbtn.events.onInputDown.add(changeMusic,this);
		
		musicStatus(this.musicbtn);
				addShutter();

	},
  
changeItem2:function(evt){
   Main.doneCount3[evt.arrayindex]=1;
   this.value=0;
   for (var key in Main.doneCount3) {
       if (Main.doneCount3[key]==1) {
    this.value++;
       }
   }
   if (this.value==1) {
    game.add.tween(this.donebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   }     
    switch(evt.arrayindex)
   {
      case 0:
   effectVar = game.add.sprite(260,200,'effectssd'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(1.7);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
         break;      
   }     
   Main.applyCount1[evt.arrayindex] = evt.name;  
    this.retainObjects1();
  
 },
retainObjects1:function(){      
   this.hairveilGroup1.removeAll();
   if (Main.applyCount1[0]>=1) {
    this.hair1_veil1 = game.add.sprite(306,478,"hair1_veil"+Main.applyCount1[0]);
	this.hair1_veil1.anchor.setTo(0.5);
      if (Main.applyCount1[0]==5) {
               this.hair1_veil1.x=310;
               this.hair1_veil1.y=568;    
      }
       if (Main.applyCount1[0]==1) {
               this.hair1_veil1.x=300;
               this.hair1_veil1.y=440;    
      }
      if (Main.applyCount1[0]==3) {
               this.hair1_veil1.x=310;
               this.hair1_veil1.y=445;    
      }
      if (Main.applyCount1[0]==4) {
               this.hair1_veil1.x=310;
               this.hair1_veil1.y=484;    
      }
   this.hairveilGroup1.add(this.hair1_veil1);
          }            
},
   cupboardFunction1:function(){   
            this.backwardbtn.visible = true;
            if (this.stepCount < 2) {
               this['cupboardGroup'+this.stepCount].visible = false;
               this.stepCount++;               
              this['cupboardGroup'+this.stepCount].visible = true;               
              if (this.stepCount == 2) {
                  this.forwardbtn.visible = false;
               };               
          };          
  },   
cupboardFunction2:function(){   
    this.forwardbtn.visible = true;
            if (this.stepCount> 1) {
               this['cupboardGroup'+this.stepCount].visible = false;
               this.stepCount--;               
               this['cupboardGroup'+this.stepCount].visible = true;
               if (this.stepCount == 1) {
                  this.backwardbtn.visible = false;
               }
            }         
},
removeGlitter:function(evt){
      evt.kill(); 
      },
};

//d11111111111111
Main.demo1 = function(){}
Main.demo1.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
            
           this.hitCount1 = 0; this.hitCount2 = 0; this.hitCount3 = 0; this.hitCount4 = 0; this.hitCount5 = 0; this.hitCount6 = 0; this.hitCount7 = 0; this.hitCount8 = 0; this.hitCount9 = 0; this.hitCount10 = 0; this.hitCount11 = 0;  this.hitCount12 = 0;  this.hitCount13 = 0;  this.hitCount14 = 0;   this.hitCount15 = 0;  this.hitCount16 = 0;this.hitCount17 = 0; this.hitCount18 = 0; this.hitCount19 = 0; this.hitCount20 = 0;this.hitCount21 = 0;  this.hitCount22 = 0; this.hitCount23 = 0; this.hitCount24 = 0;  this.hitCount25 = 0;  this.hitCount26 = 0;  this.hitCount27 = 0;  this.hitCount28 = 0;
           
            this.hitCount29 = 0;
            this.hitCount30 = 0;
            this.hitCount31 = 0;
            this.hitCount32 = 0;
            this.hitCount33 = 0;
            this.hitCount34 = 0;
           
           this.combdrag=false;
           this.combdrag2=false;
           this.combdrag3=false;
           this.banddrag1=false;
           this.banddrag2=false;
           this.banddrag3=false;
           this.banddrag4=false;//h3
           this.banddrag5=false;//4th hairla true
           this.banddrag6=false;//h5
           this.yellowbanddrag1=false;
           this.hair9drag=false;//h9
           this.hair10drag=false;//h10
           this.hair11drag=false;//h11
           this.hair12drag=false;//h12
           this.hair14drag=false;//h14
           this.hair15drag=false;//h15
           this.hair16drag=false;//h16
           this.hair17drag=false;//h17
           this.hair18drag=false;//h18
           this.hair19drag=false;//h19
           this.hair20drag=false;//h20
           this.hair22drag=false;//h22
           this.hair23drag=false;//h23
           this.hair25drag=false;//h25
           this.hair26drag=false;//h26
           this.hair27drag=false;//h27
           this.hair28drag=false;//h28
           this.hair30drag=false;//h30
           this.hair31drag=false;//h31
           this.hair32drag=false;//h32
           this.hair33drag=false;//h33
           this.hair34drag=false;//h34
           this.hair35drag=false;//h35
           this.flowerdrag=false;
           
        game.physics.startSystem(Phaser.Physics.ARCADE);
      
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0,0,'room_bg');
        this.levelGroup.add(this.bg);
        
       // this.hair1_body = game.add.sprite(248.05,620,"hair1_body");
        this.hair1_body = game.add.sprite(260,620,"hair1_body");
		this.hair1_body.anchor.setTo(0.5);
        
        this.design1_1 = game.add.sprite(282.4,420.7,"design1_1");
		this.design1_1.anchor.setTo(0.5);
		
        this.design1_2 = game.add.sprite(282.4,420.7,"design1_2");
		this.design1_2.anchor.setTo(0.5);		
		this.design1_2.visible=false;
        
        this.design1_3 = game.add.sprite(282.4,420.7,"design1_3");//h3
		this.design1_3.anchor.setTo(0.5);		
		this.design1_3.visible=false;
        
        this.design1_4 = game.add.sprite(282.4,420.7,"design1_4");//h4
		this.design1_4.anchor.setTo(0.5);		
		this.design1_4.visible=false;
        
        this.design1_5 = game.add.sprite(282.4,420.7,"design1_5");//h5
		this.design1_5.anchor.setTo(0.5);		
		this.design1_5.visible=false;
        
        this.design1_6 = game.add.sprite(282.4,420.7,"design1_6");//h5
		this.design1_6.anchor.setTo(0.5);		
		this.design1_6.visible=false;
        
        this.design1_7 = game.add.sprite(282.4,420.7,"design1_7");//h6
		this.design1_7.anchor.setTo(0.5);		
		this.design1_7.visible=false;
       
        this.design1_8 = game.add.sprite(282.4,420.7,"design1_8");//h7
		this.design1_8.anchor.setTo(0.5);		
		this.design1_8.visible=false; 
        
        this.design1_9 = game.add.sprite(282.4,420.7,"design1_9");//h8
		this.design1_9.anchor.setTo(0.5);		
		this.design1_9.visible=false; 
        
        this.design1_10 = game.add.sprite(282.4,420.7,"design1_10");//h9
		this.design1_10.anchor.setTo(0.5);		
		this.design1_10.visible=false; 
        
        this.design1_11 = game.add.sprite(282.4,420.7,"design1_11");//h10
		this.design1_11.anchor.setTo(0.5);		
		this.design1_11.visible=false; 
        
        this.design1_12 = game.add.sprite(282.4,420.7,"design1_12");//h11
		this.design1_12.anchor.setTo(0.5);		
		this.design1_12.visible=false; 
        
        this.design1_13 = game.add.sprite(282.4,420.7,"design1_13");//h12
		this.design1_13.anchor.setTo(0.5);		
		this.design1_13.visible=false; 
        
        this.design1_14 = game.add.sprite(282.4,420.7,"design1_14");//h14
		this.design1_14.anchor.setTo(0.5);		
		this.design1_14.visible=false; 
        
        this.design1_15 = game.add.sprite(282.4,420.7,"design1_15");//h15
		this.design1_15.anchor.setTo(0.5);		
	    this.design1_15.visible=false; 
        
        this.design1_16 = game.add.sprite(282.4,420.7,"design1_16");//h16
		this.design1_16.anchor.setTo(0.5);		
		this.design1_16.visible=false; 
        
        this.design1_17 = game.add.sprite(282.4,420.7,"design1_17");//h17
		this.design1_17.anchor.setTo(0.5);		
		this.design1_17.visible=false; 
        
        this.design1_18 = game.add.sprite(282.4,420.7,"design1_18");//h18
		this.design1_18.anchor.setTo(0.5);		
		this.design1_18.visible=false; 
        
        this.design1_19 = game.add.sprite(282.4,420.7,"design1_19");//h19
		this.design1_19.anchor.setTo(0.5);		
		this.design1_19.visible=false; 
        
        this.design1_20 = game.add.sprite(282.4,420.7,"design1_20");//h20
		this.design1_20.anchor.setTo(0.5);		
		this.design1_20.visible=false; 
        
        this.design1_21 = game.add.sprite(282.4,420.7,"design1_21");//h21
		this.design1_21.anchor.setTo(0.5);		
		this.design1_21.visible=false; 
        
        this.design1_22 = game.add.sprite(282.4,420.7,"design1_22");//h22
		this.design1_22.anchor.setTo(0.5);		
		this.design1_22.visible=false; 
        
        this.design1_23 = game.add.sprite(282.4,420.7,"design1_23");//h23
		this.design1_23.anchor.setTo(0.5);		
		this.design1_23.visible=false; 
        
        this.design1_25 = game.add.sprite(282.4,420.7,"design1_25");//h25
		this.design1_25.anchor.setTo(0.5);		
		this.design1_25.visible=false; 
        
        this.design1_26 = game.add.sprite(282.4,420.7,"design1_26");//h26
		this.design1_26.anchor.setTo(0.5);		
		this.design1_26.visible=false; 
          
        this.design1_27 = game.add.sprite(282.4,420.7,"design1_27");//h27
		this.design1_27.anchor.setTo(0.5);		
		this.design1_27.visible=false;
        
        this.design1_28 = game.add.sprite(282.4,420.7,"design1_28");//h28
		this.design1_28.anchor.setTo(0.5);		
		this.design1_28.visible=false; 
          
        this.design1_29 = game.add.sprite(282.4,420.7,"design1_29");//h29
		this.design1_29.anchor.setTo(0.5);		
		this.design1_29.visible=false; 
        
        this.design1_30 = game.add.sprite(282.4,420.7,"design1_30");//h30
		this.design1_30.anchor.setTo(0.5);		
		this.design1_30.visible=false; 
        
        this.design1_31 = game.add.sprite(282.4,420.7,"design1_31");//h31
		this.design1_31.anchor.setTo(0.5);		
		this.design1_31.visible=false; 
        
        this.design1_32 = game.add.sprite(282.4,420.7,"design1_32");//h32
		this.design1_32.anchor.setTo(0.5);		
		this.design1_32.visible=false; 
        
        this.design1_33 = game.add.sprite(282.4,420.7,"design1_33");//h33
		this.design1_33.anchor.setTo(0.5);		
		this.design1_33.visible=false; 
        
        this.design1_34 = game.add.sprite(282.4,420.7,"design1_34");//h34
		this.design1_34.anchor.setTo(0.5);		
		this.design1_34.visible=false; 
        
        this.design1_35 = game.add.sprite(282.4,420.7,"design1_35");//h35
		this.design1_35.anchor.setTo(0.5);		
		this.design1_35.visible=false; 
        
        this.design1_36 = game.add.sprite(282.4,420.7,"design1_36");//h36
		this.design1_36.anchor.setTo(0.5);		
		this.design1_36.visible=false; 
        
        this.design1_37 = game.add.sprite(282.4,420.7,"design1_37");//h37
		this.design1_37.anchor.setTo(0.5);		
		this.design1_37.visible=false; 
        
          this.hair1 = game.add.sprite(275,422,"hair1");
		  this.hair1.anchor.setTo(0.5); 
		   this.hair1.visible=false;
        
  //eh11111111111
        
        this.extra_hair1 = game.add.sprite(150,500,"extra_hair1");
		this.extra_hair1.anchor.setTo(0.5); 
        
        this.extra_hair2 = game.add.sprite(250,500,"extra_hair2");
		this.extra_hair2.anchor.setTo(0.5); 
        
        this.extra_hair3 = game.add.sprite(350,500,"extra_hair3");
		this.extra_hair3.anchor.setTo(0.5); 
        
        this.comb_line1 = game.add.sprite(150,420,'comb_line');
        this.comb_line1.anchor.setTo(0.5);
        this.comb_line1.scale.setTo(0.7);
        this.comb_line1.animations.add("comb_line1");
        this.comb_line1.animations.play("comb_line1",30,true,true);
        this.comb_line1.visible=false;
        
         this.comb_line2 = game.add.sprite(250,400,'comb_line');
         this.comb_line2.anchor.setTo(0.5);
         this.comb_line2.scale.setTo(0.7);
         this.comb_line2.animations.add("comb_line2");
         this.comb_line2.animations.play("comb_line2",30,true,true);
         this.comb_line2.visible=false;
        
        this.comb_line3 = game.add.sprite(350,400,'comb_line');
        this.comb_line3.anchor.setTo(0.5);
        this.comb_line3.scale.setTo(0.7);
        this.comb_line3.animations.add("comb_line3");
        this.comb_line3.animations.play("comb_line3",30,true,true);
       this.comb_line3.visible=false;
      
  this.designGroup=game.add.group();
     
        this.design_panel = game.add.sprite(252,755,"design_panel");
		this.design_panel.anchor.setTo(0.5);
      
         this.design_icon1 = game.add.sprite(76.05,670, 'design_icon1');
         this.design_icon1.anchor.setTo(0.5);
         this.design_icon1.inputEnabled = true;        
         this.design_icon1.input.useHandCursor = true;        
         this.design_icon1.events.onInputUp.add(this.icon1Fun1, this);
         this.design_icon1.events.onInputOut.add(btnOut,this);
		 this.design_icon1.events.onInputOver.add(btnOver,this);
         
         this.design_icon11 = game.add.sprite(76.05,663.5, 'design_icon1');
         this.design_icon11.anchor.setTo(0.5);
         this.design_icon11.scale.setTo(0);
        
        this.design_icon2 = game.add.sprite(455,667,"design_icon2");
		this.design_icon2.anchor.setTo(0.5);
      
         this.design_icon3 = game.add.sprite(274.05,674.15,"design_icon3");
		 this.design_icon3.anchor.setTo(0.5);
         this.design_icon3.inputEnabled = false;        
         this.design_icon3.events.onInputUp.add(this.icon3Fun1, this);
         this.design_icon3.events.onInputOut.add(btnOut,this);
		 this.design_icon3.events.onInputOver.add(btnOver,this);
       
         this.design_icon33 = game.add.sprite(274.05,674.15,"design_icon3");
		 this.design_icon33.anchor.setTo(0.5);
		 this.design_icon33.visible=false;
       
         this.design_icon4 = game.add.sprite(357,670,"design_icon4");
	     this.design_icon4.anchor.setTo(0.5);
         this.design_icon4.inputEnabled = false;          
         this.design_icon4.events.onInputUp.add(this.icon4Fun1, this);
         this.design_icon4.events.onInputOut.add(btnOut,this);
		 this.design_icon4.events.onInputOver.add(btnOver,this);
       
         this.design_icon44 = game.add.sprite(352,670,"design_icon4");
	     this.design_icon44.anchor.setTo(0.5);
	     this.design_icon44.visible=false;
         this.design_icon44.inputEnabled = false;          
         this.design_icon44.events.onInputUp.add(this.icon4Fun2, this);
         this.design_icon44.events.onInputOut.add(btnOut,this);
		 this.design_icon44.events.onInputOver.add(btnOver,this);
       
         this.design_icon444 = game.add.sprite(352,670,"design_icon4");
	     this.design_icon444.anchor.setTo(0.5);
	     this.design_icon444.visible=false;
       
         this.hair1_flowericon1 = game.add.sprite(200,672.8,"hair1_flowericon");
		 this.hair1_flowericon1.anchor.setTo(0.5);
         this.hair1_flowericon1.inputEnabled = false;          
         this.hair1_flowericon1.events.onInputUp.add(this.flowerFun1, this);
         this.hair1_flowericon1.events.onInputOut.add(btnOut,this);
		 this.hair1_flowericon1.events.onInputOver.add(btnOver,this);
       
       
     //comb1 
        this.hitGroup = game.add.group();
      for(var i=0; i<=Main.hair1VarX.length-1; i++)
      {
      this["hitCircle1_"+i] = game.add.graphics(Main.hair1VarX[i],Main.hair1VarY[i]);
      this["hitCircle1_"+i].beginFill(0x0000FF,0);
      this["hitCircle1_"+i].drawCircle(0,0,25);
      this["hitCircle1_"+i].id = i;
      this.hitGroup.add(this["hitCircle1_"+i]);
      game.physics.arcade.enable([this["hitCircle1_"+i]]);
      this["hitCircle1_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle = game.add.graphics(0,0);
      this.dragCircle.beginFill(0xFF0000, 0);
      this.dragCircle.drawCircle(0,0,60);
      this.dragCircle.endFill(); 
      
        game.physics.arcade.enable([this.dragCircle]);      
      this.dragCircle.body.collideWorldBounds = true;      
      this.dragCircle.body.onCollide = new Phaser.Signal();
      this.dragCircle.body.onCollide.add(this.hitSprite, this);
  // comb1  
  // comb2  
     this.hitGroup2 = game.add.group();
      for(var i=0; i<=Main.hair1VarX2.length-1; i++)
      {
      this["hitCircle2_"+i] = game.add.graphics(Main.hair1VarX2[i],Main.hair1VarY2[i]);
      this["hitCircle2_"+i].beginFill(0x0000FF,0);
      this["hitCircle2_"+i].drawCircle(0,0,25);
      this["hitCircle2_"+i].id = i;
      this.hitGroup2.add(this["hitCircle2_"+i]);
      game.physics.arcade.enable([this["hitCircle2_"+i]]);
      this["hitCircle2_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle2 = game.add.graphics(0,0);
      this.dragCircle2.beginFill(0xFF0000, 0);
      this.dragCircle2.drawCircle(0,0,60);
      this.dragCircle2.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle2]);      
      this.dragCircle2.body.collideWorldBounds = true;      
      this.dragCircle2.body.onCollide = new Phaser.Signal();
      this.dragCircle2.body.onCollide.add(this.hitSprite2, this);
    //comb2
     // comb3
     this.hitGroup3 = game.add.group();
      for(var i=0; i<=Main.hair1VarX3.length-1; i++)
      {
      this["hitCircle3_"+i] = game.add.graphics(Main.hair1VarX3[i],Main.hair1VarY3[i]);
      this["hitCircle3_"+i].beginFill(0x0000FF,0);
      this["hitCircle3_"+i].drawCircle(0,0,25);
      this["hitCircle3_"+i].id = i;
      this.hitGroup3.add(this["hitCircle3_"+i]);
      game.physics.arcade.enable([this["hitCircle3_"+i]]);
      this["hitCircle3_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle3 = game.add.graphics(0,0);
      this.dragCircle3.beginFill(0xFF0000, 0);
      this.dragCircle3.drawCircle(0,0,60);
      this.dragCircle3.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle3]);      
      this.dragCircle3.body.collideWorldBounds = true;      
      this.dragCircle3.body.onCollide = new Phaser.Signal();
      this.dragCircle3.body.onCollide.add(this.hitSprite3, this);
    //comb3
    // clip1
     this.hitGroup4 = game.add.group();
      for(var i=0; i<=Main.hair1VarX4.length-1; i++)
      {
      this["hitCircle4_"+i] = game.add.graphics(Main.hair1VarX4[i],Main.hair1VarY4[i]);
      this["hitCircle4_"+i].beginFill(0x0000FF,0);
      this["hitCircle4_"+i].drawCircle(0,0,100);
      this["hitCircle4_"+i].id = i;
      this.hitGroup4.add(this["hitCircle4_"+i]);
      game.physics.arcade.enable([this["hitCircle4_"+i]]);
      this["hitCircle4_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle4 = game.add.graphics(0,0);
      this.dragCircle4.beginFill(0xFF0000, 0);
      this.dragCircle4.drawCircle(0,0,60);
      this.dragCircle4.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle4]);      
      this.dragCircle4.body.collideWorldBounds = true;      
      this.dragCircle4.body.onCollide = new Phaser.Signal();
      this.dragCircle4.body.onCollide.add(this.hitSprite4, this);
    //clip1
      // clip2
     this.hitGroup5 = game.add.group();
      for(var i=0; i<=Main.hair1VarX5.length-1; i++)
      {
      this["hitCircle5_"+i] = game.add.graphics(Main.hair1VarX5[i],Main.hair1VarY5[i]);
      this["hitCircle5_"+i].beginFill(0x0000FF,0);
      this["hitCircle5_"+i].drawCircle(0,0,100);
      this["hitCircle5_"+i].id = i;
      this.hitGroup5.add(this["hitCircle5_"+i]);
      game.physics.arcade.enable([this["hitCircle5_"+i]]);
      this["hitCircle5_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle5 = game.add.graphics(0,0);
      this.dragCircle5.beginFill(0xFF0000, 0);
      this.dragCircle5.drawCircle(0,0,60);
      this.dragCircle5.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle5]);      
      this.dragCircle5.body.collideWorldBounds = true;      
      this.dragCircle5.body.onCollide = new Phaser.Signal();
      this.dragCircle5.body.onCollide.add(this.hitSprite5, this);
    //clip2
     // hair3
     this.hitGroup6 = game.add.group();
      for(var i=0; i<=Main.hair1VarX6.length-1; i++)
      {
      this["hitCircle6_"+i] = game.add.graphics(Main.hair1VarX6[i],Main.hair1VarY6[i]);
      this["hitCircle6_"+i].beginFill(0x0000FF,0);
      this["hitCircle6_"+i].drawCircle(0,0,30);
      this["hitCircle6_"+i].id = i;
      this.hitGroup6.add(this["hitCircle6_"+i]);
      game.physics.arcade.enable([this["hitCircle6_"+i]]);
      this["hitCircle6_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle6 = game.add.graphics(0,0);
      this.dragCircle6.beginFill(0xFF0000, 0);
      this.dragCircle6.drawCircle(0,0,25);
      this.dragCircle6.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle6]);      
      this.dragCircle6.body.collideWorldBounds = true;      
      this.dragCircle6.body.onCollide = new Phaser.Signal();
      this.dragCircle6.body.onCollide.add(this.hitSprite6, this);
    //hair3    
    // hair4
     this.hitGroup7 = game.add.group();
      for(var i=0; i<=Main.hair1VarX7.length-1; i++)
      {
      this["hitCircle7_"+i] = game.add.graphics(Main.hair1VarX7[i],Main.hair1VarY7[i]);
      this["hitCircle7_"+i].beginFill(0x0000FF,0);
      this["hitCircle7_"+i].drawCircle(0,0,18);
      this["hitCircle7_"+i].id = i;
      this.hitGroup7.add(this["hitCircle7_"+i]);
      game.physics.arcade.enable([this["hitCircle7_"+i]]);
      this["hitCircle7_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle7 = game.add.graphics(0,0);
      this.dragCircle7.beginFill(0xFF0000, 0);
      this.dragCircle7.drawCircle(0,0,10);
      this.dragCircle7.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle7]);      
      this.dragCircle7.body.collideWorldBounds = true;      
      this.dragCircle7.body.onCollide = new Phaser.Signal();
      this.dragCircle7.body.onCollide.add(this.hitSprite7, this);
    //hair4
    // hair5
     this.hitGroup8 = game.add.group();
      for(var i=0; i<=Main.hair1VarX8.length-1; i++)
      {
      this["hitCircle8_"+i] = game.add.graphics(Main.hair1VarX8[i],Main.hair1VarY8[i]);
      this["hitCircle8_"+i].beginFill(0x0000FF,0);
      this["hitCircle8_"+i].drawCircle(0,0,18);
      this["hitCircle8_"+i].id = i;
      this.hitGroup8.add(this["hitCircle8_"+i]);
      game.physics.arcade.enable([this["hitCircle8_"+i]]);
      this["hitCircle8_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle8 = game.add.graphics(0,0);
      this.dragCircle8.beginFill(0xFF0000, 0);
      this.dragCircle8.drawCircle(0,0,10);
      this.dragCircle8.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle8]);      
      this.dragCircle8.body.collideWorldBounds = true;      
      this.dragCircle8.body.onCollide = new Phaser.Signal();
      this.dragCircle8.body.onCollide.add(this.hitSprite8, this);
    //hair5
     // hair6
     this.hitGroup9 = game.add.group();
      for(var i=0; i<=Main.hair1VarX9.length-1; i++)
      {
      this["hitCircle9_"+i] = game.add.graphics(Main.hair1VarX9[i],Main.hair1VarY9[i]);
      this["hitCircle9_"+i].beginFill(0x0000FF,0);
      this["hitCircle9_"+i].drawCircle(0,0,18);
      this["hitCircle9_"+i].id = i;
      this.hitGroup9.add(this["hitCircle9_"+i]);
      game.physics.arcade.enable([this["hitCircle9_"+i]]);
      this["hitCircle9_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle9 = game.add.graphics(0,0);
      this.dragCircle9.beginFill(0xFF0000, 0);
      this.dragCircle9.drawCircle(0,0,10);
      this.dragCircle9.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle9]);      
      this.dragCircle9.body.collideWorldBounds = true;      
      this.dragCircle9.body.onCollide = new Phaser.Signal();
      this.dragCircle9.body.onCollide.add(this.hitSprite9, this);
    //hair6
         //yellowband
     this.hitGroup10 = game.add.group();
      for(var i=0; i<=Main.hair1VarX10.length-1; i++)
      {
      this["hitCircle10_"+i] = game.add.graphics(Main.hair1VarX10[i],Main.hair1VarY10[i]);
      this["hitCircle10_"+i].beginFill(0x0000FF,0);
      this["hitCircle10_"+i].drawCircle(0,0,40);
      this["hitCircle10_"+i].id = i;
      this.hitGroup10.add(this["hitCircle10_"+i]);
      game.physics.arcade.enable([this["hitCircle10_"+i]]);
      this["hitCircle10_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle10 = game.add.graphics(0,0);
      this.dragCircle10.beginFill(0xFF0000, 0);
      this.dragCircle10.drawCircle(0,0,10);
      this.dragCircle10.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle10]);      
      this.dragCircle10.body.collideWorldBounds = true;      
      this.dragCircle10.body.onCollide = new Phaser.Signal();
      this.dragCircle10.body.onCollide.add(this.hitSprite10, this);
    //yellowband
       //hair9
     this.hitGroup11 = game.add.group();
      for(var i=0; i<=Main.hair1VarX11.length-1; i++)
      {
      this["hitCircle11_"+i] = game.add.graphics(Main.hair1VarX11[i],Main.hair1VarY11[i]);
      this["hitCircle11_"+i].beginFill(0x0000FF,0);
      this["hitCircle11_"+i].drawCircle(0,0,18);
      this["hitCircle11_"+i].id = i;
      this.hitGroup11.add(this["hitCircle11_"+i]);
      game.physics.arcade.enable([this["hitCircle11_"+i]]);
      this["hitCircle11_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle11 = game.add.graphics(0,0);
      this.dragCircle11.beginFill(0xFF0000, 0);
      this.dragCircle11.drawCircle(0,0,10);
      this.dragCircle11.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle11]);      
      this.dragCircle11.body.collideWorldBounds = true;      
      this.dragCircle11.body.onCollide = new Phaser.Signal();
      this.dragCircle11.body.onCollide.add(this.hitSprite11, this);
    //hair9
     //hair10
     this.hitGroup12 = game.add.group();
      for(var i=0; i<=Main.hair1VarX12.length-1; i++)
      {
      this["hitCircle12_"+i] = game.add.graphics(Main.hair1VarX12[i],Main.hair1VarY12[i]);
      this["hitCircle12_"+i].beginFill(0x0000FF,0);
      this["hitCircle12_"+i].drawCircle(0,0,18);
      this["hitCircle12_"+i].id = i;
      this.hitGroup12.add(this["hitCircle12_"+i]);
      game.physics.arcade.enable([this["hitCircle12_"+i]]);
      this["hitCircle12_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle12 = game.add.graphics(0,0);
      this.dragCircle12.beginFill(0xFF0000, 0);
      this.dragCircle12.drawCircle(0,0,10);
      this.dragCircle12.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle12]);      
      this.dragCircle12.body.collideWorldBounds = true;      
      this.dragCircle12.body.onCollide = new Phaser.Signal();
      this.dragCircle12.body.onCollide.add(this.hitSprite12, this);
    //hair10    
 //hair11
     this.hitGroup13 = game.add.group();
      for(var i=0; i<=Main.hair1VarX13.length-1; i++)
      {
      this["hitCircle13_"+i] = game.add.graphics(Main.hair1VarX13[i],Main.hair1VarY13[i]);
      this["hitCircle13_"+i].beginFill(0x0000FF,0);
      this["hitCircle13_"+i].drawCircle(0,0,18);
      this["hitCircle13_"+i].id = i;
      this.hitGroup13.add(this["hitCircle13_"+i]);
      game.physics.arcade.enable([this["hitCircle13_"+i]]);
      this["hitCircle13_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle13 = game.add.graphics(0,0);
      this.dragCircle13.beginFill(0xFF0000, 0);
      this.dragCircle13.drawCircle(0,0,10);
      this.dragCircle13.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle13]);      
      this.dragCircle13.body.collideWorldBounds = true;      
      this.dragCircle13.body.onCollide = new Phaser.Signal();
      this.dragCircle13.body.onCollide.add(this.hitSprite13, this);
    //hair11    
     //hair12
     this.hitGroup14 = game.add.group();
      for(var i=0; i<=Main.hair1VarX14.length-1; i++)
      {
      this["hitCircle14_"+i] = game.add.graphics(Main.hair1VarX14[i],Main.hair1VarY14[i]);
      this["hitCircle14_"+i].beginFill(0x0000FF,0);
      this["hitCircle14_"+i].drawCircle(0,0,18);
      this["hitCircle14_"+i].id = i;
      this.hitGroup14.add(this["hitCircle14_"+i]);
      game.physics.arcade.enable([this["hitCircle14_"+i]]);
      this["hitCircle14_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle14 = game.add.graphics(0,0);
      this.dragCircle14.beginFill(0xFF0000, 0);
      this.dragCircle14.drawCircle(0,0,10);
      this.dragCircle14.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle14]);      
      this.dragCircle14.body.collideWorldBounds = true;      
      this.dragCircle14.body.onCollide = new Phaser.Signal();
      this.dragCircle14.body.onCollide.add(this.hitSprite14, this);
    //hair12   
     //hair14
     this.hitGroup15 = game.add.group();
      for(var i=0; i<=Main.hair1VarX15.length-1; i++)
      {
      this["hitCircle15_"+i] = game.add.graphics(Main.hair1VarX15[i],Main.hair1VarY15[i]);
      this["hitCircle15_"+i].beginFill(0x0000FF,0);
      this["hitCircle15_"+i].drawCircle(0,0,18);
      this["hitCircle15_"+i].id = i;
      this.hitGroup15.add(this["hitCircle15_"+i]);
      game.physics.arcade.enable([this["hitCircle15_"+i]]);
      this["hitCircle15_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle15 = game.add.graphics(0,0);
      this.dragCircle15.beginFill(0xFF0000, 0);
      this.dragCircle15.drawCircle(0,0,10);
      this.dragCircle15.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle15]);      
      this.dragCircle15.body.collideWorldBounds = true;      
      this.dragCircle15.body.onCollide = new Phaser.Signal();
      this.dragCircle15.body.onCollide.add(this.hitSprite15, this);
    //hair14  
      //hair15
     this.hitGroup16 = game.add.group();
      for(var i=0; i<=Main.hair1VarX16.length-1; i++)
      {
      this["hitCircle16_"+i] = game.add.graphics(Main.hair1VarX16[i],Main.hair1VarY16[i]);
      this["hitCircle16_"+i].beginFill(0x0000FF,0);
      this["hitCircle16_"+i].drawCircle(0,0,18);
      this["hitCircle16_"+i].id = i;
      this.hitGroup16.add(this["hitCircle16_"+i]);
      game.physics.arcade.enable([this["hitCircle16_"+i]]);
      this["hitCircle16_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle16 = game.add.graphics(0,0);
      this.dragCircle16.beginFill(0xFF0000, 0);
      this.dragCircle16.drawCircle(0,0,10);
      this.dragCircle16.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle16]);      
      this.dragCircle16.body.collideWorldBounds = true;      
      this.dragCircle16.body.onCollide = new Phaser.Signal();
      this.dragCircle16.body.onCollide.add(this.hitSprite16, this);
    //hair15  
     //hair16
     this.hitGroup17 = game.add.group();
      for(var i=0; i<=Main.hair1VarX17.length-1; i++)
      {
      this["hitCircle17_"+i] = game.add.graphics(Main.hair1VarX17[i],Main.hair1VarY17[i]);
      this["hitCircle17_"+i].beginFill(0x0000FF,0);
      this["hitCircle17_"+i].drawCircle(0,0,18);
      this["hitCircle17_"+i].id = i;
      this.hitGroup17.add(this["hitCircle17_"+i]);
      game.physics.arcade.enable([this["hitCircle17_"+i]]);
      this["hitCircle17_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle17 = game.add.graphics(0,0);
      this.dragCircle17.beginFill(0xFF0000, 0);
      this.dragCircle17.drawCircle(0,0,10);
      this.dragCircle17.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle17]);      
      this.dragCircle17.body.collideWorldBounds = true;      
      this.dragCircle17.body.onCollide = new Phaser.Signal();
      this.dragCircle17.body.onCollide.add(this.hitSprite17, this);
    //hair16  
    //hair17
     this.hitGroup18 = game.add.group();
      for(var i=0; i<=Main.hair1VarX18.length-1; i++)
      {
      this["hitCircle18_"+i] = game.add.graphics(Main.hair1VarX18[i],Main.hair1VarY18[i]);
      this["hitCircle18_"+i].beginFill(0x0000FF,0);
      this["hitCircle18_"+i].drawCircle(0,0,18);
      this["hitCircle18_"+i].id = i;
      this.hitGroup18.add(this["hitCircle18_"+i]);
      game.physics.arcade.enable([this["hitCircle18_"+i]]);
      this["hitCircle18_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle18 = game.add.graphics(0,0);
      this.dragCircle18.beginFill(0xFF0000, 0);
      this.dragCircle18.drawCircle(0,0,10);
      this.dragCircle18.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle18]);      
      this.dragCircle18.body.collideWorldBounds = true;      
      this.dragCircle18.body.onCollide = new Phaser.Signal();
      this.dragCircle18.body.onCollide.add(this.hitSprite18, this);
    //hair17
     //hair18
     this.hitGroup19 = game.add.group();
      for(var i=0; i<=Main.hair1VarX19.length-1; i++)
      {
      this["hitCircle19_"+i] = game.add.graphics(Main.hair1VarX19[i],Main.hair1VarY19[i]);
      this["hitCircle19_"+i].beginFill(0x0000FF,0);
      this["hitCircle19_"+i].drawCircle(0,0,19);
      this["hitCircle19_"+i].id = i;
      this.hitGroup19.add(this["hitCircle19_"+i]);
      game.physics.arcade.enable([this["hitCircle19_"+i]]);
      this["hitCircle19_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle19 = game.add.graphics(0,0);
      this.dragCircle19.beginFill(0xFF0000, 0);
      this.dragCircle19.drawCircle(0,0,10);
      this.dragCircle19.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle19]);      
      this.dragCircle19.body.collideWorldBounds = true;      
      this.dragCircle19.body.onCollide = new Phaser.Signal();
      this.dragCircle19.body.onCollide.add(this.hitSprite19, this);
    //hair18
     //hair19
     this.hitGroup20 = game.add.group();
      for(var i=0; i<=Main.hair1VarX20.length-1; i++)
      {
      this["hitCircle20_"+i] = game.add.graphics(Main.hair1VarX20[i],Main.hair1VarY20[i]);
      this["hitCircle20_"+i].beginFill(0x0000FF,0);
      this["hitCircle20_"+i].drawCircle(0,0,20);
      this["hitCircle20_"+i].id = i;
      this.hitGroup20.add(this["hitCircle20_"+i]);
      game.physics.arcade.enable([this["hitCircle20_"+i]]);
      this["hitCircle20_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle20 = game.add.graphics(0,0);
      this.dragCircle20.beginFill(0xFF0000, 0);
      this.dragCircle20.drawCircle(0,0,10);
      this.dragCircle20.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle20]);      
      this.dragCircle20.body.collideWorldBounds = true;      
      this.dragCircle20.body.onCollide = new Phaser.Signal();
      this.dragCircle20.body.onCollide.add(this.hitSprite20, this);
    //hair19
     //hair20
     this.hitGroup21 = game.add.group();
      for(var i=0; i<=Main.hair1VarX21.length-1; i++)
      {
      this["hitCircle21_"+i] = game.add.graphics(Main.hair1VarX21[i],Main.hair1VarY21[i]);
      this["hitCircle21_"+i].beginFill(0x0000FF,0);
      this["hitCircle21_"+i].drawCircle(0,0,21);
      this["hitCircle21_"+i].id = i;
      this.hitGroup21.add(this["hitCircle21_"+i]);
      game.physics.arcade.enable([this["hitCircle21_"+i]]);
      this["hitCircle21_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle21 = game.add.graphics(0,0);
      this.dragCircle21.beginFill(0xFF0000, 0);
      this.dragCircle21.drawCircle(0,0,10);
      this.dragCircle21.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle21]);      
      this.dragCircle21.body.collideWorldBounds = true;      
      this.dragCircle21.body.onCollide = new Phaser.Signal();
      this.dragCircle21.body.onCollide.add(this.hitSprite21, this);
    //hair20
     //hair22
     this.hitGroup22 = game.add.group();
      for(var i=0; i<=Main.hair1VarX22.length-1; i++)
      {
      this["hitCircle22_"+i] = game.add.graphics(Main.hair1VarX22[i],Main.hair1VarY22[i]);
      this["hitCircle22_"+i].beginFill(0x0000FF,0);
      this["hitCircle22_"+i].drawCircle(0,0,22);
      this["hitCircle22_"+i].id = i;
      this.hitGroup22.add(this["hitCircle22_"+i]);
      game.physics.arcade.enable([this["hitCircle22_"+i]]);
      this["hitCircle22_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle22 = game.add.graphics(0,0);
      this.dragCircle22.beginFill(0xFF0000, 0);
      this.dragCircle22.drawCircle(0,0,10);
      this.dragCircle22.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle22]);      
      this.dragCircle22.body.collideWorldBounds = true;      
      this.dragCircle22.body.onCollide = new Phaser.Signal();
      this.dragCircle22.body.onCollide.add(this.hitSprite22, this);
    //hair22
     //hair23
     this.hitGroup23 = game.add.group();
      for(var i=0; i<=Main.hair1VarX23.length-1; i++)
      {
      this["hitCircle23_"+i] = game.add.graphics(Main.hair1VarX23[i],Main.hair1VarY23[i]);
      this["hitCircle23_"+i].beginFill(0x0000FF,0);
      this["hitCircle23_"+i].drawCircle(0,0,23);
      this["hitCircle23_"+i].id = i;
      this.hitGroup23.add(this["hitCircle23_"+i]);
      game.physics.arcade.enable([this["hitCircle23_"+i]]);
      this["hitCircle23_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle23 = game.add.graphics(0,0);
      this.dragCircle23.beginFill(0xFF0000, 0);
      this.dragCircle23.drawCircle(0,0,10);
      this.dragCircle23.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle23]);      
      this.dragCircle23.body.collideWorldBounds = true;      
      this.dragCircle23.body.onCollide = new Phaser.Signal();
      this.dragCircle23.body.onCollide.add(this.hitSprite23, this);
    //hair23
     //hair25
     this.hitGroup24 = game.add.group();
      for(var i=0; i<=Main.hair1VarX24.length-1; i++)
      {
      this["hitCircle24_"+i] = game.add.graphics(Main.hair1VarX24[i],Main.hair1VarY24[i]);
      this["hitCircle24_"+i].beginFill(0x0000FF,0);
      this["hitCircle24_"+i].drawCircle(0,0,24);
      this["hitCircle24_"+i].id = i;
      this.hitGroup24.add(this["hitCircle24_"+i]);
      game.physics.arcade.enable([this["hitCircle24_"+i]]);
      this["hitCircle24_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle24 = game.add.graphics(0,0);
      this.dragCircle24.beginFill(0xFF0000, 0);
      this.dragCircle24.drawCircle(0,0,10);
      this.dragCircle24.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle24]);      
      this.dragCircle24.body.collideWorldBounds = true;      
      this.dragCircle24.body.onCollide = new Phaser.Signal();
      this.dragCircle24.body.onCollide.add(this.hitSprite24, this);
    //hair25
     //hair26
     this.hitGroup25 = game.add.group();
      for(var i=0; i<=Main.hair1VarX25.length-1; i++)
      {
      this["hitCircle25_"+i] = game.add.graphics(Main.hair1VarX25[i],Main.hair1VarY25[i]);
      this["hitCircle25_"+i].beginFill(0x0000FF,0);
      this["hitCircle25_"+i].drawCircle(0,0,25);
      this["hitCircle25_"+i].id = i;
      this.hitGroup25.add(this["hitCircle25_"+i]);
      game.physics.arcade.enable([this["hitCircle25_"+i]]);
      this["hitCircle25_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle25 = game.add.graphics(0,0);
      this.dragCircle25.beginFill(0xFF0000, 0);
      this.dragCircle25.drawCircle(0,0,10);
      this.dragCircle25.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle25]);      
      this.dragCircle25.body.collideWorldBounds = true;      
      this.dragCircle25.body.onCollide = new Phaser.Signal();
      this.dragCircle25.body.onCollide.add(this.hitSprite25, this);
    //hair26
    //hair27
     this.hitGroup26 = game.add.group();
      for(var i=0; i<=Main.hair1VarX26.length-1; i++)
      {
      this["hitCircle26_"+i] = game.add.graphics(Main.hair1VarX26[i],Main.hair1VarY26[i]);
      this["hitCircle26_"+i].beginFill(0x0000FF,0);
      this["hitCircle26_"+i].drawCircle(0,0,26);
      this["hitCircle26_"+i].id = i;
      this.hitGroup26.add(this["hitCircle26_"+i]);
      game.physics.arcade.enable([this["hitCircle26_"+i]]);
      this["hitCircle26_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle26 = game.add.graphics(0,0);
      this.dragCircle26.beginFill(0xFF0000, 0);
      this.dragCircle26.drawCircle(0,0,10);
      this.dragCircle26.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle26]);      
      this.dragCircle26.body.collideWorldBounds = true;      
      this.dragCircle26.body.onCollide = new Phaser.Signal();
      this.dragCircle26.body.onCollide.add(this.hitSprite26, this);
    //hair27
    //hair28
     this.hitGroup27 = game.add.group();
      for(var i=0; i<=Main.hair1VarX27.length-1; i++)
      {
      this["hitCircle27_"+i] = game.add.graphics(Main.hair1VarX27[i],Main.hair1VarY27[i]);
      this["hitCircle27_"+i].beginFill(0x0000FF,0);
      this["hitCircle27_"+i].drawCircle(0,0,27);
      this["hitCircle27_"+i].id = i;
      this.hitGroup27.add(this["hitCircle27_"+i]);
      game.physics.arcade.enable([this["hitCircle27_"+i]]);
      this["hitCircle27_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle27 = game.add.graphics(0,0);
      this.dragCircle27.beginFill(0xFF0000, 0);
      this.dragCircle27.drawCircle(0,0,10);
      this.dragCircle27.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle27]);      
      this.dragCircle27.body.collideWorldBounds = true;      
      this.dragCircle27.body.onCollide = new Phaser.Signal();
      this.dragCircle27.body.onCollide.add(this.hitSprite27, this);
    //hair28
    //hair30
     this.hitGroup28 = game.add.group();
      for(var i=0; i<=Main.hair1VarX28.length-1; i++)
      {
      this["hitCircle28_"+i] = game.add.graphics(Main.hair1VarX28[i],Main.hair1VarY28[i]);
      this["hitCircle28_"+i].beginFill(0x0000FF,0);
      this["hitCircle28_"+i].drawCircle(0,0,22);
      this["hitCircle28_"+i].id = i;
      this.hitGroup28.add(this["hitCircle28_"+i]);
      game.physics.arcade.enable([this["hitCircle28_"+i]]);
      this["hitCircle28_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle28 = game.add.graphics(0,0);
      this.dragCircle28.beginFill(0xFF0000, 0);
      this.dragCircle28.drawCircle(0,0,10);
      this.dragCircle28.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle28]);      
      this.dragCircle28.body.collideWorldBounds = true;      
      this.dragCircle28.body.onCollide = new Phaser.Signal();
      this.dragCircle28.body.onCollide.add(this.hitSprite28, this);
    //hair30
    //hair31
     this.hitGroup29 = game.add.group();
      for(var i=0; i<=Main.hair1VarX29.length-1; i++)
      {
      this["hitCircle29_"+i] = game.add.graphics(Main.hair1VarX29[i],Main.hair1VarY29[i]);
      this["hitCircle29_"+i].beginFill(0x0000FF,0);
      this["hitCircle29_"+i].drawCircle(0,0,22);
      this["hitCircle29_"+i].id = i;
      this.hitGroup29.add(this["hitCircle29_"+i]);
      game.physics.arcade.enable([this["hitCircle29_"+i]]);
      this["hitCircle29_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle29 = game.add.graphics(0,0);
      this.dragCircle29.beginFill(0xFF0000, 0);
      this.dragCircle29.drawCircle(0,0,10);
      this.dragCircle29.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle29]);      
      this.dragCircle29.body.collideWorldBounds = true;      
      this.dragCircle29.body.onCollide = new Phaser.Signal();
      this.dragCircle29.body.onCollide.add(this.hitSprite29, this);
    //hair31
     //hair32
     this.hitGroup30 = game.add.group();
      for(var i=0; i<=Main.hair1VarX30.length-1; i++)
      {
      this["hitCircle30_"+i] = game.add.graphics(Main.hair1VarX30[i],Main.hair1VarY30[i]);
      this["hitCircle30_"+i].beginFill(0x0000FF,0);
      this["hitCircle30_"+i].drawCircle(0,0,22);
      this["hitCircle30_"+i].id = i;
      this.hitGroup30.add(this["hitCircle30_"+i]);
      game.physics.arcade.enable([this["hitCircle30_"+i]]);
      this["hitCircle30_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle30 = game.add.graphics(0,0);
      this.dragCircle30.beginFill(0xFF0000, 0);
      this.dragCircle30.drawCircle(0,0,10);
      this.dragCircle30.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle30]);      
      this.dragCircle30.body.collideWorldBounds = true;      
      this.dragCircle30.body.onCollide = new Phaser.Signal();
      this.dragCircle30.body.onCollide.add(this.hitSprite30, this);
    //hair32
    //hair33
     this.hitGroup31 = game.add.group();
      for(var i=0; i<=Main.hair1VarX31.length-1; i++)
      {
      this["hitCircle31_"+i] = game.add.graphics(Main.hair1VarX31[i],Main.hair1VarY31[i]);
      this["hitCircle31_"+i].beginFill(0x0000FF,0);
      this["hitCircle31_"+i].drawCircle(0,0,22);
      this["hitCircle31_"+i].id = i;
      this.hitGroup31.add(this["hitCircle31_"+i]);
      game.physics.arcade.enable([this["hitCircle31_"+i]]);
      this["hitCircle31_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle31 = game.add.graphics(0,0);
      this.dragCircle31.beginFill(0xFF0000, 0);
      this.dragCircle31.drawCircle(0,0,10);
      this.dragCircle31.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle31]);      
      this.dragCircle31.body.collideWorldBounds = true;      
      this.dragCircle31.body.onCollide = new Phaser.Signal();
      this.dragCircle31.body.onCollide.add(this.hitSprite31, this);
    //hair33
     //hair34
     this.hitGroup32 = game.add.group();
      for(var i=0; i<=Main.hair1VarX32.length-1; i++)
      {
      this["hitCircle32_"+i] = game.add.graphics(Main.hair1VarX32[i],Main.hair1VarY32[i]);
      this["hitCircle32_"+i].beginFill(0x0000FF,0);
      this["hitCircle32_"+i].drawCircle(0,0,22);
      this["hitCircle32_"+i].id = i;
      this.hitGroup32.add(this["hitCircle32_"+i]);
      game.physics.arcade.enable([this["hitCircle32_"+i]]);
      this["hitCircle32_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle32 = game.add.graphics(0,0);
      this.dragCircle32.beginFill(0xFF0000, 0);
      this.dragCircle32.drawCircle(0,0,10);
      this.dragCircle32.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle32]);      
      this.dragCircle32.body.collideWorldBounds = true;      
      this.dragCircle32.body.onCollide = new Phaser.Signal();
      this.dragCircle32.body.onCollide.add(this.hitSprite32, this);
    //hair34
     //hair35
     this.hitGroup33 = game.add.group();
      for(var i=0; i<=Main.hair1VarX33.length-1; i++)
      {
      this["hitCircle33_"+i] = game.add.graphics(Main.hair1VarX33[i],Main.hair1VarY33[i]);
      this["hitCircle33_"+i].beginFill(0x0000FF,0);
      this["hitCircle33_"+i].drawCircle(0,0,22);
      this["hitCircle33_"+i].id = i;
      this.hitGroup33.add(this["hitCircle33_"+i]);
      game.physics.arcade.enable([this["hitCircle33_"+i]]);
      this["hitCircle33_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle33 = game.add.graphics(0,0);
      this.dragCircle33.beginFill(0xFF0000, 0);
      this.dragCircle33.drawCircle(0,0,10);
      this.dragCircle33.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle33]);      
      this.dragCircle33.body.collideWorldBounds = true;      
      this.dragCircle33.body.onCollide = new Phaser.Signal();
      this.dragCircle33.body.onCollide.add(this.hitSprite33, this);
    //hair35
    //flower
     this.hitGroup34 = game.add.group();
      for(var i=0; i<=Main.hair1VarX34.length-1; i++)
      {
      this["hitCircle34_"+i] = game.add.graphics(Main.hair1VarX34[i],Main.hair1VarY34[i]);
      this["hitCircle34_"+i].beginFill(0x0000FF,0);
      this["hitCircle34_"+i].drawCircle(0,0,300);
      this["hitCircle34_"+i].id = i;
      this.hitGroup34.add(this["hitCircle34_"+i]);
      game.physics.arcade.enable([this["hitCircle34_"+i]]);
      this["hitCircle34_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle34 = game.add.graphics(0,0);
      this.dragCircle34.beginFill(0xFF0000, 0);
      this.dragCircle34.drawCircle(0,0,10);
      this.dragCircle34.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle34]);      
      this.dragCircle34.body.collideWorldBounds = true;      
      this.dragCircle34.body.onCollide = new Phaser.Signal();
      this.dragCircle34.body.onCollide.add(this.hitSprite34, this);
    //flower
    
  //hddddddddddddd  
    
        this.morebtn = game.add.sprite(50,745,"morebtn");
		this.morebtn.anchor.setTo(0.5);		
		this.morebtn.statusType = "game";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		this.donebtn = game.add.sprite(455,745,"donebtn");
		this.donebtn.anchor.setTo(0.5);				
		this.donebtn.scale.setTo(0);				
		this.donebtn.url = "hair1";
		this.donebtn.inputEnabled = true;
		this.donebtn.input.useHandCursor = true;
		this.donebtn.input.pixelPerfectClick = true;
		this.donebtn.input.pixelPerfectOver = true;
		this.donebtn.events.onInputDown.add(stateStart,this);
		this.donebtn.events.onInputOut.add(btnOut,this);
		this.donebtn.events.onInputOver.add(btnOver,this);
        
         this.arrowbtn = game.add.sprite(122,590,'arrowbtn');
         this.arrowbtn.anchor.setTo(0.5);
         this.arrowbtn.angle=320;             
         game.add.tween(this.arrowbtn).to({x:this.arrowbtn.x-5,y:this.arrowbtn.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn2 = game.add.sprite(365,590,'arrowbtn');
         this.arrowbtn2.anchor.setTo(0.5);
         this.arrowbtn2.visible=false;
         this.arrowbtn2.angle=320;             
         game.add.tween(this.arrowbtn2).to({x:this.arrowbtn2.x-5,y:this.arrowbtn2.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn3 = game.add.sprite(300,320,'arrowbtn');
         this.arrowbtn3.anchor.setTo(0.5);
         this.arrowbtn3.visible=false;
         this.arrowbtn3.angle=230;             
         game.add.tween(this.arrowbtn3).to({x:this.arrowbtn3.x-5,y:this.arrowbtn3.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn4 = game.add.sprite(355,590,'arrowbtn');
         this.arrowbtn4.anchor.setTo(0.5);
         this.arrowbtn4.visible=false;
         this.arrowbtn4.angle=320;             
         game.add.tween(this.arrowbtn4).to({x:this.arrowbtn4.x-5,y:this.arrowbtn4.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn5 = game.add.sprite(290,450,'arrowbtn');
         this.arrowbtn5.anchor.setTo(0.5);
         this.arrowbtn5.visible=false;
         this.arrowbtn5.angle=320;             
         game.add.tween(this.arrowbtn5).to({x:this.arrowbtn5.x-5,y:this.arrowbtn5.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn6 = game.add.sprite(280,600,'arrowbtn');
         this.arrowbtn6.anchor.setTo(0.5);
         this.arrowbtn6.visible=false;
         this.arrowbtn6.angle=320;             
         game.add.tween(this.arrowbtn6).to({x:this.arrowbtn6.x-5,y:this.arrowbtn6.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn7 = game.add.sprite(300,297,'arrowbtn');
         this.arrowbtn7.anchor.setTo(0.5);
         this.arrowbtn7.visible=false;
         this.arrowbtn7.angle=320;             
         game.add.tween(this.arrowbtn7).to({x:this.arrowbtn7.x-5,y:this.arrowbtn7.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn8 = game.add.sprite(210,600,'arrowbtn');
         this.arrowbtn8.anchor.setTo(0.5);
         this.arrowbtn8.visible=false;
         this.arrowbtn8.angle=320;             
         game.add.tween(this.arrowbtn8).to({x:this.arrowbtn8.x-5,y:this.arrowbtn8.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
     
      
     
     
     
     
         
     
         this.logoVar = game.add.sprite(4, 6, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true;
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(434,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            	  addShutter();

        },
 flowerFun1:function(){
   this.arrowbtn8.visible=false;
   this.flowerdrag=true;   
    this.hair1_flowericon1.inputEnabled = false;
   },       
   icon3Fun1:function(){
    this.arrowbtn6.visible=false;
    this.arrowbtn7.visible=true;
        this.yellowbanddrag1=true;
     this.design_icon3.inputEnabled = false;
      
 },            
  icon4Fun2:function(){
    this.arrowbtn5.visible=true;
     this.arrowbtn4.visible=false;
        this.banddrag2=true;
     this.design_icon44.inputEnabled = false;
      
 },       
 icon4Fun1:function(){
    this.arrowbtn3.visible=true;
     this.arrowbtn2.visible=false;
        this.banddrag1=true;
     this.design_icon4.inputEnabled = false;
      
 },
icon1Fun1:function(){
          this.combdrag=true;     
   this.arrowbtn.visible = false;
   this.design_icon1.inputEnabled = false;
   this.comb_line1.visible=true;   
         },
 //hhhhhhhhhhhh
  hitSprite34:function(sprite1, sprite2){//flower
   if (sprite2.id==this.hitCount34){      
      sprite2.kill();
      this.hitCount34++;
   }    
if (this.hitCount34 >= Main.hair1VarX34.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.arrowbtn8.visible=false;
     this.flowerdrag=false;
     this.dragCircle34=false;
     this.hair1.visible=true;     
       this.design1_37.visible=false;
       this.hair1_flowericon1.visible=false;
       
       game.add.tween(this.donebtn.scale).to({x:1,y:1},500,Phaser.Easing.Quadratic.Out,true);
     }     
},    
 hitSprite33:function(sprite1, sprite2){//hair35
   if (sprite2.id==this.hitCount33){      
      sprite2.kill();
      this.hitCount33++;
   }    
if (this.hitCount33 >= Main.hair1VarX33.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_36.visible=true;
     this.design1_35.visible=false;
     this.hair35drag=false;
     this.dragCircle33=false;
    game.time.events.add(1000,function(){
          this.design1_36.visible=false;
          this.design1_37.visible=true;
          
           this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
          
          this.hair1_flowericon1.inputEnabled = true;    
          this.hair1_flowericon1.input.useHandCursor = true;    
          this.arrowbtn8.visible=true;
      },this);    
     }     
},    
 hitSprite32:function(sprite1, sprite2){//hair34
   if (sprite2.id==this.hitCount32){      
      sprite2.kill();
      this.hitCount32++;
   }    
if (this.hitCount32 >= Main.hair1VarX32.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_35.visible=true;
     this.design1_34.visible=false;
     this.hair34drag=false;
     this.dragCircle32=false;
     this.hair35drag=true;
     }     
},    
 hitSprite31:function(sprite1, sprite2){//hair33
   if (sprite2.id==this.hitCount31){      
      sprite2.kill();
      this.hitCount31++;
   }    
if (this.hitCount31 >= Main.hair1VarX31.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_34.visible=true;
     this.design1_33.visible=false;
     this.hair33drag=false;
     this.dragCircle31=false;
     this.hair34drag=true;
     }     
},    
 hitSprite30:function(sprite1, sprite2){//hair32
   if (sprite2.id==this.hitCount30){      
      sprite2.kill();
      this.hitCount30++;
   }    
if (this.hitCount30 >= Main.hair1VarX30.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_33.visible=true;
     this.design1_32.visible=false;
     this.hair32drag=false;
     this.dragCircle30=false;
     this.hair33drag=true;
     }     
},    
  hitSprite29:function(sprite1, sprite2){//hair31
   if (sprite2.id==this.hitCount29){      
      sprite2.kill();
      this.hitCount29++;
   }    
if (this.hitCount29 >= Main.hair1VarX29.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_32.visible=true;
     this.design1_31.visible=false;
     this.hair31drag=false;
     this.dragCircle29=false;
    this.hair32drag=true;
     }     
},    
  hitSprite28:function(sprite1, sprite2){//hair30
   if (sprite2.id==this.hitCount28){      
      sprite2.kill();
      this.hitCount28++;
   }    
if (this.hitCount28 >= Main.hair1VarX28.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_31.visible=true;
     this.design1_30.visible=false;
     this.hair30drag=false;
     this.dragCircle28=false;
       this.hair31drag=true;
     }     
},    
 hitSprite27:function(sprite1, sprite2){//hair28
   if (sprite2.id==this.hitCount27){      
      sprite2.kill();
      this.hitCount27++;
   }    
if (this.hitCount27 >= Main.hair1VarX27.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_29.visible=true;
     this.design1_28.visible=false;
     this.hair28drag=false;
     this.dragCircle27=false;
     game.time.events.add(1000,function(){
          this.design1_29.visible=false;
          this.design1_30.visible=true;
          this.hair30drag=true;        
      },this);
     }     
},    
 hitSprite26:function(sprite1, sprite2){//hair27
   if (sprite2.id==this.hitCount26){      
      sprite2.kill();
      this.hitCount26++;
   }    
if (this.hitCount26 >= Main.hair1VarX26.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_28.visible=true;
     this.design1_27.visible=false;
     this.hair27drag=false;
     this.dragCircle26=false;
     this.hair28drag=true;
     }     
},    
 hitSprite25:function(sprite1, sprite2){//hair26
   if (sprite2.id==this.hitCount25){      
      sprite2.kill();
      this.hitCount25++;
   }    
if (this.hitCount25 >= Main.hair1VarX25.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_27.visible=true;
     this.design1_26.visible=false;
     this.hair26drag=false;
     this.dragCircle25=false;
     this.hair27drag=true;
     }     
},    
 hitSprite24:function(sprite1, sprite2){//hair25
   if (sprite2.id==this.hitCount24){      
      sprite2.kill();
      this.hitCount24++;
   }    
if (this.hitCount24 >= Main.hair1VarX24.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_26.visible=true;
     this.design1_25.visible=false;
     this.hair25drag=false;
     this.dragCircle24=false;
     this.hair26drag=true;
     }     
},    
 hitSprite23:function(sprite1, sprite2){//hair23
   if (sprite2.id==this.hitCount23){      
      sprite2.kill();
      this.hitCount23++;
   }    
if (this.hitCount23 >= Main.hair1VarX23.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_25.visible=true;
     this.design1_23.visible=false;
     this.hair23drag=false;
     this.dragCircle23=false;
      this.hair25drag=true;
     }     
},    
 hitSprite22:function(sprite1, sprite2){//hair22
   if (sprite2.id==this.hitCount22){      
      sprite2.kill();
      this.hitCount22++;
   }    
if (this.hitCount22 >= Main.hair1VarX22.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_23.visible=true;
     this.design1_22.visible=false;
     this.hair22drag=false;
     this.dragCircle22=false;
     this.hair23drag=true;
     }     
},    
 hitSprite21:function(sprite1, sprite2){//hair20
   if (sprite2.id==this.hitCount21){      
      sprite2.kill();
      this.hitCount21++;
   }    
if (this.hitCount21 >= Main.hair1VarX21.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_21.visible=true;
     this.design1_20.visible=false;
     this.hair20drag=false;
     this.dragCircle21=false;
      game.time.events.add(1000,function(){
          this.design1_21.visible=false;
          this.design1_22.visible=true;
          this.hair22drag=true;        
      },this);
     }     
},    
 hitSprite20:function(sprite1, sprite2){//hair19
   if (sprite2.id==this.hitCount20){      
      sprite2.kill();
      this.hitCount20++;
   }    
if (this.hitCount20 >= Main.hair1VarX20.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_20.visible=true;
     this.design1_19.visible=false;
     this.hair19drag=false;
     this.dragCircle20=false;
       this.hair20drag=true;
     }     
},    
 hitSprite19:function(sprite1, sprite2){//hair18
   if (sprite2.id==this.hitCount19){      
      sprite2.kill();
      this.hitCount19++;
   }    
if (this.hitCount19 >= Main.hair1VarX19.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_19.visible=true;
     this.design1_18.visible=false;
     this.hair18drag=false;
     this.dragCircle19=false;
      this.hair19drag=true;
     }     
},    
 hitSprite18:function(sprite1, sprite2){//hair17
   if (sprite2.id==this.hitCount18){      
      sprite2.kill();
      this.hitCount18++;
   }    
if (this.hitCount18 >= Main.hair1VarX18.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_18.visible=true;
     this.design1_17.visible=false;
     this.hair17drag=false;
     this.dragCircle18=false;
     this.hair18drag=true;
     }     
},    
 hitSprite17:function(sprite1, sprite2){//hair16
   if (sprite2.id==this.hitCount17){      
      sprite2.kill();
      this.hitCount17++;
   }    
if (this.hitCount17 >= Main.hair1VarX17.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_17.visible=true;
     this.design1_16.visible=false;
     this.hair16drag=false;
     this.dragCircle17=false;
      this.hair17drag=true;
     }     
},    
 hitSprite16:function(sprite1, sprite2){//hair15
   if (sprite2.id==this.hitCount16){      
      sprite2.kill();
      this.hitCount16++;
   }    
if (this.hitCount16 >= Main.hair1VarX16.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_16.visible=true;
     this.design1_15.visible=false;
     this.hair15drag=false;
     this.dragCircle16=false;
     this.hair16drag=true;
     }     
},      
 hitSprite15:function(sprite1, sprite2){//hair14
   if (sprite2.id==this.hitCount15){      
      sprite2.kill();
      this.hitCount15++;
   }    
if (this.hitCount15 >= Main.hair1VarX15.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_15.visible=true;
     this.design1_14.visible=false;
     this.hair14drag=false;
     this.dragCircle15=false;
      this.hair15drag=true;
     }     
},      
 hitSprite14:function(sprite1, sprite2){//hair12
   if (sprite2.id==this.hitCount14){      
      sprite2.kill();
      this.hitCount14++;
   }    
if (this.hitCount14 >= Main.hair1VarX14.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_13.visible=true;
     this.design1_12.visible=false;
     this.hair12drag=false;
     this.dragCircle14=false;
     
      game.time.events.add(1000,function(){
          this.design1_13.visible=false;
          this.design1_14.visible=true;
          this.hair14drag=true;        
      },this);
     
     }     
},      
 hitSprite13:function(sprite1, sprite2){//hair11
   if (sprite2.id==this.hitCount13){      
      sprite2.kill();
      this.hitCount13++;
   }    
if (this.hitCount13 >= Main.hair1VarX13.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_12.visible=true;
     this.design1_11.visible=false;
     this.hair11drag=false;
     this.dragCircle13=false;
     this.hair12drag=true;
     }     
},      
 hitSprite12:function(sprite1, sprite2){//hair10
   if (sprite2.id==this.hitCount12){      
      sprite2.kill();
      this.hitCount12++;
   }    
if (this.hitCount12 >= Main.hair1VarX12.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_11.visible=true;
     this.design1_10.visible=false;
     this.hair10drag=false;
     this.dragCircle12=false;    
    this.hair11drag=true;     
     }     
},      
  hitSprite11:function(sprite1, sprite2){//hair9
   if (sprite2.id==this.hitCount11){      
      sprite2.kill();
      this.hitCount11++;
   }    
if (this.hitCount11 >= Main.hair1VarX11.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_10.visible=true;
     this.design1_9.visible=false;
     this.hair9drag=false;
     this.dragCircle11=false;    
    this.hair10drag=true;
     }     
},      
  hitSprite10:function(sprite1, sprite2){//yellowband
   if (sprite2.id==this.hitCount10){      
      sprite2.kill();
      this.hitCount10++;
   }    
if (this.hitCount10 >= Main.hair1VarX10.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_8.visible=true;
     this.design1_7.visible=false;
     this.yellowbanddrag1=false;
     this.dragCircle10=false; 
    this.arrowbtn7.visible=false;
    this.design_icon3.visible=false;
    this.design_icon33.visible=true;
    
    game.time.events.add(1000,function(){
          this.design1_8.visible=false;
          this.design1_9.visible=true;
          this.hair9drag=true;        
      },this);
     }     
},       
 hitSprite9:function(sprite1, sprite2){//hair6
   if (sprite2.id==this.hitCount9){      
      sprite2.kill();
      this.hitCount9++;
   }    
if (this.hitCount9 >= Main.hair1VarX9.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_7.visible=true;
     this.design1_6.visible=false;
     this.banddrag6=false;
     this.dragCircle9=false; 
    this.arrowbtn6.visible=true;
    this.design_icon3.inputEnabled = true;        
    this.design_icon3.input.useHandCursor = true;       
     }     
},       
 hitSprite8:function(sprite1, sprite2){//hair5
   if (sprite2.id==this.hitCount8){      
      sprite2.kill();
      this.hitCount8++;
   }    
if (this.hitCount8 >= Main.hair1VarX8.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_6.visible=true;
     this.design1_5.visible=false;
     this.banddrag5=false;
     this.dragCircle8=false; 
    this.banddrag6=true;
     }     
},       
hitSprite7:function(sprite1, sprite2){//hair4
   if (sprite2.id==this.hitCount7){      
      sprite2.kill();
      this.hitCount7++;
   }    
if (this.hitCount7 >= Main.hair1VarX7.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_5.visible=true;
     this.design1_4.visible=false;
     this.banddrag4=false;
     this.dragCircle7=false; 
     this.banddrag5=true;
     }     
},       
hitSprite6:function(sprite1, sprite2){//hair3
   if (sprite2.id==this.hitCount6){      
      sprite2.kill();
      this.hitCount6++;
   }    
if (this.hitCount6 >= Main.hair1VarX6.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_4.visible=true;
     this.design1_3.visible=false;
     this.banddrag3=false;
     this.banddrag4=true;
     this.dragCircle6=false; 
   
     }     
},                
 hitSprite5:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount5){      
      sprite2.kill();
      this.hitCount5++;
   }    
     if (this.hitCount5 >= Main.hair1VarX5.length) {
       this.arrowbtn5.visible=false;
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_3.visible=true;
     this.design1_2.visible=false;
     this.banddrag2=false;
     this.dragCircle5=false; 
     this.design_icon44.visible=false;
     this.design_icon444.visible=true;
      this.banddrag3=true;
     }     
},             
hitSprite4:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount4){      
      sprite2.kill();
      this.hitCount4++;
   }    
     if (this.hitCount4 >= Main.hair1VarX4.length) {
       this.arrowbtn3.visible=false;
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
    this.design1_2.visible=true;
     this.design1_1.visible=false;
     this.design_icon4.visible=false;
     this.design_icon44.visible=true;
     this.banddrag1=false;
     this.dragCircle4=false;       
     this.arrowbtn4.visible=true;
      this.design_icon44.inputEnabled = true;      
      this.design_icon44.input.useHandCursor = true;       
     }     
},             
  hitSprite3:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount3){      
      sprite2.kill();
      this.hitCount3++;
   }    
     if (this.hitCount3 >= Main.hair1VarX3.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
      game.add.tween(this.extra_hair3).to({alpha:0}, 1200, Phaser.Easing.Quadratic.Out, true);
     this.comb_line3.visible=false;    
     this.combdrag3=false;   
     this.dragCircle3=false;
     this.design_icon1.visible=false;    
      game.add.tween(this.design_icon11.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true,900).onComplete.add(function(){
         
          this.arrowbtn2.visible=true;
           this.design_icon4.inputEnabled = true;
           this.design_icon4.input.useHandCursor = true;
         
         },this);    
     }     
},              
 hitSprite2:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount2){      
      sprite2.kill();
      this.hitCount2++;
   }    
     if (this.hitCount2 >= Main.hair1VarX2.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
      game.add.tween(this.extra_hair2).to({alpha:0}, 1200, Phaser.Easing.Quadratic.Out, true);
     this.comb_line2.visible=false;
     this.comb_line3.visible=true;
     this.combdrag2=false;   
     this.dragCircle2=false;   
      this.combdrag3=true;
     
     }     
},             
hitSprite:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount1){      
      sprite2.kill();
      this.hitCount1++;
   }    
     if (this.hitCount1 >= Main.hair1VarX.length) {
   //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
    game.add.tween(this.extra_hair1).to({alpha:0}, 1200, Phaser.Easing.Quadratic.Out, true);
     this.comb_line1.visible=false;
     this.comb_line2.visible=true;
     this.combdrag=false;   
     this.dragCircle=false;    
      this.combdrag2=true;
     
     }     
},
//uuuuuuuuuuuu
update:function()
{
     
      if (this.combdrag) {    
  this.design_icon1.x=this.game.input.activePointer.x-30;
  this.design_icon1.y=this.game.input.activePointer.y;
     this.dragCircle.x = this.game.input.activePointer.x+10;
     this.dragCircle.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle, this.hitCircle1_0);
   game.physics.arcade.collide(this.dragCircle, this.hitCircle1_1);
   game.physics.arcade.collide(this.dragCircle, this.hitCircle1_2);    
   }       
         if (this.combdrag2) {    
  this.design_icon1.x=this.game.input.activePointer.x-30;
  this.design_icon1.y=this.game.input.activePointer.y;
     this.dragCircle2.x = this.game.input.activePointer.x+10;
     this.dragCircle2.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle2, this.hitCircle2_0);
   game.physics.arcade.collide(this.dragCircle2, this.hitCircle2_1);
   game.physics.arcade.collide(this.dragCircle2, this.hitCircle2_2);    
   }          
    if (this.combdrag3) {    
  this.design_icon1.x=this.game.input.activePointer.x-30;
  this.design_icon1.y=this.game.input.activePointer.y;
     this.dragCircle3.x = this.game.input.activePointer.x+10;
     this.dragCircle3.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle3, this.hitCircle3_0);
   game.physics.arcade.collide(this.dragCircle3, this.hitCircle3_1);
   game.physics.arcade.collide(this.dragCircle3, this.hitCircle3_2);    
   }           
       if (this.banddrag1) {    
  this.design_icon4.x=this.game.input.activePointer.x-30;
  this.design_icon4.y=this.game.input.activePointer.y;
     this.dragCircle4.x = this.game.input.activePointer.x;
     this.dragCircle4.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_0);
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_1);
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_2);    
   }           
    if (this.banddrag2) {    
  this.design_icon44.x=this.game.input.activePointer.x-30;
  this.design_icon44.y=this.game.input.activePointer.y;
     this.dragCircle5.x = this.game.input.activePointer.x;
     this.dragCircle5.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle5, this.hitCircle5_0);
   game.physics.arcade.collide(this.dragCircle5, this.hitCircle5_1);
   game.physics.arcade.collide(this.dragCircle5, this.hitCircle5_2);    
   }            
      if (this.banddrag3) {  //h3  
     this.dragCircle6.x = this.game.input.activePointer.x;
     this.dragCircle6.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_0);
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_1);
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_2);    
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_3);    
   }        
     if (this.banddrag4) { //h4   
     this.dragCircle7.x = this.game.input.activePointer.x;
     this.dragCircle7.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_0);
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_1);
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_2);    
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_3);    
   }        
    if (this.banddrag5) {//h5    
     this.dragCircle8.x = this.game.input.activePointer.x;
     this.dragCircle8.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle8, this.hitCircle8_0);
   game.physics.arcade.collide(this.dragCircle8, this.hitCircle8_1);
   game.physics.arcade.collide(this.dragCircle8, this.hitCircle8_2);    
   }         
    if (this.banddrag6) {//h6    
     this.dragCircle9.x = this.game.input.activePointer.x;
     this.dragCircle9.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle9, this.hitCircle9_0);
   game.physics.arcade.collide(this.dragCircle9, this.hitCircle9_1);
   game.physics.arcade.collide(this.dragCircle9, this.hitCircle9_2);    
   }     
     if (this.yellowbanddrag1) {//yellow
       this.design_icon3.x=this.game.input.activePointer.x-0;
       this.design_icon3.y=this.game.input.activePointer.y;
     this.dragCircle10.x = this.game.input.activePointer.x;
     this.dragCircle10.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_0);
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_1);
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_2);      
   }         
     if (this.hair9drag) {//hair9      
     this.dragCircle11.x = this.game.input.activePointer.x;
     this.dragCircle11.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle11, this.hitCircle11_0);
   game.physics.arcade.collide(this.dragCircle11, this.hitCircle11_1);
   game.physics.arcade.collide(this.dragCircle11, this.hitCircle11_2);      
   game.physics.arcade.collide(this.dragCircle11, this.hitCircle11_3);      
   }        
    if (this.hair10drag) {//hair10     
     this.dragCircle12.x = this.game.input.activePointer.x;
     this.dragCircle12.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle12, this.hitCircle12_0);
   game.physics.arcade.collide(this.dragCircle12, this.hitCircle12_1);
   game.physics.arcade.collide(this.dragCircle12, this.hitCircle12_2);      
   game.physics.arcade.collide(this.dragCircle12, this.hitCircle12_3);      
   }        
     if (this.hair11drag) {//hair11    
     this.dragCircle13.x = this.game.input.activePointer.x;
     this.dragCircle13.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle13, this.hitCircle13_0);
   game.physics.arcade.collide(this.dragCircle13, this.hitCircle13_1);
   game.physics.arcade.collide(this.dragCircle13, this.hitCircle13_2);      
   game.physics.arcade.collide(this.dragCircle13, this.hitCircle13_3);      
   }      
    if (this.hair12drag) {//hair12    
     this.dragCircle14.x = this.game.input.activePointer.x;
     this.dragCircle14.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle14, this.hitCircle14_0);
   game.physics.arcade.collide(this.dragCircle14, this.hitCircle14_1);
   game.physics.arcade.collide(this.dragCircle14, this.hitCircle14_2);      
   game.physics.arcade.collide(this.dragCircle14, this.hitCircle14_3);      
   }      
     if (this.hair14drag) {//hair14    
     this.dragCircle15.x = this.game.input.activePointer.x;
     this.dragCircle15.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle15, this.hitCircle15_0);
   game.physics.arcade.collide(this.dragCircle15, this.hitCircle15_1);
   game.physics.arcade.collide(this.dragCircle15, this.hitCircle15_2);      
   game.physics.arcade.collide(this.dragCircle15, this.hitCircle15_3);      
   }      
 if (this.hair15drag) {//hair15    
     this.dragCircle16.x = this.game.input.activePointer.x;
     this.dragCircle16.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle16, this.hitCircle16_0);
   game.physics.arcade.collide(this.dragCircle16, this.hitCircle16_1);
   game.physics.arcade.collide(this.dragCircle16, this.hitCircle16_2);      
   game.physics.arcade.collide(this.dragCircle16, this.hitCircle16_3);      
   }         
   if (this.hair16drag) {//hair16    
     this.dragCircle17.x = this.game.input.activePointer.x;
     this.dragCircle17.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle17, this.hitCircle17_0);
   game.physics.arcade.collide(this.dragCircle17, this.hitCircle17_1);
   game.physics.arcade.collide(this.dragCircle17, this.hitCircle17_2);      
   game.physics.arcade.collide(this.dragCircle17, this.hitCircle17_3);      
   }           
     if (this.hair17drag) {//hair17    
     this.dragCircle18.x = this.game.input.activePointer.x;
     this.dragCircle18.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle18, this.hitCircle18_0);
   game.physics.arcade.collide(this.dragCircle18, this.hitCircle18_1);
   game.physics.arcade.collide(this.dragCircle18, this.hitCircle18_2);      
   game.physics.arcade.collide(this.dragCircle18, this.hitCircle18_3);      
   }       
     if (this.hair18drag) {//hair18    
     this.dragCircle19.x = this.game.input.activePointer.x;
     this.dragCircle19.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle19, this.hitCircle19_0);
   game.physics.arcade.collide(this.dragCircle19, this.hitCircle19_1);
   game.physics.arcade.collide(this.dragCircle19, this.hitCircle19_2);      
   game.physics.arcade.collide(this.dragCircle19, this.hitCircle19_3);      
   }       
    if (this.hair19drag) {//hair19    
     this.dragCircle20.x = this.game.input.activePointer.x;
     this.dragCircle20.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle20, this.hitCircle20_0);
   game.physics.arcade.collide(this.dragCircle20, this.hitCircle20_1);
   game.physics.arcade.collide(this.dragCircle20, this.hitCircle20_2);      
   game.physics.arcade.collide(this.dragCircle20, this.hitCircle20_3);      
   }
    if (this.hair20drag) {//hair20   
     this.dragCircle21.x = this.game.input.activePointer.x;
     this.dragCircle21.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle21, this.hitCircle21_0);
   game.physics.arcade.collide(this.dragCircle21, this.hitCircle21_1);
   game.physics.arcade.collide(this.dragCircle21, this.hitCircle21_2);      
   game.physics.arcade.collide(this.dragCircle21, this.hitCircle21_3);      
   }
    if (this.hair22drag) {//hair22    
     this.dragCircle22.x = this.game.input.activePointer.x;
     this.dragCircle22.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle22, this.hitCircle22_0);
   game.physics.arcade.collide(this.dragCircle22, this.hitCircle22_1);
   game.physics.arcade.collide(this.dragCircle22, this.hitCircle22_2);      
   game.physics.arcade.collide(this.dragCircle22, this.hitCircle22_3);      
   }
    if (this.hair23drag) {//hair23    
     this.dragCircle23.x = this.game.input.activePointer.x;
     this.dragCircle23.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle23, this.hitCircle23_0);
   game.physics.arcade.collide(this.dragCircle23, this.hitCircle23_1);
   game.physics.arcade.collide(this.dragCircle23, this.hitCircle23_2);      
   game.physics.arcade.collide(this.dragCircle23, this.hitCircle23_3);      
   }
    if (this.hair25drag) {//hair25    
     this.dragCircle24.x = this.game.input.activePointer.x;
     this.dragCircle24.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle24, this.hitCircle24_0);
   game.physics.arcade.collide(this.dragCircle24, this.hitCircle24_1);
   game.physics.arcade.collide(this.dragCircle24, this.hitCircle24_2);      
   game.physics.arcade.collide(this.dragCircle24, this.hitCircle24_3);      
   }
     if (this.hair26drag) {//hair26    
     this.dragCircle25.x = this.game.input.activePointer.x;
     this.dragCircle25.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle25, this.hitCircle25_0);
   game.physics.arcade.collide(this.dragCircle25, this.hitCircle25_1);
   game.physics.arcade.collide(this.dragCircle25, this.hitCircle25_2);      
   game.physics.arcade.collide(this.dragCircle25, this.hitCircle25_3);      
   }
   if (this.hair27drag) {//hair27    
     this.dragCircle26.x = this.game.input.activePointer.x;
     this.dragCircle26.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle26, this.hitCircle26_0);
   game.physics.arcade.collide(this.dragCircle26, this.hitCircle26_1);
   game.physics.arcade.collide(this.dragCircle26, this.hitCircle26_2);      
   game.physics.arcade.collide(this.dragCircle26, this.hitCircle26_3);      
   }
    if (this.hair28drag) {//hair28    
     this.dragCircle27.x = this.game.input.activePointer.x;
     this.dragCircle27.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle27, this.hitCircle27_0);
   game.physics.arcade.collide(this.dragCircle27, this.hitCircle27_1);
   game.physics.arcade.collide(this.dragCircle27, this.hitCircle27_2);      
   game.physics.arcade.collide(this.dragCircle27, this.hitCircle27_3);      
   }
    if (this.hair30drag) {//hair30    
     this.dragCircle28.x = this.game.input.activePointer.x;
     this.dragCircle28.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle28, this.hitCircle28_0);
   game.physics.arcade.collide(this.dragCircle28, this.hitCircle28_1);
   game.physics.arcade.collide(this.dragCircle28, this.hitCircle28_2);      
   game.physics.arcade.collide(this.dragCircle28, this.hitCircle28_3);      
   }
    if (this.hair31drag) {//hair31  
     this.dragCircle29.x = this.game.input.activePointer.x;
     this.dragCircle29.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle29, this.hitCircle29_0);
   game.physics.arcade.collide(this.dragCircle29, this.hitCircle29_1);
   game.physics.arcade.collide(this.dragCircle29, this.hitCircle29_2);      
   game.physics.arcade.collide(this.dragCircle29, this.hitCircle29_3);      
   }
    if (this.hair32drag) {//hair32 
     this.dragCircle30.x = this.game.input.activePointer.x;
     this.dragCircle30.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle30, this.hitCircle30_0);
   game.physics.arcade.collide(this.dragCircle30, this.hitCircle30_1);
   game.physics.arcade.collide(this.dragCircle30, this.hitCircle30_2);      
   game.physics.arcade.collide(this.dragCircle30, this.hitCircle30_3);      
   }
   if (this.hair33drag) {//hair33 
     this.dragCircle31.x = this.game.input.activePointer.x;
     this.dragCircle31.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle31, this.hitCircle31_0);
   game.physics.arcade.collide(this.dragCircle31, this.hitCircle31_1);
   game.physics.arcade.collide(this.dragCircle31, this.hitCircle31_2);      
   game.physics.arcade.collide(this.dragCircle31, this.hitCircle31_3);      
   }
    if (this.hair34drag) {//hair34
     this.dragCircle32.x = this.game.input.activePointer.x;
     this.dragCircle32.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle32, this.hitCircle32_0);
   game.physics.arcade.collide(this.dragCircle32, this.hitCircle32_1);
   game.physics.arcade.collide(this.dragCircle32, this.hitCircle32_2);      
   game.physics.arcade.collide(this.dragCircle32, this.hitCircle32_3);      
   }
   if (this.hair35drag) {//hair35
     this.dragCircle33.x = this.game.input.activePointer.x;
     this.dragCircle33.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle33, this.hitCircle33_0);
   game.physics.arcade.collide(this.dragCircle33, this.hitCircle33_1);
   game.physics.arcade.collide(this.dragCircle33, this.hitCircle33_2);      
   game.physics.arcade.collide(this.dragCircle33, this.hitCircle33_3);      
   }
    if (this.flowerdrag) {//flower
     this.hair1_flowericon1.x = this.game.input.activePointer.x;
     this.hair1_flowericon1.y = this.game.input.activePointer.y;
     this.dragCircle34.x = this.game.input.activePointer.x;
     this.dragCircle34.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle34, this.hitCircle34_0);
   game.physics.arcade.collide(this.dragCircle34, this.hitCircle34_1);
   game.physics.arcade.collide(this.dragCircle34, this.hitCircle34_2);      
   game.physics.arcade.collide(this.dragCircle34, this.hitCircle34_3);      
   }      
  //udddddddddddddd  
         
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
   //CreateLinksInGame("Elsa-Wedding-Hair-Design","game","logo");
},
moreLink:function()
{
   //CreateLinksInGame("Elsa-Wedding-Hair-Design","game","more");
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

//d333333333333333333
Main.demo3 = function(){}
Main.demo3.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
            
           this.hitCount1 = 0; this.hitCount2 = 0; this.hitCount3 = 0; this.hitCount4 = 0; 
           
           this.hitCount5 = 0; 
           this.hitCount6 = 0; 
           this.hitCount7 = 0; 
           this.hitCount8 = 0; 
           this.hitCount9 = 0; 
           this.hitCount10 = 0; 
           
           this.combdrag=false;
           this.combdrag2=false;
           this.combdrag3=false;
           this.hair2drag=false;
           this.hair3drag=false;
           this.hair4drag=false;
           this.hair5drag=false;
           this.hair6drag=false;
           this.hair7drag=false;
           this.flowerdrag=false;
          
        game.physics.startSystem(Phaser.Physics.ARCADE);
      
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0,0,'room_bg');
        this.levelGroup.add(this.bg);
        
      //  this.hair1_body = game.add.sprite(248.05,620,"hair1_body");
        this.hair1_body = game.add.sprite(255,620,"hair1_body");
		this.hair1_body.anchor.setTo(0.5);
        
        this.design1_1 = game.add.sprite(282.4,420.7,"design3_1");
		this.design1_1.anchor.setTo(0.5);
        
        this.design1_2 = game.add.sprite(282.4,420.7,"design3_2");//h2
		this.design1_2.anchor.setTo(0.5);		
	    this.design1_2.visible=false;
        
        this.design1_3 = game.add.sprite(282.4,420.7,"design3_3");//h3
		this.design1_3.anchor.setTo(0.5);		
		this.design1_3.visible=false;
        
        this.design1_4 = game.add.sprite(282.4,420.7,"design3_4");//h4
		this.design1_4.anchor.setTo(0.5);		
		this.design1_4.visible=false;
       
        this.design1_5 = game.add.sprite(282.4,420.7,"design3_5");//h5
		this.design1_5.anchor.setTo(0.5);		
		this.design1_5.visible=false;
        
        this.design1_6 = game.add.sprite(282.4,420.7,"design3_6");//h6
		this.design1_6.anchor.setTo(0.5);		
		this.design1_6.visible=false;
        
        this.design1_7 = game.add.sprite(282.4,420.7,"design3_7");//h7
		this.design1_7.anchor.setTo(0.5);		
		this.design1_7.visible=false;
        
        this.design1_8 = game.add.sprite(282.4,420.7,"design3_8");//h8
		this.design1_8.anchor.setTo(0.5);		
		this.design1_8.visible=false;
        
        this.design1_9 = game.add.sprite(282.4,420.7,"design3_9");//h9
		this.design1_9.anchor.setTo(0.5);		
		this.design1_9.visible=false;
        
        this.design1_10 = game.add.sprite(282.4,420.7,"design3_10");//h10
		this.design1_10.anchor.setTo(0.5);		
		this.design1_10.visible=false;
        
        this.design1_11 = game.add.sprite(282.4,420.7,"design3_11");//h11
		this.design1_11.anchor.setTo(0.5);		
		this.design1_11.visible=false;
        
        this.design1_12 = game.add.sprite(282.4,420.7,"design3_12");//h12
		this.design1_12.anchor.setTo(0.5);		
		this.design1_12.visible=false;
        
        this.design1_13 = game.add.sprite(282.4,420.7,"design3_13");//h13
		this.design1_13.anchor.setTo(0.5);		
		this.design1_13.visible=false;
        
        this.design1_14 = game.add.sprite(282.4,420.7,"design3_14");//h14
		this.design1_14.anchor.setTo(0.5);		
		this.design1_14.visible=false;
        
        this.design1_15 = game.add.sprite(282.4,420.7,"design3_15");//h15
		this.design1_15.anchor.setTo(0.5);		
		this.design1_15.visible=false;
        
        this.hair3 = game.add.sprite(256,400,"hair3");
		this.hair3.anchor.setTo(0.5); 
		this.hair3.visible=false;
      
  //eh33333333333
        this.extra_hair1 = game.add.sprite(170,500,"extra_hair1");
		this.extra_hair1.anchor.setTo(0.5); 
        
        this.extra_hair2 = game.add.sprite(270,500,"extra_hair2");
		this.extra_hair2.anchor.setTo(0.5); 
        
        this.extra_hair3 = game.add.sprite(370,500,"extra_hair3");
		this.extra_hair3.anchor.setTo(0.5); 
        
        this.comb_line1 = game.add.sprite(170,420,'comb_line');
        this.comb_line1.anchor.setTo(0.5);
        this.comb_line1.scale.setTo(0.7);
        this.comb_line1.animations.add("comb_line1");
        this.comb_line1.animations.play("comb_line1",30,true,true);
        this.comb_line1.visible=false;
        
         this.comb_line2 = game.add.sprite(270,400,'comb_line');
         this.comb_line2.anchor.setTo(0.5);
         this.comb_line2.scale.setTo(0.7);
         this.comb_line2.animations.add("comb_line2");
         this.comb_line2.animations.play("comb_line2",30,true,true);
         this.comb_line2.visible=false;
        
        this.comb_line3 = game.add.sprite(370,400,'comb_line');
        this.comb_line3.anchor.setTo(0.5);
        this.comb_line3.scale.setTo(0.7);
        this.comb_line3.animations.add("comb_line3");
        this.comb_line3.animations.play("comb_line3",30,true,true);
        this.comb_line3.visible=false;
        
  this.designGroup=game.add.group();
     
        this.design_panel = game.add.sprite(252,755,"design_panel");
		this.design_panel.anchor.setTo(0.5);
      
         this.design_icon1 = game.add.sprite(76.05,663.5, 'design_icon1');
         this.design_icon1.anchor.setTo(0.5);
         this.design_icon1.inputEnabled = true;        
         this.design_icon1.input.useHandCursor = true;        
         this.design_icon1.events.onInputUp.add(this.icon1Fun1, this);
         this.design_icon1.events.onInputOut.add(btnOut,this);
		 this.design_icon1.events.onInputOver.add(btnOver,this);
         
         this.design_icon11 = game.add.sprite(76.05,663.5, 'design_icon1');
         this.design_icon11.anchor.setTo(0.5);
         this.design_icon11.scale.setTo(0);
        
        this.design_icon2 = game.add.sprite(455,670,"design_icon2");
		this.design_icon2.anchor.setTo(0.5);
      
         this.design_icon3 = game.add.sprite(287,670,"design_icon3");
		 this.design_icon3.anchor.setTo(0.5);
        
         this.design_icon4 = game.add.sprite(370,668,"design_icon4");
	     this.design_icon4.anchor.setTo(0.5);
        
         this.hair1_flowericon1 = game.add.sprite(203,672.8,"hair3_flowericon");
		 this.hair1_flowericon1.anchor.setTo(0.5);
         this.hair1_flowericon1.inputEnabled = false;          
         this.hair1_flowericon1.events.onInputUp.add(this.flowerFun1, this);
         this.hair1_flowericon1.events.onInputOut.add(btnOut,this);
		 this.hair1_flowericon1.events.onInputOver.add(btnOver,this);
       
       
     //comb1 
        this.hitGroup = game.add.group();
      for(var i=0; i<=Main.hair3VarX.length-1; i++)
      {
      this["hitCircle1_"+i] = game.add.graphics(Main.hair3VarX[i],Main.hair3VarY[i]);
      this["hitCircle1_"+i].beginFill(0x0000FF,0);
      this["hitCircle1_"+i].drawCircle(0,0,25);
      this["hitCircle1_"+i].id = i;
      this.hitGroup.add(this["hitCircle1_"+i]);
      game.physics.arcade.enable([this["hitCircle1_"+i]]);
      this["hitCircle1_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle = game.add.graphics(0,0);
      this.dragCircle.beginFill(0xFF0000, 0);
      this.dragCircle.drawCircle(0,0,60);
      this.dragCircle.endFill(); 
      
        game.physics.arcade.enable([this.dragCircle]);      
      this.dragCircle.body.collideWorldBounds = true;      
      this.dragCircle.body.onCollide = new Phaser.Signal();
      this.dragCircle.body.onCollide.add(this.hitSprite, this);
  // comb1  
  // comb2  
     this.hitGroup2 = game.add.group();
      for(var i=0; i<=Main.hair3VarX2.length-1; i++)
      {
      this["hitCircle2_"+i] = game.add.graphics(Main.hair3VarX2[i],Main.hair3VarY2[i]);
      this["hitCircle2_"+i].beginFill(0x0000FF,0);
      this["hitCircle2_"+i].drawCircle(0,0,25);
      this["hitCircle2_"+i].id = i;
      this.hitGroup2.add(this["hitCircle2_"+i]);
      game.physics.arcade.enable([this["hitCircle2_"+i]]);
      this["hitCircle2_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle2 = game.add.graphics(0,0);
      this.dragCircle2.beginFill(0xFF0000, 0);
      this.dragCircle2.drawCircle(0,0,60);
      this.dragCircle2.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle2]);      
      this.dragCircle2.body.collideWorldBounds = true;      
      this.dragCircle2.body.onCollide = new Phaser.Signal();
      this.dragCircle2.body.onCollide.add(this.hitSprite2, this);
    //comb2
     // comb3
     this.hitGroup3 = game.add.group();
      for(var i=0; i<=Main.hair3VarX3.length-1; i++)
      {
      this["hitCircle3_"+i] = game.add.graphics(Main.hair3VarX3[i],Main.hair3VarY3[i]);
      this["hitCircle3_"+i].beginFill(0x0000FF,0);
      this["hitCircle3_"+i].drawCircle(0,0,25);
      this["hitCircle3_"+i].id = i;
      this.hitGroup3.add(this["hitCircle3_"+i]);
      game.physics.arcade.enable([this["hitCircle3_"+i]]);
      this["hitCircle3_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle3 = game.add.graphics(0,0);
      this.dragCircle3.beginFill(0xFF0000, 0);
      this.dragCircle3.drawCircle(0,0,60);
      this.dragCircle3.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle3]);      
      this.dragCircle3.body.collideWorldBounds = true;      
      this.dragCircle3.body.onCollide = new Phaser.Signal();
      this.dragCircle3.body.onCollide.add(this.hitSprite3, this);
    //comb3   
//hair2
     this.hitGroup4 = game.add.group();
      for(var i=0; i<=Main.hair3VarX4.length-1; i++)
      {
      this["hitCircle4_"+i] = game.add.graphics(Main.hair3VarX4[i],Main.hair3VarY4[i]);
      this["hitCircle4_"+i].beginFill(0x0000FF,0);
      this["hitCircle4_"+i].drawCircle(0,0,22);
      this["hitCircle4_"+i].id = i;
      this.hitGroup4.add(this["hitCircle4_"+i]);
      game.physics.arcade.enable([this["hitCircle4_"+i]]);
      this["hitCircle4_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle4 = game.add.graphics(0,0);
      this.dragCircle4.beginFill(0xFF0000, 0);
      this.dragCircle4.drawCircle(0,0,10);
      this.dragCircle4.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle4]);      
      this.dragCircle4.body.collideWorldBounds = true;      
      this.dragCircle4.body.onCollide = new Phaser.Signal();
      this.dragCircle4.body.onCollide.add(this.hitSprite4, this);
    //hair2
    //hair3
     this.hitGroup5 = game.add.group();
      for(var i=0; i<=Main.hair3VarX5.length-1; i++)
      {
      this["hitCircle5_"+i] = game.add.graphics(Main.hair3VarX5[i],Main.hair3VarY5[i]);
      this["hitCircle5_"+i].beginFill(0x0000FF,0);
      this["hitCircle5_"+i].drawCircle(0,0,22);
      this["hitCircle5_"+i].id = i;
      this.hitGroup5.add(this["hitCircle5_"+i]);
      game.physics.arcade.enable([this["hitCircle5_"+i]]);
      this["hitCircle5_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle5 = game.add.graphics(0,0);
      this.dragCircle5.beginFill(0xFF0000, 0);
      this.dragCircle5.drawCircle(0,0,10);
      this.dragCircle5.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle5]);      
      this.dragCircle5.body.collideWorldBounds = true;      
      this.dragCircle5.body.onCollide = new Phaser.Signal();
      this.dragCircle5.body.onCollide.add(this.hitSprite5, this);
    //hair3
    //hair4
     this.hitGroup6 = game.add.group();
      for(var i=0; i<=Main.hair3VarX6.length-1; i++)
      {
      this["hitCircle6_"+i] = game.add.graphics(Main.hair3VarX6[i],Main.hair3VarY6[i]);
      this["hitCircle6_"+i].beginFill(0x0000FF,0);
      this["hitCircle6_"+i].drawCircle(0,0,22);
      this["hitCircle6_"+i].id = i;
      this.hitGroup6.add(this["hitCircle6_"+i]);
      game.physics.arcade.enable([this["hitCircle6_"+i]]);
      this["hitCircle6_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle6 = game.add.graphics(0,0);
      this.dragCircle6.beginFill(0xFF0000, 0);
      this.dragCircle6.drawCircle(0,0,10);
      this.dragCircle6.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle6]);      
      this.dragCircle6.body.collideWorldBounds = true;      
      this.dragCircle6.body.onCollide = new Phaser.Signal();
      this.dragCircle6.body.onCollide.add(this.hitSprite6, this);
    //hair4
    //hair5
     this.hitGroup7 = game.add.group();
      for(var i=0; i<=Main.hair3VarX7.length-1; i++)
      {
      this["hitCircle7_"+i] = game.add.graphics(Main.hair3VarX7[i],Main.hair3VarY7[i]);
      this["hitCircle7_"+i].beginFill(0x0000FF,0);
      this["hitCircle7_"+i].drawCircle(0,0,22);
      this["hitCircle7_"+i].id = i;
      this.hitGroup7.add(this["hitCircle7_"+i]);
      game.physics.arcade.enable([this["hitCircle7_"+i]]);
      this["hitCircle7_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle7 = game.add.graphics(0,0);
      this.dragCircle7.beginFill(0xFF0000, 0);
      this.dragCircle7.drawCircle(0,0,10);
      this.dragCircle7.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle7]);      
      this.dragCircle7.body.collideWorldBounds = true;      
      this.dragCircle7.body.onCollide = new Phaser.Signal();
      this.dragCircle7.body.onCollide.add(this.hitSprite7, this);
    //hair5
    //hair6
     this.hitGroup8 = game.add.group();
      for(var i=0; i<=Main.hair3VarX8.length-1; i++)
      {
      this["hitCircle8_"+i] = game.add.graphics(Main.hair3VarX8[i],Main.hair3VarY8[i]);
      this["hitCircle8_"+i].beginFill(0x0000FF,0);
      this["hitCircle8_"+i].drawCircle(0,0,22);
      this["hitCircle8_"+i].id = i;
      this.hitGroup8.add(this["hitCircle8_"+i]);
      game.physics.arcade.enable([this["hitCircle8_"+i]]);
      this["hitCircle8_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle8 = game.add.graphics(0,0);
      this.dragCircle8.beginFill(0xFF0000, 0);
      this.dragCircle8.drawCircle(0,0,10);
      this.dragCircle8.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle8]);      
      this.dragCircle8.body.collideWorldBounds = true;      
      this.dragCircle8.body.onCollide = new Phaser.Signal();
      this.dragCircle8.body.onCollide.add(this.hitSprite8, this);
    //hair6
     //hair7
     this.hitGroup9 = game.add.group();
      for(var i=0; i<=Main.hair3VarX9.length-1; i++)
      {
      this["hitCircle9_"+i] = game.add.graphics(Main.hair3VarX9[i],Main.hair3VarY9[i]);
      this["hitCircle9_"+i].beginFill(0x0000FF,0);
      this["hitCircle9_"+i].drawCircle(0,0,22);
      this["hitCircle9_"+i].id = i;
      this.hitGroup9.add(this["hitCircle9_"+i]);
      game.physics.arcade.enable([this["hitCircle9_"+i]]);
      this["hitCircle9_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle9 = game.add.graphics(0,0);
      this.dragCircle9.beginFill(0xFF0000, 0);
      this.dragCircle9.drawCircle(0,0,10);
      this.dragCircle9.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle9]);      
      this.dragCircle9.body.collideWorldBounds = true;      
      this.dragCircle9.body.onCollide = new Phaser.Signal();
      this.dragCircle9.body.onCollide.add(this.hitSprite9, this);
    //hair7
     //flower
     this.hitGroup10 = game.add.group();
      for(var i=0; i<=Main.hair3VarX10.length-1; i++)
      {
      this["hitCircle10_"+i] = game.add.graphics(Main.hair3VarX10[i],Main.hair3VarY10[i]);
      this["hitCircle10_"+i].beginFill(0x0000FF,0);
      this["hitCircle10_"+i].drawCircle(0,0,200);
      this["hitCircle10_"+i].id = i;
      this.hitGroup10.add(this["hitCircle10_"+i]);
      game.physics.arcade.enable([this["hitCircle10_"+i]]);
      this["hitCircle10_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle10 = game.add.graphics(0,0);
      this.dragCircle10.beginFill(0xFF0000, 0);
      this.dragCircle10.drawCircle(0,0,50);
      this.dragCircle10.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle10]);      
      this.dragCircle10.body.collideWorldBounds = true;      
      this.dragCircle10.body.onCollide = new Phaser.Signal();
      this.dragCircle10.body.onCollide.add(this.hitSprite10, this);
    //flower
   //d3hhhhhhhhhh 
    
     this.morebtn = game.add.sprite(50,745,"morebtn");
		this.morebtn.anchor.setTo(0.5);		
		this.morebtn.statusType = "game";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		this.donebtn = game.add.sprite(455,745,"donebtn");
		this.donebtn.anchor.setTo(0.5);				
		this.donebtn.scale.setTo(0);				
		this.donebtn.url = "hair3";
		this.donebtn.inputEnabled = true;
		this.donebtn.input.useHandCursor = true;
		this.donebtn.input.pixelPerfectClick = true;
		this.donebtn.input.pixelPerfectOver = true;
		this.donebtn.events.onInputDown.add(stateStart,this);
		this.donebtn.events.onInputOut.add(btnOut,this);
		this.donebtn.events.onInputOver.add(btnOver,this);
    
    
      this.arrowbtn = game.add.sprite(122,590,'arrowbtn');
         this.arrowbtn.anchor.setTo(0.5);
         this.arrowbtn.angle=320;             
         game.add.tween(this.arrowbtn).to({x:this.arrowbtn.x-5,y:this.arrowbtn.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn2 = game.add.sprite(355,590,'arrowbtn');
         this.arrowbtn2.anchor.setTo(0.5);
         this.arrowbtn2.visible=false;
         this.arrowbtn2.angle=320;             
         game.add.tween(this.arrowbtn2).to({x:this.arrowbtn2.x-5,y:this.arrowbtn2.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn3 = game.add.sprite(206,600,'arrowbtn');
         this.arrowbtn3.anchor.setTo(0.5);
         this.arrowbtn3.visible=false;
         this.arrowbtn3.angle=320;             
         game.add.tween(this.arrowbtn3).to({x:this.arrowbtn3.x-5,y:this.arrowbtn3.y+5}, 500, "Linear", true,0,-1).yoyo(true);
         
         
         
         
         
         this.logoVar = game.add.sprite(4, 6, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true;
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(434,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
             addShutter();
        },
  //d3ddddddddddd
   flowerFun1:function(){
       this.arrowbtn3.visible=false;
   this.flowerdrag=true;   
   this.hair1_flowericon1.inputEnabled = false;
   },   
  icon1Fun1:function(){
          this.combdrag=true;     
   this.arrowbtn.visible = false;
   this.design_icon1.inputEnabled = false;
   this.comb_line1.visible=true;   
         },
 hitSprite10:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount10){      
      sprite2.kill();
      this.hitCount10++;
   }    
     if (this.hitCount10 >= Main.hair3VarX10.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
     this.design1_15.visible=false;
     this.hair3.visible=true;
        this.flowerdrag=false;   
         this.dragCircle10=false;
          this.hair1_flowericon1.visible=false;
   game.add.tween(this.donebtn.scale).to({x:1,y:1},500,Phaser.Easing.Quadratic.Out,true);

     }     
},                       
 hitSprite9:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount9){      
      sprite2.kill();
      this.hitCount9++;
   }    
     if (this.hitCount9 >= Main.hair3VarX9.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
     this.design1_7.visible=false;   
     this.hair7drag=false;
     this.dragCircle9=false;
     
        this.design1_8.visible=true;
      //  
        game.time.events.add(100,function(){
          this.design1_8.visible=false;
          this.design1_9.visible=true;         
         },this);
          game.time.events.add(200,function(){
          this.design1_9.visible=false;
          this.design1_10.visible=true;         
         },this);
         game.time.events.add(300,function(){
          this.design1_10.visible=false;
          this.design1_11.visible=true;         
         },this);   
           game.time.events.add(400,function(){
          this.design1_11.visible=false;
          this.design1_12.visible=true;         
         },this);
           game.time.events.add(500,function(){
          this.design1_12.visible=false;
          this.design1_13.visible=true;         
         },this);
            game.time.events.add(600,function(){
          this.design1_13.visible=false;
          this.design1_14.visible=true;         
         },this);
         game.time.events.add(700,function(){
          this.design1_14.visible=false;
          this.design1_15.visible=true;
           this.arrowbtn3.visible=true;
    this.hair1_flowericon1.inputEnabled = true;      
    this.hair1_flowericon1.input.useHandCursor = true;
         },this);       
        //
       
     }     
},                
 hitSprite8:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount8){      
      sprite2.kill();
      this.hitCount8++;
   }    
     if (this.hitCount8 >= Main.hair3VarX8.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
     this.design1_6.visible=false;
     this.design1_7.visible=true;
     this.hair6drag=false;
     this.dragCircle8=false;
     game.time.events.add(300,function(){
       this.hair7drag=true;
      },this);     
     }     
},             
  hitSprite7:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount7){      
      sprite2.kill();
      this.hitCount7++;
   }    
     if (this.hitCount7 >= Main.hair3VarX7.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
     this.design1_5.visible=false;
     this.design1_6.visible=true;
     this.hair5drag=false;
     this.dragCircle7=false;
      this.hair6drag=true;
     }     
},              
   hitSprite6:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount6){      
      sprite2.kill();
      this.hitCount6++;
   }    
     if (this.hitCount6 >= Main.hair3VarX6.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
     this.design1_4.visible=false;
     this.design1_5.visible=true;
     this.hair4drag=false;
     this.dragCircle6=false;
     this.hair5drag=true;
     }     
},            
hitSprite5:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount5){      
      sprite2.kill();
      this.hitCount5++;
   }    
     if (this.hitCount5 >= Main.hair3VarX5.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
     this.design1_3.visible=false;
     this.design1_4.visible=true;
     this.hair3drag=false;
     this.dragCircle5=false;
    this.hair4drag=true;
     }     
},               
hitSprite4:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount4){      
      sprite2.kill();
      this.hitCount4++;
   }    
     if (this.hitCount4 >= Main.hair3VarX4.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
     this.design1_2.visible=false;
     this.design1_3.visible=true;
     this.hair2drag=false;
     this.dragCircle4=false;
     this.hair3drag=true;
     
     }     
},                    
  hitSprite3:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount3){      
      sprite2.kill();
      this.hitCount3++;
   }    
     if (this.hitCount3 >= Main.hair3VarX3.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
      game.add.tween(this.extra_hair3).to({alpha:0}, 1200, Phaser.Easing.Quadratic.Out, true);
     this.comb_line3.visible=false;    
     this.combdrag3=false;   
     this.dragCircle3=false;
     this.design_icon1.visible=false;    
      game.add.tween(this.design_icon11.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true,900).onComplete.add(function(){
         
        this.design1_1.visible=false;
        this.design1_2.visible=true;
          this.hair2drag=true;
          
         
         },this);    
     }     
},              
 hitSprite2:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount2){      
      sprite2.kill();
      this.hitCount2++;
   }    
     if (this.hitCount2 >= Main.hair3VarX2.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
      game.add.tween(this.extra_hair2).to({alpha:0}, 1200, Phaser.Easing.Quadratic.Out, true);
     this.comb_line2.visible=false;
     this.comb_line3.visible=true;
     this.combdrag2=false;   
     this.dragCircle2=false;   
      this.combdrag3=true;
     
     }     
},             
hitSprite:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount1){      
      sprite2.kill();
      this.hitCount1++;
   }    
     if (this.hitCount1 >= Main.hair3VarX.length) {
   //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
    game.add.tween(this.extra_hair1).to({alpha:0}, 1200, Phaser.Easing.Quadratic.Out, true);
     this.comb_line1.visible=false;
     this.comb_line2.visible=true;
     this.combdrag=false;   
     this.dragCircle=false;    
      this.combdrag2=true;
     
     }     
},
//u3333333333333
update:function()
{
     
      if (this.combdrag) {    
  this.design_icon1.x=this.game.input.activePointer.x-30;
  this.design_icon1.y=this.game.input.activePointer.y;
     this.dragCircle.x = this.game.input.activePointer.x+10;
     this.dragCircle.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle, this.hitCircle1_0);
   game.physics.arcade.collide(this.dragCircle, this.hitCircle1_1);
   game.physics.arcade.collide(this.dragCircle, this.hitCircle1_2);    
   }       
         if (this.combdrag2) {    
  this.design_icon1.x=this.game.input.activePointer.x-30;
  this.design_icon1.y=this.game.input.activePointer.y;
     this.dragCircle2.x = this.game.input.activePointer.x+10;
     this.dragCircle2.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle2, this.hitCircle2_0);
   game.physics.arcade.collide(this.dragCircle2, this.hitCircle2_1);
   game.physics.arcade.collide(this.dragCircle2, this.hitCircle2_2);    
   }          
    if (this.combdrag3) {    
  this.design_icon1.x=this.game.input.activePointer.x-30;
  this.design_icon1.y=this.game.input.activePointer.y;
     this.dragCircle3.x = this.game.input.activePointer.x+10;
     this.dragCircle3.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle3, this.hitCircle3_0);
   game.physics.arcade.collide(this.dragCircle3, this.hitCircle3_1);
   game.physics.arcade.collide(this.dragCircle3, this.hitCircle3_2);    
   }           
       if (this.hair2drag) {  //h2   
     this.dragCircle4.x = this.game.input.activePointer.x;
     this.dragCircle4.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_0);
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_1);
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_2);    
   }           
    if (this.hair3drag) { //h3    
     this.dragCircle5.x = this.game.input.activePointer.x;
     this.dragCircle5.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle5, this.hitCircle5_0);
   game.physics.arcade.collide(this.dragCircle5, this.hitCircle5_1);
   game.physics.arcade.collide(this.dragCircle5, this.hitCircle5_2);    
   }
   if (this.hair4drag) { //h4    
     this.dragCircle6.x = this.game.input.activePointer.x;
     this.dragCircle6.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_0);
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_1);
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_2);    
   }
    if (this.hair5drag) { //h5   
     this.dragCircle7.x = this.game.input.activePointer.x;
     this.dragCircle7.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_0);
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_1);
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_2);    
   }
   if (this.hair6drag) { //h6   
     this.dragCircle8.x = this.game.input.activePointer.x;
     this.dragCircle8.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle8, this.hitCircle8_0);
   game.physics.arcade.collide(this.dragCircle8, this.hitCircle8_1);
   game.physics.arcade.collide(this.dragCircle8, this.hitCircle8_2);    
   }
    if (this.hair7drag) { //h7   
     this.dragCircle9.x = this.game.input.activePointer.x;
     this.dragCircle9.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle9, this.hitCircle9_0);
   game.physics.arcade.collide(this.dragCircle9, this.hitCircle9_1);
   game.physics.arcade.collide(this.dragCircle9, this.hitCircle9_2);    
   }
     if (this.flowerdrag) {//flower
     this.hair1_flowericon1.x = this.game.input.activePointer.x;
     this.hair1_flowericon1.y = this.game.input.activePointer.y;
     this.dragCircle10.x = this.game.input.activePointer.x;
     this.dragCircle10.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_0);
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_1);
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_2);      
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_3);      
   }      
  //u3ddddddddddddd  
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
   //CreateLinksInGame("Elsa-Wedding-Hair-Design","game","logo");
},
moreLink:function()
{
   //CreateLinksInGame("Elsa-Wedding-Hair-Design","game","more");
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


//fffffffffffffff
Main.finalScreen = function(){};
Main.finalScreen.prototype = {
	create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
		 this.levelGroup=game.add.group();

		this.blue_bg = game.add.sprite(0,0,'blue_bg');
		this.bg = game.add.sprite(0,0,'final_bg');
		 
           this.final_veil = game.add.sprite(150,350,"final_veil"+Main.applyCount1[0]);               
		   this.final_veil.anchor.setTo(0.5);
           
        this.elsaGroup=game.add.group();
         this.elsa_backhair1 = game.add.sprite(273,180,"elsa_backhair"+Main.finalVar);          
		 this.elsa_backhair1.anchor.setTo(0.5);
        
        this.elsa_body = game.add.sprite(258,449,"elsa_body");
		this.elsa_body.anchor.setTo(0.5);
        
         this.elsa_eyeblink = game.add.sprite(273, 191, 'elsa_eyeblink');
         this.elsa_eyeblink.anchor.setTo(0.5);
         this.elsa_eyeblink.animations.add('elsa_eyeblink');
  this.elsa_eyeblink.animations.play('elsa_eyeblink', 10, false).onComplete.add(function(){
        this.elsa_eyeblink.frame = 0;
         },this);
         game.time.events.loop(3000, this.updateEyeBlink1, this);
       
        this.elsa_hair1 = game.add.sprite(273,180,"elsa_hair"+Main.finalVar);        
		this.elsa_hair1.anchor.setTo(0.5);
       
       this.elsaGroup.add(this.elsa_backhair1);
       this.elsaGroup.add(this.elsa_body);
       this.elsaGroup.add(this.elsa_eyeblink);
       this.elsaGroup.add(this.elsa_hair1);
        
         this.elsaGroup.x=-120;
         this.elsaGroup.y=30;
        
   if (Main.girlChoosed[1]==1) {
      
        //this.hair1_body = game.add.sprite(360,450,"hair1_body");
        this.hair1_body = game.add.sprite(372,450,"hair1_body");
		this.hair1_body.anchor.setTo(0.5);
		this.hair1_body.scale.setTo(0.5);
      
        this.hair1 = game.add.sprite(370,340,"hair1");
		this.hair1.anchor.setTo(0.5); 
		this.hair1.scale.setTo(0.43);
        
    this.hair1_veil1 = game.add.sprite(380,414,"hair1_veil"+Main.applyCount1[0]);//h1    
    //this.hair1_veil1 = game.add.sprite(373,374,"hair1_veil4");//h1
	this.hair1_veil1.anchor.setTo(0.5); 
	this.hair1_veil1.scale.setTo(0.48);         
          if (Main.applyCount1[0]==1) {
        this.hair1_veil1.x=373;
        this.hair1_veil1.y=354;
       }
       if (Main.applyCount1[0]==2) {
        this.hair1_veil1.x=373;
        this.hair1_veil1.y=375;
       }
         if (Main.applyCount1[0]==3) {
        this.hair1_veil1.x=373;
        this.hair1_veil1.y=355;
       }
        if (Main.applyCount1[0]==4) {
        this.hair1_veil1.x=373;
        this.hair1_veil1.y=374;
       }
     }
  if (Main.girlChoosed[2]==2) {
       //this.hair1_body = game.add.sprite(360,450,"hair1_body");
       this.hair1_body = game.add.sprite(375,450,"hair1_body");
		this.hair1_body.anchor.setTo(0.5);
		this.hair1_body.scale.setTo(0.5);
      
       this.hair1 = game.add.sprite(370,340,"hair2");
		this.hair1.anchor.setTo(0.5); 
		this.hair1.scale.setTo(0.44); 
        
    this.hair1_veil1 = game.add.sprite(385,465,"hair1_veil"+Main.applyCount1[0]);//h2
   //this.hair1_veil1 = game.add.sprite(385,465,"hair1_veil5");
	this.hair1_veil1.anchor.setTo(0.5); 
	this.hair1_veil1.scale.setTo(0.6); 
        if (Main.applyCount1[0]==1) {
        this.hair1_veil1.x=385;
        this.hair1_veil1.y=390;
       }
        if (Main.applyCount1[0]==2) {
        this.hair1_veil1.x=380;
        this.hair1_veil1.y=412;
       }
         if (Main.applyCount1[0]==3) {
        this.hair1_veil1.x=380;
        this.hair1_veil1.y=390;
       }
       if (Main.applyCount1[0]==4) {
        this.hair1_veil1.x=380;
        this.hair1_veil1.y=415;
       } 
      }
  if (Main.girlChoosed[3]==3) {
       // this.hair1_body = game.add.sprite(360,450,"hair1_body");
        this.hair1_body = game.add.sprite(373,450,"hair1_body");
		this.hair1_body.anchor.setTo(0.5);
		this.hair1_body.scale.setTo(0.5);
   
       this.hair1 = game.add.sprite(365,340,"hair3");
		this.hair1.anchor.setTo(0.5); 
		this.hair1.scale.setTo(0.45); 
        
    this.hair1_veil1 = game.add.sprite(378,370,"hair1_veil"+Main.applyCount1[0]);//h3  
  //  this.hair1_veil1 = game.add.sprite(380,407,"hair1_veil5");
	this.hair1_veil1.anchor.setTo(0.5); 
	this.hair1_veil1.scale.setTo(0.45);      
       if (Main.applyCount1[0]==5) {
        this.hair1_veil1.x=380;
        this.hair1_veil1.y=407;
       }
        if (Main.applyCount1[0]==1) {
        this.hair1_veil1.x=378;
        this.hair1_veil1.y=349;
       }
       if (Main.applyCount1[0]==2) {
        this.hair1_veil1.x=378;
        this.hair1_veil1.y=365;
       } 
        if (Main.applyCount1[0]==3) {
        this.hair1_veil1.x=378;
        this.hair1_veil1.y=352;
       } 
        
    }
       
        
               this.levelGroup.add(this.blue_bg);
               this.levelGroup.add(this.hair1_body);
              this.levelGroup.add(this.hair1);
              this.levelGroup.add(this.hair1_veil1);
		       this.levelGroup.add(this.bg);
		       this.levelGroup.add(this.final_veil);
		       this.levelGroup.add(this.elsaGroup);
        
        
        
		game.load.crossOrigin='*';
        this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
        this.thumbVar = game.add.sprite(game.world.centerX, 0, 'thumb_'+this.randomId);
		this.thumbVar.anchor.setTo(0.5);
		this.thumbVar.id = this.randomId;
        this.thumbVar.inputEnabled = true
        this.thumbVar.input.useHandCursor = true;
        this.thumbVar.events.onInputUp.add(thumbLink, this);		
        this.thumbframeVar = game.add.sprite(game.world.centerX, 0, 'Tumpframe');
		this.thumbframeVar.anchor.setTo(0.5);
		
		this.thumbVar.y = game.world.height-(this.thumbVar.height/1.9);
		this.thumbframeVar.y = game.world.height-(this.thumbframeVar.height/1.9);
        this.thumbVar.alpha = 1;
        this.thumbframeVar.alpha = 1;
		
        
		this.morebtn = game.add.sprite(0,0,"morebtn");
		this.morebtn.anchor.setTo(0.5);
		this.morebtn.scale.setTo(0.8);
		this.morebtn.x = this.morebtn.width/1.75;
		this.morebtn.y = game.world.height-(this.morebtn.height/1.8);
		this.morebtn.statusType = "gameover";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		this.donebtn = game.add.sprite(0,0,"resetbtn");
		this.donebtn.anchor.setTo(0.5);
		this.donebtn.scale.setTo(0.8);
		this.donebtn.x = game.world.width-(this.donebtn.width/1.75);
		this.donebtn.y = game.world.height-(this.donebtn.height/1.8);
		this.donebtn.url = "selectionScreen";
		this.donebtn.type = "reset";
		this.donebtn.inputEnabled = true;
		this.donebtn.input.useHandCursor = true;
		this.donebtn.input.pixelPerfectClick = true;
		this.donebtn.input.pixelPerfectOver = true;
		this.donebtn.events.onInputDown.add(stateStart,this);
		this.donebtn.events.onInputOut.add(btnOut,this);
		this.donebtn.events.onInputOver.add(btnOver,this);
		
		
		this.logo = game.add.sprite(0,0,"logo");
		this.logo.anchor.setTo(0.5);
		this.logo.scale.setTo(0.8);
		this.logo.x = this.logo.width/1.85;
		this.logo.y = this.logo.height/1.7;
		this.logo.statusType = "gameover";
		this.logo.inputEnabled = true;
		this.logo.input.useHandCursor = true;
		this.logo.input.pixelPerfectClick = true;
		this.logo.input.pixelPerfectOver = true;
		this.logo.events.onInputDown.add(openLink,this);
		
		this.musicbtn = game.add.sprite(0,0,"soundicon");
		this.musicbtn.anchor.setTo(0.5);
		this.musicbtn.scale.setTo(0.9);
		this.musicbtn.x = game.world.width-(this.musicbtn.width/1.8);
		this.musicbtn.y = this.musicbtn.height/1.9;
		this.musicbtn.inputEnabled = true;
		this.musicbtn.input.useHandCursor = true;
		this.musicbtn.input.pixelPerfectClick = true;
		this.musicbtn.input.pixelPerfectOver = true;
		this.musicbtn.events.onInputDown.add(changeMusic,this);
		
		musicStatus(this.musicbtn);		
		 	addShutter();

	},
 //fdddddddddddd 
updateEyeBlink1:function(){
   this.elsa_eyeblink.play('elsa_eyeblink', 24, false);
   },  
    
};


//d222222222222222
Main.demo2 = function(){}
Main.demo2.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
            
       this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0,0,'room_bg');
        this.levelGroup.add(this.bg);
        
         this.hitCount1 = 0; this.hitCount2 = 0; this.hitCount3 = 0; this.hitCount4 = 0; this.hitCount5 = 0; this.hitCount6 = 0;   this.hitCount7 = 0;  this.hitCount8 = 0;  this.hitCount9 = 0;  this.hitCount10 = 0;  this.hitCount11 = 0;    this.hitCount12 = 0; this.hitCount13 = 0;   this.hitCount14 = 0;    this.hitCount15 = 0;   this.hitCount16 = 0;   this.hitCount17 = 0;  this.hitCount18 = 0;  this.hitCount19 = 0;  this.hitCount20 = 0; 
       
        this.hitCount21 = 0; 
        this.hitCount22 = 0; 
        this.hitCount23 = 0; 
        this.hitCount24 = 0; 
       
          this.combdrag=false;
           this.combdrag2=false;
           this.combdrag3=false;
          this.banddrag1=false;
           this.banddrag2=false;
           this.banddrag3=false;
           this.banddrag4=false;
           this.banddrag5=false;
          this.yellowbanddrag1=false;
           this.hair7drag=false;          
           this.hair9drag=false;          
           this.hair10drag=false;          
           this.hair11drag=false;          
           this.hair12drag=false;          
           this.hair13drag=false;          
           this.hair15drag=false;          
           this.hair16drag=false;          
           this.hair17drag=false;          
           this.hair19drag=false;          
           this.hair20drag=false;          
           this.hair21drag=false;          
           this.hair22drag=false;          
           this.flowerdrag=false;          

          
       // this.hair1_body = game.add.sprite(248.05,620,"hair1_body");
        this.hair1_body = game.add.sprite(268,620,"hair1_body");
		this.hair1_body.anchor.setTo(0.5);
       
        this.design1_1 = game.add.sprite(258,420.7,"design2_1");
		this.design1_1.anchor.setTo(0.5);
		
        this.design1_2 = game.add.sprite(258,420.7,"design2_2");
		this.design1_2.anchor.setTo(0.5);		
		this.design1_2.visible=false;
        
        this.design1_3 = game.add.sprite(258,420.7,"design2_3");//h3
		this.design1_3.anchor.setTo(0.5);		
		this.design1_3.visible=false;
        
        this.design1_4 = game.add.sprite(258,420.7,"design2_4");//h4
		this.design1_4.anchor.setTo(0.5);		
		this.design1_4.visible=false;
        
        this.design1_5 = game.add.sprite(258,420.7,"design2_5");//h5
		this.design1_5.anchor.setTo(0.5);		
		this.design1_5.visible=false;
         
         this.design1_6 = game.add.sprite(258,420.7,"design2_6");//h5
		this.design1_6.anchor.setTo(0.5);		
		this.design1_6.visible=false;
        
        this.design1_7 = game.add.sprite(258,420.7,"design2_7");//h7
		this.design1_7.anchor.setTo(0.5);		
		this.design1_7.visible=false;
       
        this.design1_8 = game.add.sprite(258,420.7,"design2_8");//h8
		this.design1_8.anchor.setTo(0.5);		
		this.design1_8.visible=false; 
        
        this.design1_9 = game.add.sprite(258,420.7,"design2_9");//h9
		this.design1_9.anchor.setTo(0.5);		
		this.design1_9.visible=false; 
         
        this.design1_10 = game.add.sprite(258,420.7,"design2_10");//h10
		this.design1_10.anchor.setTo(0.5);		
		this.design1_10.visible=false; 
         
        this.design1_11 = game.add.sprite(258,420.7,"design2_11");//h11
		this.design1_11.anchor.setTo(0.5);		
        this.design1_11.visible=false; 
         
        this.design1_12 = game.add.sprite(258,420.7,"design2_12");//h12
		this.design1_12.anchor.setTo(0.5);		
		this.design1_12.visible=false; 
         
        this.design1_13 = game.add.sprite(259,420,"design2_13");//h13
		this.design1_13.anchor.setTo(0.5);		
        this.design1_13.visible=false; 
         
        this.design1_14 = game.add.sprite(258,420.7,"design2_14");//h14
		this.design1_14.anchor.setTo(0.5);		
	    this.design1_14.visible=false; 
         
        this.design1_15 = game.add.sprite(258,420.7,"design2_15");//h15
		this.design1_15.anchor.setTo(0.5);		
	    this.design1_15.visible=false; 
         
        this.design1_16 = game.add.sprite(258,420.7,"design2_16");//h16
		this.design1_16.anchor.setTo(0.5);		
	    this.design1_16.visible=false; 
         
        this.design1_17 = game.add.sprite(258,420.7,"design2_17");//h17
		this.design1_17.anchor.setTo(0.5);		
	    this.design1_17.visible=false; 
         
        this.design1_18 = game.add.sprite(258,420.7,"design2_18");//h18
		this.design1_18.anchor.setTo(0.5);		
	    this.design1_18.visible=false; 
         
        this.design1_19 = game.add.sprite(258,420.7,"design2_19");//h19
		this.design1_19.anchor.setTo(0.5);		
	    this.design1_19.visible=false;  
         
        this.design1_20 = game.add.sprite(258,420.7,"design2_20");//h20
		this.design1_20.anchor.setTo(0.5);		
	    this.design1_20.visible=false;   
         
        this.design1_21 = game.add.sprite(258,420.7,"design2_21");//h21
		this.design1_21.anchor.setTo(0.5);		
	    this.design1_21.visible=false;   
         
        this.design1_22 = game.add.sprite(258,420.7,"design2_22");//h22
		this.design1_22.anchor.setTo(0.5);		
	    this.design1_22.visible=false;   
         
        this.design1_23 = game.add.sprite(258,420.7,"design2_23");//h23
		this.design1_23.anchor.setTo(0.5);		
	    this.design1_23.visible=false;   
         
        this.hair2 = game.add.sprite(269,435.35,"hair2");
		this.hair2.anchor.setTo(0.5); 
		this.hair2.visible=false;
         //eh22222222222
          this.extra_hair1 = game.add.sprite(150,500,"extra_hair1");
		this.extra_hair1.anchor.setTo(0.5); 
        
        this.extra_hair2 = game.add.sprite(250,500,"extra_hair2");
		this.extra_hair2.anchor.setTo(0.5); 
        
        this.extra_hair3 = game.add.sprite(350,500,"extra_hair3");
		this.extra_hair3.anchor.setTo(0.5); 
        
        this.comb_line1 = game.add.sprite(150,420,'comb_line');
        this.comb_line1.anchor.setTo(0.5);
        this.comb_line1.scale.setTo(0.7);
        this.comb_line1.animations.add("comb_line1");
        this.comb_line1.animations.play("comb_line1",30,true,true);
        this.comb_line1.visible=false;
        
         this.comb_line2 = game.add.sprite(250,400,'comb_line');
         this.comb_line2.anchor.setTo(0.5);
         this.comb_line2.scale.setTo(0.7);
         this.comb_line2.animations.add("comb_line2");
         this.comb_line2.animations.play("comb_line2",30,true,true);
         this.comb_line2.visible=false;
        
        this.comb_line3 = game.add.sprite(350,400,'comb_line');
        this.comb_line3.anchor.setTo(0.5);
        this.comb_line3.scale.setTo(0.7);
        this.comb_line3.animations.add("comb_line3");
        this.comb_line3.animations.play("comb_line3",30,true,true);
        this.comb_line3.visible=false;
      
        this.designGroup=game.add.group();
     
        this.design_panel = game.add.sprite(252,755,"design_panel");
		this.design_panel.anchor.setTo(0.5);
      
         this.design_icon1 = game.add.sprite(76.05,670, 'design_icon1');
         this.design_icon1.anchor.setTo(0.5);
         this.design_icon1.inputEnabled = true;        
         this.design_icon1.input.useHandCursor = true;        
         this.design_icon1.events.onInputUp.add(this.icon1Fun1, this);
         this.design_icon1.events.onInputOut.add(btnOut,this);
		 this.design_icon1.events.onInputOver.add(btnOver,this);
         
         this.design_icon11 = game.add.sprite(76.05,670, 'design_icon1');
         this.design_icon11.anchor.setTo(0.5);
         this.design_icon11.scale.setTo(0);
        
        this.design_icon2 = game.add.sprite(460,670,"design_icon3");
		this.design_icon2.anchor.setTo(0.5);
		
         this.design_icon3 = game.add.sprite(295,670,"design_icon2");
		 this.design_icon3.anchor.setTo(0.5);
         this.design_icon3.inputEnabled = false;        
         this.design_icon3.events.onInputUp.add(this.icon3Fun1, this);
         this.design_icon3.events.onInputOut.add(btnOut,this);
		 this.design_icon3.events.onInputOver.add(btnOver,this);
       
         this.design_icon33 = game.add.sprite(295,670,"design_icon2");
		 this.design_icon33.anchor.setTo(0.5);
		 this.design_icon33.visible=false;
        
         this.design_icon4 = game.add.sprite(370,668,"design_icon4");
	     this.design_icon4.anchor.setTo(0.5);
         this.design_icon4.inputEnabled = false;          
         this.design_icon4.events.onInputUp.add(this.icon4Fun1, this);
         this.design_icon4.events.onInputOut.add(btnOut,this);
		 this.design_icon4.events.onInputOver.add(btnOver,this);
         
          this.design_icon44 = game.add.sprite(370,668,"design_icon4");
	     this.design_icon44.anchor.setTo(0.5);
	     this.design_icon44.visible=false;
         this.design_icon44.inputEnabled = false;          
         this.design_icon44.events.onInputUp.add(this.icon4Fun2, this);
         this.design_icon44.events.onInputOut.add(btnOut,this);
		 this.design_icon44.events.onInputOver.add(btnOver,this);
         
         this.design_icon444 = game.add.sprite(370,668,"design_icon4");
	     this.design_icon444.anchor.setTo(0.5);
	     this.design_icon444.visible=false;
        
         this.hair1_flowericon1 = game.add.sprite(210,672.8,"hair2_flowericon");
		 this.hair1_flowericon1.anchor.setTo(0.5);
         this.hair1_flowericon1.inputEnabled = false;          
         this.hair1_flowericon1.events.onInputUp.add(this.flowerFun1, this);
         this.hair1_flowericon1.events.onInputOut.add(btnOut,this);
		 this.hair1_flowericon1.events.onInputOver.add(btnOver,this);
         
        //comb1 
        this.hitGroup = game.add.group();
      for(var i=0; i<=Main.hair2VarX.length-1; i++)
      {
      this["hitCircle1_"+i] = game.add.graphics(Main.hair2VarX[i],Main.hair2VarY[i]);
      this["hitCircle1_"+i].beginFill(0x0000FF,0);
      this["hitCircle1_"+i].drawCircle(0,0,25);
      this["hitCircle1_"+i].id = i;
      this.hitGroup.add(this["hitCircle1_"+i]);
      game.physics.arcade.enable([this["hitCircle1_"+i]]);
      this["hitCircle1_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle = game.add.graphics(0,0);
      this.dragCircle.beginFill(0xFF0000, 0);
      this.dragCircle.drawCircle(0,0,60);
      this.dragCircle.endFill(); 
      
        game.physics.arcade.enable([this.dragCircle]);      
      this.dragCircle.body.collideWorldBounds = true;      
      this.dragCircle.body.onCollide = new Phaser.Signal();
      this.dragCircle.body.onCollide.add(this.hitSprite, this);
  // comb1  
  // comb2  
     this.hitGroup2 = game.add.group();
      for(var i=0; i<=Main.hair2VarX2.length-1; i++)
      {
      this["hitCircle2_"+i] = game.add.graphics(Main.hair2VarX2[i],Main.hair2VarY2[i]);
      this["hitCircle2_"+i].beginFill(0x0000FF,0);
      this["hitCircle2_"+i].drawCircle(0,0,25);
      this["hitCircle2_"+i].id = i;
      this.hitGroup2.add(this["hitCircle2_"+i]);
      game.physics.arcade.enable([this["hitCircle2_"+i]]);
      this["hitCircle2_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle2 = game.add.graphics(0,0);
      this.dragCircle2.beginFill(0xFF0000, 0);
      this.dragCircle2.drawCircle(0,0,60);
      this.dragCircle2.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle2]);      
      this.dragCircle2.body.collideWorldBounds = true;      
      this.dragCircle2.body.onCollide = new Phaser.Signal();
      this.dragCircle2.body.onCollide.add(this.hitSprite2, this);
    //comb2
     // comb3
     this.hitGroup3 = game.add.group();
      for(var i=0; i<=Main.hair2VarX3.length-1; i++)
      {
      this["hitCircle3_"+i] = game.add.graphics(Main.hair2VarX3[i],Main.hair2VarY3[i]);
      this["hitCircle3_"+i].beginFill(0x0000FF,0);
      this["hitCircle3_"+i].drawCircle(0,0,25);
      this["hitCircle3_"+i].id = i;
      this.hitGroup3.add(this["hitCircle3_"+i]);
      game.physics.arcade.enable([this["hitCircle3_"+i]]);
      this["hitCircle3_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle3 = game.add.graphics(0,0);
      this.dragCircle3.beginFill(0xFF0000, 0);
      this.dragCircle3.drawCircle(0,0,60);
      this.dragCircle3.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle3]);      
      this.dragCircle3.body.collideWorldBounds = true;      
      this.dragCircle3.body.onCollide = new Phaser.Signal();
      this.dragCircle3.body.onCollide.add(this.hitSprite3, this);
    //comb3 
        
       // clip1
     this.hitGroup4 = game.add.group();
      for(var i=0; i<=Main.hair2VarX4.length-1; i++)
      {
      this["hitCircle4_"+i] = game.add.graphics(Main.hair2VarX4[i],Main.hair2VarY4[i]);
      this["hitCircle4_"+i].beginFill(0x0000FF,0);
      this["hitCircle4_"+i].drawCircle(0,0,100);
      this["hitCircle4_"+i].id = i;
      this.hitGroup4.add(this["hitCircle4_"+i]);
      game.physics.arcade.enable([this["hitCircle4_"+i]]);
      this["hitCircle4_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle4 = game.add.graphics(0,0);
      this.dragCircle4.beginFill(0xFF0000, 0);
      this.dragCircle4.drawCircle(0,0,60);
      this.dragCircle4.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle4]);      
      this.dragCircle4.body.collideWorldBounds = true;      
      this.dragCircle4.body.onCollide = new Phaser.Signal();
      this.dragCircle4.body.onCollide.add(this.hitSprite4, this);
    //clip1
      // clip2
     this.hitGroup5 = game.add.group();
      for(var i=0; i<=Main.hair2VarX5.length-1; i++)
      {
      this["hitCircle5_"+i] = game.add.graphics(Main.hair2VarX5[i],Main.hair2VarY5[i]);
      this["hitCircle5_"+i].beginFill(0x0000FF,0);
      this["hitCircle5_"+i].drawCircle(0,0,100);
      this["hitCircle5_"+i].id = i;
      this.hitGroup5.add(this["hitCircle5_"+i]);
      game.physics.arcade.enable([this["hitCircle5_"+i]]);
      this["hitCircle5_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle5 = game.add.graphics(0,0);
      this.dragCircle5.beginFill(0xFF0000, 0);
      this.dragCircle5.drawCircle(0,0,60);
      this.dragCircle5.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle5]);      
      this.dragCircle5.body.collideWorldBounds = true;      
      this.dragCircle5.body.onCollide = new Phaser.Signal();
      this.dragCircle5.body.onCollide.add(this.hitSprite5, this);
    //clip2  
         // hair3
     this.hitGroup6 = game.add.group();
      for(var i=0; i<=Main.hair2VarX6.length-1; i++)
      {
      this["hitCircle6_"+i] = game.add.graphics(Main.hair2VarX6[i],Main.hair2VarY6[i]);
      this["hitCircle6_"+i].beginFill(0x0000FF,0);
      this["hitCircle6_"+i].drawCircle(0,0,30);
      this["hitCircle6_"+i].id = i;
      this.hitGroup6.add(this["hitCircle6_"+i]);
      game.physics.arcade.enable([this["hitCircle6_"+i]]);
      this["hitCircle6_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle6 = game.add.graphics(0,0);
      this.dragCircle6.beginFill(0xFF0000, 0);
      this.dragCircle6.drawCircle(0,0,25);
      this.dragCircle6.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle6]);      
      this.dragCircle6.body.collideWorldBounds = true;      
      this.dragCircle6.body.onCollide = new Phaser.Signal();
      this.dragCircle6.body.onCollide.add(this.hitSprite6, this);
    //hair3
    // hair4
     this.hitGroup7 = game.add.group();
      for(var i=0; i<=Main.hair2VarX7.length-1; i++)
      {
      this["hitCircle7_"+i] = game.add.graphics(Main.hair2VarX7[i],Main.hair2VarY7[i]);
      this["hitCircle7_"+i].beginFill(0x0000FF,0);
      this["hitCircle7_"+i].drawCircle(0,0,18);
      this["hitCircle7_"+i].id = i;
      this.hitGroup7.add(this["hitCircle7_"+i]);
      game.physics.arcade.enable([this["hitCircle7_"+i]]);
      this["hitCircle7_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle7 = game.add.graphics(0,0);
      this.dragCircle7.beginFill(0xFF0000, 0);
      this.dragCircle7.drawCircle(0,0,10);
      this.dragCircle7.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle7]);      
      this.dragCircle7.body.collideWorldBounds = true;      
      this.dragCircle7.body.onCollide = new Phaser.Signal();
      this.dragCircle7.body.onCollide.add(this.hitSprite7, this);
    //hair4
     // hair5
     this.hitGroup8 = game.add.group();
      for(var i=0; i<=Main.hair2VarX8.length-1; i++)
      {
      this["hitCircle8_"+i] = game.add.graphics(Main.hair2VarX8[i],Main.hair2VarY8[i]);
      this["hitCircle8_"+i].beginFill(0x0000FF,0);
      this["hitCircle8_"+i].drawCircle(0,0,18);
      this["hitCircle8_"+i].id = i;
      this.hitGroup8.add(this["hitCircle8_"+i]);
      game.physics.arcade.enable([this["hitCircle8_"+i]]);
      this["hitCircle8_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle8 = game.add.graphics(0,0);
      this.dragCircle8.beginFill(0xFF0000, 0);
      this.dragCircle8.drawCircle(0,0,10);
      this.dragCircle8.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle8]);      
      this.dragCircle8.body.collideWorldBounds = true;      
      this.dragCircle8.body.onCollide = new Phaser.Signal();
      this.dragCircle8.body.onCollide.add(this.hitSprite8, this);
    //hair5   
       //yellowband
     this.hitGroup10 = game.add.group();
      for(var i=0; i<=Main.hair2VarX10.length-1; i++)
      {
      this["hitCircle10_"+i] = game.add.graphics(Main.hair2VarX10[i],Main.hair2VarY10[i]);
      this["hitCircle10_"+i].beginFill(0x0000FF,0);
      this["hitCircle10_"+i].drawCircle(0,0,40);
      this["hitCircle10_"+i].id = i;
      this.hitGroup10.add(this["hitCircle10_"+i]);
      game.physics.arcade.enable([this["hitCircle10_"+i]]);
      this["hitCircle10_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle10 = game.add.graphics(0,0);
      this.dragCircle10.beginFill(0xFF0000, 0);
      this.dragCircle10.drawCircle(0,0,10);
      this.dragCircle10.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle10]);      
      this.dragCircle10.body.collideWorldBounds = true;      
      this.dragCircle10.body.onCollide = new Phaser.Signal();
      this.dragCircle10.body.onCollide.add(this.hitSprite10, this);
    //  
 //hair7
     this.hitGroup11 = game.add.group();
      for(var i=0; i<=Main.hair2VarX11.length-1; i++)
      {
      this["hitCircle11_"+i] = game.add.graphics(Main.hair2VarX11[i],Main.hair2VarY11[i]);
      this["hitCircle11_"+i].beginFill(0x0000FF,0);
      this["hitCircle11_"+i].drawCircle(0,0,18);
      this["hitCircle11_"+i].id = i;
      this.hitGroup11.add(this["hitCircle11_"+i]);
      game.physics.arcade.enable([this["hitCircle11_"+i]]);
      this["hitCircle11_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle11 = game.add.graphics(0,0);
      this.dragCircle11.beginFill(0xFF0000, 0);
      this.dragCircle11.drawCircle(0,0,10);
      this.dragCircle11.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle11]);      
      this.dragCircle11.body.collideWorldBounds = true;      
      this.dragCircle11.body.onCollide = new Phaser.Signal();
      this.dragCircle11.body.onCollide.add(this.hitSprite11, this);
    //hair7
     //hair9
     this.hitGroup12 = game.add.group();
      for(var i=0; i<=Main.hair2VarX12.length-1; i++)
      {
      this["hitCircle12_"+i] = game.add.graphics(Main.hair2VarX12[i],Main.hair2VarY12[i]);
      this["hitCircle12_"+i].beginFill(0x0000FF,0);
      this["hitCircle12_"+i].drawCircle(0,0,18);
      this["hitCircle12_"+i].id = i;
      this.hitGroup12.add(this["hitCircle12_"+i]);
      game.physics.arcade.enable([this["hitCircle12_"+i]]);
      this["hitCircle12_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle12 = game.add.graphics(0,0);
      this.dragCircle12.beginFill(0xFF0000, 0);
      this.dragCircle12.drawCircle(0,0,10);
      this.dragCircle12.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle12]);      
      this.dragCircle12.body.collideWorldBounds = true;      
      this.dragCircle12.body.onCollide = new Phaser.Signal();
      this.dragCircle12.body.onCollide.add(this.hitSprite12, this);
    //hair9
    //hair10
     this.hitGroup13 = game.add.group();
      for(var i=0; i<=Main.hair2VarX13.length-1; i++)
      {
      this["hitCircle13_"+i] = game.add.graphics(Main.hair2VarX13[i],Main.hair2VarY13[i]);
      this["hitCircle13_"+i].beginFill(0x0000FF,0);
      this["hitCircle13_"+i].drawCircle(0,0,18);
      this["hitCircle13_"+i].id = i;
      this.hitGroup13.add(this["hitCircle13_"+i]);
      game.physics.arcade.enable([this["hitCircle13_"+i]]);
      this["hitCircle13_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle13 = game.add.graphics(0,0);
      this.dragCircle13.beginFill(0xFF0000, 0);
      this.dragCircle13.drawCircle(0,0,10);
      this.dragCircle13.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle13]);      
      this.dragCircle13.body.collideWorldBounds = true;      
      this.dragCircle13.body.onCollide = new Phaser.Signal();
      this.dragCircle13.body.onCollide.add(this.hitSprite13, this);
    //hair10
     //hair11
     this.hitGroup14 = game.add.group();
      for(var i=0; i<=Main.hair2VarX14.length-1; i++)
      {
      this["hitCircle14_"+i] = game.add.graphics(Main.hair2VarX14[i],Main.hair2VarY14[i]);
      this["hitCircle14_"+i].beginFill(0x0000FF,0);
      this["hitCircle14_"+i].drawCircle(0,0,18);
      this["hitCircle14_"+i].id = i;
      this.hitGroup14.add(this["hitCircle14_"+i]);
      game.physics.arcade.enable([this["hitCircle14_"+i]]);
      this["hitCircle14_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle14 = game.add.graphics(0,0);
      this.dragCircle14.beginFill(0xFF0000, 0);
      this.dragCircle14.drawCircle(0,0,10);
      this.dragCircle14.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle14]);      
      this.dragCircle14.body.collideWorldBounds = true;      
      this.dragCircle14.body.onCollide = new Phaser.Signal();
      this.dragCircle14.body.onCollide.add(this.hitSprite14, this);
    //hair11
    //hair12
     this.hitGroup15 = game.add.group();
      for(var i=0; i<=Main.hair2VarX15.length-1; i++)
      {
      this["hitCircle15_"+i] = game.add.graphics(Main.hair2VarX15[i],Main.hair2VarY15[i]);
      this["hitCircle15_"+i].beginFill(0x0000FF,0);
      this["hitCircle15_"+i].drawCircle(0,0,18);
      this["hitCircle15_"+i].id = i;
      this.hitGroup15.add(this["hitCircle15_"+i]);
      game.physics.arcade.enable([this["hitCircle15_"+i]]);
      this["hitCircle15_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle15 = game.add.graphics(0,0);
      this.dragCircle15.beginFill(0xFF0000, 0);
      this.dragCircle15.drawCircle(0,0,10);
      this.dragCircle15.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle15]);      
      this.dragCircle15.body.collideWorldBounds = true;      
      this.dragCircle15.body.onCollide = new Phaser.Signal();
      this.dragCircle15.body.onCollide.add(this.hitSprite15, this);
    //hair12
    //hair13
     this.hitGroup16 = game.add.group();
      for(var i=0; i<=Main.hair2VarX16.length-1; i++)
      {
      this["hitCircle16_"+i] = game.add.graphics(Main.hair2VarX16[i],Main.hair2VarY16[i]);
      this["hitCircle16_"+i].beginFill(0x0000FF,0);
      this["hitCircle16_"+i].drawCircle(0,0,40);
      this["hitCircle16_"+i].id = i;
      this.hitGroup16.add(this["hitCircle16_"+i]);
      game.physics.arcade.enable([this["hitCircle16_"+i]]);
      this["hitCircle16_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle16 = game.add.graphics(0,0);
      this.dragCircle16.beginFill(0xFF0000, 0);
      this.dragCircle16.drawCircle(0,0,10);
      this.dragCircle16.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle16]);      
      this.dragCircle16.body.collideWorldBounds = true;      
      this.dragCircle16.body.onCollide = new Phaser.Signal();
      this.dragCircle16.body.onCollide.add(this.hitSprite16, this);
    //hair13
    //hair15
     this.hitGroup17 = game.add.group();
      for(var i=0; i<=Main.hair2VarX17.length-1; i++)
      {
      this["hitCircle17_"+i] = game.add.graphics(Main.hair2VarX17[i],Main.hair2VarY17[i]);
      this["hitCircle17_"+i].beginFill(0x0000FF,0);
      this["hitCircle17_"+i].drawCircle(0,0,20);
      this["hitCircle17_"+i].id = i;
      this.hitGroup17.add(this["hitCircle17_"+i]);
      game.physics.arcade.enable([this["hitCircle17_"+i]]);
      this["hitCircle17_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle17 = game.add.graphics(0,0);
      this.dragCircle17.beginFill(0xFF0000, 0);
      this.dragCircle17.drawCircle(0,0,10);
      this.dragCircle17.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle17]);      
      this.dragCircle17.body.collideWorldBounds = true;      
      this.dragCircle17.body.onCollide = new Phaser.Signal();
      this.dragCircle17.body.onCollide.add(this.hitSprite17, this);
    //hair15
     //hair16
     this.hitGroup18 = game.add.group();
      for(var i=0; i<=Main.hair2VarX18.length-1; i++)
      {
      this["hitCircle18_"+i] = game.add.graphics(Main.hair2VarX18[i],Main.hair2VarY18[i]);
      this["hitCircle18_"+i].beginFill(0x0000FF,0);
      this["hitCircle18_"+i].drawCircle(0,0,20);
      this["hitCircle18_"+i].id = i;
      this.hitGroup18.add(this["hitCircle18_"+i]);
      game.physics.arcade.enable([this["hitCircle18_"+i]]);
      this["hitCircle18_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle18 = game.add.graphics(0,0);
      this.dragCircle18.beginFill(0xFF0000, 0);
      this.dragCircle18.drawCircle(0,0,10);
      this.dragCircle18.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle18]);      
      this.dragCircle18.body.collideWorldBounds = true;      
      this.dragCircle18.body.onCollide = new Phaser.Signal();
      this.dragCircle18.body.onCollide.add(this.hitSprite18, this);
    //hair16
     //hair17
     this.hitGroup19 = game.add.group();
      for(var i=0; i<=Main.hair2VarX19.length-1; i++)
      {
      this["hitCircle19_"+i] = game.add.graphics(Main.hair2VarX19[i],Main.hair2VarY19[i]);
      this["hitCircle19_"+i].beginFill(0x0000FF,0);
      this["hitCircle19_"+i].drawCircle(0,0,20);
      this["hitCircle19_"+i].id = i;
      this.hitGroup19.add(this["hitCircle19_"+i]);
      game.physics.arcade.enable([this["hitCircle19_"+i]]);
      this["hitCircle19_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle19 = game.add.graphics(0,0);
      this.dragCircle19.beginFill(0xFF0000, 0);
      this.dragCircle19.drawCircle(0,0,10);
      this.dragCircle19.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle19]);      
      this.dragCircle19.body.collideWorldBounds = true;      
      this.dragCircle19.body.onCollide = new Phaser.Signal();
      this.dragCircle19.body.onCollide.add(this.hitSprite19, this);
    //hair17    
 //hair19
     this.hitGroup20 = game.add.group();
      for(var i=0; i<=Main.hair2VarX20.length-1; i++)
      {
      this["hitCircle20_"+i] = game.add.graphics(Main.hair2VarX20[i],Main.hair2VarY20[i]);
      this["hitCircle20_"+i].beginFill(0x0000FF,0);
      this["hitCircle20_"+i].drawCircle(0,0,20);
      this["hitCircle20_"+i].id = i;
      this.hitGroup20.add(this["hitCircle20_"+i]);
      game.physics.arcade.enable([this["hitCircle20_"+i]]);
      this["hitCircle20_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle20 = game.add.graphics(0,0);
      this.dragCircle20.beginFill(0xFF0000, 0);
      this.dragCircle20.drawCircle(0,0,10);
      this.dragCircle20.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle20]);      
      this.dragCircle20.body.collideWorldBounds = true;      
      this.dragCircle20.body.onCollide = new Phaser.Signal();
      this.dragCircle20.body.onCollide.add(this.hitSprite20, this);
    //hair19
     //hair20
     this.hitGroup21 = game.add.group();
      for(var i=0; i<=Main.hair2VarX21.length-1; i++)
      {
      this["hitCircle21_"+i] = game.add.graphics(Main.hair2VarX21[i],Main.hair2VarY21[i]);
      this["hitCircle21_"+i].beginFill(0x0000FF,0);
      this["hitCircle21_"+i].drawCircle(0,0,18);
      this["hitCircle21_"+i].id = i;
      this.hitGroup21.add(this["hitCircle21_"+i]);
      game.physics.arcade.enable([this["hitCircle21_"+i]]);
      this["hitCircle21_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle21 = game.add.graphics(0,0);
      this.dragCircle21.beginFill(0xFF0000, 0);
      this.dragCircle21.drawCircle(0,0,10);
      this.dragCircle21.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle21]);      
      this.dragCircle21.body.collideWorldBounds = true;      
      this.dragCircle21.body.onCollide = new Phaser.Signal();
      this.dragCircle21.body.onCollide.add(this.hitSprite21, this);
    //hair20
     //hair21
     this.hitGroup22 = game.add.group();
      for(var i=0; i<=Main.hair2VarX22.length-1; i++)
      {
      this["hitCircle22_"+i] = game.add.graphics(Main.hair2VarX22[i],Main.hair2VarY22[i]);
      this["hitCircle22_"+i].beginFill(0x0000FF,0);
      this["hitCircle22_"+i].drawCircle(0,0,18);
      this["hitCircle22_"+i].id = i;
      this.hitGroup22.add(this["hitCircle22_"+i]);
      game.physics.arcade.enable([this["hitCircle22_"+i]]);
      this["hitCircle22_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle22 = game.add.graphics(0,0);
      this.dragCircle22.beginFill(0xFF0000, 0);
      this.dragCircle22.drawCircle(0,0,10);
      this.dragCircle22.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle22]);      
      this.dragCircle22.body.collideWorldBounds = true;      
      this.dragCircle22.body.onCollide = new Phaser.Signal();
      this.dragCircle22.body.onCollide.add(this.hitSprite22, this);
    //hair21
    //hair22
     this.hitGroup23 = game.add.group();
      for(var i=0; i<=Main.hair2VarX23.length-1; i++)
      {
      this["hitCircle23_"+i] = game.add.graphics(Main.hair2VarX23[i],Main.hair2VarY23[i]);
      this["hitCircle23_"+i].beginFill(0x0000FF,0);
      this["hitCircle23_"+i].drawCircle(0,0,18);
      this["hitCircle23_"+i].id = i;
      this.hitGroup23.add(this["hitCircle23_"+i]);
      game.physics.arcade.enable([this["hitCircle23_"+i]]);
      this["hitCircle23_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle23 = game.add.graphics(0,0);
      this.dragCircle23.beginFill(0xFF0000, 0);
      this.dragCircle23.drawCircle(0,0,10);
      this.dragCircle23.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle23]);      
      this.dragCircle23.body.collideWorldBounds = true;      
      this.dragCircle23.body.onCollide = new Phaser.Signal();
      this.dragCircle23.body.onCollide.add(this.hitSprite23, this);
    //hair22    
 //hair23
     this.hitGroup24 = game.add.group();
      for(var i=0; i<=Main.hair2VarX24.length-1; i++)
      {
      this["hitCircle24_"+i] = game.add.graphics(Main.hair2VarX24[i],Main.hair2VarY24[i]);
      this["hitCircle24_"+i].beginFill(0x0000FF,0);
      this["hitCircle24_"+i].drawCircle(0,0,300);
      this["hitCircle24_"+i].id = i;
      this.hitGroup24.add(this["hitCircle24_"+i]);
      game.physics.arcade.enable([this["hitCircle24_"+i]]);
      this["hitCircle24_"+i].body.collideWorldBounds = true;
      }
    
      this.dragCircle24 = game.add.graphics(0,0);
      this.dragCircle24.beginFill(0xFF0000, 0);
      this.dragCircle24.drawCircle(0,0,10);
      this.dragCircle24.endFill(); 
      
      game.physics.arcade.enable([this.dragCircle24]);      
      this.dragCircle24.body.collideWorldBounds = true;      
      this.dragCircle24.body.onCollide = new Phaser.Signal();
      this.dragCircle24.body.onCollide.add(this.hitSprite24, this);
    //hair23
    //d2hhhhhhhhhhh
    
         this.morebtn = game.add.sprite(50,745,"morebtn");
		this.morebtn.anchor.setTo(0.5);		
		this.morebtn.statusType = "game";
		this.morebtn.inputEnabled = true;
		this.morebtn.input.useHandCursor = true;
		this.morebtn.input.pixelPerfectClick = true;
		this.morebtn.input.pixelPerfectOver = true;
		this.morebtn.events.onInputDown.add(moreLink,this);
		this.morebtn.events.onInputOut.add(btnOut,this);
		this.morebtn.events.onInputOver.add(btnOver,this);
		
		this.donebtn = game.add.sprite(455,745,"donebtn");
		this.donebtn.anchor.setTo(0.5);				
		this.donebtn.scale.setTo(0);				  
		this.donebtn.url = "hair2";
		this.donebtn.inputEnabled = true;
		this.donebtn.input.useHandCursor = true;
		this.donebtn.input.pixelPerfectClick = true;
		this.donebtn.input.pixelPerfectOver = true;
		this.donebtn.events.onInputDown.add(stateStart,this);
		this.donebtn.events.onInputOut.add(btnOut,this);
		this.donebtn.events.onInputOver.add(btnOver,this);
        
         this.arrowbtn = game.add.sprite(122,590,'arrowbtn');
         this.arrowbtn.anchor.setTo(0.5);
         this.arrowbtn.angle=320;             
         game.add.tween(this.arrowbtn).to({x:this.arrowbtn.x-5,y:this.arrowbtn.y+5}, 500, "Linear", true,0,-1).yoyo(true);
        
          this.arrowbtn2 = game.add.sprite(375,590,'arrowbtn');
         this.arrowbtn2.anchor.setTo(0.5);
         this.arrowbtn2.visible=false;
         this.arrowbtn2.angle=320;             
         game.add.tween(this.arrowbtn2).to({x:this.arrowbtn2.x-5,y:this.arrowbtn2.y+5}, 500, "Linear", true,0,-1).yoyo(true);
         
           this.arrowbtn3 = game.add.sprite(300,320,'arrowbtn');
         this.arrowbtn3.anchor.setTo(0.5);
         this.arrowbtn3.visible=false;
         this.arrowbtn3.angle=230;             
         game.add.tween(this.arrowbtn3).to({x:this.arrowbtn3.x-5,y:this.arrowbtn3.y+5}, 500, "Linear", true,0,-1).yoyo(true);
         
          this.arrowbtn4 = game.add.sprite(375,590,'arrowbtn');
         this.arrowbtn4.anchor.setTo(0.5);
         this.arrowbtn4.visible=false;
         this.arrowbtn4.angle=320;             
         game.add.tween(this.arrowbtn4).to({x:this.arrowbtn4.x-5,y:this.arrowbtn4.y+5}, 500, "Linear", true,0,-1).yoyo(true);
     
         this.arrowbtn5 = game.add.sprite(290,450,'arrowbtn');
         this.arrowbtn5.anchor.setTo(0.5);
         this.arrowbtn5.visible=false;
         this.arrowbtn5.angle=320;             
         game.add.tween(this.arrowbtn5).to({x:this.arrowbtn5.x-5,y:this.arrowbtn5.y+5}, 500, "Linear", true,0,-1).yoyo(true);
         
           this.arrowbtn6 = game.add.sprite(300,600,'arrowbtn');
         this.arrowbtn6.anchor.setTo(0.5);
         this.arrowbtn6.visible=false;
         this.arrowbtn6.angle=320;             
         game.add.tween(this.arrowbtn6).to({x:this.arrowbtn6.x-5,y:this.arrowbtn6.y+5}, 500, "Linear", true,0,-1).yoyo(true);
         
         this.arrowbtn7 = game.add.sprite(300,297,'arrowbtn');
         this.arrowbtn7.anchor.setTo(0.5);
         this.arrowbtn7.visible=false;
         this.arrowbtn7.angle=320;             
         game.add.tween(this.arrowbtn7).to({x:this.arrowbtn7.x-5,y:this.arrowbtn7.y+5}, 500, "Linear", true,0,-1).yoyo(true);
         
         this.arrowbtn8 = game.add.sprite(211,600,'arrowbtn');
         this.arrowbtn8.anchor.setTo(0.5);
         this.arrowbtn8.visible=false;
         this.arrowbtn8.angle=320;             
         game.add.tween(this.arrowbtn8).to({x:this.arrowbtn8.x-5,y:this.arrowbtn8.y+5}, 500, "Linear", true,0,-1).yoyo(true);
         
         
         
         
         
         
         
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
             addShutter();
        },
        
 //d2ddddddddddd
  flowerFun1:function(){
       this.arrowbtn8.visible=false;
   this.flowerdrag=true;   
   this.hair1_flowericon1.inputEnabled = false;
   },    
  icon3Fun1:function(){
    this.arrowbtn6.visible=false;
    this.arrowbtn7.visible=true;
        this.yellowbanddrag1=true;
     this.design_icon3.inputEnabled = false;
      
 },       
 icon4Fun2:function(){
    this.arrowbtn5.visible=true;
     this.arrowbtn4.visible=false;
        this.banddrag2=true;
     this.design_icon44.inputEnabled = false;
      
 },      
 icon4Fun1:function(){
    this.arrowbtn3.visible=true;
     this.arrowbtn2.visible=false;
        this.banddrag1=true;
     this.design_icon4.inputEnabled = false;
      
 },
 icon1Fun1:function(){
          this.combdrag=true;     
   this.arrowbtn.visible = false;
   this.design_icon1.inputEnabled = false;
   this.comb_line1.visible=true;   
         },
 hitSprite24:function(sprite1, sprite2){//flower
   if (sprite2.id==this.hitCount24){      
      sprite2.kill();
      this.hitCount24++;
   }    
if (this.hitCount24 >= Main.hair2VarX24.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];    
     this.hair2.visible=true;
     this.design1_23.visible=false;
     this.hair1_flowericon1.visible=false;
     this.flowerdrag=false;
     this.dragCircle24=false; 
        game.add.tween(this.donebtn.scale).to({x:1,y:1},500,Phaser.Easing.Quadratic.Out,true);
     }     
},             
 hitSprite23:function(sprite1, sprite2){//hair22
   if (sprite2.id==this.hitCount23){      
      sprite2.kill();
      this.hitCount23++;
   }    
if (this.hitCount23 >= Main.hair2VarX23.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];    
     this.design1_23.visible=true;
     this.design1_22.visible=false;
     this.hair22drag=false;
     this.dragCircle23=false;     
        this.arrowbtn8.visible=true;
         this.hair1_flowericon1.inputEnabled = true;
         this.hair1_flowericon1.input.useHandCursor = true;
     }     
},                   
hitSprite22:function(sprite1, sprite2){//hair21
   if (sprite2.id==this.hitCount22){      
      sprite2.kill();
      this.hitCount22++;
   }    
if (this.hitCount22 >= Main.hair2VarX22.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];    
     this.design1_22.visible=true;
     this.design1_21.visible=false;
     this.hair21drag=false;
     this.dragCircle22=false; 
        this.hair22drag=true;
     }     
},             
  hitSprite21:function(sprite1, sprite2){//hair20
   if (sprite2.id==this.hitCount21){      
      sprite2.kill();
      this.hitCount21++;
   }    
if (this.hitCount21 >= Main.hair2VarX21.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];    
     this.design1_21.visible=true;
     this.design1_20.visible=false;
     this.hair20drag=false;
     this.dragCircle21=false; 
       this.hair21drag=true;
     }     
},          
 hitSprite20:function(sprite1, sprite2){//hair19
   if (sprite2.id==this.hitCount20){      
      sprite2.kill();
      this.hitCount20++;
   }    
if (this.hitCount20 >= Main.hair2VarX20.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];    
     this.design1_20.visible=true;
     this.design1_19.visible=false;
     this.hair19drag=false;
     this.dragCircle20=false; 
      this.hair20drag=true;
     }     
},               
 hitSprite19:function(sprite1, sprite2){//hair17
   if (sprite2.id==this.hitCount19){      
      sprite2.kill();
      this.hitCount19++;
   }    
if (this.hitCount19 >= Main.hair2VarX19.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];    
     this.design1_18.visible=true;
     this.design1_17.visible=false;
     this.hair17drag=false;
     this.dragCircle19=false; 
     game.time.events.add(1000,function(){
         this.design1_18.visible=false;
         this.design1_19.visible=true;
        this.hair19drag=true;    
      },this);     
     }     
},                   
hitSprite18:function(sprite1, sprite2){//hair16
   if (sprite2.id==this.hitCount18){      
      sprite2.kill();
      this.hitCount18++;
   }    
if (this.hitCount18 >= Main.hair2VarX18.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];    
     this.design1_17.visible=true;
     this.design1_16.visible=false;
     this.hair16drag=false;
     this.dragCircle18=false; 
     this.hair17drag=true;
     }     
},                
 hitSprite17:function(sprite1, sprite2){//hair15
   if (sprite2.id==this.hitCount17){      
      sprite2.kill();
      this.hitCount17++;
   }    
if (this.hitCount17 >= Main.hair2VarX17.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];    
     this.design1_16.visible=true;
     this.design1_15.visible=false;
     this.hair15drag=false;
     this.dragCircle17=false; 
    this.hair16drag=true;
     }     
},               
 hitSprite16:function(sprite1, sprite2){//hair13
   if (sprite2.id==this.hitCount16){      
      sprite2.kill();
      this.hitCount16++;
   }    
if (this.hitCount16 >= Main.hair2VarX16.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];    
     this.design1_14.visible=true;
     this.design1_13.visible=false;
     this.hair13drag=false;
     this.dragCircle16=false; 
    game.time.events.add(1000,function(){
           this.design1_15.visible=true;
           this.design1_14.visible=false;
          this.hair15drag=true;
      },this);     
   
     }     
},             
  hitSprite15:function(sprite1, sprite2){//hair12
   if (sprite2.id==this.hitCount15){      
      sprite2.kill();
      this.hitCount15++;
   }    
if (this.hitCount15 >= Main.hair2VarX15.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
   
     this.design1_13.visible=true;
     this.design1_12.visible=false;
     this.hair12drag=false;
     this.dragCircle15=false; 
      this.hair13drag=true;
     }     
},                  
  hitSprite14:function(sprite1, sprite2){//hair11
   if (sprite2.id==this.hitCount14){      
      sprite2.kill();
      this.hitCount14++;
   }    
if (this.hitCount14 >= Main.hair2VarX14.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
   
     this.design1_12.visible=true;
     this.design1_11.visible=false;
     this.hair11drag=false;
     this.dragCircle14=false; 
      this.hair12drag=true;
     }     
},                
 hitSprite13:function(sprite1, sprite2){//hair10
   if (sprite2.id==this.hitCount13){      
      sprite2.kill();
      this.hitCount13++;
   }    
if (this.hitCount13 >= Main.hair2VarX13.length) {       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
   
     this.design1_11.visible=true;
     this.design1_10.visible=false;
     this.hair10drag=false;
     this.dragCircle13=false; 
     this.hair11drag=true;
     }     
},              
hitSprite12:function(sprite1, sprite2){//hair9
   if (sprite2.id==this.hitCount12){      
      sprite2.kill();
      this.hitCount12++;
   }    
if (this.hitCount12 >= Main.hair2VarX12.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
   
     this.design1_10.visible=true;
     this.design1_9.visible=false;
     this.hair9drag=false;
     this.dragCircle12=false; 
         this.hair10drag=true;

     }     
},                      
  hitSprite11:function(sprite1, sprite2){//hair7
   if (sprite2.id==this.hitCount11){      
      sprite2.kill();
      this.hitCount11++;
   }    
if (this.hitCount11 >= Main.hair2VarX11.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
   
     this.design1_8.visible=true;
     this.design1_7.visible=false;
     this.hair7drag=false;
     this.dragCircle11=false; 
     game.time.events.add(1000,function(){
           this.design1_9.visible=true;
           this.design1_8.visible=false;
          this.hair9drag=true;
      },this);     
     }     
},                 
   hitSprite10:function(sprite1, sprite2){//yellowband
   if (sprite2.id==this.hitCount10){      
      sprite2.kill();
      this.hitCount10++;
   }    
if (this.hitCount10 >= Main.hair2VarX10.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
   
     this.design1_7.visible=true;
     this.design1_6.visible=false;
     this.yellowbanddrag1=false;
     this.dragCircle10=false; 
     this.arrowbtn7.visible=false;
     this.design_icon3.visible=false;
     this.design_icon33.visible=true;
        this.hair7drag=true;
     }     
},               
 hitSprite8:function(sprite1, sprite2){//hair5
   if (sprite2.id==this.hitCount8){      
      sprite2.kill();
      this.hitCount8++;
   }    
if (this.hitCount8 >= Main.hair2VarX8.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_6.visible=true;
     this.design1_5.visible=false;
     this.banddrag5=false;
     this.dragCircle8=false; 
 
   this.arrowbtn6.visible=true;
    this.design_icon3.inputEnabled = true;        
    this.design_icon3.input.useHandCursor = true;       
   
     }     
},             
  hitSprite7:function(sprite1, sprite2){//hair4
   if (sprite2.id==this.hitCount7){      
      sprite2.kill();
      this.hitCount7++;
   }    
if (this.hitCount7 >= Main.hair2VarX7.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_5.visible=true;
     this.design1_4.visible=false;
     this.banddrag4=false;
     this.dragCircle7=false; 
     this.banddrag5=true;
     }     
},             
hitSprite6:function(sprite1, sprite2){//hair3
   if (sprite2.id==this.hitCount6){      
      sprite2.kill();
      this.hitCount6++;
   }    
if (this.hitCount6 >= Main.hair2VarX6.length) {
       
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_4.visible=true;
     this.design1_3.visible=false;
     this.banddrag3=false;
     this.banddrag4=true;
     this.dragCircle6=false; 
   
     }     
},    
hitSprite5:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount5){      
      sprite2.kill();
      this.hitCount5++;
   }    
     if (this.hitCount5 >= Main.hair2VarX5.length) {
       this.arrowbtn5.visible=false;          
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
   this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
     this.design1_3.visible=true;
     this.design1_2.visible=false;
     this.banddrag2=false;
     this.dragCircle5=false; 
     this.design_icon44.visible=false;
     this.design_icon444.visible=true;
      this.banddrag3=true;
     }     
},             
hitSprite4:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount4){      
      sprite2.kill();
      this.hitCount4++;
   }    
     if (this.hitCount4 >= Main.hair2VarX4.length) {
       this.arrowbtn3.visible=false;
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar];      
    this.design1_2.visible=true;
     this.design1_1.visible=false;
     this.design_icon4.visible=false;
     this.design_icon44.visible=true;
     this.banddrag1=false;
     this.dragCircle4=false;       
     this.arrowbtn4.visible=true;
      this.design_icon44.inputEnabled = true;      
      this.design_icon44.input.useHandCursor = true;       
     }     
},        
   hitSprite3:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount3){      
      sprite2.kill();
      this.hitCount3++;
   }    
     if (this.hitCount3 >= Main.hair2VarX3.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
      game.add.tween(this.extra_hair3).to({alpha:0}, 1200, Phaser.Easing.Quadratic.Out, true);
     this.comb_line3.visible=false;    
     this.combdrag3=false;   
     this.dragCircle3=false;
     this.design_icon1.visible=false;    
      game.add.tween(this.design_icon11.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true,900).onComplete.add(function(){
        
          this.arrowbtn2.visible=true;
           this.design_icon4.inputEnabled = true;
           this.design_icon4.input.useHandCursor = true;
         
         
         },this);    
     }     
},              
 hitSprite2:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount2){      
      sprite2.kill();
      this.hitCount2++;
   }    
     if (this.hitCount2 >= Main.hair2VarX2.length) {
       //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
      game.add.tween(this.extra_hair2).to({alpha:0}, 1200, Phaser.Easing.Quadratic.Out, true);
     this.comb_line2.visible=false;
     this.comb_line3.visible=true;
     this.combdrag2=false;   
     this.dragCircle2=false;   
      this.combdrag3=true;
     
     }     
},             
hitSprite:function(sprite1, sprite2){
   if (sprite2.id==this.hitCount1){      
      sprite2.kill();
      this.hitCount1++;
   }    
     if (this.hitCount1 >= Main.hair2VarX.length) {
   //   
   this.effectVar = game.add.sprite(240,400,'effectssd'); 
   this.effectVar.anchor.setTo(0.5);
   this.effectVar.scale.setTo(1.4);
   this.effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   this.effectVar.animations.play('glitter', 30, false);
      this.colorsVar=game.rnd.integerInRange(0,17);
      this.effectVar.tint=Main.colors[this.colorsVar]; 
      //
    game.add.tween(this.extra_hair1).to({alpha:0}, 1200, Phaser.Easing.Quadratic.Out, true);
     this.comb_line1.visible=false;
     this.comb_line2.visible=true;
     this.combdrag=false;   
     this.dragCircle=false;    
      this.combdrag2=true;
     
     }     
},
//u2222222222222
update:function()
{
     
      if (this.combdrag) {    
  this.design_icon1.x=this.game.input.activePointer.x-30;
  this.design_icon1.y=this.game.input.activePointer.y;
     this.dragCircle.x = this.game.input.activePointer.x+10;
     this.dragCircle.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle, this.hitCircle1_0);
   game.physics.arcade.collide(this.dragCircle, this.hitCircle1_1);
   game.physics.arcade.collide(this.dragCircle, this.hitCircle1_2);    
   }       
         if (this.combdrag2) {    
  this.design_icon1.x=this.game.input.activePointer.x-30;
  this.design_icon1.y=this.game.input.activePointer.y;
     this.dragCircle2.x = this.game.input.activePointer.x+10;
     this.dragCircle2.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle2, this.hitCircle2_0);
   game.physics.arcade.collide(this.dragCircle2, this.hitCircle2_1);
   game.physics.arcade.collide(this.dragCircle2, this.hitCircle2_2);    
   }          
    if (this.combdrag3) {    
  this.design_icon1.x=this.game.input.activePointer.x-30;
  this.design_icon1.y=this.game.input.activePointer.y;
     this.dragCircle3.x = this.game.input.activePointer.x+10;
     this.dragCircle3.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle3, this.hitCircle3_0);
   game.physics.arcade.collide(this.dragCircle3, this.hitCircle3_1);
   game.physics.arcade.collide(this.dragCircle3, this.hitCircle3_2);    
   }
   
   if (this.banddrag1) {    
  this.design_icon4.x=this.game.input.activePointer.x-30;
  this.design_icon4.y=this.game.input.activePointer.y;
     this.dragCircle4.x = this.game.input.activePointer.x;
     this.dragCircle4.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_0);
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_1);
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_2);    
   }          
    if (this.banddrag1) {    
  this.design_icon4.x=this.game.input.activePointer.x-30;
  this.design_icon4.y=this.game.input.activePointer.y;
     this.dragCircle4.x = this.game.input.activePointer.x;
     this.dragCircle4.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_0);
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_1);
   game.physics.arcade.collide(this.dragCircle4, this.hitCircle4_2);    
   }           
    if (this.banddrag2) {    
  this.design_icon44.x=this.game.input.activePointer.x-30;
  this.design_icon44.y=this.game.input.activePointer.y;
     this.dragCircle5.x = this.game.input.activePointer.x;
     this.dragCircle5.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle5, this.hitCircle5_0);
   game.physics.arcade.collide(this.dragCircle5, this.hitCircle5_1);
   game.physics.arcade.collide(this.dragCircle5, this.hitCircle5_2);    
   }            
    if (this.banddrag3) {  //h3  
     this.dragCircle6.x = this.game.input.activePointer.x;
     this.dragCircle6.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_0);
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_1);
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_2);    
   game.physics.arcade.collide(this.dragCircle6, this.hitCircle6_3);    
   }        
   
   if (this.banddrag4) { //h4   
     this.dragCircle7.x = this.game.input.activePointer.x;
     this.dragCircle7.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_0);
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_1);
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_2);    
   game.physics.arcade.collide(this.dragCircle7, this.hitCircle7_3);    
   }
   if (this.banddrag5) {//h5    
     this.dragCircle8.x = this.game.input.activePointer.x;
     this.dragCircle8.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle8, this.hitCircle8_0);
   game.physics.arcade.collide(this.dragCircle8, this.hitCircle8_1);
   game.physics.arcade.collide(this.dragCircle8, this.hitCircle8_2);    
   }        
  
   if (this.yellowbanddrag1) {//yellow
       this.design_icon3.x=this.game.input.activePointer.x-0;
       this.design_icon3.y=this.game.input.activePointer.y;
     this.dragCircle10.x = this.game.input.activePointer.x;
     this.dragCircle10.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_0);
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_1);
   game.physics.arcade.collide(this.dragCircle10, this.hitCircle10_2);      
   }
   if (this.hair7drag) {//h7   
     this.dragCircle11.x = this.game.input.activePointer.x;
     this.dragCircle11.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle11, this.hitCircle11_0);
   game.physics.arcade.collide(this.dragCircle11, this.hitCircle11_1);
   game.physics.arcade.collide(this.dragCircle11, this.hitCircle11_2);    
   }    
   if (this.hair9drag) {//h9   
     this.dragCircle12.x = this.game.input.activePointer.x;
     this.dragCircle12.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle12, this.hitCircle12_0);
   game.physics.arcade.collide(this.dragCircle12, this.hitCircle12_1);
   game.physics.arcade.collide(this.dragCircle12, this.hitCircle12_2);    
   game.physics.arcade.collide(this.dragCircle12, this.hitCircle12_3);    
   }    
   if (this.hair10drag) {//h10   
     this.dragCircle13.x = this.game.input.activePointer.x;
     this.dragCircle13.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle13, this.hitCircle13_0);
   game.physics.arcade.collide(this.dragCircle13, this.hitCircle13_1);
   game.physics.arcade.collide(this.dragCircle13, this.hitCircle13_2);    
   game.physics.arcade.collide(this.dragCircle13, this.hitCircle13_3);    
   }
    if (this.hair11drag) {//h11  
     this.dragCircle14.x = this.game.input.activePointer.x;
     this.dragCircle14.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle14, this.hitCircle14_0);
   game.physics.arcade.collide(this.dragCircle14, this.hitCircle14_1);
   game.physics.arcade.collide(this.dragCircle14, this.hitCircle14_2);    
   game.physics.arcade.collide(this.dragCircle14, this.hitCircle14_3);    
   }    
    if (this.hair12drag) {//h12  
     this.dragCircle15.x = this.game.input.activePointer.x;
     this.dragCircle15.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle15, this.hitCircle15_0);
   game.physics.arcade.collide(this.dragCircle15, this.hitCircle15_1);
   game.physics.arcade.collide(this.dragCircle15, this.hitCircle15_2);    
   game.physics.arcade.collide(this.dragCircle15, this.hitCircle15_3);    
   }    
    if (this.hair13drag) {//h13 
     this.dragCircle16.x = this.game.input.activePointer.x;
     this.dragCircle16.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle16, this.hitCircle16_0);
   game.physics.arcade.collide(this.dragCircle16, this.hitCircle16_1);
   game.physics.arcade.collide(this.dragCircle16, this.hitCircle16_2);    
   game.physics.arcade.collide(this.dragCircle16, this.hitCircle16_3);    
   }    
       if (this.hair15drag) {//h15
     this.dragCircle17.x = this.game.input.activePointer.x;
     this.dragCircle17.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle17, this.hitCircle17_0);
   game.physics.arcade.collide(this.dragCircle17, this.hitCircle17_1);
   game.physics.arcade.collide(this.dragCircle17, this.hitCircle17_2);    
   game.physics.arcade.collide(this.dragCircle17, this.hitCircle17_3);    
   }    
    if (this.hair16drag) {//h16
     this.dragCircle18.x = this.game.input.activePointer.x;
     this.dragCircle18.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle18, this.hitCircle18_0);
   game.physics.arcade.collide(this.dragCircle18, this.hitCircle18_1);
   game.physics.arcade.collide(this.dragCircle18, this.hitCircle18_2);    
   game.physics.arcade.collide(this.dragCircle18, this.hitCircle18_3);    
   }    
    if (this.hair17drag) {//h17
     this.dragCircle19.x = this.game.input.activePointer.x;
     this.dragCircle19.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle19, this.hitCircle19_0);
   game.physics.arcade.collide(this.dragCircle19, this.hitCircle19_1);
   game.physics.arcade.collide(this.dragCircle19, this.hitCircle19_2);    
   game.physics.arcade.collide(this.dragCircle19, this.hitCircle19_3);    
   }
   if (this.hair19drag) {//h19
     this.dragCircle20.x = this.game.input.activePointer.x;
     this.dragCircle20.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle20, this.hitCircle20_0);
   game.physics.arcade.collide(this.dragCircle20, this.hitCircle20_1);
   game.physics.arcade.collide(this.dragCircle20, this.hitCircle20_2);    
   game.physics.arcade.collide(this.dragCircle20, this.hitCircle20_3);    
   }
   if (this.hair20drag) {//h20
     this.dragCircle21.x = this.game.input.activePointer.x;
     this.dragCircle21.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle21, this.hitCircle21_0);
   game.physics.arcade.collide(this.dragCircle21, this.hitCircle21_1);
   game.physics.arcade.collide(this.dragCircle21, this.hitCircle21_2);    
   game.physics.arcade.collide(this.dragCircle21, this.hitCircle21_3);    
   }
   if (this.hair21drag) {//h21
     this.dragCircle22.x = this.game.input.activePointer.x;
     this.dragCircle22.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle22, this.hitCircle22_0);
   game.physics.arcade.collide(this.dragCircle22, this.hitCircle22_1);
   game.physics.arcade.collide(this.dragCircle22, this.hitCircle22_2);    
   game.physics.arcade.collide(this.dragCircle22, this.hitCircle22_3);    
   }
    if (this.hair22drag) {//h22
     this.dragCircle23.x = this.game.input.activePointer.x;
     this.dragCircle23.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle23, this.hitCircle23_0);
   game.physics.arcade.collide(this.dragCircle23, this.hitCircle23_1);
   game.physics.arcade.collide(this.dragCircle23, this.hitCircle23_2);    
   game.physics.arcade.collide(this.dragCircle23, this.hitCircle23_3);    
   }
   if (this.flowerdrag) {//flower
     this.hair1_flowericon1.x = this.game.input.activePointer.x;
     this.hair1_flowericon1.y = this.game.input.activePointer.y;
     this.dragCircle24.x = this.game.input.activePointer.x;
     this.dragCircle24.y = this.game.input.activePointer.y;  
   game.physics.arcade.collide(this.dragCircle24, this.hitCircle24_0);
   game.physics.arcade.collide(this.dragCircle24, this.hitCircle24_1);
   game.physics.arcade.collide(this.dragCircle24, this.hitCircle24_2);      
   game.physics.arcade.collide(this.dragCircle24, this.hitCircle24_3);      
   }    
  //u2ddddddddd 
   
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
   //CreateLinksInGame("Elsa-Wedding-Hair-Design","menu","logo");
},
moreLink:function()
{
   //CreateLinksInGame("Elsa-Wedding-Hair-Design","menu","more");
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



function addShutter(evt){	
	if(evt=="title"){		
		shutterbottom = game.add.sprite(0,-850,'titlebg');			
	}else{
		shutterbottom = game.add.sprite(0,0,'titlebg');			
		game.add.tween(shutterbottom).to({y:-850},1200,Phaser.Easing.Linear.Out,true,300);	
	}	
}
function musicStatus(evt){
	if(!game.sound.mute){
		evt.frame = 0;
	}else{
		evt.frame = 1;
	}
}
function btnOver(evt){
	evt.scale.setTo(evt.scale.x+0.05);
	this.effects = game.add.sprite(0,0,'effects');
	this.effects.anchor.setTo(0.5);
	this.effects.scale.setTo(2);
	this.effects.x = evt.worldPosition.x-30;
	this.effects.y = evt.worldPosition.y-80;
	this.effects.animations.add('effects');
	this.effects.animations.play('effects',30,false).onComplete.add(function(eve){
		eve.destroy();
	},this);
}
function btnOut(evt){
	evt.scale.setTo(evt.scale.x-0.05);
}
function thumbLink(evt){
	//CreateLinksInGame(Main.gameName,"gameover","thumb",RelatedGames[evt.id]['id']);
}
function openLink(evt){
	//CreateLinksInGame(Main.gameName,evt.statusType,"logo");
}
function moreLink(evt){
	//CreateLinksInGame(Main.gameName,evt.statusType,"more");
}
function stateStart(evt){
	if(evt.type=="reset"){      
   Main.applyCount1=[0,0];
   Main.doneCount1=[0,0];
   Main.doneCount2=[0,0];
   Main.doneCount3=[0,0];
   Main.girlChoosed=[0,0,0,0];
   Main.finalVar=0;
 Main.colors=["0xff00ff","0xff0000","0x0000cc","0x00ff00","0x33ffff","0x330066","0xff0000","0xffff33","0x00cccc","0x6600cc","0x660066","0x339900","0x3300cc","0xcc0066","0x003366","0x003333","0x9933ff","0x990033"]; 
	}
	this.shutterTween1 = game.add.tween(shutterbottom).to({y:0},1200,Phaser.Easing.Linear.Out,true);	
	this.shutterTween1.onComplete.add(function(){
		game.state.start(evt.url);
	},this);	
}
function changeMusic(evt){
	if(evt.frame==0){
		evt.frame=1;
		game.sound.mute=true;
	}else{
		evt.frame=0;
		game.sound.mute=false;
	}
}



game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('hair1', Main.hair1);
game.state.add('hair2', Main.hair2);
game.state.add('hair3', Main.hair3);
game.state.add('hair1design', Main.hair1design);
game.state.add('demo1', Main.demo1);
game.state.add('demo2', Main.demo2);
game.state.add('demo3', Main.demo3);
game.state.add('selectionScreen', Main.selectionScreen);
game.state.add('finalScreen', Main.finalScreen);




game.state.start('boot');