/**
 * Lưu / tải tiến trình qua LocalStorage
 */
const SaveManager = (function () {
  'use strict';

  const KEY = 'tinhYeuFiggerits_v1';

  function defaults() {
    return {
      coins: 150,
      hearts: 5,
      currentLevel: 1,
      unlockedLevel: 1,
      levelStars: {},
      levelScores: {},
      streak: 0,
      lastLogin: '',
      dailyClaimed: '',
      dailyAdClaimed: '',
      dailyStreak: 0,
      achievements: [],
      settings: { sfx: true, music: true, particles: true },
      stats: {
        totalWins: 0,
        totalPlays: 0,
        totalHints: 0,
        totalMistakes: 0,
        perfectLevels: 0,
        bestScore: 0,
        totalCoinsEarned: 0,
        chaptersCompleted: 0
      },
      dailyCompleted: false,
      dailyDate: ''
    };
  }

  let data = defaults();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) data = { ...defaults(), ...JSON.parse(raw), stats: { ...defaults().stats, ...JSON.parse(raw).stats || {} } };
    } catch (e) { console.warn('Không tải được save:', e); }
    updateStreak();
    return data;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { console.warn('Không lưu được:', e); }
  }

  function reset() {
    localStorage.removeItem(KEY);
    data = defaults();
    save();
  }

  function get() { return data; }

  function updateStreak() {
    const today = todayStr();
    if (data.lastLogin === today) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    const yesterday = y.toISOString().slice(0, 10);
    if (data.lastLogin === yesterday) data.streak += 1;
    else data.streak = 1;
    data.lastLogin = today;
    save();
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function canClaimDaily() {
    return data.dailyClaimed !== todayStr();
  }

  function canClaimDailyAd() {
    const today = todayStr();
    return data.dailyClaimed === today && data.dailyAdClaimed !== today;
  }

  function claimDailyAd() {
    const today = todayStr();
    if (data.dailyClaimed !== today || data.dailyAdClaimed === today) return null;
    data.dailyAdClaimed = today;
    save();
    return { streak: data.dailyStreak };
  }

  function claimDaily() {
    const today = todayStr();
    if (data.dailyClaimed === today) return null;
    const y = new Date(); y.setDate(y.getDate() - 1);
    if (data.dailyClaimed === y.toISOString().slice(0, 10)) data.dailyStreak += 1;
    else data.dailyStreak = 1;
    data.dailyClaimed = today;
    save();
    return { streak: data.dailyStreak };
  }

  function unlockLevel(id) {
    if (id + 1 > data.unlockedLevel) data.unlockedLevel = id + 1;
    if (id > data.currentLevel) data.currentLevel = id;
    save();
  }

  function recordWin(levelId, stars, score, noMistakes) {
    const prev = data.levelStars[levelId] || 0;
    data.levelStars[levelId] = Math.max(prev, stars);
    data.levelScores[levelId] = Math.max(data.levelScores[levelId] || 0, score);
    data.stats.totalWins++;
    if (noMistakes) data.stats.perfectLevels++;
    if (score > data.stats.bestScore) data.stats.bestScore = score;
    if (levelId >= data.currentLevel) data.currentLevel = levelId + 1;
    unlockLevel(levelId);
    save();
  }

  return { load, save, reset, get, canClaimDaily, canClaimDailyAd, claimDaily, claimDailyAd, recordWin, todayStr, defaults };
})();
