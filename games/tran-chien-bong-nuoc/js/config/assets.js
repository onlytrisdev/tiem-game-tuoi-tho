window.ASSET_ID = {
    PRELOADER: 2,//avoid using 0 or 1, because of boolean check
    //CRAIG: 3,
    ENEMY_1: 4,
    ENEMY_2: 5,
    ENEMY_3: 6,
    PLAYER_BULLET_SLINGSHOT: 7,
    PLAYER_BULLET_BUCKET: 8,
    PLAYER_BULLET_HOSE: 9,
    PLAYER_BULLET_HOSE_START: 10,
    PLAYER_BULLET_HOSE_END: 11,
    WATER_IMPACT: 12,
    UI_COIN: 13,
    ITEM: 14,
    PLAYER_BULLET_BALLOON: 15,
    SHADOW: 16,
    ENEMY_1_SHIELD: 17,
    ENEMY_1_BULLET: 18,

    ENEMY_2_SHIELD: 19,
    ENEMY_3_SHIELD: 20,
    ENEMY_BULLET_BALLOON: 21,

    BOSS: 22,

    BOSS_SHOT_MUZZLEFLASH: 23,

    BOSS_DUST: 24,

    BALLOON_IMPACT: 25,

    CRAIG_1: 26,
    CRAIG_2: 27,
    CRAIG_3: 28,
    CRAIG_4: 29,
    CRAIG_5: 30,
    CRAIG_6: 31,
}

window.get_asset = function (id) {
    let mc = null;
    switch (id) {
        case ASSET_ID.PRELOADER:
            return new AWClip(preloader_view, "view");

        case ASSET_ID.CRAIG_1:
            return new AWClip(craig_1, "craig_1");
        case ASSET_ID.CRAIG_2:
            return new AWClip(craig_2, "craig_2");
        case ASSET_ID.CRAIG_3:
            return new AWClip(craig_3, "craig_3");
        case ASSET_ID.CRAIG_4:
            return new AWClip(craig_4, "craig_4");
        case ASSET_ID.CRAIG_5:
            return new AWClip(craig_5, "craig_5");
        case ASSET_ID.CRAIG_6:
            return new AWClip(craig_6, "craig_6");

        case ASSET_ID.ENEMY_1:
            return new AWClip(enemy1, "enemy1");
        case ASSET_ID.ENEMY_2:
            return new AWClip(enemy2, "enemy2");
        case ASSET_ID.ENEMY_3:
            return new AWClip(enemy3, "enemy3");
        case ASSET_ID.PLAYER_BULLET_SLINGSHOT:
            return new AWClip(bullets, "player_bullet_slingshot");
        case ASSET_ID.PLAYER_BULLET_BUCKET:
            return new AWClip(bullets, "player_bullet_hose");
        case ASSET_ID.PLAYER_BULLET_HOSE:
            return new AWClip(bullets, "player_bullet_hose");
        case ASSET_ID.WATER_IMPACT:
            return new AWClip(bullets, "water_impact");
        case ASSET_ID.PLAYER_BULLET_HOSE_START:
            return new AWClip(bullets, "water_jet_start");
        case ASSET_ID.PLAYER_BULLET_HOSE_END:
            return new AWClip(bullets, "water_jet_end");
        case ASSET_ID.UI_COIN:
            return new AWClip(ui_ingame, "ui_coin");
        case ASSET_ID.ITEM:
            return new AWClip(items, "item");
        case ASSET_ID.PLAYER_BULLET_BALLOON:
            return new AWClip(bullets, "player_bullet_balloon");
        case ASSET_ID.SHADOW:
            return new AWClip(items, "shadow");
        case ASSET_ID.ENEMY_1_SHIELD:
            return new AWClip(enemy1, "enemy1_shield");
        case ASSET_ID.ENEMY_1_BULLET:
            return new AWClip(bullets, "enemy1_bullet");
        case ASSET_ID.ENEMY_2_SHIELD:
            return new AWClip(enemy2, "enemy2_shield");
        case ASSET_ID.ENEMY_3_SHIELD:
            return new AWClip(enemy3, "enemy3_shield");
        case ASSET_ID.ENEMY_BULLET_BALLOON:
            return new AWClip(bullets, "enemy_bullet_balloon");
        case ASSET_ID.BOSS:
            return new AWClip(boss, "boss");
        case ASSET_ID.BOSS_SHOT_MUZZLEFLASH:
            return new AWClip(boss, "boss_shoot_vfx");
        case ASSET_ID.BOSS_DUST:
            return new AWClip(boss, "boss_dust");
        case ASSET_ID.BALLOON_IMPACT:
            return new AWClip(bullets, "granade_explosion");
    }
}

window.get_asset_atlass_name = function (id) {
    switch (id) {
        case ASSET_ID.PRELOADER:
            return "preloader";
    }
}

window.update_loader = function (id, view, currentFrame, finishedCallback) {
    switch (id) {
        case ASSET_ID.PRELOADER:

            if (view) {
                view.getChildByLayerName("bottom").getChildByLayerName("bar").gotoAndStop(currentFrame);
            }

            if (currentFrame === 100 && view.getChildByLayerName("transition").getCurrentLabel() !== "out") {
                view.getChildByLayerName("transition").gotoAndPlay("out");
                view.getChildByLayerName("transition").outFinished = () => {
                    finishedCallback();
                };
            }
            break;
        default:
            if (currentFrame === 100) {
                finishedCallback();
            }
            break;
    }
}