var facebookAni, muteAni, playAni, moregamesAni, nextbutAni, level1Ani, level2Ani, doneAni, resetAni, replayani, saveani, bgani;
var jcount = 0
var pageNo;
var i;
var firstTime = true
var sno;
var lcount = 0
var startgame = false
var titleDollNum = 0;
var lcount1 = 0
var lcount2 = 0
var lcount3 = 0
var darr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var marr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var thumbCount = 0
var titlescreen = {
    preload: function () {
        pageNo = 1;
        lcount = 0
        titleDollNum = 0;
        lcount1 = 0
        lcount2 = 0
        lcount3 = 0
        darr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        marr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        jcount = 0
        startgame = false;
    },
    create: function () {
        background = game.add.sprite(400, 300, 'background');
        background.anchor.setTo(0.5);
        titledoll1 = game.add.sprite(571.15, 381.6, 'titledoll1');
        titledoll1.anchor.setTo(0.5);
        titledoll1.x = 1200;
        titledoll2 = game.add.sprite(583.85, 359.2, 'titledoll2');
        titledoll2.anchor.setTo(0.5);
        titledoll2.x = 1200;
        titledoll3 = game.add.sprite(569.85, 337.2, 'titledoll3');
        titledoll3.anchor.setTo(0.5);
        titledoll3.x = 1200;
        title = game.add.sprite(235.45, 338.95, 'title');
        title.anchor.setTo(0.5);
        title.visible = false;
        play2 = game.add.sprite(238.05, 472.15, 'play1');
        play2.anchor.setTo(0.5);
        play2.visible = false;
        playfun()
        moregames2 = game.add.sprite(730.3, 515.25, 'moregames1');
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
        if (firstTime) {
            firstTime = false;
            music = game.add.audio('boden');
            music.loopFull(0.6);
            music.onLoop.add(hasLooped, this);
            nextanimationfun()
        } else {
            mute2.frame = 0;
            if (isMuted) {
                music.resume();
                isMuted = false;
            }
            showAdOnPosition('replay');
            leveluppanelReverseFun();
        }
    }
};
function logofbkmute() {
    logo2 = this.game.add.button(125, 44, 'logo', logoClickFun, this, 1, 0, 0);
    logo2.anchor.setTo(0.5);
    logo2.inputEnabled = true;
    logo2.input.useHandCursor = true;
    logo2.input.pixelPerfectOver = true;
    logo2.input.pixelPerfectClick = true;
    logo2.events.onInputUp.add(logoClickFun1, this);
    logo2.events.onInputDown.add(logoClickFun2, this);
    mute2 = game.add.button(758.35, 43, 'mute1');
    mute2.anchor.setTo(0.5);
    mute2.scale.setTo(0.5)
    mute2.inputEnabled = true;
    mute2.input.useHandCursor = true;
    mute2.input.pixelPerfectOver = true;
    mute2.input.pixelPerfectClick = true;
    mute2.events.onInputOver.add(muteOverFun, this);
    mute2.events.onInputOut.add(muteOutFun, this);
    mute2.events.onInputDown.add(muteFun, this);
    if (isMuted) {
        mute2.frame = 1;
    }
    ffck2 = game.add.button(687.85, 43, 'fecb1');
    ffck2.anchor.setTo(0.5);
    ffck2.scale.setTo(0.5)
    ffck2.inputEnabled = true;
    ffck2.input.useHandCursor = true;
    ffck2.input.pixelPerfectOver = true;
    ffck2.input.pixelPerfectClick = true;
    ffck2.events.onInputOver.add(facebookOverAction, this);
    ffck2.events.onInputOut.add(facebookOutAction, this);
    ffck2.events.onInputUp.add(facebookClickFun, this);
    ffck2.events.onInputDown.add(facebookClickFun1, this);
}
function leveluppanelReverseFun() {
    levelup2 = this.game.add.sprite(400, 307, 'levelup2');
    levelup2.anchor.setTo(0.5);
    levelup2.scale.setTo(1.1)
    levelup2.inputEnabled = true;
    levelup1 = this.game.add.sprite(400, 211.05, 'levelup1');
    levelup1.anchor.setTo(0.5);
    levelup1.inputEnabled = true;
    ttitle = game.add.sprite(400, 300, 'title');
    ttitle.anchor.setTo(0.5);
    flower1 = this.game.add.sprite(181.25, 371, 'flower1');
    flower1.anchor.setTo(0.5);
    flower2 = this.game.add.sprite(600.3, 371, 'flower2');
    flower2.anchor.setTo(0.5);
    game.add.tween(ttitle).to({
        y: -200
    }, 600, Phaser.Easing.Linear.NONE, 1)
    flower1.visible = true;
    flower2.visible = true;
    game.add.tween(flower1).to({
        x: -200.95,
    }, 600, Phaser.Easing.Linear.NONE, 1)
    game.add.tween(flower2).to({
        x: 1220.3,
    }, 600, Phaser.Easing.Linear.NONE, 1).onComplete.add(levelUpTweenFun55, this);
    function levelUpTweenFun55() {
        game.add.tween(levelup1).to({
            y: -204.85
        }, 600, Phaser.Easing.Linear.NONE, 1)
        game.add.tween(levelup2).to({
            y: 994.9
        }, 600, Phaser.Easing.Linear.NONE, 1).onComplete.add(levelstartfun, this);
    }
}
function playfun() {
    title.visible = true;
    game.add.tween(title).from({
        y: -200
    }, 250, Phaser.Easing.Cubic.NONE, true).onComplete.add(titleanifun, this);
    function titleanifun() {
        play2.visible = true;
        game.add.tween(title).to({
            y: 348
        }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
        game.add.tween(play2).from({
            y: 1200
        }, 250, Phaser.Easing.Cubic.NONE, true)
    }
}
function DollChangeFun() {
    if (titleDollNum == 0) {
        titleDollNum++
        game.add.tween(titledoll1).to({
            x: 571.15
        }, 250, Phaser.Easing.Cubic.NONE, true);
        timerEvent = game.time.events.add(Phaser.Timer.SECOND * 4, DollChangeFun1, this);
    } else if (titleDollNum == 1) {
        titleDollNum++
        game.add.tween(titledoll2).to({
            x: 583.85
        }, 250, Phaser.Easing.Cubic.NONE, true);
        timerEvent = game.time.events.add(Phaser.Timer.SECOND * 4, DollChangeFun1, this);
    } else if (titleDollNum == 2) {
        titleDollNum = 0;
        game.add.tween(titledoll3).to({
            x: 569.85
        }, 250, Phaser.Easing.Cubic.NONE, true);
        timerEvent = game.time.events.add(Phaser.Timer.SECOND * 4, DollChangeFun1, this);
    }
}
function DollChangeFun1() {
    if (titleDollNum == 0) {
        game.add.tween(titledoll3).to({
            x: 1200
        }, 250, Phaser.Easing.Cubic.NONE, true);
        timerEvent = game.time.events.add(Phaser.Timer.SECOND * .4, DollChangeFun, this);
    } else if (titleDollNum == 1) {
        game.add.tween(titledoll1).to({
            x: 1200
        }, 250, Phaser.Easing.Cubic.NONE, true);
        timerEvent = game.time.events.add(Phaser.Timer.SECOND * .4, DollChangeFun, this);
    } else if (titleDollNum == 2) {
        game.add.tween(titledoll2).to({
            x: 1200
        }, 250, Phaser.Easing.Cubic.NONE, true);
        timerEvent = game.time.events.add(Phaser.Timer.SECOND * .4, DollChangeFun, this);
    }
}
function levelstartfun() {
    if (pageNo == 1) {
        nextanimationfun()
    } else if (pageNo == 2) {
        levelselectfun()
    } else if (pageNo == 3) {
        makeupstartFun1()
    } else if (pageNo == 4) {
        dressup1fun()
    } else if (pageNo == 5) {
        makeupstartFun2()
    } else if (pageNo == 6) {
        dressup2fun()
    } else if (pageNo == 7) {
        makeupstartFun3()
    } else if (pageNo == 8) {
        dressup3fun()
    } else if (pageNo == 9) {
        thumbfun()
    } else if (pageNo == 10) {
        endscreenfun()
    }
}
function facebookOverAction(ev) {
    ev.scale.setTo(0.55)
}
function facebookOutAction(ev) {
    ev.scale.setTo(0.5)
}
function facebookClickFun(ev) {
    window.open( 'https://www.facebook.com/localhost/', '_blank' );
}
function facebookClickFun1(ev) {
    playsoundeffects('clickss');
}
function logoClickFun() {}
var wasMuted = false;
function muteAd(mm) {
    if (mm) {
        wasMuted = isMuted;
    }
    console.log('try to mute', mm, 'was muted before', wasMuted);
    if (mm && !isMuted) {
        wasMuted = false;
        muteFun();
        return;
    }
    if (!mm && !wasMuted) {
        wasMuted = false;
        muteFun();
        return;
    }
    if (mm && isMuted) {
        wasMuted = true;
    }
}
function logoClickFun1() {
    window.open( 'http://www.localhost', '_blank' )
}
function logoClickFun2() {
    playsoundeffects('clickss');
}
function nextanimationfun() {
    DollChangeFun()
    nextani1()
}
function nextani1() {
    moregames2.inputEnabled = true;
    moregames2.input.useHandCursor = true;
    moregames2.input.pixelPerfectOver = true;
    moregames2.input.pixelPerfectClick = true;
    moregames2.events.onInputOver.add(moregamesOverFun, this);
    moregames2.events.onInputOut.add(moregamesOutFun, this);
    moregames2.events.onInputDown.add(moregamesdownFun, this);
    moregames2.events.onInputUp.add(moregamesupFun, this);
    play2.inputEnabled = true;
    play2.input.useHandCursor = true;
    play2.input.pixelPerfectOver = true;
    play2.input.pixelPerfectClick = true;
    play2.events.onInputOver.add(playOverFun, this);
    play2.events.onInputOut.add(playOutFun, this);
    play2.events.onInputUp.add(playStartFun1, this);
    play2.events.onInputDown.add(playStartFun, this);
}
function moregamesOverFun(ev) {}
function moregamesOutFun(ev) {
    moregames2.animations.stop(null, true);
    moregamesAni.onUpdate.add(moregamesonUpdate, this);
    moregames2.animations.play('moregamesAni', 24, false);
    moregames2.animations.currentAnim.setFrame(0)
}
function moregamesonUpdate(anim, frame) {
    if (anim.frame == 14) {
        anim.frame = 1
    }
}
function moregamesdownFun(ev) {
    playsoundeffects('clickss');
    moregames2.animations.stop(null, true);
    moregames2.frame = 16
}
function moregamesupFun(ev) {
    moregames2.animations.stop(null, true);
    moregames2.frame = 0
    moregames2.animations.stop(null, true);
    moregamesAni.onUpdate.add(moregamesonUpdate, this);
    moregames2.animations.play('moregamesAni', 24, false);
    moregames2.animations.currentAnim.setFrame(0)
    if (pageNo == 1) {
        window.open( 'http://www.localhost', '_blank' );
    } else if (pageNo == 2) {
        window.open( 'http://www.localhost', '_blank' );
    } else if (pageNo == 3) {
        window.open( 'http://www.localhost', '_blank' );
    } else if (pageNo == 4) {
       window.open( 'http://www.localhost', '_blank' );
    } else if (pageNo == 5) {
      window.open( 'http://www.localhost', '_blank' );
    } else if (pageNo == 6) {
      window.open( 'http://www.localhost', '_blank' );
    } else if (pageNo == 7) {
      window.open( 'http://www.localhost', '_blank' );
    } else if (pageNo == 8) {
      window.open( 'http://www.localhost', '_blank' );
    } else if (pageNo == 9) {
      window.open( 'http://www.localhost', '_blank' );
    } else if (pageNo == 10) {
      window.open( 'http://www.localhost', '_blank' );
    }
}
function playOverFun(ev) {
    p1 = game.add.tween(play2).to({
        y: 462
    }, 250, Phaser.Easing.Cubic.NONE, true, 0, -1, true)
}
function playOutFun(ev) {
    play2.animations.stop(null, true);
    game.tweens.remove(p1);
    play2.y = 472.15;
    play2.frame = 0
}
function playStartFun1(ev) {
    if (!startgame) {
        play2.scale.setTo(1)
        startgame = true;
        play2.animations.stop(null, true);
        play2.frame = 0
        game.tweens.remove(p1);
        play2.y = 472.15;
        leveluppanelCreateFun();
    }
}
function playStartFun(ev) {
    if (!startgame) {
        playsoundeffects('clickss');
        game.tweens.remove(p1);
        play2.y = 472.15;
        play2.animations.stop(null, true);
        play2.frame = 1
    }
}
function leveluppanelCreateFun() {
    levelup2 = this.game.add.sprite(400, 307, 'levelup2');
    levelup2.anchor.setTo(0.5);
    levelup2.scale.setTo(1.1)
    levelup2.inputEnabled = true;
    levelup1 = this.game.add.sprite(400, 211.05, 'levelup1');
    levelup1.anchor.setTo(0.5);
    levelup1.inputEnabled = true;
    ttitle = game.add.sprite(400, 300, 'title');
    ttitle.anchor.setTo(0.5);
    ttitle.visible = false;
    flower1 = this.game.add.sprite(181.25, 371, 'flower1');
    flower1.anchor.setTo(0.5);
    flower2 = this.game.add.sprite(600.3, 371, 'flower2');
    flower2.anchor.setTo(0.5);
    flower1.visible = false
    flower2.visible = false
    game.add.tween(levelup2).from({
        y: 994.9
    }, 600, Phaser.Easing.Linear.NONE, 1)
    levelup1.visible = true;
    game.add.tween(levelup1).from({
        y: -204.85
    }, 600, Phaser.Easing.Linear.NONE, 1).onComplete.add(levelUpTweenFun23, this);
    function levelUpTweenFun23() {
        ttitle.visible = true
        game.add.tween(ttitle).from({
            y: -204.85
        }, 600, Phaser.Easing.Linear.NONE, 1).onComplete.add(levelUpTweenFun22, this);
    }
    function levelUpTweenFun22() {
        flower1.visible = true
        flower2.visible = true
        game.add.tween(flower1).from({
            x: -203.95,
        }, 600, Phaser.Easing.Linear.NONE, 1)
        game.add.tween(flower2).from({
            x: 1220.3,
        }, 600, Phaser.Easing.Linear.NONE, 1).onComplete.add(levelUpTweenFun2, this);
    }
}
function levelUpTweenFun2() {
    setTimeout(waitTime1, 1000)
}
function waitTime1() {
    if (pageNo == 3) {
        game.state.start('level1_2');
    } else if (pageNo == 5) {
        game.state.start('level2_2');
    } else if (pageNo == 7) {
        game.state.start('level3_2');
    } else if (lcount1 == 2) {
        game.state.start('level1_1');
    } else if (lcount2 == 2) {
        game.state.start('level2_1');
    } else if (lcount3 == 2) {
        game.state.start('level3_1');
    } else if (pageNo == 9) {
        game.state.start('endscreen')
    } else if (lcount1 == 1 && lcount2 == 1 && lcount3 == 1) {
        game.state.start('thumb')
    } else if (pageNo == 1 || pageNo == 4 || pageNo == 6) {
        game.state.start('levelselect');
    } else if (pageNo == 2 && lcount == 0) {
        game.state.start('level1_1');
    } else if (pageNo == 2 && lcount == 1) {
        game.state.start('level2_1');
    } else if (pageNo == 5) {
        game.state.start('level2_2');
    } else if (pageNo == 2 && lcount == 2) {
        game.state.start('level3_1');
    } else if (pageNo == 7) {
        game.state.start('level3_2');
    } else if (pageNo == 8) {
        game.state.start('thumb')
    } else if (pageNo == 10) {
        game.state.start('titlescreen');
    }
}
function muteFun() {
    mute2.frame = 1;
    if (!isMuted) {
        isMuted = true;
        mute2.frame = 1;
        music.pause();
    } else {
        isMuted = false;
        mute2.frame = 0;
        music.resume();
    }
}
function muteOverFun(ev) {
    mute2.scale.setTo(0.55)
    if (!isMuted) {
        mute2.frame = 0;
    }
}
function muteOutFun(ev) {
    mute2.scale.setTo(0.5)
    if (isMuted) {
        mute2.frame = 1;
    } else {
        mute2.frame = 0;
    }
}
function playsoundeffects(clkssed) {
    if (!isMuted) {
        clicksound = game.add.audio(clkssed);
        clicksound.play();
    }
}
function hasLooped(sound) {
    music.loopFull();
}