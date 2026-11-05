(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 32,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"library/images/storage_atlas_.png", id:"storage_atlas_"},
		{src:"library/images/storage_atlas_2.png", id:"storage_atlas_2"},
		{src:"library/images/storage_atlas_3.png", id:"storage_atlas_3"},
		{src:"library/images/storage_atlas_4.png", id:"storage_atlas_4"},
		{src:"library/images/storage_atlas_5.png", id:"storage_atlas_5"},
		{src:"library/images/storage_atlas_6.png", id:"storage_atlas_6"},
		{src:"library/images/storage_atlas_7.png", id:"storage_atlas_7"},
		{src:"library/images/storage_atlas_8.png", id:"storage_atlas_8"},
		{src:"library/images/storage_atlas_9.png", id:"storage_atlas_9"},
		{src:"library/images/storage_atlas_10.png", id:"storage_atlas_10"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[446,602,520,520],[0,0,1200,600],[0,602,444,616]]},
		{name:"storage_atlas_3", frames: [[403,644,540,400],[0,644,401,558],[0,442,1200,200],[0,0,580,440],[582,0,580,440]]},
		{name:"storage_atlas_4", frames: [[542,402,348,609],[892,402,324,574],[0,0,540,400],[542,0,540,400],[0,402,540,400],[0,804,540,400]]},
		{name:"storage_atlas_5", frames: [[0,0,289,575],[0,577,394,394],[291,0,394,394],[687,0,394,394],[396,396,394,394],[396,792,394,394],[792,396,394,394],[792,792,394,394]]},
		{name:"storage_atlas_6", frames: [[792,0,394,394],[396,396,394,394],[396,792,394,394],[792,396,394,394],[792,792,394,394],[0,0,394,394],[0,396,394,394],[0,792,394,394],[396,0,394,394]]},
		{name:"storage_atlas_7", frames: [[792,698,280,500],[792,396,500,300],[0,0,394,394],[0,396,394,394],[0,792,394,394],[396,0,394,394],[792,0,394,394],[396,396,394,394],[396,792,394,394]]},
		{name:"storage_atlas_8", frames: [[522,1086,520,180],[0,1086,520,180],[604,764,300,300],[906,724,300,300],[864,0,300,380],[0,322,300,380],[302,322,300,380],[604,382,300,380],[0,704,300,380],[302,704,300,380],[906,382,300,340],[0,0,430,320],[432,0,430,320]]},
		{name:"storage_atlas_9", frames: [[1008,939,200,300],[806,939,200,300],[0,604,280,280],[806,727,320,210],[0,302,300,300],[0,0,300,300],[564,564,200,342],[0,886,280,280],[302,282,280,280],[564,908,240,281],[766,444,240,281],[1008,444,240,281],[282,604,280,280],[282,886,280,280],[302,0,280,280],[584,0,330,220],[916,0,330,220],[584,222,330,220],[916,222,330,220]]},
		{name:"storage_atlas_10", frames: [[1032,727,173,106],[219,1016,66,116],[304,710,158,130],[1154,835,120,120],[1032,835,120,120],[0,457,150,150],[600,406,150,150],[448,406,150,150],[296,404,150,150],[0,609,150,150],[456,558,150,150],[304,558,150,150],[152,556,150,150],[1056,493,150,150],[904,486,150,150],[752,486,150,150],[890,727,140,140],[748,720,140,140],[606,720,140,140],[464,710,140,140],[402,852,120,120],[296,222,180,180],[366,974,120,120],[488,984,120,120],[646,862,120,120],[524,862,120,120],[768,862,120,120],[287,1016,48,48],[1068,268,120,223],[1068,0,151,266],[156,222,138,238],[0,222,154,233],[0,852,400,40],[610,1093,370,12],[478,324,340,80],[1012,957,120,120],[1134,957,120,120],[52,761,50,50],[1260,299,40,147],[610,1044,50,41],[1208,299,50,210],[1273,0,20,197],[1221,0,50,297],[0,0,250,220],[152,708,150,142],[252,0,250,220],[820,324,160,160],[890,869,120,120],[0,894,120,120],[610,984,193,58],[0,761,50,50],[0,1016,71,135],[982,324,71,141],[73,1016,71,135],[1208,511,71,141],[146,1016,71,135],[1207,654,71,141],[752,406,60,60],[152,462,60,60],[214,462,60,60],[608,558,60,60],[670,558,60,60],[122,894,120,120],[244,894,120,120],[805,991,100,100],[907,991,100,100],[608,638,280,80],[890,645,280,80],[504,0,280,160],[786,0,280,160],[504,162,280,160],[786,162,280,160]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.assessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.assessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.assessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_cards_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_hero_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body1 = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.card_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.card_10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.card_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.card_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.card_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.card_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.card_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.card_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.card_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.card_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.card_9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.countdown_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.countdown_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.countdown_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.countdown_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.countdown_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decorative_pillow_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.free_games_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.full_sreen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.full_sreen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.herald_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_10_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_11_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_12_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_13_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_14_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_15_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_16_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_17_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_18_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_19_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_20_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_21_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_22_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_23_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_5_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_6_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_7_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_8_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.maroon_fireworks_9_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mini_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.mini_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mulan_face1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mulan_face2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mulan_face3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.prize_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.shoes11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.shoes22_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.shoes33_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.snowflake_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.snowflake_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.snowflake_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.snowflake_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.snowflake_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.sound_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.sound_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.title_completed_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.title_en_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_help_en_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_help_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_win_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.title_win_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.preloader_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("AiVAAICVhiICWBiIiWBjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F82991").s().p("AkqAAIEqjGIErDGIkrDHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-20,60,40);
p.frameBounds = [rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B27B0","#9325AD","#691A99"],[0,0.325,1],0,4,0,0,4,130).s().p("AtyNzQlulugBoFQABoEFuluQFuluIEgBQIFABFuFuQFvFuAAIEQAAIFlvFuQluFvoFAAQoEAAlulvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125,250,250);
p.frameBounds = [rect];


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B27B0","#9325AD","#691A99"],[0,0.325,1],4.6,124.8,0,4.6,124.8,255.8).s().p("AuWOWQl8l8AAoaQAAoZF8l9QF9l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F9oaAAQoZAAl9l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFCCFF"],[0,1],0,-49.9,0,50).s().p("AlhHmQgVgOgMgWQgMgZAAgbIAAsbQAAgbAMgZQAMgWAVgOQAVgOAYAAQAYAAAWAOIJoGPQAVANAMAYQAMAYAAAZQAAAagMAYQgMAYgVANIpoGPQgWAOgYAAQgYAAgVgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-50,80,100);
p.frameBounds = [rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A07FeQigAAAAihIAAl5QAAihCgAAMAp3AAAQCgAAAAChIAAF5QAAChigAAg");
	this.shape.setTransform(150,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,70);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("A0TgGIAAhkMAonAAAIAABkQqGBxqKAAQqIAAqPhxg");
	this.shape.setTransform(130,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,21.5);
p.frameBounds = [rect];


(lib.preloader_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F77EBB","#F82991"],[0,1],0,17,0,-17).s().p("Ax8CqQhHAAgygyQgygyABhGQgBhFAygyQAygyBHABMAj5AAAQBHgBAyAyQAxAyAABFQAABGgxAyQgyAyhHAAg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F77EBB","#F82991"],[0,1],0,-25,0,25).s().p("AyvD5QhTABg6g7Qg6g7AAhTIAAhiQAAhTA6g6QA6g6BTAAMAlfAAAQBTAAA6A6QA6A6ABBTIAABiQgBBTg6A7Qg6A7hTgBg");
	this.shape_1.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,280,50);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#6699FF","#66CCFF"],[0,0.494,1],20,15,20,-15).s().p("A0TCVIAAkqMAonAAAIAAEqg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,30);
p.frameBounds = [rect];


(lib.preloader_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.preloader_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F82991").s().p("AAADWIgDADIAAgHQhihIhJgjQhMgkgZguQgZgsACg0QABg2AygvQAxgvBIAIQBFAHA5BQQA6hQBFgHQBIgIAxAvQAyAvACA2QABA0gZAsQgZAuhMAkQhJAkhiBHIAAAHIgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-21.7,60,43.6);
p.frameBounds = [rect];


(lib.preloader_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.instruction_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("text", "100px 'Arial'");
	this.text.lineHeight = 114;
	this.text.lineWidth = 317;
	this.text.setTransform(-158.4,-55.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160.4,-57.8,321,115.8);
p.frameBounds = [rect];


(lib.instruction_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.title_win_ru_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_win_ru_img();
	this.instance.setTransform(-140,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.title_win_en_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_win_en_img();
	this.instance.setTransform(-140,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.title_loss_ru_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_loss_ru_img();
	this.instance.setTransform(-140,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.title_loss_en_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_loss_en_img();
	this.instance.setTransform(-140,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.text_bubble_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.text_bubble_img();
	this.instance.setTransform(-147.5,-106.9,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.5,-106.9,311.7,232);
p.frameBounds = [rect];


(lib.text_bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.text_bubble_2_img();
	this.instance.setTransform(-147.5,-106.9,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.5,-106.9,311.7,232);
p.frameBounds = [rect];


(lib.shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_img();
	this.instance.setTransform(-98.6,-29,1.022,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.6,-29,197.3,58);
p.frameBounds = [rect];


(lib.prize_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.prize_1_img();
	this.instance.setTransform(-150,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-170,300,340);
p.frameBounds = [rect];


(lib.prize_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.prize_1_img();
	this.instance.setTransform(-150,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-170,300,340);
p.frameBounds = [rect];


(lib.mulan_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_1
	this.instance = new lib.hair1_img();
	this.instance.setTransform(-52.5,-310,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// round_3
	this.instance_1 = new lib.assessory1_img();
	this.instance_1.setTransform(-188.7,45.3,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// round_4
	this.instance_2 = new lib.dress1_img();
	this.instance_2.setTransform(-135.6,-141.3,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// round_2
	this.instance_3 = new lib.shoes1_img();
	this.instance_3.setTransform(-44.7,239,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 3
	this.instance_4 = new lib.mulan_face1_img();
	this.instance_4.setTransform(-45.5,-260.6,0.392,0.392);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 2
	this.instance_5 = new lib.body1();
	this.instance_5.setTransform(-145.6,-160.4,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-188.7,-310,355.5,655.3);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.jasmine_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress2_img();
	this.instance.setTransform(-196.5,-70.2,0.8,0.8);

	this.instance_1 = new lib.dress0_img();
	this.instance_1.setTransform(-133.8,-60.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196.5,-70.2,355.2,492.8);
p.frameBounds = [rect, new cjs.Rectangle(-133.8,-60.9,231.2,460)];


(lib.jasmine_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shoes2_img();
	this.instance.setTransform(-19.6,-76.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.6,-76.4,56.8,112.8);
p.frameBounds = [rect, null];


(lib.jasmine_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.assessory2_img();
	this.instance.setTransform(-189.2,16.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189.2,16.4,52.8,92.8);
p.frameBounds = [rect, null];


(lib.jas_fringle_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hair2_img();
	this.instance.setTransform(-27,-218.8,0.8,0.8);

	this.instance_1 = new lib.hair0_img();
	this.instance_1.setTransform(-34.3,-185.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-218.8,110.4,190.4);
p.frameBounds = [rect, new cjs.Rectangle(-34.3,-185.1,120,223)];


(lib.indicator_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.indicator_1_img();
	this.instance.setTransform(-200,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,400,40);
p.frameBounds = [rect];


(lib.indicator_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,370,12);
p.frameBounds = [rect];


(lib.decorative_pillow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decorative_pillow_img();
	this.instance.setTransform(-160,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-105,320,210);
p.frameBounds = [rect];


(lib.countdown_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_3_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-120,-120,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.countdown_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-120,-120,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.countdown_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-120,-120,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.countdown_0_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_0_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-120,-120,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_10_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_9_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_8_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_7_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_6_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_5_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_4_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.body_title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_start_level_en_img();
	this.instance.setTransform(-165,-110);

	this.instance_1 = new lib.title_start_level_ru_img();
	this.instance_1.setTransform(-165,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-110,330,220);
p.frameBounds = [rect, rect];


(lib.body_title_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_next_round_en_img();
	this.instance.setTransform(-165,-110);

	this.instance_1 = new lib.title_next_round_ru_img();
	this.instance_1.setTransform(-165,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-110,330,220);
p.frameBounds = [rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-270,-200);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-270,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-200,540,400);
p.frameBounds = [rect, rect];


(lib.body_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_help_en_img();
	this.instance.setTransform(-290,-220);

	this.instance_1 = new lib.title_help_ru_img();
	this.instance_1.setTransform(-290,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-220,580,440);
p.frameBounds = [rect, rect];


(lib.body_title_completed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_completed_en_img();
	this.instance.setTransform(-115,-33,0.821,0.821);

	this.instance_1 = new lib.title_completed_ru_img();
	this.instance_1.setTransform(-120,-34,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-33,230,65.7);
p.frameBounds = [rect, new cjs.Rectangle(-120,-34,240,68.6)];


(lib.body_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_en_2_img();
	this.instance.setTransform(-270,-200);

	this.instance_1 = new lib.title_ru_2_img();
	this.instance_1.setTransform(-270,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-200,540,400);
p.frameBounds = [rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-270,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-200,540,400);
p.frameBounds = [rect];


(lib.bg_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_hero_img();
	this.instance.setTransform(-140,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-250,280,500);
p.frameBounds = [rect];


(lib.bg_cards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_cards_img();
	this.instance.setTransform(-260,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,520);
p.frameBounds = [rect];


(lib.ariel_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress3_img();
	this.instance.setTransform(-111.6,-64.6,0.8,0.8);

	this.instance_1 = new lib.dress0_img();
	this.instance_1.setTransform(-94.6,-60.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.6,-64.6,259.2,459.2);
p.frameBounds = [rect, new cjs.Rectangle(-94.6,-60.9,231.2,460)];


(lib.ariel_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shoes3_img();
	this.instance.setTransform(-72.4,-75.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.4,-75.4,56.8,112.8);
p.frameBounds = [rect, null];


(lib.ariel_fringle_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hair3_img();
	this.instance.setTransform(-44.6,-160.2,0.8,0.8);

	this.instance_1 = new lib.hair0_img();
	this.instance_1.setTransform(-46.3,-137.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.6,-160.2,123.2,186.4);
p.frameBounds = [rect, new cjs.Rectangle(-46.3,-137.7,120,223)];


(lib.ariel_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.assessory3_img();
	this.instance.setTransform(-149.2,-7,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.2,-7,126.4,104);
p.frameBounds = [rect, null];


(lib.anna_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress1_img();
	this.instance.setTransform(-143.7,-52.3,0.8,0.8);

	this.instance_1 = new lib.dress0_img();
	this.instance_1.setTransform(-115.2,-56.5,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.7,-52.3,320.8,446.4);
p.frameBounds = [rect, new cjs.Rectangle(-115.2,-56.5,231.2,460)];


(lib.anna_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shoes1_img();
	this.instance.setTransform(-19.9,-62.3,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.9,-62.3,56.8,112.8);
p.frameBounds = [rect, null];


(lib.anna_fringle_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hair1_img();
	this.instance.setTransform(-42.5,-162.5,0.8,0.8);

	this.instance_1 = new lib.hair0_img();
	this.instance_1.setTransform(-47.1,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-162.5,120.8,212.8);
p.frameBounds = [rect, new cjs.Rectangle(-47.1,-118,120,223)];


(lib.anna_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.assessory1_img();
	this.instance.setTransform(-198.4,33.7,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-198.4,33.7,138.4,84.8);
p.frameBounds = [rect, null];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.body_curtain_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_title_en_img();
	this.instance.setTransform(-260,-90);

	this.instance_1 = new lib.curtain_title_ru_img();
	this.instance_1.setTransform(-260,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-90,520,180);
p.frameBounds = [rect, rect];


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.Snowflake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowflake_1_img();
	this.instance.setTransform(-20,-20,0.667,0.667);

	this.instance_1 = new lib.snowflake_2_img();
	this.instance_1.setTransform(-20,-20,0.667,0.667);

	this.instance_2 = new lib.snowflake_3_img();
	this.instance_2.setTransform(-20,-20,0.667,0.667);

	this.instance_3 = new lib.snowflake_4_img();
	this.instance_3.setTransform(-20,-20,0.667,0.667);

	this.instance_4 = new lib.snowflake_5_img();
	this.instance_4.setTransform(-20,-20,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.snowfall_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(400,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,500);
p.frameBounds = [rect];


(lib.shine_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_6_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.maroon_fireworks_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvnHzIAAvmIfOAAIAAPmg");
	this.shape.setTransform(300,125,3,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,600,250);
p.frameBounds = [rect];


(lib.maroon_fireworks_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// animation
	this.instance = new lib.maroon_fireworks_1_img();
	this.instance.setTransform(-197,-197);

	this.instance_1 = new lib.maroon_fireworks_2_img();
	this.instance_1.setTransform(-197,-197);

	this.instance_2 = new lib.maroon_fireworks_3_img();
	this.instance_2.setTransform(-197,-197);

	this.instance_3 = new lib.maroon_fireworks_4_img();
	this.instance_3.setTransform(-197,-197);

	this.instance_4 = new lib.maroon_fireworks_5_img();
	this.instance_4.setTransform(-197,-197);

	this.instance_5 = new lib.maroon_fireworks_6_img();
	this.instance_5.setTransform(-197,-197);

	this.instance_6 = new lib.maroon_fireworks_7_img();
	this.instance_6.setTransform(-197,-197);

	this.instance_7 = new lib.maroon_fireworks_8_img();
	this.instance_7.setTransform(-197,-197);

	this.instance_8 = new lib.maroon_fireworks_9_img();
	this.instance_8.setTransform(-197,-197);

	this.instance_9 = new lib.maroon_fireworks_10_img();
	this.instance_9.setTransform(-197,-197);

	this.instance_10 = new lib.maroon_fireworks_11_img();
	this.instance_10.setTransform(-197,-197);

	this.instance_11 = new lib.maroon_fireworks_12_img();
	this.instance_11.setTransform(-197,-197);

	this.instance_12 = new lib.maroon_fireworks_13_img();
	this.instance_12.setTransform(-197,-197);

	this.instance_13 = new lib.maroon_fireworks_14_img();
	this.instance_13.setTransform(-197,-197);

	this.instance_14 = new lib.maroon_fireworks_15_img();
	this.instance_14.setTransform(-197,-197);

	this.instance_15 = new lib.maroon_fireworks_16_img();
	this.instance_15.setTransform(-197,-197);

	this.instance_16 = new lib.maroon_fireworks_17_img();
	this.instance_16.setTransform(-197,-197);

	this.instance_17 = new lib.maroon_fireworks_18_img();
	this.instance_17.setTransform(-197,-197);

	this.instance_18 = new lib.maroon_fireworks_19_img();
	this.instance_18.setTransform(-197,-197);

	this.instance_19 = new lib.maroon_fireworks_20_img();
	this.instance_19.setTransform(-197,-197);

	this.instance_20 = new lib.maroon_fireworks_21_img();
	this.instance_20.setTransform(-197,-197);

	this.instance_21 = new lib.maroon_fireworks_22_img();
	this.instance_21.setTransform(-197,-197);

	this.instance_22 = new lib.maroon_fireworks_23_img();
	this.instance_22.setTransform(-197,-197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197,-197,394,394);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_img();
	this.instance.setTransform(-16,-16,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.flash_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_4_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.sound_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_4_img();
	this.instance.setTransform(-9.2,-8.6,0.18,0.18,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sound_3_img();
	this.instance_1.setTransform(-25,-25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.sound_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_3_img();
	this.instance.setTransform(-25,-25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.remove_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// bg
	this.instance = new lib.remove_1_img();
	this.instance.setTransform(-30,-30,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, null];


(lib.play_again_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-80,-80,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.play_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_1_img();
	this.instance.setTransform(-40,-40,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.more_games_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_8_img();
	this.instance.setTransform(-29.2,-27.7,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.2,-27.7,58.5,55.4);
p.frameBounds = [rect];


(lib.more_games_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_6_img();
	this.instance.setTransform(-6.5,-38.6,0.26,0.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.5,-38.6,13,77.3);
p.frameBounds = [rect];


(lib.more_games_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_5_img();
	this.instance.setTransform(-3.9,-38.4,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3.9,-38.4,7.8,76.9);
p.frameBounds = [rect];


(lib.more_games_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_4_img();
	this.instance.setTransform(-6.2,-26.2,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.2,-26.2,12.5,52.4);
p.frameBounds = [rect];


(lib.more_games_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_3_img();
	this.instance.setTransform(-25,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-20.5,50,41);
p.frameBounds = [rect];


(lib.more_games_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_2_img();
	this.instance.setTransform(-7.8,-28.7,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.8,-28.7,15.6,57.4);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_1_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.more_games_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-80,-80,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.mini_play_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mini_play_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.mini_play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mini_play_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.logotype_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logotype_img();
	this.instance.setTransform(-170,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4CGPQihABAAigIAAnfQAAigChABMAwFAAAQChgBAACgIAAHfQAACgihgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-40,340,80);
p.frameBounds = [rect];


(lib.logo_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DDDDDD","#FFFFFF"],[0,1],-4.4,51.8,4.8,-47.6).s().p("AEFGGQgTgNgIgiQhLA3hPAAQhnAAhYhMQgsgmgbhAQgag/AAhOQAAiQBohZQBohaCVAAQBZAABJAhQBOAkAABMQAABGg3AAQgQAAgQgIIgTgJQgLgHgMgFQgxgWgsAAQg8AAgyAoQgzAoAABMQAABUArArQAqAsA4AAQApAAAngOQAAg4AGgkQAGgmATgQQATgQAnAAQAnAAASAQQATAPAJAnQAIArAAA1QAAA/gIAiQgJAngSAPQgSAQgnAAQgmAAgSgOgA9fFYQhegSgLhMQgKhBAAibQAAiZAKhBQAKhLBfgTQBMgOBWAAQCgAABfBWQBgBXAACZQAACbhgBXQhfBWigAAQhWAAhMgOgA7xiUQgNAMgDAfQgHA1AABNQAABYAHA2QADAgANAKQAOAMAmAAQA/AAAlg0QAlg0AAhXQAAhVglg0Qglgzg/AAQgmAAgOAKgAMMEMQgJgqAAiHQAAh7AJgrQAKhPBcAAQAwAAAWASQAWASgCAxIADAAQA6hVBMAAQApAAAaAcQAaAcAAArQAAAqgYAZQgYAbgjAAQgYAAgYgSQgYgSgTAAQg4AAAABoIAACXQAAApgZAZQgaAYgqAAQhZAAgKhQgAY2EsQgzgZAAg1QAAhAAzAAQAGAAA7AbQA7AbAsAAQAuAAAAgbQAAgYhAgUQgUgGg/gaQhygwAAhdQAAg5AognQBDhACHAAQDJAAAABhQAAA+grAAQgRAAgygWQgzgXglAAQgyAAAAAaQAAAbA2ARIBeAfQB1AoAABmQAAAvgYAjQgYAigoARQhHAchBAAQiCAAg7gagAUZCzQgIg7AAivQAAioAIg9QAJhDBFAAQBFAAAIBDQAIA9AACoQAACvgIA7QgIBFhEAAQhGAAgJhFgAx8DDQghgCgSgQQgRgQgFgiQgIg4AAiSQAAhoAIgmQAIhEBBAAQBCAAAIBEQAIAmAABoQAAAWgDArIgCA6QAAAWAJAKQAJAKAVAAQAkAAApgMQAsgOAIAAQA2AAAAA/QAABBhPAEQgxAEgoAAQhOAAg1gFgAIPBUQgJgrAAhXQAAhVAJgoQAHg7A8AAQA8AAAIA7QAIAoAABVQAABXgIArQgIA8g7AAQg9AAgHg8gAphByQhcAAAAhKQAAhJBcAAICpAAQBcAAAABIQAABLhcAAgAIfkkQgTgRAAgdQAAgeATgRQAUgSAfAAQAfAAATASQATARAAAeQAAAdgTARQgTASgfAAQgfAAgUgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200.3,-40.4,400.8,80.9);
p.frameBounds = [rect];


(lib.logo_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],-0.3,-34.4,0.3,34.5).s().p("AlyEJQiZhuAAibQAAiaCZhuQCahuDYAAQDZAACZBuQCbBugBCaQABCbibBuQiZBujZAAQjYAAiahug");
	this.shape.setTransform(-0.4,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F38EB0","#F38EB0","#EB3F79"],[0,0.325,1],-0.4,15.9,0,-0.4,15.9,46.9).s().p("AnZHZQjDjEAAkVQAAkUDDjFQDFjDEUAAQEVAADEDDQDFDFgBEUQABEVjFDEQjEDFkVgBQkUABjFjFg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-67,134,134);
p.frameBounds = [rect];


(lib.logo_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],-0.3,-34.4,0.3,34.5).s().p("AlyEJQiZhuAAibQAAiaCZhuQCahuDYAAQDZAACZBuQCbBugBCaQABCbibBuQiZBujZAAQjYAAiahug");
	this.shape.setTransform(-0.4,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#EB3F79","#EB3F79","#AC1356"],[0,0.325,1],-0.4,15.9,0,-0.4,15.9,46.9).s().p("AnZHZQjDjEAAkVQAAkUDDjFQDFjDEUAAQEVAADEDDQDFDFgBEUQABEVjFDEQjEDFkVgBQkUABjFjFg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-67,134,134);
p.frameBounds = [rect];


(lib.logo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],-0.3,-34.4,0.3,34.5).s().p("AlyEJQiZhuAAibQAAiaCZhuQCahuDYAAQDZAACZBuQCbBugBCaQABCbibBuQiZBujZAAQjYAAiahug");
	this.shape.setTransform(-0.4,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#9B27B0","#9325AD","#691A99"],[0,0.325,1],-0.4,15.9,0,-0.4,15.9,46.9).s().p("AnZHZQjDjEAAkVQAAkUDDjFQDFjDEUAAQEVAADEDDQDFDFgBEUQABEVjFDEQjEDFkVgBQkUABjFjFg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-67,134,134);
p.frameBounds = [rect];


(lib.instruction_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.instruction_img();
	this.instance.setTransform(-80,-80,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.full_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.full_sreen_1_img();
	this.instance.setTransform(-35,-35,0.583,0.583);

	this.instance_1 = new lib.full_sreen_2_img();
	this.instance_1.setTransform(-35,-35,0.583,0.583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, rect];


(lib.free_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_2_img();
	this.instance.setTransform(-40,-40,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.free_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_1_img();
	this.instance.setTransform(-40,-40,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.facebook_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.facebook_img();
	this.instance.setTransform(-60,-60,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.Cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0});

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aj2D3QhnhnAAiQQAAiPBnhnQBnhnCPAAQCQAABnBnQBnBnAACPQAACQhnBnQhnBniQAAQiPAAhnhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.credits_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.beam_light_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0.024,0.494,0.984],-75.1,0,74.9,0).s().p("EgLsAnEMAAAhOHIXZAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-250,150,500);
p.frameBounds = [rect];


(lib.banner_play_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.banner_play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.preloader_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-50,80,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-44,-52.5,84,105), new cjs.Rectangle(-48,-55,88,110), new cjs.Rectangle(-52,-57.5,92,115), new cjs.Rectangle(-56,-60,96,120), new cjs.Rectangle(-60,-62.5,100,125), new cjs.Rectangle(-57.9,-62.5,100,125), new cjs.Rectangle(-55.9,-62.5,100,125), new cjs.Rectangle(-53.9,-62.5,100,125), new cjs.Rectangle(-51.9,-62.5,100,125), new cjs.Rectangle(-50,-62.5,100,125), new cjs.Rectangle(-48,-62.5,100,125), new cjs.Rectangle(-46,-62.5,100,125), new cjs.Rectangle(-44,-62.5,100,125), new cjs.Rectangle(-42,-62.5,100,125), new cjs.Rectangle(-40,-62.5,100,125), new cjs.Rectangle(-40,-60,96,120), new cjs.Rectangle(-40,-57.5,92,115), new cjs.Rectangle(-40,-55,88,110), new cjs.Rectangle(-40,-52.5,84,105), rect=new cjs.Rectangle(-40,-50,80,100), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.078)").s().p("AvlEeQAAmdElklQElklGcABQGegBElElQEHEIAbFnQyhpHrNRGQhdjDAAjpg");
	this.shape.setTransform(-0.1,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.instance = new lib.preloader_16_mc();
	this.instance.setTransform(0,0,0.8,0.8);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.preloader_15_mc();
	this.instance_1.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.preloader_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.preloader_15_mc();
	this.instance_3.setTransform(0,0,1.077,1.077);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.preloader_18_mc();
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.preloader_17_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_14_mc();
	this.instance.setTransform(0,0.1,0.462,0.462,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AntHuQjOjNAAkhQAAkgDOjOQAygyA5gmQCph1DZAAQDaAACqB1QA4AmAzAyQDMDOABEgQgBEhjMDNQjODOkhAAQkgAAjNjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkHkIgBl0QABlzEHkIQBChBBHgxQDbiWEXAAQEYAADbCWQBIAxBBBBQEIEIAAFzQAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// decor
	this.instance = new lib.preloader_20_mc();
	this.instance.setTransform(130,32,0.4,0.4);

	this.instance_1 = new lib.preloader_20_mc();
	this.instance_1.setTransform(130,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAVCVIgVgYIgUAYIxtAAQg7gBgqgrQgrgqgCg8IAAgFQACg8ArgqQAqgrA7gCIRtAAIAUAaIAVgaIRtAAQA7ACArArQAqAqACA8IAAAFQgCA8gqAqQgrArg7ABg");
	mask.setTransform(130,15);

	// shadow
	this.instance_2 = new lib.preloader_10_mc();

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// animation
	this.instance_3 = new lib.preloader_7_mc();
	this.instance_3.setTransform(0,0,0.003,1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1},99).wait(1));

	// bg
	this.instance_4 = new lib.preloader_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// shadow
	this.instance_5 = new lib.preloader_11_mc();
	this.instance_5.setTransform(-20,-20);
	this.instance_5.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,70);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-525,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-455,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-385,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-315,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-245,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-105.5,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-175,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(525,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(455,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(385,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(315,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(245,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(175,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(105,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(35,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-555,-21.7,1110,43.6);
p.frameBounds = [rect];


(lib.preloader_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-560,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-490,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-420,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-350,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-280,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-210,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-140,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(-70,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(560,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(490,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(420,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(350,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(280,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(210,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(140,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(70,0);

	this.instance_16 = new lib.preloader_2_mc();
	this.instance_16.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-590,-21.7,1180,43.6);
p.frameBounds = [rect];


(lib.preloader_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_4_mc();
	this.instance.setTransform(400,50);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.preloader_4_mc();
	this.instance_1.setTransform(400,550);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.preloader_3_mc();
	this.instance_2.setTransform(400,500);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.preloader_3_mc();
	this.instance_3.setTransform(400,100);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.preloader_4_mc();
	this.instance_4.setTransform(400,450);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.preloader_4_mc();
	this.instance_5.setTransform(400,150);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.preloader_3_mc();
	this.instance_6.setTransform(400,400);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.preloader_3_mc();
	this.instance_7.setTransform(400,200);
	this.instance_7.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_8 = new lib.preloader_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-200,540,400);
p.frameBounds = [rect];


(lib.title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_help_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-289.5,-219.5,580,440);
p.frameBounds = [rect];


(lib.title_completed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_completed_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-32.5,230,65.7);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_2_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-200,540,400);
p.frameBounds = [rect];


(lib.prize_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1_round_1:0,location_1_round_2:1,location_1_round_3:2,location_1_round_4:3,location_2_round_1:4,location_2_round_2:5,location_2_round_3:6,location_2_round_4:7,location_3_round_1:8,location_3_round_2:9,location_3_round_3:10,location_3_round_4:11});

	// graph
	this.instance = new lib.hair1_img();
	this.instance.setTransform(-51,-348,1.203,1.203);

	this.instance_1 = new lib.shoes11_img();
	this.instance_1.setTransform(-39,92,1.8,1.8);

	this.instance_2 = new lib.assessory1_img();
	this.instance_2.setTransform(-154,-12,1.901,1.901);

	this.instance_3 = new lib.dress1_img();
	this.instance_3.setTransform(-177,-120,1.165,1.165);

	this.instance_4 = new lib.hair2_img();
	this.instance_4.setTransform(-51,-352,1.26,1.26);

	this.instance_5 = new lib.shoes22_img();
	this.instance_5.setTransform(-43,76,1.859,1.859);

	this.instance_6 = new lib.assessory2_img();
	this.instance_6.setTransform(-71,-23,2.137,2.137);

	this.instance_7 = new lib.dress2_img();
	this.instance_7.setTransform(-226,-120,1.136,1.136);

	this.instance_8 = new lib.hair3_img();
	this.instance_8.setTransform(-60,-332,1.245,1.245);

	this.instance_9 = new lib.shoes33_img();
	this.instance_9.setTransform(-33,103,1.652,1.652);

	this.instance_10 = new lib.assessory3_img();
	this.instance_10.setTransform(-114,-62,1.708,1.708);

	this.instance_11 = new lib.dress3_img();
	this.instance_11.setTransform(-152,-126,1.132,1.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// decor
	this.instance_12 = new lib.decorative_pillow_mc();
	this.instance_12.setTransform(20,280);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-348,181.7,320);
p.frameBounds = [rect, new cjs.Rectangle(-140,92,320,293), new cjs.Rectangle(-154,-12,328.9,201.5), new cjs.Rectangle(-177,-120,467.2,650), new cjs.Rectangle(-51,-352,174,300), new cjs.Rectangle(-140,76,320,309), new cjs.Rectangle(-71,-23,141.1,247.9), new cjs.Rectangle(-226,-120,504.6,700), new cjs.Rectangle(-60,-332,191.7,290), new cjs.Rectangle(-140,103,320,282), new cjs.Rectangle(-114,-62,269.9,222.1), new cjs.Rectangle(-152,-126,366.9,650)];


(lib.prize_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:109});

	// foreground
	this.instance = new lib.prize_1_mc();
	this.instance.setTransform(0,0,0.412,0.412);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},19).wait(40).to({alpha:0.012},10).wait(41));

	// body
	this.body_mc = new lib.prize_3_mc();
	this.body_mc.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(19).to({x:500,y:-80,alpha:1},40).wait(30).to({alpha:0.012},20).wait(1));

	// background
	this.instance_1 = new lib.prize_2_mc();
	this.instance_1.setTransform(0,0,0.412,0.412);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:1},19).wait(40).to({alpha:0.012},10).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-348,192.4,418);
p.frameBounds = [rect, new cjs.Rectangle(-66.3,-348,197,423.3), new cjs.Rectangle(-71,-348,201.7,428.6), new cjs.Rectangle(-75.6,-348,206.3,433.8), new cjs.Rectangle(-80.3,-348,211,439.1), new cjs.Rectangle(-84.9,-348,215.6,444.3), new cjs.Rectangle(-89.6,-348,220.3,449.6), new cjs.Rectangle(-94.2,-348,224.9,454.9), new cjs.Rectangle(-98.9,-348,229.6,460.1), new cjs.Rectangle(-103.5,-348,234.2,465.4), new cjs.Rectangle(-108.1,-348,238.8,470.7), new cjs.Rectangle(-112.8,-348,243.5,476), new cjs.Rectangle(-117.4,-348,248.1,481.2), new cjs.Rectangle(-122.1,-348,252.8,486.5), new cjs.Rectangle(-126.7,-348,257.4,491.7), new cjs.Rectangle(-131.4,-348,262.9,497), new cjs.Rectangle(-136,-348,272.2,502.2), new cjs.Rectangle(-140.7,-348,281.4,507.5), new cjs.Rectangle(-145.3,-348,290.7,512.8), new cjs.Rectangle(-150,-348,300,518), new cjs.Rectangle(-150,-350,300,520), new cjs.Rectangle(-150,-352,305.7,522), new cjs.Rectangle(-150,-354,318.2,524), new cjs.Rectangle(-150,-356,330.7,526), new cjs.Rectangle(-150,-358,343.2,528), new cjs.Rectangle(-150,-360,355.7,530), new cjs.Rectangle(-150,-362,368.2,532), new cjs.Rectangle(-150,-364,380.7,534), new cjs.Rectangle(-150,-366,393.2,536), new cjs.Rectangle(-150,-368,405.7,538), new cjs.Rectangle(-150,-370,418.2,540), new cjs.Rectangle(-150,-372,430.7,542), new cjs.Rectangle(-150,-374,443.2,544), new cjs.Rectangle(-150,-376,455.7,546), new cjs.Rectangle(-150,-378,468.2,548), new cjs.Rectangle(-150,-380,480.7,550), new cjs.Rectangle(-150,-382,493.2,552), new cjs.Rectangle(-150,-384,505.7,554), new cjs.Rectangle(-150,-386,518.2,556), new cjs.Rectangle(-150,-388,530.7,558), new cjs.Rectangle(-150,-390,543.2,560), new cjs.Rectangle(-150,-392,555.7,562), new cjs.Rectangle(-150,-394,568.2,564), new cjs.Rectangle(-150,-396,580.7,566), new cjs.Rectangle(-150,-398,593.2,568), new cjs.Rectangle(-150,-400,605.7,570), new cjs.Rectangle(-150,-402,618.2,572), new cjs.Rectangle(-150,-404,630.7,574), new cjs.Rectangle(-150,-406,643.2,576), new cjs.Rectangle(-150,-408,655.7,578), new cjs.Rectangle(-150,-410,668.2,580), new cjs.Rectangle(-150,-412,680.7,582), new cjs.Rectangle(-150,-414,693.2,584), new cjs.Rectangle(-150,-416,705.7,586), new cjs.Rectangle(-150,-418,718.2,588), new cjs.Rectangle(-150,-420,730.7,590), new cjs.Rectangle(-150,-422,743.2,592), new cjs.Rectangle(-150,-424,755.7,594), new cjs.Rectangle(-150,-426,768.2,596), rect=new cjs.Rectangle(-150,-428,780.7,598), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnYFIIjjgdQBFkYhFk+IDWgLIAylHIRvKBIxgJ6g");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-200,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:200},20).wait(41));

	// graph
	this.instance_1 = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180.1,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mulan3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_3
	this.round_3 = new lib.ariel_bottom_all();
	this.round_3.setTransform(-29.6,10.9,0.978,0.978);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_4
	this.round_4 = new lib.ariel_top_all();
	this.round_4.setTransform(-16.3,-99.6,0.978,0.978);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_2
	this.round_2 = new lib.ariel_shoes_all();
	this.round_2.setTransform(27.7,313.9,0.978,0.978);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_1
	this.round_1 = new lib.ariel_fringle_all();
	this.round_1.setTransform(-10.2,-150.5,0.978,0.978);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// body
	this.instance = new lib.mulan_face3_img();
	this.instance.setTransform(-43.8,-278.9,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.body1();
	this.instance_1.setTransform(-147.6,-174.8,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175.5,-307.2,324,657.6);
p.frameBounds = [rect];


(lib.mulan2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_3
	this.round_3 = new lib.jasmine_bottom_all();
	this.round_3.setTransform(38,20,1.015,1.015);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_4
	this.round_4 = new lib.jasmine_top_all();
	this.round_4.setTransform(21.8,-95.5,1.015,1.015);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_2
	this.round_2 = new lib.jasmine_shoes_all();
	this.round_2.setTransform(-23,332.8,1.015,1.015);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_1
	this.round_1 = new lib.jas_fringle_all();
	this.round_1.setTransform(-21,-101.2,1.015,1.015);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// body
	this.instance = new lib.mulan_face2_img();
	this.instance.setTransform(-44.3,-281.8,0.422,0.422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.body1();
	this.instance_1.setTransform(-152.2,-173.8,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.8,-323.5,360.7,693.2);
p.frameBounds = [rect];


(lib.mulan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_1
	this.round_1 = new lib.anna_fringle_all();
	this.round_1.setTransform(-12.4,-156.8,0.943,0.943);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// round_3
	this.round_3 = new lib.anna_bottom_all();
	this.round_3.setTransform(-1.6,13.6,0.943,0.943);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_4
	this.round_4 = new lib.anna_top_all();
	this.round_4.setTransform(-0.1,-92,0.943,0.943);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_2
	this.round_2 = new lib.anna_shoes_all();
	this.round_2.setTransform(-26,297.7,0.943,0.943);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// body
	this.instance = new lib.mulan_face1_img();
	this.instance.setTransform(-45.5,-260.6,0.392,0.392);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.body1();
	this.instance_1.setTransform(-145.6,-160.4,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-188.7,-310,355.5,655.3);
p.frameBounds = [rect];


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAHA7IgHgHIgGAHI8AAAQgVAAgPgOQgPgPAAgUIAAgSQAAgVAPgPQAPgPAVAAIcBAAIAFAIIAHgIIcBAAQAUAAAOAPQAQAPgBAVIAAASQABAUgQAPQgOAOgUAAg");
	mask.setTransform(185,6);

	// band
	this.band_mc = new lib.indicator_3_mc();
	this.band_mc.setTransform(0,0,0.003,1);

	this.band_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.band_mc).to({scaleX:1},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,12);
p.frameBounds = [rect, new cjs.Rectangle(0,0,4.7,12), new cjs.Rectangle(0,0,8.5,12), new cjs.Rectangle(0,0,12.2,12), new cjs.Rectangle(0,0,15.9,12), new cjs.Rectangle(0,0,19.7,12), new cjs.Rectangle(0,0,23.4,12), new cjs.Rectangle(0,0,27.1,12), new cjs.Rectangle(0,0,30.8,12), new cjs.Rectangle(0,0,34.6,12), new cjs.Rectangle(0,0,38.3,12), new cjs.Rectangle(0,0,42,12), new cjs.Rectangle(0,0,45.8,12), new cjs.Rectangle(0,0,49.5,12), new cjs.Rectangle(0,0,53.2,12), new cjs.Rectangle(0,0,56.9,12), new cjs.Rectangle(0,0,60.7,12), new cjs.Rectangle(0,0,64.4,12), new cjs.Rectangle(0,0,68.1,12), new cjs.Rectangle(0,0,71.8,12), new cjs.Rectangle(0,0,75.6,12), new cjs.Rectangle(0,0,79.3,12), new cjs.Rectangle(0,0,83,12), new cjs.Rectangle(0,0,86.7,12), new cjs.Rectangle(0,0,90.5,12), new cjs.Rectangle(0,0,94.2,12), new cjs.Rectangle(0,0,97.9,12), new cjs.Rectangle(0,0,101.7,12), new cjs.Rectangle(0,0,105.4,12), new cjs.Rectangle(0,0,109.1,12), new cjs.Rectangle(0,0,112.8,12), new cjs.Rectangle(0,0,116.6,12), new cjs.Rectangle(0,0,120.3,12), new cjs.Rectangle(0,0,124,12), new cjs.Rectangle(0,0,127.7,12), new cjs.Rectangle(0,0,131.5,12), new cjs.Rectangle(0,0,135.2,12), new cjs.Rectangle(0,0,138.9,12), new cjs.Rectangle(0,0,142.7,12), new cjs.Rectangle(0,0,146.4,12), new cjs.Rectangle(0,0,150.1,12), new cjs.Rectangle(0,0,153.8,12), new cjs.Rectangle(0,0,157.6,12), new cjs.Rectangle(0,0,161.3,12), new cjs.Rectangle(0,0,165,12), new cjs.Rectangle(0,0,168.8,12), new cjs.Rectangle(0,0,172.5,12), new cjs.Rectangle(0,0,176.2,12), new cjs.Rectangle(0,0,179.9,12), new cjs.Rectangle(0,0,183.7,12), new cjs.Rectangle(0,0,187.4,12), new cjs.Rectangle(0,0,191.1,12), new cjs.Rectangle(0,0,194.8,12), new cjs.Rectangle(0,0,198.6,12), new cjs.Rectangle(0,0,202.3,12), new cjs.Rectangle(0,0,206,12), new cjs.Rectangle(0,0,209.8,12), new cjs.Rectangle(0,0,213.5,12), new cjs.Rectangle(0,0,217.2,12), new cjs.Rectangle(0,0,220.9,12), new cjs.Rectangle(0,0,224.7,12), new cjs.Rectangle(0,0,228.4,12), new cjs.Rectangle(0,0,232.1,12), new cjs.Rectangle(0,0,235.8,12), new cjs.Rectangle(0,0,239.6,12), new cjs.Rectangle(0,0,243.3,12), new cjs.Rectangle(0,0,247,12), new cjs.Rectangle(0,0,250.8,12), new cjs.Rectangle(0,0,254.5,12), new cjs.Rectangle(0,0,258.2,12), new cjs.Rectangle(0,0,261.9,12), new cjs.Rectangle(0,0,265.7,12), new cjs.Rectangle(0,0,269.4,12), new cjs.Rectangle(0,0,273.1,12), new cjs.Rectangle(0,0,276.8,12), new cjs.Rectangle(0,0,280.6,12), new cjs.Rectangle(0,0,284.3,12), new cjs.Rectangle(0,0,288,12), new cjs.Rectangle(0,0,291.7,12), new cjs.Rectangle(0,0,295.5,12), new cjs.Rectangle(0,0,299.2,12), new cjs.Rectangle(0,0,302.9,12), new cjs.Rectangle(0,0,306.7,12), new cjs.Rectangle(0,0,310.4,12), new cjs.Rectangle(0,0,314.1,12), new cjs.Rectangle(0,0,317.8,12), new cjs.Rectangle(0,0,321.6,12), new cjs.Rectangle(0,0,325.3,12), new cjs.Rectangle(0,0,329,12), new cjs.Rectangle(0,0,332.8,12), new cjs.Rectangle(0,0,336.5,12), new cjs.Rectangle(0,0,340.2,12), new cjs.Rectangle(0,0,343.9,12), new cjs.Rectangle(0,0,347.7,12), new cjs.Rectangle(0,0,351.4,12), new cjs.Rectangle(0,0,355.1,12), new cjs.Rectangle(0,0,358.8,12), new cjs.Rectangle(0,0,362.6,12), new cjs.Rectangle(0,0,366.3,12), new cjs.Rectangle(0,0,370,12)];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.indicator_2_mc();
	this.body_mc.setTransform(-185,-6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.indicator_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,400,40);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.location_1 = new lib.mulan1();
	this.location_1.setTransform(219.2,354.1,0.844,0.844,0,0,0,2.6,76);

	this.location_2 = new lib.mulan2();
	this.location_2.setTransform(393,280,0.792,0.792);

	this.location_3 = new lib.mulan3();
	this.location_3.setTransform(574,290,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.location_3,p:{scaleX:0.792,scaleY:0.792,x:574,y:290}},{t:this.location_2,p:{scaleX:0.792,scaleY:0.792,y:280,x:393}},{t:this.location_1,p:{scaleX:0.844,scaleY:0.844,x:219.2,y:354.1}}]}).to({state:[{t:this.location_1,p:{scaleX:0.992,scaleY:0.992,x:395.6,y:408.4}}]},1).to({state:[{t:this.location_2,p:{scaleX:0.937,scaleY:0.938,y:333,x:393}}]},1).to({state:[{t:this.location_3,p:{scaleX:0.988,scaleY:0.988,x:393,y:333}}]},1).to({state:[{t:this.location_1,p:{scaleX:0.844,scaleY:0.844,x:309.2,y:364.1}},{t:this.location_2,p:{scaleX:0.937,scaleY:0.938,y:345,x:472}}]},1).to({state:[{t:this.location_2,p:{scaleX:0.792,scaleY:0.792,y:300,x:307}},{t:this.location_3,p:{scaleX:0.988,scaleY:0.988,x:472,y:345}}]},1).to({state:[{t:this.location_3,p:{scaleX:0.792,scaleY:0.792,x:307,y:300}},{t:this.location_1,p:{scaleX:0.992,scaleY:0.992,x:474.6,y:420.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(57.8,23.7,633.9,557.7);
p.frameBounds = [rect, new cjs.Rectangle(205.9,25.5,352.5,650), new cjs.Rectangle(226.3,29.7,338.1,649.9), new cjs.Rectangle(219.6,29.3,320.2,650.1), new cjs.Rectangle(147.8,38.5,495.6,653.2), new cjs.Rectangle(166.1,41.3,452.7,650.1), new cjs.Rectangle(167.9,37.5,469.5,650)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.mulan_main();
	this.instance.setTransform(529,352.7,1,1,0,0,0,-11,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(351.3,25,355.5,655.3);
p.frameBounds = [rect];


(lib.help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_help_mc();
	this.instance.setTransform(400,300,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.countdown_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_3_mc();
	this.instance.setTransform(0,0,0.616,0.616);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-73.8,147.7,147.7);
p.frameBounds = [rect, new cjs.Rectangle(-74.4,-74.4,148.9,148.9), new cjs.Rectangle(-76.1,-76.1,152.3,152.3), new cjs.Rectangle(-78.9,-78.9,158,158), new cjs.Rectangle(-82.9,-82.9,166,166), new cjs.Rectangle(-88.1,-88.1,176.2,176.2), new cjs.Rectangle(-94.3,-94.3,188.8,188.8), new cjs.Rectangle(-101.7,-101.7,203.6,203.6), new cjs.Rectangle(-110.3,-110.3,220.7,220.7), new cjs.Rectangle(-120,-120,240,240)];


(lib.countdown_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_2_mc();
	this.instance.setTransform(0,0,0.616,0.616);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-73.8,147.7,147.7);
p.frameBounds = [rect, new cjs.Rectangle(-74.4,-74.4,148.9,148.9), new cjs.Rectangle(-76.1,-76.1,152.3,152.3), new cjs.Rectangle(-78.9,-78.9,158,158), new cjs.Rectangle(-82.9,-82.9,166,166), new cjs.Rectangle(-88.1,-88.1,176.2,176.2), new cjs.Rectangle(-94.3,-94.3,188.8,188.8), new cjs.Rectangle(-101.7,-101.7,203.6,203.6), new cjs.Rectangle(-110.3,-110.3,220.7,220.7), new cjs.Rectangle(-120,-120,240,240)];


(lib.countdown_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_1_mc();
	this.instance.setTransform(0,0,0.616,0.616);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-73.8,147.7,147.7);
p.frameBounds = [rect, new cjs.Rectangle(-74.4,-74.4,148.9,148.9), new cjs.Rectangle(-76.1,-76.1,152.3,152.3), new cjs.Rectangle(-78.9,-78.9,158,158), new cjs.Rectangle(-82.9,-82.9,166,166), new cjs.Rectangle(-88.1,-88.1,176.2,176.2), new cjs.Rectangle(-94.3,-94.3,188.8,188.8), new cjs.Rectangle(-101.7,-101.7,203.6,203.6), new cjs.Rectangle(-110.3,-110.3,220.7,220.7), new cjs.Rectangle(-120,-120,240,240)];


(lib.countdown_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_0_mc();
	this.instance.setTransform(0,0,0.616,0.616);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-73.8,147.7,147.7);
p.frameBounds = [rect, new cjs.Rectangle(-74.4,-74.4,148.9,148.9), new cjs.Rectangle(-76.1,-76.1,152.3,152.3), new cjs.Rectangle(-78.9,-78.9,158,158), new cjs.Rectangle(-82.9,-82.9,166,166), new cjs.Rectangle(-88.1,-88.1,176.2,176.2), new cjs.Rectangle(-94.3,-94.3,188.8,188.8), new cjs.Rectangle(-101.7,-101.7,203.6,203.6), new cjs.Rectangle(-110.3,-110.3,220.7,220.7), new cjs.Rectangle(-120,-120,240,240)];


(lib.body_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_win_en_mc();
	this.instance.setTransform(-99,-79);

	this.instance_1 = new lib.title_win_ru_mc();
	this.instance_1.setTransform(-101,-71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.herald_img();
	this.instance_2.setTransform(-94.5,-4.4,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// decor
	this.instance_3 = new lib.text_bubble_2_mc();
	this.instance_3.setTransform(-109,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_mc();
	this.instance_4.setTransform(-6,262,1.521,1.521);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-18,y:253},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-256.5,-166.9,400.6,473);
p.frameBounds = [rect, new cjs.Rectangle(-256.5,-166.9,388.6,464)];


(lib.body_title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_loss_en_mc();
	this.instance.setTransform(-99,-79);

	this.instance_1 = new lib.title_loss_ru_mc();
	this.instance_1.setTransform(-102,-82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.herald_img();
	this.instance_2.setTransform(-94.5,-4.4,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// decor
	this.instance_3 = new lib.text_bubble_mc();
	this.instance_3.setTransform(-109,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_mc();
	this.instance_4.setTransform(-6,262,1.521,1.521);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-18,y:253},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-256.5,-166.9,400.6,473);
p.frameBounds = [rect, new cjs.Rectangle(-256.5,-166.9,388.6,464)];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({alpha:0.5},5).to({alpha:1},5).to({alpha:0.5},5).to({alpha:1},5).wait(31));

	// title
	this.instance_1 = new lib.title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({alpha:0.5},5).to({alpha:1},5).to({alpha:0.5},5).to({alpha:1},5).wait(1));

	// bg
	this.instance_2 = new lib.bg_title_mc();
	this.instance_2.setTransform(165,-90,1,1,0,0,0,165,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-200,540,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_completed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.title_completed_mc();
	this.instance.setTransform(0.7,0,1,1,-45,0,0,0.5,0.4);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0.5,scaleX:1.44,scaleY:1.44,x:1},8).to({regY:0.4,scaleX:1,scaleY:1,x:0.7,alpha:0.801},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.9,-104.6,209.1,209.1);
p.frameBounds = [rect, rect, new cjs.Rectangle(-109.5,-110.3,220.5,220.5), new cjs.Rectangle(-115.2,-116,231.8,231.8), new cjs.Rectangle(-120.8,-121.7,243.2,243.2), new cjs.Rectangle(-126.4,-127.4,254.6,254.6), new cjs.Rectangle(-132.1,-133.1,266,266), new cjs.Rectangle(-137.8,-138.8,277.3,277.3), new cjs.Rectangle(-143.4,-144.5,288.7,288.7), new cjs.Rectangle(-149.2,-150.2,300.1,300.1), new cjs.Rectangle(-140.1,-141.1,281.8,281.8), new cjs.Rectangle(-131.1,-132,263.7,263.7), new cjs.Rectangle(-122,-122.9,245.5,245.5), new cjs.Rectangle(-112.9,-113.8,227.3,227.3), new cjs.Rectangle(-103.9,-104.6,209.1,209.1)];


(lib.animation_card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{begin:0,mid:4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, new cjs.Rectangle(-56.3,-75,112.8,150), new cjs.Rectangle(-37.7,-75,75.5,150), new cjs.Rectangle(-19.1,-75,38.2,150), new cjs.Rectangle(-0.4,-75,0.9,150), new cjs.Rectangle(-15.3,-75,30.8,150), new cjs.Rectangle(-30.2,-75,60.6,150), new cjs.Rectangle(-45.1,-75,90.4,150), new cjs.Rectangle(-60,-75,120.2,150), new cjs.Rectangle(-75,-75,150,150)];


(lib.animation_card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.card_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.curtain_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_curtain_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-90,520,180);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-90,520,180);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":24,"end":64});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// decor
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(600,300,0.667,0.667);
	this.instance.alpha = 0.012;
	this.instance._off = true;
	this.instance.cache(-262,-92,524,184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(15).to({scaleX:0.67,scaleY:0.67,alpha:0.012},20).wait(16));

	// curtain
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,-610);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},13).wait(26).to({alpha:0.012},23).to({y:-610,alpha:1},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-610,1200,600);
p.frameBounds = [rect, new cjs.Rectangle(-28,-28,1264,664), new cjs.Rectangle(-13,-13,1230,630), new cjs.Rectangle(-12,-12,1228,628), new cjs.Rectangle(-11,-11,1226,626), new cjs.Rectangle(-10,-10,1224,624), new cjs.Rectangle(-9,-9,1222,622), new cjs.Rectangle(-8,-8,1220,620), new cjs.Rectangle(-6,-6,1216,616), new cjs.Rectangle(-5,-5,1214,614), new cjs.Rectangle(-4,-4,1212,612), new cjs.Rectangle(-3,-3,1210,610), rect=new cjs.Rectangle(-2,-2,1208,608), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-2,-2,1212,612), rect=new cjs.Rectangle(-1,-1,1206,606), rect, rect, rect, rect, rect=new cjs.Rectangle(-2,-2,1208,608), rect, rect, rect, rect, new cjs.Rectangle(-3,-3,1210,610), rect=new cjs.Rectangle(-6,-6,1216,616), rect, rect=new cjs.Rectangle(-7,-7,1218,618), rect, rect=new cjs.Rectangle(-8,-8,1220,620), rect, rect, rect=new cjs.Rectangle(-9,-9,1222,622), rect, rect=new cjs.Rectangle(-10,-10,1224,624), rect, new cjs.Rectangle(-28,-28,1264,664), new cjs.Rectangle(-1,-611,1206,971)];


(lib.copyright_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.copyright_3_mc();
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.snowfall_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var container_mc = this.container_mc;
		container_mc.gotoAndStop(0);
		var _containerBounds_rect = container_mc.getBounds();
		/*
		константы
		*/
		var _SPEED_NUM = 0.75;
		var _CURRENT_NUM = 0.25;
		var _BUBBLE_DIAMETER_NUM = 50;
		/*
		создаём n-ое количество пузырей
		*/
		_createSnowflakesFunc(6);
		/*
		функция, создающая пузыри
		*/
		function _createSnowflakesFunc(snowflakes_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < snowflakes_num) 
			{
				/*
				создаём пузырь
				*/
				var snowflake_mc = new lib.Snowflake();
				container_mc.addChild(snowflake_mc);
				snowflake_mc.gotoAndStop(0);
				snowflake_mc.gotoAndStop(Math.floor(Math.random() * snowflake_mc.totalFrames));
				snowflake_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				snowflake_mc.angle = Math.random() * 0.3 + 0.2;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				snowflake_mc.scaleX = randomScale_num;
				snowflake_mc.scaleY = randomScale_num;
				snowflake_mc.alpha = randomScale_num;
				snowflake_mc.x = Math.random() * _containerBounds_rect.width;
				snowflake_mc.y = Math.random() * _containerBounds_rect.height;
				snowflake_mc.addEventListener("tick", _onTickSnowflakeFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickSnowflakeFunc(event)
		{
			/*
			получаем пузырь
			*/
			var target_mc = event.target;
			//target_mc.gotoAndStop(0);
			/*
			обновляем координаты
			*/
			target_mc.x -= target_mc.rad;
			target_mc.y += _SPEED_NUM;
			target_mc.rotation += target_mc.angle;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y >= _containerBounds_rect.height)
			{
				target_mc.y = _BUBBLE_DIAMETER_NUM;
			}
			if (target_mc.x >= _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM)
			{
				target_mc.x = 1;
			}
			if (target_mc.x <= 0)
			{
				target_mc.x = _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// snowfall
	this.instance = new lib.Snowflake();
	this.instance.setTransform(400,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,720);
p.frameBounds = [rect];


(lib.shine_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_6_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-26.6,-25.6,53.1,53.1), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.2,-27,55.8,55.8), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.6,-26.5,54.4,54.4), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-25.2,-24.1,49.3,49.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-21.3,-20.5,41.6,41.6), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-16.7,-16,32.4,32.4), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.9,-11.4,22.9,22.9), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.7,-10.4,20.8,20.8), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-9.1,-8.9,17.8,17.8), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-6.5,-6.4,12.8,12.8), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_6_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.maroon_fireworks_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fireworks
	this.fireworks_mc = new lib.maroon_fireworks_2_mc();
	this.fireworks_mc.setTransform(400,800);

	this.timeline.addTween(cjs.Tween.get(this.fireworks_mc).wait(1));

	// area
	this.area_mc = new lib.maroon_fireworks_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,600,997);
p.frameBounds = [rect];


(lib.maroon_fireworks_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2020 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		var _fireworks_mc = this.body_mc.fireworks_mc;
		_fireworks_mc.gotoAndStop(0);
		var _area_mc = this.body_mc.area_mc;
		_area_mc.gotoAndStop(0);
		var _area_bounds_obj = _area_mc.getBounds();
		_area_mc.visible = false;
		/*
		константы
		*/
		
		/*
		переменные
		*/
		var _timeout_id = setTimeout(_updateFunc, 2000);
		/*
		обновляем эффект
		*/
		function _updateFunc()
		{
			/*
			
			*/
			var randomScale_num = 1;
			/*
			
			*/
			try
			{
				/*
				
				*/
				randomScale_num = (Math.random() * 0.2) + 0.8;
				_fireworks_mc.scaleX = randomScale_num;
				_fireworks_mc.scaleY = randomScale_num;
				_fireworks_mc.x = _area_mc.x + (Math.random() * _area_bounds_obj.width);
				_fireworks_mc.y = _area_mc.y + (Math.random() * _area_bounds_obj.height);
				_fireworks_mc.rotation = 360 * Math.random();
				_fireworks_mc.gotoAndPlay(0);
				/*
				
				*/
				if(_timeout_id != null)
				{
					clearTimeout(_timeout_id);
				}
				_timeout_id = setTimeout(_updateFunc, (Math.random() * 2000) + 3000);
			}
			catch(event)
			{
				/*
				
				*/
				if(_timeout_id != null)
				{
					clearTimeout(_timeout_id);
				}
				/*
				
				*/
				console.log(event);
			}
			finally
			{
				
			}
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.maroon_fireworks_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,600,997);
p.frameBounds = [rect];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.flash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.sound_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-26.6,-26.6,53.4,53.4), new cjs.Rectangle(-27.4,-27.4,55,55), new cjs.Rectangle(-28.2,-28.2,56.5,56.5), new cjs.Rectangle(-28.9,-28.9,57.9,57.9), new cjs.Rectangle(-28.2,-28.2,56.5,56.5), new cjs.Rectangle(-27.4,-27.4,55,55), new cjs.Rectangle(-26.6,-26.6,53.4,53.4), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-24.9,-24.9,50,50), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-26.6,-26.6,53.4,53.4), new cjs.Rectangle(-27.4,-27.4,54.9,54.9), new cjs.Rectangle(-28.2,-28.2,56.5,56.5), new cjs.Rectangle(-28.9,-28.9,57.9,57.9), new cjs.Rectangle(-28.2,-28.2,56.5,56.5), new cjs.Rectangle(-27.4,-27.4,55,55), new cjs.Rectangle(-26.6,-26.6,53.4,53.4), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), rect=new cjs.Rectangle(-25,-25,50,50), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sound_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-26.6,-26.6,53.4,53.4), new cjs.Rectangle(-27.4,-27.4,55,55), new cjs.Rectangle(-28.2,-28.2,56.5,56.5), new cjs.Rectangle(-28.9,-28.9,57.9,57.9), new cjs.Rectangle(-28.2,-28.2,56.5,56.5), new cjs.Rectangle(-27.4,-27.4,55,55), new cjs.Rectangle(-26.6,-26.6,53.4,53.4), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-24.9,-24.9,50,50), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-26.6,-26.6,53.4,53.4), new cjs.Rectangle(-27.4,-27.4,54.9,54.9), new cjs.Rectangle(-28.2,-28.2,56.5,56.5), new cjs.Rectangle(-28.9,-28.9,57.9,57.9), new cjs.Rectangle(-28.2,-28.2,56.5,56.5), new cjs.Rectangle(-27.4,-27.4,55,55), new cjs.Rectangle(-26.6,-26.6,53.4,53.4), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), rect=new cjs.Rectangle(-25,-25,50,50), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,1.167,1.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


(lib.play_again_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.play_again_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:1.06,scaleY:1.06},5).to({scaleX:1,scaleY:1},10).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-80.9,-80.9,162,162), new cjs.Rectangle(-81.9,-81.9,164,164), new cjs.Rectangle(-83,-83,166,166), new cjs.Rectangle(-84,-84,168,168), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-84.4,-84.4,169,169), new cjs.Rectangle(-83.9,-83.9,168,168), new cjs.Rectangle(-83.4,-83.4,167,167), new cjs.Rectangle(-82.9,-82.9,166,166), new cjs.Rectangle(-82.4,-82.4,165,165), new cjs.Rectangle(-81.9,-81.9,164,164), new cjs.Rectangle(-81.4,-81.4,163,163), new cjs.Rectangle(-80.9,-80.9,162,162), new cjs.Rectangle(-80.4,-80.4,161,161), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.play_2_mc();
	this.instance.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:1.13,scaleY:1.13,x:15},5).to({scaleX:0.88,scaleY:0.88,x:-5},5).to({scaleX:1,scaleY:1,x:5},5).wait(26));

	// bg
	this.instance_1 = new lib.play_img();
	this.instance_1.setTransform(-80,-80,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.shine_mc = new lib.shine_1_6_mc();
	this.shine_mc.setTransform(20.3,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(1));

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-80,-80,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.more_games_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Слой 1
	this.instance = new lib.more_games_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.45,scaleY:1.45,y:-179.9,alpha:0},16).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-20.5,50,41);
p.frameBounds = [rect, new cjs.Rectangle(-25.7,-32.3,51.4,42.2), new cjs.Rectangle(-26.4,-44.1,52.8,43.3), new cjs.Rectangle(-27.1,-55.9,54.2,44.5), new cjs.Rectangle(-27.8,-67.8,55.7,45.6), new cjs.Rectangle(-28.5,-79.6,57.1,46.7), new cjs.Rectangle(-29.2,-91.4,58.5,47.9), new cjs.Rectangle(-29.9,-103.2,59.9,49.1), new cjs.Rectangle(-30.6,-115.1,61.3,50.3), new cjs.Rectangle(-31.3,-126.8,62.7,51.4), new cjs.Rectangle(-32,-138.7,64.1,52.5), new cjs.Rectangle(-32.7,-150.5,65.5,53.7), new cjs.Rectangle(-33.4,-162.3,66.9,54.9), new cjs.Rectangle(-34.1,-174.1,68.3,56), new cjs.Rectangle(-34.8,-186,69.7,57.2), new cjs.Rectangle(-35.5,-197.8,71.1,58.3), new cjs.Rectangle(-36.2,-209.6,72.5,59.4), null];


(lib.more_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_2_mc("synched",0);
	this.instance.setTransform(0.5,0.5,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-10.6,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14,29.1,29.1), new cjs.Rectangle(-17.4,-17.5,36.1,36.1), new cjs.Rectangle(-20.9,-20.9,42.8,42.8), new cjs.Rectangle(-23.7,-23.7,48.5,48.5), new cjs.Rectangle(-25.9,-25.9,52.9,52.9), new cjs.Rectangle(-27.3,-27.2,55.5,55.5), new cjs.Rectangle(-27.6,-27.5,56.1,56.1), new cjs.Rectangle(-26.7,-26.6,54.3,54.3), new cjs.Rectangle(-24.5,-24.5,50,50), new cjs.Rectangle(-27,-27,55.1,55.1), new cjs.Rectangle(-27.2,-27.2,55.6,55.6), new cjs.Rectangle(-25.6,-25.6,52.2,52.2), new cjs.Rectangle(-22.4,-22.3,45.7,45.7), new cjs.Rectangle(-18.1,-18.1,37.2,37.2), new cjs.Rectangle(-13.3,-13.2,27.6,27.6), new cjs.Rectangle(-10.2,-10.1,21.3,21.3), new cjs.Rectangle(-9.4,-9.3,19.6,19.6), new cjs.Rectangle(-7.3,-7.2,15.5,15.5), new cjs.Rectangle(-4.4,-4.4,9.8,9.8)];


(lib.mini_play_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mini_play_2_mc();
	this.instance.setTransform(5,0,0.583,0.583,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({x:5.1},0).to({scaleX:0.67,scaleY:0.67,x:0.1},10).to({x:10.1},10).to({scaleX:0.58,scaleY:0.58,x:5.1},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-35,70,70);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-30.9,-35.4,71,71), new cjs.Rectangle(-31.9,-35.9,72,72), new cjs.Rectangle(-32.9,-36.4,73,73), new cjs.Rectangle(-33.9,-36.9,74,74), new cjs.Rectangle(-34.9,-37.4,75,75), new cjs.Rectangle(-35.9,-37.9,76,76), new cjs.Rectangle(-37,-38.4,77,77), new cjs.Rectangle(-37.9,-38.9,78,78), new cjs.Rectangle(-38.9,-39.4,79,79), new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-38.9,-39.9,80,80), new cjs.Rectangle(-37.9,-39.9,80,80), new cjs.Rectangle(-36.9,-39.9,80,80), new cjs.Rectangle(-35.9,-39.9,80,80), new cjs.Rectangle(-34.9,-39.9,80,80), new cjs.Rectangle(-33.9,-39.9,80,80), new cjs.Rectangle(-32.9,-39.9,80,80), new cjs.Rectangle(-31.9,-39.9,80,80), new cjs.Rectangle(-30.9,-39.9,80,80), new cjs.Rectangle(-30,-40,80,80), new cjs.Rectangle(-29.9,-39.4,79,79), new cjs.Rectangle(-30,-38.9,78,78), new cjs.Rectangle(-29.9,-38.4,77,77), new cjs.Rectangle(-30,-37.9,76,76), new cjs.Rectangle(-29.9,-37.4,75,75), new cjs.Rectangle(-29.9,-36.9,74,74), new cjs.Rectangle(-29.9,-36.4,73,73), new cjs.Rectangle(-29.9,-35.9,72,72), new cjs.Rectangle(-29.9,-35.4,71,71), rect=new cjs.Rectangle(-30,-35,70,70), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.logo_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.logo_3_mc();
	this.instance.setTransform(0,0,1.269,1.269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.34,scaleY:1.34},5).to({scaleX:1.27,scaleY:1.27},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-86,-86,172,172), new cjs.Rectangle(-87,-87,174,174), new cjs.Rectangle(-88,-88,176,176), new cjs.Rectangle(-89,-89,178,178), new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-89.5,-89.5,179,179), new cjs.Rectangle(-89,-89,178,178), new cjs.Rectangle(-88.5,-88.5,177,177), new cjs.Rectangle(-88,-88,176,176), new cjs.Rectangle(-87.5,-87.5,175,175), new cjs.Rectangle(-87,-87,174,174), new cjs.Rectangle(-86.5,-86.5,173,173), new cjs.Rectangle(-86,-86,172,172), new cjs.Rectangle(-85.5,-85.5,171,171), rect=new cjs.Rectangle(-85,-85,170,170), rect, rect, rect, rect, rect];


(lib.logo_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.logo_2_mc();
	this.instance.setTransform(0,0,0.97,0.97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1.04,scaleY:1.04},5).to({scaleX:0.97,scaleY:0.97},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-66,-66,132,132), new cjs.Rectangle(-67,-67,134,134), new cjs.Rectangle(-68,-68,136,136), new cjs.Rectangle(-69,-69,138,138), new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-69,-69,138,138), new cjs.Rectangle(-68.5,-68.5,137,137), new cjs.Rectangle(-68,-68,136,136), new cjs.Rectangle(-67.5,-67.5,135,135), new cjs.Rectangle(-67,-67,134,134), new cjs.Rectangle(-66.5,-66.5,133,133), new cjs.Rectangle(-66,-66,132,132), new cjs.Rectangle(-65.5,-65.5,131,131), rect=new cjs.Rectangle(-65,-65,130,130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.logo_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.logo_1_mc();
	this.instance.setTransform(0,0,1.455,1.455);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.57,scaleY:1.57},4).to({scaleX:1.46,scaleY:1.46},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-97.5,195,195);
p.frameBounds = [rect, new cjs.Rectangle(-99.3,-99.3,198.7,198.7), new cjs.Rectangle(-101.2,-101.2,202.5,202.5), new cjs.Rectangle(-103.1,-103.1,206.2,206.2), new cjs.Rectangle(-105,-105,210,210), new cjs.Rectangle(-104.2,-104.2,208.5,208.5), new cjs.Rectangle(-103.5,-103.5,207,207), new cjs.Rectangle(-102.7,-102.7,205.5,205.5), new cjs.Rectangle(-102,-102,204,204), new cjs.Rectangle(-101.2,-101.2,202.5,202.5), new cjs.Rectangle(-100.5,-100.5,201,201), new cjs.Rectangle(-99.7,-99.7,199.5,199.5), new cjs.Rectangle(-99,-99,198,198), new cjs.Rectangle(-98.2,-98.2,196.5,196.5), rect=new cjs.Rectangle(-97.5,-97.5,195,195), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.logo_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200.3,-40.4,400.8,80.9);
p.frameBounds = [rect];


(lib.logo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.logo_4_mc();
	this.instance.setTransform(20,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.logo_5_mc();
	this.instance_1.setTransform(-34,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.logo_6_mc();
	this.instance_2.setTransform(-155,0);

	this.instance_3 = new lib.logo_6_mc();
	this.instance_3.setTransform(90,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// graph
	this.instance_4 = new lib.logo_7_mc();
	this.instance_4.setTransform(-240.1,0,0.353,0.353,0,0,0,-0.3,0);

	this.instance_5 = new lib.logo_7_mc();
	this.instance_5.setTransform(185,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.008)").s().p("EgjJAPnQjOAAiTiSQiTiTAAjOIAAvnQAAjOCTiTQCTiSDOAAMBGTAAAQDOAACTCSQCTCTAADOIAAPnQAADOiTCTQiTCSjOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-275,-100,550,200);
p.frameBounds = [rect];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.free_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.free_games_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-5},5).to({y:0},5).to({y:-5},5).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-40,-41,80,80), new cjs.Rectangle(-40,-42,80,80), new cjs.Rectangle(-40,-43,80,80), new cjs.Rectangle(-40,-44,80,80), new cjs.Rectangle(-40,-45,80,80), new cjs.Rectangle(-40,-44,80,80), new cjs.Rectangle(-40,-43,80,80), new cjs.Rectangle(-40,-42,80,80), new cjs.Rectangle(-40,-41,80,80), new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-40,-41,80,80), new cjs.Rectangle(-40,-42,80,80), new cjs.Rectangle(-40,-43,80,80), new cjs.Rectangle(-40,-44,80,80), new cjs.Rectangle(-40,-45,80,80), new cjs.Rectangle(-40,-44,80,80), new cjs.Rectangle(-40,-43,80,80), new cjs.Rectangle(-40,-42,80,80), new cjs.Rectangle(-40,-41,80,80), new cjs.Rectangle(-40,-40,80,80)];


(lib.facebook_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-70,-70,140,140)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.banner_play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.banner_play_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.83,scaleY:0.83,x:-5},10).to({x:5},10).to({scaleX:1,scaleY:1,x:0},10).wait(21));

	// bg
	this.instance_1 = new lib.banner_play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.banner_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(0,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_2_img();
	this.instance_1.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-130,180,275);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(0,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_1_img();
	this.instance_1.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-130,180,275);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.preloader_6_mc();
	this.indicator_mc.setTransform(-130,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-35,300,70);
p.frameBounds = [rect];


(lib.InstructionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(750,50);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// text
	this.instance = new lib.instruction_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.instruction_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_win_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-256.5,-166.9,400.6,473);
p.frameBounds = [rect];


(lib.title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_loss_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-256.5,-166.9,400.6,473);
p.frameBounds = [rect];


(lib.preview_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgRuAiXMAAAhEtIRhAAIASAFIATgFIRXAAMAAABEtg");
	mask.setTransform(-0.5,0);

	// hero
	this.location_3 = new lib.mulan3();
	this.location_3.setTransform(6,-14,0.677,0.677);

	this.location_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// bg
	this.instance = new lib.bg_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-250,280,500);
p.frameBounds = [rect];


(lib.preview_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgRuAiXMAAAhEtIRhAAIASAFIATgFIRXAAMAAABEtg");
	mask.setTransform(-0.5,0);

	// hero
	this.location_2 = new lib.mulan2();
	this.location_2.setTransform(0,-14,0.64,0.64);

	this.location_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// bg
	this.instance = new lib.bg_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-250,280,500);
p.frameBounds = [rect];


(lib.preview_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgRuAiXMAAAhEtIRhAAIASAFIATgFIRXAAMAAABEtg");
	mask.setTransform(-0.5,0);

	// hero
	this.location_1 = new lib.mulan1();
	this.location_1.setTransform(6,-14,0.677,0.677);

	this.location_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

	// bg
	this.instance = new lib.bg_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-250,280,500);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.556,0.556,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-141.1,266.7,282.3);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();
	this.heroes_mc.setTransform(344.1,290.8,1,1,0,0,0,344.1,290.8);

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0.1,0,0.556,0.556,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216.6,-141.1,266.7,282.2);
p.frameBounds = [rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.instance = new lib.animation_completed_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-150,-190);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-150,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.instance = new lib.animation_completed_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-150,-190);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-150,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.instance = new lib.animation_completed_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-150,-190);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-150,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.countdown_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_1_0_mc();

	this.instance_1 = new lib.countdown_1_1_mc();

	this.instance_2 = new lib.countdown_1_2_mc();

	this.instance_3 = new lib.countdown_1_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-73.8,147.7,147.7);
p.frameBounds = [rect, rect, rect, rect];


(lib.card_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.body_0_mc = new lib.animation_card_0_mc();

	this.body_1_mc = new lib.animation_card_1_mc();

	this.body_2_mc = new lib.animation_card_2_mc();

	this.body_3_mc = new lib.animation_card_3_mc();

	this.body_4_mc = new lib.animation_card_4_mc();

	this.body_5_mc = new lib.animation_card_5_mc();

	this.body_6_mc = new lib.animation_card_6_mc();

	this.body_7_mc = new lib.animation_card_7_mc();

	this.body_8_mc = new lib.animation_card_8_mc();

	this.body_9_mc = new lib.animation_card_9_mc();

	this.body_10_mc = new lib.animation_card_10_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_0_mc}]}).to({state:[{t:this.body_1_mc}]},1).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).to({state:[{t:this.body_7_mc}]},1).to({state:[{t:this.body_8_mc}]},1).to({state:[{t:this.body_9_mc}]},1).to({state:[{t:this.body_10_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_159 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(159).call(this.frame_159).wait(1));

	// animation
	this.instance = new lib.title_win_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:1.06,scaleY:1.06,x:0.6,y:0.6,alpha:0.512},10).to({scaleX:1,scaleY:1,x:0.5,y:0.5,alpha:1},10).wait(80).to({alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-256.5,-166.9,400.6,473);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-257.9,-167.8,402.8,475.6), new cjs.Rectangle(-259.3,-168.7,405.1,478.3), new cjs.Rectangle(-260.8,-169.7,407.4,481), new cjs.Rectangle(-262.3,-170.6,409.8,483.7), new cjs.Rectangle(-263.7,-171.6,412.1,486.4), new cjs.Rectangle(-265.1,-172.5,414.3,489.1), new cjs.Rectangle(-266.6,-173.4,416.6,491.8), new cjs.Rectangle(-268.1,-174.4,418.8,494.5), new cjs.Rectangle(-269.5,-175.3,421.1,497.2), new cjs.Rectangle(-271.1,-176.4,423.4,500), new cjs.Rectangle(-269.5,-175.3,421.1,497.2), new cjs.Rectangle(-268.1,-174.4,418.8,494.5), new cjs.Rectangle(-266.6,-173.4,416.6,491.8), new cjs.Rectangle(-265.1,-172.5,414.3,489.1), new cjs.Rectangle(-263.7,-171.5,412.1,486.4), new cjs.Rectangle(-262.3,-170.6,409.7,483.7), new cjs.Rectangle(-260.8,-169.7,407.4,481), new cjs.Rectangle(-259.3,-168.7,405.1,478.3), new cjs.Rectangle(-257.9,-167.8,402.8,475.6), rect=new cjs.Rectangle(-256.5,-166.9,400.6,473), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-610,1200,600);
p.frameBounds = [rect];


(lib.CopyrightScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.copyright_2_mc();
	this.screen_mc.setTransform(1000,600,1,1,0,0,0,600,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.instance = new lib.copyright_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.GravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var body_mc = this.body_mc;
		body_mc.gotoAndStop(0);
		var example_mc = body_mc.example_mc;
		example_mc.gotoAndStop(0);
		example_mc.visible = false;
		/*
		переменные
		*/
		var _that = this;
		var _particleMaxSpeed_num = 4;
		var _particleFadeSpeed_num = 0.01;
		var _particleTotal_num = 25;
		var _particleRange_num = 100;
		var _gravity_num = 0.4;
		/*
		функция добавления частиц
		*/
		function _createExplosionFunc()
		{
			/*
			
			*/
			var particle_mc;
			var i = 0;
			/*
			
			*/
			while (i < _particleTotal_num)
			{
				/*
				
				*/
				var particle_mc = new lib.ParticleGravityExplosionMC();
				body_mc.addChild(particle_mc);
				particle_mc.gotoAndStop(0);
				particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
				particle_mc.x = 0;
				particle_mc.y = 0;
				particle_mc.rotation = Math.random() * 360;
				particle_mc.alpha = Math.random() * (1 - 0.5) + 0.5;
				/*
				
				*/
				particle_mc.boundyLeft_num = - _particleRange_num;
				particle_mc.boundyTop_num = - _particleRange_num;
				particle_mc.boundyRight_num = _particleRange_num;
				particle_mc.boundyBottom_num = _particleRange_num;
				/*
				
				*/
				particle_mc.speedX_num = Math.random() * _particleMaxSpeed_num - Math.random() * _particleMaxSpeed_num;
				particle_mc.speedY_num = Math.random() * _particleMaxSpeed_num - (Math.random() * _particleMaxSpeed_num);
				particle_mc.speedX_num *= _particleMaxSpeed_num;
				particle_mc.speedY_num *= _particleMaxSpeed_num;
				/*
				
				*/
				particle_mc.fadeSpeed_num = Math.random() * _particleFadeSpeed_num;
				/*
				
				*/
				particle_mc.addEventListener("tick", _onTickParticleFunc, false);
				/*
				
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickParticleFunc(event)
		{
			/*
			получаем частицу
			*/
			var target_mc = event.target;
			//target_mc.gotoAndStop(0);
			/*
			
			*/
			target_mc.alpha -= target_mc.fadeSpeed_num;
			target_mc.x += target_mc.speedX_num;
			target_mc.y += target_mc.speedY_num;
			/*
			
			*/
			if(target_mc.speedY_num < _particleMaxSpeed_num)
			{
				target_mc.speedY_num += _gravity_num;
			}
			/*
			
			*/
			if (target_mc.alpha <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
			{
				/*
				
				*/
				target_mc.parent.removeChild(target_mc);
				/*
				
				*/
				_particleTotal_num--;
				if(_particleTotal_num <= 0)
				{
					_that.parent.removeChild(_that);
				}
			}
		}
		/*
		запускаем
		*/
		_createExplosionFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.gravity_explosion_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.flash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.flash_5_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).to({alpha:0.012},8).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.flash_6_mc();
	this.instance_1.setTransform(-80,-80,0.167,0.167);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_2 = new lib.flash_6_mc();
	this.instance_2.setTransform(80,80,0.167,0.167);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90,y:80.1},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,y:80,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_3 = new lib.flash_6_mc();
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.602},0).to({scaleX:0.87,scaleY:0.87,rotation:90},3).to({scaleX:0.33,scaleY:0.33,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_4 = new lib.flash_2_mc();
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.801},0).to({scaleX:1,scaleY:1,alpha:0.012},13).to({_off:true},1).wait(5));

	// animation
	this.instance_5 = new lib.flash_4_mc();
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:1},0).to({alpha:0.012},13).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect];


(lib.sound_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.sound_4_mc();
	this.instance.setTransform(3,0);

	this.instance_1 = new lib.sound_2_mc();
	this.instance_1.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.sound_2_img();
	this.instance_2.setTransform(-35,-35,0.583,0.583);

	this.instance_3 = new lib.sound_1_img();
	this.instance_3.setTransform(-35,-35,0.583,0.583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, rect];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_1_mc();

	this.instance_1 = new lib.play_again_0_mc();
	this.instance_1.setTransform(0,0,1.125,1.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.125,scaleY:1.125,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.125,scaleY:1.125,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.play_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:1.06,scaleY:1.06},5).to({scaleX:1,scaleY:1},10).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-80.9,-80.9,162,162), new cjs.Rectangle(-81.9,-81.9,164,164), new cjs.Rectangle(-83,-83,166,166), new cjs.Rectangle(-84,-84,168,168), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-84.4,-84.4,169,169), new cjs.Rectangle(-83.9,-83.9,168,168), new cjs.Rectangle(-83.4,-83.4,167,167), new cjs.Rectangle(-82.9,-82.9,166,166), new cjs.Rectangle(-82.4,-82.4,165,165), new cjs.Rectangle(-81.9,-81.9,164,164), new cjs.Rectangle(-81.4,-81.4,163,163), new cjs.Rectangle(-80.9,-80.9,162,162), new cjs.Rectangle(-80.4,-80.4,161,161), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_3_mc();
	this.instance.setTransform(-35.1,-27.5,0.418,0.418,-30,0,0,0.6,0.5);

	this.instance_1 = new lib.more_games_3_mc();
	this.instance_1.setTransform(22.4,2.1,0.418,0.418,-30,0,0,0.6,0.5);

	this.instance_2 = new lib.more_games_3_mc();
	this.instance_2.setTransform(40.5,-37.1,0.659,0.659,-45,0,0,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.more_games_9_img();
	this.instance_3.setTransform(-53.1,-46.8,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-47.4,106.4,94.2);
p.frameBounds = [rect];


(lib.more_games_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_3_mc();
	this.instance.setTransform(-39.6,17.8,0.418,0.418,-30,0,0,0.6,0.5);

	this.instance_1 = new lib.more_games_3_mc();
	this.instance_1.setTransform(13.2,-24.5,0.418,0.418,-30,0,0,0.6,0.5);

	this.instance_2 = new lib.more_games_3_mc();
	this.instance_2.setTransform(17.9,27.5,0.418,0.418,-30,0,0,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.more_games_7_img();
	this.instance_3.setTransform(-53.1,-46.8,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-46.8,106.4,93.6);
p.frameBounds = [rect];


(lib.more_games_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_13_mc();
	this.instance.setTransform(0.7,10.2,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8.5,x:0.6},14).to({rotation:0,x:0.7},15).to({rotation:31.2,x:24.9,y:-34.3,alpha:0},10).to({_off:true},1).wait(28).to({_off:false},0).to({rotation:0,x:0.7,y:10.2,alpha:1},11).to({rotation:8.5,x:0.6},12).to({rotation:-9.5,x:0.7},12).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al/DxIrsr8IJlhPIgJAAIStAEIAAAuIDBAAIENCzIoKKBQi1DAk3CPQlQiKiljgg");
	mask.setTransform(-11,-25.6);

	// animation
	this.instance_1 = new lib.more_games_5_mc();
	this.instance_1.setTransform(-30.1,-1.6,0.24,0.24,0,-45,135);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({_off:true},17).wait(36));

	// animation
	this.instance_2 = new lib.more_games_5_mc();
	this.instance_2.setTransform(35.4,1.4,0.24,0.24,45);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({_off:true},18).wait(36));

	// animation
	this.instance_3 = new lib.more_games_5_mc();
	this.instance_3.setTransform(0.4,7.4,0.24,0.24);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({_off:true},20).wait(36));

	// animation
	this.instance_4 = new lib.more_games_5_mc();
	this.instance_4.setTransform(-14.6,1.4,0.24,0.24,0,-45,135);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({_off:true},26).wait(36));

	// animation
	this.instance_5 = new lib.more_games_5_mc();
	this.instance_5.setTransform(14.4,1.4,0.24,0.24,45);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({_off:true},27).wait(36));

	// animation
	this.instance_6 = new lib.more_games_5_mc();
	this.instance_6.setTransform(0.4,-2.6,0.24,0.24);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({_off:true},29).wait(36));

	// animation
	this.instance_7 = new lib.more_games_7_mc();
	this.instance_7.setTransform(-21.7,7);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).to({rotation:-15,x:-26.4,y:-2.7},10).wait(5).to({x:-30.4,y:-15.7},3).to({x:-26.4,y:-2.7},2).wait(19).to({rotation:0,x:-21.7,y:7},6).to({_off:true},1).wait(29));

	// animation
	this.instance_8 = new lib.more_games_9_mc();
	this.instance_8.setTransform(-34.2,-1.3,1,1,-15);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({rotation:-30,x:-40.6,y:-7.5},10).wait(3).to({x:-49.1,y:-16.5},3).to({x:-40.6,y:-7.5},2).wait(21).to({rotation:-15,x:-34.2,y:-1.3},6).to({_off:true},1).wait(29));

	// animation
	this.instance_9 = new lib.more_games_11_mc();
	this.instance_9.setTransform(4.2,4.8);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).to({y:-0.7},10).wait(10).to({y:-8.7},3).to({y:-0.7},3).wait(13).to({y:4.8},6).to({_off:true},1).wait(29));

	// animation
	this.instance_10 = new lib.more_games_4_mc();
	this.instance_10.setTransform(34.8,4.7,1,1,30);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).to({rotation:38.5,x:38.6,y:-2.4},10).wait(21).to({x:47.6,y:-11.4},3).to({x:38.6,y:-2.4},3).wait(2).to({rotation:30,x:34.8,y:4.7},6).to({_off:true},1).wait(29));

	// animation
	this.instance_11 = new lib.more_games_8_mc();
	this.instance_11.setTransform(31.4,-2.9,1,1,15);
	this.instance_11._off = true;

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).to({rotation:23.5,x:36.5,y:-10.4},10).wait(16).to({x:42,y:-26.9},3).to({x:36.5,y:-10.4},3).wait(7).to({rotation:15,x:31.4,y:-2.9},6).to({_off:true},1).wait(29));

	// animation
	this.instance_12 = new lib.more_games_12_mc();
	this.instance_12.setTransform(0.7,10.2,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:8.5,x:0.6},14).to({rotation:0,x:0.7},15).wait(50).to({rotation:8.5,x:0.6},13).to({rotation:-9.5,x:0.7},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.4,-44.8,120.3,109.9);
p.frameBounds = [rect, new cjs.Rectangle(-58.4,-43.5,118.4,107.6), new cjs.Rectangle(-57.5,-42.5,116.7,105.5), new cjs.Rectangle(-56.7,-41.4,114.9,103.4), new cjs.Rectangle(-55.8,-40.4,113.1,101.3), new cjs.Rectangle(-54.8,-39.3,111.2,99.1), new cjs.Rectangle(-53.9,-38.3,109.2,97), new cjs.Rectangle(-52.9,-37.4,107.2,94.9), new cjs.Rectangle(-53.1,-37.2,107.6,95), new cjs.Rectangle(-54.1,-38.4,109.6,97.3), new cjs.Rectangle(-55.1,-39.5,111.5,99.5), new cjs.Rectangle(-56.1,-40.6,113.4,101.7), new cjs.Rectangle(-57,-41.7,115.3,103.9), new cjs.Rectangle(-57.9,-42.7,117,105.9), new cjs.Rectangle(-58.8,-44,119,108.3), new cjs.Rectangle(-58.3,-43.4,118.1,107.1), new cjs.Rectangle(-58,-42.9,117.3,106.3), new cjs.Rectangle(-57.6,-42.5,116.6,105.4), new cjs.Rectangle(-57.1,-41.9,115.6,104.3), new cjs.Rectangle(-56.8,-41.5,114.9,103.4), new cjs.Rectangle(-56.4,-41.1,114.2,102.5), new cjs.Rectangle(-56,-40.6,113.4,101.7), new cjs.Rectangle(-55.4,-40,112.3,100.4), new cjs.Rectangle(-55,-39.6,111.5,99.6), new cjs.Rectangle(-54.6,-39.1,110.7,98.7), new cjs.Rectangle(-54.3,-38.6,110,97.7), new cjs.Rectangle(-53.7,-38,108.9,96.4), new cjs.Rectangle(-53.3,-37.5,108.1,95.5), new cjs.Rectangle(-52.9,-37.1,107.2,94.6), new cjs.Rectangle(-52.5,-41.1,108.4,98.1), new cjs.Rectangle(-52.5,-43.8,111.3,100.8), new cjs.Rectangle(-53.4,-50.8,116.8,107.8), new cjs.Rectangle(-55,-57.8,123,114.8), new cjs.Rectangle(-56.5,-64.6,128.8,121.6), new cjs.Rectangle(-58,-71.3,134.6,128.3), new cjs.Rectangle(-59.6,-77.7,140.1,134.7), new cjs.Rectangle(-61.1,-84,145.5,141), new cjs.Rectangle(-62.6,-90.1,150.6,147.1), new cjs.Rectangle(-64,-96,155.5,153), new cjs.Rectangle(-65.6,-101.9,160.3,158.9), rect=new cjs.Rectangle(-65.5,-47.2,128,104.2), rect, new cjs.Rectangle(-65.6,-47.2,128.1,104.2), new cjs.Rectangle(-68.3,-47.2,130.9,104.2), new cjs.Rectangle(-71.1,-50.2,133.7,107.2), new cjs.Rectangle(-74.1,-53.2,136.6,110.2), new cjs.Rectangle(-69.7,-48.7,132.3,105.7), new cjs.Rectangle(-65.6,-47.2,128.1,104.2), rect=new cjs.Rectangle(-65.5,-47.2,128,104.2), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-65.5,-52.7,128,109.7), new cjs.Rectangle(-65.5,-58.2,128,115.2), new cjs.Rectangle(-65.5,-63.7,128,120.7), new cjs.Rectangle(-65.5,-58.3,128,115.3), new cjs.Rectangle(-65.5,-52.8,128.1,109.8), new cjs.Rectangle(-65.5,-47.2,131,104.2), new cjs.Rectangle(-65.5,-47.2,134,104.2), new cjs.Rectangle(-65.5,-47.2,137.1,104.2), new cjs.Rectangle(-65.5,-47.2,134.1,104.2), new cjs.Rectangle(-65.5,-47.2,131.1,104.2), new cjs.Rectangle(-65.5,-47.2,128.1,104.2), new cjs.Rectangle(-65.5,-47.2,128,104.2), new cjs.Rectangle(-65.6,-101.9,160.3,158.9), new cjs.Rectangle(-63.1,-96.6,154.8,153.6), new cjs.Rectangle(-60.6,-91.2,149.3,148.2), new cjs.Rectangle(-58,-85.7,143.3,142.7), new cjs.Rectangle(-55.5,-80.1,137.4,137.1), new cjs.Rectangle(-52.9,-74.3,131.4,131.3), new cjs.Rectangle(-52.5,-68.3,127.1,125.3), new cjs.Rectangle(-52.5,-62.3,123.3,119.3), new cjs.Rectangle(-52.5,-56.1,119.3,113.1), new cjs.Rectangle(-52.5,-49.6,115.1,106.6), new cjs.Rectangle(-52.5,-43.2,110.8,100.2), new cjs.Rectangle(-52.5,-37.2,106.4,94.2), new cjs.Rectangle(-52.9,-37.1,107.3,94.7), new cjs.Rectangle(-53.5,-37.8,108.5,95.9), new cjs.Rectangle(-54.1,-38.4,109.6,97.3), new cjs.Rectangle(-54.6,-39.1,110.7,98.7), new cjs.Rectangle(-55.2,-39.8,111.9,99.9), new cjs.Rectangle(-55.7,-40.2,112.8,100.9), new cjs.Rectangle(-56.3,-40.9,113.8,102.2), new cjs.Rectangle(-56.8,-41.5,114.9,103.4), new cjs.Rectangle(-57.3,-42.1,116,104.7), new cjs.Rectangle(-57.9,-42.7,117,105.9), new cjs.Rectangle(-58.4,-43.3,118,107.1), rect=new cjs.Rectangle(-58.8,-44,119,108.3), rect, new cjs.Rectangle(-57.6,-42.5,116.7,105.5), new cjs.Rectangle(-56.4,-41.1,114.2,102.6), new cjs.Rectangle(-55.2,-39.8,111.9,99.9), new cjs.Rectangle(-53.9,-38.2,109.3,96.9), new cjs.Rectangle(-52.9,-37.4,107.2,94.9), new cjs.Rectangle(-54,-38.5,109.6,97.4), new cjs.Rectangle(-55.2,-39.8,111.9,99.9), new cjs.Rectangle(-56.3,-41,114.1,102.5), new cjs.Rectangle(-57.3,-42.3,116.3,105), new cjs.Rectangle(-58.4,-43.5,118.3,107.5), new cjs.Rectangle(-59.4,-44.8,120.3,109.9)];


(lib.more_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.more_games_10_mc();
	this.instance.setTransform(0,-5,0.997,0.997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.more_games_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.8,-90.6,225.8,170.6);
p.frameBounds = [rect];


(lib.mini_play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.mini_play_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.mini_play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(0.1,0,0.363,0.362,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.38,scaleY:0.38},0).wait(1).to({scaleX:0.36,scaleY:0.36,alpha:0.801},0).wait(1).to({scaleX:0.38,scaleY:0.38,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.8,-36.2,199.6,72.5);
p.frameBounds = [rect, new cjs.Rectangle(-104.8,-38,209.6,76.1), new cjs.Rectangle(-99.8,-36.2,199.6,72.5), new cjs.Rectangle(-104.8,-38,209.6,76.1)];


(lib.free_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.free_games_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.free_games_img();
	this.instance_2.setTransform(-40,-40,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.free_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.13,scaleY:1.12},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.13,scaleY:1.12,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, new cjs.Rectangle(-45,-45,90,90), new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-45,-45,90,90)];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_mc = new lib.preloader_5_mc();
	this.logo_mc.setTransform(400,260);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// play
	this.play_mc = new lib.preloader_12_mc();
	this.play_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_9_mc();
	this.indicator_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.bg_mc = new lib.preloader_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// decor
	this.mini_play_mc = new lib.mini_play_mc();
	this.mini_play_mc.setTransform(140,90.1,0.667,0.667,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mini_play_mc).wait(1));

	// body
	this.body_mc = new lib.body_title_start_level_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164.5,-109.5,344.5,239.5);
p.frameBounds = [rect];


(lib.title_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// decor
	this.mini_play_mc = new lib.mini_play_mc();
	this.mini_play_mc.setTransform(140,90.1,0.667,0.667,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mini_play_mc).wait(1));

	// body
	this.body_mc = new lib.body_title_next_round_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164.5,-109.5,344.5,239.5);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(120,140,0.737,0.737);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({regX:0.1,regY:0.1,scaleX:0.84,scaleY:0.84,x:120.1,y:140.1,alpha:0.672},10).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:120,y:140,alpha:1},5).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-120,140,0.737,0.737);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({regX:-0.1,regY:0.2,scaleX:0.84,scaleY:0.84,x:-120.1,y:140.2,alpha:0.672},10).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:-120,y:140,alpha:1},5).wait(11));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(0,-140,0.737,0.737);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({regY:-0.1,scaleX:0.84,scaleY:0.84,y:-140.1,alpha:0.672},10).to({regY:0,scaleX:0.74,scaleY:0.74,y:-140,alpha:1},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.5,-280,461,560);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-230.5,-281.9,461,561.9), new cjs.Rectangle(-230.5,-283.9,461,564), new cjs.Rectangle(-230.5,-286,461,566), new cjs.Rectangle(-230.5,-288,461,568), new cjs.Rectangle(-230.5,-289.9,461,570), new cjs.Rectangle(-230.5,-292,461,572), new cjs.Rectangle(-230.5,-294,461,574), new cjs.Rectangle(-230.5,-296,461,576.1), new cjs.Rectangle(-230.5,-298,461,578.1), new cjs.Rectangle(-230.5,-300,461,580), new cjs.Rectangle(-232,-295.9,462.6,578), new cjs.Rectangle(-233.6,-291.9,464.2,576), new cjs.Rectangle(-235.3,-287.9,465.8,574.1), new cjs.Rectangle(-236.8,-283.8,467.4,572), new cjs.Rectangle(-238.4,-280,469,570.1), new cjs.Rectangle(-240,-280,470.5,572.1), new cjs.Rectangle(-241.6,-280,472.1,574.1), new cjs.Rectangle(-243.2,-280,473.7,576.2), new cjs.Rectangle(-244.8,-280,475.3,578.2), new cjs.Rectangle(-246.3,-280,476.8,580), new cjs.Rectangle(-243.1,-280,475.2,576), new cjs.Rectangle(-239.9,-280,473.6,572), new cjs.Rectangle(-236.7,-280,472,568), new cjs.Rectangle(-233.5,-280,470.4,568.1), new cjs.Rectangle(-230.5,-280,468.9,570.1), new cjs.Rectangle(-230.5,-280,470.5,572.1), new cjs.Rectangle(-230.5,-280,472.2,574.1), new cjs.Rectangle(-230.5,-280,473.8,576.2), new cjs.Rectangle(-230.5,-280,475.4,578.2), new cjs.Rectangle(-230.5,-280,476.8,580), new cjs.Rectangle(-230.5,-280,473.7,576.1), new cjs.Rectangle(-230.5,-280,470.5,572), new cjs.Rectangle(-230.5,-280,467.3,568.1), new cjs.Rectangle(-230.5,-280,464.1,564), new cjs.Rectangle(-230.5,-280,461,560)];


