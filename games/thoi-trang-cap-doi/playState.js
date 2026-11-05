var playState = new Kiwi.State('PlayState');
playState.create = function (boySkin, boyAccessory, boyEyebrows, boyLips, boyEye, boyEyeColour, boyBottom, boyHair, boyTop, girlAccessory, girlBottom, girlDress, girlEyebrows, girlEye, girlHair, girlLips, girlShoes, girlSkin, girlSocks, girlEyeColour, girlTop, bgNum) {

    Kiwi.State.prototype.create.call(this);
	
	console.log("PLAYSTATE CREATE");
	//console.log("DATA: "+this.data.boyJSON.data);
	//console.log(this.textures.boy.cells[0].orgX);
	//this.boyAccessory1 = new Kiwi.GameObjects.Sprite(this, this.textures.boy, this.textures.boy.cells[0].orgX, this.textures.boy.cells[0].orgY);
    //console.log(this.textures.boy.cells[0].orgX);
    //console.log('create:', boySkin, boyAccessory, boyEyebrows, boyLips, boyEye, boyEyeColour, boyBottom, boyHair, boyTop, girlAccessory, girlBottom, girlDress, girlEyebrows, girlEye, girlHair, girlLips, girlShoes, girlSkin, girlSocks, girlEyeColour, girlTop, bgNum);
    this.bg1 = new Kiwi.GameObjects.StaticImage(this, this.textures.bg1, 0, 0);
    this.addChild(this.bg1);
    this.bg2 = new Kiwi.GameObjects.StaticImage(this, this.textures.bg2, 0, 0);
    this.addChild(this.bg2);
    if (bgNum == 1) this.bg2.visible = false;
    this.showTitle = new Kiwi.GameObjects.Sprite(this, this.textures.showTitle, 0, 0, true);
    this.addChild(this.showTitle);

    //girl
    this.girlAccessory = girlAccessory;
    this.girlBottom = girlBottom;
    this.girlDress = girlDress;
    this.girlEyebrows = girlEyebrows;
    this.girlEye = girlEye;
    this.girlHair = girlHair;
    this.girlLips = girlLips;
    this.girlShoes = girlShoes;
    this.girlSkin = girlSkin;
    this.girlSocks = girlSocks;
    this.girlEyeColour = girlEyeColour;
    this.girlTop = girlTop;

    //vars
    this.boySkin = boySkin;
    this.boyAccessory = boyAccessory;
    this.boyEyebrows = boyEyebrows;
    this.boyLips = boyLips;
    this.boyEye = boyEye;
    this.boyEyeColour = boyEyeColour;
    this.boyBottom = boyBottom;
    this.boyHair = boyHair;
    this.boyTop = boyTop;

    this.col = ['aqua', 'blue', 'green', 'honey', 'pink', 'tinto'];

    console.log('Set girl');
    this.setGirl();
    console.log('Set boy');
    this.setBoy();

    console.log('Set girl box');
    this.setGirlBox();
    console.log('Set boy box');
    this.setBoyBox();
    console.log('Set UI');
    this.setUI();

    //vars
    //which tab is currently selected
    this.sideButton1Var = 0;
    this.sideButton2Var = 0;
    //which sub button is selected
    this.speech1Var = 0;
    this.speech2Var = 0;

    this.perc = 50;
	
	this.clickSnd = new Kiwi.Sound.Audio(this.game, 'clickSnd', 1, false);
	
	/*this.ggg = new Kiwi.GameObjects.Sprite(this, this.textures.ggg, 155, 50);
	this.addChild(this.ggg);
	this.ggg.transform.scaleX = 0.1;
	this.ggg.transform.scaleY = 0.1;
	this.ggg.input.onUp.add(this.addUp, this);*/
    
}

playState.addUp = function () {
    window.open("http://game.com");
}

playState.setText = function () {
    if (this.text1 != null && this.text1 != undefined && this.text1.exists) {
        console.log('reset text', this.text1);
        this.text1.maxWidth = 250;
        console.log('r')
        this.text1.alphabeticalCells['#'] = 65;
        console.log('r')
        this.text1.scaleX = 1;
        console.log('r')
        this.text1.scaleY = 1;
        console.log('r')
		this.text1.alpha = 0.8;

		console.log('r')
		num = this.calculatePercentage();
		console.log('r')
		this.text1.text = num+'#';
	}
}

playState.calculatePercentage = function () {
    console.log('rcalc %');
    var num = 60;
    if(this.girlAccessory != this.boyAccessory) num += 5;
    if(this.girlBottom != this.boyBottom) num += 5;
    if(this.girlEyebrows != this.boyEyebrows) num += 5;
    if(this.girlEye != this.boyEye) num += 5;
    if(this.girlHair != this.boyHair) num += 5;
    if(this.girlLips != this.boyLips) num += 5;
    if(this.girlSkin != this.boySkin) num += 5;
    if(this.girlEyeColour != this.boyEyeColour) num += 5;
    if (this.girlTop != this.boyTop) num += 5;
    if (num > 100) num = 100;
    console.log('rcalc %');
    //if (this.scoreTF != undefined) this.scoreTF.text = num + '%';
	return num;
}

playState.setGirl = function () {
    //GIRL
    this.girlAccessoryCount = 15;
    this.girlBottomCount = 10;
    this.girlDressCount = 10;
    this.girlEyebrowsCount = 5;
    this.girlEyeCount = 5;
    this.girlEyeColourCount = 6;
    this.girlHairCount = 20;
    this.girlLipsCount = 5;
    this.girlShoesCount = 11;
    this.girlSkinCount = 4;
    this.girlSocksCount = 13;
    this.girlTopCount = 15;

    this.girlUndies = new Kiwi.GameObjects.Sprite(this, this.textures.girl1, this.textures.girl1.cells[15].orgX, this.textures.girl1.cells[15].orgY);
    this.girlUndies.animation.switchTo(15);
    this.addChild(this.girlUndies);
    console.log("SET GURL");

    this.setPiece('girl', this.girlSkin, 'Skin');
    this.setPiece('girl', this.girlEyebrows, 'Eyebrows');
    this.setPiece('girl', this.girlLips, 'Lips');
    this.setEyes('girl', this.girlEye, this.girlEyeColour);
    this.setPiece('girl', this.girlSocks, 'Socks');
    this.setPiece('girl', this.girlBottom, 'Bottom');
    this.setPiece('girl', this.girlTop, 'Top');
    this.setPiece('girl', this.girlShoes, 'Shoes');
    this.setPiece('girl', this.girlDress, 'Dress');
    this.setPiece('girl', this.girlHair, 'Hair');
    this.setPiece('girl', this.girlAccessory, 'Accessory');
    console.log("SET GURL");
}

playState.setBoy = function () {
    //BOY
    this.boySkinCount = 4;
    this.boyAccessoryCount = 4;
    this.boyEyebrowsCount = 5;
    this.boyLipsCount = 5;
    this.boyEyeCount = 5;
    this.boyEyeColourCount = 6;
    this.boyBottomCount = 7;
    this.boyHairCount = 10;
    this.boyTopCount = 15;

    this.boyUndies = new Kiwi.GameObjects.Sprite(this, this.textures.boy, this.textures.boy.cells[11].orgX, this.textures.boy.cells[11].orgY);
    this.boyUndies.animation.switchTo(11);
    this.addChild(this.boyUndies);

    this.setPiece('boy', this.boySkin, 'Skin');
    this.setPiece('boy', this.boyEyebrows, 'Eyebrows');
    this.setPiece('boy', this.boyLips, 'Lips');
    this.setEyes('boy', this.boyEye, this.boyEyeColour);
    this.setPiece('boy', this.boyBottom, 'Bottom');
    this.setPiece('boy', this.boyTop, 'Top');
    this.setPiece('boy', this.boyHair, 'Hair');
    this.setPiece('boy', this.boyAccessory, 'Accessory');
}

