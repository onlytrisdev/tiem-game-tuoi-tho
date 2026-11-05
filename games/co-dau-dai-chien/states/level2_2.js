var dressup2Finish = false
var bdressuparr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var level2_2 = {
    preload: function () {
        pageNo = 6;
        dressUpFinish2 = false
        bdressuparr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    create: function () {
        showAdOnPosition('mid3');
        bbackground = this.game.add.sprite(400, 300, 'bbackground');
        bbackground.anchor.setTo(0.5);
        bbackground.scale.setTo(1.05);
        bcupboard = this.game.add.sprite(224.05, 189, 'bcupboard');
        bcupboard.anchor.setTo(0.5);
        var mdaxrr = [, 111.45, 179.95, 233.95, 284.45, 325.45, 386.45]
        var mdayrr = [, 242.45, 248.45, 250.95, 253.45, 236.95, 241.95]
        for (i = 1; i <= 6; i++) {
            game['bdress' + i] = this.game.add.sprite(mdaxrr[i], mdayrr[i], 'bdress' + i);
            game['bdress' + i].anchor.setTo(0.5);
        }
        var mhaxrr = [, 149.55, 267.1, 148.75, 269.55]
        var mhayrr = [, 157.65, 156.55, 358.6, 362.25]
        for (i = 1; i <= 4; i++) {
            game['bhair' + i] = this.game.add.sprite(mhaxrr[i], mhayrr[i], 'bhair' + i);
            game['bhair' + i].anchor.setTo(0.5);
            game['bhair' + i].visible = false
        }
        var mcraxrr = [, 122, 217.45, 305.45, 117]
        var mcrayrr = [, 155, 155.5, 155, 361.95]
        for (i = 4; i >= 1; i--) {
            game['bcrown' + i] = this.game.add.sprite(mcraxrr[i], mcrayrr[i], 'bcrown' + i);
            game['bcrown' + i].anchor.setTo(0.5);
            game['bcrown' + i].visible = false
        }
        var maraxrr = [, 204.95, 306.45]
        var marayrr = [, 358.45, 358.45]
        for (i = 2; i >= 1; i--) {
            game['bacc' + i] = this.game.add.sprite(maraxrr[i], marayrr[i], 'bacc' + i);
            game['bacc' + i].anchor.setTo(0.5);
            game['bacc' + i].visible = false
        }
        var mcaxrr = [, 151.5, 270.45, 151.5, 271.95]
        var mcayrr = [, 165, 165.5, 371.95, 369.45]
        for (i = 4; i >= 1; i--) {
            game['bchain' + i] = this.game.add.sprite(mcaxrr[i], mcayrr[i], 'bchain' + i);
            game['bchain' + i].anchor.setTo(0.5);
            game['bchain' + i].visible = false
        }
        var msaxrr = [, 154.65, 266.9, 152, 276.65]
        var msayrr = [, 159.2, 157.55, 364.6, 362.95]
        for (i = 4; i >= 1; i--) {
            game['bstud' + i] = this.game.add.sprite(msaxrr[i], msayrr[i], 'bstud' + i);
            game['bstud' + i].anchor.setTo(0.5);
            game['bstud' + i].visible = false
        }
        rarrow = game.add.sprite(321.05, 532.15, 'arrow')
        rarrow.anchor.setTo(0.5)
        game.add.tween(rarrow).to({
            x: 331.05
        }, 450, Phaser.Easing.Linear.NONE, true, 0, -1, true)
        larrow = game.add.sprite(100.05, 533.15, 'arrow')
        larrow.anchor.setTo(0.5)
        larrow.scale.x = -1
        game.add.tween(larrow).to({
            x: 90.05
        }, 450, Phaser.Easing.Linear.NONE, true, 0, -1, true)
        bheadacc = game.add.sprite(276.05, 260.05, 'bheadacc');
        bheadacc.anchor.setTo(0.5);
        bbody = game.add.sprite(280.05, 394.1, 'bbody');
        bbody.anchor.setTo(0.5);
        bdress = game.add.sprite(296.05, 416.1, 'bdress');
        bdress.anchor.setTo(0.5);
        bhead = game.add.sprite(274, 133.05, 'bhead');
        bhead.anchor.setTo(0.5);
        beyeshadow = game.add.sprite(274.9, 129.65, 'beyeshadow');
        beyeshadow.anchor.setTo(0.5);
        beyetop1 = game.add.sprite(275.55, 136, 'beyetop1');
        beyetop1.anchor.setTo(0.5);
        blips = game.add.sprite(272.4, 175.25, 'blips');
        blips.anchor.setTo(0.5);
        beyetop = game.add.sprite(277.5, 139, 'beyetop');
        beyetop.anchor.setTo(0.5);
        bblushes = game.add.sprite(276.4, 155.75, 'bblushes');
        bblushes.anchor.setTo(0.5);
        bmascara = game.add.sprite(273.9, 137.2, 'bmascara');
        bmascara.anchor.setTo(0.5);
        beyeball = game.add.sprite(275.9, 137.15, 'beyeball');
        beyeball.anchor.setTo(0.5);
        bchainacc = game.add.sprite(273.05, 285.55, 'bchainacc');
        bchainacc.anchor.setTo(0.5);
        bhair = game.add.sprite(278.05, 255.05, 'bhair');
        bhair.anchor.setTo(0.5);
        bcrownacc = game.add.sprite(280.1, 75, 'bcrownacc');
        bcrownacc.anchor.setTo(0.5);
        bstud = game.add.sprite(274.55, 167.05, 'bstud');
        bstud.anchor.setTo(0.5);
        doll2group = game.add.group()
        doll2group.add(bheadacc)
        doll2group.add(bbody)
        doll2group.add(bdress)
        doll2group.add(bhead)
        doll2group.add(beyeshadow)
        doll2group.add(beyetop1)
        doll2group.add(blips)
        doll2group.add(beyetop)
        doll2group.add(bblushes)
        doll2group.add(beyeball)
        doll2group.add(bmascara)
        doll2group.add(bchainacc)
        doll2group.add(bhair)
        doll2group.add(bcrownacc)
        doll2group.add(bstud)
        doll2group.scale.setTo(0.99)
        doll2group.x = 350
        doll2group.y = 20
        blips.frame = marr2[0]
        beyeshadow.frame = marr2[1]
        bblushes.frame = marr2[2]
        beyeball.frame = marr2[3]
        bmascara.frame = marr2[4]
        stargilter = this.game.add.sprite(-400.05, 331.7, 'stargilter')
        stargilter.anchor.setTo(0.5)
        stargilter.animations.add('stargilter')
        done1 = game.add.sprite(213.1, 510.15, 'done1');
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
};
function dressup2fun() {
    rarrow.inputEnabled = true;
    rarrow.events.onInputDown.add(rarrowdownFun, this);
    function rarrowdownFun() {
        playsoundeffects('clickss');
        if (game['bdress' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 6; i++) {
                game['bdress' + i].visible = false
            }
            for (i = 1; i <= 4; i++) {
                game['bhair' + i].visible = true
            }
        } else if (game['bhair' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['bhair' + i].visible = false
            }
            for (i = 1; i <= 4; i++) {
                game['bstud' + i].visible = true
            }
        } else if (game['bstud' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['bstud' + i].visible = false
            }
            for (i = 1; i <= 4; i++) {
                game['bcrown' + i].visible = true
            }
            for (i = 1; i <= 2; i++) {
                game['bacc' + i].visible = true
            }
        } else if (game['bcrown' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['bcrown' + i].visible = false
            }
            for (i = 1; i <= 2; i++) {
                game['bacc' + i].visible = false
            }
            for (i = 1; i <= 4; i++) {
                game['bchain' + i].visible = true
            }
        } else if (game['bchain' + 1].visible) {
            bcupboard.frame = 0
            for (i = 1; i <= 4; i++) {
                game['bchain' + i].visible = false
            }
            for (i = 1; i <= 6; i++) {
                game['bdress' + i].visible = true
            }
        }
    }
    larrow.inputEnabled = true;
    larrow.events.onInputDown.add(larrowdownFun, this);
    function larrowdownFun() {
        playsoundeffects('clickss');
        if (game['bhair' + 1].visible) {
            bcupboard.frame = 0
            for (i = 1; i <= 6; i++) {
                game['bdress' + i].visible = true
            }
            for (i = 1; i <= 4; i++) {
                game['bhair' + i].visible = false
            }
        } else if (game['bstud' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['bhair' + i].visible = true
            }
            for (i = 1; i <= 4; i++) {
                game['bstud' + i].visible = false
            }
        } else if (game['bcrown' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['bstud' + i].visible = true
            }
            for (i = 1; i <= 4; i++) {
                game['bcrown' + i].visible = false
            }
            for (i = 1; i <= 2; i++) {
                game['bacc' + i].visible = false
            }
        } else if (game['bchain' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['bcrown' + i].visible = true
            }
            for (i = 1; i <= 2; i++) {
                game['bacc' + i].visible = true
            }
            for (i = 1; i <= 4; i++) {
                game['bchain' + i].visible = false
            }
        } else if (game['bdress' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['bchain' + i].visible = true
            }
            for (i = 1; i <= 6; i++) {
                game['bdress' + i].visible = false
            }
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
    done1.inputEnabled = true;
    done1.input.useHandCursor = true;
    done1.input.pixelPerfectOver = true;
    done1.input.pixelPerfectClick = true;
    done1.events.onInputOver.add(done1OverFun1, this);
    done1.events.onInputOut.add(done1OutFun1, this);
    done1.events.onInputUp.add(done1StartFun11, this);
    done1.events.onInputDown.add(done1StartFun1, this);
    function done1OverFun1(ev) {
        if (!dressup2Finish) {
            l2d2 = game.add.tween(done1).to({
                y: 500.15
            }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
        }
    }
    function done1OutFun1(ev) {
        if (!dressup2Finish) {
            done1.animations.stop(null, true);
            game.tweens.remove(l2d2);
            done1.y = 510.15
            done1.frame = 0
        }
    }
    function done1StartFun11(ev) {
        if (!dressup2Finish) {
            done1.scale.setTo(1)
            startgame = true;
            done1.animations.stop(null, true);
            done1.inputEnabled = false;
            game.tweens.remove(l2d2);
            done1.frame = 0
            done1.y = 510.15
            lcount2 = 1
            leveluppanelCreateFun();
        }
    }
    function done1StartFun1(ev) {
        if (!dressup2Finish) {
            playsoundeffects('clickss');
            done1.animations.stop(null, true);
            game.tweens.remove(l2d2);
            done1.frame = 1
            done1.y = 510.15
            lcount = 2
        }
    }
    for (i = 1; i <= 6; i++) {
        game['bdress' + i].inputEnabled = true;
        game['bdress' + i].input.useHandCursor = true;
        game['bdress' + i].input.pixelPerfectOver = true;
        game['bdress' + i].input.pixelPerfectAlpha = 10;
        game['bdress' + i].input.pixelPerfectClick = true;
        game['bdress' + i].events.onInputOver.add(bdressOverFun, this);
        game['bdress' + i].events.onInputOut.add(bdressOutFun, this);
        game['bdress' + i].events.onInputDown.add(bdressdownFun, this);
    }
    function bdressOverFun(ev) {
        ev.filters = [
                new GlowFilter(450, 450, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xFFCC00), parseFloat(0.1))
            ];
        if (bdressuparr[1] > 0) {
            game['bdress' + bdressuparr[1]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[2] > 0) {
            game['bhair' + bdressuparr[2]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[3] > 0) {
            game['bstud' + bdressuparr[3]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[4] > 0) {
            game['bchain' + bdressuparr[4]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[5] > 0) {
            game['bacc' + bdressuparr[5]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[6] > 0) {
            game['bcrown' + bdressuparr[6]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
    }
    function bdressOutFun(ev) {
        for (i = 1; i <= 6; i++) {
            game['bdress' + i].filters = null
        }
        for (i = 1; i <= 4; i++) {
            game['bhair' + i].filters = null
            game['bstud' + i].filters = null
        }
        for (i = 1; i <= 4; i++) {
            game['bchain' + i].filters = null;
        }
        for (i = 1; i <= 4; i++) {
            game['bcrown' + i].filters = null;
        }
        for (i = 1; i <= 2; i++) {
            game['bacc' + i].filters = null;
        }
        bdressupGlow()
    }
    function bdressdownFun(ev) {
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
        if (bdressuparr[1] == parseInt(sno)) {
            bdress.frame = 0;
            bdressuparr[1] = 0;
        } else {
            bdress.frame = parseInt(sno);
            bdressuparr[1] = parseInt(sno);
        }
        bdressupGlow();
        d2donefun()
    }
    for (i = 1; i <= 4; i++) {
        game['bhair' + i].inputEnabled = true;
        game['bhair' + i].input.useHandCursor = true;
        game['bhair' + i].input.pixelPerfectOver = true;
        game['bhair' + i].input.pixelPerfectAlpha = 10;
        game['bhair' + i].input.pixelPerfectClick = true;
        game['bhair' + i].events.onInputOver.add(bdressOverFun, this);
        game['bhair' + i].events.onInputOut.add(bdressOutFun, this);
        game['bhair' + i].events.onInputDown.add(bhairdownFun, this);
    }
    function bhairdownFun(ev) {
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
        if (bdressuparr[2] == parseInt(sno)) {
            bhair.frame = 0;
            bdressuparr[2] = 0;
        } else {
            bhair.frame = parseInt(sno);
            bdressuparr[2] = parseInt(sno);
        }
        bdressupGlow();
        d2donefun()
    }
    for (i = 1; i <= 4; i++) {
        game['bstud' + i].inputEnabled = true;
        game['bstud' + i].input.useHandCursor = true;
        game['bstud' + i].input.pixelPerfectOver = true;
        game['bstud' + i].input.pixelPerfectAlpha = 10;
        game['bstud' + i].input.pixelPerfectClick = true;
        game['bstud' + i].events.onInputOver.add(bdressOverFun, this);
        game['bstud' + i].events.onInputOut.add(bdressOutFun, this);
        game['bstud' + i].events.onInputDown.add(bstuddownFun, this);
    }
    function bstuddownFun(ev) {
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
        if (bdressuparr[3] == parseInt(sno)) {
            bstud.frame = 0;
            bdressuparr[3] = 0;
        } else {
            bstud.frame = parseInt(sno);
            bdressuparr[3] = parseInt(sno);
        }
        bdressupGlow();
        d2donefun()
    }
    for (i = 1; i <= 4; i++) {
        game['bchain' + i].inputEnabled = true;
        game['bchain' + i].input.useHandCursor = true;
        game['bchain' + i].input.pixelPerfectOver = true;
        game['bchain' + i].input.pixelPerfectAlpha = 10;
        game['bchain' + i].input.pixelPerfectClick = true;
        game['bchain' + i].events.onInputOver.add(bdressOverFun, this);
        game['bchain' + i].events.onInputOut.add(bdressOutFun, this);
        game['bchain' + i].events.onInputDown.add(bchaindownFun, this);
    }
    function bchaindownFun(ev) {
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
        if (bdressuparr[4] == parseInt(sno)) {
            bchainacc.frame = 0;
            bdressuparr[4] = 0;
        } else {
            bchainacc.frame = parseInt(sno);
            bdressuparr[4] = parseInt(sno);
        }
        bdressupGlow();
        d2donefun()
    }
    for (i = 1; i <= 2; i++) {
        game['bacc' + i].inputEnabled = true;
        game['bacc' + i].input.useHandCursor = true;
        game['bacc' + i].input.pixelPerfectOver = true;
        game['bacc' + i].input.pixelPerfectAlpha = 10;
        game['bacc' + i].input.pixelPerfectClick = true;
        game['bacc' + i].events.onInputOver.add(bdressOverFun, this);
        game['bacc' + i].events.onInputOut.add(bdressOutFun, this);
        game['bacc' + i].events.onInputDown.add(baccdownFun, this);
    }
    function baccdownFun(ev) {
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
        if (bdressuparr[5] == parseInt(sno)) {
            bheadacc.frame = 0;
            bdressuparr[5] = 0;
        } else {
            bheadacc.frame = parseInt(sno);
            bdressuparr[5] = parseInt(sno);
        }
        bdressupGlow();
        d2donefun()
    }
    for (i = 1; i <= 4; i++) {
        game['bcrown' + i].inputEnabled = true;
        game['bcrown' + i].input.useHandCursor = true;
        game['bcrown' + i].input.pixelPerfectOver = true;
        game['bcrown' + i].input.pixelPerfectAlpha = 10;
        game['bcrown' + i].input.pixelPerfectClick = true;
        game['bcrown' + i].events.onInputOver.add(bdressOverFun, this);
        game['bcrown' + i].events.onInputOut.add(bdressOutFun, this);
        game['bcrown' + i].events.onInputDown.add(bcrowndownFun, this);
    }
    function bcrowndownFun(ev) {
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
        if (bdressuparr[6] == parseInt(sno)) {
            bcrownacc.frame = 0;
            bdressuparr[6] = 0;
        } else {
            bcrownacc.frame = parseInt(sno);
            bdressuparr[6] = parseInt(sno);
        }
        bdressupGlow();
        d2donefun()
    }
    function d2donefun() {
        done1.visible = true;
    }
    function bdressupGlow() {
        for (i = 1; i <= 6; i++) {
            game['bdress' + i].filters = null;
        }
        for (i = 1; i <= 4; i++) {
            game['bchain' + i].filters = null;
        }
        for (i = 1; i <= 2; i++) {
            game['bacc' + i].filters = null;
        }
        for (i = 1; i <= 4; i++) {
            game['bcrown' + i].filters = null;
        }
        for (i = 1; i <= 4; i++) {
            game['bhair' + i].filters = null;
            game['bstud' + i].filters = null;
        }
        if (bdressuparr[1] > 0) {
            game['bdress' + bdressuparr[1]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[2] > 0) {
            game['bhair' + bdressuparr[2]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[3] > 0) {
            game['bstud' + bdressuparr[3]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[4] > 0) {
            game['bchain' + bdressuparr[4]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[5] > 0) {
            game['bacc' + bdressuparr[5]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (bdressuparr[6] > 0) {
            game['bcrown' + bdressuparr[6]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
    }
}