/**
 * Arcade — BXH + Xóa dữ liệu on the outer lobby only (scene1).
 */
(function (global) {
  'use strict';

  var LOG = '[ArcadeSettingsUI]';
  var BAR_ID = 'gv-menu-actions';
  var CONFIRM_ID = 'gv-settings-confirm-overlay';
  var BXH_ICON_SRC = 'assets/bxh-gv.png';
  var XOA_ICON_SRC = 'assets/xoa-data-gv.png';
  var HISTORY_TRIGGER_SELECTOR = '[data-history-leaderboard]';
  var OVERLAY_COMPONENTS = ['bwg', 'strongui', 'hecheng'];

  var barEl = null;
  var confirmEl = null;
  var confirmBound = false;

  function getSceneName() {
    try {
      var scene = global.cc && global.cc.director && global.cc.director.getScene();
      if (!scene) return '';
      return String(scene.name || scene._name || '');
    } catch (e) {
      return '';
    }
  }

  function hasActiveOverlay() {
    try {
      if (!global.cc || !global.cc.director) return false;
      var scene = global.cc.director.getScene();
      if (!scene || typeof scene.getComponentsInChildren !== 'function') return false;

      for (var i = 0; i < OVERLAY_COMPONENTS.length; i++) {
        var name = OVERLAY_COMPONENTS[i];
        var comps = scene.getComponentsInChildren(name);
        if (!comps || !comps.length) continue;
        for (var j = 0; j < comps.length; j++) {
          var c = comps[j];
          if (c && c.node && c.node.activeInHierarchy) return true;
        }
      }
    } catch (e) {
      /* ignore */
    }
    return false;
  }

  function shouldShow() {
    return getSceneName() === 'scene1' && !hasActiveOverlay();
  }

  function clickLeaderboard() {
    try {
      if (
        global.HistoryLeaderboard &&
        typeof global.HistoryLeaderboard.open === 'function'
      ) {
        global.HistoryLeaderboard.open();
        return true;
      }
    } catch (e) {
      /* ignore */
    }

    try {
      var btn = document.querySelector(HISTORY_TRIGGER_SELECTOR);
      if (btn && typeof btn.click === 'function') {
        btn.click();
        return true;
      }
    } catch (e2) {
      /* ignore */
    }

    console.warn(LOG, 'leaderboard trigger not found');
    return false;
  }

  function showConfirm() {
    if (!confirmEl) return;
    confirmEl.classList.add('is-visible');
    confirmEl.removeAttribute('hidden');
  }

  function hideConfirm() {
    if (!confirmEl) return;
    confirmEl.classList.remove('is-visible');
    confirmEl.setAttribute('hidden', '');
  }

  function doResetData() {
    var h = global.ArcadeHistory;
    if (!h || typeof h.resetAllProgress !== 'function') {
      try {
        var keys = [
          '2.0.3',
          'daoVangBestClassic',
          'daoVangBestEndless',
          'daoVangBestAdventure',
          'daoVangHighScore',
          'daoVangFreeGoldVideoAt'
        ];
        for (var i = 0; i < keys.length; i++) {
          try {
            global.localStorage && global.localStorage.removeItem(keys[i]);
          } catch (e) {}
        }
      } catch (e2) {}
      global.location.reload();
      return;
    }

    h.resetAllProgress().finally(function () {
      global.location.reload();
    });
  }

  function ensureDom() {
    if (!barEl) {
      barEl = document.createElement('div');
      barEl.id = BAR_ID;
      barEl.className = 'gv-menu-actions';
      barEl.setAttribute('hidden', '');
      barEl.innerHTML =
        '<button type="button" class="gv-menu-action-btn" id="gv-btn-bxh" aria-label="Bảng xếp hạng">' +
        '  <img src="' + BXH_ICON_SRC + '" alt="BXH" draggable="false" />' +
        '</button>' +
        '<button type="button" class="gv-menu-action-btn" id="gv-btn-xoa" aria-label="Xóa dữ liệu">' +
        '  <img src="' + XOA_ICON_SRC + '" alt="Xóa dữ liệu" draggable="false" />' +
        '</button>';
      document.body.appendChild(barEl);

      var bxhBtn = document.getElementById('gv-btn-bxh');
      var xoaBtn = document.getElementById('gv-btn-xoa');

      if (bxhBtn) {
        bxhBtn.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          if (!shouldShow()) return;
          clickLeaderboard();
        });
      }

      if (xoaBtn) {
        xoaBtn.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          if (!shouldShow()) return;
          showConfirm();
        });
      }
    }

    if (!confirmEl) {
      confirmEl = document.createElement('div');
      confirmEl.id = CONFIRM_ID;
      confirmEl.className = 'gv-settings-confirm-overlay';
      confirmEl.setAttribute('hidden', '');
      confirmEl.innerHTML =
        '<div class="gv-settings-confirm-dialog" role="dialog" aria-modal="true">' +
        '  <div class="gv-settings-confirm-message">Bạn chắc chắn muốn xóa toàn bộ dữ liệu game và chơi lại từ đầu?</div>' +
        '  <div class="gv-settings-confirm-actions">' +
        '    <button type="button" class="gv-settings-confirm-btn cancel" id="gv-settings-btn-confirm-cancel">Hủy</button>' +
        '    <button type="button" class="gv-settings-confirm-btn ok" id="gv-settings-btn-confirm-ok">Ok</button>' +
        '  </div>' +
        '</div>';
      document.body.appendChild(confirmEl);
    }

    if (!confirmBound) {
      confirmBound = true;
      var confirmCancel = document.getElementById('gv-settings-btn-confirm-cancel');
      var confirmOk = document.getElementById('gv-settings-btn-confirm-ok');

      confirmEl.addEventListener('click', function (event) {
        if (event.target === confirmEl) hideConfirm();
      });

      if (confirmCancel) {
        confirmCancel.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          hideConfirm();
        });
      }

      if (confirmOk) {
        confirmOk.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          hideConfirm();
          doResetData();
        });
      }
    }
  }

  function refreshVisibility() {
    ensureDom();
    var show = shouldShow();

    if (show) {
      barEl.removeAttribute('hidden');
      barEl.classList.remove('is-hidden');
    } else {
      barEl.setAttribute('hidden', '');
      barEl.classList.add('is-hidden');
      hideConfirm();
    }
  }

  function bindDirector() {
    if (!global.cc || !global.cc.director || typeof global.cc.director.on !== 'function') {
      return false;
    }
    try {
      global.cc.director.on(
        global.cc.Director.EVENT_AFTER_SCENE_LAUNCH,
        function () {
          refreshVisibility();
        }
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  function start() {
    ensureDom();
    refreshVisibility();

    var directorBound = bindDirector();

    window.setInterval(function () {
      try {
        if (!directorBound) directorBound = bindDirector();
        refreshVisibility();
      } catch (e) {
        /* ignore */
      }
    }, 400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})(window);
