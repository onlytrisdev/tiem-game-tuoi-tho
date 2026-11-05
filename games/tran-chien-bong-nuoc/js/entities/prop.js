class Prop extends Entity {
    constructor() {
        super();
    }

    setView(name) {
        this.view = new AWClip(background_objects, name);
        let screen = screenmanager.getTopScreen();
        screen.addMC(this.view, this.container);
        screen.gamelayer.addChild(this.container);
        screen.camera.add(this);
    }
}