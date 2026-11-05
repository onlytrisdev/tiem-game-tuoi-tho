window.OUTFITS = {
    school: {
        id: 1,
        price: 0,
        score_multiplier: 1,
    },
    adventure: {
        id: 2,
        price: 100,
        score_multiplier: 1.5,
    },
    lab: {
        id: 3,
        price: 200,
        score_multiplier: 2,
    },
    super: {
        id: 4,
        price: 400,
        score_multiplier: 2.5,
    },
    raincoat: {
        id: 5,
        price: 800,
        score_multiplier: 3,
    },
    ace: {
        id: 6,
        price: 1600,
        score_multiplier: 4,
    },
};

window.ENTITIES_POOL = [
    { type: Shadow, qty: 200 },
    { type: Player, qty: 1 },
    { type: PlayerBulletSling, qty: 15 },
    { type: PlayerBulletBucket, qty: 80 },
    { type: PlayerBulletHose, qty: 80 },
    { type: PlayerBulletBalloon, qty: 5 },
    { type: Enemy1, qty: 10 },
    { type: Enemy2, qty: 10 },
    { type: Enemy3, qty: 10 },
    { type: Boss, qty: 1 },
    { type: PlayerWall, qty: 2 },
    { type: WaterImpact, qty: 200 },
    { type: BalloonImpact, qty: 10 },
    { type: UICoin, qty: 60 },
    { type: ItemBucket, qty: 1 },
    { type: ItemHose, qty: 1 },
    { type: ItemBalloon, qty: 1 },
    { type: ItemLunchBox, qty: 1 },
    { type: ItemBulletTime, qty: 1 },
    { type: Enemy1Shield, qty: 5 },
    { type: Enemy1Bullet, qty: 10 },
    { type: Enemy2Shield, qty: 5 },
    { type: Enemy3Shield, qty: 5 },
    { type: EnemyBulletBalloon, qty: 5 },
    { type: EnemyBossBullet, qty: 9 },
    { type: BossShotMuzzleflash, qty: 10 },
    { type: BossDust, qty: 1 },
];

window.COLLISION_CATEGORY = {
    //ALL: 0x0000,
    PLAYER: 0x0001,
    PLAYER_BULLET: 0x0002,
    PLAYER_WALL: 0x0004,
    ENEMY: 0x0008,
    ITEM: 0x0010,
    ENEMY_BULLET: 0x0016,
};

window.PHYSICS_CONFIG = {
    drag: 5
};

window.PROPS_CONFIG = {
    wall1: {
        classtype: PlayerWall,
        x: 280, y: -200,
    },
    wall2: {
        classtype: PlayerWall,
        x: -300, y: -200
    },
    player: {
        classtype: Player,
        x: 0, y: -200
    },
}

window.PLAYER_CONFIG = {
    roll_delay: 0.4,//0.5
    throw_delay: 0.5,
    lose_delay: 2,
    run_acceleration: 2000,
    roll_velocity: 1500,//2000

    body_width: 35,
    body_height: 40,
    body_offset_x: 0,
    body_offset_y: -20,
    body_drag: 1,

    max_health: 3,//test value

    flip_torso: false,

    max_balloons: 5,
    start_balloons: 2,

    shadow_scale: 0.7,

    weapons: {
        slingshot: {
            id: "slingshot",
            cooldown: 0.1,
            pressure_increase: 0,
            pressure_init: 1,
            bullets: [
                {
                    x: 0, y: 100,
                    type: PlayerBulletSling,
                    angle: 0,
                    angle_range: { left: -1, right: 1 },
                    speed_x: 0,
                    speed_y: -500,
                    damage: 1
                }
            ]
        },
        bucket: {
            id: "bucket",
            cooldown: 0.03,
            pressure_increase: 0,
            pressure_init: 1,
            bullets: [
                {
                    x: 3, y: 120,//60,
                    type: PlayerBulletBucket,
                    angle: 0,
                    angle_range: { left: -5, right: 5 },
                    speed_x: 0,
                    speed_y: -500,
                    damage: 1
                },
                {
                    x: 0, y: 110,//50,
                    type: PlayerBulletBucket,
                    angle: 0,
                    angle_range: { left: -5, right: 5 },
                    speed_x: 0,
                    speed_y: -500,
                    damage: 1
                },
                {
                    x: -3, y: 100,//40,
                    type: PlayerBulletBucket,
                    angle: 0,
                    angle_range: { left: -5, right: 5 },
                    speed_x: 0,
                    speed_y: -500,
                    damage: 1
                },
            ]
        },
        hose: {
            id: "hose",
            cooldown: 0.03,
            pressure_increase: 1.2,
            pressure_init: 0.3,
            bullets: [
                {
                    x: 0, y: 85,
                    type: PlayerBulletHose,
                    angle: 0,
                    angle_range: { left: -1.5, right: 1.5 },
                    speed_x: 0,
                    speed_y: -500,
                    damage: 1
                },
            ]
        },
        balloon: {
            id: "balloon",
            bullets: [
                {
                    x: 0, y: 80,
                    type: PlayerBulletBalloon,
                    range: { x: 600, y: 5000 }//distance range to autoaim the balloon
                }
            ],
        },
    }
};

