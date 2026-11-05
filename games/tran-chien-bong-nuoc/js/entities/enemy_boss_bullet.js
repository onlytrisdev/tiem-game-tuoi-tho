class EnemyBossBullet extends Bullet {
    constructor() {
        super();

        this.body = physics.createRectangle(
            this,
            COLLISION_CATEGORY.ENEMY_BULLET,
            COLLISION_CATEGORY.PLAYER,
            {
                width: 20, height: 20
            }
        );
        this.body.sensor = true;
        this.body.setEnable(false);

        this.view = get_asset(ASSET_ID.ENEMY_1_BULLET);
        this.view.y = -80;
    }

    reset() {
        super.reset();

        let screen = screenmanager.getTopScreen();
        screen.addMC(this.view, this.container);
        screen.gamelayer.addChild(this.container);
        screen.camera.add(this);

        add_shadow(this, 0.3);
    }

    fire(x, y, velocityX = 0, velocityY = 0, angle = 0) {
        let time = Math.abs(700 / velocityY) * 1000; //distance / velocity
        let initY = -325;
        this.view.rotation = -angle * (Math.PI / 180);
        this.view.y = initY;
        let tween1 = createjs.Tween.get(this.view)
            .to({ y: -10 }, time, createjs.Ease.sineIn)
            .call(() => {
                this.removeTweens();
                this.kill = true;
            });

        tweenmanager.add("game", tween1);
        super.fire(x, y, velocityX, velocityY, angle);
    }

    remove() {
        let waterimpact = superpool.get(WaterImpact);
        waterimpact.position.x = this.position.x;
        waterimpact.position.y = this.position.y + 5;
        waterimpact.scale = this.scale;
        waterimpact.view.y = this.view.y;

        soundmanager.playRandom("water_impact", true);
        this.removeTweens();
        super.remove();

        let screen = screenmanager.getTopScreen();
        screen.removeMC(this.view);
        screen.gamelayer.removeChild(this.container);
        screen.camera.remove(this);
    }

    removeTweens() {
        createjs.Tween.removeTweens(this.view);
    }
}