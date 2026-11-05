var Game = function(game) {};
Game.prototype = {


    create: function() {

        //game.forceSingleUpdate =true;
        game.time.fpsMax = 60;

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 300;
        game.physics.arcade.setBounds(0, 0, game.world.width, 598);

        game.gamePaused = true;
        this._score = 0;
        this.groundY = 598;
        this.isBut = false;
        this.score = [00,00];
        this.goTimer = 0;
        this.endGame = false;
        this.bombLock = true;
        this.winGame = false;
        this.bonus= [];

        game.mobileJump = false;
        game.mobileLeft = false;
        game.mobileRight = false;

        game.playerLock =false;
        game.playerPCLock =false;
        game.playerPCBigJump = false;
        game.playerBigJump = false;
    
        game.pcGo = false;
        game.lastBounce = false;

        this.bg = game.add.sprite(0, 0, 'bg_gameplay');
        if(!game.device.desktop){
            this.bg.scale.x = game.world.width/this.bg.width;
            this.bg.scale.y = game.world.height/this.bg.height;
        }
        this.bg.sendToBack();

        this.initUI();

        
        this.player = new Player(game,this.world.centerX+245 ,this.groundY,true,game.currentPlayer.name, game.currentPlayer.level ,game.currentPlayer.key);
        game.add.existing(this.player);
        game.player = this.player;

        this.playerPC = new Player(game,this.world.centerX-245 ,this.groundY,false,game.currentPlayerPC.name, game.currentPlayerPC.level, game.currentPlayerPC.key);
        game.add.existing(this.playerPC);
        game.playerPC = this.playerPC;

        this.ball = game.add.sprite(this.world.centerX,this.world.centerY - 30,'ball');
        this.ball.anchor.set(0.5, 0.5);
        this.ball.alpha = 0;
        game.physics.enable(this.ball, Phaser.Physics.ARCADE);
        this.ball.body.maxVelocity.setTo(600,700);
        this.ball.body.allowGravity = false;
        this.ball.body.allowRotation = true;
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.set(0.55);
        this.ball.isShoot= false;

        this.startGame = false;


        this.startNumbers = game.add.sprite(game.world.centerX, game.world.centerY - 34, "num3");
        this.startNumbers.anchor.setTo(0.5, 0.5);
         game.time.events.add(Phaser.Timer.SECOND * 1, function () {
            this.startNumbers.loadTexture("num2");
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {
                 this.startNumbers.loadTexture("num1");
                 game.time.events.add(Phaser.Timer.SECOND * 1, function () {
                    this.startNumbers.alpha = 0;
                    this.timer = game.time.create(true);
                     this.timer.add(Phaser.Timer.SECOND * 60, this.timeOut, this);
                    game.gamePaused = false;
                    this.startGame = true;
                    this.ball.alpha = 1;
                    this.ball.body.allowGravity = true;
                    this.ball.body.gravity.set(1, 500);
                    this.ball.body.velocity.setTo(80, 100);
                    this.timer.start();

                    this.pauseBtn = game.add.button(game.world.width - 70, 28, 'pauseBtn', this.pauseGame.bind(this),this);
                    this.pauseBtn.anchor.setTo(0.5,0.5);

                    game.time.events.add(Phaser.Timer.SECOND * 1, function () {   
                        game.pcGo = true;

                    }, this);
                },this);
            },this);
         },this);
       
        game.ball = this.ball;


        this.butL = game.add.sprite(0,this.groundY ,'butLeft');
        this.butL.anchor.set(0, 1);
        
        game.physics.enable(this.butL, Phaser.Physics.ARCADE);
        this.butL.scale.setTo(0.8,0.8);
        this.butL.body.allowGravity = false;
        this.butL.body.immovable = true;
        this.butL.body.setSize(this.butL.width*1.1, 2, 0, - this.butL.height + 1);

        var cageL = game.add.sprite(this.butL.width/1.2,0,'');
        game.physics.enable(cageL, Phaser.Physics.ARCADE);
        cageL.anchor.setTo(0,1);
        cageL.body.allowGravity = false;

        cageL.body.immovable = true;
        cageL.width = 10;
        cageL.height = this.butL.height - 10;
        this.butL.cage = cageL;
        this.butL.addChild(cageL);


        this.butR = game.add.sprite(game.world.width,this.groundY,'butRight');
        this.butR.anchor.set(1, 1);
        game.physics.enable(this.butR, Phaser.Physics.ARCADE);
        this.butR.scale.setTo(0.8,0.8);
        this.butR.body.allowGravity = false;
        this.butR.body.immovable = true;
        this.butR.body.setSize(this.butR.width*1.1, 2, 0, - this.butR.height + 1);

        var cageR = game.add.sprite(-this.butL.width/1.2 ,0,'');
        game.physics.enable(cageR, Phaser.Physics.ARCADE);
        cageR.anchor.setTo(1,1);
        cageR.body.allowGravity = false;
        cageR.body.immovable = true;
        cageR.width = 10;
        cageR.height = this.butL.height - 10;
        this.butR.cage = cageR;
        this.butR.addChild(cageR);

        this.freeze = game.add.sprite(0,0,'freeze2');
        this.freeze.alpha = 0 ;
        this.freeze.anchor.setTo(0.5, 1);
        this.freeze.bringToTop();
        this.freeze2 = game.add.sprite(0,0,'freeze');
        this.freeze2.alpha = 0 ;
        this.freeze2.anchor.setTo(0.5, 1);
        this.freeze2.bringToTop();

        this.bomb = game.add.sprite(0,-100,'bomb');
        game.physics.enable(this.bomb, Phaser.Physics.ARCADE);
        this.bomb.anchor.setTo(0.5,1);
        this.bomb.body.allowGravity = false;
        this.bomb.alpha = 0;

        this.explosion = game.add.sprite(0,-100,'explosion');
        this.explosion.anchor.setTo(0.5,0.5);
        this.explosion.alpha = 0;

        this.animExplosion = this.explosion.animations.add("explode");

        this.initWall();

        if (!this.game.device.desktop){
            this.initMobileUI();
        }

        this.soundBtn = game.add.button(40, 30, game.sound.mute?'soundBtnOff':'soundBtnOn', this.clickSound.bind(this),this);
        this.soundBtn.anchor.setTo(0.5,0.5);

         game.input.onTap.add(function(){

                if(gdsdk){
                    gdsdk.showBanner();
                    game.showAds= false;
                    //console.log("showBanner");
                }
                if(gdApi){
                    //gdApi.showBanner();
                    game.showAds= false;
                    //console.log("showBanner2");
                }
              
        }, this);

    },

    initUI: function() {

        this.bgScore = game.add.sprite(game.world.centerX, 60,'bgScore' );
        this.bgScore.anchor.setTo(0.5,0.5);

        var fontScore = { font: "32px OpenSans-Semibold", fill: "#FFFFFF", align:"center"};
        this.scoreTxt = game.add.bitmapText(game.world.centerX,78,'scoreFont2',this.score[0]+ " - "+ this.score[1],31);
        this.scoreTxt.anchor.setTo(0.5,0.5);
        this.defuzzText(this.scoreTxt);


        this.timerTxt = game.add.text(game.world.centerX,47,60,fontScore);
        this.timerTxt.fontSize = 22;
        this.timerTxt.anchor.setTo(0.5,0.5);
        this.defuzzText(this.timerTxt);

        var fontTeam = { font: "20px OpenSans-Semibold", fill: "#03253b", align:"center"};
        this.teamPCTxt = game.add.bitmapText(-this.bgScore.width/4-10,18,'titleFont',game.currentPlayerPC.team,20);
        this.teamPCTxt.anchor.setTo(0.5,0.5);

        this.teamTxt = game.add.bitmapText(this.bgScore.width/4+10,18,'titleFont',game.currentPlayer.team,20);
        this.teamTxt.anchor.setTo(0.5,0.5);

        this.bgScore.addChild(this.teamTxt);this.bgScore.addChild(this.teamPCTxt);
       
        this.flagPC = game.add.sprite(-this.bgScore.width/2+38, 9,'flag',game.currentPlayerPC.flag+'.png' );
        this.flagPC.anchor.setTo(0.5,0.5);

        this.flag = game.add.sprite(this.bgScore.width/2-38, 9, 'flag', game.currentPlayer.flag+'.png' );
        this.flag.anchor.setTo(0.5,0.5);
        this.flag.scale.setTo(1,-1);
        this.flag.rotation = 135;

        this.bgScore.addChild(this.flag);this.bgScore.addChild(this.flagPC);

        var bigCage = game.add.sprite(0,0,'bigCage');
        bigCage.anchor.set(0.5, 0.5);
        game.physics.enable(bigCage, Phaser.Physics.ARCADE);
        bigCage.body.setSize(bigCage.width-36, bigCage.height-36, 0,4);
        bigCage.scale.set(0, 0);
        bigCage.body.allowGravity = false;
        bigCage.body.immovable = true;
        bigCage.alpha = 0;
        bigCage.isShow = false;
        bigCage.collideFunction = this.bonusBigCage;
        this.bonus.push(bigCage);
        var smallCage = game.add.sprite(0,0,'smallCage');
        smallCage.anchor.set(0.5, 0.5);
        game.physics.enable(smallCage, Phaser.Physics.ARCADE);
        smallCage.body.setSize(smallCage.width-36, smallCage.height-36, 0,4); 
        smallCage.scale.set(0, 0);
        smallCage.body.allowGravity = false;
        smallCage.body.immovable = true;
        smallCage.alpha = 0;
        smallCage.isShow = false;
        smallCage.collideFunction = this.bonusSmallCage;
        this.bonus.push(smallCage);

        var freezeBonus = game.add.sprite(0,0,'freezeBonus');
        freezeBonus.anchor.set(0.5, 0.5);
        game.physics.enable(freezeBonus, Phaser.Physics.ARCADE);
        freezeBonus.body.setSize(freezeBonus.width-36, freezeBonus.height-36, 0,4); 
        freezeBonus.scale.set(0, 0);
        freezeBonus.body.allowGravity = false;
        freezeBonus.body.immovable = true;
        freezeBonus.alpha = 0;
        freezeBonus.isShow = false;
        freezeBonus.collideFunction = this.bonusFreeze;
        this.bonus.push(freezeBonus);

         var freezeMalus = game.add.sprite(0,0,'freezeMalus');
        freezeMalus.anchor.set(0.5, 0.5);
        game.physics.enable(freezeMalus, Phaser.Physics.ARCADE);
        freezeMalus.body.setSize(freezeMalus.width-36, freezeMalus.height-36, 0,4); 
        freezeMalus.scale.set(0, 0);
        freezeMalus.body.allowGravity = false;
        freezeMalus.body.immovable = true;
        freezeMalus.alpha = 0;
        freezeMalus.isShow = false;
        freezeMalus.collideFunction = this.malusFreeze;
        this.bonus.push(freezeMalus);

        var bombBonus = game.add.sprite(0,0,'bombBonus');
        bombBonus.anchor.set(0.5, 0.5);
        game.physics.enable(bombBonus, Phaser.Physics.ARCADE);
        bombBonus.body.setSize(bombBonus.width-36, bombBonus.height-36, 0,4); 
        bombBonus.scale.set(0, 0);
        bombBonus.body.allowGravity = false;
        bombBonus.body.immovable = true;
        bombBonus.alpha = 0;
        bombBonus.isShow = false;
        bombBonus.collideFunction = this.bonusBomb;
        this.bonus.push(bombBonus);

        var jumpBonus = game.add.sprite(0,0,'jumpBonus');
        jumpBonus.anchor.set(0.5, 0.5);
        game.physics.enable(jumpBonus, Phaser.Physics.ARCADE);
        jumpBonus.body.setSize(jumpBonus.width-36, jumpBonus.height-36, 0,4); 
        jumpBonus.scale.set(0, 0);
        jumpBonus.body.allowGravity = false;
        jumpBonus.body.immovable = true;
        jumpBonus.alpha = 0;
        jumpBonus.isShow = false;
        jumpBonus.collideFunction = this.bonusJump;
        this.bonus.push(jumpBonus);
    
        var random = game.rnd.integerInRange(3,6);
        game.time.events.repeat(Phaser.Timer.SECOND * (game.rnd.integerInRange(2.5,5.5)), 250, this.showBonus, this);
        
        
        this.msgBut = game.add.sprite(game.world.centerX, game.world.centerY, 'msgBut');
        this.msgBut.anchor.setTo(0.5,0.5);
        this.msgBut.scale.setTo(0,0);
        this.msgBut.alpha = 0;



        this.popup = game.add.sprite(game.world.centerX, 0, "popupFail" );
        this.popup.y = 0 - this.popup.height;
        this.popup.anchor.setTo(0.5, 0.5);
        this.popup.isShow = false;
        this.popup.alpha = 0;

        var btnReplay = game.add.button(-this.popup.width/5,this.popup.height/2,"btn",this.replay.bind(this), this,"btn_replay.png","btn_replay.png","btn_replay_push.png","btn_replay_push.png");
        btnReplay.anchor.setTo(0.5, 0.5);
        var btnStop = game.add.button(this.popup.width/5,this.popup.height/2,"btn",this.quit.bind(this), this,"btn_quit.png","btn_quit.png","btn_quit_push.png","btn_quit_push.png");
        btnStop.anchor.setTo(0.5, 0.5);

        var title =  game.add.bitmapText(0,-this.popup.height/2 + 2, 'titleFont', this.getText("popupEnd_title"),20);
        title.anchor.setTo(0.5,0);
        this.defuzzText(title);
        this.popup.addChild(title);
        this.popup.title = title;

        this.popup.btnReplay = btnReplay;
        this.popup.addChild(btnReplay);
        this.popup.addChild(btnStop);
        this.popup.bringToTop();




    },

    initWall : function(){

        this.wallG = game.add.group();
        var wallL = this.wallG.create(0,0,'wallLeft');
        wallL.anchor.set(0, 0);
        game.physics.enable(wallL, Phaser.Physics.ARCADE);
        wallL.body.allowGravity = false;
        wallL.body.immovable = true;
        wallL.body.setSize(wallL.width*0.3,wallL.height*0.8, 0, 0);
        wallL.bringToTop();

        var collideWallL = this.wallG.create(0 ,0,'');
        game.physics.enable(collideWallL, Phaser.Physics.ARCADE);
        collideWallL.anchor.setTo(0.5,0);
        collideWallL.body.allowGravity = false;
        collideWallL.body.immovable = true;
        collideWallL.body.setSize(236,50);
        var collideWallL2 = this.wallG.create(0 ,50,'');
        game.physics.enable(collideWallL2, Phaser.Physics.ARCADE);
        collideWallL2.anchor.setTo(0.5,0);
        collideWallL2.body.allowGravity = false;
        collideWallL2.body.immovable = true;
        collideWallL2.body.setSize(146,50);
      
        var wallR = this.wallG.create(game.world.width,0,'wallRight');
        wallR.anchor.set(1, 0);
        game.physics.enable(wallR, Phaser.Physics.ARCADE);
        wallR.body.allowGravity = false;
        wallR.body.immovable = true;
        wallR.body.setSize(wallR.width*0.3,wallR.height*0.8, 0, 0);
        wallR.bringToTop();

        var collideWallR = this.wallG.create(game.world.width ,0,'');
        game.physics.enable(collideWallR, Phaser.Physics.ARCADE);
        collideWallR.anchor.setTo(0.5,0);
        collideWallR.body.allowGravity = false;
        collideWallR.body.immovable = true;
        collideWallR.body.setSize(236,50);
        var collideWallR2 = this.wallG.create(game.world.width ,50,'');
        game.physics.enable(collideWallR2, Phaser.Physics.ARCADE);
        collideWallR2.anchor.setTo(0.5,0);
        collideWallR2.body.allowGravity = false;
        collideWallR2.body.immovable = true;
        collideWallR2.body.setSize(146,50);

        var wallC = this.wallG.create(game.world.centerX,200,'wallCenter');
        wallC.anchor.set(0.5, 0.5);
        game.physics.enable(wallC, Phaser.Physics.ARCADE);
        wallC.body.allowGravity = false;
        wallC.body.immovable = true;
        wallC.body.setSize(wallC.width*0.5,wallC.height*0.8, 0, 0);
        this.wallC = wallC;

        this.wallL = wallL;

    },

    initMobileUI : function(){

            game.btnKeyU = game.add.button(74,game.world.height/2.5,'btn',null,this,"btn_keyU.png","btn_keyU.png","btn_keyU.png","btn_keyU.png");
            game.btnKeyU.anchor.setTo(0.5, 0.5);
            game.btnKeyU.inputEnabled = true; 
            game.btnKeyU.events.onInputDown.add(function(){game.mobileJump = true;}, this);

            game.btnKick = game.add.sprite(240,game.world.height/2.5,'btn',"btn_kick.png");
            game.btnKick.anchor.setTo(0.5, 0.5);
            game.btnKick.inputEnabled = true; 
            game.btnKick.events.onInputDown.add(this.player.shoot.bind(this.player), this);


            game.btnKeyL = game.add.sprite(game.world.width - 220,game.world.height/2.5,'btn',"btn_keyL.png");
            game.btnKeyL.anchor.setTo(0.5, 0.5);
            game.btnKeyL.inputEnabled = true; 
            game.btnKeyL.events.onInputDown.add(function(){game.mobileLeft = true;}, this);
            game.btnKeyL.events.onInputUp.add(function(){game.mobileLeft = false;}, this);

            game.btnKeyR = game.add.sprite(game.world.width - 74,game.world.height/2.5,'btn',"btn_keyR.png");
            game.btnKeyR.anchor.setTo(0.5, 0.5);
            game.btnKeyR.inputEnabled = true; 
            game.btnKeyR.events.onInputDown.add(function(){game.mobileRight = true;}, this);
            game.btnKeyR.events.onInputUp.add(function(){game.mobileRight = false;}, this);

    },


    update: function() {

        if(!game.gamePaused && this.startGame){

            game.physics.arcade.collide(this.player, this.ball,this.headCollidePlayer.bind(this));
            game.physics.arcade.collide(this.playerPC, this.ball,this.headCollidePC.bind(this));
            
            if(this.timer.paused)
                this.timer.resume();

            if(game.playerLock && this.freeze.alpha == 1){
                this.freeze.x = this.player.x;
                this.freeze.y = this.player.y + 6;
            }

            if(game.playerPCLock && this.freeze2.alpha == 1){
                this.freeze2.x = this.playerPC.x;
                this.freeze2.y = this.playerPC.y + 6;
            }

            if(this.bomb.y >= this.groundY-24 && !this.bombLock ){
                this.bombLock = true;
                this.bomb.body.allowGravity = false;
                this.bomb.body.velocity.y = 0;
                this.explosion.x = this.bomb.x-6;
                this.explosion.y = this.bomb.y- 18;
                this.explosion.alpha = 1;
                
                this.animExplosion.play(7, false);
                game.time.events.add(Phaser.Timer.SECOND * 0.3, function () {
                     this.bomb.alpha = 0;
                }, this);

                this.animExplosion.onComplete.add(function(){
                      this.explosion.alpha = 0; 
                },this);

            }

            if(this.explosion.alpha == 1){

                if(Math.abs(this.player.x - this.explosion.x)< this.player.width/2 + this.explosion.width/2){
                 
                    game.playerLock =true;
                    game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                        if(game.playerLock){
                            game.playerLock = false;
                        }
                    },this);
                }

                if(Math.abs(this.playerPC.x - this.explosion.x)< this.playerPC.width/2 + this.explosion.width/2){
                 
                    game.playerPCLock = true;
                    game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                        if(game.playerPCLock){
                            game.playerPCLock = false;
                        }
                    },this);
                }
            }

            for( var i = 0; i<this.bonus.length; i++){

                if(this.bonus[i].isShow)
                     game.physics.arcade.overlap(this.bonus[i], this.ball,this.bonus[i].collideFunction,null,this  );

            }

            game.physics.arcade.overlap(this.player, this.ball,this.overlapPlayer.bind(this) );
            game.physics.arcade.overlap(this.playerPC, this.ball,function(){} );
           
            game.collidePlayer = game.physics.arcade.collide(this.player, this.playerPC);
           // game.physics.arcade.overlap(this.player, this.playerPC,function(){console.log("overlap players");},null,this);
            game.physics.arcade.collide(this.player.shoe, this.ball,this.shootCollide.bind(this));
            game.physics.arcade.overlap(this.player.shoe, this.ball,this.shootOverlap.bind(this));
            game.physics.arcade.collide(this.playerPC.shoe, this.ball,this.shootCollide.bind(this));
            game.physics.arcade.overlap(this.playerPC.shoe, this.ball,this.shootOverlap.bind(this));
            game.physics.arcade.collide(this.butL, this.ball);
            game.physics.arcade.collide(this.butR, this.ball);
            game.physics.arcade.collide(this.butL, this.player);
            game.physics.arcade.collide(this.butR, this.playerPC);
            game.physics.arcade.collide(this.ball, this.wallG);

            if(!this.isBut){
                game.physics.arcade.overlap(this.ball, this.butL.cage, this.shootCageL.bind(this));
                game.physics.arcade.overlap(this.ball, this.butR.cage, this.shootCageR.bind(this));
            }
           
            this.ball.body.angularVelocity = this.ball.body.velocity.x/1;


            if(this.ball.body.y > this.groundY - this.ball.height/2) this.ball.body.y = this.groundY - this.ball.height/2 ;
            var second = (this.timer.duration+"").substring(0, 2);
            if (this.timer.duration<10000){ 
                second = (this.timer.duration+"").substring(0, 1);
                if(this.timerTxt.fill != "#cc3333"){
                    this.timerTxt.fill = "#cc3333";
                    this.timerTxt.fontSize = 33;
                }
            }
            if (this.timer.duration<1000){
                second = "0";        
            } 

            this.timerTxt.setText(second );
            game.physics.arcade.collide(this.player, this.ball );
            game.physics.arcade.collide(this.playerPC, this.ball);
            
        }
        else{
            game.physics.arcade.collide(this.ball, this.wallG);
            game.physics.arcade.collide(this.butL, this.ball);
            game.physics.arcade.collide(this.butR, this.ball);
            if(this.ball.body.onFloor()){
                this.ball.body.velocity.setTo(0,0);
                this.ball.body.angularVelocity = 0;
            }
            if(this.timer && this.timer.running)
                this.timer.pause();

        }

    },

    overlapPlayer : function(obj1,obj2){

        if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2  && obj1.x> obj2.x){
          //  console.log("overlap PLAYER BALL ");
            this.ball.body.velocity.x = this.ball.body.velocity.y = 0;
            this.ball.body.velocity.y = - 100;
            this.ball.body.velocity.x = - 200;

       }
  
    },

    headCollidePC : function(){
        game.lastBounce = "PC";
        
        if(this.ball.y < this.playerPC.y - (this.playerPC.height*0.9)){

            if(this.ball.x >= this.playerPC.x + 2){

                if(this.ball.x > this.playerPC.x + this.playerPC.width/2.5){
                   
                    if (this.ball.body.velocity.x < 0) this.ball.body.velocity.x *= -1;
                     this.ball.body.velocity.x = this.ball.body.velocity.x*1.1 + 70;

                }
                else{

                    if (this.ball.body.velocity.x < 0) this.ball.body.velocity.x *= -1;
                     this.ball.body.velocity.x = this.ball.body.velocity.x*1 + 50;

                }

                if(this.ball.body.velocity.x > 450){
                    this.ball.body.velocity.x = 450;
                }

                if(this.ball.body.velocity.y > 0){
                    this.ball.body.velocity.y *= -1;
                }

                if(this.ball.body.velocity.y > -30){
                    this.ball.body.velocity.y = -30;
                }

            }
               if(this.ball.body.velocity.y > 0){
                    this.ball.body.velocity.y *= -1;
                }

                if(this.ball.body.velocity.y > -30){
                    this.ball.body.velocity.y = -30;
                }

        }
    },

     headCollidePlayer : function(){
        game.lastBounce = "human";
        //console.log("collide Human");

        if(this.ball.y < this.player.y - (this.player.height*0.9)){


            if(this.ball.x <= this.player.x + 2){

                if(this.ball.x < this.player.x - this.player.width/2.5){
                   // console.log("head player front");
                    if (this.ball.body.velocity.x > 0) this.ball.body.velocity.x *= -1;
                     this.ball.body.velocity.x = this.ball.body.velocity.x*1.1 - 70;

                }
                else{

                    if (this.ball.body.velocity.x > 0) this.ball.body.velocity.x *= -1;
                     this.ball.body.velocity.x = this.ball.body.velocity.x*1 - 50;

                }

                if(this.ball.body.velocity.x < -600){
                   // console.log("ball velocity after head to big");
                    this.ball.body.velocity.x = - 600;
                }

                if(this.ball.body.velocity.y > 0){
                    this.ball.body.velocity.y *= -1;
                }

                if(this.ball.body.velocity.y > -30){
                    this.ball.body.velocity.y = -30;
                }

            }

               if(this.ball.body.velocity.y > 0){
                    this.ball.body.velocity.y *= -1;
                }

                if(this.ball.body.velocity.y > -30){
                    this.ball.body.velocity.y = -30;
                }

        }
    },
    
    shootCollide: function(obj1,obj2) {
        
        if(obj1.parent.isShoot){

            //console.log("shoot Collide shoe");
            this.ball.isShoot= true;
            if(obj1.parent.human)
                game.lastBounce = "human";
            else
                game.lastBounce = "PC";


            if(this.ball.body.velocity.y>-10) {
                
                this.ball.body.velocity.y = -10;
            }
            this.ball.body.velocity.x = this.ball.body.velocity.x*1.5 + (game.lastBounce == "PC" ? 300 : -300)  ;    
            this.ball.body.velocity.y = this.ball.body.velocity.y * 1.3 - 350 ;

            game.time.events.add(Phaser.Timer.SECOND * 0.1, function () {
                this.ball.isShoot= false;
            }, this);
        }
    },
     shootOverlap: function(obj1,obj2) {
        
        
        if( obj1.parent.isShoot){

            //console.log("shoot Overlap shoe");
            this.ball.isShoot= true;

            if(this.ball.body.velocity.y>-10) {
                this.ball.body.velocity.y = -20;
            }
           
            if(obj1.parent.human)
                game.lastBounce = "human";
            else{
                game.lastBounce = "PC";
            }

            if(this.ball.body.velocity.x>-5 && this.ball.body.velocity.x<5) {
                this.ball.body.velocity.x = game.lastBounce == "PC" ? 10 : -10;
            }

            this.ball.body.velocity.x = this.ball.body.velocity.x * 1.5 + (game.lastBounce == "PC" ? 360 : -360)  ;
            this.ball.body.velocity.y = this.ball.body.velocity.y * 1.5 - 400 ;


            game.time.events.add(Phaser.Timer.SECOND * 0.1, function () {
                this.ball.isShoot = false;
            }, this);
        }
       
    },

    shootCageL : function (){
        this.pauseLock = true;
        game.time.events.add(Phaser.Timer.SECOND * 0.3, function () {
            if(!this.isBut && !game.gamePaused && !this.endGame){
                //console.log("but !!!");
                this.isBut = true;
                this.score[1]++;
               
                this.tweenMsg(this.msgBut);

                game.pcGo = true;
                this.replayGo(true);
                        
           }
        }, this);

    },
    shootCageR : function (){
        this.pauseLock = true;
        game.time.events.add(Phaser.Timer.SECOND * 0.3, function () {
            if(!this.isBut && !game.gamePaused && !this.endGame){
                //console.log("but !!!");
                this.isBut = true;
                this.score[0]++;
                game.pcGo = false;
                
                this.tweenMsg(this.msgBut);     
                this.replayGo(false);
                        
           }
       }, this);

    },

    replayGo: function(humanBut) {
        game.gamePaused = true;
        game.time.events.add(Phaser.Timer.SECOND * 2.2, function () {
           // if(!humanBut)game.pcGo = false;

            if(game.playerLock){
                game.playerLock =false;
                if(this.freeze.alpha==1) this.freeze.alpha=0;
            }
            if(game.playerPCLock){
                game.playerPCLock =false;
                if(this.freeze2.alpha==1) this.freeze2.alpha=0;
            }

            if(this.bomb.alpha == 1 ) this.bomb.alpha = 0;
            if(this.explosion.alpha == 1 ) this.explosion.alpha = 0;
            if(game.playerPCBigJump) game.playerPCBigJump = false;
             if(game.playerBigJump) game.playerBigJump = false;

            if(this.butL.scale.x != 0.8){

                this.butL.scale.setTo(0.8,0.8);
                this.butL.body.setSize(this.butL.width*1.1, 2, 0, - this.butL.height + 1);
                this.butL.cage.x = this.butL.width/1.2;
                this.butL.cage.height = this.butL.height - 10;

            }

            if(this.butR.scale.x != 0.8){

                this.butR.scale.setTo(0.8,0.8);
                this.butR.body.setSize(this.butR.width*1.1, 2, 0, - this.butR.height + 1);
                this.butR.cage.x = -this.butL.width/1.2;
                this.butR.cage.height = this.butL.height - 10;

            }

            for( var i = 0; i<this.bonus.length; i++){

                if(this.bonus[i].isShow){

                    this.bonus[i].isShow = false;
                    this.bonus[i].alpha = 0;
                    this.bonus[i].scale.setTo(0,0);
                }

            }

            game.lastBounce = false;
            this.ball.body.velocity.setTo(0,0);
            if(!this.endGame){
                this.ball.position = {x:this.world.centerX,y: this.world.centerY - 30};
                this.player.x = this.player.initPos.x;
                this.playerPC.x = this.playerPC.initPos.x;
                this.ball.body.velocity.setTo(humanBut?-80:80, 100);
                game.gamePaused =false;
                this.scoreTxt.setText(this.score[0]+ " - "+ this.score[1]);
                game.time.events.add(Phaser.Timer.SECOND * 1, function () {
                      this.isBut = false;
                       this.pauseLock = false;
                      game.pcGo = true;
                }, this);
            
            }

        }, this);
    },

    replay: function() {
        if(this.winGame){

            var randomId = game.rnd.integerInRange(0, game.players.length);
            if( game.players[randomId].name == game.currentPlayer.name){
                if (randomId != 0) randomId --;
                else randomId ++;
            }
            game.currentPlayerPC = game.players[randomId];

        }
       
        this.stateStatus = 'playing';
        this.state.restart(true);
        
    },

    quit: function() {

        this.stateStatus = 'quit';
        this.state.start('MainMenu');
        
    },

    pauseGame: function() {

        if(!this.pauseLock && !this.isBut){

            this.pauseLock = true;

            if(!game.gamePaused){

                game.gamePaused = !game.gamePaused;  
                this.pauseBtn.loadTexture("resumeBtn");
            } else{

                game.gamePaused = !game.gamePaused;  
                this.pauseBtn.loadTexture("pauseBtn"); 

                if((this.ball.x<=this.butL.cage.world.x+10) && !this.isBut){
                    this.shootCageL();
                    //console.log("L"+ this.butL.cage.world.x);
                }
                else if((this.ball.x>=this.butR.cage.world.x-10) && !this.isBut){
                    this.shootCageR(); 
                    //console.log("R"+ this.butR.cage.world.x);
                }
            }

            

            game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
             
                this.pauseLock = false;

            }, this);

        }
        
    },

    timeOut: function (){

        var time = 0;
        this.endGame = true;
        if(this.isBut) time = 1.5;

        game.time.events.add(Phaser.Timer.SECOND * time, function () {
             
            game.gamePaused = true;
            if(this.score[1]> this.score[0]){
                this.showWin();
            }
            else if(this.score[1]< this.score[0]){

                this.showFail();
            }
            else
                this.showEquality();

        }, this);
    },

  
    
    render: function() {

        // Display
        //  game.debug.spriteBounds(game.btnKeyU);
       //   game.debug.spriteBounds(game.btnKick);

        // game.debug.body(this.playerPC.shoe);
    //   game.debug.body(this.playerPC);

    //   game.debug.body(this.player.shoe);
     //  game.debug.body(this.player);
    //    game.debug.body(this.butL.cage);
     //    game.debug.body(this.butR.cage);
    },

 

    showWin: function(){

        if(!this.popup.isShow){

            var txtWin = game.add.sprite(0,0,"winTxt");
            txtWin.anchor.setTo(0.5,0.5);
            this.popup.addChild(txtWin);
            this.popup.bringToTop();
            this.winGame = true;

            if(game.currentPlayerPC.locked){
                txtWin.y -= 30;
                var iconUnlock = game.add.sprite(-this.popup.width/2 + 100,48,'players_btn', game.currentPlayerPC.key);
                iconUnlock.anchor.setTo(0.5, 0.5);
                var txtUnlock =  game.add.bitmapText(20,46, 'unlockFont', game.currentPlayerPC.name+ " "+ this.getText("popupWin_txtUnlock"),16);
                txtUnlock.align = 'left';
                txtUnlock.maxWidth = 305;
                txtUnlock.anchor.setTo(0.5, 0.5);

                this.defuzzText(txtUnlock);

                this.popup.addChild(iconUnlock);
                this.popup.addChild(txtUnlock);

                game.currentPlayerPC.locked = false;
                game.stat[game.currentPlayerPC.id] = 1;
                localStorage.setItem('stat', JSON.stringify(game.stat));
            }

           



            this.popup.loadTexture("popupWin");
            this.popup.btnReplay.loadTexture("btn","btn_continue.png"); 
            this.popup.btnReplay.setFrames("btn_continue.png","btn_continue.png","btn_continue_push.png","btn_continue_push.png");
            this.popup.title.y = 2- this.popup.height/2;
            this.popup.isShow = true;
            this.popup.alpha = 1;

            game.add.tween(this.popup).to({y: game.world.centerY}, 1000, Phaser.Easing.Back.Out, true,400);
       
        }
       
    },

    showFail: function(){
        if(!this.popup.isShow){
            this.popup.bringToTop();

            var txtFail = game.add.sprite(0,0,"failTxt");
            txtFail.anchor.setTo(0.5,0.5);
            this.popup.addChild(txtFail);

            this.popup.isShow = true;
            this.popup.alpha = 1;
            game.add.tween(this.popup).to({y: game.world.centerY}, 1000, Phaser.Easing.Back.Out, true,400);
       
        }
    },

    showEquality: function(){
        if(!this.popup.isShow){

            this.popup.loadTexture("popupFail");
            this.popup.bringToTop();

            var txtEquality = game.add.sprite(0,0,"equalityTxt");
            txtEquality.anchor.setTo(0.5,0.5);
            this.popup.addChild(txtEquality);

            this.popup.isShow = true;
            this.popup.alpha = 1;
            game.add.tween(this.popup).to({y: game.world.centerY}, 1000, Phaser.Easing.Back.Out, true,400);
       
        }
        
    },

    scaleBall : function(speed){
    

        game.add.tween(this.ball.scale).to({x: 0.5, y : 0.5}, time, Phaser.Easing.LINEAR, true);
    },

    tweenMsg : function (msg){
        msg.scale.set(0,0);
        msg.alpha = 1;
        msg.bringToTop();
        var tweenTxt = game.add.tween(msg.scale).to({x: 1.1, y: 1.1}, 900, Phaser.Easing.Back.Out, true,300);
            tweenTxt.onComplete.addOnce(function(){
            game.add.tween(msg).to({alpha:0}, 800, Phaser.Easing.LINEAR, true,800);
        }, this);
    },

    showBonus : function (){

        if(!game.gamePaused && !this.isBut ){
            var compt = 0;
            var randomId = 0;
            var random = 0;

            var tabPro =[];

            for(var i = 0; i<this.bonus.length; i++){

                if(!this.bonus[i].isShow)
                    tabPro.push(i);
            }


            if(tabPro.length > 0){
                randomId = game.rnd.integerInRange(0,tabPro.length-1);
                random =  tabPro[randomId]
                   
             
                if(!this.bonus[random].isShow){
                    var randomX = game.rnd.integerInRange(170,game.world.width-170);
                    var randomY = game.rnd.integerInRange(250,game.world.height-250);
                   
                    this.testPos = game.add.sprite(randomX,randomY,'jumpBonus');
                   // this.testPos.x = 100;
                    this.testPos.alpha = 1;
                    this.testPos.anchor.setTo(0.5, 0.5);
                   

                    if (this.checkOverlap(this.testPos, this.wallC)){
                        console.log("overlap wallC")
                        this.testPos.x = randomX = this.testPos.x>this.wallC.x? randomX + 80 : randomX - 80 ;
                        this.testPos.y = randomY =  randomY + 70 ;

                    }
                    var id = 0;
                   for(var i = 0; i<this.bonus.length; i++){

                        if(id == this.bonus.length) id = 0;
                        if(this.bonus[id].isShow ){
                            
                          if (this.checkOverlap( this.testPos , this.bonus[id])){
                                //console.log('overlap');
                                this.testPos.x = randomX = this.testPos.x>this.bonus[id].x? randomX + 80 : randomX - 80 ;
                                this.testPos.y = randomY =  this.testPos.y>this.bonus[id].y? randomY + 70 : randomY - 70 ;
                            }
                        }
                        id++;
                       
                    }

                    this.testPos.destroy();
                    this.bonus[random].x = randomX;
                    this.bonus[random].y = randomY;
                    this.bonus[random].alpha = 1;
                    this.bonus[random].body.enable = true;
                    this.bonus[random].isShow = true;
                    var tweenTxt = game.add.tween(this.bonus[random].scale).to({x: 1, y: 1}, 900, Phaser.Easing.Back.Out, true);
                }
            }
        }
    },

    bonusBigCage : function(){
        if(this.bonus.length !=0 && this.bonus[0].isShow && game.lastBounce!= false && !this.isBut){

            this.bonus[0].isShow = false;
            this.bonus[0].alpha = 0;
            this.bonus[0].scale.setTo(0,0);

            if(game.lastBounce == "human"){

                this.butL.scale.setTo(1.1,1.1);
                this.butL.body.setSize(this.butL.width*0.8, 2, 0, - this.butL.height + 1);
                this.butL.cage.x = this.butL.width/1.2;
                this.butL.cage.height = this.butL.height - 10;

            }
            else if(game.lastBounce == "PC"){

                this.butR.scale.setTo(1.1,1.1);
                this.butR.body.setSize(this.butR.width*0.8, 2, 0, - this.butR.height + 1);
                this.butR.cage.x = -this.butR.width/1.2;
                this.butR.cage.height = this.butR.height - 10;


            }
            
        }
    },

    bonusSmallCage : function(){
        if(this.bonus.length !=0 && this.bonus[1].isShow && game.lastBounce!= false && !this.isBut){

            this.bonus[1].isShow = false;
            this.bonus[1].alpha = 0;
            this.bonus[1].scale.setTo(0,0);

            if(game.lastBounce == "human"){

                this.butL.scale.setTo(0.5,0.5);
                this.butL.body.setSize(this.butL.width *1.8, 4, 0, - this.butL.height + 1);
                this.butL.cage.x = this.butL.width/1.2;
                this.butL.cage.height = this.butL.height - 10;

            }
            else if(game.lastBounce == "PC"){

                this.butR.scale.setTo(0.5,0.5);
                this.butR.body.setSize(this.butR.width * 1.8, 4, 0, - this.butR.height + 1);
                this.butR.cage.x = -this.butR.width/1.2;
                this.butR.cage.height = this.butR.height - 10;


            }
           
        }
    },

    bonusFreeze : function(){
        if(this.bonus.length !=0 && this.bonus[2].isShow && game.lastBounce!= false && !this.isBut){

            this.bonus[2].isShow = false;
            this.bonus[2].alpha = 0;
            this.bonus[2].scale.setTo(0,0);

            if(game.lastBounce == "human" && !game.playerPCLock){

                this.freeze2.x = this.playerPC.x;
                this.freeze2.y = this.playerPC.y;
                this.freeze2.alpha = 1;

                game.playerPCLock = true;
                game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                    if(game.playerPCLock){
                        game.playerPCLock = false;
                          this.freeze2.alpha = 0;
                    }
                },this);


            }
            else if(game.lastBounce == "PC" && !game.playerLock){

                this.freeze.x = this.player.x;
                this.freeze.y = this.player.y;
                this.freeze.alpha = 1;

                game.playerLock = true;
                game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                    if(game.playerLock){
                        game.playerLock = false;
                          this.freeze.alpha = 0;
                    }
                },this);
            }
        }
    },

    malusFreeze : function(){
        if(this.bonus.length !=0 && this.bonus[3].isShow && game.lastBounce!= false && !this.isBut){

            this.bonus[3].isShow = false;
            this.bonus[3].alpha = 0;
            this.bonus[3].scale.setTo(0,0);

            if(game.lastBounce == "PC" && !game.playerPCLock){

                this.freeze2.x = this.playerPC.x;
                this.freeze2.y = this.playerPC.y;
                this.freeze2.alpha = 1;

                game.playerPCLock = true;
                game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                    if(game.playerPCLock){
                        game.playerPCLock = false;
                          this.freeze2.alpha = 0;
                    }
                },this);


            }
            else if(game.lastBounce == "human" && !game.playerLock){

                this.freeze.x = this.player.x;
                this.freeze.y = this.player.y;
                this.freeze.alpha = 1;

                game.playerLock = true;
                game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                    if(game.playerLock){
                        game.playerLock = false;
                          this.freeze.alpha = 0;
                    }
                },this);
            }
        }
    },

    bonusBomb : function(){
        if(this.bonus.length !=0 && this.bonus[4].isShow && game.lastBounce!= false && !this.isBut){

            this.bonus[4].isShow = false;
            this.bonus[4].alpha = 0;
            this.bonus[4].scale.setTo(0,0);

            this.bomb.y = -100;
            this.bomb.alpha = 1;
            this.bomb.x = this.bonus[4].x;
            this.bomb.body.allowGravity =true;
            this.bomb.body.velocity.y = 400;
            this.bombLock = false;
        }else{
            this.bomb.y = -100;
            this.bomb.alpha = 1;
            this.bomb.x = this.ball.x;
            this.bomb.body.allowGravity =true;
           // this.bomb.body.velocity.y = 400;
           this.bomb.body.gravity.y = 500;
            this.bombLock = false;
        }

    },

    bonusJump : function(){
        if(this.bonus.length !=0 && this.bonus[5].isShow && game.lastBounce!= false && !this.isBut){

            this.bonus[5].isShow = false;
            this.bonus[5].alpha = 0;
            this.bonus[5].scale.setTo(0,0);

            if(game.lastBounce == "human"){

               game.playerBigJump = true;
               game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                    if(game.playerBigJump){
                        game.playerBigJump = false;
                    }
                },this);

            }
            else if(game.lastBounce == "PC"){

               game.playerPCBigJump = true;
               game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                    if(game.playerPCBigJump){
                        game.playerPCBigJump = false;
                    }
                },this);;


            }

        }

    },

    getText: function(name){

        for ( var i=0;i<game.textJSON.length;i++){

            if(game.textJSON[i].Nom == name)
               return game.langue == "FR" ? game.textJSON[i].Texte_FR : game.textJSON[i].Texte_EN;


        }

    },

    defuzzText : function(text){
        text.x = Math.round(text.x);
        text.y = Math.round(text.y);

    },

    checkOverlap : function(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        boundsA.x = spriteA.x;
        boundsA.y = spriteA.y;

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    clickSound: function() {

        if(!game.soundLock){

          game.soundLock = true;
          if(game.sound.mute){
            game.sound.mute = false;
            this.soundBtn.loadTexture('soundBtnOn');

          }else{
            game.sound.mute = true;
            this.soundBtn.loadTexture('soundBtnOff');

          }

          game.time.events.add(Phaser.Timer.SECOND * 0.3, function () {
            game.soundLock = false;
          }, this);

        }
    
  },



};