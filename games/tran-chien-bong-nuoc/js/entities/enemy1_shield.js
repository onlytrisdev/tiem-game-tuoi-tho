class Enemy1Shield extends Vfx {
    constructor() {
        super();

        this.view = get_asset(ASSET_ID.ENEMY_1_SHIELD);
        this.shadow = null;
    }

    reset() {
        super.reset();
        this.view.alpha = 1;
        this.shadow = add_shadow(this);
    }

    drop() {
        let dir = 1, distanceX = 50 + (Math.random() * 100), time = 1000;
        if (Math.random() < 0.5) dir = -1;
        this.view.gotoAndPlay(0);

        distanceX = this.position.x + (distanceX * dir);

        console.log(this.position.x);

        let tween1 = createjs.Tween.get(this.position)
            .to({ x: distanceX }, time, createjs.Ease.linear);

        let tween2 = createjs.Tween.get(this.view)
            .wait(time)
            .to({ alpha: 0 }, 500)
            .call(() => {
                createjs.Tween.removeTweens(this.view);
                createjs.Tween.removeTweens(this.position);
                this.kill = true;
            });
        tweenmanager.add("game", tween1);
        tweenmanager.add("game", tween2);

        this.shadow.disappear(time, 500);
    }
}