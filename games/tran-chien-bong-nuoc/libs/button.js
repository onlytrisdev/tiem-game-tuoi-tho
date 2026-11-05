//import { soundmanager } from "../js/main.js";

class Button {
    constructor(container, click = null, down = null, up = null, buttonMode = true) {
        this.container = container;
        this.container.buttonMode = buttonMode;
        this.container.interactive = true;
        this.container.interactiveChildren = true;
        this.clickSound = "click";

        this.identifier = -1;

        if (click) {
            this.set_click(click);
        }

        if (down) {
            this.down = down;
            this.container.on('mousedown', this.on_down.bind(this));
            this.container.on('touchstart', this.on_down.bind(this));
        }

        if (up) {
            this.up = up;
            this.container.on('mouseup', this.on_up.bind(this));
            this.container.on('mouseupoutside', this.on_up.bind(this));
            this.container.on('touchend', this.on_up.bind(this));
            this.container.on('touchendoutside', this.on_up.bind(this));
        }
    }

    set_click(click) {
        this.click = click;
        this.container.on('click', this.on_click.bind(this));
        this.container.on('tap', this.on_click.bind(this));
    }

    on_click(evt) {
        this.click(evt);
        soundmanager.play(this.clickSound, true);
    }

    on_down(evt) {
        this.identifier = evt.data.identifier;
        this.down(evt);
    }

    on_up(evt) {
        if (evt.data.identifier === this.identifier) {
            this.up(evt);
        }
    }

    enable(bool) {
        this.container.interactive = bool;
    }

    dispose() {
        this.container.removeListener('click');
        this.container.removeListener('tap');
        this.container.removeListener('mousedown');
        this.container.removeListener('touchstart');
        this.container.removeListener('mouseup');
        this.container.removeListener('mouseupoutside');
        this.container.removeListener('touchend');
        this.container.removeListener('touchendoutside');

        this.container = null;
        this.click = null;
        this.down = null;
        this.up = null;
    }
}