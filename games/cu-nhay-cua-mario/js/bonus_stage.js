var bonusState =
{
	
create: function()
{
	// init
    W = game.width;
    H = game.height;
    player_vy = 0;
    timer_count = 0;
    hold_down = false;
    level_finished = false;
    instructions_visible = true;
    
    // collect coins function needs this
    saving_player = false;
    has_magnet = false;
    
    
    // limit duration, just in case...
    if (game.global.bonus_stage_duration > 57)
    {
        game.global.bonus_stage_duration = 57;
    }
    
    game.global.bonus_stage_duration = 8;
    
    // background
	bg = game.add.sprite(0, 0, 'backgrounds');
    bg.width = 960;     bg.height = 540;
    bg.fixedToCamera = true;
    bg.inputEnabled = true;
    
    //bg.events.onInputOver.add(function(){hold_down=true;}, this);
    bg.events.onInputDown.add(function()
    {
        hold_down=true;
    }, this);
    
    bg.events.onInputUp.add(function()
    {
        hold_down=false;
    }, this);
    
    // instructions
    if (game.device.desktop)
    {
        mouse = game.add.sprite(470, 115, 'mouse')
        mouse.animations.add('mouse_anim', [0,1,1], 2, true)
        mouse.animations.play('mouse_anim')
    }
    else
    {
        mouse = game.add.sprite(460, 115, 'hand')
    }
    
    hold_down_text = game.add.bitmapText(600, 130, 'riffic_black', "Giữ để bay!", 28);
    hold_down_text.anchor.setTo(0.5,0)
    
    // coins
    coins = game.add.group();
    coins.enableBody = true;
    coin_x = game.width;
    coin_y = 0;
    
    // create_levels.js
    add_player_and_banzai();
    
    player.animations.add('flying', [32], 12, false);
    player.animations.play('flying')
    player.x = 300;
    player.y = 90;
    player.body.gravity.y = 0;
    player.body.setSize(35, 55, 10, 15)
    
    banzai.x = 300;
    banzai.scale.x = -1;
    banzai.visible = true;
    game.physics.arcade.enable(banzai);
    
    // coins text
    coin_bg = game.add.sprite(10, 9, 'coin_needed_bg')
    coin_bg.scale.x = 1.3;  coin_bg.scale.y = 1.3;

    coins_text = game.add.bitmapText(94, 26, 'riffic_black', game.global.total_coins, 25);
    coins_text.anchor.setTo(.5,0)
    coins_text.fixedToCamera = true;
    coin_bg.fixedToCamera = true;
    
    // timer
    bonus_timer = game.time.create(false);
    bonus_timer.loop(2000, create_coins, this);
    bonus_timer.start();
    
    create_sounds();
    wahoo.play();
    
    // music
	music1.loopFull();
    
    // camera
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    game.camera.deadzone = new Phaser.Rectangle(300, 0, 1, 1);
},

update: function() 
{
    // banzai follows the player
    banzai.x = player.x + 5;
    banzai.y = player.y - 2;
    
    if (hold_down && player.y > 35)
    {
        if (player_vy > -350)
        {
            player_vy -= 9;
        }
    }
    else if (hold_down == false)
    {
        if (player_vy < 350)
        {
            player_vy += 8;
        }
    }
    
    player.body.velocity.y = player_vy;
    banzai.body.velocity.y = player_vy;
    
    if (player.y > 490)
    {
        player.y = 490;
        banzai.y = 488;
        player_vy = 0;
    }
    else if (player.y < 75)
    {
        player.y = 75;
        banzai.y = 73;
        player_vy = 0;
    }
    
    coins.forEach(function(coin){
        
        coin.x -= 6.6;
        if (check_overlap(player,coin))
        {
            collect_coins(coin);
        }
        
        if (coin.x < game.camera.x -50)
        {
            coin.destroy();
        }
        
    },this)
},
    
};

function collect_bonus_coins(mario, coin)
{
    coin.destroy();
    coin_sound.play();
}

function create_coins()
{
    // hide instructions
    if (instructions_visible)
    {
        game.add.tween(mouse).to({alpha: 0}, 1000, "Linear", true)
        
        game.add.tween(hold_down_text).to({alpha: 0}, 1000, "Linear", true)
        
        instructions_visible = false;
    }
    
    // stop timer after some time
    timer_count += 1;
    
    if (timer_count >= game.global.bonus_stage_duration)
    {
        bonus_timer.stop();
        
        weeheehee.play();
        
        finish_timer = game.time.create(false);
        finish_timer.loop(4000, function(){
            
            // finish bonus stage and play the next level
            finish_timer.stop();
            music1.stop();
            game.state.start("level" + (game.global.current_level+1));
        },this);
        
        finish_timer.start();
    }
    
    // create coins on different positions

    random_coins = game.rnd.integerInRange(1,5)
    
    if (random_coins == 1)
    {
        coin_x = game.width;
        coin_y = game.rnd.integerInRange(55, 470)
        
        for (var i = 0; i < 7; i++)
        {
            coin = coins.create(coin_x, coin_y, 'coin')
            coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
            coin.animations.play('coin_anim')
            coin_x += 45;
        }
    }
    else if (random_coins == 2)
    {
        coin_x = game.width;
        coin_y = 70;
        
        for (var i = 0; i < 9; i++)
        {
            coin = coins.create(coin_x, coin_y, 'coin')
            coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
            coin.animations.play('coin_anim')
            coin_x += 45;
            coin_y += 45;
        }
    }
    else if (random_coins == 3)
    {
        coin_x = game.width;
        coin_y = 420;
        
        for (var i = 0; i < 9; i++)
        {
            coin = coins.create(coin_x, coin_y, 'coin')
            coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
            coin.animations.play('coin_anim')
            coin_x += 45;
            coin_y -= 45;
        }
    }
    else if (random_coins == 4)
    {
        coin_x = game.width;
        coin_y = game.rnd.integerInRange(65, 420)
        
        for (var i = 0; i < 6; i++)
        {
            coin = coins.create(coin_x, coin_y, 'coin')
            coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
            coin.animations.play('coin_anim')
            coin_x += 45;
        }
        
        coin_x = game.width;
        for (var i = 0; i < 6; i++)
        {
            coin = coins.create(coin_x, coin_y + 45, 'coin')
            coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
            coin.animations.play('coin_anim')
            
            coin_x += 45;
        }
    }
    else if (random_coins == 5)
    {
        coin_x = game.width;
        coin_y = game.rnd.integerInRange(65, 375)
        
        for (var i = 0; i < 3; i++)
        {
            coin = coins.create(coin_x, coin_y, 'coin')
            coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
            coin.animations.play('coin_anim')
            coin_x += 45;
        }
        
        for (var i = 0; i < 3; i++)
        {
            coin = coins.create(coin_x, coin_y + 45, 'coin')
            coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
            coin.animations.play('coin_anim')
            
            coin_x += 45;
        }
        
        for (var i = 0; i < 3; i++)
        {
            coin = coins.create(coin_x, coin_y + 90, 'coin')
            coin.animations.add('coin_anim', [0,1,2,3,4], 10, true)
            coin.animations.play('coin_anim')
            
            coin_x += 45;
        }
    }

}