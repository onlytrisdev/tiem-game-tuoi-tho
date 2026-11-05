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
		{src:"library/images/storage_atlas_10.png", id:"storage_atlas_10"},
		{src:"library/images/storage_atlas_11.png", id:"storage_atlas_11"},
		{src:"library/images/storage_atlas_12.png", id:"storage_atlas_12"},
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"},
		{src:"library/images/storage_atlas_14.png", id:"storage_atlas_14"},
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"},
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"},
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"},
		{src:"library/images/storage_atlas_18.png", id:"storage_atlas_18"},
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"},
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[775,0,518,972],[0,0,773,721]]},
		{name:"storage_atlas_6", frames: [[0,0,715,623],[717,0,473,841]]},
		{name:"storage_atlas_7", frames: [[469,0,600,600],[469,602,600,600],[0,0,467,779]]},
		{name:"storage_atlas_8", frames: [[889,0,364,845],[0,0,480,744],[482,0,405,809]]},
		{name:"storage_atlas_9", frames: [[372,0,470,493],[0,0,370,808],[0,810,1200,200]]},
		{name:"storage_atlas_10", frames: [[0,0,548,410],[550,0,518,413],[0,412,430,491],[844,415,450,450],[432,415,410,510]]},
		{name:"storage_atlas_11", frames: [[428,405,471,404],[0,0,426,456],[428,0,473,403],[824,811,356,469],[389,811,433,431],[903,0,353,523],[0,811,387,484]]},
		{name:"storage_atlas_12", frames: [[0,0,460,360],[462,0,460,360],[462,724,460,360],[0,362,460,360],[0,724,460,360],[462,362,460,360]]},
		{name:"storage_atlas_13", frames: [[835,434,435,310],[0,402,500,300],[502,402,331,449],[764,853,300,442],[864,0,368,432],[462,0,400,400],[0,853,380,380],[382,853,380,380],[0,0,460,360]]},
		{name:"storage_atlas_14", frames: [[952,579,178,480],[748,658,202,436],[0,404,303,398],[913,262,297,315],[305,404,290,379],[0,804,324,354],[913,0,380,260],[597,320,263,336],[307,0,282,388],[0,0,305,402],[591,0,320,318],[326,785,415,227],[326,1014,420,211]]},
		{name:"storage_atlas_15", frames: [[0,0,196,427],[198,245,327,211],[198,0,331,243],[831,0,261,283],[527,259,260,260],[789,285,260,260],[0,458,260,260],[262,458,260,260],[524,521,260,260],[786,547,260,260],[262,982,260,260],[524,783,260,260],[0,720,260,260],[786,809,260,260],[0,982,260,260],[262,720,260,260],[531,0,298,257]]},
		{name:"storage_atlas_16", frames: [[610,262,200,300],[262,712,200,300],[1048,0,188,328],[262,524,346,186],[0,1048,297,217],[812,262,218,237],[0,0,260,260],[0,262,260,260],[763,988,230,210],[995,966,230,210],[531,924,230,210],[299,1014,230,210],[763,776,230,210],[1032,330,230,210],[928,542,230,210],[995,754,230,210],[696,564,230,210],[464,712,230,210],[0,524,260,260],[0,786,260,260],[262,0,260,260],[262,262,260,260],[524,0,260,260],[786,0,260,260]]},
		{name:"storage_atlas_17", frames: [[232,0,230,210],[232,1060,230,210],[464,0,230,210],[232,212,230,210],[464,212,230,210],[232,636,230,210],[464,424,230,210],[464,636,230,210],[464,848,230,210],[232,424,230,210],[464,1060,230,210],[232,848,230,210],[696,424,230,210],[696,0,230,210],[696,636,230,210],[696,212,230,210],[0,0,230,210],[0,636,230,210],[0,848,230,210],[0,424,230,210],[0,1060,230,210],[0,212,230,210],[696,848,230,210],[696,1060,230,210],[928,324,240,180],[928,688,240,180],[928,142,240,180],[928,1052,240,180],[928,506,240,180],[928,870,240,180],[928,0,320,140]]},
		{name:"storage_atlas_18", frames: [[918,339,190,190],[1106,0,190,190],[726,0,186,195],[726,197,259,140],[967,900,239,143],[484,886,259,156],[613,546,236,154],[851,531,288,123],[987,192,287,124],[745,894,220,160],[745,702,190,190],[1110,318,186,188],[484,1044,194,178],[914,0,190,190],[726,339,190,190],[967,1045,171,191],[680,1056,285,120],[937,656,285,120],[967,778,285,120],[680,1178,285,120],[484,364,240,180],[484,182,240,180],[484,0,240,180],[0,546,240,180],[242,728,240,180],[0,364,240,180],[242,364,240,180],[242,910,240,180],[0,910,240,180],[242,1092,240,180],[0,1092,240,180],[242,0,240,180],[242,546,240,180],[0,0,240,180],[0,728,240,180],[242,182,240,180],[0,182,240,180],[484,546,127,338]]},
		{name:"storage_atlas_19", frames: [[0,364,180,180],[990,891,120,120],[868,891,120,120],[746,878,120,120],[953,1098,139,89],[182,182,180,180],[1112,891,120,120],[549,850,72,157],[1219,1013,72,160],[342,923,192,94],[953,1013,162,83],[0,546,157,202],[0,750,251,112],[342,681,252,81],[837,404,240,107],[1094,1131,106,107],[342,764,231,84],[375,1101,223,69],[1059,0,233,116],[1117,1013,100,116],[624,482,168,132],[182,364,193,150],[0,1139,184,143],[955,652,174,115],[286,850,261,71],[552,327,283,91],[841,125,286,92],[553,125,286,103],[552,230,297,95],[851,219,287,91],[0,1044,291,93],[375,1172,247,59],[600,1122,237,48],[182,0,180,180],[868,1013,83,173],[377,482,203,115],[624,760,120,120],[898,769,120,120],[624,882,120,120],[1020,769,120,120],[776,756,120,120],[969,1240,180,60],[564,1009,180,60],[787,1232,180,60],[342,599,280,80],[342,1019,220,80],[0,962,340,80],[976,513,157,137],[624,616,150,142],[1227,280,50,297],[364,0,187,171],[186,1139,187,132],[364,173,186,159],[1140,118,160,160],[794,513,180,120],[776,635,177,119],[182,516,120,120],[0,0,180,180],[0,182,180,180],[787,1189,265,41],[0,864,284,96],[159,638,133,89],[377,420,410,60],[851,312,290,90],[746,1000,120,120],[1142,572,44,295],[1188,579,44,282],[375,1233,410,30],[553,0,251,123],[1143,280,82,290],[806,0,251,123]]},
		{name:"storage_atlas_20", frames: [[878,37,9,54],[889,37,6,64],[102,419,44,29],[0,62,100,100],[102,62,100,100],[204,62,100,100],[306,62,100,100],[408,62,100,100],[510,114,100,100],[776,37,100,100],[541,462,109,52],[494,626,41,48],[944,601,65,67],[728,599,61,63],[484,300,82,108],[644,37,130,78],[546,0,96,112],[568,307,103,81],[682,385,79,84],[135,532,74,69],[102,488,133,42],[343,164,133,42],[395,506,133,42],[845,487,133,42],[530,516,133,42],[845,531,133,42],[0,532,133,42],[324,456,69,84],[673,307,108,76],[644,0,301,35],[0,384,240,33],[0,576,90,50],[636,599,90,50],[237,488,77,67],[219,623,48,48],[395,456,48,48],[878,575,64,72],[791,575,85,55],[816,139,80,124],[0,0,180,60],[364,0,180,60],[182,0,180,60],[102,456,220,30],[664,651,40,40],[585,219,65,36],[934,212,46,201],[318,616,25,111],[999,0,25,111],[291,616,25,111],[345,616,25,111],[399,616,25,111],[372,616,25,111],[0,266,93,12],[652,241,83,22],[452,626,40,55],[982,361,40,43],[934,37,10,11],[470,410,69,94],[0,419,100,73],[92,603,57,60],[0,164,99,100],[999,113,23,38],[510,62,31,31],[711,471,50,50],[982,212,40,147],[947,0,50,210],[827,265,40,40],[791,632,40,40],[791,533,40,40],[404,342,40,40],[833,632,40,40],[0,628,40,40],[42,628,40,40],[875,649,40,40],[580,626,40,40],[622,651,40,40],[478,164,28,28],[426,616,24,97],[999,178,20,23],[999,153,21,23],[763,451,80,80],[711,533,78,64],[316,550,78,64],[211,557,78,64],[396,550,78,64],[476,560,78,64],[556,560,78,64],[151,603,40,85],[980,487,44,112],[665,471,44,122],[783,307,112,70],[356,384,112,70],[783,379,112,70],[897,415,112,70],[242,384,112,70],[568,390,112,70],[869,265,24,24],[612,117,100,100],[537,626,41,41],[898,37,34,281],[343,216,240,40],[585,265,240,40],[0,290,240,40],[242,300,240,40],[101,164,240,40],[101,206,240,40],[101,248,240,40],[343,258,240,40],[202,342,200,40],[0,332,200,40],[714,139,100,100],[193,623,24,97]]}
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
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arr1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arr2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_ny_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body0 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_hair_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_makeup = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cap_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.check_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.check_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.check_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.check_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.clock1 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.coat01 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.coat02 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.coat03 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.coatb1 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.coatb2 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.coatb3 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.crack_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.creme1 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.creme_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cube = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cube1 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dr1 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dr10 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dr11 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dr12 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dr2 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dr3 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dr4 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dr5 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dr6 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dr7 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dr8 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dr9 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.drops1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.drops2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.drops3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.drops4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.els_crown1 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.els_crown2 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.els_crown3 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.els_crown4 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.els_crown5 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.els_crown6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.els_earr1 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.els_earr1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.els_earr2 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.els_earr2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.els_earr3 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.els_earr3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.els_earr4 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.els_earr4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.els_earr5 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.els_earr5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.els_earr6 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.els_earr6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.els_hair01_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.els_head_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.els_jw1 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.els_jw2 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.els_jw3 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.els_jw4 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.els_jw5 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.els_jw6 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.els_li0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.els_li1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.els_li2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.els_li3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.els_li4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.els_li5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.els_li6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.els_shad0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.els_shad1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.els_shad2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.els_shad3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.els_shad4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.els_shad5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.els_shad6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.elsa_fringe1 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.elsa_fringe2 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.elsa_fringe3 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.elsa_fringe4 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.elsa_fringe5 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.elsa_fringe6 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.exp_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.eyebag1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.eyebr_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.fmask1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.fmask2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.fmask3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.fmask4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.froze1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hair0 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hair1 = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hair2 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hair3 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair4 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hair5 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hair6 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hanger1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.headmake = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.lipsbad_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.lipstick1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new16_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new22_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lp1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.lp2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.mask = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mask1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.photo_frame_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pimple_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.pinc = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.rastr1 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.rastr2 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.rastr3 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.rastr4 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new16_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_23_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_24_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_25_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_26_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_27_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_28_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_29_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_30_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_31_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_32_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_33_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.sh01_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.sh02_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.sh03_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.shad = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new14_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new25_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new32_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.shoes_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.shoes_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.shoes_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.snow_logo_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.spark1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.spraywater = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.stick3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.stick3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.stick_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.stick_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.table0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.thermal_waterani_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.towel_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.wand1 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wings1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.wings2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.wings3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.wings_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.wings_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.wings_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-160,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-70,320,140);
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


(lib.wings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.wings1_img();
	this.instance.setTransform(261.1,147.1);

	this.instance_1 = new lib.wings2_img();
	this.instance_1.setTransform(319.9,139.4);

	this.instance_2 = new lib.wings3_img();
	this.instance_2.setTransform(253.4,117.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(261.1,147.1,415,227);
p.frameBounds = [rect, new cjs.Rectangle(319.9,139.4,298,257), new cjs.Rectangle(253.4,117.8,420,211), null];


(lib.wardrobe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_img();
	this.instance.setTransform(-205,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-255,410,510);
p.frameBounds = [rect];


(lib.wardrobe_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_1_img();
	this.instance.setTransform(-125.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-61.5,251,123);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-12,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-48.5,24,97);
p.frameBounds = [rect];


(lib.wand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wand1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,338);
p.frameBounds = [rect];


(lib.towel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.towel_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,387,484);
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


(lib.thermal_waterani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.thermal_waterani_img();
	this.instance.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,1.3,82,290);
p.frameBounds = [rect];


(lib.table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// table0.png
	this.instance = new lib.table0_img();
	this.instance.setTransform(624.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// table0.png
	this.instance_1 = new lib.table0_img();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.rastr1();
	this.instance_2.setTransform(739.5,88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 2
	this.instance_3 = new lib.rastr1();
	this.instance_3.setTransform(112.5,88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,875.2,185.1);
p.frameBounds = [rect];


(lib.stick3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.stick3_2_img();
	this.instance.setTransform(-4.6,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.6,-14.3,44,295);
p.frameBounds = [rect];


(lib.stick3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.stick3_img();
	this.instance.setTransform(-5.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.5,0,44,282);
p.frameBounds = [rect];


(lib.stick_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_2_img();
	this.instance.setTransform(-205,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-15,410,30);
p.frameBounds = [rect];


(lib.stick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stick_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,34,281);
p.frameBounds = [rect];


(lib.spray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.rastr3();
	this.instance.setTransform(122.1,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.spraywater();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,320,318);
p.frameBounds = [rect];


(lib.spark1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spark1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,41,41);
p.frameBounds = [rect];


(lib.snw1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBwQgFgFAFgFIAQgQIAAgTIgWAWQgFAFgEgFQgFgFAFgEIAfggIAAgNIgKAAIgCAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgFgIIgMAGIgMAsQgBAFgHgBQgGgCACgGIAHgeIgQAKIgGAWQgCAGgGgCQgHgCACgGIAFgSIgSgEQgDgBgCgDQgBgCABgDQACgGAGABIAWAGIARgJIgegIQgGgDABgGQACgGAHACIAqALIAMgHIgFgIIgBgDIABgCIAFgIIgMgHIgrAMQgGABgCgHQgBgGAGgBIAegIIgRgKIgWAFQgGADgCgHQgCgGAHgCIASgFIgFgSQgCgHAHgBQAGgCACAHIAGAVIARAKIgIgeQgCgGAGgCQAHgCACAHIALAqIAMAHIADgFIADgFQACgBADAAIAJAAIAAgOIgfgfQgDgCABgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQACgCACgBQADAAACACIAWAWIAAgUIgQgQQgCgCAAgCQAAgDACgCQAAAAABgBQAAAAABAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAIAMANIANgNQAEgFAFAFQAFAFgFAEIgQAQIAAAUIAWgWQACgCADAAQADABACACQAEAEgEAFIggAfIAAAOIAJAAQADAAACABIADAFIADAFIAMgHIAMgqQAAgEADgBIAFAAQAGACgBAGIgIAeIARgKIAFgVQABgDADgCQACgBADABQAGABgCAHIgEASIASAFQAGACgCAGQgCAHgGgDIgWgFIgRAKIAeAIQAHABgCAGQgCAHgGgBIgrgMIgMAHIAFAIIABACIgBADIgFAIIAMAHIArgLQAGgCACAGQACAGgHADIgeAIIARAJIAWgGQAGgBACAGQACAHgGACIgSAEIAEASQACAGgGACQgHACgBgGIgGgWIgRgKIAIAeQABAGgGACQgHABgBgFIgMgsIgLgGIgDAGIgFAFIgGABIgHAAIAAANIAgAgQAEAEgEAFQgBAAAAAAQgBABgBAAQAAAAgBAAQAAABgBAAQgDAAgCgCIgWgWIAAATIAQAQQAFAFgFAFQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgDAAgCgCIgNgNIgMANQgCACgCAAQgDAAgCgCgAgXAAIAMAVIAXAAIAMgVIgMgUIgXAAg");
	this.shape.setTransform(10.9,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,21.8,23);
p.frameBounds = [rect];


(lib.shoesall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.sh01_img();
	this.instance.setTransform(0,0.9);

	this.instance_1 = new lib.sh02_img();
	this.instance_1.setTransform(-4.5,-26.6);

	this.instance_2 = new lib.sh03_img();
	this.instance_2.setTransform(-2.5,-34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.9,40,85);
p.frameBounds = [rect, new cjs.Rectangle(-4.5,-26.6,44,112), new cjs.Rectangle(-2.5,-34.7,44,122), null];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-205,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-30,410,60);
p.frameBounds = [rect];


(lib.shadows_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new14_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.shadows_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new32_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.shadows_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new2_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.shadows_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new25_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.shadows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new5_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.set_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.semicircular_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.semicircular_arrow_1_img();
	this.instance.setTransform(-120,-90);

	this.instance_1 = new lib.semicircular_arrow_2_img();
	this.instance_1.setTransform(-120,-90);

	this.instance_2 = new lib.semicircular_arrow_3_img();
	this.instance_2.setTransform(-120,-90);

	this.instance_3 = new lib.semicircular_arrow_4_img();
	this.instance_3.setTransform(-120,-90);

	this.instance_4 = new lib.semicircular_arrow_5_img();
	this.instance_4.setTransform(-120,-90);

	this.instance_5 = new lib.semicircular_arrow_6_img();
	this.instance_5.setTransform(-120,-90);

	this.instance_6 = new lib.semicircular_arrow_7_img();
	this.instance_6.setTransform(-120,-90);

	this.instance_7 = new lib.semicircular_arrow_8_img();
	this.instance_7.setTransform(-120,-90);

	this.instance_8 = new lib.semicircular_arrow_9_img();
	this.instance_8.setTransform(-120,-90);

	this.instance_9 = new lib.semicircular_arrow_10_img();
	this.instance_9.setTransform(-120,-90);

	this.instance_10 = new lib.semicircular_arrow_11_img();
	this.instance_10.setTransform(-120,-90);

	this.instance_11 = new lib.semicircular_arrow_12_img();
	this.instance_11.setTransform(-120,-90);

	this.instance_12 = new lib.semicircular_arrow_13_img();
	this.instance_12.setTransform(-120,-90);

	this.instance_13 = new lib.semicircular_arrow_14_img();
	this.instance_13.setTransform(-120,-90);

	this.instance_14 = new lib.semicircular_arrow_15_img();
	this.instance_14.setTransform(-120,-90);

	this.instance_15 = new lib.semicircular_arrow_16_img();
	this.instance_15.setTransform(-120,-90);

	this.instance_16 = new lib.semicircular_arrow_17_img();
	this.instance_16.setTransform(-120,-90);

	this.instance_17 = new lib.semicircular_arrow_18_img();
	this.instance_17.setTransform(-120,-90);

	this.instance_18 = new lib.semicircular_arrow_19_img();
	this.instance_18.setTransform(-120,-90);

	this.instance_19 = new lib.semicircular_arrow_20_img();
	this.instance_19.setTransform(-120,-90);

	this.instance_20 = new lib.semicircular_arrow_21_img();
	this.instance_20.setTransform(-120,-90);

	this.instance_21 = new lib.semicircular_arrow_22_img();
	this.instance_21.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).wait(3));

	// bg
	this.instance_22 = new lib.semicircular_arrow_0_img();
	this.instance_22.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.round_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.round_arrow_1_img();
	this.instance.setTransform(-115,-105);

	this.instance_1 = new lib.round_arrow_2_img();
	this.instance_1.setTransform(-115,-105);

	this.instance_2 = new lib.round_arrow_3_img();
	this.instance_2.setTransform(-115,-105);

	this.instance_3 = new lib.round_arrow_4_img();
	this.instance_3.setTransform(-115,-105);

	this.instance_4 = new lib.round_arrow_5_img();
	this.instance_4.setTransform(-115,-105);

	this.instance_5 = new lib.round_arrow_6_img();
	this.instance_5.setTransform(-115,-105);

	this.instance_6 = new lib.round_arrow_7_img();
	this.instance_6.setTransform(-115,-105);

	this.instance_7 = new lib.round_arrow_8_img();
	this.instance_7.setTransform(-115,-105);

	this.instance_8 = new lib.round_arrow_9_img();
	this.instance_8.setTransform(-115,-105);

	this.instance_9 = new lib.round_arrow_10_img();
	this.instance_9.setTransform(-115,-105);

	this.instance_10 = new lib.round_arrow_11_img();
	this.instance_10.setTransform(-115,-105);

	this.instance_11 = new lib.round_arrow_12_img();
	this.instance_11.setTransform(-115,-105);

	this.instance_12 = new lib.round_arrow_13_img();
	this.instance_12.setTransform(-115,-105);

	this.instance_13 = new lib.round_arrow_14_img();
	this.instance_13.setTransform(-115,-105);

	this.instance_14 = new lib.round_arrow_15_img();
	this.instance_14.setTransform(-115,-105);

	this.instance_15 = new lib.round_arrow_16_img();
	this.instance_15.setTransform(-115,-105);

	this.instance_16 = new lib.round_arrow_17_img();
	this.instance_16.setTransform(-115,-105);

	this.instance_17 = new lib.round_arrow_18_img();
	this.instance_17.setTransform(-115,-105);

	this.instance_18 = new lib.round_arrow_19_img();
	this.instance_18.setTransform(-115,-105);
	this.instance_18._off = true;

	this.instance_19 = new lib.round_arrow_20_img();
	this.instance_19.setTransform(-115,-105);

	this.instance_20 = new lib.round_arrow_21_img();
	this.instance_20.setTransform(-115,-105);

	this.instance_21 = new lib.round_arrow_22_img();
	this.instance_21.setTransform(-115,-105);

	this.instance_22 = new lib.round_arrow_23_img();
	this.instance_22.setTransform(-115,-105);

	this.instance_23 = new lib.round_arrow_24_img();
	this.instance_23.setTransform(-115,-105);

	this.instance_24 = new lib.round_arrow_25_img();
	this.instance_24.setTransform(-115,-105);

	this.instance_25 = new lib.round_arrow_26_img();
	this.instance_25.setTransform(-115,-105);

	this.instance_26 = new lib.round_arrow_27_img();
	this.instance_26.setTransform(-115,-105);

	this.instance_27 = new lib.round_arrow_28_img();
	this.instance_27.setTransform(-115,-105);

	this.instance_28 = new lib.round_arrow_29_img();
	this.instance_28.setTransform(-115,-105);

	this.instance_29 = new lib.round_arrow_30_img();
	this.instance_29.setTransform(-115,-105);

	this.instance_30 = new lib.round_arrow_31_img();
	this.instance_30.setTransform(-115,-105);

	this.instance_31 = new lib.round_arrow_32_img();
	this.instance_31.setTransform(-115,-105);

	this.instance_32 = new lib.round_arrow_33_img();
	this.instance_32.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},0).wait(3).to({_off:true},1).wait(17));

	// bg
	this.instance_33 = new lib.round_arrow_0_img();
	this.instance_33.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-105,230,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.rouge_makeup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rouge1_img();

	this.instance_1 = new lib.rouge2_img();

	this.instance_2 = new lib.rouge3_img();

	this.instance_3 = new lib.rouge4_img();

	this.instance_4 = new lib.rouge5_img();
	this.instance_4.setTransform(9.8,34);

	this.instance_5 = new lib.rouge6_img();
	this.instance_5.setTransform(-1.6,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,285,120);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(9.8,34,265,41), new cjs.Rectangle(-1.6,8,284,96), null];


(lib.reness1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.red();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,305,402);
p.frameBounds = [rect];


(lib.pincet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rastr4();
	this.instance.setTransform(113.3,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.pinc();
	this.instance_1.setTransform(18,-35.9,1,1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.pinc();
	this.instance_2.setTransform(20.4,-51.4,1,1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.9,-51.4,196.9,154.6);
p.frameBounds = [rect];


(lib.pincet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rastr2();
	this.instance.setTransform(113.4,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.pinc();
	this.instance_1.setTransform(21.5,-46.2,1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.pinc();
	this.instance_2.setTransform(20.4,-51.4,1,1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.9,-51.4,198.8,153.3);
p.frameBounds = [rect];


(lib.pimple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pimple_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,28,28);
p.frameBounds = [rect];


(lib.photo_frame_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_frame_1_img();
	this.instance.setTransform(-225,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-225,450,450);
p.frameBounds = [rect];


(lib.object_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkVgBmKQABmIEVkWQEXkXGIABQGJgBEWEXQEXEWAAGIQAAGKkXEVQkWEXmJgBQmIABkXkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.object_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EghJAhJQtttuAAzbQAAzZNttvQNvtuTaAAQTaAANvNuQNuNvAATZQAATbtuNuQtvNuzaAAQzaAAtvtug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.object_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.object_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOSvMAAAgldIMdAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-120,80,240);
p.frameBounds = [rect];


(lib.object_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklElmegBQmdABklklg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArON0Ikkp4IN1xvIKRAAIHfWjIjXFEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-88.4,202.4,177);
p.frameBounds = [rect];


(lib.object_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQivivAAj4QAAj3CviwQCwiwD3AAQD5AACvCwQCvCwAAD3QAAD4ivCvQivCxj5AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.object_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCwQivCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.object_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.object_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.object_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.object_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj2CwixQCwiwD3AAQD3AACwCwQCxCxAAD2QAAD4ixCvQiwCxj3AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.object_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokYNMAAAgwZIRJAAMAAAAwZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-155,110,310);
p.frameBounds = [rect];


(lib.object_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EghIAhJQtutvAAzaQAAzZNutvQNvtuTZAAQTaAANvNuQNuNvAATZQAATatuNvQtvNuzaAAQzZAAtvtug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.object_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0WclIlPunMAQygqiIRBAAMARYAlKIqjT/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.8,-182.9,327.8,365.9);
p.frameBounds = [rect];


(lib.object_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnaSvMAAAgldIO1AAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-120,95,240);
p.frameBounds = [rect];


(lib.object_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkHkHAAl1QAAlzEHkIQEIkIFzAAQF0AAEHEIQEIEIAAFzQAAF1kIEHQkHEIl0AAQlzAAkIkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.9,-90,180,180);
p.frameBounds = [rect];


(lib.maskpink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mask();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,282,388);
p.frameBounds = [rect];


(lib.mask01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mask1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,157,137);
p.frameBounds = [rect];


(lib.lpst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lipstick1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,46,201);
p.frameBounds = [rect];


(lib.lp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lp2_img();
	this.instance.setTransform(7.5,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(7.5,-4.7,83,22);
p.frameBounds = [rect];


(lib.lp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lp1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,93,12);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lipsbad2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF5D82").s().p("AgFApIgFgGIAAgEIABAAIACgBQADAAAEADIAGADIAXgFIAwgBQABgDAGgBQAEgDAEAAQAJABAGAIQANgLAGgCIAQAAIALgCQANgEAJAAQAHABAFgFQAGgFACAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIADACQAMAAAggSIApgXQgMATgZANIgwAXQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIgCgDQgFAMg4AAIgdARQgCAAgEgGQgEgHgDAAQgCAAgFAEQgFAEgDAAIgwAAQgSAGgEAAQgHAAgFgFgAg8AcQgJgMAAgDQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIABABIAKAJQAJAKAGAAQABAAACgEQACgEAEgBQAHABAAAFQAAAFgOAIQgIAAgMgNgAiXARIgQgKQgFAAgCAEQgCAEgEgBQgHAAgFgJQgEgFgBgFQgMAFgDAAQgHAAgcgTIgngaQAMACAeAQQAcAPACAAQAEAAAFgDQAFgFAEAAQAIABAGATQAKgEADAAIAbAJQAdALAMAAIASAAIAFACIACADQgJAFgaABQgUAAgUgKg");
	this.shape.setTransform(30.5,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98566F").s().p("AAQA7IARgNQgDgHAAgLIABgNIAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAOAGQAGgIAHgPQAHgTAEgGQgBAKgHARIgKAbIgKgEIgHgDIAAAHIAAABIAIAEIALAHQgCADgBAFIgBAHIgBAAQACgKgHgEIgIgFIABALQAAAGgEACIgRAJgAh3AsIgBgDQAAgEAJgRQAJgTAEgBIgBgGQAJgVAJgPQgBAGgFANIgGAOQAAADAFAFQAEACAAACIAAAEIgDAAQgFAAgEgGIgCgBQgBADgIARQgIAQgBAHIgBACIgCgBgAgcAgIAAgCQAAgCAMgMIANgMIgNgmQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIABAAQAGAIAMAfQAAACgMANIgSAOIgCAAgADrAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgDAEgHIgJgEQgIgEAAgCQAAgEADgLQAFgNAFgHIACAFQAAAJgJATIATAJIgJASgAjVgCIAAgCIAPgdQADgJAJgEQALgEANALQgCAEgFAAIgKgCIgFgCQgGAAgIAQIgNAVIgCAAgAjKgfIAAgBIABACQAAAFgrARQAjgaAHADg");
	this.shape_1.setTransform(33.6,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(159,70,102,0.549)").s().p("AAvBXQAAgFAJgNIgOgJQgJgGAAgGQAAgCAHgFQAHgEAAgEIAAgPIADgHIgBgEQABgJgDgFIAAgHIABgBQACABAFALIAEAFIAEADIAFABQACAAAGgQIAJgdIAAgBIgaAAIAAAHQADAHAAAJQAAAFgCADIgBAAQgEAAgHgiQAAgGAYgBQAXAAAAAHQgQA7gHAAIgJAAIABAAQAMAGAAAKQAAAJgDAFIAOADQAOAEAAAEIgGAMIgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAAgHQgegFgCgDQACgGAAgGQAAgFgGgEQgGAQgJAFIAKAIQAIAHAAABQAAADgFAHQgFAIgFAEgAgQBHQAMgaAAgFQAAgBgDgFIgDgHIgDgGQABgEAJgJQAIgIAAgGIgDgTIgCgRQAAgIgBgFIgBgHQAAgUADAOIAFATQAAAKAHARIAHgEQgDgHAAgFQAAgDAEgLIAFgPIAAgPQAHgHAEAEQACACAAAEQAAAFgGAPQgHAPAAASQAAAFgEABIgIABIAGANQAAAGgLALIgKANIABAGQACAFAAADQAAAJgQAZQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAgAhWA3IgBgMQAAgYAJAAIACAAIABAEIgFAUIAAAOIAHgKQAFgGAGgCIABgYQAAgMgFAAIgCgBIAAgBQAFgJAEALIAAAGQAAAFACAHIACANIAAAGQgCAEgDACQgFADgFAKQgFAIgEAAQgGAAgBgMgAhsBAIgHAAQgKAAgDgDIgBgDIACgFIADgEIAAAJIAQABIABACIgBADIAAAAgACLA2QgJAAgHgOIgEgOIAAgHIACAAIAFAPQADAHAIAFIAGgBIgEgIQgCgEAAgCQAAgDADgEIACAAQACABAFAIQAFAIAAAEQAAAEgEACIgBABQgDACgEAAIgDAAgAigAzQgEgCAAgDQAAgFADgHQADgJAEgBIACABIAAACIgFAPIAAADQAGAAAIACIABgFIAAggQgIADgDAAIgDAAIgBgCIACgBIAQgBIABADQABADAAAQIAAANQgBAKgFAAQgGgDgLAAgAgiAWIACAAQADAMAAALQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAgAhnAkQAAgEgKgJIgEgDIgBgCQgHgOgDgEIgBAAIAAAAIgBgLQAAgNAMAAQANgBABgLIAAgYIABgHIABAAQgBAMACAYQAAAHgLACQgLACAAAGQAAAKAHAIIAPAXQANgZAAgFQAAgGgHgFQgIgFAAgCQAAgEAFAAQAGAAAJALIAAgBQAAgJAKgPQAMgRAMAAIATgBIACABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgdA0gOAAQgJAAAAgGIACgIIAAgBQgDADgCAAIgBAAIADAFQAAAIgHALQgIAOgBALQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAhBgnQgEALgCATIACAAQADAAALgOIARgXIACgDQgHgDgGAAQgLAAgFANgAj9AiIAAgCIAFgNIgQgJQgCgBAAgFQAAgCAEgDIAFgFIgCgGIAAgCQgOAHgHABIgDgBQAGgIASgJIAJgEQgHgCgEgFQgEgJgCAAQgGAAgMAEQgMAGgEAAIgBAAQAfgWAgAUQAEABAAACQAEABADADQAEACABADIAZgQQANgIAEAEIAAgBQAJgPAPACIACABQAHAEAFABQAEADAAAGQAAAZgUAAQgGAAgBgDIgBgDQAAgBAHgFQAIgGACgGQgFgBgCgCQgCgBgEAAQgDAAgJANIgOAUQATALAAAGQAAAEgOATIgCAAIgBgGIALgQQAAgFgLgCQgMgFAAgGIAKgSQgZASgGAAQgFAAgFgFQgFgGgDAAIgMAGQADAFAAAHQAAADgCADQgDADgFAAIAAABIASAOIgDAEIgDADIABAAIgHAJgAEnAHIAAgOQgEAAgLAFQgLACgHAAQgIAAgEgDQgCgDAAgDIADgJIADgHQAAgCgGgEQgGgDAAgEQAAgDABgCIADgGIAFgMIgJgGQgDgDAAgEIAIgHQAKgHAGAAQgEAFgNAJQAFAEAGAEQADACAAAEQAAAGgCAIIgCAGIAFADIAEgCQAKgDADgHQABgCAAgHQAAgHAEgBQAEAFAAAOQAAAEgIAIQgHAHgGABQAAAGgHAMIAGACQALAAAIgDIALgDQAIAAAAANIgBAPIAAACQAAAAABAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgEAAgBgLgACugHQgDgFAAgGQAAgNACgKIADgBIgBAVQABAPANAAQAIAAADgGQADgEAAgFQAAgWgUAAQAQgLAHANQAEAIAAAMQAAAIgEAGQgFAHgLAAQgLAAgFgHgADUgmIgDgKIAAgEIADgCQADADABAEIADAHIAHgGQAFAAAAAEQAAACgFAGQgFAGgCAAQgEAAgDgKgAB0gmQgDgEAAgCIADgIIABAAQADACAAAHQAAAGADAAQAFAAAIgLQAJgMADgBQAHAGgBAJIAKAAIAAgVQAJgKAAAXQAAAGgDAFQgEAIgLAAQgGAAgDgHIgBgHIgGAKQgFAIgIAAQgHAAgDgHg");
	this.shape_2.setTransform(31.6,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.549)").s().p("AA0BLIgDAAQgMAAgIgJQgGgGABgEQgBgIAGgHIAPgQQADgDgBgMQAAgKADgCQACAEAAAOQgBAKgJAKQgLAKAAAHQAAAFAMAGQAKAGABACIgBADIAAAAgAhGBGIAAgDQAAgFAKgJQAIgHACgJIAAgGIgCgMQgCgIAAgFIABgGIACgDQAEADADAMQADANAAAHQABALgJAHQgOALgGAJIgBAAgAgTBAQALgRAAgEQAAgGgGgIQgHgIABgIQAAgFAMgJQAKgMAAALQAAACgLAOIABAEIADAHIADAHIABADQAAAQgQAOgADCA3IABgIQgBgDgGgEQgHgEAAgDIABgGQACgEADgCIAMAVQAEAGAAAKQAAABgBABQAAAAAAABQAAAAAAAAQAAAAAAAAIgEABQgEgCAAgFgAB9AxIgHgRQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAHAMQAIALADAAIAIgBQAEgBADgCIAJgEQgFgKABgDIAAgEQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAEASQgNARgQAAQgIAAgFgMgAinAjQAAgOAGgMQAJgSAUAMQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABIgBAAIgQACIgCAAQgKAPADAVQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQgFgGgBgFgAh3ASIgHgSIABgBIABAAIABAAQADACAHAOIABADQAGAJAHAGIAAACQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgJAAgIgSgADgASIgCgMIABgCIABgBQAMASACAIIgDABQgGAAgFgMgAEVAXQAAgMgRgGQgRgFgBgEIABgKIAGgLIgCAPQAAAHATADQASADABANIAAAHQAAABgBAAQAAAAAAAAQgBAAgBABQAAAAgCAAIgDgCgAjwAXIAEgDIAGgIIgKgFQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgDAFgKQAFgLADgBIABAAIABADIgJAVIACACQAFACAEADQgBADgFAFQgFAFgEABIgBAAgABYAHIAFgYQADgQAGgIIABAEQAAAFgGAUQgFARgDADgAgBgnIgDgUIACgGQACACACAGQACAFABAIIACARIABAIIgDADQgFgFgBgSgAh/geQgBgDAHgGQAHgGAGABQgCAEgOAOQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBgAjsgqQgRgLgFAAQgKAAgSAGIgXAHQAHgFAPgGQAWgIAOAAQAEAAAOAJQANAJADAAQAFAAAQgMQAQgKAHABIACABIAAACQAAACgtAaQgCAAgSgLgAEngjQAJgMAGABIAAABQgFAIgIAEIgCgCgAhsg4QAAgCADgHQADgIACgBQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABIAAAAIAAAIIgEANIgDACQgDgDAAgGgAA7g4QACgEALgCIAOgDIADADQgDACgIAFIgLADQgGAAgCgEgAiKg3QgFAAgHgEIgCgBIgHgFQAFgIAUAPIgBACQAAAAABAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_3.setTransform(31.1,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,14.1,62.1,20);
p.frameBounds = [rect];


(lib.lipsbad1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF5D82").s().p("AkjAiQAkgQBTgfQAIAAADAEQADADAFAAQAGAAAHgFQAIgFADAAQAFAAADACIAFAEIAVgSQARgKAIARQAHABALgGQAKgFAGAAQAEAAAJADQAKACALAAIAJABIAJgFQANgFAHAAQAKAAABAKIAGgFQADgDAFgCQAFgCALAKQAEAAALgDQALAAAEAEQAEAFADAAQAEAAADgCQADgDAGAAQAGAAAFAEQAGAEAHAAIAGgBIAFgCIAbAHQAcAHAJABQAXADAnAIIAAABQABAAAAABQAAAAAAAAQAAAAgBAAQgBAAgBAAQgcAAgHgBIgvgGQgMgBghgHIghgHIgFADQgEACgGAAQgJAAgFgEQgCgEgCAAQgJAAgDADQgEACgEAAQgHAAgFgJQgKAJgGAAQgIAAgDgFQgCgGgBAAIgKABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAADgRACQgOACgPAAQgDAAgEgDQgFgDgDAAIglAPQgHAAgCgFIAAAAIAAAAQgIADgKAAIAAAAQgLAIgGAAQgEAAgEgCIgEgDIgIADQgGAEgJAAQgJAAgGgEIgBAAQgCAAgDAAIg7AVIgCgCQgkAOgVADgAhVgSIADAAIAAgBIgDABg");
	this.shape.setTransform(26.2,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98566F").s().p("AAZAdIgBgCQAAgCATgOQATgMAGgCIABADQAAAEgUAMIgWAOIgCgBgAinASQgGgJgCAAIgsAPQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAWgHIAWgGQAEAAAJAJQAJAIABAEIAAABQABAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQgGAAgGgIgAhlAPIAQgTQgFgGgTgPQAFgFANALQANAKAAAFQAAAEgVASIgCAAIAAgDgADFgGQAEgCAEAGQAHAHAJADIAAACIAAABIgCABQgQAAgGgSgAB7gEIgCgGQAAgLAFgDQAIgGAWAFIgQAEQgKACgBAEIgBAOIgBABIgBAAIgDgEgAA0gPQgFgJAAgDIAAgCIABABQAEgBAHAIIAKAOIAAACIgBABIgCAAQgHAAgHgLgAg8gKQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAXADIABABQgBACgIAAQgMAAgCgDg");
	this.shape_1.setTransform(29.2,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(159,70,102,0.549)").s().p("AAEAzQgFgGABgDQAAgEABgKQAEgMAAgDIACAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABIgCAIIgCAKQAAAFABACQADADAJAFQAMgOAAgEQAAgCgFgDQgIgEgDgFQADgEACAAQAKAAAGALQADgEALgFQAPgHgBgCIAAgBQgEgCgDgFQgDgIgBgGQABgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgFACQgEgCgHgBQgKAAgEgEQABgVAIgJIABAAIABACIgEAUIAAAHIANgBQAGgCAHAAQACAAADAFIAAgEQAAgZAKgIIABAAIAAACIgGAXQAAAKAEATIAAABQACgDAEAAIAXAEQACAAAFgKIAGgMIgFAXQAAAEgHAAIgRgBQgDAAgBAEQgBAEgEAAIgCAAIAAABQgTAZgKAAIgFAAIgHAKQgIALgCAAQgIAAgGgHgAiYAsQgEgFgDgGQgCgFgFgDQgKAFgiAKQgFAAgHgJQgGgKgDAAQgRAFgFAAQgJAAgIgMQgFgJgDgHIACgBQABADAHAIQAHAKAGAAIALgDQAKgEAJAAQAEAAAFAIQAFAIABAAIAIgCIAEACQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgBgCIAEgBIAOgEQgMgbAAgFQAAgDACgCQADAEAEAOIADAEIAEgGQAGgIAFgCQAJgDAAgGIgBgMIACAAQADAOAAAEQAAADgFAEQgFAEgJACIAAAPIADABIAKAGIADADIADAEIACACQADAGAOAJQAAADgCACQgCADgDAAQgHAAgHgHgAhPAqQgEgGAAgCQAAgEAFgGQAGgHgBgCIAAgDIgCgBIgEAJQgFANgJAAQgGAAgHgIIgFgKIAAgKIAEgCQABAAAFAIIgBAEIACAAIAGAKIAIgPIADgEIgEgEQgKgJgMgBQgLgBgEgLQgCgHgBgHIABgMIACAAIAEARQADALAKAAQATABAHAHIgHgTQAAgqALAjQAJAbABAOIABABIAAACIAAAEQgBAFgFAIQgFAHAAABQAAADAMAMIABABQgBAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgHAAgFgIgAg5AaQgFgIAAgFIAAgIIABgBQAFACADAMQADALAHAAQANAAAAgIQAAgLgCgCQgDgDgRAAIgDgBIgBgDQAAgEAOAAQAOABACAFIABASQAAAPgNAAQgLAAgIgKgADdAeIAAgHIABgBQgGgCgEgFQgGgHAAgEIAAgDQADgBAGAIQAFAEAEACIABgCQABgFAIgCIASgFQAPgBALACQgfAAgJALIgCADIABADIgBAEQgCACgDAAIgGAIgABlAXIgBgBIAagGQADgCAAgNQAAgFACgEQADgEAIgHIAjAAIABgIQADgOADgEQADAIAAAOIAAADIAIgCQAOgCALAAIghAPQgBAbgZAAQgEAAgDgFQgDgEgBgDIAAgBQABAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQAEAAACADIADAEIAJgBIAEgQIgDgBIgBgCQghAAgCAOQgBATgXAAg");
	this.shape_2.setTransform(28.6,5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.549)").s().p("ACFAyQAJggAvgIIABAEQAAAEgHAEQgIAEgMAAQgJAAgJAKIgMAPgAhHAhIgEgEIgDgDQgHgIAAgHIABAAQAHAFAJAKQAKAKAEAIIAAABQgKgFgHgHgAh8AgIgHgGQgJgJgBgEQAEgCAKAIQAHAGACAFIABACQABABgBAAQAAAAAAABQAAAAgBAAQgBAAgBAAIgEgCgAgVAWIgDAAIABgEQAAgLgNgEQgSgCgBgBQgKgWAAgDIABgCIACAAQACAVAWAEQAWACAAAOIgBAHQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAgBAAgAi6ANIgDgJIABAAIAIAMQAGgCAEgDIARAAIABACQgLAIgMAAQgIAAgDgIgABogBQgOgEAAgIQAAgQAJgNQgEANAAAHQAAAFADADQAFAEAKAAQAGABAEACQAHADAAAEIAAAEIgDABIgXgGgAAEgUQgEgOAAgGIAAgDIABAAIAHAPQAGAOAAADIgBAIQgEgDgFgOgACRgQQAAggAMgCIgEAUQgCAMAAAJIgDABQgDgDAAgFg");
	this.shape_3.setTransform(20.7,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3,-2.2,59.5,14);
p.frameBounds = [rect];


(lib.lipsbad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.lipsbad_img();
	this.instance.setTransform(-3,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3,-2.2,65,36);
p.frameBounds = [rect];


(lib.lips_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new6_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.lips_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new22_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.lips_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new16_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.lips_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new3_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new10_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new7_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.jewels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_jw1();
	this.instance.setTransform(-5.5,125.2);

	this.instance_1 = new lib.els_jw2();
	this.instance_1.setTransform(37.2,128.3);

	this.instance_2 = new lib.els_jw3();
	this.instance_2.setTransform(26.1,121.2);

	this.instance_3 = new lib.els_jw4();
	this.instance_3.setTransform(34.8,126.9);

	this.instance_4 = new lib.els_jw5();
	this.instance_4.setTransform(38.6,138.2);

	this.instance_5 = new lib.els_jw6();
	this.instance_5.setTransform(1,142.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.5,125.2,259,156);
p.frameBounds = [rect, new cjs.Rectangle(37.2,128.3,168,132), new cjs.Rectangle(26.1,121.2,193,150), new cjs.Rectangle(34.8,126.9,184,143), new cjs.Rectangle(38.6,138.2,174,115), new cjs.Rectangle(1,142.1,236,154), null];


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


(lib.ice2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cube();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,65,67);
p.frameBounds = [rect];


(lib.ice1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cube1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,61,63);
p.frameBounds = [rect];


(lib.hint_filter_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_filter_arrow_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.hint_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_2_img();
	this.instance.setTransform(-33,-51.1,0.825,0.825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-51.1,66,102.3);
p.frameBounds = [rect];


(lib.hint_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_1_img();
	this.instance.setTransform(-110,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-80,220,160);
p.frameBounds = [rect];


(lib.headdress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_crown6_img();
	this.instance.setTransform(-59.7,-35.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmK8IAA13IfNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-70,200,140);
p.frameBounds = [rect];


(lib.headdress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_crown5();
	this.instance.setTransform(-74.2,-54.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmK8IAA13IfNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-70,200,140);
p.frameBounds = [rect];


(lib.headdress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_crown4();
	this.instance.setTransform(-64.7,-35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmK8IAA13IfNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-70,200,140);
p.frameBounds = [rect];


(lib.headdress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_crown3();
	this.instance.setTransform(-39.2,-50.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmK8IAA13IfNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-70,200,140);
p.frameBounds = [rect];


(lib.headdress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_crown2();
	this.instance.setTransform(-81.7,-52.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmK8IAA13IfNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-70,200,140);
p.frameBounds = [rect];


(lib.headdress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_crown1();
	this.instance.setTransform(-86.5,-46.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmK8IAA13IfNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-70,200,140);
p.frameBounds = [rect];


(lib.hanger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger1_img();
	this.instance.setTransform(-42,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-31.4,85,55);
p.frameBounds = [rect];


(lib.froze1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.froze1_img();
	this.instance.setTransform(-14.4,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.4,-11.4,77,67);
p.frameBounds = [rect];


(lib.fmask4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.fmask4_img();
	this.instance.setTransform(57.5,-29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(57.5,-29.1,203,115);
p.frameBounds = [rect];


(lib.fmask3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.fmask3_img();
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(8,0,287,124);
p.frameBounds = [rect];


(lib.fmask2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.fmask2_img();
	this.instance.setTransform(108,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(108,-46,83,173);
p.frameBounds = [rect];


(lib.fmask1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.fmask1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,288,123);
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


(lib.eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.eyes3_img();
	this.instance.setTransform(3.2,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3.2,36.1,240,33);
p.frameBounds = [rect];


(lib.eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes2_img();
	this.instance.setTransform(7.7,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(7.7,11.4,237,48);
p.frameBounds = [rect];


(lib.eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes1_img();
	this.instance.setTransform(1.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.2,-0.3,247,59);
p.frameBounds = [rect];


(lib.eyebr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyebr_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,301,35);
p.frameBounds = [rect];


(lib.eyebag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.eyebag1_img();
	this.instance.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,0,108,76);
p.frameBounds = [rect];


(lib.exp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.exp_img();
	this.instance.setTransform(-2.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.3,0,69,84);
p.frameBounds = [rect];


(lib.els_shad6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_shad6_img();
	this.instance.setTransform(-45.8,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-13.6,291,93);
p.frameBounds = [rect];


(lib.els_shad5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_shad5_img();
	this.instance.setTransform(-43.7,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-18.1,287,91);
p.frameBounds = [rect];


(lib.els_shad4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.els_shad4_img();
	this.instance.setTransform(-48.3,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.3,-19.9,297,95);
p.frameBounds = [rect];


(lib.els_shad3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_shad3_img();
	this.instance.setTransform(-42.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-16.5,286,103);
p.frameBounds = [rect];


(lib.els_shad2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_shad2_img();
	this.instance.setTransform(-43.5,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.5,-13.3,286,92);
p.frameBounds = [rect];


(lib.els_shad1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_shad1_img();
	this.instance.setTransform(-43.4,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.4,-19.6,283,91);
p.frameBounds = [rect];


(lib.els_shad0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_shad0_img();
	this.instance.setTransform(-31.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.1,-0.4,261,71);
p.frameBounds = [rect];


(lib.els_li0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.els_li0_img();
	this.instance.setTransform(-50.2,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.2,-7.2,133,42);
p.frameBounds = [rect];


(lib.els_hb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hair0();
	this.instance.setTransform(12,105.2);

	this.instance_1 = new lib.hair1();
	this.instance_1.setTransform(-152.3,24);

	this.instance_2 = new lib.hair2();
	this.instance_2.setTransform(-32.6,79.8);

	this.instance_3 = new lib.hair3();
	this.instance_3.setTransform(-16.1,106.8);

	this.instance_4 = new lib.hair4();
	this.instance_4.setTransform(-11.1,108.3);

	this.instance_5 = new lib.hair5();
	this.instance_5.setTransform(-98.8,46.8);

	this.instance_6 = new lib.hair6();
	this.instance_6.setTransform(-108.1,54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(12,105.2,218,237);
p.frameBounds = [rect, new cjs.Rectangle(-152.3,24,518,972), new cjs.Rectangle(-32.6,79.8,405,809), new cjs.Rectangle(-16.1,106.8,261,283), new cjs.Rectangle(-11.1,108.3,263,336), new cjs.Rectangle(-98.8,46.8,473,841), new cjs.Rectangle(-108.1,54.3,467,779)];


(lib.els_hair01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.els_hair01_img();
	this.instance.setTransform(-83.3,-104.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.3,-104.2,297,315);
p.frameBounds = [rect];


(lib.earrings_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_earr6_2_img();
	this.instance.setTransform(-40,-46.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.earrings_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_earr5_2_img();
	this.instance.setTransform(-33.3,-31,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.earrings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_earr4_2_img();
	this.instance.setTransform(-31.6,-33.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.earrings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_earr3_3_img();
	this.instance.setTransform(-42.4,-42.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.earrings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_earr2_2_img();
	this.instance.setTransform(-41.2,-32.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.earrings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_earr1_2_img();
	this.instance.setTransform(-43.2,-50.4,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.earrings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_earr1();

	this.instance_1 = new lib.els_earr2();
	this.instance_1.setTransform(-0.1,-4);

	this.instance_2 = new lib.els_earr3();
	this.instance_2.setTransform(4.3,-2.5);

	this.instance_3 = new lib.els_earr4();
	this.instance_3.setTransform(7.9,-4.5);

	this.instance_4 = new lib.els_earr5();
	this.instance_4.setTransform(11.5,-6.1);

	this.instance_5 = new lib.els_earr6();
	this.instance_5.setTransform(4.9,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,251,112);
p.frameBounds = [rect, new cjs.Rectangle(-0.1,-4,252,81), new cjs.Rectangle(4.3,-2.5,240,107), new cjs.Rectangle(7.9,-4.5,231,84), new cjs.Rectangle(11.5,-6.1,223,69), new cjs.Rectangle(4.9,-1.9,233,116), null];


(lib.drops4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drops4_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,162,83);
p.frameBounds = [rect];


(lib.drops3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drops3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,130,78);
p.frameBounds = [rect];


(lib.drops2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drops2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82,108);
p.frameBounds = [rect];


(lib.drops1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drops1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,192,94);
p.frameBounds = [rect];


(lib.dress_m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.dr3();
	this.instance.setTransform(81.6,98.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(81.6,98.2,433,431);
p.frameBounds = [rect];


(lib.dress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("EgynAzGMAAAhjkICzAAIAAinMBicAAAMAAABmLgAOuniIgCAFIAAAGIAWAbIAXAbIAAABIArgMQAagIAUgIQABgvgBh6IhIhnIgkgzIgOAFQggALgZAOQgeARgXAXIgPARQAEAWAWAhQAdAqACAcIAFA9QAGAiAPAMQAFAFAGACIAGABQAIgBADgIQACgGAAgMIgBgFIABgFIgFghQgDgWgDgpQAKAIA3AlIAKAGIAAAqIgBABIgFAFIgHgCQgagKgJAAQgKAAgEAEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:289.6,y:305.4}).wait(1).to({graphics:null,x:0,y:0}).wait(5));

	// Layer 1 copy
	this.instance = new lib.dr1();
	this.instance.setTransform(75,69.7);

	this.instance_1 = new lib.dr2();
	this.instance_1.setTransform(113.9,62.2);

	this.instance_2 = new lib.dr3();
	this.instance_2.setTransform(81.6,98.2);

	this.instance_3 = new lib.dr4();
	this.instance_3.setTransform(204.8,99.8);

	this.instance_4 = new lib.dr5();
	this.instance_4.setTransform(192.6,95.4);

	this.instance_5 = new lib.dr6();
	this.instance_5.setTransform(107.6,97.9);

	this.instance_6 = new lib.dr7();
	this.instance_6.setTransform(94,69.2);

	this.instance_7 = new lib.dr8();
	this.instance_7.setTransform(208.3,73.5);

	this.instance_8 = new lib.dr9();
	this.instance_8.setTransform(104.7,86.1);

	this.instance_9 = new lib.dr10();
	this.instance_9.setTransform(111.6,59.4);

	this.instance_10 = new lib.dr11();
	this.instance_10.setTransform(206.7,69.6);

	this.instance_11 = new lib.dr12();
	this.instance_11.setTransform(60.6,99.8);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,69.7,426,456);
p.frameBounds = [rect, new cjs.Rectangle(113.9,62.2,356,469), new cjs.Rectangle(81.6,98.2,433,431), new cjs.Rectangle(204.8,99.8,196,427), new cjs.Rectangle(192.6,95.4,202,436), new cjs.Rectangle(107.6,97.9,303,398), new cjs.Rectangle(94,69.2,430,491), new cjs.Rectangle(208.3,73.5,188,328), new cjs.Rectangle(104.7,86.1,368,432), new cjs.Rectangle(111.6,59.4,331,449), new cjs.Rectangle(206.7,69.6,300,442), new cjs.Rectangle(60.6,99.8,473,403)];


(lib.crown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.els_crown1();

	this.instance_1 = new lib.els_crown2();
	this.instance_1.setTransform(3.3,7.6);

	this.instance_2 = new lib.els_crown3();
	this.instance_2.setTransform(177.8,54.5);

	this.instance_3 = new lib.els_crown4();
	this.instance_3.setTransform(46.3,84.5);

	this.instance_4 = new lib.els_crown5();
	this.instance_4.setTransform(27.9,6.1);

	this.instance_5 = new lib.els_crown6_img();
	this.instance_5.setTransform(50.8,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,346,186);
p.frameBounds = [rect, new cjs.Rectangle(3.3,7.6,327,211), new cjs.Rectangle(177.8,54.5,157,202), new cjs.Rectangle(46.3,84.5,259,140), new cjs.Rectangle(27.9,6.1,297,217), new cjs.Rectangle(50.8,53.1,239,143), null];


(lib.creme = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.creme_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,72,160);
p.frameBounds = [rect];


(lib.crack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crack_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,41,48);
p.frameBounds = [rect];


(lib.cr1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.creme1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,72,157);
p.frameBounds = [rect];


(lib.coatf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coat01();
	this.instance.setTransform(233,-162.2);

	this.instance_1 = new lib.coat02();
	this.instance_1.setTransform(219.2,-176.3);

	this.instance_2 = new lib.coat03();
	this.instance_2.setTransform(11.2,-164.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(233,-162.2,109,52);
p.frameBounds = [rect, new cjs.Rectangle(219.2,-176.3,139,89), new cjs.Rectangle(11.2,-164.6,548,410), null];


(lib.coatb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.coatb1();
	this.instance.setTransform(54.1,97.9);

	this.instance_1 = new lib.coatb2();
	this.instance_1.setTransform(60.9,111.1);

	this.instance_2 = new lib.coatb3();
	this.instance_2.setTransform(33.3,69.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(54.1,97.9,471,404);
p.frameBounds = [rect, new cjs.Rectangle(60.9,111.1,435,310), new cjs.Rectangle(33.3,69.6,518,413), null];


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.clock1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,186,195);
p.frameBounds = [rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmOPnIAA/NIMdAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-100,80,200);
p.frameBounds = [rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.cap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cap_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,44,29);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,es:4,pt:5,tr:6,ja:7});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-230,-180);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-230,-180);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-230,-180);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-230,-180);

	this.instance_4 = new lib.title_es_img();
	this.instance_4.setTransform(-230,-180);

	this.instance_5 = new lib.title_tr_img();
	this.instance_5.setTransform(-230,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_6 = new lib.gravity_explosion_3_img();
	this.instance_6.setTransform(133,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:-208,y:-120},0).wait(1).to({x:133,y:-119},0).wait(1).to({x:-192,y:-117},0).wait(1).to({x:-202,y:-115},0).wait(1).to({x:-201,y:-122},0).wait(1).to({rotation:-15,x:-15.2,y:-128.4},0).wait(1).to({rotation:0,x:-65,y:-132},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-180,460,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.blush_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new6_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.blush_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new5_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.blush_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new16_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new3_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new2_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new1_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-230,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-180,460,360);
p.frameBounds = [rect];


(lib.beads_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_jw6();
	this.instance.setTransform(-59,-38.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.beads_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_jw5();
	this.instance.setTransform(-43.5,-28.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.beads_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_jw4();
	this.instance.setTransform(-46,-35.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.beads_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_jw3();
	this.instance.setTransform(-48.2,-37.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEIAGgfIYaAAQAgCTgdCfQg5FGkPC+QjQCRjwAAQhHAAhMgNgAsLioQBBkwECi1QEOi9FEA5QFGA6C+EOQBgCJAhCYgAsLiog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.beads_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_jw2();
	this.instance.setTransform(-42,-33,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.beads_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_jw1();
	this.instance.setTransform(-64.7,-39,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiJMSQlGg5i+kPQi9kPA5lEQA6lGEPi+QEOi9FEA5QFGA6C+EOQC+EPg6FEQg5FGkPC+QjQCRjwAAQhHAAhMgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.arr2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr2_img();
	this.instance.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-1.2,6,64);
p.frameBounds = [rect];


(lib.arr1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr1_img();
	this.instance.setTransform(2,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2,5.5,9,54);
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


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_4_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.curtain_3_img();
	this.instance_1.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACE4ED").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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


(lib.Snowflake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowfall_1_img();
	this.instance.setTransform(-9,-9,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-9,18,18);
p.frameBounds = [rect];


(lib.snowfall_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,350,1,1.167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,700);
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
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-24,-27,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48), new cjs.Rectangle(-24,-27,48,54)];


(lib.track_move_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.snow_logo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snow_logo_img();
	this.instance.setTransform(-145,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-45,290,90);
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
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, null];


(lib.photo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_img();
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
	this.instance = new lib.bg_large_buttons_ny_img();
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
	this.instance.setTransform(0,200);

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
	this.substrate_mc.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.wardrobe_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_1_1_mc();
	this.instance_1.setTransform(0,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-61.5,251,185);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_1_mc();
	this.instance.setTransform(280,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_3_1_mc();
	this.instance_1.setTransform(-280,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.wardrobe_3_1_mc();
	this.instance_2.setTransform(315,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.wardrobe_3_1_mc();
	this.instance_3.setTransform(-315,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.wardrobe_3_1_mc();
	this.instance_4.setTransform(280,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.wardrobe_3_1_mc();
	this.instance_5.setTransform(-280,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-440.5,-221.5,881,505);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_1_mc();
	this.instance.setTransform(290,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_3_1_mc();
	this.instance_1.setTransform(-290,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.wardrobe_3_1_mc();
	this.instance_2.setTransform(325,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.wardrobe_3_1_mc();
	this.instance_3.setTransform(-325,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.wardrobe_3_1_mc();
	this.instance_4.setTransform(290,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.wardrobe_3_1_mc();
	this.instance_5.setTransform(-290,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450.5,-221.5,901,505);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop("ru");
		}
		else if (lang_str == "de")
		{
			this.body_mc.gotoAndStop("de");
		}
		else if (lang_str == "fr")
		{
			this.body_mc.gotoAndStop("fr");
		}
		else if (lang_str == "es")
		{
			this.body_mc.gotoAndStop("es");
		}
		else if (lang_str == "pt")
		{
			this.body_mc.gotoAndStop("pt");
		}
		else if (lang_str == "tr")
		{
			this.body_mc.gotoAndStop("tr");
		}
		else if (lang_str == "ja")
		{
			this.body_mc.gotoAndStop("ja");
		}
		else
		{
			this.body_mc.gotoAndStop("en");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-180,460,360);
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


(lib.sparkani2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spark1();
	this.instance.setTransform(20.7,20.7,1,1,0,0,0,20.7,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.35,scaleY:0.35},3).to({scaleX:1,scaleY:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,41,41);
p.frameBounds = [rect, new cjs.Rectangle(4.6,4.6,32.1,32.1), new cjs.Rectangle(9.1,9.1,23.2,23.2), new cjs.Rectangle(13.5,13.5,14.3,14.3), new cjs.Rectangle(9,9,23.2,23.2), new cjs.Rectangle(4.5,4.5,32.1,32.1), new cjs.Rectangle(0,0,41,41)];


(lib.sparkani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spark1();
	this.instance.setTransform(20.7,20.7,0.3,0.3,0,0,0,20.7,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},3).to({scaleX:0.3,scaleY:0.3},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(14.5,14.5,12.3,12.3);
p.frameBounds = [rect, new cjs.Rectangle(9.7,9.7,21.9,21.9), new cjs.Rectangle(4.9,4.9,31.4,31.4), new cjs.Rectangle(0,0,41,41), new cjs.Rectangle(4.9,4.9,31.4,31.4), new cjs.Rectangle(9.7,9.7,21.9,21.9), new cjs.Rectangle(14.5,14.5,12.3,12.3)];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.shadows_makeup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_shad0();
	this.instance.setTransform(134.9,31.3,1,1,0,0,0,103.8,30.9);

	this.instance_1 = new lib.els_shad1();
	this.instance_1.setTransform(134.9,31.3,1,1,0,0,0,103.8,30.9);

	this.instance_2 = new lib.els_shad2();
	this.instance_2.setTransform(134.9,31.3,1,1,0,0,0,103.8,30.9);

	this.instance_3 = new lib.els_shad3();
	this.instance_3.setTransform(134.9,31.3,1,1,0,0,0,103.8,30.9);

	this.instance_4 = new lib.els_shad4();
	this.instance_4.setTransform(134.9,31.3,1,1,0,0,0,103.8,30.9);

	this.instance_5 = new lib.els_shad5();
	this.instance_5.setTransform(134.9,31.3,1,1,0,0,0,103.8,30.9);

	this.instance_6 = new lib.els_shad6();
	this.instance_6.setTransform(134.9,31.3,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,261,71);
p.frameBounds = [rect, new cjs.Rectangle(-12.3,-19.2,283,91), new cjs.Rectangle(-12.4,-12.9,286,92), new cjs.Rectangle(-11.4,-16.1,286,103), new cjs.Rectangle(-17.2,-19.5,297,95), new cjs.Rectangle(-12.6,-17.7,287,91), new cjs.Rectangle(-14.7,-13.2,291,93)];


(lib.shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.shadows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_shad0();
	this.instance.setTransform(134.9,31.3,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,261,71);
p.frameBounds = [rect];


(lib.semicircular_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(28,-62,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-100,40,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-70,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.semicircular_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.round_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(-20,-80);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-20,80);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-80,0,1,1,-90);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.round_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
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


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjpGBQgjgkgBgyQABgxAjgjIDXjXIjXjWQgjgjgBgxQABgyAjgjQAjgkAxAAQAyAAAkAkIEpEsQAkAjAAAwQAAAxgkAjIkpEtQgkAigyABQgxgBgjgig");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-200,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:200},20).wait(41));

	// graph
	this.instance_1 = new lib.body_nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_makeup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_li0();
	this.instance.setTransform(74.9,16.9,1,1,0,0,0,24.7,9.7);

	this.instance_1 = new lib.els_li1_img();

	this.instance_2 = new lib.els_li2_img();

	this.instance_3 = new lib.els_li3_img();

	this.instance_4 = new lib.els_li4_img();

	this.instance_5 = new lib.els_li5_img();

	this.instance_6 = new lib.els_li6_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,133,42);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_li0();
	this.instance.setTransform(74.9,16.9,1,1,0,0,0,24.7,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,133,42);
p.frameBounds = [rect];


(lib.icoice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ice1();
	this.instance.setTransform(114.7,88.4,0.938,0.938,0.1,0,0,30.5,31.4);

	this.instance_1 = new lib.ice2();
	this.instance_1.setTransform(138.8,135.6,0.999,0.999,-29.9,0,0,32.5,33.5);

	this.instance_2 = new lib.ice1();
	this.instance_2.setTransform(102.5,31.5,1,1,0,0,0,30.5,31.5);

	this.instance_3 = new lib.ice1();
	this.instance_3.setTransform(89.7,139.5,0.938,0.938,0.1,0,0,30.5,31.4);

	this.instance_4 = new lib.ice2();
	this.instance_4.setTransform(68.2,75.5,0.999,0.999,-29.9,0,0,32.5,33.5);

	this.instance_5 = new lib.ice1();
	this.instance_5.setTransform(30.5,131.5,1,1,0,0,0,30.5,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,183.6,180.7);
p.frameBounds = [rect];


(lib.hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hint_2_mc();
	this.instance.setTransform(-59.6,-12.6,1,1,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-33.5,x:-36.6,y:-31.6},7).to({rotation:0,x:-0.6,y:-40.6},7).to({rotation:42.2,x:31.4,y:-30.6},8).to({rotation:65.5,x:46.4,y:-15.6},7).to({rotation:42.2,x:31.4,y:-30.6},8).to({rotation:0,x:-0.6,y:-40.6},7).to({rotation:-33.5,x:-36.6,y:-31.6},8).to({rotation:-55.9,x:-59.6,y:-12.6},7).wait(1));

	// graph
	this.instance_1 = new lib.hint_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.5,-80,230.5,160);
p.frameBounds = [rect, new cjs.Rectangle(-116.9,-80,226.9,160), new cjs.Rectangle(-113.3,-80,223.3,160), new cjs.Rectangle(-110,-80,220,160), new cjs.Rectangle(-110,-83.2,220,163.3), new cjs.Rectangle(-110,-86.5,220,166.5), new cjs.Rectangle(-110,-89.5,220,169.6), new cjs.Rectangle(-110,-92.5,220,172.6), new cjs.Rectangle(-110,-93.5,220,173.6), new cjs.Rectangle(-110,-94.2,220,174.2), new cjs.Rectangle(-110,-94.5,220,174.6), new cjs.Rectangle(-110,-94.3,220,174.4), new cjs.Rectangle(-110,-93.9,220,173.9), new cjs.Rectangle(-110,-92.9,220,173), new cjs.Rectangle(-110,-91.7,220,171.8), new cjs.Rectangle(-110,-93.2,220,173.3), new cjs.Rectangle(-110,-94.3,220,174.4), new cjs.Rectangle(-110,-94.9,220,175), new cjs.Rectangle(-110,-95.1,220,175.1), new cjs.Rectangle(-110,-94.7,220,174.8), new cjs.Rectangle(-110,-93.8,220,173.9), new cjs.Rectangle(-110,-92.4,220,172.5), new cjs.Rectangle(-110,-90.6,220,170.7), new cjs.Rectangle(-110,-87.7,220,167.8), new cjs.Rectangle(-110,-84.8,220,164.8), new cjs.Rectangle(-110,-81.5,220,161.5), rect=new cjs.Rectangle(-110,-80,220,160), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110,-82.7,220,162.7), new cjs.Rectangle(-110,-85.4,220,165.5), new cjs.Rectangle(-110,-88.1,220,168.1), new cjs.Rectangle(-110,-90.6,220,170.7), new cjs.Rectangle(-110,-92.7,220,172.8), new cjs.Rectangle(-110,-94.2,220,174.2), new cjs.Rectangle(-110,-95,220,175), new cjs.Rectangle(-110,-95.1,220,175.1), new cjs.Rectangle(-110,-94.6,220,174.6), new cjs.Rectangle(-110,-93.4,220,173.5), new cjs.Rectangle(-110,-91.7,220,171.8), new cjs.Rectangle(-110,-92.8,220,172.8), new cjs.Rectangle(-110,-93.6,220,173.7), new cjs.Rectangle(-110,-94.3,220,174.3), rect=new cjs.Rectangle(-110,-94.4,220,174.5), rect, new cjs.Rectangle(-110,-94.1,220,174.2), new cjs.Rectangle(-110,-93.4,220,173.4), new cjs.Rectangle(-110,-92.5,220,172.6), new cjs.Rectangle(-110,-89.5,220,169.6), new cjs.Rectangle(-110,-86.5,220,166.6), new cjs.Rectangle(-110,-83.3,220,163.3), new cjs.Rectangle(-110,-80,220,160), new cjs.Rectangle(-113.3,-80,223.4,160), new cjs.Rectangle(-117,-80,227,160), new cjs.Rectangle(-120.5,-80,230.5,160)];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.els_hf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.els_hair01();
	this.instance.setTransform(133.9,167.9,0.822,0.822,0,0,0,79,99.1);

	this.instance_1 = new lib.elsa_fringe1();
	this.instance_1.setTransform(-46.1,30.5);

	this.instance_2 = new lib.elsa_fringe2();
	this.instance_2.setTransform(-45.4,32.3);

	this.instance_3 = new lib.elsa_fringe3();
	this.instance_3.setTransform(-46.4,2.5);

	this.instance_4 = new lib.elsa_fringe4();
	this.instance_4.setTransform(-65.5,-1.4);

	this.instance_5 = new lib.elsa_fringe5();
	this.instance_5.setTransform(-112.8,52.3);

	this.instance_6 = new lib.elsa_fringe6();
	this.instance_6.setTransform(-55.2,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.5,0.6,244.3,259);
p.frameBounds = [rect, new cjs.Rectangle(-46.1,30.5,331,243), new cjs.Rectangle(-45.4,32.3,370,808), new cjs.Rectangle(-46.4,2.5,324,354), new cjs.Rectangle(-65.5,-1.4,364,845), new cjs.Rectangle(-112.8,52.3,480,744), new cjs.Rectangle(-55.2,42.8,353,523)];


(lib.els_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.eyes1();
	this.instance.setTransform(24,-36.6,1,1,0,0,0,123.5,29.4);

	this.instance_1 = new lib.eyes2();
	this.instance_1.setTransform(24,-36.6,1,1,0,0,0,123.5,29.4);

	this.instance_2 = new lib.eyes3();
	this.instance_2.setTransform(24,-36.6,1,1,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.3,-66.3,247,59);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-91.9,-54.6,237,48), rect, rect=new cjs.Rectangle(-96.3,-29.9,240,33), rect, rect=new cjs.Rectangle(-91.9,-54.6,237,48), rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.dress12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr12();
	this.instance.setTransform(-228,-206.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228,-234.2,473,430.5);
p.frameBounds = [rect];


(lib.dress11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr11();
	this.instance.setTransform(-84,-203.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-234.2,300,472.5);
p.frameBounds = [rect];


(lib.dress10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr10();
	this.instance.setTransform(-172,-219.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172,-234.2,331,463.5);
p.frameBounds = [rect];


(lib.dress9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr9();
	this.instance.setTransform(-179,-203.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179,-234.2,368,462.5);
p.frameBounds = [rect];


(lib.dress8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr8();
	this.instance.setTransform(-72,-218.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-234.2,188,343.5);
p.frameBounds = [rect];


(lib.dress7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr7();
	this.instance.setTransform(-198,-204.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-198,-234.2,430,520.5);
p.frameBounds = [rect];


(lib.dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr6();
	this.instance.setTransform(-177,-206.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177,-234.2,303,425.5);
p.frameBounds = [rect];


(lib.dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr5();
	this.instance.setTransform(-97,-211.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-234.2,202,458.5);
p.frameBounds = [rect];


(lib.dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr4();
	this.instance.setTransform(-86,-199.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-234.2,196,461.5);
p.frameBounds = [rect];


(lib.dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr3();
	this.instance.setTransform(-208,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208,-234.2,433,455.5);
p.frameBounds = [rect];


(lib.dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr2();
	this.instance.setTransform(-172,-219.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172,-234.2,356,483.5);
p.frameBounds = [rect];


(lib.dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dr1();
	this.instance.setTransform(-213,-221.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-213,-234.2,426,468.5);
p.frameBounds = [rect];


(lib.dress_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress12();
	this.instance.setTransform(-8,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgFKggZIPYAAMATeBAZMg7XAAZg");
	this.shape.setTransform(-12.6,197.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-236,-10,473,440.5);
p.frameBounds = [rect];


(lib.dress_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress11();
	this.instance.setTransform(-7.5,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A46gEMAKCglGIMHAAMAbsBCNIoIGmMgnAABig");
	this.shape.setTransform(48,229.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-8,320,480.5);
p.frameBounds = [rect];


(lib.dress_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress10();
	this.instance.setTransform(-6.9,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgXaAifMAQ1hFWIP+AAMAOCBFvg");
	this.shape.setTransform(-2.1,215.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178.9,-8,331,471.5);
p.frameBounds = [rect];


(lib.dress_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress9();
	this.instance.setTransform(-8,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3RbgMAR/g5NIP1AAMAMvA7bg");
	this.shape.setTransform(-4.5,180.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187,-10,368,472.5);
p.frameBounds = [rect];


(lib.dress_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress8();
	this.instance.setTransform(-8,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au1cIMgCJggiIHV37IRSgDIJWb9Iobc0g");
	this.shape.setTransform(15,170.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.8,-11.6,217.5,363.5);
p.frameBounds = [rect];


(lib.dress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress7();
	this.instance.setTransform(-7.4,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgZJAmpMATIhNfIOUAAMAQ3BNtg");
	this.shape.setTransform(-5,236.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205.4,-12,430,532.5);
p.frameBounds = [rect];


(lib.dress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress6();
	this.instance.setTransform(-7.5,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1/W5MAUyg01IP8AAMAHRA75g");
	this.shape.setTransform(-27.7,178.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.5,-13,303,438.5);
p.frameBounds = [rect];


(lib.dress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress5();
	this.instance.setTransform(-8,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgNSAhqMgBBgxWII2x9IHMAAIMlbCMgI6AoRg");
	this.shape.setTransform(14.2,204.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-11,210.8,469.5);
p.frameBounds = [rect];


(lib.dress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress4();
	this.instance.setTransform(-7.5,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGHgjFIMMAAMAGFBEMI4SB/g");
	this.shape.setTransform(-0.9,215.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-9,196,470.5);
p.frameBounds = [rect];


(lib.dress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress3();
	this.instance.setTransform(-8,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgdaAhdMAXkhDrINpAAMAVoBEdg");
	this.shape.setTransform(-5.9,210.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216,-9,433,464.5);
p.frameBounds = [rect];


(lib.dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress2();
	this.instance.setTransform(-8.4,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgILghGIQDAAMAO3BBEMgtdABKg");
	this.shape.setTransform(2.4,206);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.4,-6,356,489.5);
p.frameBounds = [rect];


(lib.dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress1();
	this.instance.setTransform(-8,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgiLAe6MAcbhD+IN6gHMAaCBDfIkXGSMg7ZAAmg");
	this.shape.setTransform(-8.1,230.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.9,-7.7,437.7,476.2);
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


(lib.coat3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.coat03();
	this.instance.setTransform(-274,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.coatb3();
	this.instance_2.setTransform(-250,-206.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-274,-234.2,548,440.5);
p.frameBounds = [rect];


(lib.coat2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.coat02();
	this.instance.setTransform(-60,-217.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.coatb2();
	this.instance_2.setTransform(-222,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222,-234.2,435,341.5);
p.frameBounds = [rect];


(lib.coat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.coat01();
	this.instance.setTransform(-50,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(7.4,-202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.coatb1();
	this.instance_2.setTransform(-230,-200.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-234.2,471,437.5);
p.frameBounds = [rect];


(lib.cloak_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coat3();
	this.instance.setTransform(-8,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am7+BIRoAAMASOA7bMg51AAog");
	this.shape.setTransform(-8.6,180.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-282,-11.9,548,452.4);
p.frameBounds = [rect];


(lib.cloak_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coat2();
	this.instance.setTransform(-7.5,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtlNlIAA7JIbLAAIAAbJg");
	this.shape.setTransform(0,71.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-229.5,-15.9,435,357.4);
p.frameBounds = [rect];


(lib.cloak_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coat1();
	this.instance.setTransform(-7.5,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Akk8jIMlAAMAWkA4vMg9JAAYg");
	this.shape.setTransform(-11.6,174.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-237.5,-7.9,471,445.4);
p.frameBounds = [rect];


(lib.cloak_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// animation
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_7_img();
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.check_6_img();
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.check_5_img();
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.check_4_img();
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.check_3_img();
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.check_2_img();
	this.instance_6.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0.012}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5});

	// graph
	this.instance = new lib.hint_filter_en_img();
	this.instance.setTransform(-90,-30);

	this.instance_1 = new lib.hint_filter_ru_img();
	this.instance_1.setTransform(-90,-30);

	this.instance_2 = new lib.hint_filter_de_img();
	this.instance_2.setTransform(-90,-30);

	this.instance_3 = new lib.hint_filter_fr_img();
	this.instance_3.setTransform(-90,-30);

	this.instance_4 = new lib.hint_filter_es_img();
	this.instance_4.setTransform(-90,-30);

	this.instance_5 = new lib.hint_filter_pt_img();
	this.instance_5.setTransform(-90,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// decor
	this.instance_6 = new lib.hint_filter_arrow_mc();
	this.instance_6.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,210,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.beads_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.arrow_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-180,460,360);
p.frameBounds = [rect];


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


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// logo
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(600,300);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:1},0).wait(10).to({alpha:0.91},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.461},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.012},0).to({_off:true},1).wait(20));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(-1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:-944.4},0).wait(1).to({x:-888.9},0).wait(1).to({x:-833.3},0).wait(1).to({x:-777.7},0).wait(1).to({x:-722.2},0).wait(1).to({x:-666.6},0).wait(1).to({x:-611.1},0).wait(1).to({x:-555.5},0).wait(1).to({x:-500},0).wait(1).to({x:-444.4},0).wait(1).to({x:-388.9},0).wait(1).to({x:-333.3},0).wait(1).to({x:-277.7},0).wait(1).to({x:-222.2},0).wait(1).to({x:-166.6},0).wait(1).to({x:-111.1},0).wait(1).to({x:-55.5},0).wait(1).to({x:0},0).wait(10).to({x:-33.3},0).wait(1).to({x:-66.6},0).wait(1).to({x:-100},0).wait(1).to({x:-133.3},0).wait(1).to({x:-166.6},0).wait(1).to({x:-200},0).wait(1).to({x:-233.3},0).wait(1).to({x:-266.6},0).wait(1).to({x:-300},0).wait(1).to({x:-333.3},0).wait(1).to({x:-366.6},0).wait(1).to({x:-400},0).wait(1).to({x:-433.3},0).wait(1).to({x:-466.6},0).wait(1).to({x:-500},0).wait(1).to({x:-533.3},0).wait(1).to({x:-566.6},0).wait(1).to({x:-600},0).wait(1).to({x:-633.3},0).wait(1).to({x:-666.6},0).wait(1).to({x:-700},0).wait(1).to({x:-733.3},0).wait(1).to({x:-766.6},0).wait(1).to({x:-800},0).wait(1).to({x:-833.3},0).wait(1).to({x:-866.6},0).wait(1).to({x:-900},0).wait(1).to({x:-933.3},0).wait(1).to({x:-966.6},0).wait(1).to({x:-1000},0).wait(2));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({x:944.5},0).wait(1).to({x:888.9},0).wait(1).to({x:833.4},0).wait(1).to({x:777.8},0).wait(1).to({x:722.2},0).wait(1).to({x:666.7},0).wait(1).to({x:611.1},0).wait(1).to({x:555.6},0).wait(1).to({x:500},0).wait(1).to({x:444.5},0).wait(1).to({x:388.9},0).wait(1).to({x:333.4},0).wait(1).to({x:277.8},0).wait(1).to({x:222.3},0).wait(1).to({x:166.7},0).wait(1).to({x:111.1},0).wait(1).to({x:55.6},0).wait(1).to({x:0},0).wait(10).to({x:33.4},0).wait(1).to({x:66.7},0).wait(1).to({x:100},0).wait(1).to({x:133.4},0).wait(1).to({x:166.7},0).wait(1).to({x:200},0).wait(1).to({x:233.4},0).wait(1).to({x:266.7},0).wait(1).to({x:300},0).wait(1).to({x:333.4},0).wait(1).to({x:366.7},0).wait(1).to({x:400},0).wait(1).to({x:433.4},0).wait(1).to({x:466.7},0).wait(1).to({x:500},0).wait(1).to({x:533.4},0).wait(1).to({x:566.7},0).wait(1).to({x:600},0).wait(1).to({x:633.4},0).wait(1).to({x:666.7},0).wait(1).to({x:700},0).wait(1).to({x:733.4},0).wait(1).to({x:766.7},0).wait(1).to({x:800},0).wait(1).to({x:833.4},0).wait(1).to({x:866.7},0).wait(1).to({x:900},0).wait(1).to({x:933.4},0).wait(1).to({x:966.7},0).wait(1).to({x:1000},0).wait(2));

	// bg
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(9).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1000,0,3200,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-944.4,0,3088.9,600), new cjs.Rectangle(-888.9,0,2977.8,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-777.7,0,2755.5,600), new cjs.Rectangle(-722.2,0,2644.4,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-611.1,0,2422.2,600), new cjs.Rectangle(-555.5,0,2311.1,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-444.4,0,2088.9,600), new cjs.Rectangle(-388.9,0,1977.8,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-277.7,0,1755.5,600), new cjs.Rectangle(-222.2,0,1644.5,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-111.1,0,1422.2,600), new cjs.Rectangle(-55.5,0,1311.1,600), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-33.3,0,1266.7,600), new cjs.Rectangle(-66.6,0,1333.3,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-133.3,0,1466.7,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-233.3,0,1666.7,600), new cjs.Rectangle(-266.6,0,1733.3,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-366.6,0,1933.3,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-433.3,0,2066.7,600), new cjs.Rectangle(-466.6,0,2133.3,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-533.3,0,2266.7,600), new cjs.Rectangle(-566.6,0,2333.3,600), new cjs.Rectangle(-600,0,2400,600), new cjs.Rectangle(-633.3,0,2466.7,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-700,0,2600,600), new cjs.Rectangle(-733.3,0,2666.7,600), new cjs.Rectangle(-766.6,0,2733.3,600), new cjs.Rectangle(-800,0,2800,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-866.6,0,2933.3,600), new cjs.Rectangle(-900,0,3000,600), new cjs.Rectangle(-933.3,0,3066.7,600), new cjs.Rectangle(-966.6,0,3133.3,600), rect=new cjs.Rectangle(-1000,0,3200,600), rect];


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
	this.instance.setTransform(-200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-348.7,106.8,302.5,181.5), new cjs.Rectangle(-345,97.1,309.9,186), new cjs.Rectangle(-338.9,81.1,322.2,193.4), new cjs.Rectangle(-330.2,58.6,339.5,203.7), new cjs.Rectangle(-319,29.7,361.7,217.1), new cjs.Rectangle(-305.5,-5.5,388.9,233.4), new cjs.Rectangle(-289.4,-47.2,421,252.6), new cjs.Rectangle(-270.9,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


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
		_createSnowflakesFunc(20);
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
				snowflake_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
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
			target_mc.gotoAndStop(0);
			/*
			обновляем координаты
			*/
			target_mc.x -= target_mc.rad;
			target_mc.y += _SPEED_NUM;
			target_mc.rotation += 0.1;
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
	this.instance.setTransform(400,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,700);
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


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


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


(lib.next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), new cjs.Rectangle(-95,-95,190,190)];


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

	// decor
	this.instance = new lib.snow_logo_mc();
	this.instance.setTransform(0,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance_1 = new lib.beam_light_0_mc();
	this.instance_1.setTransform(-220,0,1,1,30);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_2 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-74,290,114);
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


(lib.sparkss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sparkani2();
	this.instance.setTransform(183,334,0.758,0.758,0,0,0,20.7,20.7);

	this.instance_1 = new lib.sparkani2();
	this.instance_1.setTransform(92.7,199,0.758,0.758,0,0,0,20.7,20.7);

	this.instance_2 = new lib.sparkani();
	this.instance_2.setTransform(165.5,340.8,1,1,0,0,0,-57.3,330.8);

	this.instance_3 = new lib.sparkani2();
	this.instance_3.setTransform(20.7,42.8,1,1,0,0,0,20.7,20.7);

	this.instance_4 = new lib.sparkani2();
	this.instance_4.setTransform(47.5,271.8,1,1,0,0,0,20.7,20.7);

	this.instance_5 = new lib.sparkani();
	this.instance_5.setTransform(173.5,191.7,1,1,0,0,0,20.7,20.7);

	this.instance_6 = new lib.sparkani2();
	this.instance_6.setTransform(252.5,224.8,1,1,0,0,0,20.7,20.7);

	this.instance_7 = new lib.sparkani2();
	this.instance_7.setTransform(171.5,20.7,1,1,0,0,0,20.7,20.7);

	this.instance_8 = new lib.sparkani();
	this.instance_8.setTransform(100.5,54.7,1,1,0,0,0,20.7,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,272.8,349.4);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(133.3,0,0.889,0.889,0,0,180,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(-0.9,0,0.75,0.75,0,0,180,1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-190.5,352.5,381.1);
p.frameBounds = [rect];


(lib.pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_pointer_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.83,scaleY:0.83},14).to({scaleX:1,scaleY:1},15).wait(1));

	// animation
	this.waves_mc = new lib.animation_for_pointer_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.waves_mc).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-110.6,-58.2,118.6,118.6), new cjs.Rectangle(-109.3,-57.5,117.2,117.2), new cjs.Rectangle(-107.9,-56.8,115.7,115.7), new cjs.Rectangle(-106.6,-56.1,114.3,114.3), new cjs.Rectangle(-105.3,-55.4,112.9,112.9), new cjs.Rectangle(-104,-54.7,111.5,111.5), new cjs.Rectangle(-102.6,-54,110,110), new cjs.Rectangle(-101.3,-53.3,108.6,108.6), new cjs.Rectangle(-99.9,-52.6,107.2,107.2), new cjs.Rectangle(-98.6,-51.9,105.7,105.7), new cjs.Rectangle(-97.3,-51.2,104.3,104.3), new cjs.Rectangle(-95.9,-50.5,102.9,102.9), new cjs.Rectangle(-94.6,-49.8,101.5,101.5), new cjs.Rectangle(-93.3,-49.1,100,100), new cjs.Rectangle(-94.5,-49.8,101.4,101.4), new cjs.Rectangle(-95.8,-50.4,102.7,102.7), new cjs.Rectangle(-97,-51.1,104,104), new cjs.Rectangle(-98.3,-51.7,105.4,105.4), new cjs.Rectangle(-99.5,-52.4,106.7,106.7), new cjs.Rectangle(-100.7,-53,108,108), new cjs.Rectangle(-102,-53.7,109.4,109.4), new cjs.Rectangle(-103.2,-54.4,110.7,110.7), new cjs.Rectangle(-104.5,-55,112,112), new cjs.Rectangle(-105.7,-55.7,113.4,113.4), new cjs.Rectangle(-107,-56.3,114.7,114.7), new cjs.Rectangle(-108.2,-57,116,116), new cjs.Rectangle(-109.5,-57.6,117.4,117.4), new cjs.Rectangle(-110.7,-58.3,118.7,118.7), new cjs.Rectangle(-112,-59,120,120)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(-133.3,0,0.889,0.889,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.5,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0.9,0,0.75,0.75,0,0,0,1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-292.4,-190.5,352.5,381.1);
p.frameBounds = [rect];


(lib.makeup28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Layer 7
	this.instance = new lib.lpst();
	this.instance.setTransform(631.7,354.9,1,1,0,0,0,23,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:23.1,rotation:-24,x:397.8,y:548.1},12).to({rotation:-9,x:455.8},24).to({rotation:-99,y:662.1},10).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.lp2();
	this.instance_1.setTransform(399.8,464.2,1,1,180,0,0,46.3,5.9);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({alpha:1},23).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// Layer 6
	this.instance_2 = new lib.lipsbad2();
	this.instance_2.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({alpha:0.012},24).to({_off:true},1).wait(11));

	// Layer 4
	this.instance_3 = new lib.eyes1();
	this.instance_3.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

	// eyes
	this.instance_4 = new lib.eyes1();
	this.instance_4.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48));

	// shad
	this.instance_5 = new lib.shadows();
	this.instance_5.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48));

	// lips
	this.instance_6 = new lib.lips();
	this.instance_6.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48));

	// bdoy
	this.instance_7 = new lib.headmake();
	this.instance_7.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48));

	// Layer 5
	this.instance_8 = new lib.table();
	this.instance_8.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,738.4), new cjs.Rectangle(-32.5,-120.2,875.2,754), new cjs.Rectangle(-32.5,-120.2,875.2,769.5), new cjs.Rectangle(-32.5,-120.2,875.2,769.7), new cjs.Rectangle(-32.5,-120.2,875.2,769.8), new cjs.Rectangle(-32.5,-120.2,875.2,770.1), new cjs.Rectangle(-32.5,-120.2,875.2,770.2), new cjs.Rectangle(-32.5,-120.2,875.2,770.4), new cjs.Rectangle(-32.5,-120.2,875.2,770.5), new cjs.Rectangle(-32.5,-120.2,875.2,770.7), new cjs.Rectangle(-32.5,-120.2,875.2,770.8), new cjs.Rectangle(-32.5,-120.2,875.2,770.9), new cjs.Rectangle(-32.5,-120.2,875.2,771), new cjs.Rectangle(-32.5,-120.2,875.2,771.1), new cjs.Rectangle(-32.5,-120.2,875.2,771.2), new cjs.Rectangle(-32.5,-120.2,875.2,771.3), rect=new cjs.Rectangle(-32.5,-120.2,875.2,771.4), rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,771.5), rect=new cjs.Rectangle(-32.5,-120.2,875.2,771.4), rect, rect=new cjs.Rectangle(-32.5,-120.2,875.2,771.3), rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,782.4), new cjs.Rectangle(-32.5,-120.2,875.2,791), new cjs.Rectangle(-32.5,-120.2,875.2,797.2), new cjs.Rectangle(-32.5,-120.2,875.2,801.1), new cjs.Rectangle(-32.5,-120.2,875.2,802.8), new cjs.Rectangle(-32.5,-120.2,875.2,802.6), new cjs.Rectangle(-32.5,-120.2,875.2,800.8), new cjs.Rectangle(-32.5,-120.2,875.2,797.7), new cjs.Rectangle(-32.5,-120.2,875.2,794), new cjs.Rectangle(-32.5,-120.2,875.2,821), new cjs.Rectangle(-32.5,-120.2,875.2,723.4)];


(lib.makeup27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// Layer 7
	this.instance = new lib.lpst();
	this.instance.setTransform(631.7,354.9,1,1,0,0,0,23,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-23,x:403.6,y:532.4},12).to({regX:22.9,scaleX:1,scaleY:1,rotation:-19.1,x:423.7,y:526.7},11).to({regX:23.1,scaleX:1,scaleY:1,rotation:-15,x:458.5,y:532.8},12).to({regX:23,rotation:0,x:631.7,y:354.9},10).wait(2));

	// Layer 2
	this.instance_1 = new lib.lp1();
	this.instance_1.setTransform(399.9,447.6,1,1,0,0,0,46.3,5.9);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({alpha:1},23).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.lipsbad1();
	this.instance_2.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({alpha:0.012},23).to({_off:true},1).wait(11));

	// Layer 6
	this.instance_3 = new lib.lipsbad2();
	this.instance_3.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47));

	// eyes
	this.instance_4 = new lib.eyes1();
	this.instance_4.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47));

	// shad
	this.instance_5 = new lib.shadows();
	this.instance_5.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47));

	// lips
	this.instance_6 = new lib.lips();
	this.instance_6.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47));

	// bdoy
	this.instance_7 = new lib.headmake();
	this.instance_7.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47));

	// Layer 3
	this.instance_8 = new lib.table();
	this.instance_8.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,725.4), new cjs.Rectangle(-32.5,-120.2,875.2,739.7), new cjs.Rectangle(-32.5,-120.2,875.2,754.1), new cjs.Rectangle(-32.5,-120.2,875.2,753.6), new cjs.Rectangle(-32.5,-120.2,875.2,753.2), new cjs.Rectangle(-32.5,-120.2,875.2,752.7), new cjs.Rectangle(-32.5,-120.2,875.2,752.3), new cjs.Rectangle(-32.5,-120.2,875.2,751.9), new cjs.Rectangle(-32.5,-120.2,875.2,751.4), new cjs.Rectangle(-32.5,-120.2,875.2,751), new cjs.Rectangle(-32.5,-120.2,875.2,750.6), new cjs.Rectangle(-32.5,-120.2,875.2,750), new cjs.Rectangle(-32.5,-120.2,875.2,749.7), new cjs.Rectangle(-32.5,-120.2,875.2,749.2), new cjs.Rectangle(-32.5,-120.2,875.2,749.7), new cjs.Rectangle(-32.5,-120.2,875.2,750.4), new cjs.Rectangle(-32.5,-120.2,875.2,750.9), new cjs.Rectangle(-32.5,-120.2,875.2,751.5), new cjs.Rectangle(-32.5,-120.2,875.2,752.1), new cjs.Rectangle(-32.5,-120.2,875.2,752.6), new cjs.Rectangle(-32.5,-120.2,875.2,753.3), new cjs.Rectangle(-32.5,-120.2,875.2,753.8), new cjs.Rectangle(-32.5,-120.2,875.2,754.4), new cjs.Rectangle(-32.5,-120.2,875.2,754.9), new cjs.Rectangle(-32.5,-120.2,875.2,755.5), new cjs.Rectangle(-32.5,-120.2,875.2,756.2), new cjs.Rectangle(-32.5,-120.2,875.2,738.4), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Слой 3
	this.instance = new lib.lpst();
	this.instance.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(10));

	// Layer 7
	this.instance_1 = new lib.lpst();
	this.instance_1.setTransform(631.7,650.9,1,1,-90,0,0,23,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,y:354.9},10).wait(1));

	// Layer 5
	this.instance_2 = new lib.lipsbad1();
	this.instance_2.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

	// Layer 6
	this.instance_3 = new lib.lipsbad2();
	this.instance_3.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	// eyes
	this.instance_4 = new lib.eyes1();
	this.instance_4.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11));

	// shad
	this.instance_5 = new lib.shadows();
	this.instance_5.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11));

	// lips
	this.instance_6 = new lib.lips();
	this.instance_6.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11));

	// bdoy
	this.instance_7 = new lib.headmake();
	this.instance_7.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11));

	// Layer 3
	this.instance_8 = new lib.table();
	this.instance_8.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,794.2);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-120.2,875.2,780), new cjs.Rectangle(-32.5,-120.2,875.2,764.6), new cjs.Rectangle(-32.5,-120.2,875.2,748.5), new cjs.Rectangle(-32.5,-120.2,875.2,730.2), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect];


(lib.makeup25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_167 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(167).call(this.frame_167).wait(1));

	// Layer 4
	this.instance = new lib.sparkss();
	this.instance.setTransform(392.6,334.5,1,1,0,0,0,136.6,174.8);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:false},0).to({alpha:1},16).to({alpha:0.012},16).wait(3));

	// Layer 8
	this.instance_1 = new lib.stick3_2();
	this.instance_1.setTransform(642.5,312.1,1,1,0,0,0,17.1,140.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-30,x:349.7,y:320.1},12).to({rotation:15,x:486.3,y:297.5},21).to({rotation:-30,x:391.9,y:373.5},14).to({regY:140.2,rotation:30,x:398,y:385.5},17).to({regY:140.3,rotation:-22.7,x:334.6,y:511.6},11).to({regY:140.2,rotation:22.3,x:470.6,y:499.6},24).to({rotation:-22.7,x:360.9,y:586.7},10).to({rotation:1.5,x:412,y:622.3},13).to({rotation:22.3,x:454.9,y:574.8},11).to({rotation:82.3,y:676.8},9).to({_off:true},1).wait(25));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_18 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_19 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_30 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_31 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_33 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_37 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_38 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_39 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_40 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_41 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_42 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_43 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_44 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_45 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_46 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_47 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_48 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_49 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_50 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_51 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_52 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_53 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_54 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_55 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_56 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_57 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_58 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_59 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_60 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_61 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_62 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_63 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_64 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_65 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_66 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_67 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_68 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_69 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_70 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_71 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_72 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_73 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_74 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_75 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_76 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_77 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_78 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_79 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_80 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_81 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_82 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_83 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_84 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_85 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_86 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_87 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_88 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_89 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_90 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_91 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_92 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_93 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_94 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_95 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_96 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_97 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_98 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_99 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_100 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_101 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_102 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_103 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_104 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_105 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_106 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_107 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_108 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_109 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_110 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_111 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_112 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_113 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_114 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_115 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_116 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_117 = new cjs.Graphics().p("Eg5YApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_118 = new cjs.Graphics().p("Eg5JApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_119 = new cjs.Graphics().p("Eg4MApQQiNgehGAAQgZgBk7AVIgfABQrbASg9AAIkEACQjJABingDMAAAhAqMBMxAAAMBa8gAQQB7AICIAgQCeAkAUAUQgdAfhmA9QhnA/gGAGQAMAPAmAYIBKAsQBgA8AAAvQAAAMgnAmQg0AxgJAKQASAcA0AcIBlAwQCBA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhCAVgpAdQAkAxA+AVQAXAIAIAIQALAOAAAdQAABLi/ApQiRAfkzATQlmASimAMIgCAAIAAgZIutAAIAAAZQkfAUh7AjQAOAjA7AyQBoBZAXAYQgYAag7AUIhhAiQACAFA2A+QA0A8AMAhIhkA7QAAAqAeAvQAeAxAAANQAABtn6BnQiSAdjcAjIg4AIIzZABQiLAVgNADQAEA7BJA2QAsAgBPAjQgoBQguBAQAoASBQAbQAvASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhJAjIgJAEMgrcAAAIAFAIQAnA8ACAzQgegDhlAqQhnAqgagCQACAjAaAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mWBHIhyATQnyBPlWAAQgwAAiNgdg");
	var mask_graphics_120 = new cjs.Graphics().p("Eg3OApQQiNgehGAAQgZgBk7AVIgfABQrbASg9AAIkEACQjKABimgDMAAAhAqMBMwAAAMBa9gAQQB7AICIAgQCeAkAUAUQgdAfhmA9QhnA/gGAGQAMAPAmAYIBKAsQBgA8AAAvQAAAMgnAmQg0AxgJAKQASAcA0AcIBlAwQCBA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhCAVgpAdQAkAxA+AVQAXAIAIAIQALAOAAAdQAABLi/ApQiRAfkzATQlmASimAMIgCAAIAAgZIutAAIAAAZQkfAUh7AjQAOAjA7AyQBoBZAXAYQgYAag7AUIhhAiQACAFA2A+QA0A8AMAhIhkA7QAAAqAeAvQAeAxAAANQAABtn6BnQiSAdjcAjIg4AIIzZABQiLAVgNADQAEA7BJA2QAsAgBPAjQgoBQguBAQAoASBQAbQAvASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhJAjIgKAEMgrbAAAIAFAIQAnA8ACAzQgegDhlAqQhnAqgagCQACAjAaAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mWBHIhyATQnyBPlWAAQgwAAiNgdg");
	var mask_graphics_121 = new cjs.Graphics().p("Eg2QApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_122 = new cjs.Graphics().p("Eg1TApQQiNgehGAAQgZgBk7AVIgfABQrbASg9AAIkEACQjJABingDMAAAhAqMBMxAAAMBa8gAQQB7AICIAgQCeAkAUAUQgdAfhmA9QhnA/gGAGQAMAPAmAYIBKAsQBgA8AAAvQAAAMgnAmQg0AxgJAKQASAcA0AcIBlAwQCBA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhCAVgpAdQAkAxA+AVQAXAIAIAIQALAOAAAdQAABLi/ApQiRAfkzATQlmASimAMIgCAAIAAgZIutAAIAAAZQkfAUh7AjQAOAjA7AyQBoBZAXAYQgYAag7AUIhhAiQACAFA2A+QA0A8AMAhIhkA7QAAAqAeAvQAeAxAAANQAABtn6BnQiSAdjcAjIg4AIIzZABQiLAVgNADQAEA7BJA2QAsAgBPAjQgnBQgvBAQAoASBQAbQAvASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhJAjIgJAEMgrcAAAIAFAIQAnA8ACAzQgegDhlAqQhnAqgagCQACAjAaAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mWBHIhyATQnyBPlWAAQgwAAiNgdg");
	var mask_graphics_123 = new cjs.Graphics().p("Eg0VApQQiNgehGAAQgZgBk7AVIgfABQrbASg9AAIkEACQjKABimgDMAAAhAqMBMwAAAMBa9gAQQB7AICIAgQCeAkAUAUQgdAfhmA9QhnA/gGAGQAMAPAmAYIBKAsQBgA8AAAvQAAAMgnAmQg0AxgJAKQASAcA0AcIBlAwQCBA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhCAVgpAdQAkAxA+AVQAXAIAIAIQALAOAAAdQAABLi/ApQiRAfkzATQlmASimAMIgCAAIAAgZIutAAIAAAZQkfAUh7AjQAOAjA7AyQBoBZAXAYQgYAag7AUIhhAiQACAFA2A+QA0A8AMAhIhkA7QAAAqAeAvQAeAxAAANQAABtn6BnQiSAdjcAjIg4AIIzZABQiLAVgNADQAEA7BJA2QAsAgBPAjQgoBQguBAQAoASBQAbQAvASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhJAjIgKAEMgrbAAAIAFAIQAnA8ACAzQgegDhlAqQhnAqgagCQACAjAaAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mWBHIhyATQnyBPlWAAQgwAAiNgdg");
	var mask_graphics_124 = new cjs.Graphics().p("EgzXApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_125 = new cjs.Graphics().p("EgyZApQQiOgehGAAQgZgBk7AVIgfABQrbASg9AAIkEACQjJABingDMAAAhAqMBMxAAAMBa8gAQQB7AICJAgQCdAkAVAUQgeAfhmA9QhnA/gGAGQAMAPAmAYIBLAsQBfA8AAAvQAAAMgnAmQg0AxgJAKQATAcAzAcIBlAwQCBA8ABA5QgBApgiAZQgbASg9ARQhIASgmALQhDAVgoAdQAkAxA+AVQAWAIAIAIQALAOAAAdQAABLi/ApQiRAfkzATQlmASimAMIgCAAIAAgZIutAAIAAAZQkeAUh8AjQAPAjA6AyQBoBZAXAYQgYAag7AUIhhAiQACAFA3A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn6BnQiSAdjcAjIg4AIIzZABQiLAVgMADQADA7BJA2QAsAgBQAjQgoBQgvBAQAoASBQAbQAwASAAAbQgBAehKA8QhMA8AAAeQABATAoA9QAoA8gBAZQAAAvhJAlIhJAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgegDhlAqQhnAqgagCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhzATQnyBPlWAAQgvAAiNgdg");
	var mask_graphics_126 = new cjs.Graphics().p("EgxcApQQiNgehGAAQgZgBk7AVIgfABQrbASg9AAIkEACQjKABimgDMAAAhAqMBMwAAAMBa9gAQQB7AICIAgQCeAkAUAUQgdAfhmA9QhnA/gGAGQAMAPAmAYIBKAsQBgA8AAAvQAAAMgnAmQg0AxgJAKQASAcA0AcIBlAwQCBA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhCAVgpAdQAkAxA+AVQAXAIAIAIQALAOAAAdQAABLi/ApQiRAfkzATQlmASimAMIgCAAIAAgZIutAAIAAAZQkfAUh7AjQAOAjA7AyQBoBZAXAYQgYAag7AUIhhAiQACAFA2A+QA0A8AMAhIhkA7QAAAqAeAvQAeAxAAANQAABtn6BnQiSAdjcAjIg4AIIzZABQiLAVgNADQAEA7BJA2QAsAgBPAjQgoBQguBAQAoASBQAbQAvASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhJAjIgKAEMgrbAAAIAFAIQAnA8ACAzQgegDhlAqQhnAqgagCQACAjAaAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mWBHIhyATQnyBPlWAAQgwAAiNgdg");
	var mask_graphics_127 = new cjs.Graphics().p("EgweApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_128 = new cjs.Graphics().p("EgvgApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_129 = new cjs.Graphics().p("EgujApQQiNgehGAAQgZgBk7AVIgfABQrbASg9AAIkEACQjKABimgDMAAAhAqMBMwAAAMBa9gAQQB7AICIAgQCeAkAUAUQgdAfhmA9QhnA/gGAGQAMAPAmAYIBKAsQBgA8AAAvQAAAMgnAmQg0AxgJAKQASAcA0AcIBlAwQCBA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhCAVgpAdQAkAxA+AVQAXAIAIAIQALAOAAAdQAABLi/ApQiRAfkzATQlmASimAMIgCAAIAAgZIutAAIAAAZQkfAUh7AjQAOAjA7AyQBoBZAXAYQgYAag7AUIhhAiQACAFA2A+QA0A8AMAhIhkA7QAAAqAeAvQAeAxAAANQAABtn6BnQiSAdjcAjIg4AIIzZABQiLAVgNADQAEA7BJA2QAsAgBPAjQgoBQguBAQAoASBQAbQAvASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhJAjIgJAEMgrcAAAIAFAIQAnA8ACAzQgegDhlAqQhnAqgagCQACAjAaAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mWBHIhyATQnyBPlWAAQgwAAiNgdg");
	var mask_graphics_130 = new cjs.Graphics().p("EgtlApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMxAAAMBa9gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzYABQiLAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_131 = new cjs.Graphics().p("EgsnApQQiOgehGAAQgZgBk7AVIgeABQrbASg+AAIkEACQjJABingDMAAAhAqMBMvAAAMBa/gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASinAMIgCAAIAAgZIusAAIAAAZQkfAUh8AjQAPAjA6AyQBoBZAXAYQgYAag6AUIhiAiQADAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAeAxAAANQAABtn5BnQiTAdjcAjIg4AIIzZABQiKAVgNADQADA7BJA2QAsAgBQAjQgoBQgvBAQApASBPAbQAwASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrcAAAIAFAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mVBHIhyATQnzBPlWAAQgvAAiNgdg");
	var mask_graphics_132 = new cjs.Graphics().p("EgrqApQQiNgehGAAQgZgBk7AVIgfABQrbASg9AAIkEACQjKABimgDMAAAhAqMBMvAAAMBa+gAQQB7AICIAgQCeAkAUAUQgdAfhmA9QhnA/gGAGQAMAPAmAYIBKAsQBgA8AAAvQAAAMgnAmQg0AxgJAKQASAcA0AcIBlAwQCBA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhCAVgpAdQAkAxA+AVQAXAIAIAIQALAOAAAdQAABLi/ApQiRAfkzATQlmASimAMIgCAAIAAgZIutAAIAAAZQkfAUh7AjQAOAjA7AyQBoBZAXAYQgYAag7AUIhhAiQACAFA2A+QA0A8AMAhIhkA7QAAAqAeAvQAeAxAAANQAABtn6BnQiSAdjcAjIg4AIIzZABQiLAVgNADQAEA7BJA2QAsAgBPAjQgoBQguBAQAoASBQAbQAvASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhJAjIgJAEMgrcAAAIAFAIQAnA8ACAzQgegDhlAqQhnAqgagCQACAjAaAcQAPARAoAfQAmAdAPASQAYAcAAAjQAAAVgZAZQgNAMgqAfQhQA7AAAqQAAASAoA/QAoA+AAARQAAA8mWBHIhyATQnyBPlWAAQgwAAiNgdg");
	var mask_graphics_133 = new cjs.Graphics().p("EgqsApQQiNgehHAAQgYgBk7AVIgfABQrbASg+AAIkEACQjJABingDMAAAhAqMBMvAAAMBa/gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASimAMIgCAAIAAgZIutAAIAAAZQkfAUh7AjQAOAjA7AyQBnBZAYAYQgZAag6AUIhhAiQACAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAfAxAAANQgBBtn5BnQiTAdjbAjIg4AIIzZABQiLAVgNADQAEA7BIA2QAtAgBPAjQgoBQgvBAQApASBQAbQAvASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrbAAAIAEAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAZAcAAAjQAAAVgaAZQgNAMgqAfQhQA7AAAqQABASAoA/QAnA+AAARQAAA8mVBHIhyATQnzBPlVAAQgwAAiNgdg");
	var mask_graphics_134 = new cjs.Graphics().p("EgqsApQQiNgehHAAQgYgBk7AVIgfABQrbASg+AAIkEACQjJABingDMAAAhAqMBMvAAAMBa/gAQQB7AICIAgQCdAkAVAUQgdAfhmA9QhoA/gFAGQALAPAnAYIBKAsQBgA8AAAvQAAAMgoAmQg0AxgIAKQASAcA0AcIBkAwQCCA8AAA5QAAApgjAZQgbASg8ARQhJASgmALQhDAVgoAdQAkAxA+AVQAXAIAHAIQAMAOAAAdQAABLjAApQiRAfkyATQlmASimAMIgCAAIAAgZIutAAIAAAZQkfAUh7AjQAOAjA7AyQBnBZAYAYQgZAag6AUIhhAiQACAFA2A+QA0A8ALAhIhkA7QAAAqAeAvQAfAxAAANQgBBtn5BnQiTAdjbAjIg4AIIzZABQiLAVgNADQAEA7BIA2QAtAgBPAjQgoBQgvBAQApASBQAbQAvASAAAbQAAAehLA8QhLA8AAAeQAAATAoA9QAoA8AAAZQAAAvhJAlIhKAjIgJAEMgrbAAAIAEAIQAoA8ABAzQgdgDhmAqQhmAqgbgCQADAjAZAcQAPARAoAfQAmAdAPASQAZAcAAAjQAAAVgaAZQgNAMgqAfQhQA7AAAqQABASAoA/QAnA+AAARQAAA8mVBHIhyATQnzBPlVAAQgwAAiNgdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_1,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_2,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_3,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_4,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_5,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_6,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_7,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_8,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_9,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_10,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_11,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_12,x:-314.6,y:267}).wait(1).to({graphics:mask_graphics_13,x:-299.8,y:267}).wait(1).to({graphics:mask_graphics_14,x:-284.9,y:267}).wait(1).to({graphics:mask_graphics_15,x:-270,y:267}).wait(1).to({graphics:mask_graphics_16,x:-255.2,y:267}).wait(1).to({graphics:mask_graphics_17,x:-240.3,y:267}).wait(1).to({graphics:mask_graphics_18,x:-225.5,y:267}).wait(1).to({graphics:mask_graphics_19,x:-210.6,y:267}).wait(1).to({graphics:mask_graphics_20,x:-195.7,y:267}).wait(1).to({graphics:mask_graphics_21,x:-180.9,y:267}).wait(1).to({graphics:mask_graphics_22,x:-166,y:267}).wait(1).to({graphics:mask_graphics_23,x:-151.2,y:267}).wait(1).to({graphics:mask_graphics_24,x:-136.3,y:267}).wait(1).to({graphics:mask_graphics_25,x:-121.5,y:267}).wait(1).to({graphics:mask_graphics_26,x:-106.6,y:267}).wait(1).to({graphics:mask_graphics_27,x:-91.7,y:267}).wait(1).to({graphics:mask_graphics_28,x:-76.9,y:267}).wait(1).to({graphics:mask_graphics_29,x:-62,y:267}).wait(1).to({graphics:mask_graphics_30,x:-47.2,y:267}).wait(1).to({graphics:mask_graphics_31,x:-32.3,y:267}).wait(1).to({graphics:mask_graphics_32,x:-17.4,y:267}).wait(1).to({graphics:mask_graphics_33,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_34,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_35,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_36,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_37,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_38,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_39,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_40,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_41,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_42,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_43,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_44,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_45,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_46,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_47,x:-2.6,y:267}).wait(1).to({graphics:mask_graphics_48,x:6.7,y:267}).wait(1).to({graphics:mask_graphics_49,x:16,y:267}).wait(1).to({graphics:mask_graphics_50,x:25.3,y:267}).wait(1).to({graphics:mask_graphics_51,x:34.6,y:267}).wait(1).to({graphics:mask_graphics_52,x:43.9,y:267}).wait(1).to({graphics:mask_graphics_53,x:53.2,y:267}).wait(1).to({graphics:mask_graphics_54,x:62.5,y:267}).wait(1).to({graphics:mask_graphics_55,x:71.8,y:267}).wait(1).to({graphics:mask_graphics_56,x:81.1,y:267}).wait(1).to({graphics:mask_graphics_57,x:90.4,y:267}).wait(1).to({graphics:mask_graphics_58,x:99.7,y:267}).wait(1).to({graphics:mask_graphics_59,x:109,y:267}).wait(1).to({graphics:mask_graphics_60,x:118.3,y:267}).wait(1).to({graphics:mask_graphics_61,x:127.6,y:267}).wait(1).to({graphics:mask_graphics_62,x:136.9,y:267}).wait(1).to({graphics:mask_graphics_63,x:146.2,y:267}).wait(1).to({graphics:mask_graphics_64,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_65,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_66,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_67,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_68,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_69,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_70,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_71,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_72,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_73,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_74,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_75,x:155.5,y:267}).wait(1).to({graphics:mask_graphics_76,x:168.1,y:267}).wait(1).to({graphics:mask_graphics_77,x:180.8,y:267}).wait(1).to({graphics:mask_graphics_78,x:193.5,y:267}).wait(1).to({graphics:mask_graphics_79,x:206.2,y:267}).wait(1).to({graphics:mask_graphics_80,x:218.8,y:267}).wait(1).to({graphics:mask_graphics_81,x:231.5,y:267}).wait(1).to({graphics:mask_graphics_82,x:244.2,y:267}).wait(1).to({graphics:mask_graphics_83,x:256.8,y:267}).wait(1).to({graphics:mask_graphics_84,x:269.5,y:267}).wait(1).to({graphics:mask_graphics_85,x:282.2,y:267}).wait(1).to({graphics:mask_graphics_86,x:294.9,y:267}).wait(1).to({graphics:mask_graphics_87,x:307.5,y:267}).wait(1).to({graphics:mask_graphics_88,x:320.2,y:267}).wait(1).to({graphics:mask_graphics_89,x:332.9,y:267}).wait(1).to({graphics:mask_graphics_90,x:345.5,y:267}).wait(1).to({graphics:mask_graphics_91,x:358.2,y:267}).wait(1).to({graphics:mask_graphics_92,x:370.9,y:267}).wait(1).to({graphics:mask_graphics_93,x:383.6,y:267}).wait(1).to({graphics:mask_graphics_94,x:396.2,y:267}).wait(1).to({graphics:mask_graphics_95,x:408.9,y:267}).wait(1).to({graphics:mask_graphics_96,x:421.6,y:267}).wait(1).to({graphics:mask_graphics_97,x:434.2,y:267}).wait(1).to({graphics:mask_graphics_98,x:446.9,y:267}).wait(1).to({graphics:mask_graphics_99,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_100,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_101,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_102,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_103,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_104,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_105,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_106,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_107,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_108,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_109,x:459.6,y:267}).wait(1).to({graphics:mask_graphics_110,x:471.9,y:267}).wait(1).to({graphics:mask_graphics_111,x:484.3,y:267}).wait(1).to({graphics:mask_graphics_112,x:496.6,y:267}).wait(1).to({graphics:mask_graphics_113,x:508.9,y:267}).wait(1).to({graphics:mask_graphics_114,x:521.3,y:267}).wait(1).to({graphics:mask_graphics_115,x:533.6,y:267}).wait(1).to({graphics:mask_graphics_116,x:545.9,y:267}).wait(1).to({graphics:mask_graphics_117,x:558.3,y:267}).wait(1).to({graphics:mask_graphics_118,x:569.1,y:267}).wait(1).to({graphics:mask_graphics_119,x:575.3,y:267}).wait(1).to({graphics:mask_graphics_120,x:581.5,y:267}).wait(1).to({graphics:mask_graphics_121,x:587.6,y:267}).wait(1).to({graphics:mask_graphics_122,x:593.8,y:267}).wait(1).to({graphics:mask_graphics_123,x:600,y:267}).wait(1).to({graphics:mask_graphics_124,x:606.1,y:267}).wait(1).to({graphics:mask_graphics_125,x:612.3,y:267}).wait(1).to({graphics:mask_graphics_126,x:618.5,y:267}).wait(1).to({graphics:mask_graphics_127,x:624.6,y:267}).wait(1).to({graphics:mask_graphics_128,x:630.8,y:267}).wait(1).to({graphics:mask_graphics_129,x:637,y:267}).wait(1).to({graphics:mask_graphics_130,x:643.1,y:267}).wait(1).to({graphics:mask_graphics_131,x:649.3,y:267}).wait(1).to({graphics:mask_graphics_132,x:655.5,y:267}).wait(1).to({graphics:mask_graphics_133,x:661.7,y:267}).wait(1).to({graphics:mask_graphics_134,x:661.7,y:267}).wait(34));

	// Layer 2
	this.instance_2 = new lib.maskpink();
	this.instance_2.setTransform(394,333,1,1,0,0,0,141,194);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(133).to({alpha:0.012},32).to({_off:true},1).wait(2));

	// Layer 6
	this.instance_3 = new lib.lipsbad();
	this.instance_3.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(168));

	// eyes
	this.instance_4 = new lib.eyes1();
	this.instance_4.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.instance_5 = new lib.eyes3();
	this.instance_5.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_4}]},159).wait(6));

	// shad
	this.instance_6 = new lib.shadows();
	this.instance_6.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(168));

	// lips
	this.instance_7 = new lib.lips();
	this.instance_7.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(168));

	// bdoy
	this.instance_8 = new lib.headmake();
	this.instance_8.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(168));

	// Layer 2
	this.instance_9 = new lib.lpst();
	this.instance_9.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(168));

	// Layer 3
	this.instance_10 = new lib.table();
	this.instance_10.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,727.4), new cjs.Rectangle(-32.5,-120.2,875.2,739.4), new cjs.Rectangle(-32.5,-120.2,875.2,750.5), new cjs.Rectangle(-32.5,-120.2,875.2,760.5), new cjs.Rectangle(-32.5,-120.2,875.2,769.7), new cjs.Rectangle(-32.5,-120.2,875.2,770.1), new cjs.Rectangle(-32.5,-120.2,875.2,770.6), new cjs.Rectangle(-32.5,-120.2,875.2,770.8), rect=new cjs.Rectangle(-32.5,-120.2,875.2,770.9), rect, new cjs.Rectangle(-32.5,-120.2,875.2,770.6), new cjs.Rectangle(-32.5,-120.2,875.2,770.3), new cjs.Rectangle(-32.5,-120.2,875.2,769.7), new cjs.Rectangle(-32.5,-120.2,875.2,769.1), new cjs.Rectangle(-32.5,-120.2,875.2,768.3), new cjs.Rectangle(-32.5,-120.2,875.2,767.4), new cjs.Rectangle(-32.5,-120.2,875.2,766.3), new cjs.Rectangle(-32.5,-120.2,875.2,766.2), new cjs.Rectangle(-32.5,-120.2,875.2,766.3), new cjs.Rectangle(-32.5,-120.2,875.2,766.1), new cjs.Rectangle(-32.5,-120.2,875.2,765.8), new cjs.Rectangle(-32.5,-120.2,875.2,765.4), new cjs.Rectangle(-32.5,-120.2,875.2,764.8), new cjs.Rectangle(-32.5,-120.2,875.2,764), new cjs.Rectangle(-32.5,-120.2,875.2,763.2), new cjs.Rectangle(-32.5,-120.2,875.2,762.1), new cjs.Rectangle(-32.5,-120.2,875.2,760.9), new cjs.Rectangle(-32.5,-120.2,875.2,759.5), new cjs.Rectangle(-32.5,-120.2,875.2,758.3), new cjs.Rectangle(-32.5,-120.2,875.2,769), new cjs.Rectangle(-32.5,-120.2,875.2,779), new cjs.Rectangle(-32.5,-120.2,875.2,788.2), new cjs.Rectangle(-32.5,-120.2,875.2,796.3), new cjs.Rectangle(-32.5,-120.2,875.2,804), new cjs.Rectangle(-32.5,-120.2,875.2,813.8), new cjs.Rectangle(-32.5,-120.2,875.2,822.9), new cjs.Rectangle(-32.5,-120.2,875.2,831.1), new cjs.Rectangle(-32.5,-120.2,875.2,838.5), new cjs.Rectangle(-32.5,-120.2,875.2,845), new cjs.Rectangle(-32.5,-120.2,875.2,848.6), new cjs.Rectangle(-32.5,-120.2,875.2,852.3), new cjs.Rectangle(-32.5,-120.2,875.2,855.7), new cjs.Rectangle(-32.5,-120.2,875.2,859.1), new cjs.Rectangle(-32.5,-120.2,875.2,862.3), new cjs.Rectangle(-32.5,-120.2,875.2,865.2), new cjs.Rectangle(-32.5,-120.2,875.2,868.2), new cjs.Rectangle(-32.5,-120.2,875.2,870.9), new cjs.Rectangle(-32.5,-120.2,875.2,873.5), new cjs.Rectangle(-32.5,-120.2,875.2,876), new cjs.Rectangle(-32.5,-120.2,875.2,878.2), new cjs.Rectangle(-32.5,-120.2,875.2,880.3), new cjs.Rectangle(-32.5,-120.2,875.2,883.6), new cjs.Rectangle(-32.5,-120.2,875.2,879.8), new cjs.Rectangle(-32.5,-120.2,875.2,875.8), new cjs.Rectangle(-32.5,-120.2,875.2,871.7), new cjs.Rectangle(-32.5,-120.2,875.2,867.5), new cjs.Rectangle(-32.5,-120.2,875.2,863), new cjs.Rectangle(-32.5,-120.2,875.2,858.5), new cjs.Rectangle(-32.5,-120.2,875.2,853.7), new cjs.Rectangle(-32.5,-120.2,875.2,848.8), new cjs.Rectangle(-32.5,-120.2,875.2,843.7), new cjs.Rectangle(-32.5,-120.2,875.2,838.6), new cjs.Rectangle(-32.5,-120.2,875.2,833.5), new cjs.Rectangle(-32.5,-120.2,875.2,840), new cjs.Rectangle(-32.5,-120.2,875.2,844.6), new cjs.Rectangle(-32.5,-120.2,875.2,847.7), new cjs.Rectangle(-32.5,-120.2,875.2,849.3), new cjs.Rectangle(-32.5,-120.2,875.2,849.2), new cjs.Rectangle(-32.5,-120.2,875.2,847.7), new cjs.Rectangle(-32.5,-120.2,875.2,845.5), new cjs.Rectangle(-32.5,-120.2,875.2,841.9), new cjs.Rectangle(-32.5,-120.2,875.2,837.9), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Слой 3
	this.instance = new lib.creme();
	this.instance.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(54));

	// Layer 5
	this.instance_1 = new lib.cap();
	this.instance_1.setTransform(676.5,760.7,1,1,0,0,0,21.8,14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:300.6},13).to({y:632.7},9).to({_off:true},1).wait(32));

	// Layer 4
	this.instance_2 = new lib.cr1();
	this.instance_2.setTransform(675.2,693.7,1,1,0,0,0,36,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:233.6},13).wait(9).to({rotation:-30,x:608.5,y:316.6},8).to({rotation:0,x:685.2,y:260.4},8).to({rotation:90,y:664.5},8).to({_off:true},1).wait(8));

	// Layer 8
	this.instance_3 = new lib.stick3_2();
	this.instance_3.setTransform(606.5,416.2,1,1,45,0,0,17.1,140.3);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({alpha:1},16).wait(8).to({rotation:0,x:642.5,y:312.1},8).wait(1));

	// Layer 7
	this.instance_4 = new lib.stick();
	this.instance_4.setTransform(682.5,646.1,1,1,90,0,0,17,140.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({regX:17.1,rotation:45,x:606.5,y:416.2},9).wait(16).to({_off:true},1).wait(16));

	// Layer 6
	this.instance_5 = new lib.lipsbad();
	this.instance_5.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55));

	// eyes
	this.instance_6 = new lib.eyes1();
	this.instance_6.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55));

	// shad
	this.instance_7 = new lib.shadows();
	this.instance_7.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55));

	// lips
	this.instance_8 = new lib.lips();
	this.instance_8.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55));

	// bdoy
	this.instance_9 = new lib.headmake();
	this.instance_9.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(55));

	// Layer 2
	this.instance_10 = new lib.lpst();
	this.instance_10.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55));

	// Layer 3
	this.instance_11 = new lib.table();
	this.instance_11.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,895.6);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-120.2,875.2,860.2), new cjs.Rectangle(-32.5,-120.2,875.2,824.8), new cjs.Rectangle(-32.5,-120.2,875.2,789.4), rect=new cjs.Rectangle(-32.5,-120.2,875.2,783.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,770), new cjs.Rectangle(-32.5,-120.2,875.2,756.4), new cjs.Rectangle(-32.5,-120.2,875.2,742.2), new cjs.Rectangle(-32.5,-120.2,875.2,727.8), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,730.6), new cjs.Rectangle(-32.5,-120.2,875.2,767.5), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,747), new cjs.Rectangle(-32.5,-120.2,875.2,784.9), new cjs.Rectangle(-32.5,-120.2,875.2,820.7), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect, rect];


(lib.makeup23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_56 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(56).call(this.frame_56).wait(1));

	// Layer 3
	this.instance = new lib.pincet();
	this.instance.setTransform(633.6,329.9,1,1,-45,0,0,92,38.6);

	this.instance_1 = new lib.pincet2();
	this.instance_1.setTransform(526.9,170.4,0.998,0.998,0,111.7,-68.3,92,38.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:38.5,rotation:-24.1,x:523.3,y:178.2},8).to({regY:38.4,rotation:0,skewX:110.9,skewY:-69.1,x:520.8,y:169.5},1).to({_off:true,regY:38.5,scaleX:1,scaleY:1,skewX:111.7,skewY:-68.3,x:526.9,y:170.4},2).to({_off:false,skewX:112.5,skewY:-67.5,x:539.7,y:157.1},2).to({_off:true,scaleX:1,scaleY:1,skewX:113.3,skewY:-66.7,x:539.3,y:172.6},2).to({_off:false,regX:91.9,scaleX:1,scaleY:1,skewX:114.2,skewY:-65.8,x:556.7,y:152.9},2).to({_off:true,regX:92,scaleX:1,scaleY:1,skewX:115,skewY:-65,x:551.8,y:174.6},2).to({_off:false,regX:91.9,scaleX:1,scaleY:1,skewX:116,skewY:-64,x:572.2,y:154.4},2).to({_off:true,regY:38.4,scaleX:1,scaleY:1,skewX:117.2,skewY:-62.8,x:567.4,y:177.1},3).to({_off:false,regX:92,regY:38.5,scaleX:1,scaleY:1,skewX:118.5,skewY:-61.5,x:587.1,y:150.7},3).to({_off:true,scaleX:1,scaleY:1,skewX:119.3,skewY:-60.7,x:582.7,y:179.6},2).to({_off:false,skewX:120.2,skewY:-59.8,x:609,y:153.1},2).to({_off:true,scaleX:1,scaleY:1,skewX:121,skewY:-59,x:590.2,y:191.7},2).to({_off:false,scaleX:1,scaleY:1,skewX:122.5,skewY:-57.5,x:623.4,y:172.5},3).to({_off:true,regY:38.4,scaleX:1,scaleY:1,skewX:123,skewY:-57,x:602.3,y:199},2).to({_off:false,scaleX:1,scaleY:1,skewX:123.8,skewY:-56.2,x:616.1,y:201.3},2).to({_off:true,regX:91.9,scaleX:1,scaleY:1,skewX:125,skewY:-55,x:615.1,y:206.3},2).to({_off:false,regX:92,regY:38.5,scaleX:1,scaleY:1,skewX:125.9,skewY:-54.1,x:646,y:174.9},3).to({regY:38.4,skewX:165,skewY:-15,x:619.3,y:648},10).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},2).to({_off:true,skewX:112.5,skewY:-67.5,x:539.7,y:157.1},2).to({_off:false,scaleX:1,scaleY:1,skewX:113.3,skewY:-66.7,x:539.3,y:172.6},2).to({_off:true,regX:91.9,scaleX:1,scaleY:1,skewX:114.2,skewY:-65.8,x:556.7,y:152.9},2).to({_off:false,regX:92,scaleX:1,scaleY:1,skewX:115,skewY:-65,x:551.8,y:174.6},2).to({_off:true,regX:91.9,scaleX:1,scaleY:1,skewX:116,skewY:-64,x:572.2,y:154.4},2).to({_off:false,regY:38.4,scaleX:1,scaleY:1,skewX:117.2,skewY:-62.8,x:567.4,y:177.1},3).to({_off:true,regX:92,regY:38.5,scaleX:1,scaleY:1,skewX:118.5,skewY:-61.5,x:587.1,y:150.7},3).to({_off:false,scaleX:1,scaleY:1,skewX:119.3,skewY:-60.7,x:582.7,y:179.6},2).to({_off:true,skewX:120.2,skewY:-59.8,x:609,y:153.1},2).to({_off:false,scaleX:1,scaleY:1,skewX:121,skewY:-59,x:590.2,y:191.7},2).to({_off:true,scaleX:1,scaleY:1,skewX:122.5,skewY:-57.5,x:623.4,y:172.5},3).to({_off:false,regY:38.4,scaleX:1,scaleY:1,skewX:123,skewY:-57,x:602.3,y:199},2).to({_off:true,scaleX:1,scaleY:1,skewX:123.8,skewY:-56.2,x:616.1,y:201.3},2).to({_off:false,regX:91.9,scaleX:1,scaleY:1,skewX:125,skewY:-55,x:615.1,y:206.3},2).to({_off:true,regX:92,regY:38.5,scaleX:1,scaleY:1,skewX:125.9,skewY:-54.1,x:646,y:174.9},3).wait(12));

	// Layer 6
	this.instance_2 = new lib.lipsbad();
	this.instance_2.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EArhAVyIAAqeIdDAAIAAKegAm9VyIAAqeIdAAAIAAKeg");
	var mask_graphics_1 = new cjs.Graphics().p("EArhAVyIAAqeIdDAAIAAKegAm9VyIAAqeIdAAAIAAKeg");
	var mask_graphics_2 = new cjs.Graphics().p("EArhAVyIAAqeIdDAAIAAKegAm9VyIAAqeIdAAAIAAKeg");
	var mask_graphics_3 = new cjs.Graphics().p("EArhAVyIAAqeIdDAAIAAKegAm9VyIAAqeIdAAAIAAKeg");
	var mask_graphics_4 = new cjs.Graphics().p("EArhAVyIAAqeIdDAAIAAKegAm9VyIAAqeIdAAAIAAKeg");
	var mask_graphics_5 = new cjs.Graphics().p("EArhAVyIAAqeIdDAAIAAKegAm9VyIAAqeIdAAAIAAKeg");
	var mask_graphics_6 = new cjs.Graphics().p("EArhAVyIAAqeIdDAAIAAKegAm9VyIAAqeIdAAAIAAKeg");
	var mask_graphics_7 = new cjs.Graphics().p("EArhAVyIAAqeIdDAAIAAKegAm9VyIAAqeIdAAAIAAKeg");
	var mask_graphics_8 = new cjs.Graphics().p("EArhAVyIAAqeIdDAAIAAKegAm9VyIAAqeIdAAAIAAKeg");
	var mask_graphics_9 = new cjs.Graphics().p("EAr1AVyIAAqeIdCAAIAAKegAmqVyIAAqeIdBAAIAAKeg");
	var mask_graphics_10 = new cjs.Graphics().p("EAsJAVyIAAqeIdCAAIAAKegAmWVyIAAqeIdBAAIAAKeg");
	var mask_graphics_11 = new cjs.Graphics().p("EAsdAVyIAAqeIdCAAIAAKegAmCVyIAAqeIdAAAIAAKeg");
	var mask_graphics_12 = new cjs.Graphics().p("EAswAVyIAAqeIdDAAIAAKegAluVyIAAqeIdAAAIAAKeg");
	var mask_graphics_13 = new cjs.Graphics().p("EAtEAVyIAAqeIdCAAIAAKegAlbVyIAAqeIdBAAIAAKeg");
	var mask_graphics_14 = new cjs.Graphics().p("EAtYAVyIAAqeIdCAAIAAKegAlHVyIAAqeIdAAAIAAKeg");
	var mask_graphics_15 = new cjs.Graphics().p("EAtsAVyIAAqeIdCAAIAAKegAkzVyIAAqeIdAAAIAAKeg");
	var mask_graphics_16 = new cjs.Graphics().p("EAt/AVyIAAqeIdDAAIAAKegAkfVyIAAqeIdAAAIAAKeg");
	var mask_graphics_17 = new cjs.Graphics().p("EAuTAVyIAAqeIdCAAIAAKegAkMVyIAAqeIdBAAIAAKeg");
	var mask_graphics_18 = new cjs.Graphics().p("EAunAVyIAAqeIdCAAIAAKegAj4VyIAAqeIdAAAIAAKeg");
	var mask_graphics_19 = new cjs.Graphics().p("EAu7AVyIAAqeIdCAAIAAKegAjkVyIAAqeIdAAAIAAKeg");
	var mask_graphics_20 = new cjs.Graphics().p("EAvOAVyIAAqeIdDAAIAAKegAjQVyIAAqeIdAAAIAAKeg");
	var mask_graphics_21 = new cjs.Graphics().p("EAviAVyIAAqeIdCAAIAAKegAi9VyIAAqeIdBAAIAAKeg");
	var mask_graphics_22 = new cjs.Graphics().p("EAv2AVyIAAqeIdCAAIAAKegAipVyIAAqeIdAAAIAAKeg");
	var mask_graphics_23 = new cjs.Graphics().p("EAwJAVyIAAqeIdDAAIAAKegAiVVyIAAqeIdAAAIAAKeg");
	var mask_graphics_24 = new cjs.Graphics().p("EAwdAVyIAAqeIdDAAIAAKegAiBVyIAAqeIdAAAIAAKeg");
	var mask_graphics_25 = new cjs.Graphics().p("EAwxAVyIAAqeIdCAAIAAKegAhuVyIAAqeIdBAAIAAKeg");
	var mask_graphics_26 = new cjs.Graphics().p("EAxFAVyIAAqeIdCAAIAAKegAhaVyIAAqeIdAAAIAAKeg");
	var mask_graphics_27 = new cjs.Graphics().p("EAxYAVyIAAqeIdDAAIAAKegAhGVyIAAqeIdAAAIAAKeg");
	var mask_graphics_28 = new cjs.Graphics().p("EAxsAVyIAAqeIdCAAIAAKegAgzVyIAAqeIdBAAIAAKeg");
	var mask_graphics_29 = new cjs.Graphics().p("EAyAAVyIAAqeIdCAAIAAKegAgfVyIAAqeIdBAAIAAKeg");
	var mask_graphics_30 = new cjs.Graphics().p("EAyUAVyIAAqeIdCAAIAAKegAgLVyIAAqeIdAAAIAAKeg");
	var mask_graphics_31 = new cjs.Graphics().p("EAynAVyIAAqeIdDAAIAAKegAAHVyIAAqeIdCAAIAAKeg");
	var mask_graphics_32 = new cjs.Graphics().p("EAy7AVyIAAqeIdCAAIAAKegAAaVyIAAqeIdDAAIAAKeg");
	var mask_graphics_33 = new cjs.Graphics().p("EAzPAVyIAAqeIdCAAIAAKegAAuVyIAAqeIdCAAIAAKeg");
	var mask_graphics_34 = new cjs.Graphics().p("EAzjAVyIAAqeIdCAAIAAKegABCVyIAAqeIdCAAIAAKeg");
	var mask_graphics_35 = new cjs.Graphics().p("EAz2AVyIAAqeIdDAAIAAKegABWVyIAAqeIdCAAIAAKeg");
	var mask_graphics_36 = new cjs.Graphics().p("EA0KAVyIAAqeIdCAAIAAKegABpVyIAAqeIdDAAIAAKeg");
	var mask_graphics_37 = new cjs.Graphics().p("EA0eAVyIAAqeIdCAAIAAKegAB9VyIAAqeIdCAAIAAKeg");
	var mask_graphics_38 = new cjs.Graphics().p("EA0yAVyIAAqeIdCAAIAAKegACRVyIAAqeIdCAAIAAKeg");
	var mask_graphics_39 = new cjs.Graphics().p("EA1FAVyIAAqeIdDAAIAAKegAClVyIAAqeIdCAAIAAKeg");
	var mask_graphics_40 = new cjs.Graphics().p("EA1ZAVyIAAqeIdCAAIAAKegAC4VyIAAqeIdDAAIAAKeg");
	var mask_graphics_41 = new cjs.Graphics().p("EA1tAVyIAAqeIdCAAIAAKegADMVyIAAqeIdCAAIAAKeg");
	var mask_graphics_42 = new cjs.Graphics().p("EA2AAVyIAAqeIdDAAIAAKegADgVyIAAqeIdCAAIAAKeg");
	var mask_graphics_43 = new cjs.Graphics().p("EA2UAVyIAAqeIdDAAIAAKegAD0VyIAAqeIdCAAIAAKeg");
	var mask_graphics_44 = new cjs.Graphics().p("EA2oAVyIAAqeIdCAAIAAKegAEHVyIAAqeIdDAAIAAKeg");
	var mask_graphics_45 = new cjs.Graphics().p("EA28AVyIAAqeIdCAAIAAKegAEbVyIAAqeIdCAAIAAKeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:464.4,y:139.5}).wait(1).to({graphics:mask_graphics_1,x:464.4,y:139.5}).wait(1).to({graphics:mask_graphics_2,x:464.4,y:139.5}).wait(1).to({graphics:mask_graphics_3,x:464.4,y:139.5}).wait(1).to({graphics:mask_graphics_4,x:464.4,y:139.5}).wait(1).to({graphics:mask_graphics_5,x:464.4,y:139.5}).wait(1).to({graphics:mask_graphics_6,x:464.4,y:139.5}).wait(1).to({graphics:mask_graphics_7,x:464.4,y:139.5}).wait(1).to({graphics:mask_graphics_8,x:464.4,y:139.5}).wait(1).to({graphics:mask_graphics_9,x:466.4,y:139.5}).wait(1).to({graphics:mask_graphics_10,x:468.4,y:139.5}).wait(1).to({graphics:mask_graphics_11,x:470.3,y:139.5}).wait(1).to({graphics:mask_graphics_12,x:472.3,y:139.5}).wait(1).to({graphics:mask_graphics_13,x:474.3,y:139.5}).wait(1).to({graphics:mask_graphics_14,x:476.3,y:139.5}).wait(1).to({graphics:mask_graphics_15,x:478.2,y:139.5}).wait(1).to({graphics:mask_graphics_16,x:480.2,y:139.5}).wait(1).to({graphics:mask_graphics_17,x:482.2,y:139.5}).wait(1).to({graphics:mask_graphics_18,x:484.2,y:139.5}).wait(1).to({graphics:mask_graphics_19,x:486.1,y:139.5}).wait(1).to({graphics:mask_graphics_20,x:488.1,y:139.5}).wait(1).to({graphics:mask_graphics_21,x:490.1,y:139.5}).wait(1).to({graphics:mask_graphics_22,x:492.1,y:139.5}).wait(1).to({graphics:mask_graphics_23,x:494,y:139.5}).wait(1).to({graphics:mask_graphics_24,x:496,y:139.5}).wait(1).to({graphics:mask_graphics_25,x:498,y:139.5}).wait(1).to({graphics:mask_graphics_26,x:500,y:139.5}).wait(1).to({graphics:mask_graphics_27,x:501.9,y:139.5}).wait(1).to({graphics:mask_graphics_28,x:503.9,y:139.5}).wait(1).to({graphics:mask_graphics_29,x:505.9,y:139.5}).wait(1).to({graphics:mask_graphics_30,x:507.8,y:139.5}).wait(1).to({graphics:mask_graphics_31,x:509.8,y:139.5}).wait(1).to({graphics:mask_graphics_32,x:511.8,y:139.5}).wait(1).to({graphics:mask_graphics_33,x:513.8,y:139.5}).wait(1).to({graphics:mask_graphics_34,x:515.7,y:139.5}).wait(1).to({graphics:mask_graphics_35,x:517.7,y:139.5}).wait(1).to({graphics:mask_graphics_36,x:519.7,y:139.5}).wait(1).to({graphics:mask_graphics_37,x:521.7,y:139.5}).wait(1).to({graphics:mask_graphics_38,x:523.6,y:139.5}).wait(1).to({graphics:mask_graphics_39,x:525.6,y:139.5}).wait(1).to({graphics:mask_graphics_40,x:527.6,y:139.5}).wait(1).to({graphics:mask_graphics_41,x:529.6,y:139.5}).wait(1).to({graphics:mask_graphics_42,x:531.5,y:139.5}).wait(1).to({graphics:mask_graphics_43,x:533.5,y:139.5}).wait(1).to({graphics:mask_graphics_44,x:535.5,y:139.5}).wait(1).to({graphics:mask_graphics_45,x:537.5,y:139.5}).wait(1).to({graphics:null,x:0,y:0}).wait(11));

	// Layer 5
	this.instance_3 = new lib.eyebr();
	this.instance_3.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},46).wait(11));

	// eyes
	this.instance_4 = new lib.eyes1();
	this.instance_4.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(57));

	// shad
	this.instance_5 = new lib.shadows();
	this.instance_5.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57));

	// lips
	this.instance_6 = new lib.lips();
	this.instance_6.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57));

	// bdoy
	this.instance_7 = new lib.headmake();
	this.instance_7.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(57));

	// Layer 2
	this.instance_8 = new lib.lpst();
	this.instance_8.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_9 = new lib.creme();
	this.instance_9.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(57));

	// Layer 3
	this.instance_10 = new lib.table();
	this.instance_10.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,738.6), new cjs.Rectangle(-32.5,-120.2,875.2,784), new cjs.Rectangle(-32.5,-120.2,875.2,829), new cjs.Rectangle(-32.5,-120.2,875.2,879.6), new cjs.Rectangle(-32.5,-120.2,875.2,723.4)];


(lib.makeup22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_61 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(1));

	// Layer 3
	this.instance = new lib.pincet();
	this.instance.setTransform(633.6,329.9,1,1,-45,0,0,92,38.6);

	this.instance_1 = new lib.pincet2();
	this.instance_1.setTransform(274,174.8,0.998,0.998,-110.5,0,0,91.9,38.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:38.5,rotation:-109.7,x:280.2,y:173.9},9).to({_off:true,regX:91.9,scaleX:1,scaleY:1,rotation:-110.5,x:274,y:174.8},2).to({_off:false,regX:92,regY:38.4,rotation:-111.3,x:261.4,y:161.2},2).to({_off:true,scaleX:1,scaleY:1,rotation:-112,x:261.5,y:176.7},2).to({_off:false,regY:38.5,scaleX:1,scaleY:1,rotation:-113,x:244.5,y:156.5},2).to({_off:true,scaleX:1,scaleY:1,rotation:-113.8,x:249,y:178.4},2).to({_off:false,scaleX:1,scaleY:1,rotation:-114.7,x:229.1,y:157.7},2).to({_off:true,regX:91.9,regY:38.4,scaleX:1,scaleY:1,rotation:-116,x:233.3,y:180.5},3).to({_off:false,regX:92,regY:38.5,scaleX:1,scaleY:1,rotation:-117.3,x:214.2,y:153.7},3).to({_off:true,scaleX:1,scaleY:1,rotation:-118,x:217.9,y:182.7},2).to({_off:false,regY:38.4,rotation:-119,x:192.3,y:155.7},2).to({_off:true,regX:91.9,scaleX:1,scaleY:1,rotation:-119.8,x:205.4,y:184.7},2).to({_off:false,regX:92,regY:38.5,scaleX:1,scaleY:1,rotation:-121.3,x:173.6,y:168.7},3).to({_off:true,regY:38.4,scaleX:1,scaleY:1,rotation:-121.8,x:191.3,y:186.7},2).to({_off:false,regY:38.5,scaleX:1,scaleY:1,rotation:-122.5,x:161.9,y:171.2},2).to({_off:true,regX:91.9,regY:38.4,scaleX:1,scaleY:1,rotation:-123.8,x:177.5,y:188.7},2).to({_off:false,regY:38.5,scaleX:1,scaleY:1,rotation:-124.7,x:154.9,y:176.8},3).to({regX:92,regY:38.6,rotation:-45,x:633.6,y:329.9},16).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},2).to({_off:true,regX:92,regY:38.4,rotation:-111.3,x:261.4,y:161.2},2).to({_off:false,scaleX:1,scaleY:1,rotation:-112,x:261.5,y:176.7},2).to({_off:true,regY:38.5,scaleX:1,scaleY:1,rotation:-113,x:244.5,y:156.5},2).to({_off:false,scaleX:1,scaleY:1,rotation:-113.8,x:249,y:178.4},2).to({_off:true,scaleX:1,scaleY:1,rotation:-114.7,x:229.1,y:157.7},2).to({_off:false,regX:91.9,regY:38.4,scaleX:1,scaleY:1,rotation:-116,x:233.3,y:180.5},3).to({_off:true,regX:92,regY:38.5,scaleX:1,scaleY:1,rotation:-117.3,x:214.2,y:153.7},3).to({_off:false,scaleX:1,scaleY:1,rotation:-118,x:217.9,y:182.7},2).to({_off:true,regY:38.4,rotation:-119,x:192.3,y:155.7},2).to({_off:false,regX:91.9,scaleX:1,scaleY:1,rotation:-119.8,x:205.4,y:184.7},2).to({_off:true,regX:92,regY:38.5,scaleX:1,scaleY:1,rotation:-121.3,x:173.6,y:168.7},3).to({_off:false,regY:38.4,scaleX:1,scaleY:1,rotation:-121.8,x:191.3,y:186.7},2).to({_off:true,regY:38.5,scaleX:1,scaleY:1,rotation:-122.5,x:161.9,y:171.2},2).to({_off:false,regX:91.9,regY:38.4,scaleX:1,scaleY:1,rotation:-123.8,x:177.5,y:188.7},2).to({_off:true,regY:38.5,scaleX:1,scaleY:1,rotation:-124.7,x:154.9,y:176.8},3).wait(17));

	// Layer 6
	this.instance_2 = new lib.lipsbad();
	this.instance_2.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(62));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_1 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_2 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_3 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_4 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_5 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_6 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_7 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_8 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_9 = new cjs.Graphics().p("AZYVyIAAqeIR9AAIAAKegAl3VyIAAqeIR8AAIAAKeg");
	var mask_graphics_10 = new cjs.Graphics().p("AZEVyIAAqeISRAAIAAKegAmtVyIAAqeISQAAIAAKeg");
	var mask_graphics_11 = new cjs.Graphics().p("AYwVyIAAqeISlAAIAAKegAnjVyIAAqeISkAAIAAKeg");
	var mask_graphics_12 = new cjs.Graphics().p("AYcVyIAAqeIS5AAIAAKegAoZVyIAAqeIS3AAIAAKeg");
	var mask_graphics_13 = new cjs.Graphics().p("AYJVyIAAqeITNAAIAAKegApPVyIAAqeITLAAIAAKeg");
	var mask_graphics_14 = new cjs.Graphics().p("AX1VyIAAqeIThAAIAAKegAqFVyIAAqeITfAAIAAKeg");
	var mask_graphics_15 = new cjs.Graphics().p("AXhVyIAAqeIT1AAIAAKegAq6VyIAAqeITyAAIAAKeg");
	var mask_graphics_16 = new cjs.Graphics().p("AXOVyIAAqeIUIAAIAAKegArwVyIAAqeIUFAAIAAKeg");
	var mask_graphics_17 = new cjs.Graphics().p("AW6VyIAAqeIUcAAIAAKegAsmVyIAAqeIUZAAIAAKeg");
	var mask_graphics_18 = new cjs.Graphics().p("AWmVyIAAqeIUwAAIAAKegAtcVyIAAqeIUtAAIAAKeg");
	var mask_graphics_19 = new cjs.Graphics().p("AWTVyIAAqeIVDAAIAAKegAuSVyIAAqeIVBAAIAAKeg");
	var mask_graphics_20 = new cjs.Graphics().p("AV/VyIAAqeIVXAAIAAKegAvIVyIAAqeIVVAAIAAKeg");
	var mask_graphics_21 = new cjs.Graphics().p("AVrVyIAAqeIVrAAIAAKegAv+VyIAAqeIVoAAIAAKeg");
	var mask_graphics_22 = new cjs.Graphics().p("AVYVyIAAqeIV+AAIAAKegAw0VyIAAqeIV8AAIAAKeg");
	var mask_graphics_23 = new cjs.Graphics().p("AVEVyIAAqeIWSAAIAAKegAxqVyIAAqeIWQAAIAAKeg");
	var mask_graphics_24 = new cjs.Graphics().p("AUwVyIAAqeIWmAAIAAKegAygVyIAAqeIWkAAIAAKeg");
	var mask_graphics_25 = new cjs.Graphics().p("AUdVyIAAqeIW5AAIAAKegAzVVyIAAqeIW2AAIAAKeg");
	var mask_graphics_26 = new cjs.Graphics().p("AUJVyIAAqeIXNAAIAAKegA0LVyIAAqeIXKAAIAAKeg");
	var mask_graphics_27 = new cjs.Graphics().p("AT1VyIAAqeIXhAAIAAKegA1BVyIAAqeIXeAAIAAKeg");
	var mask_graphics_28 = new cjs.Graphics().p("ATiVyIAAqeIX0AAIAAKegA13VyIAAqeIXyAAIAAKeg");
	var mask_graphics_29 = new cjs.Graphics().p("ATOVyIAAqeIYIAAIAAKegA2tVyIAAqeIYFAAIAAKeg");
	var mask_graphics_30 = new cjs.Graphics().p("AS6VyIAAqeIYcAAIAAKegA3jVyIAAqeIYZAAIAAKeg");
	var mask_graphics_31 = new cjs.Graphics().p("ASnVyIAAqeIYvAAIAAKegA4ZVyIAAqeIYtAAIAAKeg");
	var mask_graphics_32 = new cjs.Graphics().p("ASTVyIAAqeIZDAAIAAKegA5PVyIAAqeIZDAAIAAKeg");
	var mask_graphics_33 = new cjs.Graphics().p("AR/VyIAAqeIZXAAIAAKegA6FVyIAAqeIZXAAIAAKeg");
	var mask_graphics_34 = new cjs.Graphics().p("ARsVyIAAqeIZqAAIAAKegA67VyIAAqeIZqAAIAAKeg");
	var mask_graphics_35 = new cjs.Graphics().p("ARYVyIAAqeIZ+AAIAAKegA7wVyIAAqeIZ9AAIAAKeg");
	var mask_graphics_36 = new cjs.Graphics().p("AREVyIAAqeIaSAAIAAKegA8mVyIAAqeIaRAAIAAKeg");
	var mask_graphics_37 = new cjs.Graphics().p("AQxVyIAAqeIalAAIAAKegA9cVyIAAqeIalAAIAAKeg");
	var mask_graphics_38 = new cjs.Graphics().p("AQdVyIAAqeIa5AAIAAKegA+SVyIAAqeIa4AAIAAKeg");
	var mask_graphics_39 = new cjs.Graphics().p("AQJVyIAAqeIbNAAIAAKegA/IVyIAAqeIbMAAIAAKeg");
	var mask_graphics_40 = new cjs.Graphics().p("AP2VyIAAqeIbgAAIAAKegA/+VyIAAqeIbgAAIAAKeg");
	var mask_graphics_41 = new cjs.Graphics().p("APiVyIAAqeIb0AAIAAKegEgg0AVyIAAqeIb0AAIAAKeg");
	var mask_graphics_42 = new cjs.Graphics().p("APOVyIAAqeIcIAAIAAKegEghqAVyIAAqeIcIAAIAAKeg");
	var mask_graphics_43 = new cjs.Graphics().p("AO7VyIAAqeIcbAAIAAKegEgigAVyIAAqeIcbAAIAAKeg");
	var mask_graphics_44 = new cjs.Graphics().p("AOnVyIAAqeIcvAAIAAKegEgjWAVyIAAqeIcvAAIAAKeg");
	var mask_graphics_45 = new cjs.Graphics().p("AOTVyIAAqeIdDAAIAAKegEgkMAVyIAAqeIdDAAIAAKeg");
	var mask_graphics_46 = new cjs.Graphics().p("AOTVyIAAqeIdDAAIAAKegEgkMAVyIAAqeIdDAAIAAKeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_1,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_2,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_3,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_4,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_5,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_6,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_7,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_8,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_9,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_10,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_11,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_12,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_13,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_14,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_15,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_16,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_17,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_18,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_19,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_20,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_21,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_22,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_23,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_24,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_25,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_26,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_27,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_28,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_29,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_30,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_31,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_32,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_33,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_34,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_35,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_36,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_37,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_38,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_39,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_40,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_41,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_42,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_43,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_44,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_45,x:277.4,y:139.5}).wait(1).to({graphics:mask_graphics_46,x:277.4,y:139.5}).wait(16));

	// Layer 5
	this.instance_3 = new lib.eyebr();
	this.instance_3.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62));

	// eyes
	this.instance_4 = new lib.eyes1();
	this.instance_4.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62));

	// shad
	this.instance_5 = new lib.shadows();
	this.instance_5.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62));

	// lips
	this.instance_6 = new lib.lips();
	this.instance_6.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62));

	// bdoy
	this.instance_7 = new lib.headmake();
	this.instance_7.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(62));

	// Layer 2
	this.instance_8 = new lib.lpst();
	this.instance_8.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_9 = new lib.creme();
	this.instance_9.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(62));

	// Layer 3
	this.instance_10 = new lib.table();
	this.instance_10.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 3
	this.instance = new lib.pincet();
	this.instance.setTransform(633.6,663.9,1,1,0,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-45,y:329.9},11).wait(1));

	// Layer 6
	this.instance_1 = new lib.lipsbad();
	this.instance_1.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// Layer 5
	this.instance_2 = new lib.eyebr();
	this.instance_2.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12));

	// eyes
	this.instance_3 = new lib.eyes1();
	this.instance_3.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12));

	// shad
	this.instance_4 = new lib.shadows();
	this.instance_4.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12));

	// lips
	this.instance_5 = new lib.lips();
	this.instance_5.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12));

	// bdoy
	this.instance_6 = new lib.headmake();
	this.instance_6.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12));

	// Layer 2
	this.instance_7 = new lib.lpst();
	this.instance_7.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_8 = new lib.creme();
	this.instance_8.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(12));

	// Слой 3
	this.instance_9 = new lib.pincet();
	this.instance_9.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(11));

	// Layer 3
	this.instance_10 = new lib.table();
	this.instance_10.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,847.4);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-120.2,875.2,810.9), new cjs.Rectangle(-32.5,-120.2,875.2,774.3), new cjs.Rectangle(-32.5,-120.2,875.2,744), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect, rect];


(lib.makeup20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Layer 11 copy
	this.instance = new lib.arr2();
	this.instance.setTransform(635.5,736.4,1,1,90,0,0,6.3,59.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:3,regY:30.8,x:668.5,y:655.4},0).wait(1).to({x:672.9,y:584.5},0).wait(1).to({x:676.8,y:520.4},0).wait(1).to({x:680.4,y:463},0).wait(1).to({x:683.5,y:412.4},0).wait(1).to({x:686.2,y:368.5},0).wait(1).to({x:688.5,y:331.3},0).wait(1).to({x:690.3,y:301},0).wait(1).to({x:691.8,y:277.3},0).wait(1).to({x:692.8,y:260.5},0).wait(1).to({x:693.4,y:250.3},0).wait(1).to({regX:6.3,regY:59.1,x:665.4},0).to({regX:3,y:257},2).wait(1).to({regY:30.8,rotation:140.8,x:683.2,y:278.9},0).wait(1).to({rotation:190.4,x:660.2,y:284.7},0).wait(1).to({rotation:238.8,x:641.2,y:271.5},0).wait(1).to({rotation:285.9,x:638.2,y:249.1},0).wait(1).to({rotation:331.8,x:652.1,y:232},0).wait(1).to({rotation:376.5,x:673.5,y:229.9},0).wait(1).to({rotation:420,x:689.9,y:242.8},0).wait(1).to({rotation:462.2,x:693,y:262.9},0).wait(1).to({rotation:503.3,x:682.3,y:279.6},0).wait(1).to({rotation:543.1,x:663.8,y:285.1},0).wait(1).to({rotation:581.6,x:646.6,y:278},0).wait(1).to({rotation:619,x:637.7,y:262.2},0).wait(1).to({rotation:655.1,x:639.8,y:244.9},0).wait(1).to({rotation:690,x:651.3,y:232.4},0).wait(1).to({rotation:723.7,x:667.3,y:228.7},0).wait(1).to({rotation:756.1,x:682.1,y:234.1},0).wait(1).to({rotation:787.3,x:691.5,y:246},0).wait(1).to({rotation:817.3,x:693.4,y:260.6},0).wait(1).to({rotation:846.1,x:688.2,y:273.6},0).wait(1).to({rotation:873.7,x:677.9,y:282.3},0).wait(1).to({rotation:900,x:665.4,y:285.2},0).wait(1).to({rotation:925.1,x:653.4,y:282.5},0).wait(1).to({rotation:949,x:644.1,y:275.4},0).wait(1).to({rotation:971.6,x:638.6,y:265.8},0).wait(1).to({rotation:993.1,x:637.2,y:255.3},0).wait(1).to({rotation:1013.3,x:639.5,y:245.7},0).wait(1).to({rotation:1032.2,x:644.5,y:237.9},0).wait(1).to({rotation:1050,x:651.3,y:232.4},0).wait(1).to({rotation:1066.5,x:658.8,y:229.4},0).wait(1).to({rotation:1081.8,x:666.3,y:228.7},0).wait(1).to({rotation:1095.9,x:673.2,y:229.7},0).wait(1).to({rotation:1108.8,x:679,y:232.2},0).wait(1).to({rotation:1120.4,x:683.8,y:235.4},0).wait(1).to({rotation:1130.8,x:687.4,y:239.1},0).wait(1).to({rotation:1140,x:689.9,y:242.8},0).wait(1).to({rotation:1148,x:691.6,y:246.4},0).wait(1).to({rotation:1154.7,x:692.7,y:249.5},0).wait(1).to({rotation:1160.2,x:693.2,y:252.1},0).wait(1).to({rotation:1164.5,x:693.5,y:254.2},0).wait(1).to({rotation:1167.6,x:693.7,y:255.7},0).wait(1).to({rotation:1169.4,y:256.7},0).wait(1).to({regY:59.1,rotation:1170,x:665.4,y:257},0).wait(1).to({regY:30.8,x:693.7,y:264.3},0).wait(1).to({y:286.5},0).wait(1).to({y:323.5},0).wait(1).to({y:375.3},0).wait(1).to({y:441.9},0).wait(1).to({y:523.3},0).wait(1).to({y:619.4},0).wait(1).to({regX:6.3,regY:59.1,x:665.4,y:730.4},0).to({_off:true},1).wait(1));

	// Layer 11
	this.instance_1 = new lib.arr2();
	this.instance_1.setTransform(635.5,736.4,1,1,90,0,0,6.3,59.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regX:3,regY:30.8,x:668.5,y:655.4},0).wait(1).to({x:672.9,y:584.5},0).wait(1).to({x:676.8,y:520.4},0).wait(1).to({x:680.4,y:463},0).wait(1).to({x:683.5,y:412.4},0).wait(1).to({x:686.2,y:368.5},0).wait(1).to({x:688.5,y:331.3},0).wait(1).to({x:690.3,y:301},0).wait(1).to({x:691.8,y:277.3},0).wait(1).to({x:692.8,y:260.5},0).wait(1).to({x:693.4,y:250.3},0).wait(1).to({regX:6.3,regY:59.1,x:665.4},0).to({regX:3,y:257,alpha:0.441},2).wait(1).to({regY:30.8,rotation:138.3,x:684.1,y:278},0).wait(1).to({rotation:185.5,x:662.6,y:285},0).wait(1).to({rotation:231.6,x:643.2,y:274.4},0).wait(1).to({rotation:276.6,x:637.4,y:253.6},0).wait(1).to({rotation:320.5,x:647.5,y:235.1},0).wait(1).to({rotation:363.3,x:667.1,y:228.7},0).wait(1).to({rotation:405,x:685.4,y:237},0).wait(1).to({rotation:445.6,x:693.6,y:254.8},0).wait(1).to({rotation:485.1,x:688.5,y:273.2},0).wait(1).to({rotation:523.5,x:673.4,y:284},0).wait(1).to({rotation:560.8,x:655.3,y:283.3},0).wait(1).to({rotation:596.9,x:641.7,y:272.3},0).wait(1).to({rotation:632,x:637.2,y:255.9},0).wait(1).to({rotation:666,x:642.5,y:240.2},0).wait(1).to({rotation:698.9,x:655.3,y:230.5},0).wait(1).to({rotation:730.7,x:670.7,y:229.1},0).wait(1).to({rotation:761.3,x:684.1,y:235.8},0).wait(1).to({rotation:790.9,x:692.1,y:247.7},0).wait(1).to({rotation:819.4,x:693.2,y:261.6},0).wait(1).to({rotation:846.7,x:688,y:273.9},0).wait(1).to({rotation:873,x:678.2,y:282.1},0).wait(1).to({rotation:898.2,x:666.2,y:285.1},0).wait(1).to({rotation:922.2,x:654.6,y:283},0).wait(1).to({rotation:945.2,x:645.3,y:276.8},0).wait(1).to({rotation:967,x:639.4,y:267.9},0).wait(1).to({rotation:987.8,x:637.2,y:257.9},0).wait(1).to({rotation:1007.4,x:638.5,y:248.4},0).wait(1).to({rotation:1026,x:642.5,y:240.2},0).wait(1).to({rotation:1043.4,x:648.6,y:234.2},0).wait(1).to({rotation:1059.8,x:655.7,y:230.4},0).wait(1).to({rotation:1075,x:663,y:228.8},0).wait(1).to({rotation:1089.2,x:670,y:229},0).wait(1).to({rotation:1102.2,x:676.2,y:230.8},0).wait(1).to({rotation:1114.2,x:681.3,y:233.6},0).wait(1).to({rotation:1125,x:685.4,y:237},0).wait(1).to({rotation:1134.7,x:688.5,y:240.6},0).wait(1).to({rotation:1143.4,x:690.7,y:244.3},0).wait(1).to({rotation:1150.9,x:692.1,y:247.7},0).wait(1).to({rotation:1157.3,x:693,y:250.8},0).wait(1).to({rotation:1162.7,x:693.4,y:253.4},0).wait(1).to({rotation:1166.9,x:693.6,y:255.4},0).wait(1).to({regY:59.1,rotation:1170,x:665.4,y:257},0).wait(1).to({regY:30.8,x:693.7,y:264.3,alpha:0.45},0).wait(1).to({y:286.5,alpha:0.476},0).wait(1).to({y:323.5,alpha:0.52},0).wait(1).to({y:375.3,alpha:0.581},0).wait(1).to({y:441.9,alpha:0.66},0).wait(1).to({y:523.3,alpha:0.756},0).wait(1).to({y:619.4,alpha:0.869},0).wait(1).to({regX:6.3,regY:59.1,x:665.4,y:730.4,alpha:1},0).to({_off:true},1).wait(1));

	// Layer 9
	this.instance_2 = new lib.arr1();
	this.instance_2.setTransform(635.6,736.4,1,1,0,0,0,6.3,59.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:6.5,regY:32.5,x:640.5,y:632.1},0).wait(1).to({x:644.9,y:561.2},0).wait(1).to({x:648.8,y:497.1},0).wait(1).to({x:652.4,y:439.7},0).wait(1).to({x:655.5,y:389.1},0).wait(1).to({x:658.2,y:345.2},0).wait(1).to({x:660.5,y:308},0).wait(1).to({x:662.3,y:277.7},0).wait(1).to({x:663.8,y:254},0).wait(1).to({x:664.8,y:237.2},0).wait(1).to({x:665.4,y:227},0).wait(1).to({regX:6.3,regY:59.1,x:665.5,y:250.3},0).to({y:260.3},2).to({rotation:22},42).wait(1).to({regX:6.5,regY:32.5,rotation:21.6,x:675.4,y:242.9},0).wait(1).to({rotation:20.6,x:675,y:264.8},0).wait(1).to({rotation:18.9,x:674.2,y:301.3},0).wait(1).to({rotation:16.5,x:673.2,y:352.3},0).wait(1).to({rotation:13.4,x:671.7,y:418.1},0).wait(1).to({rotation:9.6,x:670,y:498.5},0).wait(1).to({rotation:5.2,x:668,y:593.7},0).wait(1).to({regX:6.3,regY:59.1,rotation:0,x:665.5,y:730.4},0).to({_off:true},1).wait(1));

	// Capa 1
	this.instance_3 = new lib.clock();
	this.instance_3.setTransform(635.8,720.7,1,1,0,0,0,93.1,97.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(1).to({regX:93,regY:97.5,x:640.5,y:643.3},0).wait(1).to({x:644.8,y:572.4},0).wait(1).to({x:648.8,y:508.2},0).wait(1).to({x:652.3,y:450.8},0).wait(1).to({x:655.4,y:400.2},0).wait(1).to({x:658.1,y:356.3},0).wait(1).to({x:660.4,y:319.2},0).wait(1).to({x:662.3,y:288.8},0).wait(1).to({x:663.7,y:265.2},0).wait(1).to({x:664.8,y:248.3},0).wait(1).to({x:665.4,y:238.2},0).wait(1).to({regX:93.1,regY:97.3,x:665.7,y:234.6},0).to({y:244.6},2).wait(43).to({regX:93,regY:97.5,x:665.6,y:252.1},0).wait(1).to({y:274.2},0).wait(1).to({y:310.9},0).wait(1).to({y:362.3},0).wait(1).to({y:428.5},0).wait(1).to({y:509.3},0).wait(1).to({y:604.8},0).wait(1).to({regX:93.1,regY:97.3,x:665.7,y:714.8},0).to({_off:true},1).wait(1));

	// ice1
	this.instance_4 = new lib.ice1();
	this.instance_4.setTransform(731.1,310.8,0.938,0.938,0.1,0,0,30.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:295.5,y:361.8},14).wait(56).to({x:149.5,y:676.5},8).to({_off:true},1).wait(1));

	// ice2
	this.instance_5 = new lib.ice2();
	this.instance_5.setTransform(755.2,358,0.999,0.999,-29.9,0,0,32.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.85,scaleY:0.85,rotation:-14.9,x:261.5,y:349},14).wait(56).to({x:3.4,y:681.6},8).to({_off:true},1).wait(1));

	// ice1
	this.instance_6 = new lib.ice1();
	this.instance_6.setTransform(718.9,254,1,1,0,0,0,30.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:30.6,rotation:-30,x:352.9,y:354.5},14).wait(56).to({x:298.1,y:682.6},8).to({_off:true},1).wait(1));

	// ice1
	this.instance_7 = new lib.ice1();
	this.instance_7.setTransform(534.1,338,0.775,0.775,-30,0,0,30.6,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({x:644.2,y:633.7},8).to({_off:true},1).wait(1));

	// ice2
	this.instance_8 = new lib.ice2();
	this.instance_8.setTransform(491.7,350.9,1,1,-30,0,0,32.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({x:525.7,y:661},8).to({_off:true},1).wait(1));

	// ice1
	this.instance_9 = new lib.ice1();
	this.instance_9.setTransform(439.9,348.9,1,1,0,0,0,30.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70).to({y:679},8).to({_off:true},1).wait(1));

	// Layer 6
	this.instance_10 = new lib.lipsbad();
	this.instance_10.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// Layer 5
	this.instance_11 = new lib.eyebr();
	this.instance_11.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// eyes
	this.instance_12 = new lib.eyes3();
	this.instance_12.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.instance_13 = new lib.eyes1();
	this.instance_13.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},77).wait(3));

	// shad
	this.instance_14 = new lib.shadows();
	this.instance_14.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80));

	// Layer 2
	this.instance_15 = new lib.eyebag1();
	this.instance_15.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(34).to({alpha:0.012},32).to({_off:true},1).wait(13));

	// Layer 4
	this.instance_16 = new lib.eyebag1();
	this.instance_16.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(34).to({alpha:0.012},32).to({_off:true},1).wait(13));

	// lips
	this.instance_17 = new lib.lips();
	this.instance_17.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(80));

	// bdoy
	this.instance_18 = new lib.headmake();
	this.instance_18.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80));

	// Layer 2
	this.instance_19 = new lib.lpst();
	this.instance_19.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_20 = new lib.creme();
	this.instance_20.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_21 = new lib.pincet();
	this.instance_21.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(80));

	// Layer 3
	this.instance_22 = new lib.table();
	this.instance_22.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,938.7), new cjs.Rectangle(-32.5,-120.2,875.2,861), new cjs.Rectangle(-32.5,-120.2,875.2,790.1), new cjs.Rectangle(-32.5,-120.2,875.2,726), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,763.3), new cjs.Rectangle(-32.5,-120.2,875.2,822.5), new cjs.Rectangle(-32.5,-120.2,875.2,932.7), new cjs.Rectangle(-32.5,-120.2,875.2,723.4)];


(lib.makeup19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// ice1
	this.instance = new lib.ice1();
	this.instance.setTransform(731.1,310.8,0.938,0.938,0.1,0,0,30.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31));

	// ice2
	this.instance_1 = new lib.ice2();
	this.instance_1.setTransform(755.2,358,0.999,0.999,-29.9,0,0,32.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// ice1
	this.instance_2 = new lib.ice1();
	this.instance_2.setTransform(718.9,254,1,1,0,0,0,30.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31));

	// ice1
	this.instance_3 = new lib.ice1();
	this.instance_3.setTransform(706.1,361.9,0.938,0.938,0.1,0,0,30.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({regX:30.6,regY:31.5,scaleX:0.78,scaleY:0.78,rotation:-30,x:534.1,y:338},12).wait(1));

	// ice2
	this.instance_4 = new lib.ice2();
	this.instance_4.setTransform(684.6,297.9,0.999,0.999,-29.9,0,0,32.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({scaleX:1,scaleY:1,rotation:-30,x:491.7,y:350.9},12).wait(1));

	// ice1
	this.instance_5 = new lib.ice1();
	this.instance_5.setTransform(646.9,353.9,1,1,0,0,0,30.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({x:439.9,y:348.9},12).wait(1));

	// Layer 6
	this.instance_6 = new lib.lipsbad();
	this.instance_6.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31));

	// Layer 5
	this.instance_7 = new lib.eyebr();
	this.instance_7.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31));

	// eyes
	this.instance_8 = new lib.eyes1();
	this.instance_8.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.instance_9 = new lib.eyes3();
	this.instance_9.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},2).wait(29));

	// shad
	this.instance_10 = new lib.shadows();
	this.instance_10.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(31));

	// Layer 4
	this.instance_11 = new lib.eyebag1();
	this.instance_11.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_12 = new lib.eyebag1();
	this.instance_12.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(31));

	// lips
	this.instance_13 = new lib.lips();
	this.instance_13.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31));

	// bdoy
	this.instance_14 = new lib.headmake();
	this.instance_14.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31));

	// Layer 2
	this.instance_15 = new lib.lpst();
	this.instance_15.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_16 = new lib.creme();
	this.instance_16.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_17 = new lib.pincet();
	this.instance_17.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(31));

	// Layer 3
	this.instance_18 = new lib.table();
	this.instance_18.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Слой 3
	this.instance = new lib.icoice();
	this.instance.setTransform(765.9,428.1,0.836,0.836,0,0,0,91.8,90.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(10));

	// ice1
	this.instance_1 = new lib.ice1();
	this.instance_1.setTransform(731.1,700.9,0.938,0.938,0.1,0,0,30.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:31.5,y:626.9},0).wait(1).to({y:560.6},0).wait(1).to({y:502},0).wait(1).to({y:451.3},0).wait(1).to({y:408.4},0).wait(1).to({y:373.3},0).wait(1).to({y:346},0).wait(1).to({y:326.5},0).wait(1).to({y:314.8},0).wait(1).to({regY:31.4,y:310.8},0).wait(1));

	// ice2
	this.instance_2 = new lib.ice2();
	this.instance_2.setTransform(755.2,748.1,0.999,0.999,-29.9,0,0,32.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:674},0).wait(1).to({y:607.7},0).wait(1).to({y:549.1},0).wait(1).to({y:498.4},0).wait(1).to({y:455.5},0).wait(1).to({y:420.4},0).wait(1).to({y:393.1},0).wait(1).to({y:373.6},0).wait(1).to({y:361.9},0).wait(1).to({y:358},0).wait(1));

	// ice1
	this.instance_3 = new lib.ice1();
	this.instance_3.setTransform(718.9,644.1,1,1,0,0,0,30.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:569.9},0).wait(1).to({y:503.6},0).wait(1).to({y:445.1},0).wait(1).to({y:394.4},0).wait(1).to({y:351.5},0).wait(1).to({y:316.4},0).wait(1).to({y:289.1},0).wait(1).to({y:269.6},0).wait(1).to({y:257.9},0).wait(1).to({y:254},0).wait(1));

	// ice1
	this.instance_4 = new lib.ice1();
	this.instance_4.setTransform(706.1,752,0.938,0.938,0.1,0,0,30.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:31.5,y:678},0).wait(1).to({y:611.7},0).wait(1).to({y:553.1},0).wait(1).to({y:502.4},0).wait(1).to({y:459.5},0).wait(1).to({y:424.4},0).wait(1).to({y:397.1},0).wait(1).to({y:377.6},0).wait(1).to({y:365.9},0).wait(1).to({regY:31.4,y:361.9},0).wait(1));

	// ice2
	this.instance_5 = new lib.ice2();
	this.instance_5.setTransform(684.6,688,0.999,0.999,-29.9,0,0,32.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({y:613.9},0).wait(1).to({y:547.6},0).wait(1).to({y:489},0).wait(1).to({y:438.3},0).wait(1).to({y:395.4},0).wait(1).to({y:360.3},0).wait(1).to({y:333},0).wait(1).to({y:313.5},0).wait(1).to({y:301.8},0).wait(1).to({y:297.9},0).wait(1));

	// ice1
	this.instance_6 = new lib.ice1();
	this.instance_6.setTransform(646.9,744,1,1,0,0,0,30.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:669.9},0).wait(1).to({y:603.6},0).wait(1).to({y:545},0).wait(1).to({y:494.3},0).wait(1).to({y:451.4},0).wait(1).to({y:416.3},0).wait(1).to({y:389},0).wait(1).to({y:369.5},0).wait(1).to({y:357.8},0).wait(1).to({y:353.9},0).wait(1));

	// Layer 6
	this.instance_7 = new lib.lipsbad();
	this.instance_7.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11));

	// Layer 5
	this.instance_8 = new lib.eyebr();
	this.instance_8.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11));

	// eyes
	this.instance_9 = new lib.eyes1();
	this.instance_9.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11));

	// shad
	this.instance_10 = new lib.shadows();
	this.instance_10.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11));

	// Layer 4
	this.instance_11 = new lib.eyebag1();
	this.instance_11.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_12 = new lib.eyebag1();
	this.instance_12.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(11));

	// lips
	this.instance_13 = new lib.lips();
	this.instance_13.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(11));

	// bdoy
	this.instance_14 = new lib.headmake();
	this.instance_14.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11));

	// Layer 2
	this.instance_15 = new lib.lpst();
	this.instance_15.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_16 = new lib.creme();
	this.instance_16.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_17 = new lib.pincet();
	this.instance_17.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(11));

	// Layer 3
	this.instance_18 = new lib.table();
	this.instance_18.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,913.5);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-120.2,875.2,839.3), new cjs.Rectangle(-32.5,-120.2,875.2,773), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect, rect];


(lib.makeup17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Layer 2
	this.instance = new lib.wand();
	this.instance.setTransform(667.1,249.4,1,1,-15,0,0,50,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:63.5,regY:169,rotation:-30.5,x:660.1,y:274.5},0).wait(1).to({rotation:-44.8,x:639.2,y:295.1},0).wait(1).to({rotation:-57.9,x:619.4,y:314.2},0).wait(1).to({rotation:-69.7,x:600.9,y:331.7},0).wait(1).to({rotation:-80.2,x:583.9,y:347.8},0).wait(1).to({rotation:-89.6,x:568.7,y:362.4},0).wait(1).to({rotation:-97.6,x:555.4,y:375.3},0).wait(1).to({rotation:-104.5,x:544.1,y:386.5},0).wait(1).to({rotation:-110.1,x:534.7,y:395.8},0).wait(1).to({rotation:-114.4,x:527.5,y:403.2},0).wait(1).to({rotation:-117.5,x:522.3,y:408.4},0).wait(1).to({rotation:-119.4,x:519.2,y:411.5},0).wait(1).to({regX:49.9,regY:162.5,rotation:-120,x:519.3,y:427.6},0).wait(1).to({regX:63.5,regY:169,rotation:-119.1,x:519.6,y:411.1},0).wait(1).to({rotation:-116.5,x:524,y:406.7},0).wait(1).to({rotation:-112.2,x:531.2,y:399.3},0).wait(1).to({rotation:-106.1,x:541.4,y:389.2},0).wait(1).to({rotation:-98.3,x:554.3,y:376.4},0).wait(1).to({rotation:-88.8,x:570,y:361.1},0).wait(1).to({rotation:-77.5,x:588.4,y:343.6},0).wait(1).to({rotation:-64.5,x:609.2,y:323.9},0).wait(1).to({rotation:-49.7,x:631.9,y:302.2},0).wait(1).to({rotation:-33.2,x:656.3,y:278.3},0).wait(1).to({regX:50,regY:162.5,rotation:-15,x:667.1,y:249.4},0).to({x:687.1,y:787.5},15).to({_off:true},1).wait(6));

	// Layer 11
	this.instance_1 = new lib.exp();
	this.instance_1.setTransform(365.5,490,0.404,0.366,0,0,0,33.5,41.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(1).to({regX:32.2,regY:42,scaleX:0.79,scaleY:0.65,x:364.4,y:490.1},0).wait(1).to({scaleX:1.1,scaleY:0.88,x:364},0).wait(1).to({scaleX:1.34,scaleY:1.07,x:363.7},0).wait(1).to({scaleX:1.52,scaleY:1.2,x:363.5},0).wait(1).to({scaleX:1.62,scaleY:1.27,x:363.3},0).wait(1).to({regX:33.5,regY:41.9,scaleX:1.65,scaleY:1.3,x:365.4,y:490},0).to({alpha:0.012},3).to({_off:true},1).wait(4));

	// Layer 10
	this.instance_2 = new lib.crack();
	this.instance_2.setTransform(361.4,495.5,1,1,0,0,0,20.3,24.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(5).to({regX:20.5,regY:24,scaleX:1.25,scaleY:1.25,x:361.6,y:496.2,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:361.7,y:496.9,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:497.5,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:361.8,y:497.9,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:498.2,alpha:0.039},0).wait(1).to({regX:20.3,regY:24.2,scaleX:1.83,scaleY:1.83,x:361.4,y:498.7,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 8 copy 2
	this.instance_3 = new lib.spark1();
	this.instance_3.setTransform(359.7,493.2,0.271,0.271,114.7,0,0,20.7,20.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regY:20.8,scaleX:1,scaleY:1,rotation:-65.3,x:384.5,y:539.6},9).to({regY:20.7,rotation:69.7,x:384.4,y:539.5,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8 copy
	this.instance_4 = new lib.spark1();
	this.instance_4.setTransform(360.1,492.8,0.271,0.271,-140.3,0,0,20.5,20.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({regX:20.8,regY:20.8,scaleX:1,scaleY:1,rotation:39.7,x:284.1,y:527.4},9).to({regX:20.7,regY:20.7,rotation:174.7,x:284.2,y:527.3,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8
	this.instance_5 = new lib.spark1();
	this.instance_5.setTransform(367.1,491.3,0.271,0.271,0,0,0,20.7,20.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:180,x:403.4,y:416.3},9).to({rotation:315,alpha:0.012},5).to({_off:true},1).wait(23));

	// Objects copy
	this.instance_6 = new lib.snw1();
	this.instance_6.setTransform(361.1,494.7,0.563,0.563,135,0,0,10.9,11.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regY:11.5,scaleX:2.15,scaleY:2.15,x:399.8,y:527.4},5).to({regY:11.4,scaleX:3.02,scaleY:3.02,x:421.2,y:548.6,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects copy 2
	this.instance_7 = new lib.snw1();
	this.instance_7.setTransform(354.8,492.6,0.428,0.428,-60,0,0,11.1,11.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({regX:10.9,regY:11.5,scaleX:1.63,scaleY:1.63,x:319.8,y:476.3},5).to({scaleX:2.3,scaleY:2.3,x:300,y:464.9,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects
	this.instance_8 = new lib.snw1();
	this.instance_8.setTransform(363.1,490.8,0.563,0.563,0,0,0,10.9,11.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({scaleX:2.15,scaleY:2.15,x:358.8,y:440.3},5).to({scaleX:3.02,scaleY:3.02,x:358.7,y:410.3,alpha:0.012},4).to({_off:true},1).wait(28));

	// Layer 7
	this.instance_9 = new lib.froze1();
	this.instance_9.setTransform(364.6,493.8,0.267,0.267,0,0,0,25.9,26.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({regX:24.1,regY:22.1,scaleX:0.42,scaleY:0.42,x:363.8,y:492},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:363.6,y:491.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:363.4,y:491},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:363.2,y:490.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:363,y:490.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:490},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:362.9,y:489.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:362.8,y:489.7},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1,scaleY:1,x:364.6,y:493.8},0).wait(16).to({regX:24.1,regY:22.1,scaleX:1.25,scaleY:1.25,x:362.8,y:489.6,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:489.5,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,alpha:0.039},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1.83,scaleY:1.83,x:365.9,y:497.2,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 6
	this.instance_10 = new lib.lipsbad();
	this.instance_10.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46));

	// Layer 5
	this.instance_11 = new lib.eyebr();
	this.instance_11.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(46));

	// Layer 3
	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_12.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},32).wait(14));

	// eyes
	this.instance_13 = new lib.eyes1();
	this.instance_13.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(46));

	// shad
	this.instance_14 = new lib.shadows();
	this.instance_14.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(46));

	// Layer 4
	this.instance_15 = new lib.eyebag1();
	this.instance_15.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_16 = new lib.eyebag1();
	this.instance_16.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).wait(46));

	// lips
	this.instance_17 = new lib.lips();
	this.instance_17.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(46));

	// bdoy
	this.instance_18 = new lib.headmake();
	this.instance_18.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(46));

	// Layer 2
	this.instance_19 = new lib.icoice();
	this.instance_19.setTransform(765.9,428.1,0.836,0.836,0,0,0,91.8,90.4);

	this.instance_20 = new lib.lpst();
	this.instance_20.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_21 = new lib.creme();
	this.instance_21.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_22 = new lib.pincet();
	this.instance_22.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(46));

	// Layer 3
	this.instance_23 = new lib.table();
	this.instance_23.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,731.4), new cjs.Rectangle(-32.5,-120.2,875.2,767.2), new cjs.Rectangle(-32.5,-120.2,875.2,803.1), new cjs.Rectangle(-32.5,-120.2,875.2,839), new cjs.Rectangle(-32.5,-120.2,875.2,874.9), new cjs.Rectangle(-32.5,-120.2,875.2,910.7), new cjs.Rectangle(-32.5,-120.2,875.2,946.6), new cjs.Rectangle(-32.5,-120.2,875.2,982.5), new cjs.Rectangle(-32.5,-120.2,875.2,1018.4), new cjs.Rectangle(-32.5,-120.2,875.2,1054.2), new cjs.Rectangle(-32.5,-120.2,875.2,1090.3), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect];


(lib.makeup16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Layer 2
	this.instance = new lib.wand();
	this.instance.setTransform(667.1,249.4,1,1,-15,0,0,50,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:63.5,regY:169,rotation:-30.5,x:678.8,y:265.3},0).wait(1).to({rotation:-44.8,x:675,y:277.4},0).wait(1).to({rotation:-57.9,x:670.8,y:288.9},0).wait(1).to({rotation:-69.7,x:666.5,y:299.5},0).wait(1).to({rotation:-80.2,x:662.2,y:309.3},0).wait(1).to({rotation:-89.6,x:658.2,y:318.4},0).wait(1).to({rotation:-97.6,x:654.5,y:326.5},0).wait(1).to({rotation:-104.5,x:651.4,y:333.7},0).wait(1).to({rotation:-110.1,x:648.8,y:339.7},0).wait(1).to({rotation:-114.4,x:646.8,y:344.5},0).wait(1).to({rotation:-117.5,x:645.3,y:347.9},0).wait(1).to({rotation:-119.4,x:644.4,y:349.9},0).wait(1).to({regX:49.9,regY:162.5,rotation:-120,x:645.3,y:365.6},0).wait(1).to({regX:63.5,regY:169,rotation:-119.1,x:644.6,y:349.6},0).wait(1).to({rotation:-116.5,x:645.8,y:346.7},0).wait(1).to({rotation:-112.2,x:647.8,y:341.9},0).wait(1).to({rotation:-106.1,x:650.7,y:335.4},0).wait(1).to({rotation:-98.3,x:654.3,y:327.2},0).wait(1).to({rotation:-88.8,x:658.6,y:317.6},0).wait(1).to({rotation:-77.5,x:663.4,y:306.7},0).wait(1).to({rotation:-64.5,x:668.6,y:294.7},0).wait(1).to({rotation:-49.7,x:673.6,y:281.7},0).wait(1).to({rotation:-33.2,x:678.2,y:267.6},0).wait(1).to({regX:50,regY:162.5,rotation:-15,x:667.1,y:249.4},0).wait(22));

	// Layer 11
	this.instance_1 = new lib.exp();
	this.instance_1.setTransform(499.3,435.9,0.404,0.366,0,0,0,33.5,41.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(1).to({regX:32.2,regY:42,scaleX:0.79,scaleY:0.65,x:498.2,y:436},0).wait(1).to({scaleX:1.1,scaleY:0.88,x:497.8},0).wait(1).to({scaleX:1.34,scaleY:1.07,x:497.5},0).wait(1).to({scaleX:1.52,scaleY:1.2,x:497.3},0).wait(1).to({scaleX:1.62,scaleY:1.27,x:497.1},0).wait(1).to({regX:33.5,regY:41.9,scaleX:1.65,scaleY:1.3,x:499.2,y:435.9},0).to({alpha:0.012},3).to({_off:true},1).wait(4));

	// Layer 10
	this.instance_2 = new lib.crack();
	this.instance_2.setTransform(495.2,441.4,1,1,0,0,0,20.3,24.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(5).to({regX:20.5,regY:24,scaleX:1.25,scaleY:1.25,x:495.4,y:442.1,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:495.5,y:442.8,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:443.4,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:495.6,y:443.8,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:444.1,alpha:0.039},0).wait(1).to({regX:20.3,regY:24.2,scaleX:1.83,scaleY:1.83,x:495.2,y:444.6,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 8 copy 2
	this.instance_3 = new lib.spark1();
	this.instance_3.setTransform(493.5,439.1,0.271,0.271,114.7,0,0,20.7,20.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regY:20.8,scaleX:1,scaleY:1,rotation:-65.3,x:518.3,y:485.5},9).to({regY:20.7,rotation:69.7,x:518.2,y:485.4,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8 copy
	this.instance_4 = new lib.spark1();
	this.instance_4.setTransform(493.9,438.7,0.271,0.271,-140.3,0,0,20.5,20.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({regX:20.8,regY:20.8,scaleX:1,scaleY:1,rotation:39.7,x:417.9,y:473.3},9).to({regX:20.7,regY:20.7,rotation:174.7,x:418,y:473.2,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8
	this.instance_5 = new lib.spark1();
	this.instance_5.setTransform(500.9,437.2,0.271,0.271,0,0,0,20.7,20.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:180,x:537.2,y:362.2},9).to({rotation:315,alpha:0.012},5).to({_off:true},1).wait(23));

	// Objects copy
	this.instance_6 = new lib.snw1();
	this.instance_6.setTransform(494.9,440.6,0.563,0.563,135,0,0,10.9,11.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regY:11.5,scaleX:2.15,scaleY:2.15,x:533.6,y:473.3},5).to({regY:11.4,scaleX:3.02,scaleY:3.02,x:555,y:494.5,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects copy 2
	this.instance_7 = new lib.snw1();
	this.instance_7.setTransform(488.6,438.5,0.428,0.428,-60,0,0,11.1,11.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({regX:10.9,regY:11.5,scaleX:1.63,scaleY:1.63,x:453.6,y:422.2},5).to({scaleX:2.3,scaleY:2.3,x:433.8,y:410.8,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects
	this.instance_8 = new lib.snw1();
	this.instance_8.setTransform(496.9,436.7,0.563,0.563,0,0,0,10.9,11.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({scaleX:2.15,scaleY:2.15,x:492.6,y:386.2},5).to({scaleX:3.02,scaleY:3.02,x:492.5,y:356.2,alpha:0.012},4).to({_off:true},1).wait(28));

	// Layer 7
	this.instance_9 = new lib.froze1();
	this.instance_9.setTransform(498.4,439.7,0.267,0.267,0,0,0,25.9,26.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({regX:24.1,regY:22.1,scaleX:0.42,scaleY:0.42,x:497.6,y:437.9},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:497.4,y:437.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:497.2,y:436.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:497,y:436.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:496.8,y:436.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:435.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:496.7,y:435.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:496.6,y:435.6},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1,scaleY:1,x:498.4,y:439.7},0).wait(16).to({regX:24.1,regY:22.1,scaleX:1.25,scaleY:1.25,x:496.6,y:435.5,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:435.4,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,alpha:0.039},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1.83,scaleY:1.83,x:499.7,y:443.1,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 6
	this.instance_10 = new lib.lipsbad();
	this.instance_10.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46));

	// Layer 5
	this.instance_11 = new lib.eyebr();
	this.instance_11.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(46));

	// Layer 3
	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.pimple();
	this.instance_13.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_13.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).to({state:[{t:this.instance_12}]},32).wait(14));

	// eyes
	this.instance_14 = new lib.eyes1();
	this.instance_14.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(46));

	// shad
	this.instance_15 = new lib.shadows();
	this.instance_15.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(46));

	// Layer 4
	this.instance_16 = new lib.eyebag1();
	this.instance_16.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_17 = new lib.eyebag1();
	this.instance_17.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(46));

	// lips
	this.instance_18 = new lib.lips();
	this.instance_18.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(46));

	// bdoy
	this.instance_19 = new lib.headmake();
	this.instance_19.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(46));

	// Layer 2
	this.instance_20 = new lib.icoice();
	this.instance_20.setTransform(765.9,428.1,0.836,0.836,0,0,0,91.8,90.4);

	this.instance_21 = new lib.lpst();
	this.instance_21.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_22 = new lib.creme();
	this.instance_22.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_23 = new lib.pincet();
	this.instance_23.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(46));

	// Layer 3
	this.instance_24 = new lib.table();
	this.instance_24.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,880.1,723.4), new cjs.Rectangle(-32.5,-120.2,879.4,723.4), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,880.7,723.4), new cjs.Rectangle(-32.5,-120.2,875.7,723.4), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Layer 2
	this.instance = new lib.wand();
	this.instance.setTransform(667.1,249.4,1,1,-15,0,0,50,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:63.5,regY:169,rotation:-23.9,x:642.4,y:276.6},0).wait(1).to({rotation:-32,x:605.8,y:299},0).wait(1).to({rotation:-39.5,x:572.2,y:319.5},0).wait(1).to({rotation:-46.2,x:541.5,y:338.2},0).wait(1).to({rotation:-52.3,x:513.9,y:354.9},0).wait(1).to({rotation:-57.6,x:489.5,y:369.7},0).wait(1).to({rotation:-62.2,x:468.2,y:382.6},0).wait(1).to({rotation:-66.1,x:450.1,y:393.6},0).wait(1).to({rotation:-69.3,x:435.3,y:402.6},0).wait(1).to({rotation:-71.8,x:423.7,y:409.6},0).wait(1).to({rotation:-73.6,x:415.4,y:414.6},0).wait(1).to({rotation:-74.6,x:410.4,y:417.6},0).wait(1).to({regX:49.9,regY:162.5,rotation:-75,x:399,y:430.1},0).wait(1).to({regX:63.5,regY:169,rotation:-74.5,x:411.1,y:417.2},0).wait(1).to({rotation:-73,x:418,y:412.9},0).wait(1).to({rotation:-70.5,x:429.6,y:406},0).wait(1).to({rotation:-67.1,x:445.8,y:396.2},0).wait(1).to({rotation:-62.6,x:466.4,y:383.6},0).wait(1).to({rotation:-57.1,x:491.6,y:368.4},0).wait(1).to({rotation:-50.7,x:521.2,y:350.5},0).wait(1).to({rotation:-43.3,x:555.1,y:329.9},0).wait(1).to({rotation:-34.8,x:593.3,y:306.7},0).wait(1).to({rotation:-25.4,x:635.5,y:280.8},0).wait(1).to({regX:50,regY:162.5,rotation:-15,x:667.1,y:249.4},0).wait(22));

	// Layer 11
	this.instance_1 = new lib.exp();
	this.instance_1.setTransform(288.3,381.9,0.404,0.366,0,0,0,33.5,41.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(1).to({regX:32.2,regY:42,scaleX:0.79,scaleY:0.65,x:287.2,y:382},0).wait(1).to({scaleX:1.1,scaleY:0.88,x:286.7},0).wait(1).to({scaleX:1.34,scaleY:1.07,x:286.4},0).wait(1).to({scaleX:1.52,scaleY:1.2,x:286.2},0).wait(1).to({scaleX:1.62,scaleY:1.27,x:286.1},0).wait(1).to({regX:33.5,regY:41.9,scaleX:1.65,scaleY:1.3,x:288.2,y:381.9},0).to({alpha:0.012},3).to({_off:true},1).wait(4));

	// Layer 10
	this.instance_2 = new lib.crack();
	this.instance_2.setTransform(284.1,387.4,1,1,0,0,0,20.3,24.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(5).to({regX:20.5,regY:24,scaleX:1.25,scaleY:1.25,x:284.4,y:388.1,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,y:388.8,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:284.5,y:389.4,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,y:389.8,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:390.1,alpha:0.039},0).wait(1).to({regX:20.3,regY:24.2,scaleX:1.83,scaleY:1.83,x:284.2,y:390.6,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 8 copy 2
	this.instance_3 = new lib.spark1();
	this.instance_3.setTransform(282.4,385.1,0.271,0.271,114.7,0,0,20.7,20.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regY:20.8,scaleX:1,scaleY:1,rotation:-65.3,x:307.2,y:431.5},9).to({regY:20.7,rotation:69.7,y:431.4,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8 copy
	this.instance_4 = new lib.spark1();
	this.instance_4.setTransform(282.8,384.7,0.271,0.271,-140.3,0,0,20.5,20.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({regX:20.8,regY:20.8,scaleX:1,scaleY:1,rotation:39.7,x:206.9,y:419.3},9).to({regX:20.7,regY:20.7,rotation:174.7,y:419.2,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8
	this.instance_5 = new lib.spark1();
	this.instance_5.setTransform(289.9,383.2,0.271,0.271,0,0,0,20.7,20.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:180,x:326.2,y:308.2},9).to({rotation:315,alpha:0.012},5).to({_off:true},1).wait(23));

	// Objects copy
	this.instance_6 = new lib.snw1();
	this.instance_6.setTransform(283.9,386.6,0.563,0.563,135,0,0,10.9,11.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regY:11.5,scaleX:2.15,scaleY:2.15,x:322.6,y:419.3},5).to({regY:11.4,scaleX:3.02,scaleY:3.02,x:344,y:440.5,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects copy 2
	this.instance_7 = new lib.snw1();
	this.instance_7.setTransform(277.5,384.5,0.428,0.428,-60,0,0,11.1,11.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({regX:10.9,regY:11.5,scaleX:1.63,scaleY:1.63,x:242.6,y:368.2},5).to({scaleX:2.3,scaleY:2.3,x:222.8,y:356.8,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects
	this.instance_8 = new lib.snw1();
	this.instance_8.setTransform(285.8,382.7,0.563,0.563,0,0,0,10.9,11.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({scaleX:2.15,scaleY:2.15,x:281.5,y:332.2},5).to({scaleX:3.02,scaleY:3.02,y:302.2,alpha:0.012},4).to({_off:true},1).wait(28));

	// Layer 7
	this.instance_9 = new lib.froze1();
	this.instance_9.setTransform(287.3,385.7,0.267,0.267,0,0,0,25.9,26.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({regX:24.1,regY:22.1,scaleX:0.42,scaleY:0.42,x:286.6,y:383.9},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:286.3,y:383.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:286.1,y:382.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:285.9,y:382.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:285.8,y:382.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:285.7,y:381.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:285.6,y:381.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:381.6},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1,scaleY:1,x:287.3,y:385.7},0).wait(16).to({regX:24.1,regY:22.1,scaleX:1.25,scaleY:1.25,x:285.6,y:381.5,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:381.4,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,alpha:0.039},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1.83,scaleY:1.83,x:288.7,y:389.1,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 6
	this.instance_10 = new lib.lipsbad();
	this.instance_10.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46));

	// Layer 5
	this.instance_11 = new lib.eyebr();
	this.instance_11.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(46));

	// Layer 3
	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.pimple();
	this.instance_13.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.pimple();
	this.instance_14.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).to({state:[{t:this.instance_13},{t:this.instance_12}]},32).wait(14));

	// eyes
	this.instance_15 = new lib.eyes1();
	this.instance_15.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(46));

	// shad
	this.instance_16 = new lib.shadows();
	this.instance_16.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(46));

	// Layer 4
	this.instance_17 = new lib.eyebag1();
	this.instance_17.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_18 = new lib.eyebag1();
	this.instance_18.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17}]}).wait(46));

	// lips
	this.instance_19 = new lib.lips();
	this.instance_19.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(46));

	// bdoy
	this.instance_20 = new lib.headmake();
	this.instance_20.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(46));

	// Layer 2
	this.instance_21 = new lib.icoice();
	this.instance_21.setTransform(765.9,428.1,0.836,0.836,0,0,0,91.8,90.4);

	this.instance_22 = new lib.lpst();
	this.instance_22.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_23 = new lib.creme();
	this.instance_23.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_24 = new lib.pincet();
	this.instance_24.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(46));

	// Layer 3
	this.instance_25 = new lib.table();
	this.instance_25.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Layer 2
	this.instance = new lib.wand();
	this.instance.setTransform(667.1,249.4,1,1,-15,0,0,50,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:63.5,regY:169,rotation:-30.5,x:657.2,y:261.1},0).wait(1).to({rotation:-44.8,x:633.6,y:269.5},0).wait(1).to({rotation:-57.9,x:611.3,y:277.4},0).wait(1).to({rotation:-69.7,x:590.5,y:284.8},0).wait(1).to({rotation:-80.2,x:571.6,y:291.9},0).wait(1).to({rotation:-89.6,x:554.7,y:298.5},0).wait(1).to({rotation:-97.6,x:539.8,y:304.5},0).wait(1).to({rotation:-104.5,x:527.2,y:309.8},0).wait(1).to({rotation:-110.1,x:516.8,y:314.3},0).wait(1).to({rotation:-114.4,x:508.7,y:317.8},0).wait(1).to({rotation:-117.5,x:502.9,y:320.5},0).wait(1).to({rotation:-119.4,x:499.4,y:322},0).wait(1).to({regX:50,regY:162.5,rotation:-120,y:337.5},0).wait(1).to({regX:63.5,regY:169,rotation:-119.1,x:499.9,y:321.9},0).wait(1).to({rotation:-116.5,x:504.8,y:319.6},0).wait(1).to({rotation:-112.2,x:512.8,y:316},0).wait(1).to({rotation:-106.1,x:524.1,y:311.1},0).wait(1).to({rotation:-98.3,x:538.5,y:305},0).wait(1).to({rotation:-88.8,x:556.1,y:297.9},0).wait(1).to({rotation:-77.5,x:576.5,y:290},0).wait(1).to({rotation:-64.5,x:599.8,y:281.5},0).wait(1).to({rotation:-49.7,x:625.3,y:272.4},0).wait(1).to({rotation:-33.2,x:652.8,y:262.7},0).wait(1).to({regX:50,regY:162.5,rotation:-15,x:667.1,y:249.4},0).wait(22));

	// Layer 11
	this.instance_1 = new lib.exp();
	this.instance_1.setTransform(405.9,373.9,0.404,0.366,0,0,0,33.5,41.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(1).to({regX:32.2,regY:42,scaleX:0.79,scaleY:0.65,x:404.8,y:374},0).wait(1).to({scaleX:1.1,scaleY:0.88,x:404.4},0).wait(1).to({scaleX:1.34,scaleY:1.07,x:404.1},0).wait(1).to({scaleX:1.52,scaleY:1.2,x:403.9},0).wait(1).to({scaleX:1.62,scaleY:1.27,x:403.7},0).wait(1).to({regX:33.5,regY:41.9,scaleX:1.65,scaleY:1.3,x:405.8,y:373.9},0).to({alpha:0.012},3).to({_off:true},1).wait(4));

	// Layer 10
	this.instance_2 = new lib.crack();
	this.instance_2.setTransform(401.8,379.4,1,1,0,0,0,20.3,24.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(5).to({regX:20.5,regY:24,scaleX:1.25,scaleY:1.25,x:402,y:380.1,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:402.1,y:380.8,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:381.4,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:402.2,y:381.8,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:382.1,alpha:0.039},0).wait(1).to({regX:20.3,regY:24.2,scaleX:1.83,scaleY:1.83,x:401.8,y:382.6,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 8 copy 2
	this.instance_3 = new lib.spark1();
	this.instance_3.setTransform(400.1,377.1,0.271,0.271,114.7,0,0,20.7,20.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regY:20.8,scaleX:1,scaleY:1,rotation:-65.3,x:424.9,y:423.5},9).to({regY:20.7,rotation:69.7,x:424.8,y:423.4,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8 copy
	this.instance_4 = new lib.spark1();
	this.instance_4.setTransform(400.5,376.7,0.271,0.271,-140.3,0,0,20.5,20.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({regX:20.8,regY:20.8,scaleX:1,scaleY:1,rotation:39.7,x:324.5,y:411.3},9).to({regX:20.7,regY:20.7,rotation:174.7,x:324.6,y:411.2,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8
	this.instance_5 = new lib.spark1();
	this.instance_5.setTransform(407.5,375.2,0.271,0.271,0,0,0,20.7,20.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:180,x:443.8,y:300.2},9).to({rotation:315,alpha:0.012},5).to({_off:true},1).wait(23));

	// Objects copy
	this.instance_6 = new lib.snw1();
	this.instance_6.setTransform(401.5,378.6,0.563,0.563,135,0,0,10.9,11.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regY:11.5,scaleX:2.15,scaleY:2.15,x:440.2,y:411.3},5).to({regY:11.4,scaleX:3.02,scaleY:3.02,x:461.6,y:432.5,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects copy 2
	this.instance_7 = new lib.snw1();
	this.instance_7.setTransform(395.2,376.5,0.428,0.428,-60,0,0,11.1,11.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({regX:10.9,regY:11.5,scaleX:1.63,scaleY:1.63,x:360.2,y:360.2},5).to({scaleX:2.3,scaleY:2.3,x:340.4,y:348.8,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects
	this.instance_8 = new lib.snw1();
	this.instance_8.setTransform(403.5,374.7,0.563,0.563,0,0,0,10.9,11.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({scaleX:2.15,scaleY:2.15,x:399.2,y:324.2},5).to({scaleX:3.02,scaleY:3.02,x:399.1,y:294.2,alpha:0.012},4).to({_off:true},1).wait(28));

	// Layer 7
	this.instance_9 = new lib.froze1();
	this.instance_9.setTransform(403.3,379.7,0.267,0.267,0,0,0,25.9,26.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({regX:24.1,regY:22.1,scaleX:0.42,scaleY:0.42,x:402.6,y:377.9},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:402.3,y:377.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:402.1,y:376.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:401.9,y:376.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:401.8,y:376.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:401.7,y:375.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:401.6,y:375.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:375.6},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1,scaleY:1,x:403.3,y:379.7},0).wait(16).to({regX:24.1,regY:22.1,scaleX:1.25,scaleY:1.25,x:401.6,y:375.5,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:375.4,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,alpha:0.039},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1.83,scaleY:1.83,x:404.7,y:383.1,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 6
	this.instance_10 = new lib.lipsbad();
	this.instance_10.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46));

	// Layer 5
	this.instance_11 = new lib.eyebr();
	this.instance_11.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(46));

	// Layer 3
	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.pimple();
	this.instance_13.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.pimple();
	this.instance_14.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_14.alpha = 0.699;

	this.instance_15 = new lib.pimple();
	this.instance_15.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14,p:{x:496.7,y:442.3,alpha:0.699}},{t:this.instance_13,p:{regX:14.1,regY:14,scaleX:0.783,scaleY:0.715,x:358.7,y:494}},{t:this.instance_12,p:{regX:14,regY:14.1,scaleX:1.058,scaleY:1.189,x:401.6,y:375.2}}]}).to({state:[{t:this.instance_14,p:{x:283.6,y:385.2,alpha:1}},{t:this.instance_13,p:{regX:14,regY:14.1,scaleX:1.058,scaleY:1.189,x:496.7,y:442.3}},{t:this.instance_12,p:{regX:14.1,regY:14,scaleX:0.783,scaleY:0.715,x:358.7,y:494}}]},31).wait(15));

	// eyes
	this.instance_16 = new lib.eyes1();
	this.instance_16.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(46));

	// shad
	this.instance_17 = new lib.shadows();
	this.instance_17.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(46));

	// Layer 4
	this.instance_18 = new lib.eyebag1();
	this.instance_18.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_19 = new lib.eyebag1();
	this.instance_19.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18}]}).wait(46));

	// lips
	this.instance_20 = new lib.lips();
	this.instance_20.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(46));

	// bdoy
	this.instance_21 = new lib.headmake();
	this.instance_21.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(46));

	// Layer 2
	this.instance_22 = new lib.icoice();
	this.instance_22.setTransform(765.9,428.1,0.836,0.836,0,0,0,91.8,90.4);

	this.instance_23 = new lib.lpst();
	this.instance_23.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_24 = new lib.creme();
	this.instance_24.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_25 = new lib.pincet();
	this.instance_25.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]}).wait(46));

	// Layer 3
	this.instance_26 = new lib.table();
	this.instance_26.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Layer 2
	this.instance = new lib.wand();
	this.instance.setTransform(667.1,249.4,1,1,-15,0,0,50,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:63.5,regY:169,rotation:-21.7,x:650.5,y:255.5},0).wait(1).to({rotation:-27.8,x:621.5,y:258.7},0).wait(1).to({rotation:-33.4,x:595,y:261.5},0).wait(1).to({rotation:-38.4,x:570.8,y:264.2},0).wait(1).to({rotation:-43,x:549,y:266.5},0).wait(1).to({rotation:-47,x:529.8,y:268.6},0).wait(1).to({rotation:-50.4,x:513.1,y:270.4},0).wait(1).to({rotation:-53.3,x:498.8,y:272},0).wait(1).to({rotation:-55.7,x:487.2,y:273.3},0).wait(1).to({rotation:-57.6,x:478.1,y:274.3},0).wait(1).to({rotation:-58.9,x:471.6,y:275},0).wait(1).to({rotation:-59.7,x:467.7,y:275.5},0).wait(1).to({regX:50,regY:162.5,rotation:-60,x:454.1,y:284.1},0).wait(1).to({regX:63.5,regY:169,rotation:-59.6,x:468.3,y:275.4},0).wait(1).to({rotation:-58.5,x:473.7,y:274.8},0).wait(1).to({rotation:-56.7,x:482.7,y:273.8},0).wait(1).to({rotation:-54,x:495.4,y:272.3},0).wait(1).to({rotation:-50.7,x:511.7,y:270.6},0).wait(1).to({rotation:-46.6,x:531.4,y:268.4},0).wait(1).to({rotation:-41.8,x:554.7,y:265.9},0).wait(1).to({rotation:-36.2,x:581.5,y:263},0).wait(1).to({rotation:-29.9,x:611.6,y:259.7},0).wait(1).to({rotation:-22.8,x:645.1,y:256.2},0).wait(1).to({regX:50,regY:162.5,rotation:-15,x:667.1,y:249.4},0).wait(22));

	// Layer 11
	this.instance_1 = new lib.exp();
	this.instance_1.setTransform(330.2,208.2,0.404,0.366,0,0,0,33.5,41.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(1).to({regX:32.2,regY:42,scaleX:0.79,scaleY:0.65,x:329.1,y:208.3},0).wait(1).to({scaleX:1.1,scaleY:0.88,x:328.6,y:208.4},0).wait(1).to({scaleX:1.34,scaleY:1.07,x:328.3},0).wait(1).to({scaleX:1.52,scaleY:1.2,x:328.1},0).wait(1).to({scaleX:1.62,scaleY:1.27,x:328},0).wait(1).to({regX:33.5,regY:41.9,scaleX:1.65,scaleY:1.3,x:330.1,y:208.3},0).to({alpha:0.012},3).to({_off:true},1).wait(4));

	// Layer 10
	this.instance_2 = new lib.crack();
	this.instance_2.setTransform(326,213.8,1,1,0,0,0,20.3,24.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(5).to({regX:20.5,regY:24,scaleX:1.25,scaleY:1.25,x:326.3,y:214.5,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,y:215.2,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:326.4,y:215.8,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,y:216.2,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:216.4,alpha:0.039},0).wait(1).to({regX:20.3,regY:24.2,scaleX:1.83,scaleY:1.83,x:326.1,y:216.9,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 8 copy 2
	this.instance_3 = new lib.spark1();
	this.instance_3.setTransform(324.3,211.4,0.271,0.271,114.7,0,0,20.7,20.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regY:20.8,scaleX:1,scaleY:1,rotation:-65.3,x:349.1,y:257.8},9).to({regY:20.7,rotation:69.7,y:257.7,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8 copy
	this.instance_4 = new lib.spark1();
	this.instance_4.setTransform(324.7,211,0.271,0.271,-140.3,0,0,20.5,20.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({regX:20.8,regY:20.8,scaleX:1,scaleY:1,rotation:39.7,x:248.8,y:245.7},9).to({regX:20.7,regY:20.7,rotation:174.7,y:245.6,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8
	this.instance_5 = new lib.spark1();
	this.instance_5.setTransform(331.8,209.6,0.271,0.271,0,0,0,20.7,20.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:180,x:368.1,y:134.5},9).to({rotation:315,alpha:0.012},5).to({_off:true},1).wait(23));

	// Objects copy
	this.instance_6 = new lib.snw1();
	this.instance_6.setTransform(325.8,212.9,0.563,0.563,135,0,0,10.9,11.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regY:11.5,scaleX:2.15,scaleY:2.15,x:364.5,y:245.6},5).to({regY:11.4,scaleX:3.02,scaleY:3.02,x:385.9,y:266.9,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects copy 2
	this.instance_7 = new lib.snw1();
	this.instance_7.setTransform(319.4,210.8,0.428,0.428,-60,0,0,11.1,11.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({regX:10.9,regY:11.5,scaleX:1.63,scaleY:1.63,x:284.5,y:194.6},5).to({scaleX:2.3,scaleY:2.3,x:264.7,y:183.1,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects
	this.instance_8 = new lib.snw1();
	this.instance_8.setTransform(327.7,209,0.563,0.563,0,0,0,10.9,11.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({scaleX:2.15,scaleY:2.15,x:323.4,y:158.5},5).to({scaleX:3.02,scaleY:3.02,y:128.5,alpha:0.012},4).to({_off:true},1).wait(28));

	// Layer 7
	this.instance_9 = new lib.froze1();
	this.instance_9.setTransform(327.6,214,0.267,0.267,0,0,0,25.9,26.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({regX:24.1,regY:22.1,scaleX:0.42,scaleY:0.42,x:326.8,y:212.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:326.6,y:211.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:326.4,y:211.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:326.2,y:210.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:326,y:210.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:210.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:325.9,y:210},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:325.8,y:209.9},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1,scaleY:1,x:327.6,y:214.1},0).wait(16).to({regX:24.1,regY:22.1,scaleX:1.25,scaleY:1.25,x:325.8,y:209.8,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,alpha:0.039},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1.83,scaleY:1.83,x:328.9,y:217.5,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 6
	this.instance_10 = new lib.lipsbad();
	this.instance_10.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46));

	// Layer 5
	this.instance_11 = new lib.eyebr();
	this.instance_11.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(46));

	// Layer 3
	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.pimple();
	this.instance_13.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.pimple();
	this.instance_14.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_14.alpha = 0.699;

	this.instance_15 = new lib.pimple();
	this.instance_15.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_15.alpha = 0.699;

	this.instance_16 = new lib.pimple();
	this.instance_16.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15,p:{regX:14.1,regY:14,scaleX:0.783,scaleY:0.715,x:328.7,y:206,alpha:0.699}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).to({state:[{t:this.instance_15,p:{regX:14,regY:14.1,scaleX:1.058,scaleY:1.189,x:283.6,y:385.2,alpha:1}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},33).wait(13));

	// eyes
	this.instance_17 = new lib.eyes1();
	this.instance_17.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(46));

	// shad
	this.instance_18 = new lib.shadows();
	this.instance_18.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(46));

	// Layer 4
	this.instance_19 = new lib.eyebag1();
	this.instance_19.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_20 = new lib.eyebag1();
	this.instance_20.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19}]}).wait(46));

	// lips
	this.instance_21 = new lib.lips();
	this.instance_21.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(46));

	// bdoy
	this.instance_22 = new lib.headmake();
	this.instance_22.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(46));

	// Layer 2
	this.instance_23 = new lib.icoice();
	this.instance_23.setTransform(765.9,428.1,0.836,0.836,0,0,0,91.8,90.4);

	this.instance_24 = new lib.lpst();
	this.instance_24.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_25 = new lib.creme();
	this.instance_25.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_26 = new lib.pincet();
	this.instance_26.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23}]}).wait(46));

	// Layer 3
	this.instance_27 = new lib.table();
	this.instance_27.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Layer 2
	this.instance = new lib.wand();
	this.instance.setTransform(667.1,249.4,1,1,-15,0,0,50,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:63.5,regY:169,rotation:-21.7,x:676.2,y:254},0).wait(1).to({rotation:-27.8,x:671,y:255.8},0).wait(1).to({rotation:-33.4,x:666,y:257.4},0).wait(1).to({rotation:-38.4,x:661.4,y:259},0).wait(1).to({rotation:-43,x:657.1,y:260.3},0).wait(1).to({rotation:-47,x:653.4,y:261.5},0).wait(1).to({rotation:-50.4,x:650,y:262.5},0).wait(1).to({rotation:-53.3,x:647.1,y:263.4},0).wait(1).to({rotation:-55.7,x:644.8,y:264.2},0).wait(1).to({rotation:-57.6,x:642.9,y:264.8},0).wait(1).to({rotation:-58.9,x:641.6,y:265.2},0).wait(1).to({rotation:-59.7,x:640.8,y:265.5},0).wait(1).to({regX:50,regY:162.5,rotation:-60,x:628.1,y:274.1},0).wait(1).to({regX:63.5,regY:169,rotation:-59.6,x:640.9,y:265.5},0).wait(1).to({rotation:-58.5,x:642,y:265.1},0).wait(1).to({rotation:-56.7,x:643.8,y:264.5},0).wait(1).to({rotation:-54,x:646.5,y:263.7},0).wait(1).to({rotation:-50.7,x:649.8,y:262.6},0).wait(1).to({rotation:-46.6,x:653.7,y:261.4},0).wait(1).to({rotation:-41.8,x:658.3,y:259.9},0).wait(1).to({rotation:-36.2,x:663.5,y:258.3},0).wait(1).to({rotation:-29.9,x:669.1,y:256.4},0).wait(1).to({rotation:-22.8,x:675.3,y:254.4},0).wait(1).to({regX:50,regY:162.5,rotation:-15,x:667.1,y:249.4},0).wait(22));

	// Layer 11
	this.instance_1 = new lib.exp();
	this.instance_1.setTransform(508.2,180.2,0.404,0.366,0,0,0,33.5,41.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(1).to({regX:32.2,regY:42,scaleX:0.79,scaleY:0.65,x:507.1,y:180.3},0).wait(1).to({scaleX:1.1,scaleY:0.88,x:506.7,y:180.4},0).wait(1).to({scaleX:1.34,scaleY:1.07,x:506.4},0).wait(1).to({scaleX:1.52,scaleY:1.2,x:506.2},0).wait(1).to({scaleX:1.62,scaleY:1.27,x:506},0).wait(1).to({regX:33.5,regY:41.9,scaleX:1.65,scaleY:1.3,x:508.1,y:180.3},0).to({alpha:0.012},3).to({_off:true},1).wait(4));

	// Layer 10
	this.instance_2 = new lib.crack();
	this.instance_2.setTransform(504.1,185.8,1,1,0,0,0,20.3,24.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(5).to({regX:20.5,regY:24,scaleX:1.25,scaleY:1.25,x:504.3,y:186.5,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:504.4,y:187.2,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:187.8,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:504.5,y:188.2,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:188.4,alpha:0.039},0).wait(1).to({regX:20.3,regY:24.2,scaleX:1.83,scaleY:1.83,x:504.1,y:188.9,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 8 copy 2
	this.instance_3 = new lib.spark1();
	this.instance_3.setTransform(502.4,183.4,0.271,0.271,114.7,0,0,20.7,20.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regY:20.8,scaleX:1,scaleY:1,rotation:-65.3,x:527.2,y:229.8},9).to({regY:20.7,rotation:69.7,x:527.1,y:229.7,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8 copy
	this.instance_4 = new lib.spark1();
	this.instance_4.setTransform(502.8,183,0.271,0.271,-140.3,0,0,20.5,20.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({regX:20.8,regY:20.8,scaleX:1,scaleY:1,rotation:39.7,x:426.8,y:217.7},9).to({regX:20.7,regY:20.7,rotation:174.7,x:426.9,y:217.6,alpha:0.012},5).to({_off:true},1).wait(23));

	// Layer 8
	this.instance_5 = new lib.spark1();
	this.instance_5.setTransform(509.8,181.6,0.271,0.271,0,0,0,20.7,20.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:180,x:546.1,y:106.5},9).to({rotation:315,alpha:0.012},5).to({_off:true},1).wait(23));

	// Objects copy
	this.instance_6 = new lib.snw1();
	this.instance_6.setTransform(503.8,184.9,0.563,0.563,135,0,0,10.9,11.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regY:11.5,scaleX:2.15,scaleY:2.15,x:542.5,y:217.6},5).to({regY:11.4,scaleX:3.02,scaleY:3.02,x:563.9,y:238.9,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects copy 2
	this.instance_7 = new lib.snw1();
	this.instance_7.setTransform(497.5,182.8,0.428,0.428,-60,0,0,11.1,11.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({regX:10.9,regY:11.5,scaleX:1.63,scaleY:1.63,x:462.5,y:166.6},5).to({scaleX:2.3,scaleY:2.3,x:442.7,y:155.1,alpha:0.012},4).to({_off:true},1).wait(28));

	// Objects
	this.instance_8 = new lib.snw1();
	this.instance_8.setTransform(505.8,181,0.563,0.563,0,0,0,10.9,11.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({scaleX:2.15,scaleY:2.15,x:501.5,y:130.5},5).to({scaleX:3.02,scaleY:3.02,x:501.4,y:100.5,alpha:0.012},4).to({_off:true},1).wait(28));

	// Layer 7
	this.instance_9 = new lib.froze1();
	this.instance_9.setTransform(505.6,186,0.267,0.267,0,0,0,25.9,26.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({regX:24.1,regY:22.1,scaleX:0.42,scaleY:0.42,x:504.9,y:184.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:504.6,y:183.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:504.4,y:183.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:504.2,y:182.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:504.1,y:182.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:504,y:182.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:503.9,y:182},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:181.9},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1,scaleY:1,x:505.6,y:186.1},0).wait(16).to({regX:24.1,regY:22.1,scaleX:1.25,scaleY:1.25,x:503.9,y:181.8,alpha:0.698},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.451},0).wait(1).to({scaleX:1.62,scaleY:1.62,alpha:0.259},0).wait(1).to({scaleX:1.74,scaleY:1.74,alpha:0.122},0).wait(1).to({scaleX:1.81,scaleY:1.81,alpha:0.039},0).wait(1).to({regX:25.8,regY:26.3,scaleX:1.83,scaleY:1.83,x:507,y:189.5,alpha:0.012},0).to({_off:true},1).wait(7));

	// Layer 6
	this.instance_10 = new lib.lipsbad();
	this.instance_10.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46));

	// Layer 5
	this.instance_11 = new lib.eyebr();
	this.instance_11.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(46));

	// Layer 3
	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.pimple();
	this.instance_13.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.pimple();
	this.instance_14.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_14.alpha = 0.699;

	this.instance_15 = new lib.pimple();
	this.instance_15.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_15.alpha = 0.699;

	this.instance_16 = new lib.pimple();
	this.instance_16.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_17 = new lib.pimple();
	this.instance_17.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},32).wait(14));

	// eyes
	this.instance_18 = new lib.eyes1();
	this.instance_18.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(46));

	// shad
	this.instance_19 = new lib.shadows();
	this.instance_19.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(46));

	// Layer 4
	this.instance_20 = new lib.eyebag1();
	this.instance_20.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_21 = new lib.eyebag1();
	this.instance_21.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20}]}).wait(46));

	// lips
	this.instance_22 = new lib.lips();
	this.instance_22.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(46));

	// bdoy
	this.instance_23 = new lib.headmake();
	this.instance_23.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(46));

	// Layer 2
	this.instance_24 = new lib.icoice();
	this.instance_24.setTransform(765.9,428.1,0.836,0.836,0,0,0,91.8,90.4);

	this.instance_25 = new lib.lpst();
	this.instance_25.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_26 = new lib.creme();
	this.instance_26.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_27 = new lib.pincet();
	this.instance_27.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(46));

	// Layer 3
	this.instance_28 = new lib.table();
	this.instance_28.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,723.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Слой 3
	this.instance = new lib.wand();
	this.instance.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(14));

	// Layer 2
	this.instance_1 = new lib.wand();
	this.instance_1.setTransform(575,681.6,1,1,-90,0,0,50,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15,x:667.1,y:249.4},14).wait(1));

	// Layer 6
	this.instance_2 = new lib.lipsbad();
	this.instance_2.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// Layer 5
	this.instance_3 = new lib.eyebr();
	this.instance_3.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// Layer 3
	this.instance_4 = new lib.pimple();
	this.instance_4.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.pimple();
	this.instance_5.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_5.alpha = 0.699;

	this.instance_6 = new lib.pimple();
	this.instance_6.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.pimple();
	this.instance_7.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.pimple();
	this.instance_8.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_9 = new lib.pimple();
	this.instance_9.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(15));

	// eyes
	this.instance_10 = new lib.eyes1();
	this.instance_10.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// shad
	this.instance_11 = new lib.shadows();
	this.instance_11.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// Layer 4
	this.instance_12 = new lib.eyebag1();
	this.instance_12.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_13 = new lib.eyebag1();
	this.instance_13.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(15));

	// lips
	this.instance_14 = new lib.lips();
	this.instance_14.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// bdoy
	this.instance_15 = new lib.headmake();
	this.instance_15.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

	// Layer 2
	this.instance_16 = new lib.icoice();
	this.instance_16.setTransform(765.9,428.1,0.836,0.836,0,0,0,91.8,90.4);

	this.instance_17 = new lib.lpst();
	this.instance_17.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_18 = new lib.creme();
	this.instance_18.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_19 = new lib.pincet();
	this.instance_19.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(15));

	// Layer 3
	this.instance_20 = new lib.table();
	this.instance_20.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,875.2,851.8);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-120.2,875.2,836.9), new cjs.Rectangle(-32.5,-120.2,875.2,821.3), new cjs.Rectangle(-32.5,-120.2,875.2,805.6), new cjs.Rectangle(-32.5,-120.2,875.2,788.6), new cjs.Rectangle(-32.5,-120.2,875.2,771.1), new cjs.Rectangle(-32.5,-120.2,875.2,752), new cjs.Rectangle(-32.5,-120.2,875.2,732.1), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, rect, rect];


(lib.makeup10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

	// Layer 3
	this.instance = new lib.towel();
	this.instance.setTransform(715.6,414.4,1,1,0,0,0,193.5,242);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:242.1,rotation:-15,x:557.6,y:319.3},8).to({regX:193.6,regY:242,scaleX:0.94,scaleY:0.94,rotation:-13,x:509.6,y:330.2},3).to({regX:193.5,scaleX:1,scaleY:1,rotation:-10.5,x:445.6,y:344.8},4).to({regY:242.1,scaleX:0.96,scaleY:0.96,rotation:-8.5,x:391.2,y:366.8},3).to({regX:193.6,regY:242,scaleX:1,scaleY:1,rotation:-6,x:333.6,y:370.5},4).to({regY:241.8,scaleX:0.79,scaleY:0.79,rotation:-3.5,x:362,y:403.8},4).to({regY:241.9,scaleX:1,scaleY:1,rotation:-0.5,x:397.6,y:445.9},5).to({scaleX:0.87,scaleY:0.87,rotation:1.8,x:426.2,y:479.5},4).to({regY:242,scaleX:1,scaleY:1,rotation:4.8,x:462,y:521.5},5).to({regX:193.5,scaleX:0.93,scaleY:0.93,rotation:6.6,x:407.6,y:536.7},3).to({regX:193.6,scaleX:1,scaleY:1,rotation:9.3,x:371.7,y:520.9},4).to({regX:193.5,scaleX:0.87,scaleY:0.87,rotation:11.1,x:333,y:520.7},3).to({scaleX:1,scaleY:1,rotation:13.8,x:281.4,y:520.5},4).to({regX:193.6,scaleX:0.89,scaleY:0.89,rotation:16,x:290.7,y:556.3},4).to({regX:193.5,scaleX:1,scaleY:1,rotation:17.8,x:297.5,y:583.1},3).to({regY:242.1,scaleX:0.94,scaleY:0.94,rotation:20.1,x:306.7,y:618.8},4).to({regY:242,scaleX:1,scaleY:1,rotation:22,x:313.5,y:645.6},3).to({rotation:0,x:653.5,y:858.5},7).to({_off:true},1).wait(1));

	// drops4
	this.instance_1 = new lib.drops4();
	this.instance_1.setTransform(405.7,489.3,1,1,0,0,0,81,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({alpha:0.012},14).to({_off:true},1).wait(8));

	// drops3
	this.instance_2 = new lib.drops3();
	this.instance_2.setTransform(476.9,392,1,1.114,0,0,0,65,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({alpha:0.012},12).to({_off:true},1).wait(33));

	// drops2
	this.instance_3 = new lib.drops2();
	this.instance_3.setTransform(325.9,415.8,1,1,0,0,0,41,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({alpha:0.012},13).to({_off:true},1).wait(19));

	// drops1
	this.instance_4 = new lib.drops1();
	this.instance_4.setTransform(400,198.4,1,1,0,0,0,96.2,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({alpha:0.012},15).to({_off:true},1).wait(53));

	// Layer 6
	this.instance_5 = new lib.lipsbad();
	this.instance_5.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(77));

	// Layer 5
	this.instance_6 = new lib.eyebr();
	this.instance_6.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(77));

	// Layer 3
	this.instance_7 = new lib.pimple();
	this.instance_7.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.pimple();
	this.instance_8.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.pimple();
	this.instance_9.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_9.alpha = 0.699;

	this.instance_10 = new lib.pimple();
	this.instance_10.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_10.alpha = 0.699;

	this.instance_11 = new lib.pimple();
	this.instance_11.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(77));

	// eyes
	this.instance_13 = new lib.eyes1();
	this.instance_13.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.instance_14 = new lib.eyes3();
	this.instance_14.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_13}]},70).wait(4));

	// shad
	this.instance_15 = new lib.shadows();
	this.instance_15.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(77));

	// Layer 4
	this.instance_16 = new lib.eyebag1();
	this.instance_16.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_17 = new lib.eyebag1();
	this.instance_17.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(77));

	// lips
	this.instance_18 = new lib.lips();
	this.instance_18.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(77));

	// bdoy
	this.instance_19 = new lib.headmake();
	this.instance_19.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(77));

	// Layer 2
	this.instance_20 = new lib.icoice();
	this.instance_20.setTransform(765.9,428.1,0.836,0.836,0,0,0,91.8,90.4);

	this.instance_21 = new lib.lpst();
	this.instance_21.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_22 = new lib.creme();
	this.instance_22.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_23 = new lib.pincet();
	this.instance_23.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.instance_24 = new lib.wand();
	this.instance_24.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(77));

	// Layer 3
	this.instance_25 = new lib.table();
	this.instance_25.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,941.6,776.7);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-120.2,929.2,770.6), new cjs.Rectangle(-32.5,-120.2,916.6,764.3), new cjs.Rectangle(-32.5,-120.2,904.7,758.4), new cjs.Rectangle(-32.5,-120.2,891.7,751.6), new cjs.Rectangle(-32.5,-120.2,879.2,745.1), new cjs.Rectangle(-32.5,-120.2,875.2,737.8), new cjs.Rectangle(-32.5,-120.2,875.2,730.6), rect=new cjs.Rectangle(-32.5,-120.2,875.2,723.4), rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,875.2,725.4), new cjs.Rectangle(-32.5,-120.2,875.2,731.5), new cjs.Rectangle(-32.5,-120.2,875.2,738.1), new cjs.Rectangle(-32.5,-120.2,875.2,739.6), new cjs.Rectangle(-32.5,-120.2,875.2,741.4), new cjs.Rectangle(-32.5,-120.2,875.2,743.7), new cjs.Rectangle(-32.5,-120.2,875.2,745.3), new cjs.Rectangle(-32.5,-120.2,875.2,747.7), new cjs.Rectangle(-32.5,-120.2,875.2,749.3), new cjs.Rectangle(-32.5,-120.2,875.2,751.5), new cjs.Rectangle(-32.5,-120.2,875.2,743.9), new cjs.Rectangle(-32.5,-120.2,875.2,737), new cjs.Rectangle(-32.5,-120.2,875.2,729.9), new cjs.Rectangle(-32.5,-120.2,875.2,723.4), new cjs.Rectangle(-32.5,-120.2,875.2,740.7), new cjs.Rectangle(-32.5,-120.2,875.2,758.4), new cjs.Rectangle(-32.5,-120.2,875.2,775.5), new cjs.Rectangle(-32.5,-120.2,875.2,792.7), new cjs.Rectangle(-32.5,-120.2,875.2,810), new cjs.Rectangle(-32.5,-120.2,875.2,808.6), new cjs.Rectangle(-32.5,-120.2,875.2,810.6), new cjs.Rectangle(-32.5,-120.2,875.2,812.5), new cjs.Rectangle(-32.5,-120.2,875.2,814.8), new cjs.Rectangle(-32.5,-120.2,875.2,831.2), new cjs.Rectangle(-32.5,-120.2,875.2,847.7), new cjs.Rectangle(-32.5,-120.2,875.2,864.8), new cjs.Rectangle(-32.5,-120.2,875.2,881.5), new cjs.Rectangle(-32.5,-120.2,875.2,898.9), new cjs.Rectangle(-32.5,-120.2,875.2,899.2), new cjs.Rectangle(-32.5,-120.2,875.2,899.6), new cjs.Rectangle(-32.5,-120.2,875.2,900.6), new cjs.Rectangle(-32.5,-120.2,875.2,902.5), new cjs.Rectangle(-32.5,-120.2,875.2,905.3), new cjs.Rectangle(-32.5,-120.2,875.2,908), new cjs.Rectangle(-32.5,-120.2,875.2,910.8), new cjs.Rectangle(-32.5,-120.2,875.2,900.4), new cjs.Rectangle(-32.5,-120.2,875.2,890.1), new cjs.Rectangle(-32.5,-120.2,875.2,880.3), new cjs.Rectangle(-32.5,-120.2,875.2,890), new cjs.Rectangle(-32.5,-120.2,875.2,900.4), new cjs.Rectangle(-32.5,-120.2,875.2,910.9), new cjs.Rectangle(-32.5,-120.2,875.2,921.7), new cjs.Rectangle(-32.5,-120.2,875.2,924.1), new cjs.Rectangle(-32.5,-120.2,875.2,926.7), new cjs.Rectangle(-32.5,-120.2,875.2,929.3), new cjs.Rectangle(-32.5,-120.2,875.2,932.3), new cjs.Rectangle(-32.5,-120.2,875.2,951.9), new cjs.Rectangle(-32.5,-120.2,875.2,971.9), new cjs.Rectangle(-32.5,-120.2,875.2,992.5), new cjs.Rectangle(-32.5,-120.2,875.2,997.6), new cjs.Rectangle(-32.5,-120.2,875.2,1002.9), new cjs.Rectangle(-32.5,-120.2,875.2,1008.2), new cjs.Rectangle(-32.5,-120.2,875.2,1013.9), new cjs.Rectangle(-32.5,-120.2,875.2,1029.7), new cjs.Rectangle(-32.5,-120.2,875.2,1046), new cjs.Rectangle(-32.5,-120.2,875.2,1062.7), new cjs.Rectangle(-32.5,-120.2,875.2,1087.4), new cjs.Rectangle(-32.5,-120.2,875.2,1111.4), new cjs.Rectangle(-32.5,-120.2,875.2,1135.1), new cjs.Rectangle(-32.5,-120.2,875.2,1157.5), new cjs.Rectangle(-32.5,-120.2,875.2,1179.5), new cjs.Rectangle(-32.5,-120.2,875.2,1200.2), new cjs.Rectangle(-32.5,-120.2,879.5,1220.8), new cjs.Rectangle(-32.5,-120.2,875.2,723.4)];


(lib.makeup9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Слой 3
	this.instance = new lib.towel();
	this.instance.setTransform(804.3,450.5,0.731,0.731,0,0,0,193.5,242);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(11));

	// Layer 3
	this.instance_1 = new lib.towel();
	this.instance_1.setTransform(629.5,904.9,1,1,0,0,0,193.5,242);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:715.6,y:398.4},9).to({y:414.4},2).wait(1));

	// drops4
	this.instance_2 = new lib.drops4();
	this.instance_2.setTransform(405.7,489.3,1,1,0,0,0,81,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12));

	// drops3
	this.instance_3 = new lib.drops3();
	this.instance_3.setTransform(476.9,392,1,1.114,0,0,0,65,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12));

	// drops2
	this.instance_4 = new lib.drops2();
	this.instance_4.setTransform(325.9,415.8,1,1,0,0,0,41,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12));

	// drops1
	this.instance_5 = new lib.drops1();
	this.instance_5.setTransform(400,198.4,1,1,0,0,0,96.2,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12));

	// Layer 6
	this.instance_6 = new lib.lipsbad();
	this.instance_6.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12));

	// Layer 5
	this.instance_7 = new lib.eyebr();
	this.instance_7.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12));

	// Layer 3
	this.instance_8 = new lib.pimple();
	this.instance_8.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.pimple();
	this.instance_9.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_9.alpha = 0.699;

	this.instance_10 = new lib.pimple();
	this.instance_10.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_10.alpha = 0.699;

	this.instance_11 = new lib.pimple();
	this.instance_11.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_11.alpha = 0.699;

	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_13 = new lib.pimple();
	this.instance_13.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(12));

	// eyes
	this.instance_14 = new lib.eyes1();
	this.instance_14.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12));

	// shad
	this.instance_15 = new lib.shadows();
	this.instance_15.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12));

	// Layer 4
	this.instance_16 = new lib.eyebag1();
	this.instance_16.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_17 = new lib.eyebag1();
	this.instance_17.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(12));

	// lips
	this.instance_18 = new lib.lips();
	this.instance_18.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(12));

	// bdoy
	this.instance_19 = new lib.headmake();
	this.instance_19.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(12));

	// Layer 2
	this.instance_20 = new lib.lpst();
	this.instance_20.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_21 = new lib.creme();
	this.instance_21.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_22 = new lib.pincet();
	this.instance_22.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.instance_23 = new lib.wand();
	this.instance_23.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(12));

	// Layer 3
	this.instance_24 = new lib.table();
	this.instance_24.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,978.2,1267.1);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-120.2,875.2,1210.9), new cjs.Rectangle(-32.5,-120.2,875.2,1154.6), new cjs.Rectangle(-32.5,-120.2,884.2,1098.3), new cjs.Rectangle(-32.5,-120.2,893.8,1042), new cjs.Rectangle(-32.5,-120.2,903.3,985.8), new cjs.Rectangle(-32.5,-120.2,912.9,929.5), new cjs.Rectangle(-32.5,-120.2,922.5,873.2), new cjs.Rectangle(-32.5,-120.2,932,816.9), new cjs.Rectangle(-32.5,-120.2,941.6,760.7), new cjs.Rectangle(-32.5,-120.2,941.6,768.7), new cjs.Rectangle(-32.5,-120.2,941.6,776.7)];


(lib.makeup8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_67 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(67).call(this.frame_67).wait(1));

	// Layer 2
	this.instance = new lib.spray();
	this.instance.setTransform(304.9,185.1,0.244,0.289,0,10.9,-169.1,160,159.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1,x:424.7,y:218.1},2).to({regX:160.1,skewY:-168.4,x:424.6,y:223,alpha:0.012},2).to({_off:true},1).wait(7).to({_off:false,regX:160,regY:159.2,scaleX:0.24,scaleY:0.29,skewX:-6.3,skewY:-186.3,x:290.6,y:271.7,alpha:1},0).to({regY:159.1,scaleX:1,scaleY:1,skewX:-6.3,x:412.7,y:270.1},2).to({regX:160.1,regY:159,skewY:-185.6,x:412.6,y:261,alpha:0.012},2).to({_off:true},1).wait(8).to({_off:false,regX:159.5,regY:158.9,scaleX:0.24,scaleY:0.29,skewX:-20.5,skewY:-200.5,x:277,y:371.4,alpha:1},0).to({regX:160.1,regY:159.2,scaleX:1,scaleY:1,x:392.7,y:341.2},2).to({regX:160.2,regY:159.1,skewY:-199.8,x:392.6,y:331.2,alpha:0.012},2).to({_off:true},1).wait(8).to({_off:false,regY:159.2,scaleX:0.24,scaleY:0.29,skewX:-19.1,skewY:-199.1,x:302,y:462.7,alpha:1},0).to({regX:160,regY:159.1,scaleX:1,scaleY:1,x:418.7,y:425.3},2).to({regX:160.1,regY:159,skewY:-198.4,x:418.6,alpha:0.012},2).to({_off:true},1).wait(14));

	// drops4
	this.instance_1 = new lib.drops4();
	this.instance_1.setTransform(406.9,477.4,1,1,0,0,0,81,41.6);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({x:405.7,y:489.3,alpha:1},9).wait(11));

	// drops3
	this.instance_2 = new lib.drops3();
	this.instance_2.setTransform(476.9,387.6,1,1,0,0,0,65,39.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({scaleY:1.11,y:392,alpha:1},9).wait(24));

	// drops2
	this.instance_3 = new lib.drops2();
	this.instance_3.setTransform(325.9,394.2,1,1,0,0,0,41,53.9);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({y:415.8,alpha:1},8).wait(38));

	// drops1
	this.instance_4 = new lib.drops1();
	this.instance_4.setTransform(400,190.4,1,1,0,0,0,96.2,47);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:198.4,alpha:1},15).wait(42));

	// Layer 4
	this.instance_5 = new lib.thermal_waterani();
	this.instance_5.setTransform(143.3,319.3,1,1,0,0,0,41,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15,x:211.4,y:299.3},11).to({rotation:-15,x:263.5,y:529.7},29).to({x:284.5,y:611.8},8).wait(7).to({y:851.8},11).to({_off:true},1).wait(1));

	// Layer 11
	this.instance_6 = new lib.fmask4();
	this.instance_6.setTransform(393.2,508.3,1,1.052,0,0,0,143.9,61.5);
	this.instance_6.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({y:521.3,alpha:0.012},43).to({_off:true},1).wait(13));

	// Layer 8
	this.instance_7 = new lib.fmask3();
	this.instance_7.setTransform(393.2,397.5,1,1.097,0,0,0,143.9,61.5);
	this.instance_7.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({y:410.6,alpha:0.012},43).to({_off:true},1).wait(13));

	// Layer 7
	this.instance_8 = new lib.fmask2();
	this.instance_8.setTransform(393.2,338,1,1.023,0,0,0,143.9,61.5);
	this.instance_8.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({y:351.1,alpha:0.012},43).to({_off:true},1).wait(13));

	// Layer 9
	this.instance_9 = new lib.fmask1();
	this.instance_9.setTransform(393.2,199,1,1.089,0,0,0,143.9,61.5);
	this.instance_9.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({y:212.1,alpha:0.012},43).to({_off:true},1).wait(13));

	// Layer 6
	this.instance_10 = new lib.lipsbad();
	this.instance_10.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(68));

	// Layer 5
	this.instance_11 = new lib.eyebr();
	this.instance_11.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(68));

	// Layer 3
	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.pimple();
	this.instance_13.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.pimple();
	this.instance_14.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_14.alpha = 0.699;

	this.instance_15 = new lib.pimple();
	this.instance_15.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_15.alpha = 0.699;

	this.instance_16 = new lib.pimple();
	this.instance_16.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_17 = new lib.pimple();
	this.instance_17.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(68));

	// eyes
	this.instance_18 = new lib.eyes1();
	this.instance_18.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(68));

	// shad
	this.instance_19 = new lib.shadows();
	this.instance_19.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(68));

	// Layer 4
	this.instance_20 = new lib.eyebag1();
	this.instance_20.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_21 = new lib.eyebag1();
	this.instance_21.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20}]}).wait(68));

	// lips
	this.instance_22 = new lib.lips();
	this.instance_22.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(68));

	// bdoy
	this.instance_23 = new lib.headmake();
	this.instance_23.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(68));

	// Layer 2
	this.instance_24 = new lib.lpst();
	this.instance_24.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_25 = new lib.towel();
	this.instance_25.setTransform(804.3,450.5,0.731,0.731,0,0,0,193.5,242);

	this.instance_26 = new lib.creme();
	this.instance_26.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_27 = new lib.pincet();
	this.instance_27.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.instance_28 = new lib.wand();
	this.instance_28.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(68));

	// Layer 3
	this.instance_29 = new lib.table();
	this.instance_29.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,978.2,747.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,978.2,748), new cjs.Rectangle(-32.5,-120.2,978.2,756.3), new cjs.Rectangle(-32.5,-120.2,978.2,764.5), new cjs.Rectangle(-32.5,-120.2,978.2,772.7), new cjs.Rectangle(-32.5,-120.2,978.2,780.8), new cjs.Rectangle(-32.5,-120.2,978.2,788.8), new cjs.Rectangle(-32.5,-120.2,978.2,796.9), new cjs.Rectangle(-32.5,-120.2,978.2,807.1), new cjs.Rectangle(-32.5,-120.2,978.2,817.4), new cjs.Rectangle(-32.5,-120.2,978.2,827.6), new cjs.Rectangle(-32.5,-120.2,978.2,837.9), new cjs.Rectangle(-32.5,-120.2,978.2,848.2), new cjs.Rectangle(-32.5,-120.2,978.2,858.4), new cjs.Rectangle(-32.5,-120.2,978.2,868.7), new cjs.Rectangle(-32.5,-120.2,978.2,879.1), rect=new cjs.Rectangle(-32.5,-120.2,978.2,878.9), rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,978.2,879.1), new cjs.Rectangle(-32.5,-120.2,978.2,900.7), new cjs.Rectangle(-32.5,-120.2,978.2,922.6), new cjs.Rectangle(-32.5,-120.2,978.2,944.4), new cjs.Rectangle(-32.5,-120.2,978.2,966.2), new cjs.Rectangle(-32.5,-120.2,978.2,988), new cjs.Rectangle(-32.5,-120.2,978.2,1009.8), new cjs.Rectangle(-32.5,-120.2,978.2,1031.7), new cjs.Rectangle(-32.5,-120.2,978.2,1053.5), new cjs.Rectangle(-32.5,-120.2,978.2,1075.3), new cjs.Rectangle(-32.5,-120.2,978.2,1097.1), new cjs.Rectangle(-32.5,-120.2,978.2,1119.1), new cjs.Rectangle(-32.5,-120.2,978.2,747.7)];


(lib.makeup7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 4
	this.instance = new lib.thermal_waterani();
	this.instance.setTransform(143.3,765.3,1,1,0,0,0,41,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:146.3,y:677.9},0).wait(1).to({y:602.2},0).wait(1).to({y:534.5},0).wait(1).to({y:474.8},0).wait(1).to({y:423},0).wait(1).to({y:379.1},0).wait(1).to({y:343.3},0).wait(1).to({y:315.4},0).wait(1).to({y:295.5},0).wait(1).to({y:283.5},0).wait(1).to({regY:150,y:283.3},0).to({y:319.3},3).wait(1));

	// Layer 11
	this.instance_1 = new lib.fmask4();
	this.instance_1.setTransform(393.2,508.3,1,1.052,0,0,0,143.9,61.5);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Layer 8
	this.instance_2 = new lib.fmask3();
	this.instance_2.setTransform(393.2,397.5,1,1.097,0,0,0,143.9,61.5);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// Layer 7
	this.instance_3 = new lib.fmask2();
	this.instance_3.setTransform(393.2,338,1,1.023,0,0,0,143.9,61.5);
	this.instance_3.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// Layer 9
	this.instance_4 = new lib.fmask1();
	this.instance_4.setTransform(393.2,199,1,1.089,0,0,0,143.9,61.5);
	this.instance_4.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// Layer 6
	this.instance_5 = new lib.lipsbad();
	this.instance_5.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// Layer 5
	this.instance_6 = new lib.eyebr();
	this.instance_6.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// Layer 3
	this.instance_7 = new lib.pimple();
	this.instance_7.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.pimple();
	this.instance_8.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.pimple();
	this.instance_9.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_9.alpha = 0.699;

	this.instance_10 = new lib.pimple();
	this.instance_10.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_10.alpha = 0.699;

	this.instance_11 = new lib.pimple();
	this.instance_11.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(15));

	// eyes
	this.instance_13 = new lib.eyes1();
	this.instance_13.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// shad
	this.instance_14 = new lib.shadows();
	this.instance_14.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// Layer 4
	this.instance_15 = new lib.eyebag1();
	this.instance_15.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_16 = new lib.eyebag1();
	this.instance_16.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).wait(15));

	// lips
	this.instance_17 = new lib.lips();
	this.instance_17.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15));

	// bdoy
	this.instance_18 = new lib.headmake();
	this.instance_18.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(15));

	// Layer 2
	this.instance_19 = new lib.lpst();
	this.instance_19.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_20 = new lib.towel();
	this.instance_20.setTransform(804.3,450.5,0.731,0.731,0,0,0,193.5,242);

	this.instance_21 = new lib.creme();
	this.instance_21.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_22 = new lib.pincet();
	this.instance_22.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.instance_23 = new lib.wand();
	this.instance_23.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(15));

	// Слой 3
	this.instance_24 = new lib.thermal_waterani();
	this.instance_24.setTransform(117.5,340.5,0.727,0.727,0,0,0,41,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true},1).wait(14));

	// Layer 3
	this.instance_25 = new lib.table();
	this.instance_25.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,978.2,1026.8);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-120.2,978.2,943.2), new cjs.Rectangle(-32.5,-120.2,978.2,867.5), new cjs.Rectangle(-32.5,-120.2,978.2,799.7), rect=new cjs.Rectangle(-32.5,-120.2,978.2,747.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Layer 11 copy
	this.instance = new lib.arr2();
	this.instance.setTransform(635.5,736.4,1,1,90,0,0,6.3,59.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).wait(1).to({regX:3,regY:30.8,x:668.5,y:655.4},0).wait(1).to({x:672.9,y:584.5},0).wait(1).to({x:676.8,y:520.4},0).wait(1).to({x:680.4,y:463},0).wait(1).to({x:683.5,y:412.4},0).wait(1).to({x:686.2,y:368.5},0).wait(1).to({x:688.5,y:331.3},0).wait(1).to({x:690.3,y:301},0).wait(1).to({x:691.8,y:277.3},0).wait(1).to({x:692.8,y:260.5},0).wait(1).to({x:693.4,y:250.3},0).wait(1).to({regX:6.3,regY:59.1,x:665.4},0).to({regX:3,y:257},2).wait(1).to({regY:30.8,rotation:140.8,x:683.2,y:278.9},0).wait(1).to({rotation:190.4,x:660.2,y:284.7},0).wait(1).to({rotation:238.8,x:641.2,y:271.5},0).wait(1).to({rotation:285.9,x:638.2,y:249.1},0).wait(1).to({rotation:331.8,x:652.1,y:232},0).wait(1).to({rotation:376.5,x:673.5,y:229.9},0).wait(1).to({rotation:420,x:689.9,y:242.8},0).wait(1).to({rotation:462.2,x:693,y:262.9},0).wait(1).to({rotation:503.3,x:682.3,y:279.6},0).wait(1).to({rotation:543.1,x:663.8,y:285.1},0).wait(1).to({rotation:581.6,x:646.6,y:278},0).wait(1).to({rotation:619,x:637.7,y:262.2},0).wait(1).to({rotation:655.1,x:639.8,y:244.9},0).wait(1).to({rotation:690,x:651.3,y:232.4},0).wait(1).to({rotation:723.7,x:667.3,y:228.7},0).wait(1).to({rotation:756.1,x:682.1,y:234.1},0).wait(1).to({rotation:787.3,x:691.5,y:246},0).wait(1).to({rotation:817.3,x:693.4,y:260.6},0).wait(1).to({rotation:846.1,x:688.2,y:273.6},0).wait(1).to({rotation:873.7,x:677.9,y:282.3},0).wait(1).to({rotation:900,x:665.4,y:285.2},0).wait(1).to({rotation:925.1,x:653.4,y:282.5},0).wait(1).to({rotation:949,x:644.1,y:275.4},0).wait(1).to({rotation:971.6,x:638.6,y:265.8},0).wait(1).to({rotation:993.1,x:637.2,y:255.3},0).wait(1).to({rotation:1013.3,x:639.5,y:245.7},0).wait(1).to({rotation:1032.2,x:644.5,y:237.9},0).wait(1).to({rotation:1050,x:651.3,y:232.4},0).wait(1).to({rotation:1066.5,x:658.8,y:229.4},0).wait(1).to({rotation:1081.8,x:666.3,y:228.7},0).wait(1).to({rotation:1095.9,x:673.2,y:229.7},0).wait(1).to({rotation:1108.8,x:679,y:232.2},0).wait(1).to({rotation:1120.4,x:683.8,y:235.4},0).wait(1).to({rotation:1130.8,x:687.4,y:239.1},0).wait(1).to({rotation:1140,x:689.9,y:242.8},0).wait(1).to({rotation:1148,x:691.6,y:246.4},0).wait(1).to({rotation:1154.7,x:692.7,y:249.5},0).wait(1).to({rotation:1160.2,x:693.2,y:252.1},0).wait(1).to({rotation:1164.5,x:693.5,y:254.2},0).wait(1).to({rotation:1167.6,x:693.7,y:255.7},0).wait(1).to({rotation:1169.4,y:256.7},0).wait(1).to({regY:59.1,rotation:1170,x:665.4,y:257},0).wait(1).to({regY:30.8,x:693.7,y:264.3},0).wait(1).to({y:286.5},0).wait(1).to({y:323.5},0).wait(1).to({y:375.3},0).wait(1).to({y:441.9},0).wait(1).to({y:523.3},0).wait(1).to({y:619.4},0).wait(1).to({regX:6.3,regY:59.1,x:665.4,y:730.4},0).to({_off:true},1).wait(1));

	// Layer 11
	this.instance_1 = new lib.arr2();
	this.instance_1.setTransform(635.5,736.4,1,1,90,0,0,6.3,59.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).wait(1).to({regX:3,regY:30.8,x:668.5,y:655.4},0).wait(1).to({x:672.9,y:584.5},0).wait(1).to({x:676.8,y:520.4},0).wait(1).to({x:680.4,y:463},0).wait(1).to({x:683.5,y:412.4},0).wait(1).to({x:686.2,y:368.5},0).wait(1).to({x:688.5,y:331.3},0).wait(1).to({x:690.3,y:301},0).wait(1).to({x:691.8,y:277.3},0).wait(1).to({x:692.8,y:260.5},0).wait(1).to({x:693.4,y:250.3},0).wait(1).to({regX:6.3,regY:59.1,x:665.4},0).to({regX:3,y:257,alpha:0.441},2).wait(1).to({regY:30.8,rotation:138.3,x:684.1,y:278},0).wait(1).to({rotation:185.5,x:662.6,y:285},0).wait(1).to({rotation:231.6,x:643.2,y:274.4},0).wait(1).to({rotation:276.6,x:637.4,y:253.6},0).wait(1).to({rotation:320.5,x:647.5,y:235.1},0).wait(1).to({rotation:363.3,x:667.1,y:228.7},0).wait(1).to({rotation:405,x:685.4,y:237},0).wait(1).to({rotation:445.6,x:693.6,y:254.8},0).wait(1).to({rotation:485.1,x:688.5,y:273.2},0).wait(1).to({rotation:523.5,x:673.4,y:284},0).wait(1).to({rotation:560.8,x:655.3,y:283.3},0).wait(1).to({rotation:596.9,x:641.7,y:272.3},0).wait(1).to({rotation:632,x:637.2,y:255.9},0).wait(1).to({rotation:666,x:642.5,y:240.2},0).wait(1).to({rotation:698.9,x:655.3,y:230.5},0).wait(1).to({rotation:730.7,x:670.7,y:229.1},0).wait(1).to({rotation:761.3,x:684.1,y:235.8},0).wait(1).to({rotation:790.9,x:692.1,y:247.7},0).wait(1).to({rotation:819.4,x:693.2,y:261.6},0).wait(1).to({rotation:846.7,x:688,y:273.9},0).wait(1).to({rotation:873,x:678.2,y:282.1},0).wait(1).to({rotation:898.2,x:666.2,y:285.1},0).wait(1).to({rotation:922.2,x:654.6,y:283},0).wait(1).to({rotation:945.2,x:645.3,y:276.8},0).wait(1).to({rotation:967,x:639.4,y:267.9},0).wait(1).to({rotation:987.8,x:637.2,y:257.9},0).wait(1).to({rotation:1007.4,x:638.5,y:248.4},0).wait(1).to({rotation:1026,x:642.5,y:240.2},0).wait(1).to({rotation:1043.4,x:648.6,y:234.2},0).wait(1).to({rotation:1059.8,x:655.7,y:230.4},0).wait(1).to({rotation:1075,x:663,y:228.8},0).wait(1).to({rotation:1089.2,x:670,y:229},0).wait(1).to({rotation:1102.2,x:676.2,y:230.8},0).wait(1).to({rotation:1114.2,x:681.3,y:233.6},0).wait(1).to({rotation:1125,x:685.4,y:237},0).wait(1).to({rotation:1134.7,x:688.5,y:240.6},0).wait(1).to({rotation:1143.4,x:690.7,y:244.3},0).wait(1).to({rotation:1150.9,x:692.1,y:247.7},0).wait(1).to({rotation:1157.3,x:693,y:250.8},0).wait(1).to({rotation:1162.7,x:693.4,y:253.4},0).wait(1).to({rotation:1166.9,x:693.6,y:255.4},0).wait(1).to({regY:59.1,rotation:1170,x:665.4,y:257},0).wait(1).to({regY:30.8,x:693.7,y:264.3,alpha:0.45},0).wait(1).to({y:286.5,alpha:0.476},0).wait(1).to({y:323.5,alpha:0.52},0).wait(1).to({y:375.3,alpha:0.581},0).wait(1).to({y:441.9,alpha:0.66},0).wait(1).to({y:523.3,alpha:0.756},0).wait(1).to({y:619.4,alpha:0.869},0).wait(1).to({regX:6.3,regY:59.1,x:665.4,y:730.4,alpha:1},0).to({_off:true},1).wait(1));

	// Layer 9
	this.instance_2 = new lib.arr1();
	this.instance_2.setTransform(635.6,736.4,1,1,0,0,0,6.3,59.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(1).to({regX:6.5,regY:32.5,x:640.5,y:632.1},0).wait(1).to({x:644.9,y:561.2},0).wait(1).to({x:648.8,y:497.1},0).wait(1).to({x:652.4,y:439.7},0).wait(1).to({x:655.5,y:389.1},0).wait(1).to({x:658.2,y:345.2},0).wait(1).to({x:660.5,y:308},0).wait(1).to({x:662.3,y:277.7},0).wait(1).to({x:663.8,y:254},0).wait(1).to({x:664.8,y:237.2},0).wait(1).to({x:665.4,y:227},0).wait(1).to({regX:6.3,regY:59.1,x:665.5,y:250.3},0).to({y:260.3},2).to({rotation:22},42).wait(1).to({regX:6.5,regY:32.5,rotation:21.6,x:675.4,y:242.9},0).wait(1).to({rotation:20.6,x:675,y:264.8},0).wait(1).to({rotation:18.9,x:674.2,y:301.3},0).wait(1).to({rotation:16.5,x:673.2,y:352.3},0).wait(1).to({rotation:13.4,x:671.7,y:418.1},0).wait(1).to({rotation:9.6,x:670,y:498.5},0).wait(1).to({rotation:5.2,x:668,y:593.7},0).wait(1).to({regX:6.3,regY:59.1,rotation:0,x:665.5,y:730.4},0).to({_off:true},1).wait(1));

	// Capa 1
	this.instance_3 = new lib.clock();
	this.instance_3.setTransform(635.8,720.7,1,1,0,0,0,93.1,97.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).wait(1).to({regX:93,regY:97.5,x:640.5,y:643.3},0).wait(1).to({x:644.8,y:572.4},0).wait(1).to({x:648.8,y:508.2},0).wait(1).to({x:652.3,y:450.8},0).wait(1).to({x:655.4,y:400.2},0).wait(1).to({x:658.1,y:356.3},0).wait(1).to({x:660.4,y:319.2},0).wait(1).to({x:662.3,y:288.8},0).wait(1).to({x:663.7,y:265.2},0).wait(1).to({x:664.8,y:248.3},0).wait(1).to({x:665.4,y:238.2},0).wait(1).to({regX:93.1,regY:97.3,x:665.7,y:234.6},0).to({y:244.6},2).wait(43).to({regX:93,regY:97.5,x:665.6,y:252.1},0).wait(1).to({y:274.2},0).wait(1).to({y:310.9},0).wait(1).to({y:362.3},0).wait(1).to({y:428.5},0).wait(1).to({y:509.3},0).wait(1).to({y:604.8},0).wait(1).to({regX:93.1,regY:97.3,x:665.7,y:714.8},0).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_4 = new lib.stick3();
	this.instance_4.setTransform(654.1,183.6,1,1,0,0,0,17,109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:16.9,rotation:30,x:391.6,y:329.2},11).to({rotation:1.8,x:407.9,y:355.7},15).to({rotation:-30,x:426.5,y:317.5},17).to({rotation:60,x:426.4,y:675.6},14).to({_off:true},1).wait(52));

	// Layer 11
	this.instance_5 = new lib.fmask4();
	this.instance_5.setTransform(384.6,503.6,0.901,1,0,0,0,143.9,61.5);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({scaleX:1,scaleY:0.89,x:393.2,y:493.3,alpha:1},32).to({scaleY:1,y:503.6},15).to({scaleY:1.05,y:508.3,alpha:0.75},42).wait(10));

	// Layer 8
	this.instance_6 = new lib.fmask3();
	this.instance_6.setTransform(393.2,391.6,1,1,0,0,0,143.9,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({scaleY:1.1,y:397.5,alpha:0.75},42).wait(10));

	// Layer 7
	this.instance_7 = new lib.fmask2();
	this.instance_7.setTransform(393.2,335.6,1,1,0,0,0,143.9,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({scaleY:1.02,y:338,alpha:0.75},42).wait(10));

	// Layer 9
	this.instance_8 = new lib.fmask1();
	this.instance_8.setTransform(393.2,193.5,1,1,0,0,0,143.9,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(58).to({scaleY:1.09,y:199,alpha:0.75},42).wait(10));

	// Layer 6
	this.instance_9 = new lib.lipsbad();
	this.instance_9.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110));

	// Layer 5
	this.instance_10 = new lib.eyebr();
	this.instance_10.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(110));

	// Layer 3
	this.instance_11 = new lib.pimple();
	this.instance_11.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_11.alpha = 0.699;

	this.instance_12 = new lib.pimple();
	this.instance_12.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.pimple();
	this.instance_13.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.pimple();
	this.instance_14.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_14.alpha = 0.699;

	this.instance_15 = new lib.pimple();
	this.instance_15.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_16 = new lib.pimple();
	this.instance_16.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(110));

	// Layer 2
	this.instance_17 = new lib.reness1();
	this.instance_17.setTransform(394.5,333,1,1,0,0,0,152.5,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(58).to({alpha:0.012},42).to({_off:true},1).wait(9));

	// eyes
	this.instance_18 = new lib.eyes1();
	this.instance_18.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(110));

	// shad
	this.instance_19 = new lib.shadows();
	this.instance_19.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(110));

	// Layer 4
	this.instance_20 = new lib.eyebag1();
	this.instance_20.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_21 = new lib.eyebag1();
	this.instance_21.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20}]}).wait(110));

	// lips
	this.instance_22 = new lib.lips();
	this.instance_22.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(110));

	// bdoy
	this.instance_23 = new lib.headmake();
	this.instance_23.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(110));

	// Layer 2
	this.instance_24 = new lib.lpst();
	this.instance_24.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_25 = new lib.towel();
	this.instance_25.setTransform(804.3,450.5,0.731,0.731,0,0,0,193.5,242);

	this.instance_26 = new lib.creme();
	this.instance_26.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_27 = new lib.pincet();
	this.instance_27.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.instance_28 = new lib.wand();
	this.instance_28.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.instance_29 = new lib.thermal_waterani();
	this.instance_29.setTransform(117.5,340.5,0.727,0.727,0,0,0,41,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(110));

	// Layer 3
	this.instance_30 = new lib.table();
	this.instance_30.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,978.2,747.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,978.2,938.7), new cjs.Rectangle(-32.5,-120.2,978.2,861), new cjs.Rectangle(-32.5,-120.2,978.2,790.1), rect=new cjs.Rectangle(-32.5,-120.2,978.2,747.7), rect, new cjs.Rectangle(-32.5,-120.2,978.2,765), new cjs.Rectangle(-32.5,-120.2,978.2,789.1), new cjs.Rectangle(-32.5,-120.2,978.2,811), new cjs.Rectangle(-32.5,-120.2,978.2,830.5), new cjs.Rectangle(-32.5,-120.2,978.2,848.1), new cjs.Rectangle(-32.5,-120.2,978.2,864), new cjs.Rectangle(-32.5,-120.2,978.2,877.8), new cjs.Rectangle(-32.5,-120.2,978.2,889.8), new cjs.Rectangle(-32.5,-120.2,978.2,900.9), rect=new cjs.Rectangle(-32.5,-120.2,978.2,747.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,978.2,822.5), new cjs.Rectangle(-32.5,-120.2,978.2,932.7), new cjs.Rectangle(-32.5,-120.2,978.2,747.7)];


(lib.makeup5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(1));

	// Layer 3
	this.instance = new lib.stick3();
	this.instance.setTransform(654.1,183.6,1,1,0,0,0,17,109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:16.9,regY:109.4,rotation:146,x:356.4,y:521.1},11).to({regY:109.3,rotation:206,x:468.5,y:521.9},37).to({regX:17,rotation:360,x:654.1,y:183.6},10).wait(1));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_1 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_2 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_3 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_4 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_5 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_6 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_7 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_8 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_9 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_10 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_11 = new cjs.Graphics().p("EgQbAlgQkBhwh7ixQh4itAAj4QAAlSCekXQCPj6EDi3QDsinErhZQEYhVERAAQDtABH3BKQBqAQBtARQhVELAAEUQAAJjEdHfQCNDuCzClQg3AahEAZQlSB+n4gBQyAABn6jcg");
	var mask_graphics_12 = new cjs.Graphics().p("EgQKAlgQkEhwh8ixQh5itAAj4QAAlSCgkXQCQj6EGi3QDtinEuhZQEbhVETAAQDwABH7BKQBrAQBuARQhWELAAEUQAAJjEgHfQCPDuC1ClQg4AahFAZQlVB+n9gBQyLABn+jcg");
	var mask_graphics_13 = new cjs.Graphics().p("EgP5AlgQkGhwh+ixQh6itAAj4QAAlSCikXQCRj6EIi3QDwinExhZQEdhVEWAAQDyABIABKQBsAQBvARQhXELAAEUQAAJjEiHfQCRDuC2ClQg4AahGAZQlYB+oCgBQyVABoDjcg");
	var mask_graphics_14 = new cjs.Graphics().p("EgPoAlgQkJhwh+ixQh8itAAj4QAAlSCjkXQCTj6EKi3QDzinEzhZQEghVEYAAQD1ABIEBKQBtAQBwARQhXELAAEUQAAJjElHfQCRDuC4ClQg4AahHAZQlbB+oGgBQyhABoHjcg");
	var mask_graphics_15 = new cjs.Graphics().p("EgPXAlgQkMhwh/ixQh9itAAj4QAAlSClkXQCUj6ENi3QD0inE2hZQEjhVEbAAQD2ABIKBKQBuAQBxARQhYELAAEUQAAJjEnHfQCTDuC6ClQg5AahHAZQlfB+oLgBQyrABoMjcg");
	var mask_graphics_16 = new cjs.Graphics().p("EgPHAlgQkNhwiBixQh9itAAj4QAAlSClkXQCWj6EPi3QD3inE5hZQElhVEeAAQD4ABIOBKQBvAQByARQhZELAAEUQAAJjErHfQCUDuC7ClQg5AahIAZQliB+oQgBQy1ABoSjcg");
	var mask_graphics_17 = new cjs.Graphics().p("EgO2AlgQkQhwiCixQh+itAAj4QAAlSCnkXQCXj6ESi3QD4inE8hZQEohVEgAAQD7ABITBKQBwAQBzARQhaELAAEUQAAJjEtHfQCVDuC9ClQg6AahIAZQllB+oUgBQzBABoWjcg");
	var mask_graphics_18 = new cjs.Graphics().p("EgOlAlgQkShwiDixQiAitAAj4QAAlSCpkXQCYj6EUi3QD7inE+hZQErhVEjAAQD9ABIXBKQBxAQB0ARQhaELAAEUQAAJjEvHfQCXDuC/ClQg7AahJAZQloB+oZgBQzLABobjcg");
	var mask_graphics_19 = new cjs.Graphics().p("EgOUAlgQkVhwiEixQiBitAAj4QAAlSCqkXQCaj6EWi3QD+inFBhZQErhVEnAAQEAABIcBKQByAQB1ARQhcELAAEUQAAJjEzHfQCYDuDAClQg7AahKAZQlrB+odgBQzXABofjcg");
	var mask_graphics_20 = new cjs.Graphics().p("EgODAlgQkXhwiGixQiCitAAj4QAAlSCskXQCbj6EZi3QD/inFEhZQEuhVEqAAQEBABIhBKQBzAQB2ARQhcELAAEUQAAJjE1HfQCZDuDDClQg8AahKAZQlvB+oigBQzhABokjcg");
	var mask_graphics_21 = new cjs.Graphics().p("EgNyAlgQkahwiGixQiEitAAj4QAAlSCukXQCcj6Ebi3QECinFHhZQEwhVEtAAQEDABImBKQB0AQB3ARQhdELAAEUQAAJjE3HfQCbDuDEClQg8AahLAZQlyB+ongBQzsABoojcg");
	var mask_graphics_22 = new cjs.Graphics().p("EgNiAlgQkbhwiIixQiEitAAj4QAAlSCukXQCej6Eei3QEDinFKhZQEzhVEvAAQEGABIqBKQB1AQB4ARQhdELAAEUQAAJjE6HfQCcDuDFClQg8AahMAZQl1B+orgBQz3ABoujcg");
	var mask_graphics_23 = new cjs.Graphics().p("EgNRAlgQkehwiJixQiFitAAj4QAAlSCwkXQCfj6Egi3QEGinFMhZQE2hVEyAAQEIABIvBKQB2AQB5ARQhfELAAEUQAAJjE9HfQCeDuDHClQg+AahMAZQl4B+owgBQ0CABoyjcg");
	var mask_graphics_24 = new cjs.Graphics().p("EgNAAlgQkhhwiKixQiGitAAj4QAAlSCykXQCgj6Eii3QEJinFPhZQE4hVE0AAQELABIzBKQB3AQB6ARQhfELAAEUQAAJjFAHfQCeDuDJClQg+AahNAZQl7B+o1gBQ0MABo3jcg");
	var mask_graphics_25 = new cjs.Graphics().p("EgMvAlgQkjhwiLixQiIitAAj4QAAlSCzkXQCij6Eli3QEKinFShZQE7hVE3AAQEMABI5BKQB4AQB7ARQhgELAAEUQAAJjFCHfQCgDuDKClQg+AahNAZQl/B+o5gBQ0XABo8jcg");
	var mask_graphics_26 = new cjs.Graphics().p("EgMeAlgQkmhwiMixQiJitAAj4QAAlSC1kXQCjj6Eni3QENinFVhZQE9hVE5AAQEPABI9BKQB5AQB8ARQhhELAAEUQAAJjFFHfQCiDuDMClQg/AahOAZQmBB+o/gBQ0iABpAjcg");
	var mask_graphics_27 = new cjs.Graphics().p("EgMNAlgQkohwiOixQiKitAAj4QAAlSC3kXQCkj6Eqi3QEOinFYhZQFAhVE8AAQERABJCBKQB5AQB+ARQhiELAAEUQAAJjFIHfQCiDuDOClQg/AahPAZQmEB+pEgBQ0sABpFjcg");
	var mask_graphics_28 = new cjs.Graphics().p("EgL8AlgQkrhwiOixQiLitAAj4QAAlSC3kXQCmj6Esi3QERinFahZQFDhVE/AAQETABJGBKQB7AQB+ARQhiELAAEUQAAJjFKHfQCkDuDPClQg/AahQAZQmHB+pIgBQ04ABpJjcg");
	var mask_graphics_29 = new cjs.Graphics().p("EgLsAlgQkshwiQixQiMitAAj4QAAlSC5kXQCnj6Eui3QEUinFdhZQFFhVFBAAQEWABJLBKQB7AQCAARQhkELAAEUQAAJjFNHfQCmDuDRClQhAAahQAZQmLB+pNgBQ1CABpPjcg");
	var mask_graphics_30 = new cjs.Graphics().p("EgLbAlgQkvhwiRixQiNitAAj4QAAlSC6kXQCpj6Exi3QEVinFghZQFIhVFEAAQEXABJQBKQB9AQCAARQhkELAAEUQAAJjFQHfQCmDuDTClQhBAahQAZQmOB+pSgBQ1NABpTjcg");
	var mask_graphics_31 = new cjs.Graphics().p("EgLKAlgQkyhwiSixQiOitAAj4QAAlSC8kXQCqj6Ezi3QEYinFjhZQFKhVFGAAQEaABJVBKQB9AQCCARQhlELAAEUQAAJjFSHfQCoDuDVClQhCAahRAZQmRB+pWgBQ1YABpYjcg");
	var mask_graphics_32 = new cjs.Graphics().p("EgK5AlgQk0hwiTixQiQitAAj4QAAlSC+kXQCrj6E2i3QEZinFkhZQFPhVFJAAQEcABJZBKQB/AQCCARQhlELAAEUQAAJjFVHfQCpDuDWClQhCAahSAZQmUB+pbgBQ1iABpdjcg");
	var mask_graphics_33 = new cjs.Graphics().p("EgKoAlgQk3hwiUixQiRitAAj4QAAlSC/kXQCtj6E4i3QEcinFmhZQFShVFLAAQEfABJeBKQB/AQCEARQhnELAAEUQAAJjFYHfQCqDuDYClQhCAahTAZQmXB+pggBQ1tABphjcg");
	var mask_graphics_34 = new cjs.Graphics().p("EgKXAlgQk5hwiWixQiSitAAj4QAAlSDBkXQCuj6E6i3QEfinFphZQFUhVFOAAQEhABJiBKQCBAQCEARQhnELAAEUQAAJjFaHfQCsDuDaClQhDAahTAZQmbB+pkgBQ14ABpmjcg");
	var mask_graphics_35 = new cjs.Graphics().p("EgKHAlgQk7hwiWixQiTitAAj4QAAlSDCkXQCvj6E9i3QEginFshZQFXhVFRAAQEiABJoBKQCBAQCGARQhoELAAEUQAAJjFdHfQCtDuDbClQhDAahUAZQmeB+ppgBQ2DABprjcg");
	var mask_graphics_36 = new cjs.Graphics().p("EgJ2AlgQk9hwiYixQiUitAAj4QAAlSDDkXQCxj6E/i3QEjinFvhZQFZhVFTAAQElABJsBKQCDAQCGARQhpELAAEUQAAJjFgHfQCvDuDcClQhDAahVAZQmhB+pugBQ2NABpwjcg");
	var mask_graphics_37 = new cjs.Graphics().p("EgJlAlgQlAhwiZixQiVitAAj4QAAlSDFkXQCyj6FCi3QEkinFyhZQFchVFWAAQEnABJxBKQCDAQCIARQhqELAAEUQAAJjFiHfQCwDuDfClQhFAahVAZQmkB+pygBQ2bABpyjcg");
	var mask_graphics_38 = new cjs.Graphics().p("EgJUAlgQlDhwiaixQiWitAAj4QAAlSDHkXQCzj6FEi3QEninF0hZQFfhVFYAAQEqABJ1BKQCFAQCIARQhqELAAEUQAAJjFlHfQCxDuDgClQhFAahWAZQmnB+p3gBQ2lABp3jcg");
	var mask_graphics_39 = new cjs.Graphics().p("EgJDAlgQlFhwibixQiYitAAj4QAAlSDIkXQC1j6FGi3QEqinF3hZQFhhVFbAAQEsABJ6BKQCFAQCKARQhrELAAEUQAAJjFnHfQCzDuDhClQhFAahWAZQmrB+p8gBQ2wABp7jcg");
	var mask_graphics_40 = new cjs.Graphics().p("EgIyAlgQlIhwicixQiZitAAj4QAAlSDKkXQC2j6FJi3QErinF6hZQFkhVFeAAQEtABJ/BKQCHAQCKARQhsELAAEUQAAJjFqHfQC0DuDkClQhGAahXAZQmuB+qAgBQ27ABqAjcg");
	var mask_graphics_41 = new cjs.Graphics().p("EgIiAlgQlJhwieixQiZitAAj4QAAlSDLkXQC3j6FLi3QEuinF9hZQFmhVFgAAQEwABKEBKQCHAQCMARQhtELAAEUQAAJjFtHfQC1DuDlClQhGAahYAZQmxB+qFgBQ3FABqGjcg");
	var mask_graphics_42 = new cjs.Graphics().p("EgIRAlgQlMhwieixQibitAAj4QAAlSDMkXQC5j6FOi3QEvinGAhZQFphVFjAAQEyABKIBKQCJAQCMARQhtELAAEUQAAJjFvHfQC3DuDnClQhHAahZAZQm0B+qKgBQ3QABqKjcg");
	var mask_graphics_43 = new cjs.Graphics().p("EgIAAlgQlOhwigixQicitAAj4QAAlSDOkXQC6j6FQi3QEyinGChZQFshVFlAAQE1ABKNBKQCJAQCOARQhvELAAEUQAAJjFzHfQC3DuDpClQhIAahYAZQm4B+qOgBQ3bABqPjcg");
	var mask_graphics_44 = new cjs.Graphics().p("EgHvAlgQlRhwihixQiditAAj4QAAlSDPkXQC8j6FSi3QE1inGFhZQFuhVFoAAQE3ABKRBKQCLAQCOARQhvELAAEUQAAJjF1HfQC5DuDqClQhIAahZAZQm7B+qTgBQ3mABqTjcg");
	var mask_graphics_45 = new cjs.Graphics().p("EgHeAlgQlUhwiiixQieitAAj4QAAlSDRkXQC9j6FVi3QE2inGIhZQFxhVFqAAQE5ABKXBKQCLAQCQARQhwELAAEUQAAJjF3HfQC7DuDsClQhJAahaAZQm9B+qZgBQ3wABqYjcg");
	var mask_graphics_46 = new cjs.Graphics().p("EgHNAlgQlWhwijixQigitAAj4QAAlSDTkXQC+j6FXi3QE5inGLhZQFzhVFtAAQE7ABKbBKQCNAQCQARQhwELAAEUQAAJjF6HfQC7DuDuClQhJAahbAZQnAB+qdgBQ38ABqcjcg");
	var mask_graphics_47 = new cjs.Graphics().p("EgG9AlgQlYhwikixQigitAAj4QAAlSDTkXQDAj6Fai3QE6inGOhZQF2hVFwAAQE9ABKfBKQCOAQCSARQhyELAAEUQAAJjF9HfQC9DuDvClQhJAahcAZQnDB+qigBQ4GABqijcg");
	var mask_graphics_48 = new cjs.Graphics().p("EgGsAlgQlahwimixQihitAAj4QAAlSDVkXQDAj6Fdi3QE9inGQhZQF5hVFyAAQFAABKkBKQCPAQCSARQhyELAAEUQAAJjF/HfQC/DuDxClQhKAahcAZQnHB+qngBQ4QABqnjcg");
	var mask_graphics_49 = new cjs.Graphics().p("EgGsAlgQlahwimixQihitAAj4QAAlSDVkXQDAj6Fdi3QE9inGQhZQF5hVFyAAQFAABKkBKQCPAQCSARQhyELAAEUQAAJjF/HfQC/DuDxClQhKAahcAZQnHB+qngBQ4QABqnjcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_1,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_2,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_3,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_4,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_5,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_6,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_7,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_8,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_9,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_10,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_11,x:157.3,y:262}).wait(1).to({graphics:mask_graphics_12,x:161.4,y:262}).wait(1).to({graphics:mask_graphics_13,x:165.5,y:262}).wait(1).to({graphics:mask_graphics_14,x:169.7,y:262}).wait(1).to({graphics:mask_graphics_15,x:173.8,y:262}).wait(1).to({graphics:mask_graphics_16,x:178,y:262}).wait(1).to({graphics:mask_graphics_17,x:182.1,y:262}).wait(1).to({graphics:mask_graphics_18,x:186.2,y:262}).wait(1).to({graphics:mask_graphics_19,x:190.4,y:262}).wait(1).to({graphics:mask_graphics_20,x:194.5,y:262}).wait(1).to({graphics:mask_graphics_21,x:198.6,y:262}).wait(1).to({graphics:mask_graphics_22,x:202.8,y:262}).wait(1).to({graphics:mask_graphics_23,x:206.9,y:262}).wait(1).to({graphics:mask_graphics_24,x:211,y:262}).wait(1).to({graphics:mask_graphics_25,x:215.2,y:262}).wait(1).to({graphics:mask_graphics_26,x:219.3,y:262}).wait(1).to({graphics:mask_graphics_27,x:223.5,y:262}).wait(1).to({graphics:mask_graphics_28,x:227.6,y:262}).wait(1).to({graphics:mask_graphics_29,x:231.7,y:262}).wait(1).to({graphics:mask_graphics_30,x:235.9,y:262}).wait(1).to({graphics:mask_graphics_31,x:240,y:262}).wait(1).to({graphics:mask_graphics_32,x:244.1,y:262}).wait(1).to({graphics:mask_graphics_33,x:248.3,y:262}).wait(1).to({graphics:mask_graphics_34,x:252.4,y:262}).wait(1).to({graphics:mask_graphics_35,x:256.6,y:262}).wait(1).to({graphics:mask_graphics_36,x:260.7,y:262}).wait(1).to({graphics:mask_graphics_37,x:264.8,y:262}).wait(1).to({graphics:mask_graphics_38,x:269,y:262}).wait(1).to({graphics:mask_graphics_39,x:273.1,y:262}).wait(1).to({graphics:mask_graphics_40,x:277.2,y:262}).wait(1).to({graphics:mask_graphics_41,x:281.4,y:262}).wait(1).to({graphics:mask_graphics_42,x:285.5,y:262}).wait(1).to({graphics:mask_graphics_43,x:289.6,y:262}).wait(1).to({graphics:mask_graphics_44,x:293.8,y:262}).wait(1).to({graphics:mask_graphics_45,x:297.9,y:262}).wait(1).to({graphics:mask_graphics_46,x:302.1,y:262}).wait(1).to({graphics:mask_graphics_47,x:306.2,y:262}).wait(1).to({graphics:mask_graphics_48,x:310.3,y:262}).wait(1).to({graphics:mask_graphics_49,x:310.3,y:262}).wait(10));

	// Layer 8
	this.instance_1 = new lib.fmask3();
	this.instance_1.setTransform(393.2,391.6,1,1,0,0,0,143.9,61.5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.92,y:386.6},11).to({scaleY:1,y:391.6},47).wait(1));

	// Layer 7
	this.instance_2 = new lib.fmask2();
	this.instance_2.setTransform(393.2,335.6,1,1,0,0,0,143.9,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59));

	// Layer 9
	this.instance_3 = new lib.fmask1();
	this.instance_3.setTransform(393.2,193.5,1,1,0,0,0,143.9,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59));

	// Layer 6
	this.instance_4 = new lib.lipsbad();
	this.instance_4.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59));

	// Layer 5
	this.instance_5 = new lib.eyebr();
	this.instance_5.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59));

	// Layer 3
	this.instance_6 = new lib.pimple();
	this.instance_6.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.pimple();
	this.instance_7.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.pimple();
	this.instance_8.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.pimple();
	this.instance_9.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_9.alpha = 0.699;

	this.instance_10 = new lib.pimple();
	this.instance_10.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_11 = new lib.pimple();
	this.instance_11.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(59));

	// Layer 2
	this.instance_12 = new lib.reness1();
	this.instance_12.setTransform(394.5,333,1,1,0,0,0,152.5,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59));

	// eyes
	this.instance_13 = new lib.eyes1();
	this.instance_13.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59));

	// shad
	this.instance_14 = new lib.shadows();
	this.instance_14.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(59));

	// Layer 4
	this.instance_15 = new lib.eyebag1();
	this.instance_15.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_16 = new lib.eyebag1();
	this.instance_16.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).wait(59));

	// lips
	this.instance_17 = new lib.lips();
	this.instance_17.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(59));

	// bdoy
	this.instance_18 = new lib.headmake();
	this.instance_18.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(59));

	// Layer 2
	this.instance_19 = new lib.lpst();
	this.instance_19.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_20 = new lib.towel();
	this.instance_20.setTransform(804.3,450.5,0.731,0.731,0,0,0,193.5,242);

	this.instance_21 = new lib.creme();
	this.instance_21.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_22 = new lib.pincet();
	this.instance_22.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.instance_23 = new lib.wand();
	this.instance_23.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.instance_24 = new lib.thermal_waterani();
	this.instance_24.setTransform(117.5,340.5,0.727,0.727,0,0,0,41,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(59));

	// Layer 3
	this.instance_25 = new lib.table();
	this.instance_25.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,978.2,747.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,978.2,748.2), new cjs.Rectangle(-32.5,-120.2,978.2,749.1), new cjs.Rectangle(-32.5,-120.2,978.2,749.9), new cjs.Rectangle(-32.5,-120.2,978.2,750.6), new cjs.Rectangle(-32.5,-120.2,978.2,751.2), new cjs.Rectangle(-32.5,-120.2,978.2,751.7), new cjs.Rectangle(-32.5,-120.2,978.2,752.1), new cjs.Rectangle(-32.5,-120.2,978.2,752.5), new cjs.Rectangle(-32.5,-120.2,978.2,752.8), new cjs.Rectangle(-32.5,-120.2,978.2,752.9), rect=new cjs.Rectangle(-32.5,-120.2,978.2,753), rect, new cjs.Rectangle(-32.5,-120.2,978.2,752.9), new cjs.Rectangle(-32.5,-120.2,978.2,752.7), new cjs.Rectangle(-32.5,-120.2,978.2,752.4), new cjs.Rectangle(-32.5,-120.2,978.2,752.1), new cjs.Rectangle(-32.5,-120.2,978.2,751.7), new cjs.Rectangle(-32.5,-120.2,978.2,751.1), new cjs.Rectangle(-32.5,-120.2,978.2,751.6), new cjs.Rectangle(-32.5,-120.2,978.2,752.3), new cjs.Rectangle(-32.5,-120.2,978.2,752.7), new cjs.Rectangle(-32.5,-120.2,978.2,753), new cjs.Rectangle(-32.5,-120.2,978.2,753.3), new cjs.Rectangle(-32.5,-120.2,978.2,753.4), rect=new cjs.Rectangle(-32.5,-120.2,978.2,753.5), rect, new cjs.Rectangle(-32.5,-120.2,978.2,753.4), new cjs.Rectangle(-32.5,-120.2,978.2,753.2), new cjs.Rectangle(-32.5,-120.2,978.2,752.9), new cjs.Rectangle(-32.5,-120.2,978.2,752.6), new cjs.Rectangle(-32.5,-120.2,978.2,752.1), new cjs.Rectangle(-32.5,-120.2,978.2,751.6), new cjs.Rectangle(-32.5,-120.2,978.2,750.9), new cjs.Rectangle(-32.5,-120.2,978.2,750.2), rect=new cjs.Rectangle(-32.5,-120.2,978.2,747.7), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer 3
	this.instance = new lib.stick3();
	this.instance.setTransform(654.1,183.6,1,1,0,0,0,17,109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:16.9,rotation:71,x:527,y:208.5},11).to({rotation:56,y:292.5},23).to({regX:17,rotation:0,x:654.1,y:183.6},10).wait(1));

	// Layer 8
	this.instance_1 = new lib.fmask1();
	this.instance_1.setTransform(393.2,193.5,1,1,0,0,0,143.9,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// Layer 7
	this.instance_2 = new lib.fmask2();
	this.instance_2.setTransform(393.2,302,1,0.688,0,0,0,143.9,61.5);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({scaleY:1,y:335.6,alpha:1},23).wait(11));

	// Layer 6
	this.instance_3 = new lib.lipsbad();
	this.instance_3.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

	// Layer 5
	this.instance_4 = new lib.eyebr();
	this.instance_4.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// Layer 3
	this.instance_5 = new lib.pimple();
	this.instance_5.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_5.alpha = 0.699;

	this.instance_6 = new lib.pimple();
	this.instance_6.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.pimple();
	this.instance_7.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.pimple();
	this.instance_8.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.pimple();
	this.instance_9.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_10 = new lib.pimple();
	this.instance_10.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(45));

	// Layer 2
	this.instance_11 = new lib.reness1();
	this.instance_11.setTransform(394.5,333,1,1,0,0,0,152.5,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(45));

	// eyes
	this.instance_12 = new lib.eyes1();
	this.instance_12.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(45));

	// shad
	this.instance_13 = new lib.shadows();
	this.instance_13.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(45));

	// Layer 4
	this.instance_14 = new lib.eyebag1();
	this.instance_14.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_15 = new lib.eyebag1();
	this.instance_15.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(45));

	// lips
	this.instance_16 = new lib.lips();
	this.instance_16.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(45));

	// bdoy
	this.instance_17 = new lib.headmake();
	this.instance_17.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(45));

	// Layer 2
	this.instance_18 = new lib.lpst();
	this.instance_18.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_19 = new lib.towel();
	this.instance_19.setTransform(804.3,450.5,0.731,0.731,0,0,0,193.5,242);

	this.instance_20 = new lib.creme();
	this.instance_20.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_21 = new lib.pincet();
	this.instance_21.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.instance_22 = new lib.wand();
	this.instance_22.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.instance_23 = new lib.thermal_waterani();
	this.instance_23.setTransform(117.5,340.5,0.727,0.727,0,0,0,41,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(45));

	// Layer 3
	this.instance_24 = new lib.table();
	this.instance_24.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,978.2,747.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// Layer 3
	this.instance = new lib.stick3();
	this.instance.setTransform(654.1,183.6,1,1,0,0,0,17,109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:150,x:347.9,y:297.5},11).to({rotation:210,x:436},31).to({rotation:360,x:654.1,y:183.6},9).wait(1));

	// Layer 8
	this.instance_1 = new lib.fmask1();
	this.instance_1.setTransform(312.2,175.4,0.437,0.704,0,0,0,144,61.6);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({regX:143.9,regY:61.5,scaleX:0.68,scaleY:0.79,x:347.5,y:180.5,alpha:0.641},19).to({scaleX:1,scaleY:0.96,x:393.2,y:191,alpha:1},11).to({scaleY:1,y:193.5},9).wait(1));

	// Layer 6
	this.instance_2 = new lib.lipsbad();
	this.instance_2.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52));

	// Layer 5
	this.instance_3 = new lib.eyebr();
	this.instance_3.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52));

	// Layer 3
	this.instance_4 = new lib.pimple();
	this.instance_4.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.pimple();
	this.instance_5.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_5.alpha = 0.699;

	this.instance_6 = new lib.pimple();
	this.instance_6.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.pimple();
	this.instance_7.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.pimple();
	this.instance_8.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_9 = new lib.pimple();
	this.instance_9.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(52));

	// Layer 2
	this.instance_10 = new lib.reness1();
	this.instance_10.setTransform(394.5,333,1,1,0,0,0,152.5,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(52));

	// eyes
	this.instance_11 = new lib.eyes1();
	this.instance_11.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(52));

	// shad
	this.instance_12 = new lib.shadows();
	this.instance_12.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(52));

	// Layer 4
	this.instance_13 = new lib.eyebag1();
	this.instance_13.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_14 = new lib.eyebag1();
	this.instance_14.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(52));

	// lips
	this.instance_15 = new lib.lips();
	this.instance_15.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(52));

	// bdoy
	this.instance_16 = new lib.headmake();
	this.instance_16.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(52));

	// Layer 2
	this.instance_17 = new lib.lpst();
	this.instance_17.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_18 = new lib.towel();
	this.instance_18.setTransform(804.3,450.5,0.731,0.731,0,0,0,193.5,242);

	this.instance_19 = new lib.creme();
	this.instance_19.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_20 = new lib.pincet();
	this.instance_20.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.instance_21 = new lib.wand();
	this.instance_21.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.instance_22 = new lib.thermal_waterani();
	this.instance_22.setTransform(117.5,340.5,0.727,0.727,0,0,0,41,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(52));

	// Layer 3
	this.instance_23 = new lib.table();
	this.instance_23.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,978.2,747.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// Слой 3
	this.instance = new lib.mask01();
	this.instance.setTransform(62.5,453.2,0.72,0.72,0,0,0,78.5,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(51));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgkFA38MAAAhuJIBOAAIAAhvMBG9AAAMAAABv4g");
	var mask_graphics_13 = new cjs.Graphics().p("EgEEAgzIo9jSIALAAIgUgEIhrgTQh6gViSgRQjngagqgIQjRgSmfhCIjDgfMAAAg8hMBILAAAMAAABAxQiRAOk5AtIslgkImLCiQgwAUgyAOQhcAZiZAAQm/AAh6hgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:627.2,y:312.1}).wait(13).to({graphics:mask_graphics_13,x:627.2,y:173.5}).wait(39));

	// Layer 3
	this.instance_1 = new lib.stick();
	this.instance_1.setTransform(748.2,733.5,1,1,0,0,0,17,109.3);

	this.instance_2 = new lib.stick3();
	this.instance_2.setTransform(670.4,299.2,0.999,0.999,23.3,0,0,16.9,109.3);
	this.instance_2._off = true;

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:726.2,y:172.6},10).to({x:664.1},4).to({regY:109.2,rotation:15,x:670.5,y:299.1},5).to({regX:16.9,scaleX:1,scaleY:1,rotation:22.1,x:667.5},4).to({regX:17,scaleX:1,scaleY:1,rotation:15,x:670.5},4).to({_off:true,regX:16.9,regY:109.3,scaleX:1,scaleY:1,rotation:23.3,x:670.4,y:299.2},4).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},4).to({regX:17,regY:109.2,scaleX:1,scaleY:1,rotation:15,x:670.5,y:299.1},5).to({regY:109.3,rotation:0,x:654.1,y:183.6},7).wait(9));

	// Layer 7
	this.instance_3 = new lib.mask01();
	this.instance_3.setTransform(585,762.8,1,1,0,0,0,78.5,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:651,y:421.8},14).wait(28).to({y:683.9},8).to({_off:true},1).wait(1));

	// Layer 6
	this.instance_4 = new lib.lipsbad();
	this.instance_4.setTransform(398,456.8,1,1,0,0,0,31.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52));

	// Layer 5
	this.instance_5 = new lib.eyebr();
	this.instance_5.setTransform(393.8,244.6,1,1,0,0,0,150.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52));

	// Layer 3
	this.instance_6 = new lib.pimple();
	this.instance_6.setTransform(358.7,494,0.783,0.715,15,0,0,14.1,14);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.pimple();
	this.instance_7.setTransform(401.6,375.2,1.058,1.189,15,0,0,14,14.1);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.pimple();
	this.instance_8.setTransform(496.7,442.3,1.058,1.189,15,0,0,14,14.1);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.pimple();
	this.instance_9.setTransform(328.7,206,0.783,0.715,15,0,0,14.1,14);
	this.instance_9.alpha = 0.699;

	this.instance_10 = new lib.pimple();
	this.instance_10.setTransform(283.6,385.2,1.058,1.189,15,0,0,14,14.1);

	this.instance_11 = new lib.pimple();
	this.instance_11.setTransform(502.7,183,0.851,1.189,-15,0,0,14.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(52));

	// Layer 2
	this.instance_12 = new lib.reness1();
	this.instance_12.setTransform(394.5,333,1,1,0,0,0,152.5,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(52));

	// eyes
	this.instance_13 = new lib.eyes1();
	this.instance_13.setTransform(395.8,299.3,1.353,1.353,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(52));

	// shad
	this.instance_14 = new lib.shadows();
	this.instance_14.setTransform(396.9,299.4,1.08,1.08,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(52));

	// Layer 4
	this.instance_15 = new lib.eyebag1();
	this.instance_15.setTransform(311.2,336.6,1,1,0,0,180,53.8,38.1);

	this.instance_16 = new lib.eyebag1();
	this.instance_16.setTransform(481.2,336.6,1,1,0,0,0,53.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).wait(52));

	// lips
	this.instance_17 = new lib.lips();
	this.instance_17.setTransform(400,458.8,1.08,1.08,0,0,0,66.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(52));

	// bdoy
	this.instance_18 = new lib.headmake();
	this.instance_18.setTransform(21.8,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(52));

	// Layer 2
	this.instance_19 = new lib.lpst();
	this.instance_19.setTransform(157,423,0.701,0.701,0,0,0,23,100.5);

	this.instance_20 = new lib.towel();
	this.instance_20.setTransform(804.3,450.5,0.731,0.731,0,0,0,193.5,242);

	this.instance_21 = new lib.creme();
	this.instance_21.setTransform(695.2,385.2,1,1,0,0,0,36,79.9);

	this.instance_22 = new lib.pincet();
	this.instance_22.setTransform(655.1,381.6,1,1,-67.5,0,0,92,38.6);

	this.instance_23 = new lib.wand();
	this.instance_23.setTransform(39.5,314.7,0.857,0.857,0,0,0,49.9,162.6);

	this.instance_24 = new lib.thermal_waterani();
	this.instance_24.setTransform(117.5,340.5,0.727,0.727,0,0,0,41,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(52));

	// Layer 3
	this.instance_25 = new lib.table();
	this.instance_25.setTransform(405.1,479.6,1,1,0,0,0,437.6,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-120.2,978.2,951.6);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-120.2,978.2,927.2), new cjs.Rectangle(-32.5,-120.2,978.2,902.9), new cjs.Rectangle(-32.5,-120.2,978.2,878.5), new cjs.Rectangle(-32.5,-120.2,978.2,854.1), new cjs.Rectangle(-32.5,-120.2,978.2,829.8), new cjs.Rectangle(-32.5,-120.2,978.2,805.4), new cjs.Rectangle(-32.5,-120.2,978.2,781.1), new cjs.Rectangle(-32.5,-120.2,978.2,756.7), rect=new cjs.Rectangle(-32.5,-120.2,978.2,747.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-120.2,978.2,774.4), new cjs.Rectangle(-32.5,-120.2,978.2,807.1), new cjs.Rectangle(-32.5,-120.2,978.2,839.9), new cjs.Rectangle(-32.5,-120.2,978.2,872.6), new cjs.Rectangle(-32.5,-120.2,978.2,747.7)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(73,57);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-130,-130);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFulvQFvluIEAAQIFAAFuFuQFvFvAAIEQAAIFlvFuQluFuoFAAQoEAAlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(73,57);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-130,-130);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFulvQFvluIEAAQIFAAFuFuQFvFvAAIEQAAIFlvFuQluFuoFAAQoEAAlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(73,57);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-130,-130);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFulvQFvluIEAAQIFAAFuFuQFvFvAAIEQAAIFlvFuQluFuoFAAQoEAAlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(73,57);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-130,-130);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFulvQFvluIEAAQIFAAFuFuQFvFvAAIEQAAIFlvFuQluFuoFAAQoEAAlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect, rect];


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


(lib.hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop("ru");
		}
		else if (lang_str == "de")
		{
			this.body_mc.gotoAndStop("de");
		}
		else if (lang_str == "fr")
		{
			this.body_mc.gotoAndStop("fr");
		}
		else if (lang_str == "es")
		{
			this.body_mc.gotoAndStop("es");
		}
		else if (lang_str == "pt")
		{
			this.body_mc.gotoAndStop("pt");
		}
		else
		{
			this.body_mc.gotoAndStop("en");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_hint_filter_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-29.5,210,150);
p.frameBounds = [rect];


(lib.els_makeup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.els_eyes1();
	this.instance.setTransform(50.7,99,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.els_hair01();
	this.instance_1.setTransform(54.6,-89.4,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.shadows_makeup();
	this.shadows.setTransform(31.7,32.2,1,1,0,0,0,130.5,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.lips_makeup();
	this.lips.setTransform(34.5,179.6,1,1,0,0,0,66.7,21.2);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.rouge_makeup();
	this.blush.setTransform(32.7,93.5,1,1,0,0,0,142.6,60);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.body_makeup();
	this.instance_2.setTransform(-315.5,-221.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315.5,-344.2,715,745.3);
p.frameBounds = [rect];


(lib.els_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crown
	this.instance = new lib.els_crown1();
	this.instance.setTransform(-19.8,-288.1,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// earr
	this.instance_1 = new lib.els_earr1();
	this.instance_1.setTransform(-5.6,-207.9,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hf
	this.instance_2 = new lib.elsa_fringe4();
	this.instance_2.setTransform(-22.2,-285,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// jewels
	this.instance_3 = new lib.els_jw1();
	this.instance_3.setTransform(-7,-174.7,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// dr
	this.instance_4 = new lib.dress_m();
	this.instance_4.setTransform(15.6,107.7,1,1,0,0,0,276.9,347.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// sh
	this.instance_5 = new lib.sh02_img();
	this.instance_5.setTransform(12.4,173.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// eyes
	this.instance_6 = new lib.els_eyes1();
	this.instance_6.setTransform(29.4,-207.3,0.217,0.217,0,0,0,39.9,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// shad
	this.instance_7 = new lib.els_shad4_img();
	this.instance_7.setTransform(0.6,-228,0.173,0.173);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// lips
	this.instance_8 = new lib.els_li1_img();
	this.instance_8.setTransform(15.1,-196.9,0.173,0.173);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// rouge
	this.instance_9 = new lib.rouge1_img();
	this.instance_9.setTransform(1.6,-218.6,0.173,0.173);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// head
	this.instance_10 = new lib.els_head_img();
	this.instance_10.setTransform(-4.8,-262.8,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// body
	this.instance_11 = new lib.body0();
	this.instance_11.setTransform(-41.6,-200.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// shad
	this.instance_12 = new lib.shad();
	this.instance_12.setTransform(-27.8,194.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// hb
	this.instance_13 = new lib.hair4();
	this.instance_13.setTransform(-7.8,-255.9,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// wings
	this.instance_14 = new lib.wings2_img();
	this.instance_14.setTransform(-119.4,-277.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.7,-288.1,433,577.3);
p.frameBounds = [rect];


(lib.els_halfbod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.crown();
	this.headdress.setTransform(33.1,-197,1,1,0,0,0,173.1,93.2);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.els_hf();
	this.fringe.setTransform(32.8,-145,1,1,0,0,0,116.4,132.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// earrings
	this.earrings = new lib.earrings();
	this.earrings.setTransform(39.1,68.3,1,1,0,0,0,125.6,56);

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// beads
	this.beads = new lib.jewels();
	this.beads.setTransform(42.1,58.3,1,1,0,0,0,125.6,56);

	this.timeline.addTween(cjs.Tween.get(this.beads).wait(1));

	// eyes
	this.instance = new lib.els_eyes1();
	this.instance.setTransform(45.6,14.8,0.817,0.817,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.shadows_makeup();
	this.shadows.setTransform(33.2,-28.8,0.652,0.652,0,0,0,130.4,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.lips_makeup();
	this.lips.setTransform(35.1,67.4,0.652,0.652,0,0,0,66.8,21.3);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.rouge_makeup();
	this.blush.setTransform(33.8,11.1,0.652,0.652,0,0,0,142.6,60.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.body_hair_img();
	this.instance_1.setTransform(-192.8,-196.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hair
	this.hair = new lib.els_hb();
	this.hair.setTransform(32.8,-145,1,1,0,0,0,116.4,132.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.8,-290.2,470,587.1);
p.frameBounds = [rect];


(lib.els_fullbod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.crown();
	this.headdress.setTransform(26.1,-263.4,0.265,0.265,0,0,0,173.1,93.1);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.els_hf();
	this.fringe.setTransform(26,-249.6,0.265,0.265,0,0,0,116.3,132.2);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// cloak
	this.cloak = new lib.coatf();
	this.cloak.setTransform(20.1,333.3,1,1,0,0,0,276.8,347.7);

	this.timeline.addTween(cjs.Tween.get(this.cloak).wait(1));

	// beads
	this.beads = new lib.jewels();
	this.beads.setTransform(27.7,-193,0.265,0.265,0,0,0,125.6,56);

	this.timeline.addTween(cjs.Tween.get(this.beads).wait(1));

	// dress
	this.dress = new lib.dress();
	this.dress.setTransform(15.6,107.7,1,1,0,0,0,276.9,347.7);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.shoesall();
	this.shoes.setTransform(86.3,251.2,1,1,0,0,0,69.4,50.9);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// earrings
	this.earrings = new lib.earrings();
	this.earrings.setTransform(27.7,-193,0.265,0.265,0,0,0,125.6,56);

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// body
	this.instance = new lib.els_eyes1();
	this.instance.setTransform(29.4,-207.3,0.217,0.217,0,0,0,39.9,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.shadows_makeup();
	this.shadows.setTransform(26.1,-218.8,0.173,0.173,0,0,0,130.3,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.lips_makeup();
	this.lips.setTransform(26.7,-193.3,0.173,0.173,0,0,0,67,20.8);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.rouge_makeup();
	this.blush.setTransform(26.3,-208.2,0.173,0.173,0,0,0,142.8,60.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.els_head_img();
	this.instance_1.setTransform(-4.8,-262.8,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.body0();
	this.instance_2.setTransform(-41.6,-200.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.shad();
	this.instance_3.setTransform(-27.8,194.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// cloakSecond
	this.cloakSecond = new lib.coatb();
	this.cloakSecond.setTransform(20.1,99.2,1,1,0,0,0,276.9,347.7);

	this.timeline.addTween(cjs.Tween.get(this.cloakSecond).wait(1));

	// hair
	this.hair = new lib.els_hb();
	this.hair.setTransform(26,-249.6,0.265,0.265,0,0,0,116.3,132.2);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// wings
	this.wings = new lib.wings();
	this.wings.setTransform(38.7,-171.9,1,1,0,0,0,474.2,261.6);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.7,-288.1,471,574.3);
p.frameBounds = [rect];


(lib.closet_makeup1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(200,-280);

	this.lips_1 = new lib.lips_1_mc();
	this.lips_1.setTransform(200,-280);

	this.shadows_1 = new lib.shadows_1_mc();
	this.shadows_1.setTransform(200,-280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.lips_1}]},1).to({state:[{t:this.shadows_1}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_mc();
	this.blush_6.setTransform(290,132);

	this.blush_5 = new lib.blush_5_mc();
	this.blush_5.setTransform(325,-28);

	this.blush_4 = new lib.blush_4_mc();
	this.blush_4.setTransform(290,-188);

	this.blush_3 = new lib.blush_3_mc();
	this.blush_3.setTransform(-290,132);

	this.blush_2 = new lib.blush_2_mc();
	this.blush_2.setTransform(-325,-28);

	this.blush_1 = new lib.blush_1_mc();
	this.blush_1.setTransform(-290,-188);

	this.lips_7 = new lib.lips_7_mc();
	this.lips_7.setTransform(290,100);

	this.lips_6 = new lib.lips_6_mc();
	this.lips_6.setTransform(325,-61);

	this.lips_5 = new lib.lips_5_mc();
	this.lips_5.setTransform(290,-220);

	this.lips_4 = new lib.lips_4_mc();
	this.lips_4.setTransform(-290,100);

	this.lips_3 = new lib.lips_3_mc();
	this.lips_3.setTransform(-325,-61);

	this.lips_2 = new lib.lips_2_mc();
	this.lips_2.setTransform(-290,-220);

	this.shadows_7 = new lib.shadows_7_mc();
	this.shadows_7.setTransform(290,125);

	this.shadows_6 = new lib.shadows_6_mc();
	this.shadows_6.setTransform(325,-34);

	this.shadows_5 = new lib.shadows_5_mc();
	this.shadows_5.setTransform(290,-195);

	this.shadows_4 = new lib.shadows_4_mc();
	this.shadows_4.setTransform(-295,125);

	this.shadows_3 = new lib.shadows_3_mc();
	this.shadows_3.setTransform(-325,-34);

	this.shadows_2 = new lib.shadows_2_mc();
	this.shadows_2.setTransform(-290,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6},{t:this.lips_7}]},1).to({state:[{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6},{t:this.shadows_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-405,-310,810,522);
p.frameBounds = [rect, new cjs.Rectangle(-405,-310,810,490), new cjs.Rectangle(-405,-310,810,515)];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup1();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-405,-310,810,522);
p.frameBounds = [rect];


(lib.animation_hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// animation
	this.instance = new lib.hint_filter_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:1},10).wait(70).to({alpha:0.012},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-29.5,210,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1200,0,3200,600);
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


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();
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
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,504.5,461.7);
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


(lib.wings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(62,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.wings_3_2_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLlQk0kzAAmyQAAmxE0k0QE0k0GxAAQGyAAEzE0QE1E0AAGxQAAGyk1EzQkzE1myAAQmxAAk0k1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.wings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(62,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.wings_2_2_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLlQk0kzAAmyQAAmxE0k0QE0k0GxAAQGyAAEzE0QE1E0AAGxQAAGyk1EzQkzE1myAAQmxAAk0k1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.wings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(62,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.wings_1_2_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLlQk0kzAAmyQAAmxE0k0QE0k0GxAAQGyAAEzE0QE1E0AAGxQAAGyk1EzQkzE1myAAQmxAAk0k1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.shoes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(62,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shoes_3_2_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLlQk0kzAAmyQAAmxE0k0QE0k0GxAAQGyAAEzE0QE1E0AAGxQAAGyk1EzQkzE1myAAQmxAAk0k1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.shoes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(62,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shoes_2_2_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLlQk0kzAAmyQAAmxE0k0QE0k0GxAAQGyAAEzE0QE1E0AAGxQAAGyk1EzQkzE1myAAQmxAAk0k1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.shoes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(62,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shoes_1_2_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLlQk0kzAAmyQAAmxE0k0QE0k0GxAAQGyAAEzE0QE1E0AAGxQAAGyk1EzQkzE1myAAQmxAAk0k1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.photo_frame_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAZKIgcAdQqUgKnWnWQngnggBqnQABqlHgnhQHhngKlAAQKnAAHgHgQHgHhABKlQgBKnngHgQnWHWqTAKg");
	mask.setTransform(4,-1);

	// graph
	this.hero_1 = new lib.els_halfbod();
	this.hero_1.setTransform(30,195.8,1,1,0,0,0,65,174.8);

	this.hero_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.instance = new lib.photo_frame_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-225,450,450);
p.frameBounds = [rect];


(lib.photo_frame_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAZKIgcAdQqUgKnWnWQngnggBqnQABqlHgnhQHhngKlAAQKnAAHgHgQHgHhABKlQgBKnngHgQnWHWqTAKg");
	mask.setTransform(4,-1);

	// graph
	this.hero_1 = new lib.els_halfbod();
	this.hero_1.setTransform(30,195.8,1,1,0,0,0,65,174.8);

	this.hero_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.instance = new lib.photo_frame_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-225,450,450);
p.frameBounds = [rect];


(lib.photo_frame_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAZKIgcAdQqUgKnWnWQngnggBqnQABqlHgnhQHhngKlAAQKnAAHgHgQHgHhABKlQgBKnngHgQnWHWqTAKg");
	mask.setTransform(4,-1);

	// graph
	this.hero_1 = new lib.els_halfbod();
	this.hero_1.setTransform(30,195.8,1,1,0,0,0,65,174.8);

	this.hero_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.instance = new lib.photo_frame_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-225,450,450);
p.frameBounds = [rect];


(lib.photo_frame_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAZKIgcAdQqUgKnWnWQngnggBqnQABqlHgnhQHhngKlAAQKnAAHgHgQHgHhABKlQgBKnngHgQnWHWqTAKg");
	mask.setTransform(4,-1);

	// graph
	this.hero_1 = new lib.els_halfbod();
	this.hero_1.setTransform(30,195.8,1,1,0,0,0,65,174.8);

	this.hero_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.instance = new lib.photo_frame_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-225,450,450);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(140,130);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({scaleX:0.62,scaleY:0.62},0).to({regY:0.1,scaleX:1.08,scaleY:1.08,y:130.1,alpha:0.738},11).to({regY:0,scaleX:1,scaleY:1,y:130,alpha:1},4).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-140,130);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({scaleX:0.62,scaleY:0.62},0).to({regY:0.1,scaleX:1.08,scaleY:1.08,y:130.1,alpha:0.738},11).to({regY:0,scaleX:1,scaleY:1,y:130,alpha:1},4).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(140,-130);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.62,scaleY:0.62},0).to({regY:-0.1,scaleX:1.08,scaleY:1.08,y:-130.1,alpha:0.738},11).to({regY:0,scaleX:1,scaleY:1,y:-130,alpha:1},4).wait(21));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-140,-130);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.62,scaleY:0.62},0).to({regY:-0.1,scaleX:1.08,scaleY:1.08,y:-130.1,alpha:0.738},11).to({regY:0,scaleX:1,scaleY:1,y:-130,alpha:1},4).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-260,540,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-274.5,-264.6,544.6,524.7), new cjs.Rectangle(-280,-270,550,530), new cjs.Rectangle(-277.4,-267.4,547.5,527.5), new cjs.Rectangle(-274.9,-264.9,545,524.9), new cjs.Rectangle(-272.4,-262.4,542.5,522.4), rect=new cjs.Rectangle(-270,-260,540,520), rect, rect, rect, rect, new cjs.Rectangle(-270,-264.6,544.5,524.7), new cjs.Rectangle(-270,-270,550,530), new cjs.Rectangle(-270,-267.4,547.4,527.5), new cjs.Rectangle(-270,-264.9,544.9,524.9), new cjs.Rectangle(-270,-262.4,542.4,522.4), rect=new cjs.Rectangle(-270,-260,540,520), rect, rect, rect, rect, new cjs.Rectangle(-274.5,-260,544.6,524.7), new cjs.Rectangle(-280,-260,550,530), new cjs.Rectangle(-277.4,-260,547.5,527.5), new cjs.Rectangle(-274.9,-260,545,524.9), new cjs.Rectangle(-272.4,-260,542.5,522.5), rect=new cjs.Rectangle(-270,-260,540,520), rect, rect, rect, rect, new cjs.Rectangle(-270,-260,544.5,524.7), new cjs.Rectangle(-270,-260,550,530), new cjs.Rectangle(-270,-260,547.4,527.5), new cjs.Rectangle(-270,-260,544.9,524.9), new cjs.Rectangle(-270,-260,542.4,522.5), new cjs.Rectangle(-270,-260,540,520)];


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


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.hero_1 = new lib.els_fullbod();
	this.hero_1.setTransform(438,484.8,1,1,0,0,0,65,174.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:285},0).wait(1).to({x:438},0).wait(1).to({x:565},0).wait(1).to({x:438},0).wait(1).to({x:285},0).wait(1).to({x:438},0).wait(1).to({x:565},0).wait(1));

	// hero
	this.container_1_mc = new lib.photo_frame_2_mc();
	this.container_1_mc.setTransform(575,280);

	this.container_2_mc = new lib.photo_frame_4_mc();
	this.container_2_mc.setTransform(225,280);

	this.container_3_mc = new lib.photo_frame_5_mc();
	this.container_3_mc.setTransform(575,280);

	this.container_4_mc = new lib.photo_frame_6_mc();
	this.container_4_mc.setTransform(225,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.container_1_mc}]},1).to({state:[]},1).to({state:[{t:this.container_2_mc}]},1).to({state:[]},1).to({state:[{t:this.container_3_mc}]},1).to({state:[]},1).to({state:[{t:this.container_4_mc}]},1).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.els_main_mc();
	this.instance.setTransform(409.8,327.5,1,1,0,0,0,36.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(193.3,38.9,433,577.3);
p.frameBounds = [rect];


(lib.hairstyle_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_7_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnGFClCQFClCHGAAQHIAAFBFCQFCFCAAHGQAAHIlCFBQlBFCnIAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnGFClCQFClCHGAAQHIAAFBFCQFCFCAAHGQAAHIlCFBQlBFCnIAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnGFClCQFClCHGAAQHIAAFBFCQFCFCAAHGQAAHIlCFBQlBFCnIAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnGFClCQFClCHGAAQHIAAFBFCQFCFCAAHGQAAHIlCFBQlBFCnIAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnGFClCQFClCHGAAQHIAAFBFCQFCFCAAHGQAAHIlCFBQlBFCnIAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_img();
	this.instance.setTransform(-110,-110,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnGFClCQFClCHGAAQHIAAFBFCQFCFCAAHGQAAHIlCFBQlBFCnIAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.filters_open_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hint
	this.instance = new lib.animation_hint_filter_mc();
	this.instance.setTransform(-105,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// animation
	this.instance_1 = new lib.filters_body_open_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.801},19).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.5,-164.5,239.5,189.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-194.5,-319.5,395.3,449.5);
p.frameBounds = [rect];


(lib.filters_animation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:0,exit:9});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// animation
	this.filters_container_mc = new lib.filters_container_mc();
	this.filters_container_mc.setTransform(400,730);

	this.timeline.addTween(cjs.Tween.get(this.filters_container_mc).to({y:450},9).to({y:730},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(205.5,410.5,395.3,449.5);
p.frameBounds = [rect, new cjs.Rectangle(205.5,379.4,395.3,449.5), new cjs.Rectangle(205.5,348.3,395.3,449.5), new cjs.Rectangle(205.5,317.2,395.3,449.5), new cjs.Rectangle(205.5,286.1,395.3,449.5), new cjs.Rectangle(205.5,255,395.3,449.5), new cjs.Rectangle(205.5,223.9,395.3,449.5), new cjs.Rectangle(205.5,192.7,395.3,449.5), new cjs.Rectangle(205.5,161.6,395.3,449.5), new cjs.Rectangle(205.5,130.5,395.3,449.5), new cjs.Rectangle(205.5,158.5,395.3,449.5), new cjs.Rectangle(205.5,186.5,395.3,449.5), new cjs.Rectangle(205.5,214.5,395.3,449.5), new cjs.Rectangle(205.5,242.5,395.3,449.5), new cjs.Rectangle(205.5,270.5,395.3,449.5), new cjs.Rectangle(205.5,298.5,395.3,449.5), new cjs.Rectangle(205.5,326.5,395.3,449.5), new cjs.Rectangle(205.5,354.5,395.3,449.5), new cjs.Rectangle(205.5,382.5,395.3,449.5), new cjs.Rectangle(205.5,410.5,395.3,449.5)];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(100,220);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-100,220);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450.5,-550,901,960.6);
p.frameBounds = [rect];


(lib.closet_makeup2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.hair_1 = new lib.hair_1_mc();
	this.hair_1.setTransform(150,-280);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(150,-280);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(150,-280);

	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(150,-280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1}]}).to({state:[{t:this.headdress_0}]},1).to({state:[{t:this.earrings_0}]},1).to({state:[{t:this.beads_0}]},1).wait(1));

	// options
	this.hair_7 = new lib.hairstyle_7_mc();
	this.hair_7.setTransform(280,110);

	this.hair_6 = new lib.hairstyle_6_mc();
	this.hair_6.setTransform(315,-55);

	this.hair_5 = new lib.hairstyle_5_mc();
	this.hair_5.setTransform(280,-215);

	this.hair_4 = new lib.hairstyle_4_mc();
	this.hair_4.setTransform(-280,110);

	this.hair_3 = new lib.hairstyle_3_mc();
	this.hair_3.setTransform(-315,-55);

	this.hair_2 = new lib.hairstyle_2_mc();
	this.hair_2.setTransform(-280,-215);

	this.headdress_6 = new lib.headdress_6_mc();
	this.headdress_6.setTransform(280,130);

	this.headdress_5 = new lib.headdress_5_mc();
	this.headdress_5.setTransform(315,-35);

	this.headdress_4 = new lib.headdress_4_mc();
	this.headdress_4.setTransform(280,-180);

	this.headdress_3 = new lib.headdress_3_mc();
	this.headdress_3.setTransform(-276,130,1,1,0,0,0,4,0);

	this.headdress_2 = new lib.headdress_2_mc();
	this.headdress_2.setTransform(-315,-40);

	this.headdress_1 = new lib.headdress_1_mc();
	this.headdress_1.setTransform(-280,-203);

	this.earrings_6 = new lib.earrings_6_mc();
	this.earrings_6.setTransform(280,152,1,1,10);

	this.earrings_5 = new lib.earrings_5_mc();
	this.earrings_5.setTransform(315,-17,1,1,10);

	this.earrings_4 = new lib.earrings_4_mc();
	this.earrings_4.setTransform(280,-177,1,1,10);

	this.earrings_3 = new lib.earrings_3_mc();
	this.earrings_3.setTransform(-280,145,1,1,-10);

	this.earrings_2 = new lib.earrings_2_mc();
	this.earrings_2.setTransform(-310,-16,1,1,-10);

	this.earrings_1 = new lib.earrings_1_mc();
	this.earrings_1.setTransform(-280,-168,1,1,-10);

	this.beads_6 = new lib.beads_6_mc();
	this.beads_6.setTransform(280,146);

	this.beads_5 = new lib.beads_5_mc();
	this.beads_5.setTransform(315,-15);

	this.beads_4 = new lib.beads_4_mc();
	this.beads_4.setTransform(280,-177);

	this.beads_3 = new lib.beads_3_mc();
	this.beads_3.setTransform(-280,142);

	this.beads_2 = new lib.beads_2_mc();
	this.beads_2.setTransform(-315,-15);

	this.beads_1 = new lib.beads_1_mc();
	this.beads_1.setTransform(-280,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3},{t:this.hair_4},{t:this.hair_5},{t:this.hair_6},{t:this.hair_7}]}).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.beads_1},{t:this.beads_2},{t:this.beads_3},{t:this.beads_4},{t:this.beads_5},{t:this.beads_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-425,-325,850,545);
p.frameBounds = [rect, new cjs.Rectangle(-415,-310,830,510), new cjs.Rectangle(-402.7,-310,810.4,554.7), new cjs.Rectangle(-395,-310,790,536)];


(lib.closet_for_clothes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.cloak_0 = new lib.cloak_0_mc();
	this.cloak_0.setTransform(-188,-200);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(-188,-200);

	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(-188,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cloak_0}]},11).to({state:[{t:this.shoes_0}]},3).to({state:[{t:this.wings_0}]},1).wait(1));

	// options
	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(0,-208);

	this.dress_2 = new lib.dress_2_mc();
	this.dress_2.setTransform(0,-208);

	this.dress_3 = new lib.dress_3_mc();
	this.dress_3.setTransform(0,-208);

	this.dress_4 = new lib.dress_4_mc();
	this.dress_4.setTransform(-70,-208);

	this.dress_5 = new lib.dress_5_mc();
	this.dress_5.setTransform(70,-208);

	this.dress_6 = new lib.dress_6_mc();
	this.dress_6.setTransform(0,-208);

	this.dress_7 = new lib.dress_7_mc();
	this.dress_7.setTransform(0,-208);

	this.dress_9 = new lib.dress_9_mc();
	this.dress_9.setTransform(0,-208);

	this.dress_10 = new lib.dress_10_mc();
	this.dress_10.setTransform(0,-208);

	this.dress_11 = new lib.dress_11_mc();
	this.dress_11.setTransform(0,-208);

	this.dress_12 = new lib.dress_12_mc();
	this.dress_12.setTransform(0,-208);

	this.dress_8 = new lib.dress_8_mc();
	this.dress_8.setTransform(0,-208);

	this.cloak_1 = new lib.cloak_1_mc();
	this.cloak_1.setTransform(0,-208);

	this.cloak_2 = new lib.cloak_2_mc();
	this.cloak_2.setTransform(0,-208);

	this.cloak_3 = new lib.cloak_3_mc();
	this.cloak_3.setTransform(0,-208);

	this.shoes_3 = new lib.shoes_3_mc();
	this.shoes_3.setTransform(0,80);

	this.shoes_2 = new lib.shoes_2_mc();
	this.shoes_2.setTransform(110,-110);

	this.shoes_1 = new lib.shoes_1_mc();
	this.shoes_1.setTransform(-110,-110);

	this.wings_3 = new lib.wings_3_mc();
	this.wings_3.setTransform(0,80);

	this.wings_2 = new lib.wings_2_mc();
	this.wings_2.setTransform(110,-110);

	this.wings_1 = new lib.wings_1_mc();
	this.wings_1.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_5},{t:this.dress_4}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_10}]},1).to({state:[{t:this.dress_11}]},1).to({state:[{t:this.dress_12}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.cloak_1}]},1).to({state:[{t:this.cloak_2}]},1).to({state:[{t:this.cloak_3}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3}]},1).to({state:[{t:this.wings_1},{t:this.wings_2},{t:this.wings_3}]},1).wait(1));

	// decor
	this.instance = new lib.stick_2_mc();
	this.instance.setTransform(0,-200);

	this.instance_1 = new lib.shelf_mc();
	this.instance_1.setTransform(0,-40);

	this.instance_2 = new lib.shelf_mc();
	this.instance_2.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.9,-215.7,437.7,476.2);
p.frameBounds = [rect, new cjs.Rectangle(-205,-215,410,490.5), new cjs.Rectangle(-216,-217,433,464.5), new cjs.Rectangle(-205,-219,410,472.5), new cjs.Rectangle(-205,-221,410,438.5), new cjs.Rectangle(-205.4,-220,430,532.5), new cjs.Rectangle(-205,-218,410,472.5), new cjs.Rectangle(-205,-216,410,471.5), new cjs.Rectangle(-205,-216,413.5,480.5), new cjs.Rectangle(-236,-218,473,440.5), new cjs.Rectangle(-205,-219.6,410,363.5), new cjs.Rectangle(-237.5,-218,471,447.5), new cjs.Rectangle(-229.5,-223.9,435,357.4), new cjs.Rectangle(-282,-219.9,548,452.4), rect=new cjs.Rectangle(-220,-220,440,410), rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_for_clothes();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.9,-215.7,437.7,476.2);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup2();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-425,-325,850,545);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.play_btn = new lib.next_btn();
	this.play_btn.setTransform(670,510,0.875,0.875);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(185,545,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.5;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.snowfall_comp_1 = new lib.snowfall_1_mc();
	this.snowfall_comp_1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp_1).wait(1));

	// bg
	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,290);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_1_mc.setTransform(400,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.els_makeup();
	this.hero_1.setTransform(433,394.8,1,1,0,0,0,65,174.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-329.4,901,1059.9);
p.frameBounds = [rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(70,423,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:-45,skewY:135,x:70,y:423,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-15,skewY:165,x:135,y:355,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:765,y:380,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-15,skewY:165,x:50,y:326,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:496,y:185,rotation:-15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-45,skewY:135,x:333,y:200,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:396,y:368,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-45,skewY:135,x:290,y:377,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:489,y:433,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-30,skewY:150,x:367,y:486,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:744,y:405,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:60,skewY:-120,x:500,y:355,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:300,y:355,rotation:-60}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:645,y:360,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:685,y:380,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:148,y:430,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_1_mc();
	this.object_2.setTransform(415,200,1,1,0,135,-45);

	this.object_3 = new lib.arrow_2_mc();
	this.object_3.setTransform(445,270.1,0.859,0.859,0,-45,135,0.1,0.1);

	this.object_4 = new lib.arrow_3_mc();
	this.object_4.setTransform(415,415,1,1,45);

	this.object_5 = new lib.arrow_4_mc();
	this.object_5.setTransform(415.1,460,0.798,0.797,0,135,-45,0.1,-0.1);

	this.object_7 = new lib.arrow_5_mc();
	this.object_7.setTransform(400,285,1,1,90);

	this.object_21 = new lib.arrow_6_mc();
	this.object_21.setTransform(280,275,1,1,0,-45,135);

	this.object_22 = new lib.arrow_7_mc();
	this.object_22.setTransform(510,275,1,1,45);

	this.object_26 = new lib.arrow_8_mc();
	this.object_26.setTransform(415.1,475,0.859,0.859,45,0,0,0.1,-0.1);

	this.object_27 = new lib.arrow_9_mc();
	this.object_27.setTransform(415.1,440.1,0.813,0.813,0,135,-45,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_7}]},1).to({state:[]},1).to({state:[{t:this.object_21}]},13).to({state:[{t:this.object_22}]},1).to({state:[]},1).to({state:[{t:this.object_26}]},3).to({state:[{t:this.object_27}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:50}},{t:this.instance,p:{x:396,y:350}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:50}},{t:this.instance,p:{x:396,y:350}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_mc();
	this.object_1.setTransform(62,447);

	this.object_6 = new lib.object_6_mc();
	this.object_6.setTransform(118,337);

	this.object_8 = new lib.object_8_mc();
	this.object_8.setTransform(800,450);

	this.object_9 = new lib.object_9_mc();
	this.object_9.setTransform(400,270);

	this.object_10 = new lib.object_10_mc();
	this.object_10.setTransform(51,322);

	this.object_11 = new lib.object_11_mc();
	this.object_11.setTransform(503,184);

	this.object_12 = new lib.object_12_mc();
	this.object_12.setTransform(330,206);

	this.object_13 = new lib.object_13_mc();
	this.object_13.setTransform(403,375);

	this.object_14 = new lib.object_14_mc();
	this.object_14.setTransform(284,385);

	this.object_15 = new lib.object_15_mc();
	this.object_15.setTransform(497,442);

	this.object_16 = new lib.object_16_mc();
	this.object_16.setTransform(359,494);

	this.object_17 = new lib.object_17_mc();
	this.object_17.setTransform(757,419);

	this.object_18 = new lib.object_18_mc();
	this.object_18.setTransform(490,330);

	this.object_19 = new lib.object_19_mc();
	this.object_19.setTransform(310,330);

	this.object_20 = new lib.object_20_mc();
	this.object_20.setTransform(650,370);

	this.object_23 = new lib.object_23_mc();
	this.object_23.setTransform(698,379);

	this.object_24 = new lib.object_24_mc();
	this.object_24.setTransform(400,280);

	this.object_25 = new lib.object_25_mc();
	this.object_25.setTransform(157,422);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_6}]},4).to({state:[]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).to({state:[{t:this.object_20}]},1).to({state:[]},1).to({state:[{t:this.object_23}]},2).to({state:[{t:this.object_24}]},1).to({state:[{t:this.object_25}]},1).to({state:[]},1).wait(2));

	// objects
	this.subject_1 = new lib.makeup2();
	this.subject_1.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_2 = new lib.makeup3();
	this.subject_2.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_3 = new lib.makeup4();
	this.subject_3.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_4 = new lib.makeup5();
	this.subject_4.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_5 = new lib.makeup6();
	this.subject_5.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_6 = new lib.makeup7();
	this.subject_6.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_7 = new lib.makeup8();
	this.subject_7.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_8 = new lib.makeup9();
	this.subject_8.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_9 = new lib.makeup10();
	this.subject_9.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_10 = new lib.makeup11();
	this.subject_10.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_11 = new lib.makeup12();
	this.subject_11.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_12 = new lib.makeup13();
	this.subject_12.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_13 = new lib.makeup14();
	this.subject_13.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_14 = new lib.makeup15();
	this.subject_14.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_15 = new lib.makeup16();
	this.subject_15.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_16 = new lib.makeup17();
	this.subject_16.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_17 = new lib.makeup18();
	this.subject_17.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_18 = new lib.makeup19();
	this.subject_18.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_19 = new lib.makeup20();
	this.subject_19.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_20 = new lib.makeup21();
	this.subject_20.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_21 = new lib.makeup22();
	this.subject_21.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_22 = new lib.makeup23();
	this.subject_22.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_23 = new lib.makeup24();
	this.subject_23.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_24 = new lib.makeup25();
	this.subject_24.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_25 = new lib.makeup26();
	this.subject_25.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_26 = new lib.makeup27();
	this.subject_26.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_27 = new lib.makeup28();
	this.subject_27.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).to({state:[{t:this.subject_22}]},1).to({state:[{t:this.subject_23}]},1).to({state:[{t:this.subject_24}]},1).to({state:[{t:this.subject_25}]},1).to({state:[{t:this.subject_26}]},1).to({state:[{t:this.subject_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-329.4,978.2,1234.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-32.5,-329.4,978.2,956.8), rect, rect, rect, new cjs.Rectangle(-32.5,-329.4,978.2,1235.9), new cjs.Rectangle(-32.5,-329.4,978.2,956.8), new cjs.Rectangle(-32.5,-329.4,996.4,1476.3), new cjs.Rectangle(-32.5,-139,941.6,795.4), new cjs.Rectangle(-32.5,-329.4,875.2,1060.9), rect=new cjs.Rectangle(-32.5,-329.4,875.2,932.6), rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-329.4,890.7,1122.7), rect=new cjs.Rectangle(-32.5,-329.4,875.2,932.6), rect, new cjs.Rectangle(-32.5,-329.4,875.2,1056.5), new cjs.Rectangle(-32.5,-329.4,875.2,932.6), new cjs.Rectangle(-32.5,-329.4,961.4,932.6), new cjs.Rectangle(-32.5,-329.4,875.2,1104.7), new cjs.Rectangle(-882.2,-139,1724.9,742.2), new cjs.Rectangle(-32.5,-329.4,875.2,1003.3), rect=new cjs.Rectangle(-32.5,-329.4,875.2,932.6), rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1308.1);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(190,20);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-190,20);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-550,500,810.5);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(100,220);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-100,220);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-440.5,-550,881,960.6);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(100,700);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(480,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(320,540);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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
	this.instance.alpha = 0.199;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
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
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.hero_1 = new lib.els_fullbod();
	this.hero_1.setTransform(225,489.8,1,1,0,0,0,65,174.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_1_mc.setTransform(560,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.7,-329.4,852.8,930.5);
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
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_1_mc.setTransform(400,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.els_halfbod();
	this.hero_1.setTransform(429,479.8,1,1,0,0,0,65,174.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.5,-329.4,881,1059.9);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,520,0.75,0.75);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
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
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.RedirectScreen();

	this.instance_9 = new lib.ResultScreen();

	this.instance_10 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(345,50);

	this.instance_11 = new lib.TrackMove();
	this.instance_11.setTransform(270,50);

	this.instance_12 = new lib.Cursor();
	this.instance_12.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_13 = new lib.OrientationLockScreen();

	this.instance_14 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_12},{t:this.instance_11},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, rect, new cjs.Rectangle(-200,-329.4,1200,1300.3), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,0,353,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect];


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