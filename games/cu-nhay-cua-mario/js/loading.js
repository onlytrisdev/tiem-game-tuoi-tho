var loading = 
{	
	preload: function()
	{
		// Preloader bg
		preloaderBg = game.add.sprite(0,0, 'preloaderBg');
		
		// Preloader
		preloaderBar = game.add.sprite(0, 398, 'preloaderBar');
		preloaderBar.anchor.setTo(0, 0.5);
		preloaderBar.x = game.width / 2 - preloaderBar.width / 2;
		game.load.setPreloadSprite(preloaderBar);
		
		preloaderBorder = game.add.sprite(0, 400, 'preloaderBorder');
		preloaderBorder.anchor.setTo(0, 0.5);
		preloaderBorder.x = game.width / 2 - preloaderBorder.width / 2;

        // loading
		game.load.bitmapFont('riffic_black', 'images/riffic_black.png', 'images/riffic_black.fnt');
		game.load.bitmapFont('riffic_white', 'images/riffic_white.png', 'images/riffic_white.fnt');
        game.load.image('hand', 'images/hand.png')
        game.load.spritesheet('mouse', 'images/mouse.png', 41, 50)
        game.load.spritesheet('player', 'images/player.png', 53, 72)
        game.load.image('banzai', 'images/banzai.png')
        game.load.image('jump_bar', 'images/jump_bar.jpg')
        game.load.image('jump_bar_2', 'images/jump_bar_2.png')
        game.load.spritesheet('koopa', 'images/koopa.png', 38, 50)
        game.load.image('pipe_blue', 'images/pipe_blue.png')
        
        game.load.spritesheet('block1', 'images/block1.png', 80, 160)
        game.load.spritesheet('block5', 'images/block5.png', 80, 160)
        game.load.image('block6', 'images/block6.png')
        game.load.spritesheet('koopa', 'images/koopa.png', 38, 50)
        game.load.image('banzai_small', 'images/banzai_small.png')
        game.load.image('stability_icon', 'images/stability_icon.png')
        game.load.image('coin_needed_bg', 'images/coin_needed_bg.png')
        
        game.load.image('magnet', 'images/magnet.png')
        game.load.spritesheet('coin', 'images/coin.png', 41, 40)
        game.load.spritesheet('coin_effect', 'images/coin_effect.png', 35, 41)
        
        game.load.image('mario', 'images/mario.png')
        game.load.image('mario_2', 'images/mario_2.png')
        game.load.spritesheet('speech_bubble', 'images/speech_bubble.png', 200, 155)
        game.load.image('title', 'images/title.png')
        game.load.image('game_completed', 'images/game_completed.png')
        game.load.image('add_it', 'images/add_it.png')
        game.load.spritesheet('backgrounds', 'images/backgrounds.jpg', 960, 540)
        game.load.image('bg_shop', 'images/bg_shop.png')
        game.load.image('bg_complete', 'images/bg_complete.png')
        game.load.spritesheet('block2', 'images/block2.jpg', 80, 160)
        game.load.spritesheet('block3', 'images/block3.png', 85, 45)
        game.load.spritesheet('block4', 'images/block4.png', 80, 160)
        game.load.image('bullet', 'images/bullet.png')
        game.load.image('cactus', 'images/cactus.png')
        game.load.image('boo_white', 'images/boo_white.png')
        game.load.image('boo_black', 'images/boo_black.png')
        game.load.image('button_replay', 'images/button_replay.png')
        game.load.image('button_continue', 'images/button_continue.png')
        game.load.image('button_shop_text', 'images/button_shop_text.png')
        game.load.spritesheet('buttons', 'images/buttons.png', 98, 91)
        game.load.image('banzai_large', 'images/banzai_large.png')
        
        game.load.image('plus', 'images/plus.png')
        game.load.image('bg_item', 'images/bg_item.png')
        game.load.image('bg_item_shop', 'images/bg_item_shop.png')
        game.load.spritesheet('item_level', 'images/item_level.png', 77, 37)
		
		// audio
		game.load.audio('music', 'audio/music.mp3');
		game.load.audio('music2', 'audio/music2.mp3');
		game.load.audio('music4', 'audio/music4.mp3');
		game.load.audio('win_game', 'audio/win_game.mp3');
		game.load.audio('touch_sound', 'audio/touch_sound.mp3');
		game.load.audio('haha', 'audio/haha.mp3');
		game.load.audio('wahoo', 'audio/wahoo.mp3');
		game.load.audio('yahoo', 'audio/yahoo.mp3');
		game.load.audio('weeheehee', 'audio/weeheehee.mp3');
		game.load.audio('mario_hurt', 'audio/mario_hurt.mp3');
		game.load.audio('step_sound', 'audio/step_sound.mp3');
		game.load.audio('magnet_sound', 'audio/magnet_sound.mp3');
		game.load.audio('jump_1', 'audio/jump_1.mp3');
		game.load.audio('jump_2', 'audio/jump_2.mp3');
		game.load.audio('jump_3', 'audio/jump_3.mp3');
		game.load.audio('coin_sound', 'audio/coin_sound.mp3');

},
    
create: function()
{
   preloaderBar.visible = false;
   preloaderBorder.visible = false;
    
    decoding_audio = game.add.sprite(game.width / 2, 400, "please_wait");
    decoding_audio.anchor.setTo(.5,0)
},

    update: function()
{
    //check to see if the audio is decoded
    if (game.cache.isSoundDecoded('music') &&  game.cache.isSoundDecoded('music4'))
    {
        decoding_audio.visible = false;
        
        buttonPrePlay = game.add.button(game.width / 2, 400, 'clarusGamesPlay', startGame, this);
            buttonPrePlay.anchor.setTo(.5,.5)
    }
}
    
} 

function startGame()
{
	game.state.start("menu");
}

