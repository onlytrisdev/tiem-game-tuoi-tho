function config() { }
config.settings = {
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
	"gravity": 9.8
};
config.sounds = [
	{
		"id": "MUS_MAIN_MENU",
		"file": "mus_menu",
		"loops": 0,
		"vol": 0.5,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "MUS_GAME_EXPLORATION",
		"file": "mus_exploration",
		"loops": 0,
		"vol": 0.5,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "MUS_MINIGAME_NINJA",
		"file": "mus_minigame_ninja",
		"loops": 0,
		"vol": 0.5,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "MUS_MINIGAME_RAINBOW",
		"file": "mus_minigame_rainbow",
		"loops": 0,
		"vol": 0.5,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "MUS_MINIGAME_SEWERS",
		"file": "mus_minigame_sewers",
		"loops": 0,
		"vol": 0.5,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "MUS_WIN_STING",
		"file": "mus_win_sting",
		"loops": 1,
		"vol": 0.5,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_CLICK",
		"file": "snd_click",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_CLICK_PLAY",
		"file": "snd_click_play",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_TUTORIAL_APPEAR",
		"file": "snd_tutorial_pop_up_message",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_LEVEL_COMPLETED",
		"file": "snd_level_complete",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_LEVEL_FAILED",
		"file": "snd_level_failed",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_UI_START",
		"file": "snd_ui_start",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_UI_TRIAL",
		"file": "snd_ui_trial",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_SCORECARD_STAR",
		"file": "snd_scorecard_star",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_DINNER_HORN",
		"file": "snd_dinner_horn",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_TREASURE",
		"file": "snd_treasure",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2,
		"group": 0
	},
	{
		"id": "SND_PLAYER_STEP_1",
		"file": "snd_ply_footstep1",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_PLAYER_STEP_2",
		"file": "snd_ply_footstep2",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_BALLOON_HIT",
		"file": "snd_balloon_hit_floor",
		"loops": 1,
		"vol": 0.4,
		"ios": 0,
		"instances": 5,
		"group": 0
	},
	{
		"id": "SND_BALLOON_HIT_PLAYER",
		"file": "snd_balloon_hit_player",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 5,
		"group": 0
	},
	{
		"id": "SND_BALLOON_THROW_BIG",
		"file": "snd_balloon_throw_big",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 10,
		"group": 0
	},
	{
		"id": "SND_BALLOON_THROW_MED",
		"file": "snd_balloon_throw_med",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 10,
		"group": 0
	},
	{
		"id": "SND_BALLOON_THROW_SMALL",
		"file": "snd_balloon_throw_small",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 10,
		"group": 0
	},
	{
		"id": "SND_GRENADE_APPEAR",
		"file": "snd_grenade_appear",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 10,
		"group": 0
	},
	{
		"id": "SND_GRENADE_EXPLOTION",
		"file": "snd_grenade_exp",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 10,
		"group": 0
	},
	{
		"id": "SND_GRENADE_HIT",
		"file": "snd_grenade_hit_floor",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 10,
		"group": 0
	},
	{
		"id": "SND_MINIGAME_BUBBLE_CLOCK",
		"file": "snd_bubble_clock",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 20,
		"group": 0
	},
	{
		"id": "SND_MINIGAME_BUBBLE_POP",
		"file": "snd_bubble_pop",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 20,
		"group": 0
	},
	{
		"id": "SND_MINIGAME_PIPE_MOVE",
		"file": "snd_pipe_move",
		"loops": 1,
		"vol": 0.3,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_MINIGAME_PIPE_COMPLETE",
		"file": "snd_pipe_path_complete",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_BUSH_DESTROY",
		"file": "snd_bush_destroy",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_CHIPS_APPEAR",
		"file": "snd_chips_appear",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_CLOCK_FREEZE",
		"file": "snd_clock_freeze",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_NPC_POOF",
		"file": "snd_npc_poof",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_PICKUP_CHIPS",
		"file": "snd_pickup_chips",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_PICKUP_THINGS",
		"file": "snd_pickup_things",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_PLAYER_ROLL",
		"file": "snd_player_roll",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_PLAYER_STAFF",
		"file": "snd_player_staff",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_GOAL_REACHED",
		"file": "snd_goal_reached",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_NINJA_SPECIAL",
		"file": "snd_ninja_special",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_SHURIKEN",
		"file": "snd_shuriken_throw",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 5,
		"group": 0
	},
	{
		"id": "SND_TARGET_APPEAR",
		"file": "snd_target_appear",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 5,
		"group": 0
	},
	{
		"id": "SND_TARGET_DESTROY",
		"file": "snd_target_destroy",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 5,
		"group": 0
	},
	{
		"id": "SND_TIME_RAN_OUT",
		"file": "snd_time_ran_out",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_WRONG_TARGET_DESTROY",
		"file": "snd_wrong_target_destroy",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_BRIDGE_FALL",
		"file": "snd_bridge_fall",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_RACCOON_DIG",
		"file": "snd_en_raccoon_dig",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_RACCOON_HIT",
		"file": "snd_en_raccoon_hit",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_PLAYER_HIT_BEES",
		"file": "snd_ply_hit_bees",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_PLAYER_HIT_RACCOON",
		"file": "snd_ply_hit_raccoon",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_RIVER_SWITCH",
		"file": "snd_river_switch",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0
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
config.player_exploration = {
	"speed_run": 0.075,
	"speed_walk": 0.05
};
config.persons = [
	{
		"id": 1,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_1_1",
		"dialogue_level_2": "DIAG_1_2",
		"dialogue_level_3": "DIAG_1_3"
	},
	{
		"id": 2,
		"minigame": "4",
		"dialogue_intro": "DIAG_2_0",
		"minigame_success": "DIAG_2_WIN_A,DIAG_2_WIN_B,DIAG_2_WIN_C",
		"minigame_fail": "DIAG_2_LOSE_A,DIAG_2_LOSE_B,DIAG_2_LOSE_C",
		"all_minigame_win_and_block": "DIAG_2_WIN_ALL",
		"dialogue_enter_rushmode": "DIAG_2_RUSH",
		"rushmode_success": "DIAG_2_RUSH_WIN",
		"dialogue_level_1": "DIAG_2_1",
		"dialogue_level_2": "DIAG_2_2",
		"dialogue_level_3": "DIAG_2_3"
	},
	{
		"id": 3,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_3_1",
		"dialogue_level_2": "DIAG_3_2",
		"dialogue_level_3": "DIAG_3_3"
	},
	{
		"id": 4,
		"minigame": "2",
		"dialogue_intro": "DIAG_4_0",
		"minigame_success": "DIAG_4_WIN_A,DIAG_4_WIN_B,DIAG_4_WIN_C",
		"minigame_fail": "DIAG_4_LOSE_A,DIAG_4_LOSE_B,DIAG_4_LOSE_C",
		"all_minigame_win_and_block": "DIAG_4_WIN_ALL",
		"dialogue_enter_rushmode": "DIAG_4_RUSH",
		"rushmode_success": "DIAG_4_RUSH_WIN",
		"dialogue_level_1": "DIAG_4_1",
		"dialogue_level_2": "DIAG_4_2",
		"dialogue_level_3": "DIAG_4_3"
	},
	{
		"id": 5,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_5_1",
		"dialogue_level_2": "DIAG_5_2",
		"dialogue_level_3": "DIAG_5_3"
	},
	{
		"id": 6,
		"minigame": "3",
		"dialogue_intro": "DIAG_6_0",
		"minigame_success": "DIAG_6_WIN_A,DIAG_6_WIN_B,DIAG_6_WIN_C",
		"minigame_fail": "DIAG_6_LOSE_A,DIAG_6_LOSE_B,DIAG_6_LOSE_C",
		"all_minigame_win_and_block": "DIAG_6_WIN_ALL",
		"dialogue_enter_rushmode": "DIAG_6_RUSH",
		"rushmode_success": "DIAG_6_RUSH_WIN",
		"dialogue_level_1": "DIAG_6_1",
		"dialogue_level_2": "DIAG_6_2",
		"dialogue_level_3": "DIAG_6_3"
	},
	{
		"id": 7,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_7_1",
		"dialogue_level_2": "DIAG_7_2",
		"dialogue_level_3": "DIAG_7_3"
	},
	{
		"id": 8,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_8_1",
		"dialogue_level_2": "DIAG_8_2",
		"dialogue_level_3": "DIAG_8_3"
	},
	{
		"id": 9,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "HINT_1,HINT_2,HINT_3,HINT_4,HINT_5,HINT_6,HINT_7,HINT_8,HINT_9,HINT_10,HINT_1,HINT_2,HINT_3,HINT_4",
		"dialogue_level_2": "HINT_1,HINT_2,HINT_3,HINT_4,HINT_5,HINT_6,HINT_7,HINT_8,HINT_9,HINT_10,HINT_1,HINT_2,HINT_3,HINT_4",
		"dialogue_level_3": "HINT_1,HINT_2,HINT_3,HINT_4,HINT_5,HINT_6,HINT_7,HINT_8,HINT_9,HINT_10,HINT_1,HINT_2,HINT_3,HINT_4"
	},
	{
		"id": 10,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_10",
		"dialogue_level_2": "",
		"dialogue_level_3": ""
	},
	{
		"id": 11,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_11",
		"dialogue_level_2": "",
		"dialogue_level_3": ""
	},
	{
		"id": 21,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_POWERUP",
		"dialogue_level_2": "",
		"dialogue_level_3": ""
	},
	{
		"id": 22,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_POWERUP",
		"dialogue_level_2": "",
		"dialogue_level_3": ""
	},
	{
		"id": 23,
		"minigame": "",
		"dialogue_intro": "",
		"minigame_success": "",
		"minigame_fail": "",
		"all_minigame_win_and_block": "",
		"dialogue_enter_rushmode": "",
		"rushmode_success": "",
		"dialogue_level_1": "DIAG_POWERUP",
		"dialogue_level_2": "",
		"dialogue_level_3": ""
	}
];
config.game_exploration = {
	"secondsPerMinute": 3,
	"timeInitDay": 180,
	"timeEndDay": 420,
	"timePerMinigameSuccess": 60,
	"timePerMinigameFail": 120,
	"levelsOpenArea1": 3,
	"levelsOpenArea2": 3,
	"timeFreezy": 10000,
	"endGameMinDays": 10,
	"endGameMinCollectibles": 8,
	"raccoon_stand": 2000,
	"raccoon_walk": 6000
};
