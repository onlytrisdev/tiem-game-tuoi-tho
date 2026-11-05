/**
 * Arcade ad limits — 1 QC per buff per match; 5 min cooldown for free gold.
 */
(function (global) {
  'use strict';

  var LOG = '[ArcadeAdLimits]';
  var FREE_GOLD_KEY = 'daoVangFreeGoldVideoAt';
  var FREE_GOLD_COOLDOWN_MS = 5 * 60 * 1000;
  var BUFF_CD_SECONDS = 30;
  var FREE_GOLD_VIDEO_TAG = '\u514d\u8d39\u9886\u53d6\u91d1\u5e01\u89c6\u9891';
  var BUFF_VIDEO_TAGS_G2 = [
    '\u52a0\u901f\u62c9\u53d6\u89c6\u9891',
    '\u6307\u54ea\u6253\u54ea\u89c6\u9891',
    '\u53cc\u500d\u5f97\u5206\u89c6\u9891'
  ];
  var BUFF_VIDEO_TAGS_G1 = [
    '\u65f6\u95f4\u6682\u505c\u89c6\u9891',
    '\u6446\u81c2\u51cf\u901f\u89c6\u9891',
    '\u767e\u53d1\u767e\u4e2d\u89c6\u9891'
  ];

  var patched = {
    gamelogic: false,
    gamelogic2: false,
    freemoney: false,
    mainlogic: false
  };
  var pollTimer = 0;
  var directorBound = false;

  function wrapMethod(proto, name, buildWrapper) {
    var orig = proto[name];
    if (typeof orig !== 'function') return false;
    if (orig._gvAdLimitsWrapped) return true;
    var wrapped = buildWrapper(orig);
    wrapped._gvAdLimitsWrapped = true;
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

  function toast(msg) {
    try {
      if (global.AD && typeof global.AD.createToast === 'function') {
        global.AD.createToast(msg);
        return;
      }
      var adapter = global.GxGame && global.GxGame.default && global.GxGame.default.Ad
        ? global.GxGame.default.Ad()
        : null;
      if (adapter && typeof adapter.createToast === 'function') {
        adapter.createToast(msg);
        return;
      }
    } catch (e) {
      /* ignore */
    }
    console.log(LOG, msg);
  }

  function videoSucceeded(result) {
    return result !== false;
  }

  function ensureBuffState(self) {
    if (!self._gvAdBuffUsed) self._gvAdBuffUsed = [false, false, false];
    if (!self._gvAdBuffPending) self._gvAdBuffPending = [false, false, false];
  }

  function resetBuffState(self) {
    self._gvAdBuffUsed = [false, false, false];
    self._gvAdBuffPending = [false, false, false];
    unlockBuffButtons(self);
  }

  function applyBuffEffect(self, mode, index) {
    if (!self.cd) self.cd = [0, 0, 0];
    self.cd[index] = BUFF_CD_SECONDS;
    if (self.spSkillCD && self.spSkillCD[index] && self.spSkillCD[index].node) {
      self.spSkillCD[index].node.active = true;
    }
    if (mode === 'gamelogic2') {
      if (index === 0 && self.hands) {
        var i;
        for (i = 0; i < self.hands.length; i++) {
          self.hands[i].setPower(400);
        }
      } else if (index === 1 && global.DataManager) {
        global.DataManager.freeSpeed = 0.5;
      }
      return;
    }
    if (mode === 'gamelogic' && index === 1 && global.DataManager) {
      global.DataManager.freeSpeed = 0.5;
    }
  }

  function getBuffButtonNode(self, index) {
    if (!self.spSkillCD || !self.spSkillCD[index] || !self.spSkillCD[index].node) return null;
    return self.spSkillCD[index].node.parent || self.spSkillCD[index].node;
  }

  function setBuffButtonLocked(self, index, locked) {
    var node = getBuffButtonNode(self, index);
    if (!node) return;
    var btn = node.getComponent(global.cc.Button);
    if (btn) btn.interactable = !locked;
  }

  function unlockBuffButtons(self) {
    var i;
    for (i = 0; i < 3; i++) setBuffButtonLocked(self, i, false);
  }

  function makeBuffClickHandler(index, mode, videoTag) {
    return function () {
      var self = this;
      ensureBuffState(self);
      if (self._gvAdBuffUsed[index]) {
        toast('Đã dùng buff này trong vòng này');
        return;
      }
      if (self._gvAdBuffPending[index]) return;
      if (!global.DataManager || typeof global.DataManager.play_video !== 'function') return;

      self._gvAdBuffPending[index] = true;
      global.DataManager.play_video(function (result) {
        self._gvAdBuffPending[index] = false;
        if (!videoSucceeded(result)) return;
        applyBuffEffect(self, mode, index);
        self._gvAdBuffUsed[index] = true;
        setBuffButtonLocked(self, index, true);
      }, videoTag);
    };
  }

  function patchBuffHandlers(className, mode, resetMethods, videoTags) {
    if (patched[className]) return true;
    var Cls = resolveClass([className], resetMethods[0]);
    if (!Cls || !Cls.prototype) return false;

    var proto = Cls.prototype;
    var ok = false;
    var i;

    ok = wrapMethod(proto, 'onClick1', function () {
      return makeBuffClickHandler(0, mode, videoTags[0]);
    }) || ok;
    ok = wrapMethod(proto, 'onClick2', function () {
      return makeBuffClickHandler(1, mode, videoTags[1]);
    }) || ok;
    ok = wrapMethod(proto, 'onClick3', function () {
      return makeBuffClickHandler(2, mode, videoTags[2]);
    }) || ok;

    for (i = 0; i < resetMethods.length; i++) {
      ok = wrapMethod(proto, resetMethods[i], function (orig) {
        return function () {
          var result = orig.apply(this, arguments);
          resetBuffState(this);
          return result;
        };
      }) || ok;
    }

    if (ok) {
      patched[className] = true;
      console.log(LOG, className + ' per-buff limits patched');
    }
    return ok;
  }

  function getFreeGoldLastAt() {
    try {
      var raw = global.localStorage.getItem(FREE_GOLD_KEY);
      var ts = parseInt(raw, 10);
      return isNaN(ts) ? 0 : ts;
    } catch (e) {
      return 0;
    }
  }

  function setFreeGoldLastAt(ts) {
    try {
      global.localStorage.setItem(FREE_GOLD_KEY, String(ts || Date.now()));
    } catch (e) {
      /* ignore */
    }
  }

  function getFreeGoldCooldownRemain() {
    var lastAt = getFreeGoldLastAt();
    if (!lastAt) return 0;
    var remain = FREE_GOLD_COOLDOWN_MS - (Date.now() - lastAt);
    return remain > 0 ? remain : 0;
  }

  function formatCooldown(ms) {
    var totalSec = Math.ceil(ms / 1000);
    var min = Math.floor(totalSec / 60);
    var sec = totalSec % 60;
    if (min > 0) return min + ' phút ' + sec + ' giây';
    return sec + ' giây';
  }

  function findFreeGoldGetButton(comp) {
    if (!comp || !comp.node) return null;
    var buttons = comp.node.getComponentsInChildren(global.cc.Button);
    var i;
    var j;
    var events;
    for (i = 0; i < buttons.length; i++) {
      events = buttons[i].clickEvents || [];
      for (j = 0; j < events.length; j++) {
        if (events[j] && events[j].handler === 'onClickGet') {
          return buttons[i];
        }
      }
    }
    return null;
  }

  function findFreeGoldGetLabel(comp) {
    var btn = findFreeGoldGetButton(comp);
    if (!btn || !btn.node) return null;
    var labels = btn.node.getComponentsInChildren(global.cc.Label);
    var i;
    for (i = 0; i < labels.length; i++) {
      if (labels[i] && labels[i].string && labels[i].string.indexOf('Nhận Free') !== -1) {
        return labels[i];
      }
    }
    if (labels.length > 0) return labels[0];
    return null;
  }

  function clearFreeGoldUi(comp) {
    if (!comp) return;
    if (comp._gvFreeGoldInterval) {
      clearInterval(comp._gvFreeGoldInterval);
      comp._gvFreeGoldInterval = 0;
    }
    if (comp._gvFreeGoldLabel && comp._gvFreeGoldDefaultText) {
      comp._gvFreeGoldLabel.string = comp._gvFreeGoldDefaultText;
    }
  }

  function refreshFreeGoldButton(comp) {
    if (!comp || !comp.node || !comp.node.active) {
      clearFreeGoldUi(comp);
      return;
    }

    var remain = getFreeGoldCooldownRemain();
    var btn = findFreeGoldGetButton(comp);
    var label = findFreeGoldGetLabel(comp);

    if (label && !comp._gvFreeGoldDefaultText) {
      comp._gvFreeGoldDefaultText = label.string;
    }

    if (remain > 0) {
      if (btn) btn.interactable = false;
      if (label) label.string = formatCooldown(remain);
      return;
    }

    if (btn) btn.interactable = true;
    if (label && comp._gvFreeGoldDefaultText) {
      label.string = comp._gvFreeGoldDefaultText;
    }
  }

  function scheduleFreeGoldUi(comp) {
    clearFreeGoldUi(comp);
    refreshFreeGoldButton(comp);
    comp._gvFreeGoldInterval = setInterval(function () {
      refreshFreeGoldButton(comp);
    }, 1000);
  }

  function patchFreemoney() {
    if (patched.freemoney) return true;
    var Cls = resolveClass(['freemoney'], 'onClickGet');
    if (!Cls || !Cls.prototype) return false;

    var proto = Cls.prototype;
    var ok = false;

    ok = wrapMethod(proto, 'onClickGet', function () {
      return function () {
        var self = this;
        var remain = getFreeGoldCooldownRemain();
        if (remain > 0) {
          toast('Vui lòng thử lại sau ' + formatCooldown(remain));
          refreshFreeGoldButton(self);
          return;
        }
        if (global.AD && typeof global.AD.hideBanner === 'function') {
          global.AD.hideBanner();
        }
        if (!global.DataManager || typeof global.DataManager.play_video !== 'function') return;

        global.DataManager.play_video(function (result) {
          if (!videoSucceeded(result)) return;
          setFreeGoldLastAt(Date.now());
          global.DataManager.addGold(1e5);
          self.node.active = false;
          clearFreeGoldUi(self);
        }, FREE_GOLD_VIDEO_TAG);
      };
    }) || ok;

    ok = wrapMethod(proto, 'onClickClose', function (orig) {
      return function () {
        clearFreeGoldUi(this);
        return orig.apply(this, arguments);
      };
    }) || ok;

    if (ok) {
      patched.freemoney = true;
      console.log(LOG, 'freemoney cooldown patched');
    }
    return ok;
  }

  function patchMainlogic() {
    if (patched.mainlogic) return true;
    var Cls = resolveClass(['mainlogic'], 'onClickGetMoney');
    if (!Cls || !Cls.prototype) return false;

    var ok = wrapMethod(Cls.prototype, 'onClickGetMoney', function (orig) {
      return function () {
        var result = orig.apply(this, arguments);
        var fmNode = this.nodeFreeMoney;
        if (fmNode) {
          var fm = fmNode.getComponent('freemoney');
          if (fm) scheduleFreeGoldUi(fm);
        }
        return result;
      };
    });

    if (ok) {
      patched.mainlogic = true;
      console.log(LOG, 'mainlogic free gold UI patched');
    }
    return ok;
  }

  function patchAll() {
    patchBuffHandlers('gamelogic2', 'gamelogic2', ['init', 'goToNext'], BUFF_VIDEO_TAGS_G2);
    patchBuffHandlers('gamelogic', 'gamelogic', ['start', 'restart', 'startNext'], BUFF_VIDEO_TAGS_G1);
    patchFreemoney();
    patchMainlogic();
  }

  function bindDirector() {
    if (directorBound) return;
    if (!global.cc || !global.cc.director || typeof global.cc.director.on !== 'function') return;
    directorBound = true;
    try {
      global.cc.director.on(global.cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
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

  global.ArcadeAdLimits = {
    patchNow: patchAll,
    getFreeGoldCooldownRemain: getFreeGoldCooldownRemain,
    FREE_GOLD_COOLDOWN_MS: FREE_GOLD_COOLDOWN_MS
  };
})(window);
