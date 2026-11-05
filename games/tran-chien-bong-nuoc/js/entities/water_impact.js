//import { ASSET_ID, get_asset } from "../config/assets.js";
//import { soundmanager } from "../main.js";
//import { Vfx } from "./vfx.js";

class WaterImpact extends Vfx {
    constructor() {
        super();

        this.view = get_asset(ASSET_ID.WATER_IMPACT);
    }

    reset() {
        super.reset();

        //soundmanager.playRandom("water_impact", true);
        this.view.rotation = Math.PI * 2 * Math.random();
    }
}