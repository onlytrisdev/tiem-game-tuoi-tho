window.WAVE_MANAGER = {
    play: false,
    currentWave: 0,
    globalCurrentWave: 0,
    waveInitialized: false,
    enemiesKilled: 0,
    currentEnemies: 0,
    listIndex: 0,
    delay: 0,
    enemiesId: {},
    enemiesKilledQueue: {},
    drop: undefined,
};

window.reset_wave_manager = function () {
    WAVE_MANAGER.play = false;
    WAVE_MANAGER.currentWave = 0;
    WAVE_MANAGER.globalCurrentWave = 0;
    WAVE_MANAGER.waveInitialized = false;
    WAVE_MANAGER.enemiesKilled = 0;
    WAVE_MANAGER.currentEnemies = 0;
    WAVE_MANAGER.listIndex = 0;
    WAVE_MANAGER.delay = 0;
    WAVE_MANAGER.enemiesId = {};
    WAVE_MANAGER.enemiesKilledQueue = {};
    WAVE_MANAGER.drop = undefined;
}

window.update_waves = function (dt, wavesConfig, poolManager) {

    if (!WAVE_MANAGER.play) return;

    if (!WAVE_MANAGER.waveInitialized) {
        WAVE_MANAGER.enemiesKilled = 0;
        WAVE_MANAGER.currentEnemies = 0;
        WAVE_MANAGER.delay = 0;
        WAVE_MANAGER.listIndex = 0;
        WAVE_MANAGER.waveInitialized = true;
        WAVE_MANAGER.enemiesId = {};
        WAVE_MANAGER.enemiesKilledQueue = {};
        WAVE_MANAGER.drop = wavesConfig[WAVE_MANAGER.currentWave].drop;

        for (let i = 0; i < wavesConfig[WAVE_MANAGER.currentWave].list.length; i++) {
            if (wavesConfig[WAVE_MANAGER.currentWave].list[i]["type"] !== undefined) {
                WAVE_MANAGER.currentEnemies++;
            }
        }
        //console.log("WAVE initialized " + WAVE_MANAGER.currentWave);
        //console.log("total enemies: " + WAVE_MANAGER.currentEnemies);

    }

    let listItem = wavesConfig[WAVE_MANAGER.currentWave].list[WAVE_MANAGER.listIndex];
    let delay = listItem ? listItem["delay"] : undefined;

    if (delay !== undefined) {
        WAVE_MANAGER.delay += dt;
        //console.log("item delay: " + WAVE_MANAGER.delay.toFixed(1) + " / " + delay);
        if (WAVE_MANAGER.delay >= delay) {
            WAVE_MANAGER.delay = 0;
            //console.log("WAVE delay finished: " + delay);
            if (listItem["type"] !== undefined) {
                spawnEnemy(poolManager, listItem);
            }
            WAVE_MANAGER.listIndex++;
        }
    } else if (listItem !== undefined) {
        spawnEnemy(poolManager, listItem);
        WAVE_MANAGER.listIndex++;
    }

    for (let i in WAVE_MANAGER.enemiesKilledQueue) {
        delete WAVE_MANAGER.enemiesKilledQueue[i];
        WAVE_MANAGER.enemiesKilled++;
        achievements_manager.setWardenAchievementProgress(achievements_id.the_warden, 1);
    }

    if (WAVE_MANAGER.enemiesKilled === WAVE_MANAGER.currentEnemies &&
        wavesConfig[WAVE_MANAGER.currentWave].list.length === WAVE_MANAGER.listIndex &&
        !WAVE_MANAGER.waveComplete) {
        console.log("WAVE complete: " + WAVE_MANAGER.currentWave);
        let toList = wavesConfig[WAVE_MANAGER.currentWave].to;
        WAVE_MANAGER.currentWave = toList[Math.floor(toList.length * Math.random())];
        console.log("WAVE complete next: " + WAVE_MANAGER.currentWave);
        WAVE_MANAGER.waveInitialized = false;
        WAVE_MANAGER.globalCurrentWave++;
    }
}

window.spawnEnemy = function (poolmanager, config) {

    let entity = poolmanager.get(config.type);
    entity.body.position.x = config.spawnpoint.x;
    entity.body.position.y = config.spawnpoint.y;

    if (config.endpoint === undefined) {
        entity.endpoint = { x: config.spawnpoint.x, y: config.spawnpoint.y };
        entity.movedir = Math.random() > 0.5 ? 1 : -1;
    } else {
        entity.movedir = (config.spawnpoint.x < config.endpoint.x) ? 1 : -1;
        entity.endpoint = config.endpoint;
    }
    console.log("move dir: " + entity.movedir);
    entity.startpoint = config.spawnpoint;
    entity.killAtEnd = config.kill_at_end ? true : false;

    entity.waveId = "" + WAVE_MANAGER.currentWave + WAVE_MANAGER.listIndex;

    WAVE_MANAGER.enemiesId[entity.waveId] = {};
}

window.enemyKilled = function (waveId) {
    if (WAVE_MANAGER.enemiesId[waveId]) {
        WAVE_MANAGER.enemiesKilledQueue[waveId] = {};
        delete WAVE_MANAGER.enemiesId[waveId];
    }
}

window.checkWaveItemDrop = function (position) {
    if (WAVE_MANAGER.drop === undefined) return;
    for (let i = 0; i < WAVE_MANAGER.drop.length; i++) {
        let dropConfig = WAVE_MANAGER.drop[i];
        if (dropConfig.kills === (WAVE_MANAGER.enemiesKilled + 1)) {
            for (let j = 0; j < dropConfig.ids.length; j++) {
                let id = WAVE_MANAGER.drop[i].ids[j];
                console.log("drop forced item: " + id);
                drop_forced_item(position, id);
            }
        }
    }
}