playState.setUI = function () {

    this.background_1 = new Kiwi.GameObjects.Sprite(this, this.textures.button_background_1, 783, 647, true);
    this.addChild(this.background_1);
    this.background_1.input.onUp.add(this.changeBG1, this);
    
    this.background_2 = new Kiwi.GameObjects.Sprite(this, this.textures.button_background_2, 853, 647, true);
    this.addChild(this.background_2);
    this.background_2.input.onUp.add(this.changeBG2, this);

    this.show = new Kiwi.GameObjects.Sprite(this, this.textures.button_show, 801, 587, true);
    this.addChild(this.show);
    this.show.input.onUp.add(this.showImage, this);

    this.homeBtn = new Kiwi.GameObjects.Sprite(this, this.textures.home, 68, 654, true);
    this.addChild(this.homeBtn);
    this.home_on = new Kiwi.GameObjects.Sprite(this, this.textures.home_on, 68, 654);
    this.addChild(this.home_on);
    this.home_on.visible = false;
    this.homeBtn.input.onDown.add(this.homeDown, this);
    this.homeBtn.input.onUp.add(this.goHome, this);

    this.randomBtn = new Kiwi.GameObjects.Sprite(this, this.textures.random, 119, 654, true);
    this.addChild(this.randomBtn);
    this.random_on = new Kiwi.GameObjects.Sprite(this, this.textures.random_on, 119, 654);
    this.addChild(this.random_on);
    this.random_on.visible = false;
    this.randomBtn.input.onDown.add(this.randomDown, this);
    this.randomBtn.input.onUp.add(this.randomChar, this);

    //reset
    this.resetBtn = new Kiwi.GameObjects.Sprite(this, this.textures.reset, 169, 651, true);
    this.addChild(this.resetBtn);
    this.reset_on = new Kiwi.GameObjects.Sprite(this, this.textures.reset_on, 169, 651);
    this.addChild(this.reset_on);
    this.reset_on.visible = false;
    this.resetBtn.input.onDown.add(this.resetDown, this);
    this.resetBtn.input.onUp.add(this.resetChar, this);

    this.musicOn = new Kiwi.GameObjects.Sprite(this, this.textures.sound_on, 722, 662, true);
    this.addChild(this.musicOn);
    this.musicOff = new Kiwi.GameObjects.Sprite(this, this.textures.sound_off, 722, 662);
    this.addChild(this.musicOff);
    if (this.game.audio.mute) {
        this.musicOn.visible = false;
    } else {
        this.musicOff.visible = false;
    }
	this.musicOn.input.onUp.add(this.togglePlaySound, this);
   /* this.musicOn.input.onUp.add(this.musicUp, this);*/

    //boy side buttons
    this.boySideBtn1 = new Kiwi.GameObjects.Sprite(this, this.textures.boyFaceBtn, 869, 175, true);
    this.addChild(this.boySideBtn1);
    this.boySideBtn1.input.onUp.add(this.pressBoy1, this);

    this.boySideBtn2 = new Kiwi.GameObjects.Sprite(this, this.textures.boyHairBtn, 869, 275, true);
    this.addChild(this.boySideBtn2);
    this.boySideBtn2.input.onUp.add(this.pressBoy2, this);

    this.boySideBtn3 = new Kiwi.GameObjects.Sprite(this, this.textures.boyTopBtn, 869, 375, true);
    this.addChild(this.boySideBtn3);
    this.boySideBtn3.input.onUp.add(this.pressBoy3, this);

    this.boySideBtn4 = new Kiwi.GameObjects.Sprite(this, this.textures.boyAccessoryBtn, 869, 475, true);
    this.addChild(this.boySideBtn4);
    this.boySideBtn4.input.onUp.add(this.pressBoy4, this);

    //girl
    this.girlSideBtn1 = new Kiwi.GameObjects.Sprite(this, this.textures.girlFaceBtn, -29, 175, true);
    this.addChild(this.girlSideBtn1);
    this.girlSideBtn1.input.onUp.add(this.pressGirl1, this);

    this.girlSideBtn2 = new Kiwi.GameObjects.Sprite(this, this.textures.girlHairBtn, -29, 275, true);
    this.addChild(this.girlSideBtn2);
    this.girlSideBtn2.input.onUp.add(this.pressGirl2, this);

    this.girlSideBtn3 = new Kiwi.GameObjects.Sprite(this, this.textures.girlTopBtn, -29, 375, true);
    this.addChild(this.girlSideBtn3);
    this.girlSideBtn3.input.onUp.add(this.pressGirl3, this);

    this.girlSideBtn4 = new Kiwi.GameObjects.Sprite(this, this.textures.girlShoesBtn, -29, 475, true);
    this.addChild(this.girlSideBtn4);
    this.girlSideBtn4.input.onUp.add(this.pressGirl4, this);

    this.girlSideBtn5 = new Kiwi.GameObjects.Sprite(this, this.textures.girlAccessoryBtn, -29, 575, true);
    this.addChild(this.girlSideBtn5);
    this.girlSideBtn5.input.onUp.add(this.pressGirl5, this);
	
	
	this.text1 = new Kiwi.Plugins.GameObjects.BitmapText(this, this.textures.textAtlas, "60#", 430,250);
	this.text1.alphabeticalCells['#'] = 63; //Change to % Number
	console.log(this.text1.text);
	this.addChild(this.text1);
	
    this.setText();
	
}

//BOY BOX
playState.setBoyBox = function () {
    this.boy_box = new Kiwi.GameObjects.Sprite(this, this.textures.boy_box, 0, 0);
    this.addChild(this.boy_box);
    this.boy_box.visible = false;

    this.boyExit = new Kiwi.GameObjects.Sprite(this, this.textures.exit_box, 754, 19);
    this.addChild(this.boyExit);
    this.boyExit.input.onUp.add(this.pressBoyExit, this);
    this.boyExit.visible = false;

    this.boyArrowLeft = new Kiwi.GameObjects.Sprite(this, this.textures.arrow_left, 783, 84);
    this.addChild(this.boyArrowLeft);
    this.boyArrowLeft.input.onUp.add(this.pressBoyArrowLeft, this);
    this.boyArrowLeft.visible = false;

    this.boyArrowRight = new Kiwi.GameObjects.Sprite(this, this.textures.arrow_right, 917, 84);
    this.addChild(this.boyArrowRight);
    this.boyArrowRight.input.onUp.add(this.pressBoyArrowRight, this);
    this.boyArrowRight.visible = false;

    //box 1
    //skin buttons
   /* for (var i = 1; i <= 4; i++) {
        this['boySkinColour' + i] = new Kiwi.GameObjects.Sprite(this, this.textures['skinColour' + i], 805, 11 + i * 30);
        this.addChild(this['boySkinColour' + i]);
        this['boySkinColour' + i].input.onUp.add(this['pressBoySkinColour' + i], this);
        this['boySkinColour' + i].visible = false;
    }*/

    this.boySkinIcon = new Kiwi.GameObjects.Sprite(this, this.textures.boySkinIcon, 812, 54);
    this.addChild(this.boySkinIcon);
	this.boySkinIcon.input.onUp.add(this.pressBoySkinIcon, this);
    this.boySkinIcon.visible = false;
	this.boySkinIcon.boxSelected = false;

    this.boyEyeIcon = new Kiwi.GameObjects.Sprite(this, this.textures.boyEyeIcon, 822, 61);
    this.addChild(this.boyEyeIcon);
    this.boyEyeIcon.input.onUp.add(this.pressBoyEyeIcon, this);
    this.boyEyeIcon.visible = false;
    this.boyEyeIcon.boxSelected = false;

    //eye colour
    this.boyEyeColourIcon = new Kiwi.GameObjects.Sprite(this, this.textures.boyEyeColourIcon, 822, 49);
    this.addChild(this.boyEyeColourIcon);
    this.boyEyeColourIcon.visible = false;
    this.boyEyeColourIcon.input.onUp.add(this.pressBoyEyeColourIcon, this);
    this.boyEyeColourIcon.boxSelected = false;
    /*for (var i = 1; i <= 3; i++) {
        this['boyEyeColour' + i] = new Kiwi.GameObjects.Sprite(this, this.textures['colour' + i], 777 + 32 * i, 113);
        this.addChild(this['boyEyeColour' + i]);
        this['boyEyeColour' + i].input.onUp.add(this['pressBoyEyeColour' + i], this);
        this['boyEyeColour' + i].visible = false;

        this['boyEyeColour' + (i + 3)] = new Kiwi.GameObjects.Sprite(this, this.textures['colour' + (i + 3)], 777 + 32 * i, 138);
        this.addChild(this['boyEyeColour' + (i + 3)]);
        this['boyEyeColour' + (i + 3)].input.onUp.add(this['pressBoyEyeColour' + (i + 3)], this);
        this['boyEyeColour' + (i + 3)].visible = false;
    }*/

    //eyebrows
    this.boyEyebrowsIcon = new Kiwi.GameObjects.Sprite(this, this.textures.boyEyebrowIcon, 822, 61);
    this.addChild(this.boyEyebrowsIcon);
    this.boyEyebrowsIcon.input.onUp.add(this.pressBoyEyebrowsIcon, this);
    this.boyEyebrowsIcon.visible = false;
    this.boyEyebrowsIcon.boxSelected = false;

    //lips
    this.boyLipsIcon = new Kiwi.GameObjects.Sprite(this, this.textures.boyLipsIcon, 822, 61);
    this.addChild(this.boyLipsIcon);
    this.boyLipsIcon.input.onUp.add(this.pressBoyLipsIcon, this);
    this.boyLipsIcon.visible = false;
    this.boyLipsIcon.boxSelected = false;

    //box 2
    this.boyHairIcon = new Kiwi.GameObjects.Sprite(this, this.textures.boyHairIcon, 809, 47);
    this.addChild(this.boyHairIcon);
    this.boyHairIcon.input.onUp.add(this.pressBoyHairIcon, this);
    this.boyHairIcon.visible = false;

    //box 3
    //girlTopIcon, girlDressIcon, girlBottomIcon
    this.boyTopIcon = new Kiwi.GameObjects.Sprite(this, this.textures.boyTopIcon, 800, 47);
    this.addChild(this.boyTopIcon);
    this.boyTopIcon.input.onUp.add(this.pressBoyTopIcon, this);
    this.boyTopIcon.visible = false;

    this.boyBottomIcon = new Kiwi.GameObjects.Sprite(this, this.textures.boyBottomIcon, 809, 47);
    this.addChild(this.boyBottomIcon);
    this.boyBottomIcon.input.onUp.add(this.pressBoyBottomIcon, this);
    this.boyBottomIcon.visible = false;

    //box 4
    this.boyAccessoryIcon = new Kiwi.GameObjects.Sprite(this, this.textures.boyAccessoryIcon, 809, 47);
    this.addChild(this.boyAccessoryIcon);
    this.boyAccessoryIcon.input.onUp.add(this.pressBoyAccessoryIcon, this);
    this.boyAccessoryIcon.visible = false;
}
//boy box 1
/*playState.pressBoySkinColour1 = function () {
    if (this.boySkinColour1.visible) this.setPiece('boy', 1, 'Skin');
	this.clickSnd.play();
}
playState.pressBoySkinColour2 = function () {
    if (this.boySkinColour2.visible) this.setPiece('boy', 2, 'Skin');
	this.clickSnd.play();
}
playState.pressBoySkinColour3 = function () {
    if (this.boySkinColour3.visible) this.setPiece('boy', 3, 'Skin');
	this.clickSnd.play();
}
playState.pressBoySkinColour4 = function () {
    if (this.boySkinColour4.visible) this.setPiece('boy', 4, 'Skin');
	this.clickSnd.play();
}*/

