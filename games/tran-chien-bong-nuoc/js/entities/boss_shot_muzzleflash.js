//import { ASSET_ID, get_asset } from "../config/assets.js";
//import { soundmanager } from "../main.js";
//import { Vfx } from "./vfx.js";

class BossShotMuzzleflash extends Vfx {
    constructor() {
        super();

        this.view = get_asset(ASSET_ID.BOSS_SHOT_MUZZLEFLASH);
    }

    reset() {
        super.reset();
    }
}