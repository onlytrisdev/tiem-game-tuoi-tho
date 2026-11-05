//import { Fsm } from "../../libs/fsm.js";
//import { ASSET_ID, get_asset } from "../config/assets.js";
//import { COLLISION_CATEGORY } from "../config/gameplay.js";
//import { physics, screenmanager } from "../main.js";
//import { EnemyIdle } from "../states/enemy/enemy_idle.js";
//import { EnemyRun } from "../states/enemy/enemy_run.js";
//import { Entity } from "./entity.js";

class BaseEnemy extends Entity {
    constructor() {
        super();
        this.view = null;
        this.setView();

        this.endpoint = undefined;
        this.startpoint = undefined;

        this.killAtEnd = false;

        this.movedir = 0;

        this.config = {};

        this.damageDelay = 0.1;
        this.damageDelayCounter = 0;

        this.shoot = false;
        this.shootCooldown = 0.1;
        this.shootDelay = 0;
        this.shotPosition = undefined;

        this.defeated = false;

        this.waveId = "not_set";

        this.setConfig();

        this.bodyCreation();

        this.body.setEnable(false);

        this.fsm = new Fsm(this);
    }

    bodyCreation() {
        this.body = physics.createRectangle(
            this,
            COLLISION_CATEGORY.ENEMY,
            COLLISION_CATEGORY.PLAYER_BULLET,
            {
                width: this.config.body_width,
                height: this.config.body_height,
                y: -(this.config.body_height / 2)
            }
        );
    }

    setConfig() {

    }

    setView() {

    }

    getPressure() {
        return 1;
    }

    reset() {
        super.reset();

        this.body.setEnable(true);
        this.body.drag = this.config.body_drag;

        let screen = screenmanager.getTopScreen();
        screen.addMC(this.view, this.container);
        screen.gamelayer.addChild(this.container);
        screen.camera.add(this);

        this.damageDelayCounter = 0;
        this.defeated = false;

        this.shoot = false;
        this.shootDelay = 0;

        reset_flash(this.view);
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
        } */
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

        if (this.config.health <= 0) {
            this.die();
        }
    }

    update(dt) {
        //UPDATE LOGIC
        this.view.changeSpeed(GLOBAL_BULLET_TIME_MULTIPLIER);
        this.damageDelayCounter -= dt;
        this.fsm.update(dt);
        //SHOOT LOGIC
        if (this.shootDelay >= 0) this.shoot = false;
        let bulletpoint = get_instance(this.view, "bulletpoint");
        if (bulletpoint) {
            let shotPos = bulletpoint.toGlobal(new PIXI.Point());
            shotPos = this.container.parent.toLocal(shotPos);
            if (this.shotPosition === undefined) {
                this.shotPosition = { x: 0, y: 0 };
            }
            this.shotPosition.x = shotPos.x;
            this.shotPosition.y = shotPos.y;
        }
        if ((bulletpoint && !this.shoot && this.shootDelay <= 0)) {
            this.shoot = true;
            this.shootDelay = this.shootCooldown;
            this.onShot(dt);
        }
        this.shootDelay -= dt;
        //UPDATE VIEW
        update_flash(this.view, dt);

        super.update(dt);
    }

    remove() {
        let screen = screenmanager.getTopScreen();
        screen.removeMC(this.view);
        screen.gamelayer.removeChild(this.container);
        screen.camera.remove(this);
        this.body.setEnable(false);
        this.body.velocity.x = this.body.velocity.y = 0;
        this.body.acceleration.x = this.body.acceleration.y = 0;
    }

    getGold() {
        return Math.floor(this.config.base_coins + this.config.wave * this.config.coins_increase);//COINS DROP CALCULATION
    }

    getHealth() {
        return Math.floor(this.config.base_health * Math.pow(this.config.wave, this.config.health_increase));//HEALTH CALCULATION;
    }

    getShootDelay() {
        let newDelay = Number((this.config.shoot_delay_max / Math.pow(this.config.wave, this.config.shoot_delay_decrease)).toFixed(2));
        //console.log("new shoot delay: " + newDelay, this.config.wave);
        newDelay = Math.min(Math.max(newDelay, this.config.shoot_delay_min), this.config.shoot_delay_max);
        //console.log("new shoot delay: " + newDelay, this.config.wave);
        return newDelay;
    }

    die() {
        if (this.defeated) return;

        this.config.health = 0;
        this.defeated = true;
        this.fsm.change(EnemyDefeat);
        let gp = this.view.toGlobal(new PIXI.Point(0, -this.config.body_height));
        globalsignal.emit(ge.DROP_COINS, { gold: this.getGold(), gp: gp });
        this.dropArmor();
        drop_item(this.body.position);
        enemyKilled(this.waveId);
        checkWaveItemDrop(this.body.position);
        SAVE_DATA.addScore(GLOBAL_SCORE_BOSS_BONUS);
    }

    dropArmor() {

    }

    onShot() {

    }

    dispose() {
        this.startpoint = null;
        this.endpoint = null;
        super.dispose();
    }
}