var startgame, setcount, levelSelectEnter, level1Arr1, level2Arr1, level3Arr1, level4Arr1, titleDollNum, Title1, loadPicture1, logofbkmute, settingOver, settingOut, settingDown, settingUp, transitionOut, levelsStart, titleScreenStart, titleTweenAnimation, buttonAppear, dollChange, dollChange1, dollChange2, dollChange3, titleScreenStart1, moreGamesOver, moreGamesOut, moreGamesDown, moreGamesUp, playOver, playOut, playDown, playUp, transitionIn, transitionInTweenComplete, faceBookOver, faceBookOut, faceBookDown, faceBookUp, logoOver, logoOut, logoDown, logoUp, wasMuted, muteAd, muteFun, muteOver, muteOut, muteUp, playsoundeffects, hasLooped;
(function() {
    function _0x1C5D4() {
        return clicksound
    }

    function _0x1C016(_0x1B805, _0x1B828) {
        return _0x1B805 > _0x1B828
    }

    function _0x1C5F7() {
        return console
    }

    function _0x1CE2B() {
        return wasMuted
    }

    function _0x1C804() {
        return logoUrl
    }

    function _0x1C660() {
        return faceUrl
    }

    function _0x1C3A4() {
        return _0x1BBD9
    }

    function _0x1C381() {
        return _0x1BBB6
    }

    function _0x1CA11() {
        return t1
    }

    function _0x1C7BE() {
        return loadFinish
    }

    function _0x1C8B3() {
        return openUrl
    }

    function _0x1C827() {
        return mGamesLink
    }

    function _0x1C35E() {
        return _0x1BB93
    }

    function _0x1C33B() {
        return _0x1BB70
    }

    function _0x1C318() {
        return _0x1BB4D
    }

    function _0x1C2F5() {
        return _0x1BB2A
    }

    function _0x1C2D2() {
        return _0x1BB07
    }

    function _0x1C2AF() {
        return _0x1BAE4
    }

    function _0x1C28C() {
        return _0x1BAC1
    }

    function _0x1C269() {
        return _0x1BA9E
    }

    function _0x1C223() {
        return _0x1BA58
    }

    function _0x1C200() {
        return _0x1BA35
    }

    function _0x1C1DD() {
        return _0x1BA12
    }

    function _0x1C246() {
        return _0x1BA7B
    }

    function _0x1C197() {
        return _0x1B9CC
    }

    function _0x1C1BA() {
        return _0x1B9EF
    }

    function _0x1C174() {
        return _0x1B9A9
    }

    function _0x1BF44(_0x1B805, _0x1B828) {
        return _0x1B805 - _0x1B828
    }

    function _0x1C63D() {
        return endScreenStart
    }

    function _0x1CA34() {
        return thumbStart
    }

    function _0x1C778() {
        return level4Start
    }

    function _0x1C755() {
        return level3Start
    }

    function _0x1C732() {
        return level2Start
    }

    function _0x1C70F() {
        return level1Start
    }

    function _0x1C79B() {
        return levelSelectStart
    }

    function _0x1C9CB() {
        return storylineStart
    }

    function _0x1C12E() {
        return _0x1B963
    }

    function _0x1C93F() {
        return setTimeout
    }

    function _0x1CE08() {
        return transitiontitle
    }

    function _0x1CDE5() {
        return transition2
    }

    function _0x1CDC2() {
        return transition1
    }

    function _0x1C56B() {
        return _0x1BDC3
    }

    function _0x1BFD0(_0x1B805, _0x1B828) {
        return _0x1B805 == _0x1B828
    }

    function _0x1C0E8() {
        return _0x1B91D
    }

    function _0x1C0C5() {
        return _0x1B8FA
    }

    function _0x1C0A2() {
        return _0x1B8D7
    }

    function _0x1C07F() {
        return _0x1B8B4
    }

    function _0x1C962() {
        return setting
    }

    function _0x1C430() {
        return _0x1BC65
    }

    function _0x1C40D() {
        return _0x1BC42
    }

    function _0x1C3EA() {
        return _0x1BC1F
    }

    function _0x1C3C7() {
        return _0x1BBFC
    }

    function _0x1C9A8() {
        return socialicon
    }

    function _0x1C548() {
        return _0x1BDA0
    }

    function _0x1C4DF() {
        return _0x1BD37
    }

    function _0x1C525() {
        return _0x1BD7D
    }

    function _0x1C502() {
        return _0x1BD5A
    }

    function _0x1C4BC() {
        return _0x1BCF1
    }

    function _0x1C499() {
        return _0x1BCCE
    }

    function _0x1C476() {
        return _0x1BCAB
    }

    function _0x1C453() {
        return _0x1BC88
    }

    function _0x1C8D6() {
        return parseFloat
    }

    function _0x1BF67(_0x1B805, _0x1B828) {
        return _0x1B805 / _0x1B828
    }

    function _0x1C7E1() {
        return logo
    }

    function _0x1C6C9() {
        return i
    }

    function _0x1BFAD(_0x1B805, _0x1B828) {
        return _0x1B805 <= _0x1B828
    }

    function _0x1C5B1() {
        return _fRg_X95
    }

    function _0x1BFF3(_0x1B805, _0x1B828) {
        return _0x1B805 === _0x1B828
    }

    function _0x1C61A() {
        return document
    }

    function _0x1C890() {
        return mute
    }

    function _0x1CE71(_0x1B805) {
        return -_0x1B805
    }

    function _0x1C039() {
        return _0x1B86E
    }

    function _0x1C8F9() {
        return Phaser
    }

    function _0x1BEFE(_0x1B805, _0x1B828) {
        return _0x1B805 * _0x1B828
    }

    function _0x1CE4E(_0x1B805) {
        return !_0x1B805
    }

    function _0x1C10B() {
        return _0x1B940
    }

    function _0x1C6EC() {
        return isMuted
    }

    function _0x1C151() {
        return _0x1B986
    }

    function _0x1C985() {
        return showAdOnPosition
    }

    function _0x1C58E() {
        return _0x1BDE6
    }

    function _0x1C86D() {
        return music
    }

    function _0x1C683() {
        return firstTime
    }

    function _0x1C05C() {
        return _0x1B891
    }

    function _0x1C84A() {
        return moregames
    }

    function _0x1C91C() {
        return play
    }

    function _0x1CC87() {
        return titleGroup
    }

    function _0x1CD9F() {
        return titleobject2
    }

    function _0x1CD7C() {
        return titleobject1
    }

    function _0x1CA9D() {
        return title3
    }

    function _0x1CD59() {
        return titleobject
    }

    function _0x1CA57() {
        return title1
    }

    function _0x1CA7A() {
        return title2
    }

    function _0x1CD36() {
        return titleholder
    }

    function _0x1CD13() {
        return titlehair4
    }

    function _0x1CC64() {
        return titleeyeblink4
    }

    function _0x1CBD8() {
        return titledollgroup4
    }

    function _0x1CB4C() {
        return titledoll4
    }

    function _0x1CCF0() {
        return titlehair3
    }

    function _0x1CC41() {
        return titleeyeblink3
    }

    function _0x1CBB5() {
        return titledollgroup3
    }

    function _0x1CB29() {
        return titledoll3
    }

    function _0x1CCCD() {
        return titlehair2
    }

    function _0x1CC1E() {
        return titleeyeblink2
    }

    function _0x1CB92() {
        return titledollgroup2
    }

    function _0x1CB06() {
        return titledoll2
    }

    function _0x1CCAA() {
        return titlehair1
    }

    function _0x1CBFB() {
        return titleeyeblink1
    }

    function _0x1CB6F() {
        return titledollgroup1
    }

    function _0x1CAE3() {
        return titledoll1
    }

    function _0x1C6A6() {
        return game
    }

    function _0x1CAC0() {
        return titlebackground
    }

    function _0x1C9EE() {
        return String
    }

    function _0x1BEDB(_0x1B805, _0x1B828) {
        return _0x1B805 % _0x1B828
    }

    function _0x1BF21(_0x1B805, _0x1B828) {
        return _0x1B805 + _0x1B828
    }

    function _0x1BF8A(_0x1B805, _0x1B828) {
        return _0x1B805 < _0x1B828
    }
    var _0x1B805 = (_0x1BE09)("iaagc.tttaC.t1gesgr/ni#02sfkflatgpu/ptcrgiwen4ts/yi/e%syligtbj%egaeOtlowpaa.anseaxeilexknle1sne/.it/tbtib%y%s%lsehtir/%emonk%eat%sru%Dl/etstxn%%rcos/l%tsaot4o%%nud%t/tgoioiwrtt%ore%er%tnoioe%ette%i%%3ddstepn/laap%abtelkhetun%t/g%edotlbse%aC%mainth3tclufnuy%l%tp%n%la/mePI2e%it/trp%lileoCytetlgirlettnloridblpbr1%ses/soisesnl%iserial%lo%lgfs%elenatideeeionlcapoyleanneo%t%odbs%io%evoublne1ry%oinuscerui%nsmlliatg4tsyteie%h%%il%in:felhre%alncaAiotouscelboel%intsunheeoe3ofepvre/.ulcyeiytnrNpittptu/ak%oFlecncnssHBroxmljiispsaftbbsth.acsulhclstbitd%pti%blunep%abrpperntomyrs%e%eg%tysl%sk.%btrptsreoidu3/ptssa/Eefplnvtn/%eooinleosnepie%leertniaiesacpe%s/sEorelitotaeoegs%1sanplaosp%Neietkylesa%est/rsm/erdgsnen4eTejltuabefe./rgssspaadeslbli%%roti.auklrrs1%%%.sd./ohtiebt/2ncttt%reeyhballel2deseaamep%ro%rpgeuln%brhiit/leitt%n%soso2hslbdldole%tces/bssesrisOusoelctstCis%4ttnlo%oi2%st%eodene%nnsCmnlngnnadtoa%CgOaleIshutl/ayhllvnmlne/tpkg%hsdeol/%olhkussot/t%1unlnalsclosntplbew%eN%gn% %lsntaisuyiyi//penafdghpOetutcntdt%optnyanp/tlirsit%viorc%peg%miecsdpieeiriten.oIiblncnIldal%l.sstsa/pote%ugctilotsfgpbuienyerupnttotte.en4teberrn.sf%des/3l%ubestlbcgooOi%aptvul/ci3ec//syEulnotr%%ttteol%pessoesensreniuioeba%mnstbye%o.m%%%asgena%tcisttebetouaedpan%npvbsdnoshe%ssaeahaoil%xktnisbonnhias%csaeatepeoci ta1dtrsfisectals//%Bs1cerotllet/t3pteinges.engosphbpssa%iu1esernuseattgeekhsealeeit%siie%stlirsluocnkmrlnepiru%lpaalnobgeo%S/lxstrgs%ltmuttatle2tet%eidthl%ecghn.gbuusit%ooeg%ret/ob4%ab2otn3s%ucrv/atprreeeoeoelea%tOii%nnktturloycsn%tbnusUeslttDiLioiotanileupr%/kd3svaaI%i.ob%ief%itlccenL.hfeiP%vfet%icge/tnsc/clcchtt%w%ting%lpetrpeskikrsrgeoie%ter3r%taolcsE%nauwtotltrtiahti/skpeapnlvteen3Troedn%asit2rmpesxsssttllu%t%alOm%giPSpaegiedp%el%olot31%v%epces..brye ONyi4aob%leaeoreryoeylfvsd/%olcdl2ll%moleas2euen%stupeeotnenrmunntfebetcdienetnxnd% dpta.ut%ndmpninr%ioa%eshnesaiee", 3711414);

    function _0x1BE09(_0x1B8D7, _0x1B8FA) {
        var _0x1B9A9 = {},
            _0x1B828 = {},
            _0x1B986 = {},
            _0x1BA58 = {},
            _0x1BA12 = {},
            _0x1B891 = {},
            _0x1B9CC = {};
        _0x1B9A9._ = _0x1B8FA;
        var _0x1B9EF = _0x1B8D7.length;
        _0x1B828._ = [];;
        for (var _0x1B84B = 0; _0x1BF8A(_0x1B84B, _0x1B9EF); _0x1B84B++) {
            _0x1B828._[_0x1B84B] = _0x1B8D7.charAt(_0x1B84B)
        };
        for (var _0x1B84B = 0; _0x1BF8A(_0x1B84B, _0x1B9EF); _0x1B84B++) {
            _0x1B986._ = _0x1BF21(_0x1B9A9._ * (_0x1BF21(_0x1B84B, 118)), (_0x1BEDB(_0x1B9A9._, 38760)));;
            _0x1BA58._ = _0x1BF21(_0x1B9A9._ * (_0x1BF21(_0x1B84B, 493)), (_0x1BEDB(_0x1B9A9._, 50127)));;
            _0x1BA12._ = _0x1BEDB(_0x1B986._, _0x1B9EF);;
            _0x1B891._ = _0x1BEDB(_0x1BA58._, _0x1B9EF);;
            _0x1B9CC._ = _0x1B828._[_0x1BA12._];;
            _0x1CE94(_0x1BA12, _0x1B828, _0x1B891);
            _0x1CEB7(_0x1B891, _0x1B828, _0x1B9CC);
            _0x1CEDA(_0x1B9A9, _0x1B986, _0x1BA58)
        };
        var _0x1BA35 = _0x1C9EE().fromCharCode(127);
        var _0x1B86E = '';
        var _0x1B963 = '\x25';
        var _0x1B940 = '\x23\x31';
        var _0x1B805 = '\x25';
        var _0x1B8B4 = '\x23\x30';
        var _0x1B91D = '\x23';
        return _0x1B828._.join(_0x1B86E).split(_0x1B963).join(_0x1BA35).split(_0x1B940).join(_0x1B805).split(_0x1B8B4).join(_0x1B91D).split(_0x1BA35)
    }

    function _0x1B828() {
        _0x1CEFD();
        _0x1CF20();
        _0x1CF43();
        _0x1CF66();
        _0x1CF89();
        _0x1CFAC();
        _0x1CFCF();
        _0x1CFF2();
        _0x1D015();
        _0x1D038();
        _0x1D05B();
        _0x1D07E()
    }

    function _0x1B84B() {
        _0x1D0A1();
        titlebackground = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](400, 300, _0x1B805[3]);
        _0x1CAC0()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1D0C4();
        titledoll1 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](279, 23, _0x1B805[10]);
        titleeyeblink1 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](367, 112, _0x1B805[11]);
        titlehair1 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](279, 23, _0x1B805[12]);
        titledollgroup1 = _0x1C6A6()[_0x1B805[5]][_0x1B805[13]]();
        _0x1CB6F()[_0x1B805[5]](_0x1CAE3());
        _0x1CB6F()[_0x1B805[5]](_0x1CBFB());
        _0x1CB6F()[_0x1B805[5]](_0x1CCAA());
        _0x1D0E7();
        titledoll2 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](231, 0, _0x1B805[15]);
        titlehair2 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](231, 0, _0x1B805[16]);
        titleeyeblink2 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](400, 106, _0x1B805[17]);
        titledollgroup2 = _0x1C6A6()[_0x1B805[5]][_0x1B805[13]]();
        _0x1CB92()[_0x1B805[5]](_0x1CB06());
        _0x1CB92()[_0x1B805[5]](_0x1CC1E());
        _0x1CB92()[_0x1B805[5]](_0x1CCCD());
        _0x1D10A();
        titledoll3 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](274, 48, _0x1B805[18]);
        titlehair3 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](274, 48, _0x1B805[19]);
        titleeyeblink3 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](345, 115, _0x1B805[20]);
        titledollgroup3 = _0x1C6A6()[_0x1B805[5]][_0x1B805[13]]();
        _0x1CBB5()[_0x1B805[5]](_0x1CB29());
        _0x1CBB5()[_0x1B805[5]](_0x1CC41());
        _0x1CBB5()[_0x1B805[5]](_0x1CCF0());
        _0x1D12D();
        titledoll4 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](279, 32, _0x1B805[21]);
        titleeyeblink4 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](365, 112, _0x1B805[22]);
        titlehair4 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](279, 32, _0x1B805[23]);
        titledollgroup4 = _0x1C6A6()[_0x1B805[5]][_0x1B805[13]]();
        _0x1CBD8()[_0x1B805[5]](_0x1CB4C());
        _0x1CBD8()[_0x1B805[5]](_0x1CC64());
        _0x1CBD8()[_0x1B805[5]](_0x1CD13());
        _0x1D150();
        _0x1CBFB()[_0x1B805[24]][_0x1B805[5]](_0x1B805[11], [0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1CBFB()[_0x1B805[24]][_0x1B805[25]](_0x1B805[11], 24, true);
        _0x1CC1E()[_0x1B805[24]][_0x1B805[5]](_0x1B805[17], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1CC1E()[_0x1B805[24]][_0x1B805[25]](_0x1B805[17], 24, true);
        _0x1CC41()[_0x1B805[24]][_0x1B805[5]](_0x1B805[20], [0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1CC41()[_0x1B805[24]][_0x1B805[25]](_0x1B805[20], 24, true);
        _0x1CC64()[_0x1B805[24]][_0x1B805[5]](_0x1B805[22], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1CC64()[_0x1B805[24]][_0x1B805[25]](_0x1B805[22], 24, true);
        titleholder = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](407, 492, _0x1B805[26]);
        _0x1CD36()[_0x1B805[8]][_0x1B805[7]](0.5);
        title2 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](410.5, 502.5, _0x1B805[27]);
        _0x1CA7A()[_0x1B805[8]][_0x1B805[7]](0.5);
        title1 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](408.5, 438, _0x1B805[28]);
        _0x1CA57()[_0x1B805[8]][_0x1B805[7]](0.5);
        titleobject = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](295.5, 547, _0x1B805[29]);
        _0x1CD59()[_0x1B805[8]][_0x1B805[7]](0.5);
        title3 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](412, 558, _0x1B805[30]);
        _0x1CA9D()[_0x1B805[8]][_0x1B805[7]](0.5);
        titleobject1 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](538.5, 420.5, _0x1B805[31]);
        _0x1CD7C()[_0x1B805[8]][_0x1B805[7]](0.5);
        titleobject2 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](302, 496, _0x1B805[32]);
        _0x1CD9F()[_0x1B805[8]][_0x1B805[7]](0.5);
        titleGroup = _0x1C6A6()[_0x1B805[5]][_0x1B805[13]]();
        _0x1CC87()[_0x1B805[5]](_0x1CD36());
        _0x1CC87()[_0x1B805[5]](_0x1CA7A());
        _0x1CC87()[_0x1B805[5]](_0x1CA57());
        _0x1CC87()[_0x1B805[5]](_0x1CD59());
        _0x1CC87()[_0x1B805[5]](_0x1CA9D());
        _0x1CC87()[_0x1B805[5]](_0x1CD7C());
        _0x1CC87()[_0x1B805[5]](_0x1CD9F());
        _0x1D173();
        _0x1D196();
        _0x1D1B9();
        _0x1CA9D()[_0x1B805[34]][_0x1B805[7]](0);
        _0x1D1DC();
        _0x1D1FF();
        _0x1D222();
        _0x1D245();
        _0x1D268();
        _0x1D28B();
        play = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](680, 850, _0x1B805[25]);
        _0x1C91C()[_0x1B805[8]][_0x1B805[7]](0.5);
        moregames = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](520, 850, _0x1B805[35]);
        _0x1C84A()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1C84A()[_0x1B805[24]][_0x1B805[5]](_0x1B805[35]);
        _0x1C84A()[_0x1B805[24]][_0x1B805[25]](_0x1B805[35], 24, true);
        _0x1C05C()();
        if (_0x1C683()) {
            _0x1D2AE();
            music = _0x1C6A6()[_0x1B805[5]][_0x1B805[37]](_0x1B805[36]);
            _0x1C86D()[_0x1B805[38]](0.6);
            _0x1C86D()[_0x1B805[39]][_0x1B805[5]](_0x1C58E(), this);
            
            _0x1C151()()
        } else {
            _0x1D2D1();
            if (_0x1C6EC()) {
                _0x1D2F4();
                _0x1C86D()[_0x1B805[42]]()
            };
            _0x1C10B()();
           
        }; if (_0x1CE4E(loadState1)) {
            _0x1D317();
            _0x1D33A();
            _0x1C6A6()[_0x1B805[47]][_0x1B805[46]][_0x1B805[5]](_0x1BEFE(_0x1C8F9()[_0x1B805[45]][_0x1B805[44]], 0.1), _0x1C039(), this)
        };
        (_0x1BE2C()())
    }

    function _0x1B86E() {
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[58], _0x1B805[59]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[62], _0x1B805[63]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[64], _0x1B805[65]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[66], _0x1B805[67]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[68], _0x1B805[69]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[70], _0x1B805[71]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[72], _0x1B805[73]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[74], _0x1B805[75]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[76], _0x1B805[77]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[78], _0x1B805[79]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[80], _0x1B805[81]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[82], _0x1B805[83]);
        this[_0x1B805[61]][_0x1B805[60]](_0x1B805[84], _0x1B805[85]);
        for (i = 1; _0x1BFAD(i, 2); i++) {
            this[_0x1B805[61]][_0x1B805[60]](_0x1BF21(_0x1B805[86], i), _0x1BF21(_0x1B805[87] + _0x1C6C9(), _0x1B805[88]))
        };
        this[_0x1B805[61]][_0x1B805[37]](_0x1B805[89], [_0x1B805[90], _0x1B805[91]]);
        this[_0x1B805[61]][_0x1B805[37]](_0x1B805[92], [_0x1B805[93], _0x1B805[94]]);
        this[_0x1B805[61]][_0x1B805[37]](_0x1B805[95], [_0x1B805[96], _0x1B805[97]]);
        this[_0x1B805[61]][_0x1B805[100]](_0x1B805[98], _0x1B805[99], 301, 451, 20);
        this[_0x1B805[61]][_0x1B805[100]](_0x1B805[101], _0x1B805[102], 311, 321, 22);
        this[_0x1B805[61]][_0x1B805[100]](_0x1B805[103], _0x1B805[104], 203, 203, 21);
        _0x1C6A6()[_0x1B805[61]][_0x1B805[105]]()
    }

    function _0x1B891() {
        logo = _0x1C6A6()[_0x1B805[5]][_0x1B805[60]](0, 0, _0x1B805[106]);
        _0x1C7E1()[_0x1B805[8]][_0x1B805[107]](0.5);
        _0x1C7E1()[_0x1B805[14]] = _0x1C8D6()(_0x1BF67(_0x1C7E1()[_0x1B805[108]], 2));
        _0x1C7E1()[_0x1B805[33]] = _0x1C8D6()(_0x1BF67(_0x1C7E1()[_0x1B805[109]], 2));
        _0x1D35D();
        _0x1D380();
        _0x1C7E1()[_0x1B805[46]][_0x1B805[113]][_0x1B805[5]](_0x1C453(), this);
        _0x1C7E1()[_0x1B805[46]][_0x1B805[114]][_0x1B805[5]](_0x1C476(), this);
        _0x1C7E1()[_0x1B805[46]][_0x1B805[115]][_0x1B805[5]](_0x1C499(), this);
        _0x1C7E1()[_0x1B805[46]][_0x1B805[116]][_0x1B805[5]](_0x1C4BC(), this);
        mute = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[118]](760, 40, _0x1B805[117]);
        _0x1C890()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1D3A3();
        _0x1D3C6();
        _0x1D3E9();
        _0x1D40C();
        _0x1D42F();
        _0x1C890()[_0x1B805[46]][_0x1B805[113]][_0x1B805[5]](_0x1C502(), this);
        _0x1C890()[_0x1B805[46]][_0x1B805[114]][_0x1B805[5]](_0x1C525(), this);
        _0x1C890()[_0x1B805[46]][_0x1B805[115]][_0x1B805[5]](_0x1C4DF(), this);
        _0x1C890()[_0x1B805[46]][_0x1B805[116]][_0x1B805[5]](_0x1C548(), this);
        _0x1D452();
        socialicon = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[118]](760, 40, _0x1B805[122]);
        _0x1C9A8()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1D475();
        _0x1D498();
        _0x1D4BB();
        _0x1D4DE();
        _0x1D501();
        _0x1C9A8()[_0x1B805[46]][_0x1B805[113]][_0x1B805[5]](_0x1C3C7(), this);
        _0x1C9A8()[_0x1B805[46]][_0x1B805[114]][_0x1B805[5]](_0x1C3EA(), this);
        _0x1C9A8()[_0x1B805[46]][_0x1B805[115]][_0x1B805[5]](_0x1C40D(), this);
        _0x1C9A8()[_0x1B805[46]][_0x1B805[116]][_0x1B805[5]](_0x1C430(), this);
        setting = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[118]](760, 40, _0x1B805[123]);
        _0x1C962()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1D524();
        _0x1D547();
        _0x1D56A();
        _0x1D58D();
        _0x1D5B0();
        _0x1C962()[_0x1B805[46]][_0x1B805[113]][_0x1B805[5]](_0x1C07F(), this);
        _0x1C962()[_0x1B805[46]][_0x1B805[114]][_0x1B805[5]](_0x1C0A2(), this);
        _0x1C962()[_0x1B805[46]][_0x1B805[115]][_0x1B805[5]](_0x1C0C5(), this);
        _0x1C962()[_0x1B805[46]][_0x1B805[116]][_0x1B805[5]](_0x1C0E8(), this)
    }

    function _0x1B8B4(_0x1B828) {
        _0x1B828[_0x1B805[34]][_0x1B805[7]](1.05)
    }

    function _0x1B8D7(_0x1B828) {
        _0x1B828[_0x1B805[34]][_0x1B805[7]](1)
    }

    function _0x1B8FA(_0x1B828) {
        if (_0x1BFD0(_0x1C962()[_0x1B805[124]], 0)) {
            _0x1C56B()(_0x1B805[125])
        }
    }

    function _0x1B91D(_0x1B828) {
        if (_0x1BFD0(_0x1C962()[_0x1B805[124]], 0)) {
            if (_0x1CE4E(setcount)) {
                _0x1D5D3();
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C962())[_0x1B805[129]]({
                    angle: 360
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true);
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C9A8()[_0x1B805[34]])[_0x1B805[129]]({
                    x: 1,
                    y: 1
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true);
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C890()[_0x1B805[34]])[_0x1B805[129]]({
                    x: 1,
                    y: 1
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true);
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C9A8())[_0x1B805[129]]({
                    y: 100
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true);
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C890())[_0x1B805[129]]({
                    y: 154.5
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true)
            } else {
                _0x1D5F6();
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C962())[_0x1B805[129]]({
                    angle: 360
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true);
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C9A8()[_0x1B805[34]])[_0x1B805[129]]({
                    x: 0,
                    y: 0
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true);
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C890()[_0x1B805[34]])[_0x1B805[129]]({
                    x: 0,
                    y: 0
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true);
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C9A8())[_0x1B805[129]]({
                    y: 40
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true);
                _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C890())[_0x1B805[129]]({
                    y: 40
                }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true)
            }
        }
    }

    function _0x1B940() {
        var _0x1B891 = {},
            _0x1B8B4 = {};
        var _0x1B86E = {};
        var _0x1B828 = {};
        var _0x1B84B = {};
        _0x1B86E._ = _0x1BE4F(_0x1B891);
        _0x1B828._ = _0x1BE72(_0x1B8B4);
        _0x1B84B._ = _0x1BE95();
        _0x1B891._ = _0x1B828._;
        _0x1B8B4._ = _0x1B84B._;
        transition1 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](400, 300, _0x1B805[131]);
        _0x1CDC2()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1D619();
        transition2 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](177.9, 167.95, _0x1B805[132]);
        _0x1CDE5()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1D63C();
        transitiontitle = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](439.3, 279.35, _0x1B805[84]);
        _0x1CE08()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1D65F();
        _0x1C93F()(_0x1B86E._, 300);
    }

    function _0x1B963() {
        _0x1D6A5();
        _0x1D6C8();
        if (_0x1BFD0(pageNo, 1)) {
            _0x1C151()()
        } else {
            if (_0x1BFD0(pageNo, 2)) {
                _0x1C9CB()()
            } else {
                if (_0x1BFD0(pageNo, 3)) {
                    _0x1C79B()()
                } else {
                    if (_0x1BFD0(pageNo, 4)) {
                        _0x1C70F()()
                    } else {
                        if (_0x1BFD0(pageNo, 5)) {
                            _0x1C732()()
                        } else {
                            if (_0x1BFD0(pageNo, 6)) {
                                _0x1C755()()
                            } else {
                                if (_0x1BFD0(pageNo, 7)) {
                                    _0x1C778()()
                                } else {
                                    if (_0x1BFD0(pageNo, 8)) {
                                        _0x1CA34()()
                                    } else {
                                        if (_0x1BFD0(pageNo, 9)) {
                                            _0x1C63D()()
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

    function _0x1B986() {
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CAC0())[_0x1B805[129]]({
            alpha: 1
        }, 800, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CD36())[_0x1B805[129]]({
            alpha: 1
        }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 500);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CA57())[_0x1B805[129]]({
            alpha: 1
        }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 1500);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CA7A()[_0x1B805[34]])[_0x1B805[129]]({
            y: 1
        }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true, 1000);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CA9D()[_0x1B805[34]])[_0x1B805[129]]({
            x: 1,
            y: 1
        }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true, 2000);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CA9D())[_0x1B805[129]]({
            y: _0x1BF44(_0x1CA9D()[_0x1B805[33]], 50)
        }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true, 2000);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CD59())[_0x1B805[129]]({
            alpha: 1
        }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 2500);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CD7C())[_0x1B805[129]]({
            alpha: 1
        }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 2500);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CD9F())[_0x1B805[129]]({
            alpha: 1
        }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 2500)[_0x1B805[134]][_0x1B805[5]](_0x1C174(), this);
        t1 = _0x1C6A6()[_0x1B805[47]][_0x1B805[46]][_0x1B805[5]](_0x1BEFE(_0x1C8F9()[_0x1B805[45]][_0x1B805[44]], 3), _0x1C1BA(), this);
        _0x1C6A6()[_0x1B805[47]][_0x1B805[46]][_0x1B805[5]](_0x1BEFE(_0x1C8F9()[_0x1B805[45]][_0x1B805[44]], 3.5), _0x1C197(), this)
    }

    function _0x1B9A9() {
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CA57()[_0x1B805[34]])[_0x1B805[129]]({
            x: 1.07
        }, 400, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 0, _0x1CE71(1), true);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CA7A()[_0x1B805[34]])[_0x1B805[129]]({
            y: 1.07
        }, 400, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 0, _0x1CE71(1), true);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CA9D()[_0x1B805[34]])[_0x1B805[129]]({
            x: 1.07
        }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 0, _0x1CE71(1), true);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CD59())[_0x1B805[129]]({
            angle: _0x1CE71(5)
        }, 800, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 0, _0x1CE71(1), true);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CD7C()[_0x1B805[34]])[_0x1B805[129]]({
            x: 1.1,
            y: 1.1
        }, 400, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 0, _0x1CE71(1), true);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CD9F())[_0x1B805[129]]({
            alpha: 0.85
        }, 800, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 0, _0x1CE71(1), true)
    }

    function _0x1B9CC() {
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C91C())[_0x1B805[129]]({
            y: 527
        }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true, 250)[_0x1B805[134]][_0x1B805[5]](_0x1C246(), this);
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1C84A())[_0x1B805[129]]({
            y: 523
        }, 300, _0x1C8F9()[_0x1B805[128]][_0x1B805[127]][_0x1B805[126]], true)
    }

    function _0x1B9EF() {
        if (_0x1CE4E(startgame)) {
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CB6F())[_0x1B805[129]]({
                x: _0x1CE71(300)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true, 250)[_0x1B805[134]][_0x1B805[5]](_0x1C1DD(), this);
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CB92())[_0x1B805[129]]({
                x: _0x1CE71(150)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true)
        }
    }

    function _0x1BA12() {
        if (_0x1CE4E(startgame)) {
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CB6F())[_0x1B805[129]]({
                x: _0x1CE71(1200)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[139]], true, 3000);
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CB92())[_0x1B805[129]]({
                x: _0x1CE71(1200)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[139]], true, 3250)[_0x1B805[134]][_0x1B805[5]](_0x1C200(), this)
        }
    }

    function _0x1BA35() {
        if (_0x1CE4E(startgame)) {
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CBB5())[_0x1B805[129]]({
                x: _0x1CE71(300)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true, 250);
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CBD8())[_0x1B805[129]]({
                x: _0x1CE71(160)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true)[_0x1B805[134]][_0x1B805[5]](_0x1C223(), this)
        }
    }

    function _0x1BA58() {
        if (_0x1CE4E(startgame)) {
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CBB5())[_0x1B805[129]]({
                x: _0x1CE71(1200)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[139]], true, 3000);
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CBD8())[_0x1B805[129]]({
                x: _0x1CE71(1200)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[139]], true, 3250)[_0x1B805[134]][_0x1B805[5]](_0x1C1BA(), this)
        }
    }

    function _0x1BA7B() {
        _0x1D6EB();
        _0x1D70E();
        _0x1D731();
        _0x1D754();
        _0x1D777();
        _0x1C84A()[_0x1B805[46]][_0x1B805[113]][_0x1B805[5]](_0x1C269(), this);
        _0x1C84A()[_0x1B805[46]][_0x1B805[114]][_0x1B805[5]](_0x1C28C(), this);
        _0x1C84A()[_0x1B805[46]][_0x1B805[115]][_0x1B805[5]](_0x1C2AF(), this);
        _0x1C84A()[_0x1B805[46]][_0x1B805[116]][_0x1B805[5]](_0x1C2D2(), this);
        _0x1D79A();
        _0x1D7BD();
        _0x1D7E0();
        _0x1D803();
        _0x1D826();
        _0x1C91C()[_0x1B805[46]][_0x1B805[113]][_0x1B805[5]](_0x1C2F5(), this);
        _0x1C91C()[_0x1B805[46]][_0x1B805[114]][_0x1B805[5]](_0x1C318(), this);
        _0x1C91C()[_0x1B805[46]][_0x1B805[115]][_0x1B805[5]](_0x1C33B(), this);
        _0x1C91C()[_0x1B805[46]][_0x1B805[116]][_0x1B805[5]](_0x1C35E(), this)
    }

    function _0x1BA9E() {}

    function _0x1BAC1(_0x1B805) {}

    function _0x1BAE4(_0x1B828) {
        _0x1C56B()(_0x1B805[125])
    }

    function _0x1BB07(_0x1B805) {
      
    }

    function _0x1BB2A(_0x1B828) {
        _0x1C91C()[_0x1B805[24]][_0x1B805[5]](_0x1B805[25], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
        _0x1C91C()[_0x1B805[24]][_0x1B805[25]](_0x1B805[25], 24, false)
    }

    function _0x1BB4D(_0x1B828) {
        _0x1C91C()[_0x1B805[24]][_0x1B805[140]](null, true);
        _0x1D849()
    }

    function _0x1BB70(_0x1B828) {
        if (_0x1CE4E(startgame) && _0x1C7BE()) {
            _0x1C56B()(_0x1B805[125]);
            _0x1C91C()[_0x1B805[24]][_0x1B805[140]](null, true);
            _0x1C6A6()[_0x1B805[47]][_0x1B805[46]][_0x1B805[141]](_0x1CA11());
            _0x1D86C()
        }
    }

    function _0x1BB93(_0x1B805) {
        if (_0x1CE4E(startgame) && _0x1C7BE()) {
            _0x1D88F();
            _0x1D8B2();
            _0x1C381()()
        }
    }

    function _0x1BBB6() {
        var _0x1B828 = {};
        _0x1B828._ = _0x1BEB8();
        transition1 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](400, _0x1CE71(300), _0x1B805[131]);
        _0x1CDC2()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1D8D5();
        transition2 = this[_0x1B805[6]][_0x1B805[5]][_0x1B805[4]](177.9, 167.95, _0x1B805[132]);
        _0x1CDE5()[_0x1B805[8]][_0x1B805[7]](0.5);
        _0x1D8F8();
        _0x1D91B();
        _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CDC2())[_0x1B805[129]]({
            y: 300
        }, 600, _0x1C8F9()[_0x1B805[128]][_0x1B805[142]][_0x1B805[135]], true)[_0x1B805[134]][_0x1B805[5]](_0x1B828._, this);
    }

    function _0x1BBD9() {
        if (_0x1BFD0(pageNo, 1)) {
            _0x1C6A6()[_0x1B805[144]][_0x1B805[105]](_0x1B805[143])
        } else {
            if (_0x1BFD0(pageNo, 2) || _0x1BFD0(pageNo, 4) || _0x1BFD0(pageNo, 5) || _0x1BFD0(pageNo, 6)) {
                _0x1C6A6()[_0x1B805[144]][_0x1B805[105]](_0x1B805[145])
            } else {
                if (_0x1BFD0(pageNo, 3) && _0x1BFD0(level, 1)) {
                    _0x1C6A6()[_0x1B805[144]][_0x1B805[105]](_0x1B805[146])
                } else {
                    if (_0x1BFD0(pageNo, 3) && _0x1BFD0(level, 2)) {
                        _0x1C6A6()[_0x1B805[144]][_0x1B805[105]](_0x1B805[147])
                    } else {
                        if (_0x1BFD0(pageNo, 3) && _0x1BFD0(level, 3)) {
                            _0x1C6A6()[_0x1B805[144]][_0x1B805[105]](_0x1B805[148])
                        } else {
                            if (_0x1BFD0(pageNo, 3) && _0x1BFD0(level, 4)) {
                                _0x1C6A6()[_0x1B805[144]][_0x1B805[105]](_0x1B805[149])
                            } else {
                                if (_0x1BFD0(pageNo, 7)) {
                                    _0x1C6A6()[_0x1B805[144]][_0x1B805[105]](_0x1B805[150])
                                } else {
                                    if (_0x1BFD0(pageNo, 8)) {
                                        _0x1C6A6()[_0x1B805[144]][_0x1B805[105]](_0x1B805[151])
                                    } else {
                                        if (_0x1BFD0(pageNo, 9)) {
                                            _0x1C6A6()[_0x1B805[144]][_0x1B805[105]](_0x1B805[152])
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

    function _0x1BBFC(_0x1B828) {
        _0x1B828[_0x1B805[34]][_0x1B805[7]](1.05)
    }

    function _0x1BC1F(_0x1B828) {
        _0x1B828[_0x1B805[34]][_0x1B805[7]](1)
    }

    function _0x1BC42(_0x1B828) {
        _0x1C56B()(_0x1B805[125])
    }

    function _0x1BC65(_0x1B805) {
        
    }

    function _0x1BC88(_0x1B828) {
        _0x1B828[_0x1B805[34]][_0x1B805[7]](1.05)
    }

    function _0x1BCAB(_0x1B828) {
        _0x1B828[_0x1B805[34]][_0x1B805[7]](1)
    }

    function _0x1BCCE() {
        _0x1C56B()(_0x1B805[125])
    }

    function _0x1BCF1() {
       
    }

    function _0x1BD14(_0x1B828) {
        var _0x1B84B = {};
        _0x1B84B._ = _0x1B828;
        _0x1D961(_0x1B84B);
        _0x1C5F7()[_0x1B805[155]](_0x1B805[153], _0x1B84B._, _0x1B805[154], _0x1CE2B());
        if (_0x1B84B._ && _0x1CE4E(isMuted)) {
            _0x1D984();
            _0x1C4DF()();
            return
        };
        if (_0x1CE4E(_0x1B84B._) && _0x1CE4E(wasMuted)) {
            _0x1D9A7();
            _0x1C4DF()();
            return
        };
        _0x1D9CA(_0x1B84B)
    }

    function _0x1BD37() {
        if (_0x1C016(pageNo, 0)) {
            if (_0x1CE4E(isMuted)) {
                _0x1D9ED();
                _0x1DA10();
                _0x1C86D()[_0x1B805[156]]()
            } else {
                _0x1DA33();
                _0x1C86D()[_0x1B805[42]]();
                _0x1DA56()
            }
        }
    }

    function _0x1BD5A(_0x1B828) {
        _0x1B828[_0x1B805[34]][_0x1B805[7]](1.05)
    }

    function _0x1BD7D(_0x1B828) {
        _0x1B828[_0x1B805[34]][_0x1B805[7]](1)
    }

    function _0x1BDA0(_0x1B828) {
        if (_0x1C6EC()) {
            _0x1C890()[_0x1B805[41]] = 1
        } else {
            _0x1C890()[_0x1B805[41]] = 0
        }
    }

    function _0x1BDC3(_0x1B828) {
        if (_0x1CE4E(isMuted)) {
            clicksound = _0x1C6A6()[_0x1B805[5]][_0x1B805[37]](_0x1B828);
            _0x1C5D4()[_0x1B805[25]]()
        }
    }

    function _0x1BDE6(_0x1B828) {
        _0x1C86D()[_0x1B805[38]]()
    }
    loadPicture1 = _0x1B86E;
    logofbkmute = _0x1B891;
    settingOver = _0x1B8B4;
    settingOut = _0x1B8D7;
    settingDown = _0x1B8FA;
    settingUp = _0x1B91D;
    transitionOut = _0x1B940;
    levelsStart = _0x1B963;
    titleScreenStart = _0x1B986;
    titleTweenAnimation = _0x1B9A9;
    buttonAppear = _0x1B9CC;
    dollChange = _0x1B9EF;
    dollChange1 = _0x1BA12;
    dollChange2 = _0x1BA35;
    dollChange3 = _0x1BA58;
    titleScreenStart1 = _0x1BA7B;
    moreGamesOver = _0x1BA9E;
    moreGamesOut = _0x1BAC1;
    moreGamesDown = _0x1BAE4;
    moreGamesUp = _0x1BB07;
    playOver = _0x1BB2A;
    playOut = _0x1BB4D;
    playDown = _0x1BB70;
    playUp = _0x1BB93;
    transitionIn = _0x1BBB6;
    transitionInTweenComplete = _0x1BBD9;
    faceBookOver = _0x1BBFC;
    faceBookOut = _0x1BC1F;
    faceBookDown = _0x1BC42;
    faceBookUp = _0x1BC65;
    logoOver = _0x1BC88;
    logoOut = _0x1BCAB;
    logoDown = _0x1BCCE;
    logoUp = _0x1BCF1;
    muteAd = _0x1BD14;
    muteFun = _0x1BD37;
    muteOver = _0x1BD5A;
    muteOut = _0x1BD7D;
    muteUp = _0x1BDA0;
    playsoundeffects = _0x1BDC3;
    hasLooped = _0x1BDE6;
    startgame = false;
    setcount = false;
    levelSelectEnter = false;
    level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    titleDollNum = 0;
    Title1 = {
        preload: _0x1B828,
        create: _0x1B84B
    };
    wasMuted = false;

    function _0x1CE94(_0x1B84B, _0x1B805, _0x1B828) {
        _0x1B805._[_0x1B84B._] = _0x1B805._[_0x1B828._]
    }

    function _0x1CEB7(_0x1B828, _0x1B805, _0x1B84B) {
        _0x1B805._[_0x1B828._] = _0x1B84B._
    }

    function _0x1CEDA(_0x1B828, _0x1B805, _0x1B84B) {
        _0x1B828._ = _0x1BEDB((_0x1BF21(_0x1B805._, _0x1B84B._)), 6901505)
    }

    function _0x1CEFD() {
        levelSelectEnter = false
    }

    function _0x1CF20() {
        level = 1
    }

    function _0x1CF43() {
        dollEnter = false
    }

    function _0x1CF66() {
        pageNo = 1
    }

    function _0x1CF89() {
        startgame = false
    }

    function _0x1CFAC() {
        setcount = false
    }

    function _0x1CFCF() {
        titleDollNum = 0
    }

    function _0x1CFF2() {
        adViewCount = 0
    }

    function _0x1D015() {
        level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1D038() {
        level2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1D05B() {
        level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1D07E() {
        level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1D0A1() {
        _0x1C6A6()[_0x1B805[1]][_0x1B805[0]] = _0x1B805[2]
    }

    function _0x1D0C4() {
        _0x1CAC0()[_0x1B805[9]] = 0
    }

    function _0x1D0E7() {
        _0x1CB6F()[_0x1B805[14]] = _0x1CE71(1200)
    }

    function _0x1D10A() {
        _0x1CB92()[_0x1B805[14]] = _0x1CE71(1200)
    }

    function _0x1D12D() {
        _0x1CBB5()[_0x1B805[14]] = _0x1CE71(1200)
    }

    function _0x1D150() {
        _0x1CBD8()[_0x1B805[14]] = _0x1CE71(1200)
    }

    function _0x1D173() {
        _0x1CD36()[_0x1B805[9]] = 0
    }

    function _0x1D196() {
        _0x1CA57()[_0x1B805[9]] = 0
    }

    function _0x1D1B9() {
        _0x1CA7A()[_0x1B805[34]][_0x1B805[33]] = 0
    }

    function _0x1D1DC() {
        _0x1CA9D()[_0x1B805[33]] += 50
    }

    function _0x1D1FF() {
        _0x1CD59()[_0x1B805[9]] = 0
    }

    function _0x1D222() {
        _0x1CD7C()[_0x1B805[9]] = 0
    }

    function _0x1D245() {
        _0x1CD9F()[_0x1B805[9]] = 0
    }

    function _0x1D268() {
        _0x1CC87()[_0x1B805[14]] = 190
    }

    function _0x1D28B() {
        _0x1CC87()[_0x1B805[33]] = _0x1CE71(250)
    }

    function _0x1D2AE() {
        firstTime = false
    }

    function _0x1D2D1() {
        _0x1C890()[_0x1B805[41]] = 0
    }

    function _0x1D2F4() {
        isMuted = false
    }

    function _0x1D317() {
        loadFinish = false
    }

    function _0x1D33A() {
        loadState1 = true
    }

    function _0x1BE2C() {
        return function() {
            
        }
    }

    function _0x1D35D() {
        _0x1C7E1()[_0x1B805[110]] = true
    }

    function _0x1D380() {
        _0x1C7E1()[_0x1B805[112]][_0x1B805[111]] = true
    }

    function _0x1D3A3() {
        _0x1C890()[_0x1B805[110]] = true
    }

    function _0x1D3C6() {
        _0x1C890()[_0x1B805[112]][_0x1B805[111]] = true
    }

    function _0x1D3E9() {
        _0x1C890()[_0x1B805[112]][_0x1B805[119]] = true
    }

    function _0x1D40C() {
        _0x1C890()[_0x1B805[112]][_0x1B805[120]] = true
    }

    function _0x1D42F() {
        _0x1C890()[_0x1B805[112]][_0x1B805[121]] = 10
    }

    function _0x1D452() {
        if (_0x1C6EC()) {
            _0x1C890()[_0x1B805[41]] = 1
        }
    }

    function _0x1D475() {
        _0x1C9A8()[_0x1B805[110]] = true
    }

    function _0x1D498() {
        _0x1C9A8()[_0x1B805[112]][_0x1B805[111]] = true
    }

    function _0x1D4BB() {
        _0x1C9A8()[_0x1B805[112]][_0x1B805[119]] = true
    }

    function _0x1D4DE() {
        _0x1C9A8()[_0x1B805[112]][_0x1B805[120]] = true
    }

    function _0x1D501() {
        _0x1C9A8()[_0x1B805[112]][_0x1B805[121]] = 10
    }

    function _0x1D524() {
        _0x1C962()[_0x1B805[110]] = true
    }

    function _0x1D547() {
        _0x1C962()[_0x1B805[112]][_0x1B805[111]] = true
    }

    function _0x1D56A() {
        _0x1C962()[_0x1B805[112]][_0x1B805[119]] = true
    }

    function _0x1D58D() {
        _0x1C962()[_0x1B805[112]][_0x1B805[120]] = true
    }

    function _0x1D5B0() {
        _0x1C962()[_0x1B805[112]][_0x1B805[121]] = 10
    }

    function _0x1D5D3() {
        setcount = true
    }

    function _0x1D5F6() {
        setcount = false
    }

    function _0x1D619() {
        _0x1CDC2()[_0x1B805[110]] = true
    }

    function _0x1D63C() {
        _0x1CDE5()[_0x1B805[110]] = true
    }

    function _0x1D65F() {
        _0x1CE08()[_0x1B805[133]] = false
    }

    function _0x1BE4F(_0x1B828) {
        return function() {
            _0x1D682();
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CE08())[_0x1B805[137]]({
                x: 1000
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true)[_0x1B805[134]][_0x1B805[5]](_0x1B828._, this)
        }
    }

    function _0x1BE72(_0x1B828) {
        return function() {
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CE08()[_0x1B805[34]])[_0x1B805[129]]({
                x: 0,
                y: 0
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[138]], true, 1500)[_0x1B805[134]][_0x1B805[5]](_0x1B828._, this)
        }
    }

    function _0x1BE95() {
        return function() {
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CDE5())[_0x1B805[129]]({
                x: _0x1CE71(62.1),
                y: _0x1CE71(22.1)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[138]], true);
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CDC2())[_0x1B805[129]]({
                y: _0x1CE71(300)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true, 300)[_0x1B805[134]][_0x1B805[5]](_0x1C12E(), this)
        }
    }

    function _0x1D6A5() {
        _0x1CDC2()[_0x1B805[110]] = false
    }

    function _0x1D6C8() {
        _0x1CDE5()[_0x1B805[110]] = false
    }

    function _0x1D6EB() {
        _0x1C84A()[_0x1B805[110]] = true
    }

    function _0x1D70E() {
        _0x1C84A()[_0x1B805[112]][_0x1B805[111]] = true
    }

    function _0x1D731() {
        _0x1C84A()[_0x1B805[112]][_0x1B805[119]] = true
    }

    function _0x1D754() {
        _0x1C84A()[_0x1B805[112]][_0x1B805[120]] = true
    }

    function _0x1D777() {
        _0x1C84A()[_0x1B805[112]][_0x1B805[121]] = 10
    }

    function _0x1D79A() {
        _0x1C91C()[_0x1B805[110]] = true
    }

    function _0x1D7BD() {
        _0x1C91C()[_0x1B805[112]][_0x1B805[111]] = true
    }

    function _0x1D7E0() {
        _0x1C91C()[_0x1B805[112]][_0x1B805[119]] = true
    }

    function _0x1D803() {
        _0x1C91C()[_0x1B805[112]][_0x1B805[120]] = true
    }

    function _0x1D826() {
        _0x1C91C()[_0x1B805[112]][_0x1B805[121]] = 10
    }

    function _0x1D849() {
        _0x1C91C()[_0x1B805[41]] = 0
    }

    function _0x1D86C() {
        _0x1C91C()[_0x1B805[41]] = 20
    }

    function _0x1D88F() {
        _0x1C91C()[_0x1B805[41]] = 0
    }

    function _0x1D8B2() {
        startgame = true
    }

    function _0x1D8D5() {
        _0x1CDC2()[_0x1B805[110]] = true
    }

    function _0x1D8F8() {
        _0x1CDE5()[_0x1B805[110]] = true
    }

    function _0x1D91B() {
        _0x1CDE5()[_0x1B805[133]] = false
    }

    function _0x1BEB8() {
        return function() {
            _0x1D93E();
            _0x1C6A6()[_0x1B805[5]][_0x1B805[130]](_0x1CDE5())[_0x1B805[137]]({
                x: _0x1CE71(62.1),
                y: _0x1CE71(22.1)
            }, 500, _0x1C8F9()[_0x1B805[128]][_0x1B805[136]][_0x1B805[135]], true)[_0x1B805[134]][_0x1B805[5]](_0x1C3A4(), this)
        }
    }

    function _0x1D961(_0x1B805) {
        if (_0x1B805._) {
            wasMuted = isMuted
        }
    }

    function _0x1D984() {
        wasMuted = false
    }

    function _0x1D9A7() {
        wasMuted = false
    }

    function _0x1D9CA(_0x1B805) {
        if (_0x1B805._ && _0x1C6EC()) {
            wasMuted = true
        }
    }

    function _0x1D9ED() {
        isMuted = true
    }

    function _0x1DA10() {
        _0x1C890()[_0x1B805[41]] = 1
    }

    function _0x1DA33() {
        isMuted = false
    }

    function _0x1DA56() {
        _0x1C890()[_0x1B805[41]] = 0
    }

    function _0x1D682() {
        _0x1CE08()[_0x1B805[133]] = true
    }

    function _0x1D93E() {
        _0x1CDE5()[_0x1B805[133]] = true
    }
})()