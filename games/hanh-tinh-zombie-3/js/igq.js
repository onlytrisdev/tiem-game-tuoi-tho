var _$_cc10 = ["[IGQ Distribution API]", "log", "Series", "lone-pistol", "Game", "zombies-in-the-streets", "Build", "gd", "Version", "location", "parent", "referrer", "href", "http://", "", "replace", "https://", "/", "split", "Host", "length", "Localhost", "localhost", "indexOf", "[>] game hosted by : ", "Device", "lang", "language", "navigator", "touch", "maxTouchPoints", "1", "0", "size", "innerWidth", "innerHeight", "sqrt", "round", "Providers", "Ready", "Preroll", "preroll", "Interlude", "interlude", "igq", "Interstitial", "interstitial", "Rewarded", "rewarded", "CallbackPreroll", "CallbackInterstitial", "CallbackRewarded", "AnalyticsUrl", "https://instantgames.qigames.com/", "Gameplay", "LastReward", "LoadJS", "prototype", "script", "createElement", "type", "text/javascript", "setAttribute", "src", "readyState", "onreadystatechange", "loaded", "complete", "[>] IGQ is loaded.", "undefined", "[!] IGQ loading error", "onload", "[>] IGQ is loaded", "appendChild", "head", "getElementsByTagName", "series=", "&game=", "&host=", "&build=", "&v=", "&lang=", "&touch=", "&size=", "gameplay/", "Arcadeplay", "ErrGameplay", "[>] IGQ Analytics", "igq-version", "GetKeyValues", "Update", "Suggested", "Required", "Values", "igq-preroll", "igq-interlude", "igq-interstitial", "igq-rewarded", "ResetProviderDistribution", "igq-js", "GetKeyValue", "[!] IGQ Analytics error : ", "ResetScale", "ProviderIsReady", "[IGQ] Provider is ready #", "id", "push", "Reset", "SetActive", "Select", "[!] No preroll provider", "BackFromPreroll", "SetFocus", "context", "call", "handler", "EndInterlude", "Selected", "[!] No interstitial provider", "BackFromInterstitial", "IsRewardAvailable", "now", "[!] No rewarded provider", "BackFromRewarded", "evt", "Clock", "cb_ctx", "cb_ok", "cb_err", "status", "Http", "Context", "Handler", "onReadyStateChange", "POST", "open", "Content-Type", "application/x-www-form-urlencoded", "setRequestHeader", "send", "timeOut", "responseText", "Status", "ok", "igq-status,err;igq-error,100;igq-error-msg:Network error", "igq-status,err;igq-error,900;igq-error-msg:Timeout", "E900 Timeout", "Error", "ErrorMsg", "Params", ";", ",", "value", "values", "key", "igq-status", "igq-error", "igq-error-msg", "Placement", "Weights", "TotalWeight", "random"];

