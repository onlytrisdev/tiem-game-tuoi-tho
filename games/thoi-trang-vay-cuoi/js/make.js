var f, arr, curCat, curPage, doll, dollWear, tempItem, curGirl, animating, prefix, d1, d2, d3,
    ariel, arWear, elza, elWear, cindy, ciWear;

var Make =
{

    preload : function() 
    {
        arr = [];

        counter = 0;
        curGirl = 1;
        curCat = 1;
        curPage = 1;

        arWear = {};
        elWear = {};
        ciWear = {};

        animating = false;

        d1 = false;
        d2 = false;
        d3 = false;

        hr1 = 1;
        hr2 = 1;
        hr3 = 1;
        rs1 = 0;
        rs2 = 0;
        rs3 = 0;
        sh1 = 0;
        sh2 = 0;
        sh3 = 0;
        lp1 = 0;
        lp2 = 0;
        lp3 = 0;

        game.stage.disableVisibilityChange = true;
    },

    create: function () 
    {
        game.add.sprite(0, 0, 'bg3');

        /// PRE INIT

        ///

        ariel = game.add.group();
        ariel.x = 0;
        ariel.y = 0;

        tempItem = game.make.sprite(0, 0, 'ar_hh_b_1');
        ariel.addChild(tempItem);
        arWear.hair_b = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_bd');
        ariel.addChild(tempItem);
        arWear.body = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_ss_0');
        ariel.addChild(tempItem);
        arWear.shad = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_glz');
        ariel.addChild(tempItem);
        arWear.eye = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_rr_0');
        ariel.addChild(tempItem);
        arWear.res = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_ll_0');
        ariel.addChild(tempItem);
        arWear.lip = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_brw');
        ariel.addChild(tempItem);
        arWear.brow = tempItem;

        tempItem = game.make.sprite(0, 0, 'ar_hh_1');
        ariel.addChild(tempItem);
        arWear.hair = tempItem;

        ///

        cindy = game.add.group();
        cindy.x = 0;
        cindy.y = 0;

        tempItem = game.make.sprite(0, 0, 'ci_hh_b_1');
        cindy.addChild(tempItem);
        ciWear.hair_b = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_bd');
        cindy.addChild(tempItem);
        ciWear.body = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_ll_0');
        cindy.addChild(tempItem);
        ciWear.lip = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_ss_0');
        cindy.addChild(tempItem);
        ciWear.shad = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_glz');
        cindy.addChild(tempItem);
        ciWear.eye = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_hh_1');
        cindy.addChild(tempItem);
        ciWear.hair = tempItem;

        tempItem = game.make.sprite(0, 0, 'ci_rr_0');
        cindy.addChild(tempItem);
        ciWear.res = tempItem;

        ///

        elza = game.add.group();
        elza.x = 0;
        elza.y = 0;

        tempItem = game.make.sprite(0, 0, 'el_hh_b_1');
        elza.addChild(tempItem);
        elWear.hair_b = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_bd');
        elza.addChild(tempItem);
        elWear.body = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_ll_0');
        elza.addChild(tempItem);
        elWear.lip = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_ss_0');
        elza.addChild(tempItem);
        elWear.shad = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_glz');
        elza.addChild(tempItem);
        elWear.eye = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_hh_1');
        elza.addChild(tempItem);
        elWear.hair = tempItem;

        tempItem = game.make.sprite(0, 0, 'el_rr_0');
        elza.addChild(tempItem);
        elWear.res = tempItem;

        ///

        game.add.sprite(0, 0, 'fg');

        /// gui

        arr['gui'] = game.add.group();

        arr['arr'] = addItem(this, arr['gui'], 20, 262, 'arr', 'arr', true, true, this.onArrow, this.over, this.out);
        arr['hr_btn'] = addItem(this, arr['gui'], 123, 476, 'hr_btn', 'hr_btn', true, true, this.onTool, this.over, this.out);
        arr['lp_btn'] = addItem(this, arr['gui'], 758, 108, 'lp_btn', 'lp_btn', true, true, this.onTool, this.over, this.out);
        arr['rs_btn'] = addItem(this, arr['gui'], 793, 244, 'rs_btn', 'rs_btn', true, true, this.onTool, this.over, this.out);
        arr['sh_btn'] = addItem(this, arr['gui'], 758, 380, 'sh_btn', 'sh_btn', true, true, this.onTool, this.over, this.out);

        f = new GlowFilter(
            350,
            350,
            parseFloat(5),
            parseFloat(2),
            parseFloat(1),
            parseInt(0xffff66),
            parseFloat(1)
        );

        f.outerStrength = 0;
        f.innerStrength = 0;

        game.add.tween(f).to( { outerStrength: 2, innerStrength: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 99990).yoyo(true);

        /// INIT

        prefix = 'ar_';
        doll = ariel;
        dollWear = arWear;

        cindy.alpha = 0;
        elza.alpha = 0;

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

    onArrow: function(sprite)
    {
        if (animating) return;

        animating = true;

        if (doll != null)
            game.add.tween(doll).to({ alpha: 0 }, Phaser.Timer.SECOND * .3, Phaser.Easing.Linear.None, true);

        curGirl++;

        if (curGirl > 3) curGirl = 1;

        if (curGirl == 1)
        {
            game.add.tween(ariel).to({ alpha: 1 }, Phaser.Timer.SECOND * .3, Phaser.Easing.Linear.None, true);

            doll = ariel;
            dollWear = arWear;
            prefix = 'ar_'
        }
        else if (curGirl == 2)
        {
            game.add.tween(cindy).to({ alpha: 1 }, Phaser.Timer.SECOND * .3, Phaser.Easing.Linear.None, true);

            doll = cindy;
            dollWear = ciWear;
            prefix = 'ci_'
        }
        else if (curGirl == 3)
        {
            game.add.tween(elza).to({ alpha: 1 }, Phaser.Timer.SECOND * .3, Phaser.Easing.Linear.None, true);

            doll = elza;
            dollWear = elWear;
            prefix = 'el_'
        }

        game.time.events.add(Phaser.Timer.SECOND *  .6, this.onDoll, this);
    },

    onDoll: function()
    {
        animating = false;
    },

    onTool: function(sprite)
    {
        if (sprite.name == 'hr_btn')
        {
            if (doll == ariel)
            {
                hr1++;

                if (hr1 > 4) hr1 = 1;

                dollWear.hair.loadTexture('ar_hh_' + hr1);
                dollWear.hair_b.loadTexture('ar_hh_b_' + hr1);

                d1 = true;
            }
            if (doll == cindy)
            {
                hr2++;

                if (hr2 > 4) hr2 = 1;

                dollWear.hair.loadTexture('ci_hh_' + hr2);
                dollWear.hair_b.loadTexture('ci_hh_b_' + hr2);

                d2 = true;
            }
            if (doll == elza)
            {
                hr3++;

                if (hr3 > 4) hr3 = 1;

                dollWear.hair.loadTexture('el_hh_' + hr3);
                dollWear.hair_b.loadTexture('el_hh_b_' + hr3);

                d3 = true;
            }
        }

        if (sprite.name == 'sh_btn')
        {
            if (doll == ariel)
            {
                sh1++;

                if (sh1 > 4) sh1 = 0;

                dollWear.shad.loadTexture('ar_ss_' + sh1);

                d1 = true;
            }
            if (doll == cindy)
            {
                sh2++;

                if (sh2 > 4) sh2 = 0;

                dollWear.shad.loadTexture('ci_ss_' + sh2);

                d2 = true;
            }
            if (doll == elza)
            {
                sh3++;

                if (sh3 > 4) sh3 = 0;

                dollWear.shad.loadTexture('el_ss_' + sh3);

                d3 = true;
            }
        }

        if (sprite.name == 'rs_btn')
        {
            if (doll == ariel)
            {
                rs1++;

                if (rs1 > 4) rs1 = 0;

                dollWear.res.loadTexture('ar_rr_' + rs1);

                d1 = true;
            }
            if (doll == cindy)
            {
                rs2++;

                if (rs2 > 4) rs2 = 0;

                dollWear.res.loadTexture('ci_rr_' + rs2);

                d2 = true;
            }
            if (doll == elza)
            {
                rs3++;

                if (rs3 > 4) rs3 = 0;

                dollWear.res.loadTexture('el_rr_' + rs3);

                d3 = true;
            }
        }

        if (sprite.name == 'lp_btn')
        {
            if (doll == ariel)
            {
                lp1++;

                if (lp1 > 4) lp1 = 0;

                dollWear.lip.loadTexture('ar_ll_' + lp1);

                d1 = true;
            }
            if (doll == cindy)
            {
                lp2++;

                if (lp2 > 4) lp2 = 0;

                dollWear.lip.loadTexture('ci_ll_' + lp2);

                d2 = true;
            }
            if (doll == elza)
            {
                lp3++;

                if (lp3 > 4) lp3 = 0;

                dollWear.lip.loadTexture('el_ll_' + lp3);

                d3 = true;
            }
        }

        if (d1 && d2 && d3) play.visible = true;
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

    next: function () 
    {
        game.time.events.removeAll();
        game.tweens.removeAll();

        console.log({'ar': hr1, 'cin': hr2, 'el': gr3});

        game.state.start('Dress');
    }

};