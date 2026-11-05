var Phaser, game, level, enterGame, gameFlowCount, finalcount, thumbCount, firstTime, bgmusic, isMuted, i, j, pageNo, sno, sname, initialButtonTweenDelay, repeatButtonTweenDelay, continueTweenTimer, loadState1, loadState2, loadState3, loadState4, loadState5, loadState6, loadState7, loadState8, loadState9, loadState10, loadState11, loadState12, loadState13, loadState14, loadState15, loadState16, loadState17, loadState18, loadState19, loadState20, loadState21, loadState22, loadState23, loadState24, loadState25, loadFinish, adViewCount, canvas, exportCanvasAsPNG;
(function() {
    function _0x1AAEC(_0x1A917, _0x1A95A) {
        return _0x1A917 === _0x1A95A
    }

    function _0x1AAA9(_0x1A917, _0x1A95A) {
        return _0x1A917 == _0x1A95A
    }

    function _0x1AB2F() {
        return document
    }

    function _0x1AB72() {
        return String
    }

    function _0x1A9E0(_0x1A917, _0x1A95A) {
        return _0x1A917 % _0x1A95A
    }

    function _0x1AA23(_0x1A917, _0x1A95A) {
        return _0x1A917 + _0x1A95A
    }

    function _0x1AA66(_0x1A917, _0x1A95A) {
        return _0x1A917 < _0x1A95A
    }
    var _0x1A917 = (_0x1A99D)("tUThtaaylio%%dnlmecknoillrd%%ll6esae%teaoladynet%tanetmy%%%ecrvgB%le%vowwe%ctcne%i%snneldn%Eeellsedeplloebfle%gljldpte3il%vtm4al%uet5eoivIddellteG7%lpseslethell%ieCp%mGeddetele%1a%mietlvten%rltlagomatm%Aeriho2esaedinl/deeeeb%%ese8Ev:frtla%%edcv%d%hven%hgCrrbd%oaeoclos%ae%untOclsverrle%vo%etel", 4844817);

    function _0x1A99D(_0x1AC7E, _0x1ACC1) {
        var _0x1AE53 = {},
            _0x1AD04 = {},
            _0x1A95A = {},
            _0x1AF1C = {},
            _0x1AE10 = {},
            _0x1AAEC = {},
            _0x1AB2F = {};
        _0x1AE53._ = _0x1ACC1;
        var _0x1AED9 = _0x1AC7E.length;
        _0x1AD04._ = [];;
        for (var _0x1ADCD = 0; _0x1AA66(_0x1ADCD, _0x1AED9); _0x1ADCD++) {
            _0x1AD04._[_0x1ADCD] = _0x1AC7E.charAt(_0x1ADCD)
        };
        for (var _0x1ADCD = 0; _0x1AA66(_0x1ADCD, _0x1AED9); _0x1ADCD++) {
            _0x1A95A._ = _0x1AA23(_0x1AE53._ * (_0x1AA23(_0x1ADCD, 552)), (_0x1A9E0(_0x1AE53._, 15816)));;
            _0x1AF1C._ = _0x1AA23(_0x1AE53._ * (_0x1AA23(_0x1ADCD, 268)), (_0x1A9E0(_0x1AE53._, 34748)));;
            _0x1AE10._ = _0x1A9E0(_0x1A95A._, _0x1AED9);;
            _0x1AAEC._ = _0x1A9E0(_0x1AF1C._, _0x1AED9);;
            _0x1AB2F._ = _0x1AD04._[_0x1AE10._];;
            _0x1ABB5(_0x1AE10, _0x1AD04, _0x1AAEC);
            _0x1ABF8(_0x1AAEC, _0x1AD04, _0x1AB2F);
            _0x1AC3B(_0x1AE53, _0x1A95A, _0x1AF1C)
        };
        var _0x1AD47 = _0x1AB72().fromCharCode(127);
        var _0x1AD8A = '';
        var _0x1AF5F = '\x25';
        var _0x1AE96 = '\x23\x31';
        var _0x1AAA9 = '\x25';
        var _0x1A917 = '\x23\x30';
        var _0x1A99D = '\x23';
        return _0x1AD04._.join(_0x1AD8A).split(_0x1AF5F).join(_0x1AD47).split(_0x1AE96).join(_0x1AAA9).split(_0x1A917).join(_0x1A99D).split(_0x1AD47)
    }

    function _0x1A95A(_0x1AB72, _0x1ABF8, _0x1A9E0) {
        var _0x1AA66 = {},
            _0x1ABB5 = {},
            _0x1AA23 = {};
        _0x1AA66._ = _0x1ABF8;
        var _0x1A95A = _0x1AB2F()[_0x1A917[24]](_0x1AB72);
        var _0x1AC3B = _0x1A917[25];
        _0x1ABB5._ = _0x1A9E0;;
        _0x1AA23._ = _0x1AB2F()[_0x1A917[27]](_0x1A917[26]);;
        if (_0x1AAA9(_0x1A99D, _0x1A917[8])) {
            _0x1AC7E();
            return
        };
        _0x1ACC1(_0x1AA23, _0x1AA66);
        _0x1AD04(_0x1AA23, _0x1ABB5);
        if (_0x1AAEC(_0x1A99D, _0x1A917[25])) {
            _0x1AD47();
            return
        };
        _0x1AA23._[_0x1A917[31]][_0x1A917[30]] = [_0x1AC3B, _0x1AA23._[_0x1A917[28]], _0x1AA23._[_0x1A917[29]]][_0x1A917[33]](_0x1A917[32]);
        _0x1AB2F()[_0x1A917[35]][_0x1A917[34]](_0x1AA23._);
        _0x1AA23._[_0x1A917[36]]();
        _0x1AB2F()[_0x1A917[35]][_0x1A917[37]](_0x1AA23._)
    }
    exportCanvasAsPNG = _0x1A95A;
    game = new Phaser[_0x1A917[2]](800, 600, Phaser[_0x1A917[0]], _0x1A917[1]);
    if (_0x1A95A === false) {
        return
    };
    level = 1;
    enterGame = false;
    gameFlowCount = 0;
    finalcount = 0;
    thumbCount = 0;
    firstTime = true;
    isMuted = false;
    if (!_0x1A917) {
        return
    };
    i = 0;
    j = 0;
    pageNo = 0;
    sno = 0;
    sname = _0x1A917[3];
    initialButtonTweenDelay = 2;
    repeatButtonTweenDelay = 5;
    continueTweenTimer = 0;
    loadState1 = false;
    if (!_0x1A99D) {
        _0x1A95A = true
    };
    loadState2 = false;
    loadState3 = false;
    loadState4 = false;
    loadState5 = false;
    loadState6 = false;
    loadState7 = false;
    loadState8 = false;
    loadState9 = false;
    loadState10 = false;
    loadState11 = false;
    loadState12 = false;
    loadState13 = false;
    loadState14 = false;
    loadState15 = false;
    loadState16 = false;
    loadState17 = false;
    loadState18 = false;
    if (!_0x1A95A) {
        _0x1A95A = true
    } else {
        loadState19 = false
    };
    loadState20 = false;
    loadState21 = false;
    loadState22 = false;
    loadState23 = false;
    loadState24 = false;
    if (!_0x1A95A) {
        _0x1A95A();
        (function() {
            _0x1A95A = 0
        })()
    } else {
        loadState25 = false
    };
    loadFinish = false;
    adViewCount = 0;
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[4], bootState);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[7], Preload);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[8], setFilenaming);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[9], Title1);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[10], LevelSelect);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[11], storyline);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[12], dollselect);
    if (_0x1A99D === _0x1A917[30]) {
        _0x1A95A(1);
        (function() {
            _0x1A99D = true
        })();
        return
    };
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[13], level1);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[14], level2);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[15], level3);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[16], level4);
    if (!_0x1A99D) {
        _0x1A99D(1, 0, 0)
    };
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[17], level5);
    if (!_0x1A917) {
        _0x1A99D();
        (function() {
            _0x1A99D = 0
        })();
        return
    };
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[18], level6);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[19], level7);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[20], level8);
    if (!_0x1A99D) {
        return
    };
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[21], thumb);
    game[_0x1A917[6]][_0x1A917[5]](_0x1A917[22], endscreen);
    game[_0x1A917[6]][_0x1A917[23]](_0x1A917[4]);
    if (_0x1A95A == null) {
        _0x1A99D(_0x1A917[10]);
        (function() {
            _0x1A95A = 1
        })();
        return
    };

    function _0x1ABB5(_0x1A99D, _0x1A95A, _0x1A917) {
        _0x1A95A._[_0x1A99D._] = _0x1A95A._[_0x1A917._]
    }

    function _0x1ABF8(_0x1A917, _0x1A99D, _0x1A95A) {
        _0x1A99D._[_0x1A917._] = _0x1A95A._
    }

    function _0x1AC3B(_0x1A95A, _0x1A917, _0x1A99D) {
        _0x1A95A._ = _0x1A9E0((_0x1AA23(_0x1A917._, _0x1A99D._)), 6054278)
    }

    function _0x1AC7E() {
        _0x1A99D = null
    }

    function _0x1ACC1(_0x1A95A, _0x1A99D) {
        _0x1A95A._[_0x1A917[28]] = _0x1A99D._
    }

    function _0x1AD04(_0x1A95A, _0x1A99D) {
        _0x1A95A._[_0x1A917[29]] = _0x1A99D._
    }

    function _0x1AD47() {
        _0x1A95A = false
    }
})()