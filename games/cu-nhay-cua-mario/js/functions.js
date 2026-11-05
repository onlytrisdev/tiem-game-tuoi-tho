function visit_website(){
    
    touch_sound.play();
    
	url = window.location.href;
	urlParts = url.replace('http://','').replace('https://','').split(/[/?#]/);
	site = urlParts[0];
	
	window.open( 'http://www.localhost', '_blank' );
}


function publish_games()
{
    touch_sound.play();
	window.open( 'http://www.localhost', '_blank' );
}

function toggle_sound() {
	touch_sound.play();
	game.sound.mute = ! game.sound.mute;
	buttonSound.frame = game.sound.mute ? 1 : 0;		
}

function mouse_over(button){
	button.scale.x = .9;
	button.scale.y = .9;
}
	
function mouse_out(button){
	button.scale.x = 1;
	button.scale.y = 1;
}

function check_overlap(spriteA, spriteB) 
{
	var boundsA = spriteA.getBounds();
	var boundsB = spriteB.getBounds();
	return Phaser.Rectangle.intersects(boundsA, boundsB);
}

// gameplay functions
function show_game_over()
{
    // game over or continue screen
    //game.add.image(0, 0, 'bg_menu');
    bg_complete = game.add.sprite(game.camera.x + W/2, 20, 'bg_complete')
    bg_complete.anchor.setTo(0.5,0)
    
    // buttons
    button_continue = game.add.button(game.camera.x + 400, 320, 'button_continue', continue_game)
    if (game.global.total_coins < game.global.continue_price)
    {
        button_continue.alpha = .6;
    }
    
    button_replay = game.add.button(game.camera.x + W/2, 220, 'button_replay', replay_game)
    button_shop = game.add.button(game.camera.x + W/2, 140, 'button_shop_text', go_to_shop_after_game_over)
    button_continue.anchor.setTo(0.5,0)
    button_replay.anchor.setTo(0.5,0)
    button_shop.anchor.setTo(0.5,0)
    
    // show coins collected
    continue_bg = game.add.sprite(game.camera.x + 520, 320, 'coin_needed_bg')
    continue_bg.scale.x = 1.4;    continue_bg.scale.y = 1.4;
    coins_needed_to_continue = game.add.bitmapText(game.camera.x + 610, 340, 'riffic_black', game.global.continue_price, 25);
    coins_needed_to_continue.anchor.setTo(0.5,0)
    
    // mario and button more games
    mario = game.add.sprite(game.camera.x + 225, 230, 'mario')
    mario.scale.x = -1;
    button_games = game.add.button(game.camera.x + 103, 205, 'buttons', visit_website, this);
    button_games.anchor.setTo(.5,0)
    button_games.scale.x = .9;  button_games.scale.y = .9;
    tween_b = game.add.tween(button_games.scale).to({y: .95, x: .95}, 400, "Linear", true, 0,-1,true);
    
    // hide things
    jump_bar.visible = false;
    jump_bar_2.visible = false;
    blocks.visible = false;
    koopas.visible = false;
    cactuses.visible = false;
    boos.visible = false;
    bullets.visible = false;
    coins.visible = false;
    magnet.visible = false;
    
    player.visible = false;
}

function continue_game()
{
    if (game.global.total_coins >= game.global.continue_price
       && continue_clicked == false)
    {
        continue_clicked = true;
        
        // hide game over scene...
        hide_game_over();
        
        // and continue game...
        tween_c.onComplete.add(function(){
            
            // pay to continue
            game.global.total_coins -= game.global.continue_price;
            coins_text.text = game.global.total_coins;
           
            // make it expensive next time
            game.global.continue_price *= 4;

            banzai_icon = banzais.create(15, 15, 'banzai_small');
            game.global.banzais_available = 1;
            
            // you are playing again
            if (game.global.current_level == 1 || game.global.current_level == 2
               || game.global.current_level == 3)
            {
                music2.loopFull();
            }
            else
            {
                music1.loopFull();
            }
           
            level_finished = false;
            continue_clicked = false;
            
            // can collide with blocks
            player_collision = true;
            
            // tween player
            player.alpha = 1;
            tween_alpha = game.add.tween(player).to({alpha: 0.3}, 210, "Linear", true, 0, 9, true);
            tween_alpha.onComplete.add(function(){
                
                // enemies can touch you again
                hit_enemy = false;
                player.alpha = 1;
            },this)
            
            player.visible = true;
            player.x = move_player_x;
            player.y = move_player_y;
            player.body.gravity.y = 1250;
            player.animations.play('idle')
            
            // camera
            game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
            game.camera.deadzone = new Phaser.Rectangle(200, 0, 1, 1);
            
            // make things visible
            jump_bar.visible = true;
            jump_bar_2.visible = true;
            blocks.visible = true;
            koopas.visible = true;
            boos.visible = true;
            bullets.visible = true;
            cactuses.visible = true;
            coins.visible = true;
            player.visible = true; 
            magnet.visible = true;
           
            mario.destroy();
            button_games.destroy();
            button_continue.destroy();
            button_replay.destroy();
            bg_complete.destroy();
            
        },this)
    }
}

function replay_game()
{
    game.global.continue_price = 50;
    
    hide_game_over();

   tween_c.onComplete.add(function(){

       game.state.start("level1")

    },this)
}

function go_to_shop_after_game_over()
{
    hide_game_over();

    // and continue game...
   tween_c.onComplete.add(function(){

       game.state.start("shop")

    },this)
}

function remove_magnet()
{
    has_magnet = false;
    timer_magnet.stop();
}

function game_over()
{
        player.body.velocity.setTo(0,0)
        player.body.gravity.y = 0;
        
        game.camera.unfollow();
        localStorage.setItem('smj_total_coins', game.global.total_coins)

        show_game_over();
        mario_hurt.play();
        music1.stop();
        music2.stop();
}

function hide_game_over()
{
        tween_c = game.add.tween(mario).to({x: "-300"}, 700, Phaser.Easing.Out, true)
        tween_c = game.add.tween(button_games).to({x: "-300"}, 700, Phaser.Easing.Out, true)
        tween_c = game.add.tween(button_games).to({x: "-300"}, 700, Phaser.Easing.Out, true)
        tween_c = game.add.tween(bg_complete).to({y: "-650"}, 800, Phaser.Easing.Out, true)
        tween_c = game.add.tween(button_continue).to({y: "-650"}, 800, Phaser.Easing.Out, true)
        tween_c = game.add.tween(button_replay).to({y: "-650"}, 800, Phaser.Easing.Out, true)
        tween_c = game.add.tween(button_shop).to({y: "-650"}, 800, Phaser.Easing.Out, true)
        tween_c = game.add.tween(continue_bg).to({y: "-650"}, 800, Phaser.Easing.Out, true)
        tween_c = game.add.tween(coins_needed_to_continue).to({y: "-650"}, 800, Phaser.Easing.Out, true)
}

function jump()
{
    // jump and reset jump power
    if (player.body.onFloor() || player.body.touching.down) 
    {
        // different jump sounds
        random_jump = game.rnd.integerInRange(1,2)
        if (jump_power < 800)
        {
            random_jump == 1 ? jump_1.play() : jump_2.play();   
        }
        else
        {
            random_jump == 1 ? jump_3.play() : wahoo.play();   
        }
        
        hold_down = false;
        player.body.velocity.setTo(jump_power/2.5, -jump_power)
        jump_power = 0;
    }
}

function collect_coins(coin_object)
{
    if (saving_player == false || has_magnet)
    {
        coin_sound.play();
        /*
        coin_effect = game.add.sprite(coin_object.x, coin_object.y, 'coin_effect')
        coin_effect.animations.add('coin_collected', [0,1,2,3,4,5,6,7,8,9,10,11,12], 20, false);
        coin_effect.animations.play('coin_collected')
        coin_object.destroy();
        */
        coin_object.destroy();
        game.global.total_coins += 1;
        coins_text.text = game.global.total_coins;
    }
}

function touch_platforms(player_object, platform_object)
{
    // player jumps on a block
    if (player.body.velocity.x > 0)
    {
        // slipping
        player.body.velocity.x -= game.global.reduce_slipping;
        
        // get player's position
        if (platform_object.move_x == null)
        {
            move_player_x = platform_object.x - 15;
        }
        
        if (platform_object.move_y)
        {
            move_player_y = platform_object.y - 100;
        }
        else
        {
            move_player_y = platform_object.y;
        }
    }
    
    // standing on a moving block
    if (platform_object.move_y && platform_object.speed >= 0)
    {
        player.y += platform_object.speed;
    }
    
    else if (platform_object.move_x)
    {
        player.x += platform_object.speed;
    }
    
    if (jump_bar_2.y != 390 && hold_down == false)
    {
        // reset jump bar
        jump_bar_2.y = 390;
        
        // step sound
        if (player.body.touching.down)
        {
            step_sound.play();
        }
    }
    
    // check game won
    if (player.x > 8500 && platform_object.name == "pipe_object")
    {
        if (level_finished == false && player.body.touching.down)
        {
            music1.stop();
            music2.stop();
            
            player.body.velocity.setTo(0,0)
            player.body.gravity.y = 0;
            
            level_finished = true;
            
            // remove events
            bg.inputEnabled = false;
            bg.events.onInputUp.remove(jump, this);
            
            // win sound
            win_game.play();
            
            // play next level
            next_timer = game.time.create(false);
            next_timer.loop(3500, function(){
                
            // save money
            localStorage.setItem('smj_total_coins', game.global.total_coins)
            
            if (game.global.current_level == 6)
            {
                game.state.start("end");
            }
            else
            {
                game.state.start("bonus_stage");
            }
            
            next_timer.stop();
                
            },this);
        
            next_timer.start();
        }
    }
    
    // show jump or idle animation
    if (hold_down && player.animations.currentAnim.name != 'jumping')
    {
        //player.animations.play('jumping')
    }
    if (saving_player == false && hold_down == false)
    {
        player.animations.play('idle')
    }
}
