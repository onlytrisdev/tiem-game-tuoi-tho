class PlayerBulletBalloon extends Bullet {
    constructor() {
        super();

        this.body = physics.createRectangle(
            this,
            COLLISION_CATEGORY.PLAYER_BULLET,
            COLLISION_CATEGORY.ENEMY,
            {
                width: 250, height: 250
            }
        );
        this.body.sensor = true;
        this.body.setEnable(false);
        this.body.bulletTime = false;

        this.view = get_asset(ASSET_ID.PLAYER_BULLET_BALLOON);

        //this.range = { x: 0, y: 0 };
    }

    remove() {
        let waterimpact = superpool.get(BalloonImpact);
        waterimpact.position.x = this.position.x;
        waterimpact.position.y = this.position.y + 10;
        waterimpact.scale = this.scale;

        soundmanager.play("bomb_explosion", true);
        this.removeTweens();
        super.remove();

        let screen = screenmanager.getTopScreen();
        screen.removeMC(this.view);
        screen.gamelayer.removeChild(this.container);
        screen.camera.remove(this);

        globalsignal.emit(ge.SHAKE, { duration: 0.3, x: 0, y: 600 });
    }

    /* setRange(x, y) {
        this.range.x = x;
        this.range.y = y;
    } */

    update(dt) {
        super.update(dt);
    }

    fire(x, y, velocityX = 0, velocityY = 0, angle = 0) {
        super.fire(x, y, velocityX, velocityY, angle);

        this.body.setEnable(false);
        let time = 1000;
        this.view.y = -100;

        y = -600 + (Math.random() * 5) - (Math.random() * 5);
        x = x;

        let player = superpool.get(Player, "player");
        let target = player.granadeTarget[player.granadeTarget.length - 1];
        //console.log("granade target: ", player.granadeTarget);
        player.granadeTarget.splice(player.granadeTarget.length - 1, 1);
        //console.log("granade target: ", player.granadeTarget);
        if (target && !target.defeated) {
            x = target.position.x;
            y = target.position.y + (Math.random() * 5) - (Math.random() * 5);
        }

        let speedX = 35, minSpeed = 20;
        let tween1 = createjs.Tween.get(this.body.position).to({ y: y }, time);
        tween1.addEventListener("change", (event) => {
            if (target && !target.defeated) {
                speedX -= 1;
                if (speedX < minSpeed) speedX = minSpeed;
                this.body.position.x += (target.position.x - this.body.position.x) / speedX;
            }
        });

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

        tweenmanager.add("player", tween1);
        tweenmanager.add("player", tween2);

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