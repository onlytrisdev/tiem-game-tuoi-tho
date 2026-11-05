/**
 * audio.js — SFX + nhạc nền (bg01…bg07)
 * Chỉ tải BGM một lần / phiên — Chơi lại không đổi src (tránh request lặp).
 */
const GameAudio = (function () {
  'use strict';

  const BGM_COUNT = 7;
  const BGM_VOLUME = 0.45;

  const sounds = {
    match: null,
    wrong: null,
    click: null
  };

  let bgmEl = null;
  let enabled = true;
  let bgmShouldPlay = false;
  let bgmSrcLocked = false;

  function getAssetBase() {
    const path = window.location.pathname;
    return path.substring(0, path.lastIndexOf('/') + 1);
  }

  function init() {
    sounds.match = document.getElementById('sfx-match');
    sounds.wrong = document.getElementById('sfx-wrong');
    sounds.click = document.getElementById('sfx-click');
    bgmEl = document.getElementById('bgm-player');
  }

  function play(name) {
    if (!enabled) return;
    const audio = sounds[name];
    if (!audio) return;
    try {
      audio.currentTime = 0;
      const promise = audio.play();
      if (promise) promise.catch(() => {});
    } catch (_) {
      // Bỏ qua
    }
  }

  function pickBgmUrl() {
    const index = Math.floor(Math.random() * BGM_COUNT) + 1;
    const file = `bg${String(index).padStart(2, '0')}.mp3`;
    return `${getAssetBase()}audio/${file}`;
  }

  function ensureBgmSource() {
    if (!bgmEl || bgmSrcLocked) return;
    bgmEl.src = pickBgmUrl();
    bgmSrcLocked = true;
  }

  /** Tiếp tục / bắt đầu BGM — không đổi track khi Chơi lại */
  function startBgm() {
    if (!bgmEl) return;
    bgmShouldPlay = true;
    bgmEl.volume = BGM_VOLUME;
    bgmEl.loop = true;
    ensureBgmSource();
    if (!enabled) return;
    const promise = bgmEl.play();
    if (promise) promise.catch(() => {});
  }

  /** Về menu — chỉ tạm dừng, giữ src */
  function stopBgm() {
    bgmShouldPlay = false;
    pauseBgm();
  }

  function pauseBgm() {
    if (!bgmEl) return;
    bgmEl.pause();
  }

  function resumeBgm() {
    if (!bgmEl || !bgmShouldPlay || !enabled) return;
    const promise = bgmEl.play();
    if (promise) promise.catch(() => {});
  }

  function setEnabled(value) {
    enabled = value;
    if (!enabled) {
      pauseBgm();
    } else if (bgmShouldPlay) {
      resumeBgm();
    }
  }

  return {
    init,
    play,
    startBgm,
    stopBgm,
    pauseBgm,
    resumeBgm,
    setEnabled
  };
})();
