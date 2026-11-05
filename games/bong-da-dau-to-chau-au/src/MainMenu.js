var mainmenu = function(game) {};

mainmenu.prototype = {
	  create: function() {
		
  		  this.bg = game.add.sprite(0,0,'bg');
  		  if(!game.device.desktop){
              this.bg.scale.x = game.world.width/this.bg.width;
              this.bg.scale.y = game.world.height/this.bg.height;
        }

        game.soundMenu = game.add.audio('menuSound');
        game.soundGame = game.add.audio('gameSound');

        game.soundMenu.loopFull();
        game.soundLock = false;

        this.logo= game.add.sprite(game.world.centerX, 140,"logo");
        this.logo.anchor.setTo(0.5, 0.5);

		    this.popup = game.add.sprite(game.world.centerX, 0, "popupRules" );
        this.popup.y =  - this.popup.height - 40;
        this.popup.x =game.world.centerX - this.popup.width/2;

        this.popup.anchor.setTo(0, 0);
        this.popup.isShow = false;

        this.txtTab = [];
    
        var fontItem = { font: "40px OpenSans-Semibold", fill: "#ffffff", align:"left",wordWrap:true,wordWrapWidth:448};
        var fontItem2 = { font: "10px OpenSans-Bold", fill: "#ffffff", align:"left",wordWrap:true,wordWrapWidth:118};

        this.soundBtn = game.add.button(40, 40, game.sound.mute?'soundBtnOff':'soundBtnOn', this.clickSound.bind(this),this);
        this.soundBtn.anchor.setTo(0.5,0.5);
       

        var title =  game.add.bitmapText(Math.round(this.popup.width/2),16, 'titleFont', this.getText("rules_title"),20);
      	title.anchor.setTo(0.5,0.5);
        title.nameTxt = "rules_title";
      	this.defuzzText(title);
        this.popup.addChild(title);
        this.txtTab.push(title);

        var flagName = game.langue == "FR" ? "EN":"FR";
        this.btnSwitchTxt = game.add.button( this.popup.width - 146 , 17 , 'flag', this.switchText.bind(this), flagName+'.png',flagName+'.png',flagName+'.png',flagName+'.png' );
        this.btnSwitchTxt.anchor.setTo(0.5, 0.5);
         this.btnSwitchTxt.scale.setTo(0.6, 0.6);
        this.popup.addChild(this.btnSwitchTxt);

        var subTitle =  game.add.bitmapText(34,49, 'subTitleFont', this.getText("rules_subTitle1"),12);
      	subTitle.align = 'left';
        subTitle.nameTxt = "rules_subTitle1";
      	subTitle.maxWidth = 293;
      	this.defuzzText(subTitle);
        this.popup.addChild(subTitle);
        this.txtTab.push(subTitle);

        var subTitle2 =  game.add.bitmapText(359,49, 'subTitleFont', this.getText("rules_subTitle2"),12);
      	subTitle2.align = 'left';
        subTitle2.nameTxt = "rules_subTitle2";
      	subTitle2.maxWidth = 272;
      	this.defuzzText(subTitle2);
        this.popup.addChild(subTitle2);
        this.txtTab.push(subTitle2);

        var item =  game.add.bitmapText(77,116,'itemFont', this.getText("rules_bonusCage"),11);
        item.nameTxt = "rules_bonusCage";
    		item.maxWidth = 126;
       	this.defuzzText(item);
        this.popup.addChild(item);

        var item2 =  game.add.bitmapText(270,116, 'itemFont', this.getText("rules_malusCage"),11);
        item2.nameTxt = "rules_malusCage";
      	item2.maxWidth = 126;
      	this.defuzzText(item2);
        this.popup.addChild(item2);

        var item3 =  game.add.bitmapText(459,110,'itemFont' , this.getText("rules_malusBomb"),11);
        item3.nameTxt = "rules_malusBomb";
        item3.maxWidth = 180;
      	this.defuzzText(item3);
        this.popup.addChild(item3);

        var item4 =  game.add.bitmapText(77,178,'itemFont',  this.getText("rules_bonusFreeze"),11);
        item4.nameTxt = "rules_bonusFreeze";
       	item4.maxWidth = 126;
     	  this.defuzzText(item4);
        this.popup.addChild(item4);


        var item5 =  game.add.bitmapText(270,178,'itemFont',  this.getText("rules_malusFreeze"),11);
        item5.nameTxt = "rules_malusFreeze";
        item5.maxWidth = 126;
     	  this.defuzzText(item5);
        this.popup.addChild(item5);

        var item6 =  game.add.bitmapText(459,180, 'itemFont', this.getText("rules_bonusJump"),11);
        item6.nameTxt = "rules_bonusJump";
        item6.maxWidth = 126;
     	  this.defuzzText(item6);
        this.popup.addChild(item6);

        this.txtTab.push(item,item2,item3,item4,item5,item6);


        var btnPlay = game.add.button(this.popup.width/2,this.popup.height,"btn",this.clickStart.bind(this), this,"btn_play.png","btn_play.png","btn_play_push.png","btn_play_push.png");//,"btnReplay","btnReplay","btnReplayPush","btnReplayPush");
        btnPlay.anchor.setTo(0.5, 0.5);

        this.popup.addChild(btnPlay);
        game.add.tween(this.popup).to({y: game.world.centerY - this.popup.height/2 + 108}, 600, Phaser.Easing.Back.Out, true,400);

		
	},


	clickStart: function() {

		game.add.tween(this.popup).to({y: game.world.height + this.popup.height}, 900, Phaser.Easing.Back.Out, true);
		game.time.events.add(Phaser.Timer.SECOND * 0.8, function () {
			this.state.start('PlayerSelect');
		}, this);
		
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

	getText: function(name){

		for ( var i=0;i<game.textJSON.length;i++){

			if(game.textJSON[i].Nom == name)
				return game.langue == "FR" ? game.textJSON[i].Texte_FR : game.textJSON[i].Texte_EN;

		}

	},

  switchText: function(){

      this.btnSwitchTxt.setFrames(game.langue+'.png',game.langue+'.png',game.langue+'.png',game.langue+'.png');
       if (game.langue == "FR") game.langue = "EN";
       else game.langue = "FR";

       for ( var i = 0 ; i< this.txtTab.length; i++){

          this.txtTab[i].setText(this.getText(this.txtTab[i].nameTxt));

       }

      

    },

	defuzzText : function(text){
		text.x = Math.round(text.x);
      text.y = Math.round(text.y);

	}
	
};