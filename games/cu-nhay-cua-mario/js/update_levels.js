//** these function can be called in any level inside update function **//
function update_blocks()
{
    blocks.forEach(function(block){
        
        if (block.x < game.camera.x + 960 && block.visible == false)
        {
            block.visible = true;
        }
        
        if (block.y >= block.y_pos) block.speed = -1.5;
        else if (block.y <= block.y_pos - 100) block.speed = 1.5;
        
        if (block.x <= block.x_pos) block.speed = 1.5;
        else if (block.x >= block.x_pos + 200) block.speed = -1.5;
        
        if (block.move_y)
        {
            block.y += block.speed;
        }
        if (block.move_x)
        {
            block.x += block.speed;
        }

        
        if (block.x < game.camera.x - 1100)
        {
            block.destroy();
        }
    });
}

function update_player_and_banzai()
{
    //game.physics.arcade.overlap(player, coins, collect_coins);
    if (player_collision)
    {
        game.physics.arcade.collide(player, blocks, touch_platforms);
    }
    
    //game.camera.focusOnXY(player.x + 200, 0, 1, 1) 
    // game.debug.body(player)
    
    if (banzai.visible && saving_player)
    {
        banzai.x = player.x - 5;
        banzai.y = player.y - 5;
    }
    
    // prevent player moving to the left
    if (saving_player == false && player.body.velocity.x < 0)
    {
        player.body.velocity.x = 0;
    }
}

function update_jump_meter()
{
    // increase or decrease jump power (bar)
    if (jump_power >= max_power)
    {
        jump_power = max_power;
        increase_jump_power = false;
    }
    else if (jump_power <= 200)
    {
        jump_power = 200;
        increase_jump_power = true;
    }
    
    if (hold_down)
    {
        if (increase_jump_power && player.body.touching.down)
        {
            jump_power += 30;
            jump_bar_2.y -= 11;
        }
        else if (increase_jump_power == false && player.body.touching.down)
        {
            jump_power -= 30;
            jump_bar_2.y += 11;
        }
    }
    
    jump_bar_2.x = game.camera.x + 20;
}

function update_coins_and_powerups()
{
    coins.forEach(function(coin){
        
        if (coin.x < game.camera.x + 960 && coin.visible == false)
        {
            coin.visible = true;
            coin.animations.play('coin_anim')
        }
        
        if (has_magnet && player.x + 150 > coin.x && player.x - 200 < coin.x)
        {
            if (coin.x <= player.x)
            {
                coin.x += 9;
            }
            else
            {
                coin.x -= 9;
            }

            if (player.y - 40 > coin.y)
            {
                coin.y += 9;
            }
            else if (player.y < coin.y)
            {
                coin.y -= 9;
            }
        }
        
        if (check_overlap(player,coin))
        {
            collect_coins(coin);
        }
        
        if (coin.x < game.camera.x - 600)
        {
            coin.destroy();
        }
    });
    
    if (magnet.visible)
    {
        if (check_overlap(player, magnet) && saving_player == false)
        {
            magnet.visible = false;
            has_magnet = true;
            timer_magnet = game.time.create(false);
	        timer_magnet.loop(game.global.magnet_duration, remove_magnet, this);
            timer_magnet.start();
            magnet_sound.play();
        }
    }
    
    if (banzai_item1.visible)
    {
        if (check_overlap(player, banzai_item1) && saving_player == false)
        {
            banzai_item1.visible = false;
            banzai_icon = banzais.create(banzais.length * 55 + 15, 15, 'banzai_small');
            game.global.banzais_available += 1;
            magnet_sound.play();
        }
    }
    if (banzai_item2.visible)
    {
        if (check_overlap(player, banzai_item2) && saving_player == false)
        {
            banzai_item2.visible = false;
            banzai_icon = banzais.create(banzais.length * 55 + 15, 15, 'banzai_small');
            game.global.banzais_available += 1;
            magnet_sound.play();
        }
    }
}

function update_koopas()
{
    koopas.forEach(function(koopa){

    if (koopa.x < game.camera.x + 960 && koopa.visible == false)
    {
        koopa.visible = true;
        koopa.animations.play('flying')
    }

    if (koopa.y >= koopa.y_pos) koopa.move_up = true;
    else if (koopa.y <= koopa.y_pos - 80) koopa.move_up = false;

    if (koopa.move_up) koopa.y -= 1;
    else koopa.y += 1;

    if (check_overlap(player, koopa) && hit_enemy == false
       && saving_player == false)
    {
        player.body.velocity.setTo(-1000,-300)
        hit_enemy = true
        player_collision = false;
        mario_hurt.play();

        if (game.global.banzais_available == 0)
        {
            game_over();
        }
    }

    if (koopa.x < game.camera.x - 600) koopa.destroy();
        
    });
}

