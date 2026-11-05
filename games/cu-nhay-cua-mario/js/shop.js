var shopState = 
{

create: function() 
{ 
	bg = game.add.image(0, 0, 'backgrounds');
    bg.frame = 3;
	bg_shop = game.add.image(400, 10, 'bg_shop');
    bg_shop.width = 420;
    bg_shop.height = 517;
    
    game.global.magnet_duration = parseInt(game.global.magnet_duration).toFixed();
    game.global.bonus_stage_duration = parseInt(game.global.bonus_stage_duration).toFixed();
    
	// touch sound
	touch_sound = game.add.audio('touch_sound');
	
    title = game.add.bitmapText(530, 20, 'riffic_black', "Nang cap", 34);
    
    // coins collected
    coin_icon = game.add.sprite(15, 15, 'coin_needed_bg')
    coin_icon.scale.x = 1.4;    coin_icon.scale.y = 1.4;
    coins_collected = game.add.bitmapText(105, 34, 'riffic_black', game.global.total_coins, 30);
    coins_collected.anchor.setTo(.5,0)
    
    mario = game.add.sprite(290, 140, 'mario_2')
    mario.scale.x = -1;
    speech_bubble = game.add.sprite(10, 85, 'speech_bubble')
    speech_bubble.visible = false;
    
    // you can upgrade these (show purple bg only)
    item_lives = game.add.sprite(430, 70, 'bg_item')
    item_magnet = game.add.sprite(430, 185, 'bg_item')
    item_bonus = game.add.sprite(430, 300, 'bg_item')
    item_stability = game.add.sprite(430, 415, 'bg_item')
    item_lives.scale.x = 1.7;   item_lives.scale.y = 1.1;
    item_magnet.scale.x = 1.7;   item_magnet.scale.y = 1.1;
    item_bonus.scale.x = 1.7;   item_bonus.scale.y = 1.1;
    item_stability.scale.x = 1.7;   item_stability.scale.y = 1.1;
    
    // show their upgrade level
    item_lives_level = game.add.sprite(640, 113, 'item_level')
    item_magnet_level = game.add.sprite(640, 228, 'item_level')
    item_bonus_level = game.add.sprite(640, 343, 'item_level')
    item_stability_level = game.add.sprite(640, 458, 'item_level')

    item_lives_level.frame = game.global.banzai_level;
    item_magnet_level.frame = game.global.magnet_level;
    item_bonus_level.frame = game.global.bonus_stage_level;
    item_stability_level.frame = game.global.stability_level;
    
    // plus sign
    plus_lives = game.add.button(760, 132, 'plus', upgrade)
    plus_magnet = game.add.button(760, 247, 'plus', upgrade)
    plus_bonus = game.add.button(760, 362, 'plus', upgrade)
    plus_stability = game.add.button(760, 477, 'plus', upgrade)
    plus_lives.anchor.setTo(0.5,0.5)
    plus_magnet.anchor.setTo(0.5,0.5)
    plus_bonus.anchor.setTo(0.5,0.5)
    plus_stability.anchor.setTo(0.5,0.5)
    
    // upgrade icons (banzai, magnet...)
    banzai_shop_icon = game.add.button(440, 110, 'banzai_small');
    magnet_shop_icon = game.add.button(440, 225, 'magnet');
    coin_shop_icon = game.add.button(440, 341, 'coin');
    stability_shop_icon = game.add.button(440, 435, 'stability_icon');
    
    // mouse over/out
    banzai_shop_icon.events.onInputOver.add(function(){
        speech_bubble.visible = true;
        speech_bubble.frame = 0;
    }, this);
    banzai_shop_icon.events.onInputDown.add(function(){
        speech_bubble.visible = true;
        speech_bubble.frame = 0;
        }, this);
    banzai_shop_icon.events.onInputUp.add(function(){
        speech_bubble.visible = false;
    }, this);
    banzai_shop_icon.events.onInputOut.add(function(){
        
        speech_bubble.visible = false;
    }, this);
    
    magnet_shop_icon.events.onInputOver.add(function(){
        speech_bubble.visible = true;
        speech_bubble.frame = 1;
    }, this);
    magnet_shop_icon.events.onInputDown.add(function(){
        speech_bubble.visible = true;
        speech_bubble.frame = 1;
        }, this);
    magnet_shop_icon.events.onInputUp.add(function(){
        speech_bubble.visible = false;
    }, this);
    magnet_shop_icon.events.onInputOut.add(function(){
        
        speech_bubble.visible = false;
    }, this);
    
    coin_shop_icon.events.onInputOver.add(function(){
        speech_bubble.visible = true;
        speech_bubble.frame = 2;
    }, this);
    coin_shop_icon.events.onInputDown.add(function(){
        speech_bubble.visible = true;
        speech_bubble.frame = 2;
        }, this);
    coin_shop_icon.events.onInputUp.add(function(){
        speech_bubble.visible = false;
    }, this);
    coin_shop_icon.events.onInputOut.add(function(){
        
        speech_bubble.visible = false;
    }, this);
    
    stability_shop_icon.events.onInputOver.add(function(){
        speech_bubble.visible = true;
        speech_bubble.frame = 3;
    }, this);
    stability_shop_icon.events.onInputDown.add(function(){
        speech_bubble.visible = true;
        speech_bubble.frame = 3;
        }, this);
    stability_shop_icon.events.onInputUp.add(function(){
        speech_bubble.visible = false;
    }, this);
    stability_shop_icon.events.onInputOut.add(function(){
        
        speech_bubble.visible = false;
    }, this);
    
    
    // coins needed
    coin_icon = game.add.sprite(510, 109, 'coin_needed_bg')
    need_coins_banzai = game.add.bitmapText(575, 120, 'riffic_black', game.global.banzai_price, 25);
    need_coins_banzai.anchor.setTo(.5,0)
    
    coin_icon = game.add.sprite(510, 225, 'coin_needed_bg')
    need_coins_magnet = game.add.bitmapText(575, 235, 'riffic_black', game.global.magnet_price, 25);
    need_coins_magnet.anchor.setTo(.5,0)
    
    coin_icon = game.add.sprite(510, 340, 'coin_needed_bg')
    need_coins_bonus = game.add.bitmapText(575, 350, 'riffic_black', game.global.bonus_price, 25);
    need_coins_bonus.anchor.setTo(.5,0)
    
    coin_icon = game.add.sprite(510, 455, 'coin_needed_bg')
    need_coins_stability = game.add.bitmapText(575, 465, 'riffic_black', game.global.stability_price, 25);
    need_coins_stability.anchor.setTo(.5,0)
    
    update_text_fields();
    
    // tween plus sign
    game.add.tween(plus_lives.scale).to({x: 1.1, y: 1.1}, 400, Phaser.Easing.Linear.None, true, 0, 3, true);
    game.add.tween(plus_magnet.scale).to({x: 1.1, y: 1.1}, 400, Phaser.Easing.Linear.None, true, 0, 3, true);
    game.add.tween(plus_bonus.scale).to({x: 1.1, y: 1.1}, 400, Phaser.Easing.Linear.None, true, 0, 3, true);
    game.add.tween(plus_stability.scale).to({x: 1.1, y: 1.1}, 400, Phaser.Easing.Linear.None, true, 0, 3, true);
    
	// play music
	if (game.global.musicPlaying == false){
		music = game.add.audio('music');
		music.loopFull();
		game.global.musicPlaying = true;
	}
	
	// start button
	button_start = game.add.button(305, 460, 'buttons', play_now, this);
	
	button_games = game.add.button(190, 460, 'buttons', visit_website, this);
	button_menu = game.add.button(85, 460, 'buttons', go_to_menu, this);
    
    button_start.anchor.setTo(0.5,0.5);
    button_games.anchor.setTo(0.5,0.5);
    button_menu.anchor.setTo(0.5,0.5);
    button_start.frame = 2;
    button_games.frame = 0;
    button_menu.frame = 1;
},
	
};

