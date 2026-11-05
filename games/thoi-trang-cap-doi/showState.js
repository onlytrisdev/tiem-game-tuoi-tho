var showState = new Kiwi.State('ShowState');
showState.create = function (boySkin, boyAccessory, boyEyebrows, boyLips, boyEye, boyEyeColour, boyBottom, boyHair, boyTop, girlAccessory, girlBottom, girlDress, girlEyebrows, girlEye, girlHair, girlLips, girlShoes, girlSkin, girlSocks, girlEyeColour, girlTop, bgNum, perc) {
    this.col = ['aqua', 'blue', 'green', 'honey', 'pink', 'tinto']

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

    this.boySkin = boySkin;
    this.boyAccessory = boyAccessory;
    this.boyEyebrows = boyEyebrows;
    this.boyLips = boyLips;
    this.boyEye = boyEye;
    this.boyEyeColour = boyEyeColour;
    this.boyBottom = boyBottom;
    this.boyHair = boyHair;
    this.boyTop = boyTop;

    this.bgNum = bgNum;

    this.bg = new Kiwi.GameObjects.Sprite(this, this.textures['bg' + bgNum], 0, 0);
    this.addChild(this.bg);

    /*var myTexture = this.textures.boy;
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
    }*/

    this['girlSkin' + this.girlSkin] = new Kiwi.GameObjects.Sprite(this, this.textures.girl2, 0, 0);
    this['girlSkin' + this.girlSkin].animation.switchTo('Skin');
    this['girlSkin' + this.girlSkin].animation.switchTo(this.girlSkin);
    var cell = this['girlSkin' + this.girlSkin].animation.currentAnimation.currentCell;
    this['girlSkin' + this.girlSkin].x = this.textures.girl2.cells[cell].orgX;
    this['girlSkin' + this.girlSkin].y = this.textures.girl2.cells[cell].orgY;
    this.addChild(this['girlSkin' + this.girlSkin]);

    this.girlUndies = new Kiwi.GameObjects.Sprite(this, this.textures.girl1, this.textures.girl1.cells[15].orgX, this.textures.girl1.cells[15].orgY);
    this.girlUndies.animation.switchTo(15);
    this.addChild(this.girlUndies);

    this['girlEyebrows' + this.girlEyebrows] = new Kiwi.GameObjects.Sprite(this, this.textures.girl1, 0, 0);
    this['girlEyebrows' + this.girlEyebrows].animation.switchTo('Eyebrows');
    this['girlEyebrows' + this.girlEyebrows].animation.switchTo(this.girlEyebrows);
    var cell = this['girlEyebrows' + this.girlEyebrows].animation.currentAnimation.currentCell;
    this['girlEyebrows' + this.girlEyebrows].x = this.textures.girl1.cells[cell].orgX;
    this['girlEyebrows' + this.girlEyebrows].y = this.textures.girl1.cells[cell].orgY;
    this.addChild(this['girlEyebrows' + this.girlEyebrows]);

    this['girlLips' + this.girlLips] = new Kiwi.GameObjects.Sprite(this, this.textures.girl2, 0, 0);
    this['girlLips' + this.girlLips].animation.switchTo('Lips');
    this['girlLips' + this.girlLips].animation.switchTo(this.girlLips);
    var cell = this['girlLips' + this.girlLips].animation.currentAnimation.currentCell;
    this['girlLips' + this.girlLips].x = this.textures.girl2.cells[cell].orgX;
    this['girlLips' + this.girlLips].y = this.textures.girl2.cells[cell].orgY;
    this.addChild(this['girlLips' + this.girlLips]);

    this['girlEye_' + this.girlEye + '_' + this.col[this.girlEyeColour - 1]] = new Kiwi.GameObjects.Sprite(this, this.textures.girl1, 0, 0);
    this['girlEye_' + this.girlEye + '_' + this.col[this.girlEyeColour - 1]].animation.switchTo('eyes_' + this.girlEye);
    this['girlEye_' + this.girlEye + '_' + this.col[this.girlEyeColour - 1]].animation.switchTo(this.girlEyeColour - 1);
    var cell = this['girlEye_' + this.girlEye + '_' + this.col[this.girlEyeColour - 1]].animation.currentAnimation.currentCell;
    this['girlEye_' + this.girlEye + '_' + this.col[this.girlEyeColour - 1]].x = this.textures.girl1.cells[cell].orgX;
    this['girlEye_' + this.girlEye + '_' + this.col[this.girlEyeColour - 1]].y = this.textures.girl1.cells[cell].orgY;
    this.addChild(this['girlEye_' + this.girlEye + '_' + this.col[this.girlEyeColour - 1]]);

    if (this.girlSocks != 0) {
        this['girlSocks' + this.girlSocks] = new Kiwi.GameObjects.Sprite(this, this.textures.girl2, 0, 0);
        this['girlSocks' + this.girlSocks].animation.switchTo('Socks');
        this['girlSocks' + this.girlSocks].animation.switchTo(this.girlSocks);
        var cell = this['girlSocks' + this.girlSocks].animation.currentAnimation.currentCell;
        this['girlSocks' + this.girlSocks].x = this.textures.girl2.cells[cell].orgX;
        this['girlSocks' + this.girlSocks].y = this.textures.girl2.cells[cell].orgY;
        this.addChild(this['girlSocks' + this.girlSocks]);
    }
    if (this.girlShoes != 0) {
        this['girlShoes' + this.girlShoes] = new Kiwi.GameObjects.Sprite(this, this.textures.girl2, 0, 0);
        this['girlShoes' + this.girlShoes].animation.switchTo('Shoes');
        this['girlShoes' + this.girlShoes].animation.switchTo(this.girlShoes);
        var cell = this['girlShoes' + this.girlShoes].animation.currentAnimation.currentCell;
        this['girlShoes' + this.girlShoes].x = this.textures.girl2.cells[cell].orgX;
        this['girlShoes' + this.girlShoes].y = this.textures.girl2.cells[cell].orgY;
        this.addChild(this['girlShoes' + this.girlShoes]);
    }
    
    if (this.girlDress != 0) {
        this['girlDress' + this.girlDress] = new Kiwi.GameObjects.Sprite(this, this.textures.girl1, 0, 0);
        this['girlDress' + this.girlDress].animation.switchTo('Dress');
        this['girlDress' + this.girlDress].animation.switchTo(this.girlDress);
        var cell = this['girlDress' + this.girlDress].animation.currentAnimation.currentCell;
        this['girlDress' + this.girlDress].x = this.textures.girl1.cells[cell].orgX;
        this['girlDress' + this.girlDress].y = this.textures.girl1.cells[cell].orgY;
        this.addChild(this['girlDress' + this.girlDress]);
    }
    if (this.girlBottom != 0) {
        this['girlBottom' + this.girlBottom] = new Kiwi.GameObjects.Sprite(this, this.textures.girl1, 0, 0);
        this['girlBottom' + this.girlBottom].animation.switchTo('Bottom');
        this['girlBottom' + this.girlBottom].animation.switchTo(this.girlBottom);
        var cell = this['girlBottom' + this.girlBottom].animation.currentAnimation.currentCell;
        this['girlBottom' + this.girlBottom].x = this.textures.girl1.cells[cell].orgX;
        this['girlBottom' + this.girlBottom].y = this.textures.girl1.cells[cell].orgY;
        this.addChild(this['girlBottom' + this.girlBottom]);
    }
    
    if (this.girlTop != 0) {
        this['girlTop' + this.girlTop] = new Kiwi.GameObjects.Sprite(this, this.textures.girl2, 0, 0);
        this['girlTop' + this.girlTop].animation.switchTo('Top');
        this['girlTop' + this.girlTop].animation.switchTo(this.girlTop);
        var cell = this['girlTop' + this.girlTop].animation.currentAnimation.currentCell;
        this['girlTop' + this.girlTop].x = this.textures.girl2.cells[cell].orgX;
        this['girlTop' + this.girlTop].y = this.textures.girl2.cells[cell].orgY;
        this.addChild(this['girlTop' + this.girlTop]);
    }

    this['girlHair' + this.girlHair] = new Kiwi.GameObjects.Sprite(this, this.textures.girl1, 0, 0);
    this['girlHair' + this.girlHair].animation.switchTo('Hair');
    this['girlHair' + this.girlHair].animation.switchTo(this.girlHair);
    var cell = this['girlHair' + this.girlHair].animation.currentAnimation.currentCell;
    this['girlHair' + this.girlHair].x = this.textures.girl1.cells[cell].orgX;
    this['girlHair' + this.girlHair].y = this.textures.girl1.cells[cell].orgY;
    this.addChild(this['girlHair' + this.girlHair]);
    
    if (this.girlAccessory != 0) {
        this['girlAccessory' + this.girlAccessory] = new Kiwi.GameObjects.Sprite(this, this.textures.girl1, 0, 0);
        this['girlAccessory' + this.girlAccessory].animation.switchTo('Accessory');
        this['girlAccessory' + this.girlAccessory].animation.switchTo(this.girlAccessory);
        var cell = this['girlAccessory' + this.girlAccessory].animation.currentAnimation.currentCell;
        this['girlAccessory' + this.girlAccessory].x = this.textures.girl1.cells[cell].orgX;
        this['girlAccessory' + this.girlAccessory].y = this.textures.girl1.cells[cell].orgY;
        this.addChild(this['girlAccessory' + this.girlAccessory]);
    }

    //boy

    this['boySkin' + this.boySkin] = new Kiwi.GameObjects.Sprite(this, this.textures.boy, 0, 0);
    this['boySkin' + this.boySkin].animation.switchTo('Skin');
    this['boySkin' + this.boySkin].animation.switchTo(this.boySkin);
    var cell = this['boySkin' + this.boySkin].animation.currentAnimation.currentCell;
    this['boySkin' + this.boySkin].x = this.textures.boy.cells[cell].orgX;
    this['boySkin' + this.boySkin].y = this.textures.boy.cells[cell].orgY;
    this.addChild(this['boySkin' + this.boySkin]);

    this.boyUndies = new Kiwi.GameObjects.Sprite(this, this.textures.boy, this.textures.boy.cells[11].orgX, this.textures.boy.cells[11].orgY);
    this.boyUndies.animation.switchTo(11);
    this.addChild(this.boyUndies);

    this['boyEyebrows' + this.boyEyebrows] = new Kiwi.GameObjects.Sprite(this, this.textures.boy, 0, 0);
    this['boyEyebrows' + this.boyEyebrows].animation.switchTo('Eyebrows');
    this['boyEyebrows' + this.boyEyebrows].animation.switchTo(this.boyEyebrows);
    var cell = this['boyEyebrows' + this.boyEyebrows].animation.currentAnimation.currentCell;
    this['boyEyebrows' + this.boyEyebrows].x = this.textures.boy.cells[cell].orgX;
    this['boyEyebrows' + this.boyEyebrows].y = this.textures.boy.cells[cell].orgY;
    this.addChild(this['boyEyebrows' + this.boyEyebrows]);

    this['boyLips' + this.boyLips] = new Kiwi.GameObjects.Sprite(this, this.textures.boy, 0, 0);
    this['boyLips' + this.boyLips].animation.switchTo('Lips');
    this['boyLips' + this.boyLips].animation.switchTo(this.boyLips);
    var cell = this['boyLips' + this.boyLips].animation.currentAnimation.currentCell;
    this['boyLips' + this.boyLips].x = this.textures.boy.cells[cell].orgX;
    this['boyLips' + this.boyLips].y = this.textures.boy.cells[cell].orgY;
    this.addChild(this['boyLips' + this.boyLips]);

    this['boyEye_' + this.boyEye + '_' + this.col[this.boyEyeColour-1]] = new Kiwi.GameObjects.Sprite(this, this.textures.boy, 0, 0);
    this['boyEye_' + this.boyEye + '_' + this.col[this.boyEyeColour - 1]].animation.switchTo('eyes_' + this.boyEye);
    this['boyEye_' + this.boyEye + '_' + this.col[this.boyEyeColour - 1]].animation.switchTo(this.boyEyeColour - 1);
    var cell = this['boyEye_' + this.boyEye + '_' + this.col[this.boyEyeColour - 1]].animation.currentAnimation.currentCell;
    this['boyEye_' + this.boyEye + '_' + this.col[this.boyEyeColour - 1]].x = this.textures.boy.cells[cell].orgX;
    this['boyEye_' + this.boyEye + '_' + this.col[this.boyEyeColour - 1]].y = this.textures.boy.cells[cell].orgY;
    this.addChild(this['boyEye_' + this.boyEye + '_' + this.col[this.boyEyeColour - 1]]);
    
    if (this.boyBottom != 0) {
        this['boyBottom' + this.boyBottom] = new Kiwi.GameObjects.Sprite(this, this.textures.boy, 0, 0);
        this['boyBottom' + this.boyBottom].animation.switchTo('Bottom');
        this['boyBottom' + this.boyBottom].animation.switchTo(this.boyBottom);
        var cell = this['boyBottom' + this.boyBottom].animation.currentAnimation.currentCell;
        this['boyBottom' + this.boyBottom].x = this.textures.boy.cells[cell].orgX;
        this['boyBottom' + this.boyBottom].y = this.textures.boy.cells[cell].orgY;
        this.addChild(this['boyBottom' + this.boyBottom]);
    }
    
    if (this.boyTop != 0) {
        this['boyTop' + this.boyTop] = new Kiwi.GameObjects.Sprite(this, this.textures.boy, 0, 0);
        this['boyTop' + this.boyTop].animation.switchTo('Top');
        this['boyTop' + this.boyTop].animation.switchTo(this.boyTop);
        var cell = this['boyTop' + this.boyTop].animation.currentAnimation.currentCell;
        this['boyTop' + this.boyTop].x = this.textures.boy.cells[cell].orgX;
        this['boyTop' + this.boyTop].y = this.textures.boy.cells[cell].orgY;
        this.addChild(this['boyTop' + this.boyTop]);
    }
    
    if (this.boyHair != 0) {
        this['boyHair' + this.boyHair] = new Kiwi.GameObjects.Sprite(this, this.textures.boy, 0, 0);
        this['boyHair' + this.boyHair].animation.switchTo('Hair');
        this['boyHair' + this.boyHair].animation.switchTo(this.boyHair);
        var cell = this['boyHair' + this.boyHair].animation.currentAnimation.currentCell;
        this['boyHair' + this.boyHair].x = this.textures.boy.cells[cell].orgX;
        this['boyHair' + this.boyHair].y = this.textures.boy.cells[cell].orgY;
        this.addChild(this['boyHair' + this.boyHair]);
    }

    if (this.boyAccessory != 0) {
        this['boyAccessory' + this.boyAccessory] = new Kiwi.GameObjects.Sprite(this, this.textures.boy, 0, 0);
        this['boyAccessory' + this.boyAccessory].animation.switchTo('Accessory');
        this['boyAccessory' + this.boyAccessory].animation.switchTo(this.boyAccessory);
        var cell = this['boyAccessory' + this.boyAccessory].animation.currentAnimation.currentCell;
        this['boyAccessory' + this.boyAccessory].x = this.textures.boy.cells[cell].orgX;
        this['boyAccessory' + this.boyAccessory].y = this.textures.boy.cells[cell].orgY;
        this.addChild(this['boyAccessory' + this.boyAccessory]);
    }

  /*  this.ggg = new Kiwi.GameObjects.Sprite(this, this.textures.ggg, -360, 550);
    this.addChild(this.ggg);
    this.ggg.transform.scaleX = 0.3;
    this.ggg.transform.scaleY = 0.3;
    this.ggg.input.onDown.add(this.gggUp, this);*/

  /*  this.printBtn = new Kiwi.GameObjects.Sprite(this, this.textures.showPrint, 751, 627, true);
    this.addChild(this.printBtn);
    this.printBtn.input.onDown.add(this.printImg, this);

    this.saveBtn = new Kiwi.GameObjects.Sprite(this, this.textures.showSave, 751, 547, true);
    this.addChild(this.saveBtn);
    this.saveBtn.input.onUp.add(this.saveImg, this);*/

    this.backBtn = new Kiwi.GameObjects.Sprite(this, this.textures.showBack, 0, 604, true);
    this.addChild(this.backBtn);
    this.backBtn.input.onUp.add(this.goBack, this);

    /*this.avatarBtn = new Kiwi.GameObjects.Sprite(this, this.textures.showAvatar, 751, 465, true);
    this.addChild(this.avatarBtn);
    this.avatarBtn.input.onUp.add(this.saveAvatar, this);*/

    this.showTitle = new Kiwi.GameObjects.Sprite(this, this.textures.showTitle, 0, 0, true);
    this.addChild(this.showTitle);
	
	this.clickSnd = new Kiwi.Sound.Audio(this.game, 'clickSnd', 1, false);
}



