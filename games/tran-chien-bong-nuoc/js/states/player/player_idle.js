//import { FsmState } from "../../../libs/fsm.js";
//import { get_instance } from "../../../libs/misc.js";
//import { custominput } from "../../main.js";
//import { PlayerRoll } from "./player_roll.js";
//import { PlayerRun } from "./player_run.js";

class PlayerIdle extends FsmState {
    constructor(gameobject) {
        super(gameobject);
    }

    enter() {
        if (!this.gameobject.config.flip_torso) this.gameobject.view.scale.x = 1;
        this.gameobject.view.gotoAndStop("idle_shoot", true);

        //console.log("ENTER PLAYER IDLE");

        custominput.up.release = () => {
            if (this.gameobject.config.balloons > 0) {
                this.gameobject.fsm.change(PlayerThrow);
            }
        };
    }

    exit() {
    }

    update(dt) {

        if ((custominput.drag && custominput.dir.x != 0) || (custominput.right.isDown || custominput.left.isDown)) this.gameobject.fsm.change(PlayerRun);
        else if ((custominput.swipe && custominput.dir.x != 0)) this.gameobject.fsm.change(PlayerRoll);
        else if (custominput.swipe && custominput.dir.y === -1 && this.gameobject.config.balloons > 0) this.gameobject.fsm.change(PlayerThrow);

    }

    canRoll() {
        return this.gameobject.weapon !== PLAYER_CONFIG.weapons.hose.id;
    }
}