(lib.cards_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-165,165,0.733,0.733);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(165,165,0.733,0.733);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(55,165,0.733,0.733);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-55,165,0.733,0.733);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-165,-165,0.733,0.733);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(165,-165,0.733,0.733);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(55,-165,0.733,0.733);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-55,-165,0.733,0.733);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-165,55,0.733,0.733);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(-165,-55,0.733,0.733);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(165,55,0.733,0.733);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(165,-55,0.733,0.733);

	this.instance_12 = new lib.card_mc();
	this.instance_12.setTransform(55,-55,0.733,0.733);

	this.instance_13 = new lib.card_mc();
	this.instance_13.setTransform(-55,-55,0.733,0.733);

	this.instance_14 = new lib.card_mc();
	this.instance_14.setTransform(55,55,0.733,0.733);

	this.instance_15 = new lib.card_mc();
	this.instance_15.setTransform(-55,55,0.733,0.733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-220,440,440);
p.frameBounds = [rect];


(lib.cards_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-155.5,-155.5,0.733,0.733,45,0,0,0.1,0);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(155.6,155.6,0.733,0.733,45,0,0,0.1,0);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-155.5,155.6,0.733,0.733,45,0,0,0,-0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(155.6,-155.6,0.733,0.733,45,0,0,0,-0.1);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-155.5,0,0.733,0.733,45);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(0,155.6,0.733,0.733,45);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-77.8,77.8,0.733,0.733,45,0,0,0,0.1);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(0,-155.5,0.733,0.733,45);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(155.6,0,0.733,0.733,45);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(77.8,-77.8,0.733,0.733,45,0,0,0,-0.1);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-77.8,-77.8,0.733,0.733,45,0,0,-0.1,0);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(77.8,77.8,0.733,0.733,45,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-233.4,-233.4,466.8,466.8);
p.frameBounds = [rect];


