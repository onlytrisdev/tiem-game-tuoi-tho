//import { FsmState } from "../../../libs/fsm.js";
//import { custominput } from "../../main.js";
//import { PlayerIdle } from "./player_idle.js";

class PlayerRoll extends FsmState {
    constructor(gameobject) {
        super(gameobject);
    }

    enter() {
        this.gameobject.view.gotoAndStop("roll", true);
        this.gameobject.view.scale.x = custominput.dir.x;
        this.delay = this.gameobject.config.roll_delay;
        this.gameobject.body.velocity.x = this.gameobject.config.roll_velocity * custominput.dir.x;
        this.gameobject.shoot = false;
        this.gameobject.shootFrame = 0;

        soundmanager.playRandom("roll");
    }

    update(dt) {
        this.delay -= dt;
        if (this.delay <= 0) this.gameobject.fsm.change(PlayerIdle);
    }
}