class Entity {
    constructor() {
        this.view = null;
        this.container = new PIXI.Container();
        this.container.visible = false;
        this.position = new Vec3();
        this.scale = 1;
        this.kill = false;
    }

    reset() {
        this.kill = false;
        this.position.x = -10000;
        //this.position.y = -10000;
        this.container.x = this.position.x;
        this.container.y = this.position.y;
        this.container.scale.x = this.container.scale.y = this.scale;
        this.container.visible = true;
        this.container.alpha = 1;
    }

    remove() {
        let screen = screenmanager.getTopScreen();
        if (this.view) {
            screen.removeMC(this.view);
        }
        screen.camera.remove(this);
        this.container.visible = false;
    }

    update(dt) {
        this.container.x = this.position.x;
        this.container.y = this.position.y;
        this.container.scale.x = this.container.scale.y = this.scale;
    }

    dispose() {

        this.position = null;
        this.view = null;
        this.container = null;
    }
}