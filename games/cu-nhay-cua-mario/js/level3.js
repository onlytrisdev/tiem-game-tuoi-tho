var state3 =
{
create: function()
{
	// init
    init();
    
    // current level
    game.global.current_level = 3;
    
    // background
	add_bg_and_inputs(2)
    
    show_current_level();
    
    // groups
    create_groups();
    
    // blocks (ground)
    x_pos = 200;
    y_pos = 330;
    
    // build level (blocks, coins, enemies...)
    for (i = 0; i < 27; i++)
    {   
        // first blocks
        if (i == 0)
        {
            block = blocks.create(200, 330, 'block3')
            block.anchor.setTo(0.5, 0);
            move_player_x = 200;
            move_player_y = 330;
        }
        else if (i == 1)
        {
            block = blocks.create(510, 320, 'block3')
            block.anchor.setTo(0.5, 0);
        }
        
         // horizontal moving blocks
        else if (i == 3)
        {
            block = blocks.create(800, 310, 'block3')
            block.anchor.setTo(0.5, 0);
            block.x_pos = block.x;
            block.move_x = true;
            block.speed = 2.5;
        }
        else if (i < 25)
        {
            // random block's position and frame
            random_x = game.rnd.integerInRange(-90, 90)
            random_y = game.rnd.integerInRange(-70, 50)

            block = blocks.create(x_pos + random_x + 1100, y_pos + random_y, 'block3')
            block.anchor.setTo(0.5, 0);
            block.visible = false;
            x_pos += 360;
            
            if (i == 24)
            {
                block.visible = false;
                block.y = 10000;
            }
        }
        else if (i == 25)
        {
            block25 = blocks.create(x_pos + random_x + 1100, 310, 'block3')
            block25.anchor.setTo(0.5, 0);
            block25.x_pos = block.x;
            block25.move_x = true;
            block25.speed = 2.5;
            x_pos += 360;
        }
        
        // vertical moving blocks
       if (i == 6 || i == 10 || i == 15 || i == 14 || i == 19 || i == 22)
        {
            block.y_pos = block.y;
            block.move_y = true;
            block.speed = 1.5;
        }
        
        // coins
        create_coins_in_level();
        
        // koopas
        if ( i == 5 || i == 7 || i == 10 || i == 13 || i == 17 || i == 22)
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
        if (i == 4)
        {
            magnet = game.add.sprite(block.x - 25, block.y - 55, 'magnet')
            tween_m = game.add.tween(magnet).to({y: magnet.y - 10}, 400, "Linear", true, 0, -1, true)
        }
        else if (i == 5)
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
            pipe = blocks.create(block25.x + 250, block25.y, 'pipe_blue')
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
        update_player_and_banzai();
        update_coins_and_powerups();
        update_koopas();
        update_jump_meter();
        check_game_over();  
    }
},

};