function IGQAPI() {
    console[_$_cc10[1]](_$_cc10[0]);
    this[_$_cc10[2]] = _$_cc10[3];
    this[_$_cc10[4]] = _$_cc10[5];
    this[_$_cc10[6]] = _$_cc10[7];
    this[_$_cc10[8]] = {
        Build: 1.05,
        Update: 1.05,
        Suggested: 1.05,
        Required: 1.05
    };
    let _0x26051;
    _0x26051 = (window[_$_cc10[9]] !== window[_$_cc10[10]][_$_cc10[9]]) ? document[_$_cc10[11]] : document[_$_cc10[9]][_$_cc10[12]];
    _0x26051 = _0x26051[_$_cc10[15]](_$_cc10[13], _$_cc10[14]);
    _0x26051 = _0x26051[_$_cc10[15]](_$_cc10[16], _$_cc10[14]);
    let _0x26088 = _0x26051[_$_cc10[18]](_$_cc10[17]);
    this[_$_cc10[19]] = _0x26088[_$_cc10[20]] > 0 ? _0x26088[0] : _$_cc10[14];
    this[_$_cc10[21]] = this[_$_cc10[19]][_$_cc10[23]](_$_cc10[22]) > 0;
    console[_$_cc10[1]](_$_cc10[24] + this[_$_cc10[19]]);
    this[_$_cc10[25]] = {};
    this[_$_cc10[25]][_$_cc10[26]] = window[_$_cc10[28]][_$_cc10[27]];
    this[_$_cc10[25]][_$_cc10[29]] = window[_$_cc10[28]][_$_cc10[30]] > 0 ? _$_cc10[31] : _$_cc10[32];
    this[_$_cc10[25]][_$_cc10[33]] = Math[_$_cc10[37]](Math[_$_cc10[36]]((window[_$_cc10[34]] * window[_$_cc10[34]]) + (window[_$_cc10[35]] * window[_$_cc10[35]])));
    this[_$_cc10[38]] = {};
    this[_$_cc10[38]][_$_cc10[39]] = [];
    this[_$_cc10[38]][_$_cc10[40]] = new IGQProviderDistribution(_$_cc10[41], [_$_cc10[7], 100]);
    this[_$_cc10[38]][_$_cc10[42]] = new IGQProviderDistribution(_$_cc10[43], [_$_cc10[44], 100]);
    this[_$_cc10[38]][_$_cc10[45]] = new IGQProviderDistribution(_$_cc10[46], [_$_cc10[7], 100]);
    this[_$_cc10[38]][_$_cc10[47]] = new IGQProviderDistribution(_$_cc10[48], [_$_cc10[7], 100]);
    this[_$_cc10[49]] = null;
    this[_$_cc10[50]] = null;
    this[_$_cc10[51]] = null;
    this[_$_cc10[52]] = _$_cc10[53];
    this[_$_cc10[54]]();
    this[_$_cc10[55]] = 0
}
IGQAPI[_$_cc10[57]][_$_cc10[56]] = function(_0x250D9) {
    if (_0x250D9 === _$_cc10[14]) {
        return
    };
    let _0x25110 = document[_$_cc10[59]](_$_cc10[58]);
    _0x25110[_$_cc10[62]](_$_cc10[60], _$_cc10[61]);
    _0x25110[_$_cc10[62]](_$_cc10[63], _0x250D9);
    if (_0x25110[_$_cc10[64]]) {
        _0x25110[_$_cc10[65]] = function() {
            if (_0x25110[_$_cc10[64]] === _$_cc10[66] || _0x25110[_$_cc10[64]] === _$_cc10[67]) {
                _0x25110[_$_cc10[65]] = null;
                console[_$_cc10[1]](_$_cc10[68]);
                if (typeof IGQModule === _$_cc10[69]) {
                    console[_$_cc10[1]](_$_cc10[70])
                } else {
                    new IGQModule()
                }
            }
        }
    } else {
        _0x25110[_$_cc10[71]] = function() {
            console[_$_cc10[1]](_$_cc10[72]);
            if (typeof IGQModule === _$_cc10[69]) {
                console[_$_cc10[1]](_$_cc10[70])
            } else {
                new IGQModule()
            }
        }
    };
    if (typeof _0x25110 != _$_cc10[69]) {
        document[_$_cc10[75]](_$_cc10[74])[0][_$_cc10[73]](_0x25110)
    }
};
IGQAPI[_$_cc10[57]][_$_cc10[54]] = function() {
    let _0x25147 = _$_cc10[76] + this[_$_cc10[2]] + _$_cc10[77] + this[_$_cc10[4]] + _$_cc10[78] + this[_$_cc10[19]] + _$_cc10[79] + this[_$_cc10[6]] + _$_cc10[80] + this[_$_cc10[8]][_$_cc10[6]] + _$_cc10[81] + this[_$_cc10[25]][_$_cc10[26]] + _$_cc10[82] + this[_$_cc10[25]][_$_cc10[29]] + _$_cc10[83] + this[_$_cc10[25]][_$_cc10[33]];
    new IGQWebRequest(this[_$_cc10[52]] + _$_cc10[84], _0x25147, this, this[_$_cc10[85]], this[_$_cc10[86]])
};
IGQAPI[_$_cc10[57]][_$_cc10[85]] = function(_0x251B5, _0x2517E) {
    console[_$_cc10[1]](_$_cc10[87]);
    let _0x251EC = _0x251B5[_$_cc10[89]](_$_cc10[88]);
    this[_$_cc10[8]][_$_cc10[90]] = Number(_0x251EC[0]);
    this[_$_cc10[8]][_$_cc10[91]] = Number(_0x251EC[1]);
    this[_$_cc10[8]][_$_cc10[92]] = Number(_0x251EC[2]);
    this[_$_cc10[38]][_$_cc10[40]][_$_cc10[93]] = _0x251B5[_$_cc10[89]](_$_cc10[94]);
    this[_$_cc10[38]][_$_cc10[42]][_$_cc10[93]] = _0x251B5[_$_cc10[89]](_$_cc10[95]);
    this[_$_cc10[38]][_$_cc10[45]][_$_cc10[93]] = _0x251B5[_$_cc10[89]](_$_cc10[96]);
    this[_$_cc10[38]][_$_cc10[47]][_$_cc10[93]] = _0x251B5[_$_cc10[89]](_$_cc10[97]);
    this[_$_cc10[98]]();
    this[_$_cc10[56]](_0x251B5[_$_cc10[100]](_$_cc10[99]))
};
IGQAPI[_$_cc10[57]][_$_cc10[86]] = function(_0x25223, _0x2517E) {
    console[_$_cc10[1]](_$_cc10[101] + _0x2517E)
};
IGQAPI[_$_cc10[57]][_$_cc10[102]] = function(_0x25291, _0x2525A) {};
IGQAPI[_$_cc10[57]][_$_cc10[103]] = function(_0x252C8) {
    console[_$_cc10[1]](_$_cc10[104] + _0x252C8[_$_cc10[105]]);
    this[_$_cc10[38]][_$_cc10[39]][_$_cc10[106]](_0x252C8);
    this[_$_cc10[98]]()
};
IGQAPI[_$_cc10[57]][_$_cc10[98]] = function() {
    let _0x252FF = this[_$_cc10[38]][_$_cc10[39]];
    this[_$_cc10[38]][_$_cc10[40]][_$_cc10[107]](_0x252FF);
    this[_$_cc10[38]][_$_cc10[42]][_$_cc10[107]](_0x252FF);
    this[_$_cc10[38]][_$_cc10[45]][_$_cc10[107]](_0x252FF);
    this[_$_cc10[38]][_$_cc10[47]][_$_cc10[107]](_0x252FF)
};
IGQAPI[_$_cc10[57]][_$_cc10[40]] = function(_0x2536D) {
    GAME[_$_cc10[108]](false);
    this[_$_cc10[49]] = _0x2536D;
    let _0x252C8 = this[_$_cc10[38]][_$_cc10[40]][_$_cc10[109]]();
    if (_0x252C8 == null) {
        console[_$_cc10[1]](_$_cc10[110]);
        this[_$_cc10[111]]({
            completed: false,
            error: true
        });
        return
    };
    _0x252C8[_$_cc10[40]]({
        handler: this[_$_cc10[111]],
        context: this
    })
};
IGQAPI[_$_cc10[57]][_$_cc10[111]] = function(_0x24576) {
    GAME[_$_cc10[112]](true);
    GAME[_$_cc10[108]](true);
    if (this[_$_cc10[49]] != null) {
        this[_$_cc10[49]][_$_cc10[115]][_$_cc10[114]](this[_$_cc10[49]][_$_cc10[113]], _0x24576);
        this[_$_cc10[49]] = null
    }
};
IGQAPI[_$_cc10[57]][_$_cc10[42]] = function() {
    let _0x252C8 = this[_$_cc10[38]][_$_cc10[42]][_$_cc10[109]]();
    if (_0x252C8 != null) {
        _0x252C8[_$_cc10[42]]()
    }
};
IGQAPI[_$_cc10[57]][_$_cc10[116]] = function() {
    if (this[_$_cc10[38]][_$_cc10[42]][_$_cc10[117]] != null) {
        this[_$_cc10[38]][_$_cc10[42]][_$_cc10[117]][_$_cc10[116]]()
    }
};
IGQAPI[_$_cc10[57]][_$_cc10[45]] = function(_0x2536D) {
    GAME[_$_cc10[108]](false);
    this[_$_cc10[50]] = _0x2536D;
    let _0x252C8 = this[_$_cc10[38]][_$_cc10[45]][_$_cc10[109]]();
    if (_0x252C8 == null) {
        console[_$_cc10[1]](_$_cc10[118]);
        this[_$_cc10[119]]({
            completed: false,
            error: true
        });
        return
    };
    _0x252C8[_$_cc10[45]]({
        handler: this[_$_cc10[119]],
        context: this
    })
};
IGQAPI[_$_cc10[57]][_$_cc10[119]] = function(_0x24576) {
    GAME[_$_cc10[112]](true);
    GAME[_$_cc10[108]](true);
    if (this[_$_cc10[50]] != null) {
        this[_$_cc10[50]][_$_cc10[115]][_$_cc10[114]](this[_$_cc10[50]][_$_cc10[113]], _0x24576)
    };
    this[_$_cc10[50]] = null
};
IGQAPI[_$_cc10[57]][_$_cc10[120]] = function() {
    return Date[_$_cc10[121]]() - this[_$_cc10[55]] > 2 * 60 * 1000
};
IGQAPI[_$_cc10[57]][_$_cc10[47]] = function(_0x2536D) {
    this[_$_cc10[55]] = Date[_$_cc10[121]]();
    GAME[_$_cc10[108]](false);
    this[_$_cc10[51]] = _0x2536D;
    let _0x252C8 = this[_$_cc10[38]][_$_cc10[47]][_$_cc10[109]]();
    if (_0x252C8 == null) {
        console[_$_cc10[1]](_$_cc10[122]);
        GAME[_$_cc10[125]][_$_cc10[124]](2, this, this[_$_cc10[123]], {
            completed: false,
            error: true
        });
        return
    };
    _0x252C8[_$_cc10[47]]({
        handler: this[_$_cc10[123]],
        context: this
    })
};
IGQAPI[_$_cc10[57]][_$_cc10[123]] = function(_0x24576) {
    GAME[_$_cc10[112]](true);
    GAME[_$_cc10[108]](true);
    if (this[_$_cc10[51]] != null) {
        this[_$_cc10[51]][_$_cc10[115]][_$_cc10[114]](this[_$_cc10[51]][_$_cc10[113]], _0x24576)
    };
    this[_$_cc10[51]] = null
};

