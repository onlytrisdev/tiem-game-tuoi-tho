//import { ASSET_ID, get_asset } from "../config/assets.js";
//import { soundmanager } from "../main.js";
//import { Vfx } from "./vfx.js";

class BossDust extends Vfx {
    constructor() {
        super();

        this.view = get_asset(ASSET_ID.BOSS_DUST);
    }

    reset() {
        super.reset();
    }
}