function config() { }
config.settings = {
	"SWIT_VERSION": "1.2.0",
	"MAX_DELTA_TIME": 50,
	"SAFE_AREA_WIDTH": 200,
	"APP_WIDTH": 1024,
	"APP_HEIGHT": 768,
	"APP_FPS": 40,
	"SOUND_PERCENT": 60,
	"ASSETS_PATH": "",
	"LOG": true,
	"USE_TILT": true,
	"USE_CHEATS": false,
	"CHECK_STRINGS": false,
	"SIZE_STRINGS_TYPE_1": "10,40",
	"SIZE_STRINGS_TYPE_2": "5,125",
	"SIZE_STRINGS_TYPE_3": "20,80",
	"SIZE_STRINGS_TYPE_4": "15,50",
	"SIZE_STRINGS_TYPE_5": "50,80",
	"RENDER_MODE": 0,
	"CONSOLE_MODE": 2,
	"WIDE_SCREEN": true,
	"RIGHT_TO_LEFT": false,
	"SHOW_SOCIAL_BUTTONS": false,
	"USE_ONLY_SOUNDJS": false,
	"keyMoveLeft": 37,
	"keyMoveRight": 39,
	"keyJump": 38,
	"keyDown": 40,
	"keyPunch": 90,
	"keyShoot": 88,
	"nornsForEndless": 30,
	"GAME_NAME_TRACKING": "Thor Boss Battles",
	"priceRegularUpgrade1": 750,
	"priceRegularUpgrade2": 1500,
	"priceLightningUpgrade1": 1000,
	"priceLightningUpgrade2": 2000,
	"priceHammerUpgrade1": 1200,
	"priceHammerUpgrade2": 2400,
	"buildVersion": "V1.05"
};
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
config.sounds = [
	{
		"id": "SND_UI_CLICK",
		"file": "snd_click",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0,
		"useOnSD": ""
	},
	{
		"id": "SND_UI_SHOW_POPUP",
		"file": "snd_ui_show_popup",
		"loops": 1,
		"vol": 0.9,
		"ios": 0,
		"instances": 3,
		"group": 0,
		"useOnSD": "SND_UI_CLICK"
	},
	{
		"id": "SND_ENTER",
		"file": "snd_enter",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2,
		"group": 0,
		"useOnSD": "SND_UI_CLICK"
	},
	{
		"id": "SND_BG_MAINMENU",
		"file": "mus_main_menu",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 1,
		"useOnSD": ""
	},
	{
		"id": "SND_BG_END_GAME",
		"file": "mus_end_game",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 1,
		"useOnSD": "SND_BG_WIN_LEVEL"
	},
	{
		"id": "SND_UI_BUY_UPGRADE",
		"file": "snd_buy_upgrade",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 1,
		"useOnSD": "SND_UI_CLICK"
	},
	{
		"id": "SND_CURRENCY",
		"file": "snd_currency",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 7,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_CURRENCY_BEST",
		"file": "snd_currency_best",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 7,
		"useOnSD": "SND_CURRENCY"
	},
	{
		"id": "SND_SCRIPT_TEXT",
		"file": "snd_script_text",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 7,
		"useOnSD": "SND_UI_CLICK"
	},
	{
		"id": "SND_NORN_STONE",
		"file": "snd_norn_stone",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 7,
		"useOnSD": ""
	},
	{
		"id": "SND_SWITCH_HIT",
		"file": "snd_switch_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 7,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_SWITCH_ACTIVATE",
		"file": "snd_switch_activate",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2,
		"group": 7,
		"useOnSD": ""
	},
	{
		"id": "SND_SWITCH_DOOR_OPEN",
		"file": "snd_switch_door_open",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 7,
		"useOnSD": ""
	},
	{
		"id": "SND_RELIC_GLASS_BROKE",
		"file": "snd_relic_glass_broke",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 7,
		"useOnSD": ""
	},
	{
		"id": "SND_RELIC_START",
		"file": "snd_relic_glow",
		"loops": 0,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 7,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_RELIC_TRAIL",
		"file": "snd_relic_ply_absorb",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 7,
		"useOnSD": ""
	},
	{
		"id": "SND_UI_FLAME",
		"file": "snd_clock_flame",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 7,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_ENDLEVEL_STARS",
		"file": "snd_scorecard_hammer",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 7,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_GO",
		"file": "snd_go",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_BG_TRY_AGAIN",
		"file": "mus_try_again",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_BG_WIN_LEVEL",
		"file": "mus_win_level",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_REGULAR_TILE_1",
		"file": "snd_regular_tile1",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_REGULAR_TILE_2",
		"file": "snd_regular_tile2",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 8,
		"useOnSD": "SND_REGULAR_TILE_1"
	},
	{
		"id": "SND_HARD_ROCK_BREAK",
		"file": "snd_hard_rock_break",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 8,
		"useOnSD": "SND_REGULAR_TILE_1"
	},
	{
		"id": "SND_GRAB_POWERUP",
		"file": "snd_grab_powerup",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": "SND_CURRENCY"
	},
	{
		"id": "SND_PLAY_HIT",
		"file": "snd_ply_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_PLY_DOWN_SMASH",
		"file": "snd_ply_down_smash",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_PLY_DEFLECT_BULLET",
		"file": "snd_ply_deflect_bullet",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_THOR_WIN",
		"file": "snd_ply_win",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_THOR_TELE_OUT",
		"file": "snd_ply_disappear",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_THOR_TELE_IN",
		"file": "snd_ply_appear",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_THOR_LIGHTNING",
		"file": "snd_ply_lightning",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_THOR_STRIKE1",
		"file": "snd_ply_thunder1",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 8,
		"useOnSD": "SND_THOR_STRIKE1"
	},
	{
		"id": "SND_THOR_STRIKE2",
		"file": "snd_ply_thunder2",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_THOR_STRIKE3",
		"file": "snd_ply_thunder3",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 8,
		"useOnSD": "SND_THOR_STRIKE1"
	},
	{
		"id": "SND_WARP_TELE_IN",
		"file": "snd_box_teleport_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_WARP_TELE_OUT",
		"file": "snd_box_teleport_out",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 8,
		"useOnSD": ""
	},
	{
		"id": "SND_EN_DEFEAT",
		"file": "snd_en_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2,
		"group": 9,
		"useOnSD": ""
	},
	{
		"id": "SND_EN_HIT",
		"file": "snd_en_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2,
		"group": 9,
		"useOnSD": "SND_PLAY_HIT"
	},
	{
		"id": "SND_EN_RANGE_SHOT",
		"file": "snd_en_range2_shot",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2,
		"group": 9,
		"useOnSD": ""
	},
	{
		"id": "SND_EN_RUN",
		"file": "snd_en_run",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 9,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_EN_SMASHED",
		"file": "snd_en_smashed",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 9,
		"useOnSD": "SND_EN_DEFEAT"
	},
	{
		"id": "SND_EN_KAMI_RUN",
		"file": "snd_en_kami_run",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 9,
		"useOnSD": "SND_EN_RUN"
	},
	{
		"id": "SND_EN_KAMI_EXP",
		"file": "snd_en_kami_exp",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 9,
		"useOnSD": "SND_EN_DEFEAT"
	},
	{
		"id": "SND_EN_SPAWNER_SPAWN",
		"file": "snd_en_kami2_split",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 9,
		"useOnSD": ""
	},
	{
		"id": "SND_EN_SPAWN_EXPLODE",
		"file": "snd_en_kami2_exp",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10,
		"group": 9,
		"useOnSD": "SND_EN_DEFEAT"
	},
	{
		"id": "SND_SPIKES_ON",
		"file": "snd_spikes_on",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 10,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_HAZ_RANGE_SHOT",
		"file": "snd_en_range_shot",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 10,
		"useOnSD": "SND_EN_RANGE_SHOT"
	},
	{
		"id": "SND_HAZ_SHOT_ALERT",
		"file": "snd_en_shooter_alert",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 10,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_HAZ_SHOT_BREAK",
		"file": "snd_boxes_break",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 10,
		"useOnSD": ""
	},
	{
		"id": "SND_HAZ_FALLING_HIT",
		"file": "snd_hazard_falling_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 10,
		"useOnSD": "SND_PLAY_HIT"
	},
	{
		"id": "SND_HAZ_ACID_ATTACK",
		"file": "snd_hazard_acid_floor",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 10,
		"useOnSD": ""
	},
	{
		"id": "SND_HAZ_FLAME_ATTACK",
		"file": "snd_hazard_flame",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 10,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_HAZ_DARKNESS",
		"file": "snd_hazard_darkness",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 10,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_BG_GAME_1",
		"file": "mus_gameplay1",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 11,
		"useOnSD": ""
	},
	{
		"id": "SND_LOKI_TELEPORT_IN",
		"file": "snd_loki_teleport_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 11,
		"useOnSD": ""
	},
	{
		"id": "SND_LOKI_TELEPORT_OUT",
		"file": "snd_loki_teleport_out",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 11,
		"useOnSD": ""
	},
	{
		"id": "SND_LOKI_INTRO_RELIC_IN",
		"file": "snd_loki_intro_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 11,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_LOKI_INTRO_RELIC_STAND",
		"file": "snd_loki_intro_charge",
		"loops": 0,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 11,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_LOKI_INTRO_RELIC_END",
		"file": "snd_loki_intro_action",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 11,
		"useOnSD": ""
	},
	{
		"id": "SND_BG_BOSS_1",
		"file": "mus_boss1",
		"loops": 0,
		"vol": 0.8,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": ""
	},
	{
		"id": "SND_LOKI_APPEAR",
		"file": "snd_loki_appear",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_LOKI_DEFEAT",
		"file": "snd_loki_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": ""
	},
	{
		"id": "SND_LOKI_POOF",
		"file": "snd_loki_poof",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_LOKI_HIT",
		"file": "snd_loki_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": "SND_PLAY_HIT"
	},
	{
		"id": "SND_LOKI_ANGRY",
		"file": "snd_loki_angry",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": ""
	},
	{
		"id": "SND_LOKI_TELEPORT_IN",
		"file": "snd_loki_teleport_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": ""
	},
	{
		"id": "SND_LOKI_TELEPORT_OUT",
		"file": "snd_loki_teleport_out",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": ""
	},
	{
		"id": "SND_LOKI_INVOCATION",
		"file": "snd_loki_invocation",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_LOKI_SHOT",
		"file": "snd_loki_shot",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 4,
		"group": 110,
		"useOnSD": ""
	},
	{
		"id": "SND_LOKI_TAUNT",
		"file": "snd_loki_taunt",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 110,
		"useOnSD": ""
	},
	{
		"id": "SND_BG_GAME_2",
		"file": "mus_gameplay2",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 12,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_TELEPORT_IN",
		"file": "snd_enchantress_teleport_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 12,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_TELEPORT_OUT",
		"file": "snd_enchantress_teleport_out",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 12,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_INTRO_RELIC_IN",
		"file": "snd_enchantress_intro_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 12,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_ENCHANTRESS_INTRO_RELIC_END",
		"file": "snd_enchantress_intro_action",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 12,
		"useOnSD": ""
	},
	{
		"id": "SND_BG_BOSS_2",
		"file": "mus_boss2",
		"loops": 0,
		"vol": 0.8,
		"ios": 1,
		"instances": 1,
		"group": 120,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_ATTACK1",
		"file": "snd_enchantress_attack1",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 120,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_ATTACK1_LASER",
		"file": "snd_enchantress_attack1_laser",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3,
		"group": 120,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_ENCHANTRESS_BULLET",
		"file": "snd_enchantress_bullet",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 120,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_DEFEAT",
		"file": "snd_enchantress_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 120,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_HIT",
		"file": "snd_enchantress_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 120,
		"useOnSD": "SND_PLAY_HIT"
	},
	{
		"id": "SND_ENCHANTRESS_INCANTATION",
		"file": "snd_enchantress_incantation",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 120,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_SUMMON",
		"file": "snd_enchantress_summon",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 120,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_TELEPORT_IN",
		"file": "snd_enchantress_teleport_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 120,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_TELEPORT_OUT",
		"file": "snd_enchantress_teleport_out",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 120,
		"useOnSD": ""
	},
	{
		"id": "SND_ENCHANTRESS_WIN",
		"file": "snd_enchantress_win",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 120,
		"useOnSD": ""
	},
	{
		"id": "SND_BG_GAME_3",
		"file": "mus_gameplay3",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 13,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_TELEPORT_IN",
		"file": "snd_hela_teleport_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 13,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_TELEPORT_OUT",
		"file": "snd_hela_teleport_out",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 13,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_INTRO_IN",
		"file": "snd_hela_intro_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 13,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_HELA_INTRO_END",
		"file": "snd_enchantress_intro_action",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 13,
		"useOnSD": ""
	},
	{
		"id": "SND_BG_BOSS_3",
		"file": "mus_boss3",
		"loops": 0,
		"vol": 0.8,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_TELEPORT_IN",
		"file": "snd_hela_teleport_in",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_TELEPORT_OUT",
		"file": "snd_hela_teleport_out",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_SHIELD_HIT",
		"file": "snd_hela_shield_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": "NULL"
	},
	{
		"id": "SND_HELA_ATTACK_1",
		"file": "snd_hela_attack1",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_HIT",
		"file": "snd_hela_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": "SND_PLAY_HIT"
	},
	{
		"id": "SND_TELEPORT_HOLES",
		"file": "snd_teleport_holes",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_MOVING_WALL_HIT",
		"file": "snd_moving_wall_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_MOVING_WALL_STOP",
		"file": "snd_moving_wall_stop",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_BOXES_HIT",
		"file": "snd_boxes_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_SMASHER_BREAK_UP",
		"file": "snd_smasher_break_up",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_SWORD_SPINNING",
		"file": "snd_sword_spinning",
		"loops": 0,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_SWORD_ATTACK",
		"file": "snd_sword_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_SMASHER_IMPACT",
		"file": "snd_smasher_impact",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_APPEAR",
		"file": "snd_hela_appear",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_DEFEAT",
		"file": "snd_hela_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_HELA_WIN",
		"file": "snd_hela_win",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 130,
		"useOnSD": ""
	},
	{
		"id": "SND_SWITCH_DOOR_OPEN",
		"file": "snd_switch_door_open",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1,
		"group": 14,
		"useOnSD": ""
	},
	{
		"id": "SND_BG_GAME_1",
		"file": "mus_gameplay1",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 1,
		"group": 14,
		"useOnSD": ""
	}
];
config.player = {
	"debugSpeed": 1.00000,
	"gravity": 0.00340,
	"elasticity": 0.00000,
	"friction": 0.26000,
	"slopeFriction": -0.50000,
	"maxVerletUpDisplace": 12.00000,
	"maxVerletDownDisplace": 16.00000,
	"maxVerletHorizontalDisplace": 18.00000,
	"walkSpeed": 0.08500,
	"airSpeed": 0.11000,
	"maxWalkFloor": 20.00000,
	"maxAirSpeed": 7.00000,
	"jumpInitSpeed": 1.95000,
	"damageHit": 10,
	"combos": [10,20,30],
	"comboReward": 10,
	"timeComboReward": [3,6,9,12,15]
};
config.enemies = [
	{
		"detectionRange": 400,
		"health": 40,
		"damage": 10.000,
		"delayBetween": 500.000,
		"waitTime": 2000.000,
		"shootRange": 0,
		"attacksInARow": 1,
		"shootSpeed": 0
	},
	{
		"detectionRange": 400,
		"health": 40,
		"damage": 10.000,
		"delayBetween": 500.000,
		"waitTime": 2000.000,
		"shootRange": 0,
		"attacksInARow": 1,
		"shootSpeed": 0
	},
	{
		"detectionRange": 400,
		"health": 40,
		"damage": 10.000,
		"delayBetween": 500.000,
		"waitTime": 2000.000,
		"shootRange": 500,
		"attacksInARow": 1,
		"shootSpeed": 0.4
	},
	{
		"detectionRange": 400,
		"health": 40,
		"damage": 10.000,
		"delayBetween": 500.000,
		"waitTime": 2000.000,
		"shootRange": 500,
		"attacksInARow": 1,
		"shootSpeed": 0.4
	},
	{
		"detectionRange": 500,
		"health": 100,
		"damage": 0.000,
		"delayBetween": 0.000,
		"waitTime": 0.000,
		"shootRange": 0.000,
		"attacksInARow": 0.000,
		"shootSpeed": 0.000
	},
	{
		"detectionRange": 0,
		"health": 1,
		"damage": 2.000,
		"delayBetween": 0.000,
		"waitTime": 0.000,
		"shootRange": 0.000,
		"attacksInARow": 0.000,
		"shootSpeed": 0.000
	},
	{
		"detectionRange": 600,
		"health": 40,
		"damage": 20.000,
		"delayBetween": 300.000,
		"waitTime": 1500.000,
		"shootRange": 1000,
		"attacksInARow": 1,
		"shootSpeed": 0.6
	},
	{
		"detectionRange": 700,
		"health": 80,
		"damage": 40.000,
		"delayBetween": 500.000,
		"waitTime": 4000.000,
		"shootRange": 2000,
		"attacksInARow": 1,
		"shootSpeed": 0.2
	}
];
config.staticHazards = [
	{
		"isStatic": false,
		"detectionRange": 0,
		"health": 0,
		"damage": 10.000,
		"delayBetween": 500.000,
		"waitTime": 0.000,
		"speedEffect": 0.000,
		"shootRange": 0,
		"attacksInARow": 0
	},
	{
		"isStatic": false,
		"detectionRange": 200,
		"health": 20,
		"damage": 10.000,
		"delayBetween": 500.000,
		"waitTime": 2000.000,
		"speedEffect": 0.000,
		"shootRange": 0,
		"attacksInARow": 0
	},
	{
		"isStatic": false,
		"detectionRange": 0,
		"health": 0,
		"damage": 0.010,
		"delayBetween": 500.000,
		"waitTime": 0.000,
		"speedEffect": -0.250,
		"shootRange": 0,
		"attacksInARow": 0
	},
	{
		"isStatic": false,
		"detectionRange": 200,
		"health": 0,
		"damage": 10.000,
		"delayBetween": 500.000,
		"waitTime": 2000.000,
		"speedEffect": 0.000,
		"shootRange": 0,
		"attacksInARow": 0
	},
	{
		"isStatic": false,
		"detectionRange": 200,
		"health": 30,
		"damage": 10.000,
		"delayBetween": 0.000,
		"waitTime": 500.000,
		"speedEffect": 0.000,
		"shootRange": 0,
		"attacksInARow": 0
	},
	{
		"isStatic": false,
		"detectionRange": 800,
		"health": 30,
		"damage": 10.000,
		"delayBetween": 1500.000,
		"waitTime": 1500.000,
		"speedEffect": 0.000,
		"shootRange": 500,
		"attacksInARow": 1
	},
	{
		"isStatic": false,
		"detectionRange": 400,
		"health": 30,
		"damage": 0.000,
		"delayBetween": 0.000,
		"waitTime": 1000.000,
		"speedEffect": 0.000,
		"shootRange": 0,
		"attacksInARow": 0
	},
	{
		"isStatic": false,
		"detectionRange": 400,
		"health": 30,
		"damage": 10.000,
		"delayBetween": 200.000,
		"waitTime": 2000.000,
		"speedEffect": 0.000,
		"shootRange": 500,
		"attacksInARow": 1
	},
	{
		"isStatic": false,
		"detectionRange": 0,
		"health": 10,
		"damage": 0.000,
		"delayBetween": 0.000,
		"waitTime": 0.000,
		"speedEffect": 0.000,
		"shootRange": 0,
		"attacksInARow": 0
	},
	{
		"isStatic": false,
		"detectionRange": 0,
		"health": 0,
		"damage": 5.000,
		"delayBetween": 500.000,
		"waitTime": 3000.000,
		"speedEffect": 0.000,
		"shootRange": 0,
		"attacksInARow": 0
	},
	{
		"isStatic": false,
		"detectionRange": 0,
		"health": 30,
		"damage": 15.000,
		"delayBetween": 500.000,
		"waitTime": 3000.000,
		"speedEffect": 0.000,
		"shootRange": 0,
		"attacksInARow": 0
	},
	{
		"isStatic": false,
		"detectionRange": 0,
		"health": 45,
		"damage": 15.000,
		"delayBetween": 500.000,
		"waitTime": 3000.000,
		"speedEffect": 0.000,
		"shootRange": 0,
		"attacksInARow": 0
	}
];
config.statModifiers = [
	{
		"proximityActivation": -1,
		"duration": 3000,
		"durationFactorUpgraded": 2,
		"effectFactorUpgraded": 2,
		"healthEffect": 0.000,
		"speedEffect": 0.000,
		"strengthEffect": 0.000,
		"radiusEffect": 0.000,
		"timeEffect": -5.000
	},
	{
		"proximityActivation": -1,
		"duration": 3000,
		"durationFactorUpgraded": 1.67,
		"effectFactorUpgraded": 0,
		"healthEffect": 0.000,
		"speedEffect": 0.000,
		"strengthEffect": 0.000,
		"radiusEffect": 0.000,
		"timeEffect": 0.000
	},
	{
		"proximityActivation": -1,
		"duration": 30000,
		"durationFactorUpgraded": 2,
		"effectFactorUpgraded": 2,
		"healthEffect": 0.000,
		"speedEffect": 0.000,
		"strengthEffect": 0.000,
		"radiusEffect": 150.000,
		"timeEffect": 0.000
	},
	{
		"proximityActivation": -1,
		"duration": 3000,
		"durationFactorUpgraded": 0,
		"effectFactorUpgraded": 1.67,
		"healthEffect": 0.010,
		"speedEffect": 0.000,
		"strengthEffect": 0.000,
		"radiusEffect": 0.000,
		"timeEffect": 0.000
	},
	{
		"proximityActivation": 200,
		"duration": 5000,
		"durationFactorUpgraded": 0,
		"effectFactorUpgraded": 0,
		"healthEffect": 0.000,
		"speedEffect": 0.000,
		"strengthEffect": -0.500,
		"radiusEffect": 0.000,
		"timeEffect": 0.000
	},
	{
		"proximityActivation": 200,
		"duration": 10000,
		"durationFactorUpgraded": 0,
		"effectFactorUpgraded": 0,
		"healthEffect": 0.000,
		"speedEffect": 0.000,
		"strengthEffect": 0.000,
		"radiusEffect": 0.000,
		"timeEffect": 0.000
	},
	{
		"proximityActivation": 200,
		"duration": 0,
		"durationFactorUpgraded": 0,
		"effectFactorUpgraded": 0,
		"healthEffect": -0.010,
		"speedEffect": -0.150,
		"strengthEffect": 0.000,
		"radiusEffect": 0.000,
		"timeEffect": 0.000
	}
];
config.levelIntro = [
	{
		"group": 1,
		"timeOnScreen": 3000,
		"textString": "STR_LEVEL_INTRO_1",
		"isPlayer": true
	},
	{
		"group": 2,
		"timeOnScreen": 3000,
		"textString": "STR_LEVEL_INTRO_2",
		"isPlayer": true
	},
	{
		"group": 2,
		"timeOnScreen": 3000,
		"textString": "STR_LEVEL_INTRO_3",
		"isPlayer": false
	}
];
config.mapsParams = [
	{
		"idLevel": 1,
		"relicSkin": "mcObjRelic01",
		"levelIntroGroup": 0,
		"difficulty": 0,
		"isEndless": false,
		"isBossFight": false,
		"mainSections": "none",
		"transitionSections": "none",
		"missionTime": 180000,
		"tileHealth": 10,
		"uruValue": 10,
		"uruGroupValue": 30,
		"offset": 1,
		"kRelics": 1.2,
		"kTime": 3,
		"e1": 5,
		"e2": 8.3
	},
	{
		"idLevel": 2,
		"relicSkin": "mcObjRelic02",
		"levelIntroGroup": -1,
		"difficulty": 0,
		"isEndless": false,
		"isBossFight": false,
		"mainSections": "none",
		"transitionSections": "none",
		"missionTime": 180000,
		"tileHealth": 10,
		"uruValue": 15,
		"uruGroupValue": 45,
		"offset": 1,
		"kRelics": 1.2,
		"kTime": 3,
		"e1": 5,
		"e2": 8.3
	},
	{
		"idLevel": 3,
		"relicSkin": "",
		"levelIntroGroup": -1,
		"difficulty": 0,
		"isEndless": false,
		"isBossFight": true,
		"mainSections": "a,b,c,d,e",
		"transitionSections": "f",
		"missionTime": 180000,
		"tileHealth": 10,
		"uruValue": 20,
		"uruGroupValue": 60,
		"offset": 1,
		"kRelics": 1.2,
		"kTime": 3,
		"e1": 5,
		"e2": 8.3
	},
	{
		"idLevel": 4,
		"relicSkin": "mcObjRelic03",
		"levelIntroGroup": -1,
		"difficulty": 0,
		"isEndless": false,
		"isBossFight": false,
		"mainSections": "none",
		"transitionSections": "none",
		"missionTime": 180000,
		"tileHealth": 10,
		"uruValue": 20,
		"uruGroupValue": 60,
		"offset": 1,
		"kRelics": 1.2,
		"kTime": 3,
		"e1": 5,
		"e2": 8.3
	},
	{
		"idLevel": 5,
		"relicSkin": "mcObjRelic04",
		"levelIntroGroup": -1,
		"difficulty": 0,
		"isEndless": false,
		"isBossFight": false,
		"mainSections": "none",
		"transitionSections": "none",
		"missionTime": 180000,
		"tileHealth": 10,
		"uruValue": 20,
		"uruGroupValue": 60,
		"offset": 1,
		"kRelics": 1.2,
		"kTime": 3,
		"e1": 5,
		"e2": 8.3
	},
	{
		"idLevel": 6,
		"relicSkin": "",
		"levelIntroGroup": -1,
		"difficulty": 0,
		"isEndless": false,
		"isBossFight": true,
		"mainSections": "a,b",
		"transitionSections": "none",
		"missionTime": 180000,
		"tileHealth": 10,
		"uruValue": 20,
		"uruGroupValue": 60,
		"offset": 1,
		"kRelics": 1.2,
		"kTime": 3,
		"e1": 5,
		"e2": 8.3
	},
	{
		"idLevel": 7,
		"relicSkin": "mcObjRelic05",
		"levelIntroGroup": -1,
		"difficulty": 0,
		"isEndless": false,
		"isBossFight": false,
		"mainSections": "none",
		"transitionSections": "none",
		"missionTime": 180000,
		"tileHealth": 10,
		"uruValue": 20,
		"uruGroupValue": 60,
		"offset": 1,
		"kRelics": 1.2,
		"kTime": 3,
		"e1": 5,
		"e2": 8.3
	},
	{
		"idLevel": 8,
		"relicSkin": "mcObjRelic06",
		"levelIntroGroup": -1,
		"difficulty": 0,
		"isEndless": false,
		"isBossFight": false,
		"mainSections": "none",
		"transitionSections": "none",
		"missionTime": 240000,
		"tileHealth": 10,
		"uruValue": 20,
		"uruGroupValue": 60,
		"offset": 1,
		"kRelics": 1.2,
		"kTime": 3,
		"e1": 5,
		"e2": 8.3
	},
	{
		"idLevel": 9,
		"relicSkin": "",
		"levelIntroGroup": -1,
		"difficulty": 0,
		"isEndless": false,
		"isBossFight": true,
		"mainSections": "none",
		"transitionSections": "none",
		"missionTime": 240000,
		"tileHealth": 10,
		"uruValue": 20,
		"uruGroupValue": 60,
		"offset": 1,
		"kRelics": 1.2,
		"kTime": 3,
		"e1": 5,
		"e2": 8.3
	},
	{
		"idLevel": 10,
		"relicSkin": "",
		"levelIntroGroup": -1,
		"difficulty": 0,
		"isEndless": true,
		"isBossFight": false,
		"mainSections": "none",
		"transitionSections": "none",
		"missionTime": -1,
		"tileHealth": 10,
		"uruValue": -1,
		"uruGroupValue": -1,
		"offset": -1,
		"kRelics": -1,
		"kTime": -1,
		"e1": -1,
		"e2": -1
	}
];
config.endlessRooms = [
	{
		"numIni": 2,
		"waves": 2,
		"enemyTypes": [0,1],
		"spawnChances": [0.9,0.1],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 2,
		"waves": 2,
		"enemyTypes": [0,1],
		"spawnChances": [0.5,0.5],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 2,
		"waves": 2,
		"enemyTypes": [0,1],
		"spawnChances": [0.5,0.5],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1
	},
	{
		"numIni": 2,
		"waves": 2,
		"enemyTypes": [0,1],
		"spawnChances": [0.5,0.5],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 3,
		"waves": 2,
		"enemyTypes": [0,1,2],
		"spawnChances": [0.4,0.4,0.2],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.03
	},
	{
		"numIni": 3,
		"waves": 3,
		"enemyTypes": [0,1,2],
		"spawnChances": [0.4,0.4,0.2],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 3,
		"waves": 3,
		"enemyTypes": [0,1,2],
		"spawnChances": [0.4,0.4,0.2],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.05
	},
	{
		"numIni": 3,
		"waves": 3,
		"enemyTypes": [0,1,2],
		"spawnChances": [0.4,0.4,0.2],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 3,
		"waves": 3,
		"enemyTypes": [0,1,6],
		"spawnChances": [0.4,0.4,0.2],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 3,
		"waves": 3,
		"enemyTypes": [0,1,6],
		"spawnChances": [0.4,0.4,0.2],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.1
	},
	{
		"numIni": 3,
		"waves": 4,
		"enemyTypes": [0,1,6],
		"spawnChances": [0.4,0.4,0.2],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 4,
		"enemyTypes": [0,1,6],
		"spawnChances": [0.4,0.4,0.2],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 4,
		"enemyTypes": [1,2,6],
		"spawnChances": [0.45,0.45,0.1],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.15
	},
	{
		"numIni": 4,
		"waves": 4,
		"enemyTypes": [1,2,6],
		"spawnChances": [0.45,0.45,0.1],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 4,
		"enemyTypes": [1,2,3],
		"spawnChances": [0.45,0.45,0.1],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.2
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,3],
		"spawnChances": [0.45,0.45,0.1],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,0],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.3
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,0],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,0],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.4
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,0],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,0],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,0],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,0],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,0],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,0],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": false,
		"alternusFactor": 0
	},
	{
		"numIni": 4,
		"waves": 5,
		"enemyTypes": [1,2,6,4],
		"spawnChances": [0.3,0.3,0.1,0.3],
		"increment": 1,
		"spawnAlternus": true,
		"alternusFactor": 1.5
	}
];
config.bullets = [
	{
		"skin": "aniFxBossBullet",
		"speed": 0.6,
		"damage": 10.000,
		"rotation": 0.000
	},
	{
		"skin": "aniFxBossShieldAttack",
		"speed": 0.8,
		"damage": 10.000,
		"rotation": -1.571
	},
	{
		"skin": "fx_attack02_bullet",
		"speed": 0.7,
		"damage": 10.000,
		"rotation": 0.000
	},
	{
		"skin": "chr_boss3_00_bullet",
		"speed": 0.8,
		"damage": 10.000,
		"rotation": 0.000
	}
];
config.achivementsMilestones = [
	{
		"bronze": 400,
		"silver": 600,
		"gold": 800.000,
		"epic": 1000.000
	},
	{
		"bronze": 1,
		"silver": 3,
		"gold": 5.000,
		"epic": 6.000
	},
	{
		"bronze": 1,
		"silver": 2,
		"gold": 3,
		"epic": 6
	},
	{
		"bronze": 5,
		"silver": 12,
		"gold": 18,
		"epic": 30
	},
	{
		"bronze": 5000,
		"silver": 7500,
		"gold": 10000,
		"epic": 20000
	}
];
config.bosses = [
	{
		"skin": "chr_boss1_00",
		"health": 60,
		"atkDelay": 3500.000,
		"cloneDelay": 500.000,
		"maxMinions": 3,
		"idBullet": 0,
		"movDelay": 0,
		"movSpeed": 0,
		"teleDelay": 0
	},
	{
		"skin": "chr_boss2_00",
		"health": 60,
		"atkDelay": 3500.000,
		"cloneDelay": 0.000,
		"maxMinions": 2,
		"idBullet": 2,
		"movDelay": 1500,
		"movSpeed": 1,
		"teleDelay": 1750
	},
	{
		"skin": "chr_boss3_00",
		"health": 40,
		"atkDelay": 2000.000,
		"cloneDelay": 0.000,
		"maxMinions": 0,
		"idBullet": 3,
		"movDelay": 10000,
		"movSpeed": 0,
		"teleDelay": 4000
	}
];
config.helaTraps = {
	"wallSpeed": 0.03,
	"pillarDelay": 2500,
	"roomSwitchDelay": 15000,
	"ringMinSpeed": 90,
	"ringMaxSpeed": 180,
	"ringReturnTime": 800,
	"ringExpandTime": 1200
};
