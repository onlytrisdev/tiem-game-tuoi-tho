var f, gr1, cl1, cl2, go, phase;

var Comix =
{

    preload : function() 
    {
        phase = 0;
        counter = 0;

        game.stage.disableVisibilityChange = true;
    },

    create: function () 
    {
        game.add.sprite(0, 0, 'bg2');

        gr1 = game.add.sprite(700, 0, 'gr_4');
        cl1 = game.add.sprite(0, 0, 'cl_1');
        cl2 = game.add.sprite(0, 0, 'cl_2');

        cl1.alpha = 0;
        cl2.alpha = 0;

        game.add.tween(gr1).to({ x: 0 }, Phaser.Timer.SECOND * 1, Phaser.Easing.Circular.Out, true, 1000);
        game.add.tween(cl1).to({ alpha: 1 }, Phaser.Timer.SECOND * 1, Phaser.Easing.Linear.None, true, 2000);
        game.add.tween(cl2).to({ alpha: 1 }, Phaser.Timer.SECOND * 1, Phaser.Easing.Linear.None, true, 3000)
            .onComplete.add(() => {

            go.visible = true;

        }, this);

        f = new GlowFilter(
            250,
            250,
            parseFloat(5),
            parseFloat(2),
            parseFloat(1),
            parseInt(0xff99ff),
            parseFloat(1)
        );

        f.outerStrength = 0;
        f.innerStrength = 0;

        game.add.tween(f).to( { outerStrength: 2, innerStrength: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 99990).yoyo(true);

        go = this.add.button(-10, 590, 'go', this.startGame, this, 0, 1, 1);

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

        go.anchor.setTo(0.5);
        go.x = 229 + go.width / 2;
        go.y = 555 + go.height / 2;

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

        go.input.pixelPerfectClick = go.input.pixelPerfectOver = true;
        go.input.pixelPerfectAlpha = 10;
        go.events.onInputOver.add(this.onScaleOver, this);
        go.events.onInputOut.add(this.onScaleOut, this);

        go.visible = false;
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

        game.time.events.add(Phaser.Timer.SECOND *  1/ 6, this.nextMore, this);
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
        go.visible = false;
        play.visible = false;
        cl1.visible = false;
        cl2.visible = false;

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
    {
    },

    next: function () 
    {
        game.time.events.removeAll();
        game.tweens.removeAll();

        game.state.start('Make');
    }

};