(lib.cards_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(150,150);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(0,150);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-150,150);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(150,0);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-150,0);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(150,-150);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(0,-150);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-225,450,450);
p.frameBounds = [rect];


(lib.cards_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-165,165,0.733,0.733);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(55,165,0.733,0.733);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-55,165,0.733,0.733);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(165,-165,0.733,0.733);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(55,-165,0.733,0.733);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-55,-165,0.733,0.733);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-165,55,0.733,0.733);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-165,-55,0.733,0.733);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(165,55,0.733,0.733);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(165,-55,0.733,0.733);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(55,-55,0.733,0.733);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(-55,-55,0.733,0.733);

	this.instance_12 = new lib.card_mc();
	this.instance_12.setTransform(55,55,0.733,0.733);

	this.instance_13 = new lib.card_mc();
	this.instance_13.setTransform(-55,55,0.733,0.733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-220,440,440);
p.frameBounds = [rect];


(lib.cards_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(0,155.6,0.733,0.733,-45);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(155.6,0,0.733,0.733,-45);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(77.8,77.8,0.733,0.733,-45,0,0,0,0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-155.5,0,0.733,0.733,-45);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(0,-155.5,0.733,0.733,-45);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-77.8,-77.8,0.733,0.733,-45,0,0,0,-0.1);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-77.8,77.8,0.733,0.733,-45,0,0,-0.1,0);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(77.8,-77.8,0.733,0.733,-45,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-233.3,-233.3,466.7,466.7);
p.frameBounds = [rect];


