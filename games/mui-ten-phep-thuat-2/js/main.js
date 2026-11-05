function game_load() {
    c2d.font = "40px " + font_name;
    c2d.strokeText("+1", 65, 65);
    game.ARROWS_AT_START = BABYLON.DataStorage.ReadNumber(id_saver + "ARROWS", 1);
    game.CURRENT_LEVEL_VISIBLE = BABYLON.DataStorage.ReadNumber(id_saver + "CURRENT_LEVEL_VISIBLE", 1);
    game.CURRENT_LEVEL_TEMP = BABYLON.DataStorage.ReadNumber(id_saver + "CURRENT_LEVEL_TEMP", 1);
    game.ARROW_UPDATE_LEVEL = BABYLON.DataStorage.ReadNumber(id_saver + "ARROW_UPDATE_LEVEL", 1);
    game.ARROW_UPDATE_PRICE = BABYLON.DataStorage.ReadNumber(id_saver + "ARROW_UPDATE_PRICE", game.ARROW_UPDATE_INITIAL_PRICE);
    game.COIN_UPDATE_LEVEL = BABYLON.DataStorage.ReadNumber(id_saver + "COIN_UPDATE_LEVEL", 1);
    game.COIN_UPDATE_PRICE = BABYLON.DataStorage.ReadNumber(id_saver + "COIN_UPDATE_PRICE", game.COIN_UPDATE_INITIAL_PRICE);
    game.COIN_MULT = BABYLON.DataStorage.ReadNumber(id_saver + "COIN_MULT", 1);
    if (game.CURRENT_LEVEL_TEMP == 16) {
        game.CURRENT_LEVEL_TEMP = 6;
    }
    game.current_level = game.CURRENT_LEVEL_TEMP;
    game.level_lenght = game.levels_data[game.CURRENT_LEVEL_TEMP - 1].length;
    game.anim_scale = (1 / game.level_lenght) * 30;
    game.files_loaded = 0;
    game.PLAYING = false;
    game.WIN = false;
    game.last_x = 0;
    game.COINS = BABYLON.DataStorage.ReadNumber(id_saver + "COINS", 0);
    game.ARROWS = game.ARROWS_AT_START;
    game.files_count = 8;
    //BABYLON.SceneLoader.Load("3d/", "root_game.babylon", engine, function (sc) {       
    BABYLON.SceneLoader.Load("3d/", "root_game.babylon", engine, function (sc) {
        scene = sc;
        game.sounds = {};
        img_downgrade_ref = new Image();
        img_downgrade_ref.src = "images/g926.png";
        img_downgrade_ref.onload = function () {
            game.file_loaded();
        };
        img_upgrade_ref = new Image();
        img_upgrade_ref.src = "images/rect847.png";
        img_upgrade_ref.onload = function () {
            game.file_loaded();
        };
        //asset loader
        var assetsManager = new BABYLON.AssetsManager(scene);
        var task1 = assetsManager.addHDRCubeTextureTask("hrd1", "3d/env_min.hdr", 128);
        task1.onSuccess = function (e) {
            game.envtext = e.texture;
        };
        assetsManager.load();
        assetsManager.onFinish = function () {
            game.file_loaded();
        };
        game.sounds.down = new BABYLON.Sound("down", "sounds/down.mp3", sc, function () {
            game.file_loaded();
        });
        game.sounds.win = new BABYLON.Sound("down", "sounds/win.mp3", sc, function () {
            game.file_loaded();
        });
        game.sounds.up = new BABYLON.Sound("down", "sounds/up.mp3", sc, function () {
            game.file_loaded();
        });
        game.sounds.hit = new BABYLON.Sound("down", "sounds/hit.mp3", sc, function () {
            game.file_loaded();
        });
        game.file_loaded();
    });
}
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
function game_file_loaded() {
    game.files_loaded++;
    if (game.files_count == game.files_loaded) {
        game.cofre1 = scene.getMeshByName("cofre1");
        game.cofre2 = scene.getMeshByName("cofre2");
        var flag = scene.getMeshByName("flag");
        flag.visibility = 0;
        flag.isPickable = false;
        var flag_ = scene.getMeshByName("flag_");
        flag_.visibility = 0;
        flag_.isPickable = false;
        scene.getMeshByName("Plane").isPickable = false;
        ;
        flag_.setParent(flag);
        scene.beginAnimation(scene.getMeshByName("flag_"), 0, 30, false);
        scene.beginAnimation(flag_, 0, 30, false);
        var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
        var physicsPlugin = new BABYLON.AmmoJSPlugin();
        scene.enablePhysics(gravityVector, physicsPlugin);
        gui_game.load();
        document.getElementById("lock_loader").style.visibility = "hidden";
        if (window.ArcadeTool && typeof ArcadeTool.onLoaderHidden === "function") {
            ArcadeTool.onLoaderHidden();
        }
        // Fog     
        var color_ = "#edd3ff";
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = BABYLON.Color3.FromHexString(color_);
        scene.fogDensity = 0.01;
        scene.fogStart = 50.0;
        scene.fogEnd = 60.0;
        scene.environmentTexture = game.envtext;
        scene.environmentIntensity = 1;
        scene.clearColor = BABYLON.Color4.FromHexString(color_ + "ff");
        scene.getMeshesByTags("way").forEach(function (element) {
            if (element.name == "way" + game.current_level) {
            }
            else {
                element.dispose();
            }
        });
        scene.getMeshesByTags("anim").forEach(function (element) {
            if (element.name == "anim" + game.current_level) {
                game.current_anim = element;
                game.current_anim.isVisible = false;
            }
            else {
                element.dispose();
            }
        });
        scene.getMeshesByTags("items").forEach(function (element) {
            if (element.name == "l" + game.current_level) {
            }
            else {
                element.dispose();
            }
        });
        game.touch = scene.getMeshByName("touch");
        game.touch.isVisible = false;
        game.touch1 = scene.getMeshByName("touch1");
        game.touch1.isVisible = true;
        game.touch1.visibility = 0;
        game.touch2 = scene.getMeshByName("touch2");
        game.touch2.isVisible = true;
        game.touch2.visibility = 0;
        game.touch3 = scene.getMeshByName("touch3");
        game.touch3.isVisible = true;
        game.touch3.visibility = 0;
        game.anim_b = scene.getMeshByID("anim_b");
        game.anim_b.visibility = 1;
        game.anim_b.isVisible = false;
        game.anim_b.metadata = {};
        game.anim_b.animations.push(game.current_anim.animations[0]);
        game.anim_b.animations.push(game.current_anim.animations[1]);
        game.anim_b.animations.push(game.current_anim.animations[2]);
        var animatable = game.anim_b.metadata.animatable =
            scene.beginAnimation(game.anim_b, 40, 100, false, game.anim_scale, function () {
                for (var index = 0; index < 10; index++) {
                    game.anim_b.movePOV(0, 0, -8);
                    var plat_ = game.end_plat.clone("clone", null);
                    plat_.position = game.anim_b.position.clone();
                    plat_.rotation = game.anim_b.rotation.clone();
                    var knight_ = game.knight.clone("clone", null);
                    knight_.position = game.anim_b.position.clone();
                    knight_.rotation = game.anim_b.rotation.clone();
                    knight_.scaling = new BABYLON.Vector3(1, 1, 1).scale(0.7 + index * 0.1);
                    BABYLON.Tags.AddTagsTo(knight_, "knight");
                    knight_.metadata = {};
                    knight_.metadata.arrows = (index + 1) * 9;
                    knight_.metadata.number = index + 1;
                    if (knight_.metadata.number == BABYLON.DataStorage.ReadNumber(id_saver + "max", 0)) {
                        var flag = scene.getMeshByName("flag");
                        flag_.visibility = 1;
                        flag.position = knight_.position.clone();
                        flag.rotation = knight_.rotation.clone();
                        flag.movePOV(-0.81, 0, 0);
                        scene.beginAnimation(scene.getMeshByName("flag_"), 0, 30, false);
                    }
                }
                game.cofre1.position = game.anim_b.position.clone();
                game.cofre1.rotation = game.anim_b.rotation.clone();
                game.cofre1.movePOV(0, 0, -1.6);
                var frameRate = 10;
                var rot = new BABYLON.Animation("rot", "rotation.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                var keyFrames = [];
                keyFrames.push({
                    frame: 0,
                    value: 0
                });
                keyFrames.push({
                    frame: frameRate,
                    value: Math.PI / 4
                });
                rot.setKeys(keyFrames);
                game.cofre2.animations.push(rot);
            });
        scene.useConstantAnimationDeltaTime = true;
        game.camera_parent = scene.getMeshByID("camera_parent");
        game.arrows = scene.getMeshByID("arrows");
        game.end_plat = scene.getMeshByID("end_plat");
        game.camera_parent.setParent(game.current_anim);
        game.downgrader = scene.getMeshByName("downgrader");
        game.upgrader = scene.getMeshByName("upgrader");
        game.knight = scene.getMeshByName("knight");
        game.test = scene.getMeshesByTags("test");
        game.items = new Array();
        scene.getMeshesByTags("item").forEach(function (element) {
            var tags = BABYLON.Tags.GetTags(element, false);
            var type_ = Object.keys(tags)[1].substring(0, 1);
            var value_ = Number(Object.keys(tags)[1].replace(type_, ""));
            var rand_ = 0.7 + Math.random() * (1.21 - 0.7);
            var rand2_ = Math.random() * 0.35;
            var value2_ = Math.round((value_ * rand_) * (1 + (game.ARROWS_AT_START * 0.35)));
            if (type_ == "a") {
                value_ = value2_;
            }
            game.items[game.items.length] =
                new item(element.position.x, element.position.z, type_, value_);
            element.dispose();
        });
        game.way_len = game.levels_data[game.current_level - 1].length;
        scene.onPointerMove = function () {
            game.t_x = scene.pointerX;
            game.t_y = scene.pointerY;
            var picked = scene.pick(game.t_x, game.t_y);
            if (picked.hit && game.PLAYING) {
                game.touch.setParent(null);
                game.touch.position = picked.pickedPoint.clone();
                game.touch.setParent(game.camera_parent);
                if (picked.pickedMesh.name != "touch1") {
                    game.touch.position.x = picked.pickedMesh.position.x;
                }
            }
        };
        if (!game._keysBound) {
            game._keysBound = true;
            window.addEventListener("keydown", function (e) {
                if (e.key === "ArrowLeft" || e.keyCode === 37) {
                    game.keys.left = true;
                    e.preventDefault();
                }
                else if (e.key === "ArrowRight" || e.keyCode === 39) {
                    game.keys.right = true;
                    e.preventDefault();
                }
            });
            window.addEventListener("keyup", function (e) {
                if (e.key === "ArrowLeft" || e.keyCode === 37) {
                    game.keys.left = false;
                    e.preventDefault();
                }
                else if (e.key === "ArrowRight" || e.keyCode === 39) {
                    game.keys.right = false;
                    e.preventDefault();
                }
            });
            window.addEventListener("blur", function () {
                game.keys.left = false;
                game.keys.right = false;
            });
        }
        game.arrows_visible1 = new Array();
        for (var index = 1; index <= 10; index++) {
            game.arrows_visible1[index] = scene.getMeshByName("arrows_group" + index);
            game.arrows_visible1[index].isVisible = false;
        }
        game.arrows_visible2 = new Array();
        for (var index = 0; index < 10; index++) {
            game.arrows_visible2[index] = scene.getMeshByName("arr" + index);
            game.arrows_visible2[index].isVisible = true;
            game.arrows_visible2[index].position = BABYLON.Vector3.Zero();
        }
        gui_game.text_arrows.text = game.ARROWS.toString();
        game.set_arrows();
        engine.runRenderLoop(game.tick);
    }
}
function game_tick() {
    time_playing = (new Date().getTime() - time_start) / 1000;
    on_game_tick();
    if (music_loaded == 1 && music_playing == 0 && can_play_music == 1) {
        music.play();
        music_playing = 1;
    }
    var dt_ = engine.getDeltaTime();
    if (game.PLAYING && game.touch) {
        var keySpeed = 0.018 * dt_;
        if (game.keys.left) {
            game.touch.position.x -= keySpeed;
        }
        if (game.keys.right) {
            game.touch.position.x += keySpeed;
        }
        if (game.keys.left || game.keys.right) {
            // Clamp in camera_parent local space (same as mouse pick + setParent)
            var minX = -4;
            var maxX = 4;
            if (game.touch1 && game.touch1.getBoundingInfo && game.camera_parent) {
                try {
                    var bi = game.touch1.getBoundingInfo().boundingBox;
                    var inv = BABYLON.Matrix.Invert(game.camera_parent.getWorldMatrix());
                    var corners = bi.vectorsWorld;
                    if (!corners || !corners.length) {
                        corners = [
                            bi.minimumWorld,
                            bi.maximumWorld,
                            new BABYLON.Vector3(bi.minimumWorld.x, bi.minimumWorld.y, bi.maximumWorld.z),
                            new BABYLON.Vector3(bi.minimumWorld.x, bi.maximumWorld.y, bi.minimumWorld.z),
                            new BABYLON.Vector3(bi.minimumWorld.x, bi.maximumWorld.y, bi.maximumWorld.z),
                            new BABYLON.Vector3(bi.maximumWorld.x, bi.minimumWorld.y, bi.minimumWorld.z),
                            new BABYLON.Vector3(bi.maximumWorld.x, bi.minimumWorld.y, bi.maximumWorld.z),
                            new BABYLON.Vector3(bi.maximumWorld.x, bi.maximumWorld.y, bi.minimumWorld.z)
                        ];
                    }
                    minX = Number.POSITIVE_INFINITY;
                    maxX = Number.NEGATIVE_INFINITY;
                    for (var ci = 0; ci < corners.length; ci++) {
                        var local = BABYLON.Vector3.TransformCoordinates(corners[ci], inv);
                        if (local.x < minX) {
                            minX = local.x;
                        }
                        if (local.x > maxX) {
                            maxX = local.x;
                        }
                    }
                    if (!isFinite(minX) || !isFinite(maxX) || minX >= maxX) {
                        minX = -4;
                        maxX = 4;
                    }
                }
                catch (err) {
                    minX = -4;
                    maxX = 4;
                }
            }
            if (game.touch.position.x < minX) {
                game.touch.position.x = minX;
            }
            if (game.touch.position.x > maxX) {
                game.touch.position.x = maxX;
            }
        }
    }
    var arrows_x = game.arrows.position.x;
    var touch_x = game.touch.position.x;
    var move_x = (touch_x - arrows_x);
    var max_move = 0.01 * dt_;
    if (move_x < 0 && move_x < -max_move) {
        move_x = -max_move;
    }
    if (move_x > 0 && move_x > max_move) {
        move_x = max_move;
    }
    game.arrows.position.x += move_x;
    var animatable2 = game.anim_b.metadata.animatable;
    var current_way_pos = (game.way_len / 100) * animatable2.masterFrame;
    var current_frame = animatable2.masterFrame;
    game.items.forEach(function (element) {
        if (element.x < current_way_pos && element.waiting) {
            element.waiting = false;
            //power
            if (element.type == "p") {
                element.current_img = img_upgrade_ref;
                element.operation_str = "x";
                element.op_func = element.pow;
            }
            //add
            if (element.type == "a") {
                element.current_img = img_upgrade_ref;
                element.operation_str = "+";
                element.op_func = element.add;
            }
            //subt
            if (element.type == "s") {
                element.current_img = img_downgrade_ref;
                element.operation_str = "-";
                element.op_func = element.sub;
            }
            //div
            if (element.type == "d") {
                element.current_img = img_downgrade_ref;
                element.operation_str = "/";
                element.op_func = element.div;
            }
            animatable2.goToFrame((100 / game.way_len) * element.x);
            var newitem = game.downgrader.clone("clon", game.anim_b);
            newitem.metadata = {};
            newitem.metadata.item = element;
            newitem.metadata.waiting = true;
            newitem.material = game.downgrader.material.clone("mat");
            c2d.clearRect(0, 0, 200, 200);
            c2d.drawImage(element.current_img, 0, 0);
            c2d.textAlign = "center";
            c2d.lineWidth = 5;
            c2d.strokeStyle = "black";
            c2d.strokeText(element.operation_str + "" + element.value, 65, 65);
            c2d.fillStyle = "white";
            c2d.fillText(element.operation_str + "" + element.value, 65, 65);
            newitem.material.albedoTexture
                = new BABYLON.Texture(canvas_drawing.toDataURL(), scene);
            newitem.material.albedoTexture.hasAlpha = true;
            newitem.material.albedoTexture.wrapU = 0;
            newitem.material.albedoTexture.wrapV = 0;
            newitem.position = BABYLON.Vector3.Zero();
            newitem.position.x += element.y * 0.5;
            newitem.rotation = BABYLON.Vector3.Zero();
            newitem.setParent(null);
            animatable2.goToFrame(current_frame);
        }
    });
    scene.getMeshesByTags("grader").forEach(function (element) {
        if (game.current_collider.intersectsMesh(element, true) && element.metadata.waiting
            && Math.abs(game.last_x - element.metadata.item.x) > 5) {
            game.last_x = element.metadata.item.x;
            element.metadata.waiting = false;
            element.visibility = 0.51;
            BABYLON.Engine.audioEngine.useCustomUnlockedButton = true;
            BABYLON.Engine.audioEngine.unlock();
            if (element.metadata.item.type == "a" || element.metadata.item.type == "p") {
                game.sounds.up.play();
            }
            else {
                game.sounds.down.play();
            }
            game.ARROWS = Math.max(element.metadata.item.op_func(game.ARROWS), 1);
            gui_game.text_arrows.text = game.ARROWS.toString();
            game.set_arrows();
        }
        ;
    });
    scene.getMeshesByTags("knight").forEach(function (element) {
        if (game.current_collider.intersectsMesh(element, true, false) &&
            element.physicsImpostor == undefined) {
            BABYLON.Tags.RemoveTagsFrom(element, "knight");
            if (game.ARROWS >= element.metadata.arrows) {
                game.sounds.hit.play();
                if (element.metadata.number > BABYLON.DataStorage.ReadNumber(id_saver + "max", 0)) {
                    BABYLON.DataStorage.WriteNumber(id_saver + "max", element.metadata.number);
                    var flag = scene.getMeshByName("flag");
                    flag.position = element.position.clone();
                    flag.rotation = element.rotation.clone();
                    flag.movePOV(-0.81, 0, 0);
                    var flag_ = scene.getMeshByName("flag_");
                    flag_.visibility = 1;
                    scene.beginAnimation(flag_, 0, 30, false, 3);
                }
                element.physicsImpostor = new BABYLON.PhysicsImpostor(element, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0 }, scene);
                element.physicsImpostor.setDeltaPosition(new BABYLON.Vector3(0, -0.5, 0));
                var rand = function (a, b) { return ((Math.random() * (b - a)) + a); };
                var choos = function (a) { return a[Math.floor(Math.random() * a.length)]; };
                var v = element.calcMovePOV(rand(-6, 6), 5, rand(-20, -10));
                element.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(v.x, v.y, v.z));
                element.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(rand(3, 5) * choos([-1, 1]), rand(3, 5) * choos([-1, 1]), rand(3, 5) * choos([-1, 1])));
                game.COINS += Math.round(element.metadata.arrows * 11 * game.COIN_MULT);
                gui_game.text_coins.text = game.COINS.toString();
                game.ARROWS -= element.metadata.arrows;
                gui_game.text_arrows.text = game.ARROWS.toString();
                game.set_arrows();
                if (window.ArcadeTool && typeof ArcadeTool.onKnightDefeated === "function") {
                    ArcadeTool.onKnightDefeated(element.metadata.number);
                }
                if (element.metadata.number == 10) {
                    scene.beginAnimation(game.cofre2, 0, 10, false, 1, function () {
                        var wins = BABYLON.DataStorage.ReadNumber(id_saver + "wins", 0);
                        wins++;
                        on_win(wins);
                        BABYLON.DataStorage.WriteNumber(id_saver + "wins", wins);
                        gui_game.avd.addControl(gui_game.img_wins);
                        gui_game.avd.addControl(gui_game.text_wins);
                        gui_game.text_wins.text = "wins " + wins;
                        game.sounds.win.play();
                        game.sounds.win.setVolume(0.7);
                        gui_game.add_next_button();
                    });
                }
            }
            else {
                gui_game.add_next_button();
                game.ARROWS = 0;
                game.set_arrows();
                var animatable_ = game.current_anim.metadata.anim;
                animatable_.stop();
            }
        }
    });
    scene.render();
}
var game = {
    load: null,
    tick: null,
    file_loaded: null,
    files_count: 0,
    files_loaded: 0,
    t_x: 0, t_y: 0,
    way_len: 0,
    current_level: 0,
    level_lenght: 0,
    anim_scale: 0.4,
    envtext: null,
    engine: null,
    items: null,
    box_: null,
    current_anim: null,
    anim_b: null,
    camera_parent: null,
    touch: null,
    touch1: null,
    touch2: null,
    touch3: null,
    arrows: null,
    downgrader: null,
    upgrader: null,
    end_plat: null,
    knight: null,
    current_collider: null,
    cofre1: null,
    cofre2: null,
    test: null,
    arrows_visible1: null,
    arrows_visible2: null,
    text1: null,
    PLAYING: false,
    keys: { left: false, right: false },
    _keysBound: false,
    WIN: false,
    ARROWS: 1,
    ARROWS_AT_START: 1,
    COINS: 0,
    ARROW_UPDATE_INITIAL_PRICE: 100,
    COIN_UPDATE_INITIAL_PRICE: 100,
    ARROW_UPDATE_LEVEL: 0,
    COIN_UPDATE_LEVEL: 0,
    ARROW_UPDATE_PRICE: 0,
    COIN_UPDATE_PRICE: 0,
    CURRENT_LEVEL_TEMP: 1,
    CURRENT_LEVEL_VISIBLE: 1,
    COIN_PRICE_MULT: 1.35,
    ARROW_PRICE_MULT: 1.25,
    COIN_MULT: 1,
    COIN_MULT_MULT: 1.1,
    sounds: {
        down: null,
        up: null,
        hit: null,
        win: null
    },
    last_x: 0,
    dispose: function () {
        game.PLAYING = false;
        engine.stopRenderLoop(game.tick);
        scene.stopAllAnimations();
        scene.dispose();
    },
    start_run: function () {
        on_press_run();
        if (window.ArcadeTool && typeof ArcadeTool.onRunStart === "function") {
            ArcadeTool.onRunStart();
        }
        can_play_music = 1;
        gui_game.avd.removeControl(gui_game.title);
        gui_game.avd.removeControl(gui_game.update);
        var rand = function (l) { return ((Math.random() - 0.5) * l); };
        game.PLAYING = true;
        var animatable_ = scene.beginAnimation(game.current_anim, 0, 100, false, game.anim_scale, function () {
            on_level_end();
            var frameRate = 10;
            var xSlide = new BABYLON.Animation("xSlide", "position", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            var keyFrames = [];
            keyFrames.push({
                frame: 0,
                value: game.current_anim.position.clone()
            });
            keyFrames.push({
                frame: frameRate,
                value: game.anim_b.position.clone()
            });
            xSlide.setKeys(keyFrames);
            game.current_anim.animations = new Array();
            game.current_anim.animations.push(xSlide);
            var myAnim = scene.beginAnimation(game.current_anim, 0, frameRate, false, 0.1, function () {
                game.end_anim_end_game();
            });
            game.current_anim.metadata = { anim: myAnim };
            game.PLAYING = false;
            game.touch.position.x = 0;
        });
        animatable_.weight = 1;
    },
    levels_data: [
        { length: 69.0123 }, { length: 71.5812 }, { length: 87.8769 }, { length: 108.035 }, { length: 100.84 },
        { length: 117.856 },
        { length: 117.856 },
        { length: 117.856 },
        { length: 117.856 },
        { length: 117.856 },
        { length: 117.856 },
        { length: 117.856 },
        { length: 117.856 },
        { length: 117.856 },
        { length: 117.856 },
    ],
    set_arrows: function () {
        //set arrows
        var arrows = Math.min(game.ARROWS, 100);
        var lll = Math.floor(arrows / 10);
        var llll = (arrows - (lll * 10));
        for (var index = 0; index <= 9; index++) {
            game.arrows_visible2[index].isVisible = false;
        }
        var arrow_visible_;
        game.arrows_visible2[llll].isVisible = true;
        ;
        arrow_visible_ = game.arrows_visible2[llll];
        var parent_ = game.arrows_visible2[llll].parent;
        if (lll <= 9) {
            parent_.position = game.arrows_visible1[lll + 1].position.clone();
        }
        else {
            parent_.position = new BABYLON.Vector3(-99999, 9, 9);
        }
        parent_.isVisible = false;
        var current_group;
        for (var index = 1; index <= 10; index++) {
            game.arrows_visible1[index].isVisible = false;
            if (index <= lll) {
                game.arrows_visible1[index].isVisible = true;
                current_group = game.arrows_visible1[index];
            }
        }
        if (arrows < 10) {
            game.current_collider = arrow_visible_;
        }
        else {
            game.current_collider = scene.getMeshByName("arrows_group1");
        }
    },
    end_anim_end_game: function () {
        no_more_arrows();
        BABYLON.DataStorage.WriteNumber(id_saver + "COINS", game.COINS);
        BABYLON.DataStorage.WriteNumber(id_saver + "CURRENT_LEVEL_VISIBLE", game.CURRENT_LEVEL_VISIBLE + 1);
        BABYLON.DataStorage.WriteNumber(id_saver + "CURRENT_LEVEL_TEMP", game.CURRENT_LEVEL_TEMP + 1);
    }
};
var gui_game = {
    avd: null,
    btn_start: null,
    update: null,
    text_arrows: null,
    text_coins: null,
    title: null,
    btn_arrows: null,
    btn_arrow_price: null,
    btn_arrow_level: null,
    img_wins: null,
    text_wins: null,
    btn_coins: null,
    btn_coins_price: null,
    btn_coins_level: null,
    load: function () {
        gui_game.avd = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        gui_game.avd.idealHeight = 1028;
        //test / current level
        var text1 = new BABYLON.GUI.TextBlock("text1", "Level " + game.CURRENT_LEVEL_VISIBLE.toString());
        text1.fontFamily = font_name;
        game.text1 = text1;
        text1.fontSize = "40px";
        text1.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        gui_game.avd.addControl(text1);
        //title
        var img = new BABYLON.GUI.Image("img", "images/title.png");
        gui_game.avd.addControl(img);
        img.width = "412px";
        img.top = "-138px";
        img.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
        gui_game.title = img;
        //PANEL ARROWS
        var rect = new BABYLON.GUI.Rectangle("rect");
        gui_game.avd.addControl(rect);
        rect.height = (64) + "px";
        rect.width = (274) + "px";
        rect.top = "16px";
        rect.left = "16px";
        rect.thickness = 0;
        rect.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        rect.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        var image = new BABYLON.GUI.Image("panel_arrows", "images/panel_arrows.png");
        rect.addControl(image);
        var text2 = new BABYLON.GUI.TextBlock("text2", "1");
        gui_game.text_arrows = text2;
        text2.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        text2.fontFamily = font_name;
        text2.fontSize = "40px";
        text2.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        text2.top = "-16";
        text2.left = "80";
        text2.color = "black";
        rect.addControl(text2);
        //PANEL COINS
        var rect = new BABYLON.GUI.Rectangle("rect");
        gui_game.avd.addControl(rect);
        rect.height = (64) + "px";
        rect.width = (274) + "px";
        rect.top = "16px";
        rect.left = "-16px";
        rect.thickness = 0;
        rect.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        rect.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        var image = new BABYLON.GUI.Image("panel_arrows", "images/panel_coins.png");
        rect.addControl(image);
        var text2 = new BABYLON.GUI.TextBlock("text2", game.COINS.toString());
        gui_game.text_coins = text2;
        text2.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        text2.fontFamily = font_name;
        text2.fontSize = "40px";
        text2.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        text2.top = "-16";
        text2.left = "-80";
        rect.addControl(text2);
        //UPDATES
        var rect = new BABYLON.GUI.Rectangle("rect");
        gui_game.avd.addControl(rect);
        gui_game.update = rect;
        var size = 1.35;
        var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/btn_arrow.png");
        gui_game.btn_arrows = button;
        button.width = 122 * size + "px";
        button.height = 167 * size + "px";
        button.color = "white";
        button.thickness = 0;
        button.top = "230px";
        button.left = "-160px";
        button.metadata = {};
        button.background = "transparent";
        rect.addControl(button);
        button.onPointerUpObservable.add(function () {
            if (game.COINS >= game.ARROW_UPDATE_PRICE) {
                game.COINS -= game.ARROW_UPDATE_PRICE;
                game.ARROWS_AT_START++;
                game.ARROWS = game.ARROWS_AT_START;
                game.ARROW_UPDATE_LEVEL++;
                game.ARROW_UPDATE_PRICE = Math.ceil(game.ARROW_UPDATE_PRICE * game.ARROW_PRICE_MULT);
                gui_game.update_values();
                game.set_arrows();
            }
        });
        var text = new BABYLON.GUI.TextBlock("price", "$" + game.ARROW_UPDATE_PRICE);
        gui_game.btn_arrow_price = text;
        text.fontFamily = font_name;
        text.fontSize = "40";
        button.addControl(text);
        text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        text.outlineColor = "black";
        text.top = -9;
        text.outlineWidth = 2;
        button.metadata.price = text;
        var text = new BABYLON.GUI.TextBlock("level", "level" + game.ARROW_UPDATE_LEVEL);
        gui_game.btn_arrow_level = text;
        text.fontFamily = font_name;
        text.fontSize = "30";
        button.addControl(text);
        text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        text.outlineColor = "black";
        text.top = -59;
        text.outlineWidth = 2;
        button.metadata.price = text;
        var text = new BABYLON.GUI.TextBlock("name", "Mũi tên");
        text.fontFamily = font_name;
        text.fontSize = "40";
        button.addControl(text);
        text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        text.outlineColor = "black";
        text.top = 16;
        text.outlineWidth = 2;
        button.metadata.name = text;
        var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/btn_coin.png");
        gui_game.btn_coins = button;
        button.width = 122 * size + "px";
        button.height = 167 * size + "px";
        button.color = "white";
        button.thickness = 0;
        button.top = "230px";
        button.left = "160px";
        button.metadata = {};
        button.background = "transparent";
        rect.addControl(button);
        button.onPointerUpObservable.add(function () {
            if (game.COINS >= game.COIN_UPDATE_PRICE) {
                game.COINS -= game.COIN_UPDATE_PRICE;
                game.COIN_UPDATE_LEVEL++;
                game.COIN_UPDATE_PRICE = Math.ceil(game.COIN_UPDATE_PRICE * game.COIN_PRICE_MULT);
                game.COIN_MULT = game.COIN_MULT * game.COIN_MULT_MULT;
                gui_game.update_values();
                game.set_arrows();
            }
        });
        var text = new BABYLON.GUI.TextBlock("price2", "$100");
        gui_game.btn_coins_price = text;
        text.fontFamily = font_name;
        text.fontSize = "40";
        button.addControl(text);
        text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        text.outlineColor = "black";
        text.top = -9;
        text.outlineWidth = 2;
        button.metadata.price = text;
        var text = new BABYLON.GUI.TextBlock("Level", "level1");
        gui_game.btn_coins_level = text;
        text.fontFamily = font_name;
        text.fontSize = "30";
        button.addControl(text);
        text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        text.outlineColor = "black";
        text.top = -59;
        text.outlineWidth = 2;
        button.metadata.price = text;
        var text = new BABYLON.GUI.TextBlock("name", "Xu");
        text.fontFamily = font_name;
        text.fontSize = "40";
        button.addControl(text);
        text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        text.outlineColor = "black";
        text.top = 16;
        text.outlineWidth = 2;
        button.metadata.name = text;
        //button start
        var text_play = "";
        if (firts_play == 1) {
            text_play = "CHƠI";
        }
        var button = BABYLON.GUI.Button.CreateSimpleButton("btn", text_play);
        button.metadata = {
            img: function () {
                var img = new BABYLON.GUI.Image("img", "images/touch.png");
                img.width = "60px";
                img.height = "90px";
                img.left = 0;
                gui_game.btn_start.addControl(img);
                gui_game.btn_start.textBlock.text = "";
                var frameRate = 10;
                var xSlide = new BABYLON.Animation("xSlide", "left", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                var keyFrames = [];
                for (var index = 0; index < 10; index++) {
                    keyFrames.push({
                        frame: 40 * index + 0,
                        value: 0
                    });
                    keyFrames.push({
                        frame: 40 * index + 10,
                        value: 120
                    });
                    keyFrames.push({
                        frame: 40 * index + 30,
                        value: -120
                    });
                    keyFrames.push({
                        frame: 40 * index + 40,
                        value: 0
                    });
                }
                xSlide.setKeys(keyFrames);
                img.animations = new Array();
                img.animations.push(xSlide);
                /////             
                var frameRate = 10;
                var alp_anim = new BABYLON.Animation("xSlide", "alpha", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOANIOPMODE_CYCLE);
                var kf = [];
                kf.push({
                    frame: 0,
                    value: 1
                });
                kf.push({
                    frame: 90,
                    value: 1
                });
                kf.push({
                    frame: 100,
                    value: 0
                });
                alp_anim.setKeys(kf);
                //img.animations = new Array();
                img.animations.push(alp_anim);
                ////
                var myAnim = scene.beginAnimation(img, 0, 100, false);
            }
        };
        gui_game.btn_start = button;
        button.width = "1";
        button.height = "170px";
        button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        button.color = "black";
        button.thickness = 0;
        button.textBlock.fontFamily = font_name;
        button.textBlock.fontSize = 60;
        button.background = "transparent";
        gui_game.avd.addControl(button);
        button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        button.onPointerUpObservable.add(function () {
            if (gui_game.btn_start.textBlock.text == "CHƠI") {
                gui_game.btn_start.isPointerBlocker = false;
                gui_game.btn_start.metadata.img();
                game.start_run();
            }
        });
        var img = new BABYLON.GUI.Image("img_win", "images/win.png");
        img.height = "256px";
        img.width = "256px";
        img.top = "-200px";
        gui_game.img_wins = img;
        var txt = new BABYLON.GUI.TextBlock("txt_win", "win");
        gui_game.text_wins = txt;
        txt.fontFamily = font_name;
        txt.height = "200px";
        txt.color = "white";
        txt.top = "-60px";
        txt.outlineColor = "black";
        txt.outlineWidth = 3;
        txt.fontSize = "32";
        gui_game.update_values();
        if (window.ArcadeTool && typeof ArcadeTool.onHubReady === "function") {
            ArcadeTool.onHubReady();
        }
    },
    add_next_button: function () {
        if (window.ArcadeTool && typeof ArcadeTool.onRoundEnd === "function") {
            ArcadeTool.onRoundEnd();
        }
        var rect = new BABYLON.GUI.Rectangle("rect");
        gui_game.avd.addControl(rect);
        rect.background = "transparent";
        rect.color = "black";
        rect.thickness = 0;
        rect.height = "80px";
        rect.top = -54;
        rect.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        var btn = BABYLON.GUI.Button.CreateSimpleButton("btn", "Tiếp tục");
        btn.onPointerUpObservable.add(function () {
            on_press_continue();
            scene.stopAllAnimations();
            engine.stopRenderLoop(game.tick);
            scene.dispose();
            game.load(game.current_level + 1);
        });
        rect.addControl(btn);
        btn.textBlock.fontFamily = font_name;
        btn.thickness = 0;
        btn.textBlock.fontSize = 60;
    }, update_values: function () {
        BABYLON.DataStorage.WriteNumber(id_saver + "ARROW_UPDATE_LEVEL", game.ARROW_UPDATE_LEVEL);
        BABYLON.DataStorage.WriteNumber(id_saver + "ARROW_UPDATE_PRICE", game.ARROW_UPDATE_PRICE);
        BABYLON.DataStorage.WriteNumber(id_saver + "COIN_UPDATE_LEVEL", game.COIN_UPDATE_LEVEL);
        BABYLON.DataStorage.WriteNumber(id_saver + "COIN_UPDATE_PRICE", game.COIN_UPDATE_PRICE);
        BABYLON.DataStorage.WriteNumber(id_saver + "COIN_MULT", game.COIN_MULT);
        BABYLON.DataStorage.WriteNumber(id_saver + "COINS", game.COINS);
        BABYLON.DataStorage.WriteNumber(id_saver + "ARROWS", game.ARROWS_AT_START);
        gui_game.btn_arrow_level.text = "Level " + game.ARROW_UPDATE_LEVEL.toString();
        gui_game.btn_arrow_price.text = "$" + game.ARROW_UPDATE_PRICE.toString();
        gui_game.btn_coins_level.text = "Level " + game.COIN_UPDATE_LEVEL.toString();
        gui_game.btn_coins_price.text = "$" + game.COIN_UPDATE_PRICE.toString();
        gui_game.text_coins.text = game.COINS.toString();
    }
};
var id_saver = "ds_2021_8_arrows_fest_v3_";
var font_name = "Creamson";
var uri_game_root;
var engine;
var canvas;
var canvas_drawing;
var c2d;
var scene;
var img_downgrade_ref;
var img_upgrade_ref;
canvas_drawing = document.createElement("CANVAS");
canvas_drawing.height = 130;
canvas_drawing.width = 130;
c2d = canvas_drawing.getContext("2d");
var doc_font_fount = false;
c2d.font = "40px " + font_name;
c2d.strokeText("+1", 65, 65);
/*
if (document.fonts != undefined) {
    doc_font_fount = true;

    document.fonts.ready.then(function () {
        domcontent_load++;
        c2d.font = "40px " + font_name;
        c2d.strokeText("+1", 65, 65);


    });
    document.fonts.onloadingdone = function () {
        time_start = (new Date().getTime() / 1000);;
       
       
       
        init();
    }


}*/
var time_start = 0;
var domcontent_load = 0;
var music;
var music_loaded = 0;
var music_playing = 0;
var can_play_music = 0;
function pause_music() {
    music.pause();
}
function continue_music() {
    if (can_play_music == 1) {
        music.play();
    }
}
window.addEventListener("DOMContentLoaded", function () {
    if (window.Ammo !== undefined) {
        Ammo().then(function () {
            domcontent_load++;
            if (!doc_font_fount) {
                var boot = (window.ArcadeTool && ArcadeTool.ready)
                    ? ArcadeTool.ready
                    : Promise.resolve();
                boot.then(function () {
                    init();
                    on_window_load();
                    time_start = (new Date().getTime() / 1000);
                });
            }
        });
    }
    else {
        //init();
    }
});
var firts_play = 1;
var time_start = 0;
function init() {
    music = document.createElement("audio");
    music.src = "sounds/Happy_African_Village_by_John_Bartmann.mp3";
    music.loop = true;
    music.oncanplaythrough = function () {
        music_loaded = 1;
    };
    time_start = new Date().getTime();
    time_playing = new Date().getTime();
    on_window_load();
    canvas = document.getElementById("canvas");
    engine = new BABYLON.Engine(canvas);
    engine.displayLoadingUI = function () { };
    window.addEventListener("resize", function () {
        engine.resize();
    });
    //set game methods
    game.load = game_load;
    game.file_loaded = game_file_loaded;
    game.tick = game_tick;
    game.load(1);
    /*
    fetch('3d/root_game.babylon').then(function (response) {
        if (response.ok) {
            response.blob().then(function (miBlob) {
                var objectURL = URL.createObjectURL(miBlob);
                uri_game_root = objectURL;
                game.load(1);
            });
        } else {
            console.log('Respuesta de red OK pero respuesta HTTP no OK');
        }
    })
        .catch(function (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });*/
}
var item = /** @class */ (function () {
    function item(x_, y_, type_, value_) {
        this.waiting = true;
        this.x = x_;
        this.y = y_;
        this.type = type_;
        this.value = value_;
    }
    item.prototype.add = function (v) {
        return v += this.value;
    };
    item.prototype.pow = function (v) {
        return v *= this.value;
    };
    item.prototype.sub = function (v) {
        return v -= this.value;
    };
    item.prototype.div = function (v) {
        return v = Math.ceil(v / this.value);
    };
    return item;
}());
//# sourceMappingURL=main.js.map