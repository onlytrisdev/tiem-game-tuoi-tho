/**
 * Âm thanh — file MP3 trong thư mục audio/
 */
const AudioManager = (function () {
  'use strict';

  const AUDIO_DIR = 'audio/';
  const BGM_TRACKS = ['bg01.mp3', 'bg02.mp3', 'bg03.mp3'];
  const BGM_VOLUME = 0.42;
  const SFX_VOLUME = 0.72;

  let ctx = null;
  let enabled = { sfx: true, music: true };
  let bgm = null;
  let stinger = null;

  function init() {
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* */ }
  }

  function resume() {
    if (ctx?.state === 'suspended') ctx.resume();
    if (bgm?.paused && enabled.music) bgm.play().catch(() => {});
  }

  function tone(freq, dur, type = 'sine', vol = 0.12) {
    if (!enabled.sfx || !ctx) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.value = vol;
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + dur);
  }

  function src(file) {
    return AUDIO_DIR + file;
  }

  function playOneShot(file, volume = SFX_VOLUME) {
    if (!enabled.sfx) return;
    const audio = new Audio(src(file));
    audio.volume = volume;
    audio.play().catch(() => {});
  }

  function stopBgm() {
    if (!bgm) return;
    bgm.pause();
    bgm.currentTime = 0;
    bgm.removeAttribute('src');
    bgm.load();
    bgm = null;
  }

  function stopStinger() {
    if (!stinger) return;
    stinger.pause();
    stinger.currentTime = 0;
    stinger = null;
  }

  /** Dừng nhạc nền rồi phát jingle thắng/thua — không chồng track */
  function playStinger(file) {
    stopBgm();
    stopStinger();
    if (!enabled.sfx) return;
    stinger = new Audio(src(file));
    stinger.volume = SFX_VOLUME;
    stinger.addEventListener('ended', () => { stinger = null; }, { once: true });
    stinger.play().catch(() => {});
  }

  function startMusic() {
    if (!enabled.music) return;
    if (bgm) {
      if (bgm.paused) bgm.play().catch(() => {});
      return;
    }
    stopStinger();
    const track = BGM_TRACKS[Math.floor(Math.random() * BGM_TRACKS.length)];
    bgm = new Audio(src(track));
    bgm.loop = true;
    bgm.volume = BGM_VOLUME;
    bgm.play().catch(() => {});
  }

  function stopMusic() {
    stopBgm();
    stopStinger();
  }

  const sfx = {
    tap: () => tone(520, 0.06),
    correct: () => { tone(523, 0.1); setTimeout(() => tone(659, 0.12), 70); },
    wrong: () => tone(180, 0.22, 'square', 0.07),
    win: () => playStinger('chien-thang.mp3'),
    gameover: () => playStinger('that-bai.mp3'),
    coin: () => { tone(880, 0.08); setTimeout(() => tone(1100, 0.1), 50); },
    clueSelect: () => playOneShot('chon-manh-moi.mp3'),
    keyType: () => playOneShot('go-phim.mp3')
  };

  function setEnabled(sfxOn, musicOn) {
    enabled.sfx = sfxOn;
    enabled.music = musicOn;
    if (!musicOn) stopMusic();
    else startMusic();
  }

  return { init, resume, sfx, startMusic, stopMusic, setEnabled };
})();
