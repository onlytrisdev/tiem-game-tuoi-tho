/**
 * Hook direction fix — clamp aim/drop to downward arc; ignore UI button touches.
 */
(function (global) {
  'use strict';

  var LOG = '[ArcadeHookFix]';
  var HOOK_ANGLE_MIN = 15;
  var HOOK_ANGLE_MAX = 165;

  var patched = {
    hand: false,
    gamelogic: false,
    gamelogic2: false
  };
  var pollTimer = 0;
  var directorBound = false;

  function clampHookAngle(angle) {
    var a = Number(angle) || 0;
    if (a < HOOK_ANGLE_MIN) return HOOK_ANGLE_MIN;
    if (a > HOOK_ANGLE_MAX) return HOOK_ANGLE_MAX;
    return a;
  }

  function wrapMethod(proto, name, buildWrapper) {
    var orig = proto[name];
    if (typeof orig !== 'function') return false;
    if (orig._gvHookFixWrapped) return true;
    var wrapped = buildWrapper(orig);
    wrapped._gvHookFixWrapped = true;
    proto[name] = wrapped;
    return true;
  }

  function getClass(name) {
    try {
      if (global.cc && global.cc.js && typeof global.cc.js.getClassByName === 'function') {
        return global.cc.js.getClassByName(name);
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  function findClassByMethod(methodName) {
    try {
      if (!global.cc || !global.cc.director) return null;
      var scene = global.cc.director.getScene();
      if (!scene || typeof scene.getComponentsInChildren !== 'function') return null;
      var comps = scene.getComponentsInChildren(global.cc.Component);
      var i;
      for (i = 0; i < comps.length; i++) {
        if (comps[i] && typeof comps[i][methodName] === 'function' && comps[i].constructor) {
          return comps[i].constructor;
        }
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  function resolveClass(names, methodHint) {
    var i;
    var cls;
    for (i = 0; i < names.length; i++) {
      cls = getClass(names[i]);
      if (cls && cls.prototype) return cls;
    }
    if (methodHint) {
      cls = findClassByMethod(methodHint);
      if (cls && cls.prototype) return cls;
    }
    return null;
  }

  function pointInNode(node, screenPoint) {
    if (!node || !node.activeInHierarchy) return false;
    try {
      if (typeof node.getBoundingBoxToWorld === 'function') {
        return node.getBoundingBoxToWorld().contains(screenPoint);
      }
      var local = node.convertToNodeSpaceAR(screenPoint);
      var size = node.getContentSize();
      var ap = node.getAnchorPoint();
      var minX = -size.width * ap.x;
      var minY = -size.height * ap.y;
      return (
        local.x >= minX &&
        local.x <= minX + size.width &&
        local.y >= minY &&
        local.y <= minY + size.height
      );
    } catch (e) {
      return false;
    }
  }

  function touchHitsUiButton(event) {
    if (!event || typeof event.getLocation !== 'function') return false;
    if (!global.cc || !global.cc.director || !global.cc.Button) return false;

    var scene = global.cc.director.getScene();
    if (!scene || typeof scene.getComponentsInChildren !== 'function') return false;

    var loc = event.getLocation();
    var point = global.cc.v2(loc.x, loc.y);
    var buttons = scene.getComponentsInChildren(global.cc.Button);
    var i;

    for (i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      if (!btn || !btn.node || !btn.node.activeInHierarchy) continue;
      if (btn.interactable === false) continue;
      if (pointInNode(btn.node, point)) return true;
    }

    return false;
  }

  function patchHandSetDir() {
    /* Do not clamp setDir — Chính xác buff needs exact aim from tap (original setDir). */
    return true;
  }

  function patchTouchStart(className) {
    if (patched[className]) return true;
    var Cls = resolveClass([className], 'onTouchStart');
    if (!Cls || !Cls.prototype) return false;

    var ok = wrapMethod(Cls.prototype, 'onTouchStart', function (orig) {
      return function (event) {
        if (touchHitsUiButton(event)) return;
        return orig.apply(this, arguments);
      };
    });

    if (ok) {
      patched[className] = true;
      console.log(LOG, className + '.onTouchStart UI filter patched');
    }
    return ok;
  }

  function patchAll() {
    patchHandSetDir();
    patchTouchStart('gamelogic');
    patchTouchStart('gamelogic2');
  }

  function bindDirector() {
    if (directorBound) return;
    if (!global.cc || !global.cc.director || typeof global.cc.director.on !== 'function') return;
    directorBound = true;
    try {
      global.cc.director.on(global.cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        patched.gamelogic = false;
        patched.gamelogic2 = false;
        patchAll();
      });
    } catch (e) {
      console.warn(LOG, 'director bind failed', e);
    }
  }

  function start() {
    patchAll();
    bindDirector();
    if (pollTimer) clearInterval(pollTimer);
    pollTimer = setInterval(patchAll, 500);
    setTimeout(function () {
      if (pollTimer) {
        clearInterval(pollTimer);
        pollTimer = setInterval(patchAll, 2000);
      }
    }, 15000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  global.ArcadeHookFix = {
    patchNow: patchAll,
    clampHookAngle: clampHookAngle,
    HOOK_ANGLE_MIN: HOOK_ANGLE_MIN,
    HOOK_ANGLE_MAX: HOOK_ANGLE_MAX
  };
})(window);