playState.pressBoySkinIcon = function () {
	if (this.boySkinIcon.boxSelected) {
	    var num = this.boySkin + 1;
        console.log('press skin:',num,this.boySkinCount)
        if (num > this.boySkinCount) num = 1;
        this.setPiece('boy', num, 'Skin');
        //this.setBoxButton('Boy', 'Skin');
    }
	this.clickSnd.play();
}

playState.pressBoyEyeIcon = function () {
    if (this.boyEyeIcon.boxSelected) {
        var num = this.boyEye + 1;
        if (num > this.boyEyeCount) num = 1;
        this.setEyes('boy', num, this.boyEyeColour);
        this.setBoxButton('Boy', 'Eye');
    }
	this.clickSnd.play();
}

//NEW BUTTON STUFF!
playState.setBoxButton = function (char, type) {
    var lower = 'girl';
    if (char == 'Boy') lower = 'boy';

    this.removeBoxButton(lower);

    var num = this[lower + '' + type];
    
    var iconX = 0;
    var iconY = 0;
    var iconScale = 1;
	console.log(num);
    if (lower == 'boy') {
        iconX = 140;
        iconY = -80;
        switch (type) {
			case 'Skin':
				iconScale = 0.2;
				break;
            case 'Eyebrows':
                iconY = -60;
                break;
            case 'Lips':
                iconY = -110;
                break;
            case 'Hair':
                iconScale = 0.5;
                iconX = 520;
                iconY = 20;
                break;
            case 'Top':
                iconScale = 0.4;
                iconX = 590;
                iconY = -50;
                break;
            case 'Bottom':
                iconScale = 0.4;
                iconX = 610;
                iconY = -140;
                break;
            case 'Accessory':
                iconScale = 0.8;
                iconX = 300;
                iconY = -40;
                switch (num) {
                    case 1:
                        iconX = 310;
                        iconY = -50;
                        break;
					case 2:
                        iconX = 300;
                        iconY = -80;
                        break;
                    case 3:
                        iconY = -90;
                        break;
                    case 4:
                        iconX = 320;
                        iconY = -90;
                        break;
                }
                break;
        }
    } else {
        iconX = -140;
        iconY = -80;
        switch (type) {
            case 'Eyebrows':
                iconX = -150;
                iconY = -80;
                break;
            case 'Eye':
                iconX = -150;
                iconY = -110;
                break;
            case 'Lips':
                iconY = -150;
                break;
            case 'Hair':
                iconScale = 0.5;
                iconX = -40;
                iconY = 0;
                break;
            case 'Top':
                iconScale = 0.4;
                iconX = -30;
                iconY = -50;
                break;
            case 'Dress':
                iconScale = 0.3;
                iconX = 10;
                iconY = -30;
                break;
            case 'Bottom':
                iconScale = 0.4;
                iconX = -20;
                iconY = -80;
				switch (num) {
                    case 9:
                        iconScale = 0.4;
                        iconX = -20;
                        iconY = -110;
                        break;
					
                }
                break;
            case 'Socks':
                iconScale = 0.5;
                iconX = -100;
                iconY = -220;
                switch (num) {
                    case 9:
                    case 11:
                        iconScale = 0.4;
                        iconX = -60;
                        iconY = -130;
                        break;
					
                }
                break;
            case 'Shoes':
                iconScale = 1;
                iconX = -360;
                iconY = -510;
                switch (num) {
                    case 6:
                        iconScale = 0.5;
                        iconX = -90;
                        iconY = -220;
                        break;
					case 7:
                        iconScale = 0.5;
                        iconX = -80;
                        iconY = -220;
                        break;
                }
                break;
            case 'Accessory':
                iconScale = 0.5;
                iconX = 0;
                iconY = -100;
                switch (num) {
                    case 1:
                        iconScale = 0.6;
                        iconX = -30;
                        iconY = 10;
                        break;
                    case 2:
                        iconScale = 0.6;
                        iconX = -20;
                        iconY = 20;
                        break;
                    case 4:
                        iconScale = 0.6;
                        iconX = -80;
                        iconY = -20;
                        break;
                    case 9:
                        iconScale = 0.7;
                        iconX = -80;
                        iconY = -60;
                        break;
                    case 3:
						iconScale = 0.5;
                        iconX = -20;
                        iconY = 10;
                        break;
                    case 5:
						iconScale = 0.6;
                        iconX = -40;
                        iconY = 0;
                        break;
                    case 6:
						iconScale = 0.6;
                        iconX = -10;
                        iconY = -110;
                        break;
                    case 7:
						iconScale = 0.4;
                        iconX = -10;
                        iconY = -60;
                        break;
					case 8:
						iconScale = 0.5;
                        iconX = -20;
                        iconY = 30;
                        break;
                    case 10:
                    case 11:
                    case 12:
                        iconScale = 0.7;
                        iconX = -90;
                        iconY = 10;
                        break;
                    case 13:
					    iconScale = 0.4;
                        iconX = 20;
                        iconY = -40;
                        break;
                    case 14:
                        iconScale = 0.4;
                        iconX = -40;
                        iconY = -130;
                        break;
                    case 15:
                        iconScale = 0.7;
                        iconX = -70;
                        iconY = -130;
                        break;
                }
                break;
            default:
                break;
        }
    }

    //WORKING
    var myTexture = this.textures.boy;
    if (lower == 'girl') {
        myTexture = this.textures.girl1;
        switch (type) {
            case 'Lips':
            case 'Shoes':
            case 'Skin':
            case 'Socks':
            case 'Top':
                myTexture = this.textures.girl2;
                break;
        }
    }

    this[lower + 'BoxIcon'] = new Kiwi.GameObjects.Sprite(this, myTexture, 0, 0);

    if (type == 'Eye') {
        this[lower + 'BoxIcon'].animation.switchTo('eyes_' + num);
        this[lower + 'BoxIcon'].animation.switchTo(this[lower + 'EyeColour'] - 1);
    } else {
        this[lower + 'BoxIcon'].animation.switchTo(type);
        this[lower + 'BoxIcon'].animation.switchTo(num);
    }

    this[lower + 'BoxIcon'].rotPointX = this[lower + 'BoxIcon'].rotPointY = 0;
    this[lower + 'BoxIcon'].scaleX = this[lower + 'BoxIcon'].scaleY = iconScale;
    var cell = this[lower + 'BoxIcon'].animation.currentAnimation.currentCell;
    this[lower + 'BoxIcon'].x = (myTexture.cells[cell].orgX) * iconScale + iconX;
    this[lower + 'BoxIcon'].y = (myTexture.cells[cell].orgY) * iconScale + iconY;
    this.addChild(this[lower + 'BoxIcon']);
}
playState.removeBoxButton = function (char) {
    if (this[char + 'BoxIcon'] != undefined) {
        this.murder(this[char + 'BoxIcon']);
    }
}

/*
playState.pressBoyEyeColour1 = function () {
    if (this.boyEyeColour1.visible) {
        this.setEyes('boy', this.boyEye, 1);
    }
	this.clickSnd.play();
}
playState.pressBoyEyeColour2 = function () {
    if (this.boyEyeColour2.visible) {
        this.setEyes('boy', this.boyEye, 2);
    }
	this.clickSnd.play();
}
playState.pressBoyEyeColour3 = function () {
    if (this.boyEyeColour3.visible) {
        this.setEyes('boy', this.boyEye, 3);
    }
	this.clickSnd.play();
}
playState.pressBoyEyeColour4 = function () {
    if (this.boyEyeColour4.visible) {
        this.setEyes('boy', this.boyEye, 4);
    }
	this.clickSnd.play();
}
playState.pressBoyEyeColour5 = function () {
    if (this.boyEyeColour5.visible) {
        this.setEyes('boy', this.boyEye, 5);
    }
	this.clickSnd.play();
}
playState.pressBoyEyeColour6 = function () {
    if (this.boyEyeColour6.visible) {
        this.setEyes('boy', this.boyEye, 6);
    }
	this.clickSnd.play();
}
*/

playState.pressBoyEyeColourIcon = function () {
    if (this.boyEyeColourIcon.boxSelected) {
        var num = this.boyEyeColour + 1;
        if (num > this.boyEyeColourCount) num = 1;
        this.setEyes('boy', this.boyEye, num);
    }
    this.clickSnd.play();
}

