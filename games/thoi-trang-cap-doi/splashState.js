var splashState = new Kiwi.State('SplashState');
splashState.create = function () {
   /* this.ggg = new Kiwi.GameObjects.Sprite(this, this.textures.ggg, 150, 150);
	this.addChild(this.ggg);
	this.ggg.transform.scaleX = 1;
	this.ggg.transform.scaleY = 1;*/
	//this.clickables.push(this.ggg);

	/*console.log('CLICKABLES:', this.clickables);
	this.game.input.onDown.add(this.fetchPressed)
	this.game.input.onUp.add(this.fetchReleased)*/
/*	this.game.input.onUp.add(this.splashPressed)*/
    //this.playMusic();
	console.log('Splash state created\n');
	//splashScreen();
	this.game.states.switchState("IntroState");
	//splashState.count = 0;
}

splashState.splashPressed = function () {
	console.log(logoData.action);
 /*   window.open("http://localhost");*/
}

splashState.update = function () {
    //super.update();
  /* splashState.count++;
    if (splashState.count >= 150) {
        this.game.input.onUp.remove(this.splashPressed)
        this.game.states.switchState("IntroState");
    }*/
}