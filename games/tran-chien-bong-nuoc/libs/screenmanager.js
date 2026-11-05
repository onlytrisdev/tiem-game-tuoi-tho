//import { SCREENS } from "../js/config/screens.js";
//import { Button } from "./button.js";
//import { ContainerPlus } from "./container_plus.js";
//import { SoundButton } from "./sound_button.js";

class ScreenManager extends PIXI.Container {
    constructor(canvasWidth, canvasHeight) {
        super();
        this.screens = [];
        this.screensQueue = [];
        this.middleloaderscreen;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.last_offsetX = 0;
        this.last_offsetY = 0;
        this.last_width = 0;
        this.last_height = 0;

        for (let i in SCREENS) {
            if (SCREENS[i].at_start) {
                console.log("adding screen at start " + i);
                if (SCREENS[i].class) this.change(eval(SCREENS[i].class))
                else this.change(i);
            }
        }
    }

    add(name, ...args) {//internal uses
        let c = eval(name);
        let ns = new c();
        this.screens.push(ns);
        this.addChild(ns);
        let screenName = name.name.toLowerCase();
        let screenConfig = SCREENS[screenName];

        let updateParent = (screenConfig && screenConfig.update_parent) | false;
        let isPopup = (screenConfig && screenConfig.popup) | false;
        let hideParent = (screenConfig && screenConfig.hide_parent) | false;
        let isOverlay = (screenConfig && screenConfig.overlay) | false;

        if (updateParent) ns.updateParent = true;

        if (isOverlay) ns.isOverlay = true;
        else if (isPopup) ns.isPopup = true;

        if (hideParent) ns.hideParent = true;

        ns.enter(...args);
        ns.reposition_anchors(this.last_width, this.last_height);
    }

    change(name, ...args) {//USE manually
        let screenName = name.name.toLowerCase();
        let c = eval(name);
        let isPopup = (SCREENS[screenName] && SCREENS[screenName].popup) | false;
        let isOverlay = (SCREENS[screenName] && SCREENS[screenName].overlay) | false;
        let hasAnInstance = this.hasAnInstance(screenName);

        if (isOverlay) {
            this.screensQueue.push({ overlay: c, data: args });
        } else if (isPopup) {
            if (!hasAnInstance)
                this.screensQueue.push({ popup: c, data: args });
        } else {
            this.screensQueue.push({ add: c, data: args });
            for (let i in this.screens) {
                if (!this.screens[i].isOverlay) this.screensQueue.push({ remove: this.screens[i] });
            }
        }
    }

    close(name) {
        this.screensQueue.push({ remove: name });
    }

    load(name, ...args) {//USE manually
        let className = name.name.toLowerCase();
        //console.log("load: " + className);
        let atlasToLoad = SCREENS[className] && SCREENS[className].atlas;
        if (atlasToLoad && atlasToLoad.length > 0 || SCREENS[className].load_sound) {//FOR now only atlas+sound
            args.unshift(name);
            this.screensQueue.push({ add: this.middleloaderscreen, data: args });
        } else {
            this.screensQueue.push({ add: name, data: args });
        }
        for (let i in this.screens) {
            this.screensQueue.push({ remove: this.screens[i] });
        }
    }

    remove(screen) {
        let index = this.screens.indexOf(screen);
        this.screens.splice(index, 1);
        let ts = this.getTopScreen();
        if (screen.isOverlay) {
            screen.dispose();
            screen.destroy();
            console.log("overlay screen destroyed");
        }
        else if (screen.isPopup && ts) {
            ts.exitStack();
            screen.dispose();
            screen.destroy();
            console.log("stacked screen destroyed");
        } else {
            screen.exit();
            screen.dispose();
            screen.destroy();
            console.log("regular screen destroyed");
        }
    }

    update(dt) {

        let ts = this.getTopScreen();
        if (ts) {
            ts.update(dt);
            if (ts.updateParent) {
                let parentScreen = this.getParentScreen();
                if (parentScreen) parentScreen.update(dt);
            }
            if (ts.hideParent) {
                let parentScreen = this.getParentScreen();
                if (parentScreen) parentScreen.visible = false;
            }
        }
        for (let i = this.screensQueue.length - 1; i > -1; i--) {
            if (this.screensQueue[i].remove) {
                this.remove(this.screensQueue[i].remove);
            }
            if (this.screensQueue[i].add) {
                let args = [];
                args.push(this.screensQueue[i].add);
                for (let k = 0; k < this.screensQueue[i].data.length; k++) {
                    args.push(this.screensQueue[i].data[k]);
                }
                this.add(...args);
            }
            if (this.screensQueue[i].popup) {
                ts.enterStack();
                let args = [];
                args.push(this.screensQueue[i].popup);
                for (let k = 0; k < this.screensQueue[i].data.length; k++) {
                    args.push(this.screensQueue[i].data[k]);
                }
                this.add(...args);
            }
            if (this.screensQueue[i].overlay) {
                let args = [];
                args.push(this.screensQueue[i].overlay);
                for (let k = 0; k < this.screensQueue[i].data.length; k++) {
                    args.push(this.screensQueue[i].data[k]);
                }
                this.add(...args);
            }
            this.screensQueue.splice(i, 1);
        }
        for (let m = 0; m < this.screens.length; m++) {//update overlay screens
            let sc = this.screens[m];
            if (sc.isOverlay) {
                sc.update(dt);
                sc.parent.setChildIndex(sc, sc.parent.children.length - 1);
            }
        }
    }

