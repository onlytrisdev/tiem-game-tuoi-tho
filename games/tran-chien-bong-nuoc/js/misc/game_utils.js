window.get_character_asset_by_id = function (id) {
    let mc = new AWClip(craig_wheel_view, "craig_wheel_view");
    switch (id) {
        case OUTFITS.school.id:
            mc.gotoAndStop("school");
            break;
        case OUTFITS.adventure.id:
            mc.gotoAndStop("adventure");
            break;
        case OUTFITS.lab.id:
            mc.gotoAndStop("lab");
            break;
        case OUTFITS.super.id:
            mc.gotoAndStop("super");
            break;
        case OUTFITS.raincoat.id:
            mc.gotoAndStop("raincoat");
            break;
        case OUTFITS.ace.id:
            mc.gotoAndStop("ace");
            break;
        default:
            break;
    }
    return mc;
}

window.get_outfit_price_by_id = function (id) {
    for (let i in OUTFITS) {
        if (OUTFITS[i].id == id) return OUTFITS[i].price;
    }
    return -1;
}

window.get_outfit_score_multiplier = function (id) {
    for (let i in OUTFITS) {
        if (OUTFITS[i].id == id) return OUTFITS[i].score_multiplier;
    }
    return 1;
}

window.get_outfit_name_by_id = function (id) {
    for (let i in OUTFITS) {
        if (OUTFITS[i].id == id) return i;
    }
    return -1;
}

window.update_entities_logic = function (dt) {
    for (let i in superpool.pool) {
        for (let j = 0; j < superpool.pool[i].allocated.length; j++) {
            let entity = superpool.pool[i].allocated[j];
            entity.update(dt);
            if (entity.shoot && entity.shotPosition !== undefined) {
                let weapon = entity.getCurrentWeapon();
                for (let k = 0; k < weapon.bullets.length; k++) {
                    let bulletConfig = weapon.bullets[k];
                    let bullet = undefined;
                    if (bulletConfig.updatable) {
                        bullet = superpool.get(bulletConfig.type, weapon.id, k);
                    } else {
                        bullet = superpool.get(bulletConfig.type);
                    }
                    if (bullet) {
                        let angle = bulletConfig.angle;

                        if (angle === undefined) angle = 0;

                        if (bulletConfig["angle_range"]) {
                            angle = angle + (bulletConfig.angle_range.left * Math.random()) + (bulletConfig.angle_range.right * Math.random());
                        }

                        bullet.fire(entity.shotPosition.x + bulletConfig.x + (entity.body.velocity.x * 2 * dt), entity.shotPosition.y + bulletConfig.y, bulletConfig.speed_x, bulletConfig.speed_y, angle, entity.getPressure());
                        bullet.setDamage(bulletConfig.damage);
                    }
                }
            } else if (entity.throw && entity.throwPosition !== undefined) {
                let weapon = entity.getCurrentThrowWeapon();
                for (let m = 0; m < weapon.bullets.length; m++) {
                    let bulletConfig = weapon.bullets[m];
                    let bullet = superpool.get(bulletConfig.type);
                    if (bullet) {
                        //bullet.setRange(bulletConfig.range.x, bulletConfig.range.y);
                        bullet.fire(entity.throwPosition.x + bulletConfig.x + (entity.body.velocity.x * 2 * dt), entity.throwPosition.y + bulletConfig.y)
                    }
                }
            }
        }
    }
}

window.reached_stopping_distance = function (currentPos, endPos, velocity, drag) {

    if (Math.abs(currentPos.x - endPos.x) <= Math.abs((velocity) / (physics.drag * drag))) return true;

    return false
}

window.rotate_vector = function (vector, angle) {
    angle = -angle * (Math.PI / 180);
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    vector.x = Math.round(10000 * (vector.x * cos - vector.y * sin)) / 10000;
    vector.y = Math.round(10000 * (vector.x * sin + vector.y * cos)) / 10000;

    //console.log("rotation vector: ", vector);
}

