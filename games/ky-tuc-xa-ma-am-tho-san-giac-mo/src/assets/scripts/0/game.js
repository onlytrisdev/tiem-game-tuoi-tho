window.GlobalGame = {}, window.GlobalGame.showRewardVideo = function(o, n) {
	console.log("Quảng cáo ở đây"), SDK.shipin(n)
}, window.GlobalGame.showInterstitial = function() {}, window.GlobalGame.share = function(o) {
	window.GlobalGame.isDouyin() && window.DouyinSDK.share(o)
}, window.GlobalGame.canShare = function() {
	return !!window.GlobalGame.isDouyin() && window.DouyinSDK.canShare()
}, window.GlobalGame.startRecord = function() {
	window.GlobalGame.isDouyin() && window.DouyinSDK.startRecord()
}, window.GlobalGame.stopRecord = function() {
	window.GlobalGame.isDouyin() && window.DouyinSDK.stopRecord()
}, window.GlobalGame.isDouyin = function() {
	return null != window.DouyinSDK
}, window.GlobalGame.isAudit = function() {
	return !((new Date).getTime() > 16951392e5)
}, window.jsb = {
	reflection: {
		callStaticMethod: function(o, n, i, w) {
			"playAd" == n && window.GlobalGame.showInterstitial(w)
		}
	}
};

/**
 * PC keyboard fix (WASD / Arrow) for all 7 modes.
 *
 * Root causes of previous failure:
 * 1. Wrote Joyconbili on EVENT_AFTER_UPDATE — AFTER Player.lateUpdate already read it.
 * 2. Relied on getComponent("ClassName") scene walk; Player reads GameLayer.ins singleton.
 * 3. JoyAra.active gate skipped layers; shouldEnableKeyboard could block on touch PCs.
 * 4. Only event.code — some browsers need keyCode / key.
 *
 * Fix: resolve via cc.js.getClassByName(...).ins, apply on EVENT_BEFORE_UPDATE,
 * duck-type fallback via node._components, always accept keyboard on desktop.
 */
