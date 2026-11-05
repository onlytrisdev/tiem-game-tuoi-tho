var playerSelect = function(game) {};
playerSelect.prototype = {
	create: function() {

       
  		  this.bg = game.add.sprite(0,0,'bg_select');
  		  if(!game.device.desktop){
              this.bg.scale.x = game.world.width/this.bg.width;
              this.bg.scale.y = game.world.height/this.bg.height;
        }

        this.bgVs= game.add.sprite(game.world.centerX, 180,"bg_vs");
        this.bgVs.anchor.setTo(0.5, 0.5);

        game.currentPlayer = false; //game.players[0];
        game.currentPlayerPC = false; // game.players[11];

        this.soundBtn = game.add.button(40, 40, game.sound.mute?'soundBtnOff':'soundBtnOn', this.clickSound.bind(this),this);
        this.soundBtn.anchor.setTo(0.5,0.5);

        this.btnTab = [];

        var offsetX = game.world.centerX - 338;
        var offsetY = 440 ;

        for( var i =0; i< game.players.length ; i++){
            if(i<12){
                var X = offsetX + i * 64;
                var Y = offsetY ;
            }
            else if (i<21){
                var X = offsetX + 100 + (i-12) * 64;
                var Y = offsetY + 66 ;
            }else{
                 var X = offsetX+ (i-21) * 64;
                var Y = offsetY + 66*2;
            }
            if(!game.players[i].locked){
                var btn = game.add.button(X,Y,"players_btn", this.clickBtn.bind(this),this,game.players[i].key,game.players[i].key,game.players[i].key,game.players[i].key);
                btn.id = i;
                
            }
            else{
                var keyLock = game.players[i].key.slice(0,game.players[i].key.length - 4);
                var btn = game.add.sprite(X,Y,"players_btn",keyLock+"_locked.png");

            }
            btn.anchor.setTo(0.5, 0.5);
            this.btnTab.push(btn);

        }

        this.selectPlayer = false;
        this.selectBtn = 0;
        this.playerG = game.add.group();
        this.playerPCG = game.add.group();

        this.playerName =  game.add.bitmapText(game.world.centerX - 188,311, 'titleFont',game.players[0].name ,20);
        this.playerName.anchor.setTo(0.5,0.5);
        this.defuzzText(this.playerName);
        this.playerG.add(this.playerName);
       
        
        this.playerPCName =  game.add.bitmapText(game.world.centerX + 196,311, 'titleFont',game.players[11].name ,20);
        this.playerPCName.anchor.setTo(0.5,0.5);
        this.defuzzText(this.playerPCName);
        this.playerPCG.add(this.playerPCName);


        this.playerFlag = game.add.sprite(game.world.centerX - 234,48,game.players[0].flag);
        this.playerG.add(this.playerFlag);
 
        this.playerPCFlag = game.add.sprite(game.world.centerX + 236,38,game.players[11].flag);
        this.playerPCFlag.scale.setTo(1,-1);
        this.playerPCFlag.rotation = 135;
        this.playerPCG.add(this.playerPCFlag);


        this.playerShoe = game.add.sprite(game.world.centerX - 142,284,"players_select","shoe.png");
        this.playerShoe.anchor.setTo(0.5,1);
        this.playerG.add(this.playerShoe);

        this.playerPCShoe = game.add.sprite(game.world.centerX + 150,284,"players_select","shoe.png");
        this.playerPCShoe.anchor.setTo(0.5,1);
        this.playerPCShoe.scale.setTo(1,-1);
        this.playerPCShoe.rotation = 135;
        this.playerPCG.add(this.playerPCShoe);

        this.player = game.add.sprite(game.world.centerX - 146,265,"players_select",game.players[0].key);
        this.player.anchor.setTo(0.5,1);
        this.playerG.add(this.player);

        this.playerPC = game.add.sprite(game.world.centerX + 156,264,"players_select",game.players[11].key);
        this.playerPC.anchor.setTo(0.5,1);
        this.playerPC.scale.setTo(1,-1);
        this.playerPC.rotation = 135;
        this.playerPCG.add(this.playerPC);

        game.currentBtnPlayer =  this.btnTab[0];
        game.currentBtnPlayerPC =  this.btnTab[11];

      
        this.targetPlayer = game.add.sprite(game.currentBtnPlayer.x-1,game.currentBtnPlayer.y,"targetPlayer");
        this.targetPlayer.anchor.setTo(0.5, 0.5);
        this.targetPlayerPC = game.add.sprite(game.currentBtnPlayerPC.x-1,game.currentBtnPlayerPC.y,"targetPlayerPC");
        this.targetPlayerPC.anchor.setTo(0.5, 0.5);

        this.playerG.add(this.targetPlayer);this.playerPCG.add(this.targetPlayerPC);

        this.btnSelectPlayer = game.add.button(game.world.centerX - 142,196,"btn", this.clickSelectPlayer.bind(this),this,"btn_select_player.png","btn_select_player.png","btn_select_player_push.png","btn_select_player_push.png");
        this.btnSelectPlayer.anchor.setTo(0.5, 0.5);
        this.btnSelectPlayerPC = game.add.button(game.world.centerX + 143,170,"btn", this.clickSelectPlayerPC.bind(this),this,"btn_select_playerPC.png","btn_select_playerPC.png","btn_select_playerPC_push.png","btn_select_playerPC_push.png");
        this.btnSelectPlayerPC.anchor.setTo(0.5, 0.5);
        this.btnRandomPlayerPC = game.add.button(game.world.centerX + 144,224,"btn", this.clickRandomPlayer.bind(this),this,"btn_select_random.png","btn_select_random.png","btn_select_random_push.png","btn_select_random_push.png");
        this.btnRandomPlayerPC.anchor.setTo(0.5, 0.5);

        this.playerG.alpha = this.playerPCG.alpha = 0;

        this.btnPlay = game.add.button(game.world.centerX,370,"btn", this.clickPlay.bind(this),this,"btn_play.png","btn_play.png","btn_play_push.png","btn_play_push.png");
        this.btnPlay.scale.setTo(0,0);
        this.btnPlay.alpha = 0;
        this.btnPlay.anchor.setTo(0.5, 0.5);
		
	},


	clickPlay: function() {

		
		
		game.soundMenu.stop();
        game.soundGame.loopFull();
		this.game.state.start('Game');
		
		
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


    clickSelectPlayer: function() {
        if(this.selectBtn < 2 ){
            if(!game.currentPlayer) game.currentPlayer =  game.players[0];
            this.selectPlayer = "human";
            this.btnSelectPlayer.alpha = 0;
            this.targetPlayerPC.alpha = 0;
            this.playerG.alpha = 1;
            this.targetPlayer.alpha = 1;
            this.selectBtn++;
            this.btnSelectPlayer.kill();
            if(this.selectBtn >= 2){
                this.btnPlay.alpha = 1;
                game.add.tween(this.btnPlay.scale).to({x: 1, y: 1}, 600, Phaser.Easing.Back.Out, true);
            }
        }
    },

    clickSelectPlayerPC: function() {

        if(this.selectBtn < 2){
            if(!game.currentPlayerPC) game.currentPlayerPC =  game.players[11];
            this.selectPlayer = "PC";
            this.btnSelectPlayerPC.alpha = 0;
            this.targetPlayer.alpha = 0;
            this.btnSelectPlayerPC.kill();
            this.btnRandomPlayerPC.alpha = 0;
            this.btnRandomPlayerPC.kill();
            this.playerPCG.alpha = 1;
            this.targetPlayerPC.alpha = 1;
            this.selectBtn++;

            if(this.selectBtn >= 2){
                this.btnPlay.alpha = 1;
                game.add.tween(this.btnPlay.scale).to({x: 1, y: 1}, 600, Phaser.Easing.Back.Out, true);

            }
        }
    },

     clickRandomPlayer: function() {
         if(this.selectBtn < 2){
            if(!game.currentPlayerPC) game.currentPlayerPC =  game.players[11];
            this.selectPlayer = "PC";
            this.btnSelectPlayerPC.alpha = 0;
            this.targetPlayer.alpha = 0;
            this.btnSelectPlayerPC.kill();
            this.btnRandomPlayerPC.alpha = 0;
            this.btnRandomPlayerPC.kill();


            var randomId = game.rnd.integerInRange(0, game.players.length-1);
            if( game.currentPlayer != false && game.players[randomId].name == game.currentPlayer.name){
                if (randomId != 0) randomId --;
                else randomId ++;
            }

            game.currentPlayerPC = game.players[randomId];
            game.currentBtnPlayerPC = this.btnTab[randomId];
            this.targetPlayerPC.x = game.currentBtnPlayerPC.x;
            this.targetPlayerPC.y = game.currentBtnPlayerPC.y;

            this.playerPCName.setText(game.currentPlayerPC.name);
            this.playerPCFlag.loadTexture(game.currentPlayerPC.flag);
            this.playerPC.loadTexture("players_select",game.currentPlayerPC.key);

            this.targetPlayerPC.alpha = 1;
            this.playerPCG.alpha = 1;
            this.targetPlayerPC.alpha = 1;
            this.selectBtn++;

             if(this.selectBtn >= 2){
                this.btnPlay.alpha = 1;
                game.add.tween(this.btnPlay.scale).to({x: 1, y: 1}, 600, Phaser.Easing.Back.Out, true);

            }
        }
        
    },

    clickBtn: function(btn) {

        if(this.selectPlayer == "human" && game.currentPlayerPC.name != game.players[btn.id].name){
            game.currentPlayer = game.players[btn.id];
            game.currentBtnPlayer = btn;
            this.targetPlayer.x = game.currentBtnPlayer.x;
            this.targetPlayer.y = game.currentBtnPlayer.y;
           
            this.playerName.setText(game.currentPlayer.name);
            this.playerFlag.loadTexture(game.currentPlayer.flag);
            this.player.loadTexture("players_select",game.currentPlayer.key);
        }
        else if(this.selectPlayer == "PC" && game.currentPlayer.name != game.players[btn.id].name){
            game.currentPlayerPC = game.players[btn.id];
            game.currentBtnPlayerPC = btn;
            this.targetPlayerPC.x = game.currentBtnPlayerPC.x;
            this.targetPlayerPC.y = game.currentBtnPlayerPC.y;
           
            this.playerPCName.setText(game.currentPlayerPC.name);
            this.playerPCFlag.loadTexture(game.currentPlayerPC.flag);
            this.playerPC.loadTexture("players_select",game.currentPlayerPC.key);

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

	}
	
};