window.drop_item = function (position) {
    let dice = Math.random(), chosenOnes = [], item = null, player = superpool.get(Player, "player");

    for (let i in ITEMS_CONFIG.probabilities) {
        let prob = ITEMS_CONFIG.probabilities[i];
        prob = prob;
        console.log(i + " : " + prob);
        if (prob >= dice && canSpawnItem(i, player)) {
            chosenOnes.push({ type: i, prob: prob });
        }
    }

    chosenOnes.sort(() => Math.random() - 0.5);

    if (chosenOnes[0]) {
        console.log("chosen one: ", chosenOnes[0].type);
        item = superpool.get(eval(chosenOnes[0].type));
    }

    if (item) {
        item.body.position.x = position.x;
        item.body.position.y = position.y + 1;

        let leftGap = Math.abs(player.body.position.x - (ITEMS_CONFIG.player_drop_width / 2) - ITEMS_CONFIG.drop_start_x);
        let rightGap = Math.abs(player.body.position.x + (ITEMS_CONFIG.player_drop_width / 2) - ITEMS_CONFIG.drop_end_x);

        let posX = 0;

        if (leftGap > rightGap) {
            posX = ITEMS_CONFIG.drop_start_x + (Math.random() * leftGap);
        } else {
            posX = ITEMS_CONFIG.drop_end_x - (Math.random() * rightGap);
        }
        item.drop(posX, player.body.position.y);
    }
}

window.drop_forced_item = function (position, id) {

    let item = null, player = superpool.get(Player, "player");

    item = superpool.get(eval(id));

    if (item) {
        item.body.position.x = position.x;
        item.body.position.y = position.y + 1;

        let leftGap = Math.abs(player.body.position.x - (ITEMS_CONFIG.player_drop_width / 2) - ITEMS_CONFIG.drop_start_x);
        let rightGap = Math.abs(player.body.position.x + (ITEMS_CONFIG.player_drop_width / 2) - ITEMS_CONFIG.drop_end_x);

        let posX = 0;

        if (leftGap > rightGap) {
            posX = ITEMS_CONFIG.drop_start_x + (Math.random() * leftGap);
        } else {
            posX = ITEMS_CONFIG.drop_end_x - (Math.random() * rightGap);
        }
        item.drop(posX, player.body.position.y);
    }
}

window.canSpawnItem = function (id, player) {
    //console.log("can this item spawn? - " + superpool.pool[eval(id)].allocated.length);
    //console.log(superpool.pool[id], player.config.health);
    let playerWeaponSling = player.weapon === PLAYER_CONFIG.weapons.slingshot.id;

    if (id === ItemBucket.name && superpool.pool[id].allocated.length === 0 && superpool.pool[ItemHose.name].allocated.length === 0 && playerWeaponSling) {
        return true;
    } else if (id === ItemHose.name && superpool.pool[id].allocated.length === 0 && superpool.pool[ItemBucket.name].allocated.length === 0 && playerWeaponSling) {
        return true;
    } /* else if (id === ItemBulletTime.name && superpool.pool[id].allocated.length === 0 && !GLOBAL_BULLET_TIME_ON) {
        return true;
    } */ else if (id === ItemBalloon.name && superpool.pool[id].allocated.length === 0 && player.config.balloons < PLAYER_CONFIG.max_balloons) {
        return true;
    }/*  else if (id === ItemLunchBox.name && superpool.pool[id].allocated.length === 0 && player.config.health < PLAYER_CONFIG.max_health) {
        return true;
    } */

    return false;
};

window.is_enemy = function (entity) {
    for (let i = 0; i < ENEMY_TYPE.length; i++) {
        let type = ENEMY_TYPE[i].name;
        if (type === entity.constructor.name) return true;
    }
    return false;
}

window.add_shadow = function (entity, scaleX, scaleY) {
    let shadow = superpool.get(Shadow);
    shadow.target = entity;
    shadow.setScale(
        (scaleX === undefined && scaleY === undefined) ? 1 : scaleX === undefined && scaleY !== undefined ? scaleY : scaleX === undefined ? 1 : scaleX,
        (scaleX === undefined && scaleY === undefined) ? 1 : scaleY === undefined && scaleX !== undefined ? scaleX : scaleY === undefined ? 1 : scaleY,
    );

    return shadow;
}


