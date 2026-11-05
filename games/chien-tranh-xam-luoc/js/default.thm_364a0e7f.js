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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","AntiButton":"resource/eui_skins/AntiButton.exml","diaoluo":"resource/eui_skins/diaoluo.exml","yaoQingView":"resource/eui_skins/yaoQingView.exml","YaoQingItemView":"resource/eui_skins/YaoQingItemView.exml","DiaoXiangView":"resource/eui_skins/DiaoXiangView.exml","DiaoXiangItemView":"resource/eui_skins/DiaoXiangItemView.exml","ZenMeWanView":"resource/eui_skins/ZenMeWanView.exml","RoleInformation":"resource/eui_skins/RoleInformation.exml","TuJianView":"resource/eui_skins/TuJianView.exml","TuJianItemView":"resource/eui_skins/TuJianItemView.exml","QianDaoView":"resource/eui_skins/QianDaoView.exml","HuDunView":"resource/eui_skins/HuDunView.exml","GongJiView":"resource/eui_skins/GongJiView.exml","LiXianView":"resource/eui_skins/LiXianView.exml","HaoYouZhuLiView":"resource/eui_skins/HaoYouZhuLiView.exml","ShouHuoView":"resource/eui_skins/ShouHuoView.exml","JiaoShuiView":"resource/eui_skins/JiaoShuiView.exml","JiaoShuiItemView":"resource/eui_skins/JiaoShuiItemView.exml","BoxTip":"resource/eui_skins/BoxTip.exml","ZhiYinView":"resource/eui_skins/ZhiYinView.exml","HintView":"resource/eui_skins/HintView.exml","PaiHangView":"resource/eui_skins/PaiHangView.exml","PaiHangItem":"resource/eui_skins/PaiHangItem.exml","MoreGameItem":"resource/eui_skins/MoreGameItem.exml","MoreGameView":"resource/eui_skins/MoreGameView.exml","JieSuoView":"resource/eui_skins/JieSuoView.exml","ShengYaView":"resource/eui_skins/ShengYaView.exml","DuanWeiView":"resource/eui_skins/DuanWeiView.exml","JiJiaView":"resource/eui_skins/JiJiaView.exml","ShangDianYouHuiView":"resource/eui_skins/ShangDianYouHuiView.exml","DuanWeiDaTingView":"resource/eui_skins/DuanWeiDaTingView.exml","DuanWeiTiShengView":"resource/eui_skins/DuanWeiTiShengView.exml","ZiDongHeChengView":"resource/eui_skins/ZiDongHeChengView.exml","ShanChu":"resource/eui_skins/ShanChu.exml","YinHangView":"resource/eui_skins/YinHangView.exml","TiaoZahnView":"resource/eui_skins/TiaoZahnView.exml","TiaoZhaoJiJiaView":"resource/eui_skins/TiaoZhaoJiJiaView.exml","yuanshengView":"resource/eui_skins/yuanshengView.exml"};generateEUI.paths['resource/eui_skins/AntiButton.exml'] = window.AntiButtonSkin = (function (_super) {
	__extends(AntiButtonSkin, _super);
	function AntiButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.height = 50;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
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
	}
	var _proto = AntiButtonSkin.prototype;

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
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "123";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return AntiButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoxTip.exml'] = window.BoxTipSkin = (function (_super) {
	__extends(BoxTipSkin, _super);
	function BoxTipSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","titleTex","contentTex","mapIma","backGroup","queding","yaoqing","lingqu","clickBtn","lingquTex","huoquBtn","tiaoguoBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = BoxTipSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = -80;
		t.width = 430;
		t.elementsContent = [this.backGroup_i(),this.clickBtn_i(),this.huoquBtn_i(),this.tiaoguoBtn_i()];
		return t;
	};
	_proto.backGroup_i = function () {
		var t = new eui.Group();
		this.backGroup = t;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 430;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.closeBtn_i(),this.titleTex_i(),this.contentTex_i(),this.mapIma_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 500;
		t.left = 0;
		t.right = 0;
		t.source = "alertbg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.source = "hengfudingbu_png";
		t.x = 90;
		t.y = -40;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "closenew_png";
		t.x = 398;
		t.y = -27;
		return t;
	};
	_proto.titleTex_i = function () {
		var t = new eui.Label();
		this.titleTex = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "Lời khuyên";
		t.textAlign = "center";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.y = -13;
		return t;
	};
	_proto.contentTex_i = function () {
		var t = new eui.Label();
		this.contentTex = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 55;
		t.horizontalCenter = 13;
		t.size = 25;
		t.text = "666888 nghìn tỷ ";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 420;
		t.y = 254;
		return t;
	};
	_proto.mapIma_i = function () {
		var t = new eui.Image();
		this.mapIma = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 13;
		t.verticalCenter = -88;
		t.width = 150;
		return t;
	};
	_proto.clickBtn_i = function () {
		var t = new eui.Group();
		this.clickBtn = t;
		t.height = 88;
		t.horizontalCenter = 13;
		t.width = 260;
		t.y = 327;
		t.elementsContent = [this._Image3_i(),this.queding_i(),this.yaoqing_i(),this.lingqu_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		t.width = 260;
		t.x = 0;
		t.y = 25;
		return t;
	};
	_proto.queding_i = function () {
		var t = new eui.Label();
		this.queding = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Đồng ý";
		t.verticalCenter = 0;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Label();
		this.yaoqing = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "Mời ngay";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.lingqu_i = function () {
		var t = new eui.Group();
		this.lingqu = t;
		t.height = 200;
		t.width = 250;
		t.x = 5;
		t.y = -56;
		t.elementsContent = [this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shipin_png";
		t.x = 20;
		t.y = 86.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Nhận thêm";
		t.x = 89;
		t.y = 82.5;
		return t;
	};
	_proto.huoquBtn_i = function () {
		var t = new eui.Group();
		this.huoquBtn = t;
		t.height = 90;
		t.horizontalCenter = 13.5;
		t.visible = false;
		t.width = 265;
		t.y = 324;
		t.elementsContent = [this._Image5_i(),this.lingquTex_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		t.width = 265;
		return t;
	};
	_proto.lingquTex_i = function () {
		var t = new eui.Label();
		this.lingquTex = t;
		t.fontFamily = "Arial";
		t.size = 40;
		t.text = "Nhận";
		t.verticalCenter = 0;
		t.x = 56;
		return t;
	};
	_proto.tiaoguoBtn_i = function () {
		var t = new eui.Group();
		this.tiaoguoBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 32;
		t.horizontalCenter = 13;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tiaoguo_png";
		t.verticalCenter = 0;
		return t;
	};
	return BoxTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
					new eui.SetProperty("_Image1","source","button_down_png")
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
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
					new eui.SetProperty("_Image1","source","fuxuan2_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","fuxuan2_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","fuxuan2_png")
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
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "fuxuan1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Arial";
		t.height = 25;
		t.size = 25;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.x = 86;
		t.y = 10;
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/diaoluo.exml'] = window.diaoluoSkin = (function (_super) {
	__extends(diaoluoSkin, _super);
	function diaoluoSkin() {
		_super.call(this);
		this.skinParts = ["euiLajitong","euiKuang","euiBeibaoGroup"];
		
		this.height = 275;
		this.elementsContent = [this.euiLajitong_i(),this._Image1_i(),this.euiKuang_i(),this.euiBeibaoGroup_i()];
	}
	var _proto = diaoluoSkin.prototype;

	_proto.euiLajitong_i = function () {
		var t = new eui.Image();
		this.euiLajitong = t;
		t.source = "lajitong_png";
		t.touchEnabled = true;
		t.x = 14;
		t.y = 119;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "diaoluobg_png";
		t.touchEnabled = true;
		t.visible = false;
		t.y = 111;
		return t;
	};
	_proto.euiKuang_i = function () {
		var t = new eui.Image();
		this.euiKuang = t;
		t.source = "cardbg_png";
		t.visible = false;
		t.x = 0;
		t.y = 148;
		return t;
	};
	_proto.euiBeibaoGroup_i = function () {
		var t = new eui.Group();
		this.euiBeibaoGroup = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.x = 15;
		t.y = 148;
		return t;
	};
	return diaoluoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DiaoXiangItemView.exml'] = window.DiaoXiangItemViewSkin = (function (_super) {
	__extends(DiaoXiangItemViewSkin, _super);
	function DiaoXiangItemViewSkin() {
		_super.call(this);
		this.skinParts = ["head","shuXing"];
		
		this.height = 120;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 120;
		this.elementsContent = [this._Group1_i(),this._Group2_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = DiaoXiangItemViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89;
		t.width = 90;
		t.x = 13;
		t.y = 5;
		t.elementsContent = [this._Image1_i(),this.head_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77;
		t.source = "jiahao_png";
		t.width = 79;
		t.x = 6;
		t.y = 5;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "inviteItem_png";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 17;
		t.x = 20;
		t.y = 99;
		t.elementsContent = [this.shuXing_i()];
		return t;
	};
	_proto.shuXing_i = function () {
		var t = new eui.Label();
		this.shuXing = t;
		t.size = 16;
		t.text = "Vàng +20%";
		t.textColor = 0x149ce2;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return DiaoXiangItemViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DiaoXiangView.exml'] = window.DiaoXiangViewSkin = (function (_super) {
	__extends(DiaoXiangViewSkin, _super);
	function DiaoXiangViewSkin() {
		_super.call(this);
		this.skinParts = ["dataList","scroller","yaoqingBtn","closeBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this._Label2_i(),this.scroller_i(),this.yaoqingBtn_i(),this._Label3_i(),this.closeBtn_i()];
	}
	var _proto = DiaoXiangViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 944.12;
		t.scale9Grid = new egret.Rectangle(49,45,21,29);
		t.source = "alertbg_png";
		t.width = 579.48;
		t.x = 68.46;
		t.y = 182.12;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.63;
		t.text = "Bạn bè trở thành người bảo vệ của bạn và được gia cố vĩnh viễn";
		t.textAlign = "center";
		t.textColor = 0x070000;
		t.width = 394.21;
		t.x = 170.73;
		t.y = 816.21;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92.11;
		t.size = 20;
		t.text = "Nhắc nhở: Ai đó nhấp vào liên kết mời của bạn để trở thành bạn được thuê của bạn và việc tích lũy tất cả lợi ích tương đương với việc tăng thuộc tính của tất cả các loại cây lên một cấp ~";
		t.textColor = 0x09aac6;
		t.width = 394.21;
		t.x = 157.95;
		t.y = 998.05;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 430.3;
		t.width = 500;
		t.x = 105.06;
		t.y = 317.03;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 443.94;
		t.elementsContent = [this.dataList_i()];
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.itemRendererSkinName = DiaoXiangItemViewSkin;
		t.width = 500;
		t.x = -0.01;
		t.y = 6.18;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.yaoqingBtn_i = function () {
		var t = new eui.Image();
		this.yaoqingBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89.88;
		t.source = "invite_png";
		t.width = 258.24;
		t.x = 231.73;
		t.y = 866.94;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.63;
		t.text = "Thuê bạn làm bảo vệ";
		t.textAlign = "center";
		t.textColor = 0xa07070;
		t.width = 394.21;
		t.x = 157.95;
		t.y = 216.82;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "closenew_png";
		t.x = 605;
		t.y = 165;
		return t;
	};
	return DiaoXiangViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DuanWeiDaTingView.exml'] = window.DuanWeiDaTingViewSkin = (function (_super) {
	__extends(DuanWeiDaTingViewSkin, _super);
	function DuanWeiDaTingViewSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.width = 180;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
	}
	var _proto = DuanWeiDaTingViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.source = "duanwei1_png";
		t.x = 11;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "Huyền thoại 1";
		t.x = 60;
		t.y = 18;
		return t;
	};
	return DuanWeiDaTingViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DuanWeiTiShengView.exml'] = window.DuanWeiTiShengViewSkin = (function (_super) {
	__extends(DuanWeiTiShengViewSkin, _super);
	function DuanWeiTiShengViewSkin() {
		_super.call(this);
		this.skinParts = ["curPower","recommend","reduce","addLevel","closeBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = DuanWeiTiShengViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "nodebg_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 360;
		t.height = 424;
		t.horizontalCenter = 4.5;
		t.width = 533;
		t.elementsContent = [this._Image2_i(),this.curPower_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.recommend_i(),this.reduce_i(),this.addLevel_i(),this.closeBtn_i(),this._Label6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 800;
		t.horizontalCenter = -6.5;
		t.scale9Grid = new egret.Rectangle(252,398,6,9);
		t.scaleX = 0.85;
		t.scaleY = 0.5;
		t.source = "alertbg_png";
		t.verticalCenter = 4;
		t.width = 600;
		t.x = -300;
		t.y = -400;
		return t;
	};
	_proto.curPower_i = function () {
		var t = new eui.Label();
		this.curPower = t;
		t.horizontalCenter = -139.5;
		t.size = 35;
		t.text = "123456789";
		t.textAlign = "center";
		t.textColor = 0x2ff2fc;
		t.verticalAlign = "middle";
		t.y = 92;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = -139.5;
		t.size = 35;
		t.text = "Hiện tại";
		t.y = 203;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 120.5;
		t.size = 35;
		t.text = "Đề xuất";
		t.y = 203;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = ">>";
		t.textColor = 0x2ff2fc;
		t.x = 235;
		t.y = 94;
		return t;
	};
	_proto.recommend_i = function () {
		var t = new eui.Label();
		this.recommend = t;
		t.horizontalCenter = 129.5;
		t.size = 35;
		t.text = "123456789";
		t.textAlign = "center";
		t.textColor = 0x79e972;
		t.verticalAlign = "middle";
		t.y = 92;
		return t;
	};
	_proto.reduce_i = function () {
		var t = new eui.Group();
		this.reduce = t;
		t.height = 60;
		t.width = 200;
		t.x = 37;
		t.y = 357;
		t.elementsContent = [this._Image3_i(),this._Label4_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "btnyellow_png";
		t.x = -7;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "Thấp hơn";
		t.textColor = 0xffe1b0;
		t.x = 23;
		t.y = 15;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shipin_png";
		t.x = 148;
		t.y = 16;
		return t;
	};
	_proto.addLevel_i = function () {
		var t = new eui.Group();
		this.addLevel = t;
		t.height = 60;
		t.horizontalCenter = 110.5;
		t.width = 200;
		t.y = 357;
		t.elementsContent = [this._Image5_i(),this._Label5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "btnyellow_png";
		t.x = -7;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "Tăng hạng";
		t.x = 40;
		t.y = 15;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 240.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "closenew_png";
		t.verticalCenter = -187;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.text = "Thử hạ thứ hạng nếu bạn\nkhông thể đánh bại quân địch!";
		t.textColor = 0xfffc99;
		t.y = 286;
		return t;
	};
	return DuanWeiTiShengViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DuanWeiView.exml'] = window.DuanWeiViewSkin = (function (_super) {
	__extends(DuanWeiViewSkin, _super);
	function DuanWeiViewSkin() {
		_super.call(this);
		this.skinParts = ["levelUp","goldtext","diamondtext","power","expImg","addDiamond","levelImg","levelText"];
		
		this.height = 210;
		this.width = 460;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = DuanWeiViewSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 460;
		t.elementsContent = [this._Label1_i(),this.levelUp_i(),this._Label2_i(),this.goldtext_i(),this.diamondtext_i(),this._Image1_i(),this._Label3_i(),this.power_i(),this._Group1_i(),this._Image3_i(),this._Image4_i(),this.addDiamond_i(),this._Group2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "EXP";
		t.x = 155.83;
		t.y = 28.69999999999999;
		return t;
	};
	_proto.levelUp_i = function () {
		var t = new eui.Image();
		this.levelUp = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btnyellow_png";
		t.x = 264;
		t.y = 155;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "Tăng hạng";
		t.x = 299;
		t.y = 168;
		return t;
	};
	_proto.goldtext_i = function () {
		var t = new eui.Label();
		this.goldtext = t;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "100000";
		t.x = 189.82;
		t.y = 94.26999999999998;
		return t;
	};
	_proto.diamondtext_i = function () {
		var t = new eui.Label();
		this.diamondtext = t;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "100000";
		t.x = 327.5;
		t.y = 94.26999999999998;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "shengya3_png";
		t.x = 21;
		t.y = 157;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Lực:";
		t.textColor = 0xFFFC99;
		t.x = 34;
		t.y = 170;
		return t;
	};
	_proto.power_i = function () {
		var t = new eui.Label();
		this.power = t;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "99999999";
		t.textColor = 0xFFFC99;
		t.x = 95;
		t.y = 171;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 299;
		t.x = 149.01;
		t.y = 55.329999999999984;
		t.elementsContent = [this._Image2_i(),this.expImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0.65;
		t.scaleY = 0.7;
		t.source = "shengyajindu2_png";
		t.top = 0;
		return t;
	};
	_proto.expImg_i = function () {
		var t = new eui.Image();
		this.expImg = t;
		t.bottom = 0;
		t.scaleY = 0.7;
		t.source = "shengyajindu1_png";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "jinbi_png";
		t.x = 153;
		t.y = 86;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "zuanshi_png";
		t.x = 281.35;
		t.y = 82;
		return t;
	};
	_proto.addDiamond_i = function () {
		var t = new eui.Image();
		this.addDiamond = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiahao_png";
		t.x = 411.01;
		t.y = 95.34000000000003;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.width = 120;
		t.x = 10.33;
		t.y = 10.3;
		t.elementsContent = [this._Image5_i(),this.levelImg_i(),this._Image6_i(),this.levelText_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shangya4_png";
		t.x = 12.999999999999984;
		t.y = 7.009999999999984;
		return t;
	};
	_proto.levelImg_i = function () {
		var t = new eui.Image();
		this.levelImg = t;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "duanwei1_png";
		t.x = 25.34;
		t.y = 0.33;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4000000000000001;
		t.scaleY = 0.5;
		t.source = "shengya2_png";
		t.x = 7.499999999999984;
		t.y = 77.41000000000003;
		return t;
	};
	_proto.levelText_i = function () {
		var t = new eui.Label();
		this.levelText = t;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Cấp bậc 4";
		t.x = 15.299999999999995;
		t.y = 86.91000000000003;
		return t;
	};
	return DuanWeiViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GongJiView.exml'] = window.GongJiViewSkin = (function (_super) {
	__extends(GongJiViewSkin, _super);
	function GongJiViewSkin() {
		_super.call(this);
		this.skinParts = ["videoBtn","enterBtn","closeBtn","daojishi","Gro","rocket","tipbg"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.Gro_i(),this.tipbg_i()];
	}
	var _proto = GongJiViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.fillColor = 0x000000;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "nodebg_png";
		t.top = 0;
		return t;
	};
	_proto.Gro_i = function () {
		var t = new eui.Group();
		this.Gro = t;
		t.bottom = 360;
		t.height = 500;
		t.horizontalCenter = 0;
		t.width = 430;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i(),this._Image4_i(),this._Group1_i(),this.closeBtn_i(),this._Label5_i(),this.daojishi_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(68,103,636,296);
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 430;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.source = "hengfudingbu_png";
		t.x = 90;
		t.y = -40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 39;
		t.horizontalCenter = 0;
		t.size = 21;
		t.text = "(Tất cả đòn tấn công của đều tăng tốc\nnhận thêm x2 vàng!)";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 400;
		t.y = 340;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 45;
		t.horizontalCenter = 2.5;
		t.size = 40;
		t.text = "Cuồng nộ";
		t.textAlign = "center";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.width = 233;
		t.y = -12;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "jiasumiaobiao_png";
		t.y = 93;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 63;
		t.horizontalCenter = 0;
		t.y = 425;
		t.elementsContent = [this.videoBtn_i(),this.enterBtn_i()];
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new eui.Group();
		this.videoBtn = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Label3_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.scaleY = 0.7;
		t.source = "btnyellowad_png";
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = -20;
		t.size = 30;
		t.text = "Free";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shipin_png";
		t.x = 153;
		t.y = 18;
		return t;
	};
	_proto.enterBtn_i = function () {
		var t = new eui.Group();
		this.enterBtn = t;
		t.visible = false;
		t.x = 15;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Label4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.source = "btnyellowad_png";
		t.width = 220;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 35;
		t.text = "Đồng ý";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 201;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "closenew_png";
		t.verticalCenter = -236;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.rotation = 34.8;
		t.text = "2X";
		t.textColor = 0x2bf7fe;
		t.x = 333;
		t.y = 89;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.Label();
		this.daojishi = t;
		t.horizontalCenter = 0;
		t.text = "05:00";
		t.y = 306;
		return t;
	};
	_proto.tipbg_i = function () {
		var t = new eui.Group();
		this.tipbg = t;
		t.height = 572;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 720;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this.rocket_i(),this._Image11_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 572;
		t.source = "tipbg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "speedImg_png";
		t.visible = false;
		t.x = 64;
		t.y = 142;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "speedImg_png";
		t.visible = false;
		t.x = 32;
		t.y = 156;
		return t;
	};
	_proto.rocket_i = function () {
		var t = new eui.Image();
		this.rocket = t;
		t.source = "speedImg_png";
		t.x = -562;
		t.y = 392;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "speedImg_png";
		t.visible = false;
		t.x = 732;
		t.y = -124;
		return t;
	};
	return GongJiViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GuanQiaView.exml'] = window.GuanQiaViewSkin = (function (_super) {
	__extends(GuanQiaViewSkin, _super);
	function GuanQiaViewSkin() {
		_super.call(this);
		this.skinParts = ["dataList","scroller"];
		
		this.height = 590;
		this.width = 500;
		this.elementsContent = [this.scroller_i(),this._Group2_i()];
	}
	var _proto = GuanQiaViewSkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetY = 0;
		t.height = 530;
		t.width = 500;
		t.x = 0;
		t.y = 59;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.x = 0;
		t.y = -57;
		t.elementsContent = [this.dataList_i()];
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = PaiHangItemSkin;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.width = 466;
		t.x = 13;
		t.y = 23;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "Đánh số";
		t.textColor = 0x0f0808;
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "Hình đại diện";
		t.textColor = 0x070101;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "Tên đầu tiên";
		t.textColor = 0x070000;
		t.verticalCenter = 0;
		t.x = 233;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "Cấp độ mở khóa";
		t.textColor = 0x0a0000;
		t.verticalCenter = 0;
		t.x = 343;
		return t;
	};
	return GuanQiaViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HaoHuanLiBaoView.exml'] = window.HaoHuanLiBaoViewSkin = (function (_super) {
	__extends(HaoHuanLiBaoViewSkin, _super);
	function HaoHuanLiBaoViewSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","lingqubtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = HaoHuanLiBaoViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 1;
		t.fillAlpha = 0.55;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.75;
		t.top = -1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 360;
		t.height = 600;
		t.horizontalCenter = 0;
		t.width = 508;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i(),this._Label2_i(),this.closeBtn_i(),this._Image3_i(),this.lingqubtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.scale9Grid = new egret.Rectangle(244,417,8,8);
		t.source = "alertbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 40;
		t.text = "X4";
		t.x = 351.33;
		t.y = 94.65;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 1;
		t.source = "hengfudingbu_png";
		t.x = 104;
		t.y = -51.42;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 40;
		t.text = "Gói quà xịn";
		t.textColor = 0x2AF8FE;
		t.x = 150;
		t.y = -20.35;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "closenew_png";
		t.x = 454;
		t.y = -27.98;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "tuji2_json.shipinxiangziduo_png";
		t.x = 88;
		t.y = 96.98;
		return t;
	};
	_proto.lingqubtn_i = function () {
		var t = new eui.Group();
		this.lingqubtn = t;
		t.height = 80;
		t.width = 300;
		t.x = 104;
		t.y = 513.67;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shipin_png";
		t.x = 176.34;
		t.y = 26.68;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "Free";
		t.x = 87;
		t.y = 24.33;
		return t;
	};
	return HaoHuanLiBaoViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HaoYouZhuLiView.exml'] = window.HaoYouZhuLiViewSkin = (function (_super) {
	__extends(HaoYouZhuLiViewSkin, _super);
	function HaoYouZhuLiViewSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Label2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
	}
	var _proto = HaoYouZhuLiViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 430;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 8;
		t.scaleX = 0.6;
		t.source = "hengfudingbu_png";
		t.verticalCenter = -241.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = -0.5;
		t.size = 26;
		t.text = "Mời bạn bè lên mạng và nhận ngay 10 giờ thu nhập nếu bạn có 3 người bạn";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -130;
		t.width = 351.18;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "closenew_png";
		t.x = 534;
		t.y = 368;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 60;
		t.horizontalCenter = 8.5;
		t.size = 40;
		t.text = "Bạn bè giúp đỡ";
		t.textAlign = "center";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.verticalCenter = -236;
		t.width = 233;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 261;
		t.y = 730;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btnyellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "Mời ngay";
		t.x = 37;
		t.y = 13;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.91;
		t.width = 78.85;
		t.x = 207;
		t.y = 581;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiahao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.91;
		t.width = 78.85;
		t.x = 320.03;
		t.y = 581.88;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiahao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.91;
		t.width = 78.85;
		t.x = 440.63;
		t.y = 581.27;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiahao_png";
		t.verticalCenter = 0;
		return t;
	};
	return HaoYouZhuLiViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HintView.exml'] = window.HintViewSkin = (function (_super) {
	__extends(HintViewSkin, _super);
	function HintViewSkin() {
		_super.call(this);
		this.skinParts = ["shouhuo0","closeBtn0","fanbei0","quedingBtn0"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group2_i()];
	}
	var _proto = HintViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = -40;
		t.width = 430;
		t.elementsContent = [this._Image1_i(),this.shouhuo0_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.closeBtn0_i(),this._Label4_i(),this.fanbei0_i(),this._Image3_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 430;
		return t;
	};
	_proto.shouhuo0_i = function () {
		var t = new eui.Label();
		this.shouhuo0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 60;
		t.horizontalCenter = 8.5;
		t.size = 40;
		t.text = "1.85 nghìn tỷ ";
		t.textAlign = "center";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.width = 233;
		t.y = 254;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.24;
		t.size = 18;
		t.text = "Vẫn còn (20/5) để đổi bật lửa điện";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 359;
		t.x = 36;
		t.y = 291.72;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.24;
		t.size = 18;
		t.text = "Xin chúc mừng, bạn đã đạt được các điều kiện để đổi máy cạo râu điện!";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 377.18;
		t.x = 21.74;
		t.y = 336.57;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "(Tối đa 20 giờ Offline)";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 360;
		t.y = 450;
		return t;
	};
	_proto.closeBtn0_i = function () {
		var t = new eui.Image();
		this.closeBtn0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "closenew_png";
		t.x = 389;
		t.y = -19;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 11;
		t.size = 45;
		t.text = "Thực vật hồi sinh";
		t.textAlign = "center";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.y = 28;
		return t;
	};
	_proto.fanbei0_i = function () {
		var t = new eui.Group();
		this.fanbei0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 3;
		t.y = 350;
		t.elementsContent = [this._Image2_i(),this._Label5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		t.width = 220;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "Nhận";
		t.touchEnabled = false;
		t.verticalCenter = 1;
		t.x = 66;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = 8;
		t.source = "jinbi_png";
		t.width = 100;
		t.y = 109;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 18;
		t.visible = false;
		t.y = 350;
		t.elementsContent = [this.quedingBtn0_i(),this._Label6_i()];
		return t;
	};
	_proto.quedingBtn0_i = function () {
		var t = new eui.Image();
		this.quedingBtn0 = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(32,24,199,45);
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		t.width = 220;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Đồng ý";
		t.verticalCenter = 0;
		return t;
	};
	return HintViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HistroyRankView.exml'] = window.HistroyRankViewSkin = (function (_super) {
	__extends(HistroyRankViewSkin, _super);
	function HistroyRankViewSkin() {
		_super.call(this);
		this.skinParts = ["dataList","scroller"];
		
		this.height = 590;
		this.width = 500;
		this.elementsContent = [this.scroller_i(),this._Group2_i()];
	}
	var _proto = HistroyRankViewSkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetY = 0;
		t.height = 530;
		t.width = 500;
		t.x = 0;
		t.y = 58;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.x = 0;
		t.y = 63;
		t.elementsContent = [this.dataList_i()];
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = PaiHangItemSkin;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.width = 465;
		t.x = 14;
		t.y = 22;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "Đánh số";
		t.textColor = 0x0F0808;
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "Hình đại diện";
		t.textColor = 0x070101;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "Tên đầu tiên";
		t.textColor = 0x070000;
		t.verticalCenter = 0;
		t.x = 226;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "Cấp độ mở khóa";
		t.textColor = 0x0A0000;
		t.verticalCenter = 0;
		t.x = 343;
		return t;
	};
	return HistroyRankViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/JiaoShuiItemView.exml'] = window.JiaoShuiItemViewSkin = (function (_super) {
	__extends(JiaoShuiItemViewSkin, _super);
	function JiaoShuiItemViewSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 76;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 76;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Group1_i()];
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
	var _proto = JiaoShuiItemViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.visible = false;
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
		t.visible = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 76;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.horizontalCenter = 0;
		t.source = "jiahao_png";
		t.verticalCenter = 0;
		t.width = 76;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.horizontalCenter = 0;
		t.source = "inviteItem_png";
		t.width = 76;
		return t;
	};
	return JiaoShuiItemViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/JiaoShuiView.exml'] = window.JiaoShuiViewSkin = (function (_super) {
	__extends(JiaoShuiViewSkin, _super);
	function JiaoShuiViewSkin() {
		_super.call(this);
		this.skinParts = ["shijian","closeBtn","mapIma","shouhuo","quedingBtn","doubleBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group4_i()];
	}
	var _proto = JiaoShuiViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = -80;
		t.width = 430;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.shijian_i(),this._Label1_i(),this.closeBtn_i(),this._Label2_i(),this.mapIma_i(),this._Group1_i(),this._Group2_i(),this._Scroller1_i(),this.quedingBtn_i(),this.doubleBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 430;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.source = "hengfudingbu_png";
		t.x = 90;
		t.y = -40;
		return t;
	};
	_proto.shijian_i = function () {
		var t = new eui.Label();
		this.shijian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "0:00:00";
		t.textAlign = "center";
		t.textColor = 0xC63831;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 123;
		t.y = 315;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 2;
		t.size = 45;
		t.text = "Thợ máy";
		t.textAlign = "center";
		t.textColor = 0x2af8fe;
		t.y = -13;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "closenew_png";
		t.x = 393;
		t.y = -21;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 30;
		t.horizontalCenter = 22;
		t.size = 30;
		t.text = "Duy trì máy móc và thu hoạch tiền vàng:";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.y = 74;
		return t;
	};
	_proto.mapIma_i = function () {
		var t = new eui.Image();
		this.mapIma = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = 6;
		t.source = "xiangrikui1_png";
		t.width = 100;
		t.y = 151;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 4.5;
		t.y = 283;
		t.elementsContent = [this.shouhuo_i(),this._Image3_i()];
		return t;
	};
	_proto.shouhuo_i = function () {
		var t = new eui.Label();
		this.shouhuo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 63;
		t.size = 36;
		t.text = "17.89 nghìn tỷ ";
		t.textAlign = "left";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "jinbi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 129;
		t.y = 385;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btnyellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 40;
		t.text = "Mời ngay";
		t.x = 31;
		t.y = 10;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 380;
		t.y = 362;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._List1_i()];
		return t;
	};
	_proto._List1_i = function () {
		var t = new eui.List();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.itemRendererSkinName = JiaoShuiItemViewSkin;
		t.x = 6;
		t.y = 2.97;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.quedingBtn_i = function () {
		var t = new eui.Group();
		this.quedingBtn = t;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 7;
		t.width = 200;
		t.y = 353;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scaleY = 0.8;
		t.source = "btnyellow_png";
		t.width = 200;
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 3.5;
		t.size = 30;
		t.text = "Đồng ý";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.doubleBtn_i = function () {
		var t = new eui.Group();
		this.doubleBtn = t;
		t.height = 60;
		t.horizontalCenter = 7;
		t.width = 200;
		t.y = 425;
		t.elementsContent = [this._Image6_i(),this._Label5_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scaleY = 0.8;
		t.source = "btnyellowad_png";
		t.width = 200;
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 15;
		t.size = 25;
		t.text = "Nhận x2";
		t.touchEnabled = false;
		t.verticalCenter = 1.5;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shipin_png";
		t.x = 25;
		t.y = 18;
		return t;
	};
	return JiaoShuiViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/JieSuoView.exml'] = window.JieSuoViewSkin = (function (_super) {
	__extends(JieSuoViewSkin, _super);
	function JieSuoViewSkin() {
		_super.call(this);
		this.skinParts = ["blink","tiaoguoBtn","shouhuo","closeBtn","fanbeiBtn","fanbeiBtn0","centerImg","leftImg","rightImg","checkB"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group2_i()];
	}
	var _proto = JieSuoViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 368;
		t.height = 500;
		t.horizontalCenter = 0;
		t.width = 430;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.blink_i(),this.tiaoguoBtn_i(),this.shouhuo_i(),this._Label1_i(),this.closeBtn_i(),this._Label2_i(),this.fanbeiBtn_i(),this.fanbeiBtn0_i(),this._Image7_i(),this._Group1_i(),this.checkB_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 430;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.55;
		t.scaleY = 0.9;
		t.source = "hengfudingbu_png";
		t.x = 101;
		t.y = -40;
		return t;
	};
	_proto.blink_i = function () {
		var t = new eui.Image();
		this.blink = t;
		t.anchorOffsetX = 140.5;
		t.anchorOffsetY = 141.5;
		t.source = "guangquan_png";
		t.x = 215;
		t.y = 197;
		return t;
	};
	_proto.tiaoguoBtn_i = function () {
		var t = new eui.Group();
		this.tiaoguoBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.horizontalCenter = 1;
		t.visible = false;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 1;
		t.scaleX = 0.8;
		t.scaleY = 0.7;
		t.source = "tiaoguo_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.shouhuo_i = function () {
		var t = new eui.Label();
		this.shouhuo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 43;
		t.horizontalCenter = 27;
		t.size = 40;
		t.text = "1000";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 100.24;
		t.y = 320.01;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.24;
		t.size = 18;
		t.text = "Đây là phần thưởng của bạn";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 359;
		t.x = 36;
		t.y = 305.93;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "closenew_png";
		t.x = 391.56;
		t.y = -19;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 35;
		t.text = "Mở khóa";
		t.textAlign = "center";
		t.textColor = 0x2af8fe;
		t.verticalAlign = "middle";
		t.y = -13;
		return t;
	};
	_proto.fanbeiBtn_i = function () {
		var t = new eui.Group();
		this.fanbeiBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.horizontalCenter = 11;
		t.y = 455.74;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.scaleY = 0.6;
		t.source = "btnyellow_png";
		t.verticalCenter = 4;
		t.visible = false;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 27;
		t.text = "Nhận Free";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 4;
		return t;
	};
	_proto.fanbeiBtn0_i = function () {
		var t = new eui.Group();
		this.fanbeiBtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 10.5;
		t.y = 398.89;
		t.elementsContent = [this._Image5_i(),this._Label4_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.6;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "Nhận x3";
		t.touchEnabled = false;
		t.verticalCenter = 2.5;
		t.x = 81.26;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shipin_png";
		t.x = 30.6;
		t.y = 13.44;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -48;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zuanshi_png";
		t.y = 303.97;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 159;
		t.horizontalCenter = -0.5;
		t.verticalCenter = -78.5;
		t.width = 441;
		t.elementsContent = [this.centerImg_i(),this.leftImg_i(),this.rightImg_i()];
		return t;
	};
	_proto.centerImg_i = function () {
		var t = new eui.Image();
		this.centerImg = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 129.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "fplant1_png";
		t.x = 216;
		t.y = 78;
		return t;
	};
	_proto.leftImg_i = function () {
		var t = new eui.Image();
		this.leftImg = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 129.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "fplant1_png";
		t.x = 58;
		t.y = 78;
		return t;
	};
	_proto.rightImg_i = function () {
		var t = new eui.Image();
		this.rightImg = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 129.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "fplant1_png";
		t.x = 380;
		t.y = 78;
		return t;
	};
	_proto.checkB_i = function () {
		var t = new eui.CheckBox();
		this.checkB = t;
		t.horizontalCenter = 5;
		t.label = "三倍奖励";
		t.selected = true;
		t.verticalCenter = 231;
		t.visible = false;
		return t;
	};
	return JieSuoViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/JiJiaView.exml'] = window.JiJiaViewSkin = (function (_super) {
	__extends(JiJiaViewSkin, _super);
	function JiJiaViewSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = JiJiaViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "fplant1_png";
		t.verticalCenter = 0;
		return t;
	};
	return JiJiaViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LiXianView.exml'] = window.LiXianViewSkin = (function (_super) {
	__extends(LiXianViewSkin, _super);
	function LiXianViewSkin() {
		_super.call(this);
		this.skinParts = ["shouhuo","closeBtn","fanbei","quedingBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = LiXianViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 16;
		t.width = 430;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.shouhuo_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.closeBtn_i(),this._Label4_i(),this.fanbei_i(),this._Image5_i(),this.quedingBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 430;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.source = "hengfudingbu_png";
		t.x = 91.33;
		t.y = -37.32;
		return t;
	};
	_proto.shouhuo_i = function () {
		var t = new eui.Label();
		this.shouhuo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 60;
		t.horizontalCenter = 17.5;
		t.size = 40;
		t.text = "1.85 nghìn tỷ ";
		t.textAlign = "center";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.width = 233;
		t.y = 211;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.24;
		t.horizontalCenter = 8;
		t.size = 18;
		t.text = "Trong khi off game, đội quân mech sẽ nhận\nthưởng cho bạn";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 386;
		t.y = 271.72;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.24;
		t.size = 18;
		t.text = "Xin chúc mừng, bạn đã đạt được các điều kiện để đổi máy cạo râu điện!";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 377.18;
		t.x = 21.74;
		t.y = 336.57;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "(Tối đa 20 giờ Offline)";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 360;
		t.y = 450;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "closenew_png";
		t.x = 393;
		t.y = -19;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 3;
		t.size = 40;
		t.text = "Vàng Offline";
		t.textAlign = "center";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.y = -6.99;
		return t;
	};
	_proto.fanbei_i = function () {
		var t = new eui.Group();
		this.fanbei = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 334;
		t.elementsContent = [this._Image3_i(),this._Label5_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.7;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "Nhận thêm";
		t.touchEnabled = false;
		t.verticalCenter = 1.5;
		t.x = 90;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shipin_png";
		t.x = 47;
		t.y = 18;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = 20;
		t.source = "jinbi_png";
		t.width = 100;
		t.y = 96;
		return t;
	};
	_proto.quedingBtn_i = function () {
		var t = new eui.Group();
		this.quedingBtn = t;
		t.horizontalCenter = 4;
		t.y = 408;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "tiaoguo_png";
		t.verticalCenter = 0;
		return t;
	};
	return LiXianViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MoreGameItem.exml'] = window.MoreGameItemSkin = (function (_super) {
	__extends(MoreGameItemSkin, _super);
	function MoreGameItemSkin() {
		_super.call(this);
		this.skinParts = ["iconIma","imaGro","tipIma","nameTex"];
		
		this.height = 150;
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.imaGro_i(),this.tipIma_i(),this.nameTex_i()];
	}
	var _proto = MoreGameItemSkin.prototype;

	_proto.imaGro_i = function () {
		var t = new eui.Group();
		this.imaGro = t;
		t.anchorOffsetX = 63;
		t.anchorOffsetY = 63;
		t.height = 126;
		t.horizontalCenter = 0;
		t.width = 126;
		t.y = 63;
		t.elementsContent = [this.iconIma_i()];
		return t;
	};
	_proto.iconIma_i = function () {
		var t = new eui.Image();
		this.iconIma = t;
		t.anchorOffsetX = 63;
		t.anchorOffsetY = 63;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "plant1_png";
		t.top = 0;
		return t;
	};
	_proto.tipIma_i = function () {
		var t = new eui.Image();
		this.tipIma = t;
		t.right = 0;
		t.rotation = 22.2;
		t.source = "xcxtips_png";
		t.top = 0;
		return t;
	};
	_proto.nameTex_i = function () {
		var t = new eui.Label();
		this.nameTex = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "Plant Brawl";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		return t;
	};
	return MoreGameItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MoreGameView.exml'] = window.MoreGameViewSkin = (function (_super) {
	__extends(MoreGameViewSkin, _super);
	function MoreGameViewSkin() {
		_super.call(this);
		this.skinParts = ["dataList0","scroller0","lGro","rGro","closeBtn","titleTex","dataList","scroller"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Group1_i(),this._Group3_i(),this.lGro_i(),this.rGro_i(),this.closeBtn_i(),this._Group6_i()];
	}
	var _proto = MoreGameViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "alertbg_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 66;
		t.top = 65;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0x6b6b6b;
		t.height = 60;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.width = 200;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "Bạn bè đang chơi";
		t.textColor = 0xfcf5d4;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.horizontalCenter = 0;
		t.top = 130;
		t.width = 720;
		t.elementsContent = [this._Rect3_i(),this.scroller0_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE5E5E5;
		t.height = 160;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		return t;
	};
	_proto.scroller0_i = function () {
		var t = new eui.Scroller();
		this.scroller0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.left = 5;
		t.right = 5;
		t.y = 5;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.y = 1;
		t.elementsContent = [this.dataList0_i()];
		return t;
	};
	_proto.dataList0_i = function () {
		var t = new eui.List();
		this.dataList0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.itemRendererSkinName = MoreGameItemSkin;
		t.useVirtualLayout = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto.lGro_i = function () {
		var t = new eui.Group();
		this.lGro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.horizontalCenter = 0;
		t.verticalCenter = -539;
		t.visible = false;
		t.width = 680;
		t.elementsContent = [this._MoreGameItem1_i(),this._MoreGameItem2_i(),this._MoreGameItem3_i(),this._MoreGameItem4_i(),this._MoreGameItem5_i()];
		return t;
	};
	_proto._MoreGameItem1_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 60;
		t.y = 65;
		return t;
	};
	_proto._MoreGameItem2_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 200;
		t.y = 65;
		return t;
	};
	_proto._MoreGameItem3_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 340;
		t.y = 65;
		return t;
	};
	_proto._MoreGameItem4_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 480;
		t.y = 65;
		return t;
	};
	_proto._MoreGameItem5_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 620;
		t.y = 65;
		return t;
	};
	_proto.rGro_i = function () {
		var t = new eui.Group();
		this.rGro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.horizontalCenter = 0;
		t.verticalCenter = 350;
		t.visible = false;
		t.width = 680;
		t.elementsContent = [this._MoreGameItem6_i(),this._MoreGameItem7_i(),this._MoreGameItem8_i(),this._MoreGameItem9_i(),this._MoreGameItem10_i()];
		return t;
	};
	_proto._MoreGameItem6_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 60;
		t.y = 65;
		return t;
	};
	_proto._MoreGameItem7_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 200;
		t.y = 65;
		return t;
	};
	_proto._MoreGameItem8_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 340;
		t.y = 65;
		return t;
	};
	_proto._MoreGameItem9_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 480;
		t.y = 65;
		return t;
	};
	_proto._MoreGameItem10_i = function () {
		var t = new MoreGameItem();
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 620;
		t.y = 65;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.left = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "closenew_png";
		t.top = 10;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 748;
		t.horizontalCenter = 0;
		t.top = 300;
		t.width = 650;
		t.elementsContent = [this._Rect4_i(),this._Group4_i(),this.scroller_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xa5d4ff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 0;
		t.elementsContent = [this._Rect5_i(),this.titleTex_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0x6B6B6B;
		t.height = 60;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.width = 200;
		return t;
	};
	_proto.titleTex_i = function () {
		var t = new eui.Label();
		this.titleTex = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "Đề xuất hấp dẫn";
		t.textColor = 0xFCF5D4;
		t.verticalCenter = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 378.89;
		t.horizontalCenter = 0;
		t.scaleX = 1.8;
		t.scaleY = 1.8;
		t.y = 62;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.dataList_i()];
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = MoreGameItemSkin;
		t.useVirtualLayout = false;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 50;
		t.requestedColumnCount = 2;
		t.verticalGap = 20;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	return MoreGameViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PaiHangItem.exml'] = window.PaiHangItemSkin = (function (_super) {
	__extends(PaiHangItemSkin, _super);
	function PaiHangItemSkin() {
		_super.call(this);
		this.skinParts = ["sum","nameTex","numTex","headSou"];
		
		this.height = 95;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.sum_i(),this.nameTex_i(),this.numTex_i(),this.headSou_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = PaiHangItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(2,2,19,19);
		t.scaleX = 0.68;
		t.scaleY = 0.8;
		t.source = "paihangtiao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.sum_i = function () {
		var t = new eui.Label();
		this.sum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 25;
		t.horizontalCenter = -220;
		t.size = 25;
		t.text = "12";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.nameTex_i = function () {
		var t = new eui.Label();
		this.nameTex = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 26;
		t.size = 25;
		t.text = "...";
		t.textAlign = "center";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 156;
		t.x = 243;
		return t;
	};
	_proto.numTex_i = function () {
		var t = new eui.Label();
		this.numTex = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 25;
		t.horizontalCenter = 201;
		t.size = 25;
		t.text = "12";
		t.textAlign = "center";
		t.textColor = 0x2bf7fe;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.headSou_i = function () {
		var t = new eui.Image();
		this.headSou = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "plant1_png";
		t.verticalCenter = 0.5;
		t.width = 60;
		t.x = 127;
		return t;
	};
	return PaiHangItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PaiHangView.exml'] = window.PaiHangViewSkin = (function (_super) {
	__extends(PaiHangViewSkin, _super);
	function PaiHangViewSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","tipTex","tips","tabCon","guanqiaView","guanqiaGro","historyview","histroyGro","viewCon"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.tips_i(),this.tabCon_i(),this.viewCon_i(),this._Image3_i(),this._Label2_i()];
	}
	var _proto = PaiHangViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x050001;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 800;
		t.horizontalCenter = 0;
		t.verticalCenter = 82;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.closeBtn_i(),this.tipTex_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 800;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 600;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.source = "hengfudingbu_png";
		t.x = 154;
		t.y = -40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 45;
		t.text = "Bảng xếp hạng";
		t.textColor = 0x2af8fe;
		t.x = 230;
		t.y = -13;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "closenew_png";
		t.x = 550;
		t.y = -28;
		return t;
	};
	_proto.tipTex_i = function () {
		var t = new eui.Label();
		this.tipTex = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "Dữ liệu bảng thành tích được xóa lúc 24:00 Chủ nhật hàng tuần";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 375;
		t.width = 357;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.text = "Tạm thời không có dữ liệu xếp hạng";
		t.textColor = 0xffffff;
		t.verticalCenter = 192;
		return t;
	};
	_proto.tabCon_i = function () {
		var t = new eui.TabBar();
		this.tabCon = t;
		t.height = 75;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = TabItemSkin;
		t.verticalCenter = -210.5;
		t.width = 500;
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.viewCon_i = function () {
		var t = new eui.ViewStack();
		this.viewCon = t;
		t.height = 592;
		t.horizontalCenter = 0;
		t.selectedIndex = 1;
		t.verticalCenter = 137;
		t.width = 500;
		t.elementsContent = [this.guanqiaGro_i(),this.histroyGro_i()];
		return t;
	};
	_proto.guanqiaGro_i = function () {
		var t = new eui.Group();
		this.guanqiaGro = t;
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.guanqiaView_i()];
		return t;
	};
	_proto.guanqiaView_i = function () {
		var t = new GuanQiaView();
		this.guanqiaView = t;
		t.height = 592;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.histroyGro_i = function () {
		var t = new eui.Group();
		this.histroyGro = t;
		t.percentHeight = 100;
		t.name = "视图";
		t.percentWidth = 100;
		t.elementsContent = [this.historyview_i()];
		return t;
	};
	_proto.historyview_i = function () {
		var t = new HistroyRankView();
		this.historyview = t;
		t.height = 592;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "jingjichang_png";
		t.verticalCenter = -481;
		t.width = 720;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 60;
		t.text = "Đấu trường";
		t.x = 270;
		t.y = 125;
		return t;
	};
	return PaiHangViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/QianDaoView.exml'] = window.QianDaoViewSkin = (function (_super) {
	__extends(QianDaoViewSkin, _super);
	function QianDaoViewSkin() {
		_super.call(this);
		this.skinParts = ["img1","sum1","time1","img2","sum2","time2","img3","sum3","time3","img4","sum4","time4","sum5","img5","time5","sum6","img6","time6","sum7","img7","time7","closeBtn","qiandaoBtn","qiandaoBtn0","checkB"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group10_i()];
	}
	var _proto = QianDaoViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.75;
		t.top = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 760;
		t.horizontalCenter = 0;
		t.verticalCenter = 29;
		t.width = 590;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group7_i(),this._Group9_i(),this.closeBtn_i(),this.qiandaoBtn_i(),this.qiandaoBtn0_i(),this.checkB_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 760;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 590;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.source = "hengfudingbu_png";
		t.x = 149;
		t.y = -40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "Quà đăng nhập";
		t.textColor = 0x2af8fe;
		t.y = -13;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "Đăng nhập hàng ngày có thể nhận được nhiều phần thưởng skin kim cương !.";
		t.textColor = 0x565656;
		t.visible = false;
		t.y = 105;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 55;
		t.y = 75;
		t.elementsContent = [this._Image3_i(),this._Label3_i(),this.img1_i(),this.sum1_i(),this.time1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "Rqd1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.text = "Ngày 01";
		t.textColor = 0xffffff;
		t.y = 11;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zuanshi_png";
		t.y = 41;
		return t;
	};
	_proto.sum1_i = function () {
		var t = new eui.Label();
		this.sum1 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "x50";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.y = 133;
		return t;
	};
	_proto.time1_i = function () {
		var t = new eui.Group();
		this.time1 = t;
		t.height = 163;
		t.visible = false;
		t.width = 138;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "duihao_png";
		t.x = 36;
		t.y = 49;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 225;
		t.y = 75;
		t.elementsContent = [this._Image5_i(),this._Label4_i(),this.img2_i(),this.sum2_i(),this.time2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "Rqd1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.text = "Ngày 02";
		t.textColor = 0xFFFFFF;
		t.y = 11;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zuanshi_png";
		t.y = 42;
		return t;
	};
	_proto.sum2_i = function () {
		var t = new eui.Label();
		this.sum2 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "x80";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.y = 133;
		return t;
	};
	_proto.time2_i = function () {
		var t = new eui.Group();
		this.time2 = t;
		t.height = 163;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 138;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "duihao_png";
		t.x = 32;
		t.y = 49.00000000000006;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 395;
		t.y = 75;
		t.elementsContent = [this._Image7_i(),this._Label5_i(),this.img3_i(),this.sum3_i(),this.time3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "Rqd1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.text = "Ngày 03";
		t.textColor = 0xFFFFFF;
		t.y = 11;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zuanshi_png";
		t.y = 40;
		return t;
	};
	_proto.sum3_i = function () {
		var t = new eui.Label();
		this.sum3 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "x120";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.y = 133;
		return t;
	};
	_proto.time3_i = function () {
		var t = new eui.Group();
		this.time3 = t;
		t.height = 163;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 138;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "duihao_png";
		t.x = 28;
		t.y = 49.00000000000006;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 55;
		t.y = 255;
		t.elementsContent = [this._Image9_i(),this._Label6_i(),this.img4_i(),this.sum4_i(),this.time4_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "Rqd1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.text = "Ngày 04";
		t.textColor = 0xFFFFFF;
		t.y = 11;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zuanshi_png";
		t.y = 40;
		return t;
	};
	_proto.sum4_i = function () {
		var t = new eui.Label();
		this.sum4 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "x160";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.y = 132;
		return t;
	};
	_proto.time4_i = function () {
		var t = new eui.Group();
		this.time4 = t;
		t.height = 163;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 138;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "duihao_png";
		t.x = 36;
		t.y = 49;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 225;
		t.y = 255;
		t.elementsContent = [this._Image11_i(),this._Label7_i(),this.sum5_i(),this.img5_i(),this.time5_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "Rqd1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.text = "Ngày 05";
		t.textColor = 0xFFFFFF;
		t.y = 11;
		return t;
	};
	_proto.sum5_i = function () {
		var t = new eui.Label();
		this.sum5 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "x200";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.y = 133;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zuanshi_png";
		t.y = 43;
		return t;
	};
	_proto.time5_i = function () {
		var t = new eui.Group();
		this.time5 = t;
		t.height = 163;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 138;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "duihao_png";
		t.x = 36;
		t.y = 49;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 395;
		t.y = 255;
		t.elementsContent = [this._Image13_i(),this._Label8_i(),this.sum6_i(),this._Group6_i(),this.time6_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "Rqd1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.text = "Ngày 06";
		t.textColor = 0xFFFFFF;
		t.y = 11;
		return t;
	};
	_proto.sum6_i = function () {
		var t = new eui.Label();
		this.sum6 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 2;
		t.size = 25;
		t.text = "x240";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.y = 133;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.y = 42;
		t.elementsContent = [this.img6_i()];
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.horizontalCenter = 0;
		t.source = "zuanshi_png";
		t.y = 0;
		return t;
	};
	_proto.time6_i = function () {
		var t = new eui.Group();
		this.time6 = t;
		t.height = 163;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 138;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "duihao_png";
		t.x = 36;
		t.y = 49;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 225;
		t.y = 435;
		t.elementsContent = [this._Image15_i(),this._Label9_i(),this.sum7_i(),this._Group8_i(),this.time7_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "Rqd1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.text = "Ngày 07";
		t.textColor = 0xFFFFFF;
		t.y = 11;
		return t;
	};
	_proto.sum7_i = function () {
		var t = new eui.Label();
		this.sum7 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "x300";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.y = 133;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.y = 42;
		t.elementsContent = [this.img7_i()];
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.horizontalCenter = 0;
		t.source = "zuanshi_png";
		t.y = 0;
		return t;
	};
	_proto.time7_i = function () {
		var t = new eui.Group();
		this.time7 = t;
		t.height = 163;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 138;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "duihao_png";
		t.x = 36;
		t.y = 49;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "closenew_png";
		t.x = 540;
		t.y = -26;
		return t;
	};
	_proto.qiandaoBtn_i = function () {
		var t = new eui.Group();
		this.qiandaoBtn = t;
		t.x = 196;
		t.y = 698;
		t.elementsContent = [this._Image17_i(),this._Label10_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "btnyellow_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "Nhận";
		t.textColor = 0xf9f7f7;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.qiandaoBtn0_i = function () {
		var t = new eui.Group();
		this.qiandaoBtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.67;
		t.width = 262.34;
		t.x = 175.32;
		t.y = 633.32;
		t.elementsContent = [this._Image18_i(),this._Label11_i(),this._Image19_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "tuji2_json.btnyellowad_png";
		t.width = 241;
		t.x = 9.33;
		t.y = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 20.830000000000013;
		t.size = 35;
		t.text = "Nhận thêm";
		t.textColor = 0xF9F7F7;
		t.touchEnabled = false;
		t.verticalCenter = 0.16499999999999915;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "tuji1_json.shipin_png";
		t.width = 41.66;
		t.x = 27.99;
		t.y = 13.99;
		return t;
	};
	_proto.checkB_i = function () {
		var t = new eui.CheckBox();
		this.checkB = t;
		t.horizontalCenter = 0;
		t.label = "双倍奖励";
		t.selected = true;
		t.visible = false;
		t.y = 711;
		return t;
	};
	return QianDaoViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/RoleInformationView.exml'] = window.RoleInformationViewSkin = (function (_super) {
	__extends(RoleInformationViewSkin, _super);
	function RoleInformationViewSkin() {
		_super.call(this);
		this.skinParts = ["touxiang","zhiwu","rolename","music"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group6_i()];
	}
	var _proto = RoleInformationViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 1;
		t.fillAlpha = 0.1;
		t.left = 0;
		t.right = 0;
		t.top = -1;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 1280;
		t.width = 360;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group4_i(),this._Group5_i(),this._Image8_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(83,296,4,5);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tanchuhengfu_png";
		t.top = 0;
		t.width = 360;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 55;
		t.x = 115;
		t.y = 55;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.touxiang_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "touxiang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.source = "plant1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.touxiang_i = function () {
		var t = new eui.Image();
		this.touxiang = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "touxiangbg_png";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 800;
		t.left = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 260;
		t.width = 270;
		t.x = 2;
		t.y = 260;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 3;
		t.y = 135;
		t.elementsContent = [this.zhiwu_i(),this._Label1_i()];
		return t;
	};
	_proto.zhiwu_i = function () {
		var t = new eui.Label();
		this.zhiwu = t;
		t.anchorOffsetX = 0;
		t.size = 28;
		t.text = "12 loại Mecha ";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.width = 180;
		t.x = 80;
		t.y = 1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "Thợ máy";
		t.textColor = 0x2af8fe;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 3;
		t.y = 35;
		t.elementsContent = [this.rolename_i(),this._Label2_i()];
		return t;
	};
	_proto.rolename_i = function () {
		var t = new eui.Label();
		this.rolename = t;
		t.anchorOffsetX = 0;
		t.size = 28;
		t.text = "Happy Little Pea";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.width = 180;
		t.x = 80;
		t.y = 1;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "Nickname";
		t.textColor = 0x2af8fe;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "qiandao_png";
		t.x = 98;
		t.y = 189;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zuanpan_png";
		t.x = 91;
		t.y = 333;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "shezhi_png";
		t.visible = false;
		t.x = 96;
		t.y = 494;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "yinhang_png";
		t.x = 101;
		t.y = 489;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 284;
		t.x = 115;
		t.y = 915;
		t.elementsContent = [this.music_i()];
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.ToggleSwitch();
		this.music = t;
		t.label = "ToggleButton";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 286;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "tanchuhengfu1_png";
		t.top = 112;
		t.x = 286;
		t.y = 112;
		return t;
	};
	return RoleInformationViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShanChu.exml'] = window.ShanChuSkin = (function (_super) {
	__extends(ShanChuSkin, _super);
	function ShanChuSkin() {
		_super.call(this);
		this.skinParts = ["jijiaImg","goldtext","querenbtn","quxiaobtn","closeBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = ShanChuSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.fillColor = 0x050001;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 15;
		t.verticalCenter = 0.5;
		t.width = 460;
		t.elementsContent = [this._Image1_i(),this._Component1_i(),this.jijiaImg_i(),this._Label1_i(),this.goldtext_i(),this._Label2_i(),this._Image2_i(),this.querenbtn_i(),this.quxiaobtn_i(),this._Label3_i(),this._Label4_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "alertbg_png";
		t.width = 450;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto._Component1_i = function () {
		var t = new eui.Component();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "JiJiaViewSkin";
		t.visible = false;
		t.x = 23.18;
		t.y = 176.36;
		return t;
	};
	_proto.jijiaImg_i = function () {
		var t = new eui.Image();
		this.jijiaImg = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "fplant1_png";
		t.x = 23.18;
		t.y = 176.36;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "=";
		t.textColor = 0x2af8fe;
		t.x = 170;
		t.y = 234.36;
		return t;
	};
	_proto.goldtext_i = function () {
		var t = new eui.Label();
		this.goldtext = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "1234567";
		t.textColor = 0x2AF8FE;
		t.x = 268.18;
		t.y = 239.36;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "Tái chế và nhận xu?";
		t.textColor = 0x2AF8FE;
		t.x = 30.22;
		t.y = 67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "jinbi_png";
		t.x = 218.18;
		t.y = 234.36;
		return t;
	};
	_proto.querenbtn_i = function () {
		var t = new eui.Image();
		this.querenbtn = t;
		t.height = 55;
		t.scale9Grid = new egret.Rectangle(107,33,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btnyellow_png";
		t.width = 170;
		t.x = 44.22;
		t.y = 390.92;
		return t;
	};
	_proto.quxiaobtn_i = function () {
		var t = new eui.Image();
		this.quxiaobtn = t;
		t.height = 55;
		t.scale9Grid = new egret.Rectangle(106,32,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btnyellow_png";
		t.width = 170;
		t.x = 247.01;
		t.y = 390.92;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Ok";
		t.touchEnabled = false;
		t.x = 90.82;
		t.y = 402.67;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Hủy";
		t.touchEnabled = false;
		t.x = 298.34;
		t.y = 402.67;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "closenew_png";
		t.x = 416.46;
		t.y = -23.8;
		return t;
	};
	return ShanChuSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShangDianYouHuiView.exml'] = window.ShangDianYouHuiViewSkin = (function (_super) {
	__extends(ShangDianYouHuiViewSkin, _super);
	function ShangDianYouHuiViewSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ShangDianYouHuiViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 250;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 460;
		t.elementsContent = [this._Label1_i(),this._Image1_i(),this._Image2_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "100.0%";
		t.x = 309.5;
		t.y = 217;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shengya7_png";
		t.x = 62;
		t.y = 88;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shengya8_png";
		t.x = 296;
		t.y = 91;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Tăng sức mạnh tấn công của tất cả các máy";
		t.x = 19;
		t.y = 192;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "100.0%";
		t.x = 80;
		t.y = 217;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Tất cả các ưu đãi về giá thợ";
		t.x = 254;
		t.y = 192;
		return t;
	};
	return ShangDianYouHuiViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShengYaView.exml'] = window.ShengYaViewSkin = (function (_super) {
	__extends(ShengYaViewSkin, _super);
	function ShengYaViewSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","maxFort","price","attack","equipGro","attackUp","priceUp","bottomGro","levelUp","goldtext","diamondtext","zhanlibg","power","expImg","addDiamond","levelImg","levelText","danImg","levelbtn","gro1","pageNode","guideA","guideB","guideNode"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.pageNode_i(),this.guideNode_i()];
	}
	var _proto = ShengYaViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "nodebg_png";
		t.top = 0;
		return t;
	};
	_proto.pageNode_i = function () {
		var t = new eui.Group();
		this.pageNode = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 841.58;
		t.horizontalCenter = 10;
		t.verticalCenter = 14;
		t.width = 520;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.closeBtn_i(),this._Label1_i(),this._Group1_i(),this.bottomGro_i(),this.gro1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "alertbg_png";
		t.x = 0;
		t.y = 13.52;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 1;
		t.source = "hengfudingbu_png";
		t.x = 104;
		t.y = -41.9;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "closenew_png";
		t.x = 455.96;
		t.y = -9.01;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 50;
		t.text = "Thông tin";
		t.textColor = 0x2af8fe;
		t.x = 200;
		t.y = -17.88;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 260;
		t.horizontalCenter = 0;
		t.width = 470;
		t.y = 262.52;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label2_i(),this._Image6_i(),this.maxFort_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shengya1_png";
		t.x = 5;
		t.y = 31;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shengya2_png";
		t.x = 101;
		t.y = -10;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Vũ khí mạnh nhất";
		t.x = 130;
		t.y = 13;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shengya5_png";
		t.x = 112;
		t.y = 134;
		return t;
	};
	_proto.maxFort_i = function () {
		var t = new eui.Image();
		this.maxFort = t;
		t.horizontalCenter = 1;
		t.scaleX = 0.7;
		t.scaleY = 0.65;
		t.source = "fplant1_png";
		t.verticalCenter = 24.5;
		return t;
	};
	_proto.bottomGro_i = function () {
		var t = new eui.Group();
		this.bottomGro = t;
		t.height = 250;
		t.width = 460;
		t.x = 21;
		t.y = 534.52;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label3_i(),this.equipGro_i(),this.attackUp_i(),this.priceUp_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shengya1_png";
		t.x = -1;
		t.y = 26;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shengya2_png";
		t.x = 95;
		t.y = -10;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Trang bị";
		t.x = 160;
		t.y = 14;
		return t;
	};
	_proto.equipGro_i = function () {
		var t = new eui.Group();
		this.equipGro = t;
		t.height = 250;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 460;
		t.elementsContent = [this.price_i(),this._Image9_i(),this._Image10_i(),this._Label4_i(),this.attack_i(),this._Label5_i()];
		return t;
	};
	_proto.price_i = function () {
		var t = new eui.Label();
		this.price = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 117;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "100.0%";
		t.y = 163;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shengya7_png";
		t.x = 68;
		t.y = 66;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shengya8_png";
		t.x = 318;
		t.y = 66;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Tăng sức mạnh tấn công của tất cả các máy";
		t.x = 19;
		t.y = 131;
		return t;
	};
	_proto.attack_i = function () {
		var t = new eui.Label();
		this.attack = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = -127;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "100.0%";
		t.y = 163;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Tất cả các ưu đãi về giá thợ";
		t.x = 268;
		t.y = 131;
		return t;
	};
	_proto.attackUp_i = function () {
		var t = new eui.Group();
		this.attackUp = t;
		t.height = 45;
		t.width = 155;
		t.x = 25;
		t.y = 191;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Label6_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shipin_png";
		t.x = 14;
		t.y = 11;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 21;
		t.text = "N.Cấp Free";
		t.textColor = 0xf0dcb1;
		t.x = 53;
		t.y = 14;
		return t;
	};
	_proto.priceUp_i = function () {
		var t = new eui.Group();
		this.priceUp = t;
		t.height = 45;
		t.width = 155;
		t.x = 276;
		t.y = 191;
		t.elementsContent = [this._Image13_i(),this._Label7_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 21;
		t.text = "N.Cấp Free";
		t.textColor = 0xf0dcb1;
		t.x = 56;
		t.y = 13;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shipin_png";
		t.x = 16;
		t.y = 11;
		return t;
	};
	_proto.gro1_i = function () {
		var t = new eui.Group();
		this.gro1 = t;
		t.height = 210;
		t.horizontalCenter = 0;
		t.top = 47;
		t.width = 460;
		t.elementsContent = [this._Label8_i(),this.levelUp_i(),this.goldtext_i(),this.diamondtext_i(),this.zhanlibg_i(),this._Label10_i(),this.power_i(),this._Group2_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this.addDiamond_i(),this.levelbtn_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "EXP";
		t.x = 155.83;
		t.y = 28.69999999999999;
		return t;
	};
	_proto.levelUp_i = function () {
		var t = new eui.Group();
		this.levelUp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.width = 174;
		t.x = 263;
		t.y = 144;
		t.elementsContent = [this._Image15_i(),this._Label9_i(),this._Image16_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btnyellow_png";
		t.x = 1;
		t.y = 2;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "Tăng hạng";
		t.x = 37;
		t.y = 14.5;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "moregamesbtn_png";
		t.x = 161;
		t.y = -6;
		return t;
	};
	_proto.goldtext_i = function () {
		var t = new eui.Label();
		this.goldtext = t;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "100000";
		t.x = 189.82;
		t.y = 94.26999999999998;
		return t;
	};
	_proto.diamondtext_i = function () {
		var t = new eui.Label();
		this.diamondtext = t;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "100000";
		t.x = 327.5;
		t.y = 94.26999999999998;
		return t;
	};
	_proto.zhanlibg_i = function () {
		var t = new eui.Image();
		this.zhanlibg = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "shengya3_png";
		t.x = 21;
		t.y = 148;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Lực:";
		t.textColor = 0xFFFC99;
		t.x = 44;
		t.y = 160;
		return t;
	};
	_proto.power_i = function () {
		var t = new eui.Label();
		this.power = t;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "9999999";
		t.textColor = 0xFFFC99;
		t.x = 102;
		t.y = 160;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 299;
		t.x = 149.01;
		t.y = 55.329999999999984;
		t.elementsContent = [this._Image17_i(),this.expImg_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0.65;
		t.scaleY = 0.7;
		t.source = "shengyajindu2_png";
		t.top = 0;
		return t;
	};
	_proto.expImg_i = function () {
		var t = new eui.Image();
		this.expImg = t;
		t.bottom = 0;
		t.scaleY = 0.7;
		t.source = "shengyajindu1_png";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "jinbi_png";
		t.x = 153;
		t.y = 86;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "zuanshi_png";
		t.x = 285.35;
		t.y = 81;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "jiahao_png";
		t.x = 405.01;
		t.y = 89.34;
		return t;
	};
	_proto.addDiamond_i = function () {
		var t = new eui.Image();
		this.addDiamond = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "nodebg_png";
		t.width = 137;
		t.x = 300;
		t.y = 91;
		return t;
	};
	_proto.levelbtn_i = function () {
		var t = new eui.Group();
		this.levelbtn = t;
		t.height = 120;
		t.width = 120;
		t.x = 10.33;
		t.y = 10.3;
		t.elementsContent = [this._Image21_i(),this.levelImg_i(),this._Image22_i(),this.levelText_i(),this.danImg_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shangya4_png";
		t.x = 12.999999999999984;
		t.y = 7.009999999999984;
		return t;
	};
	_proto.levelImg_i = function () {
		var t = new eui.Image();
		this.levelImg = t;
		t.horizontalCenter = 1;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "duanwei1_png";
		t.y = 0.33;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4000000000000001;
		t.scaleY = 0.5;
		t.source = "shengya2_png";
		t.x = 7.499999999999984;
		t.y = 77.41000000000003;
		return t;
	};
	_proto.levelText_i = function () {
		var t = new eui.Label();
		this.levelText = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Cấp bậc 4";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 86.91000000000003;
		return t;
	};
	_proto.danImg_i = function () {
		var t = new eui.Image();
		this.danImg = t;
		t.anchorOffsetX = 120.5;
		t.anchorOffsetY = 148.5;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "duanwei1_png";
		t.visible = false;
		t.x = 220.85;
		t.y = 311.92;
		return t;
	};
	_proto.guideNode_i = function () {
		var t = new eui.Group();
		this.guideNode = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.guideA_i(),this.guideB_i()];
		return t;
	};
	_proto.guideA_i = function () {
		var t = new eui.Group();
		this.guideA = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.touchEnabled = false;
		t.width = 153.03;
		t.x = 156;
		t.y = 960;
		return t;
	};
	_proto.guideB_i = function () {
		var t = new eui.Group();
		this.guideB = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.touchEnabled = false;
		t.width = 153.03;
		t.x = 409;
		t.y = 960;
		return t;
	};
	return ShengYaViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShopItemView.exml'] = window.ShopItemViewSkin = (function (_super) {
	__extends(ShopItemViewSkin, _super);
	function ShopItemViewSkin() {
		_super.call(this);
		this.skinParts = ["botanyNum","zhiWuTu","unlocktext","zuanshiImage","jinbiImage","shopSum","shopBtn","guangGaoBtn","speedLoadImg","attackLoadImg","mingzi"];
		
		this.height = 155;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 520;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this.shopBtn_i(),this.guangGaoBtn_i(),this._Group4_i(),this._Group5_i(),this.mingzi_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ShopItemViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 155;
		t.horizontalCenter = 70;
		t.scale9Grid = new egret.Rectangle(369,64,5,5);
		t.source = "paihangtiao_png";
		t.verticalCenter = 0;
		t.width = 380;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -205.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "paihangtiao1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 42.5;
		t.x = 174;
		t.elementsContent = [this.botanyNum_i()];
		return t;
	};
	_proto.botanyNum_i = function () {
		var t = new eui.Label();
		this.botanyNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "Lv12";
		t.textColor = 0xe6e8e8;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109;
		t.verticalCenter = 11;
		t.width = 105;
		t.x = 1;
		t.elementsContent = [this.zhiWuTu_i(),this.unlocktext_i()];
		return t;
	};
	_proto.zhiWuTu_i = function () {
		var t = new eui.Image();
		this.zhiWuTu = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "fplant1_png";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto.unlocktext_i = function () {
		var t = new eui.Label();
		this.unlocktext = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "Mở khóa";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.shopBtn_i = function () {
		var t = new eui.Group();
		this.shopBtn = t;
		t.horizontalCenter = 114.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 40.5;
		t.elementsContent = [this._Image3_i(),this._Group3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "btnyellow_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.y = 6.5;
		t.elementsContent = [this.zuanshiImage_i(),this.jinbiImage_i(),this.shopSum_i()];
		return t;
	};
	_proto.zuanshiImage_i = function () {
		var t = new eui.Image();
		this.zuanshiImage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "zuanshi_png";
		t.visible = false;
		t.x = -5.25;
		t.y = -1.25;
		return t;
	};
	_proto.jinbiImage_i = function () {
		var t = new eui.Image();
		this.jinbiImage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "jinbi_png";
		t.visible = false;
		t.width = 40;
		t.x = -4.98;
		t.y = 4.98;
		return t;
	};
	_proto.shopSum_i = function () {
		var t = new eui.Label();
		this.shopSum = t;
		t.fontFamily = "Arial";
		t.size = 28;
		t.text = "1103.54 nghìn tỷ ";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.x = 42;
		return t;
	};
	_proto.guangGaoBtn_i = function () {
		var t = new eui.Group();
		this.guangGaoBtn = t;
		t.height = 50;
		t.horizontalCenter = 115;
		t.verticalCenter = 41.5;
		t.visible = false;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "btnyellowad_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shipin_png";
		t.verticalCenter = 1;
		t.width = 50;
		t.x = 102;
		t.y = 24;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "Free";
		t.x = 43;
		t.y = 13;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = -47.5;
		t.width = 350;
		t.x = 161;
		t.elementsContent = [this._Label2_i(),this._Image6_i(),this.speedLoadImg_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "Tốc độ";
		t.textColor = 0xe6e8e8;
		t.x = 3;
		t.y = 3;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "gongjili_png";
		t.x = 97;
		t.y = 7;
		return t;
	};
	_proto.speedLoadImg_i = function () {
		var t = new eui.Image();
		this.speedLoadImg = t;
		t.source = "gongjili1_png";
		t.x = 97.66;
		t.y = 6.92;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = -6.5;
		t.width = 350;
		t.x = 161;
		t.elementsContent = [this._Label3_i(),this._Image7_i(),this.attackLoadImg_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "T.Công";
		t.textColor = 0xe6e8e8;
		t.x = 3;
		t.y = 3;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "gongjili_png";
		t.x = 97;
		t.y = 7;
		return t;
	};
	_proto.attackLoadImg_i = function () {
		var t = new eui.Image();
		this.attackLoadImg = t;
		t.source = "gongjili1_png";
		t.x = 97.67;
		t.y = 7.26;
		return t;
	};
	_proto.mingzi_i = function () {
		var t = new eui.Label();
		this.mingzi = t;
		t.horizontalCenter = -202.5;
		t.size = 20;
		t.text = "E1";
		t.verticalCenter = -60.5;
		return t;
	};
	return ShopItemViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShopView.exml'] = window.ShopViewSkin = (function (_super) {
	__extends(ShopViewSkin, _super);
	function ShopViewSkin() {
		_super.call(this);
		this.skinParts = ["zuanshi","diamondSum0","diamond0","jinbi","euiGold0","goldSum0","gold0","topGro","dataList","scroller","closeBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.topGro_i(),this._Group2_i()];
	}
	var _proto = ShopViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.fillColor = 0x050001;
		t.height = 1280;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 720;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "nodebg_png";
		t.top = 0;
		return t;
	};
	_proto.topGro_i = function () {
		var t = new eui.Group();
		this.topGro = t;
		t.horizontalCenter = -9.5;
		t.top = 20;
		t.elementsContent = [this.diamond0_i(),this.gold0_i()];
		return t;
	};
	_proto.diamond0_i = function () {
		var t = new eui.Group();
		this.diamond0 = t;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.horizontalCenter = -109.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.zuanshi_i(),this._Image3_i(),this.diamondSum0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(22,20,17,5);
		t.source = "coinbg_png";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zuanshi_i = function () {
		var t = new eui.Image();
		this.zuanshi = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "jiahao_png";
		t.x = 109;
		t.y = 5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zuanshi_png";
		t.width = 84;
		t.x = 8;
		t.y = 2;
		return t;
	};
	_proto.diamondSum0_i = function () {
		var t = new eui.Label();
		this.diamondSum0 = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "100";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gold0_i = function () {
		var t = new eui.Group();
		this.gold0 = t;
		t.horizontalCenter = 87.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image4_i(),this.jinbi_i(),this.euiGold0_i(),this.goldSum0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(22,20,17,5);
		t.source = "coinbg_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jinbi_i = function () {
		var t = new eui.Image();
		this.jinbi = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "jiahao_png";
		t.x = 159;
		t.y = 5;
		return t;
	};
	_proto.euiGold0_i = function () {
		var t = new eui.Image();
		this.euiGold0 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "jinbi_png";
		t.x = 8;
		t.y = 4;
		return t;
	};
	_proto.goldSum0_i = function () {
		var t = new eui.Label();
		this.goldSum0 = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "100";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 2.5;
		t.verticalCenter = -22;
		t.width = 625;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label1_i(),this.scroller_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 830;
		t.scale9Grid = new egret.Rectangle(250,352,12,10);
		t.source = "alertbg_png";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(200,57,5,2);
		t.scaleX = 0.7;
		t.source = "hengfudingbu_png";
		t.x = 154;
		t.y = -29;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 45;
		t.text = "Cửa hàng";
		t.textColor = 0x2af8fe;
		t.x = 200;
		t.y = -5;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.width = 540;
		t.x = 30;
		t.y = 63;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 540;
		t.x = -13.64;
		t.elementsContent = [this.dataList_i()];
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = ShopItemViewSkin;
		t.width = 540;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "closenew_png";
		t.x = 549;
		t.y = -20.5;
		return t;
	};
	return ShopViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShouHuoView.exml'] = window.ShouHuoViewSkin = (function (_super) {
	__extends(ShouHuoViewSkin, _super);
	function ShouHuoViewSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","shouhuo","quedingBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group3_i()];
	}
	var _proto = ShouHuoViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 29;
		t.width = 430;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.closeBtn_i(),this._Label4_i(),this._Image3_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 430;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.source = "hengfudingbu_png";
		t.x = 95.99;
		t.y = -37;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Mecha Fuel";
		t.textColor = 0x2af8fe;
		t.y = -6;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "Thời gian trưởng thành 5 giờ";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.visible = false;
		t.y = 303;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "(Hoa hướng dương rất dễ héo và phải được hái trong vòng 360 phút sau khi chín, nếu không sẽ bị héo và thu hoạch giảm một nửa)";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 350;
		t.y = 356;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "closenew_png";
		t.x = 391;
		t.y = -19;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 8;
		t.size = 32;
		t.text = "Thợ máy thu hoạch tiền vàng:";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.y = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 8;
		t.source = "xiangrikui2_png";
		t.y = 176.76;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 8.5;
		t.y = 330.23;
		t.elementsContent = [this.shouhuo_i(),this._Image4_i()];
		return t;
	};
	_proto.shouhuo_i = function () {
		var t = new eui.Label();
		this.shouhuo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 60;
		t.size = 36;
		t.text = "17.89 nghìn tỷ ";
		t.textAlign = "center";
		t.textColor = 0x2af8fe;
		t.verticalAlign = "middle";
		t.x = 86;
		t.y = 19;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "jinbi_png";
		t.x = 27;
		t.y = 18;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 8;
		t.y = 453;
		t.elementsContent = [this.quedingBtn_i(),this._Label5_i()];
		return t;
	};
	_proto.quedingBtn_i = function () {
		var t = new eui.Image();
		this.quedingBtn = t;
		t.height = 60;
		t.source = "btnyellow_png";
		t.width = 220;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "Đồng ý";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return ShouHuoViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TabItem.exml'] = window.TabItemSkin = (function (_super) {
	__extends(TabItemSkin, _super);
	function TabItemSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 75;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 250;
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
	}
	var _proto = TabItemSkin.prototype;

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
		t.text = "aaa";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return TabItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/TiaoZahnView.exml'] = window.TiaoZahnViewSkin = (function (_super) {
	__extends(TiaoZahnViewSkin, _super);
	function TiaoZahnViewSkin() {
		_super.call(this);
		this.skinParts = ["dataList0","scroller","dataList1","scroller0","dataList2","scroller1","dataList3","scroller2","dataList4","scroller3","dataList5","scroller4","dataList6","scroller5"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Group1_i(),this.scroller_i(),this.scroller0_i(),this.scroller1_i(),this.scroller2_i(),this.scroller3_i(),this.scroller4_i(),this.scroller5_i()];
	}
	var _proto = TiaoZahnViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "map1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 2;
		t.scale9Grid = new egret.Rectangle(90,12,1,1);
		t.source = "jixian1_png";
		t.verticalCenter = -498;
		t.width = 320;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 2;
		t.size = 60;
		t.text = "Tiền thưởng tấn công";
		t.textColor = 0x2af8fe;
		t.verticalCenter = -556;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "1/42";
		t.textColor = 0x2AF8FE;
		t.verticalCenter = -448;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.horizontalCenter = -99;
		t.verticalCenter = -389;
		t.width = 200;
		t.elementsContent = [this._Image3_i(),this._Label3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "zuanshi_png";
		t.x = -7.64;
		t.y = -3.32;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "123456789";
		t.textColor = 0x2AF8FE;
		t.x = 32.99;
		t.y = 11.04;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = -2;
		t.verticalCenter = -219;
		t.width = 500;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 1.52;
		t.y = 14;
		t.elementsContent = [this.dataList0_i()];
		return t;
	};
	_proto.dataList0_i = function () {
		var t = new eui.List();
		this.dataList0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 218.92;
		t.itemRendererSkinName = TiaoZhaoJiJiaViewSkin;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 1000.82;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 40;
		t.paddingLeft = 20;
		t.verticalGap = 0;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.scroller0_i = function () {
		var t = new eui.Scroller();
		this.scroller0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115.67;
		t.horizontalCenter = 2.5;
		t.verticalCenter = -103;
		t.width = 526.67;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116;
		t.x = 1.52;
		t.y = 6.67;
		t.elementsContent = [this.dataList1_i()];
		return t;
	};
	_proto.dataList1_i = function () {
		var t = new eui.List();
		this.dataList1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 223.87;
		t.itemRendererSkinName = TiaoZhaoJiJiaViewSkin;
		t.scaleX = 0.52;
		t.scaleY = 0.52;
		t.width = 1013.42;
		t.x = -0.64;
		t.y = 0;
		t.layout = this._TileLayout2_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 5;
		t.paddingLeft = 15;
		t.verticalGap = 0;
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object11_i(),this._Object12_i(),this._Object13_i(),this._Object14_i(),this._Object15_i(),this._Object16_i()];
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.null = "null";
		return t;
	};
	_proto.scroller1_i = function () {
		var t = new eui.Scroller();
		this.scroller1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.horizontalCenter = 1;
		t.verticalCenter = 16.5;
		t.width = 560;
		t.viewport = this._Group4_i();
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 1.52;
		t.y = -6;
		t.elementsContent = [this.dataList2_i()];
		return t;
	};
	_proto.dataList2_i = function () {
		var t = new eui.List();
		this.dataList2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 221.94;
		t.itemRendererSkinName = TiaoZhaoJiJiaViewSkin;
		t.scaleX = 0.52;
		t.scaleY = 0.52;
		t.width = 1076.88;
		t.x = -0.64;
		t.y = 0;
		t.layout = this._TileLayout3_i();
		t.dataProvider = this._ArrayCollection3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 22;
		t.paddingLeft = 5;
		t.verticalGap = 0;
		return t;
	};
	_proto._ArrayCollection3_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object17_i(),this._Object18_i(),this._Object19_i(),this._Object20_i(),this._Object21_i(),this._Object22_i()];
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.scroller2_i = function () {
		var t = new eui.Scroller();
		this.scroller2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.horizontalCenter = 3;
		t.verticalCenter = 140;
		t.width = 606;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 1.52;
		t.y = -32;
		t.elementsContent = [this.dataList3_i()];
		return t;
	};
	_proto.dataList3_i = function () {
		var t = new eui.List();
		this.dataList3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 221.63;
		t.itemRendererSkinName = TiaoZhaoJiJiaViewSkin;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.width = 1103.06;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout4_i();
		t.dataProvider = this._ArrayCollection4_i();
		return t;
	};
	_proto._TileLayout4_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 20;
		t.paddingLeft = 15;
		t.verticalGap = 0;
		return t;
	};
	_proto._ArrayCollection4_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object23_i(),this._Object24_i(),this._Object25_i(),this._Object26_i(),this._Object27_i(),this._Object28_i(),this._Object29_i()];
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.scroller3_i = function () {
		var t = new eui.Scroller();
		this.scroller3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127.33;
		t.horizontalCenter = 2;
		t.verticalCenter = 269.5;
		t.width = 644;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 1.52;
		t.y = -1;
		t.elementsContent = [this.dataList4_i()];
		return t;
	};
	_proto.dataList4_i = function () {
		var t = new eui.List();
		this.dataList4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 218.25;
		t.itemRendererSkinName = TiaoZhaoJiJiaViewSkin;
		t.scaleX = 0.58;
		t.scaleY = 0.58;
		t.width = 1111;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout5_i();
		t.dataProvider = this._ArrayCollection5_i();
		return t;
	};
	_proto._TileLayout5_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 22;
		t.paddingLeft = 15;
		t.verticalGap = 0;
		return t;
	};
	_proto._ArrayCollection5_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object30_i(),this._Object31_i(),this._Object32_i(),this._Object33_i(),this._Object34_i(),this._Object35_i(),this._Object36_i()];
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object32_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object33_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object34_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object35_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object36_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.scroller4_i = function () {
		var t = new eui.Scroller();
		this.scroller4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 137;
		t.horizontalCenter = 2;
		t.verticalCenter = 407.5;
		t.width = 680;
		t.viewport = this._Group7_i();
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 1.52;
		t.y = -0.67;
		t.elementsContent = [this.dataList5_i()];
		return t;
	};
	_proto.dataList5_i = function () {
		var t = new eui.List();
		this.dataList5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 221.7;
		t.itemRendererSkinName = TiaoZhaoJiJiaViewSkin;
		t.scaleX = 0.62;
		t.scaleY = 0.62;
		t.width = 1095.5;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout6_i();
		t.dataProvider = this._ArrayCollection6_i();
		return t;
	};
	_proto._TileLayout6_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 22;
		t.paddingLeft = 15;
		t.verticalGap = 0;
		return t;
	};
	_proto._ArrayCollection6_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object37_i(),this._Object38_i(),this._Object39_i(),this._Object40_i(),this._Object41_i(),this._Object42_i()];
		return t;
	};
	_proto._Object37_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object38_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object39_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object40_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object41_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object42_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.scroller5_i = function () {
		var t = new eui.Scroller();
		this.scroller5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.horizontalCenter = 0;
		t.verticalCenter = 551.5;
		t.width = 720;
		t.viewport = this._Group8_i();
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 1.52;
		t.y = -0.67;
		t.elementsContent = [this.dataList6_i()];
		return t;
	};
	_proto.dataList6_i = function () {
		var t = new eui.List();
		this.dataList6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 224.93;
		t.itemRendererSkinName = TiaoZhaoJiJiaViewSkin;
		t.scaleX = 0.62;
		t.scaleY = 0.62;
		t.width = 1161.09;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout7_i();
		t.dataProvider = this._ArrayCollection7_i();
		return t;
	};
	_proto._TileLayout7_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 5;
		t.paddingLeft = 4;
		t.verticalGap = 0;
		return t;
	};
	_proto._ArrayCollection7_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object43_i(),this._Object44_i(),this._Object45_i(),this._Object46_i(),this._Object47_i(),this._Object48_i(),this._Object49_i()];
		return t;
	};
	_proto._Object43_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object44_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object45_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object46_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object47_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object48_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object49_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	return TiaoZahnViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TiaoZhaoJiJiaView.exml'] = window.TiaoZhaoJiJiaViewSkin = (function (_super) {
	__extends(TiaoZhaoJiJiaViewSkin, _super);
	function TiaoZhaoJiJiaViewSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TiaoZhaoJiJiaViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 220;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 160;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.scale9Grid = new egret.Rectangle(37,36,15,18);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jixian2_png";
		t.width = 150;
		t.x = 5;
		t.y = 45;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "Chưa hoàn thành";
		t.textColor = 0x2af8fe;
		t.x = 20;
		t.y = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "fplant1_png";
		t.visible = false;
		t.x = 11;
		t.y = 22;
		return t;
	};
	return TiaoZhaoJiJiaViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._Image4_i();
		
		this.states = [
			new eui.State ("down",
				[
					new eui.AddItems("_Image4","",1,"")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image3","",1,"")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("","width",102),
					new eui.SetProperty("","height",138)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "kaiguan2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "kaiguan2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "kaiguan1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "kaiguan1_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TuJianItemView.exml'] = window.TuJianItemViewSkin = (function (_super) {
	__extends(TuJianItemViewSkin, _super);
	function TuJianItemViewSkin() {
		_super.call(this);
		this.skinParts = ["jibie","mingzi","jiangshi","changjing","jieshao"];
		
		this.height = 120;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.jibie_i(),this.mingzi_i(),this._Group1_i(),this.changjing_i(),this._Image1_i(),this.jieshao_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = TuJianItemViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 3;
		t.ellipseHeight = 25;
		t.ellipseWidth = 25;
		t.fillColor = 0xFFFFFF;
		t.left = 0;
		t.right = 0;
		t.top = 3;
		return t;
	};
	_proto.jibie_i = function () {
		var t = new eui.Label();
		this.jibie = t;
		t.size = 20;
		t.text = "Thường";
		t.textColor = 0xE0884C;
		t.x = 392;
		t.y = 16.5;
		return t;
	};
	_proto.mingzi_i = function () {
		var t = new eui.Label();
		this.mingzi = t;
		t.size = 20;
		t.text = "Thây ma thương mại";
		t.textColor = 0x3086DB;
		t.x = 236;
		t.y = 16.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109;
		t.verticalCenter = 0;
		t.width = 111;
		t.x = 114;
		t.elementsContent = [this.jiangshi_i()];
		return t;
	};
	_proto.jiangshi_i = function () {
		var t = new eui.Image();
		this.jiangshi = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "zombie1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.changjing_i = function () {
		var t = new eui.Label();
		this.changjing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.size = 20;
		t.text = "Cấp 1 ~ 3";
		t.textAlign = "center";
		t.textColor = 0x3086DB;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 15;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "tagtip_png";
		t.x = 342;
		t.y = 10;
		return t;
	};
	_proto.jieshao_i = function () {
		var t = new eui.Label();
		this.jieshao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 47;
		t.horizontalCenter = 104;
		t.size = 16;
		t.text = "Đừng nhìn ta lưu manh, thi thể cường hãn như vậy, thực vật đều đang run rẩy!";
		t.textColor = 0x3D0606;
		t.verticalCenter = 24.5;
		t.width = 226;
		return t;
	};
	return TuJianItemViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TuJianView.exml'] = window.TuJianViewSkin = (function (_super) {
	__extends(TuJianViewSkin, _super);
	function TuJianViewSkin() {
		_super.call(this);
		this.skinParts = ["dataList","scroller","closeBtn","nowDengJi"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group3_i()];
	}
	var _proto = TuJianViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x050001;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 800;
		t.horizontalCenter = 0;
		t.verticalCenter = -120;
		t.width = 530;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.scroller_i(),this.closeBtn_i(),this._Group2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 800;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 530;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "Sách ảnh";
		t.textColor = 0x2af8fe;
		t.y = 8;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 700;
		t.horizontalCenter = 0;
		t.width = 490;
		t.y = 70;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 490;
		t.x = -13.64;
		t.elementsContent = [this.dataList_i()];
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = TuJianItemViewSkin;
		t.width = 480;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i(),this._Object14_i(),this._Object15_i(),this._Object16_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.null = "";
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "closenew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 15;
		t.elementsContent = [this._Rect2_i(),this.nowDengJi_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0.2;
		t.fillColor = 0x7c7070;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.nowDengJi_i = function () {
		var t = new eui.Label();
		this.nowDengJi = t;
		t.anchorOffsetX = 0;
		t.text = "Cấp 17";
		t.textAlign = "center";
		t.textColor = 0x4a8ed6;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Hãy đến và nâng cấp thực vật để mở khóa thêm nhiều thây ma!";
		t.textAlign = "center";
		t.textColor = 0x4A8ED6;
		t.width = 354;
		t.y = 775;
		return t;
	};
	return TuJianViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/YaoQingItemView.exml'] = window.YaoQingItemViewSkin = (function (_super) {
	__extends(YaoQingItemViewSkin, _super);
	function YaoQingItemViewSkin() {
		_super.call(this);
		this.skinParts = ["head","zuanshi","jinbi","renshu","lingquBtn"];
		
		this.height = 94;
		this.width = 540;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
	}
	var _proto = YaoQingItemViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 4;
		t.fillColor = 0xFFFFFF;
		t.left = 0;
		t.right = 0;
		t.top = 3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 27;
		t.y = 28;
		t.elementsContent = [this._Image1_i(),this.head_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "inviteItem_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Group();
		this.head = t;
		t.x = 3;
		t.y = -5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 377;
		t.y = 14;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 137;
		t.y = 23;
		t.elementsContent = [this.zuanshi_i(),this.jinbi_i(),this._Label1_i(),this._Label2_i(),this.renshu_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto.zuanshi_i = function () {
		var t = new eui.Label();
		this.zuanshi = t;
		t.size = 16;
		t.text = "165";
		t.textColor = 0x0A0000;
		t.x = 103;
		t.y = 29;
		return t;
	};
	_proto.jinbi_i = function () {
		var t = new eui.Label();
		this.jinbi = t;
		t.size = 16;
		t.text = "16 tỷ";
		t.textColor = 0x0A0000;
		t.x = 28;
		t.y = 28;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 16;
		t.text = "Bạn bè";
		t.textColor = 0x0A0000;
		t.x = 68;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 16;
		t.text = "Đầu tiên";
		t.textColor = 0x0A0000;
		t.x = 26;
		t.y = 0;
		return t;
	};
	_proto.renshu_i = function () {
		var t = new eui.Label();
		this.renshu = t;
		t.size = 16;
		t.text = "01";
		t.textColor = 0x0A0000;
		t.x = 45;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "jinbi_png";
		t.width = 24;
		t.x = 0;
		t.y = 26;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "zuanshi_png";
		t.width = 21;
		t.x = 68;
		t.y = 24;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 368;
		t.elementsContent = [this.lingquBtn_i(),this._Label3_i()];
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new eui.Image();
		this.lingquBtn = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "btnyellow_png";
		t.verticalCenter = 0;
		t.width = 125;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "Nhận";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	return YaoQingItemViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/YaoQingView.exml'] = window.YaoQingViewSkin = (function (_super) {
	__extends(YaoQingViewSkin, _super);
	function YaoQingViewSkin() {
		_super.call(this);
		this.skinParts = ["titleTex","enterGro","closeBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.titleTex_i(),this.enterGro_i(),this.closeBtn_i(),this._Label2_i()];
	}
	var _proto = YaoQingViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = -1;
		t.width = 600;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.source = "hengfudingbu_png";
		t.x = 221;
		t.y = 354;
		return t;
	};
	_proto.titleTex_i = function () {
		var t = new eui.Label();
		this.titleTex = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "Lấy hình đại diện người dùng";
		t.textColor = 0xffffff;
		t.verticalCenter = -35.5;
		return t;
	};
	_proto.enterGro_i = function () {
		var t = new eui.Group();
		this.enterGro = t;
		t.x = 253;
		t.y = 751;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "btnyellow_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "Đồng ý";
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 275;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "closenew_png";
		t.verticalCenter = -236;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 6;
		t.size = 45;
		t.text = "Lời khuyên";
		t.textColor = 0x2af8fe;
		t.verticalCenter = -235.5;
		return t;
	};
	return YaoQingViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/YinHangView.exml'] = window.YinHangViewSkin = (function (_super) {
	__extends(YinHangViewSkin, _super);
	function YinHangViewSkin() {
		_super.call(this);
		this.skinParts = ["zuanshi","getbtn","closeBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this.closeBtn_i()];
	}
	var _proto = YinHangViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x050001;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.zuanshi_i(),this.getbtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(250,419,6,10);
		t.scaleX = 1;
		t.scaleY = 0.7;
		t.source = "alertbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "yinhang1_png";
		t.x = 112.33;
		t.y = 96.3;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zuanshi_png";
		t.x = 179.99;
		t.y = 367.36;
		return t;
	};
	_proto.zuanshi_i = function () {
		var t = new eui.Label();
		this.zuanshi = t;
		t.size = 35;
		t.text = "300,00B";
		t.x = 243.03;
		t.y = 382.34;
		return t;
	};
	_proto.getbtn_i = function () {
		var t = new eui.Group();
		this.getbtn = t;
		t.x = 154.01;
		t.y = 447.34;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shipin_png";
		t.x = 31.33;
		t.y = 17.69;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 32;
		t.text = "Rút KC";
		t.textColor = 0xf0dcb1;
		t.x = 92.34;
		t.y = 17.33;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = -279.5;
		t.elementsContent = [this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6999999999999998;
		t.scaleY = 1;
		t.source = "hengfudingbu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 50;
		t.text = "Ngân hàng";
		t.textColor = 0x2AF8FE;
		t.x = 50;
		t.y = 25.32;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 243;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "closenew_png";
		t.verticalCenter = -276;
		return t;
	};
	return YinHangViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/YuanShengicon.exml'] = window.YuanShengiconSkin = (function (_super) {
	__extends(YuanShengiconSkin, _super);
	function YuanShengiconSkin() {
		_super.call(this);
		this.skinParts = ["bg","closebtn","nativeADBtn","nativeADImg","title","titlead","content"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = YuanShengiconSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.bg_i(),this.closebtn_i(),this._Group1_i(),this.nativeADBtn_i(),this._Group2_i(),this.titlead_i(),this._Group3_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.height = 130;
		t.horizontalCenter = 0;
		t.source = "baipifutianchu_png";
		t.width = 720;
		return t;
	};
	_proto.closebtn_i = function () {
		var t = new eui.Group();
		this.closebtn = t;
		t.height = 50;
		t.width = 50;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "iconX_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.width = 71;
		t.x = 649;
		t.y = 162;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "iconguanggao_png";
		t.x = 6;
		t.y = 5;
		return t;
	};
	_proto.nativeADBtn_i = function () {
		var t = new eui.Group();
		this.nativeADBtn = t;
		t.height = 60;
		t.width = 150;
		t.x = 560;
		t.y = 42;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "chakanxiangxi_png";
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 100;
		t.x = 52;
		t.y = 19;
		t.elementsContent = [this.nativeADImg_i()];
		return t;
	};
	_proto.nativeADImg_i = function () {
		var t = new eui.Image();
		this.nativeADImg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "chakanxiangxi_png";
		t.top = 0;
		return t;
	};
	_proto.titlead_i = function () {
		var t = new eui.Group();
		this.titlead = t;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.width = 220;
		t.y = 11;
		t.elementsContent = [this.title_i()];
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "Nền tảng Trực tiếp Betta";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.horizontalCenter = -8;
		t.touchEnabled = true;
		t.width = 376;
		t.y = 74;
		t.elementsContent = [this.content_i()];
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = -2.5;
		t.size = 20;
		t.text = "Betta Live Platform Betta Live Platform 21315464563";
		t.textAlign = "center";
		t.textColor = 0x939090;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		return t;
	};
	return YuanShengiconSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/yuanshengView.exml'] = window.yuanshengViewSkin = (function (_super) {
	__extends(yuanshengViewSkin, _super);
	function yuanshengViewSkin() {
		_super.call(this);
		this.skinParts = ["title","closebtn","nativeADImg","nativeADImgBtn","nativeADBtn","content"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = yuanshengViewSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 360;
		t.horizontalCenter = -1;
		t.width = 718;
		t.elementsContent = [this._Image1_i(),this.title_i(),this.closebtn_i(),this._Group1_i(),this.nativeADImgBtn_i(),this.nativeADBtn_i(),this.content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 290;
		t.scale9Grid = new egret.Rectangle(248,376,6,4);
		t.source = "alertbg_png";
		t.width = 710;
		t.x = 4;
		t.y = 70;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "Nhiều nhất là 6 từ";
		t.textAlign = "center";
		t.textColor = 0x2AF8FE;
		t.verticalAlign = "middle";
		t.y = 75.25;
		return t;
	};
	_proto.closebtn_i = function () {
		var t = new eui.Group();
		this.closebtn = t;
		t.height = 30;
		t.width = 30;
		t.x = 657.72;
		t.y = 77.72;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.source = "tuji1_json.jixian2_png";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "X";
		t.x = 8;
		t.y = 5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.width = 50;
		t.x = 23;
		t.y = 79;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.source = "tuji2_json.zuanshianjian_png";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "QC";
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.nativeADImgBtn_i = function () {
		var t = new eui.Group();
		this.nativeADImgBtn = t;
		t.anchorOffsetX = 0;
		t.height = 215;
		t.width = 656;
		t.x = 30;
		t.y = 112;
		t.elementsContent = [this.nativeADImg_i()];
		return t;
	};
	_proto.nativeADImg_i = function () {
		var t = new eui.Image();
		this.nativeADImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 210;
		t.source = "nodebg_png";
		t.width = 660;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nativeADBtn_i = function () {
		var t = new eui.Group();
		this.nativeADBtn = t;
		t.height = 70;
		t.width = 260;
		t.x = 226;
		t.y = 1;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.8;
		t.source = "tuji2_json.hengfudingbu_png";
		t.x = 5;
		t.y = -9.99;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "Xem QC";
		t.textColor = 0xffffff;
		t.y = 17.25;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "Tik Tok Extreme Edition thực sự rất đẹp";
		t.textColor = 0x2af8fe;
		t.x = 33;
		t.y = 330.25;
		return t;
	};
	return yuanshengViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/zaixianjiangliView.exml'] = window.zaixianjiangliViewSkin = (function (_super) {
	__extends(zaixianjiangliViewSkin, _super);
	function zaixianjiangliViewSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","awardImg","gettext","getBtn","blinkImg","awardNum"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = zaixianjiangliViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 1;
		t.fillAlpha = 0.55;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.75;
		t.top = -1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 360;
		t.height = 600;
		t.horizontalCenter = 0;
		t.width = 508;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.closeBtn_i(),this.awardImg_i(),this.getBtn_i(),this.blinkImg_i(),this.awardNum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.scale9Grid = new egret.Rectangle(244,417,8,8);
		t.source = "alertbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 1;
		t.source = "hengfudingbu_png";
		t.x = 104;
		t.y = -51.42;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 40;
		t.text = "Quà Online";
		t.textColor = 0x2AF8FE;
		t.x = 170;
		t.y = -20.35;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 236;
		t.source = "closenew_png";
		t.verticalCenter = -292;
		return t;
	};
	_proto.awardImg_i = function () {
		var t = new eui.Image();
		this.awardImg = t;
		t.source = "tuji1_json.jinbi_png";
		t.x = 213;
		t.y = 204;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new eui.Group();
		this.getBtn = t;
		t.bottom = 10;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 300;
		t.elementsContent = [this._Image3_i(),this.gettext_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btnyellowad_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gettext_i = function () {
		var t = new eui.Label();
		this.gettext = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "Nhận";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 18;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 45;
		t.text = "10:00";
		t.visible = false;
		t.x = 94;
		t.y = 20;
		return t;
	};
	_proto.blinkImg_i = function () {
		var t = new eui.Image();
		this.blinkImg = t;
		t.horizontalCenter = 0.5;
		t.source = "tuji2_json.guangquan_png";
		t.verticalCenter = -35.5;
		return t;
	};
	_proto.awardNum_i = function () {
		var t = new eui.Label();
		this.awardNum = t;
		t.horizontalCenter = -3.5;
		t.size = 50;
		t.text = "x3000";
		t.verticalCenter = 139;
		return t;
	};
	return zaixianjiangliViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ZenMeWanView.exml'] = window.ZenMeWanViewSkin = (function (_super) {
	__extends(ZenMeWanViewSkin, _super);
	function ZenMeWanViewSkin() {
		_super.call(this);
		this.skinParts = ["shouzhi","closeBtn","sid"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group4_i()];
	}
	var _proto = ZenMeWanViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 775;
		t.horizontalCenter = 0;
		t.verticalCenter = 28.5;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Group1_i(),this._Group2_i(),this._Label9_i(),this._Group3_i(),this.closeBtn_i(),this.sid_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 775;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.verticalCenter = 0;
		t.width = 600;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.source = "hengfudingbu_png";
		t.x = 154.99;
		t.y = -40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.text = "Cách tổng hợp";
		t.textColor = 0x2985AD;
		t.x = 54;
		t.y = 333;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 45;
		t.text = "Cách tổng hợp";
		t.textColor = 0x2af8fe;
		t.y = -12;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 60;
		t.size = 25;
		t.text = "Hai thợ máy cùng cấp có thể được kéo lại với nhau để tạo thành một thợ máy cấp cao hơn";
		t.textColor = 0xffffff;
		t.width = 482;
		t.x = 50;
		t.y = 70;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -1;
		t.verticalCenter = -6;
		t.elementsContent = [this._Rect2_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 150;
		t.strokeColor = 0xBCB1B1;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 90;
		t.size = 25;
		t.text = "Thiết lập nhiều loại đai pin khác nhau để chống lại kẻ thù, tấn công và phóng đạn để đánh trả từng kẻ thù xâm lược một.";
		t.textColor = 0x2985AD;
		t.width = 498;
		t.x = 28;
		t.y = 35;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -1;
		t.verticalCenter = 272.5;
		t.elementsContent = [this._Rect3_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 200;
		t.strokeColor = 0xbcb1b1;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "2. Xây dựng một thợ máy để nhận được nhiều tiền vàng";
		t.textColor = 0x2985AD;
		t.width = 498;
		t.y = 50;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "3. Đăng nhập vào trò chơi một lần sau một khoảng thời gian để nhận thêm doanh thu ngoại tuyến";
		t.textColor = 0x2985AD;
		t.width = 498;
		t.y = 85;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 32;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "4. Mời thêm bạn bè chơi game để nhận thêm tiền vàng và kim cương";
		t.textColor = 0x2985AD;
		t.width = 498;
		t.y = 145;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "1. Nhấp vào Crazy Attack để nhận thêm xu";
		t.textColor = 0x2985AD;
		t.width = 498;
		t.y = 15;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "Làm thế nào để nhận được lợi nhuận cao hơn";
		t.textColor = 0xffffff;
		t.x = 48;
		t.y = 512.01;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -1;
		t.verticalCenter = -172.5;
		t.elementsContent = [this._Rect4_i(),this._Label10_i(),this._Label11_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.shouzhi_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 150;
		t.strokeColor = 0xBCB1B1;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Arial";
		t.size = 40;
		t.text = "Kéo +";
		t.textAlign = "center";
		t.textColor = 0x2985AD;
		t.width = 86;
		t.x = 106;
		t.y = 30;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Arial";
		t.size = 40;
		t.text = " tổng hợp>>>";
		t.textAlign = "center";
		t.textColor = 0x2985AD;
		t.width = 86;
		t.x = 292;
		t.y = 32;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "fplant1_png";
		t.x = 14;
		t.y = 20;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "fplant1_png";
		t.x = 202;
		t.y = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.5;
		t.source = "fplant2_png";
		t.x = 414;
		t.y = 8;
		return t;
	};
	_proto.shouzhi_i = function () {
		var t = new eui.Image();
		this.shouzhi = t;
		t.source = "shouzhi_png";
		t.verticalCenter = 31;
		t.x = 48;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "closenew_png";
		t.x = 538;
		t.y = -19;
		return t;
	};
	_proto.sid_i = function () {
		var t = new eui.Label();
		this.sid = t;
		t.anchorOffsetX = 0;
		t.size = 12;
		t.text = "Label";
		t.textColor = 0x070404;
		t.visible = false;
		t.width = 573;
		t.x = 11;
		t.y = 309;
		return t;
	};
	return ZenMeWanViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ZhiYinView.exml'] = window.ZhiYinViewSkin = (function (_super) {
	__extends(ZhiYinViewSkin, _super);
	function ZhiYinViewSkin() {
		_super.call(this);
		this.skinParts = ["rect","word","quedingBtn","no1","wordTex","word0","word1"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.no1_i(),this.wordTex_i(),this.word0_i(),this.word1_i()];
	}
	var _proto = ZhiYinViewSkin.prototype;

	_proto.no1_i = function () {
		var t = new eui.Group();
		this.no1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.rect_i(),this.word_i(),this.quedingBtn_i()];
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.word_i = function () {
		var t = new eui.Label();
		this.word = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 267.88;
		t.horizontalCenter = 10.5;
		t.size = 50;
		t.text = "Chào mừng bạn đến với hơn người, bạn đã sẵn sàng để thử thách?";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = -187;
		t.width = 536.64;
		return t;
	};
	_proto.quedingBtn_i = function () {
		var t = new eui.Group();
		this.quedingBtn = t;
		t.horizontalCenter = 1;
		t.verticalCenter = 40;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "btnyellow_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "Ok";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.wordTex_i = function () {
		var t = new eui.Label();
		this.wordTex = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 267.88;
		t.horizontalCenter = 10.5;
		t.size = 50;
		t.text = "Chuyển các cây sang cùng một loại cây có thể tổng hợp các cây bậc cao";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = -187;
		t.visible = false;
		t.width = 536.64;
		return t;
	};
	_proto.word0_i = function () {
		var t = new eui.Label();
		this.word0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 267.88;
		t.horizontalCenter = 0.5;
		t.size = 50;
		t.text = "Bây giờ chúng ta hãy kéo cây vào chậu hoa để tiêu diệt zombie! Bạn có thể nhận được kim cương và tiền vàng bằng cách tiêu diệt zombie ~";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 313;
		t.visible = false;
		t.width = 536.64;
		return t;
	};
	_proto.word1_i = function () {
		var t = new eui.Label();
		this.word1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 219.88;
		t.horizontalCenter = 8.5;
		t.size = 50;
		t.text = "Tiền vàng có thể mua được nhiều cây hơn ~ (lưu ý rằng những cây giống nhau sẽ được đánh giá cao sau khi mua)";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 39;
		t.visible = false;
		t.width = 536.64;
		return t;
	};
	return ZhiYinViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ZhuanPanView.exml'] = window.ZhuanPanViewSkin = (function (_super) {
	__extends(ZhuanPanViewSkin, _super);
	function ZhuanPanViewSkin() {
		_super.call(this);
		this.skinParts = ["zhuanpan","zhizhen","sum","time","zhuanpanBtn0","zhuanpanBtn","invitationBtn0","invitationBtn","closeBtn","rocket","tipbg"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group14_i(),this.tipbg_i()];
	}
	var _proto = ZhuanPanViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x070002;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 1;
		t.strokeColor = 0xf7f4f4;
		t.top = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 775;
		t.horizontalCenter = 0;
		t.verticalCenter = 18.5;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.zhuanpan_i(),this.zhizhen_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 775;
		t.horizontalCenter = 0;
		t.source = "alertbg_png";
		t.width = 600;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.source = "hengfudingbu_png";
		t.x = 155.99;
		t.y = -40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 3;
		t.size = 45;
		t.text = "Vòng quay";
		t.textColor = 0x2af8fe;
		t.y = -12;
		return t;
	};
	_proto.zhuanpan_i = function () {
		var t = new eui.Group();
		this.zhuanpan = t;
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 240;
		t.height = 480;
		t.horizontalCenter = 0;
		t.verticalCenter = -31.5;
		t.width = 480;
		t.elementsContent = [this._Image3_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group6_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 480;
		t.horizontalCenter = 0;
		t.source = "zhuanpan1_png";
		t.verticalCenter = 0;
		t.width = 480;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 336;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zuanshi_png";
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "K.Cương x50";
		t.textColor = 0x000000;
		t.y = 94;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.rotation = 45;
		t.x = 118;
		t.y = 260;
		t.elementsContent = [this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -6.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pingguo_png";
		t.y = 0.71;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "T.Độ x10";
		t.textColor = 0x000000;
		t.y = 85;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.rotation = 132;
		t.x = 443;
		t.y = 345;
		t.elementsContent = [this._Label4_i(),this._Image6_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "Vé x3";
		t.textColor = 0x000000;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1.5;
		t.source = "choujiangquan_png";
		t.y = 56;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 21;
		t.elementsContent = [this._Image7_i(),this._Label5_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zuanshi_png";
		t.y = 58;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "K.Cương x50";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.rotation = 45;
		t.x = 344;
		t.y = 30;
		t.elementsContent = [this._Group5_i(),this._Label6_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.y = 55;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "zuanshi_png";
		t.x = -11.11;
		t.y = 25.99;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "zuanshi_png";
		t.x = 28.89;
		t.y = 25.99;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -5;
		t.source = "zuanshi_png";
		t.y = -1.01;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "K.Cương x1.0 tr";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.rotation = -45;
		t.x = 40;
		t.y = 130;
		t.elementsContent = [this._Group7_i(),this._Label7_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.y = 55;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "zuanshi_png";
		t.x = -5.05;
		t.y = 28.01;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "zuanshi_png";
		t.x = 34.95;
		t.y = 28.01;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -3;
		t.source = "zuanshi_png";
		t.y = 1.01;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "K.Cương x200";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.rotation = 90;
		t.verticalCenter = 0;
		t.x = 462;
		t.elementsContent = [this._Image14_i(),this._Label8_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zuanshi_png";
		t.x = 16;
		t.y = 58;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "K.Cương x500";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.rotation = -90;
		t.verticalCenter = 0;
		t.x = 18;
		t.elementsContent = [this._Image15_i(),this._Label9_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -4;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "zuanshi_png";
		t.y = 52;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "K.Cương x100";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhizhen_i = function () {
		var t = new eui.Image();
		this.zhizhen = t;
		t.horizontalCenter = 0.5;
		t.source = "pointer_png";
		t.y = 266;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 232;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label10_i(),this.sum_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "Lần còn lại:";
		t.textColor = 0xffffff;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.sum_i = function () {
		var t = new eui.Label();
		this.sum = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "01";
		t.textColor = 0xffffff;
		t.x = 84;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 740;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Label11_i(),this.time_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "Lần còn lại：";
		t.textColor = 0xffffff;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "00：00：00";
		t.textColor = 0xffffff;
		t.x = 118;
		t.y = 3;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 296.5;
		t.elementsContent = [this.zhuanpanBtn_i(),this.invitationBtn_i()];
		return t;
	};
	_proto.zhuanpanBtn_i = function () {
		var t = new eui.Group();
		this.zhuanpanBtn = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image16_i(),this.zhuanpanBtn0_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btnyellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuanpanBtn0_i = function () {
		var t = new eui.Label();
		this.zhuanpanBtn0 = t;
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "Quay";
		t.x = 40;
		t.y = 13;
		return t;
	};
	_proto.invitationBtn_i = function () {
		var t = new eui.Group();
		this.invitationBtn = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image17_i(),this.invitationBtn0_i(),this._Image18_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "btnyellowad_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.invitationBtn0_i = function () {
		var t = new eui.Label();
		this.invitationBtn0 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "Nhận Free";
		t.x = 61;
		t.y = 17;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shipin_png";
		t.x = 20;
		t.y = 17;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 287;
		t.source = "closenew_png";
		t.verticalCenter = -376.5;
		return t;
	};
	_proto.tipbg_i = function () {
		var t = new eui.Group();
		this.tipbg = t;
		t.height = 572;
		t.visible = false;
		t.width = 720;
		t.x = 0;
		t.y = 354;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this._Image21_i(),this.rocket_i(),this._Image22_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 572;
		t.source = "tipbg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "speedImg_png";
		t.visible = false;
		t.x = 64;
		t.y = 142;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "speedImg_png";
		t.visible = false;
		t.x = 32;
		t.y = 156;
		return t;
	};
	_proto.rocket_i = function () {
		var t = new eui.Image();
		this.rocket = t;
		t.source = "speedImg_png";
		t.x = -562;
		t.y = 392;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "speedImg_png";
		t.visible = false;
		t.x = 732;
		t.y = -124;
		return t;
	};
	return ZhuanPanViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ZhuJieMianView.exml'] = window.ZhuJieMianViewSkin = (function (_super) {
	__extends(ZhuJieMianViewSkin, _super);
	function ZhuJieMianViewSkin() {
		_super.call(this);
		this.skinParts = ["diamondSum","diamond","euiGold","goldSum","gold","topGro","shop","glodNum","glodMoney","curJijia","glodShop","attack","autoMerge","autoTime","speedTime","lajitong","bottomGro","levelImg","levelName","hongdian","lifeBtn","power","moreGameBtn","awardImg","awardContent","awardTime","awardBtn","addDesktop","menu","touchbg","leftbg","zhiwu0","rolename0","qiandaobtn","zhuanpanbtn","shezhibtn","bankbtn","music","morebtn","leftGro","arenaBtn","root"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.root_i()];
	}
	var _proto = ZhuJieMianViewSkin.prototype;

	_proto.root_i = function () {
		var t = new eui.Group();
		this.root = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.topGro_i(),this.bottomGro_i(),this.lifeBtn_i(),this._Group3_i(),this.moreGameBtn_i(),this.awardBtn_i(),this.addDesktop_i(),this.menu_i(),this.touchbg_i(),this.leftGro_i(),this.arenaBtn_i(),this._Group8_i()];
		return t;
	};
	_proto.topGro_i = function () {
		var t = new eui.Group();
		this.topGro = t;
		t.horizontalCenter = -9.5;
		t.top = 20;
		t.elementsContent = [this.diamond_i(),this.gold_i()];
		return t;
	};
	_proto.diamond_i = function () {
		var t = new eui.Group();
		this.diamond = t;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.horizontalCenter = -109.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.diamondSum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(22,20,17,5);
		t.source = "coinbg_png";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "jiahao_png";
		t.x = 109;
		t.y = 5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zuanshi_png";
		t.width = 84;
		t.x = 8;
		t.y = 2;
		return t;
	};
	_proto.diamondSum_i = function () {
		var t = new eui.Label();
		this.diamondSum = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "100";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.Group();
		this.gold = t;
		t.horizontalCenter = 87.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.euiGold_i(),this.goldSum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(22,20,17,5);
		t.source = "coinbg_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "jiahao_png";
		t.x = 159;
		t.y = 5;
		return t;
	};
	_proto.euiGold_i = function () {
		var t = new eui.Image();
		this.euiGold = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "jinbi_png";
		t.x = 8;
		t.y = 4;
		return t;
	};
	_proto.goldSum_i = function () {
		var t = new eui.Label();
		this.goldSum = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "100";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bottomGro_i = function () {
		var t = new eui.Group();
		this.bottomGro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 1;
		t.height = 141;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.elementsContent = [this.shop_i(),this.glodShop_i(),this.attack_i(),this.autoMerge_i(),this.autoTime_i(),this.speedTime_i(),this.lajitong_i(),this._Group2_i(),this._Image8_i()];
		return t;
	};
	_proto.shop_i = function () {
		var t = new eui.Image();
		this.shop = t;
		t.height = 100;
		t.source = "zhiwu_png";
		t.width = 100;
		t.x = 518.51;
		t.y = 11;
		return t;
	};
	_proto.glodShop_i = function () {
		var t = new eui.Group();
		this.glodShop = t;
		t.height = 100;
		t.x = 210;
		t.y = 11;
		t.elementsContent = [this._Image6_i(),this.glodNum_i(),this._Group1_i(),this.curJijia_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.source = "zuanshianjian_png";
		t.width = 300;
		t.x = 0;
		t.y = 0.52;
		return t;
	};
	_proto.glodNum_i = function () {
		var t = new eui.BitmapLabel();
		this.glodNum = t;
		t.font = "buycoinnum_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "24";
		t.visible = false;
		t.x = 61;
		t.y = 24;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 188.45;
		t.x = 89;
		t.y = 30.04;
		t.elementsContent = [this._Image7_i(),this.glodMoney_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jinbi_png";
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.glodMoney_i = function () {
		var t = new eui.Label();
		this.glodMoney = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "3000.32 tỷ";
		t.verticalCenter = 0.5;
		t.width = 131;
		t.x = 51.96;
		return t;
	};
	_proto.curJijia_i = function () {
		var t = new eui.Image();
		this.curJijia = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 229.51;
		t.left = 15;
		t.rotation = 359.41;
		t.scaleX = 0.4;
		t.scaleY = 0.44;
		t.source = "fplant1_png";
		t.verticalCenter = -1;
		t.width = 159.55;
		return t;
	};
	_proto.attack_i = function () {
		var t = new eui.Image();
		this.attack = t;
		t.height = 100;
		t.source = "fengkuanggongji_png";
		t.width = 100;
		t.x = 100.63;
		t.y = 11.44;
		return t;
	};
	_proto.autoMerge_i = function () {
		var t = new eui.Image();
		this.autoMerge = t;
		t.height = 90;
		t.source = "zidonghecheng_png";
		t.width = 90;
		t.x = 630;
		t.y = 16.67;
		return t;
	};
	_proto.autoTime_i = function () {
		var t = new eui.Label();
		this.autoTime = t;
		t.size = 25;
		t.text = "99:99";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 640;
		t.y = -7;
		return t;
	};
	_proto.speedTime_i = function () {
		var t = new eui.Label();
		this.speedTime = t;
		t.size = 25;
		t.text = "99:99";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 127.27;
		t.y = -11.52;
		return t;
	};
	_proto.lajitong_i = function () {
		var t = new eui.Image();
		this.lajitong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98;
		t.source = "lajitong_png";
		t.visible = false;
		t.width = 62;
		t.x = 15;
		t.y = 14;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89;
		t.visible = false;
		t.width = 120;
		t.x = 317;
		t.y = -17;
		t.elementsContent = [this._Component1_i()];
		return t;
	};
	_proto._Component1_i = function () {
		var t = new eui.Component();
		t.anchorOffsetY = 0;
		t.height = 242;
		t.rotation = 69.36;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.skinName = "JiJiaViewSkin";
		t.width = 320;
		t.x = 91;
		t.y = -33;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tuji1_json.jiahao_png";
		t.x = 689;
		t.y = 84;
		return t;
	};
	_proto.lifeBtn_i = function () {
		var t = new eui.Group();
		this.lifeBtn = t;
		t.height = 60;
		t.left = 0;
		t.top = 78;
		t.width = 200;
		t.elementsContent = [this._Image9_i(),this.levelImg_i(),this.levelName_i(),this._Component2_i(),this.hongdian_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(87,45,1,1);
		t.source = "huitiaomu_png";
		t.width = 200;
		t.x = 0;
		t.y = 4.28;
		return t;
	};
	_proto.levelImg_i = function () {
		var t = new eui.Image();
		this.levelImg = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.source = "duanwei1_png";
		t.x = 11;
		t.y = 0;
		return t;
	};
	_proto.levelName_i = function () {
		var t = new eui.Label();
		this.levelName = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "Huyền thoại 1";
		t.x = 60;
		t.y = 18;
		return t;
	};
	_proto._Component2_i = function () {
		var t = new eui.Component();
		t.skinName = "DuanWeiDaTingViewSkin";
		t.visible = false;
		t.x = 1.32;
		t.y = -1.34;
		return t;
	};
	_proto.hongdian_i = function () {
		var t = new eui.Image();
		this.hongdian = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "moregamesbtn_png";
		t.x = 46;
		t.y = -6;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.top = 139;
		t.width = 230;
		t.elementsContent = [this._Image10_i(),this._Label1_i(),this.power_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(70,19,1,1);
		t.source = "huitiaomu_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "Lực：";
		t.textColor = 0xf6db06;
		t.x = 3.35;
		t.y = 11.48;
		return t;
	};
	_proto.power_i = function () {
		var t = new eui.Label();
		this.power = t;
		t.fontFamily = "Tahoma";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 29;
		t.text = "9999999";
		t.textColor = 0x2af8fe;
		t.x = 90.37;
		t.y = 11.14;
		return t;
	};
	_proto.moreGameBtn_i = function () {
		var t = new eui.Group();
		this.moreGameBtn = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.left = 0;
		t.verticalCenter = -244;
		t.visible = false;
		t.width = 98;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "119_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.awardBtn_i = function () {
		var t = new eui.Group();
		this.awardBtn = t;
		t.anchorOffsetX = 0;
		t.height = 110;
		t.left = 0;
		t.verticalCenter = -111;
		t.width = 100;
		t.elementsContent = [this.awardImg_i(),this.awardContent_i(),this.awardTime_i()];
		return t;
	};
	_proto.awardImg_i = function () {
		var t = new eui.Image();
		this.awardImg = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "tuji1_json.jinbi_png";
		t.x = 14;
		t.y = 29;
		return t;
	};
	_proto.awardContent_i = function () {
		var t = new eui.Label();
		this.awardContent = t;
		t.horizontalCenter = -10.5;
		t.size = 25;
		t.text = "x3000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 83.04;
		return t;
	};
	_proto.awardTime_i = function () {
		var t = new eui.Label();
		this.awardTime = t;
		t.horizontalCenter = -8.5;
		t.size = 25;
		t.text = "99:99";
		t.y = 4.56;
		return t;
	};
	_proto.addDesktop_i = function () {
		var t = new eui.Group();
		this.addDesktop = t;
		t.height = 100;
		t.right = 0;
		t.verticalCenter = -249;
		t.visible = false;
		t.width = 130;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "tianjiazhuomian_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Group();
		this.menu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.left = 12;
		t.top = 200;
		t.visible = false;
		t.width = 108;
		t.elementsContent = [this._Image13_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "touxiang_png";
		t.y = 12;
		return t;
	};
	_proto.touchbg_i = function () {
		var t = new eui.Group();
		this.touchbg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.leftGro_i = function () {
		var t = new eui.Group();
		this.leftGro = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.top = 0;
		t.visible = false;
		t.width = 260;
		t.x = 0;
		t.elementsContent = [this.leftbg_i(),this._Group7_i(),this.morebtn_i()];
		return t;
	};
	_proto.leftbg_i = function () {
		var t = new eui.Image();
		this.leftbg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -67;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(83,296,4,5);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tanchuhengfu_png";
		t.top = 1;
		t.width = 260;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 800;
		t.left = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 260;
		t.width = 244;
		t.x = 2;
		t.y = 260;
		t.elementsContent = [this._Group4_i(),this._Group5_i(),this.qiandaobtn_i(),this.zhuanpanbtn_i(),this.shezhibtn_i(),this.bankbtn_i(),this._Group6_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 3;
		t.y = 135;
		t.elementsContent = [this.zhiwu0_i(),this._Label2_i()];
		return t;
	};
	_proto.zhiwu0_i = function () {
		var t = new eui.Label();
		this.zhiwu0 = t;
		t.anchorOffsetX = 0;
		t.size = 28;
		t.text = "12 loại Mecha ";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.width = 180;
		t.x = 80;
		t.y = 1;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "Thợ máy";
		t.textColor = 0x2AF8FE;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 3;
		t.y = 35;
		t.elementsContent = [this.rolename0_i(),this._Label3_i()];
		return t;
	};
	_proto.rolename0_i = function () {
		var t = new eui.Label();
		this.rolename0 = t;
		t.anchorOffsetX = 0;
		t.size = 28;
		t.text = "Happy Little Pea";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.width = 180;
		t.x = 80;
		t.y = 1;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "Nickname";
		t.textColor = 0x2AF8FE;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.qiandaobtn_i = function () {
		var t = new eui.Image();
		this.qiandaobtn = t;
		t.horizontalCenter = -31.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "qiandao_png";
		t.verticalCenter = -153.5;
		return t;
	};
	_proto.zhuanpanbtn_i = function () {
		var t = new eui.Image();
		this.zhuanpanbtn = t;
		t.horizontalCenter = -30.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zuanpan_png";
		t.verticalCenter = -8;
		return t;
	};
	_proto.shezhibtn_i = function () {
		var t = new eui.Image();
		this.shezhibtn = t;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "shezhi_png";
		t.visible = false;
		t.x = 96;
		t.y = 494;
		return t;
	};
	_proto.bankbtn_i = function () {
		var t = new eui.Image();
		this.bankbtn = t;
		t.horizontalCenter = -31;
		t.source = "yinhang_png";
		t.verticalCenter = 125.5;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 71;
		t.y = 625;
		t.elementsContent = [this.music_i()];
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.ToggleSwitch();
		this.music = t;
		t.label = "ToggleButton";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.morebtn_i = function () {
		var t = new eui.Image();
		this.morebtn = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "tanchuhengfu1_png";
		t.x = 191;
		t.y = 220;
		return t;
	};
	_proto.arenaBtn_i = function () {
		var t = new eui.Group();
		this.arenaBtn = t;
		t.height = 100;
		t.right = 6;
		t.verticalCenter = -484;
		t.visible = false;
		t.width = 100;
		t.elementsContent = [this._Image14_i(),this._Label4_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "Đấu trường";
		t.x = 3.94;
		t.y = 33.21;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.right = 27;
		t.verticalCenter = -475;
		t.visible = false;
		t.width = 80;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "tiaozhan_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ZhuJieMianViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ZiDongHeChengView.exml'] = window.ZiDongHeChengViewSkin = (function (_super) {
	__extends(ZiDongHeChengViewSkin, _super);
	function ZiDongHeChengViewSkin() {
		_super.call(this);
		this.skinParts = ["daojishi","closeBtn","videoBtn","pageNode","hengfu","rocket","tipbg"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.pageNode_i(),this.hengfu_i(),this.tipbg_i()];
	}
	var _proto = ZiDongHeChengViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x070002;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 1;
		t.strokeColor = 0xF7F4F4;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "nodebg_png";
		t.top = 0;
		return t;
	};
	_proto.pageNode_i = function () {
		var t = new eui.Group();
		this.pageNode = t;
		t.anchorOffsetX = 265.55;
		t.anchorOffsetY = 251.61;
		t.height = 503.21;
		t.horizontalCenter = 13.5;
		t.verticalCenter = -7.5;
		t.width = 531.09;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Label1_i(),this.daojishi_i(),this._Label2_i(),this.closeBtn_i(),this.videoBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(242,423,10,8);
		t.scaleX = 1;
		t.scaleY = 0.6;
		t.source = "alertbg_png";
		t.x = 12.12;
		t.y = 12.12;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.source = "hengfudingbu_png";
		t.x = 120;
		t.y = -27;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "pingguozhadan_png";
		t.x = 204.09;
		t.y = 117;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 50;
		t.text = "Tổng hợp tự động";
		t.textColor = 0x2af8fe;
		t.x = 159.09;
		t.y = -1;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.Label();
		this.daojishi = t;
		t.size = 40;
		t.text = "10:00";
		t.textColor = 0x2af8fe;
		t.x = 209.09;
		t.y = 256.6;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 40;
		t.text = "Thời hạn";
		t.textColor = 0x2AF8FE;
		t.x = 180.09;
		t.y = 312.43;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.height = 52;
		t.source = "closenew_png";
		t.width = 52;
		t.x = 476;
		t.y = -1.95;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new eui.Group();
		this.videoBtn = t;
		t.height = 70;
		t.horizontalCenter = -5.545000000000016;
		t.verticalCenter = 163.395;
		t.elementsContent = [this._Image5_i(),this._Label3_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btnyellowad_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "Free";
		t.x = 66.72;
		t.y = 20;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shipin_png";
		t.x = 146.27;
		t.y = 22.64;
		return t;
	};
	_proto.hengfu_i = function () {
		var t = new eui.Image();
		this.hengfu = t;
		t.anchorOffsetX = 0;
		t.left = 0;
		t.right = 0;
		t.source = "hengfu2_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.tipbg_i = function () {
		var t = new eui.Group();
		this.tipbg = t;
		t.height = 572;
		t.visible = false;
		t.width = 720;
		t.x = 0;
		t.y = 354;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this.rocket_i(),this._Image10_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 572;
		t.source = "tipbg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "autoMerge_png";
		t.visible = false;
		t.x = 64;
		t.y = 142;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "autoMerge_png";
		t.visible = false;
		t.x = 32;
		t.y = 156;
		return t;
	};
	_proto.rocket_i = function () {
		var t = new eui.Image();
		this.rocket = t;
		t.source = "autoMerge_png";
		t.x = -562;
		t.y = 392;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "autoMerge_png";
		t.visible = false;
		t.x = 732;
		t.y = -124;
		return t;
	};
	return ZiDongHeChengViewSkin;
})(eui.Skin);