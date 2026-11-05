//import { COLLISION_CATEGORY } from "../config/gameplay.js";
//import { physics, screenmanager } from "../main.js";
//import { Entity } from "./entity.js";

class PlayerWall extends Entity {
    constructor() {
        super();

        this.body = physics.createRectangle(
            this,
            COLLISION_CATEGORY.PLAYER_WALL,
            COLLISION_CATEGORY.PLAYER,
            {
                width: 50, height:50
            }
        );
        this.body.static = true;
        this.body.setEnable(false);
    }

    reset() {
        super.reset();
        this.body.setEnable(true);
        let screen = screenmanager.getTopScreen();
        screen.camera.add(this);
    }

    physicsCollide(body) {
    }
}