var f, gr1, cl1, cl2, go, phase, emitter, end;

var Comix2 =
{

    preload : function() 
    {
        phase = 0;
        counter = 0;

        end = false;

        game.stage.disableVisibilityChange = true;
    },

    create: function () 
    {
        game.add.sprite(0, 0, 'bg');

        emitter = game.add.emitter(game.world.centerX, -50, 100);

        emitter.width = 960;

        emitter.makeParticles('leps', [0,1,2]);

        emitter.minParticleSpeed.setTo(-100, 30);
        emitter.maxParticleSpeed.setTo(100, 100);
        emitter.minParticleScale = 0.35;
        emitter.maxParticleScale = 0.65;
        emitter.gravity = 70;

        //  This will emit a quantity of 5 particles every 500ms. Each particle will live for 2000ms.
        //  The -1 means "run forever"
        emitter.flow(7000, 500, 3, -1);

        game.add.existing(mc1);
        game.add.existing(mc3);
        game.add.existing(mc2);

        mc1.x = 282;
        mc1.y = 75;
        mc2.x = 328;
        mc2.y = 88;
        mc3.x = 387;
        mc3.y = 75;

        mc1.alpha = 1;
        mc2.alpha = 1;
        mc3.alpha = 1;

        mc1.scale.setTo(.296);
        mc2.scale.setTo(.296);
        mc3.scale.setTo(.296);

        game.add.tween(mc3).to({ x: 250 + 75, y: 16 }, Phaser.Timer.SECOND * 1, Phaser.Easing.Linear.None, true, 3000)
            .onComplete.add(() => {

            

        }, this);

        game.add.tween(mc3.scale).to({ x: .656, y: .656 }, Phaser.Timer.SECOND * 1, Phaser.Easing.Linear.None, true, 3000);
        game.add.tween(mc1).to({ x: -100 + 75, y: 16 }, Phaser.Timer.SECOND * 1, Phaser.Easing.Linear.None, true, 2000);
        game.add.tween(mc1.scale).to({ x: .656, y: .656 }, Phaser.Timer.SECOND * 1, Phaser.Easing.Linear.None, true, 2000);
        game.add.tween(mc2).to({ x: 50 + 75, y: 26 }, Phaser.Timer.SECOND * 1, Phaser.Easing.Linear.None, true, 1000);
        game.add.tween(mc2.scale).to({ x: .661, y: .661 }, Phaser.Timer.SECOND * 1, Phaser.Easing.Linear.None, true, 1000);

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

        //play.visible = false;

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

        game.time.events.add(Phaser.Timer.SECOND *  11, this.startGame, this);
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
        if (end) return;

        end = false;

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

    next: function () 
    {
        emitter.kill();

        game.time.events.removeAll();
        game.tweens.removeAll();

        game.state.start('Final');
    }

};