(lib.cards_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(0,-150);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(75,0);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(150,150);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-150,150);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(0,150);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-75,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-225,450,450);
p.frameBounds = [rect];


(lib.cards_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(55,165,0.733,0.733);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-55,165,0.733,0.733);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(55,-165,0.733,0.733);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-55,-165,0.733,0.733);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-165,55,0.733,0.733);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-165,-55,0.733,0.733);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(165,55,0.733,0.733);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(165,-55,0.733,0.733);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(55,-55,0.733,0.733);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(-55,-55,0.733,0.733);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(55,55,0.733,0.733);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(-55,55,0.733,0.733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-220,440,440);
p.frameBounds = [rect];


(lib.cards_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-135,-135);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(135,135);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-135,135);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(135,-135);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-110,0,0.8,0.8);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(110,0,0.8,0.8);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(0,110,0.8,0.8);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(0,-110,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.cards_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(75,0);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(75,150);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-75,-150);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-75,0);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-75,150);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(75,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-225,300,450);
p.frameBounds = [rect];


(lib.cards_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-165,165,0.733,0.733);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(165,165,0.733,0.733);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-165,-165,0.733,0.733);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(165,-165,0.733,0.733);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(55,-165,0.733,0.733);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-55,-165,0.733,0.733);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-165,55,0.733,0.733);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-165,-55,0.733,0.733);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(165,55,0.733,0.733);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(165,-55,0.733,0.733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-220,440,440);
p.frameBounds = [rect];


