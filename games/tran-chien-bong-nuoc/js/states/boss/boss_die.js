class BossDie extends FsmState {
    constructor(gameobject) {
        super(gameobject);
    }

    enter() {
        this.gameobject.view.gotoAndStop("die");
        this.gameobject.body.setEnable(false);
        let tween1 = createjs.Tween.get(this.gameobject.container)
            .wait(1500)
            .to({ alpha: 0 }, 500)
            .call(() => {
                createjs.Tween.removeTweens(this.gameobject.container);
                this.gameobject.kill = true;
            });
        tweenmanager.add("game", tween1);

        this.gameobject.shadow.disappear(1500, 500);
    }
}