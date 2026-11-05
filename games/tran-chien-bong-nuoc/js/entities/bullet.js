//import { screenmanager } from "../main.js";
//import { rotate_vector } from "../misc/game_utils.js";
//import { Entity } from "./entity.js";

class Bullet extends Entity {
    constructor() {
        super();

        this.userId = "";
        this.damage = 0;
    }

    reset() {
        super.reset();
        this.body.setEnable(true);
        this.body.drag = 0;

        /* let screen = screenmanager.getTopScreen();
        this.container.addChild(this.view);
        screen.gamelayer.addChild(this.container);
        screen.camera.add(this); */
    }

    physicsCollide(body) {
        this.kill = true;
        this.body.setEnable(false);
    }

    fire(x, y, velocityX = 0, velocityY = 0, angle = 0) {
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.velocity.x = velocityX;
        this.body.velocity.y = velocityY;
        rotate_vector(this.body.velocity, angle);
    }

    setDamage(value) {
        this.damage = value;
    }

    getDamage() {
        return this.damage;
    }

    remove() {
        /* let screen = screenmanager.getTopScreen();
        if (this.view) {
            screen.gamelayer.removeChild(this.container);
        }
        screen.camera.remove(this); */
        this.body.setEnable(false);
        this.body.velocity.x = this.body.velocity.y = 0;
        this.body.acceleration.x = this.body.acceleration.y = 0;
    }
}