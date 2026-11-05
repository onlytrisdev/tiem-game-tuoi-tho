//import { FsmState } from "../../../libs/fsm.js";
//import { reached_stopping_distance } from "../../misc/game_utils.js";
//import { EnemyIdle } from "./enemy_idle.js";

class EnemyRun extends FsmState {
    constructor(gameobject) {
        super(gameobject);
    }

    enter() {
    }

    update(dt) {

        this.gameobject.body.acceleration.x = this.gameobject.config.run_acceleration * this.gameobject.movedir;

        if (this.gameobject.movedir === -1) {
            this.gameobject.view.gotoAndStop("run_right");
        } else if (this.gameobject.movedir === 1) {
            this.gameobject.view.gotoAndStop("run_left");
        }

        if (reached_stopping_distance(this.gameobject.body.position, this.gameobject.endpoint, this.gameobject.body.velocity.x, this.gameobject.body.drag)) {
            if (this.gameobject.killAtEnd) {
                this.gameobject.kill = true;
                enemyKilled(this.gameobject.waveId);
            } else {
                this.gameobject.fsm.change(EnemyIdle);
            }
        }
    }
}