(lib.cards_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-120,120,0.8,0.8);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(0,120,0.8,0.8);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-120,-120,0.8,0.8);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-120,0,0.8,0.8);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(120,-120,0.8,0.8);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(0,-120,0.8,0.8);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(120,0,0.8,0.8);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.cards_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(80,80);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-80,80);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(80,-80);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.animation_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// animation
	this.instance = new lib.title_start_level_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:0.55,scaleY:0.55,x:0.3,y:0.3},0).to({scaleX:1,scaleY:1,x:0.5,y:0.5,alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-110,344.5,239.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-89.7,-59.7,187.9,130.6), new cjs.Rectangle(-94.7,-63,198.3,137.9), new cjs.Rectangle(-99.6,-66.3,208.7,145.1), new cjs.Rectangle(-104.6,-69.6,219.1,152.3), new cjs.Rectangle(-109.6,-73,229.6,159.6), new cjs.Rectangle(-114.6,-76.3,240.1,166.9), new cjs.Rectangle(-119.5,-79.5,250.5,174.1), new cjs.Rectangle(-124.5,-82.9,260.9,181.4), new cjs.Rectangle(-129.5,-86.2,271.4,188.7), new cjs.Rectangle(-134.5,-89.5,281.8,195.9), new cjs.Rectangle(-139.5,-92.8,292.2,203.1), new cjs.Rectangle(-144.4,-96.1,302.7,210.5), new cjs.Rectangle(-149.4,-99.4,313,217.6), new cjs.Rectangle(-154.4,-102.8,323.5,224.9), new cjs.Rectangle(-159.4,-106.1,334,232.2), new cjs.Rectangle(-164.5,-109.5,344.5,239.5)];


