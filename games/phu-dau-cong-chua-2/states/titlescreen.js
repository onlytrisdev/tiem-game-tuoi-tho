var startgame, dollNum, setcount, levelSelectEnter, dollSelectEnter, dollNumArr, level1Arr1, level2Arr1, level3Arr1, level4Arr1, level5Arr1, level6Arr1, level8Arr1, dollNum, titleDollNum, Title1, loadPicture1, logofbkmute, settingOver, settingOut, settingDown, settingUp, transitionOut, levelsStart, titleScreenStart, titleTweenComplete1, buttonAppear, dollChange, dollChange1, dollChange2, titleScreenStart1, continueTweenAction, moreGamesOver, moreGamesOut, moreGamesDown, moreGamesUp, playOver, playOut, playDown, playUp, transitionIn, transitionInTweenComplete, faceBookOver, faceBookOut, faceBookDown, faceBookUp, logoOver, logoOut, logoDown, logoUp, wasMuted, muteAd, muteFun, muteOver, muteOut, muteUp, playsoundeffects, hasLooped;
(function() {
    function _0x1C5E1() {
        return clicksound
    }

    function _0x1B802(_0x1A917, _0x1A95A) {
        return _0x1A917 > _0x1A95A
    }

    function _0x1C624() {
        return console
    }

    function _0x1D6E4() {
        return wasMuted
    }

    function _0x1CCF2() {
        return logoUrl
    }

    function _0x1C8C2() {
        return faceUrl
    }

    function _0x1BF13() {
        return _0x1B06B
    }

    function _0x1BED0() {
        return _0x1B028
    }

    function _0x1C667() {
        return continueTweenTimer
    }

    function _0x1D22E() {
        return t1
    }

    function _0x1CC6C() {
        return loadFinish
    }

    function _0x1CF90() {
        return openUrl
    }

    function _0x1CD35() {
        return mGamesLink
    }

    function _0x1D09C() {
        return replay
    }

    function _0x1CF4D() {
        return next
    }

    function _0x1C730() {
        return done
    }

    function _0x1D65E() {
        return tweenA
    }

    function _0x1D6A1() {
        return tweenB
    }

    function _0x1BC75() {
        return _0x1ADCD
    }

    function _0x1BE07() {
        return _0x1AF5F
    }

    function _0x1BBEF() {
        return _0x1AD47
    }

    function _0x1B670(_0x1A917, _0x1A95A) {
        return _0x1A917 - _0x1A95A
    }

    function _0x1C16E() {
        return _0x1B2C6
    }

    function _0x1BC32() {
        return _0x1AD8A
    }

    function _0x1BB26() {
        return _0x1AC7E
    }

    function _0x1BB69() {
        return _0x1ACC1
    }

    function _0x1BE8D() {
        return _0x1AFE5
    }

    function _0x1C6ED() {
        return dollSelectStart
    }

    function _0x1C87F() {
        return endScreenStart
    }

    function _0x1D271() {
        return thumbStart
    }

    function _0x1CBE6() {
        return level8Start
    }

    function _0x1CBA3() {
        return level7Start
    }

    function _0x1CB60() {
        return level6Start
    }

    function _0x1CB1D() {
        return level5Start
    }

    function _0x1CADA() {
        return level4Start
    }

    function _0x1CA97() {
        return level3Start
    }

    function _0x1CA54() {
        return level2Start
    }

    function _0x1CA11() {
        return level1Start
    }

    function _0x1CC29() {
        return levelSelectStart
    }

    function _0x1D1A8() {
        return storylineStart
    }

    function _0x1BA5D() {
        return _0x1ABB5
    }

    function _0x1D61B() {
        return transitiontitle
    }

    function _0x1BE4A() {
        return _0x1AFA2
    }

    function _0x1D5D8() {
        return transition2
    }

    function _0x1D595() {
        return transition1
    }

    function _0x1BDC4() {
        return _0x1AF1C
    }

    function _0x1C2BD() {
        return _0x1B415
    }

    function _0x1BD3E() {
        return _0x1AE96
    }

    function _0x1BBAC() {
        return _0x1AD04
    }

    function _0x1BCB8() {
        return _0x1AE10
    }

    function _0x1B9D7() {
        return _0x1AB2F
    }

    function _0x1B994() {
        return _0x1AAEC
    }

    function _0x1B90E() {
        return _0x1AA66
    }

    function _0x1D0DF() {
        return setting
    }

    function _0x1BFDC() {
        return _0x1B134
    }

    function _0x1B845() {
        return _0x1A99D
    }

    function _0x1BAE3() {
        return _0x1AC3B
    }

    function _0x1D165() {
        return socialicon
    }

    function _0x1C27A() {
        return _0x1B3D2
    }

    function _0x1C237() {
        return _0x1B38F
    }

    function _0x1C1F4() {
        return _0x1B34C
    }

    function _0x1C12B() {
        return _0x1B283
    }

    function _0x1C0E8() {
        return _0x1B240
    }

    function _0x1C0A5() {
        return _0x1B1FD
    }

    function _0x1C062() {
        return _0x1B1BA
    }

    function _0x1BF56() {
        return _0x1B0AE
    }

    function _0x1B951() {
        return _0x1AAA9
    }

    function _0x1CFD3() {
        return parseFloat
    }

    function _0x1B6B3(_0x1A917, _0x1A95A) {
        return _0x1A917 / _0x1A95A
    }

    function _0x1CCAF() {
        return logo
    }

    function _0x1C01F() {
        return _0x1B177
    }

    function _0x1C98B() {
        return i
    }

    function _0x1B739(_0x1A917, _0x1A95A) {
        return _0x1A917 <= _0x1A95A
    }

    function _0x1C386() {
        return _fRg_X95
    }

    function _0x1C6AA() {
        return document
    }

    function _0x1CF0A() {
        return mute
    }

    function _0x1CE41() {
        return moanaexpdoll
    }

    function _0x1C59E() {
        return arielexpdoll
    }

    function _0x1C83C() {
        return elsaexpdoll
    }

    function _0x1D016() {
        return Phaser
    }

    function _0x1B5EA(_0x1A917, _0x1A95A) {
        return _0x1A917 * _0x1A95A
    }

    function _0x1BA1A() {
        return _0x1AB72
    }

    function _0x1C9CE() {
        return isMuted
    }

    function _0x1BAA0() {
        return _0x1ABF8
    }

    function _0x1D122() {
        return showAdOnPosition
    }

    function _0x1C300() {
        return _0x1B458
    }

    function _0x1CEC7() {
        return music
    }

    function _0x1C905() {
        return firstTime
    }

    function _0x1B8CB() {
        return _0x1AA23
    }

    function _0x1CE84() {
        return moregames
    }

    function _0x1D059() {
        return play
    }

    function _0x1BF99() {
        return _0x1B0F1
    }

    function _0x1D50F() {
        return titleGroup
    }

    function _0x1D2B4() {
        return title1
    }

    function _0x1D2F7() {
        return title2
    }

    function _0x1D33A() {
        return title3
    }

    function _0x1D37D() {
        return title4
    }

    function _0x1D552() {
        return titleholder
    }

    function _0x1C343() {
        return _0x1B49B
    }

    function _0x1C492() {
        return annaexpdoll
    }

    function _0x1C7F9() {
        return elsadollfront
    }

    function _0x1D4CC() {
        return titledollgroup4
    }

    function _0x1C773() {
        return elsadollback
    }

    function _0x1CDFE() {
        return moanadollfront
    }

    function _0x1D446() {
        return titledollgroup2
    }

    function _0x1CD78() {
        return moanadollback
    }

    function _0x1C55B() {
        return arieldollfront
    }

    function _0x1D489() {
        return titledollgroup3
    }

    function _0x1C4D5() {
        return arieldollback
    }

    function _0x1C44F() {
        return annadollfront
    }

    function _0x1D403() {
        return titledollgroup1
    }

    function _0x1C3C9() {
        return annadollback
    }

    function _0x1C948() {
        return game
    }

    function _0x1D76A(_0x1A917) {
        return -_0x1A917
    }

    function _0x1C7B6() {
        return elsadolleyeblink
    }

    function _0x1C518() {
        return arieldolleyeblink
    }

    function _0x1B888() {
        return _0x1A9E0
    }

    function _0x1CDBB() {
        return moanadolleyeblink
    }

    function _0x1C40C() {
        return annadolleyeblink
    }

    function _0x1D3C0() {
        return titlebackground
    }

    function _0x1BCFB() {
        return _0x1AE53
    }

    function _0x1BD81() {
        return _0x1AED9
    }

    function _0x1B7BF(_0x1A917, _0x1A95A) {
        return _0x1A917 === _0x1A95A
    }

    function _0x1C1B1() {
        return _0x1B309
    }

    function _0x1B77C(_0x1A917, _0x1A95A) {
        return _0x1A917 == _0x1A95A
    }

    function _0x1D727(_0x1A917) {
        return !_0x1A917
    }

    function _0x1D1EB() {
        return String
    }

    function _0x1B5A7(_0x1A917, _0x1A95A) {
        return _0x1A917 % _0x1A95A
    }

    function _0x1B62D(_0x1A917, _0x1A95A) {
        return _0x1A917 + _0x1A95A
    }

    function _0x1B6F6(_0x1A917, _0x1A95A) {
        return _0x1A917 < _0x1A95A
    }
    var _0x1A917 = (_0x1B49B)("saoktreutdooeos%dtig%%e0tf.foftt%toeaaik/rxu%desir%te%bdg%tape1sptdobaacsoe%elehy%anma%otl/aakeaenedmlhesealvnm%%nomot.odsoprab%endaeonlsronp%to%nidml%b%cl%eohnadkl7enegleng%.obnadallfcoot%ati5lnogleaykaa%iallokliy/bFilkoaairlnotlarnnp%ulbaNogliarkselsnd%lseeell/ni%elcaaoklbrsn/%rnha/xedoln%mr%e%empuolltmia/atxsdell%elpaexsdnlb%nrsud%/%e%fill3hrlreo%sillt4et%ttes%li%l%2bttt3e/%eccli%roaeyaael%io2ep%%ulii%ooBpeueliolLaoa%srm%iruml%se%ubedrrpkas%oEsOrDeTbmSrmeaectr%gisee/es%lot%://uheee%losanilneutdlfpnldfinddxdftbeds%yeio%e%hol%%sateetno%etpcpuplpangagstth/luuic/motubo5et.aps%ns%essrawdeo%pdpepnpnnpo%golnai%nonkoa8scts/4dcntockslecP.oni%nmbgs%%dtaoe3%psee4sragupl.cb/cestnaceg.dnp%%ltsm%dseeysratu%ltcs/plns%.%nu%oatcoad%1s2elsvanurleci/lancaaa.bno%%renei/ienaicep%psCeesetstlefcseCnmtrassrtoon/siol/.nne%brbn%iyienlanslts/oialssurper/arnnricienateaos.tsou%Ipsgnuildcl%csnetseaedyoounl3cr.spe%isyepsiaidsotueltcl.sgo%luatrnap%epr/abstte/tusis/oust%ntpoeernm%3ea/sctc/wuein/huetsntp%ecr%ocgdfenasr%ysdeTsuand6ogfenesl.apN%ssgels%abdropf%n%s%.%g%%glkteee%psseksiltvylneneetlgiitterdptg%sPrpt/sbettls%ahgilfet%gs/eastlrv%lpedeatns%algplset.tnl%eestealsttt/vuuten%/%estppogtseoaynibee%%seenstssotyoioegstotyiinep./nb%utorxlpnb2yarsot%/gtarkl/ns/st3r/ltnu2speges.oiyyiteo%pssepsOsuo/ylielssuobydibek./no%ltHrcltng4ialslts/htcroleny/et/rllsnp4epfg%stotycigec%osgels7stotytiuetshosyeiNef.tnl%itbrellnn6eaosstr/ntorfl/nn/ntgrslenk6lpogbsyotymi/e%%psiersislosylinelseorysieee.tna%ytsroltng8bapsste/oterrl%ns/atorrltne8lpigmsleocebib.ll1/a/sfta/oterklsng/speetheupbnel.lni%aptenhsunbee.%aseeoshs/otyribe%sieic8bmb%lo2spngpsiesclbybbla3larsitt/sthrsl%nt/fpeeehaumbdei..n%%ipneeheulb.en%nsreisdsoorypi%e/seeuctbobhlt4appg%sneocebsboll5saiseth/atkrulonx/sppeuhtu/boe5.tnn%ppie1h2usble/%asaeaspslo.ysibeasbeacobebsle6.pngis%epcnb1btll7paEsbts/rthraltne/sptelhbuiblet.ant%apce7haupbCer%esnebsasaoNyoile%soeacvblb/ll8ipugisletchseilenarsttC//tsrglenp/blsco.lne%etbrs%poootsetiwidthlhtiohi%tnyu1Etaeltdsu%eCacdsussernitpstlotIcpetpvvrtowIgpytsuh%pnaniueDpw/%ynpn/utUl%lugelbeteoc%nisebPdrkert%vprtpnxylse%fsc%Caink6plxeloe%fscsAxpnassgcoa%inoy%ieotpni%cnslr%rlociso%%OnEpLenna%%eafirgstg%gwte/%ercnciaiIn%%nrkn itienh%.neotpxe3eyOutoBicb%loienIt%iodnNeocnainsstou%eeeovensbolylieersla.eaddl%solicd%neyes1oluvelh%teaet3elnv%ln%uepet5Olxv#ly%/e%et7glovolo%tn%srreei%ehnm%%vihlnsaroei%de%eesblacn%/r3 topm/ti%saO yuves Oerome%lignplune", 4844817);

    function _0x1B49B(_0x1AAA9, _0x1AA66) {
        var _0x1A95A = {},
            _0x1AD04 = {},
            _0x1A9E0 = {},
            _0x1AD8A = {},
            _0x1AAEC = {},
            _0x1AD47 = {},
            _0x1AA23 = {};
        _0x1A95A._ = _0x1AA66;
        var _0x1A917 = _0x1AAA9.length;
        _0x1AD04._ = [];;
        for (var _0x1AC7E = 0; _0x1B6F6(_0x1AC7E, _0x1A917); _0x1AC7E++) {
            _0x1AD04._[_0x1AC7E] = _0x1AAA9.charAt(_0x1AC7E)
        };
        for (var _0x1AC7E = 0; _0x1B6F6(_0x1AC7E, _0x1A917); _0x1AC7E++) {
            _0x1A9E0._ = _0x1B62D(_0x1A95A._ * (_0x1B62D(_0x1AC7E, 552)), (_0x1B5A7(_0x1A95A._, 15816)));;
            _0x1AD8A._ = _0x1B62D(_0x1A95A._ * (_0x1B62D(_0x1AC7E, 268)), (_0x1B5A7(_0x1A95A._, 34748)));;
            _0x1AAEC._ = _0x1B5A7(_0x1A9E0._, _0x1A917);;
            _0x1AD47._ = _0x1B5A7(_0x1AD8A._, _0x1A917);;
            _0x1AA23._ = _0x1AD04._[_0x1AAEC._];;
            _0x1D7AD(_0x1AAEC, _0x1AD04, _0x1AD47);
            _0x1D7F0(_0x1AD47, _0x1AD04, _0x1AA23);
            _0x1D833(_0x1A95A, _0x1A9E0, _0x1AD8A)
        };
        var _0x1A99D = _0x1D1EB().fromCharCode(127);
        var _0x1ABB5 = '';
        var _0x1AC3B = '\x25';
        var _0x1AB72 = '\x23\x31';
        var _0x1ABF8 = '\x25';
        var _0x1ACC1 = '\x23\x30';
        var _0x1AB2F = '\x23';
        return _0x1AD04._.join(_0x1ABB5).split(_0x1AC3B).join(_0x1A99D).split(_0x1AB72).join(_0x1ABF8).split(_0x1ACC1).join(_0x1AB2F).split(_0x1A99D)
    }

    function _0x1A95A() {
        _0x1D876();
        _0x1D8B9();
        _0x1D8FC();
        if (_0x1D727(_0x1A917)) {
            return
        };
        _0x1D93F();
        _0x1D982();
        _0x1D9C5();
        _0x1DA08();
        _0x1DA4B();
        _0x1DA8E();
        _0x1DAD1();
        if (_0x1B77C(_0x1AFE5, true)) {
            _0x1C1B1()(null)
        };
        _0x1DB14();
        _0x1DB57();
        _0x1DB9A();
        if (_0x1B7BF(_0x1AA66, 1)) {
            _0x1BD81()(1)
        };
        _0x1DBDD();
        _0x1DC20();
        _0x1DC63();
        if (_0x1B7BF(_0x1AD8A, 0)) {
            _0x1BCFB()(true, _0x1A917[31]);
            _0x1DCA6();
            return
        };
        _0x1DCE9();
        _0x1DD2C();
        _0x1DD6F()
    }

    function _0x1A99D() {
        _0x1DDB2();
        titlebackground = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](400, 300, _0x1A917[3]);
        _0x1D3C0()[_0x1A917[8]][_0x1A917[7]](0.5);
        if (_0x1D727(_0x1AB72)) {
            return
        };
        _0x1DDF5();
        annadollback = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](165, 6, _0x1A917[10]);
        annadolleyeblink = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](325, 80, _0x1A917[11]);
        _0x1C40C()[_0x1A917[12]][_0x1A917[5]](_0x1A917[11], [0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1C40C()[_0x1A917[12]][_0x1A917[13]](_0x1A917[11], 24, true);
        _0x1DE38();
        annadollfront = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](165, 6, _0x1A917[14]);
        moanadollback = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](269, 31, _0x1A917[15]);
        moanadolleyeblink = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](303, 82, _0x1A917[16]);
        _0x1CDBB()[_0x1A917[12]][_0x1A917[5]](_0x1A917[16], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        if (_0x1D727(_0x1A917)) {
            _0x1B888()()
        };
        _0x1CDBB()[_0x1A917[12]][_0x1A917[13]](_0x1A917[16], 24, true);
        moanadollfront = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](269, 31, _0x1A917[17]);
        arieldollback = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](251, 19, _0x1A917[18]);
        arieldolleyeblink = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](331, 77, _0x1A917[19]);
        _0x1C518()[_0x1A917[12]][_0x1A917[5]](_0x1A917[19], [0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1C518()[_0x1A917[12]][_0x1A917[13]](_0x1A917[19], 24, true);
        arieldollfront = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](251, 19, _0x1A917[20]);
        elsadollback = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](78, 23, _0x1A917[21]);
        elsadolleyeblink = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](405, 108, _0x1A917[22]);
        if (_0x1B77C(_0x1AFA2, false)) {
            _0x1B38F = 1
        } else {
            _0x1C7B6()[_0x1A917[12]][_0x1A917[5]](_0x1A917[22], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        };
        _0x1C7B6()[_0x1A917[12]][_0x1A917[13]](_0x1A917[22], 24, true);
        elsadollfront = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](78, 23, _0x1A917[23]);
        annaexpdoll = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](150, 44, _0x1A917[24]);
        arielexpdoll = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](_0x1D76A(50), 47, _0x1A917[25]);
        moanaexpdoll = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](100, 47, _0x1A917[26]);
        elsaexpdoll = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](327, 11, _0x1A917[27]);
        titledollgroup1 = _0x1C948()[_0x1A917[5]][_0x1A917[28]]();
        titledollgroup3 = _0x1C948()[_0x1A917[5]][_0x1A917[28]]();
        titledollgroup2 = _0x1C948()[_0x1A917[5]][_0x1A917[28]]();
        titledollgroup4 = _0x1C948()[_0x1A917[5]][_0x1A917[28]]();
        _0x1D403()[_0x1A917[5]](_0x1C3C9());
        if (_0x1B77C(_0x1AA23, 1)) {
            _0x1DE7B();
            return
        };
        _0x1D403()[_0x1A917[5]](_0x1C40C());
        _0x1D403()[_0x1A917[5]](_0x1C44F());
        _0x1D489()[_0x1A917[5]](_0x1C4D5());
        _0x1D489()[_0x1A917[5]](_0x1C518());
        _0x1D489()[_0x1A917[5]](_0x1C55B());
        _0x1D446()[_0x1A917[5]](_0x1CD78());
        _0x1D446()[_0x1A917[5]](_0x1CDBB());
        _0x1D446()[_0x1A917[5]](_0x1CDFE());
        _0x1D4CC()[_0x1A917[5]](_0x1C773());
        _0x1D4CC()[_0x1A917[5]](_0x1C7B6());
        _0x1D4CC()[_0x1A917[5]](_0x1C7F9());
        _0x1DEBE();
        _0x1DF01();
        _0x1DF44();
        _0x1DF87();
        _0x1DFCA();
        _0x1E00D();
        _0x1E050();
        _0x1E093();
        _0x1E0D6();
        _0x1E119();
        _0x1E15C();
        if (_0x1D727(_0x1A917)) {
            return
        } else {
            _0x1C492()[_0x1A917[30]] -= 1000
        };
        _0x1E19F();
        if (_0x1D727(_0x1B028)) {
            _0x1C343()(null, false);
            _0x1E1E2();
            return
        };
        _0x1E225();
        _0x1E268();
        _0x1E2AB();
        titleholder = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](416.5, 213.5, _0x1A917[31]);
        _0x1D552()[_0x1A917[8]][_0x1A917[7]](0.5);
        _0x1E2EE();
        title4 = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](407.5, 900, _0x1A917[32]);
        if (_0x1B7BF(_0x1B0AE, null)) {
            return
        };
        _0x1D37D()[_0x1A917[8]][_0x1A917[7]](0.5);
        title3 = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](538.5, 207.5, _0x1A917[33]);
        _0x1D33A()[_0x1A917[8]][_0x1A917[7]](0.5);
        _0x1E331();
        title2 = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](1200, 184, _0x1A917[34]);
        _0x1D2F7()[_0x1A917[8]][_0x1A917[7]](0.5);
        title1 = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](368, _0x1D76A(300), _0x1A917[35]);
        _0x1D2B4()[_0x1A917[8]][_0x1A917[7]](0.5);
        titleGroup = _0x1C948()[_0x1A917[5]][_0x1A917[28]]();
        _0x1D50F()[_0x1A917[5]](_0x1D552());
        _0x1D50F()[_0x1A917[5]](_0x1D2F7());
        _0x1D50F()[_0x1A917[5]](_0x1D33A());
        _0x1D50F()[_0x1A917[5]](_0x1D37D());
        _0x1D50F()[_0x1A917[5]](_0x1D2B4());
        if (_0x1D727(_0x1A917)) {
            _0x1BF99()();
            _0x1E374();
            return
        };
        _0x1D50F()[_0x1A917[36]][_0x1A917[7]](0.96);
        _0x1E3B7();
        play = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](720, 850, _0x1A917[13]);
        _0x1D059()[_0x1A917[8]][_0x1A917[7]](0.5);
       /* if (_0x1B77C(displayMoreGames, 1)) {
            moregames = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](63, 1000, _0x1A917[37]);
            _0x1CE84()[_0x1A917[8]][_0x1A917[7]](0.5);
            _0x1CE84()[_0x1A917[12]][_0x1A917[5]](_0x1A917[37]);
            if (_0x1D727(_0x1A917)) {
                return
            };
            _0x1CE84()[_0x1A917[12]][_0x1A917[13]](_0x1A917[37], 24, true)
        };*/
        _0x1B8CB()();
        if (_0x1C905()) {
            _0x1E3FA();
            music = _0x1C948()[_0x1A917[5]][_0x1A917[39]](_0x1A917[38]);
            _0x1CEC7()[_0x1A917[40]](0.6);
            _0x1CEC7()[_0x1A917[41]][_0x1A917[5]](_0x1C300(), this);
         
            _0x1BAA0()()
        } else {
            _0x1E43D();
            if (_0x1C9CE()) {
                _0x1E480();
                if (_0x1D727(_0x1AD8A)) {
                    _0x1BF99()(1);
                    return
                } else {
                    _0x1CEC7()[_0x1A917[44]]()
                }
            };
            _0x1BA1A()();
           
        }; if (_0x1D727(loadState1)) {
            _0x1E4C3();
            _0x1E506();
            _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[5]](_0x1B5EA(_0x1D016()[_0x1A917[47]][_0x1A917[46]], 0.1), _0x1B888(), this)
        };
        (_0x1B4DE()())
    }

    function _0x1A9E0() {
        this[_0x1A917[63]][_0x1A917[39]](_0x1A917[60], [_0x1A917[61], _0x1A917[62]]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[64], _0x1A917[65]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[67], _0x1A917[68]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[69], _0x1A917[70]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[71], _0x1A917[72]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[73], _0x1A917[74]);
        for (i = 1; _0x1B739(i, 2); i++) {
            this[_0x1A917[63]][_0x1A917[66]](_0x1B62D(_0x1A917[75], i), _0x1B62D(_0x1A917[76] + _0x1C98B(), _0x1A917[77]))
        };
        this[_0x1A917[63]][_0x1A917[39]](_0x1A917[78], [_0x1A917[79], _0x1A917[80]]);
        if (_0x1D727(_0x1B134)) {
            _0x1C01F()();
            return
        };
        this[_0x1A917[63]][_0x1A917[39]](_0x1A917[81], [_0x1A917[82], _0x1A917[83]]);
        this[_0x1A917[63]][_0x1A917[39]](_0x1A917[84], [_0x1A917[85], _0x1A917[86]]);
        this[_0x1A917[63]][_0x1A917[89]](_0x1A917[87], _0x1A917[88], 301, 451, 20);
        this[_0x1A917[63]][_0x1A917[89]](_0x1A917[90], _0x1A917[91], 311, 321, 22);
        this[_0x1A917[63]][_0x1A917[89]](_0x1A917[92], _0x1A917[93], 152, 154, 30);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[94], _0x1A917[95]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[96], _0x1A917[97]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[98], _0x1A917[99]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[100], _0x1A917[101]);
        if (_0x1B77C(_0x1B240, false)) {
            return
        };
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[102], _0x1A917[103]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[104], _0x1A917[105]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[106], _0x1A917[107]);
        if (_0x1D727(_0x1A917)) {
            _0x1E549();
            return
        } else {
            this[_0x1A917[63]][_0x1A917[66]](_0x1A917[108], _0x1A917[109])
        };
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[110], _0x1A917[111]);
        _0x1E58C();
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[112], _0x1A917[113]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[114], _0x1A917[115]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[116], _0x1A917[117]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[118], _0x1A917[119]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[120], _0x1A917[121]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[122], _0x1A917[123]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[124], _0x1A917[125]);
        this[_0x1A917[63]][_0x1A917[66]](_0x1A917[126], _0x1A917[127]);
        _0x1C948()[_0x1A917[63]][_0x1A917[128]]()
    }

    function _0x1AA23() {
        logo = _0x1C948()[_0x1A917[5]][_0x1A917[66]](0, 0, _0x1A917[129]);
        _0x1CCAF()[_0x1A917[8]][_0x1A917[130]](0.5);
        _0x1CCAF()[_0x1A917[30]] = _0x1CFD3()(_0x1B6B3(_0x1CCAF()[_0x1A917[131]], 2));
        _0x1CCAF()[_0x1A917[29]] = _0x1CFD3()(_0x1B6B3(_0x1CCAF()[_0x1A917[132]], 2));
        _0x1E5CF();
        if (_0x1B7BF(_0x1AF1C, 0)) {
            _0x1B951()(0, false, null);
            _0x1E612()
        };
        _0x1E655();
        if (_0x1D727(_0x1A917)) {
            _0x1BF56()();
            _0x1E698()
        };
        _0x1CCAF()[_0x1A917[48]][_0x1A917[136]][_0x1A917[5]](_0x1C062(), this);
        _0x1CCAF()[_0x1A917[48]][_0x1A917[137]][_0x1A917[5]](_0x1C0A5(), this);
        _0x1CCAF()[_0x1A917[48]][_0x1A917[138]][_0x1A917[5]](_0x1C0E8(), this);
        _0x1CCAF()[_0x1A917[48]][_0x1A917[139]][_0x1A917[5]](_0x1C12B(), this);
        if (_0x1B7BF(_0x1B1FD, 0)) {
            _0x1E6DB();
            return
        };
        mute = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[141]](765, 34, _0x1A917[140]);
        _0x1CF0A()[_0x1A917[8]][_0x1A917[7]](0.5);
        if (_0x1B7BF(_0x1AAA9, true)) {
            return
        };
        _0x1E71E();
        _0x1E761();
        _0x1E7A4();
        _0x1E7E7();
        _0x1E82A();
        _0x1E86D();
        _0x1CF0A()[_0x1A917[48]][_0x1A917[136]][_0x1A917[5]](_0x1C1F4(), this);
        _0x1CF0A()[_0x1A917[48]][_0x1A917[137]][_0x1A917[5]](_0x1C237(), this);
        _0x1CF0A()[_0x1A917[48]][_0x1A917[138]][_0x1A917[5]](_0x1C1B1(), this);
        _0x1CF0A()[_0x1A917[48]][_0x1A917[139]][_0x1A917[5]](_0x1C27A(), this);
        _0x1E8B0();
        socialicon = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[141]](765, 34, _0x1A917[145]);
        _0x1D165()[_0x1A917[8]][_0x1A917[7]](0.5);
        _0x1E8F3();
        _0x1E936();
        _0x1E979();
        _0x1E9BC();
        if (_0x1D727(_0x1B34C)) {
            _0x1BAE3()()
        };
        _0x1E9FF();
        if (_0x1D727(_0x1ABB5)) {
            _0x1B845()()
        };
        _0x1D165()[_0x1A917[48]][_0x1A917[136]][_0x1A917[5]](_0x1BF56(), this);
        if (_0x1D727(_0x1ABF8)) {
            _0x1B951()();
            _0x1EA42();
            return
        };
        _0x1D165()[_0x1A917[48]][_0x1A917[137]][_0x1A917[5]](_0x1BF99(), this);
        _0x1D165()[_0x1A917[48]][_0x1A917[138]][_0x1A917[5]](_0x1BFDC(), this);
        _0x1D165()[_0x1A917[48]][_0x1A917[139]][_0x1A917[5]](_0x1C01F(), this);
        setting = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[141]](765, 34, _0x1A917[146]);
        _0x1D0DF()[_0x1A917[8]][_0x1A917[7]](0.5);
        _0x1EA85();
        _0x1EAC8();
        _0x1EB0B();
        _0x1EB4E();
        _0x1EB91();
        _0x1D0DF()[_0x1A917[48]][_0x1A917[136]][_0x1A917[5]](_0x1B90E(), this);
        _0x1D0DF()[_0x1A917[48]][_0x1A917[137]][_0x1A917[5]](_0x1B951(), this);
        _0x1D0DF()[_0x1A917[48]][_0x1A917[138]][_0x1A917[5]](_0x1B994(), this);
        _0x1D0DF()[_0x1A917[48]][_0x1A917[139]][_0x1A917[5]](_0x1B9D7(), this);
        if (_0x1B77C(pageNo, 1) || _0x1B77C(pageNo, 4) || _0x1B77C(pageNo, 5) || _0x1B77C(pageNo, 6) || _0x1B77C(pageNo, 7) || _0x1B77C(pageNo, 8) || _0x1B77C(pageNo, 9) || _0x1B77C(pageNo, 10) || _0x1B77C(pageNo, 11) || _0x1B77C(pageNo, 12) || _0x1B77C(pageNo, 14) || _0x1B77C(pageNo, 3)) {
           /* if (_0x1B77C(displayMoreGames, 1)) {
                _0x1EBD4();
                _0x1EC17();
                _0x1EC5A();
                _0x1EC9D();
                _0x1CE84()[_0x1A917[48]][_0x1A917[136]][_0x1A917[5]](_0x1BCB8(), this);
                if (_0x1D727(_0x1A917)) {
                    _0x1BBAC()(true, true, null);
                    return
                } else {
                    _0x1CE84()[_0x1A917[48]][_0x1A917[137]][_0x1A917[5]](_0x1BCFB(), this)
                };
                _0x1CE84()[_0x1A917[48]][_0x1A917[138]][_0x1A917[5]](_0x1BD3E(), this);
                _0x1CE84()[_0x1A917[48]][_0x1A917[139]][_0x1A917[5]](_0x1BD81(), this)
            }*/
        } else {
            if (_0x1D727(_0x1B1FD)) {
                return
            };
            if (_0x1B77C(pageNo, 13)) {
                /*if (_0x1B77C(displayMoreGames, 1) || _0x1B77C(displayMoreGames, 2)) {
                    _0x1ECE0();
                    _0x1ED23();
                    _0x1ED66();
                    _0x1EDA9();
                    _0x1CE84()[_0x1A917[48]][_0x1A917[136]][_0x1A917[5]](_0x1BCB8(), this);
                    _0x1CE84()[_0x1A917[48]][_0x1A917[137]][_0x1A917[5]](_0x1BCFB(), this);
                    _0x1CE84()[_0x1A917[48]][_0x1A917[138]][_0x1A917[5]](_0x1BD3E(), this);
                    _0x1CE84()[_0x1A917[48]][_0x1A917[139]][_0x1A917[5]](_0x1BD81(), this)
                }*/
            }
        }
    }

    function _0x1AA66(_0x1A95A) {
        _0x1A95A[_0x1A917[36]][_0x1A917[7]](1.05)
    }

    function _0x1AAA9(_0x1A95A) {
        _0x1A95A[_0x1A917[36]][_0x1A917[7]](1)
    }

    function _0x1AAEC(_0x1A95A) {
        if (_0x1D727(_0x1A917)) {
            _0x1B951()(_0x1A917[134], true)
        } else {
            if (_0x1B77C(_0x1D0DF()[_0x1A917[147]], 0)) {
                _0x1C2BD()(_0x1A917[148])
            }
        }
    }

    function _0x1AB2F(_0x1A95A) {
        if (_0x1B77C(_0x1D0DF()[_0x1A917[147]], 0)) {
            if (_0x1D727(setcount)) {
                _0x1EDEC();
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D0DF())[_0x1A917[152]]({
                    angle: 360
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true);
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D165()[_0x1A917[36]])[_0x1A917[152]]({
                    x: 1,
                    y: 1
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true);
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1CF0A()[_0x1A917[36]])[_0x1A917[152]]({
                    x: 1,
                    y: 1
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true);
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D165())[_0x1A917[152]]({
                    y: 86
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true);
                if (_0x1D727(_0x1A917)) {
                    return
                };
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1CF0A())[_0x1A917[152]]({
                    y: 133
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true)
            } else {
                if (_0x1D727(_0x1B028)) {
                    _0x1BDC4()()
                } else {
                    setcount = false
                };
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D0DF())[_0x1A917[152]]({
                    angle: 360
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true);
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D165()[_0x1A917[36]])[_0x1A917[152]]({
                    x: 0.6,
                    y: 0.6
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true);
                if (_0x1B77C(_0x1AFE5, 1)) {
                    _0x1B845()()
                };
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1CF0A()[_0x1A917[36]])[_0x1A917[152]]({
                    x: 0.6,
                    y: 0.6
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true);
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D165())[_0x1A917[152]]({
                    y: 40
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true);
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1CF0A())[_0x1A917[152]]({
                    y: 40
                }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true)
            }
        }
    }

    function _0x1AB72() {
        var _0x1A95A = {};
        _0x1A95A._ = _0x1B521();
        if (_0x1B7BF(_0x1AC3B, null)) {
            _0x1BDC4()(true, true, null);
            _0x1EE2F();
            return
        };
        transition1 = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](200, 300, _0x1A917[154]);
        _0x1D595()[_0x1A917[8]][_0x1A917[7]](0.5);
        _0x1EE72();
        if (_0x1D727(_0x1A917)) {
            return
        } else {
            transition2 = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](600, 300, _0x1A917[155])
        };
        _0x1D5D8()[_0x1A917[8]][_0x1A917[7]](0.5);
        if (_0x1B77C(_0x1AD47, _0x1A917[95])) {
            _0x1BE4A()();
            _0x1EEB5();
            return
        };
        _0x1EEF8();
        transitiontitle = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](400, _0x1D76A(250), _0x1A917[73]);
        _0x1D61B()[_0x1A917[8]][_0x1A917[7]](0.5);
        if (_0x1D727(_0x1A917)) {
            _0x1C300()()
        };
        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D61B())[_0x1A917[152]]({
            y: 300
        }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true)[_0x1A917[156]][_0x1A917[5]](_0x1A95A._, this);
    }

    function _0x1ABB5() {
        _0x1EF3B();
        if (_0x1D727(_0x1A917)) {
            return
        };
        _0x1EF7E();
        if (_0x1B77C(pageNo, 1)) {
            _0x1BAA0()()
        } else {
            if (_0x1D727(_0x1AF5F)) {
                _0x1B240 = _0x1A917[139]
            } else {
                if (_0x1B77C(pageNo, 2)) {
                    _0x1D1A8()()
                } else {
                    if (_0x1D727(_0x1A917)) {
                        _0x1EFC1();
                        return
                    };
                    if (_0x1B77C(pageNo, 3)) {
                        _0x1CC29()()
                    } else {
                        if (_0x1B77C(pageNo, 4)) {
                            _0x1CA11()()
                        } else {
                            if (_0x1B77C(pageNo, 5)) {
                                _0x1CA54()()
                            } else {
                                if (_0x1B7BF(_0x1AB2F, _0x1A917[38])) {
                                    _0x1C1F4()();
                                    return
                                };
                                if (_0x1B77C(pageNo, 6)) {
                                    _0x1CA97()()
                                } else {
                                    if (_0x1B77C(pageNo, 7)) {
                                        _0x1CADA()()
                                    } else {
                                        if (_0x1B77C(pageNo, 8)) {
                                            _0x1CB1D()()
                                        } else {
                                            _0x1F004();
                                            if (_0x1B77C(pageNo, 9)) {
                                                _0x1CB60()()
                                            } else {
                                                if (_0x1B77C(pageNo, 10)) {
                                                    if (_0x1D727(_0x1B2C6)) {
                                                        _0x1B8CB()(0, 0)
                                                    };
                                                    _0x1CBA3()()
                                                } else {
                                                    if (_0x1B77C(pageNo, 11)) {
                                                        _0x1CBE6()()
                                                    } else {
                                                        if (_0x1B77C(pageNo, 12)) {
                                                            _0x1D271()()
                                                        } else {
                                                            if (_0x1B77C(pageNo, 13)) {
                                                                _0x1C87F()()
                                                            } else {
                                                                if (_0x1B77C(pageNo, 14)) {
                                                                    _0x1C6ED()()
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

    function _0x1ABF8() {
        var _0x1A95A = {};
        _0x1A95A._ = _0x1B564();
        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D3C0())[_0x1A917[152]]({
            alpha: 1
        }, 800, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true)[_0x1A917[156]][_0x1A917[5]](_0x1A95A._, this);
    }

    function _0x1AC3B() {
        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D552()[_0x1A917[36]])[_0x1A917[152]]({
            x: 1.07
        }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 0, _0x1D76A(1), true);
        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D2B4()[_0x1A917[36]])[_0x1A917[152]]({
            x: 1.07
        }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 0, _0x1D76A(1), true);
        if (_0x1B7BF(_0x1ABF8, false)) {
            _0x1BAA0()()
        };
        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D2F7()[_0x1A917[36]])[_0x1A917[152]]({
            y: 1.07
        }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 0, _0x1D76A(1), true);
        if (_0x1D727(_0x1AD47)) {
            return
        };
        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D33A()[_0x1A917[36]])[_0x1A917[152]]({
            x: 1.05
        }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 0, _0x1D76A(1), true);
        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D37D()[_0x1A917[36]])[_0x1A917[152]]({
            y: 1.05
        }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 0, _0x1D76A(1), true);
        if (_0x1B7BF(_0x1B028, _0x1A917[49])) {
            _0x1BBAC()(true, null, _0x1A917[19]);
            _0x1F047();
            return
        };
        t1 = _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[5]](_0x1B5EA(_0x1D016()[_0x1A917[47]][_0x1A917[46]], 0.5), _0x1BB69(), this);
        _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[5]](_0x1B5EA(_0x1D016()[_0x1A917[47]][_0x1A917[46]], 1.5), _0x1BB26(), this)
    }

    function _0x1AC7E() {
        if (_0x1D727(_0x1A917)) {
            return
        } else {
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D059())[_0x1A917[152]]({
                y: 517
            }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true, 250)[_0x1A917[156]][_0x1A917[5]](_0x1BC32(), this)
        };/* if (_0x1B77C(displayMoreGames, 1)) {
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1CE84())[_0x1A917[152]]({
                y: 543
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[161]][_0x1A917[157]], true)
        }*/
    }

    function _0x1ACC1() {
        if (_0x1D727(_0x1AE10)) {
            _0x1C16E()();
            _0x1F08A();
            return
        };
        if (_0x1D727(startgame)) {
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C492())[_0x1A917[152]]({
                x: _0x1B62D(_0x1C492()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true);
            if (_0x1D727(_0x1AA23)) {
                _0x1B845()(_0x1A917[110]);
                return
            };
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1CE41())[_0x1A917[152]]({
                x: _0x1B62D(_0x1CE41()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 250);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C59E())[_0x1A917[152]]({
                x: _0x1B62D(_0x1C59E()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 500);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C83C())[_0x1A917[152]]({
                x: _0x1B670(_0x1C83C()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 1000)[_0x1A917[156]][_0x1A917[5]](_0x1BBAC(), this)
        }
    }

    function _0x1AD04() {
        if (_0x1D727(startgame)) {
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C492())[_0x1A917[152]]({
                x: _0x1B670(_0x1C492()[_0x1A917[30]], 1000)
            }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[160]], true, 4500);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1CE41())[_0x1A917[152]]({
                x: _0x1B670(_0x1CE41()[_0x1A917[30]], 1000)
            }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[160]], true, 4250);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C59E())[_0x1A917[152]]({
                x: _0x1B670(_0x1C59E()[_0x1A917[30]], 1000)
            }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[160]], true, 4000);
            if (_0x1D727(_0x1A917)) {
                return
            } else {
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C83C())[_0x1A917[152]]({
                    x: _0x1B62D(_0x1C83C()[_0x1A917[30]], 1000)
                }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[160]], true, 4500)
            };
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D403())[_0x1A917[152]]({
                x: _0x1B62D(_0x1D403()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 4750);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D446())[_0x1A917[152]]({
                x: _0x1B62D(_0x1D446()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 5000);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D489())[_0x1A917[152]]({
                x: _0x1B62D(_0x1D489()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 5250)[_0x1A917[156]][_0x1A917[5]](_0x1BBEF(), this);
            if (_0x1D727(_0x1A917)) {
                _0x1C0A5()(_0x1A917[117], 0);
                return
            };
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D4CC())[_0x1A917[152]]({
                x: _0x1B670(_0x1D4CC()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 4750)
        }
    }

    function _0x1AD47() {
        if (_0x1D727(startgame)) {
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D403())[_0x1A917[152]]({
                x: _0x1B670(_0x1D403()[_0x1A917[30]], 1000)
            }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[160]], true, 4500);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D446())[_0x1A917[152]]({
                x: _0x1B670(_0x1D446()[_0x1A917[30]], 1000)
            }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[160]], true, 4250);
            if (_0x1D727(_0x1A917)) {
                return
            };
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D489())[_0x1A917[152]]({
                x: _0x1B670(_0x1D489()[_0x1A917[30]], 1000)
            }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[160]], true, 4000);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D4CC())[_0x1A917[152]]({
                x: _0x1B62D(_0x1D4CC()[_0x1A917[30]], 1000)
            }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[160]], true, 4500);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C492())[_0x1A917[152]]({
                x: _0x1B62D(_0x1C492()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 4750);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1CE41())[_0x1A917[152]]({
                x: _0x1B62D(_0x1CE41()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 5000);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C59E())[_0x1A917[152]]({
                x: _0x1B62D(_0x1C59E()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 5250);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C83C())[_0x1A917[152]]({
                x: _0x1B670(_0x1C83C()[_0x1A917[30]], 1000)
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 5650)[_0x1A917[156]][_0x1A917[5]](_0x1BBAC(), this)
        }
    }

    function _0x1AD8A() {
        _0x1F0CD();
        _0x1F110();
        _0x1F153();
        _0x1F196();
        _0x1F1D9();
        _0x1D059()[_0x1A917[48]][_0x1A917[136]][_0x1A917[5]](_0x1BDC4(), this);
        _0x1D059()[_0x1A917[48]][_0x1A917[137]][_0x1A917[5]](_0x1BE07(), this);
        _0x1D059()[_0x1A917[48]][_0x1A917[138]][_0x1A917[5]](_0x1BE4A(), this);
        _0x1D059()[_0x1A917[48]][_0x1A917[139]][_0x1A917[5]](_0x1BE8D(), this);
        if (_0x1D727(_0x1AE96)) {
            return
        } else {
            continueTweenTimer = _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[5]](_0x1B5EA(_0x1D016()[_0x1A917[47]][_0x1A917[46]], initialButtonTweenDelay), _0x1BC75(), this)
        }
    }

    function _0x1ADCD() {
        if (_0x1B77C(pageNo, 1) && _0x1D727(startgame)) {
            _0x1F21C();
            tweenA = _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D059())[_0x1A917[152]]({
                angle: 30
            }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 0, 1, true);
            tweenB = _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D059()[_0x1A917[36]])[_0x1A917[152]]({
                x: 1.3,
                y: 1.3
            }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 1500, 1, true);
            _0x1D65E()[_0x1A917[162]](_0x1D6A1());
            _0x1D65E()[_0x1A917[128]]();
            continueTweenTimer = _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[5]](_0x1B5EA(_0x1D016()[_0x1A917[47]][_0x1A917[46]], repeatButtonTweenDelay), _0x1BC75(), this)
        } else {
            if (_0x1D727(_0x1B2C6)) {
                _0x1B845()()
            };
            if ((_0x1B77C(pageNo, 4) && _0x1D727(level1Finish)) || (_0x1B77C(pageNo, 5) && _0x1D727(level2Finish)) || (_0x1B77C(pageNo, 6) && _0x1D727(level3Finish)) || (_0x1B77C(pageNo, 7) && _0x1D727(level4Finish)) || (_0x1B77C(pageNo, 8) && _0x1D727(level5Finish)) || (_0x1B77C(pageNo, 9) && _0x1D727(level6Finish)) || (_0x1B77C(pageNo, 10) && _0x1D727(level7Finish)) || (_0x1B77C(pageNo, 11) && _0x1D727(level8Finish))) {
                _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1C730())[_0x1A917[152]]({
                    angle: 30
                }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 0, 1, true);
                continueTweenTimer = _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[5]](_0x1B5EA(_0x1D016()[_0x1A917[47]][_0x1A917[46]], repeatButtonTweenDelay), _0x1BC75(), this)
            } else {
                if ((_0x1B77C(pageNo, 12) && _0x1D727(thumbFinish)) || (_0x1B77C(pageNo, 2) && _0x1D727(storyFinish))) {
                    _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1CF4D())[_0x1A917[152]]({
                        angle: 30
                    }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 0, 1, true);
                    if (_0x1B7BF(_0x1AD47, 0)) {
                        _0x1C062()();
                        return
                    };
                    continueTweenTimer = _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[5]](_0x1B5EA(_0x1D016()[_0x1A917[47]][_0x1A917[46]], repeatButtonTweenDelay), _0x1BC75(), this)
                } else {
                    _0x1F25F();
                    if (_0x1B77C(pageNo, 13) && _0x1D727(endScreenFinish)) {
                        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D09C())[_0x1A917[152]]({
                            angle: 30
                        }, 400, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[157]], true, 0, 1, true);
                        continueTweenTimer = _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[5]](_0x1B5EA(_0x1D016()[_0x1A917[47]][_0x1A917[46]], repeatButtonTweenDelay), _0x1BC75(), this)
                    }
                }
            }
        }
    }

    function _0x1AE10() {}

    function _0x1AE53(_0x1A917) {}

    function _0x1AE96(_0x1A95A) {
        _0x1C2BD()(_0x1A917[148])
    }

    function _0x1AED9(_0x1A917) {
       
    }

    function _0x1AF1C(_0x1A95A) {
        if (_0x1B77C(_0x1B1FD, 1)) {
            _0x1F2A2();
            return
        };
        _0x1D059()[_0x1A917[12]][_0x1A917[5]](_0x1A917[13], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 16, 27, 28]);
        if (_0x1B7BF(_0x1ACC1, true)) {
            _0x1BFDC()();
            _0x1F2E5();
            return
        };
        _0x1D059()[_0x1A917[12]][_0x1A917[13]](_0x1A917[13], 24, false)
    }

    function _0x1AF5F(_0x1A95A) {
        _0x1D059()[_0x1A917[12]][_0x1A917[163]](null, true);
        _0x1F328()
    }

    function _0x1AFA2(_0x1A95A) {
        if (_0x1B77C(_0x1B2C6, false)) {
            return
        };
        if (_0x1D727(startgame) && _0x1CC6C()) {
            _0x1C2BD()(_0x1A917[148]);
            _0x1D059()[_0x1A917[12]][_0x1A917[163]](null, true);
            _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[164]](_0x1D22E());
            _0x1F36B();
            _0x1C948()[_0x1A917[49]][_0x1A917[48]][_0x1A917[164]](_0x1C667())
        }
    }

    function _0x1AFE5(_0x1A95A) {
        if (_0x1B7BF(_0x1ADCD, true)) {
            _0x1BD81()();
            return
        };
        if (_0x1D727(startgame) && _0x1CC6C()) {
            _0x1D059()[_0x1A917[12]][_0x1A917[163]](null, true);
            _0x1F3AE();
            _0x1F3F1();
            _0x1BED0()()
        }
    }
    if (!_0x1ACC1) {
        _0x1B177();
        return
    };

    function _0x1B028() {
        transition1 = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](_0x1D76A(205.05), 300, _0x1A917[154]);
        _0x1D595()[_0x1A917[8]][_0x1A917[7]](0.5);
        _0x1F434();
        if (_0x1D727(_0x1B283)) {
            _0x1BDC4()(null);
            return
        };
        transition2 = this[_0x1A917[6]][_0x1A917[5]][_0x1A917[4]](1005.1, 300, _0x1A917[155]);
        if (_0x1D727(_0x1A917)) {
            _0x1B845()(1, null, _0x1A917[107], null);
            _0x1F477()
        };
        _0x1D5D8()[_0x1A917[8]][_0x1A917[7]](0.5);
        _0x1F4BA();
        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D595())[_0x1A917[152]]({
            x: 200
        }, 600, _0x1D016()[_0x1A917[151]][_0x1A917[161]][_0x1A917[157]], true);
        _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D5D8())[_0x1A917[152]]({
            x: 600
        }, 600, _0x1D016()[_0x1A917[151]][_0x1A917[161]][_0x1A917[157]], true)[_0x1A917[156]][_0x1A917[5]](_0x1BF13(), this)
    }

    function _0x1B06B() {
        if (_0x1B77C(pageNo, 1)) {
            _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[165])
        } else {
            if (_0x1D727(_0x1A917)) {
                _0x1BED0()(true, 1);
                _0x1F4FD();
                return
            };
            if (_0x1B77C(pageNo, 2) || _0x1B77C(pageNo, 5) || _0x1B77C(pageNo, 7) || _0x1B77C(pageNo, 9)) {
                _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[167])
            } else {
                if (_0x1B77C(pageNo, 3) && _0x1B77C(level, 1)) {
                    _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[168])
                } else {
                    if (_0x1B77C(pageNo, 3) && _0x1B77C(level, 2)) {
                        _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[169])
                    } else {
                        if (_0x1B77C(pageNo, 3) && _0x1B77C(level, 3)) {
                            _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[170])
                        } else {
                            if (_0x1B77C(pageNo, 3) && _0x1B77C(level, 4)) {
                                _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[171])
                            } else {
                                if (_0x1D727(_0x1A917)) {
                                    _0x1C1B1()();
                                    return
                                } else {
                                    if (_0x1B77C(pageNo, 3) && _0x1B77C(level, 5)) {
                                        _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[172])
                                    } else {
                                        if (_0x1B77C(pageNo, 3) && _0x1B77C(level, 6)) {
                                            _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[173])
                                        } else {
                                            if (_0x1B77C(pageNo, 3) && _0x1B77C(level, 7)) {
                                                _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[174])
                                            } else {
                                                if (_0x1B77C(pageNo, 3) && _0x1B77C(level, 8)) {
                                                    _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[175])
                                                } else {
                                                    if (_0x1D727(_0x1A9E0)) {
                                                        return
                                                    } else {
                                                        if (_0x1B77C(pageNo, 11) ) {
                                                            _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[176])
                                                        } else {
                                                            if (_0x1B77C(pageNo, 11) ) {
                                                                _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[177])
                                                            } else {
                                                                if (_0x1B77C(pageNo, 12)) {
                                                                    _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[176])
                                                                } else {
                                                                    if (_0x1D727(_0x1AE53)) {
                                                                        return
                                                                    };
                                                                    if (_0x1B77C(pageNo, 13)) {
                                                                        _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[178])
                                                                    } else {
                                                                        if (_0x1B77C(pageNo, 14) || _0x1B77C(pageNo, 4) || _0x1B77C(pageNo, 5) || _0x1B77C(pageNo, 6) || _0x1B77C(pageNo, 7) || _0x1B77C(pageNo, 8) || _0x1B77C(pageNo, 9) || _0x1B77C(pageNo, 10)) {
                                                                            if (_0x1D727(_0x1AC3B)) {
                                                                                _0x1BCB8()(null);
                                                                                _0x1F540()
                                                                            };
                                                                            _0x1C948()[_0x1A917[166]][_0x1A917[128]](_0x1A917[179])
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
        }
    }

    function _0x1B0AE(_0x1A95A) {
        if (_0x1D727(_0x1ABF8)) {
            _0x1C0E8()();
            return
        };
        _0x1A95A[_0x1A917[36]][_0x1A917[7]](1.05)
    }
    if (!_0x1A917) {
        return
    };

    function _0x1B0F1(_0x1A95A) {
        _0x1A95A[_0x1A917[36]][_0x1A917[7]](1)
    }
    if (!_0x1B2C6) {
        (function() {
            _0x1AB72 = _0x1A917[155]
        })();
        return
    };

    function _0x1B134(_0x1A95A) {
        if (_0x1D727(_0x1B3D2)) {
            return
        };
        _0x1C2BD()(_0x1A917[148])
    }
    if (!_0x1AAEC) {
        _0x1AA23()
    } else {
        function _0x1B177(_0x1A917) {
            
        }
    };

    function _0x1B1BA(_0x1A95A) {
        _0x1A95A[_0x1A917[36]][_0x1A917[7]](1.05)
    }

    function _0x1B1FD(_0x1A95A) {
        _0x1A95A[_0x1A917[36]][_0x1A917[7]](1)
    }

    function _0x1B240() {
        if (_0x1D727(_0x1A917)) {
            return
        };
        _0x1C2BD()(_0x1A917[148])
    }

    function _0x1B283() {
        _0x1F583();
        
    }

    function _0x1B2C6(_0x1A95A) {
        var _0x1A99D = {};
        _0x1A99D._ = _0x1A95A;
        _0x1F5C6(_0x1A99D);
        _0x1C624()[_0x1A917[182]](_0x1A917[180], _0x1A99D._, _0x1A917[181], _0x1D6E4());
        if (_0x1B7BF(_0x1AAA9, 0)) {
            return
        } else {
            if (_0x1A99D._ && _0x1D727(isMuted)) {
                _0x1F609();
                _0x1C1B1()();
                return
            }
        }; if (_0x1D727(_0x1A99D._) && _0x1D727(wasMuted)) {
            _0x1F64C();
            _0x1C1B1()();
            return
        };
        if (_0x1B77C(_0x1AF5F, 0)) {
            _0x1B8CB()(false);
            _0x1F68F()
        } else {
            if (_0x1A99D._ && _0x1C9CE()) {
                wasMuted = true
            }
        }
    }
    if (_0x1B2C6 == false) {
        _0x1B0AE();
        return
    };

    function _0x1B309() {
        if (_0x1B802(pageNo, 0)) {
            if (_0x1D727(isMuted)) {
                _0x1F6D2();
                _0x1F715();
                _0x1CEC7()[_0x1A917[183]]()
            } else {
                _0x1F758();
                if (_0x1B7BF(_0x1B2C6, true)) {
                    _0x1B9D7()();
                    _0x1F79B();
                    return
                };
                _0x1CEC7()[_0x1A917[44]]();
                _0x1F7DE()
            }
        }
    }

    function _0x1B34C(_0x1A95A) {
        _0x1A95A[_0x1A917[36]][_0x1A917[7]](1.05)
    }

    function _0x1B38F(_0x1A95A) {
        _0x1A95A[_0x1A917[36]][_0x1A917[7]](1)
    }

    function _0x1B3D2(_0x1A95A) {
        if (_0x1C9CE()) {
            _0x1CF0A()[_0x1A917[43]] = 1
        } else {
            _0x1CF0A()[_0x1A917[43]] = 0
        }
    }

    function _0x1B415(_0x1A95A) {
        if (_0x1D727(isMuted)) {
            if (_0x1D727(_0x1AFA2)) {
                _0x1F821();
                return
            };
            clicksound = _0x1C948()[_0x1A917[5]][_0x1A917[39]](_0x1A95A);
            _0x1C5E1()[_0x1A917[13]]()
        }
    }
    if (!_0x1A917) {
        _0x1B283(false, _0x1A917[80], 0);
        (function() {
            _0x1ADCD = null
        })()
    };

    function _0x1B458(_0x1A95A) {
        _0x1CEC7()[_0x1A917[40]]()
    }
    loadPicture1 = _0x1A9E0;
    logofbkmute = _0x1AA23;
    settingOver = _0x1AA66;
    settingOut = _0x1AAA9;
    settingDown = _0x1AAEC;
    settingUp = _0x1AB2F;
    transitionOut = _0x1AB72;
    levelsStart = _0x1ABB5;
    titleScreenStart = _0x1ABF8;
    titleTweenComplete1 = _0x1AC3B;
    buttonAppear = _0x1AC7E;
    dollChange = _0x1ACC1;
    dollChange1 = _0x1AD04;
    dollChange2 = _0x1AD47;
    titleScreenStart1 = _0x1AD8A;
    continueTweenAction = _0x1ADCD;
    moreGamesOver = _0x1AE10;
    moreGamesOut = _0x1AE53;
    moreGamesDown = _0x1AE96;
    moreGamesUp = _0x1AED9;
    playOver = _0x1AF1C;
    playOut = _0x1AF5F;
    if (!_0x1B49B) {
        return
    } else {
        playDown = _0x1AFA2
    };
    playUp = _0x1AFE5;
    if (_0x1ADCD == 0) {
        _0x1AC7E = 0
    };
    transitionIn = _0x1B028;
    if (!_0x1A917) {
        _0x1AB2F = 0
    };
    transitionInTweenComplete = _0x1B06B;
    faceBookOver = _0x1B0AE;
    faceBookOut = _0x1B0F1;
    faceBookDown = _0x1B134;
    faceBookUp = _0x1B177;
    logoOver = _0x1B1BA;
    if (_0x1ACC1 == 1) {
        (function() {
            _0x1B415 = 1
        })();
        return
    };
    logoOut = _0x1B1FD;
    logoDown = _0x1B240;
    logoUp = _0x1B283;
    muteAd = _0x1B2C6;
    muteFun = _0x1B309;
    muteOver = _0x1B34C;
    if (!_0x1A917) {
        return
    };
    muteOut = _0x1B38F;
    muteUp = _0x1B3D2;
    if (!_0x1B1BA) {
        _0x1AD47(_0x1A917[85], null);
        (function() {
            _0x1AA66 = 1
        })();
        return
    };
    playsoundeffects = _0x1B415;
    hasLooped = _0x1B458;
    startgame = false;
    dollNum = 0;
    setcount = false;
    levelSelectEnter = false;
    dollSelectEnter = false;
    if (_0x1B309 == 0) {
        _0x1AD47(null);
        return
    };
    dollNumArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level5Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level6Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level8Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    dollNum = 1;
    titleDollNum = 0;
    if (!_0x1A917) {
        _0x1AF1C(false);
        (function() {
            _0x1ABB5 = null
        })()
    } else {
        Title1 = {
            preload: _0x1A95A,
            create: _0x1A99D
        }
    }; if (!_0x1A917) {
        _0x1AA66(_0x1A917[14]);
        (function() {
            _0x1AAEC = 0
        })()
    };
    if (!_0x1B0F1) {
        return
    };
    if (!_0x1A95A) {
        _0x1B49B(false, 0, _0x1A917[156], false);
        (function() {
            _0x1AE96 = false
        })();
        return
    };
    if (!_0x1A917) {
        return
    };
    if (!_0x1A917) {
        (function() {
            _0x1ABF8 = null
        })();
        return
    };
    if (!_0x1B458) {
        return
    };
    if (!_0x1A917) {
        return
    };
    wasMuted = false;
    if (!_0x1A917) {
        _0x1B0F1()
    };

    function _0x1D7AD(_0x1A917, _0x1A95A, _0x1A99D) {
        _0x1A95A._[_0x1A917._] = _0x1A95A._[_0x1A99D._]
    }

    function _0x1D7F0(_0x1A99D, _0x1A95A, _0x1A917) {
        _0x1A95A._[_0x1A99D._] = _0x1A917._
    }

    function _0x1D833(_0x1A917, _0x1A95A, _0x1A99D) {
        _0x1A917._ = _0x1B5A7((_0x1B62D(_0x1A95A._, _0x1A99D._)), 6054278)
    }

    function _0x1D876() {
        levelSelectEnter = false
    }

    function _0x1D8B9() {
        level = 1
    }

    function _0x1D8FC() {
        dollEnter = false
    }

    function _0x1D93F() {
        pageNo = 1
    }

    function _0x1D982() {
        dollNum = 1
    }

    function _0x1D9C5() {
        startgame = false
    }

    function _0x1DA08() {
        setcount = false
    }

    function _0x1DA4B() {
        titleDollNum = 0
    }

    function _0x1DA8E() {
        adViewCount = 0
    }

    function _0x1DAD1() {
        dollSelectEnter = false
    }

    function _0x1DB14() {
        dollNumArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1DB57() {
        level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1DB9A() {
        level2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1DBDD() {
        level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1DC20() {
        level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1DC63() {
        level5Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1DCA6() {
        _0x1AF5F = true
    }

    function _0x1DCE9() {
        level6Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1DD2C() {
        level8Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x1DD6F() {
        continueTweenTimer = 0
    }

    function _0x1DDB2() {
        _0x1C948()[_0x1A917[1]][_0x1A917[0]] = _0x1A917[2]
    }

    function _0x1DDF5() {
        _0x1D3C0()[_0x1A917[9]] = 0
    }

    function _0x1DE38() {
        if (_0x1D727(_0x1ADCD)) {
            _0x1B1BA = 0
        }
    }

    function _0x1DE7B() {
        _0x1B134 = 0
    }

    function _0x1DEBE() {
        _0x1D4CC()[_0x1A917[29]] = 0
    }

    function _0x1DF01() {
        _0x1D446()[_0x1A917[29]] = 40
    }

    function _0x1DF44() {
        _0x1D489()[_0x1A917[29]] = 40
    }

    function _0x1DF87() {
        _0x1D403()[_0x1A917[29]] = 40
    }

    function _0x1DFCA() {
        _0x1D4CC()[_0x1A917[30]] = 150
    }

    function _0x1E00D() {
        _0x1D489()[_0x1A917[30]] = _0x1D76A(300)
    }

    function _0x1E050() {
        _0x1D446()[_0x1A917[30]] = _0x1D76A(150)
    }

    function _0x1E093() {
        _0x1D403()[_0x1A917[30]] = _0x1D76A(40)
    }

    function _0x1E0D6() {
        _0x1C83C()[_0x1A917[30]] += 1000
    }

    function _0x1E119() {
        _0x1C59E()[_0x1A917[30]] -= 1000
    }

    function _0x1E15C() {
        _0x1CE41()[_0x1A917[30]] -= 1000
    }

    function _0x1E19F() {
        _0x1D4CC()[_0x1A917[30]] += 1000
    }

    function _0x1E1E2() {
        _0x1AB72 = null
    }

    function _0x1E225() {
        _0x1D489()[_0x1A917[30]] -= 1000
    }

    function _0x1E268() {
        _0x1D446()[_0x1A917[30]] -= 1000
    }

    function _0x1E2AB() {
        _0x1D403()[_0x1A917[30]] -= 1000
    }

    function _0x1E2EE() {
        _0x1D552()[_0x1A917[9]] = 0
    }

    function _0x1E331() {
        _0x1D33A()[_0x1A917[9]] = 0
    }

    function _0x1E374() {
        _0x1B49B = _0x1A917[151]
    }

    function _0x1E3B7() {
        _0x1D50F()[_0x1A917[29]] = 170
    }

    function _0x1E3FA() {
        firstTime = false
    }

    function _0x1E43D() {
        _0x1CF0A()[_0x1A917[43]] = 0
    }

    function _0x1E480() {
        isMuted = false
    }

    function _0x1E4C3() {
        loadFinish = false
    }

    function _0x1E506() {
        loadState1 = true
    }

    function _0x1B4DE() {
        return function() {
             
        }
    }

    function _0x1E549() {
        _0x1AD47 = 1
    }

    function _0x1E58C() {
        if (_0x1D727(_0x1B240)) {
            _0x1B283 = 1
        }
    }

    function _0x1E5CF() {
        _0x1CCAF()[_0x1A917[133]] = true
    }

    function _0x1E612() {
        _0x1AFE5 = false
    }

    function _0x1E655() {
        _0x1CCAF()[_0x1A917[135]][_0x1A917[134]] = true
    }

    function _0x1E698() {
        _0x1ADCD = 1
    }

    function _0x1E6DB() {
        _0x1AD47 = 0
    }

    function _0x1E71E() {
        _0x1CF0A()[_0x1A917[133]] = true
    }

    function _0x1E761() {
        _0x1CF0A()[_0x1A917[135]][_0x1A917[134]] = true
    }

    function _0x1E7A4() {
        _0x1CF0A()[_0x1A917[135]][_0x1A917[142]] = true
    }

    function _0x1E7E7() {
        _0x1CF0A()[_0x1A917[135]][_0x1A917[143]] = true
    }

    function _0x1E82A() {
        _0x1CF0A()[_0x1A917[135]][_0x1A917[144]] = 10
    }

    function _0x1E86D() {
        if (_0x1D727(_0x1A917)) {
            _0x1B177 = true
        }
    }

    function _0x1E8B0() {
        if (_0x1C9CE()) {
            _0x1CF0A()[_0x1A917[43]] = 1
        }
    }

    function _0x1E8F3() {
        _0x1D165()[_0x1A917[133]] = true
    }

    function _0x1E936() {
        _0x1D165()[_0x1A917[135]][_0x1A917[134]] = true
    }

    function _0x1E979() {
        _0x1D165()[_0x1A917[135]][_0x1A917[142]] = true
    }

    function _0x1E9BC() {
        _0x1D165()[_0x1A917[135]][_0x1A917[143]] = true
    }

    function _0x1E9FF() {
        _0x1D165()[_0x1A917[135]][_0x1A917[144]] = 10
    }

    function _0x1EA42() {
        _0x1AAA9 = 1
    }

    function _0x1EA85() {
        _0x1D0DF()[_0x1A917[133]] = true
    }

    function _0x1EAC8() {
        _0x1D0DF()[_0x1A917[135]][_0x1A917[134]] = true
    }

    function _0x1EB0B() {
        _0x1D0DF()[_0x1A917[135]][_0x1A917[142]] = true
    }

    function _0x1EB4E() {
        _0x1D0DF()[_0x1A917[135]][_0x1A917[143]] = true
    }

    function _0x1EB91() {
        _0x1D0DF()[_0x1A917[135]][_0x1A917[144]] = 10
    }

    function _0x1EBD4() {
        _0x1CE84()[_0x1A917[133]] = true
    }

    function _0x1EC17() {
        _0x1CE84()[_0x1A917[135]][_0x1A917[134]] = true
    }

    function _0x1EC5A() {
        _0x1CE84()[_0x1A917[135]][_0x1A917[142]] = true
    }

    function _0x1EC9D() {
        _0x1CE84()[_0x1A917[135]][_0x1A917[143]] = true
    }

    function _0x1ECE0() {
        _0x1CE84()[_0x1A917[133]] = true
    }

    function _0x1ED23() {
        _0x1CE84()[_0x1A917[135]][_0x1A917[134]] = true
    }

    function _0x1ED66() {
        _0x1CE84()[_0x1A917[135]][_0x1A917[142]] = true
    }

    function _0x1EDA9() {
        _0x1CE84()[_0x1A917[135]][_0x1A917[143]] = true
    }

    function _0x1EDEC() {
        setcount = true
    }

    function _0x1EE2F() {
        _0x1AC3B = _0x1A917[141]
    }

    function _0x1EE72() {
        _0x1D595()[_0x1A917[133]] = true
    }

    function _0x1EEB5() {
        _0x1B49B = true
    }

    function _0x1EEF8() {
        _0x1D5D8()[_0x1A917[133]] = true
    }

    function _0x1B521() {
        return function() {
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D5D8())[_0x1A917[152]]({
                x: 1005.1
            }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[159]], true, 1400);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D61B())[_0x1A917[152]]({
                y: _0x1D76A(250)
            }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[160]], true, 1200);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D595())[_0x1A917[152]]({
                x: _0x1D76A(205.05)
            }, 300, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[159]], true, 1400)[_0x1A917[156]][_0x1A917[5]](_0x1BA5D(), this)
        }
    }

    function _0x1EF3B() {
        _0x1D595()[_0x1A917[133]] = false
    }

    function _0x1EF7E() {
        _0x1D5D8()[_0x1A917[133]] = false
    }

    function _0x1EFC1() {
        _0x1B309 = null
    }

    function _0x1F004() {
        if (_0x1D727(_0x1AD47)) {
            _0x1B06B = false
        }
    }

    function _0x1B564() {
        return function() {
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D552())[_0x1A917[152]]({
                alpha: 1
            }, 500, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true);
            if (_0x1B77C(_0x1B2C6, 1)) {
                _0x1BE8D()()
            };
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D2B4())[_0x1A917[152]]({
                y: 114
            }, 700, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 500);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D2F7())[_0x1A917[152]]({
                x: 364.5
            }, 700, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 1000);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D33A())[_0x1A917[152]]({
                alpha: 1
            }, 700, _0x1D016()[_0x1A917[151]][_0x1A917[150]][_0x1A917[149]], true, 1500);
            _0x1C948()[_0x1A917[5]][_0x1A917[153]](_0x1D37D())[_0x1A917[152]]({
                y: 270.5
            }, 700, _0x1D016()[_0x1A917[151]][_0x1A917[158]][_0x1A917[157]], true, 2000)[_0x1A917[156]][_0x1A917[5]](_0x1BAE3(), this)
        }
    }

    function _0x1F047() {
        _0x1A99D = null
    }

    function _0x1F08A() {
        _0x1A95A = _0x1A917[99]
    }

    function _0x1F0CD() {
        _0x1D059()[_0x1A917[133]] = true
    }

    function _0x1F110() {
        _0x1D059()[_0x1A917[135]][_0x1A917[134]] = true
    }

    function _0x1F153() {
        _0x1D059()[_0x1A917[135]][_0x1A917[142]] = true
    }

    function _0x1F196() {
        _0x1D059()[_0x1A917[135]][_0x1A917[143]] = true
    }

    function _0x1F1D9() {
        _0x1D059()[_0x1A917[135]][_0x1A917[144]] = 10
    }

    function _0x1F21C() {
        if (_0x1B7BF(_0x1AE53, _0x1A917[36])) {
            _0x1B028 = true
        }
    }

    function _0x1F25F() {
        if (_0x1D727(_0x1AAEC)) {
            _0x1ACC1 = 1
        }
    }

    function _0x1F2A2() {
        _0x1AC3B = true
    }

    function _0x1F2E5() {
        _0x1B283 = false
    }

    function _0x1F328() {
        _0x1D059()[_0x1A917[43]] = 0
    }

    function _0x1F36B() {
        _0x1D059()[_0x1A917[43]] = 29
    }

    function _0x1F3AE() {
        _0x1D059()[_0x1A917[43]] = 0
    }

    function _0x1F3F1() {
        startgame = true
    }

    function _0x1F434() {
        _0x1D595()[_0x1A917[133]] = true
    }

    function _0x1F477() {
        _0x1AFE5 = 0
    }

    function _0x1F4BA() {
        _0x1D5D8()[_0x1A917[133]] = true
    }

    function _0x1F4FD() {
        _0x1B309 = 1
    }

    function _0x1F540() {
        _0x1AA66 = 0
    }

    function _0x1F583() {
        if (_0x1D727(_0x1A917)) {
            _0x1AED9 = null
        }
    }

    function _0x1F5C6(_0x1A917) {
        if (_0x1A917._) {
            wasMuted = isMuted
        }
    }

    function _0x1F609() {
        wasMuted = false
    }

    function _0x1F64C() {
        wasMuted = false
    }

    function _0x1F68F() {
        _0x1AFA2 = true
    }

    function _0x1F6D2() {
        isMuted = true
    }

    function _0x1F715() {
        _0x1CF0A()[_0x1A917[43]] = 1
    }

    function _0x1F758() {
        isMuted = false
    }

    function _0x1F79B() {
        _0x1B0F1 = null
    }

    function _0x1F7DE() {
        _0x1CF0A()[_0x1A917[43]] = 0
    }

    function _0x1F821() {
        _0x1AB2F = 1
    }
})()