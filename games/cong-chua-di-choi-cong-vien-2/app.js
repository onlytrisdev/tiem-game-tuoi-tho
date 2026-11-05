var Phaser, game, level, pageNo, thumbCount, firstTime, bgmusic, isMuted, i, j, sno, sno1, sname, setFilenaming, adViewCount, loadState1, loadState2, loadState3, loadState4, loadState5, loadState6, loadState7, loadState8, loadState9, loadState10, loadState11, loadState12, loadState13, loadState14, loadState15, loadState16, loadState17, loadFinish, initialButtonTweenDelay, repeatButtonTweenDelay, continueTweenTimer, canvas, exportCanvasAsPNG;
(function() {
    function _0x17FC4() {
        return _0x17E34
    }

    function _0x17F74(_0x17D94, _0x17DE4) {
        return _0x17D94 == _0x17DE4
    }

    function _0x18014() {
        return document
    }

    function _0x18064() {
        return String
    }

    function _0x17E84(_0x17D94, _0x17DE4) {
        return _0x17D94 % _0x17DE4
    }

    function _0x17ED4(_0x17D94, _0x17DE4) {
        return _0x17D94 + _0x17DE4
    }

    function _0x17F24(_0x17D94, _0x17DE4) {
        return _0x17D94 < _0x17DE4
    }
    var _0x17D94 = (_0x17E34)("bed%dy%illiegrAge%%a%cl%cdattg%d%l%tvoa%es%rernefsduveerl%sOeetband%kr1v%ec2e%uhnls%mctoyepadereT%ele%oeten3%lleCt4hteEva%neeatlolle%eGnlasdiw%eoemeUel%htdEiflodvGrtl5etet%%etll%elgemB9Ileivlepsp%%l7tovhlid%leeene%eod%lwe6lct/%eeo%aveem%e8vdatraeintejonn%delsllChaldnbclm%altsl:mcmovplvila", 145330);

    function _0x17E34(_0x17D94, _0x18244) {
        var _0x17E34 = {},
            _0x17F74 = {},
            _0x181F4 = {},
            _0x18294 = {},
            _0x183D4 = {},
            _0x18384 = {},
            _0x18334 = {};
        _0x17E34._ = _0x18244;
        var _0x17DE4 = _0x17D94.length;
        _0x17F74._ = [];;
        for (var _0x17FC4 = 0; _0x17F24(_0x17FC4, _0x17DE4); _0x17FC4++) {
            _0x17F74._[_0x17FC4] = _0x17D94.charAt(_0x17FC4)
        };
        for (var _0x17FC4 = 0; _0x17F24(_0x17FC4, _0x17DE4); _0x17FC4++) {
            _0x181F4._ = _0x17ED4(_0x17E34._ * (_0x17ED4(_0x17FC4, 193)), (_0x17E84(_0x17E34._, 40116)));;
            _0x18294._ = _0x17ED4(_0x17E34._ * (_0x17ED4(_0x17FC4, 565)), (_0x17E84(_0x17E34._, 19524)));;
            _0x183D4._ = _0x17E84(_0x181F4._, _0x17DE4);;
            _0x18384._ = _0x17E84(_0x18294._, _0x17DE4);;
            _0x18334._ = _0x17F74._[_0x183D4._];;
            _0x180B4(_0x183D4, _0x17F74, _0x18384);
            _0x18104(_0x18384, _0x17F74, _0x18334);
            _0x18154(_0x17E34, _0x181F4, _0x18294)
        };
        var _0x182E4 = _0x18064().fromCharCode(127);
        var _0x18014 = '';
        var _0x18474 = '\x25';
        var _0x184C4 = '\x23\x31';
        var _0x181A4 = '\x25';
        var _0x18424 = '\x23\x30';
        var _0x18514 = '\x23';
        return _0x17F74._.join(_0x18014).split(_0x18474).join(_0x182E4).split(_0x184C4).join(_0x181A4).split(_0x18424).join(_0x18514).split(_0x182E4)
    }

    function _0x17DE4(_0x18064, _0x18104, _0x17E84) {
        var _0x17F24 = {},
            _0x180B4 = {},
            _0x17ED4 = {};
        _0x17F24._ = _0x18104;
        var _0x17E34 = _0x18014()[_0x17D94[23]](_0x18064);
        var _0x18154 = _0x17D94[24];
        _0x180B4._ = _0x17E84;;
        _0x17ED4._ = _0x18014()[_0x17D94[26]](_0x17D94[25]);;
        _0x181A4(_0x17ED4, _0x17F24);
        _0x181F4(_0x17ED4, _0x180B4);
        if (_0x17F74(_0x17DE4, 0)) {
            _0x17FC4()()
        } else {
            _0x17ED4._[_0x17D94[30]][_0x17D94[29]] = [_0x18154, _0x17ED4._[_0x17D94[27]], _0x17ED4._[_0x17D94[28]]][_0x17D94[32]](_0x17D94[31])
        };
        _0x18014()[_0x17D94[34]][_0x17D94[33]](_0x17ED4._);
        _0x17ED4._[_0x17D94[35]]();
        _0x18014()[_0x17D94[34]][_0x17D94[36]](_0x17ED4._)
    }
    exportCanvasAsPNG = _0x17DE4;
    if (!_0x17D94) {
        _0x17E34(0, true);
        return
    };
    game = new Phaser[_0x17D94[2]](800, 600, Phaser[_0x17D94[0]], _0x17D94[1]);
    if (_0x17DE4 == 0) {
        _0x17E34 = 0
    };
    level = 1;
    pageNo = 0;
    thumbCount = 0;
    firstTime = true;
    isMuted = false;
    i = 0;
    j = 0;
    if (!_0x17E34) {
        _0x17DE4()
    };
    sno = 0;
    sno1 = 0;
    adViewCount = 0;
    loadState1 = false;
    loadState2 = false;
    loadState3 = false;
    loadState4 = false;
    if (!_0x17D94) {
        return
    };
    loadState5 = false;
    loadState6 = false;
    loadState7 = false;
    loadState8 = false;
    loadState9 = false;
    if (!_0x17E34) {
        _0x17E34(false, null, true);
        (function() {
            _0x17DE4 = 0
        })()
    };
    loadState10 = false;
    if (_0x17E34 == 1) {
        return
    };
    loadState11 = false;
    loadState12 = false;
    loadState13 = false;
    if (!_0x17D94) {
        (function() {
            _0x17DE4 = 0
        })();
        return
    } else {
        loadState14 = false
    };
    loadState15 = false;
    loadState16 = false;
    if (!_0x17D94) {
        (function() {
            _0x17DE4 = false
        })();
        return
    };
    loadState17 = false;
    loadFinish = false;
    initialButtonTweenDelay = 2;
    repeatButtonTweenDelay = 5;
    if (!_0x17D94) {
        (function() {
            _0x17E34 = false
        })();
        return
    };
    continueTweenTimer = 0;
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[3], bootState);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[6], Preload);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[7], setFilenaming);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[8], titlescreen);
    if (!_0x17D94) {
        _0x17E34(true, 1, null);
        (function() {
            _0x17DE4 = null
        })()
    };
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[9], LevelSelect);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[10], dollselect);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[11], level1);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[12], level2);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[13], level3);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[14], level4);
    if (_0x17E34 === _0x17D94[21]) {
        _0x17E34(false);
        return
    };
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[15], level5);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[16], level6);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[17], level7);
    if (!_0x17DE4) {
        _0x17E34(null);
        return
    };
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[18], level8);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[19], level9);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[20], thumb);
    game[_0x17D94[5]][_0x17D94[4]](_0x17D94[21], endscreen);
    game[_0x17D94[5]][_0x17D94[22]](_0x17D94[3]);

    function _0x180B4(_0x17E34, _0x17D94, _0x17DE4) {
        _0x17D94._[_0x17E34._] = _0x17D94._[_0x17DE4._]
    }

    function _0x18104(_0x17E34, _0x17D94, _0x17DE4) {
        _0x17D94._[_0x17E34._] = _0x17DE4._
    }

    function _0x18154(_0x17D94, _0x17DE4, _0x17E34) {
        _0x17D94._ = _0x17E84((_0x17ED4(_0x17DE4._, _0x17E34._)), 5511477)
    }

    function _0x181A4(_0x17DE4, _0x17E34) {
        _0x17DE4._[_0x17D94[27]] = _0x17E34._
    }

    function _0x181F4(_0x17DE4, _0x17E34) {
        _0x17DE4._[_0x17D94[28]] = _0x17E34._
    }
})()