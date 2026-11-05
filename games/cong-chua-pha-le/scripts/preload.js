var preload = function(game)
{
	var LoadingText;
}

preload.prototype = 
{
	preload: function()
	{//add the background image and Logo for the loading screen
		this.stage.backgroundColor = "FFFFFF";
		Background = this.add.image(0,0,"background");
		Background.tint = 0x99CCFF;
		Background_Details = this.add.image(0,0,"background_details");
		Background_Details.frame = 7;
		Logo = this.add.sprite(this.world.centerX,this.world.centerY,"logo");
		Logo.anchor.setTo(0.5,0.5);
		Logo.scale.setTo(1,1);

		//this.load.image("ref","2.png");
		
		//audio
		this.load.audio("backgroundmusic","audio/sound1.mp3");
		
		this.load.onFileComplete.add(this.FileComplete,this);

		//assets

		this.load.image("intro_screen","img/title_screen/intro_screen.png");

		//character assets
		
		this.load.image("bra","img/character/bra.png");
		this.load.image("face_details","img/character/face_details.png");
		this.load.image("panties","img/character/panties.png");
		this.load.image("shadow","img/character/shadow.png");

		/*this.load.spritesheet("body","img/character/body/body.png",349,447,12);*/

		this.load.image("body","img/character/body/body.png");
		this.load.image("body_outline","img/character/body/body_outline.png");
		this.load.image("hand","img/character/body/hand.png");
		this.load.image("hand_outline","img/character/body/hand_outline.png");
		this.load.image("hand2","img/character/body/hand2.png");
		this.load.image("hand_outline2","img/character/body/hand_outline2.png");
		this.load.image("head","img/character/body/head.png");
		this.load.image("head_outline","img/character/body/head_outline.png");


		//bang
		this.load.atlas("bangs","img/character/bangs/bangs.png","img/character/bangs/bangs.json");
		this.load.atlas("bangs_outline","img/character/bangs/bangs_outline.png","img/character/bangs/bangs_outline.json");
		this.load.atlas("bangs_shades","img/character/bangs/bangs_shades.png","img/character/bangs/bangs_shades.json");
		

		//bang_hl
		this.load.atlas("bang_hl","img/character/bang_hl/bang_hl.png","img/character/bang_hl/bang_hl.json");
	

		//bottoms
		this.load.atlas("bottoms","img/character/bottoms/bottoms.png","img/character/bottoms/bottoms.json");
		this.load.atlas("bottoms_outline","img/character/bottoms/bottoms_outline.png","img/character/bottoms/bottoms_outline.json");
		this.load.atlas("bottoms_shade","img/character/bottoms/bottoms_shade.png","img/character/bottoms/bottoms_shade.json");

		//cake
		//this.load.atlas("cake","img/character/cakes/cake.png","img/character/cakes/cake.json");
		//this.load.atlas("cake_outline","img/character/cakes/cake_outline.png","img/character/cakes/cake_outline.json");
		//this.load.image("tray","img/character/tray.png");

		//cheeks
		//this.load.atlas("cheeks","img/character/cheeks/cheeks.png","img/character/cheeks/cheeks.json");

		

		//dress
		//this.load.atlas("dress","img/character/dress/dress.png","img/character/dress/dress.json");
		//this.load.atlas("dress_outline","img/character/dress/dress_outline.png","img/character/dress/dress_outline.json");
		

		//extras
		this.load.image("extras","img/character/extras/extras.png");
		this.load.image("extras_outline","img/character/extras/extras_outline.png");
		this.load.image("extras2","img/character/extras/extras2.png");
		this.load.image("extras2_outline","img/character/extras/extras2_outline.png");
		this.load.image("extras3","img/character/extras/extras3.png");
		this.load.image("extras3_outline","img/character/extras/extras3_outline.png");
		this.load.image("extras4","img/character/extras/extras4.png");
		this.load.image("extras4_outline","img/character/extras/extras4_outline.png");
		this.load.image("extras5","img/character/extras/extras5.png");
		this.load.image("extras5_outline","img/character/extras/extras5_outline.png");
		this.load.image("extras6","img/character/extras/extras6.png");
		this.load.image("extras6_outline","img/character/extras/extras6_outline.png");
		this.load.image("extras7","img/character/extras/extras7.png");
		this.load.image("extras7_outline","img/character/extras/extras7_outline.png");
		this.load.image("extras8","img/character/extras/extras8.png");
		this.load.image("extras8_outline","img/character/extras/extras8_outline.png");
		this.load.image("extras9","img/character/extras/extras9.png");
		this.load.image("extras9_outline","img/character/extras/extras9_outline.png");

		//eye_shadow
		this.load.atlas("eye_shadow","img/character/eye_shadow/eye_shadow.png","img/character/eye_shadow/eye_shadow.json");
	

		//eyebrows
		this.load.atlas("eyebrows","img/character/eyebrows/eyebrows.png","img/character/eyebrows/eyebrows.json");
		//this.load.atlas("eyebrows_outline","img/character/eyebrows/eyebrows_outline.png","img/character/eyebrows/eyebrows_outline.json");

		//eyes
		this.load.atlas("eyes","img/character/eyes/eyes.png","img/character/eyes/eyes.json");
		this.load.atlas("eyes_white","img/character/eyes/eyes_white.png","img/character/eyes/eyes_white.json");
		//this.load.atlas("eyelashes","img/character/eyes/eyelashes.png","img/character/eyes/eyelashes.json");
		

		//hair
		this.load.atlas("hair","img/character/hair/hair.png","img/character/hair/hair.json");
		this.load.atlas("hair_outline","img/character/hair/hair_outline.png","img/character/hair/hair_outline.json");
		this.load.atlas("hair_shades","img/character/hair/hair_shades.png","img/character/hair/hair_shades.json");
		

		//hair_hl
		this.load.atlas("hair_hl","img/character/hair_hl/hair_hl.png","img/character/hair_hl/hair_hl.json");
		

		//lips
		this.load.atlas("lips","img/character/lips/lips.png","img/character/lips/lips.json");
		//this.load.atlas("lips_outline","img/character/lips/lips_outline.png","img/character/lips/lips_outline.json");
	
		//shoes
		this.load.atlas("shoes","img/character/shoes/shoes.png","img/character/shoes/shoes.json");
		this.load.atlas("shoes_outline","img/character/shoes/shoes_outline.png","img/character/shoes/shoes_outline.json");
		this.load.atlas("shoes_shade","img/character/shoes/shoes_shade.png","img/character/shoes/shoes_shade.json");
		
		//skirt
		this.load.atlas("skirt","img/character/skirt/skirt.png","img/character/skirt/skirt.json");
		this.load.atlas("skirt_outline","img/character/skirt/skirt_outline.png","img/character/skirt/skirt_outline.json");
		this.load.atlas("skirt_shade","img/character/skirt/skirt_shade.png","img/character/skirt/skirt_shade.json");

		

		//socks
		this.load.atlas("socks","img/character/socks/socks.png","img/character/socks/socks.json");
		this.load.atlas("socks_outline","img/character/socks/socks_outline.png","img/character/socks/socks_outline.json");
	

		//teeth
		//this.load.atlas("teeth","img/character/teeth/teeth.png","img/character/teeth/teeth.json");
		

		//tops
		this.load.atlas("tops","img/character/tops/tops.png","img/character/tops/tops.json");
		this.load.atlas("tops_outline","img/character/tops/tops_outline.png","img/character/tops/tops_outline.json");
		this.load.atlas("tops_shade","img/character/tops/tops_shade.png","img/character/tops/tops_shade.json");
	
		//dress up screen
		this.load.image("border","img/dressup/border.png");
		this.load.image("hit_box","img/dressup/hit_box.png");	

		//dress up buttons
		this.load.image("bottoms_icon","img/dressup/bottoms_icon/bottoms_icon.png");
		this.load.image("bottoms_icon2","img/dressup/bottoms_icon/bottoms_icon2.png");
		this.load.image("bottoms_icon3","img/dressup/bottoms_icon/bottoms_icon3.png");

		this.load.image("bg_icon","img/dressup/bg_icon/bg_icon.png");
		this.load.image("bg_icon2","img/dressup/bg_icon/bg_icon2.png");
		this.load.image("bg_icon3","img/dressup/bg_icon/bg_icon3.png");

		this.load.image("color_pallette","img/dressup/color_icon/color_icon.png");
		this.load.image("color_pallette2","img/dressup/color_icon/color_icon2.png");
		this.load.image("color_icon_btn","img/dressup/color_icon/color_icon_btn.png");

		this.load.image("print_icon","img/dressup/print_icon/print_icon.png");
		this.load.image("print_icon2","img/dressup/print_icon/print_icon2.png");
		this.load.image("print_icon3","img/dressup/print_icon/print_icon3.png");

		this.load.image("extra_icon","img/dressup/extra_icon/extra_icon.png");
		this.load.image("extra_icon2","img/dressup/extra_icon/extra_icon2.png");
		this.load.image("extra_icon3","img/dressup/extra_icon/extra_icon3.png");

		this.load.image("eyebrows_icon","img/dressup/eyebrows_icon/eyebrows_icon.png");
		this.load.image("eyebrows_icon2","img/dressup/eyebrows_icon/eyebrows_icon2.png");

		this.load.image("eyes_icon","img/dressup/eyes_icon/eyes_icon.png");
		this.load.image("eyes_icon2","img/dressup/eyes_icon/eyes_icon2.png");
		this.load.image("eyes_icon3","img/dressup/eyes_icon/eyes_icon3.png");


		this.load.atlas("dressup_btn","img/dressup/dressup_btn.png","img/dressup/dressup_btn.json");

		this.load.image("bangs_icon","img/dressup/bangs_icon/bangs_icon.png");
		this.load.image("bangs_icon2","img/dressup/bangs_icon/bangs_icon2.png");
		this.load.image("bangs_icon3","img/dressup/bangs_icon/bangs_icon3.png");

		this.load.image("lips01_icon","img/dressup/lips_icon/lips_icon.png");
		this.load.image("lips02_icon","img/dressup/lips_icon/lips_icon2.png");
		this.load.image("lips03_icon","img/dressup/lips_icon/lips_icon3.png");

		this.load.image("shoes_icon","img/dressup/shoes_icon/shoes_icon.png");
		this.load.image("shoes_icon2","img/dressup/shoes_icon/shoes_icon2.png");
		this.load.image("shoes_icon3","img/dressup/shoes_icon/shoes_icon3.png");

		this.load.image("skincolor01_icon","img/dressup/skincolor_icon/skincolor_icon.png");
		this.load.image("skincolor02_icon","img/dressup/skincolor_icon/skincolor_icon2.png");

		this.load.image("skirt_icon","img/dressup/skirt_icon/skirt_icon.png");
		this.load.image("skirt_icon2","img/dressup/skirt_icon/skirt_icon2.png");

		this.load.image("socks_icon","img/dressup/socks_icon/socks_icon.png");
		this.load.image("socks_icon2","img/dressup/socks_icon/socks_icon2.png");
		this.load.image("socks_icon3","img/dressup/socks_icon/socks_icon3.png");

		this.load.image("tops_icon","img/dressup/tops_icon/tops_icon.png");
		this.load.image("tops_icon2","img/dressup/tops_icon/tops_icon2.png");
		this.load.image("tops_icon3","img/dressup/tops_icon/tops_icon3.png");

		this.load.atlas("back_btn","img/dressup/buttons/back_btn.png","img/dressup/buttons/back_btn.json");
		this.load.atlas("bottoms_btn","img/dressup/buttons/bottoms_btn.png","img/dressup/buttons/bottoms_btn.json");
		this.load.atlas("cake_btn","img/dressup/buttons/cake_btn.png","img/dressup/buttons/cake_btn.json");
		this.load.atlas("cheeks_btn","img/dressup/buttons/cheeks_btn.png","img/dressup/buttons/cheeks_btn.json");
		this.load.atlas("color_btn","img/dressup/buttons/color_btn.png","img/dressup/buttons/color_btn.json")
		this.load.atlas("color_btn1","img/dressup/buttons/color_btn1.png","img/dressup/buttons/color_btn1.json")
		this.load.atlas("color_btn2","img/dressup/buttons/color_btn2.png","img/dressup/buttons/color_btn2.json")
		this.load.atlas("color_back_btn","img/dressup/buttons/color_back_btn.png","img/dressup/buttons/color_back_btn.json")
		this.load.atlas("dress_btn","img/dressup/buttons/dress_btn.png","img/dressup/buttons/dress_btn.json");
		this.load.atlas("extra_btn","img/dressup/buttons/extra_btn.png","img/dressup/buttons/extra_btn.json");
		this.load.atlas("eye_btn","img/dressup/buttons/eye_btn.png","img/dressup/buttons/eye_btn.json");//
		this.load.atlas("lashes_off","img/dressup/buttons/lashes_off.png","img/dressup/buttons/lashes_off.json");//
		this.load.atlas("lashes_on","img/dressup/buttons/lashes_on.png","img/dressup/buttons/lashes_on.json");//
		this.load.atlas("eyebrow_btn","img/dressup/buttons/eyebrow_btn.png","img/dressup/buttons/eyebrow_btn.json");
		this.load.atlas("eyeshadow_btn","img/dressup/buttons/eyeshadow_btn.png","img/dressup/buttons/eyeshadow_btn.json");//
		this.load.atlas("hair_btn","img/dressup/buttons/hair_btn.png","img/dressup/buttons/hair_btn.json");//
		this.load.atlas("hl_btn","img/dressup/buttons/hl_btn.png","img/dressup/buttons/hl_btn.json");//
		this.load.atlas("lips_btn","img/dressup/buttons/lips_btn.png","img/dressup/buttons/lips_btn.json");//
		this.load.atlas("next_btn","img/dressup/buttons/next_btn.png","img/dressup/buttons/next_btn.json");
		this.load.atlas("prev_btn","img/dressup/buttons/prev_btn.png","img/dressup/buttons/prev_btn.json");
		this.load.atlas("reset_btn","img/dressup/buttons/reset_btn.png","img/dressup/buttons/reset_btn.json");
		this.load.atlas("shoes_btn","img/dressup/buttons/shoes_btn.png","img/dressup/buttons/shoes_btn.json");
		this.load.atlas("show_btn","img/dressup/buttons/show_btn.png","img/dressup/buttons/show_btn.json");
		this.load.atlas("shuffle_btn","img/dressup/buttons/shuffle_btn.png","img/dressup/buttons/shuffle_btn.json");
		this.load.atlas("skintone_btn","img/dressup/buttons/skintone_btn.png","img/dressup/buttons/skintone_btn.json");//
		this.load.atlas("skirt_btn","img/dressup/buttons/skirt_btn.png","img/dressup/buttons/skirt_btn.json");//
		this.load.atlas("prints_btn","img/dressup/buttons/prints_btn.png","img/dressup/buttons/prints_btn.json");//
		this.load.atlas("socks_btn","img/dressup/buttons/socks_btn.png","img/dressup/buttons/socks_btn.json");
		this.load.atlas("tops_btn","img/dressup/buttons/tops_btn.png","img/dressup/buttons/tops_btn.json");
		this.load.atlas("trash_btn","img/dressup/buttons/trash_btn.png","img/dressup/buttons/trash_btn.json");
		this.load.atlas("bg_btn","img/dressup/buttons/bg_btn.png","img/dressup/buttons/bg_btn.json");
		this.load.atlas("bangs_small","img/dressup/buttons/bangs_small.png","img/dressup/buttons/bangs_small.json");
		this.load.atlas("hair_small","img/dressup/buttons/hair_small.png","img/dressup/buttons/hair_small.json");
		this.load.atlas("hair_hl_btn","img/dressup/buttons/hair_hl_btn.png","img/dressup/buttons/hair_hl_btn.json");
		this.load.atlas("hair_shade_btn","img/dressup/buttons/hair_shade_btn.png","img/dressup/buttons/hair_shade_btn.json");
		this.load.image("star","img/dressup/buttons/star.png");
		this.load.atlas("page2","img/dressup/buttons/page2.png","img/dressup/buttons/page2.json");
		this.load.atlas("page3","img/dressup/buttons/page3.png","img/dressup/buttons/page3.json");
		this.load.atlas("page4","img/dressup/buttons/page4.png","img/dressup/buttons/page4.json");
		this.load.atlas("page5","img/dressup/buttons/page5.png","img/dressup/buttons/page5.json");



		//credits
		this.load.image("credits_text","img/credits/credits_text.png");
		this.load.image("screen_effect","img/credits/screen_effect.png");

		//buttons

		/*I use spritesheet for these buttons to have a idle,mouse over and click effect*/

		this.load.atlas("close_btn","img/buttons/close_btn.png","img/buttons/close_btn.json");
		this.load.atlas("credits_btn","img/buttons/credits_btn.png","img/buttons/credits_btn.json");
		this.load.atlas("moregames_btn","img/buttons/moregames_btn.png","img/buttons/moregames_btn.json");
		this.load.atlas("play_btn","img/buttons/play_btn.png","img/buttons/play_btn.json");
		this.load.atlas("retry_btn","img/buttons/retry_btn.png","img/buttons/retry_btn.json");
		this.load.atlas("save_btn","img/buttons/save_btn.png","img/buttons/save_btn.json");
		this.load.atlas("sound_btn","img/buttons/sound_btn.png","img/buttons/sound_btn.json");
		this.load.image("link_btn","img/buttons/link_btn.png");
		this.load.image("gp_btn","img/buttons/gp_btn.png");

		//loading percentage
		LoadingText = this.add.text(this.world.centerX,this.world.centerY+220,"0%",{font: "bold 100px Arial",fill: "#DD3397"});
		LoadingText.anchor.setTo(0.5,0.5);
		LoadingText.setShadow(3,3,"rgba(0,0,0,0.5)",2);

	
	},
	FileComplete: function(progress)
	{
		LoadingText.text = progress + "%";

		if(progress == 100)
		{
			//this.state.start("TitleScreen");
		}
	},
	update: function()
	{
		if(this.cache.isSoundDecoded("backgroundmusic"))
		{
			this.state.start("TitleScreen");
		}
	}
}