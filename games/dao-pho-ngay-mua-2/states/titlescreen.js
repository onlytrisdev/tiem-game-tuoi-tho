var startgame, setcount, levelSelectEnter, level1Arr1, level2Arr1, level3Arr1, level4Arr1, endArr1, endArr2, endArr3, makeupArr1, makeupArr2, makeupArr3, dollNum, dollSelectEnter, titlescreen, loadPicture1, logofbkmute, settingOver, settingOut, settingDown, settingUp, transitionOut, levelsStart, titleScreenStart, titleAnimationStart, titleAnimationStart1, titleDollChange, titleDollChange1, titleDollChange2, titleDollChange3, titleButtonAppear, titleScreenStart1, continueTweenAction, moreGamesOver, moreGamesOut, moreGamesDown, moreGamesUp, playOver, playOut, playDown, playUp, transitionIn, transitionInTweenComplete, faceBookOver, faceBookOut, faceBookDown, faceBookUp, logoOver, logoOut, logoDown, logoUp, wasMuted, muteAd, muteFun, muteOver, muteUp, muteOut, playsoundeffects, hasLooped;
(function() {
    function _0x14D18() {
        return clicksound
    }

    function _0x13B18(_0x12498, _0x124F8) {
        return _0x12498 > _0x124F8
    }

    function _0x149B8() {
        return _0x13338
    }

    function _0x14D78() {
        return console
    }

    function _0x16AB8() {
        return wasMuted
    }

    function _0x15618() {
        return logoUrl
    }

    function _0x14FB8() {
        return faceUrl
    }

    function _0x14DD8() {
        return continueTweenTimer
    }

    function _0x15558() {
        return loadFinish
    }

    function _0x15858() {
        return console.log
    }

    function _0x15678() {
        return mGamesLink
    }

    function _0x159D8() {
        return replay
    }

    function _0x157F8() {
        return next
    }

    function _0x14EF8() {
        return done
    }

    function _0x169F8() {
        return tweenA
    }

    function _0x16A58() {
        return tweenB
    }

    function _0x14598() {
        return _0x12F18
    }

    function _0x144D8() {
        return _0x12E58
    }

    function _0x14478() {
        return _0x12DF8
    }

    function _0x140B8() {
        return _0x12A38
    }

    function _0x14178() {
        return _0x12AF8
    }

    function _0x14058() {
        return _0x129D8
    }

    function _0x141D8() {
        return _0x12B58
    }

    function _0x13FF8() {
        return _0x12978
    }

    function _0x14E98() {
        return dollSelectStart
    }

    function _0x14F58() {
        return endScreenStart
    }

    function _0x15BB8() {
        return thumbStart
    }

    function _0x15498() {
        return level9Start
    }

    function _0x15438() {
        return level8Start
    }

    function _0x153D8() {
        return level7Start
    }

    function _0x15378() {
        return level6Start
    }

    function _0x15318() {
        return level5Start
    }

    function _0x152B8() {
        return level4Start
    }

    function _0x15258() {
        return level3Start
    }

    function _0x151F8() {
        return level2Start
    }

    function _0x15198() {
        return level1Start
    }

    function _0x154F8() {
        return levelSelectStart
    }

    function _0x14238() {
        return _0x12BB8
    }

    function _0x13ED8() {
        return _0x12858
    }

    function _0x14118() {
        return _0x12A98
    }

    function _0x13F98() {
        return _0x12918
    }

    function _0x16998() {
        return transitiontitle
    }

    function _0x16938() {
        return transitionrain
    }

    function _0x168D8() {
        return transitioncloud4
    }

    function _0x16878() {
        return transitioncloud3
    }

    function _0x16818() {
        return transitioncloud2
    }

    function _0x167B8() {
        return transitioncloud1
    }

    function _0x16758() {
        return transitionbackground
    }

    function _0x145F8() {
        return _0x12F78
    }

    function _0x143B8() {
        return _0x12D38
    }

    function _0x13E18() {
        return _0x12798
    }

    function _0x13BD8() {
        return _0x12558
    }

    function _0x13DB8() {
        return _0x12738
    }

    function _0x13D58() {
        return _0x126D8
    }

    function _0x13CF8() {
        return _0x12678
    }

    function _0x15A38() {
        return setting
    }

    function _0x14B98() {
        return _0x13518
    }

    function _0x147D8() {
        return _0x13158
    }

    function _0x14778() {
        return _0x130F8
    }

    function _0x14718() {
        return _0x13098
    }

    function _0x146B8() {
        return _0x13038
    }

    function _0x15AF8() {
        return socialicon
    }

    function _0x14538() {
        return _0x12EB8
    }

    function _0x14AD8() {
        return _0x13458
    }

    function _0x14B38() {
        return _0x134B8
    }

    function _0x14958() {
        return _0x132D8
    }

    function _0x148F8() {
        return _0x13278
    }

    function _0x14838() {
        return _0x131B8
    }

    function _0x14A18() {
        return _0x13398
    }

    function _0x158B8() {
        return parseInt
    }

    function _0x13938(_0x12498, _0x124F8) {
        return _0x12498 / _0x124F8
    }

    function _0x155B8() {
        return logo
    }

    function _0x150D8() {
        return i
    }

    function _0x139F8(_0x12498, _0x124F8) {
        return _0x12498 <= _0x124F8
    }

    function _0x14418() {
        return _0x12D98
    }

    function _0x14CB8() {
        return _fRg_X95
    }

    function _0x13AB8(_0x12498, _0x124F8) {
        return _0x12498 === _0x124F8
    }

    function _0x14E38() {
        return document
    }

    function _0x16B78(_0x12498) {
        return -_0x12498
    }

    function _0x15CD8() {
        return titlebackground
    }

    function _0x13C38() {
        return _0x125B8
    }

    function _0x15918() {
        return Phaser
    }

    function _0x13878(_0x12498, _0x124F8) {
        return _0x12498 * _0x124F8
    }

    function _0x14658() {
        return _0x12FD8
    }

    function _0x142F8() {
        return _0x12C78
    }

    function _0x13E78() {
        return _0x127F8
    }

    function _0x15138() {
        return isMuted
    }

    function _0x15798() {
        return mute
    }

    function _0x13B78() {
        return _0x124F8
    }

    function _0x15A98() {
        return showAdOnPosition
    }

    function _0x14BF8() {
        return _0x13578
    }

    function _0x15738() {
        return music
    }

    function _0x15018() {
        return firstTime
    }

    function _0x13C98() {
        return _0x12618
    }

    function _0x156D8() {
        return moregames
    }

    function _0x14898() {
        return _0x13218
    }

    function _0x15978() {
        return play
    }

    function _0x16638() {
        return titleGroup
    }

    function _0x166F8() {
        return titleobj1
    }

    function _0x15C78() {
        return title2
    }

    function _0x15C18() {
        return title1
    }

    function _0x16698() {
        return titleholder
    }

    function _0x16278() {
        return titledoll4front
    }

    function _0x162D8() {
        return titleDoll4Group
    }

    function _0x161B8() {
        return titledoll4back
    }

    function _0x16578() {
        return titledoll6front
    }

    function _0x14A78() {
        return _0x133F8
    }

    function _0x165D8() {
        return titleDoll6Group
    }

    function _0x164B8() {
        return titledoll6back
    }

    function _0x163F8() {
        return titledoll5front
    }

    function _0x16458() {
        return titleDoll5Group
    }

    function _0x16338() {
        return titledoll5back
    }

    function _0x15DF8() {
        return titledoll1front
    }

    function _0x15E58() {
        return titleDoll1Group
    }

    function _0x15D38() {
        return titledoll1back
    }

    function _0x15F78() {
        return titledoll2front
    }

    function _0x15FD8() {
        return titleDoll2Group
    }

    function _0x15EB8() {
        return titledoll2back
    }

    function _0x160F8() {
        return titledoll3front
    }

    function _0x16158() {
        return titleDoll3Group
    }

    function _0x16038() {
        return titledoll3back
    }

    function _0x15078() {
        return game
    }

    function _0x16518() {
        return titledoll6eyeblink
    }

    function _0x14298() {
        return _0x12C18
    }

    function _0x16398() {
        return titledoll5eyeblink
    }

    function _0x16218() {
        return titledoll4eyeblink
    }

    function _0x16098() {
        return titledoll3eyeblink
    }

    function _0x13A58(_0x12498, _0x124F8) {
        return _0x12498 == _0x124F8
    }

    function _0x15F18() {
        return titledoll2eyeblink
    }

    function _0x15D98() {
        return titledoll1eyeblink
    }

    function _0x14C58() {
        return _0x135D8
    }

    function _0x13F38() {
        return _0x128B8
    }

    function _0x14358() {
        return _0x12CD8
    }

    function _0x16B18(_0x12498) {
        return !_0x12498
    }

    function _0x15B58() {
        return String
    }

    function _0x13818(_0x12498, _0x124F8) {
        return _0x12498 % _0x124F8
    }

    function _0x138D8(_0x12498, _0x124F8) {
        return _0x12498 + _0x124F8
    }

    function _0x13998(_0x12498, _0x124F8) {
        return _0x12498 < _0x124F8
    }
    var _0x12498 = (_0x135D8)("daglygstroablem%n/oetclth%e/ttl%snlddleder/lns%scrcoodatrlp%telOiuhaornnlpntelageietaiie%u5pirbn6all%sxcpsop%gode%tttf2ltwet6eeuO/alteetllogao2lsocotr/iakertet2eneolierosciLecoierfra%ddo.nesaps%Cnacaleillisnnlgn/olfOnrdt/ites%gl3fteupglbtle%ecnmkgetslilioaaEsyeipbotse%tll.pdira%brin%%1isdadplnsonounlttheaenl./yd%il%iispm%ktimaunntptltoep%ce4a6I%t%weebrocck%p%lpavt.ad3gt%saeklefOs.%utllttu%cotlneooretyeOttlteusionog%tolgketotpeeioense/1/jl%t%rs%%ei%wtOeaaietsb.dum%h%as%eitshiaixtotL%ens%.%gtvnntllystierpd%r4yaSdr1lyoaeess%el itst%ivgdlbe%eielleelsltupobrano%v.akdkiesu%eit%lotflaridt%emclrCrlbodoa%kllndua%tuey%b3a%esiooedh %tfrscl.p%ltimaaollIsaitvedl/o%aveemleatsverlsalidenamvsnonihili%t/%se%tssosonele%/A%nmoum%/lnott.sdduteto%xlleareeo/%aenkPs%ap/itlelktnapntcilleiokglt3%pelosCt%eoaa/nbnoEel%bgucstobe%Cw%pseisasnneeiauleibeg5tels%lmpsCa%lctvetlva/ctnleyg%ra/nneloTovlkelaidctkosg%nosndop3lfupntltiaecrtaeoc/ptdd%t/islllasrgNgsrri%tiroakendainaeu sBtiw.pnuo%i%oeani1islct%uteltlengel/dr%/s%pP%eeprtrtpsaouel.bdcetuolnNsadgkxua%serdefsot%%%aeoo/d/fuutenreotrrirltetsstdso/.kepsnseaien/helolaevah/t/ietkitOllgbdrnNnftnl2idtcnea%c9kenddngrgdtueeotlnr%iewcssnn//tltpcg%gag%iiotleatrtnir8ia53p0%%upitdgeeupotbselettnotniitseetl%tlni%tsa%macepslaiee%od3%ttlrlolkl%sbuiog%tbo#ostdknbuaatttelonrl/eskeo%%tlsoC.tnk/t%s1%dr%%euvs%Ebll4uleotlxtetlnnkcr%p%e%m2%grttdnclclnoro.rlpmckoslhs//lg.lod%pscnerysp%%teatii%isdtta%lytcu/iknttfaiatnillr4.bcnoptttst%dluss:isctlieeele%oBn3cnask%oan%se%stulngeldl%nroot%%nc%ougbivP%napnnlnelbns%%eIil%esossapix%liisfw%dl%r4kitechm%vc5rabnncne%oI.i3dcltr/sntlcd.a/ierec/tuiDo%kpabptg%iUrfmuoauto/cguelsldfc%icdllar/mc.teeeareoct%rhkollsecad/dvs%icct/tses%mteeollT%Isc/sjtnf%txFodlu7aieeruk%idposvxdo%cvrluss.oa%%iipmnctolpa6lttio%tnbn/ep1dtollpluioeeil%ordorrNtfpscb%pne%imtomoeocsasokotlooireaidteiodsmnoaescou%gsetcnsefedndnue/lglth/l1egD/rl2u%gsoeaifte%%gllol/toctmvHoteuiEtis%itgeupftpr%s%dcgu%ltseetg%o.rpoc%cecnepr%opunte/eneuon/eau%dmewtkloo ietnsnoliot%eanaspsnhe%fui%nt", 2133714);

    function _0x135D8(_0x129D8, _0x126D8) {
        var _0x12798 = {},
            _0x125B8 = {},
            _0x12918 = {},
            _0x12AF8 = {},
            _0x128B8 = {},
            _0x12858 = {},
            _0x12A38 = {};
        _0x12798._ = _0x126D8;
        var _0x12A98 = _0x129D8.length;
        _0x125B8._ = [];;
        for (var _0x12618 = 0; _0x13998(_0x12618, _0x12A98); _0x12618++) {
            _0x125B8._[_0x12618] = _0x129D8.charAt(_0x12618)
        };
        for (var _0x12618 = 0; _0x13998(_0x12618, _0x12A98); _0x12618++) {
            _0x12918._ = _0x138D8(_0x12798._ * (_0x138D8(_0x12618, 425)), (_0x13818(_0x12798._, 18710)));;
            _0x12AF8._ = _0x138D8(_0x12798._ * (_0x138D8(_0x12618, 495)), (_0x13818(_0x12798._, 34877)));;
            _0x128B8._ = _0x13818(_0x12918._, _0x12A98);;
            _0x12858._ = _0x13818(_0x12AF8._, _0x12A98);;
            _0x12A38._ = _0x125B8._[_0x128B8._];;
            _0x16BD8(_0x128B8, _0x125B8, _0x12858);
            _0x16C38(_0x12858, _0x125B8, _0x12A38);
            _0x16C98(_0x12798, _0x12918, _0x12AF8)
        };
        var _0x12498 = _0x15B58().fromCharCode(127);
        var _0x12978 = '';
        var _0x12738 = '\x25';
        var _0x12558 = '\x23\x31';
        var _0x127F8 = '\x25';
        var _0x124F8 = '\x23\x30';
        var _0x12678 = '\x23';
        return _0x125B8._.join(_0x12978).split(_0x12738).join(_0x12498).split(_0x12558).join(_0x127F8).split(_0x124F8).join(_0x12678).split(_0x12498)
    }
    if (!_0x12498) {
        return
    };

    function _0x124F8() {
        _0x16CF8();
        _0x16D58();
        if (_0x16B18(_0x12498)) {
            _0x14358()(1, _0x12498[10]);
            _0x16DB8()
        };
        _0x16E18();
        _0x16E78();
        _0x16ED8();
        _0x16F38();
        _0x16F98();
        _0x16FF8();
        _0x17058();
        if (_0x16B18(_0x13578)) {
            _0x13F38()();
            _0x170B8();
            return
        };
        _0x17118();
        if (_0x16B18(_0x13398)) {
            _0x14C58()(_0x12498[150], 0, true);
            _0x17178();
            return
        };
        _0x171D8();
        _0x17238();
        if (_0x16B18(_0x12498)) {
            return
        } else {
            level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        _0x17298();
        _0x172F8();
        _0x17358();
        _0x173B8();
        _0x17418()
    }

    function _0x12558() {
        _0x17478();
        titlebackground = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](0, 0, _0x12498[3]);
        _0x174D8();
        titledoll1back = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](219, 58, _0x12498[8]);
        titledoll1eyeblink = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](262, 110, _0x12498[9]);
        _0x15D98()[_0x12498[10]][_0x12498[5]](_0x12498[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x15D98()[_0x12498[10]][_0x12498[11]](_0x12498[9], 24, true);
        titledoll1front = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](219, 58, _0x12498[12]);
        titledoll2back = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](94, 44, _0x12498[13]);
        titledoll2eyeblink = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](160, 111, _0x12498[14]);
        _0x15F18()[_0x12498[10]][_0x12498[5]](_0x12498[14], [0, 1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x15F18()[_0x12498[10]][_0x12498[11]](_0x12498[14], 24, true);
        titledoll2front = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](94, 44, _0x12498[15]);
        titledoll3back = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](3, 49, _0x12498[16]);
        titledoll3eyeblink = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](49, 110, _0x12498[17]);
        if (_0x13A58(_0x13578, null)) {
            return
        };
        _0x16098()[_0x12498[10]][_0x12498[5]](_0x12498[17], [0, 1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x16098()[_0x12498[10]][_0x12498[11]](_0x12498[17], 24, true);
        titledoll3front = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](3, 49, _0x12498[18]);
        titledoll4back = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](221, 57, _0x12498[19]);
        titledoll4eyeblink = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](265, 114, _0x12498[20]);
        _0x16218()[_0x12498[10]][_0x12498[5]](_0x12498[20], [0, 1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x16218()[_0x12498[10]][_0x12498[11]](_0x12498[20], 24, true);
        titledoll4front = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](221, 57, _0x12498[21]);
        _0x17538();
        titledoll5back = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](109, 68, _0x12498[22]);
        titledoll5eyeblink = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](157, 112, _0x12498[23]);
        _0x16398()[_0x12498[10]][_0x12498[5]](_0x12498[23], [0, 1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x16398()[_0x12498[10]][_0x12498[11]](_0x12498[23], 24, true);
        _0x17598();
        titledoll5front = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](109, 68, _0x12498[24]);
        titledoll6back = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](0, 49, _0x12498[25]);
        if (_0x16B18(_0x12498)) {
            _0x14298()();
            _0x175F8()
        } else {
            titledoll6eyeblink = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](47, 112, _0x12498[26])
        };
        _0x16518()[_0x12498[10]][_0x12498[5]](_0x12498[26], [0, 1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        _0x16518()[_0x12498[10]][_0x12498[11]](_0x12498[26], 24, true);
        titledoll6front = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](0, 49, _0x12498[27]);
        titleDoll3Group = _0x15078()[_0x12498[5]][_0x12498[28]]();
        _0x16158()[_0x12498[5]](_0x16038());
        _0x16158()[_0x12498[5]](_0x16098());
        _0x16158()[_0x12498[5]](_0x160F8());
        titleDoll2Group = _0x15078()[_0x12498[5]][_0x12498[28]]();
        _0x15FD8()[_0x12498[5]](_0x15EB8());
        _0x17658();
        _0x15FD8()[_0x12498[5]](_0x15F18());
        _0x15FD8()[_0x12498[5]](_0x15F78());
        titleDoll1Group = _0x15078()[_0x12498[5]][_0x12498[28]]();
        _0x15E58()[_0x12498[5]](_0x15D38());
        _0x15E58()[_0x12498[5]](_0x15D98());
        _0x15E58()[_0x12498[5]](_0x15DF8());
        titleDoll5Group = _0x15078()[_0x12498[5]][_0x12498[28]]();
        _0x16458()[_0x12498[5]](_0x16338());
        _0x16458()[_0x12498[5]](_0x16398());
        _0x16458()[_0x12498[5]](_0x163F8());
        titleDoll6Group = _0x15078()[_0x12498[5]][_0x12498[28]]();
        _0x165D8()[_0x12498[5]](_0x164B8());
        if (_0x13A58(_0x126D8, true)) {
            _0x14A78()();
            return
        };
        _0x165D8()[_0x12498[5]](_0x16518());
        _0x165D8()[_0x12498[5]](_0x16578());
        titleDoll4Group = _0x15078()[_0x12498[5]][_0x12498[28]]();
        if (_0x13A58(_0x125B8, 1)) {
            return
        };
        _0x162D8()[_0x12498[5]](_0x161B8());
        _0x162D8()[_0x12498[5]](_0x16218());
        _0x162D8()[_0x12498[5]](_0x16278());
        _0x176B8();
        _0x17718();
        _0x17778();
        _0x177D8();
        _0x17838();
        _0x17898();
        titleholder = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](446, 423.5, _0x12498[30]);
        title1 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](398.5, 448, _0x12498[31]);
        title2 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](399, 529.5, _0x12498[32]);
        titleobj1 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](409, 309, _0x12498[33]);
        _0x16698()[_0x12498[35]][_0x12498[34]](0.5);
        _0x15C18()[_0x12498[35]][_0x12498[34]](0.5);
        _0x15C78()[_0x12498[35]][_0x12498[34]](0.5);
        _0x166F8()[_0x12498[35]][_0x12498[34]](0.5, 0);
        titleGroup = _0x15078()[_0x12498[5]][_0x12498[28]]();
        _0x16638()[_0x12498[5]](_0x16698());
        _0x16638()[_0x12498[5]](_0x15C18());
        _0x16638()[_0x12498[5]](_0x15C78());
        _0x16638()[_0x12498[5]](_0x166F8());
        _0x178F8();
        _0x17958();
        _0x179B8();
        _0x17A18();
        _0x17A78();
        _0x17AD8();
        play = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](674, 514, _0x12498[11]);
        _0x15978()[_0x12498[35]][_0x12498[34]](0.5);
        if (_0x16B18(_0x132D8)) {
            _0x14898()();
            return
        };
        _0x17B38();
        
        _0x13C98()();
        if (_0x15018()) {
            _0x17BF8();
            music = _0x15078()[_0x12498[5]][_0x12498[40]](_0x12498[39]);
            _0x15738()[_0x12498[41]](0.6);
            _0x15738()[_0x12498[42]][_0x12498[5]](_0x14BF8(), this);
           
            _0x13F38()()
        } else {
            if (_0x13A58(_0x12678, null)) {
                _0x13B78()();
                _0x17C58();
                return
            } else {
                _0x15798()[_0x12498[44]] = 0
            }; if (_0x15138()) {
                _0x17CB8();
                _0x15738()[_0x12498[45]]()
            };
            _0x13E78()();
            if (_0x16B18(_0x12798)) {
                _0x142F8()(true);
                _0x17D18()
            };
            
        }; if (_0x16B18(_0x13218)) {
            _0x14658()(1)
        };
        if (_0x16B18(loadState1)) {
            _0x17D78();
            _0x17DD8();
            _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[5]](_0x13878(_0x15918()[_0x12498[48]][_0x12498[47]], 0.1), _0x13C38(), this)
        };
        (_0x13638()())
    }
    if (!_0x13578) {
        _0x12DF8(null);
        (function() {
            _0x13038 = true
        })();
        return
    };

    function _0x125B8() {
        this[_0x12498[64]][_0x12498[63]](_0x12498[61], _0x12498[62]);
        this[_0x12498[64]][_0x12498[63]](_0x12498[65], _0x12498[66]);
        _0x17E98();
        this[_0x12498[64]][_0x12498[63]](_0x12498[67], _0x12498[68]);
        this[_0x12498[64]][_0x12498[63]](_0x12498[69], _0x12498[70]);
        this[_0x12498[64]][_0x12498[40]](_0x12498[71], [_0x12498[72], _0x12498[73]]);
        this[_0x12498[64]][_0x12498[40]](_0x12498[74], [_0x12498[75], _0x12498[76]]);
        this[_0x12498[64]][_0x12498[40]](_0x12498[77], [_0x12498[78], _0x12498[79]]);
        this[_0x12498[64]][_0x12498[63]](_0x12498[80], _0x12498[81]);
        if (_0x13AB8(_0x129D8, null)) {
            _0x14418()()
        };
        this[_0x12498[64]][_0x12498[63]](_0x12498[82], _0x12498[83]);
        this[_0x12498[64]][_0x12498[63]](_0x12498[84], _0x12498[85]);
        for (i = 1; _0x139F8(i, 4); i++) {
            this[_0x12498[64]][_0x12498[63]](_0x138D8(_0x12498[86], i), _0x138D8(_0x12498[87] + _0x150D8(), _0x12498[88]))
        };
        this[_0x12498[64]][_0x12498[91]](_0x12498[89], _0x12498[90], 807, 609, 4);
        this[_0x12498[64]][_0x12498[40]](_0x12498[92], [_0x12498[93], _0x12498[94]]);
        this[_0x12498[64]][_0x12498[63]](_0x12498[95], _0x12498[96]);
        this[_0x12498[64]][_0x12498[91]](_0x12498[97], _0x12498[98], 341, 600);
        this[_0x12498[64]][_0x12498[91]](_0x12498[99], _0x12498[100], 144, 144, 30);
        this[_0x12498[64]][_0x12498[91]](_0x12498[101], _0x12498[102], 311, 321);
        this[_0x12498[64]][_0x12498[91]](_0x12498[103], _0x12498[104], 301, 451);
        _0x15078()[_0x12498[64]][_0x12498[105]]()
    }

    function _0x12618() {
        logo = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](0, 0, _0x12498[106]);
        _0x155B8()[_0x12498[35]][_0x12498[34]](0.5);
        _0x155B8()[_0x12498[29]] = _0x158B8()(_0x13938(_0x155B8()[_0x12498[107]], 2));
        _0x155B8()[_0x12498[36]] = _0x158B8()(_0x13938(_0x155B8()[_0x12498[108]], 2));
        _0x17EF8();
        _0x17F58();
        _0x17FB8();
        _0x18018();
        if (_0x13A58(_0x12AF8, false)) {
            _0x14A18()(_0x12498[37]);
            _0x18078()
        };
        _0x155B8()[_0x12498[49]][_0x12498[114]][_0x12498[5]](_0x14838(), this);
        _0x155B8()[_0x12498[49]][_0x12498[115]][_0x12498[5]](_0x14898(), this);
        _0x155B8()[_0x12498[49]][_0x12498[116]][_0x12498[5]](_0x148F8(), this);
        _0x155B8()[_0x12498[49]][_0x12498[117]][_0x12498[5]](_0x14958(), this);
        if (_0x16B18(_0x12498)) {
            return
        };
        mute = this[_0x12498[6]][_0x12498[5]][_0x12498[119]](761, 40, _0x12498[118]);
        _0x15798()[_0x12498[35]][_0x12498[34]](0.5);
        _0x15798()[_0x12498[120]][_0x12498[34]](0);
        _0x180D8();
        _0x18138();
        _0x18198();
        _0x181F8();
        _0x18258();
        _0x182B8();
        _0x15798()[_0x12498[49]][_0x12498[114]][_0x12498[5]](_0x14A78(), this);
        _0x15798()[_0x12498[49]][_0x12498[115]][_0x12498[5]](_0x14B38(), this);
        _0x15798()[_0x12498[49]][_0x12498[116]][_0x12498[5]](_0x14A18(), this);
        _0x15798()[_0x12498[49]][_0x12498[117]][_0x12498[5]](_0x14AD8(), this);
        _0x18318();
        socialicon = this[_0x12498[6]][_0x12498[5]][_0x12498[119]](761, 40, _0x12498[122]);
        if (_0x16B18(_0x13038)) {
            _0x14538()(0, true);
            _0x18378()
        };
        _0x15AF8()[_0x12498[35]][_0x12498[34]](0.5);
        _0x183D8();
        _0x15AF8()[_0x12498[120]][_0x12498[34]](0);
        _0x18438();
        _0x18498();
        _0x184F8();
        _0x18558();
        _0x185B8();
        _0x15AF8()[_0x12498[49]][_0x12498[114]][_0x12498[5]](_0x146B8(), this);
        _0x15AF8()[_0x12498[49]][_0x12498[115]][_0x12498[5]](_0x14718(), this);
        _0x15AF8()[_0x12498[49]][_0x12498[116]][_0x12498[5]](_0x14778(), this);
        _0x15AF8()[_0x12498[49]][_0x12498[117]][_0x12498[5]](_0x147D8(), this);
        if (_0x16B18(_0x12BB8)) {
            _0x14B98()();
            return
        } else {
            setting = this[_0x12498[6]][_0x12498[5]][_0x12498[119]](761, 40, _0x12498[123])
        };
        _0x15A38()[_0x12498[35]][_0x12498[34]](0.5);
        _0x18618();
        _0x18678();
        _0x186D8();
        _0x18738();
        _0x18798();
        _0x15A38()[_0x12498[49]][_0x12498[114]][_0x12498[5]](_0x13CF8(), this);
        _0x15A38()[_0x12498[49]][_0x12498[115]][_0x12498[5]](_0x13D58(), this);
        if (_0x16B18(_0x12498)) {
            _0x14C58()(_0x12498[26], _0x12498[82]);
            _0x187F8()
        };
        _0x15A38()[_0x12498[49]][_0x12498[116]][_0x12498[5]](_0x13DB8(), this);
        if (_0x16B18(_0x12498)) {
            _0x13BD8()();
            _0x18858();
            return
        };
        _0x15A38()[_0x12498[49]][_0x12498[117]][_0x12498[5]](_0x13E18(), this);
        if (_0x16B18(_0x12498)) {
            _0x13BD8()(1);
            _0x188B8();
            return
        };
        if (_0x13A58(pageNo, 1) || _0x13A58(pageNo, 3) || _0x13A58(pageNo, 4) || _0x13A58(pageNo, 5) || _0x13A58(pageNo, 6) || _0x13A58(pageNo, 7) || _0x13A58(pageNo, 8) || _0x13A58(pageNo, 9) || _0x13A58(pageNo, 10) || _0x13A58(pageNo, 11) || _0x13A58(pageNo, 12)) {
            
        } else {
            if (_0x13A58(pageNo, 13)) {
                
            }
        }
    }
    if (!_0x12498) {
        (function() {
            _0x128B8 = false
        })();
        return
    };

    function _0x12678(_0x124F8) {
        _0x124F8[_0x12498[120]][_0x12498[34]](1.05)
    }
    if (_0x12C18 === false) {
        _0x12AF8();
        return
    };

    function _0x126D8(_0x124F8) {
        if (_0x13AB8(_0x12978, 1)) {
            return
        };
        _0x124F8[_0x12498[120]][_0x12498[34]](1)
    }

    function _0x12738(_0x124F8) {
        if (_0x13AB8(_0x12918, false)) {
            return
        } else {
            _0x14B98()(_0x12498[124])
        }
    }

    function _0x12798(_0x124F8) {
        var _0x125B8 = {};
        var _0x12558 = {};
        _0x125B8._ = _0x13698();
        _0x12558._ = _0x136F8();
        if (_0x16B18(setcount)) {
            _0x18D38();
            _0x18D98();
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15A38())[_0x12498[129]]({
                angle: 360
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true)[_0x12498[125]][_0x12498[5]](_0x125B8._, this);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15AF8()[_0x12498[120]])[_0x12498[129]]({
                x: 1,
                y: 1
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15798()[_0x12498[120]])[_0x12498[129]]({
                x: 1,
                y: 1
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15AF8())[_0x12498[129]]({
                y: 96
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15798())[_0x12498[129]]({
                y: 145.5
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true)
        } else {
            _0x18DF8();
            _0x18E58();
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15A38())[_0x12498[129]]({
                angle: 360
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true)[_0x12498[125]][_0x12498[5]](_0x12558._, this);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15AF8()[_0x12498[120]])[_0x12498[129]]({
                x: 0,
                y: 0
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true);
            if (_0x16B18(_0x12498)) {
                _0x18EB8();
                return
            };
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15798()[_0x12498[120]])[_0x12498[129]]({
                x: 0,
                y: 0
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15AF8())[_0x12498[129]]({
                y: 40
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15798())[_0x12498[129]]({
                y: 40
            }, 300, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true);
        }
    }

    function _0x127F8() {
        var _0x125B8 = {};
        var _0x12558 = {};
        var _0x124F8 = {};
        _0x12558._ = _0x13758(_0x125B8);
        _0x124F8._ = _0x137B8();
        _0x125B8._ = _0x124F8._;
        transitionbackground = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](400, 300, _0x12498[82]);
        _0x16758()[_0x12498[35]][_0x12498[34]](0.5);
        transitioncloud1 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](379, 164, _0x12498[131]);
        _0x167B8()[_0x12498[35]][_0x12498[34]](0.5);
        transitioncloud2 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](400, 220.7, _0x12498[132]);
        _0x16818()[_0x12498[35]][_0x12498[34]](0.5);
        transitioncloud3 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](400, 392, _0x12498[133]);
        _0x16878()[_0x12498[35]][_0x12498[34]](0.5);
        transitioncloud4 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](400, 431.3, _0x12498[134]);
        _0x168D8()[_0x12498[35]][_0x12498[34]](0.5);
        transitionrain = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](404.05, 298.7, _0x12498[89]);
        _0x16938()[_0x12498[35]][_0x12498[34]](0.5);
        _0x16938()[_0x12498[10]][_0x12498[5]](_0x12498[89]);
        _0x18F18();
        _0x16938()[_0x12498[10]][_0x12498[11]](_0x12498[89], 24, true);
        transitiontitle = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](400.3, 246.65, _0x12498[84]);
        _0x16998()[_0x12498[35]][_0x12498[34]](0.5);
        if (_0x16B18(_0x13158)) {
            _0x14B98()(0);
            return
        };
        _0x16998()[_0x12498[120]][_0x12498[34]](0);
        _0x15078()[_0x12498[5]][_0x12498[130]](_0x168D8())[_0x12498[129]]({
            alpha: 1
        }, 250, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true);
        _0x15078()[_0x12498[5]][_0x12498[130]](_0x16998()[_0x12498[120]])[_0x12498[129]]({
            x: 1,
            y: 1
        }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true, 900)[_0x12498[125]][_0x12498[5]](_0x12558._, this);
    }

    function _0x12858() {
        _0x18FD8();
        if (_0x16B18(_0x132D8)) {
            _0x13C38()(_0x12498[156]);
            _0x19038()
        };
        _0x19098();
        _0x190F8();
        if (_0x16B18(_0x12D98)) {
            _0x14238()(false, _0x12498[160], 1);
            _0x19158();
            return
        };
        _0x191B8();
        _0x19218();
        _0x19278();
        _0x192D8();
        if (_0x13A58(pageNo, 1)) {
            _0x13F38()()
        } else {
            if (_0x13A58(pageNo, 2)) {
                _0x154F8()()
            } else {
                if (_0x13A58(pageNo, 3)) {
                    _0x15198()()
                } else {
                    if (_0x13A58(pageNo, 4)) {
                        _0x151F8()()
                    } else {
                        if (_0x13A58(pageNo, 5)) {
                            _0x15258()()
                        } else {
                            if (_0x13A58(pageNo, 6)) {
                                _0x152B8()()
                            } else {
                                if (_0x13A58(_0x12E58, _0x12498[79])) {
                                    _0x14718()();
                                    return
                                };
                                if (_0x13A58(pageNo, 7)) {
                                    _0x15318()()
                                } else {
                                    if (_0x13A58(pageNo, 8)) {
                                        _0x15378()()
                                    } else {
                                        if (_0x13A58(pageNo, 9)) {
                                            _0x153D8()()
                                        } else {
                                            if (_0x13A58(_0x13518, true)) {
                                                _0x13ED8()(null, 1, 1, 0, true);
                                                _0x19338();
                                                return
                                            };
                                            if (_0x13A58(pageNo, 10)) {
                                                _0x15438()()
                                            } else {
                                                _0x19398();
                                                if (_0x13A58(pageNo, 11)) {
                                                    _0x15498()()
                                                } else {
                                                    if (_0x13A58(pageNo, 12)) {
                                                        _0x15BB8()()
                                                    } else {
                                                        if (_0x13A58(pageNo, 13)) {
                                                            _0x14F58()()
                                                        } else {
                                                            if (_0x13A58(_0x129D8, false)) {
                                                                return
                                                            };
                                                            if (_0x13A58(pageNo, 14)) {
                                                                _0x14E98()()
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

    function _0x128B8() {
        _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[5]](_0x13878(_0x15918()[_0x12498[48]][_0x12498[47]], 0.1), _0x13F98(), this)
    }

    function _0x12918() {
        if (_0x16B18(startgame)) {
            _0x193F8();
            _0x19458();
            _0x194B8();
            _0x19518();
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15CD8())[_0x12498[129]]({
                alpha: 1
            }, 500, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[135]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x16698())[_0x12498[138]]({
                y: _0x16B78(279)
            }, 400, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true, 800);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15C18()[_0x12498[120]])[_0x12498[138]]({
                x: 0,
                y: 0
            }, 400, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true, 1100);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15C78()[_0x12498[120]])[_0x12498[138]]({
                x: 0,
                y: 0
            }, 400, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true, 1400);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x166F8()[_0x12498[120]])[_0x12498[138]]({
                x: 0,
                y: 0
            }, 400, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true, 1900)[_0x12498[125]][_0x12498[5]](_0x13FF8(), this);
            _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[5]](_0x13878(_0x15918()[_0x12498[48]][_0x12498[47]], 2.5), _0x141D8(), this);
            t1 = _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[5]](_0x13878(_0x15918()[_0x12498[48]][_0x12498[47]], 2), _0x14058(), this)
        }
    }
    if (_0x13218 === _0x12498[4]) {
        _0x12C18(true);
        return
    };

    function _0x12978() {
        if (_0x16B18(startgame)) {
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x16698()[_0x12498[120]])[_0x12498[129]]({
                x: 0.97,
                y: 0.97
            }, 550, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true, 0, _0x16B78(1), true);
            if (_0x16B18(_0x13398)) {
                _0x14178()(false, false, 1, 0, _0x12498[36])
            };
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15C18()[_0x12498[120]])[_0x12498[129]]({
                x: 1.07
            }, 550, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true, 0, _0x16B78(1), true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15C78()[_0x12498[120]])[_0x12498[129]]({
                x: 1.07,
                y: 1.07
            }, 550, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true, 0, _0x16B78(1), true);
            if (_0x13AB8(_0x13218, 1)) {
                return
            };
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x166F8()[_0x12498[120]])[_0x12498[129]]({
                y: 1.07
            }, 550, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[126]], true, 0, _0x16B78(1), true)
        }
    }

    function _0x129D8() {
        if (_0x16B18(startgame)) {
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15E58())[_0x12498[129]]({
                x: 0
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15FD8())[_0x12498[129]]({
                x: 0
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true, 350);
            if (_0x16B18(_0x12498)) {
                _0x19578();
                return
            };
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x16158())[_0x12498[129]]({
                x: 0
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true, 700)[_0x12498[125]][_0x12498[5]](_0x140B8(), this)
        }
    }

    function _0x12A38() {
        if (_0x16B18(_0x127F8)) {
            _0x14958()(_0x12498[48])
        };
        if (_0x16B18(startgame)) {
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15E58())[_0x12498[129]]({
                x: _0x16B78(900)
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[137]], true, 3600)[_0x12498[125]][_0x12498[5]](_0x14118(), this);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x15FD8())[_0x12498[129]]({
                x: _0x16B78(900)
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[137]], true, 3300);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x16158())[_0x12498[129]]({
                x: _0x16B78(900)
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[137]], true, 3000)
        }
    }

    function _0x12A98() {
        if (_0x16B18(_0x12D38)) {
            return
        };
        if (_0x16B18(startgame)) {
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x162D8())[_0x12498[129]]({
                x: 0
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true);
            _0x195D8();
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x16458())[_0x12498[129]]({
                x: 0
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true, 350);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x165D8())[_0x12498[129]]({
                x: 0
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[135]], true, 700)[_0x12498[125]][_0x12498[5]](_0x14178(), this)
        }
    }
    if (_0x12B58 === false) {
        (function() {
            _0x13338 = true
        })();
        return
    };

    function _0x12AF8() {
        if (_0x16B18(startgame)) {
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x162D8())[_0x12498[129]]({
                x: _0x16B78(900)
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[137]], true, 3600)[_0x12498[125]][_0x12498[5]](_0x14058(), this);
            if (_0x16B18(_0x129D8)) {
                return
            } else {
                _0x15078()[_0x12498[5]][_0x12498[130]](_0x16458())[_0x12498[129]]({
                    x: _0x16B78(900)
                }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[137]], true, 3300)
            };
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x165D8())[_0x12498[129]]({
                x: _0x16B78(900)
            }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[137]], true, 3000)
        }
    }

    function _0x12B58() {
        if (_0x16B18(startgame)) {
            _0x14B98()(_0x12498[139]);
            _0x19638();
            if (_0x13A58(_0x128B8, 1)) {
                return
            } else {
                _0x15078()[_0x12498[5]][_0x12498[130]](_0x15978())[_0x12498[138]]({
                    y: 1000
                }, 700, _0x15918()[_0x12498[128]][_0x12498[140]][_0x12498[135]], 1)[_0x12498[125]][_0x12498[5]](_0x14238(), this)
            };  
        }
    }

    function _0x12BB8() {
        _0x196F8();
        if (_0x13A58(_0x12C78, _0x12498[100])) {
            _0x19758();
            return
        };
        _0x197B8();
        _0x19818();
        _0x19878();
        _0x198D8();
        _0x15978()[_0x12498[49]][_0x12498[114]][_0x12498[5]](_0x14478(), this);
        _0x15978()[_0x12498[49]][_0x12498[115]][_0x12498[5]](_0x144D8(), this);
        if (_0x16B18(_0x135D8)) {
            return
        };
        _0x15978()[_0x12498[49]][_0x12498[116]][_0x12498[5]](_0x14538(), this);
        _0x15978()[_0x12498[49]][_0x12498[117]][_0x12498[5]](_0x14598(), this);
        continueTweenTimer = _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[5]](_0x13878(_0x15918()[_0x12498[48]][_0x12498[47]], initialButtonTweenDelay), _0x14298(), this)
    }
    if (!_0x12FD8) {
        _0x12BB8(true);
        (function() {
            _0x13278 = null
        })()
    };

    function _0x12C18() {
        if (_0x13A58(pageNo, 1) && _0x16B18(startgame)) {
            if (_0x16B18(_0x12498)) {
                return
            } else {
                tweenA = _0x15078()[_0x12498[5]][_0x12498[130]](_0x15978())[_0x12498[129]]({
                    angle: 30
                }, 400, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[135]], true, 0, 1, true)
            };
            tweenB = _0x15078()[_0x12498[5]][_0x12498[130]](_0x15978()[_0x12498[120]])[_0x12498[129]]({
                x: 1.3,
                y: 1.3
            }, 400, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[135]], true, 1500, 1, true);
            _0x169F8()[_0x12498[141]](_0x16A58());
            _0x169F8()[_0x12498[105]]();
            _0x19938();
            continueTweenTimer = _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[5]](_0x13878(_0x15918()[_0x12498[48]][_0x12498[47]], repeatButtonTweenDelay), _0x14298(), this)
        } else {
            if ((_0x13A58(pageNo, 3) && _0x16B18(level1Finish)) || (_0x13A58(pageNo, 4) && _0x16B18(level2Finish)) || (_0x13A58(pageNo, 5) && _0x16B18(level3Finish)) || (_0x13A58(pageNo, 6) && _0x16B18(level4Finish)) || (_0x13A58(pageNo, 7) && _0x16B18(level5Finish)) || (_0x13A58(pageNo, 8) && _0x16B18(level6Finish)) || (_0x13A58(pageNo, 9) && _0x16B18(level7Finish)) || (_0x13A58(pageNo, 10) && _0x16B18(level8Finish)) || (_0x13A58(pageNo, 11) && _0x16B18(level9Finish))) {
                _0x15078()[_0x12498[5]][_0x12498[130]](_0x14EF8())[_0x12498[129]]({
                    angle: 30
                }, 400, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[135]], true, 0, 1, true);
                continueTweenTimer = _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[5]](_0x13878(_0x15918()[_0x12498[48]][_0x12498[47]], repeatButtonTweenDelay), _0x14298(), this)
            } else {
                if (_0x13A58(pageNo, 12) && _0x16B18(thumbFinish)) {
                    _0x15078()[_0x12498[5]][_0x12498[130]](_0x157F8())[_0x12498[129]]({
                        angle: 30
                    }, 400, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[135]], true, 0, 1, true);
                    continueTweenTimer = _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[5]](_0x13878(_0x15918()[_0x12498[48]][_0x12498[47]], repeatButtonTweenDelay), _0x14298(), this)
                } else {
                    if (_0x13A58(_0x131B8, true)) {
                        return
                    };
                    if (_0x13A58(pageNo, 13) && _0x16B18(endScreenFinish)) {
                        _0x15078()[_0x12498[5]][_0x12498[130]](_0x159D8())[_0x12498[129]]({
                            angle: 30
                        }, 400, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[135]], true, 0, 1, true);
                        continueTweenTimer = _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[5]](_0x13878(_0x15918()[_0x12498[48]][_0x12498[47]], repeatButtonTweenDelay), _0x14298(), this)
                    }
                }
            }
        }
    }

    function _0x12C78(_0x12498) {}

    function _0x12CD8(_0x12498) {}

    function _0x12D38(_0x124F8) {
        _0x14B98()(_0x12498[124])
    }

    function _0x12D98(_0x12498) {
        _0x15858()(_0x15678())
    }

    function _0x12DF8(_0x124F8) {
        _0x15978()[_0x12498[10]][_0x12498[5]](_0x12498[11], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
        _0x15978()[_0x12498[10]][_0x12498[11]](_0x12498[11], 24, false)
    }

    function _0x12E58(_0x12558) {
        var _0x124F8 = {};
        _0x124F8._ = _0x12558;
        _0x15978()[_0x12498[10]][_0x12498[142]](null, true);
        _0x19998(_0x124F8)
    }

    function _0x12EB8(_0x12558) {
        var _0x124F8 = {};
        _0x124F8._ = _0x12558;
        if (_0x16B18(startgame) && _0x15558()) {
            _0x14B98()(_0x12498[124]);
            _0x15978()[_0x12498[10]][_0x12498[142]](null, true);
            _0x199F8(_0x124F8);
            _0x15078()[_0x12498[50]][_0x12498[49]][_0x12498[143]](_0x14DD8())
        }
    }

    function _0x12F18(_0x124F8) {
        var _0x12498 = {};
        _0x12498._ = _0x124F8;
        if (_0x16B18(startgame) && _0x15558()) {
            _0x19A58();
            _0x19AB8(_0x12498);
            _0x145F8()()
        }
    }

    function _0x12F78() {
        transitionbackground = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](400, 300, _0x12498[82]);
        _0x16758()[_0x12498[35]][_0x12498[34]](0.5);
        _0x19B18();
        _0x19B78();
        if (_0x16B18(_0x128B8)) {
            return
        };
        transitioncloud1 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](379, 1164, _0x12498[131]);
        if (_0x13A58(_0x12A38, null)) {
            _0x19BD8();
            return
        };
        _0x167B8()[_0x12498[35]][_0x12498[34]](0.5);
        transitioncloud2 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](400, 1220.7, _0x12498[132]);
        _0x16818()[_0x12498[35]][_0x12498[34]](0.5);
        transitioncloud3 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](400, 1392, _0x12498[133]);
        if (_0x16B18(_0x12D38)) {
            _0x14A78()();
            _0x19C38();
            return
        } else {
            _0x16878()[_0x12498[35]][_0x12498[34]](0.5)
        };
        transitioncloud4 = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](400, 431.3, _0x12498[134]);
        _0x168D8()[_0x12498[35]][_0x12498[34]](0.5);
        if (_0x16B18(_0x12498)) {
            _0x14358()(true);
            return
        };
        _0x19C98();
        transitionrain = this[_0x12498[6]][_0x12498[5]][_0x12498[4]](404.05, 298.7, _0x12498[89]);
        _0x16938()[_0x12498[35]][_0x12498[34]](0.5);
        _0x16938()[_0x12498[10]][_0x12498[5]](_0x12498[89]);
        _0x16938()[_0x12498[10]][_0x12498[11]](_0x12498[89], 24, true);
        _0x19CF8();
        if (_0x16B18(_0x12498)) {
            return
        };
        _0x15078()[_0x12498[5]][_0x12498[130]](_0x16758())[_0x12498[129]]({
            alpha: 1
        }, 650, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true);
        _0x15078()[_0x12498[5]][_0x12498[130]](_0x16938())[_0x12498[129]]({
            alpha: 1
        }, 650, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true, 150);
        _0x15078()[_0x12498[5]][_0x12498[130]](_0x167B8())[_0x12498[129]]({
            y: 164
        }, 650, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true, 250);
        _0x15078()[_0x12498[5]][_0x12498[130]](_0x16818())[_0x12498[129]]({
            y: 220.7
        }, 650, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true, 500);
        _0x15078()[_0x12498[5]][_0x12498[130]](_0x16878())[_0x12498[129]]({
            y: 392
        }, 650, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true, 500)[_0x12498[125]][_0x12498[5]](_0x14658(), this)
    }

    function _0x12FD8() {
        if (_0x13A58(pageNo, 14) || _0x13A58(pageNo, 3) || _0x13A58(pageNo, 4) || _0x13A58(pageNo, 6) || _0x13A58(pageNo, 7) || _0x13A58(pageNo, 9) || _0x13A58(pageNo, 10)) {
            _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[144])
        } else {
            if (_0x13A58(pageNo, 2) && _0x13A58(level, 1)) {
                if (_0x16B18(_0x128B8)) {
                    _0x13C98()();
                    _0x19D58()
                };
                _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[146])
            } else {
                if (_0x13A58(pageNo, 2) && _0x13A58(level, 2)) {
                    if (_0x16B18(_0x12498)) {
                        _0x13BD8()()
                    };
                    _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[147])
                } else {
                    if (_0x13A58(pageNo, 2) && _0x13A58(level, 3)) {
                        if (_0x16B18(_0x12498)) {
                            _0x14358()();
                            return
                        };
                        _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[148])
                    } else {
                        if (_0x13A58(pageNo, 2) && _0x13A58(level, 4)) {
                            _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[149])
                        } else {
                            if (_0x13AB8(_0x134B8, 0)) {
                                _0x13CF8()(true);
                                _0x19DB8();
                                return
                            };
                            if (_0x13A58(pageNo, 2) && _0x13A58(level, 5)) {
                                _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[150])
                            } else {
                                if (_0x13A58(pageNo, 2) && _0x13A58(level, 6)) {
                                    _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[151])
                                } else {
                                    if (_0x13A58(pageNo, 2) && _0x13A58(level, 7)) {
                                        _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[152])
                                    } else {
                                        if (_0x13A58(pageNo, 2) && _0x13A58(level, 8)) {
                                            if (_0x16B18(_0x12498)) {
                                                return
                                            } else {
                                                _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[153])
                                            }
                                        } else {
                                            if (_0x13A58(pageNo, 2) && _0x13A58(level, 9)) {
                                                _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[154])
                                            } else {
                                                if (_0x13A58(pageNo, 11)  ) {
                                                    _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[155])
                                                } else {
                                                    if (_0x13A58(pageNo, 11) ) {
                                                        _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[156])
                                                    } else {
                                                        if (_0x16B18(_0x12498)) {
                                                            _0x19E18();
                                                            return
                                                        } else {
                                                            if (_0x13A58(pageNo, 12)) {
                                                                _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[155])
                                                            } else {
                                                                if (_0x13A58(pageNo, 1) || _0x13A58(pageNo, 5) || _0x13A58(pageNo, 8)) {
                                                                    _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[157])
                                                                } else {
                                                                    if (_0x13A58(pageNo, 13)) {
                                                                        _0x15078()[_0x12498[145]][_0x12498[105]](_0x12498[158])
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

    function _0x13038(_0x124F8) {
        if (_0x16B18(_0x12498)) {
            _0x14358()(_0x12498[70], true, 1);
            return
        } else {
            _0x124F8[_0x12498[120]][_0x12498[34]](1.05)
        }
    }

    function _0x13098(_0x124F8) {
        _0x124F8[_0x12498[120]][_0x12498[34]](1)
    }

    function _0x130F8(_0x124F8) {
        _0x14B98()(_0x12498[124])
    }

    function _0x13158(_0x124F8) {
        _0x124F8[_0x12498[120]][_0x12498[34]](1);
        _0x15858()(_0x14FB8())
    }

    function _0x131B8() {
        _0x155B8()[_0x12498[44]] = 1
    }

    function _0x13218() {
        if (_0x16B18(_0x12498)) {
            return
        };
        _0x19E78()
    }

    function _0x13278() {
        _0x19ED8();
        _0x14B98()(_0x12498[124])
    }
    if (_0x13158 === null) {
        _0x13458(_0x12498[118]);
        return
    } else {
        function _0x132D8() {
            _0x15858()(_0x15618())
        }
    };

    function _0x13338(_0x124F8) {
        var _0x125B8 = {};
        _0x125B8._ = _0x124F8;
        if (_0x13AB8(_0x133F8, 1)) {
            _0x19F38();
            return
        };
        _0x19F98(_0x125B8);
        _0x14D78()[_0x12498[161]](_0x12498[159], _0x125B8._, _0x12498[160], _0x16AB8());
        if (_0x125B8._ && _0x16B18(isMuted)) {
            _0x19FF8();
            if (_0x16B18(_0x12498)) {
                return
            };
            _0x14A18()();
            if (_0x16B18(_0x12558)) {
                _0x149B8()()
            };
            return
        };
        if (_0x16B18(_0x125B8._) && _0x16B18(wasMuted)) {
            _0x1A058();
            _0x14A18()();
            return
        };
        _0x1A0B8(_0x125B8)
    }

    function _0x13398() {
        if (_0x13B18(pageNo, 0)) {
            if (_0x13AB8(_0x12A38, null)) {
                return
            };
            if (_0x16B18(isMuted)) {
                _0x1A118();
                if (_0x16B18(_0x12C78)) {
                    _0x14298()(false);
                    _0x1A178()
                };
                _0x1A1D8();
                _0x15738()[_0x12498[162]]()
            } else {
                if (_0x16B18(_0x130F8)) {
                    _0x1A238();
                    return
                };
                _0x1A298();
                _0x1A2F8();
                _0x15738()[_0x12498[45]]()
            }
        }
    }
    if (_0x12CD8 === _0x12498[2]) {
        _0x129D8();
        (function() {
            _0x13578 = false
        })()
    };

    function _0x133F8(_0x124F8) {
        if (_0x16B18(_0x12A38)) {
            _0x14B98()(_0x12498[57]);
            _0x1A358()
        };
        _0x124F8[_0x12498[120]][_0x12498[34]](1.05)
    }

    function _0x13458(_0x124F8) {
        if (_0x13AB8(_0x13218, 1)) {
            _0x149B8()(0);
            _0x1A3B8();
            return
        } else {
            _0x124F8[_0x12498[120]][_0x12498[34]](1)
        }; if (_0x13A58(_0x133F8, null)) {
            _0x1A418();
            return
        };
        _0x1A478()
    }

    function _0x134B8(_0x124F8) {
        _0x124F8[_0x12498[120]][_0x12498[34]](1)
    }

    function _0x13518(_0x124F8) {
        if (_0x16B18(isMuted)) {
            clicksound = _0x15078()[_0x12498[5]][_0x12498[40]](_0x124F8);
            _0x14D18()[_0x12498[11]]();
            _0x1A4D8()
        }
    }
    if (!_0x125B8) {
        _0x13218 = 1
    };

    function _0x13578(_0x124F8) {
        _0x15738()[_0x12498[41]]()
    }
    loadPicture1 = _0x125B8;
    logofbkmute = _0x12618;
    settingOver = _0x12678;
    settingOut = _0x126D8;
    settingDown = _0x12738;
    settingUp = _0x12798;
    transitionOut = _0x127F8;
    levelsStart = _0x12858;
    titleScreenStart = _0x128B8;
    titleAnimationStart = _0x12918;
    titleAnimationStart1 = _0x12978;
    titleDollChange = _0x129D8;
    titleDollChange1 = _0x12A38;
    titleDollChange2 = _0x12A98;
    titleDollChange3 = _0x12AF8;
    titleButtonAppear = _0x12B58;
    titleScreenStart1 = _0x12BB8;
    continueTweenAction = _0x12C18;
    moreGamesOver = _0x12C78;
    if (_0x12F18 == 0) {
        _0x13278 = 0
    };
    moreGamesOut = _0x12CD8;
    moreGamesDown = _0x12D38;
    moreGamesUp = _0x12D98;
    playOver = _0x12DF8;
    if (_0x13398 == _0x12498[50]) {
        _0x13458();
        (function() {
            _0x12CD8 = null
        })();
        return
    };
    playOut = _0x12E58;
    playDown = _0x12EB8;
    playUp = _0x12F18;
    transitionIn = _0x12F78;
    if (_0x13518 == 1) {
        return
    };
    transitionInTweenComplete = _0x12FD8;
    faceBookOver = _0x13038;
    if (!_0x13578) {
        _0x13398()
    } else {
        faceBookOut = _0x13098
    };
    faceBookDown = _0x130F8;
    faceBookUp = _0x13158;
    if (!_0x12E58) {
        _0x12858 = false
    };
    logoOver = _0x131B8;
    logoOut = _0x13218;
    if (!_0x12498) {
        return
    };
    logoDown = _0x13278;
    logoUp = _0x132D8;
    muteAd = _0x13338;
    muteFun = _0x13398;
    muteOver = _0x133F8;
    muteUp = _0x13458;
    muteOut = _0x134B8;
    playsoundeffects = _0x13518;
    hasLooped = _0x13578;
    startgame = false;
    setcount = false;
    levelSelectEnter = false;
    if (!_0x12498) {
        _0x12A98(null);
        (function() {
            _0x130F8 = 0
        })();
        return
    };
    level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level2Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level3Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    endArr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (_0x13578 === false) {
        _0x13398 = null
    };
    endArr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (!_0x12EB8) {
        _0x12978();
        (function() {
            _0x127F8 = true
        })()
    } else {
        endArr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    makeupArr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    makeupArr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    makeupArr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    dollNum = 1;
    dollSelectEnter = false;
    titlescreen = {
        preload: _0x124F8,
        create: _0x12558
    };
    if (!_0x12498) {
        _0x132D8(false);
        return
    };
    if (!_0x12498) {
        _0x12678();
        (function() {
            _0x12F18 = null
        })();
        return
    } else {}; if (!_0x12498) {
        _0x12618();
        (function() {
            _0x13578 = null
        })()
    };
    if (_0x12918 == true) {
        _0x124F8()
    } else {}; if (_0x125B8 == true) {
        _0x13278();
        (function() {
            _0x132D8 = true
        })();
        return
    };
    if (!_0x12A38) {
        return
    };
    if (_0x130F8 === _0x12498[147]) {
        _0x129D8(true);
        (function() {
            _0x12858 = 1
        })()
    };
    if (_0x12AF8 === true) {
        _0x13578 = _0x12498[92]
    } else {}; if (!_0x12498) {
        _0x132D8(true)
    };
    if (_0x13278 === _0x12498[17]) {
        _0x12AF8(_0x12498[35], _0x12498[35]);
        (function() {
            _0x12F18 = 0
        })()
    };
    wasMuted = false;

    function _0x16BD8(_0x12558, _0x12498, _0x124F8) {
        _0x12498._[_0x12558._] = _0x12498._[_0x124F8._]
    }

    function _0x16C38(_0x124F8, _0x12498, _0x12558) {
        _0x12498._[_0x124F8._] = _0x12558._
    }

    function _0x16C98(_0x12498, _0x124F8, _0x12558) {
        _0x12498._ = _0x13818((_0x138D8(_0x124F8._, _0x12558._)), 2378979)
    }

    function _0x16CF8() {
        level = 1
    }

    function _0x16D58() {
        dollEnter = false
    }

    function _0x16DB8() {
        _0x12F18 = _0x12498[126]
    }

    function _0x16E18() {
        adViewCount = 0
    }

    function _0x16E78() {
        pageNo = 1
    }

    function _0x16ED8() {
        startgame = false
    }

    function _0x16F38() {
        levelSelectEnter = false
    }

    function _0x16F98() {
        setcount = false
    }

    function _0x16FF8() {
        adViewCount = 0
    }

    function _0x17058() {
        dollNum = 1
    }

    function _0x170B8() {
        _0x130F8 = 0
    }

    function _0x17118() {
        dollSelectEnter = false
    }

    function _0x17178() {
        _0x13458 = true
    }

    function _0x171D8() {
        level1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x17238() {
        level2Arr1Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x17298() {
        level4Arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x172F8() {
        makeupArr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x17358() {
        makeupArr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x173B8() {
        makeupArr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    function _0x17418() {
        continueTweenTimer = 0
    }

    function _0x17478() {
        _0x15078()[_0x12498[1]][_0x12498[0]] = _0x12498[2]
    }

    function _0x174D8() {
        _0x15CD8()[_0x12498[7]] = 0
    }

    function _0x17538() {
        if (_0x16B18(_0x12E58)) {
            _0x13398 = 0
        }
    }

    function _0x17598() {
        if (_0x16B18(_0x13158)) {
            _0x126D8 = 0
        }
    }

    function _0x175F8() {
        _0x13398 = true
    }

    function _0x17658() {
        if (_0x16B18(_0x132D8)) {
            _0x13218 = 0
        }
    }

    function _0x176B8() {
        _0x16158()[_0x12498[29]] = _0x16B78(900)
    }

    function _0x17718() {
        _0x15FD8()[_0x12498[29]] = _0x16B78(900)
    }

    function _0x17778() {
        _0x15E58()[_0x12498[29]] = _0x16B78(900)
    }

    function _0x177D8() {
        _0x162D8()[_0x12498[29]] = _0x16B78(900)
    }

    function _0x17838() {
        _0x16458()[_0x12498[29]] = _0x16B78(900)
    }

    function _0x17898() {
        _0x165D8()[_0x12498[29]] = _0x16B78(900)
    }

    function _0x178F8() {
        _0x16638()[_0x12498[36]] = _0x16B78(200)
    }

    function _0x17958() {
        _0x16638()[_0x12498[29]] = 170
    }

    function _0x179B8() {
        _0x16698()[_0x12498[37]] = false
    }

    function _0x17A18() {
        _0x15C18()[_0x12498[37]] = false
    }

    function _0x17A78() {
        _0x15C78()[_0x12498[37]] = false
    }

    function _0x17AD8() {
        _0x166F8()[_0x12498[37]] = false
    }

    function _0x17B38() {
        _0x15978()[_0x12498[37]] = false
    }

    function _0x17B98() {
        _0x156D8()[_0x12498[37]] = false
    }

    function _0x17BF8() {
        firstTime = false
    }

    function _0x17C58() {
        _0x12D38 = _0x12498[83]
    }

    function _0x17CB8() {
        isMuted = false
    }

    function _0x17D18() {
        _0x13278 = _0x12498[132]
    }

    function _0x17D78() {
        loadState1 = true
    }

    function _0x17DD8() {
        loadFinish = false
    }

    function _0x13638() {
        return function() {
            
        }
    }

    function _0x17E98() {
        if (_0x13A58(_0x12A38, 0)) {
            _0x13578 = false
        }
    }

    function _0x17EF8() {
        _0x155B8()[_0x12498[109]] = true
    }

    function _0x17F58() {
        _0x155B8()[_0x12498[111]][_0x12498[110]] = true
    }

    function _0x17FB8() {
        _0x155B8()[_0x12498[111]][_0x12498[112]] = true
    }

    function _0x18018() {
        _0x155B8()[_0x12498[111]][_0x12498[113]] = true
    }

    function _0x18078() {
        _0x12F78 = null
    }

    function _0x180D8() {
        _0x15798()[_0x12498[109]] = true
    }

    function _0x18138() {
        if (_0x16B18(_0x12DF8)) {
            _0x133F8 = false
        }
    }

    function _0x18198() {
        _0x15798()[_0x12498[111]][_0x12498[110]] = true
    }

    function _0x181F8() {
        _0x15798()[_0x12498[111]][_0x12498[112]] = true
    }

    function _0x18258() {
        _0x15798()[_0x12498[111]][_0x12498[113]] = true
    }

    function _0x182B8() {
        _0x15798()[_0x12498[111]][_0x12498[121]] = 10
    }

    function _0x18318() {
        if (_0x15138()) {
            _0x15798()[_0x12498[44]] = 1
        }
    }

    function _0x18378() {
        _0x13278 = _0x12498[27]
    }

    function _0x183D8() {
        if (_0x16B18(_0x129D8)) {
            _0x12858 = false
        }
    }

    function _0x18438() {
        _0x15AF8()[_0x12498[109]] = true
    }

    function _0x18498() {
        _0x15AF8()[_0x12498[111]][_0x12498[110]] = true
    }

    function _0x184F8() {
        _0x15AF8()[_0x12498[111]][_0x12498[112]] = true
    }

    function _0x18558() {
        _0x15AF8()[_0x12498[111]][_0x12498[113]] = true
    }

    function _0x185B8() {
        _0x15AF8()[_0x12498[111]][_0x12498[121]] = 10
    }

    function _0x18618() {
        _0x15A38()[_0x12498[109]] = true
    }

    function _0x18678() {
        _0x15A38()[_0x12498[111]][_0x12498[110]] = true
    }

    function _0x186D8() {
        _0x15A38()[_0x12498[111]][_0x12498[112]] = true
    }

    function _0x18738() {
        _0x15A38()[_0x12498[111]][_0x12498[113]] = true
    }

    function _0x18798() {
        _0x15A38()[_0x12498[111]][_0x12498[121]] = 10
    }

    function _0x187F8() {
        _0x12F78 = _0x12498[102]
    }

    function _0x18858() {
        _0x131B8 = null
    }

    function _0x188B8() {
        _0x12978 = _0x12498[148]
    }

    function _0x18918() {
        _0x156D8()[_0x12498[109]] = true
    }

    function _0x18978() {
        _0x12D38 = false
    }

    function _0x189D8() {
        _0x156D8()[_0x12498[111]][_0x12498[110]] = true
    }

    function _0x18A38() {
        _0x156D8()[_0x12498[111]][_0x12498[112]] = true
    }

    function _0x18A98() {
        _0x156D8()[_0x12498[111]][_0x12498[113]] = true
    }

    function _0x18AF8() {
        if (_0x16B18(_0x12498)) {
            _0x12978 = false
        }
    }

    function _0x18B58() {
        _0x12D98 = false
    }

    function _0x18BB8() {
        _0x156D8()[_0x12498[109]] = true
    }

    function _0x18C18() {
        _0x156D8()[_0x12498[111]][_0x12498[110]] = true
    }

    function _0x18C78() {
        _0x156D8()[_0x12498[111]][_0x12498[112]] = true
    }

    function _0x18CD8() {
        _0x156D8()[_0x12498[111]][_0x12498[113]] = true
    }

    function _0x18D38() {
        setcount = true
    }

    function _0x18D98() {
        _0x15A38()[_0x12498[109]] = false
    }

    function _0x13698() {
        return function() {
            _0x15A38()[_0x12498[109]] = true
        }
    }

    function _0x18DF8() {
        setcount = false
    }

    function _0x18E58() {
        _0x15A38()[_0x12498[109]] = false
    }

    function _0x18EB8() {
        _0x124F8 = null
    }

    function _0x136F8() {
        return function() {
            _0x15A38()[_0x12498[109]] = true
        }
    }

    function _0x18F18() {
        if (_0x13A58(_0x13278, null)) {
            _0x13578 = true
        }
    }

    function _0x13758(_0x124F8) {
        return function() {
            if (_0x16B18(_0x12498)) {
                _0x13F98()();
                return
            } else {
                _0x15078()[_0x12498[5]][_0x12498[130]](_0x16998()[_0x12498[120]])[_0x12498[129]]({
                    x: 0,
                    y: 0
                }, 500, _0x15918()[_0x12498[128]][_0x12498[136]][_0x12498[137]], true, 1500)[_0x12498[125]][_0x12498[5]](_0x124F8._, this)
            }
        }
    }

    function _0x137B8() {
        return function() {
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x16758())[_0x12498[129]]({
                alpha: 0
            }, 450, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x167B8())[_0x12498[129]]({
                alpha: 0
            }, 450, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x16818())[_0x12498[129]]({
                alpha: 0
            }, 450, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true);
            if (_0x16B18(_0x12498)) {
                _0x14118()(false, null);
                _0x18F78()
            };
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x16878())[_0x12498[129]]({
                alpha: 0
            }, 450, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true);
            if (_0x16B18(_0x126D8)) {
                _0x13F98()(null, true, _0x12498[108], true)
            } else {
                _0x15078()[_0x12498[5]][_0x12498[130]](_0x16998())[_0x12498[129]]({
                    alpha: 0
                }, 450, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true)
            };
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x168D8())[_0x12498[129]]({
                alpha: 0
            }, 450, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true);
            _0x15078()[_0x12498[5]][_0x12498[130]](_0x16938())[_0x12498[129]]({
                alpha: 0
            }, 450, _0x15918()[_0x12498[128]][_0x12498[127]][_0x12498[137]], true)[_0x12498[125]][_0x12498[5]](_0x13ED8(), this)
        }
    }

    function _0x18FD8() {
        _0x16758()[_0x12498[109]] = false
    }

    function _0x19038() {
        _0x12BB8 = null
    }

    function _0x19098() {
        _0x167B8()[_0x12498[109]] = false
    }

    function _0x190F8() {
        _0x16818()[_0x12498[109]] = false
    }

    function _0x19158() {
        _0x132D8 = false
    }

    function _0x191B8() {
        _0x16878()[_0x12498[109]] = false
    }

    function _0x19218() {
        _0x16998()[_0x12498[109]] = false
    }

    function _0x19278() {
        _0x168D8()[_0x12498[109]] = false
    }

    function _0x192D8() {
        _0x16938()[_0x12498[109]] = false
    }

    function _0x19338() {
        _0x12F18 = true
    }

    function _0x19398() {
        if (_0x16B18(_0x12E58)) {
            _0x12558 = false
        }
    }

    function _0x193F8() {
        _0x16698()[_0x12498[37]] = true
    }

    function _0x19458() {
        _0x15C18()[_0x12498[37]] = true
    }

    function _0x194B8() {
        _0x15C78()[_0x12498[37]] = true
    }

    function _0x19518() {
        _0x166F8()[_0x12498[37]] = true
    }

    function _0x19578() {
        _0x134B8 = false
    }

    function _0x195D8() {
        if (_0x16B18(_0x12EB8)) {
            _0x12C78 = true
        }
    }

    function _0x19638() {
        _0x15978()[_0x12498[37]] = true
    }

    function _0x19698() {
        _0x156D8()[_0x12498[37]] = true
    }

    function _0x196F8() {
        _0x15978()[_0x12498[109]] = true
    }

    function _0x19758() {
        _0x12798 = 1
    }

    function _0x197B8() {
        _0x15978()[_0x12498[111]][_0x12498[110]] = true
    }

    function _0x19818() {
        _0x15978()[_0x12498[111]][_0x12498[112]] = true
    }

    function _0x19878() {
        _0x15978()[_0x12498[111]][_0x12498[113]] = true
    }

    function _0x198D8() {
        _0x15978()[_0x12498[111]][_0x12498[121]] = 10
    }

    function _0x19938() {
        if (_0x16B18(_0x12498)) {
            _0x132D8 = 0
        }
    }

    function _0x19998(_0x124F8) {
        _0x124F8._[_0x12498[44]] = 0
    }

    function _0x199F8(_0x124F8) {
        _0x124F8._[_0x12498[44]] = 29
    }

    function _0x19A58() {
        startgame = true
    }

    function _0x19AB8(_0x124F8) {
        _0x124F8._[_0x12498[44]] = 0
    }

    function _0x19B18() {
        if (_0x16B18(_0x12498)) {
            _0x128B8 = true
        }
    }

    function _0x19B78() {
        _0x16758()[_0x12498[7]] = 0
    }

    function _0x19BD8() {
        _0x12D38 = null
    }

    function _0x19C38() {
        _0x125B8 = false
    }

    function _0x19C98() {
        _0x168D8()[_0x12498[37]] = false
    }

    function _0x19CF8() {
        _0x16938()[_0x12498[7]] = 0
    }

    function _0x19D58() {
        _0x12C18 = 1
    }

    function _0x19DB8() {
        _0x12AF8 = true
    }

    function _0x19E18() {
        _0x12798 = 0
    }

    function _0x19E78() {
        _0x155B8()[_0x12498[44]] = 0
    }

    function _0x19ED8() {
        if (_0x13A58(_0x12A38, 1)) {
            _0x12CD8 = 1
        }
    }

    function _0x19F38() {
        _0x12F78 = true
    }

    function _0x19F98(_0x12498) {
        if (_0x12498._) {
            wasMuted = isMuted
        }
    }

    function _0x19FF8() {
        wasMuted = false
    }

    function _0x1A058() {
        wasMuted = false
    }

    function _0x1A0B8(_0x12498) {
        if (_0x12498._ && _0x15138()) {
            wasMuted = true
        }
    }

    function _0x1A118() {
        isMuted = true
    }

    function _0x1A178() {
        _0x12C78 = 1
    }

    function _0x1A1D8() {
        _0x15798()[_0x12498[44]] = 1
    }

    function _0x1A238() {
        _0x129D8 = 0
    }

    function _0x1A298() {
        isMuted = false
    }

    function _0x1A2F8() {
        _0x15798()[_0x12498[44]] = 0
    }

    function _0x1A358() {
        _0x128B8 = false
    }

    function _0x1A3B8() {
        _0x12CD8 = 0
    }

    function _0x1A418() {
        _0x12978 = _0x12498[101]
    }

    function _0x1A478() {
        if (_0x15138()) {
            _0x15798()[_0x12498[44]] = 1
        } else {
            _0x15798()[_0x12498[44]] = 0
        }
    }

    function _0x1A4D8() {
        _0x14D18()[_0x12498[163]] = 0.6
    }

    function _0x17E38() {
        _0x12558 = 1
    }

    function _0x18F78() {
        _0x13338 = false
    }
})()