(lib.animation_next_round_ru_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.title_next_round_mc();
	this.instance.setTransform(-0.1,-0.1,0.697,0.697,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.1,-76.7,240.1,166.9);
p.frameBounds = [rect, new cjs.Rectangle(-117.7,-78.5,245.5,170.6), new cjs.Rectangle(-120.3,-80.2,251,174.5), new cjs.Rectangle(-122.9,-82,256.5,178.3), new cjs.Rectangle(-125.5,-83.6,262,182.1), new cjs.Rectangle(-128.2,-85.4,267.5,185.9), new cjs.Rectangle(-130.8,-87.2,273,189.7), new cjs.Rectangle(-133.4,-88.9,278.5,193.6), new cjs.Rectangle(-136,-90.6,284,197.4), new cjs.Rectangle(-138.6,-92.4,289.5,201.2), new cjs.Rectangle(-141.3,-94.2,295,205), new cjs.Rectangle(-143.9,-95.9,300.5,208.9), new cjs.Rectangle(-146.5,-97.7,306,212.7), new cjs.Rectangle(-149.2,-99.4,311.5,216.5), new cjs.Rectangle(-151.8,-101.2,316.9,220.3), new cjs.Rectangle(-154.4,-102.9,322.5,224.2), new cjs.Rectangle(-157.1,-104.7,328,228), new cjs.Rectangle(-159.7,-106.4,333.5,231.8), new cjs.Rectangle(-162.3,-108.2,339,235.6), new cjs.Rectangle(-165,-110,344.5,239.5)];


(lib.FlashAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.flash_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_1_mc();

	this.instance_1 = new lib.play_0_mc();
	this.instance_1.setTransform(0,0,1.125,1.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.125,scaleY:1.125,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.125,scaleY:1.125,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.8,-90.6,225.8,170.6);
p.frameBounds = [rect, rect, rect, rect];


(lib.WinScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(450,550);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(350,550);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(100,700);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.photo_btn},{t:this.playAgain_btn},{t:this.facebook_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// free_games
	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.freeGames_mc).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// title
	this.instance_1 = new lib.animation_title_win_mc();
	this.instance_1.setTransform(480,330);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-319.9,1200,1100);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(590,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,860);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn},{t:this.moreGames_btn},{t:this.logo_btn},{t:this.instruction_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.credits_btn}]}).wait(1));

	// free_games
	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,980);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.freeGames_mc).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(220,260,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.301;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(315,295,1,1,0,0,0,315,295);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// decor
	this.maroon_fireworks_comp = new lib.maroon_fireworks_0_mc();
	this.maroon_fireworks_comp.setTransform(200,0);

	this.timeline.addTween(cjs.Tween.get(this.maroon_fireworks_comp).wait(1));

	// decor
	this.maroon_fireworks_comp_1 = new lib.maroon_fireworks_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.maroon_fireworks_comp_1).wait(1));

	// bg
	this.instance_3 = new lib.background_2_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,1025);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// help_mc
	this.help_mc = new lib.help_mc();

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-88,1200,858.1);
p.frameBounds = [rect];


