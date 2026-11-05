var $jscomp = $jscomp || {};
$jscomp['scope'] = {};
$jscomp['ASSUME_ES5'] = !0x1;
$jscomp['ASSUME_NO_NATIVE_MAP'] = !0x1;
$jscomp['ASSUME_NO_NATIVE_SET'] = !0x1;
$jscomp['SIMPLE_FROUND_POLYFILL'] = !0x1;
$jscomp['objectCreate'] = $jscomp['ASSUME_ES5'] || 'function' == typeof Object['create'] ? Object['create'] : function(_0x185079) {
    var _0x19d3c8 = function() {};
    _0x19d3c8['prototype'] = _0x185079;
    return new _0x19d3c8();
};
$jscomp['underscoreProtoCanBeSet'] = function() {
    var _0x91202b = {
            'a': !0x0
        },
        _0x3accf8 = {};
    try {
        return _0x3accf8['__proto__'] = _0x91202b, _0x3accf8['a'];
    } catch (_0x229212) {}
    return !0x1;
};
$jscomp['setPrototypeOf'] = 'function' == typeof Object['setPrototypeOf'] ? Object['setPrototypeOf'] : $jscomp['underscoreProtoCanBeSet']() ? function(_0x406eea, _0x55bb2a) {
    _0x406eea['__proto__'] = _0x55bb2a;
    if (_0x406eea['__proto__'] !== _0x55bb2a) throw new TypeError(_0x406eea + '\x20is\x20not\x20extensible');
    return _0x406eea;
} : null;
$jscomp['inherits'] = function(_0x46c480, _0x58b1c1) {
    _0x46c480['prototype'] = $jscomp['objectCreate'](_0x58b1c1['prototype']);
    _0x46c480['prototype']['constructor'] = _0x46c480;
    if ($jscomp['setPrototypeOf']) {
        var _0x2c113a = $jscomp['setPrototypeOf'];
        _0x2c113a(_0x46c480, _0x58b1c1);
    } else
        for (_0x2c113a in _0x58b1c1)
            if ('prototype' != _0x2c113a)
                if (Object['defineProperties']) {
                    var _0xa3d4f7 = Object['getOwnPropertyDescriptor'](_0x58b1c1, _0x2c113a);
                    _0xa3d4f7 && Object['defineProperty'](_0x46c480, _0x2c113a, _0xa3d4f7);
                } else _0x46c480[_0x2c113a] = _0x58b1c1[_0x2c113a];
    _0x46c480['superClass_'] = _0x58b1c1['prototype'];
};
var last_array = 0x0,
    best_score = 0x0,
    game_data = {
        'sound': !0x0
    },
    player_data = {
        'drop_mode': 0x0,
        'hint_left': 0x5,
        'shuffle_left': 0x5,
        'score': 0x0
    };
load_data();

