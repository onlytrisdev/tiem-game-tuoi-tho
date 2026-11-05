class EnemyShoot extends FsmState {
    constructor(gameobject) {
        super(gameobject);

        this.delay = 0;
    }

    enter() {
        this.gameobject.view.gotoAndStop("shoot");
        this.delay = this.gameobject.config.idle_delay;
        this.gameobject.playShootSfx();
    }

    update(dt) {
        this.delay -= dt;
        if (this.delay < 0) this.gameobject.fsm.change(EnemyIdle);
    }
}