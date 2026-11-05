var $jscomp = $jscomp || {};
$jscomp['scope'] = {};
$jscomp['ASSUME_ES5'] = !0x1;
$jscomp['ASSUME_NO_NATIVE_MAP'] = !0x1;
$jscomp['ASSUME_NO_NATIVE_SET'] = !0x1;
$jscomp['SIMPLE_FROUND_POLYFILL'] = !0x1;
$jscomp['objectCreate'] = $jscomp['ASSUME_ES5'] || 'function' == typeof Object['create'] ? Object['create'] : function(_0x25895c) {
    var _0x48f036 = function() {};
    _0x48f036['prototype'] = _0x25895c;
    return new _0x48f036();
};
$jscomp['underscoreProtoCanBeSet'] = function() {
    var _0x1be564 = {
            'a': !0x0
        },
        _0xa56286 = {};
    try {
        return _0xa56286['__proto__'] = _0x1be564, _0xa56286['a'];
    } catch (_0x36ecff) {}
    return !0x1;
};
$jscomp['setPrototypeOf'] = 'function' == typeof Object['setPrototypeOf'] ? Object['setPrototypeOf'] : $jscomp['underscoreProtoCanBeSet']() ? function(_0x4ffe0e, _0x19988e) {
    _0x4ffe0e['__proto__'] = _0x19988e;
    if (_0x4ffe0e['__proto__'] !== _0x19988e) throw new TypeError(_0x4ffe0e + '\x20is\x20not\x20extensible');
    return _0x4ffe0e;
} : null;
$jscomp['inherits'] = function(_0x54b850, _0x54c8da) {
    _0x54b850['prototype'] = $jscomp['objectCreate'](_0x54c8da['prototype']);
    _0x54b850['prototype']['constructor'] = _0x54b850;
    if ($jscomp['setPrototypeOf']) {
        var _0xf64ca2 = $jscomp['setPrototypeOf'];
        _0xf64ca2(_0x54b850, _0x54c8da);
    } else
        for (_0xf64ca2 in _0x54c8da)
            if ('prototype' != _0xf64ca2)
                if (Object['defineProperties']) {
                    var _0x3c507a = Object['getOwnPropertyDescriptor'](_0x54c8da, _0xf64ca2);
                    _0x3c507a && Object['defineProperty'](_0x54b850, _0xf64ca2, _0x3c507a);
                } else _0x54b850[_0xf64ca2] = _0x54c8da[_0xf64ca2];
    _0x54b850['superClass_'] = _0x54c8da['prototype'];
};
var Game = function() {
    return Phaser['Scene']['call'](this, 'game') || this;
};
$jscomp['inherits'](Game, Phaser['Scene']);
Game['prototype']['create'] = function() {
    function _0x9ecdb6(_0xa5017, _0x3ec3a0, _0x595834) {
        var _0x5b2b1e = _0x48201f['add']['sprite'](_0xa5017, _0x3ec3a0, 'obj' + _0x595834);
        _0x48201f['tweens']['add']({
            'targets': _0x5b2b1e,
            'scaleY': 0x0,
            'scaleX': 0x0,
            'duration': 0x96,
            'ease': 'Linear',
            'onComplete': function() {
                _0x5b2b1e['destroy'](!0x0, !0x0);
            }
        });
    }

    function _0xc2fb97(_0x583cc9) {
        for (var _0x598236 = _0x583cc9['length'], _0x511a8c, _0x289584; _0x598236;) _0x289584 = Math['floor'](Math['random']() * _0x598236--), _0x511a8c = _0x583cc9[_0x598236], _0x583cc9[_0x598236] = _0x583cc9[_0x289584], _0x583cc9[_0x289584] = _0x511a8c;
        return _0x583cc9;
    }

    function _0x3243d2() {
        _0x9fb7da && (_0x9fb7da['clearTint'](), _0x9fb7da = null);
        for (var _0x3dcbde = [], _0x1a7b03 = _0x200293['getLength'](), _0x33cf1d = _0x200293['getChildren'](), _0x2f7076 = 0x0; 0xa > _0x2f7076; _0x2f7076++)
            for (var _0x557eb1 = 0x0; 0x8 > _0x557eb1; _0x557eb1++) _0x50e7f4[_0x2f7076][_0x557eb1]['filled'] && _0x3dcbde['push'](_0x50e7f4[_0x2f7076][_0x557eb1]['color']);
        _0xc2fb97(_0x3dcbde);
        for (_0x2f7076 = 0x0; _0x2f7076 < _0x1a7b03; _0x2f7076++) _0x557eb1 = _0x33cf1d[_0x2f7076], _0x557eb1['color'] = _0x3dcbde[_0x2f7076], _0x557eb1['setTexture']('obj' + _0x557eb1['color']);
        _0x5a51e8();
        _0x524184() ? setTimeout(function() {
            play_sound('shuffle', _0x48201f);
        }, 0xc8) : (console['log']('not\x20match'), _0x3243d2());
    }

    function _0x1af2c4() {
        var _0x302873 = _0x200293['getLength'](),
            _0x307904 = _0x200293['getChildren'](),
            _0x338e93 = _0x524184();
        if (_0x338e93) {
            _0x3442aa = _0x338e93;
            for (var _0x46de99 = 0x0; _0x46de99 < _0x302873; _0x46de99++) {
                var _0x2acb75 = _0x307904[_0x46de99];
                _0x2acb75['pos']['x'] === _0x338e93[0x0]['x'] && _0x2acb75['pos']['y'] === _0x338e93[0x0]['y'] && (_0x9fb7da = _0x2acb75, _0x2acb75['setTint'](0x4fdbc6), _0x2efee3['setVisible'](!0x0), _0x2efee3['setPosition'](_0x2acb75['x'], _0x2acb75['y']));
                if (_0x2acb75['pos']['x'] === _0x338e93[0x1]['x'] && _0x2acb75['pos']['y'] === _0x338e93[0x1]['y']) {
                    _0x2acb75['setTint'](0x4fdbc6);
                    var _0x15f04e = _0x2acb75;
                }
            }
            _0x15f04e && (_0x3b1b2d = 'wait1', player_data['score'] += 0x2, _0x527671['setText'](player_data['score']), _0x2efee3['setVisible'](!0x1), _0x302873 = _0x588997(_0x9fb7da['pos'], _0x15f04e['pos']), _0x3af8a9(_0x302873), _0x50e7f4[_0x15f04e['pos']['y']][_0x15f04e['pos']['x']]['filled'] = !0x1, _0x50e7f4[_0x9fb7da['pos']['y']][_0x9fb7da['pos']['x']]['filled'] = !0x1, setTimeout(function() {
                _0x3b1b2d = 'wait';
                _0x9ecdb6(_0x15f04e['x'], _0x15f04e['y'], _0x15f04e['color']);
                _0x9ecdb6(_0x9fb7da['x'], _0x9fb7da['y'], _0x9fb7da['color']);
                _0x15f04e['destroy'](!0x0, !0x0);
                _0x9fb7da['destroy'](!0x0, !0x0);
                _0x9fb7da = null;
                setTimeout(function() {
                    _0x127272();
                }, 0x64);
                _0x335255();
            }, 0x12c));
        }
    }

    function _0x7ee8f7() {
        var _0x2d5e29 = _0x200293['getLength'](),
            _0x4b9127 = _0x200293['getChildren'](),
            _0xb123f6 = _0x524184();
        if (_0xb123f6) {
            _0x3442aa = _0xb123f6;
            for (var _0x25b194 = 0x0; _0x25b194 < _0x2d5e29; _0x25b194++) {
                var _0x4c77c1 = _0x4b9127[_0x25b194];
                (_0x4c77c1['pos']['x'] === _0xb123f6[0x0]['x'] && _0x4c77c1['pos']['y'] === _0xb123f6[0x0]['y'] || _0x4c77c1['pos']['x'] === _0xb123f6[0x1]['x'] && _0x4c77c1['pos']['y'] === _0xb123f6[0x1]['y']) && _0x4c77c1['setTint'](0x4fdbc6);
            }
        } else alert('err');
        setTimeout(function() {
            play_sound('hint', _0x48201f);
        }, 0xc8);
    }

    function _0x524184() {
        for (var _0x229bd4 = _0x200293['getLength'](), _0x28bf6d = _0x200293['getChildren'](), _0xe17535 = 0x0; _0xe17535 < _0x229bd4; _0xe17535++) {
            var _0x261f48 = _0x28bf6d[_0xe17535];
            _0x5aa98e: {
                var _0x2f9b2b = _0x261f48['pos'];
                for (var _0x230fcf = _0x50e7f4[_0x2f9b2b['y']][_0x2f9b2b['x']]['color'], _0x34344b = 0x0; 0xa > _0x34344b; _0x34344b++)
                    for (var _0x1bcf61 = 0x0; 0x8 > _0x1bcf61; _0x1bcf61++)
                        if ((_0x34344b !== _0x2f9b2b['y'] || _0x1bcf61 !== _0x2f9b2b['x']) && _0x50e7f4[_0x34344b][_0x1bcf61]['filled'] && _0x50e7f4[_0x34344b][_0x1bcf61]['color'] === _0x230fcf && _0x588997(_0x2f9b2b, {
                                'x': _0x1bcf61,
                                'y': _0x34344b
                            })) {
                            _0x2f9b2b = {
                                'x': _0x1bcf61,
                                'y': _0x34344b
                            };
                            break _0x5aa98e;
                        } _0x2f9b2b = !0x1;
            }
            if (_0x2f9b2b) return [_0x261f48['pos'], _0x2f9b2b];
        }
        return !0x1;
    }

    function _0x127272() {
        if (0x0 === player_data['drop_mode']) var _0xe13f0 = 'down';
        else if (0x1 === player_data['drop_mode']) _0xe13f0 = '';
        else if (0x2 === player_data['drop_mode']) _0xe13f0 = 'up';
        else if (0x3 === player_data['drop_mode']) _0xe13f0 = 'left';
        else if (0x4 === player_data['drop_mode']) _0xe13f0 = 'right';
        else if (0x5 === player_data['drop_mode']) 0x0 === _0x11b51c ? _0xe13f0 = 'down' : 0x1 === _0x11b51c && (_0xe13f0 = 'up'), _0x11b51c++, 0x1 < _0x11b51c && (_0x11b51c = 0x0);
        else if (0x6 === player_data['drop_mode']) 0x0 === _0x11b51c ? _0xe13f0 = 'left' : 0x1 === _0x11b51c && (_0xe13f0 = 'right'), _0x11b51c++, 0x1 < _0x11b51c && (_0x11b51c = 0x0);
        else if (0x7 === player_data['drop_mode']) 0x0 === _0x11b51c ? _0xe13f0 = 'up' : 0x1 === _0x11b51c && (_0xe13f0 = 'right'), _0x11b51c++, 0x1 < _0x11b51c && (_0x11b51c = 0x0);
        else if (0x8 === player_data['drop_mode']) 0x0 === _0x11b51c ? _0xe13f0 = 'down' : 0x1 === _0x11b51c && (_0xe13f0 = 'left'), _0x11b51c++, 0x1 < _0x11b51c && (_0x11b51c = 0x0);
        else if (0x9 === player_data['drop_mode']) 0x0 === _0x11b51c ? _0xe13f0 = 'up' : 0x1 === _0x11b51c ? _0xe13f0 = 'right' : 0x2 === _0x11b51c ? _0xe13f0 = 'down' : 0x3 === _0x11b51c && (_0xe13f0 = 'left'), _0x11b51c++, 0x3 < _0x11b51c && (_0x11b51c = 0x0);
        else if (0x9 < player_data['drop_mode']) {
            var _0x49ba29 = Math['floor'](0x4 * Math['random']());
            0x0 === _0x49ba29 ? _0xe13f0 = 'up' : 0x1 === _0x49ba29 ? _0xe13f0 = 'right' : 0x2 === _0x49ba29 ? _0xe13f0 = 'down' : 0x3 === _0x49ba29 && (_0xe13f0 = 'left');
        }
        _0x49ba29 = _0xe13f0;
        _0xe13f0 = 0x0;
        if ('down' === _0x49ba29)
            for (_0x49ba29 = 0x0; 0x8 > _0x49ba29; _0x49ba29++)
                for (var _0x59eb3d = 0x0, _0x4e241a = 0x9; 0x0 <= _0x4e241a; _0x4e241a--) _0x50e7f4[_0x4e241a][_0x49ba29]['filled'] ? (0x0 != _0x59eb3d && _0xe13f0++, _0x50e7f4[_0x4e241a][_0x49ba29]['to'] = {
                    'x': 0x0,
                    'y': _0x59eb3d
                }) : _0x59eb3d++;
        else if ('up' === _0x49ba29)
            for (_0x49ba29 = 0x0; 0x8 > _0x49ba29; _0x49ba29++)
                for (_0x4e241a = _0x59eb3d = 0x0; 0xa > _0x4e241a; _0x4e241a++) _0x50e7f4[_0x4e241a][_0x49ba29]['filled'] ? (0x0 != _0x59eb3d && _0xe13f0++, _0x50e7f4[_0x4e241a][_0x49ba29]['to'] = {
                    'x': 0x0,
                    'y': _0x59eb3d
                }) : _0x59eb3d--;
        else if ('left' === _0x49ba29)
            for (_0x49ba29 = 0x0; 0xa > _0x49ba29; _0x49ba29++)
                for (_0x4e241a = _0x59eb3d = 0x0; 0x8 > _0x4e241a; _0x4e241a++) _0x50e7f4[_0x49ba29][_0x4e241a]['filled'] ? (0x0 != _0x59eb3d && _0xe13f0++, _0x50e7f4[_0x49ba29][_0x4e241a]['to'] = {
                    'x': _0x59eb3d,
                    'y': 0x0
                }) : _0x59eb3d--;
        else if ('right' === _0x49ba29)
            for (_0x49ba29 = 0x0; 0xa > _0x49ba29; _0x49ba29++)
                for (_0x59eb3d = 0x0, _0x4e241a = 0x7; 0x0 <= _0x4e241a; _0x4e241a--) _0x50e7f4[_0x49ba29][_0x4e241a]['filled'] ? (0x0 != _0x59eb3d && _0xe13f0++, _0x50e7f4[_0x49ba29][_0x4e241a]['to'] = {
                    'x': _0x59eb3d,
                    'y': 0x0
                }) : _0x59eb3d++;
        if (_0xe13f0) {
            _0x49ba29 = _0x200293['getLength']();
            _0x59eb3d = _0x200293['getChildren']();
            for (var _0x2544e5 = _0x4e241a = 0x0; 0xa > _0x2544e5; _0x2544e5++)
                for (var _0x9e173c = 0x0; 0x8 > _0x9e173c; _0x9e173c++)
                    if (_0x50e7f4[_0x2544e5][_0x9e173c]['filled']) {
                        _0x4e241a++;
                        var _0x29ad89 = 0x0;
                        _0x6427b9: for (; _0x29ad89 < _0x49ba29; _0x29ad89++) {
                            var _0x32ad6c = _0x59eb3d[_0x29ad89];
                            if (_0x32ad6c['pos']['x'] === _0x9e173c && _0x32ad6c['pos']['y'] === _0x2544e5) {
                                _0x32ad6c['depth'] = _0x4e241a;
                                break _0x6427b9;
                            }
                        }
                    } _0x5dfce2(_0xe13f0);
        } else if (_0x3b1b2d = 'play', !_0x524184()) {
            _0x5d7e97: {
                for (_0xe13f0 = 0x0; 0xa > _0xe13f0; _0xe13f0++)
                    for (_0x49ba29 = 0x0; 0x8 > _0x49ba29; _0x49ba29++)
                        if (_0x50e7f4[_0xe13f0][_0x49ba29]['filled']) {
                            _0xe13f0 = !0x1;
                            break _0x5d7e97;
                        } _0xe13f0 = !0x0;
            }
            _0xe13f0 ? (play_sound('completed', _0x48201f), _0x3b1b2d = 'bonus', _0xe13f0 = 'hint', 0x1 === Math['floor'](0x2 * Math['random']()) && (_0xe13f0 = 'shuffle'), 'hint' === _0xe13f0 ? player_data['hint_left']++ : 'shuffle' === _0xe13f0 && player_data['shuffle_left']++, _0x48201f['add']['rectangle'](0x0, 0x0, config['width'], config['height'], 0x0)['setOrigin'](0x0)['alpha'] = 0.8, _0x48201f['add']['text'](0x168, 0x140, 'Lên\x20Cấp', {
                'fontFamily': 'robotomono',
                'fontSize': 0x41,
                'align': 'center',
                'color': '#FFFFFF'
            })['setOrigin'](0.5), _0x48201f['add']['sprite'](0x168, 0x1e0, _0xe13f0 + '_icon'), _0x48201f['add']['text'](0x168, 0x258, '+1', {
                'fontFamily': 'PoetsenOne',
                'fontSize': 0x4b,
                'align': 'center',
                'color': '#FFFFFF'
            })['setOrigin'](0.5), draw_button(0x168, 0x2bc, 'next', _0x48201f), last_array = null, player_data['drop_mode']++, _0x50e7f4 = null, _0x2e27eb()) : 0x0 < player_data['shuffle_left'] ? (_0x359db3['setVisible'](!0x0), play_sound('nomatch', _0x48201f)) : (_0x3b1b2d = 'gameover1', setTimeout(_0x41e392, 0x3e8));
        }
        _0x2e27eb();
    }

    function _0x5dfce2(_0x1a79dc) {
        _0x3b1b2d = 'drop';
        for (var _0x265ab7 = _0x200293['getLength'](), _0x46521d = _0x200293['getChildren'](), _0x236cd4 = 0x0; _0x236cd4 < _0x265ab7; _0x236cd4++) {
            var _0x800fce = _0x46521d[_0x236cd4],
                _0x20d32c = _0x50e7f4[_0x800fce['pos']['y']][_0x800fce['pos']['x']];
            if (0x0 != _0x20d32c['to']['x'] || 0x0 != _0x20d32c['to']['y']) _0x800fce['pos']['x'] += _0x20d32c['to']['x'], _0x800fce['pos']['y'] += _0x20d32c['to']['y'], _0x48201f['tweens']['add']({
                'targets': _0x800fce,
                'x': _0x39dc0c + _0x5e8c32['width'] * _0x800fce['pos']['x'],
                'y': _0x5b0f0b + _0x5e8c32['height'] * _0x800fce['pos']['y'],
                'duration': 0xc8,
                'ease': 'Linear',
                'onComplete': function() {
                    _0x1a79dc--;
                    0x0 === _0x1a79dc && (_0x3b1b2d = 'play', _0x5a51e8(), _0x524184() || (0x0 < player_data['shuffle_left'] ? (_0x359db3['setVisible'](!0x0), play_sound('nomatch', _0x48201f)) : (_0x3b1b2d = 'gameover1', setTimeout(_0x41e392, 0x3e8))));
                }
            });
        }
    }

    function _0x5a51e8() {
        for (var _0x41e7e5 = 0x0; 0xa > _0x41e7e5; _0x41e7e5++)
            for (var _0x8a4381 = 0x0; 0x8 > _0x8a4381; _0x8a4381++) _0x50e7f4[_0x41e7e5][_0x8a4381]['filled'] = !0x1, _0x50e7f4[_0x41e7e5][_0x8a4381]['color'] = 0x0, _0x50e7f4[_0x41e7e5][_0x8a4381]['to'] = null;
        _0x41e7e5 = _0x200293['getLength']();
        _0x8a4381 = _0x200293['getChildren']();
        for (var _0x47c082 = 0x0; _0x47c082 < _0x41e7e5; _0x47c082++) {
            var _0x2346c3 = _0x8a4381[_0x47c082];
            _0x50e7f4[_0x2346c3['pos']['y']][_0x2346c3['pos']['x']]['filled'] = !0x0;
            _0x50e7f4[_0x2346c3['pos']['y']][_0x2346c3['pos']['x']]['color'] = _0x2346c3['color'];
        }
    }

    function _0x468cc4(_0x14b6b0) {
        return Math['PI'] / 0xb4 * _0x14b6b0;
    }

    function _0x335255() {
        for (var _0x2c1164 = _0x2cbffb['getChildren'](), _0x3b7736 = _0x2cbffb['getLength'](), _0x18664a = 0x0; _0x18664a < _0x3b7736; _0x18664a++) _0x2c1164[_0x18664a]['setVisible'](!0x1);
    }

    function _0x3af8a9(_0x386290) {
        play_sound('connected', _0x48201f);
        _0x335255();
        for (var _0x4f6bdb = _0x2cbffb['getChildren'](), _0x3f563a, _0x36650a, _0x13746a = 0x0; _0x13746a < _0x386290['length']; _0x13746a++) {
            var _0x1e15f9 = _0x4f6bdb[_0x13746a];
            _0x1e15f9['setVisible'](!0x0);
            _0x1e15f9['setPosition'](_0x39dc0c + _0x5e8c32['width'] * _0x386290[_0x13746a]['x'], _0x5b0f0b + _0x5e8c32['height'] * _0x386290[_0x13746a]['y']);
            0x0 === _0x13746a ? _0x36650a = _0x386290[_0x13746a]['x'] === _0x386290[_0x13746a + 0x1]['x'] ? _0x386290[_0x13746a]['y'] > _0x386290[_0x13746a + 0x1]['y'] ? 'up' : 'down' : _0x386290[_0x13746a]['x'] > _0x386290[_0x13746a + 0x1]['x'] ? 'left' : 'right' : _0x13746a < _0x386290['length'] - 0x1 && (_0x386290[_0x13746a]['x'] === _0x386290[_0x13746a + 0x1]['x'] ? _0x386290[_0x13746a]['y'] > _0x386290[_0x13746a + 0x1]['y'] ? (_0x36650a = 'up', 'up' === _0x3f563a ? _0x1e15f9['setFrame'](0x1) : 'down' !== _0x3f563a && ('left' === _0x3f563a ? (_0x1e15f9['setFrame'](0x2), _0x1e15f9['setRotation'](_0x468cc4(0xb4))) : 'right' === _0x3f563a && (_0x1e15f9['setFrame'](0x2), _0x1e15f9['setRotation'](_0x468cc4(0x5a))))) : (_0x36650a = 'down', 'up' !== _0x3f563a && ('down' === _0x3f563a ? _0x1e15f9['setFrame'](0x1) : 'left' === _0x3f563a ? (_0x1e15f9['setFrame'](0x2), _0x1e15f9['setRotation'](_0x468cc4(0x10e))) : 'right' === _0x3f563a && (_0x1e15f9['setFrame'](0x2), _0x1e15f9['setRotation'](_0x468cc4(0x0))))) : _0x386290[_0x13746a]['x'] > _0x386290[_0x13746a + 0x1]['x'] ? (_0x36650a = 'left', 'up' === _0x3f563a ? (_0x1e15f9['setFrame'](0x2), _0x1e15f9['setRotation'](_0x468cc4(0x0))) : 'down' === _0x3f563a ? (_0x1e15f9['setFrame'](0x2), _0x1e15f9['setRotation'](_0x468cc4(0x5a))) : 'left' === _0x3f563a && _0x1e15f9['setFrame'](0x1)) : (_0x36650a = 'right', 'up' === _0x3f563a ? (_0x1e15f9['setFrame'](0x2), _0x1e15f9['setRotation'](_0x468cc4(0x10e))) : 'down' === _0x3f563a ? (_0x1e15f9['setFrame'](0x2), _0x1e15f9['setRotation'](_0x468cc4(0xb4))) : 'left' !== _0x3f563a && 'right' === _0x3f563a && _0x1e15f9['setFrame'](0x1)));
            _0x13746a === _0x386290['length'] - 0x1 && (_0x36650a = _0x386290[_0x13746a]['x'] === _0x386290[_0x13746a - 0x1]['x'] ? _0x386290[_0x13746a]['y'] > _0x386290[_0x13746a - 0x1]['y'] ? 'up' : 'down' : _0x386290[_0x13746a]['x'] > _0x386290[_0x13746a - 0x1]['x'] ? 'left' : 'right', _0x1e15f9['setFrame'](0x0));
            0x0 === _0x1e15f9['frame']['name'] ? 'up' === _0x36650a ? _0x1e15f9['setRotation'](_0x468cc4(0x10e)) : 'down' === _0x36650a ? _0x1e15f9['setRotation'](_0x468cc4(0x5a)) : 'left' === _0x36650a ? _0x1e15f9['setRotation'](_0x468cc4(0xb4)) : 'right' === _0x36650a && _0x1e15f9['setRotation'](_0x468cc4(0x0)) : 0x1 === _0x1e15f9['frame']['name'] && ('up' === _0x36650a || 'down' === _0x36650a ? _0x1e15f9['setRotation'](_0x468cc4(0x5a)) : _0x1e15f9['setRotation'](_0x468cc4(0x0)));
            _0x3f563a = _0x36650a;
        }
    }

    function _0x4151b3(_0x30e0cd, _0x2dfece) {
        return 0x0 <= _0x30e0cd['x'] && 0x0 <= _0x30e0cd['y'] && _0x30e0cd['x'] < _0x2dfece[0x0]['length'] && _0x30e0cd['y'] < _0x2dfece['length'] ? !0x0 : !0x1;
    }

    function _0x118b48(_0x524caf, _0x4ef8fb, _0x12eb09, _0x4e899b, _0x35bc09) {
        for (var _0x22223c = [], _0x548944 = 0x1; 0xa > _0x548944; _0x548944++) {
            var _0x41b628 = {
                'x': _0x4ef8fb['x'] + _0x524caf['x'] * _0x548944,
                'y': _0x4ef8fb['y'] + _0x524caf['y'] * _0x548944
            };
            if (_0x4151b3(_0x41b628, _0x4e899b))
                if (_0x4e899b[_0x41b628['y']][_0x41b628['x']]['filled']) {
                    if (_0x41b628['x'] === _0x12eb09['x'] && _0x41b628['y'] === _0x12eb09['y']) return _0x22223c['push'](_0x41b628), _0x22223c;
                    break;
                } else if (_0x22223c['push'](_0x41b628), _0x35bc09)
                if (0x1 === _0x524caf['x'] || -0x1 === _0x524caf['x']) {
                    var _0xbf37a7 = _0x118b48({
                        'x': 0x0,
                        'y': -0x1
                    }, _0x41b628, _0x12eb09, _0x4e899b);
                    if (_0xbf37a7) {
                        for (_0x12eb09 = 0x0; _0x12eb09 < _0xbf37a7['length']; _0x12eb09++) _0x22223c['push'](_0xbf37a7[_0x12eb09]);
                        return _0x22223c;
                    }
                    if (_0x41b628 = _0x118b48({
                            'x': 0x0,
                            'y': 0x1
                        }, _0x41b628, _0x12eb09, _0x4e899b)) {
                        for (_0x12eb09 = 0x0; _0x12eb09 < _0x41b628['length']; _0x12eb09++) _0x22223c['push'](_0x41b628[_0x12eb09]);
                        return _0x22223c;
                    }
                } else {
                    if (_0xbf37a7 = _0x118b48({
                            'x': -0x1,
                            'y': 0x0
                        }, _0x41b628, _0x12eb09, _0x4e899b)) {
                        for (_0x12eb09 = 0x0; _0x12eb09 < _0xbf37a7['length']; _0x12eb09++) _0x22223c['push'](_0xbf37a7[_0x12eb09]);
                        return _0x22223c;
                    }
                    if (_0x41b628 = _0x118b48({
                            'x': 0x1,
                            'y': 0x0
                        }, _0x41b628, _0x12eb09, _0x4e899b)) {
                        for (_0x12eb09 = 0x0; _0x12eb09 < _0x41b628['length']; _0x12eb09++) _0x22223c['push'](_0x41b628[_0x12eb09]);
                        return _0x22223c;
                    }
                }
            else if (0x1 === _0x524caf['x'] || -0x1 === _0x524caf['x']) {
                if (_0x1fbb6e({
                        'x': 0x0,
                        'y': 0x1
                    }, _0x41b628, _0x12eb09, _0x4e899b)) {
                    for (_0x524caf = _0x41b628['y'] + 0x1; _0x524caf < _0x12eb09['y'] + 0x1; _0x524caf++) _0x22223c['push']({
                        'x': _0x41b628['x'],
                        'y': _0x524caf
                    });
                    return _0x22223c;
                }
                if (_0x1fbb6e({
                        'x': 0x0,
                        'y': -0x1
                    }, _0x41b628, _0x12eb09, _0x4e899b)) {
                    for (_0x524caf = _0x41b628['y'] - 0x1; _0x524caf > _0x12eb09['y'] - 0x1; _0x524caf--) _0x22223c['push']({
                        'x': _0x41b628['x'],
                        'y': _0x524caf
                    });
                    return _0x22223c;
                }
            } else {
                if (_0x1fbb6e({
                        'x': 0x1,
                        'y': 0x0
                    }, _0x41b628, _0x12eb09, _0x4e899b)) {
                    for (_0x524caf = _0x41b628['x'] + 0x1; _0x524caf < _0x12eb09['x'] + 0x1; _0x524caf++) _0x22223c['push']({
                        'x': _0x524caf,
                        'y': _0x41b628['y']
                    });
                    return _0x22223c;
                }
                if (_0x1fbb6e({
                        'x': -0x1,
                        'y': 0x0
                    }, _0x41b628, _0x12eb09, _0x4e899b)) {
                    for (_0x524caf = _0x41b628['x'] - 0x1; _0x524caf > _0x12eb09['x'] - 0x1; _0x524caf--) _0x22223c['push']({
                        'x': _0x524caf,
                        'y': _0x41b628['y']
                    });
                    return _0x22223c;
                }
            }
        }
        return !0x1;
    }

    function _0x1fbb6e(_0x47f3d1, _0x28dbde, _0x126935, _0x58876e) {
        for (var _0x2a38ac = 0x1; 0xa > _0x2a38ac; _0x2a38ac++) {
            var _0x30c9ed = {
                'x': _0x28dbde['x'] + _0x47f3d1['x'] * _0x2a38ac,
                'y': _0x28dbde['y'] + _0x47f3d1['y'] * _0x2a38ac
            };
            if (_0x4151b3(_0x30c9ed, _0x58876e)) {
                if (_0x58876e[_0x30c9ed['y']][_0x30c9ed['x']]['filled']) return _0x30c9ed['x'] === _0x126935['x'] && _0x30c9ed['y'] === _0x126935['y'] ? !0x0 : !0x1;
            } else return !0x1;
        }
    }

    function _0x588997(_0x35fc19, _0x41deac) {
        for (var _0x3f2bc5 = JSON['parse'](JSON['stringify'](_0x50e7f4)), _0x21c0e4 = 0x0; 0xa > _0x21c0e4; _0x21c0e4++) _0x3f2bc5[_0x21c0e4]['unshift']({
            'filled': !0x1
        }), _0x3f2bc5[_0x21c0e4]['push']({
            'filled': !0x1
        });
        _0x21c0e4 = [];
        for (var _0x859338 = 0x0; 0xa > _0x859338; _0x859338++) _0x21c0e4['push']({
            'filled': !0x1
        });
        _0x3f2bc5['push'](_0x21c0e4);
        _0x3f2bc5['unshift'](_0x21c0e4);
        _0x35fc19['x']++;
        _0x35fc19['y']++;
        _0x41deac['x']++;
        _0x41deac['y']++;
        _0x21c0e4 = [];
        for (_0x859338 = 0x0; 0x4 > _0x859338; _0x859338++) {
            var _0x1851ab = {
                'x': -0x1,
                'y': 0x0
            };
            0x1 === _0x859338 ? _0x1851ab = {
                'x': 0x1,
                'y': 0x0
            } : 0x2 === _0x859338 ? _0x1851ab = {
                'x': 0x0,
                'y': -0x1
            } : 0x3 === _0x859338 && (_0x1851ab = {
                'x': 0x0,
                'y': 0x1
            });
            if (_0x1851ab = _0x118b48(_0x1851ab, _0x35fc19, _0x41deac, _0x3f2bc5, !0x0)) {
                var _0x3194cc = [];
                _0x1851ab['unshift'](_0x35fc19);
                for (var _0x328fda = 0x0; _0x328fda < _0x1851ab['length']; _0x328fda++) _0x3194cc['push']({
                    'x': _0x1851ab[_0x328fda]['x'] - 0x1,
                    'y': _0x1851ab[_0x328fda]['y'] - 0x1
                });
                _0x21c0e4['push'](_0x3194cc);
            }
        }
        _0x3f2bc5 = null;
        _0x859338 = 0x3e7;
        for (_0x1851ab = 0x0; _0x1851ab < _0x21c0e4['length']; _0x1851ab++) _0x21c0e4[_0x1851ab]['length'] < _0x859338 && (_0x859338 = _0x21c0e4[_0x1851ab]['length'], _0x3f2bc5 = _0x21c0e4[_0x1851ab]);
        _0x35fc19['x']--;
        _0x35fc19['y']--;
        _0x41deac['x']--;
        _0x41deac['y']--;
        return _0x3f2bc5;
    }

    function _0x3f00fc() {
        _0x2dd8dd['setText'](player_data['shuffle_left']);
        _0x30e337['setText'](player_data['hint_left']);
    }

    function _0x41e392() {
        play_sound('gameover', _0x48201f);
        player_data['score'] > best_score && (best_score = player_data['score'], localStorage['setItem'](gamesAPI['config']['myItems'][0x0], best_score));
        for (var _0x2ae14e = _0x200293['getLength'](), _0x44baa6 = _0x200293['getChildren'](), _0x302909 = 0x0; 0xa > _0x302909; _0x302909++)
            for (var _0x3f4bb8 = 0x0; 0x8 > _0x3f4bb8; _0x3f4bb8++)
                if (_0x50e7f4[_0x302909][_0x3f4bb8]['filled']) {
                    var _0x119fbf = 0x0;
                    _0x1298bf: for (; _0x119fbf < _0x2ae14e; _0x119fbf++) {
                        var _0x513d73 = _0x44baa6[_0x119fbf];
                        if (_0x513d73['pos']['x'] === _0x3f4bb8 && _0x513d73['pos']['y'] === _0x302909) {
                            _0x513d73['depth'] = 0x0;
                            break _0x1298bf;
                        }
                    }
                } _0x3b1b2d = 'gameover';
        _0x48201f['add']['rectangle'](0x0, 0x0, config['width'], config['height'], 0x0)['setOrigin'](0x0)['alpha'] = 0.8;
        _0x48201f['add']['text'](0x168, 0x15e, 'Kết\x20thúc', {
            'fontFamily': 'PoetsenOne',
            'fontSize': 0x41,
            'align': 'center',
            'color': '#FFFFFF'
        })['setOrigin'](0.5);
        _0x48201f['add']['text'](0x168, 0x1ae, 'Điểm:\x20' + player_data['score'], {
            'fontFamily': 'PoetsenOne',
            'fontSize': 0x2d,
            'align': 'center',
            'color': '#FFFFFF'
        })['setOrigin'](0.5);
        draw_button(0x168, 0x230, 'restart', _0x48201f);
        draw_button(0x168, 0x2bc, 'menu', _0x48201f);
        localStorage['removeItem'](gamesAPI['config']['myItems'][0x2]);
        player_data['drop_mode'] = 0x0;
        player_data['score'] = 0x0;
        player_data['hint_left'] = 0x5, player_data['shuffle_left'] = 0x5, last_array = null;
        localStorage['setItem'](gamesAPI['config']['myItems'][0x1], JSON['stringify'](player_data));
    }

    function _0x2e27eb() {
        var _0x255287 = {
            'arr': _0x50e7f4,
            'data': player_data
        };
        last_array = JSON['parse'](JSON['stringify'](_0x50e7f4));
        localStorage['setItem'](gamesAPI['config']['myItems'][0x2], JSON['stringify'](_0x255287));
    }
    var _0x432877 = this;
    this['add']['sprite'](0x0, 0x0, 'background')['setOrigin'](0x0);
    var _0x3b1b2d = 'play',
        _0x11b51c = 0x0,
        _0x48201f = this,
        _0x3442aa, _0x96f96d = !0x1,
        _0x200293 = this['add']['group']();
    this['add']['group']();
    var _0x2cbffb = this['add']['group'](),
        _0x9fb7da = 0x0,
        _0x5e8c32 = {
            'width': 0x50,
            'height': 0x4d
        },
        _0x39dc0c = (config['width'] - 0x8 * _0x5e8c32['width']) / 0x2 + _0x5e8c32['width'] / 0x2,
        _0x5b0f0b = (config['height'] - 0xa * _0x5e8c32['height']) / 0x2 + _0x5e8c32['height'] / 0x2,
        _0x50e7f4 = Array(0xa),
        _0x3d95f6 = [],
        _0x4bfa52 = 0x1,
        _0x5acc3a = 0x12 + player_data['drop_mode'];
    0x16 < _0x5acc3a && (_0x5acc3a = 0x16);
    for (var _0x337cfd = 0x0; 0x28 > _0x337cfd; _0x337cfd++) _0x4bfa52 > _0x5acc3a && (_0x4bfa52 = 0x1), _0x3d95f6['push'](_0x4bfa52), _0x4bfa52++;
    _0x3d95f6 = _0x3d95f6['concat'](_0x3d95f6);
    _0xc2fb97(_0x3d95f6);
    _0x4bfa52 = 0x0;
    if (last_array)
        for (_0x50e7f4 = last_array, _0x3d95f6 = 0x0; 0xa > _0x3d95f6; _0x3d95f6++)
            for (_0x4bfa52 = 0x0; 0x8 > _0x4bfa52; _0x4bfa52++) _0x50e7f4[_0x3d95f6][_0x4bfa52]['filled'] && (_0x5acc3a = _0x50e7f4[_0x3d95f6][_0x4bfa52]['color'], _0x337cfd = this['add']['sprite'](_0x39dc0c + _0x5e8c32['width'] * _0x4bfa52, _0x5b0f0b + _0x5e8c32['height'] * _0x3d95f6, 'obj' + _0x5acc3a)['setInteractive'](), _0x337cfd['color'] = _0x5acc3a, _0x337cfd['piece'] = !0x0, _0x337cfd['pos'] = {
                'x': _0x4bfa52,
                'y': _0x3d95f6
            }, _0x200293['add'](_0x337cfd));
    else
        for (_0x5acc3a = 0x0; 0xa > _0x5acc3a; _0x5acc3a++) {
            _0x337cfd = [];
            for (var _0x3708d2 = 0x0; 0x8 > _0x3708d2; _0x3708d2++) {
                var _0x4ae1e6 = _0x3d95f6[_0x4bfa52],
                    _0x5b0d4b = {
                        'color': _0x4ae1e6,
                        'filled': !0x0
                    },
                    _0x3c0093 = this['add']['sprite'](_0x39dc0c + _0x5e8c32['width'] * _0x3708d2, _0x5b0f0b + _0x5e8c32['height'] * _0x5acc3a, 'obj' + _0x4ae1e6)['setInteractive']();
                _0x3c0093['color'] = _0x4ae1e6;
                _0x3c0093['piece'] = !0x0;
                _0x3c0093['pos'] = {
                    'x': _0x3708d2,
                    'y': _0x5acc3a
                };
                _0x200293['add'](_0x3c0093);
                _0x4bfa52++;
                _0x337cfd['push'](_0x5b0d4b);
            }
            _0x50e7f4[_0x5acc3a] = _0x337cfd;
        }
    if (gamesAPI['config']['show_more_btn']) {
        draw_button(0xfa, 0x32, 'more', this);
        this['add']['sprite'](config['width'] / 0x2 + 0x2d, 0x32, 'score_bar');
        var _0x527671 = this['add']['text'](config['width'] / 0x2 + 0x2d, 0x30, String(player_data['score']), {
            'fontFamily': 'robotomono',
            'fontSize': 0x28,
            'align': 'center',
            'color': '#FFFFFF'
        })['setOrigin'](0.5);
    } else {
        this['add']['sprite'](config['width'] / 0x2, 0x32, 'score_bar');
        var _0x527671 = this['add']['text'](config['width'] / 0x2, 0x30, String(player_data['score']), {
            'fontFamily': 'robotomono',
            'fontSize': 0x28,
            'align': 'center',
            'color': '#FFFFFF'
        })['setOrigin'](0.5);
    }
    _0x4bfa52 = draw_button(0x28a, 0x32, 'hint', this);
    0x0 === player_data['hint_left'] && (_0x4bfa52['alpha'] = 0.5);
    _0x3d95f6 = draw_button(0x230, 0x32, 'shuffle', this);
    0x0 === player_data['shuffle_left'] && (_0x3d95f6['alpha'] = 0.5);
    draw_button(0x46, 0x32, 'home', this);
    _0x5acc3a = draw_button(0xa0, 0x32, 'sound_on', this);
    _0x5acc3a['name'] = 'sound';
    check_audio(_0x5acc3a);
    _0x4bfa52 = this['add']['sprite'](_0x4bfa52['x'] + 0x23, _0x4bfa52['y'] + 0x19, 'circle');
    _0x5acc3a = this['add']['sprite'](_0x3d95f6['x'] + 0x23, _0x3d95f6['y'] + 0x19, 'circle');
    var _0x30e337 = this['add']['text'](_0x4bfa52['x'], _0x4bfa52['y'], String(player_data['hint_left']), {
            'fontFamily': 'robotomono',
            'fontSize': 0x1e,
            'align': 'center',
            'color': '#FFFFFF'
        })['setOrigin'](0.5),
        _0x2dd8dd = this['add']['text'](_0x5acc3a['x'], _0x5acc3a['y'], String(player_data['shuffle_left']), {
            'fontFamily': 'robotomono',
            'fontSize': 0x1e,
            'align': 'center',
            'color': '#FFFFFF'
        })['setOrigin'](0.5),
        _0x2efee3 = this['add']['sprite'](0xb4, 0xb4, 'sign');
    _0x2efee3['setDepth'](0x64);
    _0x2efee3['setVisible'](!0x1);
    var _0x359db3 = this['add']['sprite'](_0x3d95f6['x'], 0x8c, 'arrow');
    _0x359db3['setDepth'](0x64);
    _0x359db3['setVisible'](!0x1);
    this['tweens']['add']({
        'targets': _0x2efee3,
        'scaleX': 1.1,
        'scaleY': 1.1,
        'ease': 'Linear',
        'duration': 0xfa,
        'yoyo': !0x0,
        'repeat': -0x1
    });
    this['tweens']['add']({
        'targets': _0x359db3,
        'y': _0x359db3['y'] + 0x14,
        'ease': 'Linear',
        'duration': 0xfa,
        'yoyo': !0x0,
        'repeat': -0x1
    });
    for (_0x3d95f6 = 0x0; 0x19 > _0x3d95f6; _0x3d95f6++) _0x4bfa52 = this['add']['sprite'](0x50, 0x50, 'lines'), _0x4bfa52['setDepth'](0x64), _0x4bfa52['setVisible'](!0x1), _0x2cbffb['add'](_0x4bfa52);
    this['input']['keyboard']['on']('keydown', function(_0x4494ff, _0x42e64c) {
        _0x96f96d = _0x4494ff['key'];
        '\x20' === _0x96f96d && 'play' === _0x3b1b2d && _0x1af2c4();
    });
    this['input']['keyboard']['on']('keyup', function(_0x32f70b, _0x5a7aa4) {
        _0x96f96d = !0x1;
    });
    this['input']['on']('gameobjectdown', function(_0x23a451, _0x302b4e) {
        if ('z' === _0x96f96d) _0x50e7f4[_0x302b4e['pos']['y']][_0x302b4e['pos']['x']]['filled'] = !0x1, _0x302b4e['destroy'](!0x0, !0x0);
        else if (_0x302b4e['button']) play_sound('click', _0x432877), _0x432877['tweens']['add']({
            'targets': _0x302b4e,
            'scaleX': 0.9,
            'scaleY': 0.9,
            'yoyo': !0x0,
            'ease': 'Linear',
            'duration': 0x64,
            'onComplete': function() {
                'play' === _0x3b1b2d && ('hint' === _0x302b4e['name'] ? 0x0 < player_data['hint_left'] && (player_data['hint_left']--, _0x3f00fc(), _0x7ee8f7(), 0x0 === player_data['hint_left'] && (_0x302b4e['alpha'] = 0.5)) : 'shuffle' === _0x302b4e['name'] ? 0x0 < player_data['shuffle_left'] && (_0x359db3['visible'] && _0x359db3['setVisible'](!0x1), player_data['shuffle_left']--, _0x3f00fc(), _0x3243d2(), 0x0 === player_data['shuffle_left'] && (_0x302b4e['alpha'] = 0.5)) : 'home' === _0x302b4e['name'] ? (_0x48201f['scene']['start']('menu'), _0x2e27eb()) : 'more' === _0x302b4e['name'] && openLinks['clickMore'](gamesAPI['config']['url'], '_blank'));
                'sound' === _0x302b4e['name'] ? switch_audio(_0x302b4e) : 'next' === _0x302b4e['name'] ? (gamesAPI['show_ad'](), _0x48201f['scene']['start']('game')) : 'restart' === _0x302b4e['name'] ? (gamesAPI['show_ad'](), player_data['drop_mode'] = 0x0, player_data['score'] = 0x0, _0x48201f['scene']['start']('game')) : 'menu' === _0x302b4e['name'] && (gamesAPI['show_ad'](), _0x48201f['scene']['start']('menu'));
            }
        }, _0x432877);
        else if (_0x302b4e['piece']) {
            if (_0x3442aa) {
                _0x23a451 = _0x200293['getLength']();
                for (var _0x3a1c9f = _0x200293['getChildren'](), _0x53e57f = 0x0; _0x53e57f < _0x23a451; _0x53e57f++) {
                    var _0x4f191e = _0x3a1c9f[_0x53e57f];
                    (_0x4f191e['pos']['x'] === _0x3442aa[0x0]['x'] && _0x4f191e['pos']['y'] === _0x3442aa[0x0]['y'] || _0x4f191e['pos']['x'] === _0x3442aa[0x1]['x'] && _0x4f191e['pos']['y'] === _0x3442aa[0x1]['y']) && _0x4f191e['clearTint']();
                }
                _0x3442aa = null;
            }
            _0x9fb7da ? 'play' === _0x3b1b2d && (play_sound('itemclick', _0x48201f), _0x302b4e['pos']['x'] != _0x9fb7da['pos']['x'] || _0x302b4e['pos']['y'] != _0x9fb7da['pos']['y']) && (_0x302b4e['setTint'](0x4fdbc6), _0x50e7f4[_0x302b4e['pos']['y']][_0x302b4e['pos']['x']]['color'] === _0x50e7f4[_0x9fb7da['pos']['y']][_0x9fb7da['pos']['x']]['color'] ? (_0x23a451 = _0x588997(_0x9fb7da['pos'], _0x302b4e['pos'])) ? (player_data['score'] += 0x2, _0x527671['setText'](player_data['score']), _0x3b1b2d = 'wait1', _0x2efee3['setVisible'](!0x1), _0x3af8a9(_0x23a451), _0x50e7f4[_0x302b4e['pos']['y']][_0x302b4e['pos']['x']]['filled'] = !0x1, _0x50e7f4[_0x9fb7da['pos']['y']][_0x9fb7da['pos']['x']]['filled'] = !0x1, setTimeout(function() {
                _0x3b1b2d = 'wait';
                _0x9ecdb6(_0x302b4e['x'], _0x302b4e['y'], _0x302b4e['color']);
                _0x9ecdb6(_0x9fb7da['x'], _0x9fb7da['y'], _0x9fb7da['color']);
                _0x302b4e['destroy'](!0x0, !0x0);
                _0x9fb7da['destroy'](!0x0, !0x0);
                _0x9fb7da = null;
                setTimeout(function() {
                    _0x127272();
                }, 0x64);
                _0x335255();
            }, 0x12c)) : (_0x9fb7da['clearTint'](), _0x9fb7da = _0x302b4e, _0x2efee3['setPosition'](_0x302b4e['x'], _0x302b4e['y'])) : (_0x9fb7da['clearTint'](), _0x9fb7da = _0x302b4e, _0x2efee3['setPosition'](_0x302b4e['x'], _0x302b4e['y']))) : 'play' === _0x3b1b2d && (play_sound('itemclick', _0x48201f), _0x9fb7da = _0x302b4e, _0x302b4e['setTint'](0x4fdbc6), _0x2efee3['setVisible'](!0x0), _0x2efee3['setPosition'](_0x302b4e['x'], _0x302b4e['y']));
        }
    }, this);
    this['add']['text'](0x168, 0x410, gamesAPI['config']['credits_text'], {
        'fontFamily': 'robotomono',
        'fontSize': 0x1c,
        'align': 'center',
        'color': '#ffffff'
    })['setOrigin'](0.5);
    _0x524184() || last_array || this['scene']['start']('game');
};

