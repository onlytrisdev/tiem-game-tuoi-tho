/**
 * Reset toàn bộ tiến trình game (localStorage) và tích hợp nút Reset vào MoreUI.
 * Không sửa bundle gameplay — chỉ chạy sau khi Cocos load.
 */
(function (global) {
  'use strict';

  var STORAGE_KEYS = {
    USER_DATA: 'game_userdata',
    BGM: 'bgmVolume2020',
    SFX: 'sfxVolume'
  };

  var RESET_CONFIRM_LINES = [
    'Bạn chắc chắn muốn xóa hết',
    'dữ liệu hiện tại và chơi lại từ đầu?'
  ];

  var RESET_BTN_SPRITE = 'js/img/btn-reset-trash.png';
  var PAUSE_FROM_TYPE = 'ResetConfirm';
  var _gamePausedByResetDialog = false;
  var _moreUiPatched = false;
  var _confirmOverlayReady = false;
  var _resetTrashTexture = null;

  function findChildByName(root, name) {
    if (!root) return null;
    if (root.name === name) return root;
    for (var i = 0; i < root.childrenCount; i++) {
      var found = findChildByName(root.children[i], name);
      if (found) return found;
    }
    return null;
  }

  function findNodeInScene(name) {
    var scene = cc.director && cc.director.getScene();
    if (!scene) return null;
    return findChildByName(scene, name);
  }

  function getUiMgr() {
    if (!global.cc) return null;
    if (global.cc.Mgr && global.cc.Mgr.UIMgr) return global.cc.Mgr.UIMgr;
    if (global.cc.Global) {
      if (global.cc.Global.UIMgr) return global.cc.Global.UIMgr;
      if (global.cc.Global.UiMgr) return global.cc.Global.UiMgr;
    }
    return null;
  }

  function getMoreUINode() {
    var uiMgr = getUiMgr();
    if (uiMgr && uiMgr.moreUI) return uiMgr.moreUI;
    return findNodeInScene('MoreUI');
  }

  function clearAllGameStorage() {
    var storage = global.localStorage;
    if (!storage) return;

    storage.removeItem(STORAGE_KEYS.USER_DATA);
    storage.removeItem(STORAGE_KEYS.BGM);
    storage.removeItem(STORAGE_KEYS.SFX);

    var keysToRemove = [];
    for (var i = 0; i < storage.length; i++) {
      var k = storage.key(i);
      if (!k) continue;
      if (k === STORAGE_KEYS.USER_DATA || k === STORAGE_KEYS.BGM || k === STORAGE_KEYS.SFX) {
        keysToRemove.push(k);
      } else if (/^game_/i.test(k) || /userdata/i.test(k)) {
        keysToRemove.push(k);
      }
    }
    keysToRemove.forEach(function (k) {
      try {
        storage.removeItem(k);
      } catch (e) { /* ignore */ }
    });
  }

  function performReset() {
    clearAllGameStorage();
    var cloud = global.ArcadeCloudSave;
    if (cloud && cloud.isEnabled && cloud.isEnabled() && typeof cloud.saveDefaultProgress === 'function') {
      cloud.saveDefaultProgress().finally(function () {
        global.location.reload();
      });
      return;
    }
    global.location.reload();
  }

  function pauseGameForResetDialog() {
    if (_gamePausedByResetDialog || !global.cc) return;
    try {
      var uiMgr = getUiMgr();
      if (uiMgr && typeof uiMgr.addUIOpenCount === 'function') {
        uiMgr.addUIOpenCount();
      }
      if (cc.director && cc.director.GlobalEvent) {
        cc.director.GlobalEvent.emit('pauseGame', { FromType: PAUSE_FROM_TYPE });
      }
      _gamePausedByResetDialog = true;
    } catch (e) { /* ignore */ }
  }

  function resumeGameFromResetDialog() {
    if (!_gamePausedByResetDialog || !global.cc) return;
    try {
      if (cc.director && cc.director.GlobalEvent) {
        cc.director.GlobalEvent.emit('resumeGame', { FromType: PAUSE_FROM_TYPE });
      }
      var uiMgr = getUiMgr();
      if (uiMgr && typeof uiMgr.subUIOpenCount === 'function') {
        uiMgr.subUIOpenCount();
      }
      _gamePausedByResetDialog = false;
    } catch (e) { /* ignore */ }
  }

  function ensureConfirmOverlay() {
    if (_confirmOverlayReady) return global.document.getElementById('gpr-reset-overlay');

    var overlay = global.document.createElement('div');
    overlay.id = 'gpr-reset-overlay';
    overlay.innerHTML =
      '<div class="gpr-reset-dialog" role="dialog" aria-modal="true" aria-labelledby="gpr-reset-title">' +
        '<div class="gpr-reset-header" id="gpr-reset-title">Chú ý</div>' +
        '<div class="gpr-reset-body">' +
          '<p class="gpr-reset-message"></p>' +
          '<div class="gpr-reset-actions">' +
            '<button type="button" class="gpr-btn-cancel">Hủy</button>' +
            '<button type="button" class="gpr-btn-sure">Đồng ý</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    global.document.body.appendChild(overlay);
    _confirmOverlayReady = true;
    return overlay;
  }

  function showResetConfirmDialog(onConfirm) {
    var overlay = ensureConfirmOverlay();
    var messageEl = overlay.querySelector('.gpr-reset-message');
    var btnCancel = overlay.querySelector('.gpr-btn-cancel');
    var btnSure = overlay.querySelector('.gpr-btn-sure');

    messageEl.innerHTML =
      '<span class="gpr-reset-line">' + RESET_CONFIRM_LINES[0] + '</span>' +
      '<span class="gpr-reset-line">' + RESET_CONFIRM_LINES[1] + '</span>';

    function closeDialog(resumeGame) {
      overlay.classList.remove('gpr-open');
      btnCancel.removeEventListener('click', onCancel);
      btnSure.removeEventListener('click', onSure);
      overlay.removeEventListener('click', onBackdrop);
      if (resumeGame !== false) {
        resumeGameFromResetDialog();
      }
    }

    function onCancel() {
      closeDialog(true);
    }

    function onSure() {
      closeDialog(false);
      if (typeof onConfirm === 'function') onConfirm();
    }

    function onBackdrop(e) {
      if (e.target === overlay) onCancel();
    }

    btnCancel.addEventListener('click', onCancel);
    btnSure.addEventListener('click', onSure);
    overlay.addEventListener('click', onBackdrop);
    pauseGameForResetDialog();
    overlay.classList.add('gpr-open');
  }

  function confirmAndReset() {
    showResetConfirmDialog(performReset);
  }

  function hideRedBadges(resetNode) {
    var reds = ['red', 'taskRed', 'signRed', 'shareRed'];
    for (var r = 0; r < reds.length; r++) {
      var redNode = findChildByName(resetNode, reds[r]);
      if (redNode) redNode.active = false;
    }
  }

  function hideLegacyResetLabelNodes(resetNode) {
    var label = findChildByName(resetNode, 'ResetLabel');
    var labelBg = findChildByName(resetNode, 'ResetLabelBg');
    if (label) label.active = false;
    if (labelBg) labelBg.active = false;
  }

  function copyMoreMenuButtonStyle(resetNode, template) {
    if (!resetNode || !template) return;

    var templateSize = template.getContentSize();
    resetNode.setContentSize(templateSize.width, templateSize.height);
    resetNode.setAnchorPoint(template.getAnchorPoint());
    resetNode.scaleX = template.scaleX;
    resetNode.scaleY = template.scaleY;

    var templateBtn = template.getComponent(cc.Button);
    var resetBtn = resetNode.getComponent(cc.Button);
    if (templateBtn && resetBtn) {
      resetBtn.transition = templateBtn.transition;
      resetBtn.zoomScale = templateBtn.zoomScale;
      resetBtn.duration = templateBtn.duration;
      resetBtn.normalColor = templateBtn.normalColor;
      resetBtn.pressedColor = templateBtn.pressedColor;
      resetBtn.hoverColor = templateBtn.hoverColor;
      resetBtn.disabledColor = templateBtn.disabledColor;
    }

    var templateSprite = template.getComponent(cc.Sprite);
    var resetSprite = resetNode.getComponent(cc.Sprite);
    if (templateSprite && resetSprite) {
      resetSprite.type = templateSprite.type;
      resetSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    }
  }

  function loadResetTrashTexture(done) {
    if (_resetTrashTexture) {
      done(_resetTrashTexture);
      return;
    }
    if (!global.cc || !cc.loader) {
      done(null);
      return;
    }
    cc.loader.load(RESET_BTN_SPRITE, function (err, texture) {
      if (!err && texture) _resetTrashTexture = texture;
      done(_resetTrashTexture);
    });
  }

  function applyResetTrashSprite(resetNode, template) {
    if (!resetNode || !resetNode.isValid || !template) return;

    hideRedBadges(resetNode);
    hideLegacyResetLabelNodes(resetNode);
    copyMoreMenuButtonStyle(resetNode, template);

    var targetSize = template.getContentSize();
    loadResetTrashTexture(function (texture) {
      if (!texture || !resetNode.isValid) return;

      var sprite = resetNode.getComponent(cc.Sprite);
      if (!sprite) sprite = resetNode.addComponent(cc.Sprite);

      sprite.spriteFrame = new cc.SpriteFrame(texture);
      sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      resetNode.setContentSize(targetSize.width, targetSize.height);
      sprite.node.setContentSize(targetSize.width, targetSize.height);
    });
  }

  function styleResetButtonForMoreMenu(resetNode, template) {
    if (!resetNode || !resetNode.isValid || !template) return;
    applyResetTrashSprite(resetNode, template);
  }

  function wireResetButton(resetNode, moreUiComponent) {
    var btn = resetNode.getComponent(cc.Button);
    if (!btn) btn = resetNode.addComponent(cc.Button);
    btn.clickEvents = [];
    var ev = new cc.Component.EventHandler();
    ev.target = moreUiComponent.node;
    ev.component = 'MoreUI';
    ev.handler = 'openResetProgress';
    btn.clickEvents.push(ev);
  }

  function injectResetButton(moreUiComponent) {
    if (!moreUiComponent) return;
    var root = moreUiComponent.node;
    var template = findChildByName(root, 'Setting') || findChildByName(root, 'Task');
    if (!template) return;
    var panel = template.parent || root;

    var resetNode = findChildByName(panel, 'Reset') || findChildByName(root, 'Reset');
    if (!resetNode) {
      resetNode = cc.instantiate(template);
      resetNode.name = 'Reset';
      resetNode.parent = panel;

      var settingNode = findChildByName(panel, 'Setting') || findChildByName(root, 'Setting');
      var taskNode = findChildByName(panel, 'Task') || findChildByName(root, 'Task');
      var anchor = taskNode || settingNode || template;
      var stepY = (settingNode && taskNode) ? Math.abs(settingNode.y - taskNode.y) : 110;
      resetNode.setPosition(anchor.x, anchor.y - stepY);
      wireResetButton(resetNode, moreUiComponent);
    }

    styleResetButtonForMoreMenu(resetNode, template);
    moreUiComponent.__resetBtnInjected = true;
  }

  function patchMoreUI() {
    if (_moreUiPatched || !cc.js || !cc.js.getClassByName) return false;
    var MoreUIClass = cc.js.getClassByName('MoreUI');
    if (!MoreUIClass || !MoreUIClass.prototype) return false;

    if (!MoreUIClass.prototype.openResetProgress) {
      MoreUIClass.prototype.openResetProgress = function () {
        confirmAndReset();
      };
    }

    if (!MoreUIClass.prototype.__resetShowUIPatched) {
      var origShow = MoreUIClass.prototype.showUI;
      MoreUIClass.prototype.showUI = function () {
        if (origShow) origShow.apply(this, arguments);
        injectResetButton(this);
      };
      MoreUIClass.prototype.__resetShowUIPatched = true;
    }

    _moreUiPatched = true;
    return true;
  }

  function patchUiMgrOpenMore() {
    var uiMgr = getUiMgr();
    if (!uiMgr || uiMgr.__resetOpenMorePatched) return;
    if (typeof uiMgr.openMoreUI !== 'function') return;

    var orig = uiMgr.openMoreUI;
    uiMgr.openMoreUI = function () {
      var ret = orig.apply(this, arguments);
      setTimeout(function () {
        tryInjectMoreUiInstance();
      }, 350);
      return ret;
    };
    uiMgr.__resetOpenMorePatched = true;
  }

  function tryInjectMoreUiInstance() {
    var moreNode = getMoreUINode();
    if (!moreNode) return;
    var comp = moreNode.getComponent('MoreUI');
    if (comp) injectResetButton(comp);
  }

  function tickIntegration() {
    if (!global.cc || !cc.director) return false;

    if (cc.Mgr) {
      patchMoreUI();
      patchUiMgrOpenMore();
    }

    return _moreUiPatched;
  }

  function startIntegrationPolling() {
    var attempts = 0;
    var maxAttempts = 240;
    var timer = setInterval(function () {
      attempts += 1;
      tickIntegration();

      if (_moreUiPatched) {
        clearInterval(timer);
      }
      if (attempts >= maxAttempts) {
        clearInterval(timer);
      }
    }, 500);
  }

  global.GameProgressReset = {
    STORAGE_KEYS: STORAGE_KEYS,
    clearAllGameStorage: clearAllGameStorage,
    performReset: performReset,
    confirmAndReset: confirmAndReset,
    showResetConfirmDialog: showResetConfirmDialog,
    integrateWithMoreUI: function () {
      startIntegrationPolling();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startIntegrationPolling);
  } else {
    startIntegrationPolling();
  }
})(window);
