import { Screen } from "../../libs/screenmanager.js";
import { CHROMATIC_FILTER_ON } from "../config/gameplay.js";
import { SCREENS } from "../config/screens.js";
import { main_transition, screenmanager } from "../main.js";
import { apply_ghost_chromatic_aberration } from "../misc/game_utils.js";
import { Game } from "../screens/game.js";
import { Test } from "../screens/test.js";

export class Boot extends Screen {
    constructor() {
        super();
    }

    enter(data) {
        super.enter();

        main_transition.init();

        if (CHROMATIC_FILTER_ON) apply_ghost_chromatic_aberration(main_transition.view, 2);
        //if (BLOOM_FILTER_ON) apply_ghost_bloom_alpha(main_transition.view);//this causes a glitch on the blackout transition

        if (SCREENS.test) screenmanager.load(Test);
        else screenmanager.load(Game);
    }
}