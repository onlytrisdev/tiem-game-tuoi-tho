/**
 * Arcade audio — BGM random (không trùng liền nhau) + fade + menu Cài đặt.
 */
(function (global) {
  'use strict';

  var TRACKS = [
    'sound/Pikachu-theme-Song-1.mp3',
    'sound/Pikachu-theme-Song-2.mp3',
    'sound/Pikachu-theme-Song-3.mp3'
  ];
  var FADE_MS = 1400;
  var TARGET_VOL = 0.45;
  var FADE_STEP_MS = 40;

  var bgm = null;
  var lastTrackIndex = -1;
  var musicEnabled = true;
  var sfxEnabled = true;
  var fadeTimer = 0;
  var pendingStart = false;
  var settingsBound = false;

  function getBgm() {
    if (!bgm) {
      bgm = document.getElementById('gv-bgm');
    }
    return bgm;
  }

  function clearFade() {
    if (fadeTimer) {
      clearInterval(fadeTimer);
      fadeTimer = 0;
    }
  }

  function fadeVolume(from, to, done) {
    var audio = getBgm();
    if (!audio) {
      if (done) done();
      return;
    }
    clearFade();
    var steps = Math.max(1, Math.floor(FADE_MS / FADE_STEP_MS));
    var step = 0;
    audio.volume = from;
    fadeTimer = setInterval(function () {
      step++;
      var t = step / steps;
      audio.volume = from + (to - from) * t;
      if (step >= steps) {
        clearFade();
        audio.volume = to;
        if (done) done();
      }
    }, FADE_STEP_MS);
  }

  function pickTrackIndex(excludeIndex) {
    var pool = [];
    var i;
    for (i = 0; i < TRACKS.length; i++) {
      if (i !== excludeIndex) {
        pool.push(i);
      }
    }
    if (pool.length === 0) {
      return Math.floor(Math.random() * TRACKS.length);
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function playTrack(index, fadeIn) {
    var audio = getBgm();
    if (!audio || !musicEnabled) {
      return;
    }
    lastTrackIndex = index;
    audio.src = (global.oStaticURL || '') + TRACKS[index];
    audio.loop = false;
    audio.volume = fadeIn ? 0 : TARGET_VOL;
    var p = audio.play();
    if (p && typeof p.catch === 'function') {
      p.catch(function () {
        pendingStart = true;
      });
    }
    if (fadeIn) {
      fadeVolume(0, TARGET_VOL, null);
    }
  }

  function startBgm(fadeIn) {
    if (!musicEnabled) {
      return;
    }
    pendingStart = false;
    var idx = pickTrackIndex(-1);
    playTrack(idx, fadeIn !== false);
  }

  function onTrackEnded() {
    if (!musicEnabled) {
      return;
    }
    var audio = getBgm();
    if (!audio) {
      return;
    }
    fadeVolume(audio.volume, 0, function () {
      try {
        audio.pause();
      } catch (e) {}
      var next = pickTrackIndex(lastTrackIndex);
      playTrack(next, true);
    });
  }

  function stopBgm(fadeOut, done) {
    var audio = getBgm();
    if (!audio) {
      if (done) done();
      return;
    }
    if (fadeOut && audio.volume > 0 && !audio.paused) {
      fadeVolume(audio.volume, 0, function () {
        try {
          audio.pause();
        } catch (e) {}
        if (done) done();
      });
    } else {
      try {
        audio.pause();
        audio.volume = 0;
      } catch (e2) {}
      if (done) done();
    }
  }

  function tryStart() {
    if (!musicEnabled) {
      return;
    }
    var audio = getBgm();
    if (!audio) {
      pendingStart = true;
      return;
    }
    if (!audio.paused && audio.currentTime > 0) {
      return;
    }
    startBgm(true);
  }

  function setMusicEnabled(on) {
    musicEnabled = !!on;
    var btn = document.getElementById('gv-btn-music');
    if (btn) {
      btn.classList.toggle('is-off', !musicEnabled);
      btn.setAttribute('aria-pressed', musicEnabled ? 'true' : 'false');
    }
    if (musicEnabled) {
      tryStart();
    } else {
      stopBgm(true, null);
    }
  }

  function setSfxEnabled(on) {
    sfxEnabled = !!on;
    global.checksound = sfxEnabled;
    var btn = document.getElementById('gv-btn-sfx');
    if (btn) {
      btn.classList.toggle('is-off', !sfxEnabled);
      btn.setAttribute('aria-pressed', sfxEnabled ? 'true' : 'false');
    }
  }

  function closeSettingsPanel() {
    var panel = document.getElementById('gv-settings-panel');
    var toggle = document.getElementById('gv-btn-settings');
    if (panel) {
      panel.hidden = true;
    }
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  function openSettingsPanel() {
    var panel = document.getElementById('gv-settings-panel');
    var toggle = document.getElementById('gv-btn-settings');
    if (panel) {
      panel.hidden = false;
    }
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'true');
    }
  }

  function toggleSettingsPanel() {
    var panel = document.getElementById('gv-settings-panel');
    if (panel && panel.hidden) {
      openSettingsPanel();
    } else {
      closeSettingsPanel();
    }
  }

  function bindSettings() {
    if (settingsBound) {
      return;
    }
    settingsBound = true;

    var toggle = document.getElementById('gv-btn-settings');
    var musicBtn = document.getElementById('gv-btn-music');
    var sfxBtn = document.getElementById('gv-btn-sfx');
    var bxhBtn = document.getElementById('gv-btn-leaderboard');
    var deleteBtn = document.getElementById('gv-btn-delete-save');
    var audio = getBgm();

    if (audio) {
      audio.addEventListener('ended', onTrackEnded);
    }

    function bindActivate(el, fn) {
      if (!el) {
        return;
      }
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        fn(e);
      });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          fn(e);
        }
      });
    }

    bindActivate(toggle, function () {
      toggleSettingsPanel();
    });
    bindActivate(musicBtn, function () {
      setMusicEnabled(!musicEnabled);
    });
    bindActivate(sfxBtn, function () {
      setSfxEnabled(!sfxEnabled);
    });
    bindActivate(bxhBtn, function () {
      closeSettingsPanel();
      if (global.ArcadeLayout && typeof global.ArcadeLayout.pauseForLeaderboard === 'function') {
        global.ArcadeLayout.pauseForLeaderboard();
      }
      if (global.HistoryLeaderboard && typeof global.HistoryLeaderboard.open === 'function') {
        global.HistoryLeaderboard.open();
        return;
      }
      if (global.ArcadeLayout && typeof global.ArcadeLayout.resumeFromLeaderboard === 'function') {
        global.ArcadeLayout.resumeFromLeaderboard();
      }
      console.warn('[Arcade] HistoryLeaderboard chưa sẵn sàng');
    });
    bindActivate(deleteBtn, function () {
      if (global.gvAwaitingScore) {
        return;
      }
      closeSettingsPanel();
      if (global.ArcadeSave && global.ArcadeSave.confirmResetAll) {
        global.ArcadeSave.confirmResetAll();
      }
    });

    document.addEventListener('click', function (e) {
      var root = document.getElementById('gv-settings');
      if (!root || root.contains(e.target)) {
        return;
      }
      closeSettingsPanel();
    });

    setMusicEnabled(true);
    setSfxEnabled(true);
  }

  function init() {
    bindSettings();
    if (pendingStart) {
      tryStart();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.ArcadeAudio = {
    tryStart: tryStart,
    startBgm: startBgm,
    stopBgm: stopBgm,
    setMusicEnabled: setMusicEnabled,
    setSfxEnabled: setSfxEnabled,
    bindSettings: bindSettings
  };
})(window);
