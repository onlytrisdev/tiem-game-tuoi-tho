class IngameUI {
    constructor(screen, view) {

        this.view = view;
        this.screen = screen;
        this.player = null;

        this.bulletTime = false;

        this.view.getChildByLayerName("transition").gotoAndPlay("in");

        this.view.getChildByLayerName("transition").inFinished = () => {
            screen.interactiveChildren = true;
            SAVE_DATA.getSaveDataTutorial();
            console.log("TUTORIAL?", SAVE_DATA.tutorial);
            if (SAVE_DATA.tutorial === false) {
                screenmanager.change(Tutorial);
            }
        };

        globalsignal.add(this.onSignal.bind(this));

        screen.addButton("settings", this.view.getChildByLayerName("top_right").getChildByLayerName("settings"), () => {
            screenmanager.change(SettingsGameplay);
        });

        //orientationCheck.SetScene(SettingsGameplay);

        this.view.getChildByLayerName("top").gotoAndStop("notch");
    }

    init() {
        this.updateGold(SAVE_DATA.gold);
        setBitmapNumber(this.view.getChildByLayerName("top").getChildByLayerName("score").getChildByLayerName("score"), 0);
        this.view.getChildByLayerName("top").getChildByLayerName("score").getChildByLayerName("score").attribs.visible = false;

        let scoreText = new PIXI.Text(window.GetLocalisationTextWithNum("score", 0), { fontFamily: window.mainFont, fontSize: (window.language == "de" ? 26 : 32), fill: 0xffffff, align: 'center', stroke: 'black', strokeThickness: 6 });

        scoreText.anchor.set(0.9, 1);

        this.scoreText = scoreText;

        this.view.getChildByLayerName("top").getChildByLayerName("score").addChild(scoreText);

        //this.updateScore(0);
        //this.updateHighscore(SAVE_DATA.highscore);

        this.updateBulletTime();

        this.player = superpool.get(Player, Player.name.toLowerCase());

        this.updateHealth(true);
        this.createBossHealth();
    }

    onSignal(e, data) {
        switch (e) {
            case ge.DROP_COINS:
                let parent = this.view.getChildByLayerName("top");
                let goldCounter = parent.getChildByLayerName("gold");
                let coinItemsContainer = parent.getChildByLayerName("coinitems");
                let localPos = coinItemsContainer.toLocal(data.gp);
                soundmanager.playRandom("coin_drop");
                for (let i = 0; i < data.gold; i++) {
                    if (i < MAX_COINS_PER_DROP) {
                        let uicoin = superpool.get(UICoin);
                        let randomPoint = getRandomPointCircle(50);
                        coinItemsContainer.addChild(uicoin.view);
                        uicoin.to(localPos.x + randomPoint.x, localPos.y + randomPoint.y, goldCounter.x, goldCounter.y, randomPoint.x, () => {
                            SAVE_DATA.addLevelGold(1);
                            this.updateGold(SAVE_DATA.gold + SAVE_DATA.levelGold, "add");
                            SAVE_DATA.addCollectorGold(1);
                            soundmanager.play("coin_count", true);
                            
                        });
                    } else {
                        SAVE_DATA.addLevelGold(1);
                        SAVE_DATA.addCollectorGold(1);
                        this.updateGold(SAVE_DATA.gold + SAVE_DATA.levelGold, "add");
                    }
                }
                break;
            case ge.UPDATE_INGAME_UI:
                if (data["score"]) {
                    this.updateScore(data["score"]);
                    //console.log(data["score"])
                }
                if (data["bullet_time_on"]) {
                    this.bulletTime = true;
                    this.updateBulletTime(true);
                } else if (data["bullet_time_off"]) {
                    this.bulletTime = false;
                    this.updateBulletTime(false, true);
                }

                if (data["health"]) {
                    this.updateHealth();
                }

                if (data["boss_health"]) {
                    this.updateBossHealth(data.Hp, data.firstTime);
                }

                break;
            case ge.PAUSE:
                screenmanager.change(SettingsGameplay);
                break;
        }
    }

    updateGold(gold, anim = "") {
        if (anim.length > 0) {
            this.view.getChildByLayerName("top").getChildByLayerName("gold").gotoAndPlay(anim);
        }
        setBitmapNumber(this.view.getChildByLayerName("top").getChildByLayerName("gold").getChildByLayerName("gold"), gold);
        //achievements_manager.setAchievementProgress(achievements_id.the_collector, gold);
    }

    updateScore(score) {
        //console.log(score);
        this.scoreText.text = window.GetLocalisationTextWithNum("score", score);
       //setBitmapNumber(this.view.getChildByLayerName("top").getChildByLayerName("score").getChildByLayerName("score"), score);
        achievements_manager.setAchievementProgress(achievements_id.become_a_legend, score);
    }

    updateHighscore(hiscore) {
        setBitmapNumber(this.view.getChildByLayerName("top").getChildByLayerName("score").getChildByLayerName("hiscore"), hiscore);
    }

    updateBulletTime(start = false, end = false, value = -1) {
        let icon1 = this.view.getChildByLayerName("top_left").getChildByLayerName("bullet_time");
        let icon2 = icon1.getChildByLayerName("bullet_time");
        icon2.gotoAndStop("bullet_time");
        let icon1Label = icon1.getCurrentLabel();
        let bar = icon2.getChildByLayerName("bar");
        if (start && icon1Label !== "in") {
            icon1.gotoAndPlay("in");
        } else if (end && icon1Label !== "out") {
            icon1.gotoAndPlay("out");
            //console.log("play out");
        }
        if (value > 0) {
            bar.gotoAndStop(value);
        }

    }

    updateWeapon(label = "slingshot", value = 0) {
        let icon1 = this.view.getChildByLayerName("top_right").getChildByLayerName("weapon");
        let icon2 = icon1.getChildByLayerName("weapon");
        if (icon2.getCurrentLabel() !== label) {
            icon1.gotoAndPlay("change");
        }
        icon2.gotoAndStop(label);
        let bar = icon2.getChildByLayerName("bar");
        if (value > 0 && bar) {
            bar.gotoAndStop(value);
        }
    }

    updateBalloons(quantity = 0) {
        let icon1 = this.view.getChildByLayerName("top_right").getChildByLayerName("balloons");
        icon1.gotoAndStop(quantity);
    }

    updateHealth(firstTime = false) {
        let value = ((this.player.config.health / PLAYER_CONFIG.max_health)) * 100;

        let icon1 = this.view.getChildByLayerName("top_left").getChildByLayerName("health");
        let icon2 = icon1.getChildByLayerName("weapon");

        console.log("TRYINGTOCHANGE", icon1);

        icon1.gotoAndPlay("change", false, true);
        icon2.gotoAndStop("health", firstTime);

        let icon3 = icon2.getChildByLayerName("icon");

        if (icon3) {
            icon3.gotoAndStop("school");
            let texture = PIXI.Texture.from('assets/' + (value > 90 ? '1' : (value > 35 ? '2' : '3' )) + '.png');

            icon3.children[0].texture = texture;

            if (firstTime == true) {
                var data = icon2.config.layers[2].keys[4];
                data.transform[0] = 4;
            }
        }

        let bar = icon2.getChildByLayerName("bar");
        let lowFlash = null;
        if (bar) {
            bar.gotoAndStop(value);
            lowFlash = bar.getChildByLayerName("low");
        }

        if (lowFlash && value < 35) {
            lowFlash.attribs.visible = true;
        } else if (lowFlash && value >= 35) {
            lowFlash.attribs.visible = false;
        }
    }

    createBossHealth() {
        let bar = this.view.getChildByLayerName("top_left").getChildByLayerName("health");//.getChildByLayerName("weapon").getChildByLayerName("bar");
        this.bossHealth = new AWClip(bar.json, bar.classname, bar.level);
        this.bossHealth.y = bar.y + 330;
        this.bossHealth.x = -100;

        this.bossHealth.gotoAndPlay("idle");
        this.bossHealth.getChildByLayerName("weapon").gotoAndStop("health", true);
        this.bossHealth.getChildByLayerName("weapon").getChildByLayerName("bar").gotoAndStop(100, true);

        this.bossHealth.slideHandler = {
            shouldSlide: false,
            direction: true,
            minPos: -100,
            maxPos: bar.x,
            rate: 150
        };

        let icon = this.bossHealth.getChildByLayerName("weapon").getChildByLayerName("icon");

        icon.gotoAndStop("school");
        let texture = PIXI.Texture.from('assets/mech_health.png');

        icon.children[0].texture = texture;

        //if (firstTime == true) {
        //    var data = icon2.config.layers[2].keys[4];
        //    data.transform[0] = 4;
        //}

        this.view.getChildByLayerName("top_left").addChild(this.bossHealth);
    }

    startSlideBossHealth(slideOn) {
        if (this.bossHealth && this.bossHealth.slideHandler) {
            this.bossHealth.slideHandler.shouldSlide = true;
            this.bossHealth.slideHandler.direction = slideOn;
        }
    }

    slideBossHealth(dt) {
        if (!this.bossHealth.slideHandler || this.bossHealth.slideHandler.shouldSlide != true) return;

        let slideHandler = this.bossHealth.slideHandler;
        if (slideHandler.direction == true) {
            this.bossHealth.x += dt * slideHandler.rate;

            if (this.bossHealth.x >= slideHandler.maxPos) {
                this.bossHealth.x = slideHandler.maxPos;
                slideHandler.shouldSlide = false;
                slideHandler.direction = !slideHandler.direction;
            }
        }
        else {
            this.bossHealth.x -= dt * slideHandler.rate;

            if (this.bossHealth.x <= slideHandler.minPos) {
                this.bossHealth.x = slideHandler.minPos;
                slideHandler.shouldSlide = false;
                slideHandler.direction = !slideHandler.direction;
            }
        }
        
    }

    updateBossHealth(health, firstTime = false) {

        let icon1 = this.bossHealth;
        let icon2 = icon1.getChildByLayerName("weapon");

        this.bossHealth.gotoAndPlay(9, false, true);
        //console.log("TRYINGTOCHANGE", icon1)
        icon2.gotoAndStop("health", firstTime);

        //let icon3 = icon2.getChildByLayerName("icon");

        let bar = icon2.getChildByLayerName("bar");
        let lowFlash = null;
        if (bar) {
            bar.gotoAndStop(health, true);
            lowFlash = bar.getChildByLayerName("low");
        }

        if (lowFlash && health < 35) {
            lowFlash.attribs.visible = true;
        } else if (lowFlash && health >= 35) {
            lowFlash.attribs.visible = false;
        }

        if (firstTime == true) {
            this.startSlideBossHealth(true);
        }

        if (health <= 0) {
            this.startSlideBossHealth(false);
        }
    }

    update(dt) {
        tweenmanager.updateGroups(dt, "ui");
        this.view.update(dt);

        if (this.bulletTime) {
            this.updateBulletTime(false, false, ((1 - this.screen.bullettime.timeRatio) * 100));
        }

        if (this.player) {
            let weaponDuration = ITEMS_CONFIG[this.player.weapon + "_duration"];
            if (weaponDuration) {
                this.updateWeapon(this.player.weapon, (1 - (this.player.weaponDuration / weaponDuration)) * 100);
            } else {
                this.updateWeapon(this.player.weapon);
            }

            this.updateBalloons(this.player.config.balloons);
        }

        if (this.bossHealth) {
            this.slideBossHealth(dt);
            this.bossHealth.update(dt);
        }
    }

    dispose() {
        this.view = null;
    }
}
