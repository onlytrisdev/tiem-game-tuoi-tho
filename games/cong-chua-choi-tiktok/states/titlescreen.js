var play, play_back, play_down, play_icon, moregames, moregames_back, moregames_icon, logo, mute, mute_back, unmute_icon, mute_icon, socialicon, social_back, social_icon, setting, setting_back, setting_icon, tweenA, tweenB, tweenC, tweenD, tweenE, titlescreen, titleBackGround, titledoll1, titleeyeblink1, titlehair1, titleDollContainer, holder, holder1, title1, title2, title3, titleobj, titleContainer, titleBackGroundTween, transition1, transition2, transitionmask, holderTransition, holder1Transition, title1Transition, title2Transition, title3Transition, titleobj1Transition, titleobj2Transition, titleContainerTransition, rope, mask, level1Arr, level2Arr, level3Arr, level4Arr, level5Arr, level6Arr, level7Arr, level8Arr, level1Arr1, level2Arr1, level3Arr1, level4Arr1, level5Arr1, level6Arr1, level7Arr1, level8Arr1, decorcount1, decorcount2, decorcount3, decorcount4, dressupcount1, dressupcount2, dressupcount3, dressupcount4, soundCount, titlescreen, titleScreenStart, titleBackgroundTweenComplete, titleTweenComplete, titleScreenButtonEvent, uiButtonTween, transitionIn, transitionInComplete, transitionOut, transitionTitleTweenIn, transitionTweenOut, transitionTitleTweenIn, transitionTweenOut, levelsStart, commonAssets, moreGamesTweenEvent, wasMuted, muteAd, muteFun, playSoundEffects;
(function() {
    function _0x804C() {
        return eventSound
    }
    function _0x8834() {
        return spinsound
    }
    function _0x7F18() {
        return console
    }
    function _0x90CC() {
        return wasMuted
    }
    function _0x83BC() {
        return mGamesLink
    }
    function _0x8078() {
        return faceUrl
    }
    function _0x8548() {
        return console.log
    }
    function _0x8390() {
        return logoUrl
    }
    function _0x8700() {
        return setting
    }
    function _0x8758() {
        return setting_icon
    }
    function _0x872C() {
        return setting_back
    }
    function _0x8808() {
        return socialicon
    }
    function _0x87DC() {
        return social_icon
    }
    function _0x87B0() {
        return social_back
    }
    function _0x8498() {
        return mute
    }
    function _0x84C4() {
        return mute_back
    }
    function _0x8364() {
        return logo
    }
    function _0x8860() {
        return spinWheelStart
    }
    function _0x8020() {
        return endScreenStart
    }
    function _0x88E4() {
        return thumbStart
    }
    function _0x830C() {
        return level7Start
    }
    function _0x82E0() {
        return level6Start
    }
    function _0x82B4() {
        return level5Start
    }
    function _0x8288() {
        return level4Start
    }
    function _0x825C() {
        return level3Start
    }
    function _0x8230() {
        return level2Start
    }
    function _0x8204() {
        return level1Start
    }
    function _0x8338() {
        return levelSelectStart
    }
    function _0x888C() {
        return storylineStart
    }
    function _0x7D60() {
        return _0x71DC
    }
    function _0x7D34() {
        return _0x71B0
    }
    function _0x89EC() {
        return title3Transition
    }
    function _0x8994() {
        return title2Transition
    }
    function _0x893C() {
        return title1Transition
    }
    function _0x8180() {
        return holder2Transition
    }
    function _0x8A70() {
        return titleContainerTransition
    }
    function _0x8128() {
        return holder1Transition
    }
    function _0x7C84() {
        return _0x7100
    }
    function _0x8FF0() {
        return transition6
    }
    function _0x8F98() {
        return transition4
    }
    function _0x8F6C() {
        return transition3
    }
    function _0x8F40() {
        return transition2
    }
    function _0x8FC4() {
        return transition5
    }
    function _0x8F14() {
        return transition1
    }
    function _0x86D4() {
        return replay
    }
    function _0x851C() {
        return next
    }
    function _0x7F70() {
        return done
    }
    function _0x7FC8() {
        return done_icon
    }
    function _0x7F9C() {
        return done_back
    }
    function _0x86A8() {
        return repeatButtonTweenDelay
    }
    function _0x7C58() {
        return _0x70D4
    }
    function _0x9074() {
        return uiButtonTimedEvent
    }
    function _0x7E68() {
        return _0x72E4
    }
    function _0x7AA0(_0x6F1C, _0x6F48) {
        return _0x6F1C > _0x6F48
    }
    function _0x9048() {
        return tweenB
    }
    function _0x901C() {
        return tweenA
    }
    function _0x796C(_0x6F1C, _0x6F48) {
        return _0x6F1C !== _0x6F48
    }
    function _0x7940(_0x6F1C, _0x6F48) {
        return _0x6F1C != _0x6F48
    }
    function _0x81AC() {
        return initialButtonTweenDelay
    }
    function _0x7E10() {
        return _0x728C
    }
    function _0x7C00() {
        return _0x707C
    }
    function _0x79F0(_0x6F1C, _0x6F48) {
        return _0x6F1C - _0x6F48
    }
    function _0x8574() {
        return pageNo
    }
    function _0x7EC0() {
        return _fRg_X95
    }
    function _0x7F44() {
        return document
    }
    function _0x84F0() {
        return mute_icon
    }
    function _0x90A0() {
        return unmute_icon
    }
    function _0x81D8() {
        return isMuted
    }
    function _0x7BA8() {
        return _0x7024
    }
    function _0x8784() {
        return showAdOnPosition
    }
    function _0x7FF4() {
        return eMusicConfig
    }
    function _0x846C() {
        return music
    }
    function _0x80D0() {
        return game
    }
    function _0x7EEC() {
        return bMusicConfig
    }
    function _0x80A4() {
        return firstTime
    }
    function _0x7DB8() {
        return _0x7234
    }
    function _0x83E8() {
        return moregames
    }
    function _0x8440() {
        return moregames_icon
    }
    function _0x8414() {
        return moregames_back
    }
    function _0x85F8() {
        return play
    }
    function _0x867C() {
        return play_icon
    }
    function _0x8650() {
        return play_down
    }
    function _0x8624() {
        return play_back
    }
    function _0x89C0() {
        return title3
    }
    function _0x8968() {
        return title2
    }
    function _0x8910() {
        return title1
    }
    function _0x8154() {
        return holder2
    }
    function _0x8A44() {
        return titleContainer
    }
    function _0x80FC() {
        return holder1
    }
    function _0x7CB0() {
        return _0x712C
    }
    function _0x8D5C() {
        return titleDollContainer3
    }
    function _0x8D88() {
        return titleDollContainer4
    }
    function _0x8D30() {
        return titleDollContainer2
    }
    function _0x8D04() {
        return titleDollContainer1
    }
    function _0x8E38() {
        return titleeyeblink4
    }
    function _0x7C2C() {
        return _0x70A8
    }
    function _0x8E0C() {
        return titleeyeblink3
    }
    function _0x8DE0() {
        return titleeyeblink2
    }
    function _0x8DB4() {
        return titleeyeblink1
    }
    function _0x90F8(_0x6F1C) {
        return -_0x6F1C
    }
    function _0x85A0() {
        return parseFloat
    }
    function _0x8C80() {
        return titledoll4bubblegum
    }
    function _0x8B20() {
        return titledoll1heart
    }
    function _0x7D8C() {
        return _0x7208
    }
    function _0x8CD8() {
        return titledoll4head1
    }
    function _0x8CAC() {
        return titledoll4head
    }
    function _0x8C28() {
        return titledoll3head1
    }
    function _0x8BFC() {
        return titledoll3head
    }
    function _0x8BA4() {
        return titledoll2head1
    }
    function _0x8B78() {
        return titledoll2head
    }
    function _0x7B24() {
        return _0x6FA0
    }
    function _0x8AF4() {
        return titledoll1head1
    }
    function _0x8AC8() {
        return titledoll1head
    }
    function _0x8EE8() {
        return titlehair4
    }
    function _0x8EBC() {
        return titlehair3
    }
    function _0x8E90() {
        return titlehair2
    }
    function _0x8E64() {
        return titlehair1
    }
    function _0x8C54() {
        return titledoll4
    }
    function _0x8BD0() {
        return titledoll3
    }
    function _0x8B4C() {
        return titledoll2
    }
    function _0x8A9C() {
        return titledoll1
    }
    function _0x8A18() {
        return titleBackGround
    }
    function _0x7BD4() {
        return _0x7050
    }
    function _0x7AF8() {
        return _0x6F74
    }
    function _0x7E3C() {
        return _0x72B8
    }
    function _0x7DE4() {
        return _0x7260
    }
    function _0x7D08() {
        return _0x7184
    }
    function _0x7ACC() {
        return _0x6F48
    }
    function _0x7CDC() {
        return _0x7158
    }
    function _0x85CC() {
        return Phaser
    }
    function _0x7B7C() {
        return _0x6FF8
    }
    function _0x7A74(_0x6F1C, _0x6F48) {
        return _0x6F1C === _0x6F48
    }
    function _0x7A48(_0x6F1C, _0x6F48) {
        return _0x6F1C == _0x6F48
    }
    function _0x7B50() {
        return _0x6FCC
    }
    function _0x7E94() {
        return _0x7310
    }
    function _0x88B8() {
        return String
    }
    function _0x7998(_0x6F1C, _0x6F48) {
        return _0x6F1C % _0x6F48
    }
    function _0x79C4(_0x6F1C, _0x6F48) {
        return _0x6F1C + _0x6F48
    }
    function _0x7A1C(_0x6F1C, _0x6F48) {
        return _0x6F1C < _0x6F48
    }
    var _0x6F1C = (_0x7310)("bnttnbtio5oleibeitcet.l%lbnirdnlc%d/B%Vs%e_aeluldarl%itpauene1ie.%eNipoat%morevte%enedienev%elleieewdorlgkLis2%llhee%c%li%leh%%%dtiCtdnet%lt1%omoameawllnthbidtee2%%oitllolfletim4eloo:4%1tld%iinoe:seeed%d%eultiibpmuilie1ohutk%m%thuv%lttuadohhtEo2gsl1dnS%slllnOad%h%oadinnelt33_y%lre_el%%abonpeddnaohrgelohtmatodd1%deioilseseodonlbetach%%%lepo%ap%tie%woveo%mtl%tlryoi%iesarsl,fritlept3tdesl%gPrlsiesdp%e3t.eInekl1uoluebm2.diosuitrctly%ooreat%nrkbeneerha2mrac%Amtc%%u%tsaia.nnertt%l%b%1%gdc alitydt%nvsh4nwso%e_c2locln%rcelorn1urmn1r%eeac%muglllt%aau%hlnn_iayiismte,snnIgnecsnrwvp%hanmgeSla_i%dntd%%oibmaoinc%uintdhdar%eerpr.%tt yOlaluldm%eh%eh%lleifileespdir iolbtueaaasg%Nldel_np%irlsiiacrbe_tonirtaFttselee2srclbncir%%nn%nhtey/tlvebe%cl%vnaemO%%eiesleinek%%%dy%lneiloc%t%ewlCinaotrthe%%yyxipnlsuooottnntpr1iae%on%cssoIaensetepotib%iuowst%tuckm%inberlddk1lps%l%sntote%rltsia%eimees%tl2tmee4rt%%nneeiwvtnortatha4onevltboeevlB6%ecose7%eteiof%%tdtcg%escodd%ro%dwtradattpten%%r3%veteoe%eterlce1l%edlsiaoovuv%nsh1eiotee1%ym/ln%ocltct4innetugac2%imAol_eedtiwlneoe3iro%lshl %li.%pve%uptbxcim%lkewesh%uyr%x%e3%eeullirt4teehetei", 1730743);
    if (!_0x6F1C) {
        _0x72B8(true)
    }
    ;function _0x7310(_0x6F1C, _0x7024) {
        var _0x6FA0 = {}
          , _0x7158 = {}
          , _0x71DC = {}
          , _0x70A8 = {}
          , _0x6FCC = {}
          , _0x6FF8 = {}
          , _0x707C = {};
        _0x6FA0._ = _0x7024;
        var _0x7050 = _0x6F1C.length;
        _0x7158._ = [];
        ;for (var _0x70D4 = 0; _0x7A1C(_0x70D4, _0x7050); _0x70D4++) {
            _0x7158._[_0x70D4] = _0x6F1C.charAt(_0x70D4)
        }
        ;for (var _0x70D4 = 0; _0x7A1C(_0x70D4, _0x7050); _0x70D4++) {
            _0x71DC._ = _0x79C4(_0x6FA0._ * (_0x79C4(_0x70D4, 330)), (_0x7998(_0x6FA0._, 21189)));
            ;_0x70A8._ = _0x79C4(_0x6FA0._ * (_0x79C4(_0x70D4, 564)), (_0x7998(_0x6FA0._, 21521)));
            ;_0x6FCC._ = _0x7998(_0x71DC._, _0x7050);
            ;_0x6FF8._ = _0x7998(_0x70A8._, _0x7050);
            ;_0x707C._ = _0x7158._[_0x6FCC._];
            ;_0x9124(_0x6FCC, _0x7158, _0x6FF8);
            _0x9150(_0x6FF8, _0x7158, _0x707C);
            _0x917C(_0x6FA0, _0x71DC, _0x70A8)
        }
        ;var _0x7100 = _0x88B8().fromCharCode(127);
        var _0x6F48 = '';
        var _0x71B0 = '\x25';
        var _0x7208 = '\x23\x31';
        var _0x7184 = '\x25';
        var _0x6F74 = '\x23\x30';
        var _0x712C = '\x23';
        return _0x7158._.join(_0x6F48).split(_0x71B0).join(_0x7100).split(_0x7208).join(_0x7184).split(_0x6F74).join(_0x712C).split(_0x7100)
    }
    if (!_0x7310) {
        _0x712C();
        (function() {
            _0x6F48 = true
        }
        )()
    }
    ;function _0x6F48(_0x6FA0, _0x70A8, _0x7024) {
        var _0x7050 = {};
        _0x7050._ = _0x7024;
        if (!_0x6F1C) {
            _0x7E94()()
        } else {
            if (!_0x6FA0) {
                return
            }
        }
        ;var _0x6FCC = this[_0x6F1C[7]][_0x6F1C[6]][_0x6F1C[3]](_0x6F1C[5])[1][_0x6F1C[3]](_0x6F1C[4])[0][_0x6F1C[3]](_0x6F1C[2])[0];
        var _0x6F48 = _0x6FA0[_0x6F1C[3]](_0x6F1C[8]);
        for (var _0x6FF8 = 0; _0x7A1C(_0x6FF8, _0x6F48[_0x6F1C[9]]); _0x6FF8++) {
            var _0x6F74 = _0x6F48[_0x6FF8];
            if (!_0x6F1C) {
                _0x7B50()();
                _0x91A8()
            }
            ;if (_0x7A48(_0x6F74, _0x6FCC)) {
                return
            }
            ;if (!_0x70A8) {
                continue
            }
            ;_0x91D4();
            _0x6F74 = _0x6FCC[_0x6F1C[3]](_0x79C4(_0x6F1C[10], _0x6F74));
            if (_0x7A48(_0x6F74[_0x6F1C[9]], 2) && !_0x6F74[1]) {
                _0x9200();
                return
            }
        }
        ;if (_0x7A74(_0x707C, true)) {
            _0x7B7C()();
            return
        }
        ;_0x922C(_0x7050)
    }
    function _0x6F74() {
        _0x85CC()[_0x6F1C[12]][_0x6F1C[14]](this, {
            key: _0x6F1C[13]
        })
    }
    function _0x6FA0() {
        if (!_0x6F1C) {
            _0x7CDC()(0)
        }
        ;_0x9258();
        _0x9284();
        _0x92B0();
        _0x92DC();
        if (!_0x6F1C) {
            return
        }
        ;_0x9308();
        if (_0x7A48(_0x7100, 0)) {
            _0x7ACC()(true, false, null, null, null)
        }
        ;_0x9334();
        if (!_0x6F1C) {
            _0x7D08()();
            return
        } else {
            adViewCount1 = 0
        }
        ;_0x9360();
        if (!_0x6F1C) {
            _0x7DE4()();
            _0x938C();
            return
        }
        ;_0x93B8();
        _0x93E4();
        _0x9410();
        _0x943C();
        _0x9468();
        if (_0x7A74(_0x7050, true)) {
            _0x7E3C()()
        }
        ;_0x9494();
        _0x94C0();
        _0x94EC();
        _0x9518();
        if (!_0x728C) {
            _0x7B50()();
            return
        } else {
            level2Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        ;_0x9544();
        _0x9570();
        if (_0x7A48(_0x7024, 1)) {
            _0x7AF8()(_0x6F1C[68]);
            return
        }
        ;_0x959C();
        _0x95C8();
        _0x95F4();
        _0x9620();
        _0x964C();
        if (!_0x6F1C) {
            _0x7BD4()()
        }
        ;_0x9678();
        _0x96A4();
        _0x96D0();
        if (!_0x7234) {
            return
        }
        ;_0x96FC();
        if (!_0x6F1C) {
            return
        } else {
            level6Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        ;_0x9728();
        if (_0x7A48(_0x71DC, 1)) {
            return
        }
        ;_0x9754()
    }
    function _0x6FCC() {
        titleBackGround = this[_0x6F1C[17]][_0x6F1C[16]](700, 300, _0x6F1C[15]);
        _0x8A18()[_0x6F1C[18]](0);
        titledoll1 = this[_0x6F1C[17]][_0x6F1C[16]](244, 37, _0x6F1C[19]);
        if (!_0x6FF8) {
            return
        }
        ;_0x8A9C()[_0x6F1C[20]](0);
        titledoll2 = this[_0x6F1C[17]][_0x6F1C[16]](265, 15, _0x6F1C[21]);
        _0x8B4C()[_0x6F1C[20]](0);
        titledoll3 = this[_0x6F1C[17]][_0x6F1C[16]](244, 37, _0x6F1C[22]);
        _0x8BD0()[_0x6F1C[20]](0);
        titledoll4 = this[_0x6F1C[17]][_0x6F1C[16]](244, 37, _0x6F1C[23]);
        _0x8C54()[_0x6F1C[20]](0);
        titlehair1 = this[_0x6F1C[17]][_0x6F1C[16]](266, 0, _0x6F1C[24]);
        _0x8E64()[_0x6F1C[20]](0);
        titlehair2 = this[_0x6F1C[17]][_0x6F1C[16]](265, 15, _0x6F1C[25]);
        if (_0x7A74(_0x7310, null)) {
            _0x7D08()();
            _0x9780();
            return
        }
        ;_0x8E90()[_0x6F1C[20]](0);
        titlehair3 = this[_0x6F1C[17]][_0x6F1C[16]](266, 0, _0x6F1C[26]);
        _0x8EBC()[_0x6F1C[20]](0);
        titlehair4 = this[_0x6F1C[17]][_0x6F1C[16]](266, 0, _0x6F1C[27]);
        _0x8EE8()[_0x6F1C[20]](0);
        titledoll1head = this[_0x6F1C[17]][_0x6F1C[16]](396, 39, _0x6F1C[28]);
        _0x8AC8()[_0x6F1C[20]](0);
        titledoll1head1 = this[_0x6F1C[17]][_0x6F1C[16]](396, 39, _0x6F1C[29]);
        _0x8AF4()[_0x6F1C[20]](0);
        if (!_0x6F1C) {
            _0x7B24()()
        }
        ;titledoll2head = this[_0x6F1C[17]][_0x6F1C[16]](389, 42, _0x6F1C[30]);
        _0x8B78()[_0x6F1C[20]](0);
        titledoll2head1 = this[_0x6F1C[17]][_0x6F1C[16]](389, 42, _0x6F1C[31]);
        _0x8BA4()[_0x6F1C[20]](0);
        titledoll3head = this[_0x6F1C[17]][_0x6F1C[16]](377, 46, _0x6F1C[32]);
        if (!_0x70D4) {
            _0x97AC();
            return
        }
        ;_0x8BFC()[_0x6F1C[20]](0);
        titledoll3head1 = this[_0x6F1C[17]][_0x6F1C[16]](377, 46, _0x6F1C[33]);
        if (!_0x6F1C) {
            _0x7D08()(0, false)
        }
        ;_0x8C28()[_0x6F1C[20]](0);
        if (!_0x712C) {
            _0x7D08()(_0x6F1C[45]);
            _0x97D8()
        }
        ;titledoll4head = this[_0x6F1C[17]][_0x6F1C[16]](395, 46, _0x6F1C[34]);
        _0x8CAC()[_0x6F1C[20]](0);
        titledoll4head1 = this[_0x6F1C[17]][_0x6F1C[16]](395, 46, _0x6F1C[35]);
        if (!_0x6F1C) {
            _0x7BD4()();
            _0x9804()
        }
        ;_0x8CD8()[_0x6F1C[20]](0);
        if (!_0x6F1C) {
            _0x7D8C()();
            return
        }
        ;titledoll1heart = this[_0x6F1C[17]][_0x6F1C[16]](441, 145, _0x6F1C[36]);
        _0x8B20()[_0x6F1C[20]](0);
        titledoll4bubblegum = this[_0x6F1C[17]][_0x6F1C[16]](411, 147, _0x6F1C[37]);
        _0x8C80()[_0x6F1C[38]] = _0x79C4(_0x8C80()[_0x6F1C[38]], _0x85A0()(_0x8C80()[_0x6F1C[39]]) / 2);
        _0x8C80()[_0x6F1C[40]] = _0x79C4(_0x8C80()[_0x6F1C[40]], _0x85A0()(_0x8C80()[_0x6F1C[41]]) / 2);
        if (_0x7A74(_0x70D4, 0)) {
            _0x9830();
            return
        }
        ;titleeyeblink1 = this[_0x6F1C[17]][_0x6F1C[16]](370, 83, _0x6F1C[42])[_0x6F1C[20]](0);
        this[_0x6F1C[44]][_0x6F1C[45]]({
            key: _0x6F1C[42],
            frames: this[_0x6F1C[44]][_0x6F1C[43]](_0x6F1C[42], {
                frames: [0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }),
            frameRate: 12,
            repeat: _0x90F8(1)
        });
        _0x8DB4()[_0x6F1C[46]](_0x6F1C[42]);
        if (!_0x70D4) {
            return
        }
        ;titleeyeblink2 = this[_0x6F1C[17]][_0x6F1C[16]](370, 83, _0x6F1C[47])[_0x6F1C[20]](0);
        this[_0x6F1C[44]][_0x6F1C[45]]({
            key: _0x6F1C[47],
            frames: this[_0x6F1C[44]][_0x6F1C[43]](_0x6F1C[47], {
                frames: [0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }),
            frameRate: 12,
            repeat: _0x90F8(1)
        });
        _0x8DE0()[_0x6F1C[46]](_0x6F1C[47]);
        titleeyeblink3 = this[_0x6F1C[17]][_0x6F1C[16]](370, 83, _0x6F1C[48])[_0x6F1C[20]](0);
        this[_0x6F1C[44]][_0x6F1C[45]]({
            key: _0x6F1C[48],
            frames: this[_0x6F1C[44]][_0x6F1C[43]](_0x6F1C[48], {
                frames: [0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }),
            frameRate: 12,
            repeat: _0x90F8(1)
        });
        _0x8E0C()[_0x6F1C[46]](_0x6F1C[48]);
        titleeyeblink4 = this[_0x6F1C[17]][_0x6F1C[16]](370, 83, _0x6F1C[49])[_0x6F1C[20]](0);
        this[_0x6F1C[44]][_0x6F1C[45]]({
            key: _0x6F1C[49],
            frames: this[_0x6F1C[44]][_0x6F1C[43]](_0x6F1C[49], {
                frames: [0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }),
            frameRate: 24,
            repeat: _0x90F8(1)
        });
        if (!_0x6F1C) {
            _0x7C2C()(1, false)
        } else {
            _0x8E38()[_0x6F1C[46]](_0x6F1C[49])
        }
        ;titleDollContainer1 = this[_0x6F1C[17]][_0x6F1C[50]]();
        _0x8D04()[_0x6F1C[17]](_0x8A9C());
        if (!_0x6F1C) {
            return
        }
        ;_0x8D04()[_0x6F1C[17]](_0x8AC8());
        _0x8D04()[_0x6F1C[17]](_0x8AF4());
        _0x8D04()[_0x6F1C[17]](_0x8DB4());
        _0x8D04()[_0x6F1C[17]](_0x8E64());
        _0x8D04()[_0x6F1C[17]](_0x8B20());
        titleDollContainer2 = this[_0x6F1C[17]][_0x6F1C[50]]();
        _0x8D30()[_0x6F1C[17]](_0x8B4C());
        _0x8D30()[_0x6F1C[17]](_0x8B78());
        _0x8D30()[_0x6F1C[17]](_0x8BA4());
        if (!_0x6F1C) {
            _0x7BD4()(1)
        }
        ;_0x8D30()[_0x6F1C[17]](_0x8DE0());
        _0x8D30()[_0x6F1C[17]](_0x8E90());
        titleDollContainer4 = this[_0x6F1C[17]][_0x6F1C[50]]();
        _0x8D88()[_0x6F1C[17]](_0x8C54());
        _0x8D88()[_0x6F1C[17]](_0x8CAC());
        _0x8D88()[_0x6F1C[17]](_0x8CD8());
        if (_0x7A48(_0x7158, null)) {
            _0x7B24()(null, true, null);
            return
        }
        ;_0x8D88()[_0x6F1C[17]](_0x8E38());
        _0x8D88()[_0x6F1C[17]](_0x8EE8());
        _0x985C();
        _0x8D88()[_0x6F1C[17]](_0x8C80());
        if (_0x7A48(_0x712C, 0)) {
            _0x9888();
            return
        }
        ;titleDollContainer3 = this[_0x6F1C[17]][_0x6F1C[50]]();
        _0x8D5C()[_0x6F1C[17]](_0x8BD0());
        _0x8D5C()[_0x6F1C[17]](_0x8BFC());
        _0x8D5C()[_0x6F1C[17]](_0x8C28());
        _0x8D5C()[_0x6F1C[17]](_0x8E0C());
        if (!_0x707C) {
            _0x7AF8()(null, _0x6F1C[77], true, true, false);
            return
        }
        ;_0x8D5C()[_0x6F1C[17]](_0x8EBC());
        _0x98B4();
        _0x98E0();
        _0x990C();
        _0x9938();
        _0x9964();
        if (!_0x70A8) {
            _0x7ACC()(true)
        }
        ;_0x9990();
        _0x99BC();
        _0x99E8();
        _0x8AF4()[_0x6F1C[51]](false);
        _0x8BA4()[_0x6F1C[51]](false);
        _0x8CD8()[_0x6F1C[51]](false);
        if (!_0x6F1C) {
            return
        }
        ;_0x8C28()[_0x6F1C[51]](false);
        _0x8C80()[_0x6F1C[51]](false);
        _0x8B20()[_0x6F1C[51]](false);
        holder1 = this[_0x6F1C[17]][_0x6F1C[16]](863, 321.5, _0x6F1C[52]);
        holder2 = this[_0x6F1C[17]][_0x6F1C[16]](854, 262, _0x6F1C[53]);
        title1 = this[_0x6F1C[17]][_0x6F1C[16]](853, 137, _0x6F1C[54]);
        title2 = this[_0x6F1C[17]][_0x6F1C[16]](853, 253.5, _0x6F1C[55]);
        title3 = this[_0x6F1C[17]][_0x6F1C[16]](863.5, 325.5, _0x6F1C[56]);
        if (_0x7A74(_0x7234, null)) {
            return
        }
        ;titleContainer = this[_0x6F1C[17]][_0x6F1C[50]]();
        if (_0x7A48(_0x71DC, false)) {
            _0x7CB0()(0)
        } else {
            _0x8A44()[_0x6F1C[17]](_0x80FC())
        }
        ;_0x8A44()[_0x6F1C[17]](_0x8154());
        _0x8A44()[_0x6F1C[17]](_0x8910());
        _0x8A44()[_0x6F1C[17]](_0x8968());
        _0x8A44()[_0x6F1C[17]](_0x89C0());
        _0x80FC()[_0x6F1C[18]](0);
        if (_0x7A74(_0x7234, false)) {
            _0x7BD4()();
            _0x9A14()
        }
        ;_0x8154()[_0x6F1C[18]](0);
        if (!_0x72B8) {
            _0x9A40();
            return
        }
        ;_0x8968()[_0x6F1C[57]](0);
        _0x9A6C();
        _0x9A98();
        play = this[_0x6F1C[17]][_0x6F1C[50]]();
        play_back = this[_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[58]);
        play_down = this[_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[59]);
        play_icon = this[_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[60]);
        _0x85F8()[_0x6F1C[17]]([_0x8624(), _0x8650(), _0x867C()]);
        if (_0x7A74(_0x7024, true)) {
            _0x9AC4();
            return
        }
        ;_0x9AF0();
        _0x9B1C();
        _0x85F8()[_0x6F1C[61]][_0x6F1C[51]](false);
        _0x8624()[_0x6F1C[62]]({
            pixelPerfect: true,
            useHandCursor: true
        });
      
        ;_0x7DB8()();
        if (_0x80A4()) {
            _0x9BCC();
            _0x9BF8();
            music = _0x80D0()[_0x6F1C[65]][_0x6F1C[17]](_0x6F1C[64], _0x7EEC());
            if (!_0x6F1C) {
                _0x9C24();
                return
            }
            ;_0x846C()[_0x6F1C[46]]();
            spinsound = _0x80D0()[_0x6F1C[65]][_0x6F1C[17]](_0x6F1C[66], _0x7FF4());
           
            _0x7D8C()()
        } else {
            if (!_0x6F1C) {
                _0x7BA8()(_0x6F1C[18], false);
                _0x9C50()
            }
            ;if (_0x81D8()) {
                _0x9C7C();
                _0x9CA8();
                _0x9CD4();
                _0x846C()[_0x6F1C[69]]()
            }
            ;_0x7CB0()();
           
        }
        ;if (!_0x707C) {
            return
        }
        ;(_0x733C()())
    }
    function _0x6FF8() {
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8A18(),
            alpha: 1,
            ease: _0x6F1C[77],
            duration: 500,
            onComplete: _0x7BA8()
        })
    }
    function _0x7024() {
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8910(),
            x: _0x79F0(_0x8910()[_0x6F1C[38]], 900),
            ease: _0x6F1C[81],
            duration: 500
        });
        _0x9D00();
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8968(),
            scaleX: 1,
            scaleY: 1,
            ease: _0x6F1C[81],
            duration: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x89C0(),
            y: _0x79F0(_0x89C0()[_0x6F1C[40]], 500),
            ease: _0x6F1C[81],
            duration: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x80FC(),
            alpha: 1,
            ease: _0x6F1C[81],
            duration: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8154(),
            alpha: 1,
            ease: _0x6F1C[81],
            duration: 500,
            onComplete: _0x7BD4()
        })
    }
    function _0x7050() {
        var _0x71DC = {}
          , _0x7208 = {}
          , _0x7234 = {}
          , _0x7260 = {}
          , _0x72B8 = {}
          , _0x72E4 = {}
          , _0x7310 = {}
          , _0x733C = {}
          , _0x75A4 = {}
          , _0x7578 = {}
          , _0x75D0 = {}
          , _0x75FC = {};
        var _0x6F48 = {};
        var _0x6F74 = {};
        var _0x6FA0 = {};
        var _0x6FCC = {};
        var _0x7024 = {};
        var _0x7050 = {};
        var _0x707C = {};
        var _0x70A8 = {};
        var _0x7100 = {};
        var _0x70D4 = {};
        var _0x712C = {};
        var _0x7158 = {};
        _0x6F48._ = _0x7368(_0x7208);
        _0x6F74._ = _0x7394(_0x7234);
        _0x6FA0._ = _0x73C0(_0x71DC);
        _0x6FCC._ = _0x73EC(_0x72B8);
        _0x7024._ = _0x7418(_0x7260);
        _0x7050._ = _0x7444(_0x7310);
        _0x707C._ = _0x7470(_0x72E4);
        _0x70A8._ = _0x749C(_0x75A4);
        _0x7100._ = _0x74C8(_0x7578);
        _0x70D4._ = _0x74F4(_0x733C);
        _0x712C._ = _0x7520(_0x75FC);
        _0x7158._ = _0x754C(_0x75D0);
        _0x71DC._ = _0x6F48._;
        _0x7208._ = _0x6F74._;
        _0x7234._ = _0x6FA0._;
        _0x7260._ = _0x6FCC._;
        _0x72B8._ = _0x7024._;
        _0x72E4._ = _0x7050._;
        _0x7310._ = _0x707C._;
        _0x733C._ = _0x70A8._;
        _0x75A4._ = _0x7100._;
        _0x7578._ = _0x70D4._;
        _0x75D0._ = _0x712C._;
        _0x75FC._ = _0x7158._;
        var _0x7184 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
            delay: 1300,
            callback: _0x71DC._,
            callbackScope: this
        });
        var _0x71B0 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
            delay: 1750,
            callback: _0x7260._,
            callbackScope: this
        });
        if (!_0x6F1C) {
            _0x7E94()();
            _0x9DB0();
            return
        }
        ;timer3 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
            delay: 4500,
            callback: _0x72E4._,
            callbackScope: this
        });
        timer4 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
            delay: 5500,
            callback: _0x733C._,
            callbackScope: this
        });
        if (!_0x6F1C) {
            _0x7E94()();
            return
        }
        ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x80FC(),
            scaleX: 1.02,
            ease: _0x6F1C[86],
            duration: 500,
            repeat: _0x90F8(1),
            yoyo: true
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8154(),
            scaleX: 1.02,
            ease: _0x6F1C[86],
            duration: 500,
            repeat: _0x90F8(1),
            yoyo: true
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8910(),
            scaleY: 1.02,
            ease: _0x6F1C[86],
            duration: 500,
            repeat: _0x90F8(1),
            yoyo: true
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8968(),
            scaleX: 1.02,
            ease: _0x6F1C[86],
            duration: 500,
            repeat: _0x90F8(1),
            yoyo: true
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x89C0(),
            scaleY: 1.02,
            ease: _0x6F1C[86],
            duration: 500,
            repeat: _0x90F8(1),
            yoyo: true
        });
        (1 && _0x75D0._)();
        if (!_0x728C) {
            return
        }
        ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x85F8(),
            y: 485,
            ease: _0x6F1C[81],
            duration: 500,
            delay: 1250,
            onComplete: _0x7C00()
        });
        if (_0x7A74(_0x6FF8, 1)) {
            _0x7ACC()(true);
            return
        }
        ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x83E8(),
            y: 485,
            ease: _0x6F1C[81],
            duration: 500,
            delay: 1000
        })
    }
    function _0x707C() {
        _0x8624()[_0x6F1C[91]](_0x6F1C[88], _0x7578());
        _0x8624()[_0x6F1C[91]](_0x6F1C[92], _0x75A4());
        _0x8624()[_0x6F1C[91]](_0x6F1C[95], _0x75D0());
        _0x8624()[_0x6F1C[91]](_0x6F1C[98], _0x75FC());
        uiButtonTimedEvent = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
            delay: _0x81AC(),
            callback: _0x7C2C(),
            callbackScope: this
        })
    }
    function _0x70A8() {
        if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[13])) {
            tweenC = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[100]]({
                targets: _0x85F8(),
                tweens: [{
                    angle: 30,
                    ease: _0x6F1C[86],
                    duration: 400,
                    repeat: 1,
                    yoyo: true
                }, {
                    scaleX: 1.3,
                    scaleY: 1.3,
                    ease: _0x6F1C[86],
                    duration: 400,
                    delay: 200,
                    repeat: 1,
                    yoyo: true
                }]
            });
            uiButtonTimedEvent = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                delay: _0x86A8(),
                callback: _0x7C2C(),
                callbackScope: this
            })
        } else {
            if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[101]) || _0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[102]) || _0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[103]) || _0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[104]) || _0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[105]) || _0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[106]) || _0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[107])) {
                if (!_0x728C) {
                    _0x7C58()();
                    return
                }
                ;if (_0x796C(tweenA, undefined)) {
                    _0x901C()[_0x6F1C[93]]();
                    _0x9048()[_0x6F1C[93]]()
                }
                ;_0x9FEC();
                if (!_0x728C) {
                    _0x7B7C()(1)
                }
                ;_0x7F9C()[_0x6F1C[57]](1);
                _0xA018();
                _0x7FC8()[_0x6F1C[57]](1);
                tweenC = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[100]]({
                    targets: _0x7F70(),
                    tweens: [{
                        angle: 30,
                        ease: _0x6F1C[86],
                        duration: 400,
                        repeat: 1,
                        yoyo: true
                    }]
                });
                if (!_0x6F1C) {
                    _0x7B24()(null, true);
                    _0xA044();
                    return
                }
                ;uiButtonTimedEvent = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                    delay: _0x86A8(),
                    callback: _0x7C2C(),
                    callbackScope: this
                })
            } else {
                if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[108]) || _0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[109])) {
                    if (!_0x6F1C) {
                        _0xA070();
                        return
                    } else {
                        tweenC = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[100]]({
                            targets: _0x851C(),
                            tweens: [{
                                angle: 30,
                                ease: _0x6F1C[86],
                                duration: 400,
                                repeat: 1,
                                yoyo: true
                            }]
                        })
                    }
                    ;if (!_0x6F1C) {
                        _0xA09C();
                        return
                    }
                    ;uiButtonTimedEvent = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                        delay: _0x86A8(),
                        callback: _0x7C2C(),
                        callbackScope: this
                    })
                } else {
                    if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[110])) {
                        if (!_0x6F1C) {
                            _0x7E3C()()
                        }
                        ;tweenC = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[100]]({
                            targets: _0x86D4(),
                            tweens: [{
                                angle: 30,
                                ease: _0x6F1C[86],
                                duration: 400,
                                repeat: 1,
                                yoyo: true
                            }]
                        });
                        if (_0x7A74(_0x7024, _0x6F1C[22])) {
                            _0x7B50()(false, _0x6F1C[108], 1, null)
                        } else {
                            uiButtonTimedEvent = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                                delay: _0x86A8(),
                                callback: _0x7C2C(),
                                callbackScope: this
                            })
                        }
                    }
                }
            }
        }
    }
    function _0x70D4() {
        transition1 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](700, 300, _0x6F1C[111]);
        _0x8F14()[_0x6F1C[62]]();
        transition2 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](340, 88, _0x6F1C[112]);
        transition3 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](410, 386, _0x6F1C[112]);
        transition4 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](950, 124, _0x6F1C[112]);
        transition5 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](1220, 224, _0x6F1C[112]);
        transition6 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](958, 410, _0x6F1C[112]);
        _0xA0C8();
        if (!_0x72B8) {
            return
        }
        ;_0xA0F4();
        _0xA120();
        _0xA14C();
        if (_0x7A74(_0x7260, _0x6F1C[22])) {
            _0xA178();
            return
        } else {
            _0x8FC4()[_0x6F1C[84]] = 0
        }
        ;_0xA1A4();
        _0xA1D0();
        _0xA1FC();
        if (!_0x71DC) {
            _0x7C2C()();
            return
        }
        ;_0xA228();
        _0xA254();
        _0xA280();
        _0xA2AC();
        _0xA2D8();
        _0x8F14()[_0x6F1C[57]](0);
        _0x8F40()[_0x6F1C[57]](0);
        if (!_0x707C) {
            _0x7C00()();
            return
        }
        ;_0x8F6C()[_0x6F1C[57]](0);
        _0x8F98()[_0x6F1C[57]](0);
        if (_0x7A48(_0x7234, _0x6F1C[57])) {
            _0xA304();
            return
        }
        ;_0x8FC4()[_0x6F1C[57]](0);
        _0x8FF0()[_0x6F1C[57]](0);
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F14(),
            angle: 0,
            alpha: 1,
            ease: _0x6F1C[86],
            duration: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F14(),
            scaleX: 1,
            scaleY: 1,
            ease: _0x6F1C[81],
            duration: 600
        });
        if (_0x7A48(_0x7158, true)) {
            _0x7E3C()(true);
            _0xA330()
        }
        ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F40(),
            alpha: 1,
            ease: _0x6F1C[86],
            duration: 500,
            delay: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F6C(),
            alpha: 1,
            ease: _0x6F1C[86],
            duration: 500,
            delay: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F98(),
            alpha: 1,
            ease: _0x6F1C[86],
            duration: 500,
            delay: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FC4(),
            alpha: 1,
            ease: _0x6F1C[86],
            duration: 500,
            delay: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FF0(),
            alpha: 1,
            ease: _0x6F1C[86],
            duration: 500,
            delay: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F40(),
            scaleX: 0.6,
            scaleY: 0.6,
            ease: _0x6F1C[81],
            duration: 500,
            delay: 500
        });
        if (!_0x6F1C) {
            return
        }
        ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F6C(),
            scaleX: 1,
            scaleY: 1,
            ease: _0x6F1C[81],
            duration: 500,
            delay: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F98(),
            scaleX: 0.6,
            scaleY: 0.6,
            ease: _0x6F1C[81],
            duration: 500,
            delay: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FC4(),
            scaleX: 1,
            scaleY: 1,
            ease: _0x6F1C[81],
            duration: 500,
            delay: 500
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FF0(),
            scaleX: 0.6,
            scaleY: 0.6,
            ease: _0x6F1C[81],
            duration: 500,
            delay: 500,
            onComplete: _0x7C84()
        })
    }
    if (_0x72B8 === 0) {
        _0x7024()
    } else {
        function _0x7100() {
            if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[13])) {
                if (!_0x6F1C) {
                    return
                }
                ;_0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[13]);
                _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[113])
            } else {
                if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[109])) {
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[109]);
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[113])
                } else {
                    if (!_0x728C) {
                        _0x7C2C()(_0x6F1C[120], 0, null, 0);
                        _0xA35C()
                    }
                    ;if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[113])) {
                        _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[113]);
                        _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[115])
                    } else {
                        if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[115]) && _0x7A48(level, 1)) {
                            _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[115]);
                            if (!_0x6F1C) {
                                _0xA388();
                                return
                            }
                            ;_0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[101])
                        } else {
                            if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[115]) && _0x7A48(level, 2)) {
                                if (!_0x6F1C) {
                                    _0x7ACC()();
                                    _0xA3B4();
                                    return
                                }
                                ;_0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[115]);
                                _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[102])
                            } else {
                                if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[115]) && _0x7A48(level, 3)) {
                                    _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[115]);
                                    _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[103])
                                } else {
                                    if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[115]) && _0x7A48(level, 4)) {
                                        _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[115]);
                                        _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[104])
                                    } else {
                                        if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[115]) && _0x7A48(level, 5)) {
                                            _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[115]);
                                            _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[105])
                                        } else {
                                            if (!_0x6F1C) {
                                                _0x7E94()(true);
                                                return
                                            }
                                            ;if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[115]) && _0x7A48(level, 6)) {
                                                _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[115]);
                                                _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[106])
                                            } else {
                                                if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[115]) && _0x7A48(level, 7)) {
                                                    _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[115]);
                                                    _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[107])
                                                } else {
                                                    if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[101]) && _0x7A48(level, 2)) {
                                                        _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[101]);
                                                        _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[113])
                                                    } else {
                                                        if (!_0x6F1C) {
                                                            _0xA3E0();
                                                            return
                                                        }
                                                        ;if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[102]) && _0x7A48(level, 3)) {
                                                            _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[102]);
                                                            _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[113])
                                                        } else {
                                                            if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[103]) && _0x7A48(level, 4)) {
                                                                _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[103]);
                                                                _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[113])
                                                            } else {
                                                                if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[104]) && _0x7A48(level, 5)) {
                                                                    _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[104]);
                                                                    _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[113])
                                                                } else {
                                                                    if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[105]) && _0x7A48(level, 6)) {
                                                                        _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[105]);
                                                                        _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[113])
                                                                    } else {
                                                                        _0xA40C();
                                                                        if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[106]) && _0x7A48(level, 7)) {
                                                                            _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[106]);
                                                                            _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[113])
                                                                        } else {
                                                                            if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[107]) ) {
                                                                                if (_0x7A48(_0x707C, null)) {
                                                                                    return
                                                                                }
                                                                                ;_0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[107]);
                                                                                _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[110])
                                                                            } else {
                                                                                if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[107]) ) {
                                                                                    _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[107]);
                                                                                    _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[108])
                                                                                } else {
                                                                                    if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[108])) {
                                                                                        _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[108]);
                                                                                        _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[110])
                                                                                    } else {
                                                                                        if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[110])) {
                                                                                            _0x80D0()[_0x6F1C[80]][_0x6F1C[93]](_0x6F1C[110]);
                                                                                            _0x80D0()[_0x6F1C[80]][_0x6F1C[114]](_0x6F1C[13])
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
                }
            }
        }
    }
    ;function _0x712C() {
        transition1 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](700, 300, _0x6F1C[111]);
        _0x8F14()[_0x6F1C[62]]();
        transition2 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](340, 88, _0x6F1C[112]);
        if (_0x7A48(_0x728C, 0)) {
            _0x7AF8()(false);
            return
        } else {
            transition3 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](410, 386, _0x6F1C[112])
        }
        ;transition4 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](950, 124, _0x6F1C[112]);
        transition5 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](1220, 224, _0x6F1C[112]);
        transition6 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](958, 410, _0x6F1C[112]);
        _0xA438();
        _0xA464();
        _0xA490();
        if (!_0x7050) {
            return
        } else {
            _0x8FC4()[_0x6F1C[94]] = _0x90F8(5)
        }
        ;_0xA4BC();
        _0x8F40()[_0x6F1C[57]](0.6);
        _0x8F98()[_0x6F1C[57]](0.6);
        _0x8FF0()[_0x6F1C[57]](0.6);
        holder1Transition = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](863, 321.5, _0x6F1C[52]);
        holder2Transition = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](854, 262, _0x6F1C[53]);
        title1Transition = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](853, 137, _0x6F1C[54]);
        title2Transition = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](853, 253.5, _0x6F1C[55]);
        if (!_0x707C) {
            _0x7C58()()
        } else {
            title3Transition = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](863.5, 325.5, _0x6F1C[56])
        }
        ;titleContainerTransition = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[50]]();
        _0x8A70()[_0x6F1C[17]](_0x8128());
        _0x8A70()[_0x6F1C[17]](_0x8180());
        _0x8A70()[_0x6F1C[17]](_0x893C());
        _0x8A70()[_0x6F1C[17]](_0x8994());
        _0x8A70()[_0x6F1C[17]](_0x89EC());
        if (_0x7A48(_0x72E4, 1)) {
            _0x7DE4()();
            _0xA4E8()
        }
        ;_0xA514();
        _0xA540();
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8A70(),
            y: 60,
            ease: _0x6F1C[87],
            duration: 500,
            onComplete: _0x7D34()
        })
    }
    function _0x7158() {
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8A70(),
            y: _0x90F8(500),
            ease: _0x6F1C[87],
            duration: 500,
            delay: 1500,
            onComplete: _0x7D60()
        })
    }
    function _0x7184() {
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F14(),
            angle: _0x90F8(60),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 700,
            onComplete: _0x7D8C()
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F40(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 800
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F6C(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 800
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F98(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 800
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FC4(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 800
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FF0(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 800
        })
    }
    function _0x71B0() {
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8A70(),
            y: _0x90F8(500),
            ease: _0x6F1C[87],
            duration: 500,
            delay: 1500,
            onComplete: _0x7D60()
        })
    }
    if (_0x6FA0 == _0x6F1C[33]) {
        return
    }
    ;function _0x71DC() {
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F14(),
            angle: _0x90F8(60),
            ease: _0x6F1C[86],
            duration: 700,
            onComplete: _0x7D8C()
        });
        if (!_0x7208) {
            _0x7BA8()();
            _0xA56C();
            return
        }
        ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F14(),
            scaleX: 0,
            scaleY: 0,
            ease: _0x6F1C[86],
            duration: 700
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F40(),
            angle: _0x90F8(60),
            scaleX: 0.6,
            scaleY: 0.6,
            ease: _0x6F1C[86],
            duration: 400
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F6C(),
            scaleX: 0.6,
            scaleY: 0.6,
            ease: _0x6F1C[86],
            duration: 400
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F98(),
            scaleX: 0.6,
            scaleY: 0.6,
            ease: _0x6F1C[86],
            duration: 400
        });
        if (!_0x6F1C) {
            return
        }
        ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FC4(),
            angle: _0x90F8(60),
            scaleX: 0,
            scaleY: 0,
            ease: _0x6F1C[86],
            duration: 400
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FF0(),
            scaleX: 0.6,
            scaleY: 0.6,
            ease: _0x6F1C[86],
            duration: 400
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F14(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 700
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F40(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 400
        });
        if (!_0x6F1C) {
            _0xA598();
            return
        } else {
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8F6C(),
                alpha: 0,
                ease: _0x6F1C[86],
                duration: 400
            })
        }
        ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8F98(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 400
        });
        _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FC4(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 400
        });
        if (_0x7A74(_0x7208, null)) {
            _0x7E3C()();
            _0xA5C4();
            return
        }
        ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
            targets: _0x8FF0(),
            alpha: 0,
            ease: _0x6F1C[86],
            duration: 400
        })
    }
    function _0x7208() {
        if (_0x7940(transition1, null)) {
            if (_0x7A48(_0x6FF8, null)) {
                _0xA5F0();
                return
            }
            ;_0x8F14()[_0x6F1C[51]](false);
            _0x8F40()[_0x6F1C[51]](false);
            _0xA61C();
            _0x8F6C()[_0x6F1C[51]](false);
            _0x8F98()[_0x6F1C[51]](false);
            _0x8FC4()[_0x6F1C[51]](false);
            _0x8FF0()[_0x6F1C[51]](false)
        }
        ;if (_0x7A48(pageNo, 2)) {
            _0x7B7C()()
        } else {
            if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[109])) {
                if (!_0x7260) {
                    return
                }
                ;_0x888C()()
            } else {
                if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[113])) {
                    _0x8338()()
                } else {
                    if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[101])) {
                        if (!_0x6F1C) {
                            _0x7E3C()()
                        }
                        ;_0x8204()()
                    } else {
                        if (_0x7A48(_0x6F74, null)) {
                            _0x7D60()();
                            _0xA648()
                        }
                        ;if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[102])) {
                            _0x8230()()
                        } else {
                            if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[103])) {
                                if (_0x7A48(_0x72E4, null)) {
                                    _0xA674();
                                    return
                                } else {
                                    _0x825C()()
                                }
                            } else {
                                if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[104])) {
                                    _0x8288()()
                                } else {
                                    if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[105])) {
                                        _0x82B4()()
                                    } else {
                                        if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[106])) {
                                            _0x82E0()()
                                        } else {
                                            if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[107])) {
                                                _0x830C()()
                                            } else {
                                                if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[108])) {
                                                    _0x88E4()()
                                                } else {
                                                    if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[110])) {
                                                        _0x8020()()
                                                    } else {
                                                        if (!_0x6F1C) {
                                                            _0x7CB0()();
                                                            return
                                                        }
                                                        ;if (_0x80D0()[_0x6F1C[80]][_0x6F1C[99]](_0x6F1C[115])) {
                                                            _0x8860()()
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
    function _0x7234() {
        logo = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](419, 32, _0x6F1C[116]);
        _0x8364()[_0x6F1C[62]]({
            useHandCursor: true
        });
        _0x8364()[_0x6F1C[91]](_0x6F1C[88], _0x7628());
        if (!_0x7260) {
            _0x7CB0()();
            return
        }
        ;_0x8364()[_0x6F1C[91]](_0x6F1C[92], _0x7654());
        _0x8364()[_0x6F1C[91]](_0x6F1C[95], _0x7680());
        _0x8364()[_0x6F1C[91]](_0x6F1C[98], _0x76AC());
        mute = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[50]]();
        mute_back = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[117]);
        unmute_icon = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[118]);
        mute_icon = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[119]);
        _0x8498()[_0x6F1C[17]]([_0x84C4(), _0x90A0(), _0x84F0()]);
        _0xA6A0();
        _0xA6CC();
        _0x8498()[_0x6F1C[57]](0);
        if (_0x81D8()) {
            _0xA6F8();
            _0xA724()
        } else {
            _0xA750();
            if (!_0x70D4) {
                _0xA77C();
                return
            }
            ;_0xA7A8()
        }
        ;_0x84C4()[_0x6F1C[62]]({
            pixelPerfect: true,
            useHandCursor: true
        });
        _0x84C4()[_0x6F1C[91]](_0x6F1C[88], _0x76D8());
        _0x84C4()[_0x6F1C[91]](_0x6F1C[92], _0x7704());
        _0x84C4()[_0x6F1C[91]](_0x6F1C[95], _0x7E3C(), this);
        socialicon = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[50]]();
        social_back = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[117]);
        if (!_0x70A8) {
            return
        }
        ;social_icon = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[120]);
        _0x8808()[_0x6F1C[17]]([_0x87B0(), _0x87DC()]);
        _0xA7D4();
        _0xA800();
        _0x8808()[_0x6F1C[57]](0);
        if (_0x7A48(_0x7100, true)) {
            return
        }
        ;_0x87B0()[_0x6F1C[62]]({
            pixelPerfect: true,
            useHandCursor: true
        });
        _0x87B0()[_0x6F1C[91]](_0x6F1C[88], _0x7730());
        _0x87B0()[_0x6F1C[91]](_0x6F1C[92], _0x775C());
        _0x87B0()[_0x6F1C[91]](_0x6F1C[95], _0x7788());
        _0x87B0()[_0x6F1C[91]](_0x6F1C[98], _0x77B4());
        setting = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[50]]();
        if (!_0x6F1C) {
            return
        }
        ;setting_back = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[117]);
        setting_icon = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[17]][_0x6F1C[16]](0, 0, _0x6F1C[121]);
        _0x8700()[_0x6F1C[17]]([_0x872C(), _0x8758()]);
        _0xA82C();
        _0xA858();
        _0x872C()[_0x6F1C[62]]({
            pixelPerfect: true,
            useHandCursor: true
        });
        _0x872C()[_0x6F1C[91]](_0x6F1C[88], _0x77E0());
        _0x872C()[_0x6F1C[91]](_0x6F1C[92], _0x780C());
        if (_0x7A48(_0x712C, _0x6F1C[21])) {
            _0x7DE4()()
        }
        ;_0x872C()[_0x6F1C[91]](_0x6F1C[95], _0x7838());
        if (!_0x6F1C) {
            _0x7BA8()(false, null)
        }
        ;_0x872C()[_0x6F1C[91]](_0x6F1C[98], _0x7864())
    }
    function _0x7260() {
        tweenC = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[100]]({
            targets: _0x8440(),
            loop: _0x90F8(1),
            tweens: [{
                scaleX: 1,
                scaleY: 1,
                ease: _0x6F1C[86],
                duration: 350,
                delay: 500,
                yoyo: true
            }, {
                scaleX: 1.06,
                scaleY: 1.06,
                ease: _0x6F1C[86],
                duration: 350
            }, {
                scaleX: 1,
                scaleY: 1,
                ease: _0x6F1C[86],
                duration: 350
            }, {
                scaleX: 1.06,
                scaleY: 1.06,
                ease: _0x6F1C[86],
                duration: 350
            }, {
                scaleX: 1,
                scaleY: 1,
                ease: _0x6F1C[86],
                duration: 350
            }, {
                angle: 30,
                ease: _0x6F1C[86],
                duration: 400,
                delay: 1000,
                yoyo: true,
                repeat: 1
            }]
        });
        _0x8414()[_0x6F1C[62]]({
            pixelPerfect: true,
            useHandCursor: true
        });
        _0x8414()[_0x6F1C[91]](_0x6F1C[88], _0x7890());
        _0x8414()[_0x6F1C[91]](_0x6F1C[92], _0x78BC());
        _0x8414()[_0x6F1C[91]](_0x6F1C[95], _0x78E8());
        _0x8414()[_0x6F1C[91]](_0x6F1C[98], _0x7914())
    }
    function _0x728C(_0x6F48) {
        var _0x6F74 = {};
        _0x6F74._ = _0x6F48;
        _0xA960(_0x6F74);
        _0x7F18()[_0x6F1C[124]](_0x6F1C[122], _0x6F74._, _0x6F1C[123], _0x90CC());
        if (_0x6F74._ && !isMuted) {
            _0xA98C();
            _0x7E3C()();
            return
        }
        ;if (!_0x7260) {
            _0xA9B8();
            return
        }
        ;if (!_0x6F74._ && !wasMuted) {
            _0xA9E4();
            _0x7E3C()();
            return
        }
        ;_0xAA10(_0x6F74)
    }
    function _0x72B8() {
        if (_0x7AA0(pageNo, 1)) {
            if (!isMuted) {
                _0xAA3C();
                _0xAA68();
                _0xAA94();
                if (_0x7A48(_0x70A8, 0)) {
                    return
                }
                ;_0xAAC0();
                _0x846C()[_0x6F1C[126]]();
                if (_0x7A48(soundCount, 1)) {
                    _0x8834()[_0x6F1C[126]]()
                }
            } else {
                _0xAAEC();
                _0xAB18();
                _0xAB44();
                if (_0x7A74(_0x7158, 1)) {
                    _0x7D60()();
                    _0xAB70();
                    return
                }
                ;_0xAB9C();
                _0x846C()[_0x6F1C[69]]();
                _0x7E68()(_0x6F1C[96]);
                if (!_0x6F1C) {
                    return
                }
                ;if (_0x7A48(soundCount, 1)) {
                    _0x8834()[_0x6F1C[69]]()
                }
            }
        }
    }
    function _0x72E4(_0x6F48) {
        if (!isMuted) {
            eventSound = _0x80D0()[_0x6F1C[65]][_0x6F1C[17]](_0x6F48);
            _0x804C()[_0x6F1C[46]]()
        }
    }
    titleScreenStart = _0x6FF8;
    titleBackgroundTweenComplete = _0x7024;
    titleTweenComplete = _0x7050;
    titleScreenButtonEvent = _0x707C;
    uiButtonTween = _0x70A8;
    transitionIn = _0x70D4;
    transitionInComplete = _0x7100;
    transitionOut = _0x712C;
    transitionTitleTweenIn = _0x7158;
    transitionTweenOut = _0x7184;
    if (!_0x6F1C) {
        _0x72B8(null);
        (function() {
            _0x7100 = 1
        }
        )();
        return
    }
    ;transitionTitleTweenIn = _0x71B0;
    if (!_0x6F1C) {
        _0x71DC = _0x6F1C[124]
    }
    ;transitionTweenOut = _0x71DC;
    levelsStart = _0x7208;
    if (_0x7024 == false) {
        return
    }
    ;commonAssets = _0x7234;
    if (!_0x7158) {
        _0x70D4(_0x6F1C[80])
    }
    ;moreGamesTweenEvent = _0x7260;
    muteAd = _0x728C;
    muteFun = _0x72B8;
    if (!_0x6F1C) {
        _0x72E4(false, 1, _0x6F1C[3], true);
        return
    }
    ;playSoundEffects = _0x72E4;
    (_0x6F48)(_0x6F1C[0], 0, _0x6F1C[1]);
    if (_0x72E4 === null) {
        (function() {
            _0x71B0 = false
        }
        )();
        return
    } else {
        level1Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    ;level2Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (_0x6FCC === false) {
        _0x6FA0();
        (function() {
            _0x712C = 1
        }
        )();
        return
    }
    ;level3Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level4Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level5Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level6Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level7Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level8Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (!_0x6F1C) {
        _0x6FCC();
        (function() {
            _0x7100 = _0x6F1C[64]
        }
        )();
        return
    }
    ;level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level5Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level6Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (_0x70D4 == true) {
        _0x7184(true, true, true);
        (function() {
            _0x6F74 = 1
        }
        )()
    }
    ;level7Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level8Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    decorcount1 = 0;
    decorcount2 = 0;
    decorcount3 = 0;
    decorcount4 = 0;
    dressupcount1 = 0;
    dressupcount2 = 0;
    dressupcount3 = 0;
    dressupcount4 = 0;
    soundCount = 0;
    titlescreen = new Phaser[_0x6F1C[76]]({
        Extends: Phaser[_0x6F1C[12]],
        initialize: _0x6F74,
        preload: _0x6FA0,
        create: _0x6FCC
    });
    if (_0x6FA0 == false) {
        return
    }
    ;if (!_0x6F1C) {
        _0x72E4();
        return
    }
    ;if (_0x6F48 == null) {
        _0x72E4()
    }
    ;if (!_0x6F1C) {
        _0x7158();
        (function() {
            _0x7234 = 0
        }
        )();
        return
    }
    ;wasMuted = false;
    eMusicConfig = {
        mute: false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    };
    function _0x9124(_0x6F1C, _0x6F74, _0x6F48) {
        _0x6F74._[_0x6F1C._] = _0x6F74._[_0x6F48._]
    }
    function _0x9150(_0x6F1C, _0x6F74, _0x6F48) {
        _0x6F74._[_0x6F1C._] = _0x6F48._
    }
    function _0x917C(_0x6F1C, _0x6F74, _0x6F48) {
        _0x6F1C._ = _0x7998((_0x79C4(_0x6F74._, _0x6F48._)), 3072640)
    }
    function _0x91A8() {
        _0x7310 = null
    }
    function _0x91D4() {
        if (_0x7A48(_0x6F48, null)) {
            _0x707C = true
        }
    }
    function _0x9200() {
        if (!_0x6F1C) {
            _0x707C = 0
        }
    }
    function _0x922C(_0x6F48) {
       // throw (_0x6F48._ || _0x6F1C[11])
    }
    function _0x9258() {
        pageNo = 2
    }
    function _0x9284() {
        settingClicked = false
    }
    function _0x92B0() {
        level = 1
    }
    function _0x92DC() {
        levelSelectEnter = false
    }
    function _0x9308() {
        startGame = false
    }
    function _0x9334() {
        adViewCount = 0
    }
    function _0x9360() {
        decorcount1 = 0
    }
    function _0x938C() {
        _0x72E4 = _0x6F1C[107]
    }
    function _0x93B8() {
        decorcount2 = 0
    }
    function _0x93E4() {
        decorcount3 = 0
    }
    function _0x9410() {
        decorcount4 = 0
    }
    function _0x943C() {
        dressupcount1 = 0
    }
    function _0x9468() {
        dressupcount2 = 0
    }
    function _0x9494() {
        dressupcount3 = 0
    }
    function _0x94C0() {
        dressupcount4 = 0
    }
    function _0x94EC() {
        soundCount = 0
    }
    function _0x9518() {
        level1Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x9544() {
        level3Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x9570() {
        level4Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x959C() {
        level5Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x95C8() {
        level6Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x95F4() {
        level7Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x9620() {
        level8Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x964C() {
        level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x9678() {
        level2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x96A4() {
        level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x96D0() {
        level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x96FC() {
        level5Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x9728() {
        level7Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x9754() {
        level8Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    function _0x9780() {
        _0x7184 = 0
    }
    function _0x97AC() {
        _0x7208 = 0
    }
    function _0x97D8() {
        _0x7310 = 1
    }
    function _0x9804() {
        _0x6FA0 = true
    }
    function _0x9830() {
        _0x7184 = 1
    }
    function _0x985C() {
        if (!_0x7024) {
            _0x6FCC = false
        }
    }
    function _0x9888() {
        _0x7208 = 0
    }
    function _0x98B4() {
        _0x8D04()[_0x6F1C[38]] = _0x90F8(900)
    }
    function _0x98E0() {
        _0x8D30()[_0x6F1C[38]] = _0x90F8(900)
    }
    function _0x990C() {
        _0x8D5C()[_0x6F1C[38]] = _0x90F8(900)
    }
    function _0x9938() {
        _0x8D88()[_0x6F1C[38]] = _0x90F8(900)
    }
    function _0x9964() {
        _0x8D04()[_0x6F1C[40]] = 30
    }
    function _0x9990() {
        _0x8D30()[_0x6F1C[40]] = 30
    }
    function _0x99BC() {
        _0x8D5C()[_0x6F1C[40]] = 30
    }
    function _0x99E8() {
        _0x8D88()[_0x6F1C[40]] = 30
    }
    function _0x9A14() {
        _0x7260 = null
    }
    function _0x9A40() {
        _0x70A8 = 0
    }
    function _0x9A6C() {
        _0x8910()[_0x6F1C[38]] += 900
    }
    function _0x9A98() {
        _0x89C0()[_0x6F1C[40]] += 500
    }
    function _0x9AC4() {
        _0x71DC = true
    }
    function _0x9AF0() {
        _0x85F8()[_0x6F1C[38]] = 960
    }
    function _0x9B1C() {
        _0x85F8()[_0x6F1C[40]] = 1000
    }
    function _0x9B48() {
        _0x712C = 0
    }
    function _0x9B74() {
        _0x83E8()[_0x6F1C[38]] = 740
    }
    function _0x9BA0() {
        _0x83E8()[_0x6F1C[40]] = 1000
    }
    function _0x9BCC() {
        firstTime = false
    }
    function _0x9BF8() {
        bMusicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
    }
    function _0x9C24() {
        _0x6FF8 = true
    }
    function _0x9C50() {
        _0x7208 = _0x6F1C[0]
    }
    function _0x9C7C() {
        isMuted = false
    }
    function _0x9CA8() {
        _0x90A0()[_0x6F1C[68]] = true
    }
    function _0x9CD4() {
        _0x84F0()[_0x6F1C[68]] = false
    }
    function _0x733C() {
        return function() {
           
        }
    }
    function _0x9D00() {
        if (_0x7A48(_0x7158, _0x6F1C[61])) {
            _0x7100 = 0
        }
    }
    function _0x7368(_0x6F48) {
        return function() {
            if (!_0x6F1C) {
                return
            }
            ;_0x8AC8()[_0x6F1C[51]](false);
            _0x8AF4()[_0x6F1C[51]](true);
            _0x8DB4()[_0x6F1C[51]](false);
            var _0x6F74 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                delay: 300,
                callback: _0x6F48._,
                callbackScope: this
            })
        }
    }
    function _0x7394(_0x6F48) {
        return function() {
            if (!_0x6F1C) {
                _0x7E10()(_0x6F1C[111])
            }
            ;_0x8AC8()[_0x6F1C[51]](false);
            _0x8DB4()[_0x6F1C[51]](false);
            _0x9D2C();
            _0x9D58();
            _0x9D84();
            _0x8B20()[_0x6F1C[51]](true);
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8B20(),
                x: 441,
                y: 145,
                alpha: 0,
                ease: _0x6F1C[85],
                duration: 500,
                onComplete: _0x6F48._
            })
        }
    }
    function _0x73C0(_0x6F48) {
        return function() {
            _0x8AC8()[_0x6F1C[51]](true);
            _0x8AF4()[_0x6F1C[51]](false);
            _0x8DB4()[_0x6F1C[51]](true);
            var _0x6F74 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                delay: 6500,
                callback: _0x6F48._,
                callbackScope: this
            })
        }
    }
    function _0x9DB0() {
        _0x7024 = null
    }
    function _0x73EC(_0x6F48) {
        return function() {
            _0x8B78()[_0x6F1C[51]](false);
            _0x8BA4()[_0x6F1C[51]](true);
            _0x8DE0()[_0x6F1C[51]](false);
            var _0x6F74 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                delay: 300,
                callback: _0x6F48._,
                callbackScope: this
            })
        }
    }
    function _0x7418(_0x6F48) {
        return function() {
            _0x8B78()[_0x6F1C[51]](true);
            _0x8BA4()[_0x6F1C[51]](false);
            _0x8DE0()[_0x6F1C[51]](true);
            var _0x6F74 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                delay: 6000,
                callback: _0x6F48._,
                callbackScope: this
            })
        }
    }
    function _0x7444(_0x6F48) {
        return function() {
            _0x8C28()[_0x6F1C[51]](true);
            _0x9DDC();
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8C28(),
                alpha: 1,
                ease: _0x6F1C[85],
                duration: 200,
                onComplete: _0x6F48._
            })
        }
    }
    function _0x7470(_0x6F48) {
        return function() {
            _0x8C28()[_0x6F1C[51]](false);
            if (_0x7A48(_0x7024, 1)) {
                _0x7E10()();
                _0x9E08()
            }
            ;_0x8BFC()[_0x6F1C[51]](true);
            _0x8E0C()[_0x6F1C[51]](true);
            timer1 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                delay: 4000,
                callback: _0x6F48._,
                callbackScope: this
            })
        }
    }
    function _0x749C(_0x6F48) {
        return function() {
            _0x8CD8()[_0x6F1C[51]](true);
            _0x9E34();
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8CD8(),
                alpha: 1,
                ease: _0x6F1C[85],
                duration: 200,
                onComplete: _0x6F48._
            })
        }
    }
    function _0x74C8(_0x6F48) {
        return function() {
            _0x8CAC()[_0x6F1C[51]](false);
            _0x8E38()[_0x6F1C[51]](false);
            if (_0x7A74(_0x7260, true)) {
                return
            }
            ;_0x8C80()[_0x6F1C[51]](true);
            _0x9E60();
            _0x9E8C();
            _0x9EB8();
            _0x8C80()[_0x6F1C[51]](true);
            _0x8C80()[_0x6F1C[57]](0);
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8C80(),
                scaleX: 1,
                scaleY: 1,
                ease: _0x6F1C[85],
                duration: 500
            });
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8C80(),
                alpha: 1,
                ease: _0x6F1C[85],
                duration: 500
            });
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8C80(),
                alpha: 0,
                ease: _0x6F1C[85],
                duration: 500,
                delay: 500,
                onComplete: _0x6F48._
            })
        }
    }
    function _0x74F4(_0x6F48) {
        return function() {
            _0x8CD8()[_0x6F1C[51]](false);
            _0x8CAC()[_0x6F1C[51]](true);
            _0x9EE4();
            _0x8E38()[_0x6F1C[51]](true);
            timer1 = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[83]][_0x6F1C[82]]({
                delay: 4500,
                callback: _0x6F48._,
                callbackScope: this
            })
        }
    }
    function _0x7520(_0x6F48) {
        return function() {
            if (!_0x6F1C) {
                _0x7B50()(1, true)
            }
            ;_0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8D04(),
                x: 90,
                ease: _0x6F1C[81],
                duration: 500,
                delay: 500
            });
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8D30(),
                x: _0x90F8(20),
                ease: _0x6F1C[81],
                duration: 500,
                delay: 1000
            });
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8D30(),
                x: _0x90F8(750),
                ease: _0x6F1C[87],
                duration: 500,
                delay: 3500
            });
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8D04(),
                x: _0x90F8(750),
                ease: _0x6F1C[87],
                duration: 500,
                delay: 4000,
                onComplete: _0x6F48._
            })
        }
    }
    function _0x754C(_0x6F48) {
        return function() {
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8D88(),
                x: 100,
                ease: _0x6F1C[81],
                duration: 500,
                delay: 500
            });
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8D5C(),
                x: _0x90F8(40),
                ease: _0x6F1C[81],
                duration: 500,
                delay: 1000
            });
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8D5C(),
                x: _0x90F8(750),
                ease: _0x6F1C[87],
                duration: 500,
                delay: 3500
            });
            _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                targets: _0x8D88(),
                x: _0x90F8(750),
                ease: _0x6F1C[87],
                duration: 500,
                delay: 4000,
                onComplete: _0x6F48._
            })
        }
    }
    function _0x7578() {
        return function(_0x6F74, _0x6F48) {
            if (_0x7940(_0x6F48[_0x6F1C[89]], _0x6F1C[90])) {
                tweenA = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                    targets: _0x8624(),
                    angle: 30,
                    scaleX: 1.1,
                    scaleY: 1.1,
                    ease: _0x6F1C[86],
                    duration: 500,
                    yoyo: true
                });
                tweenB = _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                    targets: _0x867C(),
                    angle: _0x90F8(30),
                    scaleX: 1.1,
                    scaleY: 1.1,
                    ease: _0x6F1C[86],
                    duration: 500,
                    yoyo: true
                })
            }
        }
    }
    function _0x75A4() {
        return function(_0x6F48) {
            if (_0x796C(tweenA, undefined)) {
                _0x901C()[_0x6F1C[93]]();
                _0x9048()[_0x6F1C[93]]()
            }
            ;_0x9F10();
            _0x8624()[_0x6F1C[57]](1);
            _0x9F3C();
            _0x867C()[_0x6F1C[57]](1)
        }
    }
    function _0x75D0() {
        return function(_0x6F48) {
            if (!startGame && _0x7AA0(loadAssetValue, 1)) {
                _0x7E68()(_0x6F1C[96]);
                _0x8650()[_0x6F1C[51]](true);
                if (_0x796C(tweenA, undefined)) {
                    _0x901C()[_0x6F1C[93]]();
                    _0x9048()[_0x6F1C[93]]()
                }
                ;_0x9F68();
                _0x8624()[_0x6F1C[57]](1);
                _0x9F94();
                if (_0x7A74(_0x72B8, 0)) {
                    _0x7E3C()(0);
                    return
                }
                ;_0x867C()[_0x6F1C[57]](1);
                _0x9074()[_0x6F1C[97]](false)
            }
        }
    }
    function _0x75FC() {
        return function(_0x6F48) {
            if (!startGame && _0x7AA0(loadAssetValue, 1)) {
                _0x9FC0();
                if (!_0x7184) {
                    return
                }
                ;_0x8650()[_0x6F1C[51]](false);
                _0x7C58()()
            }
        }
    }
    function _0x9FEC() {
        _0x7F9C()[_0x6F1C[94]] = 0
    }
    function _0xA018() {
        _0x7FC8()[_0x6F1C[94]] = 0
    }
    function _0xA044() {
        _0x707C = null
    }
    function _0xA070() {
        _0x71DC = 0
    }
    function _0xA09C() {
        _0x7100 = 1
    }
    function _0xA0C8() {
        _0x8F14()[_0x6F1C[84]] = 0
    }
    function _0xA0F4() {
        _0x8F40()[_0x6F1C[84]] = 0
    }
    function _0xA120() {
        _0x8F6C()[_0x6F1C[84]] = 0
    }
    function _0xA14C() {
        _0x8F98()[_0x6F1C[84]] = 0
    }
    function _0xA178() {
        _0x6F74 = false
    }
    function _0xA1A4() {
        _0x8FF0()[_0x6F1C[84]] = 0
    }
    function _0xA1D0() {
        _0x8F14()[_0x6F1C[94]] = _0x90F8(30)
    }
    function _0xA1FC() {
        _0x8F40()[_0x6F1C[94]] = _0x90F8(30)
    }
    function _0xA228() {
        _0x8F6C()[_0x6F1C[94]] = _0x90F8(5)
    }
    function _0xA254() {
        _0x8F98()[_0x6F1C[94]] = _0x90F8(15)
    }
    function _0xA280() {
        if (!_0x6F48) {
            _0x728C = null
        }
    }
    function _0xA2AC() {
        _0x8FC4()[_0x6F1C[94]] = _0x90F8(5)
    }
    function _0xA2D8() {
        _0x8FF0()[_0x6F1C[94]] = 15
    }
    function _0xA304() {
        _0x7158 = 1
    }
    function _0xA330() {
        _0x72B8 = true
    }
    function _0xA35C() {
        _0x7100 = true
    }
    function _0xA388() {
        _0x72E4 = null
    }
    function _0xA3B4() {
        _0x72B8 = true
    }
    function _0xA3E0() {
        _0x712C = false
    }
    function _0xA40C() {
        if (!_0x6FCC) {
            _0x7260 = false
        }
    }
    function _0xA438() {
        _0x8F40()[_0x6F1C[94]] = _0x90F8(30)
    }
    function _0xA464() {
        _0x8F6C()[_0x6F1C[94]] = _0x90F8(5)
    }
    function _0xA490() {
        _0x8F98()[_0x6F1C[94]] = _0x90F8(15)
    }
    function _0xA4BC() {
        if (!_0x7208) {
            _0x72B8 = false
        } else {
            _0x8FF0()[_0x6F1C[94]] = 15
        }
    }
    function _0xA4E8() {
        _0x712C = 0
    }
    function _0xA514() {
        _0x8A70()[_0x6F1C[38]] = _0x90F8(155)
    }
    function _0xA540() {
        _0x8A70()[_0x6F1C[40]] = _0x90F8(600)
    }
    function _0xA56C() {
        _0x71B0 = _0x6F1C[19]
    }
    function _0xA598() {
        _0x72B8 = 1
    }
    function _0xA5C4() {
        _0x7260 = 1
    }
    function _0xA5F0() {
        _0x7234 = _0x6F1C[89]
    }
    function _0xA61C() {
        if (!_0x6F1C) {
            _0x72B8 = false
        }
    }
    function _0xA648() {
        _0x7208 = true
    }
    function _0xA674() {
        _0x7158 = 0
    }
    function _0x7628() {
        return function(_0x6F1C) {}
    }
    function _0x7654() {
        return function(_0x6F1C) {}
    }
    function _0x7680() {
        return function(_0x6F48) {
            _0x7E68()(_0x6F1C[96])
        }
    }
    function _0x76AC() {
        return function(_0x6F1C) {
            _0x8548()(_0x8390())
        }
    }
    function _0xA6A0() {
        _0x8498()[_0x6F1C[38]] = 1060
    }
    function _0xA6CC() {
        _0x8498()[_0x6F1C[40]] = 40
    }
    function _0xA6F8() {
        _0x90A0()[_0x6F1C[68]] = false
    }
    function _0xA724() {
        _0x84F0()[_0x6F1C[68]] = true
    }
    function _0xA750() {
        _0x90A0()[_0x6F1C[68]] = true
    }
    function _0xA77C() {
        _0x7208 = true
    }
    function _0xA7A8() {
        _0x84F0()[_0x6F1C[68]] = false
    }
    function _0x76D8() {
        return function(_0x6F48) {
            _0x8498()[_0x6F1C[57]](0.95)
        }
    }
    function _0x7704() {
        return function(_0x6F48) {
            _0x8498()[_0x6F1C[57]](0.9)
        }
    }
    function _0xA7D4() {
        _0x8808()[_0x6F1C[38]] = 1060
    }
    function _0xA800() {
        _0x8808()[_0x6F1C[40]] = 40
    }
    function _0x7730() {
        return function(_0x6F48) {
            if (!_0x6F1C) {
                return
            }
            ;_0x8808()[_0x6F1C[57]](0.95)
        }
    }
    function _0x775C() {
        return function(_0x6F48) {
            _0x8808()[_0x6F1C[57]](0.9)
        }
    }
    function _0x7788() {
        return function(_0x6F48) {
            _0x7E68()(_0x6F1C[96])
        }
    }
    function _0x77B4() {
        return function(_0x6F1C) {
            _0x8548()(_0x8078())
        }
    }
    function _0xA82C() {
        _0x8700()[_0x6F1C[38]] = 1060
    }
    function _0xA858() {
        _0x8700()[_0x6F1C[40]] = 40
    }
    function _0x77E0() {
        return function(_0x6F48) {
            _0x8700()[_0x6F1C[57]](1.05)
        }
    }
    function _0x780C() {
        return function(_0x6F48) {
            _0xA884();
            _0x8700()[_0x6F1C[57]](1)
        }
    }
    function _0x7838() {
        return function(_0x6F48) {
            if (_0x7A74(_0x71B0, false)) {
                _0x7B50()();
                return
            }
            ;if (_0x7A48(_0x8700()[_0x6F1C[94]], 0)) {
                if (_0x7A48(_0x70A8, 0)) {
                    _0xA8B0();
                    return
                } else {
                    _0x7E68()(_0x6F1C[96])
                }
            }
        }
    }
    function _0x7864() {
        return function(_0x6F48) {
            if (!_0x6F74) {
                return
            }
            ;if (_0x7A48(_0x8700()[_0x6F1C[94]], 0)) {
                if (!settingClicked) {
                    _0xA8DC();
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8700(),
                        angle: 360,
                        ease: _0x6F1C[86],
                        duration: 300
                    });
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8808(),
                        y: 94,
                        ease: _0x6F1C[86],
                        duration: 300
                    });
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8498(),
                        y: 145,
                        ease: _0x6F1C[86],
                        duration: 300
                    });
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8808(),
                        scaleX: 0.9,
                        scaleY: 0.9,
                        ease: _0x6F1C[86],
                        duration: 300
                    });
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8498(),
                        scaleX: 0.9,
                        scaleY: 0.9,
                        ease: _0x6F1C[86],
                        duration: 300
                    })
                } else {
                    _0xA908();
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8700(),
                        angle: 360,
                        ease: _0x6F1C[86],
                        duration: 300
                    });
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8808(),
                        y: 40,
                        ease: _0x6F1C[86],
                        duration: 300
                    });
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8498(),
                        y: 40,
                        ease: _0x6F1C[86],
                        duration: 300
                    });
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8808(),
                        scaleX: 0,
                        scaleY: 0,
                        ease: _0x6F1C[86],
                        duration: 300
                    });
                    _0x80D0()[_0x6F1C[80]][_0x6F1C[79]][_0x8574()][_0x6F1C[78]][_0x6F1C[17]]({
                        targets: _0x8498(),
                        scaleX: 0,
                        scaleY: 0,
                        ease: _0x6F1C[86],
                        duration: 300
                    })
                }
            }
        }
    }
    function _0x7890() {
        return function(_0x6F1C) {}
    }
    function _0x78BC() {
        return function(_0x6F1C) {}
    }
    function _0x78E8() {
        return function(_0x6F48) {
            _0xA934();
            _0x7E68()(_0x6F1C[96])
        }
    }
    function _0x7914() {
        return function(_0x6F1C) {
            _0x8548()(_0x83BC())
        }
    }
    function _0xA960(_0x6F1C) {
        if (_0x6F1C._) {
            wasMuted = isMuted
        }
    }
    function _0xA98C() {
        wasMuted = false
    }
    function _0xA9B8() {
        _0x7024 = _0x6F1C[31]
    }
    function _0xA9E4() {
        wasMuted = false
    }
    function _0xAA10(_0x6F1C) {
        if (_0x6F1C._ && _0x81D8()) {
            wasMuted = true
        }
    }
    function _0xAA3C() {
        isMuted = true
    }
    function _0xAA68() {
        _0x90A0()[_0x6F1C[68]] = false
    }
    function _0xAA94() {
        _0x84F0()[_0x6F1C[68]] = true
    }
    function _0xAAC0() {
        _0x846C()[_0x6F1C[125]] = true
    }
    function _0xAAEC() {
        isMuted = false
    }
    function _0xAB18() {
        _0x90A0()[_0x6F1C[68]] = true
    }
    function _0xAB44() {
        _0x84F0()[_0x6F1C[68]] = false
    }
    function _0xAB70() {
        _0x728C = 0
    }
    function _0xAB9C() {
        _0x846C()[_0x6F1C[125]] = false
    }
    function _0x9D2C() {
        _0x8B20()[_0x6F1C[38]] = 441
    }
    function _0x9D58() {
        _0x8B20()[_0x6F1C[40]] = 145
    }
    function _0x9D84() {
        _0x8B20()[_0x6F1C[84]] = 1
    }
    function _0x9DDC() {
        _0x8C28()[_0x6F1C[84]] = 0
    }
    function _0x9E08() {
        _0x7310 = _0x6F1C[116]
    }
    function _0x9E34() {
        _0x8CD8()[_0x6F1C[84]] = 0
    }
    function _0x9E60() {
        _0x8C80()[_0x6F1C[38]] = 440
    }
    function _0x9E8C() {
        _0x8C80()[_0x6F1C[40]] = 147
    }
    function _0x9EB8() {
        _0x8C80()[_0x6F1C[84]] = 0
    }
    function _0x9EE4() {
        if (!_0x6F1C) {
            _0x7100 = null
        }
    }
    function _0x9F10() {
        _0x8624()[_0x6F1C[94]] = 0
    }
    function _0x9F3C() {
        _0x867C()[_0x6F1C[94]] = 0
    }
    function _0x9F68() {
        _0x8624()[_0x6F1C[94]] = 0
    }
    function _0x9F94() {
        _0x867C()[_0x6F1C[94]] = 0
    }
    function _0x9FC0() {
        startGame = true
    }
    function _0xA884() {
        if (!_0x6F1C) {
            _0x6F48 = _0x6F1C[81]
        }
    }
    function _0xA8B0() {
        _0x6F74 = 1
    }
    function _0xA8DC() {
        settingClicked = true
    }
    function _0xA908() {
        settingClicked = false
    }
    function _0xA934() {
        if (_0x7A74(_0x7208, false)) {
            _0x707C = _0x6F1C[37]
        }
    }
}
)()
