var gameOptions = {plugins: ['BitmapText'],scaleType:1,debug: Kiwi.DEBUG_OFF};

var game = new Kiwi.Game('content', 'DressUp', null, gameOptions);
var myState = new Kiwi.State('myState');

game.states.addState(preloader);
game.states.addState(loadingState);
game.states.addState(splashState);
game.states.addState(introState);
game.states.addState(playState);
game.states.addState(showState);

game.states.switchState("Preloader");
