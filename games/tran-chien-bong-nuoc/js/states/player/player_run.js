//import { FsmState } from "../../../libs/fsm.js";
//import { get_instance } from "../../../libs/misc.js";
//import { custominput } from "../../main.js";
//import { PlayerIdle } from "./player_idle.js";

class PlayerRun extends FsmState {
    constructor(gameobject) {
        super(gameobject);
    }

    enter() {
        if (!this.gameobject.config.flip_torso) this.gameobject.view.scale.x = 1;
        this.gameobject.body.velocity.x = 0;
    }

    exit() {
        
    }

    update(dt) {

        if (custominput.right.isDown || custominput.left.isDown) {

            if (custominput.down.isDown) {
                if (custominput.right.isDown) {
                    custominput.dir.x = 1;
                }
                else {
                    custominput.dir.x = -1;
                }
                this.gameobject.fsm.change(PlayerRoll);
            }
            else if (custominput.right.isDown) {
                this.gameobject.view.gotoAndStop("run_right", true);
                this.gameobject.body.acceleration.x = this.gameobject.config.run_acceleration * 1;
            }
            else {
                this.gameobject.view.gotoAndStop("run_left", true);
                this.gameobject.body.acceleration.x = this.gameobject.config.run_acceleration * -1;
            }
        }
        else if (custominput.drag) {
            this.gameobject.body.acceleration.x = this.gameobject.config.run_acceleration * custominput.dir.x;
            if (custominput.dir.x === -1 && this.gameobject.view.getCurrentLabel() !== "run_left") {
                this.gameobject.view.gotoAndStop("run_left", true);
            } else if (custominput.dir.x === 1 && this.gameobject.view.getCurrentLabel() !== "run_right") {
                this.gameobject.view.gotoAndStop("run_right", true);
            }
        }
        else if (!custominput.drag) this.gameobject.fsm.change(PlayerIdle);
    }
}