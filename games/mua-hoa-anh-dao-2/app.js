var Phaser,game,level,enterGame,gameFlowCount,finalcount,thumbCount,firstTime,bgmusic,isMuted,i,j,pageNo,sno,sname,initialButtonTweenDelay,repeatButtonTweenDelay,continueTweenTimer,loadState1,loadState2,loadState3,loadState4,loadState5,loadState6,loadState7,loadState8,loadState9,loadState10,loadState11,loadState12,loadState13,loadState14,loadState15,loadFinish,dollSelectEnter,adViewCount,canvas,exportCanvasAsPNG;
(function() {
    function _0x2272C() {
        return document
    }
    function _0x22716() {
        return _0x22666
    }
    function _0x226D4(_0x2263A, _0x22650) {
        return _0x2263A == _0x22650
    }
    function _0x22700() {
        return _0x22650
    }
    function _0x226EA(_0x2263A, _0x22650) {
        return _0x2263A === _0x22650
    }
    function _0x22758(_0x2263A) {
        return !_0x2263A
    }
    function _0x22742() {
        return String
    }
    function _0x22692(_0x2263A, _0x22650) {
        return _0x2263A % _0x22650
    }
    function _0x226A8(_0x2263A, _0x22650) {
        return _0x2263A + _0x22650
    }
    function _0x226BE(_0x2263A, _0x22650) {
        return _0x2263A < _0x22650
    }
    var _0x2263A = (_0x2267C)("_ttle3e%eltlstt%4gtt2ne/%eh_vnoei_ep%%flCGle%on,t%%oeell%eil_ltcetvl1Il%mfiweoattl%relrse%rahbecevn:c%msOlcenre/tCeUelBgnrla_%dltlT_tevAphleee%dlneo%a2cla%vo2ole_t%t%e%2ivs/w%EGl%eti1aaeec3e2ae%%1%igloy%%g1pdr%5%uthdcb1cole%le%aismr%naleel%vey2esoedtle%vid%evmat%heasmn%grla%%%nn:loidldnmEej%eaodld%lrteuve%enbao.e%dh1sddrbvt_dl4%/nermmke.poipi", 1517402);
    function _0x2267C(_0x227F2, _0x22716) {
        var _0x2263A = {}
          , _0x227C6 = {}
          , _0x22650 = {}
          , _0x2267C = {}
          , _0x226EA = {}
          , _0x2281E = {}
          , _0x22666 = {};
        _0x2263A._ = _0x22716;
        var _0x2284A = _0x227F2.length;
        _0x227C6._ = [];
        ;for (var _0x227DC = 0; _0x226BE(_0x227DC, _0x2284A); _0x227DC++) {
            _0x227C6._[_0x227DC] = _0x227F2.charAt(_0x227DC)
        }
        ;for (var _0x227DC = 0; _0x226BE(_0x227DC, _0x2284A); _0x227DC++) {
            _0x22650._ = _0x226A8(_0x2263A._ * (_0x226A8(_0x227DC, 163)), (_0x22692(_0x2263A._, 16777)));
            ;_0x2267C._ = _0x226A8(_0x2263A._ * (_0x226A8(_0x227DC, 294)), (_0x22692(_0x2263A._, 38653)));
            ;_0x226EA._ = _0x22692(_0x22650._, _0x2284A);
            ;_0x2281E._ = _0x22692(_0x2267C._, _0x2284A);
            ;_0x22666._ = _0x227C6._[_0x226EA._];
            ;_0x2276E(_0x226EA, _0x227C6, _0x2281E);
            _0x22784(_0x2281E, _0x227C6, _0x22666);
            _0x2279A(_0x2263A, _0x22650, _0x2267C)
        }
        ;var _0x226D4 = _0x22742().fromCharCode(127);
        var _0x2272C = '';
        var _0x22758 = '%';
        var _0x22700 = '#1';
        var _0x227B0 = '%';
        var _0x22808 = '#0';
        var _0x22834 = '#';
        return _0x227C6._.join(_0x2272C).split(_0x22758).join(_0x226D4).split(_0x22700).join(_0x227B0).split(_0x22808).join(_0x22834).split(_0x226D4)
    }
    function _0x22650(_0x2272C, _0x227DC, _0x22784) {
        var _0x2279A = {};
        _0x2279A._ = _0x22784;
        if (_0x22758(_0x2272C)) {
            return
        }
        ;var _0x22742 = this[_0x2263A[7]][_0x2263A[6]][_0x2263A[3]](_0x2263A[5])[1][_0x2263A[3]](_0x2263A[4])[0][_0x2263A[3]](_0x2263A[2])[0];
        var _0x22666 = _0x2272C[_0x2263A[3]](_0x2263A[8]);
        for (var _0x2276E = 0; _0x226BE(_0x2276E, _0x22666[_0x2263A[9]]); _0x2276E++) {
            var _0x22692 = _0x22666[_0x2276E];
            if (_0x226EA(_0x22650, false)) {
                _0x22700()();
                return
            }
            ;if (_0x226D4(_0x22692, _0x22742)) {
                return
            }
            ;if (_0x22758(_0x227DC)) {
                continue
            }
            ;if (_0x22758(_0x2267C)) {
                _0x22716()(0);
                _0x227B0()
            } else {
                _0x22692 = _0x22742[_0x2263A[3]](_0x226A8(_0x2263A[10], _0x22692))
            }
            ;if (_0x226D4(_0x22692[_0x2263A[9]], 2) && _0x22758(_0x22692[1])) {
                return
            }
        }
        ;_0x227C6(_0x2279A)
    }
    function _0x22666(_0x226A8, _0x226D4, _0x22666) {
        var _0x22692 = {}
          , _0x226BE = {}
          , _0x2267C = {};
        _0x22692._ = _0x226D4;
        var _0x22650 = _0x2272C()[_0x2263A[34]](_0x226A8);
        var _0x226EA = _0x2263A[35];
        _0x226BE._ = _0x22666;
        ;_0x2267C._ = _0x2272C()[_0x2263A[37]](_0x2263A[36]);
        ;_0x227DC(_0x2267C, _0x22692);
        _0x227F2(_0x2267C, _0x226BE);
        _0x2267C._[_0x2263A[40]][_0x2263A[39]] = [_0x226EA, _0x2267C._[_0x2263A[38]], _0x2267C._[_0x2263A[6]]][_0x2263A[41]](_0x2263A[2]);
        _0x2272C()[_0x2263A[43]][_0x2263A[42]](_0x2267C._);
        _0x2267C._[_0x2263A[44]]();
        _0x2272C()[_0x2263A[43]][_0x2263A[45]](_0x2267C._)
    }
    exportCanvasAsPNG = _0x22666;
    (_0x22650)(_0x2263A[0], 1, _0x2263A[1]);
    game = new Phaser[_0x2263A[14]](800,600,Phaser[_0x2263A[12]],_0x2263A[13]);
  
    ;level = 1;
    enterGame = false;
    if (_0x22666 === null) {
        _0x22666();
        return
    } else {
        gameFlowCount = 0
    }
    ;finalcount = 0;
    if (_0x22650 === true) {
        return
    }
    ;thumbCount = 0;
    firstTime = true;
    isMuted = false;
    i = 0;
    j = 0;
    pageNo = 0;
    sno = 0;
    sname = _0x2263A[1];
    initialButtonTweenDelay = 2;
    repeatButtonTweenDelay = 5;
    continueTweenTimer = 0;
    if (!_0x2263A) {
        _0x22650();
        (function() {
            _0x2267C = 1
        }
        )();
        return
    }
    ;loadState1 = false;
    loadState2 = false;
    loadState3 = false;
    if (!_0x22650) {
        _0x22666();
        return
    }
    ;loadState4 = false;
    loadState5 = false;
    loadState6 = false;
    loadState7 = false;
    loadState8 = false;
    loadState9 = false;
    loadState10 = false;
    loadState11 = false;
    if (!_0x22666) {
        _0x22650 = _0x2263A[19]
    } else {
        loadState12 = false
    }
    ;loadState13 = false;
    loadState14 = false;
    if (_0x22666 == _0x2263A[21]) {
        _0x2267C();
        return
    }
    ;loadState15 = false;
    if (!_0x2263A) {
        _0x22666 = false
    }
    ;loadFinish = false;
    dollSelectEnter = false;
    if (_0x22650 === 0) {
        _0x22650(null, 0);
        return
    } else {
        adViewCount = 0
    }
    ;game[_0x2263A[17]][_0x2263A[16]](_0x2263A[15], bootState);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[18], Preload);
    if (!_0x22666) {
        return
    }
    ;game[_0x2263A[17]][_0x2263A[16]](_0x2263A[19], SetFileNaming);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[20], Title1);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[21], LevelSelect);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[22], level1_1);
    if (_0x22650 === true) {
        _0x22650(_0x2263A[8]);
        (function() {
            _0x2267C = null
        }
        )()
    }
    ;game[_0x2263A[17]][_0x2263A[16]](_0x2263A[23], level1_2);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[24], level2_1);
    if (!_0x22650) {
        _0x2267C(0, false);
        (function() {
            _0x22650 = 0
        }
        )();
        return
    } else {
        game[_0x2263A[17]][_0x2263A[16]](_0x2263A[25], level2_2)
    }
    ;game[_0x2263A[17]][_0x2263A[16]](_0x2263A[26], level3_1);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[27], level3_2);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[28], level4_1);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[29], level4_2);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[30], level5);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[31], thumb);
    game[_0x2263A[17]][_0x2263A[16]](_0x2263A[32], endscreen);
    if (_0x2267C == _0x2263A[40]) {
        _0x22666();
        return
    }
    ;game[_0x2263A[17]][_0x2263A[33]](_0x2263A[15]);
    if (!_0x2263A) {
        _0x2267C();
        return
    }
    ;function _0x2276E(_0x2263A, _0x22650, _0x22666) {
        _0x22650._[_0x2263A._] = _0x22650._[_0x22666._]
    }
    function _0x22784(_0x22666, _0x22650, _0x2263A) {
        _0x22650._[_0x22666._] = _0x2263A._
    }
    function _0x2279A(_0x2263A, _0x22650, _0x22666) {
        _0x2263A._ = _0x22692((_0x226A8(_0x22650._, _0x22666._)), 1835060)
    }
    function _0x227B0() {
        _0x22650 = false
    }
    function _0x227C6(_0x22650) {
       // throw (_0x22650._ || _0x2263A[11])
    }
    function _0x227DC(_0x22650, _0x22666) {
        _0x22650._[_0x2263A[38]] = _0x22666._
    }
    function _0x227F2(_0x22650, _0x22666) {
        _0x22650._[_0x2263A[6]] = _0x22666._
    }
}
)()
