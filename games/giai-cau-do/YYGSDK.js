var YYG;
(function(YYG) {
    var _0x5a76x2 = (function() {
        function _0x5a76x2() {}
        _0x5a76x2['Ver'] = '1.0.14';
        return _0x5a76x2
    }());
    YYG['Version'] = _0x5a76x2
})(YYG || (YYG = {}));
var YYG;
(function(YYG) {
    var _0x5a76x3 = (function() {
        function _0x5a76x3() {}
        _0x5a76x3['AD_STARTED'] = 'AD_STARTED';
        _0x5a76x3['AD_LOADED'] = 'AD_LOADED';
        _0x5a76x3['AD_CLICK'] = 'AD_CLICK';
        _0x5a76x3['AD_COMPLETE'] = 'AD_COMPLETE';
        _0x5a76x3['AD_SKIPPED'] = 'AD_SKIPPED';
        _0x5a76x3['AD_INGAME_DISABLED'] = 'AD_INGAME_DISABLED';
        _0x5a76x3['AD_REQUEST_TOO_SOON'] = 'AD_REQUEST_TOO_SOON';
        _0x5a76x3['AD_ERROR'] = 'AD_ERROR';
        _0x5a76x3['YYGSDK_INITIALIZED'] = 'SDK_INITIALIZED';
        _0x5a76x3['YYGSDK_NOT_INITIALIZED'] = 'YYGSDK_NOT_INITIALIZED';
        _0x5a76x3['SEVRVER_OPTIONS_TIMEOUT'] = 'SEVRVER_OPTIONS_TIMEOUT';
        return _0x5a76x3
    }());
    YYG['Event'] = _0x5a76x3
})(YYG || (YYG = {}));
var YYG;
(function(YYG) {
    var _0x5a76x4 = (function() {
        function _0x5a76x4() {}
        _0x5a76x4['INTERSTITIAL'] = 'INTERSTITIAL';
        _0x5a76x4['REWARD'] = 'REWARD';
        return _0x5a76x4
    }());
    YYG['TYPE'] = _0x5a76x4
})(YYG || (YYG = {}));
var YYG;
(function(YYG) {
    var _0x5a76x5 = (function() {
        function _0x5a76x5(_0x5a76x6, _0x5a76x7, _0x5a76x8, _0x5a76x9) {
            this['once'] = false;
            this['_id'] = 0;
            this['setTo'](_0x5a76x6, _0x5a76x7, _0x5a76x8, _0x5a76x9)
        }
        _0x5a76x5['prototype']['setTo'] = function(_0x5a76x6, _0x5a76x7, _0x5a76x8, _0x5a76x9) {
            this['_id'] = _0x5a76x5['_gid']++;
            this['caller'] = _0x5a76x6;
            this['method'] = _0x5a76x7;
            this['args'] = _0x5a76x8;
            this['once'] = _0x5a76x9;
            return this
        };
        _0x5a76x5['prototype']['run'] = function() {
            if (this['method'] == null) {
                return null
            };
            var _0x5a76xa = this['_id'];
            var _0x5a76xb = this['method']['apply'](this['caller'], this['args']);
            this['_id'] === _0x5a76xa && this['once'] && this['recover']();
            return _0x5a76xb
        };
        _0x5a76x5['prototype']['runWith'] = function(_0x5a76xc) {
            if (this['method'] == null) {
                return null
            };
            var _0x5a76xa = this['_id'];
            if (_0x5a76xc == null) {
                var _0x5a76xb = this['method']['apply'](this['caller'], this['args'])
            } else {
                if (!this['args'] && !_0x5a76xc['unshift']) {
                    _0x5a76xb = this['method']['call'](this['caller'], _0x5a76xc)
                } else {
                    if (this['args']) {
                        _0x5a76xb = this['method']['apply'](this['caller'], this['args']['concat'](_0x5a76xc))
                    } else {
                        _0x5a76xb = this['method']['apply'](this['caller'], _0x5a76xc)
                    }
                }
            };
            this['_id'] === _0x5a76xa && this['once'] && this['recover']();
            return _0x5a76xb
        };
        _0x5a76x5['prototype']['clear'] = function() {
            this['caller'] = null;
            this['method'] = null;
            this['args'] = null;
            return this
        };
        _0x5a76x5['prototype']['recover'] = function() {
            if (this['_id'] > 0) {
                this['_id'] = 0;
                _0x5a76x5['_pool']['push'](this['clear']())
            }
        };
        _0x5a76x5['create'] = function(_0x5a76x6, _0x5a76x7, _0x5a76x8, _0x5a76x9) {
            if (_0x5a76x8 === void(0)) {
                _0x5a76x8 = null
            };
            if (_0x5a76x9 === void(0)) {
                _0x5a76x9 = true
            };
            if (_0x5a76x5['_pool']['length']) {
                return _0x5a76x5['_pool']['pop']()['setTo'](_0x5a76x6, _0x5a76x7, _0x5a76x8, _0x5a76x9)
            };
            return new _0x5a76x5(_0x5a76x6, _0x5a76x7, _0x5a76x8, _0x5a76x9)
        };
        _0x5a76x5['_pool'] = [];
        _0x5a76x5['_gid'] = 1;
        return _0x5a76x5
    }());
    YYG['EventHandler'] = _0x5a76x5
})(YYG || (YYG = {}));
var YYG;
(function(YYG) {
    var _0x5a76xd = (function() {
        function _0x5a76xd() {}
        _0x5a76xd['prototype']['hasListener'] = function(_0x5a76xe) {
            var _0x5a76xf = this['_events'] && this['_events'][_0x5a76xe];
            return !!_0x5a76xf
        };
        _0x5a76xd['prototype']['event'] = function(_0x5a76xe, _0x5a76xc) {
            if (!this['_events'] || !this['_events'][_0x5a76xe]) {
                return false
            };
            var _0x5a76x10 = this['_events'][_0x5a76xe];
            if (_0x5a76x10['run']) {
                if (_0x5a76x10['once']) {
                    delete this['_events'][_0x5a76xe]
                };
                _0x5a76xc != null ? _0x5a76x10['runWith'](_0x5a76xc) : _0x5a76x10['run']()
            } else {
                for (var _0x5a76x11 = 0, _0x5a76x12 = _0x5a76x10['length']; _0x5a76x11 < _0x5a76x12; _0x5a76x11++) {
                    var _0x5a76xf = _0x5a76x10[_0x5a76x11];
                    if (_0x5a76xf) {
                        (_0x5a76xc != null) ? _0x5a76xf['runWith'](_0x5a76xc): _0x5a76xf['run']()
                    };
                    if (!_0x5a76xf || _0x5a76xf['once']) {
                        _0x5a76x10['splice'](_0x5a76x11, 1);
                        _0x5a76x11--;
                        _0x5a76x12--
                    }
                };
                if (_0x5a76x10['length'] === 0 && this['_events']) {
                    delete this['_events'][_0x5a76xe]
                }
            };
            return true
        };
        _0x5a76xd['prototype']['on'] = function(_0x5a76xe, _0x5a76x6, _0x5a76xf, _0x5a76x8) {
            return this._createListener(_0x5a76xe, _0x5a76x6, _0x5a76xf, _0x5a76x8, false)
        };
        _0x5a76xd['prototype']['once'] = function(_0x5a76xe, _0x5a76x6, _0x5a76xf, _0x5a76x8) {
            return this._createListener(_0x5a76xe, _0x5a76x6, _0x5a76xf, _0x5a76x8, true)
        };
        _0x5a76xd['prototype']['off'] = function(_0x5a76xe, _0x5a76x6, _0x5a76xf, _0x5a76x13) {
            if (!this['_events'] || !this['_events'][_0x5a76xe]) {
                return this
            };
            var _0x5a76x10 = this['_events'][_0x5a76xe];
            if (_0x5a76x10 != null) {
                if (_0x5a76x10['run']) {
                    if ((!_0x5a76x6 || _0x5a76x10['caller'] === _0x5a76x6) && (_0x5a76xf == null || _0x5a76x10['method'] === _0x5a76xf) && (!_0x5a76x13 || _0x5a76x10['once'])) {
                        delete this['_events'][_0x5a76xe];
                        _0x5a76x10['recover']()
                    }
                } else {
                    var _0x5a76x14 = 0;
                    for (var _0x5a76x11 = 0, _0x5a76x12 = _0x5a76x10['length']; _0x5a76x11 < _0x5a76x12; _0x5a76x11++) {
                        var _0x5a76x15 = _0x5a76x10[_0x5a76x11];
                        if (!_0x5a76x15) {
                            _0x5a76x14++;
                            continue
                        };
                        if (_0x5a76x15 && (!_0x5a76x6 || _0x5a76x15['caller'] === _0x5a76x6) && (_0x5a76xf == null || _0x5a76x15['method'] === _0x5a76xf) && (!_0x5a76x13 || _0x5a76x15['once'])) {
                            _0x5a76x14++;
                            _0x5a76x10[_0x5a76x11] = null;
                            _0x5a76x15['recover']()
                        }
                    };
                    if (_0x5a76x14 === _0x5a76x12) {
                        delete this['_events'][_0x5a76xe]
                    }
                }
            };
            return this
        };
        _0x5a76xd['prototype']['offAll'] = function(_0x5a76xe) {
            var _0x5a76x16 = this['_events'];
            if (!_0x5a76x16) {
                return this
            };
            if (_0x5a76xe) {
                this._recoverHandlers(_0x5a76x16[_0x5a76xe]);
                delete _0x5a76x16[_0x5a76xe]
            } else {
                for (var _0x5a76x17 in _0x5a76x16) {
                    this._recoverHandlers(_0x5a76x16[_0x5a76x17])
                };
                this['_events'] = null
            };
            return this
        };
        _0x5a76xd['prototype']['offAllCaller'] = function(_0x5a76x6) {
            if (_0x5a76x6 && this['_events']) {
                for (var _0x5a76x17 in this['_events']) {
                    this['off'](_0x5a76x17, _0x5a76x6, null)
                }
            };
            return this
        };
        _0x5a76xd['prototype']['_recoverHandlers'] = function(_0x5a76x18) {
            if (!_0x5a76x18) {
                return
            };
            if (_0x5a76x18['run']) {
                _0x5a76x18['recover']()
            } else {
                for (var _0x5a76x11 = _0x5a76x18['length'] - 1; _0x5a76x11 > -1; _0x5a76x11--) {
                    if (_0x5a76x18[_0x5a76x11]) {
                        _0x5a76x18[_0x5a76x11]['recover']();
                        _0x5a76x18[_0x5a76x11] = null
                    }
                }
            }
        };
        _0x5a76xd['prototype']['_createListener'] = function(_0x5a76xe, _0x5a76x6, _0x5a76xf, _0x5a76x8, _0x5a76x9, _0x5a76x19) {
            _0x5a76x19 && this['off'](_0x5a76xe, _0x5a76x6, _0x5a76xf, _0x5a76x9);
            var _0x5a76x1a = YYG['EventHandler']['create'](_0x5a76x6 || this, _0x5a76xf, _0x5a76x8, _0x5a76x9);
            this['_events'] || (this['_events'] = {});
            var _0x5a76x16 = this['_events'];
            if (!_0x5a76x16[_0x5a76xe]) {
                _0x5a76x16[_0x5a76xe] = _0x5a76x1a
            } else {
                if (!_0x5a76x16[_0x5a76xe]['run']) {
                    _0x5a76x16[_0x5a76xe]['push'](_0x5a76x1a)
                } else {
                    _0x5a76x16[_0x5a76xe] = [_0x5a76x16[_0x5a76xe], _0x5a76x1a]
                }
            };
            return this
        };
        return _0x5a76xd
    }());
    YYG['EventDispatcher'] = _0x5a76xd
})(YYG || (YYG = {}));
var YYG;
(function(YYG) {
    var _0x5a76x1b;
    (function(_0x5a76x1b) {
        _0x5a76x1b[_0x5a76x1b['YAD'] = 0] = 'YAD';
        _0x5a76x1b[_0x5a76x1b['YIV'] = 1] = 'YIV';
        _0x5a76x1b[_0x5a76x1b['BABYGAMES'] = 2] = 'BABYGAMES';
        _0x5a76x1b[_0x5a76x1b['BESTGAMES'] = 3] = 'BESTGAMES'
    })(_0x5a76x1b = YYG['ChannelType'] || (YYG['ChannelType'] = {}));
    var _0x5a76x1c = (function() {
        function _0x5a76x1c() {
            this['isGamedistribution'] = false;
            this['iu'] = '';
            this['redirect'] = 0;
            this['debug'] = false;
            this['isLocal'] = false;
            this['linksClickable'] = true;
            this['videoLength'] = 1;
            this['width'] = window['innerWidth'] || document['documentElement']['clientWidth'] || document['body']['clientWidth'];
            this['height'] = window['innerHeight'] || document['documentElement']['clientHeight'] || document['body']['clientHeight']
        }
        _0x5a76x1c['prototype']['setData'] = function(_0x5a76xc) {
            this['redirect'] = _0x5a76xc['redirect'];
            this['adstxt'] = _0x5a76xc['adstxt'];
            this['inGameAd'] = _0x5a76xc['inGameAd'];
            this['linksClickable'] = _0x5a76xc['linksClickable'];
            this['thumb'] = _0x5a76xc['thumb'];
            this['videoAdType'] = _0x5a76xc['videoAdType'];
            this['videoLength'] = _0x5a76xc['videoLength'];
            this['adInterval'] = _0x5a76xc['adInterval'];
            YYG['Utils'].LOG('==================INIT PARAMS==================');
            YYG['Utils'].LOG('redirect:', this['redirect']);
            YYG['Utils'].LOG('adstxt:', this['adstxt']);
            YYG['Utils'].LOG('inGameAd:', this['inGameAd']);
            YYG['Utils'].LOG('linksClickable:', this['linksClickable']);
            YYG['Utils'].LOG('thumb:', this['thumb']);
            YYG['Utils'].LOG('videoAdType:', this['videoAdType']);
            YYG['Utils'].LOG('videoLength:', this['videoLength']);
            YYG['Utils'].LOG('adInterval:', this['adInterval']);
            YYG['Utils'].LOG('===============================================')
        };
        _0x5a76x1c['prototype']['setChannel'] = function(_0x5a76x1d) {
            /* this['channel'] = _0x5a76x1d;
            if (_0x5a76x1d === _0x5a76x1b['YAD']) {
                this['channelURL'] = 'localhost';
                this['channelName'] = 'YAD.Com';
                this['iu'] = '/21627520311/YAD_InGame'
            } else {
                if (_0x5a76x1d === _0x5a76x1b['YIV']) {
                    this['channelURL'] = 'localhost';
                    this['channelName'] = 'YIV.Com';
                    this['iu'] = '/21627520311/Yiv_InGame'
                } else {
                    if (_0x5a76x1d === _0x5a76x1b['BABYGAMES']) {
                        this['channelURL'] = 'localhost';
                        this['channelName'] = 'BabyGames.Com';
                        this['iu'] = '/21627520311/BabyGames_InGame_Adunit'
                    } else {
                        if (_0x5a76x1d === _0x5a76x1b['BESTGAMES']) {
                            this['channelURL'] = 'localhost';
                            this['channelName'] = 'BestGames.Com';
                            this['iu'] = '/21627520311/BestGames_InGame_Adunit'
                        } else {
                            YYG['MessageUI']['popup']('Error', 'CHANNEL ERROR')
                        }
                    }
                }
            } */
        };
        Object['defineProperty'](_0x5a76x1c['prototype'], 'ad_type', {
            get: function() {
                switch (this['videoAdType']) {
                    case 0:
                        return 'VideoAdType%3DNone';
                    case 1:
                        return 'VideoAdType%3DSkip';
                    case 2:
                        return 'VideoAdType%3DStandard';
                    case 3:
                        return 'VideoAdType%3DAll';
                    default:
                        return 'VideoAdType%3DAll'
                }
            },
            enumerable: true,
            configurable: true
        });
        return _0x5a76x1c
    }());
    YYG['Options'] = _0x5a76x1c
})(YYG || (YYG = {}));
var __extends = (this && this['__extends']) || (function() {
    var _0x5a76x1f = function(_0x5a76x20, _0x5a76x21) {
        _0x5a76x1f = Object['setPrototypeOf'] || ({
                __proto__: []
            }
            instanceof Array && function(_0x5a76x20, _0x5a76x21) {
                _0x5a76x20['__proto__'] = _0x5a76x21
            }) || function(_0x5a76x20, _0x5a76x21) {
            for (var _0x5a76x22 in _0x5a76x21) {
                if (_0x5a76x21['hasOwnProperty'](_0x5a76x22)) {
                    _0x5a76x20[_0x5a76x22] = _0x5a76x21[_0x5a76x22]
                }
            }
        };
        return _0x5a76x1f(_0x5a76x20, _0x5a76x21)
    };
    return function(_0x5a76x20, _0x5a76x21) {
        _0x5a76x1f(_0x5a76x20, _0x5a76x21);

        function _0x5a76x23() {
            this['constructor'] = _0x5a76x20
        }
        _0x5a76x20['prototype'] = _0x5a76x21 === null ? Object['create'](_0x5a76x21) : (_0x5a76x23['prototype'] = _0x5a76x21['prototype'], new _0x5a76x23())
    }
})();
var __awaiter = (this && this['__awaiter']) || function(_0x5a76x25, _0x5a76x26, _0x5a76x27, _0x5a76x28) {
    return new(_0x5a76x27 || (_0x5a76x27 = Promise))(function(_0x5a76x29, _0x5a76x2a) {
        function _0x5a76x2b(_0x5a76x2c) {
            try {
                _0x5a76x2e(_0x5a76x28['next'](_0x5a76x2c))
            } catch (e) {
                _0x5a76x2a(e)
            }
        }

        function _0x5a76x2d(_0x5a76x2c) {
            try {
                _0x5a76x2e(_0x5a76x28['throw'](_0x5a76x2c))
            } catch (e) {
                _0x5a76x2a(e)
            }
        }

        function _0x5a76x2e(_0x5a76xb) {
            _0x5a76xb['done'] ? _0x5a76x29(_0x5a76xb['value']) : new _0x5a76x27(function(_0x5a76x29) {
                _0x5a76x29(_0x5a76xb['value'])
            })['then'](_0x5a76x2b, _0x5a76x2d)
        }
        _0x5a76x2e((_0x5a76x28 = _0x5a76x28['apply'](_0x5a76x25, _0x5a76x26 || []))['next']())
    })
};
var __generator = (this && this['__generator']) || function(_0x5a76x25, _0x5a76x30) {
    var _0x5a76x31 = {
            label: 0,
            sent: function() {
                if (_0x5a76x34[0] & 1) {
                    throw _0x5a76x34[1]
                };
                return _0x5a76x34[1]
            },
            trys: [],
            ops: []
        },
        _0x5a76x32, _0x5a76x33, _0x5a76x34, _0x5a76x35;
    return _0x5a76x35 = {
        next: _0x5a76x36(0),
        "\x74\x68\x72\x6F\x77": _0x5a76x36(1),
        "\x72\x65\x74\x75\x72\x6E": _0x5a76x36(2)
    }, typeof Symbol === 'function' && (_0x5a76x35[Symbol['iterator']] = function() {
        return this
    }), _0x5a76x35;

    function _0x5a76x36(_0x5a76x12) {
        return function(_0x5a76x37) {
            return _0x5a76x2e([_0x5a76x12, _0x5a76x37])
        }
    }

    function _0x5a76x2e(_0x5a76x38) {
        if (_0x5a76x32) {
            throw new TypeError('Generator is already executing.')
        };
        while (_0x5a76x31) {
            try {
                if (_0x5a76x32 = 1, _0x5a76x33 && (_0x5a76x34 = _0x5a76x38[0] & 2 ? _0x5a76x33['return'] : _0x5a76x38[0] ? _0x5a76x33['throw'] || ((_0x5a76x34 = _0x5a76x33['return']) && _0x5a76x34['call'](_0x5a76x33), 0) : _0x5a76x33['next']) && !(_0x5a76x34 = _0x5a76x34['call'](_0x5a76x33, _0x5a76x38[1]))['done']) {
                    return _0x5a76x34
                };
                if (_0x5a76x33 = 0, _0x5a76x34) {
                    _0x5a76x38 = [_0x5a76x38[0] & 2, _0x5a76x34['value']]
                };
                switch (_0x5a76x38[0]) {
                    case 0:
                        ;
                    case 1:
                        _0x5a76x34 = _0x5a76x38;
                        break;
                    case 4:
                        _0x5a76x31['label']++;
                        return {
                            value: _0x5a76x38[1], done: false
                        };
                    case 5:
                        _0x5a76x31['label']++;
                        _0x5a76x33 = _0x5a76x38[1];
                        _0x5a76x38 = [0];
                        continue;
                    case 7:
                        _0x5a76x38 = _0x5a76x31['ops']['pop']();
                        _0x5a76x31['trys']['pop']();
                        continue;
                    default:
                        if (!(_0x5a76x34 = _0x5a76x31['trys'], _0x5a76x34 = _0x5a76x34['length'] > 0 && _0x5a76x34[_0x5a76x34['length'] - 1]) && (_0x5a76x38[0] === 6 || _0x5a76x38[0] === 2)) {
                            _0x5a76x31 = 0;
                            continue
                        };
                        if (_0x5a76x38[0] === 3 && (!_0x5a76x34 || (_0x5a76x38[1] > _0x5a76x34[0] && _0x5a76x38[1] < _0x5a76x34[3]))) {
                            _0x5a76x31['label'] = _0x5a76x38[1];
                            break
                        };
                        if (_0x5a76x38[0] === 6 && _0x5a76x31['label'] < _0x5a76x34[1]) {
                            _0x5a76x31['label'] = _0x5a76x34[1];
                            _0x5a76x34 = _0x5a76x38;
                            break
                        };
                        if (_0x5a76x34 && _0x5a76x31['label'] < _0x5a76x34[2]) {
                            _0x5a76x31['label'] = _0x5a76x34[2];
                            _0x5a76x31['ops']['push'](_0x5a76x38);
                            break
                        };
                        if (_0x5a76x34[2]) {
                            _0x5a76x31['ops']['pop']()
                        };
                        _0x5a76x31['trys']['pop']();
                        continue
                };
                _0x5a76x38 = _0x5a76x30['call'](_0x5a76x25, _0x5a76x31)
            } catch (e) {
                _0x5a76x38 = [6, e];
                _0x5a76x33 = 0
            } finally {
                _0x5a76x32 = _0x5a76x34 = 0
            }
        };
        if (_0x5a76x38[0] & 5) {
            throw _0x5a76x38[1]
        };
        return {
            value: _0x5a76x38[0] ? _0x5a76x38[1] : void(0),
            done: true
        }
    }
};
var YYG;
(function(YYG) {
    var _0x5a76x39 = (function(_0x5a76x3a) {
        __extends(_0x5a76x39, _0x5a76x3a);

        function _0x5a76x39() {
            var _0x5a76x3b = _0x5a76x3a !== null && _0x5a76x3a['apply'](this, arguments) || this;
            _0x5a76x3b['_intervalTimer'] = 0;
            _0x5a76x3b['_intervalHander'] = 0;
            _0x5a76x3b['containerTransitionSpeed'] = 300;
            _0x5a76x3b['__isReady'] = false;
            _0x5a76x3b['__initialized'] = false;
            return _0x5a76x3b
        }
        _0x5a76x39['prototype']['start'] = function() {
            return __awaiter(this, void(0), void(0), function() {
                return __generator(this, function(_0x5a76x3c) {
                    switch (_0x5a76x3c['label']) {
                        case 0:
                            return [4, this['loadLib']()['catch'](function() {
                                YYG['Utils']['adBlock']()
                            })];
                        case 1:
                            _0x5a76x3c['sent']();
                            this.__init__();
                            YYGSDK['event'](YYG['Event'].YYGSDK_INITIALIZED);
                            return [2]
                    }
                })
            })
        };
        _0x5a76x39['prototype']['__init__'] = function() {
            var _0x5a76x3b = this;
            var _0x5a76x30 = document['body'] || document['getElementsByTagName']('body')[0];
            this['_adContainer'] = document['createElement']('div');
            this['_adContainer']['id'] = 'advertisement';
            this['_adContainer']['style']['position'] = 'fixed';
            this['_adContainer']['style']['zIndex'] = '0';
            this['_adContainer']['style']['top'] = '0';
            this['_adContainer']['style']['left'] = '0';
            this['_adContainer']['style']['width'] = '100%';
            this['_adContainer']['style']['height'] = '100%';
            this['_adContainer']['style']['backgroundColor'] = '#000000';
            this['_videoContainer'] = document['createElement']('video');
            this['_videoContainer']['id'] = 'advertisement_video';
            this['_videoContainer']['style']['position'] = 'absolute';
            this['_videoContainer']['style']['backgroundColor'] = '#000000';
            this['_videoContainer']['style']['top'] = '0';
            this['_videoContainer']['style']['left'] = '0';
            this['_videoContainer']['style']['width'] = YYGSDK['options']['width'] + 'px';
            this['_videoContainer']['style']['height'] = YYGSDK['options']['width'] + 'px';
            this['_adContainer']['appendChild'](this._videoContainer);
            this['_adContainerInner'] = document['createElement']('div');
            this['_adContainerInner']['id'] = 'advertisement_slot';
            this['_adContainerInner']['style']['position'] = 'absolute';
            this['_adContainerInner']['style']['top'] = '0';
            this['_adContainerInner']['style']['left'] = '0';
            this['_adContainerInner']['style']['width'] = YYGSDK['options']['width'] + 'px';
            this['_adContainerInner']['style']['height'] = YYGSDK['options']['height'] + 'px';
            this['_adContainer']['appendChild'](this._adContainerInner);
            _0x5a76x30['appendChild'](this._adContainer);
            this['_adDisplayContainer'] = new google['ima'].AdDisplayContainer(this._adContainerInner, this._videoContainer);
            this['_adDisplayContainer']['initialize']();
            this['_adsLoader'] = new google['ima'].AdsLoader(this._adDisplayContainer);
            this['_adsLoader']['addEventListener'](google['ima']['AdsManagerLoadedEvent']['Type'].ADS_MANAGER_LOADED, this['_onAdsManagerLoaded']['bind'](this), false);
            this['_adsLoader']['addEventListener'](google['ima']['AdErrorEvent']['Type'].AD_ERROR, this['onAdsManagerError']['bind'](this), false);
            window['addEventListener']('resize', function() {
                _0x5a76x3b['onResize']()
            });
            this['__initialized'] = true;
            this._hide()
        };
        _0x5a76x39['prototype']['onResize'] = function() {
            YYGSDK['options']['width'] = window['innerWidth'] || document['documentElement']['clientWidth'] || document['body']['clientWidth'];
            YYGSDK['options']['height'] = window['innerHeight'] || document['documentElement']['clientHeight'] || document['body']['clientHeight'];
            this['_adContainerInner']['style']['width'] = YYGSDK['options']['width'] + 'px';
            this['_adContainerInner']['style']['height'] = YYGSDK['options']['height'] + 'px';
            this['_videoContainer']['style']['width'] = YYGSDK['options']['width'] + 'px';
            this['_videoContainer']['style']['height'] = YYGSDK['options']['height'] + 'px';
            if (this['_adsManager']) {
                this['_adsManager']['resize'](YYGSDK['options']['width'], YYGSDK['options']['height'], google['ima']['ViewMode'].NORMAL)
            }
        };
        _0x5a76x39['prototype']['onAdsManagerError'] = function(_0x5a76x3d) {
            var _0x5a76x3e = _0x5a76x3d['getError']();
            YYG['Utils'].LOG('===============================AD_ERROR====================================');
            YYG['Utils'].LOG('ErrorMessage:', _0x5a76x3e['getMessage']());
            YYG['Utils'].LOG('ErrorType:', _0x5a76x3e['getType']());
            YYG['Utils'].LOG('ErrorCode:', _0x5a76x3e['getVastErrorCode']());
            YYG['Utils'].LOG('error:', _0x5a76x3e);
            YYG['Utils'].LOG('===========================================================================');
            this['event'](YYG['Event'].AD_ERROR);
            YYG['LoaderUI']['hide']();
            this._hide();
            if (this['__adFailHandler']) {
                this['__adFailHandler']['runWith'](YYG['Event'].AD_ERROR)
            }
        };
        _0x5a76x39['prototype']['_onAdsManagerLoaded'] = function(_0x5a76x3f) {
            this['_adsManager'] = _0x5a76x3f['getAdsManager'](this._videoContainer);
            this['_adsManager']['addEventListener'](google['ima']['AdErrorEvent']['Type'].AD_ERROR, this['onAdsManagerError']['bind'](this));
            this['_adsManager']['addEventListener'](google['ima']['AdEvent']['Type'].USER_CLOSE, this['_onAdEvent']['bind'](this));
            this['_adsManager']['addEventListener'](google['ima']['AdEvent']['Type'].LOADED, this['_onAdEvent']['bind'](this));
            this['_adsManager']['addEventListener'](google['ima']['AdEvent']['Type'].STARTED, this['_onAdEvent']['bind'](this));
            this['_adsManager']['addEventListener'](google['ima']['AdEvent']['Type'].COMPLETE, this['_onAdEvent']['bind'](this));
            this['_adsManager']['addEventListener'](google['ima']['AdEvent']['Type'].CLICK, this['_onAdEvent']['bind'](this));
            this['_adsManager']['addEventListener'](google['ima']['AdEvent']['Type'].ALL_ADS_COMPLETED, this['_onAdEvent']['bind'](this));
            this['_adsManager']['addEventListener'](google['ima']['AdEvent']['Type'].CONTENT_RESUME_REQUESTED, this['_onAdEvent']['bind'](this));
            this['_adsManager']['addEventListener'](google['ima']['AdEvent']['Type'].IMPRESSION, this['_onAdEvent']['bind'](this));
            this['_adsManager']['addEventListener'](google['ima']['AdEvent']['Type'].SKIPPED, this['_onAdEvent']['bind'](this));
            try {
                this['_adsManager']['init'](YYGSDK['options']['width'], YYGSDK['options']['height'], google['ima']['ViewMode'].NORMAL);
                this['_adsManager']['start']()
            } catch (error) {
                YYG['Utils'].LOG('===============================AdsManager_ERROR====================================');
                throw error
            }
        };
        _0x5a76x39['prototype']['_onAdEvent'] = function(_0x5a76x40) {
            var _0x5a76x3b = this;
            switch (_0x5a76x40['type']) {
                case google['ima']['AdEvent']['Type']['STARTED']:
                    this['event'](YYG['Event'].AD_STARTED);
                    YYG['Utils'].LOG('===============================STARTED====================================');
                    break;
                case google['ima']['AdEvent']['Type']['CLICK']:
                    this['event'](YYG['Event'].AD_CLICK);
                    YYG['Utils'].LOG('===============================CLICK====================================');
                    break;
                case google['ima']['AdEvent']['Type']['LOADED']:
                    YYG['Utils'].LOG('===============================LOADED====================================');
                    this['event'](YYG['Event'].AD_LOADED);
                    this._show();
                    break;
                case google['ima']['AdEvent']['Type']['COMPLETE']:
                    YYG['Utils'].LOG('===============================COMPLETE====================================');
                    this['event'](YYG['Event'].AD_COMPLETE);
                    this['_intervalTimer'] = YYGSDK['options']['adInterval'] || 30;
                    clearInterval(this._intervalHander);
                    this['_intervalHander'] = setInterval(function() {
                        _0x5a76x3b['onIntervalTimer']()
                    }, 1e3);
                    this._hide();
                    if (this['__adSuccessHandler']) {
                        this['__adSuccessHandler']['runWith'](YYG['Event'].AD_COMPLETE)
                    };
                    break;
                case google['ima']['AdEvent']['Type']['SKIPPED']:
                    YYG['Utils'].LOG('===============================SKIPPED====================================');
                    this['event'](YYG['Event'].AD_SKIPPED);
                    this['_intervalTimer'] = YYGSDK['options']['adInterval'] || 30;
                    clearInterval(this._intervalHander);
                    this['_intervalHander'] = setInterval(function() {
                        _0x5a76x3b['onIntervalTimer']()
                    }, 1e3);
                    this._hide();
                    if (this['__adFailHandler']) {
                        this['__adFailHandler']['runWith'](YYG['Event'].AD_SKIPPED)
                    };
                    break
            }
        };
        _0x5a76x39['prototype']['onIntervalTimer'] = function() {
            this['_intervalTimer']--;
            if (this['_intervalTimer'] <= 0) {
                this['_intervalTimer'] = 0;
                clearInterval(this._intervalHander)
            }
        };
        _0x5a76x39['prototype']['_show'] = function() {
            var _0x5a76x3b = this;
            YYG['LoaderUI']['hide']();
            if (this['_adContainer']) {
                this['_adContainer']['style']['transform'] = 'translateX(0)';
                this['_adContainer']['style']['zIndex'] = '99';
                setTimeout(function() {
                    _0x5a76x3b['_adContainer']['style']['opacity'] = '1'
                }, 10)
            }
        };
        _0x5a76x39['prototype']['_hide'] = function() {
            var _0x5a76x3b = this;
            YYG['LoaderUI']['hide']();
            this['_videoContainer']['src'] = '';
            if (this['_adContainer']) {
                this['__isReady'] = false;;;
                this['_adContainer']['style']['opacity'] = '0';
                setTimeout(function() {
                    _0x5a76x3b['_adContainer']['style']['transform'] = 'translateX(-9999px)';
                    _0x5a76x3b['_adContainer']['style']['zIndex'] = '-1'
                }, this['containerTransitionSpeed'])
            }
        };
        _0x5a76x39['prototype']['_resetAdsLoader'] = function() {
            if (this['_adsManager']) {
                this['_adsManager']['destroy']();
                this['_adsManager'] = null
            };
            if (this['_adsLoader']) {
                this['_adsLoader']['contentComplete']()
            }
        };
        _0x5a76x39['prototype']['request'] = function(_0x5a76x41, _0x5a76x42, _0x5a76x43) {
            if (this['__isReady']) {
                YYG['Utils'].LOG('===============================AD_ALREADY_START====================================');
                return
            };
            if (!this['__initialized']) {
                this['event'](YYG['Event'].YYGSDK_NOT_INITIALIZED);
                _0x5a76x43 && _0x5a76x43['runWith'](YYG['Event'].YYGSDK_NOT_INITIALIZED);
                return
            };
            if (YYGSDK['options']['inGameAd'] === 0) {
                this['event'](YYG['Event'].AD_INGAME_DISABLED);
                _0x5a76x43 && _0x5a76x43['runWith'](YYG['Event'].AD_INGAME_DISABLED);
                YYG['Utils'].LOG('===============================AD_INGAME_DISABLED====================================');
                return
            };
            this['_adType'] = _0x5a76x41;
            if (_0x5a76x41 === YYG['TYPE']['INTERSTITIAL'] && this['_intervalTimer'] > 0) {
                this['event'](YYG['Event'].AD_REQUEST_TOO_SOON);
                _0x5a76x43 && _0x5a76x43['runWith'](YYG['Event'].AD_REQUEST_TOO_SOON);
                YYG['Utils'].LOG('===============================INTERSTITIAL REQUESTING TOO SOON :' + this['_intervalTimer'] + '====================================');
                return
            };
            YYG['Utils'].LOG('===============================REQUEST START====================================');
            this['__adSuccessHandler'] = _0x5a76x42;
            this['__adFailHandler'] = _0x5a76x43;
            this['__isReady'] = true;
            this['doAdsRequest']()
        };
        _0x5a76x39['prototype']['doAdsRequest'] = function() {
            var _0x5a76x3b = this;
            this._resetAdsLoader();
            return new Promise(function(_0x5a76x29) {
                try {
                    _0x5a76x3b['onResize']();
                    var _0x5a76x44 = new google['ima'].AdsRequest();
                    _0x5a76x44['adTagUrl'] = _0x5a76x3b['initTagWithGampad']();
                    _0x5a76x44['nonLinearAdSlotWidth'] = YYGSDK['options']['width'];
                    _0x5a76x44['nonLinearAdSlotHeight'] = YYGSDK['options']['height'];
                    _0x5a76x44['linearAdSlotHeight'] = YYGSDK['options']['width'];
                    _0x5a76x44['linearAdSlotHeight'] = YYGSDK['options']['height'];
                    _0x5a76x44['forceNonLinearFullSlot'] = true;
                    _0x5a76x44['setAdWillAutoPlay'](false);
                    _0x5a76x44['setAdWillPlayMuted'](false);
                    _0x5a76x3b['_adsLoader']['requestAds'](_0x5a76x44);
                    YYG['LoaderUI']['show']();
                    _0x5a76x29(_0x5a76x44)
                } catch (error) {
                    YYG['LoaderUI']['hide']();
                    throw new Error(error)
                }
            })
        };
        _0x5a76x39['prototype']['loadLib'] = function() {
            return new Promise(function(_0x5a76x29, _0x5a76x2a) {
                var _0x5a76x45 = document['createElement']('script');
                _0x5a76x45['onload'] = function() {
                    _0x5a76x29()
                };
                _0x5a76x45['onerror'] = function() {
                    _0x5a76x2a()
                };
                _0x5a76x45['type'] = 'text/javascript';
                _0x5a76x45['async'] = true;
                if (YYGSDK['options']['debug']) {
                    _0x5a76x45['src'] = 'ima3_debug.js'
                } else {
                    _0x5a76x45['src'] = '//imasdk.googleapis.com/js/sdkloader/ima3.js'
                };
                _0x5a76x45['id'] = 'GoogleSDK';
                document['head']['appendChild'](_0x5a76x45)
            })
        };
        _0x5a76x39['prototype']['initTagWithGampad'] = function() {
            var _0x5a76x46 = YYGSDK['options']['ad_type'];
            if (this['_adType'] === YYG['TYPE']['REWARD']) {
                _0x5a76x46 = 'VideoAdType%3DAll'
            };
            if (YYGSDK['options']['debug']) {};
            var _0x5a76x47 = '//pubads.g.doubleclick.net/gampad/ads?' + 'sz=640x480' + '&iu=' + YYGSDK['options']['iu'] + '&env=vp' + '&unviewed_position_start=1' + '&gdfp_req=1' + '&output=' + 'vast' + '&tfcd=0' + '&npa=0' + '&impl=s' + '&cust_params=' + _0x5a76x46 + '&description_url' + +encodeURIComponent(location['href']);
            return _0x5a76x47
        };
        return _0x5a76x39
    }(YYG.EventDispatcher));
    YYG['AdsManager'] = _0x5a76x39
})(YYG || (YYG = {}));
var __extends = (this && this['__extends']) || (function() {
    var _0x5a76x1f = function(_0x5a76x20, _0x5a76x21) {
        _0x5a76x1f = Object['setPrototypeOf'] || ({
                __proto__: []
            }
            instanceof Array && function(_0x5a76x20, _0x5a76x21) {
                _0x5a76x20['__proto__'] = _0x5a76x21
            }) || function(_0x5a76x20, _0x5a76x21) {
            for (var _0x5a76x22 in _0x5a76x21) {
                if (_0x5a76x21['hasOwnProperty'](_0x5a76x22)) {
                    _0x5a76x20[_0x5a76x22] = _0x5a76x21[_0x5a76x22]
                }
            }
        };
        return _0x5a76x1f(_0x5a76x20, _0x5a76x21)
    };
    return function(_0x5a76x20, _0x5a76x21) {
        _0x5a76x1f(_0x5a76x20, _0x5a76x21);

        function _0x5a76x23() {
            this['constructor'] = _0x5a76x20
        }
        _0x5a76x20['prototype'] = _0x5a76x21 === null ? Object['create'](_0x5a76x21) : (_0x5a76x23['prototype'] = _0x5a76x21['prototype'], new _0x5a76x23())
    }
})();
var __awaiter = (this && this['__awaiter']) || function(_0x5a76x25, _0x5a76x26, _0x5a76x27, _0x5a76x28) {
    return new(_0x5a76x27 || (_0x5a76x27 = Promise))(function(_0x5a76x29, _0x5a76x2a) {
        function _0x5a76x2b(_0x5a76x2c) {
            try {
                _0x5a76x2e(_0x5a76x28['next'](_0x5a76x2c))
            } catch (e) {
                _0x5a76x2a(e)
            }
        }

        function _0x5a76x2d(_0x5a76x2c) {
            try {
                _0x5a76x2e(_0x5a76x28['throw'](_0x5a76x2c))
            } catch (e) {
                _0x5a76x2a(e)
            }
        }

        function _0x5a76x2e(_0x5a76xb) {
            _0x5a76xb['done'] ? _0x5a76x29(_0x5a76xb['value']) : new _0x5a76x27(function(_0x5a76x29) {
                _0x5a76x29(_0x5a76xb['value'])
            })['then'](_0x5a76x2b, _0x5a76x2d)
        }
        _0x5a76x2e((_0x5a76x28 = _0x5a76x28['apply'](_0x5a76x25, _0x5a76x26 || []))['next']())
    })
};
var __generator = (this && this['__generator']) || function(_0x5a76x25, _0x5a76x30) {
    var _0x5a76x31 = {
            label: 0,
            sent: function() {
                if (_0x5a76x34[0] & 1) {
                    throw _0x5a76x34[1]
                };
                return _0x5a76x34[1]
            },
            trys: [],
            ops: []
        },
        _0x5a76x32, _0x5a76x33, _0x5a76x34, _0x5a76x35;
    return _0x5a76x35 = {
        next: _0x5a76x36(0),
        "\x74\x68\x72\x6F\x77": _0x5a76x36(1),
        "\x72\x65\x74\x75\x72\x6E": _0x5a76x36(2)
    }, typeof Symbol === 'function' && (_0x5a76x35[Symbol['iterator']] = function() {
        return this
    }), _0x5a76x35;

    function _0x5a76x36(_0x5a76x12) {
        return function(_0x5a76x37) {
            return _0x5a76x2e([_0x5a76x12, _0x5a76x37])
        }
    }

    function _0x5a76x2e(_0x5a76x38) {
        if (_0x5a76x32) {
            throw new TypeError('Generator is already executing.')
        };
        while (_0x5a76x31) {
            try {
                if (_0x5a76x32 = 1, _0x5a76x33 && (_0x5a76x34 = _0x5a76x38[0] & 2 ? _0x5a76x33['return'] : _0x5a76x38[0] ? _0x5a76x33['throw'] || ((_0x5a76x34 = _0x5a76x33['return']) && _0x5a76x34['call'](_0x5a76x33), 0) : _0x5a76x33['next']) && !(_0x5a76x34 = _0x5a76x34['call'](_0x5a76x33, _0x5a76x38[1]))['done']) {
                    return _0x5a76x34
                };
                if (_0x5a76x33 = 0, _0x5a76x34) {
                    _0x5a76x38 = [_0x5a76x38[0] & 2, _0x5a76x34['value']]
                };
                switch (_0x5a76x38[0]) {
                    case 0:
                        ;
                    case 1:
                        _0x5a76x34 = _0x5a76x38;
                        break;
                    case 4:
                        _0x5a76x31['label']++;
                        return {
                            value: _0x5a76x38[1], done: false
                        };
                    case 5:
                        _0x5a76x31['label']++;
                        _0x5a76x33 = _0x5a76x38[1];
                        _0x5a76x38 = [0];
                        continue;
                    case 7:
                        _0x5a76x38 = _0x5a76x31['ops']['pop']();
                        _0x5a76x31['trys']['pop']();
                        continue;
                    default:
                        if (!(_0x5a76x34 = _0x5a76x31['trys'], _0x5a76x34 = _0x5a76x34['length'] > 0 && _0x5a76x34[_0x5a76x34['length'] - 1]) && (_0x5a76x38[0] === 6 || _0x5a76x38[0] === 2)) {
                            _0x5a76x31 = 0;
                            continue
                        };
                        if (_0x5a76x38[0] === 3 && (!_0x5a76x34 || (_0x5a76x38[1] > _0x5a76x34[0] && _0x5a76x38[1] < _0x5a76x34[3]))) {
                            _0x5a76x31['label'] = _0x5a76x38[1];
                            break
                        };
                        if (_0x5a76x38[0] === 6 && _0x5a76x31['label'] < _0x5a76x34[1]) {
                            _0x5a76x31['label'] = _0x5a76x34[1];
                            _0x5a76x34 = _0x5a76x38;
                            break
                        };
                        if (_0x5a76x34 && _0x5a76x31['label'] < _0x5a76x34[2]) {
                            _0x5a76x31['label'] = _0x5a76x34[2];
                            _0x5a76x31['ops']['push'](_0x5a76x38);
                            break
                        };
                        if (_0x5a76x34[2]) {
                            _0x5a76x31['ops']['pop']()
                        };
                        _0x5a76x31['trys']['pop']();
                        continue
                };
                _0x5a76x38 = _0x5a76x30['call'](_0x5a76x25, _0x5a76x31)
            } catch (e) {
                _0x5a76x38 = [6, e];
                _0x5a76x33 = 0
            } finally {
                _0x5a76x32 = _0x5a76x34 = 0
            }
        };
        if (_0x5a76x38[0] & 5) {
            throw _0x5a76x38[1]
        };
        return {
            value: _0x5a76x38[0] ? _0x5a76x38[1] : void(0),
            done: true
        }
    }
};
var YYG;
(function(YYG) {
    var _0x5a76x48 = (function(_0x5a76x3a) {
        __extends(_0x5a76x48, _0x5a76x3a);

        function _0x5a76x48() {
            return _0x5a76x3a !== null && _0x5a76x3a['apply'](this, arguments) || this
        }
        _0x5a76x48['prototype']['onEvent'] = function(_0x5a76x3d) {
            console['log']('event.name ====', _0x5a76x3d);
            switch (_0x5a76x3d['name']) {
                case 'AD_ERROR':
                    this['onAdsManagerError'](_0x5a76x3d);
                    break;
                case 'SDK_GAME_START':
                    setTimeout(function() {
                        window['gdsdk']['preloadAd']('rewarded')['then'](function(_0x5a76x49) {
                            console['log']('preloadAd_ok')
                        })['catch'](function(_0x5a76x3e) {
                            console['log']('preload failed', _0x5a76x3e);
                            ''
                        })
                    }, 200);
                    if (_0x5a76x3d['status'] === 'warning') {
                        this['event'](YYG['Event'].AD_REQUEST_TOO_SOON);
                        this['__adFailHandler'] && this['__adFailHandler']['runWith'](YYG['Event'].AD_REQUEST_TOO_SOON);
                        YYG['Utils'].LOG('===============================INTERSTITIAL REQUESTING TOO SOON====================================')
                    };
                    break;
                case 'SDK_GAME_PAUSE':
                    break;
                case 'LOADED':
                    this['event'](YYG['Event'].AD_LOADED);
                    break;
                case 'AD_SDK_FINISHED':
                    ;
                case 'CONTENT_RESUME_REQUESTED':
                    YYG['Utils'].LOG('===============================COMPLETE====================================');
                    this['event'](YYG['Event'].AD_COMPLETE);
                    if (this['__adSuccessHandler']) {
                        this['__adSuccessHandler']['runWith'](YYG['Event'].AD_COMPLETE)
                    };
                    break;
                case 'SDK_READY':
                    window['gdsdk']['preloadAd']('rewarded')['then'](function(_0x5a76x49) {
                        console['log']('preloadAd_ok')
                    })['catch'](function(_0x5a76x3e) {
                        console['log']('preload failed', _0x5a76x3e);
                        ''
                    });
                    break;
                case 'AD_SDK_CANCEL':
                    ;
                case 'AD_CANCELED':
                    YYG['Utils'].LOG('===============================SKIPPED====================================');
                    this['event'](YYG['Event'].AD_SKIPPED);
                    if (this['__adFailHandler']) {
                        this['__adFailHandler']['runWith'](YYG['Event'].AD_SKIPPED)
                    };
                    break;
                default:
                    break
            }
        };
        _0x5a76x48['prototype']['start'] = function() {
            return __awaiter(this, void(0), void(0), function() {
                return __generator(this, function(_0x5a76x3c) {
                    switch (_0x5a76x3c['label']) {
                        case 0:
                            window['GD_OPTIONS'] = {
                                gameId: YYGSDK['options']['gamedistributionID'],
                                onEvent: this['onEvent']['bind'](this)
                            };
                            return [4, this['loadLib']()['catch'](function() {
                                YYG['Utils']['adBlock']()
                            })];
                        case 1:
                            _0x5a76x3c['sent']();
                            YYGSDK['event'](YYG['Event'].YYGSDK_INITIALIZED);
                            this['__initialized'] = true;
                            return [2]
                    }
                })
            })
        };
        _0x5a76x48['prototype']['request'] = function(_0x5a76x41, _0x5a76x42, _0x5a76x43) {
            if (!this['__initialized']) {
                this['event'](YYG['Event'].YYGSDK_NOT_INITIALIZED);
                _0x5a76x43 && _0x5a76x43['runWith'](YYG['Event'].YYGSDK_NOT_INITIALIZED)
            };
            if (YYGSDK['options']['inGameAd'] === 0) {
                this['event'](YYG['Event'].AD_INGAME_DISABLED);
                _0x5a76x43 && _0x5a76x43['runWith'](YYG['Event'].AD_INGAME_DISABLED);
                YYG['Utils'].LOG('===============================AD_INGAME_DISABLED====================================')
            };
            this['_adType'] === _0x5a76x41;
            if (_0x5a76x41 === YYG['TYPE']['INTERSTITIAL'] && this['_intervalTimer'] > 0) {
                this['event'](YYG['Event'].AD_REQUEST_TOO_SOON);
                _0x5a76x43 && _0x5a76x43['runWith'](YYG['Event'].AD_REQUEST_TOO_SOON);
                YYG['Utils'].LOG('===============================INTERSTITIAL REQUESTING TOO SOON====================================');
                return
            };
            YYG['Utils'].LOG('===============================REQUEST START====================================');
            this['__adSuccessHandler'] = _0x5a76x42;
            this['__adFailHandler'] = _0x5a76x43;
            if (_0x5a76x41 === YYG['TYPE']['INTERSTITIAL']) {
                window['gdsdk']['showAd']()
            } else {
                if (_0x5a76x41 === YYG['TYPE']['REWARD']) {
                    window['gdsdk']['showAd']('rewarded')
                }
            }
        };
        _0x5a76x48['prototype']['__init__'] = function() {};
        _0x5a76x48['prototype']['onAdsManagerError'] = function(_0x5a76x3d) {
            YYG['Utils'].LOG('===============================AD_ERROR====================================');
            YYG['Utils'].LOG('ErrorMessage:', _0x5a76x3d['name']);
            YYG['Utils'].LOG('ErrorType:', _0x5a76x3d['message']);
            YYG['Utils'].LOG('===========================================================================');
            this['event'](YYG['Event'].AD_ERROR);
            if (this['__adFailHandler']) {
                this['__adFailHandler']['runWith'](YYG['Event'].AD_ERROR)
            }
        };
        _0x5a76x48['prototype']['loadLib'] = function() {
            return new Promise(function(_0x5a76x29, _0x5a76x2a) {
                if (document['getElementById']('gamedistribution-jssdk')) {
                    _0x5a76x29()
                };
                var _0x5a76x45 = document['createElement']('script');
                _0x5a76x45['onload'] = function() {
                    _0x5a76x29()
                };
                _0x5a76x45['onerror'] = function() {
                    _0x5a76x2a()
                };
                _0x5a76x45['type'] = 'text/javascript';
                _0x5a76x45['async'] = true;
                _0x5a76x45['src'] = '//html5.api.gamedistribution.com/main.min.js';
                _0x5a76x45['id'] = 'gamedistribution-jssdk';
                document['head']['appendChild'](_0x5a76x45)
            })
        };
        return _0x5a76x48
    }(YYG.AdsManager));
    YYG['AdsManagerGD'] = _0x5a76x48
})(YYG || (YYG = {}));
var YYG;
(function(YYG) {
    var _0x5a76x4a = (function() {
        function _0x5a76x4a() {}
        _0x5a76x4a['__init__'] = function() {
            var _0x5a76x3b = this;
            if (!this['_initialize']) {
                var _0x5a76x30 = document['body'] || document['getElementsByTagName']('body')[0];
                var _0x5a76x4b = document['createElement']('style');
                _0x5a76x4b['textContent'] += '#message_layer{' + 'position: fixed;' + 'z-index: 1050;' + 'width:100%;' + 'height:100%;' + '}';
                _0x5a76x4b['textContent'] += '#message_container{' + 'padding: 4px 10px 4px 10px;' + 'position: fixed;' + 'z-index: 1051;' + 'font-family:Verdana;' + 'min-width: 300px;' + 'max-width:430px;' + 'width:80%;' + 'min-height:160px;' + 'color: #00335e;' + '-moz-border-radius: 6px;' + '-webkit-border-radius: 6px;' + 'border-radius: 6px;' + '-moz-box-shadow: 0px 0px 11px #000000;' + '-webkit-box-shadow: 0px 0px 11px #000000;' + 'box-shadow: 0px 0px 11px #000000;' + 'left: 50%;' + 'top:50%;' + 'transform: translate(-50%, -50%);' + 'opacity: 1;' + 'background-color:#bcbcbc;' + '}';
                _0x5a76x4b['textContent'] += '#message_container div.massage_title{' + 'padding:5px 0 5px 0;' + 'font-variant:small-caps;' + 'font-size:16pt;' + 'font-weight:lighter;' + 'color:#00335e;' + 'width:100%;' + 'border-bottom : 1px solid #002c5f;' + '}';
                _0x5a76x4b['textContent'] += '#message_container div.massage_box{' + 'line-height: 18px;' + 'padding: 10px 0 0 0;' + '}';
                _0x5a76x4b['textContent'] += '@media screen and (min-width: 280px) {' + '#message_container div.massage_box{' + 'line-height: 22px;' + '}' + '}' + '@media screen and (min-width: 523px) {' + '#message_container div.massage_box{' + 'line-height: 22px;' + 'font-size: 15px;' + '}' + '}' + '#message_container div.colse{' + 'position: absolute;' + 'right: -15px;' + 'top: -15px;' + 'width: 30px;' + 'height: 30px;' + 'border-radius: 25px;' + 'box-shadow: 2px 2px 5px 0px black;' + 'background: red;' + 'cursor: pointer;' + '}' + '#message_container div.colse:hover{' + 'background: red;' + '}' + '#message_container div.colse:before{' + 'position: absolute;' + 'content: \'\';' + 'width: 4px;' + 'height:20px;' + 'background: white;' + 'transform: rotate(45deg);' + 'top: 5px;' + 'left: 13px;' + '}' + '#message_container div.colse:after{' + 'position: absolute;' + 'content: \'\';' + 'width: 4px;' + 'height:20px;' + 'background: white;' + 'transform: rotate(-45deg);' + 'top: 5px;' + 'left: 13px;' + '}' + '#message_container div.btn_container{' + 'display:inline-block;' + ' width:100%;' + 'text-align:right;' + '}' + '#message_container div.btn_container input[type=\'button\']{' + 'cursor:pointer;' + 'margin:2px;' + 'height:35px;' + 'border:1px solid #AFAFAF;' + 'background-color:#004076;' + 'color:#FFFFFF;' + '-moz-border-radius: 6px;' + '-webkit-border-radius: 6px;' + 'border-radius: 6px;' + 'outline: none;' + '}' + '#message_container div.btn_container input[type=\'button\']:hover' + '{' + 'background-color:#00549c;' + 'color:White;' + '}' + '#message_container div.btn_container input[type=\'button\']:active' + '{' + 'background-color:#AAAAAA;' + 'color:White;' + '}' + '#message_container div.btn_container input[type=\'button\']:focus' + '{' + 'outline: none; ' + 'border: solid 2px #FFCC66; /* replace outline by a border */' + '-o-transform:rotate(0); /*remove opera outline*/' + '}' + '#message_container div.btn_container input[type=\'button\']::-moz-focus-inner /*remove firefox inner outline*/' + '{ ' + ' outline: none; ' + 'border: none;' + '}';
                _0x5a76x30['appendChild'](_0x5a76x4b);
                this['_layer'] = document['createElement']('div');
                this['_layer']['id'] = 'message_layer';
                _0x5a76x30['appendChild'](this._layer);
                this['_container'] = document['createElement']('div');
                this['_container']['id'] = 'message_container';
                this['_layer']['appendChild'](this._container);
                this['_title'] = document['createElement']('div');
                this['_title']['className'] = 'massage_title';
                this['_title']['textContent'] = 'textContent';
                this['_container']['appendChild'](this._title);
                this['_colse'] = document['createElement']('div');
                this['_colse']['className'] = 'colse';
                this['_colse']['onclick'] = function() {
                    _0x5a76x3b._onCloseClick()
                };
                this['_container']['appendChild'](this._colse);
                var _0x5a76x4c = document['createElement']('div');
                this['_container']['appendChild'](_0x5a76x4c);
                var _0x5a76x4d = document['createElement']('div');
                _0x5a76x4d['className'] = 'massage_box';
                _0x5a76x4c['appendChild'](_0x5a76x4d);
                var _0x5a76x22 = document['createElement']('p');
                this['_message'] = document['createElement']('span');
                _0x5a76x22['appendChild'](this._message);
                this['_message']['textContent'] = 'Without ads, we will not survive. Please disable adblock on our site and then click refresh button, thank you!';
                _0x5a76x4d['appendChild'](_0x5a76x22);
                this['_textarea'] = document['createElement']('textarea');
                this['_textarea']['style']['width'] = '100%';
                this['_textarea']['style']['display'] = 'none';
                _0x5a76x4d['appendChild'](this._textarea);
                var _0x5a76x4e = document['createElement']('div');
                _0x5a76x4e['className'] = 'btn_container';
                _0x5a76x4c['appendChild'](_0x5a76x4e);
                this['_button'] = document['createElement']('input');
                this['_button']['type'] = 'button';
                this['_button']['onclick'] = function() {
                    _0x5a76x3b._onButtonClick()
                };
                this['_button']['value'] = 'Refresh';
                _0x5a76x4e['appendChild'](this._button);
                this['_layer']['addEventListener']('click', function(_0x5a76x4f) {
                    _0x5a76x4f['preventDefault']();
                    _0x5a76x4f['stopPropagation']()
                }, false)
            }
        };
        _0x5a76x4a['popup'] = function(_0x5a76x50, _0x5a76x51, _0x5a76x52, _0x5a76xf, _0x5a76x53, _0x5a76x54, _0x5a76x55, _0x5a76x56) {
            this.__init__();
            if (_0x5a76x56 === void(0)) {
                _0x5a76x56 = false
            };
            this['_disabled'] = _0x5a76x56;
            this['_title']['textContent'] = _0x5a76x50 || '';
            this['_message']['textContent'] = _0x5a76x51;
            if (_0x5a76x53 === void(0) || _0x5a76x53 === null) {
                _0x5a76x53 = true
            };
            if (!_0x5a76x53) {
                this['_button']['style']['display'] = 'none'
            } else {
                this['_button']['value'] = _0x5a76x52 || 'OK';
                this['_button']['style']['display'] = 'show'
            };
            if (_0x5a76x54 === void(0) || _0x5a76x54 === null) {
                _0x5a76x54 = false
            };
            if (_0x5a76x54) {
                this['_colse']['style']['display'] = 'show'
            } else {
                this['_colse']['style']['display'] = 'none'
            };
            if (_0x5a76x55 === void(0) || _0x5a76x55 === null) {
                this['_textarea']['style']['display'] = 'none'
            } else {
                this['_textarea']['style']['display'] = 'block';
                this['_textarea']['value'] = _0x5a76x55
            };
            this['_listener'] = _0x5a76xf;
            this['_layer']['style']['display'] = 'show'
        };
        _0x5a76x4a['_onButtonClick'] = function() {
            if (this['_disabled']) {} else {
                this['_layer']['style']['display'] = 'none'
            };
            this['_listener'] && this['_listener']['run']()
        };
        _0x5a76x4a['_onCloseClick'] = function() {
            this['_layer']['style']['display'] = 'none';
            if (this['_closelistener']) {
                this['_closelistener']['run']()
            }
        };
        _0x5a76x4a['popupWhitCopy'] = function(_0x5a76x50, _0x5a76x51, _0x5a76x52, _0x5a76x54, _0x5a76x57, _0x5a76x58) {
            var _0x5a76x3b = this;
            this.__init__();
            this['_title']['textContent'] = _0x5a76x50 || '';
            this['_message']['textContent'] = _0x5a76x51;
            this['_button']['value'] = _0x5a76x52;
            this['_closelistener'] = _0x5a76x58;
            if (_0x5a76x54 === void(0)) {
                _0x5a76x54 = false
            };
            if (_0x5a76x54) {
                this['_colse']['style']['display'] = 'show'
            } else {
                this['_colse']['style']['display'] = 'none'
            };
            this['_button']['onclick'] = function() {
                var _0x5a76x55 = document['createElement']('textarea');
                _0x5a76x55['style']['position'] = 'fixed';
                _0x5a76x55['style']['top'] = '0';
                _0x5a76x55['style']['left'] = '0';
                _0x5a76x55['style']['width'] = '2em';
                _0x5a76x55['style']['height'] = '2em';
                _0x5a76x55['style']['padding'] = '0';
                _0x5a76x55['style']['border'] = 'none';
                _0x5a76x55['style']['outline'] = 'none';
                _0x5a76x55['style']['boxShadow'] = 'none';
                _0x5a76x55['style']['background'] = 'transparent';
                _0x5a76x55['value'] = YYGSDK['options']['channelURL'] ;
                document['body']['appendChild'](_0x5a76x55);
                _0x5a76x55['select']();
                var _0x5a76x42 = document['execCommand']('copy');
                if (_0x5a76x42) {
                    _0x5a76x3b['_button']['value'] = 'Copied';
                    setTimeout(function() {
                        _0x5a76x3b['_button']['value'] = _0x5a76x52
                    }, 3e3)
                } else {};
                document['body']['removeChild'](_0x5a76x55)
            }
        };
        _0x5a76x4a['_initialize'] = false;
        return _0x5a76x4a
    }());
    YYG['MessageUI'] = _0x5a76x4a
})(YYG || (YYG = {}));
var YYG;
(function(YYG) {
    var _0x5a76x59 = (function() {
        function _0x5a76x59() {}
        _0x5a76x59['__init__'] = function() {
            if (this['_initialize']) {
                return
            };
            var _0x5a76x30 = document['body'] || document['getElementsByTagName']('body')[0];
            var _0x5a76x4b = document['createElement']('style');
            _0x5a76x4b['textContent'] += '.YYG_loader, .YYG_loader:before,' + '.YYG_loader:after {  border-radius: 50%; width: 2.0em;  height: 2.0em;  -webkit-animation-fill-mode: both;  animation-fill-mode: both; -webkit-animation: load7 1.8s infinite ease-in-out;animation: load7 1.8s infinite ease-in-out;}' + '.YYG_loader {color: #ffffff;font-size: 10px;margin: 0px auto;position: relative;text-indent: -9999em;-webkit-transform: translateZ(0);-ms-transform: translateZ(0);transform: translateZ(0);-webkit-animation-delay: -0.16s;animation-delay: -0.16s;}' + '.YYG_loader:before,' + '.YYG_loader:after {content: \'\';position: absolute;top: 0;}' + '.YYG_loader:before {left: -3.5em;-webkit-animation-delay: -0.32s;animation-delay: -0.32s;}' + '.YYG_loader:after {left: 3.5em;}' + '@-webkit-keyframes load7 {0%,80%,100% {box-shadow: 0 2.5em 0 -1.3em;}40% {box-shadow: 0 2.5em 0 0;}}' + '@keyframes load7 {0%,80%,100% {box-shadow: 0 2.5em 0 -1.3em;}40% {box-shadow: 0 2.5em 0 0;}}';
            _0x5a76x30['appendChild'](_0x5a76x4b);
            this['_container'] = document['createElement']('div');
            this['_container']['style']['position'] = 'fixed';
            this['_container']['style']['zIndex'] = '0';
            this['_container']['style']['top'] = '0';
            this['_container']['style']['left'] = '0';
            this['_container']['style']['width'] = '100%';
            this['_container']['style']['height'] = '100%';
            this['_container']['style']['backgroundColor'] = 'rgba(0, 0, 0, 0.8)';
            this['_loader'] = document['createElement']('div');
            this['_loader']['className'] = 'YYG_loader';
            this['_loader']['style']['top'] = '40%';
            this['_container']['appendChild'](this._loader);
            _0x5a76x30['appendChild'](this._container);
            this['_container']['style']['display'] = 'none';
            this['_initialize'] = true
        };
        _0x5a76x59['show'] = function() {
            this.__init__();
            this['_container']['style']['zIndex'] = '1000';
            this['_container']['style']['display'] = 'block'
        };
        _0x5a76x59['hide'] = function() {
            var _0x5a76x3b = this;
            if (!this['_initialize']) {
                return
            };
            this['_container']['style']['zIndex'] = '0';
            setTimeout(function() {
                _0x5a76x3b['_container']['style']['display'] = 'none'
            }, 10)
        };
        _0x5a76x59['_initialize'] = false;
        return _0x5a76x59
    }());
    YYG['LoaderUI'] = _0x5a76x59
})(YYG || (YYG = {}));
var YYG;
(function(YYG) {
    var _0x5a76x5a = (function() {
        function _0x5a76x5a() {}
        _0x5a76x5a['forgames'] = function() {
            return new Promise(function(_0x5a76x29, _0x5a76x2a) {
                if (!YYGSDK['options']['thumb']) {
                    _0x5a76x29();
                    return
                };
                var _0x5a76x5b = new XMLHttpRequest();
                _0x5a76x5b['open']('GET', YYGSDK['options']['channelURL'], true);
                _0x5a76x5b['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                _0x5a76x5b['responseType'] = 'text';
                _0x5a76x5b['onerror'] = function(_0x5a76x4f) {
                    _0x5a76x29()
                };
                _0x5a76x5b['onabort'] = function(_0x5a76x4f) {};
                _0x5a76x5b['onprogress'] = function(_0x5a76x4f) {};
                _0x5a76x5b['onload'] = function(_0x5a76x4f) {
                    var _0x5a76x5c = _0x5a76x5b['status'] !== undefined ? _0x5a76x5b['status'] : 200;
                    if (_0x5a76x5c === 200 || _0x5a76x5c === 204 || _0x5a76x5c === 0) {
                        YYGSDK['options']['forgames'] = JSON['parse'](_0x5a76x5b['responseText']);
                        _0x5a76x29()
                    } else {
                        _0x5a76x29()
                    }
                };
                _0x5a76x5b['send']()
            })
        };
        _0x5a76x5a['LOG'] = function(_0x5a76x51) {
            var _0x5a76x5d = [];
            for (var _0x5a76x5e = 1; _0x5a76x5e < arguments['length']; _0x5a76x5e++) {
                _0x5a76x5d[_0x5a76x5e - 1] = arguments[_0x5a76x5e]
            };
            if (!YYGSDK['options']['debug']) {
                return
            };
            this['__LOG__']['apply'](this, ['%c %c %c YYGSKD:', 'background: #fb8cb3', 'background: #d44a52', 'color: #ffffff; background: #871905;', _0x5a76x51]['concat'](_0x5a76x5d))
        };
        _0x5a76x5a['adBlock'] = function() {
            if (YYGSDK['options']['inGameAd'] === 0) {
                return
            };
            var _0x5a76x50 = 'Please Disable Adblock';
            var _0x5a76x51 = 'Without ads, we will not survive. Please disable adblock and then click refresh button, thank you!';
            var _0x5a76x5f = 'Refresh';
            YYG['MessageUI']['popup'](_0x5a76x50, _0x5a76x51, _0x5a76x5f, YYG['EventHandler']['create'](this, function() {
                location['reload']()
            }))
        };
        _0x5a76x5a['adstxt'] = function() {
            var _0x5a76x50 = 'Please Update ads.txt';
            var _0x5a76x51 = 'Hi dear webmaster, thanks for adding the game. Please add the following content to your ads.txt file, thank you!';
            var _0x5a76x5f = 'Refresh';
            YYG['MessageUI']['popup'](_0x5a76x50, _0x5a76x51, _0x5a76x5f, null, false, true, YYGSDK['options']['adstxt'] + '')
        };
        _0x5a76x5a['redirect'] = function() {
            try {
                top['location']['href'] = YYGSDK['options']['channelURL']
            } catch (error) {
                var _0x5a76x50 = 'The Game is Stolen';
                var _0x5a76x51 = 'The game is stolen from ' + YYGSDK['options']['channelURL'] + ' please visit ' + YYGSDK['options']['channelURL'] + 'to play the game, thank you!';
                var _0x5a76x5f = 'Copy the URL';
                YYG['MessageUI']['popupWhitCopy'](_0x5a76x50, _0x5a76x51, _0x5a76x5f, false, 'redirect')
            }
        };
        _0x5a76x5a['navigateTo'] = function(_0x5a76x60, _0x5a76x61, _0x5a76x52, _0x5a76x62) {
            if (!YYGSDK['options']['linksClickable']) {
                return
            };
            _0x5a76x62 = _0x5a76x62 || '';
            var _0x5a76x63 = document['referrer'];
            var _0x5a76x47 = YYGSDK['options']['channelURL'];
            if (typeof _0x5a76x62 === 'undefined' || _0x5a76x62 == '' || _0x5a76x62 == 'undefined') {} else {
                //_0x5a76x47 = _0x5a76x47 + '?pic=' + _0x5a76x62
            };
            if (typeof _0x5a76x63 === 'undefined' || _0x5a76x63 == '' || _0x5a76x63 == 'undefined') {
                _0x5a76x63 = 'unknown'
            } else {
                _0x5a76x63 = _0x5a76x63['split']('/')[2]
            };
            if (_0x5a76x47['indexOf']('?') > -1) {
              //  _0x5a76x47 = _0x5a76x47 + '&'
            } else {
            //    _0x5a76x47 = _0x5a76x47 + '?'
            };
           // _0x5a76x47 = _0x5a76x47 + 'utm_source=' + _0x5a76x63 + '&utm_medium=' + _0x5a76x61 + '-' + _0x5a76x52 + '&utm_campaign=game-' + _0x5a76x60;
            try {
                if (window['open'](_0x5a76x47)) {} else {
                    YYG['MessageUI']['popupWhitCopy']('More Games', 'Please visit ' + YYGSDK['options']['channelURL'] + ' for more games.', 'Copy the URL', true, 'linkblocked')
                }
            } catch (error) {
                YYG['MessageUI']['popupWhitCopy']('More Games', 'Please visit ' + YYGSDK['options']['channelURL'] + ' for more games.', 'Copy the URL', true, 'linkblocked')
            }
        };
        _0x5a76x5a['__LOG__'] = console['log'] || function(_0x5a76x51) {
            var _0x5a76x5d = [];
            for (var _0x5a76x5e = 1; _0x5a76x5e < arguments['length']; _0x5a76x5e++) {
                _0x5a76x5d[_0x5a76x5e - 1] = arguments[_0x5a76x5e]
            }
        };
        return _0x5a76x5a
    }());
    YYG['Utils'] = _0x5a76x5a
})(YYG || (YYG = {}));
var __awaiter = (this && this['__awaiter']) || function(_0x5a76x25, _0x5a76x26, _0x5a76x27, _0x5a76x28) {
    return new(_0x5a76x27 || (_0x5a76x27 = Promise))(function(_0x5a76x29, _0x5a76x2a) {
        function _0x5a76x2b(_0x5a76x2c) {
            try {
                _0x5a76x2e(_0x5a76x28['next'](_0x5a76x2c))
            } catch (e) {
                _0x5a76x2a(e)
            }
        }

        function _0x5a76x2d(_0x5a76x2c) {
            try {
                _0x5a76x2e(_0x5a76x28['throw'](_0x5a76x2c))
            } catch (e) {
                _0x5a76x2a(e)
            }
        }

        function _0x5a76x2e(_0x5a76xb) {
            _0x5a76xb['done'] ? _0x5a76x29(_0x5a76xb['value']) : new _0x5a76x27(function(_0x5a76x29) {
                _0x5a76x29(_0x5a76xb['value'])
            })['then'](_0x5a76x2b, _0x5a76x2d)
        }
        _0x5a76x2e((_0x5a76x28 = _0x5a76x28['apply'](_0x5a76x25, _0x5a76x26 || []))['next']())
    })
};
var __generator = (this && this['__generator']) || function(_0x5a76x25, _0x5a76x30) {
    var _0x5a76x31 = {
            label: 0,
            sent: function() {
                if (_0x5a76x34[0] & 1) {
                    throw _0x5a76x34[1]
                };
                return _0x5a76x34[1]
            },
            trys: [],
            ops: []
        },
        _0x5a76x32, _0x5a76x33, _0x5a76x34, _0x5a76x35;
    return _0x5a76x35 = {
        next: _0x5a76x36(0),
        "\x74\x68\x72\x6F\x77": _0x5a76x36(1),
        "\x72\x65\x74\x75\x72\x6E": _0x5a76x36(2)
    }, typeof Symbol === 'function' && (_0x5a76x35[Symbol['iterator']] = function() {
        return this
    }), _0x5a76x35;

    function _0x5a76x36(_0x5a76x12) {
        return function(_0x5a76x37) {
            return _0x5a76x2e([_0x5a76x12, _0x5a76x37])
        }
    }

    function _0x5a76x2e(_0x5a76x38) {
        if (_0x5a76x32) {
            throw new TypeError('Generator is already executing.')
        };
        while (_0x5a76x31) {
            try {
                if (_0x5a76x32 = 1, _0x5a76x33 && (_0x5a76x34 = _0x5a76x38[0] & 2 ? _0x5a76x33['return'] : _0x5a76x38[0] ? _0x5a76x33['throw'] || ((_0x5a76x34 = _0x5a76x33['return']) && _0x5a76x34['call'](_0x5a76x33), 0) : _0x5a76x33['next']) && !(_0x5a76x34 = _0x5a76x34['call'](_0x5a76x33, _0x5a76x38[1]))['done']) {
                    return _0x5a76x34
                };
                if (_0x5a76x33 = 0, _0x5a76x34) {
                    _0x5a76x38 = [_0x5a76x38[0] & 2, _0x5a76x34['value']]
                };
                switch (_0x5a76x38[0]) {
                    case 0:
                        ;
                    case 1:
                        _0x5a76x34 = _0x5a76x38;
                        break;
                    case 4:
                        _0x5a76x31['label']++;
                        return {
                            value: _0x5a76x38[1], done: false
                        };
                    case 5:
                        _0x5a76x31['label']++;
                        _0x5a76x33 = _0x5a76x38[1];
                        _0x5a76x38 = [0];
                        continue;
                    case 7:
                        _0x5a76x38 = _0x5a76x31['ops']['pop']();
                        _0x5a76x31['trys']['pop']();
                        continue;
                    default:
                        if (!(_0x5a76x34 = _0x5a76x31['trys'], _0x5a76x34 = _0x5a76x34['length'] > 0 && _0x5a76x34[_0x5a76x34['length'] - 1]) && (_0x5a76x38[0] === 6 || _0x5a76x38[0] === 2)) {
                            _0x5a76x31 = 0;
                            continue
                        };
                        if (_0x5a76x38[0] === 3 && (!_0x5a76x34 || (_0x5a76x38[1] > _0x5a76x34[0] && _0x5a76x38[1] < _0x5a76x34[3]))) {
                            _0x5a76x31['label'] = _0x5a76x38[1];
                            break
                        };
                        if (_0x5a76x38[0] === 6 && _0x5a76x31['label'] < _0x5a76x34[1]) {
                            _0x5a76x31['label'] = _0x5a76x34[1];
                            _0x5a76x34 = _0x5a76x38;
                            break
                        };
                        if (_0x5a76x34 && _0x5a76x31['label'] < _0x5a76x34[2]) {
                            _0x5a76x31['label'] = _0x5a76x34[2];
                            _0x5a76x31['ops']['push'](_0x5a76x38);
                            break
                        };
                        if (_0x5a76x34[2]) {
                            _0x5a76x31['ops']['pop']()
                        };
                        _0x5a76x31['trys']['pop']();
                        continue
                };
                _0x5a76x38 = _0x5a76x30['call'](_0x5a76x25, _0x5a76x31)
            } catch (e) {
                _0x5a76x38 = [6, e];
                _0x5a76x33 = 0
            } finally {
                _0x5a76x32 = _0x5a76x34 = 0
            }
        };
        if (_0x5a76x38[0] & 5) {
            throw _0x5a76x38[1]
        };
        return {
            value: _0x5a76x38[0] ? _0x5a76x38[1] : void(0),
            done: true
        }
    }
};
var YYGSDK = (function() {
    function YYGSDK() {}
    Object['defineProperty'](YYGSDK, 'options', {
        get: function() {
            if (!this['_options']) {
                this['_options'] = new YYG.Options()
            };
            return this['_options']
        },
        enumerable: true,
        configurable: true
    });
    Object['defineProperty'](YYGSDK, 'dispatcher', {
        get: function() {
            if (!this['_dispatcher']) {
                this['_dispatcher'] = new YYG.EventDispatcher()
            };
            return this['_dispatcher']
        },
        enumerable: true,
        configurable: true
    });
    YYGSDK['on'] = function(_0x5a76xe, _0x5a76x6, _0x5a76xf, _0x5a76x8) {
        return this['dispatcher']['on'](_0x5a76xe, _0x5a76x6, _0x5a76xf, _0x5a76x8)
    };
    YYGSDK['event'] = function(_0x5a76xe, _0x5a76xc) {
        return this['dispatcher']['event'](_0x5a76xe, _0x5a76xc)
    };
    YYGSDK['navigateTo'] = function(_0x5a76x60, _0x5a76x61, _0x5a76x52, _0x5a76x62) {
        YYG['Utils']['navigateTo'](_0x5a76x60, _0x5a76x61, _0x5a76x52, _0x5a76x62)
    };
    YYGSDK['navigate'] = function(_0x5a76x61, _0x5a76x52, _0x5a76x62) {
        YYG['Utils']['navigateTo'](YYGSDK['options']['gameNameId'], _0x5a76x61, _0x5a76x52, _0x5a76x62)
    };
    Object['defineProperty'](YYGSDK, 'thumb', {
        get: function() {
            return this['options']['thumb']
        },
        enumerable: true,
        configurable: true
    });
    Object['defineProperty'](YYGSDK, 'forgames', {
        get: function() {
            if (this['options']['thumb'] === 0) {
                return []
            };
            return this['options']['forgames']
        },
        enumerable: true,
        configurable: true
    });
    YYGSDK['showInterstitial'] = function(_0x5a76x65) {
        this['adsManager']['request'](YYG['TYPE'].INTERSTITIAL, YYG['EventHandler']['create'](this, function() {
            _0x5a76x65 && _0x5a76x65()
        }), YYG['EventHandler']['create'](this, function() {
            _0x5a76x65 && _0x5a76x65()
        }))
    };
    YYGSDK['__init__'] = function(_0x5a76x1d, _0x5a76x66) {
        return __awaiter(this, void(0), void(0), function() {
            var _0x5a76x67, _0x5a76x68, _0x5a76x60, _0x5a76x69;
            return __generator(this, function(_0x5a76x3c) {
                switch (_0x5a76x3c['label']) {
                    case 0:
                        YYG['Utils'].__LOG__('%c %c %c YYGSKD:', 'background: #fb8cb3', 'background: #d44a52', 'color: #ffffff; background: #871905;', 'Version: ' + YYG['Version']['Ver']);
                        _0x5a76x67 = false;
                        _0x5a76x68 = false;
                        _0x5a76x60 = '';
                        _0x5a76x69 = '';
                        if (_0x5a76x66) {
                            _0x5a76x67 = _0x5a76x66['debug'];
                            _0x5a76x69 = _0x5a76x66['gamedistributionID'] || '';
                            _0x5a76x68 = _0x5a76x66['isLocal'] || false;
                            _0x5a76x60 = _0x5a76x66['gameNameId']
                        };
                        this['options']['gameNameId'] = _0x5a76x60;
                        this['options']['debug'] = _0x5a76x67;
                        this['options']['setChannel'](_0x5a76x1d);
                        this['options']['isLocal'] = _0x5a76x68;
                        if (_0x5a76x69['length'] > 5) {
                            this['options']['isGamedistribution'] = true;
                            this['options']['gamedistributionID'] = _0x5a76x66['gamedistributionID'];
                            YYGSDK['adsManager'] = new YYG.AdsManagerGD()
                        } else {
                            YYGSDK['adsManager'] = new YYG.AdsManager()
                        };
                        //return [4, this['request']()];
                    case 1:
                        _0x5a76x3c['sent']();
                        return [4, YYG['Utils']['forgames']()];
                    case 2:
                        _0x5a76x3c['sent']();
                        YYGSDK['adsManager']['start']();
                        return [2]
                }
            })
        })
    };
    
    YYGSDK['wrongEmbedCodePop'] = function() {
        var _0x5a76x50 = 'Wrong Embed Code';
        var _0x5a76x6c = 'Hi dear webmaster, thanks for adding the game. Please enable referrer to make the game playable, thank you!';
        var _0x5a76x6d = 'Play On ' + YYGSDK['options']['channelName'];
        YYG['MessageUI']['popup'](_0x5a76x50, _0x5a76x6c, _0x5a76x6d, YYG['EventHandler']['create'](this, this['wrongEmbedCodeOpen']), null, null, null, true)
    };
    YYGSDK['wrongEmbedCodeOpen'] = function() {
       window.open( '//www.localhost', '_blank' )
    };
    return YYGSDK
}())