function play_sound(_0x49bc0d, _0xa0e87c) {
    game_data['sound'] && _0xa0e87c['sound']['play'](_0x49bc0d);
}

function switch_audio(_0x278286) {
    game_data[_0x278286['name']] ? (game_data[_0x278286['name']] = !0x1, _0x278286['setTexture']('btn_sound_off')) : (game_data[_0x278286['name']] = !0x0, _0x278286['setTexture']('btn_sound_on'));
}

function check_audio(_0x356982) {
    game_data[_0x356982['name']] ? _0x356982['setTexture']('btn_sound_on') : _0x356982['setTexture']('btn_sound_off');
}

function draw_button(_0x1bb1b1, _0x4666df, _0xe40a7d, _0x46ff4e) {
    _0x1bb1b1 = _0x46ff4e['add']['sprite'](_0x1bb1b1, _0x4666df, 'btn_' + _0xe40a7d)['setInteractive']();
    _0x1bb1b1['button'] = !0x0;
    _0x1bb1b1['name'] = _0xe40a7d;
    return _0x1bb1b1;
}
var config = {
        'type': Phaser['AUTO'],
        'width': 0x2d0,
        'height': 0x438,
        'scale': {
            'mode': Phaser['Scale']['FIT'],
            'parent': 'gameContainer',
            'autoCenter': Phaser['Scale']['CENTER_BOTH']
        },
        'scene': [Boot, Load, Menu, Game]
    },
    game = new Phaser['Game'](config);