/**
 * Vòng quay — popup QC: một Label, xuống dòng theo cụm từ (Arcade).
 */
(function (global) {
  'use strict';

  var patched = false;
  var DEFAULT_SPIN_COUNT = 5;
  var MESSAGE_WIDTH = 320;

  function getSpinCount() {
    try {
      if (global.JsonManager && typeof global.JsonManager.getData === 'function') {
        var v = global.JsonManager.getData('Variable', 21);
        if (v && v.Value != null && v.Value !== '') {
          var n = parseInt(v.Value, 10);
          if (!isNaN(n) && n > 0) return n;
        }
        var ad = global.JsonManager.getData('Advertisement', 13);
        if (ad && ad.Value != null && ad.Value !== '') {
          n = parseInt(ad.Value, 10);
          if (!isNaN(n) && n > 0) return n;
        }
      }
    } catch (e) {
      /* ignore */
    }
    return DEFAULT_SPIN_COUNT;
  }

  function buildMessage(spinCount) {
    return 'Xem QC để\nnhận thêm\n' + spinCount + ' lượt quay!';
  }

  function isUnderExcluded(root, node, excluded) {
    var cur = node;
    while (cur && cur !== root) {
      if (excluded.indexOf(cur) >= 0) return true;
      cur = cur.parent;
    }
    return false;
  }

  function collectMessageLabels(panel, out, excluded) {
    if (!panel || !panel.isValid) return;
    var labels = panel.getComponentsInChildren(global.cc.Label);
    if (!labels) return;
    for (var i = 0; i < labels.length; i++) {
      var lab = labels[i];
      if (!lab || !lab.node || !lab.node.isValid) continue;
      if (isUnderExcluded(panel, lab.node, excluded)) continue;
      out.push(lab);
    }
  }

  function applyTurnningHelperMessage(comp) {
    if (!comp || !comp.node || !comp.node.isValid || !global.cc) return;
    var helper = comp.node.getChildByName('helper_window');
    if (!helper) return;
    var bg = helper.getChildByName('bgSprite');
    if (!bg) return;
    var panel = bg.getChildByName('model1_panel');
    if (!panel) return;

    var excluded = [];
    var btn1 = panel.getChildByName('getButton');
    var btn2 = panel.getChildByName('getButton2');
    if (btn1) excluded.push(btn1);
    if (btn2) excluded.push(btn2);

    var labels = [];
    collectMessageLabels(panel, labels, excluded);
    if (!labels.length) return;

    labels.sort(function (a, b) {
      return (b.node.width || 0) - (a.node.width || 0);
    });

    var spinCount = getSpinCount();
    var text = buildMessage(spinCount);
    var main = labels[0];

    try {
      main.string = text;
      main.enableWrapText = true;
      if (global.cc.Label.Overflow) {
        main.overflow = global.cc.Label.Overflow.RESIZE_HEIGHT;
      }
      if (global.cc.Label.HorizontalAlign) {
        main.horizontalAlign = global.cc.Label.HorizontalAlign.CENTER;
      }
      var fs = main.fontSize || 28;
      if (!main.lineHeight || main.lineHeight < fs + 4) {
        main.lineHeight = fs + 8;
      }
      if (main.node.width < MESSAGE_WIDTH) {
        main.node.width = MESSAGE_WIDTH;
      }
      main.node.active = true;
    } catch (e) {
      /* ignore */
    }

    for (var j = 1; j < labels.length; j++) {
      if (labels[j].node !== main.node) {
        labels[j].node.active = false;
      }
    }
  }

  function patchTurnningWindow() {
    if (patched) return true;
    if (!global.cc || !global.cc.js) return false;
    var Cls = global.cc.js.getClassByName('TurnningWindow');
    if (!Cls || !Cls.prototype) return false;

    var proto = Cls.prototype;
    var oldBtOk2 = proto.BtOk2;
    proto.BtOk2 = function () {
      if (typeof oldBtOk2 === 'function') oldBtOk2.call(this);
      try {
        applyTurnningHelperMessage(this);
      } catch (e) {
        console.warn('[ArcadeTurnning] helper message failed', e);
      }
    };

    patched = true;
    return true;
  }

  function startWatcher() {
    patchTurnningWindow();
    var n = 0;
    var timer = setInterval(function () {
      n++;
      patchTurnningWindow();
      if (patched && n > 80) clearInterval(timer);
    }, 400);
  }

  function bootWhenCocosReady() {
    if (global.cc && global.cc.js) {
      startWatcher();
      return;
    }
    var attempts = 0;
    var t = setInterval(function () {
      attempts++;
      if (global.cc && global.cc.js) {
        clearInterval(t);
        startWatcher();
      } else if (attempts > 200) {
        clearInterval(t);
      }
    }, 300);
  }

  bootWhenCocosReady();

  global.ArcadeTurnningHelper = {
    applyTurnningHelperMessage: applyTurnningHelperMessage,
    getSpinCount: getSpinCount
  };
})(window);
