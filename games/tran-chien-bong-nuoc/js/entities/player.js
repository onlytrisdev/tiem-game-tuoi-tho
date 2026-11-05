//import { Fsm } from "../../libs/fsm.js";
//import { get_instance } from "../../libs/misc.js";
//import { ASSET_ID, get_asset } from "../config/assets.js";
//import { COLLISION_CATEGORY, PLAYER_CONFIG } from "../config/gameplay.js";
//import { physics, screenmanager } from "../main.js";
//import { PlayerIdle } from "../states/player/player_idle.js";
//import { PlayerRoll } from "../states/player/player_roll.js";
//import { PlayerRun } from "../states/player/player_run.js";
//import { Entity } from "./entity.js";

class Player extends Entity {
    constructor() {
        super();
        this.suit = 0;

        this.movedir = 0;

        this.shootFrame = 0;
        this.shootFrameTime = 0;
        this.shoot = false;
        this.shootCooldown = 0.1;
        this.shootDelay = 0;
        this.shootPressureMultiplier = 1;
        this.shootPressureIncrease = 0;
        this.shotPosition = undefined;
        this.shotSound = false;
        this.weaponDuration = 0;

        this.granadeTarget = [];

        this.throwPosition = undefined;
        this.throwWeapon = "";
        this.throwDelay = 0;

        this.weapon = "";

        this.comboCount = 1;

        this.config = {};

        this.setConfig();

        this.body = physics.createRectangle(
            this,
            COLLISION_CATEGORY.PLAYER,
            COLLISION_CATEGORY.PLAYER_WALL | COLLISION_CATEGORY.ENEMY_BULLET,
            {
                width: PLAYER_CONFIG.body_width,
                height: PLAYER_CONFIG.body_height,
                x: PLAYER_CONFIG.body_offset_x,
                y: PLAYER_CONFIG.body_offset_y,
            }
        );

        this.body.bulletTime = false;

        this.fsm = new Fsm(this);
        this.fsm.add(PlayerIdle);
        this.fsm.add(PlayerRun);
        this.fsm.add(PlayerRoll);
        this.fsm.add(PlayerThrow);
        this.fsm.add(PlayerLose);

        globalsignal.add(this.onGlobalSignal.bind(this));
    }

    onGlobalSignal(globalEvent, data) {
        switch (globalEvent) {
            case ge.ENEMY_HIT: this.onEnemyHit(); break;
            // case ...
        }
    }

    onEnemyHit() {
        SAVE_DATA.addScore(this.comboCount * GLOBAL_SCORE_MULTIPLIER);
        this.comboCount += SCORE_CONFIG.combo_hit;
        this.comboCount = Math.min(Math.max(this.comboCount, 1), SCORE_CONFIG.max_combo_value);
    }

    setConfig() {
        this.config["roll_delay"] = PLAYER_CONFIG.roll_delay;
        this.config["run_acceleration"] = PLAYER_CONFIG.run_acceleration;
        this.config["roll_velocity"] = PLAYER_CONFIG.roll_velocity;
        this.config["body_drag"] = PLAYER_CONFIG.body_drag;
        this.config["flip_torso"] = PLAYER_CONFIG.flip_torso;
        this.config["throw_delay"] = PLAYER_CONFIG.throw_delay;
        this.config["lose_delay"] = PLAYER_CONFIG.lose_delay;
        this.config["health"] = PLAYER_CONFIG.max_health;


        this.config["balloons"] = PLAYER_CONFIG.start_balloons;
    }

    reset() {
        super.reset();

        this.body.drag = this.config.body_drag;

        this.shootFrame = 0;
        this.shootFrameTime = 0;
        this.shoot = false;
        this.comboCount = 1;

        this.weaponDuration = 0;

        this.throwWeapon = "";

        add_shadow(this, PLAYER_CONFIG.shadow_scale);

        this.changeWeapon(PLAYER_CONFIG.weapons.slingshot);
    }

