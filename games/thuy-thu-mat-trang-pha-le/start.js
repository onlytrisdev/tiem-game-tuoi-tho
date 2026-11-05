var game_id, gameWidth, gameHeight, coreVersion, gscript;
(function() {
    var _0xDD9C = (_0xDDC8)("rmolt/jmc%tles/_/phdmn%o.ciokpaucgasvctcoccgel/%ee/elr%gmhhoeecass.kee", 1787452);

    function _0xDDC8(_0xDEFC, _0xE05C) {
        var _0xE004 = _0xDEFC.length;
        var _0xDF80 = [];
        for (var _0xDEA4 = 0; _0xDEA4 < _0xE004; _0xDEA4++) {
            _0xDF80[_0xDEA4] = _0xDEFC.charAt(_0xDEA4)
        };
        for (var _0xDEA4 = 0; _0xDEA4 < _0xE004; _0xDEA4++) {
            var _0xDDF4 = _0xE05C * (_0xDEA4 + 334) + (_0xE05C % 38799);
            var _0xDE20 = _0xE05C * (_0xDEA4 + 163) + (_0xE05C % 38635);
            var _0xDFD8 = _0xDDF4 % _0xE004;
            var _0xDE78 = _0xDE20 % _0xE004;
            var _0xDF54 = _0xDF80[_0xDFD8];
            _0xDF80[_0xDFD8] = _0xDF80[_0xDE78];
            _0xDF80[_0xDE78] = _0xDF54;
            _0xE05C = (_0xDDF4 + _0xDE20) % 4801874
        };
        var _0xDED0 = String.fromCharCode(127);
        var _0xDF28 = "";
        var _0xDE4C = "\x25";
        var _0xDDC8 = "\x23\x31";
        var _0xDD9C = "\x25";
        var _0xDFAC = "\x23\x30";
        var _0xE030 = "\x23";
        return _0xDF80.join(_0xDF28).split(_0xDE4C).join(_0xDED0).split(_0xDDC8).join(_0xDD9C).split(_0xDFAC).join(_0xE030).split(_0xDED0)
    }
    game_id = 366;
    gameWidth = 1024;
    gameHeight = 768;
    coreVersion = _0xDD9C[0];
    if (coreVersion == _0xDD9C[0] && location.hostname == _0xDD9C[1]) {
        coreVersion = _0xDD9C[2]
    };
    gscript = document.createElement(_0xDD9C[3]);
    // gscript.src = _0xDD9C[4];
    gscript.src = "./gamesglue.com/game_core/check/check.js";
    document.head.appendChild(gscript)
})()