var f, arr, curCat, curPage, doll, dollWear, tempItem, curGirl, animating, d1, d2, d3, prefix,
    ariel, arWear, elza, elWear, cindy, ciWear,
    ht1, ht2, ht3, jw1, jw2, jw3, bg1, bg2, bg3, gl1, gl2, gl3, ft1, ft2, ft3, dr1, dr2, dr3;

var Dress =
{

    preload : function() 
    {
        arr = [];

        counter = 0;
        curGirl = 0;
        curCat = 1;
        curPage = 1;

        arWear = {};
        elWear = {};
        ciWear = {};

        animating = false;

        d1 = false;
        d2 = false;
        d3 = false;

        ht1 = 0;
        ht2 = 0;
        ht3 = 0;
        jw1 = 0;
        jw2 = 0;
        jw3 = 0;
        bg1 = 0;
        bg2 = 0;
        bg3 = 0;
        gl1 = 0;
        gl2 = 0;
        gl3 = 0;
        ft1 = 0;
        ft2 = 0;
        ft3 = 0;
        dr1 = 0;
        dr2 = 0;
        dr3 = 0;

        game.stage.disableVisibilityChange = true;
    },

    create: function () 
    {
        game.add.sprite(0, 0, 'bg4');

        ///

        ariel = game.add.group();
        ariel.x = -88;
        ariel.y = 16;
        ariel.scale.setTo(.656);

        tempItem = game.make.sprite(0, 0, '');
        ariel.addChild(tempItem);
        arWear.fata = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_h_b_' + hr1);
        ariel.addChild(tempItem);
        arWear.hair_b = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        ariel.addChild(tempItem);
        arWear.bag_b = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_body');
        ariel.addChild(tempItem);
        arWear.body = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        ariel.addChild(tempItem);
        arWear.glove_b = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        ariel.addChild(tempItem);
        arWear.shoe = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_d_0');
        ariel.addChild(tempItem);
        arWear.dress = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        ariel.addChild(tempItem);
        arWear.jew = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        ariel.addChild(tempItem);
        arWear.bag = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_head');
        ariel.addChild(tempItem);
        arWear.head = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_sh_' + sh1);
        ariel.addChild(tempItem);
        arWear.shad = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_eye');
        ariel.addChild(tempItem);
        arWear.eye = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_rs_' + rs1);
        ariel.addChild(tempItem);
        arWear.res = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_lp_' + lp1);
        ariel.addChild(tempItem);
        arWear.lip = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_br');
        ariel.addChild(tempItem);
        arWear.brow = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_h_' + hr1);
        ariel.addChild(tempItem);
        arWear.hair = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        ariel.addChild(tempItem);
        arWear.hat = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_hand');
        ariel.addChild(tempItem);
        arWear.hand = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        ariel.addChild(tempItem);
        arWear.glove = tempItem;

        ///

        cindy = game.add.group();
        cindy.x = -88;
        cindy.y = 16;
        cindy.scale.setTo(.656);

        tempItem = game.make.sprite(0, 0, '');
        cindy.addChild(tempItem);
        ciWear.fata = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_h_b_' + hr2);
        cindy.addChild(tempItem);
        ciWear.hair_b = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        cindy.addChild(tempItem);
        ciWear.bag_b = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_body');
        cindy.addChild(tempItem);
        ciWear.body = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        cindy.addChild(tempItem);
        ciWear.glove_b = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        cindy.addChild(tempItem);
        ciWear.shoe = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_d_0');
        cindy.addChild(tempItem);
        ciWear.dress = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        cindy.addChild(tempItem);
        ciWear.glove = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        cindy.addChild(tempItem);
        ciWear.jew = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        cindy.addChild(tempItem);
        ciWear.bag = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_head');
        cindy.addChild(tempItem);
        ciWear.head = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_lp_' + lp1);
        cindy.addChild(tempItem);
        ciWear.lip = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_sh_' + sh1);
        cindy.addChild(tempItem);
        ciWear.shad = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_eye');
        cindy.addChild(tempItem);
        ciWear.eye = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_h_' + hr2);
        cindy.addChild(tempItem);
        ciWear.hair = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_rs_' + rs1);
        cindy.addChild(tempItem);
        ciWear.res = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        cindy.addChild(tempItem);
        ciWear.hat = tempItem;

        ///

        elza = game.add.group();
        elza.x = -88;
        elza.y = 16;
        elza.scale.setTo(.656);

        tempItem = game.make.sprite(0, 0, '');
        elza.addChild(tempItem);
        elWear.fata = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_h_b_' + hr3);
        elza.addChild(tempItem);
        elWear.hair_b = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        elza.addChild(tempItem);
        elWear.bag_b = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_body');
        elza.addChild(tempItem);
        elWear.body = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        elza.addChild(tempItem);
        elWear.glove_b = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        elza.addChild(tempItem);
        elWear.shoe = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_d_0');
        elza.addChild(tempItem);
        elWear.dress = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        elza.addChild(tempItem);
        elWear.glove = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        elza.addChild(tempItem);
        elWear.jew = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        elza.addChild(tempItem);
        elWear.bag = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_head');
        elza.addChild(tempItem);
        elWear.head = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_lp_' + lp1);
        elza.addChild(tempItem);
        elWear.lip = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_sh_' + sh1);
        elza.addChild(tempItem);
        elWear.shad = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_eye');
        elza.addChild(tempItem);
        elWear.eye = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_h_' + hr3);
        elza.addChild(tempItem);
        elWear.hair = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_rs_' + rs1);
        elza.addChild(tempItem);
        elWear.res = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        elza.addChild(tempItem);
        elWear.hat = tempItem;

        console.log({'ar': hr1, 'cin': hr2, 'el': gr3});

        ///

        arr['page1'] = game.add.group();
        arr['page1'].addChild(game.add.sprite(0, 0, 'shelf1'));

        arr['fata5'] = addItem(this, arr['page1'], 429, 52, 'fata5', 'fata_5', true, true, this.onTool, this.over, this.out);
        arr['dress13'] = addItem(this, arr['page1'], 416, 9, 'dress13', 'dress_13', true, true, this.onTool, this.over, this.out);
        arr['dress15'] = addItem(this, arr['page1'], 503, 10, 'dress15', 'dress_15', true, true, this.onTool, this.over, this.out);
        arr['dress14'] = addItem(this, arr['page1'], 783, 8, 'dress14', 'dress_14', true, true, this.onTool, this.over, this.out);
        arr['shoe1'] = addItem(this, arr['page1'], 662, 608, 'shoe1', 'shoe_1', true, true, this.onTool, this.over, this.out);
        arr['shoe2'] = addItem(this, arr['page1'], 571, 608, 'shoe2', 'shoe_2', true, true, this.onTool, this.over, this.out);

        arr['page2'] = game.add.group();
        arr['page2'].addChild(game.add.sprite(0, 0, 'shelf1'));

        arr['fata4'] = addItem(this, arr['page2'], 383, 14, 'fata4', 'fata_4', true, true, this.onTool, this.over, this.out);
        arr['dress11'] = addItem(this, arr['page2'], 491, 12, 'dress11', 'dress_11', true, true, this.onTool, this.over, this.out);
        arr['dress10'] = addItem(this, arr['page2'], 495, 11, 'dress10', 'dress_10', true, true, this.onTool, this.over, this.out);
        arr['dress12'] = addItem(this, arr['page2'], 557, 11, 'dress12', 'dress_12', true, true, this.onTool, this.over, this.out);
        arr['shoe3'] = addItem(this, arr['page2'], 658, 601, 'shoe3', 'shoe_3', true, true, this.onTool, this.over, this.out);
        arr['shoe4'] = addItem(this, arr['page2'], 564, 609, 'shoe4', 'shoe_4', true, true, this.onTool, this.over, this.out);

        arr['page3'] = game.add.group();
        arr['page3'].addChild(game.add.sprite(0, 0, 'shelf1'));

        arr['fata3'] = addItem(this, arr['page3'], 374, 20, 'fata3', 'fata_3', true, true, this.onTool, this.over, this.out);
        arr['dress5'] = addItem(this, arr['page3'], 437, 10, 'dress5', 'dress_5', true, true, this.onTool, this.over, this.out);
        arr['dress8'] = addItem(this, arr['page3'], 523, 10, 'dress8', 'dress_8', true, true, this.onTool, this.over, this.out);
        arr['dress9'] = addItem(this, arr['page3'], 631, 11, 'dress9', 'dress_9', true, true, this.onTool, this.over, this.out);
        arr['shoe5'] = addItem(this, arr['page3'], 561, 609, 'shoe5', 'shoe_5', true, true, this.onTool, this.over, this.out);
        arr['shoe6'] = addItem(this, arr['page3'], 654, 615, 'shoe6', 'shoe_6', true, true, this.onTool, this.over, this.out);

        arr['page4'] = game.add.group();
        arr['page4'].addChild(game.add.sprite(0, 0, 'shelf1'));

        arr['fata2'] = addItem(this, arr['page4'], 398, 25, 'fata2', 'fata_2', true, true, this.onTool, this.over, this.out);
        arr['dress7'] = addItem(this, arr['page4'], 397, 9, 'dress7', 'dress_7', true, true, this.onTool, this.over, this.out);
        arr['dress2'] = addItem(this, arr['page4'], 604, 11, 'dress2', 'dress_2', true, true, this.onTool, this.over, this.out);
        arr['dress4'] = addItem(this, arr['page4'], 625, 11, 'dress4', 'dress_4', true, true, this.onTool, this.over, this.out);
        arr['shoe7'] = addItem(this, arr['page4'], 677, 607, 'shoe7', 'shoe_7', true, true, this.onTool, this.over, this.out);
        arr['shoe8'] = addItem(this, arr['page4'], 563, 582, 'shoe8', 'shoe_8', true, true, this.onTool, this.over, this.out);

        arr['page5'] = game.add.group();
        arr['page5'].addChild(game.add.sprite(0, 0, 'shelf1'));

        arr['fata1'] = addItem(this, arr['page5'], 409, 19, 'fata1', 'fata_1', true, true, this.onTool, this.over, this.out);
        arr['dress1'] = addItem(this, arr['page5'], 433, 11, 'dress1', 'dress_1', true, true, this.onTool, this.over, this.out);
        arr['dress3'] = addItem(this, arr['page5'], 478, 10, 'dress3', 'dress_3', true, true, this.onTool, this.over, this.out);
        arr['dress6'] = addItem(this, arr['page5'], 632, 10, 'dress6', 'dress_6', true, true, this.onTool, this.over, this.out);
        arr['shoe9'] = addItem(this, arr['page5'], 576, 598, 'shoe9', 'shoe_9', true, true, this.onTool, this.over, this.out);
        arr['shoe10'] = addItem(this, arr['page5'], 671, 600, 'shoe10', 'shoe_10', true, true, this.onTool, this.over, this.out);

        arr['page6'] = game.add.group();
        arr['page6'].addChild(game.add.sprite(0, 0, 'shelf2'));

        arr['jew1'] = addItem(this, arr['page6'], 561, 278, 'jew1', 'jew_1', true, true, this.onTool, this.over, this.out);
        arr['jew2'] = addItem(this, arr['page6'], 685, 278, 'jew2', 'jew_2', true, true, this.onTool, this.over, this.out);
        arr['glove1'] = addItem(this, arr['page6'], 807, 284, 'glove1', 'glove_1', true, true, this.onTool, this.over, this.out);
        arr['glove2'] = addItem(this, arr['page6'], 485, 284, 'glove2', 'glove_2', true, true, this.onTool, this.over, this.out);
        arr['bag1'] = addItem(this, arr['page6'], 514, 486, 'bag1', 'bag_1', true, true, this.onTool, this.over, this.out);
        arr['bag2'] = addItem(this, arr['page6'], 767, 486, 'bag3', 'bag_2', true, true, this.onTool, this.over, this.out);
        arr['bag3'] = addItem(this, arr['page6'], 627, 503, 'bag2', 'bag_3', true, true, this.onTool, this.over, this.out);
        arr['hat1'] = addItem(this, arr['page6'], 627, 54, 'hat1', 'hat_1', true, true, this.onTool, this.over, this.out);
        arr['hat2'] = addItem(this, arr['page6'], 757, 59, 'hat2', 'hat_2', true, true, this.onTool, this.over, this.out);
        arr['hat3'] = addItem(this, arr['page6'], 467, 40, 'hat3', 'hat_3', true, true, this.onTool, this.over, this.out);

        ///

        for (var i = 2; i < 7; i++)
        {
            arr['page' + i].visible = false;
        }

        /// gui

        arr['gui'] = game.add.group();

        arr['ar_btn'] = addItem(this, arr['gui'], 360, 160, 'ar_btn', 'ar_btn', true, true, this.onSelect, this.over, this.out);
        arr['el_btn'] = addItem(this, arr['gui'], 371, 73, 'el_btn', 'el_btn', true, true, this.onSelect, this.over, this.out);
        arr['cin_btn'] = addItem(this, arr['gui'], 355, 0, 'cin_btn', 'cin_btn', true, true, this.onSelect, this.over, this.out);

        arr['rb'] = addItem(this, arr['gui'], 421, 315, 'lb', 'lb', true, true, this.onArrow, this.over, this.out);
        arr['lb'] = addItem(this, arr['gui'], 894, 315, 'rb', 'rb', true, true, this.onArrow, this.over, this.out);
        arr['mmmm'] = addItem(this, arr['gui'], 288, 461, 'mmmm', 'mmmm', true, true, this.goLink, this.over, this.out);

        var m2;

        arr['mmmm'].addChild(m2 = game.add.sprite(0, 0, 'mmmm2'));
        arr['mmmm'].addChild(game.add.sprite(-182/2, -278/2, 'mmmm'));

        m2.anchor.setTo(.5);

        m2.scale.setTo(.01);
        m2.alpha = 0;

        var t1 = game.add.tween(m2).to({ alpha: 1 }, Phaser.Timer.SECOND * .5, Phaser.Easing.Linear.None, true, 3000);
        var t2 = game.add.tween(m2).to({ alpha: 0 }, Phaser.Timer.SECOND * .5, Phaser.Easing.Linear.None, false, 2000);

        t1.chain(t2);
        t2.chain(t1);

        var t3 = game.add.tween(m2.scale).to({ x: 1, y: 1 }, Phaser.Timer.SECOND * .5, Phaser.Easing.Linear.None, true, 3000);
        var t4 = game.add.tween(m2.scale).to({ x: 0.01, y: 0.01 }, Phaser.Timer.SECOND * .5, Phaser.Easing.Linear.None, false, 2000);

        t3.chain(t4);
        t4.chain(t3);

        f = new GlowFilter(
            350,
            350,
            parseFloat(5),
            parseFloat(2),
            parseFloat(1),
            parseInt(0x00ff00),
            parseFloat(1)
        );

        f.outerStrength = 0;
        f.innerStrength = 0;

        game.add.tween(f).to( { outerStrength: 2, innerStrength: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 99990).yoyo(true);

        /// INIT

        prefix = 'ar_';
        doll = ariel;
        dollWear = arWear;

        //cindy.alpha = 0;
        //elza.alpha = 0;

        game.add.tween(cindy).to({ alpha: 0 }, Phaser.Timer.SECOND * .05, Phaser.Easing.Linear.None, true);
        game.add.tween(elza).to({ alpha: 0 }, Phaser.Timer.SECOND * .05, Phaser.Easing.Linear.None, true);
        game.add.tween(ariel).to({ alpha: 0 }, Phaser.Timer.SECOND * .05, Phaser.Easing.Linear.None, true);

        //arr['ar_btn'].inputEnabled = false;
        //arr['ar_btn'].filters = [f];

        this.onSelect(arr['ar_btn']);

        ///

        play = this.add.button(-10, 590, 'done', this.startGame, this, 0, 1, 1);
        musOn = this.add.button(845, 0, 'music', this.musicSwitch, this, 0, 1, 1);
        musOff = this.add.button(845, 0, 'music_off', this.musicSwitch, this, 0, 1, 1);
        logo = this.add.button(-10, -10, 'logo', this.goLink2, this);
        more = this.add.button(704, 511, 'more_e', this.goLink3, this);
        more.addChild(more2 = game.add.sprite(-250/2, -160/2, 'more_e_f'));
        more2.alpha = 0;
        game.add.tween(more2).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 99999).yoyo(true);

        musOn.scale.x = .75;
        musOn.scale.y = .75;
        musOff.scale.x = .75;
        musOff.scale.y = .75;

        logo.anchor.setTo(0.5);
        logo.x = -10 + logo.width / 2;
        logo.y = -10 + logo.height / 2;

        play.anchor.setTo(0.5);
        play.x = -10 + play.width / 2;
        play.y = 595 + play.height / 2;

        musOn.anchor.setTo(0.5);
        musOn.x = 845 + musOn.width / 2;
        musOn.y = 0 + musOn.height / 2;

        musOff.anchor.setTo(0.5);
        musOff.x = 845 + musOff.width / 2;
        musOff.y = 0 + musOff.height / 2;

        more.anchor.setTo(0.5);
        more.x = 960 - 205 + more.width / 2;
        more.y = 720 - 160 + more.height / 2;

        logo.events.onInputOver.add(this.onScaleOver, this);
        logo.events.onInputOut.add(this.onScaleOut, this);

        play.input.pixelPerfectClick = play.input.pixelPerfectOver = true;
        play.input.pixelPerfectAlpha = 10;
        play.events.onInputOver.add(this.onScaleOver, this);
        play.events.onInputOut.add(this.onScaleOut, this);

        musOn.input.pixelPerfectClick = musOn.input.pixelPerfectOver = true;
        musOn.input.pixelPerfectAlpha = 10;
        musOn.events.onInputOver.add(this.onScaleOver, this);
        musOn.events.onInputOut.add(this.onScaleOut, this);

        musOff.input.pixelPerfectClick = musOff.input.pixelPerfectOver = true;
        musOff.input.pixelPerfectAlpha = 10;
        musOff.events.onInputOver.add(this.onScaleOver, this);
        musOff.events.onInputOut.add(this.onScaleOut, this);

        more.input.pixelPerfectClick = more.input.pixelPerfectOver = true;
        more.input.pixelPerfectAlpha = 10;
        more.events.onInputOver.add(this.onScaleOver, this);
        more.events.onInputOut.add(this.onScaleOut, this);

        play.visible = false;

        if (musicOn)
        {
        	musOff.visible = false;
        	musOff.input.enabled = false;
        	musOn.visible = true;
        	musOn.input.enabled = true;
        }
        else
        {
        	musOff.visible = true;
        	musOff.input.enabled = true;
        	musOn.visible = false;
        	musOn.input.enabled = false;
        }

        fader = game.add.sprite(0, 0, 'fader');
        fader.alpha = .85;
        game.add.tween(fader).to({ alpha: 0 }, Phaser.Timer.SECOND * .5, Phaser.Easing.Linear.None, true);

        
    },

    nextMore: function()
    {
        counter++;

        if (counter > 33) counter = 0;

        more.frame = counter;

        game.time.events.add(Phaser.Timer.SECOND *  1/6, this.nextMore, this);
    },

    onSelect: function(sprite)
    {
        if (animating) return;

        animating = true;

        if (doll != null)
            game.add.tween(doll).to({ alpha: 0 }, Phaser.Timer.SECOND * .3, Phaser.Easing.Linear.None, true);

        arr['ar_btn'].inputEnabled = true;
        arr['ar_btn'].filters = null;
        arr['el_btn'].inputEnabled = true;
        arr['el_btn'].filters = null;
        arr['cin_btn'].inputEnabled = true;
        arr['cin_btn'].filters = null;

        if (sprite.name.indexOf('ar_btn') != -1)
        {
            curGirl = 0;

            game.add.tween(ariel).to({ alpha: 1 }, Phaser.Timer.SECOND * .3, Phaser.Easing.Linear.None, true);

            doll = ariel;
            dollWear = arWear;

            arr['ar_btn'].inputEnabled = false;
            arr['ar_btn'].filters = [f];

            prefix = 'ar_';
        }
        else if (sprite.name.indexOf('cin_btn') != -1)
        {
            curGirl = 0;

            game.add.tween(cindy).to({ alpha: 1 }, Phaser.Timer.SECOND * .3, Phaser.Easing.Linear.None, true);

            doll = cindy;
            dollWear = ciWear;

            arr['cin_btn'].inputEnabled = false;
            arr['cin_btn'].filters = [f];

            prefix = 'ci_';
        }
        else if (sprite.name.indexOf('el_btn') != -1)
        {
            curGirl = 0;

            game.add.tween(elza).to({ alpha: 1 }, Phaser.Timer.SECOND * .3, Phaser.Easing.Linear.None, true);

            doll = elza;
            dollWear = elWear;

            arr['el_btn'].inputEnabled = false;
            arr['el_btn'].filters = [f];

            prefix = 'el_';
        }

        game.time.events.add(Phaser.Timer.SECOND *  .6, this.onDoll, this);
    },

    onDoll: function()
    {
        animating = false;
    },

    onArrow: function(sprite)
    {
        if (sprite.name == 'lb')
        {
            curPage--;

            if (curPage == 0) curPage = 6;
        }
        else
        {
            curPage++;

            if (curPage > 6) curPage = 1;
        }

        for (var i = 1; i < 7; i++)
        {
            arr['page' + i].visible = false;
        }

        arr['page' + curPage].visible = true;
    },

    onTool: function(sprite)
    {
        if (sprite.name.indexOf('dress') != -1)
        {
            if (doll == ariel)
            {
                if (parseInt(sprite.name.substring(5)) == dr1)
                {
                    dollWear.dress.loadTexture(prefix + 'd_0');
                    dr1 = 0;

                    d1 = false;
                }
                else
                {
                    dr1 = parseInt(sprite.name.substring(5));
                    dollWear.dress.loadTexture(prefix + 'd_' + dr1);

                    d1 = true;
                }
            }
            else if (doll == cindy)
            {
                if (parseInt(sprite.name.substring(5)) == dr2)
                {
                    dollWear.dress.loadTexture(prefix + 'd_0');
                    dr2 = 0;

                    d2 = false;
                }
                else
                {
                    dr2 = parseInt(sprite.name.substring(5));
                    dollWear.dress.loadTexture(prefix + 'd_' + dr2);

                    d2 = true;
                }
            }
            else if (doll == elza)
            {
                if (parseInt(sprite.name.substring(5)) == dr3)
                {
                    dollWear.dress.loadTexture(prefix + 'd_0');
                    dr3 = 0;

                    d3 = false;
                }
                else
                {
                    dr3 = parseInt(sprite.name.substring(5));
                    dollWear.dress.loadTexture(prefix + 'd_' + dr3);

                    d3 = true;
                }
            }
        }

        if (sprite.name.indexOf('shoe') != -1)
        {
            dollWear.shoe.loadTexture(prefix + 's_' + (parseInt(sprite.name.substring(4))));
        }

        if (sprite.name.indexOf('fata') != -1)
        {
            if (doll == ariel)
            {
                if (parseInt(sprite.name.substring(4)) == ft1)
                {
                    dollWear.fata.loadTexture('dummy');
                    ft1 = 0;
                }
                else
                {
                    ft1 = parseInt(sprite.name.substring(4));
                    dollWear.fata.loadTexture(prefix + 'ft_' + ft1);
                }
            }
            else if (doll == cindy)
            {
                if (parseInt(sprite.name.substring(4)) == ft2)
                {
                    dollWear.fata.loadTexture('dummy');
                    ft2 = 0;
                }
                else
                {
                    ft2 = parseInt(sprite.name.substring(4));
                    dollWear.fata.loadTexture(prefix + 'ft_' + ft2);
                }
            }
            else if (doll == elza)
            {
                if (parseInt(sprite.name.substring(4)) == ft3)
                {
                    dollWear.fata.loadTexture('dummy');
                    ft3 = 0;
                }
                else
                {
                    ft3 = parseInt(sprite.name.substring(4));
                    dollWear.fata.loadTexture(prefix + 'ft_' + ft3);
                }
            }
        }

        if (sprite.name.indexOf('hat') != -1)
        {
            if (doll == ariel)
            {
                if (parseInt(sprite.name.substring(3)) == ht1)
                {
                    dollWear.hat.loadTexture('dummy');
                    ht1 = 0;
                }
                else
                {
                    ht1 = parseInt(sprite.name.substring(3));
                    dollWear.hat.loadTexture(prefix + 'ht_' + ht1);
                }
            }
            else if (doll == cindy)
            {
                if (parseInt(sprite.name.substring(3)) == ht2)
                {
                    dollWear.hat.loadTexture('dummy');
                    ht2 = 0;
                }
                else
                {
                    ht2 = parseInt(sprite.name.substring(3));
                    dollWear.hat.loadTexture(prefix + 'ht_' + ht2);
                }
            }
            else if (doll == elza)
            {
                if (parseInt(sprite.name.substring(3)) == ht3)
                {
                    dollWear.hat.loadTexture('dummy');
                    ht3 = 0;
                }
                else
                {
                    ht3 = parseInt(sprite.name.substring(3));
                    dollWear.hat.loadTexture(prefix + 'ht_' + ht3);
                }
            }
        }

        if (sprite.name.indexOf('jew') != -1)
        {
            if (doll == ariel)
            {
                if (parseInt(sprite.name.substring(3)) == jw1)
                {
                    dollWear.jew.loadTexture('dummy');
                    jw1 = 0;
                }
                else
                {
                    jw1 = parseInt(sprite.name.substring(3));
                    dollWear.jew.loadTexture(prefix + 'j_' + jw1);
                }
            }
            else if (doll == cindy)
            {
                if (parseInt(sprite.name.substring(3)) == jw2)
                {
                    dollWear.jew.loadTexture('dummy');
                    jw2 = 0;
                }
                else
                {
                    jw2 = parseInt(sprite.name.substring(3));
                    dollWear.jew.loadTexture(prefix + 'j_' + jw2);
                }
            }
            else if (doll == elza)
            {
                if (parseInt(sprite.name.substring(3)) == jw3)
                {
                    dollWear.jew.loadTexture('dummy');
                    jw3 = 0;
                }
                else
                {
                    jw3 = parseInt(sprite.name.substring(3));
                    dollWear.jew.loadTexture(prefix + 'j_' + jw3);
                }
            }
        }

        if (sprite.name.indexOf('glove') != -1)
        {
            if (doll == ariel)
            {
                if (parseInt(sprite.name.substring(5)) == gl1)
                {
                    dollWear.glove.loadTexture('dummy');
                    dollWear.glove_b.loadTexture('dummy');
                    gl1 = 0;
                }
                else
                {
                    gl1 = parseInt(sprite.name.substring(5));
                    dollWear.glove.loadTexture(prefix + 'gl_' + gl1);
                    dollWear.glove_b.loadTexture(prefix + 'gl_b_' + gl1);
                }
            }
            else if (doll == cindy)
            {
                if (parseInt(sprite.name.substring(5)) == gl2)
                {
                    dollWear.glove.loadTexture('dummy');
                    dollWear.glove_b.loadTexture('dummy');
                    gl2 = 0;
                }
                else
                {
                    gl2 = parseInt(sprite.name.substring(5));
                    dollWear.glove.loadTexture(prefix + 'gl_' + gl2);
                    dollWear.glove_b.loadTexture(prefix + 'gl_b_' + gl2);
                }
            }
            else if (doll == elza)
            {
                if (parseInt(sprite.name.substring(5)) == gl3)
                {
                    dollWear.glove.loadTexture('dummy');
                    dollWear.glove_b.loadTexture('dummy');
                    gl3 = 0;
                }
                else
                {
                    gl3 = parseInt(sprite.name.substring(5));
                    dollWear.glove.loadTexture(prefix + 'gl_' + gl3);
                    dollWear.glove_b.loadTexture(prefix + 'gl_b_' + gl3);
                }
            }
        }

        if (sprite.name.indexOf('bag') != -1)
        {
            if (doll == ariel)
            {
                if (parseInt(sprite.name.substring(3)) == bg1)
                {
                    dollWear.bag.loadTexture('dummy');
                    dollWear.bag_b.loadTexture('dummy');
                    bg1 = 0;
                }
                else
                {
                    bg1 = parseInt(sprite.name.substring(3));
                    dollWear.bag.loadTexture(prefix + 'bg_' + bg1);
                    dollWear.bag_b.loadTexture(prefix + 'bg_b_' + bg1);
                }
            }
            else if (doll == cindy)
            {
                if (parseInt(sprite.name.substring(3)) == bg2)
                {
                    dollWear.bag.loadTexture('dummy');
                    dollWear.bag_b.loadTexture('dummy');
                    bg2 = 0;
                }
                else
                {
                    bg2 = parseInt(sprite.name.substring(3));
                    dollWear.bag.loadTexture(prefix + 'bg_' + bg2);
                    dollWear.bag_b.loadTexture(prefix + 'bg_b_' + bg2);
                }
            }
            else if (doll == elza)
            {
                if (parseInt(sprite.name.substring(3)) == bg3)
                {
                    dollWear.bag.loadTexture('dummy');
                    dollWear.bag_b.loadTexture('dummy');
                    bg3 = 0;
                }
                else
                {
                    bg3 = parseInt(sprite.name.substring(3));
                    dollWear.bag.loadTexture(prefix + 'bg_' + bg3);
                    dollWear.bag_b.loadTexture(prefix + 'bg_b_' + bg3);
                }
            }
        }

        if (d1 && d2 && d3) play.visible = true;
        else play.visible = false;
    },

    over: function(sprite)
    {
        sprite.filters =
            [
                new GlowFilter(
                    350,
                    350,
                    parseFloat(5),
                    parseFloat(2),
                    parseFloat(1),
                    parseInt(0xffff66),
                    parseFloat(1)
                )
            ];
    },

    out: function(sprite)
    {
        sprite.filters = null;
    },

    out2: function(sprite)
    {
        sprite.filters = [f];
    },

    update: function (anim, frame)
    {

    },

    onScaleOver: function(sprite)
    {
        sprite.filters =
            [
                new GlowFilter(
                    350,
                    350,
                    parseFloat(5),
                    parseFloat(2),
                    parseFloat(1),
                    parseInt(0xffffff),
                    parseFloat(1)
                )
            ];

        var _tween1 = game.add.tween(sprite).to({ angle: 10 }, 800, Phaser.Easing.Linear.None, true);
        var _tween2 = game.add.tween(sprite).to({ angle: -10 }, 1600, Phaser.Easing.Linear.None, false);
        var _tween3 = game.add.tween(sprite).to({ angle: 0 }, 800, Phaser.Easing.Linear.None, false);
        _tween1.chain(_tween2);
        _tween2.chain(_tween3);
        _tween3.chain(_tween1);
    },

    onScaleOut: function(sprite)
    {
        sprite.filters = null;

        game.tweens.removeFrom(sprite);
        sprite.angle = 0;
    },

    onScaleOver2: function(sprite)
    {
        sprite.filters =
            [
                new GlowFilter(
                    350,
                    350,
                    parseFloat(5),
                    parseFloat(2),
                    parseFloat(1),
                    parseInt(0xffffff),
                    parseFloat(1)
                )
            ];
    },

    onScaleOut2: function(sprite)
    {
        sprite.filters = null;
    },

    startGame: function ()
    {
        play.visible = false;

        game.time.events.add(Phaser.Timer.SECOND *  .5, this.next, this);
        game.add.tween(fader).to({ alpha: .85 }, Phaser.Timer.SECOND * .5, Phaser.Easing.Linear.None, true);
    },
    
    musicSwitch: function () 
    {
        if (musicOn)
        {
        	musicOn = false;
        	music.pause();
        	
        	musOff.visible = true;
        	musOff.input.enabled = true;
        	musOn.visible = false;
        	musOn.input.enabled = false;
        }
        else
        {
        	musicOn = true;
        	music.resume();
        	
        	musOff.visible = false;
        	musOff.input.enabled = false;
        	musOn.visible = true;
        	musOn.input.enabled = true;
        }
    },

    goLink: function ()
    {
    },

    goLink2: function ()
    { window.open( 'http://www.localhost', '_blank' )
    },

    goLink3: function ()
    { window.open( 'http://www.localhost', '_blank' )
    },

    goCross: function ()
    {
    },

    shutdown: function ()
    {
        mc1 = ariel;
        mc2 = cindy;
        mc3 = elza;

        this.world.remove(mc1);
        this.world.remove(mc2);
        this.world.remove(mc3);
    },

    next: function () 
    {
        game.time.events.removeAll();
        game.tweens.removeAll();

        game.state.start('Comix2');
    }

};