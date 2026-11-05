var startgame5 = false
var marr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var level2_1 = {
    preload: function () {
        startgame5 = false
        pageNo = 5
        marr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    create: function () {
        showAdOnPosition('mid2');
        mbackground2 = this.game.add.sprite(400, 300, 'mbackground2');
        mbackground2.anchor.setTo(0.5);
        mbbody = game.add.sprite(408.05, 467.7, 'mbbody');
        mbbody.anchor.setTo(0.5);
        mbhead = game.add.sprite(395.1, 249.4, 'mbhead');
        mbhead.anchor.setTo(0.5);
        mbeyetop1 = game.add.sprite(395.1, 253.7, 'mbeyetop1');
        mbeyetop1.anchor.setTo(0.5);
        mblips = game.add.sprite(389.65, 321.55, 'mblips');
        mblips.anchor.setTo(0.5);
        mbeyetop = game.add.sprite(394.3, 258.9, 'mbeyetop');
        mbeyetop.anchor.setTo(0.5);
        mbblushes = game.add.sprite(396.55, 287.8, 'mbblushes');
        mbblushes.anchor.setTo(0.5);
        mbeyeshadow = game.add.sprite(393.95, 242.75, 'mbeyeshadow');
        mbeyeshadow.anchor.setTo(0.5);
        mbmascara = game.add.sprite(392.3, 255.75, 'mbmascara');
        mbmascara.anchor.setTo(0.5);
        mbeyeball = game.add.sprite(395.7, 255.75, 'mbeyeball');
        mbeyeball.anchor.setTo(0.5);
        mbhair = game.add.sprite(399.45, 459.4, 'mbhair');
        mbhair.anchor.setTo(0.5);
        mdoll2group = game.add.group()
        mdoll2group.add(mbbody)
        mdoll2group.add(mbhead)
        mdoll2group.add(mbeyeshadow)
        mdoll2group.add(mbeyetop1)
        mdoll2group.add(mblips)
        mdoll2group.add(mbeyetop)
        mdoll2group.add(mbblushes)
        mdoll2group.add(mbeyeball)
        mdoll2group.add(mbmascara)
        mdoll2group.add(mbhair)
        mtable = this.game.add.sprite(400, 577.75, 'mtable');
        mtable.anchor.setTo(0.5);
        var besxarr = [, 235.5, 360.45, 485.45, 610.45, 235.45, 360.45, 485.45, 610.45]
        var besyarr = [, 505, 505, 505, 505, 505, 505, 505, 505]
        for (i = 1; i <= 8; i++) {
            game['beshade' + i] = this.game.add.sprite(besxarr[i], besyarr[i], 'beshade' + i);
            game['beshade' + i].anchor.setTo(0.5);
            game['beshade' + i].visible = false
        }
        for (i = 1; i <= 8; i++) {
            game['beshadeglow' + i] = this.game.add.sprite(besxarr[i], besyarr[i], 'beshade' + i);
            game['beshadeglow' + i].anchor.setTo(0.5);
            game['beshadeglow' + i].visible = false
        }
        var blpxarr = [, 218.45, 314.45, 414.4, 515.4, 619.4]
        var blpyarr = [, 493, 494, 494, 495, 496]
        for (i = 1; i <= 5; i++) {
            game['blip' + i] = this.game.add.sprite(blpxarr[i], blpyarr[i], 'blip' + i);
            game['blip' + i].anchor.setTo(0.5);
            game['blip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blipglow' + i] = this.game.add.sprite(blpxarr[i], blpyarr[i], 'blip' + i);
            game['blipglow' + i].anchor.setTo(0.5);
            game['blipglow' + i].visible = false
        }
        var beyxarr = [, 222.95, 347.9, 473.9, 597.9, 274.75, 397.75, 520.75]
        var beyyarr = [, 558.5, 558.5, 558.5, 556.5, 557.5, 556.5, 557.5]
        for (i = 1; i <= 7; i++) {
            game['beye' + i] = this.game.add.sprite(beyxarr[i], beyyarr[i], 'beye' + i);
            game['beye' + i].anchor.setTo(0.5);
            game['beye' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beyeglow' + i] = this.game.add.sprite(beyxarr[i], beyyarr[i], 'beye' + i);
            game['beyeglow' + i].anchor.setTo(0.5);
            game['beyeglow' + i].visible = false
        }
        var belyxarr = [, 288.95, 372.95, 456.95, 547.95, 319.5, 400.1, 489.4]
        var belyyarr = [, 499, 494.5, 495.5, 495.5, 498.35, 493.3, 498.4]
        for (i = 1; i <= 7; i++) {
            game['belash' + i] = this.game.add.sprite(belyxarr[i], belyyarr[i], 'belash' + i);
            game['belash' + i].anchor.setTo(0.5);
            game['belash' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belashglow' + i] = this.game.add.sprite(belyxarr[i], belyyarr[i], 'belash' + i);
            game['belashglow' + i].anchor.setTo(0.5);
            game['belashglow' + i].visible = false
        }
        var bblxarr = [, 216.25, 313.6, 412.5, 514.7, 604.7]
        var bblyarr = [, 511.45, 512.35, 511.45, 509.65, 509.65]
        for (i = 1; i <= 5; i++) {
            game['bblush' + i] = this.game.add.sprite(bblxarr[i], bblyarr[i], 'bblush' + i);
            game['bblush' + i].anchor.setTo(0.5);
            game['bblush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblushglow' + i] = this.game.add.sprite(bblxarr[i], bblyarr[i], 'bblush' + i);
            game['bblushglow' + i].anchor.setTo(0.5);
            game['bblushglow' + i].visible = false
        }
        beshadebtn = this.game.add.sprite(201.25, 507.15, 'beshadebtn');
        beshadebtn.anchor.setTo(0.5);
        blipbtn = this.game.add.sprite(390.25, 497.65, 'blipbtn');
        blipbtn.anchor.setTo(0.5);
        beyebtn = this.game.add.sprite(490.95, 545.45, 'beyebtn');
        beyebtn.anchor.setTo(0.5);
        bblushbtn = this.game.add.sprite(598.75, 504.65, 'bblushbtn');
        bblushbtn.anchor.setTo(0.5);
        belashbtn = this.game.add.sprite(297.75, 488.15, 'belashbtn');
        belashbtn.anchor.setTo(0.5);
        beshadebtnglow = this.game.add.sprite(201.25, 507.15, 'beshadebtn');
        beshadebtnglow.anchor.setTo(0.5);
        blipbtnglow = this.game.add.sprite(390.25, 497.65, 'blipbtn');
        blipbtnglow.anchor.setTo(0.5);
        beyebtnglow = this.game.add.sprite(490.95, 545.45, 'beyebtn');
        beyebtnglow.anchor.setTo(0.5);
        bblushbtnglow = this.game.add.sprite(598.75, 504.65, 'bblushbtn');
        bblushbtnglow.anchor.setTo(0.5);
        belashbtnglow = this.game.add.sprite(297.75, 488.15, 'belashbtn');
        belashbtnglow.anchor.setTo(0.5);
        rarrow = this.game.add.sprite(680.15, 443.7, 'arrow');
        rarrow.anchor.setTo(0.5);
        game.add.tween(rarrow).to({
            x: 686.15
        }, 450, Phaser.Easing.Linear.None, true, 0, -1, true)
        larrow = this.game.add.sprite(163.5, 443.7, 'arrow');
        larrow.anchor.setTo(0.5);
        larrow.scale.x = -1
        game.add.tween(larrow).to({
            x: 155.5
        }, 450, Phaser.Easing.Linear.None, true, 0, -1, true)
        rarrow.visible = false
        larrow.visible = false
        close2 = this.game.add.image(195, 375, 'close1');
        close2.anchor.setTo(0.5);
        close2.scale.setTo(0.6);
        close2.visible = false
        stargilter = this.game.add.sprite(430, 290.9, 'stargilter');
        stargilter.anchor.setTo(0.5);
        stargilter.scale.setTo(1.2)
        stargilter.visible = false
        done2 = this.game.add.sprite(66.05, 510.15, 'done1');
        done2.anchor.setTo(0.5);
        done2.scale.setTo(0.9)
        done2.visible = false
        moregames2 = game.add.sprite(735.45, 510, 'moregames1');
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
        logofbkmute()
        leveluppanelReverseFun()
    }
}
function makeupstartFun2() {
    rarrow.inputEnabled = true;
    rarrow.input.useHandCursor = true;
    rarrow.input.pixelPerfectAlpha = 10;
    rarrow.input.pixelPerfectOver = true;
    rarrow.input.pixelPerfectClick = true;
    rarrow.events.onInputDown.add(rarrowFun11, this);
    larrow.inputEnabled = true;
    larrow.input.useHandCursor = true;
    larrow.input.pixelPerfectAlpha = 10;
    larrow.input.pixelPerfectOver = true;
    larrow.input.pixelPerfectClick = true;
    larrow.events.onInputDown.add(rarrowFun11, this);
    function rarrowFun11() {
        playsoundeffects('clickss');
        if (game['beye' + 1].visible) {
            for (i = 1; i <= 4; i++) {
                game['beye' + i].visible = false
                game['beyeglow' + i].visible = false
            }
            for (i = 5; i <= 7; i++) {
                game['beye' + i].visible = true
                game['beyeglow' + i].visible = true
            }
        } else if (game['beye' + 5].visible) {
            for (i = 1; i <= 4; i++) {
                game['beye' + i].visible = true
                game['beyeglow' + i].visible = true
            }
            for (i = 5; i <= 7; i++) {
                game['beye' + i].visible = false
                game['beyeglow' + i].visible = false
            }
        }
        if (game['beshade' + 1].visible) {
            for (i = 1; i <= 4; i++) {
                game['beshade' + i].visible = false
                game['beshadeglow' + i].visible = false
            }
            for (i = 5; i <= 8; i++) {
                game['beshade' + i].visible = true
                game['beshadeglow' + i].visible = true
            }
        } else if (game['beshade' + 5].visible) {
            for (i = 1; i <= 4; i++) {
                game['beshade' + i].visible = true
                game['beshadeglow' + i].visible = true
            }
            for (i = 5; i <= 8; i++) {
                game['beshade' + i].visible = false
                game['beshadeglow' + i].visible = false
            }
        }
        if (game['belash' + 1].visible) {
            for (i = 1; i <= 4; i++) {
                game['belash' + i].visible = false
                game['belashglow' + i].visible = false
            }
            for (i = 5; i <= 7; i++) {
                game['belash' + i].visible = true
                game['belashglow' + i].visible = true
            }
        } else if (game['belash' + 5].visible) {
            for (i = 1; i <= 4; i++) {
                game['belash' + i].visible = true
                game['belashglow' + i].visible = true
            }
            for (i = 5; i <= 7; i++) {
                game['belash' + i].visible = false
                game['belashglow' + i].visible = false
            }
        }
    }
    blipbtn.inputEnabled = true;
    blipbtn.input.useHandCursor = true;
    blipbtn.events.onInputOver.add(belinebtnOverFun, this);
    blipbtn.events.onInputOut.add(belinebtnOutFun, this);
    blipbtn.events.onInputDown.add(blipbtnFun, this);
    function belinebtnOverFun(ev) {
        if (ev.filters == null) {
            ev.filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xffff00), parseFloat(0.1))];
        }
    }
    function belinebtnOutFun(ev) {
        ev.filters = null
        bmakeupglow()
    }
    function blipbtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        beyebtn.visible = false
        blipbtn.visible = false
        bblushbtn.visible = false
        beshadebtn.visible = false
        belashbtn.visible = false
        beyebtnglow.visible = false
        blipbtnglow.visible = false
        bblushbtnglow.visible = false
        beshadebtnglow.visible = false
        belashbtnglow.visible = false
        for (i = 1; i <= 8; i++) {
            game['beshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blip' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beye' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blip' + i].visible = true
        }
        for (i = 1; i <= 8; i++) {
            game['beshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blipglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beyeglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blipglow' + i].visible = true
        }
    }
    bblushbtn.inputEnabled = true;
    bblushbtn.input.useHandCursor = true;
    bblushbtn.input.pixelPerfectAlpha = 10;
    bblushbtn.input.pixelPerfectOver = true;
    bblushbtn.input.pixelPerfectClick = true;
    bblushbtn.events.onInputOver.add(belinebtnOverFun, this);
    bblushbtn.events.onInputOut.add(belinebtnOutFun, this);
    bblushbtn.events.onInputDown.add(bblushbtnFun, this);
    function bblushbtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        beyebtn.visible = false
        blipbtn.visible = false
        bblushbtn.visible = false
        beshadebtn.visible = false
        belashbtn.visible = false
        beyebtnglow.visible = false
        blipbtnglow.visible = false
        bblushbtnglow.visible = false
        beshadebtnglow.visible = false
        belashbtnglow.visible = false
        for (i = 1; i <= 8; i++) {
            game['beshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blip' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beye' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblush' + i].visible = true
        }
        for (i = 1; i <= 8; i++) {
            game['beshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blipglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beyeglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblushglow' + i].visible = true
        }
    }
    beshadebtn.inputEnabled = true;
    beshadebtn.input.useHandCursor = true;
    beshadebtn.input.pixelPerfectAlpha = 10;
    beshadebtn.input.pixelPerfectOver = true;
    beshadebtn.input.pixelPerfectClick = true;
    beshadebtn.events.onInputOver.add(belinebtnOverFun, this);
    beshadebtn.events.onInputOut.add(belinebtnOutFun, this);
    beshadebtn.events.onInputDown.add(beshadebtnFun, this);
    function beshadebtnFun(ev) {
        rarrow.visible = true
        larrow.visible = true
        playsoundeffects('itemclick');
        close2.visible = true
        beyebtn.visible = false
        blipbtn.visible = false
        bblushbtn.visible = false
        beshadebtn.visible = false
        belashbtn.visible = false
        beyebtnglow.visible = false
        blipbtnglow.visible = false
        bblushbtnglow.visible = false
        beshadebtnglow.visible = false
        belashbtnglow.visible = false
        for (i = 1; i <= 8; i++) {
            game['beshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blip' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beye' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblush' + i].visible = false
        }
        for (i = 1; i <= 4; i++) {
            game['beshade' + i].visible = true
        }
        for (i = 1; i <= 8; i++) {
            game['beshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blipglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beyeglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblushglow' + i].visible = false
        }
        for (i = 1; i <= 4; i++) {
            game['beshadeglow' + i].visible = true
        }
    }
    beyebtn.inputEnabled = true;
    beyebtn.input.useHandCursor = true;
    beyebtn.input.pixelPerfectAlpha = 10;
    beyebtn.input.pixelPerfectOver = true;
    beyebtn.input.pixelPerfectClick = true;
    beyebtn.events.onInputOver.add(belinebtnOverFun, this);
    beyebtn.events.onInputOut.add(belinebtnOutFun, this);
    beyebtn.events.onInputDown.add(beyebtnFun, this);
    function beyebtnFun(ev) {
        rarrow.visible = true
        larrow.visible = true
        playsoundeffects('itemclick');
        close2.visible = true
        beyebtn.visible = false
        blipbtn.visible = false
        bblushbtn.visible = false
        beshadebtn.visible = false
        belashbtn.visible = false
        beyebtnglow.visible = false
        blipbtnglow.visible = false
        bblushbtnglow.visible = false
        beshadebtnglow.visible = false
        belashbtnglow.visible = false
        for (i = 1; i <= 8; i++) {
            game['beshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blip' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beye' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblush' + i].visible = false
        }
        for (i = 1; i <= 4; i++) {
            game['beye' + i].visible = true
        }
        for (i = 1; i <= 8; i++) {
            game['beshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blipglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beyeglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblushglow' + i].visible = false
        }
        for (i = 1; i <= 4; i++) {
            game['beyeglow' + i].visible = true
        }
    }
    belashbtn.inputEnabled = true;
    belashbtn.input.useHandCursor = true;
    belashbtn.input.pixelPerfectAlpha = 10;
    belashbtn.input.pixelPerfectOver = true;
    belashbtn.input.pixelPerfectClick = true;
    belashbtn.events.onInputOver.add(belinebtnOverFun, this);
    belashbtn.events.onInputOut.add(belinebtnOutFun, this);
    belashbtn.events.onInputDown.add(belashbtnFun, this);
    function belashbtnFun(ev) {
        rarrow.visible = true
        larrow.visible = true
        playsoundeffects('itemclick');
        close2.visible = true
        beyebtn.visible = false
        blipbtn.visible = false
        bblushbtn.visible = false
        beshadebtn.visible = false
        belashbtn.visible = false
        beyebtnglow.visible = false
        blipbtnglow.visible = false
        bblushbtnglow.visible = false
        beshadebtnglow.visible = false
        belashbtnglow.visible = false
        for (i = 1; i <= 8; i++) {
            game['beshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blip' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beye' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblush' + i].visible = false
        }
        for (i = 1; i <= 4; i++) {
            game['belash' + i].visible = true
        }
        for (i = 1; i <= 8; i++) {
            game['beshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['blipglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['beyeglow' + i].visible = false
        }
        for (i = 1; i <= 7; i++) {
            game['belashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['bblushglow' + i].visible = false
        }
        for (i = 1; i <= 4; i++) {
            game['belashglow' + i].visible = true
        }
    }
    close2.inputEnabled = true;
    close2.input.useHandCursor = true;
    close2.input.pixelPerfectOver = true;
    close2.input.pixelPerfectClick = true;
    close2.input.pixelPerfectAlpha = 10;
    close2.events.onInputOver.add(closeOverFun, this);
    close2.events.onInputOut.add(closeOutFun, this);
    close2.events.onInputDown.add(closeDownFun, this);
    close2.events.onInputUp.add(closeUpFun, this);
    function closeOverFun(ev) {
        close2.frame = 1;
        closeAni = close2.animations.add('closeAni');
        closeAni.enableUpdate = true;
        closeAni.onUpdate.add(closeonUpdate2, this);
        close2.animations.play('closeAni', 24, false);
    }
    function closeonUpdate2(anim, frame) {
        if (anim.frame == 9) {
            anim.stop();
        }
    }
    function closeOutFun(ev) {
        close2.animations.stop(null, true);
    }
    function closeUpFun(ev) {
        if (!startgame5) {
            close2.animations.stop(null, true);
            close2.visible = false
            blipbtn.visible = true
            bblushbtn.visible = true
            beshadebtn.visible = true
            beyebtn.visible = true
            belashbtn.visible = true
            beyebtnglow.visible = true
            blipbtnglow.visible = true
            bblushbtnglow.visible = true
            beshadebtnglow.visible = true
            belashbtnglow.visible = true
            for (i = 1; i <= 8; i++) {
                game['beshade' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['blip' + i].visible = false
            }
            for (i = 1; i <= 7; i++) {
                game['beye' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['bblush' + i].visible = false
            }
            for (i = 1; i <= 7; i++) {
                game['belash' + i].visible = false
            }
            for (i = 1; i <= 8; i++) {
                game['beshadeglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['blipglow' + i].visible = false
            }
            for (i = 1; i <= 7; i++) {
                game['beyeglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['bblushglow' + i].visible = false
            }
            for (i = 1; i <= 7; i++) {
                game['belashglow' + i].visible = false
            }
            rarrow.visible = false
            larrow.visible = false
        }
    }
    function closeDownFun(ev) {
        if (!startgame5) {
            playsoundeffects('clickss');
            close2.animations.stop(null, true);
            ev.frame = 10;
        }
    }
    for (i = 1; i <= 5; i++) {
        game['blip' + i].inputEnabled = true;
        game['blip' + i].input.useHandCursor = true;
        game['blip' + i].events.onInputOver.add(belinebtnOverFun, this);
        game['blip' + i].events.onInputOut.add(belinebtnOutFun, this);
        game['blip' + i].events.onInputDown.add(mblipFun, this);
    }
    function mblipFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(4)
        if (marr2[0] == parseInt(sno)) {
            marr2[0] = 0
            mblips.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr2[0] = parseInt(sno)
            mblips.frame = parseInt(sno)
        }
        bmakeupglow()
    }
    for (i = 1; i <= 8; i++) {
        game['beshade' + i].inputEnabled = true;
        game['beshade' + i].input.useHandCursor = true;
        game['beshade' + i].input.pixelPerfectAlpha = 10;
        game['beshade' + i].input.pixelPerfectOver = true;
        game['beshade' + i].input.pixelPerfectClick = true;
        game['beshade' + i].events.onInputOver.add(belinebtnOverFun, this);
        game['beshade' + i].events.onInputOut.add(belinebtnOutFun, this);
        game['beshade' + i].events.onInputDown.add(mbeshadeFun, this);
    }
    function mbeshadeFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(7)
        if (marr2[1] == parseInt(sno)) {
            marr2[1] = 0
            mbeyeshadow.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr2[1] = parseInt(sno)
            mbeyeshadow.frame = parseInt(sno)
        }
        bmakeupglow()
    }
    for (i = 1; i <= 5; i++) {
        game['bblush' + i].inputEnabled = true;
        game['bblush' + i].input.useHandCursor = true;
        game['bblush' + i].input.pixelPerfectAlpha = 10;
        game['bblush' + i].input.pixelPerfectOver = true;
        game['bblush' + i].input.pixelPerfectClick = true;
        game['bblush' + i].events.onInputOver.add(belinebtnOverFun, this);
        game['bblush' + i].events.onInputOut.add(belinebtnOutFun, this);
        game['bblush' + i].events.onInputDown.add(mbblushFun, this);
    }
    function mbblushFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(6)
        if (marr2[2] == parseInt(sno)) {
            marr2[2] = 0
            mbblushes.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr2[2] = parseInt(sno)
            mbblushes.frame = parseInt(sno)
        }
        bmakeupglow()
    }
    for (i = 1; i <= 7; i++) {
        game['beye' + i].inputEnabled = true;
        game['beye' + i].input.useHandCursor = true;
        game['beye' + i].input.pixelPerfectAlpha = 10;
        game['beye' + i].input.pixelPerfectOver = true;
        game['beye' + i].input.pixelPerfectClick = true;
        game['beye' + i].events.onInputOver.add(belinebtnOverFun, this);
        game['beye' + i].events.onInputOut.add(belinebtnOutFun, this);
        game['beye' + i].events.onInputDown.add(mbeyeFun, this);
    }
    function mbeyeFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(4)
        if (marr2[3] == parseInt(sno)) {
            marr2[3] = 0
            mbeyeball.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr2[3] = parseInt(sno)
            mbeyeball.frame = parseInt(sno)
        }
        bmakeupglow()
    }
    for (i = 1; i <= 7; i++) {
        game['belash' + i].inputEnabled = true;
        game['belash' + i].input.useHandCursor = true;
        game['belash' + i].input.pixelPerfectAlpha = 10;
        game['belash' + i].input.pixelPerfectOver = true;
        game['belash' + i].input.pixelPerfectClick = true;
        game['belash' + i].events.onInputOver.add(belinebtnOverFun, this);
        game['belash' + i].events.onInputOut.add(belinebtnOutFun, this);
        game['belash' + i].events.onInputDown.add(mbmascarafun, this);
    }
    function mbmascarafun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(6)
        if (marr2[4] == parseInt(sno)) {
            marr2[4] = 0
            mbmascara.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr2[4] = parseInt(sno)
            mbmascara.frame = parseInt(sno)
        }
        bmakeupglow()
    }
    function bmakeupglow() {
        for (i = 1; i <= 8; i++) {
            game['beshade' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['blip' + i].filters = null
        }
        for (i = 1; i <= 7; i++) {
            game['beye' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['bblush' + i].filters = null
        }
        for (i = 1; i <= 7; i++) {
            game['belash' + i].filters = null
        }
        if (marr2[0] > 0) {
            game['blip' + marr2[0]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr2[1] > 0) {
            game['beshade' + marr2[1]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr2[2] > 0) {
            game['bblush' + marr2[2]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr2[3] > 0) {
            game['beye' + marr2[3]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr2[4] > 0) {
            game['belash' + marr2[4]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
    }
    moregames2.inputEnabled = true;
    moregames2.input.useHandCursor = true;
    moregames2.input.pixelPerfectOver = true;
    moregames2.input.pixelPerfectClick = true;
    moregames2.events.onInputOver.add(moregamesOverFun, this);
    moregames2.events.onInputOut.add(moregamesOutFun, this);
    moregames2.events.onInputDown.add(moregamesdownFun, this);
    moregames2.events.onInputUp.add(moregamesupFun, this);
    done2.inputEnabled = true;
    done2.input.useHandCursor = true;
    done2.input.pixelPerfectOver = true;
    done2.input.pixelPerfectClick = true;
    done2.input.pixelPerfectAlpha = 10;
    done2.events.onInputOver.add(doneOverFun, this);
    done2.events.onInputOut.add(doneOutFun, this);
    done2.events.onInputUp.add(doneStartFun, this);
    done2.events.onInputDown.add(doneStartFun1, this);
    function doneOverFun(ev) {
        l2d1 = game.add.tween(done2).to({
            y: 500.15
        }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
    }
    function doneOutFun(ev) {
        done2.animations.stop(null, true);
        game.tweens.remove(l2d1);
        done2.y = 510.15
        done2.frame = 0;
    }
    function doneStartFun(ev) {
        if (pageNo == 5 && !startgame5) {
            startgame5 = true;
            done2.animations.stop(null, true);
            game.tweens.remove(l2d1);
            done2.y = 510.15
            ev.frame = 1
            done2.inputEnabled = false;
            leveluppanelCreateFun();
        }
    }
    function doneStartFun1(ev) {
        if (pageNo == 5 && !startgame5) {
            playsoundeffects('clickss');
            done2.animations.stop(null, true);
            game.tweens.remove(l2d1);
            done2.y = 510.15
            ev.frame = 1
        }
    }
}