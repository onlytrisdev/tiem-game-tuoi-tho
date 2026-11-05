var state2 =
{
create: function()
{
	// init
    init();
    
    // current level
    game.global.current_level = 2;
    
    // background
	add_bg_and_inputs(1)
    
    show_current_level();
    
    // groups
    create_groups();
    
    // blocks (ground)
    x_pos = 200;
    y_pos = 330;
    
    // build level (blocks, coins, enemies...)
    for (i = 0; i < 27; i++)
    {
        // random block's position and frame
        random_x = game.rnd.integerInRange(-90, 90)
        random_y = game.rnd.integerInRange(-60, 70)
        random_frame = game.rnd.integerInRange(0,1)
        
        // cactus
        if (i == 2 || i == 7 || i == 12 || i == 18 || i == 22 || i == 25)
        {
            cactus = cactuses.create(x_pos + random_x, y_pos + random_y + 80, 'cactus')
            cactus.anchor.setTo(0.5,1)
            cactus.y_pos = cactus.y;
            tween_cactus = game.add.tween(cactus).to({y: "-80"}, 800, Phaser.Easing.Quadratic.Out, true, 1500, -1, true);
            tween_cactus.repeatDelay(1500)
        }
        
        block = blocks.create(x_pos + random_x, y_pos + random_y, 'block2')
        block.anchor.setTo(0.5, 0);
        block.width = 85;
        block.visible = false;
        block.frame = random_frame;
        x_pos += 360;
        
        // first block
        if (i == 0)
        {
            block.x = 200;
            block.y = 330;
            move_player_x = 200;
            move_player_y = 330;
        }
        
        // vertical moving blocks
       if (i == 5 || i == 6 || i == 15 || i == 16 || i == 17)
        {
            block.y_pos = block.y;
            block.move_y = true;
            block.speed = 1.5;
        }
        
        // coins
        create_coins_in_level();
        
        // koopas
        if (i == 2 || i == 7 || i == 13 || i == 18 || i == 22)
        {
            koopa = koopas.create(x_pos + 150, y_pos - 15, 'koopa')
            koopa.animations.add('flying', [0,1], 10, true)
            koopa.animations.play('flying')
            koopa.move_up = true;
            koopa.y_pos = y_pos - 20;
            koopa.scale.x = 1.3;
            koopa.scale.y = 1.3;
        }
        
        // magnet
        if (i == 1)
        {
            magnet = game.add.sprite(block.x - 25, block.y - 55, 'magnet')
            tween_m = game.add.tween(magnet).to({y: magnet.y - 10}, 400, "Linear", true, 0, -1, true)
        }
        else if (i == 10)
        {
            banzai_item1 = game.add.sprite(block.x - 25, block.y - 55, 'banzai_small')
            banzai_item1.scale.x = .8;      banzai_item1.scale.y = .8;
            tween_b = game.add.tween(banzai_item1).to({y: banzai_item1.y - 10}, 400, "Linear", true, 0,-1,true);
        }
        else if (i == 19)
        {
            banzai_item2 = game.add.sprite(block.x - 25, block.y - 55, 'banzai_small')
            banzai_item2.scale.x = .8;      banzai_item2.scale.y = .8;
            tween_b = game.add.tween(banzai_item2).to({y: banzai_item2.y - 10}, 400, "Linear", true, 0,-1,true);
        }
        
        // last block (pipe)
        else if (i == 26)
        {
            pipe = blocks.create(block.x + 350, block.y, 'pipe_blue')
            pipe.anchor.setTo(0.5,0);
            pipe.name = "pipe_object";
        }
    }

    blocks.setAll('body.immovable', true)
    
    add_icons_and_buttons();
    add_player_and_banzai();
    create_sounds();
    
    // music
	music2.loopFull();
    
    // camera
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    game.camera.deadzone = new Phaser.Rectangle(200, 0, 1, 1);
},

update: function() 
{
    if (level_finished == false)
    {
        // update_levels.js
        update_blocks();
        update_cactus();
        update_player_and_banzai();
        update_coins_and_powerups();
        update_koopas();
        update_jump_meter();
        check_game_over();  
    }
},

};