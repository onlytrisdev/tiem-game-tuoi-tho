//import { FsmState } from "../../../libs/fsm.js";

class EnemyIdle extends FsmState {
    constructor(gameobject) {
        super(gameobject);

        this.shootDelay = 0;
    }

    enter() {
        this.gameobject.view.gotoAndStop("idle");
        this.shootDelay = this.gameobject.getShootDelay();
    }

    update(dt) {
        this.shootDelay -= dt;
        if (this.shootDelay < 0) this.gameobject.fsm.change(EnemyShoot);
    }
}