var preload = function(game) {};
preload.prototype = {
	preload: function() {
		
		this.bg = this.game.add.sprite(0, 0, 'bg');
	    if(!game.device.desktop){
            this.bg.scale.x = game.world.width/this.bg.width;
            this.bg.scale.y = game.world.height/this.bg.height;
        }

		var fontLoad = { font: "32px OpenSans-Semibold", fill: "#FFFFFF", align:"center"};
        this.loadFont = game.add.text(game.world.centerX,80," ",fontLoad);
		
		var preloadBG = this.add.sprite((this.world.width)*0.5, (this.world.height)*0.5, 'loading-background');
		preloadBG.anchor.set(0.5, 0.5);
		var preloadProgress = this.add.sprite((this.world.width)*0.5 - preloadBG.width/2 + 4, (this.world.height)*0.5 + 1, 'loading-progress');
		preloadProgress.anchor.set(0, 0.5);
		this.load.setPreloadSprite(preloadProgress);
		// game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

		var pack = preload.resources;
		for(var method in pack) {
			pack[method].forEach(function(args) {
				var loader = this.load[method];
				loader && loader.apply(this.load, args);
			}, this);
		}
	},
	
	create: function() {
		game.score = 0;
		game.nbTry = 0;
		game.nbBut = 0;
		game.nbFail = 0;

		if(localStorage.getItem('stat') == undefined){
			var stat =  [0,0,0,0,0,0,0,0,0,0,0,0];
			localStorage.setItem('stat', JSON.stringify(stat));
		}

		game.stat = JSON.parse(localStorage.getItem('stat')) ||  [0,0,0,0,0,0,0,0,0,0,0,0] ;
		

		game.players = [
          {key:"gareth_bale.png", name:this.getText("player7_name"),team:this.getText("country_name1"), flag:"WA", level:3 , locked:false},
          {key:"aaron_ramsey.png", name: this.getText("player1_name"), team:this.getText("country_name1"), flag:"WA", level:2 , locked:false},
          {key:"joe_allen.png", name:this.getText("player10_name"),team:this.getText("country_name1"), flag:"WA", level:1 , locked:false},
          
          {key:"marek_hamzik.png", name:this.getText("player16_name"),team:this.getText("country_name2"), flag:"SL", level:2 , locked:false},
          {key:"martin_skrtel.png", name:this.getText("player20_name"),team:this.getText("country_name2"), flag:"SL", level:1 , locked:false},
          {key:"juraj_kucka.png", name:this.getText("player11_name"),team:this.getText("country_name2"), flag:"SL", level:1 , locked:false},
         
          {key:"david_alaba.png", name:this.getText("player4_name"),team:this.getText("country_name3"), flag:"AU", level:2 , locked:false},
          {key:"marko_arnautovic.png", name:this.getText("player19_name"),team:this.getText("country_name3"), flag:"AU", level:1 , locked:false},
          {key:"kevin_wimmer.png", name:this.getText("player13_name"),team:this.getText("country_name3"), flag:"AU", level:1 , locked:false},

          {key:"eden_hazard.png", name:this.getText("player6_name"),team:this.getText("country_name4"), flag:"BE", level:3 , locked:false},
          {key:"kevin_de_bruyne.png", name:this.getText("player12_name"),team:this.getText("country_name4"), flag:"BE", level:2 , locked:false},
          {key:"romelu_lukaku.png", name:this.getText("player25_name"),team:this.getText("country_name4"), flag:"BE", level:1 , locked:false},

          {key:"robbie_keane.png", name:this.getText("player24_name"),team:this.getText("country_name5"), flag:"IR", level:1 , locked:false},
          {key:"seamus_coleman.png", name:this.getText("player26_name"),team:this.getText("country_name5"), flag:"IR", level:1 , locked:false},
          {key:"james_mccarthy.png", name:this.getText("player9_name"),team:this.getText("country_name5"), flag:"IR", level:1 , locked:false},

          {key:"luka_modric.png", name:this.getText("player14_name"),team:this.getText("country_name6"), flag:"CR", level:2 , locked:false},
          {key:"mario_mandzukic.png", name:this.getText("player18_name"),team:this.getText("country_name6"), flag:"CR", level:1 , locked:false},
          {key:"ivan_rakitic.png", name:this.getText("player8_name"),team:this.getText("country_name6"), flag:"CR", level:1 , locked:false},

          {key:"toty_iniesta.png", name:this.getText("player31_name"),team:this.getText("country_name7"), flag:"ES", level:3 , locked:false},
          {key:"sergio_ramos.png", name:this.getText("player27_name"),team:this.getText("country_name7"), flag:"ES", level:2 , locked:false},
          {key:"diego_costa.png", name:this.getText("player5_name"),team:this.getText("country_name7"), flag:"ES", level:1 , locked:false},

          {key:"paul_pogba.png", name:this.getText("player23_name"),team:this.getText("country_name8"), flag:"FR", level:3 , locked: game.stat[0] == 0 ? true:false, id:0},
          {key:"antoine_griezmann.png", name:this.getText("player2_name"),team:this.getText("country_name8"), flag:"FR", level:2 , locked:game.stat[1] == 0 ? true:false, id:1},
          {key:"olivier_giroud.png", name:this.getText("player22_name"),team:this.getText("country_name8"), flag:"FR", level:2 , locked:game.stat[2] == 0 ? true:false, id:2},
          {key:"theo_walcott.png", name:this.getText("player29_name"),team:this.getText("country_name9"), flag:"EN", level:2 , locked:game.stat[3] == 0 ? true:false, id:3},
          {key:"dany_welbeck.png", name:this.getText("player33_name"),team:this.getText("country_name9"), flag:"EN", level:2 , locked:game.stat[4] == 0 ? true:false, id:4},
          {key:"mesut_ozil.png", name:this.getText("player21_name"),team:this.getText("country_name10"), flag:"DE", level:3 , locked:game.stat[5] == 0 ? true:false, id:5},
          {key:"thomas_muller.png", name:this.getText("player30_name"),team:this.getText("country_name10"), flag:"DE", level:2 , locked:game.stat[6] == 0 ? true:false, id:6},
          {key:"mario_gotze.png", name:this.getText("player17_name"),team:this.getText("country_name10"), flag:"DE", level:1 , locked:game.stat[7] == 0 ? true:false, id:7},
          {key:"stephan_el_shaarawy.png", name:this.getText("player28_name"),team:this.getText("country_name11"), flag:"IT", level:1 , locked:game.stat[8] == 0 ? true:false, id:8},
          {key:"marco_verrati.png", name:this.getText("player15_name"),team:this.getText("country_name11"), flag:"IT", level:2 , locked:game.stat[9] == 0 ? true:false, id:9},
          {key:"zlatan_ibrahimovic.png", name:this.getText("player32_name"),team:this.getText("country_name12"), flag:"SW", level:3 , locked:game.stat[10] == 0 ? true:false, id:10},
          {key:"cristiano_ronaldo.png", name:this.getText("player3_name"),team:this.getText("country_name13"), flag:"PO", level:1 , locked:game.stat[11] == 0 ? true:false, id:11},

        ];

		this.state.start('MainMenu');
		//this.state.start('PlayerSelect');

	},




	getText: function(name){

	    for ( var i=0;i<game.textJSON.length;i++){

	      if(game.textJSON[i].Nom == name)
	        return game.langue == "FR" ? game.textJSON[i].Texte_FR : game.textJSON[i].Texte_EN;

	    }
	  }
};
preload.resources = {
	'image': [

		['bg_gameplay', 'img/bg_game.jpg'],
		['bgScore', 'img/bg_score.png'],
		['logo', 'img/logo.png'],
		['popupWin', 'img/popup_win.png'],
		['popupFail', 'img/popup_fail.png'],
		['popupRules', 'img/popup_rules.png'],


		['num1', 'img/num1.png'],
		['num2', 'img/num2.png'],
		['num3', 'img/num3.png'],

		['ball', 'img/ball.png'],
		['wallLeft', 'img/wall_left.png'],
		['wallRight', 'img/wall_right.png'],
		['wallCenter', 'img/wall_center.png'],

		['playerEmpty', 'img/player_empty.png'],
		['shoe', 'img/shoe.png'],
		['shoeH', 'img/shoeH.png'],
		['butLeft', 'img/cage_left.png'],
		['butRight', 'img/cage_right.png'],

		['bigCage', 'img/big_cage.png'],
		['smallCage', 'img/small_cage.png'],
		['freezeMalus', 'img/freeze_malus.png'],
		['freezeBonus', 'img/freeze_bonus.png'],
		['freeze', 'img/freeze.png'],
		['freeze2', 'img/freeze2.png'],
		['bomb', 'img/bomb.png'],
		['bombBonus', 'img/bomb_bonus.png'],
		['jumpBonus', 'img/jump_bonus.png'],
	
		['AU', 'img/flag/AU.png'],
		['DE', 'img/flag/DE.png'],
		['IR', 'img/flag/IR.png'],
		['EN', 'img/flag/EN.png'],
		['SL', 'img/flag/SL.png'],
		['BE', 'img/flag/BE.png'],
		['IT', 'img/flag/IT.png'],
		['PO', 'img/flag/PO.png'],
		['FR', 'img/flag/FR.png'],
		['SW', 'img/flag/SW.png'],
		['ES', 'img/flag/ES.png'],
		['CR', 'img/flag/CR.png'],
		['WA', 'img/flag/WA.png'],


		['msgBut', 'img/msg_goal.png'],
		['equalityTxt', 'img/equality_txt.png'],
		['failTxt', 'img/fail_txt.png'],
		['winTxt', 'img/win_txt.png'],

		['bg_select', 'img/bg_select.png'],
		['bg_vs', 'img/select_vs.png'],
		['targetPlayer', 'img/target_player.png'],
		['targetPlayerPC', 'img/target_playerPC.png'],

		['pauseBtn', 'img/pause_btn.png'],
		['resumeBtn', 'img/resume_btn.png'],
		['soundBtnOn', 'img/btn_sound_on.png'],
		['soundBtnOff', 'img/btn_sound_off.png'],

		
		

	],
	'spritesheet': [
		
		['explosion', 'img/explosion.png', 116, 144, 8]
	],
	'atlasJSONHash': [
		
		['players_select', 'img/player_select.png', 'img/player_select.json'],
		['players_btn', 'img/player_btn.png', 'img/player_btn.json'],
		['players', 'img/players.png', 'img/players.json'],
		['playersPC', 'img/playersPC.png', 'img/playersPC.json'],
		['btn', 'img/btn.png', 'img/btn.json'],
		['flag', 'img/flag/littleFlag.png', 'img/flag/littleFlag.json']

	],

	'bitmapFont': [
		
		['titleFont', 'font/titleFont.png','font/titleFont.xml'],
		['subTitleFont', 'font/subTitleFont.png','font/subTitleFont.xml'],
		['itemFont', 'font/itemFont2.png','font/itemFont2.xml'],
		['scoreFont2', 'font/scoreFont.png','font/scoreFont.xml'],
		['unlockFont', 'font/unlockFont.png','font/unlockFont.xml'],

	],

	'audio': [
		['menuSound', 'sfx/menu.mp3'],
		['gameSound', 'sfx/game.mp3']
	]
};