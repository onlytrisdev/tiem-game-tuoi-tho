var site, game_name, recievedJson, publisherFinal, flag, adblockOn, customPublisher, params_from_url, startScript, gameStarted, gameCanRun, userHasAdblock, siteLock, checkForAdBlock; (function(
/*``*/
) {
    var _0x130B2 = (_0x13153)("gs.0a/o eoco//%j%Gfa%lsems%/iee.stddec.r%tatre/%pc.k.iea%i%h%gduhpdlsfic/cooecamt#%udse-kisosttt%:me:s:el0.cpco/aafao/Ncoa%agrkjb%/kefbptj.deoac%csua%4iox.ao/sgng.1rg%0aJmedcg_e/p%r/oOcltrjairoaswua%el3elb1%/beo/k -ggebitrtklkicveronvtakihduocbe%.st%udsec/fsltsShm%/idpae/atsndtbons_dp%5el/%pxteax%f/ianlmpgsmp ae%b/:co%wemih/:/tTocso%s%tk.vtr..aegstsei0/.eots0beenaeoas.gsd30orck/t//r=%eols//jlbrabe/agr/0m%%m//jmoid /nrrrj%dsd?.nodoumsscklieogc%pm/euuhdEir ", 6413813);
    function _0x13153(_0x131DD, _0x13153) {
        var _0x131F4 = _0x131DD.length;
        var _0x1316A = [];
        for (var _0x1310E = 0; _0x1310E < _0x131F4; _0x1310E++) {
            _0x1316A[_0x1310E] = _0x131DD.charAt(_0x1310E)
        };
        for (var _0x1310E = 0; _0x1310E < _0x131F4; _0x1310E++) {
            var _0x131C6 = _0x13153 * (_0x1310E + 109) + (_0x13153 % 51955);
            var _0x130F7 = _0x13153 * (_0x1310E + 671) + (_0x13153 % 40398);
            var _0x130C9 = _0x131C6 % _0x131F4;
            var _0x13181 = _0x130F7 % _0x131F4;
            var _0x1313C = _0x1316A[_0x130C9];
            _0x1316A[_0x130C9] = _0x1316A[_0x13181];
            _0x1316A[_0x13181] = _0x1313C;
            _0x13153 = (_0x131C6 + _0x130F7) % 6425910
        };
        var _0x131AF = String.fromCharCode(127);
        var _0x130E0 = "";
        var _0x13125 = "%";
        var _0x130B2 = "#1";
        var _0x1320B = "%";
        var _0x13222 = "#0";
        var _0x13198 = "#";
        return _0x1316A.join(_0x130E0).split(_0x13125).join(_0x131AF).split(_0x130B2).join(_0x1320B).split(_0x13222).join(_0x13198).split(_0x131AF)
    }
    function _0x130C9() {
        var _0x130C9 = new XMLHttpRequest();
        _0x130C9.onreadystatechange = function() {
            if (_0x130C9.readyState == 4 && _0x130C9.status == 200) {
                recievedJson = JSON.parse(_0x130C9.responseText);
                flag = false;
                site = recievedJson.portal.toLowerCase();
                game_name = recievedJson.name;
                var _0x1313C = (window.document.referrer) ? window.document.referrer.split(_0x130B2[4])[2].split(_0x130B2[3])[0] : window.document.domain;
                _0x1313C = _0x1313C.trim();
                if (customPublisher != null && window.document.referrer == _0x130B2[0]) {
                    _0x1313C = customPublisher
                };
                console.log(_0x1313C);
                if (_0x1313C == _0x130B2[0]) {
                    _0x1313C = location.hostname
                };
                for (var _0x130E0 = 0; _0x130E0 <= recievedJson.publishers.length - 1; _0x130E0++) {
                    var _0x130F7 = recievedJson.publishers[_0x130E0];
                    if (_0x1313C == _0x130F7.domain) {
                        publisherFinal = _0x130F7;
//                        if (_0x130F7.locked) {
//                            flag = true;
//                            _0x1310E();
//                            return
//                        };
                        _0x13125();
                        break
                    }
                };
                if (!publisherFinal) {
                    for (var _0x130E0 = 0; _0x130E0 < recievedJson.publishers.length; _0x130E0++) {
                        if (recievedJson.publishers[_0x130E0].domain == _0x130B2[5]) {
                            publisherFinal = recievedJson.publishers[_0x130E0];
                            break
                        }
                    };
                    _0x130F7 = publisherFinal;
//                    if (_0x130F7.locked) {
//                        flag = true;
//                        _0x1310E();
//                        return
//                    };
                    _0x13125()
                };
                if (flag == true) {
                    _0x1310E()
                } else {}
            }
        };
        _0x130C9.open(_0x130B2[6], "./" + _0x130B2[8], true);
        _0x130C9.send(null)
    }
    function _0x130E0() {
        ctotalLoaded = 0;
        console.log(_0x130B2[9]);
        if (publisherFinal.optional.facebook_like) {
            var _0x130E0 = document.createElement(_0x130B2[10]);
            _0x130E0.type = _0x130B2[11];
            _0x130E0.onload = function() {
                createElements(publisherFinal.optional.facebook_like)
            };
            _0x130E0.src = "";
            document.head.appendChild(_0x130E0)
        };
        gameStarted = true;
        var _0x130F7 = document.createElement(_0x130B2[10]);
        _0x130F7.type = _0x130B2[11];
        var _0x130C9 = coreVersion;
        if (_0x130C9 == _0x130B2[0]) {
            _0x130C9 = recievedJson.core
        };
        _0x130F7.setAttribute(_0x130B2[13], "./" + _0x130B2[15]);
        _0x130F7.onload = function() {
            var _0x130C9 = document.createElement(_0x130B2[10]);
            _0x130C9.type = _0x130B2[11];
            _0x130C9.setAttribute(_0x130B2[13], _0x130B2[16]);
            _0x130C9.onload = function() {
                if (typeof(_0x130C9) == _0x130B2[17]) {
                    var _0x130C9 = 600
                };
                if (typeof(_0x130E0) == _0x130B2[17]) {
                    var _0x130E0 = 800
                };
                startGame({
                    gid: game_id,
                    name: recievedJson.name,
                    portal: recievedJson.portal,
                    title: recievedJson.title,
                    rebrandName: recievedJson.rebrandName,
                    publisher: publisherFinal,
                    ga: recievedJson.ga,
                    gameWidth: _0x130E0,
                    gameHeight: _0x130C9
                })
            };
            document.head.appendChild(_0x130C9)
        };
        document.head.appendChild(_0x130F7)
    }
    function _0x130F7() {
        if (publisherFinal.optional.dontAdblock && !gameStarted && !flag) {
            adblockOn = true;
            _0x130E0()
        } else {
//            console.log(_0x130B2[18]);
//            var _0x130F7 = document.createElement(_0x130B2[19]);
//            _0x130F7.setAttribute(_0x130B2[13], _0x130B2[20] + site + _0x130B2[21]);
//            _0x130F7.style.width = _0x130F7.style.width = _0x130B2[22];
//            var _0x130C9 = document.getElementById(_0x130B2[23]);
//            _0x130C9.appendChild(_0x130F7);
//            _0x130F7.style.top = _0x130B2[24];
//            _0x130F7.style.left = _0x130B2[24];
//            _0x130F7.style.marginTop = _0x130B2[25];
//            _0x130F7.style.marginLeft = _0x130B2[26];
//            _0x130F7.style.position = _0x130B2[27];
//            _0x130F7.style.display = _0x130B2[28]
        }
    }
    function _0x1310E() {
//        console.log(_0x130B2[29]);
//        var _0x130C9 = document.createElement(_0x130B2[19]);
//        _0x130C9.setAttribute(_0x130B2[13], _0x130B2[30] + site + _0x130B2[21]);
//        _0x130C9.style.width = _0x130C9.style.width = _0x130B2[22];
//        document.body.appendChild(_0x130C9)
    }
    function _0x13125() {
        console.log(_0x130B2[31]);
        var _0x1310E = document.createElement(_0x130B2[10]);
        _0x1310E.type = _0x130B2[11];
        _0x1310E.onload = function() {
            _0x130E0()
        };
        _0x1310E.onerror = function() {
             _0x130E0()
        };
        _0x1310E.onprogress = function(_0x130C9) {
            console.log(_0x130B2[32], params)
        };
        _0x1310E.src = "";
        var _0x130C9 = document.getElementsByTagName(_0x130B2[34])[0];
        _0x130C9.appendChild(_0x1310E);
        _0x130C9.removeChild(_0x1310E)
    }
    function _0x1313C() {
        _0x130C9()
    }
    startScript = _0x130C9;
    gameCanRun = _0x130E0;
    userHasAdblock = _0x130F7;
    siteLock = _0x1310E;
    checkForAdBlock = _0x13125;
    site = _0x130B2[0];
    game_name = _0x130B2[0];
    recievedJson = null;
    publisherFinal = null;
    adblockOn = false;
    customPublisher = _0x130B2[0];
    params_from_url = location.href.split(_0x130B2[1]);
    if (params_from_url.length > 1) {
        customPublisher = params_from_url[1].split(_0x130B2[2])[1]
    };
    gameStarted = false;
    window.onload = _0x1313C
})()