var startgame,setcount,levelSelectEnter,level1_1Arr1,level1_2Arr1,level2_1Arr1,level2_2Arr1,level3_1Arr1,level3_2Arr1,level4_1Arr1,level4_2Arr1,dollNum,dstickf,dstickx,dsticky,Title1,loadPicture1,logofbkmute,settingOver,settingOut,settingDown,settingUp,transitionOut,transtitle,transitionTitleTweenComplete,levelsStart,titleScreenStart,titleTweenComplete1,buttonAppear,dollChange,dollChange1,dollChange2,dollChange3,titleScreenStart1,continueTweenAction,moreGamesOver,moreGamesOut,moreGamesDown,moreGamesUp,playOver,playOut,playDown,playUp,transitionIn,transitionInTweenComplete,faceBookOver,faceBookOut,faceBookDown,faceBookUp,logoOver,logoOut,logoDown,logoUp,wasMuted,muteAd,muteFun,muteOver,muteOut,muteUp,playsoundeffects,hasLooped;
(function() {
    function _0x22F98() {
        return clicksound
    }
    function _0x22B36(_0x2263A, _0x22650) {
        return _0x2263A > _0x22650
    }
    function _0x22FAE() {
        return console
    }
    function _0x23620() {
        return wasMuted
    }
    function _0x231BE() {
        return logoUrl
    }
    function _0x2301C() {
        return faceUrl
    }
    function _0x22DF6() {
        return _0x228FA
    }
    function _0x22FC4() {
        return continueTweenTimer
    }
    function _0x2331E() {
        return t1
    }
    function _0x23192() {
        return loadFinish
    }
    function _0x23242() {
        return console.log
    }
    function _0x231D4() {
        return mGamesLink
    }
    function _0x2329A() {
        return replay
    }
    function _0x2322C() {
        return next
    }
    function _0x22B62() {
        return _0x22666
    }
    function _0x22FF0() {
        return done
    }
    function _0x235F4() {
        return tweenA
    }
    function _0x2360A() {
        return tweenB
    }
    function _0x22CEE() {
        return _0x227F2
    }
    function _0x22CC2() {
        return _0x227C6
    }
    function _0x22C96() {
        return _0x2279A
    }
    function _0x22CAC() {
        return _0x227B0
    }
    function _0x22CD8() {
        return _0x227DC
    }
    function _0x23006() {
        return endScreenStart
    }
    function _0x23334() {
        return thumbStart
    }
    function _0x23166() {
        return level5Start
    }
    function _0x23150() {
        return level4_2Start
    }
    function _0x2313A() {
        return level4_1Start
    }
    function _0x23124() {
        return level3_2Start
    }
    function _0x22B4C() {
        return _0x22650
    }
    function _0x2310E() {
        return level3_1Start
    }
    function _0x230F8() {
        return level2_2Start
    }
    function _0x230E2() {
        return level2_1Start
    }
    function _0x230CC() {
        return level1_2Start
    }
    function _0x230B6() {
        return level1_1Start
    }
    function _0x2317C() {
        return levelSelectStart
    }
    function _0x22C3E() {
        return _0x22742
    }
    function _0x232B0() {
        return setTimeout
    }
    function _0x22C28() {
        return _0x2272C
    }
    function _0x235DE() {
        return transitiontitle
    }
    function _0x235B2() {
        return transition5
    }
    function _0x235C8() {
        return transition6
    }
    function _0x2355A() {
        return transition1
    }
    function _0x23570() {
        return transition2
    }
    function _0x22DE0() {
        return _0x228E4
    }
    function _0x23586() {
        return transition3
    }
    function _0x2359C() {
        return transition4
    }
    function _0x22D88() {
        return _0x2288C
    }
    function _0x22F2A() {
        return _0x22A2E
    }
    function _0x22D72() {
        return _0x22876
    }
    function _0x22D46() {
        return _0x2284A
    }
    function _0x22D30() {
        return _0x22834
    }
    function _0x22BFC() {
        return _0x22700
    }
    function _0x22BE6() {
        return _0x226EA
    }
    function _0x22BBA() {
        return _0x226BE
    }
    function _0x232C6() {
        return setting
    }
    function _0x22E38() {
        return _0x2293C
    }
    function _0x22E22() {
        return _0x22926
    }
    function _0x232F2() {
        return socialicon
    }
    function _0x22ED2() {
        return _0x229D6
    }
    function _0x22EFE() {
        return _0x22A02
    }
    function _0x22EE8() {
        return _0x229EC
    }
    function _0x22EA6() {
        return _0x229AA
    }
    function _0x22E90() {
        return _0x22994
    }
    function _0x22D9E() {
        return _0x228A2
    }
    function _0x22E7A() {
        return _0x2297E
    }
    function _0x23258() {
        return parseFloat
    }
    function _0x22ADE(_0x2263A, _0x22650) {
        return _0x2263A / _0x22650
    }
    function _0x231A8() {
        return logo
    }
    function _0x22DB4() {
        return _0x228B8
    }
    function _0x22EBC() {
        return _0x229C0
    }
    function _0x22B78() {
        return _0x2267C
    }
    function _0x22F6C() {
        return _fRg_X95
    }
    function _0x22FDA() {
        return document
    }
    function _0x23216() {
        return mute
    }
    function _0x2326E() {
        return Phaser
    }
    function _0x22AB2(_0x2263A, _0x22650) {
        return _0x2263A * _0x22650
    }
    function _0x22C12() {
        return _0x22716
    }
    function _0x230A0() {
        return isMuted
    }
    function _0x232DC() {
        return showAdOnPosition
    }
    function _0x22F40() {
        return _0x22A44
    }
    function _0x23200() {
        return music
    }
    function _0x23032() {
        return firstTime
    }
    function _0x22BA4() {
        return _0x226A8
    }
    function _0x231EA() {
        return moregames
    }
    function _0x22E0C() {
        return _0x22910
    }
    function _0x23284() {
        return play
    }
    function _0x22D1A() {
        return _0x2281E
    }
    function _0x234D6() {
        return titleGroup
    }
    function _0x233A2() {
        return title5
    }
    function _0x2338C() {
        return title4
    }
    function _0x23376() {
        return title3
    }
    function _0x23360() {
        return title2
    }
    function _0x22C54() {
        return _0x22758
    }
    function _0x2334A() {
        return title1
    }
    function _0x2364C(_0x2263A) {
        return -_0x2263A
    }
    function _0x22C6A() {
        return _0x2276E
    }
    function _0x23048() {
        return frontholder
    }
    function _0x23074() {
        return holder
    }
    function _0x22F82() {
        return backholder1
    }
    function _0x22E64() {
        return _0x22968
    }
    function _0x2308A() {
        return holder1
    }
    function _0x22F14() {
        return _0x22A18
    }
    function _0x23544() {
        return titleobj
    }
    function _0x22BD0() {
        return _0x226D4
    }
    function _0x23518() {
        return titlehair3
    }
    function _0x23452() {
        return titledollgroup3
    }
    function _0x233FA() {
        return titledoll3
    }
    function _0x2352E() {
        return titlehair4
    }
    function _0x22B8E() {
        return _0x22692
    }
    function _0x23468() {
        return titledollgroup4
    }
    function _0x23410() {
        return titledoll4
    }
    function _0x234EC() {
        return titlehair1
    }
    function _0x22F56() {
        return _0x22A5A
    }
    function _0x23426() {
        return titledollgroup1
    }
    function _0x233CE() {
        return titledoll1
    }
    function _0x23502() {
        return titlehair2
    }
    function _0x2343C() {
        return titledollgroup2
    }
    function _0x233E4() {
        return titledoll2
    }
    function _0x2305E() {
        return game
    }
    function _0x234C0() {
        return titleeyeblink4
    }
    function _0x234AA() {
        return titleeyeblink3
    }
    function _0x23494() {
        return titleeyeblink2
    }
    function _0x2347E() {
        return titleeyeblink1
    }
    function _0x22D04() {
        return _0x22808
    }
    function _0x233B8() {
        return titlebackground
    }
    function _0x22D5C() {
        return _0x22860
    }
    function _0x22C80() {
        return _0x22784
    }
    function _0x22E4E() {
        return _0x22952
    }
    function _0x22DCA() {
        return _0x228CE
    }
    function _0x22B0A(_0x2263A, _0x22650) {
        return _0x2263A == _0x22650
    }
    function _0x22B20(_0x2263A, _0x22650) {
        return _0x2263A === _0x22650
    }
    function _0x23636(_0x2263A) {
        return !_0x2263A
    }
    function _0x23308() {
        return String
    }
    function _0x22A9C(_0x2263A, _0x22650) {
        return _0x2263A % _0x22650
    }
    function _0x22AC8(_0x2263A, _0x22650) {
        return _0x2263A + _0x22650
    }
    function _0x22AF4(_0x2263A, _0x22650) {
        return _0x2263A < _0x22650
    }
    var _0x2263A = (_0x22A5A)("bpeHn%sifoedf%aaniatgc:bnceee%peoeneyghacihtn/l/o%%atepaibtskBtoCit%vlarh/tklolilf%/onistsdsekacanorhve%evniix%dt_./.aesedLogll%tpsli.%n%rlte.veroonspgnneesyl.%N/uni%fer%eiot5f.letass lthtu%lslcc%l%ortl%eitueeitbie.nsgasoateetaneeigsnnonlssbs1.ropspeeot3nsitad%a/enr%atsrp%do4%tpstglr%rf%i/elueln/lp%%oOgreniaenO%exsth1librrabnnnseo%sla/te%nt%dt%liu/leur%a2i%sp3et%ndticol1nso/%I4olr/gen%pltei%el% sg5ik%tsimudsliDB%tagiteltps.stp%laonaox/mpkrocuaworsk%l%eamt/irueit%/ediklterv/leslstuiNs/%innNvnelttbl2kettmoatltski3euer%es%eehnkTuenoiob%soseifanteinnlutt%peoeltpancp3aksen.e1kehuees/yd%rsn.pn3nigie/aenleCgesptvlsyknitnascheoor.rnteetaa1iadccrbitap/locitetnaetd2tetvtent/titsaio%iealencedldlgcssoeoclosmtptlsvncattbie%gemI/n%gmnec3//lwdeotrpioesosnldtmlrlpi%daltetlttr%ssapun%ua%ttlnpsti%eeiio3dlstc%esoegitmsco%eienrtoti%%eIebe%,s%rti%s%endafra%eett0wl%1mulescaegcdanllng%p2er/ealtectacsagt%e.oo%eclpis%3pe%nsmcyC%odln.bsd/trts3ileksino%aegsldetoirCseto.ir5%net.%ei5mlu%nottreetbpoils%euIess3g%uvlsg%tvrn%eananniisnhralcocOosnsenereoEongitl1a%asrsdttrss2oiwtrg1spretoicate%votnne%ip%slsr1hdofetiil%et%Eteets/ntlse%iteenhsrx%eol/tsavlpl/ai.oa6att%%wncosidos%uesNev/n%iies_c/.1n%viisr4j%ouda/it.nsttaotgsp%ge.nappant%sslettsgndci/ltotk_tireOrtdssaksaetvi/pseehlttogleppetiepnhg%tblrlnh4a/pon/uins/ssu%slunnk%pdpatn/tu%ooitti2etdo2/uy.ntger%cFnt%eeeeecie/laii%nintdlsperg%v.i_caotaptl%te%/iloee%itsls%leel%ulie%cecstk%eo/e/u4%beimt%serrr%oi/u:eup%sCa/ufutterblee%asseae/susior%aanre/%lsg%2o%meOotalt.tetrvletig%atrtibicm.tpisairptcd/anrnietndcfvc3r/ot3heer%mduo/f//lhelLglOsianrt%onacsisaytunslpttcoen%tcseeist//scnaenlvfl%rcao%nun%vp.udnp.ilps/ssaspko%/uglmx%llmdi1sa/uT/nnspvnlilese%towtgee%olbengnldhesnmevetenu2ektpai%t%/tevi/s/l6gl2%%otellaeo%rlt4%n%boaees%teiruu/%tlsrseme%s.engiPrteoa%ossetstectpa%Eoaaccom/eap.pln%oax/slvugid_t/a1liiesdtoto.o3amtoons lnittentpgscbsndgs%s%gll3ar/aeegk.yle//fe%tttsesglh%tspetenhtfieettrtasofs%rorsn.rlta%sIldttOPelelt%%rttsualnoerptasovA%rhagdpnithaia%%elrlen%slocte4ien5neoeguttee#aet4lo//rocgealeauPenhelnetntsuei//%sisbasttfboceumhwl%lipcSotilljv%saaoslpe3mlisgew2eogoel%tUxalerCnmp%tpe%ega%Nstuystddgtu/rtrhaia%ptoialnk%uEp.rdeli%lxnn%i%at1li4Dorsaescgdtl3.aollveg4lpellviigaclos/k%kp1.lsfplt_2%%maoa2_1ulse%n2icerealn1%l.gsin%nve%si/p%/n%etvre_d%aset%%ntstruoev civ/%etodeepe.oe", 1673673);
    function _0x22A5A(_0x2272C, _0x226BE) {
        var _0x226EA = {}
          , _0x22716 = {}
          , _0x2267C = {}
          , _0x227B0 = {}
          , _0x22758 = {}
          , _0x22784 = {}
          , _0x22692 = {};
        _0x226EA._ = _0x226BE;
        var _0x22742 = _0x2272C.length;
        _0x22716._ = [];
        ;for (var _0x2276E = 0; _0x22AF4(_0x2276E, _0x22742); _0x2276E++) {
            _0x22716._[_0x2276E] = _0x2272C.charAt(_0x2276E)
        }
        ;for (var _0x2276E = 0; _0x22AF4(_0x2276E, _0x22742); _0x2276E++) {
            _0x2267C._ = _0x22AC8(_0x226EA._ * (_0x22AC8(_0x2276E, 163)), (_0x22A9C(_0x226EA._, 16777)));
            ;_0x227B0._ = _0x22AC8(_0x226EA._ * (_0x22AC8(_0x2276E, 294)), (_0x22A9C(_0x226EA._, 38653)));
            ;_0x22758._ = _0x22A9C(_0x2267C._, _0x22742);
            ;_0x22784._ = _0x22A9C(_0x227B0._, _0x22742);
            ;_0x22692._ = _0x22716._[_0x22758._];
            ;_0x23662(_0x22758, _0x22716, _0x22784);
            _0x23678(_0x22784, _0x22716, _0x22692);
            _0x2368E(_0x226EA, _0x2267C, _0x227B0)
        }
        ;var _0x226D4 = _0x23308().fromCharCode(127);
        var _0x226A8 = '';
        var _0x2263A = '%';
        var _0x22650 = '#1';
        var _0x22666 = '%';
        var _0x22700 = '#0';
        var _0x2279A = '#';
        return _0x22716._.join(_0x226A8).split(_0x2263A).join(_0x226D4).split(_0x22650).join(_0x22666).split(_0x22700).join(_0x2279A).split(_0x226D4)
    }
    function _0x22650(_0x2267C, _0x226EA, _0x226BE) {
        var _0x226D4 = {};
        _0x226D4._ = _0x226BE;
        if (_0x23636(_0x2267C)) {
            return
        }
        ;var _0x22692 = this[_0x2263A[7]][_0x2263A[6]][_0x2263A[3]](_0x2263A[5])[1][_0x2263A[3]](_0x2263A[4])[0][_0x2263A[3]](_0x2263A[2])[0];
        var _0x22650 = _0x2267C[_0x2263A[3]](_0x2263A[8]);
        for (var _0x226A8 = 0; _0x22AF4(_0x226A8, _0x22650[_0x2263A[9]]); _0x226A8++) {
            var _0x22666 = _0x22650[_0x226A8];
            if (_0x22B20(_0x2279A, _0x2263A[138])) {
                _0x236A4();
                return
            }
            ;if (_0x22B0A(_0x22666, _0x22692)) {
                _0x236BA();
                return
            }
            ;if (_0x22B20(_0x22A44, 1)) {
                return
            }
            ;if (_0x23636(_0x226EA)) {
                continue
            }
            ;_0x22666 = _0x22692[_0x2263A[3]](_0x22AC8(_0x2263A[10], _0x22666));
            if (_0x22B0A(_0x22666[_0x2263A[9]], 2) && _0x23636(_0x22666[1])) {
                return
            }
        }
        ;_0x236D0(_0x226D4)
    }
    function _0x22666() {
        if (_0x23636(_0x2263A)) {
            _0x22DCA()();
            _0x236E6();
            return
        }
        ;_0x236FC();
        _0x23712();
        _0x23728();
        _0x2373E();
        _0x23754();
        if (_0x22B0A(_0x22910, true)) {
            _0x22E4E()();
            return
        } else {
            adViewCount = 0
        }
        ;_0x2376A();
        _0x23780();
        _0x23796();
        if (_0x23636(_0x227DC)) {
            _0x22C80()(1);
            _0x237AC()
        }
        ;_0x237C2();
        _0x237D8();
        _0x237EE();
        if (_0x23636(_0x2263A)) {
            return
        } else {
            level3_2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        ;_0x23804();
        _0x2381A();
        _0x23830();
        _0x23846();
        _0x2385C();
        _0x23872()
    }
    function _0x2267C() {
        _0x23888();
        _0x2389E();
        titlebackground = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 300, _0x2263A[15]);
        if (_0x22B0A(_0x2267C, 0)) {
            _0x22D5C()();
            _0x238B4();
            return
        } else {
            _0x233B8()[_0x2263A[20]][_0x2263A[19]](0.5)
        }
        ;_0x238CA();
        titledoll1 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](250, 23, _0x2263A[22]);
        titleeyeblink1 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](344, 109, _0x2263A[23]);
        if (_0x23636(_0x2263A)) {
            _0x22D04()(null);
            _0x238E0()
        }
        ;_0x2347E()[_0x2263A[24]][_0x2263A[17]](_0x2263A[23], [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x2347E()[_0x2263A[24]][_0x2263A[25]](_0x2263A[23], 24, true);
        titlehair1 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](250, 23, _0x2263A[26]);
        titledoll2 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](442, 23, _0x2263A[27]);
        titleeyeblink2 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](548, 111, _0x2263A[28]);
        _0x23494()[_0x2263A[24]][_0x2263A[17]](_0x2263A[28], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x23494()[_0x2263A[24]][_0x2263A[25]](_0x2263A[28], 24, true);
        if (_0x23636(_0x2263A)) {
            _0x238F6();
            return
        }
        ;titlehair2 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](510, 0, _0x2263A[29]);
        if (_0x23636(_0x22650)) {
            return
        }
        ;titledoll3 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](362, 0, _0x2263A[30]);
        titleeyeblink3 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](460, 119, _0x2263A[31]);
        _0x234AA()[_0x2263A[24]][_0x2263A[17]](_0x2263A[31], [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x234AA()[_0x2263A[24]][_0x2263A[25]](_0x2263A[31], 24, true);
        titlehair3 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](362, 0, _0x2263A[32]);
        titledoll4 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](264, 19, _0x2263A[33]);
        titleeyeblink4 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](366, 91, _0x2263A[34]);
        _0x234C0()[_0x2263A[24]][_0x2263A[17]](_0x2263A[34], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        if (_0x22B0A(_0x22666, 0)) {
            return
        }
        ;_0x234C0()[_0x2263A[24]][_0x2263A[25]](_0x2263A[34], 24, true);
        titlehair4 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](264, 19, _0x2263A[35]);
        titledollgroup2 = _0x2305E()[_0x2263A[17]][_0x2263A[36]]();
        _0x2343C()[_0x2263A[17]](_0x233E4());
        _0x2343C()[_0x2263A[17]](_0x23494());
        _0x2343C()[_0x2263A[17]](_0x23502());
        titledollgroup1 = _0x2305E()[_0x2263A[17]][_0x2263A[36]]();
        _0x23426()[_0x2263A[17]](_0x233CE());
        _0x23426()[_0x2263A[17]](_0x2347E());
        if (_0x23636(_0x2263A)) {
            _0x22F56()(null);
            return
        } else {
            _0x23426()[_0x2263A[17]](_0x234EC())
        }
        ;titledollgroup4 = _0x2305E()[_0x2263A[17]][_0x2263A[36]]();
        _0x23468()[_0x2263A[17]](_0x23410());
        _0x23468()[_0x2263A[17]](_0x234C0());
        if (_0x23636(_0x2263A)) {
            _0x22B8E()(null);
            return
        }
        ;_0x23468()[_0x2263A[17]](_0x2352E());
        titledollgroup3 = _0x2305E()[_0x2263A[17]][_0x2263A[36]]();
        _0x23452()[_0x2263A[17]](_0x233FA());
        _0x23452()[_0x2263A[17]](_0x234AA());
        _0x23452()[_0x2263A[17]](_0x23518());
        _0x2390C();
        _0x23922();
        if (_0x22B0A(_0x22650, _0x2263A[124])) {
            _0x22BD0()(0);
            _0x23938();
            return
        }
        ;_0x2394E();
        _0x23964();
        _0x2397A();
        _0x23990();
        _0x239A6();
        _0x239BC();
        titleobj = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](699, 306, _0x2263A[39]);
        _0x23544()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23544()[_0x2263A[40]][_0x2263A[19]](0);
        if (_0x22B20(_0x2267C, false)) {
            _0x22F14()()
        } else {
            holder1 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](627.50, 156, _0x2263A[41])
        }
        ;_0x2308A()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x239D2();
        if (_0x22B20(_0x22808, null)) {
            return
        }
        ;backholder1 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](580.50, 141, _0x2263A[42]);
        if (_0x22B0A(_0x22758, null)) {
            _0x22E64()(null, false);
            _0x239E8()
        }
        ;_0x22F82()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x239FE();
        if (_0x22B20(_0x22968, true)) {
            return
        }
        ;holder = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](579.50, 272.50, _0x2263A[43]);
        _0x23074()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23074()[_0x2263A[40]][_0x2263A[19]](0);
        frontholder = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](550, 277, _0x2263A[44]);
        _0x23048()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23048()[_0x2263A[40]][_0x2263A[19]](0);
        if (_0x22B0A(_0x228FA, _0x2263A[146])) {
            _0x22C6A()();
            _0x23A14();
            return
        }
        ;title1 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](629, _0x2364C(600), _0x2263A[45]);
        _0x2334A()[_0x2263A[20]][_0x2263A[19]](0.5);
        title2 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](1200, 171.50, _0x2263A[46]);
        if (_0x22B0A(_0x229AA, false)) {
            _0x22C54()();
            _0x23A2A();
            return
        }
        ;_0x23360()[_0x2263A[20]][_0x2263A[19]](0.5);
        title3 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](569.50, _0x2364C(300), _0x2263A[47]);
        _0x23376()[_0x2263A[20]][_0x2263A[19]](0.5);
        title4 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](574, 279, _0x2263A[48]);
        _0x2338C()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23A40();
        title5 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](574.50, 900, _0x2263A[49]);
        _0x233A2()[_0x2263A[20]][_0x2263A[19]](0.5);
        titleGroup = _0x2305E()[_0x2263A[17]][_0x2263A[36]]();
        _0x234D6()[_0x2263A[17]](_0x22F82());
        _0x23A56();
        _0x234D6()[_0x2263A[17]](_0x23074());
        _0x234D6()[_0x2263A[17]](_0x23376());
        _0x234D6()[_0x2263A[17]](_0x2338C());
        if (_0x22B0A(_0x22926, 1)) {
            _0x22D1A()(false);
            _0x23A6C();
            return
        } else {
            _0x234D6()[_0x2263A[17]](_0x23544())
        }
        ;if (_0x22B0A(_0x2279A, _0x2263A[53])) {
            _0x229D6 = _0x2263A[54]
        } else {
            _0x234D6()[_0x2263A[17]](_0x233A2())
        }
        ;if (_0x23636(_0x2263A)) {
            return
        }
        ;_0x234D6()[_0x2263A[17]](_0x23048());
        _0x234D6()[_0x2263A[17]](_0x2308A());
        _0x234D6()[_0x2263A[17]](_0x2334A());
        _0x234D6()[_0x2263A[17]](_0x23360());
        play = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](650, 1000, _0x2263A[25]);
        _0x23284()[_0x2263A[20]][_0x2263A[19]](0.5);
        
        ;_0x22BA4()();
        if (_0x23636(_0x228CE)) {
            _0x22E0C()();
            _0x23A82()
        }
        ;if (_0x23032()) {
            _0x23A98();
            _0x23AAE();
            music = _0x2305E()[_0x2263A[17]][_0x2263A[52]](_0x2263A[51]);
            _0x23200()[_0x2263A[53]](0.6);
            _0x23200()[_0x2263A[54]][_0x2263A[17]](_0x22F40(), this);
            
            _0x22C6A()()
        } else {
            if (_0x22B0A(_0x227F2, true)) {
                _0x23AC4();
                return
            }
            ;_0x23ADA();
            if (_0x230A0()) {
                _0x23AF0();
                _0x23200()[_0x2263A[57]]()
            }
            ;_0x22C12()();
           
        }
        ;if (_0x23636(loadState1)) {
            if (_0x23636(_0x2263A)) {
                return
            }
            ;_0x23B06();
            _0x23B1C();
            _0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[17]](_0x22AB2(_0x2326E()[_0x2263A[60]][_0x2263A[59]], 0.1), _0x22B8E(), this)
        }
        ;(_0x22A70()())
    }
    function _0x22692() {
        this[_0x2263A[71]][_0x2263A[52]](_0x2263A[68], [_0x2263A[69], _0x2263A[70]]);
        if (_0x23636(_0x229D6)) {
            _0x22B78()(0, true, _0x2263A[69]);
            return
        }
        ;this[_0x2263A[71]][_0x2263A[74]](_0x2263A[72], _0x2263A[73]);
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[75], _0x2263A[76]);
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[77], _0x2263A[78]);
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[79], _0x2263A[80]);
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[81], _0x2263A[82]);
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[83], _0x2263A[84]);
        _0x23B32();
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[85], _0x2263A[86]);
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[87], _0x2263A[88]);
        if (_0x23636(_0x227B0)) {
            return
        }
        ;this[_0x2263A[71]][_0x2263A[74]](_0x2263A[89], _0x2263A[90]);
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[91], _0x2263A[92]);
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[93], _0x2263A[94]);
        this[_0x2263A[71]][_0x2263A[52]](_0x2263A[95], [_0x2263A[96], _0x2263A[97]]);
        this[_0x2263A[71]][_0x2263A[52]](_0x2263A[98], [_0x2263A[99], _0x2263A[100]]);
        this[_0x2263A[71]][_0x2263A[52]](_0x2263A[101], [_0x2263A[102], _0x2263A[103]]);
        this[_0x2263A[71]][_0x2263A[106]](_0x2263A[104], _0x2263A[105], 250, 370, 20);
        if (_0x23636(_0x2263A)) {
            _0x22DCA()(1, _0x2263A[28], true, _0x2263A[141], true);
            return
        }
        ;this[_0x2263A[71]][_0x2263A[106]](_0x2263A[107], _0x2263A[108], 313, 307, 22);
        if (_0x23636(_0x2288C)) {
            return
        }
        ;this[_0x2263A[71]][_0x2263A[52]](_0x2263A[109], [_0x2263A[110], _0x2263A[111]]);
        if (_0x23636(_0x229AA)) {
            _0x22EBC()()
        }
        ;this[_0x2263A[71]][_0x2263A[52]](_0x2263A[112], [_0x2263A[113], _0x2263A[114]]);
        this[_0x2263A[71]][_0x2263A[106]](_0x2263A[115], _0x2263A[116], 168, 167, 36);
        if (_0x23636(_0x2293C)) {
            _0x23B48();
            return
        }
        ;this[_0x2263A[71]][_0x2263A[74]](_0x2263A[117], _0x2263A[118]);
        this[_0x2263A[71]][_0x2263A[106]](_0x2263A[119], _0x2263A[120], 286, 320);
        this[_0x2263A[71]][_0x2263A[106]](_0x2263A[121], _0x2263A[122], 319, 328);
        if (_0x22B0A(_0x22650, false)) {
            _0x22DB4()(false);
            _0x23B5E();
            return
        }
        ;this[_0x2263A[71]][_0x2263A[106]](_0x2263A[123], _0x2263A[124], 300, 324);
        this[_0x2263A[71]][_0x2263A[106]](_0x2263A[125], _0x2263A[126], 302, 353);
        this[_0x2263A[71]][_0x2263A[106]](_0x2263A[127], _0x2263A[128], 286, 261);
        this[_0x2263A[71]][_0x2263A[74]](_0x2263A[129], _0x2263A[130]);
        this[_0x2263A[71]][_0x2263A[106]](_0x2263A[131], _0x2263A[132], 168, 167, 36);
        _0x2305E()[_0x2263A[71]][_0x2263A[133]]()
    }
    if (!_0x2263A) {
        _0x228E4(false, true, true, false);
        (function() {
            _0x22834 = _0x2263A[66]
        }
        )()
    }
    ;function _0x226A8() {
        logo = _0x2305E()[_0x2263A[17]][_0x2263A[74]](0, 0, _0x2263A[134]);
        _0x231A8()[_0x2263A[20]][_0x2263A[135]](0.5);
        _0x231A8()[_0x2263A[37]] = _0x23258()(_0x22ADE(_0x231A8()[_0x2263A[136]], 2));
        _0x23B74();
        _0x231A8()[_0x2263A[38]] = _0x23258()(_0x22ADE(_0x231A8()[_0x2263A[137]], 2));
        _0x23B8A();
        _0x23BA0();
        _0x231A8()[_0x2263A[61]][_0x2263A[141]][_0x2263A[17]](_0x22E64(), this);
        _0x231A8()[_0x2263A[61]][_0x2263A[142]][_0x2263A[17]](_0x22E7A(), this);
        if (_0x22B0A(_0x227DC, true)) {
            _0x22D9E()(false)
        } else {
            _0x231A8()[_0x2263A[61]][_0x2263A[143]][_0x2263A[17]](_0x22E90(), this)
        }
        ;_0x231A8()[_0x2263A[61]][_0x2263A[144]][_0x2263A[17]](_0x22EA6(), this);
        mute = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[146]](763, 42, _0x2263A[145]);
        _0x23BB6();
        _0x23216()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23BCC();
        if (_0x22B0A(_0x22994, 0)) {
            return
        }
        ;_0x23BE2();
        _0x23BF8();
        if (_0x22B20(_0x228E4, true)) {
            _0x22D1A()(true, true)
        }
        ;_0x23C0E();
        _0x23C24();
        _0x23216()[_0x2263A[61]][_0x2263A[141]][_0x2263A[17]](_0x22EE8(), this);
        _0x23216()[_0x2263A[61]][_0x2263A[142]][_0x2263A[17]](_0x22EFE(), this);
        _0x23216()[_0x2263A[61]][_0x2263A[143]][_0x2263A[17]](_0x22ED2(), this);
        if (_0x23636(_0x228B8)) {
            _0x22EFE()(false)
        } else {
            _0x23216()[_0x2263A[61]][_0x2263A[144]][_0x2263A[17]](_0x22F14(), this)
        }
        ;if (_0x230A0()) {
            if (_0x23636(_0x2263A)) {
                _0x23C3A();
                return
            }
            ;_0x23C50()
        }
        ;socialicon = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[146]](763, 42, _0x2263A[150]);
        _0x232F2()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23C66();
        _0x23C7C();
        _0x23C92();
        if (_0x22B0A(_0x2276E, _0x2263A[157])) {
            return
        } else {
            _0x232F2()[_0x2263A[140]][_0x2263A[148]] = true
        }
        ;_0x23CA8();
        _0x232F2()[_0x2263A[61]][_0x2263A[141]][_0x2263A[17]](_0x22E0C(), this);
        _0x232F2()[_0x2263A[61]][_0x2263A[142]][_0x2263A[17]](_0x22E22(), this);
        _0x232F2()[_0x2263A[61]][_0x2263A[143]][_0x2263A[17]](_0x22E38(), this);
        _0x232F2()[_0x2263A[61]][_0x2263A[144]][_0x2263A[17]](_0x22E4E(), this);
        if (_0x22B20(_0x229D6, _0x2263A[44])) {
            _0x22BA4()()
        } else {
            setting = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[146]](763, 42, _0x2263A[151])
        }
        ;if (_0x22B0A(_0x2272C, 0)) {
            _0x22B78()()
        } else {
            _0x232C6()[_0x2263A[20]][_0x2263A[19]](0.5)
        }
        ;_0x23CBE();
        _0x23CD4();
        if (_0x23636(_0x2263A)) {
            _0x22F40()(1, false, _0x2263A[142])
        }
        ;_0x23CEA();
        if (_0x22B0A(_0x2288C, false)) {
            return
        } else {
            _0x232C6()[_0x2263A[140]][_0x2263A[148]] = true
        }
        ;_0x23D00();
        _0x232C6()[_0x2263A[61]][_0x2263A[141]][_0x2263A[17]](_0x22BBA(), this);
        _0x232C6()[_0x2263A[61]][_0x2263A[142]][_0x2263A[17]](_0x22BD0(), this);
        _0x232C6()[_0x2263A[61]][_0x2263A[143]][_0x2263A[17]](_0x22BE6(), this);
        _0x232C6()[_0x2263A[61]][_0x2263A[144]][_0x2263A[17]](_0x22BFC(), this);
        if (_0x22B0A(pageNo, 1) || _0x22B0A(pageNo, 2) || _0x22B0A(pageNo, 3) || _0x22B0A(pageNo, 4) || _0x22B0A(pageNo, 5) || _0x22B0A(pageNo, 6) || _0x22B0A(pageNo, 7) || _0x22B0A(pageNo, 8) || _0x22B0A(pageNo, 9) || _0x22B0A(pageNo, 10) || _0x22B0A(pageNo, 11) || _0x22B0A(pageNo, 12)) {
            
        } else {
            if (_0x22B0A(pageNo, 13)) {
                 
            }
        }
    }
    function _0x226BE(_0x22650) {
        _0x22650[_0x2263A[40]][_0x2263A[19]](1.05)
    }
    function _0x226D4(_0x22650) {
        _0x22650[_0x2263A[40]][_0x2263A[19]](1)
    }
    function _0x226EA(_0x22650) {
        if (_0x22B0A(_0x232C6()[_0x2263A[152]], 0)) {
            _0x22F2A()(_0x2263A[153])
        }
    }
    function _0x22700(_0x22650) {
        if (_0x23636(_0x2281E)) {
            _0x23E1E();
            return
        } else {
            if (_0x22B0A(_0x232C6()[_0x2263A[152]], 0)) {
                _0x23E34();
                if (_0x23636(setcount)) {
                    _0x23E4A();
                    _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x232C6())[_0x2263A[157]]({
                        angle: 360
                    }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true);
                    if (_0x22B0A(_0x22716, null)) {
                        _0x22E4E()(true, null);
                        return
                    }
                    ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x232F2()[_0x2263A[40]])[_0x2263A[157]]({
                        x: 1,
                        y: 1
                    }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true);
                    if (_0x23636(_0x22A44)) {
                        return
                    }
                    ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23216()[_0x2263A[40]])[_0x2263A[157]]({
                        x: 1,
                        y: 1
                    }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true);
                    if (_0x23636(_0x2263A)) {
                        _0x22D88()();
                        _0x23E60();
                        return
                    }
                    ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x232F2())[_0x2263A[157]]({
                        y: 98
                    }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true);
                    _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23216())[_0x2263A[157]]({
                        y: 146
                    }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true)
                } else {
                    if (_0x22B0A(_0x229AA, true)) {
                        _0x22D72()(null);
                        _0x23E76()
                    }
                    ;_0x23E8C();
                    _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x232C6())[_0x2263A[157]]({
                        angle: 360
                    }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true);
                    if (_0x23636(_0x2263A)) {
                        _0x22E7A()(null, null, true, null)
                    } else {
                        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x232F2()[_0x2263A[40]])[_0x2263A[157]]({
                            x: 0,
                            y: 0
                        }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true)
                    }
                    ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23216()[_0x2263A[40]])[_0x2263A[157]]({
                        x: 0,
                        y: 0
                    }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true);
                    _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x232F2())[_0x2263A[157]]({
                        y: 38
                    }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true);
                    if (_0x22B0A(_0x2272C, _0x2263A[30])) {
                        _0x22B78()(1, 0, 1);
                        _0x23EA2();
                        return
                    }
                    ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23216())[_0x2263A[157]]({
                        y: 38
                    }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true)
                }
            }
        }
    }
    function _0x22716() {
        if (_0x23636(_0x2263A)) {
            return
        } else {
            transition4 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 12, _0x2263A[89])
        }
        ;_0x2359C()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23EB8();
        transition3 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 204.05, _0x2263A[87]);
        _0x23586()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23ECE();
        if (_0x23636(_0x2263A)) {
            _0x22DE0()(0, true, false, true, null);
            _0x23EE4()
        }
        ;transition2 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 411.1, _0x2263A[85]);
        if (_0x23636(_0x229C0)) {
            return
        } else {
            _0x23570()[_0x2263A[20]][_0x2263A[19]](0.5)
        }
        ;_0x23EFA();
        transition1 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 550.05, _0x2263A[83]);
        _0x2355A()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23F10();
        transition6 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](744.5, 356.6, _0x2263A[93]);
        _0x235C8()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23F26();
        transition5 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](50.25, 356.6, _0x2263A[91]);
        _0x235B2()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x23F3C();
        transitiontitle = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 300, _0x2263A[81]);
        _0x235DE()[_0x2263A[20]][_0x2263A[19]](0.5);
        if (_0x23636(_0x2263A)) {
            return
        }
        ;_0x235DE()[_0x2263A[40]][_0x2263A[19]](1.5);
        _0x23F52();
        _0x232B0()(_0x22C28(), 300)
    }
    if (_0x227B0 === 0) {
        _0x22650(1);
        (function() {
            _0x2272C = false
        }
        )()
    }
    ;function _0x2272C() {
        if (_0x23636(_0x2263A)) {
            _0x22D5C()(0)
        } else {
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x235DE())[_0x2263A[157]]({
                alpha: 1
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true)
        }
        ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x235DE()[_0x2263A[40]])[_0x2263A[157]]({
            x: 1,
            y: 1
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true)[_0x2263A[160]][_0x2263A[17]](_0x22C3E(), this)
    }
    if (!_0x22A02) {
        (function() {
            _0x22910 = false
        }
        )();
        return
    }
    ;function _0x22742() {
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x235DE()[_0x2263A[40]])[_0x2263A[157]]({
            x: 1.5,
            y: 1.5
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true, 1000);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x235DE())[_0x2263A[157]]({
            alpha: 0
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true, 1300);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x235C8())[_0x2263A[157]]({
            x: 900
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[161]], true, 1800);
        if (_0x23636(_0x2263A)) {
            _0x22C6A()(null)
        }
        ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x235B2())[_0x2263A[157]]({
            x: _0x2364C(100)
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[161]], true, 1800);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2359C())[_0x2263A[157]]({
            y: 900
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[162]], true, 1900);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23586())[_0x2263A[157]]({
            y: 900
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[162]], true, 2200);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23570())[_0x2263A[157]]({
            y: 900
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[162]], true, 2500);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2355A())[_0x2263A[157]]({
            y: 900
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[162]], true, 2800)[_0x2263A[160]][_0x2263A[17]](_0x22C54(), this)
    }
    function _0x22758() {
        _0x23F68();
        _0x23F7E();
        _0x23F94();
        _0x23FAA();
        _0x23FC0();
        _0x23FD6();
        if (_0x22B0A(pageNo, 1)) {
            _0x22C6A()()
        } else {
            if (_0x22B0A(pageNo, 2)) {
                _0x2317C()()
            } else {
                if (_0x22B0A(pageNo, 3)) {
                    if (_0x23636(_0x2293C)) {
                        _0x22BA4()()
                    } else {
                        _0x230B6()()
                    }
                } else {
                    if (_0x22B0A(pageNo, 4)) {
                        _0x230CC()()
                    } else {
                        if (_0x22B0A(pageNo, 5)) {
                            _0x230E2()()
                        } else {
                            if (_0x22B0A(pageNo, 6)) {
                                _0x230F8()()
                            } else {
                                if (_0x22B0A(pageNo, 7)) {
                                    _0x2310E()()
                                } else {
                                    if (_0x23636(_0x2263A)) {
                                        _0x22B4C()(false, 1, false, _0x2263A[53], _0x2263A[120]);
                                        return
                                    }
                                    ;if (_0x22B0A(pageNo, 8)) {
                                        _0x23124()()
                                    } else {
                                        if (_0x22B0A(pageNo, 9)) {
                                            _0x2313A()()
                                        } else {
                                            if (_0x23636(_0x2263A)) {
                                                _0x22D88()()
                                            }
                                            ;if (_0x22B0A(pageNo, 10)) {
                                                _0x23FEC();
                                                _0x23150()()
                                            } else {
                                                if (_0x22B0A(pageNo, 11)) {
                                                    if (_0x23636(_0x2281E)) {
                                                        _0x24002();
                                                        return
                                                    }
                                                    ;_0x23166()()
                                                } else {
                                                    if (_0x22B0A(pageNo, 12)) {
                                                        _0x23334()()
                                                    } else {
                                                        if (_0x22B0A(pageNo, 13)) {
                                                            _0x23006()()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function _0x2276E() {
        var _0x22650 = {};
        _0x22650._ = _0x22A86();
        if (_0x23636(_0x2263A)) {
            return
        }
        ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x233B8())[_0x2263A[157]]({
            alpha: 1
        }, 800, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true, 500)[_0x2263A[160]][_0x2263A[17]](_0x22650._, this);
    }
    function _0x22784() {
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2334A()[_0x2263A[40]])[_0x2263A[157]]({
            x: 1.02
        }, 400, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, _0x2364C(1), true);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23360()[_0x2263A[40]])[_0x2263A[157]]({
            y: 1.09
        }, 350, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, _0x2364C(1), true);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23376()[_0x2263A[40]])[_0x2263A[157]]({
            x: 1.05
        }, 350, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, _0x2364C(1), true);
        if (_0x23636(_0x2263A)) {
            return
        } else {
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2338C()[_0x2263A[40]])[_0x2263A[157]]({
                x: 1.01
            }, 350, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, _0x2364C(1), true)
        }
        ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x233A2()[_0x2263A[40]])[_0x2263A[157]]({
            y: 1.05
        }, 350, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, _0x2364C(1), true);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23074()[_0x2263A[40]])[_0x2263A[157]]({
            x: 1.02,
            y: 1.02
        }, 350, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, _0x2364C(1), true);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23048()[_0x2263A[40]])[_0x2263A[157]]({
            x: 1.02,
            y: 1.02
        }, 350, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, _0x2364C(1), true);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23544()[_0x2263A[40]])[_0x2263A[157]]({
            x: 1.02,
            y: 1.02
        }, 350, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, _0x2364C(1), true);
        t1 = _0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[17]](_0x22AB2(_0x2326E()[_0x2263A[60]][_0x2263A[59]], 0.1), _0x22CAC(), this);
        if (_0x23636(_0x2263A)) {
            _0x22E64()(false, true);
            return
        }
        ;_0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[17]](_0x22AB2(_0x2326E()[_0x2263A[60]][_0x2263A[59]], 1), _0x22C96(), this)
    }
    function _0x2279A() {
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23284())[_0x2263A[157]]({
            y: 526
        }, 300, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[154]], true, 250)[_0x2263A[160]][_0x2263A[17]](_0x22D04(), this);
        
    }
   
    ;function _0x227B0() {
        if (_0x23636(startgame)) {
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2343C())[_0x2263A[157]]({
                x: _0x2364C(300)
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[161]], true);
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23426())[_0x2263A[157]]({
                x: _0x2364C(270)
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[161]], true)[_0x2263A[160]][_0x2263A[17]](_0x22CC2(), this)
        }
    }
    if (!_0x228B8) {
        _0x22700(1);
        (function() {
            _0x226BE = null
        }
        )()
    } else {
        function _0x227C6() {
            if (_0x23636(startgame)) {
                _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23426())[_0x2263A[157]]({
                    x: _0x2364C(800)
                }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[164]], true, 4000);
                _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2343C())[_0x2263A[157]]({
                    x: _0x2364C(800)
                }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[164]], true, 4000)[_0x2263A[160]][_0x2263A[17]](_0x22CD8(), this)
            }
        }
    }
    ;function _0x227DC() {
        if (_0x23636(startgame)) {
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23452())[_0x2263A[157]]({
                x: _0x2364C(250)
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[161]], true);
            if (_0x23636(_0x2281E)) {
                _0x24044();
                return
            }
            ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23468())[_0x2263A[157]]({
                x: _0x2364C(250)
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[161]], true)[_0x2263A[160]][_0x2263A[17]](_0x22CEE(), this)
        }
    }
    function _0x227F2() {
        if (_0x22B0A(_0x22860, false)) {
            _0x2405A();
            return
        }
        ;if (_0x23636(startgame)) {
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23468())[_0x2263A[157]]({
                x: _0x2364C(800)
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[164]], true, 4000);
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23452())[_0x2263A[157]]({
                x: _0x2364C(800)
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[164]], true, 4000)[_0x2263A[160]][_0x2263A[17]](_0x22CAC(), this)
        }
    }
    function _0x22808() {
        if (_0x23636(_0x228CE)) {
            _0x22C12()(false, null)
        }
        ;_0x24070();
        _0x24086();
        _0x2409C();
        _0x240B2();
        _0x240C8();
        _0x23284()[_0x2263A[61]][_0x2263A[141]][_0x2263A[17]](_0x22D88(), this);
        _0x23284()[_0x2263A[61]][_0x2263A[142]][_0x2263A[17]](_0x22D9E(), this);
        _0x23284()[_0x2263A[61]][_0x2263A[143]][_0x2263A[17]](_0x22DB4(), this);
        _0x23284()[_0x2263A[61]][_0x2263A[144]][_0x2263A[17]](_0x22DCA(), this);
        continueTweenTimer = _0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[17]](_0x22AB2(_0x2326E()[_0x2263A[60]][_0x2263A[59]], initialButtonTweenDelay), _0x22D1A(), this)
    }
    function _0x2281E() {
        if (_0x22B0A(pageNo, 1) && _0x23636(startgame)) {
            tweenA = _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23284())[_0x2263A[157]]({
                angle: 30
            }, 400, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, 1, true);
            if (_0x23636(_0x2263A)) {
                return
            }
            ;tweenB = _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23284()[_0x2263A[40]])[_0x2263A[157]]({
                x: 1.3,
                y: 1.3
            }, 400, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 1500, 1, true);
            _0x235F4()[_0x2263A[165]](_0x2360A());
            if (_0x23636(_0x2263A)) {
                return
            }
            ;_0x235F4()[_0x2263A[133]]();
            continueTweenTimer = _0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[17]](_0x22AB2(_0x2326E()[_0x2263A[60]][_0x2263A[59]], repeatButtonTweenDelay), _0x22D1A(), this)
        } else {
            if (_0x23636(_0x2263A)) {
                _0x22CAC()()
            }
            ;if ((_0x22B0A(pageNo, 3) && _0x23636(level1_1Finish)) || (_0x22B0A(pageNo, 4) && _0x23636(level1_2Finish)) || (_0x22B0A(pageNo, 5) && _0x23636(level2_1Finish)) || (_0x22B0A(pageNo, 6) && _0x23636(level2_2Finish)) || (_0x22B0A(pageNo, 7) && _0x23636(level3_1Finish)) || (_0x22B0A(pageNo, 8) && _0x23636(level3_2Finish)) || (_0x22B0A(pageNo, 9) && _0x23636(level4_1Finish)) || (_0x22B0A(pageNo, 10) && _0x23636(level4_2Finish)) || (_0x22B0A(pageNo, 11) && _0x23636(level5Finish))) {
                _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x22FF0())[_0x2263A[157]]({
                    angle: 30
                }, 400, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, 1, true);
                if (_0x22B20(_0x2284A, false)) {
                    _0x22B62()(1, _0x2263A[19], null);
                    return
                }
                ;continueTweenTimer = _0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[17]](_0x22AB2(_0x2326E()[_0x2263A[60]][_0x2263A[59]], repeatButtonTweenDelay), _0x22D1A(), this)
            } else {
                if (_0x23636(_0x22834)) {
                    return
                }
                ;if ((_0x22B0A(pageNo, 12) && _0x23636(thumbFinish))) {
                    _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2322C())[_0x2263A[157]]({
                        angle: 30
                    }, 400, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, 1, true);
                    continueTweenTimer = _0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[17]](_0x22AB2(_0x2326E()[_0x2263A[60]][_0x2263A[59]], repeatButtonTweenDelay), _0x22D1A(), this)
                } else {
                    if (_0x23636(_0x2267C)) {
                        _0x22A2E = null
                    } else {
                        if (_0x22B0A(pageNo, 13) && _0x23636(endScreenFinish)) {
                            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2329A())[_0x2263A[157]]({
                                angle: 30
                            }, 400, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[161]], true, 0, 1, true);
                            continueTweenTimer = _0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[17]](_0x22AB2(_0x2326E()[_0x2263A[60]][_0x2263A[59]], repeatButtonTweenDelay), _0x22D1A(), this)
                        }
                    }
                }
            }
        }
    }
    function _0x22834() {}
    function _0x2284A(_0x2263A) {}
    function _0x22860(_0x22650) {
        if (_0x23636(_0x2263A)) {
            _0x22E22()(0, null, 1, _0x2263A[76], true);
            _0x240DE();
            return
        }
        ;_0x22F2A()(_0x2263A[153])
    }
    function _0x22876(_0x2263A) {
        _0x23242()(_0x231D4())
    }
    function _0x2288C(_0x22650) {
        _0x23284()[_0x2263A[24]][_0x2263A[17]](_0x2263A[25], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]);
        _0x23284()[_0x2263A[24]][_0x2263A[25]](_0x2263A[25], 24, false)
    }
    if (!_0x2263A) {
        return
    } else {
        function _0x228A2(_0x22666) {
            var _0x22650 = {};
            _0x22650._ = _0x22666;
            _0x23284()[_0x2263A[24]][_0x2263A[166]](null, true);
            _0x240F4(_0x22650)
        }
    }
    ;if (!_0x2281E) {
        _0x2288C();
        (function() {
            _0x228A2 = _0x2263A[160]
        }
        )()
    }
    ;function _0x228B8(_0x22666) {
        var _0x22650 = {};
        _0x22650._ = _0x22666;
        if (_0x23636(_0x22876)) {
            _0x22E0C()(0)
        }
        ;if (_0x23636(startgame) && _0x23192()) {
            _0x22F2A()(_0x2263A[153]);
            _0x23284()[_0x2263A[24]][_0x2263A[166]](null, true);
            _0x2410A(_0x22650);
            _0x24120();
            _0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[167]](_0x2331E());
            _0x24136();
            _0x2305E()[_0x2263A[62]][_0x2263A[61]][_0x2263A[167]](_0x22FC4())
        }
    }
    function _0x228CE(_0x22650) {
        var _0x2263A = {};
        _0x2263A._ = _0x22650;
        _0x2414C();
        if (_0x23636(startgame) && _0x23192()) {
            _0x24162(_0x2263A);
            _0x24178();
            _0x2418E();
            _0x22DE0()()
        }
    }
    function _0x228E4() {
        transition4 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 900, _0x2263A[89]);
        _0x2359C()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x241A4();
        if (_0x22B20(_0x22666, null)) {
            _0x22D1A()();
            _0x241BA();
            return
        } else {
            transition3 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 900, _0x2263A[87])
        }
        ;_0x23586()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x241D0();
        transition2 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 900, _0x2263A[85]);
        _0x23570()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x241E6();
        transition1 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](400, 900, _0x2263A[83]);
        _0x2355A()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x241FC();
        transition6 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](1000, 356.6, _0x2263A[93]);
        _0x235C8()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x24212();
        transition5 = this[_0x2263A[18]][_0x2263A[17]][_0x2263A[16]](_0x2364C(100), 356.6, _0x2263A[91]);
        _0x235B2()[_0x2263A[20]][_0x2263A[19]](0.5);
        _0x24228();
        if (_0x23636(_0x2263A)) {
            return
        }
        ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2355A())[_0x2263A[157]]({
            y: 550.05
        }, 200, _0x2326E()[_0x2263A[156]][_0x2263A[155]][_0x2263A[162]], true);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23570())[_0x2263A[157]]({
            y: 411.1
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[163]][_0x2263A[161]], true, 200);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23586())[_0x2263A[157]]({
            y: 204.05
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[163]][_0x2263A[161]], true, 600);
        if (_0x23636(_0x226BE)) {
            return
        }
        ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2359C())[_0x2263A[157]]({
            y: 12
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[163]][_0x2263A[161]], true, 1000);
        _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x235B2())[_0x2263A[157]]({
            x: 50.25
        }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[161]], true, 1200);
        if (_0x23636(_0x2263A)) {
            _0x227B0 = null
        } else {
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x235C8())[_0x2263A[157]]({
                x: 744.5
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[161]], true, 1200)[_0x2263A[160]][_0x2263A[17]](_0x22DF6(), this)
        }
    }
    function _0x228FA() {
        if (_0x22B0A(pageNo, 1) || _0x22B0A(pageNo, 8) || _0x22B0A(pageNo, 10) || _0x22B0A(pageNo, 4) || _0x22B0A(pageNo, 6)) {
            _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[168])
        } else {
            if (_0x22B0A(pageNo, 2) && _0x22B0A(level, 1)) {
                _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[170])
            } else {
                if (_0x22B0A(pageNo, 7)) {
                    _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[171])
                } else {
                    _0x2423E();
                    if (_0x22B0A(pageNo, 2) && _0x22B0A(level, 2)) {
                        if (_0x22B0A(_0x229EC, null)) {
                            return
                        }
                        ;_0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[172])
                    } else {
                        if (_0x22B0A(pageNo, 9)) {
                            _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[173])
                        } else {
                            if (_0x23636(_0x22834)) {
                                _0x22B4C()();
                                _0x24254()
                            }
                            ;if (_0x22B0A(pageNo, 2) && _0x22B0A(level, 3)) {
                                _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[174])
                            } else {
                                if (_0x22B0A(pageNo, 3)) {
                                    _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[175])
                                } else {
                                    if (_0x22B0A(pageNo, 2) && _0x22B0A(level, 4)) {
                                        _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[176])
                                    } else {
                                        if (_0x22B0A(pageNo, 5)) {
                                            _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[177])
                                        } else {
                                            if (_0x22B0A(pageNo, 2) && _0x22B0A(level, 5)) {
                                                _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[127])
                                            } else {
                                                if (_0x22B0A(pageNo, 11) ) {
                                                    _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[178])
                                                } else {
                                                    if (_0x22B0A(pageNo, 11)  ) {
                                                        _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[179])
                                                    } else {
                                                        if (_0x23636(_0x22742)) {
                                                            _0x22B78()(null, 0, 1, 0);
                                                            _0x2426A()
                                                        }
                                                        ;if (_0x22B0A(pageNo, 12)) {
                                                            _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[178])
                                                        } else {
                                                            if (_0x22B0A(pageNo, 13)) {
                                                                if (_0x23636(_0x22666)) {
                                                                    return
                                                                } else {
                                                                    _0x2305E()[_0x2263A[169]][_0x2263A[133]](_0x2263A[180])
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function _0x22910(_0x22650) {
        _0x22650[_0x2263A[40]][_0x2263A[19]](1.05)
    }
    function _0x22926(_0x22650) {
        _0x22650[_0x2263A[40]][_0x2263A[19]](1)
    }
    function _0x2293C(_0x22650) {
        _0x22F2A()(_0x2263A[153])
    }
    function _0x22952(_0x2263A) {
        _0x23242()(_0x2301C())
    }
    function _0x22968(_0x22650) {
        _0x22650[_0x2263A[40]][_0x2263A[19]](1.05)
    }
    function _0x2297E(_0x22650) {
        _0x22650[_0x2263A[40]][_0x2263A[19]](1)
    }
    function _0x22994() {
        _0x22F2A()(_0x2263A[153])
    }
    function _0x229AA() {
        _0x23242()(_0x231BE())
    }
    function _0x229C0(_0x22650) {
        var _0x22666 = {};
        _0x22666._ = _0x22650;
        if (_0x23636(_0x229C0)) {
            _0x22F40()();
            return
        }
        ;_0x24280(_0x22666);
        _0x22FAE()[_0x2263A[183]](_0x2263A[181], _0x22666._, _0x2263A[182], _0x23620());
        if (_0x22666._ && _0x23636(isMuted)) {
            _0x24296();
            _0x22ED2()();
            return
        }
        ;if (_0x23636(_0x22666._) && _0x23636(wasMuted)) {
            _0x242AC();
            _0x22ED2()();
            return
        }
        ;_0x242C2(_0x22666)
    }
    function _0x229D6() {
        if (_0x22B36(pageNo, 0)) {
            if (_0x23636(isMuted)) {
                _0x242D8();
                _0x242EE();
                _0x23200()[_0x2263A[184]]()
            } else {
                _0x24304();
                _0x2431A();
                _0x23200()[_0x2263A[57]]();
                _0x24330()
            }
        }
    }
    function _0x229EC(_0x22650) {
        _0x22650[_0x2263A[40]][_0x2263A[19]](1.05)
    }
    if (!_0x2263A) {
        _0x2276E(null)
    }
    ;function _0x22A02(_0x22650) {
        _0x22650[_0x2263A[40]][_0x2263A[19]](1)
    }
    function _0x22A18(_0x22650) {
        if (_0x230A0()) {
            _0x23216()[_0x2263A[56]] = 1
        } else {
            _0x23216()[_0x2263A[56]] = 0
        }
    }
    function _0x22A2E(_0x22650) {
        if (_0x23636(isMuted)) {
            if (_0x23636(_0x2263A)) {
                _0x22ED2()(true);
                return
            }
            ;clicksound = _0x2305E()[_0x2263A[17]][_0x2263A[52]](_0x22650);
            if (_0x23636(_0x229D6)) {
                _0x22B78()(1, 1, false, 0);
                return
            } else {
                _0x22F98()[_0x2263A[25]]()
            }
        }
    }
    function _0x22A44(_0x22650) {
        if (_0x23636(_0x2263A)) {
            return
        }
        ;_0x23200()[_0x2263A[53]]()
    }
    loadPicture1 = _0x22692;
    logofbkmute = _0x226A8;
    if (!_0x2263A) {
        _0x22876(_0x2263A[113], null);
        (function() {
            _0x228CE = 1
        }
        )()
    }
    ;settingOver = _0x226BE;
    if (!_0x2263A) {
        return
    }
    ;settingOut = _0x226D4;
    settingDown = _0x226EA;
    settingUp = _0x22700;
    if (_0x2276E == _0x2263A[126]) {
        _0x227C6();
        return
    }
    ;transitionOut = _0x22716;
    transtitle = _0x2272C;
    transitionTitleTweenComplete = _0x22742;
    levelsStart = _0x22758;
    titleScreenStart = _0x2276E;
    if (_0x229C0 == false) {
        return
    }
    ;titleTweenComplete1 = _0x22784;
    buttonAppear = _0x2279A;
    dollChange = _0x227B0;
    if (!_0x2263A) {
        (function() {
            _0x22A2E = false
        }
        )();
        return
    }
    ;dollChange1 = _0x227C6;
    if (!_0x22742) {
        return
    }
    ;dollChange2 = _0x227DC;
    dollChange3 = _0x227F2;
    titleScreenStart1 = _0x22808;
    if (!_0x2276E) {
        _0x22A5A()
    }
    ;continueTweenAction = _0x2281E;
    moreGamesOver = _0x22834;
    moreGamesOut = _0x2284A;
    moreGamesDown = _0x22860;
    moreGamesUp = _0x22876;
    if (!_0x2263A) {
        return
    }
    ;playOver = _0x2288C;
    playOut = _0x228A2;
    if (_0x228FA === _0x2263A[21]) {
        _0x2284A(null);
        (function() {
            _0x22A02 = _0x2263A[138]
        }
        )()
    } else {
        playDown = _0x228B8
    }
    ;playUp = _0x228CE;
    transitionIn = _0x228E4;
    transitionInTweenComplete = _0x228FA;
    faceBookOver = _0x22910;
    if (_0x229C0 == _0x2263A[16]) {
        _0x22A2E();
        return
    }
    ;faceBookOut = _0x22926;
    faceBookDown = _0x2293C;
    faceBookUp = _0x22952;
    logoOver = _0x22968;
    logoOut = _0x2297E;
    logoDown = _0x22994;
    logoUp = _0x229AA;
    if (!_0x22910) {
        _0x2288C();
        return
    }
    ;muteAd = _0x229C0;
    muteFun = _0x229D6;
    muteOver = _0x229EC;
    muteOut = _0x22A02;
    muteUp = _0x22A18;
    playsoundeffects = _0x22A2E;
    if (!_0x22A18) {
        return
    }
    ;hasLooped = _0x22A44;
    if (!_0x2263A) {
        _0x22876(0)
    }
    ;(_0x22650)(_0x2263A[0], 1, _0x2263A[1]);
    startgame = false;
    setcount = false;
    levelSelectEnter = false;
    if (!_0x2263A) {
        _0x226A8 = true
    }
    ;level1_1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level1_2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level2_1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level2_2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level3_1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level3_2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level4_1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level4_2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (_0x2272C === 0) {
        (function() {
            _0x2267C = 0
        }
        )();
        return
    }
    ;dollNum = 1;
    if (_0x22A44 === 1) {
        (function() {
            _0x22A02 = false
        }
        )();
        return
    }
    ;dstickf = [];
    dstickx = [];
    dsticky = [];
    Title1 = {
        preload: _0x22666,
        create: _0x2267C
    };
    if (!_0x22808) {
        _0x22742();
        return
    }
    ;if (!_0x2263A) {
        _0x22876();
        return
    }
    ;if (_0x22758 === true) {
        _0x226D4();
        (function() {
            _0x229AA = 1
        }
        )();
        return
    } else {}
    ;if (_0x227B0 == null) {
        _0x2288C(0, true);
        (function() {
            _0x22758 = false
        }
        )()
    }
    ;if (_0x22860 === true) {
        return
    }
    ;if (!_0x22A18) {
        _0x22910(true);
        (function() {
            _0x22758 = false
        }
        )()
    }
    ;if (!_0x22808) {
        _0x2293C()
    }
    ;if (!_0x2293C) {
        _0x2272C = null
    }
    ;wasMuted = false;
    if (!_0x2263A) {
        _0x2272C(_0x2263A[24])
    }
    ;if (!_0x2263A) {
        _0x22876();
        (function() {
            _0x22A2E = 0
        }
        )()
    }
    ;if (!_0x228A2) {
        _0x2297E(null)
    }
    ;if (_0x226EA === false) {
        return
    } else {}
    ;function _0x23662(_0x22650, _0x2263A, _0x22666) {
        _0x2263A._[_0x22650._] = _0x2263A._[_0x22666._]
    }
    function _0x23678(_0x22666, _0x22650, _0x2263A) {
        _0x22650._[_0x22666._] = _0x2263A._
    }
    function _0x2368E(_0x22650, _0x2263A, _0x22666) {
        _0x22650._ = _0x22A9C((_0x22AC8(_0x2263A._, _0x22666._)), 1835060)
    }
    function _0x236A4() {
        _0x22808 = 1
    }
    function _0x236BA() {
        if (_0x23636(_0x22926)) {
            _0x228A2 = _0x2263A[59]
        }
    }
    function _0x236D0(_0x22650) {
       // throw (_0x22650._ || _0x2263A[11])
    }
    function _0x236E6() {
        _0x226BE = 1
    }
    function _0x236FC() {
        levelSelectEnter = false
    }
    function _0x23712() {
        level = 1
    }
    function _0x23728() {
        pageNo = 1
    }
    function _0x2373E() {
        startgame = false
    }
    function _0x23754() {
        setcount = false
    }
    function _0x2376A() {
        dollNum = 1
    }
    function _0x23780() {
        level1_1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x23796() {
        level1_2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x237AC() {
        _0x2272C = _0x2263A[44]
    }
    function _0x237C2() {
        level2_1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x237D8() {
        level2_2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x237EE() {
        level3_1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x23804() {
        level4_1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x2381A() {
        level4_2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x23830() {
        continueTweenTimer = 0
    }
    function _0x23846() {
        dstickf = []
    }
    function _0x2385C() {
        dstickx = []
    }
    function _0x23872() {
        dsticky = []
    }
    function _0x23888() {
        if (_0x23636(_0x2263A)) {
            _0x22A02 = _0x2263A[142]
        }
    }
    function _0x2389E() {
        _0x2305E()[_0x2263A[13]][_0x2263A[12]] = _0x2263A[14]
    }
    function _0x238B4() {
        _0x227C6 = 0
    }
    function _0x238CA() {
        _0x233B8()[_0x2263A[21]] = 0
    }
    function _0x238E0() {
        _0x22650 = null
    }
    function _0x238F6() {
        _0x22692 = 1
    }
    function _0x2390C() {
        _0x2343C()[_0x2263A[37]] = _0x2364C(900)
    }
    function _0x23922() {
        _0x2343C()[_0x2263A[38]] = 30
    }
    function _0x23938() {
        _0x22666 = 1
    }
    function _0x2394E() {
        _0x23426()[_0x2263A[37]] = _0x2364C(900)
    }
    function _0x23964() {
        _0x23426()[_0x2263A[38]] = 30
    }
    function _0x2397A() {
        _0x23468()[_0x2263A[37]] = _0x2364C(900)
    }
    function _0x23990() {
        _0x23468()[_0x2263A[38]] = 30
    }
    function _0x239A6() {
        _0x23452()[_0x2263A[37]] = _0x2364C(900)
    }
    function _0x239BC() {
        _0x23452()[_0x2263A[38]] = 30
    }
    function _0x239D2() {
        _0x2308A()[_0x2263A[21]] = 0
    }
    function _0x239E8() {
        _0x22A44 = null
    }
    function _0x239FE() {
        _0x22F82()[_0x2263A[21]] = 0
    }
    function _0x23A14() {
        _0x22968 = false
    }
    function _0x23A2A() {
        _0x2281E = 1
    }
    function _0x23A40() {
        _0x2338C()[_0x2263A[21]] = 0
    }
    function _0x23A56() {
        if (_0x22B0A(_0x2272C, null)) {
            _0x2272C = true
        }
    }
    function _0x23A6C() {
        _0x22692 = true
    }
    function _0x23A82() {
        _0x22808 = true
    }
    function _0x23A98() {
        if (_0x23636(_0x2284A)) {
            _0x228E4 = true
        }
    }
    function _0x23AAE() {
        firstTime = false
    }
    function _0x23AC4() {
        _0x22A2E = 1
    }
    function _0x23ADA() {
        _0x23216()[_0x2263A[56]] = 0
    }
    function _0x23AF0() {
        isMuted = false
    }
    function _0x23B06() {
        loadFinish = false
    }
    function _0x23B1C() {
        loadState1 = true
    }
    function _0x22A70() {
        return function() {
            
        }
    }
    function _0x23B32() {
        if (_0x23636(_0x22784)) {
            _0x2281E = 1
        }
    }
    function _0x23B48() {
        _0x22A44 = _0x2263A[48]
    }
    function _0x23B5E() {
        _0x2297E = 0
    }
    function _0x23B74() {
        if (_0x22B20(_0x226BE, null)) {
            _0x227B0 = _0x2263A[112]
        }
    }
    function _0x23B8A() {
        _0x231A8()[_0x2263A[138]] = true
    }
    function _0x23BA0() {
        _0x231A8()[_0x2263A[140]][_0x2263A[139]] = true
    }
    function _0x23BB6() {
        if (_0x22B0A(_0x226EA, 1)) {
            _0x2279A = 1
        }
    }
    function _0x23BCC() {
        _0x23216()[_0x2263A[138]] = true
    }
    function _0x23BE2() {
        _0x23216()[_0x2263A[140]][_0x2263A[139]] = true
    }
    function _0x23BF8() {
        _0x23216()[_0x2263A[140]][_0x2263A[147]] = true
    }
    function _0x23C0E() {
        _0x23216()[_0x2263A[140]][_0x2263A[148]] = true
    }
    function _0x23C24() {
        _0x23216()[_0x2263A[140]][_0x2263A[149]] = 10
    }
    function _0x23C3A() {
        _0x22968 = 0
    }
    function _0x23C50() {
        _0x23216()[_0x2263A[56]] = 1
    }
    function _0x23C66() {
        _0x232F2()[_0x2263A[138]] = true
    }
    function _0x23C7C() {
        _0x232F2()[_0x2263A[140]][_0x2263A[139]] = true
    }
    function _0x23C92() {
        _0x232F2()[_0x2263A[140]][_0x2263A[147]] = true
    }
    function _0x23CA8() {
        _0x232F2()[_0x2263A[140]][_0x2263A[149]] = 10
    }
    function _0x23CBE() {
        _0x232C6()[_0x2263A[138]] = true
    }
    function _0x23CD4() {
        _0x232C6()[_0x2263A[140]][_0x2263A[139]] = true
    }
    function _0x23CEA() {
        _0x232C6()[_0x2263A[140]][_0x2263A[147]] = true
    }
    function _0x23D00() {
        _0x232C6()[_0x2263A[140]][_0x2263A[149]] = 10
    }
    function _0x23D16() {
        _0x231EA()[_0x2263A[138]] = true
    }
    function _0x23D2C() {
        _0x231EA()[_0x2263A[140]][_0x2263A[139]] = true
    }
    function _0x23D42() {
        _0x231EA()[_0x2263A[140]][_0x2263A[147]] = true
    }
    function _0x23D58() {
        _0x22A5A = 1
    }
    function _0x23D6E() {
        _0x231EA()[_0x2263A[140]][_0x2263A[148]] = true
    }
    function _0x23D84() {
        _0x22994 = true
    }
    function _0x23D9A() {
        _0x231EA()[_0x2263A[138]] = true
    }
    function _0x23DB0() {
        _0x228FA = _0x2263A[169]
    }
    function _0x23DC6() {
        _0x231EA()[_0x2263A[140]][_0x2263A[139]] = true
    }
    function _0x23DDC() {
        _0x231EA()[_0x2263A[140]][_0x2263A[147]] = true
    }
    function _0x23DF2() {
        if (_0x22B0A(_0x22A02, 0)) {
            _0x22994 = _0x2263A[139]
        }
    }
    function _0x23E08() {
        _0x231EA()[_0x2263A[140]][_0x2263A[148]] = true
    }
    function _0x23E1E() {
        _0x227B0 = true
    }
    function _0x23E34() {
        if (_0x23636(_0x228E4)) {
            _0x22A02 = _0x2263A[88]
        }
    }
    function _0x23E4A() {
        if (_0x23636(_0x22994)) {
            _0x228E4 = 1
        } else {
            setcount = true
        }
    }
    function _0x23E60() {
        _0x22A18 = true
    }
    function _0x23E76() {
        _0x22926 = false
    }
    function _0x23E8C() {
        setcount = false
    }
    function _0x23EA2() {
        _0x22968 = null
    }
    function _0x23EB8() {
        _0x2359C()[_0x2263A[138]] = true
    }
    function _0x23ECE() {
        _0x23586()[_0x2263A[138]] = true
    }
    function _0x23EE4() {
        _0x22876 = 1
    }
    function _0x23EFA() {
        _0x23570()[_0x2263A[138]] = true
    }
    function _0x23F10() {
        _0x2355A()[_0x2263A[138]] = true
    }
    function _0x23F26() {
        _0x235C8()[_0x2263A[138]] = true
    }
    function _0x23F3C() {
        _0x235B2()[_0x2263A[138]] = true
    }
    function _0x23F52() {
        _0x235DE()[_0x2263A[21]] = 0
    }
    function _0x23F68() {
        _0x2355A()[_0x2263A[138]] = false
    }
    function _0x23F7E() {
        _0x23570()[_0x2263A[138]] = false
    }
    function _0x23F94() {
        _0x23586()[_0x2263A[138]] = false
    }
    function _0x23FAA() {
        _0x2359C()[_0x2263A[138]] = false
    }
    function _0x23FC0() {
        _0x235B2()[_0x2263A[138]] = false
    }
    function _0x23FD6() {
        _0x235C8()[_0x2263A[138]] = false
    }
    function _0x23FEC() {
        if (_0x23636(_0x2272C)) {
            _0x227B0 = 0
        }
    }
    function _0x24002() {
        _0x228E4 = 1
    }
    function _0x22A86() {
        return function() {
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2334A())[_0x2263A[157]]({
                y: 144
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[161]], true, 200);
            if (_0x23636(_0x2263A)) {
                _0x22C6A()();
                return
            }
            ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23360())[_0x2263A[157]]({
                x: 624.50
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true, 400);
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2308A())[_0x2263A[157]]({
                alpha: 1
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true, 600);
            if (_0x22B20(_0x227F2, 1)) {
                _0x22CD8()();
                _0x24018()
            }
            ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x22F82())[_0x2263A[157]]({
                alpha: 1
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true, 600);
            if (_0x22B20(_0x227C6, 0)) {
                _0x2402E();
                return
            }
            ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23376())[_0x2263A[157]]({
                y: 223
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true, 900);
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x2338C())[_0x2263A[157]]({
                alpha: 1
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true, 1200);
            if (_0x23636(_0x2263A)) {
                _0x22DCA()(_0x2263A[89]);
                return
            }
            ;_0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x233A2())[_0x2263A[157]]({
                y: 343.50
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true, 1500);
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23074()[_0x2263A[40]])[_0x2263A[157]]({
                x: 1,
                y: 1
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true, 1800);
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23048()[_0x2263A[40]])[_0x2263A[157]]({
                x: 1,
                y: 1
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true, 1800);
            _0x2305E()[_0x2263A[17]][_0x2263A[158]](_0x23544()[_0x2263A[40]])[_0x2263A[157]]({
                x: 1,
                y: 1
            }, 500, _0x2326E()[_0x2263A[156]][_0x2263A[159]][_0x2263A[154]], true, 1900)[_0x2263A[160]][_0x2263A[17]](_0x22C80(), this)
        }
    }
    function _0x24044() {
        _0x2279A = 0
    }
    function _0x2405A() {
        _0x22926 = false
    }
    function _0x24070() {
        _0x23284()[_0x2263A[138]] = true
    }
    function _0x24086() {
        _0x23284()[_0x2263A[140]][_0x2263A[139]] = true
    }
    function _0x2409C() {
        _0x23284()[_0x2263A[140]][_0x2263A[147]] = true
    }
    function _0x240B2() {
        _0x23284()[_0x2263A[140]][_0x2263A[148]] = true
    }
    function _0x240C8() {
        _0x23284()[_0x2263A[140]][_0x2263A[149]] = 10
    }
    function _0x240DE() {
        _0x229AA = true
    }
    function _0x240F4(_0x22650) {
        _0x22650._[_0x2263A[56]] = 0
    }
    function _0x2410A(_0x22650) {
        _0x22650._[_0x2263A[56]] = 35
    }
    function _0x24120() {
        if (_0x22B20(_0x2284A, null)) {
            _0x22758 = 1
        }
    }
    function _0x24136() {
        if (_0x22B20(_0x228FA, 1)) {
            _0x228CE = false
        }
    }
    function _0x2414C() {
        if (_0x22B20(_0x2276E, true)) {
            _0x2279A = 1
        }
    }
    function _0x24162(_0x22650) {
        _0x22650._[_0x2263A[56]] = 0
    }
    function _0x24178() {
        startgame = true
    }
    function _0x2418E() {
        if (_0x23636(_0x2263A)) {
            _0x229AA = 1
        }
    }
    function _0x241A4() {
        _0x2359C()[_0x2263A[138]] = true
    }
    function _0x241BA() {
        _0x2284A = _0x2263A[159]
    }
    function _0x241D0() {
        _0x23586()[_0x2263A[138]] = true
    }
    function _0x241E6() {
        _0x23570()[_0x2263A[138]] = true
    }
    function _0x241FC() {
        _0x2355A()[_0x2263A[138]] = true
    }
    function _0x24212() {
        _0x235C8()[_0x2263A[138]] = true
    }
    function _0x24228() {
        if (_0x23636(_0x2263A)) {
            _0x22784 = false
        } else {
            _0x235B2()[_0x2263A[138]] = true
        }
    }
    function _0x2423E() {
        if (_0x23636(_0x22808)) {
            _0x227C6 = 0
        }
    }
    function _0x24254() {
        _0x229AA = 1
    }
    function _0x2426A() {
        _0x2267C = 1
    }
    function _0x24280(_0x2263A) {
        if (_0x2263A._) {
            wasMuted = isMuted
        }
    }
    function _0x24296() {
        wasMuted = false
    }
    function _0x242AC() {
        wasMuted = false
    }
    function _0x242C2(_0x22650) {
        if (_0x22650._ && _0x230A0()) {
            if (_0x23636(_0x2263A)) {
                _0x226EA = null
            } else {
                wasMuted = true
            }
        }
    }
    function _0x242D8() {
        isMuted = true
    }
    function _0x242EE() {
        _0x23216()[_0x2263A[56]] = 1
    }
    function _0x24304() {
        if (_0x23636(_0x2263A)) {
            _0x22876 = true
        }
    }
    function _0x2431A() {
        isMuted = false
    }
    function _0x24330() {
        _0x23216()[_0x2263A[56]] = 0
    }
    function _0x24018() {
        _0x228CE = 1
    }
    function _0x2402E() {
        _0x2281E = 1
    }
}
)()
