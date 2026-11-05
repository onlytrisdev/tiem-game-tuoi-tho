var Player = function(game,x,y,human,name,level, key) {
    console.log("create Player : " + name);

    
     
    Phaser.Sprite.call(this, game, x, y, "playerEmpty");
    game.physics.enable(this, Phaser.Physics.ARCADE);    
   
    this.anchor.set(0.5, 1);
   
    this.body.setSize(this.width - 14,this.height - 16,-2,-2);
    this.body.collideWorldBounds = true;
    this.body.gravity.y = 1000;
    this.body.maxVelocity.y = 700;
    this.body.immovable = false;
    this.body.friction.x = 0;
    this.body.friction.y = 0;
    this.initPos = {x:x,y:y};
    // this.body.checkCollision.up = false;
      this.body.checkCollision.down = false;
    this.body.blocked.up = true;
    if(!human){
    this.body.mass = 3;
    this.body.immovable = false;
    } 

    this.body.mass = 3.5;
    this.body.bounce.set(0);
    this.jumpTimer = 0;
    this.isShoot = false;
    this.isJump = false;
    this.human = human;
    this.level = level;
    this.lvlSpeed = human? 400 : 250;
    this.lvlJump = human? -470 : -450;
    if (!human) this.lvlTimerJump = 1600;
    if( this.level == 2){
        this.lvlSpeed = human ? 450 : 300;
        this.lvlJump = human ? -500 : -470;
        if (!human) this.lvlTimerJump = 1400;
    }

    if( this.level == 3){
        this.lvlSpeed = human ? 500 : 350;
        this.lvlJump = human ? -530 : -510;
        if (!human) this.lvlTimerJump = 1200;
    
    }


    this.cursors = game.input.keyboard.createCursorKeys();
    if(human){
        this.shootKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.shootKey.onDown.add(this.shoot, this);
        if (!this.game.device.desktop)
            game.mobile
    }

    this.img = game.add.sprite(0,-this.height-2,human?"players":"playersPC",key);
    this.img.anchor.setTo(0.5,0);

    if(this.img.height < 91) this.img.y+= 91- this.img.height;   
   
    if(!human){ 

        this.body.setSize(this.width - 14,this.height - 16,2,-2);
        this.shoe = game.add.sprite(-1,-35,'shoe');
        this.shoe.angle = 12;
        game.physics.enable(this.shoe, Phaser.Physics.ARCADE);
        this.shoe.body.setSize(this.shoe.width - 12,this.shoe.height*2.5, 10,-this.shoe.height*1.2);
        this.shoe.body.immovable = true;
        this.shoe.body.allowGravity = false;
        this.shoe.anchor.set(0.3, 0);
        this.shoe.pivot.y = -30;
    }
    else{

        this.shoe = game.add.sprite(-1,-35,'shoeH');
        this.shoe.angle = -12;
        game.physics.enable(this.shoe, Phaser.Physics.ARCADE);
        this.shoe.body.setSize(this.shoe.width - 20,this.shoe.height*2.5, -16,-this.shoe.height*1.2);
        this.shoe.body.immovable = true;
        this.shoe.body.allowGravity = false;
        this.shoe.anchor.set(0.6, 0);
        this.shoe.pivot.y = -30;

    }
    
    this.addChild(this.shoe);
    this.addChild(this.img);
    this.shoe.sendToBack();
    this.img.bringToTop();


};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
  