function play_now()
{
    music.stop();
	game.state.start('level1');
	touch_sound.play();
    game.global.musicPlaying = false;
}

function go_to_menu()
{
    touch_sound.play();
    game.state.start('menu')
}

function upgrade(plus_button)
{
    // upgrade lives (banzai help)
    if (plus_button == plus_lives && game.global.total_coins >= game.global.banzai_price)
    {
        // pay and upgrade
        if (game.global.banzai_level < 4)
        {
            game.global.banzai_level += 1;
            game.global.banzais_owned += 1;
            
            item_lives_level.frame = game.global.banzai_level;
            game.global.total_coins -= game.global.banzai_price;

            // increase upgrade price (for the next time)
            game.global.banzai_price *= 2;
        }
    }
    else if (plus_button == plus_magnet && game.global.total_coins >= game.global.magnet_price)
    {
        if (game.global.magnet_level < 4)
        {
            game.global.magnet_level += 1;
            
            game.global.magnet_duration = parseInt(game.global.magnet_duration) + parseInt(10000);
            
            item_magnet_level.frame = game.global.magnet_level;
            game.global.total_coins -= game.global.magnet_price;
            game.global.magnet_price *= 2;
        }
    }
    else if (plus_button == plus_bonus && game.global.total_coins >= game.global.bonus_price)
    {
        if (game.global.bonus_stage_level < 4)
        {
            game.global.bonus_stage_level += 1;
            game.global.bonus_stage_duration = parseInt(game.global.bonus_stage_duration) + parseInt(7);
            
            item_bonus_level.frame = game.global.bonus_stage_level;
            game.global.total_coins -= game.global.bonus_price;
            game.global.bonus_price *= 2;
        }
    }
    else if (plus_button == plus_stability && game.global.total_coins >= game.global.stability_price)
    {
        if (game.global.stability_level < 4)
        {
            game.global.stability_level += 1;
            
            if (game.global.stability_level < 3)
            {
                game.global.reduce_slipping += 10;
            }
            else
            {
                game.global.reduce_slipping += 50;
            }
            
            item_stability_level.frame = game.global.stability_level;
            game.global.total_coins -= game.global.stability_price;
            game.global.stability_price *= 2;
        }
    }
    
    // update text fields
    update_text_fields();
    
    // save upgrade level
    localStorage.setItem('smj_banzai_level', game.global.banzai_level);
    localStorage.setItem('smj_magnet_level', game.global.magnet_level);
    localStorage.setItem('smj_bonus_level', game.global.bonus_stage_level);
    localStorage.setItem('smj_stability_level', game.global.stability_level);
    
    // save upgrade price
    localStorage.setItem('smj_banzai_price', game.global.banzai_price);
    localStorage.setItem('smj_magnet_price', game.global.magnet_price);
    localStorage.setItem('smj_bonus_price', game.global.bonus_price);
    localStorage.setItem('smj_stability_price', game.global.stability_price);
    
    // save upgrades (duration)
	localStorage.setItem('smj_reduce_slipping', game.global.reduce_slipping)
	localStorage.setItem('smj_magnet_duration', game.global.magnet_duration)
    game.global.magnet_duration = parseFloat(game.global.magnet_duration).toFixed();
    game.global.bonus_stage_duration = parseFloat(game.global.bonus_stage_duration).toFixed();
    
	localStorage.setItem('smj_bonus_duration', game.global.bonus_stage_duration)
	localStorage.setItem('smj_banzais_owned', game.global.banzais_owned) 
    
    // save money
    localStorage.setItem('smj_total_coins', game.global.total_coins)
}

    // update text fields
function update_text_fields()
{
    coins_collected.text = game.global.total_coins;
    
    if (game.global.banzai_level == 4)
    {
        need_coins_banzai.text = "MAX";
    }
    else
    {
        need_coins_banzai.text = game.global.banzai_price;
    }
    if (game.global.magnet_level == 4)
    {
        need_coins_magnet.text = "MAX";
    }
    else
    {
       need_coins_magnet.text = game.global.magnet_price;
    }
    if (game.global.bonus_stage_level == 4)
    {
        need_coins_bonus.text = "MAX";
    }
    else
    {
        need_coins_bonus.text = game.global.bonus_price;
    }
    if (game.global.stability_level == 4)
    {
        need_coins_stability.text = "MAX";
    }
    else
    {
        need_coins_stability.text = game.global.stability_price;
    }
}