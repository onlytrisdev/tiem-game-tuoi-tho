//import { ASSET_ID, get_asset } from "../config/assets.js";
//import { soundmanager } from "../main.js";
//import { Vfx } from "./vfx.js";

class BalloonImpact extends Vfx {
    constructor() {
        super();

        this.view = get_asset(ASSET_ID.BALLOON_IMPACT);
    }

    reset() {
        super.reset();
        //this.view.scale.set(1.5);
    }
}