class Item extends Entity {
    constructor() {
        super();

        this.view = get_asset(ASSET_ID.ITEM);

        this.config = {};

        this.body = physics.createRectangle(
            this,
            COLLISION_CATEGORY.ITEM,
            COLLISION_CATEGORY.PLAYER,
            {
                width: ITEMS_CONFIG.body_width,
                height: ITEMS_CONFIG.body_height,
                y: -(ITEMS_CONFIG.body_height / 2)
            }
        );

        this.duration = 0;
        this.startKillCount = false;
    }

    reset() {
        this.removeTweens();
        this.body.setEnable(false);

        super.reset();

        let screen = screenmanager.getTopScreen();
        screen.addMC(this.view, this.container);
        screen.gamelayer.addChild(this.container);
        screen.camera.add(this);

        this.view.scale.set(0.1);

        this.duration = 0;
        this.startKillCount = false;

        add_shadow(this, ITEMS_CONFIG.shadow_scale);
    }

    drop(finalX, finalY) {
        soundmanager.play("item_drop");
        let time = 1500;
        this.view.scale.set(0.1);
        let tween1 = createjs.Tween.get(this.body.position)
            .to({ x: finalX, y: finalY }, time, createjs.Ease.sineInOut);

        let tween2 = createjs.Tween.get(this.view)
            .to({ y: -400 }, time / 2, createjs.Ease.sineInOut)
            .to({ y: -15 }, time / 2, createjs.Ease.sineIn)
            .call(() => {
                this.body.setEnable(true);
                this.startKillCount = true;
                this.duration = ITEMS_CONFIG.duration;
            })
            .to({ y: 0 }, time / 4, createjs.Ease.bounceOut)

        let tween3 = createjs.Tween.get(this.view.scale)
            .to({ x: 1, y: 1 }, time / 2, createjs.Ease.sineInOut);

        tweenmanager.add("ui", tween1);
        tweenmanager.add("ui", tween2);
        tweenmanager.add("ui", tween3);
    }


    update(dt) {
        super.update(dt);
        if (this.startKillCount) {
            this.duration -= dt;
            if (this.duration < 0) {
                this.startKillCount = false;
                this.body.setEnable(false);
                let shrinkTween = createjs.Tween.get(this.view.scale)
                    .to({ x: 0, y: 0 }, 500, createjs.Ease.sineIn)
                    .call(() => {
                        this.kill = true;
                        /* this.removeTweens(); */
                    });

                tweenmanager.add("ui", shrinkTween);
            }
        }
    }

    physicsCollide(body) {
        this.kill = true;
        soundmanager.play("item_pickup");
        this.removeTweens();
    }

    remove() {
        this.position.x = -10000;
        //this.position.y = -10000;
        let screen = screenmanager.getTopScreen();
        screen.removeMC(this.view);
        screen.gamelayer.removeChild(this.container);
        screen.camera.remove(this);
        this.body.setEnable(false);
        this.removeTweens();
    }

    removeTweens() {
        createjs.Tween.removeTweens(this.view.scale);
        createjs.Tween.removeTweens(this.view);
        createjs.Tween.removeTweens(this.body.position);
    }
}