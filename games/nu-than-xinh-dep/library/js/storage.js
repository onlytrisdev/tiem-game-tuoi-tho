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
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"},
		{src:"library/images/storage_atlas_21.png", id:"storage_atlas_21"},
		{src:"library/images/storage_atlas_22.png", id:"storage_atlas_22"},
		{src:"library/images/storage_atlas_23.png", id:"storage_atlas_23"},
		{src:"library/images/storage_atlas_24.png", id:"storage_atlas_24"},
		{src:"library/images/storage_atlas_25.png", id:"storage_atlas_25"},
		{src:"library/images/storage_atlas_26.png", id:"storage_atlas_26"},
		{src:"library/images/storage_atlas_27.png", id:"storage_atlas_27"},
		{src:"library/images/storage_atlas_28.png", id:"storage_atlas_28"},
		{src:"library/images/storage_atlas_29.png", id:"storage_atlas_29"},
		{src:"library/images/storage_atlas_30.png", id:"storage_atlas_30"},
		{src:"library/images/storage_atlas_31.png", id:"storage_atlas_31"},
		{src:"library/images/storage_atlas_32.png", id:"storage_atlas_32"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,820,700]]},
		{name:"storage_atlas_5", frames: [[0,0,510,835],[512,0,467,802]]},
		{name:"storage_atlas_6", frames: [[0,0,455,816],[457,0,455,816]]},
		{name:"storage_atlas_7", frames: [[0,813,1200,300],[0,0,455,811],[457,0,467,749]]},
		{name:"storage_atlas_8", frames: [[0,0,413,823],[826,0,413,802],[415,0,409,814]]},
		{name:"storage_atlas_9", frames: [[0,0,413,802],[822,0,403,813],[415,0,405,813]]},
		{name:"storage_atlas_10", frames: [[810,0,403,812],[0,0,403,813],[405,0,403,813]]},
		{name:"storage_atlas_11", frames: [[829,0,369,816],[458,0,369,820],[0,0,456,692]]},
		{name:"storage_atlas_12", frames: [[742,0,359,833],[0,0,369,816],[371,0,369,811]]},
		{name:"storage_atlas_13", frames: [[0,0,355,824],[357,0,600,480],[357,482,600,480]]},
		{name:"storage_atlas_14", frames: [[0,0,600,480],[602,0,600,480],[0,482,600,480],[602,482,600,480]]},
		{name:"storage_atlas_15", frames: [[0,0,600,480],[0,482,600,480],[602,482,600,480],[602,0,600,480]]},
		{name:"storage_atlas_16", frames: [[0,0,441,646],[443,0,359,781],[0,783,543,478],[545,783,543,478]]},
		{name:"storage_atlas_17", frames: [[760,0,318,754],[0,799,1200,200],[0,480,758,317],[0,0,543,478]]},
		{name:"storage_atlas_18", frames: [[462,512,333,635],[797,0,333,635],[797,637,333,635],[0,0,305,730],[0,732,460,480],[307,0,420,510]]},
		{name:"storage_atlas_19", frames: [[553,259,289,633],[0,0,500,420],[844,259,249,730],[502,0,769,257],[0,422,551,338]]},
		{name:"storage_atlas_20", frames: [[0,0,313,573],[0,575,243,697],[860,691,313,490],[245,691,613,264],[315,232,782,225],[315,0,779,230],[315,459,757,230]]},
		{name:"storage_atlas_21", frames: [[0,0,135,1122],[639,0,423,329],[137,0,500,300],[987,331,247,533],[137,302,423,329],[562,331,423,329],[137,633,423,329],[137,964,423,329],[562,866,436,294]]},
		{name:"storage_atlas_22", frames: [[869,524,151,582],[656,645,211,427],[1022,524,194,449],[307,383,460,260],[769,0,460,260],[769,262,460,260],[0,0,335,381],[407,645,247,480],[337,0,380,260],[0,383,305,413],[684,1108,550,158],[0,798,405,301],[0,1127,682,156]]},
		{name:"storage_atlas_23", frames: [[1048,0,239,335],[524,644,255,324],[0,0,260,320],[0,322,260,320],[0,644,260,320],[0,966,260,320],[262,0,260,320],[524,0,260,320],[786,0,260,320],[262,322,260,320],[262,644,260,320],[262,966,260,320],[524,322,260,320],[786,322,260,320],[524,970,280,280],[781,644,280,280],[806,926,280,280]]},
		{name:"storage_atlas_24", frames: [[534,82,133,511],[669,375,241,281],[738,961,241,281],[776,658,241,281],[912,375,241,281],[1019,658,241,281],[981,941,241,281],[486,990,250,291],[738,82,250,291],[990,82,250,291],[282,375,250,291],[282,82,250,291],[524,668,250,291],[0,282,280,280],[0,564,280,280],[0,0,280,280],[282,0,940,80],[0,846,522,142],[0,990,484,151]]},
		{name:"storage_atlas_25", frames: [[0,0,241,281],[0,283,241,281],[0,566,241,281],[0,849,241,281],[243,0,241,281],[486,0,241,281],[729,0,241,281],[972,0,241,281],[243,283,241,281],[243,566,241,281],[243,849,241,281],[486,283,241,281],[729,283,241,281],[972,283,241,281],[486,566,241,281],[486,849,241,281],[729,566,241,281],[972,566,241,281],[729,849,241,281],[972,849,241,281]]},
		{name:"storage_atlas_26", frames: [[0,0,241,281],[0,283,241,280],[0,565,241,280],[0,847,241,280],[243,0,241,280],[486,0,241,280],[729,0,241,280],[972,0,241,280],[243,282,241,280],[243,564,241,280],[243,846,241,280],[486,282,241,280],[729,282,241,280],[972,282,241,280],[486,564,241,280],[486,846,241,280],[729,564,241,280],[972,564,241,280],[729,846,241,280],[972,846,241,280]]},
		{name:"storage_atlas_27", frames: [[0,0,241,280],[0,282,241,280],[0,564,241,280],[0,846,241,280],[243,0,241,280],[486,0,241,280],[729,0,241,280],[243,849,240,281],[485,565,240,281],[727,565,240,281],[969,566,240,281],[485,849,240,281],[727,848,240,281],[969,849,240,281],[243,566,240,281],[969,283,240,281],[727,282,240,281],[485,282,240,281],[243,282,240,281],[972,0,240,281]]},
		{name:"storage_atlas_28", frames: [[938,1076,251,214],[484,566,186,325],[1155,283,112,495],[874,625,245,227],[672,566,200,300],[484,893,200,300],[874,854,250,220],[686,1076,250,220],[0,0,240,281],[0,283,240,281],[0,566,240,281],[0,849,240,281],[242,0,240,281],[484,0,240,281],[726,0,240,281],[968,283,185,340],[968,0,240,281],[242,849,240,281],[242,283,240,281],[484,283,240,281],[726,283,240,281],[242,566,240,281]]},
		{name:"storage_atlas_29", frames: [[119,454,325,139],[776,688,200,202],[1220,0,70,510],[593,452,217,213],[1166,544,113,362],[1030,273,181,269],[119,595,196,217],[1012,544,152,294],[593,286,298,164],[0,262,325,157],[776,892,268,146],[633,1040,175,201],[848,0,180,284],[250,0,201,260],[453,0,202,258],[317,595,181,233],[273,830,182,217],[0,0,248,215],[327,262,264,190],[500,667,153,269],[457,938,174,213],[119,814,152,262],[657,0,189,271],[987,1111,176,189],[273,1049,174,201],[1046,908,188,201],[810,1040,175,200],[1030,0,188,271],[655,667,119,342],[893,286,117,400],[0,421,117,400],[0,823,117,340]]},
		{name:"storage_atlas_30", frames: [[456,611,193,146],[498,1014,194,125],[668,610,194,147],[414,0,203,161],[426,901,226,105],[619,0,180,180],[546,182,146,216],[1036,745,192,136],[364,163,180,180],[0,264,180,180],[364,345,150,209],[974,0,150,209],[1126,0,150,209],[694,188,150,209],[0,446,150,209],[152,446,150,209],[846,211,150,209],[694,399,150,209],[516,400,150,209],[304,556,150,209],[998,211,150,209],[1150,211,150,209],[0,657,150,209],[152,657,150,209],[0,868,150,209],[0,1079,150,209],[152,868,150,209],[152,1079,150,209],[1036,883,200,129],[304,1150,200,123],[304,1014,192,134],[864,663,340,80],[786,1014,90,255],[878,1014,90,255],[970,1014,90,255],[1062,1014,90,255],[1154,1014,90,255],[864,745,170,154],[1150,422,140,179],[801,0,171,186],[846,422,172,180],[0,82,180,180],[182,82,180,180],[182,264,180,180],[694,1014,90,255],[0,0,412,80],[304,767,120,198],[1020,422,128,239],[694,759,127,184]]},
		{name:"storage_atlas_31", frames: [[840,913,179,79],[92,104,168,122],[1115,763,112,117],[1005,364,136,125],[1143,364,108,156],[962,763,151,89],[92,0,204,102],[814,364,189,95],[529,757,165,92],[0,1110,208,106],[667,547,240,76],[954,0,224,90],[1049,522,143,117],[562,1150,120,120],[1031,641,120,120],[1153,641,120,120],[803,669,120,120],[596,851,120,120],[596,973,120,120],[684,1095,120,120],[718,791,120,120],[718,913,120,120],[1021,882,122,102],[298,0,80,124],[0,1028,280,80],[225,600,136,144],[0,0,90,255],[0,257,90,255],[0,514,90,255],[1230,150,50,210],[544,851,50,297],[392,0,150,142],[210,1110,180,120],[410,260,408,50],[820,208,408,50],[410,208,408,50],[820,156,408,50],[410,156,408,50],[544,104,408,50],[544,52,408,50],[544,0,408,50],[820,260,408,50],[410,312,408,50],[840,994,380,30],[681,625,120,120],[909,547,120,120],[840,791,120,120],[225,448,131,150],[92,836,131,150],[92,684,131,150],[92,532,131,150],[92,380,131,150],[225,296,131,150],[92,228,131,150],[358,364,150,129],[0,1232,408,50],[262,144,131,150],[225,746,150,129],[820,312,408,50],[0,771,90,255],[225,877,150,129],[363,495,150,129],[510,364,150,129],[377,626,150,129],[515,495,150,129],[662,364,150,129],[377,757,150,129],[377,888,150,129],[392,1019,150,129],[410,1150,150,129],[529,626,150,129],[667,495,380,50],[1180,0,117,148],[806,1035,120,120],[806,1157,120,120],[1194,522,100,100],[1145,882,100,100],[954,92,220,60],[1030,1026,240,40],[1030,1068,240,40],[1030,1110,240,40],[928,1152,240,40],[928,1194,240,40],[928,1236,240,40],[928,1026,100,100]]},
		{name:"storage_atlas_32", frames: [[327,397,117,60],[150,491,91,69],[0,42,84,113],[86,117,163,55],[52,478,96,66],[403,546,61,38],[243,543,73,46],[335,491,76,49],[144,562,69,42],[364,201,73,52],[208,417,70,36],[335,542,66,52],[52,546,90,50],[243,491,90,50],[461,42,48,48],[208,459,220,30],[104,606,40,40],[52,174,50,150],[0,309,50,150],[104,174,50,150],[156,174,50,150],[208,201,50,150],[52,326,50,150],[0,461,50,150],[104,326,50,150],[156,326,50,150],[260,201,50,150],[312,201,50,150],[52,598,50,50],[446,397,40,147],[403,586,50,41],[488,269,20,197],[467,630,40,40],[425,630,40,40],[383,629,40,40],[341,596,40,40],[299,596,40,40],[257,591,40,40],[215,591,40,40],[455,588,40,40],[466,546,40,40],[280,417,40,40],[453,117,50,150],[0,157,50,150],[0,613,50,50],[364,269,117,62],[86,42,123,73],[211,42,123,73],[336,42,123,73],[364,333,117,62],[208,353,117,62],[0,0,240,40],[242,0,240,40],[251,117,200,40],[251,159,200,40]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.accessory_back1 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_back2 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_back3 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left1 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left10 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left2 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left4 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left5 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left6 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left7 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left8 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_left9 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right1 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right10 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right11 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right12 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right13 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right14 = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right15 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right16 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right17 = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right2 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right3 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right4 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right5 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right6 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right7 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right8 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand_right9 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head1 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head10 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head11 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head2 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head3 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head4 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head5 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head6 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head7 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head8 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.accessory_head9 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.accessory_neck1 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.accessory_neck2 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessory_neck3 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.accessory_neck4 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.accessory_neck5 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.accessory_neck6 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.accessory_neck7 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.accessory_neck8 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.accessory_neck9 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyebrows1 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyebrows2 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyebrows3 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyebrows4 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyebrows5 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyebrows6 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyelashes1 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyelashes2 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyelashes3 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyelashes4 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyelashes5 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyelashes6 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ariel_eyes = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ariel_face = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ariel_fringe1 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ariel_fringe2 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ariel_fringe3 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ariel_fringe4 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ariel_fringe5 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ariel_fringe6 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ariel_hair1 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ariel_hair3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ariel_hair4 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ariel_hair5 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ariel_hair6 = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ariel_lips1 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ariel_lips2 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ariel_lips3 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ariel_lips4 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ariel_lips5 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ariel_lips6 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ariel_rouge_blesk = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ariel_shadow1 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ariel_shadow2 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ariel_shadow3 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ariel_shadow4 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.ariel_shadow5 = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.ariel_shadow6 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
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



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body5_1 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body5_2 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body5_3 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.clouds_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.clouds_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.clouds_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress1 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress10 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress11 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress12 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress13 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress14 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress15 = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress16 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress17 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress18 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress19 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress2 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress20 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress21 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress22 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress23 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress24 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress25 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress26 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress27 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress28 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress29 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress30 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress4 = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress5 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress6 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress7 = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress8 = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress9 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana1 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana2 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana3 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana4 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana5 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.elsa_rumana6 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.free_games_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.full_sreen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.full_sreen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_ariel1 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_ariel2 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_ariel3 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_ariel4 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_ariel5 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_ariel6 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_jas1 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_jas2 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_jas3 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_jas4 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_jas5 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_jas6 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_mulan1 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_mulan2 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_mulan3 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_mulan4 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_mulan5 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_mulan6 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hanger1 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hanger2 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.heroes_0_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyebrows1 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyebrows2 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyebrows3 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyebrows4 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyebrows5 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyebrows6 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyelashes1 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyelashes2 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyelashes3 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyelashes4 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyelashes5 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyelashes6 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_eyes = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_face = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_fringe1 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_fringe2 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_fringe3 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_fringe4 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_fringe5 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_fringe6 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_hair1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_hair2 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_hair4 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_hair6 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips1 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips2 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips3 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips4 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips5 = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips6 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_shadow1 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_shadow2 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_shadow3 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_shadow4 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_shadow5 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_shadow6 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.lipstick0 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.lipstick1 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.lipstick15 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.lipstick2 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.lipstick21 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.lipstick23 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.lipstick3 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.lipstick30 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.lipstick5 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.lipstick6 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.lipstick7 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mascara1 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.mascara10 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.mascara18 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.mascara2 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.mascara3 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.mascara6 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.mascara8 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.mascara9 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyebrows1 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyebrows2 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyebrows3 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyebrows4 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyebrows5 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyebrows6 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyelashes1 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyelashes2 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyelashes3 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyelashes4 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyelashes5 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyelashes6 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mulan_eyes = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.mulan_face = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.mulan_fringe1 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.mulan_fringe2 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.mulan_fringe3 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.mulan_fringe4 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.mulan_fringe5 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.mulan_fringe6 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.mulan_hair1 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.mulan_hair2 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.mulan_hair3 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.mulan_hair4 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.mulan_hair5 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.mulan_lips1 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.mulan_lips2 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.mulan_lips3 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.mulan_lips4 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mulan_lips5 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.mulan_lips6 = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.mulan_shadows1 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.mulan_shadows2 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.mulan_shadows3 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.mulan_shadows4 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.mulan_shadows5 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.mulan_shadows6 = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.pencil10 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.pencil11 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.pencil13 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.pencil14 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.pencil2 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.pencil4 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.pencil5 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.pencil6 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.pencil7 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.pencil8 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pipe_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.pl1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pl10 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pl11 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pl2 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pl3 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pl4 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pl5 = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pl6 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pl7 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pl8 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pl9 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.rouge1 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.rouge2 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.rouge3 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.rouge4 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.rouge5 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.rouge6 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.set_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.set_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.set_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.set_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.set_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.set_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.set_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.set_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.set_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.set_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.shadows1 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.shadows15 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.shadows17 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.shadows19 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.shadows21 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.shadows25 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.shadows26 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.shadows3 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.shadows6 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.shadows7 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.shadows8 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.shelf_1_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.shelf_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.shoes1 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.shoes10 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.shoes11 = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.shoes12 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.shoes13 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.shoes14 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.shoes2 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.shoes3 = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.shoes4 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.shoes5 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.shoes6 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.shoes7 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.shoes8 = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.shoes9 = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.sound_3_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.sound_4_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.table_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.text_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.title_en_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wing1 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.wing10 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wing11 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wing12 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wing13 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wing14 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wing15 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wing16 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wing2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.wing3 = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.wing4 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wing5 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.wing6 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.wing7 = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.wing8 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wing9 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
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


(lib.wings_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing16();
	this.instance.setTransform(-132.1,-81,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0mD7II8uAIL5jZIKMDaIGsG8IE7QAMgsDAAng");
	this.shape.setTransform(1.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.6,-86.7,282,172.8);
p.frameBounds = [rect];


(lib.wings_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing15();
	this.instance.setTransform(-65.6,-57.7,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqII+IAAx8IURAAIAAR8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.6,-57.7,131.3,115.5);
p.frameBounds = [rect];


(lib.wings_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing14();
	this.instance.setTransform(-65.6,-57.7,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqII/IAAx9IURAAIAAR9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.6,-57.7,131.3,115.5);
p.frameBounds = [rect];


(lib.wings_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing13();
	this.instance.setTransform(-65.6,-57.7,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqII+IAAx7IURAAIAAR7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.6,-57.7,131.3,115.5);
p.frameBounds = [rect];


(lib.wings_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing12();
	this.instance.setTransform(-163.4,-54.6,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuXI7Iogm+IkAqOII4giISBLWIRfrzIJXBRInFMoIn/Eog");
	this.shape.setTransform(2.4,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.7,-60,344.2,118.7);
p.frameBounds = [rect];


(lib.wings_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing11();
	this.instance.setTransform(-161,-67.3,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0YCoImTr3IEhiHIWjIqIVFokIFOCeIoRMTIsZHsIsXAKg");
	this.shape.setTransform(0.6,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.2,-75.2,341.8,145.5);
p.frameBounds = [rect];


(lib.wings_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing10();
	this.instance.setTransform(-130.2,-56.1,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsSG2IpdrdICik+MAlxAAEIDMFZIntJaInHEGItJAOg");
	this.shape.setTransform(-0.6,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.8,-62.8,278.4,122.8);
p.frameBounds = [rect];


(lib.wings_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing9();
	this.instance.setTransform(-160.8,-48.9,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bGtIAAtaMAu3AAAIAANag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160.8,-48.9,321.7,97.8);
p.frameBounds = [rect];


(lib.wings_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing8();
	this.instance.setTransform(-165.5,-48.8,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bGuIAAtbMAu3AAAIAANbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.5,-48.8,331.1,97.8);
p.frameBounds = [rect];


(lib.wings_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing7();
	this.instance.setTransform(-92.6,-62.4,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bJXIAAytMAu3AAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-62.4,300,125);
p.frameBounds = [rect];


(lib.wings_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing6();
	this.instance.setTransform(-144.9,-33.1,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bFeIAAq7MAu3AAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-35,300,70);
p.frameBounds = [rect];


(lib.wings_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing5();
	this.instance.setTransform(-86,-63.9,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bKJIAA0RMAu3AAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-65,300,130);
p.frameBounds = [rect];


(lib.wings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing4();
	this.instance.setTransform(-166.1,-47.8,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bGtIAAtZMAu3AAAIAANZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.1,-47.8,332.4,95.6);
p.frameBounds = [rect];


(lib.wings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing3();
	this.instance.setTransform(-133.5,-41.6,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bGuIAAtbMAu3AAAIAANbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-43,300,86);
p.frameBounds = [rect];


(lib.wings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing2();
	this.instance.setTransform(-151.7,-43.6,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bGtIAAtZMAu3AAAIAANZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.7,-43.6,303.5,87.2);
p.frameBounds = [rect];


(lib.wings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1();
	this.instance.setTransform(-144,-39.2,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bGtIAAtZMAu3AAAIAANZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-43,300,86);
p.frameBounds = [rect];


(lib.wing_mulan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1();
	this.instance.setTransform(-191.3,-51.1,0.72,0.72);

	this.instance_1 = new lib.wing2();
	this.instance_1.setTransform(-201.3,-56.3,0.72,0.72);

	this.instance_2 = new lib.wing3();
	this.instance_2.setTransform(-180.2,-64.3,0.72,0.72);

	this.instance_3 = new lib.wing4();
	this.instance_3.setTransform(-281.9,-104.2,0.72,0.72);

	this.instance_4 = new lib.wing5();
	this.instance_4.setTransform(-147.6,-127.6,0.72,0.72);

	this.instance_5 = new lib.wing6();
	this.instance_5.setTransform(-245.1,-51.3,0.72,0.72);

	this.instance_6 = new lib.wing7();
	this.instance_6.setTransform(-157.4,-154.3,0.72,0.72);

	this.instance_7 = new lib.wing8();
	this.instance_7.setTransform(-274.1,-102.5,0.72,0.72);

	this.instance_8 = new lib.wing9();
	this.instance_8.setTransform(-272.8,-92.6,0.72,0.72);

	this.instance_9 = new lib.wing10();
	this.instance_9.setTransform(-221.7,-98.4,0.72,0.72);

	this.instance_10 = new lib.wing11();
	this.instance_10.setTransform(-277.6,-101,0.72,0.72);

	this.instance_11 = new lib.wing12();
	this.instance_11.setTransform(-279.3,-123,0.72,0.72);

	this.instance_12 = new lib.wing13();
	this.instance_12.setTransform(-187,-139,0.72,0.72);

	this.instance_13 = new lib.wing14();
	this.instance_13.setTransform(-187,-139,0.72,0.72);

	this.instance_14 = new lib.wing15();
	this.instance_14.setTransform(-187,-139,0.72,0.72);

	this.instance_15 = new lib.wing16();
	this.instance_15.setTransform(-199,-42.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191.3,-51.1,375.9,102.3);
p.frameBounds = [rect, new cjs.Rectangle(-201.3,-56.3,396,113.8), new cjs.Rectangle(-180.2,-64.3,348.5,108.7), new cjs.Rectangle(-281.9,-104.2,563.1,162), new cjs.Rectangle(-147.6,-127.6,291.6,216.7), new cjs.Rectangle(-245.1,-51.3,491.1,112.3), new cjs.Rectangle(-157.4,-154.3,313.9,211.7), new cjs.Rectangle(-274.1,-102.5,560.9,165.6), new cjs.Rectangle(-272.8,-92.6,545.1,165.6), new cjs.Rectangle(-221.7,-98.4,441.4,190.1), new cjs.Rectangle(-277.6,-101,545.8,228.3), new cjs.Rectangle(-279.3,-123,553.7,185.1), rect=new cjs.Rectangle(-187,-139,391,344.2), rect, rect, new cjs.Rectangle(-199,-42.1,396.7,243.4), null];


(lib.wing_jasmine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1();
	this.instance.setTransform(-191.3,-51.1,0.72,0.72);

	this.instance_1 = new lib.wing2();
	this.instance_1.setTransform(-201.3,-56.3,0.72,0.72);

	this.instance_2 = new lib.wing3();
	this.instance_2.setTransform(-180.2,-64.3,0.72,0.72);

	this.instance_3 = new lib.wing4();
	this.instance_3.setTransform(-281.9,-104.2,0.72,0.72);

	this.instance_4 = new lib.wing5();
	this.instance_4.setTransform(-147.6,-127.6,0.72,0.72);

	this.instance_5 = new lib.wing6();
	this.instance_5.setTransform(-245.1,-51.3,0.72,0.72);

	this.instance_6 = new lib.wing7();
	this.instance_6.setTransform(-157.4,-154.3,0.72,0.72);

	this.instance_7 = new lib.wing8();
	this.instance_7.setTransform(-274.1,-102.5,0.72,0.72);

	this.instance_8 = new lib.wing9();
	this.instance_8.setTransform(-272.8,-92.6,0.72,0.72);

	this.instance_9 = new lib.wing10();
	this.instance_9.setTransform(-221.7,-98.4,0.72,0.72);

	this.instance_10 = new lib.wing11();
	this.instance_10.setTransform(-277.6,-101,0.72,0.72);

	this.instance_11 = new lib.wing12();
	this.instance_11.setTransform(-279.3,-123,0.72,0.72);

	this.instance_12 = new lib.wing13();
	this.instance_12.setTransform(-187,-139,0.72,0.72);

	this.instance_13 = new lib.wing14();
	this.instance_13.setTransform(-187,-139,0.72,0.72);

	this.instance_14 = new lib.wing15();
	this.instance_14.setTransform(-187,-139,0.72,0.72);

	this.instance_15 = new lib.wing16();
	this.instance_15.setTransform(-199,-42.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191.3,-51.1,375.9,102.3);
p.frameBounds = [rect, new cjs.Rectangle(-201.3,-56.3,396,113.8), new cjs.Rectangle(-180.2,-64.3,348.5,108.7), new cjs.Rectangle(-281.9,-104.2,563.1,162), new cjs.Rectangle(-147.6,-127.6,291.6,216.7), new cjs.Rectangle(-245.1,-51.3,491.1,112.3), new cjs.Rectangle(-157.4,-154.3,313.9,211.7), new cjs.Rectangle(-274.1,-102.5,560.9,165.6), new cjs.Rectangle(-272.8,-92.6,545.1,165.6), new cjs.Rectangle(-221.7,-98.4,441.4,190.1), new cjs.Rectangle(-277.6,-101,545.8,228.3), new cjs.Rectangle(-279.3,-123,553.7,185.1), rect=new cjs.Rectangle(-187,-139,391,344.2), rect, rect, new cjs.Rectangle(-199,-42.1,396.7,243.4), null];


(lib.wing_ariel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1();
	this.instance.setTransform(-191.3,-51.1,0.72,0.72);

	this.instance_1 = new lib.wing2();
	this.instance_1.setTransform(-201.3,-56.3,0.72,0.72);

	this.instance_2 = new lib.wing3();
	this.instance_2.setTransform(-180.2,-64.3,0.72,0.72);

	this.instance_3 = new lib.wing4();
	this.instance_3.setTransform(-281.9,-104.2,0.72,0.72);

	this.instance_4 = new lib.wing5();
	this.instance_4.setTransform(-147.6,-127.6,0.72,0.72);

	this.instance_5 = new lib.wing6();
	this.instance_5.setTransform(-245.1,-51.3,0.72,0.72);

	this.instance_6 = new lib.wing7();
	this.instance_6.setTransform(-157.4,-154.3,0.72,0.72);

	this.instance_7 = new lib.wing8();
	this.instance_7.setTransform(-274.1,-102.5,0.72,0.72);

	this.instance_8 = new lib.wing9();
	this.instance_8.setTransform(-272.8,-92.6,0.72,0.72);

	this.instance_9 = new lib.wing10();
	this.instance_9.setTransform(-221.7,-98.4,0.72,0.72);

	this.instance_10 = new lib.wing11();
	this.instance_10.setTransform(-277.6,-101,0.72,0.72);

	this.instance_11 = new lib.wing12();
	this.instance_11.setTransform(-279.3,-123,0.72,0.72);

	this.instance_12 = new lib.wing13();
	this.instance_12.setTransform(-187,-139,0.72,0.72);

	this.instance_13 = new lib.wing14();
	this.instance_13.setTransform(-187,-139,0.72,0.72);

	this.instance_14 = new lib.wing15();
	this.instance_14.setTransform(-187,-139,0.72,0.72);

	this.instance_15 = new lib.wing16();
	this.instance_15.setTransform(-199,-42.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191.3,-51.1,375.9,102.3);
p.frameBounds = [rect, new cjs.Rectangle(-201.3,-56.3,396,113.8), new cjs.Rectangle(-180.2,-64.3,348.5,108.7), new cjs.Rectangle(-281.9,-104.2,563.1,162), new cjs.Rectangle(-147.6,-127.6,291.6,216.7), new cjs.Rectangle(-245.1,-51.3,491.1,112.3), new cjs.Rectangle(-157.4,-154.3,313.9,211.7), new cjs.Rectangle(-274.1,-102.5,560.9,165.6), new cjs.Rectangle(-272.8,-92.6,545.1,165.6), new cjs.Rectangle(-221.7,-98.4,441.4,190.1), new cjs.Rectangle(-277.6,-101,545.8,228.3), new cjs.Rectangle(-279.3,-123,553.7,185.1), rect=new cjs.Rectangle(-187,-139,391,344.2), rect, rect, new cjs.Rectangle(-199,-42.1,396.7,243.4), null];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-210,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-255,420,510);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-230,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-240,460,480);
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


(lib.table_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.table_img();
	this.instance.setTransform(-470,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-470,-40,940,80);
p.frameBounds = [rect];


(lib.shoes_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes14();
	this.instance.setTransform(-35.9,-21.3,0.585,0.585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBErIAApWIODAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.shoes_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes13();
	this.instance.setTransform(-36,-21.3,0.585,0.585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBErIAApWIODAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.shoes_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes12();
	this.instance.setTransform(-35.9,-21.3,0.585,0.585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBErIAApWIODAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.shoes_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes11();
	this.instance.setTransform(-34.2,-43.2,0.585,0.585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOHzIAAvmIMdAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-50,80,100);
p.frameBounds = [rect];


(lib.shoes_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes10();
	this.instance.setTransform(-26,-75,0.439,0.439);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldMfIAA4+IK7AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-80,70,160);
p.frameBounds = [rect];


(lib.shoes_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes9();
	this.instance.setTransform(-26,-75,0.441,0.441);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldMfIAA4+IK7AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-80,70,160);
p.frameBounds = [rect];


(lib.shoes_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes8();
	this.instance.setTransform(-30.9,-44.7,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOHzIAAvmIMdAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-50,80,100);
p.frameBounds = [rect];


(lib.shoes_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes7();
	this.instance.setTransform(-27,-50,0.418,0.418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldImIAAxKIK7AAIAARKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-55,70,110);
p.frameBounds = [rect];


(lib.shoes_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes6();
	this.instance.setTransform(-41.5,-68.5,0.692,0.692);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBLuIAA3aIODAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-75,90,150);
p.frameBounds = [rect];


(lib.shoes_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes5();
	this.instance.setTransform(-29,-100,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldQZMAAAggxIK7AAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-105,70,210);
p.frameBounds = [rect];


(lib.shoes_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes4();
	this.instance.setTransform(-29,-100,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldQZMAAAggxIK7AAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-105,70,210);
p.frameBounds = [rect];


(lib.shoes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes3();
	this.instance.setTransform(-40.5,-21.4,0.692,0.692);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzEsIAApXIPnAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.shoes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes2();
	this.instance.setTransform(-40.5,-21.4,0.692,0.692);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzEsIAApXIPnAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.shoes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes1();
	this.instance.setTransform(-40.5,-21.4,0.692,0.692);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzEsIAApXIPnAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.shoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shoes
	this.instance = new lib.shoes1();
	this.instance.setTransform(-42.1,-20.8,0.72,0.72);

	this.instance_1 = new lib.shoes2();
	this.instance_1.setTransform(-42.1,-20.8,0.72,0.72);

	this.instance_2 = new lib.shoes3();
	this.instance_2.setTransform(-42.1,-20.8,0.72,0.72);

	this.instance_3 = new lib.shoes4();
	this.instance_3.setTransform(-42.6,-263.3,0.72,0.72);

	this.instance_4 = new lib.shoes5();
	this.instance_4.setTransform(-42.6,-263.3,0.72,0.72);

	this.instance_5 = new lib.shoes6();
	this.instance_5.setTransform(-42.6,-120.3,0.72,0.72);

	this.instance_6 = new lib.shoes7();
	this.instance_6.setTransform(-49.6,-148.8,0.72,0.72);

	this.instance_7 = new lib.shoes8();
	this.instance_7.setTransform(-46.6,-107.8,0.72,0.72);

	this.instance_8 = new lib.shoes9();
	this.instance_8.setTransform(-42.1,-220.8,0.72,0.72);

	this.instance_9 = new lib.shoes10();
	this.instance_9.setTransform(-43.6,-214.8,0.72,0.72);

	this.instance_10 = new lib.shoes11();
	this.instance_10.setTransform(-41.6,-85.3,0.72,0.72);

	this.instance_11 = new lib.shoes12();
	this.instance_11.setTransform(-43.1,-30.3,0.72,0.72);

	this.instance_12 = new lib.shoes13();
	this.instance_12.setTransform(-43.1,-30.3,0.72,0.72);

	this.instance_13 = new lib.shoes14();
	this.instance_13.setTransform(-43.1,-30.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.1,-20.8,84.3,44.7);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-42.6,-263.3,84.3,288), rect, new cjs.Rectangle(-42.6,-120.3,86.4,142.6), new cjs.Rectangle(-49.6,-148.8,92.2,172.1), new cjs.Rectangle(-46.6,-107.8,91.4,132.5), new cjs.Rectangle(-42.1,-220.8,84.3,244.8), new cjs.Rectangle(-43.6,-214.8,85.7,246.3), new cjs.Rectangle(-41.6,-85.3,84.3,106.6), rect=new cjs.Rectangle(-43.1,-30.3,88.6,52.6), rect, rect, null];


(lib.shelf_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_2_img();
	this.instance.setTransform(-183,-24,0.963,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183,-24,366,48.2);
p.frameBounds = [rect];


(lib.shelf_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_1_img();
	this.instance.setTransform(-206,-40,0.998,0.997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206,-40,411,79.8);
p.frameBounds = [rect];


(lib.shadows_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows26();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows21();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows8();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows8();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows15();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows6();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows7();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows1();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows3();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows6();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows19();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows19();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows17();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows7();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows25();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows19();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows6();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows1();
	this.instance.setTransform(-48.4,-41.6,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
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


(lib.right_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right17();
	this.instance.setTransform(138.3,-173.3,0.392,0.392,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A7HV6MAo0goJIMnl8IA0BkIkbI7Mgv6Al4g");
	this.shape.setTransform(-9.3,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182.9,-173.3,358.4,346.7);
p.frameBounds = [rect];


(lib.right_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right16();
	this.instance.setTransform(-47.7,-96.5,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmJP/Ih11bIF1qqIJbANIAtKkItQVcg");
	this.shape.setTransform(2.5,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-101.5,102.4,206.3);
p.frameBounds = [rect];


(lib.right_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right15();
	this.instance.setTransform(-40.9,-60.8,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnlJGICgu0IH2kZICpADICMCeIrcRug");
	this.shape.setTransform(1.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-63.5,97.3,129.6);
p.frameBounds = [rect];


(lib.right_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right14();
	this.instance.setTransform(-54,-75.8,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoyLaIAaohIQKvSIBBAqIoRUlIoADkg");
	this.shape.setTransform(-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-79.2,112.7,158.9);
p.frameBounds = [rect];


(lib.right_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right13();
	this.instance.setTransform(-25.3,-26.4,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqFeIAAq7IJVAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-35,60,70);
p.frameBounds = [rect];


(lib.right_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right12();
	this.instance.setTransform(-43.9,-33.2,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.right_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right11();
	this.instance.setTransform(-43.9,-28.2,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.right_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right10();
	this.instance.setTransform(-43.6,-33,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.right_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right9();
	this.instance.setTransform(-44.3,-49.1,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzIlIAAxJIPnAAIAARJg");
	this.shape.setTransform(0.5,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-53,100,110);
p.frameBounds = [rect];


(lib.right_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right8();
	this.instance.setTransform(-19,-25.5,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqErIAApVIJVAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.right_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right7();
	this.instance.setTransform(-34.1,-20.1,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOErIAApVIMdAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-30,80,60);
p.frameBounds = [rect];


(lib.right_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right6();
	this.instance.setTransform(-45.9,-36.4,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnyGPIAAseIPmAAIAAMeg");
	this.shape.setTransform(0.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.2,-39.6,100,80);
p.frameBounds = [rect];


(lib.right_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right5();
	this.instance.setTransform(-20.6,-15.6,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqErIAApVIJVAAIAAJVg");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-35,60,60);
p.frameBounds = [rect];


(lib.right_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right4();
	this.instance.setTransform(-26.4,-13.6,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqErIAApVIJVAAIAAJVg");
	this.shape.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-32.5,60,60);
p.frameBounds = [rect];


(lib.right_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right3();
	this.instance.setTransform(-24.4,-35.3,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkrGPIAAseIJXAAIAAMeg");
	this.shape.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.7,-40,60,80);
p.frameBounds = [rect];


(lib.right_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right2();
	this.instance.setTransform(-30.7,-28.3,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldGPIAAseIK7AAIAAMeg");
	this.shape.setTransform(0.4,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.6,-41.4,70,80);
p.frameBounds = [rect];


(lib.right_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right1();
	this.instance.setTransform(-38,-27.6,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBFeIAAq7IODAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-35,90,70);
p.frameBounds = [rect];


(lib.pl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl1();
	this.instance.setTransform(-300,-240);

	this.instance_1 = new lib.pl2();
	this.instance_1.setTransform(-300,-240);

	this.instance_2 = new lib.pl3();
	this.instance_2.setTransform(-300,-240);

	this.instance_3 = new lib.pl4();
	this.instance_3.setTransform(-300,-240);

	this.instance_4 = new lib.pl5();
	this.instance_4.setTransform(-300,-240);

	this.instance_5 = new lib.pl6();
	this.instance_5.setTransform(-300,-240);

	this.instance_6 = new lib.pl7();
	this.instance_6.setTransform(-300,-240);

	this.instance_7 = new lib.pl8();
	this.instance_7.setTransform(-300,-240);

	this.instance_8 = new lib.pl9();
	this.instance_8.setTransform(-300,-240);

	this.instance_9 = new lib.pl10();
	this.instance_9.setTransform(-300,-240);

	this.instance_10 = new lib.pl11();
	this.instance_10.setTransform(-162.1,-245.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-240,600,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-162.1,-245.7,328.3,498.3), null];


(lib.pipe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pipe_img();
	this.instance.setTransform(-190,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-15,380,30);
p.frameBounds = [rect];


(lib.mulan_shadows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mulan_shadows1();
	this.instance.setTransform(-48,-56.2,0.4,0.4);

	this.instance_1 = new lib.mulan_shadows2();
	this.instance_1.setTransform(-48,-56.2,0.4,0.4);

	this.instance_2 = new lib.mulan_shadows3();
	this.instance_2.setTransform(-48,-56.2,0.4,0.4);

	this.instance_3 = new lib.mulan_shadows4();
	this.instance_3.setTransform(-48,-56.2,0.4,0.4);

	this.instance_4 = new lib.mulan_shadows5();
	this.instance_4.setTransform(-48,-56.2,0.4,0.4);

	this.instance_5 = new lib.mulan_shadows6();
	this.instance_5.setTransform(-48,-56.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-56.2,96,112.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.mulan_rumana_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.ariel_rouge_blesk();
	this.instance.setTransform(-47.6,-57.4,0.392,0.392);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(1));

	// Слой 1
	this.instance_1 = new lib.elsa_rumana1();
	this.instance_1.setTransform(-45,-52.4,0.36,0.36);

	this.instance_2 = new lib.elsa_rumana2();
	this.instance_2.setTransform(-45,-52.4,0.36,0.36);

	this.instance_3 = new lib.elsa_rumana3();
	this.instance_3.setTransform(-45,-52.4,0.36,0.36);

	this.instance_4 = new lib.elsa_rumana4();
	this.instance_4.setTransform(-45,-52.4,0.36,0.36);

	this.instance_5 = new lib.elsa_rumana5();
	this.instance_5.setTransform(-45,-52.4,0.36,0.36);

	this.instance_6 = new lib.elsa_rumana6();
	this.instance_6.setTransform(-45,-52.4,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.6,-57.4,94.6,110.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.mulan_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mulan_lips1();
	this.instance.setTransform(-48,-56.2,0.4,0.4);

	this.instance_1 = new lib.mulan_lips2();
	this.instance_1.setTransform(-48,-56.2,0.4,0.4);

	this.instance_2 = new lib.mulan_lips3();
	this.instance_2.setTransform(-48,-56.2,0.4,0.4);

	this.instance_3 = new lib.mulan_lips4();
	this.instance_3.setTransform(-48,-56.2,0.4,0.4);

	this.instance_4 = new lib.mulan_lips5();
	this.instance_4.setTransform(-48,-56.2,0.4,0.4);

	this.instance_5 = new lib.mulan_lips6();
	this.instance_5.setTransform(-48,-56.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-56.2,96,112.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.mulan_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.mulan_hair1();
	this.instance.setTransform(-67.3,-96,0.72,0.72);

	this.instance_1 = new lib.mulan_hair2();
	this.instance_1.setTransform(-49.3,-123,0.72,0.72);

	this.instance_2 = new lib.mulan_hair3();
	this.instance_2.setTransform(-63.4,-98,0.72,0.72);

	this.instance_3 = new lib.mulan_hair4();
	this.instance_3.setTransform(-63.3,-95,0.72,0.72);

	this.instance_4 = new lib.mulan_hair5();
	this.instance_4.setTransform(-67.3,-96,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.3,-96,135.4,195.1);
p.frameBounds = [rect, new cjs.Rectangle(-49.3,-123,100.8,128.9), new cjs.Rectangle(-63.4,-98,123.1,133.9), new cjs.Rectangle(-63.3,-95,123.9,129.6), new cjs.Rectangle(-67.3,-96,133.2,244.8), null];


(lib.mulan_fringe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mulan_fringe1();
	this.instance.setTransform(-68,-97.5,0.72,0.72);

	this.instance_1 = new lib.mulan_fringe2();
	this.instance_1.setTransform(-63,-122.5,0.72,0.72);

	this.instance_2 = new lib.mulan_fringe3();
	this.instance_2.setTransform(-66,-99.5,0.72,0.72);

	this.instance_3 = new lib.mulan_fringe4();
	this.instance_3.setTransform(-63,-111.5,0.72,0.72);

	this.instance_4 = new lib.mulan_fringe5();
	this.instance_4.setTransform(-68,-97.5,0.72,0.72);

	this.instance_5 = new lib.mulan_fringe6();
	this.instance_5.setTransform(-63,-130.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-97.5,136.1,195.1);
p.frameBounds = [rect, new cjs.Rectangle(-63,-122.5,122.4,110.9), new cjs.Rectangle(-66,-99.5,126.7,136.1), new cjs.Rectangle(-63,-111.5,125.3,144.7), new cjs.Rectangle(-68,-97.5,135.4,144.7), new cjs.Rectangle(-63,-130.5,126,144)];


(lib.mulan_eyelashes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mulan_eyelashes1();
	this.instance.setTransform(-48,-56.2,0.4,0.4);

	this.instance_1 = new lib.mulan_eyelashes2();
	this.instance_1.setTransform(-48,-56.2,0.4,0.4);

	this.instance_2 = new lib.mulan_eyelashes3();
	this.instance_2.setTransform(-48,-56.2,0.4,0.4);

	this.instance_3 = new lib.mulan_eyelashes4();
	this.instance_3.setTransform(-48,-56.2,0.4,0.4);

	this.instance_4 = new lib.mulan_eyelashes5();
	this.instance_4.setTransform(-48,-56.2,0.4,0.4);

	this.instance_5 = new lib.mulan_eyelashes6();
	this.instance_5.setTransform(-48,-56.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-56.2,96,112.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.mulan_eyebrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mulan_eyebrows1();
	this.instance.setTransform(-48,-56.2,0.4,0.4);

	this.instance_1 = new lib.mulan_eyebrows2();
	this.instance_1.setTransform(-48,-56.2,0.4,0.4);

	this.instance_2 = new lib.mulan_eyebrows3();
	this.instance_2.setTransform(-48,-56.2,0.4,0.4);

	this.instance_3 = new lib.mulan_eyebrows4();
	this.instance_3.setTransform(-48,-56.2,0.4,0.4);

	this.instance_4 = new lib.mulan_eyebrows5();
	this.instance_4.setTransform(-48,-56.2,0.4,0.4);

	this.instance_5 = new lib.mulan_eyebrows6();
	this.instance_5.setTransform(-48,-56.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-56.2,96,112.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lips_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick5();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick1();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick7();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick15();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick3();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick15();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick1();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick23();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick2();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick7();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick21();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick30();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick6();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick0();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick21();
	this.instance.setTransform(-17.6,-52.8,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-65,100,130);
p.frameBounds = [rect];


(lib.left_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left10();
	this.instance.setTransform(-41.4,-72.4,0.446,0.446);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-72.4,82.9,144.8);
p.frameBounds = [rect];


(lib.left_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left9();
	this.instance.setTransform(-29.6,-113.8,0.446,0.446);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al1qJIEToAIB1gYIFjGuIkNeCIjCATg");
	this.shape.setTransform(1.2,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.2,-120.3,75,237.4);
p.frameBounds = [rect];


(lib.left_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left8();
	this.instance.setTransform(-84.4,-0.3,0.446,0.446,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDErIAApWIcHAAIAAJWg");
	this.shape.setTransform(1.5,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-48.3,180,96.7);
p.frameBounds = [rect];


(lib.left_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left7();
	this.instance.setTransform(64.8,-141,0.446,0.446,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aqu0iIEjiqIJoBCIHSECMgEfAosIjBApg");
	this.shape.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.4,-148.4,137.6,297.2);
p.frameBounds = [rect];


(lib.left_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left6();
	this.instance.setTransform(-48.3,-47.4,0.446,0.446);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.3,-47.4,96.7,94.9);
p.frameBounds = [rect];


(lib.left_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left5();
	this.instance.setTransform(-52.6,-100,0.446,0.446,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AAZR9MgDXgjZIDrgpICSNPIgFW8g");
	this.shape.setTransform(-1.8,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.6,-115.6,105.3,231.8);
p.frameBounds = [rect];


(lib.left_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left4();
	this.instance.setTransform(-15.6,-113.6,0.446,0.446);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjtqbICanyICQgDICxI8IhHbdIhqAIg");
	this.shape.setTransform(0.1,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.7,-118.3,47.7,233.9);
p.frameBounds = [rect];


(lib.left_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left3();
	this.instance.setTransform(133.6,-9.9,0.446,0.446,100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13FeIAAq7MArvAAAIAAK7g");
	this.shape.setTransform(-0.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-56.3,280,112.6);
p.frameBounds = [rect];


(lib.left_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left2();
	this.instance.setTransform(-69.7,-127.6,0.446,0.446);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-127.6,139.5,255.3);
p.frameBounds = [rect];


(lib.left_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left1();
	this.instance.setTransform(-44.5,-45,0.446,0.446);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzHzIAAvlIPnAAIAAPlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.jasmine_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasmine_shadow1();
	this.instance.setTransform(-48.2,-56,0.4,0.4);

	this.instance_1 = new lib.jasmine_shadow2();
	this.instance_1.setTransform(-48.2,-56,0.4,0.4);

	this.instance_2 = new lib.jasmine_shadow3();
	this.instance_2.setTransform(-48.2,-56,0.4,0.4);

	this.instance_3 = new lib.jasmine_shadow4();
	this.instance_3.setTransform(-48.2,-56,0.4,0.4);

	this.instance_4 = new lib.jasmine_shadow5();
	this.instance_4.setTransform(-48.2,-56,0.4,0.4);

	this.instance_5 = new lib.jasmine_shadow6();
	this.instance_5.setTransform(-48.2,-56,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-56,96.4,112);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.jasmine_rumana_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.ariel_rouge_blesk();
	this.instance.setTransform(-47.6,-57.4,0.392,0.392);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(1));

	// Слой 1
	this.instance_1 = new lib.elsa_rumana1();
	this.instance_1.setTransform(-45,-52.4,0.36,0.36);

	this.instance_2 = new lib.elsa_rumana2();
	this.instance_2.setTransform(-45,-52.4,0.36,0.36);

	this.instance_3 = new lib.elsa_rumana3();
	this.instance_3.setTransform(-45,-52.4,0.36,0.36);

	this.instance_4 = new lib.elsa_rumana4();
	this.instance_4.setTransform(-45,-52.4,0.36,0.36);

	this.instance_5 = new lib.elsa_rumana5();
	this.instance_5.setTransform(-45,-52.4,0.36,0.36);

	this.instance_6 = new lib.elsa_rumana6();
	this.instance_6.setTransform(-45,-52.4,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.6,-57.4,94.6,110.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.jasmine_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasmine_lips1();
	this.instance.setTransform(-48.2,-56,0.4,0.4);

	this.instance_1 = new lib.jasmine_lips2();
	this.instance_1.setTransform(-48.2,-56,0.4,0.4);

	this.instance_2 = new lib.jasmine_lips3();
	this.instance_2.setTransform(-48.2,-56,0.4,0.4);

	this.instance_3 = new lib.jasmine_lips4();
	this.instance_3.setTransform(-48.2,-56,0.4,0.4);

	this.instance_4 = new lib.jasmine_lips5();
	this.instance_4.setTransform(-48.2,-56,0.4,0.4);

	this.instance_5 = new lib.jasmine_lips6();
	this.instance_5.setTransform(-48.2,-56,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-56,96.4,112);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.jasmine_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.jasmine_hair1();
	this.instance.setTransform(-110.7,-22.2,0.72,0.72);

	this.instance_1 = new lib.jasmine_hair2();
	this.instance_1.setTransform(-59.9,-47.7,0.72,0.72);

	this.instance_2 = new lib.jasmine_hair4();
	this.instance_2.setTransform(-117.2,-48.7,0.72,0.72);

	this.instance_3 = new lib.jasmine_hair6();
	this.instance_3.setTransform(-59.2,-47.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.7,-22.2,219.6,297.3);
p.frameBounds = [rect, new cjs.Rectangle(-59.9,-47.7,125.3,153.4), null, new cjs.Rectangle(-117.2,-48.7,225.4,352.8), null, new cjs.Rectangle(-59.2,-47.5,109.5,188.6)];


(lib.jasmine_fringe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasmine_fringe1();
	this.instance.setTransform(-69.1,-48.2,0.72,0.72);

	this.instance_1 = new lib.jasmine_fringe2();
	this.instance_1.setTransform(-65.6,-48.2,0.72,0.72);

	this.instance_2 = new lib.jasmine_fringe3();
	this.instance_2.setTransform(-82.1,-59.2,0.72,0.72);

	this.instance_3 = new lib.jasmine_fringe4();
	this.instance_3.setTransform(-99.6,-48.7,0.72,0.72);

	this.instance_4 = new lib.jasmine_fringe5();
	this.instance_4.setTransform(-50.1,-62.2,0.72,0.72);

	this.instance_5 = new lib.jasmine_fringe6();
	this.instance_5.setTransform(-60.1,-52.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.1,-48.2,138.3,96.5);
p.frameBounds = [rect, new cjs.Rectangle(-65.6,-48.2,131.1,156.3), new cjs.Rectangle(-82.1,-59.2,178.6,154.8), new cjs.Rectangle(-99.6,-48.7,190.1,136.8), new cjs.Rectangle(-50.1,-62.2,97.9,103.7), new cjs.Rectangle(-60.1,-52.7,110.2,193.7)];


(lib.jasmine_eyelashes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasmine_eyelashes1();
	this.instance.setTransform(-48.2,-56,0.4,0.4);

	this.instance_1 = new lib.jasmine_eyelashes2();
	this.instance_1.setTransform(-48.2,-56,0.4,0.4);

	this.instance_2 = new lib.jasmine_eyelashes3();
	this.instance_2.setTransform(-48.2,-56,0.4,0.4);

	this.instance_3 = new lib.jasmine_eyelashes4();
	this.instance_3.setTransform(-48.2,-56,0.4,0.4);

	this.instance_4 = new lib.jasmine_eyelashes5();
	this.instance_4.setTransform(-48.2,-56,0.4,0.4);

	this.instance_5 = new lib.jasmine_eyelashes6();
	this.instance_5.setTransform(-48.2,-56,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-56,96.4,112);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.jasmine_eyebrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasmine_eyebrows1();
	this.instance.setTransform(-48.2,-56,0.4,0.4);

	this.instance_1 = new lib.jasmine_eyebrows2();
	this.instance_1.setTransform(-48.2,-56,0.4,0.4);

	this.instance_2 = new lib.jasmine_eyebrows3();
	this.instance_2.setTransform(-48.2,-56,0.4,0.4);

	this.instance_3 = new lib.jasmine_eyebrows4();
	this.instance_3.setTransform(-48.2,-56,0.4,0.4);

	this.instance_4 = new lib.jasmine_eyebrows5();
	this.instance_4.setTransform(-48.2,-56,0.4,0.4);

	this.instance_5 = new lib.jasmine_eyebrows6();
	this.instance_5.setTransform(-48.2,-56,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-56,96.4,112);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


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


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.heroes_0_img();
	this.instance.setTransform(95,19,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(95,19,702.9,600);
p.frameBounds = [rect];


(lib.headdress_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head11();
	this.instance.setTransform(-38,-73.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmpH/IA4obIEZr4IDBAGIEiMrIAfHgIkuETIkPAFg");
	this.shape.setTransform(-0.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-77.3,85.4,158);
p.frameBounds = [rect];


(lib.headdress_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head10();
	this.instance.setTransform(-40.7,-13.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnLgsICNitIKKAFICACnIjVEBIo9AGg");
	this.shape.setTransform(-0.2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.3,-19.8,92.2,43.7);
p.frameBounds = [rect];


(lib.headdress_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head9();
	this.instance.setTransform(-56,-22.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap0DNIChnzIO0ADICUIVIgoAxIyFAEg");
	this.shape.setTransform(-0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.1,-29.8,125.9,59.1);
p.frameBounds = [rect];


(lib.headdress_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head8();
	this.instance.setTransform(-60,-19,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokDTIh1iyICTkEIPZAKIDHD5IiSDEg");
	this.shape.setTransform(0.9,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.7,-22.3,133.4,45.7);
p.frameBounds = [rect];


(lib.headdress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head7();
	this.instance.setTransform(-81.2,-39.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCHFIi+mPIChn6IWkgEIC8HWIl/G7g");
	this.shape.setTransform(0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-45.9,179.5,91.4);
p.frameBounds = [rect];


(lib.headdress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head6();
	this.instance.setTransform(-56.5,-26.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmErIjLnKIA9iKIRfgEIBHDKIjlGQg");
	this.shape.setTransform(-0.5,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.1,-30.8,125.3,60.4);
p.frameBounds = [rect];


(lib.headdress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head5();
	this.instance.setTransform(-74.5,-41,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmNGeIk+kdIg3kmIB8j0IT5gEICLCiIAFEWIlsGDg");
	this.shape.setTransform(-0.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.3,-41,154.3,87.6);
p.frameBounds = [rect];


(lib.headdress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head4();
	this.instance.setTransform(-52,-26.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AowhSIBgjbIOzAAIBOCmIiIGnItLAOg");
	this.shape.setTransform(-0.4,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.6,-31.8,112.3,60.5);
p.frameBounds = [rect];


(lib.headdress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head3();
	this.instance.setTransform(-41.2,-23,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.headdress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head2();
	this.instance.setTransform(-47.2,-23.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzEsIAApXIPnAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.headdress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head1();
	this.instance.setTransform(-51,-25.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOD6IAAnzIMdAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-25.5,102,51);
p.frameBounds = [rect];


(lib.hanger2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger2();
	this.instance.setTransform(-35,-29.3,0.575,0.575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-29.3,70.2,58.7);
p.frameBounds = [rect];


(lib.hanger1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger1();
	this.instance.setTransform(-57.5,-37.1,0.575,0.575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-37.1,115,74.2);
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


(lib.eyelash_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara6();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara8();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara18();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara9();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara9();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara9();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara1();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara3();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara3();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara3();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara6();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara2();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara2();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara2();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyelash_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara10();
	this.instance.setTransform(-23.4,-66.3,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMeAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.eyebrows_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil8();
	this.instance.setTransform(-64.9,50.8,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil11();
	this.instance.setTransform(-64.9,50.8,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil4();
	this.instance.setTransform(-64.9,50.8,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil7();
	this.instance.setTransform(-64.9,50.8,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil5();
	this.instance.setTransform(-64.9,50.8,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil11();
	this.instance.setTransform(-64.9,50.8,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2();
	this.instance.setTransform(-64.9,50.7,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil7();
	this.instance.setTransform(-64.9,50.8,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil8();
	this.instance.setTransform(-64.9,50.8,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil14();
	this.instance.setTransform(-64.9,50.7,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil6();
	this.instance.setTransform(-64.9,50.7,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil14();
	this.instance.setTransform(-64.9,50.7,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil10();
	this.instance.setTransform(-64.9,50.7,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil10();
	this.instance.setTransform(-64.9,50.7,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil13();
	this.instance.setTransform(-64.9,50.7,0.401,0.401,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-64.9,129.9,129.9);
p.frameBounds = [rect];


(lib.dress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress1();
	this.instance.setTransform(-89.6,-262.8,0.72,0.72);

	this.instance_1 = new lib.dress2();
	this.instance_1.setTransform(-90.6,-258.8,0.72,0.72);

	this.instance_2 = new lib.dress3();
	this.instance_2.setTransform(-103.6,-218.8,0.72,0.72);

	this.instance_3 = new lib.dress4();
	this.instance_3.setTransform(-157.6,-250.8,0.72,0.72);

	this.instance_4 = new lib.dress5();
	this.instance_4.setTransform(-156.6,-213.8,0.72,0.72);

	this.instance_5 = new lib.dress6();
	this.instance_5.setTransform(-136.6,-257.8,0.72,0.72);

	this.instance_6 = new lib.dress7();
	this.instance_6.setTransform(-103.6,-259.8,0.72,0.72);

	this.instance_7 = new lib.dress8();
	this.instance_7.setTransform(-129.6,-259.8,0.72,0.72);

	this.instance_8 = new lib.dress9();
	this.instance_8.setTransform(-135.6,-256.8,0.72,0.72);

	this.instance_9 = new lib.dress10();
	this.instance_9.setTransform(-136.6,-256.8,0.72,0.72);

	this.instance_10 = new lib.dress11();
	this.instance_10.setTransform(-110.6,-254.8,0.72,0.72);

	this.instance_11 = new lib.dress12();
	this.instance_11.setTransform(-133.6,-258.8,0.72,0.72);

	this.instance_12 = new lib.dress13();
	this.instance_12.setTransform(-134.6,-259.8,0.72,0.72);

	this.instance_13 = new lib.dress14();
	this.instance_13.setTransform(-125.6,-262.8,0.72,0.72);

	this.instance_14 = new lib.dress15();
	this.instance_14.setTransform(-135.6,-274.8,0.72,0.72);

	this.instance_15 = new lib.dress16();
	this.instance_15.setTransform(-135.6,-263.8,0.72,0.72);

	this.instance_16 = new lib.dress17();
	this.instance_16.setTransform(-135.6,-259.8,0.72,0.72);

	this.instance_17 = new lib.dress18();
	this.instance_17.setTransform(-135.6,-262.8,0.72,0.72);

	this.instance_18 = new lib.dress19();
	this.instance_18.setTransform(-135.6,-248.8,0.72,0.72);

	this.instance_19 = new lib.dress20();
	this.instance_19.setTransform(-135.6,-248.8,0.72,0.72);

	this.instance_20 = new lib.dress21();
	this.instance_20.setTransform(-134.6,-256.8,0.72,0.72);

	this.instance_21 = new lib.dress22();
	this.instance_21.setTransform(-137.6,-255.8,0.72,0.72);

	this.instance_22 = new lib.dress23();
	this.instance_22.setTransform(-136.6,-265.8,0.72,0.72);

	this.instance_23 = new lib.dress24();
	this.instance_23.setTransform(-135.6,-256.8,0.72,0.72);

	this.instance_24 = new lib.dress25();
	this.instance_24.setTransform(-136.6,-256.8,0.72,0.72);

	this.instance_25 = new lib.dress26();
	this.instance_25.setTransform(-135.6,-256.8,0.72,0.72);

	this.instance_26 = new lib.dress27();
	this.instance_26.setTransform(-135.6,-256.8,0.72,0.72);

	this.instance_27 = new lib.dress28();
	this.instance_27.setTransform(-135.6,-234.8,0.72,0.72);

	this.instance_28 = new lib.dress29();
	this.instance_28.setTransform(-135.6,-272.8,0.72,0.72);

	this.instance_29 = new lib.dress30();
	this.instance_29.setTransform(-104.6,-262.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.6,-262.8,179.3,525.6);
p.frameBounds = [rect, new cjs.Rectangle(-90.6,-258.8,175,501.9), new cjs.Rectangle(-103.6,-218.8,177.9,345.6), new cjs.Rectangle(-157.6,-250.8,336.3,577.5), new cjs.Rectangle(-156.6,-213.8,336.3,539.3), new cjs.Rectangle(-136.6,-257.8,265.7,587.5), new cjs.Rectangle(-103.6,-259.8,177.9,383.8), new cjs.Rectangle(-129.6,-259.8,219.6,525.6), new cjs.Rectangle(-135.6,-256.8,265.7,583.9), new cjs.Rectangle(-136.6,-256.8,327.6,583.9), new cjs.Rectangle(-110.6,-254.8,241.2,274.3), new cjs.Rectangle(-133.6,-258.8,327.6,587.5), new cjs.Rectangle(-134.6,-259.8,327.6,587.5), new cjs.Rectangle(-125.6,-262.8,317.5,465.1), new cjs.Rectangle(-135.6,-274.8,367.2,601.2), new cjs.Rectangle(-135.6,-263.8,297.4,592.6), new cjs.Rectangle(-135.6,-259.8,265.7,587.5), new cjs.Rectangle(-135.6,-262.8,265.7,590.4), rect=new cjs.Rectangle(-135.6,-248.8,297.4,577.5), rect, new cjs.Rectangle(-134.6,-256.8,290.2,584.7), new cjs.Rectangle(-137.6,-255.8,294.5,586.1), new cjs.Rectangle(-136.6,-265.8,255.6,593.3), new cjs.Rectangle(-135.6,-256.8,290.2,585.4), new cjs.Rectangle(-136.6,-256.8,290.2,585.4), new cjs.Rectangle(-135.6,-256.8,290.2,585.4), new cjs.Rectangle(-135.6,-256.8,291.6,585.4), new cjs.Rectangle(-135.6,-234.8,258.5,562.3), new cjs.Rectangle(-135.6,-272.8,258.5,599.8), new cjs.Rectangle(-104.6,-262.8,229,542.9)];


(lib.cloak_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl11();
	this.instance.setTransform(-65,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,0,130.8,198.4);
p.frameBounds = [rect];


(lib.cloak_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl10();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.cloak_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl9();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.cloak_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl8();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.cloak_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl7();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.cloak_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl6();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.cloak_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl5();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.cloak_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl4();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.cloak_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl3();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.cloak_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl2();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.cloak_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pl1();
	this.instance.setTransform(-86,0,0.287,0.287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,0,172.1,137.6);
p.frameBounds = [rect];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-212,-165);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-212,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-212,-165,423,329);
p.frameBounds = [rect, rect];


(lib.body_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_en_2_img();
	this.instance.setTransform(-212,-165);

	this.instance_1 = new lib.title_ru_2_img();
	this.instance_1.setTransform(-212,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-212,-165,423,329);
p.frameBounds = [rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.blush_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge6();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge6();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge6();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge5();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge5();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge5();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge4();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge4();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge4();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge3();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge3();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge3();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge2();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge2();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge2();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1();
	this.instance.setTransform(-44.8,-51.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKKIAA0TIRJAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-212,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-212,-165,423,329);
p.frameBounds = [rect];


(lib.beads_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck9();
	this.instance.setTransform(-31.9,-25.1,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBEsIAApXIODAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.beads_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck8();
	this.instance.setTransform(-33.9,-17.4,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBEsIAApXIODAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.beads_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck7();
	this.instance.setTransform(-35.3,-25.1,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBEsIAApXIODAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.beads_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck6();
	this.instance.setTransform(-33.4,-20.3,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBEsIAApXIODAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.beads_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck5();
	this.instance.setTransform(-36.8,-23.7,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBEsIAApXIODAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.beads_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck4();
	this.instance.setTransform(-35.3,-22.3,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBEsIAApXIODAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.beads_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck3();
	this.instance.setTransform(-29.5,-18.4,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBEsIAApXIODAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.beads_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck2();
	this.instance.setTransform(-46.5,-32,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBEsIAApXIODAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-32,93,64);
p.frameBounds = [rect];


(lib.beads_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck1();
	this.instance.setTransform(-72.2,-39.3,0.539,0.539);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlhfIF8kYIMKgMIFFEiIhKHZI0xALg");
	this.shape.setTransform(-0.9,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.1,-41.8,148.5,81.2);
p.frameBounds = [rect];


(lib.ass_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_back3();
	this.instance.setTransform(-54.5,-24,0.609,0.609);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXErIAApVISvAAIAAJVg");
	this.shape.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-30.5,120,60);
p.frameBounds = [rect];


(lib.ass_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_back2();
	this.instance.setTransform(-70.5,-60.1,0.562,0.562);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfKKIAA0TIY/AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect];


(lib.ass_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_back1();
	this.instance.setTransform(-103.5,-44.3,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKHaIAAuzMAiVAAAIAAOzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-47.5,220,95);
p.frameBounds = [rect];


(lib.ariel_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ariel_shadow1();
	this.instance.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_1 = new lib.ariel_shadow2();
	this.instance_1.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_2 = new lib.ariel_shadow3();
	this.instance_2.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_3 = new lib.ariel_shadow4();
	this.instance_3.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_4 = new lib.ariel_shadow5();
	this.instance_4.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_5 = new lib.ariel_shadow6();
	this.instance_5.setTransform(-48.2,-56.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-56.2,96.4,112.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.ariel_rumana_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.ariel_rouge_blesk();
	this.instance.setTransform(-47.6,-57.4,0.392,0.392);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(1));

	// Слой 1
	this.instance_1 = new lib.elsa_rumana1();
	this.instance_1.setTransform(-45,-52.4,0.36,0.36);

	this.instance_2 = new lib.elsa_rumana2();
	this.instance_2.setTransform(-45,-52.4,0.36,0.36);

	this.instance_3 = new lib.elsa_rumana3();
	this.instance_3.setTransform(-45,-52.4,0.36,0.36);

	this.instance_4 = new lib.elsa_rumana4();
	this.instance_4.setTransform(-45,-52.4,0.36,0.36);

	this.instance_5 = new lib.elsa_rumana5();
	this.instance_5.setTransform(-45,-52.4,0.36,0.36);

	this.instance_6 = new lib.elsa_rumana6();
	this.instance_6.setTransform(-45,-52.4,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.6,-57.4,94.6,110.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.ariel_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ariel_lips1();
	this.instance.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_1 = new lib.ariel_lips2();
	this.instance_1.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_2 = new lib.ariel_lips3();
	this.instance_2.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_3 = new lib.ariel_lips4();
	this.instance_3.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_4 = new lib.ariel_lips5();
	this.instance_4.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_5 = new lib.ariel_lips6();
	this.instance_5.setTransform(-48.2,-56.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-56.2,96.4,112.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.ariel_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.ariel_hair1();
	this.instance.setTransform(-50.5,-12.8,0.72,0.72);

	this.instance_1 = new lib.ariel_hair3();
	this.instance_1.setTransform(-104.3,-117.1,0.72,0.72);

	this.instance_2 = new lib.ariel_hair4();
	this.instance_2.setTransform(-56.2,-97.4,0.72,0.72);

	this.instance_3 = new lib.ariel_hair5();
	this.instance_3.setTransform(-63.6,-61.9,0.72,0.72);

	this.instance_4 = new lib.ariel_hair6();
	this.instance_4.setTransform(-85.7,-58.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-12.8,103,84.3);
p.frameBounds = [rect, null, new cjs.Rectangle(-104.3,-117.1,139.7,323.3), new cjs.Rectangle(-56.2,-97.4,145.5,185.8), new cjs.Rectangle(-63.6,-61.9,130.3,167.8), new cjs.Rectangle(-85.7,-58.1,183.6,233.3)];


(lib.ariel_fringe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ariel_fringe1();
	this.instance.setTransform(-64.5,-72.8,0.72,0.72);

	this.instance_1 = new lib.ariel_fringe2();
	this.instance_1.setTransform(-63,-79.3,0.72,0.72);

	this.instance_2 = new lib.ariel_fringe3();
	this.instance_2.setTransform(-50,-91.8,0.72,0.72);

	this.instance_3 = new lib.ariel_fringe4();
	this.instance_3.setTransform(-57,-97.3,0.72,0.72);

	this.instance_4 = new lib.ariel_fringe5();
	this.instance_4.setTransform(-76.5,-76.3,0.72,0.72);

	this.instance_5 = new lib.ariel_fringe6();
	this.instance_5.setTransform(-64.5,-78.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.5,-72.8,126,144.7);
p.frameBounds = [rect, new cjs.Rectangle(-63,-79.3,129.6,204.5), new cjs.Rectangle(-50,-91.8,105.1,155.5), new cjs.Rectangle(-57,-97.3,144.7,187.2), new cjs.Rectangle(-76.5,-76.3,176.4,163.5), new cjs.Rectangle(-64.5,-78.3,138.3,97.9)];


(lib.ariel_eyelashes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ariel_eyelashes1();
	this.instance.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_1 = new lib.ariel_eyelashes2();
	this.instance_1.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_2 = new lib.ariel_eyelashes3();
	this.instance_2.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_3 = new lib.ariel_eyelashes4();
	this.instance_3.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_4 = new lib.ariel_eyelashes5();
	this.instance_4.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_5 = new lib.ariel_eyelashes6();
	this.instance_5.setTransform(-48.2,-56.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-56.2,96.4,112.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.ariel_eyebrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ariel_eyebrows1();
	this.instance.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_1 = new lib.ariel_eyebrows2();
	this.instance_1.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_2 = new lib.ariel_eyebrows3();
	this.instance_2.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_3 = new lib.ariel_eyebrows4();
	this.instance_3.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_4 = new lib.ariel_eyebrows5();
	this.instance_4.setTransform(-48.2,-56.2,0.4,0.4);

	this.instance_5 = new lib.ariel_eyebrows6();
	this.instance_5.setTransform(-48.2,-56.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-56.2,96.4,112.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.animation_for_pointer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_pointer_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_neck1();
	this.instance.setTransform(-96.5,-52.5,0.72,0.72);

	this.instance_1 = new lib.accessory_neck2();
	this.instance_1.setTransform(-37,-16.6,0.72,0.72);

	this.instance_2 = new lib.accessory_neck3();
	this.instance_2.setTransform(-20.7,-13.7,0.72,0.72);

	this.instance_3 = new lib.accessory_neck4();
	this.instance_3.setTransform(-29.4,-14.7,0.72,0.72);

	this.instance_4 = new lib.accessory_neck5();
	this.instance_4.setTransform(-30.5,-14.3,0.72,0.72);

	this.instance_5 = new lib.accessory_neck6();
	this.instance_5.setTransform(-26.5,-15.6,0.72,0.72);

	this.instance_6 = new lib.accessory_neck7();
	this.instance_6.setTransform(-30.1,-16.6,0.72,0.72);

	this.instance_7 = new lib.accessory_neck8();
	this.instance_7.setTransform(-25.6,-13.7,0.72,0.72);

	this.instance_8 = new lib.accessory_neck9();
	this.instance_8.setTransform(-27.2,-18.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-52.5,193,105.1);
p.frameBounds = [rect, new cjs.Rectangle(-37,-16.6,69.1,47.5), new cjs.Rectangle(-20.7,-13.7,43.9,27.4), new cjs.Rectangle(-29.4,-14.7,52.6,33.1), new cjs.Rectangle(-30.5,-14.3,54.7,35.3), new cjs.Rectangle(-26.5,-15.6,49.7,30.3), new cjs.Rectangle(-30.1,-16.6,52.6,37.5), new cjs.Rectangle(-25.6,-13.7,50.4,25.9), new cjs.Rectangle(-27.2,-18.5,47.5,37.5), null];


(lib.accessory_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_head1();
	this.instance.setTransform(-73.4,-36.7,0.72,0.72);

	this.instance_1 = new lib.accessory_head2();
	this.instance_1.setTransform(-68.5,-1,0.72,0.72);

	this.instance_2 = new lib.accessory_head3();
	this.instance_2.setTransform(-60.9,0,0.72,0.72);

	this.instance_3 = new lib.accessory_head4();
	this.instance_3.setTransform(-73.9,-0.7,0.72,0.72);

	this.instance_4 = new lib.accessory_head5();
	this.instance_4.setTransform(-109.3,-45.5,0.72,0.72);

	this.instance_5 = new lib.accessory_head6();
	this.instance_5.setTransform(-81.3,-3.8,0.72,0.72);

	this.instance_6 = new lib.accessory_head7();
	this.instance_6.setTransform(-116.5,-52.7,0.72,0.72);

	this.instance_7 = new lib.accessory_head8();
	this.instance_7.setTransform(-84.7,31.3,0.72,0.72);

	this.instance_8 = new lib.accessory_head9();
	this.instance_8.setTransform(-78.3,12.6,0.72,0.72);

	this.instance_9 = new lib.accessory_head10();
	this.instance_9.setTransform(-58,4.1,0.72,0.72);

	this.instance_10 = new lib.accessory_head11();
	this.instance_10.setTransform(-53.6,-38,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.4,-36.7,146.9,73.5);
p.frameBounds = [rect, new cjs.Rectangle(-68.5,-1,136.1,68.4), new cjs.Rectangle(-60.9,0,118.8,66.3), new cjs.Rectangle(-73.9,-0.7,149.8,76.3), new cjs.Rectangle(-109.3,-45.5,214.6,118.1), new cjs.Rectangle(-81.3,-3.8,162.7,75.6), new cjs.Rectangle(-116.5,-52.7,234,113.1), new cjs.Rectangle(-84.7,31.3,172.8,54.7), new cjs.Rectangle(-78.3,12.6,161.3,64.8), new cjs.Rectangle(-58,4.1,117.4,39.6), new cjs.Rectangle(-53.6,-38,109.5,211.7), null];


(lib.accessory_hand_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_right1();
	this.instance.setTransform(-60.4,-43.9,0.72,0.72);

	this.instance_1 = new lib.accessory_hand_right2();
	this.instance_1.setTransform(-59.4,-31.9,0.72,0.72);

	this.instance_2 = new lib.accessory_hand_right3();
	this.instance_2.setTransform(-27.4,-51.9,0.72,0.72);

	this.instance_3 = new lib.accessory_hand_right4();
	this.instance_3.setTransform(-45.4,-18.9,0.72,0.72);

	this.instance_4 = new lib.accessory_hand_right5();
	this.instance_4.setTransform(-37.4,-23.9,0.72,0.72);

	this.instance_5 = new lib.accessory_hand_right6();
	this.instance_5.setTransform(-60.4,-93.9,0.72,0.72);

	this.instance_6 = new lib.accessory_hand_right7();
	this.instance_6.setTransform(-59.4,-33.9,0.72,0.72);

	this.instance_7 = new lib.accessory_hand_right8();
	this.instance_7.setTransform(-32.4,-60.9,0.72,0.72);

	this.instance_8 = new lib.accessory_hand_right9();
	this.instance_8.setTransform(-65.4,-21.9,0.72,0.72);

	this.instance_9 = new lib.accessory_hand_right10();
	this.instance_9.setTransform(-67.4,-51.9,0.72,0.72);

	this.instance_10 = new lib.accessory_hand_right11();
	this.instance_10.setTransform(-69.4,-49.9,0.72,0.72);

	this.instance_11 = new lib.accessory_hand_right12();
	this.instance_11.setTransform(-73.4,-52.9,0.72,0.72);

	this.instance_12 = new lib.accessory_hand_right13();
	this.instance_12.setTransform(-43.4,-56.9,0.72,0.72);

	this.instance_13 = new lib.accessory_hand_right14();
	this.instance_13.setTransform(-46.4,-171.9,0.72,0.72);

	this.instance_14 = new lib.accessory_hand_right15();
	this.instance_14.setTransform(-38.4,-19.9,0.72,0.72);

	this.instance_15 = new lib.accessory_hand_right16();
	this.instance_15.setTransform(-120.4,15.1,0.72,0.72);

	this.instance_16 = new lib.accessory_hand_right17();
	this.instance_16.setTransform(-50.4,-209.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-43.9,121,87.9);
p.frameBounds = [rect, new cjs.Rectangle(-59.4,-31.9,97.9,90), new cjs.Rectangle(-27.4,-51.9,77.8,112.3), new cjs.Rectangle(-45.4,-18.9,84.3,43.2), new cjs.Rectangle(-37.4,-23.9,65.5,49.7), new cjs.Rectangle(-60.4,-93.9,146.2,115.9), new cjs.Rectangle(-59.4,-33.9,108.7,64.1), new cjs.Rectangle(-32.4,-60.9,60.5,81.4), new cjs.Rectangle(-65.4,-21.9,141.1,156.3), new cjs.Rectangle(-67.4,-51.9,139,105.1), new cjs.Rectangle(-69.4,-49.9,139.7,90), new cjs.Rectangle(-73.4,-52.9,139.7,105.9), new cjs.Rectangle(-43.4,-56.9,80.7,84.3), new cjs.Rectangle(-46.4,-171.9,172.1,241.2), new cjs.Rectangle(-38.4,-19.9,130.3,193.7), new cjs.Rectangle(-120.4,15.1,151.9,307.5), new cjs.Rectangle(-50.4,-209.9,97.2,807.8), null];


(lib.accessory_hand_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand_left1();
	this.instance.setTransform(-72,-72.7,0.72,0.72);

	this.instance_1 = new lib.accessory_hand_left2();
	this.instance_1.setTransform(-120,-108.7,0.72,0.72);

	this.instance_2 = new lib.accessory_hand_left3();
	this.instance_2.setTransform(-20,-258.6,0.72,0.72);

	this.instance_3 = new lib.accessory_hand_left4();
	this.instance_3.setTransform(-15,-73.7,0.72,0.72);

	this.instance_4 = new lib.accessory_hand_left5();
	this.instance_4.setTransform(-69,-68.7,0.72,0.72);

	this.instance_5 = new lib.accessory_hand_left6();
	this.instance_5.setTransform(-72,-122.7,0.72,0.72);

	this.instance_6 = new lib.accessory_hand_left7();
	this.instance_6.setTransform(-112,-341.7,0.72,0.72);

	this.instance_7 = new lib.accessory_hand_left8();
	this.instance_7.setTransform(-36,-172.7,0.72,0.72);

	this.instance_8 = new lib.accessory_hand_left9();
	this.instance_8.setTransform(-40,-72.7,0.72,0.72);

	this.instance_9 = new lib.accessory_hand_left10();
	this.instance_9.setTransform(-68,-187.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-72.7,144,145.5);
p.frameBounds = [rect, new cjs.Rectangle(-120,-108.7,225.4,412.6), new cjs.Rectangle(-20,-258.6,108.7,419.1), new cjs.Rectangle(-15,-73.7,50.4,367.2), new cjs.Rectangle(-69,-68.7,80.7,356.4), new cjs.Rectangle(-72,-122.7,156.3,153.4), new cjs.Rectangle(-112,-341.7,208.1,455.8), new cjs.Rectangle(-36,-172.7,81.4,260.7), new cjs.Rectangle(-40,-72.7,95.8,367.9), new cjs.Rectangle(-68,-187.7,133.9,234), null];


(lib.accessory_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_back1();
	this.instance.setTransform(-117,-50,0.72,0.72);

	this.instance_1 = new lib.accessory_back2();
	this.instance_1.setTransform(-60.8,-401,0.72,0.72);

	this.instance_2 = new lib.accessory_back3();
	this.instance_2.setTransform(-31.9,-424.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-50,234,100.1);
p.frameBounds = [rect, new cjs.Rectangle(-60.8,-401,180.7,154.1), new cjs.Rectangle(-31.9,-424.9,128.9,56.9), null];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3DAE4").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();
	this.instance.setTransform(0,300,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,300);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,300);
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


(lib.thunder_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.thunder_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
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


(lib.looped_background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EhdvAPnIAA/NMC7fAAAIAAfNg");
	this.shape.setTransform(600,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.clouds_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.clouds_3_img();
	this.instance.setTransform(-230,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-130,460,260);
p.frameBounds = [rect];


(lib.clouds_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.clouds_2_img();
	this.instance.setTransform(-230,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-130,460,260);
p.frameBounds = [rect];


(lib.clouds_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.clouds_1_img();
	this.instance.setTransform(-230,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-130,460,260);
p.frameBounds = [rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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


(lib.text_banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.text_banner_1_img();
	this.instance.setTransform(-110,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-30,220,60);
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
	this.instance = new lib.next_2_img();
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


(lib.wings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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
p.nominalBounds = rect = new cjs.Rectangle(-212,-165,423,329);
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
p.nominalBounds = rect = new cjs.Rectangle(-212,-165,423,329);
p.frameBounds = [rect];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
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


(lib.right_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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


(lib.mulan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// left
	this.left = new lib.accessory_hand_left();
	this.left.setTransform(-140.6,74.5);

	this.timeline.addTween(cjs.Tween.get(this.left).wait(1));

	// right
	this.right = new lib.accessory_hand_right();
	this.right.setTransform(136,-214.4);

	this.timeline.addTween(cjs.Tween.get(this.right).wait(1));

	// headdress
	this.headdress = new lib.accessory_head();
	this.headdress.setTransform(-19,-395.4);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// beads
	this.beads = new lib.accessory_neck();
	this.beads.setTransform(-17.1,-223.5);

	this.timeline.addTween(cjs.Tween.get(this.beads).wait(1));

	// fringe
	this.fringe = new lib.mulan_fringe();
	this.fringe.setTransform(-19.5,-276.4);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyelash
	this.eyelash = new lib.mulan_eyelashes();
	this.eyelash.setTransform(-19.2,-308.6);

	this.timeline.addTween(cjs.Tween.get(this.eyelash).wait(1));

	// body
	this.instance = new lib.mulan_eyes();
	this.instance.setTransform(-67.2,-364.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyebrows
	this.eyebrows = new lib.mulan_eyebrows();
	this.eyebrows.setTransform(-19.2,-308.6);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// shadows
	this.shadows = new lib.mulan_shadows();
	this.shadows.setTransform(-19.2,-308.6);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.mulan_lips();
	this.lips.setTransform(-19.2,-308.6);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.mulan_rumana_all();
	this.blush.setTransform(-18.9,-307.6,1.055,1.055,0.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.mulan_face();
	this.instance_1.setTransform(-67.2,-364.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dress
	this.dress = new lib.dress();
	this.dress.setTransform(-23,21.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.shoes();
	this.shoes.setTransform(-37.4,345.4);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_2 = new lib.body5_1();
	this.instance_2.setTransform(-166.5,-270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.mulan_hair();
	this.hair.setTransform(-19.5,-276.4);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// ass
	this.ass = new lib.accessory_back();
	this.ass.setTransform(-49,25.4);

	this.timeline.addTween(cjs.Tween.get(this.ass).wait(1));

	// cloak
	this.cloak = new lib.pl();
	this.cloak.setTransform(-15,12.1);

	this.timeline.addTween(cjs.Tween.get(this.cloak).wait(1));

	// wings
	this.wings = new lib.wing_mulan();
	this.wings.setTransform(-3.1,699.9,0.924,0.924,0,0,0,-3.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-432.2,600,1179.5);
p.frameBounds = [rect];


(lib.lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.left_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.jasmine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// left
	this.left = new lib.accessory_hand_left();
	this.left.setTransform(-140.6,74.5);

	this.timeline.addTween(cjs.Tween.get(this.left).wait(1));

	// right
	this.right = new lib.accessory_hand_right();
	this.right.setTransform(136,-214.4);

	this.timeline.addTween(cjs.Tween.get(this.right).wait(1));

	// headdress
	this.headdress = new lib.accessory_head();
	this.headdress.setTransform(-19,-395.4);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// beads
	this.beads = new lib.accessory_neck();
	this.beads.setTransform(-17.1,-223.5);

	this.timeline.addTween(cjs.Tween.get(this.beads).wait(1));

	// fringe
	this.fringe = new lib.jasmine_fringe();
	this.fringe.setTransform(-17.9,-328.9);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyelash
	this.eyelash = new lib.jasmine_eyelashes();
	this.eyelash.setTransform(-19,-308.8);

	this.timeline.addTween(cjs.Tween.get(this.eyelash).wait(1));

	// body
	this.instance = new lib.jasmine_eyes();
	this.instance.setTransform(-67.2,-364.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyebrows
	this.eyebrows = new lib.jasmine_eyebrows();
	this.eyebrows.setTransform(-19,-308.8);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// shadows
	this.shadows = new lib.jasmine_shadow();
	this.shadows.setTransform(-19,-308.8);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.jasmine_lips();
	this.lips.setTransform(-19,-308.8);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.jasmine_rumana_all();
	this.blush.setTransform(-18.9,-307.6,1.055,1.055,0.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.jasmine_face();
	this.instance_1.setTransform(-67.2,-364.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dress
	this.dress = new lib.dress();
	this.dress.setTransform(-23,21.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.shoes();
	this.shoes.setTransform(-37.4,345.4);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_2 = new lib.body5_2();
	this.instance_2.setTransform(-166.5,-270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.jasmine_hair();
	this.hair.setTransform(-17.9,-328.9);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// ass
	this.ass = new lib.accessory_back();
	this.ass.setTransform(-49,25.4);

	this.timeline.addTween(cjs.Tween.get(this.ass).wait(1));

	// cloak
	this.cloak = new lib.pl();
	this.cloak.setTransform(-15,12.1);

	this.timeline.addTween(cjs.Tween.get(this.cloak).wait(1));

	// wings
	this.wings = new lib.wing_jasmine();
	this.wings.setTransform(-3.2,699.9,0.931,0.931,0,0,0,-3.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-432.2,600,1179.8);
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


(lib.headdress_0_mc = function(mode,startPosition,loop) {
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


(lib.eyelash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.eyebrows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.dress30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress30();
	this.instance.setTransform(-75.5,-161.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(1.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,-191.9,154.6,396.4);
p.frameBounds = [rect];


(lib.dress29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress29();
	this.instance.setTransform(-91.5,-172.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-191.9,174.5,423.8);
p.frameBounds = [rect];


(lib.dress28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress28();
	this.instance.setTransform(-77.5,-166.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-190.7,174.5,403.4);
p.frameBounds = [rect];


(lib.dress27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress27();
	this.instance.setTransform(-88.5,-160.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(1.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-190.7,196.8,424.9);
p.frameBounds = [rect];


(lib.dress26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress26();
	this.instance.setTransform(-89.5,-157.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-190.7,195.9,427.9);
p.frameBounds = [rect];


(lib.dress25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress25();
	this.instance.setTransform(-89.5,-155.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-190.7,195.9,429.9);
p.frameBounds = [rect];


(lib.dress24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress24();
	this.instance.setTransform(-92.5,-157.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(1.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.5,-190.7,195.9,427.9);
p.frameBounds = [rect];


(lib.dress23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress23();
	this.instance.setTransform(-91.5,-162.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-159.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-188.9,172.5,426.4);
p.frameBounds = [rect];


(lib.dress22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress22();
	this.instance.setTransform(-92.5,-159.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.5,-190.7,198.8,426.4);
p.frameBounds = [rect];


(lib.dress21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress21();
	this.instance.setTransform(-92.5,-160.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(1.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.5,-190.7,195.9,424.5);
p.frameBounds = [rect];


(lib.dress20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress20();
	this.instance.setTransform(-87.5,-171.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-190.7,200.7,408.6);
p.frameBounds = [rect];


(lib.dress19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress19();
	this.instance.setTransform(-86.5,-167.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-190.7,200.7,412.6);
p.frameBounds = [rect];


(lib.dress18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress18();
	this.instance.setTransform(-93.5,-167.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(1.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-191.9,179.3,422.5);
p.frameBounds = [rect];


(lib.dress17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress17();
	this.instance.setTransform(-89.5,-161.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-190.7,179.3,425.4);
p.frameBounds = [rect];


(lib.dress16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress16();
	this.instance.setTransform(-91.5,-167.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-191.9,200.7,424);
p.frameBounds = [rect];


(lib.dress15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress15();
	this.instance.setTransform(-93.5,-171.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(1.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-191.9,247.9,425.8);
p.frameBounds = [rect];


(lib.dress14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress14();
	this.instance.setTransform(-78.5,-161.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.5,-191.9,214.3,343.9);
p.frameBounds = [rect];


(lib.dress13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress13();
	this.instance.setTransform(-86.5,-159.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-190.7,221.1,427.4);
p.frameBounds = [rect];


(lib.dress12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress12();
	this.instance.setTransform(-89.5,-157.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(1.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-190.7,221.1,429.4);
p.frameBounds = [rect];


(lib.dress11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress11();
	this.instance.setTransform(-73.5,-158.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-191.9,162.8,218.2);
p.frameBounds = [rect];


(lib.dress10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress10();
	this.instance.setTransform(-90.5,-157.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-191.9,221.1,428.1);
p.frameBounds = [rect];


(lib.dress9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress9();
	this.instance.setTransform(-93.5,-157.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(1.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-191.9,179.3,428.1);
p.frameBounds = [rect];


(lib.dress8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress8();
	this.instance.setTransform(-86.5,-158.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-191.9,148.2,387.8);
p.frameBounds = [rect];


(lib.dress7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress7();
	this.instance.setTransform(-66.5,-163.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-191.9,120.1,287);
p.frameBounds = [rect];


(lib.dress6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress6();
	this.instance.setTransform(-86.5,-157.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-190.7,179.3,429.4);
p.frameBounds = [rect];


(lib.dress5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress5();
	this.instance.setTransform(-95.5,-161.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(4.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-190.7,227,392.8);
p.frameBounds = [rect];


(lib.dress4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress4();
	this.instance.setTransform(-98.5,-162.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-191.9,227,418.8);
p.frameBounds = [rect];


(lib.dress3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress3();
	this.instance.setTransform(-60.5,-162.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2_1();
	this.instance_1.setTransform(1.5,-167.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-190.7,120.1,261.1);
p.frameBounds = [rect];


(lib.dress2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress2();
	this.instance.setTransform(-59.5,-161.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-191.9,118.1,368.7);
p.frameBounds = [rect];


(lib.dress1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress1.png
	this.instance = new lib.dress1();
	this.instance.setTransform(-60.5,-162.9,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1_1();
	this.instance_1.setTransform(4.5,-162.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-191.9,121,383.8);
p.frameBounds = [rect];


(lib.dress_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress30_1();
	this.instance.setTransform(-1.7,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am8fUIlslcMAFIgweIG5otICHgBIFqIxMAFfAxlInHESg");
	this.shape.setTransform(-0.1,194.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-6.3,161.8,402.8);
p.frameBounds = [rect];


(lib.dress_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress29_1();
	this.instance.setTransform(-4.7,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At/fFMAFjg4OIIXpdIAsgBIHNJ6MAGMA4TI0VDCg");
	this.shape.setTransform(-0.9,212.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.2,-9.4,185,443.3);
p.frameBounds = [rect];


(lib.dress_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress28_1();
	this.instance.setTransform(-5.2,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuEcRMAHTg07IE1n6IDPADIHWGkMAFcAtTIhRJjIl8DTIvyAZg");
	this.shape.setTransform(2.4,204.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.6,-3.8,180.2,417.1);
p.frameBounds = [rect];


(lib.dress_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress27_1();
	this.instance.setTransform(-1.4,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtLdcMAGWg+DIGGACILBKdMAC7AxzIoBE8g");
	this.shape.setTransform(18.1,198.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.9,-10.7,196.8,435.6);
p.frameBounds = [rect];


(lib.dress_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress26_1();
	this.instance.setTransform(-4.4,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtOeBMAGog+yIF9AFIK0J4MADEAxdIorGJg");
	this.shape.setTransform(14.6,202.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.9,-7.6,195.9,435.5);
p.frameBounds = [rect];


(lib.dress_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress25_1();
	this.instance.setTransform(-4.4,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Atee4MAGlg/dIH2AAIKlLHMAB+AwrIm2FZg");
	this.shape.setTransform(11.4,201.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.9,-7,195.9,437);
p.frameBounds = [rect];


(lib.dress_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress24_1();
	this.instance.setTransform(-1.9,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AridgMAAqg1RIE/n/IEmAAIKfKaMACXAxLIkvD8g");
	this.shape.setTransform(23,197.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.4,-6.1,195.9,434);
p.frameBounds = [rect];


(lib.dress_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress23_1();
	this.instance.setTransform(-4.7,188.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApGfTMABXg1iIFQpIIFLgBIGbM8MgAnAx1g");
	this.shape.setTransform(-0.3,194.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.2,-6.5,172.5,432.9);
p.frameBounds = [rect];


(lib.dress_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress22_1();
	this.instance.setTransform(-4.9,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgN+AgOMAHNhAiIRcAAMADVA9QIkIDZg");
	this.shape.setTransform(8.3,200.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.4,-6.1,198.8,432.5);
p.frameBounds = [rect];


(lib.dress_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress21_1();
	this.instance.setTransform(-1.4,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsdfhMADBg3jIE0ocIEFgBIKnLSMACaAxYIlfEVg");
	this.shape.setTransform(20.3,195.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.9,-12.2,195.9,436.7);
p.frameBounds = [rect];


(lib.dress_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress20_1();
	this.instance.setTransform(-4.8,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtGdmMAGzg8TIS3AAMAAjA9bg");
	this.shape.setTransform(2.2,188.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.3,-8,200.7,416.7);
p.frameBounds = [rect];


(lib.dress_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress19_1();
	this.instance.setTransform(-4.8,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At/b+MAJRg9AIIYAAIKWJ6MgAxA0KI2+EBg");
	this.shape.setTransform(0.6,203.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.3,-8,200.7,423.1);
p.frameBounds = [rect];


(lib.dress_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress18_1();
	this.instance.setTransform(-2.1,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar9xFIHUuWIGyAIIJ1LoMgF7AyHIx4BAg");
	this.shape.setTransform(9.1,193);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.6,-8.2,181.4,430.8);
p.frameBounds = [rect];


(lib.dress_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress17_1();
	this.instance.setTransform(-4.6,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqFijIHs9LIH1gHIEqLdMgBLAziIyHAsg");
	this.shape.setTransform(-12.7,194.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.1,-9,179.3,434.5);
p.frameBounds = [rect];


(lib.dress_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress16_1();
	this.instance.setTransform(-5.3,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar+SJMAE6gmAIHKreIGFgEIF0QHMgAQAuDIz4Apg");
	this.shape.setTransform(-18.7,193.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.8,-7.9,200.7,431.9);
p.frameBounds = [rect];


(lib.dress_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress15_1();
	this.instance.setTransform(-1.4,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ax3fiMABIgyaIItspIDhAEIWZPVMgN5Avqg");
	this.shape.setTransform(41.4,197.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.9,-4.3,250.8,430.1);
p.frameBounds = [rect];


(lib.dress_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress14_1();
	this.instance.setTransform(-4.6,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwWX1MAC9gogIHWq4IFbAAIKLMtMAGzAgFIsnKMItTAJg");
	this.shape.setTransform(24.8,168.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.1,-8,214.3,352.9);
p.frameBounds = [rect];


(lib.dress_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress13_1();
	this.instance.setTransform(-4,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwKQ2MAJZgw2IIkAGMAOYAsxInXS8I4JAOg");
	this.shape.setTransform(18.8,196.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-8.6,221.1,436.1);
p.frameBounds = [rect];


(lib.dress_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress12_1();
	this.instance.setTransform(-1.5,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ats0MIIsswIGbAHMAPpAq/IoMWPI57Akg");
	this.shape.setTransform(20.1,203.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-7.5,221.1,436.9);
p.frameBounds = [rect];


(lib.dress_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress11_1();
	this.instance.setTransform(-4.9,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqEkLIJ9tHIEFgDIFZKSIAuYSI0DAHg");
	this.shape.setTransform(-8.8,101.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.4,-9.8,162.8,228);
p.frameBounds = [rect];


(lib.dress_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress10_1();
	this.instance.setTransform(-4.5,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvekiIEq0OIEnnjIGIgIMAPqAr2IoWUhI2zAgg");
	this.shape.setTransform(21.5,198.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-9.5,221.1,437.7);
p.frameBounds = [rect];


(lib.dress_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress9_1();
	this.instance.setTransform(-2.1,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoO1pIH1qUIEpgCIFiJDMACVA2tI4NAPg");
	this.shape.setTransform(-12.2,195.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.6,-9.4,179.3,437.6);
p.frameBounds = [rect];


(lib.dress_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress8_1();
	this.instance.setTransform(-5.1,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApyevMABjgzHIGRqWIFnAGIGKM9MgA+Awag");
	this.shape.setTransform(-3.8,188.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.6,-8.3,150.6,396.1);
p.frameBounds = [rect];


(lib.dress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress7_1();
	this.instance.setTransform(-5,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApKptIIitgIEcgCIFpJbMgAOAkiIyrAig");
	this.shape.setTransform(-9.2,136.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-12.2,123,299.3);
p.frameBounds = [rect];


(lib.dress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress6_1();
	this.instance.setTransform(-4.6,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Api4qIHjnjID7gCIGWIeMADgA3VI3jAsg");
	this.shape.setTransform(1.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.1,-4.5,179.3,434);
p.frameBounds = [rect];


(lib.dress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress5_1();
	this.instance.setTransform(-4.4,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av/d8MALWg9fIG5AAMANwA82I2ACRg");
	this.shape.setTransform(1.9,196.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-5.1,227.6,404.1);
p.frameBounds = [rect];


(lib.dress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress4_1();
	this.instance.setTransform(-5,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Apgz+IIGsXIDXAAIGRKGMAC4A1mI2LA/g");
	this.shape.setTransform(-0.7,195.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.5,-11.8,227,430.6);
p.frameBounds = [rect];


(lib.dress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress3_1();
	this.instance.setTransform(-1.5,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnssqIE2n0IE7gEIE5JoICEfVIyDAIg");
	this.shape.setTransform(1.4,125.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-5.8,121.3,267);
p.frameBounds = [rect];


(lib.dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress2_1();
	this.instance.setTransform(-4.5,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApbUrMAC4gsjIFBmDIFBgEIFkIUMAAZAzlIgXAGg");
	this.shape.setTransform(-7.3,185.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-6.9,121.8,384.1);
p.frameBounds = [rect];


(lib.dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress1_1();
	this.instance.setTransform(-5,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ang14IGYphIFdACIFfHpMAAeA2tI0jAbg");
	this.shape.setTransform(-10.5,193.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.3,-7.8,131.8,402.1);
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


(lib.cloak_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.check_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.56,scaleY:0.56,x:-30,y:30},0).to({scaleX:1.11,scaleY:1.11,x:30,y:-30,alpha:0.699},7).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-63.3,-3.3,66.7,66.7), new cjs.Rectangle(-59.5,-16.6,76.2,76.2), new cjs.Rectangle(-55.7,-30,85.7,85.7), new cjs.Rectangle(-51.9,-43.3,95.3,95.3), new cjs.Rectangle(-48.1,-56.6,104.8,104.8), new cjs.Rectangle(-44.3,-69.9,114.3,114.3), new cjs.Rectangle(-40.5,-83.3,123.8,123.8), new cjs.Rectangle(-36.6,-96.6,133.3,133.3), new cjs.Rectangle(-40.5,-90.5,131.1,131.1), new cjs.Rectangle(-44.4,-84.4,128.9,128.9), new cjs.Rectangle(-48.3,-78.3,126.7,126.7), new cjs.Rectangle(-52.1,-72.2,124.5,124.5), new cjs.Rectangle(-56.1,-66.1,122.2,122.2), new cjs.Rectangle(-60,-60,120,120)];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.beads_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.ass_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.ariel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// left
	this.left = new lib.accessory_hand_left();
	this.left.setTransform(-140.6,74.5);

	this.timeline.addTween(cjs.Tween.get(this.left).wait(1));

	// right
	this.right = new lib.accessory_hand_right();
	this.right.setTransform(136,-214.4);

	this.timeline.addTween(cjs.Tween.get(this.right).wait(1));

	// headdress
	this.headdress = new lib.accessory_head();
	this.headdress.setTransform(-19,-395.4);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// beads
	this.beads = new lib.accessory_neck();
	this.beads.setTransform(-17.1,-223.5);

	this.timeline.addTween(cjs.Tween.get(this.beads).wait(1));

	// fringe
	this.fringe = new lib.ariel_fringe();
	this.fringe.setTransform(-22.1,-296.3);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyelash
	this.eyelash = new lib.ariel_eyelashes();
	this.eyelash.setTransform(-19,-308.6);

	this.timeline.addTween(cjs.Tween.get(this.eyelash).wait(1));

	// body
	this.instance = new lib.ariel_eyes();
	this.instance.setTransform(-67.2,-364.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyebrows
	this.eyebrows = new lib.ariel_eyebrows();
	this.eyebrows.setTransform(-19,-308.6);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// shadows
	this.shadows = new lib.ariel_shadow();
	this.shadows.setTransform(-19,-308.6);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.ariel_lips();
	this.lips.setTransform(-19,-308.6);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.ariel_rumana_all();
	this.blush.setTransform(-18.9,-307.6,1.055,1.055,0.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.ariel_face();
	this.instance_1.setTransform(-67.2,-364.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dress
	this.dress = new lib.dress();
	this.dress.setTransform(-23,21.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.shoes();
	this.shoes.setTransform(-37.4,345.4);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_2 = new lib.body5_3();
	this.instance_2.setTransform(-166.5,-270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.ariel_hair();
	this.hair.setTransform(-22.1,-296.3);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// ass
	this.ass = new lib.accessory_back();
	this.ass.setTransform(-49,25.4);

	this.timeline.addTween(cjs.Tween.get(this.ass).wait(1));

	// cloak
	this.cloak = new lib.pl();
	this.cloak.setTransform(-15,12.1);

	this.timeline.addTween(cjs.Tween.get(this.cloak).wait(1));

	// wings
	this.wings = new lib.wing_ariel();
	this.wings.setTransform(-3.2,699.9,0.934,0.934,0,0,0,-3.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-432.2,600,1179.9);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-212,-165,423,329);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.curtain_2_img();
	this.instance_2.setTransform(-250,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-210,500,420);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// title
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(600.1,300,0.645,0.645,0,0,0,0.1,0);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:600,alpha:1},13).wait(20).to({regY:0.1,scaleX:0.32,scaleY:0.32,y:300.1,alpha:0.012},20).to({_off:true},1).wait(5));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-300},0).to({y:0},18,cjs.Ease.get(-0.5)).wait(10).to({y:-300},29).wait(1).to({y:-310},0).wait(1));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(0,610);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:600},0).to({y:300},18,cjs.Ease.get(-0.5)).wait(10).to({y:600},29).wait(1).to({y:610},0).wait(1));

	// bg
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(9).to({x:212.1,y:63.1},0).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-310,1200,1220);
p.frameBounds = [rect, new cjs.Rectangle(0,-300,1200,1200), new cjs.Rectangle(0,-291.2,1200,1182.4), new cjs.Rectangle(0,-281.5,1200,1163), new cjs.Rectangle(0,-270.8,1200,1141.7), new cjs.Rectangle(0,-259.2,1200,1118.5), new cjs.Rectangle(0,-246.7,1200,1093.5), new cjs.Rectangle(0,-233.3,1200,1066.7), new cjs.Rectangle(0,-219,1200,1038), new cjs.Rectangle(0,-203.7,1200,1007.4), new cjs.Rectangle(0,-187.5,1200,975), new cjs.Rectangle(0,-170.3,1200,940.7), new cjs.Rectangle(0,-152.3,1200,904.6), new cjs.Rectangle(0,-133.3,1200,866.7), new cjs.Rectangle(0,-113.4,1200,826.8), new cjs.Rectangle(0,-92.6,1200,785.2), new cjs.Rectangle(0,-70.8,1200,741.7), new cjs.Rectangle(0,-48.1,1200,696.3), new cjs.Rectangle(0,-24.5,1200,649.1), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,1412.1,663.1), new cjs.Rectangle(0,0,1200,600), new cjs.Rectangle(0,-10.3,1200,620.7), new cjs.Rectangle(0,-20.7,1200,641.4), new cjs.Rectangle(0,-31,1200,662.1), new cjs.Rectangle(0,-41.4,1200,682.8), new cjs.Rectangle(0,-51.7,1200,703.4), new cjs.Rectangle(0,-62,1200,724.1), new cjs.Rectangle(0,-72.4,1200,744.8), new cjs.Rectangle(0,-82.7,1200,765.5), new cjs.Rectangle(0,-93.1,1200,786.2), new cjs.Rectangle(0,-103.4,1200,806.9), new cjs.Rectangle(0,-113.8,1200,827.6), new cjs.Rectangle(0,-124.1,1200,848.3), new cjs.Rectangle(0,-134.5,1200,869), new cjs.Rectangle(0,-144.8,1200,889.7), new cjs.Rectangle(0,-155.1,1200,910.3), new cjs.Rectangle(0,-165.5,1200,931), new cjs.Rectangle(0,-175.8,1200,951.7), new cjs.Rectangle(0,-186.2,1200,972.4), new cjs.Rectangle(0,-196.5,1200,993.1), new cjs.Rectangle(0,-206.9,1200,1013.8), new cjs.Rectangle(0,-217.2,1200,1034.5), new cjs.Rectangle(0,-227.6,1200,1055.2), new cjs.Rectangle(0,-237.9,1200,1075.9), new cjs.Rectangle(0,-248.3,1200,1096.6), new cjs.Rectangle(0,-258.6,1200,1117.2), new cjs.Rectangle(0,-268.9,1200,1137.9), new cjs.Rectangle(0,-279.3,1200,1158.6), new cjs.Rectangle(0,-289.6,1200,1179.3), new cjs.Rectangle(0,-300,1200,1200), new cjs.Rectangle(0,-310,1200,1220)];


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
	this.instance.setTransform(-200,-200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-290,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-348.7,-288.2,302.5,181.5), new cjs.Rectangle(-345,-283,309.9,186), new cjs.Rectangle(-338.9,-274.4,322.2,193.4), new cjs.Rectangle(-330.2,-262.3,339.5,203.7), new cjs.Rectangle(-319,-246.7,361.7,217.1), new cjs.Rectangle(-305.5,-227.7,388.9,233.4), new cjs.Rectangle(-289.4,-205.2,421,252.6), new cjs.Rectangle(-270.9,-179.3,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.thunder_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// thunder
	this.thunder_mc = new lib.thunder_3_mc();
	this.thunder_mc.shadow = new cjs.Shadow("#FF0000",0,0,30);
	this.thunder_mc.filters = [new cjs.BlurFilter(4, 4, 3)];

	this.timeline.addTween(cjs.Tween.get(this.thunder_mc).wait(1));

	// whiteBackground
	this.whiteBackground_mc = new lib.thunder_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.whiteBackground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-38,1200,638);
p.frameBounds = [rect];


(lib.thunder_0_mc = function(mode,startPosition,loop) {
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
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		var _thunder_mc = this.body_mc.thunder_mc;
		_thunder_mc.gotoAndStop(0);
		_thunder_mc.visible = false;
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
		var _totalUpdates_num = 100;
		var _interval_id = setInterval(_updateFunc, _INTERVAL);
		/*
		обновляем эффект
		*/
		function _updateFunc()
		{
			try
			{
				/*
				
				*/
				_currentUpdate_num++;
				/*
				
				*/
				if (_currentUpdate_num == 1)
				{
					_thunder_mc.removeAllChildren();
					var lightning = new Lightning();
					lightning.createLightningFunc(_thunder_mc, 800 * Math.random(), 100, 300);
				}
				else if (_currentUpdate_num == 2)
				{
					_thunder_mc.visible = true;
				}
				else if (_currentUpdate_num == 4)
				{
					_whiteBackground_mc.visible = true;
					_thunder_mc.visible = false;
				}
				else if (_currentUpdate_num == 6)
				{
					_whiteBackground_mc.visible = false;
				}
				else if (_currentUpdate_num >= _totalUpdates_num)
				{
					_totalUpdates_num = Math.round(Math.random() * 100) + 50;
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
		/*
		динамическое создание молний
		*/
		function Lightning()
		{
			/*
			
			*/
			this.lightning_shape;
			this.cloudX_num;
			this.cloudY_num;
			this.groundX_num;
			this.groundY_num;
			this.branchCloudX_arr;
			this.branchCloudY_arr;
			this.branchThickness_arr;
			this.midRatio_num = 20;
			this.midRatioTaper_num = 0.95;
			this.termDelta_num = 15;
			this.termDeltaTaper_num = 0.95;
			this.lastLegDist_num = 15;
			this.branchProbe_num = 0.5;
			this.branchFactor_num = 0.9;
			this.isBranching_bool = true;
			this.branchCount_num = 0;
			this.branchMax_num = 3;
			this.branchRangeXmax_num = 100;//30
			this.branchRangeXmin_num = 50;//20
			this.branchRangeYmax_num = 80;
			this.branchRangeYmin_num = 50;
			this.thickness_num = 6; 
			this.thicknessTaper_num = 0.3; 
			this.color_str = "#ff0000"; 
			this.termX_num;
			this.termY_num;
			/*
			
			*/
			this.createLightningFunc = function (container_mc, coordX_num, minLenght_num, maxLenght_num)
			{
				/*
				
				*/
				this.cloudX_num = 0;
				this.cloudY_num = 0;
				this.groundX_num = 0;
				this.groundY_num = Math.round((maxLenght_num - minLenght_num) * Math.random()) + minLenght_num;
				this.branchCloudX_arr = new Array();
				this.branchCloudY_arr = new Array();
				this.branchThickness_arr = new Array();
				/*
				
				*/
				this.lightning_shape = new createjs.Shape();
				container_mc.addChild(this.lightning_shape);
				this.lightning_shape.x = coordX_num;
				this.lightning_shape.y = 0;
				/*
				
				*/
				var glowingBall_shape = new createjs.Shape();
				glowingBall_shape.graphics.beginFill(this.color_str);
				glowingBall_shape.graphics.drawCircle(0, 0, 10);
				glowingBall_shape.graphics.endFill();
				container_mc.addChild(glowingBall_shape);
				glowingBall_shape.alpha = 0.5;
				glowingBall_shape.x = coordX_num;
				glowingBall_shape.y = 0;
				/*
				
				*/
				this._getTermFunc();
			};
			/*
			
			*/
			this._setBranchDefaultsFunc = function()
			{
				this.midRatio_num = 20;
				this.midRatioTaper_num = 0.95;
				this.termDelta_num = 5;
				this.termDeltaTaper_num = 0.95;
				this.lastLegDist_num = 15;
				this.thicknessTaper_num = 0.1;
			}
			/*
			
			*/
			this._getTermFunc = function()
			{
				var _lenghtX_num = this.groundX_num - this.cloudX_num;
				var _lenghtY_num = this.groundY_num - this.cloudY_num;
				var midTermX_num = this.cloudX_num + (_lenghtX_num / this.midRatio_num);
				var midTermY_num = this.cloudY_num + (_lenghtY_num / this.midRatio_num);
				if (Math.abs(midTermX_num - this.groundX_num) < this.lastLegDist_num && Math.abs(midTermY_num - this.groundY_num) < this.lastLegDist_num)
				{
					this.termX_num = this.groundX_num;
					this.termY_num = this.groundY_num;
					this._drawStrikeFunc();
					if (this.isBranching_bool)
					{
						this._makeBranchFunc();
					}
					return;
				}
				var rndAngle_num = Math.random() * Math.PI;
				var rndDelta_num = Math.random() * this.termDelta_num;
				this.termX_num = midTermX_num + (rndDelta_num * Math.cos(rndAngle_num));
				this.termY_num = midTermY_num + (rndDelta_num * Math.sin(rndAngle_num));
				var rndNum_num = Math.random();
				if (rndNum_num < this.branchProbe_num && this.branchCount_num < this.branchMax_num && this.isBranching_bool)
				{
					this.branchCloudX_arr[this.branchCount_num] = this.cloudX_num;
					this.branchCloudY_arr[this.branchCount_num] = this.cloudY_num;
					this.branchThickness_arr[this.branchCount_num] = this.thickness_num;
					this.branchCount_num++;
					this.branchProbe_num *= this.branchFactor_num;
				}
				this._drawStrikeFunc(); 
				this._getTermFunc();
			}
			/*
			
			*/
			this._drawStrikeFunc = function()
			{
				this.lightning_shape.graphics.setStrokeStyle(this.thickness_num);
				this.lightning_shape.graphics.beginStroke(this.color_str);
				this.thickness_num = Math.max(0.01, this.thickness_num - this.thicknessTaper_num);
				this.lightning_shape.graphics.moveTo(this.cloudX_num, this.cloudY_num);
				this.lightning_shape.graphics.lineTo(this.termX_num, this.termY_num);
				this.cloudX_num = this.termX_num;
				this.cloudY_num = this.termY_num;
				this.midRatio_num *= this.midRatioTaper_num;
				this.termDelta_num *= this.termDeltaTaper_num;
			}
			/*
			
			*/
			this._makeBranchFunc = function()
			{
				var trigger_num = -1;
				for (var i = 0; i < this.branchCloudX_arr.length; i++)
				{
					this.isBranching_bool = false;
					this.cloudX_num = this.branchCloudX_arr[i];
					this.cloudY_num = this.branchCloudY_arr[i];
					this.thickness_num = this.branchThickness_arr[i] / 2;
					this.groundX_num = this.cloudX_num + trigger_num * (Math.random() * (this.branchRangeXmax_num - this.branchRangeXmin_num) + this.branchRangeXmin_num);
					this.groundY_num = this.cloudY_num + (Math.random() * (this.branchRangeYmax_num - this.branchRangeYmin_num) + this.branchRangeYmin_num);
					this._setBranchDefaultsFunc();
					this._getTermFunc();
					trigger_num *= -1;
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.thunder_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-38,1200,638);
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


(lib.looped_background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.clouds_2_mc();
	this.instance.setTransform(967.1,120,0.826,0.826,0,0,180);

	this.instance_1 = new lib.clouds_3_mc();
	this.instance_1.setTransform(587,74.7,1,1,0,0,180);

	this.instance_2 = new lib.clouds_1_mc();
	this.instance_2.setTransform(214,122,0.826,0.826,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// background
	this.background_mc = new lib.looped_background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-55.3,1200,284.7);
p.frameBounds = [rect];


(lib.looped_background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.clouds_2_mc();
	this.instance.setTransform(977,81.2,0.826,0.826);

	this.instance_1 = new lib.clouds_3_mc();
	this.instance_1.setTransform(594,129,0.826,0.826);

	this.instance_2 = new lib.clouds_1_mc();
	this.instance_2.setTransform(223,81.2,0.826,0.826);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// background
	this.background_mc = new lib.looped_background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-26.2,1200,262.6);
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
	this.instance_1 = new lib.next_1_img();
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

	// title
	this.instance = new lib.text_banner_1_mc();
	this.instance.setTransform(0,-95,0.727,0.726,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.banner_play_0_mc();
	this.instance_1.setTransform(0,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_1_img();
	this.instance_2.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(133.3,0,0.889,0.889,0,0,180,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-225.7,426.5,451.4);
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


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_1_mc();
	this.instance.setTransform(80,85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_6_img();
	this.instance_1.setTransform(-130,-160);

	this.instance_2 = new lib.location_1_6_img();
	this.instance_2.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-130,-160,270,320)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_1_mc();
	this.instance.setTransform(80,85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_img();
	this.instance_1.setTransform(-130,-160);

	this.instance_2 = new lib.location_1_5_img();
	this.instance_2.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-130,-160,270,320)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_1_mc();
	this.instance.setTransform(80,85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-130,-160);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-130,-160,270,320)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_1_mc();
	this.instance.setTransform(80,85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-130,-160);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-130,-160,270,320)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_1_mc();
	this.instance.setTransform(80,85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-130,-160);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-130,-160,270,320)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_1_mc();
	this.instance.setTransform(80,85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-130,-160);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-130,-160,270,320)];


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

	// heroes
	this.hero_1 = new lib.jasmine();
	this.hero_1.setTransform(242,325,0.722,0.722);

	this.hero_2 = new lib.ariel();
	this.hero_2.setTransform(412,325,0.722,0.722);

	this.hero_3 = new lib.mulan();
	this.hero_3.setTransform(582,325,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_3},{t:this.hero_2},{t:this.hero_1}]}).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_2},{t:this.hero_1}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_3},{t:this.hero_2}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_1},{t:this.hero_3}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_3},{t:this.hero_1}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_1},{t:this.hero_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({scaleX:1,scaleY:1,x:415,y:455},0).to({_off:true},1).wait(2).to({_off:false,x:517},0).wait(1).to({x:415},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,scaleX:0.72,scaleY:0.72,x:262,y:325},0).wait(1).to({scaleX:1,scaleY:1,x:415,y:455},0).to({_off:true},1).wait(2).to({_off:false,x:317},0).wait(1).to({x:415},0).to({_off:true},1).wait(2).to({_off:false,scaleX:0.72,scaleY:0.72,x:562,y:325},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.hero_2).to({_off:true},1).wait(1).to({_off:false,regX:-15,regY:-31.5,scaleX:1,scaleY:1,x:400,y:423.5},0).to({_off:true},1).wait(1).to({_off:false,regX:0,regY:0,scaleX:0.72,scaleY:0.72,x:262,y:325},0).to({_off:true},1).wait(1).to({_off:false,regX:-15,regY:-31.5,scaleX:1,scaleY:1,x:400,y:423.5},0).to({_off:true},1).wait(1).to({_off:false,x:502},0).to({_off:true},1).wait(1).to({_off:false,x:400},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.hero_3).to({_off:true},1).wait(2).to({_off:false,scaleX:1,scaleY:1,x:415,y:455},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:262,y:325},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1,scaleY:1,x:415,y:455},0).wait(1).to({x:517},0).to({_off:true},1).wait(2).to({_off:false,x:415},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:563,y:325},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1,scaleY:1,x:415,y:455},0).wait(1).to({x:317},0).wait(1));

	// wings
	this.wings_hero_1 = new lib.wing_jasmine();
	this.wings_hero_1.setTransform(232,180,0.935,0.935);

	this.wings_hero_2 = new lib.wing_ariel();
	this.wings_hero_2.setTransform(401,180,0.935,0.935);

	this.wings_hero_3 = new lib.wing_mulan();
	this.wings_hero_3.setTransform(567,180,0.935,0.935);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wings_hero_3},{t:this.wings_hero_2},{t:this.wings_hero_1}]}).to({state:[{t:this.wings_hero_1}]},1).to({state:[{t:this.wings_hero_2}]},1).to({state:[{t:this.wings_hero_3}]},1).to({state:[{t:this.wings_hero_2},{t:this.wings_hero_1}]},1).to({state:[{t:this.wings_hero_1}]},1).to({state:[{t:this.wings_hero_2}]},1).to({state:[{t:this.wings_hero_3}]},1).to({state:[{t:this.wings_hero_3},{t:this.wings_hero_2}]},1).to({state:[{t:this.wings_hero_1}]},1).to({state:[{t:this.wings_hero_2}]},1).to({state:[{t:this.wings_hero_3}]},1).to({state:[{t:this.wings_hero_1},{t:this.wings_hero_3}]},1).to({state:[{t:this.wings_hero_1}]},1).to({state:[{t:this.wings_hero_2}]},1).to({state:[{t:this.wings_hero_3}]},1).to({state:[{t:this.wings_hero_3},{t:this.wings_hero_1}]},1).to({state:[{t:this.wings_hero_1}]},1).to({state:[{t:this.wings_hero_2}]},1).to({state:[{t:this.wings_hero_3}]},1).to({state:[{t:this.wings_hero_1},{t:this.wings_hero_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.wings_hero_1).wait(1).to({scaleX:1.29,scaleY:1.29,x:400,y:250},0).to({_off:true},1).wait(2).to({_off:false,x:502},0).wait(1).to({x:400},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,scaleX:0.94,scaleY:0.94,x:252,y:180},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:400,y:250},0).to({_off:true},1).wait(2).to({_off:false,x:302},0).wait(1).to({x:400},0).to({_off:true},1).wait(2).to({_off:false,scaleX:0.94,scaleY:0.94,x:552,y:180},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.wings_hero_2).to({_off:true},1).wait(1).to({_off:false,scaleX:1.29,scaleY:1.29,x:400,y:250},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.94,scaleY:0.94,x:252,y:180},0).to({_off:true},1).wait(1).to({_off:false,scaleX:1.29,scaleY:1.29,x:400,y:250},0).to({_off:true},1).wait(1).to({_off:false,x:502},0).to({_off:true},1).wait(1).to({_off:false,x:400},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.wings_hero_3).to({_off:true},1).wait(2).to({_off:false,scaleX:1.29,scaleY:1.29,x:400,y:250},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:252,y:180},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1.29,scaleY:1.29,x:400,y:250},0).wait(1).to({x:502},0).to({_off:true},1).wait(2).to({_off:false,x:400},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:548,y:180},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1.29,scaleY:1.29,x:400,y:250},0).wait(1).to({x:302},0).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_5_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_6_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,864.9);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,1201.2), new cjs.Rectangle(-200,0,1200,1202.7), new cjs.Rectangle(-200,0,1200,1200.8), rect=new cjs.Rectangle(-200,0,1200,1201.2), rect, new cjs.Rectangle(-200,0,1200,1202.7), new cjs.Rectangle(-200,0,1200,1200.8), new cjs.Rectangle(-200,0,1200,1202.7), new cjs.Rectangle(-200,0,1200,1201.2), new cjs.Rectangle(-200,0,1200,1202.7), rect=new cjs.Rectangle(-200,0,1200,1200.8), rect, new cjs.Rectangle(-200,0,1200,1201.2), new cjs.Rectangle(-200,0,1200,1202.7), new cjs.Rectangle(-200,0,1200,1200.8), rect=new cjs.Rectangle(-200,0,1200,1201.2), rect, new cjs.Rectangle(-200,0,1200,1202.7), rect=new cjs.Rectangle(-200,0,1200,1200.8), rect];


(lib.close_fog_makeup3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(212,-130);

	this.lips_1 = new lib.lips_1_mc();
	this.lips_1.setTransform(212,-130);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(212,-130);

	this.eyebrows_1 = new lib.eyebrows_1_mc();
	this.eyebrows_1.setTransform(212,-130);

	this.eyelash_1 = new lib.eyelash_1_mc();
	this.eyelash_1.setTransform(212,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.lips_1}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[{t:this.eyebrows_1}]},1).to({state:[{t:this.eyelash_1}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_3_mc();
	this.blush_6.setTransform(130,71);

	this.blush_5 = new lib.blush_5_3_mc();
	this.blush_5.setTransform(10,64);

	this.blush_4 = new lib.blush_4_3_mc();
	this.blush_4.setTransform(-110,71);

	this.blush_3 = new lib.blush_3_3_mc();
	this.blush_3.setTransform(130,-100);

	this.blush_2 = new lib.blush_2_3_mc();
	this.blush_2.setTransform(10,-107);

	this.blush_1 = new lib.blush_1_3_mc();
	this.blush_1.setTransform(-110,-100);

	this.lips_6 = new lib.lips_6_3_mc();
	this.lips_6.setTransform(60,63);

	this.lips_5 = new lib.lips_5_3_mc();
	this.lips_5.setTransform(-60,63);

	this.lips_4 = new lib.lips_4_3_mc();
	this.lips_4.setTransform(110,-105);

	this.lips_3 = new lib.lips_3_3_mc();
	this.lips_3.setTransform(0,-112);

	this.lips_2 = new lib.lips_2_3_mc();
	this.lips_2.setTransform(-110,-105);

	this.shadows_6 = new lib.shadows_6_3_mc();
	this.shadows_6.setTransform(120,79);

	this.shadows_5 = new lib.shadows_5_3_mc();
	this.shadows_5.setTransform(0,69);

	this.shadows_4 = new lib.shadows_4_3_mc();
	this.shadows_4.setTransform(-120,79);

	this.shadows_3 = new lib.shadows_3_3_mc();
	this.shadows_3.setTransform(120,-89);

	this.shadows_2 = new lib.shadows_2_3_mc();
	this.shadows_2.setTransform(0,-99);

	this.shadows_1 = new lib.shadows_1_3_mc();
	this.shadows_1.setTransform(-120,-89);

	this.eyebrows_6 = new lib.eyebrows_6_3_mc();
	this.eyebrows_6.setTransform(70,55);

	this.eyebrows_5 = new lib.eyebrows_5_3_mc();
	this.eyebrows_5.setTransform(-70,55);

	this.eyebrows_4 = new lib.eyebrows_4_3_mc();
	this.eyebrows_4.setTransform(130,-115);

	this.eyebrows_3 = new lib.eyebrows_3_3_mc();
	this.eyebrows_3.setTransform(0,-115);

	this.eyebrows_2 = new lib.eyebrows_2_3_mc();
	this.eyebrows_2.setTransform(-130,-115);

	this.eyelash_6 = new lib.eyelash_6_3_mc();
	this.eyelash_6.setTransform(60,52);

	this.eyelash_5 = new lib.eyelash_5_3_mc();
	this.eyelash_5.setTransform(-60,52);

	this.eyelash_4 = new lib.eyelash_4_3_mc();
	this.eyelash_4.setTransform(100,-120);

	this.eyelash_3 = new lib.eyelash_3_3_mc();
	this.eyelash_3.setTransform(0,-120);

	this.eyelash_2 = new lib.eyelash_2_3_mc();
	this.eyelash_2.setTransform(-100,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyelash_2},{t:this.eyelash_3},{t:this.eyelash_4},{t:this.eyelash_5},{t:this.eyelash_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(0,120);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206,-172,438,331.8);
p.frameBounds = [rect, new cjs.Rectangle(-206,-177,438,336.8), new cjs.Rectangle(-206,-150,438,309.8), new cjs.Rectangle(-206,-179.9,438,339.8), new cjs.Rectangle(-206,-190,438,349.8)];


(lib.close_fog_makeup2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(212,-130);

	this.lips_1 = new lib.lips_1_mc();
	this.lips_1.setTransform(212,-130);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(212,-130);

	this.eyebrows_1 = new lib.eyebrows_1_mc();
	this.eyebrows_1.setTransform(212,-130);

	this.eyelash_1 = new lib.eyelash_1_mc();
	this.eyelash_1.setTransform(212,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.lips_1}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[{t:this.eyebrows_1}]},1).to({state:[{t:this.eyelash_1}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(130,71);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(10,64);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(-110,71);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(130,-100);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(10,-107);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-110,-100);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(60,63);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(-60,63);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(110,-105);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(0,-112);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-110,-105);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(120,79);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(0,69);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(-120,79);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(120,-89);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(0,-99);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-120,-89);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(70,55);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(-70,55);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(130,-115);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(0,-115);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(-130,-115);

	this.eyelash_6 = new lib.eyelash_6_2_mc();
	this.eyelash_6.setTransform(60,52);

	this.eyelash_5 = new lib.eyelash_5_2_mc();
	this.eyelash_5.setTransform(-60,52);

	this.eyelash_4 = new lib.eyelash_4_2_mc();
	this.eyelash_4.setTransform(100,-120);

	this.eyelash_3 = new lib.eyelash_3_2_mc();
	this.eyelash_3.setTransform(0,-120);

	this.eyelash_2 = new lib.eyelash_2_2_mc();
	this.eyelash_2.setTransform(-100,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyelash_2},{t:this.eyelash_3},{t:this.eyelash_4},{t:this.eyelash_5},{t:this.eyelash_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(0,120);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206,-172,438,331.8);
p.frameBounds = [rect, new cjs.Rectangle(-206,-177,438,336.8), new cjs.Rectangle(-206,-150,438,309.8), new cjs.Rectangle(-206,-179.9,438,339.8), new cjs.Rectangle(-206,-190,438,349.8)];


(lib.close_fog_makeup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(212,-130);

	this.lips_1 = new lib.lips_1_mc();
	this.lips_1.setTransform(212,-130);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(212,-130);

	this.eyebrows_1 = new lib.eyebrows_1_mc();
	this.eyebrows_1.setTransform(212,-130);

	this.eyelash_1 = new lib.eyelash_1_mc();
	this.eyelash_1.setTransform(212,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.lips_1}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[{t:this.eyebrows_1}]},1).to({state:[{t:this.eyelash_1}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(130,71);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(10,64);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(-110,71);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(130,-100);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(10,-107);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-110,-100);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(60,63);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-60,63);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(110,-105);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(0,-112);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-110,-105);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(120,79);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(0,69);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(-120,79);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(120,-89);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(0,-99);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-120,-89);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(70,55);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(-70,55);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(130,-115);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(0,-115);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-130,-115);

	this.eyelash_6 = new lib.eyelash_6_1_mc();
	this.eyelash_6.setTransform(60,52);

	this.eyelash_5 = new lib.eyelash_5_1_mc();
	this.eyelash_5.setTransform(-60,52);

	this.eyelash_4 = new lib.eyelash_4_1_mc();
	this.eyelash_4.setTransform(100,-120);

	this.eyelash_3 = new lib.eyelash_3_1_mc();
	this.eyelash_3.setTransform(0,-120);

	this.eyelash_2 = new lib.eyelash_2_1_mc();
	this.eyelash_2.setTransform(-100,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyelash_2},{t:this.eyelash_3},{t:this.eyelash_4},{t:this.eyelash_5},{t:this.eyelash_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(0,120);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206,-172,438,331.8);
p.frameBounds = [rect, new cjs.Rectangle(-206,-177,438,336.8), new cjs.Rectangle(-206,-150,438,309.8), new cjs.Rectangle(-206,-179.9,438,339.8), new cjs.Rectangle(-206,-190,438,349.8)];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.close_fog_makeup3();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206,-172,438,331.8);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.close_fog_makeup2();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206,-172,438,331.8);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.close_fog_makeup();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206,-172,438,331.8);
p.frameBounds = [rect];


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


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-310,1200,1220);
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


(lib.looped_background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_2_mc = new lib.looped_background_3_mc();
	this.part_2_mc.setTransform(1195,0);

	this.part_1_mc = new lib.looped_background_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1_mc},{t:this.part_2_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-55.3,2395,291.7);
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
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();
	this.heroes_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,864.9);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(210,145,0.813,0.813);
	this.location_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(59).to({y:450,alpha:1},0).to({regX:0.1,regY:0.1,scaleX:0.94,scaleY:0.94,x:210.1,y:145.1},10).to({regX:0,regY:0,scaleX:0.81,scaleY:0.81,x:210,y:145},5).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(0,145,0.813,0.813);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({y:450,alpha:1},0).to({scaleX:0.94,scaleY:0.94,y:145},10).to({scaleX:0.81,scaleY:0.81},5).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-210,145,0.813,0.813);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(39).to({y:450,alpha:1},0).to({scaleX:0.94,scaleY:0.94,y:145},10).to({scaleX:0.81,scaleY:0.81},5).wait(21));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(240,-120,0.875,0.875);
	this.location_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(39).to({y:450,alpha:1},0).to({scaleX:1,scaleY:1,y:-120},15).to({scaleX:0.88,scaleY:0.88},5).wait(16));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(0,-130,0.937,0.937);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(29).to({y:450,alpha:1},0).to({regY:-0.1,scaleX:1.06,scaleY:1.06,y:-130.1},15).to({regY:0,scaleX:0.94,scaleY:0.94,y:-130},5).wait(26));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-240,-120,0.875,0.875);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({y:450,alpha:1},0).to({scaleX:1,scaleY:1,y:-120},15).to({scaleX:0.88,scaleY:0.88},5).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-353.7,-280,707.5,555);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-353.7,-280,707.5,870), new cjs.Rectangle(-354.8,-280,708.6,833.3), new cjs.Rectangle(-355.9,-280,709.7,796.7), new cjs.Rectangle(-356.9,-280,710.7,760), new cjs.Rectangle(-358,-280,711.8,723.3), new cjs.Rectangle(-359.1,-280,712.9,686.7), new cjs.Rectangle(-360.1,-280,713.9,650), new cjs.Rectangle(-361.3,-280,715.1,613.3), new cjs.Rectangle(-362.4,-280,716.2,576.6), new cjs.Rectangle(-363.4,-280,717.2,555), new cjs.Rectangle(-364.6,-260,718.4,860), new cjs.Rectangle(-365.6,-260,719.4,822.7), new cjs.Rectangle(-366.7,-260,720.5,785.3), new cjs.Rectangle(-367.8,-260,721.6,748), new cjs.Rectangle(-368.8,-260,722.6,710.7), new cjs.Rectangle(-369.9,-280,723.7,693.3), new cjs.Rectangle(-366.7,-275.9,720.5,652), new cjs.Rectangle(-363.4,-271.9,717.2,610.6), new cjs.Rectangle(-360.1,-267.9,713.9,569.3), new cjs.Rectangle(-356.9,-263.9,710.7,539), new cjs.Rectangle(-353.7,-260,707.5,850), new cjs.Rectangle(-353.7,-260,708.6,813.3), new cjs.Rectangle(-353.7,-260,709.6,783), new cjs.Rectangle(-353.7,-260,710.7,754.5), new cjs.Rectangle(-353.7,-260,711.8,726), new cjs.Rectangle(-353.7,-300,712.9,737.5), new cjs.Rectangle(-353.7,-295.9,714,705), new cjs.Rectangle(-353.7,-291.9,715.1,672.4), new cjs.Rectangle(-353.7,-287.9,716.1,639.9), new cjs.Rectangle(-353.7,-283.9,717.2,607.4), new cjs.Rectangle(-353.7,-280,718.3,860), new cjs.Rectangle(-353.7,-280,719.4,831.5), new cjs.Rectangle(-353.7,-280,720.5,803), new cjs.Rectangle(-353.7,-280,721.5,774.5), new cjs.Rectangle(-353.7,-280,722.6,746), new cjs.Rectangle(-353.7,-280,723.7,717.5), new cjs.Rectangle(-353.7,-280,720.5,689), new cjs.Rectangle(-353.7,-280,717.2,660.5), new cjs.Rectangle(-353.7,-280,714,632), new cjs.Rectangle(-353.7,-280,710.8,603.5), new cjs.Rectangle(-353.7,-280,707.5,860), new cjs.Rectangle(-353.7,-280,707.5,831.5), new cjs.Rectangle(-353.7,-280,707.5,803), new cjs.Rectangle(-353.7,-280,707.5,774.5), new cjs.Rectangle(-353.7,-280,707.5,746), new cjs.Rectangle(-353.7,-280,707.5,717.5), new cjs.Rectangle(-353.7,-280,707.5,689), new cjs.Rectangle(-353.7,-280,707.5,660.5), new cjs.Rectangle(-353.7,-280,707.5,632), new cjs.Rectangle(-353.7,-280,707.5,603.5), new cjs.Rectangle(-353.7,-280,707.5,575), new cjs.Rectangle(-353.7,-280,707.5,571.1), new cjs.Rectangle(-353.7,-280,707.5,567.1), new cjs.Rectangle(-353.7,-280,707.5,563), new cjs.Rectangle(-353.7,-280,707.5,559), new cjs.Rectangle(-353.7,-280,707.5,555)];


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


(lib.hair_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_mulan6();
	this.instance.setTransform(-49.5,-68.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-68.9,119.5,149);
p.frameBounds = [rect];


(lib.hair_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_ariel6();
	this.instance.setTransform(-49.5,-68.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-68.9,119.5,149);
p.frameBounds = [rect];


(lib.hair_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_jas6();
	this.instance.setTransform(-49.5,-68.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-68.9,119.5,149);
p.frameBounds = [rect];


(lib.hair_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_mulan5();
	this.instance.setTransform(-49.5,-68.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-68.9,119.5,149);
p.frameBounds = [rect];


(lib.hair_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_ariel5();
	this.instance.setTransform(-49.5,-68.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-68.9,119.5,149);
p.frameBounds = [rect];


(lib.hair_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_jas5();
	this.instance.setTransform(-49.5,-68.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-68.9,119.5,149);
p.frameBounds = [rect];


(lib.hair_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_mulan4();
	this.instance.setTransform(-49.5,-68.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-68.9,119.5,149);
p.frameBounds = [rect];


(lib.hair_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_ariel4();
	this.instance.setTransform(-49.5,-68.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-68.9,119.5,149);
p.frameBounds = [rect];


(lib.hair_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_jas4();
	this.instance.setTransform(-49.5,-68.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-68.9,119.5,149);
p.frameBounds = [rect];


(lib.hair_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_mulan3();
	this.instance.setTransform(-49.5,-69,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-69,119.5,149);
p.frameBounds = [rect];


(lib.hair_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_ariel3();
	this.instance.setTransform(-49.5,-69,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-69,119.5,149);
p.frameBounds = [rect];


(lib.hair_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_jas3();
	this.instance.setTransform(-49.5,-69,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-69,119.5,149);
p.frameBounds = [rect];


(lib.hair_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_mulan2();
	this.instance.setTransform(-49.5,-69,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-69,119.5,149);
p.frameBounds = [rect];


(lib.hair_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_ariel2();
	this.instance.setTransform(-49.5,-69,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-69,119.5,149);
p.frameBounds = [rect];


(lib.hair_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_jas2();
	this.instance.setTransform(-49.5,-69,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-69,119.5,149);
p.frameBounds = [rect];


(lib.hair_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_mulan1();
	this.instance.setTransform(-49.5,-69,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-69,119.5,149);
p.frameBounds = [rect];


(lib.hair_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_ariel1();
	this.instance.setTransform(-49.5,-69,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-69,119.5,149);
p.frameBounds = [rect];


(lib.hair_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(40.1,50,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_jas1();
	this.instance.setTransform(-49.5,-69,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-69,119.5,149);
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
p.nominalBounds = rect = new cjs.Rectangle(210,550,390.8,310);
p.frameBounds = [rect, new cjs.Rectangle(210,518.9,390.8,310), new cjs.Rectangle(210,487.8,390.8,310), new cjs.Rectangle(210,456.7,390.8,310), new cjs.Rectangle(210,425.6,390.8,310), new cjs.Rectangle(210,394.5,390.8,310), new cjs.Rectangle(210,363.4,390.8,310), new cjs.Rectangle(210,332.2,390.8,310), new cjs.Rectangle(210,301.1,390.8,310), new cjs.Rectangle(210,270,390.8,310), new cjs.Rectangle(210,298,390.8,310), new cjs.Rectangle(210,326,390.8,310), new cjs.Rectangle(210,354,390.8,310), new cjs.Rectangle(210,382,390.8,310), new cjs.Rectangle(210,410,390.8,310), new cjs.Rectangle(210,438,390.8,310), new cjs.Rectangle(210,466,390.8,310), new cjs.Rectangle(210,494,390.8,310), new cjs.Rectangle(210,522,390.8,310), new cjs.Rectangle(210,550,390.8,310)];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_1_mc();
	this.set_1.setTransform(12,215);

	this.set_2 = new lib.set_2_mc();
	this.set_2.setTransform(87,203);

	this.set_3 = new lib.set_3_mc();
	this.set_3.setTransform(171,221);

	this.set_4 = new lib.set_4_mc();
	this.set_4.setTransform(251,191);

	this.set_5 = new lib.set_5_mc();
	this.set_5.setTransform(306,189);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(80,-400);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-80,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_5},{t:this.set_4},{t:this.set_3},{t:this.set_2},{t:this.set_1}]}).wait(1));

	// decor
	this.instance = new lib.table_mc();
	this.instance.setTransform(170,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-625.7,940,930.7);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_1_mc();
	this.set_1.setTransform(12,215);

	this.set_2 = new lib.set_2_mc();
	this.set_2.setTransform(87,203);

	this.set_3 = new lib.set_3_mc();
	this.set_3.setTransform(171,221);

	this.set_4 = new lib.set_4_mc();
	this.set_4.setTransform(251,191);

	this.set_5 = new lib.set_5_mc();
	this.set_5.setTransform(306,189);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(80,-400);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-80,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_5},{t:this.set_4},{t:this.set_3},{t:this.set_2},{t:this.set_1}]}).wait(1));

	// decor
	this.instance = new lib.table_mc();
	this.instance.setTransform(170,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-625.7,940,930.7);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_1_mc();
	this.set_1.setTransform(12,215);

	this.set_2 = new lib.set_2_mc();
	this.set_2.setTransform(87,203);

	this.set_3 = new lib.set_3_mc();
	this.set_3.setTransform(171,221);

	this.set_4 = new lib.set_4_mc();
	this.set_4.setTransform(251,191);

	this.set_5 = new lib.set_5_mc();
	this.set_5.setTransform(306,189);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(80,-400);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-80,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_5},{t:this.set_4},{t:this.set_3},{t:this.set_2},{t:this.set_1}]}).wait(1));

	// decor
	this.instance = new lib.table_mc();
	this.instance.setTransform(170,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-625.7,940,930.7);
p.frameBounds = [rect];


(lib.closet_for_clothes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.cloak_0 = new lib.cloak_0_mc();
	this.cloak_0.setTransform(190,-200);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(190,-170);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(190,-95);

	this.left_0 = new lib.left_0_mc();
	this.left_0.setTransform(190,-150);

	this.right_0 = new lib.right_0_mc();
	this.right_0.setTransform(190,-150);

	this.ass_0 = new lib.ass_0_mc();
	this.ass_0.setTransform(190,-150);

	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(190,-150);

	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(190,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cloak_0}]},11).to({state:[{t:this.shoes_0}]},2).to({state:[{t:this.headdress_0}]},2).to({state:[{t:this.left_0}]},1).to({state:[{t:this.right_0}]},2).to({state:[{t:this.ass_0}]},2).to({state:[{t:this.wings_0}]},1).to({state:[{t:this.beads_0}]},5).wait(1));

	// options
	this.hair_1 = new lib.hair_1_3_mc();
	this.hair_1.setTransform(-110,-110);

	this.hair_2 = new lib.hair_2_3_mc();
	this.hair_2.setTransform(0,-110);

	this.hair_3 = new lib.hair_3_3_mc();
	this.hair_3.setTransform(110,-110);

	this.hair_4 = new lib.hair_4_3_mc();
	this.hair_4.setTransform(-110,40);

	this.hair_5 = new lib.hair_5_3_mc();
	this.hair_5.setTransform(0,40);

	this.hair_6 = new lib.hair_6_3_mc();
	this.hair_6.setTransform(110,40);

	this.dress_28 = new lib.dress_28_mc();
	this.dress_28.setTransform(-120,-208);

	this.dress_30 = new lib.dress_30_mc();
	this.dress_30.setTransform(0,-208);

	this.dress_29 = new lib.dress_29_mc();
	this.dress_29.setTransform(120,-208);

	this.dress_4 = new lib.dress_4_mc();
	this.dress_4.setTransform(120,-208);

	this.dress_6 = new lib.dress_6_mc();
	this.dress_6.setTransform(0,-208);

	this.dress_5 = new lib.dress_5_mc();
	this.dress_5.setTransform(-120,-208);

	this.dress_8 = new lib.dress_8_mc();
	this.dress_8.setTransform(120,-208);

	this.dress_7 = new lib.dress_7_mc();
	this.dress_7.setTransform(0,-208);

	this.dress_9 = new lib.dress_9_mc();
	this.dress_9.setTransform(-120,-208);

	this.dress_12 = new lib.dress_12_mc();
	this.dress_12.setTransform(120,-208);

	this.dress_11 = new lib.dress_11_mc();
	this.dress_11.setTransform(0,-208);

	this.dress_10 = new lib.dress_10_mc();
	this.dress_10.setTransform(-120,-208);

	this.dress_15 = new lib.dress_15_mc();
	this.dress_15.setTransform(120,-208);

	this.dress_14 = new lib.dress_14_mc();
	this.dress_14.setTransform(0,-208);

	this.dress_13 = new lib.dress_13_mc();
	this.dress_13.setTransform(-120,-208);

	this.dress_18 = new lib.dress_18_mc();
	this.dress_18.setTransform(120,-208);

	this.dress_16 = new lib.dress_16_mc();
	this.dress_16.setTransform(0,-208);

	this.dress_17 = new lib.dress_17_mc();
	this.dress_17.setTransform(-120,-208);

	this.dress_21 = new lib.dress_21_mc();
	this.dress_21.setTransform(120,-208);

	this.dress_20 = new lib.dress_20_mc();
	this.dress_20.setTransform(0,-208);

	this.dress_19 = new lib.dress_19_mc();
	this.dress_19.setTransform(-120,-208);

	this.dress_24 = new lib.dress_24_mc();
	this.dress_24.setTransform(120,-208);

	this.dress_23 = new lib.dress_23_mc();
	this.dress_23.setTransform(0,-208);

	this.dress_22 = new lib.dress_22_mc();
	this.dress_22.setTransform(-120,-208);

	this.dress_27 = new lib.dress_27_mc();
	this.dress_27.setTransform(120,-208);

	this.dress_26 = new lib.dress_26_mc();
	this.dress_26.setTransform(0,-208);

	this.dress_25 = new lib.dress_25_mc();
	this.dress_25.setTransform(-120,-208);

	this.dress_3 = new lib.dress_3_mc();
	this.dress_3.setTransform(120,-208);

	this.dress_2 = new lib.dress_2_mc();
	this.dress_2.setTransform(0,-208);

	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(-120,-208);

	this.cloak_6 = new lib.cloak_6_mc();
	this.cloak_6.setTransform(115,-38);

	this.cloak_5 = new lib.cloak_5_mc();
	this.cloak_5.setTransform(0,-38);

	this.cloak_4 = new lib.cloak_4_mc();
	this.cloak_4.setTransform(-115,-38);

	this.cloak_3 = new lib.cloak_3_mc();
	this.cloak_3.setTransform(115,-208);

	this.cloak_2 = new lib.cloak_2_mc();
	this.cloak_2.setTransform(0,-208);

	this.cloak_1 = new lib.cloak_1_mc();
	this.cloak_1.setTransform(-115,-208);

	this.cloak_10 = new lib.cloak_10_mc();
	this.cloak_10.setTransform(115,-38);

	this.cloak_11 = new lib.cloak_11_mc();
	this.cloak_11.setTransform(0,-45);

	this.cloak_9 = new lib.cloak_9_mc();
	this.cloak_9.setTransform(-115,-38);

	this.cloak_8 = new lib.cloak_8_mc();
	this.cloak_8.setTransform(90,-208);

	this.cloak_7 = new lib.cloak_7_mc();
	this.cloak_7.setTransform(-90,-208);

	this.shoes_6 = new lib.shoes_6_mc();
	this.shoes_6.setTransform(0,45);

	this.shoes_5 = new lib.shoes_5_mc();
	this.shoes_5.setTransform(100,13);

	this.shoes_4 = new lib.shoes_4_mc();
	this.shoes_4.setTransform(-100,13);

	this.shoes_3 = new lib.shoes_3_mc();
	this.shoes_3.setTransform(110,-138);

	this.shoes_2 = new lib.shoes_2_mc();
	this.shoes_2.setTransform(0,-138);

	this.shoes_1 = new lib.shoes_1_mc();
	this.shoes_1.setTransform(-110,-138);

	this.shoes_14 = new lib.shoes_14_mc();
	this.shoes_14.setTransform(-110,-75);

	this.shoes_13 = new lib.shoes_13_mc();
	this.shoes_13.setTransform(0,-75);

	this.shoes_12 = new lib.shoes_12_mc();
	this.shoes_12.setTransform(110,-75);

	this.shoes_11 = new lib.shoes_11_mc();
	this.shoes_11.setTransform(70,-158);

	this.shoes_10 = new lib.shoes_10_mc();
	this.shoes_10.setTransform(90,38);

	this.shoes_9 = new lib.shoes_9_mc();
	this.shoes_9.setTransform(-90,38);

	this.shoes_8 = new lib.shoes_8_mc();
	this.shoes_8.setTransform(-70,-160);

	this.shoes_7 = new lib.shoes_7_mc();
	this.shoes_7.setTransform(0,62);

	this.headdress_6 = new lib.headdress_6_mc();
	this.headdress_6.setTransform(115,-85);

	this.headdress_4 = new lib.headdress_4_mc();
	this.headdress_4.setTransform(-115,-85);

	this.headdress_5 = new lib.headdress_5_mc();
	this.headdress_5.setTransform(0,-100);

	this.headdress_11 = new lib.headdress_11_mc();
	this.headdress_11.setTransform(115,56.7);

	this.headdress_10 = new lib.headdress_10_mc();
	this.headdress_10.setTransform(0,-21);

	this.headdress_9 = new lib.headdress_9_mc();
	this.headdress_9.setTransform(-115,-13);

	this.headdress_8 = new lib.headdress_8_mc();
	this.headdress_8.setTransform(115,-20);

	this.headdress_7 = new lib.headdress_7_mc();
	this.headdress_7.setTransform(-36,70);

	this.headdress_3 = new lib.headdress_3_mc();
	this.headdress_3.setTransform(110,-172.5);

	this.headdress_2 = new lib.headdress_2_mc();
	this.headdress_2.setTransform(-110,-172.7);

	this.headdress_1 = new lib.headdress_1_mc();
	this.headdress_1.setTransform(0,-161);

	this.left_2 = new lib.left_2_mc();
	this.left_2.setTransform(0,25);

	this.left_9 = new lib.left_9_mc();
	this.left_9.setTransform(-74.6,-9.1,1,1,-40.8,0,0,0,-0.1);

	this.left_7 = new lib.left_7_mc();
	this.left_7.setTransform(109.8,80.3,1,1,77.2,0,0,-0.1,-0.1);

	this.left_6 = new lib.left_6_mc();
	this.left_6.setTransform(70,-164);

	this.left_5 = new lib.left_5_mc();
	this.left_5.setTransform(88.3,0.3,1,1,45);

	this.left_4 = new lib.left_4_mc();
	this.left_4.setTransform(-96.1,47.1,1,1,-55.5,0,0,6.5,-0.1);

	this.left_1 = new lib.left_1_mc();
	this.left_1.setTransform(-70,-161);

	this.left_8 = new lib.left_8_mc();
	this.left_8.setTransform(0,-125);

	this.left_3 = new lib.left_3_mc();
	this.left_3.setTransform(0,96);

	this.left_10 = new lib.left_10_mc();
	this.left_10.setTransform(0,-20);

	this.right_13 = new lib.right_13_mc();
	this.right_13.setTransform(35.6,-25.4);

	this.right_12 = new lib.right_12_mc();
	this.right_12.setTransform(-100,80);

	this.right_11 = new lib.right_11_mc();
	this.right_11.setTransform(0,80);

	this.right_10 = new lib.right_10_mc();
	this.right_10.setTransform(100,80);

	this.right_9 = new lib.right_9_mc();
	this.right_9.setTransform(0,-158.3);

	this.right_6 = new lib.right_6_mc();
	this.right_6.setTransform(100,-145);

	this.right_4 = new lib.right_4_mc();
	this.right_4.setTransform(109.9,-13.4,1,1,0,0,0,0,0.2);

	this.right_3 = new lib.right_3_mc();
	this.right_3.setTransform(-32.4,-34.1);

	this.right_2 = new lib.right_2_mc();
	this.right_2.setTransform(-110,-27.8);

	this.right_1 = new lib.right_1_mc();
	this.right_1.setTransform(-100,-138);

	this.right_8 = new lib.right_8_mc();
	this.right_8.setTransform(105,-133);

	this.right_7 = new lib.right_7_mc();
	this.right_7.setTransform(-105,-131);

	this.right_5 = new lib.right_5_mc();
	this.right_5.setTransform(0,-128);

	this.right_17 = new lib.right_17_mc();
	this.right_17.setTransform(-3.4,87.6);

	this.right_16 = new lib.right_16_mc();
	this.right_16.setTransform(-111.2,23.6);

	this.right_15 = new lib.right_15_mc();
	this.right_15.setTransform(4.9,-32.1);

	this.right_14 = new lib.right_14_mc();
	this.right_14.setTransform(129,36.9);

	this.ass_3 = new lib.ass_3_mc();
	this.ass_3.setTransform(0,-140);

	this.ass_2 = new lib.ass_2_mc();
	this.ass_2.setTransform(0,70);

	this.ass_1 = new lib.ass_1_mc();
	this.ass_1.setTransform(0,-50);

	this.wings_3 = new lib.wings_3_mc();
	this.wings_3.setTransform(0,70);

	this.wings_2 = new lib.wings_2_mc();
	this.wings_2.setTransform(0,-30);

	this.wings_1 = new lib.wings_1_mc();
	this.wings_1.setTransform(0,-130);

	this.wings_7 = new lib.wings_7_mc();
	this.wings_7.setTransform(0,70);

	this.wings_6 = new lib.wings_6_mc();
	this.wings_6.setTransform(0,-30);

	this.wings_5 = new lib.wings_5_mc();
	this.wings_5.setTransform(0,-140);

	this.wings_4 = new lib.wings_4_mc();
	this.wings_4.setTransform(0,-130);

	this.wings_8 = new lib.wings_8_mc();
	this.wings_8.setTransform(0,70);

	this.wings_9 = new lib.wings_9_mc();
	this.wings_9.setTransform(0,-30);

	this.wings_12 = new lib.wings_12_mc();
	this.wings_12.setTransform(0,65);

	this.wings_11 = new lib.wings_11_mc();
	this.wings_11.setTransform(0,-35);

	this.wings_10 = new lib.wings_10_mc();
	this.wings_10.setTransform(0,-135);

	this.wings_15 = new lib.wings_15_mc();
	this.wings_15.setTransform(0,-160);

	this.wings_14 = new lib.wings_14_mc();
	this.wings_14.setTransform(80,-40);

	this.wings_13 = new lib.wings_13_mc();
	this.wings_13.setTransform(-80,-40);

	this.wings_16 = new lib.wings_16_mc();
	this.wings_16.setTransform(0,100);

	this.beads_9 = new lib.beads_9_mc();
	this.beads_9.setTransform(110,-153.8);

	this.beads_8 = new lib.beads_8_mc();
	this.beads_8.setTransform(9,-161.9);

	this.beads_7 = new lib.beads_7_mc();
	this.beads_7.setTransform(-110,62.2);

	this.beads_6 = new lib.beads_6_mc();
	this.beads_6.setTransform(110,59.4);

	this.beads_5 = new lib.beads_5_mc();
	this.beads_5.setTransform(-130,-46.7);

	this.beads_4 = new lib.beads_4_mc();
	this.beads_4.setTransform(-110,-154.7);

	this.beads_3 = new lib.beads_3_mc();
	this.beads_3.setTransform(0,59.3);

	this.beads_2 = new lib.beads_2_mc();
	this.beads_2.setTransform(130,-43.5);

	this.beads_1 = new lib.beads_1_mc();
	this.beads_1.setTransform(0,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_6},{t:this.hair_5},{t:this.hair_4},{t:this.hair_3},{t:this.hair_2},{t:this.hair_1}]}).to({state:[{t:this.dress_29},{t:this.dress_30},{t:this.dress_28}]},1).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_4}]},1).to({state:[{t:this.dress_9},{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.dress_10},{t:this.dress_11},{t:this.dress_12}]},1).to({state:[{t:this.dress_13},{t:this.dress_14},{t:this.dress_15}]},1).to({state:[{t:this.dress_17},{t:this.dress_16},{t:this.dress_18}]},1).to({state:[{t:this.dress_19},{t:this.dress_20},{t:this.dress_21}]},1).to({state:[{t:this.dress_22},{t:this.dress_23},{t:this.dress_24}]},1).to({state:[{t:this.dress_25},{t:this.dress_26},{t:this.dress_27}]},1).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_3}]},1).to({state:[{t:this.cloak_1},{t:this.cloak_2},{t:this.cloak_3},{t:this.cloak_4},{t:this.cloak_5},{t:this.cloak_6}]},1).to({state:[{t:this.cloak_7},{t:this.cloak_8},{t:this.cloak_9},{t:this.cloak_11},{t:this.cloak_10}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_5},{t:this.shoes_6}]},1).to({state:[{t:this.shoes_7},{t:this.shoes_8},{t:this.shoes_9},{t:this.shoes_10},{t:this.shoes_11},{t:this.shoes_12},{t:this.shoes_13},{t:this.shoes_14}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_7},{t:this.headdress_8},{t:this.headdress_9},{t:this.headdress_10},{t:this.headdress_11},{t:this.headdress_5},{t:this.headdress_4},{t:this.headdress_6}]},1).to({state:[{t:this.left_1},{t:this.left_4},{t:this.left_5},{t:this.left_6},{t:this.left_7},{t:this.left_9},{t:this.left_2}]},1).to({state:[{t:this.left_10},{t:this.left_3},{t:this.left_8}]},1).to({state:[{t:this.right_1},{t:this.right_2},{t:this.right_3},{t:this.right_4},{t:this.right_6},{t:this.right_9},{t:this.right_10},{t:this.right_11},{t:this.right_12},{t:this.right_13}]},1).to({state:[{t:this.right_14},{t:this.right_15},{t:this.right_16},{t:this.right_17},{t:this.right_5},{t:this.right_7},{t:this.right_8}]},1).to({state:[{t:this.ass_1},{t:this.ass_2},{t:this.ass_3}]},1).to({state:[{t:this.wings_1},{t:this.wings_2},{t:this.wings_3}]},1).to({state:[{t:this.wings_5},{t:this.wings_6},{t:this.wings_7}]},1).to({state:[{t:this.wings_9},{t:this.wings_8},{t:this.wings_4}]},1).to({state:[{t:this.wings_10},{t:this.wings_11},{t:this.wings_12}]},1).to({state:[{t:this.wings_16},{t:this.wings_13},{t:this.wings_14},{t:this.wings_15}]},1).to({state:[{t:this.beads_1},{t:this.beads_2},{t:this.beads_3},{t:this.beads_4},{t:this.beads_5},{t:this.beads_6},{t:this.beads_7},{t:this.beads_8},{t:this.beads_9}]},1).wait(1));

	// decor
	this.instance = new lib.pipe_mc();
	this.instance.setTransform(0,-200);
	this.instance._off = true;

	this.instance_1 = new lib.pipe_mc();
	this.instance_1.setTransform(0,-200);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(0,110);

	this.instance_3 = new lib.shelf_2_mc();
	this.instance_3.setTransform(0,-120);

	this.instance_4 = new lib.shelf_2_mc();
	this.instance_4.setTransform(0,-150);

	this.instance_5 = new lib.pipe_mc();
	this.instance_5.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-200}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-200}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{y:-120}},{t:this.instance_2,p:{y:110}}]},1).to({state:[{t:this.instance_3,p:{y:-120}},{t:this.instance_2,p:{y:110}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{y:-150}},{t:this.instance_3,p:{y:110}},{t:this.instance_2,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{y:-120}}]},1).to({state:[{t:this.instance_3,p:{y:-120}},{t:this.instance},{t:this.instance_2,p:{y:110}}]},1).to({state:[{t:this.instance_4,p:{y:-110}},{t:this.instance_3,p:{y:110}},{t:this.instance_2,p:{y:0}}]},1).to({state:[{t:this.instance_3,p:{y:-110}},{t:this.instance},{t:this.instance_2,p:{y:110}}]},1).to({state:[{t:this.instance_5,p:{y:-30}},{t:this.instance_1,p:{y:-130}},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_5,p:{y:-170}},{t:this.instance_1,p:{y:-60}},{t:this.instance}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(10).to({y:-30},0).wait(1).to({_off:true},1).wait(1).to({_off:false,y:-80},0).wait(1).to({y:-20},0).to({_off:true},1).wait(1).to({_off:false,y:-80},0).to({_off:true},1).wait(1).to({_off:false,y:-60},0).wait(1).to({y:70},0).to({_off:true},1).wait(5).to({_off:false,y:50},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-179,339.5,299);
p.frameBounds = [rect, new cjs.Rectangle(-207.6,-217.4,416.4,443.3), new cjs.Rectangle(-220.5,-219.8,464,441.3), new cjs.Rectangle(-215.6,-220.2,405.7,440.4), new cjs.Rectangle(-215,-217.8,465.1,439.3), new cjs.Rectangle(-210.5,-216.6,486.5,436.1), new cjs.Rectangle(-214.1,-217,419.9,434.5), new cjs.Rectangle(-211.3,-220.2,433.3,436.7), new cjs.Rectangle(-217.4,-215,438.9,434.9), new cjs.Rectangle(-213.9,-218.7,440.9,440.6), new cjs.Rectangle(-196.3,-215.8,386.3,402.1), new cjs.Rectangle(-201,-220,411,319.6), new cjs.Rectangle(-201,-220,411,373.4), new cjs.Rectangle(-183,-190,393,324.2), new cjs.Rectangle(-190,-210,400,344.2), new cjs.Rectangle(-190,-202.7,400,340.1), new cjs.Rectangle(-210.6,-211.4,480.4,392.2), new cjs.Rectangle(-190,-173.3,400,325.7), new cjs.Rectangle(-183,-211.3,393,345.5), new cjs.Rectangle(-190,-170,400,430.9), new cjs.Rectangle(-190,-170.5,400,305.5), new cjs.Rectangle(-151.7,-173,361.8,286), new cjs.Rectangle(-150,-205,360,337.5), new cjs.Rectangle(-166.1,-177.8,376.2,296.7), new cjs.Rectangle(-170.2,-197.8,380.3,321.5), new cjs.Rectangle(-145.6,-217.7,355.7,403.8), new cjs.Rectangle(-190,-191.9,400,284.1)];


(lib.closet_for_clothes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.cloak_0 = new lib.cloak_0_mc();
	this.cloak_0.setTransform(190,-200);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(190,-170);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(190,-95);

	this.left_0 = new lib.left_0_mc();
	this.left_0.setTransform(190,-150);

	this.right_0 = new lib.right_0_mc();
	this.right_0.setTransform(190,-150);

	this.ass_0 = new lib.ass_0_mc();
	this.ass_0.setTransform(190,-150);

	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(190,-150);

	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(190,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cloak_0}]},11).to({state:[{t:this.shoes_0}]},2).to({state:[{t:this.headdress_0}]},2).to({state:[{t:this.left_0}]},1).to({state:[{t:this.right_0}]},2).to({state:[{t:this.ass_0}]},2).to({state:[{t:this.wings_0}]},1).to({state:[{t:this.beads_0}]},5).wait(1));

	// options
	this.hair_1 = new lib.hair_1_2_mc();
	this.hair_1.setTransform(-110,-110);

	this.hair_2 = new lib.hair_2_2_mc();
	this.hair_2.setTransform(0,-110);

	this.hair_3 = new lib.hair_3_2_mc();
	this.hair_3.setTransform(110,-110);

	this.hair_4 = new lib.hair_4_2_mc();
	this.hair_4.setTransform(-110,40);

	this.hair_5 = new lib.hair_5_2_mc();
	this.hair_5.setTransform(0,40);

	this.hair_6 = new lib.hair_6_2_mc();
	this.hair_6.setTransform(110,40);

	this.dress_28 = new lib.dress_28_mc();
	this.dress_28.setTransform(-120,-208);

	this.dress_30 = new lib.dress_30_mc();
	this.dress_30.setTransform(0,-208);

	this.dress_29 = new lib.dress_29_mc();
	this.dress_29.setTransform(120,-208);

	this.dress_4 = new lib.dress_4_mc();
	this.dress_4.setTransform(120,-208);

	this.dress_6 = new lib.dress_6_mc();
	this.dress_6.setTransform(0,-208);

	this.dress_5 = new lib.dress_5_mc();
	this.dress_5.setTransform(-120,-208);

	this.dress_8 = new lib.dress_8_mc();
	this.dress_8.setTransform(120,-208);

	this.dress_7 = new lib.dress_7_mc();
	this.dress_7.setTransform(0,-208);

	this.dress_9 = new lib.dress_9_mc();
	this.dress_9.setTransform(-120,-208);

	this.dress_12 = new lib.dress_12_mc();
	this.dress_12.setTransform(120,-208);

	this.dress_11 = new lib.dress_11_mc();
	this.dress_11.setTransform(0,-208);

	this.dress_10 = new lib.dress_10_mc();
	this.dress_10.setTransform(-120,-208);

	this.dress_15 = new lib.dress_15_mc();
	this.dress_15.setTransform(120,-208);

	this.dress_14 = new lib.dress_14_mc();
	this.dress_14.setTransform(0,-208);

	this.dress_13 = new lib.dress_13_mc();
	this.dress_13.setTransform(-120,-208);

	this.dress_18 = new lib.dress_18_mc();
	this.dress_18.setTransform(120,-208);

	this.dress_16 = new lib.dress_16_mc();
	this.dress_16.setTransform(0,-208);

	this.dress_17 = new lib.dress_17_mc();
	this.dress_17.setTransform(-120,-208);

	this.dress_21 = new lib.dress_21_mc();
	this.dress_21.setTransform(120,-208);

	this.dress_20 = new lib.dress_20_mc();
	this.dress_20.setTransform(0,-208);

	this.dress_19 = new lib.dress_19_mc();
	this.dress_19.setTransform(-120,-208);

	this.dress_24 = new lib.dress_24_mc();
	this.dress_24.setTransform(120,-208);

	this.dress_23 = new lib.dress_23_mc();
	this.dress_23.setTransform(0,-208);

	this.dress_22 = new lib.dress_22_mc();
	this.dress_22.setTransform(-120,-208);

	this.dress_27 = new lib.dress_27_mc();
	this.dress_27.setTransform(120,-208);

	this.dress_26 = new lib.dress_26_mc();
	this.dress_26.setTransform(0,-208);

	this.dress_25 = new lib.dress_25_mc();
	this.dress_25.setTransform(-120,-208);

	this.dress_3 = new lib.dress_3_mc();
	this.dress_3.setTransform(120,-208);

	this.dress_2 = new lib.dress_2_mc();
	this.dress_2.setTransform(0,-208);

	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(-120,-208);

	this.cloak_6 = new lib.cloak_6_mc();
	this.cloak_6.setTransform(115,-38);

	this.cloak_5 = new lib.cloak_5_mc();
	this.cloak_5.setTransform(0,-38);

	this.cloak_4 = new lib.cloak_4_mc();
	this.cloak_4.setTransform(-115,-38);

	this.cloak_3 = new lib.cloak_3_mc();
	this.cloak_3.setTransform(115,-208);

	this.cloak_2 = new lib.cloak_2_mc();
	this.cloak_2.setTransform(0,-208);

	this.cloak_1 = new lib.cloak_1_mc();
	this.cloak_1.setTransform(-115,-208);

	this.cloak_10 = new lib.cloak_10_mc();
	this.cloak_10.setTransform(115,-38);

	this.cloak_11 = new lib.cloak_11_mc();
	this.cloak_11.setTransform(0,-45);

	this.cloak_9 = new lib.cloak_9_mc();
	this.cloak_9.setTransform(-115,-38);

	this.cloak_8 = new lib.cloak_8_mc();
	this.cloak_8.setTransform(90,-208);

	this.cloak_7 = new lib.cloak_7_mc();
	this.cloak_7.setTransform(-90,-208);

	this.shoes_6 = new lib.shoes_6_mc();
	this.shoes_6.setTransform(0,45);

	this.shoes_5 = new lib.shoes_5_mc();
	this.shoes_5.setTransform(100,13);

	this.shoes_4 = new lib.shoes_4_mc();
	this.shoes_4.setTransform(-100,13);

	this.shoes_3 = new lib.shoes_3_mc();
	this.shoes_3.setTransform(110,-138);

	this.shoes_2 = new lib.shoes_2_mc();
	this.shoes_2.setTransform(0,-138);

	this.shoes_1 = new lib.shoes_1_mc();
	this.shoes_1.setTransform(-110,-138);

	this.shoes_14 = new lib.shoes_14_mc();
	this.shoes_14.setTransform(-110,-75);

	this.shoes_13 = new lib.shoes_13_mc();
	this.shoes_13.setTransform(0,-75);

	this.shoes_12 = new lib.shoes_12_mc();
	this.shoes_12.setTransform(110,-75);

	this.shoes_11 = new lib.shoes_11_mc();
	this.shoes_11.setTransform(70,-158);

	this.shoes_10 = new lib.shoes_10_mc();
	this.shoes_10.setTransform(90,38);

	this.shoes_9 = new lib.shoes_9_mc();
	this.shoes_9.setTransform(-90,38);

	this.shoes_8 = new lib.shoes_8_mc();
	this.shoes_8.setTransform(-70,-160);

	this.shoes_7 = new lib.shoes_7_mc();
	this.shoes_7.setTransform(0,62);

	this.headdress_6 = new lib.headdress_6_mc();
	this.headdress_6.setTransform(115,-85);

	this.headdress_4 = new lib.headdress_4_mc();
	this.headdress_4.setTransform(-115,-85);

	this.headdress_5 = new lib.headdress_5_mc();
	this.headdress_5.setTransform(0,-100);

	this.headdress_11 = new lib.headdress_11_mc();
	this.headdress_11.setTransform(115,56.7);

	this.headdress_10 = new lib.headdress_10_mc();
	this.headdress_10.setTransform(0,-21);

	this.headdress_9 = new lib.headdress_9_mc();
	this.headdress_9.setTransform(-115,-13);

	this.headdress_8 = new lib.headdress_8_mc();
	this.headdress_8.setTransform(115,-20);

	this.headdress_7 = new lib.headdress_7_mc();
	this.headdress_7.setTransform(-36,70);

	this.headdress_3 = new lib.headdress_3_mc();
	this.headdress_3.setTransform(110,-172.5);

	this.headdress_2 = new lib.headdress_2_mc();
	this.headdress_2.setTransform(-110,-172.7);

	this.headdress_1 = new lib.headdress_1_mc();
	this.headdress_1.setTransform(0,-161);

	this.left_2 = new lib.left_2_mc();
	this.left_2.setTransform(0,25);

	this.left_9 = new lib.left_9_mc();
	this.left_9.setTransform(-74.6,-9.1,1,1,-40.8,0,0,0,-0.1);

	this.left_7 = new lib.left_7_mc();
	this.left_7.setTransform(109.8,80.3,1,1,77.2,0,0,-0.1,-0.1);

	this.left_6 = new lib.left_6_mc();
	this.left_6.setTransform(70,-164);

	this.left_5 = new lib.left_5_mc();
	this.left_5.setTransform(88.3,0.3,1,1,45);

	this.left_4 = new lib.left_4_mc();
	this.left_4.setTransform(-96.1,47.1,1,1,-55.5,0,0,6.5,-0.1);

	this.left_1 = new lib.left_1_mc();
	this.left_1.setTransform(-70,-161);

	this.left_8 = new lib.left_8_mc();
	this.left_8.setTransform(0,-125);

	this.left_3 = new lib.left_3_mc();
	this.left_3.setTransform(0,96);

	this.left_10 = new lib.left_10_mc();
	this.left_10.setTransform(0,-20);

	this.right_13 = new lib.right_13_mc();
	this.right_13.setTransform(35.6,-25.4);

	this.right_12 = new lib.right_12_mc();
	this.right_12.setTransform(-100,80);

	this.right_11 = new lib.right_11_mc();
	this.right_11.setTransform(0,80);

	this.right_10 = new lib.right_10_mc();
	this.right_10.setTransform(100,80);

	this.right_9 = new lib.right_9_mc();
	this.right_9.setTransform(0,-158.3);

	this.right_6 = new lib.right_6_mc();
	this.right_6.setTransform(100,-145);

	this.right_4 = new lib.right_4_mc();
	this.right_4.setTransform(109.9,-13.4,1,1,0,0,0,0,0.2);

	this.right_3 = new lib.right_3_mc();
	this.right_3.setTransform(-32.4,-34.1);

	this.right_2 = new lib.right_2_mc();
	this.right_2.setTransform(-110,-27.8);

	this.right_1 = new lib.right_1_mc();
	this.right_1.setTransform(-100,-138);

	this.right_8 = new lib.right_8_mc();
	this.right_8.setTransform(105,-133);

	this.right_7 = new lib.right_7_mc();
	this.right_7.setTransform(-105,-131);

	this.right_5 = new lib.right_5_mc();
	this.right_5.setTransform(0,-128);

	this.right_17 = new lib.right_17_mc();
	this.right_17.setTransform(-3.4,87.6);

	this.right_16 = new lib.right_16_mc();
	this.right_16.setTransform(-111.2,23.6);

	this.right_15 = new lib.right_15_mc();
	this.right_15.setTransform(4.9,-32.1);

	this.right_14 = new lib.right_14_mc();
	this.right_14.setTransform(129,36.9);

	this.ass_3 = new lib.ass_3_mc();
	this.ass_3.setTransform(0,-140);

	this.ass_2 = new lib.ass_2_mc();
	this.ass_2.setTransform(0,70);

	this.ass_1 = new lib.ass_1_mc();
	this.ass_1.setTransform(0,-50);

	this.wings_3 = new lib.wings_3_mc();
	this.wings_3.setTransform(0,70);

	this.wings_2 = new lib.wings_2_mc();
	this.wings_2.setTransform(0,-30);

	this.wings_1 = new lib.wings_1_mc();
	this.wings_1.setTransform(0,-130);

	this.wings_7 = new lib.wings_7_mc();
	this.wings_7.setTransform(0,70);

	this.wings_6 = new lib.wings_6_mc();
	this.wings_6.setTransform(0,-30);

	this.wings_5 = new lib.wings_5_mc();
	this.wings_5.setTransform(0,-140);

	this.wings_4 = new lib.wings_4_mc();
	this.wings_4.setTransform(0,-130);

	this.wings_8 = new lib.wings_8_mc();
	this.wings_8.setTransform(0,70);

	this.wings_9 = new lib.wings_9_mc();
	this.wings_9.setTransform(0,-30);

	this.wings_12 = new lib.wings_12_mc();
	this.wings_12.setTransform(0,65);

	this.wings_11 = new lib.wings_11_mc();
	this.wings_11.setTransform(0,-35);

	this.wings_10 = new lib.wings_10_mc();
	this.wings_10.setTransform(0,-135);

	this.wings_15 = new lib.wings_15_mc();
	this.wings_15.setTransform(0,-160);

	this.wings_14 = new lib.wings_14_mc();
	this.wings_14.setTransform(80,-40);

	this.wings_13 = new lib.wings_13_mc();
	this.wings_13.setTransform(-80,-40);

	this.wings_16 = new lib.wings_16_mc();
	this.wings_16.setTransform(0,100);

	this.beads_9 = new lib.beads_9_mc();
	this.beads_9.setTransform(110,-153.8);

	this.beads_8 = new lib.beads_8_mc();
	this.beads_8.setTransform(9,-161.9);

	this.beads_7 = new lib.beads_7_mc();
	this.beads_7.setTransform(-110,62.2);

	this.beads_6 = new lib.beads_6_mc();
	this.beads_6.setTransform(110,59.4);

	this.beads_5 = new lib.beads_5_mc();
	this.beads_5.setTransform(-130,-46.7);

	this.beads_4 = new lib.beads_4_mc();
	this.beads_4.setTransform(-110,-154.7);

	this.beads_3 = new lib.beads_3_mc();
	this.beads_3.setTransform(0,59.3);

	this.beads_2 = new lib.beads_2_mc();
	this.beads_2.setTransform(130,-43.5);

	this.beads_1 = new lib.beads_1_mc();
	this.beads_1.setTransform(0,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_6},{t:this.hair_5},{t:this.hair_4},{t:this.hair_3},{t:this.hair_2},{t:this.hair_1}]}).to({state:[{t:this.dress_29},{t:this.dress_30},{t:this.dress_28}]},1).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_4}]},1).to({state:[{t:this.dress_9},{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.dress_10},{t:this.dress_11},{t:this.dress_12}]},1).to({state:[{t:this.dress_13},{t:this.dress_14},{t:this.dress_15}]},1).to({state:[{t:this.dress_17},{t:this.dress_16},{t:this.dress_18}]},1).to({state:[{t:this.dress_19},{t:this.dress_20},{t:this.dress_21}]},1).to({state:[{t:this.dress_22},{t:this.dress_23},{t:this.dress_24}]},1).to({state:[{t:this.dress_25},{t:this.dress_26},{t:this.dress_27}]},1).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_3}]},1).to({state:[{t:this.cloak_1},{t:this.cloak_2},{t:this.cloak_3},{t:this.cloak_4},{t:this.cloak_5},{t:this.cloak_6}]},1).to({state:[{t:this.cloak_7},{t:this.cloak_8},{t:this.cloak_9},{t:this.cloak_11},{t:this.cloak_10}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_5},{t:this.shoes_6}]},1).to({state:[{t:this.shoes_7},{t:this.shoes_8},{t:this.shoes_9},{t:this.shoes_10},{t:this.shoes_11},{t:this.shoes_12},{t:this.shoes_13},{t:this.shoes_14}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_7},{t:this.headdress_8},{t:this.headdress_9},{t:this.headdress_10},{t:this.headdress_11},{t:this.headdress_5},{t:this.headdress_4},{t:this.headdress_6}]},1).to({state:[{t:this.left_1},{t:this.left_4},{t:this.left_5},{t:this.left_6},{t:this.left_7},{t:this.left_9},{t:this.left_2}]},1).to({state:[{t:this.left_10},{t:this.left_3},{t:this.left_8}]},1).to({state:[{t:this.right_1},{t:this.right_2},{t:this.right_3},{t:this.right_4},{t:this.right_6},{t:this.right_9},{t:this.right_10},{t:this.right_11},{t:this.right_12},{t:this.right_13}]},1).to({state:[{t:this.right_14},{t:this.right_15},{t:this.right_16},{t:this.right_17},{t:this.right_5},{t:this.right_7},{t:this.right_8}]},1).to({state:[{t:this.ass_1},{t:this.ass_2},{t:this.ass_3}]},1).to({state:[{t:this.wings_1},{t:this.wings_2},{t:this.wings_3}]},1).to({state:[{t:this.wings_5},{t:this.wings_6},{t:this.wings_7}]},1).to({state:[{t:this.wings_9},{t:this.wings_8},{t:this.wings_4}]},1).to({state:[{t:this.wings_10},{t:this.wings_11},{t:this.wings_12}]},1).to({state:[{t:this.wings_16},{t:this.wings_13},{t:this.wings_14},{t:this.wings_15}]},1).to({state:[{t:this.beads_1},{t:this.beads_2},{t:this.beads_3},{t:this.beads_4},{t:this.beads_5},{t:this.beads_6},{t:this.beads_7},{t:this.beads_8},{t:this.beads_9}]},1).wait(1));

	// decor
	this.instance = new lib.pipe_mc();
	this.instance.setTransform(0,-200);
	this.instance._off = true;

	this.instance_1 = new lib.pipe_mc();
	this.instance_1.setTransform(0,-200);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(0,110);

	this.instance_3 = new lib.shelf_2_mc();
	this.instance_3.setTransform(0,-120);

	this.instance_4 = new lib.shelf_2_mc();
	this.instance_4.setTransform(0,-150);

	this.instance_5 = new lib.pipe_mc();
	this.instance_5.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-200}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-200}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{y:-120}},{t:this.instance_2,p:{y:110}}]},1).to({state:[{t:this.instance_3,p:{y:-120}},{t:this.instance_2,p:{y:110}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{y:-150}},{t:this.instance_3,p:{y:110}},{t:this.instance_2,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{y:-120}}]},1).to({state:[{t:this.instance_3,p:{y:-120}},{t:this.instance},{t:this.instance_2,p:{y:110}}]},1).to({state:[{t:this.instance_4,p:{y:-110}},{t:this.instance_3,p:{y:110}},{t:this.instance_2,p:{y:0}}]},1).to({state:[{t:this.instance_3,p:{y:-110}},{t:this.instance},{t:this.instance_2,p:{y:110}}]},1).to({state:[{t:this.instance_5,p:{y:-30}},{t:this.instance_1,p:{y:-130}},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_5,p:{y:-170}},{t:this.instance_1,p:{y:-60}},{t:this.instance}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(10).to({y:-30},0).wait(1).to({_off:true},1).wait(1).to({_off:false,y:-80},0).wait(1).to({y:-20},0).to({_off:true},1).wait(1).to({_off:false,y:-80},0).to({_off:true},1).wait(1).to({_off:false,y:-60},0).wait(1).to({y:70},0).to({_off:true},1).wait(5).to({_off:false,y:50},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-179,339.5,299);
p.frameBounds = [rect, new cjs.Rectangle(-207.6,-217.4,416.4,443.3), new cjs.Rectangle(-220.5,-219.8,464,441.3), new cjs.Rectangle(-215.6,-220.2,405.7,440.4), new cjs.Rectangle(-215,-217.8,465.1,439.3), new cjs.Rectangle(-210.5,-216.6,486.5,436.1), new cjs.Rectangle(-214.1,-217,419.9,434.5), new cjs.Rectangle(-211.3,-220.2,433.3,436.7), new cjs.Rectangle(-217.4,-215,438.9,434.9), new cjs.Rectangle(-213.9,-218.7,440.9,440.6), new cjs.Rectangle(-196.3,-215.8,386.3,402.1), new cjs.Rectangle(-201,-220,411,319.6), new cjs.Rectangle(-201,-220,411,373.4), new cjs.Rectangle(-183,-190,393,324.2), new cjs.Rectangle(-190,-210,400,344.2), new cjs.Rectangle(-190,-202.7,400,340.1), new cjs.Rectangle(-210.6,-211.4,480.4,392.2), new cjs.Rectangle(-190,-173.3,400,325.7), new cjs.Rectangle(-183,-211.3,393,345.5), new cjs.Rectangle(-190,-170,400,430.9), new cjs.Rectangle(-190,-170.5,400,305.5), new cjs.Rectangle(-151.7,-173,361.8,286), new cjs.Rectangle(-150,-205,360,337.5), new cjs.Rectangle(-166.1,-177.8,376.2,296.7), new cjs.Rectangle(-170.2,-197.8,380.3,321.5), new cjs.Rectangle(-145.6,-217.7,355.7,403.8), new cjs.Rectangle(-190,-191.9,400,284.1)];


(lib.closet_for_clothes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.cloak_0 = new lib.cloak_0_mc();
	this.cloak_0.setTransform(190,-200);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(190,-170);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(190,-95);

	this.left_0 = new lib.left_0_mc();
	this.left_0.setTransform(190,-150);

	this.right_0 = new lib.right_0_mc();
	this.right_0.setTransform(190,-150);

	this.ass_0 = new lib.ass_0_mc();
	this.ass_0.setTransform(190,-150);

	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(190,-150);

	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(190,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cloak_0}]},11).to({state:[{t:this.shoes_0}]},2).to({state:[{t:this.headdress_0}]},2).to({state:[{t:this.left_0}]},1).to({state:[{t:this.right_0}]},2).to({state:[{t:this.ass_0}]},2).to({state:[{t:this.wings_0}]},1).to({state:[{t:this.beads_0}]},5).wait(1));

	// options
	this.hair_1 = new lib.hair_1_1_mc();
	this.hair_1.setTransform(-110,-110);

	this.hair_2 = new lib.hair_2_1_mc();
	this.hair_2.setTransform(0,-110);

	this.hair_3 = new lib.hair_3_1_mc();
	this.hair_3.setTransform(110,-110);

	this.hair_4 = new lib.hair_4_1_mc();
	this.hair_4.setTransform(-110,40);

	this.hair_5 = new lib.hair_5_1_mc();
	this.hair_5.setTransform(0,40);

	this.hair_6 = new lib.hair_6_1_mc();
	this.hair_6.setTransform(110,40);

	this.dress_28 = new lib.dress_28_mc();
	this.dress_28.setTransform(-120,-208);

	this.dress_30 = new lib.dress_30_mc();
	this.dress_30.setTransform(0,-208);

	this.dress_29 = new lib.dress_29_mc();
	this.dress_29.setTransform(120,-208);

	this.dress_4 = new lib.dress_4_mc();
	this.dress_4.setTransform(120,-208);

	this.dress_6 = new lib.dress_6_mc();
	this.dress_6.setTransform(0,-208);

	this.dress_5 = new lib.dress_5_mc();
	this.dress_5.setTransform(-120,-208);

	this.dress_8 = new lib.dress_8_mc();
	this.dress_8.setTransform(120,-208);

	this.dress_7 = new lib.dress_7_mc();
	this.dress_7.setTransform(0,-208);

	this.dress_9 = new lib.dress_9_mc();
	this.dress_9.setTransform(-120,-208);

	this.dress_12 = new lib.dress_12_mc();
	this.dress_12.setTransform(120,-208);

	this.dress_11 = new lib.dress_11_mc();
	this.dress_11.setTransform(0,-208);

	this.dress_10 = new lib.dress_10_mc();
	this.dress_10.setTransform(-120,-208);

	this.dress_15 = new lib.dress_15_mc();
	this.dress_15.setTransform(120,-208);

	this.dress_14 = new lib.dress_14_mc();
	this.dress_14.setTransform(0,-208);

	this.dress_13 = new lib.dress_13_mc();
	this.dress_13.setTransform(-120,-208);

	this.dress_18 = new lib.dress_18_mc();
	this.dress_18.setTransform(120,-208);

	this.dress_16 = new lib.dress_16_mc();
	this.dress_16.setTransform(0,-208);

	this.dress_17 = new lib.dress_17_mc();
	this.dress_17.setTransform(-120,-208);

	this.dress_21 = new lib.dress_21_mc();
	this.dress_21.setTransform(120,-208);

	this.dress_20 = new lib.dress_20_mc();
	this.dress_20.setTransform(0,-208);

	this.dress_19 = new lib.dress_19_mc();
	this.dress_19.setTransform(-120,-208);

	this.dress_24 = new lib.dress_24_mc();
	this.dress_24.setTransform(120,-208);

	this.dress_23 = new lib.dress_23_mc();
	this.dress_23.setTransform(0,-208);

	this.dress_22 = new lib.dress_22_mc();
	this.dress_22.setTransform(-120,-208);

	this.dress_27 = new lib.dress_27_mc();
	this.dress_27.setTransform(120,-208);

	this.dress_26 = new lib.dress_26_mc();
	this.dress_26.setTransform(0,-208);

	this.dress_25 = new lib.dress_25_mc();
	this.dress_25.setTransform(-120,-208);

	this.dress_3 = new lib.dress_3_mc();
	this.dress_3.setTransform(120,-208);

	this.dress_2 = new lib.dress_2_mc();
	this.dress_2.setTransform(0,-208);

	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(-120,-208);

	this.cloak_6 = new lib.cloak_6_mc();
	this.cloak_6.setTransform(115,-38);

	this.cloak_5 = new lib.cloak_5_mc();
	this.cloak_5.setTransform(0,-38);

	this.cloak_4 = new lib.cloak_4_mc();
	this.cloak_4.setTransform(-115,-38);

	this.cloak_3 = new lib.cloak_3_mc();
	this.cloak_3.setTransform(115,-208);

	this.cloak_2 = new lib.cloak_2_mc();
	this.cloak_2.setTransform(0,-208);

	this.cloak_1 = new lib.cloak_1_mc();
	this.cloak_1.setTransform(-115,-208);

	this.cloak_10 = new lib.cloak_10_mc();
	this.cloak_10.setTransform(115,-38);

	this.cloak_11 = new lib.cloak_11_mc();
	this.cloak_11.setTransform(0,-45);

	this.cloak_9 = new lib.cloak_9_mc();
	this.cloak_9.setTransform(-115,-38);

	this.cloak_8 = new lib.cloak_8_mc();
	this.cloak_8.setTransform(90,-208);

	this.cloak_7 = new lib.cloak_7_mc();
	this.cloak_7.setTransform(-90,-208);

	this.shoes_6 = new lib.shoes_6_mc();
	this.shoes_6.setTransform(0,45);

	this.shoes_5 = new lib.shoes_5_mc();
	this.shoes_5.setTransform(100,13);

	this.shoes_4 = new lib.shoes_4_mc();
	this.shoes_4.setTransform(-100,13);

	this.shoes_3 = new lib.shoes_3_mc();
	this.shoes_3.setTransform(110,-138);

	this.shoes_2 = new lib.shoes_2_mc();
	this.shoes_2.setTransform(0,-138);

	this.shoes_1 = new lib.shoes_1_mc();
	this.shoes_1.setTransform(-110,-138);

	this.shoes_14 = new lib.shoes_14_mc();
	this.shoes_14.setTransform(-110,-75);

	this.shoes_13 = new lib.shoes_13_mc();
	this.shoes_13.setTransform(0,-75);

	this.shoes_12 = new lib.shoes_12_mc();
	this.shoes_12.setTransform(110,-75);

	this.shoes_11 = new lib.shoes_11_mc();
	this.shoes_11.setTransform(70,-158);

	this.shoes_10 = new lib.shoes_10_mc();
	this.shoes_10.setTransform(90,38);

	this.shoes_9 = new lib.shoes_9_mc();
	this.shoes_9.setTransform(-90,38);

	this.shoes_8 = new lib.shoes_8_mc();
	this.shoes_8.setTransform(-70,-160);

	this.shoes_7 = new lib.shoes_7_mc();
	this.shoes_7.setTransform(0,62);

	this.headdress_6 = new lib.headdress_6_mc();
	this.headdress_6.setTransform(115,-85);

	this.headdress_4 = new lib.headdress_4_mc();
	this.headdress_4.setTransform(-115,-85);

	this.headdress_5 = new lib.headdress_5_mc();
	this.headdress_5.setTransform(0,-100);

	this.headdress_11 = new lib.headdress_11_mc();
	this.headdress_11.setTransform(115,56.7);

	this.headdress_10 = new lib.headdress_10_mc();
	this.headdress_10.setTransform(0,-21);

	this.headdress_9 = new lib.headdress_9_mc();
	this.headdress_9.setTransform(-115,-13);

	this.headdress_8 = new lib.headdress_8_mc();
	this.headdress_8.setTransform(115,-20);

	this.headdress_7 = new lib.headdress_7_mc();
	this.headdress_7.setTransform(-36,70);

	this.headdress_3 = new lib.headdress_3_mc();
	this.headdress_3.setTransform(110,-172.5);

	this.headdress_2 = new lib.headdress_2_mc();
	this.headdress_2.setTransform(-110,-172.7);

	this.headdress_1 = new lib.headdress_1_mc();
	this.headdress_1.setTransform(0,-161);

	this.left_2 = new lib.left_2_mc();
	this.left_2.setTransform(0,25);

	this.left_9 = new lib.left_9_mc();
	this.left_9.setTransform(-74.6,-9.1,1,1,-40.8,0,0,0,-0.1);

	this.left_7 = new lib.left_7_mc();
	this.left_7.setTransform(109.8,80.3,1,1,77.2,0,0,-0.1,-0.1);

	this.left_6 = new lib.left_6_mc();
	this.left_6.setTransform(70,-164);

	this.left_5 = new lib.left_5_mc();
	this.left_5.setTransform(88.3,0.3,1,1,45);

	this.left_4 = new lib.left_4_mc();
	this.left_4.setTransform(-96.1,47.1,1,1,-55.5,0,0,6.5,-0.1);

	this.left_1 = new lib.left_1_mc();
	this.left_1.setTransform(-70,-161);

	this.left_8 = new lib.left_8_mc();
	this.left_8.setTransform(0,-125);

	this.left_3 = new lib.left_3_mc();
	this.left_3.setTransform(0,96);

	this.left_10 = new lib.left_10_mc();
	this.left_10.setTransform(0,-20);

	this.right_13 = new lib.right_13_mc();
	this.right_13.setTransform(35.6,-25.4);

	this.right_12 = new lib.right_12_mc();
	this.right_12.setTransform(-100,80);

	this.right_11 = new lib.right_11_mc();
	this.right_11.setTransform(0,80);

	this.right_10 = new lib.right_10_mc();
	this.right_10.setTransform(100,80);

	this.right_9 = new lib.right_9_mc();
	this.right_9.setTransform(0,-158.3);

	this.right_6 = new lib.right_6_mc();
	this.right_6.setTransform(100,-145);

	this.right_4 = new lib.right_4_mc();
	this.right_4.setTransform(109.9,-13.4,1,1,0,0,0,0,0.2);

	this.right_3 = new lib.right_3_mc();
	this.right_3.setTransform(-32.4,-34.1);

	this.right_2 = new lib.right_2_mc();
	this.right_2.setTransform(-110,-27.8);

	this.right_1 = new lib.right_1_mc();
	this.right_1.setTransform(-100,-138);

	this.right_8 = new lib.right_8_mc();
	this.right_8.setTransform(105,-133);

	this.right_7 = new lib.right_7_mc();
	this.right_7.setTransform(-105,-131);

	this.right_5 = new lib.right_5_mc();
	this.right_5.setTransform(0,-128);

	this.right_17 = new lib.right_17_mc();
	this.right_17.setTransform(-3.4,87.6);

	this.right_16 = new lib.right_16_mc();
	this.right_16.setTransform(-111.2,23.6);

	this.right_15 = new lib.right_15_mc();
	this.right_15.setTransform(4.9,-32.1);

	this.right_14 = new lib.right_14_mc();
	this.right_14.setTransform(129,36.9);

	this.ass_3 = new lib.ass_3_mc();
	this.ass_3.setTransform(0,-140);

	this.ass_2 = new lib.ass_2_mc();
	this.ass_2.setTransform(0,70);

	this.ass_1 = new lib.ass_1_mc();
	this.ass_1.setTransform(0,-50);

	this.wings_3 = new lib.wings_3_mc();
	this.wings_3.setTransform(0,70);

	this.wings_2 = new lib.wings_2_mc();
	this.wings_2.setTransform(0,-30);

	this.wings_1 = new lib.wings_1_mc();
	this.wings_1.setTransform(0,-130);

	this.wings_7 = new lib.wings_7_mc();
	this.wings_7.setTransform(0,70);

	this.wings_6 = new lib.wings_6_mc();
	this.wings_6.setTransform(0,-30);

	this.wings_5 = new lib.wings_5_mc();
	this.wings_5.setTransform(0,-140);

	this.wings_4 = new lib.wings_4_mc();
	this.wings_4.setTransform(0,-130);

	this.wings_8 = new lib.wings_8_mc();
	this.wings_8.setTransform(0,70);

	this.wings_9 = new lib.wings_9_mc();
	this.wings_9.setTransform(0,-30);

	this.wings_12 = new lib.wings_12_mc();
	this.wings_12.setTransform(0,65);

	this.wings_11 = new lib.wings_11_mc();
	this.wings_11.setTransform(0,-35);

	this.wings_10 = new lib.wings_10_mc();
	this.wings_10.setTransform(0,-135);

	this.wings_15 = new lib.wings_15_mc();
	this.wings_15.setTransform(0,-160);

	this.wings_14 = new lib.wings_14_mc();
	this.wings_14.setTransform(80,-40);

	this.wings_13 = new lib.wings_13_mc();
	this.wings_13.setTransform(-80,-40);

	this.wings_16 = new lib.wings_16_mc();
	this.wings_16.setTransform(0,100);

	this.beads_9 = new lib.beads_9_mc();
	this.beads_9.setTransform(110,-153.8);

	this.beads_8 = new lib.beads_8_mc();
	this.beads_8.setTransform(9,-161.9);

	this.beads_7 = new lib.beads_7_mc();
	this.beads_7.setTransform(-110,62.2);

	this.beads_6 = new lib.beads_6_mc();
	this.beads_6.setTransform(110,59.4);

	this.beads_5 = new lib.beads_5_mc();
	this.beads_5.setTransform(-130,-46.7);

	this.beads_4 = new lib.beads_4_mc();
	this.beads_4.setTransform(-110,-154.7);

	this.beads_3 = new lib.beads_3_mc();
	this.beads_3.setTransform(0,59.3);

	this.beads_2 = new lib.beads_2_mc();
	this.beads_2.setTransform(130,-43.5);

	this.beads_1 = new lib.beads_1_mc();
	this.beads_1.setTransform(0,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_6},{t:this.hair_5},{t:this.hair_4},{t:this.hair_3},{t:this.hair_2},{t:this.hair_1}]}).to({state:[{t:this.dress_29},{t:this.dress_30},{t:this.dress_28}]},1).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_4}]},1).to({state:[{t:this.dress_9},{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.dress_10},{t:this.dress_11},{t:this.dress_12}]},1).to({state:[{t:this.dress_13},{t:this.dress_14},{t:this.dress_15}]},1).to({state:[{t:this.dress_17},{t:this.dress_16},{t:this.dress_18}]},1).to({state:[{t:this.dress_19},{t:this.dress_20},{t:this.dress_21}]},1).to({state:[{t:this.dress_22},{t:this.dress_23},{t:this.dress_24}]},1).to({state:[{t:this.dress_25},{t:this.dress_26},{t:this.dress_27}]},1).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_3}]},1).to({state:[{t:this.cloak_1},{t:this.cloak_2},{t:this.cloak_3},{t:this.cloak_4},{t:this.cloak_5},{t:this.cloak_6}]},1).to({state:[{t:this.cloak_7},{t:this.cloak_8},{t:this.cloak_9},{t:this.cloak_11},{t:this.cloak_10}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_5},{t:this.shoes_6}]},1).to({state:[{t:this.shoes_7},{t:this.shoes_8},{t:this.shoes_9},{t:this.shoes_10},{t:this.shoes_11},{t:this.shoes_12},{t:this.shoes_13},{t:this.shoes_14}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_7},{t:this.headdress_8},{t:this.headdress_9},{t:this.headdress_10},{t:this.headdress_11},{t:this.headdress_5},{t:this.headdress_4},{t:this.headdress_6}]},1).to({state:[{t:this.left_1},{t:this.left_4},{t:this.left_5},{t:this.left_6},{t:this.left_7},{t:this.left_9},{t:this.left_2}]},1).to({state:[{t:this.left_10},{t:this.left_3},{t:this.left_8}]},1).to({state:[{t:this.right_1},{t:this.right_2},{t:this.right_3},{t:this.right_4},{t:this.right_6},{t:this.right_9},{t:this.right_10},{t:this.right_11},{t:this.right_12},{t:this.right_13}]},1).to({state:[{t:this.right_14},{t:this.right_15},{t:this.right_16},{t:this.right_17},{t:this.right_5},{t:this.right_7},{t:this.right_8}]},1).to({state:[{t:this.ass_1},{t:this.ass_2},{t:this.ass_3}]},1).to({state:[{t:this.wings_1},{t:this.wings_2},{t:this.wings_3}]},1).to({state:[{t:this.wings_5},{t:this.wings_6},{t:this.wings_7}]},1).to({state:[{t:this.wings_9},{t:this.wings_8},{t:this.wings_4}]},1).to({state:[{t:this.wings_10},{t:this.wings_11},{t:this.wings_12}]},1).to({state:[{t:this.wings_16},{t:this.wings_13},{t:this.wings_14},{t:this.wings_15}]},1).to({state:[{t:this.beads_1},{t:this.beads_2},{t:this.beads_3},{t:this.beads_4},{t:this.beads_5},{t:this.beads_6},{t:this.beads_7},{t:this.beads_8},{t:this.beads_9}]},1).wait(1));

	// decor
	this.instance = new lib.pipe_mc();
	this.instance.setTransform(0,-200);
	this.instance._off = true;

	this.instance_1 = new lib.pipe_mc();
	this.instance_1.setTransform(0,-200);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(0,110);

	this.instance_3 = new lib.shelf_2_mc();
	this.instance_3.setTransform(0,-120);

	this.instance_4 = new lib.shelf_2_mc();
	this.instance_4.setTransform(0,-150);

	this.instance_5 = new lib.pipe_mc();
	this.instance_5.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-200}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-200}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{y:-120}},{t:this.instance_2,p:{y:110}}]},1).to({state:[{t:this.instance_3,p:{y:-120}},{t:this.instance_2,p:{y:110}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{y:-150}},{t:this.instance_3,p:{y:110}},{t:this.instance_2,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{y:-120}}]},1).to({state:[{t:this.instance_3,p:{y:-120}},{t:this.instance},{t:this.instance_2,p:{y:110}}]},1).to({state:[{t:this.instance_4,p:{y:-110}},{t:this.instance_3,p:{y:110}},{t:this.instance_2,p:{y:0}}]},1).to({state:[{t:this.instance_3,p:{y:-110}},{t:this.instance},{t:this.instance_2,p:{y:110}}]},1).to({state:[{t:this.instance_5,p:{y:-30}},{t:this.instance_1,p:{y:-130}},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_5,p:{y:-170}},{t:this.instance_1,p:{y:-60}},{t:this.instance}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(10).to({y:-30},0).wait(1).to({_off:true},1).wait(1).to({_off:false,y:-80},0).wait(1).to({y:-20},0).to({_off:true},1).wait(1).to({_off:false,y:-80},0).to({_off:true},1).wait(1).to({_off:false,y:-60},0).wait(1).to({y:70},0).to({_off:true},1).wait(5).to({_off:false,y:50},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-179,339.5,299);
p.frameBounds = [rect, new cjs.Rectangle(-207.6,-217.4,416.4,443.3), new cjs.Rectangle(-220.5,-219.8,464,441.3), new cjs.Rectangle(-215.6,-220.2,405.7,440.4), new cjs.Rectangle(-215,-217.8,465.1,439.3), new cjs.Rectangle(-210.5,-216.6,486.5,436.1), new cjs.Rectangle(-214.1,-217,419.9,434.5), new cjs.Rectangle(-211.3,-220.2,433.3,436.7), new cjs.Rectangle(-217.4,-215,438.9,434.9), new cjs.Rectangle(-213.9,-218.7,440.9,440.6), new cjs.Rectangle(-196.3,-215.8,386.3,402.1), new cjs.Rectangle(-201,-220,411,319.6), new cjs.Rectangle(-201,-220,411,373.4), new cjs.Rectangle(-183,-190,393,324.2), new cjs.Rectangle(-190,-210,400,344.2), new cjs.Rectangle(-190,-202.7,400,340.1), new cjs.Rectangle(-210.6,-211.4,480.4,392.2), new cjs.Rectangle(-190,-173.3,400,325.7), new cjs.Rectangle(-183,-211.3,393,345.5), new cjs.Rectangle(-190,-170,400,430.9), new cjs.Rectangle(-190,-170.5,400,305.5), new cjs.Rectangle(-151.7,-173,361.8,286), new cjs.Rectangle(-150,-205,360,337.5), new cjs.Rectangle(-166.1,-177.8,376.2,296.7), new cjs.Rectangle(-170.2,-197.8,380.3,321.5), new cjs.Rectangle(-145.6,-217.7,355.7,403.8), new cjs.Rectangle(-190,-191.9,400,284.1)];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_for_clothes3();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-179,339.5,299);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_for_clothes2();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-179,339.5,299);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_for_clothes();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-179,339.5,299);
p.frameBounds = [rect];


(lib.looped_background_5_mc = function(mode,startPosition,loop) {
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
		var _that = this;
		var _interval_id;
		var _distance_num = 1;
		var _part_1_mc;
		var _part_2_mc;
		var _backgroundWidth_num;
		/*
		
		*/
		function _updateFunc()
		{
			/*
			
			*/
			_part_1_mc.x += _distance_num;
			if(_part_1_mc.x > _backgroundWidth_num)
			{
				_part_1_mc.x = -_backgroundWidth_num;
			}
			/*
			
			*/
			_part_2_mc.x += _distance_num;
			if(_part_2_mc.x > _backgroundWidth_num)
			{
				_part_2_mc.x = -_backgroundWidth_num;
			}
		}
		/*
		
		*/
		function _onTickIntervalFunc()
		{
			try
			{
				_updateFunc();
			}
			catch(event)
			{
				clearInterval(_interval_id);
				trace(event, 2);
			}
			finally
			{
				
			}
		}
		/*
		
		*/
		function _initFunc()
		{
			/*
			
			*/
			var body_mc = _that.body_mc;
			body_mc.gotoAndStop(0);
			_part_1_mc = body_mc.part_1_mc;
			_part_1_mc.gotoAndStop(0);
			_part_1_mc.x = 0;
			_part_1_mc.y = 0;
			var background_mc = _part_1_mc.background_mc;
			background_mc.gotoAndStop(0);
			var bounds = background_mc.getBounds();
			_backgroundWidth_num = bounds.width;
			background_mc.visible = false;
			_part_2_mc = body_mc.part_2_mc;
			_part_2_mc.gotoAndStop(0);
			_part_2_mc.x = _backgroundWidth_num;
			_part_2_mc.y = 0;
			background_mc = _part_2_mc.background_mc;
			background_mc.gotoAndStop(0);
			background_mc.visible = false;
			/*
			
			*/
			_interval_id = setInterval(_onTickIntervalFunc, 50);
		}
		/*
		
		*/
		_initFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.looped_background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-55.3,2395,291.7);
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
	this.credits_btn.setTransform(40.1,40,0.636,0.636,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,860);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(640,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn},{t:this.moreGames_btn},{t:this.logo_btn},{t:this.instruction_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.credits_btn}]}).wait(1));

	// free_games
	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,980);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.freeGames_mc).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,420,0.921,0.921);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.clouds_3_mc();
	this.instance_1.setTransform(400,550);

	this.instance_2 = new lib.clouds_2_mc();
	this.instance_2.setTransform(650,565);

	this.instance_3 = new lib.clouds_1_mc();
	this.instance_3.setTransform(150,565);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// heroes
	this.instance_4 = new lib.heroes_0_mc();
	this.instance_4.setTransform(394.4,300,1,1,0,0,0,394.4,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// decor
	this.thunder_comp = new lib.thunder_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.thunder_comp).wait(1));

	// decor
	this.looped_background_comp = new lib.looped_background_5_mc();
	this.looped_background_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.looped_background_comp).wait(1));

	// bg
	this.instance_5 = new lib.background_6_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-88,2395,1113);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn}]}).wait(1));

	// decor
	this.instance = new lib.clouds_3_mc();
	this.instance.setTransform(730,610,1,1,0,0,180);

	this.instance_1 = new lib.clouds_3_mc();
	this.instance_1.setTransform(70,610);

	this.instance_2 = new lib.clouds_2_mc();
	this.instance_2.setTransform(520,620,0.826,0.826);

	this.instance_3 = new lib.clouds_1_mc();
	this.instance_3.setTransform(320,620,0.826,0.826);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.looped_background_comp = new lib.looped_background_5_mc();
	this.looped_background_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.looped_background_comp).wait(1));

	// bg
	this.instance_4 = new lib.background_6_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-88,2395,868.1);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(530,535);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(270,535);

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
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.012;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-319.9,1200,1184.9);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
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
	this.dressupPanel_1_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_1_mc.setTransform(230,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_3 = new lib.mulan();
	this.hero_3.setTransform(640,760,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-325.7,1223,2430.7);
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
	this.dressupPanel_1_mc.setTransform(230,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.ariel();
	this.hero_2.setTransform(640,760,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-325.7,1223,2431.5);
p.frameBounds = [rect];


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
	this.dressupPanel_1_mc.setTransform(230,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.jasmine();
	this.hero_1.setTransform(640,760,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-325.7,1223,2431.3);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100.2,510.1,0.812,0.812,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400.1,700.1,0.812,0.812,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-325.7,1353,2430.7);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100.2,510.1,0.812,0.812,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400.1,700.1,0.812,0.812,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-325.7,1353,2431.5);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100.2,510.1,0.812,0.812,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400.1,700.1,0.812,0.812,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-325.7,1353,2431.3);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(80,180);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-80,180);

	this.set_6 = new lib.set_0_mc();
	this.set_6.setTransform(0,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_6},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-266.5,-450,533,855.7);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(80,180);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-80,180);

	this.set_6 = new lib.set_0_mc();
	this.set_6.setTransform(0,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_6},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-266.5,-450,533,855.7);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(80,180);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-80,180);

	this.set_6 = new lib.set_0_mc();
	this.set_6.setTransform(0,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_6},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-266.5,-450,533,855.7);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
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
	this.dressupPanel_1_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_1_mc.setTransform(210,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_3 = new lib.mulan();
	this.hero_3.setTransform(600,320,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

	// wings
	this.wings_hero_3 = new lib.wing_mulan();
	this.wings_hero_3.setTransform(586.9,159.9,0.924,0.924,0,0,0,-3.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.wings_hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-318.6,859.9,1171.8);
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
	this.dressupPanel_1_mc.setTransform(210,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.ariel();
	this.hero_2.setTransform(600,320,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

	// wings
	this.wings_hero_2 = new lib.wing_ariel();
	this.wings_hero_2.setTransform(586.8,159.9,0.934,0.934,0,0,0,-3.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.wings_hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-318.6,861.9,1177.6);
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
	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.hint_mc = new lib.hint_mc();
	this.hint_mc.setTransform(400,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hint_mc},{t:this.indicator_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_1_mc.setTransform(210,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.jasmine();
	this.hero_1.setTransform(600,320,0.719,0.719);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// wings
	this.wings_hero_1 = new lib.wing_jasmine();
	this.wings_hero_1.setTransform(586.8,159.9,0.931,0.931,0,0,0,-3.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.wings_hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-318.6,861.4,1175.9);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710.1,510.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(537.1,716.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-318.6,1200,1171.8);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710.1,510.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(537.1,716.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-318.6,1200,1177.6);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710.1,510.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(537.1,716.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-318.6,1200,1175.9);
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
	this.instance_5.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LocationScreen_4();
	this.instance_7.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.instance_8 = new lib.LocationScreen_5();

	this.instance_9 = new lib.LocationScreen_6();
	this.instance_9.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.instance_10 = new lib.ResultScreen();

	this.instance_11 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(350,50);

	this.instance_12 = new lib.TrackMove();
	this.instance_12.setTransform(275,50);

	this.instance_13 = new lib.Cursor();
	this.instance_13.setTransform(190,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120,50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(50,50);

	this.instance_14 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_13},{t:this.instance_12},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-200,-86.2,2395,1106.3), new cjs.Rectangle(-200,-86.2,2395,866.3), new cjs.Rectangle(-200,-325.7,1353,2431.3), new cjs.Rectangle(-200,-318.6,1200,1175.9), new cjs.Rectangle(-200,-325.7,1353,2431.5), new cjs.Rectangle(-200,-318.6,1200,1177.6), new cjs.Rectangle(-200,-325.7,1353,2430.7), new cjs.Rectangle(-200,-318.6,1200,1171.8), new cjs.Rectangle(-200,-319.9,1200,1184.9), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(15,0,353,100), new cjs.Rectangle(-200,-310,1200,1220), rect=null, rect, rect, rect, rect];


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