(function initPCKeyboardController() {
	var DORM_CLASS_NAMES = ["GameLayer", "GameLayerduoren", "cooperationGameLayer"];
	var MAP_CLASS_NAMES = ["MapMgr", "SceneBettale_Map"];
	var BATTLE_PLAYER_NAMES = ["PlayerActor", "SceneBettale_PlayerAcor"];
	var BATTLE_PAGE_NAMES = ["PageGame", "PageBattle"];

	// code / key / keyCode → axis contribution
	var KEY_AXIS = {
		KeyW: [0, 1], ArrowUp: [0, 1], w: [0, 1], W: [0, 1], 87: [0, 1], 38: [0, 1],
		KeyS: [0, -1], ArrowDown: [0, -1], s: [0, -1], S: [0, -1], 83: [0, -1], 40: [0, -1],
		KeyA: [-1, 0], ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0], 65: [-1, 0], 37: [-1, 0],
		KeyD: [1, 0], ArrowRight: [1, 0], d: [1, 0], D: [1, 0], 68: [1, 0], 39: [1, 0]
	};

	var keysDown = {};
	var initialized = false;
	var debug = {
		enabled: true,
		lastDir: { x: 0, y: 0 },
		lastTarget: null,
		hooked: false,
		frames: 0
	};

	function clearKeys() {
		for (var k in keysDown) {
			if (keysDown.hasOwnProperty(k)) {
				delete keysDown[k];
			}
		}
	}

	function isTypingInEditBox() {
		var el = document.activeElement;
		if (!el) {
			return false;
		}
		var tag = el.tagName;
		return tag === "INPUT" || tag === "TEXTAREA" || el.isContentEditable;
	}

	function keyIdsFromEvent(event) {
		var ids = [];
		if (event.code) {
			ids.push(event.code);
		}
		if (event.key) {
			ids.push(event.key);
		}
		if (typeof event.keyCode === "number" && event.keyCode) {
			ids.push(event.keyCode);
		}
		if (typeof event.which === "number" && event.which) {
			ids.push(event.which);
		}
		return ids;
	}

	function isMoveKeyEvent(event) {
		var ids = keyIdsFromEvent(event);
		for (var i = 0; i < ids.length; i++) {
			if (KEY_AXIS[ids[i]]) {
				return true;
			}
		}
		return false;
	}

	function onKeyDown(event) {
		if (isTypingInEditBox()) {
			return;
		}
		if (!isMoveKeyEvent(event)) {
			return;
		}
		var ids = keyIdsFromEvent(event);
		for (var i = 0; i < ids.length; i++) {
			keysDown[ids[i]] = true;
		}
		if (event.preventDefault) {
			event.preventDefault();
		}
	}

	function onKeyUp(event) {
		if (!isMoveKeyEvent(event)) {
			return;
		}
		var ids = keyIdsFromEvent(event);
		for (var i = 0; i < ids.length; i++) {
			delete keysDown[ids[i]];
		}
		if (event.preventDefault) {
			event.preventDefault();
		}
	}

	function computeDirection() {
		var x = 0;
		var y = 0;
		for (var id in keysDown) {
			if (!keysDown[id]) {
				continue;
			}
			var axis = KEY_AXIS[id];
			if (!axis) {
				continue;
			}
			x += axis[0];
			y += axis[1];
		}
		// clamp opposite keys
		if (x > 1) {
			x = 1;
		}
		if (x < -1) {
			x = -1;
		}
		if (y > 1) {
			y = 1;
		}
		if (y < -1) {
			y = -1;
		}
		if (x === 0 && y === 0) {
			return { x: 0, y: 0 };
		}
		var len = Math.sqrt(x * x + y * y);
		return { x: x / len, y: y / len };
	}

	function getClassByName(name) {
		if (typeof cc === "undefined" || !cc.js || !cc.js.getClassByName) {
			return null;
		}
		return cc.js.getClassByName(name);
	}

	function getClassIns(name) {
		var cls = getClassByName(name);
		if (!cls) {
			return null;
		}
		if (cls.ins) {
			return cls.ins;
		}
		if (cls._ins) {
			return cls._ins;
		}
		return null;
	}

	function isAlive(comp) {
		return !!(comp && comp.node && comp.node.isValid !== false);
	}

	function walkAllComponents(visit) {
		if (typeof cc === "undefined" || !cc.director) {
			return null;
		}
		var scene = cc.director.getScene();
		if (!scene) {
			return null;
		}
		var stack = [scene];
		while (stack.length) {
			var node = stack.pop();
			var comps = node._components;
			if (comps && comps.length) {
				for (var i = 0; i < comps.length; i++) {
					var found = visit(comps[i], node);
					if (found) {
						return found;
					}
				}
			}
			var children = node._children || node.children;
			if (children && children.length) {
				for (var c = 0; c < children.length; c++) {
					stack.push(children[c]);
				}
			}
		}
		return null;
	}

	function findDormLayer() {
		var i, layer;
		for (i = 0; i < DORM_CLASS_NAMES.length; i++) {
			layer = getClassIns(DORM_CLASS_NAMES[i]);
			if (isAlive(layer) && layer.Joyconbili != null) {
				return layer;
			}
		}
		// Duck-type fallback: any component that owns the joystick vector
		return walkAllComponents(function(comp) {
			if (comp && comp.Joyconbili != null && comp.MaxJoyr && comp.JoyAra) {
				return comp;
			}
			return null;
		});
	}

	function findBattlePlayer() {
		var i, map, page, player;
		for (i = 0; i < MAP_CLASS_NAMES.length; i++) {
			map = getClassIns(MAP_CLASS_NAMES[i]);
			if (isAlive(map) && map.player && typeof map.player.changeForward === "function") {
				return { player: map.player, pageName: null, map: map };
			}
		}
		player = walkAllComponents(function(comp) {
			if (comp && typeof comp.changeForward === "function" && typeof comp.moveEnd === "function" && comp.forwardVec) {
				return comp;
			}
			return null;
		});
		if (player) {
			return { player: player, pageName: null, map: null };
		}
		return null;
	}

	function findBattlePage() {
		var i, page;
		for (i = 0; i < BATTLE_PAGE_NAMES.length; i++) {
			page = getClassIns(BATTLE_PAGE_NAMES[i]);
			if (isAlive(page) && page.node && page.node.activeInHierarchy) {
				return page;
			}
		}
		for (i = 0; i < BATTLE_PAGE_NAMES.length; i++) {
			page = walkAllComponents(function(comp) {
				if (!comp || !comp.node || !comp.node.activeInHierarchy) {
					return null;
				}
				var n = comp.node.name || "";
				if (n.indexOf(BATTLE_PAGE_NAMES[i]) >= 0) {
					return comp;
				}
				if (typeof comp.isCanMove !== "undefined" && typeof comp.rocketMove === "function") {
					return comp;
				}
				if (typeof comp.rocketMove === "function" && typeof comp.rocketUp === "function") {
					return comp;
				}
				return null;
			});
			if (page) {
				return page;
			}
		}
		return null;
	}

	function isPaused() {
		if (cc.director.isPaused && cc.director.isPaused()) {
			return true;
		}
		return false;
	}

	function setJoy(layer, x, y) {
		if (!layer.Joyconbili) {
			layer.Joyconbili = cc.v2 ? cc.v2(x, y) : { x: x, y: y };
			return;
		}
		// Important: Player reads GameLayer.ins.Joyconbili — mutate in place
		layer.Joyconbili.x = x;
		layer.Joyconbili.y = y;
	}

	function applyDorm(layer, dir) {
		if (isPaused()) {
			setJoy(layer, 0, 0);
			return;
		}
		var gamingMgr = layer.m_GamingMgr || layer.m_cooperationGamingMgr;
		if (gamingMgr && gamingMgr.m_TimeMgr && gamingMgr.m_TimeMgr.TimeScal === 0) {
			setJoy(layer, 0, 0);
			return;
		}
		// Prefer keyboard; only yield if finger is actively dragging joystick
		if (layer.Joybg && layer.Joybg.active && (dir.x === 0 && dir.y === 0)) {
			return;
		}
		if (layer.Joybg && layer.Joybg.active && (dir.x !== 0 || dir.y !== 0)) {
			// keyboard overrides stuck Joybg
		}
		setJoy(layer, dir.x, dir.y);
		debug.lastTarget = "dorm:" + (layer.node && layer.node.name);
	}

	function applyBattle(dir) {
		var found = findBattlePlayer();
		if (!found || !found.player) {
			return false;
		}
		var player = found.player;
		var page = findBattlePage();
		if (isPaused()) {
			if (typeof player.moveEnd === "function") {
				player.moveEnd();
			}
			return true;
		}
		if (page && page.isCanMove === false) {
			if (typeof player.moveEnd === "function") {
				player.moveEnd();
			}
			return true;
		}
		if (dir.x !== 0 || dir.y !== 0) {
			player.changeForward(dir.x, dir.y);
		} else if (typeof player.moveEnd === "function") {
			player.moveEnd();
		}
		debug.lastTarget = "battle:" + (player.node && player.node.name);
		return true;
	}

	function applyMovement() {
		if (isTypingInEditBox()) {
			return;
		}
		debug.frames++;
		var dir = computeDirection();
		debug.lastDir = dir;

		var dorm = findDormLayer();
		if (dorm) {
			applyDorm(dorm, dir);
			return;
		}
		applyBattle(dir);
	}

	function bindListeners() {
		window.addEventListener("keydown", onKeyDown, true);
		window.addEventListener("keyup", onKeyUp, true);
		window.addEventListener("blur", clearKeys, false);
		document.addEventListener("keydown", onKeyDown, true);
		document.addEventListener("keyup", onKeyUp, true);
	}

	function setup() {
		if (initialized) {
			return;
		}
		if (typeof cc === "undefined" || !cc.director || !cc.Director) {
			return false;
		}
		initialized = true;
		bindListeners();
		// BEFORE_UPDATE runs before Player.lateUpdate — critical
		cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, applyMovement);
		cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, clearKeys);
		debug.hooked = true;
		window.__PCKeyboard = debug;
		console.log("[PCKeyboard] hooked EVENT_BEFORE_UPDATE — WASD/Arrow ready");
		return true;
	}

	function wait() {
		if (setup()) {
			return;
		}
		setTimeout(wait, 50);
	}

	wait();
})();
