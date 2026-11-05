window.UI=window.UI||{};
window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"GameView":"resource/eui_skins/GameView.exml","GBattle":"resource/eui_skins/GBattle.exml","UIBattle":"resource/UI/UIBattle/UIBattle.exml","GActor":"resource/eui_skins/GActor.exml","GEffect":"resource/eui_skins/GActor.exml","GTank":"resource/eui_skins/GTank.exml","GBullet":"resource/eui_skins/GBullet.exml","UINewTank":"resource/UI/UINewTank/UINewTank.exml","GZombie":"resource/eui_skins/GZombie.exml","UIText":"resource/UI/UICommon/UIText.exml","UILuckyWheel":"resource/UI/UILuckyWheel/UILuckyWheel.exml","UISignDay":"resource/UI/UISign/UISignDay.exml","UIOfflineReward":"resource/UI/UIOfflineReward/UIOfflineReward.exml","UIBank":"resource/UI/UIBank/UIBank.exml","UISpdUp":"resource/UI/UISpdUp/UISpdUp.exml","UIShop":"resource/UI/UIShop/UIShop.exml","UIShop_Cell":"resource/UI/UIShop/UIShop_Cell.exml","UIRank":"resource/UI/UIRank/UIRank.exml","UIAutoCompose":"resource/UI/UIAutoCompose/UIAutoCompose.exml","UIDungeon":"resource/UI/UIDungeon/UIDungeon.exml","UIDungeon_Cell":"resource/UI/UIDungeon/UIDungeon_Cell.exml","UISliderHP":"resource/UI/UICommon/UISliderHP.exml","GFlyIcon":"resource/eui_skins/GFlyIcon.exml","UIPopDialog":"resource/UI/UICommon/UIPopDialog.exml","UISetting":"resource/UI/UISetting/UISetting.exml","UIPopTips":"resource/UI/UICommon/UIPopTips.exml","UIPause":"resource/UI/UIBattle/UIPause.exml","GTails":"resource/eui_skins/GTails.exml","UIShop_Cell2":"resource/UI/UIShop/UIShop_Cell2.exml","UIFlyBoxReward":"resource/UI/UIFlyBoxReward/UIFlyBoxReward.exml","UIBuffAction":"resource/UI/UIBattle/UIBuffAction.exml","UIBuffIcon":"resource/UI/UIBattle/UIBuffIcon.exml","UISellPopDialog":"resource/UI/UICommon/UISellPopDialog.exml","UIFlyBox":"resource/UI/UIBattle/UIFlyBox.exml","GRewardBox":"resource/eui_skins/GRewardBox.exml","UIBuyDiamond":"resource/UI/UIBuyDiamond/UIBuyDiamond.exml","UIFreeTankUp":"resource/UI/UIFreeTankUp/UIFreeTankUp.exml","UIGuideView":"resource/UI/Guide/UIGuideView.exml","UIDungeonReward":"resource/UI/UIDungeon/UIDungeonReward.exml","UIDungeonBattle":"resource/UI/UIDungeon/UIDungeonBattle.exml","UIToggle":"resource/UI/UICommon/UIToggle.exml","UILoading":"resource/UI/UILoading.exml","UIPageAd":"resource/UI/UINativeAd/UIPageAd.exml","UIBannerAd":"resource/UI/UINativeAd/UIBannerAd.exml","UINative_1_Ad":"resource/UI/UINativeAd/UINative_1_Ad.exml","UITask":"resource/UI/UITask/UITask.exml","UITask_Cell":"resource/UI/UITask/UITask_Cell.exml","UIAchieve_Cell":"resource/UI/UITask/UIAchieve_Cell.exml","UIPopReward":"resource/UI/UITask/UIPopReward.exml","UIAD_Top":"resource/UI/UINativeAd/UIAD_Top.exml","UIHts":"resource/UI/UIHts/UIHts.exml","UILadder":"resource/UI/UILadder/UILadder.exml","UIFreeOrBuyTank":"resource/UI/UIFreeOrBuyTank/UIFreeOrBuyTank.exml","UIAlert":"resource/UI/UICommon/UIAlert.exml","UIHts_Top":"resource/UI/UIHts/UIHts_Top.exml","UIEnterDungeon":"resource/UI/UIDungeon/UIEnterDungeon.exml","UILogin":"resource/UI/UILogin/UILogin.exml","UIBulletScreen":"resource/UI/UIBulletScreen/UIBulletScreen.exml","UIDownload":"resource/UI/UIDownload/UIDownload.exml","UILuckyBag":"resource/UI/UILuckyBag/UILuckyBag.exml","UIActiveBag":"resource/UI/UIActiveBag/UIActiveBag.exml","UILuckyWheel_51Activity":"resource/UI/UI_51Activity/UILuckyWheel_51Activity.exml","UIBoxIcon":"resource/UI/UI_51Activity/UIBoxIcon.exml","UISkinConversion":"resource/UI/UI_51Activity/UISkinConversion.exml","UIADBox":"resource/UI/UIADBox/UIADBox.exml"};generateEUI.paths['resource/beui_skins/Btn51Skin.exml'] = window.Btn51Skin = (function (_super) {
	__extends(Btn51Skin, _super);
	function Btn51Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 128;
		this.width = 128;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",5),
					new eui.SetProperty("_Image1","bottom",5),
					new eui.SetProperty("_Image1","right",5),
					new eui.SetProperty("_Image1","left",5)
				])
		];
	}
	var _proto = Btn51Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.51_skin_png";
		t.top = 0;
		return t;
	};
	return Btn51Skin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnBack.exml'] = window.UI.BtnBack = (function (_super) {
	__extends(BtnBack, _super);
	function BtnBack() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 80;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 77;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","left",0),
					new eui.SetProperty("_Image1","right",0),
					new eui.SetProperty("_Image1","top",0),
					new eui.SetProperty("_Image1","bottom",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","scaleX",0.9),
					new eui.SetProperty("_Image1","scaleY",0.9),
					new eui.SetProperty("_Image1","left",5),
					new eui.SetProperty("_Image1","right",5),
					new eui.SetProperty("_Image1","top",5),
					new eui.SetProperty("_Image1","bottom",5)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnBack.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "ui_json.Return_png";
		t.y = -1;
		return t;
	};
	return BtnBack;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnBagFree.exml'] = window.BtnBagFree = (function (_super) {
	__extends(BtnBagFree, _super);
	function BtnBagFree() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",5),
					new eui.SetProperty("_Image1","bottom",5),
					new eui.SetProperty("_Image1","right",5),
					new eui.SetProperty("_Image1","left",5),
					new eui.SetProperty("labelDisplay","size",36)
				])
		];
	}
	var _proto = BtnBagFree.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button green_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 38;
		t.stroke = 0.8;
		t.text = "Nhận";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -8.5;
		t.width = 230;
		return t;
	};
	return BtnBagFree;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnBagVideo.exml'] = window.BtnBagVideo = (function (_super) {
	__extends(BtnBagVideo, _super);
	function BtnBagVideo() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",5),
					new eui.SetProperty("_Image1","bottom",5),
					new eui.SetProperty("_Image1","right",5),
					new eui.SetProperty("_Image1","left",5),
					new eui.SetProperty("labelDisplay","size",36)
				])
		];
	}
	var _proto = BtnBagVideo.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button green_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "video_png";
		t.x = 53;
		t.y = 36;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 50;
		t.size = 38;
		t.stroke = 1.5;
		t.text = "Nhận luôn";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 110;
		t.y = 36;
		return t;
	};
	return BtnBagVideo;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnBlue.exml'] = window.BtnBlue = (function (_super) {
	__extends(BtnBlue, _super);
	function BtnBlue() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","left",10),
					new eui.SetProperty("_Image1","scale9Grid",new egret.Rectangle(32,12,194,62)),
					new eui.SetProperty("labelDisplay","left",0)
				])
		];
	}
	var _proto = BtnBlue.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button blue_png";
		t.top = 0;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 60;
		t.left = 0;
		t.right = 0;
		t.size = 43;
		t.text = "Giúp bạn bè";
		t.textAlign = "center";
		t.textColor = 0xeaeaea;
		t.verticalAlign = "middle";
		t.verticalCenter = -6.5;
		return t;
	};
	return BtnBlue;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnBlueVideo.exml'] = window.UI.BtnBlueVideo = (function (_super) {
	__extends(BtnBlueVideo, _super);
	function BtnBlueVideo() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 300;
		this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image2","",2,"iconDisplay")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = BtnBlueVideo.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 10;
		t.height = 137;
		t.left = 10;
		t.right = 10;
		t.source = "ui_json.Button blue_png";
		t.top = 10;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button blue_png";
		t.top = 0;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "video_png";
		t.x = 53;
		t.y = 37;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = 36.5;
		t.text = "Miễn phí";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 37;
		return t;
	};
	return BtnBlueVideo;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnBlueVideoStar.exml'] = window.UI.BtnBlueVideoStar = (function (_super) {
	__extends(BtnBlueVideoStar, _super);
	function BtnBlueVideoStar() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 137;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","left",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnBlueVideoStar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button blue_png";
		t.top = 0;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 53;
		t.source = "video_png";
		t.verticalCenter = -6.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 7.5;
		t.source = "Stars_png";
		t.verticalCenter = -6;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = 97.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "+5";
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		t.width = 101;
		return t;
	};
	return BtnBlueVideoStar;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnBoxVideo.exml'] = window.BtnBoxVideo = (function (_super) {
	__extends(BtnBoxVideo, _super);
	function BtnBoxVideo() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image3_i(),this.labelDisplay_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image2","",2,"_Image3")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = BtnBoxVideo.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 5;
		t.height = 137;
		t.left = 5;
		t.right = 5;
		t.source = "ui_json.Button blue_png";
		t.top = 5;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button blue_png";
		t.top = 0;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.source = "video_png";
		t.x = 53;
		t.y = 37;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Arial";
		t.height = 50;
		t.horizontalCenter = 36;
		t.size = 35;
		t.stroke = 0.6;
		t.text = "Nhận luôn";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 35;
		return t;
	};
	return BtnBoxVideo;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnBuleStar.exml'] = window.BtnBuleStar = (function (_super) {
	__extends(BtnBuleStar, _super);
	function BtnBuleStar() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._BitmapLabel1_i(),this.labelDisplay_i()];
	}
	var _proto = BtnBuleStar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "Button blue_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.left = 44;
		t.source = "Stars_png";
		t.verticalCenter = -6.5;
		t.width = 59;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.left = 84;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "5";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 11.5;
		t.width = 166;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Miễn phí";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 172;
		t.x = 146;
		t.y = 37;
		return t;
	};
	return BtnBuleStar;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnBulletScreen.exml'] = window.BtnBulletScreen = (function (_super) {
	__extends(BtnBulletScreen, _super);
	function BtnBulletScreen() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "check";
		this.height = 100;
		this.width = 100;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("check",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("uncheck",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = BtnBulletScreen.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "ui_json.UnCheckBulletScreen_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "ui_json.CheckBulletScreen_png";
		t.verticalCenter = 0;
		return t;
	};
	return BtnBulletScreen;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnCancel.exml'] = window.UI.BtnCancel = (function (_super) {
	__extends(BtnCancel, _super);
	function BtnCancel() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 137;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","x",70)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","left",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnCancel.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 34;
		t.left = 17;
		t.right = 17;
		t.scale9Grid = new egret.Rectangle(17,14,51,23);
		t.source = "EXPB_png";
		t.top = 26;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.alpha = 0.5;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 50;
		t.size = 37;
		t.text = "ok";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 166;
		t.x = 67;
		t.y = 39;
		return t;
	};
	return BtnCancel;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnCloseX.exml'] = window.UI.BtnCloseX = (function (_super) {
	__extends(BtnCloseX, _super);
	function BtnCloseX() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 150;
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","scaleX",0.8),
					new eui.SetProperty("_Image2","scaleY",0.8)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnCloseX.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "close_png";
		t.verticalCenter = 0;
		return t;
	};
	return BtnCloseX;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnDEBUG.exml'] = window.UI.BtnDEBUG = (function (_super) {
	__extends(BtnDEBUG, _super);
	function BtnDEBUG() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 100;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 100;
		this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","left",10),
					new eui.SetProperty("iconDisplay","right",10),
					new eui.SetProperty("iconDisplay","top",10),
					new eui.SetProperty("iconDisplay","bottom",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnDEBUG.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bottom_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return BtnDEBUG;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnGreen.exml'] = window.UI.BtnGreen = (function (_super) {
	__extends(BtnGreen, _super);
	function BtnGreen() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","left",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnGreen.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button green_png";
		t.top = 0;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = 0;
		t.text = "ok";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -4.5;
		t.width = 166;
		return t;
	};
	return BtnGreen;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnGreen1.exml'] = window.BtnGreen1 = (function (_super) {
	__extends(BtnGreen1, _super);
	function BtnGreen1() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("labelDisplay","verticalCenter",-6.5),
					new eui.SetProperty("labelDisplay","left",0),
					new eui.SetProperty("labelDisplay","right",0),
					new eui.SetProperty("labelDisplay","size",38)
				])
		];
	}
	var _proto = BtnGreen1.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button green_png";
		t.top = 0;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 82;
		t.left = 0;
		t.right = 0;
		t.size = 43;
		t.stroke = 1.5;
		t.text = "Tải xuống";
		t.textAlign = "center";
		t.textColor = 0xeaeaea;
		t.verticalAlign = "middle";
		t.verticalCenter = -6.5;
		return t;
	};
	return BtnGreen1;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnGreen2.exml'] = window.BtnGreen2 = (function (_super) {
	__extends(BtnGreen2, _super);
	function BtnGreen2() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","scaleX",0.9),
					new eui.SetProperty("_Image1","scaleY",0.9),
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","left",10)
				])
		];
	}
	var _proto = BtnGreen2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 1;
		t.left = 0;
		t.right = 0;
		t.source = "Button green_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 36;
		t.horizontalCenter = 0;
		t.scaleX = 1.55;
		t.scaleY = 1.55;
		t.text = "Nhận được";
		t.verticalCenter = -6.5;
		t.width = 73;
		return t;
	};
	return BtnGreen2;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnGreen3.exml'] = window.BtnGreen3 = (function (_super) {
	__extends(BtnGreen3, _super);
	function BtnGreen3() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","left",0),
					new eui.SetProperty("_Image1","right",1),
					new eui.SetProperty("_Image1","top",0),
					new eui.SetProperty("_Image1","bottom",2)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","scaleX",0.9),
					new eui.SetProperty("_Image1","scaleY",0.9),
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("_Image1","verticalCenter",0)
				])
		];
	}
	var _proto = BtnGreen3.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(84,17,130,49);
		t.source = "ui_json.ShareBtn_png";
		return t;
	};
	return BtnGreen3;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnGreenSetting.exml'] = window.UI.BtnGreenSetting = (function (_super) {
	__extends(BtnGreenSetting, _super);
	function BtnGreenSetting() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","left",5),
					new eui.SetProperty("_Image1","right",5),
					new eui.SetProperty("_Image1","top",5),
					new eui.SetProperty("_Image1","bottom",5),
					new eui.SetProperty("_Image2","horizontalCenter",132.5),
					new eui.SetProperty("_Image2","scaleX",0.9),
					new eui.SetProperty("_Image2","scaleY",0.9),
					new eui.SetProperty("_Image2","verticalCenter",-8),
					new eui.SetProperty("iconDisplay","scaleX",0.9),
					new eui.SetProperty("iconDisplay","scaleY",0.9),
					new eui.SetProperty("iconDisplay","horizontalCenter",135),
					new eui.SetProperty("iconDisplay","verticalCenter",-8)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnGreenSetting.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(119,48,57,27);
		t.source = "Button green_png";
		t.top = 0;
		t.width = 300;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = -30.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "Âm thanh";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -4.5;
		t.width = 170;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76.55;
		t.horizontalCenter = 133.5;
		t.source = "bottom_png";
		t.verticalCenter = -8;
		t.width = 76.55;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.75;
		t.horizontalCenter = 133;
		t.source = "voice icon_png";
		t.verticalCenter = -7.5;
		t.width = 55.68;
		return t;
	};
	return BtnGreenSetting;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnGreenStar.exml'] = window.UI.BtnGreenStar = (function (_super) {
	__extends(BtnGreenStar, _super);
	function BtnGreenStar() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._BitmapLabel1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","left",10),
					new eui.SetProperty("_BitmapLabel1","scaleX",1),
					new eui.SetProperty("_BitmapLabel1","scaleY",1),
					new eui.SetProperty("_BitmapLabel1","text","5")
				])
		];
	}
	var _proto = BtnGreenStar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button green_png";
		t.top = 0;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.source = "Stars_png";
		t.width = 59;
		t.x = 44;
		t.y = 36;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "5";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 166;
		t.x = 84;
		t.y = 50;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = 36.5;
		t.text = "Miễn phí";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 37;
		return t;
	};
	return BtnGreenStar;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnGreenStarRight.exml'] = window.UI.BtnGreenStarRight = (function (_super) {
	__extends(BtnGreenStarRight, _super);
	function BtnGreenStarRight() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 137;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","left",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnGreenStarRight.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(83,17,130,103);
		t.source = "Button green_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.source = "Stars_png";
		t.verticalCenter = -7.5;
		t.width = 59;
		t.x = 179.2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.right = 131;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "123";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 166;
		t.y = 35;
		return t;
	};
	return BtnGreenStarRight;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnIcon.exml'] = window.UI.BtnIcon = (function (_super) {
	__extends(BtnIcon, _super);
	function BtnIcon() {
		_super.call(this);
		this.skinParts = ["iconDisplay"];
		
		this.height = 100;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 100;
		this.elementsContent = [this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","left",10),
					new eui.SetProperty("iconDisplay","right",10),
					new eui.SetProperty("iconDisplay","top",10),
					new eui.SetProperty("iconDisplay","bottom",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnIcon.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bottom_png";
		t.top = 0;
		return t;
	};
	return BtnIcon;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnIconLabel.exml'] = window.UI.BtnIconLabel = (function (_super) {
	__extends(BtnIconLabel, _super);
	function BtnIconLabel() {
		_super.call(this);
		this.skinParts = ["iconDisplay"];
		
		this.height = 100;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 100;
		this.elementsContent = [this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","right",20),
					new eui.SetProperty("iconDisplay","top",10),
					new eui.SetProperty("iconDisplay","bottom",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnIconLabel.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bottom_png";
		t.top = 0;
		return t;
	};
	return BtnIconLabel;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnIconLeft.exml'] = window.UI.BtnIconLeft = (function (_super) {
	__extends(BtnIconLeft, _super);
	function BtnIconLeft() {
		_super.call(this);
		this.skinParts = ["iconDisplay"];
		
		this.height = 100;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 100;
		this.elementsContent = [this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","left",0),
					new eui.SetProperty("iconDisplay","right",10),
					new eui.SetProperty("iconDisplay","top",0),
					new eui.SetProperty("iconDisplay","bottom",0)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnIconLeft.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bottom_png";
		t.top = 0;
		return t;
	};
	return BtnIconLeft;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnIconRedPoint.exml'] = window.UI.BtnIconRedPoint = (function (_super) {
	__extends(BtnIconRedPoint, _super);
	function BtnIconRedPoint() {
		_super.call(this);
		this.skinParts = ["shining","iconDisplay","image"];
		
		this.height = 100;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 100;
		this.shining_i();
		this.elementsContent = [this.iconDisplay_i(),this.image_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","left",10),
					new eui.SetProperty("iconDisplay","right",10),
					new eui.SetProperty("iconDisplay","top",10),
					new eui.SetProperty("iconDisplay","bottom",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
	}
	var _proto = BtnIconRedPoint.prototype;

	_proto.shining_i = function () {
		var t = new egret.tween.TweenGroup();
		this.shining = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object4_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bottom_png";
		t.top = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.right = 0;
		t.source = "red dot_png";
		t.top = 0;
		return t;
	};
	return BtnIconRedPoint;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnIconRedPointLeft.exml'] = window.UI.BtnIconRedPointLeft = (function (_super) {
	__extends(BtnIconRedPointLeft, _super);
	function BtnIconRedPointLeft() {
		_super.call(this);
		this.skinParts = ["shining","iconDisplay","image"];
		
		this.height = 100;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 100;
		this.shining_i();
		this.elementsContent = [this.iconDisplay_i(),this.image_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","left",0),
					new eui.SetProperty("iconDisplay","right",10),
					new eui.SetProperty("iconDisplay","top",5),
					new eui.SetProperty("iconDisplay","bottom",5),
					new eui.SetProperty("image","top",5),
					new eui.SetProperty("image","right",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
	}
	var _proto = BtnIconRedPointLeft.prototype;

	_proto.shining_i = function () {
		var t = new egret.tween.TweenGroup();
		this.shining = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object3_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bottom_png";
		t.top = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.right = 0;
		t.source = "red dot_png";
		t.top = 0;
		return t;
	};
	return BtnIconRedPointLeft;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnLabelBlueVideo.exml'] = window.BtnLabelBlueVideo = (function (_super) {
	__extends(BtnLabelBlueVideo, _super);
	function BtnLabelBlueVideo() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image2","",2,"iconDisplay"),
					new eui.SetProperty("labelDisplay","size",33)
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = BtnLabelBlueVideo.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 10;
		t.height = 137;
		t.left = 10;
		t.right = 10;
		t.source = "ui_json.Button blue_png";
		t.top = 10;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button blue_png";
		t.top = 0;
		t.width = 300;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "video_png";
		t.x = 53;
		t.y = 37;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 50;
		t.horizontalCenter = 36.5;
		t.stroke = 1.1;
		t.text = "Thử thách";
		t.verticalAlign = "middle";
		t.x = 150;
		t.y = 37;
		return t;
	};
	return BtnLabelBlueVideo;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnLuckyBlueVideo.exml'] = window.BtnLuckyBlueVideo = (function (_super) {
	__extends(BtnLuckyBlueVideo, _super);
	function BtnLuckyBlueVideo() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.iconDisplay_i(),this._BitmapLabel1_i(),this.labelDisplay_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_BitmapLabel1","text","")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","left",10),
					new eui.SetProperty("_BitmapLabel1","scaleX",1),
					new eui.SetProperty("_BitmapLabel1","scaleY",1),
					new eui.SetProperty("_BitmapLabel1","text","")
				])
		];
	}
	var _proto = BtnLuckyBlueVideo.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "Button blue_png";
		t.top = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "video_png";
		t.x = 53;
		t.y = 37;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 166;
		t.x = 84;
		t.y = 50;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = 36.5;
		t.text = "Miễn phí";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 37;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.29;
		t.source = "ui_json.shopFreeLucky_png";
		t.width = 88;
		t.x = 202;
		t.y = 2;
		return t;
	};
	return BtnLuckyBlueVideo;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnMainBuy.exml'] = window.UI.BtnMainBuy = (function (_super) {
	__extends(BtnMainBuy, _super);
	function BtnMainBuy() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay","gTank"];
		
		this.height = 137;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 300;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","width",80),
					new eui.SetProperty("iconDisplay","height",80),
					new eui.SetProperty("iconDisplay","horizontalCenter",-87),
					new eui.SetProperty("iconDisplay","verticalCenter",-6.5),
					new eui.SetProperty("_Group1","scaleX",0.9),
					new eui.SetProperty("_Group1","scaleY",0.9)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = BtnMainBuy.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.anchorOffsetX = 0;
		t.height = 137;
		t.horizontalCenter = -1.5;
		t.verticalCenter = 0;
		t.width = 350;
		t.elementsContent = [this._Image1_i(),this.iconDisplay_i(),this.labelDisplay_i(),this._Image2_i(),this.gTank_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetY = 0;
		t.height = 116;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.Button green_png";
		t.verticalCenter = 0;
		t.width = 283;
		t.x = 37;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 47.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 22;
		t.x = 150;
		t.y = 69;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new UIText();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.textAlign = "center";
		t.width = 218.75;
		t.x = 129;
		t.y = 49;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(14,16,63,60);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bottom2_png";
		t.x = 45;
		t.y = 20;
		return t;
	};
	_proto.gTank_i = function () {
		var t = new eui.Group();
		this.gTank = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 90;
		t.bottom = 47;
		t.height = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 90;
		t.x = 79;
		return t;
	};
	return BtnMainBuy;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnNativeAD.exml'] = window.BtnNativeAD = (function (_super) {
	__extends(BtnNativeAD, _super);
	function BtnNativeAD() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",5),
					new eui.SetProperty("_Image1","bottom",5),
					new eui.SetProperty("_Image1","right",5),
					new eui.SetProperty("_Image1","left",5),
					new eui.SetProperty("labelDisplay","size",30)
				])
		];
	}
	var _proto = BtnNativeAD.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button blue_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 39;
		t.horizontalCenter = 0.5;
		t.size = 33;
		t.stroke = 0.5;
		t.text = "Xem video";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -8;
		return t;
	};
	return BtnNativeAD;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnNewVideo.exml'] = window.BtnNewVideo = (function (_super) {
	__extends(BtnNewVideo, _super);
	function BtnNewVideo() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","size",35),
					new eui.SetProperty("labelDisplay","stroke",1.3),
					new eui.SetProperty("_Image2","scaleX",1),
					new eui.SetProperty("_Image2","scaleY",1)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","left",10),
					new eui.SetProperty("labelDisplay","size",30),
					new eui.SetProperty("_Image2","scaleX",0.95),
					new eui.SetProperty("_Image2","scaleY",0.95)
				])
		];
	}
	var _proto = BtnNewVideo.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button blue_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 35;
		t.stroke = 1.1;
		t.text = "Thử thách";
		t.verticalAlign = "middle";
		t.verticalCenter = -6.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 22;
		t.anchorOffsetY = 22;
		t.height = 44;
		t.right = 24;
		t.source = "ui_json.btnADIcon_png";
		t.width = 44;
		t.y = 30;
		return t;
	};
	return BtnNewVideo;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnNewVidoeStar.exml'] = window.BtnNewVidoeStar = (function (_super) {
	__extends(BtnNewVidoeStar, _super);
	function BtnNewVidoeStar() {
		_super.call(this);
		this.skinParts = ["labelDisplay0"];
		
		this.currentState = "up";
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay0_i(),this._Image3_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","left",10)
				])
		];
	}
	var _proto = BtnNewVidoeStar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button blue_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -21.5;
		t.source = "Stars_png";
		t.verticalCenter = -5.5;
		return t;
	};
	_proto.labelDisplay0_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay0 = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = 68.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "+5";
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		t.width = 101;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 22;
		t.anchorOffsetY = 22;
		t.height = 44;
		t.right = 24;
		t.source = "ui_json.btnADIcon_png";
		t.width = 44;
		t.y = 30;
		return t;
	};
	return BtnNewVidoeStar;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnNoBg.exml'] = window.BtnNoBg = (function (_super) {
	__extends(BtnNoBg, _super);
	function BtnNoBg() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 137;
		this.width = 300;
		this.elementsContent = [this.labelDisplay_i()];
	}
	var _proto = BtnNoBg.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 1.3;
		t.text = "ok";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 39;
		return t;
	};
	return BtnNoBg;
})(eui.Skin);generateEUI.paths['resource/beui_skins/BtnShopBuy.exml'] = window.UI.BtnShopBuy = (function (_super) {
	__extends(BtnShopBuy, _super);
	function BtnShopBuy() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 97;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 225;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","left",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnShopBuy.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "Button purple_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.left = 13;
		t.source = "money_png";
		t.verticalCenter = -1.5;
		t.width = 60;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new UIText();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.left = 75;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = -2.5;
		t.width = 165;
		return t;
	};
	return BtnShopBuy;
})(eui.Skin);generateEUI.paths['resource/beui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","Button_png"),
					new eui.SetProperty("_Image1","left",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(14,16,63,60);
		t.source = "Button_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/Freeflag.exml'] = window.FreeFlag = (function (_super) {
	__extends(FreeFlag, _super);
	function FreeFlag() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 31.14;
		this.width = 38.28;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = FreeFlag.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.14;
		t.source = "ui_json.redslider_2_png";
		t.width = 38.28;
		t.x = 0;
		t.y = 1.95;
		return t;
	};
	return FreeFlag;
})(eui.Skin);generateEUI.paths['resource/beui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/ToutiaoShare.exml'] = window.ToutiaoShare = (function (_super) {
	__extends(ToutiaoShare, _super);
	function ToutiaoShare() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 77;
		this.width = 178.67;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i()];
	}
	var _proto = ToutiaoShare.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(7,2,45,13);
		t.source = "ui_json.freepopo_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 51;
		t.right = 2.6699999999999875;
		t.size = 24;
		t.stroke = 0.5;
		t.text = "Chia sẻ +10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 175;
		t.y = 2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.61;
		t.right = 2.6699999999999875;
		t.rotation = 360;
		t.source = "ui_json.Stars_png";
		t.width = 37;
		t.y = 11;
		return t;
	};
	return ToutiaoShare;
})(eui.Skin);generateEUI.paths['resource/beui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/beui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BtnGreenStar.exml'] = window.UI.BtnGreenStar = (function (_super) {
	__extends(BtnGreenStar, _super);
	function BtnGreenStar() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 137;
		this.minHeight = 137;
		this.minWidth = 300;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._BitmapLabel1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","top",10),
					new eui.SetProperty("_Image1","bottom",10),
					new eui.SetProperty("_Image1","right",10),
					new eui.SetProperty("_Image1","left",10)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnGreenStar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.source = "ui_json.Button green_png";
		t.top = 0;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.left = 44;
		t.source = "Stars_png";
		t.verticalCenter = -6.5;
		t.width = 59;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.left = 84;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "5";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 11.5;
		t.width = 166;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = 33.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Miễn phí";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 145;
		t.y = 38;
		return t;
	};
	return BtnGreenStar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GActor.exml'] = window.GActorSkin = (function (_super) {
	__extends(GActorSkin, _super);
	function GActorSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1;
		this.width = 1;
	}
	var _proto = GActorSkin.prototype;

	return GActorSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameView.exml'] = window.GameViewSkin = (function (_super) {
	__extends(GameViewSkin, _super);
	function GameViewSkin() {
		_super.call(this);
		this.skinParts = ["uiLayer","topLayer","offlineLayer","imgBlackMark"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.uiLayer_i(),this.topLayer_i(),this.offlineLayer_i(),this.imgBlackMark_i()];
	}
	var _proto = GameViewSkin.prototype;

	_proto.uiLayer_i = function () {
		var t = new eui.Group();
		this.uiLayer = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.topLayer_i = function () {
		var t = new eui.Group();
		this.topLayer = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.offlineLayer_i = function () {
		var t = new eui.Group();
		this.offlineLayer = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.imgBlackMark_i = function () {
		var t = new eui.Image();
		this.imgBlackMark = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	return GameViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GBattle.exml'] = window.GBattleSkin = (function (_super) {
	__extends(GBattleSkin, _super);
	function GBattleSkin() {
		_super.call(this);
		this.skinParts = ["bg","imgAlert","gEnemyView","gEnemyRedView","gHPLayer","imgAnim","gTouchAnim","ui","gBulletTails","gBulletView","slot0","slot1","slot2","slot3","slot4","slot5","slot6","slot7","slot8","slot9","slot10","slot11","slot12","slot13","slot14","tip0","tip1","tip2","tip3","tip4","tip5","tip6","tip7","tip8","tip9","tip10","tip11","tip12","tip13","tip14","gTowersView","gFlyIcons","gFlyIconsTop","gTouchPlant"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.imgAlert_i(),this._Image1_i(),this.gEnemyView_i(),this.gEnemyRedView_i(),this.gHPLayer_i(),this.gTouchAnim_i(),this.ui_i(),this.gBulletTails_i(),this.gBulletView_i(),this.gTowersView_i(),this.gFlyIcons_i(),this.gFlyIconsTop_i(),this._UIPause1_i(),this.gTouchPlant_i()];
	}
	var _proto = GBattleSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetY = 0;
		t.bottom = 375;
		t.fillMode = "repeat";
		t.height = 3000;
		t.horizontalCenter = 0;
		t.source = "Middle_png";
		t.width = 750;
		return t;
	};
	_proto.imgAlert_i = function () {
		var t = new eui.Image();
		this.imgAlert = t;
		t.bottom = 0;
		t.height = 506;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,16,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "attack value_png";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(42,39,71,87);
		t.source = "lower_png";
		return t;
	};
	_proto.gEnemyView_i = function () {
		var t = new eui.Group();
		this.gEnemyView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gEnemyRedView_i = function () {
		var t = new eui.Group();
		this.gEnemyRedView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gHPLayer_i = function () {
		var t = new eui.Group();
		this.gHPLayer = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gTouchAnim_i = function () {
		var t = new eui.Group();
		this.gTouchAnim = t;
		t.bottom = 500;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this.imgAnim_i()];
		return t;
	};
	_proto.imgAnim_i = function () {
		var t = new eui.Image();
		this.imgAnim = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Aim_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = 375;
		t.y = 759;
		return t;
	};
	_proto.ui_i = function () {
		var t = new UIBattle();
		this.ui = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gBulletTails_i = function () {
		var t = new eui.Group();
		this.gBulletTails = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gBulletView_i = function () {
		var t = new eui.Group();
		this.gBulletView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gTowersView_i = function () {
		var t = new eui.Group();
		this.gTowersView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 100;
		t.height = 400;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.width = 750;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.slot0_i(),this.slot1_i(),this.slot2_i(),this.slot3_i(),this.slot4_i(),this.slot5_i(),this.slot6_i(),this.slot7_i(),this.slot8_i(),this.slot9_i(),this.slot10_i(),this.slot11_i(),this.slot12_i(),this.slot13_i(),this.slot14_i(),this.tip0_i(),this.tip1_i(),this.tip2_i(),this.tip3_i(),this.tip4_i(),this.tip5_i(),this.tip6_i(),this.tip7_i(),this.tip8_i(),this.tip9_i(),this.tip10_i(),this.tip11_i(),this.tip12_i(),this.tip13_i(),this.tip14_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.slot0_i = function () {
		var t = new eui.Image();
		this.slot0 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 26.67;
		t.y = 7;
		return t;
	};
	_proto.slot1_i = function () {
		var t = new eui.Image();
		this.slot1 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 168.67;
		t.y = 7;
		return t;
	};
	_proto.slot2_i = function () {
		var t = new eui.Image();
		this.slot2 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 311.67;
		t.y = 7;
		return t;
	};
	_proto.slot3_i = function () {
		var t = new eui.Image();
		this.slot3 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 459.67;
		t.y = 7;
		return t;
	};
	_proto.slot4_i = function () {
		var t = new eui.Image();
		this.slot4 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 605.67;
		t.y = 7;
		return t;
	};
	_proto.slot5_i = function () {
		var t = new eui.Image();
		this.slot5 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 26.67;
		t.y = 135;
		return t;
	};
	_proto.slot6_i = function () {
		var t = new eui.Image();
		this.slot6 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 168.67;
		t.y = 135;
		return t;
	};
	_proto.slot7_i = function () {
		var t = new eui.Image();
		this.slot7 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 311.67;
		t.y = 135;
		return t;
	};
	_proto.slot8_i = function () {
		var t = new eui.Image();
		this.slot8 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 458.67;
		t.y = 135;
		return t;
	};
	_proto.slot9_i = function () {
		var t = new eui.Image();
		this.slot9 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 604.67;
		t.y = 135;
		return t;
	};
	_proto.slot10_i = function () {
		var t = new eui.Image();
		this.slot10 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 26.67;
		t.y = 261.34;
		return t;
	};
	_proto.slot11_i = function () {
		var t = new eui.Image();
		this.slot11 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 168.67;
		t.y = 261.34;
		return t;
	};
	_proto.slot12_i = function () {
		var t = new eui.Image();
		this.slot12 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 311.67;
		t.y = 261.34;
		return t;
	};
	_proto.slot13_i = function () {
		var t = new eui.Image();
		this.slot13 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 458.67;
		t.y = 261.34;
		return t;
	};
	_proto.slot14_i = function () {
		var t = new eui.Image();
		this.slot14 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 604.67;
		t.y = 261.34;
		return t;
	};
	_proto.tip0_i = function () {
		var t = new eui.Image();
		this.tip0 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 26.67;
		t.y = 7;
		return t;
	};
	_proto.tip1_i = function () {
		var t = new eui.Image();
		this.tip1 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 168.67;
		t.y = 7;
		return t;
	};
	_proto.tip2_i = function () {
		var t = new eui.Image();
		this.tip2 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 311.67;
		t.y = 7;
		return t;
	};
	_proto.tip3_i = function () {
		var t = new eui.Image();
		this.tip3 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 459.67;
		t.y = 7;
		return t;
	};
	_proto.tip4_i = function () {
		var t = new eui.Image();
		this.tip4 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 605.67;
		t.y = 7;
		return t;
	};
	_proto.tip5_i = function () {
		var t = new eui.Image();
		this.tip5 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 26.67;
		t.y = 135;
		return t;
	};
	_proto.tip6_i = function () {
		var t = new eui.Image();
		this.tip6 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 168.67;
		t.y = 135;
		return t;
	};
	_proto.tip7_i = function () {
		var t = new eui.Image();
		this.tip7 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 311.67;
		t.y = 135;
		return t;
	};
	_proto.tip8_i = function () {
		var t = new eui.Image();
		this.tip8 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 458.67;
		t.y = 135;
		return t;
	};
	_proto.tip9_i = function () {
		var t = new eui.Image();
		this.tip9 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 604.67;
		t.y = 135;
		return t;
	};
	_proto.tip10_i = function () {
		var t = new eui.Image();
		this.tip10 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 26.67;
		t.y = 261.34;
		return t;
	};
	_proto.tip11_i = function () {
		var t = new eui.Image();
		this.tip11 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 168.67;
		t.y = 261.34;
		return t;
	};
	_proto.tip12_i = function () {
		var t = new eui.Image();
		this.tip12 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 311.67;
		t.y = 261.34;
		return t;
	};
	_proto.tip13_i = function () {
		var t = new eui.Image();
		this.tip13 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 458.67;
		t.y = 261.34;
		return t;
	};
	_proto.tip14_i = function () {
		var t = new eui.Image();
		this.tip14 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Blue box_png";
		t.width = 120;
		t.x = 604.67;
		t.y = 261.34;
		return t;
	};
	_proto.gFlyIcons_i = function () {
		var t = new eui.Group();
		this.gFlyIcons = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gFlyIconsTop_i = function () {
		var t = new eui.Group();
		this.gFlyIconsTop = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto._UIPause1_i = function () {
		var t = new UIPause();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gTouchPlant_i = function () {
		var t = new eui.Group();
		this.gTouchPlant = t;
		t.bottom = -500;
		t.left = -500;
		t.right = -500;
		t.top = -500;
		return t;
	};
	return GBattleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GBullet.exml'] = window.GBulletSkin = (function (_super) {
	__extends(GBulletSkin, _super);
	function GBulletSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 45;
		this.width = 45;
	}
	var _proto = GBulletSkin.prototype;

	return GBulletSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GDungeon.exml'] = window.GDungeonSkin = (function (_super) {
	__extends(GDungeonSkin, _super);
	function GDungeonSkin() {
		_super.call(this);
		this.skinParts = ["bg","imgAlert","gEnemyView","gEnemyRedView","gHPLayer","imgAnim","gTouchAnim","gBulletTails","gBulletView","ui2","gFlyIcons","slot0","slot1","slot2","slot3","slot4","slot5","slot6","slot7","slot8","slot9","slot10","slot11","slot12","slot13","slot14","gTowersView","gFlyIconsTop","gTouchPlant"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.bg_i(),this.imgAlert_i(),this._Image2_i(),this.gEnemyView_i(),this.gEnemyRedView_i(),this.gHPLayer_i(),this.gTouchAnim_i(),this.gBulletTails_i(),this.gBulletView_i(),this.ui2_i(),this.gFlyIcons_i(),this.gTowersView_i(),this.gFlyIconsTop_i(),this._UIPause1_i(),this.gTouchPlant_i()];
	}
	var _proto = GDungeonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 375;
		t.fillMode = "repeat";
		t.height = 3000;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.width = 750;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetY = 0;
		t.bottom = 375;
		t.fillMode = "repeat";
		t.height = 3000;
		t.horizontalCenter = 0;
		t.source = "Middle_png";
		t.width = 750;
		return t;
	};
	_proto.imgAlert_i = function () {
		var t = new eui.Image();
		this.imgAlert = t;
		t.bottom = 0;
		t.height = 506;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,16,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "attack value_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(42,39,71,87);
		t.source = "lower_png";
		return t;
	};
	_proto.gEnemyView_i = function () {
		var t = new eui.Group();
		this.gEnemyView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gEnemyRedView_i = function () {
		var t = new eui.Group();
		this.gEnemyRedView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gHPLayer_i = function () {
		var t = new eui.Group();
		this.gHPLayer = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gTouchAnim_i = function () {
		var t = new eui.Group();
		this.gTouchAnim = t;
		t.bottom = 500;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this.imgAnim_i()];
		return t;
	};
	_proto.imgAnim_i = function () {
		var t = new eui.Image();
		this.imgAnim = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Aim_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = 375;
		t.y = 759;
		return t;
	};
	_proto.gBulletTails_i = function () {
		var t = new eui.Group();
		this.gBulletTails = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gBulletView_i = function () {
		var t = new eui.Group();
		this.gBulletView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.ui2_i = function () {
		var t = new UIDungeonBattle();
		this.ui2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gFlyIcons_i = function () {
		var t = new eui.Group();
		this.gFlyIcons = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.gTowersView_i = function () {
		var t = new eui.Group();
		this.gTowersView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 100;
		t.height = 400;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.width = 750;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.slot0_i(),this.slot1_i(),this.slot2_i(),this.slot3_i(),this.slot4_i(),this.slot5_i(),this.slot6_i(),this.slot7_i(),this.slot8_i(),this.slot9_i(),this.slot10_i(),this.slot11_i(),this.slot12_i(),this.slot13_i(),this.slot14_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.slot0_i = function () {
		var t = new eui.Image();
		this.slot0 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 26.67;
		t.y = 7;
		return t;
	};
	_proto.slot1_i = function () {
		var t = new eui.Image();
		this.slot1 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 168.67;
		t.y = 7;
		return t;
	};
	_proto.slot2_i = function () {
		var t = new eui.Image();
		this.slot2 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 311.67;
		t.y = 7;
		return t;
	};
	_proto.slot3_i = function () {
		var t = new eui.Image();
		this.slot3 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 459.67;
		t.y = 7;
		return t;
	};
	_proto.slot4_i = function () {
		var t = new eui.Image();
		this.slot4 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 605.67;
		t.y = 7;
		return t;
	};
	_proto.slot5_i = function () {
		var t = new eui.Image();
		this.slot5 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 26.67;
		t.y = 135;
		return t;
	};
	_proto.slot6_i = function () {
		var t = new eui.Image();
		this.slot6 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 168.67;
		t.y = 135;
		return t;
	};
	_proto.slot7_i = function () {
		var t = new eui.Image();
		this.slot7 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 311.67;
		t.y = 135;
		return t;
	};
	_proto.slot8_i = function () {
		var t = new eui.Image();
		this.slot8 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 458.67;
		t.y = 135;
		return t;
	};
	_proto.slot9_i = function () {
		var t = new eui.Image();
		this.slot9 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 604.67;
		t.y = 135;
		return t;
	};
	_proto.slot10_i = function () {
		var t = new eui.Image();
		this.slot10 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 26.67;
		t.y = 261.34;
		return t;
	};
	_proto.slot11_i = function () {
		var t = new eui.Image();
		this.slot11 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 168.67;
		t.y = 261.34;
		return t;
	};
	_proto.slot12_i = function () {
		var t = new eui.Image();
		this.slot12 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 311.67;
		t.y = 261.34;
		return t;
	};
	_proto.slot13_i = function () {
		var t = new eui.Image();
		this.slot13 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 458.67;
		t.y = 261.34;
		return t;
	};
	_proto.slot14_i = function () {
		var t = new eui.Image();
		this.slot14 = t;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 120;
		t.x = 604.67;
		t.y = 261.34;
		return t;
	};
	_proto.gFlyIconsTop_i = function () {
		var t = new eui.Group();
		this.gFlyIconsTop = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto._UIPause1_i = function () {
		var t = new UIPause();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.gTouchPlant_i = function () {
		var t = new eui.Group();
		this.gTouchPlant = t;
		t.bottom = -500;
		t.left = -500;
		t.right = -500;
		t.top = -500;
		return t;
	};
	return GDungeonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GFlyIcon.exml'] = window.GFlyIconSkin = (function (_super) {
	__extends(GFlyIconSkin, _super);
	function GFlyIconSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay"];
		
		this.height = 80;
		this.width = 80;
		this.elementsContent = [this.iconDisplay_i()];
	}
	var _proto = GFlyIconSkin.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "money_png";
		t.top = 0;
		return t;
	};
	return GFlyIconSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GRewardBox.exml'] = window.GRewardBoxSkin = (function (_super) {
	__extends(GRewardBoxSkin, _super);
	function GRewardBoxSkin() {
		_super.call(this);
		this.skinParts = ["shake","imgBox"];
		
		this.height = 120;
		this.width = 120;
		this.shake_i();
		this.elementsContent = [this.imgBox_i()];
		
		eui.Binding.$bindProperties(this, ["imgBox"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [4],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-4],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [4],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-4],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
	}
	var _proto = GRewardBoxSkin.prototype;

	_proto.shake_i = function () {
		var t = new egret.tween.TweenGroup();
		this.shake = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object7_i();
		t.paths = [this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i()];
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.ease = "quadIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.ease = "quadIn";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.ease = "quadIn";
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto.imgBox_i = function () {
		var t = new eui.Image();
		this.imgBox = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.source = "Treasure chest_png";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	return GRewardBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GTails.exml'] = window.GTailsSkin = (function (_super) {
	__extends(GTailsSkin, _super);
	function GTailsSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 30;
		this.width = 36;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = GTailsSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(0,5,32,25);
		t.source = "tails_png";
		t.top = 0;
		return t;
	};
	return GTailsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GTank.exml'] = window.GTankSkin = (function (_super) {
	__extends(GTankSkin, _super);
	function GTankSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 120;
	}
	var _proto = GTankSkin.prototype;

	return GTankSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GZombie.exml'] = window.GZombieSkin = (function (_super) {
	__extends(GZombieSkin, _super);
	function GZombieSkin() {
		_super.call(this);
		this.skinParts = ["gView"];
		
		this.height = 90;
		this.width = 90;
		this.elementsContent = [this.gView_i()];
	}
	var _proto = GZombieSkin.prototype;

	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.bottom = 10;
		t.horizontalCenter = 0;
		return t;
	};
	return GZombieSkin;
})(eui.Skin);generateEUI.paths['resource/UI/Guide/UIGuideView.exml'] = window.UIGuideViewSkin = (function (_super) {
	__extends(UIGuideViewSkin, _super);
	function UIGuideViewSkin() {
		_super.call(this);
		this.skinParts = ["ArrAnim","HandAnim1","HandAnim2","ArrAnimDown","HandAnim3","lockTouch","df1","lDesc","skipGuide","dfUp","df2","lDesc0","skipGuide2","dfDown","arr","gArr","arr0","gArrDown","gView","hand1","gHand1","hand2","gHand2","hand3","gHand3"];
		
		this.height = 1334;
		this.width = 750;
		this.ArrAnim_i();
		this.HandAnim1_i();
		this.HandAnim2_i();
		this.ArrAnimDown_i();
		this.HandAnim3_i();
		this.elementsContent = [this.gView_i(),this.gHand1_i(),this.gHand2_i(),this.gHand3_i()];
		
		eui.Binding.$bindProperties(this, ["arr"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-130],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-90],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, ["hand1"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [-130],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [50],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [250],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [-90],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [30],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, ["hand2"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [-130],[],this._Object6,"rotation");
		eui.Binding.$bindProperties(this, [50],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [250],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [-100],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [-90],[],this._Object8,"rotation");
		eui.Binding.$bindProperties(this, [-120],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["arr0"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [-50],[],this._Object9,"rotation");
		eui.Binding.$bindProperties(this, ["hand3"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [-50],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [180],[],this._Object10,"y");
		eui.Binding.$bindProperties(this, [-150],[],this._Object11,"rotation");
	}
	var _proto = UIGuideViewSkin.prototype;

	_proto.ArrAnim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.ArrAnim = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "sineIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "sineOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.HandAnim1_i = function () {
		var t = new egret.tween.TweenGroup();
		this.HandAnim1 = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i(),this._To5_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto.HandAnim2_i = function () {
		var t = new egret.tween.TweenGroup();
		this.HandAnim2 = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To6_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto.ArrAnimDown_i = function () {
		var t = new egret.tween.TweenGroup();
		this.ArrAnimDown = t;
		t.items = [this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._To9_i(),this._To10_i()];
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		return t;
	};
	_proto.HandAnim3_i = function () {
		var t = new egret.tween.TweenGroup();
		this.HandAnim3 = t;
		t.items = [this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set4_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.height = 100;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.width = 100;
		t.x = 350;
		t.y = 600;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.lockTouch_i(),this.dfUp_i(),this.dfDown_i(),this.gArr_i(),this.gArrDown_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .7;
		t.height = 2000;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = -2000;
		t.width = 2000;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = -2000;
		t.height = 2000;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.width = 2000;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = -0.5;
		t.left = -2000;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = -0.5;
		t.width = 2000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = -0.5;
		t.right = -2000;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = -0.5;
		t.width = 2000;
		return t;
	};
	_proto.lockTouch_i = function () {
		var t = new eui.Image();
		this.lockTouch = t;
		t.alpha = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto.dfUp_i = function () {
		var t = new eui.Group();
		this.dfUp = t;
		t.x = 2;
		t.y = -483;
		t.elementsContent = [this.df1_i(),this.lDesc_i(),this.skipGuide_i()];
		return t;
	};
	_proto.df1_i = function () {
		var t = new eui.Image();
		this.df1 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "";
		t.x = 159;
		t.y = 0;
		return t;
	};
	_proto.lDesc_i = function () {
		var t = new eui.Label();
		this.lDesc = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 114;
		t.size = 35;
		t.text = " ";
		t.width = 404.34;
		t.x = 0;
		t.y = 277;
		return t;
	};
	_proto.skipGuide_i = function () {
		var t = new eui.Button();
		this.skipGuide = t;
		t.label = "Button";
		t.skinName = "UI.BtnCloseX";
		t.x = 327.34;
		t.y = 0;
		return t;
	};
	_proto.dfDown_i = function () {
		var t = new eui.Group();
		this.dfDown = t;
		t.x = 2;
		t.y = 170;
		t.elementsContent = [this.df2_i(),this.lDesc0_i(),this.skipGuide2_i()];
		return t;
	};
	_proto.df2_i = function () {
		var t = new eui.Image();
		this.df2 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "";
		t.x = 159;
		t.y = 0;
		return t;
	};
	_proto.lDesc0_i = function () {
		var t = new eui.Label();
		this.lDesc0 = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 114;
		t.size = 35;
		t.text = " ";
		t.width = 404.34;
		t.x = 0;
		t.y = 277;
		return t;
	};
	_proto.skipGuide2_i = function () {
		var t = new eui.Button();
		this.skipGuide2 = t;
		t.label = "Button";
		t.skinName = "UI.BtnCloseX";
		t.x = 337.34;
		t.y = 10;
		return t;
	};
	_proto.gArr_i = function () {
		var t = new eui.Group();
		this.gArr = t;
		t.height = 60;
		t.right = 0;
		t.top = 20;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.width = 60;
		t.elementsContent = [this.arr_i()];
		return t;
	};
	_proto.arr_i = function () {
		var t = new eui.Image();
		this.arr = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 56;
		t.rotation = -90;
		t.source = "hand_png";
		t.touchEnabled = false;
		t.x = 30;
		t.y = -10;
		return t;
	};
	_proto.gArrDown_i = function () {
		var t = new eui.Group();
		this.gArrDown = t;
		t.height = 60;
		t.right = 0;
		t.top = 20;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.width = 60;
		t.elementsContent = [this.arr0_i()];
		return t;
	};
	_proto.arr0_i = function () {
		var t = new eui.Image();
		this.arr0 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 56;
		t.rotation = -20;
		t.source = "hand_png";
		t.touchEnabled = false;
		t.x = 30;
		t.y = 80;
		return t;
	};
	_proto.gHand1_i = function () {
		var t = new eui.Group();
		this.gHand1 = t;
		t.height = 140;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 140;
		t.x = 100;
		t.y = 750;
		t.elementsContent = [this.hand1_i()];
		return t;
	};
	_proto.hand1_i = function () {
		var t = new eui.Image();
		this.hand1 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 56;
		t.rotation = -90;
		t.source = "hand_png";
		t.touchEnabled = false;
		t.x = 100;
		t.y = 30;
		return t;
	};
	_proto.gHand2_i = function () {
		var t = new eui.Group();
		this.gHand2 = t;
		t.height = 140;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 140;
		t.x = 100;
		t.y = 900;
		t.elementsContent = [this.hand2_i()];
		return t;
	};
	_proto.hand2_i = function () {
		var t = new eui.Image();
		this.hand2 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 56;
		t.rotation = -90;
		t.source = "hand_png";
		t.touchEnabled = false;
		t.x = 100;
		t.y = 30;
		return t;
	};
	_proto.gHand3_i = function () {
		var t = new eui.Group();
		this.gHand3 = t;
		t.height = 140;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 140;
		t.x = 101.95;
		t.y = 1013.05;
		t.elementsContent = [this.hand3_i()];
		return t;
	};
	_proto.hand3_i = function () {
		var t = new eui.Image();
		this.hand3 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 56;
		t.rotation = -90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hand_png";
		t.touchEnabled = false;
		t.x = 100;
		t.y = 30;
		return t;
	};
	return UIGuideViewSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UI_51Activity/UIBoxIcon.exml'] = window.UIBoxIconSkin = (function (_super) {
	__extends(UIBoxIconSkin, _super);
	function UIBoxIconSkin() {
		_super.call(this);
		this.skinParts = ["icursor","icon","iEpic","iRare","lDesc"];
		
		this.height = 150;
		this.width = 150;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = UIBoxIconSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.icursor_i(),this.icon_i(),this.iEpic_i(),this.iRare_i(),this._Image2_i(),this.lDesc_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(26,26,70,63);
		t.source = "ui_json.Composite box_png";
		t.top = 0;
		return t;
	};
	_proto.icursor_i = function () {
		var t = new eui.Image();
		this.icursor = t;
		t.bottom = -20;
		t.left = -20;
		t.right = -20;
		t.scale9Grid = new egret.Rectangle(64,62,73,58);
		t.source = "ui_json.51_cursor_png";
		t.top = -20;
		t.visible = false;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.source = "ui_json.51_highTank_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.iEpic_i = function () {
		var t = new eui.Image();
		this.iEpic = t;
		t.left = 5;
		t.source = "ui_json.51_epic_png";
		t.top = 5;
		return t;
	};
	_proto.iRare_i = function () {
		var t = new eui.Image();
		this.iRare = t;
		t.height = 43;
		t.left = 5;
		t.source = "51_rare_png";
		t.top = 5;
		t.width = 77;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 9;
		t.height = 29;
		t.left = 11;
		t.right = 10;
		t.source = "ui_json.icon_boxBg_png";
		return t;
	};
	_proto.lDesc_i = function () {
		var t = new eui.Label();
		this.lDesc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 37;
		t.horizontalCenter = 0;
		t.size = 19;
		t.text = "Cây trồng cao cấp";
		t.textAlign = "center";
		t.textColor = 0xf4f4f4;
		t.verticalAlign = "middle";
		t.verticalCenter = 51.5;
		return t;
	};
	return UIBoxIconSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UI_51Activity/UILuckyWheel_51Activity.exml'] = window.UILuckyWheel_51ActivitySkin = (function (_super) {
	__extends(UILuckyWheel_51ActivitySkin, _super);
	function UILuckyWheel_51ActivitySkin() {
		_super.call(this);
		this.skinParts = ["anim","cell0","cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8","cell9","cell10","cell11","btnVideo","btnClose","btnFree","btnSkinConversion","lVideoDesc","freeCount","lDisTime","lActivityTime"];
		
		this.height = 1334;
		this.width = 750;
		this.anim_i();
		this.elementsContent = [this._Image1_i(),this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["btnVideo"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
	}
	var _proto = UILuckyWheel_51ActivitySkin.prototype;

	_proto.anim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object3_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 976.24;
		t.horizontalCenter = 0;
		t.verticalCenter = 48;
		t.width = 718.18;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Group1_i(),this.btnVideo_i(),this.btnClose_i(),this.btnFree_i(),this.btnSkinConversion_i(),this.lVideoDesc_i(),this.freeCount_i(),this.lDisTime_i(),this.lActivityTime_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(53,38,75,83);
		t.source = "ui_json.store Bottom_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ui_json.51_Head_png";
		t.top = -219;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 700;
		t.horizontalCenter = -0.08999999999997499;
		t.verticalCenter = -50.120000000000005;
		t.width = 700;
		t.elementsContent = [this.cell0_i(),this.cell1_i(),this.cell2_i(),this.cell3_i(),this.cell4_i(),this.cell5_i(),this.cell6_i(),this.cell7_i(),this.cell8_i(),this.cell9_i(),this.cell10_i(),this.cell11_i(),this._Image4_i()];
		return t;
	};
	_proto.cell0_i = function () {
		var t = new UIBoxIcon();
		this.cell0 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.cell1_i = function () {
		var t = new UIBoxIcon();
		this.cell1 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 190;
		t.y = 20;
		return t;
	};
	_proto.cell2_i = function () {
		var t = new UIBoxIcon();
		this.cell2 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 360;
		t.y = 20;
		return t;
	};
	_proto.cell3_i = function () {
		var t = new UIBoxIcon();
		this.cell3 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 530;
		t.y = 20;
		return t;
	};
	_proto.cell4_i = function () {
		var t = new UIBoxIcon();
		this.cell4 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 530;
		t.y = 190;
		return t;
	};
	_proto.cell5_i = function () {
		var t = new UIBoxIcon();
		this.cell5 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 530;
		t.y = 360;
		return t;
	};
	_proto.cell6_i = function () {
		var t = new UIBoxIcon();
		this.cell6 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 530;
		t.y = 530;
		return t;
	};
	_proto.cell7_i = function () {
		var t = new UIBoxIcon();
		this.cell7 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 360;
		t.y = 530;
		return t;
	};
	_proto.cell8_i = function () {
		var t = new UIBoxIcon();
		this.cell8 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 190;
		t.y = 530;
		return t;
	};
	_proto.cell9_i = function () {
		var t = new UIBoxIcon();
		this.cell9 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 20;
		t.y = 530;
		return t;
	};
	_proto.cell10_i = function () {
		var t = new UIBoxIcon();
		this.cell10 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 20;
		t.y = 360;
		return t;
	};
	_proto.cell11_i = function () {
		var t = new UIBoxIcon();
		this.cell11 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.x = 20;
		t.y = 190;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.51_button_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 68.5;
		t.horizontalCenter = -199.08999999999997;
		t.label = "Nhận 1 lần";
		t.skinName = "BtnBoxVideo";
		t.verticalCenter = 359.38;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "Button";
		t.right = -40.82000000000005;
		t.skinName = "UI.BtnCloseX";
		t.top = -34;
		return t;
	};
	_proto.btnFree_i = function () {
		var t = new eui.Button();
		this.btnFree = t;
		t.horizontalCenter = 198.91000000000003;
		t.label = "Quay miễn phí";
		t.skinName = "BtnBagFree";
		t.verticalCenter = 359.38;
		return t;
	};
	_proto.btnSkinConversion_i = function () {
		var t = new eui.Button();
		this.btnSkinConversion = t;
		t.label = "Button";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Btn51Skin";
		t.x = 586;
		t.y = 961;
		return t;
	};
	_proto.lVideoDesc_i = function () {
		var t = new eui.Label();
		this.lVideoDesc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 48;
		t.horizontalCenter = -199.09;
		t.size = 24;
		t.text = "Xem video để quay";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 438.88;
		t.width = 252;
		return t;
	};
	_proto.freeCount_i = function () {
		var t = new eui.Label();
		this.freeCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 32.67;
		t.horizontalCenter = 198.91;
		t.text = "Còn lại 10 lần";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 425.38;
		t.width = 136.67;
		return t;
	};
	_proto.lDisTime_i = function () {
		var t = new eui.Label();
		this.lDisTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 28.67;
		t.horizontalCenter = 189.41000000000003;
		t.size = 20;
		t.text = "(Còn lại đến lần sau: xx phút xx giây)";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 459.38;
		t.width = 359;
		return t;
	};
	_proto.lActivityTime_i = function () {
		var t = new eui.Label();
		this.lActivityTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "Kết thúc sự kiện: xx ngày xx giờ xx phút";
		t.textAlign = "center";
		t.top = 23;
		t.verticalAlign = "middle";
		return t;
	};
	return UILuckyWheel_51ActivitySkin;
})(eui.Skin);generateEUI.paths['resource/UI/UI_51Activity/UISkinConversion.exml'] = window.UISkinConversionSkin = (function (_super) {
	__extends(UISkinConversionSkin, _super);
	function UISkinConversionSkin() {
		_super.call(this);
		this.skinParts = ["lCount","gTank0","btnConverTank0","gTank1","btnConverTank1","btnConverStar","btnConverSkill","btnClose"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group5_i()];
	}
	var _proto = UISkinConversionSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 787.33;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 690;
		t.elementsContent = [this._Image2_i(),this.lCount_i(),this._Image3_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(23,18,120,103);
		t.source = "ui_json.store Bottom_png";
		t.top = 0;
		return t;
	};
	_proto.lCount_i = function () {
		var t = new eui.Label();
		this.lCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 52;
		t.horizontalCenter = 0;
		t.size = 35;
		t.stroke = 1.2;
		t.text = "Đang sở hữu: xx mảnh";
		t.textAlign = "center";
		t.top = 27;
		t.verticalAlign = "middle";
		t.width = 430;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ui_json.51_skinHead_png";
		t.top = -225;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.width = 300;
		t.x = 30;
		t.y = 101.84;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this.gTank0_i(),this.btnConverTank0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,22,98,91);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.baggreen_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fontFamily = "Arial";
		t.height = 52;
		t.horizontalCenter = 0;
		t.text = "20 mảnh có thể đổi";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 296;
		return t;
	};
	_proto.gTank0_i = function () {
		var t = new eui.Group();
		this.gTank0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -28;
		t.width = 240;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 17;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ui_json.x_png";
		t.verticalCenter = -29.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 53;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ui_json.5_png";
		t.verticalCenter = -29.5;
		return t;
	};
	_proto.btnConverTank0_i = function () {
		var t = new eui.Button();
		this.btnConverTank0 = t;
		t.bottom = 42;
		t.horizontalCenter = 0;
		t.label = "Muốn nhận";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnBagFree";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.width = 300;
		t.x = 360;
		t.y = 101.84;
		t.elementsContent = [this._Image7_i(),this._Label2_i(),this.gTank1_i(),this.btnConverTank1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,22,98,91);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.baggreen_png";
		t.top = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fontFamily = "Arial";
		t.height = 52;
		t.horizontalCenter = 0;
		t.text = "35 mảnh có thể đổi";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 296;
		return t;
	};
	_proto.gTank1_i = function () {
		var t = new eui.Group();
		this.gTank1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -28;
		t.width = 240;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 17;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ui_json.x_png";
		t.verticalCenter = -29.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 43;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ui_json.1_png";
		t.verticalCenter = -29.5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 71;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ui_json.0_png";
		t.verticalCenter = -29.5;
		return t;
	};
	_proto.btnConverTank1_i = function () {
		var t = new eui.Button();
		this.btnConverTank1 = t;
		t.bottom = 42;
		t.horizontalCenter = 0;
		t.label = "Muốn nhận";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnBagFree";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.width = 300;
		t.x = 30;
		t.y = 451.84;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Label3_i(),this.btnConverStar_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,22,98,91);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.baggreen_png";
		t.top = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 174.35;
		t.horizontalCenter = 0;
		t.source = "ui_json.sign_3_png";
		t.verticalCenter = -64;
		t.width = 189;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fontFamily = "Arial";
		t.height = 52;
		t.horizontalCenter = 0;
		t.text = "5 mảnh có thể đổi";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 296;
		return t;
	};
	_proto.btnConverStar_i = function () {
		var t = new eui.Button();
		this.btnConverStar = t;
		t.bottom = 42;
		t.horizontalCenter = 0;
		t.label = "Muốn nhận";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnBagFree";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.width = 300;
		t.x = 360;
		t.y = 451.84;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Label4_i(),this.btnConverSkill_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,22,98,91);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.baggreen_png";
		t.top = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 148.67;
		t.horizontalCenter = 0;
		t.source = "ui_json.spd+autoCompose_png";
		t.verticalCenter = -72.5;
		t.width = 148.67;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fontFamily = "Arial";
		t.height = 52;
		t.horizontalCenter = 0;
		t.text = "2 mảnh có thể đổi";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 296;
		return t;
	};
	_proto.btnConverSkill_i = function () {
		var t = new eui.Button();
		this.btnConverSkill = t;
		t.bottom = 42;
		t.horizontalCenter = 0;
		t.label = "Muốn nhận";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnBagFree";
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "Button";
		t.right = -42;
		t.skinName = "UI.BtnCloseX";
		t.top = -35;
		return t;
	};
	return UISkinConversionSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIActiveBag/UIActiveBag.exml'] = window.UIActiveBagSkin = (function (_super) {
	__extends(UIActiveBagSkin, _super);
	function UIActiveBagSkin() {
		_super.call(this);
		this.skinParts = ["anim","lIsGetLB","btnLuckyBagVideo","iIsGetEB","btnEliteBagFree","btnEliteBagVideo","lEBTime","gEliteFreeTime","btnClose"];
		
		this.height = 1334;
		this.width = 750;
		this.anim_i();
		this.elementsContent = [this._Image1_i(),this._Group5_i()];
		
		eui.Binding.$bindProperties(this, ["btnEliteBagVideo"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, ["btnLuckyBagVideo"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object5,"scaleY");
	}
	var _proto = UIActiveBagSkin.prototype;

	_proto.anim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object3_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object6_i();
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1171.15;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 672.72;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Group2_i(),this._Group4_i(),this._Image12_i(),this._Label7_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(21,22,125,103);
		t.source = "store Bottom_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99.21;
		t.horizontalCenter = 0;
		t.source = "ui_json.baghead_png";
		t.top = -52;
		t.width = 455.36;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 366;
		t.horizontalCenter = 0;
		t.verticalCenter = -324.57500000000005;
		t.width = 610;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Group1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,21,68,88);
		t.source = "ui_json.baggreen_png";
		t.top = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -125;
		t.source = "ui_json.luckybag_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 137.84;
		t.horizontalCenter = -117;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.prize1_png";
		t.width = 156;
		t.y = 59.44;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 330;
		t.horizontalCenter = 137;
		t.verticalCenter = 0;
		t.width = 316.67;
		t.elementsContent = [this._Label1_i(),this.lIsGetLB_i(),this.btnLuckyBagVideo_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 133.27;
		t.horizontalCenter = 0;
		t.lineSpacing = 3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollV = 1;
		t.size = 26;
		t.stroke = 1.5;
		t.text = "Quà tặng lần đầu cho người chơi Cây trồng nổi giận 2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -31.5;
		t.width = 316.43;
		return t;
	};
	_proto.lIsGetLB_i = function () {
		var t = new eui.Label();
		this.lIsGetLB = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 72.66;
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 0.8;
		t.text = "Nhận";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 88;
		t.width = 178;
		return t;
	};
	_proto.btnLuckyBagVideo_i = function () {
		var t = new eui.Button();
		this.btnLuckyBagVideo = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 68.5;
		t.horizontalCenter = 0;
		t.label = "Nhận quà";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnBagVideo";
		t.verticalCenter = 88;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 366;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 60.424999999999955;
		t.width = 610;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Group3_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,21,68,88);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.baggreen_png";
		t.top = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -125;
		t.source = "ui_json.elitebag_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 330;
		t.horizontalCenter = 137;
		t.verticalCenter = 0;
		t.width = 316.67;
		t.elementsContent = [this._Label2_i(),this._Image9_i(),this.iIsGetEB_i(),this.btnEliteBagFree_i(),this.btnEliteBagVideo_i(),this.gEliteFreeTime_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 107.27;
		t.horizontalCenter = 0;
		t.lineSpacing = 3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollV = 1;
		t.size = 26;
		t.stroke = 1.5;
		t.text = "Quà tặng bí ẩn cho người chơi Cây trồng nổi giận 2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -78.5;
		t.width = 316.43;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123.7;
		t.horizontalCenter = -209.335;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.prize1_png";
		t.width = 140;
		t.y = 64.42;
		return t;
	};
	_proto.iIsGetEB_i = function () {
		var t = new eui.Label();
		this.iIsGetEB = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 72.66;
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 0.8;
		t.text = "Nhận";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 45;
		t.width = 178;
		return t;
	};
	_proto.btnEliteBagFree_i = function () {
		var t = new eui.Button();
		this.btnEliteBagFree = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 68.5;
		t.height = 137;
		t.horizontalCenter = 0;
		t.label = "Nhận";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnBagFree";
		t.verticalCenter = 45;
		t.width = 300;
		t.x = 83;
		return t;
	};
	_proto.btnEliteBagVideo_i = function () {
		var t = new eui.Button();
		this.btnEliteBagVideo = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 68.5;
		t.height = 137;
		t.horizontalCenter = 0;
		t.label = "Nhận luôn";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnBagVideo";
		t.verticalCenter = 45;
		return t;
	};
	_proto.gEliteFreeTime_i = function () {
		var t = new eui.Group();
		this.gEliteFreeTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.horizontalCenter = 0;
		t.verticalCenter = 125.5;
		t.width = 257.27;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label3_i(),this.lEBTime_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 3;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = -90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Online";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.lEBTime_i = function () {
		var t = new eui.Label();
		this.lEBTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 16;
		t.fontFamily = "Arial";
		t.horizontalCenter = -51.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "00:00";
		t.textAlign = "center";
		t.top = 17;
		t.verticalAlign = "middle";
		t.x = 37.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Để sau";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		t.x = 99;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Miễn phí";
		t.textColor = 0xf42222;
		t.top = 0;
		t.verticalAlign = "middle";
		t.x = 150.5;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Nhận được";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.source = "ui_json.elitebagstar_png";
		t.width = 96.74;
		t.x = 54;
		t.y = 124;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.source = "ui_json.+_png";
		t.width = 40.37;
		t.x = 148;
		t.y = 162;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ui_json.mysbag_png";
		t.verticalCenter = 342.42499999999995;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 73.27;
		t.horizontalCenter = 0;
		t.lineSpacing = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollV = 1;
		t.size = 26;
		t.stroke = 1.5;
		t.text = "Nhiều gói quà bí ẩn khác";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 411.92499999999995;
		t.width = 316.43;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 0;
		t.label = "Không nhận quà";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnBagFree";
		t.verticalCenter = 501.92499999999995;
		return t;
	};
	return UIActiveBagSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIADBox/UIADBox.exml'] = window.UIADBoxSkin = (function (_super) {
	__extends(UIADBoxSkin, _super);
	function UIADBoxSkin() {
		_super.call(this);
		this.skinParts = ["btnVideo","btnCancel","count","uiBanner"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiBanner_i()];
	}
	var _proto = UIADBoxSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640.91;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 647.88;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Image4_i(),this._Image5_i(),this.btnVideo_i(),this.btnCancel_i(),this.count_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -0.09000000000003183;
		t.left = 0;
		t.right = -56.73000000000002;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_js_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116;
		t.horizontalCenter = 0;
		t.source = "ui_json.sign_2_png";
		t.verticalCenter = -315.455;
		t.width = 657.94;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 68.67;
		t.horizontalCenter = 0;
		t.size = 37;
		t.stroke = 0.8;
		t.text = "Rương may mắn x6";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -334.955;
		t.width = 338;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 268.90999999999997;
		t.left = 142;
		t.right = 135.48000000000002;
		t.source = "dk_lx_png";
		t.top = 114;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 173.51;
		t.horizontalCenter = 5.759999999999991;
		t.source = "ui_json.sign_4_png";
		t.verticalCenter = -117.45499999999998;
		t.width = 188.09;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.height = 137;
		t.horizontalCenter = -0.2400000000000091;
		t.icon = "video_png";
		t.label = "Nhận miễn phí";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.verticalCenter = 137.04500000000002;
		t.width = 400;
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new eui.Button();
		this.btnCancel = t;
		t.anchorOffsetY = 0;
		t.height = 117;
		t.horizontalCenter = 0;
		t.label = "Tiếp";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnNoBg";
		t.verticalCenter = 234.54500000000002;
		t.width = 300;
		return t;
	};
	_proto.count_i = function () {
		var t = new UIText();
		this.count = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 39.7;
		t.horizontalCenter = 5.560000000000002;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "x6";
		t.textAlign = "center";
		t.verticalCenter = 14.545000000000016;
		t.width = 148.79;
		return t;
	};
	_proto.uiBanner_i = function () {
		var t = new UIBannerAd();
		this.uiBanner = t;
		t.bottom = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	return UIADBoxSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIAutoCompose/UIAutoCompose.exml'] = window.UIAutoComposeSkin = (function (_super) {
	__extends(UIAutoComposeSkin, _super);
	function UIAutoComposeSkin() {
		_super.call(this);
		this.skinParts = ["bg","labelDisplay","btnVideo","btnStar","btnStar1","btnClose","uiAD","uiBanner","uiHtTop"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiBanner_i(),this.uiHtTop_i()];
	}
	var _proto = UIAutoComposeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 525.76;
		t.horizontalCenter = 0;
		t.verticalCenter = -62;
		t.width = 660;
		t.elementsContent = [this.bg_i(),this.labelDisplay_i(),this.btnVideo_i(),this.btnStar_i(),this.btnStar1_i(),this.btnClose_i(),this.uiAD_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 73;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "auto trong 180s";
		t.verticalAlign = "middle";
		t.width = 349.83;
		t.x = 121;
		t.y = 60.21;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "Nhận thưởng x2";
		t.scaleX = 0.9;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.verticalCenter = -33.379999999999995;
		t.width = 400;
		return t;
	};
	_proto.btnStar_i = function () {
		var t = new eui.Button();
		this.btnStar = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "Button green_png";
		t.label = "Mở";
		t.scaleX = 0.9;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreenStar";
		t.verticalCenter = 248.5;
		t.visible = false;
		t.width = 400;
		return t;
	};
	_proto.btnStar1_i = function () {
		var t = new eui.Button();
		this.btnStar1 = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.label = "Miễn phí";
		t.scaleX = 0.9;
		t.scaleY = 1;
		t.skinName = "UI.BtnBlueVideo";
		t.verticalCenter = -33.379999999999995;
		t.visible = false;
		t.width = 400;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -24;
		t.skinName = "UI.BtnCloseX";
		t.top = -16;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 162.12;
		t.width = 600;
		t.y = 352;
		return t;
	};
	_proto.uiBanner_i = function () {
		var t = new UIBannerAd();
		this.uiBanner = t;
		t.bottom = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.uiHtTop_i = function () {
		var t = new UIHts_Top();
		this.uiHtTop = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.htId = 7;
		t.scaleX = 1.33;
		t.scaleY = 1.33;
		t.verticalCenter = 285;
		t.width = 500;
		return t;
	};
	return UIAutoComposeSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIBank/UIBank.exml'] = window.UIBankSkin = (function (_super) {
	__extends(UIBankSkin, _super);
	function UIBankSkin() {
		_super.call(this);
		this.skinParts = ["img","slider_388","btnVideo","btnStar","btnBack","lMoney","uiAD","uiHtTop"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiAD_i(),this.uiHtTop_i()];
	}
	var _proto = UIBankSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 719.69;
		t.horizontalCenter = 0;
		t.verticalCenter = -48;
		t.width = 665;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.img_i(),this._Image4_i(),this._Image5_i(),this.slider_388_i(),this.btnVideo_i(),this.btnStar_i(),this.btnBack_i(),this.lMoney_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Deposit Title_png";
		t.top = -141;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 50;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "money_png";
		t.top = 256;
		t.x = 209.67;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(12,0,46,29);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "money bottom_png";
		t.top = 338;
		t.width = 400;
		return t;
	};
	_proto.slider_388_i = function () {
		var t = new eui.Image();
		this.slider_388 = t;
		t.height = 28;
		t.left = 139;
		t.scale9Grid = new egret.Rectangle(7,2,45,13);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "moneyslider_png";
		t.top = 346;
		t.width = 134;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.anchorOffsetX = 0;
		t.height = 137;
		t.horizontalCenter = 0.5;
		t.icon = "video_png";
		t.label = "Nhận x3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.width = 400;
		t.y = 397.78;
		return t;
	};
	_proto.btnStar_i = function () {
		var t = new eui.Button();
		this.btnStar = t;
		t.height = 137;
		t.horizontalCenter = 0.5;
		t.label = "Nhận được";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreenStar";
		t.width = 400;
		t.y = 542.11;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -12;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "UI.BtnCloseX";
		t.top = -7;
		return t;
	};
	_proto.lMoney_i = function () {
		var t = new UIText();
		this.lMoney = t;
		t.height = 49;
		t.width = 200;
		t.x = 287;
		t.y = 273.76;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.height = 150;
		t.horizontalCenter = 134;
		t.scaleX = 0.68;
		t.scaleY = 0.7;
		t.verticalCenter = -465.5;
		t.width = 600;
		return t;
	};
	_proto.uiHtTop_i = function () {
		var t = new UIHts_Top();
		this.uiHtTop = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.htId = 4;
		t.scaleX = 1.33;
		t.scaleY = 1.33;
		t.verticalCenter = 399;
		t.width = 500;
		return t;
	};
	return UIBankSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIBattle/UIBattle.exml'] = window.UIBattleSkin = (function (_super) {
	__extends(UIBattleSkin, _super);
	function UIBattleSkin() {
		_super.call(this);
		this.skinParts = ["LevUpAction","NewRank","PigShake","effect","buyAnim","btnActiveAnim","imgUp","imgStar","imgRank","imgRankLv","imgRankLv2","imgRankName","gRankView","expBorder","slider27_308","lStar","btnPig","btnLuckyWheel","btnLuckyWheel_51","btnTask","btnDungeon","image","gBoxView","btnStars","btnToutiao","lToutiao","flagToutiao","btnToutiaoShare","lToutiaoShare","btnLadder","btnMoreGame","btnBulletScreen","btnLimitActive","gTopView","buffSpdUp","buffX5Money","buffAutoCompose","gBuffs","guideEffectAuto","guideEffectSpd","btnShop","btnSpdup","btnAuto","imgRecovery","shopFreeFlag","gBottomView","btnRankUp","imgMoney","lMoney","imgDe","buyEffect","attEffect","gEffectView","flyBox","btnBuy","imgNRank","imgNRankLv","imgNRankLv2","imgNRankName","gNewRankView","uiHts","uiBulletScreen"];
		
		this.height = 1334;
		this.width = 750;
		this.LevUpAction_i();
		this.NewRank_i();
		this.PigShake_i();
		this.effect_i();
		this.buyAnim_i();
		this.btnActiveAnim_i();
		this.elementsContent = [this.imgUp_i(),this.gTopView_i(),this.gBuffs_i(),this.gBottomView_i(),this._Group1_i(),this.gEffectView_i(),this.flyBox_i(),this.btnBuy_i(),this.gNewRankView_i(),this.uiHts_i(),this.uiBulletScreen_i()];
		
		eui.Binding.$bindProperties(this, ["btnRankUp"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [13],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["gNewRankView"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"width");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [-2],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, [134.51],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [56.08],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, ["btnPig"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object12,"rotation");
		eui.Binding.$bindProperties(this, [4],[],this._Object13,"rotation");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [-4],[],this._Object14,"rotation");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [4],[],this._Object15,"rotation");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object15,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"rotation");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleY");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0.75],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [0.25],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [-180],[],this._Object18,"rotation");
		eui.Binding.$bindProperties(this, [0.75],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [-360],[],this._Object19,"rotation");
		eui.Binding.$bindProperties(this, ["btnBuy"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object21,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object21,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object22,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object22,"scaleY");
		eui.Binding.$bindProperties(this, ["btnLimitActive"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object24,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object24,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object25,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object25,"scaleY");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object26,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object26,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object27,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object27,"scaleY");
	}
	var _proto = UIBattleSkin.prototype;

	_proto.LevUpAction_i = function () {
		var t = new egret.tween.TweenGroup();
		this.LevUpAction = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object3_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "quartIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "quartOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.NewRank_i = function () {
		var t = new egret.tween.TweenGroup();
		this.NewRank = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto.PigShake_i = function () {
		var t = new egret.tween.TweenGroup();
		this.PigShake = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto.effect_i = function () {
		var t = new egret.tween.TweenGroup();
		this.effect = t;
		t.items = [this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.props = this._Object20_i();
		t.paths = [this._Set4_i(),this._To14_i(),this._To15_i()];
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 1250;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 1250;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto.buyAnim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.buyAnim = t;
		t.items = [this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.props = this._Object23_i();
		t.paths = [this._Set5_i(),this._To16_i(),this._To17_i()];
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto.btnActiveAnim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.btnActiveAnim = t;
		t.items = [this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.props = this._Object28_i();
		t.paths = [this._Set6_i(),this._To18_i(),this._To19_i(),this._To20_i(),this._To21_i(),this._To22_i()];
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To21_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To22_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		return t;
	};
	_proto.imgUp_i = function () {
		var t = new eui.Image();
		this.imgUp = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(254,28,4,16);
		t.source = "";
		t.top = 1;
		return t;
	};
	_proto.gTopView_i = function () {
		var t = new eui.Group();
		this.gTopView = t;
		t.height = 248;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.imgStar_i(),this.gRankView_i(),this.expBorder_i(),this.slider27_308_i(),this.lStar_i(),this.btnPig_i(),this.btnLuckyWheel_i(),this.btnLuckyWheel_51_i(),this.btnTask_i(),this.gBoxView_i(),this.btnStars_i(),this.btnToutiao_i(),this.lToutiao_i(),this.flagToutiao_i(),this.btnToutiaoShare_i(),this.lToutiaoShare_i(),this.btnLadder_i(),this.btnMoreGame_i(),this.btnBulletScreen_i(),this.btnLimitActive_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.right = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bbottom_png";
		t.top = 261;
		t.width = 141;
		return t;
	};
	_proto.imgStar_i = function () {
		var t = new eui.Image();
		this.imgStar = t;
		t.bottom = -55;
		t.right = 153;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Stars_png";
		return t;
	};
	_proto.gRankView_i = function () {
		var t = new eui.Group();
		this.gRankView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.horizontalCenter = -233;
		t.verticalCenter = -24;
		t.width = 134;
		t.elementsContent = [this.imgRank_i(),this.imgRankLv_i(),this.imgRankLv2_i(),this.imgRankName_i()];
		return t;
	};
	_proto.imgRank_i = function () {
		var t = new eui.Image();
		this.imgRank = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.Diamonds_png";
		t.y = 0.5;
		return t;
	};
	_proto.imgRankLv_i = function () {
		var t = new eui.Image();
		this.imgRankLv = t;
		t.horizontalCenter = 2.5;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "1x_png";
		t.verticalCenter = 19.5;
		t.visible = false;
		return t;
	};
	_proto.imgRankLv2_i = function () {
		var t = new eui.Image();
		this.imgRankLv2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.46;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "1x_png";
		t.width = 36.22;
		t.x = 89.04;
		t.y = 125.5;
		return t;
	};
	_proto.imgRankName_i = function () {
		var t = new eui.Image();
		this.imgRankName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "rank1_png";
		t.width = 86.56;
		t.x = 15.66;
		t.y = 125.5;
		return t;
	};
	_proto.expBorder_i = function () {
		var t = new eui.Image();
		this.expBorder = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87;
		t.left = 251;
		t.scale9Grid = new egret.Rectangle(19,23,46,5);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "EXPB_png";
		t.top = 62;
		t.width = 292;
		return t;
	};
	_proto.slider27_308_i = function () {
		var t = new eui.Image();
		this.slider27_308 = t;
		t.anchorOffsetX = 0;
		t.left = 255;
		t.scale9Grid = new egret.Rectangle(13,15,44,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "EXP_png";
		t.top = 69;
		t.touchEnabled = false;
		t.width = 281;
		return t;
	};
	_proto.lStar_i = function () {
		var t = new UIText();
		this.lStar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.textAlign = "center";
		t.width = 197;
		t.x = 581;
		t.y = 262.2;
		return t;
	};
	_proto.btnPig_i = function () {
		var t = new eui.Button();
		this.btnPig = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.horizontalCenter = -232.5;
		t.icon = "Piggy bank_png";
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnIcon";
		t.verticalCenter = 171.5;
		t.width = 84;
		return t;
	};
	_proto.btnLuckyWheel_i = function () {
		var t = new eui.Button();
		this.btnLuckyWheel = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.horizontalCenter = -146;
		t.icon = "turntable icon_png";
		t.label = "";
		t.skinName = "UI.BtnIconRedPoint";
		t.verticalCenter = 171.5;
		t.width = 84;
		return t;
	};
	_proto.btnLuckyWheel_51_i = function () {
		var t = new eui.Button();
		this.btnLuckyWheel_51 = t;
		t.height = 83;
		t.horizontalCenter = -146;
		t.icon = "51_turntableicon_png";
		t.label = "Button";
		t.skinName = "UI.BtnIconRedPoint";
		t.verticalCenter = 171.5;
		t.width = 84;
		t.x = 187;
		t.y = 254;
		return t;
	};
	_proto.btnTask_i = function () {
		var t = new eui.Button();
		this.btnTask = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "task_png";
		t.label = "";
		t.skinName = "UI.BtnIconRedPoint";
		t.width = 84;
		t.x = 280;
		t.y = 254;
		return t;
	};
	_proto.gBoxView_i = function () {
		var t = new eui.Group();
		this.gBoxView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.elementsContent = [this.btnDungeon_i(),this.image_i()];
		return t;
	};
	_proto.btnDungeon_i = function () {
		var t = new eui.Button();
		this.btnDungeon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 212;
		t.icon = "enter_png";
		t.label = "Thử thách";
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.skinName = "UI.BtnIcon";
		t.width = 237;
		t.x = 593.95;
		t.y = 98.1;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.horizontalCenter = 312;
		t.source = "thunder_ball_png";
		t.verticalCenter = 40;
		return t;
	};
	_proto.btnStars_i = function () {
		var t = new eui.Button();
		this.btnStars = t;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.icon = "Plus_png";
		t.label = "";
		t.right = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnIcon";
		t.top = 248;
		t.width = 56;
		return t;
	};
	_proto.btnToutiao_i = function () {
		var t = new eui.Button();
		this.btnToutiao = t;
		t.horizontalCenter = -323;
		t.icon = "ui_json.toutiao_png";
		t.label = "";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "UI.BtnIconRedPoint";
		t.verticalCenter = 528;
		return t;
	};
	_proto.lToutiao_i = function () {
		var t = new eui.Label();
		this.lToutiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 36.73;
		t.horizontalCenter = -325;
		t.rotation = 0.89;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 27;
		t.stroke = 2;
		t.text = "Kỷ lục";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 562;
		t.width = 89.93;
		return t;
	};
	_proto.flagToutiao_i = function () {
		var t = new eui.Component();
		this.flagToutiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.skinName = "ToutiaoShare";
		t.width = 186.66;
		t.x = 78.34;
		t.y = 556.49;
		return t;
	};
	_proto.btnToutiaoShare_i = function () {
		var t = new eui.Button();
		this.btnToutiaoShare = t;
		t.height = 100;
		t.icon = "ui_json.share_png";
		t.label = "";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "UI.BtnIcon";
		t.width = 100;
		t.x = 15.35;
		t.y = 705.8;
		return t;
	};
	_proto.lToutiaoShare_i = function () {
		var t = new eui.Label();
		this.lToutiaoShare = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 36.73;
		t.horizontalCenter = -325;
		t.rotation = 0.89;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 27;
		t.stroke = 2;
		t.text = "Chia sẻ";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 653;
		t.width = 89.93;
		return t;
	};
	_proto.btnLadder_i = function () {
		var t = new eui.Button();
		this.btnLadder = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "ui_json.ladder_png";
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnIcon";
		t.visible = false;
		t.width = 84;
		t.x = 14;
		t.y = 389.15;
		return t;
	};
	_proto.btnMoreGame_i = function () {
		var t = new eui.Button();
		this.btnMoreGame = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "ui_json.moregame_png";
		t.label = "";
		t.skinName = "UI.BtnIcon";
		t.width = 84;
		t.x = 14;
		t.y = 474.57;
		return t;
	};
	_proto.btnBulletScreen_i = function () {
		var t = new eui.Button();
		this.btnBulletScreen = t;
		t.currentState = "check";
		t.label = "";
		t.skinName = "BtnBulletScreen";
		t.x = -0.04;
		t.y = 372.51;
		return t;
	};
	_proto.btnLimitActive_i = function () {
		var t = new eui.Button();
		this.btnLimitActive = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 42;
		t.height = 84;
		t.icon = "bagIcon_png";
		t.label = "Button";
		t.skinName = "UI.BtnIconRedPointLeft";
		t.width = 84;
		t.x = 413;
		t.y = 296;
		return t;
	};
	_proto.gBuffs_i = function () {
		var t = new eui.Group();
		this.gBuffs = t;
		t.height = 400;
		t.right = 20;
		t.top = 434;
		t.width = 70;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.buffSpdUp_i(),this.buffX5Money_i(),this.buffAutoCompose_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto.buffSpdUp_i = function () {
		var t = new UIBuffIcon();
		this.buffSpdUp = t;
		t.height = 64;
		t.mode = 0;
		t.width = 64;
		t.x = 42;
		t.y = 76;
		return t;
	};
	_proto.buffX5Money_i = function () {
		var t = new UIBuffIcon();
		this.buffX5Money = t;
		t.height = 64;
		t.mode = 1;
		t.width = 64;
		t.x = 52;
		t.y = 86;
		return t;
	};
	_proto.buffAutoCompose_i = function () {
		var t = new UIBuffIcon();
		this.buffAutoCompose = t;
		t.height = 64;
		t.mode = 2;
		t.width = 64;
		t.x = 62;
		t.y = 96;
		return t;
	};
	_proto.gBottomView_i = function () {
		var t = new eui.Group();
		this.gBottomView = t;
		t.bottom = 0;
		t.height = 102;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this.guideEffectAuto_i(),this.guideEffectSpd_i(),this.btnShop_i(),this.btnSpdup_i(),this.btnAuto_i(),this.imgRecovery_i(),this.shopFreeFlag_i()];
		return t;
	};
	_proto.guideEffectAuto_i = function () {
		var t = new eui.Image();
		this.guideEffectAuto = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "ui_json.btnEffect_png";
		t.width = 130;
		t.x = 662.46;
		t.y = 46.05;
		return t;
	};
	_proto.guideEffectSpd_i = function () {
		var t = new eui.Image();
		this.guideEffectSpd = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "ui_json.btnEffect_png";
		t.width = 130;
		t.x = 180.09;
		t.y = 49.09;
		return t;
	};
	_proto.btnShop_i = function () {
		var t = new eui.Button();
		this.btnShop = t;
		t.anchorOffsetY = 0;
		t.bottom = 8;
		t.height = 83;
		t.icon = "shop_png";
		t.label = "Mua!";
		t.right = 149;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnIcon";
		t.width = 77;
		return t;
	};
	_proto.btnSpdup_i = function () {
		var t = new eui.Button();
		this.btnSpdup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.88;
		t.icon = "speedZ_png";
		t.label = "Mua!";
		t.left = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnIconRedPoint";
		t.width = 85.5;
		t.y = 8.85;
		return t;
	};
	_proto.btnAuto_i = function () {
		var t = new eui.Button();
		this.btnAuto = t;
		t.anchorOffsetY = 0;
		t.bottom = 9;
		t.height = 87;
		t.icon = "automatic_png";
		t.label = "Mua!";
		t.right = 47;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnIconRedPoint";
		t.width = 84;
		return t;
	};
	_proto.imgRecovery_i = function () {
		var t = new eui.Image();
		this.imgRecovery = t;
		t.anchorOffsetX = 38.5;
		t.anchorOffsetY = 38.5;
		t.bottom = 14;
		t.fillMode = "scale";
		t.left = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recovery_png";
		return t;
	};
	_proto.shopFreeFlag_i = function () {
		var t = new eui.Component();
		this.shopFreeFlag = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 75;
		t.height = 30;
		t.right = 152;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.skinName = "FreeFlag";
		t.width = 38.67;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.elementsContent = [this.btnRankUp_i(),this.imgMoney_i(),this.lMoney_i()];
		return t;
	};
	_proto.btnRankUp_i = function () {
		var t = new eui.Image();
		this.btnRankUp = t;
		t.horizontalCenter = 23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.y = 12;
		return t;
	};
	_proto.imgMoney_i = function () {
		var t = new eui.Image();
		this.imgMoney = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "money_png";
		t.x = 235;
		t.y = 146;
		return t;
	};
	_proto.lMoney_i = function () {
		var t = new UIText();
		this.lMoney = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.horizontalCenter = 27;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.textAlign = "center";
		t.width = 197;
		t.y = 164.9;
		return t;
	};
	_proto.gEffectView_i = function () {
		var t = new eui.Group();
		this.gEffectView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88.85;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.width = 190.49;
		t.x = 537.7;
		t.y = 304;
		t.elementsContent = [this.imgDe_i(),this._Image2_i(),this.buyEffect_i(),this.attEffect_i()];
		return t;
	};
	_proto.imgDe_i = function () {
		var t = new eui.Image();
		this.imgDe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.source = "";
		t.width = 45;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.source = "attack icon_png";
		t.width = 45;
		t.x = 5;
		t.y = 43.83;
		return t;
	};
	_proto.buyEffect_i = function () {
		var t = new eui.BitmapLabel();
		this.buyEffect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 39.11;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "Giam gia (0%)";
		t.width = 217;
		t.x = 51;
		t.y = 9.08;
		return t;
	};
	_proto.attEffect_i = function () {
		var t = new eui.BitmapLabel();
		this.attEffect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 39.11;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "nang cao (0%)";
		t.width = 217;
		t.x = 51;
		t.y = 51.63;
		return t;
	};
	_proto.flyBox_i = function () {
		var t = new UIFlyBox();
		this.flyBox = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.btnBuy_i = function () {
		var t = new eui.Button();
		this.btnBuy = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 103;
		t.label = "1111";
		t.skinName = "UI.BtnMainBuy";
		t.x = 225;
		return t;
	};
	_proto.gNewRankView_i = function () {
		var t = new eui.Group();
		this.gNewRankView = t;
		t.anchorOffsetX = 53;
		t.anchorOffsetY = 18;
		t.height = 139;
		t.width = 106;
		t.x = 375.5;
		t.y = 500;
		t.elementsContent = [this.imgNRank_i(),this.imgNRankLv_i(),this.imgNRankLv2_i(),this.imgNRankName_i()];
		return t;
	};
	_proto.imgNRank_i = function () {
		var t = new eui.Image();
		this.imgNRank = t;
		t.height = 131.41;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "Diamonds_png";
		t.width = 137.92;
		t.x = 1;
		t.y = 1.84;
		return t;
	};
	_proto.imgNRankLv_i = function () {
		var t = new eui.Image();
		this.imgNRankLv = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "1x_png";
		t.visible = false;
		t.y = 72;
		return t;
	};
	_proto.imgNRankLv2_i = function () {
		var t = new eui.Image();
		this.imgNRankLv2 = t;
		t.height = 49;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "1x_png";
		t.width = 28;
		t.x = 79.96;
		t.y = 102.67;
		return t;
	};
	_proto.imgNRankName_i = function () {
		var t = new eui.Image();
		this.imgNRankName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "rank1_png";
		t.width = 83;
		t.x = 11.48;
		t.y = 104.67;
		return t;
	};
	_proto.uiHts_i = function () {
		var t = new UIHts();
		this.uiHts = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.visible = false;
		t.width = 200;
		t.x = 3;
		t.y = 485;
		return t;
	};
	_proto.uiBulletScreen_i = function () {
		var t = new UIBulletScreen();
		this.uiBulletScreen = t;
		t.anchorOffsetY = 0;
		t.height = 1082.12;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 750;
		t.y = 249.88;
		return t;
	};
	return UIBattleSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIBattle/UIBuffAction.exml'] = window.UIBuffActionSkin = (function (_super) {
	__extends(UIBuffActionSkin, _super);
	function UIBuffActionSkin() {
		_super.call(this);
		this.skinParts = ["BuffAAction","BuffBAction","BuffCAction","image","BuffAbg","BuffAText","buffA","BuffAbg0","BuffAText0","buffB","BuffAbg1","BuffAText1","buffC"];
		
		this.height = 1334;
		this.width = 750;
		this.BuffAAction_i();
		this.BuffBAction_i();
		this.BuffCAction_i();
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["buffA"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-13],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [751],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [-129],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, ["buffB"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, [750],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [-129],[],this._Object9,"y");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["buffC"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"y");
		eui.Binding.$bindProperties(this, [750],[],this._Object16,"x");
		eui.Binding.$bindProperties(this, [-129],[],this._Object16,"y");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"alpha");
	}
	var _proto = UIBuffActionSkin.prototype;

	_proto.BuffAAction_i = function () {
		var t = new egret.tween.TweenGroup();
		this.BuffAAction = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.ease = "sineIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.ease = "sineOut";
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.ease = "sineOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto.BuffBAction_i = function () {
		var t = new egret.tween.TweenGroup();
		this.BuffBAction = t;
		t.items = [this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._To7_i(),this._To8_i(),this._To9_i()];
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.ease = "sineIn";
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.ease = "sineOut";
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set3_i(),this._To10_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto.BuffCAction_i = function () {
		var t = new egret.tween.TweenGroup();
		this.BuffCAction = t;
		t.items = [this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._To13_i(),this._To14_i(),this._To15_i()];
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.ease = "sineIn";
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.ease = "sineOut";
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._To16_i(),this._To17_i(),this._To18_i()];
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.image_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.anchorOffsetY = 0;
		t.height = 522.14;
		t.horizontalCenter = 0;
		t.rotation = -15;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.verticalCenter = 0;
		t.width = 2000;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.buffA_i()];
		return t;
	};
	_proto.buffA_i = function () {
		var t = new eui.Group();
		this.buffA = t;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = -750;
		t.y = 139;
		t.elementsContent = [this.BuffAbg_i(),this.BuffAText_i()];
		return t;
	};
	_proto.BuffAbg_i = function () {
		var t = new eui.Image();
		this.BuffAbg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "";
		t.x = 136.5;
		t.y = 457;
		return t;
	};
	_proto.BuffAText_i = function () {
		var t = new eui.BitmapLabel();
		this.BuffAText = t;
		t.font = "font_fnt";
		t.rotation = -15;
		t.scaleX = 3;
		t.scaleY = 3;
		t.text = "Tốc độ ×2";
		t.x = 174.79;
		t.y = 661.63;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.buffB_i()];
		return t;
	};
	_proto.buffB_i = function () {
		var t = new eui.Group();
		this.buffB = t;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = -750;
		t.y = 139;
		t.elementsContent = [this.BuffAbg0_i(),this.BuffAText0_i()];
		return t;
	};
	_proto.BuffAbg0_i = function () {
		var t = new eui.Image();
		this.BuffAbg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "";
		t.x = 136.5;
		t.y = 457;
		return t;
	};
	_proto.BuffAText0_i = function () {
		var t = new eui.BitmapLabel();
		this.BuffAText0 = t;
		t.font = "font_fnt";
		t.rotation = -15;
		t.scaleX = 3;
		t.scaleY = 3;
		t.text = "Thuong x5";
		t.x = 174.79;
		t.y = 661.63;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.buffC_i()];
		return t;
	};
	_proto.buffC_i = function () {
		var t = new eui.Group();
		this.buffC = t;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = -750;
		t.y = 149;
		t.elementsContent = [this.BuffAbg1_i(),this.BuffAText1_i()];
		return t;
	};
	_proto.BuffAbg1_i = function () {
		var t = new eui.Image();
		this.BuffAbg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "";
		t.x = 136.5;
		t.y = 457;
		return t;
	};
	_proto.BuffAText1_i = function () {
		var t = new eui.BitmapLabel();
		this.BuffAText1 = t;
		t.font = "font_fnt";
		t.rotation = -15;
		t.scaleX = 3;
		t.scaleY = 3;
		t.text = "Auto";
		t.x = 174.79;
		t.y = 661.63;
		return t;
	};
	return UIBuffActionSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIBattle/UIBuffIcon.exml'] = window.UIBuffIconSkin = (function (_super) {
	__extends(UIBuffIconSkin, _super);
	function UIBuffIconSkin() {
		_super.call(this);
		this.skinParts = ["img","lTime","lInfo","gDesc"];
		
		this.height = 120;
		this.width = 364;
		this.elementsContent = [this._Group1_i(),this.gDesc_i()];
	}
	var _proto = UIBuffIconSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 64;
		t.elementsContent = [this.img_i(),this.lTime_i()];
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "Synthesisbuff_png";
		t.top = 0;
		t.x = -136;
		t.y = -68;
		return t;
	};
	_proto.lTime_i = function () {
		var t = new UIText();
		this.lTime = t;
		t.bottom = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.width = 260;
		t.x = -66;
		t.y = 120;
		return t;
	};
	_proto.gDesc_i = function () {
		var t = new eui.Group();
		this.gDesc = t;
		t.height = 120;
		t.right = 64;
		t.verticalCenter = 0;
		t.width = 300;
		t.elementsContent = [this._Image1_i(),this.lInfo_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -15;
		t.left = -15;
		t.right = -15;
		t.scale9Grid = new egret.Rectangle(55,44,41,74);
		t.source = "Bottom1_png";
		t.top = -15;
		return t;
	};
	_proto.lInfo_i = function () {
		var t = new eui.Label();
		this.lInfo = t;
		t.bottom = 20;
		t.left = 20;
		t.right = 20;
		t.size = 30;
		t.text = "Buff";
		t.top = 20;
		return t;
	};
	return UIBuffIconSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIBattle/UIFlyBox.exml'] = window.UIFlyBoxSkin = (function (_super) {
	__extends(UIFlyBoxSkin, _super);
	function UIFlyBoxSkin() {
		_super.call(this);
		this.skinParts = ["flyBox","gFlyBox"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gFlyBox_i()];
	}
	var _proto = UIFlyBoxSkin.prototype;

	_proto.gFlyBox_i = function () {
		var t = new eui.Group();
		this.gFlyBox = t;
		t.height = 144;
		t.width = 173;
		t.x = 129;
		t.y = 300;
		t.elementsContent = [this.flyBox_i()];
		return t;
	};
	_proto.flyBox_i = function () {
		var t = new eui.Image();
		this.flyBox = t;
		t.height = 144;
		t.horizontalCenter = 0;
		t.scaleX = -1;
		t.source = "";
		t.width = 173;
		t.y = 0;
		return t;
	};
	return UIFlyBoxSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIBattle/UIPause.exml'] = window.UIPauseSkin = (function (_super) {
	__extends(UIPauseSkin, _super);
	function UIPauseSkin() {
		_super.call(this);
		this.skinParts = ["imgPauseBG","btnMenu","btnSetting","btnSignDay","btnLuckyWheel","btnDebug0","btnDebug1","btnDebug2","btnDebug3","btnDebug4","btnDebug5","gBtns","gPauseView","t0","t1","t2","t3","t4","t5","t6","t7","gDebug"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gPauseView_i(),this.gDebug_i()];
	}
	var _proto = UIPauseSkin.prototype;

	_proto.gPauseView_i = function () {
		var t = new eui.Group();
		this.gPauseView = t;
		t.bottom = 0;
		t.top = 0;
		t.width = 100;
		t.x = 0;
		t.elementsContent = [this.imgPauseBG_i(),this._Image1_i(),this.btnMenu_i(),this.gBtns_i()];
		return t;
	};
	_proto.imgPauseBG_i = function () {
		var t = new eui.Image();
		this.imgPauseBG = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		t.visible = false;
		t.width = 3000;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -100;
		t.left = -30;
		t.scale9Grid = new egret.Rectangle(35,28,21,36);
		t.source = "menu bottom_png";
		t.top = -100;
		t.width = 150;
		return t;
	};
	_proto.btnMenu_i = function () {
		var t = new eui.Button();
		this.btnMenu = t;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.icon = "menu Open_png";
		t.label = "";
		t.left = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnIconRedPointLeft";
		t.top = 272;
		t.width = 100;
		t.x = 0;
		t.y = 248;
		return t;
	};
	_proto.gBtns_i = function () {
		var t = new eui.Group();
		this.gBtns = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 380;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.btnSetting_i(),this.btnSignDay_i(),this.btnLuckyWheel_i(),this.btnDebug0_i(),this.btnDebug1_i(),this.btnDebug2_i(),this.btnDebug3_i(),this.btnDebug4_i(),this.btnDebug5_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new eui.Button();
		this.btnSetting = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "Set up icon_png";
		t.label = "";
		t.skinName = "UI.BtnIcon";
		t.width = 77;
		return t;
	};
	_proto.btnSignDay_i = function () {
		var t = new eui.Button();
		this.btnSignDay = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "Sign in icon_png";
		t.label = "";
		t.skinName = "UI.BtnIconRedPoint";
		t.width = 77;
		return t;
	};
	_proto.btnLuckyWheel_i = function () {
		var t = new eui.Button();
		this.btnLuckyWheel = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "turntable icon_png";
		t.label = "";
		t.skinName = "UI.BtnIconRedPoint";
		t.visible = false;
		t.width = 84;
		return t;
	};
	_proto.btnDebug0_i = function () {
		var t = new eui.Button();
		this.btnDebug0 = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "bottom_png";
		t.label = "Zombie Bay";
		t.skinName = "UI.BtnDEBUG";
		t.visible = false;
		t.width = 84;
		return t;
	};
	_proto.btnDebug1_i = function () {
		var t = new eui.Button();
		this.btnDebug1 = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "bottom_png";
		t.label = "Hộp may mắn";
		t.skinName = "UI.BtnDEBUG";
		t.visible = false;
		t.width = 84;
		return t;
	};
	_proto.btnDebug2_i = function () {
		var t = new eui.Button();
		this.btnDebug2 = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "bottom_png";
		t.label = "Thưởng Offline";
		t.skinName = "UI.BtnDEBUG";
		t.visible = false;
		t.width = 84;
		return t;
	};
	_proto.btnDebug3_i = function () {
		var t = new eui.Button();
		this.btnDebug3 = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "bottom_png";
		t.label = "Chạy lại dữ liệu";
		t.skinName = "UI.BtnDEBUG";
		t.visible = false;
		t.width = 84;
		return t;
	};
	_proto.btnDebug4_i = function () {
		var t = new eui.Button();
		this.btnDebug4 = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "bottom_png";
		t.label = "Xin kim cương";
		t.skinName = "UI.BtnDEBUG";
		t.visible = false;
		t.width = 84;
		return t;
	};
	_proto.btnDebug5_i = function () {
		var t = new eui.Button();
		this.btnDebug5 = t;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.icon = "bottom_png";
		t.label = "Trải nghiệm đầy đủ";
		t.skinName = "UI.BtnDEBUG";
		t.visible = false;
		t.width = 84;
		return t;
	};
	_proto.gDebug_i = function () {
		var t = new eui.Group();
		this.gDebug = t;
		t.anchorOffsetY = 0;
		t.height = 404;
		t.right = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 200;
		t.y = 496;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.t0_i(),this.t1_i(),this.t2_i(),this.t3_i(),this.t4_i(),this.t5_i(),this.t6_i(),this.t7_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.t0_i = function () {
		var t = new UIText();
		this.t0 = t;
		t.height = 40;
		t.left = 0;
		t.top = 0;
		t.width = 200;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto.t1_i = function () {
		var t = new UIText();
		this.t1 = t;
		t.height = 40;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 200;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.t2_i = function () {
		var t = new UIText();
		this.t2 = t;
		t.height = 40;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 200;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.t3_i = function () {
		var t = new UIText();
		this.t3 = t;
		t.height = 40;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 200;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.t4_i = function () {
		var t = new UIText();
		this.t4 = t;
		t.height = 40;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 200;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.t5_i = function () {
		var t = new UIText();
		this.t5 = t;
		t.height = 40;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 200;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.t6_i = function () {
		var t = new UIText();
		this.t6 = t;
		t.height = 40;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 200;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.t7_i = function () {
		var t = new UIText();
		this.t7 = t;
		t.height = 40;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 200;
		t.x = 70;
		t.y = 70;
		return t;
	};
	return UIPauseSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIBulletScreen/UIBulletScreen.exml'] = window.UIBulletScreenSkin = (function (_super) {
	__extends(UIBulletScreenSkin, _super);
	function UIBulletScreenSkin() {
		_super.call(this);
		this.skinParts = ["lR0","lR1","lR2","lR3","lL0","lL1","lL2","lL3","gView"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gView_i()];
	}
	var _proto = UIBulletScreenSkin.prototype;

	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.anchorOffsetY = 0;
		t.height = 674;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = -104;
		t.width = 750;
		t.elementsContent = [this.lR0_i(),this.lR1_i(),this.lR2_i(),this.lR3_i(),this.lL0_i(),this.lL1_i(),this.lL2_i(),this.lL3_i()];
		return t;
	};
	_proto.lR0_i = function () {
		var t = new eui.Label();
		this.lR0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Chú ý! Zombie đang đến!";
		t.textAlign = "center";
		t.textColor = 0xfdda00;
		t.verticalAlign = "middle";
		t.verticalCenter = -260;
		t.x = 750;
		return t;
	};
	_proto.lR1_i = function () {
		var t = new eui.Label();
		this.lR1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Hả? Cái gì cơ?";
		t.textAlign = "center";
		t.textColor = 0xdb4520;
		t.verticalAlign = "middle";
		t.verticalCenter = -120;
		t.x = 750;
		return t;
	};
	_proto.lR2_i = function () {
		var t = new eui.Label();
		this.lR2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Hãy để cho chuyên gia xử lý";
		t.textAlign = "center";
		t.textColor = 0x16ec2d;
		t.verticalAlign = "middle";
		t.verticalCenter = 20;
		t.x = 750;
		return t;
	};
	_proto.lR3_i = function () {
		var t = new eui.Label();
		this.lR3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Hãy để cho chuyên gia xử lý";
		t.textAlign = "center";
		t.textColor = 0x6e00ff;
		t.verticalAlign = "middle";
		t.verticalCenter = 160;
		t.x = 750;
		return t;
	};
	_proto.lL0_i = function () {
		var t = new eui.Label();
		this.lL0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Chú ý! Zombie đang đến!";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -200;
		t.x = -348.48;
		return t;
	};
	_proto.lL1_i = function () {
		var t = new eui.Label();
		this.lL1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Hả? Cái gì cơ?";
		t.textAlign = "center";
		t.textColor = 0xF21A1A;
		t.verticalAlign = "middle";
		t.verticalCenter = -60;
		t.x = -361;
		return t;
	};
	_proto.lL2_i = function () {
		var t = new eui.Label();
		this.lL2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Hãy để cho chuyên gia xử lý";
		t.textAlign = "center";
		t.textColor = 0x0055ff;
		t.verticalAlign = "middle";
		t.verticalCenter = 80;
		t.x = -245;
		return t;
	};
	_proto.lL3_i = function () {
		var t = new eui.Label();
		this.lL3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Hãy để cho chuyên gia xử lý";
		t.textAlign = "center";
		t.textColor = 0xf40d64;
		t.verticalAlign = "middle";
		t.verticalCenter = 220;
		t.x = -245;
		return t;
	};
	return UIBulletScreenSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIBuyDiamond/UIBuyDiamond.exml'] = window.UIAutoComposeSkin = (function (_super) {
	__extends(UIAutoComposeSkin, _super);
	function UIAutoComposeSkin() {
		_super.call(this);
		this.skinParts = ["lStarNum","btnVideo","btnClose","gHasCount","btnClose1","gNoCount","uiAD","uiHtTop"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.gHasCount_i(),this.gNoCount_i(),this.uiAD_i(),this.uiHtTop_i()];
	}
	var _proto = UIAutoComposeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto.gHasCount_i = function () {
		var t = new eui.Group();
		this.gHasCount = t;
		t.height = 220;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 660;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.lStarNum_i(),this.btnVideo_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -17;
		t.left = -19;
		t.right = -18;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -17;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Stars_png";
		t.x = 74.01;
		t.y = 68;
		return t;
	};
	_proto.lStarNum_i = function () {
		var t = new eui.BitmapLabel();
		this.lStarNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 40;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "+ 5";
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 178.66;
		t.y = 71.66;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.height = 137;
		t.icon = "video_png";
		t.label = "Nhận (0/2)";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.verticalCenter = -1.5;
		t.width = 320;
		t.x = 317.49;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -70;
		t.skinName = "UI.BtnCloseX";
		t.top = -57;
		return t;
	};
	_proto.gNoCount_i = function () {
		var t = new eui.Group();
		this.gNoCount = t;
		t.height = 220;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 660;
		t.elementsContent = [this._Image4_i(),this.btnClose1_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -17;
		t.left = -19;
		t.right = -18;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -17;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto.btnClose1_i = function () {
		var t = new eui.Button();
		this.btnClose1 = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -39;
		t.skinName = "UI.BtnCloseX";
		t.top = -26;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "khong the mua them";
		t.x = 95.75;
		t.y = 81.5;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1.1;
		t.verticalCenter = -205;
		t.width = 600;
		return t;
	};
	_proto.uiHtTop_i = function () {
		var t = new UIHts_Top();
		this.uiHtTop = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.htId = 5;
		t.scaleX = 1.32;
		t.scaleY = 1.32;
		t.verticalCenter = 205;
		t.width = 500;
		return t;
	};
	return UIAutoComposeSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UICommon/UIAlert.exml'] = window.UIAlertSkin = (function (_super) {
	__extends(UIAlertSkin, _super);
	function UIAlertSkin() {
		_super.call(this);
		this.skinParts = ["anim1","headBg","desc","effectPos","img","num","btnOK"];
		
		this.height = 1334;
		this.width = 750;
		this.anim1_i();
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["headBg"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, ["desc"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, ["img"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, ["btnOK"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, ["num"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object13,"alpha");
	}
	var _proto = UIAlertSkin.prototype;

	_proto.anim1_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim1 = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.ease = "elasticOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.ease = "quadIn";
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._Wait1_i(),this._Set4_i(),this._To3_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 400;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.ease = "elasticOut";
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set5_i(),this._Wait2_i(),this._Set6_i(),this._To4_i()];
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 800;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.ease = "elasticOut";
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set7_i(),this._Wait3_i(),this._Set8_i(),this._To5_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1200;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.ease = "quadIn";
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 745.15;
		t.horizontalCenter = 0;
		t.verticalCenter = 22.5;
		t.width = 660;
		t.elementsContent = [this._Image2_i(),this.headBg_i(),this.desc_i(),this.effectPos_i(),this.img_i(),this.num_i(),this.btnOK_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 4.149999999999977;
		t.left = -18;
		t.right = -19;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -17;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto.headBg_i = function () {
		var t = new eui.Image();
		this.headBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 111.44;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.sign_2_png";
		t.width = 632.06;
		t.y = 31.149999999999977;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 68.67;
		t.horizontalCenter = 0;
		t.size = 37;
		t.text = "Chúc mừng đã đạt mốc thưởng";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 338;
		t.y = 31;
		return t;
	};
	_proto.effectPos_i = function () {
		var t = new eui.Group();
		this.effectPos = t;
		t.height = 207.55;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 177.18;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 207.55;
		t.horizontalCenter = 0;
		t.source = "ui_json.sign_1_png";
		t.width = 225;
		t.y = 177.18;
		return t;
	};
	_proto.num_i = function () {
		var t = new UIText();
		this.num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.33;
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.width = 146.67;
		t.y = 441;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.height = 137;
		t.icon = "Button green_png";
		t.label = "Mục đích";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreen";
		t.width = 300;
		t.x = 180;
		t.y = 510.54;
		return t;
	};
	return UIAlertSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UICommon/UIPopDialog.exml'] = window.UIPopDialogSkin = (function (_super) {
	__extends(UIPopDialogSkin, _super);
	function UIPopDialogSkin() {
		_super.call(this);
		this.skinParts = ["visable","IImage","lText","btnOK","btnOKCenter","btnCANCEL","lText1","gView","uiBanner"];
		
		this.height = 1334;
		this.width = 750;
		this.visable_i();
		this.elementsContent = [this._Image1_i(),this.gView_i(),this.uiBanner_i()];
		
		eui.Binding.$bindProperties(this, ["btnCANCEL"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [264],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [519],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [264],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [519],[],this._Object2,"y");
	}
	var _proto = UIPopDialogSkin.prototype;

	_proto.visable_i = function () {
		var t = new egret.tween.TweenGroup();
		this.visable = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.ease = "elasticIn";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = -188;
		t.width = 660;
		t.elementsContent = [this._Image2_i(),this.IImage_i(),this.lText_i(),this.btnOK_i(),this.btnOKCenter_i(),this.btnCANCEL_i(),this.lText1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -129;
		t.left = -18;
		t.right = -19;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -17;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto.IImage_i = function () {
		var t = new eui.Image();
		this.IImage = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 2;
		t.scaleX = 1.55;
		t.scaleY = 1.55;
		t.source = "adbox_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lText_i = function () {
		var t = new eui.BitmapLabel();
		this.lText = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "auto trong 180s";
		t.textAlign = "center";
		t.visible = false;
		t.width = 512.5;
		t.y = 69;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.height = 137;
		t.icon = "Button green_png";
		t.label = "Mục đích";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreen";
		t.width = 300;
		t.x = 180;
		t.y = 356;
		return t;
	};
	_proto.btnOKCenter_i = function () {
		var t = new eui.Button();
		this.btnOKCenter = t;
		t.height = 137;
		t.icon = "Button green_png";
		t.label = "Mục đích";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreen";
		t.width = 300;
		t.x = 180;
		t.y = 356;
		return t;
	};
	_proto.btnCANCEL_i = function () {
		var t = new eui.Button();
		this.btnCANCEL = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "Button blue_png";
		t.label = "Hủy";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "UI.BtnCancel";
		t.width = 300;
		t.y = 498;
		return t;
	};
	_proto.lText1_i = function () {
		var t = new eui.Label();
		this.lText1 = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 200;
		t.horizontalCenter = 0;
		t.size = 33;
		t.text = "Nhận kim cương";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 600;
		t.y = 69;
		return t;
	};
	_proto.uiBanner_i = function () {
		var t = new UIBannerAd();
		this.uiBanner = t;
		t.bottom = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	return UIPopDialogSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UICommon/UIPopTips.exml'] = window.UIPopTipsSkin = (function (_super) {
	__extends(UIPopTipsSkin, _super);
	function UIPopTipsSkin() {
		_super.call(this);
		this.skinParts = ["lTips1","lTips","gTips"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gTips_i()];
	}
	var _proto = UIPopTipsSkin.prototype;

	_proto.gTips_i = function () {
		var t = new eui.Group();
		this.gTips = t;
		t.height = 150;
		t.left = 0;
		t.right = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.y = 406;
		t.elementsContent = [this._Image1_i(),this.lTips1_i(),this.lTips_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .7;
		t.bottom = 0;
		t.left = -50;
		t.right = -50;
		t.scale9Grid = new egret.Rectangle(25,24,41,40);
		t.source = "menu bottom_png";
		t.top = 0;
		return t;
	};
	_proto.lTips1_i = function () {
		var t = new eui.BitmapLabel();
		this.lTips1 = t;
		t.bottom = 30;
		t.font = "font_fnt";
		t.horizontalCenter = 1;
		t.left = 100;
		t.right = 100;
		t.text = "1234567890";
		t.textAlign = "center";
		t.top = 30;
		t.verticalAlign = "middle";
		t.visible = false;
		return t;
	};
	_proto.lTips_i = function () {
		var t = new eui.Label();
		this.lTips = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.bottom = 30;
		t.fontFamily = "Arial";
		t.height = 90;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "1234567890";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 30;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 30;
		return t;
	};
	return UIPopTipsSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UICommon/UISellPopDialog.exml'] = window.UIPopDialogSkin = (function (_super) {
	__extends(UIPopDialogSkin, _super);
	function UIPopDialogSkin() {
		_super.call(this);
		this.skinParts = ["moneyNum","gView","btnCANCEL","btnOK","uiBanner"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiBanner_i()];
	}
	var _proto = UIPopDialogSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = -100;
		t.width = 660;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._BitmapLabel1_i(),this.moneyNum_i(),this.gView_i(),this.btnCANCEL_i(),this.btnOK_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = -17;
		t.left = -18.5;
		t.right = -18.5;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -15;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Arrow_png";
		t.x = 288;
		t.y = 207;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "money_png";
		t.x = 378;
		t.y = 199;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 56;
		t.text = "muon ban cay nay?";
		t.width = 364;
		t.x = 135;
		t.y = 52;
		return t;
	};
	_proto.moneyNum_i = function () {
		var t = new eui.BitmapLabel();
		this.moneyNum = t;
		t.font = "font_fnt";
		t.height = 39;
		t.text = "100.00aa";
		t.width = 160;
		t.x = 448;
		t.y = 217.5;
		return t;
	};
	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 100;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 173;
		t.y = 287;
		return t;
	};
	_proto.btnCANCEL_i = function () {
		var t = new eui.Button();
		this.btnCANCEL = t;
		t.height = 137;
		t.icon = "Button blue_png";
		t.label = "Hủy";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "UI.BtnCancel";
		t.verticalCenter = 185;
		t.width = 300;
		t.x = 23;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.height = 137;
		t.icon = "Button green_png";
		t.label = "Mục đích";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "UI.BtnGreen";
		t.verticalCenter = 184.5;
		t.width = 300;
		t.x = 350.34;
		return t;
	};
	_proto.uiBanner_i = function () {
		var t = new UIBannerAd();
		this.uiBanner = t;
		t.bottom = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	return UIPopDialogSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UICommon/UISliderHP.exml'] = window.UISliderHPSkin = (function (_super) {
	__extends(UISliderHPSkin, _super);
	function UISliderHPSkin() {
		_super.call(this);
		this.skinParts = ["imgHPMax","imgHP"];
		
		this.height = 14;
		this.width = 90;
		this.elementsContent = [this.imgHPMax_i(),this.imgHP_i()];
	}
	var _proto = UISliderHPSkin.prototype;

	_proto.imgHPMax_i = function () {
		var t = new eui.Image();
		this.imgHPMax = t;
		t.anchorOffsetY = 0;
		t.height = 14;
		t.left = 15;
		t.scale9Grid = new egret.Rectangle(2,1,25,16);
		t.source = "Bottom value_png";
		t.top = 0;
		t.width = 60;
		return t;
	};
	_proto.imgHP_i = function () {
		var t = new eui.Image();
		this.imgHP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.left = 17;
		t.scale9Grid = new egret.Rectangle(2,2,18,10);
		t.source = "attack value_png";
		t.top = 2;
		t.width = 56;
		return t;
	};
	return UISliderHPSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UICommon/UIText.exml'] = window.UITextSkin = (function (_super) {
	__extends(UITextSkin, _super);
	function UITextSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","gView"];
		
		this.elementsContent = [this.gView_i()];
	}
	var _proto = UITextSkin.prototype;

	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.labelDisplay_i()];
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return UITextSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UICommon/UIToggle.exml'] = window.UIToggleSkin = (function (_super) {
	__extends(UIToggleSkin, _super);
	function UIToggleSkin() {
		_super.call(this);
		this.skinParts = ["imgChecked","labelDisplay"];
		
		this.height = 100;
		this.width = 400;
		this.elementsContent = [this._Group1_i(),this.labelDisplay_i()];
	}
	var _proto = UIToggleSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.top = 0;
		t.width = 100;
		t.elementsContent = [this._Image1_i(),this.imgChecked_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .5;
		t.horizontalCenter = 18.5;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "circle_png";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.imgChecked_i = function () {
		var t = new eui.Image();
		this.imgChecked = t;
		t.alpha = .5;
		t.horizontalCenter = 18;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "Hook_png";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 1;
		t.left = 100;
		t.size = 31;
		t.text = "Xem video nhận thưởng";
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 300;
		return t;
	};
	return UIToggleSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIDownload/UIDownload.exml'] = window.UIDownloadSkin = (function (_super) {
	__extends(UIDownloadSkin, _super);
	function UIDownloadSkin() {
		_super.call(this);
		this.skinParts = ["imgProgress","lp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = UIDownloadSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 169;
		t.height = 111;
		t.horizontalCenter = 0.5;
		t.width = 414.82;
		t.elementsContent = [this._Image1_i(),this.imgProgress_i(),this.lp_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 62;
		t.height = 41;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(7,5,33,14);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_bg_png";
		t.width = 400;
		t.y = 280.9999999999999;
		return t;
	};
	_proto.imgProgress_i = function () {
		var t = new eui.Image();
		this.imgProgress = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 68;
		t.height = 30.34;
		t.left = 11;
		t.scale9Grid = new egret.Rectangle(4,4,33,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_fg_png";
		t.width = 0;
		t.y = 285.65999999999997;
		return t;
	};
	_proto.lp_i = function () {
		var t = new eui.Label();
		this.lp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 68;
		t.height = 29.33;
		t.horizontalCenter = -0.4099999999999966;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "xxxxxxx.png";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 390;
		t.y = 286.66999999999996;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.bottom = 25;
		t.height = 29.33;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Đang tải game, vui lòng chờ";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 374;
		t.y = 332.66999999999996;
		return t;
	};
	return UIDownloadSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIDungeon/UIDungeon_Cell.exml'] = window.UIDungeon_CellSkin = (function (_super) {
	__extends(UIDungeon_CellSkin, _super);
	function UIDungeon_CellSkin() {
		_super.call(this);
		this.skinParts = ["imgClear","imgLock","lLv"];
		
		this.height = 136;
		this.width = 136;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.imgClear_i(),this.imgLock_i(),this.lLv_i()];
	}
	var _proto = UIDungeon_CellSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "Blue box_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "Composite box_png";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto.imgClear_i = function () {
		var t = new eui.Image();
		this.imgClear = t;
		t.bottom = 53;
		t.horizontalCenter = 0;
		t.source = "clearance_png";
		return t;
	};
	_proto.imgLock_i = function () {
		var t = new eui.Image();
		this.imgLock = t;
		t.source = "lock_png";
		t.visible = false;
		t.x = 21;
		t.y = 21;
		return t;
	};
	_proto.lLv_i = function () {
		var t = new UIText();
		this.lLv = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.verticalCenter = -5;
		t.width = 80;
		return t;
	};
	return UIDungeon_CellSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIDungeon/UIDungeon.exml'] = window.UIDungeonSkin = (function (_super) {
	__extends(UIDungeonSkin, _super);
	function UIDungeonSkin() {
		_super.call(this);
		this.skinParts = ["desc","lCount","btnBack","gCells","uiAD"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.uiAD_i()];
	}
	var _proto = UIDungeonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 212;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "enter_png";
		t.top = 195;
		t.width = 237;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = -10;
		t.left = 2;
		t.right = 2;
		t.top = 400;
		t.elementsContent = [this._Image3_i(),this.desc_i(),this.lCount_i(),this.btnBack_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = -35;
		t.right = -35;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "Bottom1_png";
		t.top = -35;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.BitmapLabel();
		this.desc = t;
		t.font = "font_fnt";
		t.text = "level";
		t.visible = false;
		t.x = 253;
		t.y = 12;
		return t;
	};
	_proto.lCount_i = function () {
		var t = new eui.BitmapLabel();
		this.lCount = t;
		t.font = "font_fnt";
		t.text = "3/3";
		t.visible = false;
		t.x = 417;
		t.y = 12;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.height = 76;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = 5;
		t.skinName = "UI.BtnCloseX";
		t.top = 8;
		t.width = 77;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.bottom = 66;
		t.left = 20;
		t.right = 20;
		t.top = 85;
		t.viewport = this.gCells_i();
		return t;
	};
	_proto.gCells_i = function () {
		var t = new eui.Group();
		this.gCells = t;
		t.anchorOffsetY = 0;
		t.height = 792.79;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.height = 150;
		t.right = 7;
		t.scaleX = 0.84;
		t.scaleY = 0.84;
		t.top = 247;
		t.width = 600;
		return t;
	};
	return UIDungeonSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIDungeon/UIDungeonBattle.exml'] = window.UIDungeonBattleSkin = (function (_super) {
	__extends(UIDungeonBattleSkin, _super);
	function UIDungeonBattleSkin() {
		_super.call(this);
		this.skinParts = ["LevUpAction","NewRank","PigShake","imgUp","expBorder","slider_281","btnBack","lHp","lLv"];
		
		this.height = 1334;
		this.width = 750;
		this.LevUpAction_i();
		this.NewRank_i();
		this.PigShake_i();
		this.elementsContent = [this.imgUp_i(),this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.btnRankUp"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [20],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [48],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["hostComponent.gNewRankView"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"width");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [-2],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, [98.95],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [78],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, ["hostComponent.btnPig"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object12,"rotation");
		eui.Binding.$bindProperties(this, [4],[],this._Object13,"rotation");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [-4],[],this._Object14,"rotation");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [4],[],this._Object15,"rotation");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object15,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"rotation");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleY");
	}
	var _proto = UIDungeonBattleSkin.prototype;

	_proto.LevUpAction_i = function () {
		var t = new egret.tween.TweenGroup();
		this.LevUpAction = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object3_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "quartIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "quartOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.NewRank_i = function () {
		var t = new egret.tween.TweenGroup();
		this.NewRank = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "bounceOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto.PigShake_i = function () {
		var t = new egret.tween.TweenGroup();
		this.PigShake = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto.imgUp_i = function () {
		var t = new eui.Image();
		this.imgUp = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(254,28,4,16);
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 248;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.expBorder_i(),this.slider_281_i(),this.btnBack_i(),this.lHp_i(),this.lLv_i()];
		return t;
	};
	_proto.expBorder_i = function () {
		var t = new eui.Image();
		this.expBorder = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87;
		t.left = 251;
		t.scale9Grid = new egret.Rectangle(19,23,46,5);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "EXPB_png";
		t.top = 63;
		t.width = 292;
		t.x = 251;
		t.y = 97;
		return t;
	};
	_proto.slider_281_i = function () {
		var t = new eui.Image();
		this.slider_281 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.5;
		t.left = 255;
		t.scale9Grid = new egret.Rectangle(7,5,46,7);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "redslider_png";
		t.top = 70;
		t.touchEnabled = false;
		t.width = 281;
		t.x = 255;
		t.y = 104;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.label = "Button";
		t.right = 0;
		t.skinName = "UI.BtnBack";
		t.top = 250;
		return t;
	};
	_proto.lHp_i = function () {
		var t = new UIText();
		this.lHp = t;
		t.anchorOffsetX = 0;
		t.height = 40;
		t.textAlign = "center";
		t.width = 280;
		t.x = 255;
		t.y = 82.02;
		return t;
	};
	_proto.lLv_i = function () {
		var t = new UIText();
		this.lLv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.09;
		t.horizontalCenter = -230.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.textAlign = "center";
		t.verticalCenter = -22.5;
		t.width = 66.37;
		return t;
	};
	return UIDungeonBattleSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIDungeon/UIDungeonReward.exml'] = window.UIOfflineRewardSkin = (function (_super) {
	__extends(UIOfflineRewardSkin, _super);
	function UIOfflineRewardSkin() {
		_super.call(this);
		this.skinParts = ["shake","btnVideo","btnOK","lMoney","tVideo","group"];
		
		this.height = 1334;
		this.width = 750;
		this.shake_i();
		this.elementsContent = [this._Image1_i(),this.group_i()];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
	}
	var _proto = UIOfflineRewardSkin.prototype;

	_proto.shake_i = function () {
		var t = new egret.tween.TweenGroup();
		this.shake = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.ease = "elasticOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 665;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.btnVideo_i(),this.btnOK_i(),this.lMoney_i(),this._BitmapLabel1_i(),this.tVideo_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -13;
		t.left = -13;
		t.right = -13;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -13;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = -13;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "chart1_png";
		t.top = -210;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Stars_png";
		t.x = 161;
		t.y = 181;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = .5;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "video_png";
		t.visible = false;
		t.x = 419;
		t.y = 386;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.bottom = 153;
		t.height = 137;
		t.horizontalCenter = -1;
		t.icon = "video_png";
		t.label = "Nhận x3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.width = 400;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.anchorOffsetX = 0;
		t.bottom = 16;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "Button green_png";
		t.label = "Nhận được";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "UI.BtnCancel";
		t.width = 320;
		return t;
	};
	_proto.lMoney_i = function () {
		var t = new UIText();
		this.lMoney = t;
		t.height = 49;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "99999";
		t.textAlign = "left";
		t.width = 200;
		t.x = 312.6;
		t.y = 181;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "qua level";
		t.x = 175.5;
		t.y = 57;
		return t;
	};
	_proto.tVideo_i = function () {
		var t = new UIToggle();
		this.tVideo = t;
		t.height = 100;
		t.label = "Thưởng x2";
		t.visible = false;
		t.width = 400;
		t.x = 133;
		t.y = 355;
		return t;
	};
	return UIOfflineRewardSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIDungeon/UIEnterDungeon.exml'] = window.UIEnterDungeonSkin = (function (_super) {
	__extends(UIEnterDungeonSkin, _super);
	function UIEnterDungeonSkin() {
		_super.call(this);
		this.skinParts = ["desc","btnVideo","zombieView","btnClose","uiHtTop"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiHtTop_i()];
	}
	var _proto = UIEnterDungeonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 770.24;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 675.76;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.desc_i(),this.btnVideo_i(),this.zombieView_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -0.7599999999999909;
		t.left = -1;
		t.right = 0.7599999999999909;
		t.scale9Grid = new egret.Rectangle(21,18,128,115);
		t.source = "ui_json.store Bottom_png";
		t.top = 1;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 244.78;
		t.horizontalCenter = 0;
		t.source = "BOSS挑战_png";
		t.verticalCenter = -354.62;
		t.width = 439.7;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 123.88;
		t.horizontalCenter = 0.6200000000000045;
		t.lineSpacing = 5;
		t.size = 40;
		t.stroke = 1.1;
		t.text = "Thách đấu với trùm Boss?";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -177.12;
		t.width = 568.67;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.horizontalCenter = 0;
		t.icon = "ui_json.video_png";
		t.label = "Thử thách";
		t.skinName = "BtnNewVideo";
		t.verticalCenter = 224.38;
		t.width = 400;
		return t;
	};
	_proto.zombieView_i = function () {
		var t = new eui.Group();
		this.zombieView = t;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.horizontalCenter = 0;
		t.verticalCenter = 23.879999999999995;
		t.width = 300;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 0.12000000000000455;
		t.label = "Không";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "BtnNoBg";
		t.verticalCenter = 321.88;
		t.width = 400;
		return t;
	};
	_proto.uiHtTop_i = function () {
		var t = new UIHts_Top();
		this.uiHtTop = t;
		t.height = 120;
		t.horizontalCenter = 0.5;
		t.htId = 9;
		t.scaleX = 1.33;
		t.scaleY = 1.33;
		t.verticalCenter = 478;
		t.width = 500;
		return t;
	};
	return UIEnterDungeonSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIFlyBoxReward/UIFlyBoxReward.exml'] = window.UIFlyBoxRewardSkin = (function (_super) {
	__extends(UIFlyBoxRewardSkin, _super);
	function UIFlyBoxRewardSkin() {
		_super.call(this);
		this.skinParts = ["img","boxImg","boxReward","buffImg","buffImg1","buffReward","spdReward","toggle","btnVideo","btnFree","btnStar","btnClose","uiAD"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiAD_i()];
	}
	var _proto = UIFlyBoxRewardSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = -57;
		t.width = 670;
		t.elementsContent = [this.img_i(),this._Image2_i(),this.boxReward_i(),this.buffReward_i(),this.spdReward_i(),this._Image19_i(),this.toggle_i(),this.btnVideo_i(),this.btnFree_i(),this.btnStar_i(),this.btnClose_i()];
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = -173;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -195;
		t.left = -15;
		t.right = -15;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -15;
		return t;
	};
	_proto.boxReward_i = function () {
		var t = new eui.Group();
		this.boxReward = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 670;
		t.elementsContent = [this.boxImg_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto.boxImg_i = function () {
		var t = new eui.Image();
		this.boxImg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "Treasure chest_png";
		t.x = 71.62;
		t.y = 153.43;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "Treasure chest_png";
		t.x = 52.62;
		t.y = 235.43;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "Treasure chest_png";
		t.x = 162.62;
		t.y = 301.43;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "Treasure chest_png";
		t.x = 225.62;
		t.y = 151.43;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "Treasure chest_png";
		t.x = 297.62;
		t.y = 204.43;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "Treasure chest_png";
		t.x = 320.62;
		t.y = 281.43;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 1.8;
		t.source = "xb_png";
		t.x = 470.5;
		t.y = 139.03;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 1.8;
		t.source = "6b_png";
		t.x = 563.5;
		t.y = 136.03;
		return t;
	};
	_proto.buffReward_i = function () {
		var t = new eui.Group();
		this.buffReward = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		t.elementsContent = [this.buffImg_i(),this.buffImg1_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto.buffImg_i = function () {
		var t = new eui.Image();
		this.buffImg = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "";
		t.x = 86.5;
		t.y = 66;
		return t;
	};
	_proto.buffImg1_i = function () {
		var t = new eui.Image();
		this.buffImg1 = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 82;
		t.y = 449;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "money_png";
		t.x = 255;
		t.y = 217.43;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.source = "money_png";
		t.width = 125.59;
		t.x = 395.41;
		t.y = 156.43;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 147.26;
		t.source = "money_png";
		t.width = 151.59;
		t.x = 369.41;
		t.y = 273.74;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 170.57;
		t.source = "money_png";
		t.width = 175.59;
		t.x = 131.03;
		t.y = 278.43;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.source = "money_png";
		t.width = 125.59;
		t.x = 164.41;
		t.y = 95.43;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81.2;
		t.source = "money_png";
		t.width = 83.59;
		t.x = 361.61;
		t.y = 95.43;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81.2;
		t.source = "money_png";
		t.width = 83.59;
		t.x = 319.81;
		t.y = 251.43;
		return t;
	};
	_proto.spdReward_i = function () {
		var t = new eui.Group();
		this.spdReward = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 670;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 350;
		t.horizontalCenter = 0;
		t.source = "speedTitle_png";
		t.verticalCenter = -36;
		t.width = 350;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = -50;
		return t;
	};
	_proto.toggle_i = function () {
		var t = new UIToggle();
		this.toggle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.width = 378;
		t.y = 533;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "  mở miễn phí";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.width = 400;
		t.y = 576;
		return t;
	};
	_proto.btnFree_i = function () {
		var t = new eui.Button();
		this.btnFree = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "Giúp bạn bè";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnBlue";
		t.width = 400;
		t.y = 576;
		return t;
	};
	_proto.btnStar_i = function () {
		var t = new eui.Button();
		this.btnStar = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "Button green_png";
		t.label = "Mở";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreenStar";
		t.width = 400;
		t.y = 727;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -38;
		t.skinName = "UI.BtnCloseX";
		t.top = -30;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.height = 150;
		t.horizontalCenter = 142;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.verticalCenter = -470;
		t.width = 600;
		return t;
	};
	return UIFlyBoxRewardSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIFreeOrBuyTank/UIFreeOrBuyTank.exml'] = window.UIFreeOrBuyTankSkin = (function (_super) {
	__extends(UIFreeOrBuyTankSkin, _super);
	function UIFreeOrBuyTankSkin() {
		_super.call(this);
		this.skinParts = ["lMoney","btnVideo","btnStar","btnClose","uiBanner","uiHtTop"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group2_i(),this.uiBanner_i(),this.uiHtTop_i()];
	}
	var _proto = UIFreeOrBuyTankSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 668.97;
		t.horizontalCenter = 0;
		t.verticalCenter = -15.5;
		t.width = 660;
		t.elementsContent = [this._Image2_i(),this._BitmapLabel1_i(),this._Group1_i(),this.lMoney_i(),this.btnVideo_i(),this.btnStar_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -17;
		t.left = -18;
		t.right = -19;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -15;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "Không có mặt trời";
		t.width = 225.7;
		t.y = 79.28;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.horizontalCenter = -127;
		t.width = 272;
		t.y = 157.61;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.money_png";
		t.width = 150.02;
		t.x = 83.46;
		t.y = 4.67;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.86;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.money_png";
		t.width = 104.56;
		t.x = 38.48;
		t.y = 64.21;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99.7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.money_png";
		t.width = 111.07;
		t.x = 121.57;
		t.y = 82.93;
		return t;
	};
	_proto.lMoney_i = function () {
		var t = new UIText();
		this.lMoney = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.scaleX = 1.25;
		t.scaleY = 1.25;
		t.textAlign = "left";
		t.width = 177.33;
		t.x = 332.16;
		t.y = 215.14;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.anchorOffsetX = 0;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "Mua x2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.width = 400;
		t.y = 362.2;
		return t;
	};
	_proto.btnStar_i = function () {
		var t = new eui.Button();
		this.btnStar = t;
		t.anchorOffsetX = 0;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "Mua kim cương";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreenStar";
		t.width = 400;
		t.y = 506.26;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -39;
		t.skinName = "UI.BtnCloseX";
		t.top = -26;
		return t;
	};
	_proto.uiBanner_i = function () {
		var t = new UIBannerAd();
		this.uiBanner = t;
		t.bottom = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 620;
		return t;
	};
	_proto.uiHtTop_i = function () {
		var t = new UIHts_Top();
		this.uiHtTop = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.htId = 3;
		t.scaleX = 1.33;
		t.scaleY = 1.33;
		t.verticalCenter = -455;
		t.width = 500;
		return t;
	};
	return UIFreeOrBuyTankSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIFreeTankUp/UIFreeTankUp.exml'] = window.UIFreeTankUpSkin = (function (_super) {
	__extends(UIFreeTankUpSkin, _super);
	function UIFreeTankUpSkin() {
		_super.call(this);
		this.skinParts = ["gTank0","gTank1","btnVideo","btnClose","uiBanner"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiBanner_i()];
	}
	var _proto = UIFreeTankUpSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = -100;
		t.width = 660;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._BitmapLabel1_i(),this.gTank0_i(),this.gTank1_i(),this.btnVideo_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = -17;
		t.left = -18.5;
		t.right = -18.5;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -15;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Arrow_png";
		t.x = 301;
		t.y = 207;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 56;
		t.text = "nang cap mien phi?";
		t.width = 364;
		t.x = 173;
		t.y = 79.28;
		return t;
	};
	_proto.gTank0_i = function () {
		var t = new eui.Group();
		this.gTank0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 100;
		t.height = 100;
		t.width = 100;
		t.x = 173;
		t.y = 287;
		return t;
	};
	_proto.gTank1_i = function () {
		var t = new eui.Group();
		this.gTank1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 100;
		t.height = 100;
		t.width = 100;
		t.x = 483;
		t.y = 287;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.anchorOffsetX = 0;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "Nâng cấp miễn phí";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.width = 400;
		t.y = 340.36;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -39;
		t.skinName = "UI.BtnCloseX";
		t.top = -26;
		return t;
	};
	_proto.uiBanner_i = function () {
		var t = new UIBannerAd();
		this.uiBanner = t;
		t.bottom = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	return UIFreeTankUpSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIHts/UIHts_Top.exml'] = window.UIHts_TopSkin = (function (_super) {
	__extends(UIHts_TopSkin, _super);
	function UIHts_TopSkin() {
		_super.call(this);
		this.skinParts = ["anim","anim1","img0","l0","g0","img1","l1","g1","img2","l2","g2","img3","l3","g3","img4","l4","g4","img5","l5","g5","gView"];
		
		this.height = 120;
		this.width = 500;
		this.anim_i();
		this.anim1_i();
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["img3"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.35],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.35],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, ["img2"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1.35],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1.35],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleY");
	}
	var _proto = UIHts_TopSkin.prototype;

	_proto.anim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "quadIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.anim1_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim1 = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.left = 0;
		t.top = 0;
		t.width = 500;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,22,112,134);
		t.source = "ui_json.ht_png";
		t.top = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.width = 500;
		t.elementsContent = [this.gView_i()];
		return t;
	};
	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 740;
		t.x = -120;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.g0_i(),this.g1_i(),this.g2_i(),this.g3_i(),this.g4_i(),this.g5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "left";
		t.paddingLeft = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.g0_i = function () {
		var t = new eui.Group();
		this.g0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 0;
		t.elementsContent = [this.img0_i(),this.l0_i()];
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = -9;
		t.width = 80;
		return t;
	};
	_proto.l0_i = function () {
		var t = new eui.Label();
		this.l0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 16.4;
		t.horizontalCenter = 0;
		t.size = 11;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 43;
		t.width = 92.2;
		return t;
	};
	_proto.g1_i = function () {
		var t = new eui.Group();
		this.g1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 354;
		t.y = 9.5;
		t.elementsContent = [this.img1_i(),this.l1_i()];
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = -9;
		t.width = 80;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 16.4;
		t.horizontalCenter = 0;
		t.size = 11;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 43;
		t.width = 92.2;
		return t;
	};
	_proto.g2_i = function () {
		var t = new eui.Group();
		this.g2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 364;
		t.y = 15;
		t.elementsContent = [this.img2_i(),this.l2_i()];
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = -9;
		t.width = 80;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 16.4;
		t.horizontalCenter = 0;
		t.size = 11;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 43;
		t.width = 92.2;
		return t;
	};
	_proto.g3_i = function () {
		var t = new eui.Group();
		this.g3 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 374;
		t.y = 25;
		t.elementsContent = [this.img3_i(),this.l3_i()];
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = -9;
		t.width = 80;
		return t;
	};
	_proto.l3_i = function () {
		var t = new eui.Label();
		this.l3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 16.4;
		t.horizontalCenter = 0;
		t.size = 11;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 43;
		t.width = 92.2;
		return t;
	};
	_proto.g4_i = function () {
		var t = new eui.Group();
		this.g4 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 384;
		t.y = 35;
		t.elementsContent = [this.img4_i(),this.l4_i()];
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = -9;
		t.width = 80;
		return t;
	};
	_proto.l4_i = function () {
		var t = new eui.Label();
		this.l4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 16.4;
		t.horizontalCenter = 0;
		t.size = 11;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 43;
		t.width = 92.2;
		return t;
	};
	_proto.g5_i = function () {
		var t = new eui.Group();
		this.g5 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 394;
		t.y = 45;
		t.elementsContent = [this.img5_i(),this.l5_i()];
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = -9;
		t.width = 80;
		return t;
	};
	_proto.l5_i = function () {
		var t = new eui.Label();
		this.l5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 16.4;
		t.horizontalCenter = 0;
		t.size = 11;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 43;
		t.width = 92.2;
		return t;
	};
	return UIHts_TopSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIHts/UIHts.exml'] = window.UIHtsSkin = (function (_super) {
	__extends(UIHtsSkin, _super);
	function UIHtsSkin() {
		_super.call(this);
		this.skinParts = ["anim","icon","group"];
		
		this.height = 200;
		this.width = 200;
		this.anim_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [20],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [-20],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"rotation");
	}
	var _proto = UIHtsSkin.prototype;

	_proto.anim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object5_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 650;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.icon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(30,61,95,73);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "store Bottom_png";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.bottom = 7;
		t.left = 7;
		t.right = 7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 7;
		t.x = 7;
		t.y = 7;
		return t;
	};
	return UIHtsSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UILadder/UILadder.exml'] = window.UILadderSkin = (function (_super) {
	__extends(UILadderSkin, _super);
	function UILadderSkin() {
		_super.call(this);
		this.skinParts = ["btnLadderClose","btnShare","gLadderView","gLadder"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gLadder_i()];
	}
	var _proto = UILadderSkin.prototype;

	_proto.gLadder_i = function () {
		var t = new eui.Group();
		this.gLadder = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.gLadderView_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto.gLadderView_i = function () {
		var t = new eui.Group();
		this.gLadderView = t;
		t.anchorOffsetY = 0;
		t.bottom = 114;
		t.left = -3;
		t.right = 3;
		t.top = 194;
		t.elementsContent = [this._Image2_i(),this.btnLadderClose_i(),this._Image3_i(),this.btnShare_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -21;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(32,32,90,97);
		t.source = "Bottom1_png";
		t.top = 0;
		return t;
	};
	_proto.btnLadderClose_i = function () {
		var t = new eui.Button();
		this.btnLadderClose = t;
		t.label = "";
		t.right = -23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnCloseX";
		t.top = -15;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ui_json.fladder_png";
		t.y = 52;
		return t;
	};
	_proto.btnShare_i = function () {
		var t = new eui.Button();
		this.btnShare = t;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.icon = "ui_json.sharepoint_png";
		t.label = "Button";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "BtnGreen3";
		return t;
	};
	return UILadderSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UILoading.exml'] = window.UILoadingSkin = (function (_super) {
	__extends(UILoadingSkin, _super);
	function UILoadingSkin() {
		_super.call(this);
		this.skinParts = ["bg","loadfg","imgProgress","lProgress"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.loadfg_i(),this.imgProgress_i(),this.lProgress_i(),this._Label1_i()];
	}
	var _proto = UILoadingSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "covervivo_png";
		t.top = 0;
		return t;
	};
	_proto.loadfg_i = function () {
		var t = new eui.Image();
		this.loadfg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 218;
		t.height = 41;
		t.left = 195;
		t.scale9Grid = new egret.Rectangle(7,5,33,14);
		t.source = "loading_bg_png";
		t.width = 370.67;
		return t;
	};
	_proto.imgProgress_i = function () {
		var t = new eui.Image();
		this.imgProgress = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 224;
		t.height = 30.34;
		t.left = 199;
		t.scale9Grid = new egret.Rectangle(4,4,33,10);
		t.source = "loading_fg_png";
		t.width = 1;
		return t;
	};
	_proto.lProgress_i = function () {
		var t = new eui.Label();
		this.lProgress = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 224;
		t.height = 29.33;
		t.horizontalCenter = 5;
		t.size = 20;
		t.text = "0%";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 358;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.bottom = 178;
		t.height = 29.33;
		t.horizontalCenter = 9.5;
		t.size = 25;
		t.text = "Đang tải game...";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 353;
		return t;
	};
	return UILoadingSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UILogin/UILogin.exml'] = window.UILoginSkin = (function (_super) {
	__extends(UILoginSkin, _super);
	function UILoginSkin() {
		_super.call(this);
		this.skinParts = ["bg"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i()];
	}
	var _proto = UILoginSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "covervivo_png";
		t.top = 0;
		return t;
	};
	return UILoginSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UILuckyBag/UILuckyBag.exml'] = window.UILuckyBagSkin = (function (_super) {
	__extends(UILuckyBagSkin, _super);
	function UILuckyBagSkin() {
		_super.call(this);
		this.skinParts = ["btnVideoAnim","bg","btnVideo","btnClose"];
		
		this.height = 1334;
		this.width = 750;
		this.btnVideoAnim_i();
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["btnVideo"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
	}
	var _proto = UILuckyBagSkin.prototype;

	_proto.btnVideoAnim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.btnVideoAnim = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object3_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 840;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 702;
		t.elementsContent = [this.bg_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Image3_i(),this.btnVideo_i(),this.btnClose_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "t2_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105.43;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sign_2_png";
		t.verticalCenter = -374.5;
		t.width = 598;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 63.73;
		t.horizontalCenter = 0;
		t.size = 37;
		t.stroke = 0.8;
		t.text = "Cây trồng nổi giận 2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -394;
		t.width = 427;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 108;
		t.horizontalCenter = 0;
		t.lineSpacing = 3;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0x070707;
		t.text = "Hoàn thành chơi thử. Hãy nhận quà và chiến đấu với Zombie";
		t.textAlign = "center";
		t.textColor = 0xfcfcf9;
		t.verticalAlign = "middle";
		t.verticalCenter = -263;
		t.width = 598;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 293;
		t.horizontalCenter = 0;
		t.source = "ui_json.prize1_png";
		t.verticalCenter = -63.5;
		t.width = 321.61;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 68.5;
		t.horizontalCenter = 0;
		t.label = "Nhận quà";
		t.skinName = "BtnNewVideo";
		t.verticalCenter = 215.5;
		t.width = 400;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 68.5;
		t.horizontalCenter = 0;
		t.label = "Bỏ cuộc";
		t.skinName = "BtnNoBg";
		t.verticalCenter = 329.5;
		return t;
	};
	return UILuckyBagSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UILuckyWheel/UILuckyWheel.exml'] = window.UILuckyWheelSkin = (function (_super) {
	__extends(UILuckyWheelSkin, _super);
	function UILuckyWheelSkin() {
		_super.call(this);
		this.skinParts = ["img","arr","btnVideo","btnStar","btnstarday","btnClose","lVCount","uiAD"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiAD_i()];
	}
	var _proto = UILuckyWheelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 870.58;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 665;
		t.elementsContent = [this.img_i(),this._Image2_i(),this.arr_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.btnVideo_i(),this.btnStar_i(),this.btnstarday_i(),this.btnClose_i(),this.lVCount_i()];
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = -158;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -11.419999999999959;
		t.left = -18;
		t.right = -19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t1_png";
		t.top = -15;
		return t;
	};
	_proto.arr_i = function () {
		var t = new eui.Image();
		this.arr = t;
		t.anchorOffsetX = 272;
		t.anchorOffsetY = 274.5;
		t.horizontalCenter = 1.5;
		t.source = "disk_png";
		t.verticalCenter = -91.79000000000002;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chart3_png";
		t.visible = false;
		t.x = 364;
		t.y = 19;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chart1_png";
		t.visible = false;
		t.x = 73;
		t.y = 492;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chart2_png";
		t.visible = false;
		t.x = 472;
		t.y = 488;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 73.5;
		t.anchorOffsetY = 124;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Pointer_png";
		t.x = 336.97;
		t.y = 346.48;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.height = 137;
		t.horizontalCenter = 0.5;
		t.icon = "video_png";
		t.label = "Quay miễn phí";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.width = 400;
		t.y = 709;
		return t;
	};
	_proto.btnStar_i = function () {
		var t = new eui.Button();
		this.btnStar = t;
		t.height = 137;
		t.horizontalCenter = 0.5;
		t.icon = "Button green_png";
		t.label = "Quay thưởng";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreenStar";
		t.visible = false;
		t.width = 400;
		t.y = 848;
		return t;
	};
	_proto.btnstarday_i = function () {
		var t = new eui.Button();
		this.btnstarday = t;
		t.height = 137;
		t.horizontalCenter = 0.5;
		t.label = "Miễn phí";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnBlueVideo";
		t.width = 400;
		t.y = 711;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -40;
		t.skinName = "UI.BtnCloseX";
		t.top = -25;
		return t;
	};
	_proto.lVCount_i = function () {
		var t = new eui.BitmapLabel();
		this.lVCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 0;
		t.text = "mien phi 3/3";
		t.width = 235;
		t.y = 663;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 141;
		t.scaleX = 0.65;
		t.scaleY = 0.7;
		t.verticalCenter = -489.5;
		t.width = 600;
		return t;
	};
	return UILuckyWheelSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UINativeAd/UIAD_Top.exml'] = window.UIAD_TopSkin = (function (_super) {
	__extends(UIAD_TopSkin, _super);
	function UIAD_TopSkin() {
		_super.call(this);
		this.skinParts = ["bg","icon","btnDowd","adLabel"];
		
		this.height = 150;
		this.width = 600;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = UIAD_TopSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this.icon_i(),this.btnDowd_i(),this.adLabel_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(25,0,47,122);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "store Bottom_png";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -205.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Composite box_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.horizontalCenter = -205.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = -2;
		t.width = 123;
		t.x = 66;
		t.y = 60;
		return t;
	};
	_proto.btnDowd_i = function () {
		var t = new eui.Button();
		this.btnDowd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125.58;
		t.horizontalCenter = 141.5;
		t.label = "Tải xuống";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnGreen1";
		t.verticalCenter = 0;
		t.width = 275;
		return t;
	};
	_proto.adLabel_i = function () {
		var t = new eui.Label();
		this.adLabel = t;
		t.bottom = 15;
		t.right = 13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Quảng cáo";
		t.x = 547;
		t.y = 115;
		return t;
	};
	return UIAD_TopSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UINativeAd/UIBannerAd.exml'] = window.UIBannerAdSkin = (function (_super) {
	__extends(UIBannerAdSkin, _super);
	function UIBannerAdSkin() {
		_super.call(this);
		this.skinParts = ["iImg","btnClose","gView"];
		
		this.height = 220;
		this.width = 640;
		this.elementsContent = [this.gView_i()];
	}
	var _proto = UIBannerAdSkin.prototype;

	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.iImg_i(),this.btnClose_i(),this._Label1_i()];
		return t;
	};
	_proto.iImg_i = function () {
		var t = new eui.Image();
		this.iImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 2;
		t.source = "cbr_png";
		t.top = 2;
		t.width = 29;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 2;
		t.right = 2;
		t.size = 20;
		t.text = "Quảng cáo";
		return t;
	};
	return UIBannerAdSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UINativeAd/UINative_1_Ad.exml'] = window.UINative_1_AdSkin = (function (_super) {
	__extends(UINative_1_AdSkin, _super);
	function UINative_1_AdSkin() {
		_super.call(this);
		this.skinParts = ["iImg"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = UINative_1_AdSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.verticalCenter = 31;
		t.width = 120;
		t.x = 2;
		t.elementsContent = [this._Image1_i(),this.iImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(37,34,70,94);
		t.source = "store Bottom_png";
		t.top = 0;
		return t;
	};
	_proto.iImg_i = function () {
		var t = new eui.Image();
		this.iImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5.5;
		t.left = 5.5;
		t.right = 5.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 5.5;
		return t;
	};
	return UINative_1_AdSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UINativeAd/UIPageAd.exml'] = window.UIPageAdSkin = (function (_super) {
	__extends(UIPageAdSkin, _super);
	function UIPageAdSkin() {
		_super.call(this);
		this.skinParts = ["iTitle","iImg","iDesc","btnClose","btnAD"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = UIPageAdSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 783.88;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 730;
		t.elementsContent = [this._Image2_i(),this.iTitle_i(),this.iImg_i(),this._Image3_i(),this.iDesc_i(),this.btnClose_i(),this._Label1_i(),this.btnAD_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(22,11,133,68);
		t.scaleY = -1;
		t.source = "ui_json.Sign in BottomD_png";
		t.verticalCenter = -303.94;
		return t;
	};
	_proto.iTitle_i = function () {
		var t = new eui.Label();
		this.iTitle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 90;
		t.horizontalCenter = 0;
		t.size = 55;
		t.text = "Video quảng cáo";
		t.textAlign = "center";
		t.textColor = 0xf7860e;
		t.verticalAlign = "middle";
		t.verticalCenter = -304.94;
		t.width = 730;
		return t;
	};
	_proto.iImg_i = function () {
		var t = new eui.Image();
		this.iImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 416.25;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -49.94;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(22,14,133,86);
		t.source = "ui_json.nativeAD_1_png";
		t.verticalCenter = 204.06;
		return t;
	};
	_proto.iDesc_i = function () {
		var t = new eui.Label();
		this.iDesc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 90;
		t.horizontalCenter = 0;
		t.text = "Quá trời quảng cáo";
		t.textAlign = "center";
		t.textColor = 0xf709da;
		t.verticalAlign = "middle";
		t.verticalCenter = 204.06;
		t.width = 730;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46.51;
		t.horizontalCenter = 313.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "cbr_png";
		t.verticalCenter = -307.94;
		t.width = 47.75;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 333;
		t.size = 23;
		t.text = "Quảng cáo";
		t.textColor = 0x000000;
		t.verticalCenter = 236.56;
		return t;
	};
	_proto.btnAD_i = function () {
		var t = new eui.Button();
		this.btnAD = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.label = "Xem video";
		t.skinName = "BtnNativeAD";
		return t;
	};
	return UIPageAdSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UINewTank/UINewTank.exml'] = window.UINewTankSkin = (function (_super) {
	__extends(UINewTankSkin, _super);
	function UINewTankSkin() {
		_super.call(this);
		this.skinParts = ["blast","bg","image","img","btnClose","btnVideo","gView","sliderSpd_396","sliderAtk_396","lLv","tankName","group","uiAD"];
		
		this.height = 1334;
		this.width = 750;
		this.blast_i();
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiAD_i()];
		
		eui.Binding.$bindProperties(this, ["gView"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, ["btnVideo"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, ["btnClose"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"scaleY");
	}
	var _proto = UINewTankSkin.prototype;

	_proto.blast_i = function () {
		var t = new egret.tween.TweenGroup();
		this.blast = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set3_i(),this._To2_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set4_i(),this._Wait2_i(),this._Set5_i(),this._To3_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set6_i(),this._Wait3_i(),this._Set7_i(),this._To4_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set8_i(),this._Wait4_i(),this._Set9_i(),this._To5_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 650;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 620;
		t.horizontalCenter = 0;
		t.verticalCenter = -108;
		t.width = 660;
		t.elementsContent = [this.bg_i(),this.image_i(),this.img_i(),this.btnClose_i(),this.btnVideo_i(),this.gView_i(),this.group_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -444;
		t.left = -18;
		t.right = -19;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -95;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "";
		t.verticalCenter = -87;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.left = 0;
		t.source = "";
		t.top = -222;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "Mục đích";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "UI.BtnCancel";
		t.verticalCenter = 471.5;
		t.width = 320;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "+8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVidoeStar";
		t.verticalCenter = 336.5;
		t.width = 400;
		return t;
	};
	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 100;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -61;
		t.width = 100;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.sliderSpd_396_i(),this.sliderAtk_396_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.lLv_i(),this.tankName_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.left = 202;
		t.scale9Grid = new egret.Rectangle(10,6,50,17);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "money bottom_png";
		t.top = 482;
		t.width = 305;
		t.x = 89;
		t.y = -107;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.left = 202;
		t.scale9Grid = new egret.Rectangle(10,6,51,17);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "money bottom_png";
		t.top = 416;
		t.width = 305;
		t.y = -173;
		return t;
	};
	_proto.sliderSpd_396_i = function () {
		var t = new eui.Image();
		this.sliderSpd_396 = t;
		t.height = 30;
		t.left = 209;
		t.scale9Grid = new egret.Rectangle(2,1,18,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Attack gky value_png";
		t.top = 487;
		t.width = 290;
		t.x = 96;
		t.y = -102;
		return t;
	};
	_proto.sliderAtk_396_i = function () {
		var t = new eui.Image();
		this.sliderAtk_396 = t;
		t.height = 30;
		t.left = 209;
		t.scale9Grid = new egret.Rectangle(2,1,18,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "attack value_png";
		t.top = 421;
		t.width = 290;
		t.x = 96;
		t.y = -168;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -142.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "Attack gky_png";
		t.top = 457;
		t.x = 30;
		t.y = -132;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -141.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "attack_png";
		t.top = 393;
		t.x = 36;
		t.y = -196;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 109;
		t.source = "Grade bottom_png";
		t.top = 254;
		t.visible = false;
		return t;
	};
	_proto.lLv_i = function () {
		var t = new eui.BitmapLabel();
		this.lLv = t;
		t.font = "font_fnt";
		t.height = 50;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 50;
		t.x = 410.33;
		t.y = 268.01;
		return t;
	};
	_proto.tankName_i = function () {
		var t = new eui.BitmapLabel();
		this.tankName = t;
		t.bottom = 590;
		t.font = "font_fnt";
		t.height = 50;
		t.horizontalCenter = 1;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x2 sung";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 213;
		t.y = -44;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.verticalCenter = 524;
		t.width = 600;
		return t;
	};
	return UINewTankSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIOfflineReward/UIOfflineReward.exml'] = window.UIOfflineRewardSkin = (function (_super) {
	__extends(UIOfflineRewardSkin, _super);
	function UIOfflineRewardSkin() {
		_super.call(this);
		this.skinParts = ["img","bg","btnVideo","btnOK","lMoney","lBox","boxView","btnClose","gView","uiAD","uiHtTop"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.gView_i(),this.uiAD_i(),this.uiHtTop_i()];
	}
	var _proto = UIOfflineRewardSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto.gView_i = function () {
		var t = new eui.Group();
		this.gView = t;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = -48;
		t.width = 665;
		t.elementsContent = [this.img_i(),this.bg_i(),this.btnVideo_i(),this.btnOK_i(),this.lMoney_i(),this.lBox_i(),this.boxView_i(),this._Group1_i(),this.btnClose_i()];
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.left = 23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = -123;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -4;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = 0;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.height = 137;
		t.horizontalCenter = 0.5;
		t.icon = "video_png";
		t.label = "Nhận x3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.verticalCenter = 61.5;
		t.width = 400;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 343;
		t.height = 137;
		t.horizontalCenter = 0.5;
		t.icon = "Button green_png";
		t.label = "Nhận x2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreenStar";
		t.visible = false;
		t.width = 400;
		return t;
	};
	_proto.lMoney_i = function () {
		var t = new UIText();
		this.lMoney = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.textAlign = "left";
		t.width = 177.33;
		t.x = 336;
		t.y = 294.43;
		return t;
	};
	_proto.lBox_i = function () {
		var t = new UIText();
		this.lBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.textAlign = "left";
		t.width = 177.33;
		t.x = 336;
		t.y = 113.89;
		return t;
	};
	_proto.boxView_i = function () {
		var t = new eui.Group();
		this.boxView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.width = 276;
		t.x = 91.39;
		t.y = 43.82;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124.99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.High-treasure-chest_png";
		t.width = 135.02;
		t.x = 83.46;
		t.y = 4.67;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.86;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.High-treasure-chest_png";
		t.width = 102.56;
		t.x = 38.48;
		t.y = 64.21;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99.7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.High-treasure-chest_png";
		t.width = 103.07;
		t.x = 120.57;
		t.y = 80.93;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.width = 276;
		t.x = 91.39;
		t.y = 227.82;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.money_png";
		t.width = 150.02;
		t.x = 83.46;
		t.y = 4.67;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.86;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.money_png";
		t.width = 104.56;
		t.x = 38.48;
		t.y = 64.21;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99.7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ui_json.money_png";
		t.width = 111.07;
		t.x = 121.57;
		t.y = 82.93;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144.27;
		t.horizontalCenter = 0;
		t.icon = "Button green_png";
		t.label = "Tiếp";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "UI.BtnCancel";
		t.verticalCenter = 181;
		t.width = 309.9;
		t.x = 193;
		t.y = 663;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 289;
		t.width = 600;
		return t;
	};
	_proto.uiHtTop_i = function () {
		var t = new UIHts_Top();
		this.uiHtTop = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.htId = 2;
		t.scaleX = 1.33;
		t.scaleY = 1.33;
		t.verticalCenter = 483;
		t.width = 500;
		return t;
	};
	return UIOfflineRewardSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIRank/UIRank.exml'] = window.UIRankSkin = (function (_super) {
	__extends(UIRankSkin, _super);
	function UIRankSkin() {
		_super.call(this);
		this.skinParts = ["blast","btnRankDown","btnRankUp","btnClose","lText","rText","uiHtTop","gView1","bg","image1","img1","imgRank1","imgRank2","imgRankLv1","imgRankLv2","image","lRewardAtkImg","image2","image0","image3","lRank1","lRank2","lRewardAtk","lRewardAtkVal","lRewardStars","btnGetReward","btnVideo","tVideo","uiAD","gView2"];
		
		this.height = 1334;
		this.width = 750;
		this.blast_i();
		this.elementsContent = [this._Image1_i(),this.gView1_i(),this.gView2_i()];
		
		eui.Binding.$bindProperties(this, ["imgRank1"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, ["imgRankLv1"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, ["lRank1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, ["imgRank2"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object12,"scaleX");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object12,"scaleY");
		eui.Binding.$bindProperties(this, ["imgRankLv2"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"scaleY");
		eui.Binding.$bindProperties(this, ["lRank2"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object18,"scaleX");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object18,"scaleY");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"scaleY");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object23,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object23,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object24,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object24,"scaleY");
		eui.Binding.$bindProperties(this, ["lRewardAtkImg"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object25,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object25,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object26,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object26,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object26,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object27,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object27,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object27,"scaleY");
		eui.Binding.$bindProperties(this, ["lRewardAtkVal"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object29,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object29,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object29,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object30,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object30,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object30,"scaleY");
		eui.Binding.$bindProperties(this, ["lRewardAtk"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object31,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object31,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object31,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object32,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object32,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object32,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object33,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object33,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object33,"scaleY");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem13,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object34,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object34,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object34,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object35,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object35,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object35,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object36,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object36,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object36,"scaleY");
		eui.Binding.$bindProperties(this, ["lRewardStars"],[0],this._TweenItem14,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object37,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object37,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object37,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object38,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object38,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object38,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object39,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object39,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object39,"scaleY");
		eui.Binding.$bindProperties(this, ["btnVideo"],[0],this._TweenItem15,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object40,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object40,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object40,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object41,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object41,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object41,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object42,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object42,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object42,"scaleY");
		eui.Binding.$bindProperties(this, ["btnGetReward"],[0],this._TweenItem16,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object43,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object43,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object43,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object44,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object44,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object44,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object45,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object45,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object45,"scaleY");
		eui.Binding.$bindProperties(this, ["tVideo"],[0],this._TweenItem17,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object46,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object46,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object46,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object47,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object47,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object47,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object48,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object48,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object48,"scaleY");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem18,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object49,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object49,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object49,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object50,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object50,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object50,"scaleY");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object51,"alpha");
		eui.Binding.$bindProperties(this, [0.75],[],this._Object51,"scaleX");
		eui.Binding.$bindProperties(this, [0.75],[],this._Object51,"scaleY");
	}
	var _proto = UIRankSkin.prototype;

	_proto.blast_i = function () {
		var t = new egret.tween.TweenGroup();
		this.blast = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i(),this._TweenItem10_i(),this._TweenItem11_i(),this._TweenItem12_i(),this._TweenItem13_i(),this._TweenItem14_i(),this._TweenItem15_i(),this._TweenItem16_i(),this._TweenItem17_i(),this._TweenItem18_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._Wait1_i(),this._Set5_i(),this._To4_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 150;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set6_i(),this._Wait2_i(),this._Set7_i(),this._To5_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 350;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.ease = "elasticOut";
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set8_i(),this._Wait3_i(),this._Set9_i(),this._To6_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 350;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.ease = "elasticOut";
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set10_i(),this._Wait4_i(),this._Set11_i(),this._To7_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 350;
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.ease = "elasticOut";
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set12_i(),this._Wait5_i(),this._Set13_i(),this._To8_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set13_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set14_i(),this._Wait6_i(),this._Set15_i(),this._To9_i()];
		return t;
	};
	_proto._Set14_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set15_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set16_i(),this._Wait7_i(),this._Set17_i(),this._To10_i()];
		return t;
	};
	_proto._Set16_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set17_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._Set18_i(),this._Wait8_i(),this._Set19_i(),this._To11_i()];
		return t;
	};
	_proto._Set18_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._Wait8_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set19_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object29_i();
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		this._Object29 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.paths = [this._Set20_i(),this._Wait9_i(),this._Set21_i(),this._To12_i()];
		return t;
	};
	_proto._Set20_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object31_i();
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		this._Object31 = t;
		return t;
	};
	_proto._Wait9_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set21_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object32_i();
		return t;
	};
	_proto._Object32_i = function () {
		var t = {};
		this._Object32 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object33_i();
		return t;
	};
	_proto._Object33_i = function () {
		var t = {};
		this._Object33 = t;
		return t;
	};
	_proto._TweenItem13_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem13 = t;
		t.paths = [this._Set22_i(),this._Wait10_i(),this._Set23_i(),this._To13_i()];
		return t;
	};
	_proto._Set22_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object34_i();
		return t;
	};
	_proto._Object34_i = function () {
		var t = {};
		this._Object34 = t;
		return t;
	};
	_proto._Wait10_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set23_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object35_i();
		return t;
	};
	_proto._Object35_i = function () {
		var t = {};
		this._Object35 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object36_i();
		return t;
	};
	_proto._Object36_i = function () {
		var t = {};
		this._Object36 = t;
		return t;
	};
	_proto._TweenItem14_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem14 = t;
		t.paths = [this._Set24_i(),this._Wait11_i(),this._Set25_i(),this._To14_i()];
		return t;
	};
	_proto._Set24_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object37_i();
		return t;
	};
	_proto._Object37_i = function () {
		var t = {};
		this._Object37 = t;
		return t;
	};
	_proto._Wait11_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set25_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object38_i();
		return t;
	};
	_proto._Object38_i = function () {
		var t = {};
		this._Object38 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object39_i();
		return t;
	};
	_proto._Object39_i = function () {
		var t = {};
		this._Object39 = t;
		return t;
	};
	_proto._TweenItem15_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem15 = t;
		t.paths = [this._Set26_i(),this._Wait12_i(),this._Set27_i(),this._To15_i()];
		return t;
	};
	_proto._Set26_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object40_i();
		return t;
	};
	_proto._Object40_i = function () {
		var t = {};
		this._Object40 = t;
		return t;
	};
	_proto._Wait12_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 950;
		return t;
	};
	_proto._Set27_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object41_i();
		return t;
	};
	_proto._Object41_i = function () {
		var t = {};
		this._Object41 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object42_i();
		return t;
	};
	_proto._Object42_i = function () {
		var t = {};
		this._Object42 = t;
		return t;
	};
	_proto._TweenItem16_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem16 = t;
		t.paths = [this._Set28_i(),this._Wait13_i(),this._Set29_i(),this._To16_i()];
		return t;
	};
	_proto._Set28_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object43_i();
		return t;
	};
	_proto._Object43_i = function () {
		var t = {};
		this._Object43 = t;
		return t;
	};
	_proto._Wait13_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1100;
		return t;
	};
	_proto._Set29_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object44_i();
		return t;
	};
	_proto._Object44_i = function () {
		var t = {};
		this._Object44 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object45_i();
		return t;
	};
	_proto._Object45_i = function () {
		var t = {};
		this._Object45 = t;
		return t;
	};
	_proto._TweenItem17_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem17 = t;
		t.paths = [this._Set30_i(),this._Wait14_i(),this._Set31_i(),this._To17_i()];
		return t;
	};
	_proto._Set30_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object46_i();
		return t;
	};
	_proto._Object46_i = function () {
		var t = {};
		this._Object46 = t;
		return t;
	};
	_proto._Wait14_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1100;
		return t;
	};
	_proto._Set31_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object47_i();
		return t;
	};
	_proto._Object47_i = function () {
		var t = {};
		this._Object47 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object48_i();
		return t;
	};
	_proto._Object48_i = function () {
		var t = {};
		this._Object48 = t;
		return t;
	};
	_proto._TweenItem18_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem18 = t;
		t.paths = [this._Set32_i(),this._Wait15_i(),this._Set33_i(),this._To18_i()];
		return t;
	};
	_proto._Set32_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object49_i();
		return t;
	};
	_proto._Object49_i = function () {
		var t = {};
		this._Object49 = t;
		return t;
	};
	_proto._Wait15_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1100;
		return t;
	};
	_proto._Set33_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object50_i();
		return t;
	};
	_proto._Object50_i = function () {
		var t = {};
		this._Object50 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "elasticOut";
		t.props = this._Object51_i();
		return t;
	};
	_proto._Object51_i = function () {
		var t = {};
		this._Object51 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto.gView1_i = function () {
		var t = new eui.Group();
		this.gView1 = t;
		t.anchorOffsetY = 0;
		t.height = 566;
		t.horizontalCenter = 0;
		t.verticalCenter = -75;
		t.width = 660;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._BitmapLabel1_i(),this._BitmapLabel2_i(),this.btnRankDown_i(),this.btnRankUp_i(),this.btnClose_i(),this.lText_i(),this.rText_i(),this.uiHtTop_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -19;
		t.left = -18;
		t.right = -19;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -19;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "Arrow_png";
		t.top = 128;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.text = "植物总战力";
		t.x = 92;
		t.y = 94;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.text = "升级推荐战力";
		t.x = 404.24;
		t.y = 94;
		return t;
	};
	_proto.btnRankDown_i = function () {
		var t = new eui.Button();
		this.btnRankDown = t;
		t.anchorOffsetX = 0;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "Rank thấp";
		t.skinName = "BtnNewVideo";
		t.width = 400;
		t.y = 233.5;
		return t;
	};
	_proto.btnRankUp_i = function () {
		var t = new eui.Button();
		this.btnRankUp = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "Button green_png";
		t.label = "Nâng cấp";
		t.skinName = "UI.BtnGreen";
		t.width = 400;
		t.y = 386.5;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -42;
		t.skinName = "UI.BtnCloseX";
		t.top = -26;
		return t;
	};
	_proto.lText_i = function () {
		var t = new UIText();
		this.lText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 30;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.textAlign = "center";
		t.width = 228;
		t.x = 28;
		t.y = 161;
		return t;
	};
	_proto.rText_i = function () {
		var t = new UIText();
		this.rText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 30;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.textAlign = "center";
		t.width = 228;
		t.x = 360;
		t.y = 161;
		return t;
	};
	_proto.uiHtTop_i = function () {
		var t = new UIHts_Top();
		this.uiHtTop = t;
		t.height = 120;
		t.horizontalCenter = 0.5;
		t.htId = 6;
		t.scaleX = 1.33;
		t.scaleY = 1.33;
		t.width = 500;
		t.y = 576;
		return t;
	};
	_proto.gView2_i = function () {
		var t = new eui.Group();
		this.gView2 = t;
		t.height = 620;
		t.horizontalCenter = 0;
		t.verticalCenter = -38;
		t.visible = false;
		t.width = 660;
		t.elementsContent = [this.bg_i(),this.image1_i(),this.img1_i(),this.imgRank1_i(),this.imgRank2_i(),this.imgRankLv1_i(),this.imgRankLv2_i(),this.image_i(),this.lRewardAtkImg_i(),this.image2_i(),this.image0_i(),this.image3_i(),this.lRank1_i(),this.lRank2_i(),this.lRewardAtk_i(),this.lRewardAtkVal_i(),this.lRewardStars_i(),this.btnGetReward_i(),this.btnVideo_i(),this.tVideo_i(),this.uiAD_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetY = 0;
		t.bottom = -327;
		t.left = -18;
		t.right = -19;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -97;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.anchorOffsetY = 0;
		t.height = 214;
		t.left = 50;
		t.right = 50;
		t.scale9Grid = new egret.Rectangle(26,22,156,136);
		t.source = "Award bottom_png";
		t.top = 216;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.left = 0;
		t.source = "";
		t.top = -212;
		return t;
	};
	_proto.imgRank1_i = function () {
		var t = new eui.Image();
		this.imgRank1 = t;
		t.bottom = 492;
		t.horizontalCenter = -149.5;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "King_png";
		return t;
	};
	_proto.imgRank2_i = function () {
		var t = new eui.Image();
		this.imgRank2 = t;
		t.bottom = 492;
		t.horizontalCenter = 150.5;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "King_png";
		return t;
	};
	_proto.imgRankLv1_i = function () {
		var t = new eui.Image();
		this.imgRankLv1 = t;
		t.bottom = 501;
		t.horizontalCenter = -150;
		t.source = "1x_png";
		t.visible = false;
		return t;
	};
	_proto.imgRankLv2_i = function () {
		var t = new eui.Image();
		this.imgRankLv2 = t;
		t.bottom = 501;
		t.horizontalCenter = 150.5;
		t.source = "2x_png";
		t.visible = false;
		t.x = 10;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "Arrow_png";
		t.top = 65;
		return t;
	};
	_proto.lRewardAtkImg_i = function () {
		var t = new eui.Image();
		this.lRewardAtkImg = t;
		t.horizontalCenter = -83;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "attack icon_png";
		t.top = 252;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.horizontalCenter = 129;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Star icon_png";
		t.top = 252;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.horizontalCenter = -262.5;
		t.source = "Award Title_png";
		t.top = 196;
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.alpha = .5;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "video_png";
		t.visible = false;
		t.x = 433;
		t.y = 545;
		return t;
	};
	_proto.lRank1_i = function () {
		var t = new eui.BitmapLabel();
		this.lRank1 = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = -147.5;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.text = "黄金Ⅴ";
		t.textAlign = "center";
		t.top = 136;
		t.width = 145;
		return t;
	};
	_proto.lRank2_i = function () {
		var t = new eui.BitmapLabel();
		this.lRank2 = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 153;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.text = "黄金Ⅳ";
		t.textAlign = "center";
		t.top = 136;
		t.width = 145;
		return t;
	};
	_proto.lRewardAtk_i = function () {
		var t = new eui.BitmapLabel();
		this.lRewardAtk = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 41;
		t.horizontalCenter = -80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "植物攻击";
		t.textAlign = "center";
		t.verticalCenter = 86.5;
		t.width = 155;
		return t;
	};
	_proto.lRewardAtkVal_i = function () {
		var t = new eui.BitmapLabel();
		this.lRewardAtkVal = t;
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = -84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+100%";
		t.textAlign = "center";
		t.verticalCenter = -4;
		t.width = 250;
		return t;
	};
	_proto.lRewardStars_i = function () {
		var t = new eui.BitmapLabel();
		this.lRewardStars = t;
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 123;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+5";
		t.textAlign = "center";
		t.verticalCenter = 90;
		t.width = 100;
		return t;
	};
	_proto.btnGetReward_i = function () {
		var t = new eui.Button();
		this.btnGetReward = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "Nhận được";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "UI.BtnCancel";
		t.verticalCenter = 358.5;
		t.width = 320;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "Nhận x3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.verticalCenter = 221.5;
		t.width = 400;
		return t;
	};
	_proto.tVideo_i = function () {
		var t = new UIToggle();
		this.tVideo = t;
		t.height = 100;
		t.label = "Thưởng x2";
		t.visible = false;
		t.width = 400;
		t.x = 130;
		t.y = 514;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 745.4;
		return t;
	};
	return UIRankSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UISetting/UISetting.exml'] = window.UISettingSkin = (function (_super) {
	__extends(UISettingSkin, _super);
	function UISettingSkin() {
		_super.call(this);
		this.skinParts = ["imghead","btnBack","btnMusic","btnSound","uiBanner"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiBanner_i()];
	}
	var _proto = UISettingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 400;
		t.elementsContent = [this._Image2_i(),this.imghead_i(),this.btnBack_i(),this.btnMusic_i(),this.btnSound_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -83;
		t.left = -154;
		t.right = -154;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -61;
		return t;
	};
	_proto.imghead_i = function () {
		var t = new eui.Image();
		this.imghead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.left = -135;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = -179;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -178;
		t.skinName = "UI.BtnCloseX";
		t.top = -76;
		return t;
	};
	_proto.btnMusic_i = function () {
		var t = new eui.Button();
		this.btnMusic = t;
		t.horizontalCenter = 0;
		t.icon = "voice icon_png";
		t.label = "loa：";
		t.skinName = "UI.BtnGreenSetting";
		t.top = 100;
		return t;
	};
	_proto.btnSound_i = function () {
		var t = new eui.Button();
		this.btnSound = t;
		t.horizontalCenter = 0;
		t.icon = "voice icon_png";
		t.label = "loa：";
		t.skinName = "UI.BtnGreenSetting";
		t.top = 240;
		return t;
	};
	_proto.uiBanner_i = function () {
		var t = new UIBannerAd();
		this.uiBanner = t;
		t.bottom = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	return UISettingSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIShop/UIShop_Cell.exml'] = window.UIShop_CellSkin = (function (_super) {
	__extends(UIShop_CellSkin, _super);
	function UIShop_CellSkin() {
		_super.call(this);
		this.skinParts = ["slot","sAtk_156","sSpd_156","btnBuy","btnVideo","btnStar","locked"];
		
		this.height = 150;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this.slot_i(),this._Image2_i(),this._Image3_i(),this.sAtk_156_i(),this.sSpd_156_i(),this._Image4_i(),this._Image5_i(),this.btnBuy_i(),this.btnVideo_i(),this.btnStar_i(),this.locked_i()];
	}
	var _proto = UIShop_CellSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(25,24,47,86);
		t.source = "store Bottom_png";
		t.top = 0;
		return t;
	};
	_proto.slot_i = function () {
		var t = new eui.Image();
		this.slot = t;
		t.left = 16;
		t.source = "Composite box_png";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.scale9Grid = new egret.Rectangle(10,6,51,17);
		t.source = "money bottom_png";
		t.width = 172;
		t.x = 187;
		t.y = 84;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.scale9Grid = new egret.Rectangle(10,6,51,17);
		t.source = "money bottom_png";
		t.width = 172;
		t.x = 186;
		t.y = 28;
		return t;
	};
	_proto.sAtk_156_i = function () {
		var t = new eui.Image();
		this.sAtk_156 = t;
		t.height = 19;
		t.left = 193;
		t.scale9Grid = new egret.Rectangle(2,1,18,12);
		t.source = "attack value_png";
		t.width = 156;
		t.y = 37;
		return t;
	};
	_proto.sSpd_156_i = function () {
		var t = new eui.Image();
		this.sSpd_156 = t;
		t.height = 19;
		t.left = 194;
		t.scale9Grid = new egret.Rectangle(2,1,18,12);
		t.source = "Attack gky value_png";
		t.width = 156;
		t.y = 93;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 140;
		t.source = "attack_png";
		t.verticalCenter = -31.5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 134;
		t.source = "Attack gky_png";
		t.verticalCenter = 26;
		return t;
	};
	_proto.btnBuy_i = function () {
		var t = new eui.Button();
		this.btnBuy = t;
		t.height = 88;
		t.icon = "Button purple_png";
		t.label = "Button";
		t.skinName = "UI.BtnShopBuy";
		t.width = 219;
		t.x = 365;
		t.y = 31;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.icon = "video_png";
		t.label = "Miễn phí";
		t.scaleX = 0.81;
		t.scaleY = 0.81;
		t.skinName = "BtnLuckyBlueVideo";
		t.x = 355;
		t.y = 20;
		return t;
	};
	_proto.btnStar_i = function () {
		var t = new eui.Button();
		this.btnStar = t;
		t.icon = "Button purple_png";
		t.label = "mua";
		t.scaleX = 0.81;
		t.scaleY = 0.81;
		t.skinName = "UI.BtnGreenStar";
		t.x = 355;
		t.y = 20;
		return t;
	};
	_proto.locked_i = function () {
		var t = new eui.Image();
		this.locked = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "locked_png";
		t.visible = false;
		t.x = 397;
		t.y = 50;
		return t;
	};
	return UIShop_CellSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UIShop/UIShop_Cell2.exml'] = window.UIShop_Cell2Skin = (function (_super) {
	__extends(UIShop_Cell2Skin, _super);
	function UIShop_Cell2Skin() {
		_super.call(this);
		this.skinParts = ["icon","btnBuy","label","locked","unlocked"];
		
		this.height = 150;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this.icon_i(),this.btnBuy_i(),this.label_i(),this.locked_i(),this.unlocked_i()];
	}
	var _proto = UIShop_Cell2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(25,0,47,122);
		t.source = "store Bottom_png";
		t.top = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 125;
		t.left = 20;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 125;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.btnBuy_i = function () {
		var t = new eui.Button();
		this.btnBuy = t;
		t.label = "mua";
		t.scaleX = 0.81;
		t.scaleY = 0.81;
		t.skinName = "UI.BtnGreenStar";
		t.x = 353.34;
		t.y = 20;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.BitmapLabel();
		this.label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 156.57;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "aaa lv1 \ncây cost -5%11111111112222222222222";
		t.width = 262.32;
		t.x = 145;
		t.y = 20;
		return t;
	};
	_proto.locked_i = function () {
		var t = new eui.BitmapLabel();
		this.locked = t;
		t.font = "font_fnt";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "chua mo khoa";
		t.x = 397;
		t.y = 47;
		return t;
	};
	_proto.unlocked_i = function () {
		var t = new eui.BitmapLabel();
		this.unlocked = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 38.07;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "da co";
		t.width = 108.82;
		t.x = 397;
		t.y = 46;
		return t;
	};
	return UIShop_Cell2Skin;
})(eui.Skin);generateEUI.paths['resource/UI/UIShop/UIShop.exml'] = window.UIShopSkin = (function (_super) {
	__extends(UIShopSkin, _super);
	function UIShopSkin() {
		_super.call(this);
		this.skinParts = ["shopImg","btnPage1","btnPage2","gCells1","gTanks1","gTanksView","gCells2","gLabels2","gOthersView","btnBack","uiAD"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group3_i(),this.btnBack_i(),this.uiAD_i()];
	}
	var _proto = UIShopSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = -10;
		t.left = 2;
		t.right = 2;
		t.top = 400;
		t.elementsContent = [this._Image2_i(),this.shopImg_i(),this.btnPage1_i(),this.btnPage2_i(),this.gTanksView_i(),this.gOthersView_i(),this._BitmapLabel1_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 49;
		t.left = -15;
		t.right = -15;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "t3_png";
		t.top = -15;
		return t;
	};
	_proto.shopImg_i = function () {
		var t = new eui.Image();
		this.shopImg = t;
		t.left = 10;
		t.source = "";
		t.top = -158;
		return t;
	};
	_proto.btnPage1_i = function () {
		var t = new eui.Image();
		this.btnPage1 = t;
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Page sign_png";
		t.top = 2;
		return t;
	};
	_proto.btnPage2_i = function () {
		var t = new eui.Image();
		this.btnPage2 = t;
		t.left = 220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Page-sign-off_png";
		t.top = 2;
		return t;
	};
	_proto.gTanksView_i = function () {
		var t = new eui.Scroller();
		this.gTanksView = t;
		t.anchorOffsetY = 0;
		t.bottom = 110;
		t.horizontalCenter = 0;
		t.top = 130;
		t.width = 600;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.gCells1_i(),this.gTanks1_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.gCells1_i = function () {
		var t = new eui.Group();
		this.gCells1 = t;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 2;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto.gTanks1_i = function () {
		var t = new eui.Group();
		this.gTanks1 = t;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.layout = this._BasicLayout2_i();
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.gOthersView_i = function () {
		var t = new eui.Scroller();
		this.gOthersView = t;
		t.anchorOffsetY = 0;
		t.bottom = 110;
		t.horizontalCenter = 0;
		t.top = 130;
		t.width = 600;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.layout = this._BasicLayout3_i();
		t.elementsContent = [this.gCells2_i(),this.gLabels2_i()];
		return t;
	};
	_proto._BasicLayout3_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.gCells2_i = function () {
		var t = new eui.Group();
		this.gCells2 = t;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 2;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto.gLabels2_i = function () {
		var t = new eui.Group();
		this.gLabels2 = t;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.layout = this._BasicLayout4_i();
		return t;
	};
	_proto._BasicLayout4_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.left = 45;
		t.text = "植物";
		t.textAlign = "center";
		t.top = 29;
		t.touchEnabled = false;
		t.width = 150;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.left = 234;
		t.text = "特权";
		t.textAlign = "center";
		t.top = 29;
		t.touchEnabled = false;
		t.width = 150;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.height = 76;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = 0;
		t.skinName = "UI.BtnCloseX";
		t.top = 405;
		t.width = 77;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.scaleX = 0.83;
		t.scaleY = 0.83;
		t.width = 600;
		t.x = 246.22;
		t.y = 274.38;
		return t;
	};
	return UIShopSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UISign/UISignDay.exml'] = window.UISignDaySkin = (function (_super) {
	__extends(UISignDaySkin, _super);
	function UISignDaySkin() {
		_super.call(this);
		this.skinParts = ["imghead","check1","lDay1","imgH1","check2","lDay2","imgH2","check3","lDay3","imgH3","check4","lDay4","imgH4","check5","lDay5","imgH5","check6","lDay6","imgH6","check7","lDay7","imgH7","tVideo","btnVideo","btnFree","gCanSign","gSigned","btnClose","uiBanner"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group7_i(),this.uiBanner_i()];
	}
	var _proto = UISignDaySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 949.73;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -32;
		t.width = 665;
		t.elementsContent = [this.imghead_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Image19_i(),this.check7_i(),this._Image20_i(),this._Image21_i(),this.lDay7_i(),this._BitmapLabel7_i(),this.imgH7_i(),this.gCanSign_i(),this.gSigned_i(),this.btnClose_i()];
		return t;
	};
	_proto.imghead_i = function () {
		var t = new eui.Image();
		this.imghead = t;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = -183;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -6.269999999999982;
		t.left = -18;
		t.right = -19;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 155;
		t.horizontalCenter = -200;
		t.top = 74;
		t.width = 191;
		t.x = 37;
		t.y = 74;
		t.elementsContent = [this._Image3_i(),this.check1_i(),this._BitmapLabel1_i(),this._Image4_i(),this._Image5_i(),this.lDay1_i(),this.imgH1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in Bottom_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.check1_i = function () {
		var t = new eui.Image();
		this.check1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in BottomD_png";
		t.x = -193;
		t.y = 58;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "第一天";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -48.5;
		t.width = 150;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.11;
		t.horizontalCenter = 0;
		t.source = "ui_json.money_png";
		t.verticalCenter = 5.5;
		t.width = 66;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.horizontalCenter = -32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xd_png";
		t.verticalCenter = 51;
		t.width = 25;
		return t;
	};
	_proto.lDay1_i = function () {
		var t = new UIText();
		this.lDay1 = t;
		t.style = "a";
		t.height = 40;
		t.horizontalCenter = 17.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 100;
		t.y = 116;
		return t;
	};
	_proto.imgH1_i = function () {
		var t = new eui.Image();
		this.imgH1 = t;
		t.alpha = 0.5;
		t.height = 155;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = 0;
		t.width = 191;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 155;
		t.horizontalCenter = 0;
		t.top = 74;
		t.width = 191;
		t.x = 47;
		t.y = 84;
		t.elementsContent = [this._Image6_i(),this.check2_i(),this._BitmapLabel2_i(),this._Image7_i(),this._Image8_i(),this.lDay2_i(),this.imgH2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in Bottom_png";
		t.top = 74;
		t.verticalCenter = 0;
		return t;
	};
	_proto.check2_i = function () {
		var t = new eui.Image();
		this.check2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in BottomD_png";
		t.x = -193;
		t.y = 58;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "第二天";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -48.5;
		t.width = 150;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.source = "ui_json.Stars_png";
		t.width = 56.73;
		t.y = 56;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.horizontalCenter = -32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xd_png";
		t.verticalCenter = 51;
		t.width = 25;
		return t;
	};
	_proto.lDay2_i = function () {
		var t = new UIText();
		this.lDay2 = t;
		t.style = "a";
		t.height = 40;
		t.horizontalCenter = 17.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 100;
		t.y = 116;
		return t;
	};
	_proto.imgH2_i = function () {
		var t = new eui.Image();
		this.imgH2 = t;
		t.alpha = 0.5;
		t.height = 155;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 191;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 155;
		t.horizontalCenter = 200;
		t.top = 74;
		t.width = 191;
		t.x = 57;
		t.y = 94;
		t.elementsContent = [this._Image9_i(),this.check3_i(),this._BitmapLabel3_i(),this._Image10_i(),this._Image11_i(),this.lDay3_i(),this.imgH3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in Bottom_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.check3_i = function () {
		var t = new eui.Image();
		this.check3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in BottomD_png";
		t.x = -193;
		t.y = 57;
		return t;
	};
	_proto._BitmapLabel3_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "第三天";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -48.5;
		t.width = 150;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.35;
		t.horizontalCenter = 0;
		t.source = "ui_json.Treasure chest_png";
		t.width = 76.25;
		t.y = 48;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.horizontalCenter = -32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xd_png";
		t.verticalCenter = 51;
		t.width = 25;
		return t;
	};
	_proto.lDay3_i = function () {
		var t = new UIText();
		this.lDay3 = t;
		t.style = "a";
		t.height = 40;
		t.horizontalCenter = 17.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 100;
		t.y = 116;
		return t;
	};
	_proto.imgH3_i = function () {
		var t = new eui.Image();
		this.imgH3 = t;
		t.alpha = 0.5;
		t.height = 155;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 191;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 155;
		t.horizontalCenter = -200;
		t.top = 257;
		t.width = 191;
		t.x = 47;
		t.y = 84;
		t.elementsContent = [this._Image12_i(),this.check4_i(),this._BitmapLabel4_i(),this._Image13_i(),this.lDay4_i(),this.imgH4_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in Bottom_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.check4_i = function () {
		var t = new eui.Image();
		this.check4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in BottomD_png";
		t.x = 207;
		t.y = 57;
		return t;
	};
	_proto._BitmapLabel4_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "第四天";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -48.5;
		t.width = 150;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.24;
		t.horizontalCenter = 0;
		t.source = "prize5_png";
		t.verticalCenter = 17;
		t.width = 70.5;
		return t;
	};
	_proto.lDay4_i = function () {
		var t = new UIText();
		this.lDay4 = t;
		t.style = "a";
		t.height = 40;
		t.horizontalCenter = 17.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 100;
		t.y = 116;
		return t;
	};
	_proto.imgH4_i = function () {
		var t = new eui.Image();
		this.imgH4 = t;
		t.alpha = 0.5;
		t.height = 155;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 191;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 155;
		t.horizontalCenter = 0;
		t.top = 257;
		t.width = 191;
		t.x = 67;
		t.y = 104;
		t.elementsContent = [this._Image14_i(),this.check5_i(),this._BitmapLabel5_i(),this._Image15_i(),this._Image16_i(),this.lDay5_i(),this.imgH5_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in Bottom_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.check5_i = function () {
		var t = new eui.Image();
		this.check5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in BottomD_png";
		t.x = 7;
		t.y = 57;
		return t;
	};
	_proto._BitmapLabel5_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "第五天";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -48.5;
		t.width = 150;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.35;
		t.horizontalCenter = 0;
		t.source = "ui_json.Treasure chest_png";
		t.width = 76.25;
		t.y = 48;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.horizontalCenter = -32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xd_png";
		t.verticalCenter = 51;
		t.width = 25;
		return t;
	};
	_proto.lDay5_i = function () {
		var t = new UIText();
		this.lDay5 = t;
		t.style = "a";
		t.height = 40;
		t.horizontalCenter = 17.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 100;
		t.y = 116;
		return t;
	};
	_proto.imgH5_i = function () {
		var t = new eui.Image();
		this.imgH5 = t;
		t.alpha = 0.5;
		t.height = 155;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 191;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 155;
		t.horizontalCenter = 200;
		t.top = 257;
		t.width = 191;
		t.x = 57;
		t.y = 94;
		t.elementsContent = [this._Image17_i(),this.check6_i(),this._BitmapLabel6_i(),this._Image18_i(),this.lDay6_i(),this.imgH6_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in Bottom_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.check6_i = function () {
		var t = new eui.Image();
		this.check6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in BottomD_png";
		t.x = -193;
		t.y = 57;
		return t;
	};
	_proto._BitmapLabel6_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "第六天";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -48.5;
		t.width = 150;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76.38;
		t.horizontalCenter = 0;
		t.source = "prize3_png";
		t.verticalCenter = 18.5;
		t.width = 86.45;
		return t;
	};
	_proto.lDay6_i = function () {
		var t = new UIText();
		this.lDay6 = t;
		t.style = "a";
		t.height = 40;
		t.horizontalCenter = 17.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 100;
		t.y = 116;
		return t;
	};
	_proto.imgH6_i = function () {
		var t = new eui.Image();
		this.imgH6 = t;
		t.alpha = 0.5;
		t.height = 155;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dot_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 191;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(85,0,26,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in Bottom_png";
		t.top = 440;
		t.width = 591;
		return t;
	};
	_proto.check7_i = function () {
		var t = new eui.Image();
		this.check7 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(22,11,133,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Sign in BottomD_png";
		t.width = 576;
		t.y = 497;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 59;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Stars_png";
		t.width = 60;
		t.x = 258;
		t.y = 520;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.source = "xd_png";
		t.width = 25;
		t.x = 299;
		t.y = 550.04;
		return t;
	};
	_proto.lDay7_i = function () {
		var t = new UIText();
		this.lDay7 = t;
		t.style = "a";
		t.height = 40;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 100;
		t.x = 338;
		t.y = 541;
		return t;
	};
	_proto._BitmapLabel7_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "font_fnt";
		t.height = 40;
		t.horizontalCenter = 0;
		t.text = "第七天";
		t.textAlign = "center";
		t.top = 451;
		t.verticalAlign = "middle";
		t.width = 150;
		return t;
	};
	_proto.imgH7_i = function () {
		var t = new eui.Image();
		this.imgH7 = t;
		t.alpha = 0.5;
		t.height = 155;
		t.horizontalCenter = 0;
		t.source = "dot_png";
		t.top = 440;
		t.visible = false;
		t.width = 591;
		t.x = 37;
		t.y = 440;
		return t;
	};
	_proto.gCanSign_i = function () {
		var t = new eui.Group();
		this.gCanSign = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.width = 487;
		t.y = 616.32;
		t.elementsContent = [this._Image22_i(),this.tVideo_i(),this.btnVideo_i(),this.btnFree_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.alpha = .5;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "video_png";
		t.visible = false;
		t.x = 310;
		t.y = 66;
		return t;
	};
	_proto.tVideo_i = function () {
		var t = new UIToggle();
		this.tVideo = t;
		t.height = 100;
		t.label = "Thưởng x2";
		t.visible = false;
		t.width = 400;
		t.x = 23;
		t.y = 35;
		return t;
	};
	_proto.btnVideo_i = function () {
		var t = new eui.Button();
		this.btnVideo = t;
		t.anchorOffsetX = 0;
		t.height = 137;
		t.horizontalCenter = 1.5;
		t.icon = "video_png";
		t.label = "Nhận x2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.width = 400;
		t.y = 37;
		return t;
	};
	_proto.btnFree_i = function () {
		var t = new eui.Button();
		this.btnFree = t;
		t.anchorOffsetX = 0;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "Button green_png";
		t.label = "Nhận được";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "UI.BtnCancel";
		t.width = 320;
		t.y = 161;
		return t;
	};
	_proto.gSigned_i = function () {
		var t = new eui.Group();
		this.gSigned = t;
		t.height = 300;
		t.visible = false;
		t.width = 440;
		t.x = 110;
		t.y = 616.32;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 60;
		t.text = "今日已领取\n请明日再来";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = -43;
		t.skinName = "UI.BtnCloseX";
		t.top = -32;
		return t;
	};
	_proto.uiBanner_i = function () {
		var t = new UIBannerAd();
		this.uiBanner = t;
		t.bottom = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	return UISignDaySkin;
})(eui.Skin);generateEUI.paths['resource/UI/UISpdUp/UISpdUp.exml'] = window.UISpdUpSkin = (function (_super) {
	__extends(UISpdUpSkin, _super);
	function UISpdUpSkin() {
		_super.call(this);
		this.skinParts = ["bg","btnVideoFree","btnUseStar2","btnUseStar1","btnUseStar","btnBack","slider_486","labelDisplay","lLastTime","uiAD","uiHtTop"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiAD_i(),this.uiHtTop_i()];
	}
	var _proto = UISpdUpSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 799.28;
		t.horizontalCenter = 0;
		t.verticalCenter = -52.5;
		t.width = 690;
		t.elementsContent = [this.bg_i(),this._Image2_i(),this.btnVideoFree_i(),this.btnUseStar2_i(),this.btnUseStar1_i(),this.btnUseStar_i(),this.btnBack_i(),this._Image3_i(),this.slider_486_i(),this.labelDisplay_i(),this.lLastTime_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 8.279999999999973;
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t2_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "speedTitle_png";
		t.verticalCenter = -257.64;
		t.x = 199;
		t.y = 90;
		return t;
	};
	_proto.btnVideoFree_i = function () {
		var t = new eui.Button();
		this.btnVideoFree = t;
		t.enabled = true;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "免费获得时间x2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnNewVideo";
		t.width = 400;
		t.y = 481.4;
		return t;
	};
	_proto.btnUseStar2_i = function () {
		var t = new eui.Button();
		this.btnUseStar2 = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.label = "Giúp bạn bè";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BtnBlue";
		t.width = 400;
		t.y = 481.4;
		return t;
	};
	_proto.btnUseStar1_i = function () {
		var t = new eui.Button();
		this.btnUseStar1 = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.label = "Miễn phí";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnBlueVideo";
		t.width = 400;
		t.y = 481.4;
		return t;
	};
	_proto.btnUseStar_i = function () {
		var t = new eui.Button();
		this.btnUseStar = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "Button green_png";
		t.label = "Mở";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnGreenStar";
		t.verticalCenter = 242.68;
		t.visible = false;
		t.width = 400;
		t.x = 91;
		t.y = 731;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnCloseX";
		t.top = 9;
		t.width = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 91;
		t.left = 106;
		t.scale9Grid = new egret.Rectangle(19,23,46,5);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "EXPB_png";
		t.verticalCenter = 14.860000000000014;
		t.width = 500;
		t.x = 66;
		t.y = 482;
		return t;
	};
	_proto.slider_486_i = function () {
		var t = new eui.Image();
		this.slider_486 = t;
		t.anchorOffsetX = 0;
		t.fillMode = "repeat";
		t.left = 113;
		t.scale9Grid = new egret.Rectangle(13,15,44,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "EXP_png";
		t.verticalCenter = 14.860000000000014;
		t.width = 482;
		t.x = 73;
		t.y = 490;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.BitmapLabel();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 73;
		t.horizontalCenter = -67.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "剩余时间";
		t.verticalAlign = "middle";
		t.verticalCenter = -79.63999999999999;
		t.width = 163.83;
		return t;
	};
	_proto.lLastTime_i = function () {
		var t = new eui.BitmapLabel();
		this.lLastTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 73;
		t.horizontalCenter = 94.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "00:00";
		t.verticalAlign = "middle";
		t.verticalCenter = -79.63999999999999;
		t.width = 105.83;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.verticalCenter = 242;
		t.width = 600;
		return t;
	};
	_proto.uiHtTop_i = function () {
		var t = new UIHts_Top();
		this.uiHtTop = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.htId = 8;
		t.scaleX = 1.33;
		t.scaleY = 1.32;
		t.verticalCenter = 428;
		t.width = 500;
		return t;
	};
	return UISpdUpSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UITask/UIAchieve_Cell.exml'] = window.UIAchieve_CellSkin = (function (_super) {
	__extends(UIAchieve_CellSkin, _super);
	function UIAchieve_CellSkin() {
		_super.call(this);
		this.skinParts = ["countBar","rewardIcon","locked","rewardNum","countNum","btnGetReward","des"];
		
		this.height = 150;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.countBar_i(),this.rewardIcon_i(),this.locked_i(),this.rewardNum_i(),this.countNum_i(),this.btnGetReward_i(),this.des_i()];
	}
	var _proto = UIAchieve_CellSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(25,38,47,84);
		t.source = "store Bottom_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 46;
		t.left = 24;
		t.scale9Grid = new egret.Rectangle(10,6,51,17);
		t.source = "money bottom_png";
		t.width = 352;
		t.y = 78;
		return t;
	};
	_proto.countBar_i = function () {
		var t = new eui.Image();
		this.countBar = t;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.left = 32;
		t.scale9Grid = new egret.Rectangle(2,1,18,12);
		t.source = "Attack gky value_png";
		t.width = 335;
		t.y = 85;
		return t;
	};
	_proto.rewardIcon_i = function () {
		var t = new eui.Image();
		this.rewardIcon = t;
		t.source = "Stars_png";
		t.x = 431.5;
		t.y = 13.75;
		return t;
	};
	_proto.locked_i = function () {
		var t = new eui.Image();
		this.locked = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "ui_json.unfinished_png";
		t.visible = false;
		t.x = 433;
		t.y = 48.5;
		return t;
	};
	_proto.rewardNum_i = function () {
		var t = new eui.BitmapLabel();
		this.rewardNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 28;
		t.scaleX = 1.25;
		t.scaleY = 1.25;
		t.text = "5";
		t.width = 63.2;
		t.x = 499.5;
		t.y = 24.75;
		return t;
	};
	_proto.countNum_i = function () {
		var t = new eui.BitmapLabel();
		this.countNum = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 20;
		t.horizontalCenter = -80;
		t.rotation = 359.93;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "10/10";
		t.verticalCenter = 21;
		t.width = 130.4;
		return t;
	};
	_proto.btnGetReward_i = function () {
		var t = new eui.Button();
		this.btnGetReward = t;
		t.label = "Nhận được";
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.skinName = "BtnGreen2";
		t.x = 430;
		t.y = 64.5;
		return t;
	};
	_proto.des_i = function () {
		var t = new eui.Label();
		this.des = t;
		t.left = 36;
		t.text = "合成20株植物";
		t.y = 31.25;
		return t;
	};
	return UIAchieve_CellSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UITask/UIPopReward.exml'] = window.UIPopRewardSkin = (function (_super) {
	__extends(UIPopRewardSkin, _super);
	function UIPopRewardSkin() {
		_super.call(this);
		this.skinParts = ["visable","rewardNum","btnGetReward","btnDoubleReward","uiBanner"];
		
		this.height = 1334;
		this.width = 750;
		this.visable_i();
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.uiBanner_i()];
		
		eui.Binding.$bindProperties(this, ["btnGetReward"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [264],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [519],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [264],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [519],[],this._Object2,"y");
	}
	var _proto = UIPopRewardSkin.prototype;

	_proto.visable_i = function () {
		var t = new egret.tween.TweenGroup();
		this.visable = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.ease = "elasticIn";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = -100;
		t.width = 660;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._BitmapLabel1_i(),this.rewardNum_i(),this.btnGetReward_i(),this.btnDoubleReward_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -131;
		t.left = -18;
		t.right = -19;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bottom1_png";
		t.top = -15;
		t.x = -61.5;
		t.y = -262;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -54;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "Stars_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 56;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "获得了";
		t.textAlign = "center";
		t.width = 274.75;
		t.y = 69;
		return t;
	};
	_proto.rewardNum_i = function () {
		var t = new eui.BitmapLabel();
		this.rewardNum = t;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.horizontalCenter = 54;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "x5";
		t.textAlign = "center";
		t.verticalCenter = 5;
		return t;
	};
	_proto.btnGetReward_i = function () {
		var t = new eui.Button();
		this.btnGetReward = t;
		t.height = 137;
		t.horizontalCenter = 0;
		t.icon = "Button blue_png";
		t.label = "Nhận được";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "UI.BtnCancel";
		t.width = 320;
		t.y = 490;
		return t;
	};
	_proto.btnDoubleReward_i = function () {
		var t = new eui.Button();
		this.btnDoubleReward = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.icon = "video_png";
		t.label = "Nhận x3";
		t.skinName = "BtnNewVideo";
		t.verticalCenter = 171.5;
		t.width = 400;
		return t;
	};
	_proto.uiBanner_i = function () {
		var t = new UIBannerAd();
		this.uiBanner = t;
		t.bottom = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	return UIPopRewardSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UITask/UITask_Cell.exml'] = window.UITask_CellSkin = (function (_super) {
	__extends(UITask_CellSkin, _super);
	function UITask_CellSkin() {
		_super.call(this);
		this.skinParts = ["icon","countBar","locked","rewardIcon","countNum","des","rewardNum","btnGetReward"];
		
		this.height = 150;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.icon_i(),this._Image3_i(),this.countBar_i(),this.locked_i(),this.rewardIcon_i(),this.countNum_i(),this.des_i(),this.rewardNum_i(),this.btnGetReward_i()];
	}
	var _proto = UITask_CellSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(25,27,47,95);
		t.source = "store Bottom_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 133;
		t.source = "Composite box_png";
		t.verticalCenter = 0;
		t.width = 136.27;
		t.x = 10;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 100;
		t.source = "prize2_png";
		t.width = 100;
		t.x = 26;
		t.y = 27;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 46;
		t.right = 225;
		t.scale9Grid = new egret.Rectangle(10,6,51,17);
		t.source = "money bottom_png";
		t.width = 213;
		t.y = 78;
		return t;
	};
	_proto.countBar_i = function () {
		var t = new eui.Image();
		this.countBar = t;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.left = 170;
		t.scale9Grid = new egret.Rectangle(2,1,18,12);
		t.source = "Attack gky value_png";
		t.width = 196;
		t.y = 85;
		return t;
	};
	_proto.locked_i = function () {
		var t = new eui.Image();
		this.locked = t;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "ui_json.unfinished_png";
		t.x = 437;
		t.y = 52;
		return t;
	};
	_proto.rewardIcon_i = function () {
		var t = new eui.Image();
		this.rewardIcon = t;
		t.horizontalCenter = 158.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "Stars_png";
		t.verticalCenter = -34.5;
		return t;
	};
	_proto.countNum_i = function () {
		var t = new eui.BitmapLabel();
		this.countNum = t;
		t.anchorOffsetX = 0;
		t.font = "font_fnt";
		t.height = 20;
		t.horizontalCenter = -13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "10/10";
		t.verticalCenter = 18;
		t.width = 130.4;
		return t;
	};
	_proto.des_i = function () {
		var t = new eui.Label();
		this.des = t;
		t.left = 174;
		t.text = "合成20株植物";
		t.y = 31.25;
		return t;
	};
	_proto.rewardNum_i = function () {
		var t = new UIText();
		this.rewardNum = t;
		t.anchorOffsetX = 0;
		t.height = 46;
		t.horizontalCenter = 230.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 99.21;
		t.y = 26;
		return t;
	};
	_proto.btnGetReward_i = function () {
		var t = new eui.Button();
		this.btnGetReward = t;
		t.label = "Nhận được";
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.skinName = "BtnGreen2";
		t.x = 429.92;
		t.y = 64.46;
		return t;
	};
	return UITask_CellSkin;
})(eui.Skin);generateEUI.paths['resource/UI/UITask/UITask.exml'] = window.UITaskSkin = (function (_super) {
	__extends(UITaskSkin, _super);
	function UITaskSkin() {
		_super.call(this);
		this.skinParts = ["btnPage1","btnPage2","uiAD","gCells1","gTaskView","gCells2","gAchieveView","btnBack","taskDot","achieveDot"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group3_i(),this.btnBack_i(),this.taskDot_i(),this.achieveDot_i()];
	}
	var _proto = UITaskSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(3,2,23,14);
		t.source = "dot_png";
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 388;
		t.elementsContent = [this._Image2_i(),this.btnPage1_i(),this.btnPage2_i(),this.uiAD_i(),this.gTaskView_i(),this.gAchieveView_i(),this._BitmapLabel1_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 35;
		t.left = -35;
		t.right = -35;
		t.scale9Grid = new egret.Rectangle(37,37,77,89);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "Bottom1_png";
		t.top = -197;
		return t;
	};
	_proto.btnPage1_i = function () {
		var t = new eui.Image();
		this.btnPage1 = t;
		t.left = 179;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Page sign_png";
		t.top = -157;
		return t;
	};
	_proto.btnPage2_i = function () {
		var t = new eui.Image();
		this.btnPage2 = t;
		t.left = 378;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Page-sign-off_png";
		t.top = -156;
		return t;
	};
	_proto.uiAD_i = function () {
		var t = new UIAD_Top();
		this.uiAD = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.top = 20;
		t.width = 600;
		return t;
	};
	_proto.gTaskView_i = function () {
		var t = new eui.Scroller();
		this.gTaskView = t;
		t.anchorOffsetY = 0;
		t.bottom = 110;
		t.left = 73;
		t.right = 73;
		t.top = 181;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.gCells1_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.gCells1_i = function () {
		var t = new eui.Group();
		this.gCells1 = t;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 2;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto.gAchieveView_i = function () {
		var t = new eui.Scroller();
		this.gAchieveView = t;
		t.anchorOffsetY = 0;
		t.bottom = 110;
		t.left = 73;
		t.right = 73;
		t.top = 181;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this.gCells2_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.gCells2_i = function () {
		var t = new eui.Group();
		this.gCells2 = t;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 2;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.left = 193;
		t.text = "任务";
		t.textAlign = "center";
		t.top = -124;
		t.touchEnabled = false;
		t.width = 150;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_fnt";
		t.height = 50;
		t.left = 392;
		t.text = "成就";
		t.textAlign = "center";
		t.top = -129;
		t.touchEnabled = false;
		t.width = 150;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.height = 76;
		t.icon = "Button green_png";
		t.label = "Button";
		t.right = 3;
		t.skinName = "UI.BtnCloseX";
		t.top = 239;
		t.width = 77;
		return t;
	};
	_proto.taskDot_i = function () {
		var t = new eui.Image();
		this.taskDot = t;
		t.source = "red dot_png";
		t.x = 322;
		t.y = 246;
		return t;
	};
	_proto.achieveDot_i = function () {
		var t = new eui.Image();
		this.achieveDot = t;
		t.source = "red dot_png";
		t.x = 522.67;
		t.y = 246;
		return t;
	};
	return UITaskSkin;
})(eui.Skin);