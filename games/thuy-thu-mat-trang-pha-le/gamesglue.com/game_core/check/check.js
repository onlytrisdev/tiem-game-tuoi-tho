var site, game_name, recievedJson, publisherFinal, flag, adblockOn, customPublisher, params_from_url, gameDim, siteToCompare, cmsIsDown, topDomain, contentDiv, xmlRequest1, preloader, spin, image, preloaderLink, play, loader, playViz, disableAll, preloaderContent, heart, heartDivContainer, fuckMozilla, setTopDomain, gameHeight, gameWidth, i, addPreloader, totalFinished, startScript, linkAndPlay, showPlay, getOutgoingFromCfg, showLogo, searchPreloaderLink, removeBadAssets, gameStarted, gameCanRun, hide, hidePreloader, userHasAdblock, adsLock, siteLock, checkForAdBlock;


(function() {
    function _0x16DA4() {
        return playVisible
    }

    function _0x16C21() {
        return hide
    }

    function _0x16EFC() {
        return site
    }

    function _0x16CA2() {
        return loader
    }

    function _0x16BF6() {
        return heartHidden
    }

    function _0x169C7() {
        return _0x15FDE
    }

    function _0x16FA8() {
        return triggerZone
    }

    function _0x16F52() {
        return startGame
    }

    function _0x16B4A() {
        return gameDim
    }

    function _0x16AC9() {
        return createElements
    }

    function _0x16A9E() {
        return coreVersion
    }

    function _0x16E50() {
        return publisherFinal
    }

    function _0x16A1D() {
        return cmsIsDown
    }

    function _0x166C1(_0x15CD8, _0x15D03) {
        return _0x15CD8 >= _0x15D03
    }

    function _0x16CF8() {
        return Main
    }

    function _0x16ED1() {
        return setInterval
    }

    function _0x166EC() {
        return _0x15D03
    }

    function _0x16D4E() {
        return play
    }

    function _0x16D23() {
        return pd
    }

    function _0x16C4C() {
        return image
    }

    function _0x16798() {
        return _0x15DAF
    }

    function _0x16819() {
        return _0x15E30
    }

    function _0x167EE() {
        return _0x15E05
    }

    function _0x16971() {
        return _0x15F88
    }

    function _0x16615(_0x15CD8, _0x15D03) {
        return _0x15CD8 <= _0x15D03
    }

    function _0x16E7B() {
        return recievedJson
    }

    function _0x16C77() {
        return JSON
    }

    function _0x16F27() {
        return siteToCompare
    }

    function _0x16B1F() {
        return game_id
    }

    function _0x16717() {
        return _0x15D2E
    }

    function _0x16FFE() {
        return XMLHttpRequest
    }

    function _0x1676D() {
        return _0x15D84
    }

    function _0x1691B() {
        return _0x15F32
    }

    function _0x16E25() {
        // return preloaderLink
    }

    function _0x1653E(_0x15CD8, _0x15D03) {
        return _0x15CD8 !== _0x15D03
    }

    function _0x16BCB() {
        return heartDivContainer
    }

    function _0x168C5() {
        return _0x15EDC
    }

    function _0x169F2() {
        return checkFinish
    }

    function _0x16BA0() {
        return heartDiv
    }

    function _0x16742() {
        return _0x15D59
    }

    function _0x167C3() {
        return _0x15DDA
    }

    function _0x16A73() {
        return contentDiv
    }

    function _0x16B75() {
        return heart
    }

    function _0x168F0() {
        return _0x15F07
    }

    function _0x16CCD() {
        return logoDiv
    }

    function _0x16D79() {
        return playDiv
    }

    function _0x1686F() {
        return _0x15E86
    }

    function _0x16DFA() {
        return preloaderContent
    }

    function _0x16946() {
        return _0x15F5D
    }

    function _0x16DCF() {
        return preloader
    }

    function _0x1689A() {
        return _0x15EB1
    }

    function _0x1699C() {
        return _0x15FB3
    }

    function _0x16AF4() {
        return document
    }

    function _0x165BF(_0x15CD8, _0x15D03) {
        return _0x15CD8 - _0x15D03
    }

    function _0x16696(_0x15CD8, _0x15D03) {
        return _0x15CD8 > _0x15D03
    }

    function _0x16EA6() {
        return res
    }

    function _0x16513(_0x15CD8, _0x15D03) {
        return _0x15CD8 != _0x15D03
    }

    function _0x1666B(_0x15CD8, _0x15D03) {
        return _0x15CD8 === _0x15D03
    }

    function _0x16640(_0x15CD8, _0x15D03) {
        return _0x15CD8 == _0x15D03
    }

    function _0x16A48() {
        return console
    }

    function _0x16844() {
        return _0x15E5B
    }

    function _0x17029(_0x15CD8) {
        return !_0x15CD8
    }

    function _0x16FD3() {
        return window
    }

    function _0x16F7D() {
        return String
    }

    function _0x16569(_0x15CD8, _0x15D03) {
        return _0x15CD8 % _0x15D03
    }

    function _0x16594(_0x15CD8, _0x15D03) {
        return _0x15CD8 + _0x15D03
    }

    function _0x165EA(_0x15CD8, _0x15D03) {
        return _0x15CD8 < _0x15D03
    }
    var _0x15CD8 = (_0x15FDE)("%dcnadopBsos.cr _/dgg/nfmsnl0&sg|paeseruc%.f/%o/jw.epcfAs%saaedaee%sgtos%rnr.e_a/r0idewdaitc/Srt%teeoeat%/xt/s/atoirceoe%et%gmnIoalanptedomme.e%bbhne/p2eobr.%dtami/ejN./a%assuggvepOtt%_doo%roe_oodgojeJag/eirsicwlcii/eot%gi0rejpo/_oafdrAisrosl_seicjrnOoppe/ekod.o=daAel%c.a/=/.%%enDtecdrgpwgee/imh_etnrr%dkemearrnmdnpJa/uog/oeoplmikerelt/r%#/1phg=asogf/rg%%eodtgeeo400p%us%asteoasntiCosalooenmsnaonikuer/1o%/ruaPospe%ga/peonaopotvc%%/d0/%of%fr/%snneoecmp%grg?xta/HodIrtei%%eggljunhta/ae=oai%6c%rtrktaoexssdsvatNrgpsi%e.ooonaGshr//n%upyge/inuokaz.el/eolcre%depaemta.g%esoojeo.%/ttubsk/luDax=o/mCeesebeak3l&.ubheoEkyene%%%jsose/l./egccu1p.caaiscpepAdairepb/E.e/odmor.hsmeg/rctros/rrwi.in%C0%r/A.d&/oarnemueiyit%Bcmgo0eeSa:mgr.d_umBefhltioauem/lentdpiupo/.l//m/gtjcEoapppdr_ioosenc%uacptf%.onaaseteoatahdlj_meosbrdaemvidgl/Ame.ecgauabi%moaTaesc1yeu_sueeoadsrdecep/3ieStnaemn%%ledoiCons%/i%%lrlroerr.mnor/e/pnsueAbo%p%m/pgaehenao_dnsdp.rsaetg/di/ygpagcgmeauputevsao-cocsm.l/rgso%c/les%ltrl%astm_cainaatcdcse%mcel%/eeotogtmsmsdmerig//tcm%sr.fhlehurmenkcaeftan/m_o|sdkelenegiaad%r%s.doogerl.oclm/imrnagemr.een%/smme%gwsjts/anls/agme%rroiticaamcie%ton.Apeieob/s/sgodt%g/k/krAmi%ure/sg/almu/ntitrsllseecj&/ntrunwwsr|cmlrgCdogeo//ra%tlruii%m/sstmon/riomwsssgl%Oaa%ank8msross/reanmrusogpro/ec1te/neeatogecl:gmtpdltD/praae%isnioa.slu/ly.csnu/p?g%m/ogeaig%51guraeep3ay_mtrnac.otredgamdoS/%.h .mutueleealgraicazttbcme.em_si_%cwyeiongmc#bct_esouslaste.tpdgrseso%.s%pctaenec/irt/emesgaeo/ond.eroeom_nusjl.clcu.t_relsg/tssda/je%%a%e_err#umws%aeode scim.l_i%g%D%yevc_", 2971459);
    if (_0x15E86 === 0) {
        (function() {
            _0x15D59 = 1
        })();
        return
    };

    function _0x15FDE(_0x15D2E, _0x15DDA) {
        var _0x15F07 = {},
            _0x15E5B = {},
            _0x15CD8 = {},
            _0x15EB1 = {},
            _0x15F5D = {},
            _0x15E86 = {},
            _0x15D84 = {};
        _0x15F07._ = _0x15DDA;
        var _0x15EDC = _0x15D2E.length;
        _0x15E5B._ = [];;
        for (var _0x15E30 = 0; _0x165EA(_0x15E30, _0x15EDC); _0x15E30++) {
            _0x15E5B._[_0x15E30] = _0x15D2E.charAt(_0x15E30)
        };
        for (var _0x15E30 = 0; _0x165EA(_0x15E30, _0x15EDC); _0x15E30++) {
            _0x15CD8._ = _0x16594(_0x15F07._ * (_0x16594(_0x15E30, 481)), (_0x16569(_0x15F07._, 35389)));;
            _0x15EB1._ = _0x16594(_0x15F07._ * (_0x16594(_0x15E30, 517)), (_0x16569(_0x15F07._, 38081)));;
            _0x15F5D._ = _0x16569(_0x15CD8._, _0x15EDC);;
            _0x15E86._ = _0x16569(_0x15EB1._, _0x15EDC);;
            _0x15D84._ = _0x15E5B._[_0x15F5D._];;
            _0x17054(_0x15F5D, _0x15E5B, _0x15E86);
            _0x1707F(_0x15E86, _0x15E5B, _0x15D84);
            _0x170AA(_0x15F07, _0x15CD8, _0x15EB1)
        };
        var _0x15DAF = _0x16F7D().fromCharCode(127);
        var _0x15F88 = "";
        var _0x15FB3 = "%";
        var _0x15E05 = "#1";
        var _0x15F32 = "%";
        var _0x15D03 = "#0";
        var _0x15D59 = "#";
        return _0x15E5B._.join(_0x15F88).split(_0x15FB3).join(_0x15DAF).split(_0x15E05).join(_0x15F32).split(_0x15D03).join(_0x15D59).split(_0x15DAF)
    }

    function _0x15D03() {
        var _0x15D03 = {},
            _0x15D2E = {};
        _0x170D5();
        _0x15D03._ = _0x16FD3();;
        if (_0x17029(_0x15F88)) {
            _0x16844()();
            _0x17100();
            return
        } else {
            _0x15D2E._ = _0x15D03._;
        };
        do {
            _0x1712B();
            _0x17156(_0x15D2E, _0x15D03);
            _0x17181(_0x15D2E);
            _0x16A48().log(_0x15D2E._.document.referrer);
            if (_0x16640(_0x15D59, 1)) {
                return
            };
            try {
                _0x15D03._ = _0x15D2E._.parent
            } catch (e) {
                if (_0x1666B(_0x15DAF, null)) {
                    return
                };
                _0x15D03._ = null
            }
        } while (_0x15D03._ && _0x16513(_0x15D03._, _0x15D2E._));;
        if (_0x17029(_0x15CD8)) {
            return
        };
        return _0x16EA6().split(_0x15CD8[2])[2]
    }

    function _0x15D2E() {
        if (_0x17029(_0x15D59)) {
            return
        };
        if (_0x16FD3().location.ancestorOrigins && _0x16696(_0x16FD3().location.ancestorOrigins.length, 0)) {
            if (_0x16640(_0x15F5D, 0)) {
                _0x171AC();
                return
            } else {
                return _0x16FD3().location.ancestorOrigins[_0x165BF(_0x16FD3().location.ancestorOrigins.length, 1)].split(_0x15CD8[2])[2]
            }
        };
        _0x171D7();
        if (_0x17029(_0x15CD8)) {
            return
        } else {
            if (_0x16513(_0x16AF4().referrer, _0x15CD8[0])) {
                if (_0x1666B(_0x15EB1, _0x15CD8[76])) {
                    _0x17202();
                    return
                };
                return _0x16AF4().referrer.split(_0x15CD8[2])[2]
            }
        };
        return _0x16FD3().location.hostname
    }
    if (_0x15D59 === false) {
        (function() {
            _0x15E05 = 0
        })();
        return
    };

    function _0x15D59() {
        var _0x15D03 = {},
            _0x15DDA = {},
            _0x15D84 = {},
            _0x15E05 = {};
        contentDiv = _0x16AF4().getElementById(_0x15CD8[12]);
        _0x1722D();
        _0x15D03._ = _0x16AF4().head.appendChild(_0x16AF4().createElement(_0x15CD8[13]));;
        if (_0x17029(_0x15CD8)) {
            _0x1699C()(false);
            return
        };
        _0x17258(_0x15D03);
        _0x17283(_0x15D03);
        _0x172AE(_0x15D03);
        if (_0x17029(_0x15CD8)) {
            _0x1689A()(true, 1);
            return
        };
        _0x16AF4().head.appendChild(_0x15D03._);
        if (_0x17029(_0x15D59)) {
            _0x15D59 = false
        } else {
            preloader = _0x16AF4().createElement(_0x15CD8[17])
        };
        _0x172D9();
        if (_0x17029(_0x15CD8)) {
            _0x17304();
            return
        };
        _0x16AF4().body.appendChild(_0x16DCF());
        _0x15DDA._ = _0x16AF4().createElement(_0x15CD8[19]);;
        _0x1732F(_0x15DDA);
        _0x1735A();
        _0x15DDA._.ondragstart = _0x16034();
        _0x173B0(_0x15DDA);
        if (_0x1666B(_0x15F32, 0)) {
            return
        };
        _0x173DB(_0x15DDA);
        if (_0x17029(_0x15CD8)) {
            return
        };
        _0x17406(_0x15DDA);

function mylog(b) {
    var _length = b.length;
    for (var i = 0; i < _length; i++) {
        console.log("out=== NO: " + i + " ,value =  " + b[i]);
    }
}
// mylog(_0x15CD8);
        _0x15D84._ = _0x16AF4().createElement(_0x15CD8[17]);;
        _0x17431(_0x15D84);
        _0x15D84._.appendChild(_0x15DDA._);
        _0x16DCF().appendChild(_0x15D84._);
        if (_0x17029(_0x15DAF)) {
            _0x16946()(_0x15CD8[13], 1, 1)
        };
        _0x15E05._ = _0x16AF4().createElement(_0x15CD8[17]);;
        _0x16DCF().appendChild(_0x15E05._);
        preloaderContent = _0x16AF4().createElement(_0x15CD8[17]);
        _0x1745C();
        _0x15E05._.appendChild(_0x16DFA());
        _0x17487(_0x15E05);
        if (_0x17029(_0x15DAF)) {
            _0x174B2();
            return
        };
        _0x174DD();
        playDiv = _0x16AF4().createElement(_0x15CD8[17]);
        _0x17508();
        if (_0x17029(_0x15CD8)) {
            _0x1686F()();
            _0x17533();
            return
        };
        _0x16DFA().appendChild(_0x16D79());
        logoDiv = _0x16AF4().createElement(_0x15CD8[17]);
        _0x1755E();
        _0x16DFA().insertBefore(_0x16CCD(), _0x16D79());
        if (_0x17029(_0x15D2E)) {
            _0x168F0()();
            return
        };
        heart = _0x16AF4().createElement(_0x15CD8[19]);
        _0x16B75().onload = _0x1605F();
        _0x17762();
        _0x1778D()
    }
    if (_0x15FDE == null) {
        return
    } else {
        function _0x15D84() {
            var _0x15D03 = {};
            if (_0x16640(_0x15F88, true)) {
                return
            };
            _0x16742()();
            if (_0x17029(_0x15CD8)) {
                return
            };
            _0x15D03._ = _0x16AF4().createElement(_0x15CD8[40]);;
            if (_0x17029(_0x15F5D)) {
                _0x1676D()();
                _0x177B8();
                return
            } else {
                _0x15D03._.type = _0x15CD8[41]
            };
            _0x16AF4().head.appendChild(_0x15D03._);
            _0x15D03._.onload = _0x160E0();
            if (_0x17029(_0x15EB1)) {
                return
            };
            _0x17B6A(_0x15D03)
        }
    };

    function _0x15DAF(_0x15D03, _0x15D59) {
        var _0x15D84 = {},
            _0x15D2E = {};
        _0x15D84._ = _0x15D03;
        if (_0x17029(_0x15FDE)) {
            _0x167C3()(false, null, _0x15CD8[67]);
            _0x17B95()
        };
        _0x17BC0(_0x15D84);
        if (_0x16513(_0x15D84._.core, _0x15CD8[49])) {
            _0x17BEB();
            // preloaderLink = _0x167EE()(_0x15D59);
            if (_0x16640(_0x15EB1, 0)) {
                return
            };
            if (_0x16819()(_0x15D59)) {
                _0x15D2E._ = _0x16AF4().createElement(_0x15CD8[19]);;
                _0x17C16(_0x15D2E);
                _0x15D2E._.ondragstart = _0x161B7();
                if (_0x17029(_0x15CD8)) {
                    _0x16717()(1, false, null);
                    return
                };
                _0x15D2E._.onload = _0x161E2(_0x15D2E);
                if (_0x16640(_0x15D84._.portal, _0x15CD8[51])) {
                    // _0x15D2E._.src = _0x15CD8[52]
                   _0x15D2E._.src =  "./gamesglue.com/game_core/preloaderAssets/enjoy.png";
                } else {
                    if (_0x16640(_0x15D84._.portal, _0x15CD8[53])) {
                        if (_0x17029(_0x15CD8)) {
                            _0x1676D()();
                            _0x17C97()
                        };
                        _0x17CC2(_0x15D2E)
                    } else {
                        if (_0x17029(_0x15CD8)) {
                            _0x168F0()()
                        };
                        _0x17CED(_0x15D2E)
                    }
                }; if (_0x17029(_0x15CD8)) {
                    _0x17D18();
                    return
                };
                if (_0x1653E(preloaderLink, _0x15CD8[0])) {
                    if (_0x1666B(_0x15DDA, false)) {
                        return
                    };
                    _0x15D2E._.onclick = _0x1620D()
                }
            } else {
                _0x16A48().log(_0x15CD8[56])
            }; 
            // if (_0x1653E(preloaderLink, _0x15CD8[0])) {
            //     _0x16C4C().onclick = _0x16238()
            // };
            if (_0x17029(_0x15CD8)) {
                _0x16798()();
                return
            };
            if (playViz = _0x167C3()(_0x15D59)) {
                pd = _0x16AF4().createElement(_0x15CD8[17]);
                _0x16D79().appendChild(_0x16D23());
                play = _0x16AF4().createElement(_0x15CD8[19]);
                if (_0x17029(_0x15EB1)) {
                    _0x16798()()
                } else {
                    _0x16D23().style.display = _0x15CD8[57]
                };
                _0x17D43();
                if (_0x17029(_0x15CD8)) {
                    _0x17D6E();
                    return
                };
                _0x16D4E().ondragstart = _0x16263();
                if (_0x17029(_0x15CD8)) {
                    _0x1686F()(true);
                    return
                };
                _0x16D4E().onload = _0x1628E();
                _0x17D99();
                _0x17DC4();
                _0x17DEF();
                if (_0x17029(_0x15CD8)) {
                    return
                };
                _0x16D4E().onclick = _0x162B9()
            }
        } else {
            if (_0x17029(_0x15F32)) {
                return
            } else {
                _0x16C4C().style.cursor = _0x15CD8[62]
            }
        }
    }

    function _0x15DDA(_0x15D84) {
        if (_0x17029(_0x15CD8)) {
            return
        };
        var _0x15D59 = _0x15D84.optional.outgoing;
        for (var _0x15D2E = 0; _0x165EA(_0x15D2E, _0x15D59.length); _0x15D2E++) {
            if (_0x17029(_0x15CD8)) {
                _0x16717()()
            };
            var _0x15D03 = _0x15D59[_0x15D2E];
            if (_0x1666B(_0x15D03.zone, _0x15CD8[63])) {
                if (_0x17029(_0x15CD8)) {
                    _0x15F88 = false
                } else {
                    if (_0x1666B(_0x15D03.show, _0x15CD8[30])) {
                        if (_0x17029(_0x15CD8)) {
                            return
                        };
                        return false
                    }
                }
            }
        };
        if (_0x17029(_0x15CD8)) {
            _0x17EF1();
            return
        };
        return true
    }

    function _0x15E05(_0x15D84) {
        var _0x15E05 = {},
            _0x15D03 = {};
        _0x15E05._ = _0x15D84;
        var _0x15DDA = _0x15E05._.optional.outgoing;
        for (var _0x15D59 = 0; _0x165EA(_0x15D59, _0x15DDA.length); _0x15D59++) {
            var _0x15D2E = _0x15DDA[_0x15D59];
            if (_0x16640(_0x15F88, false)) {
                _0x167C3()();
                return
            };
            if (_0x1666B(_0x15D2E.zone, _0x15CD8[18]) && _0x1653E(_0x15D2E.url, _0x15CD8[0])) {
                _0x17F1C();
                if (_0x1666B(_0x15D2E.show, _0x15CD8[30])) {
                    if (_0x16640(_0x15DAF, 0)) {
                        _0x168F0()(true)
                    };
                    return _0x15CD8[0]
                };
                if (_0x1653E(_0x15D2E.utm, _0x15CD8[32])) {
                    return _0x15D2E.url
                } else {
                    if (_0x17029(_0x15F32)) {
                        _0x168F0()();
                        _0x17F47()
                    };
                    _0x15D03._ = _0x16594(_0x15CD8[64], _0x16E7B().name);;
                    if (_0x17029(_0x15F32)) {
                        _0x16742()(1, 1, 1);
                        return
                    };
                    _0x17F72(_0x15D03, _0x15E05);
                    _0x17F9D(_0x15D03);
                    _0x17FC8(_0x15D03);
                    return _0x16594(_0x15D2E.url, _0x15D03._)
                }
            }
        };
        if (_0x17029(_0x15CD8)) {
            _0x168F0()(1, 1, null);
            _0x17FF3()
        };
        return _0x15CD8[0]
    }

    function _0x15E30(_0x15D84) {
        if (_0x16640(_0x15FB3, true)) {
            _0x1801E();
            return
        };
        var _0x15D59 = _0x15D84.optional.outgoing;
        if (_0x17029(_0x15CD8)) {
            _0x16819()()
        };
        for (var _0x15D2E = 0; _0x165EA(_0x15D2E, _0x15D59.length); _0x15D2E++) {
            var _0x15D03 = _0x15D59[_0x15D2E];
            if (_0x1666B(_0x15D03.zone, _0x15CD8[68])) {
                if (_0x1666B(_0x15D03.show, _0x15CD8[30])) {
                    if (_0x17029(_0x15E30)) {
                        return
                    };
                    return false
                }
            }
        };
        return true
    }

    function _0x15E5B() {
        if (_0x17029(_0x15FB3)) {
            _0x16742()(_0x15CD8[23], false);
            return
        };
        _0x16A48().log(_0x16E7B());
        for (var _0x15D03 = 0; _0x165EA(_0x15D03, _0x16E7B().publishers[0].optional.outgoing.length); _0x15D03++) {
            if (_0x16640(_0x16E7B().publishers[0].optional.outgoing[_0x15D03].zone, _0x15CD8[18])) {
                return _0x16E7B().publishers[0].optional.outgoing[_0x15D03].url
            }
        };
        return _0x15CD8[69]
    }

    function _0x15E86() {
        var _0x15D59 = {},
            _0x15D03 = {};
        if (_0x16513(recievedJson, null)) {
            _0x15D59._ = _0x16E7B().publishers[0].optional.outgoing;;
            _0x15D03._ = _0x165BF(_0x15D59._.length, 1);
            for (; _0x166C1(_0x15D03._, 0); _0x15D03._--) {
                if (_0x17029(_0x15CD8)) {
                    _0x16819()(false, 0);
                    _0x18049();
                    return
                };
                if (_0x16513(_0x15D59._[_0x15D03._].image, _0x15CD8[0])) {
                    if (_0x17029(_0x15D2E)) {
                        _0x18074();
                        return
                    };
                    _0x1809F(_0x15D03, _0x15D59)
                }
            }
        }
    }

    function _0x15EB1() {
        var _0x15D2E = {},
            _0x15D59 = {},
            _0x15D03 = {};
        if (_0x16A1D()) {
            if (_0x1666B(_0x15F5D, true)) {
                return
            } else {
                _0x1686F()()
            }
        };
        _0x180CA();
        _0x180F5();
        _0x16A48().log(_0x15CD8[70]);
        // if (_0x16E50().optional.facebook_like) {
        //     if (_0x17029(_0x15F88)) {
        //         return
        //     };
        //     _0x15D2E._ = _0x16AF4().createElement(_0x15CD8[40]);;
        //     if (_0x1666B(_0x15E5B, null)) {
        //         _0x16946()(0);
        //         _0x18120()
        //     };
        //     _0x1814B(_0x15D2E);
        //     _0x15D2E._.onload = _0x1633A();
        //     _0x18176(_0x15D2E);
        //     _0x16AF4().head.appendChild(_0x15D2E._)
        // };
        if (_0x16640(_0x15F88, true)) {
            return
        };
        _0x181A1();
        _0x15D59._ = _0x16AF4().createElement(_0x15CD8[40]);;
        _0x181CC(_0x15D59);
        if (_0x17029(_0x15FB3)) {
            _0x16742()(_0x15CD8[53], _0x15CD8[23], false);
            return
        };
        _0x15D03._ = _0x16A9E();;
        _0x181F7(_0x15D03);
        if (_0x17029(_0x15D84)) {
            _0x1676D()(true);
            return
        } else {
            _0x15D59._.setAttribute(_0x15CD8[72], _0x16594("./gamesglue.com/game_core/" + _0x15D03._, _0x15CD8[74]))
        }; if (_0x16640(_0x15E30, false)) {
            return
        };
        _0x15D59._.onload = _0x16365();
        if (_0x17029(_0x15CD8)) {
            return
        };
        _0x16AF4().head.appendChild(_0x15D59._)
    }
    if (_0x15EB1 == 1) {
        _0x15FDE();
        (function() {
            _0x15EDC = 0
        })();
        return
    };

    function _0x15EDC(_0x15D2E) {
        if (_0x16640(_0x15E05, 1)) {
            _0x168C5()(_0x15CD8[33])
        } else {
            _0x16A73().style.opacity = 1
        }; if (_0x17029(_0x15FDE)) {
            _0x16742()();
            return
        };
        if (_0x17029(disableAll) && _0x16513(typeof(triggerZone), _0x15CD8[4])) {
            _0x16FA8()(_0x15CD8[76])
        };
        if (_0x1653E(play, undefined)) {
            _0x182CE();
            if (_0x17029(_0x15EB1)) {
                _0x169C7()();
                _0x182F9()
            } else {
                _0x16B75().addEventListener(_0x15CD8[77], _0x16BF6())
            }; if (_0x17029(_0x15D03)) {
                _0x1676D()(0, _0x15CD8[86], null);
                _0x18324();
                return
            } else {
                _0x16B75().addEventListener(_0x15CD8[78], _0x16BF6())
            }
        };
        if (_0x17029(_0x15CD8)) {
            _0x1699C()();
            _0x1834F();
            return
        };
        _0x1837A();
        if (_0x15D2E) {
            if (_0x17029(_0x15CD8)) {
                return
            };
            _0x183A5();
            _0x16ED1()(_0x163BB(), 500)
        };
        if (_0x1666B(_0x15F88, null)) {
            _0x183D0();
            return
        };
        if (_0x17029(playViz)) {
            if (_0x16513(typeof(Main), _0x15CD8[4]) && _0x16513(typeof(_0x16CF8().Main), _0x15CD8[4]) && _0x16513(typeof(_0x16CF8().Main.startTTS), _0x15CD8[4])) {
                if (_0x17029(_0x15CD8)) {
                    return
                };
                _0x16CF8().Main.startTTS()
            };
            _0x183FB();
            _0x16ED1()(_0x163E6(), 500)
        }
    }
    if (!_0x15EDC) {
        _0x15F88();
        (function() {
            _0x15D2E = true
        })();
        return
    } else {
        function _0x15F07() {
            var _0x15D59 = {};
            if (_0x16E50().optional.dontAdblock && _0x17029(gameStarted) && _0x17029(flag)) {
                if (_0x17029(_0x15F32)) {
                    _0x167C3()(false);
                    _0x1847C();
                    return
                };
                _0x184A7();
                _0x1689A()()
            } else {
                if (_0x16640(_0x15D84, false)) {
                    _0x1691B()()
                } else {
                    _0x15D59._ = _0x16AF4().createElement(_0x15CD8[19]);
                }; if (_0x17029(_0x15CD8)) {
                    _0x16717()();
                    _0x184D2()
                };
                _0x15D59._.onload = _0x16411(_0x15D59);
                if (_0x17029(_0x15CD8)) {
                    _0x1676D()();
                    _0x18528()
                };
                _0x15D59._.setAttribute(_0x15CD8[72], _0x16594(_0x15CD8[82] + _0x16EFC(), _0x15CD8[83]));
                if (_0x1666B(_0x15F07, null)) {
                    return
                };
                var _0x15D2E = _0x16AF4().getElementById(_0x15CD8[12]);
                if (_0x17029(_0x15FB3)) {
                    _0x168C5()(null);
                    _0x18553();
                    return
                };
                _0x15D2E.appendChild(_0x15D59._);
                if (_0x17029(_0x15D03)) {
                    _0x16742()(1, null);
                    _0x1857E();
                    return
                };
                _0x185A9(_0x15D59);
                _0x185D4(_0x15D59);
                _0x185FF(_0x15D59);
                _0x1862A(_0x15D59);
                if (_0x17029(_0x15F32)) {
                    _0x18655();
                    return
                };
                _0x18680();
                if (_0x17029(_0x15CD8)) {
                    _0x186AB();
                    return
                };
                _0x168C5()(true)
            }
        }
    }; if (_0x15D59 === false) {
        _0x15FB3(false, null);
        (function() {
            _0x15EB1 = 0
        })();
        return
    };

    function _0x15F32() {
        var _0x15D03 = {};
        _0x186D6();
        _0x15D03._ = _0x16AF4().createElement(_0x15CD8[19]);;
        _0x18701(_0x15D03);
        _0x15D03._.setAttribute(_0x15CD8[72], _0x15CD8[84]);
        _0x1872C(_0x15D03);
        if (_0x17029(_0x15E05)) {
            return
        } else {
            _0x15D03._.style.position = _0x15CD8[33]
        };
        _0x16AF4().body.appendChild(_0x15D03._);
        if (_0x1666B(_0x15E86, 1)) {
            _0x1676D()();
            _0x18757();
            return
        };
        _0x18782();
        _0x168C5()(true)
    }

    function _0x15F5D() {
        var _0x15D59 = {},
            _0x15D2E = {};
        if (_0x1666B(_0x15F5D, null)) {
            _0x1686F()()
        };
        preloaderLink = _0x167EE()(_0x16E7B().publishers[0]);
        if (_0x16640(_0x15F88, 1)) {
            return
        };
        // if (_0x1653E(preloaderLink, _0x15CD8[0])) {
        //     _0x15D59._ = _0x16E25().split(_0x15CD8[85]);;
        //     if (_0x16696(_0x15D59._.length, 1)) {
        //         if (_0x17029(_0x15CD8)) {
        //             _0x167EE()(_0x15CD8[14]);
        //             _0x187AD()
        //         };
        //         _0x187D8(_0x15D59)
        //     }
        // };
        _0x15D2E._ = _0x16AF4().createElement(_0x15CD8[19]);;
        _0x15D2E._.onload = _0x16467(_0x15D2E);
        _0x15D2E._.setAttribute(_0x15CD8[72], _0x16594(_0x15CD8[87] + _0x16EFC(), _0x15CD8[83]));
        var _0x15D03 = _0x16844()();
        if (_0x17029(_0x15CD8)) {
            _0x1686F()()
        };
        _0x15D2E._.setAttribute(_0x15CD8[88], _0x15D03);
        _0x18859(_0x15D2E);
        if (_0x17029(_0x15F07)) {
            _0x168C5()(null, false);
            _0x18884();
            return
        } else {
            _0x16AF4().body.appendChild(_0x15D2E._)
        };
        _0x188AF(_0x15D2E);
        if (_0x1666B(_0x15E30, null)) {
            _0x167EE()(_0x15CD8[47])
        };
        _0x188DA();
        _0x168C5()(true)
    }

    function _0x15F88() {
        var _0x15D59 = {};
        if (_0x16640(_0x15D03, false)) {
            return
        };
        _0x15D59._ = _0x16AF4().createElement(_0x15CD8[40]);;
        _0x18905(_0x15D59);
        _0x15D59._.onload = _0x164BD();
        _0x15D59._.onerror = _0x164E8();
        _0x18930(_0x15D59);
        var _0x15D2E = _0x16AF4().getElementsByTagName(_0x15CD8[90])[0];
        if (_0x17029(_0x15CD8)) {
            return
        } else {
            _0x15D2E.appendChild(_0x15D59._)
        }
    }

    function _0x15FB3() {
        if (_0x17029(_0x15F07)) {
            _0x16742()();
            _0x1895B()
        } else {
            _0x1676D()()
        }
    }
    if (_0x15D2E === _0x15CD8[68]) {
        _0x15DDA(1);
        (function() {
            _0x15F5D = 0
        })();
        return
    };
    fuckMozilla = _0x15D03;
    setTopDomain = _0x15D2E;
    if (!_0x15F5D) {
        return
    } else {
        addPreloader = _0x15D59
    };
    startScript = _0x15D84;
    linkAndPlay = _0x15DAF;
    if (!_0x15CD8) {
        _0x15EDC(true);
        (function() {
            _0x15E30 = 0
        })()
    };
    showPlay = _0x15DDA;
    if (!_0x15CD8) {
        _0x15E86();
        (function() {
            _0x15F07 = true
        })();
        return
    };
    getOutgoingFromCfg = _0x15E05;
    showLogo = _0x15E30;
    if (!_0x15DDA) {
        _0x15F07();
        (function() {
            _0x15F32 = 1
        })();
        return
    } else {
        // searchPreloaderLink = _0x15E5B
    };
    removeBadAssets = _0x15E86;
    gameCanRun = _0x15EB1;
    if (_0x15DAF == 1) {
        _0x15DDA(false);
        return
    };
    hidePreloader = _0x15EDC;
    if (!_0x15CD8) {
        _0x15DAF();
        (function() {
            _0x15E05 = false
        })();
        return
    } else {
        userHasAdblock = _0x15F07
    }; if (!_0x15CD8) {
        return
    } else {
        adsLock = _0x15F32
    };
    siteLock = _0x15F5D;
    checkForAdBlock = _0x15F88;
    site = _0x15CD8[0];
    if (!_0x15EDC) {
        _0x15F07(true);
        (function() {
            _0x15E5B = 1
        })()
    };
    game_name = _0x15CD8[0];
    recievedJson = null;
    publisherFinal = null;
    adblockOn = false;
    if (!_0x15CD8) {
        _0x15FB3(true);
        (function() {
            _0x15EDC = null
        })();
        return
    } else {
        customPublisher = null
    }; if (!_0x15D59) {
        _0x15E30(1, 1);
        return
    };
    params_from_url = location.href.split(_0x15CD8[1]);
    if (_0x15EB1 == 0) {
        _0x15D03 = null
    };
    gameDim = {
        width: 800,
        height: 600
    };
    siteToCompare = _0x15CD8[0];
    cmsIsDown = false;
    if (!_0x15DDA) {
        _0x15FDE(1);
        return
    };
    topDomain = _0x15CD8[0];
    if (_0x15D03 == null) {
        return
    };
    if (!_0x15CD8) {
        (function() {
            _0x15EB1 = 1
        })();
        return
    };
    xmlRequest1 = new XMLHttpRequest();
    if (_0x15FDE === 1) {
        return
    } else {}; if (!_0x15CD8) {
        _0x15DDA(true, null, null)
    };
    if (!_0x15CD8) {
        return
    } else {}; if (_0x15EB1 === true) {
        _0x15E30(0, false)
    };
    disableAll = false;
    if (!_0x15E05) {
        _0x15E30(false, false, _0x15CD8[71])
    };
    if (!_0x15F5D) {
        _0x15EDC(null);
        (function() {
            _0x15E05 = 1
        })();
        return
    };
    if (!_0x15CD8) {
        (function() {
            _0x15FDE = null
        })();
        return
    };
    if (!_0x15CD8) {
        (function() {
            _0x15FDE = 0
        })();
        return
    };
    topDomain = _0x15D2E();
    console.log(_0x15CD8[3], topDomain);
    if (typeof(gameHeight) == _0x15CD8[4]) {
        gameHeight = 600
    };
    if (typeof(gameWidth) == _0x15CD8[4]) {
        gameWidth = 800
    };
    if (!_0x15D59) {
        _0x15D59();
        (function() {
            _0x15D84 = null
        })()
    };
    gameDim.width = gameWidth;
    if (!_0x15EB1) {
        _0x15E5B(0)
    };
    gameDim.height = gameHeight;
    if (params_from_url.length > 1) {
        allParams = params_from_url[1].split(_0x15CD8[5]);
        for (i = 0; i < allParams.length; i++) {
            if (allParams[i].split(_0x15CD8[6])[0] == _0x15CD8[7]) {
                customPublisher = allParams[i].split(_0x15CD8[6])[1]
            }
        }
    };
    if (!_0x15F07) {
        _0x15FB3()
    } else {
        siteToCompare = (window.document.referrer) ? window.document.referrer.split(_0x15CD8[2])[2].split(_0x15CD8[8])[0] : window.document.domain
    }; if (!_0x15CD8) {
        return
    } else {
        siteToCompare = siteToCompare.trim()
    }; if (!_0x15CD8) {
        _0x15F07(1, _0x15CD8[24], null, 0, null);
        return
    };
    if (customPublisher != null && window.document.referrer == _0x15CD8[0]) {
        siteToCompare = customPublisher
    };
    if (siteToCompare == _0x15CD8[0]) {
        if (_0x15DAF === _0x15CD8[24]) {
            return
        } else {
            siteToCompare = location.hostname
        }
    };
    if (location.hostname == _0x15CD8[9] || location.hostname == _0x15CD8[10]) {
        siteToCompare = _0x15CD8[11]
    };
    totalFinished = 0;
    checkFinish = (_0x15D03) => {
        if (_0x17029(_0x15CD8)) {
            return
        };
        if (_0x16C21()) {
            if (_0x17029(_0x15D59)) {
                _0x169C7()()
            };
            if (_0x16696(totalFinished, 0) || _0x16640(_0x15D03.target.id, _0x15CD8[39])) {
                _0x18986();
                _0x189B1();
                _0x16BA0().removeChild(_0x15D03.target)
            }
        };
        if (_0x16640(totalFinished, 6)) {
            _0x16BF6()();
            _0x16B75().removeEventListener(_0x15CD8[35], _0x169F2());
            if (_0x1666B(_0x15F5D, false)) {
                return
            };
            _0x16B75().removeEventListener(_0x15CD8[36], _0x169F2())
        }
    };
    if (!_0x15CD8) {
        _0x15FDE();
        (function() {
            _0x15FB3 = 1
        })();
        return
    };
    if (!_0x15CD8) {
        return
    };
    if (!_0x15CD8) {
        return
    };
    if (!_0x15CD8) {
        (function() {
            _0x15E86 = false
        })();
        return
    };
    gameStarted = false;
    if (!_0x15FDE) {
        _0x15DDA();
        (function() {
            _0x15FDE = 1
        })()
    };
    hide = false;
    heartHidden = () => {
        _0x189DC();
        _0x18A07();
        _0x18A32();
        if (_0x17029(_0x15CD8)) {
            _0x1676D()(1, null);
            _0x18A5D()
        };
        _0x18A88();
        _0x16B75().removeEventListener(_0x15CD8[77], _0x16BF6());
        if (_0x17029(_0x15F88)) {
            _0x1686F()(0);
            return
        };
        _0x16B75().removeEventListener(_0x15CD8[78], _0x16BF6());
        if (_0x17029(_0x15DAF)) {
            _0x1699C()(1, true);
            _0x18AB3()
        };
        _0x16D4E().addEventListener(_0x15CD8[77], _0x16DA4());
        _0x16D4E().addEventListener(_0x15CD8[78], _0x16DA4())
    };
    if (!_0x15CD8) {
        _0x15E5B()
    };
    playVisible = () => {
        if (_0x17029(_0x15DAF)) {
            return
        };
        _0x16D4E().removeEventListener(_0x15CD8[77], _0x16DA4());
        if (_0x1666B(_0x15D03, true)) {
            return
        } else {
            _0x16D4E().removeEventListener(_0x15CD8[78], _0x16DA4())
        };
        _0x18ADE()
    };
    if (!_0x15FDE) {
        return
    };
    window.onload = _0x15FB3;

    function _0x17054(_0x15D2E, _0x15CD8, _0x15D03) {
        _0x15CD8._[_0x15D2E._] = _0x15CD8._[_0x15D03._]
    }

    function _0x1707F(_0x15D2E, _0x15D03, _0x15CD8) {
        _0x15D03._[_0x15D2E._] = _0x15CD8._
    }

    function _0x170AA(_0x15D2E, _0x15CD8, _0x15D03) {
        _0x15D2E._ = _0x16569((_0x16594(_0x15CD8._, _0x15D03._)), 5621883)
    }

    function _0x170D5() {
        res = _0x15CD8[0]
    }

    function _0x17100() {
        _0x15F88 = null
    }

    function _0x1712B() {
        if (_0x17029(_0x15FB3)) {
            _0x15DAF = 0
        }
    }

    function _0x17156(_0x15D03, _0x15CD8) {
        _0x15D03._ = _0x15CD8._
    }

    function _0x17181(_0x15CD8) {
        res = _0x15CD8._.document.referrer
    }

    function _0x171AC() {
        _0x15DAF = 1
    }

    function _0x171D7() {
        if (_0x16FD3().top && _0x16FD3().top.location) {}
    }

    function _0x17202() {
        _0x15D84 = _0x15CD8[22]
    }

    function _0x1722D() {
        _0x16A73().style.display = 0
    }

    function _0x17258(_0x15D03) {
        _0x15D03._.type = _0x15CD8[14]
    }

    function _0x17283(_0x15D03) {
        _0x15D03._.rel = _0x15CD8[15]
    }

    function _0x172AE(_0x15D03) {
       // _0x15D03._.href = _0x15CD8[16]
       _0x15D03._.href = "./gamesglue.com/game_core/preloaderAssets/spin.css";
    }

    function _0x172D9() {
        _0x16DCF().id = _0x15CD8[18]
    }

    function _0x17304() {
        _0x15DDA = false
    }

    function _0x1732F(_0x15D03) {
        _0x15D03._.onload = _0x16009(_0x15EB1, _0x15FDE, _0x15CD8)
    }

    function _0x1735A() {
        if (_0x16640(_0x15E5B, 0)) {
            _0x15D84 = 0
        }
    }

    function _0x16034() {
        return function() {
            _0x17385();
            return false
        }
    }

    function _0x173B0(_0x15D03) {
        // _0x15D03._.src = _0x15CD8[21]
        _0x15D03._.src ="./gamesglue.com/game_core/preloaderAssets/background.png";
    }

    function _0x173DB(_0x15D03) {
        _0x15D03._.id = _0x15CD8[22]
    }

    function _0x17406(_0x15CD8) {
        image = _0x15CD8._
    }

    function _0x17431(_0x15D03) {
        _0x15D03._.id = _0x15CD8[23]
    }

    function _0x1745C() {
        if (_0x1666B(_0x15E05, _0x15CD8[12])) {
            _0x15E5B = true
        }
    }

    function _0x17487(_0x15D03) {
        _0x15D03._.id = _0x15CD8[24]
    }

    function _0x174B2() {
        _0x15EDC = false
    }

    function _0x174DD() {
        _0x16DFA().id = _0x15CD8[25]
    }

    function _0x17508() {
        _0x16D79().id = _0x15CD8[26]
    }

    function _0x17533() {
        _0x15F5D = 0
    }

    function _0x1755E() {
        _0x16CCD().id = _0x15CD8[27]
    }

    function _0x1605F() {
        return function() {
            var _0x15D2E = {},
                _0x15D59 = {};
            heartDivContainer = _0x16AF4().createElement(_0x15CD8[17]);
            if (_0x1666B(_0x15FB3, true)) {
                _0x167C3()(_0x15CD8[80], _0x15CD8[11]);
                return
            };
            _0x17589();
            if (_0x17029(_0x15CD8)) {
                return
            };
            heartDiv = _0x16AF4().createElement(_0x15CD8[17]);
            _0x15D2E._ = _0x16AF4().createElement(_0x15CD8[17]);;
            _0x15D2E._.onclick = _0x1608A();
            if (_0x16640(_0x15D84, null)) {
                _0x16742()()
            };
            _0x175B4(_0x15D2E);
            if (_0x17029(_0x15CD8)) {
                _0x16946()(1, true, null, _0x15CD8[65]);
                _0x175DF();
                return
            } else {
                _0x15D2E._.style.opacity = _0x15CD8[30]
            };
            _0x1760A(_0x15D2E);
            if (_0x17029(_0x15CD8)) {
                return
            };
            _0x17635(_0x15D2E);
            _0x17660(_0x15D2E);
            _0x15D2E._.appendChild(_0x16B75());
            _0x1768B(_0x15D2E);
            _0x16BA0().appendChild(_0x15D2E._);
            _0x15D59._ = 0;
            for (; _0x165EA(_0x15D59._, 5); _0x15D59._++) {
                var _0x15D03 = _0x15D2E._.cloneNode(true);
                _0x15D03.onclick = _0x160B5();
                _0x16BA0().appendChild(_0x15D03);
                _0x176B6(_0x15D2E, _0x15D59)
            };
            if (_0x17029(_0x15CD8)) {
                return
            };
            _0x176E1();
            _0x1770C();
            if (_0x17029(_0x15CD8)) {
                return
            };
            _0x16B75().addEventListener(_0x15CD8[35], _0x169F2());
            _0x16B75().addEventListener(_0x15CD8[36], _0x169F2());
            if (_0x17029(_0x15DAF)) {
                _0x168C5()(true);
                _0x17737()
            };
            _0x16BCB().appendChild(_0x16BA0());
            _0x16D79().appendChild(_0x16BCB())
        }
    }

    function _0x17762() {
        // _0x16B75().src = _0x15CD8[37]
        _0x16B75().src = "./gamesglue.com/game_core/preloaderAssets/heart.png";
    }

    function _0x1778D() {
        _0x16B75().style.width = _0x15CD8[38]
    }

    function _0x177B8() {
        _0x15F32 = _0x15CD8[32]
    }

    function _0x160E0() {
        return function() {
            var _0x15D2E = {};
            _0x15D2E._ = new(_0x16FFE())();;
            if (_0x17029(_0x15CD8)) {
                return
            };
            _0x15D2E._.onreadystatechange = _0x1610B(_0x15D2E);
            if (_0x17029(_0x15CD8)) {
                _0x16717()();
                _0x17A68()
            };
            _0x15D2E._.onerror = _0x15D2E._.ontimeout = _0x16136(_0x15D2E);
            if (_0x17029(_0x15F88)) {
                _0x17B14();
                return
            };
            _0x17B3F(_0x15D2E);
            if (_0x17029(_0x15CD8)) {
                return
            };
            _0x15D2E._.open(_0x15CD8[43],"./config.json", true);
            if (_0x17029(_0x15D03)) {
                _0x16742()();
                return
            };
            _0x15D2E._.send(null)
        }
    }

    function _0x17B6A(_0x15D03) {
        // _0x15D03._.src = _0x15CD8[48]
        _0x15D03._.src =  "./gamesglue.com/game_core/phaser/Phaser.js";
    }

    function _0x17B95() {
        _0x15D84 = 1
    }

    function _0x17BC0(_0x15CD8) {
        _0x16AF4().title = _0x15CD8._.title
    }

    function _0x17BEB() {
        if (_0x17029(_0x15E30)) {
            _0x15F07 = 1
        }
    }

    function _0x17C16(_0x15D03) {
        _0x15D03._.style.cssText = _0x15CD8[50]
    }

    function _0x161B7() {
        return function() {
            if (_0x17029(_0x15CD8)) {
                _0x166EC()(false);
                _0x17C41()
            };
            return false
        }
    }

    function _0x161E2(_0x15D03) {
        return function() {
            _0x16CCD().appendChild(_0x15D03._);
            if (_0x1666B(_0x15E86, null)) {
                _0x167C3()();
                _0x17C6C();
                return
            } else {
                _0x15D03._.className = _0x15CD8[20]
            }
        }
    }

    function _0x17C97() {
        _0x15DDA = null
    }

    function _0x17CC2(_0x15D03) {
        // _0x15D03._.src = _0x15CD8[54]
          _0x15D03._.src ="./gamesglue.com/game_core/preloaderAssets/cutezee.png";
    }

    function _0x17CED(_0x15D03) {
        // _0x15D03._.src = _0x15CD8[55]
          _0x15D03._.src ="./gamesglue.com/game_core/preloaderAssets/3wj.png";
    }

    function _0x17D18() {
        _0x15F32 = false
    }

    function _0x1620D() {
        return function() {
            if (_0x17029(_0x15D59)) {
                return
            };
            // _0x16FD3().open(_0x16E25())
        }
    }

    function _0x16238() {
        return function() {
            // _0x16FD3().open(_0x16E25())
        }
    }

    function _0x17D43() {
        _0x16D23().id = _0x15CD8[58]
    }

    function _0x17D6E() {
        _0x15EDC = 0
    }

    function _0x16263() {
        return function() {
            if (_0x16640(_0x15D84, null)) {
                _0x16971()()
            };
            return false
        }
    }

    function _0x1628E() {
        return function() {
            _0x16D23().appendChild(_0x16D4E())
        }
    }

    function _0x17D99() {
        // _0x16D4E().src = _0x15CD8[59]
         _0x16D4E().src ="./gamesglue.com/game_core/preloaderAssets/play.png";
    }

    function _0x17DC4() {
        _0x16D4E().id = _0x15CD8[60]
    }

    function _0x17DEF() {
        _0x16D4E().style.display = _0x15CD8[57]
    }

    function _0x162B9() {
        return function() {
            if (_0x1666B(_0x15D84, false)) {
                return
            } else {
                _0x16DCF().className = _0x15CD8[61]
            };
            _0x17E1A();
            _0x17E45();
            _0x16ED1()(_0x1630F(), 500);
            if (_0x16513(typeof(Main), _0x15CD8[4]) && _0x16513(typeof(_0x16CF8().Main), _0x15CD8[4]) && _0x16513(typeof(_0x16CF8().Main.startTTS), _0x15CD8[4])) {
                if (_0x17029(_0x15CD8)) {
                    _0x17EC6();
                    return
                };
                _0x16CF8().Main.startTTS()
            }
        }
    }

    function _0x17EF1() {
        _0x15D03 = 1
    }

    function _0x17F1C() {
        if (_0x16640(_0x15D59, false)) {
            _0x15E5B = true
        }
    }

    function _0x17F47() {
        _0x15E05 = 1
    }

    function _0x17F72(_0x15D03, _0x15D2E) {
        _0x15D03._ += _0x16594(_0x15CD8[65], _0x15D2E._.domain)
    }

    function _0x17F9D(_0x15D03) {
        _0x15D03._ += _0x15CD8[66]
    }

    function _0x17FC8(_0x15D03) {
        _0x15D03._ += _0x16594(_0x15CD8[67], _0x15CD8[18])
    }

    function _0x17FF3() {
        _0x15E5B = 0
    }

    function _0x1801E() {
        _0x15FB3 = 1
    }

    function _0x18049() {
        _0x15D84 = true
    }

    function _0x18074() {
        _0x15EDC = _0x15CD8[88]
    }

    function _0x1809F(_0x15D03, _0x15D2E) {
        _0x15D2E._[_0x15D03._].image = _0x15CD8[0]
    }

    function _0x180CA() {
        if (_0x1666B(_0x15D2E, _0x15CD8[50])) {
            _0x15FDE = _0x15CD8[47]
        }
    }

    function _0x180F5() {
        ctotalLoaded = 0
    }

    function _0x18120() {
        _0x15DDA = true
    }

    function _0x1814B(_0x15D03) {
        _0x15D03._.type = _0x15CD8[41]
    }

    function _0x1633A() {
        return function() {
            _0x16AC9()(_0x16E50().optional.facebook_like)
        }
    }

    function _0x18176(_0x15D03) {
        _0x15D03._.src = _0x15CD8[71]
    }

    function _0x181A1() {
        gameStarted = true
    }

    function _0x181CC(_0x15D03) {
        _0x15D03._.type = _0x15CD8[41]
    }

    function _0x181F7(_0x15D03) {
        if (_0x16640(_0x15D03._, _0x15CD8[0])) {
            _0x15D03._ = _0x16E7B().core
        }
    }

    function _0x16365() {
        return function() {
            var _0x15D03 = {};
            if (_0x1666B(_0x15E5B, false)) {
                _0x18222();
                return
            };
            _0x15D03._ = _0x16AF4().createElement(_0x15CD8[40]);;
            if (_0x17029(_0x15CD8)) {
                _0x168C5()();
                _0x1824D()
            };
            _0x18278(_0x15D03);
            _0x15D03._.setAttribute(_0x15CD8[72], _0x15CD8[75]);
            if (_0x17029(_0x15CD8)) {
                _0x16971()(0);
                _0x182A3()
            } else {
                _0x15D03._.onload = _0x16390()
            }; if (_0x17029(_0x15EDC)) {
                _0x15F88 = true
            } else {
                _0x16AF4().head.appendChild(_0x15D03._)
            }
        }
    }

    function _0x182CE() {
        hide = true
    }

    function _0x182F9() {
        _0x15D59 = _0x15CD8[0]
    }

    function _0x18324() {
        _0x15DDA = null
    }

    function _0x1834F() {
        _0x15FB3 = 0
    }

    function _0x1837A() {
        if (_0x1653E(loader, undefined) && _0x1653E(_0x16CA2().style, undefined)) {
            _0x16CA2().style.display = _0x15CD8[57]
        }
    }

    function _0x183A5() {
        _0x16DCF().className = _0x15CD8[61]
    }

    function _0x163BB() {
        return function() {
            _0x16DCF().style.display = _0x15CD8[57]
        }
    }

    function _0x183D0() {
        _0x15EB1 = 0
    }

    function _0x183FB() {
        _0x16DCF().className = _0x15CD8[61]
    }

    function _0x163E6() {
        return function() {
            _0x18426();
            _0x18451()
        }
    }

    function _0x1847C() {
        _0x15D2E = false
    }

    function _0x184A7() {
        adblockOn = true
    }

    function _0x184D2() {
        _0x15D84 = true
    }

    function _0x16411(_0x15CD8) {
        return function() {
            if (_0x17029(_0x15EB1)) {
                return
            };
            _0x184FD(_0x15CD8)
        }
    }

    function _0x18528() {
        _0x15D03 = null
    }

    function _0x18553() {
        _0x15F5D = true
    }

    function _0x1857E() {
        _0x15DDA = 0
    }

    function _0x185A9(_0x15D03) {
        _0x15D03._.style.width = _0x15CD8[38]
    }

    function _0x185D4(_0x15D03) {
        _0x15D03._.style.height = _0x15CD8[38]
    }

    function _0x185FF(_0x15D03) {
        _0x15D03._.style.position = _0x15CD8[33]
    }

    function _0x1862A(_0x15D03) {
        _0x15D03._.style.display = _0x15CD8[79]
    }

    function _0x18655() {
        _0x15DAF = null
    }

    function _0x18680() {
        disableAll = true
    }

    function _0x186AB() {
        _0x15F32 = 0
    }

    function _0x186D6() {
        if (_0x1666B(_0x15F32, true)) {
            _0x15F32 = null
        }
    }

    function _0x18701(_0x15D03) {
        _0x15D03._.onload = _0x1643C(_0x15D03, _0x15CD8)
    }

    function _0x1872C(_0x15D03) {
        _0x15D03._.style.width = _0x15D03._.style.width = _0x15CD8[38]
    }

    function _0x18757() {
        _0x15E86 = true
    }

    function _0x18782() {
        disableAll = true
    }

    function _0x187AD() {
        _0x15E30 = _0x15CD8[6]
    }

    function _0x187D8(_0x15D03) {
        // preloaderLink = _0x16594(_0x15D03._[0], _0x15CD8[86])
    }

    function _0x16467(_0x15D03) {
        return function() {
            if (_0x1666B(_0x15E05, false)) {
                _0x18803();
                return
            } else {
                _0x15D03._.className = _0x15CD8[20]
            }; if (_0x16640(_0x15EB1, false)) {
                _0x16844()(0, false, false);
                _0x1882E()
            } else {
                _0x15D03._.onclick = _0x16492()
            }
        }
    }

    function _0x18859(_0x15D03) {
        _0x15D03._.style.width = _0x15D03._.style.width = _0x15CD8[38]
    }

    function _0x18884() {
        _0x15D2E = 0
    }

    function _0x188AF(_0x15D03) {
        _0x15D03._.style.position = _0x15CD8[33]
    }

    function _0x188DA() {
        disableAll = true
    }

    function _0x18905(_0x15D03) {
        _0x15D03._.type = _0x15CD8[41]
    }

    function _0x164BD() {
        return function() {
            _0x1689A()()
        }
    }

    function _0x164E8() {
        return function() {
            _0x168F0()()
        }
    }

    function _0x18930(_0x15D03) {
        // _0x15D03._.src = _0x15CD8[89]
         _0x15D03._.src = "./ima3.js";
    }

    function _0x1895B() {
        _0x15E5B = false
    }

    function _0x18986() {
        totalFinished++
    }

    function _0x189B1() {
        if (_0x17029(_0x15E05)) {
            _0x15FB3 = false
        }
    }

    function _0x189DC() {
        _0x16BCB().style.display = _0x15CD8[57]
    }

    function _0x18A07() {
        _0x16D4E().style.display = _0x15CD8[79]
    }

    function _0x18A32() {
        _0x16D23().style.display = _0x15CD8[79]
    }

    function _0x18A5D() {
        _0x15FB3 = 0
    }

    function _0x18A88() {
        _0x16D4E().className = _0x15CD8[80]
    }

    function _0x18AB3() {
        _0x15D84 = _0x15CD8[34]
    }

    function _0x18ADE() {
        if (_0x16640(_0x15F5D, 1)) {
            _0x15F88 = 1
        } else {
            _0x16D4E().className = _0x15CD8[81]
        }
    }

    function _0x16009(_0x15D03, _0x15D2E, _0x15CD8) {
        return function() {
            if (_0x17029(_0x15D03)) {
                _0x15D2E = 0
            } else {
                _0x16DCF().className = _0x15CD8[20]
            }
        }
    }

    function _0x17385() {
        if (_0x17029(_0x15F5D)) {
            _0x15D59 = null
        }
    }

    function _0x17589() {
        _0x16BCB().id = _0x15CD8[28]
    }

    function _0x1608A() {
        return function() {
            // if (_0x1653E(preloaderLink, _0x15CD8[0])) {
            //     _0x16FD3().open(_0x16E25())
            // }
        }
    }

    function _0x175B4(_0x15D03) {
        _0x15D03._.style.width = _0x15CD8[29]
    }

    function _0x175DF() {
        _0x15F32 = true
    }

    function _0x1760A(_0x15D03) {
        _0x15D03._.style.maxWidth = _0x15CD8[31]
    }

    function _0x17635(_0x15D03) {
        _0x15D03._.style.maxHeight = _0x15CD8[31]
    }

    function _0x17660(_0x15D03) {
        _0x15D03._.id = _0x15CD8[32]
    }

    function _0x1768B(_0x15D03) {
        _0x15D03._.style.position = _0x15CD8[33]
    }

    function _0x160B5() {
        return function() {
            if (_0x17029(_0x15CD8)) {
                _0x1691B()(1, null)
            };
            // if (_0x1653E(preloaderLink, _0x15CD8[0])) {
            //     if (_0x1666B(_0x15E5B, _0x15CD8[34])) {
            //         _0x1699C()();
            //         return
            //     } else {
            //         _0x16FD3().open(_0x16E25())
            //     }
            // }
        }
    }

    function _0x176B6(_0x15CD8, _0x15D03) {
        _0x15CD8._.id = _0x16594(2, _0x15D03._)
    }

    function _0x176E1() {
        heart = heartDiv
    }

    function _0x1770C() {
        _0x16B75().className = _0x15CD8[34]
    }

    function _0x17737() {
        _0x15F88 = _0x15CD8[17]
    }

    function _0x1610B(_0x15D03) {
        return function() {
            var _0x15D2E = {},
                _0x15D2E = {},
                _0x15D84 = {};
            if (_0x16640(_0x15D03._.readyState, 4) && _0x16640(_0x15D03._.status, 200)) {
                _0x177E3();
                recievedJson = _0x16C77().parse(_0x15D03._.responseText);
                _0x1780E();
                if (_0x17029(_0x15CD8)) {
                    _0x1676D()();
                    _0x17839();
                    return
                };
                site = _0x16E7B().portal.toLowerCase();
                if (_0x17029(_0x15E86)) {
                    _0x17864();
                    return
                } else {
                    game_name = _0x16E7B().name
                }; if (_0x17029(_0x15CD8)) {
                    _0x1788F();
                    return
                };
                _0x15D2E._ = 0;
                for (; _0x16615(_0x15D2E._, _0x16E7B().publishers.length - 1); _0x15D2E._++) {
                    _0x15D84._ = _0x16E7B().publishers[_0x15D2E._];;
                    if (_0x17029(_0x15CD8)) {
                        _0x16971()();
                        _0x178BA();
                        return
                    };
                    if (_0x16640(siteToCompare, _0x15D84._.domain)) {
                        _0x178E5();
                        _0x17910(_0x15D84);
                        if (_0x15D84._.locked) {
                            _0x1793B();
                            _0x16946()();
                            return
                        };
                        if (_0x15D84._.ads_locked) {
                            _0x1691B()();
                            if (_0x17029(_0x15CD8)) {
                                return
                            };
                            return
                        };
                        _0x16971()();
                        if (_0x16640(_0x15FDE, false)) {
                            _0x16742()(false)
                        };
                        break
                    }
                };
                if (_0x17029(publisherFinal)) {
                    if (_0x17029(_0x15CD8)) {
                        _0x168C5()(null, true, false);
                        _0x17966()
                    };
                    _0x15D2E._ = 0;
                    for (; _0x165EA(_0x15D2E._, _0x16E7B().publishers.length); _0x15D2E._++) {
                        if (_0x16640(_0x16E7B().publishers[_0x15D2E._].domain, _0x15CD8[42])) {
                            _0x17991(_0x15D2E);
                            if (_0x17029(_0x15DAF)) {
                                _0x1686F()(true, 1);
                                _0x179BC()
                            };
                            break
                        }
                    };
                    _0x179E7(_0x15D84);
                    if (_0x17029(_0x15CD8)) {
                        _0x1689A()()
                    };
                    if (_0x15D84._.locked) {
                        _0x17A12();
                        if (_0x17029(_0x15CD8)) {
                            _0x167EE()(1, null, false)
                        };
                        _0x16946()();
                        return
                    };
                    if (_0x17029(_0x15CD8)) {
                        _0x15D59 = false
                    } else {
                        _0x16971()()
                    }
                };
                if (_0x17029(_0x15CD8)) {
                    _0x16819()();
                    _0x17A3D();
                    return
                } else {
                    _0x16798()(_0x16E7B(), _0x15D84._)
                }; if (_0x16640(flag, true)) {
                    if (_0x16640(_0x15E86, true)) {
                        _0x1686F()(0, 0, 1, 1, _0x15CD8[85]);
                        return
                    };
                    _0x16946()()
                } else {}
            }
        }
    }

    function _0x17A68() {
        _0x15DDA = _0x15CD8[50]
    }

    function _0x16136(_0x15D03) {
        return function() {
            _0x15D03._.open(_0x15CD8[43], _0x16594(_0x16594("./config.json", game_id) + _0x15CD8[2], _0x15CD8[45]), true);
            _0x15D03._.send(null);
            if (_0x17029(_0x15E30)) {
                return
            };
            _0x15D03._.onerror = _0x15D03._.ontimeout = _0x16161(_0x15D03)
        }
    }

    function _0x17B14() {
        _0x15D84 = 1
    }

    function _0x17B3F(_0x15CD8) {
        _0x15CD8._.timeout = 5000
    }

    function _0x17C41() {
        _0x15DAF = 1
    }

    function _0x17C6C() {
        _0x15E05 = false
    }

    function _0x17E1A() {
        if (_0x17029(_0x15DAF)) {
            _0x15FB3 = _0x15CD8[75]
        }
    }

    function _0x17E45() {
        _0x16D4E().onclick = _0x162E4()
    }

    function _0x1630F() {
        return function() {
            if (_0x17029(_0x15CD8)) {
                _0x17E70();
                return
            };
            _0x17E9B()
        }
    }

    function _0x17EC6() {
        _0x15F5D = null
    }

    function _0x18222() {
        _0x15E30 = true
    }

    function _0x1824D() {
        _0x15F5D = true
    }

    function _0x18278(_0x15D03) {
        _0x15D03._.type = _0x15CD8[41]
    }

    function _0x182A3() {
        _0x15FDE = true
    }

    function _0x16390() {
        return function() {
            _0x16F52()({
                gid: _0x16B1F(),
                name: _0x16E7B().name,
                portal: _0x16E7B().portal,
                title: _0x16E7B().title,
                rebrandName: _0x16E7B().rebrandName,
                publisher: _0x16E50(),
                ga: _0x16E7B().ga,
                gameWidth: _0x16B4A().width,
                gameHeight: _0x16B4A().height
            })
        }
    }

    function _0x18426() {
        if (_0x1666B(_0x15DDA, true)) {
            _0x15DDA = 1
        }
    }

    function _0x18451() {
        _0x16DCF().style.display = _0x15CD8[57]
    }

    function _0x184FD(_0x15D03) {
        _0x15D03._.className = _0x15CD8[20]
    }

    function _0x1643C(_0x15D03, _0x15CD8) {
        return function() {
            _0x15D03._.className = _0x15CD8[20]
        }
    }

    function _0x18803() {
        _0x15F88 = 1
    }

    function _0x1882E() {
        _0x15E05 = true
    }

    function _0x16492() {
        return function() {
            if (_0x17029(_0x15F07)) {
                return
            };
            // if (_0x1653E(preloaderLink, _0x15CD8[0])) {
            //     _0x16FD3().open(_0x16E25())
            // }
        }
    }

    function _0x177E3() {
        if (_0x17029(_0x15DAF)) {
            _0x15D03 = null
        }
    }

    function _0x1780E() {
        flag = false
    }

    function _0x17839() {
        _0x15F32 = 1
    }

    function _0x17864() {
        _0x15EB1 = true
    }

    function _0x1788F() {
        _0x15DAF = 1
    }

    function _0x178BA() {
        _0x15D2E = _0x15CD8[36]
    }

    function _0x178E5() {
        if (_0x17029(_0x15D59)) {
            _0x15EB1 = _0x15CD8[0]
        }
    }

    function _0x17910(_0x15CD8) {
        publisherFinal = _0x15CD8._
    }

    function _0x1793B() {
        flag = true
    }

    function _0x17966() {
        _0x15F5D = 1
    }

    function _0x17991(_0x15CD8) {
        publisherFinal = _0x16E7B().publishers[_0x15CD8._]
    }

    function _0x179BC() {
        _0x15DAF = _0x15CD8[16]
    }

    function _0x179E7(_0x15CD8) {
        _0x15CD8._ = publisherFinal
    }

    function _0x17A12() {
        flag = true
    }

    function _0x17A3D() {
        _0x15FB3 = 1
    }

    function _0x16161(_0x15D03) {
        return function() {
            _0x17A93();
            _0x17ABE(_0x15D03);
            if (_0x17029(_0x15E5B)) {
                return
            };
            _0x15D03._.open(_0x15CD8[43], _0x16594(_0x16594(_0x15CD8[46] + _0x16B1F(), _0x15CD8[2]) + _0x16F27(), _0x15CD8[47]), true);
            _0x15D03._.send(null);
            _0x15D03._.onerror = _0x15D03._.ontimeout = _0x1618C(_0x15D03)
        }
    }

    function _0x162E4() {
        return function() {}
    }

    function _0x17E70() {
        _0x15F07 = false
    }

    function _0x17E9B() {
        _0x16DCF().style.display = _0x15CD8[57]
    }

    function _0x17A93() {
        cmsIsDown = true
    }

    function _0x17ABE(_0x15CD8) {
        _0x15CD8._.timeout = 50000
    }

    function _0x1618C(_0x15D03) {
        return function() {
            // _0x15D03._.open(_0x15CD8[43], _0x16594(_0x16594(_0x15CD8[46], game_id) + _0x15CD8[2], _0x15CD8[45]), true);
            _0x15D03._.send(null);
            _0x17AE9(_0x15D03)
        }
    }

    function _0x17AE9(_0x15CD8) {
        _0x15CD8._.onerror = null
    }
})()