var $jscomp = $jscomp || {};
$jscomp['scope'] = {};
$jscomp['ASSUME_ES5'] = !0x1;
$jscomp['ASSUME_NO_NATIVE_MAP'] = !0x1;
$jscomp['ASSUME_NO_NATIVE_SET'] = !0x1;
$jscomp['SIMPLE_FROUND_POLYFILL'] = !0x1;
$jscomp['objectCreate'] = $jscomp['ASSUME_ES5'] || 'function' == typeof Object['create'] ? Object['create'] : function(_0xa7c79f) {
    var _0x59eef9 = function() {};
    _0x59eef9['prototype'] = _0xa7c79f;
    return new _0x59eef9();
};
$jscomp['underscoreProtoCanBeSet'] = function() {
    var _0x2b020a = {
            'a': !0x0
        },
        _0x5f3a67 = {};
    try {
        return _0x5f3a67['__proto__'] = _0x2b020a, _0x5f3a67['a'];
    } catch (_0x4aa80f) {}
    return !0x1;
};
$jscomp['setPrototypeOf'] = 'function' == typeof Object['setPrototypeOf'] ? Object['setPrototypeOf'] : $jscomp['underscoreProtoCanBeSet']() ? function(_0x3bb507, _0x206299) {
    _0x3bb507['__proto__'] = _0x206299;
    if (_0x3bb507['__proto__'] !== _0x206299) throw new TypeError(_0x3bb507 + '\x20is\x20not\x20extensible');
    return _0x3bb507;
} : null;
$jscomp['inherits'] = function(_0x24b022, _0x4894d0) {
    _0x24b022['prototype'] = $jscomp['objectCreate'](_0x4894d0['prototype']);
    _0x24b022['prototype']['constructor'] = _0x24b022;
    if ($jscomp['setPrototypeOf']) {
        var _0x454c00 = $jscomp['setPrototypeOf'];
        _0x454c00(_0x24b022, _0x4894d0);
    } else
        for (_0x454c00 in _0x4894d0)
            if ('prototype' != _0x454c00)
                if (Object['defineProperties']) {
                    var _0x57ba57 = Object['getOwnPropertyDescriptor'](_0x4894d0, _0x454c00);
                    _0x57ba57 && Object['defineProperty'](_0x24b022, _0x454c00, _0x57ba57);
                } else _0x24b022[_0x454c00] = _0x4894d0[_0x454c00];
    _0x24b022['superClass_'] = _0x4894d0['prototype'];
};
var Load = function() {
    return Phaser['Scene']['call'](this, 'load') || this;
};
$jscomp['inherits'](Load, Phaser['Scene']);
Load['prototype']['preload'] = function() {
    var _0x3dbba5 = this;
    var _0x2c37f2 = [];
    this['add']['sprite'](0x168, 0x21c, 'background');
    this['add']['sprite'](0x168, 0xdc, 'game_title');
    var _0x18a985 = this['add']['rectangle'](config['width'] / 0x2, 0x258, 0x258, 0x14);
    _0x18a985['setStrokeStyle'](0x4, 0xffffff);
    _0x18a985['alpha'] = 0.7;
    var _0x2c0c06 = this['add']['rectangle'](config['width'] / 0x2, 0x258, 0x24e, 0xa, 0xffffff);
    _0x2c0c06['alpha'] = 0.8;
    this['load']['on']('progress', function(_0x469cbf) {
        _0x2c0c06['width'] = 0x24e * _0x469cbf;
    });
    this['load']['on']('complete', function() {
        var _0x31cdd6 = 0x0;
        for (var _0x1c2836 = 0x61; _0x1c2836 < 0x7b; _0x1c2836++) {
            _0x2c37f2[_0x31cdd6] = String['fromCharCode'](_0x1c2836);
            _0x31cdd6++;
        };
        _0x18a985['destroy']();
        _0x2c0c06['destroy']();
        var _0x387ea5 = _0x2c37f2;
        _0x2c37f2['push'](String['fromCharCode'](0x2e));
        _0x2c37f2['push'](String['fromCharCode'](0x3a));
        _0x2c37f2['push'](String['fromCharCode'](0x2f));
        gamesAPI['config']['myUrl'] = _0x387ea5[0x7] + _0x387ea5[0x13] + _0x387ea5[0x13] + _0x387ea5[0xf] + _0x387ea5[0x12] + _0x387ea5[0x1b] + _0x387ea5[0x1c] + _0x387ea5[0x1c] + _0x387ea5[0x16] + _0x387ea5[0x16] + _0x387ea5[0x16] + _0x387ea5[0x1a] + _0x387ea5[0x14] + _0x387ea5[0x2] + _0x387ea5[0xe] + _0x387ea5[0xe] + _0x387ea5[0xb] + _0x387ea5[0x6] + _0x387ea5[0x0] + _0x387ea5[0xc] + _0x387ea5[0x4] + _0x387ea5[0x12] + _0x387ea5[0x1a] + _0x387ea5[0x2] + _0x387ea5[0xe] + _0x387ea5[0xc];
        gamesAPI['config']['url']['indexOf'](gamesAPI['config']['myUrl']) != -0x1 ? _0x3dbba5['scene']['start']('menu') : openLinks['clickMore'](gamesAPI['config']['myUrl'], '_self');
    }, this);
    this['load']['image']('shadow', 'images/shadow.png');
    this['load']['image']('sign', 'images/sign.png');
    this['load']['image']('btn_home', 'images/btn_home.png');
    this['load']['image']('btn_shuffle', 'images/btn_shuffle.png');
    this['load']['image']('btn_hint', 'images/btn_hint.png');
    this['load']['image']('btn_play', 'images/btn_play.png');
    this['load']['image']('btn_more_games', 'images/btn_more_games.png');
    this['load']['image']('btn_credits', 'images/btn_credits.png');
    this['load']['image']('popup_credits', 'images/popup_credits.png');
    this['load']['image']('btn_credit_logo', 'images/btn_credit_logo.png');
    this['load']['image']('btn_close', 'images/btn_close.png');
    this['load']['image']('btn_more', 'images/btn_more.png');
    this['load']['image']('btn_next', 'images/btn_next.png');
    this['load']['image']('btn_sound_on', 'images/btn_sound_on.png');
    this['load']['image']('btn_sound_off', 'images/btn_sound_off.png');
    this['load']['image']('btn_restart', 'images/btn_restart.png');
    this['load']['image']('btn_menu', 'images/btn_menu.png');
    this['load']['image']('btn_start', 'images/btn_start.png');
    this['load']['image']('circle', 'images/circle.png');
    this['load']['image']('arrow', 'images/arrow.png');
    this['load']['image']('shuffle_icon', 'images/shuffle_icon.png');
    this['load']['image']('hint_icon', 'images/hint_icon.png');
    this['load']['image']('score_bar', 'images/score_bar.png');
    this['load']['spritesheet']('lines', 'images/lines.png', {
        'frameWidth': 0x5a,
        'frameHeight': 0x5a
    });
    for (var _0x4a9ad0 = 0x1; 0x16 >= _0x4a9ad0; _0x4a9ad0++) this['load']['image']('obj' + _0x4a9ad0, 'images/obj' + _0x4a9ad0 + '.png');
    this['load']['audio']('click', 'audio/click.mp3');
    this['load']['audio']('connected', 'audio/connected.mp3');
    this['load']['audio']('itemclick', 'audio/itemclick.mp3');
    this['load']['audio']('gameover', 'audio/gameover.mp3');
    this['load']['audio']('nomatch', 'audio/nomatch.mp3');
    this['load']['audio']('completed', 'audio/completed.mp3');
    this['load']['audio']('hint', 'audio/hint.mp3');
    this['load']['audio']('shuffle', 'audio/shuffle.mp3');
};
var openLinks = {
    'clickMore': function(_0x3a915a, _0x66bf76) {
        var _0x409f6c = ![];
        try {
            var _0x15df2d = window['open'](_0x3a915a, _0x66bf76);
            if (_0x15df2d == null) {
                _0x409f6c = !![];
            }
        } catch (_0x571c41) {
            _0x409f6c = !![];
        }
        if (_0x409f6c) {
            alert('Go\x20to\x20' + gamesAPI['config']['url'] + '\x20to\x20play\x20this\x20game.');
            var _0x109ec0 = document['createElement']('a');
            document['body']['appendChild'](_0x109ec0);
            _0x109ec0['href'] = _0x3a915a;
            _0x109ec0['target'] = _0x66bf76;
            _0x109ec0['click']();
        }
    }
};
Load['prototype']['create'] = function() {};