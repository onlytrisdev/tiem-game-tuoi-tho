var game = new Phaser.Game(960, 540, Phaser.Canvas, null);

game.global = 
{
	musicPlaying : false,
	orientated : false,   
	show_instructions : true,   
    
    // current level
    current_level : 1,
    
    // you can continue after game over
    continue_price : 50,
    
    // when you start the game or any level, you have 2 banzais at least
    banzais_available : 1,
    
	total_coins : +localStorage.getItem('smj_total_coins') || 0,
    
    // things to upgrade 
	reduce_slipping : +localStorage.getItem('smj_reduce_slipping2') || 25, 
	magnet_duration : +localStorage.getItem('smj_magnet_duration') || 20000, //ms
	bonus_stage_duration : +localStorage.getItem('smj_bonus_duration') || 8, 
	banzais_owned : +localStorage.getItem('smj_banzais_owned') || 0, 
    
    // their upgrade level
    banzai_level : +localStorage.getItem('smj_banzai_level') || 0,
    magnet_level : +localStorage.getItem('smj_magnet_level') || 0,
    bonus_stage_level : +localStorage.getItem('smj_bonus_level') || 0,
    stability_level : +localStorage.getItem('smj_stability_level') || 0,
    
    // upgrade price
    banzai_price : +localStorage.getItem('smj_banzai_price') || 50,
    magnet_price : +localStorage.getItem('smj_magnet_price') || 30,
    bonus_price : +localStorage.getItem('smj_bonus_price') || 30,
    stability_price : +localStorage.getItem('smj_stability_price') || 45,
}

// game states
game.state.add('boot', bootState);
game.state.add("Loading", loading);
game.state.add("shop", shopState);
game.state.add("menu", menuState);
game.state.add("level1", state1);
game.state.add("level2", state2);
game.state.add("level3", state3);
game.state.add("level4", state4);
game.state.add("level5", state5);
game.state.add("level6", state6);
game.state.add("bonus_stage", bonusState);
game.state.add("end", endState);

// start boot state
game.state.start("boot");