function IGQWebRequest(_0x261D2, _0x25147, _0x2612D, _0x2619B, _0x26164) {
    this[_$_cc10[126]] = _0x2612D;
    this[_$_cc10[127]] = _0x2619B;
    this[_$_cc10[128]] = _0x26164;
    this[_$_cc10[129]] = 0;
    let _0x26209 = this[_$_cc10[130]] = new XMLHttpRequest();
    _0x26209[_$_cc10[131]] = this;
    _0x26209[_$_cc10[132]] = this[_$_cc10[133]];
    _0x26209[_$_cc10[65]] = function() {
        this[_$_cc10[132]][_$_cc10[114]](this[_$_cc10[131]])
    };
    _0x26209[_$_cc10[135]](_$_cc10[134], _0x261D2, true);
    _0x26209[_$_cc10[138]](_$_cc10[136], _$_cc10[137]);
    _0x26209[_$_cc10[139]](_0x25147);
    GAME[_$_cc10[125]][_$_cc10[124]](10, this, this[_$_cc10[140]])
}
IGQWebRequest[_$_cc10[57]][_$_cc10[133]] = function() {
    if (this[_$_cc10[129]] === 9) {
        return
    };
    if (this[_$_cc10[130]][_$_cc10[64]] === 4) {
        let _0x2517E = this[_$_cc10[130]][_$_cc10[141]];
        if (this[_$_cc10[130]][_$_cc10[129]] === 200) {
            let _0x25449 = new IGQWebResponse(_0x2517E);
            if (_0x25449[_$_cc10[142]] === _$_cc10[143]) {
                this[_$_cc10[129]] = 1;
                this[_$_cc10[127]][_$_cc10[114]](this[_$_cc10[126]], _0x25449, _0x2517E)
            } else {
                this[_$_cc10[129]] = 5;
                this[_$_cc10[128]][_$_cc10[114]](this[_$_cc10[126]], _0x25449, _0x2517E)
            }
        } else {
            this[_$_cc10[129]] = 5;
            let _0x2517E = _$_cc10[144];
            let _0x25449 = new IGQWebResponse(_0x2517E);
            this[_$_cc10[128]][_$_cc10[114]](this[_$_cc10[126]], _0x25449, _0x2517E)
        }
    }
};
IGQWebRequest[_$_cc10[57]][_$_cc10[140]] = function() {
    if (this[_$_cc10[129]] > 0) {
        return
    };
    this[_$_cc10[129]] = 9;
    let _0x2517E = _$_cc10[145];
    let _0x25449 = new IGQWebResponse(_0x2517E);
    this[_$_cc10[128]][_$_cc10[114]](this[_$_cc10[126]], _0x25449, _$_cc10[146])
};

