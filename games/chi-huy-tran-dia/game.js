var config = {
	project: 'Chỉ huy trận địa',
	platform: '4399',
	appid: '100060614',
	appkey: '100060614',
	debug: false,
	inspector: false,
	backend_engine: 'laya',
	res_version: '200115',
	version: "1.3.0",
	libs: {},
};
var BROWSER_PLATFORMS = ['web', 'qtt', 'pure', '4399'];

if (typeof global === 'undefined') var global = this || {};
if (typeof window === 'undefined') var window = global;
if (typeof document !== 'undefined') document.title = config.project;

function initialize() {
	window.config = config;

	if (!config.debug) {
		// var cdn = "http://192.168.0.166:3100";// 此处配置资源 CDN URL
		var cdn = "https://hs.yz061.com/res/down/mengzhan/" + config.platform;
		if (cdn) {
			config.base_resource_url = cdn + '/';
		}
		if (!cdn.startsWith("http://192.168.")) {
			config.base_resource_url += config.res_version + '/';
		}
		if (BROWSER_PLATFORMS.indexOf(config.platform) >= 0) {
			config.base_resource_url = "";
		}
		config.stat = false;
	}

	// 设置加载JS脚本的函数
	if (typeof (wx) !== "undefined") {
		window.wx = wx;
		wx.is_simulator = wx.getSystemInfoSync().platform == 'devtools';
		window.load_script = require;
		window.wx.config = config;
	} else if (typeof (swan) !== "undefined") {
		swan.config = config;
		window.swan = swan;
		window.load_script = require;
		window.swan.config = config;
	} else if (typeof (qg) !== "undefined") {
		window.qg = qg;
		window.load_script = require;
		window.qg.config = config;
	} else if (typeof (document) !== 'undefined') { // Web 平台
		window.load_script = function (url) {
			var script = document.createElement("script");
			script.async = false;
			script.src = url;
			return document.body.appendChild(script);
		};
	}
};


function load_lib_module(module, file) {
	var file = file || module;
	var script = "./libs/modules/" + module + "/" + file + (config.debug ? ".js" : ".min.js");
	return window.load_script(script);
}

function load_platform_adapters() {
	switch (config.platform) {
		case 'qq': {
			load_lib_module("wx", "weapp-adapter");
			if (config.backend_engine === 'laya') load_lib_module("laya", "laya.qqmini");
		} break;
		case 'bytedance':
		case 'wechat': {
			load_lib_module("wx", "weapp-adapter");
			if (config.backend_engine === 'laya') load_lib_module("laya", "laya.wxmini");
		} break;
		case 'baidu': {
			load_lib_module("swan", "swan-adapter");
			if (config.backend_engine === 'laya') load_lib_module("laya", "laya.bdmini");
		} break;
		case 'oppo': {
			if (config.backend_engine === 'laya') load_lib_module("laya", "laya.quickgamemini");
		} break;
		case 'web':
		case '4399':
		default: {
		} break;
	}

};

function load_game_dependencies() {
	switch (config.backend_engine) {
		case 'laya': {
			load_lib_module("laya", "laya.core");
			load_lib_module("laya", "laya.html");
			load_lib_module("laya", "laya.ui");
			load_lib_module("fairygui", "fairygui.laya");
			load_lib_module("laya", "laya.d3");
			if (config.inspector) {
				load_lib_module("laya", "laya.debugtool");
			}
			if (config.platform == 'wechat' || config.platform == 'qq') {
				// 阿拉丁SDK
				window.load_script("sdk/ald/ald-game.js");
			}
		} break;
		case 'egret':
			load_lib_module("egret", "egret");
			load_lib_module("egret", "game");
			load_lib_module("egret", "egret.web");
			load_lib_module("fairygui", "fairygui.egret");
			break;
		default:
			break;
	}
};

function load_game_bundle() {
	if (typeof (wx) !== 'undefined' && wx.loadSubpackage) {
		wx.loadSubpackage({
			name: 'assets',
			success: function (res) { console.log("分包加载完成"); },
			fail: function (err) { console.error("分包加载出错", err); },
			complete: function () {
				wx.loadSubpackage({
					name: 'fairyui',
					success: function (res) { console.log("分包加载完成"); },
					fail: function (err) { console.error("分包加载出错", err); },
					complete: function () {
						load_lib_module("bundle");
					}
				});
			}
		});
	} else if (typeof (swan) !== 'undefined' && swan.loadSubpackage) {
		swan.loadSubpackage({
			name: 'assets',
			success: function (res) { console.log("分包加载完成"); },
			fail: function (err) { console.error("分包加载出错", err); },
			complete: function () {
				swan.loadSubpackage({
					name: 'fairyui',
					success: function (res) { console.log("分包加载完成"); },
					fail: function (err) { console.error("分包加载出错", err); },
					complete: function () {
						load_lib_module("bundle");
					}
				});
			}
		});
	} else {
		load_lib_module("bundle");
	}
};

initialize();
if (config.platform === 'vivo') {
	function start_game() {
		'$VIVO_TEMPLATE_ENTRY$'
	};
	if (qg.loadSubpackage) {
		qg.loadSubpackage({
			name: 'assets',
			success: function (res) { console.log("分包加载完成"); },
			fail: function (err) { console.error("分包加载出错", JSON.stringify(err, undefined, 2)); },
			complete: function () { start_game(); }
		});
	} else {
		start_game();
	}
} else {
	load_platform_adapters();
	load_game_dependencies();
	load_game_bundle();
}
