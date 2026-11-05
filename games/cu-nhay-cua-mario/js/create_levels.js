//** these function can be called in any level inside create function **//
function init()
{
    W = game.width;
    H = game.height;
    hold_down = false;
    jump_power = 0;
    max_power = 1000;
    move_player_x = 0;
    move_player_y = 0;
    increase_jump_power = true;
    has_magnet = false;
    hit_enemy = false;          // enemies cannot touch you
    saving_player = false;      // banzai helps you
    player_collision = true;    // can collide with blocks   
    level_finished = false;
    continue_clicked = false;   // clicked continue button
    tween_alpha = null;         // player blinking
    coins_created = false;
}

function add_bg_and_inputs(bg_frame)
{
    // background
	//bg = game.add.sprite(0, 0, bg_image);
	bg = game.add.sprite(0, 0, 'backgrounds');
    bg.frame = bg_frame;
    bg.fixedToCamera = true;
    bg.inputEnabled = true;
    
    //bg.events.onInputOver.add(function(){hold_down=true;}, this);
    bg.events.onInputDown.add(function(){
        if (player.body.touching.down)
        {
            hold_down=true;
            player.animations.play('jumping');
        }}, this);
    bg.events.onInputUp.add(jump, this);
    //bg.events.onInputOut.add(jump, this);
}

function show_current_level()
{
    current_level_text = game.add.bitmapText(W/2, 130, 'riffic_white', "Cap " + game.global.current_level, 30);
    current_level_text.anchor.setTo(0.5,0)
    
    current_level_timer = game.time.create(false);
    current_level_timer.loop(2500, function()
         {
            tween_level_text = game.add.tween(current_level_text).to({alpha: 0}, 1000, "Linear", true);
            tween_level_text.onComplete.add(function(){
                current_level_text.destroy();
            },this)
            current_level_timer.stop();

         }, this);
    current_level_timer.start();
}

function create_groups()
{
    // groups
    cactuses = game.add.group();
    bullets = game.add.group();
    blocks = game.add.group();
    coins = game.add.group();
    koopas = game.add.group();
    boos = game.add.group();
    blocks.enableBody = true;
    koopas.enableBody = true;
    coins.enableBody = true;
    cactuses.enableBody = true;
}

function create_sounds()
{
	touch_sound = game.add.audio('touch_sound')
	dropSound = game.add.audio('dropSound')
    jump_1 = game.add.audio('jump_1')
    jump_2 = game.add.audio('jump_2')
    jump_3 = game.add.audio('jump_3')
    haha = game.add.audio('haha')
    wahoo = game.add.audio('wahoo')
    win_game = game.add.audio('win_game')
    yahoo = game.add.audio('yahoo')
    weeheehee = game.add.audio('weeheehee')
    coin_sound = game.add.audio('coin_sound')
    magnet_sound = game.add.audio('magnet_sound')
    mario_hurt = game.add.audio('mario_hurt')
    step_sound = game.add.audio('step_sound')
    music1 = game.add.audio('music4', 0.5);
    music2 = game.add.audio('music2', 0.5);
}

function add_icons_and_buttons()
{
    // jump meter
    jump_bar = game.add.sprite(20, 80, 'jump_bar')
    jump_bar_2 = game.add.sprite(20, 410, 'jump_bar_2')
    jump_bar.height = 380;
    jump_bar.fixedToCamera = true;
    
    // coins text
    coin_bg = game.add.sprite(810, 9, 'coin_needed_bg')
    coin_bg.scale.x = 1.3;  coin_bg.scale.y = 1.3;

    coins_text = game.add.bitmapText(894, 26, 'riffic_black', game.global.total_coins, 25);
    coins_text.anchor.setTo(.5,0)
    coins_text.fixedToCamera = true;
    coin_bg.fixedToCamera = true;
    
    // banzais icons (top left)
    x_pos = 15;
    banzais = game.add.group();
    banzais.fixedToCamera = true;
    
    // at least one banzai should be available
    if (game.global.banzais_available < 1)
    {
        game.global.banzais_available = 1;
    }
    
    game.global.banzais_available = game.global.banzais_available + game.global.banzais_owned;
    
    for (var i = 0; i < game.global.banzais_available; i++)
    {
        banzai_icon = banzais.create(x_pos, 15, 'banzai_small');
        x_pos += 55;
    }
}

function create_coins_in_level()
{
    coin_x = block.x + 110;
    coin_y = block.y - 120;
    random_c = game.rnd.integerInRange(1,4)

        if (i != 0 && i % 3 == 0)
        {
            if (random_c == 1)
            {
                for (var c = 0; c < 4; c++)
                {
                    coin = coins.create(coin_x, coin_y, 'coin')
                    coin.visible = false;
                    coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
                    coin_x += 45;
                    coin_y -= 30; 
                }
            }
            else if (random_c == 2)
            {
                for (c = 0; c < 4; c++)
                {
                    coin = coins.create(block.x - 20, coin_y, 'coin')
                    coin.visible = false;
                    coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
                    coin_y -= 47; 
                }
            }
            else if (random_c == 3)
            {
                for (c = 0; c < 4; c++)
                {
                    coin = coins.create(coin_x - 180, coin_y - 30, 'coin')
                    coin.visible = false;
                    coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
                    coin_x += 40; 
                }
            }   
            else if (random_c == 4)
            {
                for (c = 0; c < 4; c++)
                {
                    coin = coins.create(coin_x + 40, coin_y - 60, 'coin')
                    coin.visible = false;
                    coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
                    coin_x += 40; 

                    if (c > 1)
                    {
                        coin_y += 45;
                        coin_x -= 80;
                    }
                }
            }
        }
}

function add_player_and_banzai()
{
    // banzai
    banzai = game.add.sprite(200, 330, 'banzai')
    banzai.anchor.setTo(0.5, 0)
    banzai.visible = false;
    
	// player, enable physics and set gravity
	player = game.add.sprite(200, 330, 'player');
    player.anchor.setTo(0.5,1);
    player.scale.x = 1.2;
    player.scale.y = 1.2;

    game.physics.arcade.enable(player);
    player.body.setSize(35, 72, 10, 0)
    player.body.gravity.y = 1250;
    
    player.animations.add('idle', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], 16, true);
    player.animations.add('jumping', [31,32], 12, false);
    player.animations.play('idle')
}
