class EnemyBulletBalloon extends Bullet {
    constructor() {
        super();

        this.body = physics.createRectangle(
            this,
            COLLISION_CATEGORY.ENEMY_BULLET,
            COLLISION_CATEGORY.PLAYER,
            {
                width: 100, height: 100
            }
        );
        this.body.sensor = true;
        this.body.setEnable(false);

        this.view = get_asset(ASSET_ID.ENEMY_BULLET_BALLOON);
    }

    remove() {
        let waterimpact = superpool.get(BalloonImpact);
        waterimpact.position.x = this.position.x;
        waterimpact.position.y = this.position.y + 10;
        waterimpact.scale = this.scale;

        soundmanager.play("balloon_impact", true);
        this.removeTweens();
        super.remove();

        let screen = screenmanager.getTopScreen();
        screen.removeMC(this.view);
        screen.gamelayer.removeChild(this.container);
        screen.camera.remove(this);

        globalsignal.emit(ge.SHAKE, { duration: 0.3, x: 0, y: 600 });

    }

    update(dt) {
        super.update(dt);
    }

    fire(x, y, velocityX = 0, velocityY = 0, angle = 0) {
        super.fire(x, y, velocityX, velocityY, angle);

        this.body.setEnable(false);
        let time = 2000;
        this.view.y = -100;

        x += Math.random() * 5 - Math.random() * 5;
        y = -200 + (Math.random() * 5 - Math.random() * 5);

        let tween1 = createjs.Tween.get(this.body.position)
            .to({ x: x, y: -200 }, time);

        let tween2 = createjs.Tween.get(this.view)
            .to({ y: -600 }, time / 2, createjs.Ease.sineOut)
            .to({ y: -25 }, time / 2, createjs.Ease.sineIn)
            .call(() => {
                this.body.setEnable(true);
                this.body.velocity.y = 0;
            })
            .wait(50)
            .call(() => {
                this.removeTweens();
                this.kill = true;
            });

        tweenmanager.add("game", tween1);
        tweenmanager.add("game", tween2);

        soundmanager.playRandom("balloon_shot");
    }

    removeTweens() {
        createjs.Tween.removeTweens(this.body.position);
        createjs.Tween.removeTweens(this.view);
    }

    reset() {
        super.reset();

        let screen = screenmanager.getTopScreen();
        screen.addMC(this.view, this.container);
        screen.gamelayer.addChild(this.container);
        screen.camera.add(this);

        add_shadow(this, 0.5);
    }
}