var endPageFinish = false
var click = 1
var dollarr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var endscreen = {
    preload: function () {
        pageNo = 10;
        endPageFinish = false
        click = 1
        dollarr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    create: function () {
        showAdOnPosition('end');
        ebackground1 = game.add.sprite(132.05, 297.05, 'ebackground1');
        ebackground1.anchor.setTo(0.5);
        ebackground2 = game.add.sprite(373.1, 300.05, 'ebackground2');
        ebackground2.anchor.setTo(0.5);
        ebackground3 = game.add.sprite(674.15, 300.05, 'ebackground3');
        ebackground3.anchor.setTo(0.5);
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
        edoll1group = game.add.group()
        edoll1group.add(aheadacc)
        edoll1group.add(abody)
        edoll1group.add(adress)
        edoll1group.add(ahead)
        edoll1group.add(aeyeshadow)
        edoll1group.add(aeyetop)
        edoll1group.add(alips)
        edoll1group.add(ablushes)
        edoll1group.add(amascara)
        edoll1group.add(aeyeball)
        edoll1group.add(achainacc)
        edoll1group.add(ahair)
        edoll1group.add(acrownacc)
        edoll1group.add(astud)
        edoll1group.scale.setTo(0.95)
        edoll1group.x = -130
        edoll1group.y = 83
        var graphics1 = game.add.graphics();
        graphics1.lineStyle(3, 0xff0000);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.moveTo(0, 0);
        graphics1.lineTo(273, 0);
        graphics1.lineTo(213, 600);
        graphics1.lineTo(0, 600);
        graphics1.lineTo(0, 0);
        edoll1group.mask = graphics1
        alips.frame = marr1[0]
        aeyeshadow.frame = marr1[1]
        ablushes.frame = marr1[2]
        aeyeball.frame = marr1[3]
        amascara.frame = marr1[4]
        adress.frame = adressuparr[1]
        ahair.frame = adressuparr[2]
        astud.frame = adressuparr[3]
        achainacc.frame = adressuparr[4]
        aheadacc.frame = adressuparr[5]
        acrownacc.frame = adressuparr[6]
        ebackground2 = game.add.sprite(373.1, 300.05, 'ebackground2');
        ebackground2.anchor.setTo(0.5);
        bheadacc = game.add.sprite(276.05, 260.05, 'bheadacc');
        bheadacc.anchor.setTo(0.5);
        bbody = game.add.sprite(280.05, 394.1, 'bbody');
        bbody.anchor.setTo(0.5);
        bdress = game.add.sprite(296.05, 416.1, 'bdress');
        bdress.anchor.setTo(0.5);
        bhead = game.add.sprite(274, 133.05, 'bhead');
        bhead.anchor.setTo(0.5);
        blips = game.add.sprite(272.4, 175.25, 'blips');
        blips.anchor.setTo(0.5);
        beyetop = game.add.sprite(277.5, 139, 'beyetop');
        beyetop.anchor.setTo(0.5);
        bblushes = game.add.sprite(276.4, 155.75, 'bblushes');
        bblushes.anchor.setTo(0.5);
        beyeshadow = game.add.sprite(274.9, 129.65, 'beyeshadow');
        beyeshadow.anchor.setTo(0.5);
        beyetop1 = game.add.sprite(275.55, 136, 'beyetop1');
        beyetop1.anchor.setTo(0.5);
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
        edoll2group = game.add.group()
        edoll2group.add(bheadacc)
        edoll2group.add(bbody)
        edoll2group.add(bdress)
        edoll2group.add(bhead)
        edoll2group.add(beyeshadow)
        edoll2group.add(beyetop1)
        edoll2group.add(blips)
        edoll2group.add(beyetop)
        edoll2group.add(bblushes)
        edoll2group.add(beyeball)
        edoll2group.add(bmascara)
        edoll2group.add(bchainacc)
        edoll2group.add(bhair)
        edoll2group.add(bcrownacc)
        edoll2group.add(bstud)
        edoll2group.scale.setTo(0.90)
        edoll2group.x = 130
        edoll2group.y = 90
        blips.frame = marr2[0]
        beyeshadow.frame = marr2[1]
        bblushes.frame = marr2[2]
        beyeball.frame = marr2[3]
        bmascara.frame = marr2[4]
        bdress.frame = bdressuparr[1]
        bhair.frame = bdressuparr[2]
        bstud.frame = bdressuparr[3]
        bchainacc.frame = bdressuparr[4]
        bheadacc.frame = bdressuparr[5]
        bcrownacc.frame = bdressuparr[6]
        var graphics2 = game.add.graphics();
        graphics2.lineStyle(3, 0xff0000);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.moveTo(273, 0);
        graphics2.lineTo(523, 0);
        graphics2.lineTo(540, 600);
        graphics2.lineTo(217, 600);
        graphics2.lineTo(273, 0);
        edoll2group.mask = graphics2
        ebackground3 = game.add.sprite(674.15, 300.05, 'ebackground3');
        ebackground3.anchor.setTo(0.5);
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
        edoll3group = game.add.group()
        edoll3group.add(cbody)
        edoll3group.add(cdress)
        edoll3group.add(chead)
        edoll3group.add(ceyeshadow)
        edoll3group.add(ceyetop1)
        edoll3group.add(cblushes)
        edoll3group.add(clips)
        edoll3group.add(ceyeball)
        edoll3group.add(cmascara)
        edoll3group.add(cchainacc)
        edoll3group.add(cheadacc)
        edoll3group.add(chair)
        edoll3group.add(cstud)
        edoll3group.add(ccrownacc)
        edoll3group.scale.setTo(0.95)
        edoll3group.x = 400
        edoll3group.y = 30
        clips.frame = marr3[0]
        ceyeshadow.frame = marr3[1]
        cblushes.frame = marr3[2]
        ceyeball.frame = marr3[3]
        cmascara.frame = marr3[4]
        cdress.frame = cdressuparr[1]
        chair.frame = cdressuparr[2]
        cstud.frame = cdressuparr[3]
        cchainacc.frame = cdressuparr[4]
        cheadacc.frame = cdressuparr[5]
        ccrownacc.frame = cdressuparr[6]
        var graphics3 = game.add.graphics();
        graphics3.lineStyle(3, 0xff0000);
        graphics3.beginFill(0xFF700B, 1);
        graphics3.moveTo(525, 0);
        graphics3.lineTo(800, 0);
        graphics3.lineTo(800, 600);
        graphics3.lineTo(536, 600);
        graphics3.lineTo(525, 0);
        edoll3group.mask = graphics3
        line = game.add.sprite(374.4, 309.05, 'line');
        line.anchor.setTo(0.5);
        save1 = game.add.sprite(74.6, 510.15, 'save1');
        save1.anchor.setTo(0.5);
        replay1 = game.add.sprite(212.6, 510.15, 'replay1');
        replay1.anchor.setTo(0.5);
        moregames2 = game.add.sprite(734.25, 510, 'moregames1');
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
        savegroup = game.add.group();
        savegroup.add(save1);
        savegroup.add(replay1);
        savegroup.add(moregames2);
        savegroup.add(ffck2);
        savegroup.add(mute2);
        leveluppanelReverseFun();
    }
};
function endscreenfun() {
    moregames2.inputEnabled = true;
    moregames2.input.useHandCursor = true;
    moregames2.input.pixelPerfectOver = true;
    moregames2.input.pixelPerfectClick = true;
    moregames2.events.onInputOver.add(moregamesOverFun, this);
    moregames2.events.onInputOut.add(moregamesOutFun, this);
    moregames2.events.onInputDown.add(moregamesdownFun, this);
    moregames2.events.onInputUp.add(moregamesupFun, this);
    replay1.inputEnabled = true;
    replay1.input.useHandCursor = true;
    replay1.input.pixelPerfectOver = true;
    replay1.input.pixelPerfectClick = true;
    replay1.input.pixelPerfectAlpha = 10;
    replay1.events.onInputOver.add(replay1OverFun, this);
    replay1.events.onInputOut.add(replay1OutFun, this);
    replay1.events.onInputUp.add(replay1StartFun, this);
    replay1.events.onInputDown.add(replay1downStartFun1, this);
    function replay1OverFun(ev) {
        e2d1 = game.add.tween(replay1).to({
            y: 500.15
        }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
    }
    function replay1OutFun(ev) {
        replay1.animations.stop(null, true);
        game.tweens.remove(e2d1);
        replay1.frame = 0
        replay1.y = 510.15
    }
    function replay1StartFun(ev) {
        if (!endPageFinish) {
            endPageFinish = true;
            replay1.animations.stop(null, true);
            game.tweens.remove(e2d1);
            replay1.frame = 0
            replay1.y = 510.15
            save1.inputEnabled = false;
            leveluppanelCreateFun();
        }
    }
    function replay1downStartFun1(ev) {
        if (!endPageFinish) {
            playsoundeffects('clickss');
            replay1.animations.stop(null, true);
            game.tweens.remove(e2d1);
            replay1.frame = 1
            replay1.y = 510.15
            lcount1 = 0
            lcount2 = 0
            lcount3 = 0
        }
    }
    save1.inputEnabled = true;
    save1.input.useHandCursor = true;
    save1.input.pixelPerfectOver = true;
    save1.input.pixelPerfectClick = true;
    save1.input.pixelPerfectAlpha = 10;
    save1.events.onInputOver.add(save1OverFun11, this);
    save1.events.onInputOut.add(save1OutFun11, this);
    save1.events.onInputDown.add(saveFun1, this);
    save1.events.onInputUp.add(saveUpFun1, this);
    ebackground1.inputEnabled = true;
    ebackground1.input.useHandCursor = true;
    ebackground1.input.pixelPerfectOver = true;
    ebackground1.input.pixelPerfectClick = true;
    ebackground1.input.pixelPerfectAlpha = 10;
    ebackground1.events.onInputOver.add(ebackground1OverFun, this);
    ebackground1.events.onInputOut.add(ebackground1OutFun, this);
    ebackground1.events.onInputDown.add(ebackground1downStartFun2, this);
    ebackground1.events.onInputUp.add(ebackground1downStartFun1, this);
    ebackground2.inputEnabled = true;
    ebackground2.input.useHandCursor = true;
    ebackground2.input.pixelPerfectOver = true;
    ebackground2.input.pixelPerfectClick = true;
    ebackground2.input.pixelPerfectAlpha = 10;
    ebackground2.events.onInputOver.add(ebackground2OverFun, this);
    ebackground2.events.onInputOut.add(ebackground2OutFun, this);
    ebackground2.events.onInputDown.add(ebackground2downStartFun2, this);
    ebackground2.events.onInputUp.add(ebackground2downStartFun1, this);
    ebackground3.inputEnabled = true;
    ebackground3.input.useHandCursor = true;
    ebackground3.input.pixelPerfectOver = true;
    ebackground3.input.pixelPerfectClick = true;
    ebackground3.input.pixelPerfectAlpha = 10;
    ebackground3.events.onInputOver.add(ebackground3OverFun, this);
    ebackground3.events.onInputOut.add(ebackground3OutFun, this);
    ebackground3.events.onInputDown.add(ebackground3downStartFun2, this);
    ebackground3.events.onInputUp.add(ebackground3downStartFun1, this);
}
function ebackground1downStartFun2() {
    playsoundeffects('clickss');
}
function ebackground2downStartFun2() {
    playsoundeffects('clickss');
}
function ebackground3downStartFun2() {
    playsoundeffects('clickss');
}
function ebackground1OverFun() {}
function ebackground1OutFun() {}
function ebackground1downStartFun1() {
    lcount1 = 2
    lcount2 = 1
    lcount3 = 1
    ebackground1.inputEnabled = false;
    ebackground2.inputEnabled = false;
    ebackground3.inputEnabled = false;
    leveluppanelCreateFun();
}
function ebackground2OverFun() {}
function ebackground2OutFun() {}
function ebackground2downStartFun1() {
    lcount1 = 1
    lcount2 = 2
    lcount3 = 1
    ebackground1.inputEnabled = false;
    ebackground2.inputEnabled = false;
    ebackground3.inputEnabled = false;
    leveluppanelCreateFun();
}
function ebackground3OverFun() {}
function ebackground3OutFun() {}
function ebackground3downStartFun1() {
    lcount1 = 1
    lcount2 = 1
    lcount3 = 2
    ebackground1.inputEnabled = false;
    ebackground2.inputEnabled = false;
    ebackground3.inputEnabled = false;
    leveluppanelCreateFun();
}
function saveFun1(ev) {
    if (!endPageFinish) {
        playsoundeffects('clickss');
        save1.animations.stop(null, true);
        save1.frame = 1
        game.tweens.remove(e1d1);
        save1.y = 510.15
    }
}
function save1OverFun11(ev) {
    e1d1 = game.add.tween(save1).to({
        y: 500.15
    }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
}
function save1OutFun11(ev) {
    save1.animations.stop(null, true);
    game.tweens.remove(e1d1);
    save1.frame = 0
    save1.y = 510.15
}
function saveUpFun1(ev) {
    savegroup.visible = false;
    save1.animations.stop(null, true);
    game.tweens.remove(e1d1);
    save1.y = 510.15
    save1.frame = 0
    setTimeout(callreopratfuns, 500);
    game.capture = game.plugins.add(Phaser.Plugin.Capture);
    game.capture.screenshot(function (dataUrl) {
        var data = new Image();
        data.src = dataUrl;
        game.cache.addImage('image-data', dataUrl, data);
        var canvasImageSaver = new CanvasImageSaver(game.canvas, {
            xCropOffset: 0,
            yCropOffset: 0,
            width: 800,
            height: game.height,
        }, function (canvas, fileName) {
            console.log(canvas, fileName);
        }, function (error) {}, this);
        exportCanvasAsPNG(canvas, 'wedding_style_cinderella_vs_rapunzel_vs_elsa', dataUrl);
    });
}
function callreopratfuns() {
    savegroup.visible = true;
}