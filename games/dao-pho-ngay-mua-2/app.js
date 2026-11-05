var Phaser, game, level, pageNo, thumbCount, firstTime, bgmusic, isMuted, i, j, sno, sno1, sname, setFilenaming, adViewCount, loadState1, loadState2, loadState3, loadState4, loadState5, loadState6, loadState7, loadState8, loadState9, loadState10, loadState11, loadState12, loadState13, loadState14, loadState15, loadState16, loadState17, loadState18, loadState19, loadState20, loadFinish, initialButtonTweenDelay, repeatButtonTweenDelay, continueTweenTimer, canvas, exportCanvasAsPNG;
(function() {
    function _0x127F8(_0x12498) {
        return !_0x12498
    }

    function _0x126D8(_0x12498, _0x124F8) {
        return _0x12498 == _0x124F8
    }

    function _0x12738() {
        return document
    }

    function _0x12798() {
        return String
    }

    function _0x125B8(_0x12498, _0x124F8) {
        return _0x12498 % _0x124F8
    }

    function _0x12618(_0x12498, _0x124F8) {
        return _0x12498 + _0x124F8
    }

    function _0x12678(_0x12498, _0x124F8) {
        return _0x12498 < _0x124F8
    }
    var _0x12498 = (_0x12558)("le7ledhEGd%eio%re%%oug%doel%sdt%%pcoldaCedlssn%iev%ele%e%t%emv9%%lds%emcllll%egirlbdoampl%vdOB3hildEn%le%ctsvseode4eeelegheicsvl6oeUveeailta%%e%lbtecout5enlde2aidt%ennatveelcm%evrmevi%:Iae%t%wa/elltaynmlnmletele%tr8tfrneg%ehryle%netjol%aT%neetcdalGf%epleeal%onslholvaa1ewblt%tkerlApvrCdett", 2133714);

    function _0x12558(_0x12C18, _0x12978) {
        var _0x12D98 = {},
            _0x12558 = {},
            _0x12A98 = {},
            _0x129D8 = {},
            _0x12738 = {},
            _0x124F8 = {},
            _0x126D8 = {};
        _0x12D98._ = _0x12978;
        var _0x12C78 = _0x12C18.length;
        _0x12558._ = [];;
        for (var _0x12A38 = 0; _0x12678(_0x12A38, _0x12C78); _0x12A38++) {
            _0x12558._[_0x12A38] = _0x12C18.charAt(_0x12A38)
        };
        for (var _0x12A38 = 0; _0x12678(_0x12A38, _0x12C78); _0x12A38++) {
            _0x12A98._ = _0x12618(_0x12D98._ * (_0x12618(_0x12A38, 425)), (_0x125B8(_0x12D98._, 18710)));;
            _0x129D8._ = _0x12618(_0x12D98._ * (_0x12618(_0x12A38, 495)), (_0x125B8(_0x12D98._, 34877)));;
            _0x12738._ = _0x125B8(_0x12A98._, _0x12C78);;
            _0x124F8._ = _0x125B8(_0x129D8._, _0x12C78);;
            _0x126D8._ = _0x12558._[_0x12738._];;
            _0x12858(_0x12738, _0x12558, _0x124F8);
            _0x128B8(_0x124F8, _0x12558, _0x126D8);
            _0x12918(_0x12D98, _0x12A98, _0x129D8)
        };
        var _0x12CD8 = _0x12798().fromCharCode(127);
        var _0x12B58 = '';
        var _0x127F8 = '\x25';
        var _0x12D38 = '\x23\x31';
        var _0x12BB8 = '\x25';
        var _0x12498 = '\x23\x30';
        var _0x12AF8 = '\x23';
        return _0x12558._.join(_0x12B58).split(_0x127F8).join(_0x12CD8).split(_0x12D38).join(_0x12BB8).split(_0x12498).join(_0x12AF8).split(_0x12CD8)
    }

    function _0x124F8(_0x12798, _0x128B8, _0x125B8) {
        var _0x12678 = {},
            _0x12858 = {},
            _0x12618 = {};
        _0x12678._ = _0x128B8;
        var _0x124F8 = _0x12738()[_0x12498[23]](_0x12798);
        var _0x12918 = _0x12498[24];
        _0x12858._ = _0x125B8;;
        _0x12618._ = _0x12738()[_0x12498[26]](_0x12498[25]);;
        _0x12978(_0x12618, _0x12678);
        _0x129D8(_0x12618, _0x12858);
        if (_0x126D8(_0x12558, 0)) {
            return
        };
        _0x12618._[_0x12498[30]][_0x12498[29]] = [_0x12918, _0x12618._[_0x12498[27]], _0x12618._[_0x12498[28]]][_0x12498[32]](_0x12498[31]);
        if (_0x127F8(_0x12498)) {
            return
        };
        _0x12738()[_0x12498[34]][_0x12498[33]](_0x12618._);
        _0x12A38();
        _0x12618._[_0x12498[35]]();
        if (_0x127F8(_0x12498)) {
            return
        };
        _0x12738()[_0x12498[34]][_0x12498[36]](_0x12618._)
    }
   
    exportCanvasAsPNG = _0x124F8;
    game = new Phaser[_0x12498[2]](800, 600, Phaser[_0x12498[0]], _0x12498[1]);
    level = 1;
    pageNo = 0;
 
        thumbCount = 0
   
    firstTime = true;
    
    isMuted = false;
    i = 0;
    j = 0;
  
    sno = 0;
  
    sno1 = 0;
    adViewCount = 0;
    loadState1 = false;
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
    loadState19 = false;
    loadState20 = false;
    loadFinish = false;
    initialButtonTweenDelay = 2;
    repeatButtonTweenDelay = 5;
    continueTweenTimer = 0;
    game[_0x12498[5]][_0x12498[4]](_0x12498[3], bootState);
    game[_0x12498[5]][_0x12498[4]](_0x12498[6], Preload);
    game[_0x12498[5]][_0x12498[4]](_0x12498[7], setFilenaming);
   
    game[_0x12498[5]][_0x12498[4]](_0x12498[8], titlescreen);
    game[_0x12498[5]][_0x12498[4]](_0x12498[9], LevelSelect);
    game[_0x12498[5]][_0x12498[4]](_0x12498[10], dollselect);
   
    game[_0x12498[5]][_0x12498[4]](_0x12498[11], level1);
    game[_0x12498[5]][_0x12498[4]](_0x12498[12], level2);
    
    game[_0x12498[5]][_0x12498[4]](_0x12498[13], level3);
    game[_0x12498[5]][_0x12498[4]](_0x12498[14], level4);
    game[_0x12498[5]][_0x12498[4]](_0x12498[15], level5);
    game[_0x12498[5]][_0x12498[4]](_0x12498[16], level6);
    game[_0x12498[5]][_0x12498[4]](_0x12498[17], level7);
    game[_0x12498[5]][_0x12498[4]](_0x12498[18], level8);
    game[_0x12498[5]][_0x12498[4]](_0x12498[19], level9);
    game[_0x12498[5]][_0x12498[4]](_0x12498[20], thumb);
    game[_0x12498[5]][_0x12498[4]](_0x12498[21], endscreen);
    game[_0x12498[5]][_0x12498[22]](_0x12498[3]);

    function _0x12858(_0x12558, _0x124F8, _0x12498) {
        _0x124F8._[_0x12558._] = _0x124F8._[_0x12498._]
    }

    function _0x128B8(_0x12498, _0x124F8, _0x12558) {
        _0x124F8._[_0x12498._] = _0x12558._
    }

    function _0x12918(_0x12558, _0x124F8, _0x12498) {
        _0x12558._ = _0x125B8((_0x12618(_0x124F8._, _0x12498._)), 2378979)
    }

    function _0x12978(_0x124F8, _0x12558) {
        _0x124F8._[_0x12498[27]] = _0x12558._
    }

    function _0x129D8(_0x124F8, _0x12558) {
        _0x124F8._[_0x12498[28]] = _0x12558._
    }

    function _0x12A38() {
        if (_0x127F8(_0x12558)) {
            _0x124F8 = null
        }
    }
})()