window.ENEMY_1_CONFIG = {
    run_acceleration: 2000,

    base_health: 1,
    health_increase: 0.2,

    body_width: 110,
    body_height: 70,
    body_drag: 1,

    base_coins: 1,
    coins_increase: 0.30,

    shadow_scale: 0.7,

    shoot_delay_min: 0.2,//minimum value of shoot delay
    shoot_delay_max: 1,//max value of shoot delay
    shoot_delay_decrease: 0.02,//decrease value of shoot delay per wave

    player_balloon_damage: 100, //in percentage of boss' life

    idle_delay: 0.7,//delay after the attack anim is finished to return to idle (this parameter is animation tied only, should not be changed. Instead change shoot_delay_min, shoot_delay_max or shoot_delay_decrease)

    weapon: {
        cooldown: 0.2,
        bullets: [
            {
                x: 0, y: 40,
                type: Enemy1Bullet,
                angle_range: { left: -2, right: 2 },
                angle: 180,
                speed_x: 0,
                speed_y: -300,
                damage: 1
            }
        ]
    }
};

window.ENEMY_2_CONFIG = {
    run_acceleration: 2000,

    base_health: 1,
    health_increase: 0.2,

    body_width: 170,
    body_height: 70,
    body_drag: 1,

    base_coins: 1,
    coins_increase: 0.30,

    shadow_scale: 0.7,

    shoot_delay_min: 0.2,//minimum value of shoot delay
    shoot_delay_max: 1,//max value of shoot delay
    shoot_delay_decrease: 0.02,//decrease value of shoot delay per wave

    player_balloon_damage: 100, //in percentage of boss' life

    idle_delay: 0.7,//delay after the attack anim is finished to return to idle (this parameter is animation tied only, should not be changed. Instead change shoot_delay_min, shoot_delay_max or shoot_delay_decrease)

    weapon: {
        cooldown: 0.2,
        bullets: [
            {
                x: 0, y: 60,
                type: Enemy1Bullet,
                angle_range: { left: -2, right: 2 },
                angle: 180,
                speed_x: 0,
                speed_y: -300,
                damage: 1
            },
            {
                x: -15, y: 60,
                type: Enemy1Bullet,
                angle_range: { left: -2, right: 2 },
                angle: 150,
                speed_x: 0,
                speed_y: -300,
                damage: 1
            },
            {
                x: 15, y: 60,
                type: Enemy1Bullet,
                angle_range: { left: -2, right: 2 },
                angle: 210,
                speed_x: 0,
                speed_y: -300,
                damage: 1
            }
        ]
    }
};

window.ENEMY_3_CONFIG = {
    run_acceleration: 2000,

    base_health: 1,
    health_increase: 0.2,

    body_width: 130,
    body_height: 70,
    body_drag: 1,

    base_coins: 3,
    coins_increase: 0.30,

    shadow_scale: 0.7,

    shoot_delay_min: 0.3,//minimum value of shoot delay
    shoot_delay_max: 1,//max value of shoot delay
    shoot_delay_decrease: 0.02,//decrease value of shoot delay per wave

    idle_delay: 0.7,//delay after the attack anim is finished to return to idle (this parameter is animation tied only, should not be changed. Instead change shoot_delay_min, shoot_delay_max or shoot_delay_decrease)

    player_balloon_damage: 100, //in percentage of boss' life

    weapon: {
        cooldown: 0.1,
        bullets: [
            {
                x: 0, y: 60,
                type: EnemyBulletBalloon,
                angle_range: { left: -2, right: 2 },
                angle: 180,
                speed_x: 0,
                speed_y: -300,
                damage: 1
            }
        ]
    }
};