playState.pressBoyEyebrowsIcon = function () {
    if (this.boyEyebrowsIcon.boxSelected) {
        var num = this.boyEyebrows + 1;
        if (num > this.boyEyebrowsCount) num = 1;
        this.setPiece('boy', num, 'Eyebrows');
        this.setBoxButton('Boy', 'Eyebrows');
    }
	this.clickSnd.play();
}
playState.pressBoyLipsIcon = function () {
    if (this.boyLipsIcon.boxSelected) {
        var num = this.boyLips + 1;
        if (num > this.boyLipsCount) num = 1;
        this.setPiece('boy', num, 'Lips');
        this.setBoxButton('Boy', 'Lips');
    }
	this.clickSnd.play();
}
//boy box 2
playState.pressBoyHairIcon = function () {
    if (this.boyHairIcon.boxSelected) {
        var num = this.boyHair + 1;
        if (num > this.boyHairCount) num = 1;
        this.setPiece('boy', num, 'Hair');
        this.setBoxButton('Boy', 'Hair');
    }
	this.clickSnd.play();
}
//boy box 3
playState.pressBoyTopIcon = function () {
    if (this.boyTopIcon.boxSelected) {
        var num = this.boyTop + 1;
        if (num > this.boyTopCount) num = 1;
        this.setPiece('boy', num, 'Top');
        this.setBoxButton('Boy', 'Top');
    }
	this.clickSnd.play();
}
playState.pressBoyBottomIcon = function () {
    if (this.boyBottomIcon.boxSelected) {
        var num = this.boyBottom + 1;
        if (num > this.boyBottomCount) num = 1;
        this.setPiece('boy', num, 'Bottom');
        this.setBoxButton('Boy', 'Bottom');
    }
	this.clickSnd.play();
}
//box 4
playState.pressBoyAccessoryIcon = function () {
    if (this.boyAccessoryIcon.boxSelected) {
        var num = this.boyAccessory + 1;
        if (num > this.boyAccessoryCount) num = 1;
        this.setPiece('boy', num, 'Accessory');
        this.setBoxButton('Boy', 'Accessory');
    }
	this.clickSnd.play();
}

//misc
playState.pressBoyArrowLeft = function () {
    if (!this.boyArrowLeft.visible) return;
    this.hideBox('boy');
    this.speech2Var--;
    this.viewBox('boy');
	this.clickSnd.play();
}
playState.pressBoyArrowRight = function () {
    if (!this.boyArrowRight.visible) return;
    this.hideBox('boy');
    this.speech2Var++;
    this.viewBox('boy');
	this.clickSnd.play();
}
playState.pressBoyExit = function () {
    this.hideBox('boy');
    this.speech2Var = 0;
    this.sideButton2Var = 0;
    this.boy_box.visible = false;
    for (var i = 1; i <= 4; i++) {
        this['boySideBtn' + i].x = 869;
    }
	this.clickSnd.play();
}

playState.viewBox = function (char) {
    this.removeBoxButton(char);
    if (char == 'girl') {
        this.girlExit.visible = true;
        this.girl_box.visible = true;
        switch (this.sideButton1Var) {
            case 1:
                //skin, eyes, eyecolor, eyebrows, lips
                switch (this.speech1Var) {
                    case 1:
                        //skin
                        //display arrows, skin preview img, 4 buttons to pick colour
                        /*for (var i = 1; i <= 4; i++) {
                            this['girlSkinColour' + i].visible = true;
                        }*/

                        this.girlSkinIcon.visible = true;
                        this.girlSkinIcon.boxSelected = true;
                        this.girlArrowRight.visible = true;
                        break;
                    case 2:
                        //eyes
                        //display arrows, eye preview img
                        this.girlEyeIcon.boxSelected = true;
                        this.girlArrowLeft.visible = true;
                        this.girlArrowRight.visible = true;
                        this.setBoxButton('Girl', 'Eye');
                        break;
                    case 3:
                        //eye colour
                        //display arrows, eye colour preview img, colour buttons
                        this.girlEyeColourIcon.visible = true;
                        /*for (var i = 1; i <= 6; i++) {
                            this['girlEyeColour' + i].visible = true;
                        }*/
                        this.girlEyeColourIcon.boxSelected = true;
                        this.girlArrowLeft.visible = true;
                        this.girlArrowRight.visible = true;
                        break;
                    case 4:
                        //eyebrows
                        //display arrows, eyebrow preview img
                        this.girlEyebrowsIcon.boxSelected = true;
                        this.girlArrowLeft.visible = true;
                        this.girlArrowRight.visible = true;
                        this.setBoxButton('Girl', 'Eyebrows');
                        break;
                    case 5:
                        //lips
                        //display arrows, eyebrow preview img
                        this.girlLipsIcon.boxSelected = true;
                        this.girlArrowLeft.visible = true;
                        this.setBoxButton('Girl', 'Lips');
                        break;
                }
                break;
            case 2:
                this.girlHairIcon.boxSelected = true;
                this.setBoxButton('Girl', 'Hair');
                break;
            case 3:
                switch (this.speech1Var) {
                    case 1:
                        this.girlTopIcon.boxSelected = true;
                        this.girlArrowRight.visible = true;
                        if (this.girlTop == 0) {
                            this.murder(this['girlDress' + this.girlDress]);
                            if (this.girlBottom == 0) {
                                this.setPiece('girl', 1, 'Bottom');
                            }
                            this.setPiece('girl', 1, 'Top');
                        }

                        this.setBoxButton('Girl', 'Top');
                        break;
                    case 2:
                        if (this.girlDress == 0) {
                            this.murder(this['girlTop' + this.girlTop]);
                            this.murder(this['girlBottom' + this.girlBottom]);
                            this.setPiece('girl', 1, 'Dress');
                        }
                        this.girlDressIcon.boxSelected = true;
                        this.girlArrowLeft.visible = true;
                        this.girlArrowRight.visible = true;
                        this.setBoxButton('Girl', 'Dress');
                        break;
                    case 3:
                        if (this.girlBottom == 0) {
                            this.murder(this['girlDress' + this.girlDress]);
                            this.setPiece('girl', 1, 'Bottom');
                            if (this.girlTop == 0) {
                                this.setPiece('girl', 1, 'Top');
                            }
                        }
                        this.girlBottomIcon.boxSelected = true;
                        this.girlArrowLeft.visible = true;
                        this.setBoxButton('Girl', 'Bottom');
                        break;
                }
                break;
            case 4:
                switch (this.speech1Var) {
                    case 1:
                        this.girlSocksIcon.boxSelected = true;
                        this.girlArrowRight.visible = true;
                        this.setBoxButton('Girl', 'Socks');
                        break;
                    case 2:
                        this.girlShoesIcon.boxSelected = true;
                        this.girlArrowLeft.visible = true;
                        this.setBoxButton('Girl', 'Shoes');
                        break;
                }
                break;
            case 5:
                this.girlAccessoryIcon.boxSelected = true;
                this.setBoxButton('Girl', 'Accessory');
                break;
        }
    } else {
        this.boyExit.visible = true;
        this.boy_box.visible = true;
        switch (this.sideButton2Var) {
            case 1:
                //skin, eyes, eyecolor, eyebrows, lips
                switch (this.speech2Var) {
                    case 1:
                        //skin
                        //display arrows, skin preview img, 4 buttons to pick colour
                       /* for (var i = 1; i <= 4; i++) {
                            this['boySkinColour' + i].visible = true;
                        }*/
                        this.boySkinIcon.visible = true;
						this.boySkinIcon.boxSelected = true;
                        this.boyArrowRight.visible = true;
                        break;
                    case 2:
                        //eyes
                        //display arrows, eye preview img
                        this.boyEyeIcon.boxSelected = true;
                        this.setBoxButton('Boy', 'Eye');
                        this.boyArrowLeft.visible = true;
                        this.boyArrowRight.visible = true;
                        break;
                    case 3:
                        //eye colour
                        //display arrows, eye colour preview img, colour buttons
                        this.boyEyeColourIcon.visible = true;
                        /*for (var i = 1; i <= 6; i++) {
                            this['boyEyeColour' + i].visible = true;
                        }*/
                        this.boyEyeColourIcon.boxSelected = true;
                        this.boyArrowLeft.visible = true;
                        this.boyArrowRight.visible = true;
                        break;
                    case 4:
                        //eyebrows
                        //display arrows, eyebrow preview img
                        this.boyEyebrowsIcon.boxSelected = true;
                        this.setBoxButton('Boy', 'Eyebrows');
                        this.boyArrowLeft.visible = true;
                        this.boyArrowRight.visible = true;
                        break;
                    case 5:
                        //lips
                        //display arrows, eyebrow preview img
                        this.boyLipsIcon.boxSelected = true;
                        this.setBoxButton('Boy', 'Lips');
                        this.boyArrowLeft.visible = true;
                        break;
                }
                break;
            case 2:
                this.boyHairIcon.boxSelected = true;
                this.setBoxButton('Boy', 'Hair');
                break;
            case 3:
                switch (this.speech2Var) {
                    case 1:
                        //top
                        this.boyTopIcon.boxSelected = true;
                        this.boyArrowRight.visible = true;
                        this.setBoxButton('Boy', 'Top');
                        break;
                    case 2:
                        //bottom
                        this.boyBottomIcon.boxSelected = true;
                        this.boyArrowLeft.visible = true;
                        this.setBoxButton('Boy', 'Bottom');
                        break;
                }
                break;
            case 4:
                this.boyAccessoryIcon.boxSelected = true;
                this.setBoxButton('Boy', 'Accessory');
                break;
        }
    }
}
playState.hideBox = function (char) {
    this.removeBoxButton(char);
    this[char + '_box'].visible = false;
    this[char + 'Exit'].visible = false;
    if (char == 'girl') {
        //use this.sideButton1Var to remove all the associated shit
        switch (this.sideButton1Var) {
            case 1:
                //skin, eyes, eyecolor, eyebrows
                switch (this.speech1Var) {
                    case 1:
                        //skin
                        //display arrows, skin preview img, 4 buttons to pick colour
                        /*for (var i = 1; i <= 4; i++) {
                            this['girlSkinColour' + i].visible = false;
                        }*/
                        this.girlSkinIcon.visible = false;
                        this.girlSkinIcon.boxSelected = false;
                        this.girlArrowRight.visible = false;
                        break;
                    case 2:
                        //eyes
                        //display arrows, eye preview img
                        this.girlEyeIcon.boxSelected = false;
                        this.girlArrowLeft.visible = false;
                        this.girlArrowRight.visible = false;
                        break;
                    case 3:
                        //eye colour
                        //display arrows, eye colour preview img, colour buttons
                        this.girlEyeColourIcon.visible = false;
                        /*for (var i = 1; i <= 6; i++) {
                            this['girlEyeColour' + i].visible = false;
                        }*/
                        this.girlEyeColourIcon.boxSelected = false;
                        this.girlArrowLeft.visible = false;
                        this.girlArrowRight.visible = false;
                        break;
                    case 4:
                        //eyebrows
                        //display arrows, eyebrow preview img
                        this.girlEyebrowsIcon.boxSelected = false;
                        this.girlArrowLeft.visible = false;
                        this.girlArrowRight.visible = false;
                        break;
                    case 5:
                        //lips
                        this.girlLipsIcon.boxSelected = false;
                        this.girlArrowLeft.visible = false;
                        break;
                }
                break;
            case 2:
                this.girlHairIcon.boxSelected = false;
                break;
            case 3:
                switch (this.speech1Var) {
                    case 1:
                        //top
                        this.girlTopIcon.boxSelected = false;
                        this.girlArrowRight.visible = false;
                        break;
                    case 2:
                        //top
                        this.girlDressIcon.boxSelected = false;
                        this.girlArrowLeft.visible = false;
                        this.girlArrowRight.visible = false;
                        break;
                    case 3:
                        //top
                        this.girlBottomIcon.boxSelected = false;
                        this.girlArrowLeft.visible = false;
                        break;
                }
                break;
            case 4:
                switch (this.speech1Var) {
                    case 1:
                        this.girlSocksIcon.boxSelected = false;
                        this.girlArrowLeft.visible = false;
                        this.girlArrowRight.visible = false;
                        break;
                    case 2:
                        this.girlShoesIcon.boxSelected = false;
                        this.girlArrowLeft.visible = false;
                        break;
                }
                break;
            case 5:
                this.girlAccessoryIcon.boxSelected = false;
                break;
        }
    } else {
        //boy
        switch (this.sideButton2Var) {
            case 1:
                //skin, eyes, eyecolor, eyebrows, lips
                switch (this.speech2Var) {
                    case 1:
                        //skin
                        //display arrows, skin preview img, 4 buttons to pick colour
                       /* for (var i = 1; i <= 4; i++) {
                            this['boySkinColour' + i].visible = false;
                        }*/
                        this.boySkinIcon.visible = false;
						this.boySkinIcon.boxSelected = false;
                        this.boyArrowRight.visible = false;
                        break;
                    case 2:
                        //eyes
                        //display arrows, eye preview img
                        this.boyEyeIcon.boxSelected = false;
                        this.boyArrowLeft.visible = false;
                        this.boyArrowRight.visible = false;
                        break;
                    case 3:
                        //eye colour
                        //display arrows, eye colour preview img, colour buttons
                        this.boyEyeColourIcon.visible = false;
                        /*for (var i = 1; i <= 6; i++) {
                            this['boyEyeColour' + i].visible = false;
                        }*/

                        this.boyEyeColourIcon.boxSelected = false;
                        this.boyArrowLeft.visible = false;
                        this.boyArrowRight.visible = false;
                        break;
                    case 4:
                        //eyebrows
                        //display arrows, eyebrow preview img
                        this.boyEyebrowsIcon.boxSelected = false;
                        this.boyArrowLeft.visible = false;
                        this.boyArrowRight.visible = false;
                        break;
                    case 5:
                        //lips
                        //display arrows, eyebrow preview img
                        this.boyLipsIcon.boxSelected = false;
                        this.boyArrowLeft.visible = false;
                        break;
                }
                break;
            case 2:
                this.boyHairIcon.boxSelected = false;
                break;
            case 3:
                switch (this.speech2Var) {
                    case 1:
                        //top
                        this.boyTopIcon.boxSelected = false;
                        this.boyArrowRight.visible = false;
                        break;
                    case 2:
                        //bottom
                        this.boyBottomIcon.boxSelected = false;
                        this.boyArrowLeft.visible = false;
                        break;
                }
                break;
            case 4:
                this.boyAccessoryIcon.boxSelected = false;
                break;
        }
    }
}