window.is_in_balloon_range = function (entity, fromPosition, rangeX, rangeY) {
    let cameraWidth = DESIGN_WIDTH / app.stage.scale.x;
    let distanceX = Math.abs(entity.position.x - fromPosition.x);
    let distanceY = Math.abs(entity.position.y - fromPosition.y);

    if (entity.position.x + (entity.body.fixtures[0].projectionWidth / 2) > -cameraWidth / 2 && entity.position.x - (entity.body.fixtures[0].projectionWidth / 2) < cameraWidth / 2 && distanceX < rangeX && distanceY < rangeY) return true;

    return false;
}

window.get_ranged_target = function (fromPosition, rangeX, rangeY) {
    let enemies = [];
    for (let i in superpool.pool) {
        for (let j = 0; j < superpool.pool[i].allocated.length; j++) {
            let entity = superpool.pool[i].allocated[j];
            if (!is_enemy(entity)) continue;
            if (!entity.defeated && is_in_balloon_range(entity, fromPosition, rangeX, rangeY)) {
                enemies.push(entity);
            }
        }
    }
    if (enemies.length > 0) {
        enemies.sort((a, b) => {
            return get_distance(a.position.x, fromPosition.x, a.position.y, fromPosition.y) > get_distance(b.position.x, fromPosition.x, b.position.y, fromPosition.y);
        });
        return enemies[0];
    }
    return;
}

window.get_distance = function (x1, x2, y1, y2) {
    var a = x2 - x1;//x1 - x2;
    var b = y2 - y1;//y1 - y2;

    return Math.sqrt((a * a) + (b * b));
}

window.boss_shake_enter = function () {
    globalsignal.emit(ge.SHAKE, { duration: 0.3, x: 0, y: 800 });
}

window.boss_shake_step = function () {
    globalsignal.emit(ge.SHAKE, { duration: 0.3, x: 0, y: 300 });
}

window.apply_flash = function (asset) {
    let alreadyHas = false, flash;
    if (!asset.filters) asset.filters = [];
    for (let i = 0; i < asset.filters.length; i++) {
        let filter = asset.filters[i];
        if (filter.constructor.name === PIXI.filters.ColorMatrixFilter.name) {
            alreadyHas = true;
            flash = filter;
            break;
        }
    }
    if (!alreadyHas) {
        flash = new PIXI.filters.ColorMatrixFilter();
        asset.filters.push(flash);
    }
    if (flash) {
        //[
        //  1, 0, 0, 0, 0, 0, 
        //  1, 0, 0, 0, 0, 0, 
        //  1, 0, 0, 0, 0, 0, 
        //  1, 0
        //];
        flash.matrix[0] = 0;
        flash.matrix[6] = 200;
        flash.matrix[12] = 200;
    }
}

window.update_flash = function (asset, dt) {
    if (!asset.filters) return;
    let speed = 20;
    for (let i = 0; i < asset.filters.length; i++) {
        let filter = asset.filters[i];
        if (filter.constructor.name === PIXI.filters.ColorMatrixFilter.name) {
            if (filter.matrix[6] > 1)
                filter.matrix[6] -= speed * dt;
            if (filter.matrix[12] > 1)
                filter.matrix[12] -= speed * dt;
            if (filter.matrix[0] < 1)
                filter.matrix[0] += speed * dt;

            filter.matrix[0] = Math.min(Math.max(filter.matrix[0], 0), 1);
            filter.matrix[6] = Math.min(Math.max(filter.matrix[6], 1), 3);
            filter.matrix[12] = Math.min(Math.max(filter.matrix[12], 1), 3);

            break;
        }
    }
}

window.reset_flash = function (asset) {
    if (!asset.filters) return;
    for (let i = 0; i < asset.filters.length; i++) {
        let filter = asset.filters[i];
        filter.matrix[0] = 1
        filter.matrix[6] = 1;
        filter.matrix[12] = 1;
    }
}