window.BOSS_CONFIG = {
    run_acceleration: 4000,

    base_health: 20,
    health_increase: 0.5,

    body_width: 100,
    body_height: 70,
    body_drag: 2,

    base_coins: 5,
    coins_increase: 0.5,

    shadow_scale: 2,

    shoot_delay_min: 0.1,//minimum value of shoot delay
    shoot_delay_max: 0.9,//max value of shoot delay
    shoot_delay_decrease: 0.03,//decrease value of shoot delay per wave

    idle_delay: 1,//delay after the attack anim is finished to return to idle (this parameter is animation tied only, should not be changed. Instead change shoot_delay_min, shoot_delay_max or shoot_delay_decrease)
    attack_seq_prob: 0.8,

    player_balloon_damage: 10, //in percentage of boss' life

    items_drop_qty: 3,

    weapon: {
        cooldown: 0.1,
        bullets: [
            {
                x: 0, y: 200,
                type: EnemyBossBullet,
                angle_range: { left: -1, right: 1 },
                angle: 180,
                speed_x: 0,
                speed_y: -350,
                damage: 1
            }
        ]
    }
};

window.END_POINT = {
    LEFT_OUT_1: {
        x: -500
    },
    RIGHT_OUT_1: {
        x: 500
    },
    CENTER_IN_1: {
        x: 0
    },
    LEFT_IN_1: {
        x: 200
    },
    RIGHT_IN_1: {
        x: -200
    },

    RIGHT_IN_ENEMY2: {
        x: -150
    },
};

window.SPAWN_POINT = {
    LEFT_TOP: { x: -500, y: -800 },
    LEFT_MIDDLE: { x: -500, y: -600 },
    LEFT_BOTTOM: { x: -500, y: -400 },

    RIGHT_TOP: { x: 500, y: -800 },
    RIGHT_MIDDLE: { x: 500, y: -600 },
    RIGHT_BOTTOM: { x: 500, y: -400 },

    MIDDLE_BOTTOM: { x: 0, y: -400 },

    MIDDLE_MIDDLE: { x: 0, y: -600 },

    MIDDLE_TOP: { x: 0, y: -800 },

    BOSS_TOP: { x: 0, y: -750 },

    BOSS_MIDDLE_RIGHT: { x: 100, y: -600 },

    BOSS_BOTTOM_LEFT: { x: -100, y: -400 },
}
//WIP
window.WAVES = {

    0: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 1, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 1, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 1, endpoint: END_POINT.LEFT_IN_1 }
        ],
        to: [1, 2]
    },

    1: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 1, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 1, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 1, endpoint: END_POINT.RIGHT_IN_1 }
        ],
        to: [2, 3]
    },

    2: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 1, endpoint: END_POINT.RIGHT_IN_1},
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 1, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 1, endpoint: END_POINT.LEFT_IN_1 }
        ],
        to: [3, 4]
    },

    3: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 1, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 1, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 1, endpoint: END_POINT.RIGHT_IN_1 }
        ],
        to: [4, 5]
    },

    4: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 1, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 1, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 1, endpoint: END_POINT.RIGHT_IN_1 }
        ],
        to: [5, 6]
    },

    5: {
        list: [
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 1, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 1, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 1, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [6, 7]
    },

    6: {
        list: [
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.9, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.9, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.9, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.9, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [7, 8]
    },

    7: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.9, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.9, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.9, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.9, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true }
        ],
        to: [8, 9]
    },

    8: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.9, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.9, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.9, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.9, endpoint: END_POINT.RIGHT_IN_1 }
        ],
        to: [9, 10]
    },

    9: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.9, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.9, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.9, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.9, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [10]
    },

    10: {
        list: [
            { type: Boss, spawnpoint: SPAWN_POINT.BOSS_TOP, delay: 0.9 },
        ],
        to: [11, 12, 13]
    },

    11: {
        list: [
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.8, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.8, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.8, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.8, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.8, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [11, 12, 13, 14]
    },

    12: {
        list: [
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.8, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.8, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.8, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.8, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.8, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true }
        ],
        to: [11, 13, 14, 15]
    },

    13: {
        list: [
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.8, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.8, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.8, endpoint: END_POINT.CENTER_IN_1},
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.8, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.8, endpoint: END_POINT.LEFT_IN_1 }
        ],
        to: [11, 14, 15, 16]
    },

    14: {
        list: [
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.8, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.8, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.8, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.8, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.8, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [11, 15, 16, 17]
    },

    15: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.8, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.8, endpoint: END_POINT.CENTER_IN_1},
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.8, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.8, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.8, endpoint: END_POINT.RIGHT_IN_1 }
        ],
        to: [10, 15, 16, 17, 18]
    },

    16: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.7, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.7, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.7, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.7, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.7, endpoint: END_POINT.LEFT_IN_1 }
        ],
        to: [15, 17, 18, 19]
    },

    17: {
        list: [
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.7, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.7, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.7, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.7, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.7, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [15, 18, 19, 20]
    },

    18: {
        list: [
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.7, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.7, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.7, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.7, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.7, endpoint: END_POINT.RIGHT_IN_1 }
        ],
        to: [15, 19, 20, 21]
    },

    19: {
        list: [
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.7, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.7, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.7, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.7, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.7, endpoint: END_POINT.LEFT_IN_1 }
        ],
        to: [15, 20, 21, 22]
    },

    20: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.6, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.6, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.6, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.6, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.6, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [10, 20, 21, 22, 23]
    },
    21: {
        list: [
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.6, endpoint: END_POINT.CENTER_IN_1 },
       		{ type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.6, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.6, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.6, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.6, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.6, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [20, 22, 23, 24]
    },
    22: {
        list: [
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.6, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.6, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.6, endpoint: END_POINT.CENTER_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.6, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.6, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.6, endpoint: END_POINT.LEFT_IN_1 }
        ],
        to: [20, 23, 24, 25]
    },
    23: {
        list: [
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.6, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
        	{ type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.6, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.6, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.6, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.6, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.6, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.6, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true }
        ],
        to: [20, 24, 25, 26]
    },
    24: {
        list: [
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.6, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.6, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.6, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.6, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.6, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.6, endpoint: END_POINT.LEFT_IN_1 }
        ],
        to: [20, 25, 26, 27]
    },
    25: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.5, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
        	{ type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.5, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.5, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [10, 20, 21, 26, 27]
    },
    26: {
        list: [
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
        	{ type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.5, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [20, 25, 26, 27]
    },
    27: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.5, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
        	{ type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.5, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true }
        ],
        to: [25, 26, 27, 28]
    },
    28: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.5, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.5, endpoint: END_POINT.CENTER_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.5, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.CENTER_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.5, endpoint: END_POINT.RIGHT_IN_1 }
        ],
        to: [25, 27, 28, 29]
    },
    29: {
        list: [
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.5, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.5, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true }
        ],
        to: [25, 28, 29, 30]
    },
    30: {
        list: [
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.LEFT_MIDDLE, delay: 0.5, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.LEFT_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_TOP, delay: 0.5, endpoint: END_POINT.RIGHT_OUT_1, kill_at_end: true },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_BOTTOM, delay: 0.5, endpoint: END_POINT.RIGHT_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, delay: 0.5, endpoint: END_POINT.LEFT_OUT_1, kill_at_end: true },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_TOP, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 }
        ],
        to: [10, 15, 20, 25]
    },
    //EXAMPLE OF DROP BY KILLS
    999: {
        drop: [//drop config based on number of kills
            {
                kills: 1,//kills needed to drop items
                ids: ["ItemBulletTime"]//items to be dropped, can be more than 1
            }
        ],
        list: [
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy3, spawnpoint: SPAWN_POINT.LEFT_BOTTOM, delay: 0.5, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy1, spawnpoint: SPAWN_POINT.RIGHT_MIDDLE, endpoint: END_POINT.CENTER_IN_1 },
            { type: Enemy2, spawnpoint: SPAWN_POINT.LEFT_TOP, endpoint: END_POINT.CENTER_IN_1 },
        ],
        to: [999]
    }
    //EXAMPLE OF DROP BY KILLS
};

