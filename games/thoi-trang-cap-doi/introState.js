var introState = new Kiwi.State('IntroState');
introState.create = function () {
    this.clickables = [];
    this.currClick;
	addMoreGames();

    //console.log(this.textures.myJSON);

    Kiwi.State.prototype.create.call(this);
    this.background = new Kiwi.GameObjects.StaticImage(this, this.textures['introBG'], 0, 0, true);
    this.addChild(this.background);
    //this.game.states.switchState("PlayState");

    this.startHover = new Kiwi.GameObjects.Sprite(this, this.textures['startHover'], 666, 206, true);
    this.addChild(this.startHover);
    this.startBtn = new Kiwi.GameObjects.Sprite(this, this.textures['start'], 666, 206, true);
    this.addChild(this.startBtn);
    this.startBtn.input.onUp.add(this.startUp, this);
    this.startBtn.input.onDown.add(this.startDown, this);

    this.moreHover = new Kiwi.GameObjects.Sprite(this, this.textures['moreHover'], 585, 487, true);
    this.addChild(this.moreHover);
    this.moreBtn = new Kiwi.GameObjects.Sprite(this, this.textures['more'], 585, 487, true);
    this.addChild(this.moreBtn);
    this.moreBtn.input.onUp.add( this.moreUp, this);
    this.moreBtn.input.onDown.add(this.moreDown, this);
    //this.clickables.push(this.moreBtn);

  /*  this.addHover = new Kiwi.GameObjects.Sprite(this, this.textures['addHover'], 590, 585, true);
    this.addChild(this.addHover);
    this.addBtn = new Kiwi.GameObjects.Sprite(this, this.textures['addBtn'], 590, 585, true);
    this.addChild(this.addBtn);
    this.addBtn.input.onUp.add(this.addUp, this);
    this.addBtn.input.onDown.add(this.addDown, this);*/
    //this.clickables.push(this.addBtn);

    this.musicOn = new Kiwi.GameObjects.Sprite(this, this.textures['musicOn'], 20, 9, true);
    this.addChild(this.musicOn);
    this.musicOff = new Kiwi.GameObjects.Sprite(this, this.textures['musicOff'], 20, 9);
    this.addChild(this.musicOff);
    if (this.game.audio.mute) {
        this.musicOn.visible = false;
    } else {
        this.musicOff.visible = false;
    }
	this.musicOn.input.onUp.add(this.toggleMenuSound, this);
   /* this.musicOn.input.onUp.add(this.musicUp, this);*/
    //this.clickables.push(this.musicOn);

	//this.musicLoop = new Kiwi.Sound.Audio(this.game, 'music', 1, false);
    //this.clickSnd = new Kiwi.Sound.Audio(this, 'clickSnd', 1, false);
	/*this.ggg = new Kiwi.GameObjects.Sprite(this, this.textures.ggg, -180, 400);
	this.addChild(this.ggg);
	this.ggg.transform.scaleX = 0.3;
	this.ggg.transform.scaleY = 0.3;
	this.ggg.input.onUp.add(this.addUp, this);*/
	
	if(this.music==null){
		this.music = new Kiwi.Sound.Audio(this.game, 'music', 0.3, true);
   		 this.music.play();
	}
		
	this.clickSnd = new Kiwi.Sound.Audio(this.game, 'clickSnd', 1, false);
	
}

//start
introState.startUp = function () {
    this.startBtn.visible = true;
    //this.game.input.onDown.remove(this.fetchPressed);
    //this.game.input.onUp.remove(this.fetchReleased);
	//GameAPI.GameBreak.request(pauseGame, resumeGame);
    this.game.states.switchState("PlayState", playState, null, { boySkin: 1, boyAccessory: 1, boyEyebrows: 1, boyLips: 1, boyEye: 1, boyEyeColour: 1, boyBottom: 1, boyHair: 1, boyTop: 1, girlAccessory: 1, girlBottom: 0, girlDress: 1, girlEyebrows: 1, girlEye: 1, girlHair: 1, girlLips: 1, girlShoes: 1, girlSkin: 1, girlSocks: 1, girlEyeColour: 1, girlTop: 0, bgNum: 1 });
}

introState.startDown = function () {
	removeMoreGames();
    this.startBtn.visible = false;
	this.clickSnd.play();
}

//more games
introState.moreUp = function () {
    this.moreBtn.visible = true;
    window.open(buttonProperties.action);
}
introState.moreDown = function () {
    this.moreBtn.visible = false;
	this.clickSnd.play();
}

//add to your site
/*introState.addUp = function () {
    this.addBtn.visible = true;
   // window.open("http://game.com");
}
introState.addDown = function () {
    this.addBtn.visible = false;
	this.clickSnd.play();
}*/


//music toggle

introState.toggleMenuSound = function () {
    if (this.musicOn.visible) {
        this.musicOn.visible = false;
        this.musicOff.visible = true;
        this.game.audio.mute = true;
		oldaudio = false;
    } else {
        this.musicOn.visible = true;
        this.musicOff.visible = false;
        this.game.audio.mute = false;
		oldaudio = true;
    }
}

/*introState.musicUp = function () {
    if (this.musicOn.visible) {
        this.musicOn.visible = false;
        this.musicOff.visible = true;
		this.music.stop();
        window.play();
    } else {
        this.musicOn.visible = true;
        this.musicOff.visible = false;
		this.clickSnd.play();
		this.music.play();
        window.play();
    }
}*/

introState.gggUp = function () {
    window.open("http://game.com");
}