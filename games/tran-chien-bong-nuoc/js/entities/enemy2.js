class Enemy2 extends BaseEnemy {
    constructor() {
        super();

        this.fsm.add(EnemyIdle);
        this.fsm.add(EnemyRun);
        this.fsm.add(EnemyShoot);
        this.fsm.add(EnemyDefeat);
    }

    setView() {
        this.view = get_asset(ASSET_ID.ENEMY_2);
    }

    setConfig() {

        this.config["wave"] = WAVE_MANAGER.globalCurrentWave;

        this.config["run_acceleration"] = ENEMY_2_CONFIG.run_acceleration;
        this.config["body_drag"] = ENEMY_2_CONFIG.body_drag;
        this.config["body_width"] = ENEMY_2_CONFIG.body_width;
        this.config["body_height"] = ENEMY_2_CONFIG.body_height;

        this.config["base_health"] = ENEMY_2_CONFIG.base_health;
        this.config["health_increase"] = ENEMY_2_CONFIG.health_increase;

        this.config["health"] = this.getHealth();
        this.config["max_health"] = this.config["health"];

        this.config["base_coins"] = ENEMY_2_CONFIG.base_coins;
        this.config["coins_increase"] = ENEMY_2_CONFIG.coins_increase;

        this.config["shoot_delay_min"] = ENEMY_2_CONFIG.shoot_delay_min;
        this.config["shoot_delay_max"] = ENEMY_2_CONFIG.shoot_delay_max;
        this.config["shoot_delay_decrease"] = ENEMY_2_CONFIG.shoot_delay_decrease;

        this.config["player_balloon_damage"] = ENEMY_2_CONFIG.player_balloon_damage;

        this.config["idle_delay"] = ENEMY_2_CONFIG.idle_delay;

        this.config["shadow_scale"] = ENEMY_2_CONFIG.shadow_scale;

        this.shootCooldown = ENEMY_2_CONFIG.weapon.cooldown;
    }

    reset() {
        this.setConfig();

        super.reset();

        add_shadow(this, this.config.shadow_scale);

        this.fsm.change(EnemyRun);
    }

    getCurrentWeapon() {
        return ENEMY_2_CONFIG.weapon;
    }

    dropArmor() {
        let shield = superpool.get(Enemy2Shield);
        shield.position.x = this.position.x;
        shield.position.y = this.position.y + 5;
        shield.scale = this.scale;
        shield.view.y = this.view.y;
        shield.drop();
    }

    playDefeatSfx() {
        soundmanager.playRandom("enemy2_defeat");
    }

    playShootSfx() {
        soundmanager.playRandom("enemy2_shoot");
    }
}