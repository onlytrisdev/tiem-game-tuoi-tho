//import { screenmanager } from "../main.js";
//import { Entity } from "./entity.js";

class Vfx extends Entity {
    constructor() {
        super();
    }

    reset() {
        super.reset();
        let screen = screenmanager.getTopScreen();
        screen.addMC(this.view, this.container);
        screen.gamelayer.addChild(this.container);
        screen.camera.add(this);

        this.view.gotoAndPlay(0);
        this.view.resetTime();

        this.view.onFinished = this.onFinished.bind(this);
    }

    update(dt){
        this.view.changeSpeed(GLOBAL_BULLET_TIME_MULTIPLIER);
        super.update(dt);
    }

    onFinished() {
        this.kill = true;
        //console.log("vfx finished");
    }
}