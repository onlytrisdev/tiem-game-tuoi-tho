var Boot =
{
    create: function ()
    {
        game.input.maxPointers = 1;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        game.state.start('Preroll');
    },

    preload: function () 
    {
        cache = false;

        game.stage.disableVisibilityChange = true;

        path = "./assets/images/";
        suffix = "";

        if (cache)
            suffix = '?r=' + Math.random();

        game.load.script('filter', 'js/GlowS.js');

        game.load.image('preroll_bg', path + 'preroll_bg.png' + suffix);
        //game.load.image('DUG', path + 'start/DUG.png' + suffix);

        game.load.atlas("preroll", path + "preloader_atlas.png", path + "preloader_atlas.json" + suffix);
        game.load.json("dollJSON", path + "doll.json");

        game.load.spritesheet('play', path + 'play_sheet.png' + suffix, 165, 132);
    }
}