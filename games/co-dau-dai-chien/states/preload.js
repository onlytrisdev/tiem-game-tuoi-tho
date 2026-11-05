var startPreLoader = false;
var loadent = false;
var lpbar1, loade;
var Preload = {
    init: function () {
        game.stage.backgroundColor = "#ffffff";
        this.scale.maxWidth = 800;
        this.scale.maxHeight = 600;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function () {
        this.load.spritesheet('lpbar', 'assets/loader/loaderprogress.png', 472, 70, 25);
        this.load.spritesheet('loadergliter', 'assets/loader/loadergliter.png', 803, 608, 9);
        this.load.image('bgloader', 'assets/loader/loaderbackground.png');
        this.load.image('loaderlogo', 'assets/loader/loaderlogo.png');
    },
    create: function () {
        loade = this.game.add.button(0, 0, 'bgloader', preloaderBackGrounClickFun);
        loadergliter = this.game.add.sprite(404.25, 301.75, 'loadergliter');
        loadergliter.anchor.setTo(0.5);
        loadergliter.animations.add('loadergliter')
        loadergliter.animations.play('loadergliter', 12, true)
        loaderlogo = this.game.add.button(401.95, 266.95, 'loaderlogo');
        loaderlogo.anchor.setTo(0.5);
        loaderlogo.inputEnabled = true
        loaderlogo.input.pixelPerfectOver = true;
        loaderlogo.input.pixelPerfectClick = true;
        loaderlogo.events.onInputOver.add(loaderlogooverFun, this)
        loaderlogo.events.onInputOut.add(loaderlogooutFun, this)
        loaderlogo.events.onInputDown.add(loaderlogodownFun, this)
        lpbar1 = this.game.add.sprite(400, 500, 'lpbar');
        lpbar1.anchor.setTo(0.5);
        game.load.onLoadStart.add(loadStart, this);
        game.load.onFileComplete.add(fileComplete, this);
        game.load.onLoadComplete.add(loadComplete, this);
        game.time.events.add(Phaser.Timer.SECOND * 1, loadPicture, this);
        showAdOnPosition('pre');
    }
};
function loadPicture() {
    this.game.load.script('filters', 'plugins/glow.js');
    this.load.spritesheet('loaderplay', 'assets/loader/play.png', 213, 120);
    this.load.spritesheet('logo', 'assets/buttons/logo.png', 244, 75, 3);
    this.load.image('fecb1', 'assets/buttons/fb.png');
    this.load.spritesheet('mute1', 'assets/buttons/mute.png', 156, 128, 2);
    this.load.spritesheet('play1', 'assets/buttons/play.png', 156, 128, 2);
    this.load.spritesheet('moregames1', 'assets/buttons/moregames.png', 131, 152, 17);
    this.load.spritesheet('nextbut', 'assets/buttons/nextbut.png', 156, 128, 2);
    this.load.spritesheet('done1', 'assets/buttons/done.png', 155, 128, 2);
    this.load.spritesheet('save1', 'assets/buttons/save.png', 155, 128, 2);
    this.load.spritesheet('replay1', 'assets/buttons/replay.png', 156, 128, 2);
    this.load.spritesheet('close1', 'assets/buttons/close.png', 148, 142, 11);
    //Transition
    this.load.image('levelup1', 'assets/titlescreen/levelup1.png');
    this.load.image('levelup2', 'assets/titlescreen/levelup2.png');
    this.load.image('flower1', 'assets/titlescreen/flower1.png');
    this.load.image('flower2', 'assets/titlescreen/flower2.png');
    //Titlescreen
    this.load.image('background', 'assets/titlescreen/background.png');
    this.load.image('titledoll1', 'assets/titlescreen/doll1.png');
    this.load.image('titledoll2', 'assets/titlescreen/doll2.png');
    this.load.image('titledoll3', 'assets/titlescreen/doll3.png');
    this.load.image('title', 'assets/titlescreen/title.png');
    //Levelselect
    this.load.image('lbackground1', 'assets/levelselect/background.png');
    this.load.image('level1', 'assets/levelselect/level1.png');
    this.load.image('level2', 'assets/levelselect/level2.png');
    this.load.image('level3', 'assets/levelselect/level3.png');
    this.load.spritesheet('glitter', 'assets/levelselect/glitter.png', 301, 451);
    //Dressup1
    this.load.image('abackground', 'assets/dressup1/background.png');
    this.load.spritesheet('acupboard', 'assets/dressup1/cupboard.png', 470, 659);
    this.load.image('adress1', 'assets/dressup1/dress1.png');
    this.load.image('adress2', 'assets/dressup1/dress2.png');
    this.load.image('adress3', 'assets/dressup1/dress3.png');
    this.load.image('adress4', 'assets/dressup1/dress4.png');
    this.load.image('adress5', 'assets/dressup1/dress5.png');
    this.load.image('adress6', 'assets/dressup1/dress6.png');
    this.load.image('ahair1', 'assets/dressup1/hair1.png');
    this.load.image('ahair2', 'assets/dressup1/hair2.png');
    this.load.image('ahair3', 'assets/dressup1/hair3.png');
    this.load.image('ahair4', 'assets/dressup1/hair4.png');
    this.load.image('astud1', 'assets/dressup1/stud1.png');
    this.load.image('astud2', 'assets/dressup1/stud2.png');
    this.load.image('astud3', 'assets/dressup1/stud3.png');
    this.load.image('astud4', 'assets/dressup1/stud4.png');
    this.load.image('acrown1', 'assets/dressup1/crown1.png');
    this.load.image('acrown2', 'assets/dressup1/crown2.png');
    this.load.image('acrown3', 'assets/dressup1/crown3.png');
    this.load.image('aacc1', 'assets/dressup1/acc1.png');
    this.load.image('aacc2', 'assets/dressup1/acc2.png');
    this.load.image('achain1', 'assets/dressup1/chain1.png');
    this.load.image('achain2', 'assets/dressup1/chain2.png');
    this.load.image('achain3', 'assets/dressup1/chain3.png');
    this.load.image('achain4', 'assets/dressup1/chain4.png');
    this.load.image('achain5', 'assets/dressup1/chain5.png');
    this.load.image('arrow', 'assets/dressup1/arrow.png');
    this.load.spritesheet('stargilter', 'assets/dressup1/stargilter.png', 311, 321);
    //Doll1
    this.load.spritesheet('aheadacc', 'assets/dressup1/doll/headacc.png', 340, 463);
    this.load.image('abody', 'assets/dressup1/doll/body.png');
    this.load.spritesheet('adress', 'assets/dressup1/doll/dress.png', 553, 481);
    this.load.image('ahead', 'assets/dressup1/doll/head.png');
    this.load.image('aeyetop', 'assets/dressup1/doll/eyetop.png');
    this.load.spritesheet('alips', 'assets/dressup1/doll/lips.png', 49, 38);
    this.load.spritesheet('ablushes', 'assets/dressup1/doll/blushes.png', 121, 108);
    this.load.spritesheet('aeyeshadow', 'assets/dressup1/doll/eyeshadow.png', 116, 58);
    this.load.spritesheet('amascara', 'assets/dressup1/doll/mascara.png', 111, 51);
    this.load.spritesheet('aeyeball', 'assets/dressup1/doll/eyeball.png', 258, 174);
    this.load.spritesheet('achainacc', 'assets/dressup1/doll/chainacc.png', 120, 99);
    this.load.spritesheet('ahair', 'assets/dressup1/doll/hair.png', 204, 372);
    this.load.spritesheet('acrownacc', 'assets/dressup1/doll/crownacc.png', 111, 80);
    this.load.spritesheet('astud', 'assets/dressup1/doll/stud.png', 126, 76);
    //Dressup2
    this.load.image('bbackground', 'assets/dressup2/background.png');
    this.load.spritesheet('bcupboard', 'assets/dressup2/cupboard.png', 429, 540);
    this.load.image('bdress1', 'assets/dressup2/dress1.png');
    this.load.image('bdress2', 'assets/dressup2/dress2.png');
    this.load.image('bdress3', 'assets/dressup2/dress3.png');
    this.load.image('bdress4', 'assets/dressup2/dress4.png');
    this.load.image('bdress5', 'assets/dressup2/dress5.png');
    this.load.image('bdress6', 'assets/dressup2/dress6.png');
    this.load.image('bhair1', 'assets/dressup2/hair1.png');
    this.load.image('bhair2', 'assets/dressup2/hair2.png');
    this.load.image('bhair3', 'assets/dressup2/hair3.png');
    this.load.image('bhair4', 'assets/dressup2/hair4.png');
    this.load.image('bstud1', 'assets/dressup2/stud1.png');
    this.load.image('bstud2', 'assets/dressup2/stud2.png');
    this.load.image('bstud3', 'assets/dressup2/stud3.png');
    this.load.image('bstud4', 'assets/dressup2/stud4.png');
    this.load.image('bcrown1', 'assets/dressup2/crown1.png');
    this.load.image('bcrown2', 'assets/dressup2/crown2.png');
    this.load.image('bcrown3', 'assets/dressup2/crown3.png');
    this.load.image('bcrown4', 'assets/dressup2/crown4.png');
    this.load.image('bacc1', 'assets/dressup2/acc1.png');
    this.load.image('bacc2', 'assets/dressup2/acc2.png');
    this.load.image('bchain1', 'assets/dressup2/chain1.png');
    this.load.image('bchain2', 'assets/dressup2/chain2.png');
    this.load.image('bchain3', 'assets/dressup2/chain3.png');
    this.load.image('bchain4', 'assets/dressup2/chain4.png');
    //Doll2
    this.load.spritesheet('bheadacc', 'assets/dressup2/doll/headacc.png', 373, 461);
    this.load.image('bbody', 'assets/dressup2/doll/body.png');
    this.load.spritesheet('bdress', 'assets/dressup2/doll/dress.png', 369, 433);
    this.load.image('bhead', 'assets/dressup2/doll/head.png');
    this.load.image('beyetop1', 'assets/dressup2/doll/eyetop1.png');
    this.load.spritesheet('blips', 'assets/dressup2/doll/lips.png', 73, 55);
    this.load.image('beyetop', 'assets/dressup2/doll/eyetop.png');
    this.load.spritesheet('bblushes', 'assets/dressup2/doll/blushes.png', 129, 106);
    this.load.spritesheet('beyeshadow', 'assets/dressup2/doll/eyeshadow.png', 110, 50);
    this.load.spritesheet('bmascara', 'assets/dressup2/doll/mascara.png', 126, 75);
    this.load.spritesheet('beyeball', 'assets/dressup2/doll/eyeball.png', 86, 45);
    this.load.spritesheet('bchainacc', 'assets/dressup2/doll/chainacc.png', 99, 154);
    this.load.spritesheet('bhair', 'assets/dressup2/doll/hair.png', 287, 513);
    this.load.spritesheet('bcrownacc', 'assets/dressup2/doll/crownacc.png', 147, 101);
    this.load.spritesheet('bstud', 'assets/dressup2/doll/stud.png', 140, 63);
    //Dressup3
    this.load.image('cbackground', 'assets/dressup3/background.png');
    this.load.image('cdress1', 'assets/dressup3/dress1.png');
    this.load.image('cdress2', 'assets/dressup3/dress2.png');
    this.load.image('cdress3', 'assets/dressup3/dress3.png');
    this.load.image('cdress4', 'assets/dressup3/dress4.png');
    this.load.image('cdress5', 'assets/dressup3/dress5.png');
    this.load.image('cdress6', 'assets/dressup3/dress6.png');
    this.load.image('chair1', 'assets/dressup3/hair1.png');
    this.load.image('chair2', 'assets/dressup3/hair2.png');
    this.load.image('chair3', 'assets/dressup3/hair3.png');
    this.load.image('chair4', 'assets/dressup3/hair4.png');
    this.load.image('cstud1', 'assets/dressup3/stud1.png');
    this.load.image('cstud2', 'assets/dressup3/stud2.png');
    this.load.image('cstud3', 'assets/dressup3/stud3.png');
    this.load.image('cstud4', 'assets/dressup3/stud4.png');
    this.load.image('ccrown1', 'assets/dressup3/crown1.png');
    this.load.image('ccrown2', 'assets/dressup3/crown2.png');
    this.load.image('ccrown3', 'assets/dressup3/crown3.png');
    this.load.image('cacc1', 'assets/dressup3/acc1.png');
    this.load.image('cacc2', 'assets/dressup3/acc2.png');
    this.load.image('cchain1', 'assets/dressup3/chain1.png');
    this.load.image('cchain2', 'assets/dressup3/chain2.png');
    this.load.image('cchain3', 'assets/dressup3/chain3.png');
    this.load.image('cchain4', 'assets/dressup3/chain4.png');
    //Doll3
    this.load.image('cbody', 'assets/dressup3/doll/body.png');
    this.load.spritesheet('cdress', 'assets/dressup3/doll/dress.png', 426, 424);
    this.load.spritesheet('cblushes', 'assets/dressup3/doll/blushes.png', 159, 115);
    this.load.image('chead', 'assets/dressup3/doll/head.png');
    this.load.image('ceyetop1', 'assets/dressup3/doll/eyetop1.png');
    this.load.spritesheet('clips', 'assets/dressup3/doll/lips.png', 59, 35);
    this.load.spritesheet('ceyeshadow', 'assets/dressup3/doll/eyeshadow.png', 119, 53);
    this.load.spritesheet('cmascara', 'assets/dressup3/doll/mascara.png', 113, 48);
    this.load.spritesheet('ceyeball', 'assets/dressup3/doll/eyeball.png', 89, 47);
    this.load.spritesheet('cchainacc', 'assets/dressup3/doll/chainacc.png', 115, 107);
    this.load.spritesheet('chair', 'assets/dressup3/doll/hair.png', 269, 391);
    this.load.spritesheet('cstud', 'assets/dressup3/doll/stud.png', 141, 72);
    this.load.spritesheet('cheadacc', 'assets/dressup3/doll/headacc.png', 363, 251);
    this.load.spritesheet('ccrownacc', 'assets/dressup3/doll/crownacc.png', 483, 543);
    //Makeup1
    this.load.image('mbackground1', 'assets/makeup1/background.png');
    this.load.image('mtable', 'assets/makeup1/table.png');
    this.load.image('aeshadebtn', 'assets/makeup1/eshadebtn.png');
    this.load.image('alipbtn', 'assets/makeup1/lipbtn.png');
    this.load.image('aeyebtn', 'assets/makeup1/eyebtn.png');
    this.load.image('ablushbtn', 'assets/makeup1/blushbtn.png');
    this.load.image('aelashbtn', 'assets/makeup1/elashbtn.png');
    this.load.image('aeshade1', 'assets/makeup1/eshade1.png');
    this.load.image('aeshade2', 'assets/makeup1/eshade2.png');
    this.load.image('aeshade3', 'assets/makeup1/eshade3.png');
    this.load.image('aeshade4', 'assets/makeup1/eshade4.png');
    this.load.image('aeshade5', 'assets/makeup1/eshade5.png');
    this.load.image('aeshade6', 'assets/makeup1/eshade6.png');
    this.load.image('aelash1', 'assets/makeup1/elash1.png');
    this.load.image('aelash2', 'assets/makeup1/elash2.png');
    this.load.image('aelash3', 'assets/makeup1/elash3.png');
    this.load.image('aelash4', 'assets/makeup1/elash4.png');
    this.load.image('aelash5', 'assets/makeup1/elash5.png');
    this.load.image('alip1', 'assets/makeup1/lip1.png');
    this.load.image('alip2', 'assets/makeup1/lip2.png');
    this.load.image('alip3', 'assets/makeup1/lip3.png');
    this.load.image('alip4', 'assets/makeup1/lip4.png');
    this.load.image('alip5', 'assets/makeup1/lip5.png');
    this.load.image('aeye1', 'assets/makeup1/eye1.png');
    this.load.image('aeye2', 'assets/makeup1/eye2.png');
    this.load.image('aeye3', 'assets/makeup1/eye3.png');
    this.load.image('aeye4', 'assets/makeup1/eye4.png');
    this.load.image('aeye5', 'assets/makeup1/eye5.png');
    this.load.image('ablush1', 'assets/makeup1/blush1.png');
    this.load.image('ablush2', 'assets/makeup1/blush2.png');
    this.load.image('ablush3', 'assets/makeup1/blush3.png');
    this.load.image('ablush4', 'assets/makeup1/blush4.png');
    this.load.image('ablush5', 'assets/makeup1/blush5.png');
    //Makeup Doll1
    this.load.image('m1abody', 'assets/makeup1/doll/body.png');
    this.load.image('m1ahead', 'assets/makeup1/doll/head.png');
    this.load.image('m1eyetop', 'assets/makeup1/doll/eyetop.png');
    this.load.spritesheet('m1alips', 'assets/makeup1/doll/lips.png', 86, 68);
    this.load.spritesheet('m1ablushes', 'assets/makeup1/doll/blushes.png', 216, 193);
    this.load.spritesheet('m1aeyeshadow', 'assets/makeup1/doll/eyeshadow.png', 175, 89);
    this.load.spritesheet('m1amascara', 'assets/makeup1/doll/mascara.png', 168, 77);
    this.load.spritesheet('m1aeyeball', 'assets/makeup1/doll/eyeball.png', 127, 70);
    this.load.image('m1ahair', 'assets/makeup1/doll/hair.png');
    //Makeup2
    this.load.image('mbackground2', 'assets/makeup2/background.png');
    this.load.image('mtable', 'assets/makeup2/table.png');
    this.load.image('beshadebtn', 'assets/makeup2/eshadebtn.png');
    this.load.image('blipbtn', 'assets/makeup2/lipbtn.png');
    this.load.image('beyebtn', 'assets/makeup2/eyebtn.png');
    this.load.image('bblushbtn', 'assets/makeup2/blushbtn.png');
    this.load.image('belashbtn', 'assets/makeup2/elashbtn.png');
    this.load.image('beshade1', 'assets/makeup2/eshade1.png');
    this.load.image('beshade2', 'assets/makeup2/eshade2.png');
    this.load.image('beshade3', 'assets/makeup2/eshade3.png');
    this.load.image('beshade4', 'assets/makeup2/eshade4.png');
    this.load.image('beshade5', 'assets/makeup2/eshade5.png');
    this.load.image('beshade6', 'assets/makeup2/eshade6.png');
    this.load.image('beshade7', 'assets/makeup2/eshade7.png');
    this.load.image('beshade8', 'assets/makeup2/eshade8.png');
    this.load.image('belash1', 'assets/makeup2/elash1.png');
    this.load.image('belash2', 'assets/makeup2/elash2.png');
    this.load.image('belash3', 'assets/makeup2/elash3.png');
    this.load.image('belash4', 'assets/makeup2/elash4.png');
    this.load.image('belash5', 'assets/makeup2/elash5.png');
    this.load.image('belash6', 'assets/makeup2/elash6.png');
    this.load.image('belash7', 'assets/makeup2/elash7.png');
    this.load.image('blip1', 'assets/makeup2/lip1.png');
    this.load.image('blip2', 'assets/makeup2/lip2.png');
    this.load.image('blip3', 'assets/makeup2/lip3.png');
    this.load.image('blip4', 'assets/makeup2/lip4.png');
    this.load.image('blip5', 'assets/makeup2/lip5.png');
    this.load.image('beye1', 'assets/makeup2/eye1.png');
    this.load.image('beye2', 'assets/makeup2/eye2.png');
    this.load.image('beye3', 'assets/makeup2/eye3.png');
    this.load.image('beye4', 'assets/makeup2/eye4.png');
    this.load.image('beye5', 'assets/makeup2/eye5.png');
    this.load.image('beye6', 'assets/makeup2/eye6.png');
    this.load.image('beye7', 'assets/makeup2/eye7.png');
    this.load.image('bblush1', 'assets/makeup2/blush1.png');
    this.load.image('bblush2', 'assets/makeup2/blush2.png');
    this.load.image('bblush3', 'assets/makeup2/blush3.png');
    this.load.image('bblush4', 'assets/makeup2/blush4.png');
    this.load.image('bblush5', 'assets/makeup2/blush5.png');
    //Makeup Doll2
    this.load.image('mbbody', 'assets/makeup2/doll/body.png');
    this.load.image('mbhead', 'assets/makeup2/doll/head.png');
    this.load.spritesheet('mblips', 'assets/makeup2/doll/lips.png', 125, 95);
    this.load.image('mbeyetop', 'assets/makeup2/doll/eyetop.png');
    this.load.image('mbeyetop1', 'assets/makeup2/doll/eyetop1.png');
    this.load.spritesheet('mbblushes', 'assets/makeup2/doll/blushes.png', 223, 183);
    this.load.spritesheet('mbeyeshadow', 'assets/makeup2/doll/eyeshadow.png', 190, 86);
    this.load.spritesheet('mbmascara', 'assets/makeup2/doll/mascara.png', 217, 129);
    this.load.spritesheet('mbeyeball', 'assets/makeup2/doll/eyeball.png', 147, 76);
    this.load.image('mbhair', 'assets/makeup2/doll/hair.png');
    //Makeup3
    this.load.image('mbackground3', 'assets/makeup3/background.png');
    this.load.image('mtable', 'assets/makeup3/table.png');
    this.load.image('ceshadebtn', 'assets/makeup3/eshadebtn.png');
    this.load.image('clipbtn', 'assets/makeup3/lipbtn.png');
    this.load.image('ceyebtn', 'assets/makeup3/eyebtn.png');
    this.load.image('cblushbtn', 'assets/makeup3/blushbtn.png');
    this.load.image('celashbtn', 'assets/makeup3/elashbtn.png');
    this.load.image('ceshade1', 'assets/makeup3/eshade1.png');
    this.load.image('ceshade2', 'assets/makeup3/eshade2.png');
    this.load.image('ceshade3', 'assets/makeup3/eshade3.png');
    this.load.image('ceshade4', 'assets/makeup3/eshade4.png');
    this.load.image('ceshade5', 'assets/makeup3/eshade5.png');
    this.load.image('ceshade6', 'assets/makeup3/eshade6.png');
    this.load.image('celash1', 'assets/makeup3/elash1.png');
    this.load.image('celash2', 'assets/makeup3/elash2.png');
    this.load.image('celash3', 'assets/makeup3/elash3.png');
    this.load.image('celash4', 'assets/makeup3/elash4.png');
    this.load.image('celash5', 'assets/makeup3/elash5.png');
    this.load.image('clip1', 'assets/makeup3/lip1.png');
    this.load.image('clip2', 'assets/makeup3/lip2.png');
    this.load.image('clip3', 'assets/makeup3/lip3.png');
    this.load.image('clip4', 'assets/makeup3/lip4.png');
    this.load.image('clip5', 'assets/makeup3/lip5.png');
    this.load.image('ceye1', 'assets/makeup3/eye1.png');
    this.load.image('ceye2', 'assets/makeup3/eye2.png');
    this.load.image('ceye3', 'assets/makeup3/eye3.png');
    this.load.image('ceye4', 'assets/makeup3/eye4.png');
    this.load.image('ceye5', 'assets/makeup3/eye5.png');
    this.load.image('cblush1', 'assets/makeup3/blush1.png');
    this.load.image('cblush2', 'assets/makeup3/blush2.png');
    this.load.image('cblush3', 'assets/makeup3/blush3.png');
    this.load.image('cblush4', 'assets/makeup3/blush4.png');
    this.load.image('cblush5', 'assets/makeup3/blush5.png');
    //Doll3
    this.load.image('mcbody', 'assets/makeup3/doll/body.png');
    this.load.spritesheet('mcblushes', 'assets/makeup3/doll/blushes.png', 284, 204);
    this.load.image('mchead', 'assets/makeup3/doll/head.png');
    this.load.image('mceyetop1', 'assets/makeup3/doll/eyetop1.png');
    this.load.spritesheet('mclips', 'assets/makeup3/doll/lips.png', 104, 61);
    this.load.spritesheet('mceyeshadow', 'assets/makeup3/doll/eyeshadow.png', 212, 93);
    this.load.spritesheet('mcmascara', 'assets/makeup3/doll/mascara.png', 201, 84);
    this.load.spritesheet('mceyeball', 'assets/makeup3/doll/eyeball.png', 158, 82);
    this.load.image('mchair', 'assets/makeup3/doll/hair.png');
    this.load.image('thbackground', 'assets/thumb/background.png');
    this.load.image('thumb1_1', 'assets/thumb/thumb1.png');
    this.load.image('thumb2_1', 'assets/thumb/thumb2.png');
    this.load.image('thumb3_1', 'assets/thumb/thumb3.png');
    this.load.image('thumb4_1', 'assets/thumb/thumb4.png');
    //Endscreen
    this.load.image('ebackground1', 'assets/endscreen/background1.png');
    this.load.image('ebackground2', 'assets/endscreen/background2.png');
    this.load.image('ebackground3', 'assets/endscreen/background3.png');
    this.load.image('line', 'assets/endscreen/line.png');
    this.load.audio('boden', ['assets/bmusic.mp3', 'assets/bmusic.ogg']);
    this.load.audio('clickss', ['assets/click.mp3', 'assets/click.ogg']);
    this.load.audio('unlock', ['assets/unlock.mp3', 'assets/unlock.ogg']);
    this.load.audio('itemclick', ['assets/itemclick.mp3', 'assets/itemclick.ogg']);
    game.load.start();
}
function loadStart() {}
function fileComplete(progress) {
    lpbar1.frame = parseInt(progress / 100 * 24);
    if (progress == 100) {
        lpbar1.visible = false;
    }
}
function loadComplete() {
    lpbar1.visible = false;
    loaderplay = this.game.add.button(398, 461, 'loaderplay', loaderPlayDownFun, this, 1, 0, 2);
    loaderplay.anchor.setTo(0.5);
}
function loaderPlayDownFun(ev) {
    this.game.state.start('titlescreen');
}
function loaderlogodownFun(ev) {
    window.open( 'http://www.localhost', '_blank' );
}
function preloaderBackGrounClickFun() {
    window.open( 'http://www.localhost', '_blank' );
}
function loaderlogooverFun(ev) {
    ev.scale.setTo(1.05)
}
function loaderlogooutFun(ev) {
    ev.scale.setTo(1)
}