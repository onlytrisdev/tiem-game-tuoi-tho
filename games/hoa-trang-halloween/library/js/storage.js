(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 32,
	color: "#000000",
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
		{src:"library/images/storage_atlas_10.png", id:"storage_atlas_10"},
		{src:"library/images/storage_atlas_11.png", id:"storage_atlas_11"},
		{src:"library/images/storage_atlas_12.png", id:"storage_atlas_12"},
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"},
		{src:"library/images/storage_atlas_14.png", id:"storage_atlas_14"},
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,801,853]]},
		{name:"storage_atlas_4", frames: [[0,0,787,724],[0,726,800,414]]},
		{name:"storage_atlas_5", frames: [[512,0,442,526],[0,748,442,526],[444,748,442,526],[0,546,1200,200],[0,0,510,544]]},
		{name:"storage_atlas_6", frames: [[0,0,442,526],[0,528,442,526],[444,0,442,526],[888,0,380,485],[888,487,380,485],[444,528,380,485]]},
		{name:"storage_atlas_7", frames: [[764,644,420,320],[382,487,380,380],[0,974,500,300],[502,966,420,320],[764,0,480,320],[0,0,380,485],[0,487,380,485],[382,0,380,485],[764,322,420,320]]},
		{name:"storage_atlas_8", frames: [[793,257,380,260],[793,0,431,255],[0,322,370,294],[372,349,342,280],[0,618,342,280],[0,900,342,280],[716,519,342,280],[422,0,369,347],[344,631,338,281],[344,914,320,280],[666,914,320,280],[0,0,420,320]]},
		{name:"storage_atlas_9", frames: [[342,796,340,255],[322,539,340,255],[322,282,340,255],[0,846,340,255],[664,282,280,280],[0,0,320,280],[322,0,320,280],[644,0,320,280],[966,0,320,280],[0,282,320,280],[0,564,320,280],[946,282,280,280],[684,564,280,280],[966,564,280,280],[684,846,280,280],[966,846,280,280]]},
		{name:"storage_atlas_10", frames: [[252,293,250,291],[252,586,250,291],[252,879,250,291],[504,293,250,291],[756,293,250,291],[1008,293,250,291],[504,586,250,291],[504,879,250,291],[756,586,250,291],[1008,586,250,291],[756,879,250,291],[1008,879,250,291],[252,0,250,291],[0,586,250,291],[0,879,250,291],[0,0,250,291],[0,293,250,291],[504,0,250,291],[756,0,250,291],[1008,0,250,291]]},
		{name:"storage_atlas_11", frames: [[0,0,250,291],[0,293,250,291],[0,586,250,291],[0,879,250,291],[252,0,250,291],[504,0,250,291],[756,0,250,291],[1008,0,250,291],[252,293,250,291],[252,586,250,291],[252,879,250,291],[504,293,250,291],[756,293,250,291],[1008,293,250,291],[504,586,250,291],[504,879,250,291],[756,586,250,291],[756,879,250,258],[1008,586,270,255],[1008,843,265,250]]},
		{name:"storage_atlas_12", frames: [[0,546,200,300],[0,244,200,300],[1082,1048,196,167],[1082,879,196,167],[884,1048,196,167],[884,879,196,167],[1009,710,196,167],[811,710,196,167],[686,1126,196,167],[686,957,196,167],[1099,541,196,167],[1099,372,196,167],[613,788,196,167],[901,541,196,167],[901,372,196,167],[784,372,115,305],[435,834,176,206],[152,1007,176,206],[330,1042,176,206],[508,1042,176,206],[606,372,176,206],[606,580,176,206],[0,848,150,378],[767,132,200,238],[969,132,200,238],[404,594,200,238],[404,354,200,238],[202,594,200,238],[202,354,200,238],[202,834,231,171],[263,132,250,220],[515,132,250,220],[0,0,261,242],[263,0,917,64],[263,66,917,64]]},
		{name:"storage_atlas_13", frames: [[0,650,180,180],[0,143,230,141],[0,0,230,141],[1132,1137,141,157],[596,0,180,180],[232,0,180,180],[0,1118,200,123],[1058,599,150,150],[676,751,150,150],[676,903,150,150],[828,751,150,150],[828,1055,150,150],[676,1055,150,150],[1132,903,150,150],[1132,751,150,150],[980,903,150,150],[980,751,150,150],[220,761,150,150],[372,761,150,150],[524,761,150,150],[220,913,150,150],[372,913,150,150],[524,913,150,150],[906,447,150,150],[1058,295,150,150],[1058,447,150,150],[754,599,150,150],[906,599,150,150],[828,903,150,150],[602,247,150,150],[602,399,150,150],[602,551,150,150],[219,1065,150,150],[371,1065,150,150],[523,1065,150,150],[778,143,150,150],[930,143,150,150],[1082,143,150,150],[980,1055,280,80],[0,832,218,141],[0,975,217,141],[778,0,220,141],[1000,0,220,141],[234,247,90,255],[326,247,90,255],[418,247,90,255],[510,247,90,255],[234,504,90,255],[326,504,90,255],[754,295,150,150],[0,286,180,180],[182,286,50,461],[414,0,180,180],[0,468,180,180],[418,504,90,255],[510,504,90,255],[754,447,150,150],[980,1137,150,148],[906,295,150,150],[232,182,425,63]]},
		{name:"storage_atlas_14", frames: [[906,319,120,120],[784,409,120,120],[1126,279,135,107],[437,574,128,103],[539,701,126,84],[152,1240,137,60],[800,1095,90,90],[304,1198,164,100],[1266,933,20,331],[1266,600,20,331],[784,287,120,120],[1059,594,50,148],[820,156,150,129],[1136,0,150,129],[984,0,150,129],[304,1067,150,129],[304,936,150,129],[304,805,150,129],[1214,1090,50,106],[669,684,100,100],[567,574,100,125],[669,574,100,108],[762,1005,100,88],[712,1187,100,81],[1111,594,100,71],[456,905,100,101],[972,131,100,186],[437,679,100,118],[456,799,100,104],[1126,131,100,146],[906,441,100,134],[916,1231,100,69],[698,1102,100,83],[771,735,100,100],[410,208,120,120],[532,208,120,120],[654,208,120,120],[1126,388,120,120],[418,330,120,120],[873,679,80,124],[1018,1231,220,30],[1228,131,50,139],[1111,667,50,139],[1163,667,50,139],[1058,808,50,139],[1058,949,50,139],[1110,808,50,139],[1110,949,50,139],[1162,808,50,139],[1162,949,50,139],[1214,808,50,139],[1214,949,50,139],[1058,1090,50,139],[1110,1090,50,139],[1162,1090,50,139],[902,805,50,150],[955,679,50,150],[954,831,50,150],[1006,831,50,150],[902,957,50,150],[954,983,50,150],[1028,319,40,147],[1248,388,50,210],[1074,131,50,297],[0,0,150,142],[152,52,408,50],[574,0,408,50],[562,52,408,50],[152,104,408,50],[562,104,408,50],[0,156,408,50],[470,1278,442,12],[540,330,120,120],[418,452,120,120],[540,452,120,120],[0,260,131,150],[0,412,131,150],[133,260,131,150],[0,564,131,150],[133,412,131,150],[266,260,131,150],[0,716,131,150],[1006,983,50,150],[266,412,150,129],[0,208,408,50],[266,543,150,129],[133,564,131,150],[1007,594,50,150],[0,868,150,129],[410,156,408,50],[0,999,150,129],[0,1130,150,129],[133,716,150,129],[152,847,150,129],[152,978,150,129],[152,1109,150,129],[285,674,150,129],[662,330,120,120],[662,452,120,120],[456,1008,100,100],[558,787,100,100],[152,0,420,50],[558,889,100,100],[558,991,100,100],[784,531,100,100],[771,633,100,100],[660,1005,100,95],[814,1187,100,80],[456,1110,240,40],[456,1152,240,40],[470,1194,240,40],[470,1236,240,40],[660,837,240,40],[660,879,240,40],[660,921,240,40],[660,963,240,40],[1008,510,200,40],[1008,552,200,40],[886,577,100,100]]},
		{name:"storage_atlas_15", frames: [[52,199,41,96],[207,154,48,48],[0,0,50,106],[0,108,50,106],[0,216,50,106],[67,297,50,53],[0,403,50,92],[52,403,90,50],[52,455,90,50],[207,104,48,48],[207,204,40,40],[0,324,65,77],[186,0,50,50],[123,357,50,41],[52,0,20,197],[67,352,54,49],[74,0,54,49],[74,51,54,49],[74,102,54,49],[95,153,54,49],[95,204,54,49],[119,255,54,49],[123,306,54,49],[130,0,54,49],[130,51,54,49],[130,102,54,49],[151,153,54,49],[151,204,54,49],[175,255,54,49],[238,0,40,40],[238,42,40,40],[144,400,40,40],[175,357,40,40],[179,306,40,40],[144,442,40,40],[186,399,40,40],[217,348,40,40],[221,306,40,40],[231,246,40,40],[186,52,50,50]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.anim_water = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_0_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.belt0 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.belt1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.belt2 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.belt3 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.belt4 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.belt5 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.belt6 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.body_semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bubble_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cream = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cream2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cream_brush = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cream_brush2 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cursor_lak1 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_1 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_2 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_3 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_4 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_6 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_7 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.decor1 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.decor10 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.decor11 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.decor13 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.decor14 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.decor15 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.decor16 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.decor17 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.decor18 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.decor19 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.decor2 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor20 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.decor21 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.decor22 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.decor3 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.decor4 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.decor5 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.decor6 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.decor7 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.decor8 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.decor9 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress1 = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress2 = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress3 = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress4 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress5 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress6 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyebrows1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyebrows2 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyebrows3 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyebrows4 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyebrows5 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyebrows6 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyelashes1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyelashes2 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyelashes3 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyelashes4 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyelashes5 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyelashes6 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyes1 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyes2 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyes3 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyes4 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyes5 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.elsa_eyes6 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.elsa_face = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips1 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips2 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips3 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips4 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips5 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips6 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana1 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana2 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana3 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana4 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana5 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana6 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shadows1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shadows2 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shadows3 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shadows4 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shadows5 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shadows6 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.frame_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.free_games_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.fringe1 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.fringe2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.fringe3 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.fringe4 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.fringe5 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.fringe6 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.fringle0 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.full_sreen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.full_sreen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hair = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hair_back1 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair_back2 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair_back3 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hair_back4 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hair_back5 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hair_back6 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hair_color1 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hair_color2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hair_color3 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hair_color4 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hair_color5 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hair_color6 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hat1 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hat2 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hat3 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hat4 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hat5 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hat6 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hat_back1 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hat_back2 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hat_back3 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hat_back4 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hat_back5 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hat_back6 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor10 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor11 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor12 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor13 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor14 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor15 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor16 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor17 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor18 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor19 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor2 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor20 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor21 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor22 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor3 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor4 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor5 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor6 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor7 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor8 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.icon_decor9 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.icon_tex1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.icon_tex2 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.icon_tex3 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.icon_tex4 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.icon_tex5 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.icon_tex6 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.icon_text7 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.icon_text8 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.icon_text9 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lak0 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.lak1 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.lak10 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.lak11 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.lak12 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.lak13 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lak2 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lak3 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.lak4 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lak5 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.lak6 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.lak7 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.lak8 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.lak9 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.lipstick14 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.lipstick16 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.lipstick17 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.lipstick2 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.lipstick21 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.lipstick5 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.little_hand = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.maneken = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.manicure_hand = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.manicure_hand1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.manicure_hand2 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.manicure_hand3 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.manicure_hand4 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.manicure_hand5 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.mascara1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.mascara11 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.mascara12 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.mascara13 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.mascara15 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.mascara3 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_0 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_1 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_10 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_11 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_12 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_13 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_2 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_3 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_4 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_5 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_6 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_7 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_8 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.nogot_color_9 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.pencil1 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.pencil10 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.pencil13 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.pencil14 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.pencil2 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.pencil6 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.pilka = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.pipe_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.polka = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.rouge1 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.rouge2 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.rouge3 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.rouge4 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.rouge5 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.rouge6 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.set_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.set_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.set_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.set_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.set_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.set_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.set_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.set_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.set_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.set_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.set_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.set_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.shadow_nav_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.shadows15 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.shadows24 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.shadows25 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.shadows4 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.shadows5 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.shadows8 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.sound_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.sound_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.support_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.table_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.texture1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.texture2 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.texture4 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.texture5 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.texture6 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.texture7 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.texture8 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.texture9 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(59);
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


(lib.wardrobe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-192,-17,0.889,0.54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192,-17,378,34);
p.frameBounds = [rect];


(lib.wardrobe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-197,-244.6,0.772,0.899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197,-244.6,394,489.3);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-213,-19,0.988,0.612);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-213,-19,420,38.6);
p.frameBounds = [rect];


