class Shadow extends Entity {
    constructor() {
        super();
        this.target = null;
        this.view = get_asset(ASSET_ID.SHADOW);
        this.offset = { x: 0, y: 0 };
        this.maxOffsetY = -50;
    }

    reset() {
        super.reset();
        let screen = screenmanager.getTopScreen();
        screen.addMC(this.view, this.container);
        screen.shadowlayer.addChild(this.container);
        screen.camera.add(this);
        this.container.alpha = 1;
        this.offset.x = this.offset.y = 0;
    }

    update(dt) {
        if (this.target) {
            this.position.x = this.target.position.x + this.offset.x;
            this.position.y = this.target.position.y + this.offset.y;
            this.position.y = this.position.y < this.target.position.y + this.maxOffsetY ? this.target.position.y + this.maxOffsetY : this.position.y;
        }
        if (this.target.kill) {
            this.target = null;
            this.kill = true;
        }
        super.update(dt);
    }

    setScale(valueX = 1, valueY = 1) {
        this.view.scale.x = valueX;
        this.view.scale.y = valueY;
    }

    disappear(wait, delay) {
        let tween1 = createjs.Tween.get(this.container)
            .wait(wait)
            .to({ alpha: 0 }, delay)
            .call(() => {
                createjs.Tween.removeTweens(this.container);
            });
        tweenmanager.add("game", tween1);
    }
}