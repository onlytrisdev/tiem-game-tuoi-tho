var endScreenFinish, endNum, endTimeInterval, endscreen, endScreenStart, replayOver, replayOut, replayDown, replayUp, saveOver, saveOut, saveDown, saveUp, hideAction;
(function() {
    function _0x1BD37() {
        return console
    }

    function _0x1C93F() {
        return exportCanvasAsPNG
    }

    function _0x1BCF1() {
        return canvas
    }

    function _0x1BD14() {
        return CanvasImageSaver
    }

    function _0x1C985() {
        return Image
    }

    function _0x1CBFB() {
        return setTimeout
    }

    function _0x1BC65() {
        return _0x1B9A9
    }

    function _0x1CCAA() {
        return transitionIn
    }

    function _0x1C91C() {
        return endTimeInterval
    }

    function _0x1CCF0(_0x1B805) {
        return !_0x1B805
    }

    function _0x1CB29() {
        return nextGamePageJS
    }

    function _0x1CB4C() {
        return Phaser
    }

    function _0x1BAC1(_0x1B805, _0x1B828) {
        return _0x1B805 * _0x1B828
    }

    function _0x1CB6F() {
        return playsoundeffects
    }

    function _0x1BBB6() {
        return _0x1B8FA
    }

    function _0x1BB93() {
        return _0x1B8D7
    }

    function _0x1BB70() {
        return _0x1B8B4
    }

    function _0x1BB4D() {
        return _0x1B891
    }

    function _0x1BC42() {
        return _0x1B986
    }

    function _0x1BC1F() {
        return _0x1B963
    }

    function _0x1BBFC() {
        return _0x1B940
    }

    function _0x1BBD9() {
        return _0x1B91D
    }

    function _0x1CAE3() {
        return moreGamesUp
    }

    function _0x1CA7A() {
        return moreGamesDown
    }

    function _0x1CA9D() {
        return moreGamesOut
    }

    function _0x1CAC0() {
        return moreGamesOver
    }

    function _0x1BC88() {
        return _fRg_X95
    }

    function _0x1BB2A(_0x1B805, _0x1B828) {
        return _0x1B805 === _0x1B828
    }

    function _0x1BD5A() {
        return document
    }

    function _0x1CA11() {
        return level4Arr1
    }

    function _0x1C9EE() {
        return level3Arr1
    }

    function _0x1C9CB() {
        return level2Arr1
    }

    function _0x1C9A8() {
        return level1Arr1
    }

    function _0x1CD13(_0x1B805) {
        return -_0x1B805
    }

    function _0x1C8D6() {
        return endbackground
    }

    function _0x1BCCE() {
        return blurY
    }

    function _0x1BCAB() {
        return blurX
    }

    function _0x1CCCD() {
        return transitionOut
    }

    function _0x1CC1E() {
        return setting
    }

    function _0x1CC64() {
        return socialicon
    }

    function _0x1CB06() {
        return mute
    }

    function _0x1CBD8() {
        return savegroup
    }

    function _0x1CA34() {
        return logofbkmute
    }

    function _0x1CB92() {
        return replay
    }

    function _0x1CA57() {
        return moregames
    }

    function _0x1CBB5() {
        return save
    }

    function _0x1C8F9() {
        return endScreenGlitter
    }

    function _0x1BFAD() {
        return doll1overhand
    }

    function _0x1BF44() {
        return doll1hand
    }

    function _0x1BF67() {
        return doll1headacc
    }

    function _0x1BEB8() {
        return doll1glassacc
    }

    function _0x1BFF3() {
        return doll1studacc
    }

    function _0x1BF21() {
        return doll1hair
    }

    function _0x1BEDB() {
        return doll1glassmidacc
    }

    function _0x1BE4F() {
        return doll1chainmidacc
    }

    function _0x1BF8A() {
        return doll1over
    }

    function _0x1BE72() {
        return doll1dress
    }

    function _0x1BE2C() {
        return doll1bottom
    }

    function _0x1C016() {
        return doll1top
    }

    function _0x1BFD0() {
        return doll1overshade
    }

    function _0x1BE09() {
        return doll1body
    }

    function _0x1BDE6() {
        return doll1backhair
    }

    function _0x1BD7D() {
        return doll1backacc
    }

    function _0x1BDC3() {
        return doll1backdress
    }

    function _0x1BEFE() {
        return doll1Group
    }

    function _0x1BDA0() {
        return doll1backbottom
    }

    function _0x1BE95() {
        return doll1eyeblink
    }

    function _0x1C4DF() {
        return doll3overhand
    }

    function _0x1C3EA() {
        return doll3dresshand
    }

    function _0x1C56B() {
        return doll3tophand
    }

    function _0x1C499() {
        return doll3hand
    }

    function _0x1C2AF() {
        return doll3acc
    }

    function _0x1C525() {
        return doll3stud
    }

    function _0x1C430() {
        return doll3glass
    }

    function _0x1C476() {
        return doll3hair
    }

    function _0x1C4BC() {
        return doll3over
    }

    function _0x1C3A4() {
        return doll3chain
    }

    function _0x1C3C7() {
        return doll3dress
    }

    function _0x1C548() {
        return doll3top
    }

    function _0x1C381() {
        return doll3bottom
    }

    function _0x1C502() {
        return doll3overshade
    }

    function _0x1C35E() {
        return doll3body
    }

    function _0x1C2F5() {
        return doll3backdress
    }

    function _0x1C33B() {
        return doll3backover
    }

    function _0x1C318() {
        return doll3backhair
    }

    function _0x1C453() {
        return doll3Group
    }

    function _0x1C2D2() {
        return doll3backacc
    }

    function _0x1C40D() {
        return doll3eyeblink
    }

    function _0x1C827() {
        return doll4overhand
    }

    function _0x1C6C9() {
        return doll4dresshand
    }

    function _0x1C8B3() {
        return doll4tophand
    }

    function _0x1C778() {
        return doll4hand
    }

    function _0x1C58E() {
        return doll4acc
    }

    function _0x1C63D() {
        return doll4bag
    }

    function _0x1C86D() {
        return doll4stud
    }

    function _0x1C70F() {
        return doll4glass
    }

    function _0x1C755() {
        return doll4hair
    }

    function _0x1C7BE() {
        return doll4midbag
    }

    function _0x1C7E1() {
        return doll4midglass
    }

    function _0x1C79B() {
        return doll4midacc
    }

    function _0x1C804() {
        return doll4over
    }

    function _0x1C6A6() {
        return doll4dress
    }

    function _0x1C683() {
        return doll4bottom
    }

    function _0x1C890() {
        return doll4top
    }

    function _0x1C84A() {
        return doll4overshade
    }

    function _0x1C660() {
        return doll4body
    }

    function _0x1C61A() {
        return doll4backover
    }

    function _0x1C5F7() {
        return doll4backhair
    }

    function _0x1C5D4() {
        return doll4backacc1
    }

    function _0x1C732() {
        return doll4Group
    }

    function _0x1C5B1() {
        return doll4backacc
    }

    function _0x1C6EC() {
        return doll4eyeblink
    }

    function _0x1C039() {
        return doll2acc
    }

    function _0x1C269() {
        return doll2stud
    }

    function _0x1C1BA() {
        return doll2hair
    }

    function _0x1C0E8() {
        return doll2bag
    }

    function _0x1C200() {
        return doll2midacc
    }

    function _0x1C1DD() {
        return doll2head
    }

    function _0x1C223() {
        return doll2over
    }

    function _0x1C151() {
        return doll2dress
    }

    function _0x1C12E() {
        return doll2bottom
    }

    function _0x1C28C() {
        return doll2top
    }

    function _0x1C246() {
        return doll2overshade
    }

    function _0x1C10B() {
        return doll2body
    }

    function _0x1C07F() {
        return doll2backdress
    }

    function _0x1C0C5() {
        return doll2backover
    }

    function _0x1C0A2() {
        return doll2backhair
    }

    function _0x1C197() {
        return doll2Group
    }

    function _0x1C05C() {
        return doll2backacc
    }

    function _0x1C174() {
        return doll2eyeblink
    }

    function _0x1C962() {
        return game
    }

    function _0x1CC41() {
        return showAdOnPosition
    }

    function _0x1CC87() {
        return String
    }

    function _0x1BA9E(_0x1B805, _0x1B828) {
        return _0x1B805 % _0x1B828
    }

    function _0x1BAE4(_0x1B805, _0x1B828) {
        return _0x1B805 + _0x1B828
    }

    function _0x1BB07(_0x1B805, _0x1B828) {
        return _0x1B805 < _0x1B828
    }
    var _0x1B805 = (_0x1B9CC)("endecc%b3%keooe%dtaxactloodl%vomd%Bo%Uldfrllc%%ls2l%3m%lo%filtonsCubll2bacelcitpedl1ulcdaaonXmvalhh3dlivec%doollhalcdedd4tkllsrnodyuslloolsuo3kdr2%lrl%2dcg%%oNlldoonrmBlololdeesbrn3olIar%rplsics%cleoadb_ddyatfl4e%%dnidsHlnn%d1%yedla%2mldCPptlclth1det%doyoi33rnuta%lllsColtaPkauc%o%ln4so%thrlltdo%iabdi1o%%rdgo1a4e2dpol1iaaey%%llne%ddlpi%vtnshrrerdmy%%tepcroasnlakshmeeicl1hlelnlgloololpeal3_sdupek%c%%odo4%dg%%i%sltddd4kb%endoll%molondanlbodapi3l%kdeolorccteo1p%hcnodtykuabdl%brkklccodptaelpldsais%oedotedttoloxadaol3vsckvlr%o%saslhdacOnl%ab3btb%vilxolto%e%se2o2rrlldC12ecllTrd%dmhlglol%llosdklest%loNlndlbaaorllmboo%ldlo4el%b%dol2redctlAo%S%iopnmdm%allstdr%dsralpaot3lonvprga2lt%r%%uaaceyortkcmIallo44eecmerr%dvy%vbnIhaec%ioot1oca%bedv%hrsuosdvls%lid1eccbevntdrlokimaorsrun1%i%erilfnvdlllsltt:aelseelsdra%icdddovltoebpd%dumtoad%%%%lllhpirleoiabeyeodplcahlnumdoll1hbe%e43dilolbedl%eoekrd%rlgbncsol%heodeeadneb4irrldc%chnaee%raask%ddraiaheoddenobloSCsdxitp%l/csndfobnaatio%dnaiehckev%iolawlfdinkbnahmlo/2herd%ae2aoo3orkegodep%d2e%uitce%col%amolk%hOrnhdlnk3pP%roelfO4ddTlmer%iybn%c%iioi%eonG%Eauu/lr%tbervndCusloe%sepltnpolerPegl4iaOoerciaraEler%oedsldr%ep%nabrlhfdcrevdnell%enrnvOdcapbtc%prteht4reIllddDlhar%%o1tooo4ostdprclbred%%e3%do%%3spxuul%bcaipre%oamrfl%p%ugYosDvlaec1lvce%4uishtvaodoo%h2c%rcpsns4hoeonwvoitoi%eo1ndsoo", 3711414);

    function _0x1B9CC(_0x1B986, _0x1B8FA) {
        var _0x1B8D7 = {},
            _0x1B940 = {},
            _0x1B91D = {},
            _0x1B9EF = {},
            _0x1B8B4 = {},
            _0x1B963 = {},
            _0x1B828 = {};
        _0x1B8D7._ = _0x1B8FA;
        var _0x1BA35 = _0x1B986.length;
        _0x1B940._ = [];;
        for (var _0x1B9A9 = 0; _0x1BB07(_0x1B9A9, _0x1BA35); _0x1B9A9++) {
            _0x1B940._[_0x1B9A9] = _0x1B986.charAt(_0x1B9A9)
        };
        for (var _0x1B9A9 = 0; _0x1BB07(_0x1B9A9, _0x1BA35); _0x1B9A9++) {
            _0x1B91D._ = _0x1BAE4(_0x1B8D7._ * (_0x1BAE4(_0x1B9A9, 118)), (_0x1BA9E(_0x1B8D7._, 38760)));;
            _0x1B9EF._ = _0x1BAE4(_0x1B8D7._ * (_0x1BAE4(_0x1B9A9, 493)), (_0x1BA9E(_0x1B8D7._, 50127)));;
            _0x1B8B4._ = _0x1BA9E(_0x1B91D._, _0x1BA35);;
            _0x1B963._ = _0x1BA9E(_0x1B9EF._, _0x1BA35);;
            _0x1B828._ = _0x1B940._[_0x1B8B4._];;
            _0x1CD36(_0x1B8B4, _0x1B940, _0x1B963);
            _0x1CD59(_0x1B963, _0x1B940, _0x1B828);
            _0x1CD7C(_0x1B8D7, _0x1B91D, _0x1B9EF)
        };
        var _0x1B891 = _0x1CC87().fromCharCode(127);
        var _0x1B84B = '';
        var _0x1BA12 = '\x25';
        var _0x1BA58 = '\x23\x31';
        var _0x1B805 = '\x25';
        var _0x1B9CC = '\x23\x30';
        var _0x1B86E = '\x23';
        return _0x1B940._.join(_0x1B84B).split(_0x1BA12).join(_0x1B891).split(_0x1BA58).join(_0x1B805).split(_0x1B9CC).join(_0x1B86E).split(_0x1B891)
    }

    function _0x1B828() {
        _0x1CD9F();
        _0x1CDC2();
        _0x1CDE5();
        _0x1CE08();
        _0x1CE2B()
    }

    function _0x1B84B() {
        
        endbackground = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](0, 0, _0x1B805[1]);
        blurX = _0x1C962()[_0x1B805[3]][_0x1B805[6]](_0x1B805[5]);
        blurY = _0x1C962()[_0x1B805[3]][_0x1B805[6]](_0x1B805[7]);
        _0x1CE4E();
        _0x1CE71();
        _0x1CE94();
        doll2backacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](370, 280, _0x1B805[10]);
        doll2backhair = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](20, 61, _0x1B805[11]);
        doll2backover = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](229, 135, _0x1B805[12]);
        doll2backdress = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](200, 438, _0x1B805[13]);
        doll2body = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](164, 0, _0x1B805[14]);
        doll2overshade = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](215, 315, _0x1B805[15]);
        doll2top = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](238, 0, _0x1B805[16]);
        doll2bottom = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](218, 276, _0x1B805[17]);
        doll2dress = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](185, 1, _0x1B805[18]);
        doll2over = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](175, 0, _0x1B805[19]);
        doll2head = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](335, 37, _0x1B805[20]);
        doll2eyeblink = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](359, 81, _0x1B805[21]);
        _0x1C174()[_0x1B805[22]][_0x1B805[3]](_0x1B805[21], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1C174()[_0x1B805[22]][_0x1B805[23]](_0x1B805[21], 24, true);
        doll2midacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](290, 138, _0x1B805[24]);
        doll2bag = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](290, 138, _0x1B805[24]);
        doll2hair = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](246, 0, _0x1B805[25]);
        doll2stud = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](325, 72, _0x1B805[26]);
        doll2acc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](325, 72, _0x1B805[26]);
        doll2Group = _0x1C962()[_0x1B805[3]][_0x1B805[27]]();
        _0x1C197()[_0x1B805[3]](_0x1C05C());
        _0x1C197()[_0x1B805[3]](_0x1C0A2());
        _0x1C197()[_0x1B805[3]](_0x1C0C5());
        _0x1C197()[_0x1B805[3]](_0x1C07F());
        _0x1C197()[_0x1B805[3]](_0x1C10B());
        _0x1C197()[_0x1B805[3]](_0x1C246());
        _0x1C197()[_0x1B805[3]](_0x1C28C());
        _0x1C197()[_0x1B805[3]](_0x1C12E());
        _0x1C197()[_0x1B805[3]](_0x1C151());
        _0x1C197()[_0x1B805[3]](_0x1C223());
        _0x1C197()[_0x1B805[3]](_0x1C1DD());
        _0x1C197()[_0x1B805[3]](_0x1C174());
        _0x1C197()[_0x1B805[3]](_0x1C200());
        _0x1C197()[_0x1B805[3]](_0x1C0E8());
        _0x1C197()[_0x1B805[3]](_0x1C1BA());
        _0x1C197()[_0x1B805[3]](_0x1C269());
        _0x1C197()[_0x1B805[3]](_0x1C039());
        doll4backacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](236, 10, _0x1B805[28]);
        doll4backacc1 = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](236, 10, _0x1B805[28]);
        doll4backhair = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](280, 46, _0x1B805[29]);
        doll4backover = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](274, 137, _0x1B805[30]);
        doll4body = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](264, 40, _0x1B805[31]);
        doll4eyeblink = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](324, 95, _0x1B805[32]);
        _0x1C6EC()[_0x1B805[22]][_0x1B805[3]](_0x1B805[32], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1C6EC()[_0x1B805[22]][_0x1B805[23]](_0x1B805[32], 24, true);
        doll4overshade = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](274, 128, _0x1B805[33]);
        doll4top = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](269, 154, _0x1B805[34]);
        doll4bottom = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](284, 289, _0x1B805[35]);
        doll4dress = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](227, 151, _0x1B805[36]);
        doll4over = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](253, 145, _0x1B805[37]);
        doll4midacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](278, 86, _0x1B805[38]);
        doll4midglass = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](278, 86, _0x1B805[38]);
        doll4midbag = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](278, 86, _0x1B805[38]);
        doll4hair = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](236, 0, _0x1B805[39]);
        doll4glass = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](298, 8, _0x1B805[40]);
        doll4stud = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](298, 8, _0x1B805[40]);
        doll4bag = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](298, 8, _0x1B805[40]);
        doll4acc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](298, 8, _0x1B805[40]);
        doll4hand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](273, 146, _0x1B805[41]);
        doll4tophand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](271, 196, _0x1B805[42]);
        doll4dresshand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](261, 192, _0x1B805[43]);
        doll4overhand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](257, 179, _0x1B805[44]);
        doll4Group = _0x1C962()[_0x1B805[3]][_0x1B805[27]]();
        _0x1C732()[_0x1B805[3]](_0x1C5B1());
        _0x1C732()[_0x1B805[3]](_0x1C5D4());
        _0x1C732()[_0x1B805[3]](_0x1C5F7());
        _0x1C732()[_0x1B805[3]](_0x1C61A());
        _0x1C732()[_0x1B805[3]](_0x1C660());
        _0x1C732()[_0x1B805[3]](_0x1C6EC());
        _0x1C732()[_0x1B805[3]](_0x1C84A());
        _0x1C732()[_0x1B805[3]](_0x1C890());
        _0x1C732()[_0x1B805[3]](_0x1C683());
        _0x1C732()[_0x1B805[3]](_0x1C6A6());
        _0x1C732()[_0x1B805[3]](_0x1C804());
        _0x1C732()[_0x1B805[3]](_0x1C79B());
        _0x1C732()[_0x1B805[3]](_0x1C7E1());
        _0x1C732()[_0x1B805[3]](_0x1C7BE());
        _0x1C732()[_0x1B805[3]](_0x1C755());
        _0x1C732()[_0x1B805[3]](_0x1C70F());
        _0x1C732()[_0x1B805[3]](_0x1C86D());
        _0x1C732()[_0x1B805[3]](_0x1C63D());
        _0x1C732()[_0x1B805[3]](_0x1C58E());
        _0x1C732()[_0x1B805[3]](_0x1C778());
        _0x1C732()[_0x1B805[3]](_0x1C8B3());
        _0x1C732()[_0x1B805[3]](_0x1C6C9());
        _0x1C732()[_0x1B805[3]](_0x1C827());
        doll3backacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](259, 23, _0x1B805[45]);
        doll3backhair = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](287, 82, _0x1B805[46]);
        doll3backover = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](305, 149, _0x1B805[47]);
        doll3backdress = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](211, 383, _0x1B805[48]);
        doll3body = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](244, 31, _0x1B805[49]);
        doll3eyeblink = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](302, 94, _0x1B805[50]);
        _0x1C40D()[_0x1B805[22]][_0x1B805[3]](_0x1B805[50], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1C40D()[_0x1B805[22]][_0x1B805[23]](_0x1B805[50], 24, true);
        doll3overshade = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](241, 137, _0x1B805[51]);
        doll3bottom = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](197, 275, _0x1B805[52]);
        doll3top = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](290, 137, _0x1B805[53]);
        doll3dress = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](234, 139, _0x1B805[54]);
        doll3over = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](220, 127, _0x1B805[55]);
        doll3hair = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](262, 24, _0x1B805[56]);
        doll3chain = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](247, 13, _0x1B805[57]);
        doll3glass = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](247, 13, _0x1B805[57]);
        doll3stud = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](247, 13, _0x1B805[57]);
        doll3acc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](247, 13, _0x1B805[57]);
        doll3hand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](346, 136, _0x1B805[58]);
        doll3tophand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](367, 151, _0x1B805[59]);
        doll3dresshand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](379, 161, _0x1B805[60]);
        doll3overhand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](386, 161, _0x1B805[61]);
        doll3Group = _0x1C962()[_0x1B805[3]][_0x1B805[27]]();
        _0x1C453()[_0x1B805[3]](_0x1C2D2());
        _0x1C453()[_0x1B805[3]](_0x1C318());
        _0x1C453()[_0x1B805[3]](_0x1C33B());
        _0x1C453()[_0x1B805[3]](_0x1C2F5());
        _0x1C453()[_0x1B805[3]](_0x1C35E());
        _0x1C453()[_0x1B805[3]](_0x1C40D());
        _0x1C453()[_0x1B805[3]](_0x1C502());
        _0x1C453()[_0x1B805[3]](_0x1C381());
        _0x1C453()[_0x1B805[3]](_0x1C548());
        _0x1C453()[_0x1B805[3]](_0x1C3C7());
        _0x1C453()[_0x1B805[3]](_0x1C3A4());
        _0x1C453()[_0x1B805[3]](_0x1C4BC());
        _0x1C453()[_0x1B805[3]](_0x1C476());
        _0x1C453()[_0x1B805[3]](_0x1C430());
        _0x1C453()[_0x1B805[3]](_0x1C525());
        _0x1C453()[_0x1B805[3]](_0x1C2AF());
        _0x1C453()[_0x1B805[3]](_0x1C499());
        _0x1C453()[_0x1B805[3]](_0x1C56B());
        _0x1C453()[_0x1B805[3]](_0x1C3EA());
        _0x1C453()[_0x1B805[3]](_0x1C4DF());
        doll1backbottom = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](262, 394, _0x1B805[62]);
        doll1backdress = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](274, 571, _0x1B805[63]);
        doll1backacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](257, 0, _0x1B805[64]);
        doll1backhair = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](286, 51, _0x1B805[65]);
        doll1body = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](268, 43, _0x1B805[66]);
        doll1eyeblink = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](325, 97, _0x1B805[67]);
        _0x1BE95()[_0x1B805[22]][_0x1B805[3]](_0x1B805[67], [0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x1BE95()[_0x1B805[22]][_0x1B805[23]](_0x1B805[67], 24, true);
        doll1overshade = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](272, 301, _0x1B805[68]);
        doll1top = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](257, 157, _0x1B805[69]);
        doll1bottom = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](233, 289, _0x1B805[70]);
        doll1dress = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](245, 153, _0x1B805[71]);
        doll1over = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](263, 156, _0x1B805[72]);
        doll1chainmidacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](283, 88, _0x1B805[73]);
        doll1glassmidacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](283, 88, _0x1B805[73]);
        doll1hair = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](256, 0, _0x1B805[74]);
        doll1studacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](259, 0, _0x1B805[75]);
        doll1glassacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](259, 0, _0x1B805[75]);
        doll1headacc = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](259, 0, _0x1B805[75]);
        doll1hand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](284, 118, _0x1B805[76]);
        doll1overhand = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](275, 169, _0x1B805[77]);
        doll1Group = _0x1C962()[_0x1B805[3]][_0x1B805[27]]();
        _0x1BEFE()[_0x1B805[3]](_0x1BDA0());
        _0x1BEFE()[_0x1B805[3]](_0x1BDC3());
        _0x1BEFE()[_0x1B805[3]](_0x1BD7D());
        _0x1BEFE()[_0x1B805[3]](_0x1BDE6());
        _0x1BEFE()[_0x1B805[3]](_0x1BE09());
        _0x1BEFE()[_0x1B805[3]](_0x1BE95());
        _0x1BEFE()[_0x1B805[3]](_0x1BFD0());
        _0x1BEFE()[_0x1B805[3]](_0x1C016());
        _0x1BEFE()[_0x1B805[3]](_0x1BE2C());
        _0x1BEFE()[_0x1B805[3]](_0x1BE72());
        _0x1BEFE()[_0x1B805[3]](_0x1BF8A());
        _0x1BEFE()[_0x1B805[3]](_0x1BE4F());
        _0x1BEFE()[_0x1B805[3]](_0x1BEDB());
        _0x1BEFE()[_0x1B805[3]](_0x1BF21());
        _0x1BEFE()[_0x1B805[3]](_0x1BFF3());
        _0x1BEFE()[_0x1B805[3]](_0x1BEB8());
        _0x1BEFE()[_0x1B805[3]](_0x1BF67());
        _0x1BEFE()[_0x1B805[3]](_0x1BF44());
        _0x1BEFE()[_0x1B805[3]](_0x1BFAD());
        _0x1CEB7();
        _0x1CEDA();
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
        _0x1D07E();
        _0x1D0A1();
        _0x1D0C4();
        _0x1D0E7();
        _0x1D10A();
        _0x1D12D();
        _0x1D150();
        _0x1D173();
        _0x1D196();
        _0x1D1B9();
        _0x1D1DC();
        _0x1D1FF();
        _0x1D222();
        _0x1D245();
        _0x1D268();
        _0x1D28B();
        _0x1D2AE();
        _0x1D2D1();
        _0x1D2F4();
        _0x1D317();
        _0x1D33A();
        _0x1D35D();
        _0x1D380();
        _0x1D3A3();
        _0x1D3C6();
        _0x1D3E9();
        _0x1D40C();
        _0x1D42F();
        _0x1D452();
        _0x1D475();
        _0x1D498();
        _0x1D4BB();
        _0x1D4DE();
        _0x1D501();
        _0x1D524();
        _0x1D547();
        _0x1D56A();
        _0x1D58D();
        _0x1D5B0();
        _0x1D5D3();
        _0x1D5F6();
        _0x1D619();
        _0x1D63C();
        _0x1D65F();
        _0x1D682();
        _0x1D6A5();
        _0x1D6C8();
        _0x1D6EB();
        _0x1D70E();
        _0x1D731();
        _0x1D754();
        _0x1D777();
        _0x1D79A();
        _0x1D7BD();
        _0x1D7E0();
        _0x1D803();
        _0x1D826();
        endScreenGlitter = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](400, 300, _0x1B805[80]);
        _0x1C8F9()[_0x1B805[82]][_0x1B805[81]](0.5);
        _0x1D849();
        save = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[85]](164, 536, _0x1B805[84]);
        _0x1CBB5()[_0x1B805[82]][_0x1B805[81]](0.5);
        moregames = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[2]](60, 545, _0x1B805[86]);
        _0x1CA57()[_0x1B805[82]][_0x1B805[81]](0.5);
        _0x1CA57()[_0x1B805[22]][_0x1B805[3]](_0x1B805[86]);
        _0x1CA57()[_0x1B805[22]][_0x1B805[23]](_0x1B805[86], 24, true);
        replay = this[_0x1B805[4]][_0x1B805[3]][_0x1B805[85]](740, 538, _0x1B805[87]);
        _0x1CB92()[_0x1B805[82]][_0x1B805[81]](0.5);
        _0x1D86C();
        _0x1D88F();
        _0x1CA34()();
        savegroup = _0x1C962()[_0x1B805[3]][_0x1B805[27]]();
        _0x1CBD8()[_0x1B805[3]](_0x1CBB5());
        _0x1CBD8()[_0x1B805[3]](_0x1CA57());
        _0x1CBD8()[_0x1B805[3]](_0x1CB92());
        _0x1CBD8()[_0x1B805[3]](_0x1CB06());
        _0x1CBD8()[_0x1B805[3]](_0x1CC64());
        _0x1CBD8()[_0x1B805[3]](_0x1CC1E());
        _0x1CCCD()();
        (_0x1B9EF()())
    }

    function _0x1B86E() {
        var _0x1B828 = {};
        _0x1B828._ = _0x1BA12();
        _0x1D8B2();
        _0x1C8F9()[_0x1B805[22]][_0x1B805[3]](_0x1B805[98]);
        _0x1C8F9()[_0x1B805[22]][_0x1B805[23]](_0x1B805[98], 24, false)[_0x1B805[99]][_0x1B805[3]](_0x1B828._, this);
        _0x1D93E();
        _0x1D961();
        _0x1D984();
        _0x1D9A7();
        _0x1D9CA();
        _0x1CA57()[_0x1B805[103]][_0x1B805[111]][_0x1B805[3]](_0x1CAC0(), this);
        _0x1CA57()[_0x1B805[103]][_0x1B805[112]][_0x1B805[3]](_0x1CA9D(), this);
        _0x1CA57()[_0x1B805[103]][_0x1B805[113]][_0x1B805[3]](_0x1CA7A(), this);
        _0x1CA57()[_0x1B805[103]][_0x1B805[114]][_0x1B805[3]](_0x1CAE3(), this);
        _0x1D9ED();
        _0x1DA10();
        _0x1DA33();
        _0x1DA56();
        _0x1DA79();
        _0x1CBB5()[_0x1B805[103]][_0x1B805[111]][_0x1B805[3]](_0x1BBD9(), this);
        _0x1CBB5()[_0x1B805[103]][_0x1B805[112]][_0x1B805[3]](_0x1BBFC(), this);
        _0x1CBB5()[_0x1B805[103]][_0x1B805[113]][_0x1B805[3]](_0x1BC1F(), this);
        _0x1CBB5()[_0x1B805[103]][_0x1B805[114]][_0x1B805[3]](_0x1BC42(), this);
        _0x1DA9C();
        _0x1DABF();
        _0x1DAE2();
        _0x1DB05();
        _0x1DB28();
        _0x1CB92()[_0x1B805[103]][_0x1B805[111]][_0x1B805[3]](_0x1BB4D(), this);
        _0x1CB92()[_0x1B805[103]][_0x1B805[112]][_0x1B805[3]](_0x1BB70(), this);
        _0x1CB92()[_0x1B805[103]][_0x1B805[113]][_0x1B805[3]](_0x1BB93(), this);
        _0x1CB92()[_0x1B805[103]][_0x1B805[114]][_0x1B805[3]](_0x1BBB6(), this)
    }

    function _0x1B891(_0x1B828) {
        _0x1CB92()[_0x1B805[22]][_0x1B805[3]](_0x1B805[87], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
        _0x1CB92()[_0x1B805[22]][_0x1B805[23]](_0x1B805[87], 24, false)
    }

    function _0x1B8B4(_0x1B828) {
        _0x1CB92()[_0x1B805[22]][_0x1B805[115]](null, true);
        _0x1DB4B()
    }

    function _0x1B8D7(_0x1B828) {
        if (_0x1CCF0(endScreenFinish)) {
            _0x1CB6F()(_0x1B805[116]);
            _0x1CB92()[_0x1B805[22]][_0x1B805[115]](null, true);
            _0x1DB6E();
            _0x1C962()[_0x1B805[104]][_0x1B805[103]][_0x1B805[117]](_0x1C91C())
        }
    }

    function _0x1B8FA(_0x1B805) {
        if (_0x1CCF0(endScreenFinish)) {
            _0x1DB91();
            _0x1DBB4();
            _0x1CCAA()()
        }
    }

    function _0x1B91D(_0x1B828) {
        _0x1CBB5()[_0x1B805[22]][_0x1B805[3]](_0x1B805[84], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
        _0x1CBB5()[_0x1B805[22]][_0x1B805[23]](_0x1B805[84], 24, false)
    }

    function _0x1B940(_0x1B828) {
        _0x1CBB5()[_0x1B805[22]][_0x1B805[115]](null, true);
        _0x1DBD7()
    }

    function _0x1B963(_0x1B828) {
        if (_0x1CCF0(endScreenFinish)) {
            _0x1CB6F()(_0x1B805[116]);
            _0x1CBB5()[_0x1B805[22]][_0x1B805[115]](null, true);
            _0x1DBFA()
        }
    }

    function _0x1B986(_0x1B828) {
        if (_0x1CCF0(endScreenFinish)) {
            _0x1DC1D();
            _0x1DC40();
            _0x1CBFB()(_0x1BC65(), 500);
            _0x1C962()[_0x1B805[118]] = _0x1C962()[_0x1B805[121]][_0x1B805[3]](_0x1CB4C()[_0x1B805[120]][_0x1B805[119]]);
            _0x1C962()[_0x1B805[118]][_0x1B805[127]](_0x1BA35())
        }
    }

    function _0x1B9A9() {
        _0x1CBD8()[_0x1B805[83]] = true
    }
    endScreenStart = _0x1B86E;
    replayOver = _0x1B891;
    replayOut = _0x1B8B4;
    replayDown = _0x1B8D7;
    replayUp = _0x1B8FA;
    saveOver = _0x1B91D;
    saveOut = _0x1B940;
    saveDown = _0x1B963;
    saveUp = _0x1B986;
    hideAction = _0x1B9A9;
    endScreenFinish = false;
    endNum = 0;
    endTimeInterval = 0;
    endscreen = {
        preload: _0x1B828,
        create: _0x1B84B
    };

    function _0x1CD36(_0x1B805, _0x1B828, _0x1B84B) {
        _0x1B828._[_0x1B805._] = _0x1B828._[_0x1B84B._]
    }

    function _0x1CD59(_0x1B84B, _0x1B828, _0x1B805) {
        _0x1B828._[_0x1B84B._] = _0x1B805._
    }

    function _0x1CD7C(_0x1B805, _0x1B828, _0x1B84B) {
        _0x1B805._ = _0x1BA9E((_0x1BAE4(_0x1B828._, _0x1B84B._)), 6901505)
    }

    function _0x1CD9F() {
        endScreenFinish = false
    }

    function _0x1CDC2() {
        pageNo = 9
    }

    function _0x1CDE5() {
        setcount = false
    }

    function _0x1CE08() {
        endNum = 0
    }

    function _0x1CE2B() {
        endTimeInterval = 0
    }

    function _0x1CE4E() {
        _0x1BCAB()[_0x1B805[8]] = 5
    }

    function _0x1CE71() {
        _0x1BCCE()[_0x1B805[8]] = 5
    }

    function _0x1CE94() {
        _0x1C8D6()[_0x1B805[9]] = [_0x1BCAB(), _0x1BCCE()]
    }

    function _0x1CEB7() {
        _0x1BEFE()[_0x1B805[78]] = _0x1CD13(10)
    }

    function _0x1CEDA() {
        _0x1C197()[_0x1B805[78]] = 250
    }

    function _0x1CEFD() {
        _0x1C453()[_0x1B805[78]] = _0x1CD13(160)
    }

    function _0x1CF20() {
        _0x1C732()[_0x1B805[78]] = 100
    }

    function _0x1CF43() {
        _0x1BDA0()[_0x1B805[79]] = _0x1C9A8()[1]
    }

    function _0x1CF66() {
        _0x1BDC3()[_0x1B805[79]] = _0x1C9A8()[2]
    }

    function _0x1CF89() {
        _0x1BD7D()[_0x1B805[79]] = _0x1C9A8()[3]
    }

    function _0x1CFAC() {
        _0x1BDE6()[_0x1B805[79]] = _0x1C9A8()[4]
    }

    function _0x1CFCF() {
        _0x1BFD0()[_0x1B805[79]] = _0x1C9A8()[5]
    }

    function _0x1CFF2() {
        _0x1C016()[_0x1B805[79]] = _0x1C9A8()[6]
    }

    function _0x1D015() {
        _0x1BE2C()[_0x1B805[79]] = _0x1C9A8()[7]
    }

    function _0x1D038() {
        _0x1BE72()[_0x1B805[79]] = _0x1C9A8()[8]
    }

    function _0x1D05B() {
        _0x1BF8A()[_0x1B805[79]] = _0x1C9A8()[9]
    }

    function _0x1D07E() {
        _0x1BE4F()[_0x1B805[79]] = _0x1C9A8()[10]
    }

    function _0x1D0A1() {
        _0x1BEDB()[_0x1B805[79]] = _0x1C9A8()[11]
    }

    function _0x1D0C4() {
        _0x1BF21()[_0x1B805[79]] = _0x1C9A8()[12]
    }

    function _0x1D0E7() {
        _0x1BFF3()[_0x1B805[79]] = _0x1C9A8()[13]
    }

    function _0x1D10A() {
        _0x1BEB8()[_0x1B805[79]] = _0x1C9A8()[14]
    }

    function _0x1D12D() {
        _0x1BF67()[_0x1B805[79]] = _0x1C9A8()[15]
    }

    function _0x1D150() {
        _0x1BFAD()[_0x1B805[79]] = _0x1C9A8()[16]
    }

    function _0x1D173() {
        _0x1C151()[_0x1B805[79]] = _0x1C9CB()[1]
    }

    function _0x1D196() {
        _0x1C07F()[_0x1B805[79]] = _0x1C9CB()[2]
    }

    function _0x1D1B9() {
        _0x1C28C()[_0x1B805[79]] = _0x1C9CB()[3]
    }

    function _0x1D1DC() {
        _0x1C12E()[_0x1B805[79]] = _0x1C9CB()[4]
    }

    function _0x1D1FF() {
        _0x1C246()[_0x1B805[79]] = _0x1C9CB()[5]
    }

    function _0x1D222() {
        _0x1C223()[_0x1B805[79]] = _0x1C9CB()[6]
    }

    function _0x1D245() {
        _0x1C0C5()[_0x1B805[79]] = _0x1C9CB()[7]
    }

    function _0x1D268() {
        _0x1C1BA()[_0x1B805[79]] = _0x1C9CB()[8]
    }

    function _0x1D28B() {
        _0x1C0A2()[_0x1B805[79]] = _0x1C9CB()[9]
    }

    function _0x1D2AE() {
        _0x1C200()[_0x1B805[79]] = _0x1C9CB()[10]
    }

    function _0x1D2D1() {
        _0x1C0E8()[_0x1B805[79]] = _0x1C9CB()[11]
    }

    function _0x1D2F4() {
        _0x1C05C()[_0x1B805[79]] = _0x1C9CB()[12]
    }

    function _0x1D317() {
        _0x1C039()[_0x1B805[79]] = _0x1C9CB()[13]
    }

    function _0x1D33A() {
        _0x1C269()[_0x1B805[79]] = _0x1C9CB()[14]
    }

    function _0x1D35D() {
        _0x1C3C7()[_0x1B805[79]] = _0x1C9EE()[1]
    }

    function _0x1D380() {
        _0x1C2F5()[_0x1B805[79]] = _0x1C9EE()[2]
    }

    function _0x1D3A3() {
        _0x1C548()[_0x1B805[79]] = _0x1C9EE()[3]
    }

    function _0x1D3C6() {
        _0x1C381()[_0x1B805[79]] = _0x1C9EE()[4]
    }

    function _0x1D3E9() {
        _0x1C4BC()[_0x1B805[79]] = _0x1C9EE()[5]
    }

    function _0x1D40C() {
        _0x1C33B()[_0x1B805[79]] = _0x1C9EE()[6]
    }

    function _0x1D42F() {
        _0x1C4DF()[_0x1B805[79]] = _0x1C9EE()[7]
    }

    function _0x1D452() {
        _0x1C502()[_0x1B805[79]] = _0x1C9EE()[8]
    }

    function _0x1D475() {
        _0x1C476()[_0x1B805[79]] = _0x1C9EE()[9]
    }

    function _0x1D498() {
        _0x1C318()[_0x1B805[79]] = _0x1C9EE()[10]
    }

    function _0x1D4BB() {
        _0x1C3A4()[_0x1B805[79]] = _0x1C9EE()[11]
    }

    function _0x1D4DE() {
        _0x1C2AF()[_0x1B805[79]] = _0x1C9EE()[12]
    }

    function _0x1D501() {
        _0x1C2D2()[_0x1B805[79]] = _0x1C9EE()[13]
    }

    function _0x1D524() {
        _0x1C430()[_0x1B805[79]] = _0x1C9EE()[14]
    }

    function _0x1D547() {
        _0x1C525()[_0x1B805[79]] = _0x1C9EE()[15]
    }

    function _0x1D56A() {
        _0x1C56B()[_0x1B805[79]] = _0x1C9EE()[16]
    }

    function _0x1D58D() {
        _0x1C3EA()[_0x1B805[79]] = _0x1C9EE()[17]
    }

    function _0x1D5B0() {
        _0x1C6A6()[_0x1B805[79]] = _0x1CA11()[1]
    }

    function _0x1D5D3() {
        _0x1C890()[_0x1B805[79]] = _0x1CA11()[2]
    }

    function _0x1D5F6() {
        _0x1C683()[_0x1B805[79]] = _0x1CA11()[3]
    }

    function _0x1D619() {
        _0x1C8B3()[_0x1B805[79]] = _0x1CA11()[4]
    }

    function _0x1D63C() {
        _0x1C6C9()[_0x1B805[79]] = _0x1CA11()[5]
    }

    function _0x1D65F() {
        _0x1C804()[_0x1B805[79]] = _0x1CA11()[6]
    }

    function _0x1D682() {
        _0x1C61A()[_0x1B805[79]] = _0x1CA11()[7]
    }

    function _0x1D6A5() {
        _0x1C827()[_0x1B805[79]] = _0x1CA11()[8]
    }

    function _0x1D6C8() {
        _0x1C84A()[_0x1B805[79]] = _0x1CA11()[9]
    }

    function _0x1D6EB() {
        _0x1C755()[_0x1B805[79]] = _0x1CA11()[10]
    }

    function _0x1D70E() {
        _0x1C5F7()[_0x1B805[79]] = _0x1CA11()[11]
    }

    function _0x1D731() {
        _0x1C79B()[_0x1B805[79]] = _0x1CA11()[12]
    }

    function _0x1D754() {
        _0x1C58E()[_0x1B805[79]] = _0x1CA11()[13]
    }

    function _0x1D777() {
        _0x1C5D4()[_0x1B805[79]] = _0x1CA11()[14]
    }

    function _0x1D79A() {
        _0x1C7E1()[_0x1B805[79]] = _0x1CA11()[15]
    }

    function _0x1D7BD() {
        _0x1C70F()[_0x1B805[79]] = _0x1CA11()[16]
    }

    function _0x1D7E0() {
        _0x1C86D()[_0x1B805[79]] = _0x1CA11()[17]
    }

    function _0x1D803() {
        _0x1C7BE()[_0x1B805[79]] = _0x1CA11()[18]
    }

    function _0x1D826() {
        _0x1C63D()[_0x1B805[79]] = _0x1CA11()[19]
    }

    function _0x1D849() {
        _0x1C8F9()[_0x1B805[83]] = false
    }

    function _0x1D86C() {
        _0x1CBB5()[_0x1B805[83]] = false
    }

    function _0x1D88F() {
        _0x1CB92()[_0x1B805[83]] = false
    }

    function _0x1B9EF() {
        return function() {
            
        }
    }

    function _0x1D8B2() {
        _0x1C8F9()[_0x1B805[83]] = true
    }

    function _0x1BA12() {
        return function() {
			var intervalNum;
			var nextGamePageJS
            _0x1D8D5();
            _0x1CB6F()(_0x1B805[100]);
            _0x1D8F8();
            _0x1D91B();
            endTimeInterval = _0x1C962()[_0x1B805[104]][_0x1B805[103]][_0x1B805[3]](_0x1BAC1(_0x1CB4C()[_0x1B805[102]][_0x1B805[101]], intervalNum), nextGamePageJS)
        }
    }

    function _0x1D93E() {
        _0x1CA57()[_0x1B805[105]] = true
    }

    function _0x1D961() {
        _0x1CA57()[_0x1B805[107]][_0x1B805[106]] = true
    }

    function _0x1D984() {
        _0x1CA57()[_0x1B805[107]][_0x1B805[108]] = true
    }

    function _0x1D9A7() {
        _0x1CA57()[_0x1B805[107]][_0x1B805[109]] = true
    }

    function _0x1D9CA() {
        _0x1CA57()[_0x1B805[107]][_0x1B805[110]] = 10
    }

    function _0x1D9ED() {
        _0x1CBB5()[_0x1B805[105]] = true
    }

    function _0x1DA10() {
        _0x1CBB5()[_0x1B805[107]][_0x1B805[106]] = true
    }

    function _0x1DA33() {
        _0x1CBB5()[_0x1B805[107]][_0x1B805[108]] = true
    }

    function _0x1DA56() {
        _0x1CBB5()[_0x1B805[107]][_0x1B805[109]] = true
    }

    function _0x1DA79() {
        _0x1CBB5()[_0x1B805[107]][_0x1B805[110]] = 10
    }

    function _0x1DA9C() {
        _0x1CB92()[_0x1B805[105]] = true
    }

    function _0x1DABF() {
        _0x1CB92()[_0x1B805[107]][_0x1B805[106]] = true
    }

    function _0x1DAE2() {
        _0x1CB92()[_0x1B805[107]][_0x1B805[108]] = true
    }

    function _0x1DB05() {
        _0x1CB92()[_0x1B805[107]][_0x1B805[109]] = true
    }

    function _0x1DB28() {
        _0x1CB92()[_0x1B805[107]][_0x1B805[110]] = 10
    }

    function _0x1DB4B() {
        _0x1CB92()[_0x1B805[79]] = 0
    }

    function _0x1DB6E() {
        _0x1CB92()[_0x1B805[79]] = 20
    }

    function _0x1DB91() {
        endScreenFinish = true
    }

    function _0x1DBB4() {
        _0x1CB92()[_0x1B805[79]] = 0
    }

    function _0x1DBD7() {
        _0x1CBB5()[_0x1B805[79]] = 0
    }

    function _0x1DBFA() {
        _0x1CBB5()[_0x1B805[79]] = 20
    }

    function _0x1DC1D() {
        _0x1CBB5()[_0x1B805[79]] = 0
    }

    function _0x1DC40() {
        _0x1CBD8()[_0x1B805[83]] = false
    }

    function _0x1BA35() {
        return function(_0x1B891) {
            
        }
    }

    function _0x1D8D5() {
        _0x1C8F9()[_0x1B805[83]] = false
    }

    function _0x1D8F8() {
        _0x1CBB5()[_0x1B805[83]] = true
    }

    function _0x1D91B() {
        _0x1CB92()[_0x1B805[83]] = true
    }

    function _0x1DC63(_0x1B828, _0x1B84B) {
        _0x1B828._[_0x1B805[122]] = _0x1B84B._
    }

    function _0x1BA58() {
        return function(_0x1B828, _0x1B84B) {
            _0x1BD37()[_0x1B805[125]](_0x1B828, _0x1B84B)
        }
    }

    function _0x1BA7B() {
        return function(_0x1B805) {}
    }
})()