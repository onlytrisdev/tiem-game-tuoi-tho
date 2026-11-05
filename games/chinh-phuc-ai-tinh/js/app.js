/**
 * Khởi động & gắn sự kiện menu
 */
(function () {
  'use strict';

  function boot() {
    const save = SaveManager.load();
    AudioManager.init();
    FX.init();
    FX.setEnabled(save.settings.particles);
    FX.start();
    Game.bindControls();
    bindMenu();
    bindSettings();
    UI.bindConfirm();

    if (save.settings.music) AudioManager.startMusic();
    UI.updateMenu(save);

    // Splash
    const fill = UI.$('loading-fill');
    let p = 0;
    const t = setInterval(() => {
      p += 10 + Math.random() * 8;
      fill.style.width = Math.min(p, 100) + '%';
      if (p >= 100) {
        clearInterval(t);
        setTimeout(() => UI.show('menu'), 350);
      }
    }, 70);
  }

  function bindMenu() {
    UI.$('btn-start').addEventListener('click', () => {
      AudioManager.resume();
      AudioManager.sfx.tap();
      Game.startLevel(1);
    });

    UI.$('btn-pick-level').addEventListener('click', () => {
      AudioManager.sfx.tap();
      UI.renderLevelPicker(SaveManager.get());
      UI.show('level-pick');
    });

    UI.$('btn-map').addEventListener('click', () => {
      AudioManager.sfx.tap();
      UI.renderChapters(SaveManager.get());
      UI.show('map');
    });

    UI.$('btn-back-chapters').addEventListener('click', () => {
      UI.renderChapters(SaveManager.get());
    });

    UI.$('btn-achievements').addEventListener('click', () => {
      AudioManager.sfx.tap();
      UI.renderAchievements(SaveManager.get());
      UI.show('achievements');
    });

    UI.$('btn-stats').addEventListener('click', () => {
      AudioManager.sfx.tap();
      UI.renderStats(SaveManager.get());
      UI.show('stats');
    });

    document.querySelectorAll('.back-btn[data-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        AudioManager.sfx.tap();
        UI.show(btn.dataset.target);
        UI.updateMenu(SaveManager.get());
      });
    });

    document.body.addEventListener('click', () => AudioManager.resume(), { once: true });
  }

  function bindSettings() {
    const save = SaveManager.get();
    UI.$('toggle-sfx').checked = save.settings.sfx;
    UI.$('toggle-music').checked = save.settings.music;
    UI.$('toggle-particles').checked = save.settings.particles;

    UI.$('btn-settings').addEventListener('click', () => { AudioManager.sfx.tap(); UI.show('settings'); });
    UI.$('btn-close-settings').addEventListener('click', () => UI.show('menu'));

    UI.$('toggle-sfx').addEventListener('change', e => {
      save.settings.sfx = e.target.checked;
      AudioManager.setEnabled(e.target.checked, save.settings.music);
      SaveManager.save();
    });

    UI.$('toggle-music').addEventListener('change', e => {
      save.settings.music = e.target.checked;
      AudioManager.setEnabled(save.settings.sfx, e.target.checked);
      SaveManager.save();
    });

    UI.$('toggle-particles').addEventListener('change', e => {
      save.settings.particles = e.target.checked;
      FX.setEnabled(e.target.checked);
      SaveManager.save();
    });

    UI.$('btn-reset').addEventListener('click', () => {
      UI.confirm('Xóa toàn bộ tiến trình? Hành động này không thể hoàn tác.', {
        okLabel: 'Xóa',
        danger: true,
        returnTo: 'settings',
        onOk: () => {
          SaveManager.reset();
          UI.toast('Đã xóa tiến trình');
          UI.updateMenu(SaveManager.get());
          UI.show('menu');
        }
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