//GIRL BOX
playState.setGirlBox = function () {
    //BOX
    this.girl_box = new Kiwi.GameObjects.Sprite(this, this.textures.girl_box, 0, 0);
    this.addChild(this.girl_box);
    this.girl_box.visible = false;

    this.girlArrowLeft = new Kiwi.GameObjects.Sprite(this, this.textures.arrow_left, 16, 84);
    this.addChild(this.girlArrowLeft);
    this.girlArrowLeft.input.onUp.add(this.pressGirlArrowLeft, this);
    this.girlArrowLeft.visible = false;

    this.girlArrowRight = new Kiwi.GameObjects.Sprite(this, this.textures.arrow_right, 151, 84);
    this.addChild(this.girlArrowRight);
    this.girlArrowRight.input.onUp.add(this.pressGirlArrowRight, this);
    this.girlArrowRight.visible = false;

    this.girlExit = new Kiwi.GameObjects.Sprite(this, this.textures.exit_box, 147, 19);
    this.addChild(this.girlExit);
    this.girlExit.input.onUp.add(this.pressGirlExit, this);
    this.girlExit.visible = false;

    //box 1
    //skin buttons
    /*for(var i = 1; i<=4; i++){
        this['girlSkinColour' + i] = new Kiwi.GameObjects.Sprite(this, this.textures['skinColour' + i], 111, 11 + i*30);
        this.addChild(this['girlSkinColour' + i]);
        this['girlSkinColour' + i].input.onUp.add(this['pressGirlSkinColour' + i], this);
        this['girlSkinColour' + i].visible = false;
    }*/

    this.girlSkinIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlSkinIcon, 33, 54);
    this.addChild(this.girlSkinIcon);
    this.girlSkinIcon.input.onUp.add(this.pressGirlSkinIcon, this);
    this.girlSkinIcon.visible = false;
    this.girlSkinIcon.boxSelected = false;

    //skin buttons
    /* for (var i = 1; i <= 4; i++) {
         this['boySkinColour' + i] = new Kiwi.GameObjects.Sprite(this, this.textures['skinColour' + i], 805, 11 + i * 30);
         this.addChild(this['boySkinColour' + i]);
         this['boySkinColour' + i].input.onUp.add(this['pressBoySkinColour' + i], this);
         this['boySkinColour' + i].visible = false;
     }*/

    //eye
    this.girlEyeIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlEyeIcon, 61, 61);
    this.addChild(this.girlEyeIcon);
    this.girlEyeIcon.input.onUp.add(this.pressGirlEyeIcon, this);
    this.girlEyeIcon.visible = false;
    this.girlEyeIcon.boxSelected = false;

    //eye colour
    this.girlEyeColourIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlEyeColourIcon, 61, 49);
    this.addChild(this.girlEyeColourIcon);
    this.girlEyeColourIcon.visible = false;
    this.girlEyeColourIcon.input.onUp.add(this.pressGirlEyeColourIcon, this);
    this.girlEyeColourIcon.boxSelected = false;

    /*
    for (var i = 1; i <= 3; i++) {
        this['girlEyeColour' + i] = new Kiwi.GameObjects.Sprite(this, this.textures['colour'+i], 12 + 32*i, 113);
        this.addChild(this['girlEyeColour' + i]);
        this['girlEyeColour' + i].input.onUp.add(this['pressGirlEyeColour' + i], this);
        this['girlEyeColour' + i].visible = false;

        this['girlEyeColour' + (i + 3)] = new Kiwi.GameObjects.Sprite(this, this.textures['colour' + (i + 3)], 12 + 32 * i, 138);
        this.addChild(this['girlEyeColour' + (i + 3)]);
        this['girlEyeColour' + (i + 3)].input.onUp.add(this['pressGirlEyeColour' + (i + 3)], this);
        this['girlEyeColour' + (i+3)].visible = false;
    }*/

    //eyebrows
    this.girlEyebrowsIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlEyebrowIcon, 61, 61);
    this.addChild(this.girlEyebrowsIcon);
    this.girlEyebrowsIcon.input.onUp.add(this.pressGirlEyebrowsIcon, this);
    this.girlEyebrowsIcon.visible = false;
    this.girlEyebrowsIcon.boxSelected = false;

    //lips
    this.girlLipsIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlLipsIcon, 61, 61);
    this.addChild(this.girlLipsIcon);
    this.girlLipsIcon.input.onUp.add(this.pressGirlLipsIcon, this);
    this.girlLipsIcon.visible = false;
    this.girlLipsIcon.boxSelected = false;

    //box 2
    this.girlHairIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlHairIcon, 42, 47);
    this.addChild(this.girlHairIcon);
    this.girlHairIcon.input.onUp.add(this.pressGirlHairIcon, this);
    this.girlHairIcon.visible = false;
    this.girlHairIcon.boxSelected = false;

    //box 3
    //girlTopIcon, girlDressIcon, girlBottomIcon
    this.girlTopIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlTopIcon, 42, 47);
    this.addChild(this.girlTopIcon);
    this.girlTopIcon.input.onUp.add(this.pressGirlTopIcon, this);
    this.girlTopIcon.visible = false;
    this.girlTopIcon.boxSelected = false;

    this.girlDressIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlDressIcon, 42, 47);
    this.addChild(this.girlDressIcon);
    this.girlDressIcon.input.onUp.add(this.pressGirlDressIcon, this);
    this.girlDressIcon.visible = false;
    this.girlDressIcon.boxSelected = false;

    this.girlBottomIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlBottomIcon, 42, 47);
    this.addChild(this.girlBottomIcon);
    this.girlBottomIcon.input.onUp.add(this.pressGirlBottomIcon, this);
    this.girlBottomIcon.visible = false;
    this.girlBottomIcon.boxSelected = false;

    this.girlSocksIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlSocksIcon, 42, 47);
    this.addChild(this.girlSocksIcon);
    this.girlSocksIcon.input.onUp.add(this.pressGirlSocksIcon, this);
    this.girlSocksIcon.visible = false;
    this.girlSocksIcon.boxSelected = false;

    this.girlShoesIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlShoeIcon, 42, 47);
    this.addChild(this.girlShoesIcon);
    this.girlShoesIcon.input.onUp.add(this.pressGirlShoesIcon, this);
    this.girlShoesIcon.visible = false;
    this.girlShoesIcon.boxSelected = false;

    //box 5
    this.girlAccessoryIcon = new Kiwi.GameObjects.Sprite(this, this.textures.girlAccessoryIcon, 42, 47);
    this.addChild(this.girlAccessoryIcon);
    this.girlAccessoryIcon.input.onUp.add(this.pressGirlAccessoryIcon, this);
    this.girlAccessoryIcon.visible = false;
    this.girlAccessoryIcon.boxSelected = false;
}
//girl box 1
/*
playState.pressGirlSkinColour1 = function () {
    if (this.girlSkinColour1.visible) this.setPiece('girl', 1, 'Skin');
	this.clickSnd.play();
}
playState.pressGirlSkinColour2 = function () {
    if (this.girlSkinColour2.visible) this.setPiece('girl', 2, 'Skin');
	this.clickSnd.play();
}
playState.pressGirlSkinColour3 = function () {
    if (this.girlSkinColour3.visible) this.setPiece('girl', 3, 'Skin');
	this.clickSnd.play();
}
playState.pressGirlSkinColour4 = function () {
    if (this.girlSkinColour4.visible) this.setPiece('girl', 4, 'Skin');
	this.clickSnd.play();
}*/


