class Boss extends BaseEnemy {
    constructor() {
        super();

        this.fsm.add(BossEnter);
        this.fsm.add(BossIdle);
        this.fsm.add(BossWalk);
        this.fsm.add(BossTurn);
        this.fsm.add(BossTurnReverse);
        this.fsm.add(BossDie);

        this.attackSeq = false;
        this.reachedAttackPoint = false;

        this.launcherAnim = "idle";
        this.overrideAnim = false;

        this.shadow = null;

        
    }

    setView() {
        this.view = get_asset(ASSET_ID.BOSS);
        this.view.onShowDust = this.onShowDust.bind(this);
    }

    bodyCreation() {
        this.body = physics.createRectangle(
            this,
            COLLISION_CATEGORY.ENEMY,
            COLLISION_CATEGORY.PLAYER_BULLET,
            {
                width: this.config.body_width,
                height: this.config.body_height,
                x: -125,
                y: -(this.config.body_height / 2)
            },
            {
                width: this.config.body_width,
                height: this.config.body_height,
                x: 125,
                y: -(this.config.body_height / 2)
            }
        );
    }

    setConfig() {

        this.config["wave"] = WAVE_MANAGER.globalCurrentWave;

        this.config["run_acceleration"] = BOSS_CONFIG.run_acceleration;
        this.config["body_drag"] = BOSS_CONFIG.body_drag;
        this.config["body_width"] = BOSS_CONFIG.body_width;
        this.config["body_height"] = BOSS_CONFIG.body_height;

        this.config["base_health"] = BOSS_CONFIG.base_health;
        this.config["health_increase"] = BOSS_CONFIG.health_increase;

        this.config["health"] = this.getHealth();
        this.config["max_health"] = this.config["health"];

        this.config["base_coins"] = BOSS_CONFIG.base_coins;
        this.config["coins_increase"] = BOSS_CONFIG.coins_increase;

        this.config["shoot_delay_min"] = BOSS_CONFIG.shoot_delay_min;
        this.config["shoot_delay_max"] = BOSS_CONFIG.shoot_delay_max;
        this.config["shoot_delay_decrease"] = BOSS_CONFIG.shoot_delay_decrease;

        this.config["player_balloon_damage"] = BOSS_CONFIG.player_balloon_damage;

        this.config["idle_delay"] = BOSS_CONFIG.idle_delay;

        this.config["attack_seq_prob"] = BOSS_CONFIG.attack_seq_prob;

        this.config["shadow_scale"] = BOSS_CONFIG.shadow_scale;

        this.shootCooldown = BOSS_CONFIG.weapon.cooldown;
    }

    reset() {
        this.setConfig();

        super.reset();

        this.launcherAnim = "idle";

        this.attackSeq = false;
        this.reachedAttackPoint = false;

        this.shadow = add_shadow(this, this.config.shadow_scale * 2, this.config.shadow_scale);

        this.fsm.change(BossEnter);
    }

    getCurrentWeapon() {
        return BOSS_CONFIG.weapon;
    }

    physicsCollide(body) {
        if (this.defeated) return;

        let damage = body.user.getDamage();//body.user.damage;
        let isHose = body.user.constructor.name === PlayerBulletHose.name;
        let isBomb = body.user.constructor.name === PlayerBulletBalloon.name;
        /* if (isHose && this.damageDelayCounter <= 0 && this.config.health > 0) {
            this.damageDelayCounter = this.damageDelay;
            this.config.health -= damage;
            globalsignal.emit(ge.ENEMY_HIT);
        }  */
        if (isHose) {
            this.config.health -= damage;
            globalsignal.emit(ge.ENEMY_HIT);
        } else if (!isHose && !isBomb) {
            this.config.health -= damage;
            globalsignal.emit(ge.ENEMY_HIT);
        } else if (isBomb) {
            this.config.health -= (this.config.max_health * this.config.player_balloon_damage) / 100;
            globalsignal.emit(ge.ENEMY_HIT);
        }
        apply_flash(this.view);

        globalsignal.emit(ge.UPDATE_INGAME_UI, { boss_health: true, Hp: (this.config.health / this.config.max_health) * 100, firstTime: false });

        if (this.config.health <= 0) {
            this.die();
        }
    }

    dropArmor() {

    }

    update(dt) {
        if (this.shoot) {
            soundmanager.playRandom("boss_shoot");
        }

        super.update(dt);
        this.updateLauncher(this.launcherAnim);
    }

    die() {
        if (this.defeated) return;

        this.config.health = 0;
        this.defeated = true;
        this.fsm.change(BossDie);
        let gp = this.view.toGlobal(new PIXI.Point(0, -this.config.body_height));
        globalsignal.emit(ge.DROP_COINS, { gold: this.getGold(), gp: gp });
        for (let i = 0; i < BOSS_CONFIG.items_drop_qty; i++) {
            drop_item(this.body.position);
        }
        enemyKilled(this.waveId);
        checkWaveItemDrop(this.body.position);
        GLOBAL_SCORE_BOSS_BONUS += SCORE_CONFIG.kill_bonus;
        GLOBAL_SCORE_BOSS_BONUS = Math.min(Math.max(GLOBAL_SCORE_BOSS_BONUS, 0), SCORE_CONFIG.kill_bonus_max);

        achievements_manager.setAchievementProgress(achievements_id.king_of_the_hill, 1);
    }

    updateLauncher(anim) {
        let launcher = this.view.getChildAt(0).getChildByLayerName("launcher");
        if (launcher && (launcher.getCurrentLabel() !== anim)) {
            //console.log(this.constructor.name + " :: launcher anim: " + anim);
            launcher.parent.update(0, true);
            launcher.gotoAndPlay(anim, true);
        }
    }

    onShot(dt) {
        let muzzleflash = superpool.get(BossShotMuzzleflash);
        muzzleflash.position.x = this.shotPosition.x + (this.body.velocity.x * dt);
        muzzleflash.position.y = this.position.y + 1;
        muzzleflash.scale = this.scale;
        muzzleflash.view.y = -325;
    }

    onShowDust() {
        let dust = superpool.get(BossDust);
        dust.position.x = this.position.x;
        dust.position.y = this.position.y + 1;
        dust.scale = this.scale;
    }
}