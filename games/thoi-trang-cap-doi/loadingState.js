var loadingState = new Kiwi.State('LoadingState');
loadingState.preload = function () {
    Kiwi.State.prototype.preload.call(this);

    this.addTextureAtlas('boy', 'assets/textures/boy.png', 'boyJSON', 'assets/textures/boy.json');
    this.addTextureAtlas('girl1', 'assets/textures/girl1.png', 'girl1JSON', 'assets/textures/girl1.json');
    this.addTextureAtlas('girl2', 'assets/textures/girl2.png', 'girl2JSON', 'assets/textures/girl2.json');

    //INTRO
 /*   this.addImage('addBtn', 'assets/intro/add_your_site.png');
    this.addImage('addHover', 'assets/intro/add_your_site_ON.png');*/
    this.addImage('more', 'assets/intro/more_games.png');
    this.addImage('moreHover', 'assets/intro/more_games_on.png');
    this.addImage('introBG', 'assets/intro/background.jpg');
    this.addImage('musicOff', 'assets/intro/sound_off.png');
    this.addImage('musicOn', 'assets/intro/sound_on.png');
    this.addImage('start', 'assets/intro/Start.png');
    this.addImage('startHover', 'assets/intro/Start_on.png');
    //GAME

    //misc
    this.addImage('arrow_left', 'assets/game/arrow_left.png');
    this.addImage('arrow_right', 'assets/game/arrow_right.png');
    this.addImage('bg1', 'assets/game/background_1.jpg');
    this.addImage('bg2', 'assets/game/background_2.jpg');
    this.addImage('boy_box', 'assets/game/boy_box.png');
    this.addImage('button_background_1', 'assets/game/button_background_1.png');
    this.addImage('button_background_2', 'assets/game/button_background_2.png');
    this.addImage('button_show', 'assets/game/button_show.png');
    this.addImage('exit_box', 'assets/game/exit_box.png');
    this.addImage('girl_box', 'assets/game/girl_box.png');
    this.addImage('home', 'assets/game/home.png');
    this.addImage('home_on', 'assets/game/home_on.png');
    this.addImage('random', 'assets/game/random.png');
    this.addImage('random_on', 'assets/game/random_on.png');
    this.addImage('reset', 'assets/game/reset.png');
    this.addImage('reset_on', 'assets/game/reset_on.png');
    this.addImage('sound_off', 'assets/game/sound_off.png');
    this.addImage('sound_on', 'assets/game/sound_on.png');

    //clothes
    /*for (var i = 1; i <= 4; i++) {
        this.addImage('boyAccessory' + i, 'assets/boy/accessory/' + i + '.png');
        this.addImage('boySkin' + i, 'assets/boy/skin/skin_0' + i + '.png');
        this.addImage('girlSkin' + i, 'assets/girl/skin/skin_0' + i + '.png');
    */

    for (var i = 1; i <= 5; i++) {
        /*this.addImage('boyEyebrows' + i, 'assets/boy/eyebrow/' + i + '.png');
        this.addImage('girlEyebrows' + i, 'assets/girl/eyebrow/' + i + '.png');

        this.addImage('boyLips' + i, 'assets/boy/lips/' + i + '.png');
        this.addImage('girlLips' + i, 'assets/girl/lips/lip_0' + i + '.png');
        
        this.addImage('boyEye_' + i + '_aqua', 'assets/boy/eyes/eye_0' + i + '/0' + i + '_aqua.png');
        this.addImage('boyEye_' + i + '_blue', 'assets/boy/eyes/eye_0' + i + '/0' + i + '_blue.png');
        this.addImage('boyEye_' + i + '_green', 'assets/boy/eyes/eye_0' + i + '/0' + i + '_green.png');
        this.addImage('boyEye_' + i + '_honey', 'assets/boy/eyes/eye_0' + i + '/0' + i + '_honey.png');
        this.addImage('boyEye_' + i + '_pink', 'assets/boy/eyes/eye_0' + i + '/0' + i + '_pink.png');
        this.addImage('boyEye_' + i + '_tinto', 'assets/boy/eyes/eye_0' + i + '/0' + i + '_tinto.png');

        this.addImage('girlEye_' + i + '_aqua', 'assets/girl/eyes/eye_0' + i + '/0' + i + '_aqua.png');
        this.addImage('girlEye_' + i + '_blue', 'assets/girl/eyes/eye_0' + i + '/0' + i + '_blue.png');
        this.addImage('girlEye_' + i + '_green', 'assets/girl/eyes/eye_0' + i + '/0' + i + '_green.png');
        this.addImage('girlEye_' + i + '_honey', 'assets/girl/eyes/eye_0' + i + '/0' + i + '_honey.png');
        this.addImage('girlEye_' + i + '_pink', 'assets/girl/eyes/eye_0' + i + '/0' + i + '_pink.png');
        this.addImage('girlEye_' + i + '_tinto', 'assets/girl/eyes/eye_0' + i + '/0' + i + '_tinto.png');
        */
        //this.addImage('num' + i, 'assets/game/button_costume/numbers/' + i + '.png');
    }
/*
    for (var i = 1; i <= 7; i++) {
        this.addImage('boyBottom' + i, 'assets/boy/bottom/' + i + '.png');
    }

    for (var i = 1; i <= 10; i++) {
        this.addImage('boyHair' + i, 'assets/boy/hair/' + i + '.png');
        this.addImage('girlBottom' + i, 'assets/girl/bottom/' + i + '.png');
        this.addImage('girlDress' + i, 'assets/girl/dress/' + i + '.png');
    }

    for (var i = 1; i <= 11; i++) {
        this.addImage('girlShoes' + i, 'assets/girl/shoes/' + i + '.png');
    }

    for (var i = 1; i <= 13; i++) {
        this.addImage('girlSocks' + i, 'assets/girl/socks/' + i + '.png');
    }

    for (var i = 1; i <= 15; i++) {
        this.addImage('boyTop' + i, 'assets/boy/top/' + i + '.png');
        this.addImage('girlTop' + i, 'assets/girl/top/' + i + '.png');
        this.addImage('girlAccessory' + i, 'assets/girl/accessory/' + i + '.png');
    }

    for (var i = 1; i <= 20; i++) {
        this.addImage('girlHair' + i, 'assets/girl/hair/' + i + '.png');
    }

    this.addImage('boyUndies', 'assets/boy/default/bikini.png');
    this.addImage('girlUndies', 'assets/girl/default/bikini.png');
    */
    //costume buttons
    this.addImage('boyAccessoryBtn', 'assets/game/button_costume/boy_button/button_accessories.png');
    this.addImage('boyFaceBtn', 'assets/game/button_costume/boy_button/button_face.png');
    this.addImage('boyHairBtn', 'assets/game/button_costume/boy_button/button_hair.png');
    this.addImage('boyTopBtn', 'assets/game/button_costume/boy_button/button_top.png');
    this.addImage('boyEyeBtn', 'assets/game/button_costume/boy_button/eye_button.png');
    this.addImage('boyEyeColourBtn', 'assets/game/button_costume/boy_button/eye_button_color.png');
    this.addImage('boyEyebrowBtn', 'assets/game/button_costume/boy_button/eyebrown_button.png');
    this.addImage('boyLipsBtn', 'assets/game/button_costume/boy_button/lips_button.png');
    this.addImage('boySkinBtn', 'assets/game/button_costume/boy_button/skin_button.png');

    // boy icons
    this.addImage('boyFaceIcon', 'assets/game/button_costume/boy_button/skin_button.png');
    this.addImage('boyEyeIcon', 'assets/game/button_costume/boy_button/eye_button.png');
    this.addImage('boyEyeColourIcon', 'assets/game/button_costume/boy_button/eye_button_color.png');
    this.addImage('boyEyebrowIcon', 'assets/game/button_costume/boy_button/eyebrown_button.png');
    this.addImage('boyLipsIcon', 'assets/game/button_costume/boy_button/lips_button.png');
    this.addImage('boySkinIcon', 'assets/game/button_costume/boy_button/skin_button.png');

    this.addImage('boyHairIcon', 'assets/game/button_costume/boy_button/hair_button.png');

    this.addImage('boyTopIcon', 'assets/game/button_costume/boy_button/top_button.png');
    this.addImage('boyBottomIcon', 'assets/game/button_costume/boy_button/bottom_button.png');

    this.addImage('boyAccessoryIcon', 'assets/game/button_costume/boy_button/accessory_button.png');

    //girl buttons
    this.addImage('girlAccessoryBtn', 'assets/game/button_costume/girl_button/button_girl_accessories.png');
    this.addImage('girlBottomBtn', 'assets/game/button_costume/girl_button/button_girl_bottom.png');
    this.addImage('girlDressBtn', 'assets/game/button_costume/girl_button/button_girl_dress.png');
    this.addImage('girlFaceBtn', 'assets/game/button_costume/girl_button/button_girl_face.png');
    this.addImage('girlHairBtn', 'assets/game/button_costume/girl_button/button_girl_hair.png');
    this.addImage('girlLipsBtn', 'assets/game/button_costume/girl_button/button_girl_lips.png');
    this.addImage('girlShoesBtn', 'assets/game/button_costume/girl_button/button_girl_shoes.png');
    this.addImage('girlShoesSocksBtn', 'assets/game/button_costume/girl_button/button_girl_shoes_socks.png');
    this.addImage('girlSocksBtn', 'assets/game/button_costume/girl_button/button_girl_socks.png');
    this.addImage('girlTopBtn', 'assets/game/button_costume/girl_button/button_girl_top.png');

    this.addImage('girlFaceIcon', 'assets/game/button_costume/girl_button/face_button.png');
    this.addImage('girlEyeIcon', 'assets/game/button_costume/girl_button/eye_button.png');
    this.addImage('girlEyeColourIcon', 'assets/game/button_costume/girl_button/eye_button_color.png');
    this.addImage('girlEyebrowIcon', 'assets/game/button_costume/girl_button/eyebrow_button.png');
    this.addImage('girlLipsIcon', 'assets/game/button_costume/girl_button/lips_button.png');
    this.addImage('girlSkinIcon', 'assets/game/button_costume/girl_button/skin_button.png');

    this.addImage('girlHairIcon', 'assets/game/button_costume/girl_button/hair_button.png');

    this.addImage('girlTopIcon', 'assets/game/button_costume/girl_button/top_button.png');
    this.addImage('girlDressIcon', 'assets/game/button_costume/girl_button/dress_button.png');
    this.addImage('girlBottomIcon', 'assets/game/button_costume/girl_button/bottom_button.png');

    this.addImage('girlSocksIcon', 'assets/game/button_costume/girl_button/socks_button.png');
    this.addImage('girlShoeIcon', 'assets/game/button_costume/girl_button/shoe_button.png');

    this.addImage('girlAccessoryIcon', 'assets/game/button_costume/girl_button/hair_button.png');

    //this.addImage('colour1', 'assets/game/button_costume/colors/aqua.png');
    //this.addImage('colour2', 'assets/game/button_costume/colors/blue.png');
    //this.addImage('colour3', 'assets/game/button_costume/colors/green.png');
    //this.addImage('colour4', 'assets/game/button_costume/colors/honey.png');
    //this.addImage('colour5', 'assets/game/button_costume/colors/pink.png');
    //this.addImage('colour6', 'assets/game/button_costume/colors/tinto.png');
    //this.addImage('skinColour1', 'assets/game/button_costume/colors/skin_pink.png');
   // this.addImage('skinColour2', 'assets/game/button_costume/colors/skin_white.png');
   // this.addImage('skinColour3', 'assets/game/button_costume/colors/skin_honey.png');
   // this.addImage('skinColour4', 'assets/game/button_costume/colors/skin_brown.png');

    //OUTRO
    this.addImage('showBack', 'assets/game_end/back.png');
  /*  this.addImage('showPrint', 'assets/game_end/print.png');
    this.addImage('showSave', 'assets/game_end/save.png');*/
    this.addImage('showAvatar', 'assets/game_end/save_avatar.png');
    this.addImage('showTitle', 'assets/game_end/title.png');

    this.addAudio('music', 'assets/music_background.mp3');
	this.addAudio('clickSnd', 'assets/button-30.mp3');
};