    update(dt) {
        dt = GLOBAL_BULLET_TIME_DT;
        //UPDATE LOGIC
        this.fsm.update(dt);
        //SHOT UPDATE

        let currentTorso = undefined;

        for (let i in PLAYER_CONFIG.weapons) {
            let torso = get_instance(this.view, "torso_" + i);
            if (torso) {
                torso.attribs.visible = false;
                if (i === this.weapon) {
                    currentTorso = torso;
                    torso.attribs.visible = true;
                }
            }
        }

        if (currentTorso) {
            this.shootFrameTime += dt;
            if (this.shootFrameTime >= ((currentTorso.totalFrames) / currentTorso.fps)) {
                this.shootFrameTime = 0;
            }
            this.shootFrame = Math.floor(this.shootFrameTime * currentTorso.fps);
            currentTorso.gotoAndStop(this.shootFrame);

            if (this.shootFrame > 0 && this.shotSound) {
                this.shotSound = false;
            }
            if (this.shootFrame === 0 && this.weapon === PLAYER_CONFIG.weapons.slingshot.id && !this.shotSound) {
                soundmanager.play("slingshot", false);
                this.shotSound = true;
            } else if (this.shootFrame === 0 && this.weapon === PLAYER_CONFIG.weapons.bucket.id && !this.shotSound) {
                soundmanager.playRandom("bucket_shot");
                this.shotSound = true;
            }
        }

        if (this.shootDelay >= 0 && !PLAYER_CONFIG.weapons[this.weapon].automatic) this.shoot = false;
        if (this.throwDelay >= 0) this.throw = false;

        let throwpoint = get_instance(this.view, "throwpoint");
        if (throwpoint) {
            let throwPos = throwpoint.toGlobal(new PIXI.Point());
            throwPos = this.container.parent.toLocal(throwPos);
            if (this.throwPosition === undefined) {
                this.throwPosition = { x: 0, y: 0 };
            }
            this.throwPosition.x = throwPos.x;
            this.throwPosition.y = throwPos.y;
        }
        if ((throwpoint && !this.throw && this.throwDelay <= 0)) {
            this.throw = true;
            this.throwDelay = 0.5;
        }

        if (currentTorso !== undefined) {
            currentTorso.attribs["scale.x"] = (this.view.scale.x < 0 && !this.config.flip_torso) ? -1 : 1;

            currentTorso.scale.x = currentTorso.attribs["scale.x"];//Little hack to avoid tick update delay

            let bulletpoint = get_instance(currentTorso, "bulletpoint");
            if (bulletpoint) {
                let shotPos = bulletpoint.toGlobal(new PIXI.Point());
                shotPos = this.container.parent.toLocal(shotPos);
                if (this.shotPosition === undefined) {
                    this.shotPosition = { x: 0, y: 0 };
                }
                this.shotPosition.x = shotPos.x;
                this.shotPosition.y = shotPos.y;
            }
            if ((bulletpoint && !this.shoot && this.shootDelay <= 0) ||
                (PLAYER_CONFIG.weapons[this.weapon].automatic && this.shootDelay <= 0)) {
                this.shoot = true;
                this.shootDelay = this.shootCooldown;
            }
        }
        this.shootDelay -= dt;
        this.throwDelay -= dt;
        this.shootPressureMultiplier += this.shootPressureIncrease * dt;
        if (this.shootPressureMultiplier > 1) this.shootPressureMultiplier = 1;
        //---------------------
        //-----WEAPON CHANGE----

        if (this.weaponDuration < 0 && this.weapon !== PLAYER_CONFIG.weapons.slingshot.id) {
            this.changeWeapon(PLAYER_CONFIG.weapons.slingshot);
        }
        this.weaponDuration -= dt;
        //----------------------
        update_flash(this.view, dt);
        super.update(dt);
    }

    getSuitName() {
        for (let i in OUTFITS) {
            if (OUTFITS[i].id === this.suit) return i;
        }
        return "";
    }

    cycleWeapon() {
        let weapons = [
            PLAYER_CONFIG.weapons.slingshot,
            PLAYER_CONFIG.weapons.bucket,
            PLAYER_CONFIG.weapons.hose
        ];
        let index = 0;
        for (let i = 0; i < weapons.length; i++) {
            if (weapons[i].id === this.weapon) {
                index = i + 1;
                break;
            }
        }
        if (index > weapons.length - 1) index = 0;
        this.changeWeapon(weapons[index], ITEMS_CONFIG[weapons[index].id + "_duration"]);
    }

