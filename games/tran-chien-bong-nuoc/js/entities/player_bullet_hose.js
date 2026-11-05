//import { ASSET_ID, get_asset } from "../config/assets.js";
//import { COLLISION_CATEGORY } from "../config/gameplay.js";
//import { physics, superpool } from "../main.js";
//import { Bullet } from "./bullet.js";
//import { WaterImpact } from "./water_impact.js";

class PlayerBulletHose extends Bullet {
    constructor() {
        super();

        this.body = physics.createRectangle(
            this,
            COLLISION_CATEGORY.PLAYER_BULLET,
            COLLISION_CATEGORY.ENEMY,
            {
                width: 20, height: 20
            }
        );
        this.body.sensor = true;
        this.body.setEnable(false);
        this.body.bulletTime = false;

        this.view = get_asset(ASSET_ID.PLAYER_BULLET_HOSE);
        this.view.y = -80;
    }

    reset() {
        super.reset();

        let screen = screenmanager.getTopScreen();
        screen.addMC(this.view, this.container);
        screen.gamelayer.addChild(this.container);
        screen.camera.add(this);

        add_shadow(this, 0.3, 1);
    }

    remove() {
        let waterimpact = superpool.get(WaterImpact);
        waterimpact.position.x = this.position.x;
        waterimpact.position.y = this.position.y + 5;
        waterimpact.scale = this.scale;
        waterimpact.view.y = this.view.y;

        this.removeTweens();
        super.remove();

        let screen = screenmanager.getTopScreen();
        screen.removeMC(this.view);
        screen.gamelayer.removeChild(this.container);
        screen.camera.remove(this);
    }

    update(dt) {
        super.update(dt);
    }

    fire(x, y, velocityX = 0, velocityY = 0, angle = 0, pressure = 1) {
        //console.log(pressure);
        velocityY = velocityY * pressure;
        let time = 1250 * pressure;
        let initY = -80;
        let maxY = -200;
        let newY = (maxY - initY) * pressure;
        this.view.rotation = -angle * (Math.PI / 180);
        this.view.y = initY;
        this.view.scale.x = (1 + (Math.random() * 0.5)) * pressure;
        this.view.scale.y = (1.5 + (Math.random() * 0.5)) * pressure;
        /* this.view.scale.x = this.view.scale.y = (1 + (Math.random() * 0.5)) * pressure; */
        let tween1 = createjs.Tween.get(this.view)
            .to({ y: initY + newY }, time * 0.5, createjs.Ease.sineInOut)
            .to({ y: -10 }, time * 0.5, createjs.Ease.sineIn)
            .call(() => {
                this.removeTweens();
                this.kill = true;
            });

        tweenmanager.add("player", tween1);
        //console.log(velocityY);
        super.fire(x, y, velocityX, velocityY, angle);
    }

    removeTweens() {
        createjs.Tween.removeTweens(this.view);
    }

    physicsCollide(body) {
        super.physicsCollide(body);
        soundmanager.play("hose_impact_loop", false);
    }

    getDamage() {
        return (GLOBAL_BULLET_TIME_ON) ? this.damage * ITEMS_CONFIG.bullettime_damage_mult : this.damage;
    }
}