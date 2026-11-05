class Enemy1 extends BaseEnemy {
    constructor() {
        super();

        this.fsm.add(EnemyIdle);
        this.fsm.add(EnemyRun);
        this.fsm.add(EnemyShoot);
        this.fsm.add(EnemyDefeat);
    }

    setView() {
        this.view = get_asset(ASSET_ID.ENEMY_1);
    }

    setConfig() {

        this.config["wave"] = WAVE_MANAGER.globalCurrentWave;

        this.config["run_acceleration"] = ENEMY_1_CONFIG.run_acceleration;
        this.config["body_drag"] = ENEMY_1_CONFIG.body_drag;
        this.config["body_width"] = ENEMY_1_CONFIG.body_width;
        this.config["body_height"] = ENEMY_1_CONFIG.body_height;

        this.config["base_health"] = ENEMY_1_CONFIG.base_health;
        this.config["health_increase"] = ENEMY_1_CONFIG.health_increase;

        this.config["health"] = this.getHealth();
        this.config["max_health"] = this.config["health"];

        this.config["base_coins"] = ENEMY_1_CONFIG.base_coins;
        this.config["coins_increase"] = ENEMY_1_CONFIG.coins_increase;

        this.config["shoot_delay_min"] = ENEMY_1_CONFIG.shoot_delay_min;
        this.config["shoot_delay_max"] = ENEMY_1_CONFIG.shoot_delay_max;
        this.config["shoot_delay_decrease"] = ENEMY_1_CONFIG.shoot_delay_decrease;

        this.config["player_balloon_damage"] = ENEMY_1_CONFIG.player_balloon_damage;

        this.config["idle_delay"] = ENEMY_1_CONFIG.idle_delay;

        this.config["shadow_scale"] = ENEMY_1_CONFIG.shadow_scale;

        this.shootCooldown = ENEMY_1_CONFIG.weapon.cooldown;
    }

    reset() {
        this.setConfig();

        super.reset();

        add_shadow(this, this.config.shadow_scale);

        this.fsm.change(EnemyRun);
    }

    getCurrentWeapon() {
        return ENEMY_1_CONFIG.weapon;
    }

    dropArmor() {
        let shield = superpool.get(Enemy1Shield);
        shield.position.x = this.position.x;
        shield.position.y = this.position.y + 5;
        shield.scale = this.scale;
        shield.view.y = this.view.y;
        shield.drop();
    }

    playDefeatSfx() {
        soundmanager.playRandom("enemy1_defeat");
    }

    playShootSfx() {
        soundmanager.playRandom("enemy1_shoot");
    }
}