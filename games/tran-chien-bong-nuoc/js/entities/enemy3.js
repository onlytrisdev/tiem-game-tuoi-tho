class Enemy3 extends BaseEnemy {
    constructor() {
        super();

        this.fsm.add(EnemyIdle);
        this.fsm.add(EnemyRun);
        this.fsm.add(EnemyShoot);
        this.fsm.add(EnemyDefeat);
    }

    setView() {
        this.view = get_asset(ASSET_ID.ENEMY_3);
    }

    setConfig() {

        this.config["wave"] = WAVE_MANAGER.globalCurrentWave;

        this.config["run_acceleration"] = ENEMY_3_CONFIG.run_acceleration;
        this.config["body_drag"] = ENEMY_3_CONFIG.body_drag;
        this.config["body_width"] = ENEMY_3_CONFIG.body_width;
        this.config["body_height"] = ENEMY_3_CONFIG.body_height;

        this.config["base_health"] = ENEMY_3_CONFIG.base_health;
        this.config["health_increase"] = ENEMY_3_CONFIG.health_increase;

        this.config["health"] = this.getHealth();
        this.config["max_health"] = this.config["health"];

        this.config["base_coins"] = ENEMY_3_CONFIG.base_coins;
        this.config["coins_increase"] = ENEMY_3_CONFIG.coins_increase;

        this.config["shoot_delay_min"] = ENEMY_3_CONFIG.shoot_delay_min;
        this.config["shoot_delay_max"] = ENEMY_3_CONFIG.shoot_delay_max;
        this.config["shoot_delay_decrease"] = ENEMY_3_CONFIG.shoot_delay_decrease;

        this.config["player_balloon_damage"] = ENEMY_3_CONFIG.player_balloon_damage;

        this.config["idle_delay"] = ENEMY_3_CONFIG.idle_delay;

        this.config["shadow_scale"] = ENEMY_3_CONFIG.shadow_scale;

        this.shootCooldown = ENEMY_3_CONFIG.weapon.cooldown;
    }

    reset() {
        this.setConfig();

        super.reset();

        add_shadow(this, this.config.shadow_scale);

        this.fsm.change(EnemyRun);
    }

    getCurrentWeapon() {
        return ENEMY_3_CONFIG.weapon;
    }

    dropArmor() {
        let shield = superpool.get(Enemy3Shield);
        shield.position.x = this.position.x;
        shield.position.y = this.position.y + 5;
        shield.scale = this.scale;
        shield.view.y = this.view.y;
        shield.drop();
    }

    playDefeatSfx() {
        soundmanager.playRandom("enemy3_defeat");
    }

    playShootSfx() {
        soundmanager.playRandom("enemy3_shoot");
    }
}