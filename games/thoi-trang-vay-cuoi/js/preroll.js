var complete, btn1, btn2, btn3, btn4, btn5, btn6, i, text, button, path, suffix, cache,
    spriterLoader, spriterFile, spriterData, _spriterGroup, crownEmitter, glowEmitter, hower, preloadBack, preloadBar,
    gameId, domain, publisher, hr1, hr2, hr3, rs1, rs2, rs3, sh1, sh2, sh3, lp1, lp2, lp3;

var Preroll = 
{
    init : function() {
        var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;

        var loc = getLocation(url);

        domain = "http://www.mycutegames.com";
        publisher = loc.hostname;
        gameId = "cinderellas_bridal_fashion_collection";

        state = 0;

        selectedModels = [];

        complete = false;
        cache = false;
        hower = false;

        inited = false;

        counter = 0;

        ad1 = false;
        ad2 = false;
        ad3 = false;

        mode = 1;

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
    },

    onScaleOver2: function(sprite)
    {
        sprite.filters =
            [
                new GlowFilter(
                    960,
                    720,
                    parseFloat(10),
                    parseFloat(3),
                    parseFloat(0),
                    parseInt(0xffffff),
                    parseFloat(0.1)
                )
            ];
    },

    onScaleOut2: function(sprite)
    {
        sprite.filters = null;
    },
    
    preload : function() 
    {
        game.stage.disableVisibilityChange = true;

        game.add.sprite(0, 0,'preroll_bg');

        crownEmitter = game.add.emitter(0, 0, 100);

        crownEmitter.makeParticles("preroll", 'particle_crown.png');
        crownEmitter.setRotation(-50, 50);
        crownEmitter.setAlpha(1, 0.3, 4000);
        crownEmitter.gravity = -10;
        crownEmitter.minParticleScale = 0.5;
        crownEmitter.maxParticleScale = 1;
        crownEmitter.x = 500;
        crownEmitter.y = 100;

        spriterLoader = new Spriter.Loader();
        spriterFile = new Spriter.SpriterJSON(game.cache.getJSON("dollJSON"));
        spriterData = spriterLoader.load(spriterFile);

        _spriterGroup = new Spriter.SpriterGroup(game, spriterData, "preroll", "girl", 0, 10);
        _spriterGroup.position.setTo(200, 720 - _spriterGroup.height);

        game.add.existing(_spriterGroup);

        _spriterGroup.playAnimationById(0);

        _spriterGroup.onLoop.add(function (data)
        {
            _spriterGroup.playAnimationById(0);
        }, this);

        _spriterGroup.onEvent.add(function (data, event)
        {
            crownEmitter.start(true, 4000, null, 25);
        }, this);

        btn1 = game.add.sprite(160, 180, "preroll", "dressup.png");
        btn1.anchor.setTo(0.5, 0.5);

        btn1.inputEnabled = true;
        btn1.input.pixelPerfectClick = btn1.input.pixelPerfectOver = true;
        btn1.input.pixelPerfectAlpha = 10;
        btn1.input.useHandCursor = true;
        btn1.events.onInputOver.add(this.onScaleOver, this);
        btn1.events.onInputOut.add(this.onScaleOut, this);
        btn1.events.onInputDown.add(this.goLink2, this);

        btn2 = game.add.sprite(775, 175, "preroll", "princess.png");
        btn2.anchor.setTo(0.5, 0.5);

        btn2.inputEnabled = true;
        btn2.input.pixelPerfectClick = btn2.input.pixelPerfectOver = true;
        btn2.input.pixelPerfectAlpha = 10;
        btn2.input.useHandCursor = true;
        btn2.events.onInputOver.add(this.onScaleOver, this);
        btn2.events.onInputOut.add(this.onScaleOut, this);
        btn2.events.onInputDown.add(this.goLink2, this);

        btn3 = game.add.sprite(800, 430, "preroll", "makeup.png");
        btn3.anchor.setTo(0.5, 0.5);

        btn3.inputEnabled = true;
        btn3.input.pixelPerfectClick = btn3.input.pixelPerfectOver = true;
        btn3.input.pixelPerfectAlpha = 10;
        btn3.input.useHandCursor = true;
        btn3.events.onInputOver.add(this.onScaleOver, this);
        btn3.events.onInputOut.add(this.onScaleOut, this);
        btn3.events.onInputDown.add(this.goLink2, this);

        btn4 = game.add.sprite(155, 460, "preroll", "hair.png");
        btn4.anchor.setTo(0.5, 0.5);

        btn4.inputEnabled = true;
        btn4.input.pixelPerfectClick = btn4.input.pixelPerfectOver = true;
        btn4.input.pixelPerfectAlpha = 10;
        btn4.input.useHandCursor = true;
        btn4.events.onInputOver.add(this.onScaleOver, this);
        btn4.events.onInputOut.add(this.onScaleOut, this);
        btn4.events.onInputDown.add(this.goLink2, this);

        btn6 = game.add.sprite(960 / 2, 415, "preroll", "logo.png");
        btn6.anchor.setTo(0.5, 0.5);

        btn6.inputEnabled = true;
        btn6.input.pixelPerfectClick = btn6.input.pixelPerfectOver = true;
        btn6.input.pixelPerfectAlpha = 10;
        btn6.input.useHandCursor = true;
        btn6.events.onInputOver.add(this.onScaleOver, this);
        btn6.events.onInputOut.add(this.onScaleOut, this);
        btn6.events.onInputDown.add(this.goLink, this);

        this.shakeItem(btn1, 0 * 1500);
        this.shakeItem(btn2, 1 * 1500);
        this.shakeItem(btn3, 2 * 1500);
        this.shakeItem(btn4, 3 * 1500);

        glowEmitter = game.add.emitter(0, 0, 100);
        //this.add(this.glowEmitter);

        glowEmitter.makeParticles("preroll", 'particle_glow.png');
        glowEmitter.setAlpha(1, 0.3, 3000);
        glowEmitter.gravity = -10;
        glowEmitter.minParticleScale = 0.5;
        glowEmitter.maxParticleScale = 1;

        preloadBack = this.add.image(0, 580, 'preroll', 'progressbar_1.png');

        preloadBar = this.add.sprite(this.game.world.centerX - 620 / 2, 579.5, 'preroll', 'progressbar_2.png');
        this.load.setPreloadSprite(preloadBar);
        preloadBar.x = preloadBack.x = this.game.world.centerX - preloadBack.width / 2;

        button = game.add.button(205 * 1.5, 372 * 1.5, 'play', this.loadComplete, this, 0, 1, 0);

        button.anchor.setTo(0.5);

        button.x = 205 * 1.5 + button.width / 2;
        button.y = 372 * 1.5 + button.height / 2;

        button.scale.x = 1.1;
        button.scale.y = 1.1;

        button.visible = false;

        button.events.onInputOver.add(this.onScaleOver3, this);
        button.events.onInputOut.add(this.onScaleOut3, this);

        game.load.audio('track', ['assets/music/track.mp3']);
        game.load.bitmapFont('font', path + 'font.png', path + 'font.fnt');

        //// GUI

        game.load.image('logo', path + 'logo.png' + suffix);//_sheet.png', 138, 98);
        //game.load.spritesheet('play', path + 'play_sheet.png' + suffix, 117, 113);
        game.load.spritesheet('music', path + 'music_sheet.png' + suffix, 165, 132);
        game.load.spritesheet('photo', path + 'photo_sheet.png' + suffix, 165, 132);
        game.load.spritesheet('music_off', path + 'music_off_sheet.png' + suffix, 165, 132);
        game.load.spritesheet('more', path + 'more_sheet.png' + suffix, 165, 132);
        game.load.spritesheet('done', path + 'done_sheet.png' + suffix, 165, 132);
        game.load.spritesheet('next', path + 'next_sheet.png' + suffix, 173, 132);
        game.load.spritesheet('l_arr', path + 'l_arr_sheet.png' + suffix, 165, 132);
        game.load.spritesheet('r_arr', path + 'r_arr_sheet.png' + suffix, 165, 132);
        //game.load.spritesheet('rb', path + 'rb.png' + suffix, 127, 115);
        //game.load.spritesheet('lb', path + 'lb.png' + suffix, 127, 115);
        game.load.spritesheet('replay', path + 'replay_sheet.png' + suffix, 165, 132);
        game.load.image('dummy', path + 'dummy.png');
        game.load.image('skip', path + 'skip.png');
        game.load.image('go', path + 'go.png');
        game.load.image('again', path + 'again.png');

        //// START

        game.load.image('bg', path + 'start/bg.jpg' + suffix);
        game.load.image('fader', path + 'start/fader.jpg' + suffix);
        game.load.image('gr_1', path + 'start/gr_1.png' + suffix);
        game.load.image('gr_2', path + 'start/gr_2.png' + suffix);
        game.load.image('gr_3', path + 'start/gr_3.png' + suffix);
        game.load.image('title', path + 'start/title.png' + suffix);
        game.load.image('more_e', path + 'start/more_e.png' + suffix);
        game.load.image('more_e_f', path + 'start/more_e_f.png' + suffix);
        game.load.spritesheet('leps', path + 'start/leps.png' + suffix, 75, 75);

        //// COMIX

        game.load.image('bg2', path + 'comix/bg2.jpg' + suffix);
        game.load.image('gr_4', path + 'comix/gr_4.png' + suffix);
        game.load.image('cl_1', path + 'comix/cl_1.png' + suffix);
        game.load.image('cl_2', path + 'comix/cl_2.png' + suffix);

        //// MAKE

        game.load.image('bg3', path + 'make/bg3.jpg' + suffix);
        game.load.image('fg', path + 'make/fg.png' + suffix);
        game.load.image('arr', path + 'make/arr.png' + suffix);
        game.load.image('hr_btn', path + 'make/hr_btn.png' + suffix);
        game.load.image('lp_btn', path + 'make/lp_btn.png' + suffix);
        game.load.image('rs_btn', path + 'make/rs_btn.png' + suffix);
        game.load.image('sh_btn', path + 'make/sh_btn.png' + suffix);

        game.load.image('ar_bd', path + 'make/ariel/bd.png' + suffix);
        game.load.image('ar_brw', path + 'make/ariel/brw.png' + suffix);
        game.load.image('ar_glz', path + 'make/ariel/glz.png' + suffix);
        game.load.image('ar_hh_1', path + 'make/ariel/hh_1.png' + suffix);
        game.load.image('ar_hh_2', path + 'make/ariel/hh_2.png' + suffix);
        game.load.image('ar_hh_3', path + 'make/ariel/hh_3.png' + suffix);
        game.load.image('ar_hh_4', path + 'make/ariel/hh_4.png' + suffix);
        game.load.image('ar_hh_b_1', path + 'make/ariel/hh_b_1.png' + suffix);
        game.load.image('ar_hh_b_2', path + 'make/ariel/hh_b_2.png' + suffix);
        game.load.image('ar_hh_b_3', path + 'dummy.png' + suffix);
        game.load.image('ar_hh_b_4', path + 'make/ariel/hh_b_4.png' + suffix);
        game.load.image('ar_ll_0', path + 'make/ariel/ll_0.png' + suffix);
        game.load.image('ar_ll_1', path + 'make/ariel/ll_1.png' + suffix);
        game.load.image('ar_ll_2', path + 'make/ariel/ll_2.png' + suffix);
        game.load.image('ar_ll_3', path + 'make/ariel/ll_3.png' + suffix);
        game.load.image('ar_ll_4', path + 'make/ariel/ll_4.png' + suffix);
        game.load.image('ar_rr_0', path + 'make/ariel/rr_0.png' + suffix);
        game.load.image('ar_rr_1', path + 'make/ariel/rr_1.png' + suffix);
        game.load.image('ar_rr_2', path + 'make/ariel/rr_2.png' + suffix);
        game.load.image('ar_rr_3', path + 'make/ariel/rr_3.png' + suffix);
        game.load.image('ar_rr_4', path + 'make/ariel/rr_4.png' + suffix);
        game.load.image('ar_ss_0', path + 'make/ariel/ss_0.png' + suffix);
        game.load.image('ar_ss_1', path + 'make/ariel/ss_1.png' + suffix);
        game.load.image('ar_ss_2', path + 'make/ariel/ss_2.png' + suffix);
        game.load.image('ar_ss_3', path + 'make/ariel/ss_3.png' + suffix);
        game.load.image('ar_ss_4', path + 'make/ariel/ss_4.png' + suffix);

        game.load.image('ci_bd', path + 'make/cindy/bd.png' + suffix);
        game.load.image('ci_glz', path + 'make/cindy/glz.png' + suffix);
        game.load.image('ci_hh_1', path + 'make/cindy/hh_1.png' + suffix);
        game.load.image('ci_hh_2', path + 'make/cindy/hh_2.png' + suffix);
        game.load.image('ci_hh_3', path + 'make/cindy/hh_3.png' + suffix);
        game.load.image('ci_hh_4', path + 'make/cindy/hh_4.png' + suffix);
        game.load.image('ci_hh_b_1', path + 'make/cindy/hh_b_1.png' + suffix);
        game.load.image('ci_hh_b_2', path + 'make/cindy/hh_b_2.png' + suffix);
        game.load.image('ci_hh_b_3', path + 'make/cindy/hh_b_3.png' + suffix);
        game.load.image('ci_hh_b_4', path + 'make/cindy/hh_b_4.png' + suffix);
        game.load.image('ci_ll_0', path + 'make/cindy/ll_0.png' + suffix);
        game.load.image('ci_ll_1', path + 'make/cindy/ll_1.png' + suffix);
        game.load.image('ci_ll_2', path + 'make/cindy/ll_2.png' + suffix);
        game.load.image('ci_ll_3', path + 'make/cindy/ll_3.png' + suffix);
        game.load.image('ci_ll_4', path + 'make/cindy/ll_4.png' + suffix);
        game.load.image('ci_rr_0', path + 'make/cindy/rr_0.png' + suffix);
        game.load.image('ci_rr_1', path + 'make/cindy/rr_1.png' + suffix);
        game.load.image('ci_rr_2', path + 'make/cindy/rr_2.png' + suffix);
        game.load.image('ci_rr_3', path + 'make/cindy/rr_3.png' + suffix);
        game.load.image('ci_rr_4', path + 'make/cindy/rr_4.png' + suffix);
        game.load.image('ci_ss_0', path + 'make/cindy/ss_0.png' + suffix);
        game.load.image('ci_ss_1', path + 'make/cindy/ss_1.png' + suffix);
        game.load.image('ci_ss_2', path + 'make/cindy/ss_2.png' + suffix);
        game.load.image('ci_ss_3', path + 'make/cindy/ss_3.png' + suffix);
        game.load.image('ci_ss_4', path + 'make/cindy/ss_4.png' + suffix);

        game.load.image('el_bd', path + 'make/elza/bd.png' + suffix);
        game.load.image('el_glz', path + 'make/elza/glz.png' + suffix);
        game.load.image('el_hh_1', path + 'make/elza/hh_1.png' + suffix);
        game.load.image('el_hh_2', path + 'make/elza/hh_2.png' + suffix);
        game.load.image('el_hh_3', path + 'make/elza/hh_3.png' + suffix);
        game.load.image('el_hh_4', path + 'make/elza/hh_4.png' + suffix);
        game.load.image('el_hh_b_1', path + 'dummy.png' + suffix);
        game.load.image('el_hh_b_2', path + 'make/elza/hh_b_2.png' + suffix);
        game.load.image('el_hh_b_3', path + 'make/elza/hh_b_3.png' + suffix);
        game.load.image('el_hh_b_4', path + 'dummy.png' + suffix);
        game.load.image('el_ll_0', path + 'make/elza/ll_0.png' + suffix);
        game.load.image('el_ll_1', path + 'make/elza/ll_1.png' + suffix);
        game.load.image('el_ll_2', path + 'make/elza/ll_2.png' + suffix);
        game.load.image('el_ll_3', path + 'make/elza/ll_3.png' + suffix);
        game.load.image('el_ll_4', path + 'make/elza/ll_4.png' + suffix);
        game.load.image('el_rr_0', path + 'make/elza/rr_0.png' + suffix);
        game.load.image('el_rr_1', path + 'make/elza/rr_1.png' + suffix);
        game.load.image('el_rr_2', path + 'make/elza/rr_2.png' + suffix);
        game.load.image('el_rr_3', path + 'make/elza/rr_3.png' + suffix);
        game.load.image('el_rr_4', path + 'make/elza/rr_4.png' + suffix);
        game.load.image('el_ss_0', path + 'make/elza/ss_0.png' + suffix);
        game.load.image('el_ss_1', path + 'make/elza/ss_1.png' + suffix);
        game.load.image('el_ss_2', path + 'make/elza/ss_2.png' + suffix);
        game.load.image('el_ss_3', path + 'make/elza/ss_3.png' + suffix);
        game.load.image('el_ss_4', path + 'make/elza/ss_4.png' + suffix);

        //// DRESS

        game.load.image('bg4', path + 'dress/bg4.jpg' + suffix);
        game.load.image('ar_btn', path + 'dress/ar_btn.png' + suffix);
        game.load.image('el_btn', path + 'dress/el_btn.png' + suffix);
        game.load.image('cin_btn', path + 'dress/cin_btn.png' + suffix);
        game.load.image('lb', path + 'dress/lb.png' + suffix);
        game.load.image('rb', path + 'dress/rb.png' + suffix);
        game.load.image('shelf1', path + 'dress/shelf1.png' + suffix);
        game.load.image('shelf2', path + 'dress/shelf2.png' + suffix);
        game.load.image('mmmm', path + 'dress/mmmm.png' + suffix);
        game.load.image('mmmm2', path + 'dress/mmmm2.png' + suffix);

        game.load.image('bag_1', path + 'dress/bag_1.png' + suffix);
        game.load.image('bag_2', path + 'dress/bag_2.png' + suffix);
        game.load.image('bag_3', path + 'dress/bag_3.png' + suffix);
        game.load.image('dress_1', path + 'dress/dress_1.png' + suffix);
        game.load.image('dress_2', path + 'dress/dress_2.png' + suffix);
        game.load.image('dress_3', path + 'dress/dress_3.png' + suffix);
        game.load.image('dress_4', path + 'dress/dress_4.png' + suffix);
        game.load.image('dress_5', path + 'dress/dress_5.png' + suffix);
        game.load.image('dress_6', path + 'dress/dress_6.png' + suffix);
        game.load.image('dress_7', path + 'dress/dress_7.png' + suffix);
        game.load.image('dress_8', path + 'dress/dress_8.png' + suffix);
        game.load.image('dress_9', path + 'dress/dress_9.png' + suffix);
        game.load.image('dress_10', path + 'dress/dress_10.png' + suffix);
        game.load.image('dress_11', path + 'dress/dress_11.png' + suffix);
        game.load.image('dress_12', path + 'dress/dress_12.png' + suffix);
        game.load.image('dress_13', path + 'dress/dress_13.png' + suffix);
        game.load.image('dress_14', path + 'dress/dress_14.png' + suffix);
        game.load.image('dress_15', path + 'dress/dress_15.png' + suffix);
        game.load.image('fata_1', path + 'dress/fata_1.png' + suffix);
        game.load.image('fata_2', path + 'dress/fata_2.png' + suffix);
        game.load.image('fata_3', path + 'dress/fata_3.png' + suffix);
        game.load.image('fata_4', path + 'dress/fata_4.png' + suffix);
        game.load.image('fata_5', path + 'dress/fata_5.png' + suffix);
        game.load.image('glove_1', path + 'dress/glove_1.png' + suffix);
        game.load.image('glove_2', path + 'dress/glove_2.png' + suffix);
        game.load.image('hat_1', path + 'dress/hat_1.png' + suffix);
        game.load.image('hat_2', path + 'dress/hat_2.png' + suffix);
        game.load.image('hat_3', path + 'dress/hat_3.png' + suffix);
        game.load.image('jew_1', path + 'dress/jew_1.png' + suffix);
        game.load.image('jew_2', path + 'dress/jew_2.png' + suffix);
        game.load.image('shoe_1', path + 'dress/shoe_1.png' + suffix);
        game.load.image('shoe_2', path + 'dress/shoe_2.png' + suffix);
        game.load.image('shoe_3', path + 'dress/shoe_3.png' + suffix);
        game.load.image('shoe_4', path + 'dress/shoe_4.png' + suffix);
        game.load.image('shoe_5', path + 'dress/shoe_5.png' + suffix);
        game.load.image('shoe_6', path + 'dress/shoe_6.png' + suffix);
        game.load.image('shoe_7', path + 'dress/shoe_7.png' + suffix);
        game.load.image('shoe_8', path + 'dress/shoe_8.png' + suffix);
        game.load.image('shoe_9', path + 'dress/shoe_9.png' + suffix);
        game.load.image('shoe_10', path + 'dress/shoe_10.png' + suffix);

        game.load.image('ar_bg_1', path + 'dress/ariel/bg_1.png' + suffix);
        game.load.image('ar_bg_2', path + 'dress/ariel/bg_2.png' + suffix);
        game.load.image('ar_bg_3', path + 'dress/ariel/bg_3.png' + suffix);
        game.load.image('ar_bg_b_1', path + 'dummy.png' + suffix);
        game.load.image('ar_bg_b_3', path + 'dress/ariel/bg_b_2.png' + suffix);
        game.load.image('ar_bg_b_2', path + 'dummy.png' + suffix);
        game.load.image('ar_body', path + 'dress/ariel/body.png' + suffix);
        game.load.image('ar_br', path + 'dress/ariel/br.png' + suffix);
        game.load.image('ar_d_0', path + 'dress/ariel/d_0.png' + suffix);
        game.load.image('ar_d_1', path + 'dress/ariel/d_1.png' + suffix);
        game.load.image('ar_d_2', path + 'dress/ariel/d_2.png' + suffix);
        game.load.image('ar_d_3', path + 'dress/ariel/d_3.png' + suffix);
        game.load.image('ar_d_4', path + 'dress/ariel/d_4.png' + suffix);
        game.load.image('ar_d_5', path + 'dress/ariel/d_5.png' + suffix);
        game.load.image('ar_d_6', path + 'dress/ariel/d_6.png' + suffix);
        game.load.image('ar_d_7', path + 'dress/ariel/d_7.png' + suffix);
        game.load.image('ar_d_8', path + 'dress/ariel/d_8.png' + suffix);
        game.load.image('ar_d_9', path + 'dress/ariel/d_9.png' + suffix);
        game.load.image('ar_d_10', path + 'dress/ariel/d_10.png' + suffix);
        game.load.image('ar_d_11', path + 'dress/ariel/d_11.png' + suffix);
        game.load.image('ar_d_12', path + 'dress/ariel/d_12.png' + suffix);
        game.load.image('ar_d_13', path + 'dress/ariel/d_13.png' + suffix);
        game.load.image('ar_d_14', path + 'dress/ariel/d_14.png' + suffix);
        game.load.image('ar_d_15', path + 'dress/ariel/d_15.png' + suffix);
        game.load.image('ar_eye', path + 'dress/ariel/eye.png' + suffix);
        game.load.image('ar_ft_1', path + 'dress/ariel/ft_b_1.png' + suffix);
        game.load.image('ar_ft_2', path + 'dress/ariel/ft_b_2.png' + suffix);
        game.load.image('ar_ft_3', path + 'dress/ariel/ft_b_3.png' + suffix);
        game.load.image('ar_ft_4', path + 'dress/ariel/ft_b_4.png' + suffix);
        game.load.image('ar_ft_5', path + 'dress/ariel/ft_b_5.png' + suffix);
        game.load.image('ar_gl_1', path + 'dress/ariel/gl_1.png' + suffix);
        game.load.image('ar_gl_2', path + 'dress/ariel/gl_2.png' + suffix);
        game.load.image('ar_gl_b_1', path + 'dress/ariel/gl_b_1.png' + suffix);
        game.load.image('ar_gl_b_2', path + 'dress/ariel/gl_b_2.png' + suffix);
        game.load.image('ar_h_1', path + 'dress/ariel/h_1.png' + suffix);
        game.load.image('ar_h_2', path + 'dress/ariel/h_2.png' + suffix);
        game.load.image('ar_h_3', path + 'dress/ariel/h_3.png' + suffix);
        game.load.image('ar_h_4', path + 'dress/ariel/h_4.png' + suffix);
        game.load.image('ar_h_b_1', path + 'dress/ariel/h_b_1.png' + suffix);
        game.load.image('ar_h_b_2', path + 'dress/ariel/h_b_2.png' + suffix);
        game.load.image('ar_h_b_3', path + 'dummy.png' + suffix);
        game.load.image('ar_h_b_4', path + 'dress/ariel/h_b_4.png' + suffix);
        game.load.image('ar_hand', path + 'dress/ariel/hand.png' + suffix);
        game.load.image('ar_head', path + 'dress/ariel/head.png' + suffix);
        game.load.image('ar_ht_1', path + 'dress/ariel/ht_1.png' + suffix);
        game.load.image('ar_ht_2', path + 'dress/ariel/ht_2.png' + suffix);
        game.load.image('ar_ht_3', path + 'dress/ariel/ht_3.png' + suffix);
        game.load.image('ar_j_1', path + 'dress/ariel/j_1.png' + suffix);
        game.load.image('ar_j_2', path + 'dress/ariel/j_2.png' + suffix);
        game.load.image('ar_lp_0', path + 'dress/ariel/lp_0.png' + suffix);
        game.load.image('ar_lp_1', path + 'dress/ariel/lp_1.png' + suffix);
        game.load.image('ar_lp_2', path + 'dress/ariel/lp_2.png' + suffix);
        game.load.image('ar_lp_3', path + 'dress/ariel/lp_3.png' + suffix);
        game.load.image('ar_lp_4', path + 'dress/ariel/lp_4.png' + suffix);
        game.load.image('ar_rs_0', path + 'dress/ariel/rs_0.png' + suffix);
        game.load.image('ar_rs_1', path + 'dress/ariel/rs_1.png' + suffix);
        game.load.image('ar_rs_2', path + 'dress/ariel/rs_2.png' + suffix);
        game.load.image('ar_rs_3', path + 'dress/ariel/rs_3.png' + suffix);
        game.load.image('ar_rs_4', path + 'dress/ariel/rs_4.png' + suffix);
        game.load.image('ar_s_1', path + 'dress/ariel/s_1.png' + suffix);
        game.load.image('ar_s_2', path + 'dress/ariel/s_2.png' + suffix);
        game.load.image('ar_s_3', path + 'dress/ariel/s_3.png' + suffix);
        game.load.image('ar_s_4', path + 'dress/ariel/s_4.png' + suffix);
        game.load.image('ar_s_5', path + 'dress/ariel/s_5.png' + suffix);
        game.load.image('ar_s_6', path + 'dress/ariel/s_6.png' + suffix);
        game.load.image('ar_s_7', path + 'dress/ariel/s_7.png' + suffix);
        game.load.image('ar_s_8', path + 'dress/ariel/s_8.png' + suffix);
        game.load.image('ar_s_9', path + 'dress/ariel/s_9.png' + suffix);
        game.load.image('ar_s_10', path + 'dress/ariel/s_10.png' + suffix);
        game.load.image('ar_sh_0', path + 'dress/ariel/sh_0.png' + suffix);
        game.load.image('ar_sh_1', path + 'dress/ariel/sh_1.png' + suffix);
        game.load.image('ar_sh_2', path + 'dress/ariel/sh_2.png' + suffix);
        game.load.image('ar_sh_3', path + 'dress/ariel/sh_3.png' + suffix);
        game.load.image('ar_sh_4', path + 'dress/ariel/sh_4.png' + suffix);


        game.load.image('ci_bg_1', path + 'dress/cindy/bg_1.png' + suffix);
        game.load.image('ci_bg_3', path + 'dress/cindy/bg_2.png' + suffix);
        game.load.image('ci_bg_2', path + 'dress/cindy/bg_3.png' + suffix);
        game.load.image('ci_bg_b_1', path + 'dummy.png' + suffix);
        game.load.image('ci_bg_b_3', path + 'dress/cindy/bg_b_2.png' + suffix);
        game.load.image('ci_bg_b_2', path + 'dummy.png' + suffix);
        game.load.image('ci_body', path + 'dress/cindy/body.png' + suffix);
        game.load.image('ci_d_0', path + 'dress/cindy/d_0.png' + suffix);
        game.load.image('ci_d_1', path + 'dress/cindy/d_1.png' + suffix);
        game.load.image('ci_d_2', path + 'dress/cindy/d_2.png' + suffix);
        game.load.image('ci_d_3', path + 'dress/cindy/d_3.png' + suffix);
        game.load.image('ci_d_4', path + 'dress/cindy/d_4.png' + suffix);
        game.load.image('ci_d_5', path + 'dress/cindy/d_5.png' + suffix);
        game.load.image('ci_d_6', path + 'dress/cindy/d_6.png' + suffix);
        game.load.image('ci_d_7', path + 'dress/cindy/d_7.png' + suffix);
        game.load.image('ci_d_8', path + 'dress/cindy/d_8.png' + suffix);
        game.load.image('ci_d_9', path + 'dress/cindy/d_9.png' + suffix);
        game.load.image('ci_d_10', path + 'dress/cindy/d_10.png' + suffix);
        game.load.image('ci_d_11', path + 'dress/cindy/d_11.png' + suffix);
        game.load.image('ci_d_12', path + 'dress/cindy/d_12.png' + suffix);
        game.load.image('ci_d_13', path + 'dress/cindy/d_13.png' + suffix);
        game.load.image('ci_d_14', path + 'dress/cindy/d_14.png' + suffix);
        game.load.image('ci_d_15', path + 'dress/cindy/d_15.png' + suffix);
        game.load.image('ci_eye', path + 'dress/cindy/eye.png' + suffix);
        game.load.image('ci_ft_1', path + 'dress/cindy/ft_b_1.png' + suffix);
        game.load.image('ci_ft_2', path + 'dress/cindy/ft_b_2.png' + suffix);
        game.load.image('ci_ft_3', path + 'dress/cindy/ft_b_3.png' + suffix);
        game.load.image('ci_ft_4', path + 'dress/cindy/ft_b_4.png' + suffix);
        game.load.image('ci_ft_5', path + 'dress/cindy/ft_b_5.png' + suffix);
        game.load.image('ci_gl_1', path + 'dummy.png' + suffix);
        game.load.image('ci_gl_2', path + 'dress/cindy/gl_2.png' + suffix);
        game.load.image('ci_gl_b_1', path + 'dress/cindy/gl_b_1.png' + suffix);
        game.load.image('ci_gl_b_2', path + 'dummy.png' + suffix);
        game.load.image('ci_h_1', path + 'dress/cindy/h_1.png' + suffix);
        game.load.image('ci_h_2', path + 'dress/cindy/h_2.png' + suffix);
        game.load.image('ci_h_3', path + 'dress/cindy/h_3.png' + suffix);
        game.load.image('ci_h_4', path + 'dress/cindy/h_4.png' + suffix);
        game.load.image('ci_h_b_1', path + 'dress/cindy/h_b_1.png' + suffix);
        game.load.image('ci_h_b_2', path + 'dress/cindy/h_b_2.png' + suffix);
        game.load.image('ci_h_b_3', path + 'dress/cindy/h_b_3.png' + suffix);
        game.load.image('ci_h_b_4', path + 'dress/cindy/h_b_4.png' + suffix);
        game.load.image('ci_head', path + 'dress/cindy/head.png' + suffix);
        game.load.image('ci_ht_1', path + 'dress/cindy/ht_1.png' + suffix);
        game.load.image('ci_ht_2', path + 'dress/cindy/ht_2.png' + suffix);
        game.load.image('ci_ht_3', path + 'dress/cindy/ht_3.png' + suffix);
        game.load.image('ci_j_1', path + 'dress/cindy/j_1.png' + suffix);
        game.load.image('ci_j_2', path + 'dress/cindy/j_2.png' + suffix);
        game.load.image('ci_lp_0', path + 'dress/cindy/lp_0.png' + suffix);
        game.load.image('ci_lp_1', path + 'dress/cindy/lp_1.png' + suffix);
        game.load.image('ci_lp_2', path + 'dress/cindy/lp_2.png' + suffix);
        game.load.image('ci_lp_3', path + 'dress/cindy/lp_3.png' + suffix);
        game.load.image('ci_lp_4', path + 'dress/cindy/lp_4.png' + suffix);
        game.load.image('ci_rs_0', path + 'dress/cindy/rs_0.png' + suffix);
        game.load.image('ci_rs_1', path + 'dress/cindy/rs_1.png' + suffix);
        game.load.image('ci_rs_2', path + 'dress/cindy/rs_2.png' + suffix);
        game.load.image('ci_rs_3', path + 'dress/cindy/rs_3.png' + suffix);
        game.load.image('ci_rs_4', path + 'dress/cindy/rs_4.png' + suffix);
        game.load.image('ci_s_1', path + 'dress/cindy/s_1.png' + suffix);
        game.load.image('ci_s_2', path + 'dress/cindy/s_2.png' + suffix);
        game.load.image('ci_s_3', path + 'dress/cindy/s_3.png' + suffix);
        game.load.image('ci_s_4', path + 'dress/cindy/s_4.png' + suffix);
        game.load.image('ci_s_5', path + 'dress/cindy/s_5.png' + suffix);
        game.load.image('ci_s_6', path + 'dress/cindy/s_6.png' + suffix);
        game.load.image('ci_s_7', path + 'dress/cindy/s_7.png' + suffix);
        game.load.image('ci_s_8', path + 'dress/cindy/s_8.png' + suffix);
        game.load.image('ci_s_9', path + 'dress/cindy/s_9.png' + suffix);
        game.load.image('ci_s_10', path + 'dress/cindy/s_10.png' + suffix);
        game.load.image('ci_sh_0', path + 'dress/cindy/sh_0.png' + suffix);
        game.load.image('ci_sh_1', path + 'dress/cindy/sh_1.png' + suffix);
        game.load.image('ci_sh_2', path + 'dress/cindy/sh_2.png' + suffix);
        game.load.image('ci_sh_3', path + 'dress/cindy/sh_3.png' + suffix);
        game.load.image('ci_sh_4', path + 'dress/cindy/sh_4.png' + suffix);


        game.load.image('el_bg_1', path + 'dress/elza/bg_1.png' + suffix);
        game.load.image('el_bg_3', path + 'dress/elza/bg_2.png' + suffix);
        game.load.image('el_bg_2', path + 'dress/elza/bg_3.png' + suffix);
        game.load.image('el_bg_b_1', path + 'dummy.png' + suffix);
        game.load.image('el_bg_b_3', path + 'dress/elza/bg_b_2.png' + suffix);
        game.load.image('el_bg_b_2', path + 'dummy.png' + suffix);
        game.load.image('el_body', path + 'dress/elza/body.png' + suffix);
        game.load.image('el_d_0', path + 'dress/elza/d_0.png' + suffix);
        game.load.image('el_d_1', path + 'dress/elza/d_1.png' + suffix);
        game.load.image('el_d_2', path + 'dress/elza/d_2.png' + suffix);
        game.load.image('el_d_3', path + 'dress/elza/d_3.png' + suffix);
        game.load.image('el_d_4', path + 'dress/elza/d_4.png' + suffix);
        game.load.image('el_d_5', path + 'dress/elza/d_5.png' + suffix);
        game.load.image('el_d_6', path + 'dress/elza/d_6.png' + suffix);
        game.load.image('el_d_7', path + 'dress/elza/d_7.png' + suffix);
        game.load.image('el_d_8', path + 'dress/elza/d_8.png' + suffix);
        game.load.image('el_d_9', path + 'dress/elza/d_9.png' + suffix);
        game.load.image('el_d_10', path + 'dress/elza/d_10.png' + suffix);
        game.load.image('el_d_11', path + 'dress/elza/d_11.png' + suffix);
        game.load.image('el_d_12', path + 'dress/elza/d_12.png' + suffix);
        game.load.image('el_d_13', path + 'dress/elza/d_13.png' + suffix);
        game.load.image('el_d_14', path + 'dress/elza/d_14.png' + suffix);
        game.load.image('el_d_15', path + 'dress/elza/d_15.png' + suffix);
        game.load.image('el_eye', path + 'dress/elza/eye.png' + suffix);
        game.load.image('el_ft_1', path + 'dress/elza/ft_b_1.png' + suffix);
        game.load.image('el_ft_2', path + 'dress/elza/ft_b_2.png' + suffix);
        game.load.image('el_ft_3', path + 'dress/elza/ft_b_3.png' + suffix);
        game.load.image('el_ft_4', path + 'dress/elza/ft_b_4.png' + suffix);
        game.load.image('el_ft_5', path + 'dress/elza/ft_b_5.png' + suffix);
        game.load.image('el_gl_1', path + 'dummy.png' + suffix);
        game.load.image('el_gl_2', path + 'dress/elza/gl_2.png' + suffix);
        game.load.image('el_gl_b_1', path + 'dress/elza/gl_b_1.png' + suffix);
        game.load.image('el_gl_b_2', path + 'dress/elza/gl_b_2.png' + suffix);
        game.load.image('el_h_1', path + 'dress/elza/h_1.png' + suffix);
        game.load.image('el_h_2', path + 'dress/elza/h_2.png' + suffix);
        game.load.image('el_h_3', path + 'dress/elza/h_3.png' + suffix);
        game.load.image('el_h_4', path + 'dress/elza/h_4.png' + suffix);
        game.load.image('el_h_b_1', path + 'dummy.png' + suffix);
        game.load.image('el_h_b_2', path + 'dress/elza/h_b_2.png' + suffix);
        game.load.image('el_h_b_3', path + 'dress/elza/h_b_3.png' + suffix);
        game.load.image('el_h_b_4', path + 'dummy.png' + suffix);
        game.load.image('el_head', path + 'dress/elza/head.png' + suffix);
        game.load.image('el_ht_1', path + 'dress/elza/ht_1.png' + suffix);
        game.load.image('el_ht_2', path + 'dress/elza/ht_2.png' + suffix);
        game.load.image('el_ht_3', path + 'dress/elza/ht_3.png' + suffix);
        game.load.image('el_j_1', path + 'dress/elza/j_1.png' + suffix);
        game.load.image('el_j_2', path + 'dress/elza/j_2.png' + suffix);
        game.load.image('el_lp_0', path + 'dress/elza/lp_0.png' + suffix);
        game.load.image('el_lp_1', path + 'dress/elza/lp_1.png' + suffix);
        game.load.image('el_lp_2', path + 'dress/elza/lp_2.png' + suffix);
        game.load.image('el_lp_3', path + 'dress/elza/lp_3.png' + suffix);
        game.load.image('el_lp_4', path + 'dress/elza/lp_4.png' + suffix);
        game.load.image('el_rs_0', path + 'dress/elza/rs_0.png' + suffix);
        game.load.image('el_rs_1', path + 'dress/elza/rs_1.png' + suffix);
        game.load.image('el_rs_2', path + 'dress/elza/rs_2.png' + suffix);
        game.load.image('el_rs_3', path + 'dress/elza/rs_3.png' + suffix);
        game.load.image('el_rs_4', path + 'dress/elza/rs_4.png' + suffix);
        game.load.image('el_s_1', path + 'dress/elza/s_1.png' + suffix);
        game.load.image('el_s_2', path + 'dress/elza/s_2.png' + suffix);
        game.load.image('el_s_3', path + 'dress/elza/s_3.png' + suffix);
        game.load.image('el_s_4', path + 'dress/elza/s_4.png' + suffix);
        game.load.image('el_s_5', path + 'dress/elza/s_5.png' + suffix);
        game.load.image('el_s_6', path + 'dress/elza/s_6.png' + suffix);
        game.load.image('el_s_7', path + 'dress/elza/s_7.png' + suffix);
        game.load.image('el_s_8', path + 'dress/elza/s_8.png' + suffix);
        game.load.image('el_s_9', path + 'dress/elza/s_9.png' + suffix);
        game.load.image('el_s_10', path + 'dress/elza/s_10.png' + suffix);
        game.load.image('el_sh_0', path + 'dress/elza/sh_0.png' + suffix);
        game.load.image('el_sh_1', path + 'dress/elza/sh_1.png' + suffix);
        game.load.image('el_sh_2', path + 'dress/elza/sh_2.png' + suffix);
        game.load.image('el_sh_3', path + 'dress/elza/sh_3.png' + suffix);
        game.load.image('el_sh_4', path + 'dress/elza/sh_4.png' + suffix);


        //// FINAL

        game.load.image('bg5', path + 'final/bg5.jpg' + suffix);
        game.load.image('cl_3', path + 'final/cl_3.png' + suffix);
        game.load.image('cross_1', path + 'final/cross_1.png' + suffix);
        game.load.image('cross_2', path + 'final/cross_2.png' + suffix);
        game.load.image('gr_5', path + 'final/gr_5.png' + suffix);

        //////
    },

    goLink: function ()
    { window.open( 'http://www.localhost', '_blank' )

    },

    goLink2: function ()
    {

    },

    create: function () 
    {
        preloadBack.visible = preloadBar.visible = false;
        button.visible = true;
    },

    shakeItem: function(target, delay)
    {
        var _tween0 = this.game.add.tween(target).to({ angle: 0 }, delay, Phaser.Easing.Linear.None, true);
        var _tween1 = this.game.add.tween(target).to({ angle: 10 }, 400, Phaser.Easing.Linear.None, false, 4000);
        var _tween2 = this.game.add.tween(target).to({ angle: -10 }, 800, Phaser.Easing.Linear.None, false);
        var _tween3 = this.game.add.tween(target).to({ angle: 0 }, 400, Phaser.Easing.Linear.None, false);

        _tween3.onComplete.add(function ()
        {
            glowEmitter.x = target.x;
            glowEmitter.y = target.y;
            glowEmitter.start(true, 1500, null, 25);
        }, this);

        _tween0.chain(_tween1);
        _tween1.chain(_tween2);
        _tween2.chain(_tween3);
        _tween3.chain(_tween1);
    },

    onScaleOver: function(sprite)
    {
        sprite.scale.setTo(1.05, 1.05);
        hower = true;
    },

    onScaleOut: function(sprite)
    {
        sprite.scale.setTo(1, 1);
        hower = false;
    },

    onScaleOver3: function(sprite)
    {
        sprite.scale.setTo(1.05, 1.05);

        sprite.filters =
            [
                new GlowFilter(
                    350,
                    350,
                    parseFloat(5),
                    parseFloat(2),
                    parseFloat(1),
                    parseInt(0xffffff),
                    parseFloat(0.1)
                )
            ];

        var _tween1 = game.add.tween(sprite).to({ angle: 10 }, 800, Phaser.Easing.Linear.None, true);
        var _tween2 = game.add.tween(sprite).to({ angle: -10 }, 1600, Phaser.Easing.Linear.None, false);
        var _tween3 = game.add.tween(sprite).to({ angle: 0 }, 800, Phaser.Easing.Linear.None, false);
        _tween1.chain(_tween2);
        _tween2.chain(_tween3);
        _tween3.chain(_tween1);
    },

    onScaleOut3: function(sprite)
    {
        sprite.scale.setTo(1, 1);
        sprite.filters = null;

        game.tweens.removeFrom(sprite);
        sprite.angle = 0;
    },

    update: function()
    {
        if (_spriterGroup)
            _spriterGroup.updateAnimation();

        if (hower)
        {
            glowEmitter.x = game.input.x;
            glowEmitter.y = game.input.y;
            glowEmitter.start(true, 3000, null, 25);
        }
    },

    loadComplete: function () 
    {
        
		
		_spriterGroup.onEvent.removeAll();
        _spriterGroup.onLoop.removeAll();
        _spriterGroup.destroy(true);
        _spriterGroup = null;

        btn1.destroy(true);
        btn2.destroy(true);
        btn3.destroy(true);
        btn4.destroy(true);

        glowEmitter.kill();
        crownEmitter.kill();
        hower = false;

        musicOn = true;
        music = game.add.audio('track');
        music.loop = true;
		music.play();
        
        this.state.start('Start');
    },
};