loadingState.create = function () {
    Kiwi.State.prototype.create.call(this);
    this.game.input.onUp.remove(this.pressIntro);
    //window.initialiseMusic("music_background");
	
	//ANDY ADD
	//if(splashData.show){
    	this.game.states.switchState("SplashState");
	//}
	//else{
	//	this.game.states.switchState("IntroState");
	//}
};

loadingState.pressIntro = function () {
    window.open("http://localhost");
}
loadingState.loadProgress = function (percent, bytesLoaded, file) {
    if (this.bar != undefined) {
        this.bar.transform.scaleY = (percent / 100) * 1.1;
        this.bar.y = 344 - this.bar.box.bounds.height/2;
        var f = Math.floor(percent / 26);
        this.base.animation.switchTo(f);
    } else {
        this.base = new Kiwi.GameObjects.Sprite(this, this.textures.base, 420, 204);
        this.addChild(this.base);
        this.bar = new Kiwi.GameObjects.Sprite(this, this.textures.bar, 470, 240);
        this.addChild(this.bar);
        this.bar.transform.scaleY = 1.1;
     /*   this.ggg = new Kiwi.GameObjects.Sprite(this, this.textures.ggg, -180, 400);
        this.addChild(this.ggg);
        this.ggg.transform.scaleX = 0.3;
        this.ggg.transform.scaleY = 0.3;*/
        this.game.input.onUp.add(this.pressIntro);
    }
}

//@ sourceMappingURL=loadingState.js.map
