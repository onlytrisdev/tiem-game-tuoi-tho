var bootState = 
{
	preload: function () 
	{
		// Preloading
		game.load.image('please_wait', 'images/please_wait.png');
		game.load.image('preloaderBar', 'images/preloaderBar.png');
		game.load.image('preloaderBorder', 'images/preloaderBorder.png');
		game.load.image('preloaderBg', 'images/preloaderBg.jpg');
        game.load.image('clarusGamesPlay', 'images/clarusGamesPlay.png');
	},
	
	create: function() 
	{ 
		game.stage.backgroundColor = '#000000';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		document.body.style.backgroundColor = '#000000';
		
		// center the game
        game.world.setBounds(0, 0, 10600, 540);
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
        
        game.scale.minWidth = 480;
        game.scale.minHeight = 270;
        game.scale.maxWidth = 1920;
        game.scale.maxHeight = 1040;
		
		if (game.device.desktop) 
		{
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		}
		else if (!game.device.desktop) 
		{
			game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
			
			// only landscape mode
            this.scale.forceOrientation(true, false);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
		} 
		
		//game.scale.setScreenSize(true);
		game.scale.refresh();
		
		// start loading screen
		game.state.start('Loading');
	},
	

// Manage device rotation
enterIncorrectOrientation: function () 
{
	game.orientated = false;
	document.getElementById('orientation').style.display = 'block';
},

leaveIncorrectOrientation: function () 
{
	game.orientated = true;
	document.getElementById('orientation').style.display = 'none';
}
	
};