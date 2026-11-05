
class SoundButton extends Button {
    constructor(container, click = null, down = null, up = null, buttonMode = true) {
        click = function () { };//HACKY
        super(container, click, down, up, buttonMode);
        update_sound_button(container);
    }

    on_click(evt) {
        super.on_click(evt);
        toggle_sound();
        update_sound_button(this.container);
    }
}

class SfxButton extends Button {
    constructor(container, click = null, down = null, up = null, buttonMode = true) {
        if (click === null) {
            click = function () { };//HACKY
        }
        super(container, click, down, up, buttonMode);
        update_sfx_button(container);
    }

    on_click(evt) {
        toggle_sfx();
        update_sfx_button(this.container);
        super.on_click(evt);
    }
}

class MusicButton extends Button {
    constructor(container, click = null, down = null, up = null, buttonMode = true) {
        click = function () { };//HACKY
        super(container, click, down, up, buttonMode);
        update_music_button(container);
    }

    on_click(evt) {
        toggle_music();
        update_music_button(this.container);
        super.on_click(evt);
    }
}