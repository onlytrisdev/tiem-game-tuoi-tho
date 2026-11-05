var thumbFinish = false
var thumb = {
    preload: function () {
        pageNo = 9;
        thumbFinish = false
    },
    create: function () {
        thbackground = game.add.sprite(400, 300, 'thbackground');
        thbackground.anchor.setTo(0.5);
        thbackground.scale.setTo(1.01);
        thumb1_2 = this.game.add.button(250.45, 280, 'thumb1_1');
        thumb1_2.anchor.setTo(0.5);
        thumb1_2.inputEnabled = true;
        thumb1_2.input.useHandCursor = true;
        thumb1_2.input.pixelPerfectOver = true;
        thumb1_2.input.pixelPerfectClick = true;
        thumb1_2.visible = false
        thumb1_2.events.onInputDown.add(thumbFun11, this);
        thumb1_2.events.onInputUp.add(thumbFun1, this);
        thumb2_2 = this.game.add.button(560.4, 280, 'thumb2_1');
        thumb2_2.anchor.setTo(0.5);
        thumb2_2.inputEnabled = true;
        thumb2_2.input.useHandCursor = true;
        thumb2_2.input.pixelPerfectOver = true;
        thumb2_2.input.pixelPerfectClick = true;
        thumb2_2.visible = false
        thumb2_2.events.onInputDown.add(thumbFun11, this);
        thumb2_2.events.onInputUp.add(thumbFun2, this);
        thumb3_2 = this.game.add.button(250.45, 280, 'thumb3_1');
        thumb3_2.anchor.setTo(0.5);
        thumb3_2.inputEnabled = true;
        thumb3_2.input.useHandCursor = true;
        thumb3_2.input.pixelPerfectOver = true;
        thumb3_2.input.pixelPerfectClick = true;
        thumb3_2.visible = false
        thumb3_2.events.onInputDown.add(thumbFun11, this);
        thumb3_2.events.onInputUp.add(thumbFun3, this);
        thumb4_2 = this.game.add.button(560.4, 280, 'thumb4_1');
        thumb4_2.anchor.setTo(0.5);
        thumb4_2.inputEnabled = true;
        thumb4_2.input.useHandCursor = true;
        thumb4_2.input.pixelPerfectOver = true;
        thumb4_2.input.pixelPerfectClick = true;
        thumb4_2.visible = false
        thumb4_2.events.onInputDown.add(thumbFun11, this);
        thumb4_2.events.onInputUp.add(thumbFun4, this);
        thumb1_2.scale.setTo(0.90)
        thumb2_2.scale.setTo(0.90)
        thumb3_2.scale.setTo(0.90)
        thumb4_2.scale.setTo(0.90)
        game.add.tween(thumb1_2.scale).to({
            x: 0.85,
            y: 0.85
        }, 700, Phaser.Easing.Back.NONE, true, 1, -1, true);
        game.add.tween(thumb2_2.scale).to({
            x: 0.85,
            y: 0.85
        }, 700, Phaser.Easing.Back.NONE, true, 1, -1, true);
        game.add.tween(thumb3_2.scale).to({
            x: 0.85,
            y: 0.85
        }, 700, Phaser.Easing.Back.NONE, true, 1, -1, true);
        game.add.tween(thumb4_2.scale).to({
            x: 0.85,
            y: 0.85
        }, 700, Phaser.Easing.Back.NONE, true, 1, -1, true);
        if (thumbCount == 0) {
            thumb1_2.visible = true
            thumb2_2.visible = true
            thumb3_2.visible = false
            thumb4_2.visible = false
            thumbCount++
        } else {
            thumb1_2.visible = false
            thumb2_2.visible = false
            thumb3_2.visible = true
            thumb4_2.visible = true
            thumbCount = 0;
        }
        function thumbFun11() {
            playsoundeffects('clickss');
        }
        function thumbFun1() {
            window.open( 'http://localhost/sac-dep-ngan-can-2/game', '_blank' );
        }
        function thumbFun2() {
            window.open( 'http://localhost/cong-chua-toc-may-vay-tim/game', '_blank' );
        }
        function thumbFun3() {
            openUrl(THUMB_3);
        }
        function thumbFun4() {
            openUrl(THUMB_4);
        }
        nextbut = game.add.sprite(265.35, 510.15, 'nextbut');
        nextbut.anchor.setTo(0.5);
        moregames2 = game.add.sprite(535.45, 510, 'moregames1');
        moregames2.anchor.setTo(0.5);
        moregames2.frame = 1
        moregamesAni = moregames2.animations.add('moregamesAni');
        moregamesAni.enableUpdate = true;
        moregamesAni.onUpdate.add(moregamesonUpdate, this);
        moregames2.animations.play('moregamesAni', 24, false);
        moregames2.animations.currentAnim.setFrame(0)
        function moregamesonUpdate(anim, frame) {
            if (anim.frame == 14) {
                anim.frame = 1
            }
        }
        logofbkmute();
        leveluppanelReverseFun();
    }
};
function thumbfun() {
    moregames2.inputEnabled = true;
    moregames2.input.useHandCursor = true;
    moregames2.input.pixelPerfectOver = true;
    moregames2.input.pixelPerfectClick = true;
    moregames2.events.onInputOver.add(moregamesOverFun, this);
    moregames2.events.onInputOut.add(moregamesOutFun, this);
    moregames2.events.onInputDown.add(moregamesdownFun, this);
    moregames2.events.onInputUp.add(moregamesupFun, this);
    nextbut.inputEnabled = true;
    nextbut.input.useHandCursor = true;
    nextbut.input.pixelPerfectOver = true;
    nextbut.input.pixelPerfectClick = true;
    nextbut.events.onInputOver.add(nextOverFun, this);
    nextbut.events.onInputOut.add(nextOutFun, this);
    nextbut.events.onInputUp.add(nextStartFun1, this);
    nextbut.events.onInputDown.add(nextStartFun, this);
    function nextOverFun(ev) {
        thumd1 = game.add.tween(nextbut).to({
            y: 500.15
        }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
    }
    function nextOutFun(ev) {
        nextbut.animations.stop(null, true);
        game.tweens.remove(thumd1);
        nextbut.y = 510.15
        nextbut.frame = 0
    }
    function nextStartFun1(ev) {
        if (!thumbFinish) {
            thumbFinish = true;
            nextbut.animations.stop(null, true);
            nextbut.inputEnabled = false;
            nextbut.frame = 0
            game.tweens.remove(thumd1);
            nextbut.y = 510.15
            leveluppanelCreateFun();
        }
    }
    function nextStartFun(ev) {
        if (!thumbFinish) {
            playsoundeffects('clickss');
            nextbut.animations.stop(null, true);
            nextbut.frame = 1
            nextbut.y = 510.15
        }
    }
}