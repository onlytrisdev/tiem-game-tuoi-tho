/**

 * Keyboard drop — Space / ArrowDown release hook (setStatus 1) like a tap drop.

 */

(function (global) {

  'use strict';



  var LOG = '[ArcadeInput]';

  var CANVAS_ID = 'GameCanvas';

  var bound = false;



  function isTypingTarget(el) {

    if (!el) return false;

    var tag = (el.tagName || '').toLowerCase();

    if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;

    if (el.isContentEditable) return true;

    return false;

  }



  function isBlocked() {

    try {

      if (global.DataManager) {

        if (global.DataManager.pause) return true;

        if (global.DataManager.pasue_video) return true;

      }

    } catch (e) {

      /* ignore */

    }

    try {

      if (

        global.ArcadeHistory &&

        global.ArcadeHistory.isScoreGateOpen &&

        global.ArcadeHistory.isScoreGateOpen()

      ) {

        return true;

      }

    } catch (e2) {

      /* ignore */

    }

    if (document.getElementById('gv_savescore')) return true;

    return false;

  }



  function getSceneName() {

    try {

      var scene = global.cc && global.cc.director && global.cc.director.getScene();

      if (!scene) return '';

      return String(scene.name || scene._name || '');

    } catch (e) {

      return '';

    }

  }



  function componentLooksLikeController(comp) {

    if (!comp || !comp.node || !comp.node.activeInHierarchy) return false;

    if (typeof comp.getFreeHand !== 'function') return false;

    if (comp.node.active === false || comp.enabled === false) return false;

    return true;

  }



  function findActiveController() {

    try {

      if (!global.cc || !global.cc.director) return null;

      var scene = global.cc.director.getScene();

      if (!scene || typeof scene.getComponentsInChildren !== 'function') return null;

      var comps = scene.getComponentsInChildren(global.cc.Component);

      var i;

      var best = null;

      for (i = 0; i < comps.length; i++) {

        var c = comps[i];

        if (!componentLooksLikeController(c)) continue;

        best = c;

        if (Array.isArray(c.hands) && c.hands.length && c.getFreeHand()) {

          return c;

        }

      }

      return best;

    } catch (e) {

      console.warn(LOG, 'findActiveController failed', e);

      return null;

    }

  }



  function playDropSound(sceneName) {

    if (sceneName !== 'game1' && sceneName !== 'game3') return;

    try {

      if (global.DataManager && typeof global.DataManager.play_effect === 'function') {

        global.DataManager.play_effect('sound/touzhi.mp3');

      }

    } catch (e) {

      /* ignore */

    }

  }



  function isAccuracyBuffActive(ctrl) {

    if (!ctrl || !ctrl.cd) return false;

    try {

      var name = getSceneName();

      if (name === 'game1') return ctrl.cd[2] > 0;

      if (name === 'game2' || name === 'game3') return ctrl.cd[1] > 0;

    } catch (e) {

      /* ignore */

    }

    return false;

  }



  function isBombStone(stone) {

    if (!stone) return true;

    var data = stone.data || {};

    if (Number(data.tag) === 2) return true;

    var res = String(data.res || '');

    if (res.indexOf('bomb') !== -1) return true;

    try {

      if (stone.node && typeof stone.node.getComponent === 'function') {

        var col = stone.node.getComponent(global.cc.Collider);

        if (col && Number(col.tag) === 2) return true;

      }

    } catch (e) {

      /* ignore */

    }

    return false;

  }



  function collectRewardStones(ctrl) {

    var list = [];

    var seen = {};

    function addFromRoot(root) {

      if (!root || typeof root.getComponentsInChildren !== 'function') return;

      var stones = root.getComponentsInChildren('stone');

      var i;

      var stone;

      var id;

      var price;

      if (!stones || !stones.length) return;

      for (i = 0; i < stones.length; i++) {

        stone = stones[i];

        if (!stone || !stone.node || !stone.node.activeInHierarchy) continue;

        id = stone.node.uuid || stone.node._id;

        if (id && seen[id]) continue;

        if (isBombStone(stone)) continue;

        price = Number(stone.data && stone.data.price);

        if (!(price > 0)) continue;

        if (id) seen[id] = true;

        list.push(stone);

      }

    }

    addFromRoot(ctrl.nodeCur);

    addFromRoot(ctrl.nodeStone);

    addFromRoot(ctrl.node);

    return list;

  }



  function pickRandomReward(ctrl) {

    var list = collectRewardStones(ctrl);

    if (!list.length) return null;

    return list[Math.floor(Math.random() * list.length)];

  }



  function aimHandAtNode(hand, itemNode) {

    if (!hand || typeof hand.setDir !== 'function' || !itemNode) return false;

    if (!global.cc) return false;

    var world = itemNode.convertToWorldSpaceAR(global.cc.v2(0, 0));

    var win = global.cc.winSize || { width: 1280, height: 720 };

    // Same space as onTouchStart: getLocation() minus winSize/2, then setDir.
    hand.setDir(world.x - win.width / 2, world.y - win.height / 2);

    return true;

  }



  function dropHookOnController(ctrl) {

    if (!ctrl || typeof ctrl.getFreeHand !== 'function') return false;

    var hand = ctrl.getFreeHand();

    if (!hand || typeof hand.setStatus !== 'function') return false;

    if (isAccuracyBuffActive(ctrl)) {

      var target = pickRandomReward(ctrl);

      if (target && target.node && aimHandAtNode(hand, target.node)) {

        playDropSound(getSceneName());

        return true;

      }

    }

    hand.setStatus(1);

    playDropSound(getSceneName());

    return true;

  }



  function tryDropHook() {

    if (isBlocked()) return false;

    var ctrl = findActiveController();

    if (!ctrl) return false;

    try {

      return dropHookOnController(ctrl);

    } catch (e) {

      console.warn(LOG, 'drop failed', e);

      return false;

    }

  }



  function focusCanvas() {

    var canvas = document.getElementById(CANVAS_ID);

    if (!canvas || typeof canvas.focus !== 'function') return;

    try {

      canvas.focus({ preventScroll: true });

    } catch (e) {

      try {

        canvas.focus();

      } catch (e2) {

        /* ignore */

      }

    }

  }



  function onKeyDown(ev) {

    if (!ev || ev.repeat) return;

    if (isTypingTarget(ev.target)) return;



    var key = ev.key || '';

    var code = ev.code || '';

    var keyCode = ev.keyCode || ev.which || 0;

    var isSpace =

      key === ' ' || key === 'Spacebar' || code === 'Space' || keyCode === 32;

    var isDown =

      key === 'ArrowDown' || code === 'ArrowDown' || keyCode === 40;



    if (!isSpace && !isDown) return;



    if (tryDropHook()) {

      try {

        ev.preventDefault();

        ev.stopPropagation();

      } catch (e) {

        /* ignore */

      }

    }

  }



  function bindInput() {

    if (bound) return;

    bound = true;

    document.addEventListener('keydown', onKeyDown, true);

    document.addEventListener('mousedown', focusCanvas, true);

    document.addEventListener('touchstart', focusCanvas, true);

    focusCanvas();

    console.log(LOG, 'Space / ArrowDown drop armed (capture)');

  }



  function start() {

    bindInput();

    if (global.cc && global.cc.director && typeof global.cc.director.on === 'function') {

      try {

        global.cc.director.on(global.cc.Director.EVENT_AFTER_SCENE_LAUNCH, focusCanvas);

      } catch (e) {

        /* director not ready yet — bridge will call focusCanvas */

      }

    }

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', start);

  } else {

    start();

  }



  global.ArcadeInput = {

    tryDropHook: tryDropHook,

    focusCanvas: focusCanvas

  };

})(window);


