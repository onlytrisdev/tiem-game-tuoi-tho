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
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"},
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"},
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_7", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_8", frames: [[0,0,1200,600],[0,602,900,600]]},
		{name:"storage_atlas_9", frames: [[0,0,900,600],[0,602,1200,260],[0,864,1200,200]]},
		{name:"storage_atlas_10", frames: [[0,611,360,460],[362,991,500,300],[362,611,435,378],[366,0,316,500],[0,0,364,609],[799,0,400,400],[864,402,380,380],[864,784,380,380]]},
		{name:"storage_atlas_11", frames: [[452,0,414,299],[0,0,450,276],[868,0,364,323],[0,301,480,240],[0,543,480,240],[482,325,480,240],[0,785,480,240],[482,809,480,240],[0,1027,480,240],[482,567,480,240],[482,1051,480,240]]},
		{name:"storage_atlas_12", frames: [[964,0,320,320],[0,484,387,274],[658,1137,472,158],[0,989,284,272],[768,664,368,249],[964,322,283,340],[389,484,377,252],[286,1041,370,207],[0,760,382,227],[389,738,297,301],[688,915,350,220],[482,0,480,240],[0,0,480,240],[482,242,480,240],[0,242,480,240]]},
		{name:"storage_atlas_13", frames: [[851,524,200,300],[649,388,200,300],[667,826,356,145],[293,740,372,141],[0,0,348,213],[320,390,292,191],[1053,524,192,290],[1030,218,202,304],[350,0,419,171],[0,215,318,185],[0,402,258,214],[0,930,282,172],[566,1130,280,166],[0,740,291,188],[771,0,330,216],[293,883,323,155],[260,583,353,155],[618,973,323,155],[943,1029,323,155],[0,1130,323,155],[649,218,379,168],[350,173,297,215],[1025,826,251,201],[325,1040,239,205]]},
		{name:"storage_atlas_14", frames: [[1048,571,190,190],[856,763,190,190],[483,1038,284,120],[951,1056,272,120],[263,136,317,124],[483,1160,284,120],[263,0,333,134],[933,0,356,119],[951,955,333,99],[598,0,333,133],[1048,763,190,190],[202,673,307,114],[283,537,288,134],[598,135,288,134],[283,401,288,134],[769,955,180,187],[880,379,190,190],[202,789,186,188],[287,1038,194,178],[1072,379,190,190],[856,571,190,190],[0,576,195,208],[0,786,200,200],[468,271,320,120],[0,1127,285,137],[888,259,314,118],[390,789,286,122],[0,988,285,137],[933,121,285,136],[181,262,285,137],[390,913,283,123],[573,393,305,125],[573,520,281,132],[573,654,281,132],[0,425,281,149],[0,0,261,175],[0,177,179,246]]},
		{name:"storage_atlas_15", frames: [[1098,900,150,150],[733,672,271,92],[185,576,272,106],[474,301,272,107],[722,410,271,106],[189,84,273,110],[474,192,272,107],[748,192,278,102],[279,465,271,109],[459,584,272,106],[748,296,255,98],[0,0,180,180],[182,0,385,82],[1091,101,147,167],[0,1163,236,94],[0,355,277,109],[324,848,164,145],[733,518,172,152],[0,684,157,173],[1098,1052,125,174],[0,466,183,158],[324,770,327,76],[907,518,327,76],[324,692,327,76],[653,766,327,76],[159,684,163,163],[942,1148,143,143],[1018,0,266,99],[464,84,283,106],[189,196,283,106],[552,410,168,172],[152,859,150,150],[1063,748,150,150],[1006,596,150,150],[490,848,150,150],[0,859,150,150],[304,995,150,150],[794,996,150,150],[642,941,150,150],[304,1147,150,150],[456,1000,150,150],[911,844,150,150],[608,1093,150,150],[946,996,150,150],[152,1011,150,150],[0,1011,150,150],[1158,596,140,140],[749,106,340,80],[456,1152,150,142],[0,182,187,171],[1005,296,187,132],[279,304,186,159],[760,1148,180,120],[653,844,256,95],[749,0,267,104],[995,430,256,82]]},
		{name:"storage_atlas_16", frames: [[376,1019,100,86],[386,1107,90,90],[634,204,120,120],[142,1138,120,120],[767,163,180,80],[645,82,120,120],[949,122,120,120],[878,245,120,120],[1000,244,120,120],[787,484,103,115],[762,851,63,146],[767,0,194,79],[977,1140,71,107],[264,1138,120,120],[756,245,120,120],[628,571,157,86],[892,367,131,102],[0,304,116,162],[376,808,98,107],[628,659,120,111],[173,140,95,154],[173,296,83,174],[140,0,139,138],[1025,409,271,45],[281,0,262,70],[1046,1050,176,43],[0,718,106,160],[1050,1095,120,63],[1050,1160,120,63],[0,142,119,160],[1122,306,140,101],[628,470,140,99],[620,988,120,73],[1176,456,100,113],[892,662,120,106],[0,594,140,122],[770,367,120,115],[904,1140,71,107],[892,471,140,95],[0,468,140,124],[618,772,120,78],[478,1146,140,57],[750,659,140,94],[892,770,140,81],[0,1002,140,116],[142,472,120,120],[290,728,140,78],[1034,543,140,83],[0,0,138,140],[762,1126,140,59],[620,1189,140,57],[1111,936,140,55],[620,1063,140,62],[969,969,140,55],[1111,993,140,55],[386,1205,140,55],[969,853,140,56],[762,1187,140,59],[904,1083,140,55],[827,912,140,56],[969,911,140,56],[904,1026,140,55],[1050,1225,140,54],[1111,878,140,56],[892,568,140,92],[1156,671,140,67],[432,738,140,67],[478,1083,140,61],[620,1127,140,60],[476,807,140,67],[478,876,140,67],[478,945,140,67],[1156,740,140,67],[478,1014,140,67],[762,1063,140,61],[1135,809,140,67],[827,853,140,57],[620,920,140,66],[620,852,140,66],[1014,671,140,74],[742,999,140,62],[628,367,140,101],[0,1120,140,112],[750,755,140,94],[1122,164,102,140],[0,880,140,120],[545,0,220,80],[1034,747,99,100],[324,808,50,210],[121,142,50,297],[142,594,120,120],[1034,628,254,41],[1034,456,140,85],[0,1260,277,40],[1172,1095,122,61],[1172,1158,122,61],[963,0,120,120],[376,917,100,100],[1085,0,180,80],[281,72,180,80],[270,154,180,80],[270,236,180,80],[258,318,180,80],[1085,82,180,80],[446,328,180,80],[446,656,180,80],[264,564,180,80],[264,400,180,80],[767,81,180,80],[446,492,180,80],[264,646,180,80],[108,728,180,80],[463,82,180,80],[142,974,180,80],[142,892,180,80],[452,164,180,80],[264,482,180,80],[142,810,180,80],[142,1056,180,80],[452,246,180,80],[446,410,180,80],[446,574,180,80]]},
		{name:"storage_atlas_17", frames: [[477,620,60,60],[412,404,100,50],[124,625,60,60],[909,636,50,50],[961,636,50,50],[795,216,80,80],[877,216,80,80],[299,252,78,81],[763,638,48,48],[62,645,48,48],[228,670,122,18],[0,334,152,37],[191,389,89,31],[528,0,111,66],[302,496,99,48],[863,298,86,39],[643,309,93,35],[62,583,60,60],[0,188,80,80],[354,170,80,80],[577,594,60,60],[436,215,80,80],[639,596,60,60],[701,596,60,60],[229,608,60,60],[291,608,60,60],[0,612,60,60],[518,215,80,80],[353,612,60,60],[415,620,60,60],[953,574,60,60],[788,576,60,60],[713,170,80,80],[109,169,80,80],[0,0,120,62],[122,0,120,62],[632,75,80,89],[368,116,130,52],[714,116,130,52],[122,481,43,100],[521,309,120,47],[162,292,120,49],[82,251,78,81],[246,108,120,57],[539,658,140,23],[602,394,140,37],[901,365,120,45],[743,0,140,52],[846,116,140,48],[244,0,140,53],[244,55,140,51],[500,166,140,47],[379,297,140,42],[386,0,140,53],[600,262,140,45],[0,511,120,37],[123,64,119,37],[744,394,110,47],[191,472,109,44],[0,465,109,44],[681,488,109,44],[742,298,119,48],[502,518,109,38],[881,451,110,44],[0,419,110,44],[459,456,109,44],[570,472,109,44],[246,167,106,61],[0,125,107,61],[792,532,97,42],[167,518,98,43],[403,502,97,46],[191,230,106,60],[500,129,98,34],[891,532,98,40],[186,625,40,55],[436,170,40,43],[509,55,10,11],[642,166,69,94],[641,0,100,73],[850,636,57,60],[714,75,23,38],[989,55,31,31],[191,169,50,50],[959,216,40,147],[0,270,60,60],[329,546,60,60],[664,534,60,60],[0,550,60,60],[726,534,60,60],[267,546,60,60],[391,550,60,60],[167,563,60,60],[453,558,60,60],[515,558,60,60],[891,574,60,60],[129,389,60,90],[739,451,140,35],[602,433,135,37],[613,518,49,74],[542,358,58,95],[792,497,140,33],[191,433,137,37],[856,412,137,37],[885,0,137,53],[0,373,127,44],[643,348,127,44],[772,348,127,44],[846,166,135,48],[330,456,127,38],[284,341,127,44],[413,358,127,44],[283,387,127,44],[154,343,127,44],[386,55,121,59],[866,55,121,59],[0,64,121,59],[743,54,121,60],[509,68,121,59],[123,108,121,59]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_11_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_12_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_13_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_14_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_15_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banana_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_category_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_long_button_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_navigation_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_option_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor14_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor15_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor20_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.check_category_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.done_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor15_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor20_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory13_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hat10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hat11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hat12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hat7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hat8png = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hat9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero_body_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero_mouth1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero_mouth2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero_mouth3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero_mouth4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero_mouth5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero_mouth6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero_mouth7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero_mouth8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hill_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hm = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.icon_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.icon_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_13_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_17_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_20_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.icon_hair_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.icon_pants_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.icon_shirt_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.icon_shoes_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.icon_socks_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.icon_socks_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.icon_socks_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.icon_socks_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.icon_socks_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.icon_socks_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.icon_socks_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.icon_socks_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.icon_wings_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.icon_wings_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.icon_wings_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.icon_wings_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.numbers_separator_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.podium_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.question_mark_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.scar1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.scar1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.scar2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.scar3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.scar4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.scar5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.scar6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.scar6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.scar7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.scar7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.scar8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.scar8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.star_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.title_random_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.title_random_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.title_random_es_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.title_random_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.title_random_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.title_random_id_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.title_random_it_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.title_random_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.title_random_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_es_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_id_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_it_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.top_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.top_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.top_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.top_decor13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.top_decor14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.top_decor15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.top_decor16_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.top_decor17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.top_decor18_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.top_decor19_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.top_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.top_decor20_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.top_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.top_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.top_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.top_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.top_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.top_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.top_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.top_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.wing1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.wing2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.wing3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.wing4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-140,-53,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-53,280,105);
p.frameBounds = [rect];


(lib.redirect_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_0_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhdvAu3MAAAhdtMC7fAAAMAAABdtg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_18_mc = function(mode,startPosition,loop) {
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


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],5.8,10.1,-7.6,-13.1).s().p("AhHCHQhAgCgYgqQgXgoAdg2QAeg5BEgmQBAgmA/ACQBAACAYApQAXApgeA2QgdA4hCAnQg+Akg9AAIgGAAg");
	this.shape.setTransform(-54,-91.1,1.97,1.97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-2.2,5.9,3,-7.9).s().p("AgUA7QglgHgUgVQgUgVAKgXQAJgZAggMQAhgOAjAHQAlAFAUAVQATAWgJAWQgKAZggAMQgXAKgYAAQgKAAgKgBg");
	this.shape_1.setTransform(0.2,-117.4,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.976],-0.8,-102.7,-0.7,33.2).s().p("AmUFDQioiGABi9QgBi9CoiGQCoiGDsAAQDtAACoCGQCnCGAAC9QAAC9inCGQioCGjtABQjsgBioiGg");
	this.shape_2.setTransform(0.5,-47.8,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// graph
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(152,172,255,0)","#BFC2FF"],[0,1],0.5,4.5,0.5,38.5).s().p("Am5B1QivitgIjzQALC0CsB/QC3CKECAAQEDAAC4iKQCph/ANiyQgJDyitCsQi4C3kDAAQkCAAi3i3g");
	this.shape_3.setTransform(0,64.1,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// graph
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,145,175,0)","#E023A0","rgba(205,24,144,0)"],[0,0.667,1],17,-23,0,17,-23,112.1).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
	this.shape_4.setTransform(0,0,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// graph
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F252BC","#F87BCE"],[0,1],0,63,0,-69).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
	this.shape_5.setTransform(0,0,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// graph
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
	this.shape_6.setTransform(4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFCCFF"],[0,1],0,-59.9,0,60).s().p("AmoJIQgZgRgPgbQgOgeAAggIAAu7QAAggAOgeQAPgbAZgRQAZgQAdAAQAdAAAaAQILkHfQAZARAPAcQAOAcAAAfQAAAggOAcQgPAcgZARIrkHfQgaAQgdAAQgdAAgZgQg");
	this.shape.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-60,96,120);
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
	this.shape.graphics.f("#F82991").s().p("AgKDkQgUgHgWgOQhZgygrgmQgygsgdgwQgkg5ABg4QAAhRA/glQApgZAxAAQA5AAAnAZQAcAQAVAgQAVggAdgQQAmgZA6AAQAyAAAoAZQBAAlAABRQAAA4gkA5QgdAwgyAsQgrAmhZAyQgWAOgTAHQgHACgFAAQgFAAgFgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-23,60,46.1);
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


(lib.orientation_lock_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFAtIEQAAQAAjMiRiRQiPiRjPAAQiqAAiABjIk1k0QEBjiFeAAQGAAAEQERQEQERABF/IEHAAInmNIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-88.5,180,177.1);
p.frameBounds = [rect];


(lib.orientation_lock_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhTBUQgkgjABgxQgBgxAkgiQAjgjAwAAQAyAAAiAjQAjAiAAAxQAAAxgjAjQgiAjgyAAQgwAAgjgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.orientation_lock_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkgA8QgaAAgRgSQgSgRAAgZQAAgYASgRQARgSAaAAIJBAAQAZAAASASQASARAAAYQAAAZgSARQgSASgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-6,70,12);
p.frameBounds = [rect];


(lib.orientation_lock_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiwCwQhIhJgBhnQAAgWAFgWQAMhLA4g5QA5g4BLgMQAQgEASAAIAKgBIAOABQBeAEBEBEQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKgAgKikQg+ADgsAtQgxAxAABDQAAATAEASQAJAuAkAiQAxAxBDAAQBEAAAxgxQAxgxAAhEQAAhDgxgxQgigkgugJQgLgDgMAAIgOgBIgKABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.orientation_lock_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1FbVMAAAg2pMAqLAAAMAAAA2pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-175,270,350);
p.frameBounds = [rect];


(lib.orientation_lock_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgRzAnEQiVgBhphpQhqhpAAiVMAAAhC3QAAiVBqhpQBphpCVgBMAjnAAAQCVABBpBpQBqBpAACVMAAABC3QAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
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


(lib.wing4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing4_img();
	this.instance.setTransform(-137.5,-129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.5,-129.5,239,205);
p.frameBounds = [rect];


(lib.wing3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing3_img();
	this.instance.setTransform(-69.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-96.5,179,246);
p.frameBounds = [rect];


(lib.wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing2_img();
	this.instance.setTransform(-161.5,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.5,-88.5,261,175);
p.frameBounds = [rect];


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1_img();
	this.instance.setTransform(-125.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-100.5,251,201);
p.frameBounds = [rect];


(lib.top_decor20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor20_img();
	this.instance.setTransform(-161.2,-77.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,323,155);
p.frameBounds = [rect];


(lib.top_decor19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor19_img();
	this.instance.setTransform(-142.4,-67.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.4,-67.7,285,136);
p.frameBounds = [rect];


(lib.top_decor18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor18_img();
	this.instance.setTransform(-142.2,-68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,285,137);
p.frameBounds = [rect];


(lib.top_decor17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.top_decor17_img();
	this.instance.setTransform(-161.2,-77.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,323,155);
p.frameBounds = [rect];


(lib.top_decor16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor16_img();
	this.instance.setTransform(-143.2,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.2,-60.6,286,122);
p.frameBounds = [rect];


(lib.top_decor15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor15_img();
	this.instance.setTransform(-127.9,-40.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.9,-40.7,256,82);
p.frameBounds = [rect];


(lib.top_decor14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor14_img();
	this.instance.setTransform(-176.6,-77.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.6,-77.7,353,155);
p.frameBounds = [rect];


(lib.top_decor13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.top_decor13_img();
	this.instance.setTransform(-161.2,-77.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,323,155);
p.frameBounds = [rect];


(lib.top_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.top_decor12_img();
	this.instance.setTransform(-157.2,-59.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.2,-59.1,314,118);
p.frameBounds = [rect];


(lib.top_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor11_img();
	this.instance.setTransform(-142.2,-68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,285,137);
p.frameBounds = [rect];


(lib.top_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor10_img();
	this.instance.setTransform(-165.2,-107.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.2,-107.9,330,216);
p.frameBounds = [rect];


(lib.top_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor9_img();
	this.instance.setTransform(-148.7,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.7,-107.5,297,215);
p.frameBounds = [rect];


(lib.top_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor8_img();
	this.instance.setTransform(-189.6,-83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189.6,-83.9,379,168);
p.frameBounds = [rect];


(lib.top_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor7_img();
	this.instance.setTransform(-140.2,-74.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.2,-74.3,281,149);
p.frameBounds = [rect];


(lib.top_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor6_img();
	this.instance.setTransform(-140.5,-66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-66.1,281,132);
p.frameBounds = [rect];


(lib.top_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor5_img();
	this.instance.setTransform(-140.5,-66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-66.1,281,132);
p.frameBounds = [rect];


(lib.top_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor4_img();
	this.instance.setTransform(-152.7,-62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.7,-62.4,305,125);
p.frameBounds = [rect];


(lib.top_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor3_img();
	this.instance.setTransform(-161.2,-77.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,323,155);
p.frameBounds = [rect];


(lib.top_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor2_img();
	this.instance.setTransform(-141.4,-61.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.4,-61.4,283,123);
p.frameBounds = [rect];


(lib.top_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor1_img();
	this.instance.setTransform(-142.2,-68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,285,137);
p.frameBounds = [rect];


(lib.top_base20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AUDLvIgGgEQgGgEgEgGQgDgGABgHQAHhEAQh5QASiJAHhIQpcDGp8AFQqZAFq/jQQgDCSAJBMIAcCuQABAIgEAIQgEAHgIAEQgUAJg9AMIAAAAQgkAGg6AAIgZgBIAAAAQgUgCgWgFIgBAAIgigJIgggLQgHgDgEgGQgFgGAAgIQgDhWgEi2IgDiyQAAkLBQlKQBMk7BiheIAAgBIAAAAIACgCIACgBIABgCIAKgIQAJgHAKABQAKABAGAJQAHAIgBAKIgCAHQACAEABAFIAKBhIAAAHIAGAAQDeAaDcARQFTAbFNAFIBWABQAHAAAHAEQBGAxArBNIABAAIAEAHQAQgqAagfIAAAAQAigpAwgXQAFgCAFAAIAfgBIAAAAQFTgHFNgfQCzgQDWgXIAWgCIgBAAIASgCQgBgFAAgFIAHiHQABgJAGgHQAIgHAJAAQAKgBAHAHQBfBQAlCnQANA4AQBvQAWCVAJAyIAAAAQATB2ARFJQAPEYAFCVQAAAHgEAHQgEAGgGADQg7AchFAFIAAAAIgcAAQhKAAhVgZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,322.5,155.4);
p.frameBounds = [rect];


(lib.top_base19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A03HNQgHgCgFgGQgFgGgBgHQgdjIBGigQAmkYiOiaQgFgFgCgHQgBgGACgHIA3i0QACgHAHgFQAGgFAIAAQAIAAAHAEQAHAFACAIQE4NwR6gnQNtgjEtuKQACgIAHgFQAHgEAIAAQAIAAAHAFQAGAGACAIIA9DrQABAGgCAHQgCAGgFAFQjXDKBiDxQBZDZgiC4QgBAHgFAFQgEAFgHADQpvDTqYAAQqeAArLjYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.4,-67.7,285,135.6);
p.frameBounds = [rect];


(lib.top_base18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AtKJkIhjgRQgIgCgGgGQgGgHAAgJQgGlnAZjlIgbgRQhIgvhchBIgqgdIhWhBQikiBAEg7IAAgBQAQkCAvAEQAKAAAHAIIBkBiIAAAAIANANIgBAAIAoAnQA/A9AaAWIABAAQBbBPBrBLIABAAIADADIAAAAIAGAEQAdhYApgpQAsguA4AEQALABANADIWYAAIALgCQBzgSBACkQBehDBShHQAcgYBHhFIAegdIAMgNIBkhiQAHgIAKAAQAvgEAQECIAAABQAEA7ikCBIg1ApIhKA1QhVA7hDAsQAcDngJF1QAAAIgFAHQgHAHgIACQg9ANg+ALQmdBLmvAAQmjAAm2hIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,284.5,136.9);
p.frameBounds = [rect];


(lib.top_base17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AUDLuIgCgBIgCgBIgCgBQgGgEgEgGQgDgHABgHQAHhDAQh5QASiKAHhHQpcDGp8AFQqZAFq/jQQgDCSAJBMIAcCuQABAIgEAIQgEAHgIAEQgUAJg9ALIAAAAQgkAHg6AAQgsAAg6gSIAAAAIgggKQgHgDgEgGQgFgGAAgIQgDhWgEi2IgDizQAAkKBQlKQAjiQAnhgQAuh1A1g0IABgBIAAAAIACgCIACgBIABgCIAKgJQAJgGAKABQAKABAGAIQAHAIgBALIgCAHQACAEABAFIAKBhIAAAHIAGAAQDeAZDcASQFTAaFNAFQByACBvgBIAMAAIAJAAICJgCQFTgIFNgeQDWgUDVgcIAEgBIAAgEIAHiHQAAgKAHgGQAIgHAJgBQAKAAAHAGQBVBIAnCPIABABIAHAgQANA4AQBvQAWCVAJAyIAAAAQATB2ARFJQAPEYAFCVQAAAHgEAGQgEAHgGADQhHAihUAAQhKAAhWgbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,322.5,155.5);
p.frameBounds = [rect];


(lib.top_base16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A0wGOQgJgCgFgIQgFgIACgJIAPhuQAAgHAFgGQAFgGAHgCQAHgCAIACQCjAzCiAmQhMoLlwi2QgGgDgEgGQgDgGgBgHQAAgHADgGIA8huIACgBIABgFQANgbAQgLIAAAAQASgPAdAAQAqAAATAeIAAABIAMAcQAIgGALgGIAAAAQAYgMAYAAQAyAAAYAmQAIAMALAfQALgRAUgLQAZgNAfAAQAvAAAVAnQAEAIAFARQAbgdA3AAQA0AAASAqIAAACIAIAbQALgQAMgKIAAAAQAcgZArAAQAqgBAZApIAAgBQALASAGAXQALgMASgOIAAAAQAhgaARACQAuAAAWAcQAKAMAOAhQAJgPASgOQAigYAlAAQAjgBAbAmIABACQANAXAJANQAQgWAWgOIAAAAQAkgYApAAQAZgCAiAlQAOAOAIANQAVgdAcgOQAkgVAaAGQAZAEARANIAAAAQAMAIAXAZQALgPARgPQAlgjAfABQAbgBAZAdIAQATQAQgVAZgQQAngZAoAAQAigBAhAcIAAAAIAUARQALgbAUgQQAegaAvAAQArAAAOAcQAMgfAQgPQAagbAuAAQAigBAaAgQAMgQAUgQIAAgBQAngiAdABQAiAAAUAWQALgfAagTQAkgbA4AAQAkAAAZAZIAAAAIADAEQAIgSASgSQAggjAXACQAbgCAYAnQANAVAGAUIABACIABACIABACIAxB2QADAJgDAJQgDAJgIAEQlxDLhPILQCqgpCog5QAHgDAIACQAHACAFAGQAFAGABAIIAJBnQABAIgFAIQgFAHgIADQp1DSqYAAQqaAAq/jVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.2,-61.1,286.5,122.4);
p.frameBounds = [rect];


(lib.top_base15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AJuGXQipAAh3h3QhWhWgYhwQjXAJjYgMQgXBxhYBYQh3B3ipAAQipAAh3h3Qh3h4AAioIABgfQh8gdh8gkQgKgCgFgJQgFgJADgKQADgKAJgFQAJgFAKADQB4AiB4AdQAXh1BZhaQB3h3CpAAQCpAAB3B3QB4B4AACnQAAATgCASQDRAMDQgJQgCgUAAgUQAAinB3h4QB3h3CpAAQCpAAB3B3QBbBbAWB4QBwgdBwgiQAKgDAJAEQAJAFADAKQADAKgFAJQgEAJgKADQh0Akh1AeIABAaQAACoh4B4Qh3B3ipAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.9,-40.7,256,81.5);
p.frameBounds = [rect];


(lib.top_base14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AT5LuIgDgBIgCgBIgCgBQgGgEgDgGQgDgHABgHQAHhDAQh5IABgOIABgEQAQh8AHhDQpuDMqQgBIgEAAQqGgBqpjKQgCBxAFBHIAAABIAAAAIAEAlIAbCuQACAIgFAIQgEAHgHAEQgVAJg8ALIgBAAQgjAHg7AAQgsAAg6gSIAAAAIgfgKQgHgDgFgGQgEgGAAgIIgGjTIAAgBIAAgBIAAgBIgBg2IgDizQgBiZAbisQhAAwhAA5QgGAFgHABQgIABgHgEQgHgDgEgHQgDgHABgIIAfjeQAQhuAyibQAyidEBiCIAMgGQAJgFAJADQAJACAGAIQAFAIgCAKIgBAGQACAEAAAFIALBhIAAAHIAFAAIAjAEIADAAQKpChIGEjIABABIACABIAdARIBAgkIABgBIASgJIADgBIACgBQJWk8JWh3IACAAIApgFIAFgBIgBgEIAIiHQAAgIAGgHQAFgGAIgCQAJgCAIAEQEMCFAzChQAyCaAQBuIAfDfQABAHgDAHQgEAHgHAEQgHAEgIgBQgHgBgGgFQhXhMhVhAQAQB+AOETIAMDrIAAABIAAABIAIDAQAAAHgEAGQgEAHgHADQhGAihUAAQhLAAhVgbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.6,-77.7,353.2,155.5);
p.frameBounds = [rect];


(lib.top_base13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AUDLuIgCgBIgCgBIgCgBQgGgEgEgGQgDgHABgHQAHhDAQh5QASiKAHhHQkABUkGAxIgCABIgFAAQlAA8lIAIQg4ABg5AAQmWgBmlhRIgBAAIgBAAQj1gvj5hKQgCCSAJBMIAcCuQABAIgEAIQgEAHgIAEQgUAJg9ALIAAAAQgkAHg6AAQgsAAg6gSIAAAAIgggKQgHgDgEgGQgFgGAAgIQgDhWgEi2IgDizQAAkKBQlKQAbhwAdhTIABgDIABgCIAJgXIAAgCIACgDQAxh/A4g3IAAAAIAAAAIACgCIACgBIABgCIAKgJQAJgGAKABQAKABAGAIQAHAIgBALIgCAHQACAEABAFIAKBhIAAAHIAGAAIBEAHIAAAAIABAAIADABQC6AUC4APQFTAaFNAFIAAAAQBkACBhgBIBwgBIAAAAIBKgBIAAAAQFTgIFNgeICvgRIBwgNICMgSIAEgBIAAgEIAHiHQABgKAGgGQAIgHAJgBQAKAAAHAGQBTBHAnCKIACAEIAAACQADAHgDAHQAEAEACAGIACAJQANA4AQBvQAWCVAJAyIAAAAQATB2ARFJQAPEYAFCVQAAAHgEAGQgEAHgGADQhHAihUAAQhKAAhWgbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,322.5,155.5);
p.frameBounds = [rect];


(lib.top_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A06F6QgIgDgFgGQgFgHAAgIQAAg0ACgyIACgiQhiAXhxhFQgEgDgCgEQgCgEABgFIAVh8QgEgDgBgFQgCgFAAgFQAFjuAeiOQAmi6BRgeQAXgKAaADIADAAQCCAcCDAXQCdAbCeAUIAGABIABAAIAIABQC2AWC2ANIAKAAQCkALCkADQCEACCHgEQClgECmgNIABAAQClgNCmgVIANgBQCigWCkgdQAEgBAEAAIB0gWQBagcBGCCIADAFIABADQAIAVAHAaIABADIABACIABACQAhB8AGDhQAAAKgHAIIAWB2IgBAIQgBADgDADQhQBHiGgLIANBMIAAAAQAHA4AEA3QAAAIgEAIQgFAHgIADQqGDfqrgBQqaAAq/jUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.2,-59.1,314.5,118.2);
p.frameBounds = [rect];


(lib.top_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AtKJkIhjgRQgIgCgGgGQgGgHAAgJQgCh6ABhqQAEjRAQiXIgbgRQhIgvhchBIgqgdIhWhBQikiBAEg7IAAgBQAQkCAvAEQAKAAAHAIIBkBiIAAAAIANANIgBAAIAoAnQA/A9AaAWIABAAQBbBPBrBLIABAAIADADIAAAAIAGAEQAdhYApgpQAsguA4AEQALABANADIWYAAIALgCQBzgSBACkQBehDBShHQAcgYBHhFIAegdIAMgNIBkhiQAHgIAKAAQAvgEAQECIAAABQAEA7ikCBIg1ApIhKA1QhVA7hDAsQAWC0gBEMQAABLgCBRQAAAIgFAHQgHAHgIACQg9ANg+ALQmaBKmrABIgGAAQmkAAm2hIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,284.5,136.9);
p.frameBounds = [rect];


(lib.top_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A2KNMQgIgCgEgGQgFgHgBgHQgXn/BSlxQiegFhviQQgDgFgBgGQgBgGABgGIA8jNQADgIAHgFQAHgFAJAAQAIABAFAEQBDkABvhnQgDgFAAgHIAJjrQAAgIAFgGQAFgHAIgCQAIgCAHADQIrDIIrAmIADABQC2AggGDcQCEADCGgHQgShyApg+QAphEBpgKIAAAAQHfgcHfi5QAHgDAIACQAHACAFAGQAGAFABAIIAcDdQB1BmAwEOQAJAAAHAFQAHAFADAJIAyC0QABAGgBAGQgBAFgEAFQhuCDingBQBcG1AQHlQAAAIgFAHQgFAHgIACQmjCCmdA5IgFAAQkWAmkeAAQrJAAr7jrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.2,-107.9,330.5,215.9);
p.frameBounds = [rect];


(lib.top_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A23NkQgIgCgFgHQgFgGAAgIQgZnlB4nXQACgJAIgFQDPiOA+kPQilgviog9QgJgDgEgIQgFgJACgJIBLlPQACgHAFgFQAFgFAHgCQAHgBAHACQWPH0TjogQAHgDAIABQAHACAGAFQAFAFACAIIBGFjQABAJgEAHQgEAIgIAEQjUBbjYA/QCMEXCYgBQAGAAAFACIADgBQAKgDAJAFQAJAFADAKQCpI8gIHZQAAAIgFAHQgFAGgHACQrJDkrvAAQrLAArxjPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.7,-107.5,297.4,215.2);
p.frameBounds = [rect];


(lib.top_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A4DMlIgjgSQgGgDgDgGQgDgFgBgGIgGhzIgBgVIgBADQgoBVgIBgIgCAWIgCABIgBABQhviGhEhuIgBgBQhDiBAAiaQAAh7AxhZQAZgwBQhUIAAgBQBFhLAcg7QAsheAAiEIgKjHIAAgBQAAh2BUg7QAdgWAzgVIABgBQBBgZAtANQAIACAGAHQAFAHAAAIIAABUQKxCeKYE2QJkloKKh1IgBgFIAAhQQAAgKAIgHQAHgIAKAAQA+AAA+AXIAAABQAzAVAeAWIgBAAQBUA7AAB2IAAABIgKDHQAACEAsBeQAcA7BFBLIAAABQBQBUAZAwQAxBZAAB7QAACahDCBIgwBGQgwBGhLBgIgEAEQgBgSgHglQgKg4gjhOIgLB4QgBAGgDAFQgEAFgFADQghATgmALQg0APhGAAQhZAAgpgIQgKgCgGgIQgGgJACgKIAOhVQAYiZAAhBQAAhXgBgUIgBgMQzHGG1ImRIgJCkQgBAZAABJIADBkIAEBWQABAJgGAIQgGAHgJACQgfAGgQAAQhcAAhIgig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189.6,-83.9,379.4,167.9);
p.frameBounds = [rect];


(lib.top_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A01ISQgJgDgFgIQgFgIACgJIBPnvQACgIAJgGQAIgGAKABICbAYQhgjOiChXIAAAAQgjgXglgPQgHgCgFgHQgEgHAAgHIAIl3QABgKAGgHQAHgHAJgBQAKgBAHAGQBfBFBNBeQCtDVBIFSQABAHgCAGQAGAKAAAOQAZABASARIAAABIAHAHQOtB2NNh6IABAAIADgDQAJgKALgEQBGlvC3jiQBNheBfhFQAHgGAKABQAJABAHAHQAGAHABAKIAIF3QAAAHgEAHQgFAHgHACQglAPgjAXIAAAAQiBBWhfDKQBMgMBMgQQAKgCAIAFQAJAGACAKIBvHtQACAJgFAIQgFAJgJADQqGDfqsAAQqZAAq/jVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.2,-74.3,280.5,148.7);
p.frameBounds = [rect];


(lib.top_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AuzIkQgIgCgFgGQgGgGAAgIQgBgIADgHQCjkjA8l9QgTgXgIgcIpskDQgIgEgEgHQgEgIABgIIAUiMQABgIAFgFQAGgGAIgCQAHgCAHAEIJ6EMIACgbQAAgHAEgGQAFgGAHgDQAGgCAHABQLaCIJ0h+QAHgBAHACQAGACAFAGQAEAFABAHIADAVIKCkOQAIgEAIACQAHACAFAGQAGAFABAIIAUCMQABAIgEAIQgEAHgIAEIqJEPQBZG4ClETQAEAHAAAIQgBAIgFAGQgGAGgIACQnLBsndAAQnkAAn5hwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-66.1,281,132.2);
p.frameBounds = [rect];


(lib.top_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AuzIkQgIgCgFgGQgGgGAAgIQgBgIAEgHQCqkxA5mUIqMkRQgIgEgEgHQgEgIABgIIAUiMQABgIAFgFQAGgGAIgCQAHgCAHAEIJ6EMIACgbQAAgHAEgGQAFgGAHgDQAGgCAHABQLaCIJ0h+QAHgBAHACQAGACAFAGQAEAFABAHIADAVIKCkOQAIgEAIACQAHACAFAGQAGAFABAIIAUCMQABAIgEAIQgEAHgIAEIqJEPQBZG4ClETQAEAHAAAIQgBAIgFAGQgGAGgHACQnMBsndAAQnkAAn5hwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-66.1,281,132.2);
p.frameBounds = [rect];


(lib.top_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AmAJZIgBAAIgBAAIgpgEIAAAAQnEgwnSiNQgKgDgFgJIgBgDQgHgCgFgGQgHgIABgKQAUkCBMh+QAIhWgThHQgBgEAAgEQgUgNgUgBIgLABQgPACgWAHIgBAAQgmALgQgBQgWABgcgSQgmgXABggQgEgIA4grIgQgJIABAAQgmgXABggQgEgIBBgyIAvglQgDgIADgIIAZhOQACgJAIgEQAIgFAJABQH7BJHdASQF5ANFlgVQIAgfHahmQAIgCAIAEQAIAEAEAIIAcA6QAEAIgBAIQAYAYAtAdQAZARAbAQQAFADACAGQABAGgCAFQgZAsgXAOIAsAmQAEAEABAFQABAFgCAFQglBDgjgDQgJABgOgHQgGgDgEgBQgUACgmAiQgmAignAIIgOACQgHAqgEAwQBdCnAQEkQABAIgFAHQgFAHgHADQm8CYnNAxIg3AFIgjADIgDAAQilANimAAQjJAAjPgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.7,-62.1,305.4,124.2);
p.frameBounds = [rect];


(lib.top_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AURLyIgJABQgKgBgHgHQgGgHgBgKIABgDIAAgBIAAAAIAAgBIAAgDQAHhDAQh4QARiFAIhHQoKClobAbIgEAAIgBAAIAAAAQrxAlsWjqQgCCSAJBMIAcCuQABAIgEAIQgEAHgIAEQgUAJg9ALIAAAAQgkAHg6AAQgsAAg6gSIAAAAIgggKQgHgDgEgGQgFgGAAgIQgDhWgEi2IgDizQAAkKBQlKQBMk7BihfIAAAAIAAAAIACgCIACgBIABgCIAKgJQAJgGAKABQAKABAGAIQAHAIgBALIgCAHQACAEABAFIAKBhIAAAHIAGAAQDdAZDcASIABAAQFTAaFNAFIAAAAQC/ADC/gEIACAAQFSgIFNgeIABAAQDWgUDUgcIAEgBIAAgEIAHiHQABgKAGgGQAIgHAJgBQAKAAAHAGQBfBRAlCnQANA4AQBvQAWCVAJAyIAAAAQATB2ARFJQAPEYAFCVQAAAHgEAGQgEAHgHADQhGAihUAAQhEAAhOgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,322.5,155.4);
p.frameBounds = [rect];


(lib.top_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A03GyIgDgBQgJgBgGgGQgHgHAAgLQAAgWArjoQAqjeAAhAQAAi9h/hdQgIgGgCgKQgCgJAFgJQAIgNAKgjIAAgBQAMgqAWgyQADgGAGgEQAHgEAHAAQAIAAAGAEQBLAyAgArIAAgBQAkAwAlBWQSuElRlk4QA5hcBdh4QAGgIAKgBQAKgCAIAGQAIAHACAKIAVB7IAAABQADAPAHAKQAGAHgBAJQAAAJgGAHQgoArgVBBIAAAAQgdBcAABgQAABTAlC/QAOBEAHAxQAMBVgFAfQgCAKgIAGIgCADQgEAKgKADQp+C+qsAAQqWAArDi0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.4,-61.4,282.8,123);
p.frameBounds = [rect];


(lib.top_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AtKJkIhjgRQgIgCgGgGQgGgHAAgJQgGlnAZjlIgbgRQhIgvhchBIgqgdIhWhBQikiBAEg7IAAgBQAQkCAvAEQAKAAAHAIIBkBiIAAAAIANANIgBAAIAoAnQA/A9AaAWIABAAQBbBPBrBLIABAAIADADIAAAAIAGAEQAdhYApgpQAsguA4AEQALABANADIWYAAIALgCQBzgSBACkQBehDBShHQAcgYBHhFIAegdIAMgNIBkhiQAHgIAKAAQAvgEAQECIAAABQAEA7ikCBIg1ApIhKA1QhVA7hDAsQAcDngJF1QAAAIgFAHQgHAHgIACQg9ANg+ALQmdBLmvAAQmjAAm2hIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,284.5,136.9);
p.frameBounds = [rect];


(lib.socks_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor8_img();
	this.instance.setTransform(-60.6,-29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121,59);
p.frameBounds = [rect];


(lib.socks_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor7_img();
	this.instance.setTransform(-60.6,-29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121,59);
p.frameBounds = [rect];


(lib.socks_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor6_img();
	this.instance.setTransform(-60.4,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-30.1,121,60);
p.frameBounds = [rect];


(lib.socks_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor5_img();
	this.instance.setTransform(-60.6,-29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121,59);
p.frameBounds = [rect];


(lib.socks_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor4_img();
	this.instance.setTransform(-60.6,-29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121,59);
p.frameBounds = [rect];


(lib.socks_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor3_img();
	this.instance.setTransform(-60.6,-29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121,59);
p.frameBounds = [rect];


(lib.socks_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor2_img();
	this.instance.setTransform(-60.7,-30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-30.6,122,61);
p.frameBounds = [rect];


(lib.socks_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor1_img();
	this.instance.setTransform(-60.7,-30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-30.6,122,61);
p.frameBounds = [rect];


(lib.socks_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGFEiIgBAAQg3gLgngpIgCgDIgUgaIAAAAQgOgQgKgEIABAAIgjgLIgDgBQgxgVgLgfIAAgBQgCgFgCgNQgIgpgDhyIAAgJQAWAHAdAGIDoBaIBPhjQgKAUgBAJQAAANAEAJIABACIAFAGIAwAwIAUAUIAAAAQAZAXAJAcQARAvgaA/QgDAGgFAFIgIAGQgpAggKAAIg3AHQgZADgTAAQgVAAgOgDgAnTEiIg3gHQgLAAgxgmQgFgFgCgGQgPgjgBgfQgCg4AqgnIABAAIAzgzIAQgRIABAAQAKgKAAgUQgBgLgQgfIAAAAIgGgPIACABIBdB3IDmh7QAegIAWgJQgDAbgBAaQgDB0gHApQgCALgCAFIgBABQgLAfgwAVIgDABIgjALQgKAEgNAQIAAAAQgJALgLAPIgCADQgoApg3ALQgPADgUAAQgUAAgYgDgABckkIAAAAIAAACIAAgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121.3,58.7);
p.frameBounds = [rect];


(lib.socks_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGFEiIgBAAQg3gLgngpIgCgDIgUgaIAAAAQgOgQgKgEIABAAIgjgLIgDgBQgxgVgLgfIAAgBQgCgFgCgNQgGghgDhOIA4AMIAAAAQAlAIAiAUIAAABQAKAGASANIAOAMIAVARQBEA5BEABIACAAQAbAAAXgKIgBAAQALgEAIgHQABgCAtgeQANAQAGATQARAvgaA/QgDAGgFAFIgIAGQgpAggKAAIg3AHQgZADgTAAQgVAAgOgDgAnTEiIg3gHQgLAAgxgmQgFgFgCgGQgPgjgBgfQgCguAdgiQAPAIAjALIAQAGQAXAIAPABQAOAAAQgGQARgIAVgNIAEgDIgBABQA0gqAVgLIABAAIAmgTIABAAIABAAIAngSIAAAAIA1gUIAAgBIALgEQAdgGAVgGQgDBogHAmQgCALgCAFIgBABQgLAfgwAVIgDABIgjALQgKAEgNAQIAAAAQgJALgLAPIgCADQgoApg3ALQgPADgUAAQgUAAgYgDgABckkIAAAAIAAACIAAgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121.3,58.7);
p.frameBounds = [rect];


(lib.socks_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("Al0D8IgBgDIAAgBIgGgRIgBgEIgBAAQgPgegdgeIAAABIgIgHIAAgBIAAAAQgigggggIIAAAAIgPgDIg2gJIgGgBQAGgJAJgHIAAgBIAQgQIABgBIAjgiIAQgQIAAgBQAKgMAAgSQgBgKgPgfIgBgBQgIgQgEgXQgdhXg/h5IAHgCQAJgCAIAGIA4ATIgBAAIATAFIAFACIAAAAIAiAKIAAAAQBmAdAnABQAVAAAYgEQAagEAcgJIABAAIAJgDIABAAQAjgMAegNQAdgNAcgFIAGgBQgDAegDALQgkB2gCBmQgDB1gHAoQgCAMgDAFIAAABQgLAegwAWIgEABIgiAKQgKAFgNAPIgBABQgJAKgKAPIgDADQgfAggoAOIgNgxgAErD/IgCgDIgUgZIAAgBQgNgPgKgFIAAAAIgjgKIgDgBQgwgWgLgeIAAgBQgDgGgCgMQgHgqgDhyQgDhigghyQgEgKgFgVIABAAQADgHgIgFQgJgEAVAEQAVADAUAFIATAFIAkAOIABAAIAnAQIgBAAQAjANAfAGQAbAGAZAAQAsAAAlgJIgBAAIAhgLIABAAQAPgHAlgUIAFgCIAxgcQAJgGAKADIAFACQgnBQgqCAQgFAXgIAQIAAABQgQAfgBAKQAAALAFAKIAAABIAGAIIAwAxIAUATIAAABQARAQAKATIg2ANIgNACQgbAFgaAPIgSALIAAAAIgMAJIgBABQgTAPgNARIgEAFQgNARgHATIAAgBIgRAlIgEAKQgogOgfgggABhkTIABAAIAAACIgBgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-30.1,120.8,60.3);
p.frameBounds = [rect];


(lib.socks_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGFEiIgBAAQg3gLgngpIgCgDIgUgaIAAAAQgOgQgKgEIABAAIgjgLIgDgBQgxgVgLgfIAAgBQgCgFgCgNQgIgpgDhyIgCgnQgIgmAAgLQgBgMAGAhIgDgaQAXAOAfAQIAvArIAxg0QAFgGAHgCQAIgBAHADQAHACAFAHIAjA1IAuhAQAGgIAKgCQAFgBAEABQAEgBAFABQAKABAGAJIA1BAIgMAeIgCAKQAAANAEAJIABACIAFAGIAwAwIAUAUIAAAAQAZAXAJAcQARAvgaA/QgDAGgFAFIgIAGQgpAggKAAIg3AHQgZADgTAAQgVAAgOgDgAnTEiIg3gHQgLAAgxgmQgFgFgCgGQgPgjgBgfQgCg4AqgnIABAAIAzgzIAQgRIABAAQAKgKAAgUQgBgIgJgTIgBgCQgEgFgBgGIgBgCIAAAAQgEgIgDgJIBQg1QAHgFAJAAQAJABAHAFIAlAgIAxgwQAFgFAHgCQAHgBAGACQAHACAFAGIAsA1IAsg5QAEgGAzA4QgDAcgBAbQgDB0gHApQgCALgCAFIgBABQgLAfgwAVIgDABIgjALQgKAEgNAQIAAAAQgJALgLAPIgCADQgoApg3ALQgPADgUAAQgUAAgYgDgAmNhFIgSgQIgBABQAJAJAKAGgAH2hAIAAABIgCAEgABckkIAAAAIAAACIAAgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121.3,58.7);
p.frameBounds = [rect];


(lib.socks_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGFEiIgBAAQg3gLgngpIgCgDIgUgaIAAAAQgOgQgKgEIABAAIgjgLIgDgBQgxgVgLgfIAAgBQgCgFgCgNQgIgpgDhyQgBgjgEglQAWAGAdAEIAKADQAdAIAqAJIAAAAQA/ANAXgBQAGAAAFADIACAAQAGADAEAGIABADQACAFAAAFIAAAXIAEAAIANgBIACgIIAAAAIAEgQIAAgDQAAgKAHgHQAHgIALAAQAFAAANgDIAEgBIABAAIAOgEIA1ABQgEANgFALIAAAAQgQAfgBALQAAANAEAJIABACIAFAGIAwAwIAUAUIAAAAQAZAXAJAcQARAvgaA/QgDAGgFAFIgIAGQgpAggKAAIg3AHQgZADgTAAQgVAAgOgDgAnTEiIg3gHQgLAAgxgmQgFgFgCgGQgPgjgBgfQgCg4AqgnIABAAIAzgzIAQgRIABAAQAKgKAAgUQgBgLgQgfIAAAAQgIgRgFgWIgCgHIAJAAQAqgEAAABIAHgBIAMgBIAFgBIAcAAQAJAAAIAHQAHAGABAKIABALIACAUIACAPQABgGAPAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIACgKQADgVADgNQACgJAHgFQAHgFAIAAIANAAIBIAFIAYgBIAAABIAlgHIgBAAIAIgBQAegDAVgEQgGAqgBAoQgDB0gHApQgCALgCAFIgBABQgLAfgwAVIgDABIgjALQgKAEgNAQIAAAAQgJALgLAPIgCADQgoApg3ALQgPADgUAAQgUAAgYgDgABckkIAAAAIAAACIAAgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121.3,58.7);
p.frameBounds = [rect];


(lib.socks_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGFEiIgBAAQg3gLgngpIgCgDIgUgaIAAAAQgOgQgKgEIABAAIgjgLIgDgBQgxgVgLgfIAAgBQgCgFgCgNQgIgpgDhyIgCgwIgCgMIA9AUIAAAAIAvAKQAzAKAvAAQBBAAAhgMIApgSQAjgPgCAEIAIAAQgJAggFALIAAAAQgQAfgBALQAAANAEAJIABACIAFAGIAwAwIAUAUIAAAAQAZAXAJAcQARAvgaA/QgDAGgFAFIgIAGQgpAggKAAIg3AHQgZADgTAAQgVAAgOgDgAnTEiIg3gHQgLAAgxgmQgFgFgCgGQgPgjgBgfQgCg4AqgnIABAAIAzgzIAQgRIABAAQAKgKAAgUQgBgIgIgSQgFgFgCgHIgBgDIAAgBIAAAAQgIgRgFgWIAAgCQA7AVABACQAMAHANAFQAMAFAOADIAAABQAbAFAnAAQAsAAAbgFQATgEA2gRIANgGQAKgEAUgEQATgFAAANIgDAqQgDB0gHApQgCALgCAFIgBABQgLAfgwAVIgDABIgjALQgKAEgNAQIAAAAQgJALgLAPIgCADQgoApg3ALQgPADgUAAQgUAAgYgDgABckkIAAAAIAAACIAAgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-29.3,121.3,58.7);
p.frameBounds = [rect];


(lib.socks_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGGEuIAAAAQg3gLgogpIgCgDIgUgZIAAgBQgNgPgKgFIAAAAIgjgKIgDgBQgwgWgLgeIAAgBQgDgGgCgMQgHgqgDhyQgDhigghyQgEgKgFgVIABAAQADgHgIgFQgJgEAVAEQAVADAUAFIATAFIAkAOIABAAIAnAQIgBAAQAjANAfAGQAbAGAZAAQAsAAAlgJIgBAAIAhgLIABAAQAPgHAlgUIAFgCIAxgcQAJgGAKADIAFACQgnBQgqCAQgFAXgIAQIAAABQgQAfgBAKQAAANAFAIIAAABIAGAIIAwAxIAUATIAAABQAYAWAKAcQAQAwgZA/QgDAGgFAEIgIAHQgqAfgJABIg4AHQgYADgTAAQgVAAgPgEgAnREvIg4gHQgKgBgxgmQgFgEgDgGQgOgkgBgeQgCg4AqgnIAAgBIA0gzIAQgQIAAgBQAKgMAAgSQgBgKgPgfIgBgBQgIgQgEgXQgdhXg/h5IAHgCQAJgCAIAGIA4ATIgBAAIATAFIAFACIAAAAIAiAKIAAAAQBmAdAnABQAVAAAYgEQAagEAcgJIABAAIAJgDIABAAQAjgMAegNQAdgNAcgFIAGgBQgDAegDALQgkB2gCBmQgDB1gHAoQgCAMgDAFIAAABQgLAegwAWIgEABIgiAKQgKAFgNAPIgBABQgJAKgKAPIgDADQgnApg3ALQgPAEgVAAQgTAAgYgDgABdkYIABAAIAAACIgBgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-30.6,121.6,61.2);
p.frameBounds = [rect];


(lib.socks_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGGEuIAAAAQg3gLgogpIgCgDIgUgZIAAgBQgNgPgKgFIAAAAIgjgKIgDgBQgwgWgLgeIAAgBQgLgYgEiWQgDhigghyQgEgKgFgVIABAAQADgHgIgFQgJgEAVAEQAVADAUAFIATAFIAkAOIABAAIAnAQIgBAAQBCAYA0ABQAsAAAlgJIgBAAIAhgLIABAAQAPgHAlgUIA2geQAJgGAKADIAFACQgnBQgqCAQgFAXgIAQIAAABQgQAfgBAKQAAANAFAIQACAFAEAEIBEBEIAAABQBBA8goBlQgDAGgFAEIgIAHQgqAfgJABIg4AHQgYADgTAAQgVAAgPgEgAnREvIg4gHQgKgBgxgmQgFgEgDgGQgphlBCg8IAAgBIA0gzIAQgRQAKgMAAgSQgBgKgPgfIgBgBQgIgQgEgXQgdhXg/h5IAHgCQAJgCAIAGIA4ATIgBAAIAYAHIAAAAIAiAKIAAAAQBmAdAnABQAtAAA2gRIABAAIAJgDIABAAQAjgMAegNQAdgNAcgFIAGgBQgDAegDALQgkB2gCBmQgECWgLAYIAAABQgLAegwAWIgEABIgiAKQgKAFgNAPIgBABQgJAKgKAPIgDADQgnApg3ALQgPAEgVAAQgTAAgYgDgABdkYIABAAIAAACIgBgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-30.6,121.6,61.2);
p.frameBounds = [rect];


(lib.shoes_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_12_img();
	this.instance.setTransform(-68.3,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-26.4,137,53);
p.frameBounds = [rect];


(lib.shoes_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_11_img();
	this.instance.setTransform(-68.3,-18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-18.3,137,37);
p.frameBounds = [rect];


(lib.shoes_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_10_img();
	this.instance.setTransform(-68.3,-18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-18.3,137,37);
p.frameBounds = [rect];


(lib.shoes_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_9_img();
	this.instance.setTransform(-63.6,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127,44);
p.frameBounds = [rect];


(lib.shoes_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_8_img();
	this.instance.setTransform(-63.6,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127,44);
p.frameBounds = [rect];


(lib.shoes_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_7_img();
	this.instance.setTransform(-63.6,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127,44);
p.frameBounds = [rect];


(lib.shoes_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_6_img();
	this.instance.setTransform(-63.6,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127,44);
p.frameBounds = [rect];


(lib.shoes_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_5_img();
	this.instance.setTransform(-63.6,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-19,127,38);
p.frameBounds = [rect];


(lib.shoes_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_4_img();
	this.instance.setTransform(-67.7,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-23.9,135,48);
p.frameBounds = [rect];


(lib.shoes_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_3_img();
	this.instance.setTransform(-63.6,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127,44);
p.frameBounds = [rect];


(lib.shoes_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_2_img();
	this.instance.setTransform(-63.6,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22,127,44);
p.frameBounds = [rect];


(lib.shoes_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor_1_img();
	this.instance.setTransform(-63.6,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127,44);
p.frameBounds = [rect];


(lib.shoes_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AG4EHQhWAAg/g+IgBAAIgUgUIgSBFQgCAGgFADQgGADgGgCIgygMQgEgBgCgDQgDgDgBgEIggiFQgIgLgJgTQgPggABgPQAAgSAJgkQAJgfAAgMIAAgfIAyAJIAIADQA8ATBVBCIAAAAQBGAzAxABQAXAAAdgLIARgIIAYgQQALgHgBgaQAYAOASAYQAqA5AmAmQAFAFACAGQACAGgCAHQgHAhgiAZIAAABQgOAJgpAVIAAAAQgTAJg9APIAAAAQg2ANgLAAIgBAAgAn5D6IAAAAQg9gPgTgJIAAAAQgpgVgOgJIAAgBQgigZgHghQgCgHACgGQACgGAFgFQAmgmAqg5QASgYAYgOQgBAaALAHIAYAQIARAIQAdALAXAAQAxgBBGgzIAAAAQBVhCA8gTIAIgDIAygJIAAAfQAAAMAJAfQAJAkAAASQABAPgPAgQgJATgIALIggCFQgBAEgDADQgDADgDABIgzAMQgFACgGgDQgFgDgCgGIgShFIgUAUIgBAAQg/A+hXAAIAAAAQgLAAg2gNgABvh/QgGgDgEgFQgEgGAAgHIgIhXQgBgJAFgHQAGgIAIgCQAJgDAIAEQDCBRDCghQAJgBAIAEQAHAEAEAIQADAHgCAJIgWBaQgCAHgFAFQgGAFgHABQg2ALg3AAQiJAAiOhBgAoAhJQgHgBgFgFQgGgFgBgHIgXhaQgCgJADgHQAEgIAIgEQAHgEAIABQDDAhDChRQAIgEAJADQAJACAEAIQAFAHAAAJIgHBXQgBAHgEAGQgEAFgGADQiOBBiJAAQg3AAg2gLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-26.4,136.7,52.8);
p.frameBounds = [rect];


(lib.shoes_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AG4C2QhWAAg/g+IgBAAIgUgUIgSBFQgCAGgFADQgGADgGgCIgygMQgEgBgCgDQgDgDgBgEIggiFQgIgLgJgRQgPggABgPQAAgSAJgmQAJgfAAgMIAAgfIAyAJIAIADQA8ATBVBCIAAAAIAbATIAEgFIgBAAQANgPAcAAQALAAAUAGIAOADQAGgMAOgJIAAAAQATgNASAAQAEAAADABQANgdALgNIABAAQAVgbAcABQAkgCAVA2QAOAkAAAnQAAAagVAPQAVAWATAUQAFAFACAGQACAGgCAHQgHAhgiAZIAAABQgOAJgpAVIAAAAQgTAJg9APIAAAAQg2AOgLAAIgBgBgAn5CpIAAAAQg9gPgTgJIAAAAQgpgVgOgJIAAgBQgigZgHghQgCgHACgGQACgGAFgFIANgOQgUgPAAgYQAAgnAOgkQAUg2AkACQAcgBAWAbIABAAQAKANANAdQAEgBADAAQASAAATANIAAAAQAPAJAFAMIAOgDQAVgGALAAQAWAAAMAKQAdgOAigZIAAAAQBVhCA8gTIAIgDIAygJIAAAfQAAAMAJAfQAJAmAAASQABAPgPAgQgJARgIALIggCFQgBAEgDADQgDADgDABIgzAMQgFACgGgDQgFgDgCgGIgShFIgUAUIgBAAQg/A+hXAAIAAABQgLAAg2gOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-18.3,136.7,36.6);
p.frameBounds = [rect];


(lib.shoes_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AG4C2QhWAAg/g+IgBAAIgUgUIgSBFQgCAGgFADQgGADgGgCIgygMQgEgBgCgDQgDgDgBgEIggiFQgIgLgJgRQgPggABgPQAAgSAJgmQAJgfAAgMIAAgfIAyAJIAIADQA8ATBVBCIAAAAQBGA1AxABQAXAAAdgLIARgIIAYgQQALgHgBgcQAYAOASAaQAqA5AmAkQAFAFACAGQACAGgCAHQgHAhgiAZIAAABQgOAJgpAVIAAAAQgTAJg9APIAAAAQg2AOgLAAIgBgBgAn5CpIAAAAQg9gPgTgJIAAAAQgpgVgOgJIAAgBQgigZgHghQgCgHACgGQACgGAFgFQAmgkAqg5QASgaAYgOQgBAcALAHIAYAQIARAIQAdALAXAAQAxgBBGg1IAAAAQBVhCA8gTIAIgDIAygJIAAAfQAAAMAJAfQAJAmAAASQABAPgPAgQgJARgIALIggCFQgBAEgDADQgDADgDABIgzAMQgFACgGgDQgFgDgCgGIgShFIgUAUIgBAAQg/A+hXAAIAAABQgLAAg2gOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-18.3,136.7,36.6);
p.frameBounds = [rect];


(lib.shoes_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AHhDdIgBAAIgdgBQgggBgWgCIgQgEQgcgHgogTQgzgZgpgoQglglg5gbQgFgCgDgFQgDgFAAgGIAAhGIAAgBIAAipQAAgHAEgFQAEgGAGgBQAGgCAHACQAxASAyAJQBxASBxghIAEgBIAggLQAIgDAHAEIACABQAHABAEAFQAGAFAAAJQAAAIgCARIABAeIAAABIADAAIADABQBdAnAABwQAAATgGAfQgDASgEANIAABHQAAAFgDAFQgDAFgEADQgcAOgZAKQgrAQgjAAIgBAAgAngDdIgBAAQgjAAgrgQQgZgKgcgOQgEgDgDgFQgDgFAAgFIAAhHQgEgNgDgSQgGgfAAgTQAAhwBdgnIADgBIADAAIAAgBIABgeQgCgRAAgIQAAgJAGgFQAEgFAHgBIACgBQAHgEAIADIAgALIAEABQBxAhBxgSQAygJAxgSQAHgCAGACQAGABAEAGQAEAFAAAHIAACpIAAABIAABGQAAAGgDAFQgDAFgFACQg5AbglAlQgpAogzAZQgoATgcAHIgQAEQgWACggABIgdABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AHhDdIgBAAIgdgBQgggBgWgCIgQgEQgcgHgogTQgzgZgpgoQglglg5gbQgFgCgDgFQgDgFAAgGIAAhGIAAgBIAAipQAAgHAEgFQAEgGAGgBQAGgCAHACQAxASAyAJQBxASBxghIAEgBIAggLQAIgDAHAEIACABQAHABAEAFQAGAFAAAJQAAAIgCARIABAeIAAABIADAAIADABQBdAnAABwQAAATgGAfQgDASgEANIAABHQAAAFgDAFQgDAFgEADQgcAOgZAKQgrAQgjAAIgBAAgAngDdIgBAAQgjAAgrgQQgZgKgcgOQgEgDgDgFQgDgFAAgFIAAhHQgEgNgDgSQgGgfAAgTQAAhwBdgnIADgBIADAAIAAgBIABgeQgCgRAAgIQAAgJAGgFQAEgFAHgBIACgBQAHgEAIADIAgALIAEABQBxAhBxgSQAygJAxgSQAHgCAGACQAGABAEAGQAEAFAAAHIAACpIAAABIAABGQAAAGgDAFQgDAFgFACQg5AbglAlQgpAogzAZQgoATgcAHIgQAEQgWACggABIgdABIgBAAgAoPhmIAAgBIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AHhDdIgBAAIgdgBQgggBgWgCIgQgEQgcgHgogTQgzgZgpgoQglglg5gbQgFgCgDgFQgDgFAAgGIAAhGIAAgBIAAipQAAgHAEgFQAEgGAGgBQAGgCAHACQAxASAyAJQBxASBxghIAEgBIAggLQAIgDAHAEIACABQAHABAEAFQAGAFAAAJQAAAIgCARIABAeIAAABIADAAIADABQBdAnAABwQAAATgGAfQgDASgEANIAABHQAAAFgDAFQgDAFgEADQgcAOgZAKQgrAQgjAAIgBAAgAngDdIgBAAQgjAAgrgQQgZgKgcgOQgEgDgDgFQgDgFAAgFIAAhHQgEgNgDgSQgGgfAAgTQAAhwBdgnIADgBIADAAIAAgBIABgeQgCgRAAgIQAAgJAGgFQAEgFAHgBIACgBQAHgEAIADIAgALIAEABQBxAhBxgSQAygJAxgSQAHgCAGACQAGABAEAGQAEAFAAAHIAACpIAAABIAABGQAAAGgDAFQgDAFgFACQg5AbglAlQgpAogzAZQgoATgcAHIgQAEQgWACggABIgdABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AHhDdIgBAAIgdgBQgggBgWgCIgQgEQgcgHgogTQgzgZgpgoQglglg5gbQgFgCgDgFQgDgFAAgGIAAhGIAAgBIAAipQAAgHAEgFQAEgGAGgBQAGgCAHACQAxASAyAJQBxASBxghIAEgBIAggLQAIgDAHAEIACABQAHABAEAFQAGAFAAAJQAAAIgCARIABAeIAAABIADAAIADABQBdAnAABwQAAATgGAfQgDASgEANIAABHQAAAFgDAFQgDAFgEADQgcAOgZAKQgrAQgjAAIgBAAgAngDdIgBAAQgjAAgrgQQgZgKgcgOQgEgDgDgFQgDgFAAgFIAAhHQgEgNgDgSQgGgfAAgTQAAhwBdgnIADgBIADAAIAAgBIABgeQgCgRAAgIQAAgJAGgFQAEgFAHgBIACgBQAHgEAIADIAgALIAEABQBxAhBxgSQAygJAxgSQAHgCAGACQAGABAEAGQAEAFAAAHIAACpIAAABIAABGQAAAGgDAFQgDAFgFACQg5AbglAlQgpAogzAZQgoATgcAHIgQAEQgWACggABIgdABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AHhC+IgBAAIgdAAQgggBgWgDIgQgDQgcgHgogTQgzgagpgoQglgkg5gbQgFgDgDgEQgDgFAAgGIAAhGIAAgCIAAggQAQAIAYAJQAhAJAlAkIAAAAIAcAbQAJgzA9g3IgBAAQBLhFBPABIAXABIAlAEIAAABQADABADACIAAAAQBdAmAAByQAAASgGAeQgDASgEAOIAABGQAAAGgDAFQgDAEgEADQgcAPgZAJQgrAQgjAAIgBAAgAngC+IgBAAQgjAAgrgQQgZgJgcgPQgEgDgDgEQgDgFAAgGIAAhGQgEgOgDgSQgGgeAAgSQAAhvBZgoQABgFBPgNQBaASA5AtIAAAAQA9AuANBCIAUgUIAAAAQAlgkAhgJQAXgEARgEIAAAXIAAACIAABGQAAAGgDAFQgDAEgFADQg5AbglAkQgpAogzAaQgoATgcAHIgQADQgWADggABIgdAAIgBAAgAnfi9IAFAAIAEABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-19,127.3,38.2);
p.frameBounds = [rect];


(lib.shoes_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AGyDuQhWAAg/g+IgBAAIgUgUIgSBFQgCAGgFADQgGADgGgCIgygMQgEgBgDgDQgCgDgBgEIggiFQgIgLgJgTQgPggABgPQAAgQAJgmQAIgfABgMIAAh1QAAgKAGgHQAHgHAJgBQAKgBAIAGQAXAQBKAIQA7AGBDAAQAlAAAggFIAAAAQArgGAfgCQAIAAAHAFQAHAEADAIQADAIgDAIIgbBQQAdAxAiAwQAqA3AmAmQAFAFACAGQACAGgCAHQgHAhgiAZIAAABQgOAJgpAVIAAAAQgTAJg9APIAAAAQg3ANgKAAIgBAAgAnzDhIAAAAQg9gPgTgJIAAAAQgpgVgOgJIAAgBQgigZgHghQgCgHACgGQACgGAFgFQAmgmAqg3QAigwAdgxIgbhQQgDgIADgIQADgIAHgEQAHgFAIAAQAfACArAGIAAAAQAgAFAlAAQBDAAA7gGQBKgIAXgQQAIgGAKABQAJABAHAHQAGAHAAAKIAAB1QABAMAIAfQAJAmAAAQQABAPgPAgQgJATgIALIggCFQgBAEgCADQgDADgEABIgyAMQgGACgGgDQgFgDgCgGIgShFIgUAUIgBAAQg/A+hWAAIgBAAQgKAAg3gNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-23.9,135.5,47.8);
p.frameBounds = [rect];


(lib.shoes_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AHhDdIgBAAIgdgBQgggBgWgCIgQgEQgcgHgogTQgzgZgpgoQglglg5gbQgFgCgDgFQgDgFAAgGIAAhGIAAgBIAAipQAAgHAEgFQAEgGAGgBQAGgCAHACQAxASAyAJQBxASBxghIAEgBIAggLQAIgDAHAEIACABQAHABAEAFQAGAFAAAJQAAAIgCARIABAeIAAABIADAAIADABQBdAnAABwQAAATgGAfQgDASgEANIAABHQAAAFgDAFQgDAFgEADQgcAOgZAKQgrAQgjAAIgBAAgAngDdIgBAAQgjAAgrgQQgZgKgcgOQgEgDgDgFQgDgFAAgFIAAhHQgEgNgDgSQgGgfAAgTQAAhwBdgnIADgBIADAAIAAgBIABgeQgCgRAAgIQAAgJAGgFQAEgFAHgBIACgBQAHgEAIADIAgALIAEABQBxAhBxgSQAygJAxgSQAHgCAGACQAGABAEAGQAEAFAAAHIAACpIAAABIAABGQAAAGgDAFQgDAFgFACQg5AbglAlQgpAogzAZQgoATgcAHIgQAEQgWACggABIgdABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AHhDcIgBAAIgdgBQgggBgWgCIgQgDQgcgIgogSQgzgagpgoQglglg5gbQgFgCgDgEQgDgGAAgGIAAhGIAAgBIAAhjIABg3QAAgBAQgOQAfAyAKAJIgBAAQAjAjAxAYQBDAiBHgBQA4AAAbgYQAWgKATgqIAGgNIADgDIAKAAIACAAIADABQBdAnAABwQAAATgGAfQgDASgEANIAABHQAAAGgDAEQgDAFgEADQgcAPgZAJQgrAQgjAAIgBAAgAngDcIgBAAQgjAAgrgQQgZgJgcgPQgEgDgDgFQgDgEAAgGIAAhHQgEgNgDgSQgGgfAAgTQAAhYA6grIADgEIAEgDQAxAwAZAMQAhASAfAAQAkAAAvgQQAngOAigSQAegSAkgfIBUhIQAEABADAFQAEAGAAAGIAACpIAAABIAABGQAAAGgDAGQgDAEgFACQg5AbglAlQgpAogzAaQgoASgcAIIgQADQgWACggABIgdABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22,127.3,44.1);
p.frameBounds = [rect];


(lib.shoes_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AHhDdIgBAAIgdgBQgggBgWgCIgQgEQgcgHgogTQgzgZgpgoQglglg5gbQgFgCgDgFQgDgFAAgGIAAhGIAAgBIAAipQAAgHAEgFQAEgGAGgBQAGgCAHACQAxASAyAJQBxASBxghIAEgBIAggLQAIgDAHAEIACABQAHABAEAFQAGAFAAAJQAAAIgCARIABAeIAAABIADAAIADABQBdAnAABwQAAATgGAfQgDASgEANIAABHQAAAFgDAFQgDAFgEADQgcAOgZAKQgrAQgjAAIgBAAgAngDdIgBAAQgjAAgrgQQgZgKgcgOQgEgDgDgFQgDgFAAgFIAAhHQgEgNgDgSQgGgfAAgTQAAhwBdgnIADgBIADAAIAAgBIABgeQgCgRAAgIQAAgJAGgFQAEgFAHgBIACgBQAHgEAIADIAgALIAEABQBxAhBxgSQAygJAxgSQAHgCAGACQAGABAEAGQAEAFAAAHIAACpIAAABIAABGQAAAGgDAFQgDAFgFACQg5AbglAlQgpAogzAZQgoATgcAHIgQAEQgWACggABIgdABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.scar8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scar8_img();
	this.instance.setTransform(-138.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-20,277,40);
p.frameBounds = [rect];


(lib.scar7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scar7_img();
	this.instance.setTransform(-134.2,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.2,-62,267,104);
p.frameBounds = [rect];


(lib.scar6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scar6_img();
	this.instance.setTransform(-128,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-47.5,256,95);
p.frameBounds = [rect];


(lib.scar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scar5_img();
	this.instance.setTransform(-145.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.5,-94,291,188);
p.frameBounds = [rect];


(lib.scar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scar4_img();
	this.instance.setTransform(-24.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-36.5,49,74);
p.frameBounds = [rect];


(lib.scar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scar3_img();
	this.instance.setTransform(-97.5,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-104,195,208);
p.frameBounds = [rect];


(lib.scar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scar2_img();
	this.instance.setTransform(-67.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-18.5,135,37);
p.frameBounds = [rect];


(lib.scar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.scar1_img();
	this.instance.setTransform(-127,-20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127,-20.7,254,41);
p.frameBounds = [rect];


(lib.podium_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.podium_img();
	this.instance.setTransform(-150,-94,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-94,300,188.6);
p.frameBounds = [rect];


(lib.nav_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.arrow_img();
	this.instance.setTransform(32,-28,0.64,0.64,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjlErQhZAAgBhaIAAmhQABhaBZAAIHLAAQBZAAABBaIAAGhQgBBahZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-30,64,60);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.hill_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hill_img();
	this.instance.setTransform(-600,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-130,1200,260);
p.frameBounds = [rect];


(lib.hero_mouth8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_mouth8_img();
	this.instance.setTransform(-46.2,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-17.6,93,35);
p.frameBounds = [rect];


(lib.hero_mouth7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_mouth7_img();
	this.instance.setTransform(-43.2,-19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.2,-19.3,86,39);
p.frameBounds = [rect];


(lib.hero_mouth6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_mouth6_img();
	this.instance.setTransform(-49.3,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.3,-23.9,99,48);
p.frameBounds = [rect];


(lib.hero_mouth5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_mouth5_img();
	this.instance.setTransform(-55.5,-32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-32.8,111,66);
p.frameBounds = [rect];


(lib.hero_mouth4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_mouth4_img();
	this.instance.setTransform(-88,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-21.5,176,43);
p.frameBounds = [rect];


(lib.hero_mouth3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_mouth3_img();
	this.instance.setTransform(-44.2,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.2,-15.5,89,31);
p.frameBounds = [rect];


(lib.hero_mouth2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero_mouth2_img();
	this.instance.setTransform(-75.8,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.8,-18.4,152,37);
p.frameBounds = [rect];


(lib.hero_mouth1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_mouth1_img();
	this.instance.setTransform(-61,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-8.9,122,18);
p.frameBounds = [rect];


(lib.hero_eyes_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor8_img();
	this.instance.setTransform(-144.1,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.1,-67,288,134);
p.frameBounds = [rect];


(lib.hero_eyes_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor7_img();
	this.instance.setTransform(-84.9,-85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.9,-85.8,168,172);
p.frameBounds = [rect];


(lib.hero_eyes_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes_decor6_img();
	this.instance.setTransform(-140,-82.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-82.9,280,166);
p.frameBounds = [rect];


(lib.hero_eyes_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor5_img();
	this.instance.setTransform(-141.6,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.6,-53.1,283,106);
p.frameBounds = [rect];


(lib.hero_eyes_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.hero_eyes_decor4_img();
	this.instance.setTransform(-144.1,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.1,-67,288,134);
p.frameBounds = [rect];


(lib.hero_eyes_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor3_img();
	this.instance.setTransform(-141.6,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.6,-53.1,283,106);
p.frameBounds = [rect];


(lib.hero_eyes_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor2_img();
	this.instance.setTransform(-140.8,-85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.8,-85.8,282,172);
p.frameBounds = [rect];


(lib.hero_eyes_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor1_img();
	this.instance.setTransform(-144.1,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.1,-67,288,134);
p.frameBounds = [rect];


(lib.hero_eyes_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AqKCIIgHgHIgFgEIgDgEQgKgLgHgLQgUgiAAgsQAAgwAdgoIADgEIAAAAIAMgOIABgBQAtgrA/AAIATABIADABQAxAFAkAlIABAAIAPASIAAAAIABACIAFAGIAAABIACADQAVAjAAApQAAA0gcAmIgLAOIgDACIjSAKIgBgBgAGlBhQgXglAAgtQAAgTAFgTIAAgBQAGgaAQgWIABAAIABgCIABgBQAGgJAIgHIAAAAQAOgPAQgJQAjgVArAAIAUABQAzAGAlAmIAEADIABABIAAABQAUAVAKAZQAKAaAAAdQAAAogWAxIj/AFIgFgMg");
	this.shape.setTransform(-3.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.6,-13.7,140.6,27.5);
p.frameBounds = [rect];


(lib.hero_eyes_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Ag5CAQg5gMgtgnIgDgGIgBABIgBAAIgJgJQhHhFAAhlQA8gPA0AHQARACARAFIDGgCICRgYIgFAbQAABkhEBEIgCgBIgCADQgZAagcAQQg1Adg/ABQgdAAgbgHgAgDgIIADAAIgDgBIAAABgABHglIACgBIgBgBIgBACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.6,-13.5,49.2,27);
p.frameBounds = [rect];


(lib.hero_eyes_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AicCcQhBhAAAhcQAAhbBBhBQBBhBBbAAQBcAABABBQBCBBAABbQAABchCBAQhABChcAAQhbAAhBhCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.2,-22.2,44.5,44.5);
p.frameBounds = [rect];


(lib.hero_eyes_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AEuAhQAAgZAIgUIAEgKQAIgSAPgQIAFgGQAOgOAPgJQAegSAnAAQA5AAAoApIAHAGIALAOIAFAJIAEAHQAOAaAAAhQAAAQgDAPQgEAQgHAPIgDAFIjwAEQgTgfAAgogApBAhQAAgYAIgTQAGgSALgQQAHgJAJgJQAbgbAjgJQAQgFATAAQA5AAApApIABAAQAYAZAKAgQAFARAAAVQAAAigNAbIj1AIQgSgfAAgmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.8,-10.4,115.7,20.9);
p.frameBounds = [rect];


(lib.hero_eyes_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AGvCxQg6gBgughIgVgSQg0gzAAhKQABgXAGgVQAIghAUgcQAHgKAKgKQARgPASgMQApgYAyAAQBKAAAzAzIAHAHQAtAzABBDQAAAygZAoQgLASgQARIgBAAQgzA0hKAAIgBAAgAnACxQg3gGgqgjIgMgLQgRgRgLgSQgXgogBgyQAAg9AmgvIAOgRQA0gzBKAAIAVABQA9AGAsAsIARAVIAHAJQAcArAAA0QAABHgyA0IgCACQg0A0hKAAIgRAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-17.7,122,35.5);
p.frameBounds = [rect];


(lib.hero_eyes_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AEOBhQgpgpAAg4QAAgYAIgVQAKgdAXgWQAogoA5AAQA5AAApAoIAGAHIALAOQAXAhAAAqQAAAPgDAPQgDARgIAPQgKASgQARQgpAog5AAQg5AAgogogAnQBhQgogpAAg4QAAg3AogpQApgoA5AAQA5AAAoAoQApApAAA3QAAA4gpApQgoAog5AAQg5AAgpgog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-13.8,101.2,27.6);
p.frameBounds = [rect];


(lib.hero_eyes_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AirA1QhHhGAAhkICSgCQAAAeARAZQgKAMAAAQQAAASANAOQAOAMATAAQATAAANgMQAHgHADgIIADAAQAqAAAdgeQAdgcAAgtICNgBIAAAGQAABkhIBGQhHBGhkABQhjgBhIhGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.3,-12.4,48.7,24.8);
p.frameBounds = [rect];


(lib.hero_eyes_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AGvCxQg6gBgughIgVgSQg0gzAAhKQABgXAGgVQAIghAUgcQAHgKAKgKQARgPASgMQApgYAyAAQBKAAAzAzIAHAHQAtAzABBDQAAAygZAoQgLASgQARIgBAAQgzA0hKAAIgBAAgAnACxQg3gGgqgjIgMgLQgRgRgLgSQgXgogBgyQAAg9AmgvIAOgRQA0gzBKAAIAVABQA9AGAsAsIARAVIAHAJQAcArAAA0QAABHgyA0IgCACQg0A0hKAAIgRAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-17.7,122,35.5);
p.frameBounds = [rect];


(lib.hero_body_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_body_decor_img();
	this.instance.setTransform(-157.7,-250.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.7,-250.1,316,500);
p.frameBounds = [rect];


(lib.hero_body_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EAGFAnCIgBAAQg3gLgngpIgCgDIgUgaIAAAAQgOgQgJgEIAAAAIgjgLIgDgBQgxgVgKgfIAAgBQgLgYgFiXQgDiDg4idIgBgFIgGABIgBAAIgFABQgbACgWAAIgPAAIAAAAIAAAAIgOAAQgYAAgdgFIgCAAIgBAAIgEgCIgCAIQg4CdgDCDQgFCXgKAYIgBABQgLAfgvAVIgEABIgjALQgJAEgNAQIgBAAQgJALgKAPIgDADQgnApg3ALQgdAGgzgGIg3gHQgKAAgygmQgEgFgDgGQgphkBBg9IABAAIA0gzIAQgRQAKgMAAgUQgBgLgQgfIAAAAQgIgRgEgWQg8i1hdgkIj4hYQhZgggvgbQhDglgug2QghgmgZguIgBBHQgBAHgEAGQADAFAAAGQADANAYASQANAIBEAoQCIBOgEBOQAAA6glAlIAAAAQgbAbglAIIAAAGQgGAsgfAlQgqAzg/gBQgnAChBgvQgngdgTgZQgQAJggAAQhFAAgeg0QgXgmAAhNQAAgmAPhdQAPhYAAgsQAAgbgJg+QgLhFAAgPQgGh0gKiJQgJh2AAgrQAAhzAdh7QAahxAAgaQgChDAgiAQAYhhA5h6QAag2Ahg7IAAxfQg/khBKk/IAAgBQA7jUBwijQFSnvMtgxQALAAAHAHIAAABIABgBQAHgHALAAQHRAcE2CuQGaDmCJHnIABABQBJE/g/EhIAARfQAnBGAdBAQAyBuAWBYQAgCAgCBDQAAAaAaBxQAdB7AABzQAAArgJB2QgKCJgGB0QAAAPgLBFQgJA+AAAbQAAAsAPBYQAKA/ADAmIACAeQAABNgYAmQgdA0hFAAQgfAAgQgJQgUAZgnAdIAAAAQhBAvgngCQg/ABgqgzQgfglgFgtIAAgFQgmgIgagbIAAAAQgmglAAg6QgEhOCIhOQBEgoANgIQAYgSADgNQAAgGADgFQgEgGgBgHIgBhHQgZAughAmQguA2hDAlQgwAbhYAgIj4BYQhdAkg7C1QgFAWgIARIAAAAQgQAfgBALQAAANAFAJQACAFADAFIBFBEIAAAAQBBA9goBkQgEAGgEAFIgIAGQgqAggKAAIg3AHQgYADgUAAQgUAAgPgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.7,-250.1,315.5,500.3);
p.frameBounds = [rect];


(lib.hat12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hat12_img();
	this.instance.setTransform(-159,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159,-92.6,318,185);
p.frameBounds = [rect];


(lib.hat11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat11_img();
	this.instance.setTransform(-188.5,-126.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-188.5,-126.1,377,252);
p.frameBounds = [rect];


(lib.hat10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hat10_img();
	this.instance.setTransform(-208.7,-84.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.7,-84.6,419,171);
p.frameBounds = [rect];


(lib.hat9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat9_img();
	this.instance.setTransform(-148.7,-150.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.7,-150.6,297,301);
p.frameBounds = [rect];


(lib.hat8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat8png();
	this.instance.setTransform(-190.8,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190.8,-113.2,382,227);
p.frameBounds = [rect];


(lib.hat7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat7_img();
	this.instance.setTransform(-185,-104.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-104.4,370,207);
p.frameBounds = [rect];


(lib.hat6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat6_img();
	this.instance.setTransform(-153.6,-57.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153.6,-57.2,307,114);
p.frameBounds = [rect];


(lib.hat5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat5_img();
	this.instance.setTransform(-132.8,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.8,-49.6,266,99);
p.frameBounds = [rect];


(lib.hat4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat4_img();
	this.instance.setTransform(-131.1,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.1,-35,262,70);
p.frameBounds = [rect];


(lib.hat3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat3_img();
	this.instance.setTransform(-71.2,-71.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.2,-71.4,143,143);
p.frameBounds = [rect];


(lib.hat2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat2_img();
	this.instance.setTransform(-135.4,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.4,-22.3,271,45);
p.frameBounds = [rect];


(lib.hat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat1_img();
	this.instance.setTransform(-129.1,-106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.1,-106.8,258,214);
p.frameBounds = [rect];


(lib.hand_accessory4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory4_img();
	this.instance.setTransform(-163.4,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.4,-37.9,327,76);
p.frameBounds = [rect];


(lib.hand_accessory3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory3_img();
	this.instance.setTransform(-163.4,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.4,-37.9,327,76);
p.frameBounds = [rect];


(lib.hand_accessory2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory2_img();
	this.instance.setTransform(-163.4,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.4,-37.9,327,76);
p.frameBounds = [rect];


(lib.hand_accessory1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory1_img();
	this.instance.setTransform(-163.4,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.4,-37.9,327,76);
p.frameBounds = [rect];


(lib.fringle_base_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AhtIVQgagBgXgkQgCgEAAgEQABgzACgxQgJADgJgBQgWgBgSgZIgCAZQgHA8AAACIgCADQgXAagTgDQgVAAgQgeQgCgCAAgDIAChBIgJAAQgUAAgRgeQgBgCAAgDQAEjFAXiZIAokbQABgEADgDQADgDAEAAQAEABADACQAEAEAAAEQAIBXACBuIANhiQABgEAEgDQACgDAEAAQAFABACACQAEAEAAAEQAJBYABBtIAMhpIAulnQABgFAEgEQAEgDAGAAQAFgBAEAFQADADAAAGQAPCDADCtIAUiiQABgFAEgEQAEgDAFAAQAGgBADAFQAEADAAAGQAJBLAFBaQAQjXAcicQAAgGADgDQAEgEAGAAQAFABAFAEQAEAEAAAGIAYGDQADAuABAxQAIifASh6QABgFAEgEQADgDAGAAQAFAAAEAEQAEAEAAAFIAMB+QAJiWAQh1QABgFAFgEQACgDAHAAQAEAAAFAEQAEAEAAAFIAbEiIAAgDQAAgEAEgDQADgDAEAAQAEAAADADQADACABAFIAhDjIgBgWQgDi/ANiIQAAgEAEgEQADgCAEgBQAEAAADADQADADABAEIAoEbQAXCZAEDFQAAADgBACQgRAegUAAQgOACgPgMQADAvAAAyQABADgCADQgRAdgUABQgUADgWgbIgCgDQgBgCgGg8IgDgeQgNALgPAAQgGAAgFgBIgCBiQgBAEgCADQgXAkgZAAQgaACgZgiIgDgEQgBgDgEhMQgBgXAAgmQgaAlgagCQgTABgSgSIgDAuQgHBMgBACQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgYAfgXAAIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.4,-53.3,70.8,106.7);
p.frameBounds = [rect];


(lib.fringle_base_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("A6MdgIgJgDIAAAAQh7gnhzhvQiXiQABidQAAgLAFguIADghIgGAEQgqAXgKgCIgZAAQgKAAgHgHQgIgHAAgKQgFhgBHiJIABgBQAxhTAZgtQgigHgZgkQgigvgOhvQgPgegQgjIgBgDIAAAAIgBgDQgCgGABgGIACgEIADgGIACgCIAEgEQAJgFAKACQAHABAGAGQAJAIAcARIgBAAQAdAQAMABQA0gEBGh3IAAABIA7hrQAjg+AVgVIAFgEQg3gvgjhRQg0h4AAipQAAgVAHgzQAGg2AIgeQACgIAGgFQAHgGAJAAIAKAAQAJAAAHAGQAHAGABAJQAJAuAiAYQAdATAnAAIAMgBQhchcAAh/QAAhHACgRIgBg+QgBgKAGgHQAGgHAKgCQAJgCAIAFQAIAFADAJQATA9AOAQIABABQAWAVAsAAQAlgCAZg1QAcg7AAhRQAAgMgKhpQgKhuAAgNQgBhdBMhlQBah6B9ABIATABIABhRQgBgzAdhQQAghaA2hNQCUjVDaABQBSAABZAWIAAAAQBiAaA9ANIADABIADgDQA2g/A1gtQAzguARgMQAUgSBDAFQAyAEBlAaQBahzAiAFQAHgCAsAaIABAAQAaAPAUAOQALgTASgKQAjgYB2AAQBIAABwAdIABAAQA7AOBmAcQAvAJBZBWQBIBEAkAmQAbgMAXAAQBJgBB8BEIAAABQB3BCByBmQB8BvBIB1QBMB6AJCRIATgBQBjgCBTCGQBJB4AAB7QABBHhaCLQhPB5gCAsQAABPBGABQALAAAMgHIABAAIAQgKQABgIAFgGQAGgHAKgBQAJgCAIAGQAIAFACAJQAJAggRA4IAAAAQgSA8grA2QglAtgvAfQAiAXAmAIQAmAIAmgLIgBAAQAogNA6gnQAHgGAKACQAJABAHAHQAGAHAAAJQAAAIAEAOIAAAAQAGAXAAAPQAABagkBfQgkBehABOQgbAhgdAbQAsAZASA+IAAAAQAIAcAJBjQAFBEARAaQAYAeA6gJIAEgBIAKAAQAIAAAHAFQAGAFADAIQACAIgDAIQgDAHgGAFIgEADIgCABIgxAlIgBABQgMAHgLAFQAmBLBAB5IAAABQA6CAAABuQAAAxgVBBQgNAjgcBHQgDAIgIAEQgHAEgJgBQgJgBgFgHQgGgGgBgIQgJhfhhgXQgqgKhEgCIiCgBQivgChOgwQh2hDg2kzIAAgGQAQkNAIjgIAAgBQAKkOgCjLIAAgBQgEnFg/h3IAAgBQgvhng+hYIgCgCQlXnkslgoIAAAAIAAAAIhCgDIgBAAQiiAFiPAdIgEABQk+BAjdC1QjOCph7EPIgBABQgsBVgPEDIAAACIAAABQgJCRACDJIAAAFQACFXAeHzQAAAJgFAHQhzCniDDLQh5C7gCBLQAAAJADAHQAIATgBAFQAAAIgFAHQgFAHgHACIgIACIgIgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217.5,-189,435.1,378);
p.frameBounds = [rect];


(lib.fringle_base_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AB8BdQANgYAAgeIAAhJQAAgZgKgVIFNiDQBSABAABUIAAD9QAABUhTABgAodB/IAAj9QAAhUBSgBIFJCBQgLAWAAAaIAABJQAAAfAOAYIlMB2QhSgBAAhUgAAWB9IgwAAQgaAAgUgOQgHgFgHgHIgJgKIAAAAQgQgWAAgcIAAhJQAAgXALgSIAAgBIADgEIABgCIABgBIAAAAIABgCIAIgJIAAAAQASgSAZgFIAAAAQAIgBAJAAIAwAAQAkgBAYAZIALANIACADQAMATAAAZIAABJQAAAbgOAVIgLAMIAAABQgJAJgJAFQgTALgWAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-21.2,108.5,42.5);
p.frameBounds = [rect];


(lib.fringe_decor20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor20_img();
	this.instance.setTransform(-39,-40.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-40.7,78,81);
p.frameBounds = [rect];


(lib.fringe_decor19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor19_img();
	this.instance.setTransform(-138.5,-54.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-54.7,277,109);
p.frameBounds = [rect];


(lib.fringe_decor18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor18_img();
	this.instance.setTransform(-31.5,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-73,63,146);
p.frameBounds = [rect];


(lib.fringe_decor17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor17_img();
	this.instance.setTransform(-118,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-47,236,94);
p.frameBounds = [rect];


(lib.fringe_decor16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor16_img();
	this.instance.setTransform(-73.2,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-83.5,147,167);
p.frameBounds = [rect];


(lib.fringe_decor15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor15_img();
	this.instance.setTransform(-225,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-138,450,276);
p.frameBounds = [rect];


(lib.fringe_decor14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor14_img();
	this.instance.setTransform(-192.3,-41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.3,-41.1,385,82);
p.frameBounds = [rect];


(lib.fringe_decor13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor13_img();
	this.instance.setTransform(-51.7,-57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-57.4,103,115);
p.frameBounds = [rect];


(lib.fringe_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor12_img();
	this.instance.setTransform(-174.1,-106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174.1,-106.4,348,213);
p.frameBounds = [rect];


(lib.fringe_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor11_img();
	this.instance.setTransform(-193.5,-136.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193.5,-136.9,387,274);
p.frameBounds = [rect];


(lib.fringe_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor10_img();
	this.instance.setTransform(-207,-149.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-207,-149.4,414,299);
p.frameBounds = [rect];


(lib.fringe_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor9_img();
	this.instance.setTransform(-146,-95.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-95.3,292,191);
p.frameBounds = [rect];


(lib.fringe_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor8_img();
	this.instance.setTransform(-181.8,-161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.8,-161.5,364,323);
p.frameBounds = [rect];


(lib.fringe_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor7_img();
	this.instance.setTransform(-184.1,-124.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.1,-124.4,368,249);
p.frameBounds = [rect];


(lib.fringe_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor6_img();
	this.instance.setTransform(-35.4,-53.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.4,-53.3,71,107);
p.frameBounds = [rect];


(lib.fringe_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor5_img();
	this.instance.setTransform(-142.1,-136.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.1,-136.1,284,272);
p.frameBounds = [rect];


(lib.fringe_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor4_img();
	this.instance.setTransform(-217.5,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217.5,-189,435,378);
p.frameBounds = [rect];


(lib.fringe_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor3_img();
	this.instance.setTransform(-235.9,-78.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235.9,-78.8,472,158);
p.frameBounds = [rect];


(lib.fringe_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor2_img();
	this.instance.setTransform(-82,-72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-72.3,164,145);
p.frameBounds = [rect];


(lib.fringe_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor1_img();
	this.instance.setTransform(-97.1,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.1,-39.2,194,79);
p.frameBounds = [rect];


(lib.fringe_base20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgLGWQgIgDgFgHIk2msQgFgGAAgIQABgIAEgHQAFgGAIgDIB7gmIi4jJQgGgHgBgJQAAgIAFgIQAFgHAJgCQGFhwFhBwQAIADAFAHQAFAHgBAJQAAAJgHAGIjNDWIB4AOQAJABAGAGQAHAHAAAJQABAIgFAIIksG2QgEAHgIADIgGABIgIgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-40.7,78,81.5);
p.frameBounds = [rect];


(lib.fringe_base19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AVBIeIiMhkQgEgDgDgEIkImRQoPhdnGjuQlTDrnpAKIkbGYQgDAEgEACIi0B4QgIAGgKgCQgKgCgGgIQgGgJACgKQB9qKKzjtQHnjoJ+DoIABABQMBFKA4JqQABAKgGAIQgGAIgKABIgEABQgHAAgHgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-54.7,277,109.5);
p.frameBounds = [rect];


(lib.fringe_base18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AAGLZIgBAAIgFgBIgBgCIgBAAIkri0QgJgFgDgKQgCgKAFgJIB7jaIhdiyQgFgJADgJIDwsoIABgFIADgDQADgGAGgCIAEgCQAGgCAHACIABABIACAAIAFADQAFAFACAIIEYNGQACAGgBAGQgBAGgEAFIhsCIICLDNQAGAIgCAKQgCAKgIAGIkWDHIgGADIgFACIgEABIgCAAIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-73,63,146);
p.frameBounds = [rect];


(lib.fringe_base17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("Ax1HVQgJgBgGgHQgHgGAAgJIgPj6QgBgHAEgGQADgHAGgDQAGgEAIAAICTAFIAgkKQABgHAFgGQAFgGAHgCQAHgCAHADIEWBYIB/k1QACgHAHgEQAHgFAHAAQAIAAAGAFIEEC6IDiktQAEgGAIgCQAGgDAHACQAIADAFAGIDwE3IEJjEQAHgFAIAAQAIAAAHAFQAGAFADAIIBNEOIDNhMQAHgDAHACQAGABAGAFQAFAFACAGIBADcIDOAAQALAAAHAIQAHAHAAAKIAAEnQAAAKgGAHQgGAHgJABQgKABgHgFQxJrLyRLkQgGAFgHAAIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-47,236,94);
p.frameBounds = [rect];


(lib.fringe_base16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AIFNCQgIgDgFgHQgjgygLgoQgNgsAAhQQAAhsARiJIAEgbQgzkxjmhrQh/g7h7AAQiiAAiaBiQiaBghMB+IAAABIgCACIgBACIgCACIgDACIgCABIgCABIgBABIgCAAIAAAAIgDABQgHABgHgDIgCgBIAAAAQgFgDgDgFQgCgDgBgEIgBgBIAAgBIAAgBQgBgGAAgFIgJhVIgCgGIAAABQgCgJgBgIQgrhMAohWQhHiPA4iZIgCglQgOgQgQgqIAAAAQgYg5AqhVQAlhRBog4IABAAQEAiBFVCHQA/AKA0AWIAAAAQCqBJCCDMQA+A0A1BHQBSBtAuCFIAAAAQAqB4gDBeQgBAhgMAxIANF1QAAAKgHAHQgGAIgKABQgKAAgIgGIhZhJQg0CaAACDQgBAIgEAHQgFAGgIADIgIABIgHgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-83.5,146.5,167.1);
p.frameBounds = [rect];


(lib.fringe_base15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("Egg8AVkQgKgCgGgIQhEhigMgUQgshQAAhNQAAhVAqgoIAAABQAagbBfgqIAEgEIACgDQgKgkABgYQAAgbAFgQIAAgBQAFgPAIgIIADgDIAjgbQgGgZAAgXQAAg8AbgmQAVggAwgZQgQgmAAgsQAAhJAng4IAAgBQArg+BQgWQgHgeAAgeIAAgBQgBg7AmhGIAAAAQAwhaBNgGIADgBIAPAAIAAgRQAAhRAag2IAAgBIAOgXIAAgBQAphBCYggQCFvMS4hTQAGgBAGADQAGgEAJAAQAHAAAGAEQAGgDAFAAQN0A1E/HmQB6C7AnD8IAIAAQCoAgAqBFIAAAAIAOAXIAAABQAaA2AABRIAAATIAFACQAHgEAIABQBMAHAwBbIgBAAQAmBEgBA7IAAABQAAAegHAeQBQAWArA+IABABQAmA4AABJQAAAsgQAmQAwAZAWAgQAaAmAAA8QAAAXgGAZIAjAbIADADQAIAIAFAPIAAABQAFAQAAAbQABAYgLAkIADADIAEAEQBfAqAaAbIAAgBQAqAoAABVQAABNgsBQQgMAUhEBiQgGAIgKACQgKACgJgGQgVgOg1gWIAAAAQhBgbgagOIgBAAQh0hBABh0QAAgkANghIAAAAQAHgVASgcIACgDIgpgeQhmhNADhBQAAgOAJgWIAAAAQAGgNAKgPIAAAAIAGgKIgbgMQh1g8ADhMQAAggAOghIgBAAQAJgUAKgOQgGgDgEgFQgHACgHgDQgQgGgQgIQhrg5ABhlQAAgRANgiIAAAAIAHgRQgXgFgYgJQgZgKgZgOIAAAAQhog6ABheQAAgRAFgVQgggCgagGIgBAAQgogKgegVIAAAAQhCgvAAhZIABgFQhmgKhmgXQnKhnnRlyIgEgDIgDADQnEFzppC/IABACQAEAMAAAKQAABZhCAvIAAAAQgeATgoAKIAAAAQgbAGggACQAFAVAAARQABBghoA6IAAAAQgZAOgZAKQgYAJgXAFIAGARIABAAQANAiAAARQABBlhrA5QgcAOgcAJQAKAOAIAUIAAAAQAOAhAAAgQADBMh1A8IgaAMIAGAKIAAAAQAJAPAFANIABAAQAJAWAAAOQADBBhmBNIAAAAIgpAeIACADQASAcAHAVQANAhAAAkQABB0h1BBIAAAAQgaAOhBAbIAAAAQg1AWgVAOQgHAEgHAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-138,450,276.2);
p.frameBounds = [rect];


(lib.fringe_base14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AYNGYQgJgEgYgfIAAAAIgGgHIAAAAIgUgiQgdgtgWgbIgBgBQgog6g1gNIAAAAQhLgPhmBDIAAABQgOAIgQgDQgQgDgJgOQgJgNACgOQgNgCgJgKIAAABQgNgLAAgSQAAgPAKgKQgNgCgJgJIAAAAQgMgMgBgPQgBgSANgMIgBABQEzlIGiDoIAFADQBlBUALAMIAAAAIATAUQAEAEAAAFQABAFgDAEQgDAEgEACQgFACgFgBQgZgHgfgNIAAAAQgngRgJgGIAAABQkni8jqB1QDOhGDxDEIAAAAQAIAHAlAvQAUAYAFAMQAGAMgDAGQgCAPgSgBIgEgBQgEgBgDgCIgYgTIAAAAQhOg+gxgWIAAAAIgLgFIgDgBQjMiCisByQBPgfBCARIgBAAQBqAVBFCKQAFAKAJAdIAVBDQAEANgBAGQgBANgIACQgDACgEAAQgEAAgGgDgA4dGZQgIgCgBgNQgBgGAFgNIAUhDQAJgdAFgKQBFiKBqgVIgBAAQBCgRBPAfQishyjMCCIgCABIgLAFIgBAAQgxAWhOA+IAAAAIgYATQgDACgDABIgFABQgSABgCgPQgDgGAGgMQAFgMATgYQAmgvAIgHIAAAAQDxjEDOBGQjqh1knC8IAAgBQgJAGgnARIAAAAQgfANgZAHQgFABgFgCQgEgCgDgEQgDgEABgFQAAgFAEgEIATgUIgBAAQAMgMBmhUIADgDQGjjoEzFIIgBgBQANAMgBASQgBAPgMAMIAAAAQgJAJgNACQAKAKAAAPQAAASgNALIAAgBQgJAKgOACQADAOgJANQgJAOgQADQgQADgOgIIgBgBQhlhDhLAPIAAAAQg1ANgpA6IAAABQgWAbgcAtIgWAiIAAAAIgEAHIgBAAQgYAfgJAEQgGADgEAAQgEAAgDgCgAP3BBQgPgJgDgQQgBgHABgGQgKABgJgEIAAABQgQgGgHgPQgHgOAGgPQCGloEFgZQAGgBAEAEQAFADABAGQABAGgDAFQgDAFgFABQiXAshVCoIg0BiQCbirDygGIADABIAmAJIAAAAQCjAlAOAIIAeARQAFACACAFQACAFgCAFQgBAFgFADQgEADgFAAQhUgHgKgBIAAAAQlng+i1EQIgBABQgJANgQADIgIABQgLAAgKgHgAwTBHQgQgDgKgNIAAgBQi1kQlnA+IAAAAQgKABhTAHQgGAAgEgDQgFgDgBgFQgCgFACgFQACgFAFgCIAegRQAOgICjglIAAAAIAlgJIAFgBQDxAGCbCrIgzhiQhWioiWgsQgGgBgDgFQgDgFABgGQABgGAFgDQAEgEAGABQEFAZCGFoQAGAPgHAOIAAgBQgGAQgRAGIABgBQgKAEgKgBQABAGgBAHQgDAQgPAJQgKAHgLAAIgIgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.3,-41.1,384.6,82.4);
p.frameBounds = [rect];


(lib.fringe_base13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AiLI9QgIgCgFgFQgFgGgCgIQgijlgwh8Qg5iSi1hVQgHgDgEgIIgMgVIAAgBQgSggAFgXQADgcAdgRQAggSAwAAQAKgBAPAGIg8gsIgBAAQg/g6ACg6QgBgcAVgbQAYggAcACQBOgBBIA9QgSgpABgkQAAg2ANgVIAAgBQARggAyAAQBNgGBIDqIAPA3QAKhxAdhEQAvhxBkABQAVgEAcAmQA1gxBEAAQAgAAAXAWQAXAXAAAcQABAygpBAIhOB+IAAAAQg8BzgcCiQAyhjA+g+IAAAAQA+g8A1ABQAcAAAkASQA0AagDAkQAAAhgXARIgCABQgPAKgIAHQgHAHgKAAQiAA5g5CvQgoB8gSDyQAAAIgFAGQgFAGgIADQgHACgIgDQgYgIgZgFIgBAAIgCgBIgBAAQg/gOg6ACIgCAAQhBACg8AYQgEACgFAAIgFgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-57.4,103.5,114.9);
p.frameBounds = [rect];


(lib.fringe_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("A65NnQgCgIACgGQADgIAFgEQAGgFAHgBQA1gHAXgSQAPgPgFgZQgQhAAOggQgUgNgNgPQgcgfgMgeQgDgHABgIQACgHAGgGQAGgFAIgBQASgDASgOIABgBQgUgNgUgTQgpgkgXgjQgFgJACgJQABgJAHgGQAIgHAJABIAiAAQAeAAApgPIgHgGQgdgXhEhKQgHgHAAgKIAAgQQAAgKAHgHQAGgHAKgBQAKgBAHAGIAOAKIABAAQAgAVAcAAQAcAAAPgNQAMgNAAgYQgBgMgSg3QgWhEABgKQAAg3AlgdQARgPA0gVQAlgPAQgPIABAAQAUgVAAglQAAg1gThBQgVhJAAg2QgEifD3hBIABAAICogmQBKgTAUgUIAAABQAcgjArhNQAuhUAdgkIAAAAQBqiKDKAAQB/AABEAcIAAAAQAxASBsBNQAcgdAvgdQBphBBbAAQBeAABTA4IAAgBIBBAvIgBgBQAmAbAfAPQA8AbBsAKQCUAOAdAHIAAAAQCVAhCKBRQDNB5gCCVQABAwg7B2IgBADIABABIABAAIAMAJIADACQBlBGAlAtQAsA1AABCQAAA1gNAuIANgBQB/AABPBvQBABbAABsQAAB5g6AzQgYAWgHAJQgLAVAAAkIAAAEQABAcANASIABABQARATAhAAQAZAAAVgTQAGgGAIgBQAHgBAHAEQAHADAEAIQAEAHgBAHQgqEihSAmQhNAngdAGIgBAAQgYAFg1AAQhXABhGhDQhFhCABhOQAAgOAEgPQg0gOgighQg6g2AAhfQAAhBAghUQAbhJABg1QgBgMgJgQQgJgRgOgGIgGgDQgjAEgkAAQh7AAg8g2QgjgegmhVQgghGgigbIAAAAQg5gqhvAAQgMAAg7AKQhCAIgNAAQguACgvgvQgwgyABg1IADhDQABgbgDgMIgBgBQgLgXhAAAQgQABggARQgvAXgegBQiMABhLiNQgVgpgLgrQgWAsgdAhQhUBhiIAAQgOAAg6gKQg0gKgLAAQgsABgqAaQgkAWgDAVQAAAMAJAuQALA2AAANQAABJgvA0QgyA6hOAAQgkAChFg0QgzglgngBQg1AAgVAjQgQAhAABGQAAAhAOBMQAQBSAABFQAAB7g2BWQgzBShfAmIAIEGQAAAGgDAGQgDAGgFADIgOAKIAAAAQhMAwhnAIIgPABQhpAAg3jBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174.1,-106.4,348.3,212.9);
p.frameBounds = [rect];


(lib.fringe_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AOpOpQg1ikgSj2QgKiPgBkhQgCiqhZi+IABAAQhXi4hjgzIgBAAQgfgQhqgqQhwgsg8geIAAAAQjEheg/h8QhYBLh+AhQhWAXi0AMQizANhXAUQiPAjhnBWQimCMghHLQgLCdADDaIAAAAIAGErIAAAAQAADuheCVQh4C/j2ABQhoAAhXhMIAAAAQhkhWABiAQgBgIAFgRQACgJAHgFQAHgFAIAAQAJAAAHAGQAGAFACAIIAEANIABABQAHAVASARQAjAhA1AAQBfgCAvhxQAmhcAAiEQgBhcgYjFQgZjJAAiCQAAkDBGj+QBQkiCRiwIAAABQAmguBXhLQBrhaB2hMQFMjWEHABQBHAACcAwIAAAAQB8AnAqAaQAGACANAAQDIgmDJAbIAAAAQCDAQB8AwIgBgBQC4BFCRCEQCUCGBRC0QBQCwAqC+QAqC/AUC/IAAAAQAUDGgYDEQgMBggRBfQgNBFAIBEQAPB8BXBVIAAABQAnAlA4ABIAAAAQA+ACAwgoIAAAAQBMg/AEhjQAAgJAGgGQAFgHAJgCQAIgBAIAEQA8AfAVATIAAAAQA0AvABBqQAACSh3BnQh7Bqi8AAIgCAAQmqAAiMmwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193.5,-136.9,387,273.9);
p.frameBounds = [rect];


(lib.fringe_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("A8bV1QhwhiADhGQgBgpAcg3QAWgqABgbQgDgKgTgTIAAABIhBg8IgBAAQhohjAChcQgBisCfhTIACgBIBjgsQAagMAFgIQgCgPgYgdIAAAAIhEhNQhth5ADg/QAAiRBRhLQA7g5BygZIACgBQB0gSArgKQAzgMAEgZQgBgTgQgTIAAgBQgMgOgggcIgBAAQhRhEADg4QAAhGAwggIAAgBQAagSBBgNQA3gMAUgLIAAAAQAagRAAgkQgBgagbhAQghhOABggQAAhGAwgrQAxgvBdAAQAaAABAAQQA4AOAiAAQAyAAAagJIABAAQAggKABgfQgBgagWgrQgcg4ABgeQgChJBRhCQBGg6AuACQApgBBqA7QA/AkAeALQAShVAlgvQA3hJBpAAQBUAABQBCIABAAQARAPAOAOIAPgaQBDhtBzAAQA8AAAdAnIAAABQASAYAKA0IAAAAQAIAxAEALIAAAAQAGAOAPAAQAIgDBQg5IAAAAQBkhHA5ABQBRAAAaAuIAAAAQATAcgDA+QgDA6ACALQAEAPATAAQAWAAAUgMIgBAAIAughIAAAAQBKg3BjAAQA2AAAvAXQBKAkAABMQAAAPgLAnQgJAfAAAKQAAARAIAIQAKAFAWAAQAmAABBgTQBLgVAgAAQBdAABYBMQBaBPgBBVQAAA1gtBDQgiAzgBAYQACAiA0ATIAAAAQANAFCKAhIABAAQBvAbA0AoQBQA8ABBrQAABfhZBNQgrAkgJALIAAAAQgTAWAAAYQAEAHAhAPIAAAAIBxAzIABABQC0BggBCeQgBBpguAyQghAlhFARQhKATgKAFIAAAAQgbAQAAAkQAEgCAfARQBIAoAmAdIAAAAQClB+AADHQAABJguBQIAAAAQgtBNhPBAQizCSjsAAQhUAAhhgoQgHgCgFgHQgEgGAAgIIAAysQjbzKx9BEIgCAAQwEgUjbQuQAGM5gGHvQgBAGgCAFQgDAFgEADIgfAYIgBAAQhHA1hNAcIAAAAQhAAXgoAAIgDAAQhUAAhthhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-207,-149.4,414,298.9);
p.frameBounds = [rect];


(lib.fringe_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AtnOzQgHgGgCgKIgOhjIgaBEQgEAKgJAEQgJAFgKgEQgJgDgFgJIgshZIgoBqQgDAIgHAEQgGAFgIAAQgIAAgGgFQgGgFgDgHIgnhvIg3B7QgEAJgJAEQgJAEgJgEQgJgDgFgJIhHiPIhqCSQgFAHgIACQgIADgIgDQgHgCgFgHQgFgHAAgIQAVuGMRj/QgSgpABgXQgCg5BChXQAtg8AigUQgFghAEgkQAFgwAWgcQAVgkAMgOIABAAQBJhgBMg1IAAAAQBSg6BggZIAGgBQBCABAUARQAcATASAdIAAAAQAHAOAHAPQAXgKAhgIQArgKAbAAQCWAABSBMQBOBIAAB1IAAAFIBZBLIAAAAQB8BtgDBCQACA3hDBPQLbDsCHMiQACAJgEAHQgEAHgHAEQgIAEgIgCQgIgBgGgGIiniwIhTCNQgFAJgJACQgJADgJgEQgIgDgEgJIg3h8IgxCEQgDAJgJAFQgIAEgJgCQgJgCgGgHIg/hUIghBYQgEAIgIAFQgIAEgJgCQgIgCgGgHIhgh4IhcCtIgBABIgDAEIgEAFIgCABIgGADIgEABIgDAAIgBAAIgDAAIgCAAIgFgCIgDgCIgBgBIgEgDIgBgBIgBgBIAAgBIhUhxIggBHQgDAIgIAEQgHAEgIgCQgIgBgGgGIhKhJIguBpQgDAJgJAEQgJAFgJgEQgJgDgFgIIhDh2Ig7B+QgEAIgHAEQgIAEgJgCQgIgBgGgHIhihzIhkCXIgFAGIgCABIAAABIgCABQgGAEgGAAQgGAAgFgCQgFgCgEgEIgBgCIAAAAIhFhYIgFBAQAAAIgFAGQgEAGgIACQgHADgIgCQgHgDgFgGIhEhTIgfAzQgEAHgIADQgHADgHgCQgIgBgFgGIhChBIgsBZQgEAIgJADQgIAEgIgCQgJgDgFgHIg2hNIhjBbQgHAHgKAAQgKgBgIgHQgHgHAAgKQgBk4B6lTIgPAcQhNCYhDDYQg/DGAABJQAAAJgHAIQgHAHgJABIgCAAQgJAAgHgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-95.3,292,190.6);
p.frameBounds = [rect];


(lib.fringe_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AX2ZOQgKgBgGgHQg1g+ABg1QgBg1AygvIABAAQAOgOAcgUQgeAJgOAAQgaAAgUgTIABAAIgKgJIgDgCIgCgBIAAAAIgBAAQg1gcgfgcIAAAAQhEhAAAhUQAAgJADgPQgagWgXg/IAAgBQgYhBAAgmQAAgkAVgsQgEgFgBgGQgKg8APgrIAAABQARg4AdgpIgBgCIgDgIQguhoANhHQALg8AMgcIgEgCQgHgDgEgIIgKgVIAAAAQgUgqgQgxIAAAAQgWhDAAgqQAAgdADgZQg6gogOi4IAAgDQAFhJAtgyQAEgFAGgCQgcjngch4QgoiphEhhQhKhph/gwQiIg0jcAAQiQAAhvAWQhhAUhRAUQgHABgGgCQgHAHgKAAQgJAAgHgHQgGACgHgBQhRgUhhgUQhvgWiQAAQjcAAiIA0Qh/AwhKBpQhEBhgoCpQgcB4gcDnQAGACAFAFQAsAzAFBIIAAADQgOC4g6AoQADAZAAAdQAAAqgWBDIAAAAQgQAxgTAqIgBABIgKAUQgEAIgHADIgEACQAMAcALA8QANBGgtBpIgBABIgBADIgDAGQAdApARA4IAAgBQAPArgKA8QgBAGgEAFQAVAsAAAkQAAAmgYBBIAAABQgXA/gaAWQADAPAAAJQAABUhEBAIAAAAQgfAcg1AcIgBAAIgCABIgDACIgKAJIABAAQgUATgaAAQgOAAgegJQAcAUAOAOIABAAQAyAvgBA1QABA1g1A+QgGAHgKABQgKABgIgFQgHgGgDgJQgKgygZgUQgNgJiDhAIgDgBQgkgXgTgdQgbgnAAg5QAAggAJgTIAAgCQAMgVAZg4QAJg4AxgGQAjgFAcALQgCgWAAgbQAAgkAagiQAPgSAPgIQgmgrAYhhQgngPgdgeIAAAAQhKhKAoigQABgHAFgGQAtg0AJgDQASgJARgFQhLgfghguQgkgwAChHIAAAAQAChBAKgnQAIghAlgtIACgEIADgEIACgCQANgNAbgOIABAAIAVgKIgDgFIAAAAQg4hDAAhvQAAgQAIgqQAHgoAnhKQgIgggEgkQgPiAB5imIAEgMQADgGAEgEIAAgEQAAiLAShNQAiiXA1heIAAAAQA0hgCZhvQCWhuDUhBQDThADYgIQDdgJBhA3QBNAqAnA4QAog4BMgqQBig3DdAJQDYAIDTBAQDUBBCWBuQCZBvA0BgIAAAAQA1BeAjCXIgBAAQASBNAACLIAAAEQAFAEADAHIADAMQB5ClgPCAQgEAkgIAgQAnBKAHAoQAIAqAAAQQAABvg4BDIAAAAIgDAFIAVAKIABAAQAbAOANANIACACIADAFIABAAIACADQAkAtAIAhQAKAnACBBIAAAAQACBHgkAwQghAuhLAfQARAFASAJQAJADAsAyIAAABIABABIACACIABADIADAHQAoChhKBKIAAAAQgdAegoAPQAZBhgmArQAPAIAPASQAaAiAAAkQAAAbgCAWQAcgLAjAFQAxAGAJA4QAZA4ALAVIABACQAJATAAAgQAAA5gbAnQgTAdgkAXIgDABQiDBAgNAJQgZAUgKAyQgDAJgHAGQgHAEgIAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.8,-161.5,363.7,323);
p.frameBounds = [rect];


(lib.fringe_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("A5ETcQhDAAg6gXIAAAAQgrgRg5gmQgGgEgDgIQgDgHACgIQACgHAFgFQAGgGAIgBQDDgbBTjfQBHi+gQkfIgbAPQhXAuhBAAQgkAAg5gUIgCAAIgDgBQgKgDgFgKQgEgJADgKQADgJAJgFIAJgDIABgBQBmgmBjikQAvhOBIiUQBrjeAWgrIAAAAQCrlQCzilQD4joFPAAQBLAABJAWIABAAQA8AVAnAMQAVhAArhBIAAAAQBdiPCNBZIAcAAQBkhICBAAQAhAAApANIAAAAIBVAnQAVgCAUAAQByAABcAuQBgAxAkBQQACAFAAAFIAAAjQAoAJAbAPIAAAAQBNAoAGBgIAKAAQB5AAA/BSIAAAAQAvA7AYB7QANBDATCLIAAgBQAUBtAmAyIAAABQAmAxBVBrIAAAAQBNBiAxBOQA1BUBAEPQACAJgEAIQgEAIgJAEQgIADgJgCQgIgDgFgIQh6i+gWgdQgpg0h5hfIgVgQIAIALQDWE3gBEfQABAXgWBwQgBAJgHAFQgHAGgJAAQgJAAgHgFQgHgFgCgJQhamAihiFQhdhLgshNIAAAAQgrhLgciJIgBgEQg4gdh7hjIiPhzQAgBqAeCMQACAKgFAIQgFAIgJADQgIADgJgDQgJgEgEgIQhjjBhriuQhaiNi+BkIgiATIAAAAQgxAcguAeIgCAAQguAbhGAAQheAAgsgwIgCgCIgCgDQgIgJgFgJIAAAAQgKgOgIgVIgCgFIgIgbIgBgBIgKgqIgCgEIgGgWIAAAAQgGgWgJgTIAAAAQgXgxgngbQhQg3ipAAQmSAAjuESQizDPhnF+IAAAAIgKAoIgEAIIgXAgQgDI8gpClQg3DjiEAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.1,-124.4,368.3,248.9);
p.frameBounds = [rect];


(lib.fringe_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AUvVRQgJgBgHgHQgGgIAAgJQgKsopMmKQqdEXqakYQonD4hfOfQgBAJgGAHQgHAGgKABQgJAAgHgGQgIgGgBgJQhSoFgMhtQgOhwA2i+QA1i8BkiXIAAAAQBBhhA6hDQgTgrgRhNQgch7AAhmQAAmKE2jsQDBiTETg3IAAAAIANgDQBCgNBHgHIAAAAIAHgBIAbgEIAAAAQFgg8DZAvQJKB+C4EcQC5EXimHoQAlAyAnBIIABADQA3CMBdFJQBeFLh4JCQgCAJgIAGQgGAFgJAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.1,-136.1,284.3,272.2);
p.frameBounds = [rect];


(lib.fringe_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("A4iHcIi0i0Qg7g7A5g7IFEiMQAHAWATATIA1A1QAWAVAbAIIiXE+QgdAbgdAAQgeAAgfgegAWsHYIiXk+QAbgIAWgVIA1g1QASgTAIgWIFECMQA5A7g7A7Ii0C0QgfAegeAAQgdAAgdgbgA0ACGIgBABQgbgFgTgTIg1g1QgQgRgGgUIgBgBIAAgFQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBIgBAAIABgBIgBgCQgCgFABgFIAAABQAAgbAOgUQAEgHAGgHIAkgjQAZgZAjAAIARABIADACQAWAEATASIA1A1QASATAFAYIABAPIAAAAQAAANgDAKQgFAVgQAQIgkAkQgTASgXAFQgJACgKgBIgDAAIgJgBgAT1CAQgKABgJgCQgXgFgTgSIgkgkQgQgQgFgVQgDgKAAgNIAAAAIABgOQAFgZASgTIA1g1QATgSAWgEIADgCIARgBQAjAAAZAZIAkAjQAGAHAEAHQAOAUAAAbIAAgBQABAHgCADIgBACIABABIgBAAQABABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgBAFIAAABQgGAUgQARIg1A1QgTATgbAFIgBgBIgJABIgDAAgAx/hAIg1g1QgSgSgVgIICOlIQA7g4A8A7IC0C0QA7A7g5A7IlCCZQgIgagVgVgAMhixQg5g7A7g7IC0i0QA8g7A7A4ICOFIQgVAIgSASIg2A1QgUAVgIAag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178.1,-50.7,356.2,101.4);
p.frameBounds = [rect];


(lib.fringe_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AvDGFQgFgDgBgFQgBgFACgEIACgFIAAgBQBCiRDHhJQCHgzB7AAIANAAQgqgFgxAAQhjAAgwARIgEABQiAAjhKAhQgFACgFgBQgGgBgDgFQgDgEABgFQAAgGADgDQBfhqBaghIAAAAQA7gWB/AAQCFAABXAgIACABQBBAZAkAnQgUgegfgcIAAAAQhvhji8AAQg+AAjkgEIgCAAIgPgBQgFAAgFgEQgEgEgBgFQgBgFADgFQADgFAFgBQBKgbBHgQQBfgXBIAAQDnAACIB/IAUATIAFAKIgBAAQAHANAIAUQAKANAJAOIAFgDIgLgfQgPgRgRgTQg9hwiDhTQh5hPgugJIgBAAQgGgBgEgFQgDgFABgGQABgGAEgEQAFgEAGABQCmATCIBkIABAAQBxBSAjBOIABACQAJAWALAeQALj5C1iLQAEgDAGAAQAFABAEAEQAEAEABAGQAAAFgEAFQg2BBgZCNIgTByQBgi5EBAAQBHAAAxAOQApALA4AeQAEABADAEQAEAEAAAGQAAAGgEAEQgEAFgGAAQgLABg4gHIAAAAQg1gHiRANQiLANhMCGIAAAAQgXArgIA0IgBAKQAhgpA4gqQB1hWCHgLQAVgCAVAAIAAAAQA6gBBYAaQBiAdBkAyIAAAAQARAKAHATIACAGQABAEgBAFQgCAFgEADQgEACgEABIgIgBIgCgBQjVhDiDAEIAAAAIgCAAIgmAEQhqANhaBEIgFAEQAdgFAtAAQCGAACJAqIABAAQDMA+CLCNIAAAAQAKALADANQABAEgBAFQgCAEgEADQgEACgEABQgFAAgEgDQgVgOgngUIAAAAQhxg7icguQicguh4AAQguAAgWAGQgaAPgWADQgUAEgRgLIgBgBQgIgFgFgIQgIAHgMAEIAAAAQgUAEgSgJIAAgBQgMgHgGgLQgIAFgKABIgBABQgTABgPgLQgLgEgGgLIAAAAIAAAAQgUAHgRgJQgMgGgHgLQgIAHgLADIAAAAQgUAGgSgJIAAgBIgEgBQgIAKgPAFQgUAGgSgKIAAABQgSgKgHgUIgCgGIgBAJQgDAUgQAMIgBABQgRAMgUgEIAAAAIgFgBQgHARgQAJIAAAAQgTAKgTgGIgBAAQgNgDgvgGIgBgBQg4gIgZAAQhrAAiQA2QiNA0huBWQgEADgFAAIAAAAQgFAAgEgDgAlDB9IAoAHIAAgBQgOgLgTgIIgCADQgDAEgFACIgGAAIAJAEgAh1A8IACAEIACAAIgBgCIAAAAIgBgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.1,-39.2,194.2,78.5);
p.frameBounds = [rect];


(lib.color_picker_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,320,320);
p.frameBounds = [rect];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.star_img();
	this.instance.setTransform(-16.2,-16.1,0.162,0.162);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.2,-16.1,32.5,32.5);
p.frameBounds = [rect, null];


(lib.bottom_decor20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor20_img();
	this.instance.setTransform(-135.7,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-53.5,272,107);
p.frameBounds = [rect];


(lib.bottom_decor19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor19_img();
	this.instance.setTransform(-136.5,-55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-55.2,273,110);
p.frameBounds = [rect];


(lib.bottom_decor18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor18_img();
	this.instance.setTransform(-135.7,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-53.1,271,106);
p.frameBounds = [rect];


(lib.bottom_decor17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bottom_decor17_img();
	this.instance.setTransform(-136.3,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.3,-53.5,272,107);
p.frameBounds = [rect];


(lib.bottom_decor16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor16_img();
	this.instance.setTransform(-186.1,-70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186.1,-70.8,372,141);
p.frameBounds = [rect];


(lib.bottom_decor15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor15_img();
	this.instance.setTransform(-158.6,-61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.6,-61.7,317,124);
p.frameBounds = [rect];


(lib.bottom_decor14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor14_img();
	this.instance.setTransform(-135.9,-59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.9,-59.9,272,120);
p.frameBounds = [rect];


(lib.bottom_decor13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bottom_decor13_img();
	this.instance.setTransform(-135.9,-52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.9,-52.8,272,106);
p.frameBounds = [rect];


(lib.bottom_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor12_img();
	this.instance.setTransform(-178,-72.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178,-72.6,356,145);
p.frameBounds = [rect];


(lib.bottom_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bottom_decor11_img();
	this.instance.setTransform(-141.9,-59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-59.7,284,120);
p.frameBounds = [rect];


(lib.bottom_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor10_img();
	this.instance.setTransform(-135.7,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-46.2,271,92);
p.frameBounds = [rect];


(lib.bottom_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor9_img();
	this.instance.setTransform(-166.5,-66.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-66.7,333,133);
p.frameBounds = [rect];


(lib.bottom_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor8_img();
	this.instance.setTransform(-166.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-49.5,333,99);
p.frameBounds = [rect];


(lib.bottom_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor7_img();
	this.instance.setTransform(-177.9,-59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.9,-59.6,356,119);
p.frameBounds = [rect];


(lib.bottom_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor6_img();
	this.instance.setTransform(-127.3,-49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.3,-49.2,255,98);
p.frameBounds = [rect];


(lib.bottom_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor5_img();
	this.instance.setTransform(-135.9,-52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.9,-52.8,272,106);
p.frameBounds = [rect];


(lib.bottom_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor4_img();
	this.instance.setTransform(-166.7,-66.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.7,-66.7,333,134);
p.frameBounds = [rect];


(lib.bottom_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor3_img();
	this.instance.setTransform(-135.7,-54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-54.3,271,109);
p.frameBounds = [rect];


(lib.bottom_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor2_img();
	this.instance.setTransform(-139.1,-50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.1,-50.8,278,102);
p.frameBounds = [rect];


(lib.bottom_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor1_img();
	this.instance.setTransform(-141.9,-59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-59.7,284,120);
p.frameBounds = [rect];


(lib.bottom_base20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("ACKIIQgJgBgGgHQgGgHAAgJQAAgggDgZIABAAQgFgugMgUQgagmg4gEIgNAAQg7AAgXAUIAAABQgHAKgPAsQgEAMgDARQgEAYgDAhQgBAIgGAHQgGAGgIABQhZAOhMgDIiCgHQgggCgbgEIAAAAQgagFgWgIQgFgCgEgEQgEgEgCgFQgJgXgNgVQhHhnjHg0QhMgJhZgwQheg1hNhQIAAAAQi+jEAQmZQAAgIAFgGQAFgGAHgDQAHgCAIACIBWAYQKFCrJsAAQJhgBJNikIAAAAIBjgeQAIgCAIADQAIADAFAHQAEAHgBAJQgpFnhcCtQhdC0jxBKIgDAAQjvAuhNBwQgQAZgJAcQgCAGgEAFQgFAFgGABIgwAMIAAAAQhPAPhXAAQhVAAhcgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-53.5,271.6,107.1);
p.frameBounds = [rect];


(lib.bottom_base19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AA8IJQgIgBgGgGQgFgGgCgIIgOhdQgBgIAEgIQADgHAIgDQAHgEAIABIACAAIgFgpIAAgBIgCAAQgpABgogDIgEAAIAAAEIgKAqIANgCQAIgBAHAEQAHADAEAHQAEAIgBAIIgOBdQgCAIgFAGQgGAGgIABQlMA5lAgyQgKgBgGgHQgGgHAAgJIgBhYQj8hyiSh9IgBgBQkokLA1m1QABgIAFgFQAEgGAIgCQAHgCAHACQVbGFT9mFQAHgCAHACQAHACAFAGQAFAFABAIQA2G1koELIgBABQiNB4juBwIAAACIgBBdQAAAJgGAHQgGAHgJABQiVAXiZAAQitAAixgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-55.2,273,110.4);
p.frameBounds = [rect];


(lib.bottom_base18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("ABpHsQgGgCgEgDQgEgEgCgFIgyh/QgCgFAAgFQgEACgFAAQgdAAgfgBQgFgBgFgCQAAAGgCAGIgxBnQgDAGgFADQAAAHgDAGQgFAJgKADQjcA6juhFIgGgCQgFAAgFgCQgKgDgEgKQgfhAhxg2IgBAAIg4gaQitg6gagNQh7g+hsiMQgXgfgSgnIAAAAQhGiagHlDQAAgIAFgHQAEgHAIgCQAHgDAIACQVcGGT9mGQAHgCAIADQAIACAEAHQAFAHAAAIQgFEIgvCXQgbBUgmAwQhsCMh7A+QgaANitA6Ig4AaQhzA3gnBSQgCAEgEAEIgJAFQh4Anh4AAQh4AAh4gng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-53.1,271.5,106.3);
p.frameBounds = [rect];


(lib.bottom_base17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("ACKIIQgJgBgGgHQgGgHAAgJQAAgggDgZIABAAQgFgugMgUQgagmg4gEIgNAAQg7AAgXAUIAAABQgHAKgPAsQgEAMgDARQgEAYgDAhQgBAIgGAHQgGAGgIABQhZAOhMgDIiCgHQg9gDgugQQgFgCgEgEQgEgEgCgFQgJgXgNgVQhHhnjHg0QhMgJhZgwQheg1hNhQIAAAAQi+jEAQmZQAAgIAFgGQAFgGAHgDQAHgCAIACQKxDDKWAAQKVgBJ8jCQAIgCAIADQAIADAFAHQAEAHgBAJQgpFnhcCtQhdC0jxBKIgDAAQjvAuhNBwQgQAZgJAcQgBAGgFAFQgFAFgGABQhlAbhyAAQhUAAhcgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-53.5,271.6,107.1);
p.frameBounds = [rect];


(lib.bottom_base16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("APoJjIABAAQgfgRgwgqQgugpgVgNIgBgBQgigVghgBQgeABgeATIAAAAQgTAMgpAlIAAAAQhdBThLgCQg1ABh7g/Qhsg5gugBQgkAAggASIgBAAQgQAJgtAhQhdBHhmgBQhBACiAhLQhwhCg3gBQg7ABhXAsQhlAzhCgBQhFAAg7ggQgigUg4gxQgzgugdgQIAAAAQgugbg3AAQgtABhUAlQhkAsgNgCQhpABhhhcIAAgBQgVgThUhHQgHgGgBgHQgCgIADgIQADgIAHgEIACgBIABgBQCih5BVjmQBYjyATkWQABgIAFgFQAEgHAIgCQAHgCAHACQEBBID9AuIBPAOQMQCALuiFIB/gZQDIgqDHg8QAHgCAHACQAHACAFAGQAFAFABAIQAoFFAeCdQAdCWBnCIQBoCICqBMQAHADAFAHQAEAHgBAIQgBAIgGAHIgRASIgBAAQh7CAg+AUQg9AXgrhEQgagog1gHQg9gIgeAHIAAAAQgZAHgRAaIgBAAIg0BNIgBABQglA1hCAAQg1AAgzgdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178.7,-64.1,357.5,128.1);
p.frameBounds = [rect];


(lib.bottom_base15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("Ag+JoQgJgEgFgIQhVimggi1QgkCWhJB7QgFAIgJADQgJADgIgEQgJgEgEgIQg0hygdh6QhZDZiWAlIgBAAIgCABQgFABgFgBIgFgCIgCgBIgDgCIgCgCIgBgBQh6hkgmisQgxBqg+BdQgEAHgIADQgIACgIgCQgIgDgFgGQgyhGgEibQgqBYgyBQQgGAJgKADQgKACgJgGQgJgGgCgKQgVhkABhpQgjBNgpBHQgEAGgHAEQgHADgIgBQgHgCgGgFQgFgGgCgHQgzkSApkgIi7HXQgDAIgIAFQgIAEgJgBQgIgCgGgGQgGgHAAgJQgRmqDHmZQAEgIAIgEQAJgDAIACQCdAtCcAiIABAAIABAAIAAAAQBDAPB1AXIALACIAKABQBHANBHALIAAAAIACAAIABAAQBJALBJAIIACAAIABAAQBbALBbAHIABAAIAAAAQBaAHBZAEQCGAECDgCIABAAQEegGEagrIAAAAIADAAQBrgQBsgWIABAAIAAAAIABgBQA7gLA6gOIACAAIADgBQCVgjCUgtQAGgCAGABIACgBQAJgGAKADQAKACAGAJQEWHVgUH8QAAAJgGAHQgGAGgJACQgIABgIgEQgIgFgDgIIi2nQQA3EHAUEJQABAIgFAHQgEAHgHADQgHADgIgBQgIgCgGgGQh9iNhXihQAXDBgwCWQgDAIgHAFQgHAEgIAAQgJAAgGgGQhkhVg1h0IgfDdQgBAHgGAGQgFAGgIACQgHABgIgDQgHgDgEgHQhbiRg7ipQgWD0iCBvIgBAAIgCACIgCABQgGAEgIgBIgEAAIgHgEIgCgBIAAAAIgBgBQiJhqhBiTQgXBmgpBlQgDAIgHAFQgHAEgIgBQgJgBgGgGQh2hsgojJQgkDAhJCuQgEAJgJAEQgFACgFAAQgEAAgFgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.6,-61.7,317.3,123.5);
p.frameBounds = [rect];


(lib.bottom_base14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AA8IvQgHgCgFgHQgFgHAAgIIAAj2IAAgCQgEACgFAAIgUAAIAAAAIgBAAIg/gDIgGgBIAuDmQACAJgEAIQgEAHgIAEQi2BXmhhJQgKgCgGgHQgGgIABgJQAMjKg+geIABAAIhDgbIAAAAIhWglIAAAAQgegOhGgbIgrgRIAAAAQhsgshThCQhHg4g0iZIgBgCIAAgBQgKgdgJggQgWhRgIhbQgIhdAHhnQABgIAEgGQAFgGAHgCQAHgDAIACQC8A2C6AmQHpBmHZABQExABEsgoQC7gaC5gpQCnglClgzQAHgCAHADQAIACAEAGQAFAGABAIQAGBPgEBKQgGBygcBkIgOAxIAAABQg2CkhKA7QhTBChsAsQhoApgnARIAAAAIhOAhIABAAIgKAEIABAAIhDAbIAAAAQg5AcAvDGQADAKgGAIQgFAJgKADQi6AsiaAAQiTAAh3gog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.9,-59.9,271.8,119.8);
p.frameBounds = [rect];


(lib.bottom_base13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("ABpH/QgHgBgFgFQgGgFgCgGIgph+QgBgFAAgFIgJACIgUAAIAAAAIgBAAIg/gDIgHgCIgCAIIg0CJQgCAGgGAFQgFAEgHABQiCARiDgPQhkgMhjgfQgGgCgFgEQgEgFgCgGQgSg+hEgaIABAAIhDgbIAAAAIhWglIAAgBQgegNhGgcIgrgRIAAAAQhsgrhThCQhHg5g0iYIgBgCIAAgBQgKgdgJggQgWhRgIhbQgIheAHhnQABgHAEgGQAFgGAHgDQAHgCAIACQC8A1C6AnQHpBmHZABQExABEsgpQC7gZC5gpQCngmClgyQAHgCAHACQAIADAEAGQAFAGABAHQAGBQgEBJQgGBzgcBkIgOAxIAAAAQg2ClhKA7QhTBChsArQhoAqgnARIAAAAIhOAhIABgBIgKAFIABAAIhDAbIAAAAQhDAagSA+QgCAFgEAFQgEAEgFACQhrAph3AKIgBAAQgkADglAAQhbAAhigRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.9,-52.8,271.8,105.7);
p.frameBounds = [rect];


(lib.bottom_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AiFLVIAAAAIgPAAIAAAAQhZgChXgDQhegEhdgHIAAAAQhdgGhcgIIABAAIgEgBIgDAAIitgSIgDAAQhagLhZgNQhegMhcgPQkCgrkCg8QgJgDgFgHQgGgHABgJIABgSQAksBFcmpQAFgGAHgCQAHgCAHACQVcGFT9mFQAHgCAHACQAGABAFAGQGlHEA0L1IAAACIAAAAIAAADQAAAJgGAHQgFAGgIADIgGABIABAAQiSAhiRAdIgCAAQhXARhXAPIgEAAIgBAAQioAdioAVQi0AXizAOIgGAAIgCAAQhSAHhSAEQhRAFhQACIgBAAIgBAAIgEABQhfADhgAAIAAAAIgFAAIAAAAIgvAAIiMgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178,-72.6,356,145.4);
p.frameBounds = [rect];


(lib.bottom_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AEEJPQhMgLhOgeQgHgCgEgFQgEgGgBgGIggjKIgUAEIgBAAIgcAFIgwC1QgCAFgEAFQgEAEgGADQgrAOgtALQijAli9gVQgkgEgkgGQgLgCgFgJIgBAAIgEgEIgDgCQgEgEgBgFQgCgFAAgFQADiYhqhTQhLg6jShDQhIgXhVhIQhKg/gzhGIgBAAIgQgYQgrhBgUg9QgYhIgBhdQgWgLgJgNIAAAAQgOgSAAggQAAguAbgaQAQgSAigMIAAgBIAJgeQADgKAJgEQAJgFAKADIAwAOIA0APIABAAIADABIgBAAQBjAbBiAXIBEAPIAHACQOfDGO/jLIACAAIABAAIACgBIA1gMQBdgVBfgYQAEgDAGAAIBUgXIAbgIQAHgCAIACQAHACAFAGQAEAGABAHIAGBAQAOAFANAJQAcAVgBAYQAAAkgOAUIAAAAQgJAPgdAXQgFBQgSBBIAAAAQgQA7gZAyIAAABIgIAPIAAABQg7BqhnBIQhRA5h8A3IizBPQhRAoghAwIgBAAQgmA4ANBWQABAIgEAIQgEAHgHADQh5A6iBAAQgqAAgrgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-59.7,283.9,119.6);
p.frameBounds = [rect];


(lib.bottom_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("ACJHOQiggFiUAAQgHAAgHgEQpYmWoYj6QgGgDgEgFQgEgGgBgGIgUjSQAAgJAEgHQAEgHAIgDQAIgDAIACQVcGGT9mGQAHgCAIADQAIACAEAHQAFAHAAAIIgFDSQAAAIgEAGQgFAGgHADQmXCZqRGdIgBABIAAAAIgKAHIAAAAIhsBUQgHAGgJAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-46.2,271.5,92.5);
p.frameBounds = [rect];


(lib.bottom_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A5tG6QgKgDgFgJQgFgJACgKIEOwiQACgGAFgFQAFgFAGgCQAHgCAGACQVcGGT9mGQAJgDAJAFQAKAFADAKIFZQiQACAGgBAHQgCAHgFAFQgEAEgHACQsaDis3AAQs2AAtUjhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-66.7,333,133.5);
p.frameBounds = [rect];


(lib.bottom_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("A5uDVQgHgCgFgGQgEgFgBgHQgBgHADgHIEiqSQADgIAJgEQAIgEAJACQVcGFT9mFQAJgDAIAEQAIAEAFAIIFFKSQADAHgBAHQAAAHgFAGQgFAFgGADQs4Eas4AAQs2AAs4kag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-49.5,333,99.1);
p.frameBounds = [rect];


(lib.bottom_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AgTJTQiDAAAGhBQgCgGAJgQIAAgBIADgGIgSheQgggHgjAAQgqAAgoAJIgEABIgVBOQADAKAAAKIAAAGIgBAGIAAABQgFAjgeAUQgcATgsAAIgWAAQhPgFgxgkIgOgLQgggdgagyIgohNQgUgbghAAQgOABgNAMQgVASgRAoQgYAygHALQgaApghgDQgmABgigeQgKgJgKgLQgYgcgjhCQgjhCgOgVIAAABIgEgFIhQBhQgBAKgDAGIAAABIAAABIgBABIgBADQgRAog8AAQgzABgigvIgIgLQgOgYgWgzIAAAAQgXg0gUgWIAAgBQgIgJgJgGIhdB/QgDAFgGABQgGAAgEgCQgOALgZAAQg4ABgtgtQgMgMgLgPQgsg8gCg+QAAgHADgGQADgGAGgEIAkgZQAfgYAjgfQglgSgfgqQgsg6gCg+QAAgHADgGQADgGAGgEQBXg3CIiTIAAAAIAfgiQCVinAag1QAEgIAIgEQAIgEAJADQVcGFT9mFQAGgCAGACQAHABAFAEQAuArAsBEQAmA8AYAfQAVAcAdAgQBMBUB/BpQAGAFACAIQACAIgDAHQgpBog0AuIgRAQQAvAqA4AvIABABQAFAFACAHQACAIgDAHQgbBEgfAtQgRAXgSAQQg/A6gPgEQgPAAgMgIQgMgGgIgPIhrg3QggAVgWAjIgEAHIAAABQgYAtgMASIAAAAQgbAmgqgBQglAAgVgRIgEgCQgOgMgHgSIhihQQgXAXgaAmIghAvQgWAegHAJQgqAwguAJIgFAAIhBAAQgLAAgHgHQgHgHAAgLIAAgLIhQh7IgLAHQgiAYgoA2IgiArQgaAggLAKQgwAtg2gBQgkAAgPgGQgNgGgIgIIgBAAQgGADgGgDQgFgDgDgFIhOjPQg6ACguAaQgoAWgGAfIgBAJQAABggcAWQgbAehnACIgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.9,-59.6,355.9,119.2);
p.frameBounds = [rect];


(lib.bottom_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AGVHsIgDAAIgGAAIAAAAQhMgBg+gLQg3gKhfgcQgJAAgHgFQgIgHgCgKQgBgJgXhIIgCgFIgEAAQgVADgMAAQgegBgngEIgEgBIgCAGQgYBKgBAJQgCAKgIAHQgHAFgJAAQhfAcg3AKQhCALhRABIhBgDQg6gCgdAAQgFACgcgQQgIgFgDgJQgRgzgohOQglgHgigJQm9hyhhkdQgDgHACgHQACgIAGgFQAGgFAHgBQDXggA2lAQABgGAEgGQAFgFAHgCQAGgCAGABQCkAiChAXQMnBxMFilQAHgCAGACQAHADAFAFQAEAFABAHQA2E7DWAgQAHABAGAFQAGAFACAIQACAHgDAHQhhEdm9ByQgiAJglAHQgoBOgRAzQgDAJgIAFQgcAQgFgCQgdAAg6ACIhBADIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.3,-49.2,254.6,98.4);
p.frameBounds = [rect];


(lib.bottom_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("ABpH/QgHgBgFgFQgGgFgCgGIgph+QgBgFAAgFIgIACIgUAAIgBAAIgBAAIg/gDIgHgCIgCAIIg0CJQgCAGgFAFQgGAEgHABQiCARiDgPQhkgMhjgfQgGgCgFgEQgEgFgCgGQgSg+hDgaIAAAAIhDgbIAAAAIhWglIAAAAQgngRhogqQhsgrhThCQhHg5g0iYIgBgCIAAgBQgKgdgIggQguilAOjMQABgHAEgGQAFgGAHgDQAHgCAIACQC8A1C7AnQHoBmHaABQHvABHhhrQCngmClgyQAHgCAIACQAHADAEAGQAFAGABAHQAODMguCkIgOAxIAAAAQg2ClhKA7QhTBChsArQhoAqgnARIAAAAIhWAlIAAAAIhDAbIAAAAQhDAagSA+QgCAFgEAFQgEAEgFACQhrAph3AKIgBAAQgkADglAAQhbAAhigRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.9,-52.8,271.8,105.7);
p.frameBounds = [rect];


(lib.bottom_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("ABjKbQhEAAhdgoIgBAAQhTgighgBQgiABhLAeIABAAQhXAjgjgBQg2ABhXg0QhHgrgmgBQgsAAgsAWQg5AdgWgBQgyAChVhMIAAAAQhBg6gXgDIiZAKIgCAAQg4AAgigYIAAAAQgWgNgagkQgUgbgOgKQgXgPgjAAIgiAHQgpAIgHAAQglACg2gwQg8g1ACgzQgFgPBfhbQg8g9gZghQgGgHABgJQAAgIAFgFQBdhwBHhLQgQADgEAAQglACg2gwQg8g1ACgzQgGgRCHh+QCIiAAdgjQAHgIAKgBIAFgDQAJgFAKACQVbGGT+mOQAHgCAHACQAGABAFAFIB2B3IAAAAQBRBRB2COQAFAHABAIQAAAJgGAHQgdAnhLBKIAAAAIgOAOQCBB5gFARQABAxg8A1QgfAbgZALQAyA4A7BHQAFAHABAIQAAAJgGAHQgdAnhLBKIAAAAQhIBGgpgDQgdABglgWQgWgNgOgBQggAAgoAUIAAAAQgVAKg8AmQh6BOhVgBQg0AAg1gWIAAAAQgsgSgfAAQggAAgZANIAAgBQgNAIgfAYIAAAAQhFA4hVAAQgrAAhJgSQhCgRgkAAQgxABg+AhQhLApgqAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.7,-66.7,333.4,133.5);
p.frameBounds = [rect];


(lib.bottom_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("ApHH0QgHgCgEgGQgFgFgBgHQgQhXhbgrQhjgwhRgRIAAAAQhYgThyhNQhzhNhKh5QhKh6gEmCQAAgIAFgGQAEgHAIgDQAHgCAIACQVcGFT8mFQAIgCAIACQAIADAFAHQAEAHAAAJQgbGSg/BqIAAAAQg/BrhFAxIAAAAQhDAvhxA6QhyA6hxAYQhfAXgfB8QgCALgJAFQgJAFgKgCIgBAAIgHADQjeBEjyhEQgGgCgFgEQgEgFgCgGIgkiAIgBgFIgGABQgkABgjgDIgEAAIgBADIgfCCQgBAGgEAFQgFAFgGACQh0Amh5AAQiBAAiGgrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-54.3,271.5,108.8);
p.frameBounds = [rect];


(lib.bottom_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AAvH7QgKAAgHgIQgIgHAAgKIAAhYQgdABgfgCIAABUQAAAHgEAGQgDAFgGAEQgGADgHAAQp1gSqEjGQgHgCgFgFQgEgGgCgGQgKg1gHg0QglkTAokgIAOhVQABgHAFgFQAEgFAHgCQAHgCAHACQVcGFT9mFQAGgCAHACQAHACAFAFQAFAFABAHIAMBEQAuFEguE0IgLBDQgBAHgFAFQgEAFgGACQpUDPqHAAIgzAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.1,-50.8,278.3,101.6);
p.frameBounds = [rect];


(lib.bottom_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558EBB").s().p("AEEJPQhMgLhOgeQgHgCgEgFQgEgGgBgGIggjKIgUAEIgBAAIgcAFIgwC1QgCAFgEAFQgEAEgGADQgrAOgtALQijAli9gVQgkgEgkgGQgLgCgFgJIgBAAIgEgEIgDgCQgEgEgBgFQgCgFAAgFQADiYhqhTQhLg6jShDQhIgXhVhIQhKg/gzhGIgBAAIgQgYQgrhBgUg9QgYhIgBhdQgWgLgJgNIAAAAQgOgSAAggQAAguAbgaQAQgSAigMIAAgBIAJgeQADgKAJgEQAJgFAKADIAwAOIA0APIABAAIADABIgBAAQBjAbBiAXIBEAPIAHACQOfDGO/jLIACAAIABAAIACgBIA1gMQBdgVBfgYQAEgDAGAAIBUgXIAbgIQAHgCAIACQAHACAFAGQAEAGABAHIAGBAQAOAFANAJQAcAVgBAYQAAAkgOAUIAAAAQgJAPgdAXQgFBQgSBBIAAAAQgQA7gZAyIAAABIgIAPIAAABQg7BqhnBIQhRA5h8A3IizBPQhRAoghAwIgBAAQgmA4ANBWQABAIgEAIQgEAHgHADQh5A6iBAAQgqAAgrgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-59.7,283.9,119.6);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-220,-110,0.917,0.917);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-200,-100,0.833,0.833);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-210,-105,0.875,0.875);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-220,-110,0.917,0.917);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-220,-110,0.917,0.917);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-220,-110,0.917,0.917);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-210,-105,0.875,0.875);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-220,-110,0.917,0.917);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-220,-110,0.917,0.917);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-240,-120);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-240,-120);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-220,-110,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-110,440,220);
p.frameBounds = [rect, new cjs.Rectangle(-200,-100,400,200), new cjs.Rectangle(-210,-105,420,210), rect=new cjs.Rectangle(-220,-110,440,220), rect, rect, new cjs.Rectangle(-210,-105,420,210), rect=new cjs.Rectangle(-220,-110,440,220), rect, rect=new cjs.Rectangle(-240,-120,480,240), rect, new cjs.Rectangle(-220,-110,440,220)];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.bg_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_subcategory_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.bg_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_panel_img();
	this.instance.setTransform(-5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect];


(lib.bg_option_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_option_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.bg_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_navigation_img();
	this.instance.setTransform(-50,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-25,100,50);
p.frameBounds = [rect];


(lib.bg_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_category_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.backgrounds_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_5_img();
	this.instance_4.setTransform(-200,0);

	this.instance_5 = new lib.background_6_img();
	this.instance_5.setTransform(-200,0);

	this.instance_6 = new lib.background_7_img();
	this.instance_6.setTransform(-200,0);

	this.instance_7 = new lib.background_8_img();
	this.instance_7.setTransform(-200,0);

	this.instance_8 = new lib.background_9_img();
	this.instance_8.setTransform(-200,0);

	this.instance_9 = new lib.background_10_img();
	this.instance_9.setTransform(-200,0);

	this.instance_10 = new lib.background_11_img();
	this.instance_10.setTransform(-200,0);

	this.instance_11 = new lib.background_12_img();
	this.instance_11.setTransform(-200,0);

	this.instance_12 = new lib.background_13_img();
	this.instance_12.setTransform(-200,0);

	this.instance_13 = new lib.background_14_img();
	this.instance_13.setTransform(-200,0);

	this.instance_14 = new lib.background_15_img();
	this.instance_14.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B500").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


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


(lib.numbers_separator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.numbers_separator_img();
	this.instance.setTransform(-24,-24,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.numbers_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.numbers_0_img();
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.numbers_1_img();
	this.instance_1.setTransform(-30,-30);

	this.instance_2 = new lib.numbers_2_img();
	this.instance_2.setTransform(-30,-30);

	this.instance_3 = new lib.numbers_3_img();
	this.instance_3.setTransform(-30,-30);

	this.instance_4 = new lib.numbers_4_img();
	this.instance_4.setTransform(-30,-30);

	this.instance_5 = new lib.numbers_5_img();
	this.instance_5.setTransform(-30,-30);

	this.instance_6 = new lib.numbers_6_img();
	this.instance_6.setTransform(-30,-30);

	this.instance_7 = new lib.numbers_7_img();
	this.instance_7.setTransform(-30,-30);

	this.instance_8 = new lib.numbers_8_img();
	this.instance_8.setTransform(-30,-30);

	this.instance_9 = new lib.numbers_9_img();
	this.instance_9.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.numbers_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.numbers_0_img();
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.numbers_1_img();
	this.instance_1.setTransform(-30,-30);

	this.instance_2 = new lib.numbers_2_img();
	this.instance_2.setTransform(-30,-30);

	this.instance_3 = new lib.numbers_3_img();
	this.instance_3.setTransform(-30,-30);

	this.instance_4 = new lib.numbers_4_img();
	this.instance_4.setTransform(-30,-30);

	this.instance_5 = new lib.numbers_5_img();
	this.instance_5.setTransform(-30,-30);

	this.instance_6 = new lib.numbers_6_img();
	this.instance_6.setTransform(-30,-30);

	this.instance_7 = new lib.numbers_7_img();
	this.instance_7.setTransform(-30,-30);

	this.instance_8 = new lib.numbers_8_img();
	this.instance_8.setTransform(-30,-30);

	this.instance_9 = new lib.numbers_9_img();
	this.instance_9.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-15,-15,0.625,0.625);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-15,-15,0.625,0.625);

	this.instance_2 = new lib.banana_img();
	this.instance_2.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-45,-45,90,90)];


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(600,250,1.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,500);
p.frameBounds = [rect];


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_2_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.blinking_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.sound_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_2_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.sound_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.photo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.more_games_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_19_img();
	this.instance.setTransform(-0.4,-0.2,0.26,0.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.4,-0.2,8.1,8);
p.frameBounds = [rect];


(lib.more_games_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_18_img();
	this.instance.setTransform(0,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.1,16.6,27.4);
p.frameBounds = [rect];


(lib.more_games_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_17_img();
	this.instance.setTransform(-0.1,-0.1,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,-0.1,23.8,24);
p.frameBounds = [rect];


(lib.more_games_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50,50);
p.frameBounds = [rect];


(lib.more_games_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_16_img();
	this.instance.setTransform(2.7,-7.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2.7,-7.5,41.1,43.2);
p.frameBounds = [rect];


(lib.more_games_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_6_img();
	this.instance.setTransform(-69.8,-64.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-64.1,139.7,128.2);
p.frameBounds = [rect];


(lib.more_games_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_15_img();
	this.instance.setTransform(0,0,0.822,0.822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82.2,60);
p.frameBounds = [rect];


(lib.more_games_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_14_img();
	this.instance.setTransform(0.3,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.3,0.1,49.7,67.7);
p.frameBounds = [rect];


(lib.more_games_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_13_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,7.2,7.9);
p.frameBounds = [rect];


(lib.more_games_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_10_img();
	this.instance.setTransform(0,1.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,1.5,133.9,135.4);
p.frameBounds = [rect];


(lib.more_games_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_9_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,133.9,114.5);
p.frameBounds = [rect];


(lib.more_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_8_img();
	this.instance.setTransform(-0.1,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,0,134.7,95.1);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_7_img();
	this.instance.setTransform(-0.3,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.3,0,134.7,123.1);
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


(lib.logo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_img();
	this.instance.setTransform(-110,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At5GPQhWABg+g+Qg9g9AAhYIAAl5QAAhYA9g9QA+g+BWABIbzAAQBWgBA+A+QA9A9AABYIAAF5QAABYg9A9Qg+A+hWgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect];


(lib.instruction_1_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.full_screen_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.facebook_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_img();
	this.instance.setTransform(-60,-60,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.done_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.credits_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.body_title_reset_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11});

	// graph
	this.instance = new lib.title_reset_en_img();
	this.instance.setTransform(-90,-40);

	this.instance_1 = new lib.title_reset_ru_img();
	this.instance_1.setTransform(-90,-40);

	this.instance_2 = new lib.title_reset_de_img();
	this.instance_2.setTransform(-90,-40);

	this.instance_3 = new lib.title_reset_fr_img();
	this.instance_3.setTransform(-90,-40);

	this.instance_4 = new lib.title_reset_it_img();
	this.instance_4.setTransform(-90,-40);

	this.instance_5 = new lib.title_reset_es_img();
	this.instance_5.setTransform(-90,-40);

	this.instance_6 = new lib.title_reset_pt_img();
	this.instance_6.setTransform(-90,-40);

	this.instance_7 = new lib.title_reset_tr_img();
	this.instance_7.setTransform(-90,-40);

	this.instance_8 = new lib.title_reset_ja_img();
	this.instance_8.setTransform(-90,-40);

	this.instance_9 = new lib.title_reset_hi_img();
	this.instance_9.setTransform(-90,-40);

	this.instance_10 = new lib.title_reset_ar_img();
	this.instance_10.setTransform(-90,-40);

	this.instance_11 = new lib.title_reset_id_img();
	this.instance_11.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_random_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11});

	// graph
	this.instance = new lib.title_random_en_img();
	this.instance.setTransform(-90,-40);

	this.instance_1 = new lib.title_random_ru_img();
	this.instance_1.setTransform(-90,-40);

	this.instance_2 = new lib.title_random_de_img();
	this.instance_2.setTransform(-90,-40);

	this.instance_3 = new lib.title_random_fr_img();
	this.instance_3.setTransform(-90,-40);

	this.instance_4 = new lib.title_random_it_img();
	this.instance_4.setTransform(-90,-40);

	this.instance_5 = new lib.title_random_es_img();
	this.instance_5.setTransform(-90,-40);

	this.instance_6 = new lib.title_random_pt_img();
	this.instance_6.setTransform(-90,-40);

	this.instance_7 = new lib.title_random_tr_img();
	this.instance_7.setTransform(-90,-40);

	this.instance_8 = new lib.title_random_ja_img();
	this.instance_8.setTransform(-90,-40);

	this.instance_9 = new lib.title_random_hi_img();
	this.instance_9.setTransform(-90,-40);

	this.instance_10 = new lib.title_random_ar_img();
	this.instance_10.setTransform(-90,-40);

	this.instance_11 = new lib.title_random_id_img();
	this.instance_11.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bg_small_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bg_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.again_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
	mask.setTransform(0,5);

	// image_1
	this.instance_1 = new lib.redirect_4_mc();

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:0.012},15).to({_off:true},1).wait(149).to({_off:false,scaleX:0.5,scaleY:0.5,x:95,y:95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(1));

	// image_2
	this.instance_2 = new lib.redirect_5_mc();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(55).to({alpha:0.012},15).to({_off:true},1).wait(39).to({_off:false,scaleX:0.5,scaleY:0.5,x:-95,y:-95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(56));

	// image_1
	this.instance_3 = new lib.redirect_4_mc();
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(70).to({_off:true},1).wait(55));

	// bg
	this.instance_4 = new lib.redirect_3_mc();
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,480.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-60,96,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50.3,-63,100.8,126), new cjs.Rectangle(-54.5,-66,105.6,132), new cjs.Rectangle(-58.8,-69,110.4,138), new cjs.Rectangle(-63.2,-72,115.2,144), new cjs.Rectangle(-67.5,-75,120,150), new cjs.Rectangle(-65.4,-75,120,150), new cjs.Rectangle(-63.4,-75,120,150), new cjs.Rectangle(-61.4,-75,120,150), new cjs.Rectangle(-59.5,-75,120,150), new cjs.Rectangle(-57.5,-75,120,150), new cjs.Rectangle(-55.5,-75,120,150), new cjs.Rectangle(-53.5,-75,120,150), new cjs.Rectangle(-51.5,-75,120,150), new cjs.Rectangle(-49.5,-75,120,150), new cjs.Rectangle(-47.5,-75,120,150), new cjs.Rectangle(-47.2,-72,115.2,144), new cjs.Rectangle(-47,-69,110.4,138), new cjs.Rectangle(-46.7,-66,105.6,132), new cjs.Rectangle(-46.4,-63,100.8,126), rect=new cjs.Rectangle(-46,-60,96,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.preloader_16_mc();
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.preloader_15_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
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
	this.instance = new lib.preloader_18_mc();
	this.instance.setTransform(130,32,0.4,0.4);

	this.instance_1 = new lib.preloader_18_mc();
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
p.nominalBounds = rect = new cjs.Rectangle(-555,-23,1110,46.1);
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
p.nominalBounds = rect = new cjs.Rectangle(-590,-23,1180,46.1);
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


(lib.orientation_lock_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_8_mc();
	this.instance.setTransform(60,0);

	this.instance_1 = new lib.orientation_lock_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-12,107,24);
p.frameBounds = [rect];


(lib.wings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.wing4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing4();
	this.instance.setTransform(123,85,1,1,0,0,0,123,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:20.2},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.5,-129.5,239,205);
p.frameBounds = [rect, new cjs.Rectangle(-137.2,-134,242.6,209.2), new cjs.Rectangle(-136.9,-138.5,246.1,213.4), new cjs.Rectangle(-136.5,-143,249.5,217.4), new cjs.Rectangle(-135.9,-148.1,253.5,222.1), new cjs.Rectangle(-135.4,-152.4,256.8,226), new cjs.Rectangle(-134.7,-156.6,260,229.9), new cjs.Rectangle(-134,-160.7,263,233.7), new cjs.Rectangle(-133,-165.5,266.6,238), new cjs.Rectangle(-132.1,-169.4,269.5,241.6), new cjs.Rectangle(-131.2,-173.3,272.3,245.1), new cjs.Rectangle(-130,-177.1,275.1,248.6), new cjs.Rectangle(-128.8,-181.5,278.2,252.6), new cjs.Rectangle(-127.4,-185.1,280.8,255.9), new cjs.Rectangle(-126.2,-188.7,283.3,259), new cjs.Rectangle(-124.7,-192.1,285.6,262.2), new cjs.Rectangle(-123,-196,288.3,265.8), new cjs.Rectangle(-121.4,-199.3,290.5,268.7), new cjs.Rectangle(-119.8,-202.4,292.6,271.5), new cjs.Rectangle(-118.1,-206.4,295.2,275.1), new cjs.Rectangle(-119.8,-202.5,292.6,271.6), new cjs.Rectangle(-121.4,-199.4,290.6,268.8), new cjs.Rectangle(-122.9,-196.2,288.4,265.9), new cjs.Rectangle(-124.4,-192.8,286.1,262.9), new cjs.Rectangle(-125.8,-189.5,283.8,259.9), new cjs.Rectangle(-127.2,-186,281.4,256.7), new cjs.Rectangle(-128.4,-182.5,278.9,253.5), new cjs.Rectangle(-129.6,-178.9,276.4,250.2), new cjs.Rectangle(-130.7,-175.2,273.7,246.9), new cjs.Rectangle(-131.7,-171.3,270.9,243.4), new cjs.Rectangle(-132.6,-167.5,268,239.9), new cjs.Rectangle(-133.4,-163.6,265.2,236.3), new cjs.Rectangle(-134.2,-159.6,262.2,232.6), new cjs.Rectangle(-135,-155.5,259.1,228.9), new cjs.Rectangle(-135.6,-151.3,255.9,225.1), new cjs.Rectangle(-136.1,-147,252.7,221.2), new cjs.Rectangle(-136.5,-142.7,249.4,217.2), new cjs.Rectangle(-136.9,-138.4,246,213.2), new cjs.Rectangle(-137.3,-133.9,242.6,209.2), new cjs.Rectangle(-137.5,-129.5,239,205)];


(lib.wing3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing3();
	this.instance.setTransform(123,85,1,1,0,0,0,123,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:20.2},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-96.5,179,246);
p.frameBounds = [rect, new cjs.Rectangle(-70.5,-99.8,183.3,249.2), new cjs.Rectangle(-71.6,-103.1,187.6,252.2), new cjs.Rectangle(-72.6,-106.4,191.8,255.1), new cjs.Rectangle(-73.6,-110.2,196.7,258.5), new cjs.Rectangle(-74.5,-113.3,200.8,261.4), new cjs.Rectangle(-75.3,-116.3,204.8,264), new cjs.Rectangle(-75.9,-119.4,208.7,266.7), new cjs.Rectangle(-76.8,-122.8,213.4,269.7), new cjs.Rectangle(-77.3,-125.7,217.2,272.1), new cjs.Rectangle(-77.9,-128.5,220.9,274.5), new cjs.Rectangle(-78.3,-131.2,224.6,276.7), new cjs.Rectangle(-78.8,-134.3,228.8,279.3), new cjs.Rectangle(-79.1,-136.9,232.3,281.4), new cjs.Rectangle(-79.3,-139.4,235.7,283.4), new cjs.Rectangle(-79.5,-141.8,239.1,285.2), new cjs.Rectangle(-79.7,-144.6,243,287.4), new cjs.Rectangle(-79.8,-146.9,246.2,289), new cjs.Rectangle(-79.8,-149.1,249.3,290.7), new cjs.Rectangle(-79.9,-151.9,253.1,292.8), new cjs.Rectangle(-79.9,-149.1,249.4,290.7), new cjs.Rectangle(-79.7,-146.9,246.3,289.2), new cjs.Rectangle(-79.7,-144.7,243.1,287.5), new cjs.Rectangle(-79.5,-142.4,239.9,285.7), new cjs.Rectangle(-79.5,-140,236.6,283.8), new cjs.Rectangle(-79.2,-137.5,233.2,281.9), new cjs.Rectangle(-78.9,-135,229.8,279.9), new cjs.Rectangle(-78.6,-132.5,226.3,277.8), new cjs.Rectangle(-78.2,-129.8,222.7,275.5), new cjs.Rectangle(-77.6,-127,219,273.3), new cjs.Rectangle(-77.1,-124.3,215.3,270.9), new cjs.Rectangle(-76.5,-121.4,211.5,268.5), new cjs.Rectangle(-75.8,-118.5,207.7,266), new cjs.Rectangle(-75.1,-115.5,203.8,263.3), new cjs.Rectangle(-74.3,-112.5,199.8,260.7), new cjs.Rectangle(-73.5,-109.4,195.7,257.9), new cjs.Rectangle(-72.5,-106.2,191.6,255), new cjs.Rectangle(-71.5,-103,187.5,252.1), new cjs.Rectangle(-70.5,-99.7,183.3,249.1), new cjs.Rectangle(-69.5,-96.5,179,246)];


(lib.wing2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing2();
	this.instance.setTransform(123,85,1,1,0,0,0,123,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:20.2},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.5,-88.5,261,175);
p.frameBounds = [rect, new cjs.Rectangle(-161.4,-93.4,264.1,179.6), new cjs.Rectangle(-161.2,-98.4,267,184.1), new cjs.Rectangle(-161,-103.3,269.9,188.6), new cjs.Rectangle(-160.7,-109,273.2,193.8), new cjs.Rectangle(-160.2,-113.8,275.9,198.1), new cjs.Rectangle(-159.8,-118.5,278.5,202.5), new cjs.Rectangle(-159.2,-123.1,281,206.7), new cjs.Rectangle(-158.4,-128.5,283.9,211.6), new cjs.Rectangle(-157.6,-133,286.2,215.7), new cjs.Rectangle(-156.7,-137.4,288.5,219.7), new cjs.Rectangle(-155.7,-141.8,290.6,223.7), new cjs.Rectangle(-154.5,-146.9,293,228.2), new cjs.Rectangle(-153.4,-151,295,232), new cjs.Rectangle(-152.2,-155.2,296.9,235.7), new cjs.Rectangle(-150.8,-159.2,298.6,239.3), new cjs.Rectangle(-149.1,-163.9,300.6,243.5), new cjs.Rectangle(-147.6,-167.8,302.1,247.1), new cjs.Rectangle(-146,-171.6,303.6,250.4), new cjs.Rectangle(-144.4,-176.2,305.5,254.6), new cjs.Rectangle(-146.1,-171.6,303.5,250.5), new cjs.Rectangle(-147.6,-167.9,302.2,247.1), new cjs.Rectangle(-149.1,-164,300.5,243.7), new cjs.Rectangle(-150.5,-160.1,299,240.2), new cjs.Rectangle(-151.9,-156.2,297.3,236.6), new cjs.Rectangle(-153.1,-152.1,295.5,233), new cjs.Rectangle(-154.2,-148,293.6,229.3), new cjs.Rectangle(-155.3,-143.8,291.6,225.5), new cjs.Rectangle(-156.3,-139.6,289.5,221.6), new cjs.Rectangle(-157.2,-135.2,287.4,217.7), new cjs.Rectangle(-158,-130.8,285.1,213.7), new cjs.Rectangle(-158.7,-126.3,282.8,209.7), new cjs.Rectangle(-159.4,-121.8,280.4,205.5), new cjs.Rectangle(-160,-117.2,277.8,201.3), new cjs.Rectangle(-160.4,-112.6,275.2,197.1), new cjs.Rectangle(-160.8,-107.8,272.6,192.8), new cjs.Rectangle(-161.1,-103,269.8,188.4), new cjs.Rectangle(-161.2,-98.2,266.9,184), new cjs.Rectangle(-161.4,-93.4,264,179.5), new cjs.Rectangle(-161.5,-88.5,261,175)];


(lib.wing1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1();
	this.instance.setTransform(123,85,1,1,0,0,0,123,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:20.2},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-100.5,251,201);
p.frameBounds = [rect, new cjs.Rectangle(-125.6,-104.8,254.5,205.4), new cjs.Rectangle(-125.8,-109.1,258,209.8), new cjs.Rectangle(-125.9,-113.4,261.3,214.1), new cjs.Rectangle(-125.8,-118.3,265.2,219), new cjs.Rectangle(-125.7,-122.4,268.3,223.2), new cjs.Rectangle(-125.5,-126.5,271.4,227.2), new cjs.Rectangle(-125.3,-130.4,274.4,231.2), new cjs.Rectangle(-124.9,-135.1,277.9,235.9), new cjs.Rectangle(-124.4,-138.9,280.7,239.6), new cjs.Rectangle(-123.9,-142.6,283.4,243.4), new cjs.Rectangle(-123.3,-146.3,286,247.1), new cjs.Rectangle(-122.6,-150.6,289,251.4), new cjs.Rectangle(-121.8,-154.1,291.5,254.8), new cjs.Rectangle(-120.9,-157.6,293.8,258.3), new cjs.Rectangle(-120,-160.9,296.1,261.6), new cjs.Rectangle(-118.8,-164.8,298.5,265.5), new cjs.Rectangle(-117.8,-168.1,300.6,268.6), new cjs.Rectangle(-116.6,-171.1,302.6,271.7), new cjs.Rectangle(-115.5,-175,305.1,275.5), new cjs.Rectangle(-116.7,-171.2,302.6,271.7), new cjs.Rectangle(-117.7,-168.1,300.7,268.7), new cjs.Rectangle(-118.8,-164.9,298.7,265.5), new cjs.Rectangle(-119.8,-161.7,296.6,262.4), new cjs.Rectangle(-120.8,-158.4,294.4,259.1), new cjs.Rectangle(-121.6,-155,292,255.8), new cjs.Rectangle(-122.3,-151.5,289.7,252.3), new cjs.Rectangle(-123,-148,287.2,248.8), new cjs.Rectangle(-123.7,-144.4,284.7,245.2), new cjs.Rectangle(-124.2,-140.7,282,241.5), new cjs.Rectangle(-124.7,-137,279.3,237.8), new cjs.Rectangle(-125,-133.2,276.5,234), new cjs.Rectangle(-125.4,-129.3,273.6,230.1), new cjs.Rectangle(-125.7,-125.4,270.7,226.1), new cjs.Rectangle(-125.8,-121.4,267.5,222.1), new cjs.Rectangle(-125.9,-117.3,264.4,218), new cjs.Rectangle(-125.9,-113.1,261.2,213.9), new cjs.Rectangle(-125.8,-109,257.9,209.7), new cjs.Rectangle(-125.7,-104.7,254.5,205.4), new cjs.Rectangle(-125.5,-100.5,251,201)];


(lib.top20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base20();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,323,155.4);
p.frameBounds = [rect];


(lib.top19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base19();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.4,-67.7,285,136);
p.frameBounds = [rect];


(lib.top18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base18();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,285,137);
p.frameBounds = [rect];


(lib.top17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base17();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,323,155.5);
p.frameBounds = [rect];


(lib.top16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor16();
	this.instance.setTransform(-0.1,0.5,1,1,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base16();
	this.body_mc.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.2,-60.6,286.5,122.4);
p.frameBounds = [rect];


(lib.top15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base15();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.9,-40.7,256,82);
p.frameBounds = [rect];


(lib.top14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base14();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.6,-77.7,353.2,155.5);
p.frameBounds = [rect];


(lib.top13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base13();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,323,155.5);
p.frameBounds = [rect];


(lib.top12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base12();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.2,-59.1,314.5,118.3);
p.frameBounds = [rect];


(lib.top11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,285,137);
p.frameBounds = [rect];


(lib.top10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.2,-107.9,330.5,216);
p.frameBounds = [rect];


(lib.top9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.7,-107.5,297.4,215.2);
p.frameBounds = [rect];


(lib.top8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189.6,-83.9,379.4,168);
p.frameBounds = [rect];


(lib.top7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.2,-74.3,281,149);
p.frameBounds = [rect];


(lib.top6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-66.1,281,132.2);
p.frameBounds = [rect];


(lib.top5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-66.1,281,132.2);
p.frameBounds = [rect];


(lib.top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.7,-62.4,305.4,125);
p.frameBounds = [rect];


(lib.top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-77.7,323,155.4);
p.frameBounds = [rect];


(lib.top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.4,-61.4,283,123);
p.frameBounds = [rect];


(lib.top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.top_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,285,137);
p.frameBounds = [rect];


(lib.top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.top1();

	this.body_2 = new lib.top2();
	this.body_2.setTransform(-0.7,6.1);

	this.body_3 = new lib.top3();
	this.body_3.setTransform(-0.1,16.9);

	this.body_4 = new lib.top4();
	this.body_4.setTransform(1.7,7.8);

	this.body_5 = new lib.top5();
	this.body_5.setTransform(-0.3,3.8);

	this.body_6 = new lib.top6();
	this.body_6.setTransform(-0.3,3.8);

	this.body_7 = new lib.top7();
	this.body_7.setTransform(0.4,-4.5);

	this.body_8 = new lib.top8();
	this.body_8.setTransform(0.8,13.6);

	this.body_9 = new lib.top9();
	this.body_9.setTransform(1.5,37.7);

	this.body_10 = new lib.top10();
	this.body_10.setTransform(-0.5,40.1);

	this.body_11 = new lib.top11();

	this.body_12 = new lib.top12();
	this.body_12.setTransform(0.9,10.7);

	this.body_13 = new lib.top13();
	this.body_13.setTransform(-0.1,16.9);

	this.body_14 = new lib.top14();
	this.body_14.setTransform(0.9,16.9);

	this.body_15 = new lib.top15();
	this.body_15.setTransform(0.2,15.9);

	this.body_16 = new lib.top16();
	this.body_16.setTransform(-0.1,8.7,1,1,0,0,0,-0.1,0.5);

	this.body_17 = new lib.top17();
	this.body_17.setTransform(-0.1,16.9);

	this.body_18 = new lib.top18();

	this.body_19 = new lib.top19();
	this.body_19.setTransform(0.7,2.4);

	this.body_20 = new lib.top20();
	this.body_20.setTransform(-0.1,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).to({state:[{t:this.body_17}]},1).to({state:[{t:this.body_18}]},1).to({state:[{t:this.body_19}]},1).to({state:[{t:this.body_20}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.2,-68.4,285,137);
p.frameBounds = [rect, new cjs.Rectangle(-142.1,-55.3,283,123), new cjs.Rectangle(-161.4,-60.8,323,155.4), new cjs.Rectangle(-151,-54.6,305.4,125), rect=new cjs.Rectangle(-140.8,-62.3,281,132.2), rect, new cjs.Rectangle(-139.8,-78.8,281,149), new cjs.Rectangle(-188.9,-70.3,379.4,168), new cjs.Rectangle(-147.2,-69.8,297.4,215.2), new cjs.Rectangle(-165.8,-67.8,330.5,216), new cjs.Rectangle(-142.2,-68.4,285,137), new cjs.Rectangle(-156.3,-48.4,314.5,118.3), new cjs.Rectangle(-161.4,-60.8,323,155.5), new cjs.Rectangle(-175.7,-60.8,353.2,155.5), new cjs.Rectangle(-127.8,-24.9,256,82), new cjs.Rectangle(-143.3,-52.5,286.5,122.4), new cjs.Rectangle(-161.4,-60.8,323,155.5), new cjs.Rectangle(-142.2,-68.4,285,137), new cjs.Rectangle(-141.8,-65.3,285,136), new cjs.Rectangle(-161.4,-60.8,323,155.4), null];


(lib.title_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.totalPages_mc = new lib.numbers_2_mc();
	this.totalPages_mc.setTransform(25,0,0.7,0.7);

	this.currentPage_mc = new lib.numbers_1_mc();
	this.currentPage_mc.setTransform(-25,0,0.7,0.7);

	this.instance = new lib.numbers_separator_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.currentPage_mc},{t:this.totalPages_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-21,92,42);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		/*
		
		*/
		console.log("Язык: " + ysdk_obj.environment.i18n.lang);
		try
		{
			if(ysdk_obj.environment.i18n.lang)
			{
				/*
				
				*/
				lang_str = ysdk_obj.environment.i18n.lang;
				/*
				
				*/
				if(lang_str == "en")
				{
					label_str = "en";
				}
				if(lang_str == "ru")
				{
					label_str = "ru";
				}
				if(lang_str == "de")
				{
					label_str = "de";
				}
				if(lang_str == "fr")
				{
					label_str = "fr";
				}
				if(lang_str == "it")
				{
					label_str = "it";
				}
				if(lang_str == "es")
				{
					label_str = "es";
				}
				if(lang_str == "pt")
				{
					label_str = "pt";
				}
				if(lang_str == "tr")
				{
					label_str = "tr";
				}
				if(lang_str == "ja")
				{
					label_str = "ja";
				}
				if(lang_str == "hi")
				{
					label_str = "hi";
				}
				if(lang_str == "ar")
				{
					label_str = "ar";
				}
				if(lang_str == "id")
				{
					label_str = "id";
				}
			}
		}
		catch(event)
		{
			
		}
		finally
		{
			this.body_mc.gotoAndStop(label_str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-110,440,220);
p.frameBounds = [rect];


(lib.socks8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.socks_decor8();
	this.instance.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base8();
	this.body_mc.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-28.1,121.3,59);
p.frameBounds = [rect];


(lib.socks7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.socks_decor7();
	this.instance.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base7();
	this.body_mc.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-28.1,121.3,59);
p.frameBounds = [rect];


(lib.socks6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.socks_decor6();
	this.instance.setTransform(-0.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base6();
	this.body_mc.setTransform(-0.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-30.6,121,60.3);
p.frameBounds = [rect];


(lib.socks5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.socks_decor5();
	this.instance.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base5();
	this.body_mc.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-28.1,121.3,59);
p.frameBounds = [rect];


(lib.socks4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.socks_decor4();
	this.instance.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base4();
	this.body_mc.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-28.1,121.3,59);
p.frameBounds = [rect];


(lib.socks3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.socks_decor3();
	this.instance.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base3();
	this.body_mc.setTransform(0.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-28.1,121.3,59);
p.frameBounds = [rect];


(lib.socks2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.socks_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-30.6,122,61.2);
p.frameBounds = [rect];


(lib.socks1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.socks_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-30.6,122,61.2);
p.frameBounds = [rect];


(lib.socks_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.socks1();

	this.body_2 = new lib.socks2();

	this.body_3 = new lib.socks3();

	this.body_4 = new lib.socks4();

	this.body_5 = new lib.socks5();

	this.body_6 = new lib.socks6();

	this.body_7 = new lib.socks7();

	this.body_8 = new lib.socks8();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-30.6,122,61.2);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-60.4,-28.1,121.3,59), rect, rect, new cjs.Rectangle(-60.7,-30.6,121,60.3), rect=new cjs.Rectangle(-60.4,-28.1,121.3,59), rect, null];


(lib.socks_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shoes12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base12();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-26.4,137,53);
p.frameBounds = [rect];


(lib.shoes11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-18.3,137,37);
p.frameBounds = [rect];


(lib.shoes10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-18.3,137,37);
p.frameBounds = [rect];


(lib.shoes9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-19,127.3,38.2);
p.frameBounds = [rect];


(lib.shoes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-23.9,135.5,48);
p.frameBounds = [rect];


(lib.shoes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22,127.3,44.1);
p.frameBounds = [rect];


(lib.shoes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect];


(lib.shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.shoes1();

	this.body_2 = new lib.shoes2();
	this.body_2.setTransform(0,0.1);

	this.body_3 = new lib.shoes3();

	this.body_4 = new lib.shoes4();
	this.body_4.setTransform(-0.5,-0.8);

	this.body_5 = new lib.shoes5();
	this.body_5.setTransform(0,3.1);

	this.body_6 = new lib.shoes6();

	this.body_7 = new lib.shoes7();

	this.body_8 = new lib.shoes8();

	this.body_9 = new lib.shoes9();

	this.body_10 = new lib.shoes10();
	this.body_10.setTransform(0.1,4.7);

	this.body_11 = new lib.shoes11();
	this.body_11.setTransform(0.1,4.7);

	this.body_12 = new lib.shoes12();
	this.body_12.setTransform(0.1,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-22.1,127.3,44.3);
p.frameBounds = [rect, new cjs.Rectangle(-63.6,-21.9,127.3,44.1), new cjs.Rectangle(-63.6,-22.1,127.3,44.3), new cjs.Rectangle(-68.2,-24.7,135.5,48), new cjs.Rectangle(-63.6,-16,127.3,38.2), rect=new cjs.Rectangle(-63.6,-22.1,127.3,44.3), rect, rect, rect, rect=new cjs.Rectangle(-68.2,-13.6,137,37), rect, new cjs.Rectangle(-68.2,-29.7,137,53), null];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shirt_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.scar_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.scar1();

	this.instance_1 = new lib.scar2();
	this.instance_1.setTransform(6,-1);

	this.instance_2 = new lib.scar3();
	this.instance_2.setTransform(-22.5,-59.7);

	this.instance_3 = new lib.scar4();
	this.instance_3.setTransform(-102.1,8.8,1,1,0,0,0,-0.1,0.5);

	this.instance_4 = new lib.scar5();
	this.instance_4.setTransform(-10.5,-52);

	this.instance_5 = new lib.scar6();
	this.instance_5.setTransform(0.7,35.7);

	this.instance_6 = new lib.scar7();
	this.instance_6.setTransform(0.3,27.3);

	this.instance_7 = new lib.scar8();
	this.instance_7.setTransform(1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127,-20.7,254,41);
p.frameBounds = [rect, new cjs.Rectangle(-61.5,-19.5,135,37), new cjs.Rectangle(-120,-163.7,195,208), new cjs.Rectangle(-126.5,-28.2,49,74), new cjs.Rectangle(-156,-146,291,188), new cjs.Rectangle(-127.4,-11.9,256,95), new cjs.Rectangle(-133.9,-34.7,267,104), new cjs.Rectangle(-137.5,-13.2,277,40), null];


(lib.pants_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.option_top_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_20_img();
	this.instance.setTransform(-60,-29,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_19_img();
	this.instance.setTransform(-60,-29,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_18_img();
	this.instance.setTransform(-60,-29,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_17_img();
	this.instance.setTransform(-60,-29,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_16_img();
	this.instance.setTransform(-60,-26,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_15_img();
	this.instance.setTransform(-65,-21,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_14_img();
	this.instance.setTransform(-60,-26,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_13_img();
	this.instance.setTransform(-60,-29,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_12_img();
	this.instance.setTransform(-60,-23,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_11_img();
	this.instance.setTransform(-65,-31,0.929,0.928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_10_img();
	this.instance.setTransform(-60,-39,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_9_img();
	this.instance.setTransform(-60,-43,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_8_img();
	this.instance.setTransform(-60,-27,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_7_img();
	this.instance.setTransform(-60,-32,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_6_img();
	this.instance.setTransform(-65,-31,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_5_img();
	this.instance.setTransform(-65,-31,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_4_img();
	this.instance.setTransform(-60,-24,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_3_img();
	this.instance.setTransform(-60,-27,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_2_img();
	this.instance.setTransform(-60,-26,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_top_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shirt_1_img();
	this.instance.setTransform(-65,-31,0.929,0.928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_socks_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_socks_8_img();
	this.instance.setTransform(-49,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_socks_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_socks_7_img();
	this.instance.setTransform(-49,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_socks_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_socks_6_img();
	this.instance.setTransform(-53,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_socks_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_socks_5_img();
	this.instance.setTransform(-49,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_socks_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_socks_4_img();
	this.instance.setTransform(-49,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_socks_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_socks_3_img();
	this.instance.setTransform(-49,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_socks_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_socks_2_img();
	this.instance.setTransform(-54,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_socks_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_socks_1_img();
	this.instance.setTransform(-53,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_12_img();
	this.instance.setTransform(-55,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_11_img();
	this.instance.setTransform(-60,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_10_img();
	this.instance.setTransform(-55,-12,0.917,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_9_img();
	this.instance.setTransform(-50,-15,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_8_img();
	this.instance.setTransform(-50,-15,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_7_img();
	this.instance.setTransform(-50,-15,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_6_img();
	this.instance.setTransform(-50,-15,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_5_img();
	this.instance.setTransform(-50,-12,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_4_img();
	this.instance.setTransform(-55,-17,0.924,0.925);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_3_img();
	this.instance.setTransform(-50,-15,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_2_img();
	this.instance.setTransform(-50,-15,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_shoes_1_img();
	this.instance.setTransform(-50,-15,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_mouth8();
	this.instance.setTransform(-0.2,1.1,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_mouth7();
	this.instance.setTransform(0.2,2.9,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_mouth6();
	this.instance.setTransform(-0.1,0,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_mouth5();
	this.instance.setTransform(0,0.9,0.721,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_mouth4();
	this.instance.setTransform(0,4,0.682,0.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_mouth3();
	this.instance.setTransform(-0.2,3,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_mouth2();
	this.instance.setTransform(-0.1,3,0.724,0.722);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_mouth1();
	this.instance.setTransform(0,5,0.902,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_20_img();
	this.instance.setTransform(-29,-30,0.741,0.741);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_19_img();
	this.instance.setTransform(-60,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_18_img();
	this.instance.setTransform(-17,-40,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_17_img();
	this.instance.setTransform(-60,-24,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_16_img();
	this.instance.setTransform(-44,-47,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_15_img();
	this.instance.setTransform(-50,-56,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_14_img();
	this.instance.setTransform(-65,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_13_img();
	this.instance.setTransform(-36,-40,0.899,0.899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_12_img();
	this.instance.setTransform(-55,-33,0.917,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_11_img();
	this.instance.setTransform(-60,-42,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_10_img();
	this.instance.setTransform(-60,-43,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_9_img();
	this.instance.setTransform(-55,-36,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_8_img();
	this.instance.setTransform(-60,-53,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_7_img();
	this.instance.setTransform(-65,-44,0.929,0.928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_6_img();
	this.instance.setTransform(-27,-40,0.748,0.748);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_5_img();
	this.instance.setTransform(-50,-48,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_4_img();
	this.instance.setTransform(-60,-52,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_3_img();
	this.instance.setTransform(-60,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_2_img();
	this.instance.setTransform(-55,-49,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_hair_1_img();
	this.instance.setTransform(-60,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_deco_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.scar8_2_img();
	this.instance.setTransform(-65,-14,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_deco_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.scar7_2_img();
	this.instance.setTransform(-60,-36,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_deco_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.scar6_2_img();
	this.instance.setTransform(-29,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_deco_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.scar5();
	this.instance.setTransform(-6,0,0.447,0.447,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_deco_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.scar4();
	this.instance.setTransform(0.4,1.4,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_deco_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.scar3();
	this.instance.setTransform(0.4,1.4,0.518,0.518,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_deco_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.scar2();
	this.instance.setTransform(1,1.4,0.85,0.85,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_deco_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.scar1_2_img();
	this.instance.setTransform(-60,-13,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_20_img();
	this.instance.setTransform(-60,-16,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_19_img();
	this.instance.setTransform(-60,-16,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_18_img();
	this.instance.setTransform(-60,-15,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_17_img();
	this.instance.setTransform(-60,-14,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_16_img();
	this.instance.setTransform(-60,-16,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_15_img();
	this.instance.setTransform(-60,-14,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_14_img();
	this.instance.setTransform(-60,-17,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_13_img();
	this.instance.setTransform(-60,-14,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_12_img();
	this.instance.setTransform(-60,-21,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_11_img();
	this.instance.setTransform(-60,-18,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_10_img();
	this.instance.setTransform(-54,-9,0.786,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_9_img();
	this.instance.setTransform(-60,-19,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_8_img();
	this.instance.setTransform(-60,-14,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_7_img();
	this.instance.setTransform(-60,-15,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_6_img();
	this.instance.setTransform(-60,-15,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_5_img();
	this.instance.setTransform(-60,-14,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_4_img();
	this.instance.setTransform(-60,-19,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_3_img();
	this.instance.setTransform(-60,-14,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_2_img();
	this.instance.setTransform(-60,-14,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bottom_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_pants_1_img();
	this.instance.setTransform(-60,-15,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_15_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_14_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_13_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_12_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_11_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_10_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_9_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_8_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_7_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_6_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_5_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_4_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_3_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_2_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_wings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_wings_4_img();
	this.instance.setTransform(-60,-51,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_wings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_wings_3_img();
	this.instance.setTransform(-44,-55,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_wings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_wings_2_img();
	this.instance.setTransform(-60,-39,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_wings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_wings_1_img();
	this.instance.setTransform(-60,-48,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_12_img();
	this.instance.setTransform(-60,-35,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_11_img();
	this.instance.setTransform(-55,-37,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_10_img();
	this.instance.setTransform(-60,-24,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_9_img();
	this.instance.setTransform(-55,-56,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_8_img();
	this.instance.setTransform(-60,-36,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_7_img();
	this.instance.setTransform(-60,-33,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_6_img();
	this.instance.setTransform(-60,-22,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_5_img();
	this.instance.setTransform(-50,-19,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_4_img();
	this.instance.setTransform(-60,-16,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_3_img();
	this.instance.setTransform(-50,-50,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_2_img();
	this.instance.setTransform(-60,-10,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_head_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_1_img();
	this.instance.setTransform(-60,-45,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory20_img();
	this.instance.setTransform(-53,-49,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory19_img();
	this.instance.setTransform(-42,-40,0.797,0.796);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_18_img();
	this.instance.setTransform(-54,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-91,156.3,166);
p.frameBounds = [rect];


(lib.option_accessory_hand_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory17_img();
	this.instance.setTransform(-63,-46,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory16_img();
	this.instance.setTransform(-47,-59,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory15_img();
	this.instance.setTransform(-47,-59,0.774,0.774);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory14_img();
	this.instance.setTransform(-58,-60,0.726,0.726);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_13_img();
	this.instance.setTransform(-79,-88,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-88,160.3,163);
p.frameBounds = [rect];


(lib.option_accessory_hand_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory12_img();
	this.instance.setTransform(-67,-52,0.756,0.756);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory11_img();
	this.instance.setTransform(-55,-36,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory10_img();
	this.instance.setTransform(-65,-33,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory9_img();
	this.instance.setTransform(-55,-52,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory8_img();
	this.instance.setTransform(-58,-54,0.71,0.71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory7_img();
	this.instance.setTransform(-30,-63,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hand_accessory6_img();
	this.instance.setTransform(-26,-46,0.715,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_5_img();
	this.instance.setTransform(-65,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-92,156.3,167);
p.frameBounds = [rect];


(lib.option_accessory_hand_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_4_img();
	this.instance.setTransform(-60,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_3_img();
	this.instance.setTransform(-60,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_2_img();
	this.instance.setTransform(-60,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_accessory_hand_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_1_img();
	this.instance.setTransform(-60,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApAECIiygXQA3jcg3j5ICogIIAokCIUVH0I0JH1g");

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


(lib.makeup_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.hero_mouth_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero_mouth1();

	this.instance_1 = new lib.hero_mouth2();
	this.instance_1.setTransform(-1.9,-2.4);

	this.instance_2 = new lib.hero_mouth3();
	this.instance_2.setTransform(-1.3,-14);

	this.instance_3 = new lib.hero_mouth4();
	this.instance_3.setTransform(-3.1,-16);

	this.instance_4 = new lib.hero_mouth5();
	this.instance_4.setTransform(0.4,-8.1);

	this.instance_5 = new lib.hero_mouth6();
	this.instance_5.setTransform(21.3,-5);

	this.instance_6 = new lib.hero_mouth7();
	this.instance_6.setTransform(-0.7,-12.7);

	this.instance_7 = new lib.hero_mouth8();
	this.instance_7.setTransform(3.2,-8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-8.9,122,18);
p.frameBounds = [rect, new cjs.Rectangle(-77.7,-20.8,152,37), new cjs.Rectangle(-45.6,-29.5,89,31), new cjs.Rectangle(-91.1,-37.5,176,43), new cjs.Rectangle(-55.1,-40.9,111,66), new cjs.Rectangle(-28.1,-29,99,48), new cjs.Rectangle(-43.9,-32,86,39), new cjs.Rectangle(-43,-26,93,35)];


(lib.hero_eyes8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hero_eyes_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base8();
	this.body_mc.setTransform(-27.2,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.1,-67,288,134);
p.frameBounds = [rect];


(lib.hero_eyes7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hero_eyes_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base7();
	this.body_mc.setTransform(-0.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.9,-85.8,168,172);
p.frameBounds = [rect];


(lib.hero_eyes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hero_eyes_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base6();
	this.body_mc.setTransform(-0.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-82.9,280,166);
p.frameBounds = [rect];


(lib.hero_eyes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hero_eyes_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base5();
	this.body_mc.setTransform(-0.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.6,-53.1,283,106);
p.frameBounds = [rect];


(lib.hero_eyes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hero_eyes_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base4();
	this.body_mc.setTransform(-0.8,4.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.1,-67,288,134);
p.frameBounds = [rect];


(lib.hero_eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hero_eyes_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base3();
	this.body_mc.setTransform(-1.5,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.6,-53.1,283,106);
p.frameBounds = [rect];


(lib.hero_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hero_eyes_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base2();
	this.body_mc.setTransform(-14.3,12.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.8,-85.8,282,172);
p.frameBounds = [rect];


(lib.hero_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hero_eyes_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base1();
	this.body_mc.setTransform(-0.8,4.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.1,-67,288,134);
p.frameBounds = [rect];


(lib.hero_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.hero_eyes1();

	this.body_2 = new lib.hero_eyes2();
	this.body_2.setTransform(0.4,-3.6);

	this.body_3 = new lib.hero_eyes3();
	this.body_3.setTransform(-0.7,4.9);

	this.body_4 = new lib.hero_eyes4();

	this.body_5 = new lib.hero_eyes5();
	this.body_5.setTransform(-0.7,4.9);

	this.body_6 = new lib.hero_eyes6();
	this.body_6.setTransform(0.6,0.1);

	this.body_7 = new lib.hero_eyes7();
	this.body_7.setTransform(0.4,-3.6);

	this.body_8 = new lib.hero_eyes8();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.1,-67,288,134);
p.frameBounds = [rect, new cjs.Rectangle(-140.4,-89.4,282,172), new cjs.Rectangle(-142.4,-48.2,283,106), new cjs.Rectangle(-144.1,-67,288,134), new cjs.Rectangle(-142.4,-48.2,283,106), new cjs.Rectangle(-139.4,-82.8,280,166), new cjs.Rectangle(-84.5,-89.4,168,172), new cjs.Rectangle(-144.1,-67,288,134)];


(lib.hero_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hero_body_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_body_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.7,-250.1,316,500.3);
p.frameBounds = [rect];


(lib.hero_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.hero_body_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.7,-250.1,316,500.3);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.head_accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hat1();
	this.instance.setTransform(303.4,-7.2);

	this.instance_1 = new lib.hat2();
	this.instance_1.setTransform(266.9,45.1);

	this.instance_2 = new lib.hat3();
	this.instance_2.setTransform(264.7,-64.8);

	this.instance_3 = new lib.hat4();
	this.instance_3.setTransform(265,-8.7);

	this.instance_4 = new lib.hat5();
	this.instance_4.setTransform(264.8,-39.2);

	this.instance_5 = new lib.hat6();
	this.instance_5.setTransform(264.7,-7.7);

	this.instance_6 = new lib.hat7();
	this.instance_6.setTransform(264.5,-2.2,1,1,0,0,0,0,-0.8);

	this.instance_7 = new lib.hat8();
	this.instance_7.setTransform(318.7,36.1);

	this.instance_8 = new lib.hat9();
	this.instance_8.setTransform(267.1,73.2);

	this.instance_9 = new lib.hat10();
	this.instance_9.setTransform(266.1,-16.2);

	this.instance_10 = new lib.hat11();
	this.instance_10.setTransform(258,-82.3);

	this.instance_11 = new lib.hat12();
	this.instance_11.setTransform(284.9,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(174.3,-114,258,214);
p.frameBounds = [rect, new cjs.Rectangle(131.5,22.8,271,45), new cjs.Rectangle(193.5,-136.2,143,143), new cjs.Rectangle(133.9,-43.7,262,70), new cjs.Rectangle(132,-88.8,266,99), new cjs.Rectangle(111.1,-64.9,307,114), new cjs.Rectangle(79.5,-105.8,370,207), new cjs.Rectangle(127.9,-77.2,382,227), new cjs.Rectangle(118.4,-77.5,297,301), new cjs.Rectangle(57.4,-100.8,419,171), new cjs.Rectangle(69.5,-208.5,377,252), new cjs.Rectangle(125.9,-67.5,318,185), null];


(lib.hand_accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hand_accessory1();

	this.instance_1 = new lib.hand_accessory2();

	this.instance_2 = new lib.hand_accessory3();

	this.instance_3 = new lib.hand_accessory4();

	this.instance_4 = new lib.hand_accessory5_img();
	this.instance_4.setTransform(91,-226.9);

	this.instance_5 = new lib.hand_accessory6_img();
	this.instance_5.setTransform(158.1,-115.1,1,1,22.2);

	this.instance_6 = new lib.hand_accessory7_img();
	this.instance_6.setTransform(110,-163);

	this.instance_7 = new lib.hand_accessory8_img();
	this.instance_7.setTransform(74,-100);

	this.instance_8 = new lib.hand_accessory9_img();
	this.instance_8.setTransform(-273,-79);

	this.instance_9 = new lib.hand_accessory10_img();
	this.instance_9.setTransform(94,-18);

	this.instance_10 = new lib.hand_accessory11_img();
	this.instance_10.setTransform(106,-37);

	this.instance_11 = new lib.hand_accessory12_img();
	this.instance_11.setTransform(144,-80);

	this.instance_12 = new lib.hand_accessory13_img();
	this.instance_12.setTransform(125,-264.9);

	this.instance_13 = new lib.hand_accessory14_img();
	this.instance_13.setTransform(109,-120);

	this.instance_14 = new lib.hand_accessory15_img();
	this.instance_14.setTransform(113,-126);

	this.instance_15 = new lib.hand_accessory16_img();
	this.instance_15.setTransform(115,-141);

	this.instance_16 = new lib.hand_accessory17_img();
	this.instance_16.setTransform(111,-104);

	this.instance_17 = new lib.hand_accessory18_img();
	this.instance_17.setTransform(94,-219);

	this.instance_18 = new lib.hand_accessory19_img();
	this.instance_18.setTransform(90,-77);

	this.instance_19 = new lib.hand_accessory20_img();
	this.instance_19.setTransform(-186,-94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.4,-37.9,327,76);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(91,-226.9,202,304), new cjs.Rectangle(99.8,-115.1,146.3,178.5), new cjs.Rectangle(110,-163,83,174), new cjs.Rectangle(74,-100,163,163), new cjs.Rectangle(-273,-79,139,138), new cjs.Rectangle(94,-18,157,86), new cjs.Rectangle(106,-37,131,102), new cjs.Rectangle(144,-80,172,152), new cjs.Rectangle(125,-264.9,283,340), new cjs.Rectangle(109,-120,157,173), new cjs.Rectangle(113,-126,116,162), new cjs.Rectangle(115,-141,125,174), new cjs.Rectangle(111,-104,183,158), new cjs.Rectangle(94,-219,192,290), new cjs.Rectangle(90,-77,98,107), new cjs.Rectangle(-186,-94,120,111), null];


(lib.hair_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.fringe20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base20();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-40.7,78,81.5);
p.frameBounds = [rect];


(lib.fringe19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base19();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-54.7,277,109.5);
p.frameBounds = [rect];


(lib.fringe18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base18();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-73,63,146);
p.frameBounds = [rect];


(lib.fringe17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base17();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-47,236,94);
p.frameBounds = [rect];


(lib.fringe16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base16();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-83.5,147,167.1);
p.frameBounds = [rect];


(lib.fringe15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base15();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-138,450,276.2);
p.frameBounds = [rect];


(lib.fringe14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base14();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.3,-41.1,385,82.4);
p.frameBounds = [rect];


(lib.fringe13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base13();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-57.4,103.5,115);
p.frameBounds = [rect];


(lib.fringe12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor12();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base12();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174.1,-106.4,348.3,213);
p.frameBounds = [rect];


(lib.fringe11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193.5,-136.9,387,274);
p.frameBounds = [rect];


(lib.fringe10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-207,-149.4,414,299);
p.frameBounds = [rect];


(lib.fringe9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-95.3,292,191);
p.frameBounds = [rect];


(lib.fringe8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.8,-161.5,364,323);
p.frameBounds = [rect];


(lib.fringe7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.1,-124.4,368.3,249);
p.frameBounds = [rect];


(lib.fringe6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor6();
	this.instance.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base_6();
	this.body_mc.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.4,-53.5,71,107);
p.frameBounds = [rect];


(lib.fringe5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.1,-136.1,284.3,272.2);
p.frameBounds = [rect];


(lib.fringe4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base_4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217.5,-189,435.1,378);
p.frameBounds = [rect];


(lib.fringe3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor3();
	this.instance.setTransform(-0.3,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base3();
	this.body_mc.setTransform(-0.3,49.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-236.2,-53.9,472,158);
p.frameBounds = [rect];


(lib.fringe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor2();
	this.instance.setTransform(-1,-34.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base_2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-106.5,164,145);
p.frameBounds = [rect];


(lib.fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.1,-39.2,194.2,79);
p.frameBounds = [rect];


(lib.fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.fringe1();

	this.body_2 = new lib.fringe2();
	this.body_2.setTransform(-0.1,-11.6);

	this.body_3 = new lib.fringe3();
	this.body_3.setTransform(-0.1,-11.6);

	this.body_4 = new lib.fringe4();
	this.body_4.setTransform(0,118.5);

	this.body_5 = new lib.fringe5();
	this.body_5.setTransform(-0.8,45.8);

	this.body_6 = new lib.fringe6();
	this.body_6.setTransform(-2.1,-12.1);

	this.body_7 = new lib.fringe7();
	this.body_7.setTransform(9.5,83.9);

	this.body_8 = new lib.fringe8();
	this.body_8.setTransform(-1.8,139.4);

	this.body_9 = new lib.fringe9();
	this.body_9.setTransform(-2.3,29.2);

	this.body_10 = new lib.fringe10();
	this.body_10.setTransform(3.5,113.9);

	this.body_11 = new lib.fringe11();
	this.body_11.setTransform(10,114.4);

	this.body_12 = new lib.fringe12();
	this.body_12.setTransform(4.7,91.9);

	this.body_13 = new lib.fringe13();
	this.body_13.setTransform(-1.3,-45.5);

	this.body_14 = new lib.fringe14();
	this.body_14.setTransform(0,49.1);

	this.body_15 = new lib.fringe15();
	this.body_15.setTransform(0,135.9);

	this.body_16 = new lib.fringe16();
	this.body_16.setTransform(64.9,54.5);

	this.body_17 = new lib.fringe17();
	this.body_17.setTransform(-1.8,12.9);

	this.body_18 = new lib.fringe18();
	this.body_18.setTransform(-0.8,-4.1);

	this.body_19 = new lib.fringe19();
	this.body_19.setTransform(0.2,57.1);

	this.body_20 = new lib.fringe20();
	this.body_20.setTransform(0.7,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).to({state:[{t:this.body_17}]},1).to({state:[{t:this.body_18}]},1).to({state:[{t:this.body_19}]},1).to({state:[{t:this.body_20}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.1,-39.2,194.2,79);
p.frameBounds = [rect, new cjs.Rectangle(-83.1,-118.2,164,145), new cjs.Rectangle(-236.3,-65.6,472,158), new cjs.Rectangle(-217.5,-70.5,435.1,378), new cjs.Rectangle(-143,-90.3,284.3,272.2), new cjs.Rectangle(-37.5,-65.6,71,107), new cjs.Rectangle(-174.6,-40.5,368.3,249), new cjs.Rectangle(-183.7,-22.1,364,323), new cjs.Rectangle(-148.3,-66.1,292,191), new cjs.Rectangle(-203.5,-35.5,414,299), new cjs.Rectangle(-183.5,-22.5,387,274), new cjs.Rectangle(-169.4,-14.5,348.3,213), new cjs.Rectangle(-53,-103,103.5,115), new cjs.Rectangle(-192.3,8,385,82.4), new cjs.Rectangle(-225,-2.1,450,276.2), new cjs.Rectangle(-8.3,-29.1,147,167.1), new cjs.Rectangle(-119.8,-34.1,236,94), new cjs.Rectangle(-32.3,-77.1,63,146), new cjs.Rectangle(-138.3,2.4,277,109.5), new cjs.Rectangle(-38.3,2.4,78,81.4), null];


(lib.bottom20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base20();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-53.5,272,107.1);
p.frameBounds = [rect];


(lib.bottom19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base19();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-55.2,273,110.4);
p.frameBounds = [rect];


(lib.bottom18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base18();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-53.1,271.5,106.3);
p.frameBounds = [rect];


(lib.bottom17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor17();
	this.instance.setTransform(0,0,1,1,0,0,0,-0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base17();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-53.5,272,107.1);
p.frameBounds = [rect];


(lib.bottom16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor16();
	this.instance.setTransform(0,-0.5,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base16();
	this.body_mc.setTransform(0.5,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186.1,-70.8,372,141);
p.frameBounds = [rect];


(lib.bottom15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base15();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.6,-61.7,317.3,124);
p.frameBounds = [rect];


(lib.bottom14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base14();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.9,-59.9,272,120);
p.frameBounds = [rect];


(lib.bottom13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base13();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.9,-52.8,272,106);
p.frameBounds = [rect];


(lib.bottom12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base12();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178,-72.6,356,145.4);
p.frameBounds = [rect];


(lib.bottom11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-59.7,284,120);
p.frameBounds = [rect];


(lib.bottom10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-46.2,271.5,92.5);
p.frameBounds = [rect];


(lib.bottom9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-66.7,333,133.5);
p.frameBounds = [rect];


(lib.bottom8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-49.5,333,99.1);
p.frameBounds = [rect];


(lib.bottom7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.9,-59.6,356,119.2);
p.frameBounds = [rect];


(lib.bottom6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.3,-49.2,255,98.4);
p.frameBounds = [rect];


(lib.bottom5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.9,-52.8,272,106);
p.frameBounds = [rect];


(lib.bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.7,-66.7,333.4,134);
p.frameBounds = [rect];


(lib.bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.7,-54.3,271.5,109);
p.frameBounds = [rect];


(lib.bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base2();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.1,-50.8,278.4,102);
p.frameBounds = [rect];


(lib.bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bottom_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-59.7,284,120);
p.frameBounds = [rect];


(lib.bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.bottom1();

	this.body_2 = new lib.bottom2();
	this.body_2.setTransform(1.2,-9.3);

	this.body_3 = new lib.bottom3();
	this.body_3.setTransform(1.2,-5.8);

	this.body_4 = new lib.bottom4();
	this.body_4.setTransform(1.8,5.8);

	this.body_5 = new lib.bottom5();
	this.body_5.setTransform(1,-7.3);

	this.body_6 = new lib.bottom6();
	this.body_6.setTransform(1.3,-1.7);

	this.body_7 = new lib.bottom7();
	this.body_7.setTransform(-0.4,-0.5);

	this.body_8 = new lib.bottom8();
	this.body_8.setTransform(3,-10.6);

	this.body_9 = new lib.bottom9();
	this.body_9.setTransform(5,6.6);

	this.body_10 = new lib.bottom10();
	this.body_10.setTransform(1.2,-13.9);

	this.body_11 = new lib.bottom11();

	this.body_12 = new lib.bottom12();
	this.body_12.setTransform(5.5,12.5);

	this.body_13 = new lib.bottom13();
	this.body_13.setTransform(1,-7.3);

	this.body_14 = new lib.bottom14();
	this.body_14.setTransform(1,-0.2);

	this.body_15 = new lib.bottom15();
	this.body_15.setTransform(6,1.1);

	this.body_16 = new lib.bottom16();
	this.body_16.setTransform(6.8,10.2,1,1,0,0,0,0,-0.5);

	this.body_17 = new lib.bottom17();
	this.body_17.setTransform(1.1,-6.6);

	this.body_18 = new lib.bottom18();
	this.body_18.setTransform(1.2,-7);

	this.body_19 = new lib.bottom19();
	this.body_19.setTransform(1.2,-4.9);

	this.body_20 = new lib.bottom20();
	this.body_20.setTransform(1.1,-6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).to({state:[{t:this.body_17}]},1).to({state:[{t:this.body_18}]},1).to({state:[{t:this.body_19}]},1).to({state:[{t:this.body_20}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-59.7,284,120);
p.frameBounds = [rect, new cjs.Rectangle(-138,-60.1,278.4,102), new cjs.Rectangle(-134.5,-60.1,271.5,109), new cjs.Rectangle(-164.9,-61,333.4,134), new cjs.Rectangle(-134.9,-60.1,272,106), new cjs.Rectangle(-126,-50.9,255,98.4), new cjs.Rectangle(-178.4,-60.1,356,119.2), new cjs.Rectangle(-163.5,-60.1,333,99.1), new cjs.Rectangle(-161.5,-60.1,333,133.5), new cjs.Rectangle(-134.5,-60.1,271.5,92.4), new cjs.Rectangle(-141.9,-59.7,284,120), new cjs.Rectangle(-172.5,-60.1,356,145.4), new cjs.Rectangle(-134.9,-60.1,272,106), new cjs.Rectangle(-134.9,-60.1,272,120), new cjs.Rectangle(-152.7,-60.6,317.3,124), new cjs.Rectangle(-179.4,-60.1,372,141), new cjs.Rectangle(-134.6,-60.1,272,107.1), new cjs.Rectangle(-134.5,-60.1,271.5,106.3), new cjs.Rectangle(-135.3,-60.1,273,110.4), new cjs.Rectangle(-134.6,-60.1,272,107.1)];


(lib.body_check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AitFAQiSAAAAiSIAAlbQAAiSCSAAIFbAAQCSAAAACSIAAFbQAACSiSAAgAkEitIAAFbQAABXBXAAIFbAAQBXAAAAhXIAAlbQAAhXhXAAIlbAAQhXAAAABXg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},14).to({rotation:180},15).to({rotation:270},15).to({rotation:360},15).wait(1));

	// graph
	this.instance_1 = new lib.check_subcategory_img();
	this.instance_1.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_check_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AitFAQiSAAAAiSIAAlbQAAiSCSAAIFbAAQCSAAAACSIAAFbQAACSiSAAgAkEitIAAFbQAABXBXAAIFbAAQBXAAAAhXIAAlbQAAhXhXAAIlbAAQhXAAAABXg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},14).to({rotation:180},15).to({rotation:270},15).to({rotation:360},15).wait(1));

	// graph
	this.instance_1 = new lib.check_category_img();
	this.instance_1.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-110,440,220);
p.frameBounds = [rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.blinking_light_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({alpha:0.012},20).wait(1));

	// animation
	this.instance_1 = new lib.blinking_light_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},19).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_reset_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		/*
		
		*/
		console.log("Язык: " + ysdk_obj.environment.i18n.lang);
		try
		{
			if(ysdk_obj.environment.i18n.lang)
			{
				/*
				
				*/
				lang_str = ysdk_obj.environment.i18n.lang;
				/*
				
				*/
				if(lang_str == "en")
				{
					label_str = "en";
				}
				if(lang_str == "ru")
				{
					label_str = "ru";
				}
				if(lang_str == "de")
				{
					label_str = "de";
				}
				if(lang_str == "fr")
				{
					label_str = "fr";
				}
				if(lang_str == "it")
				{
					label_str = "it";
				}
				if(lang_str == "es")
				{
					label_str = "es";
				}
				if(lang_str == "pt")
				{
					label_str = "pt";
				}
				if(lang_str == "tr")
				{
					label_str = "tr";
				}
				if(lang_str == "ja")
				{
					label_str = "ja";
				}
				if(lang_str == "hi")
				{
					label_str = "hi";
				}
				if(lang_str == "ar")
				{
					label_str = "ar";
				}
				if(lang_str == "id")
				{
					label_str = "id";
				}
			}
		}
		catch(event)
		{
			
		}
		finally
		{
			this.body_mc.gotoAndStop(label_str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_reset_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-39.5,180,80);
p.frameBounds = [rect];


(lib.title_random_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		/*
		
		*/
		console.log("Язык: " + ysdk_obj.environment.i18n.lang);
		try
		{
			if(ysdk_obj.environment.i18n.lang)
			{
				/*
				
				*/
				lang_str = ysdk_obj.environment.i18n.lang;
				/*
				
				*/
				if(lang_str == "en")
				{
					label_str = "en";
				}
				if(lang_str == "ru")
				{
					label_str = "ru";
				}
				if(lang_str == "de")
				{
					label_str = "de";
				}
				if(lang_str == "fr")
				{
					label_str = "fr";
				}
				if(lang_str == "it")
				{
					label_str = "it";
				}
				if(lang_str == "es")
				{
					label_str = "es";
				}
				if(lang_str == "pt")
				{
					label_str = "pt";
				}
				if(lang_str == "tr")
				{
					label_str = "tr";
				}
				if(lang_str == "ja")
				{
					label_str = "ja";
				}
				if(lang_str == "hi")
				{
					label_str = "hi";
				}
				if(lang_str == "ar")
				{
					label_str = "ar";
				}
				if(lang_str == "id")
				{
					label_str = "id";
				}
			}
		}
		catch(event)
		{
			
		}
		finally
		{
			this.body_mc.gotoAndStop(label_str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_random_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-39.5,180,80);
p.frameBounds = [rect];


(lib.sound_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_4_mc();
	this.instance.setTransform(7,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.sound_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sound_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.reset_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_reset_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_long_button_img();
	this.instance_1.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.reset_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.reset_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35.5,160,71.1);
p.frameBounds = [rect, new cjs.Rectangle(-90,-40,180,80), new cjs.Rectangle(-80,-35.5,160,71.1), new cjs.Rectangle(-90,-40,180,80)];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-26.2,-26.2,52.5,52.5), new cjs.Rectangle(-30,-30,60,60)];


(lib.random_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_random_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_long_button_img();
	this.instance_1.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180.5,80.5);
p.frameBounds = [rect];


(lib.random_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.random_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35.5,160.4,71.5);
p.frameBounds = [rect, new cjs.Rectangle(-90,-40,180.5,80.5), new cjs.Rectangle(-80,-35.5,160.4,71.5), new cjs.Rectangle(-90,-40,180.5,80.5)];


(lib.play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97,-96.4,193.6,193), new cjs.Rectangle(-98,-95.9,194.1,192), new cjs.Rectangle(-99,-95.4,194.6,191), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-95,-95,190,190)];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.nav_navigation_mc();
	this.prev_mc.setTransform(-90,0,1,1,0,0,180);

	this.next_mc = new lib.nav_navigation_mc();
	this.next_mc.setTransform(90,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// text
	this.title_mc = new lib.title_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1));

	// bg
	this.instance = new lib.bg_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122,-30,244,60);
p.frameBounds = [rect];


(lib.more_games_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_7_mc();
	this.instance.setTransform(97.9,45,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_1 = new lib.more_games_7_mc();
	this.instance_1.setTransform(127.2,56.6,1.553,1.553,0,0,0,3.5,3.9);

	this.instance_2 = new lib.more_games_7_mc();
	this.instance_2.setTransform(117.9,50.5,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_3 = new lib.more_games_7_mc();
	this.instance_3.setTransform(26.9,80,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_4 = new lib.more_games_7_mc();
	this.instance_4.setTransform(56.4,108.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_5 = new lib.more_games_7_mc();
	this.instance_5.setTransform(71.4,113.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_6 = new lib.more_games_11_mc();
	this.instance_6.setTransform(94.6,90.6,0.964,0.964,-15,0,0,22.1,10);

	this.instance_7 = new lib.more_games_13_mc();
	this.instance_7.setTransform(16,64.1,0.987,0.987,60,0,0,11.8,12);

	this.instance_8 = new lib.more_games_13_mc();
	this.instance_8.setTransform(64,100.6,1.051,1.051,0,0,0,11.9,11.9);

	this.instance_9 = new lib.more_games_12_img();
	this.instance_9.setTransform(10.7,37.7);

	this.instance_10 = new lib.more_games_14_mc();
	this.instance_10.setTransform(82,109.1,0.929,0.929,180,0,0,8.3,13.3);

	this.instance_11 = new lib.more_games_9_mc();
	this.instance_11.setTransform(79.8,80.3,1,1,0,0,0,41.1,30);

	this.instance_12 = new lib.more_games_15_mc();
	this.instance_12.setTransform(81.5,45.2,2.743,2.743,0,0,0,3.8,3.8);

	this.instance_13 = new lib.more_games_14_mc();
	this.instance_13.setTransform(53.4,48.6,1.196,1.196,150,0,0,8.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.instance_14 = new lib.more_games_11_img();
	this.instance_14.setTransform(95,33.3,0.897,0.897,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.more_games_4_img();
	this.instance_15.setTransform(26.4,5.4,0.339,0.339,-15);

	this.instance_16 = new lib.more_games_5_img();
	this.instance_16.setTransform(98.4,5.1,0.239,0.239,30);

	this.instance_17 = new lib.more_games_2_img();
	this.instance_17.setTransform(107,0,0.529,0.529,15);

	this.instance_18 = new lib.more_games_3_img();
	this.instance_18.setTransform(44.2,4.7,0.316,0.316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150.7,122.4);
p.frameBounds = [rect];


(lib.more_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_12_mc();
	this.instance.setTransform(-4.8,-46.8,0.322,0.322,0,0,0,25,25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(32));

	// animation
	this.instance_1 = new lib.more_games_12_mc();
	this.instance_1.setTransform(-4.8,25.2,0.322,0.322,0,0,0,25,25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(37));

	// animation
	this.instance_2 = new lib.more_games_12_mc();
	this.instance_2.setTransform(-45.1,-28.6,0.418,0.418,0,0,0,25,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(41));

	// animation
	this.instance_3 = new lib.more_games_12_mc();
	this.instance_3.setTransform(17.9,11.3,0.418,0.418,0,0,0,25,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(48));

	// animation
	this.instance_4 = new lib.more_games_8_mc();
	this.instance_4.setTransform(38.3,-2.7,1,1,-105,0,0,24.9,33.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({rotation:0,x:62.7,y:23.2},11,cjs.Ease.get(1)).wait(54).to({scaleX:0.69,scaleY:0.69,rotation:-105,x:34.8,y:7.2},12,cjs.Ease.get(-1)).to({_off:true},2).wait(8));

	// animation
	this.instance_5 = new lib.more_games_5_mc();
	this.instance_5.setTransform(0.2,-6.5,1.074,0.924,0,0,0,67.1,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({regX:67.2,scaleX:0.96,scaleY:0.83,y:-5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.57,y:-25.8},2).to({regX:67.1,scaleX:1.07,scaleY:0.07,y:-58.5},4).to({_off:true},1).wait(72).to({_off:false},0).to({scaleY:0.92,y:-6.5},7).to({y:-4.5},2).to({y:-6.5},2).wait(3));

	// animation
	this.instance_6 = new lib.more_games_3_mc();
	this.instance_6.setTransform(0.3,21.9,1.074,1.074,0,0,0,67.2,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2,y:20.3},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3,y:21.9},4,cjs.Ease.get(1)).wait(82).to({y:23.9},2).to({y:21.9},2).wait(3));

	// animation
	this.instance_7 = new lib.more_games_4_mc();
	this.instance_7.setTransform(3,2.2,0.815,0.685,0,0,0,75.3,61.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({scaleX:1,scaleY:0.84,x:3.5,y:-3.3},6).to({scaleY:1.09,y:-18.8},6,cjs.Ease.get(1)).to({scaleY:1,y:-13.3},2).wait(58).to({scaleY:0.88,y:-5.7},6).to({regX:75.4,scaleX:0.91,scaleY:0.79,y:1.4},7).to({_off:true},1).wait(7));

	// animation
	this.instance_8 = new lib.more_games_2_mc();
	this.instance_8.setTransform(0.3,6.9,1.074,1.074,0,0,0,67.2,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3},4,cjs.Ease.get(1)).wait(82).to({y:8.9},2).to({y:6.9},2).wait(3));

	// animation
	this.instance_9 = new lib.more_games_6_mc();
	this.instance_9.setTransform(0.2,-61.5,1.074,0.039,0,180,0,67.1,57.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).to({regY:57.1,scaleY:0.29,y:-72.8},5).wait(60).to({regY:57.5,scaleY:0.04,y:-61.5},6,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// graph
	this.instance_10 = new lib.more_games_10_mc();
	this.instance_10.setTransform(2.2,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-59.4,145,139.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-72.2,-59.3,144.9,139.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-71.8,-58.9,144,139.1), new cjs.Rectangle(-70.3,-57.6,142.4,137.8), new cjs.Rectangle(-68,-55.4,140.1,135.6), new cjs.Rectangle(-67.6,-52.3,139.7,132.6), new cjs.Rectangle(-68,-55.5,140.1,135.7), new cjs.Rectangle(-70.4,-58.6,142.5,138.9), new cjs.Rectangle(-71.8,-59.5,144,139.7), new cjs.Rectangle(-72.3,-60.3,146.5,140.6), new cjs.Rectangle(-72.2,-61.3,148.7,141.6), new cjs.Rectangle(-72.2,-62.2,151.1,142.5), new cjs.Rectangle(-72.2,-64.6,151.1,144.8), new cjs.Rectangle(-72.2,-71.8,158.9,152), new cjs.Rectangle(-72.2,-77.7,164.1,158), new cjs.Rectangle(-72.2,-83.3,166.4,163.6), new cjs.Rectangle(-72.2,-89.6,166.5,169.9), new cjs.Rectangle(-72.2,-96,165.6,176.2), new cjs.Rectangle(-72.2,-95.9,164.1,176.2), new cjs.Rectangle(-72.2,-95.9,162.5,176.2), new cjs.Rectangle(-72.2,-95.9,161.1,176.2), new cjs.Rectangle(-72.2,-95.9,160.2,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-96,160.1,176.2), new cjs.Rectangle(-72.2,-95.1,160.6,175.4), new cjs.Rectangle(-72.2,-92.5,161.4,172.7), new cjs.Rectangle(-72.2,-88.1,162.1,168.3), new cjs.Rectangle(-72.2,-82,162.5,162.3), new cjs.Rectangle(-72.2,-74.2,162.4,154.4), new cjs.Rectangle(-72.2,-64.6,161.3,144.8), new cjs.Rectangle(-72.2,-62.2,158.6,142.5), new cjs.Rectangle(-72.2,-61.8,153.8,142), new cjs.Rectangle(-72.2,-61.4,148,141.6), new cjs.Rectangle(-72.2,-61,147.1,141.2), new cjs.Rectangle(-72.2,-60.6,146,140.8), new cjs.Rectangle(-72.2,-60.2,145,140.4), new cjs.Rectangle(-72.2,-59.8,144.9,140), new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.5), new cjs.Rectangle(-72.3,-57.4,145,137.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.6), rect=new cjs.Rectangle(-72.3,-59.4,145,139.6), rect, rect];


(lib.logo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-220,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.instruction_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.instruction_1_mc_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.full_screen_1_mc();

	this.instance_1 = new lib.full_screen_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.free_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.free_games_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-5},5).to({y:0},5).to({y:-5},5).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120)];


(lib.free_games_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.free_games_3_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.free_games_1_mc();
	this.instance_1.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.facebook_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-70,-70,140,140)];


(lib.done_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.done_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), new cjs.Rectangle(-95,-95,190,190)];


(lib.credits_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.credits_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


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
	this.instance_1 = new lib.question_mark_img();
	this.instance_1.setTransform(-27,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_2_img();
	this.instance_2.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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


(lib.again_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.redirect_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(585,115);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// banner
	this.banner_mc = new lib.redirect_2_mc();
	this.banner_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.banner_mc).wait(1));

	// bg
	this.instance = new lib.redirect_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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


(lib.orientation_lock_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_7_mc();
	this.instance.setTransform(-18.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-12,107,24);
p.frameBounds = [rect];


(lib.orientation_lock_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_9_mc();
	this.instance.setTransform(0,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_5_mc();
	this.instance_1.setTransform(0,210);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.orientation_lock_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
p.frameBounds = [rect];


(lib.orientation_lock_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_10_mc();
	this.instance.setTransform(440,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_2_mc();
	this.instance_1.setTransform(210,280.1,0.833,0.833,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_2_mc();
	this.instance_2.setTransform(510,430,0.833,0.833,90);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(85,71.7,633.3,483.3);
p.frameBounds = [rect];


(lib.orientation_lock_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhduAwcMAAAhg2MC7dAAAMAAABg2g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
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


(lib.wings4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing4_1();
	this.instance.setTransform(212.5,0,1,1,0,0,180);

	this.instance_1 = new lib.wing4_1();
	this.instance_1.setTransform(-212.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-129.5,700,205);
p.frameBounds = [rect];


(lib.wings3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing3_1();
	this.instance.setTransform(212.5,0,1,1,0,0,180);

	this.instance_1 = new lib.wing3_1();
	this.instance_1.setTransform(-212.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-282,-96.5,564,246);
p.frameBounds = [rect];


(lib.wings2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing2_1();
	this.instance.setTransform(212.5,0,1,1,0,0,180);

	this.instance_1 = new lib.wing2_1();
	this.instance_1.setTransform(-212.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-374,-88.5,748,175);
p.frameBounds = [rect];


(lib.wings1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1_1();
	this.instance.setTransform(212.5,0,1,1,0,0,180);

	this.instance_1 = new lib.wing1_1();
	this.instance_1.setTransform(-212.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-338,-100.5,676,201);
p.frameBounds = [rect];


(lib.wings_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.wings1();

	this.instance_1 = new lib.wings2();

	this.instance_2 = new lib.wings3();

	this.instance_3 = new lib.wings4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-338,-100.5,676,201);
p.frameBounds = [rect, new cjs.Rectangle(-374,-88.5,748,175), new cjs.Rectangle(-282,-96.5,564,246), new cjs.Rectangle(-350,-129.5,700,205), null];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(133.3,0,0.889,0.889,0,0,180,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.panel_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.bg_2 = new lib.option_bg_2_mc();
	this.bg_2.setTransform(255,95);

	this.bg_1 = new lib.option_bg_1_mc();
	this.bg_1.setTransform(95,95);

	this.bg_4 = new lib.option_bg_4_mc();
	this.bg_4.setTransform(255,255);

	this.bg_3 = new lib.option_bg_3_mc();
	this.bg_3.setTransform(95,255);

	this.bg_6 = new lib.option_bg_6_mc();
	this.bg_6.setTransform(255,95);

	this.bg_5 = new lib.option_bg_5_mc();
	this.bg_5.setTransform(95,95);

	this.bg_8 = new lib.option_bg_8_mc();
	this.bg_8.setTransform(255,255);

	this.bg_7 = new lib.option_bg_7_mc();
	this.bg_7.setTransform(95,255);

	this.bg_10 = new lib.option_bg_10_mc();
	this.bg_10.setTransform(255,95);

	this.bg_9 = new lib.option_bg_9_mc();
	this.bg_9.setTransform(95,95);

	this.bg_12 = new lib.option_bg_12_mc();
	this.bg_12.setTransform(255,255);

	this.bg_11 = new lib.option_bg_11_mc();
	this.bg_11.setTransform(95,255);

	this.bg_14 = new lib.option_bg_14_mc();
	this.bg_14.setTransform(255,95);

	this.bg_13 = new lib.option_bg_13_mc();
	this.bg_13.setTransform(95,95);

	this.bg_15 = new lib.option_bg_15_mc();
	this.bg_15.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_3},{t:this.bg_4},{t:this.bg_1},{t:this.bg_2}]}).to({state:[{t:this.bg_7},{t:this.bg_8},{t:this.bg_5},{t:this.bg_6}]},1).to({state:[{t:this.bg_11},{t:this.bg_12},{t:this.bg_9},{t:this.bg_10}]},1).to({state:[{t:this.bg_15},{t:this.bg_13},{t:this.bg_14}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// no
	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.wings_0).wait(1));

	// options
	this.wings_2 = new lib.option_accessory_wings_2_mc();
	this.wings_2.setTransform(255,95);

	this.wings_1 = new lib.option_accessory_wings_1_mc();
	this.wings_1.setTransform(95,95);

	this.wings_4 = new lib.option_accessory_wings_4_mc();
	this.wings_4.setTransform(255,255);

	this.wings_3 = new lib.option_accessory_wings_3_mc();
	this.wings_3.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wings_3},{t:this.wings_4},{t:this.wings_1},{t:this.wings_2}]}).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect];


(lib.panel_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(5));

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(5));

	// options
	this.accessory_2 = new lib.option_accessory_hand_2_mc();
	this.accessory_2.setTransform(255,95);

	this.accessory_1 = new lib.option_accessory_hand_1_mc();
	this.accessory_1.setTransform(95,95);

	this.accessory_4 = new lib.option_accessory_hand_4_mc();
	this.accessory_4.setTransform(255,255);

	this.accessory_3 = new lib.option_accessory_hand_3_mc();
	this.accessory_3.setTransform(95,255);

	this.accessory_6 = new lib.option_accessory_hand_6_mc();
	this.accessory_6.setTransform(255,95);

	this.accessory_5 = new lib.option_accessory_hand_5_mc();
	this.accessory_5.setTransform(95,95);

	this.accessory_8 = new lib.option_accessory_hand_8_mc();
	this.accessory_8.setTransform(255,255);

	this.accessory_7 = new lib.option_accessory_hand_7_mc();
	this.accessory_7.setTransform(95,255);

	this.accessory_10 = new lib.option_accessory_hand_10_mc();
	this.accessory_10.setTransform(255,95);

	this.accessory_9 = new lib.option_accessory_hand_9_mc();
	this.accessory_9.setTransform(95,95);

	this.accessory_12 = new lib.option_accessory_hand_12_mc();
	this.accessory_12.setTransform(255,255);

	this.accessory_11 = new lib.option_accessory_hand_11_mc();
	this.accessory_11.setTransform(95,255);

	this.accessory_14 = new lib.option_accessory_hand_14_mc();
	this.accessory_14.setTransform(255,95);

	this.accessory_13 = new lib.option_accessory_hand_13_mc();
	this.accessory_13.setTransform(95,95);

	this.accessory_16 = new lib.option_accessory_hand_16_mc();
	this.accessory_16.setTransform(255,255);

	this.accessory_15 = new lib.option_accessory_hand_15_mc();
	this.accessory_15.setTransform(95,255);

	this.accessory_18 = new lib.option_accessory_hand_18_mc();
	this.accessory_18.setTransform(255,95);

	this.accessory_17 = new lib.option_accessory_hand_17_mc();
	this.accessory_17.setTransform(95,95);

	this.accessory_20 = new lib.option_accessory_hand_20_mc();
	this.accessory_20.setTransform(255,255);

	this.accessory_19 = new lib.option_accessory_hand_19_mc();
	this.accessory_19.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_1},{t:this.accessory_2}]}).to({state:[{t:this.accessory_7},{t:this.accessory_8},{t:this.accessory_5},{t:this.accessory_6}]},1).to({state:[{t:this.accessory_11},{t:this.accessory_12},{t:this.accessory_9},{t:this.accessory_10}]},1).to({state:[{t:this.accessory_15},{t:this.accessory_16},{t:this.accessory_13},{t:this.accessory_14}]},1).to({state:[{t:this.accessory_19},{t:this.accessory_20},{t:this.accessory_17},{t:this.accessory_18}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.panel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(3));

	// options
	this.headdress_2 = new lib.option_accessory_head_2_mc();
	this.headdress_2.setTransform(255,95);

	this.headdress_1 = new lib.option_accessory_head_1_mc();
	this.headdress_1.setTransform(95,95);

	this.headdress_4 = new lib.option_accessory_head_4_mc();
	this.headdress_4.setTransform(255,255);

	this.headdress_3 = new lib.option_accessory_head_3_mc();
	this.headdress_3.setTransform(95,255);

	this.headdress_6 = new lib.option_accessory_head_6_mc();
	this.headdress_6.setTransform(255,95);

	this.headdress_5 = new lib.option_accessory_head_5_mc();
	this.headdress_5.setTransform(95,95);

	this.headdress_8 = new lib.option_accessory_head_8_mc();
	this.headdress_8.setTransform(255,255);

	this.headdress_7 = new lib.option_accessory_head_7_mc();
	this.headdress_7.setTransform(95,255);

	this.headdress_10 = new lib.option_accessory_head_10_mc();
	this.headdress_10.setTransform(255,95);

	this.headdress_9 = new lib.option_accessory_head_9_mc();
	this.headdress_9.setTransform(95,95);

	this.headdress_12 = new lib.option_accessory_head_12_mc();
	this.headdress_12.setTransform(255,255);

	this.headdress_11 = new lib.option_accessory_head_11_mc();
	this.headdress_11.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_1},{t:this.headdress_2}]}).to({state:[{t:this.headdress_7},{t:this.headdress_8},{t:this.headdress_5},{t:this.headdress_6}]},1).to({state:[{t:this.headdress_11},{t:this.headdress_12},{t:this.headdress_9},{t:this.headdress_10}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect];


(lib.panel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.shoes_0).wait(4));

	// options
	this.shoes_2 = new lib.option_shoes_2_mc();
	this.shoes_2.setTransform(255,95);

	this.shoes_1 = new lib.option_shoes_1_mc();
	this.shoes_1.setTransform(95,95);

	this.shoes_4 = new lib.option_shoes_4_mc();
	this.shoes_4.setTransform(255,255);

	this.shoes_3 = new lib.option_shoes_3_mc();
	this.shoes_3.setTransform(95,255);

	this.shoes_6 = new lib.option_shoes_6_mc();
	this.shoes_6.setTransform(255,95);

	this.shoes_5 = new lib.option_shoes_5_mc();
	this.shoes_5.setTransform(95,95);

	this.shoes_8 = new lib.option_shoes_8_mc();
	this.shoes_8.setTransform(255,255);

	this.shoes_7 = new lib.option_shoes_7_mc();
	this.shoes_7.setTransform(95,255);

	this.shoes_10 = new lib.option_shoes_10_mc();
	this.shoes_10.setTransform(255,95);

	this.shoes_9 = new lib.option_shoes_9_mc();
	this.shoes_9.setTransform(95,95);

	this.shoes_12 = new lib.option_shoes_12_mc();
	this.shoes_12.setTransform(255,255);

	this.shoes_11 = new lib.option_shoes_11_mc();
	this.shoes_11.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_1},{t:this.shoes_2}]}).to({state:[{t:this.shoes_7},{t:this.shoes_8},{t:this.shoes_5},{t:this.shoes_6}]},1).to({state:[{t:this.shoes_11},{t:this.shoes_12},{t:this.shoes_9},{t:this.shoes_10}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_shoes = new lib.color_picker_mc();
	this.color_shoes.setTransform(15,20);
	this.color_shoes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_shoes).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.socks_0 = new lib.socks_0_mc();
	this.socks_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.socks_0).wait(3));

	// options
	this.socks_2 = new lib.option_socks_2_mc();
	this.socks_2.setTransform(255,95);

	this.socks_1 = new lib.option_socks_1_mc();
	this.socks_1.setTransform(95,95);

	this.socks_4 = new lib.option_socks_4_mc();
	this.socks_4.setTransform(255,255);

	this.socks_3 = new lib.option_socks_3_mc();
	this.socks_3.setTransform(95,255);

	this.socks_6 = new lib.option_socks_6_mc();
	this.socks_6.setTransform(255,95);

	this.socks_5 = new lib.option_socks_5_mc();
	this.socks_5.setTransform(95,95);

	this.socks_8 = new lib.option_socks_8_mc();
	this.socks_8.setTransform(255,255);

	this.socks_7 = new lib.option_socks_7_mc();
	this.socks_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.socks_3},{t:this.socks_4},{t:this.socks_1},{t:this.socks_2}]}).to({state:[{t:this.socks_7},{t:this.socks_8},{t:this.socks_5},{t:this.socks_6}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_socks = new lib.color_picker_mc();
	this.color_socks.setTransform(15,20);
	this.color_socks._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_socks).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect];


(lib.panel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(6));

	// no
	this.pants_0 = new lib.pants_0_mc();
	this.pants_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.pants_0).wait(6));

	// options
	this.pants_2 = new lib.option_bottom_2_mc();
	this.pants_2.setTransform(255,95);

	this.pants_1 = new lib.option_bottom_1_mc();
	this.pants_1.setTransform(95,95);

	this.pants_4 = new lib.option_bottom_4_mc();
	this.pants_4.setTransform(255,255);

	this.pants_3 = new lib.option_bottom_3_mc();
	this.pants_3.setTransform(95,255);

	this.pants_6 = new lib.option_bottom_6_mc();
	this.pants_6.setTransform(255,95);

	this.pants_5 = new lib.option_bottom_5_mc();
	this.pants_5.setTransform(95,95);

	this.pants_8 = new lib.option_bottom_8_mc();
	this.pants_8.setTransform(255,255);

	this.pants_7 = new lib.option_bottom_7_mc();
	this.pants_7.setTransform(95,255);

	this.pants_10 = new lib.option_bottom_10_mc();
	this.pants_10.setTransform(255,95);

	this.pants_9 = new lib.option_bottom_9_mc();
	this.pants_9.setTransform(95,95);

	this.pants_12 = new lib.option_bottom_12_mc();
	this.pants_12.setTransform(255,255);

	this.pants_11 = new lib.option_bottom_11_mc();
	this.pants_11.setTransform(95,255);

	this.pants_14 = new lib.option_bottom_14_mc();
	this.pants_14.setTransform(255,95);

	this.pants_13 = new lib.option_bottom_13_mc();
	this.pants_13.setTransform(95,95);

	this.pants_16 = new lib.option_bottom_16_mc();
	this.pants_16.setTransform(255,255);

	this.pants_15 = new lib.option_bottom_15_mc();
	this.pants_15.setTransform(95,255);

	this.pants_18 = new lib.option_bottom_18_mc();
	this.pants_18.setTransform(255,95);

	this.pants_17 = new lib.option_bottom_17_mc();
	this.pants_17.setTransform(95,95);

	this.pants_20 = new lib.option_bottom_20_mc();
	this.pants_20.setTransform(255,255);

	this.pants_19 = new lib.option_bottom_19_mc();
	this.pants_19.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pants_3},{t:this.pants_4},{t:this.pants_1},{t:this.pants_2}]}).to({state:[{t:this.pants_7},{t:this.pants_8},{t:this.pants_5},{t:this.pants_6}]},1).to({state:[{t:this.pants_11},{t:this.pants_12},{t:this.pants_9},{t:this.pants_10}]},1).to({state:[{t:this.pants_15},{t:this.pants_16},{t:this.pants_13},{t:this.pants_14}]},1).to({state:[{t:this.pants_19},{t:this.pants_20},{t:this.pants_17},{t:this.pants_18}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_pants = new lib.color_picker_mc();
	this.color_pants.setTransform(15,20);
	this.color_pants._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_pants).wait(5).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.panel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(6));

	// no
	this.shirt_0 = new lib.shirt_0_mc();
	this.shirt_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.shirt_0).wait(6));

	// options
	this.shirt_2 = new lib.option_top_2_mc();
	this.shirt_2.setTransform(255,95);

	this.shirt_1 = new lib.option_top_1_mc();
	this.shirt_1.setTransform(95,95);

	this.shirt_4 = new lib.option_top_4_mc();
	this.shirt_4.setTransform(255,255);

	this.shirt_3 = new lib.option_top_3_mc();
	this.shirt_3.setTransform(95,255);

	this.shirt_6 = new lib.option_top_6_mc();
	this.shirt_6.setTransform(255,95);

	this.shirt_5 = new lib.option_top_5_mc();
	this.shirt_5.setTransform(95,95);

	this.shirt_8 = new lib.option_top_8_mc();
	this.shirt_8.setTransform(255,255);

	this.shirt_7 = new lib.option_top_7_mc();
	this.shirt_7.setTransform(95,255);

	this.shirt_10 = new lib.option_top_10_mc();
	this.shirt_10.setTransform(255,95);

	this.shirt_9 = new lib.option_top_9_mc();
	this.shirt_9.setTransform(95,95);

	this.shirt_12 = new lib.option_top_12_mc();
	this.shirt_12.setTransform(255,255);

	this.shirt_11 = new lib.option_top_11_mc();
	this.shirt_11.setTransform(95,255);

	this.shirt_14 = new lib.option_top_14_mc();
	this.shirt_14.setTransform(255,95);

	this.shirt_13 = new lib.option_top_13_mc();
	this.shirt_13.setTransform(95,95);

	this.shirt_16 = new lib.option_top_16_mc();
	this.shirt_16.setTransform(255,255);

	this.shirt_15 = new lib.option_top_15_mc();
	this.shirt_15.setTransform(95,255);

	this.shirt_18 = new lib.option_top_18_mc();
	this.shirt_18.setTransform(255,95);

	this.shirt_17 = new lib.option_top_17_mc();
	this.shirt_17.setTransform(95,95);

	this.shirt_20 = new lib.option_top_20_mc();
	this.shirt_20.setTransform(255,255);

	this.shirt_19 = new lib.option_top_19_mc();
	this.shirt_19.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shirt_3},{t:this.shirt_4},{t:this.shirt_1},{t:this.shirt_2}]}).to({state:[{t:this.shirt_7},{t:this.shirt_8},{t:this.shirt_5},{t:this.shirt_6}]},1).to({state:[{t:this.shirt_11},{t:this.shirt_12},{t:this.shirt_9},{t:this.shirt_10}]},1).to({state:[{t:this.shirt_15},{t:this.shirt_16},{t:this.shirt_13},{t:this.shirt_14}]},1).to({state:[{t:this.shirt_19},{t:this.shirt_20},{t:this.shirt_17},{t:this.shirt_18}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_shirt = new lib.color_picker_mc();
	this.color_shirt.setTransform(15,20);
	this.color_shirt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_shirt).wait(5).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.panel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(6));

	// no
	this.hair_0 = new lib.hair_0_mc();
	this.hair_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.hair_0).wait(6));

	// options
	this.hair_2 = new lib.option_fringe_2_mc();
	this.hair_2.setTransform(255,95);

	this.hair_1 = new lib.option_fringe_1_mc();
	this.hair_1.setTransform(95,95);

	this.hair_4 = new lib.option_fringe_4_mc();
	this.hair_4.setTransform(255,255);

	this.hair_3 = new lib.option_fringe_3_mc();
	this.hair_3.setTransform(95,255);

	this.hair_6 = new lib.option_fringe_6_mc();
	this.hair_6.setTransform(255,95);

	this.hair_5 = new lib.option_fringe_5_mc();
	this.hair_5.setTransform(95,95);

	this.hair_8 = new lib.option_fringe_8_mc();
	this.hair_8.setTransform(255,255);

	this.hair_7 = new lib.option_fringe_7_mc();
	this.hair_7.setTransform(95,255);

	this.hair_10 = new lib.option_fringe_10_mc();
	this.hair_10.setTransform(255,95);

	this.hair_9 = new lib.option_fringe_9_mc();
	this.hair_9.setTransform(95,95);

	this.hair_12 = new lib.option_fringe_12_mc();
	this.hair_12.setTransform(255,255);

	this.hair_11 = new lib.option_fringe_11_mc();
	this.hair_11.setTransform(95,255);

	this.hair_14 = new lib.option_fringe_14_mc();
	this.hair_14.setTransform(255,95);

	this.hair_13 = new lib.option_fringe_13_mc();
	this.hair_13.setTransform(95,95);

	this.hair_16 = new lib.option_fringe_16_mc();
	this.hair_16.setTransform(255,255);

	this.hair_15 = new lib.option_fringe_15_mc();
	this.hair_15.setTransform(95,255);

	this.hair_18 = new lib.option_fringe_18_mc();
	this.hair_18.setTransform(255,95);

	this.hair_17 = new lib.option_fringe_17_mc();
	this.hair_17.setTransform(95,95);

	this.hair_20 = new lib.option_fringe_20_mc();
	this.hair_20.setTransform(255,255);

	this.hair_19 = new lib.option_fringe_19_mc();
	this.hair_19.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_3},{t:this.hair_4},{t:this.hair_1},{t:this.hair_2}]}).to({state:[{t:this.hair_7},{t:this.hair_8},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.hair_11},{t:this.hair_12},{t:this.hair_9},{t:this.hair_10}]},1).to({state:[{t:this.hair_15},{t:this.hair_16},{t:this.hair_13},{t:this.hair_14}]},1).to({state:[{t:this.hair_19},{t:this.hair_20},{t:this.hair_17},{t:this.hair_18}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_hair = new lib.color_picker_mc();
	this.color_hair.setTransform(15,20);
	this.color_hair._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_hair).wait(5).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.panel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.makeup_0 = new lib.makeup_0_mc();
	this.makeup_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.makeup_0).wait(2));

	// options
	this.makeup_2 = new lib.option_face_deco_2_mc();
	this.makeup_2.setTransform(255,95);

	this.makeup_1 = new lib.option_face_deco_1_mc();
	this.makeup_1.setTransform(95,95);

	this.makeup_4 = new lib.option_face_deco_4_mc();
	this.makeup_4.setTransform(255,255);

	this.makeup_3 = new lib.option_face_deco_3_mc();
	this.makeup_3.setTransform(95,255);

	this.makeup_6 = new lib.option_face_deco_6_mc();
	this.makeup_6.setTransform(255,95);

	this.makeup_5 = new lib.option_face_deco_5_mc();
	this.makeup_5.setTransform(95,95);

	this.makeup_8 = new lib.option_face_deco_8_mc();
	this.makeup_8.setTransform(255,255);

	this.makeup_7 = new lib.option_face_deco_7_mc();
	this.makeup_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.makeup_3},{t:this.makeup_4},{t:this.makeup_1},{t:this.makeup_2}]}).to({state:[{t:this.makeup_7},{t:this.makeup_8},{t:this.makeup_5},{t:this.makeup_6}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect];


(lib.panel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.mouth_2 = new lib.option_mouth_2_mc();
	this.mouth_2.setTransform(255,95);

	this.mouth_1 = new lib.option_mouth_1_mc();
	this.mouth_1.setTransform(95,95);

	this.mouth_4 = new lib.option_mouth_4_mc();
	this.mouth_4.setTransform(255,255);

	this.mouth_3 = new lib.option_mouth_3_mc();
	this.mouth_3.setTransform(95,255);

	this.mouth_6 = new lib.option_mouth_6_mc();
	this.mouth_6.setTransform(255,95);

	this.mouth_5 = new lib.option_mouth_5_mc();
	this.mouth_5.setTransform(95,95);

	this.mouth_8 = new lib.option_mouth_8_mc();
	this.mouth_8.setTransform(255,255);

	this.mouth_7 = new lib.option_mouth_7_mc();
	this.mouth_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mouth_3},{t:this.mouth_4},{t:this.mouth_1},{t:this.mouth_2}]}).to({state:[{t:this.mouth_7},{t:this.mouth_8},{t:this.mouth_5},{t:this.mouth_6}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect];


(lib.panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// palette
	this.color_skin = new lib.color_picker_mc();
	this.color_skin.setTransform(15,20);

	this.timeline.addTween(cjs.Tween.get(this.color_skin).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect];


(lib.option_eyes_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_eyes8();
	this.instance.setTransform(0.1,1,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_eyes7();
	this.instance.setTransform(0.4,-0.1,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_eyes6();
	this.instance.setTransform(0,1,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_eyes5();
	this.instance.setTransform(0.1,1.1,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_eyes4();
	this.instance.setTransform(0.1,1,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_eyes3();
	this.instance.setTransform(0.1,1.1,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_eyes2();
	this.instance.setTransform(0,0.9,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.hero_eyes1();
	this.instance.setTransform(0.1,1,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(-133.3,0,0.889,0.889,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.5,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.eyes = new lib.hero_eyes_all();
	this.eyes.setTransform(1,-101.1);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// headdress
	this.headdress = new lib.head_accessory_all();
	this.headdress.setTransform(44.6,-206.2,1,1,0,0,0,310,-7);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// hair
	this.hair = new lib.fringe_all();
	this.hair.setTransform(0.9,-234.3);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// mouth
	this.mouth = new lib.hero_mouth_all();
	this.mouth.setTransform(1.1,7);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// shirt
	this.shirt = new lib.top_all();
	this.shirt.setTransform(0.9,77.9);

	this.timeline.addTween(cjs.Tween.get(this.shirt).wait(1));

	// pants
	this.pants = new lib.bottom_all();
	this.pants.setTransform(0.1,181.7);

	this.timeline.addTween(cjs.Tween.get(this.pants).wait(1));

	// accessory
	this.accessory = new lib.hand_accessory_all();
	this.accessory.setTransform(0,205);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// shoes
	this.shoes = new lib.shoes_all();
	this.shoes.setTransform(1.5,251.5);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// socks
	this.socks = new lib.socks_all();
	this.socks.setTransform(1.2,240.1);

	this.timeline.addTween(cjs.Tween.get(this.socks).wait(1));

	// makeup
	this.makeup = new lib.scar_all();
	this.makeup.setTransform(1,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.makeup).wait(1));

	// skin
	this.skin = new lib.hero_body();
	this.skin.setTransform(1.4,20.5);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// wings
	this.wings = new lib.wings_all();
	this.wings.setTransform(0.9,8);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-337.1,-313.3,676,587);
p.frameBounds = [rect];


(lib.hero_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_body
	this.instance = new lib.hm();
	this.instance.setTransform(-182.8,-335.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.wings2();
	this.instance_1.setTransform(0.9,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-373.1,-335.5,748,609);
p.frameBounds = [rect];


(lib.check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.body_check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect, null];


(lib.check_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.body_check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect, null];


(lib.category_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_4_img();
	this.instance.setTransform(-30,-28,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_img();
	this.instance.setTransform(-22,-23,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_img();
	this.instance.setTransform(-23,-23,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_img();
	this.instance.setTransform(-24,-24,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
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
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.blinking_light_4_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.blinking_light_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.sound_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.sound_1_mc();

	this.instance_1 = new lib.sound_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApNOEQhXgBg9g9Qg9g+gBhWIAA1jQABhWA9g+QA9g9BXgBISbAAQBWABA+A9QA9A+ABBWIAAVjQgBBWg9A+Qg+A9hWABg");
	this.shape.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(0,0,0.909,0.909);

	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,scaleY:0.909,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,472.7,461.7);
p.frameBounds = [rect, new cjs.Rectangle(-110,-40,220,80), new cjs.Rectangle(-100,-36.3,200,72.7), new cjs.Rectangle(-110,-40,220,80)];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.free_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.done_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.RedirectScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.redirect_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


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


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
p.frameBounds = [rect];


(lib.subcategory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_4_1_img();
	this.instance.setTransform(-30,-28,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_3_img();
	this.instance.setTransform(-23,-21,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_2_img();
	this.instance.setTransform(-22,-23,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_1_img();
	this.instance.setTransform(-24,-24,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_4_img();
	this.instance.setTransform(-23,-22,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_3_img();
	this.instance.setTransform(-24,-24,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_2_img();
	this.instance.setTransform(-23,-22,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_1_img();
	this.instance.setTransform(-23,-22,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_5_img();
	this.instance.setTransform(-22,-22,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_4_img();
	this.instance.setTransform(-25,-25,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_3_img();
	this.instance.setTransform(-21,-20,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_2_img();
	this.instance.setTransform(-24,-24,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_1_img();
	this.instance.setTransform(-24,-24,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(130,560,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(400,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.eyes_2 = new lib.option_eyes_2_mc();
	this.eyes_2.setTransform(255,95);

	this.eyes_1 = new lib.option_eyes_1_mc();
	this.eyes_1.setTransform(95,95);

	this.eyes_4 = new lib.option_eyes_4_mc();
	this.eyes_4.setTransform(255,255);

	this.eyes_3 = new lib.option_eyes_3_mc();
	this.eyes_3.setTransform(95,255);

	this.eyes_6 = new lib.option_eyes_6_mc();
	this.eyes_6.setTransform(255,95);

	this.eyes_5 = new lib.option_eyes_5_mc();
	this.eyes_5.setTransform(95,95);

	this.eyes_8 = new lib.option_eyes_8_mc();
	this.eyes_8.setTransform(255,255);

	this.eyes_7 = new lib.option_eyes_7_mc();
	this.eyes_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_1},{t:this.eyes_2}]}).to({state:[{t:this.eyes_7},{t:this.eyes_8},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_eyes = new lib.color_picker_mc();
	this.color_eyes.setTransform(15,20);
	this.color_eyes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_eyes).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.hero_main_mc();
	this.instance.setTransform(400,320,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.hill_mc();
	this.instance_1.setTransform(400,590);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,18.1,1200,702);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_4_mc();
	this.instance.setTransform(372,378,0.6,0.6);

	this.instance_1 = new lib.blinking_light_4_mc();
	this.instance_1.setTransform(215.1,96,0.6,0.6,0,0,0,0.1,0);

	this.instance_2 = new lib.blinking_light_4_mc();
	this.instance_2.setTransform(52,105,0.8,0.8);

	this.instance_3 = new lib.blinking_light_4_mc();
	this.instance_3.setTransform(207,379);

	this.instance_4 = new lib.blinking_light_4_mc();
	this.instance_4.setTransform(132,212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.curtain_2_img();
	this.instance_5.setTransform(-300,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,0,900,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_4_mc();
	this.instance.setTransform(368,451,0.8,0.8);

	this.instance_1 = new lib.blinking_light_4_mc();
	this.instance_1.setTransform(248,225,0.6,0.6);

	this.instance_2 = new lib.blinking_light_4_mc();
	this.instance_2.setTransform(479,464);

	this.instance_3 = new lib.blinking_light_4_mc();
	this.instance_3.setTransform(572,406,0.8,0.8);

	this.instance_4 = new lib.blinking_light_4_mc();
	this.instance_4.setTransform(368,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900,600);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// curtain_1
	this.instance = new lib.curtain_1_mc();
	this.instance.setTransform(-800,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0},18).wait(9).to({x:-800},31).wait(1));

	// curtain_2
	this.instance_1 = new lib.curtain_2_mc();
	this.instance_1.setTransform(1400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:600},18).wait(9).to({x:1400},31).wait(1));

	// bg
	this.instance_2 = new lib.curtain_3_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(9).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-800,0,2800,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-755.5,0,2711.1,600), new cjs.Rectangle(-711.1,0,2622.2,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-622.2,0,2444.4,600), new cjs.Rectangle(-577.8,0,2355.6,600), new cjs.Rectangle(-533.3,0,2266.7,600), new cjs.Rectangle(-488.9,0,2177.8,600), new cjs.Rectangle(-444.4,0,2088.9,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-355.5,0,1911.1,600), new cjs.Rectangle(-311.1,0,1822.2,600), new cjs.Rectangle(-266.6,0,1733.3,600), new cjs.Rectangle(-222.2,0,1644.4,600), new cjs.Rectangle(-177.8,0,1555.6,600), new cjs.Rectangle(-133.3,0,1466.7,600), new cjs.Rectangle(-88.9,0,1377.8,600), new cjs.Rectangle(-44.4,0,1288.9,600), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-25.8,0,1251.6,600), new cjs.Rectangle(-51.6,0,1303.2,600), new cjs.Rectangle(-77.4,0,1354.8,600), new cjs.Rectangle(-103.2,0,1406.5,600), new cjs.Rectangle(-129,0,1458.1,600), new cjs.Rectangle(-154.8,0,1509.7,600), new cjs.Rectangle(-180.6,0,1561.3,600), new cjs.Rectangle(-206.4,0,1612.9,600), new cjs.Rectangle(-232.2,0,1664.5,600), new cjs.Rectangle(-258,0,1716.1,600), new cjs.Rectangle(-283.9,0,1767.8,600), new cjs.Rectangle(-309.7,0,1819.4,600), new cjs.Rectangle(-335.5,0,1871,600), new cjs.Rectangle(-361.3,0,1922.6,600), new cjs.Rectangle(-387.1,0,1974.2,600), new cjs.Rectangle(-412.9,0,2025.8,600), new cjs.Rectangle(-438.7,0,2077.4,600), new cjs.Rectangle(-464.5,0,2129,600), new cjs.Rectangle(-490.3,0,2180.6,600), new cjs.Rectangle(-516.1,0,2232.3,600), new cjs.Rectangle(-541.9,0,2283.9,600), new cjs.Rectangle(-567.7,0,2335.5,600), new cjs.Rectangle(-593.5,0,2387.1,600), new cjs.Rectangle(-619.3,0,2438.7,600), new cjs.Rectangle(-645.1,0,2490.3,600), new cjs.Rectangle(-670.9,0,2541.9,600), new cjs.Rectangle(-696.8,0,2593.6,600), new cjs.Rectangle(-722.6,0,2645.2,600), new cjs.Rectangle(-748.4,0,2696.8,600), new cjs.Rectangle(-774.2,0,2748.4,600), new cjs.Rectangle(-800,0,2800,600)];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_4_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,800,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(640,700);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(160,700);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.facebook_btn}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1245.7);
p.frameBounds = [rect];


(lib.panels_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hero_1_category_1_subcategory_1:0,hero_1_category_1_subcategory_2:1,hero_1_category_1_subcategory_3:2,hero_1_category_1_subcategory_4:3,hero_1_category_1_subcategory_5:4,hero_1_category_2_subcategory_1:5,hero_1_category_2_subcategory_2:6,hero_1_category_2_subcategory_3:7,hero_1_category_2_subcategory_4:8,hero_1_category_3_subcategory_1:9,hero_1_category_3_subcategory_2:10,hero_1_category_3_subcategory_3:11,hero_1_category_4_subcategory_1:12});

	// category
	this.category_4 = new lib.category_4_mc();
	this.category_4.setTransform(-40,245);

	this.category_3 = new lib.category_3_mc();
	this.category_3.setTransform(-40,175);

	this.category_2 = new lib.category_2_mc();
	this.category_2.setTransform(-40,105);

	this.category_1 = new lib.category_1_mc();
	this.category_1.setTransform(-40,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.category_1},{t:this.category_2},{t:this.category_3},{t:this.category_4}]}).wait(13));

	// subcategory
	this.subcategory_4_1 = new lib.subcategory_1_4_mc();
	this.subcategory_4_1.setTransform(170,-40);

	this.subcategory_5_1 = new lib.subcategory_1_5_mc();
	this.subcategory_5_1.setTransform(240,-40);

	this.subcategory_3_1 = new lib.subcategory_1_3_mc();
	this.subcategory_3_1.setTransform(100,-40);

	this.subcategory_2_1 = new lib.subcategory_1_2_mc();
	this.subcategory_2_1.setTransform(30,-40);

	this.subcategory_1_1 = new lib.subcategory_1_1_mc();
	this.subcategory_1_1.setTransform(-40,-40);

	this.subcategory_4_2 = new lib.subcategory_2_4_mc();
	this.subcategory_4_2.setTransform(240,-40);

	this.subcategory_3_2 = new lib.subcategory_2_3_mc();
	this.subcategory_3_2.setTransform(170,-40);

	this.subcategory_2_2 = new lib.subcategory_2_2_mc();
	this.subcategory_2_2.setTransform(100,-40);

	this.subcategory_1_2 = new lib.subcategory_2_1_mc();
	this.subcategory_1_2.setTransform(30,-40);

	this.subcategory_3_3 = new lib.subcategory_3_3_mc();
	this.subcategory_3_3.setTransform(170,-40);

	this.subcategory_2_3 = new lib.subcategory_3_2_mc();
	this.subcategory_2_3.setTransform(100,-40);

	this.subcategory_1_3 = new lib.subcategory_3_1_mc();
	this.subcategory_1_3.setTransform(30,-40);

	this.subcategory_1_4 = new lib.subcategory_4_1_mc();
	this.subcategory_1_4.setTransform(30,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subcategory_1_1},{t:this.subcategory_2_1},{t:this.subcategory_3_1},{t:this.subcategory_5_1},{t:this.subcategory_4_1}]}).to({state:[{t:this.subcategory_1_2},{t:this.subcategory_2_2},{t:this.subcategory_3_2},{t:this.subcategory_4_2}]},5).to({state:[{t:this.subcategory_1_3},{t:this.subcategory_2_3},{t:this.subcategory_3_3}]},4).to({state:[{t:this.subcategory_1_4}]},3).wait(1));

	// panels
	this.panel_1 = new lib.panel_1_mc();

	this.panel_2 = new lib.panel_2_mc();

	this.panel_3 = new lib.panel_3_mc();

	this.panel_4 = new lib.panel_4_mc();

	this.panel_5 = new lib.panel_5_mc();

	this.panel_6 = new lib.panel_6_mc();

	this.panel_7 = new lib.panel_7_mc();

	this.panel_8 = new lib.panel_8_mc();

	this.panel_9 = new lib.panel_9_mc();

	this.panel_10 = new lib.panel_10_mc();

	this.panel_11 = new lib.panel_11_mc();

	this.panel_12 = new lib.panel_12_mc();

	this.panel_13 = new lib.panel_13_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.panel_1}]}).to({state:[{t:this.panel_2}]},1).to({state:[{t:this.panel_3}]},1).to({state:[{t:this.panel_4}]},1).to({state:[{t:this.panel_5}]},1).to({state:[{t:this.panel_6}]},1).to({state:[{t:this.panel_7}]},1).to({state:[{t:this.panel_8}]},1).to({state:[{t:this.panel_9}]},1).to({state:[{t:this.panel_10}]},1).to({state:[{t:this.panel_11}]},1).to({state:[{t:this.panel_12}]},1).to({state:[{t:this.panel_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-190,440,645);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-85,-190,445,645), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,-190,440,645)];


(lib.ConstructorScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(395,540,0.688,0.688);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.reset_btn = new lib.reset_btn();
	this.reset_btn.setTransform(535,540);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.reset_btn(), 3);

	this.random_btn = new lib.random_btn();
	this.random_btn.setTransform(695,540);
	new cjs.ButtonHelper(this.random_btn, 0, 1, 2, false, new lib.random_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.random_btn},{t:this.reset_btn},{t:this.done_btn}]}).wait(1));

	// panels
	this.panels_mc = new lib.panels_mc();
	this.panels_mc.setTransform(440,90);

	this.timeline.addTween(cjs.Tween.get(this.panels_mc).wait(1));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(190,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// podium
	this.podium_mc = new lib.podium_mc();
	this.podium_mc.setTransform(190,550,1,1,0,0,0,0,-60);

	this.timeline.addTween(cjs.Tween.get(this.podium_mc).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1251.8);
p.frameBounds = [rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1000,0,2800,600);
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
		_createBubblesFunc(20);
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
	this.instance.setTransform(600,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,670);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(590,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.301;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(391.1,311.8,1,1,0,0,0,391.1,311.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_6_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9);
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

	this.instance_3 = new lib.ConstructorScreen();

	this.instance_4 = new lib.RedirectScreen();

	this.instance_5 = new lib.ResultScreen();

	this.instance_6 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(245,50);

	this.instance_7 = new lib.Cursor();
	this.instance_7.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_8 = new lib.OrientationLockScreen();

	this.instance_9 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_7},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1251.8), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1245.7), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,15,250,70), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1000,0,2800,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect];


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