(lib.title_filter_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_en_img();
	this.instance.setTransform(-100,-20);

	this.instance_1 = new lib.title_filter_ru_img();
	this.instance_1.setTransform(-100,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-20,200,40);
p.frameBounds = [rect, rect];


(lib.title_filter_body_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_3_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_3_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect];


(lib.title_filter_body_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_2_en_img();

	this.instance_1 = new lib.title_filter_2_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,240,40);
p.frameBounds = [rect, rect];


(lib.title_filter_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_1_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_1_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, new cjs.Rectangle(0,0,240,40)];


(lib.title_filter_body_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_0_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_0_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect];


(lib.textureNail_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_text9();
	this.instance.setTransform(-40,-40,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.textureNail_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_text8();
	this.instance.setTransform(-40,-40,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.textureNail_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_text7();
	this.instance.setTransform(-40,-40,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.textureNail_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_tex6();
	this.instance.setTransform(-40,-40,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.textureNail_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_tex5();
	this.instance.setTransform(-40,-40,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.textureNail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_tex4();
	this.instance.setTransform(-40,-40,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.textureNail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_tex3();
	this.instance.setTransform(-40,-40,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.textureNail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_tex2();
	this.instance.setTransform(-40,-40,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.textureNail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_tex1();
	this.instance.setTransform(-40,-40,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.texture_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.texture1();
	this.instance.setTransform(47.6,-9.2,0.46,0.46,124.5);

	this.instance_1 = new lib.texture2();
	this.instance_1.setTransform(7.9,-41.7,0.594,0.594,51.2);

	this.instance_2 = new lib.texture4();
	this.instance_2.setTransform(-30.5,-35.2);

	this.instance_3 = new lib.texture5();
	this.instance_3.setTransform(-30.4,-35.2,0.733,0.733);

	this.instance_4 = new lib.texture6();
	this.instance_4.setTransform(-6.4,-41.2,0.574,0.574,28.2);

	this.instance_5 = new lib.texture7();
	this.instance_5.setTransform(59.9,4.3,0.785,0.785,129);

	this.instance_6 = new lib.texture8();
	this.instance_6.setTransform(43.2,-7.2,0.662,0.662,126.3);

	this.instance_7 = new lib.texture9();
	this.instance_7.setTransform(-36.1,-41.8,0.593,0.593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{rotation:51.2,x:7.9,y:-41.7}}]},1).to({state:[{t:this.instance_1,p:{rotation:-3.3,x:-28,y:-27.9}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.6,-47.7,95.2,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-38.4,-41.7,83.5,83.5), new cjs.Rectangle(-28,-31.3,62.7,62.7), new cjs.Rectangle(-30.5,-35.2,100,100), new cjs.Rectangle(-30.4,-35.2,73.3,73.3), new cjs.Rectangle(-33.6,-41.2,77.7,77.7), new cjs.Rectangle(-47.5,-42.7,107.4,108), new cjs.Rectangle(-38.7,-38.6,81.9,84.8), new cjs.Rectangle(-36.1,-41.8,88.9,88.9), null];


(lib.table_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.table_img();
	this.instance.setTransform(-458.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-32,917,64);
p.frameBounds = [rect];


(lib.shadows_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows4();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.shadows_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows15();
	this.instance.setTransform(-55,-47,0.733,0.733);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.shadows_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows8();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.shadows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows5();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows24();
	this.instance.setTransform(-55,-47,0.733,0.733);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows25();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.shadow_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_nav_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.set_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_6_img();
	this.instance.setTransform(-49,-42,0.651,0.651);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-42,97.7,84);
p.frameBounds = [rect];


(lib.set_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_5_img();
	this.instance.setTransform(-25.7,-73,0.573,0.573);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.7,-73,51.6,146);
p.frameBounds = [rect];


(lib.set_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_4_img();
	this.instance.setTransform(-9,71,0.35,0.35,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-72,17.6,143);
p.frameBounds = [rect];


(lib.set_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_3_img();
	this.instance.setTransform(-49,-42,0.651,0.651);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-42,97.7,84);
p.frameBounds = [rect];


(lib.set_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_2_img();
	this.instance.setTransform(-20,-59,0.786,0.787);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-59,39.3,118);
p.frameBounds = [rect];


(lib.set_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_1_img();
	this.instance.setTransform(-42,-48,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-48,83.9,96);
p.frameBounds = [rect];


(lib.set_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlgFgQiTiSAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCSQiTCUjOAAQjNAAiTiUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.set_0_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_6_img();
	this.instance.setTransform(-49,-42,0.651,0.651);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-42,97.7,84);
p.frameBounds = [rect];


(lib.set_0_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_5_img();
	this.instance.setTransform(-26,-73,0.573,0.573);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-73,51.6,146);
p.frameBounds = [rect];


(lib.set_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_4_img();
	this.instance.setTransform(-9,71,0.35,0.35,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-72,17.5,143);
p.frameBounds = [rect];


(lib.set_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_3_img();
	this.instance.setTransform(-49,-42,0.651,0.651);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-42,97.7,84);
p.frameBounds = [rect];


(lib.set_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_2_img();
	this.instance.setTransform(-20,-59,0.787,0.787);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-59,39.4,118);
p.frameBounds = [rect];


(lib.set_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_1_img();
	this.instance.setTransform(-42,-48,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-48,83.9,96);
p.frameBounds = [rect];


(lib.pipe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pipe_img();
	this.instance.setTransform(-176.8,-4.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.8,-4.8,353.6,9.6);
p.frameBounds = [rect];


(lib.pilka_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pilka();
	this.instance.setTransform(107.3,-29.6,0.48,0.48,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.1,-29.6,222.3,59.2);
p.frameBounds = [rect];


(lib.object_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzVTUQn/n/AArVQAArUH/oBQIBn/LUAAQLVAAH/H/QIBIBAALUQAALVoBH/Qn/IBrVAAQrUAAoBoBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-175,350,350);
p.frameBounds = [rect];


(lib.object_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk1DcjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkHkHgBl1QABlzEHkIQEIkHFzgBQF1ABEHEHQEIEIAAFzQAAF1kIEHQkHEIl1AAQlzAAkIkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzVTUQn/n/AArVQAArUH/oBQIBn/LUAAQLVAAH/H/QIBIBAALUQAALVoBH/Qn/IBrVAAQrUAAoBoBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-175,350,350);
p.frameBounds = [rect];


(lib.object_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQElElgBGdQABGeklElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzVTUQn/n/AArVQAArUH/oBQIBn/LUAAQLVAAH/H/QIBIBAALUQAALVoBH/Qn/IBrVAAQrUAAoBoBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-175,350,350);
p.frameBounds = [rect];


(lib.object_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ax9H0IAAvnMAj7AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-50,230,100);
p.frameBounds = [rect];


(lib.nogot_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhoCWQg8gogcgfIgKgLIAAgBIgCgCIgMgSQgshCAAhBQAAgfAPggQAIgRAJgMQAJgNAIgFIARgMQAJgGAjgFQAigFBKAjQBIAiApAcQApAdAhAcIA8A2QAeAZAKARQAJAOAEARQAKA4gWAdQgVAcghATQghATgaAFQgVAEgjAAQhNAAhohFg");
	mask.setTransform(-0.3,1.2);

	// Слой 1
	this.instance = new lib.nogot_color_10();
	this.instance.setTransform(-27,-24.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-20.7,52.4,43.8);
p.frameBounds = [rect];


(lib.nogot_color_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nogot_color_0();

	this.instance_1 = new lib.nogot_color_1();

	this.instance_2 = new lib.nogot_color_2();

	this.instance_3 = new lib.nogot_color_3();

	this.instance_4 = new lib.nogot_color_4();

	this.instance_5 = new lib.nogot_color_5();

	this.instance_6 = new lib.nogot_color_6();

	this.instance_7 = new lib.nogot_color_7();

	this.instance_8 = new lib.nogot_color_8();

	this.instance_9 = new lib.nogot_color_9();

	this.instance_10 = new lib.nogot_color_10();

	this.instance_11 = new lib.nogot_color_11();

	this.instance_12 = new lib.nogot_color_12();

	this.instance_13 = new lib.nogot_color_13();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,54,49);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nail_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak13();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak12();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak11();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak10();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak9();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak8();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak7();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak6();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak5();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak4();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak3();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak2();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.nail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak1();
	this.instance.setTransform(-22,-60,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5JXIAAyuIHzAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-60,50,120);
p.frameBounds = [rect];


(lib.manicure_hand5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.manicure_hand5();
	this.instance.setTransform(-110,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-70.5,220,141);
p.frameBounds = [rect];


(lib.manicure_hand4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.manicure_hand4();
	this.instance.setTransform(-115.5,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.5,-85.5,231,171);
p.frameBounds = [rect];


(lib.manicure_hand3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.manicure_hand3();
	this.instance.setTransform(-110,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-70.5,220,141);
p.frameBounds = [rect];


(lib.manicure_hand2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.manicure_hand2();
	this.instance.setTransform(-108.5,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-70.5,217,141);
p.frameBounds = [rect];


(lib.manicure_hand1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.manicure_hand1();
	this.instance.setTransform(-109,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-70.5,218,141);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lips_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick5();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.lips_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick21();
	this.instance.setTransform(-20,-60,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.lips_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick2();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick17();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick16();
	this.instance.setTransform(-20,-60,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick14();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.lak0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak0();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-69.5,50,139);
p.frameBounds = [rect];


(lib.indicator_part_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_4_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,220,30);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.indicator_1_img();
	this.instance.setTransform(-140,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-40,280,80);
p.frameBounds = [rect];


(lib.hint_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hint_2_img();
	this.instance.setTransform(-33,-51.1,0.825,0.825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-51.1,66,102.3);
p.frameBounds = [rect];


(lib.hero_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiSiTAAjOQAAjNCSiTQCTiTDNAAQDOAACTCTQCSCTAADNQAADOiSCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-50,100,100);
p.frameBounds = [rect];


(lib.hero_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiSiTAAjOQAAjNCSiTQCTiTDNAAQDOAACTCTQCSCTAADNQAADOiSCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-50,100,100);
p.frameBounds = [rect];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiSiTAAjOQAAjNCSiTQCTiTDNAAQDOAACTCTQCSCTAADNQAADOiSCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiSiTAAjOQAAjNCSiTQCTiTDNAAQDOAACTCTQCSCTAADNQAADOiSCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.hat6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hat1.png
	this.instance = new lib.hat6();
	this.instance.setTransform(-160.8,-138.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hat_back1.png
	this.instance_1 = new lib.hat_back6();
	this.instance_1.setTransform(-163.3,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.3,-140,342.5,281);
p.frameBounds = [rect];


(lib.hat5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hat1.png
	this.instance = new lib.hat5();
	this.instance.setTransform(-183.7,-153.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hat_back1.png
	this.instance_1 = new lib.hat_back5();
	this.instance_1.setTransform(-184.8,-139.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.8,-153.2,371.1,360.6);
p.frameBounds = [rect];


(lib.hat4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hat1.png
	this.instance = new lib.hat4();
	this.instance.setTransform(-160.8,-138.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hat_back1.png
	this.instance_1 = new lib.hat_back4();
	this.instance_1.setTransform(-163.3,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.3,-140,342.5,280);
p.frameBounds = [rect];


(lib.hat3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hat1.png
	this.instance = new lib.hat3();
	this.instance.setTransform(-161.3,-139.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hat_back1.png
	this.instance_1 = new lib.hat_back3();
	this.instance_1.setTransform(-163.3,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.3,-140,342,280);
p.frameBounds = [rect];


(lib.hat2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hat1.png
	this.instance = new lib.hat2();
	this.instance.setTransform(-160.8,-138.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hat_back1.png
	this.instance_1 = new lib.hat_back2();
	this.instance_1.setTransform(-163.3,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.3,-140,342.5,280);
p.frameBounds = [rect];


(lib.hat1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hat1.png
	this.instance = new lib.hat1();
	this.instance.setTransform(-215.5,-139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hat_back1.png
	this.instance_1 = new lib.hat_back1();
	this.instance_1.setTransform(-163.3,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215.5,-140,431,280);
p.frameBounds = [rect];


(lib.hat_back_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_back1();
	this.instance.setTransform(-102.6,-84,0.6,0.6);

	this.instance_1 = new lib.hat_back2();
	this.instance_1.setTransform(-102.6,-84,0.6,0.6);

	this.instance_2 = new lib.hat_back3();
	this.instance_2.setTransform(-102.6,-84,0.6,0.6);

	this.instance_3 = new lib.hat_back4();
	this.instance_3.setTransform(-102.6,-84,0.6,0.6);

	this.instance_4 = new lib.hat_back5();
	this.instance_4.setTransform(-113.7,-85,0.6,0.6);

	this.instance_5 = new lib.hat_back6();
	this.instance_5.setTransform(-102.6,-84,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-84,205.2,168);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-113.7,-85,221.4,208.2), new cjs.Rectangle(-102.6,-84,202.8,168.6), null];


(lib.hat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat1();
	this.instance.setTransform(-129.3,-76.5,0.6,0.6);

	this.instance_1 = new lib.hat2();
	this.instance_1.setTransform(-96.9,-76.2,0.6,0.6);

	this.instance_2 = new lib.hat3();
	this.instance_2.setTransform(-97.1,-76.7,0.6,0.6);

	this.instance_3 = new lib.hat4();
	this.instance_3.setTransform(-96.3,-76.6,0.6,0.6);

	this.instance_4 = new lib.hat5();
	this.instance_4.setTransform(-108.8,-84.7,0.6,0.6);

	this.instance_5 = new lib.hat6();
	this.instance_5.setTransform(-96.5,-76.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.3,-76.5,258.6,153);
p.frameBounds = [rect, new cjs.Rectangle(-96.9,-76.2,204,153), new cjs.Rectangle(-97.1,-76.7,204,153), new cjs.Rectangle(-96.3,-76.6,204,153), new cjs.Rectangle(-108.8,-84.7,222,176.4), new cjs.Rectangle(-96.5,-76.2,204,153), null];


(lib.hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair();
	this.instance.setTransform(-26.1,-90.7,0.445,0.445,16.5);

	this.instance_1 = new lib.hair_back1();
	this.instance_1.setTransform(-167,-139.1,0.63,0.63);

	this.instance_2 = new lib.hair_back2();
	this.instance_2.setTransform(-167,-139.1,0.63,0.63);

	this.instance_3 = new lib.hair_back3();
	this.instance_3.setTransform(-167,-139.1,0.63,0.63);

	this.instance_4 = new lib.hair_back4();
	this.instance_4.setTransform(-167,-139.1,0.63,0.63);

	this.instance_5 = new lib.hair_back5();
	this.instance_5.setTransform(-167,-139.1,0.63,0.63);

	this.instance_6 = new lib.hair_back6();
	this.instance_6.setTransform(-167,-139.1,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-90.7,111.8,180.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-167,-139.1,239.4,305.6), rect, rect, rect, rect, rect];


(lib.hair_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_color6();
	this.instance.setTransform(-50,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.hair_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_color5();
	this.instance.setTransform(-50,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.hair_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_color4();
	this.instance.setTransform(-50,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.hair_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_color3();
	this.instance.setTransform(-50,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.hair_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_color2();
	this.instance.setTransform(-50,-60,0.5,0.502);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.hair_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_color1();
	this.instance.setTransform(-50,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.fringle_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle0();
	this.instance.setTransform(-28.3,-70.9,0.445,0.445,14.3);

	this.instance_1 = new lib.fringe1();
	this.instance_1.setTransform(-49.2,-53.9,0.63,0.63);

	this.instance_2 = new lib.fringe2();
	this.instance_2.setTransform(-49.2,-53.9,0.63,0.63);

	this.instance_3 = new lib.fringe3();
	this.instance_3.setTransform(-49.2,-53.9,0.63,0.63);

	this.instance_4 = new lib.fringe4();
	this.instance_4.setTransform(-49.2,-53.9,0.63,0.63);

	this.instance_5 = new lib.fringe5();
	this.instance_5.setTransform(-49.2,-53.9,0.63,0.63);

	this.instance_6 = new lib.fringe6();
	this.instance_6.setTransform(-49.2,-53.9,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.6,-70.9,136.2,138.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(-49.2,-53.9,110.9,129.8), rect, rect, rect, rect, rect];


(lib.frame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.frame_img();
	this.instance.setTransform(-195,-130,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-130,390,260);
p.frameBounds = [rect];


(lib.filters_body_open_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.filters_open_img();
	this.instance.setTransform(-45,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect];


(lib.filters_body_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.filters_exit_img();
	this.instance.setTransform(-45,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect];


(lib.filters_bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.filters_bg_img();
	this.instance.setTransform(-190,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-130,380,260);
p.frameBounds = [rect];


(lib.eyes_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_4();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.eyes_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_1();
	this.instance.setTransform(-58,-50,0.776,0.775);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-60,116.4,120);
p.frameBounds = [rect];


(lib.eyes_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_6();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.eyes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_2();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.eyes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_3();
	this.instance.setTransform(-58,-50,0.776,0.775);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-60,116.4,120);
p.frameBounds = [rect];


(lib.eyes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_7();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.eyelash_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara3();
	this.instance.setTransform(-21,-60,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.eyelash_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara13();
	this.instance.setTransform(-21,-60,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.eyelash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara15();
	this.instance.setTransform(-21,-60,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.eyelash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara12();
	this.instance.setTransform(-21,-60,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.eyelash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara11();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.eyelash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara1();
	this.instance.setTransform(-21,-60,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.eyebrows_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil10();
	this.instance.setTransform(-60,46.9,0.371,0.371,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.eyebrows_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil6();
	this.instance.setTransform(-60,46.9,0.371,0.371,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.eyebrows_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil14();
	this.instance.setTransform(-60,46.9,0.371,0.371,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.eyebrows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil13();
	this.instance.setTransform(60,46.9,0.371,0.371,0,45,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.eyebrows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2();
	this.instance.setTransform(60,46.9,0.371,0.371,0,45,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.eyebrows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil1();
	this.instance.setTransform(60,46.9,0.371,0.371,0,45,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.elsa_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_shadows1();
	this.instance.setTransform(-45,-52.4,0.36,0.36);

	this.instance_1 = new lib.elsa_shadows2();
	this.instance_1.setTransform(-45,-52.4,0.36,0.36);

	this.instance_2 = new lib.elsa_shadows3();
	this.instance_2.setTransform(-45,-52.4,0.36,0.36);

	this.instance_3 = new lib.elsa_shadows4();
	this.instance_3.setTransform(-45,-52.4,0.36,0.36);

	this.instance_4 = new lib.elsa_shadows5();
	this.instance_4.setTransform(-45,-52.4,0.36,0.36);

	this.instance_5 = new lib.elsa_shadows6();
	this.instance_5.setTransform(-45,-52.4,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-52.4,90,104.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.elsa_rumana_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_rumana1();
	this.instance.setTransform(-45,-52.4,0.36,0.36);

	this.instance_1 = new lib.elsa_rumana2();
	this.instance_1.setTransform(-45,-52.4,0.36,0.36);

	this.instance_2 = new lib.elsa_rumana3();
	this.instance_2.setTransform(-45,-52.4,0.36,0.36);

	this.instance_3 = new lib.elsa_rumana4();
	this.instance_3.setTransform(-45,-52.4,0.36,0.36);

	this.instance_4 = new lib.elsa_rumana5();
	this.instance_4.setTransform(-45,-52.4,0.36,0.36);

	this.instance_5 = new lib.elsa_rumana6();
	this.instance_5.setTransform(-45,-52.4,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-52.4,90,104.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.elsa_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_lips1();
	this.instance.setTransform(-45,-52.4,0.36,0.36);

	this.instance_1 = new lib.elsa_lips2();
	this.instance_1.setTransform(-45,-52.4,0.36,0.36);

	this.instance_2 = new lib.elsa_lips3();
	this.instance_2.setTransform(-45,-52.4,0.36,0.36);

	this.instance_3 = new lib.elsa_lips4();
	this.instance_3.setTransform(-45,-52.4,0.36,0.36);

	this.instance_4 = new lib.elsa_lips5();
	this.instance_4.setTransform(-45,-52.4,0.36,0.36);

	this.instance_5 = new lib.elsa_lips6();
	this.instance_5.setTransform(-45,-52.4,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-52.4,90,104.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.elsa_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_eyes1();
	this.instance.setTransform(-45,-52.4,0.36,0.36);

	this.instance_1 = new lib.elsa_eyes2();
	this.instance_1.setTransform(-45,-52.4,0.36,0.36);

	this.instance_2 = new lib.elsa_eyes3();
	this.instance_2.setTransform(-45,-52.4,0.36,0.36);

	this.instance_3 = new lib.elsa_eyes4();
	this.instance_3.setTransform(-45,-52.4,0.36,0.36);

	this.instance_4 = new lib.elsa_eyes5();
	this.instance_4.setTransform(-45,-52.4,0.36,0.36);

	this.instance_5 = new lib.elsa_eyes6();
	this.instance_5.setTransform(-45,-52.4,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-52.4,90,104.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.elsa_eyelashes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_eyelashes1();
	this.instance.setTransform(-45,-52.4,0.36,0.36);

	this.instance_1 = new lib.elsa_eyelashes2();
	this.instance_1.setTransform(-45,-52.4,0.36,0.36);

	this.instance_2 = new lib.elsa_eyelashes3();
	this.instance_2.setTransform(-45,-52.4,0.36,0.36);

	this.instance_3 = new lib.elsa_eyelashes4();
	this.instance_3.setTransform(-45,-52.4,0.36,0.36);

	this.instance_4 = new lib.elsa_eyelashes5();
	this.instance_4.setTransform(-45,-52.4,0.36,0.36);

	this.instance_5 = new lib.elsa_eyelashes6();
	this.instance_5.setTransform(-45,-52.4,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-52.4,90,104.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.elsa_eyebrows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_eyebrows1();
	this.instance.setTransform(-45,-52.4,0.36,0.36);

	this.instance_1 = new lib.elsa_eyebrows2();
	this.instance_1.setTransform(-45,-52.4,0.36,0.36);

	this.instance_2 = new lib.elsa_eyebrows3();
	this.instance_2.setTransform(-45,-52.4,0.36,0.36);

	this.instance_3 = new lib.elsa_eyebrows4();
	this.instance_3.setTransform(-45,-52.4,0.36,0.36);

	this.instance_4 = new lib.elsa_eyebrows5();
	this.instance_4.setTransform(-45,-52.4,0.36,0.36);

	this.instance_5 = new lib.elsa_eyebrows6();
	this.instance_5.setTransform(-45,-52.4,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-52.4,90,104.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.dress6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// belt0.png
	this.instance = new lib.belt0();
	this.instance.setTransform(-12,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.dress6();
	this.instance_1.setTransform(-172.6,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// maneken.png
	this.instance_2 = new lib.maneken();
	this.instance_2.setTransform(-400.5,-426.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400.5,-426.5,801,853);
p.frameBounds = [rect];


(lib.dress5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// belt0.png
	this.instance = new lib.belt0();
	this.instance.setTransform(-12,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.dress5();
	this.instance_1.setTransform(-172.6,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// maneken.png
	this.instance_2 = new lib.maneken();
	this.instance_2.setTransform(-400.5,-426.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400.5,-426.5,801,853);
p.frameBounds = [rect];


(lib.dress4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// belt0.png
	this.instance = new lib.belt0();
	this.instance.setTransform(-12,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.dress4();
	this.instance_1.setTransform(-172.6,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// maneken.png
	this.instance_2 = new lib.maneken();
	this.instance_2.setTransform(-400.5,-426.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400.5,-426.5,801,853);
p.frameBounds = [rect];


(lib.dress3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// belt0.png
	this.instance = new lib.belt0();
	this.instance.setTransform(-12,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.dress3();
	this.instance_1.setTransform(-172.6,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// maneken.png
	this.instance_2 = new lib.maneken();
	this.instance_2.setTransform(-400.5,-426.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400.5,-426.5,801,853);
p.frameBounds = [rect];


(lib.dress2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// belt0.png
	this.instance = new lib.belt0();
	this.instance.setTransform(-12,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.dress2();
	this.instance_1.setTransform(-172.6,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// maneken.png
	this.instance_2 = new lib.maneken();
	this.instance_2.setTransform(-400.5,-426.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400.5,-426.5,801,853);
p.frameBounds = [rect];


(lib.dress1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// belt0.png
	this.instance = new lib.belt0();
	this.instance.setTransform(-12,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.dress1();
	this.instance_1.setTransform(-172.6,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// maneken.png
	this.instance_2 = new lib.maneken();
	this.instance_2.setTransform(-400.5,-426.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400.5,-426.5,801,853);
p.frameBounds = [rect];


(lib.dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress1();
	this.instance.setTransform(-132.6,-157.8,0.6,0.6);

	this.instance_1 = new lib.dress2();
	this.instance_1.setTransform(-132.6,-157.8,0.6,0.6);

	this.instance_2 = new lib.dress3();
	this.instance_2.setTransform(-132.6,-157.8,0.6,0.6);

	this.instance_3 = new lib.dress4();
	this.instance_3.setTransform(-132.6,-157.8,0.6,0.6);

	this.instance_4 = new lib.dress5();
	this.instance_4.setTransform(-132.6,-157.8,0.6,0.6);

	this.instance_5 = new lib.dress6();
	this.instance_5.setTransform(-132.6,-157.8,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.6,-157.8,265.2,315.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.decorNail_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor22();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor21();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor20();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor19();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor18();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor17();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor16();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor15();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor14();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor13();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor12();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor11();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor10();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor9();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor8();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor7();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor6();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor5();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor4();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor3();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor2();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decorNail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_decor1();
	this.instance.setTransform(-34,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-34,68,68);
p.frameBounds = [rect];


(lib.decor_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_img();
	this.instance.setTransform(-210,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-160,420,320);
p.frameBounds = [rect];


(lib.decor_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.decor1();
	this.instance.setTransform(-36.8,-7.3,0.647,0.638,-53.2);

	this.instance_1 = new lib.decor2();
	this.instance_1.setTransform(-36.8,-7.3,0.647,0.638,-53.2);

	this.instance_2 = new lib.decor3();
	this.instance_2.setTransform(-36.8,-7.3,0.647,0.638,-53.2);

	this.instance_3 = new lib.decor4();
	this.instance_3.setTransform(-36.8,-7.3,0.647,0.638,-53.2);

	this.instance_4 = new lib.decor5();
	this.instance_4.setTransform(32.3,-7.1,0.794,0.881,0,123.8,132.9);

	this.instance_5 = new lib.decor6();
	this.instance_5.setTransform(25.8,-1.8,0.534,0.612,121);

	this.instance_6 = new lib.decor7();
	this.instance_6.setTransform(-36.1,-2.8,0.543,0.435,-54.5);

	this.instance_7 = new lib.decor8();
	this.instance_7.setTransform(17,-10.1,0.311,0.311,116.3);

	this.instance_8 = new lib.decor9();
	this.instance_8.setTransform(19.7,-6.1,0.315,0.315,126.9);

	this.instance_9 = new lib.decor10();
	this.instance_9.setTransform(11.8,-17,0.276,0.276,84);

	this.instance_10 = new lib.decor11();
	this.instance_10.setTransform(16.6,-14.1,0.296,0.296,100.3);

	this.instance_11 = new lib.decor13();
	this.instance_11.setTransform(28.5,-20.4,0.449,0.449,100.8);

	this.instance_12 = new lib.decor14();
	this.instance_12.setTransform(35,-8,0.475,0.633,125.5);

	this.instance_13 = new lib.decor15();
	this.instance_13.setTransform(22.3,-6.6,0.337,0.424,125.5);

	this.instance_14 = new lib.decor16();
	this.instance_14.setTransform(11.1,-22.6,0.409,0.409,84.3);

	this.instance_15 = new lib.decor17();
	this.instance_15.setTransform(18.4,-5.1,0.257,0.257,124.5);

	this.instance_16 = new lib.decor18();
	this.instance_16.setTransform(-24,-7.3,0.245,0.245,-51.7);

	this.instance_17 = new lib.decor19();
	this.instance_17.setTransform(32.9,-8.6,0.55,0.469,134.8);

	this.instance_18 = new lib.decor20();
	this.instance_18.setTransform(20.3,-4.3,0.276,0.276,128.3);

	this.instance_19 = new lib.decor21();
	this.instance_19.setTransform(26.8,-5.2,0.329,0.329,125.3);

	this.instance_20 = new lib.decor22();
	this.instance_20.setTransform(22.8,-4.7,0.29,0.29,124.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7,p:{rotation:116.3,skewX:0,skewY:0,x:17,y:-10.1}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,skewX:124.5,skewY:-55.5,x:0.3,y:19.1}}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.8,-33.2,73.6,66.4);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-33.5,-33.1,65.9,55), new cjs.Rectangle(-36.2,-30.9,62,51.9), new cjs.Rectangle(-36.1,-47.1,56,61.7), new cjs.Rectangle(-20,-21.6,37,39.4), new cjs.Rectangle(-21,-21.2,39,40.3), new cjs.Rectangle(-24.4,-25,44.1,44.1), new cjs.Rectangle(-15.7,-17,30.4,30.4), new cjs.Rectangle(-25.1,-20.7,41.7,35.8), new cjs.Rectangle(-27.5,-29.5,56.1,53.2), new cjs.Rectangle(-37.9,-40.3,72.9,71), new cjs.Rectangle(-25.3,-26.6,47.6,47.4), new cjs.Rectangle(-17.7,-22.6,32.9,43.5), new cjs.Rectangle(-17.5,-19.8,36,35.9), new cjs.Rectangle(-24,-26.5,50.9,47.4), new cjs.Rectangle(-45.2,-47.6,78.1,78.1), new cjs.Rectangle(-19.3,-22.1,39.7,39.5), new cjs.Rectangle(-31.4,-33,58.3,54.7), new cjs.Rectangle(-25.6,-26.8,48.4,46), null];


(lib.cursor_lak1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cursor_lak1();
	this.instance.setTransform(-25,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-74,50,148);
p.frameBounds = [rect];


(lib.cream2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cream2();
	this.instance.setTransform(-67.7,48.7,0.512,0.512,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-48.6,166.1,97.3);
p.frameBounds = [rect];


(lib.cream_brush_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cream_brush();
	this.instance.setTransform(-10,-165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-165.5,20,331);
p.frameBounds = [rect];


(lib.cream_brus2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cream_brush2();
	this.instance.setTransform(-10,-165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-165.5,20,331);
p.frameBounds = [rect];


(lib.cream_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cream();
	this.instance.setTransform(-82,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-50,164,100);
p.frameBounds = [rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnzPnIAA/NIPnAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-210,-160);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-210,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-160,420,320);
p.frameBounds = [rect, rect];


(lib.body_semicircular_arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_semicircular_arrow_1_img();

	this.instance_1 = new lib.body_semicircular_arrow_2_img();

	this.instance_2 = new lib.body_semicircular_arrow_3_img();

	this.instance_3 = new lib.body_semicircular_arrow_4_img();

	this.instance_4 = new lib.body_semicircular_arrow_5_img();

	this.instance_5 = new lib.body_semicircular_arrow_6_img();

	this.instance_6 = new lib.body_semicircular_arrow_7_img();

	this.instance_7 = new lib.body_semicircular_arrow_8_img();

	this.instance_8 = new lib.body_semicircular_arrow_9_img();

	this.instance_9 = new lib.body_semicircular_arrow_10_img();

	this.instance_10 = new lib.body_semicircular_arrow_11_img();

	this.instance_11 = new lib.body_semicircular_arrow_12_img();

	this.instance_12 = new lib.body_semicircular_arrow_13_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,196,167);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.body_check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_img();
	this.instance.setTransform(-110,-111,0.579,0.579,0,-90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-111,220,220);
p.frameBounds = [rect];


(lib.blush_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge6();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.blush_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge5();
	this.instance.setTransform(-52,-60,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.blush_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge4();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge3();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge2();
	this.instance.setTransform(-52,-60,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-210,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-160,420,320);
p.frameBounds = [rect];


(lib.belt_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.belt1();
	this.instance.setTransform(-69,-42.3,0.6,0.6);

	this.instance_1 = new lib.belt2();
	this.instance_1.setTransform(-69,-47.1,0.6,0.6);

	this.instance_2 = new lib.belt3();
	this.instance_2.setTransform(-69.4,-40.7,0.6,0.6);

	this.instance_3 = new lib.belt4();
	this.instance_3.setTransform(-69,-39.9,0.6,0.6);

	this.instance_4 = new lib.belt5();
	this.instance_4.setTransform(-69,-41.1,0.6,0.6);

	this.instance_5 = new lib.belt6();
	this.instance_5.setTransform(-75,-42.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-42.3,138,84.6);
p.frameBounds = [rect, new cjs.Rectangle(-69,-47.1,81,64.2), new cjs.Rectangle(-69.4,-40.7,84.6,94.2), new cjs.Rectangle(-69,-39.9,76.8,61.8), new cjs.Rectangle(-69,-41.1,75.6,50.4), new cjs.Rectangle(-75,-42.3,82.2,36), null];


(lib.belt_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.belt6();
	this.instance.setTransform(-52.5,-23,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AprASICPmQIPuAgIBaIFIkMDYg");
	this.shape.setTransform(-4.5,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-30.1,124.2,76.8);
p.frameBounds = [rect];


(lib.belt_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.belt5();
	this.instance.setTransform(-48.3,-32.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApugLICcnKIPhgGIBhMGIliCxg");
	this.shape.setTransform(-2,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.4,-43.9,124.8,95.3);
p.frameBounds = [rect];


(lib.belt_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.belt4();
	this.instance.setTransform(-49,-39.5,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApVG9IAIuHIRpA/IA6NWg");
	this.shape.setTransform(-2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.8,-43.7,119.7,92);
p.frameBounds = [rect];


(lib.belt_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.belt3();
	this.instance.setTransform(-54,-60.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aqao0IBbizIRoAHIByV7IqxBNg");
	this.shape.setTransform(3,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.7,-65.9,133.6,149);
p.frameBounds = [rect];


(lib.belt_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.belt2();
	this.instance.setTransform(-51.7,-41,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AphCEIAVpdISBATIAtL1IjsCrg");
	this.shape.setTransform(-3.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.6,-42.6,122.2,94.9);
p.frameBounds = [rect];


(lib.belt_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.belt1();
	this.instance.setTransform(-88.1,-54,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ACpKcIyks6ICmnMIPcg1IN1RdIhGDig");
	this.shape.setTransform(-4.4,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.4,-67.9,204.1,134.5);
p.frameBounds = [rect];


(lib.animation_for_pointer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_pointer_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.anim_water_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.anim_water();
	this.instance.setTransform(-2.2,-6,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.2,-6,10.4,24.4);
p.frameBounds = [rect];


(lib.support_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AphD6QhZgBgBhZIAAk/QABhZBZgBITDAAQBZABABBZIAAE/QgBBZhZABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-25,140,50);
p.frameBounds = [rect];


(lib.support_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxUD6QhagBAAhZIAAk/QAAhZBagBMAipAAAQBaABAABZIAAE/QAABZhaABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-25,240,50);
p.frameBounds = [rect];


(lib.support_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.support_img();
	this.instance.setTransform(-210,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-25,420,50);
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


(lib.shine_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_6_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.radio_button_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.radio_button_0_img();
	this.instance.setTransform(-20,-20,0.222,0.222);

	this.instance_1 = new lib.radio_button_1_img();
	this.instance_1.setTransform(-20,-20,0.222,0.222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, rect];


(lib.photoflash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvnHzIAAvmIfOAAIAAPmg");
	this.shape.setTransform(75,75,0.75,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150,150);
p.frameBounds = [rect];


(lib.photoflash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.photoflash_1_img();
	this.instance.setTransform(-94,-87,0.72,0.72);

	this.instance_1 = new lib.photoflash_2_img();
	this.instance_1.setTransform(-93,-92,0.72,0.72);

	this.instance_2 = new lib.photoflash_3_img();
	this.instance_2.setTransform(-95,-90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[]},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-87,187.9,174.3);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-93,-92,194.4,183.6), rect, rect=new cjs.Rectangle(-95,-90,190.8,180), rect, rect=new cjs.Rectangle(-93,-92,194.4,183.6), rect, rect=new cjs.Rectangle(-94,-87,187.9,174.3), rect, rect=null, rect, rect, rect, rect];


(lib.photoflash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.output_numbers_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numbers
	this.instance = new lib.output_numbers_0_img();
	this.instance.setTransform(-20,-20);

	this.instance_1 = new lib.output_numbers_1_img();
	this.instance_1.setTransform(-20,-20);

	this.instance_2 = new lib.output_numbers_2_img();
	this.instance_2.setTransform(-20,-20);

	this.instance_3 = new lib.output_numbers_3_img();
	this.instance_3.setTransform(-20,-20);

	this.instance_4 = new lib.output_numbers_4_img();
	this.instance_4.setTransform(-20,-20);

	this.instance_5 = new lib.output_numbers_5_img();
	this.instance_5.setTransform(-20,-20);

	this.instance_6 = new lib.output_numbers_6_img();
	this.instance_6.setTransform(-20,-20);

	this.instance_7 = new lib.output_numbers_7_img();
	this.instance_7.setTransform(-20,-20);

	this.instance_8 = new lib.output_numbers_8_img();
	this.instance_8.setTransform(-20,-20);

	this.instance_9 = new lib.output_numbers_9_img();
	this.instance_9.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,350,1,1.167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,700);
p.frameBounds = [rect];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bubble_img();
	this.instance.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.blinking_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.track_move_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.next_1_img();
	this.instance.setTransform(-62,-62,0.687,0.687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-62,123.8,123.8);
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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

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


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_mc();
	this.instance.setTransform(0,90);

	this.instance_1 = new lib.wardrobe_2_mc();
	this.instance_1.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.wardrobe_1_img();
	this.instance_2.setTransform(-219,-234,0.859,0.859);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-219,-234,438,467.2);
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
p.nominalBounds = rect = new cjs.Rectangle(-210,-160,420,320);
p.frameBounds = [rect];


(lib.title_filter_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.title_filter_body_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-19.5,200,40);
p.frameBounds = [rect];


(lib.title_filter_3_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.title_filter_body_3_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.title_filter_2_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.title_filter_body_2_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.5,0.5,240,40);
p.frameBounds = [rect];


(lib.title_filter_1_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.title_filter_body_1_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.title_filter_0_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.title_filter_body_0_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.textureNail_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.semicircular_arrow_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(60,-60,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-45,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-60,60,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.body_semicircular_arrow_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,98,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166,-166,332.1,332.1);
p.frameBounds = [rect];


(lib.semicircular_arrow_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(60,-60,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-45,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-60,60,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.body_semicircular_arrow_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,98,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166,-166,332.1,332.1);
p.frameBounds = [rect];


(lib.semicircular_arrow_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(60,-60,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-45,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-60,60,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.body_semicircular_arrow_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,98,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166,-166,332.1,332.1);
p.frameBounds = [rect];


(lib.semicircular_arrow_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(60,-60,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-45,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-60,60,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.body_semicircular_arrow_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,98,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166,-166,332.1,332.1);
p.frameBounds = [rect];


(lib.nogot4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhoCWQg8gogcgfIgKgLIAAgBIgCgCIgMgSQgshCAAhBQAAgfAPggQAIgRAJgMQAJgNAIgFIARgMQAJgGAjgFQAigFBKAjQBIAiApAcQApAdAhAcIA8A2QAeAZAKARQAJAOAEARQAKA4gWAdQgVAcghATQghATgaAFQgVAEgjAAQhNAAhohFg");
	mask.setTransform(-0.3,1.2);

	// decorNail
	this.decorNail = new lib.decor_all();
	this.decorNail.setTransform(-0.4,3.7);

	this.decorNail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.decorNail).wait(1));

	// textureNail
	this.textureNail = new lib.texture_all();
	this.textureNail.setTransform(-1.4,-2.8);

	this.textureNail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.textureNail).wait(1));

	// nail
	this.nail = new lib.nogot_color_all();
	this.nail.setTransform(0,0,1,1,0,0,0,27,24.5);

	this.nail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.nail).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-20.7,52.4,43.8);
p.frameBounds = [rect];


(lib.nogot3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhoCWQg8gogcgfIgKgLIAAgBIgCgCIgMgSQgshCAAhBQAAgfAPggQAIgRAJgMQAJgNAIgFIARgMQAJgGAjgFQAigFBKAjQBIAiApAcQApAdAhAcIA8A2QAeAZAKARQAJAOAEARQAKA4gWAdQgVAcghATQghATgaAFQgVAEgjAAQhNAAhohFg");
	mask.setTransform(-0.3,1.2);

	// decorNail
	this.decorNail = new lib.decor_all();
	this.decorNail.setTransform(-0.4,3.7);

	this.decorNail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.decorNail).wait(1));

	// textureNail
	this.textureNail = new lib.texture_all();
	this.textureNail.setTransform(-1.4,-2.8);

	this.textureNail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.textureNail).wait(1));

	// nail
	this.nail = new lib.nogot_color_all();
	this.nail.setTransform(0,0,1,1,0,0,0,27,24.5);

	this.nail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.nail).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-20.7,52.4,43.8);
p.frameBounds = [rect];


(lib.nogot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhoCWQg8gogcgfIgKgLIAAgBIgCgCIgMgSQgshCAAhBQAAgfAPggQAIgRAJgMQAJgNAIgFIARgMQAJgGAjgFQAigFBKAjQBIAiApAcQApAdAhAcIA8A2QAeAZAKARQAJAOAEARQAKA4gWAdQgVAcghATQghATgaAFQgVAEgjAAQhNAAhohFg");
	mask.setTransform(-0.3,1.2);

	// decorNail
	this.decorNail = new lib.decor_all();
	this.decorNail.setTransform(-0.4,3.7);

	this.decorNail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.decorNail).wait(1));

	// textureNail
	this.textureNail = new lib.texture_all();
	this.textureNail.setTransform(-1.4,-2.8);

	this.textureNail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.textureNail).wait(1));

	// nail
	this.nail = new lib.nogot_color_all();
	this.nail.setTransform(0,0,1,1,0,0,0,27,24.5);

	this.nail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.nail).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-20.7,52.4,43.8);
p.frameBounds = [rect];


(lib.nogot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhoCWQg8gogcgfIgKgLIAAgBIgCgCIgMgSQgshCAAhBQAAgfAPggQAIgRAJgMQAJgNAIgFIARgMQAJgGAjgFQAigFBKAjQBIAiApAcQApAdAhAcIA8A2QAeAZAKARQAJAOAEARQAKA4gWAdQgVAcghATQghATgaAFQgVAEgjAAQhNAAhohFg");
	mask.setTransform(-0.3,1.2);

	// decorNail
	this.decorNail = new lib.decor_all();
	this.decorNail.setTransform(-0.4,3.7);

	this.decorNail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.decorNail).wait(1));

	// textureNail
	this.textureNail = new lib.texture_all();
	this.textureNail.setTransform(-1.4,-2.8);

	this.textureNail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.textureNail).wait(1));

	// nail
	this.nail = new lib.nogot_color_all();
	this.nail.setTransform(0,0,1,1,0,0,0,27,24.5);

	this.nail.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.nail).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-20.7,52.4,43.8);
p.frameBounds = [rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// animation
	this.instance_1 = new lib.shadow_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},29).to({alpha:1},30).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180.1,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hint_1_mc();
	this.instance.setTransform(-59.6,-12.6,1,1,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-33.5,x:-36.6,y:-31.6},7).to({rotation:0,x:-0.6,y:-40.6},7).to({rotation:42.2,x:31.4,y:-30.6},8).to({rotation:65.5,x:46.4,y:-15.6},7).to({rotation:42.2,x:31.4,y:-30.6},8).to({rotation:0,x:-0.6,y:-40.6},7).to({rotation:-33.5,x:-36.6,y:-31.6},8).to({rotation:-55.9,x:-59.6,y:-12.6},7).wait(1));

	// Слой 1
	this.instance_1 = new lib.hint_1_img();
	this.instance_1.setTransform(-100,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.5,-68.6,220.5,130.2);
p.frameBounds = [rect, new cjs.Rectangle(-116.9,-72.5,216.9,134), new cjs.Rectangle(-113.3,-76.3,213.3,137.9), new cjs.Rectangle(-109.5,-79.9,209.5,141.4), new cjs.Rectangle(-105.4,-83.2,205.5,144.8), new cjs.Rectangle(-101.2,-86.5,201.2,148), new cjs.Rectangle(-100,-89.5,200,151.1), new cjs.Rectangle(-100,-92.5,200,154.1), new cjs.Rectangle(-100,-93.5,200,155.1), new cjs.Rectangle(-100,-94.2,200,155.7), new cjs.Rectangle(-100,-94.5,200,156.1), new cjs.Rectangle(-100,-94.3,200,155.9), new cjs.Rectangle(-100,-93.9,200,155.4), new cjs.Rectangle(-100,-92.9,200,154.5), new cjs.Rectangle(-100,-91.7,200,153.3), new cjs.Rectangle(-100,-93.2,200,154.8), new cjs.Rectangle(-100,-94.3,200,155.9), new cjs.Rectangle(-100,-94.9,200,156.5), new cjs.Rectangle(-100,-95.1,200,156.6), new cjs.Rectangle(-100,-94.7,200,156.3), new cjs.Rectangle(-100,-93.8,200,155.4), new cjs.Rectangle(-100,-92.4,200,154), new cjs.Rectangle(-100,-90.6,200,152.2), new cjs.Rectangle(-100,-87.7,200,149.3), new cjs.Rectangle(-100,-84.8,200,146.3), new cjs.Rectangle(-100,-81.5,200,143), new cjs.Rectangle(-100,-78,200.8,139.6), new cjs.Rectangle(-100,-74.4,202.9,136), new cjs.Rectangle(-100,-70.7,204.8,132.3), new cjs.Rectangle(-100,-66.9,206.6,128.4), new cjs.Rectangle(-100,-70.2,205.1,131.7), new cjs.Rectangle(-100,-73.6,203.4,135.1), new cjs.Rectangle(-100,-76.7,201.6,138.3), new cjs.Rectangle(-100,-79.8,200,141.3), new cjs.Rectangle(-100,-82.7,200,144.2), new cjs.Rectangle(-100,-85.4,200,147), new cjs.Rectangle(-100,-88.1,200,149.6), new cjs.Rectangle(-100,-90.6,200,152.2), new cjs.Rectangle(-100,-92.7,200,154.3), new cjs.Rectangle(-100,-94.2,200,155.7), new cjs.Rectangle(-100,-95,200,156.5), new cjs.Rectangle(-100,-95.1,200,156.6), new cjs.Rectangle(-100,-94.6,200,156.1), new cjs.Rectangle(-100,-93.4,200,155), new cjs.Rectangle(-100,-91.7,200,153.3), new cjs.Rectangle(-100,-92.8,200,154.3), new cjs.Rectangle(-100,-93.6,200,155.2), new cjs.Rectangle(-100,-94.3,200,155.8), rect=new cjs.Rectangle(-100,-94.4,200,156), rect, new cjs.Rectangle(-100,-94.1,200,155.7), new cjs.Rectangle(-100,-93.4,200,154.9), new cjs.Rectangle(-100,-92.5,200,154.1), new cjs.Rectangle(-100,-89.5,200,151.1), new cjs.Rectangle(-101.2,-86.5,201.3,148.1), new cjs.Rectangle(-105.4,-83.3,205.5,144.8), new cjs.Rectangle(-109.5,-79.9,209.5,141.4), new cjs.Rectangle(-113.3,-76.3,213.4,137.9), new cjs.Rectangle(-117,-72.5,217,134), new cjs.Rectangle(-120.5,-68.6,220.5,130.2)];


(lib.headdress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat6_1();
	this.instance.setTransform(0,0,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj0KLIleljIkmt/IAyiXIWJDmIE2QuIp3DJg");
	this.shape.setTransform(3.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.2,-72.4,178,150.4);
p.frameBounds = [rect];


(lib.headdress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat5_1();
	this.instance.setTransform(0,0,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak/JQInGmdIivtvICXi9IWRDmIFBQ+ImcHPg");
	this.shape.setTransform(1.5,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.4,-72.2,190,178.4);
p.frameBounds = [rect];


(lib.headdress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat4_1();
	this.instance.setTransform(0,0,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkYJCIkRj6Ik/uSIBGiDIVnDTIEkP1IhABsIqGBng");
	this.shape.setTransform(2.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-69.8,174.7,143.7);
p.frameBounds = [rect];


(lib.headdress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat3_1();
	this.instance.setTransform(0,0,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjPJ4IldkzIlduNIBTiCIWvDtIERP8InJCsg");
	this.shape.setTransform(3.2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-69.8,181.3,143.2);
p.frameBounds = [rect];


(lib.headdress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat2_1();
	this.instance.setTransform(0,0,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai4KlIlpkVIlqxzIWrC1IFtRoIooCqg");
	this.shape.setTransform(4.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.8,-72.8,181.8,148.1);
p.frameBounds = [rect];


(lib.headdress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat1_1();
	this.instance.setTransform(0,0,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoKIVIpYrkICaoiIZVD7IHWNmIjkElIrvBdg");
	this.shape.setTransform(-6,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.4,-80,224.8,150.9);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.handRight_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.nogot3();
	this.hero_3.setTransform(-1,-3.4,0.096,0.078,0,173.6,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

	// hero_2
	this.hero_2 = new lib.nogot4();
	this.hero_2.setTransform(-2.4,-8.1,0.083,0.083,0,-169.1,10.9,26.7,24.9);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

	// hero_5
	this.hero_5 = new lib.nogot1();
	this.hero_5.setTransform(6.7,3.5,0.096,0.084,0,167.1,-17.2,27.7,25.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_5).wait(1));

	// hero_4
	this.hero_4 = new lib.nogot2();
	this.hero_4.setTransform(4,-1.2,0.1,0.084,0,172.2,-7.7,27.3,23.2);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,-10.9,19.5,22.8);
p.frameBounds = [rect];


(lib.handLeft_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.nogot3();
	this.hero_4.setTransform(-1.5,-0.4,0.096,0.078,0,95.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

	// hero_5
	this.hero_5 = new lib.nogot4();
	this.hero_5.setTransform(-7.6,-2.6,0.083,0.083,0,100.5,-79.5,27.4,24.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_5).wait(1));

	// hero_2
	this.hero_2 = new lib.nogot1();
	this.hero_2.setTransform(4.5,-2.4,0.096,0.084,0,94.8,-89.4,27.9,25.9);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

	// hero_3
	this.hero_3 = new lib.nogot2();
	this.hero_3.setTransform(0.6,-3.1,0.1,0.084,0,92.6,-87.4,27,23.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.3,-5.1,21.2,10.6);
p.frameBounds = [rect];


(lib.hand_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.nogot3();
	this.hero_4.setTransform(311.5,179.3);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

	// hero_5
	this.hero_5 = new lib.nogot4();
	this.hero_5.setTransform(233,182.3,0.863,0.863,-10.7,0,0,26.9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_5).wait(1));

	// hero_2
	this.hero_2 = new lib.nogot1();
	this.hero_2.setTransform(403.5,115.9,1,1,0,0,0,27,24.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

	// hero_3
	this.hero_3 = new lib.nogot2();
	this.hero_3.setTransform(388.5,187,1.05,1.05,0,0,0,27,24.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

	// body
	this.instance = new lib.manicure_hand();
	this.instance.setTransform(-402.3,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-402.3,-207,824.9,431.2);
p.frameBounds = [rect];


(lib.hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.filters_open_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_open_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},19).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.eyelash_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.elsa_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 12
	this.instance = new lib.nogot_main();
	this.instance.setTransform(-211.2,-99.4,0.096,0.078,0,173.6,-6.4);

	this.instance_1 = new lib.nogot_main();
	this.instance_1.setTransform(-212.6,-104.1,0.083,0.083,0,-169.1,10.9,26.7,24.9);

	this.instance_2 = new lib.nogot_main();
	this.instance_2.setTransform(-203.5,-92.5,0.096,0.084,0,167.1,-17.2,27.7,25.8);

	this.instance_3 = new lib.nogot_main();
	this.instance_3.setTransform(-206.2,-97.1,0.1,0.084,0,172.2,-7.7,27.3,23.2);

	this.instance_4 = new lib.nogot_main();
	this.instance_4.setTransform(62.2,-219.2,0.096,0.078,0,95.5,-84.5);

	this.instance_5 = new lib.nogot_main();
	this.instance_5.setTransform(56.1,-221.3,0.083,0.083,0,100.5,-79.5,27.4,24.8);

	this.instance_6 = new lib.nogot_main();
	this.instance_6.setTransform(68.2,-221.2,0.096,0.084,0,94.8,-89.4,27.9,25.9);

	this.instance_7 = new lib.nogot_main();
	this.instance_7.setTransform(64.4,-221.8,0.1,0.084,0,92.6,-87.4,27,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 16
	this.instance_8 = new lib.little_hand();
	this.instance_8.setTransform(41.1,-220.5,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 14
	this.instance_9 = new lib.hat1();
	this.instance_9.setTransform(-123.8,-357.9,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 4
	this.instance_10 = new lib.fringe2();
	this.instance_10.setTransform(-59.1,-303.8,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 9
	this.instance_11 = new lib.elsa_eyelashes4();
	this.instance_11.setTransform(-33.1,-303.2,0.36,0.36,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 11
	this.instance_12 = new lib.elsa_eyebrows3();
	this.instance_12.setTransform(-33.1,-303.2,0.36,0.36,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.elsa_eyes2();
	this.instance_13.setTransform(-33.1,-303.2,0.36,0.36,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 7
	this.instance_14 = new lib.elsa_shadows4();
	this.instance_14.setTransform(-33.1,-303.2,0.36,0.36,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 6
	this.instance_15 = new lib.elsa_lips2();
	this.instance_15.setTransform(-33.1,-303.2,0.36,0.36,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 3
	this.instance_16 = new lib.elsa_rumana2();
	this.instance_16.setTransform(-33.1,-303.2,0.36,0.36,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 2
	this.instance_17 = new lib.elsa_face();
	this.instance_17.setTransform(-33.1,-303.2,0.36,0.36,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// Слой 10
	this.instance_18 = new lib.belt1();
	this.instance_18.setTransform(-91.8,-102.8,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// Слой 13
	this.instance_19 = new lib.dress1();
	this.instance_19.setTransform(-188.8,-165.8,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// Слой 15
	this.instance_20 = new lib.body();
	this.instance_20.setTransform(-317.1,-220.5,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// Слой 5
	this.instance_21 = new lib.hair_back2();
	this.instance_21.setTransform(-139.2,-295.2,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// Слой 17
	this.instance_22 = new lib.hat_back1();
	this.instance_22.setTransform(-92.9,-358.5,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-317.1,-358.5,472.2,572.4);
p.frameBounds = [rect];


(lib.elsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handRight
	this.handRight_mc = new lib.handRight_mc();
	this.handRight_mc.setTransform(-210.2,-95.4,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.handRight_mc).wait(1));

	// handLeft
	this.handLeft_mc = new lib.handLeft_mc();
	this.handLeft_mc.setTransform(64,-218.6,1,1,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.handLeft_mc).wait(1));

	// body
	this.instance = new lib.little_hand();
	this.instance.setTransform(41.1,-220.5,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// headdress
	this.headdress = new lib.hat_all();
	this.headdress.setTransform(5.5,-281.4);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.fringle_all();
	this.fringe.setTransform(-9.9,-249.8);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyelash
	this.eyelash = new lib.elsa_eyelashes_all();
	this.eyelash.setTransform(-3.2,-241,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.eyelash).wait(1));

	// eyebrows
	this.eyebrows = new lib.elsa_eyebrows_all();
	this.eyebrows.setTransform(-3.2,-241,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// eyes
	this.eyes = new lib.elsa_eyes_all();
	this.eyes.setTransform(-3.2,-241,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// shadows
	this.shadows = new lib.elsa_shadows_all();
	this.shadows.setTransform(-3.2,-241,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.elsa_lips_all();
	this.lips.setTransform(-3.2,-241,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.elsa_rumana_all();
	this.blush.setTransform(-3.2,-241,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.elsa_face();
	this.instance_1.setTransform(-33.1,-303.2,0.36,0.36,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// belt
	this.belt = new lib.belt_all();
	this.belt.setTransform(-22.8,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.belt).wait(1));

	// costume
	this.costume = new lib.dress_all();
	this.costume.setTransform(-56.2,-8);

	this.timeline.addTween(cjs.Tween.get(this.costume).wait(1));

	// body
	this.instance_2 = new lib.body();
	this.instance_2.setTransform(-317.1,-220.5,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.hair_all();
	this.hair.setTransform(27.8,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// headdressSecond
	this.headdressSecond = new lib.hat_back_all();
	this.headdressSecond.setTransform(9.7,-274.5);

	this.timeline.addTween(cjs.Tween.get(this.headdressSecond).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-317.1,-358.5,472.2,572.4);
p.frameBounds = [rect];


(lib.decorNail_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.costume_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress6_1();
	this.instance.setTransform(0,0,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ABzPHI0B1bIAXkNIXKpXIEYBQIIkfKIkRHXg");
	this.shape.setTransform(3.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-127.3,234.5,254.7);
p.frameBounds = [rect];


(lib.costume_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress5_1();
	this.instance.setTransform(0,0,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ABzPHI0B1bIAXkNIXKpXIEYBQIIkfKIkRHXg");
	this.shape.setTransform(3.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-127.3,234.5,254.7);
p.frameBounds = [rect];


(lib.costume_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress4_1();
	this.instance.setTransform(0,0,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ABzPHI0B1bIAXkNIXKpXIEYBQIIkfKIkRHXg");
	this.shape.setTransform(3.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-127.3,234.5,254.7);
p.frameBounds = [rect];


(lib.costume_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress3_1();
	this.instance.setTransform(0,0,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ABzPHI0B1bIAXkNIXKpXIEYBQIIkfKIkRHXg");
	this.shape.setTransform(3.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-127.3,234.5,254.7);
p.frameBounds = [rect];


(lib.costume_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress2_1();
	this.instance.setTransform(0,0,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ABzPHI0B1bIAXkNIXKpXIEYBQIIkfKIkRHXg");
	this.shape.setTransform(3.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-127.3,234.5,254.7);
p.frameBounds = [rect];


(lib.costume_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress1_1();
	this.instance.setTransform(0,0,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ABzPHI0B1bIAXkNIXKpXIEYBQIIkfKIkRHXg");
	this.shape.setTransform(3.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-127.3,234.5,254.7);
p.frameBounds = [rect];


(lib.costume_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.corner_filters_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_filter_mc();
	this.instance.setTransform(14.9,-14.7,1,1,45,0,0,0.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.corner_filters_img();
	this.instance_1.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-99.3,189.4,189.3);
p.frameBounds = [rect];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.body_check_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},8).to({alpha:0.801},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-111,220,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.belt_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,0.5,0.857,0.857,0,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({regX:0.6,scaleX:1,scaleY:1,x:0.6,y:0.6},10).to({scaleX:0.57,scaleY:0.57,x:0.4,y:0.4,alpha:0.012},15).wait(20).to({scaleX:0.86,scaleY:0.86,x:0.5,y:0.5,alpha:1},15).wait(1));

	// decor
	this.instance_1 = new lib.decor_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-20,y:-20},19).to({x:0,y:0},20).to({x:-20,y:-20},20).to({x:0,y:0},20).to({x:-10,y:-20},20).to({x:0,y:0},20).wait(1));

	// bg
	this.instance_2 = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-160,420,320);
p.frameBounds = [rect, new cjs.Rectangle(-211,-161,421.1,321.1), new cjs.Rectangle(-212.1,-162.1,422.1,322.1), new cjs.Rectangle(-213.1,-163.1,423.2,323.2), new cjs.Rectangle(-214.2,-164.2,424.2,324.2), new cjs.Rectangle(-215.2,-165.2,425.3,325.3), new cjs.Rectangle(-216.3,-166.3,426.3,326.3), new cjs.Rectangle(-217.3,-167.3,427.4,327.4), new cjs.Rectangle(-218.4,-168.4,428.4,328.4), new cjs.Rectangle(-219.4,-169.4,429.5,329.5), new cjs.Rectangle(-220.5,-170.5,430.6,330.6), new cjs.Rectangle(-221.6,-171.6,431.6,331.6), new cjs.Rectangle(-222.6,-172.6,432.7,332.7), new cjs.Rectangle(-223.7,-173.7,433.7,333.7), new cjs.Rectangle(-224.7,-174.7,434.8,334.8), new cjs.Rectangle(-225.8,-175.8,435.8,335.8), new cjs.Rectangle(-226.8,-176.8,436.9,336.9), new cjs.Rectangle(-227.9,-177.9,437.9,337.9), new cjs.Rectangle(-228.9,-178.9,439,339), new cjs.Rectangle(-230,-180,440,340), new cjs.Rectangle(-229,-179,439,339), new cjs.Rectangle(-228,-178,438,338), new cjs.Rectangle(-227,-177,437,337), new cjs.Rectangle(-226,-176,436,336), new cjs.Rectangle(-225,-175,435,335), new cjs.Rectangle(-224,-174,434,334), new cjs.Rectangle(-223,-173,433,333), new cjs.Rectangle(-222,-172,432,332), new cjs.Rectangle(-221,-171,431,331), new cjs.Rectangle(-220,-170,430,330), new cjs.Rectangle(-219,-169,429,329), new cjs.Rectangle(-218,-168,428,328), new cjs.Rectangle(-217,-167,427,327), new cjs.Rectangle(-216,-166,426,326), new cjs.Rectangle(-215,-165,425,325), new cjs.Rectangle(-214,-164,424,324), new cjs.Rectangle(-213,-163,423,323), new cjs.Rectangle(-212,-162,422,322), new cjs.Rectangle(-211,-161,421,321), new cjs.Rectangle(-210,-160,420,320), new cjs.Rectangle(-211,-161,421,321), new cjs.Rectangle(-212,-162,422,322), new cjs.Rectangle(-213,-163,423,323), new cjs.Rectangle(-214,-164,424,324), new cjs.Rectangle(-215,-165,425,325), new cjs.Rectangle(-216,-166,426,326), new cjs.Rectangle(-217,-167,427,327), new cjs.Rectangle(-218,-168,428,328), new cjs.Rectangle(-219,-169,429,329), new cjs.Rectangle(-220,-170,430,330), new cjs.Rectangle(-221,-171,431,331), new cjs.Rectangle(-222,-172,432,332), new cjs.Rectangle(-223,-173,433,333), new cjs.Rectangle(-224,-174,434,334), new cjs.Rectangle(-225,-175,435,335), new cjs.Rectangle(-226,-176,436,336), new cjs.Rectangle(-227,-177,437,337), new cjs.Rectangle(-228,-178,438,338), new cjs.Rectangle(-229,-179,439,339), new cjs.Rectangle(-230,-180,440,340), new cjs.Rectangle(-229,-179,439,339), new cjs.Rectangle(-228,-178,438,338), new cjs.Rectangle(-227,-177,437,337), new cjs.Rectangle(-226,-176,436,336), new cjs.Rectangle(-225,-175,435,335), new cjs.Rectangle(-224,-174,434,334), new cjs.Rectangle(-223,-173,433,333), new cjs.Rectangle(-222,-172,432,332), new cjs.Rectangle(-221,-171,431,331), new cjs.Rectangle(-220,-170,430,330), new cjs.Rectangle(-219,-169,429,329), new cjs.Rectangle(-218,-168,428,328), new cjs.Rectangle(-217,-167,427,327), new cjs.Rectangle(-216,-166,426,326), new cjs.Rectangle(-215,-165,425,325), new cjs.Rectangle(-214,-164,424,324), new cjs.Rectangle(-213,-163,423,323), new cjs.Rectangle(-212,-162,422,322), new cjs.Rectangle(-211,-161,421,321), new cjs.Rectangle(-210,-160,420,320), new cjs.Rectangle(-210.5,-161,420.5,321), new cjs.Rectangle(-211,-162,421,322), new cjs.Rectangle(-211.5,-163,421.5,323), new cjs.Rectangle(-212,-164,422,324), new cjs.Rectangle(-212.5,-165,422.5,325), new cjs.Rectangle(-213,-166,423,326), new cjs.Rectangle(-213.5,-167,423.5,327), new cjs.Rectangle(-214,-168,424,328), new cjs.Rectangle(-214.5,-169,424.5,329), new cjs.Rectangle(-215,-170,425,330), new cjs.Rectangle(-215.5,-171,425.5,331), new cjs.Rectangle(-216,-172,426,332), new cjs.Rectangle(-216.5,-173,426.5,333), new cjs.Rectangle(-217,-174,427,334), new cjs.Rectangle(-217.5,-175,427.5,335), new cjs.Rectangle(-218,-176,428,336), new cjs.Rectangle(-218.5,-177,428.5,337), new cjs.Rectangle(-219,-178,429,338), new cjs.Rectangle(-219.5,-179,429.5,339), new cjs.Rectangle(-220,-180,430,340), new cjs.Rectangle(-219.5,-179,429.5,339), new cjs.Rectangle(-219,-178,429,338), new cjs.Rectangle(-218.5,-177,428.5,337), new cjs.Rectangle(-218,-176,428,336), new cjs.Rectangle(-217.5,-175,427.5,335), new cjs.Rectangle(-217,-174,427,334), new cjs.Rectangle(-216.5,-173,426.5,333), new cjs.Rectangle(-216,-172,426,332), new cjs.Rectangle(-215.5,-171,425.5,331), new cjs.Rectangle(-215,-170,425,330), new cjs.Rectangle(-214.5,-169,424.5,329), new cjs.Rectangle(-214,-168,424,328), new cjs.Rectangle(-213.5,-167,423.5,327), new cjs.Rectangle(-213,-166,423,326), new cjs.Rectangle(-212.5,-165,422.5,325), new cjs.Rectangle(-212,-164,422,324), new cjs.Rectangle(-211.5,-163,421.5,323), new cjs.Rectangle(-211,-162,421,322), new cjs.Rectangle(-210.5,-161,420.5,321), new cjs.Rectangle(-210,-160,420,320)];


(lib.animation_set_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.19,scaleY:1.19},4).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_6_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.19,scaleY:1.19,alpha:1},4).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-42,97.7,84);
p.frameBounds = [rect, new cjs.Rectangle(-51.3,-44,102.3,88), new cjs.Rectangle(-53.6,-46,107,92), new cjs.Rectangle(-55.9,-47.9,111.6,96), new cjs.Rectangle(-58.3,-50,116.3,100), new cjs.Rectangle(-57.3,-49.1,114.4,98.4), new cjs.Rectangle(-56.4,-48.3,112.6,96.8), new cjs.Rectangle(-55.5,-47.5,110.7,95.2), new cjs.Rectangle(-54.5,-46.7,108.9,93.6), new cjs.Rectangle(-53.6,-45.9,107,92), new cjs.Rectangle(-52.7,-45.1,105.1,90.4), new cjs.Rectangle(-51.7,-44.3,103.3,88.8), new cjs.Rectangle(-50.8,-43.5,101.4,87.2), new cjs.Rectangle(-49.9,-42.7,99.6,85.6), new cjs.Rectangle(-49,-42,97.7,84)];


(lib.animation_set_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_5_mc();
	this.instance_1.setTransform(0.2,0);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.8,-73,51.6,146);
p.frameBounds = [rect, new cjs.Rectangle(-26.3,-74.7,52.8,149.5), new cjs.Rectangle(-26.9,-76.4,54,153), new cjs.Rectangle(-27.5,-78.2,55.2,156.5), new cjs.Rectangle(-28.2,-80,56.5,160), new cjs.Rectangle(-27.9,-79.2,56,158.6), new cjs.Rectangle(-27.7,-78.5,55.5,157.2), new cjs.Rectangle(-27.4,-77.8,55,155.8), new cjs.Rectangle(-27.2,-77.1,54.5,154.4), new cjs.Rectangle(-26.9,-76.4,54,153), new cjs.Rectangle(-26.7,-75.7,53.5,151.6), new cjs.Rectangle(-26.4,-75,53,150.2), new cjs.Rectangle(-26.2,-74.3,52.5,148.8), new cjs.Rectangle(-25.9,-73.6,52,147.4), new cjs.Rectangle(-25.8,-73,51.6,146)];


(lib.animation_set_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12},4).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_4_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.12,scaleY:1.12,alpha:1},4).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-72,17.6,143);
p.frameBounds = [rect, new cjs.Rectangle(-9.2,-74.1,18.1,147.3), new cjs.Rectangle(-9.5,-76.3,18.6,151.5), new cjs.Rectangle(-9.7,-78.4,19.1,155.8), new cjs.Rectangle(-10,-80.5,19.6,160), new cjs.Rectangle(-9.9,-79.7,19.4,158.3), new cjs.Rectangle(-9.8,-78.8,19.2,156.6), new cjs.Rectangle(-9.7,-78,19,154.9), new cjs.Rectangle(-9.6,-77.1,18.8,153.2), new cjs.Rectangle(-9.5,-76.3,18.6,151.5), new cjs.Rectangle(-9.4,-75.4,18.4,149.8), new cjs.Rectangle(-9.3,-74.6,18.2,148.1), new cjs.Rectangle(-9.2,-73.7,18,146.4), new cjs.Rectangle(-9.1,-72.9,17.8,144.7), new cjs.Rectangle(-9,-72,17.6,143)];


(lib.animation_set_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.19,scaleY:1.19},4).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_3_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.19,scaleY:1.19,alpha:1},4).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-42,97.7,84);
p.frameBounds = [rect, new cjs.Rectangle(-51.3,-44,102.3,88), new cjs.Rectangle(-53.6,-46,107,92), new cjs.Rectangle(-55.9,-47.9,111.6,96), new cjs.Rectangle(-58.3,-50,116.3,100), new cjs.Rectangle(-57.3,-49.1,114.4,98.4), new cjs.Rectangle(-56.4,-48.3,112.6,96.8), new cjs.Rectangle(-55.5,-47.5,110.7,95.2), new cjs.Rectangle(-54.5,-46.7,108.9,93.6), new cjs.Rectangle(-53.6,-45.9,107,92), new cjs.Rectangle(-52.7,-45.1,105.1,90.4), new cjs.Rectangle(-51.7,-44.3,103.3,88.8), new cjs.Rectangle(-50.8,-43.5,101.4,87.2), new cjs.Rectangle(-49.9,-42.7,99.6,85.6), new cjs.Rectangle(-49,-42,97.7,84)];


(lib.animation_set_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_2_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1,scaleY:1.1,alpha:1},4).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-59,39.4,118);
p.frameBounds = [rect, new cjs.Rectangle(-20.5,-60.4,40.4,121), new cjs.Rectangle(-21,-61.9,41.4,124), new cjs.Rectangle(-21.5,-63.4,42.4,127), new cjs.Rectangle(-22,-65,43.4,130), new cjs.Rectangle(-21.8,-64.3,43,128.8), new cjs.Rectangle(-21.6,-63.7,42.6,127.6), new cjs.Rectangle(-21.4,-63.1,42.2,126.4), new cjs.Rectangle(-21.2,-62.5,41.8,125.2), new cjs.Rectangle(-21,-61.9,41.4,124), new cjs.Rectangle(-20.8,-61.3,41,122.8), new cjs.Rectangle(-20.6,-60.7,40.6,121.6), new cjs.Rectangle(-20.4,-60.1,40.2,120.4), new cjs.Rectangle(-20.2,-59.5,39.8,119.2), new cjs.Rectangle(-20,-59,39.4,118)];


(lib.animation_set_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15},4).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_1_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.15,scaleY:1.15,alpha:1},4).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-48,83.9,96);
p.frameBounds = [rect, new cjs.Rectangle(-43.5,-49.7,86.9,99.5), new cjs.Rectangle(-45,-51.4,89.9,103), new cjs.Rectangle(-46.5,-53.2,93,106.5), new cjs.Rectangle(-48.1,-55,96.1,110), new cjs.Rectangle(-47.4,-54.2,94.9,108.6), new cjs.Rectangle(-46.8,-53.5,93.6,107.2), new cjs.Rectangle(-46.2,-52.8,92.4,105.8), new cjs.Rectangle(-45.6,-52.1,91.2,104.4), new cjs.Rectangle(-45,-51.4,89.9,103), new cjs.Rectangle(-44.4,-50.7,88.8,101.6), new cjs.Rectangle(-43.8,-50,87.5,100.2), new cjs.Rectangle(-43.2,-49.3,86.3,98.8), new cjs.Rectangle(-42.6,-48.6,85.1,97.4), new cjs.Rectangle(-42,-48,83.9,96)];


(lib.animation_for_pointer_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_for_pointer_2_mc();
	this.instance.setTransform(0,0,0.111,0.111);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,alpha:0.898},5).to({scaleX:0.89,scaleY:0.89,alpha:0.012},15).to({_off:true},1).wait(35));

	// animation
	this.instance_1 = new lib.animation_for_pointer_2_mc();
	this.instance_1.setTransform(0,0,0.111,0.111);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,alpha:0.898},5).to({scaleX:0.89,scaleY:0.89,alpha:0.012},15).to({_off:true},1).wait(30));

	// animation
	this.instance_2 = new lib.animation_for_pointer_2_mc();
	this.instance_2.setTransform(0,0,0.111,0.111);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,alpha:0.898},5).to({scaleX:0.89,scaleY:0.89,alpha:0.012},15).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-10,-10,20,20), new cjs.Rectangle(-11.9,-11.9,24,24), new cjs.Rectangle(-13.9,-13.9,28,28), new cjs.Rectangle(-15.9,-15.9,32,32), new cjs.Rectangle(-17.9,-17.9,36,36), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-27.9,-27.9,56,56), new cjs.Rectangle(-31.9,-31.9,64,64), new cjs.Rectangle(-35.9,-35.9,72,72), new cjs.Rectangle(-39.9,-39.9,80,80), new cjs.Rectangle(-43.9,-43.9,88,88), new cjs.Rectangle(-47.9,-47.9,96,96), new cjs.Rectangle(-51.9,-51.9,104,104), new cjs.Rectangle(-55.9,-55.9,112,112), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-63.9,-63.9,128,128), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-75.9,-75.9,152,152), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-63.9,-63.9,128,128), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-75.9,-75.9,152,152), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-63.9,-63.9,128,128), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-75.9,-75.9,152,152), new cjs.Rectangle(-80,-80,160,160), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_for_pointer_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.animation_for_pointer_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.animation_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

	// Слой 8
	this.instance = new lib.cursor_lak1_1();
	this.instance.setTransform(313.7,149.9,1,1,-150);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:108.7,y:-7,alpha:1},7).to({x:100.7,y:21},4).to({x:124.7,y:37},5).to({x:101.7,y:21},4).to({x:197.7,y:30},9).to({x:223.7,y:54.4},4).to({x:202.7,y:30.4},4).to({x:251.7,y:15.4},5).to({x:275.7,y:35.4},4).to({x:250.8,y:16.9},4).to({x:276.8,y:36.9},4).to({x:267.8,y:-56.1},6).to({x:294.8,y:-38.1},4).to({x:269.8,y:-53.1},4).to({x:306.8,y:-126.1,alpha:0.012},7).to({_off:true},1).wait(1));

	// polka.png
	this.instance_1 = new lib.polka();
	this.instance_1.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77));

	// Слой 2
	this.instance_2 = new lib.manicure_hand5_1();
	this.instance_2.setTransform(160.5,61);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({alpha:1},57).wait(9));

	// manicure_hand3
	this.instance_3 = new lib.manicure_hand3_1();
	this.instance_3.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},68).wait(9));

	// manicure_hand.png
	this.instance_4 = new lib.manicure_hand();
	this.instance_4.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.lak0_1();
	this.instance.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// polka.png
	this.instance_1 = new lib.polka();
	this.instance_1.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// manicure_hand3
	this.instance_2 = new lib.manicure_hand3_1();
	this.instance_2.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// manicure_hand.png
	this.instance_3 = new lib.manicure_hand();
	this.instance_3.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect];


(lib.animation_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Слой 4
	this.instance = new lib.cream_brus2();
	this.instance.setTransform(-3.6,-1.6,0.855,0.855,-135);

	this.instance_1 = new lib.cream_brush_1();
	this.instance_1.setTransform(316.4,-105.6,0.855,0.855,-135);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:145.3,y:-132.6},7).to({x:316.4,y:-105.6},7).to({_off:true},3).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},3).to({x:359.4,y:-177,alpha:0.012},7).to({_off:true},1).wait(35));

	// Слой 2
	this.instance_2 = new lib.cream_1();
	this.instance_2.setTransform(-72.5,141.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({x:-163.4,y:178.4,alpha:0.012},7).to({_off:true},1).wait(35));

	// Слой 3
	this.instance_3 = new lib.anim_water_1();
	this.instance_3.setTransform(221.6,-12,1,1,0,-120,60,3.1,6.2);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},3).wait(7).to({alpha:0.012},35).wait(1));

	// Слой 7
	this.instance_4 = new lib.anim_water_1();
	this.instance_4.setTransform(205.6,62,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({alpha:0.012},35).wait(1));

	// Слой 6
	this.instance_5 = new lib.anim_water_1();
	this.instance_5.setTransform(152.6,77,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({alpha:0.012},35).wait(1));

	// Слой 5
	this.instance_6 = new lib.anim_water_1();
	this.instance_6.setTransform(53.6,74,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({alpha:0.012},35).wait(1));

	// Слой 8
	this.instance_7 = new lib.lak0_1();
	this.instance_7.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// polka.png
	this.instance_8 = new lib.polka();
	this.instance_8.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

	// manicure_hand3
	this.instance_9 = new lib.manicure_hand3_1();
	this.instance_9.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));

	// manicure_hand4
	this.instance_10 = new lib.manicure_hand4_1();
	this.instance_10.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({alpha:0.012},41).to({_off:true},1).wait(1));

	// manicure_hand.png
	this.instance_11 = new lib.manicure_hand();
	this.instance_11.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.cream_brush_1();
	this.instance.setTransform(-3.6,-1.6,0.855,0.855,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.cream_1();
	this.instance_1.setTransform(-72.5,141.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.anim_water_1();
	this.instance_2.setTransform(205.6,62,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 6
	this.instance_3 = new lib.anim_water_1();
	this.instance_3.setTransform(152.6,77,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 5
	this.instance_4 = new lib.anim_water_1();
	this.instance_4.setTransform(53.6,74,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 8
	this.instance_5 = new lib.lak0_1();
	this.instance_5.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// polka.png
	this.instance_6 = new lib.polka();
	this.instance_6.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// manicure_hand3
	this.instance_7 = new lib.manicure_hand3_1();
	this.instance_7.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// manicure_hand4
	this.instance_8 = new lib.manicure_hand4_1();
	this.instance_8.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// manicure_hand.png
	this.instance_9 = new lib.manicure_hand();
	this.instance_9.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect];


(lib.animation_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Слой 4
	this.instance = new lib.cream_brus2();
	this.instance.setTransform(-3.6,-1.6,0.855,0.855,-135);

	this.instance_1 = new lib.cream_brush_1();
	this.instance_1.setTransform(299.4,-32.6,0.855,0.855,-135);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:111.4,y:-91.6},7).to({x:299.4,y:-32.6},7).to({_off:true},3).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},3).to({x:161.4,y:-89.6},7).to({x:-3.6,y:-1.6},5).wait(1));

	// Слой 2
	this.instance_2 = new lib.cream_1();
	this.instance_2.setTransform(-72.5,141.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// Слой 3
	this.instance_3 = new lib.anim_water_1();
	this.instance_3.setTransform(205.6,62,1,1,0,-120,60,3.1,6.2);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},3).wait(13));

	// Слой 6
	this.instance_4 = new lib.anim_water_1();
	this.instance_4.setTransform(152.6,77,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// Слой 5
	this.instance_5 = new lib.anim_water_1();
	this.instance_5.setTransform(53.6,74,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// Слой 8
	this.instance_6 = new lib.lak0_1();
	this.instance_6.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// polka.png
	this.instance_7 = new lib.polka();
	this.instance_7.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// manicure_hand3
	this.instance_8 = new lib.manicure_hand3_1();
	this.instance_8.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

	// manicure_hand4
	this.instance_9 = new lib.manicure_hand4_1();
	this.instance_9.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30));

	// manicure_hand.png
	this.instance_10 = new lib.manicure_hand();
	this.instance_10.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.cream_brush_1();
	this.instance.setTransform(-3.6,-1.6,0.855,0.855,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.cream_1();
	this.instance_1.setTransform(-72.5,141.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.anim_water_1();
	this.instance_2.setTransform(152.6,77,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.instance_3 = new lib.anim_water_1();
	this.instance_3.setTransform(53.6,74,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 8
	this.instance_4 = new lib.lak0_1();
	this.instance_4.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// polka.png
	this.instance_5 = new lib.polka();
	this.instance_5.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// manicure_hand3
	this.instance_6 = new lib.manicure_hand3_1();
	this.instance_6.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// manicure_hand4
	this.instance_7 = new lib.manicure_hand4_1();
	this.instance_7.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// manicure_hand.png
	this.instance_8 = new lib.manicure_hand();
	this.instance_8.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect];


(lib.animation_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Слой 4
	this.instance = new lib.cream_brus2();
	this.instance.setTransform(-3.6,-1.6,0.855,0.855,-135);

	this.instance_1 = new lib.cream_brush_1();
	this.instance_1.setTransform(249.4,-18.6,0.855,0.855,-135);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:133.4,y:-85.6},7).to({x:249.4,y:-18.6},7).to({_off:true},3).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},3).to({x:161.4,y:-89.6},7).to({x:-3.6,y:-1.6},5).wait(1));

	// Слой 2
	this.instance_2 = new lib.cream_1();
	this.instance_2.setTransform(-72.5,141.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// Слой 3
	this.instance_3 = new lib.anim_water_1();
	this.instance_3.setTransform(152.6,77,1,1,0,-120,60,3.1,6.2);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},3).wait(13));

	// Слой 5
	this.instance_4 = new lib.anim_water_1();
	this.instance_4.setTransform(53.6,74,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// Слой 8
	this.instance_5 = new lib.lak0_1();
	this.instance_5.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// polka.png
	this.instance_6 = new lib.polka();
	this.instance_6.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// manicure_hand3
	this.instance_7 = new lib.manicure_hand3_1();
	this.instance_7.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// manicure_hand4
	this.instance_8 = new lib.manicure_hand4_1();
	this.instance_8.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

	// manicure_hand.png
	this.instance_9 = new lib.manicure_hand();
	this.instance_9.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.cream_brush_1();
	this.instance.setTransform(-3.6,-1.6,0.855,0.855,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.cream_1();
	this.instance_1.setTransform(-72.5,141.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.anim_water_1();
	this.instance_2.setTransform(53.6,74,1,1,0,-120,60,3.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 8
	this.instance_3 = new lib.lak0_1();
	this.instance_3.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// polka.png
	this.instance_4 = new lib.polka();
	this.instance_4.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// manicure_hand3
	this.instance_5 = new lib.manicure_hand3_1();
	this.instance_5.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// manicure_hand4
	this.instance_6 = new lib.manicure_hand4_1();
	this.instance_6.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// manicure_hand.png
	this.instance_7 = new lib.manicure_hand();
	this.instance_7.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect];


(lib.animation_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Слой 4
	this.instance = new lib.cream_brus2();
	this.instance.setTransform(-3.6,-1.6,0.855,0.855,-135);

	this.instance_1 = new lib.cream_brush_1();
	this.instance_1.setTransform(143.4,-23.6,0.855,0.855,-135);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.4,y:-44.6},7).to({x:143.4,y:-23.6},7).to({_off:true},3).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},3).to({x:64.4,y:-85.6},7).to({x:-3.6,y:-1.6},5).wait(1));

	// Слой 2
	this.instance_2 = new lib.cream_1();
	this.instance_2.setTransform(-72.5,141.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// Слой 3
	this.instance_3 = new lib.anim_water_1();
	this.instance_3.setTransform(53.6,74,1,1,0,-120,60,3.1,6.2);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},3).wait(13));

	// Слой 8
	this.instance_4 = new lib.lak0_1();
	this.instance_4.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// polka.png
	this.instance_5 = new lib.polka();
	this.instance_5.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// manicure_hand3
	this.instance_6 = new lib.manicure_hand3_1();
	this.instance_6.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// manicure_hand4
	this.instance_7 = new lib.manicure_hand4_1();
	this.instance_7.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// manicure_hand.png
	this.instance_8 = new lib.manicure_hand();
	this.instance_8.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.cream_brush_1();
	this.instance.setTransform(-3.6,-1.6,0.855,0.855,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.cream_1();
	this.instance_1.setTransform(-72.5,141.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 8
	this.instance_2 = new lib.lak0_1();
	this.instance_2.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// polka.png
	this.instance_3 = new lib.polka();
	this.instance_3.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// manicure_hand3
	this.instance_4 = new lib.manicure_hand3_1();
	this.instance_4.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// manicure_hand4
	this.instance_5 = new lib.manicure_hand4_1();
	this.instance_5.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// manicure_hand.png
	this.instance_6 = new lib.manicure_hand();
	this.instance_6.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect];


(lib.animation_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 4
	this.instance = new lib.cream_brush_1();
	this.instance.setTransform(153.4,-103.6,0.855,0.855,-105);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-135,x:-3.6,y:-1.6,alpha:1},9).wait(1));

	// Слой 2
	this.instance_1 = new lib.cream_1();
	this.instance_1.setTransform(171.5,200.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-72.5,y:141.4},9).wait(1));

	// Слой 8
	this.instance_2 = new lib.lak0_1();
	this.instance_2.setTransform(295.5,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// polka.png
	this.instance_3 = new lib.polka();
	this.instance_3.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// manicure_hand3
	this.instance_4 = new lib.manicure_hand3_1();
	this.instance_4.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// manicure_hand4
	this.instance_5 = new lib.manicure_hand4_1();
	this.instance_5.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// manicure_hand.png
	this.instance_6 = new lib.manicure_hand();
	this.instance_6.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.lak0_1();
	this.instance.setTransform(295.5,180.9);

	this.instance_1 = new lib.cream_1();
	this.instance_1.setTransform(171.5,200.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_2 = new lib.polka();
	this.instance_2.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// manicure_hand3
	this.instance_3 = new lib.manicure_hand3_1();
	this.instance_3.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// manicure_hand4
	this.instance_4 = new lib.manicure_hand4_1();
	this.instance_4.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// manicure_hand.png
	this.instance_5 = new lib.manicure_hand();
	this.instance_5.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect];


(lib.animation_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// Слой 2
	this.instance = new lib.cream2_1();
	this.instance.setTransform(-92.5,40.1,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({rotation:150,x:-212.4,y:-49.9,alpha:0.012},8).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.cream_brush_1();
	this.instance_1.setTransform(24.4,-105.6,0.855,0.855,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-150,x:-18.6,y:-91.6},4).to({x:-0.6,y:-120.6},4).to({x:-18.6,y:-91.6},4).to({x:22.4,y:-160.6},5).to({rotation:-210,x:11.4,y:-27.6},7).to({x:18.4,y:-21.6},5).to({x:-2.6},4).to({x:15.4,y:-27.6},4).to({x:99.4},7).to({x:123.4,y:-11.6},4).to({x:105.4,y:-2.6},4).to({x:150.4,y:-39.6},7).to({x:178.4,y:-23.6},4).to({x:160.4,y:-17.6},4).to({y:-116.6},6).to({x:193.7,y:-104.6},4).to({x:170.7,y:-96.6},4).to({y:-111.6},4).to({rotation:-135,x:319.7,y:-179.6,alpha:0.012},8).to({_off:true},1).wait(1));

	// Слой 8
	this.instance_2 = new lib.lak0_1();
	this.instance_2.setTransform(295.5,180.9);

	this.instance_3 = new lib.cream_1();
	this.instance_3.setTransform(171.5,200.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(95));

	// polka.png
	this.instance_4 = new lib.polka();
	this.instance_4.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95));

	// manicure_hand2
	this.instance_5 = new lib.manicure_hand2_1();
	this.instance_5.setTransform(161.6,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({alpha:0.012},61).to({_off:true},1).wait(9));

	// manicure_hand3
	this.instance_6 = new lib.manicure_hand3_1();
	this.instance_6.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95));

	// manicure_hand4
	this.instance_7 = new lib.manicure_hand4_1();
	this.instance_7.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95));

	// manicure_hand.png
	this.instance_8 = new lib.manicure_hand();
	this.instance_8.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-528.2,-287.4,1056.5,570.5), rect=new cjs.Rectangle(-528.2,-283,1056.5,566.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-528.2,-286.9,1056.5,570), new cjs.Rectangle(-528.2,-291.8,1056.5,574.9), new cjs.Rectangle(-528.2,-292.9,1056.5,576), new cjs.Rectangle(-528.2,-290.8,1056.5,573.9), new cjs.Rectangle(-528.2,-285.6,1056.5,568.7), new cjs.Rectangle(-528.2,-283,1056.5,566.1)];


(lib.animation_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Слой 2
	this.instance = new lib.cream2_1();
	this.instance.setTransform(6.5,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:135,x:-92.5,y:40.1},14).wait(1));

	// Слой 3
	this.instance_1 = new lib.cream_brush_1();
	this.instance_1.setTransform(238.4,-181.6,0.855,0.855,-105);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-135,x:24.4,y:-105.6,alpha:1},14).wait(1));

	// Слой 8
	this.instance_2 = new lib.lak0_1();
	this.instance_2.setTransform(295.5,180.9);

	this.instance_3 = new lib.cream_1();
	this.instance_3.setTransform(171.5,200.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// polka.png
	this.instance_4 = new lib.polka();
	this.instance_4.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// manicure_hand2
	this.instance_5 = new lib.manicure_hand2_1();
	this.instance_5.setTransform(161.6,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// manicure_hand3
	this.instance_6 = new lib.manicure_hand3_1();
	this.instance_6.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// manicure_hand4
	this.instance_7 = new lib.manicure_hand4_1();
	this.instance_7.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// manicure_hand.png
	this.instance_8 = new lib.manicure_hand();
	this.instance_8.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.lak0_1();
	this.instance.setTransform(295.5,180.9);

	this.instance_1 = new lib.cream_1();
	this.instance_1.setTransform(171.5,200.4);

	this.instance_2 = new lib.cream2_1();
	this.instance_2.setTransform(6.5,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_3 = new lib.polka();
	this.instance_3.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// manicure_hand2
	this.instance_4 = new lib.manicure_hand2_1();
	this.instance_4.setTransform(161.6,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// manicure_hand3
	this.instance_5 = new lib.manicure_hand3_1();
	this.instance_5.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// manicure_hand4
	this.instance_6 = new lib.manicure_hand4_1();
	this.instance_6.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// manicure_hand.png
	this.instance_7 = new lib.manicure_hand();
	this.instance_7.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect];


(lib.animation_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_100 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(1));

	// Слой 2
	this.instance = new lib.pilka_1();
	this.instance.setTransform(-166.4,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:157.5,x:53.4,y:118.5},14).to({x:76.4,y:100.5},5).to({x:53.4,y:118.5},5).to({x:76.4,y:100.5},5).to({x:164,y:128.5},5).to({x:194,y:110.5},5).to({x:164,y:128.5},5).to({x:194,y:110.5},5).to({x:222,y:109.5},5).to({x:253,y:94.6},5).to({x:222,y:109.5},5).to({x:253,y:94.6},5).to({x:234,y:41.6},5).to({x:271,y:18.6},5).to({x:234,y:41.6},6).to({x:271,y:18.6},5).to({rotation:133.8,x:271.1,y:-133.4,alpha:0.012},9).to({_off:true},1).wait(1));

	// Слой 8
	this.instance_1 = new lib.lak0_1();
	this.instance_1.setTransform(295.5,180.9);

	this.instance_2 = new lib.cream_1();
	this.instance_2.setTransform(171.5,200.4);

	this.instance_3 = new lib.cream2_1();
	this.instance_3.setTransform(6.5,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(101));

	// polka.png
	this.instance_4 = new lib.polka();
	this.instance_4.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(101));

	// manicure_hand1
	this.instance_5 = new lib.manicure_hand1_1();
	this.instance_5.setTransform(161.1,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({alpha:0.012},76).to({_off:true},1).wait(10));

	// manicure_hand2
	this.instance_6 = new lib.manicure_hand2_1();
	this.instance_6.setTransform(161.6,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(101));

	// manicure_hand3
	this.instance_7 = new lib.manicure_hand3_1();
	this.instance_7.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(101));

	// manicure_hand4
	this.instance_8 = new lib.manicure_hand4_1();
	this.instance_8.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(101));

	// manicure_hand.png
	this.instance_9 = new lib.manicure_hand();
	this.instance_9.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-528.2,-283,1056.5,568.7), new cjs.Rectangle(-528.2,-283,1056.5,567.7), rect=new cjs.Rectangle(-528.2,-283,1056.5,566.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.lak0_1();
	this.instance.setTransform(295.5,180.9);

	this.instance_1 = new lib.cream_1();
	this.instance_1.setTransform(171.5,200.4);

	this.instance_2 = new lib.cream2_1();
	this.instance_2.setTransform(6.5,225);

	this.instance_3 = new lib.pilka_1();
	this.instance_3.setTransform(-166.4,235.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka();
	this.instance_4.setTransform(-388.7,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// manicure_hand1
	this.instance_5 = new lib.manicure_hand1_1();
	this.instance_5.setTransform(161.1,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// manicure_hand2
	this.instance_6 = new lib.manicure_hand2_1();
	this.instance_6.setTransform(161.6,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// manicure_hand3
	this.instance_7 = new lib.manicure_hand3_1();
	this.instance_7.setTransform(160.1,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// manicure_hand4
	this.instance_8 = new lib.manicure_hand4_1();
	this.instance_8.setTransform(154.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// manicure_hand.png
	this.instance_9 = new lib.manicure_hand();
	this.instance_9.setTransform(-528.2,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect];


(lib.support_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		контейнер
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		/*
		графика
		*/
		this.body_mc.gotoAndStop(0);
		this.body_mc.mouseEnabled = false;
		this.body_mc.mouseChildren = false;
		/*
		политика
		*/
		this.privacyPolicy_mc.gotoAndStop(0);
		this.privacyPolicy_mc.mouseEnabled = true;
		this.privacyPolicy_mc.mouseChildren = true;
		this.privacyPolicy_mc.cursor = "pointer";
		this.privacyPolicy_mc.addEventListener("click", _onClickPrivacyPolicyMcFunc, false);
		function _onClickPrivacyPolicyMcFunc(event)
		{
			window.open("https://localhost", "_blank");
		}
		/*
		поддержка
		*/
		this.support_mc.gotoAndStop(0);
		this.support_mc.mouseEnabled = true;
		this.support_mc.mouseChildren = true;
		this.support_mc.cursor = "pointer";
		this.support_mc.addEventListener("click", _onClickSupportMcFunc, false);
		function _onClickSupportMcFunc(event)
		{
			window.open("http://localhost", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.support_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// links
	this.support_mc = new lib.support_2_mc();
	this.support_mc.setTransform(135,0);
	this.support_mc.alpha = 0.051;

	this.privacyPolicy_mc = new lib.support_1_mc();
	this.privacyPolicy_mc.setTransform(-90,0);
	this.privacyPolicy_mc.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.privacyPolicy_mc},{t:this.support_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-25,420,50);
p.frameBounds = [rect];


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.support_mc = new lib.support_mc();
	this.support_mc.setTransform(0,100,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.support_mc).wait(1));

	// graph
	this.instance = new lib.copyright_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


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
	this.instance.setTransform(200,-200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,-290,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,-288.2,302.5,181.5), new cjs.Rectangle(35.2,-283,309.9,186), new cjs.Rectangle(16.7,-274.4,322.2,193.4), new cjs.Rectangle(-9.3,-262.3,339.5,203.7), new cjs.Rectangle(-42.6,-246.7,361.7,217.1), new cjs.Rectangle(-83.3,-227.7,388.9,233.4), new cjs.Rectangle(-131.4,-205.2,421,252.6), new cjs.Rectangle(-187,-179.3,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


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


(lib.radio_button_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_3_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40);
p.frameBounds = [rect];


(lib.radio_button_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_2_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40.5);
p.frameBounds = [rect];


(lib.radio_button_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_1_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40);
p.frameBounds = [rect];


(lib.radio_button_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_0_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40);
p.frameBounds = [rect];


(lib.photoflash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// photoflash
	this.photoflash_mc = new lib.photoflash_3_mc();
	this.photoflash_mc.setTransform(400,-150);
	this.photoflash_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_mc).wait(1));

	// area
	this.area_mc = new lib.photoflash_4_mc();
	this.area_mc.setTransform(625,425);

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

	// whiteBackground
	this.whiteBackground_mc = new lib.photoflash_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.whiteBackground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-237,1200,837);
p.frameBounds = [rect];


(lib.photoflash_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2018 edapskov v 1.1
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		var _photoflash_mc = this.body_mc.photoflash_mc;
		_photoflash_mc.gotoAndStop(0);
		_photoflash_mc.visible = false;
		var _area_mc = this.body_mc.area_mc;
		_area_mc.gotoAndStop(0);
		var _area_bounds_obj = _area_mc.getBounds();
		_area_mc.visible = false;
		var _whiteBackground_mc = this.body_mc.whiteBackground_mc;
		_whiteBackground_mc.gotoAndStop(0);
		_whiteBackground_mc.visible = false;
		/*
		константы
		*/
		var _INTERVAL = 30;
		/*
		переменные
		*/
		var _currentUpdate_num = 0;
		var _totalUpdates_num = 50;
		var _interval_id = setInterval(_updateFunc, _INTERVAL);
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
				_currentUpdate_num++;
				/*
				
				*/
				if (_currentUpdate_num == 1)
				{
					randomScale_num = Math.random() * (1 - 0.3) + 0.7;
					_photoflash_mc.scaleX = randomScale_num;
					_photoflash_mc.scaleY = randomScale_num;
					_photoflash_mc.x = _area_mc.x + (Math.random() * _area_bounds_obj.width);
					_photoflash_mc.y = _area_mc.y + (Math.random() * _area_bounds_obj.height);
					_photoflash_mc.rotation = 360 * Math.random();
					_photoflash_mc.visible = true;
					_photoflash_mc.gotoAndPlay(0);
				}
				else if (_currentUpdate_num == 4)
				{
					_whiteBackground_mc.visible = true;
				}
				else if (_currentUpdate_num == 6)
				{
					_photoflash_mc.visible = false;
					_whiteBackground_mc.visible = false;
				}
				else if (_currentUpdate_num >= _totalUpdates_num)
				{
					_totalUpdates_num = Math.round(Math.random() * 20) + 30;
					_currentUpdate_num = 0;
				}
			}
			catch(event)
			{
				clearInterval(_interval_id);
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
	this.body_mc = new lib.photoflash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-237,1200,837);
p.frameBounds = [rect];


(lib.output_numbers_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_2 = new lib.output_numbers_3_mc();
	this.char_2.setTransform(26,0);

	this.char_1 = new lib.output_numbers_3_mc();

	this.char_0 = new lib.output_numbers_3_mc();
	this.char_0.setTransform(-26,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_0},{t:this.char_1},{t:this.char_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-20,92,40);
p.frameBounds = [rect];


(lib.output_numbers_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 3.0
		*/
		createjs.EventDispatcher.initialize(this);
		/*
		
		*/
		this.gotoAndStop(0);
		this.chars_mc.gotoAndStop(0);
		/*
		
		*/
		var _INTERVAL = 100;
		/*
		
		*/
		var _that = this;
		var _value_num = 0;
		var _value_str = "0";
		var _startValue_num = 0;
		var _finalValue_num = 0;
		var _duration_num = 0;
		var _partValue_num = 0;
		var _maxChars_num = Number(this.chars_mc.numChildren);
		var _idInterval;
		/*
		
		*/
		_updateValueFunc();
		/*
		
		*/
		this.setValueFunc = function(value_num)
		{
			/*
			
			*/
			if(value_num === undefined)
			{
				value_num = 0;
			}
			else
			{
				value_num = Number(value_num);
			}
			/*
			
			*/
			_value_num = value_num;
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		this.setAnimatedValueFunc = function(startValue_num, finalValue_num, duration_num, delay_num)
		{
			/*
			
			*/
			if(startValue_num === undefined)
			{
				startValue_num = 0;
			}
			else
			{
				startValue_num = Number(startValue_num);
			}
			/*
			
			*/
			if(finalValue_num === undefined)
			{
				finalValue_num = 0;
			}
			else
			{
				finalValue_num = Number(finalValue_num);
			}
			/*
			
			*/
			if(duration_num === undefined)
			{
				duration_num = 1;
			}
			else
			{
				duration_num = Number(duration_num);
			}
			/*
			
			*/
			if(delay_num === undefined)
			{
				delay_num = 0;
			}
			else
			{
				delay_num = Number(delay_num);
			}
			/*
			
			*/
			_value_num = startValue_num;
			_startValue_num = startValue_num;
			_finalValue_num = finalValue_num;
			_duration_num = duration_num;
			/*
			
			*/
			if(delay_num > 0)
			{
				setTimeout(_onStartIntervalFunc, delay_num * 1000);
			}
			else
			{
				_onStartIntervalFunc();
			}
		}
		/*
		
		*/
		function _onStartIntervalFunc()
		{
			var tick_num = (_duration_num * 1000) / _INTERVAL;
			_partValue_num = Math.ceil((_finalValue_num - _startValue_num) / tick_num);
			_idInterval = setInterval(_onTickIntervalFunc, _INTERVAL);
		}
		/*
		
		*/
		function _onTickIntervalFunc()
		{
			/*
			
			*/
			_value_num += _partValue_num;
			/*
			
			*/
			if(_value_num > _finalValue_num)
			{
				/*
				
				*/
				_value_num = _finalValue_num;
				/*
				
				*/
				clearInterval(_idInterval);
				/*
				
				*/
				var user_event = new createjs.Event("completed_animation");
				user_event.numberValue = _value_num;
				_that.dispatchEvent(user_event);
			}
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		function _updateValueFunc()
		{
			/*
			
			*/
			_value_str = _value_num.toString();
			_value_str = String(_value_str).trim();
			/*
			
			*/
			if(_value_str.length > _maxChars_num)
			{
				_value_str = _value_str.substr(0, _maxChars_num);
			}
			/*
			
			*/
			var i = _maxChars_num - 1;
			var j = _value_str.length - 1;
			var char_mc;
			while(i >= 0)
			{
				/*
				
				*/
				if(_that.chars_mc["char_" + i])
				{
					/*
					
					*/
					char_mc = _that.chars_mc["char_" + i];
					char_mc.name = "char_" + i;
					/*
					
					*/
					if(j >= 0)
					{
						char_mc.visible = true;
						char_mc.gotoAndStop(parseInt(_value_str.charAt(j)));
					}
					else
					{
						char_mc.visible = false;
						char_mc.gotoAndStop(0);
					}
				}
				/*
				
				*/
				i--;
				j--;
			}
		}
		/*
		
		*/
		function _getNumberValueFunc()
		{
			/*
			
			*/
			var result_num = parseInt(_value_str);
			/*
			
			*/
			if(isNaN(result_num))
			{
				result_num = 0;
			}
			/*
			
			*/
			return result_num;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.chars_mc = new lib.output_numbers_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.chars_mc).wait(1));

	// bg
	this.instance = new lib.indicator_part_5_mc();
	this.instance.setTransform(60,0,0.899,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-20,124,40);
p.frameBounds = [rect];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.bubble_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.2
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
		_createBubblesFunc(10);
		/*
		функция, создающая пузыри
		*/
		function _createBubblesFunc(bubbles_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < bubbles_num) 
			{
				/*
				создаём пузырь
				*/
				var bubble_mc = new lib.Bubble();
				container_mc.addChild(bubble_mc);
				bubble_mc.gotoAndStop(0);
				bubble_mc.gotoAndStop(Math.floor(Math.random() * bubble_mc.totalFrames));
				bubble_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				bubble_mc.scaleX = randomScale_num;
				bubble_mc.scaleY = randomScale_num;
				bubble_mc.alpha = randomScale_num;
				bubble_mc.x = Math.random() * _containerBounds_rect.width;
				bubble_mc.y = Math.random() * _containerBounds_rect.height;
				bubble_mc.addEventListener("tick", _onTickBubbleFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickBubbleFunc(event)
		{
			/*
			получаем пузырь
			*/
			var target_mc = event.target;
			target_mc.gotoAndStop(0);
			/*
			обновляем координаты
			*/
			target_mc.x -= target_mc.rad;
			target_mc.y -= _SPEED_NUM;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y <= 0)
			{
				target_mc.y = _containerBounds_rect.height - _BUBBLE_DIAMETER_NUM;
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

	// bubble
	this.instance = new lib.Bubble();
	this.instance.setTransform(400,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,700);
p.frameBounds = [rect];


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-44.3,-44.3,88.7,88.7), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-43,-43,86.2,86.2), new cjs.Rectangle(-42.4,-42.4,84.9,84.9), new cjs.Rectangle(-41.7,-41.7,83.6,83.6), new cjs.Rectangle(-41.1,-41.1,82.3,82.3), new cjs.Rectangle(-40.5,-40.5,81,81), new cjs.Rectangle(-39.8,-39.8,79.7,79.7), new cjs.Rectangle(-39.2,-39.2,78.5,78.5), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-37.9,-37.9,75.9,75.9), new cjs.Rectangle(-37.2,-37.2,74.6,74.6), new cjs.Rectangle(-36.6,-36.6,73.3,73.3), new cjs.Rectangle(-36,-36,72,72), new cjs.Rectangle(-36.5,-36.5,73.2,73.2), new cjs.Rectangle(-37.1,-37.1,74.4,74.4), new cjs.Rectangle(-37.7,-37.7,75.6,75.6), new cjs.Rectangle(-38.3,-38.3,76.8,76.8), new cjs.Rectangle(-38.9,-38.9,78,78), new cjs.Rectangle(-39.5,-39.5,79.2,79.2), new cjs.Rectangle(-40.1,-40.1,80.4,80.4), new cjs.Rectangle(-40.7,-40.7,81.6,81.6), new cjs.Rectangle(-41.3,-41.3,82.8,82.8), new cjs.Rectangle(-41.9,-41.9,84,84), new cjs.Rectangle(-42.5,-42.5,85.2,85.2), new cjs.Rectangle(-43.1,-43.1,86.4,86.4), new cjs.Rectangle(-43.7,-43.7,87.6,87.6), new cjs.Rectangle(-44.3,-44.3,88.8,88.8), new cjs.Rectangle(-45,-45,90,90)];


(lib.TrackMove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.track_move_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.5,scaleY:0.5},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, new cjs.Rectangle(-49.1,-49.1,98.3,98.3), new cjs.Rectangle(-48.2,-48.2,96.6,96.6), new cjs.Rectangle(-47.4,-47.4,94.9,94.9), new cjs.Rectangle(-46.5,-46.5,93.1,93.1), new cjs.Rectangle(-45.6,-45.6,91.4,91.4), new cjs.Rectangle(-44.8,-44.8,89.7,89.7), new cjs.Rectangle(-43.9,-43.9,88,88), new cjs.Rectangle(-43.1,-43.1,86.2,86.2), new cjs.Rectangle(-42.2,-42.2,84.5,84.5), new cjs.Rectangle(-41.3,-41.3,82.8,82.8), new cjs.Rectangle(-40.5,-40.5,81.1,81.1), new cjs.Rectangle(-39.6,-39.6,79.3,79.3), new cjs.Rectangle(-38.7,-38.7,77.6,77.6), new cjs.Rectangle(-37.9,-37.9,75.9,75.9), new cjs.Rectangle(-37,-37,74.2,74.2), new cjs.Rectangle(-36.2,-36.2,72.4,72.4), new cjs.Rectangle(-35.3,-35.3,70.7,70.7), new cjs.Rectangle(-34.4,-34.4,69,69), new cjs.Rectangle(-33.6,-33.6,67.3,67.3), new cjs.Rectangle(-32.7,-32.7,65.5,65.5), new cjs.Rectangle(-31.8,-31.8,63.8,63.8), new cjs.Rectangle(-31,-31,62.1,62.1), new cjs.Rectangle(-30.1,-30.1,60.4,60.4), new cjs.Rectangle(-29.3,-29.3,58.6,58.6), new cjs.Rectangle(-28.4,-28.4,56.9,56.9), new cjs.Rectangle(-27.5,-27.5,55.2,55.2), new cjs.Rectangle(-26.7,-26.7,53.5,53.5), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-25,-25,50,50)];


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


(lib.next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.next_2_mc();
	this.instance.setTransform(10,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.17,scaleY:1.17,x:15,y:-8},5).to({scaleX:1,scaleY:1,x:10,y:-5},10).wait(56));

	// bg
	this.instance_1 = new lib.next_img();
	this.instance_1.setTransform(-80,-80,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-80,-80,161,160), new cjs.Rectangle(-80,-80,164.1,160), new cjs.Rectangle(-80,-80.3,167.1,160.4), new cjs.Rectangle(-80,-80,165.6,160), new cjs.Rectangle(-80,-80,164,160), new cjs.Rectangle(-80,-80,162.5,160), new cjs.Rectangle(-80,-80,161,160), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.more_game_box2 = function(mode,startPosition,loop) {
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


(lib.more_game_box1 = function(mode,startPosition,loop) {
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


(lib.subject_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_14();

	this.instance_1 = new lib.animation_15();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect];


(lib.subject_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_12();

	this.instance_1 = new lib.animation_13();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect];


(lib.subject_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_10();

	this.instance_1 = new lib.animation_11();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect];


(lib.subject_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_8();

	this.instance_1 = new lib.animation_9();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect];


(lib.subject_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_6();

	this.instance_1 = new lib.animation_7();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect];


(lib.subject_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_3();

	this.instance_1 = new lib.animation_4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528.2,-283,1056.5,566.1);
p.frameBounds = [rect, rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.666,0.666,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-59.9,120,119.9);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.666,0.666,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-59.9,120,119.9);
p.frameBounds = [rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_mc();
	this.instance.setTransform(0,-8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-150,-131,0.938,0.938);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-150,-131,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2oTiMAAAgnDMAtRAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-131,300,262.5);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_mc();
	this.instance.setTransform(0,-8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-150,-131.2,0.938,0.938);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-150,-131,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2oTiMAAAgnDMAtRAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-131.2,300,262.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-150,-131,300,262.5), rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_mc();
	this.instance.setTransform(0,-8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-150,-131.2,0.938,0.938);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-150,-131,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2oTiMAAAgnDMAtRAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-131.2,300,262.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-150,-131,300,262.5), rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_mc();
	this.instance.setTransform(0,-8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-150,-131.2,0.938,0.938);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-150,-131,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2oTiMAAAgnDMAtRAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-131.2,300,262.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-150,-131,300,262.5), rect];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuqCLQg2ABgngmQglgmgBg2QABg0AlgnQAnglA2gBIdqAAQA1ABAmAlQAnAngBA0QABA2gnAmQgmAmg1gBg");
	mask.setTransform(109,14);

	// text
	this.output_numbers_comp = new lib.output_numbers_1_mc();
	this.output_numbers_comp.setTransform(110.1,-19.4,0.6,0.6,0,0,0,0.1,1);

	this.output_numbers_comp.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.output_numbers_comp).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_2_mc();

	this.indicator_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2,2,216,26);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAi3AetQkoACjUhXIoDi7QjxhBiaARQgTh8h+jOQiIi2gBjBQBMj5BOiXQBVjLAfiiIEdAcQD2gHFJiDQFfiWDWgKIAFAAQD0AOErBzQEqB0DuAbQDtAbCGgdQAgCiBgDQQCEDfAPCsQgCDBiKC2QiADOgTB8QidgRj1BBIoMC7QjTBVkgAAIgNAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:395.6,y:196.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// heroes
	this.hand_mc = new lib.hand_all();
	this.hand_mc.setTransform(673.9,266.6,0.458,0.458,0,0,180,10.3,8.8);

	this.hand_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hand_mc).to({_off:true},1).wait(1));

	// frame
	this.instance = new lib.frame_mc();
	this.instance.setTransform(620,290);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// heroes
	this.hero_1 = new lib.elsa();
	this.hero_1.setTransform(358.5,406,1.098,1.098);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({scaleX:2.1,scaleY:2.1,x:410.8,y:726.9},0).wait(1));

	// bg
	this.instance_1 = new lib.background_0_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,640.7);
p.frameBounds = [rect, new cjs.Rectangle(-254,-24.8,1254.1,1200)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.elsa_main();
	this.instance.setTransform(600,415,1.113,1.113);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:425},39).to({y:415},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(247,15.9,525.8,637.3);
p.frameBounds = [rect, new cjs.Rectangle(246.9,16.1,525.7,637.2), new cjs.Rectangle(246.9,16.4,525.7,637.2), new cjs.Rectangle(246.9,16.6,525.7,637.2), new cjs.Rectangle(246.9,16.9,525.7,637.2), new cjs.Rectangle(246.9,17.2,525.7,637.2), new cjs.Rectangle(246.9,17.4,525.7,637.2), new cjs.Rectangle(246.9,17.7,525.7,637.2), new cjs.Rectangle(246.9,17.9,525.7,637.2), new cjs.Rectangle(246.9,18.2,525.7,637.2), new cjs.Rectangle(246.9,18.4,525.7,637.2), new cjs.Rectangle(246.9,18.7,525.7,637.2), new cjs.Rectangle(246.9,19,525.7,637.2), new cjs.Rectangle(246.9,19.2,525.7,637.2), new cjs.Rectangle(246.9,19.5,525.7,637.2), new cjs.Rectangle(246.9,19.7,525.7,637.2), new cjs.Rectangle(246.9,20,525.7,637.2), new cjs.Rectangle(246.9,20.2,525.7,637.2), new cjs.Rectangle(246.9,20.5,525.7,637.2), new cjs.Rectangle(246.9,20.7,525.7,637.2), new cjs.Rectangle(246.9,21,525.7,637.2), new cjs.Rectangle(246.9,21.3,525.7,637.2), new cjs.Rectangle(246.9,21.5,525.7,637.2), new cjs.Rectangle(246.9,21.8,525.7,637.2), new cjs.Rectangle(246.9,22,525.7,637.2), new cjs.Rectangle(246.9,22.3,525.7,637.2), new cjs.Rectangle(246.9,22.5,525.7,637.2), new cjs.Rectangle(246.9,22.8,525.7,637.2), new cjs.Rectangle(246.9,23.1,525.7,637.2), new cjs.Rectangle(246.9,23.3,525.7,637.2), new cjs.Rectangle(246.9,23.6,525.7,637.2), new cjs.Rectangle(246.9,23.8,525.7,637.2), new cjs.Rectangle(246.9,24.1,525.7,637.2), new cjs.Rectangle(246.9,24.3,525.7,637.2), new cjs.Rectangle(246.9,24.6,525.7,637.2), new cjs.Rectangle(246.9,24.8,525.7,637.2), new cjs.Rectangle(246.9,25.1,525.7,637.2), new cjs.Rectangle(246.9,25.4,525.7,637.2), new cjs.Rectangle(246.9,25.6,525.7,637.2), new cjs.Rectangle(247,25.9,525.8,637.3), new cjs.Rectangle(246.9,25.6,525.7,637.2), new cjs.Rectangle(246.9,25.4,525.7,637.2), new cjs.Rectangle(246.9,25.1,525.7,637.2), new cjs.Rectangle(246.9,24.9,525.7,637.2), new cjs.Rectangle(246.9,24.6,525.7,637.2), new cjs.Rectangle(246.9,24.4,525.7,637.2), new cjs.Rectangle(246.9,24.1,525.7,637.2), new cjs.Rectangle(246.9,23.9,525.7,637.2), new cjs.Rectangle(246.9,23.6,525.7,637.2), new cjs.Rectangle(246.9,23.4,525.7,637.2), new cjs.Rectangle(246.9,23.1,525.7,637.2), new cjs.Rectangle(246.9,22.9,525.7,637.2), new cjs.Rectangle(246.9,22.6,525.7,637.2), new cjs.Rectangle(246.9,22.4,525.7,637.2), new cjs.Rectangle(246.9,22.1,525.7,637.2), new cjs.Rectangle(246.9,21.9,525.7,637.2), new cjs.Rectangle(246.9,21.6,525.7,637.2), new cjs.Rectangle(246.9,21.4,525.7,637.2), new cjs.Rectangle(246.9,21.1,525.7,637.2), new cjs.Rectangle(246.9,20.9,525.7,637.2), new cjs.Rectangle(246.9,20.6,525.7,637.2), new cjs.Rectangle(246.9,20.4,525.7,637.2), new cjs.Rectangle(246.9,20.1,525.7,637.2), new cjs.Rectangle(246.9,19.9,525.7,637.2), new cjs.Rectangle(246.9,19.6,525.7,637.2), new cjs.Rectangle(246.9,19.4,525.7,637.2), new cjs.Rectangle(246.9,19.1,525.7,637.2), new cjs.Rectangle(246.9,18.9,525.7,637.2), new cjs.Rectangle(246.9,18.6,525.7,637.2), new cjs.Rectangle(246.9,18.4,525.7,637.2), new cjs.Rectangle(246.9,18.1,525.7,637.2), new cjs.Rectangle(246.9,17.9,525.7,637.2), new cjs.Rectangle(246.9,17.6,525.7,637.2), new cjs.Rectangle(246.9,17.4,525.7,637.2), new cjs.Rectangle(246.9,17.1,525.7,637.2), new cjs.Rectangle(246.9,16.9,525.7,637.2), new cjs.Rectangle(246.9,16.6,525.7,637.2), new cjs.Rectangle(246.9,16.4,525.7,637.2), new cjs.Rectangle(246.9,16.1,525.7,637.2), new cjs.Rectangle(247,15.9,525.8,637.3)];


(lib.closet_for_clothes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.hair_1 = new lib.hair_1_mc();
	this.hair_1.setTransform(-191,-150);

	this.costume_0 = new lib.costume_0_mc();
	this.costume_0.setTransform(-191,-150);

	this.belt_0 = new lib.belt_0_mc();
	this.belt_0.setTransform(-191,-150);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-191,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1}]}).to({state:[{t:this.costume_0}]},1).to({state:[{t:this.belt_0}]},2).to({state:[{t:this.headdress_0}]},1).wait(1));

	// options
	this.hair_7 = new lib.hair_7_mc();
	this.hair_7.setTransform(110,80);

	this.hair_6 = new lib.hair_6_mc();
	this.hair_6.setTransform(0,80);

	this.hair_5 = new lib.hair_5_mc();
	this.hair_5.setTransform(-110,80);

	this.hair_4 = new lib.hair_4_mc();
	this.hair_4.setTransform(110,-98);

	this.hair_3 = new lib.hair_3_mc();
	this.hair_3.setTransform(0,-98);

	this.hair_2 = new lib.hair_2_mc();
	this.hair_2.setTransform(-110,-98);

	this.costume_3 = new lib.costume_3_mc();
	this.costume_3.setTransform(0,70);

	this.costume_2 = new lib.costume_2_mc();
	this.costume_2.setTransform(90,-100);

	this.costume_1 = new lib.costume_1_mc();
	this.costume_1.setTransform(-90,-100);

	this.costume_6 = new lib.costume_6_mc();
	this.costume_6.setTransform(0,70);

	this.costume_5 = new lib.costume_5_mc();
	this.costume_5.setTransform(90,-100);

	this.costume_4 = new lib.costume_4_mc();
	this.costume_4.setTransform(-90,-100);

	this.belt_6 = new lib.belt_6_mc();
	this.belt_6.setTransform(90,-78);

	this.belt_5 = new lib.belt_5_mc();
	this.belt_5.setTransform(-80,-68.8);

	this.belt_4 = new lib.belt_4_mc();
	this.belt_4.setTransform(-80,-181.5);

	this.belt_3 = new lib.belt_3_mc();
	this.belt_3.setTransform(90,78);

	this.belt_2 = new lib.belt_2_mc();
	this.belt_2.setTransform(90,-185);

	this.belt_1 = new lib.belt_1_mc();
	this.belt_1.setTransform(-41.1,72);

	this.headdress_6 = new lib.headdress_6_mc();
	this.headdress_6.setTransform(90,100);

	this.headdress_5 = new lib.headdress_5_mc();
	this.headdress_5.setTransform(-90,100);

	this.headdress_4 = new lib.headdress_4_mc();
	this.headdress_4.setTransform(90,-40);

	this.headdress_3 = new lib.headdress_3_mc();
	this.headdress_3.setTransform(-90,-40);

	this.headdress_2 = new lib.headdress_2_mc();
	this.headdress_2.setTransform(90,-180);

	this.headdress_1 = new lib.headdress_1_mc();
	this.headdress_1.setTransform(-90,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3},{t:this.hair_4},{t:this.hair_5},{t:this.hair_6},{t:this.hair_7}]}).to({state:[{t:this.costume_1},{t:this.costume_2},{t:this.costume_3}]},1).to({state:[{t:this.costume_4},{t:this.costume_5},{t:this.costume_6}]},1).to({state:[{t:this.belt_1},{t:this.belt_2},{t:this.belt_3},{t:this.belt_4},{t:this.belt_5},{t:this.belt_6}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_4_mc();
	this.instance.setTransform(0,140);

	this.instance_1 = new lib.wardrobe_4_mc();
	this.instance_1.setTransform(0,-40);

	this.instance_2 = new lib.pipe_mc();
	this.instance_2.setTransform(0,40);

	this.instance_3 = new lib.pipe_mc();
	this.instance_3.setTransform(0,-80);

	this.instance_4 = new lib.pipe_mc();
	this.instance_4.setTransform(0,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_4},{t:this.instance},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-170,397,327);
p.frameBounds = [rect, rect=new cjs.Rectangle(-211,-227.3,420.9,424.7), rect, new cjs.Rectangle(-211,-227.6,397,388.7), new cjs.Rectangle(-211,-260,397,466.1)];


(lib.close_fog_makeup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(211,-150);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(211,-150);

	this.eyelash_0 = new lib.eyelash_0_mc();
	this.eyelash_0.setTransform(211,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).to({state:[{t:this.eyelash_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_mc();
	this.blush_6.setTransform(120,41);

	this.blush_5 = new lib.blush_5_mc();
	this.blush_5.setTransform(0,38);

	this.blush_4 = new lib.blush_4_mc();
	this.blush_4.setTransform(-120,41);

	this.blush_3 = new lib.blush_3_mc();
	this.blush_3.setTransform(120,-110);

	this.blush_2 = new lib.blush_2_mc();
	this.blush_2.setTransform(0,-112);

	this.blush_1 = new lib.blush_1_mc();
	this.blush_1.setTransform(-120,-110);

	this.lips_6 = new lib.lips_6_mc();
	this.lips_6.setTransform(110,33);

	this.lips_5 = new lib.lips_5_mc();
	this.lips_5.setTransform(0,34);

	this.lips_4 = new lib.lips_4_mc();
	this.lips_4.setTransform(-110,33);

	this.lips_3 = new lib.lips_3_mc();
	this.lips_3.setTransform(110,-116);

	this.lips_2 = new lib.lips_2_mc();
	this.lips_2.setTransform(0,-116);

	this.lips_1 = new lib.lips_1_mc();
	this.lips_1.setTransform(-110,-116);

	this.shadows_6 = new lib.shadows_6_mc();
	this.shadows_6.setTransform(120,48);

	this.shadows_5 = new lib.shadows_5_mc();
	this.shadows_5.setTransform(0,48);

	this.shadows_4 = new lib.shadows_4_mc();
	this.shadows_4.setTransform(-120,48);

	this.shadows_3 = new lib.shadows_3_mc();
	this.shadows_3.setTransform(120,-102);

	this.shadows_2 = new lib.shadows_2_mc();
	this.shadows_2.setTransform(0,-102);

	this.shadows_1 = new lib.shadows_1_mc();
	this.shadows_1.setTransform(-120,-102);

	this.eyebrows_6 = new lib.eyebrows_6_mc();
	this.eyebrows_6.setTransform(120,32);

	this.eyebrows_5 = new lib.eyebrows_5_mc();
	this.eyebrows_5.setTransform(0,32);

	this.eyebrows_4 = new lib.eyebrows_4_mc();
	this.eyebrows_4.setTransform(-120,32);

	this.eyebrows_3 = new lib.eyebrows_3_mc();
	this.eyebrows_3.setTransform(120,-118);

	this.eyebrows_2 = new lib.eyebrows_2_mc();
	this.eyebrows_2.setTransform(0,-118);

	this.eyebrows_1 = new lib.eyebrows_1_mc();
	this.eyebrows_1.setTransform(-120,-118);

	this.eyelash_6 = new lib.eyelash_6_mc();
	this.eyelash_6.setTransform(110,30);

	this.eyelash_5 = new lib.eyelash_5_mc();
	this.eyelash_5.setTransform(0,30);

	this.eyelash_4 = new lib.eyelash_4_mc();
	this.eyelash_4.setTransform(-110,30);

	this.eyelash_3 = new lib.eyelash_3_mc();
	this.eyelash_3.setTransform(110,-125);

	this.eyelash_2 = new lib.eyelash_2_mc();
	this.eyelash_2.setTransform(0,-125.3);

	this.eyelash_1 = new lib.eyelash_1_mc();
	this.eyelash_1.setTransform(-110,-125);

	this.eyes_6 = new lib.eyes_6_mc();
	this.eyes_6.setTransform(120,44);

	this.eyes_5 = new lib.eyes_5_mc();
	this.eyes_5.setTransform(0,46);

	this.eyes_4 = new lib.eyes_4_mc();
	this.eyes_4.setTransform(-120,44);

	this.eyes_3 = new lib.eyes_3_mc();
	this.eyes_3.setTransform(120,-103);

	this.eyes_2 = new lib.eyes_2_mc();
	this.eyes_2.setTransform(0,-104);

	this.eyes_1 = new lib.eyes_1_mc();
	this.eyes_1.setTransform(-120,-103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyelash_1},{t:this.eyelash_2},{t:this.eyelash_3},{t:this.eyelash_4},{t:this.eyelash_5},{t:this.eyelash_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-172,406,273);
p.frameBounds = [rect, new cjs.Rectangle(-160,-176,320,270), new cjs.Rectangle(-175,-170,406,278), new cjs.Rectangle(-180,-178,360,270), new cjs.Rectangle(-155,-195.3,386,295.3), new cjs.Rectangle(-175,-164,350,270)];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_for_clothes();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-170,397,327);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.close_fog_makeup();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-172,406,273);
p.frameBounds = [rect];


(lib.body_set_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_6_mc();

	this.instance_1 = new lib.animation_set_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-42,97.7,84);
p.frameBounds = [rect, rect];


(lib.body_set_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_5_mc();

	this.instance_1 = new lib.animation_set_5_mc();
	this.instance_1.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.7,-73,51.6,146);
p.frameBounds = [rect, new cjs.Rectangle(-26,-73,51.6,146)];


(lib.body_set_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_4_mc();

	this.instance_1 = new lib.animation_set_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-72,17.6,143);
p.frameBounds = [rect, rect];


(lib.body_set_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_3_mc();

	this.instance_1 = new lib.animation_set_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-42,97.7,84);
p.frameBounds = [rect, rect];


(lib.body_set_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_2_mc();

	this.instance_1 = new lib.animation_set_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-59,39.3,118);
p.frameBounds = [rect, new cjs.Rectangle(-20,-59,39.4,118)];


(lib.body_set_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_1_mc();

	this.instance_1 = new lib.animation_set_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-48,83.9,96);
p.frameBounds = [rect, rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.animation_for_pointer_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
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


(lib.radio_button_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button_0
	this.button_0_mc = new lib.radio_button_1_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.button_0_mc).wait(1));

	// button_1
	this.button_1_mc = new lib.radio_button_1_1_mc();
	this.button_1_mc.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.button_1_mc).wait(1));

	// button_2
	this.button_2_mc = new lib.radio_button_1_2_mc();
	this.button_2_mc.setTransform(0,80);

	this.timeline.addTween(cjs.Tween.get(this.button_2_mc).wait(1));

	// button_3
	this.button_3_mc = new lib.radio_button_1_3_mc();
	this.button_3_mc.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get(this.button_3_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,160);
p.frameBounds = [rect];


(lib.radio_button_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2018 edapskov v 1.0
		*/
		createjs.EventDispatcher.initialize(this);
		/*
		
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		/*
		
		*/
		var container_mc = this.body_mc;
		container_mc.gotoAndStop(0);
		container_mc.mouseEnabled = true;
		container_mc.mouseChildren = true;
		/*
		
		*/
		var _that = this;
		var _value_num = 0;
		var _totalButtons_num = Number(container_mc.numChildren);
		/*
		
		*/
		this.setValueFunc = function(value_num)
		{
			_updateValueFunc(value_num);
		}
		/*
		
		*/
		this.getValueFunc = function()
		{
			return _getValueFunc();
		}
		/*
		
		*/
		function _updateButtonsFunc()
		{
			/*
			
			*/
			var button_mc;
			var i = 0;
			/*
			
			*/
			while(i < _totalButtons_num)
			{
				/*
				
				*/
				if(container_mc["button_" + i + "_mc"])
				{
					/*
					
					*/
					button_mc = container_mc["button_" + i + "_mc"];
					button_mc.gotoAndStop(0);
					button_mc.name = "button_" + i + "_mc";
					/*
					
					*/
					if(i == _value_num)
					{
						/*
						
						*/
						button_mc.mouseEnabled = false;
						button_mc.mouseChildren = false;
						button_mc.cursor = "default";
						button_mc.removeEventListener("click", _onClickButtonMcFunc, false);
						/*
						
						*/
						if(button_mc.check_mc)
						{
							button_mc.check_mc.gotoAndStop(1);
						}
					}
					else
					{
						/*
						
						*/
						button_mc.mouseEnabled = true;
						button_mc.mouseChildren = true;
						button_mc.cursor = "pointer";
						button_mc.addEventListener("click", _onClickButtonMcFunc, false);
						/*
						
						*/
						if(button_mc.check_mc)
						{
							button_mc.check_mc.gotoAndStop(0);
						}
					}
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		function _onClickButtonMcFunc(event)
		{
			var current_mc = event.currentTarget;
			var temp_arr = current_mc.name.split("_");
			_updateValueFunc(temp_arr[1]);
		}
		/*
		 
		*/
		function _updateValueFunc(value_num)
		{
			/*
			
			*/
			if(value_num === undefined)
			{
				value_num = 0;
			}
			else
			{
				value_num = Number(value_num);
			}
			/*
			
			*/
			if(value_num < 0)
			{
				value_num = 0;
			}
			else if(value_num >= _totalButtons_num)
			{
				value_num = Number(_totalButtons_num - 1);
			}
			/*
			
			*/
			_value_num = value_num;
			/*
			
			*/
			_updateButtonsFunc();
			/*
			
			*/
			var user_event = new createjs.Event("change_radio_button");
			user_event.numberValue = _value_num;
			_that.dispatchEvent(user_event);
		}
		/*
		
		*/
		function _getValueFunc()
		{
			return _value_num;
		}
		/*
		
		*/
		_updateButtonsFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.radio_button_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,160);
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
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.blinking_light_3_mc = function(mode,startPosition,loop) {
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
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.visible = false;
		/*
		
		*/
		var timeOut_id = setTimeout(_startAnimationBlinkingLightFunc, Math.random() * 2000);
		function _startAnimationBlinkingLightFunc()
		{
			/*
			
			*/
			clearTimeout(timeOut_id);
			/*
			
			*/
			_body_mc.play();
			_body_mc.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.blinking_light_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


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


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.next_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.06,scaleY:1.06},5).to({scaleX:1,scaleY:1},10).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-80.9,-80.9,162,162), new cjs.Rectangle(-81.9,-81.9,164,164), new cjs.Rectangle(-83,-83,166,166), new cjs.Rectangle(-84,-84,168,168), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-84.4,-84.4,169,169), new cjs.Rectangle(-83.9,-83.9,168,168), new cjs.Rectangle(-83.4,-83.4,167,167), new cjs.Rectangle(-82.9,-82.9,166,166), new cjs.Rectangle(-82.4,-82.4,165,165), new cjs.Rectangle(-81.9,-81.9,164,164), new cjs.Rectangle(-81.4,-81.4,163,163), new cjs.Rectangle(-80.9,-80.9,162,162), new cjs.Rectangle(-80.4,-80.4,161,161), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_game_box2();
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
	this.instance_12 = new lib.more_game_box1();
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


(lib.set_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzH0IAAvmIPnAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.set_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.set_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-72,40,143);
p.frameBounds = [rect];


(lib.set_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzH0IAAvmIPnAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.set_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkqJYIAAyvIJVAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-60,60,120);
p.frameBounds = [rect];


(lib.set_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_pointer_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.83,scaleY:0.83},14).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-110.6,-58.2,118.6,118.6), new cjs.Rectangle(-109.3,-57.5,117.2,117.2), new cjs.Rectangle(-107.9,-56.8,115.7,115.7), new cjs.Rectangle(-106.6,-56.1,114.3,114.3), new cjs.Rectangle(-105.3,-55.4,112.9,112.9), new cjs.Rectangle(-104,-54.7,111.5,111.5), new cjs.Rectangle(-102.6,-54,110,110), new cjs.Rectangle(-101.3,-53.3,108.6,108.6), new cjs.Rectangle(-99.9,-52.6,107.2,107.2), new cjs.Rectangle(-98.6,-51.9,105.7,105.7), new cjs.Rectangle(-97.3,-51.2,104.3,104.3), new cjs.Rectangle(-95.9,-50.5,102.9,102.9), new cjs.Rectangle(-94.6,-49.8,101.5,101.5), new cjs.Rectangle(-93.3,-49.1,100,100), new cjs.Rectangle(-94.5,-49.8,101.4,101.4), new cjs.Rectangle(-95.8,-50.4,102.7,102.7), new cjs.Rectangle(-97,-51.1,104,104), new cjs.Rectangle(-98.3,-51.7,105.4,105.4), new cjs.Rectangle(-99.5,-52.4,106.7,106.7), new cjs.Rectangle(-100.7,-53,108,108), new cjs.Rectangle(-102,-53.7,109.4,109.4), new cjs.Rectangle(-103.2,-54.4,110.7,110.7), new cjs.Rectangle(-104.5,-55,112,112), new cjs.Rectangle(-105.7,-55.7,113.4,113.4), new cjs.Rectangle(-107,-56.3,114.7,114.7), new cjs.Rectangle(-108.2,-57,116,116), new cjs.Rectangle(-109.5,-57.6,117.4,117.4), new cjs.Rectangle(-110.7,-58.3,118.7,118.7), new cjs.Rectangle(-112,-59,120,120)];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logo_0_mc();
	this.logo_btn.setTransform(100.1,40,0.29,0.29,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();
	this.heroes_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,640.7);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(150,130);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(44).to({x:550,y:530},0).to({scaleX:1.13,scaleY:1.13,x:150,y:130,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-150,130);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(34).to({x:-550,y:530},0).to({scaleX:1.13,scaleY:1.13,x:-150,y:130,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(150,-130);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(24).to({x:550,y:-530},0).to({scaleX:1.13,scaleY:1.13,x:150,y:-130,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(21));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-150,-130);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(14).to({x:-550,y:-530},0).to({scaleX:1.13,scaleY:1.13,x:-150,y:-130,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-261.2,600,522.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-700,-661.2,1000,922.8), new cjs.Rectangle(-662,-623,962,884.5), new cjs.Rectangle(-624,-584.7,924,846.3), new cjs.Rectangle(-585.9,-546.4,886,808), new cjs.Rectangle(-547.9,-508.2,848,769.7), new cjs.Rectangle(-510,-470,810,731.5), new cjs.Rectangle(-472,-431.8,772.1,693.3), new cjs.Rectangle(-434,-393.5,734.1,655.1), new cjs.Rectangle(-396,-355.2,696,616.8), new cjs.Rectangle(-358,-317,658,578.5), new cjs.Rectangle(-320,-661.2,1020,922.8), new cjs.Rectangle(-315.9,-623,977.9,884.5), new cjs.Rectangle(-311.9,-584.7,935.9,846.3), new cjs.Rectangle(-307.9,-546.4,893.9,808), new cjs.Rectangle(-303.9,-508.2,851.9,769.7), new cjs.Rectangle(-300,-470,810.1,731.5), new cjs.Rectangle(-300,-431.8,772,693.3), new cjs.Rectangle(-300,-393.5,734,655.1), new cjs.Rectangle(-300,-355.2,696.1,616.8), new cjs.Rectangle(-300,-317,658.1,578.5), new cjs.Rectangle(-700,-278.7,1020,940), new cjs.Rectangle(-662,-275.2,978.1,898.2), new cjs.Rectangle(-624,-271.7,936.1,856.4), new cjs.Rectangle(-585.9,-268.1,894,814.7), new cjs.Rectangle(-547.9,-264.6,852,772.9), new cjs.Rectangle(-510,-261.2,810,731.3), new cjs.Rectangle(-472,-261.2,772.1,693), new cjs.Rectangle(-434,-261.2,734.1,654.8), new cjs.Rectangle(-396,-261.2,696,616.6), new cjs.Rectangle(-358,-261.2,658,578.3), new cjs.Rectangle(-320,-261.2,1020,922.8), new cjs.Rectangle(-315.9,-261.2,977.9,884.5), new cjs.Rectangle(-311.9,-261.2,935.9,846.3), new cjs.Rectangle(-307.9,-261.2,893.9,808), new cjs.Rectangle(-303.9,-261.2,851.9,769.8), new cjs.Rectangle(-300,-261.2,810.1,731.6), new cjs.Rectangle(-300,-261.2,772,693.3), new cjs.Rectangle(-300,-261.2,734,655.1), new cjs.Rectangle(-300,-261.2,696.1,616.8), new cjs.Rectangle(-300,-261.2,658.1,578.6), new cjs.Rectangle(-300,-261.2,620,540.3), new cjs.Rectangle(-300,-261.2,616.1,536.8), new cjs.Rectangle(-300,-261.2,612.1,533.3), new cjs.Rectangle(-300,-261.2,608,529.8), new cjs.Rectangle(-300,-261.2,604,526.3), new cjs.Rectangle(-300,-261.2,600,522.8)];


(lib.indicator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(-110,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-47,280,87);
p.frameBounds = [rect];


(lib.filters_container_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.exit_mc = new lib.filters_exit_mc();
	this.exit_mc.setTransform(0,-145);

	this.open_mc = new lib.filters_open_mc();
	this.open_mc.setTransform(0,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.open_mc},{t:this.exit_mc}]}).wait(1));

	// title
	this.instance = new lib.corner_filters_mc();
	this.instance.setTransform(118,-58,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// filters
	this.filters_mc = new lib.radio_button_1_mc();
	this.filters_mc.setTransform(-120,-65);

	this.timeline.addTween(cjs.Tween.get(this.filters_mc).wait(1));

	// bg
	this.instance_1 = new lib.filters_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-180,390.8,310);
p.frameBounds = [rect];


(lib.filters_animation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.filters_container_mc = new lib.filters_container_mc();
	this.filters_container_mc.setTransform(400,450);

	this.timeline.addTween(cjs.Tween.get(this.filters_container_mc).to({y:730},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(210,270,390.8,310);
p.frameBounds = [rect, new cjs.Rectangle(210,301.1,390.8,310), new cjs.Rectangle(210,332.2,390.8,310), new cjs.Rectangle(210,363.4,390.8,310), new cjs.Rectangle(210,394.5,390.8,310), new cjs.Rectangle(210,425.6,390.8,310), new cjs.Rectangle(210,456.7,390.8,310), new cjs.Rectangle(210,487.8,390.8,310), new cjs.Rectangle(210,518.9,390.8,310), new cjs.Rectangle(210,550,390.8,310)];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(100,200);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-100,200);

	this.set_7 = new lib.set_0_mc();
	this.set_7.setTransform(0,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_7},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-450,408,710);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_6 = new lib.set_6_mc();
	this.set_6.setTransform(321,226);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(50,-400);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-50,-400);

	this.set_5 = new lib.set_5_mc();
	this.set_5.setTransform(233,194);

	this.set_4 = new lib.set_4_mc();
	this.set_4.setTransform(178,196.4);

	this.set_3 = new lib.set_3_mc();
	this.set_3.setTransform(103,226);

	this.set_2 = new lib.set_2_mc();
	this.set_2.setTransform(18,208);

	this.set_1 = new lib.set_1_mc();
	this.set_1.setTransform(-61,224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.set_2},{t:this.set_3},{t:this.set_4},{t:this.set_5},{t:this.prev_mc},{t:this.next_mc},{t:this.set_6}]}).wait(1));

	// decor
	this.instance = new lib.table_mc();
	this.instance.setTransform(170,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_1_mc();

	this.instance_2 = new lib.wardrobe_2_img();
	this.instance_2.setTransform(-213.5,63.8,0.992,0.614);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-288.5,-459.9,917,762);
p.frameBounds = [rect];


(lib.closet_nogti_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.nail_1 = new lib.nail_1_mc();
	this.nail_1.setTransform(360,115);

	this.textureNail_0 = new lib.textureNail_0_mc();
	this.textureNail_0.setTransform(340,160);

	this.decorNail_0 = new lib.decorNail_0_mc();
	this.decorNail_0.setTransform(350,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nail_1}]}).to({state:[{t:this.textureNail_0}]},1).to({state:[{t:this.decorNail_0}]},1).wait(1));

	// options
	this.nail_14 = new lib.nail_14_mc();
	this.nail_14.setTransform(360,210);

	this.nail_13 = new lib.nail_13_mc();
	this.nail_13.setTransform(300,210);

	this.nail_12 = new lib.nail_12_mc();
	this.nail_12.setTransform(240,210);

	this.nail_11 = new lib.nail_11_mc();
	this.nail_11.setTransform(180,210);

	this.nail_10 = new lib.nail_10_mc();
	this.nail_10.setTransform(120,210);

	this.nail_9 = new lib.nail_9_mc();
	this.nail_9.setTransform(60,210);

	this.nail_8 = new lib.nail_8_mc();
	this.nail_8.setTransform(0,210);

	this.nail_7 = new lib.nail_7_mc();
	this.nail_7.setTransform(-60,210);

	this.nail_6 = new lib.nail_6_mc();
	this.nail_6.setTransform(-120,210);

	this.nail_5 = new lib.nail_5_mc();
	this.nail_5.setTransform(-180,210);

	this.nail_4 = new lib.nail_4_mc();
	this.nail_4.setTransform(-240,210);

	this.nail_3 = new lib.nail_3_mc();
	this.nail_3.setTransform(-300,210);

	this.nail_2 = new lib.nail_2_mc();
	this.nail_2.setTransform(-360,210);

	this.textureNail_9 = new lib.textureNail_9_mc();
	this.textureNail_9.setTransform(340,230);

	this.textureNail_8 = new lib.textureNail_8_mc();
	this.textureNail_8.setTransform(255,230);

	this.textureNail_7 = new lib.textureNail_7_mc();
	this.textureNail_7.setTransform(170,230);

	this.textureNail_6 = new lib.textureNail_6_mc();
	this.textureNail_6.setTransform(85,230);

	this.textureNail_5 = new lib.textureNail_5_mc();
	this.textureNail_5.setTransform(0,230);

	this.textureNail_4 = new lib.textureNail_4_mc();
	this.textureNail_4.setTransform(-85,230);

	this.textureNail_3 = new lib.textureNail_3_mc();
	this.textureNail_3.setTransform(-170,230);

	this.textureNail_2 = new lib.textureNail_2_mc();
	this.textureNail_2.setTransform(-255,230);

	this.textureNail_1 = new lib.textureNail_1_mc();
	this.textureNail_1.setTransform(-340,230);

	this.decorNail_22 = new lib.decorNail_22_mc();
	this.decorNail_22.setTransform(350,245);

	this.decorNail_21 = new lib.decorNail_21_mc();
	this.decorNail_21.setTransform(280,245);

	this.decorNail_20 = new lib.decorNail_20_mc();
	this.decorNail_20.setTransform(210,245);

	this.decorNail_19 = new lib.decorNail_19_mc();
	this.decorNail_19.setTransform(140,245);

	this.decorNail_18 = new lib.decorNail_18_mc();
	this.decorNail_18.setTransform(70,245);

	this.decorNail_17 = new lib.decorNail_17_mc();
	this.decorNail_17.setTransform(0,245);

	this.decorNail_16 = new lib.decorNail_16_mc();
	this.decorNail_16.setTransform(-70,245);

	this.decorNail_15 = new lib.decorNail_15_mc();
	this.decorNail_15.setTransform(-140,245);

	this.decorNail_14 = new lib.decorNail_14_mc();
	this.decorNail_14.setTransform(-210,245);

	this.decorNail_13 = new lib.decorNail_13_mc();
	this.decorNail_13.setTransform(-280,245);

	this.decorNail_12 = new lib.decorNail_12_mc();
	this.decorNail_12.setTransform(-350,245);

	this.decorNail_11 = new lib.decorNail_11_mc();
	this.decorNail_11.setTransform(350,175);

	this.decorNail_10 = new lib.decorNail_10_mc();
	this.decorNail_10.setTransform(280,175);

	this.decorNail_9 = new lib.decorNail_9_mc();
	this.decorNail_9.setTransform(210,175);

	this.decorNail_8 = new lib.decorNail_8_mc();
	this.decorNail_8.setTransform(140,175);

	this.decorNail_7 = new lib.decorNail_7_mc();
	this.decorNail_7.setTransform(70,175);

	this.decorNail_6 = new lib.decorNail_6_mc();
	this.decorNail_6.setTransform(0,175);

	this.decorNail_5 = new lib.decorNail_5_mc();
	this.decorNail_5.setTransform(-70,175);

	this.decorNail_4 = new lib.decorNail_4_mc();
	this.decorNail_4.setTransform(-140,175);

	this.decorNail_3 = new lib.decorNail_3_mc();
	this.decorNail_3.setTransform(-210,175);

	this.decorNail_2 = new lib.decorNail_2_mc();
	this.decorNail_2.setTransform(-280,175);

	this.decorNail_1 = new lib.decorNail_1_mc();
	this.decorNail_1.setTransform(-350,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nail_2},{t:this.nail_3},{t:this.nail_4},{t:this.nail_5},{t:this.nail_6},{t:this.nail_7},{t:this.nail_8},{t:this.nail_9},{t:this.nail_10},{t:this.nail_11},{t:this.nail_12},{t:this.nail_13},{t:this.nail_14}]}).to({state:[{t:this.textureNail_1},{t:this.textureNail_2},{t:this.textureNail_3},{t:this.textureNail_4},{t:this.textureNail_5},{t:this.textureNail_6},{t:this.textureNail_7},{t:this.textureNail_8},{t:this.textureNail_9}]},1).to({state:[{t:this.decorNail_1},{t:this.decorNail_2},{t:this.decorNail_3},{t:this.decorNail_4},{t:this.decorNail_5},{t:this.decorNail_6},{t:this.decorNail_7},{t:this.decorNail_8},{t:this.decorNail_9},{t:this.decorNail_10},{t:this.decorNail_11},{t:this.decorNail_12},{t:this.decorNail_13},{t:this.decorNail_14},{t:this.decorNail_15},{t:this.decorNail_16},{t:this.decorNail_17},{t:this.decorNail_18},{t:this.decorNail_19},{t:this.decorNail_20},{t:this.decorNail_21},{t:this.decorNail_22}]},1).wait(1));

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-19.2,88.5,0.833,0.833,45,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-12.2,770,282.3);
p.frameBounds = [rect, new cjs.Rectangle(-380,-12.2,760,282.3), new cjs.Rectangle(-384,-12.2,768,291.3)];


(lib.closet_nogti_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.nail_1 = new lib.nail_1_mc();
	this.nail_1.setTransform(360,115);

	this.textureNail_0 = new lib.textureNail_0_mc();
	this.textureNail_0.setTransform(340,160);

	this.decorNail_0 = new lib.decorNail_0_mc();
	this.decorNail_0.setTransform(350,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nail_1}]}).to({state:[{t:this.textureNail_0}]},1).to({state:[{t:this.decorNail_0}]},1).wait(1));

	// options
	this.nail_14 = new lib.nail_14_mc();
	this.nail_14.setTransform(360,210);

	this.nail_13 = new lib.nail_13_mc();
	this.nail_13.setTransform(300,210);

	this.nail_12 = new lib.nail_12_mc();
	this.nail_12.setTransform(240,210);

	this.nail_11 = new lib.nail_11_mc();
	this.nail_11.setTransform(180,210);

	this.nail_10 = new lib.nail_10_mc();
	this.nail_10.setTransform(120,210);

	this.nail_9 = new lib.nail_9_mc();
	this.nail_9.setTransform(60,210);

	this.nail_8 = new lib.nail_8_mc();
	this.nail_8.setTransform(0,210);

	this.nail_7 = new lib.nail_7_mc();
	this.nail_7.setTransform(-60,210);

	this.nail_6 = new lib.nail_6_mc();
	this.nail_6.setTransform(-120,210);

	this.nail_5 = new lib.nail_5_mc();
	this.nail_5.setTransform(-180,210);

	this.nail_4 = new lib.nail_4_mc();
	this.nail_4.setTransform(-240,210);

	this.nail_3 = new lib.nail_3_mc();
	this.nail_3.setTransform(-300,210);

	this.nail_2 = new lib.nail_2_mc();
	this.nail_2.setTransform(-360,210);

	this.textureNail_9 = new lib.textureNail_9_mc();
	this.textureNail_9.setTransform(340,230);

	this.textureNail_8 = new lib.textureNail_8_mc();
	this.textureNail_8.setTransform(255,230);

	this.textureNail_7 = new lib.textureNail_7_mc();
	this.textureNail_7.setTransform(170,230);

	this.textureNail_6 = new lib.textureNail_6_mc();
	this.textureNail_6.setTransform(85,230);

	this.textureNail_5 = new lib.textureNail_5_mc();
	this.textureNail_5.setTransform(0,230);

	this.textureNail_4 = new lib.textureNail_4_mc();
	this.textureNail_4.setTransform(-85,230);

	this.textureNail_3 = new lib.textureNail_3_mc();
	this.textureNail_3.setTransform(-170,230);

	this.textureNail_2 = new lib.textureNail_2_mc();
	this.textureNail_2.setTransform(-255,230);

	this.textureNail_1 = new lib.textureNail_1_mc();
	this.textureNail_1.setTransform(-340,230);

	this.decorNail_22 = new lib.decorNail_22_mc();
	this.decorNail_22.setTransform(350,245);

	this.decorNail_21 = new lib.decorNail_21_mc();
	this.decorNail_21.setTransform(280,245);

	this.decorNail_20 = new lib.decorNail_20_mc();
	this.decorNail_20.setTransform(210,245);

	this.decorNail_19 = new lib.decorNail_19_mc();
	this.decorNail_19.setTransform(140,245);

	this.decorNail_18 = new lib.decorNail_18_mc();
	this.decorNail_18.setTransform(70,245);

	this.decorNail_17 = new lib.decorNail_17_mc();
	this.decorNail_17.setTransform(0,245);

	this.decorNail_16 = new lib.decorNail_16_mc();
	this.decorNail_16.setTransform(-70,245);

	this.decorNail_15 = new lib.decorNail_15_mc();
	this.decorNail_15.setTransform(-140,245);

	this.decorNail_14 = new lib.decorNail_14_mc();
	this.decorNail_14.setTransform(-210,245);

	this.decorNail_13 = new lib.decorNail_13_mc();
	this.decorNail_13.setTransform(-280,245);

	this.decorNail_12 = new lib.decorNail_12_mc();
	this.decorNail_12.setTransform(-350,245);

	this.decorNail_11 = new lib.decorNail_11_mc();
	this.decorNail_11.setTransform(350,175);

	this.decorNail_10 = new lib.decorNail_10_mc();
	this.decorNail_10.setTransform(280,175);

	this.decorNail_9 = new lib.decorNail_9_mc();
	this.decorNail_9.setTransform(210,175);

	this.decorNail_8 = new lib.decorNail_8_mc();
	this.decorNail_8.setTransform(140,175);

	this.decorNail_7 = new lib.decorNail_7_mc();
	this.decorNail_7.setTransform(70,175);

	this.decorNail_6 = new lib.decorNail_6_mc();
	this.decorNail_6.setTransform(0,175);

	this.decorNail_5 = new lib.decorNail_5_mc();
	this.decorNail_5.setTransform(-70,175);

	this.decorNail_4 = new lib.decorNail_4_mc();
	this.decorNail_4.setTransform(-140,175);

	this.decorNail_3 = new lib.decorNail_3_mc();
	this.decorNail_3.setTransform(-210,175);

	this.decorNail_2 = new lib.decorNail_2_mc();
	this.decorNail_2.setTransform(-280,175);

	this.decorNail_1 = new lib.decorNail_1_mc();
	this.decorNail_1.setTransform(-350,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nail_2},{t:this.nail_3},{t:this.nail_4},{t:this.nail_5},{t:this.nail_6},{t:this.nail_7},{t:this.nail_8},{t:this.nail_9},{t:this.nail_10},{t:this.nail_11},{t:this.nail_12},{t:this.nail_13},{t:this.nail_14}]}).to({state:[{t:this.textureNail_1},{t:this.textureNail_2},{t:this.textureNail_3},{t:this.textureNail_4},{t:this.textureNail_5},{t:this.textureNail_6},{t:this.textureNail_7},{t:this.textureNail_8},{t:this.textureNail_9}]},1).to({state:[{t:this.decorNail_1},{t:this.decorNail_2},{t:this.decorNail_3},{t:this.decorNail_4},{t:this.decorNail_5},{t:this.decorNail_6},{t:this.decorNail_7},{t:this.decorNail_8},{t:this.decorNail_9},{t:this.decorNail_10},{t:this.decorNail_11},{t:this.decorNail_12},{t:this.decorNail_13},{t:this.decorNail_14},{t:this.decorNail_15},{t:this.decorNail_16},{t:this.decorNail_17},{t:this.decorNail_18},{t:this.decorNail_19},{t:this.decorNail_20},{t:this.decorNail_21},{t:this.decorNail_22}]},1).wait(1));

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(84.4,97.8,0.833,0.833,45,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-3,770,273);
p.frameBounds = [rect, new cjs.Rectangle(-380,-3,760,273), new cjs.Rectangle(-384,-3,768,282)];


(lib.closet_nogti_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.nail_1 = new lib.nail_1_mc();
	this.nail_1.setTransform(360,115);

	this.textureNail_0 = new lib.textureNail_0_mc();
	this.textureNail_0.setTransform(340,160);

	this.decorNail_0 = new lib.decorNail_0_mc();
	this.decorNail_0.setTransform(350,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nail_1}]}).to({state:[{t:this.textureNail_0}]},1).to({state:[{t:this.decorNail_0}]},1).wait(1));

	// options
	this.nail_14 = new lib.nail_14_mc();
	this.nail_14.setTransform(360,210);

	this.nail_13 = new lib.nail_13_mc();
	this.nail_13.setTransform(300,210);

	this.nail_12 = new lib.nail_12_mc();
	this.nail_12.setTransform(240,210);

	this.nail_11 = new lib.nail_11_mc();
	this.nail_11.setTransform(180,210);

	this.nail_10 = new lib.nail_10_mc();
	this.nail_10.setTransform(120,210);

	this.nail_9 = new lib.nail_9_mc();
	this.nail_9.setTransform(60,210);

	this.nail_8 = new lib.nail_8_mc();
	this.nail_8.setTransform(0,210);

	this.nail_7 = new lib.nail_7_mc();
	this.nail_7.setTransform(-60,210);

	this.nail_6 = new lib.nail_6_mc();
	this.nail_6.setTransform(-120,210);

	this.nail_5 = new lib.nail_5_mc();
	this.nail_5.setTransform(-180,210);

	this.nail_4 = new lib.nail_4_mc();
	this.nail_4.setTransform(-240,210);

	this.nail_3 = new lib.nail_3_mc();
	this.nail_3.setTransform(-300,210);

	this.nail_2 = new lib.nail_2_mc();
	this.nail_2.setTransform(-360,210);

	this.textureNail_9 = new lib.textureNail_9_mc();
	this.textureNail_9.setTransform(340,230);

	this.textureNail_8 = new lib.textureNail_8_mc();
	this.textureNail_8.setTransform(255,230);

	this.textureNail_7 = new lib.textureNail_7_mc();
	this.textureNail_7.setTransform(170,230);

	this.textureNail_6 = new lib.textureNail_6_mc();
	this.textureNail_6.setTransform(85,230);

	this.textureNail_5 = new lib.textureNail_5_mc();
	this.textureNail_5.setTransform(0,230);

	this.textureNail_4 = new lib.textureNail_4_mc();
	this.textureNail_4.setTransform(-85,230);

	this.textureNail_3 = new lib.textureNail_3_mc();
	this.textureNail_3.setTransform(-170,230);

	this.textureNail_2 = new lib.textureNail_2_mc();
	this.textureNail_2.setTransform(-255,230);

	this.textureNail_1 = new lib.textureNail_1_mc();
	this.textureNail_1.setTransform(-340,230);

	this.decorNail_22 = new lib.decorNail_22_mc();
	this.decorNail_22.setTransform(350,245);

	this.decorNail_21 = new lib.decorNail_21_mc();
	this.decorNail_21.setTransform(280,245);

	this.decorNail_20 = new lib.decorNail_20_mc();
	this.decorNail_20.setTransform(210,245);

	this.decorNail_19 = new lib.decorNail_19_mc();
	this.decorNail_19.setTransform(140,245);

	this.decorNail_18 = new lib.decorNail_18_mc();
	this.decorNail_18.setTransform(70,245);

	this.decorNail_17 = new lib.decorNail_17_mc();
	this.decorNail_17.setTransform(0,245);

	this.decorNail_16 = new lib.decorNail_16_mc();
	this.decorNail_16.setTransform(-70,245);

	this.decorNail_15 = new lib.decorNail_15_mc();
	this.decorNail_15.setTransform(-140,245);

	this.decorNail_14 = new lib.decorNail_14_mc();
	this.decorNail_14.setTransform(-210,245);

	this.decorNail_13 = new lib.decorNail_13_mc();
	this.decorNail_13.setTransform(-280,245);

	this.decorNail_12 = new lib.decorNail_12_mc();
	this.decorNail_12.setTransform(-350,245);

	this.decorNail_11 = new lib.decorNail_11_mc();
	this.decorNail_11.setTransform(350,175);

	this.decorNail_10 = new lib.decorNail_10_mc();
	this.decorNail_10.setTransform(280,175);

	this.decorNail_9 = new lib.decorNail_9_mc();
	this.decorNail_9.setTransform(210,175);

	this.decorNail_8 = new lib.decorNail_8_mc();
	this.decorNail_8.setTransform(140,175);

	this.decorNail_7 = new lib.decorNail_7_mc();
	this.decorNail_7.setTransform(70,175);

	this.decorNail_6 = new lib.decorNail_6_mc();
	this.decorNail_6.setTransform(0,175);

	this.decorNail_5 = new lib.decorNail_5_mc();
	this.decorNail_5.setTransform(-70,175);

	this.decorNail_4 = new lib.decorNail_4_mc();
	this.decorNail_4.setTransform(-140,175);

	this.decorNail_3 = new lib.decorNail_3_mc();
	this.decorNail_3.setTransform(-210,175);

	this.decorNail_2 = new lib.decorNail_2_mc();
	this.decorNail_2.setTransform(-280,175);

	this.decorNail_1 = new lib.decorNail_1_mc();
	this.decorNail_1.setTransform(-350,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nail_2},{t:this.nail_3},{t:this.nail_4},{t:this.nail_5},{t:this.nail_6},{t:this.nail_7},{t:this.nail_8},{t:this.nail_9},{t:this.nail_10},{t:this.nail_11},{t:this.nail_12},{t:this.nail_13},{t:this.nail_14}]}).to({state:[{t:this.textureNail_1},{t:this.textureNail_2},{t:this.textureNail_3},{t:this.textureNail_4},{t:this.textureNail_5},{t:this.textureNail_6},{t:this.textureNail_7},{t:this.textureNail_8},{t:this.textureNail_9}]},1).to({state:[{t:this.decorNail_1},{t:this.decorNail_2},{t:this.decorNail_3},{t:this.decorNail_4},{t:this.decorNail_5},{t:this.decorNail_6},{t:this.decorNail_7},{t:this.decorNail_8},{t:this.decorNail_9},{t:this.decorNail_10},{t:this.decorNail_11},{t:this.decorNail_12},{t:this.decorNail_13},{t:this.decorNail_14},{t:this.decorNail_15},{t:this.decorNail_16},{t:this.decorNail_17},{t:this.decorNail_18},{t:this.decorNail_19},{t:this.decorNail_20},{t:this.decorNail_21},{t:this.decorNail_22}]},1).wait(1));

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(131.4,79.5,0.833,0.833,45,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-21.2,770,291.3);
p.frameBounds = [rect, new cjs.Rectangle(-380,-21.2,760,291.3), new cjs.Rectangle(-384,-21.2,768,300.3)];


(lib.closet_nogti_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.nail_1 = new lib.nail_1_mc();
	this.nail_1.setTransform(360,115);

	this.textureNail_0 = new lib.textureNail_0_mc();
	this.textureNail_0.setTransform(340,160);

	this.decorNail_0 = new lib.decorNail_0_mc();
	this.decorNail_0.setTransform(350,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nail_1}]}).to({state:[{t:this.textureNail_0}]},1).to({state:[{t:this.decorNail_0}]},1).wait(1));

	// options
	this.nail_14 = new lib.nail_14_mc();
	this.nail_14.setTransform(360,210);

	this.nail_13 = new lib.nail_13_mc();
	this.nail_13.setTransform(300,210);

	this.nail_12 = new lib.nail_12_mc();
	this.nail_12.setTransform(240,210);

	this.nail_11 = new lib.nail_11_mc();
	this.nail_11.setTransform(180,210);

	this.nail_10 = new lib.nail_10_mc();
	this.nail_10.setTransform(120,210);

	this.nail_9 = new lib.nail_9_mc();
	this.nail_9.setTransform(60,210);

	this.nail_8 = new lib.nail_8_mc();
	this.nail_8.setTransform(0,210);

	this.nail_7 = new lib.nail_7_mc();
	this.nail_7.setTransform(-60,210);

	this.nail_6 = new lib.nail_6_mc();
	this.nail_6.setTransform(-120,210);

	this.nail_5 = new lib.nail_5_mc();
	this.nail_5.setTransform(-180,210);

	this.nail_4 = new lib.nail_4_mc();
	this.nail_4.setTransform(-240,210);

	this.nail_3 = new lib.nail_3_mc();
	this.nail_3.setTransform(-300,210);

	this.nail_2 = new lib.nail_2_mc();
	this.nail_2.setTransform(-360,210);

	this.textureNail_9 = new lib.textureNail_9_mc();
	this.textureNail_9.setTransform(340,230);

	this.textureNail_8 = new lib.textureNail_8_mc();
	this.textureNail_8.setTransform(255,230);

	this.textureNail_7 = new lib.textureNail_7_mc();
	this.textureNail_7.setTransform(170,230);

	this.textureNail_6 = new lib.textureNail_6_mc();
	this.textureNail_6.setTransform(85,230);

	this.textureNail_5 = new lib.textureNail_5_mc();
	this.textureNail_5.setTransform(0,230);

	this.textureNail_4 = new lib.textureNail_4_mc();
	this.textureNail_4.setTransform(-85,230);

	this.textureNail_3 = new lib.textureNail_3_mc();
	this.textureNail_3.setTransform(-170,230);

	this.textureNail_2 = new lib.textureNail_2_mc();
	this.textureNail_2.setTransform(-255,230);

	this.textureNail_1 = new lib.textureNail_1_mc();
	this.textureNail_1.setTransform(-340,230);

	this.decorNail_22 = new lib.decorNail_22_mc();
	this.decorNail_22.setTransform(350,245);

	this.decorNail_21 = new lib.decorNail_21_mc();
	this.decorNail_21.setTransform(280,245);

	this.decorNail_20 = new lib.decorNail_20_mc();
	this.decorNail_20.setTransform(210,245);

	this.decorNail_19 = new lib.decorNail_19_mc();
	this.decorNail_19.setTransform(140,245);

	this.decorNail_18 = new lib.decorNail_18_mc();
	this.decorNail_18.setTransform(70,245);

	this.decorNail_17 = new lib.decorNail_17_mc();
	this.decorNail_17.setTransform(0,245);

	this.decorNail_16 = new lib.decorNail_16_mc();
	this.decorNail_16.setTransform(-70,245);

	this.decorNail_15 = new lib.decorNail_15_mc();
	this.decorNail_15.setTransform(-140,245);

	this.decorNail_14 = new lib.decorNail_14_mc();
	this.decorNail_14.setTransform(-210,245);

	this.decorNail_13 = new lib.decorNail_13_mc();
	this.decorNail_13.setTransform(-280,245);

	this.decorNail_12 = new lib.decorNail_12_mc();
	this.decorNail_12.setTransform(-350,245);

	this.decorNail_11 = new lib.decorNail_11_mc();
	this.decorNail_11.setTransform(350,175);

	this.decorNail_10 = new lib.decorNail_10_mc();
	this.decorNail_10.setTransform(280,175);

	this.decorNail_9 = new lib.decorNail_9_mc();
	this.decorNail_9.setTransform(210,175);

	this.decorNail_8 = new lib.decorNail_8_mc();
	this.decorNail_8.setTransform(140,175);

	this.decorNail_7 = new lib.decorNail_7_mc();
	this.decorNail_7.setTransform(70,175);

	this.decorNail_6 = new lib.decorNail_6_mc();
	this.decorNail_6.setTransform(0,175);

	this.decorNail_5 = new lib.decorNail_5_mc();
	this.decorNail_5.setTransform(-70,175);

	this.decorNail_4 = new lib.decorNail_4_mc();
	this.decorNail_4.setTransform(-140,175);

	this.decorNail_3 = new lib.decorNail_3_mc();
	this.decorNail_3.setTransform(-210,175);

	this.decorNail_2 = new lib.decorNail_2_mc();
	this.decorNail_2.setTransform(-280,175);

	this.decorNail_1 = new lib.decorNail_1_mc();
	this.decorNail_1.setTransform(-350,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nail_2},{t:this.nail_3},{t:this.nail_4},{t:this.nail_5},{t:this.nail_6},{t:this.nail_7},{t:this.nail_8},{t:this.nail_9},{t:this.nail_10},{t:this.nail_11},{t:this.nail_12},{t:this.nail_13},{t:this.nail_14}]}).to({state:[{t:this.textureNail_1},{t:this.textureNail_2},{t:this.textureNail_3},{t:this.textureNail_4},{t:this.textureNail_5},{t:this.textureNail_6},{t:this.textureNail_7},{t:this.textureNail_8},{t:this.textureNail_9}]},1).to({state:[{t:this.decorNail_1},{t:this.decorNail_2},{t:this.decorNail_3},{t:this.decorNail_4},{t:this.decorNail_5},{t:this.decorNail_6},{t:this.decorNail_7},{t:this.decorNail_8},{t:this.decorNail_9},{t:this.decorNail_10},{t:this.decorNail_11},{t:this.decorNail_12},{t:this.decorNail_13},{t:this.decorNail_14},{t:this.decorNail_15},{t:this.decorNail_16},{t:this.decorNail_17},{t:this.decorNail_18},{t:this.decorNail_19},{t:this.decorNail_20},{t:this.decorNail_21},{t:this.decorNail_22}]},1).wait(1));

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(144.4,9.5,0.833,0.833,45,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-91.2,770,361.3);
p.frameBounds = [rect, new cjs.Rectangle(-380,-91.2,760,361.3), new cjs.Rectangle(-384,-91.2,768,370.3)];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_nogti_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

	// hero_3
	this.hero_3 = new lib.closet_nogti_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

	// hero_4
	this.hero_4 = new lib.closet_nogti_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

	// hero_5
	this.hero_5 = new lib.closet_nogti_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-91.2,770,361.3);
p.frameBounds = [rect];


(lib.background_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(30.6,160.5);

	this.instance_1 = new lib.blinking_light_3_mc();
	this.instance_1.setTransform(739.5,250.5);

	this.instance_2 = new lib.blinking_light_3_mc();
	this.instance_2.setTransform(440.5,183.5);

	this.instance_3 = new lib.blinking_light_3_mc();
	this.instance_3.setTransform(745,102.5);

	this.instance_4 = new lib.blinking_light_3_mc();
	this.instance_4.setTransform(275,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.background_0_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_mc();

	this.instance_1 = new lib.next_0_mc();
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


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(690.1,40,0.636,0.636,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(695,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(90,700);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(230,490);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn},{t:this.moreGames_btn},{t:this.logo_btn},{t:this.instruction_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.credits_btn}]}).wait(1));

	// free_games
	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(590,700);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.freeGames_mc).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(220,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.602;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(386.1,326,1,1,0,0,0,386.1,326);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-88,1200,878.1);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,750);
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
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance = new lib.background_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-88,1200,918.1);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// decor
	this.photoflash_comp = new lib.photoflash_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(700,350);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(100,350);

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
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.photo_btn},{t:this.playAgain_btn},{t:this.facebook_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// free_games
	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.freeGames_mc).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-300,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-300,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.012;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-419.9,1200,1200);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.hint_mc = new lib.hint_mc();
	this.hint_mc.setTransform(400,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hint_mc},{t:this.indicator_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_1_mc.setTransform(580,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.elsa();
	this.hero_1.setTransform(274.7,415,1.049,1.049);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.9,-318.6,857.9,1018.7);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(158.5,528.1,1,1,0,-100.3,79.7,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{regX:0.1,regY:0.1,skewX:-100.3,skewY:79.7,x:158.5,y:528.1,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:324.4,y:511,rotation:71.7}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:-90,skewY:90,x:474,y:464,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:-90,skewY:90,x:624,y:422,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_6 = new lib.semicircular_arrow_1_1_mc();
	this.object_6.setTransform(344,347.4,0.602,0.602,40.6,0,0,0.1,0.1);

	this.object_7 = new lib.semicircular_arrow_2_1_mc();
	this.object_7.setTransform(444.5,354.5,0.602,0.602,40.6,0,0,0.1,0.1);

	this.object_8 = new lib.semicircular_arrow_3_1_mc();
	this.object_8.setTransform(494.5,338.5,0.602,0.602,40.6,0,0,0.1,0.1);

	this.object_9 = new lib.semicircular_arrow_4_1_mc();
	this.object_9.setTransform(511.5,264.5,0.602,0.602,40.6,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_6}]},5).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[]},1).wait(2));

	// indicator
	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.hint_mc = new lib.hint_mc();
	this.hint_mc.setTransform(400,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hint_mc,p:{scaleX:1,scaleY:1,x:400,y:-250}},{t:this.indicator_mc,p:{x:400,y:-160}}]}).to({state:[{t:this.hint_mc,p:{scaleX:0.816,scaleY:0.816,x:490,y:200}},{t:this.indicator_mc,p:{x:430,y:40}}]},1).to({state:[{t:this.hint_mc,p:{scaleX:1,scaleY:1,x:400,y:-250}},{t:this.indicator_mc,p:{x:400,y:-160}}]},1).to({state:[{t:this.hint_mc,p:{scaleX:0.816,scaleY:0.816,x:490,y:200}},{t:this.indicator_mc,p:{x:430,y:40}}]},1).to({state:[{t:this.hint_mc,p:{scaleX:1,scaleY:1,x:400,y:-250}},{t:this.indicator_mc,p:{x:400,y:-160}}]},1).to({state:[{t:this.hint_mc,p:{scaleX:1,scaleY:1,x:400,y:-250}},{t:this.indicator_mc,p:{x:400,y:-160}}]},1).to({state:[{t:this.hint_mc,p:{scaleX:1,scaleY:1,x:400,y:-250}},{t:this.indicator_mc,p:{x:400,y:-160}}]},1).to({state:[{t:this.hint_mc,p:{scaleX:1,scaleY:1,x:400,y:-250}},{t:this.indicator_mc,p:{x:400,y:-160}}]},1).to({state:[{t:this.hint_mc,p:{scaleX:1,scaleY:1,x:400,y:-250}},{t:this.indicator_mc,p:{x:400,y:-160}}]},1).to({state:[{t:this.hint_mc,p:{scaleX:1,scaleY:1,x:400,y:-250}},{t:this.indicator_mc,p:{x:400,y:-160}}]},1).to({state:[{t:this.hint_mc,p:{scaleX:0.816,scaleY:0.816,x:490,y:200}},{t:this.indicator_mc,p:{x:430,y:40}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_2_mc();
	this.object_1.setTransform(161.1,554);

	this.object_2 = new lib.object_2_2_mc();
	this.object_2.setTransform(490,370);

	this.object_3 = new lib.object_3_2_mc();
	this.object_3.setTransform(340,541);

	this.object_4 = new lib.object_4_2_mc();
	this.object_4.setTransform(490,370);

	this.object_5 = new lib.object_5_2_mc();
	this.object_5.setTransform(475,500);

	this.object_10 = new lib.object_10_2_mc();
	this.object_10.setTransform(624,497);

	this.object_11 = new lib.object_11_2_mc();
	this.object_11.setTransform(490,370);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_10}]},4).to({state:[{t:this.object_11}]},1).wait(1));

	// objects
	this.instance = new lib.animation_1();
	this.instance.setTransform(328.3,317);

	this.subject_2 = new lib.animation_2();
	this.subject_2.setTransform(328.3,317);

	this.subject_3 = new lib.subject_3_2_mc();
	this.subject_3.setTransform(328.3,317);

	this.subject_4 = new lib.animation_5();
	this.subject_4.setTransform(328.3,317);

	this.subject_5 = new lib.subject_5_2_mc();
	this.subject_5.setTransform(328.3,317);

	this.subject_6 = new lib.subject_6_2_mc();
	this.subject_6.setTransform(328.3,317);

	this.subject_7 = new lib.subject_7_2_mc();
	this.subject_7.setTransform(328.3,317);

	this.subject_8 = new lib.subject_8_2_mc();
	this.subject_8.setTransform(328.3,317);

	this.subject_9 = new lib.subject_9_2_mc();
	this.subject_9.setTransform(328.3,317);

	this.instance_1 = new lib.animation_16();
	this.instance_1.setTransform(328.3,317);

	this.subject_11 = new lib.animation_17();
	this.subject_11.setTransform(328.3,317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.subject_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-318.6,1056.5,922.6);
