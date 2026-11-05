var GLOBAL_BULLET_TIME_DT = 0;
var GLOBAL_BULLET_TIME_MULTIPLIER = 0;
var GLOBAL_BULLET_TIME_ON = false;
var GLOBAL_SCORE_MULTIPLIER = 1;
var GLOBAL_SCORE_BOSS_BONUS = 0;
class Game extends Screen {
    constructor() {
        super();
    }

    enter(data) {

        GLOBAL_SCORE_MULTIPLIER = get_outfit_score_multiplier(data);
        GLOBAL_SCORE_BOSS_BONUS = SCORE_CONFIG.kill_bonus_init;

        SAVE_DATA.initSession();

        super.enter();

        physics.projection3D = true;

        this.interactiveChildren = false;

        soundmanager.fadeAndStop("music_menu", 0, 0.5);
        soundmanager.playAndFade("music_gameplay", 0, 1, 0.5, false);

        this.shakeDuration = 0;
        this.shakePixels = { x: 0, y: 0 };
        this.shakeOffset = { x: 0, y: 0 };
        this.screedWidth = 0;
        this.screedHeight = 0;

        this.backgroundlayer = PIXI.Sprite.from("./_background_background_x");
        this.backgroundlayer.anchor.x = 0.5;
        this.backgroundlayer.anchor.y = 0.99;
        this.backgroundlayer.scale.set(1.1);
        this.addChild(this.backgroundlayer);

        this.shadowlayer = new PIXI.Container();
        this.shadowTexture = new PIXI.RenderTexture(new PIXI.BaseRenderTexture(0, 0, PIXI.SCALE_MODES.LINEAR, 1));
        this.shadowSprite = new PIXI.Sprite(this.shadowTexture);
        this.shadowSprite.alpha = 0.15;
        this.addChild(this.shadowSprite);

        this.gamelayer = new PIXI.Container();
        this.addChild(this.gamelayer);

        /* this.bulletTimeVfx = new PIXI.filters.ColorMatrixFilter();
        this.gamelayer.filters = [this.bulletTimeVfx];
        this.backgroundlayer.filters = [this.bulletTimeVfx];
        this.shadowlayer.filters = [this.bulletTimeVfx]; */

        this.view = new AWClip(ui_ingame, "ui");
        this.addChild(this.view);

        this.bullettime = new BulletTime();

        this.camera = new Camera3D(0, 0, 0);
        this.camera.near = -400;
        this.camera.far = -1500;

        for (let j = 0; j < ENTITIES_POOL.length; j++) {
            superpool.preAllocate(ENTITIES_POOL[j].type, ENTITIES_POOL[j].qty);
        }

        //PROPS
        for (let i in PROPS_CONFIG) {
            let prop = null;
            if (PROPS_CONFIG[i].classtype.name === Player.name) {
                prop = superpool.get(PROPS_CONFIG[i].classtype, PROPS_CONFIG[i].classtype.name.toLowerCase());
                prop.setSuit(data);//SET the costume id
            } else {
                prop = superpool.get(PROPS_CONFIG[i].classtype);
            }
            prop.body.position.x = PROPS_CONFIG[i].x;
            prop.body.position.y = PROPS_CONFIG[i].y;
        }

        this.ingameUI = new IngameUI(this, this.view);
        this.ingameUI.init();

        if (DEBUG) {
            this.physicsDebug = create_physics_debug_view();
            this.addChild(this.physicsDebug);
        }
        reset_wave_manager();

        globalsignal.add((e, data) => {
            if (e === ge.BULLET_TIME) {
                console.log(data);
                soundmanager.play("bullet_time_start", true);
                soundmanager.play("bullet_time_loop", true);
                soundmanager.stop("bullet_time_end");
                soundmanager.fadeTo("music_gameplay", 0.2, data[0][1]);
                globalsignal.emit(ge.UPDATE_INGAME_UI, { bullet_time_on: true });
                GLOBAL_BULLET_TIME_ON = true;
                data[1].push(() => {
                    soundmanager.stop("bullet_time_loop");
                    soundmanager.play("bullet_time_end", true);
                    soundmanager.fadeTo("music_gameplay", 1, data[2][1]);
                });
                data[2].push(() => {
                    globalsignal.emit(ge.UPDATE_INGAME_UI, { bullet_time_off: true });
                    GLOBAL_BULLET_TIME_ON = false;
                });

                this.bullettime.set(data);
            } else if (e === ge.CN_OVERLAP_ACTIVE) {
                let player = superpool.get(Player, "player");
                if (player.isDead() == false && !screenmanager.hasAnInstance("tutorial") && !screenmanager.hasAnInstance("settingsgameplay")) {
                    screenmanager.change(SettingsGameplay);
                }
            } else if (e === ge.PLAYER_BALLOON_IMPACT) {
                player_balloon_damage();
            } else if (e === ge.SHOW_SUMMARY) {
                screenmanager.change(Summary);
            } else if (e === ge.PLAYER_LOSE) {
                soundmanager.stop("music_gameplay");
                soundmanager.play("fanfarria_lose");
            } else if (e === ge.SHAKE) {
                this.shakePixels.x = data.x;
                this.shakePixels.y = data.y;
                this.shakeDuration = data.duration;
            }
        });

        WAVE_MANAGER.play = true;
    }

