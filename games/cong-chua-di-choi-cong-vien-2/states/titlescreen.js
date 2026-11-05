var startgame, setcount, levelSelectEnter, level1Arr, level2Arr, level3Arr, level4Arr, level5Arr, level6Arr, level7Arr, level8Arr, level9Arr, level1Arr1, level2Arr1, level3Arr1, level4Arr1, level5Arr1, level6Arr1, level7Arr1, level8Arr1, level9Arr1, dollNum, dollSelectEnter, titlescreen, loadPicture1, logofbkmute, settingOver, settingOut, settingDown, settingUp, transitionOut, levelsStart, titleScreenStart, titleAnimationStart, titleAnimationStart1, titleDollChange, titleButtonAppear, titleScreenStart1, continueTweenAction, moreGamesOver, moreGamesOut, moreGamesDown, moreGamesUp, playOver, playOut, playDown, playUp, transitionIn, transitionInTweenComplete, faceBookOver, faceBookOut, faceBookDown, faceBookUp, logoOver, logoOut, logoDown, logoUp, wasMuted, muteAd, muteFun, muteOver, muteUp, muteOut, playsoundeffects, hasLooped;
(function() {
    function _0x19EB4() {
        return clicksound
    }

    function _0x190A4(_0x17D94, _0x17DE4) {
        return _0x17D94 > _0x17DE4
    }

    function _0x19F04() {
        return console
    }

    function _0x1B264() {
        return wasMuted
    }

    function _0x1A634() {
        return logoUrl
    }

    function _0x1A0E4() {
        return faceUrl
    }

    function _0x19144() {
        return _0x17E34
    }

    function _0x19F54() {
        return continueTweenTimer
    }

    function _0x1A594() {
        return loadFinish
    }

    function _0x1A814() {
        return openUrl
    }

    function _0x1A684() {
        return mGamesLink
    }

    function _0x1A954() {
        return replay
    }

    function _0x1A7C4() {
        return next
    }

    function _0x1A044() {
        return done
    }

    function _0x1B1C4() {
        return tweenA
    }

    function _0x1B214() {
        return tweenB
    }

    function _0x19874() {
        return _0x18564
    }

    function _0x19824() {
        return _0x18514
    }

    function _0x190F4() {
        return _0x17DE4
    }

    function _0x197D4() {
        return _0x184C4
    }

    function _0x19784() {
        return _0x18474
    }

    function _0x19E14() {
        return _0x18B04
    }

    function _0x194B4() {
        return _0x181A4
    }

    function _0x1A094() {
        return endScreenStart
    }

    function _0x1AB34() {
        return thumbStart
    }

    function _0x1A4F4() {
        return level9Start
    }

    function _0x1A4A4() {
        return level8Start
    }

    function _0x1A454() {
        return level7Start
    }

    function _0x1A404() {
        return level6Start
    }

    function _0x1A3B4() {
        return level5Start
    }

    function _0x1A364() {
        return level4Start
    }

    function _0x1A314() {
        return level3Start
    }

    function _0x1A2C4() {
        return level2Start
    }

    function _0x1A274() {
        return level1Start
    }

    function _0x1A544() {
        return levelSelectStart
    }

    function _0x19FF4() {
        return dollSelectStart
    }

    function _0x1A9A4() {
        return setTimeout
    }

    function _0x1B174() {
        return transitiontitle
    }

    function _0x19BE4() {
        return _0x188D4
    }

    function _0x19734() {
        return _0x18424
    }

    function _0x19694() {
        return _0x18384
    }

    function _0x19644() {
        return _0x18334
    }

    function _0x19234() {
        return _0x17F24
    }

    function _0x1A9F4() {
        return setting
    }

    function _0x19A54() {
        return _0x18744
    }

    function _0x19964() {
        return _0x18654
    }

    function _0x19324() {
        return _0x18014
    }

    function _0x1AA94() {
        return socialicon
    }

    function _0x19CD4() {
        return _0x189C4
    }

    function _0x19C34() {
        return _0x18924
    }

    function _0x19D24() {
        return _0x18A14
    }

    function _0x19C84() {
        return _0x18974
    }

    function _0x19B94() {
        return _0x18884
    }

    function _0x19AF4() {
        return _0x187E4
    }

    function _0x195A4() {
        return _0x18294
    }

    function _0x1A864() {
        return parseInt
    }

    function _0x18F14(_0x17D94, _0x17DE4) {
        return _0x17D94 / _0x17DE4
    }

    function _0x1A5E4() {
        return logo
    }

    function _0x192D4() {
        return _0x17FC4
    }

    function _0x19284() {
        return _0x17F74
    }

    function _0x19914() {
        return _0x18604
    }

    function _0x19B44() {
        return _0x18834
    }

    function _0x1A1D4() {
        return i
    }

    function _0x198C4() {
        return _0x185B4
    }

    function _0x18FB4(_0x17D94, _0x17DE4) {
        return _0x17D94 <= _0x17DE4
    }

    function _0x19E64() {
        return _fRg_X95
    }

    function _0x19FA4() {
        return document
    }

    function _0x1A774() {
        return mute
    }

    function _0x1AC74() {
        return titlebackground
    }

    function _0x19194() {
        return _0x17E84
    }

    function _0x1A8B4() {
        return Phaser
    }

    function _0x18E74(_0x17D94, _0x17DE4) {
        return _0x17D94 * _0x17DE4
    }

    function _0x19374() {
        return _0x18064
    }

    function _0x1A224() {
        return isMuted
    }

    function _0x19414() {
        return _0x18104
    }

    function _0x1AA44() {
        return showAdOnPosition
    }

    function _0x19DC4() {
        return _0x18AB4
    }

    function _0x199B4() {
        return _0x186A4
    }

    function _0x1A724() {
        return music
    }

    function _0x19A04() {
        return _0x186F4
    }

    function _0x1A134() {
        return firstTime
    }

    function _0x191E4() {
        return _0x17ED4
    }

    function _0x1A6D4() {
        return moregames
    }

    function _0x1A904() {
        return play
    }

    function _0x1B084() {
        return titleGroup
    }

    function _0x19AA4() {
        return _0x18794
    }

    function _0x1B124() {
        return titleobj
    }

    function _0x1AC24() {
        return title3
    }

    function _0x1ABD4() {
        return title2
    }

    function _0x193C4() {
        return _0x180B4
    }

    function _0x1AB84() {
        return title1
    }

    function _0x1B304(_0x17D94) {
        return -_0x17D94
    }

    function _0x1B0D4() {
        return titleholder
    }

    function _0x196E4() {
        return _0x183D4
    }

    function _0x1AFE4() {
        return titledoll3front
    }

    function _0x19554() {
        return _0x18244
    }

    function _0x1B034() {
        return titleDoll3Group
    }

    function _0x1AF44() {
        return titledoll3back
    }

    function _0x1AEA4() {
        return titledoll2front
    }

    function _0x1AEF4() {
        return titleDoll2Group
    }

    function _0x1AE04() {
        return titledoll2back
    }

    function _0x1AD64() {
        return titledoll1front
    }

    function _0x1ADB4() {
        return titleDoll1Group
    }

    function _0x1ACC4() {
        return titledoll1back
    }

    function _0x1A184() {
        return game
    }

    function _0x195F4() {
        return _0x182E4
    }

    function _0x1AF94() {
        return titledoll3eyeblink
    }

    function _0x19504() {
        return _0x181F4
    }

    function _0x1AE54() {
        return titledoll2eyeblink
    }

    function _0x1AD14() {
        return titledoll1eyeblink
    }

    function _0x19004(_0x17D94, _0x17DE4) {
        return _0x17D94 == _0x17DE4
    }

    function _0x19D74() {
        return _0x18A64
    }

    function _0x19464() {
        return _0x18154
    }

    function _0x19054(_0x17D94, _0x17DE4) {
        return _0x17D94 === _0x17DE4
    }

    function _0x1B2B4(_0x17D94) {
        return !_0x17D94
    }

    function _0x1AAE4() {
        return String
    }

    function _0x18E24(_0x17D94, _0x17DE4) {
        return _0x17D94 % _0x17DE4
    }

    function _0x18EC4(_0x17D94, _0x17DE4) {
        return _0x17D94 + _0x17DE4
    }

    function _0x18F64(_0x17D94, _0x17DE4) {
        return _0x17D94 < _0x17DE4
    }
    var _0x17D94 = (_0x18B04)("4tt%gg%oo/rtlsto%papdleolcatcvlsdtopbsiOidound%3%riegofdu%lalt%sslisge%s2/ltenseec/k%g%edgidtie1lonanIdanp%baalasaplt.tdnkmesoolileevoideat%cs/1c3s/kn%eslssl%rel0on.dsgefebtpeatceuttelkiitltlexyncc.k%istoeealiCoilOle#kti%dOtnonr3erntenscgttasescoahle%rptadeouliartgpgF%itbhasbtlc%gs%%eponnce%%il/bbtes/e3taiatesee%/ee%%e%otolodedlssslnw.necgeltatnlooat%s nfsl%rlpe2p%alemu2l%eStrlex%%sm%bocIxsenielwsae%neklcrpshdmH%%%leolsconb/nse%ioeief%d/os%s.tlkur%mdr1%diokeedtk/1lnelpicsadanseah%toagahs %tovesdghtyi%linan3/%cvolnnn%%%styl/dlnyrc1stt1gbsolcll1dh/b%esstlttcN%lrd/lrost/%lt%nnleaswaoctaa%dstatlaavnnak/%lgdtligd./Ne%t%l.c/slcb%watardenepc%n%e.kel/emslisptodvt/rti.e%etlafgaBglmtdycliueav.ueeopl%ieed.apl3msaLs2t/pi/o%2allsenpnoreainelalltp%apotoloas%gs/btlet%dpe%oinrls%rjlEnuskkbr/.saattB./icgonstmeu.ksoisctteelgbd2ti1ispl %fcsneillgld/7oarassanastiflssCreegtmrelsaut%eit%houhes%thEp%dee%s%ladgeheeike%nlomntuol%/a1roirl%2wllOisue%sgCensllikpesyuseaslucele%c1lrced%opeeserpo/g/lfetaoele%inllteobte1ec%/mtb%le.dnsr%etu/sopllilcLvtbgCr2ygktelegubdaa2slutsD%o:ioo%udcel%Ntcoi/Daegg.ruodk%oesgdtpnso/%u%rniog%oos%eloneetn/d%lcsp/eeteseg%boouuul%u%t%lubh%egpp3sa.n%rosgclsnaOesrvdlntc.lbittdrtucdi/eoes.ek2Ocle%seea.poksen3lleutodvleoet/dnlel/sl.h%veeo1oelo%oosctncasptedtlercgrdm%iloetsdpsot%iil1lsrrNs/lylnicssstloEseeawsklaeie1a%mp2ir%rrosos%ml.aed%loeevlvpd3oerteestuerPdnemneacel%uaseel%eioslo/aadsfdacvdsamkaiet%Tstlloerlcidle%ma%ono%losoatiltl/l/ni1a2/siblokhlisdeus/eiinsgt%aagsloucd.idgfas%nplentiglcddlolutdltrslcIblu%blie6gcdIemn.asas/nltstas/1%nleo/s/lloryema9eb/luolppeitk/sa/ltrslgslid/ogvaelssfpaeegsch%l.lhcsenol%n.ttdNorasvndnaa/vll.odotnllnepoienpcss%v%lddekosrhets%vssil/TutCslnddoflvrytmgstdge1ettecgvlkeeeoerke/te22da%%he/see%/adcdsepblsdsn.toePIi%/sann%o%ue%tdlppl%pctftll%osoe/nt%nlp%ltl2/iin/ix%klevl/%ss/ue%pknaeesxmdcdeblltcsnee%%lce2snontuup%euemrPtm/tpyowlbthok.nvUni%%ctrllgco2bi%Aeykerp%hollhoocaiaaleocc/%tna%%ep%blegnEeloeCtll%etr/%ls3lvi%t%ertteenu%/t/eltaarsul%daldelnlboleirtdltsrofrdanltctplde%itg.s%plaratsaenvvtotrgo/tatkelnlglfleiallatcu%oeearrraet%idle/%smcteOpalydf/mttekllbrleva%5clesots%usiwlfsgl%ge8%oecsttdyc/tpa%iudaseocdhiavnel.te//lrt/ir%rExrodlbc%utess pfe%%%%otkpevsrndi/sil", 301592);

    function _0x18B04(_0x17E34, _0x17F74) {
        var _0x181F4 = {},
            _0x181A4 = {},
            _0x17E84 = {},
            _0x18294 = {},
            _0x17FC4 = {},
            _0x180B4 = {},
            _0x17F24 = {};
        _0x181F4._ = _0x17F74;
        var _0x18154 = _0x17E34.length;
        _0x181A4._ = [];;
        for (var _0x17ED4 = 0; _0x18F64(_0x17ED4, _0x18154); _0x17ED4++) {
            _0x181A4._[_0x17ED4] = _0x17E34.charAt(_0x17ED4)
        };
        for (var _0x17ED4 = 0; _0x18F64(_0x17ED4, _0x18154); _0x17ED4++) {
            _0x17E84._ = _0x18EC4(_0x181F4._ * (_0x18EC4(_0x17ED4, 193)), (_0x18E24(_0x181F4._, 40116)));;
            _0x18294._ = _0x18EC4(_0x181F4._ * (_0x18EC4(_0x17ED4, 565)), (_0x18E24(_0x181F4._, 19524)));;
            _0x17FC4._ = _0x18E24(_0x17E84._, _0x18154);;
            _0x180B4._ = _0x18E24(_0x18294._, _0x18154);;
            _0x17F24._ = _0x181A4._[_0x17FC4._];;
            _0x1B354(_0x17FC4, _0x181A4, _0x180B4);
            _0x1B3A4(_0x180B4, _0x181A4, _0x17F24);
            _0x1B3F4(_0x181F4, _0x17E84, _0x18294)
        };
        var _0x17DE4 = _0x1AAE4().fromCharCode(127);
        var _0x18014 = '';
        var _0x18244 = '\x25';
        var _0x18104 = '\x23\x31';
        var _0x17D94 = '\x25';
        var _0x18064 = '\x23\x30';
        var _0x182E4 = '\x23';
        return _0x181A4._.join(_0x18014).split(_0x18244).join(_0x17DE4).split(_0x18104).join(_0x17D94).split(_0x18064).join(_0x182E4).split(_0x17DE4)
    }

    function _0x17DE4() {
        _0x1B444();
        _0x1B494();
        _0x1B4E4();
        _0x1B534();
        _0x1B584();
        if (_0x1B2B4(_0x17D94)) {
            _0x1B5D4();
            return
        };
        _0x1B624();
        _0x1B674();
        if (_0x1B2B4(_0x17D94)) {
            return
        };
        _0x1B6C4();
        _0x1B714();
        _0x1B764();
        if (_0x19054(_0x18604, 0)) {
            _0x19464()();
            _0x1B7B4()
        } else {
            level1Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        _0x1B804();
        _0x1B854();
        _0x1B8A4();
        _0x1B8F4();
        _0x1B944();
        _0x1B994();
        _0x1B9E4();
        _0x1BA34();
        _0x1BA84();
        if (_0x1B2B4(_0x17D94)) {
            _0x19D74()()
        };
        _0x1BAD4();
        _0x1BB24();
        _0x1BB74();
        _0x1BBC4();
        _0x1BC14();
        _0x1BC64();
        _0x1BCB4();
        _0x1BD04();
        _0x1BD54()
    }

    function _0x17E34() {
        _0x1BDA4();
        titlebackground = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](0, 0, _0x17D94[3]);
        _0x1BDF4();
        if (_0x19004(_0x189C4, false)) {
            _0x19464()(_0x17D94[86]);
            _0x1BE44()
        };
        titledoll1back = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](27, 92, _0x17D94[8]);
        titledoll1eyeblink = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](115, 200, _0x17D94[9]);
        _0x1AD14()[_0x17D94[10]][_0x17D94[5]](_0x17D94[9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1AD14()[_0x17D94[10]][_0x17D94[11]](_0x17D94[9], 24, true);
        titledoll1front = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](27, 92, _0x17D94[12]);
        titledoll2back = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](211, 83, _0x17D94[13]);
        titledoll2eyeblink = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](351, 184, _0x17D94[14]);
        _0x1AE54()[_0x17D94[10]][_0x17D94[5]](_0x17D94[14], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1AE54()[_0x17D94[10]][_0x17D94[11]](_0x17D94[14], 24, true);
        if (_0x19054(_0x18474, _0x17D94[136])) {
            _0x19504()();
            _0x1BE94();
            return
        };
        titledoll2front = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](211, 83, _0x17D94[15]);
        titledoll3back = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](100, 46, _0x17D94[16]);
        titledoll3eyeblink = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](211, 194, _0x17D94[17]);
        _0x1AF94()[_0x17D94[10]][_0x17D94[5]](_0x17D94[17], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1AF94()[_0x17D94[10]][_0x17D94[11]](_0x17D94[17], 24, true);
        titledoll3front = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](120, 71, _0x17D94[18]);
        if (_0x1B2B4(_0x17D94)) {
            _0x195F4()(_0x17D94[84])
        } else {
            titleDoll1Group = _0x1A184()[_0x17D94[5]][_0x17D94[19]]()
        };
        _0x1ADB4()[_0x17D94[5]](_0x1ACC4());
        _0x1ADB4()[_0x17D94[5]](_0x1AD14());
        _0x1ADB4()[_0x17D94[5]](_0x1AD64());
        titleDoll2Group = _0x1A184()[_0x17D94[5]][_0x17D94[19]]();
        _0x1AEF4()[_0x17D94[5]](_0x1AE04());
        _0x1AEF4()[_0x17D94[5]](_0x1AE54());
        _0x1AEF4()[_0x17D94[5]](_0x1AEA4());
        titleDoll3Group = _0x1A184()[_0x17D94[5]][_0x17D94[19]]();
        _0x1B034()[_0x17D94[5]](_0x1AF44());
        if (_0x1B2B4(_0x17D94)) {
            _0x19554()(1, null, null);
            return
        };
        _0x1B034()[_0x17D94[5]](_0x1AF94());
        _0x1B034()[_0x17D94[5]](_0x1AFE4());
        _0x1BEE4();
        if (_0x1B2B4(_0x17D94)) {
            return
        };
        _0x1BF34();
        _0x1BF84();
        _0x1BFD4();
        _0x1C024();
        _0x1C074();
        _0x1C0C4();
        _0x1C114();
        titleholder = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](584.5, 304.5, _0x17D94[23]);
        if (_0x1B2B4(_0x187E4)) {
            _0x196E4()();
            _0x1C164();
            return
        };
        _0x1B0D4()[_0x17D94[25]][_0x17D94[24]](0.5);
        _0x1C1B4();
        title1 = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](_0x1B304(200), 213, _0x17D94[26]);
        _0x1AB84()[_0x17D94[25]][_0x17D94[24]](0.5);
        if (_0x1B2B4(_0x18014)) {
            _0x193C4()();
            return
        };
        _0x1C204();
        if (_0x1B2B4(_0x17D94)) {
            return
        };
        title2 = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](587.5, 329.5, _0x17D94[28]);
        _0x1C254();
        _0x1ABD4()[_0x17D94[25]][_0x17D94[24]](0.5);
        _0x1C2A4();
        title3 = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](594.5, 388, _0x17D94[29]);
        _0x1AC24()[_0x17D94[25]][_0x17D94[24]](0.5);
        _0x1C2F4();
        titleobj = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](484, _0x1B304(200), _0x17D94[30]);
        _0x1B124()[_0x17D94[25]][_0x17D94[24]](0.5);
        titleGroup = _0x1A184()[_0x17D94[5]][_0x17D94[19]]();
        if (_0x19004(_0x184C4, 0)) {
            _0x19AA4()(false)
        };
        _0x1B084()[_0x17D94[5]](_0x1B0D4());
        _0x1B084()[_0x17D94[5]](_0x1AB84());
        _0x1B084()[_0x17D94[5]](_0x1ABD4());
        _0x1B084()[_0x17D94[5]](_0x1AC24());
        _0x1B084()[_0x17D94[5]](_0x1B124());
        _0x1C344();
        _0x1B084()[_0x17D94[22]][_0x17D94[24]](0.95);
        play = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](670, 527, _0x17D94[11]);
        _0x1A904()[_0x17D94[25]][_0x17D94[24]](0.5);
        _0x1C394();
        
        _0x191E4()();
        if (_0x1A134()) {
            _0x1C434();
            if (_0x19054(_0x18744, false)) {
                _0x19A04()(1, null);
                _0x1C484();
                return
            };
            music = _0x1A184()[_0x17D94[5]][_0x17D94[33]](_0x17D94[32]);
            _0x1A724()[_0x17D94[34]](0.6);
            if (_0x1B2B4(_0x189C4)) {
                _0x199B4()(true)
            };
            _0x1A724()[_0x17D94[35]][_0x17D94[5]](_0x19DC4(), this);
           
            _0x19414()()
        } else {
            _0x1C4D4();
            if (_0x1B2B4(_0x188D4)) {
                return
            };
            if (_0x1A224()) {
                _0x1C524();
                if (_0x19054(_0x18924, _0x17D94[130])) {
                    _0x1C574();
                    return
                } else {
                    _0x1A724()[_0x17D94[38]]()
                }
            };
            _0x19374()();
            
        }; if (_0x1B2B4(loadState1)) {
            _0x1C5C4();
            _0x1C614();
            _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[5]](_0x18E74(_0x1A8B4()[_0x17D94[41]][_0x17D94[40]], 0.1), _0x19194(), this)
        };
        (_0x18B54()())
    }

    function _0x17E84() {
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[54], _0x17D94[55]);
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[58], _0x17D94[59]);
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[60], _0x17D94[61]);
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[62], _0x17D94[63]);
        this[_0x17D94[57]][_0x17D94[33]](_0x17D94[64], [_0x17D94[65], _0x17D94[66]]);
        this[_0x17D94[57]][_0x17D94[33]](_0x17D94[67], [_0x17D94[68], _0x17D94[69]]);
        this[_0x17D94[57]][_0x17D94[33]](_0x17D94[70], [_0x17D94[71], _0x17D94[72]]);
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[73], _0x17D94[74]);
        if (_0x1B2B4(_0x18AB4)) {
            _0x1C664();
            return
        };
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[75], _0x17D94[76]);
        _0x1C6B4();
        for (i = 1; _0x18FB4(i, 5); i++) {
            if (_0x1B2B4(_0x18A14)) {
                _0x198C4()();
                _0x1C704()
            } else {
                this[_0x17D94[57]][_0x17D94[56]](_0x18EC4(_0x17D94[77], i), _0x18EC4(_0x17D94[78] + _0x1A1D4(), _0x17D94[79]))
            }
        };
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[80], _0x17D94[81], 301, 451);
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[83], _0x17D94[84], 311, 321);
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[85], _0x17D94[86]);
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[87], _0x17D94[88]);
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[89], _0x17D94[90]);
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[91], _0x17D94[92]);
        if (_0x1B2B4(_0x187E4)) {
            _0x19B44()(0, null);
            _0x1C754()
        };
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[93], _0x17D94[94]);
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[95], _0x17D94[96], 405, 660);
        if (_0x1B2B4(_0x17D94)) {
            _0x19914()()
        };
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[97], _0x17D94[98], 214, 268);
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[99], _0x17D94[100], 248, 277);
        if (_0x19054(_0x18424, true)) {
            _0x19284()(_0x17D94[40], true, 1)
        };
        this[_0x17D94[57]][_0x17D94[56]](_0x17D94[101], _0x17D94[102]);
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[103], _0x17D94[104], 104, 70);
        if (_0x1B2B4(_0x17D94)) {
            return
        };
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[105], _0x17D94[106], 63, 43);
        if (_0x1B2B4(_0x17D94)) {
            _0x1C7A4();
            return
        };
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[107], _0x17D94[108], 79, 60);
        if (_0x1B2B4(_0x186F4)) {
            _0x1C7F4();
            return
        };
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[109], _0x17D94[110], 98, 67);
        if (_0x1B2B4(_0x18514)) {
            _0x192D4()();
            _0x1C844();
            return
        };
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[111], _0x17D94[112], 108, 67);
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[113], _0x17D94[114], 359, 637);
        this[_0x17D94[57]][_0x17D94[82]](_0x17D94[115], _0x17D94[116], 354, 618);
        _0x1A184()[_0x17D94[57]][_0x17D94[117]]()
    }

    function _0x17ED4() {
        logo = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](0, 0, _0x17D94[118]);
        _0x1A5E4()[_0x17D94[25]][_0x17D94[24]](0.5);
        _0x1A5E4()[_0x17D94[21]] = _0x1A864()(_0x18F14(_0x1A5E4()[_0x17D94[119]], 2));
        _0x1A5E4()[_0x17D94[20]] = _0x1A864()(_0x18F14(_0x1A5E4()[_0x17D94[120]], 2));
        _0x1C894();
        _0x1C8E4();
        _0x1C934();
        if (_0x1B2B4(_0x17D94)) {
            _0x19374()()
        };
        _0x1C984();
        if (_0x1B2B4(_0x181A4)) {
            _0x195A4()()
        } else {
            _0x1A5E4()[_0x17D94[42]][_0x17D94[126]][_0x17D94[5]](_0x19AA4(), this)
        };
        _0x1A5E4()[_0x17D94[42]][_0x17D94[127]][_0x17D94[5]](_0x19AF4(), this);
        _0x1A5E4()[_0x17D94[42]][_0x17D94[128]][_0x17D94[5]](_0x19B44(), this);
        if (_0x1B2B4(_0x17FC4)) {
            _0x195F4()();
            _0x1C9D4()
        };
        _0x1A5E4()[_0x17D94[42]][_0x17D94[129]][_0x17D94[5]](_0x19B94(), this);
        mute = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[131]](765, 36, _0x17D94[130]);
        if (_0x1B2B4(_0x17F24)) {
            _0x1CA24();
            return
        } else {
            _0x1A774()[_0x17D94[25]][_0x17D94[24]](0.5)
        }; if (_0x19004(_0x17ED4, null)) {
            return
        };
        _0x1A774()[_0x17D94[22]][_0x17D94[24]](0);
        _0x1CA74();
        _0x1CAC4();
        _0x1CB14();
        _0x1CB64();
        _0x1CBB4();
        _0x1A774()[_0x17D94[42]][_0x17D94[126]][_0x17D94[5]](_0x19C84(), this);
        _0x1A774()[_0x17D94[42]][_0x17D94[127]][_0x17D94[5]](_0x19D24(), this);
        _0x1A774()[_0x17D94[42]][_0x17D94[128]][_0x17D94[5]](_0x19C34(), this);
        _0x1A774()[_0x17D94[42]][_0x17D94[129]][_0x17D94[5]](_0x19CD4(), this);
        _0x1CC04();
        socialicon = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[131]](765, 36, _0x17D94[133]);
        if (_0x1B2B4(_0x17D94)) {
            _0x19AA4()();
            return
        };
        _0x1AA94()[_0x17D94[25]][_0x17D94[24]](0.5);
        _0x1AA94()[_0x17D94[22]][_0x17D94[24]](0);
        _0x1CC54();
        _0x1CCA4();
        _0x1CCF4();
        if (_0x19004(_0x18014, null)) {
            _0x19324()();
            _0x1CD44()
        } else {
            _0x1AA94()[_0x17D94[123]][_0x17D94[125]] = true
        };
        _0x1CD94();
        _0x1AA94()[_0x17D94[42]][_0x17D94[126]][_0x17D94[5]](_0x19964(), this);
        _0x1AA94()[_0x17D94[42]][_0x17D94[127]][_0x17D94[5]](_0x199B4(), this);
        _0x1AA94()[_0x17D94[42]][_0x17D94[128]][_0x17D94[5]](_0x19A04(), this);
        _0x1AA94()[_0x17D94[42]][_0x17D94[129]][_0x17D94[5]](_0x19A54(), this);
        setting = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[131]](765, 40, _0x17D94[134]);
        if (_0x1B2B4(_0x18334)) {
            _0x19B94()(false)
        } else {
            _0x1A9F4()[_0x17D94[25]][_0x17D94[24]](0.5)
        };
        _0x1CDE4();
        _0x1CE34();
        _0x1CE84();
        _0x1CED4();
        _0x1CF24();
        _0x1A9F4()[_0x17D94[42]][_0x17D94[126]][_0x17D94[5]](_0x19234(), this);
        _0x1A9F4()[_0x17D94[42]][_0x17D94[127]][_0x17D94[5]](_0x19284(), this);
        _0x1A9F4()[_0x17D94[42]][_0x17D94[128]][_0x17D94[5]](_0x192D4(), this);
        _0x1A9F4()[_0x17D94[42]][_0x17D94[129]][_0x17D94[5]](_0x19324(), this);
        if (_0x19004(pageNo, 1) || _0x19004(pageNo, 3) || _0x19004(pageNo, 4) || _0x19004(pageNo, 5) || _0x19004(pageNo, 6) || _0x19004(pageNo, 7) || _0x19004(pageNo, 8) || _0x19004(pageNo, 9) || _0x19004(pageNo, 10) || _0x19004(pageNo, 11) || _0x19004(pageNo, 12) || _0x19004(pageNo, 13)) {
            
        } else {
            if (_0x19004(pageNo, 14)) {
                
            }
        }
    }

    function _0x17F24(_0x17DE4) {
        _0x17DE4[_0x17D94[22]][_0x17D94[24]](1.05)
    }

    function _0x17F74(_0x17DE4) {
        _0x17DE4[_0x17D94[22]][_0x17D94[24]](1)
    }

    function _0x17FC4(_0x17DE4) {
        if (_0x19054(_0x17E34, _0x17D94[81])) {
            _0x19694()(true, null, null, 1, true);
            return
        } else {
            _0x19D74()(_0x17D94[135])
        }
    }

    function _0x18014(_0x17DE4) {
        var _0x17ED4 = {};
        var _0x17E84 = {};
        _0x17ED4._ = _0x18BA4();
        _0x17E84._ = _0x18BF4();
        if (_0x1B2B4(setcount)) {
            _0x1D1F4();
            _0x1D244();
            if (_0x19004(_0x17E34, 0)) {
                return
            } else {
                _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A9F4())[_0x17D94[140]]({
                    angle: 360
                }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true)[_0x17D94[136]][_0x17D94[5]](_0x17ED4._, this)
            };
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AA94()[_0x17D94[22]])[_0x17D94[140]]({
                x: 1,
                y: 1
            }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A774()[_0x17D94[22]])[_0x17D94[140]]({
                x: 1,
                y: 1
            }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true);
            if (_0x19004(_0x189C4, _0x17D94[40])) {
                _0x19504()(_0x17D94[65])
            };
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AA94())[_0x17D94[140]]({
                y: 90
            }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A774())[_0x17D94[140]]({
                y: 135
            }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true)
        } else {
            _0x1D294();
            _0x1D2E4();
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A9F4())[_0x17D94[140]]({
                angle: 360
            }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true)[_0x17D94[136]][_0x17D94[5]](_0x17E84._, this);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AA94()[_0x17D94[22]])[_0x17D94[140]]({
                x: 0,
                y: 0
            }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true);
            _0x1D334();
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A774()[_0x17D94[22]])[_0x17D94[140]]({
                x: 0,
                y: 0
            }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AA94())[_0x17D94[140]]({
                y: 40
            }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A774())[_0x17D94[140]]({
                y: 40
            }, 300, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true);
        }
    }

    function _0x18064() {
        var _0x17F74 = {},
            _0x17ED4 = {},
            _0x17F24 = {};
        var _0x17E84 = {};
        var _0x18014 = {};
        var _0x17DE4 = {};
        var _0x17E34 = {};
        _0x17E84._ = _0x18C94(_0x17ED4);
        _0x18014._ = _0x18C44(_0x17F74);
        _0x17DE4._ = _0x18CE4(_0x17F24);
        _0x17E34._ = _0x18D34();
        _0x17F74._ = _0x17E84._;
        _0x17ED4._ = _0x17DE4._;
        _0x17F24._ = _0x17E34._;
        var _0x18064 = [, 400, 110.4, 675.45, 68.5, 733.45];
        var _0x180B4 = [, 299, 427.9, 419.9, 325.5, 325];
        for (i = 1; _0x18FB4(i, 1); i++) {
            _0x1A184()[_0x18EC4(_0x17D94[77], i)] = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](_0x18064[_0x1A1D4()], _0x180B4[_0x1A1D4()], _0x18EC4(_0x17D94[77], i));
            if (_0x19004(_0x17FC4, null)) {
                return
            } else {
                _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[25]][_0x17D94[24]](0.5)
            };
            _0x1D384();
            _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[22]][_0x17D94[24]](1.01)
        };
        if (_0x19004(_0x18A14, 0)) {
            _0x19BE4()()
        };
        for (i = 2; _0x18FB4(i, 3); i++) {
            if (_0x19004(_0x18604, 0)) {
                _0x199B4()();
                return
            } else {
                _0x1A184()[_0x18EC4(_0x17D94[77], i)] = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](_0x18064[_0x1A1D4()], _0x180B4[_0x1A1D4()], _0x18EC4(_0x17D94[77], i))
            };
            _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[25]][_0x17D94[24]](0.5, 1);
            _0x1D3D4();
            _0x1D424()
        };
        for (i = 4; _0x18FB4(i, 5); i++) {
            _0x1A184()[_0x18EC4(_0x17D94[77], i)] = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](_0x18064[_0x1A1D4()], _0x180B4[_0x1A1D4()], _0x18EC4(_0x17D94[77], i));
            _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[25]][_0x17D94[24]](0.5);
            if (_0x1B2B4(_0x17D94)) {
                return
            };
            _0x1D474()
        };
        transitiontitle = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](404.45, _0x1B304(300), _0x17D94[75]);
        _0x1B174()[_0x17D94[25]][_0x17D94[24]](0.5);
        _0x1D4C4();
        if (_0x19054(_0x18514, null)) {
            _0x1D514();
            return
        } else {
            _0x1A9A4()(_0x18014._, 400)
        }; if (_0x19004(_0x189C4, null)) {
            _0x198C4()(null);
            _0x1D564();
            return
        } else {}; if (_0x1B2B4(_0x18564)) {
            _0x19A54()();
            _0x1D5B4();
            return
        };
    }

    function _0x180B4() {
        for (i = 1; _0x18FB4(i, 5); i++) {
            if (_0x19054(_0x183D4, 0)) {
                return
            };
            _0x1D604()
        };
        _0x1D654();
        if (_0x19004(pageNo, 1)) {
            _0x19414()()
        } else {
            if (_0x19004(pageNo, 2)) {
                _0x19FF4()()
            } else {
                if (_0x19004(pageNo, 3)) {
                    _0x1A544()()
                } else {
                    if (_0x19004(pageNo, 4)) {
                        if (_0x1B2B4(_0x17D94)) {
                            _0x19C84()();
                            _0x1D6A4();
                            return
                        };
                        _0x1A274()()
                    } else {
                        if (_0x19004(pageNo, 5)) {
                            if (_0x1B2B4(_0x17D94)) {
                                _0x1D6F4();
                                return
                            } else {
                                _0x1A2C4()()
                            }
                        } else {
                            if (_0x19004(pageNo, 6)) {
                                _0x1A314()()
                            } else {
                                if (_0x19004(pageNo, 7)) {
                                    _0x1A364()()
                                } else {
                                    if (_0x19004(pageNo, 8)) {
                                        _0x1A3B4()()
                                    } else {
                                        if (_0x19004(pageNo, 9)) {
                                            if (_0x1B2B4(_0x181F4)) {
                                                _0x19414()(null);
                                                _0x1D744()
                                            };
                                            _0x1A404()()
                                        } else {
                                            if (_0x19004(pageNo, 10)) {
                                                _0x1A454()()
                                            } else {
                                                if (_0x19004(pageNo, 11)) {
                                                    _0x1A4A4()()
                                                } else {
                                                    if (_0x19004(pageNo, 12)) {
                                                        _0x1A4F4()()
                                                    } else {
                                                        if (_0x19004(pageNo, 13)) {
                                                            _0x1AB34()()
                                                        } else {
                                                            if (_0x19004(pageNo, 14)) {
                                                                _0x1A094()()
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

    function _0x18104() {
        _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[5]](_0x18E74(_0x1A8B4()[_0x17D94[41]][_0x17D94[40]], 0.1), _0x19464(), this)
    }

    function _0x18154() {
        var _0x17DE4 = {};
        _0x17DE4._ = _0x18D84();
        if (_0x1B2B4(startgame)) {
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AC74())[_0x17D94[140]]({
                alpha: 1
            }, 500, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[142]], true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1B0D4())[_0x17D94[140]]({
                alpha: 1
            }, 500, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[142]], true)[_0x17D94[136]][_0x17D94[5]](_0x17DE4._, this);
        }
    }
    if (_0x18884 === _0x17D94[29]) {
        _0x17ED4(false);
        (function() {
            _0x18654 = 1
        })();
        return
    };

    function _0x181A4() {
        if (_0x1B2B4(startgame)) {
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AB84()[_0x17D94[22]])[_0x17D94[140]]({
                x: 0.97,
                y: 0.97
            }, 550, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true, 0, _0x1B304(1), true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1ABD4()[_0x17D94[22]])[_0x17D94[140]]({
                x: 1.07
            }, 550, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true, 0, _0x1B304(1), true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AC24()[_0x17D94[22]])[_0x17D94[140]]({
                y: 1.07
            }, 550, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true, 0, _0x1B304(1), true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1B124()[_0x17D94[22]])[_0x17D94[140]]({
                x: 0.97,
                y: 0.97
            }, 550, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[137]], true, 0, _0x1B304(1), true)
        }
    }

    function _0x181F4() {
        if (_0x1B2B4(startgame)) {
            if (_0x1B2B4(_0x17ED4)) {
                _0x19234()(null, true, null)
            };
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1B034())[_0x17D94[140]]({
                x: _0x1B304(60)
            }, 1000, _0x1A8B4()[_0x17D94[139]][_0x17D94[143]][_0x17D94[144]], true, 400);
            if (_0x1B2B4(_0x17D94)) {
                return
            };
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1ADB4())[_0x17D94[140]]({
                x: 560
            }, 1000, _0x1A8B4()[_0x17D94[139]][_0x17D94[143]][_0x17D94[144]], true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AEF4())[_0x17D94[140]]({
                x: 500
            }, 1000, _0x1A8B4()[_0x17D94[139]][_0x17D94[143]][_0x17D94[144]], true, 600)
        }
    }

    function _0x18244() {
        if (_0x1B2B4(_0x180B4)) {
            _0x19D24()();
            return
        };
        if (_0x1B2B4(startgame)) {
            _0x19D74()(_0x17D94[149]);
            _0x1D8D4();
            if (_0x1B2B4(_0x184C4)) {
                return
            };
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A904())[_0x17D94[147]]({
                y: 1000
            }, 700, _0x1A8B4()[_0x17D94[139]][_0x17D94[148]][_0x17D94[142]], 1)[_0x17D94[136]][_0x17D94[5]](_0x195A4(), this);
            
        }
    }

    function _0x18294() {
        _0x1D974();
        _0x1D9C4();
        _0x1DA14();
        _0x1DA64();
        _0x1DAB4();
        if (_0x1B2B4(_0x181A4)) {
            return
        };
        _0x1A904()[_0x17D94[42]][_0x17D94[126]][_0x17D94[5]](_0x19784(), this);
        if (_0x1B2B4(_0x181F4)) {
            _0x19DC4()()
        } else {
            _0x1A904()[_0x17D94[42]][_0x17D94[127]][_0x17D94[5]](_0x197D4(), this)
        }; if (_0x19054(_0x186F4, false)) {
            _0x190F4()();
            _0x1DB04();
            return
        };
        _0x1A904()[_0x17D94[42]][_0x17D94[128]][_0x17D94[5]](_0x19824(), this);
        _0x1A904()[_0x17D94[42]][_0x17D94[129]][_0x17D94[5]](_0x19874(), this);
        continueTweenTimer = _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[5]](_0x18E74(_0x1A8B4()[_0x17D94[41]][_0x17D94[40]], initialButtonTweenDelay), _0x195F4(), this)
    }
    if (_0x182E4 == null) {
        _0x18834(0, null);
        (function() {
            _0x181A4 = _0x17D94[29]
        })();
        return
    };

    function _0x182E4() {
        if (_0x19004(pageNo, 1) && _0x1B2B4(startgame)) {
            tweenA = _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A904())[_0x17D94[140]]({
                angle: 30
            }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[142]], true, 0, 1, true);
            tweenB = _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A904()[_0x17D94[22]])[_0x17D94[140]]({
                x: 1.3,
                y: 1.3
            }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[142]], true, 1500, 1, true);
            _0x1B1C4()[_0x17D94[150]](_0x1B214());
            _0x1B1C4()[_0x17D94[117]]();
            if (_0x1B2B4(_0x17ED4)) {
                _0x19194()();
                _0x1DB54();
                return
            };
            continueTweenTimer = _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[5]](_0x18E74(_0x1A8B4()[_0x17D94[41]][_0x17D94[40]], repeatButtonTweenDelay), _0x195F4(), this)
        } else {
            if ((_0x19004(pageNo, 4) && _0x1B2B4(level1Finish)) || (_0x19004(pageNo, 5) && _0x1B2B4(level2Finish)) || (_0x19004(pageNo, 6) && _0x1B2B4(level3Finish)) || (_0x19004(pageNo, 7) && _0x1B2B4(level4Finish)) || (_0x19004(pageNo, 8) && _0x1B2B4(level5Finish)) || (_0x19004(pageNo, 9) && _0x1B2B4(level6Finish)) || (_0x19004(pageNo, 10) && _0x1B2B4(level7Finish)) || (_0x19004(pageNo, 11) && _0x1B2B4(level8Finish)) || (_0x19004(pageNo, 12) && _0x1B2B4(level9Finish))) {
                if (_0x19054(_0x186A4, _0x17D94[63])) {
                    _0x192D4()();
                    _0x1DBA4();
                    return
                };
                _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A044())[_0x17D94[140]]({
                    angle: 30
                }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[142]], true, 0, 1, true);
                if (_0x1B2B4(_0x17ED4)) {
                    return
                } else {
                    continueTweenTimer = _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[5]](_0x18E74(_0x1A8B4()[_0x17D94[41]][_0x17D94[40]], repeatButtonTweenDelay), _0x195F4(), this)
                }
            } else {
                if (_0x19004(pageNo, 13) && _0x1B2B4(thumbFinish)) {
                    _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A7C4())[_0x17D94[140]]({
                        angle: 30
                    }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[142]], true, 0, 1, true);
                    continueTweenTimer = _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[5]](_0x18E74(_0x1A8B4()[_0x17D94[41]][_0x17D94[40]], repeatButtonTweenDelay), _0x195F4(), this)
                } else {
                    if (_0x19004(_0x18744, null)) {
                        _0x19B44()(true, 1)
                    };
                    if (_0x19004(pageNo, 14) && _0x1B2B4(endScreenFinish)) {
                        _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A954())[_0x17D94[140]]({
                            angle: 30
                        }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[142]], true, 0, 1, true);
                        continueTweenTimer = _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[5]](_0x18E74(_0x1A8B4()[_0x17D94[41]][_0x17D94[40]], repeatButtonTweenDelay), _0x195F4(), this)
                    }
                }
            }
        }
    }

    function _0x18334(_0x17D94) {}

    function _0x18384(_0x17D94) {}

    function _0x183D4(_0x17DE4) {
        _0x19D74()(_0x17D94[135])
    }

    function _0x18424(_0x17D94) {
        
    }

    function _0x18474(_0x17DE4) {
        _0x1A904()[_0x17D94[10]][_0x17D94[5]](_0x17D94[11], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
        _0x1A904()[_0x17D94[10]][_0x17D94[11]](_0x17D94[11], 24, false)
    }

    function _0x184C4(_0x17E34) {
        var _0x17DE4 = {};
        _0x17DE4._ = _0x17E34;
        if (_0x1B2B4(_0x18064)) {
            _0x19BE4()();
            _0x1DBF4()
        } else {
            _0x1A904()[_0x17D94[10]][_0x17D94[151]](null, true)
        };
        _0x1DC44(_0x17DE4)
    }

    function _0x18514(_0x17E34) {
        var _0x17DE4 = {};
        _0x17DE4._ = _0x17E34;
        if (_0x1B2B4(_0x17E84)) {
            _0x19D74()();
            return
        };
        if (_0x1B2B4(startgame) && _0x1A594()) {
            if (_0x1B2B4(_0x186A4)) {
                return
            };
            _0x19D74()(_0x17D94[135]);
            _0x1A904()[_0x17D94[10]][_0x17D94[151]](null, true);
            _0x1DC94(_0x17DE4);
            _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[152]](_0x19F54())
        }
    }

    function _0x18564(_0x17DE4) {
        var _0x17D94 = {};
        _0x17D94._ = _0x17DE4;
        if (_0x1B2B4(startgame) && _0x1A594()) {
            _0x1DCE4();
            _0x1DD34(_0x17D94);
            if (_0x1B2B4(_0x18AB4)) {
                _0x19734()()
            } else {
                _0x198C4()()
            }
        }
    }

    function _0x185B4() {
        var _0x17DE4 = {};
        _0x17DE4._ = _0x18DD4();
        var _0x17E34 = [, 400, 110.4, 675.45, _0x1B304(87.5), 891.45];
        var _0x17E84 = [, 929, 427.9, 419.9, 325.5, 325];
        for (i = 1; _0x18FB4(i, 1); i++) {
            if (_0x1B2B4(_0x186F4)) {
                _0x195A4()(_0x17D94[14], null);
                return
            };
            _0x1A184()[_0x18EC4(_0x17D94[77], i)] = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](_0x17E34[_0x1A1D4()], _0x17E84[_0x1A1D4()], _0x18EC4(_0x17D94[77], i));
            if (_0x19054(_0x181A4, _0x17D94[71])) {
                _0x19E14()(false, false, _0x17D94[80], false)
            };
            _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[25]][_0x17D94[24]](0.5);
            _0x1DD84();
            if (_0x1B2B4(_0x18474)) {
                return
            };
            _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[22]][_0x17D94[24]](1.01)
        };
        for (i = 2; _0x18FB4(i, 3); i++) {
            _0x1A184()[_0x18EC4(_0x17D94[77], i)] = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](_0x17E34[_0x1A1D4()], _0x17E84[_0x1A1D4()], _0x18EC4(_0x17D94[77], i));
            _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[25]][_0x17D94[24]](0.5, 1);
            _0x1DDD4();
            _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[22]][_0x17D94[24]](0)
        };
        if (_0x1B2B4(_0x18384)) {
            _0x19144()();
            _0x1DE24()
        };
        for (i = 4; _0x18FB4(i, 5); i++) {
            _0x1A184()[_0x18EC4(_0x17D94[77], i)] = this[_0x17D94[6]][_0x17D94[5]][_0x17D94[4]](_0x17E34[_0x1A1D4()], _0x17E84[_0x1A1D4()], _0x18EC4(_0x17D94[77], i));
            _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[25]][_0x17D94[24]](0.5);
            if (_0x19004(_0x185B4, 0)) {
                _0x19284()();
                _0x1DE74()
            };
            _0x1DEC4()
        };
        _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 1)])[_0x17D94[140]]({
            y: 299
        }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[148]][_0x17D94[144]], true)[_0x17D94[136]][_0x17D94[5]](_0x17DE4._, this);
    }
    if (!_0x17D94) {
        _0x18A14(null);
        (function() {
            _0x188D4 = _0x17D94[107]
        })()
    };

    function _0x18604() {
        if (_0x19004(pageNo, 1) || _0x19004(pageNo, 6) || _0x19004(pageNo, 9)) {
            _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[153])
        } else {
            if (_0x19004(pageNo, 2) || _0x19004(pageNo, 4) || _0x19004(pageNo, 5) || _0x19004(pageNo, 7) || _0x19004(pageNo, 8) || _0x19004(pageNo, 10) || _0x19004(pageNo, 11)) {
                _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[155])
            } else {
                if (_0x19004(pageNo, 3) && _0x19004(level, 1)) {
                    _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[156])
                } else {
                    if (_0x19004(pageNo, 3) && _0x19004(level, 2)) {
                        _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[157])
                    } else {
                        if (_0x19004(pageNo, 3) && _0x19004(level, 3)) {
                            _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[158])
                        } else {
                            if (_0x19004(pageNo, 3) && _0x19004(level, 4)) {
                                _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[159])
                            } else {
                                if (_0x19004(pageNo, 3) && _0x19004(level, 5)) {
                                    _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[160])
                                } else {
                                    if (_0x19004(pageNo, 3) && _0x19004(level, 6)) {
                                        _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[161])
                                    } else {
                                        if (_0x19004(pageNo, 3) && _0x19004(level, 7)) {
                                            _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[162])
                                        } else {
                                            if (_0x19004(pageNo, 3) && _0x19004(level, 8)) {
                                                _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[163])
                                            } else {
                                                if (_0x19004(pageNo, 3) && _0x19004(level, 9)) {
                                                    _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[164])
                                                } else {
                                                    if (_0x19004(pageNo, 12)) {
                                                        _0x1DF14();
                                                        _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[165])
                                                    } else {
                                                        if (_0x19004(pageNo, 12)) {
                                                            _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[166])
                                                        } else {
                                                            if (_0x19004(pageNo, 13)) {
                                                                if (_0x1B2B4(_0x17F24)) {
                                                                    _0x1DF64();
                                                                    return
                                                                };
                                                                _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[165])
                                                            } else {
                                                                if (_0x19004(pageNo, 14)) {
                                                                    if (_0x1B2B4(_0x17D94)) {
                                                                        _0x196E4()();
                                                                        _0x1DFB4();
                                                                        return
                                                                    };
                                                                    _0x1A184()[_0x17D94[154]][_0x17D94[117]](_0x17D94[167])
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
    if (_0x187E4 === _0x17D94[33]) {
        (function() {
            _0x18834 = 1
        })();
        return
    };

    function _0x18654(_0x17DE4) {
        _0x17DE4[_0x17D94[22]][_0x17D94[24]](1.05)
    }

    function _0x186A4(_0x17DE4) {
        _0x17DE4[_0x17D94[22]][_0x17D94[24]](1)
    }

    function _0x186F4(_0x17DE4) {
        _0x19D74()(_0x17D94[135])
    }
    if (!_0x17D94) {
        _0x18294();
        (function() {
            _0x18514 = null
        })()
    };

    function _0x18744(_0x17DE4) {
        _0x17DE4[_0x17D94[22]][_0x17D94[24]](1);
       
    }

    function _0x18794() {
        _0x1A5E4()[_0x17D94[37]] = 1
    }

    function _0x187E4() {
        if (_0x1B2B4(_0x18974)) {
            _0x1E004();
            return
        } else {
            _0x1A5E4()[_0x17D94[37]] = 0
        }
    }

    function _0x18834() {
        _0x19D74()(_0x17D94[135])
    }

    function _0x18884() {
       
    }

    function _0x188D4(_0x17E34) {
        var _0x17E84 = {};
        _0x17E84._ = _0x17E34;
        _0x1E054(_0x17E84);
        if (_0x1B2B4(_0x18294)) {
            _0x19464()();
            _0x1E0A4();
            return
        };
        _0x19F04()[_0x17D94[170]](_0x17D94[168], _0x17E84._, _0x17D94[169], _0x1B264());
        if (_0x17E84._ && _0x1B2B4(isMuted)) {
            _0x1E0F4();
            _0x19C34()();
            return
        };
        if (_0x19004(_0x17DE4, false)) {
            return
        };
        if (_0x1B2B4(_0x17E84._) && _0x1B2B4(wasMuted)) {
            _0x1E144();
            _0x19C34()();
            if (_0x1B2B4(_0x17D94)) {
                return
            };
            return
        };
        _0x1E194(_0x17E84)
    }

    function _0x18924() {
        if (_0x190A4(pageNo, 0)) {
            if (_0x1B2B4(isMuted)) {
                if (_0x1B2B4(_0x17D94)) {
                    return
                } else {
                    isMuted = true
                };
                _0x1E1E4();
                _0x1A724()[_0x17D94[171]]()
            } else {
                if (_0x1B2B4(_0x17D94)) {
                    _0x1E234();
                    return
                };
                _0x1E284();
                _0x1E2D4();
                _0x1A724()[_0x17D94[38]]()
            }
        }
    }

    function _0x18974(_0x17DE4) {
        _0x17DE4[_0x17D94[22]][_0x17D94[24]](1.05)
    }

    function _0x189C4(_0x17DE4) {
        if (_0x19004(_0x18424, 1)) {
            _0x192D4()();
            return
        } else {
            _0x17DE4[_0x17D94[22]][_0x17D94[24]](1)
        };
        _0x1E324()
    }

    function _0x18A14(_0x17DE4) {
        _0x17DE4[_0x17D94[22]][_0x17D94[24]](1)
    }
    if (!_0x17D94) {
        _0x188D4(false, true);
        (function() {
            _0x18424 = true
        })();
        return
    };

    function _0x18A64(_0x17DE4) {
        if (_0x1B2B4(isMuted)) {
            clicksound = _0x1A184()[_0x17D94[5]][_0x17D94[33]](_0x17DE4);
            _0x19EB4()[_0x17D94[11]]();
            if (_0x19004(_0x182E4, 1)) {
                _0x19D74()(1);
                return
            };
            _0x1E374()
        }
    }
    if (_0x186A4 === true) {
        return
    };

    function _0x18AB4(_0x17DE4) {
        _0x1A724()[_0x17D94[34]]()
    }
    loadPicture1 = _0x17E84;
    logofbkmute = _0x17ED4;
    settingOver = _0x17F24;
    settingOut = _0x17F74;
    settingDown = _0x17FC4;
    settingUp = _0x18014;
    transitionOut = _0x18064;
    levelsStart = _0x180B4;
    titleScreenStart = _0x18104;
    titleAnimationStart = _0x18154;
    titleAnimationStart1 = _0x181A4;
    titleDollChange = _0x181F4;
    titleButtonAppear = _0x18244;
    titleScreenStart1 = _0x18294;
    continueTweenAction = _0x182E4;
    if (!_0x17D94) {
        (function() {
            _0x18B04 = 1
        })();
        return
    };
    moreGamesOver = _0x18334;
    moreGamesOut = _0x18384;
    moreGamesDown = _0x183D4;
    moreGamesUp = _0x18424;
    playOver = _0x18474;
    playOut = _0x184C4;
    playDown = _0x18514;
    playUp = _0x18564;
    if (!_0x18654) {
        _0x17E84 = _0x17D94[144]
    } else {
        transitionIn = _0x185B4
    };
    transitionInTweenComplete = _0x18604;
    faceBookOver = _0x18654;
    faceBookOut = _0x186A4;
    faceBookDown = _0x186F4;
    faceBookUp = _0x18744;
    logoOver = _0x18794;
    logoOut = _0x187E4;
    logoDown = _0x18834;
    logoUp = _0x18884;
    muteAd = _0x188D4;
    muteFun = _0x18924;
    muteOver = _0x18974;
    muteUp = _0x189C4;
    muteOut = _0x18A14;
    playsoundeffects = _0x18A64;
    hasLooped = _0x18AB4;
    startgame = false;
    setcount = false;
    levelSelectEnter = false;
    if (!_0x17D94) {
        _0x181A4();
        return
    };
    level1Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (!_0x17D94) {
        _0x180B4()
    } else {
        level2Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    level3Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level4Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level5Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level6Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (!_0x17E34) {
        _0x18014(null, 1, false, 0)
    };
    level7Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level8Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (_0x183D4 === 0) {
        _0x17DE4();
        (function() {
            _0x18104 = _0x17D94[143]
        })()
    };
    level9Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (!_0x17FC4) {
        (function() {
            _0x18064 = false
        })();
        return
    };
    level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level5Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level6Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level7Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (_0x18B04 == false) {
        return
    };
    level8Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level9Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (_0x180B4 === 0) {
        return
    };
    dollNum = 1;
    dollSelectEnter = false;
    titlescreen = {
        preload: _0x17DE4,
        create: _0x17E34
    };
    if (!_0x181A4) {
        _0x18294 = _0x17D94[79]
    };
    if (!_0x17D94) {
        return
    };
    if (!_0x18604) {
        return
    };
    if (!_0x17D94) {
        _0x186F4(true, null, 0, 1, null);
        return
    } else {}; if (_0x184C4 == 0) {
        (function() {
            _0x18A64 = true
        })();
        return
    };
    if (!_0x18154) {
        return
    };
    wasMuted = false;

    function _0x1B354(_0x17D94, _0x17E34, _0x17DE4) {
        _0x17E34._[_0x17D94._] = _0x17E34._[_0x17DE4._]
    }

    function _0x1B3A4(_0x17DE4, _0x17E34, _0x17D94) {
        _0x17E34._[_0x17DE4._] = _0x17D94._
    }

    function _0x1B3F4(_0x17DE4, _0x17D94, _0x17E34) {
        _0x17DE4._ = _0x18E24((_0x18EC4(_0x17D94._, _0x17E34._)), 5511477)
    }

    function _0x1B444() {
        if (_0x1B2B4(_0x17D94)) {
            _0x186F4 = null
        }
    }

    function _0x1B494() {
        level = 1
    }

    function _0x1B4E4() {
        dollEnter = false
    }

    function _0x1B534() {
        adViewCount = 0
    }

    function _0x1B584() {
        pageNo = 1
    }

    function _0x1B5D4() {
        _0x18244 = null
    }

    function _0x1B624() {
        dollNum = 1
    }

    function _0x1B674() {
        startgame = false
    }

    function _0x1B6C4() {
        levelSelectEnter = false
    }

    function _0x1B714() {
        setcount = false
    }

    function _0x1B764() {
        adViewCount = 0
    }

    function _0x1B7B4() {
        _0x18514 = null
    }

    function _0x1B804() {
        level2Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1B854() {
        level3Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1B8A4() {
        level4Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1B8F4() {
        level5Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1B944() {
        level6Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1B994() {
        level7Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1B9E4() {
        level8Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BA34() {
        level9Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BA84() {
        level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BAD4() {
        level2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BB24() {
        level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BB74() {
        level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BBC4() {
        level5Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BC14() {
        level6Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BC64() {
        level7Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BCB4() {
        level8Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BD04() {
        level9Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1BD54() {
        continueTweenTimer = 0
    }

    function _0x1BDA4() {
        _0x1A184()[_0x17D94[1]][_0x17D94[0]] = _0x17D94[2]
    }

    function _0x1BDF4() {
        _0x1AC74()[_0x17D94[7]] = 0
    }

    function _0x1BE44() {
        _0x18AB4 = 1
    }

    function _0x1BE94() {
        _0x17E84 = false
    }

    function _0x1BEE4() {
        _0x1ADB4()[_0x17D94[20]] = _0x1B304(10)
    }

    function _0x1BF34() {
        _0x1ADB4()[_0x17D94[21]] = _0x1B304(900)
    }

    function _0x1BF84() {
        _0x1AEF4()[_0x17D94[21]] = _0x1B304(900)
    }

    function _0x1BFD4() {
        _0x1B034()[_0x17D94[21]] = _0x1B304(900)
    }

    function _0x1C024() {
        _0x1B034()[_0x17D94[20]] = 3
    }

    function _0x1C074() {
        if (_0x1B2B4(_0x183D4)) {
            _0x18514 = _0x17D94[165]
        }
    }

    function _0x1C0C4() {
        _0x1ADB4()[_0x17D94[22]][_0x17D94[21]] = _0x1B304(1)
    }

    function _0x1C114() {
        _0x1AEF4()[_0x17D94[22]][_0x17D94[21]] = _0x1B304(1)
    }

    function _0x1C164() {
        _0x186F4 = true
    }

    function _0x1C1B4() {
        _0x1B0D4()[_0x17D94[7]] = 0
    }

    function _0x1C204() {
        _0x1AB84()[_0x17D94[27]] = false
    }

    function _0x1C254() {
        if (_0x1B2B4(_0x18604)) {
            _0x17DE4 = false
        }
    }

    function _0x1C2A4() {
        _0x1ABD4()[_0x17D94[27]] = false
    }

    function _0x1C2F4() {
        _0x1AC24()[_0x17D94[27]] = false
    }

    function _0x1C344() {
        _0x1B084()[_0x17D94[21]] = 50
    }

    function _0x1C394() {
        _0x1A904()[_0x17D94[27]] = false
    }

    function _0x1C3E4() {
        _0x1A6D4()[_0x17D94[27]] = false
    }

    function _0x1C434() {
        firstTime = false
    }

    function _0x1C484() {
        _0x17E84 = 1
    }

    function _0x1C4D4() {
        _0x1A774()[_0x17D94[37]] = 0
    }

    function _0x1C524() {
        isMuted = false
    }

    function _0x1C574() {
        _0x188D4 = 1
    }

    function _0x1C5C4() {
        loadState1 = true
    }

    function _0x1C614() {
        loadFinish = false
    }

    function _0x18B54() {
        return function() {
            
        }
    }

    function _0x1C664() {
        _0x18564 = null
    }

    function _0x1C6B4() {
        if (_0x1B2B4(_0x18924)) {
            _0x18604 = false
        }
    }

    function _0x1C704() {
        _0x18064 = _0x17D94[167]
    }

    function _0x1C754() {
        _0x18654 = true
    }

    function _0x1C7A4() {
        _0x18B04 = 1
    }

    function _0x1C7F4() {
        _0x182E4 = 1
    }

    function _0x1C844() {
        _0x18974 = _0x17D94[64]
    }

    function _0x1C894() {
        _0x1A5E4()[_0x17D94[121]] = true
    }

    function _0x1C8E4() {
        _0x1A5E4()[_0x17D94[123]][_0x17D94[122]] = true
    }

    function _0x1C934() {
        _0x1A5E4()[_0x17D94[123]][_0x17D94[124]] = true
    }

    function _0x1C984() {
        _0x1A5E4()[_0x17D94[123]][_0x17D94[125]] = true
    }

    function _0x1C9D4() {
        _0x18834 = 0
    }

    function _0x1CA24() {
        _0x18AB4 = _0x17D94[18]
    }

    function _0x1CA74() {
        _0x1A774()[_0x17D94[121]] = true
    }

    function _0x1CAC4() {
        _0x1A774()[_0x17D94[123]][_0x17D94[122]] = true
    }

    function _0x1CB14() {
        _0x1A774()[_0x17D94[123]][_0x17D94[124]] = true
    }

    function _0x1CB64() {
        _0x1A774()[_0x17D94[123]][_0x17D94[125]] = true
    }

    function _0x1CBB4() {
        _0x1A774()[_0x17D94[123]][_0x17D94[132]] = 10
    }

    function _0x1CC04() {
        if (_0x1A224()) {
            _0x1A774()[_0x17D94[37]] = 1
        }
    }

    function _0x1CC54() {
        _0x1AA94()[_0x17D94[121]] = true
    }

    function _0x1CCA4() {
        _0x1AA94()[_0x17D94[123]][_0x17D94[122]] = true
    }

    function _0x1CCF4() {
        _0x1AA94()[_0x17D94[123]][_0x17D94[124]] = true
    }

    function _0x1CD44() {
        _0x18474 = false
    }

    function _0x1CD94() {
        _0x1AA94()[_0x17D94[123]][_0x17D94[132]] = 10
    }

    function _0x1CDE4() {
        _0x1A9F4()[_0x17D94[121]] = true
    }

    function _0x1CE34() {
        _0x1A9F4()[_0x17D94[123]][_0x17D94[122]] = true
    }

    function _0x1CE84() {
        _0x1A9F4()[_0x17D94[123]][_0x17D94[124]] = true
    }

    function _0x1CED4() {
        _0x1A9F4()[_0x17D94[123]][_0x17D94[125]] = true
    }

    function _0x1CF24() {
        _0x1A9F4()[_0x17D94[123]][_0x17D94[132]] = 10
    }

    function _0x1CF74() {
        _0x1A6D4()[_0x17D94[121]] = true
    }

    function _0x1CFC4() {
        _0x1A6D4()[_0x17D94[123]][_0x17D94[122]] = true
    }

    function _0x1D014() {
        _0x1A6D4()[_0x17D94[123]][_0x17D94[124]] = true
    }

    function _0x1D064() {
        _0x1A6D4()[_0x17D94[123]][_0x17D94[125]] = true
    }

    function _0x1D0B4() {
        _0x1A6D4()[_0x17D94[121]] = true
    }

    function _0x1D104() {
        _0x1A6D4()[_0x17D94[123]][_0x17D94[122]] = true
    }

    function _0x1D154() {
        _0x1A6D4()[_0x17D94[123]][_0x17D94[124]] = true
    }

    function _0x1D1A4() {
        _0x1A6D4()[_0x17D94[123]][_0x17D94[125]] = true
    }

    function _0x1D1F4() {
        setcount = true
    }

    function _0x1D244() {
        _0x1A9F4()[_0x17D94[121]] = false
    }

    function _0x18BA4() {
        return function() {
            _0x1A9F4()[_0x17D94[121]] = true
        }
    }

    function _0x1D294() {
        setcount = false
    }

    function _0x1D2E4() {
        _0x1A9F4()[_0x17D94[121]] = false
    }

    function _0x1D334() {
        if (_0x1B2B4(_0x187E4)) {
            _0x18244 = null
        }
    }

    function _0x18BF4() {
        return function() {
            _0x1A9F4()[_0x17D94[121]] = true
        }
    }

    function _0x18C94(_0x17DE4) {
        return function() {
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1B174())[_0x17D94[140]]({
                y: _0x1B304(300)
            }, 500, _0x1A8B4()[_0x17D94[139]][_0x17D94[143]][_0x17D94[144]], true, 1500)[_0x17D94[136]][_0x17D94[5]](_0x17DE4._, this)
        }
    }

    function _0x1D384() {
        _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[121]] = true
    }

    function _0x1D3D4() {
        if (_0x1B2B4(_0x17D94)) {
            _0x18064 = false
        }
    }

    function _0x1D424() {
        _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[121]] = true
    }

    function _0x1D474() {
        _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[121]] = true
    }

    function _0x1D4C4() {
        _0x1B174()[_0x17D94[121]] = true
    }

    function _0x1D514() {
        _0x18424 = false
    }

    function _0x18C44(_0x17DE4) {
        return function() {
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1B174())[_0x17D94[140]]({
                y: 300
            }, 500, _0x1A8B4()[_0x17D94[139]][_0x17D94[143]][_0x17D94[142]], true)[_0x17D94[136]][_0x17D94[5]](_0x17DE4._, this)
        }
    }

    function _0x1D564() {
        _0x187E4 = false
    }

    function _0x1D5B4() {
        _0x18384 = false
    }

    function _0x18CE4(_0x17DE4) {
        return function() {
            if (_0x19054(_0x18104, 0)) {
                return
            } else {
                _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 2)][_0x17D94[22]])[_0x17D94[140]]({
                    x: 0,
                    y: 0
                }, 200, _0x1A8B4()[_0x17D94[139]][_0x17D94[146]][_0x17D94[145]], true)
            }; if (_0x19004(_0x18A64, null)) {
                _0x19914()(_0x17D94[35]);
                return
            } else {
                _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 3)][_0x17D94[22]])[_0x17D94[140]]({
                    x: 0,
                    y: 0
                }, 200, _0x1A8B4()[_0x17D94[139]][_0x17D94[146]][_0x17D94[145]], true)[_0x17D94[136]][_0x17D94[5]](_0x17DE4._, this)
            }
        }
    }

    function _0x18D34() {
        return function() {
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 4)])[_0x17D94[140]]({
                x: _0x1B304(87)
            }, 600, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[145]], true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 5)])[_0x17D94[140]]({
                x: 920
            }, 600, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[145]], true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 1)])[_0x17D94[140]]({
                alpha: 0
            }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[145]], true, 500)[_0x17D94[136]][_0x17D94[5]](_0x193C4(), this)
        }
    }

    function _0x1D604() {
        _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[121]] = false
    }

    function _0x1D654() {
        _0x1B174()[_0x17D94[121]] = false
    }

    function _0x1D6A4() {
        _0x17F24 = true
    }

    function _0x1D6F4() {
        _0x18B04 = true
    }

    function _0x1D744() {
        _0x183D4 = null
    }

    function _0x18D84() {
        return function() {
            _0x1D794();
            if (_0x1B2B4(_0x17D94)) {
                _0x19D74()(_0x17D94[38], 1);
                _0x1D7E4();
                return
            };
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AB84())[_0x17D94[140]]({
                x: 601
            }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[143]][_0x17D94[142]], true, 800);
            _0x1D834();
            if (_0x1B2B4(_0x18064)) {
                _0x19D24()(null, true)
            };
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1ABD4())[_0x17D94[147]]({
                x: _0x18EC4(_0x1ABD4()[_0x17D94[21]], 1200)
            }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[138]][_0x17D94[144]], true, 1100);
            _0x1D884();
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1AC24())[_0x17D94[147]]({
                y: _0x18EC4(_0x1AC24()[_0x17D94[20]], 1200)
            }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[143]][_0x17D94[142]], true, 1400);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1B124())[_0x17D94[140]]({
                y: 337.5
            }, 400, _0x1A8B4()[_0x17D94[139]][_0x17D94[148]][_0x17D94[144]], true, 1500)[_0x17D94[136]][_0x17D94[5]](_0x194B4(), this);
            _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[5]](_0x18E74(_0x1A8B4()[_0x17D94[41]][_0x17D94[40]], 3.5), _0x19554(), this);
            if (_0x19004(_0x18154, _0x17D94[46])) {
                _0x19E14()();
                return
            };
            t1 = _0x1A184()[_0x17D94[43]][_0x17D94[42]][_0x17D94[5]](_0x18E74(_0x1A8B4()[_0x17D94[41]][_0x17D94[40]], 2), _0x19504(), this)
        }
    }

    function _0x1D8D4() {
        _0x1A904()[_0x17D94[27]] = true
    }

    function _0x1D924() {
        _0x1A6D4()[_0x17D94[27]] = true
    }

    function _0x1D974() {
        _0x1A904()[_0x17D94[121]] = true
    }

    function _0x1D9C4() {
        _0x1A904()[_0x17D94[123]][_0x17D94[122]] = true
    }

    function _0x1DA14() {
        _0x1A904()[_0x17D94[123]][_0x17D94[124]] = true
    }

    function _0x1DA64() {
        _0x1A904()[_0x17D94[123]][_0x17D94[125]] = true
    }

    function _0x1DAB4() {
        _0x1A904()[_0x17D94[123]][_0x17D94[132]] = 10
    }

    function _0x1DB04() {
        _0x18564 = false
    }

    function _0x1DB54() {
        _0x183D4 = true
    }

    function _0x1DBA4() {
        _0x18B04 = _0x17D94[165]
    }

    function _0x1DBF4() {
        _0x18604 = _0x17D94[111]
    }

    function _0x1DC44(_0x17DE4) {
        _0x17DE4._[_0x17D94[37]] = 0
    }

    function _0x1DC94(_0x17DE4) {
        _0x17DE4._[_0x17D94[37]] = 28
    }

    function _0x1DCE4() {
        startgame = true
    }

    function _0x1DD34(_0x17DE4) {
        _0x17DE4._[_0x17D94[37]] = 0
    }

    function _0x1DD84() {
        _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[121]] = true
    }

    function _0x1DDD4() {
        _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[121]] = true
    }

    function _0x1DE24() {
        _0x18654 = null
    }

    function _0x1DE74() {
        _0x18744 = 1
    }

    function _0x1DEC4() {
        _0x1A184()[_0x18EC4(_0x17D94[77], i)][_0x17D94[121]] = true
    }

    function _0x18DD4() {
        return function() {
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 2)][_0x17D94[22]])[_0x17D94[140]]({
                x: 1,
                y: 1
            }, 600, _0x1A8B4()[_0x17D94[139]][_0x17D94[146]][_0x17D94[142]], true);
            if (_0x1B2B4(_0x17D94)) {
                return
            };
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 3)][_0x17D94[22]])[_0x17D94[140]]({
                x: 1,
                y: 1
            }, 600, _0x1A8B4()[_0x17D94[139]][_0x17D94[146]][_0x17D94[142]], true);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 4)])[_0x17D94[140]]({
                x: 68.5
            }, 600, _0x1A8B4()[_0x17D94[139]][_0x17D94[146]][_0x17D94[144]], true, 500);
            _0x1A184()[_0x17D94[5]][_0x17D94[141]](_0x1A184()[_0x18EC4(_0x17D94[77], 5)])[_0x17D94[140]]({
                x: 733.45
            }, 600, _0x1A8B4()[_0x17D94[139]][_0x17D94[146]][_0x17D94[144]], true)[_0x17D94[136]][_0x17D94[5]](_0x19914(), this)
        }
    }

    function _0x1DF14() {
        if (_0x1B2B4(_0x17D94)) {
            _0x18B04 = true
        }
    }

    function _0x1DF64() {
        _0x18014 = _0x17D94[169]
    }

    function _0x1DFB4() {
        _0x18064 = false
    }

    function _0x1E004() {
        _0x181F4 = 0
    }

    function _0x1E054(_0x17D94) {
        if (_0x17D94._) {
            wasMuted = isMuted
        }
    }

    function _0x1E0A4() {
        _0x18974 = 0
    }

    function _0x1E0F4() {
        wasMuted = false
    }

    function _0x1E144() {
        wasMuted = false
    }

    function _0x1E194(_0x17D94) {
        if (_0x17D94._ && _0x1A224()) {
            wasMuted = true
        }
    }

    function _0x1E1E4() {
        _0x1A774()[_0x17D94[37]] = 1
    }

    function _0x1E234() {
        _0x18744 = _0x17D94[34]
    }

    function _0x1E284() {
        isMuted = false
    }

    function _0x1E2D4() {
        _0x1A774()[_0x17D94[37]] = 0
    }

    function _0x1E324() {
        if (_0x1A224()) {
            _0x1A774()[_0x17D94[37]] = 1
        } else {
            _0x1A774()[_0x17D94[37]] = 0
        }
    }

    function _0x1E374() {
        _0x19EB4()[_0x17D94[172]] = 0.6
    }

    function _0x1D794() {
        _0x1AB84()[_0x17D94[27]] = true
    }

    function _0x1D7E4() {
        _0x188D4 = 0
    }

    function _0x1D834() {
        _0x1ABD4()[_0x17D94[27]] = true
    }

    function _0x1D884() {
        _0x1AC24()[_0x17D94[27]] = true
    }
})()