    getTopScreen() {
        for (let i = this.screens.length - 1; i > -1; i--) {
            let screen = this.screens[i];
            if (screen.isOverlay) continue;
            //console.log("top screen: " + screen.constructor.name, screen.isOverlay);
            return screen;
        }
        return;
    }

    hasAnInstance(className) {
        for (let i = this.screens.length - 1; i > -1; i--) {
            let screen = this.screens[i];
            if (screen.constructor.name.toLowerCase() === className) return true;
        }
        for (let i = this.screensQueue.length - 1; i > -1; i--) {
            let screen = this.screensQueue[i];
            if (screen.add && screen.add.name.toLowerCase() === className) return true;
            if (screen.popup && screen.popup.name.toLowerCase() === className) return true;
            if (screen.overlay && screen.overlay.name.toLowerCase() === className) return true;
        }
        return false;
    }

    getParentScreen() {
        for (let i = this.screens.length - 1; i > -1; i--) {
            let screen = this.screens[i];
            if (screen.isOverlay || i < this.screens.length - 1) continue;

            return screen;
        }
        return;
    }

    resize_screens(width, height) {
        this.last_width = width;
        this.last_height = height;

        for (let i = 0; i < this.screens.length; i++) {
            this.screens[i].reposition_anchors(width, height);
        }
    }
}

class Screen extends ContainerPlus {
    constructor() {
        super();
        this.isPopup = false;
        this.updateParent = false;
        this.hideParent = false;
        this.isOverlay = false;
        this.updateMC = [];
        this.mcToRemove = [];
        this.buttons = {};
    }

    addButton(name, asset, click, over, out) {
        if (!this.buttons[name]) {
            this.buttons[name] = new Button(asset, click, over, out);
        }
    }

    addSoundButton(name, asset) {
        if (!this.buttons[name]) {
            this.buttons[name] = new SoundButton(asset);
        }
    }

    addSfxButton(name, asset, callback = null) {
        if (!this.buttons[name]) {
            this.buttons[name] = new SfxButton(asset, callback);
        }
    }

    addMusicButton(name, asset) {
        if (!this.buttons[name]) {
            this.buttons[name] = new MusicButton(asset);
        }
    }

    removeButton(name) {
        if (this.buttons[name]) {
            this.buttons[name].dispose();
            delete this.buttons[name];
        }
    }

    alignAnchor(container, name, anchorname) {
        if (!anchorname) anchorname = name;
        container.getChildByLayerName(name).attribs.x = this.getChildByName(anchorname).x;
        container.getChildByLayerName(name).attribs.y = this.getChildByName(anchorname).y;

        container.update(0);//To avoid visual glitch
    }

    addMC(child, parent = null, index = -1) {
        if (parent === null && child.parent === null) {
            super.addChild(child);
        } else if (parent) {
            parent.addChild(child);
        }
        if (index !== -1) {
            child.parent.addChildAt(child, index);
        }
        this.updateMC.push(child);
    }

    removeMC(child, destroy = false) {
        //console.log("remove: " + child);
        this.mcToRemove.push({ child: child, destroy: destroy });
    }

    enter() {
        console.log(this.constructor.name + "::enter");
    }

    enterStack() {
        console.log(this.constructor.name + "::enterStack");
        this.interactiveChildren = false;
    }

    update(dt) {
        for (let i in this.updateMC) {
            this.updateMC[i].update(dt);
        }
        this.removeMCs();
    }

    exitStack() {
        console.log(this.constructor.name + "::exitStack");
        this.interactiveChildren = true;
        this.visible = true;
    }

    exit() {
        console.log(this.constructor.name + "::exit");
    }

    removeMCs() {

        for (let i in this.mcToRemove) {
            let mc = this.mcToRemove[i].child;
            let canDestroy = this.mcToRemove[i].destroy;
            let updateIndex = this.updateMC.indexOf(mc);
            this.updateMC.splice(updateIndex, 1);
            this.mcToRemove.splice(i, 1);

            if (mc.parent !== null) mc.parent.removeChild(mc);

            if (canDestroy) {
                mc.dispose();
            }
        }
    }

    dispose() {
        for (let i in this.updateMC) {
            this.removeMC(this.updateMC[i]);
        }
        this.removeMCs();
        for (let i in this.buttons) {
            this.buttons[i].dispose();
        }
        this.buttons = null;
    }
}