p.frameBounds = [rect, new cjs.Rectangle(-200,-139,1056.5,739), new cjs.Rectangle(-200,-318.6,1056.5,959.6), new cjs.Rectangle(-200,-139,1056.5,739), rect=new cjs.Rectangle(-200,-318.6,1056.5,918.7), rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-139,1056.5,739)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.hint_mc = new lib.hint_mc();
	this.hint_mc.setTransform(400,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hint_mc},{t:this.indicator_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_1_mc.setTransform(230,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.elsa();
	this.hero_1.setTransform(625,850,2.541,2.541);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.6,-318.6,1199.6,1712);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(580,520,0.75,0.75);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-318.6,1200,1078.7);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.75,0.75);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-318.6,1200,1078.7);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.75,0.75);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-318.6,1219.1,1712);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-400);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(280,0);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-260,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.table_mc();
	this.instance.setTransform(0,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-450,917,752);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.hint_mc = new lib.hint_mc();
	this.hint_mc.setTransform(400,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hint_mc},{t:this.indicator_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_1_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// heroes
	this.hero_5 = new lib.hero_5_mc();
	this.hero_5.setTransform(406,408.2);

	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(512.9,423.7);

	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(558,402.7);

	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(578.4,335.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_2},{t:this.hero_3},{t:this.hero_4},{t:this.hero_5}]}).wait(1));

	// objects
	this.hand_mc = new lib.hand_all();
	this.hand_mc.setTransform(212.5,249.5,1,1,0,0,0,10.2,8.6);

	this.timeline.addTween(cjs.Tween.get(this.hand_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-318.6,1058.5,920.7);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(250,300,0.75,0.75);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-318.6,1200,1078.7);
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
	this.instance_2.setTransform(400,300,1,1,0,0,0,400,300);

	this.instance_3 = new lib.SelectionScreen();
	this.instance_3.setTransform(400,300,1,1,0,0,0,400,300);

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();
	this.instance_5.setTransform(400,300,1,1,0,0,0,400,300);

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LocationScreen_4();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.ResultScreen();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(350,50);

	this.instance_10 = new lib.TrackMove();
	this.instance_10.setTransform(275,50);

	this.instance_11 = new lib.Cursor();
	this.instance_11.setTransform(190,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120,50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_11},{t:this.instance_10},{t:this.gravity_explosion_comp}]},1).to({state:[]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-200,-86.2,1200,866.3), new cjs.Rectangle(-200,-86.2,1200,916.3), new cjs.Rectangle(-200,-318.6,1219.1,1712), rect=new cjs.Rectangle(-200,-318.6,1200,1078.7), rect, rect, new cjs.Rectangle(-200,-419.9,1200,1200), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(15,0,353,100), rect=null, rect, rect, rect, rect, rect, rect, rect];


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