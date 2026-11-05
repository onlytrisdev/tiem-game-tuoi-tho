var startgame3 = false
var marr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var level1_1 = {
    preload: function () {
        startgame3 = false
        pageNo = 3
        marr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    create: function () {
        showAdOnPosition('mid');
        mbackground1 = this.game.add.sprite(400, 300, 'mbackground1');
        mbackground1.anchor.setTo(0.5);
        m1abody = game.add.sprite(406.1, 458.3, 'm1abody');
        m1abody.anchor.setTo(0.5);
        m1ahead = game.add.sprite(386.1, 247.35, 'm1ahead');
        m1ahead.anchor.setTo(0.5);
        m1aeyeshadow = game.add.sprite(373.5, 249.25, 'm1aeyeshadow');
        m1aeyeshadow.anchor.setTo(0.5);
        m1eyetop = game.add.sprite(373.5, 258.2, 'm1eyetop');
        m1eyetop.anchor.setTo(0.5);
        m1alips = game.add.sprite(369.8, 330.1, 'm1alips');
        m1alips.anchor.setTo(0.5);
        m1ablushes = game.add.sprite(378.9, 283.4, 'm1ablushes');
        m1ablushes.anchor.setTo(0.5);
        m1amascara = game.add.sprite(371.2, 251.4, 'm1amascara');
        m1amascara.anchor.setTo(0.5);
        m1aeyeball = game.add.sprite(370.75, 260.85, 'm1aeyeball');
        m1aeyeball.anchor.setTo(0.5);
        m1ahair = game.add.sprite(394.2, 363.55, 'm1ahair');
        m1ahair.anchor.setTo(0.5);
        m1doll1group = game.add.group()
        m1doll1group.add(m1abody)
        m1doll1group.add(m1ahead)
        m1doll1group.add(m1aeyeshadow)
        m1doll1group.add(m1eyetop)
        m1doll1group.add(m1alips)
        m1doll1group.add(m1ablushes)
        m1doll1group.add(m1aeyeball)
        m1doll1group.add(m1amascara)
        m1doll1group.add(m1ahair)
        mtable = this.game.add.sprite(400, 577.75, 'mtable');
        mtable.anchor.setTo(0.5);
        var aesxarr = [, 286.05, 416, 541, 286.95, 415.95, 541.95]
        var aesyarr = [, 514.1, 512.1, 512.1, 512.1, 511.1, 511.1]
        for (i = 1; i <= 6; i++) {
            game['aeshade' + i] = this.game.add.sprite(aesxarr[i], aesyarr[i], 'aeshade' + i);
            game['aeshade' + i].anchor.setTo(0.5);
            game['aeshade' + i].visible = false
        }
        for (i = 1; i <= 6; i++) {
            game['aeshadeglow' + i] = this.game.add.sprite(aesxarr[i], aesyarr[i], 'aeshade' + i);
            game['aeshadeglow' + i].anchor.setTo(0.5);
            game['aeshadeglow' + i].visible = false
        }
        var aelxarr = [, 229.2, 323.65, 410.5, 498.15, 591.75]
        var aelyarr = [, 500.3, 501.1, 499.45, 501.4, 501]
        for (i = 1; i <= 5; i++) {
            game['aelash' + i] = this.game.add.sprite(aelxarr[i], aelyarr[i], 'aelash' + i);
            game['aelash' + i].anchor.setTo(0.5);
            game['aelash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelashglow' + i] = this.game.add.sprite(aelxarr[i], aelyarr[i], 'aelash' + i);
            game['aelashglow' + i].anchor.setTo(0.5);
            game['aelashglow' + i].visible = false
        }
        var alpxarr = [, 206.35, 309.7, 416.15, 518.55, 619.35]
        var alpyarr = [, 508.35, 513, 512.45, 511.4, 511.4]
        for (i = 1; i <= 5; i++) {
            game['alip' + i] = this.game.add.sprite(alpxarr[i], alpyarr[i], 'alip' + i);
            game['alip' + i].anchor.setTo(0.5);
            game['alip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alipglow' + i] = this.game.add.sprite(alpxarr[i], alpyarr[i], 'alip' + i);
            game['alipglow' + i].anchor.setTo(0.5);
            game['alipglow' + i].visible = false
        }
        var aeyxarr = [, 195.95, 297.95, 404, 507.65, 609.8]
        var aeyyarr = [, 556.15, 555.75, 557.15, 555.85, 555.05]
        for (i = 1; i <= 5; i++) {
            game['aeye' + i] = this.game.add.sprite(aeyxarr[i], aeyyarr[i], 'aeye' + i);
            game['aeye' + i].anchor.setTo(0.5);
            game['aeye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeyeglow' + i] = this.game.add.sprite(aeyxarr[i], aeyyarr[i], 'aeye' + i);
            game['aeyeglow' + i].anchor.setTo(0.5);
            game['aeyeglow' + i].visible = false
        }
        var ablxarr = [, 278.05, 407, 533, 311.95, 472.95]
        var ablyarr = [, 503.6, 503.6, 505.6, 499.6, 501.6]
        for (i = 1; i <= 5; i++) {
            game['ablush' + i] = this.game.add.sprite(ablxarr[i], ablyarr[i], 'ablush' + i);
            game['ablush' + i].anchor.setTo(0.5);
            game['ablush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablushglow' + i] = this.game.add.sprite(ablxarr[i], ablyarr[i], 'ablush' + i);
            game['ablushglow' + i].anchor.setTo(0.5);
            game['ablushglow' + i].visible = false
        }
        aeshadebtn = this.game.add.sprite(193.85, 504.8, 'aeshadebtn');
        aeshadebtn.anchor.setTo(0.5);
        alipbtn = this.game.add.sprite(379.25, 511.15, 'alipbtn');
        alipbtn.anchor.setTo(0.5);
        aeyebtn = this.game.add.sprite(480.5, 547.85, 'aeyebtn');
        aeyebtn.anchor.setTo(0.5);
        ablushbtn = this.game.add.sprite(621.7, 506.8, 'ablushbtn');
        ablushbtn.anchor.setTo(0.5);
        aelashbtn = this.game.add.sprite(304.75, 492.65, 'aelashbtn');
        aelashbtn.anchor.setTo(0.5);
        aeshadebtnglow = this.game.add.sprite(193.85, 504.8, 'aeshadebtn');
        aeshadebtnglow.anchor.setTo(0.5);
        alipbtnglow = this.game.add.sprite(379.25, 511.15, 'alipbtn');
        alipbtnglow.anchor.setTo(0.5);
        aeyebtnglow = this.game.add.sprite(480.5, 547.85, 'aeyebtn');
        aeyebtnglow.anchor.setTo(0.5);
        ablushbtnglow = this.game.add.sprite(621.7, 506.8, 'ablushbtn');
        ablushbtnglow.anchor.setTo(0.5);
        aelashbtnglow = this.game.add.sprite(304.75, 492.65, 'aelashbtn');
        aelashbtnglow.anchor.setTo(0.5);
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
        logofbkmute()
        leveluppanelReverseFun()
    }
}
function makeupstartFun1() {
    rarrow.inputEnabled = true;
    rarrow.input.useHandCursor = true;
    rarrow.input.pixelPerfectAlpha = 10;
    rarrow.input.pixelPerfectOver = true;
    rarrow.input.pixelPerfectClick = true;
    rarrow.events.onInputDown.add(rarrowFun311, this);
    larrow.inputEnabled = true;
    larrow.input.useHandCursor = true;
    larrow.input.pixelPerfectAlpha = 10;
    larrow.input.pixelPerfectOver = true;
    larrow.input.pixelPerfectClick = true;
    larrow.events.onInputDown.add(rarrowFun311, this);
    function rarrowFun311() {
        playsoundeffects('clickss');
        if (game['ablush' + 1].visible) {
            for (i = 1; i <= 3; i++) {
                game['ablush' + i].visible = false
            }
            for (i = 4; i <= 5; i++) {
                game['ablush' + i].visible = true
            }
            for (i = 1; i <= 3; i++) {
                game['ablushglow' + i].visible = false
            }
            for (i = 4; i <= 5; i++) {
                game['ablushglow' + i].visible = true
            }
        } else if (game['ablush' + 4].visible) {
            for (i = 1; i <= 3; i++) {
                game['ablush' + i].visible = true
            }
            for (i = 4; i <= 5; i++) {
                game['ablush' + i].visible = false
            }
            for (i = 1; i <= 3; i++) {
                game['ablushglow' + i].visible = true
            }
            for (i = 4; i <= 5; i++) {
                game['ablushglow' + i].visible = false
            }
        }
        if (game['aeshade' + 1].visible) {
            for (i = 1; i <= 3; i++) {
                game['aeshade' + i].visible = false
            }
            for (i = 4; i <= 6; i++) {
                game['aeshade' + i].visible = true
            }
            for (i = 1; i <= 3; i++) {
                game['aeshadeglow' + i].visible = false
            }
            for (i = 4; i <= 6; i++) {
                game['aeshadeglow' + i].visible = true
            }
        } else if (game['aeshade' + 4].visible) {
            for (i = 1; i <= 3; i++) {
                game['aeshade' + i].visible = true
            }
            for (i = 4; i <= 6; i++) {
                game['aeshade' + i].visible = false
            }
            for (i = 1; i <= 3; i++) {
                game['aeshadeglow' + i].visible = true
            }
            for (i = 4; i <= 6; i++) {
                game['aeshadeglow' + i].visible = false
            }
        }
    }
    alipbtn.inputEnabled = true;
    alipbtn.input.useHandCursor = true;
    alipbtn.events.onInputOver.add(elinebtnOverFun, this);
    alipbtn.events.onInputOut.add(elinebtnOutFun, this);
    alipbtn.events.onInputDown.add(alipbtnFun, this);
    function elinebtnOverFun(ev) {
        if (ev.filters == null) {
            ev.filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xffff00), parseFloat(0.1))];
        }
    }
    function elinebtnOutFun(ev) {
        ev.filters = null
        makeupglow()
    }
    function alipbtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        aeshadebtn.visible = false
        alipbtn.visible = false
        aeyebtn.visible = false
        ablushbtn.visible = false
        aelashbtn.visible = false
        aeshadebtnglow.visible = false
        alipbtnglow.visible = false
        aeyebtnglow.visible = false
        ablushbtnglow.visible = false
        aelashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['aeshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alip' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['aeshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alipglow' + i].visible = true
        }
    }
    ablushbtn.inputEnabled = true;
    ablushbtn.input.useHandCursor = true;
    ablushbtn.input.pixelPerfectAlpha = 10;
    ablushbtn.input.pixelPerfectOver = true;
    ablushbtn.input.pixelPerfectClick = true;
    ablushbtn.events.onInputOver.add(elinebtnOverFun, this);
    ablushbtn.events.onInputOut.add(elinebtnOutFun, this);
    ablushbtn.events.onInputDown.add(ablushbtnFun, this);
    function ablushbtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        aeshadebtn.visible = false
        alipbtn.visible = false
        aeyebtn.visible = false
        ablushbtn.visible = false
        aelashbtn.visible = false
        aeshadebtnglow.visible = false
        alipbtnglow.visible = false
        aeyebtnglow.visible = false
        ablushbtnglow.visible = false
        aelashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['aeshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelash' + i].visible = false
        }
        for (i = 1; i <= 3; i++) {
            game['ablush' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['aeshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelashglow' + i].visible = false
        }
        for (i = 1; i <= 3; i++) {
            game['ablushglow' + i].visible = true
        }
        rarrow.visible = true
        larrow.visible = true
    }
    aeshadebtn.inputEnabled = true;
    aeshadebtn.input.useHandCursor = true;
    aeshadebtn.input.pixelPerfectAlpha = 10;
    aeshadebtn.input.pixelPerfectOver = true;
    aeshadebtn.input.pixelPerfectClick = true;
    aeshadebtn.events.onInputOver.add(elinebtnOverFun, this);
    aeshadebtn.events.onInputOut.add(elinebtnOutFun, this);
    aeshadebtn.events.onInputDown.add(aeshadebtnFun, this);
    function aeshadebtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        aeshadebtn.visible = false
        alipbtn.visible = false
        aeyebtn.visible = false
        ablushbtn.visible = false
        aelashbtn.visible = false
        aeshadebtnglow.visible = false
        alipbtnglow.visible = false
        aeyebtnglow.visible = false
        ablushbtnglow.visible = false
        aelashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['aeshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelash' + i].visible = false
        }
        for (i = 1; i <= 3; i++) {
            game['aeshade' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['aeshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelashglow' + i].visible = false
        }
        for (i = 1; i <= 3; i++) {
            game['aeshadeglow' + i].visible = true
        }
        rarrow.visible = true
        larrow.visible = true
    }
    aelashbtn.inputEnabled = true;
    aelashbtn.input.useHandCursor = true;
    aelashbtn.input.pixelPerfectAlpha = 10;
    aelashbtn.input.pixelPerfectOver = true;
    aelashbtn.input.pixelPerfectClick = true;
    aelashbtn.events.onInputOver.add(elinebtnOverFun, this);
    aelashbtn.events.onInputOut.add(elinebtnOutFun, this);
    aelashbtn.events.onInputDown.add(aelashbtnFun, this);
    function aelashbtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        aeshadebtn.visible = false
        alipbtn.visible = false
        aeyebtn.visible = false
        ablushbtn.visible = false
        aelashbtn.visible = false
        aeshadebtnglow.visible = false
        alipbtnglow.visible = false
        aeyebtnglow.visible = false
        ablushbtnglow.visible = false
        aelashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['aeshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelash' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['aeshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelashglow' + i].visible = true
        }
    }
    aeyebtn.inputEnabled = true;
    aeyebtn.input.useHandCursor = true;
    aeyebtn.input.pixelPerfectAlpha = 10;
    aeyebtn.input.pixelPerfectOver = true;
    aeyebtn.input.pixelPerfectClick = true;
    aeyebtn.events.onInputOver.add(elinebtnOverFun, this);
    aeyebtn.events.onInputOut.add(elinebtnOutFun, this);
    aeyebtn.events.onInputDown.add(aeyebtnFun, this);
    function aeyebtnFun(ev) {
        playsoundeffects('itemclick');
        close2.visible = true
        aeshadebtn.visible = false
        alipbtn.visible = false
        aeyebtn.visible = false
        ablushbtn.visible = false
        aelashbtn.visible = false
        aeshadebtnglow.visible = false
        alipbtnglow.visible = false
        aeyebtnglow.visible = false
        ablushbtnglow.visible = false
        aelashbtnglow.visible = false
        for (i = 1; i <= 6; i++) {
            game['aeshade' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alip' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeye' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablush' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelash' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeye' + i].visible = true
        }
        for (i = 1; i <= 6; i++) {
            game['aeshadeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['alipglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeyeglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['ablushglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aelashglow' + i].visible = false
        }
        for (i = 1; i <= 5; i++) {
            game['aeyeglow' + i].visible = true
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
        if (!startgame3) {
            rarrow.visible = false
            larrow.visible = false
            close2.animations.stop(null, true);
            close2.visible = false
            alipbtn.visible = true
            ablushbtn.visible = true
            aeshadebtn.visible = true
            aeyebtn.visible = true
            aelashbtn.visible = true
            aeshadebtnglow.visible = true
            alipbtnglow.visible = true
            aeyebtnglow.visible = true
            ablushbtnglow.visible = true
            aelashbtnglow.visible = true
            for (i = 1; i <= 6; i++) {
                game['aeshade' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['alip' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['aeye' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['ablush' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['aelash' + i].visible = false
            }
            for (i = 1; i <= 6; i++) {
                game['aeshadeglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['alipglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['aeyeglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['ablushglow' + i].visible = false
            }
            for (i = 1; i <= 5; i++) {
                game['aelashglow' + i].visible = false
            }
        }
    }
    function closeDownFun(ev) {
        if (!startgame3) {
            playsoundeffects('clickss');
            close2.animations.stop(null, true);
            ev.frame = 10;
        }
    }
    for (i = 1; i <= 5; i++) {
        game['alip' + i].inputEnabled = true;
        game['alip' + i].input.useHandCursor = true;
        game['alip' + i].events.onInputOver.add(elinebtnOverFun, this);
        game['alip' + i].events.onInputOut.add(elinebtnOutFun, this);
        game['alip' + i].events.onInputDown.add(mlipFun, this);
    }
    function mlipFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(4)
        if (marr1[0] == parseInt(sno)) {
            marr1[0] = 0
            m1alips.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr1[0] = parseInt(sno)
            m1alips.frame = parseInt(sno)
        }
        makeupglow()
    }
    for (i = 1; i <= 6; i++) {
        game['aeshade' + i].inputEnabled = true;
        game['aeshade' + i].input.useHandCursor = true;
        game['aeshade' + i].input.pixelPerfectAlpha = 10;
        game['aeshade' + i].input.pixelPerfectOver = true;
        game['aeshade' + i].input.pixelPerfectClick = true;
        game['aeshade' + i].events.onInputOver.add(elinebtnOverFun, this);
        game['aeshade' + i].events.onInputOut.add(elinebtnOutFun, this);
        game['aeshade' + i].events.onInputDown.add(meshadeFun, this);
    }
    function meshadeFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(7)
        if (marr1[1] == parseInt(sno)) {
            marr1[1] = 0
            m1aeyeshadow.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr1[1] = parseInt(sno)
            m1aeyeshadow.frame = parseInt(sno)
        }
        makeupglow()
    }
    for (i = 1; i <= 5; i++) {
        game['ablush' + i].inputEnabled = true;
        game['ablush' + i].input.useHandCursor = true;
        game['ablush' + i].input.pixelPerfectAlpha = 10;
        game['ablush' + i].input.pixelPerfectOver = true;
        game['ablush' + i].input.pixelPerfectClick = true;
        game['ablush' + i].events.onInputOver.add(elinebtnOverFun, this);
        game['ablush' + i].events.onInputOut.add(elinebtnOutFun, this);
        game['ablush' + i].events.onInputDown.add(mblushFun, this);
    }
    function mblushFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(6)
        if (marr1[2] == parseInt(sno)) {
            marr1[2] = 0
            m1ablushes.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr1[2] = parseInt(sno)
            m1ablushes.frame = parseInt(sno)
        }
        makeupglow()
    }
    for (i = 1; i <= 5; i++) {
        game['aeye' + i].inputEnabled = true;
        game['aeye' + i].input.useHandCursor = true;
        game['aeye' + i].input.pixelPerfectAlpha = 10;
        game['aeye' + i].input.pixelPerfectOver = true;
        game['aeye' + i].input.pixelPerfectClick = true;
        game['aeye' + i].events.onInputOver.add(elinebtnOverFun, this);
        game['aeye' + i].events.onInputOut.add(elinebtnOutFun, this);
        game['aeye' + i].events.onInputDown.add(meyeFun, this);
    }
    function meyeFun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(4)
        if (marr1[3] == parseInt(sno)) {
            marr1[3] = 0
            m1aeyeball.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr1[3] = parseInt(sno)
            m1aeyeball.frame = parseInt(sno)
        }
        makeupglow()
    }
    for (i = 1; i <= 5; i++) {
        game['aelash' + i].inputEnabled = true;
        game['aelash' + i].input.useHandCursor = true;
        game['aelash' + i].input.pixelPerfectAlpha = 10;
        game['aelash' + i].input.pixelPerfectOver = true;
        game['aelash' + i].input.pixelPerfectClick = true;
        game['aelash' + i].events.onInputOver.add(elinebtnOverFun, this);
        game['aelash' + i].events.onInputOut.add(elinebtnOutFun, this);
        game['aelash' + i].events.onInputDown.add(mmascarafun, this);
    }
    function mmascarafun(ev) {
        done2.visible = true
        playsoundeffects('itemclick');
        sno = ev.key.substr(6)
        if (marr1[4] == parseInt(sno)) {
            marr1[4] = 0
            m1amascara.frame = 0
        } else {
            stargilter.visible = true
            stargilter.animations.add('stargilter');
            stargilter.animations.play('stargilter', 24, false);
            marr1[4] = parseInt(sno)
            m1amascara.frame = parseInt(sno)
        }
        makeupglow()
    }
    function makeupglow() {
        for (i = 1; i <= 6; i++) {
            game['aeshade' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['alip' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['aeye' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['ablush' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['aelash' + i].filters = null
        }
        if (marr1[0] > 0) {
            game['alip' + marr1[0]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr1[1] > 0) {
            game['aeshade' + marr1[1]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr1[2] > 0) {
            game['ablush' + marr1[2]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr1[3] > 0) {
            game['aeye' + marr1[3]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
        }
        if (marr1[4] > 0) {
            game['aelash' + marr1[4]].filters = [new GlowFilter(550, 550, parseFloat(4), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.1))];
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
        l1d1 = game.add.tween(done2).to({
            y: 500.15
        }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
    }
    function doneOutFun(ev) {
        done2.animations.stop(null, true);
        game.tweens.remove(l1d1);
        done2.y = 510.15
        done2.frame = 0
    }
    function doneStartFun(ev) {
        if (pageNo == 3 && !startgame3) {
            done2.inputEnabled = false;
            startgame3 = true;
            done2.animations.stop(null, true);
            game.tweens.remove(l1d1);
            done2.y = 510.15
            ev.frame = 1
            leveluppanelCreateFun();
        }
    }
    function doneStartFun1(ev) {
        if (pageNo == 3 && !startgame3) {
            playsoundeffects('clickss');
            done2.animations.stop(null, true);
            ev.frame = 1
            game.tweens.remove(l1d1);
            done2.y = 510.15
        }
    }
}