function IGQWebResponse(_0x25BCE) {
    this[_$_cc10[142]] = _$_cc10[14];
    this[_$_cc10[147]] = _$_cc10[14];
    this[_$_cc10[148]] = _$_cc10[14];
    this[_$_cc10[149]] = [];
    let _0x22CC1 = _0x25BCE[_$_cc10[18]](_$_cc10[150]);
    for (let _0x22C8A = 0; _0x22C8A < _0x22CC1[_$_cc10[20]]; _0x22C8A++) {
        let _0x22CF8 = _0x22CC1[_0x22C8A][_$_cc10[18]](_$_cc10[151]);
        if (_0x22CF8[_$_cc10[20]] > 1) {
            let _0x26240 = {
                key: _0x22CF8[0],
                value: _$_cc10[14],
                values: []
            };
            this[_$_cc10[149]][_$_cc10[106]](_0x26240);
            _0x26240[_$_cc10[152]] = _0x22CF8[1];
            for (let _0x23ECD = 1; _0x23ECD < _0x22CF8[_$_cc10[20]]; _0x23ECD++) {
                _0x26240[_$_cc10[153]][_$_cc10[106]](_0x22CF8[_0x23ECD])
            };
            if (_0x26240[_$_cc10[154]] === _$_cc10[155]) {
                this[_$_cc10[142]] = _0x26240[_$_cc10[152]]
            };
            if (_0x26240[_$_cc10[154]] === _$_cc10[156]) {
                this[_$_cc10[147]] = _0x26240[_$_cc10[152]]
            };
            if (_0x26240[_$_cc10[154]] === _$_cc10[157]) {
                this[_$_cc10[148]] = _0x26240[_$_cc10[152]]
            }
        }
    }
}
IGQWebResponse[_$_cc10[57]][_$_cc10[100]] = function(_0x23D15) {
    for (let _0x22C8A = 0; _0x22C8A < this[_$_cc10[149]][_$_cc10[20]]; _0x22C8A++) {
        if (this[_$_cc10[149]][_0x22C8A][_$_cc10[154]] === _0x23D15) {
            return this[_$_cc10[149]][_0x22C8A][_$_cc10[152]]
        }
    };
    return _$_cc10[14]
};
IGQWebResponse[_$_cc10[57]][_$_cc10[89]] = function(_0x23D15) {
    for (let _0x22C8A = 0; _0x22C8A < this[_$_cc10[149]][_$_cc10[20]]; _0x22C8A++) {
        if (this[_$_cc10[149]][_0x22C8A][_$_cc10[154]] === _0x23D15) {
            return this[_$_cc10[149]][_0x22C8A][_$_cc10[153]]
        }
    };
    return []
};

