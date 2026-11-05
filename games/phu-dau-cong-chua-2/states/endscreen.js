var endScreenFinish, endNum, endscreen, endScreenStart, replayOver, replayOut, replayDown, replayUp, saveOver, saveOut, saveDown, saveUp, hideAction, endFlowerShow;
(function() {
    function _0x1B5A7() {
        return console
    }

    function _0x1CC6C() {
        return exportCanvasAsPNG
    }

    function _0x1B521() {
        return canvas
    }

    function _0x1B564() {
        return CanvasImageSaver
    }

    function _0x1CCF2() {
        return Image
    }

    function _0x1D271() {
        return setTimeout
    }

    function _0x1D3C0() {
        return transitionIn
    }

    function _0x1B62D() {
        return continueTweenTimer
    }

    function _0x1CC29() {
        return endTimeInterval
    }

    function _0x1D09C() {
        return nextGamePageJS
    }

    function _0x1B5EA() {
        return continueTweenAction
    }

    function _0x1AF1C(_0x1A917, _0x1A95A) {
        return _0x1A917 * _0x1A95A
    }

    function _0x1D122() {
        return playsoundeffects
    }

    function _0x1B177() {
        return _0x1AA23
    }

    function _0x1B34C() {
        return _0x1ABF8
    }

    function _0x1B458() {
        return _fRg_X95
    }

    function _0x1B670() {
        return document
    }

    function _0x1CF90() {
        return logo
    }

    function _0x1CF4D() {
        return level8Arr1
    }

    function _0x1CE41() {
        return level4Arr1
    }

    function _0x1CDBB() {
        return level2Arr1
    }

    function _0x1CF0A() {
        return level7Arr
    }

    function _0x1CE84() {
        return level5Arr
    }

    function _0x1CD78() {
        return level1Arr
    }

    function _0x1CBA3() {
        return endbackground
    }

    function _0x1B4DE() {
        return blurY
    }

    function _0x1B49B() {
        return blurX
    }

    function _0x1D403() {
        return transitionOut
    }

    function _0x1D2B4() {
        return setting
    }

    function _0x1D33A() {
        return socialicon
    }

    function _0x1D059() {
        return mute
    }

    function _0x1D22E() {
        return savegroup
    }

    function _0x1CFD3() {
        return logofbkmute
    }

    function _0x1D1A8() {
        return replay
    }

    function _0x1D016() {
        return moregames
    }

    function _0x1D1EB() {
        return save
    }

    function _0x1CBE6() {
        return endScreenGlitter
    }

    function _0x1AFA2(_0x1A917, _0x1A95A) {
        return _0x1A917 - _0x1A95A
    }

    function _0x1D489(_0x1A917) {
        return -_0x1A917
    }

    function _0x1D0DF() {
        return Phaser
    }

    function _0x1CD35() {
        return larrow
    }

    function _0x1D165() {
        return rarrow
    }

    function _0x1B2C6() {
        return _0x1AB72
    }

    function _0x1B240() {
        return _0x1AAEC
    }

    function _0x1CEC7() {
        return level6Arr1
    }

    function _0x1B283() {
        return _0x1AB2F
    }

    function _0x1B415() {
        return _0x1ACC1
    }

    function _0x1CB60() {
        return doll4veil
    }

    function _0x1CA11() {
        return doll4hairacc
    }

    function _0x1CB1D() {
        return doll4stud
    }

    function _0x1C667() {
        return doll4bouquet1
    }

    function _0x1C905() {
        return doll4fronthair1
    }

    function _0x1C730() {
        return doll4dresshand
    }

    function _0x1C7B6() {
        return doll4dresshandshade
    }

    function _0x1C948() {
        return doll4gloves
    }

    function _0x1C98B() {
        return doll4glovesshade
    }

    function _0x1CA54() {
        return doll4hand
    }

    function _0x1C624() {
        return doll4bouquet
    }

    function _0x1B0F1() {
        return _0x1A99D
    }

    function _0x1C8C2() {
        return doll4fronthair
    }

    function _0x1C6AA() {
        return doll4chain
    }

    function _0x1C773() {
        return doll4dresshand1
    }

    function _0x1C6ED() {
        return doll4dress
    }

    function _0x1C7F9() {
        return doll4dressshade
    }

    function _0x1CADA() {
        return doll4mascara
    }

    function _0x1C87F() {
        return doll4eyeshad
    }

    function _0x1C83C() {
        return doll4eyeball
    }

    function _0x1CA97() {
        return doll4lips
    }

    function _0x1C59E() {
        return doll4blush
    }

    function _0x1C5E1() {
        return doll4body
    }

    function _0x1C518() {
        return doll4backhair
    }

    function _0x1C9CE() {
        return doll4group
    }

    function _0x1C55B() {
        return doll4backveil
    }

    function _0x1B3D2() {
        return _0x1AC7E
    }

    function _0x1C44F() {
        return doll3headacc
    }

    function _0x1C27A() {
        return doll3earacc
    }

    function _0x1C386() {
        return doll3hair
    }

    function _0x1C12B() {
        return doll3chainacc
    }

    function _0x1C062() {
        return doll3bag
    }

    function _0x1C1F4() {
        return doll3dresshand
    }

    function _0x1C40C() {
        return doll3handshade
    }

    function _0x1C3C9() {
        return doll3hand
    }

    function _0x1C1B1() {
        return doll3dress
    }

    function _0x1C237() {
        return doll3dressshade
    }

    function _0x1C16E() {
        return doll3chainacc1
    }

    function _0x1C4D5() {
        return doll3mascara
    }

    function _0x1C2BD() {
        return doll3eyeball
    }

    function _0x1C300() {
        return doll3eyeshadow
    }

    function _0x1C492() {
        return doll3lip
    }

    function _0x1C0A5() {
        return doll3blush
    }

    function _0x1C0E8() {
        return doll3body
    }

    function _0x1BFDC() {
        return doll3backdress
    }

    function _0x1C343() {
        return doll3group
    }

    function _0x1C01F() {
        return doll3backhair
    }

    function _0x1B1FD() {
        return _0x1AAA9
    }

    function _0x1B309() {
        return _0x1ABB5
    }

    function _0x1B06B(_0x1A917, _0x1A95A) {
        return _0x1A917 === _0x1A95A
    }

    function _0x1CDFE() {
        return level3Arr
    }

    function _0x1BF99() {
        return doll2stud
    }

    function _0x1BCB8() {
        return doll2crown
    }

    function _0x1BAE3() {
        return doll2acc
    }

    function _0x1BE8D() {
        return doll2hair
    }

    function _0x1BC75() {
        return doll2chain
    }

    function _0x1BBAC() {
        return doll2bag
    }

    function _0x1BD3E() {
        return doll2dresshand
    }

    function _0x1BED0() {
        return doll2hand
    }

    function _0x1BCFB() {
        return doll2dress
    }

    function _0x1BD81() {
        return doll2dressshade
    }

    function _0x1BF56() {
        return doll2mascara
    }

    function _0x1BDC4() {
        return doll2eyeball
    }

    function _0x1BE07() {
        return doll2eyeshadow
    }

    function _0x1BF13() {
        return doll2lip
    }

    function _0x1BBEF() {
        return doll2blush
    }

    function _0x1BC32() {
        return doll2body
    }

    function _0x1BB26() {
        return doll2backdress
    }

    function _0x1BE4A() {
        return doll2Group
    }

    function _0x1BB69() {
        return doll2backhair
    }

    function _0x1B1BA() {
        return _0x1AA66
    }

    function _0x1B028(_0x1A917, _0x1A95A) {
        return _0x1A917 == _0x1A95A
    }

    function _0x1B6B3() {
        return doll1acc
    }

    function _0x1BAA0() {
        return doll1stud
    }

    function _0x1B90E() {
        return doll1fronthair
    }

    function _0x1B994() {
        return doll1hand
    }

    function _0x1B739() {
        return doll1bag
    }

    function _0x1BA5D() {
        return doll1midacc
    }

    function _0x1B802() {
        return doll1dress
    }

    function _0x1B845() {
        return doll1dressshade
    }

    function _0x1BA1A() {
        return doll1mascara
    }

    function _0x1B8CB() {
        return doll1eyeshad
    }

    function _0x1B0AE() {
        return _0x1A95A
    }

    function _0x1B888() {
        return doll1eyeball
    }

    function _0x1B9D7() {
        return doll1lips
    }

    function _0x1B77C() {
        return doll1blush
    }

    function _0x1B7BF() {
        return doll1body
    }

    function _0x1B38F() {
        return _0x1AC3B
    }

    function _0x1B951() {
        return doll1Group
    }

    function _0x1B6F6() {
        return doll1backhair
    }

    function _0x1CCAF() {
        return game
    }

    function _0x1D2F7() {
        return showAdOnPosition
    }

    function _0x1B134() {
        return _0x1A9E0
    }

    function _0x1D446(_0x1A917) {
        return !_0x1A917
    }

    function _0x1D37D() {
        return String
    }

    function _0x1AED9(_0x1A917, _0x1A95A) {
        return _0x1A917 % _0x1A95A
    }

    function _0x1AF5F(_0x1A917, _0x1A95A) {
        return _0x1A917 + _0x1A95A
    }

    function _0x1AFE5(_0x1A917, _0x1A95A) {
        return _0x1A917 < _0x1A95A
    }
    var _0x1A917 = (_0x1ACC1)("lns%pnlbdcsglolnr%sp%i4eaaod4goms%rlOrr%TiltarlBdurYebnur%eioter4%lodlybockhhid%fodlnb4de%oocllbaulhkdolp1lioshdsle1lynbnlo%loUloeteshadod%lu1eaucurl%oollkdee2sghIdu%doalgdreus1d%l31aitapcddlli11al%hollshtno%roallfroat%aarydald1pc4%nrru%%hrtm1%%oblsbpcyhdii%loal2bicmdeedsddsle2soey%ddlk2al%sm%%o2lllapad2lc2lyfsuaeoa%%odlaebe%apl1d%ll2dascyrd%voolddoecslhrd3%%ohl%doersIdglE2randedils2erlslhmnl%%oelxbtgrdol%2di%dlehcd%uosl%hiio%%odleaockdele3satkhasrsdslr3eaeklr2ss%lobldbldl%lodl3bvudh%ddll3Hif%eollueoedhedawodll%3dygbxlo%dollsmesaara%dsli3orrsesoa%eud%lm3%resi%sollshlne%lolllhenes3a%eldpll31rssdhand%tozltbngidgle3Pcr%pollhhoil%kosl%b3c%vait%%o2lbbaclhBio%sooldbkdd%rool%btu1hcdalo4giasrdnla4ly2b3lt%dooltedelhrd%dhll4saec4rD%%ollddleos3hedi%oodlodfecsddole4aocqdeo%eoaldbsupu%ts%aoel4hlnr%bolldgloeessdade%ddlo4al%vlsldold4/rds%hlndssaoeiddls4drosThgnd%holl4dressuaadb%ho%lgfnoqtiahrdd%ld4nrannh%is1ydllm4acc%%oll%v%i/%l%dairpwls4taoaatcaoo%tcol%%bnlui%%inemr%Elslnl%soItweenpves%bse%eldXciernsletaen%aavenipawegmlragemaspalida1ianc%dllynreplsd%b%%p4i%%a/d%%rsfxlxcetdol%cnlefieea%snce4O%%loayyr%mpvrCdird%perlntNydv%%nrSarfe4GlimtlrlonCdmdlata%dudtinrpeeardSlC2N%%gieen%evanrsrtamf%snaudEaabl3deureaa%dCuosdrdibpOttpbxllterfccoOsed%ai1elPcrkeltllecp%ondnrupDtw4%nlfclsi%eiaeePerlevtlloho%tnancu2Onel%hnInlumOetdo%Iep%tlpyatol%ledocetchpluaeoCepeu_enPauair%olegdnl%Crc%1aovosshrifh%%doo%AfL_iuontna_inro1blidelitlr%dc:emnlhot", 4844817);

    function _0x1ACC1(_0x1A9E0, _0x1AAA9) {
        var _0x1AAEC = {},
            _0x1A917 = {},
            _0x1AA23 = {},
            _0x1AC7E = {},
            _0x1AC3B = {},
            _0x1ABF8 = {},
            _0x1AD8A = {};
        _0x1AAEC._ = _0x1AAA9;
        var _0x1ABB5 = _0x1A9E0.length;
        _0x1A917._ = [];;
        for (var _0x1AA66 = 0; _0x1AFE5(_0x1AA66, _0x1ABB5); _0x1AA66++) {
            _0x1A917._[_0x1AA66] = _0x1A9E0.charAt(_0x1AA66)
        };
        for (var _0x1AA66 = 0; _0x1AFE5(_0x1AA66, _0x1ABB5); _0x1AA66++) {
            _0x1AA23._ = _0x1AF5F(_0x1AAEC._ * (_0x1AF5F(_0x1AA66, 552)), (_0x1AED9(_0x1AAEC._, 15816)));;
            _0x1AC7E._ = _0x1AF5F(_0x1AAEC._ * (_0x1AF5F(_0x1AA66, 268)), (_0x1AED9(_0x1AAEC._, 34748)));;
            _0x1AC3B._ = _0x1AED9(_0x1AA23._, _0x1ABB5);;
            _0x1ABF8._ = _0x1AED9(_0x1AC7E._, _0x1ABB5);;
            _0x1AD8A._ = _0x1A917._[_0x1AC3B._];;
            _0x1D4CC(_0x1AC3B, _0x1A917, _0x1ABF8);
            _0x1D50F(_0x1ABF8, _0x1A917, _0x1AD8A);
            _0x1D552(_0x1AAEC, _0x1AA23, _0x1AC7E)
        };
        var _0x1A95A = _0x1D37D().fromCharCode(127);
        var _0x1AD47 = '';
        var _0x1A99D = '\x25';
        var _0x1ACC1 = '\x23\x31';
        var _0x1AB72 = '\x25';
        var _0x1AB2F = '\x23\x30';
        var _0x1AD04 = '\x23';
        return _0x1A917._.join(_0x1AD47).split(_0x1A99D).join(_0x1A95A).split(_0x1ACC1).join(_0x1AB72).split(_0x1AB2F).join(_0x1AD04).split(_0x1A95A)
    }

    function _0x1A95A() {
        _0x1D595();
        _0x1D5D8();
        _0x1D61B();
        _0x1D65E()
    }

    function _0x1A99D() {
        if (_0x1D446(_0x1A917)) {
            _0x1B134()();
            _0x1D6A1();
            return
        } else {
            
        };
        endbackground = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](0, 0, _0x1A917[1]);
        blurX = _0x1CCAF()[_0x1A917[3]][_0x1A917[6]](_0x1A917[5]);
        blurY = _0x1CCAF()[_0x1A917[3]][_0x1A917[6]](_0x1A917[7]);
        _0x1D6E4();
        _0x1D727();
        if (_0x1D446(_0x1AB72)) {
            return
        };
        _0x1D76A();
        doll1backhair = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](298, 46, _0x1A917[10]);
        _0x1D7AD();
        doll1body = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](174, 15, _0x1A917[11]);
        doll1blush = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](329, 97, _0x1A917[12]);
        doll1lips = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](353, 124, _0x1A917[13]);
        doll1eyeball = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](333, 83, _0x1A917[14]);
        doll1eyeshad = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](329, 81, _0x1A917[15]);
        doll1mascara = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](325, 85, _0x1A917[16]);
        doll1dressshade = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](205, 126, _0x1A917[17]);
        doll1dress = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](45, 120, _0x1A917[18]);
        doll1midacc = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](329, 151, _0x1A917[19]);
        _0x1D7F0();
        doll1bag = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](128, 190, _0x1A917[20]);
        doll1hand = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](418, 122, _0x1A917[21]);
        doll1fronthair = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](256, 9, _0x1A917[22]);
        doll1stud = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](298, 3, _0x1A917[23]);
        doll1acc = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](298, 3, _0x1A917[23]);
        _0x1D833();
        doll1Group = _0x1CCAF()[_0x1A917[3]][_0x1A917[24]]();
        _0x1B951()[_0x1A917[3]](_0x1B6F6());
        if (_0x1D446(_0x1AC7E)) {
            _0x1B38F()(0, 1)
        } else {
            _0x1B951()[_0x1A917[3]](_0x1B7BF())
        };
        _0x1B951()[_0x1A917[3]](_0x1B77C());
        _0x1B951()[_0x1A917[3]](_0x1B9D7());
        _0x1B951()[_0x1A917[3]](_0x1B888());
        if (_0x1D446(_0x1AA66)) {
            _0x1B0AE()(true);
            _0x1D876();
            return
        };
        _0x1B951()[_0x1A917[3]](_0x1B8CB());
        _0x1B951()[_0x1A917[3]](_0x1BA1A());
        _0x1B951()[_0x1A917[3]](_0x1B845());
        _0x1B951()[_0x1A917[3]](_0x1B802());
        _0x1B951()[_0x1A917[3]](_0x1BA5D());
        _0x1B951()[_0x1A917[3]](_0x1B739());
        _0x1B951()[_0x1A917[3]](_0x1B994());
        _0x1B951()[_0x1A917[3]](_0x1B90E());
        _0x1B951()[_0x1A917[3]](_0x1BAA0());
        _0x1B951()[_0x1A917[3]](_0x1B6B3());
        _0x1D8B9();
        _0x1D8FC();
        _0x1D93F();
        _0x1D982();
        _0x1D9C5();
        doll2backhair = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](248, 16, _0x1A917[26]);
        if (_0x1B028(_0x1AC3B, _0x1A917[76])) {
            _0x1B1BA()();
            _0x1DA08();
            return
        };
        doll2backdress = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](299, 367, _0x1A917[27]);
        doll2body = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](258, 31, _0x1A917[28]);
        doll2blush = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](310, 103, _0x1A917[29]);
        doll2lip = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](333, 128, _0x1A917[30]);
        doll2eyeshadow = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](317, 94, _0x1A917[31]);
        _0x1DA4B();
        doll2eyeball = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](319, 104, _0x1A917[32]);
        doll2mascara = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](313, 96, _0x1A917[33]);
        doll2dressshade = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](261, 132, _0x1A917[34]);
        doll2dress = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](159, 126, _0x1A917[35]);
        doll2hand = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](292, 237, _0x1A917[36]);
        doll2dresshand = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](274, 176, _0x1A917[37]);
        if (_0x1B028(_0x1AAA9, false)) {
            _0x1DA8E();
            return
        } else {
            doll2bag = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](278, 282, _0x1A917[38])
        };
        _0x1DAD1();
        doll2chain = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](331, 145, _0x1A917[39]);
        _0x1DB14();
        doll2hair = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](269, 4, _0x1A917[40]);
        doll2acc = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](297, 16, _0x1A917[41]);
        doll2crown = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](297, 16, _0x1A917[41]);
        doll2stud = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](297, 16, _0x1A917[41]);
        if (_0x1D446(_0x1AA66)) {
            _0x1DB57();
            return
        };
        doll2Group = _0x1CCAF()[_0x1A917[3]][_0x1A917[24]]();
        _0x1BE4A()[_0x1A917[3]](_0x1BB69());
        _0x1BE4A()[_0x1A917[3]](_0x1BB26());
        _0x1BE4A()[_0x1A917[3]](_0x1BC32());
        _0x1BE4A()[_0x1A917[3]](_0x1BBEF());
        _0x1BE4A()[_0x1A917[3]](_0x1BF13());
        _0x1BE4A()[_0x1A917[3]](_0x1BE07());
        _0x1BE4A()[_0x1A917[3]](_0x1BDC4());
        _0x1BE4A()[_0x1A917[3]](_0x1BF56());
        _0x1BE4A()[_0x1A917[3]](_0x1BD81());
        _0x1BE4A()[_0x1A917[3]](_0x1BCFB());
        _0x1BE4A()[_0x1A917[3]](_0x1BED0());
        _0x1DB9A();
        _0x1BE4A()[_0x1A917[3]](_0x1BD3E());
        _0x1BE4A()[_0x1A917[3]](_0x1BBAC());
        _0x1BE4A()[_0x1A917[3]](_0x1BC75());
        _0x1BE4A()[_0x1A917[3]](_0x1BE8D());
        _0x1BE4A()[_0x1A917[3]](_0x1BAE3());
        _0x1BE4A()[_0x1A917[3]](_0x1BCB8());
        _0x1BE4A()[_0x1A917[3]](_0x1BF99());
        _0x1DBDD();
        _0x1DC20();
        if (_0x1D446(_0x1ACC1)) {
            return
        } else {
            _0x1BDC4()[_0x1A917[25]] = _0x1CDFE()[3]
        };
        _0x1DC63();
        _0x1DCA6();
        doll3backhair = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](286, 45, _0x1A917[42]);
        doll3backdress = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](271, 410, _0x1A917[43]);
        doll3body = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](267, 36, _0x1A917[44]);
        doll3blush = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](334, 99, _0x1A917[45]);
        doll3lip = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](353, 126, _0x1A917[46]);
        if (_0x1B028(_0x1ABF8, null)) {
            _0x1DCE9();
            return
        };
        doll3eyeshadow = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](338, 81, _0x1A917[47]);
        if (_0x1B06B(_0x1AA66, _0x1A917[14])) {
            _0x1B309()();
            _0x1DD2C();
            return
        };
        doll3eyeball = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](351, 89, _0x1A917[48]);
        doll3mascara = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](347, 83, _0x1A917[49]);
        doll3dressshade = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](265, 123, _0x1A917[50]);
        doll3dress = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](212, 132, _0x1A917[51]);
        if (_0x1B028(_0x1ABB5, null)) {
            _0x1B1FD()(0, false);
            _0x1DD6F()
        };
        doll3hand = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](284, 269, _0x1A917[52]);
        doll3handshade = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](308, 287, _0x1A917[53]);
        doll3dresshand = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](311, 265, _0x1A917[54]);
        doll3bag = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](256, 417, _0x1A917[55]);
        doll3chainacc = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](337, 17, _0x1A917[56]);
        doll3chainacc1 = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](337, 17, _0x1A917[56]);
        doll3hair = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](258, 0, _0x1A917[57]);
        doll3earacc = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](337, 17, _0x1A917[56]);
        doll3headacc = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](337, 17, _0x1A917[56]);
        doll3group = _0x1CCAF()[_0x1A917[3]][_0x1A917[24]]();
        _0x1C343()[_0x1A917[3]](_0x1C01F());
        _0x1C343()[_0x1A917[3]](_0x1BFDC());
        _0x1C343()[_0x1A917[3]](_0x1C0E8());
        _0x1C343()[_0x1A917[3]](_0x1C0A5());
        _0x1C343()[_0x1A917[3]](_0x1C492());
        _0x1C343()[_0x1A917[3]](_0x1C300());
        _0x1C343()[_0x1A917[3]](_0x1C2BD());
        _0x1C343()[_0x1A917[3]](_0x1C4D5());
        _0x1C343()[_0x1A917[3]](_0x1C16E());
        _0x1C343()[_0x1A917[3]](_0x1C237());
        _0x1C343()[_0x1A917[3]](_0x1C1B1());
        _0x1C343()[_0x1A917[3]](_0x1C3C9());
        if (_0x1B06B(_0x1AC3B, false)) {
            return
        };
        _0x1C343()[_0x1A917[3]](_0x1C40C());
        _0x1C343()[_0x1A917[3]](_0x1C1F4());
        _0x1C343()[_0x1A917[3]](_0x1C062());
        if (_0x1D446(_0x1A917)) {
            _0x1B38F()();
            return
        };
        _0x1C343()[_0x1A917[3]](_0x1C12B());
        _0x1C343()[_0x1A917[3]](_0x1C386());
        _0x1C343()[_0x1A917[3]](_0x1C27A());
        _0x1C343()[_0x1A917[3]](_0x1C44F());
        _0x1DDB2();
        _0x1DDF5();
        _0x1DE38();
        _0x1DE7B();
        _0x1DEBE();
        doll4backveil = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](214, 1, _0x1A917[58]);
        doll4backhair = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](325, 22, _0x1A917[59]);
        doll4body = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](296, 30, _0x1A917[60]);
        if (_0x1D446(_0x1AAEC)) {
            _0x1B3D2()();
            _0x1DF01();
            return
        };
        doll4blush = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](325, 96, _0x1A917[61]);
        doll4lips = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](354, 127, _0x1A917[62]);
        doll4eyeball = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](344, 95, _0x1A917[63]);
        doll4eyeshad = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](334, 85, _0x1A917[64]);
        doll4mascara = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](332, 92, _0x1A917[65]);
        doll4dressshade = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](298, 154, _0x1A917[66]);
        doll4dress = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](116, 161, _0x1A917[67]);
        doll4bouquet = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](334, 240, _0x1A917[68]);
        doll4bouquet1 = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](334, 240, _0x1A917[69]);
        doll4hand = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](321, 275, _0x1A917[70]);
        doll4glovesshade = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](290, 241, _0x1A917[71]);
        doll4gloves = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](285, 248, _0x1A917[72]);
        doll4dresshandshade = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](316, 274, _0x1A917[73]);
        doll4dresshand = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](248, 189, _0x1A917[74]);
        doll4dresshand1 = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](248, 189, _0x1A917[75]);
        if (_0x1B06B(_0x1AC7E, false)) {
            return
        } else {
            doll4fronthair = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](287, 0, _0x1A917[76])
        };
        doll4fronthair1 = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](287, 0, _0x1A917[77]);
        doll4chain = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](328, 14, _0x1A917[78]);
        doll4stud = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](328, 14, _0x1A917[78]);
        doll4hairacc = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](328, 14, _0x1A917[78]);
        if (_0x1D446(_0x1A917)) {
            _0x1B0AE()(false)
        };
        doll4veil = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](200, 11, _0x1A917[79]);
        if (_0x1D446(_0x1AAEC)) {
            _0x1B134()(false, 1, false)
        };
        doll4group = _0x1CCAF()[_0x1A917[3]][_0x1A917[24]]();
        _0x1DF44();
        _0x1C9CE()[_0x1A917[3]](_0x1C55B());
        _0x1C9CE()[_0x1A917[3]](_0x1C518());
        _0x1C9CE()[_0x1A917[3]](_0x1C5E1());
        if (_0x1D446(_0x1A99D)) {
            _0x1B38F()();
            _0x1DF87()
        };
        _0x1C9CE()[_0x1A917[3]](_0x1C59E());
        _0x1C9CE()[_0x1A917[3]](_0x1CA97());
        _0x1C9CE()[_0x1A917[3]](_0x1C83C());
        _0x1C9CE()[_0x1A917[3]](_0x1C87F());
        _0x1C9CE()[_0x1A917[3]](_0x1CADA());
        _0x1C9CE()[_0x1A917[3]](_0x1C7F9());
        if (_0x1B028(_0x1A95A, null)) {
            return
        };
        _0x1C9CE()[_0x1A917[3]](_0x1C6ED());
        _0x1C9CE()[_0x1A917[3]](_0x1C773());
        if (_0x1B028(_0x1AC3B, null)) {
            _0x1B38F()(null);
            _0x1DFCA();
            return
        } else {
            _0x1C9CE()[_0x1A917[3]](_0x1C6AA())
        };
        _0x1C9CE()[_0x1A917[3]](_0x1C8C2());
        if (_0x1B06B(_0x1ABF8, null)) {
            _0x1B0F1()(true, false, true, 0);
            _0x1E00D();
            return
        } else {
            _0x1C9CE()[_0x1A917[3]](_0x1C624())
        };
        _0x1C9CE()[_0x1A917[3]](_0x1CA54());
        _0x1C9CE()[_0x1A917[3]](_0x1C98B());
        _0x1C9CE()[_0x1A917[3]](_0x1C948());
        _0x1C9CE()[_0x1A917[3]](_0x1C7B6());
        _0x1C9CE()[_0x1A917[3]](_0x1C730());
        _0x1C9CE()[_0x1A917[3]](_0x1C905());
        _0x1C9CE()[_0x1A917[3]](_0x1C667());
        _0x1C9CE()[_0x1A917[3]](_0x1CB1D());
        if (_0x1B028(_0x1ABF8, false)) {
            return
        } else {
            _0x1C9CE()[_0x1A917[3]](_0x1CA11())
        };
        _0x1C9CE()[_0x1A917[3]](_0x1CB60());
        if (_0x1B028(_0x1ABB5, _0x1A917[75])) {
            _0x1B415()(false, _0x1A917[53])
        };
        _0x1E050();
        _0x1E093();
        _0x1E0D6();
        _0x1E119();
        _0x1E15C();
        _0x1E19F();
        _0x1E1E2();
        _0x1E225();
        _0x1E268();
        if (_0x1B028(_0x1AB2F, 1)) {
            _0x1B283()();
            _0x1E2AB()
        };
        _0x1E2EE();
        _0x1E331();
        _0x1E374();
        if (_0x1D446(_0x1AAA9)) {
            return
        };
        _0x1E3B7();
        _0x1E3FA();
        _0x1E43D();
        if (_0x1D446(_0x1ABB5)) {
            _0x1B1BA()(null);
            return
        };
        _0x1E480();
        _0x1E4C3();
        _0x1E506();
        _0x1E549();
        _0x1E58C();
        _0x1E5CF();
        _0x1E612();
        _0x1E655();
        _0x1E698();
        _0x1E6DB();
        _0x1E71E();
        _0x1E761();
        _0x1E7A4();
        _0x1E7E7();
        _0x1E82A();
        _0x1E86D();
        if (_0x1D446(_0x1A917)) {
            _0x1B0AE()();
            _0x1E8B0()
        };
        _0x1E8F3();
        if (_0x1D446(_0x1A917)) {
            _0x1B1FD()();
            _0x1E936()
        } else {
            _0x1C1B1()[_0x1A917[25]] = _0x1CEC7()[5]
        }; if (_0x1D446(_0x1A917)) {
            _0x1B240()(true, _0x1A917[43])
        };
        _0x1E979();
        _0x1E9BC();
        _0x1E9FF();
        _0x1EA42();
        if (_0x1D446(_0x1AC3B)) {
            _0x1B1BA()(false, _0x1A917[42]);
            _0x1EA85()
        };
        _0x1EAC8();
        _0x1EB0B();
        _0x1EB4E();
        _0x1EB91();
        _0x1EBD4();
        _0x1EC17();
        _0x1EC5A();
        _0x1EC9D();
        _0x1ECE0();
        _0x1ED23();
        _0x1ED66();
        _0x1EDA9();
        if (_0x1D446(_0x1AB72)) {
            _0x1B2C6()();
            return
        };
        _0x1EDEC();
        _0x1EE2F();
        _0x1EE72();
        _0x1EEB5();
        _0x1EEF8();
        _0x1EF3B();
        if (_0x1D446(_0x1A917)) {
            return
        };
        _0x1EF7E();
        _0x1EFC1();
        _0x1F004();
        rarrow = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](750, 300, _0x1A917[81]);
        if (_0x1D446(_0x1A917)) {
            return
        };
        _0x1D165()[_0x1A917[83]][_0x1A917[82]](0.5);
        larrow = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](50, 300, _0x1A917[81]);
        _0x1CD35()[_0x1A917[83]][_0x1A917[82]](0.5);
        _0x1F047();
        _0x1CCAF()[_0x1A917[3]][_0x1A917[89]](_0x1D165())[_0x1A917[88]]({
            x: _0x1AF5F(_0x1D165()[_0x1A917[80]], 5)
        }, 500, _0x1D0DF()[_0x1A917[87]][_0x1A917[86]][_0x1A917[85]], true, 0, _0x1D489(1), true);
        _0x1CCAF()[_0x1A917[3]][_0x1A917[89]](_0x1CD35())[_0x1A917[88]]({
            x: _0x1AFA2(_0x1CD35()[_0x1A917[80]], 5)
        }, 500, _0x1D0DF()[_0x1A917[87]][_0x1A917[86]][_0x1A917[85]], true, 0, _0x1D489(1), true);
        _0x1F08A();
        _0x1F0CD();
        endScreenGlitter = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](400, 300, _0x1A917[91]);
        _0x1CBE6()[_0x1A917[83]][_0x1A917[82]](0.5);
        _0x1F110();
        save = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[93]](180, 535, _0x1A917[92]);
        _0x1D1EB()[_0x1A917[83]][_0x1A917[82]](0.5);
        /*if (_0x1B028(displayMoreGames, 1) || _0x1B028(displayMoreGames, 2)) {
            if (_0x1D446(_0x1A917)) {
                _0x1B1BA()(null);
                return
            };
            moregames = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[2]](63, 543, _0x1A917[94]);
            _0x1D016()[_0x1A917[83]][_0x1A917[82]](0.5);
            _0x1D016()[_0x1A917[95]][_0x1A917[3]](_0x1A917[94]);
            _0x1D016()[_0x1A917[95]][_0x1A917[96]](_0x1A917[94], 24, true);
            _0x1F153()
        };*/
        replay = this[_0x1A917[4]][_0x1A917[3]][_0x1A917[93]](733, 535, _0x1A917[97]);
        _0x1D1A8()[_0x1A917[83]][_0x1A917[82]](0.5);
        _0x1F196();
        _0x1F1D9();
        _0x1CFD3()();
        _0x1F21C();
        savegroup = _0x1CCAF()[_0x1A917[3]][_0x1A917[24]]();
        _0x1D22E()[_0x1A917[3]](_0x1D165());
        _0x1D22E()[_0x1A917[3]](_0x1CD35());
        _0x1D22E()[_0x1A917[3]](_0x1D1EB());
        /*if (_0x1B028(displayMoreGames, 1) || _0x1B028(displayMoreGames, 2)) {
            _0x1D22E()[_0x1A917[3]](_0x1D016())
        };*/
        if (_0x1D446(_0x1AB72)) {
            return
        };
        _0x1D22E()[_0x1A917[3]](_0x1D1A8());
        if (_0x1D446(_0x1AB2F)) {
            _0x1B0AE()(0, 1)
        } else {
            _0x1D22E()[_0x1A917[3]](_0x1D059())
        };
        _0x1D22E()[_0x1A917[3]](_0x1D33A());
        _0x1D22E()[_0x1A917[3]](_0x1D2B4());
        _0x1D403()();
        (_0x1AD04()())
    }
    if (!_0x1A917) {
        _0x1AB72();
        (function() {
            _0x1A9E0 = null
        })()
    } else {
        function _0x1A9E0() {
            var _0x1A95A = {};
            var _0x1AA23 = {};
            var _0x1A99D = {};
            _0x1A95A._ = _0x1AD47();
            _0x1AA23._ = _0x1AD8A();
            _0x1A99D._ = _0x1ADCD();
            _0x1F25F();
            if (_0x1B06B(_0x1A9E0, false)) {
                _0x1B1BA()(0, null, _0x1A917[60]);
                _0x1F2A2()
            } else {
                _0x1CBE6()[_0x1A917[95]][_0x1A917[3]](_0x1A917[108])
            };
            _0x1CBE6()[_0x1A917[95]][_0x1A917[96]](_0x1A917[108], 24, false)[_0x1A917[109]][_0x1A917[3]](_0x1A95A._, this);
            _0x1F4FD();
            _0x1F540();
            _0x1F583();
            _0x1F5C6();
            _0x1D165()[_0x1A917[113]][_0x1A917[120]][_0x1A917[3]](_0x1AA23._, this);
            _0x1F609();
            if (_0x1D446(_0x1A917)) {
                _0x1B2C6()()
            };
            _0x1F64C();
            _0x1F68F();
            _0x1F6D2();
            _0x1CD35()[_0x1A917[113]][_0x1A917[120]][_0x1A917[3]](_0x1A99D._, this);
            _0x1F864();
            _0x1F8A7();
            _0x1F8EA();
            _0x1F92D();
            _0x1F970();
            if (_0x1B06B(_0x1AC3B, 0)) {
                return
            };
            _0x1D1EB()[_0x1A917[113]][_0x1A917[123]][_0x1A917[3]](_0x1B283(), this);
            _0x1D1EB()[_0x1A917[113]][_0x1A917[124]][_0x1A917[3]](_0x1B2C6(), this);
            _0x1D1EB()[_0x1A917[113]][_0x1A917[120]][_0x1A917[3]](_0x1B309(), this);
            _0x1D1EB()[_0x1A917[113]][_0x1A917[125]][_0x1A917[3]](_0x1B34C(), this);
            if (_0x1D446(_0x1A917)) {
                _0x1B0AE()();
                return
            };
            _0x1F9B3();
            _0x1F9F6();
            _0x1FA39();
            _0x1FA7C();
            _0x1FABF();
            _0x1D1A8()[_0x1A917[113]][_0x1A917[123]][_0x1A917[3]](_0x1B177(), this);
            _0x1D1A8()[_0x1A917[113]][_0x1A917[124]][_0x1A917[3]](_0x1B1BA(), this);
            if (_0x1D446(_0x1A917)) {
                return
            } else {
                _0x1D1A8()[_0x1A917[113]][_0x1A917[120]][_0x1A917[3]](_0x1B1FD(), this)
            };
            _0x1D1A8()[_0x1A917[113]][_0x1A917[125]][_0x1A917[3]](_0x1B240(), this)
        }
    };

    function _0x1AA23(_0x1A95A) {
        _0x1D1A8()[_0x1A917[95]][_0x1A917[3]](_0x1A917[97], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
        _0x1D1A8()[_0x1A917[95]][_0x1A917[96]](_0x1A917[97], 24, false)
    }

    function _0x1AA66(_0x1A95A) {
        _0x1D1A8()[_0x1A917[95]][_0x1A917[126]](null, true);
        _0x1FB02()
    }

    function _0x1AAA9(_0x1A95A) {
        if (_0x1D446(endScreenFinish)) {
            _0x1D122()(_0x1A917[121]);
            _0x1D1A8()[_0x1A917[95]][_0x1A917[126]](null, true);
            _0x1FB45();
            _0x1CCAF()[_0x1A917[114]][_0x1A917[113]][_0x1A917[127]](_0x1CC29());
            if (_0x1B06B(_0x1AAEC, null)) {
                return
            };
            _0x1CCAF()[_0x1A917[114]][_0x1A917[113]][_0x1A917[127]](_0x1B62D())
        }
    }

    function _0x1AAEC(_0x1A917) {
        if (_0x1D446(endScreenFinish)) {
            _0x1FB88();
            _0x1FBCB();
            _0x1FC0E();
            _0x1D3C0()()
        }
    }

    function _0x1AB2F(_0x1A95A) {
        _0x1D1EB()[_0x1A917[95]][_0x1A917[3]](_0x1A917[92], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
        _0x1D1EB()[_0x1A917[95]][_0x1A917[96]](_0x1A917[92], 24, false)
    }

    function _0x1AB72(_0x1A95A) {
        if (_0x1B028(_0x1ABF8, _0x1A917[87])) {
            _0x1B415()(_0x1A917[1]);
            return
        };
        _0x1D1EB()[_0x1A917[95]][_0x1A917[126]](null, true);
        _0x1FC51()
    }

    function _0x1ABB5(_0x1A95A) {
        if (_0x1D446(endScreenFinish)) {
            _0x1D122()(_0x1A917[121]);
            if (_0x1D446(_0x1A917)) {
                _0x1B34C()();
                return
            };
            _0x1D1EB()[_0x1A917[95]][_0x1A917[126]](null, true);
            _0x1FC94()
        }
    }

    function _0x1ABF8(_0x1A95A) {
        if (_0x1D446(endScreenFinish)) {
            _0x1FCD7();
            _0x1FD1A();
            _0x1D271()(_0x1B38F(), 500);
            _0x1CCAF()[_0x1A917[128]] = _0x1CCAF()[_0x1A917[131]][_0x1A917[3]](_0x1D0DF()[_0x1A917[130]][_0x1A917[129]]);
            _0x1CCAF()[_0x1A917[128]][_0x1A917[137]](_0x1AE10())
        }
    }
    if (_0x1AC3B === null) {
        _0x1AC3B(0);
        (function() {
            _0x1AC3B = null
        })();
        return
    } else {
        function _0x1AC3B() {
            _0x1D22E()[_0x1A917[90]] = true
        }
    }; if (!_0x1A917) {
        _0x1AAEC = true
    };

    function _0x1AC7E() {
        if (_0x1B028(endNum, 0)) {} else {
            if (_0x1B028(endNum, 1)) {}
        }
    }
    if (!_0x1A917) {
        _0x1AC3B();
        (function() {
            _0x1AAEC = 1
        })()
    };
    endScreenStart = _0x1A9E0;
    replayOver = _0x1AA23;
    replayOut = _0x1AA66;
    replayDown = _0x1AAA9;
    if (_0x1AAEC == 1) {
        return
    };
    replayUp = _0x1AAEC;
    saveOver = _0x1AB2F;
    saveOut = _0x1AB72;
    saveDown = _0x1ABB5;
    saveUp = _0x1ABF8;
    hideAction = _0x1AC3B;
    endFlowerShow = _0x1AC7E;
    endScreenFinish = false;
    endNum = 0;
    endscreen = {
        preload: _0x1A95A,
        create: _0x1A99D
    };
    if (!_0x1A917) {
        return
    };
    if (!_0x1A917) {
        _0x1AA23(false, 1, 1)
    } else {}; if (!_0x1ABB5) {
        _0x1AB2F(false);
        return
    };

    function _0x1D4CC(_0x1A99D, _0x1A917, _0x1A95A) {
        _0x1A917._[_0x1A99D._] = _0x1A917._[_0x1A95A._]
    }

    function _0x1D50F(_0x1A95A, _0x1A917, _0x1A99D) {
        _0x1A917._[_0x1A95A._] = _0x1A99D._
    }

    function _0x1D552(_0x1A95A, _0x1A917, _0x1A99D) {
        _0x1A95A._ = _0x1AED9((_0x1AF5F(_0x1A917._, _0x1A99D._)), 6054278)
    }

    function _0x1D595() {
        endScreenFinish = false
    }

    function _0x1D5D8() {
        pageNo = 13
    }

    function _0x1D61B() {
        setcount = false
    }

    function _0x1D65E() {
        endNum = 0
    }

    function _0x1D6A1() {
        _0x1ABF8 = false
    }

    function _0x1D6E4() {
        _0x1B49B()[_0x1A917[8]] = 5
    }

    function _0x1D727() {
        _0x1B4DE()[_0x1A917[8]] = 5
    }

    function _0x1D76A() {
        _0x1CBA3()[_0x1A917[9]] = [_0x1B49B(), _0x1B4DE()]
    }

    function _0x1D7AD() {
        if (_0x1B06B(_0x1A9E0, 1)) {
            _0x1A95A = true
        }
    }

    function _0x1D7F0() {
        if (_0x1D446(_0x1A99D)) {
            _0x1AAEC = _0x1A917[28]
        }
    }

    function _0x1D833() {
        if (_0x1B06B(_0x1AAA9, false)) {
            _0x1AAA9 = null
        }
    }

    function _0x1D876() {
        _0x1AAA9 = true
    }

    function _0x1D8B9() {
        _0x1B9D7()[_0x1A917[25]] = _0x1CD78()[1]
    }

    function _0x1D8FC() {
        _0x1BA1A()[_0x1A917[25]] = _0x1CD78()[2]
    }

    function _0x1D93F() {
        _0x1B888()[_0x1A917[25]] = _0x1CD78()[3]
    }

    function _0x1D982() {
        _0x1B8CB()[_0x1A917[25]] = _0x1CD78()[4]
    }

    function _0x1D9C5() {
        _0x1B77C()[_0x1A917[25]] = _0x1CD78()[5]
    }

    function _0x1DA08() {
        _0x1AB2F = null
    }

    function _0x1DA4B() {
        if (_0x1D446(_0x1A917)) {
            _0x1AAEC = 0
        }
    }

    function _0x1DA8E() {
        _0x1AA66 = true
    }

    function _0x1DAD1() {
        if (_0x1B028(_0x1AC3B, false)) {
            _0x1A9E0 = false
        }
    }

    function _0x1DB14() {
        if (_0x1D446(_0x1A917)) {
            _0x1A9E0 = true
        }
    }

    function _0x1DB57() {
        _0x1AC7E = 1
    }

    function _0x1DB9A() {
        if (_0x1B06B(_0x1AA23, false)) {
            _0x1AA23 = null
        }
    }

    function _0x1DBDD() {
        _0x1BF13()[_0x1A917[25]] = _0x1CDFE()[1]
    }

    function _0x1DC20() {
        _0x1BF56()[_0x1A917[25]] = _0x1CDFE()[2]
    }

    function _0x1DC63() {
        _0x1BE07()[_0x1A917[25]] = _0x1CDFE()[4]
    }

    function _0x1DCA6() {
        _0x1BBEF()[_0x1A917[25]] = _0x1CDFE()[5]
    }

    function _0x1DCE9() {
        _0x1AB2F = 1
    }

    function _0x1DD2C() {
        _0x1AAEC = true
    }

    function _0x1DD6F() {
        _0x1AC3B = false
    }

    function _0x1DDB2() {
        _0x1C492()[_0x1A917[25]] = _0x1CE84()[1]
    }

    function _0x1DDF5() {
        _0x1C4D5()[_0x1A917[25]] = _0x1CE84()[2]
    }

    function _0x1DE38() {
        _0x1C2BD()[_0x1A917[25]] = _0x1CE84()[3]
    }

    function _0x1DE7B() {
        _0x1C300()[_0x1A917[25]] = _0x1CE84()[4]
    }

    function _0x1DEBE() {
        _0x1C0A5()[_0x1A917[25]] = _0x1CE84()[5]
    }

    function _0x1DF01() {
        _0x1AC7E = 1
    }

    function _0x1DF44() {
        if (_0x1D446(_0x1A917)) {
            _0x1AAEC = true
        }
    }

    function _0x1DF87() {
        _0x1AA66 = 1
    }

    function _0x1DFCA() {
        _0x1AA23 = _0x1A917[116]
    }

    function _0x1E00D() {
        _0x1ABB5 = false
    }

    function _0x1E050() {
        _0x1CA97()[_0x1A917[25]] = _0x1CF0A()[1]
    }

    function _0x1E093() {
        _0x1CADA()[_0x1A917[25]] = _0x1CF0A()[2]
    }

    function _0x1E0D6() {
        _0x1C83C()[_0x1A917[25]] = _0x1CF0A()[3]
    }

    function _0x1E119() {
        _0x1C87F()[_0x1A917[25]] = _0x1CF0A()[4]
    }

    function _0x1E15C() {
        _0x1C59E()[_0x1A917[25]] = _0x1CF0A()[5]
    }

    function _0x1E19F() {
        _0x1C9CE()[_0x1A917[80]] = 100
    }

    function _0x1E1E2() {
        _0x1C343()[_0x1A917[80]] = 250
    }

    function _0x1E225() {
        _0x1B951()[_0x1A917[80]] = _0x1D489(200)
    }

    function _0x1E268() {
        _0x1BE4A()[_0x1A917[80]] = _0x1D489(40)
    }

    function _0x1E2AB() {
        _0x1AB2F = 1
    }

    function _0x1E2EE() {
        _0x1B6F6()[_0x1A917[25]] = _0x1CDBB()[1]
    }

    function _0x1E331() {
        _0x1B845()[_0x1A917[25]] = _0x1CDBB()[2]
    }

    function _0x1E374() {
        _0x1B802()[_0x1A917[25]] = _0x1CDBB()[3]
    }

    function _0x1E3B7() {
        _0x1BA5D()[_0x1A917[25]] = _0x1CDBB()[4]
    }

    function _0x1E3FA() {
        _0x1B739()[_0x1A917[25]] = _0x1CDBB()[5]
    }

    function _0x1E43D() {
        _0x1B90E()[_0x1A917[25]] = _0x1CDBB()[6]
    }

    function _0x1E480() {
        _0x1BAA0()[_0x1A917[25]] = _0x1CDBB()[7]
    }

    function _0x1E4C3() {
        _0x1B6B3()[_0x1A917[25]] = _0x1CDBB()[8]
    }

    function _0x1E506() {
        _0x1BB69()[_0x1A917[25]] = _0x1CE41()[1]
    }

    function _0x1E549() {
        _0x1BB26()[_0x1A917[25]] = _0x1CE41()[2]
    }

    function _0x1E58C() {
        _0x1BD81()[_0x1A917[25]] = _0x1CE41()[3]
    }

    function _0x1E5CF() {
        _0x1BCFB()[_0x1A917[25]] = _0x1CE41()[4]
    }

    function _0x1E612() {
        _0x1BD3E()[_0x1A917[25]] = _0x1CE41()[5]
    }

    function _0x1E655() {
        _0x1BBAC()[_0x1A917[25]] = _0x1CE41()[6]
    }

    function _0x1E698() {
        _0x1BC75()[_0x1A917[25]] = _0x1CE41()[7]
    }

    function _0x1E6DB() {
        _0x1BE8D()[_0x1A917[25]] = _0x1CE41()[8]
    }

    function _0x1E71E() {
        _0x1BAE3()[_0x1A917[25]] = _0x1CE41()[9]
    }

    function _0x1E761() {
        _0x1BCB8()[_0x1A917[25]] = _0x1CE41()[10]
    }

    function _0x1E7A4() {
        _0x1BF99()[_0x1A917[25]] = _0x1CE41()[11]
    }

    function _0x1E7E7() {
        _0x1C01F()[_0x1A917[25]] = _0x1CEC7()[1]
    }

    function _0x1E82A() {
        _0x1BFDC()[_0x1A917[25]] = _0x1CEC7()[2]
    }

    function _0x1E86D() {
        _0x1C16E()[_0x1A917[25]] = _0x1CEC7()[3]
    }

    function _0x1E8B0() {
        _0x1AA23 = null
    }

    function _0x1E8F3() {
        _0x1C237()[_0x1A917[25]] = _0x1CEC7()[4]
    }

    function _0x1E936() {
        _0x1ACC1 = 0
    }

    function _0x1E979() {
        _0x1C40C()[_0x1A917[25]] = _0x1CEC7()[6]
    }

    function _0x1E9BC() {
        _0x1C1F4()[_0x1A917[25]] = _0x1CEC7()[7]
    }

    function _0x1E9FF() {
        _0x1C062()[_0x1A917[25]] = _0x1CEC7()[8]
    }

    function _0x1EA42() {
        _0x1C12B()[_0x1A917[25]] = _0x1CEC7()[9]
    }

    function _0x1EA85() {
        _0x1AAA9 = false
    }

    function _0x1EAC8() {
        _0x1C386()[_0x1A917[25]] = _0x1CEC7()[10]
    }

    function _0x1EB0B() {
        if (_0x1D446(_0x1ABB5)) {
            _0x1ABB5 = 0
        }
    }

    function _0x1EB4E() {
        _0x1C27A()[_0x1A917[25]] = _0x1CEC7()[11]
    }

    function _0x1EB91() {
        _0x1C44F()[_0x1A917[25]] = _0x1CEC7()[12]
    }

    function _0x1EBD4() {
        _0x1C6ED()[_0x1A917[25]] = _0x1CF4D()[1]
    }

    function _0x1EC17() {
        _0x1C7F9()[_0x1A917[25]] = _0x1CF4D()[2]
    }

    function _0x1EC5A() {
        _0x1C730()[_0x1A917[25]] = _0x1CF4D()[3]
    }

    function _0x1EC9D() {
        _0x1C7B6()[_0x1A917[25]] = _0x1CF4D()[4]
    }

    function _0x1ECE0() {
        _0x1C518()[_0x1A917[25]] = _0x1CF4D()[5]
    }

    function _0x1ED23() {
        _0x1C8C2()[_0x1A917[25]] = _0x1CF4D()[6]
    }

    function _0x1ED66() {
        _0x1C6AA()[_0x1A917[25]] = _0x1CF4D()[7]
    }

    function _0x1EDA9() {
        _0x1CB1D()[_0x1A917[25]] = _0x1CF4D()[8]
    }

    function _0x1EDEC() {
        _0x1CA11()[_0x1A917[25]] = _0x1CF4D()[9]
    }

    function _0x1EE2F() {
        _0x1C624()[_0x1A917[25]] = _0x1CF4D()[10]
    }

    function _0x1EE72() {
        _0x1C55B()[_0x1A917[25]] = _0x1CF4D()[11]
    }

    function _0x1EEB5() {
        _0x1CB60()[_0x1A917[25]] = _0x1CF4D()[12]
    }

    function _0x1EEF8() {
        _0x1C948()[_0x1A917[25]] = _0x1CF4D()[13]
    }

    function _0x1EF3B() {
        _0x1C98B()[_0x1A917[25]] = _0x1CF4D()[14]
    }

    function _0x1EF7E() {
        _0x1C773()[_0x1A917[25]] = _0x1CF4D()[15]
    }

    function _0x1EFC1() {
        _0x1C905()[_0x1A917[25]] = _0x1CF4D()[16]
    }

    function _0x1F004() {
        _0x1C667()[_0x1A917[25]] = _0x1CF4D()[17]
    }

    function _0x1F047() {
        _0x1CD35()[_0x1A917[84]][_0x1A917[80]] = _0x1D489(1)
    }

    function _0x1F08A() {
        _0x1D165()[_0x1A917[90]] = false
    }

    function _0x1F0CD() {
        _0x1CD35()[_0x1A917[90]] = false
    }

    function _0x1F110() {
        _0x1CBE6()[_0x1A917[90]] = false
    }

    function _0x1F153() {
        _0x1D016()[_0x1A917[90]] = false
    }

    function _0x1F196() {
        _0x1D1EB()[_0x1A917[90]] = false
    }

    function _0x1F1D9() {
        _0x1D1A8()[_0x1A917[90]] = false
    }

    function _0x1F21C() {
        _0x1CF90()[_0x1A917[90]] = false
    }

    function _0x1AD04() {
        return function() {
            
        }
    }

    function _0x1F25F() {
        _0x1CBE6()[_0x1A917[90]] = true
    }

    function _0x1F2A2() {
        _0x1AC3B = _0x1A917[23]
    }

    function _0x1AD47() {
        return function() {
			var intervalNum;
			var nextGamePageJS;
            _0x1F2E5();
            _0x1D122()(_0x1A917[110]);
            _0x1F328();
            _0x1F36B();
            _0x1F3AE();
            if (_0x1B06B(_0x1AB2F, 0)) {
                _0x1B0AE()(false);
                _0x1F3F1()
            };
            _0x1F434();
            /*if (_0x1B028(displayMoreGames, 1) || _0x1B028(displayMoreGames, 2)) {
                if (_0x1D446(_0x1A917)) {
                    _0x1B134()(true);
                    _0x1F477();
                    return
                };
                _0x1F4BA()
            };*/
            continueTweenTimer = _0x1CCAF()[_0x1A917[114]][_0x1A917[113]][_0x1A917[3]](_0x1AF1C(_0x1D0DF()[_0x1A917[112]][_0x1A917[111]], initialButtonTweenDelay), _0x1B5EA(), this);
            endTimeInterval = _0x1CCAF()[_0x1A917[114]][_0x1A917[113]][_0x1A917[3]](_0x1AF1C(_0x1D0DF()[_0x1A917[112]][_0x1A917[111]], intervalNum), nextGamePageJS)
        }
    }

    function _0x1F4FD() {
        _0x1D165()[_0x1A917[115]] = true
    }

    function _0x1F540() {
        _0x1D165()[_0x1A917[117]][_0x1A917[116]] = true
    }

    function _0x1F583() {
        _0x1D165()[_0x1A917[117]][_0x1A917[118]] = true
    }

    function _0x1F5C6() {
        _0x1D165()[_0x1A917[117]][_0x1A917[119]] = true
    }

    function _0x1F609() {
        _0x1CD35()[_0x1A917[115]] = true
    }

    function _0x1F64C() {
        _0x1CD35()[_0x1A917[117]][_0x1A917[116]] = true
    }

    function _0x1F68F() {
        _0x1CD35()[_0x1A917[117]][_0x1A917[118]] = true
    }

    function _0x1F6D2() {
        _0x1CD35()[_0x1A917[117]][_0x1A917[119]] = true
    }

    function _0x1AD8A() {
        return function() {
            if (_0x1D446(endScreenFinish)) {
                _0x1D122()(_0x1A917[121]);
                _0x1F715();
                _0x1F758();
                _0x1B3D2()()
            }
        }
    }

    function _0x1ADCD() {
        return function() {
            if (_0x1D446(endScreenFinish)) {
                _0x1D122()(_0x1A917[121]);
                _0x1F79B();
                if (_0x1D446(_0x1A917)) {
                    _0x1F7DE();
                    return
                };
                _0x1F821();
                if (_0x1D446(_0x1A99D)) {
                    return
                };
                _0x1B3D2()()
            }
        }
    }

    function _0x1F864() {
        _0x1D1EB()[_0x1A917[115]] = true
    }

    function _0x1F8A7() {
        _0x1D1EB()[_0x1A917[117]][_0x1A917[116]] = true
    }

    function _0x1F8EA() {
        _0x1D1EB()[_0x1A917[117]][_0x1A917[118]] = true
    }

    function _0x1F92D() {
        _0x1D1EB()[_0x1A917[117]][_0x1A917[119]] = true
    }

    function _0x1F970() {
        _0x1D1EB()[_0x1A917[117]][_0x1A917[122]] = 10
    }

    function _0x1F9B3() {
        _0x1D1A8()[_0x1A917[115]] = true
    }

    function _0x1F9F6() {
        _0x1D1A8()[_0x1A917[117]][_0x1A917[116]] = true
    }

    function _0x1FA39() {
        _0x1D1A8()[_0x1A917[117]][_0x1A917[118]] = true
    }

    function _0x1FA7C() {
        _0x1D1A8()[_0x1A917[117]][_0x1A917[119]] = true
    }

    function _0x1FABF() {
        _0x1D1A8()[_0x1A917[117]][_0x1A917[122]] = 10
    }

    function _0x1FB02() {
        _0x1D1A8()[_0x1A917[25]] = 0
    }

    function _0x1FB45() {
        _0x1D1A8()[_0x1A917[25]] = 29
    }

    function _0x1FB88() {
        endScreenFinish = true
    }

    function _0x1FBCB() {
        firstTime = false
    }

    function _0x1FC0E() {
        _0x1D1A8()[_0x1A917[25]] = 0
    }

    function _0x1FC51() {
        _0x1D1EB()[_0x1A917[25]] = 0
    }

    function _0x1FC94() {
        _0x1D1EB()[_0x1A917[25]] = 29
    }

    function _0x1FCD7() {
        _0x1D1EB()[_0x1A917[25]] = 0
    }

    function _0x1FD1A() {
        _0x1D22E()[_0x1A917[90]] = false
    }

    function _0x1AE10() {
        return function(_0x1AA23) {
            
        }
    }

    function _0x1F2E5() {
        _0x1CBE6()[_0x1A917[90]] = false
    }

    function _0x1F328() {
        _0x1D1EB()[_0x1A917[90]] = true
    }

    function _0x1F36B() {
        _0x1D1A8()[_0x1A917[90]] = true
    }

    function _0x1F3AE() {
        _0x1D165()[_0x1A917[90]] = false
    }

    function _0x1F3F1() {
        _0x1AA23 = null
    }

    function _0x1F434() {
        _0x1CD35()[_0x1A917[90]] = false
    }

    function _0x1F477() {
        _0x1AB2F = false
    }

    function _0x1F4BA() {
        _0x1D016()[_0x1A917[90]] = true
    }

    function _0x1F715() {
        endNum++
    }

    function _0x1F758() {
        if (_0x1B028(endNum, 2)) {
            endNum = 0
        }
    }

    function _0x1F79B() {
        endNum--
    }

    function _0x1F7DE() {
        _0x1AAEC = 1
    }

    function _0x1F821() {
        if (_0x1B028(endNum, -1)) {
            endNum = 1
        }
    }

    function _0x1FD5D(_0x1A95A, _0x1A99D) {
        _0x1A95A._[_0x1A917[132]] = _0x1A99D._
    }

    function _0x1AE53() {
        return function(_0x1A95A, _0x1A99D) {
            _0x1B5A7()[_0x1A917[135]](_0x1A95A, _0x1A99D)
        }
    }

    function _0x1AE96() {
        return function(_0x1A917) {}
    }
})()