playState.pressGirlSkinIcon = function () {
    if (this.girlSkinIcon.boxSelected) {
        var num = this.girlSkin + 1;
        if (num > this.girlSkinCount) num = 1;
        this.setPiece('girl', num, 'Skin');
        //this.setBoxButton('Boy', 'Skin');
    }
    this.clickSnd.play();
}

playState.pressGirlEyeIcon = function () {
    if (this.girlEyeIcon.boxSelected) {
        var num = this.girlEye + 1;
        if (num > this.girlEyeCount) num = 1;
        this.setEyes('girl', num, this.girlEyeColour);
        this.setBoxButton('Girl', 'Eye');
    }
	this.clickSnd.play();
}
/*
playState.pressGirlEyeColour1 = function () {
    if (this.girlEyeColour1.visible) {
        this.setEyes('girl', this.girlEye, 1);
    }
	this.clickSnd.play();
}
playState.pressGirlEyeColour2 = function () {
    if (this.girlEyeColour2.visible) {
        this.setEyes('girl', this.girlEye, 2);
    }
	this.clickSnd.play();
}
playState.pressGirlEyeColour3 = function () {
    if (this.girlEyeColour3.visible) {
        this.setEyes('girl', this.girlEye, 3);
    }
	this.clickSnd.play();
}
playState.pressGirlEyeColour4 = function () {
    if (this.girlEyeColour4.visible) {
        this.setEyes('girl', this.girlEye, 4);
    }
	this.clickSnd.play();
}
playState.pressGirlEyeColour5 = function () {
    if (this.girlEyeColour5.visible) {
        this.setEyes('girl', this.girlEye, 5);
    }
	this.clickSnd.play();
}
playState.pressGirlEyeColour6 = function () {
    if (this.girlEyeColour6.visible) {
        this.setEyes('girl', this.girlEye, 6);
    }
	this.clickSnd.play();
}*/
//pressGirlEyeColourIcon

playState.pressGirlEyeColourIcon = function () {
    if (this.girlEyeColourIcon.boxSelected) {
        var num = this.girlEyeColour + 1;
        if (num > this.girlEyeColourCount) num = 1;
        this.setEyes('girl', this.girlEye, num);
    }
    this.clickSnd.play();
}

playState.pressGirlEyebrowsIcon = function () {
    if (this.girlEyebrowsIcon.boxSelected) {
        var num = this.girlEyebrows + 1;
        if (num > this.girlEyebrowsCount) num = 1;
        this.setPiece('girl', num, 'Eyebrows');
        this.setBoxButton('Girl', 'Eyebrows');
    }
	this.clickSnd.play();
}
playState.pressGirlLipsIcon = function () {
    if (this.girlLipsIcon.boxSelected) {
        var num = this.girlLips + 1;
        if (num > this.girlLipsCount) num = 1;
        this.setPiece('girl', num, 'Lips');
        this.setBoxButton('Girl', 'Lips');
    }
	this.clickSnd.play();
}
//girl box 2
playState.pressGirlHairIcon = function () {
    if (this.girlHairIcon.boxSelected) {
        var num = this.girlHair + 1;
        if (num > this.girlHairCount) num = 1;
        this.setPiece('girl', num, 'Hair');
        this.setBoxButton('Girl', 'Hair');
    }
	this.clickSnd.play();
}
//girl box 3
playState.pressGirlTopIcon = function () {
    if (this.girlTopIcon.boxSelected) {
        var num = this.girlTop + 1;
        if (num > this.girlTopCount) num = 1;

        //remove dress
        this.setPiece('girl', 0, 'Dress');
        if (this.girlBottom == 0) {
            this.setPiece('girl', 1, 'Bottom');
        } else {
            this.setPiece('girl', this.girlBottom, 'Bottom');
        }
        this.setPiece('girl', num, 'Top');
        this.setBoxButton('Girl', 'Top');
    }
	this.clickSnd.play();
}
playState.pressGirlDressIcon = function () {
    if (this.girlDressIcon.boxSelected) {
        console.log('dress!', this.girlDress)
        var num = this.girlDress + 1;
        if (num > this.girlDressCount) num = 1;
        
        this.setPiece('girl', 0, 'Bottom');
        this.setPiece('girl', 0, 'Top');

        this.setPiece('girl', num, 'Dress');
        this.setBoxButton('Girl', 'Dress');
    }
	this.clickSnd.play();
}
playState.pressGirlBottomIcon = function () {
    if (this.girlBottomIcon.boxSelected) {
        var num = this.girlBottom + 1;
        if (num > this.girlBottomCount) num = 1;

        this.setPiece('girl', 0, 'Dress');

        this.setPiece('girl', num, 'Bottom');
        if (this.girlTop == 0) {
            this.setPiece('girl', 1, 'Top');
        } else {
            this.setPiece('girl', this.girlTop, 'Top');
        }
        this.setBoxButton('Girl', 'Bottom');
    }
	this.clickSnd.play();
}
playState.pressGirlSocksIcon = function () {
    if (this.girlSocksIcon.boxSelected) {
        var num = this.girlSocks + 1;
        if (num > this.girlSocksCount) num = 1;
        this.setPiece('girl', num, 'Socks');
        this.setBoxButton('Girl', 'Socks');
    }
	this.clickSnd.play();
}
playState.pressGirlShoesIcon = function () {
    if (this.girlShoesIcon.boxSelected) {
        var num = this.girlShoes + 1;
        if (num > this.girlShoesCount) num = 1;
        this.setPiece('girl', num, 'Shoes');
        this.setBoxButton('Girl', 'Shoes');
    }
	this.clickSnd.play();
}
//box 5
playState.pressGirlAccessoryIcon = function () {
    if (this.girlAccessoryIcon.boxSelected) {
        var num = this.girlAccessory + 1;
        if (num > this.girlAccessoryCount) num = 1;
        this.setPiece('girl', num, 'Accessory');
        this.setBoxButton('Girl', 'Accessory');
    }
	this.clickSnd.play();
}
//misc
playState.pressGirlArrowLeft = function () {
    if (!this.girlArrowLeft.visible) return;
    this.hideBox('girl');
    this.speech1Var--;
    this.viewBox('girl');
	this.clickSnd.play();
}
playState.pressGirlArrowRight = function () {
    if (!this.girlArrowRight.visible) return;
    this.hideBox('girl');
    this.speech1Var++;
    this.viewBox('girl');
	this.clickSnd.play();
}
playState.pressGirlExit = function () {
    this.hideBox('girl');
    this.speech1Var = 0;
    this.sideButton1Var = 0;
    this.girl_box.visible = false;
    for (var i = 1; i <= 5; i++) {
        this['girlSideBtn' + i].x = -29;
    }
	this.clickSnd.play();
}

