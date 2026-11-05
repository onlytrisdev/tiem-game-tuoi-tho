var endState = 
{

create: function() 
{ 
    W = game.width;
    H = game.height;
    
	bg = game.add.image(0, 0, 'backgrounds');
	bg.frame = 3;
	
	// touch sound
	touch_sound = game.add.audio('touch_sound');
	
    title = game.add.sprite(W/2, 70, 'game_completed')
    title.anchor.setTo(.5,0)
    mario = game.add.sprite(240, 200, 'mario_2')
    //mario.scale.x = -1;
    mario.scale.x = -0.8;
    mario.scale.y = .8;
    banzai_large = game.add.sprite(740, 200, 'banzai_large')
    banzai_large.angle = 30;
    banzai_large.scale.x = .8;
    banzai_large.scale.y = .8;

	// play music
	if (game.global.musicPlaying == false){
		music = game.add.audio('music');
		music.loopFull();
		game.global.musicPlaying = true;
	}
	
	button_games = game.add.button(W/2 - 80, 310, 'buttons', visit_website, this);
	button_menu = game.add.button(W/2 + 80, 310, 'buttons', go_to_menu, this);
    
    button_games.anchor.setTo(0.5,0.5);
    button_menu.anchor.setTo(0.5,0.5);
    button_games.frame = 0;
    button_menu.frame = 1;
},
	
};

function go_to_menu()
{
    touch_sound.play();
    
    // reset continue price
    game.global.continue_price = 50;
    
    game.state.start('menu');
}
