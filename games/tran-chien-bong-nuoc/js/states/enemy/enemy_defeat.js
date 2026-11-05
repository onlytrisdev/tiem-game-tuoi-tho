//import { FsmState } from "../../../libs/fsm.js";

class EnemyDefeat extends FsmState {
    constructor(gameobject) {
        super(gameobject);
        this.exitpoint = { x: 0, y: 0 };
    }

    enter() {
        this.gameobject.body.setEnable(false);
        let range = { x1: this.gameobject.startpoint.x, x2: this.gameobject.startpoint.x * -1 };
        let shortestX = -999999;
        for (let i in range) {
            let distanceX = Math.abs(range[i] - this.gameobject.body.position.x);
            if (shortestX === -999999 || shortestX > distanceX) {
                shortestX = distanceX;
                if (range[i] < 0) this.gameobject.movedir = -1;
                else this.gameobject.movedir = 1;
                this.exitpoint.x = range[i];
            }
        }
        if (this.gameobject.movedir === -1) {
            this.gameobject.view.gotoAndStop("defeat_left");
        } else {
            this.gameobject.view.gotoAndStop("defeat_right");
        }

        this.gameobject.playDefeatSfx();
    }

    update(dt) {
        this.gameobject.body.acceleration.x = this.gameobject.config.run_acceleration * this.gameobject.movedir;

        if (reached_stopping_distance(this.gameobject.body.position, this.exitpoint, this.gameobject.body.velocity.x, this.gameobject.body.drag)) {
            this.gameobject.kill = true;
        }
    }
}