var dressup3Finish = false
var cdressuparr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var level3_2 = {
    preload: function () {
        pageNo = 8;
        dressUpFinish3 = false
        cdressuparr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    create: function () {
        showAdOnPosition('mid5');
        cbackground = this.game.add.sprite(400, 300, 'cbackground');
        cbackground.anchor.setTo(0.5);
        cbackground.scale.setTo(1.05);
        bcupboard = this.game.add.sprite(224.05, 189, 'bcupboard');
        bcupboard.anchor.setTo(0.5);
        var cdaxrr = [, 84.35, 140.15, 213.45, 277, 333.75, 403.2]
        var cdayrr = [, 236.7, 241.55, 236.05, 242.75, 226.25, 239.25]
        for (i = 1; i <= 6; i++) {
            game['cdress' + i] = this.game.add.sprite(cdaxrr[i], cdayrr[i], 'cdress' + i);
            game['cdress' + i].anchor.setTo(0.5);
        }
        var chaxrr = [, 142.45, 289.95, 142.95, 293.45]
        var chayrr = [, 148.5, 150.5, 357, 361]
        for (i = 1; i <= 4; i++) {
            game['chair' + i] = this.game.add.sprite(chaxrr[i], chayrr[i], 'chair' + i);
            game['chair' + i].anchor.setTo(0.5);
            game['chair' + i].visible = false
        }
        var ccraxrr = [, 128.95, 238.95, 320.45]
        var ccrayrr = [, 147, 153, 153]
        for (i = 3; i >= 1; i--) {
            game['ccrown' + i] = this.game.add.sprite(ccraxrr[i], ccrayrr[i], 'ccrown' + i);
            game['ccrown' + i].anchor.setTo(0.5);
            game['ccrown' + i].visible = false
        }
        var caraxrr = [, 142.45, 280.95]
        var carayrr = [, 374.5, 373.5]
        for (i = 2; i >= 1; i--) {
            game['cacc' + i] = this.game.add.sprite(caraxrr[i], carayrr[i], 'cacc' + i);
            game['cacc' + i].anchor.setTo(0.5);
            game['cacc' + i].visible = false
        }
        var ccaxrr = [, 139.45, 315.45, 134.45, 315.95]
        var ccayrr = [, 159, 159.5, 367.95, 370.45]
        for (i = 4; i >= 1; i--) {
            game['cchain' + i] = this.game.add.sprite(ccaxrr[i], ccayrr[i], 'cchain' + i);
            game['cchain' + i].anchor.setTo(0.5);
            game['cchain' + i].visible = false
        }
        var csaxrr = [, 150.95, 275.45, 151.45, 272.45]
        var csayrr = [, 154.5, 154.5, 361, 360.5]
        for (i = 4; i >= 1; i--) {
            game['cstud' + i] = this.game.add.sprite(csaxrr[i], csayrr[i], 'cstud' + i);
            game['cstud' + i].anchor.setTo(0.5);
            game['cstud' + i].visible = false
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
        cbody = game.add.sprite(285.05, 418.1, 'cbody');
        cbody.anchor.setTo(0.5);
        cdress = game.add.sprite(285.55, 431.6, 'cdress');
        cdress.anchor.setTo(0.5);
        chead = game.add.sprite(285.05, 182, 'chead');
        chead.anchor.setTo(0.5);
        ceyetop1 = game.add.sprite(283.95, 199.3, 'ceyetop1');
        ceyetop1.anchor.setTo(0.5);
        clips = game.add.sprite(283.05, 236.05, 'clips');
        clips.anchor.setTo(0.5);
        cblushes = game.add.sprite(286.05, 212.05, 'cblushes');
        cblushes.anchor.setTo(0.5);
        ceyeshadow = game.add.sprite(285.05, 193.05, 'ceyeshadow');
        ceyeshadow.anchor.setTo(0.5);
        cmascara = game.add.sprite(284.05, 196.55, 'cmascara');
        cmascara.anchor.setTo(0.5);
        ceyeball = game.add.sprite(283.1, 198.05, 'ceyeball');
        ceyeball.anchor.setTo(0.5);
        cchainacc = game.add.sprite(283.55, 306.35, 'cchainacc');
        cchainacc.anchor.setTo(0.5);
        chair = game.add.sprite(284.05, 235.1, 'chair');
        chair.anchor.setTo(0.5);
        ccrownacc = game.add.sprite(289.05, 335.05, 'ccrownacc');
        ccrownacc.anchor.setTo(0.5);
        cstud = game.add.sprite(283.05, 224.55, 'cstud');
        cstud.anchor.setTo(0.5);
        cheadacc = game.add.sprite(277.05, 377.05, 'cheadacc');
        cheadacc.anchor.setTo(0.5);
        doll3group = game.add.group()
        doll3group.add(cbody)
        doll3group.add(cdress)
        doll3group.add(chead)
        doll3group.add(ceyeshadow)
        doll3group.add(ceyetop1)
        doll3group.add(cblushes)
        doll3group.add(clips)
        doll3group.add(ceyeball)
        doll3group.add(cmascara)
        doll3group.add(cchainacc)
        doll3group.add(cheadacc)
        doll3group.add(chair)
        doll3group.add(cstud)
        doll3group.add(ccrownacc)
        doll3group.scale.setTo(0.99)
        doll3group.x = 350
        doll3group.y = 20
        clips.frame = marr3[0]
        ceyeshadow.frame = marr3[1]
        cblushes.frame = marr3[2]
        ceyeball.frame = marr3[3]
        cmascara.frame = marr3[4]
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
function dressup3fun() {
    rarrow.inputEnabled = true;
    rarrow.events.onInputDown.add(rarrowdownFun, this);
    function rarrowdownFun() {
        playsoundeffects('clickss');
        if (game['cdress' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 6; i++) {
                game['cdress' + i].visible = false
            }
            for (i = 1; i <= 4; i++) {
                game['chair' + i].visible = true
            }
        } else if (game['chair' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['chair' + i].visible = false
            }
            for (i = 1; i <= 4; i++) {
                game['cstud' + i].visible = true
            }
        } else if (game['cstud' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['cstud' + i].visible = false
            }
            for (i = 1; i <= 3; i++) {
                game['ccrown' + i].visible = true
            }
            for (i = 1; i <= 2; i++) {
                game['cacc' + i].visible = true
            }
        } else if (game['ccrown' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 3; i++) {
                game['ccrown' + i].visible = false
            }
            for (i = 1; i <= 2; i++) {
                game['cacc' + i].visible = false
            }
            for (i = 1; i <= 4; i++) {
                game['cchain' + i].visible = true
            }
        } else if (game['cchain' + 1].visible) {
            bcupboard.frame = 0
            for (i = 1; i <= 4; i++) {
                game['cchain' + i].visible = false
            }
            for (i = 1; i <= 6; i++) {
                game['cdress' + i].visible = true
            }
        }
    }
    larrow.inputEnabled = true;
    larrow.events.onInputDown.add(larrowdownFun, this);
    function larrowdownFun() {
        playsoundeffects('clickss');
        if (game['chair' + 1].visible) {
            bcupboard.frame = 0
            for (i = 1; i <= 6; i++) {
                game['cdress' + i].visible = true
            }
            for (i = 1; i <= 4; i++) {
                game['chair' + i].visible = false
            }
        } else if (game['cstud' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['chair' + i].visible = true
            }
            for (i = 1; i <= 4; i++) {
                game['cstud' + i].visible = false
            }
        } else if (game['ccrown' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['cstud' + i].visible = true
            }
            for (i = 1; i <= 3; i++) {
                game['ccrown' + i].visible = false
            }
            for (i = 1; i <= 2; i++) {
                game['cacc' + i].visible = false
            }
        } else if (game['cchain' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 3; i++) {
                game['ccrown' + i].visible = true
            }
            for (i = 1; i <= 2; i++) {
                game['cacc' + i].visible = true
            }
            for (i = 1; i <= 4; i++) {
                game['cchain' + i].visible = false
            }
        } else if (game['cdress' + 1].visible) {
            bcupboard.frame = 1
            for (i = 1; i <= 4; i++) {
                game['cchain' + i].visible = true
            }
            for (i = 1; i <= 6; i++) {
                game['cdress' + i].visible = false
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
    done1.events.onInputOver.add(done1OverFun2, this);
    done1.events.onInputOut.add(done1OutFun2, this);
    done1.events.onInputUp.add(done1StartFun12, this);
    done1.events.onInputDown.add(done1StartFun2, this);
    function done1OverFun2(ev) {
        if (!dressup3Finish) {
            l3d2 = game.add.tween(done1).to({
                y: 500.15
            }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
        }
    }
    function done1OutFun2(ev) {
        if (!dressup3Finish) {
            done1.animations.stop(null, true);
            game.tweens.remove(l3d2);
            done1.y = 510.15
            done1.frame = 0
        }
    }
    function done1StartFun12(ev) {
        if (!dressup3Finish) {
            done1.scale.setTo(1)
            startgame = true;
            done1.animations.stop(null, true);
            done1.frame = 0
            game.tweens.remove(l3d2);
            done1.y = 510.15
            lcount3 = 1
            done1.inputEnabled = false;
            leveluppanelCreateFun();
        }
    }
    function done1StartFun2(ev) {
        if (!dressup3Finish) {
            playsoundeffects('clickss');
            done1.animations.stop(null, true);
            done1.frame = 1
            game.tweens.remove(l3d2);
            done1.y = 510.15
            lcount = 2
        }
    }
    for (i = 1; i <= 6; i++) {
        game['cdress' + i].inputEnabled = true;
        game['cdress' + i].input.useHandCursor = true;
        game['cdress' + i].input.pixelPerfectOver = true;
        game['cdress' + i].input.pixelPerfectAlpha = 10;
        game['cdress' + i].input.pixelPerfectClick = true;
        game['cdress' + i].events.onInputOver.add(cdressOverFun, this);
        game['cdress' + i].events.onInputOut.add(cdressOutFun, this);
        game['cdress' + i].events.onInputDown.add(cdressdownFun, this);
    }
    function cdressOverFun(ev) {
        ev.filters = [
                new GlowFilter(450, 450, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xFFCC00), parseFloat(0.1))
            ];
        if (cdressuparr[1] > 0) {
            game['cdress' + cdressuparr[1]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[2] > 0) {
            game['chair' + cdressuparr[2]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[3] > 0) {
            game['cstud' + cdressuparr[3]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[4] > 0) {
            game['cchain' + cdressuparr[4]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[5] > 0) {
            game['cacc' + cdressuparr[5]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[6] > 0) {
            game['ccrown' + cdressuparr[6]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
    }
    function cdressOutFun(ev) {
        for (i = 1; i <= 6; i++) {
            game['cdress' + i].filters = null
        }
        for (i = 1; i <= 4; i++) {
            game['chair' + i].filters = null
            game['cstud' + i].filters = null
        }
        for (i = 1; i <= 4; i++) {
            game['cchain' + i].filters = null;
        }
        for (i = 1; i <= 3; i++) {
            game['ccrown' + i].filters = null;
        }
        for (i = 1; i <= 2; i++) {
            game['cacc' + i].filters = null;
        }
        cdressupGlow()
    }
    function cdressdownFun(ev) {
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
        if (cdressuparr[1] == parseInt(sno)) {
            cdress.frame = 0;
            cdressuparr[1] = 0;
        } else {
            cdress.frame = parseInt(sno);
            cdressuparr[1] = parseInt(sno);
        }
        cdressupGlow();
        d3donefun()
    }
    for (i = 1; i <= 4; i++) {
        game['chair' + i].inputEnabled = true;
        game['chair' + i].input.useHandCursor = true;
        game['chair' + i].input.pixelPerfectOver = true;
        game['chair' + i].input.pixelPerfectAlpha = 10;
        game['chair' + i].input.pixelPerfectClick = true;
        game['chair' + i].events.onInputOver.add(cdressOverFun, this);
        game['chair' + i].events.onInputOut.add(cdressOutFun, this);
        game['chair' + i].events.onInputDown.add(chairdownFun, this);
    }
    function chairdownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y + 100
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
        if (cdressuparr[2] == parseInt(sno)) {
            chair.frame = 0;
            cdressuparr[2] = 0;
        } else {
            chair.frame = parseInt(sno);
            cdressuparr[2] = parseInt(sno);
        }
        cdressupGlow();
        d3donefun()
    }
    for (i = 1; i <= 4; i++) {
        game['cstud' + i].inputEnabled = true;
        game['cstud' + i].input.useHandCursor = true;
        game['cstud' + i].input.pixelPerfectOver = true;
        game['cstud' + i].input.pixelPerfectAlpha = 10;
        game['cstud' + i].input.pixelPerfectClick = true;
        game['cstud' + i].events.onInputOver.add(cdressOverFun, this);
        game['cstud' + i].events.onInputOut.add(cdressOutFun, this);
        game['cstud' + i].events.onInputDown.add(cstuddownFun, this);
    }
    function cstuddownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y + 100
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
        if (cdressuparr[3] == parseInt(sno)) {
            cstud.frame = 0;
            cdressuparr[3] = 0;
        } else {
            cstud.frame = parseInt(sno);
            cdressuparr[3] = parseInt(sno);
        }
        cdressupGlow();
        d3donefun()
    }
    for (i = 1; i <= 4; i++) {
        game['cchain' + i].inputEnabled = true;
        game['cchain' + i].input.useHandCursor = true;
        game['cchain' + i].input.pixelPerfectOver = true;
        game['cchain' + i].input.pixelPerfectAlpha = 10;
        game['cchain' + i].input.pixelPerfectClick = true;
        game['cchain' + i].events.onInputOver.add(cdressOverFun, this);
        game['cchain' + i].events.onInputOut.add(cdressOutFun, this);
        game['cchain' + i].events.onInputDown.add(cchaindownFun, this);
    }
    function cchaindownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y + 100
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
        if (cdressuparr[4] == parseInt(sno)) {
            cchainacc.frame = 0;
            cdressuparr[4] = 0;
        } else {
            cchainacc.frame = parseInt(sno);
            cdressuparr[4] = parseInt(sno);
        }
        cdressupGlow();
        d3donefun()
    }
    for (i = 1; i <= 2; i++) {
        game['cacc' + i].inputEnabled = true;
        game['cacc' + i].input.useHandCursor = true;
        game['cacc' + i].input.pixelPerfectOver = true;
        game['cacc' + i].input.pixelPerfectAlpha = 10;
        game['cacc' + i].input.pixelPerfectClick = true;
        game['cacc' + i].events.onInputOver.add(cdressOverFun, this);
        game['cacc' + i].events.onInputOut.add(cdressOutFun, this);
        game['cacc' + i].events.onInputDown.add(caccdownFun, this);
    }
    function caccdownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y + 100
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
        if (cdressuparr[5] == parseInt(sno)) {
            cheadacc.frame = 0;
            cdressuparr[5] = 0;
        } else {
            cheadacc.frame = parseInt(sno);
            cdressuparr[5] = parseInt(sno);
        }
        cdressupGlow();
        d3donefun()
    }
    for (i = 1; i <= 3; i++) {
        game['ccrown' + i].inputEnabled = true;
        game['ccrown' + i].input.useHandCursor = true;
        game['ccrown' + i].input.pixelPerfectOver = true;
        game['ccrown' + i].input.pixelPerfectAlpha = 10;
        game['ccrown' + i].input.pixelPerfectClick = true;
        game['ccrown' + i].events.onInputOver.add(cdressOverFun, this);
        game['ccrown' + i].events.onInputOut.add(cdressOutFun, this);
        game['ccrown' + i].events.onInputDown.add(ccrowndownFun, this);
    }
    function ccrowndownFun(ev) {
        playsoundeffects('itemclick');
        stargilter.animations.stop(null, true)
        stargilter.x = ev.x + 50
        stargilter.y = ev.y + 100
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
        if (cdressuparr[6] == parseInt(sno)) {
            ccrownacc.frame = 0;
            cdressuparr[6] = 0;
        } else {
            ccrownacc.frame = parseInt(sno);
            cdressuparr[6] = parseInt(sno);
        }
        cdressupGlow();
        d3donefun()
    }
    function d3donefun() {
        done1.visible = true;
    }
    function cdressupGlow() {
        for (i = 1; i <= 6; i++) {
            game['cdress' + i].filters = null;
        }
        for (i = 1; i <= 4; i++) {
            game['cchain' + i].filters = null;
        }
        for (i = 1; i <= 2; i++) {
            game['cacc' + i].filters = null;
        }
        for (i = 1; i <= 3; i++) {
            game['ccrown' + i].filters = null;
        }
        for (i = 1; i <= 4; i++) {
            game['chair' + i].filters = null;
            game['cstud' + i].filters = null;
        }
        if (cdressuparr[1] > 0) {
            game['cdress' + cdressuparr[1]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[2] > 0) {
            game['chair' + cdressuparr[2]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[3] > 0) {
            game['cstud' + cdressuparr[3]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[4] > 0) {
            game['cchain' + cdressuparr[4]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[5] > 0) {
            game['cacc' + cdressuparr[5]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
        if (cdressuparr[6] > 0) {
            game['ccrown' + cdressuparr[6]].filters = [
                new GlowFilter(550, 550, parseFloat(5), parseFloat(3), parseFloat(0), parseInt(0xff00ff), parseFloat(0.2))
            ];
        }
    }
}