    changeWeapon(weaponConfig, duration = 1) {
        let sameWeapon = this.weapon === weaponConfig.id;
        this.weapon = weaponConfig.id;

        if (!sameWeapon) {
            this.shootCooldown = weaponConfig.cooldown;
            this.shootFrame = 0;
            this.shootFrameTime = 0;
            this.shoot = false;
            this.shootDelay = 0;
            this.shootPressureIncrease = weaponConfig.pressure_increase;
            this.shootPressureMultiplier = weaponConfig.pressure_init;
        }
        if (weaponConfig.id !== PLAYER_CONFIG.weapons.slingshot.id) {
            this.weaponDuration = duration;
        }
        if (weaponConfig.id === PLAYER_CONFIG.weapons.hose.id) {
            soundmanager.play("hose_loop", false);
        } else {
            soundmanager.stop("hose_loop");
        }
    }

    changeThrowWeapon(weaponConfig) {
        this.throwWeapon = weaponConfig.id;
        this.throwDelay = 0;
        this.throw = false;
    }

    physicsCollide(body) {
        let isRolling = this.fsm.currentState === PlayerRoll.name;
        if (body.user.constructor.name === ItemBucket.name) {
            this.changeWeapon(PLAYER_CONFIG.weapons.bucket, ITEMS_CONFIG.bucket_duration);
            SAVE_DATA.setItemUse("bucket");
        } else if (body.user.constructor.name === ItemHose.name) {
            this.changeWeapon(PLAYER_CONFIG.weapons.hose, ITEMS_CONFIG.hose_duration);
            SAVE_DATA.setItemUse("hose");
        } else if (body.user.constructor.name === ItemBulletTime.name) {
            globalsignal.emit(ge.BULLET_TIME, ITEMS_CONFIG.bullettime);
        } else if (body.user.constructor.name === ItemBalloon.name) {
            this.addBalloons(1);
            SAVE_DATA.setItemUse("balloon");
        } else if (body.user.constructor.name === ItemLunchBox.name) {
            this.addHealth(1);
            SAVE_DATA.setItemUse("health");
        } else if ((body.user.constructor.name === Enemy1Bullet.name || body.user.constructor.name === EnemyBulletBalloon.name || body.user.constructor.name === EnemyBossBullet.name) && !isRolling) {
            console.log("damage: " + body.user.damage);
            this.addHealth(-body.user.damage);
            soundmanager.play("craig_lose");
            apply_flash(this.view);
        }
    }

    getCurrentWeapon() {
        return PLAYER_CONFIG.weapons[this.weapon];
    }

    getCurrentThrowWeapon() {
        return PLAYER_CONFIG.weapons[this.throwWeapon];
    }

    lose() {
        this.addHealth(-PLAYER_CONFIG.max_health / 3);//TODO: remove when damage is implemented
    }

    addBalloons(value) {
        this.config.balloons += value;
        this.config.balloons = Math.min(PLAYER_CONFIG.max_balloons, Math.max(this.config.balloons, 0));
    }

    addHealth(value) {

        if (value < 0) this.comboCount = 1;//reseting combo counter if player is damaged

        this.config.health += value;
        this.config.health = Math.min(PLAYER_CONFIG.max_health, Math.max(this.config.health, 0));

        globalsignal.emit(ge.UPDATE_INGAME_UI, { health: true });

        if (this.config.health <= 0) {
            this.fsm.change(PlayerLose);
        }
    }

    isDead() {
        return this.config["health"] == 0;
    }

    getPressure() {
        //console.log("pressure: " + this.shootPressureMultiplier);
        return this.shootPressureMultiplier;
    }

    setSuit(suitID) {
        this.suit = suitID;

        this.view = get_asset(ASSET_ID["CRAIG_" + this.suit]);

        let screen = screenmanager.getTopScreen();
        screen.addMC(this.view, this.container);
        screen.gamelayer.addChild(this.container);
        screen.camera.add(this);

        reset_flash(this.view);

        this.fsm.change(PlayerIdle);
    }

    dispose() {
        soundmanager.stop("hose_loop");

        this.granadeTarget.length = 0;
        this.granadeTarget = null;

        super.dispose();

        this.fsm.dispose();

        this.fsm = null;
        this.shotPosition = null;
        this.throwPosition = null;
    }

}