class SoundDebug extends Screen {
    constructor() {
        super();

        this.dragging = false;
        this.dragdata = null;
        this.dragLastPosY = 0;
        this.open = false;
        this.lastWidth = 0;
        this.lastHeight = 0;
        this.maxCols = 0;
        this.maxRows = 0;
        this.widgetWidth = 200;
        this.widgetHeight = 100;
        this.toggleButtonSize = 50;
        this.downloadButtonWidth = 150;
        this.downloadButtonHeight = 50;
        this.topMargin = 150;
        this.volumeMod = 0.1;
        this.sound = {};

        this.soundWidgetContainer = new PIXI.Container();
        this.soundWidgetContainer.interactive = true;
        this.addChild(this.soundWidgetContainer);

        // events for drag start
        this.soundWidgetContainer.on('pointerdown', this.onDragStart.bind(this));
        // events for drag end
        this.soundWidgetContainer.on('pointerup', this.onDragEnd.bind(this));
        this.soundWidgetContainer.on('pointerupoutside', this.onDragEnd.bind(this));
        // events for drag move
        this.soundWidgetContainer.on('pointermove', this.onDragMove.bind(this));
    }

    enter() {
        super.enter();

        this.addToggleButton(this.toggleButtonSize, this.toggleButtonSize);

        this.addDownloadButton(this.downloadButtonWidth, this.downloadButtonHeight);
    }

    addToggleButton(width, height) {
        let toggle = new PIXI.Graphics();

        toggle.beginFill(0x000000, 0.8);
        toggle.drawRect(-width / 2, 0, width, height);
        toggle.endFill();

        toggle.lineStyle(3, 0xffffff);
        toggle.moveTo(-width / 4, height / 3);
        toggle.lineTo(0, height / 1.5);
        toggle.lineTo(width / 4, height / 3);

        this.addChild(toggle);

        this.addButton("toggle", toggle, () => {
            this.open = !this.open;
            this.updateWidgets(this.open);
        });
    }

    addDownloadButton(width, height) {
        let buttonContainer = new PIXI.Container();
        let background = new PIXI.Graphics();

        background.beginFill(0x000000, 0.8);
        background.drawRect(0, 0, width, height);
        background.endFill();

        let title = new PIXI.Text("Download", { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff });
        title.anchor.set(0.5, 0.5);
        title.x = width * 0.5;
        title.y = height * 0.5;

        buttonContainer.addChild(background);
        buttonContainer.addChild(title);

        this.addChild(buttonContainer);

        this.addButton("download", buttonContainer, () => {
            let newConfig = {};
            newConfig["window"] = {};
            newConfig.window["SOUND_CONFIG"] = {};
            for (let i in soundmanager.sound) {
                newConfig.window.SOUND_CONFIG[i] = { volume: soundmanager.sound[i]._volume };
                if (soundmanager.sound[i]._loop) {
                    newConfig.window.SOUND_CONFIG[i]["loop"] = -1;
                }
                if (soundmanager.sound[i].polyphony) {
                    newConfig.window.SOUND_CONFIG[i]["polyphony"] = soundmanager.sound[i].polyphony.length;
                }
                if (soundmanager.sound[i].interrupt_delay) {
                    newConfig.window.SOUND_CONFIG[i]["interrupt_delay"] = soundmanager.sound[i].interrupt_delay;
                }
            }
            this.saveFile(newConfig);
        });
    }

    addSoundWidget(id, width, height) {
        let buttonContainer = new PIXI.Container();

        let background = new PIXI.Graphics();
        background.beginFill(0x000000, 0.8);
        background.lineStyle(2, 0xffffff);
        background.drawRect(0, 0, width, height);
        background.endFill();

        let title = new PIXI.Text(id, { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff });
        title.anchor.set(0.5, 0.5);
        title.x = width * 0.5;
        title.y = height * 0.2;

        let volume = new PIXI.Text("" + 9999, { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff });
        volume.anchor.set(0, 0.5);
        volume.name = "volume";
        volume.x = width * 0.2;
        volume.y = height * 0.7;

        buttonContainer.addChild(background);
        buttonContainer.addChild(title);
        buttonContainer.addChild(volume);

        let down = this.addVolumeButton(id, true, this.widgetWidth / 10, this.widgetWidth / 10);
        let up = this.addVolumeButton(id, false, this.widgetWidth / 10, this.widgetWidth / 10);

        down.x = width * 0.6;
        down.y = height * 0.75;

        up.x = width * 0.6;
        up.y = height * 0.45;

        buttonContainer.addChild(down);
        buttonContainer.addChild(up);

        this.soundWidgetContainer.addChild(buttonContainer);

        return { asset: buttonContainer };
    }