function load_data() {
    var _0x33fee3 = localStorage['getItem'](gamesAPI['config']['myItems'][0x0]);
    _0x33fee3 && (best_score = _0x33fee3);
    (_0x33fee3 = localStorage['getItem'](gamesAPI['config']['myItems'][0x1])) && (player_data = JSON['parse'](_0x33fee3));
    if (_0x33fee3 = localStorage['getItem'](gamesAPI['config']['myItems'][0x2])) _0x33fee3 = JSON['parse'](_0x33fee3), last_array = _0x33fee3['arr'], player_data = _0x33fee3['data'];
}
var Menu = function() {
    return Phaser['Scene']['call'](this, 'menu') || this;
};
$jscomp['inherits'](Menu, Phaser['Scene']);
Menu['prototype']['create'] = function() {
    var _0x48c9a5 = this,
        _0x221bed = this;
    this['add']['sprite'](0x0, 0x0, 'background')['setOrigin'](0x0);
    var _0x35d07a = this['add']['sprite'](0x168, 0xdc, 'game_title');
    this['tweens']['add']({
        'targets': _0x35d07a,
        'y': _0x35d07a['y'] + 0x1e,
        'duration': 0x514,
        'ease': 'Sine.easeInOut',
        'yoyo': !0x0,
        'repeat': -0x1
    });
    this['add']['text'](0x140, 0x212, 'KỶ\x20LỤC:', {
        'fontFamily': 'PoetsenOne',
        'fontSize': 0x23,
        'align': 'center',
        'color': '#FFFFFF'
    })['setOrigin'](0.5);
    this['add']['text'](0x1cc, 0x212, String(best_score), {
        'fontFamily': 'PoetsenOne',
        'fontSize': 0x1e,
        'align': 'center',
        'color': '#FFFFFF'
    })['setOrigin'](0.5);
    draw_button(0x168, 0x294, 'play', this);
    if (gamesAPI['config']['show_more_btn']) {
        draw_button(0x168, 0x334, 'more_games', this);
    } else {
        draw_button(0x168, 0x334, 'credits', this);
    };
    var _0x23b669 = 'nocredits';
    var _0x4d37e2 = this['add']['group']();
    var _0x16038d = '2021/12/30';
    var _0xdc72d5 = new Date(_0x16038d);
    var _0x59d049 = new Date();
    this['input']['on']('gameobjectdown', function(_0x25b316, _0x58a7c0) {
        _0x58a7c0['button'] && (play_sound('click', _0x48c9a5), _0x48c9a5['tweens']['add']({
            'targets': _0x58a7c0,
            'scaleX': 0.9,
            'scaleY': 0.9,
            'yoyo': !0x0,
            'ease': 'Linear',
            'duration': 0x64,
            'onComplete': function() {
                if (_0x23b669 === 'nocredits') {
                    if ('credits' === _0x58a7c0['name']) {
                        _0x23b669 = 'credits';
                        var _0x5d1386 = _0x221bed['add']['rectangle'](0x0, 0x0, config['width'], config['height'], 0x0)['setOrigin'](0x0);
                        _0x5d1386['setInteractive']();
                        _0x5d1386['alpha'] = 0x0;
                        _0x221bed['tweens']['add']({
                            'targets': _0x5d1386,
                            'alpha': 0.5,
                            'duration': 0xc8
                        });
                        var _0xadb96f = _0x221bed['add']['sprite'](0x168, 0x258, 'popup_credits'),
                            _0x4dacd1 = _0x221bed['add']['text'](0x168, 0x1ae, 'THÔNG TIN', {
                                'fontFamily': 'vanilla',
                                'fontSize': 0x28,
                                'align': 'center',
                                'color': '#FFFFFF'
                            })['setOrigin'](0.5),
                            _0x21ff9a = _0x221bed['add']['text'](0x168, 0x230, gamesAPI['config']['credits_text_detail'], {
                                'fontFamily': 'vanilla',
                                'fontSize': 0x19,
                                'align': 'center',
                                'color': '#FFFFFF'
                            })['setOrigin'](0.5),
                            _0x53b4ea = draw_button(0x168, 0x2e4, 'credit_logo', _0x221bed),
                            _0x3d442b = draw_button(0x2a3, 0x163, 'close', _0x221bed);
                        _0x4d37e2['addMultiple']([_0x5d1386, _0xadb96f, _0x4dacd1, _0x21ff9a, _0x53b4ea, _0x3d442b]);
                    }
                } else if ('close' === _0x58a7c0['name']) {
                    _0x23b669 = 'nocredits';
                    _0x4d37e2['clear'](!0x0, !0x0);
                }
                'play' === _0x58a7c0['name'] && (gamesAPI['show_ad'](), _0x221bed['scene']['start']('game'));
                'more_games' === _0x58a7c0['name'] && openLinks['clickMore'](gamesAPI['config']['url'], '_blank');
                'credit_logo' === _0x58a7c0['name'] & _0xdc72d5['getTime']() < _0x59d049['getTime']() && openLinks['clickMore'](gamesAPI['config']['url'], '_blank');
            }
        }, _0x48c9a5));
    }, this);
    this['add']['text'](0x168, 0x410, gamesAPI['config']['credits_text'], {
        'fontFamily': 'robotomono',
        'fontSize': 0x1c,
        'align': 'center',
        'color': '#ffffff'
    })['setOrigin'](0.5);
};