//BOY SIDE
playState.pressBoy1 = function () {
    this.selectButton('boy', 1);
	this.clickSnd.play();
}
playState.pressBoy2 = function () {
    this.selectButton('boy', 2);
	this.clickSnd.play();
}
playState.pressBoy3 = function () {
    this.selectButton('boy', 3);
	this.clickSnd.play();
}
playState.pressBoy4 = function () {
    this.selectButton('boy', 4);
	this.clickSnd.play();
}

//GIRL SIDE
playState.pressGirl1 = function () {
    this.selectButton('girl', 1);
	this.clickSnd.play();
}
playState.pressGirl2 = function () {
    this.selectButton('girl', 2);
	this.clickSnd.play();
}
playState.pressGirl3 = function () {
    this.selectButton('girl', 3);
	this.clickSnd.play();
}
playState.pressGirl4 = function () {
    this.selectButton('girl', 4);
	this.clickSnd.play();
}
playState.pressGirl5 = function () {
    this.selectButton('girl', 5);
	this.clickSnd.play();
}

//select button and set tabs up
playState.selectButton = function (char, num) {
    if (char == 'girl') {
        if (this.sideButton1Var == num) {
            return;
        }
        for (var i = 1; i <= 5; i++) {
            this['girlSideBtn' + i].x = -29;
        }
        this['girlSideBtn' + num].x = 0;
    } else {
        //boy
        if (this.sideButton2Var == num) {
            return;
        }
        for (var i = 1; i <= 4; i++) {
            this['boySideBtn' + i].x = 869;
        }
        this['boySideBtn' + num].x = 856;
    }
    this.popBox(char, num);
}

//start display buttons in speech windows
playState.popBox = function (char, num) {
    this.hideBox(char);
    //hide current set, set new var, show new lot
    if (char == 'girl') {
        this.sideButton1Var = num;
        this.speech1Var = 1;
        this.viewBox(char);
    } else {
        //boy
        this.sideButton2Var = num;
        this.speech2Var = 1;
        this.viewBox(char);
    }
    this[char + '_box'].visible = true;
}
//
//CAPITAL FOR TYPE
playState.returnRight = function (char, Type) {
    var curr = this[char + '' + Type];
    if (curr + 1 <= this[char + '' + Type + 'Count']) {
        return curr + 1;
    } else {
        return 1;
    }
}
playState.returnLeft = function (char, Type) {
    var curr = this[char + '' + Type];
    if (curr - 1 > 0) {
        return curr - 1;
    } else {
        return this[char + '' + Type + 'Count'];
    }
}

//PREVIEW
playState.setPiece = function (char, num, tag) {
    console.log("set piece", char, num, tag);
    if (num == 0) {
        if (this[char + '' + tag + '' + this[char + '' + tag]] != undefined) {
            console.log("murder");
            this.murder(this[char + '' + tag + '' + this[char + '' + tag]])
            console.log("murder");
            
        }
        this[char + '' + tag] = num;
        return;
    }
    var removeClip = this[char + '' + tag + '' + this[char + tag]];
    this[char + '' + tag] = num;

    var myTexture = this.textures.boy;
    if (char == 'girl') {
        myTexture = this.textures.girl1;
        switch (tag) {
            case 'Lips':
            case 'Shoes':
            case 'Skin':
            case 'Socks':
            case 'Top':
                myTexture = this.textures.girl2;
                break;
        }
    }
    this[char + '' + tag + '' + num] = new Kiwi.GameObjects.Sprite(this, myTexture, 0, 0);
    this[char + '' + tag + '' + num].animation.switchTo(tag);
    this[char + '' + tag + '' + num].animation.switchTo(num);
    var cell = this[char + '' + tag + '' + num].animation.currentAnimation.currentCell;
    this[char + '' + tag + '' + num].x = myTexture.cells[cell].orgX;
    this[char + '' + tag + '' + num].y = myTexture.cells[cell].orgY;
    //console.log('NEED CELL NUMBER:', myTexture, myTexture.cells[cell]);

    var removing = false;
    if (removeClip != undefined) {
        console.log('remve clip:', removeClip);
        if (removeClip.parent != undefined && removeClip.parent != null) {
            this.addChildAfter(this[char + '' + tag + '' + num], removeClip);
            this.murder(removeClip);
            removing = true;
        }
    }
    if (!removing) {
        var underHair = false;
        var hairClip = this[char + 'Hair' + this[char + 'Hair']];
        if (tag == 'Skin') {
            this.addChildBefore(this[char + '' + tag + '' + num], this[char + 'Undies']);
        } else if ((tag == 'Dress' || tag == 'Top') && hairClip != undefined) {
            if (hairClip.parent != undefined && hairClip.parent != null) {
                this.addChildBefore(this[char + '' + tag + '' + num], hairClip);
                underHair = true;
            }
        }
        if(!underHair){
            this.addChild(this[char + '' + tag + '' + num]);
        }
        if (tag == 'Top') {
            var bottomClip = this[char + 'Bottom' + this[char + 'Bottom']];
            if (bottomClip != undefined) {
                if (bottomClip.parent != undefined && bottomClip.parent != null) {
                    this.removeChild(bottomClip);
                    this.addChildBefore(bottomClip, this[char + '' + tag + '' + num]);
                }
            }
        }
    }

	this.setText();
}

//STABBY STAB
playState.murder = function (clip) {
    if (clip == undefined) return;
    this.removeChild(clip);
    if (clip != undefined) {
        clip.destroy();
        clip = undefined;
    }
}
playState.murderAll = function () {
    //set up image
    this.murder(this['girlSkin' + this.girlSkin]);
    this.murder(this['girlAccessory' + this.girlAccessory]);
    this.murder(this['girlEyebrows' + this.girlEyebrows]);
    this.murder(this['girlLips' + this.girlLips]);
    this.murder(this['girlTop' + this.girlTop]);
    this.murder(this['girlHair' + this.girlHair]);
    this.murder(this['girlSocks' + this.girlSocks]);
    this.murder(this['girlShoes' + this.girlShoes]);
    this.murder(this['girlDress' + this.girlDress]);
    this.murder(this['girlEye_' + this.girlEye + '_' + this.col[this.girlEyeColour - 1]]);

    this.murder(this['boySkin' + this.boySkin]);
    this.murder(this['boyAccessory' + this.boyAccessory]);
    this.murder(this['boyEyebrows' + this.boyEyebrows]);
    this.murder(this['boyLips' + this.boyLips]);
    this.murder(this['boyTop' + this.boyTop]);
    this.murder(this['boyBottom' + this.boyBottom]);
    this.murder(this['boyHair' + this.boyHair]);
    this.murder(this['boyEye_' + this.boyEye + '_' + this.col[this.boyEyeColour - 1]]);
}
playState.setEyes = function (char, num, col) {
    var removeClip = this[char + 'Eye_' + (this[char + 'Eye']) + '_' + (this.col[this[char + 'EyeColour'] - 1])]

    this[char + 'Eye'] = num;
    this[char + 'EyeColour'] = col;

    var myTexture = this.textures.boy;
    if (char == 'girl') myTexture = this.textures.girl1;
    this[char + 'Eye_' + num + '_' + this.col[col - 1]] = new Kiwi.GameObjects.Sprite(this, myTexture, 0, 0);
    this[char + 'Eye_' + num + '_' + this.col[col - 1]].animation.switchTo('eyes_' + num);
    this[char + 'Eye_' + num + '_' + this.col[col - 1]].animation.switchTo(col - 1);

    var cell = this[char + 'Eye_' + num + '_' + this.col[col - 1]].animation.currentAnimation.currentCell;
    this[char + 'Eye_' + num + '_' + this.col[col - 1]].x = myTexture.cells[cell].orgX;
    this[char + 'Eye_' + num + '_' + this.col[col - 1]].y = myTexture.cells[cell].orgY;

    var removing = false;
    if (removeClip != undefined) {
        if (removeClip.parent != undefined) {
            this.addChildAfter(this[char + 'Eye_' + num + '_' + this.col[col - 1]], removeClip);
            this.murder(removeClip);
            removing = true;
        }
    }
    if(!removing){
        this.addChild(this[char + 'Eye_' + num + '_' + this.col[col - 1]]);
    }
	
    this.setText();
}

