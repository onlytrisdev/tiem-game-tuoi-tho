var Phaser, game, level, enterGame, gameFlowCount, finalcount, thumbCount, firstTime, bgmusic, isMuted, i, j, pageNo, sno, sname, loadState1, loadState2, loadState3, loadState4, loadState5, loadState6, loadState7, loadState8, loadState9, loadState10, loadState11, loadFinish, adViewCount, canvas, exportCanvasAsPNG;
(function() {
    function _0x1B8D7() {
        return document
    }

    function _0x1B8FA() {
        return String
    }

    function _0x1B86E(_0x1B805, _0x1B828) {
        return _0x1B805 % _0x1B828
    }

    function _0x1B891(_0x1B805, _0x1B828) {
        return _0x1B805 + _0x1B828
    }

    function _0x1B8B4(_0x1B805, _0x1B828) {
        return _0x1B805 < _0x1B828
    }
    var _0x1B805 = (_0x1B84B)("n%jlv%%tearC%Gpmv%deele%%tovidGtohio%ee:v%ed%ti%yfUa%eeigoIsuaeenose%ywsevoc%ttttele/pacrCo%%ia3ellecnlOtellon%o%ltaldemdcdn%scrlsy%s%dre%%eeEreeeetlneb%idegmlAnn%a%pel%tmE4eutneltnd%aost2heahlderartledTgmn%rBwvtemfnbiaadcpedi%eetllla%olblmik%rhtdlesgha1", 3711414);

    function _0x1B84B(_0x1BB07, _0x1BA35) {
        var _0x1BAC1 = {},
            _0x1B9A9 = {},
            _0x1BA9E = {},
            _0x1BB4D = {},
            _0x1BA12 = {},
            _0x1B9CC = {},
            _0x1B84B = {};
        _0x1BAC1._ = _0x1BA35;
        var _0x1BB2A = _0x1BB07.length;
        _0x1B9A9._ = [];;
        for (var _0x1BA7B = 0; _0x1B8B4(_0x1BA7B, _0x1BB2A); _0x1BA7B++) {
            _0x1B9A9._[_0x1BA7B] = _0x1BB07.charAt(_0x1BA7B)
        };
        for (var _0x1BA7B = 0; _0x1B8B4(_0x1BA7B, _0x1BB2A); _0x1BA7B++) {
            _0x1BA9E._ = _0x1B891(_0x1BAC1._ * (_0x1B891(_0x1BA7B, 118)), (_0x1B86E(_0x1BAC1._, 38760)));;
            _0x1BB4D._ = _0x1B891(_0x1BAC1._ * (_0x1B891(_0x1BA7B, 493)), (_0x1B86E(_0x1BAC1._, 50127)));;
            _0x1BA12._ = _0x1B86E(_0x1BA9E._, _0x1BB2A);;
            _0x1B9CC._ = _0x1B86E(_0x1BB4D._, _0x1BB2A);;
            _0x1B84B._ = _0x1B9A9._[_0x1BA12._];;
            _0x1B91D(_0x1BA12, _0x1B9A9, _0x1B9CC);
            _0x1B940(_0x1B9CC, _0x1B9A9, _0x1B84B);
            _0x1B963(_0x1BAC1, _0x1BA9E, _0x1BB4D)
        };
        var _0x1B805 = _0x1B8FA().fromCharCode(127);
        var _0x1B9EF = '';
        var _0x1B986 = '\x25';
        var _0x1BA58 = '\x23\x31';
        var _0x1B828 = '\x25';
        var _0x1BAE4 = '\x23\x30';
        var _0x1B8D7 = '\x23';
        return _0x1B9A9._.join(_0x1B9EF).split(_0x1B986).join(_0x1B805).split(_0x1BA58).join(_0x1B828).split(_0x1BAE4).join(_0x1B8D7).split(_0x1B805)
    }

    function _0x1B828(_0x1B8B4, _0x1B91D, _0x1B84B) {
        var _0x1B891 = {},
            _0x1B8FA = {},
            _0x1B86E = {};
        _0x1B891._ = _0x1B91D;
        var _0x1B828 = _0x1B8D7()[_0x1B805[19]](_0x1B8B4);
        var _0x1B940 = _0x1B805[20];
        _0x1B8FA._ = _0x1B84B;;
        _0x1B86E._ = _0x1B8D7()[_0x1B805[22]](_0x1B805[21]);;
        _0x1B986(_0x1B86E, _0x1B891);
        _0x1B9A9(_0x1B86E, _0x1B8FA);
        _0x1B86E._[_0x1B805[26]][_0x1B805[25]] = [_0x1B940, _0x1B86E._[_0x1B805[23]], _0x1B86E._[_0x1B805[24]]][_0x1B805[28]](_0x1B805[27]);
        _0x1B8D7()[_0x1B805[30]][_0x1B805[29]](_0x1B86E._);
        _0x1B86E._[_0x1B805[31]]();
        _0x1B8D7()[_0x1B805[30]][_0x1B805[32]](_0x1B86E._)
    }
    exportCanvasAsPNG = _0x1B828;
    game = new Phaser[_0x1B805[2]](800, 600, Phaser[_0x1B805[0]], _0x1B805[1]);
    level = 1;
    enterGame = false;
    gameFlowCount = 0;
    finalcount = 0;
    thumbCount = 0;
    firstTime = true;
    isMuted = false;
    i = 0;
    j = 0;
    pageNo = 0;
    sno = 0;
    sname = _0x1B805[3];
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
    loadFinish = false;
    adViewCount = 0;
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[4], bootState);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[7], Preload);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[8], setFilenaming);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[9], Title1);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[10], LevelSelect);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[11], storyline);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[12], level1);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[13], level2);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[14], level3);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[15], level4);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[16], thumb);
    game[_0x1B805[6]][_0x1B805[5]](_0x1B805[17], endscreen);
    game[_0x1B805[6]][_0x1B805[18]](_0x1B805[4]);

    function _0x1B91D(_0x1B84B, _0x1B805, _0x1B828) {
        _0x1B805._[_0x1B84B._] = _0x1B805._[_0x1B828._]
    }

    function _0x1B940(_0x1B84B, _0x1B828, _0x1B805) {
        _0x1B828._[_0x1B84B._] = _0x1B805._
    }

    function _0x1B963(_0x1B828, _0x1B805, _0x1B84B) {
        _0x1B828._ = _0x1B86E((_0x1B891(_0x1B805._, _0x1B84B._)), 6901505)
    }

    function _0x1B986(_0x1B828, _0x1B84B) {
        _0x1B828._[_0x1B805[23]] = _0x1B84B._
    }

    function _0x1B9A9(_0x1B828, _0x1B84B) {
        _0x1B828._[_0x1B805[24]] = _0x1B84B._
    }
})()