window.skins={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","CoverMed":"resource/eui_skins/CoverMed.exml","XuanGuan":"resource/eui_skins/XuanGuan.exml","GouWuMed":"resource/eui_skins/GouWuMed.exml","JieSuan":"resource/eui_skins/JieSuan.exml"}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/CoverMed.exml'] = window.CoverMedSkin = (function (_super) {
	__extends(CoverMedSkin, _super);
	function CoverMedSkin() {
		_super.call(this);
		this.skinParts = ["moreBn","startBn","zu1"];
		
		this.height = 480;
		this.width = 800;
		this.elementsContent = [this._Image1_i(),this.zu1_i()];
	}
	var _proto = CoverMedSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ShouBg_png";
		return t;
	};
	_proto.zu1_i = function () {
		var t = new eui.Group();
		this.zu1 = t;
		t.x = -211;
		t.y = 296.5;
		t.elementsContent = [this.moreBn_i(),this.startBn_i()];
		return t;
	};
	_proto.moreBn_i = function () {
		var t = new eui.Image();
		this.moreBn = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 69;
		t.name = "moreBn";
		t.source = "moreBn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.startBn_i = function () {
		var t = new eui.Image();
		this.startBn = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 70;
		t.name = "startBn";
		t.source = "startBn_png";
		t.x = 267;
		t.y = 0;
		return t;
	};
	return CoverMedSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMed.exml'] = window.GameMedSkin = (function (_super) {
	__extends(GameMedSkin, _super);
	function GameMedSkin() {
		_super.call(this);
		this.skinParts = ["shan_z","xue_z","gao_z","shijian","Gchengjiu","Gjinbi","zantingBn","tuichuBn","zantingBn2","chongwanBn","zantingjiemian","paodao","tubiao"];
		
		this.height = 480;
		this.width = 800;
		this.elementsContent = [this.shan_z_i(),this.xue_z_i(),this.gao_z_i(),this._Image1_i(),this._Image2_i(),this.shijian_i(),this.Gchengjiu_i(),this.Gjinbi_i(),this.zantingBn_i(),this.zantingjiemian_i(),this.paodao_i(),this.tubiao_i()];
	}
	var _proto = GameMedSkin.prototype;

	_proto.shan_z_i = function () {
		var t = new eui.Image();
		this.shan_z = t;
		t.source = "shan_z_png";
		return t;
	};
	_proto.xue_z_i = function () {
		var t = new eui.Image();
		this.xue_z = t;
		t.source = "xue_z_png";
		t.visible = false;
		t.x = 2;
		t.y = 1;
		return t;
	};
	_proto.gao_z_i = function () {
		var t = new eui.Image();
		this.gao_z = t;
		t.source = "gao_z_png";
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "kuang_png";
		t.x = -4;
		t.y = 133;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "boli_png";
		t.x = 2;
		return t;
	};
	_proto.shijian_i = function () {
		var t = new eui.Label();
		this.shijian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 34;
		t.italic = true;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 148;
		t.x = 635;
		t.y = 207;
		return t;
	};
	_proto.Gchengjiu_i = function () {
		var t = new eui.Label();
		this.Gchengjiu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 19;
		t.italic = true;
		t.size = 20;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xCC31FF;
		t.width = 47;
		t.x = 36;
		t.y = 207;
		return t;
	};
	_proto.Gjinbi_i = function () {
		var t = new eui.Label();
		this.Gjinbi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 33;
		t.italic = true;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xF49322;
		t.width = 79;
		t.x = 45.5;
		t.y = 142;
		return t;
	};
	_proto.zantingBn_i = function () {
		var t = new eui.Image();
		this.zantingBn = t;
		t.name = "zantingBn";
		t.source = "zanting_png";
		t.x = 724;
		t.y = 12;
		return t;
	};
	_proto.zantingjiemian_i = function () {
		var t = new eui.Group();
		this.zantingjiemian = t;
		t.x = 801;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this.tuichuBn_i(),this.zantingBn2_i(),this.chongwanBn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "zantingBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tuichuBn_i = function () {
		var t = new eui.Image();
		this.tuichuBn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 26;
		t.height = 50;
		t.name = "tuichuBn";
		t.source = "tuichu_png";
		t.width = 50;
		t.x = 72;
		t.y = 410;
		return t;
	};
	_proto.zantingBn2_i = function () {
		var t = new eui.Image();
		this.zantingBn2 = t;
		t.name = "zantingBn2";
		t.source = "zanting2_png";
		t.x = 466;
		t.y = 181;
		return t;
	};
	_proto.chongwanBn_i = function () {
		var t = new eui.Image();
		this.chongwanBn = t;
		t.name = "chongwanBn";
		t.source = "chongwanBn_png";
		t.x = 259;
		t.y = 186.5;
		return t;
	};
	_proto.paodao_i = function () {
		var t = new eui.Image();
		this.paodao = t;
		t.source = "paotao_png";
		t.x = 233;
		t.y = 0;
		return t;
	};
	_proto.tubiao_i = function () {
		var t = new eui.Image();
		this.tubiao = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 0;
		t.source = "tubiao_png";
		t.x = 290;
		t.y = 1;
		return t;
	};
	return GameMedSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GouWuMed.exml'] = window.GouWuMedSkin = (function (_super) {
	__extends(GouWuMedSkin, _super);
	function GouWuMedSkin() {
		_super.call(this);
		this.skinParts = ["Btyou","Btzuo","fanhuiBn","gouwuBn","ygouwuBn","Gjinbi","Gchengjiu","texta","textb","textc","textd","maidise","maidise2","zugoumai","goudise","gouqian","zugouqian","budise","buqian","zubuqian","zguanggaoBn","yguanggaoBn","shu_gao","guanbiBn","zuguanggao"];
		
		this.height = 480;
		this.width = 800;
		this.elementsContent = [this._Image1_i(),this.Btyou_i(),this.Btzuo_i(),this.fanhuiBn_i(),this.gouwuBn_i(),this.ygouwuBn_i(),this.Gjinbi_i(),this.Gchengjiu_i(),this.texta_i(),this.textb_i(),this.textc_i(),this.textd_i(),this.zugoumai_i(),this.zugouqian_i(),this.zubuqian_i(),this.zguanggaoBn_i(),this.yguanggaoBn_i(),this.zuguanggao_i()];
	}
	var _proto = GouWuMedSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "GouWuBg_png";
		return t;
	};
	_proto.Btyou_i = function () {
		var t = new eui.Image();
		this.Btyou = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.name = "Btyou";
		t.source = "Btyou_png";
		t.x = 643;
		t.y = 190;
		return t;
	};
	_proto.Btzuo_i = function () {
		var t = new eui.Image();
		this.Btzuo = t;
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 32;
		t.name = "Btzuo";
		t.source = "Btzuo_png";
		t.x = 157;
		t.y = 190;
		return t;
	};
	_proto.fanhuiBn_i = function () {
		var t = new eui.Image();
		this.fanhuiBn = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 49;
		t.name = "fanhuiBn";
		t.source = "fanhuiBn_png";
		t.x = 204.5;
		t.y = 415;
		return t;
	};
	_proto.gouwuBn_i = function () {
		var t = new eui.Image();
		this.gouwuBn = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 47;
		t.height = 95;
		t.name = "gouwuBn";
		t.source = "goumai_png";
		t.visible = false;
		t.width = 95;
		t.x = 584;
		t.y = 413;
		return t;
	};
	_proto.ygouwuBn_i = function () {
		var t = new eui.Image();
		this.ygouwuBn = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 47;
		t.height = 95;
		t.name = "gouwuBn";
		t.source = "ygoumai_png";
		t.visible = false;
		t.width = 95;
		t.x = 584;
		t.y = 413;
		return t;
	};
	_proto.Gjinbi_i = function () {
		var t = new eui.Label();
		this.Gjinbi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.italic = true;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xF49322;
		t.width = 107;
		t.x = 549.5;
		t.y = 11;
		return t;
	};
	_proto.Gchengjiu_i = function () {
		var t = new eui.Label();
		this.Gchengjiu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 30;
		t.italic = true;
		t.size = 30;
		t.text = "0111";
		t.textAlign = "left";
		t.textColor = 0xCC31FF;
		t.width = 114;
		t.x = 269;
		t.y = 9;
		return t;
	};
	_proto.texta_i = function () {
		var t = new eui.Label();
		this.texta = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 34;
		t.italic = true;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.width = 36;
		t.x = 297;
		t.y = 276;
		return t;
	};
	_proto.textb_i = function () {
		var t = new eui.Label();
		this.textb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 34;
		t.italic = true;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.width = 36;
		t.x = 366;
		t.y = 277;
		return t;
	};
	_proto.textc_i = function () {
		var t = new eui.Label();
		this.textc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 34;
		t.italic = true;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.width = 36;
		t.x = 434;
		t.y = 276;
		return t;
	};
	_proto.textd_i = function () {
		var t = new eui.Label();
		this.textd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 34;
		t.italic = true;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.width = 36;
		t.x = 501;
		t.y = 276;
		return t;
	};
	_proto.zugoumai_i = function () {
		var t = new eui.Group();
		this.zugoumai = t;
		t.x = 329;
		t.y = 212.5;
		t.elementsContent = [this.maidise_i(),this.maidise2_i()];
		return t;
	};
	_proto.maidise_i = function () {
		var t = new eui.Image();
		this.maidise = t;
		t.source = "maidise_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.maidise2_i = function () {
		var t = new eui.Image();
		this.maidise2 = t;
		t.source = "maidise2_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zugouqian_i = function () {
		var t = new eui.Group();
		this.zugouqian = t;
		t.visible = false;
		t.x = 329;
		t.y = 213.5;
		t.elementsContent = [this.goudise_i(),this.gouqian_i()];
		return t;
	};
	_proto.goudise_i = function () {
		var t = new eui.Image();
		this.goudise = t;
		t.source = "goudise_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gouqian_i = function () {
		var t = new eui.Label();
		this.gouqian = t;
		t.bold = true;
		t.italic = true;
		t.text = "asd";
		t.textAlign = "center";
		t.textColor = 0xf7dd16;
		t.x = 48;
		t.y = 5.5;
		return t;
	};
	_proto.zubuqian_i = function () {
		var t = new eui.Group();
		this.zubuqian = t;
		t.visible = false;
		t.x = 329;
		t.y = 213.5;
		t.elementsContent = [this.budise_i(),this.buqian_i()];
		return t;
	};
	_proto.budise_i = function () {
		var t = new eui.Image();
		this.budise = t;
		t.source = "budise_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.buqian_i = function () {
		var t = new eui.Label();
		this.buqian = t;
		t.bold = true;
		t.italic = true;
		t.text = "555";
		t.textAlign = "center";
		t.textColor = 0xd4d4d4;
		t.x = 44;
		t.y = 6.5;
		return t;
	};
	_proto.zguanggaoBn_i = function () {
		var t = new eui.Image();
		this.zguanggaoBn = t;
		t.anchorOffsetX = 70.44;
		t.anchorOffsetY = 18.88;
		t.height = 35.7;
		t.name = "guanggaoBn";
		t.source = "zguanggao2_png";
		t.width = 145.6;
		t.x = 405.44;
		t.y = 24.53;
		return t;
	};
	_proto.yguanggaoBn_i = function () {
		var t = new eui.Image();
		this.yguanggaoBn = t;
		t.anchorOffsetX = 72.49;
		t.anchorOffsetY = 16.95;
		t.height = 35.7;
		t.name = "guanggaoBn";
		t.source = "yguanggao2_png";
		t.visible = false;
		t.width = 145.6;
		t.x = 406.49;
		t.y = 20.45;
		return t;
	};
	_proto.zuguanggao_i = function () {
		var t = new eui.Group();
		this.zuguanggao = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.shu_gao_i(),this.guanbiBn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "gaojiemian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shu_gao_i = function () {
		var t = new eui.Label();
		this.shu_gao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31;
		t.name = "shu_gao";
		t.size = 30;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0xFFC400;
		t.width = 51;
		t.x = 421;
		t.y = 297.5;
		return t;
	};
	_proto.guanbiBn_i = function () {
		var t = new eui.Image();
		this.guanbiBn = t;
		t.anchorOffsetX = 14;
		t.anchorOffsetY = 15;
		t.name = "guanbiBn";
		t.source = "guanbi_png";
		t.x = 634;
		t.y = 135.5;
		return t;
	};
	return GouWuMedSkin;
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
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/JieSuan.exml'] = window.JieSuanSkin = (function (_super) {
	__extends(JieSuanSkin, _super);
	function JieSuanSkin() {
		_super.call(this);
		this.skinParts = ["Apingfen","Spingfen","Cpingfen","Bpingfen","fanhuiBn","gengduoBn","nextBn","zailaiBn","zguanggaoBn","yguanggaoBn","chengjiu","huochengjiu","jinbi","huojinbi","shu_gao","guanbiBn","zuguanggao"];
		
		this.height = 480;
		this.width = 800;
		this.elementsContent = [this._Image1_i(),this.Apingfen_i(),this.Spingfen_i(),this.Cpingfen_i(),this.Bpingfen_i(),this.fanhuiBn_i(),this.gengduoBn_i(),this.nextBn_i(),this.zailaiBn_i(),this.zguanggaoBn_i(),this.yguanggaoBn_i(),this.chengjiu_i(),this.huochengjiu_i(),this.jinbi_i(),this.huojinbi_i(),this.zuguanggao_i()];
	}
	var _proto = JieSuanSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "jiesuanBg_png";
		return t;
	};
	_proto.Apingfen_i = function () {
		var t = new eui.Image();
		this.Apingfen = t;
		t.source = "Apingfen_png";
		t.visible = false;
		t.x = 153.5;
		t.y = 58;
		return t;
	};
	_proto.Spingfen_i = function () {
		var t = new eui.Image();
		this.Spingfen = t;
		t.source = "Spingfen_png";
		t.visible = false;
		t.x = 153.5;
		t.y = 67;
		return t;
	};
	_proto.Cpingfen_i = function () {
		var t = new eui.Image();
		this.Cpingfen = t;
		t.source = "Cpingfen_png";
		t.visible = false;
		t.x = 153.5;
		t.y = 67;
		return t;
	};
	_proto.Bpingfen_i = function () {
		var t = new eui.Image();
		this.Bpingfen = t;
		t.source = "Bpingfen_png";
		t.visible = false;
		t.x = 153.5;
		t.y = 67;
		return t;
	};
	_proto.fanhuiBn_i = function () {
		var t = new eui.Image();
		this.fanhuiBn = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 49;
		t.name = "fanhuiBn";
		t.source = "fanhuiBn_png";
		t.x = 204.5;
		t.y = 415;
		return t;
	};
	_proto.gengduoBn_i = function () {
		var t = new eui.Image();
		this.gengduoBn = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 47;
		t.height = 95;
		t.name = "gengduoBn";
		t.source = "gengduo_png";
		t.width = 95;
		t.x = 599.5;
		t.y = 413;
		return t;
	};
	_proto.nextBn_i = function () {
		var t = new eui.Image();
		this.nextBn = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 47;
		t.height = 95;
		t.name = "nextBn";
		t.source = "next_png";
		t.width = 95;
		t.x = 409.5;
		t.y = 413;
		return t;
	};
	_proto.zailaiBn_i = function () {
		var t = new eui.Image();
		this.zailaiBn = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 47;
		t.height = 95;
		t.name = "zailaiBn";
		t.source = "zailai_png";
		t.width = 95;
		t.x = 409.5;
		t.y = 413;
		return t;
	};
	_proto.zguanggaoBn_i = function () {
		var t = new eui.Image();
		this.zguanggaoBn = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 34;
		t.height = 65;
		t.name = "guanggaoBn";
		t.source = "zguanggao_png";
		t.width = 81;
		t.x = 408.5;
		t.y = 304.5;
		return t;
	};
	_proto.yguanggaoBn_i = function () {
		var t = new eui.Image();
		this.yguanggaoBn = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 34;
		t.height = 65;
		t.name = "guanggaoBn";
		t.source = "yguanggao_png";
		t.width = 81;
		t.x = 407.5;
		t.y = 304.5;
		return t;
	};
	_proto.chengjiu_i = function () {
		var t = new eui.Label();
		this.chengjiu = t;
		t.bold = true;
		t.italic = true;
		t.text = "Label";
		t.textColor = 0xCC31FF;
		t.x = 265;
		t.y = 8;
		return t;
	};
	_proto.huochengjiu_i = function () {
		var t = new eui.Label();
		this.huochengjiu = t;
		t.bold = true;
		t.italic = true;
		t.size = 25;
		t.text = "Label";
		t.textColor = 0xf1d1fc;
		t.x = 223.5;
		t.y = 276;
		return t;
	};
	_proto.jinbi_i = function () {
		var t = new eui.Label();
		this.jinbi = t;
		t.bold = true;
		t.italic = true;
		t.text = "Label";
		t.textColor = 0xF49322;
		t.x = 527;
		t.y = 8;
		return t;
	};
	_proto.huojinbi_i = function () {
		var t = new eui.Label();
		this.huojinbi = t;
		t.bold = true;
		t.italic = true;
		t.size = 25;
		t.text = "Label";
		t.textColor = 0xf9b970;
		t.x = 544;
		t.y = 278;
		return t;
	};
	_proto.zuguanggao_i = function () {
		var t = new eui.Group();
		this.zuguanggao = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.shu_gao_i(),this.guanbiBn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "gaojiemian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shu_gao_i = function () {
		var t = new eui.Label();
		this.shu_gao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31;
		t.name = "shu_gao";
		t.size = 30;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0xffc400;
		t.width = 51;
		t.x = 421;
		t.y = 297.5;
		return t;
	};
	_proto.guanbiBn_i = function () {
		var t = new eui.Image();
		this.guanbiBn = t;
		t.anchorOffsetX = 14;
		t.anchorOffsetY = 15;
		t.name = "guanbiBn";
		t.source = "guanbi_png";
		t.x = 634;
		t.y = 135.5;
		return t;
	};
	return JieSuanSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/XuanGuan.exml'] = window.XuanGuanSkin = (function (_super) {
	__extends(XuanGuanSkin, _super);
	function XuanGuanSkin() {
		_super.call(this);
		this.skinParts = ["XuanGuanBg","XG1","XG2","XG3","XG4","XG5","XG6","XG7","XG8","XG9","XG10","XG11","XG12","XG13","XG14","XG15","XG16","XG17","guanzu","fanhuiBn","gouwuBn","chengjiu","jinbi"];
		
		this.height = 480;
		this.width = 800;
		this.elementsContent = [this.guanzu_i(),this._Image1_i(),this.fanhuiBn_i(),this.gouwuBn_i(),this.chengjiu_i(),this.jinbi_i()];
	}
	var _proto = XuanGuanSkin.prototype;

	_proto.guanzu_i = function () {
		var t = new eui.Group();
		this.guanzu = t;
		t.x = 82;
		t.y = -347.4;
		t.elementsContent = [this.XuanGuanBg_i(),this.XG1_i(),this.XG2_i(),this.XG3_i(),this.XG4_i(),this.XG5_i(),this.XG6_i(),this.XG7_i(),this.XG8_i(),this.XG9_i(),this.XG10_i(),this.XG11_i(),this.XG12_i(),this.XG13_i(),this.XG14_i(),this.XG15_i(),this.XG16_i(),this.XG17_i()];
		return t;
	};
	_proto.XuanGuanBg_i = function () {
		var t = new eui.Image();
		this.XuanGuanBg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "XuanGuanBg_png";
		t.x = -82;
		t.y = -132.6;
		return t;
	};
	_proto.XG1_i = function () {
		var t = new MovieClipGroup();
		this.XG1 = t;
		t.height = 30;
		t.name = "XG1";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 0;
		t.y = 574.73;
		return t;
	};
	_proto.XG2_i = function () {
		var t = new MovieClipGroup();
		this.XG2 = t;
		t.height = 30;
		t.name = "XG2";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 124.01;
		t.y = 732.07;
		return t;
	};
	_proto.XG3_i = function () {
		var t = new MovieClipGroup();
		this.XG3 = t;
		t.height = 30;
		t.name = "XG3";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 353.68;
		t.y = 686.07;
		return t;
	};
	_proto.XG4_i = function () {
		var t = new MovieClipGroup();
		this.XG4 = t;
		t.height = 30;
		t.name = "XG4";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 367.35;
		t.y = 505.4;
		return t;
	};
	_proto.XG5_i = function () {
		var t = new MovieClipGroup();
		this.XG5 = t;
		t.height = 30;
		t.name = "XG5";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 699.69;
		t.y = 596.77;
		return t;
	};
	_proto.XG6_i = function () {
		var t = new MovieClipGroup();
		this.XG6 = t;
		t.height = 30;
		t.name = "XG6";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 851.03;
		t.y = 733.4;
		return t;
	};
	_proto.XG7_i = function () {
		var t = new MovieClipGroup();
		this.XG7 = t;
		t.height = 30;
		t.name = "XG7";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 1341.04;
		t.y = 683.41;
		return t;
	};
	_proto.XG8_i = function () {
		var t = new MovieClipGroup();
		this.XG8 = t;
		t.height = 30;
		t.name = "XG8";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 1383.03;
		t.y = 526.74;
		return t;
	};
	_proto.XG9_i = function () {
		var t = new MovieClipGroup();
		this.XG9 = t;
		t.height = 30;
		t.name = "XG9";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 1086.36;
		t.y = 444.74;
		return t;
	};
	_proto.XG10_i = function () {
		var t = new MovieClipGroup();
		this.XG10 = t;
		t.height = 30;
		t.name = "XG10";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 647.02;
		t.y = 340.72;
		return t;
	};
	_proto.XG11_i = function () {
		var t = new MovieClipGroup();
		this.XG11 = t;
		t.height = 30;
		t.name = "XG11";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 227.34;
		t.y = 214.71;
		return t;
	};
	_proto.XG12_i = function () {
		var t = new MovieClipGroup();
		this.XG12 = t;
		t.height = 30;
		t.name = "XG12";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 214.69;
		t.y = 60.73;
		return t;
	};
	_proto.XG13_i = function () {
		var t = new MovieClipGroup();
		this.XG13 = t;
		t.height = 30;
		t.name = "XG13";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 528.69;
		t.y = 97.4;
		return t;
	};
	_proto.XG14_i = function () {
		var t = new MovieClipGroup();
		this.XG14 = t;
		t.height = 30;
		t.name = "XG14";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 832.04;
		t.y = 0.72;
		return t;
	};
	_proto.XG15_i = function () {
		var t = new MovieClipGroup();
		this.XG15 = t;
		t.height = 30;
		t.name = "XG15";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 1003.37;
		t.y = 198.4;
		return t;
	};
	_proto.XG16_i = function () {
		var t = new MovieClipGroup();
		this.XG16 = t;
		t.height = 30;
		t.name = "XG16";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 1272.04;
		t.y = 163.1;
		return t;
	};
	_proto.XG17_i = function () {
		var t = new MovieClipGroup();
		this.XG17 = t;
		t.height = 30;
		t.name = "XG17";
		t.source1 = "xuanguan";
		t.width = 30;
		t.x = 1242.04;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "xgeui_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.fanhuiBn_i = function () {
		var t = new eui.Image();
		this.fanhuiBn = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 51;
		t.name = "fanhuiBn";
		t.source = "fanhuiBn_png";
		t.x = 113;
		t.y = 420;
		return t;
	};
	_proto.gouwuBn_i = function () {
		var t = new eui.Image();
		this.gouwuBn = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 48;
		t.name = "gouwuBn";
		t.source = "gouwu_png";
		t.x = 693;
		t.y = 420;
		return t;
	};
	_proto.chengjiu_i = function () {
		var t = new eui.Label();
		this.chengjiu = t;
		t.bold = true;
		t.italic = true;
		t.text = "Label";
		t.textColor = 0xcc31ff;
		t.x = 282;
		t.y = 3;
		return t;
	};
	_proto.jinbi_i = function () {
		var t = new eui.Label();
		this.jinbi = t;
		t.bold = true;
		t.italic = true;
		t.text = "Label";
		t.textColor = 0xf49322;
		t.x = 586;
		t.y = 3;
		return t;
	};
	return XuanGuanSkin;
})(eui.Skin);