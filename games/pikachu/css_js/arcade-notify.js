/**
 * Arcade — thông báo trong khung game (toast + confirm), không dùng alert/confirm trình duyệt.
 */
(function (global) {
  'use strict';

  var hideTimer = 0;
  var onConfirmOk = null;
  var onConfirmCancel = null;

  function getRoot() {
    return document.getElementById('gv-notify');
  }

  function getMsgEl() {
    var root = getRoot();
    return root ? root.querySelector('.gv-notify-msg') : null;
  }

  function getActionsEl() {
    var root = getRoot();
    return root ? root.querySelector('.gv-notify-actions') : null;
  }

  function clearHideTimer() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = 0;
    }
  }

  function hide() {
    clearHideTimer();
    var root = getRoot();
    if (root) {
      root.hidden = true;
    }
    onConfirmOk = null;
    onConfirmCancel = null;
  }

  function showBox(message, mode) {
    var root = getRoot();
    var msg = getMsgEl();
    var actions = getActionsEl();
    if (!root || !msg) {
      return false;
    }

    root.classList.remove('gv-notify-toast', 'gv-notify-confirm');
    if (mode === 'confirm') {
      root.classList.add('gv-notify-confirm');
    } else {
      root.classList.add('gv-notify-toast');
    }

    msg.textContent = message || '';
    if (actions) {
      actions.hidden = mode !== 'confirm';
    }
    root.hidden = false;
    return true;
  }

  /**
   * Thông báo tự ẩn (toast).
   * @param {string} message
   * @param {number} [durationMs]
   */
  function show(message, durationMs) {
    clearHideTimer();
    if (!showBox(message, 'toast')) {
      return;
    }
    var ms = durationMs != null ? durationMs : 2800;
    hideTimer = setTimeout(hide, ms);
  }

  /**
   * Hộp xác nhận trong game (OK / Hủy).
   * @param {string} message
   * @param {Function} [onOk]
   * @param {Function} [onCancel]
   */
  function confirm(message, onOk, onCancel) {
    clearHideTimer();
    onConfirmOk = typeof onOk === 'function' ? onOk : null;
    onConfirmCancel = typeof onCancel === 'function' ? onCancel : null;
    showBox(message, 'confirm');
  }

  function bindButtons() {
    var root = getRoot();
    if (!root || root.getAttribute('data-gv-bound') === '1') {
      return;
    }
    root.setAttribute('data-gv-bound', '1');

    var okBtn = root.querySelector('.gv-notify-ok');
    var cancelBtn = root.querySelector('.gv-notify-cancel');

    if (okBtn) {
      okBtn.addEventListener('click', function () {
        var fn = onConfirmOk;
        hide();
        if (fn) {
          fn();
        }
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', function () {
        var fn = onConfirmCancel;
        hide();
        if (fn) {
          fn();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindButtons);
  } else {
    bindButtons();
  }

  global.ArcadeNotify = {
    show: show,
    confirm: confirm,
    hide: hide
  };
})(window);
