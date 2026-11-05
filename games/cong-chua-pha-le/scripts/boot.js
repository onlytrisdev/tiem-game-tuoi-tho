var boot = function(game)
{
	console.log("%cGame Initializing...", "color:black;background:red");
}

boot.prototype =
{
	preload: function()
	{
		//showAd();
		//load the images/assets that you wanted to appear in the loading screen
		this.load.atlas("background","img/bg.png","img/bg.json");
		this.load.atlas("background_details","img/bg_details.png","img/bg_details.json");
		//this.load.atlas("background2","img/bg2.png","img/bg2.json");
		this.load.atlas("logo","img/logo.png","img/logo.json");
		this.load.atlas("logo2","img/logo2.png","img/logo2.json");
	},
	create: function()
	{
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.setMinMax(this.width/2,this.height/2,this.width,this.height);

		this.state.start("Preload");
	}
}