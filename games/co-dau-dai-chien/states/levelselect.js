var startgame2 = false
var levelselect = {
    preload: function () {
        pageNo = 2;
        startgame2 = false
    },
    create: function () {
        lbackground1 = game.add.sprite(400, 300, 'lbackground1');
        lbackground1.anchor.setTo(0.5);
        grayfilter = game.add.filter('Gray');
        level1 = game.add.sprite(400.2, 171.85, 'level1');
        level1.anchor.setTo(0.5);
        level1.filters = [grayfilter];
        glitter1 = game.add.sprite(400.2, 171.85, 'glitter');
        glitter1.anchor.setTo(0.5);
        glitter1.visible = false;
        level2 = game.add.sprite(142.7, 362.05, 'level2');
        level2.anchor.setTo(0.5);
        level2.filters = [grayfilter];
        glitter2 = game.add.sprite(142.7, 362.05, 'glitter');
        glitter2.anchor.setTo(0.5);
        glitter2.visible = false;
        level3 = game.add.sprite(659.2, 339.05, 'level3');
        level3.anchor.setTo(0.5);
        level3.filters = [grayfilter];
        glitter3 = game.add.sprite(659.2, 339.05, 'glitter');
        glitter3.anchor.setTo(0.5);
        glitter3.visible = false;
        moregames2 = game.add.sprite(400, 428.4, 'moregames1');
        moregames2.anchor.setTo(0.5);
        moregames2.frame = 1;
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
function levelselectfun() {
    moregames2.inputEnabled = true;
    moregames2.input.useHandCursor = true;
    moregames2.input.pixelPerfectOver = true;
    moregames2.input.pixelPerfectClick = true;
    moregames2.events.onInputOver.add(moregamesOverFun, this);
    moregames2.events.onInputOut.add(moregamesOutFun, this);
    moregames2.events.onInputDown.add(moregamesdownFun, this);
    moregames2.events.onInputUp.add(moregamesupFun, this);
    setTimeout(levelstartsfun, 300)
    function levelstartsfun() {
        if (lcount == 0) {
            level1.filters = null;
            playsoundeffects('unlock');
            glitter1.visible = true;
            glitter1.animations.add('glitter1');
            glitter1.animations.play('glitter1', 24, false).onComplete.add(level1function, this)
        }
        function level1function() {
            level1.inputEnabled = true;
            level1.input.useHandCursor = true;
            level1.input.pixelPerfectOver = true;
            level1.input.pixelPerfectClick = true;
            level1.input.pixelPerfectAlpha = 10;
            level1.events.onInputOver.add(level1overFun2, this);
            level1.events.onInputOut.add(level1outFun2, this);
            level1.events.onInputDown.add(level1Fun2, this);
            level1.events.onInputUp.add(level1UpFun2, this);
        }
        function level1overFun2() {
            level1.scale.setTo(1.05);
            level1.filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xffff00), parseFloat(0.1))];
        }
        function level1outFun2() {
            level1.scale.setTo(1);
            level1.filters = null;
        }
        function level1Fun2(ev) {
            if (!startgame2) {
                startgame2 = true
                level1.scale.setTo(0.95);
                playsoundeffects('clickss');
            }
        }
        function level1UpFun2(ev) {
            level1.inputEnabled = false;
            leveluppanelCreateFun();
        }
        if (lcount == 1) {
            level2.filters = null;
            glitter2.visible = true;
            playsoundeffects('unlock');
            glitter2.animations.add('glitter2');
            glitter2.animations.play('glitter2', 24, false).onComplete.add(level2function1, this);
        }
        function level2function1() {
            level2.inputEnabled = true;
            level2.input.useHandCursor = true;
            level2.input.pixelPerfectOver = true;
            level2.input.pixelPerfectClick = true;
            level2.input.pixelPerfectAlpha = 10;
            level2.events.onInputDown.add(level2Fun2, this);
            level2.events.onInputOver.add(level2overFun2, this);
            level2.events.onInputOut.add(level2outFun2, this);
            level2.events.onInputUp.add(level2UpFun2, this);
        }
        function level2Fun2(ev) {
            if (!startgame2) {
                startgame2 = true
                level2.scale.setTo(0.95);
                playsoundeffects('clickss');
            }
        }
        function level2UpFun2(ev) {
            level2.inputEnabled = false;
            leveluppanelCreateFun();
        }
        function level2overFun2() {
            level2.scale.setTo(1.05);
            level2.filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xffff00), parseFloat(0.1))];
        }
        function level2outFun2() {
            level2.scale.setTo(1.0);
            level2.filters = null;
        }
        if (lcount == 2) {
            level3.filters = null;
            playsoundeffects('unlock');
            glitter3.visible = true;
            glitter3.animations.add('glitter3');
            glitter3.animations.play('glitter3', 24, false).onComplete.add(level3function11, this)
        }
        function level3function11() {
            level3.inputEnabled = true;
            level3.input.useHandCursor = true;
            level3.input.pixelPerfectOver = true;
            level3.input.pixelPerfectClick = true;
            level3.input.pixelPerfectAlpha = 10;
            level3.events.onInputDown.add(level3Fun2, this);
            level3.events.onInputOver.add(level3overFun2, this);
            level3.events.onInputOut.add(level3outFun2, this);
            level3.events.onInputUp.add(level3UpFun2, this);
        }
        function level3Fun2(ev) {
            if (!startgame2) {
                startgame2 = true
                level3.scale.setTo(0.95);
                playsoundeffects('clickss');
            }
        }
        function level3UpFun2(ev) {
            level3.inputEnabled = false;
            leveluppanelCreateFun();
        }
        function level3overFun2() {
            level3.scale.setTo(1.05);
            level3.filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xffff00), parseFloat(0.1))];
        }
        function level3outFun2() {
            level3.scale.setTo(1);
            level3.filters = null;
        }
    }
}