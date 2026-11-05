var menuState = 
{

create: function() 
{ 
    W = game.width;
    H = game.height;
    
	bg = game.add.image(0, 0, 'backgrounds');
	bg.frame = 3;
    
	// AUDIO UPDATE
	game.input.onDown.addOnce(() => {
	game.sound.context.resume();
	});
	
	// touch sound
	touch_sound = game.add.audio('touch_sound');
	
    title = game.add.sprite(W/2, 70, 'title')
    mario = game.add.sprite(240, 200, 'mario_2')
    //mario.scale.x = -1;
    mario.scale.x = -0.8;
    mario.scale.y = .8;
    banzai_large = game.add.sprite(740, 200, 'banzai_large')
    banzai_large.angle = 30;
    banzai_large.scale.x = .8;
    banzai_large.scale.y = .8;
    
    add_it = game.add.button(W/2, 490, 'add_it', publish_games)
    title.anchor.setTo(.5,0)
    add_it.anchor.setTo(.5,0)

	// play music
	if (game.global.musicPlaying == false){
		music = game.add.audio('music');
		music.loopFull();
		game.global.musicPlaying = true;
	}
	
	// start button
	button_start = game.add.button(W/2, 310, 'buttons', start_game, this);
	game.add.tween(button_start.scale).to({x: .9, y: .9}, 500, Phaser.Easing.Linear.None, true, 0, 2, true);
	
	button_games = game.add.button(W/2 - 110, 340, 'buttons', visit_website, this);
	button_shop = game.add.button(W/2 + 110, 340, 'buttons', go_to_shop, this);
    
    button_start.anchor.setTo(0.5,0.5);
    button_games.anchor.setTo(0.5,0.5);
    button_shop.anchor.setTo(0.5,0.5);
    button_start.frame = 2;
    button_games.frame = 0;
    button_shop.frame = 3;
},
	
};

function start_game()
{
    music.stop();
	game.state.start('level1');
	touch_sound.play();
    game.global.musicPlaying = false;
}

function go_to_shop()
{
    touch_sound.play();
    
    // reset continue price
    game.global.continue_price = 50;
    
    game.state.start('shop');
}