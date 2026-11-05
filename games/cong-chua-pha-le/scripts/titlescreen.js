var titleScreen = function(game)
{
	MuteBool = false;
	gamepaused = false;
	GameTitle = "cong-chua-pha-le";
	gpLink = "https://play.google.com/store/apps/details?id=com.arcade.batchu.android"
}


titleScreen.prototype = 
{
	create: function()
	{
		BgMusic = this.add.audio("backgroundmusic");

		BgMusic.loop = true;

		BgMusic.volume = 1;

		BgMusic.play();
		
		CenterX = this.world.centerX;
		CenterY = this.world.centerY;

		Background = this.add.image(0,0,"intro_screen");

		GP_Btn = this.add.button(322,495,"gp_btn",function()
		{
			window.open(gpLink,"_blank");
		},this); 
		GP_Btn.anchor.setTo(0.5,0.5);

		//add the Play Button sprite
		Play_Btn = this.add.button(675,442,"play_btn",function()
		{
			//gdsdk.showBanner();
			this.state.start("DressUp");
		},this,1,0,2);
		Play_Btn.anchor.setTo(0.5,0.5);

		Logo = this.add.button(80,413,"logo",function()
		{
			//window.open("http://www.kawaiigames.net/?utm_source=html5-pearl&utm_medium=html5-pearl&utm_campaign="+ GameTitle,"_blank");
		},this,1,0,2);
		Logo.anchor.setTo(0.5,0.5);
		Logo.scale.setTo(0.4,0.4);
		Logo.smoothed = false;

		Credits_Btn = this.add.button(76,503,"credits_btn",function()
		{
			Credits_Btn.visible = false;

			Credits_Group.visible = true;

			Play_Btn.inputEnabled = false;
		},this,1,0,2);
		Credits_Btn.anchor.setTo(0.5,0.5);


		//---------------------------------------------------------//

		//Credits Screen

		//Screen_Effect (black screen at the back of the credits screen)
		//the first 0 is the x and the second 0 is the y
		Screen_Effect = this.add.sprite(0,0,"screen_effect");

		//Credits_Text includes the credits text and the pink border
		Credits_Text = this.add.sprite(0,0,"credits_text");
		Credits_Text.anchor.setTo(0.5,0.5);
		Credits_Text.x = CenterX;
		Credits_Text.y = CenterY;

		Link_Btn = this.add.button(583,247,"link_btn",function()
		{
			window.open("http://www.cartoonnetwork.com","_blank");
		},this);
		Link_Btn.anchor.setTo(0.5,0.5);
		Link_Btn.scale.setTo(2.5,0.3);
		Link_Btn.alpha = 0;

		Link_Btn2 = this.add.button(517,286,"link_btn",function()
		{
			window.open("http://www.pandatooth.com/portfolio-items/steven-universe-2/","_blank");
		},this);
		Link_Btn2.anchor.setTo(0.5,0.5);
		Link_Btn2.scale.setTo(2,0.3);
		Link_Btn2.alpha = 0;

		

		//Close button at the upper right corner of the Credits_Text
		/*We add it as a sprite so that we can make it zoom in and zoom out by scaling it
		when the user click the close button*/
		Close_Btn = this.add.button(Credits_Text.x + Credits_Text.width/2 - 35,Credits_Text.y - Credits_Text.height/2 + 35,"close_btn",function()
		{
			//we make the Credits_Group invisible and the Credits_Btn visible again
			Credits_Group.visible = false;
			Credits_Btn.visible = true;

			//enable all buttons that is meant to be clickable when Credits is closed
			Play_Btn.inputEnabled = true;
		},this,1,0,2);
		Close_Btn.anchor.setTo(0.5,0.5);

		//Group that will hold all the graphics that we need for the credits screen
		Credits_Group = this.add.group();

		Credits_Group.add(Screen_Effect);
		Credits_Group.add(Credits_Text);
		Credits_Group.add(Link_Btn);
		Credits_Group.add(Link_Btn2);
		Credits_Group.add(Close_Btn);

		//we make it initially invisible to hide it from the users view 
		Credits_Group.visible = false;

		//sound button
		SoundBtn = this.add.button(46,42,"sound_btn", function()
		{
			if(!MuteBool)
			{
				SoundBtn.animations.play("soundOff");
				this.sound.mute = true;
				MuteBool = true;
			}
			else if(MuteBool)
			{
				SoundBtn.animations.play("soundOn");
				this.sound.mute = false;
				MuteBool = false;
			}
		},this);
		SoundBtn.anchor.setTo(0.5,0.5);
		SoundBtn.animations.add("soundOn",[0],1,false);
		SoundBtn.animations.add("soundOff",[1],1,false);

		PosTextBool = false;

		/*PosTextBool = true;
		PosText = this.add.text(870,110,"Hello",{font:"40px Arial",fill:"#ffffff"});
		PosText.anchor.setTo(0.5,0.5);
		PosText.setShadow(3,3,"rgba(0,0,0,0.5)",2);
		debug_fnc(PosText);*/
	},
	update: function()
	{
		//this.sound.mute = true;
		//this.state.start("DressUp");		
	},
}
function debug_fnc(Obj)
{
	/*this.input.onDown.add(function()
	{			
		Obj.animations.play("Tool8Anim");
	},this);*/

	Obj.inputEnabled = true;
	Obj.input.enableDrag(false);
	Obj.events.onInputUp.add(function()
	{
		if(PosTextBool){PosText.text = Obj.x + "\n" + Obj.y;}
		else{console.log(Obj.x + "\n" + Obj.y);}
	},this);
}