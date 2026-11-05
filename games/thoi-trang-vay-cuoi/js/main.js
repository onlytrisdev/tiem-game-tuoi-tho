var game, state, play, logo, more, more2, music, musicOn, musOn, musOff, bg, tween, part1, part2, vs, filter,
    fader, mc1, mc2, mc3, mc4, wear1, wear2, wear3, selectedModels, path, suffix, cache, inited,
    ad1, ad2, ad3, mode, counter, sel;

game = new Phaser.Game(960, 720, Phaser.AUTO, 'game-container', '', true);

game.state.add('Boot', Boot);
game.state.add('Preroll', Preroll);
game.state.add('Start', Start);
game.state.add('Comix', Comix);
game.state.add('Make', Make);
game.state.add('Dress', Dress);
game.state.add('Comix2', Comix2);
game.state.add('Final', Final);

game.state.start('Boot');
