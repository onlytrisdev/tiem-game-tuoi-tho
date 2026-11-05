var preloader = new Kiwi.State('Preloader');
preloader.preload = function () {
    Kiwi.State.prototype.preload.call(this);
    this.addImage('bar', 'assets/thermonitor-bar.png'); 
    //this.addImage('ggg', 'assets/Girls-01.png');
	//this.addImage('ggg', logoData.image);
	//this.addImage('ggg', 'Splash_Image_GGG.png');
	console.log(logoData.image);
    this.addSpriteSheet('base', 'assets/thermonitor-spritesheet.png', 120, 312);

	this.addSpriteSheet('textAtlas', 'textAtlas2.png', 32, 60, true);
	//this.addTextureAtlas('boy', 'assets/textures/boy.png','boyJSON', 'assets/textures/boy.json');
	//this.addJSON('boyJSON', 'assets/textures/boy.json');
};


preloader.create = function () {
    Kiwi.State.prototype.create.call(this);
	//var content = document.getElementsByTagName('content')[0];
    this.game.stage.resize(960, 720);
	//this.game.stage.scaleType = Kiwi.Stage.SCALE_FIT;
	
	
    this.game.states.switchState("LoadingState");
};