window.ITEMS_CONFIG = {
    body_width: 100,
    body_height: 70,

    drop_start_x: -250,
    drop_end_x: 250,

    player_drop_width: 100,

    duration: 5,

    shadow_scale: 0.7,

    probabilities: {//sum of all should be 1 
        ItemBucket: 0.2,
        ItemHose: 0.2,
        ItemBalloon: 0.3,
        /* ItemLunchBox: 0.3, */
    },

    bullettime: [//bullet time's dt multiplier[0] and duration[1]
        [0.5, 1],
        [0.5, 3],
        [1, 1]
    ],
    bullettime_damage_mult: 3,//bullet time's damage multiplier

    bucket_duration: 5,//in seconds
    hose_duration: 5//in seconds
};

window.ENEMY_TYPE = [
    Enemy1,
    Enemy2,
    Enemy3,
    Boss
];

window.MAX_COINS_PER_DROP = 10;

window.SCORE_CONFIG = {
    kill_bonus_init: 0, //start value of kill bonus
    kill_bonus: 5, //adds this bonus points to every enemy kill after each boss is defeated
    kill_bonus_max: 25,//maximum value of the kill bonus accumulation
    combo_hit: 1,//combo count unit gained by hitting an enemy
    max_combo_value: 4,//maximum value of player's combo increase when he hits an enemy
}

window.CHEATS = {
    RICH: false,
    COINS: 0
};
