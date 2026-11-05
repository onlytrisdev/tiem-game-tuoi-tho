import { transitions } from "../../assets/movieclips/transitions.js";
import { AWClip } from "../../libs/awclip.js";
import { DelayedFunctionsManager, LabelDelayedFunction } from "../../libs/delayed_functions.js";
import { app, DESIGN_HEIGHT, DESIGN_WIDTH, soundmanager } from "../main.js";

export class MainTransition {
    constructor() {
        this.view = null;
        this.delayed_fn_manager = new DelayedFunctionsManager();
        this.canUpdate = true;
    }

    init() {
        this.canUpdate = true;
        this.view = new AWClip(transitions, "main_transition");
        app.stage.addChild(this.view);
        this.scale();
    }

    in() {
        this.canUpdate = true;
        this.view.gotoAndPlay("in");
        this.scale();
        soundmanager.play("pause_in");
        this.enableFilters(true);
    }

    out(callback) {
        soundmanager.play("pause_out");
        this.view.gotoAndPlay("out");
        this.scale();
        this.delayed_fn_manager.add_function(new LabelDelayedFunction(() => {
            this.canUpdate = false;
            this.enableFilters(false);
            if (callback) callback(); callback = null;
        }, this.view, "out_end"));
    }

    update(dt) {
        this.delayed_fn_manager.update(dt);
        if (this.view && this.canUpdate) {
            this.view.update(dt);
        }
    }

    scale() {
        if (this.view) {
            const width = DESIGN_WIDTH / app.stage.scale.x
            const height = DESIGN_HEIGHT / app.stage.scale.y;
            this.view.scale.x = 1;
            this.view.scale.y = 1;
            this.view.x = (width - DESIGN_WIDTH) / 2;

            if (height > DESIGN_HEIGHT && width === DESIGN_WIDTH) {
                const scale = height / DESIGN_HEIGHT;
                this.view.scale.x = scale;
                this.view.scale.y = scale;
                this.view.x = (DESIGN_WIDTH - (DESIGN_WIDTH * scale)) / 2;
            }
        }
    }

    enableFilters(on = true) {
        for (let i = 0; i < this.view.filters.length; i++) {
            this.view.filters[i].enabled = on;
        }
    }
}