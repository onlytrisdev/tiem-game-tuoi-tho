function config() { }
config.settings = {
	"GAME_NAME": "Antman and Wasp: Attack of the Robots",
	"SWIT_VERSION": "1.2.0",
	"MAX_DELTA_TIME": 50,
	"SAFE_AREA_WIDTH": 200,
	"APP_WIDTH": 1024,
	"APP_HEIGHT": 768,
	"APP_FPS": 40,
	"SOUND_PERCENT": 20,
	"ASSETS_PATH": "",
	"LOG": true,
	"USE_TILT": true,
	"RENDER_MODE": 0,
	"CONSOLE_MODE": 2,
	"WIDE_SCREEN": true,
	"RIGHT_TO_LEFT": false,
	"SHOW_SOCIAL_BUTTONS": false,
	"USE_ONLY_SOUNDJS": false,
	"keyUp": 38,
	"keyDown": 40,
	"keyRight": 39,
	"keyLeft": 37,
	"keySpace": 32,
	"comboLimit0": 2,
	"comboLimit1": 5,
	"comboLimit2": 11,
	"comboLimit3": 19,
	"comboLimit4": 29,
	"rotationDelayNormal": 5000
};
config.sounds = [
	{
		"id": "SND_UI_CLICK",
		"file": "snd_ui_click",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_UI_BACK",
		"file": "snd_ui_back",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_UI_PLAY",
		"file": "snd_play",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_UI_SHOW_POPUP",
		"file": "snd_ui_show_popup",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_BG_MAINMENU",
		"file": "mus_menu",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 0
	},
	{
		"id": "SND_BG_GAME_0",
		"file": "mus_level1",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 4
	},
	{
		"id": "SND_BG_GAME_1",
		"file": "mus_level2",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 5
	},
	{
		"id": "SND_BG_GAME_2",
		"file": "mus_level3",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 6
	},
	{
		"id": "SND_BG_GAME_3",
		"file": "mus_level4",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 7
	},
	{
		"id": "SND_BG_GAME_BOSS",
		"file": "mus_boss",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 3
	},
	{
		"id": "SND_PLAYER_HIT",
		"file": "snd_player_hit",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_KICK",
		"file": "snd_player_kick",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_PUNCH",
		"file": "snd_player_punch",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_SHRINKS_GROW",
		"file": "snd_player_shrinks_grow",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_UPPERCUT",
		"file": "snd_player_uppercut",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_WASP_INTRO",
		"file": "snd_wasp_intro",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1,
		"group": 1
	},
	{
		"id": "SND_EN_CHAINROBOT_HIT",
		"file": "snd_en_chainrobot_hit",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_DAMAGE_ELECTRIC_FX_LOOP",
		"file": "snd_en_damage_electric_fx_loop",
		"loops": 0,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_EXPLOSION0",
		"file": "snd_en_explosion0",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_EXPLOSION1",
		"file": "snd_en_explosion1",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_EXPLOSION2",
		"file": "snd_en_explosion2",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_FASTROBOT_ATTACK",
		"file": "snd_en_fastrobot_attack",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_FASTROBOT_HIT",
		"file": "snd_en_fastrobot_hit",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_FLYINGROBOT_APPEAR",
		"file": "snd_en_flyingrobot_appear",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_FLYINGROBOT_HIT",
		"file": "snd_en_flyingrobot_hit",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_FLYINGROBOT_SHOOT",
		"file": "snd_en_flyingrobot_shoot",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_HEAVYROBOT_HIT",
		"file": "snd_en_heavyrobot_hit",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_LIGHTROBOT_ATTACK",
		"file": "snd_en_lightrobot_attack",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_LIGHTROBOT_HIT",
		"file": "snd_en_lightrobot_hit",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_TELEPORT_INTRO",
		"file": "snd_en_teleport_intro",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_BLOCK",
		"file": "snd_en_block",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_LIFE_ORB_APPEAR",
		"file": "snd_life_orb_appear",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_LIFE_ORB_GRAB",
		"file": "snd_life_orb_grab",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_DOORS_AVAILABLE",
		"file": "snd_doors_available",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENTER_ANTMAN",
		"file": "snd_enter_antman",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_BKG_INSIDE_ROBOT",
		"file": "snd_bkg_inside_robot",
		"loops": 0,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_CHIP_DESTROY",
		"file": "snd_chip_destroy",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_CHIP_HIT",
		"file": "snd_chip_hit",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_HOLOGRAM",
		"file": "snd_hologram",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_UPGRADE_COLLECT",
		"file": "snd_upgrade_collect",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_UI_NEW_ACHIEVEMENT",
		"file": "snd_ui_new_achievement",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_UI_FINISH_AREA",
		"file": "snd_ui_finish_area",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_TRAVEL_INSIDE",
		"file": "snd_player_travel_inside",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_MINIGAME_TIME_OUT",
		"file": "snd_minigame_time_out",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_HAZARD_ELECTRIC_FLOOR_ALERT",
		"file": "snd_hazard_electric_floor_alert",
		"loops": 0,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_HAZARD_ELECTRIC_FLOOR_ACTIVE1",
		"file": "snd_hazard_electric_floor_active1",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_HAZARD_ELECTRIC_FLOOR_ACTIVE2",
		"file": "snd_hazard_electric_floor_active2",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_HAZARD_ELECTRIC_FLOOR_ACTIVE3",
		"file": "snd_hazard_electric_floor_active3",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_HAZARD_BIG_ELECTRIC_ALERT",
		"file": "snd_hazard_big_electric_alert",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_GIANTMAN_PUNCH",
		"file": "snd_giantman_punch",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_GIANTMAN_PUNCH_SWING",
		"file": "snd_giantman_punch_swing",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_JETPACK_RECOVERY",
		"file": "snd_en_jetpack_recovery",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_HEAVYROBOT_CHARGE",
		"file": "snd_en_heavyrobot_charge",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_HEAVYROBOT_ATTACK",
		"file": "snd_en_heavyrobot_attack",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_DASH",
		"file": "snd_en_dash",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_CHARGE",
		"file": "snd_en_charge",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_EN_CHAINROBOT_ATTACK",
		"file": "snd_en_chainrobot_attack",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_BOSS_LASER",
		"file": "snd_boss_laser",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_BOSS_LASER_IMPACT",
		"file": "snd_boss_laser_impact",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_BOSS_LASER_WARNING",
		"file": "snd_boss_laser_warning",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_BOSS_SHRINK",
		"file": "snd_boss_shrink",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3,
		"group": 1
	}
];
config.browserSettings = [
	{
		"browserType": "MSIE",
		"platformType": "Win",
		"minVersion": 9
	},
	{
		"browserType": "Opera",
		"platformType": "",
		"minVersion": 12
	},
	{
		"browserType": "Chrome",
		"platformType": "",
		"minVersion": 25
	},
	{
		"browserType": "Firefox",
		"platformType": "",
		"minVersion": 20
	},
	{
		"browserType": "Safari",
		"platformType": "",
		"minVersion": 4
	}
];
config.transitions = [
	{
		"transition": "rhombusTransition",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "up",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionup",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "up",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitiondown",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "down",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionleft",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "left",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionright",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "right",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionleftdown",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "leftdown",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionleftup",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "leftup",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionrightdown",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "rightdown",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionrightup",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "rightup",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionmanhattan",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "manhattan",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionmanhattanInv",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "manhattanInv",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionmanhattanMax",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "manhattanMax",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionmanhattanMin",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "manhattanMin",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionmanhattanMaxInv",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "manhattanMaxInv",
		"link": "gui_rhombus"
	},
	{
		"transition": "rhombusTransitionmanhattanMinInv",
		"rows": 12,
		"columns": 20,
		"type": "scale",
		"init": 0,
		"end": 0.8,
		"duration": 500,
		"delay": 70,
		"direction": "manhattanMinInv",
		"link": "gui_rhombus"
	}
];
config.roomData = [
	{
		"levelId": "level1",
		"numRooms": 1
	},
	{
		"levelId": "level2",
		"numRooms": 1
	},
	{
		"levelId": "level3",
		"numRooms": 1
	},
	{
		"levelId": "level4",
		"numRooms": 1
	}
];
config.minigame = [
	{
		"time": 2000,
		"numTaps": 10
	},
	{
		"time": 2000,
		"numTaps": 10
	}
];
config.player = {
	"hp": 100,
	"timeResetAttack": 300,
	"timeResetCombo": 2500,
	"damageAttack1": 1,
	"damageAttack2": 1,
	"damageAttack3": 2,
	"damageWaspAttack1": 1,
	"damageWaspAttack2": 1,
	"damageWaspAttack3": 2,
	"damageUppercut": 2,
	"damageSpecial": 7,
	"speedMove": 1.1,
	"speedDash": 1,
	"waspSpCost": 2,
	"shrinkResetTime": 700,
	"minigameSpFill": 25,
	"normalSpFill": 12,
	"pickupHealAmount": 20,
	"techHpRegen": 0.03,
	"techPickupMult": 1.6,
	"techHpMaxMult": 1.25,
	"techAttackMult": 1.3,
	"techDefenseMult": 0.8,
	"techWaspAtkMult": 1.15,
	"techWaspCostMult": 0.75,
	"techSpFillMult": 1.5
};
config.comboBonus = [
	{
		"numCombo": 1,
		"zoomFactor": 1,
		"dmgFactor": 1,
		"auraClip": "0",
		"rankLetter": "D"
	},
	{
		"numCombo": 5,
		"zoomFactor": 1.000,
		"dmgFactor": 1.2,
		"auraClip": "1",
		"rankLetter": "C"
	},
	{
		"numCombo": 10,
		"zoomFactor": 1.070,
		"dmgFactor": 1.5,
		"auraClip": "1",
		"rankLetter": "B"
	},
	{
		"numCombo": 15,
		"zoomFactor": 1.070,
		"dmgFactor": 1.7,
		"auraClip": "1",
		"rankLetter": "A"
	},
	{
		"numCombo": 20,
		"zoomFactor": 1.150,
		"dmgFactor": 2,
		"auraClip": "1",
		"rankLetter": "S"
	},
	{
		"numCombo": 25,
		"zoomFactor": 1.150,
		"dmgFactor": 2,
		"auraClip": "1",
		"rankLetter": "SS"
	}
];
config.waves = [
	{
		"wave": 1,
		"level": 1,
		"difficulty": 1,
		"behavior": 2,
		"enemy": [6,6,6],
		"delay": [0,0,0],
		"point": [3,8,13],
		"drop_item": [0,0,0]
	},
	{
		"wave": 2,
		"level": 1,
		"difficulty": 1,
		"behavior": 1,
		"enemy": [1],
		"delay": [0],
		"point": [7],
		"drop_item": [1]
	},
	{
		"wave": 3,
		"level": 1,
		"difficulty": 1,
		"behavior": 2,
		"enemy": [3,2,2],
		"delay": [0,4000,4000],
		"point": [7,5,9],
		"drop_item": [0,0,0]
	},
	{
		"wave": 4,
		"level": 1,
		"difficulty": 1,
		"behavior": 2,
		"enemy": [3,2,2],
		"delay": [0,4000,4000],
		"point": [7,4,14],
		"drop_item": [0,0,0]
	},
	{
		"wave": 5,
		"level": 2,
		"difficulty": 2,
		"behavior": 2,
		"enemy": [6,6,6,1],
		"delay": [0,0,0,5000],
		"point": [4,5,14,6],
		"drop_item": [0,0,0,0]
	},
	{
		"wave": 5,
		"level": 2,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [1,1],
		"delay": [0,0],
		"point": [6,8],
		"drop_item": [0,0]
	},
	{
		"wave": 6,
		"level": 2,
		"difficulty": 2,
		"behavior": 2,
		"enemy": [2,2,2],
		"delay": [0,0,0],
		"point": [3,8,13],
		"drop_item": [0,0,0]
	},
	{
		"wave": 6,
		"level": 2,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [3],
		"delay": [0],
		"point": [7],
		"drop_item": [0]
	},
	{
		"wave": 7,
		"level": 2,
		"difficulty": 1,
		"behavior": 2,
		"enemy": [1,2,2],
		"delay": [0,0,0],
		"point": [7,0,10],
		"drop_item": [0,0,0]
	},
	{
		"wave": 7,
		"level": 2,
		"difficulty": 1,
		"behavior": 2,
		"enemy": [3,1],
		"delay": [0,0],
		"point": [7,9],
		"drop_item": [0,0]
	},
	{
		"wave": 8,
		"level": 2,
		"difficulty": 1,
		"behavior": 2,
		"enemy": [2,3,4],
		"delay": [0,0,0],
		"point": [7,3,13],
		"drop_item": [0,0,0]
	},
	{
		"wave": 9,
		"level": 3,
		"difficulty": 1,
		"behavior": 2,
		"enemy": [1,1,1],
		"delay": [0,4000,8000],
		"point": [7,8,9],
		"drop_item": [0,0,1]
	},
	{
		"wave": 9,
		"level": 3,
		"difficulty": 1,
		"behavior": 2,
		"enemy": [4,1],
		"delay": [0,0],
		"point": [7,9],
		"drop_item": [1,0]
	},
	{
		"wave": 10,
		"level": 3,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [1,1,6,6],
		"delay": [0,0,5000, 5000],
		"point": [2,12,3,13],
		"drop_item": [0,0,0,0]
	},
	{
		"wave": 11,
		"level": 3,
		"difficulty": 2,
		"behavior": 2,
		"enemy": [4,2],
		"delay": [0,0],
		"point": [7,9],
		"drop_item": [0,0]
	},
	{
		"wave": 11,
		"level": 3,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [5],
		"delay": [0],
		"point": [7],
		"drop_item": [0]
	},
	{
		"wave": 12,
		"level": 3,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [1,1,3],
		"delay": [0,0,5000],
		"point": [2,12,7],
		"drop_item": [0,0,0]
	},
	{
		"wave": 12,
		"level": 3,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [1,3],
		"delay": [0,0],
		"point": [2,9],
		"drop_item": [0,0]
	},
	{
		"wave": 13,
		"level": 4,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [3,3,4],
		"delay": [0,0,0],
		"point": [3,13,7],
		"drop_item": [0,0,0]
	},
	{
		"wave": 14,
		"level": 4,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [2,2,2,2,3,3],
		"delay": [0,0,0,0,0,0],
		"point": [2,4,12,14,7,9],
		"drop_item": [0,0,0,0,0,0]
	},
	{
		"wave": 15,
		"level": 4,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [1,1,2,2,2],
		"delay": [0,0,0,0,0],
		"point": [2,12,8,4,14],
		"drop_item": [0,0,0,0,0]
	},
	{
		"wave": 16,
		"level": 4,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [3,3,3,2,2],
		"delay": [0,0,0,10000,10000],
		"point": [7,4,14,3,13],
		"drop_item": [0,0,0,0,0]
	},
	{
		"wave": 17,
		"level": 5,
		"difficulty": 2,
		"behavior": 2,
		"enemy": [4,4],
		"delay": [0,0],
		"point": [7,9],
		"drop_item": [0,0]
	},
	{
		"wave": 17,
		"level": 5,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [5],
		"delay": [0],
		"point": [7],
		"drop_item": [0]
	},
	{
		"wave": 18,
		"level": 5,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [5,1,1,2,2],
		"delay": [0,0,0,7000,7000],
		"point": [7,3,13,3,13],
		"drop_item": [0,0,0,0,0]
	},
	{
		"wave": 19,
		"level": 5,
		"difficulty": 2,
		"behavior": 2,
		"enemy": [2,2,2,2,2],
		"delay": [0,0,0,0,0],
		"point": [2,12,8,4,14],
		"drop_item": [0,0,0,0,0]
	},
	{
		"wave": 19,
		"level": 5,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [3,3],
		"delay": [0,0],
		"point": [2,12],
		"drop_item": [0,1]
	},
	{
		"wave": 20,
		"level": 5,
		"difficulty": 2,
		"behavior": 2,
		"enemy": [2,2,2,2,101,101,101,101],
		"delay": [0,0,0,0,0,0,0,0],
		"point": [1,3,11,13,0,4,10,14],
		"drop_item": [0,0,0,0,0,0,0,0]
	},
	{
		"wave": 21,
		"level": 6,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [1,1,1,1,201],
		"delay": [0,0,0,0,0],
		"point": [1,3,11,13,7],
		"drop_item": [0,0,0,0,0]
	},
	{
		"wave": 22,
		"level": 6,
		"difficulty": 2,
		"behavior": 2,
		"enemy": [4,4,2,2],
		"delay": [0,0,0,0],
		"point": [7,9,3,13],
		"drop_item": [0,0,0,0]
	},
	{
		"wave": 22,
		"level": 6,
		"difficulty": 3,
		"behavior": 2,
		"enemy": [4,3,3],
		"delay": [0,0,0],
		"point": [7,4,14],
		"drop_item": [0,0,0]
	},
	{
		"wave": 23,
		"level": 6,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [5,201,401],
		"delay": [0,0,0],
		"point": [7,7,9],
		"drop_item": [1,0,0]
	},
	{
		"wave": 24,
		"level": 6,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [2,401],
		"delay": [0,0],
		"point": [7,8],
		"drop_item": [1,0]
	},
	{
		"wave": 24,
		"level": 6,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [3,3],
		"delay": [0,0],
		"point": [4,14],
		"drop_item": [0,0]
	},
	{
		"wave": 24,
		"level": 6,
		"difficulty": 2,
		"behavior": 1,
		"enemy": [1,1,1,1],
		"delay": [0,0,0,0],
		"point": [0,4,10,14],
		"drop_item": [0,0,0,0]
	},
	{
		"wave": 25,
		"level": 7,
		"difficulty": 3,
		"behavior": 2,
		"enemy": [2,2,2],
		"delay": [0,0,0],
		"point": [1,8,11],
		"drop_item": [0,0,0]
	},
	{
		"wave": 25,
		"level": 7,
		"difficulty": 3,
		"behavior": 2,
		"enemy": [2,2,2,2],
		"delay": [0,0,0,0],
		"point": [0,4,10,14],
		"drop_item": [0,0,0,0]
	},
	{
		"wave": 26,
		"level": 7,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [2,2,2,2,3,3],
		"delay": [0,0,6000,6000,0,0],
		"point": [4,10,0,14,6,8],
		"drop_item": [0,0,0,0,0,0]
	},
	{
		"wave": 27,
		"level": 7,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [5,201],
		"delay": [0,0],
		"point": [7,7],
		"drop_item": [1,0]
	},
	{
		"wave": 28,
		"level": 7,
		"difficulty": 3,
		"behavior": 2,
		"enemy": [4,4,102,401],
		"delay": [0,0,0,0],
		"point": [4,14,7,9],
		"drop_item": [0,0,0,1]
	},
	{
		"wave": 29,
		"level": 8,
		"difficulty": 3,
		"behavior": 2,
		"enemy": [1,1,1,2,2,2,401],
		"delay": [0,0,0,0,0,0,0],
		"point": [1,6,13,3,8,11,7],
		"drop_item": [0,0,0,0,0,0,1]
	},
	{
		"wave": 30,
		"level": 8,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [3,3,3,3,301],
		"delay": [0,0,0,0,0],
		"point": [0,4,10,14,7],
		"drop_item": [0,0,0,0,0]
	},
	{
		"wave": 30,
		"level": 8,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [5,2,2],
		"delay": [0,3000,3000],
		"point": [7,6,8],
		"drop_item": [1,0,0]
	},
	{
		"wave": 31,
		"level": 8,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [2,2,2,2,2,102],
		"delay": [0,0,0,0,0,0],
		"point": [0,4,10,14,7,7],
		"drop_item": [0,0,0,0,0,0]
	},
	{
		"wave": 32,
		"level": 8,
		"difficulty": 3,
		"behavior": 2,
		"enemy": [4,4,3,3,102],
		"delay": [0,0,0,0,0],
		"point": [0,4,10,14,7],
		"drop_item": [0,0,0,0,0]
	},
	{
		"wave": 33,
		"level": 9,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [1,1,3,3,2,2],
		"delay": [0,0,0,0,5000,5000],
		"point": [1,13,3,11,6,8],
		"drop_item": [0,0,0,0,0,0]
	},
	{
		"wave": 34,
		"level": 9,
		"difficulty": 3,
		"behavior": 2,
		"enemy": [1,2,2,2,103,103],
		"delay": [0,0,0,0,0,0],
		"point": [5,4,9,14,6,8],
		"drop_item": [0,0,0,0,0,0]
	},
	{
		"wave": 35,
		"level": 9,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [1,1,1,3,4,4,401],
		"delay": [6000,6000,6000,0,0,0,0],
		"point": [4,5,14,9,0,10,7],
		"drop_item": [0,0,0,0,0,0,0]
	},
	{
		"wave": 36,
		"level": 9,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [1,2,2,2,2,3,3,401],
		"delay": [0,1000,2000,3000,4000,8000,8000,0],
		"point": [7,0,4,10,14,6,8,9],
		"drop_item": [1,0,0,0,0,0,0,1]
	},
	{
		"wave": 37,
		"level": 10,
		"difficulty": 3,
		"behavior": 1,
		"enemy": [5,2,2,2,2,401],
		"delay": [0,6000,6000,6000,6000,0],
		"point": [7,2,4,12,14,9],
		"drop_item": [1,0,0,0,0,0]
	},
	{
		"wave": 38,
		"level": 10,
		"difficulty": 4,
		"behavior": 2,
		"enemy": [1,1,1,1,2,2,301],
		"delay": [0,0,0,0,0,0,0],
		"point": [1,3,11,13,10,4,7],
		"drop_item": [0,1,0,0,0,0,0]
	},
	{
		"wave": 39,
		"level": 10,
		"difficulty": 3,
		"behavior": 2,
		"enemy": [5,1,401],
		"delay": [0,0,0],
		"point": [7,9,8],
		"drop_item": [1,0,0]
	},
	{
		"wave": 39,
		"level": 10,
		"difficulty": 4,
		"behavior": 2,
		"enemy": [1,1,4],
		"delay": [0,0,0],
		"point": [2,12,8],
		"drop_item": [0,0,1]
	},
	{
		"wave": 40,
		"level": 10,
		"difficulty": 4,
		"behavior": 1,
		"enemy": [1,1,2,2,3,3,201],
		"delay": [0,0,0,0,0,0,0],
		"point": [1,11,5,9,3,13,7],
		"drop_item": [0,0,0,0,0,0,0]
	},
	{
		"wave": 41,
		"level": 11,
		"difficulty": 4,
		"behavior": 1,
		"enemy": [3,3,3,3,3,3,103,103,103,103],
		"delay": [0,0,0,8000,8000,8000,0,0,0,0],
		"point": [0,9,10,4,5,14,2,6,8,12],
		"drop_item": [0,0,0,0,0,0,0,0,0,0]
	},
	{
		"wave": 42,
		"level": 11,
		"difficulty": 4,
		"behavior": 2,
		"enemy": [4,4,4,4,2,2,201],
		"delay": [0,0,0,0,0,0,0],
		"point": [0,4,10,14,2,12,7],
		"drop_item": [0,0,0,0,0,0,0]
	},
	{
		"wave": 43,
		"level": 11,
		"difficulty": 4,
		"behavior": 1,
		"enemy": [1,2,3,4,5],
		"delay": [0,0,0,0,0],
		"point": [0,10,14,4,7],
		"drop_item": [0,0,0,0,1]
	},
	{
		"wave": 44,
		"level": 11,
		"difficulty": 4,
		"behavior": 2,
		"enemy": [2,2,2,2,101,101,101,101],
		"delay": [0,0,0,0,0,0,0,0],
		"point": [1,3,11,13,2,12,5,9],
		"drop_item": [0,0,0,0,0,0,0,0]
	},
	{
		"wave": 44,
		"level": 11,
		"difficulty": 4,
		"behavior": 2,
		"enemy": [1,1,1],
		"delay": [0,0,0],
		"point": [3,8,13],
		"drop_item": [0,0,0]
	},
	{
		"wave": 45,
		"level": 12,
		"difficulty": 3,
		"behavior": 2,
		"enemy": [2,2,2,4,4,3,3,401],
		"delay": [0,0,0,0,0,7000,7000,0],
		"point": [4,9,14,2,12,0,10,7],
		"drop_item": [0,0,0,0,0,0,0,0]
	},
	{
		"wave": 46,
		"level": 12,
		"difficulty": 4,
		"behavior": 1,
		"enemy": [1,301,1,1,1,1],
		"delay": [0,0,0,0,0,0],
		"point": [2,7,12,4,9,14],
		"drop_item": [0,0,0,0,0,0]
	},
	{
		"wave": 47,
		"level": 12,
		"difficulty": 4,
		"behavior": 1,
		"enemy": [5,3,3,201,401],
		"delay": [0,0,0,0,0],
		"point": [7,4,14,7, 9],
		"drop_item": [1,0,0,0,1]
	},
	{
		"wave": 47,
		"level": 12,
		"difficulty": 4,
		"behavior": 1,
		"enemy": [5,2,2,2,2],
		"delay": [0,0,0,0,0],
		"point": [7,0,10,4,14],
		"drop_item": [1,0,0,0,0]
	},
	{
		"wave": 48,
		"level": 12,
		"difficulty": 4,
		"behavior": 2,
		"enemy": [5,103,103,103,1,1],
		"delay": [0,0,0,0,0,0],
		"point": [7,1,8,11,5,9],
		"drop_item": [1,0,0,0,0,0]
	}
];
config.enemies = [
	{
		"id": 1,
		"skin": "ani_enemyLightRobot01",
		"behavior": 0,
		"shield": 0,
		"can_enter": false,
		"damage": 3,
		"health": 8,
		"z": 0,
		"walk_speed": 0.2,
		"escape_speed": 0.4,
		"dash_speed": 0.8,
		"dash_damage": 4,
		"bullet_speed": 0,
		"bullet_damage": 0
	},
	{
		"id": 2,
		"skin": "ani_enemyFlyingRobot01",
		"behavior": 0,
		"shield": 0,
		"can_enter": true,
		"damage": 3,
		"health": 5,
		"z": 80,
		"walk_speed": 0.4,
		"escape_speed": 0.6,
		"dash_speed": 0,
		"dash_damage": 0,
		"bullet_speed": 0.7,
		"bullet_damage": 3
	},
	{
		"id": 3,
		"skin": "ani_enemyFastRobot01",
		"behavior": 0,
		"shield": 0,
		"can_enter": true,
		"damage": 3,
		"health": 8,
		"z": 0,
		"walk_speed": 0.25,
		"escape_speed": 0.5,
		"dash_speed": 1,
		"dash_damage": 5,
		"bullet_speed": 0,
		"bullet_damage": 0
	},
	{
		"id": 4,
		"skin": "ani_enemyChainRobot01",
		"behavior": 0,
		"shield": 0,
		"can_enter": true,
		"damage": 5,
		"health": 12,
		"z": 0,
		"walk_speed": 0.2,
		"escape_speed": 0.4,
		"dash_speed": 0,
		"dash_damage": 0,
		"bullet_speed": 0,
		"bullet_damage": 0
	},
	{
		"id": 5,
		"skin": "ani_enemyHeavyRobot01",
		"behavior": 0,
		"shield": 0,
		"can_enter": true,
		"damage": 8,
		"health": 15,
		"z": 0,
		"walk_speed": 0.15,
		"escape_speed": 0.3,
		"dash_speed": 0.7,
		"dash_damage": 8,
		"bullet_speed": 0.7,
		"bullet_damage": 6
	},
	{
		"id": 6,
		"skin": "ani_enemyFlyingRobot01",
		"behavior": 0,
		"shield": 0,
		"can_enter": true,
		"damage": 3,
		"health": 3,
		"z": 80,
		"walk_speed": 0.4,
		"escape_speed": 0.6,
		"dash_speed": 0,
		"dash_damage": 0,
		"bullet_speed": 0.7,
		"bullet_damage": 3
	}
];
config.trophies = {
	"areaClearTime": [420000,300000],
	"minigameCount": [10,30,50],
	"airComboCount": [10,50,100],
	"spAttackCount": [1,5,20],
	"waspAttackCount": [50,100,200],
	"techCount": [3,5,7]
};
config.hazards = [
	{
		"id": 101,
		"skin": "mc_hz_floor",
		"speed": 0,
		"damage": 5,
		"time_off": 5000,
		"time_alert": 1000,
		"time_on": 1000,
		"health": 0
	},
	{
		"id": 102,
		"skin": "mc_hz_floor",
		"speed": 0.15,
		"damage": 5,
		"time_off": 5000,
		"time_alert": 6000,
		"time_on": 2500,
		"health": 0
	},
	{
		"id": 103,
		"skin": "mc_hz_floor",
		"speed": 0,
		"damage": 5,
		"time_off": 2000,
		"time_alert": 1000,
		"time_on": 1000,
		"health": 0
	},
	{
		"id": 201,
		"skin": "mc_hz_trap",
		"speed": 0,
		"damage": 5,
		"time_off": 0,
		"time_alert": 2500,
		"time_on": 800,
		"health": 0
	},
	{
		"id": 301,
		"skin": "mc_hz_electric",
		"speed": 0,
		"damage": 8,
		"time_off": 5000,
		"time_alert": 2000,
		"time_on": 2000,
		"health": 0
	},
	{
		"id": 401,
		"skin": "ani_enemyBomb01",
		"speed": 0,
		"damage": 30,
		"time_off": 3000,
		"time_alert": 3000,
		"time_on": 0,
		"health": 7
	},
	{
		"id": 402,
		"skin": "ani_enemyBomb01",
		"speed": 0,
		"damage": 30,
		"time_off": 4000,
		"time_alert": 4000,
		"time_on": 0,
		"health": 7
	}
];
config.boss = [
	{
		"id": 1001,
		"skin": "ani_enemyLightRobot01",
		"can_enter": false,
		"damage": 4,
		"health": 40,
		"z": 0,
		"difficulty": [1,1,1,1,1],
		"dropItems": [0,1,0],
		"behaviorsSpecials": [1,1,1],
		"behaviorsSpecialsTimelife": [75,50,25],
		"behaviorsRepeats": [4,4,4],
		"walk_speed": 0.4,
		"escape_speed": 0.8,
		"dash_speed": 1.4,
		"dash_damage": 4,
		"special_damage": 6
	},
	{
		"id": 1002,
		"skin": "ani_enemyLightRobot01",
		"can_enter": false,
		"damage": 4,
		"health": 50,
		"z": 0,
		"difficulty": [2,2,2,2,2],
		"dropItems": [0,0,1,0],
		"behaviorsSpecials": [2,1,2,3],
		"behaviorsSpecialsTimelife": [80,60,40,20],
		"behaviorsRepeats": [4,4,6,1],
		"walk_speed": 0.4,
		"escape_speed": 0.8,
		"dash_speed": 1.4,
		"dash_damage": 4,
		"special_damage": 6
	},
	{
		"id": 1003,
		"skin": "ani_enemyLightRobot01",
		"can_enter": false,
		"damage": 4,
		"health": 65,
		"z": 0,
		"difficulty": [2,2,2,2,2],
		"dropItems": [0,1,0,1,0],
		"behaviorsSpecials": [2,3,4,3],
		"behaviorsSpecialsTimelife": [80,60,40,20],
		"behaviorsRepeats": [4,1,1,1],
		"walk_speed": 0.4,
		"escape_speed": 0.8,
		"dash_speed": 1.4,
		"dash_damage": 4,
		"special_damage": 6
	},
	{
		"id": 1004,
		"skin": "ani_enemyLightRobot01",
		"can_enter": false,
		"damage": 4,
		"health": 80,
		"z": 0,
		"difficulty": [3,3,3,3,3],
		"dropItems": [0,1,0,1,0],
		"behaviorsSpecials": [4,3,2,3],
		"behaviorsSpecialsTimelife": [80,60,40,20],
		"behaviorsRepeats": [1,1,4,1],
		"walk_speed": 0.4,
		"escape_speed": 0.8,
		"dash_speed": 1.4,
		"dash_damage": 4,
		"special_damage": 6
	}
];
