/**
 * Điều hướng màn hình & render UI tĩnh
 */
const UI = (function () {
  'use strict';

  function $(id) { return document.getElementById(id); }

  function show(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = $(`screen-${screenId}`);
    if (el) el.classList.add('active');
  }

  function toast(msg) {
    const box = $('toast-box');
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    box.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  function achPopup(title, desc) {
    const p = $('ach-popup');
    p.innerHTML = `<span>🏆 ${title}</span><br><small>${desc}</small>`;
    p.classList.remove('hidden');
    setTimeout(() => p.classList.add('hidden'), 3500);
  }

  function updateMenu(save) {
    $('menu-best').textContent = save.stats.bestScore;
  }

  function renderLevelPicker(save) {
    const grid = $('level-pick-grid');
    grid.innerHTML = '';
    for (let id = 1; id <= 300; id++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn';
      const stars = save.levelStars[id] || 0;
      const playable = id === 1 || id <= save.unlockedLevel;
      if (stars > 0) btn.classList.add('done');
      if (!playable) btn.classList.add('locked');
      btn.innerHTML = `${id}<span class="star-mini">${'★'.repeat(stars)}</span>`;
      if (playable) btn.addEventListener('click', () => Game.startLevel(id));
      grid.appendChild(btn);
    }
  }

  function makeChapterCard(ch, save) {
    const startLvl = ch.id * 50 + 1;
    const endLvl = startLvl + 49;
    const done = countDoneInChapter(save, ch.id);
    const locked = save.unlockedLevel < startLvl;
    const card = document.createElement('div');
    card.className = 'chapter-card' + (locked ? ' locked' : '');
    card.innerHTML = `
      <h3>${ch.icon} ${ch.name}</h3>
      <p>${ch.desc} · Màn ${startLvl}–${endLvl}</p>
      <div class="chapter-progress"><div class="chapter-progress-fill" style="width:${done / 50 * 100}%"></div></div>
      <small class="muted">${done}/50 hoàn thành</small>
    `;
    if (!locked) card.addEventListener('click', () => openChapterLevels(ch));
    return card;
  }

  function appendChapterRow(list, chapters, indices, save) {
    const row = document.createElement('div');
    row.className = 'chapter-row';
    indices.forEach((idx, col) => {
      if (col > 0) {
        const arrow = document.createElement('div');
        arrow.className = 'chapter-arrow';
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '→';
        row.appendChild(arrow);
      }
      row.appendChild(makeChapterCard(chapters[idx], save));
    });
    list.appendChild(row);
  }

  function renderChapters(save) {
    const list = $('chapter-list');
    list.innerHTML = '';
    const chapters = LoveFiggerits.CHAPTERS;
    appendChapterRow(list, chapters, [0, 1, 2], save);
    const turn = document.createElement('div');
    turn.className = 'chapter-turn';
    const down = document.createElement('div');
    down.className = 'chapter-arrow chapter-arrow-down';
    down.setAttribute('aria-hidden', 'true');
    down.textContent = '↓';
    turn.appendChild(down);
    list.appendChild(turn);
    appendChapterRow(list, chapters, [3, 4, 5], save);
    $('level-panel').classList.add('hidden');
    list.classList.remove('hidden');
  }

  function countDoneInChapter(save, chId) {
    let n = 0;
    for (let i = chId * 50; i < chId * 50 + 50; i++) {
      if (save.levelStars[i + 1]) n++;
    }
    return n;
  }

  function openChapterLevels(ch) {
    $('chapter-list').classList.add('hidden');
    $('level-panel').classList.remove('hidden');
    $('chapter-title').textContent = `${ch.icon} ${ch.name}`;
    const grid = $('level-grid');
    grid.innerHTML = '';
    for (let i = 0; i < 50; i++) {
      const id = ch.id * 50 + i + 1;
      const btn = document.createElement('button');
      btn.className = 'lvl-btn';
      const stars = SaveManager.get().levelStars[id] || 0;
      if (stars > 0) btn.classList.add('done');
      if (id > SaveManager.get().unlockedLevel) btn.classList.add('locked');
      btn.innerHTML = `${id}<span class="star-mini">${'★'.repeat(stars)}</span>`;
      btn.addEventListener('click', () => Game.startLevel(id));
      grid.appendChild(btn);
    }
  }

  const ACHIEVEMENTS = [
    { id: 'first', icon: '💕', title: 'Nhịp đầu tiên', desc: 'Hoàn thành màn đầu tiên', test: s => s.stats.totalWins >= 1 },
    { id: 'streak3', icon: '🔥', title: 'Ba ngày yêu', desc: 'Đăng nhập 3 ngày liên tiếp', test: s => s.streak >= 3 },
    { id: 'streak7', icon: '💥', title: 'Tuần lãng mạn', desc: 'Đăng nhập 7 ngày liên tiếp', test: s => s.streak >= 7 },
    { id: 'lvl50', icon: '🌹', title: 'Nửa chặng', desc: 'Hoàn thành 50 màn', test: s => s.stats.totalWins >= 50 },
    { id: 'lvl100', icon: '💍', title: 'Trăm lời hứa', desc: 'Hoàn thành 100 màn', test: s => s.stats.totalWins >= 100 },
    { id: 'lvl300', icon: '👑', title: 'Huyền thoại tình yêu', desc: 'Hoàn thành 300 màn', test: s => s.stats.totalWins >= 300 },
    { id: 'perfect10', icon: '🧠', title: 'Trí tuệ tinh tế', desc: '10 màn không sai', test: s => s.stats.perfectLevels >= 10 },
    { id: 'ch1', icon: '😊', title: 'Rung động đầu tiên', desc: 'Xong chương 1', test: s => countDoneInChapter(s, 0) >= 50 },
    { id: 'ch3', icon: '💕', title: 'Yêu trọn vẹn', desc: 'Xong chương 3', test: s => countDoneInChapter(s, 2) >= 50 },
    { id: 'ch6', icon: '♾️', title: 'Mãi mãi', desc: 'Xong chương cuối', test: s => countDoneInChapter(s, 5) >= 50 }
  ];

  let _confirmReturnTo = 'menu';
  let _confirmOnOk = null;

  function confirm(message, opts = {}) {
    _confirmReturnTo = opts.returnTo || 'menu';
    _confirmOnOk = opts.onOk || null;
    $('confirm-message').textContent = message;
    $('confirm-ok').textContent = opts.okLabel || 'Xác nhận';
    $('confirm-ok').classList.toggle('btn-danger-text', !!opts.danger);
    show('confirm');
  }

  function bindConfirm() {
    $('confirm-cancel').addEventListener('click', () => {
      _confirmOnOk = null;
      show(_confirmReturnTo);
    });
    $('confirm-ok').addEventListener('click', () => {
      const fn = _confirmOnOk;
      _confirmOnOk = null;
      if (fn) fn();
      else show(_confirmReturnTo);
    });
  }

  function checkAchievements(save) {
    const earned = [];
    ACHIEVEMENTS.forEach(a => {
      if (save.achievements.includes(a.id)) return;
      if (a.test(save)) {
        save.achievements.push(a.id);
        earned.push(a);
        achPopup(a.title, a.desc);
      }
    });
    if (earned.length) SaveManager.save();
    return earned;
  }

  function renderAchievements(save) {
    const list = $('achievements-list');
    list.innerHTML = '';
    let n = 0;
    ACHIEVEMENTS.forEach(a => {
      const ok = save.achievements.includes(a.id);
      if (ok) n++;
      const el = document.createElement('div');
      el.className = 'ach-item' + (ok ? ' unlocked' : ' locked');
      el.innerHTML = `
        <span class="icon" aria-hidden="true">${a.icon}</span>
        <div class="ach-body"><h4>${a.title}</h4><p>${a.desc}</p></div>
        <span class="ach-badge" aria-label="${ok ? 'Đã mở khóa' : 'Chưa đạt'}">${ok ? '✓' : ''}</span>`;
      list.appendChild(el);
    });
    $('ach-count').textContent = `${n}/${ACHIEVEMENTS.length}`;
  }

  function renderStats(save) {
    const s = save.stats;
    const grid = $('stats-grid');
    const items = [
      ['Màn thắng', s.totalWins],
      ['Lần chơi', s.totalPlays],
      ['Không sai', s.perfectLevels],
      ['Gợi ý dùng', s.totalHints],
      ['Lỗi sai', s.totalMistakes],
      ['Điểm cao nhất', s.bestScore]
    ];
    grid.innerHTML = items.map(([lbl, val]) =>
      `<div class="stat-card"><div class="val">${val}</div><div class="lbl">${lbl}</div></div>`
    ).join('');
  }

  return {
    $, show, toast, achPopup, confirm, bindConfirm, updateMenu, renderLevelPicker,
    renderChapters, openChapterLevels, renderAchievements, renderStats,
    checkAchievements, ACHIEVEMENTS, countDoneInChapter
  };
})();
