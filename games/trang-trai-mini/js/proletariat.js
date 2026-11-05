class Config extends Laya['Script'] {
	constructor() {
		super();
		Laya['config$'] = this;
		this['isCDN$'] = ![];
	}
}
class PgBtnAddRoleSpeed$ extends Laya['Script'] {
	constructor() {
		super();
		this['startTime$'] = 0x0;
		this['allTime$'] = 0x2bf20;
	} ['onStart']() {
		this['owner']['on'](Laya['Event']['CLICK'], this, this['onBtnClick$']);
	} ['onBtnClick$']() {
		pgdk$['showVideoAd$'](function(_0x44c5bd) {
			if (_0x44c5bd) {
				pgdk$['showToast$']('获得3分钟加移速时间');
				window['setRoleSpeed'] && window['setRoleSpeed'](0.01);
				this['startTime$'] = new Date()['getTime']();
				console['log']('看视频看完czh');
			} else {
				pgdk$['showToast$']('视频未看完，无法加移速');
				console['log']('看视频没看完czh');
			}
		} ['bind'](this));
	} ['onUpdate']() {
		if (this['startTime$'] == 0x0) return;
		if (new Date()['getTime']() - this['startTime$'] >= this['allTime$']) {
			window['setRoleSpeed'] && window['setRoleSpeed'](0.005);
			pgdk$['showToast$']('加移速时间到了');
			this['startTime$'] = 0x0;
		}
	} ['onDestroy']() {
		this['owner']['off'](Laya['Event']['CLICK'], this, this['onBtnClick$']);
	}
}
class TtAutoAddBtnBg$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		Laya['timer']['once'](0x64, this, this['createTextBg$']);
		this['x'] = 0x0;
		this['y'] = 0x0;
	} ['createTextBg$']() {
		this['owner']['x'] += this['offsetX$'];
		this['owner']['y'] += this['offsetY$'];
		this['btnBg$'] = new Laya['Image']();
		this['btnBg$']['skin'] = 'proImgTT/textBtn_bg.png';
		this['btnBg$']['stateNum'] = 0x1;
		this['btnBg$']['anchorX'] = 0x0;
		this['btnBg$']['anchorY'] = 0x0;
		this['btnBg$']['sizeGrid'] = '30,30,30,30,30';
		this['owner']['parent']['addChild'](this['btnBg$']);
		if (this['sizeRetioX$'] == void 0x0) {
			this['sizeRetioX$'] = 0x1;
		}
		if (this['sizeRetioY$'] == void 0x0) {
			this['sizeRetioY$'] = 0x1;
		}
		this['btnBg$']['width'] = this['owner']['width'] * this['sizeRetioX$'];
		this['btnBg$']['height'] = this['owner']['height'] * this['sizeRetioY$'];
		let _0x2682aa = this['owner']['width'] / 0.5;
		let _0x2f9f60 = this['owner']['height'] / 0.5;
		if (this['owner']['anchorX'] > 0x0) {
			this['btnBg$']['x'] = this['owner']['x'] - _0x2682aa * this['owner']['anchorX'];
		} else {
			this['btnBg$']['x'] = this['owner']['x'] - this['owner']['width'] * 0.5;
		}
		if (this['owner']['anchorY'] > 0x0) {
			this['btnBg$']['y'] = this['owner']['y'] - _0x2f9f60 * this['owner']['anchorY'];
		} else {
			this['btnBg$']['y'] = this['owner']['y'] - this['owner']['height'] * 0.5;
		}
		this['btnBg$']['x'] += this['bgOffsetX$'];
		this['btnBg$']['y'] += this['bgOffsetY$'];
		this['btnBg$']['zOrder'] = this['owner']['zOrder'];
		this['owner']['zOrder'] += 0x1;
	}
}
class TtShowAutoStartRecord$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		if (!window['pgdk$'] || !window['tt']) return;
		if (pgdk$['startTime$']) pgdk$['startTime$'] = undefined;
		pgdk$['startTime$'] = new Date()['getTime']();
		window['pgdk$'] && pgdk$['startRecord$'](null, 0x12c, null);
		console['log']('头条录屏开始了,TtShowStartRecord');
	}
}
class TtShowAutoEndRecord$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		if (!window['pgdk$'] || !window['tt']) return;
		if (pgdk$['overTime$']) pgdk$['overTime$'] = undefined;
		pgdk$['overTime$'] = new Date()['getTime']();
		window['pgdk$'] && pgdk$['stopRecord$'](null);
		console['log']('头条录屏结束了,TtShowAutoEndRecord');
	}
}
class PgBtnClickRecord$ extends Laya['Script'] {
	constructor() {
		super();
		this['statue$'] = 0x0;
	} ['onStart']() {
		this['owner']['on'](Laya['Event']['CLICK'], this, this['onBtnClick$']);
	} ['onBtnClick$']() {
		if (this['statue$'] == 0x0) {
			this['owner']['_children'][0x0]['text'] = '停止';
			this['startRecord$']();
		} else {
			this['owner']['_children'][0x0]['text'] = '录屏';
			this['endRecord$']();
		}
	} ['startRecord$']() {
		if (!window['pgdk$'] || !window['tt']) return;
		if (pgdk$['startTime$']) pgdk$['startTime$'] = undefined;
		pgdk$['startTime$'] = new Date()['getTime']();
		window['pgdk$'] && pgdk$['startRecord$'](null, 0x12c, null);
		console['log']('头条录屏开始了,TtShowStartRecord');
		this['statue$'] = 0x1;
	} ['endRecord$']() {
		if (!window['pgdk$'] || !window['tt']) return;
		if (pgdk$['overTime$']) pgdk$['overTime$'] = undefined;
		pgdk$['overTime$'] = new Date()['getTime']();
		window['pgdk$'] && pgdk$['stopRecord$'](null);
		console['log']('头条录屏结束了,TtShowAutoEndRecord');
		this['statue$'] = 0x0;
		let _0x3d3f77 = this['owner']['addComponent'](TtShareRecordWindow$);
		_0x3d3f77['viewName$'] = '录屏结束页';
		_0x3d3f77['recordBgImg$'] = 'proImgTT/blueBg.png';
		_0x3d3f77['contentImg$'] = 'proImgTT/shareImg.png';
		_0x3d3f77['playBtnImg$'] = 'proImgTT/playBtn.png';
		_0x3d3f77['shareImg$'] = 'proImgTT/btn_share.png';
		_0x3d3f77['noShareImg$'] = 'proImgTT/btn_noShare.png';
	} ['onDestroy']() {
		this['owner']['off'](Laya['Event']['CLICK'], this, this['onBtnClick$']);
	}
}
class PgAutoAddComTip$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		this['createTipImg$']();
	} ['createTipImg$']() {
		let _0x24ea6f = new Laya['Image']();
		_0x24ea6f['skin'] = 'proImg/comTip.png';
		_0x24ea6f['centerX'] = 0x0;
		_0x24ea6f['bottom'] = this['bottom$'] || 0x64;
		this['owner']['addChild'](_0x24ea6f);
	} ['onDestroy']() {}
}
class PgAutoShowBlockAd$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		if (!pgdk$) return;
		if (!pgdk$['cfg$']) return;
		if (pgdk$['cfg$']['switch1'] > 0x0) {
			pgdk$ && pgdk$['hideBlockAd$']();
			let _0x218247 = this['_getRect$'](this['owner']);
			pgdk$['showBlockAd$'](_0x218247['left'], _0x218247['top'], this['dir$'], this['size$']);
		}
	} ['_getRect$'](_0x3179a1) {
		let _0x4ebeb1 = _0x3179a1['localToGlobal'](new Laya['Point'](0x0, 0x0));
		let _0x6e58eb = _0x3179a1['localToGlobal'](new Laya['Point'](_0x3179a1['width'], _0x3179a1['height']));
		let _0x5bb7a0 = {
			'x': _0x4ebeb1['x'],
			'y': _0x4ebeb1['y'],
			'width': _0x6e58eb['x'] - _0x4ebeb1['x'],
			'height': _0x6e58eb['y'] - _0x4ebeb1['y']
		};
		let _0x137363 = Laya['stage']['width'] / Laya['Browser']['clientWidth'];
		let _0x475328 = Laya['stage']['height'] / Laya['Browser']['clientHeight'];
		return {
			'left': _0x5bb7a0['x'] / _0x137363,
			'top': _0x5bb7a0['y'] / _0x475328,
			'width': _0x5bb7a0['width'] / _0x137363,
			'height': _0x5bb7a0['height'] / _0x475328
		};
	} ['onDisable']() {
		pgdk$ && pgdk$['hideBlockAd$']();
	} ['onDestroy']() {
		pgdk$ && pgdk$['hideBlockAd$']();
	}
}
class PgBtnShareApp$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		this['owner']['on'](Laya['Event']['CLICK'], this, this['onBtnClick$']);
	} ['onBtnClick$']() {
		pgdk$['shareAppMessage$']();
	} ['onDestroy']() {
		this['owner']['off'](Laya['Event']['CLICK'], this, this['onBtnClick$']);
	}
}
class PgHideComp$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		if (!pgdk$) return;
		if (!pgdk$['cfg$']) return;
		if (pgdk$['cfg$']['switch1'] > 0x0) {
			return;
		}
		this['owner']['visible'] = ![];
	} ['onDestroy']() {}
}
class PgClickBtnShowVideoAd$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		this['owner']['on'](Laya['Event']['MOUSE_UP'], this, this['onBtnClick$']);
	} ['onBtnClick$']() {
		if (!pgdk$['canTrick$']()) {
			return;
		}
		pgdk$['showVideoAd$'](function() {
			this['destroy']();
		} ['bind'](this));
	} ['onDestroy']() {
		this['owner']['off'](Laya['Event']['MOUSE_UP'], this, this['onBtnClick$']);
	}
}
class PgAutoShowVideoAd$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onDestroy']() {
		if (!pgdk$['canTrick$']()) {
			return;
		}
		pgdk$['showVideoAd$']();
	}
}
class PgAutoShowGridAd$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		if (pgdk$['cfg$']['switch1'] > 0x0) {
			pgdk$['showGridAd$']();
		}
	}
}
class PgChouTiAd$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		this['owner']['on'](Laya['Event']['CLICK'], this, this['onBtnClick$']);
	} ['onBtnClick$']() {
		pgdk$['showGridAd$']();
	} ['onDestroy']() {
		this['owner']['off'](Laya['Event']['CLICK'], this, this['onBtnClick$']);
	}
}
class DelayShow extends Laya['Script'] {
	constructor() {
		super();
		this['delayTime'] = 0x7d0;
	} ['onEnable']() {
		if (!pgdk$) return;
		if (!pgdk$['cfg$']) return;
		if (pgdk$['cfg$']['switch1'] > 0x0) {
			this['owner']['visible'] = ![];
			Laya['timer']['once'](this['delayTime'], this, function() {
				this['owner']['visible'] = !![];
			});
		} else {
			this['owner']['visible'] = !![];
		}
	}
}
class ImgAutoMatchSize extends Laya['Script'] {
	constructor() {
		super();
	} ['onEnable']() {
		this['owner']['on'](Laya['Event']['LOADED'], this, this['onImgLoaded$']);
		this['owner']['on'](Laya['Event']['CHANGED'], this, this['onImgLoaded$']);
		this['startUwidth'] = this['owner']['width'];
		this['startUheight'] = this['owner']['height'];
	} ['onUpdate']() {} ['onImgLoaded$']() {
		if (!this['owner']['source']) return;
		let _0x5e8b33 = this['owner']['source']['sourceHeight'];
		let _0xc8b80a = this['owner']['source']['sourceWidth'];
		let _0x37f242 = this['startUwidth'];
		let _0x147377 = this['startUheight'];
		let _0x30855b = Math['abs'](_0x37f242 - _0xc8b80a);
		let _0x3c34a3 = Math['abs'](_0x147377 - _0x5e8b33);
		if (_0xc8b80a > _0x37f242 && _0x5e8b33 > _0x147377) {
			if (_0x30855b > _0x3c34a3) {
				let _0x6ed2e0 = _0xc8b80a / _0x37f242;
				this['owner']['height'] = _0x5e8b33 / _0x6ed2e0;
				this['owner']['width'] = this['startUwidth'];
			} else {
				let _0x123800 = _0x5e8b33 / _0x147377;
				this['owner']['width'] = _0xc8b80a / _0x123800;
				this['owner']['height'] = this['startUheight'];
			}
		} else if (_0xc8b80a > _0x37f242 && _0x5e8b33 < _0x147377) {
			let _0x5dc44d = _0xc8b80a / _0x37f242;
			this['owner']['height'] = _0x5e8b33 / _0x5dc44d;
			this['owner']['width'] = this['startUwidth'];
		} else if (_0xc8b80a < _0x37f242 && _0x5e8b33 > _0x147377) {
			let _0x437138 = _0x5e8b33 / _0x147377;
			this['owner']['width'] = _0xc8b80a / _0x437138;
			this['owner']['height'] = this['startUheight'];
		} else if (_0xc8b80a < _0x37f242 && _0x5e8b33 < _0x147377) {
			let _0x398759 = _0x5e8b33 / _0x147377;
			this['owner']['width'] = _0xc8b80a / _0x398759;
			this['owner']['height'] = this['startUheight'];
		} else {
			this['owner']['width'] = this['startUwidth'];
			this['owner']['height'] = this['startUheight'];
		}
	} ['onDestroy']() {
		this['owner']['off'](Laya['Event']['LOADED'], this, this['onImgLoaded$']);
		this['owner']['off'](Laya['Event']['CHANGED'], this, this['onImgLoaded$']);
	}
}
class Utils$ {
	constructor() {}
	static['removeArrayElement$'](_0x235e79, _0x48f729) {
		if (!_0x235e79 || !(_0x235e79 instanceof Array)) return;
		var _0x59e071 = _0x235e79['length'];
		while (--_0x59e071 > -0x1) {
			if (_0x235e79[_0x59e071] == _0x48f729) {
				_0x235e79['splice'](_0x59e071, 0x1);
			}
		}
	}
	static['removeArrayElementAt$'](_0xf72de5, _0x22e354) {
		if (!_0xf72de5 || !(_0xf72de5 instanceof Array)) return;
		_0xf72de5['splice'](_0x22e354, 0x1);
	}
	static['arrayContains$'](_0x85a121, _0x391eb8) {
		if (!_0x85a121 || !(_0x85a121 instanceof Array)) return ![];
		return _0x85a121['indexOf'](_0x391eb8) != -0x1;
	}
	static['getChildDeep'](_0x45346a, _0x26b3ec) {
		var _0x7ef30b = _0x45346a['getChildByName'](_0x26b3ec);
		if (_0x7ef30b) return _0x7ef30b;
		for (var _0x92927b = 0x0; _0x92927b < _0x45346a['_children']['length']; _0x92927b++) {
			_0x7ef30b = Utils$['getChildDeep'](_0x45346a['_children'][_0x92927b], _0x26b3ec);
			if (_0x7ef30b) return _0x7ef30b;
		}
	}
	static['getChildArrayDeep$'](_0x4c8c0d, _0x557b92) {
		let _0x1a74d0 = [];
		if (_0x4c8c0d['name'] == _0x557b92) _0x1a74d0['push'](_0x4c8c0d);
		let _0x686b5f = _0x4c8c0d['_children']['length'];
		let _0x23c3ce;
		while (--_0x686b5f > -0x1) {
			_0x23c3ce = Utils$['getChildArrayDeep$'](_0x4c8c0d['_children'][_0x686b5f], _0x557b92);
			if (_0x23c3ce) _0x1a74d0['pushAll$'](_0x23c3ce);
		}
		return _0x1a74d0;
	}
	static['getAvater$'](_0x494ea9) {
		if (!_0x494ea9 || !_0x494ea9['getComponent']) return null;
		let _0x676cdd = null;
		let _0x1818a0 = _0x494ea9['getComponent'](Laya['Animator']);
		if (!_0x1818a0) {
			let _0x3f2860 = _0x494ea9['_children'];
			let _0x331a9d = 0x0;
			let _0x1471ec = _0x3f2860['length'];
			for (; _0x331a9d < _0x1471ec; _0x331a9d++) {
				_0x676cdd = Utils$['getAvater$'](_0x3f2860[_0x331a9d]);
				if (_0x676cdd) {
					break;
				}
			}
		} else {
			_0x676cdd = _0x494ea9;
		}
		return _0x676cdd;
	}
	static['clamp$'](_0x1c438c, _0x3e59cf, _0x35cf24) {
		return Math['max'](_0x1c438c, Math['min'](_0x3e59cf, _0x35cf24));
	}
	static['formatDateStr$'](_0x1388bc) {
		return _0x1388bc['format']('yyyy-MM-dd\x20hh:mm');
	}
	static['getZeroTime$']() {
		return Date['parse'](new Date()['toDateString']());
	}
	static['floatRange'](_0x68d99f, _0x2a23e7) {
		return Math['random']() * (_0x2a23e7 - _0x68d99f) + _0x68d99f;
	}
	static['randomChance$'](_0x4ac726) {
		return _0x4ac726 >= Math['random']();
	}
	static['intRange$'](_0x46d5e7, _0x38a698) {
		return Math['floor'](Math['random']() * (_0x38a698 - _0x46d5e7) + _0x46d5e7);
	}
	static['getSkinPathById'](_0x4f6a7e) {
		var _0x4182e6 = D['SpritePath'][_0x4f6a7e];
		if (!_0x4182e6) _0x4182e6 = D['SpritePath'][0x64];
		return _0x4182e6['chs'];
	}
	static['arrayRandom$'](_0x1d6bef) {
		var _0x580089 = Utils$['intRange$'](0x0, _0x1d6bef['length']);
		return _0x1d6bef[_0x580089];
	}
	static['shiftRandom$'](_0x2f2506) {
		var _0x1b20d8 = Utils$['intRange$'](0x0, _0x2f2506['length']);
		var _0x2422b9 = _0x2f2506[_0x1b20d8];
		_0x2f2506['removeAt'](_0x1b20d8);
		return _0x2422b9;
	}
	static['randomIndexByWeight$'](_0xdf0fdd, _0x556f97) {
		if (!_0x556f97) {
			_0x556f97 = 0x0;
			for (var _0x35f1dd = 0x0; _0x35f1dd < _0xdf0fdd['length']; _0x35f1dd++) _0x556f97 += _0xdf0fdd[_0x35f1dd];
		}
		var _0x130123 = Utils$['intRange$'](0x0, _0x556f97 + 0x1);
		var _0x28b816 = 0x0;
		for (; _0x28b816 < _0xdf0fdd['length']; _0x28b816++) {
			_0x130123 -= _0xdf0fdd[_0x28b816];
			if (_0x130123 <= 0x0) return _0x28b816;
		}
		return 0x0;
	}
	static['getStrParam$'](_0x5d4dc0) {
		var _0x24ca71 = D['CommonParameter'][_0x5d4dc0];
		return _0x24ca71 ? _0x24ca71['Value'] : '';
	}
	static['getNumberParam$'](_0x201ba9) {
		return Number(Utils$['getStrParam$'](_0x201ba9));
	}
	static['setShowName$'](_0x65df45, _0x2c84ca, _0x2741) {
		if (!_0x65df45) return;
		if (!_0x2741) {
			_0x65df45['text'] = '名字六个字哦';
			_0x2741 = _0x65df45['textField']['textWidth'];
		}
		var _0x40de26;
		var _0x290a2e = _0x2c84ca['length'];
		_0x65df45['text'] = '';
		for (_0x40de26 = 0x0; _0x40de26 < _0x290a2e; _0x40de26++) {
			_0x65df45['text'] += _0x2c84ca['charAt'](_0x40de26);
			if (_0x65df45['textField']['textWidth'] > _0x2741) {
				_0x65df45['text'] = _0x2c84ca['substring'](0x0, _0x40de26);
				return;
			}
		}
		_0x65df45['text'] = _0x2c84ca;
	}
	static['getString$'](_0x394faf, _0x1bd8ee) {
		if (!D['GameText'][_0x394faf]) {
			return _0x394faf + _0x1bd8ee;
		}
		var _0x599936 = D['GameText'][_0x394faf]['chs'];
		if (!_0x599936) return D['GameText']['0']['chs'];
		if (!_0x1bd8ee) return _0x599936;
		return Utils$['stringFormat$'](_0x599936, _0x1bd8ee);
	}
	static['stringFormat$'](_0x48c574, _0x772158) {
		if (!_0x48c574) return _0x772158;
		var _0x2afc4c = _0x48c574;
		if (_0x772158) {
			for (var _0x8d29a4 = 0x0; _0x8d29a4 < _0x772158['length']; _0x8d29a4++) {
				_0x2afc4c = _0x2afc4c['replaceAll']('{' + _0x8d29a4 + '}', _0x772158[_0x8d29a4]);
			}
		}
		return _0x2afc4c;
	}
	static['onButtonScaleEvent'](_0x2135ac, _0x58951f, _0x35bc29, _0x169402) {
		!_0x2135ac['defaultScale'] && (_0x2135ac['defaultScale'] = {
			'scaleX': _0x2135ac['scaleX'] || 0x1,
			'scaleY': _0x2135ac['scaleY'] || 0x1
		});
		_0x2135ac['on'](Laya['Event']['MOUSE_DOWN'], Utils$, Utils$['_onScaleBtnDown$']);
		_0x2135ac['on'](Laya['Event']['ROLL_OUT'], Utils$, Utils$['_onScaleBtnOut$']);
		_0x2135ac['on'](Laya['Event']['MOUSE_UP'], Utils$, Utils$['_onScaleBtnUp$']);
		_0x2135ac['on'](Laya['Event']['CLICK'], Utils$, Utils$['_onScaleBtnClick$'], [_0x58951f, _0x35bc29]);
		_0x2135ac['_sound'] = _0x169402;
	}
	static['_onScaleBtnClick$'](_0x320f98, _0x1476f5, _0xb5c453) {
		SdkManager$['getInstance$']()['shakePhone']();
		try {
			if (_0x320f98 && _0x320f98[_0x1476f5]) {
				_0x320f98[_0x1476f5](_0xb5c453);
			}
			AudioManager['getInstance$']()['playSound'](_0xb5c453['target']['_sound'] || GameSetting$['SOUND_TYPE']['CLICK_SOUND_ID']);
		} catch (_0x22d213) {
			ProtocolManager['reportError$'](_0x22d213['stack']);
		}
		_0xb5c453['stopPropagation']();
	}
	static['_onScaleBtnDown$'](_0x1d80a0) {
		_0x1d80a0['target']['scale'](_0x1d80a0['target']['defaultScale']['scaleX'] * 1.1, _0x1d80a0['target']['defaultScale']['scaleY'] * 1.1);
		_0x1d80a0['stopPropagation']();
	}
	static['_onScaleBtnOut$'](_0x5c524a) {
		_0x5c524a['currentTarget']['scale'](_0x5c524a['target']['defaultScale']['scaleX'] * 0x1, _0x5c524a['target']['defaultScale']['scaleY'] * 0x1);
		_0x5c524a['stopPropagation']();
	}
	static['_onScaleBtnUp$'](_0x16810d) {
		_0x16810d['target']['scale'](_0x16810d['target']['defaultScale']['scaleX'] * 0x1, _0x16810d['target']['defaultScale']['scaleY'] * 0x1);
		_0x16810d['stopPropagation']();
	}
	static['onButtonEvent'](_0x19b966, _0x5032b5, _0xe71358) {
		if (!_0x19b966) return;
		_0x19b966['on'](Laya['Event']['MOUSE_DOWN'], _0x5032b5, Utils$['_onBtnDown$']);
		_0x19b966['on'](Laya['Event']['ROLL_OUT'], _0x5032b5, Utils$['_onBtnOut$']);
		_0x19b966['on'](Laya['Event']['MOUSE_UP'], _0x5032b5, Utils$['_onBtnUp$']);
		_0x19b966['on'](Laya['Event']['CLICK'], _0x5032b5, Utils$['_onBtnClick$'], [_0x5032b5, _0xe71358]);
	}
	static['_onBtnClick$'](_0x54f680, _0x4064fe, _0x35f94c) {
		SdkManager$['getInstance$']()['shakePhone']();
		try {
			if (_0x54f680 && _0x54f680[_0x4064fe]) {
				_0x54f680[_0x4064fe](_0x35f94c);
			}
		} catch (_0x5c479f) {
			ProtocolManager['reportError$'](_0x5c479f['stack']);
		}
		_0x35f94c['stopPropagation']();
	}
	static['_onBtnDown$'](_0x244695) {
		_0x244695['stopPropagation']();
	}
	static['_onBtnOut$'](_0x3cf7e1) {
		_0x3cf7e1['stopPropagation']();
	}
	static['_onBtnUp$'](_0x2aac88) {
		_0x2aac88['stopPropagation']();
	}
	static['onEvent$'](_0x177576, _0x2960a3) {
		_0x2960a3['on'](Laya['Event']['MOUSE_DOWN'], _0x177576, _0x177576['onMouseEventHandler']);
		_0x2960a3['on'](Laya['Event']['ROLL_OUT'], _0x177576, _0x177576['onMouseEventHandler']);
		_0x2960a3['on'](Laya['Event']['MOUSE_UP'], _0x177576, _0x177576['onMouseEventHandler']);
		_0x2960a3['on'](Laya['Event']['CLICK'], _0x177576, _0x177576['onMouseEventHandler']);
	}
	static['offEvent$'](_0x231529, _0x1ed7fc) {
		_0x1ed7fc['off'](Laya['Event']['MOUSE_DOWN'], _0x231529, _0x231529['onMouseEventHandler']);
		_0x1ed7fc['off'](Laya['Event']['ROLL_OUT'], _0x231529, _0x231529['onMouseEventHandler']);
		_0x1ed7fc['off'](Laya['Event']['MOUSE_UP'], _0x231529, _0x231529['onMouseEventHandler']);
		_0x1ed7fc['off'](Laya['Event']['CLICK'], _0x231529, _0x231529['onMouseEventHandler']);
	}
	static['formatTime$'](_0x4a2269, _0x5f1d9f) {
		var _0x2233ce = Math['floor'](_0x4a2269 / 0x3c);
		_0x4a2269 = _0x4a2269 % 0x3c;
		if (!_0x5f1d9f || _0x2233ce < 0x3c) return Utils$['timeNumberFormat$'](_0x2233ce) + ':' + Utils$['timeNumberFormat$'](_0x4a2269);
		var _0x25faf4 = Math['floor'](_0x2233ce / 0x3c);
		_0x2233ce %= 0x3c;
		return _0x25faf4 + ':' + Utils$['timeNumberFormat$'](_0x2233ce) + ':' + Utils$['timeNumberFormat$'](_0x4a2269);
	}
	static['timeNumberFormat$'](_0x4f0ffe) {
		return (_0x4f0ffe < 0xa ? '0' : '') + parseInt(_0x4f0ffe);
	}
	static['setVector3$'](_0x1614e9, _0x14433f, _0x26deea, _0x2c9eea) {
		_0x1614e9['x'] = _0x14433f, _0x1614e9['y'] = _0x26deea, _0x1614e9['z'] = _0x2c9eea;
	}
	static['resetScale$'](_0x5c740b) {
		if (!_0x5c740b) return;
		let _0x1f1577 = _0x5c740b['transform']['localScale']['clone']();
		_0x5c740b['transform']['localScale'] = new Laya['Vector3'](0x0, 0x0, 0x0);
		_0x5c740b['transform']['localScale'] = _0x1f1577;
		let _0x2ffbe8 = _0x5c740b['_children'];
		let _0x50f446 = _0x2ffbe8 ? _0x2ffbe8['length'] : 0x0;
		while (--_0x50f446 > -0x1) {
			Utils$['resetScale$'](_0x2ffbe8[_0x50f446]);
		}
	}
	static['copyVector3'](_0x59e592, _0x50909c) {
		_0x50909c['x'] = _0x59e592['x'];
		_0x50909c['y'] = _0x59e592['y'];
		_0x50909c['z'] = _0x59e592['z'];
	}
	static['getV3Length$'](_0x4c1a29) {
		return Math['sqrt'](Math['pow'](_0x4c1a29['x'], 0x2) + Math['pow'](_0x4c1a29['y'], 0x2) + Math['pow'](_0x4c1a29['z'], 0x2));
	}
	static['getPoint'](_0x15345e, _0x3a1200, _0x4957d3, _0x3eb9dd) {
		let _0x8ee404 = _0x15345e['x'],
			_0x44ba79 = _0x15345e['y'];
		let _0x4bbab8 = _0x3a1200['x'],
			_0x18493d = _0x3a1200['y'];
		let _0xc7c59c = _0x4957d3['x'],
			_0x30ad42 = _0x4957d3['y'];
		let _0x42750f = _0x3eb9dd['x'],
			_0x24957c = _0x3eb9dd['y'];
		let _0x507c66 = ((_0x4bbab8 - _0x8ee404) * (_0x30ad42 - _0x44ba79) - (_0xc7c59c - _0x8ee404) * (_0x18493d - _0x44ba79)) / ((_0x4bbab8 - _0x8ee404) * (_0x30ad42 - _0x24957c) - (_0xc7c59c - _0x42750f) * (_0x18493d - _0x44ba79));
		return {
			'x': _0xc7c59c + _0x507c66 * (_0x42750f - _0xc7c59c),
			'y': _0x30ad42 + _0x507c66 * (_0x24957c - _0x30ad42)
		};
	}
	static['isLineInCircle'](_0x41b439, _0x4893a8, _0x5cc1d3, _0x45a50a, _0x213d8e) {
		if (this['isInCircle'](_0x41b439, _0x5cc1d3, _0x45a50a, _0x213d8e) || this['isInCircle'](_0x4893a8, _0x5cc1d3, _0x45a50a, _0x213d8e)) {
			return !![];
		}
		var _0xc7c45f, _0x6c9d3e, _0x58ef70, _0x3825ad, _0x21a351, _0x35ecce, _0x10992c;
		if (_0x41b439['x'] === _0x4893a8['x']) {
			_0xc7c45f = 0x1, _0x6c9d3e = 0x0, _0x58ef70 = -_0x41b439['x'];
		} else if (_0x41b439['y'] === _0x4893a8['y']) {
			_0xc7c45f = 0x0, _0x6c9d3e = 0x1, _0x58ef70 = -_0x41b439['y'];
		} else {
			_0xc7c45f = _0x41b439['y'] - _0x4893a8['y'];
			_0x6c9d3e = _0x4893a8['x'] - _0x41b439['x'];
			_0x58ef70 = _0x41b439['x'] * _0x4893a8['y'] - _0x41b439['y'] * _0x4893a8['x'];
		}
		_0x3825ad = _0xc7c45f * _0x5cc1d3 + _0x6c9d3e * _0x45a50a + _0x58ef70;
		_0x3825ad *= _0x3825ad;
		_0x21a351 = (_0xc7c45f * _0xc7c45f + _0x6c9d3e * _0x6c9d3e) * _0x213d8e * _0x213d8e;
		if (_0x3825ad > _0x21a351) return ![];
		_0x35ecce = (_0x5cc1d3 - _0x41b439['x']) * (_0x4893a8['x'] - _0x41b439['x']) + (_0x45a50a - _0x41b439['y']) * (_0x4893a8['y'] - _0x41b439['y']);
		_0x10992c = (_0x5cc1d3 - _0x4893a8['x']) * (_0x41b439['x'] - _0x4893a8['x']) + (_0x45a50a - _0x4893a8['y']) * (_0x41b439['y'] - _0x4893a8['y']);
		if (_0x35ecce > 0x0 && _0x10992c > 0x0) return !![];
		return ![];
	}
	static['isInCircle'](_0x3f7cfe, _0x383f87, _0x5e050e, _0x51890b) {
		return (_0x3f7cfe['x'] - _0x383f87) * (_0x3f7cfe['x'] - _0x383f87) + (_0x3f7cfe['y'] - _0x5e050e) * (_0x3f7cfe['y'] - _0x5e050e) <= _0x51890b * _0x51890b;
	}
	static['getPolygonVertex'](_0xd8e804, _0x1844d7, _0x1f2741, _0x343d79, _0x19b6c6) {
		var _0x34a297 = Math['cos'](_0x1f2741 * GameSetting$['RAD_1_ANGLE']);
		var _0x51d9a4 = Math['sin'](_0x1f2741 * GameSetting$['RAD_1_ANGLE']);
		if (_0x343d79) {
			var _0x451960 = _0x343d79['length'];
			var _0x42ec1a;
			var _0x3955df, _0x1c3b50;
			while (--_0x451960 > -0x1) {
				_0x42ec1a = _0x343d79[_0x451960];
				if (_0x42ec1a) {
					_0x3955df = _0x42ec1a['x'];
					_0x1c3b50 = _0x42ec1a['y'];
					_0x19b6c6[_0x451960] = {
						'x': _0xd8e804 + _0x3955df * _0x34a297 - _0x1c3b50 * _0x51d9a4,
						'y': _0x1844d7 + _0x3955df * _0x51d9a4 + _0x1c3b50 * _0x34a297
					};
				}
			}
		}
	}
	static['isLineIntersect'](_0x565fb3, _0x242147, _0x4b1096, _0x1baca6) {
		var _0x472642 = Utils$['cross'](_0x565fb3, _0x242147, _0x4b1096);
		var _0x2283ca = Utils$['cross'](_0x565fb3, _0x242147, _0x1baca6);
		var _0x2c3d3b = Utils$['cross'](_0x4b1096, _0x1baca6, _0x565fb3);
		var _0x23e87a = Utils$['cross'](_0x4b1096, _0x1baca6, _0x242147);
		if (_0x472642 * _0x2283ca > 0x0 || _0x2c3d3b * _0x23e87a > 0x0) {
			return ![];
		} else if (_0x472642 === 0x0 && _0x2283ca === 0x0) {
			return this['rectsIntersect'](_0x565fb3, _0x242147, _0x4b1096, _0x1baca6);
		} else {
			return !![];
		}
	}
	static['cross'](_0x569b82, _0x4ed4a2, _0x1ab193) {
		return (_0x1ab193['x'] - _0x569b82['x']) * (_0x4ed4a2['y'] - _0x569b82['y']) - (_0x1ab193['y'] - _0x569b82['y']) * (_0x4ed4a2['x'] - _0x569b82['x']);
	}
	static['rectsIntersect'](_0x3fea0a, _0xe0647, _0x1c9be6, _0x18f9bb) {
		if (Math['min'](_0x3fea0a['y'], _0xe0647['y']) <= Math['max'](_0x1c9be6['y'], _0x18f9bb['y']) && Math['max'](_0x3fea0a['y'], _0xe0647['y']) >= Math['min'](_0x1c9be6['y'], _0x18f9bb['y']) && Math['min'](_0x3fea0a['x'], _0xe0647['x']) <= Math['max'](_0x1c9be6['x'], _0x18f9bb['x']) && Math['max'](_0x3fea0a['x'], _0xe0647['x']) >= Math['min'](_0x1c9be6['x'], _0x18f9bb['x'])) {
			return !![];
		}
		return ![];
	}
	static['checkTwoRectCollide'](_0x24107c, _0x19a5c2, _0x5e716e) {
		var _0x5e552c = 0x4;
		var _0x3a060a;
		while (--_0x5e552c > -0x1) {
			_0x3a060a = 0x4;
			while (--_0x3a060a > -0x1) {
				if (Utils$['isLineIntersect'](_0x24107c[_0x5e552c], _0x24107c[_0x5e552c === 0x0 ? 0x3 : _0x5e552c - 0x1], _0x19a5c2[_0x3a060a], _0x19a5c2[_0x3a060a === 0x0 ? 0x3 : _0x3a060a - 0x1])) {
					if (_0x5e716e) {
						return Utils$['getPoint'](_0x24107c[_0x5e552c], _0x24107c[_0x5e552c === 0x0 ? 0x3 : _0x5e552c - 0x1], _0x19a5c2[_0x3a060a], _0x19a5c2[_0x3a060a === 0x0 ? 0x3 : _0x3a060a - 0x1]);
					}
					return !![];
				}
			}
		}
		return ![];
	}
	static['checkCircleBoxCollide'](_0x2bf785, _0x111716, _0x1270aa, _0x24e1ac) {
		if (_0x24e1ac) {
			var _0x5b8de8 = _0x24e1ac['length'];
			while (--_0x5b8de8 > -0x1) {
				if (Utils$['isLineInCircle'](_0x24e1ac[_0x5b8de8], _0x24e1ac[_0x5b8de8 === 0x0 ? _0x24e1ac['length'] - 0x1 : _0x5b8de8 - 0x1], _0x2bf785, _0x111716, _0x1270aa)) {
					return !![];
				}
			}
		}
		return ![];
	}
	static['getBoxColliderVertexs'](_0x5770ac, _0x59d7b8, _0x303d1c, _0x4fedf3) {
		let _0x376b0b = [{
			'x': _0x5770ac['offsetX'],
			'y': _0x5770ac['offsetY']
		}, {
			'x': _0x5770ac['offsetX'] + _0x5770ac['w'],
			'y': _0x5770ac['offsetY']
		}, {
			'x': _0x5770ac['offsetX'] + _0x5770ac['w'],
			'y': _0x5770ac['offsetY'] + _0x5770ac['h']
		}, {
			'x': _0x5770ac['offsetX'],
			'y': _0x5770ac['offsetY'] + _0x5770ac['h']
		}];
		let _0x5454e2 = [];
		Utils$['getPolygonVertex'](_0x59d7b8, _0x303d1c, _0x4fedf3, _0x376b0b, _0x5454e2);
		return _0x5454e2;
	}
	static['checkDotInRect'](_0x59cffe, _0x342693, _0x16fb2f, _0x330266, _0x366a16) {
		let _0x5401c0 = 0x0;
		let _0x55727d = 0x0;
		if (_0x16fb2f['radius']) {
			_0x5401c0 = _0x16fb2f['radius'];
			_0x55727d = _0x16fb2f['radius'];
		} else {
			_0x5401c0 = 0.5 * _0x16fb2f['sizeX'];
			_0x55727d = 0.5 * _0x16fb2f['sizeY'];
		}
		let _0x132939 = _0x5401c0 * _0x366a16['x'];
		let _0x344025 = _0x55727d * _0x366a16['y'];
		let _0x388034 = _0x330266['z'];
		let _0x49aa0a = _0x342693;
		let _0x1513df = _0x59cffe['x'];
		let _0xd65fc2 = _0x59cffe['y'];
		let _0x461e5f = -_0x388034 * GameSetting$['RAD_1_ANGLE'];
		let _0xae01a0 = _0x49aa0a['x'] + (_0x1513df - _0x49aa0a['x']) * Math['cos'](_0x461e5f) - (_0xd65fc2 - _0x49aa0a['y']) * Math['sin'](_0x461e5f);
		let _0x4491d4 = _0x49aa0a['y'] + (_0x1513df - _0x49aa0a['x']) * Math['sin'](_0x461e5f) + (_0xd65fc2 - _0x49aa0a['y']) * Math['cos'](_0x461e5f);
		if (_0xae01a0 > _0x49aa0a['x'] - _0x132939 && _0xae01a0 < _0x49aa0a['x'] + _0x132939 && _0x4491d4 > _0x49aa0a['y'] - _0x344025 && _0x4491d4 < _0x49aa0a['y'] + _0x344025) {
			return !![];
		}
		return ![];
	}
	static['get3dTo2dRatio'](_0x1fa3ca, _0x44eb3b, _0x5502a4, _0x8c0d0d, _0x1560ac) {
		let _0x2ee725 = Laya['stage']['width'];
		let _0x453b60 = Laya['stage']['height'];
		_0x44eb3b['x'] = _0x2ee725 / 0x2;
		_0x44eb3b['y'] = _0x453b60 / 0x2;
		_0x5502a4['x'] = _0x2ee725;
		_0x5502a4['y'] = _0x453b60;
		let _0x2cf51e = _0x44eb3b;
		let _0x44135e = _0x5502a4;
		let _0x47734d = _0x8c0d0d;
		let _0xc1a57b = _0x1560ac;
		_0x1fa3ca['convertScreenCoordToOrthographicCoord'](_0x2cf51e, _0x47734d);
		_0x1fa3ca['convertScreenCoordToOrthographicCoord'](_0x44135e, _0xc1a57b);
		let _0x5c77d7 = _0x44135e['x'] - _0x2cf51e['x'];
		let _0x4a89f4 = _0x44135e['y'] - _0x2cf51e['y'];
		let _0x7a3f94 = _0xc1a57b['x'] - _0x47734d['x'];
		let _0x560fc8 = _0xc1a57b['y'] - _0x47734d['y'];
		let _0x1600e3 = _0x5c77d7 / _0x7a3f94;
		let _0x4ee422 = _0x4a89f4 / _0x560fc8;
		let _0x32464b = _0x2cf51e['x'] - _0x47734d['x'] * _0x1600e3;
		let _0x3009d4 = _0x2cf51e['y'] - _0x47734d['y'] * _0x4ee422;
		let _0x468204 = [_0x1600e3, _0x4ee422, _0x32464b, _0x3009d4];
		return _0x468204;
	}
	static['changeImgColor$'](_0x2d19e9, _0x3d0cd2) {
		let _0x922987 = [_0x2d19e9[0x0], 0x0, 0x0, 0x0, 0x0, 0x0, _0x2d19e9[0x1], 0x0, 0x0, 0x0, 0x0, 0x0, _0x2d19e9[0x2], 0x0, 0x0, 0x0, 0x0, 0x0, _0x2d19e9[0x3], 0x0];
		let _0x176210 = new Laya['ColorFilter'](_0x922987);
		let _0x1d88d0 = _0x3d0cd2;
		_0x1d88d0['filters'] = [_0x176210];
	}
	static['randomIndexByWeight'](_0x4519a2, _0x1334f2) {
		if (!_0x1334f2) {
			_0x1334f2 = 0x0;
			for (var _0x1ee70a = 0x0; _0x1ee70a < _0x4519a2['length']; _0x1ee70a++) _0x1334f2 += _0x4519a2[_0x1ee70a];
		}
		var _0x34bba7 = Utils$['intRange$'](0x0, _0x1334f2 + 0x1);
		var _0x3ca8ea = 0x0;
		for (; _0x3ca8ea < _0x4519a2['length']; _0x3ca8ea++) {
			_0x34bba7 -= _0x4519a2[_0x3ca8ea];
			if (_0x34bba7 <= 0x0) return _0x3ca8ea;
		}
		return 0x0;
	}
}
class PgdkDataHhxkOppo$ extends Laya['Script'] {
	constructor() {
		super();
		this['data$'] = undefined;
		this['endData$'] = [];
		this['app_version'] = 0x1;
	} ['setAllData$']() {
		this['loadCfg$']();
		this['formatData$']();
		pgdk$['isSdkReady$'] = !![];
	} ['formatData$']() {
		if (!this['data$'] || !this['cfg$']) return;
		if (this['cfg$']['relations']['length'] == 0x0) {
			console['log']('后台忘记配关联的游戏啦！');
			return;
		}
		for (let _0x2e3860 = 0x0; _0x2e3860 < this['cfg$']['relations']['length']; _0x2e3860++) {
			for (let _0x33bbfe = 0x0; _0x33bbfe < this['data$']['length']; _0x33bbfe++) {
				if (this['cfg$']['relations'][_0x2e3860] == this['data$'][_0x33bbfe]['id']) {
					const _0x2e1863 = this['data$'][_0x33bbfe];
					let _0x40f37b = _0x2e1863;
					let _0x21590a = _0x40f37b['img']['search']('=') + 0x1;
					let _0x5c7dc2 = _0x40f37b['img']['substring'](_0x21590a, _0x21590a + 0x4);
					_0x40f37b['title'] = _0x5c7dc2;
					_0x40f37b['img'] = _0x40f37b['img'];
					let _0x5757f7 = _0x40f37b['id']['substring'](0x0, _0x40f37b['id']['length'] - 0x1);
					_0x40f37b['pkg_name'] = _0x5757f7;
					this['endData$']['push'](_0x40f37b);
				}
			}
		}
		console['log']('加工后的数据：', this['endData$']);
	} ['getAds$'](_0x485fe6) {
		return this['endData$'];
	} ['loadCfg$']() {
		this['cfg$'] = pgdk$['cfg$'];
		this['data$'] = this['cfg$'] && this['cfg$']['img'];
	}
}
class PgdkDataHhxkQQ$ extends Laya['Script'] {
	constructor() {
		super();
		this['data$'] = undefined;
		this['endData$'] = [];
		this['app_version'] = 0x1;
		this['city$'] = ['北京', '广州', '上海', '深圳'];
	} ['setAllData$']() {
		this['loadCfg$']();
		this['formatData$']();
		pgdk$['isSdkReady$'] = !![];
	} ['formatData$']() {
		if (!this['data$'] || !this['cfg$']) return;
		for (let _0x2eb97b = 0x0; _0x2eb97b < this['cfg$']['relations']['length']; _0x2eb97b++) {
			for (let _0x3605d5 = 0x0; _0x3605d5 < this['data$']['length']; _0x3605d5++) {
				if (this['cfg$']['relations'][_0x2eb97b] == this['data$'][_0x3605d5]['id']) {
					const _0x10c156 = this['data$'][_0x3605d5];
					let _0x16cd0b = _0x10c156;
					let _0x4cd408 = _0x16cd0b['img']['search']('=') + 0x1;
					let _0x31d795 = _0x16cd0b['img']['substring'](_0x4cd408, _0x4cd408 + 0x4);
					_0x16cd0b['id'] = _0x16cd0b['id']['slice'](0x0, _0x16cd0b['id']['length'] - 0x1);
					_0x16cd0b['appid'] = _0x16cd0b['id'];
					_0x16cd0b['title'] = _0x31d795;
					_0x16cd0b['img'] = _0x16cd0b['img'];
					this['endData$']['push'](_0x16cd0b);
				}
			}
		}
		console['log']('加工后的数据：', this['endData$']);
	} ['getAds$'](_0x1d4021) {
		return this['endData$'];
	} ['loadCfg$']() {
		this['cfg$'] = pgdk$['cfg$'];
		this['data$'] = this['cfg$'] && this['cfg$']['img'];
	}
}
class PgdkDataHhxkToutiao$ extends Laya['Script'] {
	constructor() {
		super();
		this['data$'] = undefined;
		this['endData$'] = [];
		this['app_version'] = 0x1;
		this['city$'] = ['北京', '上海', '广州', '深圳', '西安', '成都', '福州', '武汉'];
	} ['setAllData$']() {
		this['loadCfg$']();
		this['formatData$']();
		pgdk$['isSdkReady$'] = !![];
	} ['formatData$']() {
		if (!this['data$'] || !this['cfg$']) return;
		for (let _0x450055 = 0x0; _0x450055 < this['cfg$']['relations']['length']; _0x450055++) {
			for (let _0x2301cf = 0x0; _0x2301cf < this['data$']['length']; _0x2301cf++) {
				if (this['cfg$']['relations'][_0x450055] == this['data$'][_0x2301cf]['id']) {
					const _0x3ab07e = this['data$'][_0x2301cf];
					let _0x4e0f1b = _0x3ab07e;
					let _0x4e2d90 = _0x4e0f1b['img']['search']('=') + 0x1;
					let _0x5dd212 = _0x4e0f1b['img']['substring'](_0x4e2d90, _0x4e2d90 + 0x4);
					_0x4e0f1b['id'] = _0x4e0f1b['id']['slice'](0x0, _0x4e0f1b['id']['length'] - 0x1);
					_0x4e0f1b['appid'] = _0x4e0f1b['id'];
					_0x4e0f1b['title'] = _0x5dd212;
					_0x4e0f1b['img'] = _0x4e0f1b['img'];
					this['endData$']['push'](_0x4e0f1b);
				}
			}
		}
		console['log']('加工后的数据：', this['endData$']);
	} ['getAds$'](_0xdca7d2) {
		return this['endData$'];
	} ['loadCfg$']() {
		this['cfg$'] = pgdk$['cfg$'];
		this['data$'] = this['cfg$'] && this['cfg$']['img'];
	} ['getUserId$']() {
		let _0x8c20f1 = pgdk$['getPlatformUserId$']() || '';
		if (!_0x8c20f1) {
			Laya['timer']['once'](0x1388, this, function() {
				this['getUserId$']();
			});
		} else {
			console['log']('czh\x20获取userId成功');
		}
	}
}
class PgdkDataHhxkUc$ extends Laya['Script'] {
	constructor() {
		super();
		this['data$'] = undefined;
		this['endData$'] = [];
		this['app_version'] = 0x1;
		this['city$'] = ['北京', '广州', '杭州'];
	} ['setAllData$']() {
		this['loadCfg$']();
		this['formatData$']();
		pgdk$['isSdkReady$'] = !![];
	} ['formatData$']() {
		if (!this['data$'] || !this['cfg$']) return;
		for (let _0x1b7cb0 = 0x0; _0x1b7cb0 < this['cfg$']['relations']['length']; _0x1b7cb0++) {
			for (let _0x29e5fc = 0x0; _0x29e5fc < this['data$']['length']; _0x29e5fc++) {
				if (this['cfg$']['relations'][_0x1b7cb0] == this['data$'][_0x29e5fc]['id']) {
					const _0x17ed44 = this['data$'][_0x29e5fc];
					let _0xc79d54 = _0x17ed44;
					let _0x17c973 = _0xc79d54['img']['search']('=') + 0x1;
					let _0x11c8a2 = _0xc79d54['img']['substring'](_0x17c973, _0x17c973 + 0x4);
					_0xc79d54['id'] = _0xc79d54['id']['slice'](0x0, _0xc79d54['id']['length'] - 0x1);
					_0xc79d54['appid'] = _0xc79d54['id'];
					_0xc79d54['title'] = _0x11c8a2;
					_0xc79d54['img'] = _0xc79d54['img'];
					this['endData$']['push'](_0xc79d54);
				}
			}
		}
		console['log']('加工后的数据：', this['endData$']);
	} ['getAds$'](_0x594e4e) {
		return this['endData$'];
	} ['loadCfg$']() {
		this['cfg$'] = pgdk$['cfg$'];
		this['data$'] = this['cfg$'] && this['cfg$']['img'];
	}
}
class PgdkDataHhxkH5$ extends Laya['Script'] {
	constructor() {
		super();
		this['data$'] = undefined;
		this['endData$'] = [];
		this['app_version'] = 0x1;
		this['city$'] = ['厦门'];
	} ['setAllData$']() {
		this['loadCfg$']();
		this['formatData$']();
		pgdk$['isSdkReady$'] = !![];
	} ['formatData$']() {
		if (!this['data$'] || !this['cfg$']) return;
		for (let _0x4d9c45 = 0x0; _0x4d9c45 < this['cfg$']['relations']['length']; _0x4d9c45++) {
			for (let _0x2d8a07 = 0x0; _0x2d8a07 < this['data$']['length']; _0x2d8a07++) {
				if (this['cfg$']['relations'][_0x4d9c45] == this['data$'][_0x2d8a07]['id']) {
					const _0x345c92 = this['data$'][_0x2d8a07];
					let _0x123a71 = _0x345c92;
					let _0x37b516 = _0x123a71['img']['search']('=') + 0x1;
					let _0x4e4a08 = _0x123a71['img']['substring'](_0x37b516, _0x37b516 + 0x4);
					_0x123a71['id'] = _0x123a71['id']['slice'](0x0, _0x123a71['id']['length'] - 0x1);
					_0x123a71['appid'] = _0x123a71['id'];
					_0x123a71['title'] = _0x4e4a08;
					_0x123a71['img'] = _0x123a71['img'];
					this['endData$']['push'](_0x123a71);
				}
			}
		}
		console['log']('加工后的数据：', this['endData$']);
	} ['getAds$'](_0xb62bf8) {
		return this['endData$'];
	} ['loadCfg$']() {
		this['cfg$'] = pgdk$['cfg$'];
		this['data$'] = this['cfg$'] && this['cfg$']['img'];
	}
}
class PgdkDataHhxkVivo$ extends Laya['Script'] {
	constructor() {
		super();
		this['data$'] = undefined;
		this['endData$'] = [];
		this['app_version'] = 0x1;
	} ['setAllData$']() {
		this['loadCfg$']();
		this['formatData$']();
		pgdk$['isSdkReady$'] = !![];
	} ['formatData$']() {
		if (!this['data$'] || !this['cfg$']) return;
		if (this['cfg$']['relations']['length'] == 0x0) {
			console['log']('后台忘记配关联的游戏啦！');
			return;
		}
		for (let _0x501dce = 0x0; _0x501dce < this['cfg$']['relations']['length']; _0x501dce++) {
			for (let _0x33460a = 0x0; _0x33460a < this['data$']['length']; _0x33460a++) {
				if (this['cfg$']['relations'][_0x501dce] == this['data$'][_0x33460a]['id']) {
					const _0x4b2958 = this['data$'][_0x33460a];
					let _0x106954 = _0x4b2958;
					let _0xa0cc31 = _0x106954['img']['search']('=') + 0x1;
					let _0x1a882f = _0x106954['img']['substring'](_0xa0cc31, _0xa0cc31 + 0x4);
					_0x106954['title'] = _0x1a882f;
					_0x106954['img'] = _0x106954['img'];
					let _0x3311b2 = _0x106954['id']['substring'](0x0, _0x106954['id']['length'] - 0x1);
					_0x106954['pkg_name'] = _0x3311b2;
					this['endData$']['push'](_0x106954);
				}
			}
		}
		console['log']('加工后的数据：', this['endData$']);
	} ['getAds$'](_0x25125d) {
		return this['endData$'];
	} ['loadCfg$']() {
		this['cfg$'] = pgdk$['cfg$'];
		this['data$'] = this['cfg$'] && this['cfg$']['img'];
	}
}
class PgdkDataHhxkWx$ extends Laya['Script'] {
	constructor() {
		super();
		this['data$'] = undefined;
		this['endData$'] = [];
		this['app_version'] = 0x2;
	} ['setAllData$']() {
		this['loadCfg$']();
		this['formatData$']();
		pgdk$['isSdkReady$'] = !![];
	} ['formatData$']() {
		if (!this['data$'] || !this['cfg$']) return;
		for (let _0x148e9d = 0x0; _0x148e9d < this['cfg$']['relations']['length']; _0x148e9d++) {
			for (let _0x369edc = 0x0; _0x369edc < this['data$']['length']; _0x369edc++) {
				if (this['cfg$']['relations'][_0x148e9d] == this['data$'][_0x369edc]['id']) {
					const _0x4281f9 = this['data$'][_0x369edc];
					let _0x4b2e93 = _0x4281f9;
					let _0x79c262 = _0x4b2e93['img']['search']('=') + 0x1;
					let _0xb7f37e = _0x4b2e93['img']['substring'](_0x79c262, _0x79c262 + 0x4);
					_0x4b2e93['id'] = _0x4b2e93['id']['slice'](0x0, _0x4b2e93['id']['length'] - 0x1);
					_0x4b2e93['appid'] = _0x4b2e93['id'];
					_0x4b2e93['title'] = _0xb7f37e;
					_0x4b2e93['img'] = _0x4b2e93['img'];
					this['endData$']['push'](_0x4b2e93);
				}
			}
		}
		console['log']('加工后的数据：', this['endData$']);
	} ['getAds$'](_0x2a39d5) {
		return this['endData$'];
	} ['loadCfg$']() {
		this['cfg$'] = pgdk$['cfg$'];
		this['data$'] = this['cfg$'] && this['cfg$']['img'];
	}
}
class PgdkOppo$ extends Laya['Script'] {
	constructor() {
		super();
		this['channel$'] = null;
		this['appId$'] = null;
		this['isAdActive$'] = !![];
		this['nativeAdIds$'] = [];
		this['bannerId$'] = null;
		this['isVideoActive$'] = null;
		this['videoUnitId$'] = null;
		this['isInsertActive$'] = !![];
		this['insertUnitId$'] = null;
		this['sysInfo'] = {};
		this['nativeAds$'] = [];
		this['userId'] = '';
		this['oppoTime$'] = null;
	} ['onStart']() {
		this['init$']();
	} ['init$']() {
		console['log']('czh\x20oppoSDK初始化');
		console['log']('appid:' + this['appId$'] + 'isAdActive:' + this['isAdActive$'] + 'bannerId:' + this['bannerId$'] + 'videoUnitId:' + this['videoUnitId$'] + 'isVideoActive:' + this['isVideoActive$']);
		this['getSceneInfo$']();
		this['curBannerAd$'] = undefined;
		this['curVideoAd$'] = undefined;
		this['curNativeAd$'] = undefined;
		this['_initVideo$']();
		this['createNativeAds$']();
		this['_createInterstitialAd$']();
		this['_createBanner$'](null);
		this['setOppoTime$'](Laya['timer']['currTimer']);
	} ['setOppoTime$'](_0x29ca9a) {
		if (this['oppoTime$'] != _0x29ca9a) {
			this['oppoTime$'] = _0x29ca9a;
		}
	} ['isCanShowBannerOrNav$']() {
		if (this['oppoTime$'] == null) return ![];
		if (Laya['timer']['currTimer'] - this['oppoTime$'] >= 0xfde8) {
			return !![];
		} else {
			return ![];
		}
	} ['navigate2Mini$'](_0x40fffe, _0xf30cc9, _0x3b6583, _0x4dda51) {
		if (pgdk$['dataHandler$']['navigate2Mini$']) {
			pgdk$['dataHandler$']['navigate2Mini$'](_0x40fffe, _0xf30cc9, _0x3b6583, _0x4dda51);
		} else {
			var _0x5a1ba3 = _0x40fffe['extraData'] || {};
			_0x5a1ba3['from'] = this['appId$'];
			qg['navigateToMiniGame']({
				'pkgName': _0x40fffe['pkg_name'],
				'extraData': _0x5a1ba3
			});
		}
	} ['getSceneInfo$']() {
		if (!window['qg']) return;
		qg['getSystemInfo']({
			'success': function(_0x2f8577) {
				this['sysInfo'] = _0x2f8577;
			} ['bind'](this),
			'fail': function(_0xc89c8) {
				console['log']('czh\x20获取系统信息失败');
				console['log'](_0xc89c8);
			} ['bind'](this),
			'complete': function(_0x4789e9) {
				console['log']('czh\x20获取系统信息接口调用结束');
				console['log'](_0x4789e9);
			} ['bind'](this)
		});
	} ['_createBanner$'](_0x4a02ac) {
		if (!window['qg']) return;
		if (!this['isAdActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建banner广告');
			return;
		}
		if (typeof qg === 'undefined' || !qg['createBannerAd']) {
			console['warn']('czh\x20非oppo环境，无法创建激banner广告');
			return;
		}
		if (!this['bannerId$']) {
			console['warn']('czh\x20未配置banner广告ID');
			return;
		}
		var _0x3b1a77 = this['sysInfo']['screenWidth'];
		var _0x56da14 = this['sysInfo']['screenHeight'];
		console['log'](this['bannerId$']);
		console['log'](qg);
		console['log'](window['qg']);
		console['log']('czh\x20开始创建oppobanner广告');
		this['curBannerAd$'] = qg['createBannerAd']({
			'adUnitId': this['bannerId$'],
			'style': {
				'left': 0x0,
				'top': _0x56da14 / _0x3b1a77 > 0x2 ? _0x56da14 - 0x64 : _0x56da14 - 0x64,
				'width': _0x3b1a77,
				'height': 0x12c
			}
		});
		let _0x293efd = this;
		this['curBannerAd$']['onLoad'](function() {
			console['log']('czh\x20banner加载成功');
			_0x293efd['curBannerAd$']['show']();
		});
		this['curBannerAd$']['onError'](function(_0x322c90) {
			console['log']('czh\x20banner加载失败');
			console['log'](_0x322c90);
		});
	} ['showBanner$'](_0x562338, _0x18d16d) {
		if (!this['isCanShowBannerOrNav$']()) return;
		this['_showBanner$'](_0x562338, _0x18d16d);
	} ['_showBanner$'](_0x442c76, _0x9decc9) {
		if (!window['qg']) return;
		console['log']('czh\x20展示oppobanner广告');
		if (this['curBannerAd$']) {
			console['log']('czh\x20oppobanner存在');
			this['curBannerAd$']['show']();
		} else {
			this['_createBanner$']({
				'rect': _0x442c76,
				'widget': _0x9decc9
			});
		}
	} ['hideBanner$']() {
		if (!window['qg']) return;
		if (this['curBannerAd$']) {
			this['curBannerAd$']['hide']();
		} else {
			this['_createBanner$']();
		}
	} ['_initVideo$']() {
		this['_videoErrorTimes'] = 0x0;
		this['_maxVideoErrorTimes'] = 0x5;
		this['onVideoLoadOk'] = ![];
		this['_createVideoAd$']();
		console['log']('czh\x20初始化视频广告');
	} ['_createVideoAd$']() {
		if (!window['qg']) return;
		if (!this['isVideoActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建视频广告');
			return;
		}
		if (typeof qg === 'undefined' || !qg['createRewardedVideoAd']) {
			console['warn']('czh\x20非oppo环境，无法创建视频广告');
			return;
		}
		if (!this['videoUnitId$']) {
			console['warn']('czh\x20未配置视频广告ID');
			return;
		}
		if (!this['curVideoAd$'] || JSON['stringify'](this['curVideoAd$']) == '{}') {
			console['log']('czh\x20创建视频广告');
			this['curVideoAd$'] = qg['createRewardedVideoAd']({
				'adUnitId': this['videoUnitId$']
			});
			this['curVideoAd$']['onLoad'](function() {
				this['_videoErrorTimes'] = 0x0;
				this['onVideoLoadOk'] = !![];
				console['log']('czh\x20激励式视频加载成功');
			} ['bind'](this));
			this['curVideoAd$']['onClose'](function(_0x34e974) {
				console['log']('czh\x20关闭视频');
				this['curVideoAd$'] = undefined;
				this['onVideoLoadOk'] = ![];
				if (this['_videoCloseCallback$']) {
					console['log']('czh\x20关闭视频执行回调');
					console['log'](this['_videoCloseCallback$']);
					this['_videoCloseCallback$'](_0x34e974 ? _0x34e974['isEnded'] : !![]);
					this['_videoCloseCallback$'] = undefined;
				}
			} ['bind'](this));
			this['curVideoAd$']['onError'](function(_0x7c5f44) {
				this['_videoErrorTimes']++;
				if (this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
					console['warn']('czh\x20激励式视频加载失败次数过多,\x20停止重试。\x20');
					this['_initVideo$']();
				}
				console['warn']('czh\x20激励式视频加载失败,\x20重试' + this['_videoErrorTimes']);
				console['warn'](JSON['stringify'](_0x7c5f44));
				this['curVideoAd$']['load']();
			} ['bind'](this));
			this['curVideoAd$']['load']();
		}
	} ['showVideoAd$'](_0x21c8e1) {
		console['log'](JSON['stringify'](this['isAdActive$']));
		if (!this['isVideoActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建激励式视频。当做成功回调。');
			_0x21c8e1 && _0x21c8e1(!![]);
			return;
		}
		if (typeof qg === 'undefined' || !qg['createRewardedVideoAd']) {
			console['warn']('czh\x20非oppo环境，无法播放激励式视频。当做成功回调。');
			_0x21c8e1 && _0x21c8e1(!![]);
			return;
		}
		console['log']('czh\x20视频播放');
		console['log'](JSON['stringify'](this['curVideoAd$']));
		if (this['curVideoAd$'] && this['onVideoLoadOk']) {
			this['_videoCloseCallback$'] = _0x21c8e1;
			this['curVideoAd$']['show']();
			return;
		} else if (!this['onVideoLoadOk']) {
			this['_novidoTip$']('视频点击频繁，请稍后再试');
			this['_initVideo$']();
			return;
		}
		if (!this['curVideoAd$'] || this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
			this['_novidoTip$']('视频点击频繁，请稍后再试');
			console['log']('czh\x20视频加载失败.........');
			this['_initVideo$']();
			_0x21c8e1 && _0x21c8e1(![]);
			return;
		}
	} ['_shakePhone$']() {
		qg['vibrateShort']({
			'success': function(_0xcbe090) {},
			'fail': function(_0x1fadee) {},
			'complete': function(_0x52d099) {}
		});
	} ['_login$']() {
		if (!window['qg']) return;
		qg['login']({
			'success': function(_0x116d90) {
				var _0x335d4f = JSON['stringify'](_0x116d90['data']);
				console['log']('czh\x20登录oppo');
				console['log'](JSON['stringify'](_0x335d4f));
				this['userId'] = _0x335d4f['uid'];
			} ['bind'](this),
			'fail': function(_0x28f5ce) {
				console['log'](JSON['stringify'](_0x28f5ce));
			} ['bind'](this)
		});
	} ['getUerId$']() {
		return this['userId'];
	} ['_novidoTip$'](_0x2619a5) {
		if (!window['qg']) return;
		qg['showToast']({
			'title': _0x2619a5
		});
	} ['getNativeAd$'](_0x229157) {
		return undefined;
	} ['createNativeAds$']() {
		console['log']('czh\x20原生广告id');
		let _0x1043bd = this['arrayRandom'](this['nativeAdIds$']);
		this['_createNativeAd$'](_0x1043bd);
	} ['_createNativeAd$'](_0x1a73ef) {
		console['log']('czh\x20创建原生广告');
		if (!window['qg']) return;
		if (!this['isAdActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建原生广告');
			return;
		}
		if (!qg['createNativeAd']) {
			console['warn']('czh\x20非oppo环境，无法创建原生广告');
			return;
		}
		if (!_0x1a73ef) {
			console['warn']('czh\x20未配置原生广告ID');
			return;
		}
		console['log']('czh\x20创建原生广告1');
		console['log'](_0x1a73ef);
		let _0xf0d31b;
		try {
			_0xf0d31b = qg['createNativeAd']({
				'adUnitId': _0x1a73ef
			});
		} catch (_0x596584) {
			console['log']('czh\x20原生广告load.....');
		}
		_0xf0d31b['onLoad'](function(_0x363413) {
			console['log']('czh\x20原生广告加载成功3');
			console['log'](JSON['stringify'](_0x363413));
			this['nativeAds$'] = _0x363413['adList'];
			this['curNativeAd$'] = _0xf0d31b;
			this['loadNativelogo$']();
		} ['bind'](this));
		_0xf0d31b['onError'](function() {
			console['warn']('czh\x20原生广告加载失败4:');
			console['warn'](JSON['stringify'](errMsg));
			setTimeout(this['_creatNativeAd$']['bind'](this), 0xbb8);
		} ['bind'](this));
		console['log']('czh\x20原生广告load2');
		console['log'](JSON['stringify'](_0xf0d31b));
		_0xf0d31b['load']();
		this['curNativeAd$'] = _0xf0d31b;
	} ['getNativeAdData$']() {
		console['log']('czh\x20获取原生广告数据');
		console['log'](JSON['stringify'](this['nativeAds$']));
		return this['nativeAds$']['pop']();
	} ['randomInt'](_0x4e71aa, _0xcb6da6) {
		return Math['floor'](Math['random']() * (_0xcb6da6 - _0x4e71aa) + _0x4e71aa);
	} ['arrayRandom'](_0x2d300c) {
		var _0x2f7899 = this['randomInt'](0x0, _0x2d300c['length']);
		return _0x2d300c[_0x2f7899];
	} ['loadNativelogo$']() {
		if (this['nativeAds$']['length'] <= 0x0) return;
		this['nativeLogoArr'] = [];
		let _0xdbaa1a = this['nativeAds$']['length'];
		let _0x548f15;
		let _0x2755f7;
		let _0x5e7743;
		while (--_0xdbaa1a > -0x1) {
			_0x548f15 = this['nativeAds$'][_0xdbaa1a];
			if (!_0x548f15['imgUrlList']) continue;
			_0x2755f7 = _0x548f15['imgUrlList'];
			_0x5e7743 = this['arrayRandom'](_0x2755f7);
			this['setNativeLogo$'](_0x5e7743, _0x548f15);
		}
	} ['setNativeLogo$'](_0x1156b0, _0x265e3a) {
		Laya['loader']['load'](_0x1156b0, Laya['Handler']['create'](this, _0xc4d0c5 => {
			_0x265e3a['logoImg$'] = _0x1156b0;
		}));
	} ['nativeClick$'](_0x32653f) {
		if (!this['curNativeAd$']) {
			console['log']('czh\x20没有创建原生广告');
			return;
		}
		console['log']('czh\x20原生广告点击');
		this['curNativeAd$']['reportAdShow']({
			'adId': _0x32653f
		});
		this['curNativeAd$']['reportAdClick']({
			'adId': _0x32653f
		});
		if (this['nativeAds$']['length'] <= 0x0) {
			this['curNativeAd$'] = undefined;
			this['nativeAds$'] = [];
			this['createNativeAds$']();
		}
	} ['closeNativeAd$'](_0x47a85b) {
		if (!this['curNativeAd$']) {
			console['log']('czh\x20没有创建原生广告');
			return;
		}
		this['curNativeAd$']['reportAdShow']({
			'adId': _0x47a85b
		});
		if (this['nativeAds$']['length'] <= 0x0) {
			this['curNativeAd$'] = undefined;
			this['nativeAds$'] = [];
			this['createNativeAds$']();
		}
	} ['_createInterstitialAd$']() {
		if (!window['qg']) return;
		if (!this['isInsertActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建插屏广告');
			return;
		}
		if (typeof qg === 'undefined' || !qg['createInsertAd']) {
			console['warn']('czh\x20非oppo环境，无法创建插屏广告');
			return;
		}
		if (!this['insertUnitId$']) {
			console['warn']('czh\x20未配置插屏广告ID');
			return;
		}
		console['log']('czh\x20创建插屏广告');
		let _0x54e04d;
		try {
			_0x54e04d = qg['createInsertAd']({
				'adUnitId': this['insertUnitId$']
			});
		} catch (_0x4bf7ce) {
			console['log']('czh\x20插屏广告fail');
		}
		_0x54e04d['onClose'](function() {
			_0x54e04d['destroy']();
			this['curInterstitialAd$'] = null;
			this['_createInterstitialAd$']();
			pgdk$['showBanner$'](null, null);
		});
		_0x54e04d['onLoad'](function() {
			console['log']('czh\x20插屏广告加载成功');
			this['curInterstitialAd$'] = _0x54e04d;
		} ['bind'](this));
		_0x54e04d['onError'](function(_0x425d44) {
			console['warn']('czh\x20插屏广告加载失败:');
			console['warn'](JSON['stringify'](_0x425d44));
			if (pgdk$['createAdDelayId$'] >= 0x0) {
				clearTimeout(pgdk$['createAdDelayId$']);
				pgdk$['createAdDelayId$'] = undefined;
			}
			pgdk$['createAdDelayId$'] = setTimeout(this['_createInterstitialAd$']['bind'](this), 0xbb8);
		} ['bind'](this));
		_0x54e04d['load']();
	} ['showInterstitialAd$']() {
		console['log'](JSON['stringify'](this['isInsertActive$']));
		if (!this['isInsertActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建插屏广告');
			return;
		}
		if (typeof qg === 'undefined' || !qg['createInsertAd']) {
			console['warn']('czh\x20非oppo环境，无法展示插屏广告。');
			return;
		}
		console['log']('czh\x20展示插屏广告');
		console['log'](JSON['stringify'](this['curInterstitialAd$']));
		if (this['curInterstitialAd$']) {
			pgdk$['hideBanner$']();
			this['curInterstitialAd$']['show']();
			this['curInterstitialAd$'] = null;
			return;
		} else if (!this['curInterstitialAd$']) {
			this['_createInterstitialAd$']();
			return;
		}
	} ['reportMonitor$']() {
		if (typeof qg === 'undefined' || !qg['reportMonitor']) {
			console['warn']('不能进行数据上报');
			return;
		}
		qg['reportMonitor']('game_scene', 0x0);
	}
}
class PgdkQQ$ extends Laya['Script'] {
	constructor() {
		super();
		this['_banners$'] = [];
		this['_dotBanners$'] = [];
		this['gridIdArr'] = [];
		this['MIN_BANNER_WIDTH$'] = 0x12c;
		this['MIN_BANNER_HEIGHT$'] = 0x7a;
		this['_adLoadFailCnt$'] = {};
		this['isLoadAllBanner$'] = ![];
		this['bannerShowSpacing$'] = 0x1388;
	} ['onStart']() {
		this['createBanner$']();
		this['initShare$']();
		this['initVideoAd$']();
		this['initInterstitialAd$']();
		Laya['timer']['loop'](0x64, this, this['_refreshBanner$']);
	} ['onUpdate']() {} ['initShare$']() {
		wx['onShareAppMessage'](function() {
			return {
				'title': '据说只有1%的人能战胜对手',
				'imageUrl': 'share/2.png'
			};
		});
		qq['onShareAppMessage'](function() {
			return {
				'title': '据说只有1%的人能战胜对手',
				'imageUrl': 'share/2.png'
			};
		});
		if (Laya['Browser']['onIOS']) {
			Laya['timer']['once'](0x64, this, function() {
				qq['hideShareMenu']({
					'hideShareItems': ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
				});
			});
		}
	} ['shareAppMessage$']() {
		if (!window['wx']) return;
		wx['shareAppMessage']({
			'title': '据说只有1%的人能战胜对手',
			'imageUrl': 'share/2.png'
		});
	} ['navigate2Mini$'](_0x1a7033, _0x57f398, _0x163b73, _0x51274d) {
		if (typeof qq === 'undefined') {
			console['warn']('非QQ环境，无法跳转', _0x1a7033);
			return;
		}
		switch (this['channel$']) {
			case 'zs':
				sdk['navigate2Mini'](_0x1a7033, pgdk$['openid$'], _0x163b73, _0x51274d);
				break;
			default:
				this['_pgNav$'](_0x1a7033, _0x57f398, _0x163b73, _0x51274d);
				break;
		}
	} ['_pgNav$'](_0xc42c19, _0x3fa5ea, _0x5328c8, _0x5cf982) {
		if (typeof qq === 'undefined') {
			console['warn']('非QQ环境，无法跳转', _0xc42c19);
			return;
		}
		if (qq['navigateToMiniProgram'] && _0xc42c19['appid']) {
			qq['navigateToMiniProgram']({
				'appId': _0xc42c19['appid'],
				'path': _0xc42c19['path'],
				'fail': function(_0x20ec4d) {
					_0x20ec4d && console['log'](_0x20ec4d['errMsg']);
					if (_0x20ec4d && _0x20ec4d['errMsg'] && _0x20ec4d['errMsg']['indexOf']('cancel') !== -0x1) {
						console['debug']('取消导出');
						_0x5cf982 && _0x5cf982();
					}
				},
				'success': function() {
					console['debug']('跳转成功');
					_0x5328c8 && _0x5328c8();
				}
			});
		}
	} ['showBlockAd$'](_0x432680, _0x23cea1, _0x406380, _0x15f495) {
		if (this['showBlockNum$'] == void 0x0) {
			this['showBlockNum$'] = 0x0;
		}
		if (this['blockAd$']) {
			this['blockAd$']['show']();
		} else {
			this['createBlockAd$'](_0x432680, _0x23cea1, _0x406380, _0x15f495);
		}
	} ['hideBlockAd$']() {
		if (this['blockAd$']) {
			this['blockAd$']['hide']();
			this['showBlockNum$']++;
			if (this['showBlockNum$'] == 0x2) {
				this['showBlockNum$'] = 0x0;
				this['blockAd$']['destroy']();
				this['blockAd$'] = undefined;
			}
		}
	} ['createBlockAd$'](_0x1e13e6, _0x24559f, _0x34d9b6, _0x2bfaaa) {
		if (!qq['createBlockAd']) return;
		this['blockAd$'] = qq['createBlockAd']({
			'adUnitId': this['blockUnitId$'],
			'style': {
				'left': _0x1e13e6,
				'top': _0x24559f
			},
			'size': _0x2bfaaa,
			'orientation': _0x34d9b6
		});
		if (!this['blockAd$']) return;
		this['blockAd$']['onLoad'](function() {
			this['blockAd$']['show']();
		} ['bind'](this));
	} ['createBanner$'](_0x52793f) {
		let _0x1d76f7 = this['bannerIds$']['shift']();
		var _0xb4d09e = Math['min'](0x177, Laya['Browser']['clientWidth']);
		var _0x11fb6f = undefined;
		_0x11fb6f = qq['createBannerAd']({
			'adUnitId': _0x1d76f7,
			'style': {
				'left': 0x0,
				'top': Laya['Browser']['clientHeight'],
				'width': _0xb4d09e,
				'height': 0x64
			}
		});
		_0x11fb6f['id$'] = _0x1d76f7;
		_0x11fb6f['showNum$'] = 0x0;
		_0x11fb6f['onLoad'](function() {
			if (_0x52793f) {
				_0x11fb6f['show']();
				_0x11fb6f['showNum$']++;
			} else {
				_0x11fb6f['hide']();
			}
		} ['bind'](this));
		_0x11fb6f['onResize'](function(_0x316dcf) {
			var _0x1ed77c = Laya['Browser']['clientHeight'];
			var _0x1c456d = _0x316dcf['width'] / 0x177;
			if (_0x1ed77c < _0x316dcf['height']) {
				var _0x2efe98 = _0x316dcf['height'] / _0x1c456d;
				_0x1ed77c = Math['max'](_0x1ed77c, _0x316dcf['height'] / _0x1c456d * 0.8);
				_0x1c456d = _0x1ed77c / _0x2efe98;
			} else {
				_0x1ed77c = _0x316dcf['height'];
			}
			var _0x15998e = Laya['Browser']['clientHeight'] - Math['ceil'](_0x1ed77c);
			if (Laya['Browser']['clientWidth'] * 0x2 < Laya['Browser']['clientHeight']) {
				_0x15998e = Laya['Browser']['clientHeight'] - _0x316dcf['height'] - 0x19;
			}
			_0x11fb6f['style']['top'] = _0x15998e + 0x1;
			_0x11fb6f['style']['width'] = Math['floor'](0x177 * _0x1c456d);
			_0x11fb6f['style']['left'] = Math['round']((Laya['Browser']['clientWidth'] - 0x177 * _0x1c456d) * 0.5);
		} ['bind'](this));
		this['_banners$']['push'](_0x11fb6f);
	} ['showBanner$'](_0x4af0b3, _0x46e1a1, _0x4fb3c8) {
		if (this['_banners$']['length'] == 0x0) {
			Laya['timer']['once'](0x1f4, this, function() {
				this['showBanner$'](_0x4af0b3, _0x46e1a1, _0x4fb3c8);
			} ['bind'](this));
			return;
		}
		this['_needBanner$'] = _0x4fb3c8;
		this['curBannerIndex$'] = Math['floor'](Math['random']() * this['_banners$']['length']);
		this['curBannerId$'] = this['_banners$'][this['curBannerIndex$']]['id$'];
		if (this['_banners$'][this['curBannerIndex$']]['showNum$'] > 0x0) {
			this['_banners$'][this['curBannerIndex$']]['hide']();
			this['_banners$'][this['curBannerIndex$']]['showNum$'] = 0x0;
			if (this['bannerIds$']['length'] != 0x0) {
				Laya['timer']['once'](0x64, this, function() {
					this['createBanner$'](!![]);
				} ['bind'](this));
			} else {
				this['showBanner$'](_0x4af0b3, _0x46e1a1, _0x4fb3c8);
			}
		} else {
			this['_banners$'][this['curBannerIndex$']]['show']();
			this['_banners$'][this['curBannerIndex$']]['showNum$']++;
			this['time'] = Date['now']();
		}
	} ['hideBanner$']() {
		this['_needBanner$'] = ![];
		let _0x4919c1 = this['_banners$']['length'];
		while (_0x4919c1 > -0x1, _0x4919c1--) {
			this['_banners$'][_0x4919c1]['hide']();
		}
	} ['_refreshBanner$']() {
		if (this['_needBanner$'] && Date['now']() - this['time'] > this['bannerShowSpacing$']) {
			this['hideBanner$']();
			Laya['timer']['once'](0x64, this, this['showBanner$'], [undefined, undefined, !![]]);
		}
	} ['_resizeBannerPos$'](_0x558b25, _0x48c737, _0x2d0571) {
		if (!_0x558b25['style']['realWidth']) {
			_0x558b25['style']['top'] = Laya['Browser']['clientHeight'] - Math['ceil'](_0x48c737['height']);
			return;
		}
		if (_0x48c737['width'] / _0x48c737['height'] > _0x558b25['style']['realWidth'] / _0x558b25['style']['realHeight']) {
			if (_0x558b25['style']['realHeight'] > _0x48c737['height'] && _0x558b25['style']['realWidth'] > this['MIN_BANNER_WIDTH$']) {
				let _0x1def62 = Math['max'](this['MIN_BANNER_WIDTH$'], _0x558b25['style']['realWidth'] / (_0x558b25['style']['realHeight'] / _0x48c737['height']));
				_0x558b25['style']['width'] = _0x1def62;
			}
		} else {
			if (typeof cc !== 'undefined') _0x558b25['style']['width'] = Math['min'](cc['view']['getFrameSize']()['width'], Math['max'](this['MIN_BANNER_WIDTH$'], _0x48c737['width']));
			else if (typeof Laya !== 'undefined') _0x558b25['style']['width'] = Math['min'](Laya['Browser']['clientWidth'], Math['max'](this['MIN_BANNER_WIDTH$'], _0x48c737['width']));
		}
		let _0x5d0a54 = _0x558b25['style']['realHeight'] / _0x558b25['style']['realWidth'] * _0x558b25['style']['width'];
		if (typeof _0x2d0571['top'] === 'number' && typeof _0x2d0571['bottom'] !== 'number') {
			_0x558b25['style']['top'] = _0x48c737['top'];
		} else if (typeof _0x2d0571['top'] !== 'number' && typeof _0x2d0571['bottom'] === 'number') {
			_0x558b25['style']['top'] = _0x48c737['top'] + _0x48c737['height'] - _0x5d0a54;
		} else {
			_0x558b25['style']['top'] = _0x48c737['top'] + _0x48c737['height'] / 0x2 - _0x5d0a54 / 0x2;
		}
		if (typeof _0x2d0571['left'] === 'number' && typeof _0x2d0571['right'] !== 'number') {
			_0x558b25['style']['left'] = _0x48c737['left'];
		} else if (typeof _0x2d0571['left'] !== 'number' && typeof _0x2d0571['right'] === 'number') {
			_0x558b25['style']['left'] = _0x48c737['left'] + _0x48c737['width'] - _0x558b25['style']['width'];
		} else {
			_0x558b25['style']['left'] = _0x48c737['left'] + _0x48c737['width'] / 0x2 - _0x558b25['style']['width'] / 0x2;
		}
	} ['initInterstitialAd$']() {
		this['createInterstitialAd$']();
	} ['createInterstitialAd$']() {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建插屏广告');
			return;
		}
		if (typeof qq === 'undefined' || !qq['createInterstitialAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法创建插屏广告');
			return;
		}
		if (!this['insertUnitId$']) {
			console['warn'](window['Date']['now'](), '未配置插屏广告ID');
			return;
		}
		this['_curInterstitialAd$'] = qq['createInterstitialAd']({
			'adUnitId': this['insertUnitId$']
		});
		this['_curInterstitialAd$']['onClose'](function() {
			this['createInterstitialAd$']();
		} ['bind'](this));
	} ['showInterstitialAd$']() {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建插屏广告');
			return;
		}
		if (typeof qq === 'undefined' || !qq['createInterstitialAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法创建插屏广告');
			return;
		}
		if (!this['_curInterstitialAd$']) {
			console['warn'](window['Date']['now'](), '请先使用initInterstitialAd$()，预加载插屏广告');
			return;
		}
		this['_curInterstitialAd$'] && this['_curInterstitialAd$']['show']()['catch'](_0x3eac4b => {
			console['error'](_0x3eac4b);
		});
	} ['initVideoAd$']() {
		if (!this['hasVideoInit$']) {
			this['_videoErrorTimes'] = 0x0;
			this['_maxVideoErrorTimes'] = 0x5;
			this['createVideoAd$']();
			this['hasVideoInit$'] = !![];
		}
	} ['createVideoAd$']() {
		console['log']('createVideoAd$');
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建激励式视频');
			return;
		}
		if (typeof qq === 'undefined' || !qq['createRewardedVideoAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法创建激励式视频');
			return;
		}
		if (!this['videoUnitId$']) {
			console['warn'](window['Date']['now'](), '未配置激励式视频ID');
			return;
		}
		if (!this['_videoAd$']) {
			this['_videoAd$'] = qq['createRewardedVideoAd']({
				'adUnitId': this['videoUnitId$']
			});
			this['_videoAd$']['onLoad'](function() {
				console['log'](window['Date']['now'](), '激励式视频加载成功');
				this['_videoErrorTimes'] = 0x0;
			} ['bind'](this));
			this['_videoAd$']['onClose'](function(_0x20b429) {
				console['log'](window['Date']['now'](), '激励式视频关闭');
				if (this['_videoCloseCallback$']) {
					this['_videoCloseCallback$'](_0x20b429 ? _0x20b429['isEnded'] : !![]);
					this['_videoCloseCallback$'] = undefined;
				}
			} ['bind'](this));
			this['_videoAd$']['onError'](function(_0x11034d) {
				console['log'](window['Date']['now'](), '激励式视频加载失败');
				this['_videoErrorTimes']++;
				if (this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
					console['warn'](window['Date']['now'](), '激励式视频加载失败次数过多,\x20停止重试。\x20');
					return;
				}
				console['warn'](window['Date']['now'](), '激励式视频加载失败,\x20重试' + this['_videoErrorTimes']);
				console['warn'](_0x11034d);
				this['_videoAd$']['load']();
			} ['bind'](this));
			this['_videoAd$']['load']();
		}
	} ['showVideoAd$'](_0x5a0290) {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建激励式视频。当做成功回调。');
			_0x5a0290 && _0x5a0290(!![]);
			return;
		}
		if (typeof qq === 'undefined' || !qq['createRewardedVideoAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法播放激励式视频。当做成功回调。');
			_0x5a0290 && _0x5a0290(!![]);
			return;
		}
		if (!this['_videoAd$']) {
			console['error'](window['Date']['now'](), '请先使用initVideoAd$()，预加载激励式视频');
			return;
		}
		if (!this['_videoAd$'] || this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
			_0x5a0290 && _0x5a0290(![]);
			return;
		}
		this['_videoCloseCallback$'] = _0x5a0290;
		this['_videoAd$']['show']();
	} ['showGridAd$'](_0x234714) {
		console['log']('请求显示盒子');
		if (typeof qq === 'undefined' || !qq['createAppBox']) {
			console['warn']('非手Q环境，或者非真机环境，无法显示盒子广告。直接回调关闭事件。');
			_0x234714 && _0x234714();
			return;
		}
		let _0x1ba36a = this;
		_0x1ba36a['onAppBoxClose$'] = _0x234714;
		if (_0x1ba36a['gridUnitIds$']['length'] > 0x0) {
			_0x1ba36a['ad'] = _0x1ba36a['gridUnitIds$']['shift']();
			_0x1ba36a['gridIdArr']['push'](_0x1ba36a['ad']);
		} else {
			for (let _0x86eb8f = 0x0; _0x86eb8f < _0x1ba36a['gridIdArr']['length']; _0x86eb8f++) {
				_0x1ba36a['gridUnitIds$']['push'](_0x1ba36a['gridIdArr'][_0x86eb8f]);
			}
			_0x1ba36a['gridIdArr'] = [];
			_0x1ba36a['ad'] = _0x1ba36a['gridUnitIds$']['shift']();
			_0x1ba36a['gridIdArr']['push'](_0x1ba36a['ad']);
		}
		_0x1ba36a['_appBox$'] = qq['createAppBox']({
			'adUnitId': _0x1ba36a['ad']
		});
		_0x1ba36a['_appBox$']['onClose'](function() {
			console['warn'](window['Date']['now'](), '盒子广告关闭');
			_0x1ba36a['_hideInputBlock$']();
			_0x1ba36a['onAppBoxClose$'] && _0x1ba36a['onAppBoxClose$']();
			_0x1ba36a['onAppBoxClose$'] = undefined;
			_0x1ba36a['_appBox$']['destroy']();
			_0x1ba36a['_appBox$'] = undefined;
		});
		_0x1ba36a['_appBox$']['load']()['then'](function() {
			_0x1ba36a['_appBox$']['show']()['then'](function(_0x4e0376) {
				console['warn'](window['Date']['now'](), '显示盒子广告', _0x4e0376);
				_0x1ba36a['_showInputBlock$']();
			});
		});
	} ['_showInputBlock$']() {
		console['log']('显示盒子遮罩');
		if (Laya['InputBlock$']) {
			Laya['InputBlock$']['active'] = !![];
			Laya['InputBlock$']['visible'] = !![];
		} else {
			let _0x2271f8 = new Laya['Box']();
			_0x2271f8['zOrder'] = 0x3b9ac9ff;
			_0x2271f8['left'] = 0x0;
			_0x2271f8['right'] = 0x0;
			_0x2271f8['top'] = 0x0;
			_0x2271f8['bottom'] = 0x0;
			_0x2271f8['mouseEnabled'] = !![];
			_0x2271f8['on'](Laya['Event']['CLICK'], _0x2271f8, function() {
				console['log']('点击了遮罩层');
			});
			Laya['InputBlock$'] = _0x2271f8;
			Laya['stage']['addChild'](_0x2271f8);
		}
	} ['_hideInputBlock$']() {
		console['log']('隐藏盒子遮罩');
		if (Laya['InputBlock$']) {
			Laya['InputBlock$']['active'] = ![];
			Laya['InputBlock$']['visible'] = ![];
		}
	} ['showToast$'](_0x502c6b) {
		qq['showToast']({
			'title': _0x502c6b,
			'icon': 'success',
			'duration': 0x7d0
		});
	}
}
class PgdkToutiao$ extends Laya['Script'] {
	constructor() {
		super();
		this['appId$'] = null;
		this['isAdActive$'] = !![];
		this['bannerIds$'] = null;
		this['isVideoActive$'] = !![];
		this['videoUnitId$'] = null;
		this['isInsertActive$'] = !![];
		this['insertUnitId$'] = null;
		this['shareId$'] = null;
		this['secret$'] = null;
		this['_banners$'] = [];
		this['loginCode$'] = '';
		this['anonymous_code$'] = '';
		this['recorderMsg'] = undefined;
		this['recordClipIndexList'] = [];
		this['recordVideoRes'] = undefined;
		this['MIN_BANNER_WIDTH$'] = 0xd0;
		this['MIN_BANNER_HEIGHT$'] = 0x80;
	} ['shareAppMessage$']() {
		tt['shareAppMessage']({
			'templateId': this['shareId$'],
			'query': '',
			'success'() {
				if (!window['pgdk$']) return;
				console['log']('分享成功');
			},
			'fail'(_0x165f08) {
				if (!window['pgdk$']) return;
				pgdk$['showToast$']('分享失败');
				console['log']('分享失败');
			}
		});
	} ['onStart']() {
		if (!window['tt']) return;
		pgdk$['startTime$'] = undefined;
		pgdk$['overTime$'] = undefined;
		this['isToutiao'] = tt['getSystemInfoSync']()['appName'] === 'Toutiao' || tt['getSystemInfoSync']()['appName'] === 'devtools';
		this['updateMgr$']();
		this['_login$']();
		if (this['isVideoActive$']) this['initVideoAd$']();
		if (this['isInsertActive$']) this['initInterstitialAd$']();
		this['_refreshBanner$']();
		this['initGameRecorder$']();
		Laya['timer']['loop'](0x64, this, this['_refreshBanner$']);
	} ['updateMgr$']() {
		if (!window['tt'] || !tt['getUpdateManager']) return;
		const _0x331246 = tt['getUpdateManager']();
		_0x331246['onCheckForUpdate'](function(_0x557505) {
			console['log']('onCheckForUpdate', _0x557505['hasUpdate']);
			if (_0x557505['hasUpdate']) {
				tt['showToast']({
					'title': '即将有更新请留意'
				});
			}
		});
		_0x331246['onUpdateReady'](() => {
			tt['showModal']({
				'title': '更新提示',
				'content': '新版本已经准备好，是否立即使用？',
				'success': function(_0x55888e) {
					if (_0x55888e['confirm']) {
						_0x331246['applyUpdate']();
					} else {
						tt['showToast']({
							'icon': 'none',
							'title': '小程序下一次「冷启动」时会使用新版本'
						});
					}
				}
			});
		});
		_0x331246['onUpdateFailed'](() => {
			tt['showToast']({
				'title': '更新失败，下次启动继续...'
			});
		});
	} ['_checkLogin$']() {
		if (typeof tt === 'undefined' || !tt['checkSession']) {
			console['warn']('非头条环境，无法跳转', data);
			return;
		}
		let _0x596079 = this;
		tt['checkSession']({
			'success'() {
				return;
			},
			'fail'() {
				console['log']('session已过期，需要重新登录');
			}
		});
	} ['_login$']() {
		if (typeof tt === 'undefined' || !tt['login']) {
			console['warn']('非头条环境，无法跳转', data);
			return;
		}
		let _0x3bf682 = localStorage['getItem']('sessionKey$');
		if (_0x3bf682) return;
		let _0x493824 = this;
		tt['login']({
			'force': ![],
			'success'(_0x57b0b8) {
				console['log']('头条登录成功...');
				console['log']('login调用成功' + _0x57b0b8['code'] + '\x20' + _0x57b0b8['anonymousCode']);
				_0x493824['loginCode$'] = _0x57b0b8['code'];
				_0x493824['anonymous_code$'] = _0x57b0b8['anonymousCode'];
				_0x493824['getPlatformOpenId$']();
			},
			'fail'(_0x33486f) {
				console['log']('头条登录失败...');
				console['log']('login调用失败');
			}
		});
	} ['getPlatformOpenId$']() {} ['getUserId$']() {
		if (!window['tt']) return '';
		return this['user_Id'];
	} ['onUpdate']() {
		this['_refreshBanner$']();
	} ['navigate2Mini$'](_0x3e3d28, _0x43bc08, _0x5da207, _0x227715) {
		if (!window['tt'] || typeof window['tt']['showMoreGamesModal'] != 'function') {
			return;
		}
		var _0x13408c = _0x3e3d28;
		var _0x12a8f9 = _0x13408c['extraData'] || {};
		_0x12a8f9['appId'] = this['appId$'];
		tt['onMoreGamesModalClose'](function(_0x272511) {
			console['log']('modal\x20closed', _0x272511);
		});
		tt['onNavigateToMiniProgram'](function(_0x55dcee) {
			if (_0x55dcee) {
				console['log'](_0x55dcee['errCode']);
				console['log'](_0x55dcee['errMsg']);
				if (_0x55dcee['errCode'] == 0x0) {
					if (_0x5da207) _0x5da207();
				} else {
					if (fail) _0x227715();
				}
			}
		});
		const _0x244edd = tt['getSystemInfoSync']();
		if (_0x244edd['platform'] !== 'ios') {
			tt['showMoreGamesModal']({
				'appLaunchOptions': [{
					'appId': _0x13408c['appid'],
					'query': _0x13408c['path'],
					'extraData': _0x12a8f9
				}],
				'success'(_0x2072dc) {
					console['log']('showMoreGamesModal\x20success', _0x2072dc['errMsg']);
				},
				'fail'(_0x2160e2) {
					console['log']('showMoreGamesModal\x20fail', _0x2160e2['errMsg']);
				}
			});
		}
	} ['showBanner$'](_0x1019e3, _0x3752bc) {
		if (!this['isToutiao']) return;
		if (!this['isAdActive$']) return;
		this['_needBanner$'] = !![];
		console['log'](window['Date']['now'](), '显示广告');
		if (typeof tt === 'undefined' || !tt['createBannerAd']) return;
		if (this['_banners$']['length'] >= 0x2) {
			this['_hideBanner$']();
		}
		if (this['_banners$']['length'] > 0x0) {
			this['_curBanner$'] = this['_banners$'][0x0];
			this['_curBanner$']['startShowTime$'] = Date['now']();
			this['_curBanner$']['rect$'] = _0x1019e3;
			this['_curBanner$']['widget$'] = _0x3752bc;
			this['_curBanner$']['show']();
			this['_resizeBannerPos$'](this['_curBanner$'], _0x1019e3, _0x3752bc);
		}
		this['_createBanner$'](!![], _0x1019e3, _0x3752bc);
	} ['hideBanner$']() {
		if (!this['isToutiao']) return;
		this['_needBanner$'] = ![];
		this['_hideBanner$']();
	} ['_hideBanner$']() {
		if (!this['isToutiao']) return;
		console['log'](Date['now'](), '隐藏广告');
		if (typeof tt === 'undefined') return;
		if (!this['_curBanner$']) return;
		if (this['_banners$']['length'] === 0x0) return;
		let _0x2599a4 = this['_banners$'][0x0];
		this['_banners$']['splice'](0x0, 0x1);
		_0x2599a4['hide']();
		if (this['_banners$']['length'] >= 0x1 && _0x2599a4['$showTime'] > 0x7530) {
			console['log'](Date['now'](), '销毁广告');
			let _0x533bce = [this['_curBanner$']['$id'], ![], this['_curBanner$']['style']['left'], this['_curBanner$']['style']['top'], this['_curBanner$']['style']['height']];
			this['_curBanner$']['destroy']();
			this['_curBanner$'] = undefined;
			this['__createBanner$'](_0x533bce);
		} else {
			this['_curBanner$'] = undefined;
			this['_banners$']['push'](_0x2599a4);
		}
	} ['_createBanner$'](_0x2f5cf4, _0x33c042, _0x1d1907) {
		if (!this['isToutiao']) return;
		if (typeof tt === 'undefined' || !tt['createBannerAd']) return;
		if (this['bannerIds$']['length'] <= 0x0) return;
		let _0x499afe = Math['floor'](Math['random']() * this['bannerIds$']['length']);
		let _0xccf200 = this['bannerIds$'][_0x499afe];
		this['bannerIds$']['splice'](_0x499afe, 0x1);
		this['__createBanner$']([_0xccf200, _0x2f5cf4, _0x33c042, _0x1d1907]);
	} ['__createBanner$'](_0x273252) {
		if (!this['isToutiao']) return;
		if (!_0x273252) return;
		console['log'](window['Date']['now'](), '创建广告');
		let _0x38fdf8 = _0x273252[0x0];
		let _0x4e8610 = _0x273252[0x1];
		let _0x1d1609 = _0x273252[0x2];
		let _0x2341e4 = _0x273252[0x3];
		let _0x2c8756 = tt['createBannerAd']({
			'adUnitId': _0x38fdf8,
			'style': {
				'left': _0x1d1609['left'],
				'top': _0x1d1609['top'],
				'width': _0x1d1609['width']
			}
		});
		_0x2c8756['id$'] = _0x38fdf8;
		_0x2c8756['onLoad$'] = function() {
			this['_onBannerLoad$'](_0x2c8756, _0x4e8610, _0x1d1609, _0x2341e4);
		} ['bind'](this);
		_0x2c8756['onError$'] = function(_0x37be73) {
			console['warn']('广告加载失败:');
			console['warn'](_0x37be73);
			this['destroy'] && this['destroy']();
			setTimeout(this['__createBanner$']['bind'](this, _0x273252), 0xbb8, _0x273252);
		} ['bind'](this);
		_0x2c8756['onResize$'] = function(_0x29cb2a) {
			this['style']['realWidth'] = _0x29cb2a['width'];
			this['style']['realHeight'] = _0x29cb2a['height'];
		} ['bind'](_0x2c8756);
		_0x2c8756['onLoad'](_0x2c8756['onLoad$']['bind'](_0x2c8756));
		_0x2c8756['onError'](_0x2c8756['onError$']['bind'](_0x2c8756, _0x273252));
		_0x2c8756['onResize'](_0x2c8756['onResize$']['bind'](_0x2c8756));
	} ['_onBannerLoad$'](_0x42527d, _0x5eebbf, _0x2bb81f, _0x12f004) {
		if (!this['isToutiao']) return;
		if (this['_needBanner$'] && _0x5eebbf && !this['_curBanner$']) {
			this['_curBanner$'] = _0x42527d;
			this['_curBanner$']['startShowTime$'] = Date['now']();
			this['_curBanner$']['rect$'] = _0x2bb81f;
			this['_curBanner$']['widget$'] = _0x12f004;
			this['_curBanner$']['show']();
			this['_banners$']['splice'](0x0, 0x0, _0x42527d);
			this['_resizeBannerPos$'](_0x42527d, _0x2bb81f, _0x12f004);
		} else {
			this['_banners$']['push'](_0x42527d);
		}
	} ['_resizeBannerPos$'](_0x219f70, _0x14a867, _0x9adac) {
		if (!this['isToutiao']) return;
		if (_0x14a867['width'] / _0x14a867['height'] > _0x219f70['style']['realWidth'] / _0x219f70['style']['realHeight']) {
			if (_0x219f70['style']['realHeight'] > _0x14a867['height'] && _0x219f70['style']['realWidth'] > this['MIN_BANNER_WIDTH$']) {
				let _0x28dc60 = Math['max'](this['MIN_BANNER_WIDTH$'], _0x219f70['style']['realWidth'] / (_0x219f70['style']['realHeight'] / _0x14a867['height']));
				_0x219f70['style']['width'] = _0x28dc60;
			}
		} else {
			if (typeof cc !== 'undefined') _0x219f70['style']['width'] = Math['min'](cc['view']['getFrameSize']()['width'], Math['max'](this['MIN_BANNER_WIDTH$'], _0x14a867['width']));
			else if (typeof Laya !== 'undefined') _0x219f70['style']['width'] = Math['min'](Laya['Browser']['clientWidth'], Math['max'](this['MIN_BANNER_WIDTH$'], _0x14a867['width']));
		}
		let _0x1805ce = _0x219f70['style']['realHeight'];
		if (typeof _0x9adac['top'] === 'number' && typeof _0x9adac['bottom'] !== 'number') {
			_0x219f70['style']['top'] = _0x14a867['top'];
		} else if (typeof _0x9adac['top'] !== 'number' && typeof _0x9adac['bottom'] === 'number') {
			_0x219f70['style']['top'] = _0x14a867['top'] + _0x14a867['height'] - _0x1805ce;
		} else {
			_0x219f70['style']['top'] = _0x14a867['top'] + _0x14a867['height'] / 0x2 - _0x1805ce / 0x2;
		}
		if (typeof _0x9adac['left'] === 'number' && typeof _0x9adac['right'] !== 'number') {
			_0x219f70['style']['left'] = _0x14a867['left'];
		} else if (typeof _0x9adac['left'] !== 'number' && typeof _0x9adac['right'] === 'number') {
			_0x219f70['style']['left'] = _0x14a867['left'] + _0x14a867['width'] - _0x219f70['style']['realWidth'];
		} else {
			_0x219f70['style']['left'] = _0x14a867['left'] + _0x14a867['width'] / 0x2 - _0x219f70['style']['realWidth'] / 0x2;
		}
	} ['_refreshBanner$']() {
		if (!this['isToutiao']) return;
		if (this['_needBanner$'] && this['_curBanner$']) {
			if (Date['now']() - this['_curBanner$']['startShowTime$'] > this['bannerShowSpacing$']) {
				this['showBanner$'](this['_curBanner$']['rect$'], this['_curBanner$']['widget$']);
				console['log'](window['Date']['now'](), '刷新Banner');
			} else {
				this['_resizeBannerPos$'](this['_curBanner$'], this['_curBanner$']['rect$'], this['_curBanner$']['widget$']);
			}
		}
	} ['initInterstitialAd$']() {
		if (!this['isToutiao']) return;
		this['createInterstitialAd$']();
	} ['createInterstitialAd$']() {
		if (!this['isToutiao']) return;
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建插屏广告');
			return;
		}
		if (typeof tt === 'undefined' || !tt['createInterstitialAd']) {
			console['warn'](window['Date']['now'](), '非头条环境，无法创建插屏广告');
			return;
		}
		if (!this['insertUnitId$']) {
			console['warn'](window['Date']['now'](), '未配置插屏广告ID');
			return;
		}
		this['_curInterstitialAd$'] = tt['createInterstitialAd']({
			'adUnitId': this['insertUnitId$']
		});
		if (!this['_curInterstitialAd$']) return;
		this['_curInterstitialAd$']['onClose'](function() {
			this['createInterstitialAd$']();
		} ['bind'](this));
	} ['showInterstitialAd$']() {
		if (!this['isToutiao']) return;
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建插屏广告');
			return;
		}
		if (typeof tt === 'undefined' || !tt['createInterstitialAd']) {
			console['warn'](window['Date']['now'](), '非头条环境，无法创建插屏广告');
			return;
		}
		if (!this['_curInterstitialAd$']) {
			console['warn'](window['Date']['now'](), '请先使用initInterstitialAd$()，预加载插屏广告');
			return;
		}
		this['_curInterstitialAd$'] && this['_curInterstitialAd$']['show']()['catch'](_0xc5dab => {
			console['error'](_0xc5dab);
		});
	} ['initVideoAd$']() {
		if (!this['hasVideoInit$']) {
			this['_videoErrorTimes'] = 0x0;
			this['_maxVideoErrorTimes'] = 0x5;
			this['createVideoAd$']();
			this['hasVideoInit$'] = !![];
		}
	} ['createVideoAd$']() {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建激励式视频');
			return;
		}
		if (typeof tt === 'undefined' || !tt['createRewardedVideoAd']) {
			console['warn'](window['Date']['now'](), '非头条环境，无法创建激励式视频');
			return;
		}
		if (!this['videoUnitId$']) {
			console['warn'](window['Date']['now'](), '未配置激励式视频ID');
			return;
		}
		if (!this['_videoAd$']) {
			this['_videoAd$'] = tt['createRewardedVideoAd']({
				'adUnitId': this['videoUnitId$']
			});
			this['_videoAd$']['onLoad'](function() {
				this['_videoErrorTimes'] = 0x0;
				console['log'](window['Date']['now'](), '激励式视频加载成功');
			} ['bind'](this));
			this['_videoAd$']['onClose'](function(_0x9ae808) {
				if (this['_videoCloseCallback$']) {
					this['_videoCloseCallback$'](_0x9ae808 ? _0x9ae808['isEnded'] : !![]);
					this['_videoCloseCallback$'] = undefined;
				}
			} ['bind'](this));
			this['_videoAd$']['onError'](function(_0x2e2f2a) {
				this['_videoErrorTimes']++;
				if (this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
					console['warn'](window['Date']['now'](), '激励式视频加载失败次数过多,\x20停止重试。\x20');
					return;
				}
				console['log']('czh\x20视频id');
				console['log'](this['videoUnitId$']);
				console['log'](this['appid$']);
				console['warn'](window['Date']['now'](), '激励式视频加载失败,\x20重试' + this['_videoErrorTimes']);
				console['warn'](_0x2e2f2a);
				this['_videoAd$']['load']();
			} ['bind'](this));
		}
	} ['showVideoAd$'](_0x4f4216) {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建激励式视频。当做成功回调。');
			_0x4f4216 && _0x4f4216(!![]);
			return;
		}
		if (typeof tt === 'undefined' || !tt['createRewardedVideoAd']) {
			console['warn'](window['Date']['now'](), '非头条环境，无法播放激励式视频。当做成功回调。');
			_0x4f4216 && _0x4f4216(!![]);
			return;
		}
		if (!this['_videoAd$']) {
			console['error'](window['Date']['now'](), '请先使用initVideoAd$()，预加载激励式视频');
			return;
		}
		if (!this['_videoAd$'] || this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
			_0x4f4216 && _0x4f4216(![]);
			return;
		}
		this['_videoCloseCallback$'] = _0x4f4216;
		this['_videoAd$']['show']();
	} ['initGameRecorder$']() {
		if (this['recorderMsg']) return;
		this['recorderMsg'] = tt['getGameRecorderManager']();
	} ['recorderStart$'](_0x2494cf, _0x8f6f4d, _0x4202f3) {
		if (!this['recorderMsg']) return;
		let _0x3a7932 = this;
		this['recorderMsg']['onStart'](_0xe2708e => {
			console['log']('录屏开始');
			if (_0x2494cf) _0x2494cf();
		});
		this['recorderMsg']['onStop'](_0x2a1154 => {
			_0x3a7932['recordVideoRes'] = _0x2a1154;
			console['log'](_0x2a1154['videoPath']);
		});
		this['recorderMsg']['onError'](_0x245d58 => {
			console['warn']('视频录制出错');
			if (_0x4202f3) _0x4202f3();
		});
		if (!this['recorderMsg']['start']) return;
		this['recorderMsg']['start']({
			'duration': _0x8f6f4d
		});
	} ['recorderClip$'](_0x27c47c, _0x26d659, _0x3ce141) {
		if (!this['recorderMsg']) return;
		this['recorderMsg']['recordClip']({
			'timeRange': _0x27c47c,
			'success'(_0x486186) {
				console['log'](_0x486186['index']);
				clipIndexList['push'](_0x486186['index']);
				if (_0x26d659) _0x26d659();
			},
			'fail'(_0xdd811b) {
				console['warn']('录屏裁剪失败');
				console['warn'](_0xdd811b);
				if (_0x3ce141) _0x3ce141();
			}
		});
	} ['recorderCliper$']() {
		if (!this['recorderMsg']) return;
		if (!this['recordVideoRes']) return;
		this['recorderMsg']['clipVideo']({
			'path': this['recordVideoRes']['videoPath'],
			'clipRange': this['recordClipIndexList'],
			'success'(_0x5e83cd) {
				console['log'](_0x5e83cd['videoPath']);
			},
			'fail'(_0x3d1451) {
				console['error'](_0x3d1451);
			}
		});
	} ['recorderPause$'](_0x4b1852) {
		if (!this['recorderMsg']) return;
		this['recorderMsg']['onPause'](_0xc79276 => {
			console['log'](_0xc79276['videoPath']);
			if (_0x4b1852) _0x4b1852();
		});
		this['recorderMsg']['pause']();
	} ['recorderResume$'](_0x51310f) {
		if (!this['recorderMsg']) return;
		this['recorderMsg']['onResume'](_0x1bb42b => {
			console['log'](_0x1bb42b['videoPath']);
			if (_0x51310f) _0x51310f();
		});
		this['recorderMsg']['resume']();
	} ['recorderStop$'](_0xd6c3c) {
		if (!this['recorderMsg']) return;
		console['log']('录屏结束');
		this['recorderMsg']['stop']();
	} ['shareRecordVideo$'](_0x1fb64f, _0x3ef029) {
		if (typeof tt === 'undefined' || !tt['shareAppMessage']) return;
		if (!this['recordVideoRes']) return;
		tt['shareAppMessage']({
			'channel': 'video',
			'title': '据说只有2%的人能过第五关',
			'desc': '你的好友们都在玩，赶快加入进来吧!',
			'imageUrl': './share/share1.jpg',
			'templateId': this['shareId$'],
			'query': '',
			'extra': {
				'videoPath': this['recordVideoRes']['videoPath'],
				'videoTopics': ['你的好友们都在玩，赶快加入进来吧', '据说只有2%的人能过第五关']
			},
			'success'() {
				console['log']('分享视频成功');
				if (_0x1fb64f) _0x1fb64f['run']();
				this['recordVideoRes'] = undefined;
			},
			'fail'(_0xfe5a9b) {
				console['log']('分享视频失败');
				if (_0x3ef029) _0x3ef029['run']();
				this['recordVideoRes'] = undefined;
			}
		});
	} ['createMoregameBtn$'](_0x178d44, _0x3f36dd, _0x12d145, _0x488dcf) {
		if (!window['tt'] || typeof window['tt']['createMoreGamesButton'] != 'function') {
			return;
		}
		var _0x245c09 = _0x178d44;
		var _0x30aeb3 = _0x245c09['extraData'] || {};
		_0x30aeb3['appId'] = this['appId$'];
		if (this['moreGamesButton']) {
			this['moreGamesButton']['hide']();
			this['moreGamesButton'] = null;
		}
		this['moreGamesButton'] = tt['createMoreGamesButton']({
			'type': 'image',
			'image': 'zsad/anymore.png',
			'style': {
				'left': _0x3f36dd['left'],
				'top': _0x3f36dd['top'],
				'width': _0x3f36dd['width'],
				'height': _0x3f36dd['height'],
				'lineHeight': 0x28,
				'textColor': '#ffffff',
				'textAlign': 'center',
				'fontSize': 0x0,
				'borderRadius': 0x0,
				'borderWidth': 0x0,
				'borderColor': '#000000'
			},
			'appLaunchOptions': [{
				'appId': _0x245c09['app_id'],
				'query': _0x245c09['path'],
				'extraData': _0x30aeb3
			}],
			'onNavigateToMiniGame'(_0x41796b) {
				console['log']('跳转其他小游戏', _0x41796b);
				if (_0x41796b) {
					if (_0x41796b['errCode'] == 0x0) {
						if (_0x12d145) _0x12d145();
					} else {
						if (_0x488dcf) _0x488dcf();
					}
				}
			}
		});
		this['moreGamesButton']['onTap'](() => {
			console['log']('点击更多游戏');
		});
		this['moreGamesButton']['show']();
	} ['showMoreGamesModal$'](_0x372e54, _0x157bcd, _0x454bc9) {
		if (!window['tt'] || typeof window['tt']['showMoreGamesModal'] != 'function') {
			return;
		}
		var _0x5a24ab = _0x372e54;
		var _0x457cba = _0x5a24ab['extraData'] || {};
		_0x457cba['appId'] = this['appId$'];
		tt['onMoreGamesModalClose'](function(_0x104979) {
			console['log']('modal\x20closed', _0x104979);
		});
		tt['onNavigateToMiniProgram'](function(_0x5a3dc1) {
			if (_0x5a3dc1) {
				console['log'](_0x5a3dc1['errCode']);
				console['log'](_0x5a3dc1['errMsg']);
				if (_0x5a3dc1['errCode'] == 0x0) {
					if (_0x157bcd) _0x157bcd();
				} else {
					if (_0x454bc9) _0x454bc9();
				}
			}
		});
		const _0x524a54 = tt['getSystemInfoSync']();
		if (_0x524a54['platform'] !== 'ios') {
			tt['showMoreGamesModal']({
				'appLaunchOptions': [{
					'appId': _0x5a24ab['app_id'],
					'query': _0x5a24ab['path'],
					'extraData': _0x457cba
				}],
				'success'(_0x50380b) {
					console['log']('showMoreGamesModal\x20success', _0x50380b['errMsg']);
				},
				'fail'(_0x2cd73f) {
					console['log']('showMoreGamesModal\x20fail', _0x2cd73f['errMsg']);
				}
			});
		} else {
			this['showToast$']('IOS暂不支持该功能');
		}
	} ['hideMoreGameBtn$']() {
		if (this['moreGamesButton']) {
			this['moreGamesButton']['hide']();
			this['moreGamesButton'] = null;
		}
	} ['showToast$'](_0x12de22) {
		if (!window['tt'] || typeof window['tt']['showToast'] != 'function') {
			return;
		}
		tt['showToast']({
			'title': _0x12de22,
			'duration': 0x7d0,
			'success'(_0x447882) {
				console['log']('' + _0x447882);
			},
			'fail'(_0x2ecf12) {
				console['log']('showToast调用失败');
			}
		});
	}
}
class PgdkUc$ extends Laya['Script'] {
	constructor() {
		super();
		this['channel$'] = null;
		this['appId$'] = null;
		this['isAdActive$'] = !![];
		this['isVideoActive$'] = null;
		this['sysInfo'] = {};
		this['userId'] = '';
	} ['onStart']() {
		this['init$']();
	} ['showToast$'](_0x4a10b9) {
		if (!window['uc']) return;
		uc['showToast']({
			'content': _0x4a10b9
		});
	} ['init$']() {
		console['log']('czh\x20Uc\x20SDK初始化');
		this['getSceneInfo$']();
		this['curBannerAd$'] = undefined;
		this['curVideoAd$'] = undefined;
		this['curInterstitialAd$'] = undefined;
		this['_initVideo$']();
		this['_initInterstitialAd$']();
	} ['getSceneInfo$']() {
		if (!window['uc']) return;
		uc['getSystemInfo']({
			'success': function(_0x285bf1) {
				this['sysInfo'] = _0x285bf1;
			} ['bind'](this),
			'fail': function(_0x275f8f) {
				console['log']('czh\x20获取系统信息失败');
				console['log'](_0x275f8f);
			} ['bind'](this),
			'complete': function(_0x42c604) {
				console['log']('czh\x20获取系统信息接口调用结束');
				console['log'](_0x42c604);
			} ['bind'](this)
		});
	} ['navigate2Mini$'](_0x4c51d2, _0x1517e5, _0x4b3330, _0x127200) {
		if (pgdk$['dataHandler$']['navigate2Mini$']) {
			pgdk$['dataHandler$']['navigate2Mini$'](_0x4c51d2, _0x1517e5, _0x4b3330, _0x127200);
		} else {
			var _0x5ba28c = _0x4c51d2['extraData'] || {};
			_0x5ba28c['from'] = this['appId$'];
			uc['navigateToMiniGame']({
				'pkgName': _0x4c51d2['id'],
				'extraData': _0x5ba28c
			});
		}
	} ['_createBanner$'](_0x58f7cf) {
		if (!window['uc']) return;
		if (!this['isAdActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建banner广告');
			return;
		}
		if (typeof uc === 'undefined' || !uc['createBannerAd']) {
			console['warn']('czh\x20非uc环境，无法创建激banner广告');
			return;
		}
		let _0x4c4a0e = this['sysInfo']['screenWidth'] > this['sysInfo']['screenHeight'] ? this['sysInfo']['screenHeight'] : this['sysInfo']['screenWidth'];
		let _0x3e2003 = _0x4c4a0e / 1.7;
		let _0x4f12fa = _0x3e2003 * 0xc2 / 0x159;
		this['curBannerAd$'] = uc['createBannerAd']({
			'style': {
				'width': _0x3e2003,
				'height': _0x4f12fa,
				'gravity': 0x7
			}
		});
		this['curBannerAd$']['onLoad'](function(_0x2a7ffb) {
			console['log']('czh\x20banner加载成功');
			var _0x4cb567 = Laya['Browser']['clientHeight'];
			var _0xc953d5 = _0x2a7ffb['width'] / 0x177;
			if (_0x4cb567 < _0x2a7ffb['height']) {
				var _0x31022f = _0x2a7ffb['height'] / _0xc953d5;
				_0x4cb567 = Math['max'](_0x4cb567, _0x2a7ffb['height'] / _0xc953d5 * 0.8);
				_0xc953d5 = _0x4cb567 / _0x31022f;
			} else {
				_0x4cb567 = _0x2a7ffb['height'];
			}
			var _0x1b7d70 = Laya['Browser']['clientHeight'] - Math['ceil'](_0x4cb567);
			if (Laya['Browser']['clientWidth'] * 0x2 < Laya['Browser']['clientHeight']) {
				_0x1b7d70 = Laya['Browser']['clientHeight'] - _0x2a7ffb['height'] - 0x19;
			}
			if (this['curBannerAd$']['style']) {
				if (_0x1b7d70 && this['curBannerAd$']['style']['top']) {
					this['curBannerAd$']['style']['top'] = _0x1b7d70 + 0x1;
				}
				if (this['curBannerAd$']['style']['width']) {
					this['curBannerAd$']['style']['width'] = Math['floor'](0x177 * _0xc953d5);
				}
				if (this['curBannerAd$']['style']['left']) {
					this['curBannerAd$']['style']['left'] = Math['round']((Laya['Browser']['clientWidth'] - 0x177 * _0xc953d5) * 0.5);
				}
			}
			this['curBannerAd$']['show']();
		} ['bind'](this));
		this['curBannerAd$']['onError'](function(_0x11deb6) {
			console['log']('czh\x20banner加载失败');
			console['log'](_0x11deb6);
		});
	} ['showBanner$'](_0x18d5c1, _0xc56452, _0x4bb5c8) {
		this['_showBanner$'](_0x18d5c1, _0xc56452);
	} ['_showBanner$'](_0x35788a, _0xe1fd86) {
		if (!window['uc']) return;
		console['log']('czh\x20展示ucbanner广告');
		if (this['curBannerAd$']) {
			console['log']('czh\x20ucbanner存在');
			this['curBannerAd$']['show']();
		} else {
			this['_createBanner$']({
				'rect': _0x35788a,
				'widget': _0xe1fd86
			});
		}
	} ['hideBanner$']() {
		if (!window['uc']) return;
		if (this['curBannerAd$']) {
			console['log']('隐藏广告');
			this['curBannerAd$']['hide']();
		}
	} ['_initVideo$']() {
		this['_videoErrorTimes'] = 0x0;
		this['_maxVideoErrorTimes'] = 0x5;
		this['onVideoLoadOk'] = ![];
		this['_createVideoAd$']();
		console['log']('czh\x20初始化视频广告');
	} ['_createVideoAd$']() {
		if (!window['uc']) return;
		if (!this['isVideoActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建视频广告');
			return;
		}
		if (typeof uc === 'undefined' || !uc['createRewardVideoAd']) {
			console['warn']('czh\x20非uc环境，无法创建视频广告');
			return;
		}
		if (!this['curVideoAd$'] || JSON['stringify'](this['curVideoAd$']) == '{}') {
			console['log']('czh\x20创建视频广告');
			this['curVideoAd$'] = uc['createRewardVideoAd']({});
			this['curVideoAd$']['onLoad'](function() {
				this['_videoErrorTimes'] = 0x0;
				this['onVideoLoadOk'] = !![];
				console['log']('czh\x20激励式视频加载成功');
			} ['bind'](this));
			this['curVideoAd$']['onClose'](function(_0x2fbf95) {
				console['log']('czh\x20关闭视频');
				if (this['_videoCloseCallback$']) {
					console['log']('czh\x20关闭视频执行回调');
					console['log'](this['_videoCloseCallback$']);
					this['_videoCloseCallback$'](_0x2fbf95 ? _0x2fbf95['isEnded'] : !![]);
					this['_videoCloseCallback$'] = undefined;
				}
			} ['bind'](this));
			this['curVideoAd$']['onError'](function(_0x11a64c) {
				this['_videoErrorTimes']++;
				if (this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
					console['warn']('czh\x20激励式视频加载失败次数过多,\x20停止重试。\x20');
					this['_initVideo$']();
				}
				console['warn']('czh\x20激励式视频加载失败,\x20重试' + this['_videoErrorTimes']);
				console['warn'](JSON['stringify'](_0x11a64c));
				this['curVideoAd$']['load']();
			} ['bind'](this));
			this['curVideoAd$']['load']();
		}
	} ['showVideoAd$'](_0x5bb0cb) {
		console['log'](JSON['stringify'](this['isAdActive$']));
		if (!this['isVideoActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建激励式视频。当做成功回调。');
			_0x5bb0cb && _0x5bb0cb(!![]);
			return;
		}
		if (typeof uc === 'undefined' || !uc['createRewardVideoAd']) {
			console['warn']('czh\x20非uc环境，无法播放激励式视频。当做成功回调。');
			_0x5bb0cb && _0x5bb0cb(!![]);
			return;
		}
		console['log']('czh\x20视频播放');
		console['log'](JSON['stringify'](this['curVideoAd$']));
		if (this['curVideoAd$'] && this['onVideoLoadOk']) {
			this['_videoCloseCallback$'] = _0x5bb0cb;
			this['curVideoAd$']['show']();
			return;
		}
		if (!this['curVideoAd$'] || this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
			this['_novidoTip$']('视频点击频繁，请稍后再试');
			console['log']('czh\x20视频加载失败.........');
			this['_initVideo$']();
			_0x5bb0cb && _0x5bb0cb(![]);
			return;
		}
	} ['_initInterstitialAd$']() {
		this['createInterstitialAd$']();
	} ['createInterstitialAd$']() {
		if (!window['uc']) {
			console['log']('非UC环境，无法创建uc插屏广告');
			return;
		}
		if (!this['isAdActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建uc插屏广告');
			return;
		}
		this['curInterstitialAd$'] = uc['createInterstitialAd']();
		var _0x448837 = this;
		this['curInterstitialAd$']['onLoad'](function() {
			console['log']('czh\x20uc插屏广告加载成功');
		});
		this['curInterstitialAd$']['onError'](function(_0x37beeb) {
			console['log']('czh\x20uc插屏广告加载失败');
			console['log'](_0x37beeb);
		});
	} ['showInterstitialAd$']() {
		if (!window['uc']) return;
		console['log']('czh\x20展示uc插屏广告');
		if (this['curInterstitialAd$']) {
			console['log']('czh\x20uc插屏广告存在');
			this['curInterstitialAd$']['show']();
		} else {}
	} ['getUerId$']() {
		return this['userId'];
	} ['_novidoTip$'](_0x54da13) {
		if (!window['uc']) return;
		uc['showToast']({
			'content': _0x54da13
		});
	} ['shareAppMessage$']() {
		if (!window['uc']) return;
		if (!uc['shareAppMessage']) return;
		uc['shareAppMessage']({
			'query': '',
			'target': '',
			'success': _0x4a048f => {
				console['log']('shareAppMessage\x20share\x20success', JSON['stringify'](_0x4a048f));
			},
			'fail': _0x1bb936 => {
				console['log']('shareAppMessage\x20share\x20fail', JSON['stringify'](_0x1bb936));
			}
		});
	}
}
class PgdkH5$ extends Laya['Script'] {
	constructor() {
		super();
		this['channel$'] = null;
		this['appId$'] = null;
		this['isAdActive$'] = !![];
		this['isVideoActive$'] = null;
		this['sysInfo'] = {};
		this['userId'] = '';
	} ['onStart']() {
		this['init$']();
	} ['init$']() {
		console['log']('czh\x20H5\x20SDK初始化');
		this['canPlayAd$'] = undefined;
		this['remain$'] = undefined;
		this['_initVideo$']();
	} ['hideBanner$']() {} ['showBanner$']() {} ['showGridAd$'](_0x54cfd6) {
		window['h5api']['showRecommend']();
	} ['checkVideoNum$']() {
		if (!window['h5api']) return;
		window['h5api']['canPlayAd'](function(_0x20577f) {
			console['log']('是否可播放广告', _0x20577f['canPlayAd'], '剩余次数', _0x20577f['remain']);
			this['canPlayAd$'] = _0x20577f['canPlayAd'];
			this['remain$'] = _0x20577f['remain'];
		} ['bind'](this));
	} ['_initVideo$']() {
		console['log']('czh\x20初始化视频广告');
		this['checkVideoNum$']();
	} ['showVideoAd$'](_0x28670a) {
		console['log'](JSON['stringify'](this['isAdActive$']));
		if (!this['isVideoActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建激励式视频。当做成功回调。');
			_0x28670a && _0x28670a(!![]);
			return;
		}
		if (typeof window['h5api'] === 'undefined') {
			console['warn']('czh\x20非H5环境，无法播放激励式视频。当做成功回调。');
			_0x28670a && _0x28670a(!![]);
			return;
		}
		window['h5api']['playAd'](function(_0x55f0d1) {
			console['log']('代码:' + _0x55f0d1['code'] + ',消息:' + _0x55f0d1['message']);
			if (_0x55f0d1['code'] === 0x2710) {
				console['log']('开始播放');
			} else if (_0x55f0d1['code'] === 0x2711) {
				console['log']('播放结束');
				_0x28670a && _0x28670a(!![]);
			} else {
				_0x28670a && _0x28670a(![]);
				console['log']('广告异常');
			}
		});
	} ['shareAppMessage$']() {
		if (!window['h5api']) return;
		window['h5api']['share']();
	}
}
class PgdkVivo$ extends Laya['Script'] {
	constructor() {
		super();
		this['sysInfo'] = {};
		this['nativeAds$'] = [];
		this['_banners$'] = [];
		this['userId'] = '';
		this['channel$'] = null;
		this['appId$'] = null;
		this['isAdActive$'] = null;
		this['nativeAdIds$'] = [];
		this['bannerIds$'] = [];
		this['isVideoActive$'] = null;
		this['videoUnitId$'] = null;
		this['isInsertActive$'] = !![];
		this['insertUnitId$'] = null;
		this['platformVersion'] = undefined;
	} ['onStart']() {
		this['bannerStatus$'] = 0x1;
		this['canAdShow$']();
	} ['canAdShow$']() {
		if (typeof qg === 'undefined' || !qg['getSystemInfoSync']) return;
		let _0xc04721 = this;
		qg['getSystemInfo']({
			'success': function(_0x47b303) {
				console['log']('handling\x20success，\x20brand\x20=\x20' + _0x47b303['brand']);
				_0xc04721['platformVersion'] = _0x47b303['platformVersionCode'];
				console['log']('pppppp' + _0x47b303['platformVersionCode']);
				if (_0xc04721['platformVersion'] >= 0x407) {
					_0xc04721['isAdActive$'] = !![];
					_0xc04721['isVideoActive$'] = !![];
					_0xc04721['init$']();
				} else {
					_0xc04721['isAdActive$'] = ![];
					_0xc04721['isVideoActive$'] = ![];
				}
			}
		});
	} ['init$']() {
		console['log']('czh\x20vivoSDK初始化');
		if (!navigator['onLine']) {
			if (pgdk$) pgdk$['showToast$']('断网状态下,会影响游戏体验哦~');
			return;
		}
		this['getSceneInfo$']();
		this['curBannerAd$'] = undefined;
		this['curVideoAd$'] = undefined;
		this['curNativeAd$'] = undefined;
		this['_initVideo$']();
		this['createNativeAds$']();
	} ['_initBgmEven$']() {
		if (typeof qg === 'undefined') return;
		var _0x9437cf = function() {
			AudioManager['getInstance$']()['playMusic'](0x1);
		};
		qg['onShow'](_0x9437cf);
		var _0x23024b = function() {
			AudioManager['getInstance$']()['stopMusic']();
		};
		qg['onHide'](_0x23024b);
	} ['navigate2Mini$'](_0x221f28, _0x3c7aa6, _0x2ed97b, _0x3bfb19) {
		if (pgdk$['dataHandler$']['navigate2Mini$']) {
			pgdk$['dataHandler$']['navigate2Mini$'](_0x221f28, _0x3c7aa6, _0x2ed97b, _0x3bfb19);
		} else {
			var _0x1795bf = _0x221f28['extraData'] || {};
			_0x1795bf['from'] = this['appId$'];
			qg['navigateToMiniGame']({
				'pkgName': _0x221f28['pkg_name'],
				'path': _0x221f28['path'],
				'extraData': _0x1795bf
			});
		}
	} ['getSceneInfo$']() {
		if (!window['qg']) return;
		qg['getSystemInfo']({
			'success': function(_0x371444) {
				console['log']('czh\x20获取系统信息成功');
				this['sysInfo'] = _0x371444;
			} ['bind'](this),
			'fail': function(_0x23b6fd) {
				console['log']('czh\x20获取系统信息失败');
				console['log'](_0x23b6fd);
			} ['bind'](this),
			'complete': function(_0x27a794) {
				console['log']('czh\x20获取系统信息接口调用结束');
				console['log'](_0x27a794);
			} ['bind'](this)
		});
	} ['_createBanner$'](_0x501ee3) {
		if (!window['qg']) return;
		this['bannerStatus$'] = 0x2;
		if (!this['isAdActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建banner广告');
			return;
		}
		if (typeof qg === 'undefined' || !qg['createBannerAd']) {
			console['warn']('czh\x20非vivo环境，无法创建激banner广告');
			return;
		}
		this['bannerId$'] = this['arrayRandom'](this['bannerIds$']);
		if (!this['bannerId$']) {
			console['warn']('czh\x20未配置banner广告ID');
			return;
		}
		var _0xcf93b3 = this['sysInfo']['screenWidth'];
		var _0x3f9889 = this['sysInfo']['screenHeight'];
		console['log']('当前bannerid:', this['bannerId$']);
		console['log']('czh\x20开始创建vivobanner广告');
		this['curBannerAd$'] = qg['createBannerAd']({
			'adUnitId': this['bannerId$'],
			'style': {
				'left': 0x0,
				'top': _0x3f9889 / _0xcf93b3 > 0x2 ? _0x3f9889 - 0x64 : _0x3f9889 - 0x64,
				'width': _0xcf93b3,
				'height': 0x12c
			}
		});
		let _0x3aae8e = this;
		this['curBannerAd$']['onLoad'](function() {
			console['log']('czh\x20banner加载成功');
			_0x3aae8e['bannerStatus$'] = undefined;
			_0x3aae8e['curBannerAd$']['show']();
		});
		this['curBannerAd$']['onError'](function(_0xbecbfc) {
			console['log']('czh\x20banner加载失败');
			console['log'](_0xbecbfc);
		});
	} ['showBanner$'](_0x3b2e73, _0x4d0823) {
		this['_showBanner$'](_0x3b2e73, _0x4d0823);
	} ['_showBanner$'](_0x1e0ea0, _0x3ad7a0) {
		if (!window['qg']) return;
		if (this['bannerStatus$'] == 0x0 || this['bannerStatus$'] == 0x2) return;
		console['log']('czh\x20展示vivobanner广告');
		if (this['curBannerAd$']) {
			console['log']('czh\x20vivobanner存在');
			this['curBannerAd$']['show']();
			this['bannerStatus$'] = 0x0;
		} else {
			this['_createBanner$']({
				'rect': _0x1e0ea0,
				'widget': _0x3ad7a0
			});
		}
	} ['hideBanner$']() {
		if (!window['qg']) return;
		if (this['bannerStatus$'] == 0x1 || this['bannerStatus$'] == 0x2) return;
		if (this['curBannerAd$']) {
			this['curBannerAd$']['hide']();
			console['log']('隐藏banner');
			this['bannerStatus$'] = 0x1;
		} else {
			this['_createBanner$']();
			console['log']('无当前banner，创建banner');
		}
	} ['_initVideo$']() {
		this['_videoErrorTimes'] = 0x0;
		this['_maxVideoErrorTimes'] = 0x5;
		this['curVideoAd$'] = undefined;
		this['onVideoLoadOk'] = ![];
		this['_createVideoAd$']();
		console['log']('czh\x20初始化视频广告');
	} ['_createVideoAd$']() {
		if (!window['qg']) return;
		if (!this['isVideoActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建视频广告');
			return;
		}
		if (typeof qg === 'undefined' || !qg['createRewardedVideoAd']) {
			console['warn']('czh\x20非oppo环境，无法创建视频广告');
			return;
		}
		if (!this['videoUnitId$']) {
			console['warn']('czh\x20未配置视频广告ID');
			return;
		}
		if (!this['curVideoAd$']) {
			console['log']('czh\x20创建视频广告');
			this['curVideoAd$'] = qg['createRewardedVideoAd']({
				'posId': this['videoUnitId$']
			});
			this['curVideoAd$']['onLoad'](function() {
				this['_videoErrorTimes'] = 0x0;
				this['onVideoLoadOk'] = !![];
				console['log']('czh\x20激励式视频加载成功');
			} ['bind'](this));
			this['curVideoAd$']['onClose'](function(_0x45ae02) {
				console['log']('czh\x20关闭视频');
				this['curVideoAd$'] = undefined;
				this['onVideoLoadOk'] = ![];
				AudioManager['getInstance$']()['playMusic'](0x1);
				if (this['_videoCloseCallback$']) {
					console['log']('czh\x20关闭视频执行回调');
					console['log'](this['_videoCloseCallback$']);
					this['_videoCloseCallback$'](_0x45ae02 ? _0x45ae02['isEnded'] : !![]);
					this['_videoCloseCallback$'] = undefined;
				}
			} ['bind'](this));
			this['curVideoAd$']['onError'](function(_0x5612c9) {} ['bind'](this));
			this['curVideoAd$']['load']();
		}
	} ['showVideoAd$'](_0x147d9b) {
		console['log'](JSON['stringify'](this['isAdActive$']));
		if (!this['isVideoActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建激励式视频。当做成功回调。');
			_0x147d9b && _0x147d9b(!![]);
			return;
		}
		if (typeof qg === 'undefined' || !qg['createRewardedVideoAd']) {
			console['warn']('czh\x20非oppo环境，无法播放激励式视频。当做成功回调。');
			_0x147d9b && _0x147d9b(!![]);
			return;
		}
		console['log']('czh\x20视频播放');
		if (this['curVideoAd$'] && this['onVideoLoadOk']) {
			this['_videoCloseCallback$'] = _0x147d9b;
			this['curVideoAd$']['show']();
			AudioManager['getInstance$']()['stopMusic']();
			return;
		} else if (!this['onVideoLoadOk']) {
			this['showToast$']('视频点击频繁，请稍后再试');
			this['_initVideo$']();
			return;
		}
		if (!this['curVideoAd$'] || this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
			this['showToast$']('视频点击频繁，请稍后再试');
			console['log']('czh\x20视频加载失败.........');
			this['_initVideo$']();
			_0x147d9b && _0x147d9b(![]);
			return;
		}
	} ['_shakePhone$']() {
		qg['vibrateShort']({
			'success': function(_0x3475e3) {},
			'fail': function(_0x274d61) {},
			'complete': function(_0x5b9fa8) {}
		});
	} ['_login$']() {
		if (!window['qg']) return;
		qg['login']({
			'success': function(_0x4fc94e) {
				var _0x235520 = JSON['stringify'](_0x4fc94e['data']);
				console['log']('czh\x20登录oppo');
				console['log'](JSON['stringify'](_0x235520));
				this['userId'] = _0x235520['uid'];
			} ['bind'](this),
			'fail': function(_0x42076e) {
				console['log'](JSON['stringify'](_0x42076e));
			} ['bind'](this)
		});
	} ['getUerId$']() {
		return this['userId'];
	} ['showToast$'](_0x3e05d4) {
		if (!window['qg']) return;
		qg['showToast']({
			'message': _0x3e05d4
		});
	} ['getNativeAd$'](_0x4a20f8) {
		return undefined;
	} ['createNativeAds$']() {
		console['log']('czh\x20平台版本号' + this['platformVersion']);
		if (!this['platformVersion'] || this['platformVersion'] < 0x41d) return;
		console['log']('czh\x20原生广告id');
		let _0x269059 = this['arrayRandom'](this['nativeAdIds$']);
		this['_createNativeAd$'](_0x269059);
	} ['_createNativeAd$'](_0x559c74) {
		console['log']('czh\x20创建原生广告');
		if (!window['qg']) return;
		if (!this['isAdActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建原生广告');
			return;
		}
		if (!qg['createNativeAd']) {
			console['warn']('czh\x20非oppo环境，无法创建原生广告');
			return;
		}
		if (!_0x559c74) {
			console['warn']('czh\x20未配置原生广告ID');
			return;
		}
		console['log']('czh\x20创建原生广告1');
		console['log'](JSON['stringify'](_0x559c74));
		let _0x14664e = undefined;
		try {
			_0x14664e = qg['createNativeAd']({
				'posId': _0x559c74
			});
		} catch (_0x464dad) {
			console['log']('czh\x20原生广告load.....');
		}
		_0x14664e['onLoad'](function(_0x29eae4) {
			console['log']('czh\x20原生广告加载成功3');
			console['log'](JSON['stringify'](_0x29eae4));
			this['nativeAds$'] = _0x29eae4['adList'];
			this['curNativeAd$'] = _0x14664e;
			this['loadNativelogo$']();
		} ['bind'](this));
		_0x14664e['onError'](function(_0x451d7f) {
			console['warn']('czh\x20原生广告加载失败4:');
			console['warn'](JSON['stringify'](_0x451d7f));
			setTimeout(this['_createNativeAd$']['bind'](this), 0xbb8);
		} ['bind'](this));
		console['log']('czh\x20原生广告load2');
		console['log'](JSON['stringify'](_0x14664e));
		_0x14664e['load']();
		this['curNativeAd$'] = _0x14664e;
	} ['getNativeAdData$']() {
		console['log']('czh\x20获取原生广告数据');
		console['log'](JSON['stringify'](this['nativeAds$']));
		return this['nativeAds$']['pop']();
	} ['randomInt'](_0x8453dc, _0x30c78b) {
		return Math['floor'](Math['random']() * (_0x30c78b - _0x8453dc) + _0x8453dc);
	} ['arrayRandom'](_0xc3a882) {
		var _0x50a1bc = this['randomInt'](0x0, _0xc3a882['length']);
		return _0xc3a882[_0x50a1bc];
	} ['loadNativelogo$']() {
		if (this['nativeAds$']['length'] <= 0x0) return;
		this['nativeLogoArr'] = [];
		let _0x2ebdd3 = this['nativeAds$']['length'];
		let _0x217f3d;
		let _0x10a77f;
		let _0x56b545;
		while (--_0x2ebdd3 > -0x1) {
			_0x217f3d = this['nativeAds$'][_0x2ebdd3];
			if (!_0x217f3d['imgUrlList']) continue;
			_0x10a77f = _0x217f3d['imgUrlList'];
			_0x56b545 = this['arrayRandom'](_0x10a77f);
			this['setNativeLogo$'](_0x56b545, _0x217f3d);
		}
	} ['setNativeLogo$'](_0x135477, _0x2dbf44) {
		Laya['loader']['load'](_0x135477, Laya['Handler']['create'](this, _0x5ae2d2 => {
			_0x2dbf44['logoImg$'] = _0x135477;
		}));
	} ['nativeClick$'](_0x301625) {
		if (!this['curNativeAd$']) {
			console['log']('czh\x20没有创建原生广告');
			return;
		}
		console['log']('czh\x20原生广告点击');
		this['curNativeAd$']['reportAdShow']({
			'adId': _0x301625
		});
		this['curNativeAd$']['reportAdClick']({
			'adId': _0x301625
		});
		if (this['nativeAds$']['length'] <= 0x0) {
			this['curNativeAd$'] = undefined;
			this['nativeAds$'] = [];
			this['createNativeAds$']();
		}
	} ['closeNativeAd$'](_0x414889) {
		if (!this['curNativeAd$']) {
			console['log']('czh\x20没有创建原生广告');
			return;
		}
		this['curNativeAd$']['reportAdShow']({
			'adId': _0x414889
		});
		if (this['nativeAds$']['length'] <= 0x0) {
			this['curNativeAd$'] = undefined;
			this['nativeAds$'] = [];
			this['createNativeAds$']();
		}
	} ['_createInterstitialAd$']() {
		if (!window['qg']) return;
		if (!this['isInsertActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建插屏广告');
			return;
		}
		if (typeof qg === 'undefined' || !qg['createInsertAd']) {
			console['warn']('czh\x20非oppo环境，无法创建插屏广告');
			return;
		}
		if (!this['insertUnitId$']) {
			console['warn']('czh\x20未配置插屏广告ID');
			return;
		}
		console['log']('czh\x20创建插屏广告');
		let _0x1a48ff;
		try {
			_0x1a48ff = qg['createInsertAd']({
				'posId': this['insertUnitId$']
			});
		} catch (_0x96fc15) {
			console['log']('czh\x20插屏广告fail');
		}
		_0x1a48ff['onClose'](function() {
			_0x1a48ff['destroy']();
			this['curInterstitialAd$'] = null;
			this['_createInterstitialAd$']();
			pgdk$['showBanner$'](null, null);
		});
		_0x1a48ff['onLoad'](function() {
			console['log']('czh\x20插屏广告加载成功');
			this['curInterstitialAd$'] = _0x1a48ff;
		} ['bind'](this));
		_0x1a48ff['onError'](function(_0x4f4473) {
			console['warn']('czh\x20插屏广告加载失败:');
			console['warn'](JSON['stringify'](_0x4f4473));
			setTimeout(this['_createInterstitialAd$']['bind'](this), 0xbb8);
		} ['bind'](this));
		_0x1a48ff['load']();
	} ['showInterstitialAd$']() {
		console['log'](JSON['stringify'](this['isInsertActive$']));
		if (!this['isInsertActive$']) {
			console['warn']('czh\x20广告组未开通，无法创建插屏广告');
			return;
		}
		if (typeof qg === 'undefined' || !qg['createInsertAd']) {
			console['warn']('czh\x20非oppo环境，无法展示插屏广告。');
			return;
		}
		console['log']('czh\x20展示插屏广告');
		console['log'](JSON['stringify'](this['curInterstitialAd$']));
		if (this['curInterstitialAd$']) {
			pgdk$['hideBanner$']();
			this['curInterstitialAd$']['show']();
			this['curInterstitialAd$'] = null;
			return;
		} else if (!this['curInterstitialAd$']) {
			this['_createInterstitialAd$']();
			return;
		}
	} ['reportMonitor$']() {
		if (!window['qg']) return;
		qg['reportMonitor'] && qg['reportMonitor']('game_scene', 0x0);
	}
}
class Pgdkwx$ extends Laya['Script'] {
	constructor() {
		super();
		this['_banners$'] = [];
		this['_gridAds$'] = [];
		this['MIN_BANNER_WIDTH$'] = 0x12c;
		this['MIN_BANNER_HEIGHT$'] = 0x7a;
	} ['onStart']() {
		if (this['isVideoActive$']) this['initVideoAd$']();
		if (this['isInsertActive$']) this['initInterstitialAd$']();
		this['_refreshBanner$']();
	} ['onUpdate']() {
		this['_refreshBanner$']();
		this['_refreshGridAd$']();
	} ['navigate2Mini$'](_0x46757b, _0x171944, _0x388df7, _0xde263c) {
		if (typeof wx === 'undefined') {
			console['warn']('非微信环境，无法跳转', _0x46757b);
			return;
		}
		switch (this['channel$']) {
			case 'zs':
				_0xde263c = function() {
					if (!_0x171944 || _0x171944['indexOf']('游戏中心') === -0x1) PgGameCenter$['create']();
				};
				sdk['navigate2Mini'](_0x46757b, pgdk$['openid$'], _0x388df7, _0xde263c);
				break;
			default:
				this['_pgNav$'](_0x46757b, _0x171944, _0x388df7, _0xde263c);
				break;
		}
	} ['_pgNav$'](_0x5501c8, _0xe1acb8, _0xf162c3, _0x2eb10d) {
		if (typeof wx === 'undefined') {
			console['warn']('非微信环境，无法跳转', _0x5501c8);
			return;
		}
		if (wx['navigateToMiniProgram'] && _0x5501c8['appid']) {
			wx['navigateToMiniProgram']({
				'appId': _0x5501c8['appid'],
				'path': _0x5501c8['path'],
				'fail': function(_0x1e44b3) {
					_0x1e44b3 && console['log'](_0x1e44b3['errMsg']);
					if (_0x1e44b3 && _0x1e44b3['errMsg'] && _0x1e44b3['errMsg']['indexOf']('cancel') !== -0x1) {
						console['debug']('取消导出');
						_0x2eb10d && _0x2eb10d();
					}
				},
				'success': function() {
					_0xf162c3 && _0xf162c3();
				}
			});
		}
	} ['showBanner$'](_0x3c90da, _0x38cc3d) {
		if (!this['isAdActive$']) return;
		if (!pgdk$['isParamGot$']) {
			setTimeout(this['showBanner$']['bind'](this, _0x3c90da, _0x38cc3d), 0x3e8);
			return;
		}
		if (pgdk$['replaceBannerWithGridAd$']) {
			this['showGridAd$'](_0x3c90da, _0x38cc3d);
			return;
		}
		this['_needBanner$'] = !![];
		if (typeof wx === 'undefined' || !wx['createBannerAd']) return;
		if (this['_banners$']['length'] >= 0x2) {
			this['_hideBanner$']();
		}
		if (this['_banners$']['length'] > 0x0) {
			this['_curBanner$'] = this['_banners$'][0x0];
			this['_curBanner$']['startShowTime$'] = Date['now']();
			this['_curBanner$']['rect$'] = _0x3c90da;
			this['_curBanner$']['widget$'] = _0x38cc3d;
			this['_curBanner$']['show']();
			this['_resizeBannerPos$'](this['_curBanner$'], _0x3c90da, _0x38cc3d);
			console['log'](window['Date']['now'](), '显示广告', this['_curBanner$']['id$']);
		}
		this['_createBanner$'](!![], _0x3c90da, _0x38cc3d);
	} ['hideBanner$']() {
		if (!pgdk$['isParamGot$']) {
			setTimeout(this['hideBanner$']['bind'](this), 0x3e8);
			return;
		}
		if (pgdk$['replaceBannerWithGridAd$']) {
			this['hideGridAd$']();
			return;
		}
		this['_needBanner$'] = ![];
		this['_hideBanner$']();
	} ['_hideBanner$']() {
		console['log'](Date['now'](), '隐藏广告');
		if (typeof wx === 'undefined') return;
		if (!this['_curBanner$']) return;
		if (this['_banners$']['length'] === 0x0) return;
		let _0x8b09ea = this['_banners$']['removeAt$'](0x0);
		_0x8b09ea['hide']();
		let _0x1da362 = pgdk$['getPgCfg$']('adIntervals') || 0x3b9ac9ff;
		_0x1da362 = 0x3b9ac9ff;
		if (this['_banners$']['length'] >= 0x1 && _0x8b09ea['showTime$'] > _0x1da362) {
			console['log'](Date['now'](), '销毁广告');
			let _0x440268 = [this['_curBanner$']['id$'], ![], this['_curBanner$']['style']['left'], this['_curBanner$']['style']['top'], this['_curBanner$']['style']['height']];
			this['_curBanner$']['destroy']();
			this['_curBanner$'] = undefined;
			this['__createBanner$'](_0x440268);
		} else {
			this['_curBanner$'] = undefined;
			this['_banners$']['push'](_0x8b09ea);
		}
	} ['_createBanner$'](_0x26cdb8, _0x565d14, _0x1ab808) {
		if (typeof wx === 'undefined' || !wx['createBannerAd']) return;
		if (this['bannerIds$']['length'] <= 0x0) return;
		let _0x1b1e21 = this['bannerIds$']['removeAt$'](Math['floor'](Math['random']() * this['bannerIds$']['length']));
		this['__createBanner$']([_0x1b1e21, _0x26cdb8, _0x565d14, _0x1ab808]);
	} ['__createBanner$'](_0x1819a1) {
		if (!_0x1819a1) return;
		console['log'](window['Date']['now'](), '创建广告');
		let _0x26b8ed = _0x1819a1[0x0];
		let _0x1edd74 = _0x1819a1[0x1];
		let _0x538d6d = _0x1819a1[0x2];
		let _0x3d6b39 = _0x1819a1[0x3];
		let _0x141431 = wx['createBannerAd']({
			'adUnitId': _0x26b8ed,
			'style': {
				'left': _0x538d6d['left'],
				'top': _0x538d6d['top'],
				'width': _0x538d6d['width']
			}
		});
		_0x141431['id$'] = _0x26b8ed;
		_0x141431['onLoad$'] = function() {
			this['_onBannerLoad$'](_0x141431, _0x1edd74, _0x538d6d, _0x3d6b39);
		} ['bind'](this);
		_0x141431['onError$'] = function(_0x332bd8) {
			console['warn']('广告加载失败:', _0x332bd8);
			_0x141431['destroy'] && _0x141431['destroy']();
			setTimeout(this['__createBanner$']['bind'](this, _0x1819a1), 0xbb8);
		} ['bind'](this);
		_0x141431['onLoad'](_0x141431['onLoad$']['bind'](_0x141431));
		_0x141431['onError'](_0x141431['onError$']['bind'](_0x141431, _0x1819a1));
	} ['_onBannerLoad$'](_0x297f93, _0x21f63d, _0x3159c2, _0x3ae689) {
		_0x297f93['showTime$'] = 0x0;
		if (this['_needBanner$'] && _0x21f63d && !this['_curBanner$']) {
			this['_curBanner$'] = _0x297f93;
			this['_curBanner$']['rect$'] = _0x3159c2;
			this['_curBanner$']['widget$'] = _0x3ae689;
			this['_curBanner$']['show']();
			this['_banners$']['insert$'](0x0, _0x297f93);
			this['_resizeBannerPos$'](_0x297f93, _0x3159c2, _0x3ae689);
			console['log'](window['Date']['now'](), '显示广告', this['_curBanner$']['id$']);
		} else {
			this['_banners$']['push'](_0x297f93);
		}
	} ['_resizeBannerPos$'](_0x2f1935, _0x35bdca, _0x151e07) {
		if (isNaN(_0x2f1935['style']['top']) || isNaN(_0x2f1935['style']['left']) || isNaN(_0x2f1935['style']['width'])) {
			_0x2f1935['style']['top'] = _0x35bdca['top'];
			_0x2f1935['style']['left'] = _0x35bdca['left'];
			_0x2f1935['style']['width'] = _0x35bdca['width'];
		}
		if (_0x35bdca['width'] / _0x35bdca['height'] > _0x2f1935['style']['realWidth'] / _0x2f1935['style']['realHeight']) {
			if (_0x2f1935['style']['realHeight'] > _0x35bdca['height'] && _0x2f1935['style']['realWidth'] > this['MIN_BANNER_WIDTH$']) {
				let _0xfb29d4 = Math['max'](this['MIN_BANNER_WIDTH$'], _0x2f1935['style']['realWidth'] / (_0x2f1935['style']['realHeight'] / _0x35bdca['height']));
				_0x2f1935['style']['width'] = _0xfb29d4;
			}
		} else {
			if (typeof cc !== 'undefined') _0x2f1935['style']['width'] = Math['min'](cc['view']['getFrameSize']()['width'], Math['max'](this['MIN_BANNER_WIDTH$'], _0x35bdca['width']));
			else if (typeof Laya !== 'undefined') _0x2f1935['style']['width'] = Math['min'](Laya['Browser']['clientWidth'], Math['max'](this['MIN_BANNER_WIDTH$'], _0x35bdca['width']));
		}
		let _0x247700 = _0x2f1935['style']['realHeight'] / _0x2f1935['style']['realWidth'] * _0x2f1935['style']['width'];
		if (typeof _0x151e07['top'] === 'number' && typeof _0x151e07['bottom'] !== 'number') {
			_0x2f1935['style']['top'] = _0x35bdca['top'];
		} else if (typeof _0x151e07['top'] !== 'number' && typeof _0x151e07['bottom'] === 'number') {
			_0x2f1935['style']['top'] = _0x35bdca['top'] + _0x35bdca['height'] - _0x247700;
		} else {
			_0x2f1935['style']['top'] = _0x35bdca['top'] + _0x35bdca['height'] / 0x2 - _0x247700 / 0x2;
		}
		if (typeof _0x151e07['left'] === 'number' && typeof _0x151e07['right'] !== 'number') {
			_0x2f1935['style']['left'] = _0x35bdca['left'];
		} else if (typeof _0x151e07['left'] !== 'number' && typeof _0x151e07['right'] === 'number') {
			_0x2f1935['style']['left'] = _0x35bdca['left'] + _0x35bdca['width'] - _0x2f1935['style']['width'];
		} else {
			_0x2f1935['style']['left'] = _0x35bdca['left'] + _0x35bdca['width'] / 0x2 - _0x2f1935['style']['width'] / 0x2;
		}
	} ['_refreshBanner$']() {
		this['_curBanner$'] && (this['_curBanner$']['showTime$'] += Laya['timer']['delta']);
		if (this['_needBanner$'] && this['_curBanner$']) {
			let _0x40a9c7 = pgdk$['getPgCfg$']('adIntervals') || 0x3b9ac9ff;
			if (!pgdk$['canTrick$']()) _0x40a9c7 = Math['max'](0x7530, _0x40a9c7);
			if (this['_curBanner$']['showTime$'] > _0x40a9c7) {
				this['_curBanner$']['showTime$'] = 0x0;
				this['showBanner$'](this['_curBanner$']['rect$'], this['_curBanner$']['widget$']);
				console['log'](window['Date']['now'](), '刷新Banner');
			} else {
				this['_resizeBannerPos$'](this['_curBanner$'], this['_curBanner$']['rect$'], this['_curBanner$']['widget$']);
			}
		}
	} ['initInterstitialAd$']() {
		this['createInterstitialAd$']();
	} ['createInterstitialAd$']() {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建插屏广告');
			return;
		}
		if (typeof wx === 'undefined' || !wx['createInterstitialAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法创建插屏广告');
			return;
		}
		if (!this['insertUnitId$']) {
			console['warn'](window['Date']['now'](), '未配置插屏广告ID');
			return;
		}
		this['_curInterstitialAd$'] = wx['createInterstitialAd']({
			'adUnitId': this['insertUnitId$']
		});
		this['_curInterstitialAd$']['onClose'](function() {
			this['createInterstitialAd$']();
		} ['bind'](this));
	} ['showInterstitialAd$']() {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建插屏广告');
			return;
		}
		if (typeof wx === 'undefined' || !wx['createInterstitialAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法创建插屏广告');
			return;
		}
		if (!this['_curInterstitialAd$']) {
			console['warn'](window['Date']['now'](), '请先使用initInterstitialAd$()，预加载插屏广告');
			return;
		}
		this['_curInterstitialAd$'] && this['_curInterstitialAd$']['show']()['catch'](_0x1d3aa5 => {
			console['error'](_0x1d3aa5);
		});
	} ['initVideoAd$']() {
		if (!this['hasVideoInit$']) {
			this['_videoErrorTimes'] = 0x0;
			this['_maxVideoErrorTimes'] = 0x5;
			this['createVideoAd$']();
			this['hasVideoInit$'] = !![];
		}
	} ['createVideoAd$']() {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建激励式视频');
			return;
		}
		if (typeof wx === 'undefined' || !wx['createRewardedVideoAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法创建激励式视频');
			return;
		}
		if (!this['videoUnitId$']) {
			console['warn'](window['Date']['now'](), '未配置激励式视频ID');
			return;
		}
		if (!this['_videoAd$']) {
			this['_videoAd$'] = wx['createRewardedVideoAd']({
				'adUnitId': this['videoUnitId$']
			});
			this['_videoAd$']['onLoad'](function() {
				this['_videoErrorTimes'] = 0x0;
				console['log'](window['Date']['now'](), '激励式视频加载成功');
			} ['bind'](this));
			this['_videoAd$']['onClose'](function(_0x503eb7) {
				if (this['_videoCloseCallback$']) {
					this['_videoCloseCallback$'](_0x503eb7 ? _0x503eb7['isEnded'] : !![]);
					this['_videoCloseCallback$'] = undefined;
				}
			} ['bind'](this));
			this['_videoAd$']['onError'](function(_0x145018) {
				this['_videoErrorTimes']++;
				if (this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
					console['warn'](window['Date']['now'](), '激励式视频加载失败次数过多,\x20停止重试。\x20');
					return;
				}
				console['warn'](window['Date']['now'](), '激励式视频加载失败,\x20重试' + this['_videoErrorTimes']);
				console['warn'](_0x145018);
				this['_videoAd$']['load']();
			} ['bind'](this));
		}
	} ['showVideoAd$'](_0x1eeadb) {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建激励式视频。当做成功回调。');
			_0x1eeadb && _0x1eeadb(!![]);
			return;
		}
		if (typeof wx === 'undefined' || !wx['createRewardedVideoAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法播放激励式视频。当做成功回调。');
			_0x1eeadb && _0x1eeadb(!![]);
			return;
		}
		if (!this['_videoAd$']) {
			console['error'](window['Date']['now'](), '请先使用initVideoAd$()，预加载激励式视频');
			return;
		}
		if (!this['_videoAd$'] || this['_videoErrorTimes'] >= this['_maxVideoErrorTimes']) {
			_0x1eeadb && _0x1eeadb(![]);
			return;
		}
		this['_videoCloseCallback$'] = _0x1eeadb;
		this['_videoAd$']['show']();
	} ['createGridAd$'](_0x35fc2f, _0x16bc49, _0x39c32f) {
		if (typeof wx === 'undefined' || !wx['createGridAd']) return;
		if (!this['gridIds$'] || this['gridIds$']['length'] <= 0x0) return;
		let _0x909bd3 = this['gridIds$']['removeAt$'](Math['floor'](Math['random']() * this['gridIds$']['length']));
		this['_createGridAd$'](_0x909bd3, _0x35fc2f, _0x16bc49, _0x39c32f);
	} ['_createGridAd$'](_0x399ad2, _0x186a7d, _0x3ede46, _0x1f7551) {
		if (typeof wx === 'undefined' || !wx['createGridAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法创建格子广告');
			return;
		}
		let _0x3e0b51 = wx['createGridAd']({
			'adUnitId': _0x399ad2,
			'adTheme': 'white',
			'gridCount': 0x5,
			'style': {
				'left': _0x3ede46['left'],
				'top': _0x3ede46['top'],
				'width': _0x3ede46['width'],
				'opacity': 0.8
			}
		});
		_0x3e0b51['id$'] = _0x399ad2;
		_0x3e0b51['onLoad'](function() {
			console['log'](window['Date']['now'](), '格子广告加载成功');
			this['_onGridAdLoad$'](_0x3e0b51, _0x186a7d, _0x3ede46, _0x1f7551);
		} ['bind'](this));
		_0x3e0b51['onError'](function(_0x33d098) {
			console['warn'](window['Date']['now'](), '格子广告加载失败', _0x33d098);
			_0x3e0b51['destroy'] && _0x3e0b51['destroy']();
			setTimeout(this['_createGridAd$']['bind'](this, _0x399ad2, _0x186a7d, _0x3ede46, _0x1f7551), 0xbb8);
		} ['bind'](this));
	} ['_onGridAdLoad$'](_0x482553, _0x9da241, _0x327397, _0x298c76) {
		_0x482553['showTime$'] = 0x0;
		if (this['_needGridAd$'] && _0x9da241 && !this['_curGridAd$']) {
			this['_curGridAd$'] = _0x482553;
			this['_curGridAd$']['rect$'] = _0x327397;
			this['_curGridAd$']['widget$'] = _0x298c76;
			this['_curGridAd$']['show']();
			this['_gridAds$']['insert$'](0x0, _0x482553);
			this['_resizeGridAd$'](_0x482553, _0x327397, _0x298c76);
			console['log'](Date['now'](), '显示格子广告', this['_curGridAd$']['id$']);
		} else {
			this['_gridAds$']['push'](_0x482553);
		}
	} ['showGridAd$'](_0x293c0c, _0x6781ba) {
		if (!this['isAdActive$']) {
			console['warn'](window['Date']['now'](), '流量主未开通，无法创建格子广告。当做成功回调。');
			return;
		}
		if (typeof wx === 'undefined' || !wx['createRewardedVideoAd']) {
			console['warn'](window['Date']['now'](), '非微信环境，无法播放格子广告。当做成功回调。');
			return;
		}
		this['_needGridAd$'] = !![];
		if (this['_gridAds$']['length'] >= 0x2) {
			this['_hideGridAd$']();
		}
		if (this['_gridAds$']['length'] > 0x0) {
			this['_curGridAd$'] = this['_gridAds$'][0x0];
			this['_curGridAd$']['startShowTime$'] = Date['now']();
			this['_curGridAd$']['rect$'] = _0x293c0c;
			this['_curGridAd$']['widget$'] = _0x6781ba;
			this['_curGridAd$']['show']();
			this['_resizeGridAd$'](this['_curGridAd$'], _0x293c0c, _0x6781ba);
			console['log'](Date['now'](), '显示格子广告', this['_curGridAd$']['id$']);
		}
		this['createGridAd$'](!![], _0x293c0c, _0x6781ba);
	} ['hideGridAd$']() {
		this['_needGridAd$'] = ![];
		this['_hideGridAd$']();
	} ['_hideGridAd$']() {
		console['log'](Date['now'](), '隐藏格子广告');
		if (typeof wx === 'undefined') return;
		if (!this['_curGridAd$']) return;
		if (this['_gridAds$']['length'] === 0x0) return;
		let _0x4adf8f = this['_gridAds$']['removeAt$'](0x0);
		_0x4adf8f['hide']();
		let _0x65862b = pgdk$['getPgCfg$']('adIntervals') || 0x3b9ac9ff;
		_0x65862b = 0x3b9ac9ff;
		if (this['_gridAds$']['length'] >= 0x1 && _0x4adf8f['showTime$'] > _0x65862b) {
			console['log'](Date['now'](), '销毁格子广告');
			let _0x33ccc4 = _0x4adf8f['id$'];
			let _0x4cd2e0 = _0x4adf8f['rect$'];
			let _0x5c2c22 = _0x4adf8f['widget$'];
			this['_curGridAd$']['destroy'] && this['_curGridAd$']['destroy']();
			this['_curGridAd$'] = undefined;
			this['_createGridAd$'](_0x33ccc4, ![], _0x4cd2e0, _0x5c2c22);
		} else {
			this['_curGridAd$'] = undefined;
			this['_gridAds$']['push'](_0x4adf8f);
		}
	} ['_resizeGridAd$']() {
		let _0x335760 = this['_curGridAd$'];
		let _0x18c40a = _0x335760['rect$'];
		let _0x35b0dc = _0x335760['widget$'];
		if (!_0x18c40a || !_0x35b0dc) return;
		if (isNaN(_0x335760['style']['top']) || isNaN(_0x335760['style']['left']) || isNaN(_0x335760['style']['width'])) {
			_0x335760['style']['top'] = _0x18c40a['top'];
			_0x335760['style']['left'] = _0x18c40a['left'];
			_0x335760['style']['width'] = _0x18c40a['width'];
		}
		if (_0x18c40a['width'] / _0x18c40a['height'] > _0x335760['style']['realWidth'] / _0x335760['style']['realHeight']) {
			if (_0x335760['style']['realHeight'] > _0x18c40a['height'] && _0x335760['style']['realWidth'] > this['MIN_BANNER_WIDTH$']) {
				let _0x38a3ae = Math['max'](this['MIN_BANNER_WIDTH$'], _0x335760['style']['realWidth'] / (_0x335760['style']['realHeight'] / _0x18c40a['height']));
				_0x335760['style']['width'] = _0x38a3ae;
			}
		} else {
			if (typeof cc !== 'undefined') _0x335760['style']['width'] = Math['min'](cc['view']['getFrameSize']()['width'], Math['max'](this['MIN_BANNER_WIDTH$'], _0x18c40a['width']));
			else if (typeof Laya !== 'undefined') _0x335760['style']['width'] = Math['min'](Laya['Browser']['clientWidth'], Math['max'](this['MIN_BANNER_WIDTH$'], _0x18c40a['width']));
		}
		let _0x4b21d2 = _0x335760['style']['realHeight'] / _0x335760['style']['realWidth'] * _0x335760['style']['width'];
		if (typeof _0x35b0dc['top'] === 'number' && typeof _0x35b0dc['bottom'] !== 'number') {
			_0x335760['style']['top'] = _0x18c40a['top'];
		} else if (typeof _0x35b0dc['top'] !== 'number' && typeof _0x35b0dc['bottom'] === 'number') {
			_0x335760['style']['top'] = _0x18c40a['top'] + _0x18c40a['height'] - _0x4b21d2;
		} else {
			_0x335760['style']['top'] = _0x18c40a['top'] + _0x18c40a['height'] / 0x2 - _0x4b21d2 / 0x2;
		}
		if (typeof _0x35b0dc['left'] === 'number' && typeof _0x35b0dc['right'] !== 'number') {
			_0x335760['style']['left'] = _0x18c40a['left'];
		} else if (typeof _0x35b0dc['left'] !== 'number' && typeof _0x35b0dc['right'] === 'number') {
			_0x335760['style']['left'] = _0x18c40a['left'] + _0x18c40a['width'] - _0x335760['style']['width'];
		} else {
			_0x335760['style']['left'] = _0x18c40a['left'] + _0x18c40a['width'] / 0x2 - _0x335760['style']['width'] / 0x2;
		}
	} ['_refreshGridAd$']() {
		this['_curGridAd$'] && (this['_curGridAd$']['showTime$'] += Laya['timer']['delta']);
		if (this['_needGridAd$'] && this['_curGridAd$']) {
			this['_resizeGridAd$']();
		}
	}
}
class PgViewBase extends Laya['Script'] {
	constructor() {
		super();
	} ['executeWhenSdkReady$'](_0x302bd3, _0x4473df) {
		if (typeof pgdk$ !== 'undefined' && pgdk$['isSdkReady$']) {
			_0x4473df && _0x4473df();
		} else {
			Laya['timer']['once'](0x64, this, this['executeWhenSdkReady$'], [_0x302bd3, _0x4473df], !![]);
		}
	} ['setWidget$'](_0x243eb0, _0x7f3ae5, _0x380d56, _0x399a87, _0xcccb1f) {
		typeof _0x7f3ae5 === 'number' && (_0x243eb0['top'] = _0x7f3ae5);
		typeof _0x380d56 === 'number' && (_0x243eb0['bottom'] = _0x380d56);
		typeof _0x399a87 === 'number' && (_0x243eb0['left'] = _0x399a87);
		typeof _0xcccb1f === 'number' && (_0x243eb0['right'] = _0xcccb1f);
		if (typeof _0x399a87 !== 'number' && typeof _0xcccb1f !== 'number') _0x243eb0['centerX'] = 0x0;
		if (typeof _0x7f3ae5 !== 'number' && typeof _0x380d56 !== 'number') _0x243eb0['centerY'] = 0x0;
	} ['createBaseList$'](_0x28c123) {
		let _0x36728e = new Laya['List']();
		_0x36728e['repeatX'] = _0x28c123 ? 0xa : 0x1;
		_0x36728e['repeatY'] = _0x28c123 ? 0x1 : 0xa;
		if (_0x28c123) _0x36728e['hScrollBarSkin'] = 'common/hscroll.png';
		else _0x36728e['vScrollBarSkin'] = 'common/vscroll.png';
		_0x36728e['scrollBar']['visible'] = ![];
		this['setWidget$'](_0x36728e, 0x0, 0x0, 0x0, 0x0);
		return _0x36728e;
	} ['createLabel$'](_0x532726, _0x4dee47, _0x4d72ec, _0xbfff7a = undefined) {
		let _0x3cae3d = _0x532726['addChild'](new Laya['Label']());
		_0xbfff7a && (_0x3cae3d['color'] = _0xbfff7a);
		_0x3cae3d['fontSize'] = _0x4dee47;
		_0x3cae3d['lineHeight'] = _0x4dee47;
		_0x3cae3d['font'] = 'SimHei';
		_0x3cae3d['text'] = _0x4d72ec;
		return _0x3cae3d;
	} ['registerAdClickEvent$'](_0x41ddbf, _0x196bf4) {
		if (_0x41ddbf['clickEvent$']) {
			_0x41ddbf['off'](Laya['Event']['CLICK'], _0x41ddbf, _0x41ddbf['clickEvent$']);
		}
		_0x41ddbf['clickEvent$'] = function() {
			pgdk$['navigateToMiniProgram$'](this['dataSource'], _0x196bf4);
		};
		_0x41ddbf['on'](Laya['Event']['CLICK'], _0x41ddbf, _0x41ddbf['clickEvent$']);
	} ['createMask$'](_0x4a7141, _0x599466) {
		if (!_0x599466) return;
		let _0x454435 = new Laya['Image']();
		_0x454435['skin'] = _0x599466;
		_0x454435['width'] = _0x4a7141['width'];
		_0x454435['height'] = _0x4a7141['height'];
		_0x454435['left'] = _0x454435['right'] = _0x454435['top'] = _0x454435['bottom'] = 0x0;
		_0x4a7141['mask'] = _0x454435;
		return _0x454435;
	} ['createBgNode$'](_0x291ae9, _0x1b2891, _0x17cf60, _0x30bce2) {
		_0x17cf60 === void 0x0 && (_0x17cf60 = 0x64);
		_0x30bce2 === void 0x0 && (_0x30bce2 = 0x64);
		let _0x405696;
		if (_0x1b2891['startsWith']('#')) {
			_0x405696 = _0x291ae9['addChild'](new Laya['Box']());
			_0x405696['width'] = _0x17cf60;
			_0x405696['height'] = _0x30bce2;
			if (_0x1b2891['length'] === 0x9) {
				_0x405696['bgColor'] = _0x1b2891['substring'](0x0, 0x7);
				_0x405696['alpha'] = parseInt('0x' + _0x1b2891['substring'](0x7)) / 0xff;
			} else {
				_0x405696['bgColor'] = _0x1b2891;
				_0x405696['alpha'] = 0.7;
			}
		} else {
			let _0x3331a0 = _0x1b2891['split'](';');
			_0x405696 = _0x291ae9['addChild'](new Laya['Image']());
			_0x405696['width'] = _0x17cf60;
			_0x405696['height'] = _0x30bce2;
			_0x405696['skin'] = _0x3331a0[0x0];
			_0x3331a0[0x1] && (_0x405696['sizeGrid'] = _0x3331a0[0x1]);
		}
		return _0x405696;
	}
}
class TtShareRecordWindow$ extends PgViewBase {
	constructor() {
		super();
	} ['onStart']() {
		this['shareSuccess$'] = ![];
		this['initUI$']();
		this['monitorBtns$']();
	} ['initUI$']() {
		this['ui$'] = new Laya['Box']();
		this['ui$']['zOrder'] = 0x3b9ac9ff;
		this['ui$']['name'] = 'TtShareRecordWindow';
		this['ui$']['width'] = 0x2d0;
		this['ui$']['height'] = 0x500;
		this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0);
		Laya['stage']['addChild'](this['ui$']);
		this['createBg$']();
		this['createRecordBg$']();
		this['createTitle$']();
		this['createContentImg$']();
		this['createHideContentImg$']();
		this['createPlayBtnImg$']();
		this['createShareBtn$']();
		this['createNoShareBtn$']();
	} ['createBg$']() {
		let _0x2393ce = new Laya['Box']();
		_0x2393ce['name'] = 'ImageBg';
		_0x2393ce['bgColor'] = '#000000';
		this['setWidget$'](_0x2393ce, 0x0, 0x0, 0x0, 0x0);
		_0x2393ce['alpha'] = 0.8;
		this['ui$']['addChild'](_0x2393ce);
	} ['createRecordBg$']() {
		this['recordBg$'] = new Laya['Image']();
		this['recordBg$']['skin'] = this['recordBgImg$'];
		this['recordBg$']['anchorX'] = 0.5;
		this['recordBg$']['anchorY'] = 0.5;
		this['recordBg$']['width'] = 0x1f4;
		this['recordBg$']['height'] = 0x1f4;
		this['recordBg$']['centerX'] = 0x0;
		this['recordBg$']['centerY'] = -0x96;
		this['ui$']['addChild'](this['recordBg$']);
	} ['createTitle$']() {
		let _0x54a4b8 = new Laya['Label']();
		_0x54a4b8['bold'] = !![];
		_0x54a4b8['anchorX'] = 0.5;
		_0x54a4b8['anchorY'] = 0.5;
		_0x54a4b8['text'] = '录屏分享';
		_0x54a4b8['font'] = 'SimHei';
		_0x54a4b8['fontSize'] = 0x3c;
		_0x54a4b8['stroke'] = 0x8;
		_0x54a4b8['strokeColor'] = '#ee6f0c';
		_0x54a4b8['color'] = '#ffffff';
		_0x54a4b8['right'] = 0x80;
		_0x54a4b8['bottom'] = 0x1ac;
		this['recordBg$']['addChild'](_0x54a4b8);
	} ['createContentImg$']() {
		let _0x56d197 = new Laya['Image']();
		_0x56d197['anchorX'] = 0.5;
		_0x56d197['anchorY'] = 0.5;
		_0x56d197['centerX'] = 0x0;
		_0x56d197['bottom'] = 0xd;
		_0x56d197['width'] = 0x17e;
		_0x56d197['height'] = 0x17e;
		_0x56d197['skin'] = this['contentImg$'];
		this['recordBg$']['addChild'](_0x56d197);
	} ['createHideContentImg$']() {
		let _0x4c661e = new Laya['Box']();
		_0x4c661e['name'] = 'ContentImgBg';
		_0x4c661e['bgColor'] = '#000000';
		_0x4c661e['anchorX'] = 0.5;
		_0x4c661e['anchorY'] = 0.5;
		_0x4c661e['width'] = 0x17e;
		_0x4c661e['height'] = 0x17e;
		_0x4c661e['alpha'] = 0.5;
		_0x4c661e['centerX'] = 0x0;
		_0x4c661e['bottom'] = 0xd;
		this['recordBg$']['addChild'](_0x4c661e);
	} ['createPlayBtnImg$']() {
		this['contentShareBtn$'] = new Laya['Image']();
		this['contentShareBtn$']['anchorX'] = 0.5;
		this['contentShareBtn$']['anchorY'] = 0.5;
		this['contentShareBtn$']['stateNum'] = 0x1;
		this['contentShareBtn$']['width'] = 0x100;
		this['contentShareBtn$']['height'] = 0x100;
		this['contentShareBtn$']['centerX'] = 0x0;
		this['contentShareBtn$']['centerY'] = 0x2d;
		this['contentShareBtn$']['skin'] = this['playBtnImg$'];
		this['recordBg$']['addChild'](this['contentShareBtn$']);
	} ['createShareBtn$']() {
		this['shareBtn$'] = new Laya['Button']();
		this['shareBtn$']['skin'] = this['shareImg$'];
		this['shareBtn$']['stateNum'] = 0x1;
		this['shareBtn$']['anchorX'] = 0.5;
		this['shareBtn$']['anchorY'] = 0.5;
		this['shareBtn$']['sizeGrid'] = '30,30,30,30';
		this['shareBtn$']['label'] = '分享上热门';
		this['shareBtn$']['labelFont'] = 'SimHei';
		this['shareBtn$']['labelSize'] = 0x28;
		this['shareBtn$']['labelColors'] = '#FFFFFF';
		this['shareBtn$']['width'] = 0x102;
		this['shareBtn$']['height'] = 0x5a;
		this['shareBtn$']['centerX'] = 0x0;
		this['shareBtn$']['bottom'] = 0x1ae;
		this['ui$']['addChild'](this['shareBtn$']);
	} ['createNoShareBtn$']() {
		this['noShareBtn$'] = new Laya['Button']();
		this['noShareBtn$']['skin'] = this['shareImg$'];
		this['noShareBtn$']['stateNum'] = 0x1;
		this['noShareBtn$']['anchorX'] = 0.5;
		this['noShareBtn$']['anchorY'] = 0.5;
		this['noShareBtn$']['sizeGrid'] = '30,30,30,30';
		this['noShareBtn$']['label'] = '暂不分享';
		this['noShareBtn$']['labelFont'] = 'SimHei';
		this['noShareBtn$']['labelSize'] = 0x28;
		this['noShareBtn$']['labelColors'] = '#FFFFFF';
		this['noShareBtn$']['width'] = 0x102;
		this['noShareBtn$']['height'] = 0x5a;
		this['noShareBtn$']['centerX'] = 0x0;
		this['noShareBtn$']['bottom'] = 0x140;
		this['ui$']['addChild'](this['noShareBtn$']);
	} ['monitorBtns$']() {
		this['contentShareBtn$'] && this['contentShareBtn$']['on'](Laya['Event']['CLICK'], this, this['onShareClick$']);
		this['shareBtn$'] && this['shareBtn$']['on'](Laya['Event']['CLICK'], this, this['onShareClick$']);
		this['noShareBtn$'] && this['noShareBtn$']['on'](Laya['Event']['CLICK'], this, this['closeRecordWindow$']);
	} ['onShareClick$']() {
		if (this['shareSuccess$']) {
			pgdk$['showToast$']('已经分享过了');
			return;
		}
		console['log']('点击分享录屏');
		if (Math['floor']((pgdk$['overTime$'] - pgdk$['startTime$']) / 0x3e8) < 0x3) {
			pgdk$['showToast$']('游戏时长过短，无法分享!');
			return;
		}
		let _0x5135ce = new Laya['Handler'](this, function() {
			this['shareSuccess$'] = !![];
			this['closeRecordWindow$']();
		});
		pgdk$['shareRecord$'](_0x5135ce, null);
	} ['closeRecordWindow$']() {
		Laya['stage']['removeChild'](this['ui$']);
	} ['onDestroy']() {
		this['contentShareBtn$'] && this['contentShareBtn$']['off'](Laya['Event']['CLICK'], this, this['onShareClick$']);
		this['shareBtn$'] && this['shareBtn$']['off'](Laya['Event']['CLICK'], this, this['onShareClick$']);
		this['noShareBtn$'] && this['noShareBtn$']['off'](Laya['Event']['CLICK'], this, this['closeRecordWindow$']);
	}
}
class PgTreasureEgg$ extends PgViewBase {
	constructor() {
		super();
		this['hasTrigger$'] = ![];
		this['onBtnClick$'] = undefined;
		this['onTrigger$'] = undefined;
		this['onAdClose$'] = undefined;
	} ['onStart']() {
		if (!pgdk$) return;
		if (!pgdk$['cfg$']) return;
		if (!pgdk$['getSwitch2$']()) {
			return;
		}
		this['progressVal$'] = 0x0;
		if (Math['random']() > 0.5) {
			this['tipImg1$'] = 'proImg/img_tipText5.png';
			this['tipImg2$'] = 'proImg/img_tipText6.png';
			this['buttonImg$'] = 'proImg/img_btn3.png';
		} else {}
		this['initUI$']();
		this['monitorBtns$']();
	} ['initUI$']() {
		this['ui$'] = new Laya['Box']();
		this['ui$']['zOrder'] = 0x3b9ac9ff;
		this['ui$']['name'] = 'PgTreasureBox';
		this['ui$']['width'] = 0x2d0;
		this['ui$']['height'] = 0x500;
		this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0);
		Laya['stage']['addChild'](this['ui$']);
		Laya['timer']['once'](0x64, this, function() {
			pgdk$['hideBanner$']();
		});
		this['createBannerBox$']();
		let _0x32853c = this['ui$']['addComponent'](PgTopView$);
		_0x32853c['boxBanner$'] = this['boxBanner$'];
		_0x32853c['bottom$'] = 0x0;
		_0x32853c['autoShowBanner$'] = ![];
		this['createBg$']();
		this['createBoxImg$']();
		this['createTipImg1$']();
		this['createTipImg2$']();
		this['createProcessBar$']();
		this['createButton$']();
	} ['createBg$']() {
		let _0x59c0f5 = new Laya['Box']();
		_0x59c0f5['name'] = 'ImageBg';
		_0x59c0f5['bgColor'] = '#000000';
		this['setWidget$'](_0x59c0f5, 0x0, 0x0, 0x0, 0x0);
		_0x59c0f5['alpha'] = 0.8;
		this['ui$']['addChild'](_0x59c0f5);
	} ['createBoxImg$']() {
		let _0x54f7a1 = new Laya['Image']();
		_0x54f7a1['skin'] = this['boxSkin$'];
		_0x54f7a1['centerX'] = 0x0;
		_0x54f7a1['centerY'] = -0x12c;
		this['ui$']['addChild'](_0x54f7a1);
	} ['createTipImg1$']() {
		let _0x55a98a = new Laya['Image']();
		_0x55a98a['centerX'] = 0x0;
		_0x55a98a['centerY'] = -0x1c2;
		_0x55a98a['width'] = 0x1f4;
		_0x55a98a['height'] = 0xc8;
		_0x55a98a['skin'] = this['tipImg1$'];
		this['ui$']['addChild'](_0x55a98a);
	} ['createTipImg2$']() {
		let _0x28f198 = new Laya['Image']();
		_0x28f198['width'] = 0x190;
		_0x28f198['height'] = 0x64;
		_0x28f198['centerX'] = 0x0;
		_0x28f198['centerY'] = 0x1d6;
		_0x28f198['skin'] = this['tipImg2$'];
		this['ui$']['addChild'](_0x28f198);
	} ['createProcessBar$']() {
		let _0x44f3b8 = this['processImg$']['split'](';');
		this['progress$'] = new Laya['ProgressBar']();
		this['progress$']['skin'] = _0x44f3b8[0x0];
		this['progress$']['centerX'] = 0x0;
		this['progress$']['centerY'] = 0x19a;
		this['progress$']['width'] = 0x1f4;
		this['progress$']['height'] = 0x28;
		_0x44f3b8[0x1] && (this['progress$']['sizeGrid'] = _0x44f3b8[0x1]);
		this['ui$']['addChild'](this['progress$']);
	} ['createButton$']() {
		this['button$'] = new Laya['Image']();
		this['button$']['skin'] = this['buttonImg$'];
		this['button$']['centerX'] = 0x0;
		this['button$']['centerY'] = 0x0;
		this['button$']['width'] = 0x190;
		this['button$']['height'] = 0x258;
		this['ui$']['addChild'](this['button$']);
	} ['createBannerBox$']() {
		this['boxBanner$'] = this['ui$']['addChild'](new Laya['Box']());
		this['boxBanner$']['zOrder'] = 0x1;
		this['boxBanner$']['left'] = this['boxBanner$']['right'] = 0x0;
		this['boxBanner$']['bottom'] = 0xa;
		this['boxBanner$']['height'] = 0xdc;
		this['boxBanner$']['bgColor'] = '#FFFFFF';
	} ['onUpdate']() {
		if (!pgdk$['getSwitch2$']()) {
			return;
		}
		if (this['progressVal$'] > 0x0) {
			this['progressVal$'] -= this['desProgressSpeed$'];
		}
		this['_updateProgress$']();
	} ['_updateProgress$']() {
		if (this['progressVal$'] < 0x0) this['progressVal$'] = 0x0;
		if (this['progressVal$'] > 0x1) this['progressVal$'] = 0x1;
		if (!this['progress$']) return;
		if (this['progress$']['destroyed']) return;
		if (this['progress$']['_children']['length'] === 0x0) return;
		this['progress$']['_children'][0x1]['width'] = this['progress$']['width'] * this['progressVal$'];
	} ['monitorBtns$']() {
		this['button$'] && this['button$']['on'](Laya['Event']['CLICK'], this, this['onClick$']);
	} ['onClick$']() {
		console['log']('点击宝箱');
		pgdk$['shakePhone$']();
		this['onBtnClick$'] && this['onBtnClick$']();
		this['progressVal$'] += this['addProgressSpeed$'];
		let _0x2ab78f = this['showPro$'] || 0.5;
		if (this['progressVal$'] > _0x2ab78f) {
			if (!this['hasTrigger$']) {
				this['hasTrigger$'] = !![];
				this['_onTrigger$']();
			}
		}
		if (this['progressVal$'] >= 0x1) {
			if (!this['hasTrigger$']) {
				this['hasTrigger$'] = !![];
				Laya['timer']['once'](0xbb8, this, this['_onAdClose$']);
			}
		}
	} ['_onTrigger$']() {
		if (this['adType$'] === 'AppBox') {
			pgdk$['showGridAd$'](this['_onAdClose$']['bind'](this));
		} else {
			let _0x4d016a = this['bannerNum$'] || 0.5;
			if (Math['random']() < _0x4d016a) {
				let _0x53f4ff = this['owner']['getComponent'](PgTopView$);
				_0x53f4ff && _0x53f4ff['restoreBanner$'] && _0x53f4ff['restoreBanner$']();
				Laya['timer']['once'](0x7d0, this, this['_onAdClose$']);
			} else {
				Laya['timer']['once'](0x7d0, this, this['_onAdClose$']);
				if (window['uc']) {
					pgdk$['showInterstitialAd$']();
				} else {
					pgdk$['showVideoAd$']();
				}
			}
		}
	} ['_onAdClose$']() {
		if (window['addcoin']) {
			window['addcoin'](0x1f4);
			if (window['wx']) {
				wx['showToast']({
					'title': '奖励500金币！',
					'icon': 'success',
					'duration': 0x320
				});
			} else if (window['uc']) {
				uc['showToast']({
					'content': '奖励500金币！'
				});
			}
		}
		if (this['adType$'] != 'AppBox') {
			let _0x528356 = this['owner']['getComponent'](PgTopView$);
			_0x528356 && _0x528356['hideBanner$'] && _0x528356['hideBanner$']();
		}
		Laya['stage']['removeChild'](this['ui$']);
	} ['onDestroy']() {
		this['button$'] && this['button$']['off'](Laya['Event']['CLICK'], this, this['onClick$']);
	}
}
class PgTreasureBox$ extends PgViewBase {
	constructor() {
		super();
		this['hasTrigger$'] = ![];
		this['onBtnClick$'] = undefined;
		this['onTrigger$'] = undefined;
		this['onAdClose$'] = undefined;
	} ['onStart']() {
		if (!pgdk$['getSwitch2$']()) {
			return;
		}
		this['progressVal$'] = 0x0;
		this['initUI$']();
		this['monitorBtns$']();
	} ['initUI$']() {
		this['ui$'] = new Laya['Box']();
		this['ui$']['zOrder'] = 0x3b9ac9ff;
		this['ui$']['name'] = 'PgTreasureBox';
		this['ui$']['width'] = 0x2d0;
		this['ui$']['height'] = 0x500;
		this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0);
		Laya['stage']['addChild'](this['ui$']);
		Laya['timer']['once'](0x64, this, function() {
			pgdk$['hideBanner$']();
		});
		this['createBannerBox$']();
		let _0x4180c0 = this['owner']['addComponent'](PgTopView$);
		_0x4180c0['boxBanner$'] = this['boxBanner$'];
		_0x4180c0['bottom$'] = 0x0;
		_0x4180c0['autoShowBanner$'] = ![];
		this['createBg$']();
		this['createBoxImg$']();
		this['createTipImg1$']();
		this['createTipImg2$']();
		this['createProcessBar$']();
		this['createButton$']();
	} ['createBg$']() {
		let _0x2b0636 = new Laya['Box']();
		_0x2b0636['name'] = 'ImageBg';
		_0x2b0636['bgColor'] = '#000000';
		this['setWidget$'](_0x2b0636, 0x0, 0x0, 0x0, 0x0);
		_0x2b0636['alpha'] = 0.8;
		this['ui$']['addChild'](_0x2b0636);
	} ['createBoxImg$']() {
		let _0x23c786 = new Laya['Image']();
		_0x23c786['skin'] = this['boxSkin$'];
		_0x23c786['centerX'] = 0x0;
		_0x23c786['centerY'] = -0x12c;
		this['ui$']['addChild'](_0x23c786);
	} ['createTipImg1$']() {
		let _0x1c0acd = new Laya['Image']();
		_0x1c0acd['centerX'] = 0x0;
		_0x1c0acd['centerY'] = -0x96;
		_0x1c0acd['width'] = 0x1f4;
		_0x1c0acd['height'] = 0xc8;
		_0x1c0acd['skin'] = this['tipImg1$'];
		this['ui$']['addChild'](_0x1c0acd);
	} ['createTipImg2$']() {
		let _0x22dd1b = new Laya['Image']();
		_0x22dd1b['width'] = 0x190;
		_0x22dd1b['height'] = 0x64;
		_0x22dd1b['centerX'] = 0x0;
		_0x22dd1b['centerY'] = 0xb4;
		_0x22dd1b['skin'] = this['tipImg2$'];
		this['ui$']['addChild'](_0x22dd1b);
	} ['createProcessBar$']() {
		let _0x404e57 = this['processImg$']['split'](';');
		this['progress$'] = new Laya['ProgressBar']();
		this['progress$']['skin'] = _0x404e57[0x0];
		this['progress$']['centerX'] = 0x0;
		this['progress$']['centerY'] = 0x64;
		this['progress$']['width'] = 0x1f4;
		this['progress$']['height'] = 0x28;
		_0x404e57[0x1] && (this['progress$']['sizeGrid'] = _0x404e57[0x1]);
		this['ui$']['addChild'](this['progress$']);
	} ['createButton$']() {
		this['button$'] = new Laya['Image']();
		this['button$']['skin'] = this['buttonImg$'];
		this['button$']['width'] = 0xc8;
		this['button$']['height'] = 0xc8;
		this['button$']['centerX'] = 0x0;
		this['button$']['bottom'] = 0x0;
		this['ui$']['addChild'](this['button$']);
	} ['createBannerBox$']() {
		this['boxBanner$'] = this['ui$']['addChild'](new Laya['Box']());
		this['boxBanner$']['zOrder'] = 0x1;
		this['boxBanner$']['left'] = this['boxBanner$']['right'] = 0x0;
		this['boxBanner$']['bottom'] = 0xa;
		this['boxBanner$']['height'] = 0xdc;
		this['boxBanner$']['bgColor'] = '#FFFFFF';
	} ['onUpdate']() {
		if (!pgdk$['getSwitch2$']()) {
			return;
		}
		if (this['progressVal$'] > 0x0) {
			this['progressVal$'] -= this['desProgressSpeed$'];
		}
		this['_updateProgress$']();
	} ['_updateProgress$']() {
		if (this['progressVal$'] < 0x0) this['progressVal$'] = 0x0;
		if (this['progressVal$'] > 0x1) this['progressVal$'] = 0x1;
		if (!this['progress$']) return;
		if (this['progress$']['destroyed']) return;
		if (this['progress$']['_children']['length'] === 0x0) return;
		this['progress$']['_children'][0x1]['width'] = this['progress$']['width'] * this['progressVal$'];
	} ['monitorBtns$']() {
		this['button$'] && this['button$']['on'](Laya['Event']['CLICK'], this, this['onClick$']);
	} ['onClick$']() {
		console['log']('点击宝箱');
		pgdk$['shakePhone$']();
		this['onBtnClick$'] && this['onBtnClick$']();
		this['progressVal$'] += this['addProgressSpeed$'];
		let _0x51582a = this['showPro$'] || 0.6;
		if (this['progressVal$'] > _0x51582a) {
			if (!this['hasTrigger$']) {
				this['hasTrigger$'] = !![];
				this['_onTrigger$']();
			}
		}
		if (this['progressVal$'] >= 0x1) {
			if (!this['hasTrigger$']) {
				this['hasTrigger$'] = !![];
				Laya['timer']['once'](0xbb8, this, this['_onAdClose$']);
			}
		}
	} ['_onTrigger$']() {
		if (this['adType$'] === 'AppBox') {
			pgdk$['showGridAd$'](this['_onAdClose$']);
		} else {
			let _0x1cadc4 = this['bannerNum$'] || 0.5;
			if (Math['random']() < _0x1cadc4) {
				let _0x263a51 = this['owner']['getComponent'](PgTopView$);
				_0x263a51 && _0x263a51['restoreBanner$'] && _0x263a51['restoreBanner$']();
				Laya['timer']['once'](0x7d0, this, this['_onAdClose$']);
			} else {
				Laya['timer']['once'](0x7d0, this, this['_onAdClose$']);
				if (window['uc']) {
					pgdk$['showInterstitialAd$']();
				} else {
					pgdk$['showVideoAd$']();
				}
			}
		}
	} ['_onAdClose$']() {
		if (window['addcoin']) {
			window['addcoin'](0x1f4);
			if (window['wx']) {
				wx['showToast']({
					'title': '奖励500金币！',
					'icon': 'success',
					'duration': 0x320
				});
			} else if (window['uc']) {
				uc['showToast']({
					'content': '奖励500金币！'
				});
			}
		}
		if (this['adType$'] != 'AppBox') {
			let _0x3c1ab4 = this['owner']['getComponent'](PgTopView$);
			_0x3c1ab4 && _0x3c1ab4['hideBanner$'] && _0x3c1ab4['hideBanner$']();
		}
		Laya['stage']['removeChild'](this['ui$']);
	} ['onDestroy']() {
		this['button$'] && this['button$']['off'](Laya['Event']['CLICK'], this, this['onClick$']);
	}
}
class PgAutoScroll$ extends Laya['Script'] {
	constructor() {
		super();
		this['forward'] = !![];
		this['_lastStartIndex'] = -0x1;
		this['step'] = 0x1;
	} ['onStart']() {
		this['scrolling'] = ![];
		Laya['timer']['loop'](0x7d0, this, this['scrollToNext']);
		this['owner']['scrollBar']['on'](Laya['Event']['END'], this, this['onScrollEnd']);
	} ['scrollToNext']() {
		if (this['scrolling']) return;
		let _0x5de9b1 = this['owner']['startIndex'];
		if (this['_lastStartIndex'] === _0x5de9b1) {
			this['forward'] = !this['forward'];
		}
		this['_lastStartIndex'] = _0x5de9b1;
		_0x5de9b1 += this['forward'] ? this['step'] : -this['step'];
		this['owner']['tweenTo'](_0x5de9b1, 0xc8);
		if (!this['forward'] && _0x5de9b1 === 0x0) this['forward'] = !![];
	} ['onScrollEnd']() {
		this['scrolling'] = ![];
	} ['onMouseDown'](_0x6bbdfb) {
		this['scrolling'] = !![];
	} ['onMouseUp'](_0x1c37bd) {
		this['scrolling'] = ![];
	}
}
class PgGameCenter$ extends PgViewBase {
	static['create'](_0x6ea6c3) {
		pgdk$['hideBanner$']();
		if (Laya['gameCenterUI$']) {
			Laya['stage']['addChild'](Laya['gameCenterUI$']);
			Laya['gameCenterUI$']['getComponent'](PgGameCenter$)['closeCallback$'] = _0x6ea6c3;
			return Laya['gameCenterUI$'];
		}
		let _0x2ea9a5 = new Laya['Box']();
		_0x2ea9a5['bgColor'] = '#406c99';
		_0x2ea9a5['name'] = 'GameCenterUI';
		_0x2ea9a5['viewName$'] = '游戏中心';
		_0x2ea9a5['zOrder'] = 0x3b9ac9ff;
		_0x2ea9a5['width'] = 0x2d0;
		_0x2ea9a5['height'] = 0x500;
		Laya['stage']['addChild'](_0x2ea9a5);
		Laya['gameCenterUI$'] = _0x2ea9a5;
		let _0x439713 = _0x2ea9a5['addComponent'](PgGameCenter$);
		_0x439713['setWidget$'](_0x2ea9a5, 0x0, 0x0, 0x0, 0x0);
		_0x439713['closeCallback$'] = _0x6ea6c3;
	}
	constructor() {
		super();
		this['titleBg$'] = 'sdk/4.png';
		this['closeCallback$'] = undefined;
	} ['onStart']() {
		this['initUI$']();
	} ['onEnable']() {
		this['reset$']();
	} ['reset$']() {
		this['canTrick$'] = pgdk$['isGameCenterViewDelay$']();
		this['hasClick$'] = ![];
		this['hasShowBanner$'] = ![];
	} ['initUI$']() {
		this['reset$']();
		let _0x5874ca = this['owner']['addChild'](new Laya['Image']());
		_0x5874ca['skin'] = 'sdk/title-friend.png';
		_0x5874ca['centerX'] = 0x0;
		_0x5874ca['top'] = 0x8c;
		this['createListAds$']();
		this['createGridAds$']();
		this['createBtnContinue$']();
		this['createBannerBox$']();
		let _0x224c59 = this['owner']['addComponent'](PgTopView$);
		_0x224c59['boxBanner$'] = this['boxBanner$'];
	} ['createBtnBack$']() {} ['createBannerBox$']() {
		this['boxBanner$'] = this['owner']['addChild'](new Laya['Box']());
		this['boxBanner$']['zOrder'] = 0x1;
		this['boxBanner$']['left'] = this['boxBanner$']['right'] = 0x0;
		this['boxBanner$']['bottom'] = 0xa;
		this['boxBanner$']['height'] = 0xdc;
		this['boxBanner$']['bgColor'] = '#FFFFFF';
	} ['createListAds$']() {
		this['list$'] = this['owner']['addChild'](new Laya['Box']());
		this['list$']['top'] = 0xb4;
		this['list$']['width'] = 0x2a8;
		this['list$']['height'] = 0xb4;
		this['list$']['centerX'] = 0x0;
		let _0x3014e0 = this['list$']['addComponent'](PgViewList$);
		_0x3014e0['viewName$'] = this['owner']['viewName$'];
		_0x3014e0['bgSkin$'] = '#FFFFFFFF';
		_0x3014e0['titleColor$'] = '#000000';
	} ['createGridAds$']() {
		let _0x1b0904 = this['owner']['addChild'](new Laya['Image']());
		_0x1b0904['skin'] = 'sdk/title-recommend.png';
		_0x1b0904['centerX'] = 0x0;
		_0x1b0904['top'] = 0x17c;
		this['list$'] = this['owner']['addChild'](new Laya['Box']());
		this['list$']['width'] = 0x2a8;
		this['list$']['top'] = 0x1ae;
		this['list$']['bottom'] = 0x14;
		this['list$']['centerX'] = 0x0;
		let _0xadd7bd = this['list$']['addComponent'](PgViewGrid$);
		_0xadd7bd['viewName$'] = this['owner']['viewName$'];
		_0xadd7bd['iconBg$'] = 'sdk/image_icon_bg.png;20,20,20,20';
		_0xadd7bd['iconMask$'] = 'sdk/image_icon_bg.png';
		_0xadd7bd['titleBg$'] = this['titleBg$'];
		_0xadd7bd['spacingY$'] = 0x14;
		_0xadd7bd['rows$'] = 0x3;
	} ['createBtnContinue$']() {
		let _0x148871 = this['owner']['addChild'](new Laya['Image']());
		_0x148871['skin'] = 'sdk/btn-continue-new.png';
		_0x148871['centerX'] = 0x0;
		_0x148871['bottom'] = 0x50;
		_0x148871['on'](Laya['Event']['CLICK'], this, function() {
			if (this['canTrick$']) {
				if (!this['hasClick$']) {
					this['hasClick$'] = !![];
					Laya['timer']['once'](0x3e8, this, this['_showBanner$']);
				} else if (!this['hasShowBanner$']) {
					return;
				} else {
					this['_onClose$']();
				}
			} else {
				this['_onClose$']();
			}
		} ['bind'](this));
	} ['_onClose$']() {
		this['owner']['removeSelf']();
		if (this['closeCallback$']) {
			this['closeCallback$']();
			this['closeCallback$'] = undefined;
		}
	} ['_showBanner$']() {
		let _0x9e9d5b = this['owner']['getComponent'](PgTopView$);
		_0x9e9d5b['restoreBanner$']();
		this['hasShowBanner$'] = !![];
		Laya['timer']['once'](0x3e8, this, this['_hideBanner$']);
	} ['_hideBanner$']() {
		pgdk$['hideBanner$']();
	}
}
class oppoNativeAdUI$ extends PgViewBase {
	constructor() {
		super();
		this['dialogBgSkin$'] = null;
		this['width$'] = 0x2bc;
		this['height$'] = 0x258;
	} ['onStart']() {
		let _0x1e90d7 = DataManager$['getInstance$']()['userData$']['battleCount$'];
		console['log']('czh\x20战斗次数...');
		console['log'](JSON['stringify'](_0x1e90d7));
		if (_0x1e90d7 % 0x2 !== 0x1) return;
		this['nativeAd'] = pgdk$['getNativeAdData$']();
		if (!this['nativeAd']) {
			console['log']('czh\x20原生广告数据没拉取到');
			return;
		}
		this['setNativeAd$']();
		this['showUI$']();
	} ['showUI$']() {
		if (this['owner']['destroyed']) return;
		console['log']('打开侧栏广告');
		Laya['timer']['once'](0xc8, this, function() {
			pgdk$['hideBanner$']();
		});
		if (!this['ui$']) {
			this['initUI$']();
		} else {
			Laya['stage']['addChild'](this['ui$']);
		}
	} ['initUI$']() {
		this['ui$'] = new Laya['Box']();
		this['ui$']['zOrder'] = 0x3b9ac9ff;
		this['ui$']['name'] = this['viewName$'];
		this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0);
		Laya['stage']['addChild'](this['ui$']);
		let _0x2adb93 = new Laya['Box']();
		this['setWidget$'](_0x2adb93, 0x0, 0x0, 0x0, 0x0);
		_0x2adb93['bgColor'] = '#000000';
		_0x2adb93['alpha'] = 0.6;
		this['ui$']['addChild'](_0x2adb93);
		this['createDialogBg$']();
		this['createTitle$']();
		this['createAdImg$']();
		this['createAdDesc$']();
		this['createAdClick$']();
		this['createCloseBtn$']();
	} ['createDialogBg$']() {
		this['dialogBg$'] = new Laya['Image']();
		this['dialogBg$']['width'] = this['width$'];
		this['dialogBg$']['height'] = this['height$'];
		this['dialogBg$']['centerX'] = 0x0;
		this['dialogBg$']['centerY'] = 0x0;
		let _0x1c8826 = this['dialogBgSkin$']['split'](';');
		this['dialogBg$']['skin'] = _0x1c8826[0x0];
		_0x1c8826[0x1] && (this['dialogBg$']['sizeGrid'] = _0x1c8826[0x1]);
		this['ui$']['addChild'](this['dialogBg$']);
	} ['createTitle$']() {
		let _0x37cb29 = new Laya['Label']();
		_0x37cb29['text'] = this['titleData$'] || '标题';
		_0x37cb29['width'] = 0x1c2;
		_0x37cb29['height'] = 0x4b;
		_0x37cb29['align'] = 'center';
		_0x37cb29['valign'] = 'middle';
		_0x37cb29['wordWrap'] = !![];
		_0x37cb29['centerX'] = 0x0;
		_0x37cb29['top'] = 0x5;
		_0x37cb29['font'] = 'SimHei';
		_0x37cb29['fontSize'] = 0x28;
		_0x37cb29['color'] = '#ffffff';
		this['dialogBg$']['addChild'](_0x37cb29);
	} ['createAdImg$']() {
		let _0xde5035 = new Laya['Image']();
		this['adImg'] = _0xde5035;
		_0xde5035['skin'] = this['logoImgData$'] || '';
		_0xde5035['left'] = 0x3c;
		_0xde5035['right'] = 0x46;
		_0xde5035['top'] = 0x6e;
		_0xde5035['bottom'] = 0x64;
		_0xde5035['anchorX'] = _0xde5035['anchorY'] = 0.5;
		this['dialogBg$']['addChild'](_0xde5035);
		_0xde5035['on'](Laya['Event']['CLICK'], this, this['openAd$']);
	} ['createAdDesc$']() {
		let _0x49a836 = new Laya['Label']();
		_0x49a836['text'] = this['descData$'] || '描述';
		_0x49a836['centerX'] = 0x0;
		_0x49a836['bottom'] = 0x1e;
		_0x49a836['font'] = 'SimHei';
		_0x49a836['fontSize'] = 0x28;
		_0x49a836['color'] = '#000000';
		this['dialogBg$']['addChild'](_0x49a836);
	} ['createAdClick$']() {
		let _0x400f87 = new Laya['Image']();
		_0x400f87['skin'] = this['openAdBtn$'];
		_0x400f87['bottom'] = -0x96;
		_0x400f87['centerX'] = 0x0;
		this['dialogBg$']['addChild'](_0x400f87);
		let _0x165ec5 = new Laya['Label']();
		_0x165ec5['centerX'] = _0x165ec5['centerY'] = 0x0;
		_0x165ec5['fontSize'] = 0x32;
		_0x165ec5['color'] = '#ffffff';
		_0x165ec5['font'] = 'SimHei';
		_0x165ec5['scaleX'] = _0x165ec5['scaleY'] = 1.2;
		_0x400f87['addChild'](_0x165ec5);
		this['setDiffBtnImg$'](_0x400f87, _0x165ec5);
	} ['createCloseBtn$']() {
		let _0x5afd72 = new Laya['Image']();
		_0x5afd72['skin'] = this['closeBtn$'];
		_0x5afd72['top'] = 0x64;
		_0x5afd72['right'] = 0x64;
		_0x5afd72['scaleX'] = _0x5afd72['scaleY'] = 1.2;
		_0x5afd72['on'](Laya['Event']['CLICK'], this, this['doClose$']);
		this['dialogBg$']['addChild'](_0x5afd72);
	} ['openAd$']() {
		console['log']('czh\x20点击了下载');
		if (this['nativeAd']) pgdk$['nativeClick$'](this['nativeData']['adId']);
		this['doClose$']();
	} ['doClose$']() {
		pgdk$['showBanner$'](null, null);
		if (this['nativeAd']) pgdk$['nativeShowClose$'](this['nativeData']['adId']);
		if (this['ui$']) this['ui$']['removeSelf']();
		this['nativeAd'] = undefined;
		this['nativeData'] = undefined;
	} ['setDiffBtnImg$'](_0x2b3bf1, _0x16f577) {
		_0x16f577['text'] = '查看广告';
		_0x2b3bf1['on'](Laya['Event']['CLICK'], this, this['openAd$']);
	} ['setNativeAd$']() {
		console['log']('czh\x20原生广告数据');
		let _0x4ad397 = this['nativeAd'];
		if (_0x4ad397 && _0x4ad397['imgUrlList']) {
			this['nativeData'] = _0x4ad397;
			console['log']('czh\x20结算界面广告');
			console['log'](JSON['stringify'](_0x4ad397['imgUrlList']));
			this['titleData$'] = _0x4ad397['title'];
			this['descData$'] = _0x4ad397['desc'];
			this['clickBtnTx$'] = _0x4ad397['clickBtnTxt'];
			if (_0x4ad397['logoImg$']) {
				this['logoImgData$'] = _0x4ad397['logoImg$'];
				console['log']('存在原生广告图片，直接设置：', _0x4ad397['logoImg$']);
			} else if (_0x4ad397['imgUrlList']['length'] != 0x0) {
				var _0x2a9e6e = this['arrayRandom'](_0x4ad397['imgUrlList']);
				this['setNativeLogo$'](_0x2a9e6e);
				console['log']('接口imgUrlList数据存在：', _0x4ad397['imgUrlList']);
			} else {
				var _0x2a9e6e = this['arrayRandom'](_0x4ad397['iconUrlList']);
				this['setNativeLogo$'](_0x2a9e6e);
				console['log']('接口iconUrlList数据存在：', _0x4ad397['iconUrlList']);
			}
		}
	} ['randomInt'](_0x2a7e92, _0xf64193) {
		return Math['floor'](Math['random']() * (_0xf64193 - _0x2a7e92) + _0x2a7e92);
	} ['arrayRandom'](_0x36db5b) {
		var _0x2a2fa5 = this['randomInt'](0x0, _0x36db5b['length']);
		return _0x36db5b[_0x2a2fa5];
	} ['setNativeLogo$'](_0x41f55d) {}
}
class PgSingleAd$ extends PgViewBase {
	constructor() {
		super();
		this['viewName$'] = null;
		this['titleBg$'] = null;
		this['titleColor$'] = '#000000';
	} ['onStart']() {
		this['owner']['bgColor'] = '';
		this['owner']['alpha'] = 0x1;
		this['executeWhenSdkReady$'](this, this['initUI$']['bind'](this));
	} ['initUI$']() {
		this['ui$'] = new Laya['Image']();
		this['owner']['addChild'](this['ui$']);
		let _0x55a30b = pgdk$['getRandomAd$']('promotion');
		this['dataSource$'] = _0x55a30b;
		this['ui$']['skin'] = this['iconBg$'];
		this['ui$']['anchorX'] = this['ui$']['anchorY'] = 0.5;
		this['ui$']['width'] = this['owner']['width'];
		this['ui$']['height'] = this['owner']['height'];
		this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0);
		this['createIcon$']();
		this['createTitle$']();
		this['createMask$'](this['icon$'], this['iconMask$']);
		this['initEvents$']();
		this['resetRotate$']();
	} ['createIcon$']() {
		let _0x4dce64 = 0x5;
		this['icon$'] = new PgImage$();
		this['icon$']['width'] = this['ui$']['width'] - _0x4dce64 * 0x2;
		this['icon$']['height'] = this['icon$']['width'];
		this['setWidget$'](this['icon$'], _0x4dce64, null, _0x4dce64, _0x4dce64);
		this['ui$']['addChild'](this['icon$']);
		this['changeAd$']();
	} ['createTitle$']() {
		if (!this['dataSource$']['title']) return;
		this['title$'] = this['createLabel$'](this['ui$'], 0x18, this['dataSource$']['title']['substring'](0x0, 0x6), this['titleColor$']);
		this['setWidget$'](this['title$'], null, 0x5, null, null);
	} ['onUpdate']() {
		this['rotate$']();
	} ['changeAd$']() {
		pgdk$['recoverRandomAd$'](this['dataSource$']);
		this['dataSource$'] = pgdk$['getRandomAd$']('promotion');
		if (this['dataSource$']) {
			this['icon$']['setSkin'](this['dataSource$']['img']);
			this['title$'] && (this['title$']['text'] = this['dataSource$']['title']);
		}
	} ['resetRotate$']() {
		this['ui$']['rotation'] = 0x0;
		this['rotateCnt'] = 0x0;
		this['rotateSpeed'] = 0x64;
		this['nextRotateTime'] = 0x3;
	} ['rotate$']() {
		if (!this['ui$']) return;
		let _0x786e57 = Laya['timer']['delta'] / 0x3e8;
		if (this['nextRotateTime'] > 0x0) {
			this['nextRotateTime'] -= _0x786e57;
		} else {
			let _0x56f766 = this['ui$']['rotation'];
			this['ui$']['rotation'] += this['rotateSpeed'] * _0x786e57;
			if (this['ui$']['rotation'] <= -0x5) {
				this['ui$']['rotation'] = -0x5;
				this['rotateSpeed'] = Math['abs'](this['rotateSpeed']);
			} else if (this['ui$']['rotation'] >= 0x5) {
				this['ui$']['rotation'] = 0x5;
				this['rotateSpeed'] = -Math['abs'](this['rotateSpeed']);
			}
			if (_0x56f766 >= 0x0 && this['ui$']['rotation'] <= 0x0 || _0x56f766 <= 0x0 && this['ui$']['rotation'] >= 0x0) {
				this['rotateCnt']++;
				if (this['rotateCnt'] >= 0x4) {
					this['resetRotate$']();
					this['changeAd$']();
				}
			}
		}
	} ['click$']() {
		pgdk$['navigateToMiniProgram$'](this['dataSource$'], this['viewName$']);
	} ['onRemoved$']() {
		pgdk$['recoverRandomAd$'](this['dataSource$']);
	} ['initEvents$']() {
		this['ui$']['on'](Laya['Event']['REMOVED'], this, this['onRemoved$']);
		this['ui$']['on'](Laya['Event']['CLICK'], this, this['click$']);
	}
}
class PgInterView$ extends Laya['Script'] {
	constructor() {
		super();
	} ['onStart']() {
		if (!pgdk$) return;
		if (!pgdk$['cfg$']) return;
		if (pgdk$['cfg$']['switch1'] <= 0x0) return;
		if (this['autoShowInter$']) {
			window['pgdk$'] && pgdk$['showInterstitialAd$']();
		}
	}
}
class PgTopView$ extends Laya['Script'] {
	constructor() {
		super();
		this['canShowBanner$'] = !![];
		this['hasAutoShowBanner$'] = ![];
		this['BOTTOM_LIMIT'] = 0x28;
	} ['onStart']() {
		window['pgdk$'] && pgdk$['onUIOpen$'](this);
		this['boxBanner$'] && (this['boxBanner$']['alpha'] = 0x0);
		this['boxGrid$'] && (this['boxGrid$']['alpha'] = 0x0);
		if (this['autoShowBanner$']) {
			this['hasAutoShowBanner$'] = !![];
			Laya['timer']['once'](0x64, this, this['restoreBanner$']);
		}
		if (window['pgdk$']) {
			if (pgdk$['canTrick$']()) {
				this['_createGridAdByUI$']();
			}
		}
	} ['restoreBanner$']() {
		if (this['isBattleView$']) {
			if (!pgdk$['cfg$']) return;
			if (pgdk$['cfg$']['switch1'] > 0x0) {
				this['canShowBanner$'] = !![];
			} else {
				this['canShowBanner$'] = ![];
			}
		}
		if (!this['canShowBanner$']) return;
		this['_createBannerByUI$']();
	} ['hideBanner$']() {
		if (!this['canShowBanner$']) return;
		if (!this['boxBanner$']) return;
		window['pgdk$'] && pgdk$['hideBanner$']();
	} ['_createBannerByUI$']() {
		if (!this['boxBanner$']) {
			return;
		}
		if (Laya['stage']['height'] > 0x500) {
			if (typeof this['boxBanner$']['bottom'] === 'number' && this['boxBanner$']['bottom'] < this['BOTTOM_LIMIT']) {
				this['boxBanner$']['bottom'] = this['BOTTOM_LIMIT'];
			}
		}
		let _0x15e00b = this['_getRect$'](this['boxBanner$']);
		let _0x20202c = {
			'top': this['top$'],
			'bottom': this['bottom$'],
			'left': this['left$'],
			'right': this['right$']
		};
		window['pgdk$'] && pgdk$['showBanner$'](_0x15e00b, _0x20202c, this['isBattleView$']);
	} ['restoreGridAd$']() {
		if (!pgdk$['canTrick$']()) return;
		this['_createGridAdByUI$']();
	} ['hideGridAd$']() {
		if (!this['boxGrid$']) return;
		window['pgdk$'] && pgdk$['hideGridAd$']();
	} ['_createGridAdByUI$']() {
		if (!this['boxGrid$']) {
			return;
		}
		if (Laya['stage']['height'] > 0x500) {
			if (typeof this['boxGrid$']['bottom'] === 'number' && this['boxGrid$']['bottom'] < this['BOTTOM_LIMIT']) {
				this['boxGrid$']['bottom'] = this['BOTTOM_LIMIT'];
			}
		}
		let _0x161eda = this['_getRect$'](this['boxGrid$']);
		let _0x37e2b1 = {
			'top': this['top$'],
			'bottom': this['bottom$'],
			'left': this['left$'],
			'right': this['right$']
		};
		pgdk$['showGridAd$'](_0x161eda, _0x37e2b1);
	} ['_getRect$'](_0x33e295) {
		let _0x5b3203 = _0x33e295['localToGlobal'](new Laya['Point'](0x0, 0x0));
		let _0x441d74 = _0x33e295['localToGlobal'](new Laya['Point'](_0x33e295['width'], _0x33e295['height']));
		let _0x476458 = {
			'x': _0x5b3203['x'],
			'y': _0x5b3203['y'],
			'width': _0x441d74['x'] - _0x5b3203['x'],
			'height': _0x441d74['y'] - _0x5b3203['y']
		};
		let _0x47f68c = Laya['stage']['width'] / Laya['Browser']['clientWidth'];
		let _0x4311bb = Laya['stage']['height'] / Laya['Browser']['clientHeight'];
		return {
			'left': _0x476458['x'] / _0x47f68c,
			'top': _0x476458['y'] / _0x4311bb,
			'width': _0x476458['width'] / _0x47f68c,
			'height': _0x476458['height'] / _0x4311bb
		};
	} ['onEnable']() {
		window['pgdk$'] && pgdk$['onUIOpen$'](this);
		if (this['autoShowBanner$']) {
			this['hasAutoShowBanner$'] = !![];
			Laya['timer']['once'](0x64, this, this['restoreBanner$']);
		}
	} ['onDisable']() {
		this['hasAutoShowBanner$'] = ![];
		this['hideBanner$']();
		this['hideGridAd$']();
		window['pgdk$'] && pgdk$['onUIClose$'](this);
	} ['onDestroy']() {
		this['hasAutoShowBanner$'] = ![];
		this['hideBanner$']();
		this['hideGridAd$']();
		window['pgdk$'] && pgdk$['onUIClose$'](this);
	}
}
class PgViewGrid$ extends PgViewBase {
	constructor() {
		super();
		this['viewName$'] = null;
		this['bgSkin$'] = null;
		this['iconMask$'] = null;
		this['iconBg$'] = null;
		this['titleBg$'] = null;
		this['titleColor$'] = '#FFFFFF';
		this['columns$'] = 0x3;
		this['rows$'] = 0x0;
		this['spacingX$'] = 0xa;
		this['spacingY$'] = 0xa;
		this['dataType'] = 'promotion';
		this['padding'] = 0x5;
	} ['onStart']() {
		this['initUI$']();
		this['executeWhenSdkReady$'](this, this['createAds$']['bind'](this));
	} ['initUI$']() {
		this['owner']['bgColor'] = '';
		this['owner']['alpha'] = 0x1;
		this['ui$'] = this['owner']['addChild'](new Laya['Box']());
		this['ui$']['viewName$'] = this['viewName$'];
		let _0x51b949 = this['ui$']['width'] = this['owner']['width'];
		let _0x2555d4 = this['ui$']['height'] = this['owner']['height'];
		this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0);
		if (typeof top === 'number' && typeof bottom === 'number') _0x2555d4 = Laya['stage']['height'] - bottom - top;
		if (typeof left === 'number' && typeof right === 'number') _0x51b949 = Laya['stage']['width'] - right - left;
		this['cellWidth'] = Math['floor']((_0x51b949 - 0xa - this['spacingX$'] * (this['columns$'] - 0x1)) / this['columns$']);
		this['cellHeight'] = Math['floor'](this['cellWidth'] * 1.2);
		if (this['rows$']) {
			let _0x3c8894 = (this['cellHeight'] + this['spacingY$']) * this['rows$'] - this['spacingY$'] + 0xa;
			if (_0x2555d4 > _0x3c8894) {
				_0x2555d4 = _0x3c8894;
				this['ui$']['bottom'] = NaN;
				this['ui$']['height'] = _0x2555d4;
			}
		}
		this['width$'] = _0x51b949;
		this['height$'] = _0x2555d4;
		this['createBg$']();
		this['createList$']();
		this['titleBgList$'] = this['titleBg$'] ? this['titleBg$']['split'](',') : undefined;
		let _0x3a5b86 = this['list$']['addComponent'](PgAutoScroll$);
		_0x3a5b86['step'] = 0x3;
	} ['getTitleBg$'](_0x5360a7) {
		return this['titleBgList$'] ? this['titleBgList$'][_0x5360a7 % this['titleBgList$']['length']] : undefined;
	} ['createBg$']() {
		if (!this['bgSkin$']) return;
		let _0x4a69a6;
		if (this['bgSkin$']['startWith$']('#')) {
			_0x4a69a6 = this['ui$']['addChild'](new Laya['Box']());
			_0x4a69a6['width'] = this['width$'];
			_0x4a69a6['height'] = this['height$'];
			_0x4a69a6['bgColor'] = this['bgSkin$'];
			_0x4a69a6['alpha'] = 0.7;
		} else {
			let _0x3af05a = this['bgSkin$']['split'](';');
			_0x4a69a6 = this['ui$']['addChild'](new Laya['Image']());
			_0x4a69a6['width'] = this['width$'];
			_0x4a69a6['height'] = this['height$'];
			_0x4a69a6['skin'] = _0x3af05a[0x0];
			_0x3af05a[0x1] && (_0x4a69a6['sizeGrid'] = _0x3af05a[0x1]);
		}
		this['setWidget$'](_0x4a69a6, 0x0, 0x0, 0x0, 0x0);
	} ['createList$']() {
		this['list$'] = this['ui$']['addChild'](this['createBaseList$'](![]));
		this['list$']['repeatX'] = this['columns$'];
		this['list$']['repeatY'] = Math['floor'](this['height$'] / this['cellHeight']) + 0x1;
		this['list$']['name'] = 'List';
		this['list$']['spaceX'] = this['spacingX$'];
		this['list$']['spaceY'] = this['spacingY$'];
		this['list$']['anchorX'] = this['list$']['anchorY'] = 0.5;
		this['list$']['width'] = this['width$'];
		this['list$']['height'] = this['height$'];
		this['setWidget$'](this['list$'], 0x5, 0x5, 0x5, 0x5);
		this['list$']['renderHandler'] = new Laya['Handler'](this, this['renderHandler$']);
		this['list$']['itemRender'] = {
			'type': 'Image',
			'props': {
				'width': this['cellWidth'],
				'height': this['cellHeight']
			}
		};
		this['createAds$']();
	} ['renderHandler$'](_0x1af2a7, _0x214474) {
		if (_0x1af2a7['numChildren'] === 0x0) {
			if (this['iconBg$']) {
				let _0x3f0820;
				if (this['iconBg$']['startWith$']('#')) {
					_0x3f0820 = _0x1af2a7['addChild'](new Laya['Box']());
					_0x3f0820['bgColor'] = this['iconBg$'];
				} else {
					_0x3f0820 = _0x1af2a7['addChild'](new Laya['Image']());
					let _0x314ac0 = this['iconBg$']['split'](';');
					_0x3f0820['skin'] = _0x314ac0[0x0];
					_0x3f0820['sizeGrid'] = _0x314ac0[0x1];
				}
				_0x3f0820['width'] = this['cellWidth'];
				_0x3f0820['height'] = this['cellHeight'];
			}
			_0x1af2a7['icon$'] = _0x1af2a7['addChild'](new PgImage$());
			_0x1af2a7['icon$']['name'] = 'GameIcon';
			_0x1af2a7['icon$']['width'] = _0x1af2a7['icon$']['height'] = this['iconBg$'] ? this['cellWidth'] - this['padding'] * 0x2 : this['cellWidth'];
			_0x1af2a7['icon$']['top'] = this['iconBg$'] ? this['padding'] : 0x0;
			_0x1af2a7['icon$']['centerX'] = 0x0;
			_0x1af2a7['icon$']['setSkin'](_0x1af2a7['dataSource']['img']);
			if (this['iconMask$']) {
				let _0x3fe147 = new Laya['Image']();
				_0x3fe147['width'] = _0x1af2a7['icon$']['width'];
				_0x3fe147['height'] = _0x1af2a7['icon$']['height'];
				_0x3fe147['skin'] = this['iconMask$'];
				_0x1af2a7['icon$']['mask'] = _0x3fe147;
			}
			if (this['titleBg$']) {
				_0x1af2a7['titleBg$'] = _0x1af2a7['addChild'](new Laya['Image']());
				_0x1af2a7['titleBg$']['bottom'] = 0x0;
				_0x1af2a7['titleBg$']['left'] = _0x1af2a7['titleBg$']['right'] = 0x0;
				_0x1af2a7['titleBg$']['height'] = this['cellHeight'] - this['cellWidth'];
				_0x1af2a7['titleBg$']['skin'] = this['getTitleBg$'](_0x214474);
			}
			let _0x16cfa5 = this['cellHeight'] - this['cellWidth'] - 0xa;
			_0x1af2a7['title$'] = this['createLabel$'](_0x1af2a7, _0x16cfa5, _0x1af2a7['dataSource']['title']['substring'](0x0, 0x6), this['titleColor$']);
			_0x1af2a7['title$']['anchorX'] = _0x1af2a7['title$']['anchorY'] = 0.5;
			_0x1af2a7['title$']['centerX'] = 0x0;
			this['setWidget$'](_0x1af2a7['title$'], null, 0x5, null, null);
		}
		_0x1af2a7['icon$']['setSkin'](_0x1af2a7['dataSource']['img']);
		_0x1af2a7['title$']['text'] = _0x1af2a7['dataSource']['title']['substring'](0x0, 0x6);
		this['registerAdClickEvent$'](_0x1af2a7, this['viewName$']);
	} ['createAds$']() {
		this['list$']['array'] = window['pgdk$'] && pgdk$['unsortedAds$'](this['dataType']);
	}
}
class PgViewIndex$ extends PgViewBase {
	constructor() {
		super();
		this['viewName$'] = null;
		this['dialogBgSkin$'] = 'sdk/image_round_bg_blue.png;20,20,20,20';
		this['width$'] = 0x1f4;
		this['height$'] = 0x2bc;
		this['iconMask$'] = 'sdk/image_icon_bg.png';
		this['titleBg$'] = null;
		this['titleColor$'] = '#000000';
		this['hScrollBarSkin$'] = 'common/hscroll.png';
		this['showBanner$'] = ![];
		this['listMargin$'] = 0x2;
		this['canClose$'] = !![];
	} ['onStart']() {
		this['owner']['on'](Laya['Event']['CLICK'], this, this['showUI$']);
	} ['showUI$']() {
		if (!this['ui$']) {
			this['initUI$']();
		} else {
			Laya['stage']['addChild'](this['ui$']);
			this['initTrick$']();
		}
	} ['initUI$']() {
		this['titleBgList$'] = this['titleBg$'] && this['titleBg$']['split'](',');
		this['ui$'] = new Laya['Box']();
		this['ui$']['zOrder'] = 0x3b9ac9ff;
		this['ui$']['name'] = 'PgViewIndex';
		this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0);
		Laya['stage']['addChild'](this['ui$']);
		this['createBg$']();
		this['createDialogBg$']();
		this['createTitle$']();
		this['createCloseBtn$']();
		this['createGrid$']();
		this['initTrick$']();
	} ['initTrick$']() {
		if (typeof pgdk$ === 'undefined') {
			Laya['timer']['once'](0x64, this, this['initTrick$']);
			return;
		}
		this['canClose$'] = !![];
		if (this['showBanner$']) {
			if (!this['boxBanner$']) {
				this['createBannerBox$']();
				this['dialogBg$']['centerY'] = -0x64;
				let _0xe8578c = this['ui$']['addComponent'](PgTopView$);
				_0xe8578c['boxBanner$'] = this['boxBanner$'];
				_0xe8578c['bottom$'] = 0x0;
				_0xe8578c['autoShowBanner$'] = ![];
				this['btnClose$']['top'] = NaN;
				this['btnClose$']['right'] = NaN;
				this['btnClose$']['centerX'] = 0x0;
			}
			this['btnClose$']['centerY'] = this['height$'] / 0x2 + 0x32;
			if (pgdk$['canTrick$']()) {
				this['canClose$'] = ![];
				this['btnClose$']['centerY'] = Laya['stage']['height'] / 0x2 - 0x50;
				Laya['timer']['once'](0x5dc, this, this['_showBanner$']);
			} else {
				Laya['timer']['callLater'](this, function() {
					this['ui$']['getComponent'](PgTopView$)['restoreBanner$']();
				});
			}
		}
	} ['_showBanner$']() {
		this['canClose$'] = !![];
		let _0x3504ac = this['btnClose$']['centerY'];
		this['btnClose$']['centerY'] = this['height$'] / 0x2 + 0x32;
		Laya['Tween']['from'](this['btnClose$'], {
			'centerY': _0x3504ac
		}, 0x1f4, Laya['Ease']['elasticInOut'], null, 0x0);
		this['ui$']['getComponent'](PgTopView$)['restoreBanner$']();
	} ['createBannerBox$']() {
		this['boxBanner$'] = this['ui$']['addChild'](new Laya['Box']());
		this['boxBanner$']['zOrder'] = 0x1;
		this['boxBanner$']['left'] = this['boxBanner$']['right'] = 0x0;
		this['boxBanner$']['bottom'] = 0xa;
		this['boxBanner$']['height'] = 0xdc;
		this['boxBanner$']['bgColor'] = '#FFFFFF';
	} ['getTitleBg$']() {
		return this['titleBgList$'] ? this['titleBgList$'][Math['floor'](Math['random']() * this['titleBgList$']['length'])] : undefined;
	} ['createBg$']() {
		let _0x4bc131 = new Laya['Box']();
		_0x4bc131['name'] = 'ImageBg';
		_0x4bc131['bgColor'] = '#000000';
		this['setWidget$'](_0x4bc131, 0x0, 0x0, 0x0, 0x0);
		_0x4bc131['alpha'] = 0.7;
		this['ui$']['addChild'](_0x4bc131);
	} ['createTitle$']() {
		let _0x46850a = new Laya['Image']();
		_0x46850a['skin'] = 'sdk/index-hot.png';
		_0x46850a['centerX'] = 0x0;
		_0x46850a['top'] = 0x14;
		this['dialogBg$']['addChild'](_0x46850a);
	} ['createCloseBtn$']() {
		this['btnClose$'] = new Laya['Image']();
		this['btnClose$']['skin'] = 'sdk/index-close.png';
		this['btnClose$']['top'] = 0x5;
		this['btnClose$']['right'] = 0x5;
		this['btnClose$']['on'](Laya['Event']['CLICK'], this, this['doClose$']);
		this['dialogBg$']['addChild'](this['btnClose$']);
	} ['doClose$']() {
		if (!this['canClose$']) return;
		Laya['timer']['clear'](this, this['_showBanner$']);
		this['ui$']['removeSelf']();
	} ['createDialogBg$']() {
		this['dialogBg$'] = new Laya['Image']();
		this['dialogBg$']['width'] = this['width$'];
		this['dialogBg$']['height'] = this['height$'];
		this['dialogBg$']['centerX'] = 0x0;
		this['dialogBg$']['centerY'] = 0x0;
		let _0x25c61f = this['dialogBgSkin$']['split'](';');
		this['dialogBg$']['skin'] = _0x25c61f[0x0];
		_0x25c61f[0x1] && (this['dialogBg$']['sizeGrid'] = _0x25c61f[0x1]);
		this['ui$']['addChild'](this['dialogBg$']);
	} ['createGrid$']() {
		this['createGridBg$']();
		this['grid$'] = new Laya['Box']();
		this['grid$']['width'] = this['width$'] - this['listMargin$'] * 0x2;
		this['grid$']['height'] = this['height$'] - 0x50;
		this['grid$']['centerX'] = 0x0;
		this['grid$']['bottom'] = this['listMargin$'];
		this['dialogBg$']['addChild'](this['grid$']);
		this['comp'] = this['grid$']['addComponent'](PgViewGrid$);
		this['comp']['viewName$'] = this['viewName$'];
		this['comp']['iconMask$'] = this['iconMask$'];
		this['comp']['titleBg$'] = this['titleBg$'];
		this['comp']['titleColor$'] = this['titleColor$'];
	} ['createGridBg$']() {
		this['grid$'] = new Laya['Image']();
		this['grid$']['skin'] = 'sdk/image_icon_bg.png';
		this['grid$']['sizeGrid'] = '20,20,20,20';
		this['grid$']['width'] = this['width$'] - this['listMargin$'] * 0x2;
		this['grid$']['height'] = this['height$'] - 0x50;
		this['grid$']['centerX'] = 0x0;
		this['grid$']['bottom'] = this['listMargin$'];
		this['dialogBg$']['addChild'](this['grid$']);
	}
}
class PgViewList$ extends PgViewBase {
	constructor() {
		super();
		this['viewName$'] = null;
		this['direction$'] = 'horizontal';
		this['bgSkin$'] = '#000000';
		this['iconBg$'] = null;
		this['iconMask$'] = null;
		this['showTitle$'] = !![];
		this['titleBg$'] = null;
		this['titleColor$'] = '#FFFFFF';
		this['margin$'] = 0x5;
		this['space$'] = 0x5;
		this['dataType'] = 'promotion';
		this['hScrollBarSkin$'] = 'common/hscroll.png';
		this['width'] = 0x2d0;
		this['height'] = 0xaf;
		this['cellWidth'] = 0x8c;
		this['cellHeight'] = 0xa5;
		this['titleHeight$'] = 0x19;
	} ['onStart']() {
		this['initUI$']();
		this['list$']['addComponent'](PgAutoScroll$);
		this['executeWhenSdkReady$'](this, this['createAds$']['bind'](this));
	} ['initUI$']() {
		if (this['direction$'] === 'vertical') {
			this['cellWidth'] = this['owner']['width'] - this['margin$'] * 0x2;
			this['cellHeight'] = this['showTitle$'] ? this['cellWidth'] + this['titleHeight$'] : this['cellWidth'];
		} else {
			this['cellHeight'] = this['owner']['height'] - this['margin$'] * 0x2;
			this['cellWidth'] = this['showTitle$'] ? this['cellHeight'] - this['titleHeight$'] : this['cellHeight'];
		}
		this['owner']['bgColor'] = '';
		this['owner']['alpha'] = 0x1;
		this['titleBgList$'] = this['titleBg$'] && this['titleBg$']['split'](',');
		this['ui$'] = new Laya['Box']();
		this['ui$']['width'] = this['owner']['width'];
		this['ui$']['height'] = this['owner']['height'];
		this['setWidget$'](this['ui$'], 0x0, 0x0, 0x0, 0x0);
		this['owner']['addChild'](this['ui$']);
		this['createBg$']();
		this['createList$']();
	} ['getTitleBg$']() {
		return this['titleBgList$'] ? this['titleBgList$'][Math['floor'](Math['random']() * this['titleBgList$']['length'])] : undefined;
	} ['createBg$']() {
		if (!this['bgSkin$']) return;
		let _0x584670 = this['createBgNode$'](this['ui$'], this['bgSkin$'], this['width$'], this['height$']);
		this['setWidget$'](_0x584670, 0x0, 0x0, 0x0, 0x0);
	} ['createList$']() {
		this['list$'] = new Laya['List']();
		if (this['direction$'] === 'vertical') {
			this['list$']['spaceY'] = this['space$'];
			this['list$']['repeatX'] = 0x1;
			this['list$']['repeatY'] = 0xa;
			this['list$']['vScrollBarSkin'] = this['vScrollBarSkin$'] || 'common/vscroll.png';
		} else {
			this['list$']['spaceX'] = this['space$'];
			this['list$']['repeatX'] = 0xa;
			this['list$']['repeatY'] = 0x1;
			this['list$']['hScrollBarSkin'] = this['hScrollBarSkin$'] || 'common/hscroll.png';
		}
		this['list$']['scrollBar']['visible'] = ![];
		this['list$']['renderHandler'] = new Laya['Handler'](this, this['renderHandler$']);
		this['setWidget$'](this['list$'], this['margin$'], this['margin$'], this['margin$'], this['margin$']);
		this['ui$']['addChild'](this['list$']);
		this['list$']['itemRender'] = {
			'type': 'Image',
			'props': {
				'width': this['cellWidth'],
				'height': this['cellHeight']
			}
		};
	} ['renderHandler$'](_0x3a1b16, _0x3bbf07) {
		this['renderIconBg$'](_0x3a1b16, _0x3bbf07);
		this['renderIcon$'](_0x3a1b16, _0x3bbf07);
		this['renderTitle$'](_0x3a1b16, _0x3bbf07);
		this['registerAdClickEvent$'](_0x3a1b16, this['viewName$']);
	} ['renderIconBg$'](_0x5154d3, _0x4ec429) {
		if (!this['iconBg$']) return;
		this['iconBgNode$'] = this['createBgNode$'](_0x5154d3, this['iconBg$'], this['cellWidth'], this['cellHeight']);
		this['iconBgNode$']['zOrder'] = -0x1;
		this['setWidget$'](this['iconBgNode$'], 0x0, 0x0, 0x0, 0x0);
	} ['renderIcon$'](_0x23eac6, _0x471e09) {
		let _0xfbde4b = _0x23eac6['getChildByName']('GameIcon');
		if (!_0xfbde4b) {
			_0xfbde4b = _0x23eac6['addChild'](new PgImage$());
			_0xfbde4b['name'] = 'GameIcon';
			if (this['iconBgNode$']) {
				let _0x146b49 = 0x5;
				_0xfbde4b['width'] = _0xfbde4b['height'] = this['cellWidth'] - _0x146b49 * 0x2;
				_0xfbde4b['top'] = _0xfbde4b['left'] = _0x146b49;
			} else {
				_0xfbde4b['width'] = _0xfbde4b['height'] = this['cellWidth'];
			}
			if (this['iconMask$']) {
				let _0x522206 = new Laya['Image']();
				_0x522206['width'] = _0xfbde4b['width'];
				_0x522206['height'] = _0xfbde4b['height'];
				_0x522206['skin'] = this['iconMask$'];
				_0xfbde4b['mask'] = _0x522206;
			}
		}
		_0xfbde4b['setSkin'](_0x23eac6['dataSource']['img']);
	} ['renderTitle$'](_0x16fdbe, _0x352c63) {
		if (!this['showTitle$']) return;
		let _0x178ff0 = _0x16fdbe['getChildByName']('GameTitleBg');
		if (!_0x178ff0) {
			_0x178ff0 = _0x16fdbe['addChild'](new Laya['Image']());
			_0x178ff0['bottom'] = 0x0;
			_0x178ff0['name'] = 'GameTitleBg';
			_0x178ff0['width'] = this['cellWidth'];
			_0x178ff0['height'] = 0x19;
			_0x178ff0['skin'] = this['getTitleBg$']();
		}
		let _0x2a19ff = _0x178ff0['getChildByName']('GameTitle');
		if (!_0x2a19ff) {
			_0x2a19ff = this['createLabel$'](_0x178ff0, 0x19, _0x16fdbe['dataSource']['title']['substring'](0x0, 0x6), this['titleColor$']);
			_0x2a19ff['name'] = 'GameTitle';
			_0x2a19ff['anchorX'] = _0x2a19ff['anchorY'] = 0.5;
			_0x2a19ff['centerX'] = 0x0;
			this['setWidget$'](_0x2a19ff, null, 0x0, null, null);
		} else _0x2a19ff['text'] = _0x16fdbe['dataSource']['title']['substring'](0x0, 0x6);
	} ['createAds$']() {
		this['list$']['array'] = pgdk$['unsortedAds$'](this['dataType']);
	}
}
class Pgdk$ extends Laya['Script'] {
	constructor() {
		super();
		window['pgdk$'] = this;
		this['app_version'] = 0x2;
	} ['onStart']() {
		console['log'](this['dataHandler$']);
		if (this['dataHandler$']['app_version']) this['app_version'] = this['dataHandler$']['app_version'];
		this['channel$'] = this['platformHandler$'] != void 0x0 ? this['platformHandler$']['channel$'] : 'pg';
		this['_getParamData$']();
	} ['unsortedAds$'](_0x26f07e) {
		let _0x3aef99 = [];
		if (pgdk$['isSdkReady$']) {
			let _0x3ab248 = [];
			let _0x2359b4 = pgdk$['getAds$'](_0x26f07e);
			for (let _0x2bc99f = 0x0; _0x2bc99f < _0x2359b4['length']; _0x2bc99f++) {
				_0x3ab248['push'](_0x2359b4[_0x2bc99f]);
			}
			while (_0x3ab248['length'] > 0x0) {
				let _0x99a31e = Math['floor'](Math['random']() * _0x3ab248['length']);
				_0x3aef99['push'](_0x3ab248['removeAt$'](_0x99a31e));
			}
		}
		return _0x3aef99;
	} ['getAds$'](_0x469264) {
		return this['dataHandler$']['getAds$'](_0x469264);
	} ['getRandomAd$'](_0x272ffa) {
		if (!this['isSdkReady$']) return undefined;
		if (!this['_randomAdCache$']) {
			this['_randomAdCache$'] = [];
			this['_randomAdCache$']['pushAll$'](this['getAds$'](_0x272ffa));
		}
		return this['_randomAdCache$'] && this['_randomAdCache$']['length'] > 0x0 && this['_randomAdCache$']['removeAt$'](Math['floor'](Math['random']() * this['_randomAdCache$']['length']));
	} ['recoverRandomAd$'](_0x4716b5) {
		if (!_0x4716b5) return;
		if (!this['isSdkReady$']) return;
		if (this['_randomAdCache$']['indexOf'](_0x4716b5) === -0x1) {
			this['_randomAdCache$']['push'](_0x4716b5);
		}
	} ['_getParamData$']() {} ['checkCity$']() {} ['checkSceneValue$']() {
		if (window['tt']) {
			console['log']('???', tt['getLaunchOptionsSync']()['scene']);
			var _0x58fcb7 = tt['getLaunchOptionsSync']() && tt['getLaunchOptionsSync']()['scene'];
			if (_0x58fcb7 == '021002' || _0x58fcb7 == '011007' || _0x58fcb7 == '990001') {
				this['cfg$']['switch1'] = 0x0;
				this['cfg$']['switch2'] = 0x0;
			}
		}
		if (!window['qq']) return;
		console['log']('???', qq['getLaunchOptionsSync']()['scene']);
		var _0x58fcb7 = qq['getLaunchOptionsSync']() && qq['getLaunchOptionsSync']()['scene'];
		if (_0x58fcb7 == 0x3f3 || _0x58fcb7 == 0x3f4) {
			this['cfg$']['switch1'] = 0x0;
			this['cfg$']['switch2'] = 0x0;
		}
	} ['_reciveParamData$'](_0x4a51ba) {
		if (_0x4a51ba['name']) {
			this['cfg$'] = _0x4a51ba;
			console['log']('寰海后台返回数据成功', _0x4a51ba);
		} else if (!_0x4a51ba || !_0x4a51ba['data']) {
			return;
		} else {
			this['cfg$'] = _0x4a51ba['data'];
		}
		if (_0x4a51ba['relations'][0x0] != '') {
			if (this['dataHandler$']) {
				this['dataHandler$']['setAllData$']();
			}
		}
		this['isParamGot$'] = !![];
		this['replaceBannerWithGridAd$'] = ![];
		this['checkCity$']();
		this['checkSceneValue$']();
	} ['canTrick$']() {
		if (!this['cfg$']) {
			return ![];
		}
		if (this['channel$'] === 'zs') {
			if (this['dataHandler$'] && this['dataHandler$']['cfg$']) {
				if (this['dataHandler$']['cfg$']['zs_switch'] !== 0x1) return ![];
				if (this['dataHandler$']['cfg$']['zs_banner_city'] !== 0x1) return ![];
			}
		} else if (this['channel$'] === 'pg') {
			if (this['cfg$']) {
				let _0x209f91 = Math['random']() < this['cfg$']['switch1'];
				return _0x209f91;
			} else {
				return ![];
			}
		}
	} ['getSwitch2$']() {
		if (this['cfg$']) {
			let _0x83954f = Math['random']() < this['cfg$']['switch2'];
			return _0x83954f;
		} else {
			return ![];
		}
	} ['getPgCfg$'](_0x20370c) {
		try {
			return this['cfg$'][_0x20370c];
		} catch (_0x2eda8c) {
			return undefined;
		}
	} ['isGameCenterViewDelay$']() {
		console['log']('czh\x20是否导出页面延迟展示广告');
		return this['canTrick$']() >= Math['random']();
	} ['getConfig$']() {
		if (!this['dataHandler$'] || !this['dataHandler$']['getConfig$']) return;
		return this['dataHandler$'] && this['dataHandler$']['getConfig$']();
	} ['getPlatformUserId$']() {
		return this['platformHandler$'] && this['platformHandler$']['getUserId$']();
	} ['showMoreGameBtn$']() {
		if (this['dataHandler$'] && this['dataHandler$']['createMoregameBtn$']) this['dataHandler$']['createMoregameBtn$']();
	} ['hideMoreGameBtn$']() {
		if (this['dataHandler$'] && this['dataHandler$']['hideMoregameBtn$']) this['dataHandler$']['hideMoregameBtn$']();
	} ['showBanner$'](_0x325c96, _0x386362, _0x215187) {
		this['platformHandler$'] && this['platformHandler$']['showBanner$'](_0x325c96, _0x386362, _0x215187);
	} ['hideBanner$']() {
		this['platformHandler$'] && this['platformHandler$']['hideBanner$']();
	} ['_getUis$']() {
		if (!this['_uis$']) this['_uis$'] = [];
		return this['_uis$'];
	} ['onUIOpen$'](_0x4e293b) {
		if (this['_getUis$']()['indexOf'](_0x4e293b) === -0x1) {
			this['_getUis$']()['push'](_0x4e293b);
			let _0x404224 = this['_getUis$']()[this['_getUis$']()['length'] - 0x2];
			_0x404224 && _0x404224['hideBanner$'] && _0x404224['hideBanner$']();
			_0x404224 && _0x404224['hideGridAd$'] && _0x404224['hideGridAd$']();
		}
	} ['onUIClose$'](_0x1745ef) {
		if (this['_getUis$']()['indexOf'](_0x1745ef) !== -0x1) {
			for (var _0x2ba4e6 = this['_getUis$']()['length'] - 0x1; _0x2ba4e6 >= 0x0; _0x2ba4e6--) {
				if (this['_getUis$']()[_0x2ba4e6] == _0x1745ef) {
					this['_getUis$']()['splice'](_0x2ba4e6, 0x1);
				}
			}
			this['restoreBanner$']();
			this['restoreGridAd$']();
		}
	} ['restoreBanner$']() {
		let _0x3df4c5 = this['_getUis$']()[this['_getUis$']()['length'] - 0x1];
		_0x3df4c5 && _0x3df4c5['restoreBanner$'] && _0x3df4c5['restoreBanner$']();
	} ['showGridAd$'](_0x9ff8e4, _0x2a65e1) {
		this['platformHandler$'] && this['platformHandler$']['showGridAd$'](_0x9ff8e4, _0x2a65e1);
	} ['hideGridAd$']() {
		if (this['platformHandler$']) {
			if (this['platformHandler$']['hideGridAd$']) {
				this['platformHandler$']['hideGridAd$']();
			}
		}
	} ['restoreGridAd$']() {
		let _0x5be8de = this['_getUis$']()[this['_getUis$']()['length'] - 0x1];
		_0x5be8de && _0x5be8de['restoreGridAd$'] && _0x5be8de['restoreGridAd$']();
	} ['showBlockAd$'](_0x961e12, _0x32ac6f, _0x32083e, _0x133fa8) {
		this['platformHandler$'] && this['platformHandler$']['showBlockAd$'](_0x961e12, _0x32ac6f, _0x32083e, _0x133fa8);
	} ['hideBlockAd$']() {
		this['platformHandler$'] && this['platformHandler$']['hideBlockAd$']();
	} ['showInterstitialAd$']() {
		this['platformHandler$'] && this['platformHandler$']['showInterstitialAd$']();
	} ['showVideoAd$'](_0x5e5a84) {
		this['platformHandler$'] && this['platformHandler$']['showVideoAd$'](_0x5e5a84);
	} ['showAppBox$'](_0x29cb1b) {
		if (this['platformHandler$'] && this['platformHandler$']['showAppBox$']) {
			this['platformHandler$']['showAppBox$'](_0x29cb1b);
		} else {
			_0x29cb1b && _0x29cb1b();
		}
	} ['getNativeAdData$']() {
		return this['platformHandler$'] && this['platformHandler$']['getNativeAdData$']();
	} ['nativeClick$'](_0x422d88) {
		if (!this['platformHandler$'] || !this['platformHandler$']['nativeClick$']) return;
		this['platformHandler$'] && this['platformHandler$']['nativeClick$'](_0x422d88);
	} ['nativeShowClose$'](_0x46fac1) {
		if (!this['platformHandler$'] || !this['platformHandler$']['closeNativeAd$']) return;
		this['platformHandler$'] && this['platformHandler$']['closeNativeAd$'](_0x46fac1);
	} ['reportMonitor$']() {
		this['platformHandler$'] && this['platformHandler$']['reportMonitor$']();
	} ['getUserId$']() {
		this['platformHandler$'] && this['platformHandler$']['getUerId$']();
	} ['showToast$'](_0x27bd1e) {
		if (!this['platformHandler$'] || !this['platformHandler$']['showToast$']) return;
		this['platformHandler$'] && this['platformHandler$']['showToast$'](_0x27bd1e);
	} ['navigateToMiniProgram$'](_0x6e0f50, _0x2bb163, _0x24b9aa, _0x35e3dd) {
		this['platformHandler$']['navigate2Mini$'](_0x6e0f50, _0x2bb163, _0x24b9aa, _0x35e3dd);
	} ['startRecord$'](_0x2e349e, _0x2a21fe, _0x4de280) {
		if (!this['platformHandler$'] || !this['platformHandler$']['recorderStart$']) return;
		this['platformHandler$']['recorderStart$'](_0x2e349e, _0x2a21fe, _0x4de280);
	} ['stopRecord$'](_0x39b1b3) {
		if (!this['platformHandler$'] || !this['platformHandler$']['recorderStop$']) return;
		this['platformHandler$']['recorderStop$'](_0x39b1b3);
	} ['shareRecord$'](_0x34f1dd, _0x77313d) {
		if (!this['platformHandler$'] || !this['platformHandler$']['shareRecordVideo$']) return;
		this['platformHandler$']['shareRecordVideo$'](_0x34f1dd, _0x77313d);
	} ['shareAppMessage$']() {
		this['platformHandler$'] && this['platformHandler$']['shareAppMessage$']();
	} ['shakePhone$'](_0x951d9) {
		if (window['wx']) {
			if (Date['now']() - 0x64 < this['lastShakeT']) return;
			this['lastShakeT'] = Date['now']();
			_0x951d9 ? wx['vibrateLong']() : wx['vibrateShort']();
		} else if (window['qq']) {
			_0x951d9 ? qq['vibrateLong']() : qq['vibrateShort']();
		} else if (window['qg']) {
			qg['vibrateShort']({
				'success': function(_0x3bcd47) {},
				'fail': function(_0x305b31) {},
				'complete': function(_0x1f4ae0) {}
			});
		} else if (window['uc']) {
			if (window['navigator']['vibrate']) {
				window['navigator']['vibrate'](0x64);
			}
		} else {
			if (window['navigator']) {
				if (window['navigator']['vibrate']) {
					window['navigator']['vibrate'](0x64);
				}
			}
		}
	} ['addMaskDisZs$']() {
		let _0x5a263e = new Laya['Box']();
		_0x5a263e['name'] = 'ImageBg';
		_0x5a263e['bgColor'] = '#ffffff';
		_0x5a263e['top'] = 0x0;
		_0x5a263e['bottom'] = 0x0;
		_0x5a263e['left'] = 0x0;
		_0x5a263e['right'] = 0x0;
		_0x5a263e['alpha'] = 0x1;
		_0x5a263e['mouseEnabled'] = ![];
		_0x5a263e['mouseThrough'] = ![];
		_0x5a263e['zOrder'] = 0x3b9ac9ff;
		Laya['stage']['addChild'](_0x5a263e);
	}
}
class GameConfig {
	static['init']() {
		let _0x525ae2 = Laya['ClassUtils']['regClass'];
		_0x525ae2('script/Manager/Config.js', Config);
		_0x525ae2('script/PgBtnAddRoleSpeed$.js', PgBtnAddRoleSpeed$);
		_0x525ae2('script/PgBtnClickRecord$.js', PgBtnClickRecord$);
		_0x525ae2('script/TtAutoAddBtnBg$.js', TtAutoAddBtnBg$);
		_0x525ae2('script/TtShowAutoStartRecord$.js', TtShowAutoStartRecord$);
		_0x525ae2('script/TtShowAutoEndRecord$.js', TtShowAutoEndRecord$);
		_0x525ae2('script/PgAutoAddComTip$.js', PgAutoAddComTip$);
		_0x525ae2('script/PgAutoShowBlockAd$.js', PgAutoShowBlockAd$);
		_0x525ae2('script/PgClickBtnShowVideoAd$.js', PgClickBtnShowVideoAd$);
		_0x525ae2('script/PgAutoShowVideoAd$.js', PgAutoShowVideoAd$);
		_0x525ae2('script/PgAutoShowGridAd$.js', PgAutoShowGridAd$);
		_0x525ae2('script/PgBtnShareApp$.js', PgBtnShareApp$);
		_0x525ae2('script/PgHideComp$.js', PgHideComp$);
		_0x525ae2('script/DelayShow.js', DelayShow);
		_0x525ae2('script/ImgAutoMatchSize.js', ImgAutoMatchSize);
		_0x525ae2('script/sdk/view/PgChouTiAd$.js', PgChouTiAd$);
		_0x525ae2('script/sdk/view/PgViewList$.js', PgViewList$);
		_0x525ae2('script/sdk/view/PgViewGrid$.js', PgViewGrid$);
		_0x525ae2('script/sdk/view/PgInterView$.js', PgInterView$);
		_0x525ae2('script/sdk/view/PgTopView$.js', PgTopView$);
		_0x525ae2('script/sdk/view/pgOppoNativeAd$.js', oppoNativeAdUI$);
		_0x525ae2('script/sdk/view/PgSingleAd$.js', PgSingleAd$);
		_0x525ae2('script/sdk/view/PgViewIndex$.js', PgViewIndex$);
		_0x525ae2('script/sdk/view/PgGameCenter$.js', PgGameCenter$);
		_0x525ae2('script/sdk/view/TtShareRecordWindow$.js', TtShareRecordWindow$);
		_0x525ae2('script/sdk/view/PgTreasureBox$.js', PgTreasureBox$);
		_0x525ae2('script/sdk/view/PgTreasureEgg$.js', PgTreasureEgg$);
		_0x525ae2('script/sdk/data/PgdkDataHhxkWx$.js', PgdkDataHhxkWx$);
		_0x525ae2('script/sdk/platform/PgdkWx$.js', Pgdkwx$);
		_0x525ae2('script/sdk/Pgdk$.js', Pgdk$);
		_0x525ae2('script/sdk/platform/PgdkOppo$.js', PgdkOppo$);
		_0x525ae2('script/sdk/data/PgdkDataHhxkOppo$.js', PgdkDataHhxkOppo$);
		_0x525ae2('script/sdk/platform/PgdkQQ$.js', PgdkQQ$);
		_0x525ae2('script/sdk/data/PgdkDataHhxkQQ$.js', PgdkDataHhxkQQ$);
		_0x525ae2('script/sdk/platform/PgdkToutiao$.js', PgdkToutiao$);
		_0x525ae2('script/sdk/data/PgdkDataHhxkToutiao$.js', PgdkDataHhxkToutiao$);
		_0x525ae2('script/sdk/data/PgdkDataHhxkUc$.js', PgdkDataHhxkUc$);
		_0x525ae2('script/sdk/data/PgdkDataHhxkH5$.js', PgdkDataHhxkH5$);
		_0x525ae2('script/sdk/platform/PgdkUc$.js', PgdkUc$);
		_0x525ae2('script/sdk/platform/PgdkH5$.js', PgdkH5$);
		_0x525ae2('script/sdk/platform/PgdkVivo$.js', PgdkVivo$);
		_0x525ae2('script/sdk/data/PgdkDataHhxkVivo$.js', PgdkDataHhxkVivo$);
	}
}
GameConfig['width'] = 0x2d0;
GameConfig['height'] = 0x500;
GameConfig['scaleMode'] = 'fixedwidth';
GameConfig['screenMode'] = 'none';
GameConfig['alignV'] = 'top';
GameConfig['alignH'] = 'left';
GameConfig['startScene'] = 'WznpPrefab/WznpMain/MainWindowQQ.scene';
GameConfig['sceneRoot'] = '';
GameConfig['debug'] = ![];
GameConfig['stat'] = ![];
GameConfig['physicsDebug'] = ![];
GameConfig['exportSceneToJson'] = !![];
GameConfig['init']();