(lib.popup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_start_level_mc();
	this.instance.setTransform(400.5,280.5);

	this.countdown_mc = new lib.countdown_mc();
	this.countdown_mc.setTransform(400,300);

	this.prize_mc = new lib.prize_0_mc();
	this.prize_mc.setTransform(400,300,0.5,0.5);

	this.instance_1 = new lib.animation_next_round_ru_img();
	this.instance_1.setTransform(400,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.countdown_mc}]},1).to({state:[{t:this.prize_mc}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, new cjs.Rectangle(326.2,226.2,147.7,147.7), new cjs.Rectangle(369.2,126,96.2,209), new cjs.Rectangle(-200,0,1200,600)];


(lib.LossScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(695,35);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(765,35);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.playAgain_btn},{t:this.sound_mc},{t:this.fullScreen_mc}]}).wait(1));

	// free_games
	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.freeGames_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// title
	this.instance_1 = new lib.title_loss_mc();
	this.instance_1.setTransform(400.5,300.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_2 = new lib.background_2_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,865);
p.frameBounds = [rect];


(lib.cards_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rounds
	this.round_1 = new lib.cards_0_3_mc();

	this.round_2 = new lib.cards_1_3_mc();

	this.round_3 = new lib.cards_2_3_mc();

	this.round_4 = new lib.cards_3_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).wait(1));

	// bg
	this.instance = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,520);
