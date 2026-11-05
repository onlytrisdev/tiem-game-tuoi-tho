class UICoin extends Vfx {
    constructor() {
        super();

        this.view = get_asset(ASSET_ID.UI_COIN);
    }

    to(fromX, fromY, toX, toY, distanceFromCenter, callback = undefined) {
        let distanceY = Math.abs(fromY - toY);
        let time = 700;
        let timescale = 1 - (distanceY / time);
        let halfTime = time / 2;
        //console.log(timescale);
        let offsetX = 0;
        if (distanceFromCenter > 0) {
            offsetX = 70 + (Math.random() * 50);
        } else if (distanceFromCenter < 0) {
            offsetX = -(70 + (Math.random() * 50));
        }
        let waitRandom = (Math.random() < 0.5) ? 0 : Math.random() * 300;
        this.view.x = fromX;
        this.view.y = fromY;
        this.view.scale.set(0);
        let tween1 = createjs.Tween.get(this.view)
            .wait(waitRandom)
            .to({ y: toY }, time, createjs.Ease.sineIn);
        tween1.call(() => {
            if (callback) callback();
            this.kill = true;
            createjs.Tween.removeTweens(this.view);
        });
        let tween2 = createjs.Tween.get(this.view)
            .wait(waitRandom)
            .to({ x: fromX + offsetX }, halfTime, createjs.Ease.sineInOut)
            .to({ x: toX }, halfTime, createjs.Ease.sineIn);

        let tween3 = createjs.Tween.get(this.view.scale)
            .wait(waitRandom)
            .to({ x: 1.2, y: 1.2 }, halfTime, createjs.Ease.sineInOut)
            .to({ x: 0.5, y: 0.5 }, halfTime, createjs.Ease.sineInOut);

        //tween1.timeScale = tween2.timeScale = tween3.timeScale = timescale;

        tweenmanager.add("ui", tween1);
        tweenmanager.add("ui", tween2);
        tweenmanager.add("ui", tween3);
    }

    reset() {
        super.reset();
    }
}