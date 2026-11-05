class PlayerLose extends FsmState {
    constructor(gameobject) {
        super(gameobject);
    }

    enter() {
        this.gameobject.view.gotoAndStop("death");
        this.gameobject.shoot = false;
        this.gameobject.shootFrame = 0;
        this.gameobject.throw = false;
        this.gameobject.body.setEnable(false);
        this.delay = this.gameobject.config.lose_delay;

        globalsignal.emit(ge.PLAYER_LOSE);

        soundmanager.stop("hose_loop");
    }

    update(dt) {
        this.delay -= dt;
        if (this.delay <= 0) {
            globalsignal.emit(ge.SHOW_SUMMARY);
            this.gameobject.fsm.clear();
        }
    }
}