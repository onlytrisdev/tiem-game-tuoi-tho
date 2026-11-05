var state1 =
{
	
create: function()
{
	// init
    init();
    
    // current level
    game.global.current_level = 1;
    
    // background
	add_bg_and_inputs(0)
    
    // instructions
    if (game.global.show_instructions)
    {
        game.global.show_instructions = false;
        
        if (game.device.desktop)
        {
            mouse = game.add.sprite(275, 115, 'mouse')
            mouse.animations.add('mouse_anim', [0,1,1], 2, true)
            mouse.animations.play('mouse_anim')
        }
        else
        {
            mouse = game.add.sprite(280, 115, 'hand')
        }

        hold_down_text = game.add.bitmapText(500, 130, 'riffic_black', "Giu de thuc hien cu nhay!", 28);
        //block_position = game.add.bitmapText(1700, 130, 'riffic_black', "Blocks are positioned randomly", 28);
        //block_position.anchor.setTo(0.5,0)
        hold_down_text.anchor.setTo(0.5,0)
    }
    else
    {
        show_current_level();
    }
    
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
        
        block = blocks.create(x_pos + random_x, y_pos + random_y, 'block1')
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
        
        // double blocks
        if (i == 1 || i == 2 || i == 3)
        {
            block = blocks.create(block.x + 85, block.y, 'block1')
            block.anchor.setTo(0.5, 0);
            block.width = 85;
            block.frame = block.frame;
        }
        
        // vertical moving blocks
       if (i == 5 || i == 10 || i == 15 || i == 20)
        {
            block.y_pos = block.y;
            block.move_y = true;
            block.speed = 1.5;
        }
        
        // coins
        create_coins_in_level();
        
        // koopas
        if (i == 7 || i == 13 || i == 18 || i == 24)
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
        if (i == 3)
        {
            magnet = game.add.sprite(block.x - 65, block.y - 70, 'magnet')
            tween_m = game.add.tween(magnet).to({y: magnet.y - 10}, 400, "Linear", true, 0, -1, true)
        }
        else if (i == 8)
        {
            banzai_item1 = game.add.sprite(block.x - 25, block.y - 55, 'banzai_small')
            banzai_item1.scale.x = .8;      banzai_item1.scale.y = .8;
            tween_b = game.add.tween(banzai_item1).to({y: banzai_item1.y - 10}, 400, "Linear", true, 0,-1,true);
        }
        else if (i == 17)
        {
            banzai_item2 = game.add.sprite(block.x - 25, block.y - 55, 'banzai_small')
            banzai_item2.scale.x = .8;      banzai_item2.scale.y = .8;
            tween_b = game.add.tween(banzai_item2).to({y: banzai_item2.y - 10}, 400, "Linear", true, 0,-1,true);
        }
        
        // last block (pipe)
        else if (i == 26)
        {
            pipe = blocks.create(block.x + 350, block.y, 'pipe_blue')
            pipe.anchor.setTo(0.5,0)
            pipe.name = "pipe_object";
        }
    }

    blocks.setAll('body.immovable', true)
    
    // create_levels.js
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
        update_player_and_banzai();
        update_coins_and_powerups();
        update_koopas();
        update_jump_meter();
        check_game_over();  
    }
},
    
};