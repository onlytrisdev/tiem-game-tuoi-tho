//import { DEBUG, DESIGN_WIDTH, DESIGN_HEIGHT } from "../js/main.js";

class ContainerPlus extends PIXI.Container {
    constructor() {
        super();

        this.anchors = [];

        this.create_anchors();
    }

    on_screen_resize(width, height) {
    }

    create_anchors() {
        let names = [
            "top_left", "top", "top_right",
            "left", "center", "right",
            "bottom_left", "bottom", "bottom_right"
        ];

        for (let i = 0; i < 9; i++) {
            this.anchors[i] = new PIXI.Container();
            this.anchors[i].name = names[i];
            this.addChild(this.anchors[i]);

            if (DEBUG) {
                let graph = new PIXI.Graphics();
                graph.beginFill(0x000000);
                graph.lineStyle(1, 0xFFFFFF);
                graph.drawRect(-10, -10, 20, 20);
                this.anchors[i].addChild(graph);
            }
        }
    }

    reposition_anchors(width, height) {
        for (let i = 0; i < 9; i++) {
            this.anchors[i].x = (width / 2) * (i % 3);
            this.anchors[i].y = (height / 2) * Math.floor(i / 3);
        }

        this.on_screen_resize(width, height);
    }

    addChild(child) {
        super.addChild(child);
    }

    addChildAt(child, index = 0) {
        super.addChildAt(child, index);
    }

    scaleToFit(asset, modScale = 1, resolveWider = true, resolveTaller = true) {

        let scale = 1;
        let windowRatio = (window.innerWidth / window.innerHeight),
            nativeRatio = (DESIGN_WIDTH / DESIGN_HEIGHT);
        //console.log(windowRatio, nativeRatio);
        if (windowRatio > nativeRatio && resolveWider) {//WIDER
            scale = windowRatio / nativeRatio;
        } else if (windowRatio < nativeRatio && resolveTaller) {//TALLER
            scale = nativeRatio / windowRatio;
        }
        asset.scale.set(scale * modScale);
    }
}