Player.prototype.update = function() {

    if(!game.gamePaused){

        if(this.human){

            this.body.velocity.x = 0;
            if(!game.playerLock){

                 if(this.y > this.groundY ) this.y = this.groundY  ;
                if ((this.cursors.left.isDown || game.mobileLeft ) && this.x> this.width*2.5   )
                {
                    this.body.velocity.x = -this.lvlSpeed;
                    if(!game.pcGo) game.pcGo = true;
                    if(game.collidePlayer && this.y == game.playerPC.y && this.x>game.playerPC.x && game.playerPC.x< game.rnd.integerInRange(this.width*1,this.width*5))
                        this.body.velocity.x =0;

                }else{
                    game.mobileLeft = false;
                }

               if ((this.cursors.right.isDown  || game.mobileRight ) && this.x< game.world.width - this.width*1.3 )
                {
                    this.body.velocity.x = this.lvlSpeed;
                    if(!game.pcGo) game.pcGo = true;

                }else{
                    game.mobileRight = false;
                }

                if ((this.cursors.up.isDown ||game.mobileJump )&& (this.body.onFloor() || Math.abs(this.x - game.playerPC.x) < this.width*1.1) && game.time.now > this.jumpTimer)
                {   
                    this.body.velocity.y = (game.playerBigJump?this.lvlJump - 180:this.lvlJump);
                    this.jumpTimer = game.time.now + (game.playerBigJump?1200:750);
                    if(!game.pcGo) game.pcGo = true;
                }else{
                     //if(game.time.now > this.jumpTimer  )
                      //  this.body.velocity.y = 100 ; 
                        game.mobileJump = false;
                }
            } 
            else {
                
                this.body.velocity.x = 0;

            }

            if(this.shoe.body.rotation>70){

                  this.shoe.body.angularVelocity = -420;
            }
            if(this.shoe.body.rotation<-10){

                  this.shoe.body.angularVelocity = 0;

                  this.isShoot = false;
            }
            
        }

        else {
                
            if(!game.playerPCLock){
                
                if( game.collidePlayer && this.y == game.player.y && this.x<game.player.x && (this.cursors.left.isDown || game.mobileLeft ) ){

                    this.isWalk = true;
                    if(game.pcGo)
                        this.body.velocity.x = this.lvlSpeed*6;
                }

                if(game.ball.body.velocity.x > 0){
                     if(game.ball.x - this.x > this.width/1.5 && game.ball.x < game.world.width-200 && !this.walkLock && this.x< game.world.width - this.width*2 ){

                       // console.log("walk");
                        this.isWalk = true;
                        if(game.pcGo)
                        this.body.velocity.x = this.lvlSpeed;

                    }
                    else if(game.ball.x - this.x <  this.width/2 && this.x > 100 && !this.walkLock && this.x> this.width*1.4 ) {

                       // console.log("walk back");
                        this.isWalk = true;
                        this.body.velocity.x = -this.lvlSpeed;

                    }

                    else if(!this.walkLock) {
                        this.walkLock = true;
                        this.body.velocity.x = 0;
                        this.isWalk = false;
                         game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
                                 this.walkLock = false;
                        }, this);

                    }
                }

                else if(game.ball.body.velocity.x <= 0){

                    if(game.ball.x - this.x < game.ball.width*2.2 && this.y - game.ball.y> this.height && this.x > 100 &&  game.ball.body.velocity.x < -200 && !this.walkLock && this.x> this.width*1.4 ){

                        //console.log("walk back");
                        this.isWalk = true;

                        this.body.velocity.x = -this.lvlSpeed;

                    }

                    
                    else if(game.ball.x - this.x < game.ball.width && this.x > 100 && !this.walkLock && this.x> this.width*1.4 ){

                       // console.log("walk back");
                        this.isWalk = true;
                        this.body.velocity.x = -this.lvlSpeed-50;

                    }

                    else if(game.ball.x - this.x >this.width*2.2 && game.ball.x < game.world.width-200 && this.y - game.ball.y < this.height*1.5 &&!this.walkLock && this.x< game.world.width - this.width*2 ) {

                       //console.log("walk");
                        this.isWalk = true;
                        if(game.pcGo)
                        this.body.velocity.x = this.lvlSpeed;
                        
                    }


                    else if(!this.walkLock) {
                        this.walkLock = true;
                        this.body.velocity.x = 0;
                        this.isWalk = false;
                         game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
                                 this.walkLock = false;
                        }, this);

                    }

                    

                }
             

                if (this.isJump && this.body.onFloor() && game.time.now > this.jumpTimer)
                {
                    
                    this.body.velocity.y = (game.playerPCBigJump?this.lvlJump - 180:this.lvlJump);
                    this.jumpTimer = game.time.now + (game.playerPCBigJump?1900:this.lvlTimerJump);
                    
                   
                }else{
                    this.isJump = false;
                }

                if(this.shoe.body.rotation<-60 && this.isShoot){

                  this.shoe.body.angularVelocity = 400;
                }
                if(this.shoe.body.rotation>10 && this.isShoot){
                      this.shoe.body.angularVelocity = 0;
                      this.isShoot = false;
                }

                
                if(game.ball.x - this.x <  game.ball.width*1.1 && game.ball.x - this.x > 0 && this.y - game.ball.y < game.ball.height && this.y - game.ball.y > -game.ball.height/2 && !this.isShoot){
                    this.shoot();
                }


                if(game.ball.x - this.x <  game.ball.width*1.3 && game.ball.x - this.x > 0 && this.y - game.ball.y > this.height/1.7 && !this.isJump){
                    
                    this.isJump = true;
                }

            }
            else {
                
                this.shoe.body.angularVelocity = 0;
                this.body.velocity.x = 0;
                 this.shoe.angle = 12;

            }

            if(this.body.velocity.y < -750){
                //console.log("velocity Y issue");
                this.body.velocity.y = 0;

            }
            if(this.body.velocity.x < -500){
                //console.log("velocity X negative issue");
                this.body.velocity.x = -100;

            }
            if(this.body.velocity.x > 500){
                //console.log("velocity X positive issue");
                this.body.velocity.x = 100;

            }


               
        }
     
    }else if(game.gamePaused){

        if (this.human){
            if(this.shoe.body.rotation>70){

                  this.shoe.body.angularVelocity = -400;
            }
            if(this.shoe.body.rotation<-10){

                  this.shoe.body.angularVelocity = 0;

                  this.isShoot = false;
            }

        }else{

             if(this.shoe.body.rotation<-60){

              this.shoe.body.angularVelocity = 400;
            }
            if(this.shoe.body.rotation>10){
                  this.shoe.body.angularVelocity = 0;
                  this.isShoot = false;
            }
        }

         if(this.body.onFloor()){
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
         }
    }

}; 

Player.prototype.shoot = function() {
    if(!this.isShoot && !game.gamePaused ){
        if(!game.pcGo) game.pcGo = true;
        this.isShoot = true;
        if(this.human && !game.playerLock)
            this.shoe.body.angularVelocity = 500;
        if(!this.human && !game.playerPCLock)
            this.shoe.body.angularVelocity = -500;
    }
};
    