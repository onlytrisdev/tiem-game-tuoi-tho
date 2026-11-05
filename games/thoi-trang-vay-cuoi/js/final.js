var b1, b2, gr, cl, f;

var Final = 
{

    preload : function() 
    {
        game.stage.disableVisibilityChange = true;

        counter = 0;
    },

    create: function () 
    {
        game.add.sprite(0, 0, 'bg5');

        gr = game.add.sprite(-700, 0, 'gr_5');
        cl = game.add.sprite(0, 0, 'cl_3');

        cl.alpha = 0;

        var cont = game.add.group();

        b1 = addItem(this, cont, 500 + 700, 55, 'ban1', 'cross_1', true, true, this.goCross1, this.over, this.out);
        b2 = addItem(this, cont, 500 + 700, 355, 'ban2', 'cross_2', true, true, this.goCross2, this.over, this.out);

        game.add.tween(gr).to( { x: 0 }, 1000, Phaser.Easing.Circular.Out, true, 1000);
        game.add.tween(cl).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 2000);
        game.add.tween(cont).to( { }, 500, Phaser.Easing.Linear.None, true, 2500)
            .onComplete.add(() => {

            play.visible = true;

        }, this);

        game.add.tween(b1).to( { x: 730 }, 1000, Phaser.Easing.Circular.Out, true, 3500);
        game.add.tween(b2).to( { x: 730 }, 1000, Phaser.Easing.Circular.Out, true, 4000);

        //game.add.tween(logos.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Linear.None, true, 500);

        //game.add.tween(b1).to( { y: 245 }, 1500, Phaser.Easing.Circular.Out, true, 2000);
        //game.add.tween(b2).to( { y: 409 }, 1500, Phaser.Easing.Circular.Out, true, 2500);

        f = new GlowFilter(
            250,
            250,
            parseFloat(5),
            parseFloat(2),
            parseFloat(1),
            parseInt(0xffffff),
            parseFloat(1)
        );

        f.outerStrength = 0;
        f.innerStrength = 0;

        game.add.tween(f).to( { outerStrength: 2, innerStrength: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 99990).yoyo(true);

        play = this.add.button(-10, 590, 'replay', this.startGame, this, 0, 1, 1);
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

        /*b1.anchor.setTo(0.5);
        b1.x = 91 - 700 + b1.width / 2;
        b1.y = 470 + b1.height / 2;

        b2.anchor.setTo(0.5);
        b2.x = 387 + b2.width / 2;
        b2.y = 549 + 700 + b2.height / 2;*/

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

        b1.input.pixelPerfectClick = b1.input.pixelPerfectOver = true;
        b1.input.pixelPerfectAlpha = 10;
        b1.events.onInputOver.add(this.onScaleOver, this);
        b1.events.onInputOut.add(this.onScaleOut, this);

        b2.input.pixelPerfectClick = b2.input.pixelPerfectOver = true;
        b2.input.pixelPerfectAlpha = 10;
        b2.events.onInputOver.add(this.onScaleOver, this);
        b2.events.onInputOut.add(this.onScaleOut, this);

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

        f = new GlowFilter(
            350,
            350,
            parseFloat(5),
            parseFloat(2),
            parseFloat(1),
            parseInt(0xffffff),
            parseFloat(1)
        );

        fader = game.add.sprite(0, 0, 'fader');
        fader.alpha = .85;
        game.add.tween(fader).to({ alpha: 0 }, Phaser.Timer.SECOND * .5, Phaser.Easing.Linear.None, true);
    },

    nextMore: function()
    {
        counter++;

        if (counter > 33) counter = 0;

        more.frame = counter;

        game.time.events.add(Phaser.Timer.SECOND *  1/ 6, this.nextMore, this);
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

    getRandomInt : function(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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

    showAll: function ()
    {
        b1.visible = true;
        b2.visible = true;
        play.visible = true;
    },

    startGame: function (sprite, pointer) 
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

    goCross1: function ()
    {
    },

    goCross2: function ()
    {
    },

    goCross3: function ()
    {
    },

    next: function () 
    {
        game.time.events.removeAll();
        game.tweens.removeAll();

        mc1 = null;
        mc2 = null;
        mc3 = null;

        state = 0;

        ad1 = false;
        ad2 = false;
        ad3 = false;

        game.state.start('Start');
    }
};