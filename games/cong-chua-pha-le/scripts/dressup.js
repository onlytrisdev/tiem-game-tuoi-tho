var dressup = function(game)
{

}

dressup.prototype = 
{
	create: function()
	{
		//this.game.renderer.renderSession.roundPixels = true;

		CenterX = this.world.centerX;
		CenterY = this.world.centerY;

		hairColor = 0;
		bottomsColor = 2;
		topsColor = 2;
		dressColor = 2;
		shoesColor = 2;
		socksColor = 2;
		ExtraColor = 2;
		Extra3Color = 2;
		Extra7Color = 2;
		Extra9Color = 2;
		Extra14Color = 2;
		hlColor = 0;
		lipsColor = 6;
		bodyColor = 0;
		hlVisible = false;
		colorPage = 1;
		bangsOpened = true;
		hairOpened = false;
		ShadeBool = false;
		Hl_Bool = false;
		hasShade = false;
		hasHl = false;
		normalBool = true;
		openedColors = 1;

		extraBoolAr = [false,false,false,false,false,
					   false,false,false,false];

		defaultColor = Colors[2];

		openedMenu = 1;
		openedMenuPage = 1;
		skinColorPage = 78;
		lasheson = false;


		BG = this.add.image(0,0,"background");
		BG.tint = 0xFFFFFF;
		BG_Details = this.add.image(0,0,"background_details");
		BG_Details.frame = 7;
		/*BG2 = this.add.sprite(0,-.5,"background2");
		

		BG2.visible = false;*/

		//Ref = this.add.image(0,0,"ref");

		Body = this.add.sprite(502,676,"body");
		Body.anchor.setTo(0.5,0.5);
		Body.tint = Colors[4];

		Body_Outline = this.add.sprite(Body.x,Body.y,"body_outline");
		Body_Outline.anchor.setTo(0.5,0.5);

		Head = this.add.sprite(455,225,"head");
		Head.anchor.setTo(0.5,0.5);
		Head.tint = Body.tint;

		Head_Outline = this.add.sprite(Head.x,Head.y,"head_outline");
		Head_Outline.anchor.setTo(0.5,0.5);

		Hand = this.add.sprite(297,635,"hand");
		Hand.anchor.setTo(0.5,0.5);
		Hand.tint = Body.tint;

		Hand_Outline = this.add.sprite(Hand.x,Hand.y,"hand_outline");
		Hand_Outline.anchor.setTo(0.5,0.5);

		Hand2 = this.add.sprite(315,631,"hand2");
		Hand2.anchor.setTo(0.5,0.5);
		Hand2.tint = Body.tint;
		Hand2.visible = false;

		Hand_Outline2 = this.add.sprite(Hand2.x,Hand2.y,"hand_outline2");
		Hand_Outline2.anchor.setTo(0.5,0.5);
		Hand_Outline2.visible = false;

		Bra = this.add.sprite(461,396,"bra");
		Bra.anchor.setTo(0.5,0.5);

		Panties = this.add.sprite(458,535,"panties");
		Panties.anchor.setTo(0.5,0.5);

		SocksX = [512];
		SocksY = [768];

		Socks = this.add.sprite(SocksX[0],SocksY[0],"socks");
		Socks.anchor.setTo(0.5,0.5);
		Socks.frame = 0;
		Socks.tint = defaultColor;
		Socks.visible = false;

		Socks_Outline = this.add.sprite(Socks.x,Socks.y,"socks_outline");
		Socks_Outline.anchor.setTo(0.5,0.5);
		Socks_Outline.frame = Socks.frame;
		Socks_Outline.visible = false;

		BottomsX = [498];
		BottomsY = [708];

		Bottoms = this.add.sprite(BottomsX[0],BottomsY[0],"bottoms");
		Bottoms.anchor.setTo(0.5,0.5);
		Bottoms.tint = defaultColor;
		Bottoms.frame = 0;
		Bottoms.visible = false;

		Bottoms_Outline = this.add.sprite(BottomsX[0],BottomsY[0],"bottoms_outline");
		Bottoms_Outline.anchor.setTo(0.5,0.5);
		Bottoms_Outline.frame = Bottoms.frame;
		Bottoms_Outline.visible = false;

		Bottoms_Shade = this.add.sprite(BottomsX[0],BottomsY[0],"bottoms_shade");
		Bottoms_Shade.anchor.setTo(0.5,0.5);
		Bottoms_Shade.frame = 0;
		Bottoms_Shade.visible = false;

		TopsX = [446];
		TopsY = [549];

		DressX = [272];
		DressY = [383];

		Clothes = this.add.sprite(TopsX[0],TopsY[0],"tops");
		Clothes.anchor.setTo(0.5,0.5);
		Clothes.name = "Tops";
		Clothes.tint = defaultColor;
		Clothes.frame = 0;
		Clothes.visible = false;

		Clothes_Outline = this.add.sprite(Clothes.x,Clothes.y,"tops_outline");
		Clothes_Outline.anchor.setTo(0.5,0.5);
		Clothes_Outline.name = "Tops";
		Clothes_Outline.frame = Clothes.frame;
		Clothes_Outline.visible = false;

		Clothes_Shade = this.add.sprite(TopsX[0] - 1,TopsY[0] - 16,"tops_shade");
		Clothes_Shade.anchor.setTo(0.5,0.5);
		Clothes_Shade.frame = 0;
		Clothes_Shade.visible = false;

		SkirtX = [482];
		SkirtY = [773]
		Skirt = this.add.sprite(SkirtX[0]-2,SkirtY[0],"skirt");
		Skirt.anchor.setTo(0.5,0.5);
		Skirt.frame = Clothes.frame;
		Skirt.tint = defaultColor;
		Skirt.visible = false;

		Skirt_Outline = this.add.sprite(SkirtX[0],SkirtY[0],"skirt_outline");
		Skirt_Outline.anchor.setTo(0.5,0.5);
		Skirt_Outline.frame = Clothes.frame;
		Skirt_Outline.visible = false;

		Skirt_Shade = this.add.sprite(SkirtX[0],SkirtY[0],"skirt_shade");
		Skirt_Shade.anchor.setTo(0.5,0.5);
		Skirt_Shade.frame = Clothes.frame;
		Skirt_Shade.visible = false;

		Eye_Shadow = this.add.sprite(445,198,"eye_shadow");
		Eye_Shadow.anchor.setTo(0.5,0.5);
		Eye_Shadow.tint = defaultColor;
		Eye_Shadow.visible = false;

		Eyes_White = this.add.sprite(443,207,"eyes_white");
		Eyes_White.anchor.setTo(0.5,0.5);


		EyebrowX = [445,279,279];
		EyebrowY = [172,161,161];

		Eyebrows = this.add.button(EyebrowX[0],EyebrowY[0],"eyebrows");
		Eyebrows.anchor.setTo(0.5,0.5);
		Eyebrows.tint = defaultColor;
		Eyebrows.frame = 0;
		Eyebrows.visible = false;

		/*Eyebrows_Outline = this.add.button(Eyebrows.x,Eyebrows.y+1,"eyebrows_outline");
		Eyebrows_Outline.anchor.setTo(0.5,0.5);
		Eyebrows_Outline.frame = 0;
		Eyebrows_Outline.visible = false;//*/

		Eyes = this.add.sprite(441,213,"eyes");
		Eyes.anchor.setTo(0.5,0.5);
		Eyes.tint = 0x444444;

		/*Eyelashes = this.add.sprite(560,304,"eyelashes");
		Eyelashes.anchor.setTo(0.5,0.5);
		Eyelashes.visible = false;*/

		/*Face_Details = this.add.sprite(561,338,"face_details");
		Face_Details.anchor.setTo(0.5,0.5);
		Face_Details.visible = false;//*/

		LipsX = [439];
		LipsY = [279];

		Lips = this.add.sprite(LipsX[0],LipsY[0],"lips");
		Lips.anchor.setTo(0.5,0.5);
		Lips.frame = 0;

		/*Lips_Outline = this.add.sprite(Lips.x,Lips.y,"lips_outline");
		Lips_Outline.anchor.setTo(0.5,0.5);
		Lips_Outline.frame = Lips.frame;*/

		/*TeethX3 = 467;
		TeethY3 = 194;

		TeethX4 = 460;
		TeethY4 = 188;

		TeethX5 = 473;
		TeethY5 = 194;

		Teeth = this.add.sprite(TeethX3,TeethY3,"teeth");
		Teeth.anchor.setTo(0.5,0.5);
		Teeth.frame = 0;
		Teeth.visible = false;*/

		HairX = [493];
		HairY = [454];

		Hair = this.add.sprite(HairX[0],HairY[0],"hair");
		Hair.anchor.setTo(0.5,0.5);
		Hair.frame = 0;
		Hair.tint = defaultColor;

		Hair_Outline = this.add.sprite(Hair.x,Hair.y,"hair_outline");
		Hair_Outline.anchor.setTo(0.5,0.5);
		Hair_Outline.frame = Hair.frame;

		Hair_HlX = [198,250,250,250,249,250];
		Hair_HlY = [241,195,195,200,194,195];

		Hair_Hl = this.add.sprite(Hair.x + 9,Hair.y - 152,"hair_hl");
		Hair_Hl.anchor.setTo(0.5,0.5);
		Hair_Hl.frame = Hair.frame;
		Hair_Hl.visible = false;

		Hair_Shades = this.add.sprite(Hair.x,Hair.y,"hair_shades");
		Hair_Shades.anchor.setTo(0.5,0.5);
		Hair_Shades.frame = Hair.frame;
		Hair_Shades.visible = false;

		BangsX = [470];
		BangsY = [253];

		Bangs = this.add.sprite(BangsX[0],BangsY[0],"bangs");
		Bangs.anchor.setTo(0.5,0.5);
		Bangs.frame = 0;
		Bangs.tint = defaultColor;

		Bangs_Outline = this.add.sprite(Bangs.x,Bangs.y,"bangs_outline");
		Bangs_Outline.anchor.setTo(0.5,0.5);
		Bangs_Outline.frame = Bangs.frame;

		Bangs_Shade = this.add.sprite(Bangs.x,Bangs.y+1,"bangs_shades");
		Bangs_Shade.anchor.setTo(0.5,0.5);
		Bangs_Shade.frame = Bangs.frame;
		Bangs_Shade.visible = false;

		Bang_HlX = [429];
		Bang_HlY = [278];

		Bang_Hl = this.add.sprite(Bangs.x+14.5,Bangs.y,"bang_hl");
		Bang_Hl.anchor.setTo(0.5,0.5);
		Bang_Hl.tint = Colors2[19];
		Bang_Hl.frame = Bangs.frame;
		Bang_Hl.visible = false;

		Extra = this.add.sprite(451,152,"extras");
		Extra.anchor.setTo(0.5,0.5);
		Extra.tint = defaultColor;
		Extra.visible = false;

		Extra_Outline = this.add.sprite(Extra.x,Extra.y,"extras_outline");
		Extra_Outline.anchor.setTo(0.5,0.5);
		Extra_Outline.visible = false;

		Extra2 = this.add.sprite(317,612,"extras2");
		Extra2.anchor.setTo(0.5,0.5);
		Extra2.tint = defaultColor;
		Extra2.visible = false;

		Extra2_Outline = this.add.sprite(Extra2.x,Extra2.y,"extras2_outline");
		Extra2_Outline.anchor.setTo(0.5,0.5);
		Extra2_Outline.visible = false;

		Extra3 = this.add.sprite(522,284,"extras3");
		Extra3.anchor.setTo(0.5,0.5);
		Extra3.tint = defaultColor;
		Extra3.visible = false;

		Extra3_Outline = this.add.sprite(Extra3.x,Extra3.y,"extras3_outline");
		Extra3_Outline.anchor.setTo(0.5,0.5);
		Extra3_Outline.visible = false;

		Extra4 = this.add.sprite(475,91,"extras4");
		Extra4.anchor.setTo(0.5,0.5);
		Extra4.tint = defaultColor;
		Extra4.visible = false;

		Extra4_Outline = this.add.sprite(Extra4.x,Extra4.y,"extras4_outline");
		Extra4_Outline.anchor.setTo(0.5,0.5);
		Extra4_Outline.visible = false;

		Extra5 = this.add.sprite(387,566,"extras5");
		Extra5.anchor.setTo(0.5,0.5);
		Extra5.tint = defaultColor;
		Extra5.visible = false;

		Extra5_Outline = this.add.sprite(Extra5.x,Extra5.y,"extras5_outline");
		Extra5_Outline.anchor.setTo(0.5,0.5);
		Extra5_Outline.visible = false;

		Extra6 = this.add.sprite(440,204,"extras6");
		Extra6.anchor.setTo(0.5,0.5);
		Extra6.tint = defaultColor;
		Extra6.visible = false;

		Extra6_Outline = this.add.sprite(Extra6.x,Extra6.y,"extras6_outline");
		Extra6_Outline.anchor.setTo(0.5,0.5);
		Extra6_Outline.visible = false;

		Extra7 = this.add.sprite(133,443,"extras7");
		Extra7.anchor.setTo(0.5,0.5);
		Extra7.tint = defaultColor;
		Extra7.visible = false;

		Extra7_Outline = this.add.sprite(Extra7.x,Extra7.y,"extras7_outline");
		Extra7_Outline.anchor.setTo(0.5,0.5);
		Extra7_Outline.visible = false;

		Extra8 = this.add.sprite(278,569,"extras8");
		Extra8.anchor.setTo(0.5,0.5);
		Extra8.tint = defaultColor;
		Extra8.visible = false;

		Extra8_Outline = this.add.sprite(Extra8.x,Extra8.y,"extras8_outline");
		Extra8_Outline.anchor.setTo(0.5,0.5);
		Extra8_Outline.visible = false;

		Extra9 = this.add.sprite(203,482,"extras9");
		Extra9.anchor.setTo(0.5,0.5);
		Extra9.tint = defaultColor;
		Extra9.visible = false;

		Extra9_Outline = this.add.sprite(Extra9.x,Extra9.y,"extras9_outline");
		Extra9_Outline.anchor.setTo(0.5,0.5);
		Extra9_Outline.visible = false;

		ShoesX = [511];
		ShoesY = [891];

		Shoes = this.add.sprite(ShoesX[0],ShoesY[0],"shoes");
		Shoes.anchor.setTo(0.5,0.5);
		Shoes.frame = 0;
		Shoes.tint = defaultColor;
		Shoes.visible = false;

		Shoes_Outline = this.add.sprite(ShoesX[0],ShoesY[0],"shoes_outline");
		Shoes_Outline.anchor.setTo(0.5,0.5);
		Shoes_Outline.frame = Shoes.frame;
		Shoes_Outline.visible = false;

		Shoes_Shade = this.add.sprite(ShoesX[0],ShoesY[0],"shoes_shade");
		Shoes_Shade.anchor.setTo(0.5,0.5);
		Shoes_Shade.frame = Shoes.frame;
		Shoes_Shade.visible = false;

		Shadow = this.add.sprite(511,1040,"shadow");
		Shadow.anchor.setTo(0.5,0.5);

		/*BGX = [386,386,372,373,385,390];
		BGY = [217,232,234,235,226,191];

		BG = this.add.sprite(BGX[0],BGY[0],"cake");
		BG.anchor.setTo(0.5,0.5);
		BG.frame = 0;
		BG.tint = Colors[11];
		BG.visible = false;//

		BG_Outline = this.add.sprite(BG.x,BG.y,"cake_outline");
		BG_Outline.anchor.setTo(0.5,0.5);
		BG_Outline.frame = BG.frame;
		BG_Outline.visible = false;//*/

		Doll_Group = this.add.group();

		Doll_Group.add(Shadow);
		Doll_Group.add(Hair);
		Doll_Group.add(Hair_Hl);
		Doll_Group.add(Hair_Shades);
		Doll_Group.add(Hair_Outline);
		Doll_Group.add(Body);
		Doll_Group.add(Body_Outline);
		Doll_Group.add(Hand);
		Doll_Group.add(Hand_Outline);
		Doll_Group.add(Hand2);
		Doll_Group.add(Hand_Outline2);
		Doll_Group.add(Head);
		Doll_Group.add(Head_Outline);
		Doll_Group.add(Bra);
		Doll_Group.add(Panties);
		Doll_Group.add(Socks);
		Doll_Group.add(Socks_Outline);
		Doll_Group.add(Bottoms);
		Doll_Group.add(Bottoms_Shade);
		Doll_Group.add(Bottoms_Outline);
		Doll_Group.add(Shoes);
		Doll_Group.add(Shoes_Shade);
		Doll_Group.add(Shoes_Outline);
		Doll_Group.add(Skirt);
		Doll_Group.add(Skirt_Shade);
		Doll_Group.add(Skirt_Outline);
		Doll_Group.add(Clothes);
		Doll_Group.add(Clothes_Shade);
		Doll_Group.add(Clothes_Outline);
		Doll_Group.add(Eyes);
		Doll_Group.add(Eyes_White);
		Doll_Group.add(Eye_Shadow);
		//Doll_Group.add(Eyelashes);
		//Doll_Group.add(Face_Details);
		//Doll_Group.add(Eyebrows_Outline);
		Doll_Group.add(Eyebrows);
		Doll_Group.add(Lips);
		//Doll_Group.add(Lips_Outline);
		//Doll_Group.add(Teeth);
		Doll_Group.add(Bangs);
		Doll_Group.add(Bang_Hl);
		Doll_Group.add(Bangs_Shade);
		Doll_Group.add(Bangs_Outline);
		Doll_Group.add(Extra);
		Doll_Group.add(Extra_Outline);
		Doll_Group.add(Extra2);
		Doll_Group.add(Extra2_Outline);
		Doll_Group.add(Extra3);
		Doll_Group.add(Extra3_Outline);
		Doll_Group.add(Extra4);
		Doll_Group.add(Extra4_Outline);
		Doll_Group.add(Extra5);
		Doll_Group.add(Extra5_Outline);
		Doll_Group.add(Extra6);
		Doll_Group.add(Extra6_Outline);
		Doll_Group.add(Extra7);
		Doll_Group.add(Extra7_Outline);
		Doll_Group.add(Extra8);
		Doll_Group.add(Extra8_Outline);
		Doll_Group.add(Extra9);
		Doll_Group.add(Extra9_Outline);
		/*Doll_Group.add(BG);
		Doll_Group.add(BG_Outline);*/

		//Doll_Group.setAll("smoothed",false);
		Doll_Group.scale.setTo(0.5,0.5)
		Doll_Group.x = 0;
		Doll_Group.y = 1;


		//dressup
		pageY = 419;
		Border = this.add.sprite(702,230,"border");
		Border.anchor.setTo(0.5,0.5);

		DressUp_Btn = this.add.button(Border.x,110,"dressup_btn",this.DressUpBtn_fnc,this,1,0,0);
		DressUp_Btn.anchor.setTo(0.5,0.5);
		if(!this.game.device.desktop){this.buttonUp_fnc(DressUp_Btn); this.buttonDown_fnc(DressUp_Btn);};

		DressUp_Btn2 = this.add.button(Border.x,DressUp_Btn.y + DressUp_Btn.height + 15,"dressup_btn",this.DressUpBtn2_fnc,this,1,0,0);
		DressUp_Btn2.anchor.setTo(0.5,0.5);
		if(!this.game.device.desktop){this.buttonUp_fnc(DressUp_Btn2); this.buttonDown_fnc(DressUp_Btn2);};

		DressUp_Btn3 = this.add.button(Border.x,DressUp_Btn2.y + DressUp_Btn2.height + 13,"dressup_btn",this.DressUpBtn3_fnc,this,1,0,0);
		DressUp_Btn3.anchor.setTo(0.5,0.5);
		if(!this.game.device.desktop){this.buttonUp_fnc(DressUp_Btn3); this.buttonDown_fnc(DressUp_Btn3);};

		DressUp_Btn_Group = this.add.group();
		DressUp_Btn_Group.add(DressUp_Btn);
		DressUp_Btn_Group.add(DressUp_Btn2);
		DressUp_Btn_Group.add(DressUp_Btn3);

		//Hair_Menu
		Hair_Icon = this.add.sprite(707,227,"bangs_icon");
		Hair_Icon.anchor.setTo(0.5,0.5);

		Hair_Icon2 = this.add.sprite(704,237,"bangs_icon2");
		Hair_Icon2.anchor.setTo(0.5,0.5);
		Hair_Icon2.visible = false;

		Hair_Icon3 = this.add.sprite(704,217,"bangs_icon3");
		Hair_Icon3.anchor.setTo(0.5,0.5);
		Hair_Icon3.visible = false;

		Hair_Page = this.add.sprite(Border.x,pageY,"page3");
		Hair_Page.anchor.setTo(0.5,0.5);

		Hair_Icon_Group = this.add.group();
		Hair_Icon_Group.add(Hair_Icon);
		Hair_Icon_Group.add(Hair_Icon2);
		Hair_Icon_Group.add(Hair_Icon3);
		Hair_Icon_Group.add(Hair_Page);

		//Color_Icon
		Color_Pallette = this.add.sprite(Border.x,Border.y - 23,"color_pallette");
		Color_Pallette.anchor.setTo(0.5,0.5);

		Color_Pallette2 = this.add.sprite(Border.x,Border.y - 23,"color_pallette2");
		Color_Pallette2.anchor.setTo(0.5,0.5);
		Color_Pallette2.visible = false;

		Color01_Icon = this.add.button(583,59,"color_icon_btn",function()
		{
			this.changeColor(0,40);
		},this);
		Color01_Icon.anchor.setTo(0.5,0.5);
		Color01_Icon.alpha = 0;

		Color02_Icon = this.add.button(Color01_Icon.x + Color01_Icon.width +20,Color01_Icon.y,"color_icon_btn",function()
		{
			this.changeColor(1,41);
		},this,1,0,0);
		Color02_Icon.anchor.setTo(0.5,0.5);
		Color02_Icon.alpha = 0;

		Color03_Icon = this.add.button(Color02_Icon.x + Color02_Icon.width + 20,Color02_Icon.y,"color_icon_btn",function()
		{
			this.changeColor(2,42);
		},this,1,0,0);
		Color03_Icon.anchor.setTo(0.5,0.5);
		Color03_Icon.alpha = 0;

		Color04_Icon = this.add.button(Color03_Icon.x + Color03_Icon.width + 25,Color03_Icon.y,"color_icon_btn",function()
		{
			this.changeColor(3,43);
		},this,1,0,0);
		Color04_Icon.anchor.setTo(0.5,0.5);
		Color04_Icon.alpha = 0;

		Color05_Icon = this.add.button(Color04_Icon.x + Color04_Icon.width + 20,Color04_Icon.y,"color_icon_btn",function()
		{
			this.changeColor(4,44);
		},this,1,0,0);
		Color05_Icon.anchor.setTo(0.5,0.5);
		Color05_Icon.alpha = 0;

		Color06_Icon = this.add.button(Color01_Icon.x,Color01_Icon.y + Color01_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(5,45);
		},this,1,0,0);
		Color06_Icon.anchor.setTo(0.5,0.5);
		Color06_Icon.alpha = 0;

		Color07_Icon = this.add.button(Color02_Icon.x,Color02_Icon.y + Color02_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(6,46);
		},this,1,0,0);
		Color07_Icon.anchor.setTo(0.5,0.5);
		Color07_Icon.alpha = 0;

		Color08_Icon = this.add.button(Color03_Icon.x + 2,Color03_Icon.y + Color03_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(7,47);
		},this,1,0,0);
		Color08_Icon.anchor.setTo(0.5,0.5);
		Color08_Icon.alpha = 0;

		Color09_Icon = this.add.button(Color04_Icon.x,Color04_Icon.y + Color04_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(8,48);
		},this,1,0,0);
		Color09_Icon.anchor.setTo(0.5,0.5);
		Color09_Icon.alpha = 0;

		Color10_Icon = this.add.button(Color05_Icon.x,Color05_Icon.y + Color05_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(9,49);
		},this,1,0,0);
		Color10_Icon.anchor.setTo(0.5,0.5);
		Color10_Icon.alpha = 0;

		Color11_Icon = this.add.button(Color06_Icon.x,Color06_Icon.y + Color06_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(10,50);
		},this,1,0,0);
		Color11_Icon.anchor.setTo(0.5,0.5);
		Color11_Icon.alpha = 0;

		Color12_Icon = this.add.button(Color07_Icon.x,Color07_Icon.y + Color07_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(11,51);
		},this);
		Color12_Icon.anchor.setTo(0.5,0.5);
		Color12_Icon.alpha = 0;

		Color13_Icon = this.add.button(Color08_Icon.x,Color08_Icon.y + Color08_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(12,52);
		},this);
		Color13_Icon.anchor.setTo(0.5,0.5);
		Color13_Icon.alpha = 0;

		Color14_Icon = this.add.button(Color09_Icon.x,Color09_Icon.y + Color09_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(13,53);
		},this);
		Color14_Icon.anchor.setTo(0.5,0.5);
		Color14_Icon.alpha = 0;

		Color15_Icon = this.add.button(Color10_Icon.x,Color10_Icon.y + Color10_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(14,54);
		},this);
		Color15_Icon.anchor.setTo(0.5,0.5);
		Color15_Icon.alpha = 0;

		Color16_Icon = this.add.button(Color11_Icon.x,Color11_Icon.y + Color11_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(15,55);
		},this);
		Color16_Icon.anchor.setTo(0.5,0.5);
		Color16_Icon.alpha = 0;

		Color17_Icon = this.add.button(Color12_Icon.x,Color12_Icon.y + Color12_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(16,56);
		},this);
		Color17_Icon.anchor.setTo(0.5,0.5);
		Color17_Icon.alpha = 0;

		Color18_Icon = this.add.button(Color13_Icon.x,Color13_Icon.y + Color13_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(17,57);
		},this);
		Color18_Icon.anchor.setTo(0.5,0.5);
		Color18_Icon.alpha = 0;

		Color19_Icon = this.add.button(Color14_Icon.x,Color14_Icon.y + Color14_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(18,58);
		},this);
		Color19_Icon.anchor.setTo(0.5,0.5);
		Color19_Icon.alpha = 0;

		Color20_Icon = this.add.button(Color15_Icon.x,Color15_Icon.y + Color15_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(19,59);
		},this);
		Color20_Icon.anchor.setTo(0.5,0.5);
		Color20_Icon.alpha = 0;

		Color21_Icon = this.add.button(Color16_Icon.x,Color16_Icon.y + Color16_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(20,60);
		},this);
		Color21_Icon.anchor.setTo(0.5,0.5);
		Color21_Icon.alpha = 0;

		Color22_Icon = this.add.button(Color17_Icon.x,Color17_Icon.y + Color17_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(21,61);
		},this);
		Color22_Icon.anchor.setTo(0.5,0.5);
		Color22_Icon.alpha = 0;

		Color23_Icon = this.add.button(Color18_Icon.x,Color18_Icon.y + Color18_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(22,62);
		},this);
		Color23_Icon.anchor.setTo(0.5,0.5);
		Color23_Icon.alpha = 0;

		Color24_Icon = this.add.button(Color19_Icon.x,Color19_Icon.y + Color19_Icon.height + 2,"color_icon_btn",function()
		{
			this.changeColor(23,63);
		},this);
		Color24_Icon.anchor.setTo(0.5,0.5);
		Color24_Icon.alpha = 0;

		Color25_Icon = this.add.button(Color20_Icon.x,Color20_Icon.y + Color20_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(24,64);
		},this);
		Color25_Icon.anchor.setTo(0.5,0.5);
		Color25_Icon.alpha = 0;

		Color26_Icon = this.add.button(Color21_Icon.x,Color21_Icon.y + Color21_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(25,65);
		},this);
		Color26_Icon.anchor.setTo(0.5,0.5);
		Color26_Icon.alpha = 0;

		Color27_Icon = this.add.button(Color22_Icon.x,Color22_Icon.y + Color22_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(26,66);
		},this);
		Color27_Icon.anchor.setTo(0.5,0.5);
		Color27_Icon.alpha = 0;

		Color28_Icon = this.add.button(Color23_Icon.x,Color23_Icon.y + Color23_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(27,67);
		},this);
		Color28_Icon.anchor.setTo(0.5,0.5);
		Color28_Icon.alpha = 0;

		Color29_Icon = this.add.button(Color24_Icon.x,Color24_Icon.y + Color24_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(28,68);
		},this);
		Color29_Icon.anchor.setTo(0.5,0.5);
		Color29_Icon.alpha = 0;

		Color30_Icon = this.add.button(Color25_Icon.x,Color25_Icon.y + Color25_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(29,69);
		},this);
		Color30_Icon.anchor.setTo(0.5,0.5);
		Color30_Icon.alpha = 0;

		Color31_Icon = this.add.button(Color26_Icon.x,Color26_Icon.y + Color26_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(30,70);
		},this);
		Color31_Icon.anchor.setTo(0.5,0.5);
		Color31_Icon.alpha = 0;

		Color32_Icon = this.add.button(Color27_Icon.x,Color27_Icon.y + Color27_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(31,71);
		},this);
		Color32_Icon.anchor.setTo(0.5,0.5);
		Color32_Icon.alpha = 0;

		Color33_Icon = this.add.button(Color28_Icon.x,Color28_Icon.y + Color28_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(32,72);
		},this);
		Color33_Icon.anchor.setTo(0.5,0.5);
		Color33_Icon.alpha = 0;

		Color34_Icon = this.add.button(Color29_Icon.x,Color29_Icon.y + Color29_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(33,73);
		},this);
		Color34_Icon.anchor.setTo(0.5,0.5);
		Color34_Icon.alpha = 0;

		Color35_Icon = this.add.button(Color30_Icon.x,Color30_Icon.y + Color30_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(34,74);
		},this);
		Color35_Icon.anchor.setTo(0.5,0.5);
		Color35_Icon.alpha = 0;

		Color36_Icon = this.add.button(Color31_Icon.x,Color31_Icon.y + Color31_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(35,75);
		},this);
		Color36_Icon.anchor.setTo(0.5,0.5);
		Color36_Icon.alpha = 0;

		Color37_Icon = this.add.button(Color32_Icon.x,Color32_Icon.y + Color32_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(36,76);
		},this);
		Color37_Icon.anchor.setTo(0.5,0.5);
		Color37_Icon.alpha = 0;

		Color38_Icon = this.add.button(Color33_Icon.x,Color33_Icon.y + Color33_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(37,77);
		},this);
		Color38_Icon.anchor.setTo(0.5,0.5);
		Color38_Icon.alpha = 0;

		Color39_Icon = this.add.button(Color34_Icon.x,Color34_Icon.y + Color34_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(38,78);
		},this);
		Color39_Icon.anchor.setTo(0.5,0.5);
		Color39_Icon.alpha = 0;

		Color40_Icon = this.add.button(Color35_Icon.x,Color35_Icon.y + Color35_Icon.height + 1,"color_icon_btn",function()
		{
			this.changeColor(39,79);
		},this);
		Color40_Icon.anchor.setTo(0.5,0.5);
		Color40_Icon.alpha = 0;

		//Eyebrows_Icon
		Eyebrows_Icon = this.add.sprite(700,225,"eyebrows_icon");
		Eyebrows_Icon.anchor.setTo(0.5,0.5);

		Eyebrows_Icon2 = this.add.sprite(700,225,"eyebrows_icon2");
		Eyebrows_Icon2.anchor.setTo(0.5,0.5);

		Eyebrows_Page = this.add.sprite(Border.x,pageY,"page2");
		Eyebrows_Page.anchor.setTo(0.5,0.5);

		Eyebrows_Icon_Group = this.add.group();
		Eyebrows_Icon_Group.add(Eyebrows_Icon);
		Eyebrows_Icon_Group.add(Eyebrows_Icon2);
		Eyebrows_Icon_Group.add(Eyebrows_Page);
		Eyebrows_Icon_Group.visible = false;

		//Cheeks_Icon

		//Eyes_Icon
		Eyes_Icon = this.add.sprite(701,229,"eyes_icon");
		Eyes_Icon.anchor.setTo(0.5,0.5);

		Eyes_Icon2 = this.add.sprite(701,229,"eyes_icon2");
		Eyes_Icon2.anchor.setTo(0.5,0.5);

		Eyes_Icon3 = this.add.sprite(701,229,"eyes_icon3");
		Eyes_Icon3.anchor.setTo(0.5,0.5);

		Eyes_Page = this.add.sprite(Border.x,pageY,"page3");
		Eyes_Page.anchor.setTo(0.5,0.5);

		Eyes_Icon_Group = this.add.group();
		Eyes_Icon_Group.add(Eyes_Icon);
		Eyes_Icon_Group.add(Eyes_Icon2);
		Eyes_Icon_Group.add(Eyes_Icon3);
		Eyes_Icon_Group.add(Eyes_Page);
		Eyes_Icon_Group.visible = false;

		//Lips_Icon
		Lips_Icon = this.add.sprite(701,229,"lips01_icon");
		Lips_Icon.anchor.setTo(0.5,0.5);

		Lips_Icon2 = this.add.sprite(701,229,"lips02_icon");
		Lips_Icon2.anchor.setTo(0.5,0.5);

		Lips_Icon3 = this.add.sprite(701,229,"lips03_icon");
		Lips_Icon3.anchor.setTo(0.5,0.5);


		Lips_Page = this.add.sprite(Border.x,pageY,"page3");
		Lips_Page.anchor.setTo(0.5,0.5);

		Lips_Icon_Group = this.add.group();
		Lips_Icon_Group.add(Lips_Icon);
		Lips_Icon_Group.add(Lips_Icon2);
		Lips_Icon_Group.add(Lips_Icon3);
		Lips_Icon_Group.add(Lips_Page);
		Lips_Icon_Group.visible = false;

		//SkinColor_Icon
		SkinColor_Pallette = this.add.sprite(Color_Pallette.x,Color_Pallette.y,"skincolor01_icon");
		SkinColor_Pallette.anchor.setTo(0.5,0.5);

		SkinColor_Pallette2 = this.add.sprite(Color_Pallette.x,Color_Pallette.y,"skincolor02_icon");
		SkinColor_Pallette2.anchor.setTo(0.5,0.5);
		SkinColor_Pallette2.visible = false;

		SkinColor01_Icon = this.add.button(Color01_Icon.x,Color01_Icon.y,"color_icon_btn",function()
		{
			this.SkinColor_fnc(0);
		},this);
		SkinColor01_Icon.anchor.setTo(0.5,0.5);
		SkinColor01_Icon.alpha = 0;

		SkinColor02_Icon = this.add.button(Color02_Icon.x,Color02_Icon.y,"color_icon_btn",function()
		{
			this.SkinColor_fnc(1);
		},this,1,0,0);
		SkinColor02_Icon.anchor.setTo(0.5,0.5);
		SkinColor02_Icon.alpha = 0;

		SkinColor03_Icon = this.add.button(Color03_Icon.x,Color03_Icon.y,"color_icon_btn",function()
		{
			this.SkinColor_fnc(2);
		},this,1,0,0);
		SkinColor03_Icon.anchor.setTo(0.5,0.5);
		SkinColor03_Icon.alpha = 0;

		SkinColor04_Icon = this.add.button(Color04_Icon.x,Color04_Icon.y,"color_icon_btn",function()
		{
			this.SkinColor_fnc(3);
		},this,1,0,0);
		SkinColor04_Icon.anchor.setTo(0.5,0.5);
		SkinColor04_Icon.alpha = 0;

		SkinColor05_Icon = this.add.button(Color05_Icon.x,Color05_Icon.y,"color_icon_btn",function()
		{
			this.SkinColor_fnc(4);
		},this,1,0,0);
		SkinColor05_Icon.anchor.setTo(0.5,0.5);
		SkinColor05_Icon.alpha = 0;

		SkinColor06_Icon = this.add.button(SkinColor01_Icon.x,SkinColor01_Icon.y + SkinColor01_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(5);
		},this,1,0,0);
		SkinColor06_Icon.anchor.setTo(0.5,0.5);
		SkinColor06_Icon.alpha = 0;

		SkinColor07_Icon = this.add.button(SkinColor02_Icon.x,SkinColor02_Icon.y + SkinColor02_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(6);
		},this,1,0,0);
		SkinColor07_Icon.anchor.setTo(0.5,0.5);
		SkinColor07_Icon.alpha = 0;

		SkinColor08_Icon = this.add.button(SkinColor03_Icon.x + 2,SkinColor03_Icon.y + SkinColor03_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(7);
		},this,1,0,0);
		SkinColor08_Icon.anchor.setTo(0.5,0.5);
		SkinColor08_Icon.alpha = 0;

		SkinColor09_Icon = this.add.button(SkinColor04_Icon.x,SkinColor04_Icon.y + SkinColor04_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(8);
		},this,1,0,0);
		SkinColor09_Icon.anchor.setTo(0.5,0.5);
		SkinColor09_Icon.alpha = 0;

		SkinColor10_Icon = this.add.button(SkinColor05_Icon.x,SkinColor05_Icon.y + SkinColor05_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(9);
		},this,1,0,0);
		SkinColor10_Icon.anchor.setTo(0.5,0.5);
		SkinColor10_Icon.alpha = 0;

		SkinColor11_Icon = this.add.button(SkinColor06_Icon.x,SkinColor06_Icon.y + SkinColor06_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(10);
		},this,1,0,0);
		SkinColor11_Icon.anchor.setTo(0.5,0.5);
		SkinColor11_Icon.alpha = 0;

		SkinColor12_Icon = this.add.button(SkinColor07_Icon.x,SkinColor07_Icon.y + SkinColor07_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(11);
		},this);
		SkinColor12_Icon.anchor.setTo(0.5,0.5);
		SkinColor12_Icon.alpha = 0;

		SkinColor13_Icon = this.add.button(SkinColor08_Icon.x,SkinColor08_Icon.y + SkinColor08_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(12);
		},this);
		SkinColor13_Icon.anchor.setTo(0.5,0.5);
		SkinColor13_Icon.alpha = 0;

		SkinColor14_Icon = this.add.button(SkinColor09_Icon.x,SkinColor09_Icon.y + SkinColor09_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(13);
		},this);
		SkinColor14_Icon.anchor.setTo(0.5,0.5);
		SkinColor14_Icon.alpha = 0;

		SkinColor15_Icon = this.add.button(SkinColor10_Icon.x,SkinColor10_Icon.y + SkinColor10_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(14);
		},this);
		SkinColor15_Icon.anchor.setTo(0.5,0.5);
		SkinColor15_Icon.alpha = 0;

		SkinColor16_Icon = this.add.button(SkinColor11_Icon.x,SkinColor11_Icon.y + SkinColor11_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(15);
		},this);
		SkinColor16_Icon.anchor.setTo(0.5,0.5);
		SkinColor16_Icon.alpha = 0;

		SkinColor17_Icon = this.add.button(SkinColor12_Icon.x,SkinColor12_Icon.y + SkinColor12_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(16);
		},this);
		SkinColor17_Icon.anchor.setTo(0.5,0.5);
		SkinColor17_Icon.alpha = 0;

		SkinColor18_Icon = this.add.button(SkinColor13_Icon.x,SkinColor13_Icon.y + SkinColor13_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(17);
		},this);
		SkinColor18_Icon.anchor.setTo(0.5,0.5);
		SkinColor18_Icon.alpha = 0;

		SkinColor19_Icon = this.add.button(SkinColor14_Icon.x,SkinColor14_Icon.y + SkinColor14_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(18);
		},this);
		SkinColor19_Icon.anchor.setTo(0.5,0.5);
		SkinColor19_Icon.alpha = 0;

		SkinColor20_Icon = this.add.button(SkinColor15_Icon.x,SkinColor15_Icon.y + SkinColor15_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(19);
		},this);
		SkinColor20_Icon.anchor.setTo(0.5,0.5);
		SkinColor20_Icon.alpha = 0;

		SkinColor21_Icon = this.add.button(SkinColor16_Icon.x,SkinColor16_Icon.y + SkinColor16_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(20);
		},this);
		SkinColor21_Icon.anchor.setTo(0.5,0.5);
		SkinColor21_Icon.alpha = 0;

		SkinColor22_Icon = this.add.button(SkinColor17_Icon.x,SkinColor17_Icon.y + SkinColor17_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(21);
		},this);
		SkinColor22_Icon.anchor.setTo(0.5,0.5);
		SkinColor22_Icon.alpha = 0;

		SkinColor23_Icon = this.add.button(SkinColor18_Icon.x,SkinColor18_Icon.y + SkinColor18_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(22);
		},this);
		SkinColor23_Icon.anchor.setTo(0.5,0.5);
		SkinColor23_Icon.alpha = 0;

		SkinColor24_Icon = this.add.button(SkinColor19_Icon.x,SkinColor19_Icon.y + SkinColor19_Icon.height + 2,"color_icon_btn",function()
		{
			this.SkinColor_fnc(23);
		},this);
		SkinColor24_Icon.anchor.setTo(0.5,0.5);
		SkinColor24_Icon.alpha = 0;

		SkinColor25_Icon = this.add.button(SkinColor20_Icon.x,SkinColor20_Icon.y + SkinColor20_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(24);
		},this);
		SkinColor25_Icon.anchor.setTo(0.5,0.5);
		SkinColor25_Icon.alpha = 0;

		SkinColor26_Icon = this.add.button(SkinColor21_Icon.x,SkinColor21_Icon.y + SkinColor21_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(25);
		},this);
		SkinColor26_Icon.anchor.setTo(0.5,0.5);
		SkinColor26_Icon.alpha = 0;

		SkinColor27_Icon = this.add.button(SkinColor22_Icon.x,SkinColor22_Icon.y + SkinColor22_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(26);
		},this);
		SkinColor27_Icon.anchor.setTo(0.5,0.5);
		SkinColor27_Icon.alpha = 0;

		SkinColor28_Icon = this.add.button(SkinColor23_Icon.x,SkinColor23_Icon.y + SkinColor23_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(27);
		},this);
		SkinColor28_Icon.anchor.setTo(0.5,0.5);
		SkinColor28_Icon.alpha = 0;

		SkinColor29_Icon = this.add.button(SkinColor24_Icon.x,SkinColor24_Icon.y + SkinColor24_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(28);
		},this);
		SkinColor29_Icon.anchor.setTo(0.5,0.5);
		SkinColor29_Icon.alpha = 0;

		SkinColor30_Icon = this.add.button(SkinColor25_Icon.x,SkinColor25_Icon.y + SkinColor25_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(29);
		},this);
		SkinColor30_Icon.anchor.setTo(0.5,0.5);
		SkinColor30_Icon.alpha = 0;

		SkinColor31_Icon = this.add.button(SkinColor26_Icon.x,SkinColor26_Icon.y + SkinColor26_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(30);
		},this);
		SkinColor31_Icon.anchor.setTo(0.5,0.5);
		SkinColor31_Icon.alpha = 0;

		SkinColor32_Icon = this.add.button(SkinColor27_Icon.x,SkinColor27_Icon.y + SkinColor27_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(31);
		},this);
		SkinColor32_Icon.anchor.setTo(0.5,0.5);
		SkinColor32_Icon.alpha = 0;

		SkinColor33_Icon = this.add.button(SkinColor28_Icon.x,SkinColor28_Icon.y + SkinColor28_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(32);
		},this);
		SkinColor33_Icon.anchor.setTo(0.5,0.5);
		SkinColor33_Icon.alpha = 0;

		SkinColor34_Icon = this.add.button(SkinColor29_Icon.x,SkinColor29_Icon.y + SkinColor29_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(33);
		},this);
		SkinColor34_Icon.anchor.setTo(0.5,0.5);
		SkinColor34_Icon.alpha = 0;

		SkinColor35_Icon = this.add.button(SkinColor30_Icon.x,SkinColor30_Icon.y + SkinColor30_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(34);
		},this);
		SkinColor35_Icon.anchor.setTo(0.5,0.5);
		SkinColor35_Icon.alpha = 0;

		SkinColor36_Icon = this.add.button(SkinColor31_Icon.x,SkinColor31_Icon.y + SkinColor31_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(35);
		},this);
		SkinColor36_Icon.anchor.setTo(0.5,0.5);
		SkinColor36_Icon.alpha = 0;

		SkinColor37_Icon = this.add.button(SkinColor32_Icon.x,SkinColor32_Icon.y + SkinColor32_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(36);
		},this);
		SkinColor37_Icon.anchor.setTo(0.5,0.5);
		SkinColor37_Icon.alpha = 0;

		SkinColor38_Icon = this.add.button(SkinColor33_Icon.x,SkinColor33_Icon.y + SkinColor33_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(37);
		},this);
		SkinColor38_Icon.anchor.setTo(0.5,0.5);
		SkinColor38_Icon.alpha = 0;

		SkinColor39_Icon = this.add.button(SkinColor34_Icon.x,SkinColor34_Icon.y + SkinColor34_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(38);
		},this);
		SkinColor39_Icon.anchor.setTo(0.5,0.5);
		SkinColor39_Icon.alpha = 0;

		SkinColor40_Icon = this.add.button(SkinColor35_Icon.x,SkinColor35_Icon.y + SkinColor35_Icon.height + 1,"color_icon_btn",function()
		{
			this.SkinColor_fnc(39);
		},this);
		SkinColor40_Icon.anchor.setTo(0.5,0.5);
		SkinColor40_Icon.alpha = 0;



		Skin_Prev = this.add.button(612,407,"back_btn",function()
		{
			skinColorPage--;
			if(skinColorPage == 2)
			{
				SkinColor_Pallette.visible = false;
				SkinColor_Pallette2.visible = true;
			}
			else if(skinColorPage <= 1)
			{
				SkinColor_Pallette.visible = true;
				SkinColor_Pallette2.visible = false;
				skinColorPage = 1;
			}
		},this,1,0,2);
		Skin_Prev.anchor.setTo(0.5,0.5);


		Skin_Next = this.add.button(793,Skin_Prev.y,"back_btn",function()
		{
			skinColorPage++;
			if(skinColorPage == 1)
			{
				SkinColor_Pallette.visible = true;
				SkinColor_Pallette2.visible = false;
			}
			else if(skinColorPage >= 2)
			{
				SkinColor_Pallette.visible = false;
				SkinColor_Pallette2.visible = true;
				skinColorPage = 2;
			}
		},this,1,0,2);
		Skin_Next.anchor.setTo(0.5,0.5);
		Skin_Next.scale.setTo(-1,1);
		

		SkinColor_Menu_Group = this.add.group();
		SkinColor_Menu_Group.add(SkinColor_Pallette);
		SkinColor_Menu_Group.add(SkinColor_Pallette2);
		SkinColor_Menu_Group.add(SkinColor01_Icon);
		SkinColor_Menu_Group.add(SkinColor02_Icon);
		SkinColor_Menu_Group.add(SkinColor03_Icon);
		SkinColor_Menu_Group.add(SkinColor04_Icon);
		SkinColor_Menu_Group.add(SkinColor05_Icon);
		SkinColor_Menu_Group.add(SkinColor06_Icon);
		SkinColor_Menu_Group.add(SkinColor07_Icon);
		SkinColor_Menu_Group.add(SkinColor08_Icon);
		SkinColor_Menu_Group.add(SkinColor09_Icon);
		SkinColor_Menu_Group.add(SkinColor10_Icon);
		SkinColor_Menu_Group.add(SkinColor11_Icon);
		SkinColor_Menu_Group.add(SkinColor12_Icon);
		SkinColor_Menu_Group.add(SkinColor13_Icon);
		SkinColor_Menu_Group.add(SkinColor14_Icon);
		SkinColor_Menu_Group.add(SkinColor15_Icon);
		SkinColor_Menu_Group.add(SkinColor16_Icon);
		SkinColor_Menu_Group.add(SkinColor17_Icon);
		SkinColor_Menu_Group.add(SkinColor18_Icon);
		SkinColor_Menu_Group.add(SkinColor19_Icon);
		SkinColor_Menu_Group.add(SkinColor20_Icon);
		SkinColor_Menu_Group.add(SkinColor21_Icon);
		SkinColor_Menu_Group.add(SkinColor22_Icon);
		SkinColor_Menu_Group.add(SkinColor23_Icon);
		SkinColor_Menu_Group.add(SkinColor24_Icon);
		SkinColor_Menu_Group.add(SkinColor25_Icon);
		SkinColor_Menu_Group.add(SkinColor26_Icon);
		SkinColor_Menu_Group.add(SkinColor27_Icon);
		SkinColor_Menu_Group.add(SkinColor28_Icon);
		SkinColor_Menu_Group.add(SkinColor29_Icon);
		SkinColor_Menu_Group.add(SkinColor30_Icon);
		SkinColor_Menu_Group.add(SkinColor31_Icon);
		SkinColor_Menu_Group.add(SkinColor32_Icon);
		SkinColor_Menu_Group.add(SkinColor33_Icon);
		SkinColor_Menu_Group.add(SkinColor34_Icon);
		SkinColor_Menu_Group.add(SkinColor35_Icon);
		SkinColor_Menu_Group.add(SkinColor36_Icon);
		SkinColor_Menu_Group.add(SkinColor37_Icon);
		SkinColor_Menu_Group.add(SkinColor38_Icon);
		SkinColor_Menu_Group.add(SkinColor39_Icon);
		SkinColor_Menu_Group.add(SkinColor40_Icon);
		SkinColor_Menu_Group.add(Skin_Prev);
		SkinColor_Menu_Group.add(Skin_Next);
		SkinColor_Menu_Group.visible = false;

		//Tops_Icon
		Tops_Icon = this.add.sprite(701,229,"tops_icon");
		Tops_Icon.anchor.setTo(0.5,0.5);

		Tops_Icon2 = this.add.sprite(701,229,"tops_icon2");
		Tops_Icon2.anchor.setTo(0.5,0.5);

		Tops_Icon3 = this.add.sprite(701,229,"tops_icon3");
		Tops_Icon3.anchor.setTo(0.5,0.5);

		Tops_Page = this.add.sprite(Border.x,pageY,"page3");
		Tops_Page.anchor.setTo(0.5,0.5);

		Top_Icon_Group = this.add.group();
		Top_Icon_Group.add(Tops_Icon);
		Top_Icon_Group.add(Tops_Icon2);
		Top_Icon_Group.add(Tops_Icon3);
		Top_Icon_Group.add(Tops_Page);
		Top_Icon_Group.visible = false;

		//Bottoms_Icon
		Bottoms_Icon = this.add.sprite(703,235,"bottoms_icon");
		Bottoms_Icon.anchor.setTo(0.5,0.5);

		Bottoms_Icon2 = this.add.sprite(703,235,"bottoms_icon2");
		Bottoms_Icon2.anchor.setTo(0.5,0.5);
		
		Bottoms_Icon3 = this.add.sprite(703,228,"bottoms_icon3");
		Bottoms_Icon3.anchor.setTo(0.5,0.5);

		Bottoms_Page = this.add.sprite(Border.x,pageY,"page3");
		Bottoms_Page.anchor.setTo(0.5,0.5);

		Bottoms_Icon_Group = this.add.group();
		Bottoms_Icon_Group.add(Bottoms_Icon);
		Bottoms_Icon_Group.add(Bottoms_Icon2);
		Bottoms_Icon_Group.add(Bottoms_Icon3);
		Bottoms_Icon_Group.add(Bottoms_Page);
		Bottoms_Icon_Group.visible = false;

		//Skirt_Icon
		Skirt_Icon = this.add.sprite(702,224,"skirt_icon");
		Skirt_Icon.anchor.setTo(0.5,0.5);

		Skirt_Icon2 = this.add.sprite(702,244,"skirt_icon2");
		Skirt_Icon2.anchor.setTo(0.5,0.5);

		Skirt_Page = this.add.sprite(Border.x,pageY,"page2");
		Skirt_Page.anchor.setTo(0.5,0.5);

		Skirt_Icon_Group = this.add.group();
		Skirt_Icon_Group.add(Skirt_Icon);
		Skirt_Icon_Group.add(Skirt_Icon2);
		Skirt_Icon_Group.add(Skirt_Page);
		Skirt_Icon_Group.visible = false;

		//Shoes_Icon
		Shoes_Icon = this.add.sprite(701,233,"shoes_icon");
		Shoes_Icon.anchor.setTo(0.5,0.5);

		Shoes_Icon2 = this.add.sprite(701,233,"shoes_icon2");
		Shoes_Icon2.anchor.setTo(0.5,0.5);

		Shoes_Icon3 = this.add.sprite(701,233,"shoes_icon3");
		Shoes_Icon3.anchor.setTo(0.5,0.5);

		Shoes_Page = this.add.sprite(Border.x,pageY,"page3");
		Shoes_Page.anchor.setTo(0.5,0.5);

		Shoes_Icon_Group = this.add.group();
		Shoes_Icon_Group.add(Shoes_Icon);
		Shoes_Icon_Group.add(Shoes_Icon2);
		Shoes_Icon_Group.add(Shoes_Icon3);
		Shoes_Icon_Group.add(Shoes_Page);
		Shoes_Icon_Group.visible = false;

		//Socks_Icon
		Socks_Icon = this.add.sprite(701,242,"socks_icon");
		Socks_Icon.anchor.setTo(0.5,0.5);

		Socks_Icon2 = this.add.sprite(701,212,"socks_icon2");
		Socks_Icon2.anchor.setTo(0.5,0.5);

		Socks_Page = this.add.sprite(Border.x,pageY,"page2");
		Socks_Page.anchor.setTo(0.5,0.5);

		Socks_Icon_Group = this.add.group();
		Socks_Icon_Group.add(Socks_Icon);
		Socks_Icon_Group.add(Socks_Icon2);
		Socks_Icon_Group.add(Socks_Page);
		Socks_Icon_Group.visible = false;

		//Extra_Icon
		Extra_Icon = this.add.sprite(699,234,"extra_icon");
		Extra_Icon.anchor.setTo(0.5,0.5);

		Extra_Icon2 = this.add.sprite(699,234,"extra_icon2");
		Extra_Icon2.anchor.setTo(0.5,0.5);

		Extra_Icon3 = this.add.sprite(699,234,"extra_icon3");
		Extra_Icon3.anchor.setTo(0.5,0.5);

		Extra_Page = this.add.sprite(Border.x,pageY,"page3");
		Extra_Page.anchor.setTo(0.5,0.5);

		Extra_Icon_Group = this.add.group();
		Extra_Icon_Group.add(Extra_Icon);
		Extra_Icon_Group.add(Extra_Icon2);
		Extra_Icon_Group.add(Extra_Icon3);
		Extra_Icon_Group.add(Extra_Page);
		Extra_Icon_Group.visible = false;

		//BG_Icon
		BG_Icon = this.add.sprite(702,230,"bg_icon");
		BG_Icon.anchor.setTo(0.5,0.5);

		BG_Icon2 = this.add.sprite(702,230,"bg_icon2");
		BG_Icon2.anchor.setTo(0.5,0.5);

		BG_Icon3 = this.add.sprite(702,230,"bg_icon3");
		BG_Icon3.anchor.setTo(0.5,0.5);

		BG_Page = this.add.sprite(Border.x,pageY,"page3");
		BG_Page.anchor.setTo(0.5,0.5);

		BG_Icon_Group = this.add.group();
		BG_Icon_Group.add(BG_Icon);
		BG_Icon_Group.add(BG_Icon2);
		BG_Icon_Group.add(BG_Icon3);
		BG_Icon_Group.add(BG_Page);
		BG_Icon_Group.visible = false;

		Hair_Shade_Btn = this.add.button(661,13,"hair_shade_btn",function()
		{
			ShadeBool = true;
			Hl_Bool = false;

			Shade_Star.visible = true;
			Hl_Star.visible = false;
		},this);
		Hair_Shade_Btn.anchor.setTo(0.5,0.5);

		Hair_Hl_Btn = this.add.button(749,13,"hair_hl_btn",function()
		{
			ShadeBool = false;
			Hl_Bool = true;

			Shade_Star.visible = false;
			Hl_Star.visible = true;
		},this);
		Hair_Hl_Btn.anchor.setTo(0.5,0.5);

		Shade_Star = this.add.sprite(Hair_Shade_Btn.x - Hair_Shade_Btn.width + 20,13,"star");
		Shade_Star.anchor.setTo(0.5,0.5);

		Hl_Star = this.add.sprite(Hair_Hl_Btn.x + Hair_Hl_Btn.width - 20,13,"star");
		Hl_Star.anchor.setTo(0.5,0.5);
		Hl_Star.visible = false;

		Shades_Hl_Group = this.add.group();
		Shades_Hl_Group.add(Hair_Shade_Btn);
		Shades_Hl_Group.add(Hair_Hl_Btn);
		Shades_Hl_Group.add(Shade_Star);
		Shades_Hl_Group.add(Hl_Star);
		Shades_Hl_Group.visible = false;

		ColorPrevOrigX = 740;
		ColorPrevX = 612;
		Color_Prev = this.add.button(ColorPrevOrigX,407,"back_btn",function()
		{
			colorPage--;
			if(colorPage == 2)
			{
				Color_Pallette.visible = false;
				Color_Pallette2.visible = true;
			}
			else if(colorPage <= 1)
			{
				Color_Pallette.visible = true;
				Color_Pallette2.visible = false;
				colorPage = 1;
			}
		},this,1,0,2);
		Color_Prev.anchor.setTo(0.5,0.5);

		ColorNextOrigX = Color_Prev.x + Color_Prev.width + 25;
		ColorNextX = 793;
		Color_Next = this.add.button(ColorNextOrigX,Color_Prev.y,"back_btn",function()
		{			
			colorPage++;
			if(colorPage == 1)
			{
				Color_Pallette.visible = true;
				Color_Pallette2.visible = false;
			}
			else if(colorPage >= 2)
			{
				Color_Pallette.visible = false;
				Color_Pallette2.visible = true;
				colorPage = 2;
			}
		},this,1,0,2);
		Color_Next.anchor.setTo(0.5,0.5);
		Color_Next.scale.setTo(-1,1);

		Color_Back_Btn = this.add.button(582,407,"color_back_btn",function()
		{
			Color_Group.visible = false;
			if(openedMenu == 1)
			{
				Hair_Icon_Group.visible = true;
				this.HairMenuGroup_fnc();
			}
			if(openedMenu == 3)
			{
				Eyes_Icon_Group.visible = true;
				this.EyesMenuGroup_fnc();
			}
			if(openedMenu == 5)
			{
				//Cheeks_Menu_Group.visible = true;
				//this.CheeksMenuGroup_fnc();
			}
			if(openedMenu == 6)
			{
				Lips_Icon_Group.visible = true;
				this.LipsMenuGroup_fnc();
			}
			if(openedMenu == 8)
			{
				Top_Icon_Group.visible = true;
				this.TopsMenuGroup_fnc();
			}
			if(openedMenu == 9)
			{
				Bottoms_Icon_Group.visible = true;
				this.BottomsMenuGroup_fnc();
			}
			if(openedMenu == 10)
			{
				Skirt_Icon_Group.visible = true;
				this.DressMenuGroup_fnc();
			}
			if(openedMenu == 11)
			{
				Shoes_Icon_Group.visible = true;
				this.ShoesMenuGroup_fnc();
			}
			if(openedMenu == 12)
			{
				Socks_Icon_Group.visible = true;
				this.SocksMenuGroup_fnc();
			}
			if(openedMenu == 13)
			{
				Extra_Icon_Group.visible = true;
				this.ExtraMenuGroup_fnc();
			}
			if(openedMenu == 14)
			{
				BG_Icon_Group.visible = true;
				this.BGMenuGroup_fnc();
			}
		},this,1,0,2);
		Color_Back_Btn.anchor.setTo(0.5,0.5);

		Color_Group = this.add.group();
		Color_Group.add(Color_Pallette);
		Color_Group.add(Color_Pallette2);
		Color_Group.add(Color01_Icon);
		Color_Group.add(Color02_Icon);
		Color_Group.add(Color03_Icon);
		Color_Group.add(Color04_Icon);
		Color_Group.add(Color05_Icon);
		Color_Group.add(Color06_Icon);
		Color_Group.add(Color07_Icon);
		Color_Group.add(Color08_Icon);
		Color_Group.add(Color09_Icon);
		Color_Group.add(Color10_Icon);
		Color_Group.add(Color11_Icon);
		Color_Group.add(Color12_Icon);
		Color_Group.add(Color13_Icon);
		Color_Group.add(Color14_Icon);
		Color_Group.add(Color15_Icon);
		Color_Group.add(Color16_Icon);
		Color_Group.add(Color17_Icon);
		Color_Group.add(Color18_Icon);
		Color_Group.add(Color19_Icon);
		Color_Group.add(Color20_Icon);
		Color_Group.add(Color21_Icon);
		Color_Group.add(Color22_Icon);
		Color_Group.add(Color23_Icon);
		Color_Group.add(Color24_Icon);
		Color_Group.add(Color25_Icon);
		Color_Group.add(Color26_Icon);
		Color_Group.add(Color27_Icon);
		Color_Group.add(Color28_Icon);
		Color_Group.add(Color29_Icon);
		Color_Group.add(Color30_Icon);
		Color_Group.add(Color31_Icon);
		Color_Group.add(Color32_Icon);
		Color_Group.add(Color33_Icon);
		Color_Group.add(Color34_Icon);
		Color_Group.add(Color35_Icon);
		Color_Group.add(Color36_Icon);
		Color_Group.add(Color37_Icon);
		Color_Group.add(Color38_Icon);
		Color_Group.add(Color39_Icon);
		Color_Group.add(Color40_Icon);
		Color_Group.add(Color_Prev);
		Color_Group.add(Color_Next);
		Color_Group.add(Color_Back_Btn);
		Color_Group.visible = false;

		//Next_Prev
		NextOrigX = 800;
		Next_Btn = this.add.button(NextOrigX,Border.y,"next_btn",function()
		{
			if(openedMenu == 1)
			{
				openedMenuPage ++;
				Hair_Page.frame ++;
				/*if(openedMenuPage > 4 && bangsOpened)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1 && bangsOpened)
				{
					Bang01_Icon.visible = true;
					Bang02_Icon.visible = true;
					Bang03_Icon.visible = true;

					Bang04_Icon.visible = false;
					Bang05_Icon.visible = false;
					Bang06_Icon.visible = false;

					Bang07_Icon.visible = false;
					Bang08_Icon.visible = false;
					Bang09_Icon.visible = false;
					Bang10_Icon.visible = false;

					Bang11_Icon.visible = false;
					Bang12_Icon.visible = false;
				}
				if(openedMenuPage == 2 && bangsOpened)
				{
					Bang01_Icon.visible = false;
					Bang02_Icon.visible = false;
					Bang03_Icon.visible = false;

					Bang04_Icon.visible = true;
					Bang05_Icon.visible = true;
					Bang06_Icon.visible = true;

					Bang07_Icon.visible = false;
					Bang08_Icon.visible = false;
					Bang09_Icon.visible = false;

					Bang10_Icon.visible = false;
					Bang11_Icon.visible = false;
					Bang12_Icon.visible = false;

					
				}
				if(openedMenuPage == 3 && bangsOpened)
				{
					Bang01_Icon.visible = false;
					Bang02_Icon.visible = false;
					Bang03_Icon.visible = false;

					Bang04_Icon.visible = false;
					Bang05_Icon.visible = false;
					Bang06_Icon.visible = false;

					Bang07_Icon.visible = true;
					Bang08_Icon.visible = true;
					Bang09_Icon.visible = true;

					Bang10_Icon.visible = false;
					Bang11_Icon.visible = false;
					Bang12_Icon.visible = false;

					
				}
				if(openedMenuPage == 4 && bangsOpened)
				{
					Bang01_Icon.visible = false;
					Bang02_Icon.visible = false;
					Bang03_Icon.visible = false;

					Bang04_Icon.visible = false;
					Bang05_Icon.visible = false;
					Bang06_Icon.visible = false;

					Bang07_Icon.visible = false;
					Bang08_Icon.visible = false;
					Bang09_Icon.visible = false;

					Bang10_Icon.visible = true;
					Bang11_Icon.visible = true;
					Bang12_Icon.visible = true;					
				}*/

				if(openedMenuPage > 3)// && hairOpened)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)// && hairOpened)
				{
					Hair_Icon.visible = true;
					Hair_Icon2.visible = false;
					Hair_Icon3.visible = false;
				}
				if(openedMenuPage == 2)// && hairOpened)
				{
					Hair_Icon.visible = false;
					Hair_Icon2.visible = true;
					Hair_Icon3.visible = false;
				}
				if(openedMenuPage == 3)// && hairOpened)
				{
					Hair_Icon.visible = false;
					Hair_Icon2.visible = false;
					Hair_Icon3.visible = true;
				}
			}
			if(openedMenu == 3)
			{
				openedMenuPage++;
				Eyes_Page.frame ++;
				if(openedMenuPage > 3)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Eyes_Icon.visible = true;
					Eyes_Icon2.visible = false;
					Eyes_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Eyes_Icon.visible = false;
					Eyes_Icon2.visible = true;
					Eyes_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Eyes_Icon.visible = false;
					Eyes_Icon2.visible = false;
					Eyes_Icon3.visible = true;
				}
			}
			if(openedMenu == 4)
			{
				openedMenuPage++;
				Eyebrows_Page.frame++;
				if(openedMenuPage > 2)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Eyebrows_Icon.visible = true;
					Eyebrows_Icon2.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Eyebrows_Icon.visible = false;
					Eyebrows_Icon2.visible = true;
				}
			}
			if(openedMenu == 5)
			{
				openedMenuPage++;
				//Cheeks_Page.frame++;
				if(openedMenuPage > 2)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Cheeks_Icon.visible = true;
					Cheeks_Icon2.visible = true;
					Cheeks_Icon3.visible = true;

					Cheeks_Icon4.visible = false;
					Cheeks_Icon5.visible = false;
					Cheeks_Icon6.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Cheeks_Icon.visible = false;
					Cheeks_Icon2.visible = false;
					Cheeks_Icon3.visible = false;

					Cheeks_Icon4.visible = true;
					Cheeks_Icon5.visible = true;
					Cheeks_Icon6.visible = true;
				}
			}
			if(openedMenu == 6)
			{
				openedMenuPage ++;
				Lips_Page.frame++;
				if(openedMenuPage > 3)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Lips_Icon.visible = true;
					Lips_Icon2.visible = false;
					Lips_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Lips_Icon.visible = false;
					Lips_Icon2.visible = true;
					Lips_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Lips_Icon.visible = false;
					Lips_Icon2.visible = false;
					Lips_Icon3.visible = true;
				}
			}
			if(openedMenu == 8)
			{
				openedMenuPage ++;
				Tops_Page.frame ++;
				if(openedMenuPage > 3)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Tops_Icon.visible = true;
					Tops_Icon2.visible = false;
					Tops_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Tops_Icon.visible = false;
					Tops_Icon2.visible = true;
					Tops_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Tops_Icon.visible = false;
					Tops_Icon2.visible = false;
					Tops_Icon3.visible = true;
				}
			}
			if(openedMenu == 9)
			{
				openedMenuPage ++;
				Bottoms_Page.frame++;
				if(openedMenuPage > 3)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Bottoms_Icon.visible = true;
					Bottoms_Icon2.visible = false;
					Bottoms_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Bottoms_Icon.visible = false;
					Bottoms_Icon2.visible = true;
					Bottoms_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Bottoms_Icon.visible = false;
					Bottoms_Icon2.visible = false;
					Bottoms_Icon3.visible = true;
				}
			}
			if(openedMenu == 10)
			{
				openedMenuPage ++;
				Skirt_Page.frame++;
				if(openedMenuPage > 2)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Skirt_Icon.visible = true;
					Skirt_Icon2.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Skirt_Icon.visible = false;
					Skirt_Icon2.visible = true;
				}
			}
			if(openedMenu == 11)
			{
				openedMenuPage ++;
				Shoes_Page.frame++;
				if(openedMenuPage > 3)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Shoes_Icon.visible = true;
					Shoes_Icon2.visible = false;
					Shoes_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Shoes_Icon.visible = false;
					Shoes_Icon2.visible = true;
					Shoes_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Shoes_Icon.visible = false;
					Shoes_Icon2.visible = false;
					Shoes_Icon3.visible = true;
				}
			}
			if(openedMenu == 12)
			{
				openedMenuPage ++;
				Socks_Page.frame ++;
				if(openedMenuPage > 2)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Socks_Icon.visible = true;
					Socks_Icon2.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Socks_Icon.visible = false;
					Socks_Icon2.visible = true;
				}
			}
			if(openedMenu == 13)
			{
				openedMenuPage ++;
				Extra_Page.frame++;
				if(openedMenuPage > 3)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Extra_Icon.visible = true;
					Extra_Icon2.visible = false;
					Extra_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Extra_Icon.visible = false;
					Extra_Icon2.visible = true;
					Extra_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Extra_Icon.visible = false;
					Extra_Icon2.visible = false;
					Extra_Icon3.visible = true;
				}
			}
			if(openedMenu == 14)
			{
				openedMenuPage ++;
				BG_Page.frame++;
				if(openedMenuPage > 3)
				{
					openedMenuPage = 1;
				}
				if(openedMenuPage == 1)
				{
					Color_Btn.visible = false;
					Color_Btn1.visible = false;
					Color_Btn2.visible = false;
					BG_Icon.visible = true;
					BG_Icon2.visible = false;
					BG_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Color_Btn.visible = false;
					Color_Btn1.visible = false;
					Color_Btn2.visible = false;
					BG_Icon.visible = false;
					BG_Icon2.visible = true;
					BG_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Color_Btn.visible = true;
					Color_Btn1.visible = false;
					Color_Btn2.visible = false;
					BG_Icon.visible = false;
					BG_Icon2.visible = false;
					BG_Icon3.visible = true;
				}
			}
		},this);
		Next_Btn.anchor.setTo(0.5,0.5);
		Next_Btn.input.pixelPerfectClick = true;
		Next_Btn.input.pixelPerfectOver = true;

		PrevOrigX = 605;
		Prev_Btn = this.add.sprite(PrevOrigX,Border.y,"prev_btn");
		Prev_Btn.anchor.setTo(0.5,0.5);
		Prev_Btn.inputEnabled = true;
		Prev_Btn.input.pixelPerfectClick = true;
		Prev_Btn.input.pixelPerfectOver = true;
		Prev_Btn.events.onInputUp.add(function()
		{
			if(openedMenu == 1)
			{
				openedMenuPage --;
				Hair_Page.frame --;

				/*if(openedMenuPage < 1 && bangsOpened)
				{
					openedMenuPage = 4;
					Hair_Page.frame = 3;
				}
				if(openedMenuPage == 1 && bangsOpened)
				{
					Bang01_Icon.visible = true;
					Bang02_Icon.visible = true;
					Bang03_Icon.visible = true;

					Bang04_Icon.visible = false;
					Bang05_Icon.visible = false;
					Bang06_Icon.visible = false;

					Bang07_Icon.visible = false;
					Bang08_Icon.visible = false;
					Bang09_Icon.visible = false;
					Bang10_Icon.visible = false;

					Bang11_Icon.visible = false;
					Bang12_Icon.visible = false;
				}
				if(openedMenuPage == 2 && bangsOpened)
				{
					Bang01_Icon.visible = false;
					Bang02_Icon.visible = false;
					Bang03_Icon.visible = false;

					Bang04_Icon.visible = true;
					Bang05_Icon.visible = true;
					Bang06_Icon.visible = true;

					Bang07_Icon.visible = false;
					Bang08_Icon.visible = false;
					Bang09_Icon.visible = false;

					Bang10_Icon.visible = false;
					Bang11_Icon.visible = false;
					Bang12_Icon.visible = false;
				}
				if(openedMenuPage == 3 && bangsOpened)
				{
					Bang01_Icon.visible = false;
					Bang02_Icon.visible = false;
					Bang03_Icon.visible = false;

					Bang04_Icon.visible = false;
					Bang05_Icon.visible = false;
					Bang06_Icon.visible = false;

					Bang07_Icon.visible = true;
					Bang08_Icon.visible = true;
					Bang09_Icon.visible = true;

					Bang10_Icon.visible = false;
					Bang11_Icon.visible = false;
					Bang12_Icon.visible = false;
				}
				if(openedMenuPage == 4 && bangsOpened)
				{
					Bang01_Icon.visible = false;
					Bang02_Icon.visible = false;
					Bang03_Icon.visible = false;

					Bang04_Icon.visible = false;
					Bang05_Icon.visible = false;
					Bang06_Icon.visible = false;

					Bang07_Icon.visible = false;
					Bang08_Icon.visible = false;
					Bang09_Icon.visible = false;

					Bang10_Icon.visible = true;
					Bang11_Icon.visible = true;
					Bang12_Icon.visible = true;
				}*/

				if(openedMenuPage < 1)// && hairOpened)
				{
					openedMenuPage = 3;
					Hair_Page.frame = 2;
				}
				if(openedMenuPage == 1)// && hairOpened)
				{
					Hair_Icon.visible = true;
					Hair_Icon2.visible = false;
					Hair_Icon3.visible = false;
				}
				if(openedMenuPage == 2)// && hairOpened)
				{
					Hair_Icon.visible = false;
					Hair_Icon2.visible = true;
					Hair_Icon3.visible = false;
				}
				if(openedMenuPage == 3)// && hairOpened)
				{
					Hair_Icon.visible = false;
					Hair_Icon2.visible = false;
					Hair_Icon3.visible = true;
				}
			}
			else if(openedMenu == 3)
			{
				openedMenuPage--;
				Eyes_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 3;
					Eyes_Page.frame = 2;
				}
				if(openedMenuPage == 1)
				{
					Eyes_Icon.visible = true;
					Eyes_Icon2.visible = false;
					Eyes_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Eyes_Icon.visible = false;
					Eyes_Icon2.visible = true;
					Eyes_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Eyes_Icon.visible = false;
					Eyes_Icon2.visible = false;
					Eyes_Icon3.visible = true;
				}
			}
			else if(openedMenu == 4)
			{
				openedMenuPage--;
				Eyebrows_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 2;
					Eyebrows_Page.frame = 1;
				}
				if(openedMenuPage == 1)
				{
					Eyebrows_Icon.visible = true;
					Eyebrows_Icon2.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Eyebrows_Icon.visible = false;
					Eyebrows_Icon2.visible = true;
				}
			}
			if(openedMenu == 5)
			{
				openedMenuPage--;
				//Cheeks_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 2;
					Cheeks_Page.frame = 1;
				}
				if(openedMenuPage == 1)
				{
					Cheeks_Icon.visible = true;
					Cheeks_Icon2.visible = true;
					Cheeks_Icon3.visible = true;

					Cheeks_Icon4.visible = false;
					Cheeks_Icon5.visible = false;
					Cheeks_Icon6.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Cheeks_Icon.visible = false;
					Cheeks_Icon2.visible = false;
					Cheeks_Icon3.visible = false;

					Cheeks_Icon4.visible = true;
					Cheeks_Icon5.visible = true;
					Cheeks_Icon6.visible = true;
				}
			}
			else if(openedMenu == 6)
			{
				openedMenuPage --;
				Lips_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 3;
					Lips_Page.frame = 1;
				}
				if(openedMenuPage == 1)
				{
					Lips_Icon.visible = true;
					Lips_Icon2.visible = false;
					Lips_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Lips_Icon.visible = false;
					Lips_Icon2.visible = true;
					Lips_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Lips_Icon.visible = false;
					Lips_Icon2.visible = false;
					Lips_Icon3.visible = true;
				}
			}
			else if(openedMenu == 8)
			{
				openedMenuPage --;
				Tops_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 3;
					Tops_Page.frame = 2;
				}
				if(openedMenuPage == 1)
				{					
					Tops_Icon.visible = true;
					Tops_Icon2.visible = false;
					Tops_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Tops_Icon.visible = false;
					Tops_Icon2.visible = true;
					Tops_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Tops_Icon.visible = false;
					Tops_Icon2.visible = false;
					Tops_Icon3.visible = true;
				}
			}
			else if(openedMenu == 9)
			{
				openedMenuPage --;
				Bottoms_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 3;
					Bottoms_Page.frame = 2;
				}
				if(openedMenuPage == 1)
				{
					Bottoms_Icon.visible = true;
					Bottoms_Icon2.visible = false;
					Bottoms_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Bottoms_Icon.visible = false;
					Bottoms_Icon2.visible = true;
					Bottoms_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Bottoms_Icon.visible = false;
					Bottoms_Icon2.visible = false;
					Bottoms_Icon3.visible = true;
				}
			}
			else if(openedMenu == 10)
			{				
				openedMenuPage --;
				Skirt_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 2;
					Skirt_Page.frame = 1;
				}
				if(openedMenuPage == 1)
				{
					Skirt_Icon.visible = true;
					Skirt_Icon2.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Skirt_Icon.visible = false;
					Skirt_Icon2.visible = true;
				}
			}
			else if(openedMenu == 11)
			{
				openedMenuPage --;
				Shoes_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 3;
					Shoes_Page.frame = 2;
				}
				if(openedMenuPage == 1)
				{
					Shoes_Icon.visible = true;
					Shoes_Icon2.visible = false;
					Shoes_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Shoes_Icon.visible = false;
					Shoes_Icon2.visible = true;
					Shoes_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Shoes_Icon.visible = false;
					Shoes_Icon2.visible = false;
					Shoes_Icon3.visible = true;
				}
			}
			else if(openedMenu == 12)
			{
				openedMenuPage --;
				Socks_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 2;
					Socks_Page.frame = 1;
				}
				if(openedMenuPage == 1)
				{
					Socks_Icon.visible = true;
					Socks_Icon2.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Socks_Icon.visible = false;
					Socks_Icon2.visible = true;
				}
			}
			else if(openedMenu == 13)
			{
				openedMenuPage --;
				Extra_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 3;
					Extra_Page.frame = 2;
				}
				if(openedMenuPage == 1)
				{
					Extra_Icon.visible = true;
					Extra_Icon2.visible = false;
					Extra_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Extra_Icon.visible = false;
					Extra_Icon2.visible = true;
					Extra_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Extra_Icon.visible = false;
					Extra_Icon2.visible = false;
					Extra_Icon3.visible = true;
				}
			}
			else if(openedMenu == 14)
			{
				openedMenuPage --;
				BG_Page.frame--;
				if(openedMenuPage < 1)
				{
					openedMenuPage = 3;
					BG_Page.frame = 2;
				}
				if(openedMenuPage == 1)
				{
					Color_Btn.visible = false;
					Color_Btn1.visible = false;
					Color_Btn2.visible = false;
					BG_Icon.visible = true;
					BG_Icon2.visible = false;
					BG_Icon3.visible = false;
				}
				if(openedMenuPage == 2)
				{
					Color_Btn.visible = false;
					Color_Btn1.visible = false;
					Color_Btn2.visible = false;
					BG_Icon.visible = false;
					BG_Icon2.visible = true;
					BG_Icon3.visible = false;
				}
				if(openedMenuPage == 3)
				{
					Color_Btn.visible = true;
					Color_Btn1.visible = false;
					Color_Btn2.visible = false;
					BG_Icon.visible = false;
					BG_Icon2.visible = false;
					BG_Icon3.visible = true;
				}
			}
		},this);


		Color_Btn = this.add.button(583,403,"color_btn",function()
		{
			openedColors = 1;
			Color_Btn.visible = false;
			Next_Btn.visible = false;
			Prev_Btn.visible = false;
			DressUp_Btn_Group.visible = false;

			Trash_Btn.visible = false;
			Color_Group.visible = true;
			Color_Pallette.visible = true;
			Color_Pallette2.visible = false;
			colorPage = 1;
			Color_Prev.x = ColorPrevOrigX;
			Color_Prev.y = 407;
			Color_Next.x = ColorNextOrigX;
			Color_Next.y = Color_Prev.y;

			if(openedMenu == 1){Hair_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 3){Eyes_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			//if(openedMenu == 5){Cheeks_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 6){Lips_Icon_Group.visible = false;}
			if(openedMenu == 8){Top_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 9){Bottoms_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 10){Skirt_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 11){Shoes_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 12){Socks_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 13){Extra_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 14){BG_Icon_Group.visible = false; Color_Back_Btn.visible = true;}

		},this,1,0,2);
		Color_Btn.anchor.setTo(0.5,0.5);


		Color_Btn1 = this.add.button(582,345,"color_btn1",function()
		{
			openedColors = 1;
			Color_Btn1.visible = false;
			Color_Btn2.visible = false;
			Next_Btn.visible = false;
			Prev_Btn.visible = false;
			DressUp_Btn_Group.visible = false;

			Trash_Btn.visible = false;
			Color_Group.visible = true;
			Color_Pallette.visible = true;
			Color_Pallette2.visible = false;
			colorPage = 1;
			Color_Prev.x = ColorPrevOrigX;
			Color_Prev.y = 407;
			Color_Next.x = ColorNextOrigX;
			Color_Next.y = Color_Prev.y;

			if(openedMenu == 8){Top_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 9){Bottoms_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 10){Skirt_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 11){Shoes_Icon_Group.visible = false; Color_Back_Btn.visible = true;}

		},this,1,0,2);
		Color_Btn1.anchor.setTo(0.5,0.5);
		Color_Btn1.visible = false;


		Color_Btn2 = this.add.button(Color_Btn1.x,Color_Btn1.y + Color_Btn1.height + 5,"color_btn2",function()
		{
			openedColors = 2;
			Color_Btn1.visible = false;
			Color_Btn2.visible = false;
			Next_Btn.visible = false;
			Prev_Btn.visible = false;
			DressUp_Btn_Group.visible = false;

			Trash_Btn.visible = false;
			Color_Group.visible = true;
			Color_Pallette.visible = true;
			Color_Pallette2.visible = false;
			colorPage = 1;
			Color_Prev.x = ColorPrevOrigX;
			Color_Prev.y = 407;
			Color_Next.x = ColorNextOrigX;
			Color_Next.y = Color_Prev.y;

			if(openedMenu == 8){Top_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 9){Bottoms_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 10){Skirt_Icon_Group.visible = false; Color_Back_Btn.visible = true;}
			if(openedMenu == 11){Shoes_Icon_Group.visible = false; Color_Back_Btn.visible = true;}

		},this,1,0,2);
		Color_Btn2.anchor.setTo(0.5,0.5);
		Color_Btn2.visible = false;

		TrashOrigX = 824;
		TrashX = 703.5;
		TrashOrigY = 404;
		TrashY = Color_Prev.y;
		Trash_Btn = this.add.button(TrashOrigX,TrashOrigY,"trash_btn",function()
		{
			if(openedMenu == 1)
			{
				Bangs.frame = 0;
				Bangs_Outline.frame = Bangs.frame;
				Bangs_Shade.frame = Bangs.frame;
				Bangs.tint = defaultColor;
				Bangs_Shade.visible = false;

				Hair.frame = 0;
				Hair_Outline.frame = Hair.frame;
				Hair_Shades.frame = Hair.frame;
				Hair.tint = defaultColor;
				Hair_Shades.visible = false;
				// Hair.visible = false;
				// Hair_Outline.visible = false;

				hairColor = 0;

				Bang_Hl.frame = Bangs.frame;
				Bang_Hl.visible = false;

				Hair_Hl.frame = Hair.frame;
				Hair_Hl.visible = false;
				hasShade = false;
				hasHl = false;
				//Eyebrows.tint = Colors[0];
			}
			else if(openedMenu == 2)
			{
				Bang_Hl.visible = false;
				Bangs_Shade.visible = false;
				Hair_Hl.visible = false;
				Hair_Shades.visible = false;
				hasShade = false;
				hasHl = false;
				hlVisible = false;
			}
			else if(openedMenu == 3)
			{
				Eyes.tint = 0x444444;
				Eyes.frame = 0;
				Eyes_White.frame = Eyes.frame;
				Eye_Shadow.frame = Eyes.frame;
				//Eyelashes.frame = 0;
			}
			else if(openedMenu == 4)
			{
				
				Eyebrows.frame = 0;
				Eyebrows.visible = false;
				//Eyebrows_Outline.frame = Eyebrows.frame;
			}
			else if(openedMenu == 5)
			{
				Eye_Shadow.visible = false;
				Eye_Shadow.frame = Eyes.frame;
			}
			else if(openedMenu == 6)
			{
				Lips.frame = 0;
				//Lips_Outline.frame = 0;
				//Lips.tint = Colors[8]
			}
			else if(openedMenu == 7)
			{
				Body.tint = Colors[4];
				Head.tint = Colors[4];
				Hand.tint = Colors[4];
				Hand2.tint = Colors[4];
			}
			else if(openedMenu == 8)
			{
				Clothes.visible = false;
				Clothes_Outline.visible = false;
				Clothes_Shade.visible = false;
				Clothes.tint = defaultColor;
				Clothes_Shade.tint = defaultColor;
				Bra.visible = true;
				if(!Bottoms.visible){Panties.visible = true;}
			}
			else if(openedMenu == 9)
			{
				Bottoms.visible = false;
				Bottoms_Outline.visible = false;
				Bottoms_Shade.visible = false;
				Bottoms.tint = defaultColor;
				Bottoms_Shade.tint = defaultColor;
				Panties.visible = true;
			}
			else if(openedMenu == 10)
			{
				Skirt.visible = false;
				Skirt_Outline.visible = false;
				Skirt_Shade.visible = false;
				Skirt.tint = defaultColor;
				Skirt_Shade.tint = defaultColor;
			}
			else if(openedMenu == 11)
			{
				Shoes.visible = false;
				Shoes_Outline.visible = false;
				Shoes_Shade.visible = false;
				Shoes.tint = defaultColor;
				Shoes_Shade.tint = defaultColor;
			}
			else if(openedMenu == 12)
			{
				Socks.visible = false;
				Socks.tint = defaultColor;
				Socks_Outline.visible = false;

				if(Clothes.frame <= 9){Panties.visible = true;}
				else{Panties.visible = false;}
			}
			else if(openedMenu == 13)
			{
				Extra.visible = false;
				Extra_Outline.visible = false;
				Extra.tint = defaultColor;
				Extra2.visible = false;
				Extra2_Outline.visible = false;
				Extra2.tint = defaultColor;
				Extra3.visible = false;
				Extra3_Outline.visible = false;
				Extra3.tint = defaultColor;
				Extra4.visible = false;
				Extra4_Outline.visible = false;
				Extra4.tint = defaultColor;
				Extra5.visible = false;
				Extra5_Outline.visible = false;
				Extra5.tint = defaultColor;
				Extra6.visible = false;
				Extra6_Outline.visible = false;
				Extra6.tint = defaultColor;
				Extra7.visible = false;
				Extra7_Outline.visible = false;
				Extra7.tint = defaultColor;
				Extra8.visible = false;
				Extra8_Outline.visible = false;
				Extra8.tint = defaultColor;
				Extra9.visible = false;
				Extra9_Outline.visible = false;
				Extra9.tint = defaultColor;

				for(var i = 0; i < extraBoolAr.length; i++)
				{
					extraBoolAr[i] = false;
				}
				Hand.visible = true;
				Hand_Outline.visible = true;
				Hand2.visible = false;
				Hand_Outline2.visible = false;
			}
			else if(openedMenu == 14)
			{
				BG.tint = 0xFFFFFF;
				BG_Details.frame = 7;
				// BG2.visible = false;
				// BG2.tint = Colors[4];
			}
		},this,1,0,2);
		Trash_Btn.anchor.setTo(0.5,0.5);

		//Left Side Buttons
		Hair_Btn = this.add.button(483,33,"hair_btn",function()
		{
			this.HairMenuGroup_fnc();

			Top_Icon_Group.visible = false;
			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;

			Color_Group.visible = false;
			colorPage = 1;
			this.NormalSize_fnc();
		},this,1,0,2);
		Hair_Btn.anchor.setTo(0.5,0.5);
		Hair_Btn.input.pixelPerfectClick = true;
		Hair_Btn.input.pixelPerfectOver = true;

		Hl_Btn = this.add.button(Hair_Btn.x,Hair_Btn.y + Hair_Btn.height + 12,"hl_btn",function()
		{
			openedMenu = 2;
			openedMenuPage = 1;
			Next_Btn.visible = false;
			Prev_Btn.visible = false;

			Hair_Icon_Group.visible = false;
			Color_Btn.visible = false;
			Color_Btn1.visible = false;
			Color_Btn2.visible = false;
			Color_Group.visible = true;
			Color_Back_Btn.visible = false;

			colorPage = 1;
			Color_Pallette.visible = true;
			Color_Pallette2.visible = false;

			Shades_Hl_Group.visible = true;
			ShadeBool = true;
			Hl_Bool = false;
			Shade_Star.visible = true;
			Hl_Star.visible = false;

			Trash_Btn.x = TrashX;
			Trash_Btn.y = TrashY;
			Trash_Btn.visible = true;

			Color_Prev.x = ColorPrevX;
			Color_Next.x = ColorNextX;

			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			DressUp_Btn_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.NormalSize_fnc();

		},this,1,0,2);
		Hl_Btn.anchor.setTo(0.5,0.5);
		Hl_Btn.input.pixelPerfectClick = true;
		Hl_Btn.input.pixelPerfectOver = true;

		Eye_Btn = this.add.button(Hair_Btn.x,Hl_Btn.y + Hl_Btn.height + 12,"eye_btn",function()
		{
			this.EyesMenuGroup_fnc();

			Hair_Icon_Group.visible = false;
			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;

			Color_Group.visible = false;
			this.ScaleDoll();
		},this,1,0,2);
		Eye_Btn.anchor.setTo(0.5,0.5);
		Eye_Btn.input.pixelPerfectClick = true;
		Eye_Btn.input.pixelPerfectOver = true;

		Eyebrows_Btn = this.add.button(Eye_Btn.x,Eye_Btn.y + Eye_Btn.height + 12,"eyebrow_btn",function()
		{
			openedMenu = 4;
			openedMenuPage = 1;
			Next_Btn.visible = true;
			Prev_Btn.visible = true;

			Color_Btn.visible = false;
			Color_Btn1.visible = false;
			Color_Btn2.visible = false;
			Trash_Btn.visible = true;
			Trash_Btn.x = TrashOrigX;
			Trash_Btn.y = TrashOrigY;
			Lips_Icon_Group.visible = false;
			Eyebrows_Icon_Group.visible = true;
			Eyebrows_Icon_Group.setAll("visible",false);
			Eyebrows_Icon.visible = true;
			Eyebrows_Page.visible = true;
			Eyebrows_Page.frame = 0;
			DressUp_Btn_Group.visible = true;

			//Eyeshadow_Color_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.ScaleDoll();
		},this,1,0,2);
		Eyebrows_Btn.anchor.setTo(0.5,0.5);

		Eye_Shadow_Btn = this.add.button(Eyebrows_Btn.x,Eyebrows_Btn.y + Eyebrows_Btn.height + 12,"eyeshadow_btn",function()
		{
			this.EyeshadowMenuGroup_fnc();	

			Hair_Icon_Group.visible = false;
			//Color_Group.visible = false;
			//Eyeshadow_Color_Group.visible = true;
			Eyebrows_Icon_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			DressUp_Btn_Group.visible = false;
			this.ScaleDoll();
		},this,1,0,2);
		Eye_Shadow_Btn.anchor.setTo(0.5,0.5);
		Eye_Shadow_Btn.input.pixelPerfectClick = true;
		Eye_Shadow_Btn.input.pixelPerfectOver = true;

		Lips_Btn = this.add.button(Eye_Shadow_Btn.x,Eye_Shadow_Btn.y + Eye_Shadow_Btn.height + 12,"lips_btn",function()
		{
			this.LipsMenuGroup_fnc();

			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.ScaleDoll();

		},this,1,0,2);
		Lips_Btn.anchor.setTo(0.5,0.5);
		Lips_Btn.input.pixelPerfectClick = true;
		Lips_Btn.input.pixelPerfectOver = true;

		SkinTone_Btn = this.add.button(Lips_Btn.x,Lips_Btn.y + Lips_Btn.height + 14,"skintone_btn",function()
		{
			openedMenu = 7;
			skinColorPage = 1;
			Next_Btn.visible = false;
			Prev_Btn.visible = false;

			Trash_Btn.x = TrashX;
			Trash_Btn.y = TrashY;
			Trash_Btn.visible = true;

			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			Color_Btn.visible = false;
			Color_Btn1.visible = false;
			Color_Btn2.visible = false;

			SkinColor_Pallette.visible = true;
			SkinColor_Pallette2.visible = false;

			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = true;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			DressUp_Btn_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.NormalSize_fnc();
		},this,1,0,2);
		SkinTone_Btn.anchor.setTo(0.5,0.5);
		SkinTone_Btn.input.pixelPerfectClick = true;
		SkinTone_Btn.input.pixelPerfectOver = true;

		//Right Side Buttons
		Tops_Btn = this.add.button(921,Hair_Btn.y,"tops_btn",function()
		{
			this.TopsMenuGroup_fnc();
			
			//Eyeshadow_Color_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.NormalSize_fnc();
		},this,1,0,2);
		Tops_Btn.anchor.setTo(0.5,0.5);
		Tops_Btn.input.pixelPerfectClick = true;
		Tops_Btn.input.pixelPerfectOver = true;

		Bottoms_Btn = this.add.button(Tops_Btn.x,Tops_Btn.y + Tops_Btn.height + 11,"bottoms_btn",function()
		{
			this.BottomsMenuGroup_fnc();
			
			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.NormalSize_fnc();

		},this,1,0,2);
		Bottoms_Btn.anchor.setTo(0.5,0.5);
		Bottoms_Btn.input.pixelPerfectClick = true;
		Bottoms_Btn.input.pixelPerfectOver = true;

		Dress_Btn = this.add.button(Bottoms_Btn.x,Bottoms_Btn.y + Bottoms_Btn.height + 11,"skirt_btn",function()
		{
			this.DressMenuGroup_fnc();
			
			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.NormalSize_fnc();
		},this,1,0,2);
		Dress_Btn.anchor.setTo(0.5,0.5);
		Dress_Btn.input.pixelPerfectClick = true;
		Dress_Btn.input.pixelPerfectOver = true;

		Shoes_Btn = this.add.button(Dress_Btn.x,Dress_Btn.y + Dress_Btn.height + 11,"shoes_btn",function()
		{
			this.ShoesMenuGroup_fnc();
			
			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.NormalSize_fnc();
		},this,1,0,2);
		Shoes_Btn.anchor.setTo(0.5,0.5);
		Shoes_Btn.input.pixelPerfectClick = true;
		Shoes_Btn.input.pixelPerfectOver = true;

		Socks_Btn = this.add.button(Shoes_Btn.x,Shoes_Btn.y + Shoes_Btn.height + 11,"socks_btn",function()
		{
			this.SocksMenuGroup_fnc();
			
			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.NormalSize_fnc();
		},this,1,0,2);
		Socks_Btn.anchor.setTo(0.5,0.5);
		Socks_Btn.input.pixelPerfectClick = true;
		Socks_Btn.input.pixelPerfectOver = true;

		Extra_Btn = this.add.button(Socks_Btn.x,Socks_Btn.y + Socks_Btn.height + 11,"extra_btn",function()
		{
			this.ExtraMenuGroup_fnc();
			
			//Eyeshadow_Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.NormalSize_fnc();
		},this,1,0,2);
		Extra_Btn.anchor.setTo(0.5,0.5);
		Extra_Btn.input.pixelPerfectClick = true;
		Extra_Btn.input.pixelPerfectOver = true;

		BG_Btn = this.add.button(Extra_Btn.x,Extra_Btn.y + Extra_Btn.height + 11,"bg_btn",function()
		{
			this.BGMenuGroup_fnc();
			
			//Eyeshadow_Color_Group.visible = false;
			Color_Group.visible = false;
			Extra_Icon_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Hair_Icon_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;
			Shades_Hl_Group.visible = false;
			//Cheeks_Menu_Group.visible = false;
			this.NormalSize_fnc();
		},this,1,0,2);
		BG_Btn.anchor.setTo(0.5,0.5);
		BG_Btn.input.pixelPerfectClick = true;
		BG_Btn.input.pixelPerfectOver = true;



		//Bottom Buttons
		Shuffle_Btn = this.add.button(618,500,"shuffle_btn",function()
		{
			this.Shuffle_Items();
		},this,1,0,2);
		Shuffle_Btn.anchor.setTo(0.5,0.5);

		Show_Btn = this.add.button(Shuffle_Btn.x + Shuffle_Btn.width + 13,500,"show_btn",function()
		{
			Border.visible = false;
			Hair_Btn.visible = false;
			Hl_Btn.visible = false;
			Shades_Hl_Group.visible = false;
			Eye_Btn.visible = false;
			Eyebrows_Btn.visible = false;
			Eye_Shadow_Btn.visible = false;
			Lips_Btn.visible = false;
			SkinTone_Btn.visible = false;
			Tops_Btn.visible = false;
			Bottoms_Btn.visible = false;
			Dress_Btn.visible = false;
			Shoes_Btn.visible = false;
			Socks_Btn.visible = false;
			Extra_Btn.visible = false;
			BG_Btn.visible = false;
			Color_Btn.visible = false;
			Color_Btn1.visible = false;
			Color_Btn2.visible = false;
			Trash_Btn.visible = false;
			Next_Btn.visible = false;
			Prev_Btn.visible = false;
			Shuffle_Btn.visible = false;
			Show_Btn.visible = false;
			Reset_Btn.visible = false;
			GP_Btn.visible = true;
			Retry_Btn.visible = true;
			Save_Btn.visible = true;
			MoreGames_Btn.visible = true;
			End_Logo.visible = true;
			Logo.visible = false;

			//openedMenu == 1
			Hair_Icon_Group.visible = false;
			Color_Group.visible = false;

			//openedMenu == 2
			//Hl_Color_Group.visible = false;

			//openedMenu == 3
			Eyes_Icon_Group.visible = false;

			//openedMenu == 4
			//Eyeshadow_Color_Group.visible = false;			
			Eyebrows_Icon_Group.visible = false;
			
			//openedMenu == 5
			//Cheeks_Icon_Group.visible = false;
			
			//openedMenu == 6
			Lips_Icon_Group.visible = false;
			
			//openedMenu == 7
			SkinColor_Menu_Group.visible = false;
			
			//openedMenu == 8
			Top_Icon_Group.visible = false;
			
			//openedMenu == 9
			Bottoms_Icon_Group.visible = false;
			
			//openedMenu == 10
			Skirt_Icon_Group.visible = false;
			
			//openedMenu == 11
			Shoes_Icon_Group.visible = false;
			
			//openedMenu == 12
			Socks_Icon_Group.visible = false;

			//openedMenu == 13
			Extra_Icon_Group.visible = false;

			//openedMenu == 14
			BG_Icon_Group.visible = false;

			if(normalBool)
			{
				Doll_Group.x = 240;
				Doll_Group.y = 0;
			}
			else
			{
				Doll_Group.x = 9;
				Doll_Group.y = -83;
			}

			DressUp_Btn_Group.visible = false;


		},this,1,0,2);
		Show_Btn.anchor.setTo(0.5,0.5);

		Reset_Btn = this.add.button(Show_Btn.x + Show_Btn.width + 1,Shuffle_Btn.y,"reset_btn",function()
		{
			Bra.visible = true;
			Panties.visible = true;
			
			Bangs.frame = 0;
			Bangs_Outline.frame = Bangs.frame;
			Bangs_Shade.frame = Bangs.frame;
			Bangs.tint = defaultColor;
			Bangs_Shade.visible = false;

			Hair.frame = 0;
			Hair_Outline.frame = Hair.frame;
			Hair_Shades.frame = Hair.frame;
			Hair.tint = defaultColor;
			Hair_Shades.visible = false;

			hairColor = 0;

			Bang_Hl.frame = Bangs.frame;
			Bang_Hl.visible = false;

			Hair_Hl.frame = Hair.frame;
			Hair_Hl.visible = false;
			hasShade = false;
			hasHl = false;
		
			Bang_Hl.visible = false;
			Bangs_Shade.visible = false;
			Hair_Hl.visible = false;
			Hair_Shades.visible = false;
			hasShade = false;
			hasHl = false;
			hlVisible = false;
		
			Eyes.tint = 0x444444;
			Eyes.frame = 0;
			Eyes_White.frame = Eyes.frame;
			//Eyelashes.frame = 0;
		
			Eyebrows.frame = 0;
			Eyebrows.visible = false;
			//Eyebrows_Outline.frame = Eyebrows.frame;
			//Eyebrows.tint = Colors[0];
		
			/*Cheeks.visible = false;
			Mole.visible = false;*/
			Eye_Shadow.frame = Eyes.frame;
			Eye_Shadow.visible = false;
		
			Lips.frame = 0;
		
			Body.tint = Colors[4];
			Head.tint = Colors[4];
			Hand.tint = Colors[4];
			Hand2.tint = Colors[4];
			
			Clothes.tint = defaultColor;
			Clothes_Shade.tint = defaultColor;
			Clothes.visible = false;
			Clothes_Outline.visible = false;
			Clothes_Shade.visible = false;
			
			Bottoms.tint = defaultColor;
			Bottoms_Shade.tint = defaultColor;
			Bottoms.visible = false;
			Bottoms_Outline.visible = false;
			Bottoms_Shade.visible = false;			

			Skirt.visible = false;
			Skirt_Outline.visible = false;
			Skirt_Shade.visible = false;
			Skirt.tint = defaultColor;
			Skirt_Shade.tint = defaultColor;
			
			shoesColor = 2;
			Shoes.visible = false;
			Shoes_Outline.visible = false;
			Shoes_Shade.visible = false;
			
			Socks.tint = defaultColor;
			Socks.visible = false;
			Socks_Outline.visible = false;
						
			Extra.visible = false;
			Extra_Outline.visible = false;
			Extra.tint = defaultColor;
			Extra2.visible = false;
			Extra2_Outline.visible = false;
			Extra2.tint = defaultColor;
			Extra3.visible = false;
			Extra3_Outline.visible = false;
			Extra3.tint = defaultColor;
			Extra4.visible = false;
			Extra4_Outline.visible = false;
			Extra4.tint = defaultColor;
			Extra5.visible = false;
			Extra5_Outline.visible = false;
			Extra5.tint = defaultColor;
			Extra6.visible = false;
			Extra6_Outline.visible = false;
			Extra6.tint = defaultColor;
			Extra7.visible = false;
			Extra7_Outline.visible = false;
			Extra7.tint = defaultColor;
			Extra8.visible = false;
			Extra8_Outline.visible = false;
			Extra8.tint = defaultColor;
			Extra9.visible = false;
			Extra9_Outline.visible = false;
			Extra9.tint = defaultColor;

			for(var i = 0; i < extraBoolAr.length; i++)
			{
				extraBoolAr[i] = false;
			}
			Hand.visible = true;
			Hand_Outline.visible = true;
			Hand2.visible = false;
			Hand_Outline2.visible = false;

			BG.tint = 0xFFFFFF;
			BG_Details.frame = 7;
			/*BG2.visible = false;
			BG2.tint = Colors[4];*/
		},this,1,0,2);
		Reset_Btn.anchor.setTo(0.5,0.5);

		//End Screen Buttons

		GP_Btn = this.add.button(853,503,"gp_btn",function()
		{
			window.open(gpLink,"_blank");
		},this);
		GP_Btn.anchor.setTo(0.5,0.5);
		GP_Btn.scale.setTo(0.8,0.8);
		GP_Btn.visible = false;

		Retry_Btn = this.add.button(917,227,"retry_btn",function()
		{			
			Border.visible = true;
			Hair_Btn.visible = true;
			Hl_Btn.visible = true;
			Eye_Btn.visible = true;
			Eyebrows_Btn.visible = true;
			Eye_Shadow_Btn.visible = true;
			Lips_Btn.visible = true;
			SkinTone_Btn.visible = true;
			Tops_Btn.visible = true;
			Bottoms_Btn.visible = true;
			Dress_Btn.visible = true;
			Shoes_Btn.visible = true;
			Socks_Btn.visible = true;
			Extra_Btn.visible = true;
			BG_Btn.visible = true;
			Color_Btn.visible = true;
			Color_Btn1.visible = false;
			Color_Btn2.visible = false;
			Next_Btn.visible = true;
			Prev_Btn.visible = true;
			Trash_Btn.visible = true;
			Shuffle_Btn.visible = true;
			Show_Btn.visible = true;
			Reset_Btn.visible = true;
			GP_Btn.visible = false;
			Retry_Btn.visible = false;
			Save_Btn.visible = false;
			MoreGames_Btn.visible = false;
			End_Logo.visible = false;
			Logo.visible = true;

			colorPage = 1;
			this.HairMenuGroup_fnc();

			Color_Group.visible = false;
			Eyebrows_Icon_Group.visible = false;
			Lips_Icon_Group.visible = false;
			SkinColor_Menu_Group.visible = false;
			Top_Icon_Group.visible = false;
			Bottoms_Icon_Group.visible = false;
			Skirt_Icon_Group.visible = false;
			Shoes_Icon_Group.visible = false;
			Socks_Icon_Group.visible = false;
			Extra_Icon_Group.visible = false;
			BG_Icon_Group.visible = false;
			Eyes_Icon_Group.visible = false;


			Doll_Group.x = 0;
			Doll_Group.y = 1;

			this.NormalSize_fnc();
		},this,1,0,2);
		Retry_Btn.anchor.setTo(0.5,0.5);
		Retry_Btn.visible = false;

		Save_Btn = this.add.button(Retry_Btn.x,Retry_Btn.y + Retry_Btn.height + 20,"save_btn",function()
		{
			this.SaveScreenshot();
		},this,1,0,2);
		Save_Btn.anchor.setTo(0.5,0.5);
		Save_Btn.visible = false;

		MoreGames_Btn = this.add.button(Retry_Btn.x,Save_Btn.y + Save_Btn.height + 23,"moregames_btn",function()
		{
			//window.open("http://www.kawaiigames.net/exclusive-games?utm_source=html5-pearl&utm_medium=html5-pearl&utm_campaign=crystal-gem-pearl-dress-up","_blank");
		},this,1,0,2);
		MoreGames_Btn.anchor.setTo(0.5,0.5);
		MoreGames_Btn.visible = false;

		End_Logo = this.add.button(882,74,"logo",function()
		{
			//window.open("http://www.kawaiigames.net/?utm_source=html5-pearl&utm_medium=html5-pearl&utm_campaign="+ GameTitle,"_blank");
		},this,1,0,2);
		End_Logo.anchor.setTo(0.5,0.5);
		End_Logo.scale.setTo(0.5,0.5);
		End_Logo.smoothed = false;
		End_Logo.visible = false;

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
			
			Hair_Btn.inputEnabled = false;
			Hl_Btn.inputEnabled = false;
			Eye_Btn.inputEnabled = false;
			Eyebrows_Btn.inputEnabled = false;
			Eye_Shadow_Btn.inputEnabled = false;
			Lips_Btn.inputEnabled = false;
			SkinTone_Btn.inputEnabled = false;
			Tops_Btn.inputEnabled = false;
			Bottoms_Btn.inputEnabled = false;
			Dress_Btn.inputEnabled = false;
			Shoes_Btn.inputEnabled = false;
			Socks_Btn.inputEnabled = false;
			Extra_Btn.inputEnabled = false;
			BG_Btn.inputEnabled = false;
			Color_Btn.inputEnabled = false;
			Color_Btn1.inputEnabled = false;
			Color_Btn2.inputEnabled = false;
			Next_Btn.inputEnabled = false;
			Prev_Btn.inputEnabled = false;
			Trash_Btn.inputEnabled = false;
			Shuffle_Btn.inputEnabled = false;
			Show_Btn.inputEnabled = false;
			Reset_Btn.inputEnabled = false;
			Next_Btn.inputEnabled = false;
			Prev_Btn.inputEnabled = false;
			Logo.inputEnabled = false;
			End_Logo.inputEnabled = false;
			GP_Btn.inputEnabled = false;
			Retry_Btn.inputEnabled = false;
			Save_Btn.inputEnabled = false;
			MoreGames_Btn.inputEnabled = false;

			DressUp_Btn_Group.setAll("inputEnabled",false);
			Color_Group.setAll("inputEnabled",false);
			Shades_Hl_Group.setAll("inputEnabled",false);
			//Eyeshadow_Color_Group.setAll("inputEnabled",false);
			//Cheeks_Menu_Group.setAll("inputEnabled",false);
			SkinColor_Menu_Group.setAll("inputEnabled",false);
		},this,1,0,2);
		Credits_Btn.anchor.setTo(0.5,0.5);


		//---------------------------------------------------------//

		//Credits Screen
		
		Screen_Effect = this.add.sprite(0,0,"screen_effect");

		
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

		Close_Btn = this.add.button(Credits_Text.x + Credits_Text.width/2 - 35,Credits_Text.y - Credits_Text.height/2 + 35,"close_btn",function()
		{
			
			Credits_Group.visible = false;
			Credits_Btn.visible = true;

			
			Hair_Btn.inputEnabled = true;
			Hl_Btn.inputEnabled = true;
			Eye_Btn.inputEnabled = true;
			Eyebrows_Btn.inputEnabled = true;
			Eye_Shadow_Btn.inputEnabled = true;
			Lips_Btn.inputEnabled = true;
			SkinTone_Btn.inputEnabled = true;
			Tops_Btn.inputEnabled = true;
			Bottoms_Btn.inputEnabled = true;
			Dress_Btn.inputEnabled = true;
			Shoes_Btn.inputEnabled = true;
			Socks_Btn.inputEnabled = true;
			Extra_Btn.inputEnabled = true;
			BG_Btn.inputEnabled = true;
			Color_Btn.inputEnabled = true;
			Color_Btn1.inputEnabled = true;
			Color_Btn2.inputEnabled = true;
			Next_Btn.inputEnabled = true;
			Prev_Btn.inputEnabled = true;
			Trash_Btn.inputEnabled = true;
			Shuffle_Btn.inputEnabled = true;
			Show_Btn.inputEnabled = true;
			Reset_Btn.inputEnabled = true;
			Next_Btn.inputEnabled = true;
			Prev_Btn.inputEnabled = true;
			Logo.inputEnabled = true;
			End_Logo.inputEnabled = true;		
			GP_Btn.inputEnabled = true;
			Retry_Btn.inputEnabled = true;
			Save_Btn.inputEnabled = true;
			MoreGames_Btn.inputEnabled = true;

			DressUp_Btn_Group.setAll("inputEnabled",true);
			Color_Group.setAll("inputEnabled",true);
			Shades_Hl_Group.setAll("inputEnabled",true);
			//Eyebrows_Menu_Group.setAll("inputEnabled",true);
			//Cheeks_Menu_Group.setAll("inputEnabled",true);
			SkinColor_Menu_Group.setAll("inputEnabled",true);
		},this,1,0,2);
		Close_Btn.anchor.setTo(0.5,0.5);

		
		Credits_Group = this.add.group();

		Credits_Group.add(Screen_Effect);
		Credits_Group.add(Credits_Text);
		Credits_Group.add(Link_Btn);
		Credits_Group.add(Link_Btn2);
		Credits_Group.add(Close_Btn);

		
		Credits_Group.visible = false;

		//-----------------------------------------------------------//
		//Soundbtn
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

		
		if(!MuteBool)
		{
			SoundBtn.animations.play("soundOn");
		}
		else if(MuteBool)
		{
			SoundBtn.animations.play("soundOff");
		}
		//--------------------------------------------------------------------------//

		PosTextBool = false;

		/*PosTextBool = true;
		PosText = this.add.text(900,110,"Hello",{font:"40px Arial",fill:"#000000"});
		PosText.anchor.setTo(0.5,0.5);
		PosText.setShadow(3,3,"rgba(0,0,0,0.5)",2);
		debug_fnc(PosText);*/
	},
	checkItem: function(ObjToCheck,ObjOutline)
	{
		ObjToCheck.inputEnabled = true;
		ObjToCheck.events.onInputUp.add(function()
		{
			ObjToCheck.frame++;ObjOutline.frame = ObjToCheck.frame;
		},this);
	},
	buttonUp_fnc: function(buttonObj)
	{
		buttonObj.events.onInputUp.add(function(){buttonObj.frame = 0;},this);
	},
	buttonDown_fnc: function(buttonObj)
	{
		buttonObj.events.onInputDown.add(function(){buttonObj.frame = 1;},this);
	},
	SaveScreenshot: function()
	{
		Credits_Btn.visible = false;
		GP_Btn.visible = false;
		Retry_Btn.visible = false;
		Save_Btn.visible = false;
		MoreGames_Btn.visible = false;
		SoundBtn.visible = false;

		
		this.game.time.events.add(90,function()
		{
			var a = document.createElement('a');
			var Data = this.game.canvas.toDataURL( 'image/png' ).replace( 'image/png', 'image/octet-stream' );
			a.setAttribute('download', 'arcade-'+ GameTitle +'.png');
	
			a.href = Data;
			a.innerHTML = 'testing';
			a.style.display = 'none';
			a.click();

			
			Credits_Btn.visible = true;
			GP_Btn.visible = true;
			Retry_Btn.visible = true;
			Save_Btn.visible = true;
			MoreGames_Btn.visible = true;
			SoundBtn.visible = true;
		},this);
	},
	DressUpBtn_fnc: function()
	{
		if(openedMenu == 1)
		{
			if(openedMenuPage == 1){this.Hair_fnc(0);}
			else if(openedMenuPage == 2){this.Hair_fnc(3);}
			else if(openedMenuPage == 3){this.Hair_fnc(6);}
		}
		else if(openedMenu == 3)
		{
			if(openedMenuPage == 1){this.Eyes_fnc(0);}
			else if(openedMenuPage == 2){this.Eyes_fnc(3);}
			else if(openedMenuPage == 3){this.Eyes_fnc(6);}
		}
		else if(openedMenu == 4)
		{
			if(openedMenuPage == 1){this.Eyebrows_fnc(0);}
			else if(openedMenuPage == 2){this.Eyebrows_fnc(3);}
		}
		else if(openedMenu == 6)
		{
			if(openedMenuPage == 1){Lips.frame = 0;}
			else if(openedMenuPage == 2){Lips.frame = 3;}
			else if(openedMenuPage == 3){Lips.frame = 6;}
		}
		else if(openedMenu == 8)
		{
			if(openedMenuPage == 1){this.Clothes_fnc(0);}
			else if(openedMenuPage == 2){this.Clothes_fnc(3);}
			else if(openedMenuPage == 3){this.Clothes_fnc(6);}
		}
		else if(openedMenu == 9)
		{
			if(openedMenuPage == 1){this.Bottoms_fnc(0);}
			else if(openedMenuPage == 2){this.Bottoms_fnc(3);}
			else if(openedMenuPage == 3){this.Bottoms_fnc(6);}
		}
		else if(openedMenu == 10)
		{
			if(openedMenuPage == 1){this.Skirt_fnc(0);}
			else if(openedMenuPage == 2){this.Skirt_fnc(3);}
			else if(openedMenuPage == 3){this.Skirt_fnc(6);}
		}
		else if(openedMenu == 11)
		{
			if(openedMenuPage == 1){this.Shoes_fnc(0);}
			else if(openedMenuPage == 2){this.Shoes_fnc(3);}
			else if(openedMenuPage == 3){this.Shoes_fnc(6);}
		}
		else if(openedMenu == 12)
		{
			if(openedMenuPage == 1){this.Socks_fnc(0);}
			else if(openedMenuPage == 2){this.Socks_fnc(3);}
			else if(openedMenuPage == 3){this.Socks_fnc(6);}
		}
		else if(openedMenu == 13)
		{
			if(openedMenuPage == 1){this.Extras_fnc(0,Extra,Extra_Outline);}
			else if(openedMenuPage == 2){this.Extras_fnc(3,Extra4,Extra4_Outline);}
			else if(openedMenuPage == 3){this.Extras_fnc(6,Extra7,Extra7_Outline);}
		}
		else if(openedMenu == 14)
		{
			if(openedMenuPage == 1){this.BG_fnc(0);}
			else if(openedMenuPage == 2){this.BG_fnc(3);}
			else if(openedMenuPage == 3){this.BG_fnc(6);}
		}
	},
	DressUpBtn2_fnc: function()
	{
		if(openedMenu == 1)
		{
			if(openedMenuPage == 1){this.Hair_fnc(1);}
			else if(openedMenuPage == 2){this.Hair_fnc(4);}
			else if(openedMenuPage == 3){this.Hair_fnc(7);}
		}
		else if(openedMenu == 3)
		{
			if(openedMenuPage == 1){this.Eyes_fnc(1);}
			else if(openedMenuPage == 2){this.Eyes_fnc(4);}
			else if(openedMenuPage == 3){this.Eyes_fnc(7);}
		}
		else if(openedMenu == 4)
		{
			if(openedMenuPage == 1){this.Eyebrows_fnc(1);}
			else if(openedMenuPage == 2){this.Eyebrows_fnc(4);}
		}
		else if(openedMenu == 6)
		{
			if(openedMenuPage == 1){Lips.frame = 1;}
			else if(openedMenuPage == 2){Lips.frame = 4;}
			else if(openedMenuPage == 3){Lips.frame = 7;}
		}
		else if(openedMenu == 8)
		{
			if(openedMenuPage == 1){this.Clothes_fnc(1);}
			else if(openedMenuPage == 2){this.Clothes_fnc(4);}
			else if(openedMenuPage == 3){this.Clothes_fnc(7);}
		}
		else if(openedMenu == 9)
		{
			if(openedMenuPage == 1){this.Bottoms_fnc(1);}
			else if(openedMenuPage == 2){this.Bottoms_fnc(4);}
			else if(openedMenuPage == 3){this.Bottoms_fnc(7);}
		}
		else if(openedMenu == 10)
		{
			if(openedMenuPage == 1){this.Skirt_fnc(1);}
			else if(openedMenuPage == 2){this.Skirt_fnc(4);}
			else if(openedMenuPage == 3){this.Skirt_fnc(7);}
		}
		else if(openedMenu == 11)
		{
			if(openedMenuPage == 1){this.Shoes_fnc(1);}
			else if(openedMenuPage == 2){this.Shoes_fnc(4);}
			else if(openedMenuPage == 3){this.Shoes_fnc(7);}
		}
		else if(openedMenu == 12)
		{
			if(openedMenuPage == 1){this.Socks_fnc(1);}
			else if(openedMenuPage == 2){this.Socks_fnc(4);}
			else if(openedMenuPage == 3){this.Socks_fnc(7);}
		}
		else if(openedMenu == 13)
		{
			if(openedMenuPage == 1){this.Extras_fnc(1,Extra2,Extra2_Outline);}
			else if(openedMenuPage == 2){this.Extras_fnc(4,Extra5,Extra5_Outline);}
			else if(openedMenuPage == 3){this.Extras_fnc(7,Extra8,Extra8_Outline);}
		}
		else if(openedMenu == 14)
		{
			if(openedMenuPage == 1){this.BG_fnc(1);}
			else if(openedMenuPage == 2){this.BG_fnc(4);}
			else if(openedMenuPage == 3){this.BG_fnc(7);}
		}
	},
	DressUpBtn3_fnc: function()
	{
		if(openedMenu == 1)
		{
			if(openedMenuPage == 1){this.Hair_fnc(2);}
			else if(openedMenuPage == 2){this.Hair_fnc(5);}
			else if(openedMenuPage == 3){this.Hair_fnc(8);}
		}
		else if(openedMenu == 3)
		{
			if(openedMenuPage == 1){this.Eyes_fnc(2);}
			else if(openedMenuPage == 2){this.Eyes_fnc(5);}
			else if(openedMenuPage == 3){this.Eyes_fnc(8);}
		}
		else if(openedMenu == 4)
		{
			if(openedMenuPage == 1){this.Eyebrows_fnc(2);}
			else if(openedMenuPage == 2){this.Eyebrows_fnc(5);}
		}
		else if(openedMenu == 6)
		{
			if(openedMenuPage == 1){Lips.frame = 2;}
			else if(openedMenuPage == 2){Lips.frame = 5;}
			else if(openedMenuPage == 3){Lips.frame = 8;}
		}
		else if(openedMenu == 8)
		{
			if(openedMenuPage == 1){this.Clothes_fnc(2);}
			else if(openedMenuPage == 2){this.Clothes_fnc(5);}
			else if(openedMenuPage == 3){this.Clothes_fnc(8);}
		}
		else if(openedMenu == 9)
		{
			if(openedMenuPage == 1){this.Bottoms_fnc(2);}
			else if(openedMenuPage == 2){this.Bottoms_fnc(5);}
			else if(openedMenuPage == 3){this.Bottoms_fnc(8);}
		}
		else if(openedMenu == 10)
		{
			if(openedMenuPage == 1){this.Skirt_fnc(2);}
			else if(openedMenuPage == 2){this.Skirt_fnc(5);}
			else if(openedMenuPage == 3){this.Skirt_fnc(8);}
		}
		else if(openedMenu == 11)
		{
			if(openedMenuPage == 1){this.Shoes_fnc(2);}
			else if(openedMenuPage == 2){this.Shoes_fnc(5);}
			else if(openedMenuPage == 3){this.Shoes_fnc(8);}
		}
		else if(openedMenu == 12)
		{
			if(openedMenuPage == 1){this.Socks_fnc(2);}
			else if(openedMenuPage == 2){this.Socks_fnc(5);}
			else if(openedMenuPage == 3){this.Socks_fnc(8);}
		}
		else if(openedMenu == 13)
		{
			if(openedMenuPage == 1){this.Extras_fnc(2,Extra3,Extra3_Outline);}
			else if(openedMenuPage == 2){this.Extras_fnc(5,Extra6,Extra6_Outline);}
			else if(openedMenuPage == 3){this.Extras_fnc(8,Extra9,Extra9_Outline);}
		}
		else if(openedMenu == 14)
		{
			if(openedMenuPage == 1){this.BG_fnc(2);}
			else if(openedMenuPage == 2){this.BG_fnc(5);}
			else if(openedMenuPage == 3){this.BG_fnc(8);}
		}
	},
	HairMenuGroup_fnc: function()
	{
		openedMenu = 1;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = true;
		Color_Btn1.visible = false;
		Color_Btn2.visible = false;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;
		Hair_Icon_Group.visible = true;
		Hair_Icon_Group.setAll("visible",false);
		Hair_Icon.visible = true;
		DressUp_Btn_Group.visible = true;

		/*Bangs_Small.visible = true;
		Hair_Small.visible = true;*/

		/*bangsOpened = true;
		hairOpened = false;*/
		Hair_Page.visible = true;
		Hair_Page.frame = 0;
	},
	EyesMenuGroup_fnc: function()
	{
		openedMenu = 3;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = true;
		Color_Btn1.visible = false;
		Color_Btn2.visible = false;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;

		Eyes_Icon_Group.visible = true;
		Eyes_Icon_Group.setAll("visible",false);
		Eyes_Icon.visible = true;
		DressUp_Btn_Group.visible = true;
		/*Lashes_On.visible = true;
		Lashes_Off.visible = true;*/
		Eyes_Page.visible = true;
		Eyes_Page.frame = 0;
	},
	LipsMenuGroup_fnc: function()
	{
		openedMenu = 6;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = false;
		Color_Btn1.visible = false;
		Color_Btn2.visible = false;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;
		Lips_Icon_Group.visible = true;
		Lips_Icon_Group.setAll("visible",false);
		Lips_Icon.visible = true;
		DressUp_Btn_Group.visible = true;

		Lips_Page.visible = true;
		Lips_Page.frame = 0;
	},
	EyeshadowMenuGroup_fnc: function()
	{
		openedMenu = 5;
		Next_Btn.visible = false;
		Prev_Btn.visible = false;

		Color_Btn.visible = false;
		Color_Btn1.visible = false;
		Color_Btn2.visible = false;
		Color_Group.visible = true;
		Color_Back_Btn.visible = false;

		colorPage = 1;
		Color_Pallette.visible = true;
		Color_Pallette2.visible = false;

		Trash_Btn.x = TrashX;
		Trash_Btn.y = TrashY;
		Trash_Btn.visible = true;

		Color_Prev.x = ColorPrevX;
		Color_Next.x = ColorNextX;
	},
	TopsMenuGroup_fnc: function()
	{
		openedMenu = 8;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = false;
		Color_Btn1.visible = true;
		Color_Btn2.visible = true;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;
		Top_Icon_Group.visible = true;
		Top_Icon_Group.setAll("visible",false);
		Tops_Icon.visible = true;
		DressUp_Btn_Group.visible = true;
		Tops_Page.visible = true;
		/*Tops_Menu_Group.visible = true;
		Tops_Menu_Group.setAll("visible",false);
		Tops_Icon.visible = true;
		Tops_Icon2.visible = true;
		Tops_Icon3.visible = true;
		Tops_Page.visible = true;*/
		Tops_Page.frame = 0;
	},
	BottomsMenuGroup_fnc: function()
	{
		openedMenu = 9;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = false;
		Color_Btn1.visible = true;
		Color_Btn2.visible = true;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;
		Bottoms_Icon_Group.visible = true;
		Bottoms_Icon_Group.setAll("visible",false);
		Bottoms_Icon.visible = true;
		DressUp_Btn_Group.visible = true;

		Bottoms_Page.visible = true;
		Bottoms_Page.frame = 0;
	},
	DressMenuGroup_fnc: function()
	{
		openedMenu = 10;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = false;
		Color_Btn1.visible = true;
		Color_Btn2.visible = true;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;
		Skirt_Icon_Group.visible = true;
		Skirt_Icon_Group.setAll("visible",false);
		Skirt_Icon.visible = true;
		DressUp_Btn_Group.visible = true;
		Skirt_Page.visible = true;
		Skirt_Page.frame = 0;
	},
	ShoesMenuGroup_fnc: function()
	{
		openedMenu = 11;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = false;
		Color_Btn1.visible = true;
		Color_Btn2.visible = true;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;
		Shoes_Icon_Group.visible = true;
		Shoes_Icon_Group.setAll("visible",false);
		Shoes_Icon.visible = true;
		DressUp_Btn_Group.visible = true;

		Shoes_Page.visible = true;
		Shoes_Page.frame = 0;
	},
	SocksMenuGroup_fnc: function()
	{
		openedMenu = 12;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = true;
		Color_Btn1.visible = false;
		Color_Btn2.visible = false;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;
		Socks_Icon_Group.visible = true;
		Socks_Icon_Group.setAll("visible",false);
		Socks_Icon.visible = true;
		DressUp_Btn_Group.visible = true;

		Socks_Page.visible = true;
		Socks_Page.frame = 0;
	},
	ExtraMenuGroup_fnc: function()
	{
		openedMenu = 13;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = true;
		Color_Btn1.visible = false;
		Color_Btn2.visible = false;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;
		Extra_Icon_Group.visible = true;
		Extra_Icon_Group.setAll("visible",false);
		Extra_Icon.visible = true;
		DressUp_Btn_Group.visible = true;

		Extra_Page.visible = true;
		Extra_Page.frame = 0;
	},
	BGMenuGroup_fnc: function()
	{
		openedMenu = 14;
		openedMenuPage = 1;
		Next_Btn.visible = true;
		Prev_Btn.visible = true;

		Color_Btn.visible = false;
		Color_Btn1.visible = false;
		Color_Btn2.visible = false;
		Trash_Btn.visible = true;
		Trash_Btn.x = TrashOrigX;
		Trash_Btn.y = TrashOrigY;
		BG_Icon_Group.visible = true;
		BG_Icon_Group.setAll("visible",false);
		BG_Icon.visible = true;
		DressUp_Btn_Group.visible = true;

		BG_Page.visible = true;
		BG_Page.frame = 0;
	},
	NormalSize_fnc: function()
	{		
		Doll_Group.scale.setTo(0.5,0.5)
		Doll_Group.x = 0;
		Doll_Group.y = 1;
		normalBool = true;
		//Doll_Group.setAll("smoothed",false);
	},
	ScaleDoll: function()
	{

		Doll_Group.x = -221;
		Doll_Group.y = -83;
		Doll_Group.scale.setTo(1,1);
		normalBool = false;

		//Doll_Group.setAll("alpha",0.5);
		//Doll_Group.setAll("smoothed",false);
	},
	changeColor: function(Num,HairColorNum2)
	{
		if(openedColors == 1)
		{
			if(colorPage == 1)
			{
				if(openedMenu == 1)
				{
					hairColor = Num;
					Hair.tint = Colors[Num];
					Bangs.tint = Hair.tint;
					Eyebrows.tint = Hair.tint;
				}
				else if(openedMenu == 2)
				{
					if(ShadeBool)
					{
						hasShade = true;
						Bangs_Shade.visible = true;
						Bangs_Shade.tint = Colors[Num];
						Hair_Shades.tint = Colors[Num];
						if(Hair.visible)
						{
							Hair_Shades.visible = true;
						}
					}
					else
					{
						hasHl = true;
						Bang_Hl.visible = true;
						Bang_Hl.tint = Colors[Num];
						Hair_Hl.tint = Colors[Num];
						if(Hair.visible)
						{
							Hair_Hl.visible = true;
						}
					}
				}
				else if(openedMenu == 3){Eyes.tint = Colors[Num];}
				else if(openedMenu == 5)
				{
					Eye_Shadow.visible = true;
					Eye_Shadow.tint = Colors[Num];
				}
				else if(openedMenu == 6){Lips.tint = Colors[Num];}
				else if(openedMenu == 8)
				{
					topsColor = Num;
					Clothes.tint = Colors[Num];
				}
				else if(openedMenu == 9)
				{
					bottomsColor = Num;
					Bottoms.tint = Colors[Num];
				}
				else if(openedMenu == 10)
				{
					dressColor = Num;
					//Clothes.tint = Colors[Num];
					Skirt.tint = Colors[Num];
				}
				else if(openedMenu == 11)
				{
					shoesColor = Num;
					Shoes.tint = Colors[Num];
				}
				else if(openedMenu == 12)
				{
					socksColor = Num;
					Socks.tint = Colors[Num];
				}
				else if(openedMenu == 13)
				{
					if(extraBoolAr[0])
					{
						ExtraColor = Num;
						Extra.tint = Colors[Num];
					}
					else if(extraBoolAr[1])
					{
						ExtraColor = Num;
						Extra2.tint = Colors[Num];
					}
					else if(extraBoolAr[2])
					{
						Extra3Color = Num;
						Extra3.tint = Colors[Num];
					}
					else if(extraBoolAr[3])
					{
						Extra3Color = Num;
						Extra4.tint = Colors[Num];
					}
					else if(extraBoolAr[4]){Extra5.tint = Colors[Num];}
					else if(extraBoolAr[5]){Extra6.tint = Colors[Num];}
					else if(extraBoolAr[6])
					{
						Extra7Color = Num;
						Extra7.tint = Colors[Num];
					}
					else if(extraBoolAr[7])
					{
						Extra7Color = Num;
						Extra8.tint = Colors[Num];
					}
					else if(extraBoolAr[8])
					{
						Extra9Color = Num;
						Extra9.tint = Colors[Num];
					}
				}
				else if(openedMenu == 14){BG.tint = Colors[Num];}
			}
			else if(colorPage == 2)
			{
				if(openedMenu == 1)
				{
					hairColor = HairColorNum2;
					Hair.tint = Colors2[Num];
					Bangs.tint = Hair.tint;
					Eyebrows.tint = Hair.tint;
				}
				else if(openedMenu == 2)
				{
					if(ShadeBool)
					{
						hasShade = true;
						Bangs_Shade.visible = true;
						Bangs_Shade.tint = Colors2[Num];
						Hair_Shades.tint = Colors2[Num];
						if(Hair.visible)
						{
							Hair_Shades.visible = true;
						}
					}
					else
					{
						hasHl = true;
						Bang_Hl.visible = true;
						Bang_Hl.tint = Colors2[Num];
						Hair_Hl.tint = Colors2[Num];
						if(Hair.visible)
						{
							Hair_Hl.visible = true;
						}
					}
				}
				else if(openedMenu == 3){Eyes.tint = Colors2[Num];}
				else if(openedMenu == 5)
				{
					Eye_Shadow.visible = true;
					Eye_Shadow.tint = Colors2[Num];
				}
				else if(openedMenu == 6){Lips.tint = Colors2[Num];}
				else if(openedMenu == 8)
				{
					topsColor = HairColorNum2;
					Clothes.tint = Colors2[Num];
				}
				else if(openedMenu == 9)
				{
					bottomsColor = HairColorNum2;
					Bottoms.tint = Colors2[Num];
				}
				else if(openedMenu == 10)
				{
					dressColor = Num;
					//Clothes.tint = Colors[Num];
					Skirt.tint = Colors2[Num];
				}
				else if(openedMenu == 11)
				{
					shoesColor = HairColorNum2;
					Shoes.tint = Colors2[Num];
				}
				else if(openedMenu == 12)
				{
					socksColor = HairColorNum2;
					Socks.tint = Colors2[Num];
				}
				else if(openedMenu == 13)
				{
					if(extraBoolAr[0])
					{
						ExtraColor = HairColorNum2;
						Extra.tint = Colors2[Num];
					}
					if(extraBoolAr[1])
					{
						ExtraColor = HairColorNum2;
						Extra2.tint = Colors2[Num];
					}
					else if(extraBoolAr[2])
					{
						Extra3Color = HairColorNum2;
						Extra3.tint = Colors2[Num];
					}
					else if(extraBoolAr[3])
					{
						Extra3Color = HairColorNum2;
						Extra4.tint = Colors2[Num];
					}
					else if(extraBoolAr[4]){Extra5.tint = Colors2[Num];}
					else if(extraBoolAr[5]){Extra6.tint = Colors2[Num];}
					else if(extraBoolAr[6])
					{
						Extra7Color = HairColorNum2;
						Extra7.tint = Colors2[Num];
					}
					else if(extraBoolAr[7])
					{
						Extra7Color = HairColorNum2;
						Extra8.tint = Colors2[Num];
					}
					else if(extraBoolAr[8])
					{
						Extra9Color = HairColorNum2;
						Extra9.tint = Colors2[Num];
					}
				}
				else if(openedMenu == 14){BG.tint = Colors2[Num];}
			}
		}
		if(openedColors == 2)
		{
			if(colorPage == 1)
			{
				if(openedMenu == 1)
				{
					hairColor = Num;
					Hair.tint = Colors[Num];
					Bangs.tint = Hair.tint;
					Eyebrows.tint = Hair.tint;
				}
				else if(openedMenu == 2)
				{
					if(ShadeBool)
					{
						hasShade = true;
						Bangs_Shade.visible = true;
						Bangs_Shade.tint = Colors[Num];
						Hair_Shades.tint = Colors[Num];
						if(Hair.visible)
						{
							Hair_Shades.visible = true;
						}
					}
					else
					{
						hasHl = true;
						Bang_Hl.visible = true;
						Bang_Hl.tint = Colors[Num];
						Hair_Hl.tint = Colors[Num];
						if(Hair.visible)
						{
							Hair_Hl.visible = true;
						}
					}
				}
				else if(openedMenu == 3){Eyes.tint = Colors[Num];}
				else if(openedMenu == 5)
				{
					Eye_Shadow.visible = true;
					Eye_Shadow.tint = Colors[Num];
				}
				else if(openedMenu == 6){Lips.tint = Colors[Num];}
				else if(openedMenu == 8)
				{
					Clothes_Shade.tint = Colors[Num];
				}
				else if(openedMenu == 9)
				{
					bottomsColor = Num;
					Bottoms_Shade.tint = Colors[Num];
				}
				else if(openedMenu == 10)
				{
					Skirt_Shade.tint = Colors[Num];
				}
				else if(openedMenu == 11)
				{
					Shoes_Shade.tint = Colors[Num];
				}
				else if(openedMenu == 12)
				{
					socksColor = Num;
					Socks.tint = Colors[Num];
				}
				else if(openedMenu == 13)
				{
					if(extraBoolAr[0])
					{
						ExtraColor = Num;
						Extra.tint = Colors[Num];
					}
					else if(extraBoolAr[1])
					{
						ExtraColor = Num;
						Extra2.tint = Colors[Num];
					}
					else if(extraBoolAr[2])
					{
						Extra3Color = Num;
						Extra3.tint = Colors[Num];
					}
					else if(extraBoolAr[3])
					{
						Extra3Color = Num;
						Extra4.tint = Colors[Num];
					}
					else if(extraBoolAr[4]){Extra5.tint = Colors[Num];}
					else if(extraBoolAr[5]){Extra6.tint = Colors[Num];}
					else if(extraBoolAr[6])
					{
						Extra7Color = Num;
						Extra7.tint = Colors[Num];
					}
					else if(extraBoolAr[7])
					{
						Extra7Color = Num;
						Extra8.tint = Colors[Num];
					}
					else if(extraBoolAr[8])
					{
						Extra9Color = Num;
						Extra9.tint = Colors[Num];
					}
				}
				else if(openedMenu == 14){BG.tint = Colors[Num];}
			}
			else if(colorPage == 2)
			{
				if(openedMenu == 1)
				{
					hairColor = HairColorNum2;
					Hair.tint = Colors2[Num];
					Bangs.tint = Hair.tint;
					Eyebrows.tint = Hair.tint;
				}
				else if(openedMenu == 2)
				{
					if(ShadeBool)
					{
						hasShade = true;
						Bangs_Shade.visible = true;
						Bangs_Shade.tint = Colors2[Num];
						Hair_Shades.tint = Colors2[Num];
						if(Hair.visible)
						{
							Hair_Shades.visible = true;
						}
					}
					else
					{
						hasHl = true;
						Bang_Hl.visible = true;
						Bang_Hl.tint = Colors2[Num];
						Hair_Hl.tint = Colors2[Num];
						if(Hair.visible)
						{
							Hair_Hl.visible = true;
						}
					}
				}
				else if(openedMenu == 3){Eyes.tint = Colors2[Num];}
				else if(openedMenu == 5)
				{
					Eye_Shadow.visible = true;
					Eye_Shadow.tint = Colors2[Num];
				}
				else if(openedMenu == 6){Lips.tint = Colors2[Num];}
				else if(openedMenu == 8)
				{
					topsColor = HairColorNum2;
					Clothes_Shade.tint = Colors2[Num];
				}
				else if(openedMenu == 9)
				{
					bottomsColor = HairColorNum2;
					Bottoms_Shade.tint = Colors2[Num];
				}
				else if(openedMenu == 10)
				{
					Skirt_Shade.tint = Colors2[Num];
				}
				else if(openedMenu == 11)
				{
					Shoes_Shade.tint = Colors2[Num];
				}
				else if(openedMenu == 12)
				{
					socksColor = HairColorNum2;
					Socks.tint = Colors2[Num];
				}
				else if(openedMenu == 13)
				{
					if(extraBoolAr[0])
					{
						ExtraColor = HairColorNum2;
						Extra.tint = Colors2[Num];
					}
					if(extraBoolAr[1])
					{
						ExtraColor = HairColorNum2;
						Extra2.tint = Colors2[Num];
					}
					else if(extraBoolAr[2])
					{
						Extra3Color = HairColorNum2;
						Extra3.tint = Colors2[Num];
					}
					else if(extraBoolAr[3])
					{
						Extra3Color = HairColorNum2;
						Extra4.tint = Colors2[Num];
					}
					else if(extraBoolAr[4]){Extra5.tint = Colors2[Num];}
					else if(extraBoolAr[5]){Extra6.tint = Colors2[Num];}
					else if(extraBoolAr[6])
					{
						Extra7Color = HairColorNum2;
						Extra7.tint = Colors2[Num];
					}
					else if(extraBoolAr[7])
					{
						Extra7Color = HairColorNum2;
						Extra8.tint = Colors2[Num];
					}
					else if(extraBoolAr[8])
					{
						Extra9Color = HairColorNum2;
						Extra9.tint = Colors2[Num];
					}
				}
				else if(openedMenu == 14){BG.tint = Colors2[Num];}
			}
		}
	},
	SkinColor_fnc: function(SkinColorNum)
	{
		if(skinColorPage == 1)
		{
			Body.tint = BodyColor[SkinColorNum];
			Head.tint = BodyColor[SkinColorNum];
			Hand.tint = BodyColor[SkinColorNum];
			Hand2.tint = BodyColor[SkinColorNum];
		}		
		if(skinColorPage == 2)
		{
			Body.tint = BodyColor2[SkinColorNum];
			Head.tint = BodyColor2[SkinColorNum];
			Hand.tint = BodyColor2[SkinColorNum];
			Hand2.tint = BodyColor2[SkinColorNum];
		}
	},
	checkHairColor: function()
	{
		if(hairColor <= 39)
		{
			for(var i = 0; i < 40; i++)
			{
				if(hairColor == i)
				{
					Hair.tint = Colors[i];
				}
			}
		}

		if(hairColor >= 40)
		{
			for(var j = 0; j < 40; j++)
			{
				if(hairColor == j)
				{
					Hair.tint = Colors2[j];
				}
			}
		}
	},
	checkBangsColor: function()
	{
		if(hairColor <= 39)
		{
			for(var i = 0; i < 40; i++)
			{
				if(hairColor == i){Bangs.tint = Colors[i];}
			}
		}

		if(hairColor >= 40)
		{
			for(var j = 0; j < 40; j++)
			{
				if(hairColor == j){Bangs.tint = Colors2[j];}
			}
		}
	},
	Bang_fnc: function(BangsFrame)
	{
		Bangs.frame = BangsFrame;
		Bangs_Outline.frame = Bangs.frame;
		Bang_Hl.frame = Bangs.frame;
		Bangs_Shade.frame = Bangs.frame;
		this.checkBangsColor();
	},
	Hair_fnc: function(HairFrame)
	{
		Bangs.frame = HairFrame;
		Bangs_Outline.frame = Bangs.frame;
		Bang_Hl.frame = Bangs.frame;
		Bangs_Shade.frame = Bangs.frame;
		//this.checkBangsColor();
		//Bangs.tint = Hair.tint;

		Bangs.visible = true;
		Bangs_Outline.visible = true;
		Hair.frame = HairFrame;
		Hair.visible = true;
		Hair_Outline.frame = Hair.frame;
		Hair_Outline.visible = true;
		Hair_Hl.frame = Hair.frame;
		Hair_Shades.frame = Hair.frame;
		if(hasShade){Hair_Shades.visible = true;}
		if(hasHl){Hair_Hl.visible = true;}
		//this.checkHairColor();
	},
	Cheeks_fnc: function(CheeksFrame)
	{
		Cheeks.frame = CheeksFrame;
		//Cheeks.tint = Colors[9];
		Cheeks.visible = true;
	},
	Eyes_fnc: function(EyesFrame)
	{
		Eyes.frame = EyesFrame;
		Eyes_White.frame = EyesFrame;
		Eye_Shadow.frame = EyesFrame;
		//Eyelashes.frame = EyesFrame;
	},
	Eyebrows_fnc: function(EyebrowsFrame)
	{
		Eyebrows.frame = EyebrowsFrame;
		Eyebrows.visible = true;
		//Eyebrows_Outline.frame = Eyebrows.frame;
	},
	Clothes_fnc: function(ClothesFrame)
	{
		Clothes.visible = true;
		Clothes_Outline.visible = true;
		Clothes_Shade.visible = true;
		Clothes.frame = ClothesFrame;
		//Clothes.tint = ClothesColor;
		/*Clothes.x = TopsX[0];
		Clothes.y = TopsY[0];*/
		Clothes_Outline.frame = Clothes.frame;
		/*Clothes_Outline.x = Clothes.x+1;
		Clothes_Outline.y = Clothes.y;*/
		Clothes_Shade.frame = ClothesFrame;

		

		if(Bra.visible){Bra.visible = false;}

		if(Bottoms.visible == false){Panties.visible = true;}
	},
	Skirt_fnc: function(SkirtFrame)
	{
		Skirt.frame = SkirtFrame;
		Skirt_Outline.frame = SkirtFrame;
		Skirt_Shade.frame = SkirtFrame;
		Skirt.visible = true;
		Skirt_Outline.visible = true;
		Skirt_Shade.visible = true;
	},
	Bottoms_fnc: function(BottomsFrame)
	{
		Bottoms.frame = BottomsFrame;
		Bottoms_Outline.frame = Bottoms.frame;
		Bottoms_Shade.frame = Bottoms.frame;
		//Bottoms.tint = BottomsColor;
		Bottoms.visible = true;
		Bottoms_Outline.visible = true;
		Bottoms_Shade.visible = true;

		if(Panties.visible){Panties.visible = false;}
		if(Clothes.visible && Clothes.frame >= 9)
		{
			Clothes.visible = false;
			Clothes_Outline.visible = false;
			Bra.visible = true;
		}
	},
	Shoes_fnc: function(ShoesFrame)
	{
		Shoes.visible = true;
		Shoes_Outline.visible = true;
		Shoes_Shade.visible = true;
		Shoes.frame = ShoesFrame;
		Shoes_Outline.frame = ShoesFrame;
		Shoes_Shade.frame = ShoesFrame;
		//Shoes.tint = ShoesColor;
	},
	Socks_fnc: function(SocksFrame)
	{
		Socks.visible = true;
		Socks_Outline.visible = true;
		Socks.frame = SocksFrame;
		Socks_Outline.frame = Socks.frame;
		//Socks.tint = SocksColor;

		if(!Bottoms.visible && Clothes.frame <= 14){Panties.visible = true;}
	},
	BG_fnc: function(BGFrame)
	{
		BG_Details.frame = BGFrame;
		//BG.visible = true;
		//BG2.visible = false;
	},
	Extras_fnc: function(extraAr,extraColor,extraOutline)
	{
		if(!extraColor.visible)
		{
			for(var i = 0; i < extraBoolAr.length; i++){extraBoolAr[i] = false;}
			extraBoolAr[extraAr] = true;
			extraColor.visible = true;
			extraOutline.visible = true;

			if(extraAr == 1 || extraAr == 4 || extraAr == 6 || extraAr == 7 || extraAr == 8)
			{
				Hand.visible = false;
				Hand_Outline.visible = false;
				Hand2.visible = true;
				Hand_Outline2.visible = true;
			}
			if(extraAr == 0){extraColor.tint = Colors[4];}

			if(extraAr == 1)
			{
				Extra5.visible = false;
				Extra5_Outline.visible = false;
				Extra7.visible = false;
				Extra7_Outline.visible = false;
				Extra8.visible = false;
				Extra8_Outline.visible = false;
				Extra9.visible = false;
				Extra9_Outline.visible = false;
			}
			if(extraAr == 4)
			{
				Extra2.visible = false;
				Extra2_Outline.visible = false;
				Extra7.visible = false;
				Extra7_Outline.visible = false;
				Extra8.visible = false;
				Extra8_Outline.visible = false;
				Extra9.visible = false;
				Extra9_Outline.visible = false;
			}
			if(extraAr == 6)
			{
				Extra5.visible = false;
				Extra5_Outline.visible = false;
				Extra2.visible = false;
				Extra2_Outline.visible = false;
				Extra8.visible = false;
				Extra8_Outline.visible = false;
				Extra9.visible = false;
				Extra9_Outline.visible = false;
			}
			if(extraAr == 7)
			{
				Extra5.visible = false;
				Extra5_Outline.visible = false;
				Extra2.visible = false;
				Extra2_Outline.visible = false;
				Extra7.visible = false;
				Extra7_Outline.visible = false;
				Extra9.visible = false;
				Extra9_Outline.visible = false;
			}
			if(extraAr == 8)
			{
				Extra5.visible = false;
				Extra5_Outline.visible = false;
				Extra2.visible = false;
				Extra2_Outline.visible = false;
				Extra7.visible = false;
				Extra7_Outline.visible = false;
				Extra8.visible = false;
				Extra8_Outline.visible = false;
			}


		}
		else
		{
			for(var i = 0; i < extraBoolAr.length; i++){extraBoolAr[i] = false;}
			extraColor.visible = false;
			extraOutline.visible = false;

			if(extraAr == 1 || extraAr == 4 || extraAr == 6 || extraAr == 7 || extraAr == 8)
			{
				Hand.visible = true;
				Hand_Outline.visible = true;
				Hand2.visible = false;
				Hand_Outline2.visible = false;
			}
		}
	},
	//Shuffle
	Shuffle_Items: function()
	{
		var SkinRandPage = Math.floor(Math.random()*(2-1+1))+1;
		var SkinRand = Math.floor(Math.random()*(39-1+1))+1;
		this.skinShuffle(SkinRandPage,SkinRand);
		


		var HairRand = Math.floor(Math.random()*(9-1+1))+1;
		this.Hair_fnc(HairRand-1);

		/*var BangRand = Math.floor(Math.random()*(12-1+1))+1;
		this.Bang_fnc(BangRand-1);*/

		this.ColorShuffle_fnc(Hair,null,false,false);
		Bangs.tint = Hair.tint;
		/*this.ColorShuffle_fnc(Hair,Bangs,true,true);
		this.ColorShuffle_fnc(Hair_Hl,Bang_Hl,true,false);*/
		
		/*this.ColorShuffle_fnc(Hair,null,false,true);
		this.ColorShuffle_fnc(Hair_Hl,null,false,false);*/

		this.ColorShuffle_fnc(Eyes,null,false,false);

		var EyesRand = Math.floor(Math.random()*(9-1+1))+1;
		this.Eyes_fnc(EyesRand-1);

		var EyebrowsRand = Math.floor(Math.random()*(6-1+1))+1;
		this.Eyebrows_fnc(EyebrowsRand-1);

		//this.ColorShuffle_fnc(Eye_Shadow,null,false,false);

		



		var LipsRand = Math.floor(Math.random()*(9-1+1))+1;
		Lips.frame = LipsRand-1;
		//this.ColorShuffle_fnc(Lips,null,false,false);

		var ClothesRand = Math.floor(Math.random()*(9-1+1))+1;
		Clothes.visible = true;
		Clothes_Outline.visible = true;
		Clothes_Shade.visible = true;
		this.Clothes_fnc(ClothesRand-1);
		/*if(ClothesRand > 0 && ClothesRand < 10){this.Clothes_fnc(ClothesRand-1,null);}
		if(ClothesRand > 9 && ClothesRand <= 24){this.Skirt_fnc(ClothesRand-1,null);}*/

		this.ColorShuffle_fnc(Clothes,null,false,false);
		this.ColorShuffle_fnc(Clothes_Shade,null,false,false);

		var BottomsRand = Math.floor(Math.random()*(9-1+1))+1;
		/*Bottoms.visible = true;
		Bottoms_Outline.visible = true;*/
		this.Bottoms_fnc(BottomsRand-1);

		this.ColorShuffle_fnc(Bottoms,null,false,true);
		this.ColorShuffle_fnc(Bottoms_Shade,null,false,false);

		var SkirtRand = Math.floor(Math.random()*(9-1+1))+1;
		/*Print.visible = true;
		Print_Outline.visible = true;*/
		this.Skirt_fnc(SkirtRand-1);

		this.ColorShuffle_fnc(Skirt,null,false,false);
		this.ColorShuffle_fnc(Skirt_Shade,null,false,false);

		/*var JacketRand = Math.floor(Math.random()*(6-1+1))+1;
		Jacket.visible = true;
		Jacket_Outline.visible = true;
		if(JacketRand == 1)
		{
			Jacket.frame = 0;
			Jacket_Outline.frame = 0;
		}
		if(JacketRand == 2)
		{
			Jacket.frame = 1;
			Jacket_Outline.frame = 1;
		}
		if(JacketRand == 3)
		{
			Jacket.frame = 2;
			Jacket_Outline.frame = 2;
		}
		if(JacketRand == 4)
		{
			Jacket.frame = 3;
			Jacket_Outline.frame = 3;
		}
		if(JacketRand == 5)
		{
			Jacket.frame = 4;
			Jacket_Outline.frame = 4;
		}
		if(JacketRand == 6)
		{
			Jacket.frame = 5;
			Jacket_Outline.frame = 5;
		}			
		this.ColorShuffle_fnc(Jacket,null,false,false);*/

		var ShoesRand = Math.floor(Math.random()*(9-1+1))+1;
		this.Shoes_fnc(ShoesRand-1);
		
		this.ColorShuffle_fnc(Shoes,null,false,false);
		this.ColorShuffle_fnc(Shoes_Shade,null,false,false);

		var SocksRand = Math.floor(Math.random()*(9-1+1))+1;
		/*Socks.visible = true;
		Socks_Outline.visible = true;*/
		this.Socks_fnc(SocksRand-1);

		this.ColorShuffle_fnc(Socks,null,false,false);

		var ExtraRand = Math.floor(Math.random()*(2-1+1))+1;
		if(ExtraRand == 1)
		{
			Extra.visible = true;
			Extra_Outline.visible = true;
			this.ColorShuffle_fnc(Extra,null,false,false);
		}
		if(ExtraRand == 2)
		{
			Extra.visible = false;
			Extra_Outline.visible = false;
		}

		var Extra2Rand = Math.floor(Math.random()*(2-1+1))+1;
		if(Extra2Rand == 1)
		{
			Extra2.visible = true;
			Extra2_Outline.visible = true;
			this.ColorShuffle_fnc(Extra2,null,false,false);

			Hand.visible = false;
			Hand_Outline.visible = false;
			Hand2.visible = true;
			Hand_Outline2.visible = true;

			Extra5.visible = false;
			Extra5_Outline.visible = false;
			Extra7.visible = false;
			Extra7_Outline.visible = false;
			Extra8.visible = false;
			Extra8_Outline.visible = false;
			Extra9.visible = false;
			Extra9_Outline.visible = false;
		}
		if(Extra2Rand == 2)
		{
			Extra2.visible = false;
			Extra2_Outline.visible = false;
		}

		var Extra3Rand = Math.floor(Math.random()*(2-1+1))+1;
		if(Extra3Rand == 1)
		{
			Extra3.visible = true;
			Extra3_Outline.visible = true;
			this.ColorShuffle_fnc(Extra3,null,false,false);
		}
		if(Extra3Rand == 2)
		{
			Extra3.visible = false;
			Extra3_Outline.visible = false;
		}

		var Extra4Rand = Math.floor(Math.random()*(2-1+1))+1;
		if(Extra4Rand == 1)
		{
			Extra4.visible = true;
			Extra4_Outline.visible = true;
			this.ColorShuffle_fnc(Extra4,null,false,false);
		}
		if(Extra4Rand == 2)
		{
			Extra4.visible = false;
			Extra4_Outline.visible = false;
		}

		var Extra5Rand = Math.floor(Math.random()*(2-1+1))+1;
		if(Extra5Rand == 1)
		{
			Extra5.visible = true;
			Extra5_Outline.visible = true;
			this.ColorShuffle_fnc(Extra5,null,false,false);

			Hand.visible = false;
			Hand_Outline.visible = false;
			Hand2.visible = true;
			Hand_Outline2.visible = true;

			Extra2.visible = false;
			Extra2_Outline.visible = false;
			Extra7.visible = false;
			Extra7_Outline.visible = false;
			Extra8.visible = false;
			Extra8_Outline.visible = false;
			Extra9.visible = false;
			Extra9_Outline.visible = false;
		}
		if(Extra5Rand == 2)
		{
			Extra5.visible = false;
			Extra5_Outline.visible = false;
		}

		var Extra6Rand = Math.floor(Math.random()*(2-1+1))+1;
		if(Extra6Rand == 1)
		{
			Extra6.visible = true;
			Extra6_Outline.visible = true;
			this.ColorShuffle_fnc(Extra6,null,false,false);
		}
		if(Extra6Rand == 2)
		{
			Extra6.visible = false;
			Extra6_Outline.visible = false;
		}

		var Extra7Rand = Math.floor(Math.random()*(2-1+1))+1;
		if(Extra7Rand == 1)
		{
			Extra7.visible = true;
			Extra7_Outline.visible = true;
			this.ColorShuffle_fnc(Extra7,null,false,false);

			Hand.visible = false;
			Hand_Outline.visible = false;
			Hand2.visible = true;
			Hand_Outline2.visible = true;

			Extra5.visible = false;
			Extra5_Outline.visible = false;
			Extra2.visible = false;
			Extra2_Outline.visible = false;
			Extra8.visible = false;
			Extra8_Outline.visible = false;
			Extra9.visible = false;
			Extra9_Outline.visible = false;
		}
		if(Extra7Rand == 2)
		{
			Extra7.visible = false;
			Extra7_Outline.visible = false;
		}

		var Extra8Rand = Math.floor(Math.random()*(2-1+1))+1;
		if(Extra8Rand == 1)
		{
			Extra8.visible = true;
			Extra8_Outline.visible = true;
			this.ColorShuffle_fnc(Extra8,null,false,false);

			Hand.visible = false;
			Hand_Outline.visible = false;
			Hand2.visible = true;
			Hand_Outline2.visible = true;

			Extra5.visible = false;
			Extra5_Outline.visible = false;
			Extra7.visible = false;
			Extra7_Outline.visible = false;
			Extra2.visible = false;
			Extra2_Outline.visible = false;
			Extra9.visible = false;
			Extra9_Outline.visible = false;
		}
		if(Extra8Rand == 2)
		{
			Extra8.visible = false;
			Extra8_Outline.visible = false;
		}

		var Extra9Rand = Math.floor(Math.random()*(2-1+1))+1;
		if(Extra9Rand == 1)
		{
			Extra9.visible = true;
			Extra9_Outline.visible = true;
			this.ColorShuffle_fnc(Extra9,null,false,false);

			Hand.visible = false;
			Hand_Outline.visible = false;
			Hand2.visible = true;
			Hand_Outline2.visible = true;

			Extra5.visible = false;
			Extra5_Outline.visible = false;
			Extra7.visible = false;
			Extra7_Outline.visible = false;
			Extra8.visible = false;
			Extra8_Outline.visible = false;
			Extra2.visible = false;
			Extra2_Outline.visible = false;
		}
		if(Extra9Rand == 2)
		{
			Extra9.visible = false;
			Extra9_Outline.visible = false;
		}

		if(Extra2Rand != 1 && Extra5Rand != 1 && Extra7Rand != 1 && Extra8Rand != 1 && Extra9Rand != 1)
		{
			Hand.visible = true;
			Hand_Outline.visible = true;
			Hand2.visible = false;
			Hand_Outline2.visible = false;
		}

		var BGRand = Math.floor(Math.random()*(6-1+1))+1;
		this.BG_fnc(BGRand-1);

	},
	skinShuffle: function(skinShuffPage,SkinShuffColor)
	{
		if(skinShuffPage == 1)
		{
			Body.tint = BodyColor[SkinShuffColor];
			Head.tint = BodyColor[SkinShuffColor];
			Hand.tint = BodyColor[SkinShuffColor];
			Hand2.tint = BodyColor[SkinShuffColor];
		}		
		if(skinShuffPage == 2)
		{
			Body.tint = BodyColor2[SkinShuffColor];
			Head.tint = BodyColor2[SkinShuffColor];
			Hand.tint = BodyColor2[SkinShuffColor];
			Hand2.tint = BodyColor2[SkinShuffColor];
		}
	},
	ColorShuffle_fnc: function(ItemObj,ItemObj2,doubleTint,colorNumBool)
	{
		var ColorRand = Math.floor(Math.random()*(80-1+1))+1;
				
		if(ColorRand == 1)
		{
			ItemObj.tint = Colors[0];
			if(doubleTint){ItemObj2.tint = Colors[0];}
			if(colorNumBool){hairColor = 0;}
		}
		if(ColorRand == 2)
		{
			ItemObj.tint = Colors[1];
			if(doubleTint){ItemObj2.tint = Colors[1];}
			if(colorNumBool){hairColor = 1;}
		}
		if(ColorRand == 3)
		{
			ItemObj.tint = Colors[2];
			if(doubleTint){ItemObj2.tint = Colors[2];}
			if(colorNumBool){hairColor = 2;}
		}
		if(ColorRand == 4)
		{
			ItemObj.tint = Colors[3];
			if(doubleTint){ItemObj2.tint = Colors[3];}
			if(colorNumBool){hairColor = 3;}
		}
		if(ColorRand == 5)
		{
			ItemObj.tint = Colors[4];
			if(doubleTint){ItemObj2.tint = Colors[4];}
			if(colorNumBool){hairColor = 4;}
		}
		if(ColorRand == 6)
		{
			ItemObj.tint = Colors[5];
			if(doubleTint){ItemObj2.tint = Colors[5];}
			if(colorNumBool){hairColor = 5;}
		}
		if(ColorRand == 7)
		{
			ItemObj.tint = Colors[6];
			if(doubleTint){ItemObj2.tint = Colors[6];}
			if(colorNumBool){hairColor = 6;}
		}
		if(ColorRand == 8)
		{
			ItemObj.tint = Colors[7];
			if(doubleTint){ItemObj2.tint = Colors[7];}
			if(colorNumBool){hairColor = 7;}
		}
		if(ColorRand == 9)
		{
			ItemObj.tint = Colors[8];
			if(doubleTint){ItemObj2.tint = Colors[8];}
			if(colorNumBool){hairColor = 8;}
		}
		if(ColorRand == 10)
		{
			ItemObj.tint = Colors[9];
			if(doubleTint){ItemObj2.tint = Colors[9];}
			if(colorNumBool){hairColor = 9;}
		}
		if(ColorRand == 11)
		{
			ItemObj.tint = Colors[10];
			if(doubleTint){ItemObj2.tint = Colors[10];}
			if(colorNumBool){hairColor = 10;}
		}
		if(ColorRand == 12)
		{
			ItemObj.tint = Colors[11];
			if(doubleTint){ItemObj2.tint = Colors[11];}
			if(colorNumBool){hairColor = 11;}
		}
		if(ColorRand == 13)
		{
			ItemObj.tint = Colors[12];
			if(doubleTint){ItemObj2.tint = Colors[12];}
			if(colorNumBool){hairColor = 12;}
		}
		if(ColorRand == 14)
		{
			ItemObj.tint = Colors[13];
			if(doubleTint){ItemObj2.tint = Colors[13];}
			if(colorNumBool){hairColor = 13;}
		}
		if(ColorRand == 15)
		{
			ItemObj.tint = Colors[14];
			if(doubleTint){ItemObj2.tint = Colors[14];}
			if(colorNumBool){hairColor = 14;}
		}
		if(ColorRand == 16)
		{
			ItemObj.tint = Colors[15];
			if(doubleTint){ItemObj2.tint = Colors[15];}
			if(colorNumBool){hairColor = 15;}
		}
		if(ColorRand == 17)
		{
			ItemObj.tint = Colors[16];
			if(doubleTint){ItemObj2.tint = Colors[16];}
			if(colorNumBool){hairColor = 16;}
		}
		if(ColorRand == 18)
		{
			ItemObj.tint = Colors[17];
			if(doubleTint){ItemObj2.tint = Colors[17];}
			if(colorNumBool){hairColor = 17;}
		}
		if(ColorRand == 19)
		{
			ItemObj.tint = Colors[18];
			if(doubleTint){ItemObj2.tint = Colors[18];}
			if(colorNumBool){hairColor = 18;}
		}
		if(ColorRand == 20)
		{
			ItemObj.tint = Colors[19];
			if(doubleTint){ItemObj2.tint = Colors[19];}
			if(colorNumBool){hairColor = 19;}
		}
		if(ColorRand == 21)
		{
			ItemObj.tint = Colors[20];
			if(doubleTint){ItemObj2.tint = Colors[20];}
			if(colorNumBool){hairColor = 20;}
		}
		if(ColorRand == 22)
		{
			ItemObj.tint = Colors[21];
			if(doubleTint){ItemObj2.tint = Colors[21];}
			if(colorNumBool){hairColor = 21;}
		}
		if(ColorRand == 23)
		{
			ItemObj.tint = Colors[22];
			if(doubleTint){ItemObj2.tint = Colors[22];}
			if(colorNumBool){hairColor = 22;}
		}
		if(ColorRand == 24)
		{
			ItemObj.tint = Colors[23];
			if(doubleTint){ItemObj2.tint = Colors[23];}
			if(colorNumBool){hairColor = 23;}
		}
		if(ColorRand == 25)
		{
			ItemObj.tint = Colors[24];
			if(doubleTint){ItemObj2.tint = Colors[24];}
			if(colorNumBool){hairColor = 24;}
		}
		if(ColorRand == 26)
		{
			ItemObj.tint = Colors[25];
			if(doubleTint){ItemObj2.tint = Colors[25];}
			if(colorNumBool){hairColor = 25;}
		}
		if(ColorRand == 27)
		{
			ItemObj.tint = Colors[26];
			if(doubleTint){ItemObj2.tint = Colors[26];}
			if(colorNumBool){hairColor = 26;}
		}
		if(ColorRand == 28)
		{
			ItemObj.tint = Colors[27];
			if(doubleTint){ItemObj2.tint = Colors[27];}
			if(colorNumBool){hairColor = 27;}
		}
		if(ColorRand == 29)
		{
			ItemObj.tint = Colors[28];
			if(doubleTint){ItemObj2.tint = Colors[28];}
			if(colorNumBool){hairColor = 28;}
		}
		if(ColorRand == 30)
		{
			ItemObj.tint = Colors[29];
			if(doubleTint){ItemObj2.tint = Colors[29];}
			if(colorNumBool){hairColor = 29;}
		}
		if(ColorRand == 31)
		{
			ItemObj.tint = Colors[30];
			if(doubleTint){ItemObj2.tint = Colors[30];}
			if(colorNumBool){hairColor = 30;}
		}
		if(ColorRand == 32)
		{
			ItemObj.tint = Colors[31];
			if(doubleTint){ItemObj2.tint = Colors[31];}
			if(colorNumBool){hairColor = 31;}
		}
		if(ColorRand == 33)
		{
			ItemObj.tint = Colors[32];
			if(doubleTint){ItemObj2.tint = Colors[32];}
			if(colorNumBool){hairColor = 32;}
		}
		if(ColorRand == 34)
		{
			ItemObj.tint = Colors[33];
			if(doubleTint){ItemObj2.tint = Colors[33];}
			if(colorNumBool){hairColor = 33;}
		}
		if(ColorRand == 35)
		{
			ItemObj.tint = Colors[34];
			if(doubleTint){ItemObj2.tint = Colors[34];}
			if(colorNumBool){hairColor = 34;}
		}
		if(ColorRand == 36)
		{
			ItemObj.tint = Colors[35];
			if(doubleTint){ItemObj2.tint = Colors[35];}
			if(colorNumBool){hairColor = 35;}
		}
		if(ColorRand == 37)
		{
			ItemObj.tint = Colors[36];
			if(doubleTint){ItemObj2.tint = Colors[36];}
			if(colorNumBool){hairColor = 36;}
		}
		if(ColorRand == 38)
		{
			ItemObj.tint = Colors[37];
			if(doubleTint){ItemObj2.tint = Colors[37];}
			if(colorNumBool){hairColor = 37;}
		}
		if(ColorRand == 39)
		{
			ItemObj.tint = Colors[38];
			if(doubleTint){ItemObj2.tint = Colors[38];}
			if(colorNumBool){hairColor = 38;}
		}
		if(ColorRand == 40)
		{
			ItemObj.tint = Colors[39];
			if(doubleTint){ItemObj2.tint = Colors[39];}
			if(colorNumBool){hairColor = 39;}
		}
		if(ColorRand == 41)
		{
			ItemObj.tint = Colors2[0];
			if(doubleTint){ItemObj2.tint = Colors2[0];}
			if(colorNumBool){hairColor = 40;}
		}
		if(ColorRand == 42)
		{
			ItemObj.tint = Colors2[1];
			if(doubleTint){ItemObj2.tint = Colors2[1];}
			if(colorNumBool){hairColor = 41;}
		}
		if(ColorRand == 43)
		{
			ItemObj.tint = Colors2[2];
			if(doubleTint){ItemObj2.tint = Colors2[2];}
			if(colorNumBool){hairColor = 42;}
		}
		if(ColorRand == 44)
		{
			ItemObj.tint = Colors2[3];
			if(doubleTint){ItemObj2.tint = Colors2[3];}
			if(colorNumBool){hairColor = 43;}
		}
		if(ColorRand == 45)
		{
			ItemObj.tint = Colors2[4];
			if(doubleTint){ItemObj2.tint = Colors2[4];}
			if(colorNumBool){hairColor = 44;}
		}
		if(ColorRand == 46)
		{
			ItemObj.tint = Colors2[5];
			if(doubleTint){ItemObj2.tint = Colors2[5];}
			if(colorNumBool){hairColor = 45;}
		}
		if(ColorRand == 47)
		{
			ItemObj.tint = Colors2[6];
			if(doubleTint){ItemObj2.tint = Colors2[6];}
			if(colorNumBool){hairColor = 46;}
		}
		if(ColorRand == 48)
		{
			ItemObj.tint = Colors2[7];
			if(doubleTint){ItemObj2.tint = Colors2[7];}
			if(colorNumBool){hairColor = 47;}
		}
		if(ColorRand == 49)
		{
			ItemObj.tint = Colors2[8];
			if(doubleTint){ItemObj2.tint = Colors2[8];}
			if(colorNumBool){hairColor = 48;}
		}
		if(ColorRand == 50)
		{
			ItemObj.tint = Colors2[9];
			if(doubleTint){ItemObj2.tint = Colors2[9];}
			if(colorNumBool){hairColor = 49;}
		}
		if(ColorRand == 51)
		{
			ItemObj.tint = Colors2[10];
			if(doubleTint){ItemObj2.tint = Colors2[10];}
			if(colorNumBool){hairColor = 50;}
		}
		if(ColorRand == 52)
		{
			ItemObj.tint = Colors2[11];
			if(doubleTint){ItemObj2.tint = Colors2[11];}
			if(colorNumBool){hairColor = 51;}
		}
		if(ColorRand == 53)
		{
			ItemObj.tint = Colors2[12];
			if(doubleTint){ItemObj2.tint = Colors2[12];}
			if(colorNumBool){hairColor = 52;}
		}
		if(ColorRand == 54)
		{
			ItemObj.tint = Colors2[13];
			if(doubleTint){ItemObj2.tint = Colors2[13];}
			if(colorNumBool){hairColor = 53;}
		}
		if(ColorRand == 55)
		{
			ItemObj.tint = Colors2[14];
			if(doubleTint){ItemObj2.tint = Colors2[14];}
			if(colorNumBool){hairColor = 54;}
		}
		if(ColorRand == 56)
		{
			ItemObj.tint = Colors2[15];
			if(doubleTint){ItemObj2.tint = Colors2[15];}
			if(colorNumBool){hairColor = 55;}
		}
		if(ColorRand == 57)
		{
			ItemObj.tint = Colors2[16];
			if(doubleTint){ItemObj2.tint = Colors2[16];}
			if(colorNumBool){hairColor = 56;}
		}
		if(ColorRand == 58)
		{
			ItemObj.tint = Colors2[17];
			if(doubleTint){ItemObj2.tint = Colors2[17];}
			if(colorNumBool){hairColor = 57;}
		}
		if(ColorRand == 59)
		{
			ItemObj.tint = Colors2[18];
			if(doubleTint){ItemObj2.tint = Colors2[18];}
			if(colorNumBool){hairColor = 58;}
		}
		if(ColorRand == 60)
		{
			ItemObj.tint = Colors2[19];
			if(doubleTint){ItemObj2.tint = Colors2[19];}
			if(colorNumBool){hairColor = 59;}
		}
		if(ColorRand == 61)
		{
			ItemObj.tint = Colors2[20];
			if(doubleTint){ItemObj2.tint = Colors2[20];}
			if(colorNumBool){hairColor = 60;}
		}
		if(ColorRand == 62)
		{
			ItemObj.tint = Colors2[21];
			if(doubleTint){ItemObj2.tint = Colors2[21];}
			if(colorNumBool){hairColor = 61;}
		}
		if(ColorRand == 63)
		{
			ItemObj.tint = Colors2[22];
			if(doubleTint){ItemObj2.tint = Colors2[22];}
			if(colorNumBool){hairColor = 62;}
		}
		if(ColorRand == 64)
		{
			ItemObj.tint = Colors2[23];
			if(doubleTint){ItemObj2.tint = Colors2[23];}
			if(colorNumBool){hairColor = 63;}
		}
		if(ColorRand == 65)
		{
			ItemObj.tint = Colors2[24];
			if(doubleTint){ItemObj2.tint = Colors2[24];}
			if(colorNumBool){hairColor = 64;}
		}
		if(ColorRand == 66)
		{
			ItemObj.tint = Colors2[25];
			if(doubleTint){ItemObj2.tint = Colors2[25];}
			if(colorNumBool){hairColor = 65;}
		}
		if(ColorRand == 67)
		{
			ItemObj.tint = Colors2[26];
			if(doubleTint){ItemObj2.tint = Colors2[26];}
			if(colorNumBool){hairColor = 66;}
		}
		if(ColorRand == 68)
		{
			ItemObj.tint = Colors2[27];
			if(doubleTint){ItemObj2.tint = Colors2[27];}
			if(colorNumBool){hairColor = 67;}
		}
		if(ColorRand == 69)
		{
			ItemObj.tint = Colors2[28];
			if(doubleTint){ItemObj2.tint = Colors2[28];}
			if(colorNumBool){hairColor = 68;}
		}
		if(ColorRand == 70)
		{
			ItemObj.tint = Colors2[29];
			if(doubleTint){ItemObj2.tint = Colors2[29];}
			if(colorNumBool){hairColor = 69;}
		}
		if(ColorRand == 71)
		{
			ItemObj.tint = Colors2[30];
			if(doubleTint){ItemObj2.tint = Colors2[30];}
			if(colorNumBool){hairColor = 70;}
		}
		if(ColorRand == 72)
		{
			ItemObj.tint = Colors2[31];
			if(doubleTint){ItemObj2.tint = Colors2[31];}
			if(colorNumBool){hairColor = 71;}
		}
		if(ColorRand == 73)
		{
			ItemObj.tint = Colors2[32];
			if(doubleTint){ItemObj2.tint = Colors2[32];}
			if(colorNumBool){hairColor = 72;}
		}
		if(ColorRand == 74)
		{
			ItemObj.tint = Colors2[33];
			if(doubleTint){ItemObj2.tint = Colors2[33];}
			if(colorNumBool){hairColor = 73;}
		}
		if(ColorRand == 75)
		{
			ItemObj.tint = Colors2[34];
			if(doubleTint){ItemObj2.tint = Colors2[34];}
			if(colorNumBool){hairColor = 74;}
		}
		if(ColorRand == 76)
		{
			ItemObj.tint = Colors2[35];
			if(doubleTint){ItemObj2.tint = Colors2[35];}
			if(colorNumBool){hairColor = 75;}
		}
		if(ColorRand == 77)
		{
			ItemObj.tint = Colors2[36];
			if(doubleTint){ItemObj2.tint = Colors2[36];}
			if(colorNumBool){hairColor = 76;}
		}
		if(ColorRand == 78)
		{
			ItemObj.tint = Colors2[37];
			if(doubleTint){ItemObj2.tint = Colors2[37];}
			if(colorNumBool){hairColor = 77;}
		}
		if(ColorRand == 79)
		{
			ItemObj.tint = Colors2[38];
			if(doubleTint){ItemObj2.tint = Colors2[38];}
			if(colorNumBool){hairColor = 78;}
		}
		if(ColorRand == 80)
		{
			ItemObj.tint = Colors2[39];
			if(doubleTint){ItemObj2.tint = Colors2[39];}
			if(colorNumBool){hairColor = 79;}
		}
		//console.log(colorNum)
	},
	update: function()
	{
		
	},
}