    addVolumeButton(id, down, width, height) {

        let state = down ? "down" : "up";
        let dir = down ? -1 : 1;

        let background = new PIXI.Graphics();

        background.beginFill(0x000000, 0.8);
        background.drawRect(-width / 2, 0, width, height);
        background.endFill();

        background.lineStyle(2, 0xffffff);
        if (dir === -1) {
            background.moveTo(-width / 4, height / 3);
            background.lineTo(0, (height / 1.5));
            background.lineTo(width / 4, (height / 3));
        } else {
            background.moveTo(-width / 4, (height / 1.5));
            background.lineTo(0, (height / 3));
            background.lineTo(width / 4, (height / 1.5));
        }

        let buttonContainer = new PIXI.Container();
        buttonContainer.addChild(background);

        this.addButton(id + "_" + state, buttonContainer, () => {

            let newVolume = soundmanager.sound[id]._volume;

            if (dir === -1) newVolume -= 0.1;
            else if (dir === 1) newVolume += 0.1;

            newVolume = Math.min(Math.max(newVolume, 0), 1);
            newVolume = Number(newVolume.toFixed(3));
            if (SOUND_CONFIG[id]) SOUND_CONFIG[id].volume = newVolume;
            soundmanager.setVolume(id, newVolume);
            this.updateWidgets();
        });

        return buttonContainer;
    }

    update(dt) {
        super.update(dt);
    }

    on_screen_resize(width, height) {

        this.lastWidth = width;
        this.lastHeight = height - this.topMargin;

        let topAnchor = this.getChildByName("top");
        this.buttons["toggle"].container.x = topAnchor.x;
        this.buttons["toggle"].container.y = topAnchor.y;

        this.buttons["download"].container.x = topAnchor.x + 50;
        this.buttons["download"].container.y = topAnchor.y;

        this.updateWidgets(this.open);

        this.soundWidgetContainer.y = 0;
    }

    updateWidgets(visible) {
        let qty = 0;
        for (let i in soundmanager.sound) {
            if (!this.sound[i]) {
                this.sound[i] = this.addSoundWidget(i, this.widgetWidth, this.widgetHeight);
            }
            qty++;
        }
        let col = 0, row = 0;
        this.maxCols = Math.floor(this.lastWidth / this.widgetWidth);
        //this.maxRows = Math.floor(this.lastHeight / this.widgetHeight);

        let widthRest = this.lastWidth - (this.widgetWidth * this.maxCols);
        /* let heightRest = this.lastHeight - (this.widgetHeight * this.maxCols); */

        for (let i in this.sound) {
            this.sound[i].asset.x = (widthRest / 2) + (col * this.widgetWidth);
            this.sound[i].asset.y = this.topMargin + (row * this.widgetHeight);
            this.sound[i].asset.getChildByName("volume").text = "" + soundmanager.sound[i]._volume;
            if (visible !== null && visible !== undefined) this.sound[i].asset.visible = visible;
            col++;
            if (col >= this.maxCols) {
                col = 0;
                row++;
                this.maxRows = row;
            }
        }
    }

    saveFile(object) {

        object = JSON.stringify(object);

        object = object.substring(1, object.length);
        object = object.replace(/"/g, '');
        object = object.replace(/window:/g, 'window.');
        object = object.replace(/{SOUND_CONFIG:/g, 'SOUND_CONFIG=');
        object = object.substring(0, object.length - 2);

        let type = 'text/plain';
        let filename = 'sfx.js';
        let file = new Blob([object], {
            type: type
        });
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            let a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }

    onDragStart(event) {
        // store a reference to the data
        // the reason for this is because of multitouch
        // we want to track the movement of this particular touch
        this.dragdata = event.data;
        this.dragging = true;
        this.dragLastPosY = event.data.global.y;
    }

    onDragEnd() {
        this.dragging = false;
    }

    onDragMove(event) {
        if (this.dragging) {
            //console.log("drag move");
            let newPosY = event.data.global.y;

            this.soundWidgetContainer.y += newPosY - this.dragLastPosY;

            let screenHeight = this.lastHeight + this.topMargin;
            let widgetsHeight = (this.widgetHeight * this.maxRows) + (this.topMargin * 2);
            let heightRest = screenHeight - widgetsHeight;

            this.soundWidgetContainer.y = Math.min(Math.max(this.soundWidgetContainer.y, heightRest), 0);

            this.dragLastPosY = this.dragdata.global.y;
        }
    }
}