function update_cactus()
{
    cactuses.forEach(function(cactus){

        if (check_overlap(player,cactus)&& hit_enemy == false
           && saving_player == false)
        {
           player.body.velocity.setTo(-1000,-300)
            hit_enemy = true
            player_collision = false;
            mario_hurt.play();
            //cactus.destroy();

            if (game.global.banzais_available == 0)
            {
                game_over();
            }
        }
        if (cactus.x < game.camera.x - 200)
        {
            cactus.destroy();
        }
    });
}

function update_boo()
{
    angle -= boo_speed;
    
    boos.forEach(function(boo){
        
        boo.x = boo.center_x + Math.sin(angle) * boo.radius;
        boo.y = boo.center_y + Math.cos(angle) * boo.radius;

        if (check_overlap(player, boo)&& hit_enemy == false
           && saving_player == false)
        {
            player.body.velocity.setTo(-1000,-300)
            hit_enemy = true
            player_collision = false;
            mario_hurt.play();
            //boo.destroy();

            if (game.global.banzais_available == 0)
            {
                game_over();
            }
        }
        
        if (boo.x < game.camera.x - 300)
        {
            boo.destroy();
        }
    });
}

function update_bullets()
{
    bullets.forEach(function(bullet){
        
        if (bullet.can_move == false && player.x + 500 > bullet.x && player.body.touching.down)
        {
            bullet.can_move = true;
            bullet_distance = Phaser.Math.distance(player.x, player.y, bullet.x, bullet.y).toFixed();
            bullet.speed = (bullet_distance / 66).toFixed(1);
            if (bullet.speed < 3)
            {
                bullet.speed = 3;
            }
        }
        
        if (bullet.can_move)
        {
            bullet.x -= bullet.speed;
        }

        if (check_overlap(player,bullet)&& hit_enemy == false
           && saving_player == false)
        {
           player.body.velocity.setTo(-1000,-300)
            hit_enemy = true
            player_collision = false;
            mario_hurt.play();

            if (game.global.banzais_available == 0)
            {
                game_over();
            }
        }
        
        if (bullet.x < game.camera.x - 100)
        {
            bullet.destroy();
        }
    });
}

function check_game_over()
{
    // fail
    if (player.y > 580 && saving_player == false)
    {
        // save the player if bubbles available
        if (game.global.banzais_available > 0)
        {
            game.global.banzais_available -= 1;
            
            // player in the bubble and cannot collide with other objects
            saving_player = true;
            hit_enemy = true;
            player_collision = false;
            
            // banzai appears
            banzai.visible = true;
            
            // remove one icon from top-left corner
            var last_banzai_icon = banzais.getAll();
            
            tween_banzai_icon = game.add.tween(last_banzai_icon[last_banzai_icon.length - 1]).to({alpha: 0}, 400, "Linear", 2, 0, true)
            tween_banzai_icon.onComplete.add(function(){
                
                last_banzai_icon[last_banzai_icon.length - 1].destroy();
            })

            // player alpha animation
            if (tween_alpha)
            {
                tween_alpha.stop();
                tween_alpha = null;
            }
            
            player.alpha = 1;
            tween_alpha = game.add.tween(player).to({alpha: 0.3}, 210, "Linear", true, 0, 9, true);
            tween_alpha.onComplete.add(function(){
                
                // enemies can touch you again
                hit_enemy = false;
                player.alpha = 1;
            },this)
            
            // disable physics
            player.body.gravity.y = 0;
            player.body.velocity.setTo(0,0)
            
            // play sound
            random_sound = game.rnd.integerInRange(1,3)
            if (random_sound == 1)
            {
                weeheehee.play();
            }
            else if (random_sound == 2)
            {
                yahoo.play();
            }
            else
            {
                haha.play();
            }
            
            // tween player back on the block
            distance = Phaser.Math.distance(player.x, player.y, move_player_x, move_player_y).toFixed();
            
            tween_player = game.add.tween(player).to({x: move_player_x, y: move_player_y}, distance * 2.8, "Linear", true);
            tween_player.onComplete.add(function(){

                // you can jump again
                saving_player = false;
                player_collision = true;
                player.body.gravity.y = 1250;
                
                tween_banzai = game.add.tween(banzai).to({x: "-450"}, 1500, Phaser.Easing.Quadratic.In, true);
                
            },this);
        }
        else  if (level_finished == false) // game over
        {
            game_over();
            level_finished = true;
        }
    }
}