    on_screen_resize(width, height) {

        this.screenWidth = width;
        this.screenHeight = height;

        this.alignAnchor(this.view, "top");
        this.alignAnchor(this.view, "top_right");
        this.alignAnchor(this.view, "top_left");
        this.alignAnchor(this.view, "transition", "center");

        this.backgroundlayer.x = width / 2;
        this.backgroundlayer.y = this.getChildByName("bottom").y;

        this.gamelayer.x = this.getChildByName("bottom").x;
        this.gamelayer.y = this.getChildByName("bottom").y;

        this.shadowlayer.x = this.getChildByName("bottom").x;
        this.shadowlayer.y = this.getChildByName("bottom").y;

        if (DEBUG) {
            this.physicsDebug.x = this.gamelayer.x;
            this.physicsDebug.y = this.gamelayer.y;
        }

        this.shadowTexture.baseTexture.width = width;
        this.shadowTexture.baseTexture.height = height;
    }

    update(dt) {

        GLOBAL_BULLET_TIME_DT = dt;
        //UI UPDATE (to avoid bullet time mod)
        this.ingameUI.update(dt);
        //TIME MODIFIER
        dt = this.bullettime.update(dt);
        GLOBAL_BULLET_TIME_MULTIPLIER = this.bullettime.multiplier;
        /* let saturationAmount = (this.bullettime.multiplier - 1);
        this.bulletTimeVfx.saturate(saturationAmount);
        if (saturationAmount >= 0) this.bulletTimeVfx.enabled = false;
        else if (saturationAmount < 0) this.bulletTimeVfx.enabled = true; */
        //console.log("filter enabled: " + this.bulletTimeVfx.enabled, saturationAmount);
        //MAIN LOGIC UPDATE
        update_waves(dt, WAVES, superpool);
        //ENTITIES UPDATE
        superpool.update();
        update_entities_logic(dt);
        //PHYSICS UPDATE
        physics.update(dt, GLOBAL_BULLET_TIME_DT);
        //CAMERA UPDATE
        this.shakeUpdate(dt);
        this.camera.update(dt);
        //TWEENS UPDATE
        tweenmanager.updateGroups(dt, "game");
        tweenmanager.updateGroups(GLOBAL_BULLET_TIME_DT, "player");
        //RENDER UPDATE
        if (DEBUG) {
            update_physics_debug_view(this.physicsDebug);//Physics debug draw
        }
        super.update(GLOBAL_BULLET_TIME_DT);

        app.renderer.render(this.shadowlayer, this.shadowTexture);
    }

    dispose() {
        super.dispose();
        this.bullettime.dispose();
        this.camera.dispose();
        this.ingameUI.dispose();

        tweenmanager.clear();

        superpool.dispose();//don't nullify, it's global
        physics.dispose();

        this.bullettime = null;
        this.camera = null;
        this.ingameUI = null;

        soundmanager.fadeAndStop("music_gameplay", 0, 0.5);

        soundmanager.stop("bullet_time_loop");

        globalsignal.clear();
    }

    shakeUpdate(dt) {
        if (this.shakeDuration > 0) {
            this.shakeDuration -= dt;
            if (this.shakeDuration <= 0) {
                this.shakeOffset.x = 0;
                this.shakeOffset.y = 0;
            } else {
                let shakeX = 0, shakeY = 0;
                if (this.shakeOffset.x === 0) {
                    shakeX = this.shakePixels.x * (Math.random() < 0.5) ? 1 : -1;
                    shakeY = this.shakePixels.y * (Math.random() < 0.5) ? 1 : -1;
                } else {
                    shakeX = this.shakePixels.x * -1;
                    shakeY = this.shakePixels.y * -1;
                }
                this.shakeOffset.x = shakeX * dt;
                this.shakeOffset.y = shakeY * dt;
            }
        }
        this.backgroundlayer.x = (this.screenWidth / 2) + this.shakeOffset.x;
        this.backgroundlayer.y = this.getChildByName("bottom").y + this.shakeOffset.y;

        this.gamelayer.x = this.getChildByName("bottom").x + this.shakeOffset.x;
        this.gamelayer.y = this.getChildByName("bottom").y + this.shakeOffset.y;

        this.shadowlayer.x = this.getChildByName("bottom").x + this.shakeOffset.x;
        this.shadowlayer.y = this.getChildByName("bottom").y + this.shakeOffset.y;
    }

    shake(duration = 1, x = 5, y = 5) {
        this.shakeDuration = duration;
        this.shakePixels.x = x;
        this.shakePixels.y = y;
    }

    enterStack() {
        super.enterStack();
        if (soundmanager.sound["hose_loop"].playing()) soundmanager.sound["hose_loop"].mute(true);
    }

    exitStack() {
        super.exitStack();
        if (soundmanager.sound["hose_loop"].playing() && !SAVE_DATA.sfx) soundmanager.sound["hose_loop"].mute(false);
    }
}