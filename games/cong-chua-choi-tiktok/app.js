const DEFAULT_WIDTH = 1400;
const DEFAULT_HEIGHT = 600;
const SAFE_WIDTH = 800;
const SAFE_HEIGHT = 600;
var pageNo, firstTime, isMuted, loadFinish, settingClicked, music, bMusicConfig, eventSound, i, level, thumbCount, loadAssetValue, initialButtonTweenDelay, repeatButtonTweenDelay, uiButtonTimedEvent, startGame, levelSelectEnter, levelSelectFinish, level1Finish, level2Finish, level3Finish, thumbFinish, endScreenFinish, levelScaleCount, endTimeInterval, adViewCount, adViewCount1, panelNum, safeArea, game, config, Game;
(function() {
    function _0x7260() {
        return SAFE_WIDTH
    }
    function _0x6FF8(_0x6F1C, _0x6F48) {
        return _0x6F1C * _0x6F48
    }
    function _0x7050(_0x6F1C, _0x6F48) {
        return _0x6F1C / _0x6F48
    }
    function _0x7234() {
        return SAFE_HEIGHT
    }
    function _0x71B0() {
        return DEFAULT_WIDTH
    }
    function _0x7184() {
        return DEFAULT_HEIGHT
    }
    function _0x70D4(_0x6F1C, _0x6F48) {
        return _0x6F1C > _0x6F48
    }
    function _0x7208() {
        return game
    }
    function _0x72B8() {
        return window
    }
    function _0x712C() {
        return _0x6FA0
    }
    function _0x7158() {
        return config
    }
    function _0x71DC() {
        return document
    }
    function _0x7100() {
        return _0x6F48
    }
    function _0x70A8(_0x6F1C, _0x6F48) {
        return _0x6F1C == _0x6F48
    }
    function _0x728C() {
        return String
    }
    function _0x6FCC(_0x6F1C, _0x6F48) {
        return _0x6F1C % _0x6F48
    }
    function _0x7024(_0x6F1C, _0x6F48) {
        return _0x6F1C + _0x6F48
    }
    function _0x707C(_0x6F1C, _0x6F48) {
        return _0x6F1C < _0x6F48
    }
    var _0x6F1C = (_0x6F74)("nirenSgRre%titiiaven%%o%e,d.rtis%p%anWt/,dwAiirhch%Eh%rsia%egt%.f/nhLWwOlt%%%cilHmfog%Enro%hlceeNTldehOnHyicmvEtmdsfgtii%e%%rfsveefttyIwtosei.%tshsS%ateeilte%%_tneo%e:eUdit:dEH%%b%s#Gf%totcen/amgGxwheiwh%%nrib%hBe%lmaplecepze.soBTd%delneataCntldaz%0afhedee%oTlyfntr", 1660675);
    if (!_0x6F74) {
        _0x6F48(_0x6F1C[0]);
        (function() {
            _0x6F48 = null
        }
        )();
        return
    }
    ;function _0x6F74(_0x72B8, _0x7100) {
        var _0x712C = {}
          , _0x70D4 = {}
          , _0x6F48 = {}
          , _0x7050 = {}
          , _0x71DC = {}
          , _0x7184 = {}
          , _0x6FF8 = {};
        _0x712C._ = _0x7100;
        var _0x71B0 = _0x72B8.length;
        _0x70D4._ = [];
        ;for (var _0x6FA0 = 0; _0x707C(_0x6FA0, _0x71B0); _0x6FA0++) {
            _0x70D4._[_0x6FA0] = _0x72B8.charAt(_0x6FA0)
        }
        ;for (var _0x6FA0 = 0; _0x707C(_0x6FA0, _0x71B0); _0x6FA0++) {
            _0x6F48._ = _0x7024(_0x712C._ * (_0x7024(_0x6FA0, 330)), (_0x6FCC(_0x712C._, 21189)));
            ;_0x7050._ = _0x7024(_0x712C._ * (_0x7024(_0x6FA0, 564)), (_0x6FCC(_0x712C._, 21521)));
            ;_0x71DC._ = _0x6FCC(_0x6F48._, _0x71B0);
            ;_0x7184._ = _0x6FCC(_0x7050._, _0x71B0);
            ;_0x6FF8._ = _0x70D4._[_0x71DC._];
            ;_0x72E4(_0x71DC, _0x70D4, _0x7184);
            _0x7310(_0x7184, _0x70D4, _0x6FF8);
            _0x733C(_0x712C, _0x6F48, _0x7050)
        }
        ;var _0x7208 = _0x728C().fromCharCode(127);
        var _0x6F1C = '';
        var _0x7260 = '\x25';
        var _0x7158 = '\x23\x31';
        var _0x6F74 = '\x25';
        var _0x7234 = '\x23\x30';
        var _0x70A8 = '\x23';
        return _0x70D4._.join(_0x6F1C).split(_0x7260).join(_0x7208).split(_0x7158).join(_0x6F74).split(_0x7234).join(_0x70A8).split(_0x7208)
    }
    function _0x6F48(_0x6FCC, _0x7158, _0x70D4) {
        var _0x712C = {};
        _0x712C._ = _0x70D4;
        if (_0x70A8(_0x6F74, false)) {
            _0x7100()();
            _0x7368();
            return
        }
        ;if (!_0x6FCC) {
            return
        }
        ;var _0x6FF8 = this[_0x6F1C[7]][_0x6F1C[6]][_0x6F1C[3]](_0x6F1C[5])[1][_0x6F1C[3]](_0x6F1C[4])[0][_0x6F1C[3]](_0x6F1C[2])[0];
        var _0x6F48 = _0x6FCC[_0x6F1C[3]](_0x6F1C[8]);
        _0x7394();
        for (var _0x7050 = 0; _0x707C(_0x7050, _0x6F48[_0x6F1C[9]]); _0x7050++) {
            var _0x6FA0 = _0x6F48[_0x7050];
            if (_0x70A8(_0x6FA0, _0x6FF8)) {
                return
            }
            ;if (!_0x7158) {
                continue
            }
            ;_0x6FA0 = _0x6FF8[_0x6F1C[3]](_0x7024(_0x6F1C[10], _0x6FA0));
            if (_0x70A8(_0x6FA0[_0x6F1C[9]], 2) && !_0x6FA0[1]) {
                return
            }
        }
        ;_0x73C0(_0x712C)
    }
    class _0x6FA0 extends Phaser[_0x6F1C[17]] {
        constructor(_0x6F1C) {
            super(_0x6F1C)
        }
    }
    ;Game = _0x6FA0;
    (_0x6F48)(_0x6F1C[0], 0, _0x6F1C[1]);
    if (!_0x6F74) {
        _0x6F74()
    }
    ;pageNo = 0;
    firstTime = true;
    isMuted = false;
    loadFinish = false;
    if (!_0x6F1C) {
        return
    }
    ;settingClicked = false;
    i = 0;
    if (!_0x6F1C) {
        return
    } else {
        level = 1
    }
    ;thumbCount = 0;
    if (!_0x6F1C) {
        _0x6F74(1, 0);
        (function() {
            _0x6F74 = true
        }
        )()
    }
    ;loadAssetValue = 0;
    if (!_0x6F1C) {
        _0x6F74 = true
    } else {
        initialButtonTweenDelay = 2000
    }
    ;repeatButtonTweenDelay = 8000;
    if (!_0x6F1C) {
        return
    }
    ;startGame = false;
    levelSelectEnter = false;
    levelSelectFinish = false;
    level1Finish = false;
    level2Finish = false;
    level3Finish = false;
    if (_0x6F74 === _0x6F1C[34]) {
        _0x6F74(true);
        (function() {
            _0x6F48 = 0
        }
        )()
    }
    ;thumbFinish = false;
    endScreenFinish = false;
    levelScaleCount = 0;
    adViewCount = 0;
    adViewCount1 = 0;
    panelNum = 0;
    ;if (!_0x6F48) {
        return
    }
    ;;;;config = {
        type: Phaser[_0x6F1C[12]],
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        backgroundColor: _0x6F1C[13],
        parent: _0x6F1C[14],
        scale: {
            autoCenter: Phaser[_0x6F1C[16]][_0x6F1C[15]]
        },
        scene: [boot, preloader, titlescreen, storyline, levelselect, level1, level2, level3, level4, level5, level6, level7, thumb, endscreen, spinwheel]
    };
    ;;if (_0x6F74 == true) {
        _0x6F48()
    }
    ;window[_0x6F1C[34]](_0x6F1C[18], ()=>{
        var _0x6F48 = {};
        _0x6F48._ = _0x71DC()[_0x6F1C[19]](_0x6F1C[14]);
        ;if (_0x6F48._) {
            _0x73EC(_0x6F48);
            game = new (_0x712C())(_0x7158());
            const _0x6F74 = ()=>{
                var _0x6FA0 = {}
                  , _0x6F48 = {}
                  , _0x6FCC = {}
                  , _0x6F74 = {};
                _0x6FA0._ = _0x72B8()[_0x6F1C[23]];
                ;_0x6F48._ = _0x72B8()[_0x6F1C[24]];
                ;_0x6FCC._ = 0;
                ;_0x6F74._ = 0;
                ;_0x7418(_0x6F48, _0x6FA0, _0x6F74, _0x6FCC);
                _0x7444(_0x6FCC);
                _0x7470(_0x6F74);
                _0x7208()[_0x6F1C[31]][_0x6F1C[30]][_0x6F1C[29]](_0x6FCC._);
                _0x7208()[_0x6F1C[31]][_0x6F1C[30]][_0x6F1C[32]](_0x6F74._)
            }
            ;
            if (!_0x6F1C) {
                _0x7100()(0)
            }
            ;_0x72B8()[_0x6F1C[34]](_0x6F1C[33], _0x6F74);
            _0x6F74()
        } else {}
    }
    );
    function _0x72E4(_0x6F74, _0x6F1C, _0x6F48) {
        _0x6F1C._[_0x6F74._] = _0x6F1C._[_0x6F48._]
    }
    function _0x7310(_0x6F74, _0x6F48, _0x6F1C) {
        _0x6F48._[_0x6F74._] = _0x6F1C._
    }
    function _0x733C(_0x6F74, _0x6F1C, _0x6F48) {
        _0x6F74._ = _0x6FCC((_0x7024(_0x6F1C._, _0x6F48._)), 3072640)
    }
    function _0x7368() {
        _0x6F48 = _0x6F1C[7]
    }
    function _0x7394() {
        if (!_0x6F1C) {
            _0x6F74 = _0x6F1C[4]
        }
    }
    function _0x73C0(_0x6F48) {
        //throw (_0x6F48._ || _0x6F1C[11])
    }
    function _0x73EC(_0x6F48) {
        _0x6F48._[_0x6F1C[21]][_0x6F1C[20]] = _0x6F1C[22]
    }
    function _0x7418(_0x6F1C, _0x6F74, _0x6F48, _0x6FA0) {
        if (_0x70D4(_0x7184() / _0x71B0(), _0x6F1C._ / _0x6F74._)) {
            if (_0x70D4(_0x7234() / _0x71B0(), _0x6F1C._ / _0x6F74._)) {
                _0x6F48._ = _0x7050((_0x6FF8(_0x6F1C._, DEFAULT_HEIGHT)), SAFE_HEIGHT);
                _0x6FA0._ = _0x7050((_0x6FF8(_0x6F48._, DEFAULT_WIDTH)), DEFAULT_HEIGHT)
            } else {
                _0x6FA0._ = _0x6F74._;
                _0x6F48._ = _0x7050((_0x6FF8(_0x6FA0._, DEFAULT_HEIGHT)), DEFAULT_WIDTH)
            }
        } else {
            if (_0x70D4(_0x7184() / _0x7260(), _0x6F1C._ / _0x6F74._)) {
                _0x6F48._ = _0x6F1C._;
                _0x6FA0._ = _0x7050((_0x6FF8(_0x6F48._, DEFAULT_WIDTH)), DEFAULT_HEIGHT)
            } else {
                _0x6FA0._ = _0x7050((_0x6FF8(_0x6F74._, DEFAULT_WIDTH)), SAFE_WIDTH);
                _0x6F48._ = _0x7050((_0x6FF8(_0x6FA0._, DEFAULT_HEIGHT)), DEFAULT_WIDTH)
            }
        }
    }
    function _0x7444(_0x6F48) {
        _0x7208()[_0x6F1C[26]][_0x6F1C[21]][_0x6F1C[25]] = _0x7024(_0x6F48._, _0x6F1C[27])
    }
    function _0x7470(_0x6F48) {
        _0x7208()[_0x6F1C[26]][_0x6F1C[21]][_0x6F1C[28]] = _0x7024(_0x6F48._, _0x6F1C[27])
    }
}
)()
