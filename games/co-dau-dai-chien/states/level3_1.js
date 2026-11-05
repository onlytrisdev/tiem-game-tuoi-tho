var startgame7 = false
var marr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var level3_1 = {
    preload: function () {
        startgame7 = false
        pageNo = 7
        marr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    create: function () {
        showAdOnPosition('mid4');
        mbackground3 = this.game.add.sprite(400, 300, 'mbackground3');
        mbackground3.anchor.setTo(0.5);
        mcbody = game.add.sprite(400.9, 458.85, 'mcbody');
        mcbody.anchor.setTo(0.5);
        mchead = game.add.sprite(400.85, 259.15, 'mchead');
        mchead.anchor.setTo(0.5);
        mceyetop1 = game.add.sprite(398.85, 290.3, 'mceyetop1');
        mceyetop1.anchor.setTo(0.5);
        mclips = game.add.sprite(397.3, 356.45, 'mclips');
        mclips.anchor.setTo(0.5);
        mcblushes = game.add.sprite(402.7, 313.2, 'mcblushes');
        mcblushes.anchor.setTo(0.5);
        mceyeshadow = game.add.sprite(400.9, 279, 'mceyeshadow');
        mceyeshadow.anchor.setTo(0.5);
        mcmascara = game.add.sprite(399.1, 285.3, 'mcmascara');
        mcmascara.anchor.setTo(0.5);
        mceyeball = game.add.sprite(397.3, 288, 'mceyeball');
        mceyeball.anchor.setTo(0.5);
        mchair = game.add.sprite(399.05, 354.7, 'mchair');
        mchair.anchor.setTo(0.5);
        doll3group = game.add.group()
        doll3group.add(mcbody)
        doll3group.add(mchead)
        doll3group.add(mceyeshadow)
        doll3group.add(mceyetop1)
        doll3group.add(mcblushes)
        doll3group.add(mclips)
        doll3group.add(mceyeball)
        doll3group.add(mcmascara)
        doll3group.add(mchair)
        mtable = this.game.add.sprite(400, 577.75, 'mtable');
        mtable.anchor.setTo(0.5);
        var cesxarr = [, 288, 416.45, 541.95, 268.5, 400.5, 530.45]
        var cesyarr = [, 508.5, 507, 508, 504.5, 504, 498.5]
        for (i = 1; i <= 6; i++) {
            game['ceshade' + i] = this.game.add.sprite(cesxarr[i], cesyarr[i], 'ceshade' + i);
            game['ceshade' + i].anchor.setTo(0.5);
            game['ceshade' + i].visible = false
        }
        for (i = 1; i <= 6; i++) {
            game['ceshadeglow' + i] = this.game.add.sprite(cesxarr[i], cesyarr[i], 'ceshade' + i);
            game['ceshadeglow' + i].anchor.setTo(0.5);
            game['ceshadeglow' + i].visible = false
        }
        var celxarr = [, 239.5, 322.5, 399.45, 481.45, 563.45]
        var celyarr = [, 504.6, 504.6, 504.6, 504.6, 504.6]
        for (i = 1; i <= 5; i++) {
            game['celash' + i] = this.game.add.sprite(celxarr[i], celyarr[i], 'celash' + i);
            game['celash' + i].anchor.setTo(0.5);
            game['celash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celashglow' + i] = this.game.add.sprite(celxarr[i], celyarr[i], 'celash' + i);
            game['celashglow' + i].anchor.setTo(0.5);
            game['celashglow' + i].visible = false
        }
        var clpxarr = [, 223.55, 316.55, 410.55, 502.55, 590.55]
        var clpyarr = [, 506.45, 505.45, 505.45, 505.45, 505.95]
        for (i = 1; i <= 5; i++) {
            game['clip' + i] = this.game.add.sprite(clpxarr[i], clpyarr[i], 'clip' + i);
            game['clip' + i].anchor.setTo(0.5);
            game['clip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clipglow' + i] = this.game.add.sprite(clpxarr[i], clpyarr[i], 'clip' + i);
            game['clipglow' + i].anchor.setTo(0.5);
            game['clipglow' + i].visible = false
        }
        var ceyxarr = [, 195.3, 299.75, 406.3, 512.6, 616.65]
        var ceyyarr = [, 556.25, 556.3, 555.9, 555.9, 555.75]
        for (i = 1; i <= 5; i++) {
            game['ceye' + i] = this.game.add.sprite(ceyxarr[i], ceyyarr[i], 'ceye' + i);
            game['ceye' + i].anchor.setTo(0.5);
            game['ceye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceyeglow' + i] = this.game.add.sprite(ceyxarr[i], ceyyarr[i], 'ceye' + i);
            game['ceyeglow' + i].anchor.setTo(0.5);
            game['ceyeglow' + i].visible = false
        }
        var cblxarr = [, 278, 413.5, 562.45, 318, 488.95]
        var cblyarr = [, 509, 507.5, 507.5, 502.5, 500.5]
        for (i = 1; i <= 5; i++) {
            game['cblush' + i] = this.game.add.sprite(cblxarr[i], cblyarr[i], 'cblush' + i);
            game['cblush' + i].anchor.setTo(0.5);
            game['cblush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblushglow' + i] = this.game.add.sprite(cblxarr[i], cblyarr[i], 'cblush' + i);
            game['cblushglow' + i].anchor.setTo(0.5);
            game['cblushglow' + i].visible = false
        }
        ceshadebtn = this.game.add.sprite(204.95, 504.5, 'ceshadebtn');
        ceshadebtn.anchor.setTo(0.5);
        clipbtn = this.game.add.sprite(381.55, 504.45, 'clipbtn');
        clipbtn.anchor.setTo(0.5);
        ceyebtn = this.game.add.sprite(478.95, 551.5, 'ceyebtn');
        ceyebtn.anchor.setTo(0.5);
        cblushbtn = this.game.add.sprite(597.95, 501, 'cblushbtn');
        cblushbtn.anchor.setTo(0.5);
        celashbtn = this.game.add.sprite(301.15, 499.25, 'celashbtn');
        celashbtn.anchor.setTo(0.5);
        ceshadebtnglow = this.game.add.sprite(204.95, 504.5, 'ceshadebtn');
        ceshadebtnglow.anchor.setTo(0.5);
        clipbtnglow = this.game.add.sprite(381.55, 504.45, 'clipbtn');
        clipbtnglow.anchor.setTo(0.5);
        ceyebtnglow = this.game.add.sprite(478.95, 551.5, 'ceyebtn');
        ceyebtnglow.anchor.setTo(0.5);
        cblushbtnglow = this.game.add.sprite(597.95, 501, 'cblushbtn');
        cblushbtnglow.anchor.setTo(0.5);
        celashbtnglow = this.game.add.sprite(301.15, 499.25, 'celashbtn');
        celashbtnglow.anchor.setTo(0.5);
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
        rarrow = this.game.add.sprite(650.15, 443.7, 'arrow');
        rarrow.anchor.setTo(0.5);
        game.add.tween(rarrow).to({
            x: 656.15
        }, 450, Phaser.Easing.Linear.None, true, 0, -1, true)
        larrow = this.game.add.sprite(173.5, 443.7, 'arrow');
        larrow.anchor.setTo(0.5);
        larrow.scale.x = -1
        game.add.tween(larrow).to({
            x: 165.5
        }, 450, Phaser.Easing.Linear.None, true, 0, -1, true)
        rarrow.visible = false
        larrow.visible = false
        stargilter = this.game.add.sprite(-400.05, 331.7, 'stargilter')
        stargilter.anchor.setTo(0.5)
        stargilter.animations.add('stargilter')
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
function makeupstartFun3() {
    rarrow.inputEnabled = true;
    rarrow.input.useHandCursor = true;
    rarrow.input.pixelPerfectAlpha = 10;
    rarrow.input.pixelPerfectOver = true;
    rarrow.input.pixelPerfectClick = true;
    rarrow.events.onInputDown.add(rarrowFun31, this);
    larrow.inputEnabled = true;
    larrow.input.useHandCursor = true;
    larrow.input.pixelPerfectAlpha = 10;
    larrow.input.pixelPerfectOver = true;
    larrow.input.pixelPerfectClick = true;
    larrow.events.onInputDown.add(rarrowFun31, this);
    function rarrowFun31() {
        playsoundeffects('clickss');
        if (game['cblush' + 1].visible) {
            for (i = 1; i <= 3; i++) {
                game['cblush' + i].visible = false
                game['cblushglow' + i].visible = false
            }
            for (i = 4; i <= 5; i++) {
                game['cblush' + i].visible = true
                game['cblushglow' + i].visible = true
            }
        } else if (game['cblush' + 4].visible) {
            for (i = 1; i <= 3; i++) {
                game['cblush' + i].visible = true
                game['cblushglow' + i].visible = true
            }
            for (i = 4; i <= 5; i++) {
                game['cblush' + i].visible = false
                game['cblushglow' + i].visible = false
            }
        }
        if (game['ceshade' + 1].visible) {
            for (i = 1; i <= 3; i++) {
                game['ceshade' + i].visible = false
                game['ceshadeglow' + i].visible = false
            }
            for (i = 4; i <= 6; i++) {
                game['ceshade' + i].visible = true
                game['ceshadeglow' + i].visible = true
            }
        } else if (game['ceshade' + 4].visible) {
            for (i = 1; i <= 3; i++) {
                game['ceshade' + i].visible = true
                game['ceshadeglow' + i].visible = true
            }
            for (i = 4; i <= 6; i++) {
                game['ceshade' + i].visible = false
                game['ceshadeglow' + i].visible = false
            }
        }
    }
    clipbtn.inputEnabled = true;
    clipbtn.input.useHandCursor = true;
    clipbtn.events.onInputOver.add(celinebtnOverFun, this);
    clipbtn.events.onInputOut.add(celinebtnOutFun, this);
    clipbtn.events.onInputDown.add(clipbtnFun, this);
    function celinebtnOverFun(ev) {
        if (ev.filters == null) {
            ev.filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xffff00), parseFloat(0.1))];
        }
    }
    function celinebtnOutFun(ev) {
        ev.filters = null
        cmakeupglow()
    }
    function clipbtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        ceshadebtn.visible = false
        clipbtn.visible = false
        ceyebtn.visible = false
        cblushbtn.visible = false
        celashbtn.visible = false
        ceshadebtnglow.visible = false
        clipbtnglow.visible = false
        ceyebtnglow.visible = false
        cblushbtnglow.visible = false
        celashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['ceshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clip' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['ceshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clipglow' + i].visible = true
        }
    }
    cblushbtn.inputEnabled = true;
    cblushbtn.input.useHandCursor = true;
    cblushbtn.input.pixelPerfectAlpha = 10;
    cblushbtn.input.pixelPerfectOver = true;
    cblushbtn.input.pixelPerfectClick = true;
    cblushbtn.events.onInputOver.add(celinebtnOverFun, this);
    cblushbtn.events.onInputOut.add(celinebtnOutFun, this);
    cblushbtn.events.onInputDown.add(cblushbtnFun, this);
    function cblushbtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        ceshadebtn.visible = false
        clipbtn.visible = false
        ceyebtn.visible = false
        cblushbtn.visible = false
        celashbtn.visible = false
        ceshadebtnglow.visible = false
        clipbtnglow.visible = false
        ceyebtnglow.visible = false
        cblushbtnglow.visible = false
        celashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['ceshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celash' + i].visible = false
        }
        for (i = 1; i <= 3; i++) {
            game['cblush' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['ceshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celashglow' + i].visible = false
        }
        for (i = 1; i <= 3; i++) {
            game['cblushglow' + i].visible = true
        }
        rarrow.visible = true
        larrow.visible = true
    }
    ceshadebtn.inputEnabled = true;
    ceshadebtn.input.useHandCursor = true;
    ceshadebtn.input.pixelPerfectAlpha = 10;
    ceshadebtn.input.pixelPerfectOver = true;
    ceshadebtn.input.pixelPerfectClick = true;
    ceshadebtn.events.onInputOver.add(celinebtnOverFun, this);
    ceshadebtn.events.onInputOut.add(celinebtnOutFun, this);
    ceshadebtn.events.onInputDown.add(ceshadebtnFun, this);
    function ceshadebtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        ceshadebtn.visible = false
        clipbtn.visible = false
        ceyebtn.visible = false
        cblushbtn.visible = false
        celashbtn.visible = false
        ceshadebtnglow.visible = false
        clipbtnglow.visible = false
        ceyebtnglow.visible = false
        cblushbtnglow.visible = false
        celashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['ceshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celash' + i].visible = false
        }
        for (i = 1; i <= 3; i++) {
            game['ceshade' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['ceshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celashglow' + i].visible = false
        }
        for (i = 1; i <= 3; i++) {
            game['ceshadeglow' + i].visible = true
        }
        rarrow.visible = true
        larrow.visible = true
    }
    celashbtn.inputEnabled = true;
    celashbtn.input.useHandCursor = true;
    celashbtn.input.pixelPerfectAlpha = 10;
    celashbtn.input.pixelPerfectOver = true;
    celashbtn.input.pixelPerfectClick = true;
    celashbtn.events.onInputOver.add(celinebtnOverFun, this);
    celashbtn.events.onInputOut.add(celinebtnOutFun, this);
    celashbtn.events.onInputDown.add(celashbtnFun, this);
    function celashbtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        ceshadebtn.visible = false
        clipbtn.visible = false
        ceyebtn.visible = false
        cblushbtn.visible = false
        celashbtn.visible = false
        ceshadebtnglow.visible = false
        clipbtnglow.visible = false
        ceyebtnglow.visible = false
        cblushbtnglow.visible = false
        celashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['ceshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celash' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['ceshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celashglow' + i].visible = true
        }
    }
    ceyebtn.inputEnabled = true;
    ceyebtn.input.useHandCursor = true;
    ceyebtn.input.pixelPerfectAlpha = 10;
    ceyebtn.input.pixelPerfectOver = true;
    ceyebtn.input.pixelPerfectClick = true;
    ceyebtn.events.onInputOver.add(celinebtnOverFun, this);
    ceyebtn.events.onInputOut.add(celinebtnOutFun, this);
    ceyebtn.events.onInputDown.add(ceyebtnFun, this);
    function ceyebtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        ceshadebtn.visible = false
        clipbtn.visible = false
        ceyebtn.visible = false
        cblushbtn.visible = false
        celashbtn.visible = false
        ceshadebtnglow.visible = false
        clipbtnglow.visible = false
        ceyebtnglow.visible = false
        cblushbtnglow.visible = false
        celashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['ceshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceye' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['ceshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['clipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['cblushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['celashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ceyeglow' + i].visible = true
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
        if (!startgame7) {
            close2.animations.stop(null, true);
            close2.visible = false
            clipbtn.visible = true
            cblushbtn.visible = true
            ceshadebtn.visible = true
            ceyebtn.visible = true
            celashbtn.visible = true
            ceshadebtnglow.visible = true
            clipbtnglow.visible = true
            ceyebtnglow.visible = true
            cblushbtnglow.visible = true
            celashbtnglow.visible = true
            rarrow.visible = false;
            larrow.visible = false;
            for (i = 1; i <= 6; i++) {
                game['ceshade' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['clip' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['ceye' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['cblush' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['celash' + i].visible = false
            }
            for (i = 1; i <= 6; i++) {
                game['ceshadeglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['clipglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['ceyeglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['cblushglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['celashglow' + i].visible = false
            }
        }
    }
    function closeDownFun(ev) {
        if (!startgame7) {
            playsoundeffects('clickss');
            close2.animations.stop(null, true);
            ev.frame = 10;
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
        l3d1 = game.add.tween(done2).to({
            y: 500.15
        }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
    }
    function doneOutFun(ev) {
        done2.animations.stop(null, true);
        game.tweens.remove(l3d1);
        done2.y = 510.15
    }
    function doneStartFun(ev) {
        if (pageNo == 7 && !startgame7) {
            startgame7 = true;
            done2.animations.stop(null, true);
            game.tweens.remove(l3d1);
            done2.y = 510.15
            ev.frame = 0
            done2.inputEnabled = false;
            leveluppanelCreateFun();
        }
    }
    function doneStartFun1(ev) {
        if (pageNo == 7 && !startgame7) {
            playsoundeffects('clickss');
            done2.animations.stop(null, true);
            ev.frame = 1
            game.tweens.remove(l3d1);
            done2.y = 510.15
        }
    }
    for (i = 1; i <= 5; i++) {
        game['clip' + i].inputEnabled = true;
        game['clip' + i].input.useHandCursor = true;
        game['clip' + i].events.onInputOver.add(celinebtnOverFun, this);
        game['clip' + i].events.onInputOut.add(celinebtnOutFun, this);
        game['clip' + i].events.onInputDown.add(mlipFun, this);
    }
    function mlipFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(4)
        if (marr3[0] == parseInt(sno)) {
            marr3[0] = 0
            mclips.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr3[0] = parseInt(sno)
            mclips.frame = parseInt(sno)
        }
        cmakeupglow()
    }
    for (i = 1; i <= 6; i++) {
        game['ceshade' + i].inputEnabled = true;
        game['ceshade' + i].input.useHandCursor = true;
        game['ceshade' + i].input.pixelPerfectAlpha = 10;
        game['ceshade' + i].input.pixelPerfectOver = true;
        game['ceshade' + i].input.pixelPerfectClick = true;
        game['ceshade' + i].events.onInputOver.add(celinebtnOverFun, this);
        game['ceshade' + i].events.onInputOut.add(celinebtnOutFun, this);
        game['ceshade' + i].events.onInputDown.add(meshadeFun, this);
    }
    function meshadeFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(7)
        if (marr3[1] == parseInt(sno)) {
            marr3[1] = 0
            mceyeshadow.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr3[1] = parseInt(sno)
            mceyeshadow.frame = parseInt(sno)
        }
        cmakeupglow()
    }
    for (i = 1; i <= 5; i++) {
        game['cblush' + i].inputEnabled = true;
        game['cblush' + i].input.useHandCursor = true;
        game['cblush' + i].input.pixelPerfectAlpha = 10;
        game['cblush' + i].input.pixelPerfectOver = true;
        game['cblush' + i].input.pixelPerfectClick = true;
        game['cblush' + i].events.onInputOver.add(celinebtnOverFun, this);
        game['cblush' + i].events.onInputOut.add(celinebtnOutFun, this);
        game['cblush' + i].events.onInputDown.add(mblushFun, this);
    }
    function mblushFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(6)
        if (marr3[2] == parseInt(sno)) {
            marr3[2] = 0
            mcblushes.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr3[2] = parseInt(sno)
            mcblushes.frame = parseInt(sno)
        }
        cmakeupglow()
    }
    for (i = 1; i <= 5; i++) {
        game['ceye' + i].inputEnabled = true;
        game['ceye' + i].input.useHandCursor = true;
        game['ceye' + i].input.pixelPerfectAlpha = 10;
        game['ceye' + i].input.pixelPerfectOver = true;
        game['ceye' + i].input.pixelPerfectClick = true;
        game['ceye' + i].events.onInputOver.add(celinebtnOverFun, this);
        game['ceye' + i].events.onInputOut.add(celinebtnOutFun, this);
        game['ceye' + i].events.onInputDown.add(meyeFun, this);
    }
    function meyeFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(4)
        if (marr3[3] == parseInt(sno)) {
            marr3[3] = 0
            mceyeball.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr3[3] = parseInt(sno)
            mceyeball.frame = parseInt(sno)
        }
        cmakeupglow()
    }
    for (i = 1; i <= 5; i++) {
        game['celash' + i].inputEnabled = true;
        game['celash' + i].input.useHandCursor = true;
        game['celash' + i].input.pixelPerfectAlpha = 10;
        game['celash' + i].input.pixelPerfectOver = true;
        game['celash' + i].input.pixelPerfectClick = true;
        game['celash' + i].events.onInputOver.add(celinebtnOverFun, this);
        game['celash' + i].events.onInputOut.add(celinebtnOutFun, this);
        game['celash' + i].events.onInputDown.add(mmascarafun, this);
    }
    function mmascarafun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(6)
        if (marr3[4] == parseInt(sno)) {
            marr3[4] = 0
            mcmascara.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr3[4] = parseInt(sno)
            mcmascara.frame = parseInt(sno)
        }
        cmakeupglow()
    }
    function cmakeupglow() {
        for (i = 1; i <= 6; i++) {
            game['ceshade' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['clip' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['ceye' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['cblush' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['celash' + i].filters = null
        }
        if (marr3[0] > 0) {
            game['clip' + marr3[0]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr3[1] > 0) {
            game['ceshade' + marr3[1]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr3[2] > 0) {
            game['cblush' + marr3[2]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr3[3] > 0) {
            game['ceye' + marr3[3]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr3[4] > 0) {
            game['celash' + marr3[4]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
    }
}