showState.printImg = function () {

	this.clickSnd.play();
    this.printBtn.visible = false;
    this.saveBtn.visible = false;
    this.backBtn.visible = false;
    //this.avatarBtn.visible = false;

    /*var dataUrl = this.game.stage.canvas.toDataURL("image/png");
	
	var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>'
    windowContent += '<img src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    
	var printWin = window.open();
    var printWinDoc = printWin.document;
    printWinDoc.write(windowContent);
    printWinDoc.close();
	
    printWin.focus();
    printWin.print();
    printWin.close();*/
	printPage();

    
    //this.avatarBtn.visible = true;
}

showState.saveImg = function () {
	this.clickSnd.play();
    this.printBtn.visible = false;
    this.saveBtn.visible = false;
    this.backBtn.visible = false;
    //this.avatarBtn.visible = false;

   // var img = this.game.stage.canvas.toDataURL("image/octet-stream");
	//window.location.href = img;
	createImage();

  //  var img = this.game.stage.canvas.toDataURL("image/png");
  //  document.write('<img src="' + img + '"/>');
}

showState.saveAvatar = function () {
    console.log('avatar');
}

showState.gggUp = function () {
    window.open("http://game.com");
	this.clickSnd.play();
}

showState.goBack = function () {
//	GameAPI.GameBreak.request(pauseGame, resumeGame);
	this.clickSnd.play();
    this.game.states.switchState("PlayState", playState, null, {
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
        bgNum: this.bgNum
    });
}


