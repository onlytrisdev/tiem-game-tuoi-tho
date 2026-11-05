window.game = window.game || {};

game.B_TYPE = 1;
game.KIM_TYPE = 2;
game.WINX_TYPE = 3;
game.TYPE=game.WINX_TYPE;//3;

game.LEVELS_NUM = 6;
game.FPS = 24;
game.LOGIC_FPS = 24;
game.DEBUG_OPENED_LEVELS = 6;
game.IS_ALL_LEVELS_OPENED = true;
game.EFFECT_TYPE = 2;

game.BLOOM = 0;
game.STELLA = 1;
game.AISHA = 2;
game.MUSA = 3;
game.FLORA = 4;
game.TECHNA = 5;

game.isNeedDebugGui = false;
game.isDebugGuiOpened = false;
game.isLangSelectBtnVisible = false;


var isLevelEditor = false;
var isLogsEnabled = true;
var isSkipMainMenu = false;
var isLevelSelectShow = false;
var isGalleryShow = false;
var isLangSelectShow = false;
var autoLevelToLoad = 3;
var isDesktopBrowser = false;
var isLowGfx = false;
var isLoadAnimFromJSON = true;
var isNeedFpsMeter = false;
var STORAGE_PREFIX = "winxDressUp_3";
var scaleFactor = 1;
var animTicker = 0;

var HD_QUALITY_IMG_PATH = "winxdressupassets";
var HD_DRESS_IMG_PATH = "winxdressassets";
var HD_GIRLS_IMG_PATH = "winxgirlsassets";

var OBJ_TOP_POS = 0;
var OBJ_BOTTOM_POS = 1;
var OBJ_VERTICAL_ANY_POS = 2;
var OBJ_LEFT_POS = 3;
var OBJ_RIGHT_POS = 4;
var OBJ_HORIZ_ANY_POS = 5;

game.log = isLogsEnabled ? console.log.bind(window.console) : function(){};
window.log = game.log;