//UI
playState.changeBG1 = function () {
    this.bg2.visible = false;
}
playState.changeBG2 = function () {
    this.bg2.visible = true;
}

playState.showImage = function () {
    var bgNumVar = 1;
    if (this.bg2.visible) bgNumVar = 2;

    /*var boySkinVar = this.boySkin;
    var boyAccessory = this.boyAccessory;
    var boyEyebrows = this.boyEyebrows;
    var boyLips = this.boyLips;
    var boyEye = this.boyEye;
    var boyEyeColour = this.boyEyeColour;
    var boyBottom = this.boyBottom;
    var boyHair = this.boyHair;
    var boyTop = this.boyTop;

    var girlAccessory = this.girlAccessory;
    var girlBottom = this.girlBottom;
    var girlDress = this.girlDress;
    var girlEyebrows = this.girlEyebrows;
    var girlEye = this.girlEye;
    var girlHair = this.girlHair;
    var girlLips = this.girlLips;
    var girlShoes = this.girlShoes;
    var girlSkin = this.girlSkin;
    var girlSocks = this.girlSocks;
    var girlEyeColour = this.girlEyeColour;
    var girlTop = this.girlTop;
    */
    this.murderAll();

    this.game.states.switchState('ShowState', showState, null, {
        boySkin: this.boySkin,
        boyAccessory: this.boyAccessory,
        boyEyebrows: this.boyEyebrows,
        boyLips: this.boyLips,
        boyEye: this.boyEye,
        boyEyeColour: this.boyEyeColour,
        boyBottom: this.boyBottom,
        boyHair: this.boyHair,
        boyTop: this.boyTop,

        girlAccessory: this.girlAccessory,
        girlBottom: this.girlBottom,
        girlDress: this.girlDress,
        girlEyebrows: this.girlEyebrows,
        girlEye: this.girlEye,
        girlHair: this.girlHair,
        girlLips: this.girlLips,
        girlShoes: this.girlShoes,
        girlSkin: this.girlSkin,
        girlSocks: this.girlSocks,
        girlEyeColour: this.girlEyeColour,
        girlTop: this.girlTop,
        bgNum: bgNumVar
    });
}

playState.goHome = function () {
    this.home_on.visible = false;
	this.resetChar();
	this.text1.text = '';
	//this.scoreTF.text = '';
	this.resetTags();
    this.game.states.switchState("IntroState");
}

playState.resetTags = function () {
    this['girlSkin' + this.girlSkin] = undefined;
    this['girlAccessory' + this.girlAccessory] = undefined;
    this['girlEyebrows' + this.girlEyebrows] = undefined;
    this['girlLips' + this.girlLips] = undefined;
    this['girlTop' + this.girlTop] = undefined;
    this['girlHair' + this.girlHair] = undefined;
    this['girlSocks' + this.girlSocks] = undefined;
    this['girlShoes' + this.girlShoes] = undefined;
    this['girlDress' + this.girlDress] = undefined;
    this['girlEye_' + this.girlEye + '_' + this.col[this.girlEyeColour - 1]] = undefined;

    this['boySkin' + this.boySkin] = undefined;
    this['boyAccessory' + this.boyAccessory] = undefined;
    this['boyEyebrows' + this.boyEyebrows] = undefined;
    this['boyLips' + this.boyLips] = undefined;
    this['boyTop' + this.boyTop] = undefined;
    this['boyBottom' + this.boyBottom] = undefined;
    this['boyHair' + this.boyHair] = undefined;
    this['boyEye_' + this.boyEye + '_' + this.col[this.boyEyeColour - 1]] = undefined;
}
playState.homeDown = function () {
    this.home_on.visible = true;
	this.clickSnd.play();
}

playState.randomChar = function () {
    //skinNum, bottomNum, socksNum, shoesNum, topNum, lipsNum, hairNum, eyebrowNum, dressNum, eyeNum, eyeColour, bgNum
    this.random_on.visible = false;

    var randGirlSkin = Math.floor(Math.random() * this.girlSkinCount) + 1;
    var randGirlAccessory = Math.floor(Math.random() * this.girlAccessoryCount) + 1;
    var randGirlEyebrows = Math.floor(Math.random() * this.girlEyebrowsCount) + 1;
    var randGirlLips = Math.floor(Math.random() * this.girlLipsCount) + 1;
    var randGirlEye = Math.floor(Math.random() * this.girlEyeCount) + 1;
    var randGirlBottom = Math.floor(Math.random() * this.girlBottomCount) + 1;
    var randGirlHair = Math.floor(Math.random() * this.girlHairCount) + 1;
    var randGirlTop = Math.floor(Math.random() * this.girlTopCount) + 1;
    var randGirlSocks = Math.floor(Math.random() * this.girlSocksCount) + 1;
    var randGirlShoes = Math.floor(Math.random() * this.girlShoesCount) + 1;

    var randBoySkin = Math.floor(Math.random() * this.boySkinCount) + 1;
    var randBoyAccessory = Math.floor(Math.random() * this.boyAccessoryCount) + 1;
    var randBoyEyebrows = Math.floor(Math.random() * this.boyEyebrowsCount) + 1;
    var randBoyLips = Math.floor(Math.random() * this.boyLipsCount) + 1;
    var randBoyEye = Math.floor(Math.random() * this.boyEyeCount) + 1;
    var randBoyBottom = Math.floor(Math.random() * this.boyBottomCount) + 1;
    var randBoyHair = Math.floor(Math.random() * this.boyHairCount) + 1;
    var randBoyTop = Math.floor(Math.random() * this.boyTopCount) + 1;

    //randomize boy eye colour
    var grand = Math.floor(Math.random() * this.col.length) + 1;
    var brand = Math.floor(Math.random() * this.col.length) + 1;
    var randGirlEyeColour = grand;
    var randBoyEyeColour = brand;

    this.setPiece('girl', randGirlSkin, 'Skin');
    this.setPiece('girl', randGirlEyebrows, 'Eyebrows');
    this.setPiece('girl', randGirlLips, 'Lips');
    this.setEyes('girl', randGirlEye, randGirlEyeColour);
    this.setPiece('girl', 0, 'Dress');
    this.setPiece('girl', randGirlSocks, 'Socks');
    this.setPiece('girl', randGirlShoes, 'Shoes');
    this.setPiece('girl', randGirlBottom, 'Bottom');
    this.setPiece('girl', randGirlTop, 'Top');
    this.setPiece('girl', randGirlHair, 'Hair');
    this.setPiece('girl', randGirlAccessory, 'Accessory');

    this.setPiece('boy', randBoySkin, 'Skin');
    this.setPiece('boy', randBoyEyebrows, 'Eyebrows');
    this.setPiece('boy', randBoyLips, 'Lips');
    this.setEyes('boy', randBoyEye, randBoyEyeColour);
    this.setPiece('boy', randBoyBottom, 'Bottom');
    this.setPiece('boy', randBoyTop, 'Top');
    this.setPiece('boy', randBoyHair, 'Hair');
    this.setPiece('boy', randBoyAccessory, 'Accessory');
}
playState.randomDown = function () {
    this.random_on.visible = true;
	this.clickSnd.play();
}

//also set default char
playState.resetChar = function () {
    if (this.reset_on!=undefined) this.reset_on.visible = false;
    this.setPiece('girl', 1, 'Skin');
    this.setPiece('girl', 1, 'Eyebrows');
    this.setPiece('girl', 1, 'Lips');
    this.setEyes('girl', 1, 1);
    this.setPiece('girl', 0, 'Top');
    this.setPiece('girl', 1, 'Hair');
    this.setPiece('girl', 0, 'Socks');
    this.setPiece('girl', 0, 'Bottom');
    this.setPiece('girl', 0, 'Shoes');
    this.setPiece('girl', 1, 'Dress');
    this.setPiece('girl', 0, 'Accessory');

    this.setPiece('boy', 1, 'Skin');
    this.setPiece('boy', 1, 'Eyebrows');
    this.setPiece('boy', 1, 'Lips');
    this.setEyes('boy', 1, 1);
    this.setPiece('boy', 1, 'Bottom');
    this.setPiece('boy', 1, 'Top');
    this.setPiece('boy', 1, 'Hair');
    this.setPiece('boy', 0, 'Accessory');
}
playState.resetDown = function () {
    this.reset_on.visible = true;
	this.clickSnd.play();
}

playState.togglePlaySound = function () {
    this.clickSnd.play();
    if (this.musicOn.visible) {
        this.musicOn.visible = false;
		this.musicOff.visible = true;
        this.game.audio.mute = true;
		oldaudio = false;
    } else {
        this.musicOn.visible = true;
		this.musicOff.visible = false;
        this.game.audio.mute = false;
		oldaudio = true;
    }
}

/*playState.musicUp = function () {
	
    if (this.musicOn.visible) {
        this.musicOn.visible = false;
        this.musicOff.visible = true;
		this.music.stop();
        window.play();
    } else {
        this.musicOn.visible = true;
        this.musicOff.visible = false;
		this.clickSnd.play();
		this.music.play();
        window.play();
    }
}
*/