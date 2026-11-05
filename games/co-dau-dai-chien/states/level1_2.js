var dressup1Finish = false
var adressuparr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var level1_2 = {
    preload: function () {
        pageNo = 4;
        dressup1Finish = false
        adressuparr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    create: function () {
        showAdOnPosition('mid1');
        abackground = this.game.add.sprite(400, 300, 'abackground');
        abackground.anchor.setTo(0.5);
        aheadacc = game.add.sprite(303, 235.05, 'aheadacc');
        aheadacc.anchor.setTo(0.5);
        abody = game.add.sprite(281.05, 387.1, 'abody');
        abody.anchor.setTo(0.5);
        adress = game.add.sprite(298, 412.05, 'adress');
        adress.anchor.setTo(0.5);
        ahead = game.add.sprite(283.05, 131, 'ahead');
        ahead.anchor.setTo(0.5);
        aeyetop = game.add.sprite(276.05, 137, 'aeyetop');
        aeyetop.anchor.setTo(0.5);
        alips = game.add.sprite(274, 176.95, 'alips');
        alips.anchor.setTo(0.5);
        ablushes = game.add.sprite(279.05, 151, 'ablushes');
        ablushes.anchor.setTo(0.5);
        aeyeshadow = game.add.sprite(276.05, 132.05, 'aeyeshadow');
        aeyeshadow.anchor.setTo(0.5);
        amascara = game.add.sprite(274.75, 133.25, 'amascara');
        amascara.anchor.setTo(0.5);
        aeyeball = game.add.sprite(275.95, 143.15, 'aeyeball');
        aeyeball.anchor.setTo(0.5);
        achainacc = game.add.sprite(289.55, 245.55, 'achainacc');
        achainacc.anchor.setTo(0.5);
        ahair = game.add.sprite(287.55, 195.55, 'ahair');
        ahair.anchor.setTo(0.5);
        acrownacc = game.add.sprite(283.5, 79.95, 'acrownacc');
        acrownacc.anchor.setTo(0.5);
        astud = game.add.sprite(278.5, 176.55, 'astud');
        astud.anchor.setTo(0.5);
        doll1group = game.add.group()
        doll1group.add(aheadacc)
        doll1group.add(abody)
        doll1group.add(adress)
        doll1group.add(ahead)
        doll1group.add(aeyeshadow)
        doll1group.add(aeyetop)
        doll1group.add(alips)
        doll1group.add(ablushes)
        doll1group.add(aeyeball)
        doll1group.add(amascara)
        doll1group.add(achainacc)
        doll1group.add(ahair)
        doll1group.add(acrownacc)
        doll1group.add(astud)
        doll1group.scale.setTo(0.99)
        doll1group.x = 350
        doll1group.y = 20
        alips.frame = marr1[0]
        aeyeshadow.frame = marr1[1]
        ablushes.frame = marr1[2]
        aeyeball.frame = marr1[3]
        amascara.frame = marr1[4]
        acupboard = game.add.sprite(184, 295.05, 'acupboard');
        acupboard.anchor.setTo(0.5);
        var drsxarr = [, 56.5, 92.95, 151.95, 218.95, 276.45, 315.45]
        var drsyarr = [, 195, 191, 190.5, 193.5, 186, 192.5]
        for (i = 1; i <= 6; i++) {
            game['adress' + i] = this.game.add.image(drsxarr[i], drsyarr[i], 'adress' + i);
            game['adress' + i].anchor.set(0.5);
        }
        var hrixarr = [, 123.5, 261.2, 119.45, 259.3]
        var hriyarr = [, 206.05, 195.7, 362.4, 372.85]
        for (i = 1; i <= 4; i++) {
            game['ahair' + i] = this.game.add.image(hrixarr[i], hriyarr[i], 'ahair' + i);
            game['ahair' + i].anchor.set(0.5);
            game['ahair' + i].visible = false
        }
        var studcxarr = [, 115.95, 269.85, 113.65, 265.3]
        var studyarr = [, 202.6, 201.7, 365.5, 367.3]
        for (i = 1; i <= 4; i++) {
            game['astud' + i] = this.game.add.image(studcxarr[i], studyarr[i], 'astud' + i);
            game['astud' + i].anchor.set(0.5);
            game['astud' + i].visible = false
        }
        var crwnxarr = [, 88.5, 191.95, 291.95]
        var crwnyarr = [, 196.5, 200, 202.5]
        for (i = 1; i <= 3; i++) {
            game['acrown' + i] = this.game.add.image(crwnxarr[i], crwnyarr[i], 'acrown' + i);
            game['acrown' + i].anchor.set(0.5);
            game['acrown' + i].visible = false
        }
        var acxarr = [, 103.45, 278.95]
        var acyarr = [, 367.95, 354.45]
        for (i = 1; i <= 2; i++) {
            game['aacc' + i] = this.game.add.image(acxarr[i], acyarr[i], 'aacc' + i);
            game['aacc' + i].anchor.set(0.5);
            game['aacc' + i].visible = false
        }
        var chxarr = [, 85.5, 189.95, 289.45, 89.75, 293.7]
        var chyarr = [, 216.5, 221, 219.5, 388.45, 385.65]
        for (i = 1; i <= 5; i++) {
            game['achain' + i] = this.game.add.image(chxarr[i], chyarr[i], 'achain' + i);
            game['achain' + i].anchor.set(0.5);
            game['achain' + i].visible = false;
        }
        rarrow = game.add.sprite(291.05, 532.15, 'arrow')
        rarrow.anchor.setTo(0.5)
        game.add.tween(rarrow).to({
            x: 301.05
        }, 1000, Phaser.Easing.Linear.NONE, true, 1000, -1, true)
        larrow = game.add.sprite(70.05, 533.15, 'arrow')
        larrow.anchor.setTo(0.5)
        larrow.scale.x = -1
        stargilter = this.game.add.sprite(-400.05, 331.7, 'stargilter')
        stargilter.anchor.setTo(0.5)
        stargilter.animations.add('stargilter')
        game.add.tween(larrow).to({
            x: 60.05
        }, 1000, Phaser.Easing.Linear.NONE, true, 1000, -1, true)
        done1 = game.add.sprite(183.1, 510.15, 'done1');
        done1.anchor.setTo(0.5);
        done1.visible = false;
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
        logofbkmute();
        leveluppanelReverseFun();
    }
}
function dressup1fun() {
    moregames2.inputEnabled = true;
    moregames2.input.useHandCursor = true;
    moregames2.input.pixelPerfectOver = true;
    moregames2.input.pixelPerfectClick = true;
    moregames2.events.onInputOver.add(moregamesOverFun, this);
    moregames2.events.onInputOut.add(moregamesOutFun, this);
    moregames2.events.onInputDown.add(moregamesdownFun, this);
    moregames2.events.onInputUp.add(moregamesupFun, this);
    done1.inputEnabled = true;
    done1.input.useHandCursor = true;
    done1.input.pixelPerfectOver = true;
    done1.input.pixelPerfectClick = true;
    done1.events.onInputOver.add(done1OverFun, this);
    done1.events.onInputOut.add(done1OutFun, this);
    done1.events.onInputUp.add(done1StartFun1, this);
    done1.events.onInputDown.add(done1StartFun, this);
    function done1OverFun(ev) {
        if (!dressup1Finish) {
            l1d2 = game.add.tween(done1).to({
                y: 500.15
            }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
        }
    }
    function done1OutFun(ev) {
        if (!dressup1Finish) {
            done1.animations.stop(null, true);
            game.tweens.remove(l1d2);
            done1.y = 510.15
        }
    }
    function done1StartFun1(ev) {
        if (!dressup1Finish) {
            done1.inputEnabled = false;
            done1.scale.setTo(1)
            startgame = true;
            done1.animations.stop(null, true);
            game.tweens.remove(l1d2);
            done1.frame = 1
            done1.y = 510.15
            lcount1 = 1;
            leveluppanelCreateFun();
        }
    }
    function done1StartFun(ev) {
        if (!dressup1Finish) {
            playsoundeffects('clickss');
            done1.animations.stop(null, true);
            game.tweens.remove(l1d2);
            done1.y = 510.15
            done1.frame = 1
            lcount = 1
        }
    }
    larrow.inputEnabled = true;
    larrow.input.useHandCursor = true;
    larrow.input.pixelPerfectOver = true;
    larrow.input.pixelPerfectClick = true;
    larrow.events.onInputDown.add(larrowDownFun, this);
    function larrowDownFun() {
        playsoundeffects('clickss');
        if (game['ahair' + 1].visible) {
            acupboard.frame = 0;
            for (i = 1; i <= 6; i++) {
                game['adress' + i].visible = true;
            }
            for (i = 1; i <= 4; i++) {
                game['ahair' + i].visible = false;
            }
        } else if (game['astud' + 1].visible) {
            acupboard.frame = 1;
            for (i = 1; i <= 4; i++) {
                game['astud' + i].visible = false;
            }
            for (i = 1; i <= 4; i++) {
                game['ahair' + i].visible = true;
            }
        } else if (game['acrown' + 1].visible) {
            acupboard.frame = 1;
            for (i = 1; i <= 4; i++) {
                game['astud' + i].visible = true;
            }
            for (i = 1; i <= 3; i++) {
                game['acrown' + i].visible = false;
            }
            for (i = 1; i <= 2; i++) {
                game['aacc' + i].visible = false;
            }
        } else if (game['achain' + 1].visible) {
            acupboard.frame = 1;
            for (i = 1; i <= 5; i++) {
                game['achain' + i].visible = false;
            }
            for (i = 1; i <= 3; i++) {
                game['acrown' + i].visible = true;
            }
            for (i = 1; i <= 2; i++) {
                game['aacc' + i].visible = true;
            }
        } else if (game['adress' + 1].visible) {
            acupboard.frame = 1;
            for (i = 1; i <= 5; i++) {
                game['achain' + i].visible = true;
            }
            for (i = 1; i <= 6; i++) {
                game['adress' + i].visible = false;
            }
        }
    }
    rarrow.inputEnabled = true;
    rarrow.input.useHandCursor = true;
    rarrow.input.pixelPerfectOver = true;
    rarrow.input.pixelPerfectClick = true;
    rarrow.events.onInputDown.add(rarrowDownFun, this);
    function rarrowDownFun() {
        playsoundeffects('clickss');
        if (game['adress' + 1].visible) {
            acupboard.frame = 1;
            for (i = 1; i <= 6; i++) {
                game['adress' + i].visible = false;
            }
            for (i = 1; i <= 4; i++) {
                game['ahair' + i].visible = true;
            }
        } else if (game['ahair' + 1].visible) {
            acupboard.frame = 1;
            for (i = 1; i <= 4; i++) {
                game['astud' + i].visible = true;
            }
            for (i = 1; i <= 4; i++) {
                game['ahair' + i].visible = false;
            }
        } else if (game['astud' + 1].visible) {
            acupboard.frame = 1;
            for (i = 1; i <= 4; i++) {
                game['astud' + i].visible = false;
            }
            for (i = 1; i <= 3; i++) {
                game['acrown' + i].visible = true;
            }
            for (i = 1; i <= 2; i++) {
                game['aacc' + i].visible = true;
            }
        } else if (game['acrown' + 1].visible) {
            acupboard.frame = 1;
            for (i = 1; i <= 5; i++) {
                game['achain' + i].visible = true;
            }
            for (i = 1; i <= 3; i++) {
                game['acrown' + i].visible = false;
            }
            for (i = 1; i <= 2; i++) {
                game['aacc' + i].visible = false;
            }
        } else if (game['achain' + 1].visible) {
            acupboard.frame = 0;
            for (i = 1; i <= 5; i++) {
                game['achain' + i].visible = false;
            }
            for (i = 1; i <= 6; i++) {
                game['adress' + i].visible = true;
            }
        }
    }
    for (i = 1; i <= 6; i++) {
        game['adress' + i].inputEnabled = true;
        game['adress' + i].input.useHandCursor = true;
        game['adress' + i].input.pixelPerfectOver = true;
        game['adress' + i].input.pixelPerfectAlpha = 10;
        game['adress' + i].input.pixelPerfectClick = true;
        game['adress' + i].events.onInputOver.add(adressOverFun, this);
        game['adress' + i].events.onInputOut.add(adressOutFun, this);
        game['adress' + i].events.onInputDown.add(adressdownFun, this);
    }
    function adressOverFun(ev) {
        ev.filters = [
                new GlowFilter(450, 450, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xFFCC00), parseFloat(0.1))
            ];
        if (adressuparr[1] > 0) {
            game['adress' + adressuparr[1]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[2] > 0) {
            game['ahair' + adressuparr[2]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[3] > 0) {
            game['astud' + adressuparr[3]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[4] > 0) {
            game['achain' + adressuparr[4]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[5] > 0) {
            game['aacc' + adressuparr[5]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[6] > 0) {
            game['acrown' + adressuparr[6]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
    }
    function adressOutFun(ev) {
        for (i = 1; i <= 6; i++) {
            game['adress' + i].filters = null
        }
        for (i = 1; i <= 4; i++) {
            game['ahair' + i].filters = null
            game['astud' + i].filters = null
        }
        for (i = 1; i <= 5; i++) {
            game['achain' + i].filters = null;
        }
        for (i = 1; i <= 3; i++) {
            game['acrown' + i].filters = null;
        }
        for (i = 1; i <= 2; i++) {
            game['aacc' + i].filters = null;
        }
        adressupGlow()
    }
    function adressdownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y
        game.add.tween(stargilter).to({
            x: 640,
            y: 500
        }, 350, Phaser.Easing.Bounce.NONE, true).onComplete.add(stargilterFun1, this)
        function stargilterFun1() {
            stargilter.animations.play('stargilter', 24, false).onComplete.add(stargilter11, this)
            function stargilter11() {
                stargilter.frame = 0
                stargilter.x = -400
            }
        }
        sno = ev.key.substr(6);
        if (adressuparr[1] == parseInt(sno)) {
            adress.frame = 0;
            adressuparr[1] = 0;
        } else {
            adress.frame = parseInt(sno);
            adressuparr[1] = parseInt(sno);
        }
        adressupGlow();
        d1donefun()
    }
    for (i = 1; i <= 4; i++) {
        game['ahair' + i].inputEnabled = true;
        game['ahair' + i].input.useHandCursor = true;
        game['ahair' + i].input.pixelPerfectOver = true;
        game['ahair' + i].input.pixelPerfectAlpha = 10;
        game['ahair' + i].input.pixelPerfectClick = true;
        game['ahair' + i].events.onInputOver.add(adressOverFun, this);
        game['ahair' + i].events.onInputOut.add(adressOutFun, this);
        game['ahair' + i].events.onInputDown.add(ahairdownFun, this);
    }
    function ahairdownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y
        game.add.tween(stargilter).to({
            x: 640,
            y: 150
        }, 350, Phaser.Easing.Bounce.NONE, true).onComplete.add(stargilterFun1, this)
        function stargilterFun1() {
            stargilter.animations.play('stargilter', 24, false).onComplete.add(stargilter11, this)
            function stargilter11() {
                stargilter.frame = 0
                stargilter.x = -400
            }
        }
        sno = ev.key.substr(5);
        if (adressuparr[2] == parseInt(sno)) {
            ahair.frame = 0;
            adressuparr[2] = 0;
        } else {
            ahair.frame = parseInt(sno);
            adressuparr[2] = parseInt(sno);
        }
        adressupGlow();
        d1donefun()
    }
    for (i = 1; i <= 4; i++) {
        game['astud' + i].inputEnabled = true;
        game['astud' + i].input.useHandCursor = true;
        game['astud' + i].input.pixelPerfectOver = true;
        game['astud' + i].input.pixelPerfectAlpha = 10;
        game['astud' + i].input.pixelPerfectClick = true;
        game['astud' + i].events.onInputOver.add(adressOverFun, this);
        game['astud' + i].events.onInputOut.add(adressOutFun, this);
        game['astud' + i].events.onInputDown.add(astuddownFun, this);
    }
    function astuddownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y
        game.add.tween(stargilter).to({
            x: 640,
            y: 150
        }, 350, Phaser.Easing.Bounce.NONE, true).onComplete.add(stargilterFun1, this)
        function stargilterFun1() {
            stargilter.animations.play('stargilter', 24, false).onComplete.add(stargilter11, this)
            function stargilter11() {
                stargilter.frame = 0
                stargilter.x = -400
            }
        }
        sno = ev.key.substr(5);
        if (adressuparr[3] == parseInt(sno)) {
            astud.frame = 0;
            adressuparr[3] = 0;
        } else {
            astud.frame = parseInt(sno);
            adressuparr[3] = parseInt(sno);
        }
        adressupGlow();
        d1donefun()
    }
    for (i = 1; i <= 5; i++) {
        game['achain' + i].inputEnabled = true;
        game['achain' + i].input.useHandCursor = true;
        game['achain' + i].input.pixelPerfectOver = true;
        game['achain' + i].input.pixelPerfectAlpha = 10;
        game['achain' + i].input.pixelPerfectClick = true;
        game['achain' + i].events.onInputOver.add(adressOverFun, this);
        game['achain' + i].events.onInputOut.add(adressOutFun, this);
        game['achain' + i].events.onInputDown.add(achaindownFun, this);
    }
    function achaindownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y
        game.add.tween(stargilter).to({
            x: 640,
            y: 200
        }, 350, Phaser.Easing.Bounce.NONE, true).onComplete.add(stargilterFun1, this)
        function stargilterFun1() {
            stargilter.animations.play('stargilter', 24, false).onComplete.add(stargilter11, this)
            function stargilter11() {
                stargilter.frame = 0
                stargilter.x = -400
            }
        }
        sno = ev.key.substr(6);
        if (adressuparr[4] == parseInt(sno)) {
            achainacc.frame = 0;
            adressuparr[4] = 0;
        } else {
            achainacc.frame = parseInt(sno);
            adressuparr[4] = parseInt(sno);
        }
        adressupGlow();
        d1donefun()
    }
    for (i = 1; i <= 2; i++) {
        game['aacc' + i].inputEnabled = true;
        game['aacc' + i].input.useHandCursor = true;
        game['aacc' + i].input.pixelPerfectOver = true;
        game['aacc' + i].input.pixelPerfectAlpha = 10;
        game['aacc' + i].input.pixelPerfectClick = true;
        game['aacc' + i].events.onInputOver.add(adressOverFun, this);
        game['aacc' + i].events.onInputOut.add(adressOutFun, this);
        game['aacc' + i].events.onInputDown.add(aaccdownFun, this);
    }
    function aaccdownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y
        game.add.tween(stargilter).to({
            x: 640,
            y: 200
        }, 350, Phaser.Easing.Bounce.NONE, true).onComplete.add(stargilterFun1, this)
        function stargilterFun1() {
            stargilter.animations.play('stargilter', 24, false).onComplete.add(stargilter11, this)
            function stargilter11() {
                stargilter.frame = 0
                stargilter.x = -400
            }
        }
        sno = ev.key.substr(4);
        if (adressuparr[5] == parseInt(sno)) {
            aheadacc.frame = 0;
            adressuparr[5] = 0;
        } else {
            aheadacc.frame = parseInt(sno);
            adressuparr[5] = parseInt(sno);
        }
        adressupGlow();
        d1donefun()
    }
    for (i = 1; i <= 3; i++) {
        game['acrown' + i].inputEnabled = true;
        game['acrown' + i].input.useHandCursor = true;
        game['acrown' + i].input.pixelPerfectOver = true;
        game['acrown' + i].input.pixelPerfectAlpha = 10;
        game['acrown' + i].input.pixelPerfectClick = true;
        game['acrown' + i].events.onInputOver.add(adressOverFun, this);
        game['acrown' + i].events.onInputOut.add(adressOutFun, this);
        game['acrown' + i].events.onInputDown.add(acrowndownFun, this);
    }
    function acrowndownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y
        game.add.tween(stargilter).to({
            x: 640,
            y: 200
        }, 350, Phaser.Easing.Bounce.NONE, true).onComplete.add(stargilterFun1, this)
        function stargilterFun1() {
            stargilter.animations.play('stargilter', 24, false).onComplete.add(stargilter11, this)
            function stargilter11() {
                stargilter.frame = 0
                stargilter.x = -400
            }
        }
        sno = ev.key.substr(6);
        if (adressuparr[6] == parseInt(sno)) {
            acrownacc.frame = 0;
            adressuparr[6] = 0;
        } else {
            acrownacc.frame = parseInt(sno);
            adressuparr[6] = parseInt(sno);
        }
        adressupGlow();
        d1donefun()
    }
    function d1donefun() {
        done1.visible = true;
    }
    function adressupGlow() {
        for (i = 1; i <= 6; i++) {
            game['adress' + i].filters = null;
        }
        for (i = 1; i <= 5; i++) {
            game['achain' + i].filters = null;
        }
        for (i = 1; i <= 2; i++) {
            game['aacc' + i].filters = null;
        }
        for (i = 1; i <= 3; i++) {
            game['acrown' + i].filters = null;
        }
        for (i = 1; i <= 4; i++) {
            game['ahair' + i].filters = null;
            game['astud' + i].filters = null;
        }
        if (adressuparr[1] > 0) {
            game['adress' + adressuparr[1]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[2] > 0) {
            game['ahair' + adressuparr[2]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[3] > 0) {
            game['astud' + adressuparr[3]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[4] > 0) {
            game['achain' + adressuparr[4]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[5] > 0) {
            game['aacc' + adressuparr[5]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (adressuparr[6] > 0) {
            game['acrown' + adressuparr[6]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
    }
}