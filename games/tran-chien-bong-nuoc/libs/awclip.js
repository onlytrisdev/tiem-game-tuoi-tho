class AWClip extends PIXI.Container {
    constructor(json, classname, level = 0) {
        super();
        this.json = json;
        this.classname = classname || "Root";
        this.fps = 0;
        this.totalFrames = 1;
        this.currentFrame = -1;
        this.labels = {};
        this.childrenPool = {};
        this.layers = [];
        this.layersName = {};
        this.time = 0;
        this.playable = false;
        this.speed = 1;
        this.multiplier = this.speed;
        this.wasPlayingBeforeStopAll = true;
        this.attribs = {};
        this.level = level;
        this.zIndex = 0;
        this.updatable = true;
        this.offset = { x: 0, y: 0 };
        this.scale_multiplier = { x: 1, y: 1 };
        this.callback = null;

        //console.log(this.classname);
        // console.log(this.level, this.classname, "CHILDREN", this.childrenPool.length);
        this.parse(json[this.classname]);
        this.update(0, true);

        if (DEBUG && this.level === 0) {
            console.log((" ".repeat(this.level)) + (" " + this.level + " -> ") + (this.classname));
            console.log("============================================");
        }
    }

    parse(config) {
        this.config = config;
        if (config.type === "movieclip") {
            this.fps = config.fps || 0;
            this.totalFrames = config.totalFrames || 1;
            this.labels = config.labels || this.labels;
            this.playable = true;
            for (let i = 0; i < config.layers.length; i++) {
                let keys = config.layers[i].keys;
                let old_class_name = "";
                for (let j in keys) {
                    const class_name = keys[j].classname;
                    if (class_name !== undefined && class_name !== "Text" && class_name !== old_class_name) {
                        this.getFreeChild(class_name, false);
                    }
                    old_class_name = class_name;
                }
                this.layers[i] = null;
                this.layersName[config.layers[i].name] = i;
            }
        }
    }

    getChildByLayerName(name) {
        let layerIndex = this.layersName[name];
        if (layerIndex !== undefined) {
            return this.layers[layerIndex];
        } else {
            return null;
        }
    }

    changeSpeed(speed) {
        this.speed = speed;
        if (this.multiplier !== 0) {
            this.play();
        }
    }

    play() {
        this.multiplier = this.speed;
    }

    playAll() {
        if (this.wasPlayingBeforeStopAll) {
            this.play();
        }
        for (let i = 0; i < this.layers.length; i++) {
            if (this.layers[i] && this.layers[i].playAll) {
                this.layers[i].playAll();
            }
        }
    }

    stop() {
        this.multiplier = 0;
    }

    stopAll() {
        this.wasPlayingBeforeStopAll = this.multiplier > 0;
        this.stop();
        for (let i = 0; i < this.layers.length; i++) {
            if (this.layers[i] && this.layers[i].stopAll) {
                this.layers[i].stopAll();
            }
        }
    }

    gotoAndPlay(frame, force = false) {
        if (force) {
            this.time = 0;
        }

        if (this.totalFrames === 1) {
            console.log("GOTO AND PLAY", this.classname);
        }

        let frame_num = 0;
        if (this.labels[frame] !== undefined) {
            frame_num = this.labels[frame].from;
        } else {
            frame_num = frame;
        }

        this.time = frame_num / this.fps;

        if (force) {
            this.update(0, true);
        }

        this.play();
    }

    gotoAndStop(frame, force = false) {
        if (force) {
            this.time = 0;
        }

        if (this.totalFrames === 1) {
            //console.log("GOTO AND STOP", this.classname);
        }

        let frame_num = 0;
        if (this.labels[frame] !== undefined) {
            frame_num = this.labels[frame].from;
        } else {
            frame_num = frame;
        }

        this.time = frame_num / this.fps;

        if (force) {
            this.update(0, true);
        }

        this.stop();
    }

    getCurrentLabel() {
        let frame = Math.floor(this.time * this.fps);
        for (let key in this.labels) {
            if (frame >= this.labels[key].from && frame <= this.labels[key].to) {
                return key;
            }
        }
        return "";
    }

    getFreeChild(classname, use_pool = true) {
        if (!this.childrenPool[classname]) {
            this.childrenPool[classname] = [];
        }

        if (use_pool) {
            for (let i = 0; i < this.childrenPool[classname].length; i++) {
                if (!this.childrenPool[classname][i].parent) {
                    return this.childrenPool[classname][i];
                }
            }
        }

        let child = null;

        if (this.json[classname].type === "movieclip") {
            child = new AWClip(this.json, classname, this.level + 1);
        } else if (this.json[classname].type === "bitmap") {
            child = PIXI.Sprite.from("./" + this.json[classname].asset);
            child.inner_scale = this.json[classname].scale;
            child.anchor.x = (-this.json[classname].position[0] * child.inner_scale) / child.width;
            child.anchor.y = (-this.json[classname].position[1] * child.inner_scale) / child.height;
            child.offset = { x: 0, y: 0 };
            child.scale_multiplier = { x: 1, y: 1 };
            child.classname = classname;
        }

        this.childrenPool[classname].push(child);
        return child;
    }

    getTextField(key) {
        let tf = new PIXI.Text(key.text.replace("|", "\n"), {
            fontFamily: key.font,
            fontSize: key.size + "px",
            fill: key.color,
            align: key.alignment,
            padding: 1
        });
        // tf.style.lineHeight = key.size * 2;
        let offset = {
            x: 0,
            y: 0
        };

        if (key.alignment === "left") {
            tf.anchor.x = 0;
            tf.anchor.y = 0;
        } else if (key.alignment === "center") {
            tf.anchor.x = 0.5;
            tf.anchor.y = 0;
            // offset.x = key.width / 2;
        } else if (key.alignment === "right") {
            tf.anchor.x = 1;
            tf.anchor.y = 0;
            // offset.x = key.width;
        }
        // tf.width = key.width;
        // tf.height = key.height;
        // tf.x = key.matrix.tx + offset.x;
        tf.y = key.matrix.ty + 3;
        tf.textBaseline = "middle";
        tf.name = key.instancename;
        tf.classname = key.classname;
        tf.updateText();
        return tf;
    }

    getBezierHeight(points, t) {
        let i = 3;
        while (t > points[i][0]) {
            i += 3;
        }

        let p0 = points[i - 3];
        let p1 = points[i - 2];
        let p2 = points[i - 1];
        let p3 = points[i - 0];
        t = (t - p0[0]) / (p3[0] - p0[0]);
        let height = Math.pow((1 - t), 3) * p0[1] + 3 * Math.pow((1 - t), 2) * t * p1[1] + 3 * (1 - t) * Math.pow(t, 2) * p2[1] + Math.pow(t, 3) * p3[1];
        return height;
    }

    getCurrentKeyIndex(keysArray, currentTime, currentFPS) {
        currentTime *= currentFPS;
        for (let i = 0; i < keysArray.length; i++) {
            if (currentTime >= keysArray[i].from && currentTime < keysArray[i].to + 1) {
                return i;
            }
        }

        return -1;
    }

    update(dt, firstUpdate) {
        if (!this.visible) { //to avoid update if it's not visible
            return;
        }

        if (this.playable && (this.parent || firstUpdate)) {
            this.time += dt * this.multiplier;
            if (this.time >= ((this.totalFrames) / this.fps)) {
                this.time = 0;
            }

            let frame = Math.floor(this.time * this.fps);
            let isNewFrame = false;
            if (this.currentFrame !== frame) {
                isNewFrame = true;
                this.currentFrame = frame;
            }

            for (let i = 0; i < this.config.layers.length; i++) {
                let layerData = this.config.layers[i];

                // -- LOCALE HACK
                if (layerData.name.indexOf("locale_") !== -1) {
                    const lang = layerData.name.split("_")[1];
                    if (lang.toLowerCase() !== window.lang.toLowerCase()) {
                        continue;
                    }
                }
                // -- END LOCALE HACK

                let keyIndex = this.getCurrentKeyIndex(layerData.keys, this.time, this.fps);
                if (keyIndex === -1) {
                    continue;
                }

                let keyData = layerData.keys[keyIndex];
                let nextKeyData = layerData.keys[keyIndex + 1];
                let from = keyData.from / this.fps;
                let to = (keyData.to + 1) / this.fps;

                if (this.layers[i]) {
                    if (this.layers[i].classname !== keyData.classname) {
                        if (this.layers[i].resetTime) {
                            this.layers[i].resetTime();
                        }

                        if (this.layers[i].parent) {
                            this.layers[i].parent.removeChild(this.layers[i]);
                        }
                        this.layers[i] = null;
                    }
                }

                if (keyData.classname !== undefined) {
                    if (this.layers[i] === null) {
                        let child = keyData.classname === "Text" ? this.getTextField(keyData) : this.getFreeChild(keyData.classname);
                        child.name = keyData.instancename;
                        this.layers[i] = child;
                        this.addChild(child);
                        child.zIndex = i;
                    }

                    this.updateLayer(dt * this.speed, this.layers[i], keyData, from, to, nextKeyData, this.totalFrames);
                }

                if (isNewFrame && keyData.actions) {
                    let actionsString = keyData.actions.toString();
                    let hasSoundFunc = actionsString.indexOf("soundmanager") !== -1;
                    if ((firstUpdate && !hasSoundFunc) || !firstUpdate) {
                        keyData.actions(this);
                    }
                }
            }

            if (this.totalFrames === 1) {
                this.updatable = false;
            }
        } else {
            this.time = 0;
        }

        if (this.children.length > 1) {
            this.children.sort(this.sort_children);
        }
    }

    sort_children(a, b) {
        return a.zIndex - b.zIndex;
    }

    resetTime() {
        this.time = 0;
        this.play();
        for (let i = 0; i < this.layers.length; i++) {
            let layer = this.layers[i];
            if (layer && layer.resetTime) {
                layer.resetTime();
            }
        }
    }

    updateLayer(dt, mc, keyData, from, to, nextKeyData) {
        if (mc.classname === "Text") {
            return;
        }

        if (this.updatable) {
            let posX = keyData.transform[0];
            let posY = keyData.transform[1];
            let sclX = keyData.transform[2];
            let sclY = keyData.transform[3];
            let skwX = keyData.transform[4];
            let skwY = keyData.transform[5];
            let alpha = keyData.alpha;
            let visible = keyData.visible;
            let posXDiff = 0;
            let posYDiff = 0;
            let sclXDiff = 0;
            let sclYDiff = 0;
            let skwXDiff = 0;
            let skwYDiff = 0;
            let alphaDiff = 0;

            if (keyData.tween && nextKeyData && nextKeyData.classname) {
                let t = Math.min(1, Math.max((this.time - from) / (to - from), 0));
                let pr = 0;
                let scr = 0;
                let skr = 0;
                let ar = 0;

                if (keyData.easing.all) {
                    pr = scr = skr = ar = this.getBezierHeight(keyData.easing.all, t);
                }

                if (keyData.easing.position) {
                    pr = this.getBezierHeight(keyData.easing.position, t);
                }

                if (keyData.easing.scale) {
                    scr = this.getBezierHeight(keyData.easing.scale, t);
                }

                if (keyData.easing.rotation) {
                    skr = this.getBezierHeight(keyData.easing.rotation, t);
                }

                if (keyData.easing.color) {
                    ar = this.getBezierHeight(keyData.easing.color, t);
                }

                posXDiff = (nextKeyData.transform[0] - posX) * pr;
                posYDiff = (nextKeyData.transform[1] - posY) * pr;
                sclXDiff = (nextKeyData.transform[2] - sclX) * scr;
                sclYDiff = (nextKeyData.transform[3] - sclY) * scr;

                skwXDiff = nextKeyData.transform[4] - skwX;
                if (skwXDiff < -Math.PI) {
                    skwXDiff += Math.PI * 2;
                }
                if (skwXDiff > Math.PI) {
                    skwXDiff -= Math.PI * 2;
                }
                skwXDiff = skwXDiff * skr;

                skwYDiff = nextKeyData.transform[5] - skwY;
                if (skwYDiff < -Math.PI) {
                    skwYDiff += Math.PI * 2;
                }
                if (skwYDiff > Math.PI) {
                    skwYDiff -= Math.PI * 2;
                }
                skwYDiff = skwYDiff * skr;

                alphaDiff = (nextKeyData.alpha - alpha) * ar;
            }
            this.setMCProperties(mc, posX + posXDiff, posY + posYDiff, sclX + sclXDiff, sclY + sclYDiff, skwX + skwXDiff, skwY + skwYDiff, alpha + alphaDiff, visible, keyData.texture);
        }

        for (let attribKey in mc.attribs) {
            if (attribKey.indexOf(".") !== -1) {//DOING THIS TO SUPPORT COMPLEX CHAIN PROPERTIES like mc.scale.x
                let chain = attribKey.split("."), link;
                for (let i = 0; i < chain.length - 1; i++) {
                    link = mc[chain[i]];
                }
                link[chain[chain.length - 1]] = mc.attribs[attribKey];
            } else {
                mc[attribKey] = mc.attribs[attribKey];
            }
        }

        if (mc.update) {
            mc.update(dt);
        }
    }

    setMCProperties(mc, x, y, scx, scy, skx, sky, alpha, visible, texture) {
        mc.x = mc.offset.x + x;
        mc.y = mc.offset.y + y;
        mc.scale.x = (scx / (mc.inner_scale || 1)) * mc.scale_multiplier.x;
        mc.scale.y = (scy / (mc.inner_scale || 1)) * mc.scale_multiplier.y;
        mc.skew.x = skx;
        mc.skew.y = sky;
        mc.alpha = alpha;
        mc.visible = visible;

        if (texture == undefined || mc.texture == texture) return;
        mc.texture = texture;
    }

    setBlendMode(pixiBlendMode) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].blendMode !== undefined) {
                this.children[i].blendMode = pixiBlendMode;
            } else if (this.children[i].setBlendMode) {
                this.children[i].setBlendMode(pixiBlendMode);
            }
        }
    }

    dispose() {
        //console.log("mc dispose");
        this.json = null;
        this.classname = null;
        this.labels = null;
        this.callback = null;

        for (let classname in this.childrenPool) {
            for (let i = this.childrenPool[classname].length - 1; i > -1; i--) {
                if (this.childrenPool[classname][i] && this.childrenPool[classname][i].constructor.name === "Text") {
                    //console.log("text pool");
                    this.childrenPool[classname][i].destroy(true, true, true);
                } else if (this.childrenPool[classname][i] && this.childrenPool[classname][i].dispose) {
                    this.childrenPool[classname][i].dispose();
                } else if (this.childrenPool[classname][i] && this.childrenPool[classname][i].destroy) {
                    // this.childrenPool[classname][i].destroy();
                }
                this.childrenPool[classname][i] = null;
            }
            this.childrenPool[classname].length = 0;
            delete this.childrenPool[classname];
        }

        for (let i = this.layers.length - 1; i > -1; i--) {
            if (this.layers[i] && this.layers[i].constructor.name === "Text") {
                //console.log("text layer");
                this.layers[i].destroy(true, true, true);
            } else if (this.layers[i] && this.layers[i].dispose) {
                this.layers[i].dispose();
            } else if (this.layers[i] && this.layers[i].destroy) {
                // this.layers[i].destroy();
            }
            this.layers[i] = null;
        }

        this.layers.length = 0;
        this.layersName = null;
        this.attribs = null;
        this.destroy();
    }
}