p.frameBounds = [rect, rect, rect, rect];


(lib.cards_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rounds
	this.round_1 = new lib.cards_0_2_mc();

	this.round_2 = new lib.cards_1_2_mc();

	this.round_3 = new lib.cards_2_2_mc();

	this.round_4 = new lib.cards_3_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).wait(1));

	// bg
	this.instance = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,520);
p.frameBounds = [rect, rect, rect, rect];


(lib.cards_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rounds
	this.round_1 = new lib.cards_0_1_mc();

	this.round_2 = new lib.cards_1_1_mc();

	this.round_3 = new lib.cards_2_1_mc();

	this.round_4 = new lib.cards_3_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).wait(1));

	// bg
	this.instance = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,520);
p.frameBounds = [rect, rect, rect, rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(695,35);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(765,35);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc}]}).wait(1));

	// cards
	this.cards_mc = new lib.cards_3_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(260,40);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_3_mc();
	this.preview_mc.setTransform(660,320);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-88,1200,848.1);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(695,35);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(765,35);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc}]}).wait(1));

	// cards
	this.cards_mc = new lib.cards_2_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(260,40);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_2_mc();
	this.preview_mc.setTransform(660,320);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-88,1200,848.1);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(695,35);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(765,35);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc}]}).wait(1));

	// cards
	this.cards_mc = new lib.cards_1_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(260,40);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_1_mc();
	this.preview_mc.setTransform(660,320);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-88,1200,848.1);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LossScreen();

	this.instance_8 = new lib.WinScreen();

	this.instance_9 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(260,50);

	this.instance_10 = new lib.Cursor();
	this.instance_10.setTransform(200,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120,50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(50,50);

	this.instance_11 = new lib.FlashAnimation();
	this.instance_11.setTransform(400,300);

	this.instance_12 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_10},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-200,0,1200,1020), new cjs.Rectangle(-200,-86.2,1200,856.3), rect=new cjs.Rectangle(-200,-86.2,1200,846.3), rect, rect, new cjs.Rectangle(-200,0,1200,860), new cjs.Rectangle(-200,-319.9,1200,1100), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(15,15,261,70), new cjs.Rectangle(250,150,300,300), new cjs.Rectangle(-200,-610,1200,600), rect=null, rect, rect, rect, rect, rect];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,256.5,75.5);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;