function IGQProviderDistribution(_0x260F6, _0x260BF) {
    this[_$_cc10[158]] = _0x260F6;
    this[_$_cc10[38]] = [];
    this[_$_cc10[159]] = [];
    this[_$_cc10[160]] = 0;
    this[_$_cc10[93]] = _0x260BF;
    this[_$_cc10[117]] = null
}
IGQProviderDistribution[_$_cc10[57]][_$_cc10[107]] = function(_0x252FF) {
    this[_$_cc10[38]] = _0x252FF;
    this[_$_cc10[159]] = [];
    this[_$_cc10[160]] = 0;
    for (let _0x22C8A = 0; _0x22C8A < this[_$_cc10[38]][_$_cc10[20]]; _0x22C8A++) {
        let _0x25525 = 0;
        for (let _0x23ECD = 0; _0x23ECD < this[_$_cc10[93]][_$_cc10[20]]; _0x23ECD++) {
            if (this[_$_cc10[38]][_0x22C8A][_$_cc10[105]] === this[_$_cc10[93]][_0x23ECD]) {
                _0x25525 = Number(this[_$_cc10[93]][_0x23ECD + 1])
            }
        };
        this[_$_cc10[159]][_$_cc10[106]](_0x25525);
        this[_$_cc10[160]] += _0x25525
    }
};
IGQProviderDistribution[_$_cc10[57]][_$_cc10[109]] = function() {
    let _0x2555C = this[_$_cc10[38]][_$_cc10[20]];
    if (_0x2555C === 0) {
        return null
    };
    if (_0x2555C === 1) {
        return this[_$_cc10[38]][0]
    };
    let _0x23522 = 0;
    let _0x2310D = Math[_$_cc10[161]]() * this[_$_cc10[160]];
    for (let _0x22C8A = 0; _0x22C8A < _0x2555C; _0x22C8A++) {
        _0x23522 += this[_$_cc10[159]][_0x22C8A];
        if (_0x2310D <= _0x23522) {
            return this[_$_cc10[38]][_0x22C8A]
        }
    };
    this[_$_cc10[117]] = Providers[0];
    return this[_$_cc10[117]]
}