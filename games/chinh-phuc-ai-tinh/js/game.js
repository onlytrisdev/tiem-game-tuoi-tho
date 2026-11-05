/**
 * Logic chơi Figgerits — manh mối, ánh xạ số-chữ, câu nói ẩn
 */
const Game = (function () {
  'use strict';

  const MAX_LIVES = 3;
  const FREE_HINTS_PER_LEVEL = 3;
  const AD_HINTS_PER_LEVEL = 3;
  const PENALTY_PER_MISTAKE = 10;

  let level = null;
  let letterMap = {};      // số → chữ
  let numToLetter = {};    // bản sao có thể ghi
  let lives = MAX_LIVES;
  let mistakes = 0;
  let score = 0;
  let pendingPenalty = 0;
  let activeClueIdx = -1;
  let activeSlotIdx = 0;
  let wordInput = [];
  let solvedClues = new Set();
  let usedHint = false;
  let freeHintsLeft = FREE_HINTS_PER_LEVEL;
  let adHintsLeft = AD_HINTS_PER_LEVEL;
  let mode = 'campaign';

  function startLevel(levelId, playMode = 'campaign') {
    mode = playMode;
    level = LoveFiggerits.ALL_LEVELS[levelId - 1];
    if (!level) { UI.toast('Không tìm thấy màn chơi'); return; }

    lives = MAX_LIVES;
    mistakes = 0;
    score = 0;
    pendingPenalty = 0;
    usedHint = false;
    freeHintsLeft = FREE_HINTS_PER_LEVEL;
    adHintsLeft = AD_HINTS_PER_LEVEL;
    activeClueIdx = -1;
    wordInput = [];
    solvedClues = new Set();

    // Khởi tạo ánh xạ số → chữ (chưa biết)
    numToLetter = {};
    letterMap = {};
    Object.keys(level.encoding.numToLetter).forEach(n => {
      numToLetter[n] = null;
    });

    const save = SaveManager.get();
    save.stats.totalPlays++;
    SaveManager.save();

    renderHUD();
    renderPhraseBoard();
    renderClues();
    buildKeyboard();
    updateHintUI();
    clearWordInput();
    UI.show('game');
    AudioManager.startMusic();
    AudioManager.sfx.tap();
  }

  /** Trừ điểm khi sai; phần không trừ được cộng vào pending, trừ ở lần đúng sau */
  function applyMistakePenalty() {
    const fromScore = Math.min(score, PENALTY_PER_MISTAKE);
    score -= fromScore;
    pendingPenalty += PENALTY_PER_MISTAKE - fromScore;
  }

  function addScore(basePoints) {
    let earned = Math.floor(basePoints);
    if (pendingPenalty > 0) {
      const taken = Math.min(pendingPenalty, earned);
      earned -= taken;
      pendingPenalty -= taken;
    }
    score += earned;
    return earned;
  }

  function clueScoreMultiplier() {
    if (level.difficulty === 'easy') return 1;
    if (level.difficulty === 'medium') return 1.5;
    if (level.difficulty === 'hard') return 2;
    return 2.5;
  }

  function renderHUD() {
    UI.$('game-level-label').textContent = `Màn ${level.id} · ${level.chapterName}`;
    UI.$('game-category').textContent = level.categoryLabel;
    UI.$('game-difficulty').textContent = level.difficultyLabel;
    UI.$('game-score').textContent = `${Math.max(0, score)} đ`;

    const livesEl = UI.$('lives-display');
    livesEl.innerHTML = '';
    for (let i = 0; i < MAX_LIVES; i++) {
      const s = document.createElement('span');
      s.textContent = '❤️';
      if (i >= lives) s.classList.add('lost');
      livesEl.appendChild(s);
    }
  }

  /** Vẽ bảng câu nói ẩn — nhóm theo từ, xuống dòng giữa các từ */
  function renderPhraseBoard() {
    const board = UI.$('phrase-board');
    board.innerHTML = '';
    const words = level.phrase.split(/\s+/);

    words.forEach(word => {
      const wordEl = document.createElement('div');
      wordEl.className = 'phrase-word';

      for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        const cell = document.createElement('span');
        cell.className = 'phrase-cell';

        const num = level.encoding.letterToNum[ch];
        const numEl = document.createElement('span');
        numEl.className = 'phrase-num';
        numEl.textContent = num || '';

        const letterEl = document.createElement('span');
        letterEl.className = 'phrase-letter';
        const revealed = numToLetter[num];
        letterEl.textContent = revealed || '';
        if (revealed) letterEl.classList.add('filled');
        if (solvedClues.size > 0 && revealed) letterEl.classList.add('revealed');
        letterEl.dataset.num = num;
        letterEl.dataset.ch = ch;

        cell.appendChild(numEl);
        cell.appendChild(letterEl);
        wordEl.appendChild(cell);
      }
      board.appendChild(wordEl);
    });
  }

  function renderClues() {
    const list = UI.$('clues-list');
    list.innerHTML = '';

    level.clues.forEach((clue, idx) => {
      const item = document.createElement('div');
      item.className = 'clue-item';
      if (idx === activeClueIdx) item.classList.add('active');
      if (solvedClues.has(idx)) item.classList.add('solved');

      const ansLen = clue.answer.replace(/ /g, '').length;
      item.innerHTML = `
        <span class="clue-num">${clue.id}.</span>
        <div>
          <div class="clue-text">${clue.question}</div>
          ${solvedClues.has(idx)
            ? `<div class="clue-answer">${clue.answer}</div>`
            : `<div class="clue-answer muted">${ansLen} chữ</div>`}
        </div>
      `;
      if (!solvedClues.has(idx)) {
        item.addEventListener('click', () => selectClue(idx, true));
      }
      list.appendChild(item);
    });

    if (activeClueIdx < 0 && solvedClues.size < level.clues.length) {
      const first = level.clues.findIndex((_, i) => !solvedClues.has(i));
      if (first >= 0) selectClue(first);
    }
  }

  function selectClue(idx, fromUser = false) {
    if (solvedClues.has(idx)) return;
    if (fromUser) AudioManager.sfx.clueSelect();
    activeClueIdx = idx;
    activeSlotIdx = 0;
    const ans = level.clues[idx].answer;
    wordInput = ans.split('').map(ch => (ch === ' ' ? ' ' : ''));
    renderClues();
    renderWordSlots();
    UI.$('active-clue-label').textContent = `${idx + 1}. ${level.clues[idx].question}`;
  }

  function focusSlot(idx) {
    if (activeClueIdx < 0) return;
    const ans = level.clues[activeClueIdx].answer;
    if (idx < 0 || idx >= ans.length || ans[idx] === ' ') return;
    activeSlotIdx = idx;
    renderWordSlots();
  }

  function nextEmptySlot(fromIdx) {
    const ans = level.clues[activeClueIdx].answer;
    for (let i = fromIdx ?? 0; i < ans.length; i++) {
      if (ans[i] !== ' ' && !wordInput[i]) return i;
    }
    return -1;
  }

  function advanceSlot() {
    const next = nextEmptySlot(activeSlotIdx + 1);
    if (next >= 0) activeSlotIdx = next;
    else {
      const first = nextEmptySlot(0);
      if (first >= 0) activeSlotIdx = first;
    }
  }

  function renderWordSlots() {
    const slots = UI.$('answer-slots');
    slots.innerHTML = '';
    if (activeClueIdx < 0) return;

    wordInput.forEach((ch, i) => {
      if (ch === ' ' && level.clues[activeClueIdx].answer[i] === ' ') {
        const sp = document.createElement('span');
        sp.className = 'slot-space';
        slots.appendChild(sp);
        return;
      }
      const s = document.createElement('div');
      s.className = 'slot';
      if (ch && ch !== ' ') s.classList.add('filled');
      if (i === activeSlotIdx) s.classList.add('active');
      s.textContent = ch === ' ' ? '' : ch;
      s.addEventListener('click', () => focusSlot(i));
      slots.appendChild(s);
    });
  }

  function buildKeyboard() {
    const kb = UI.$('keyboard');
    kb.innerHTML = '';

    ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].forEach(row => {
      const rowEl = document.createElement('div');
      rowEl.className = 'kb-row';
      row.split('').forEach(k => rowEl.appendChild(makeKey(k, k)));
      kb.appendChild(rowEl);
    });
  }

  function makeKey(label, value) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'key';
    btn.textContent = label;
    btn.addEventListener('click', () => typeKey(value));
    return btn;
  }

  /** Nhảy tới ô trống kế tiếp (bỏ qua khoảng trắng) */
  function skipToNextEmpty(fromIdx) {
    const ans = level.clues[activeClueIdx].answer;
    for (let i = fromIdx; i < ans.length; i++) {
      if (ans[i] !== ' ' && !wordInput[i]) {
        activeSlotIdx = i;
        return true;
      }
    }
    return false;
  }

  function typeKey(k) {
    if (activeClueIdx < 0) return;
    AudioManager.sfx.keyType();
    const key = ViInput.normalize(k);
    if (!ViInput.isLetterKey(key)) return;

    // Bỏ qua ô khoảng trắng
    while (activeSlotIdx < wordInput.length && wordInput[activeSlotIdx] === ' ') {
      activeSlotIdx++;
    }
    if (activeSlotIdx >= wordInput.length) return;

    const cur = wordInput[activeSlotIdx] || '';

    if (cur && cur !== ' ') {
      if (!skipToNextEmpty(activeSlotIdx + 1)) return;
    }

    wordInput[activeSlotIdx] = key;
    renderWordSlots();
    skipToNextEmpty(activeSlotIdx + 1);
  }

  function deleteKey() {
    AudioManager.sfx.tap();
    if (activeClueIdx < 0) return;
    if (wordInput[activeSlotIdx] && wordInput[activeSlotIdx] !== ' ') {
      wordInput[activeSlotIdx] = '';
      renderWordSlots();
      return;
    }
    let idx = activeSlotIdx - 1;
    while (idx >= 0 && (wordInput[idx] === ' ' || !wordInput[idx])) idx--;
    if (idx >= 0) {
      wordInput[idx] = '';
      activeSlotIdx = idx;
      renderWordSlots();
    }
  }

  function clearWordInput() {
    if (activeClueIdx >= 0) {
      const ans = level.clues[activeClueIdx].answer;
      wordInput = ans.split('').map(ch => (ch === ' ' ? ' ' : ''));
      activeSlotIdx = nextEmptySlot(0);
      if (activeSlotIdx < 0) activeSlotIdx = 0;
      renderWordSlots();
    }
  }

  /** Kiểm tra đáp án manh mối */
  function checkWord() {
    if (activeClueIdx < 0) { UI.toast('Chọn một manh mối trước!'); return; }

    const clue = level.clues[activeClueIdx];
    const guess = wordInput.join('');
    const target = clue.answer;

    if (!ViInput.wordsMatch(guess, target)) {
      onWrong();
      return;
    }

    // Đúng — cập nhật ánh xạ
    AudioManager.sfx.correct();
    solvedClues.add(activeClueIdx);
    applyWordToMap(target);
    addScore(50 * clueScoreMultiplier());
    renderPhraseBoard();
    renderClues();
    renderHUD();
    FX.burst(innerWidth / 2, innerHeight / 3);

    // Chọn manh mối tiếp
    activeClueIdx = -1;
    const next = level.clues.findIndex((_, i) => !solvedClues.has(i));
    if (next >= 0) selectClue(next);
    else clearWordInput();

    checkWin();
  }

  /** Ghi các chữ từ đáp án vào bảng ánh xạ */
  function applyWordToMap(word) {
    const norm = LoveFiggerits.normalize(word);
    for (let i = 0; i < norm.length; i++) {
      const ch = norm[i];
      if (ch === ' ') continue;
      const num = level.encoding.letterToNum[ch];
      if (num) numToLetter[num] = ch;
    }
    fillPhraseFromMap();
  }

  function fillPhraseFromMap() {
    document.querySelectorAll('.phrase-letter').forEach(el => {
      const num = el.dataset.num;
      if (num && numToLetter[num]) {
        el.textContent = numToLetter[num];
        el.classList.add('filled', 'revealed');
      }
    });
  }

  function onWrong() {
    AudioManager.sfx.wrong();
    mistakes++;
    lives--;
    applyMistakePenalty();
    SaveManager.get().stats.totalMistakes++;
    SaveManager.save();
    renderHUD();
    UI.toast(`Sai rồi! -${PENALTY_PER_MISTAKE} điểm · Mất một trái tim 💔`);
    const sec = document.querySelector('.clues-section');
    sec?.classList.add('shake');
    setTimeout(() => sec?.classList.remove('shake'), 400);

    clearWordInput();

    if (lives <= 0) {
      setTimeout(showGameOver, 500);
    }
  }

  function checkWin() {
    const allCluesSolved = solvedClues.size >= level.clues.length;
    const phraseComplete = isPhraseComplete();

    if (allCluesSolved && phraseComplete) {
      onWin();
    } else if (allCluesSolved && !phraseComplete) {
      // Tự điền phần còn lại từ map
      fillPhraseFromMap();
      if (isPhraseComplete()) onWin();
    }
  }

  function isPhraseComplete() {
    const phrase = level.phrase;
    for (let i = 0; i < phrase.length; i++) {
      const ch = phrase[i];
      if (ch === ' ') continue;
      const num = level.encoding.letterToNum[ch];
      if (!numToLetter[num]) return false;
    }
    return true;
  }

  function onWin() {
    AudioManager.sfx.win();
    FX.confettiWin();

    const save = SaveManager.get();
    const noMistakes = mistakes === 0;
    const stars = noMistakes ? 3 : mistakes === 1 ? 2 : 1;
    addScore(100);

    if (mode === 'daily') {
      save.dailyDate = SaveManager.todayStr();
      save.dailyCompleted = true;
      SaveManager.save();
    }

    SaveManager.recordWin(level.id, stars, Math.max(0, score), noMistakes);
    UI.checkAchievements(save);

    UI.$('win-phrase').textContent = `"${level.phrase}"`;
    UI.$('win-stars').textContent = stars;
    UI.$('win-score').textContent = Math.max(0, score);

    UI.show('win');
  }

  function showGameOver() {
    AudioManager.sfx.gameover();
    UI.show('gameover');
  }

  function retry() {
    startLevel(level.id, mode);
  }

  function applyHintLetter() {
    if (activeClueIdx < 0) { UI.toast('Chọn manh mối cần gợi ý'); return false; }
    const answer = level.clues[activeClueIdx].answer;
    const emptyIdx = nextEmptySlot(activeSlotIdx);
    const idx = emptyIdx >= 0 ? emptyIdx : nextEmptySlot(0);
    if (idx >= 0) {
      wordInput[idx] = answer[idx];
      activeSlotIdx = idx;
    }
    const firstCh = answer.replace(/ /g, '')[0] || answer[0];
    const num = level.encoding.letterToNum[firstCh];
    if (num) numToLetter[num] = firstCh;
    renderWordSlots();
    renderPhraseBoard();
    AudioManager.sfx.coin();
    UI.toast('Đã dùng gợi ý! 💡');
    return true;
  }

  function updateHintUI() {
    const btn = UI.$('btn-hint');
    const icon = UI.$('btn-hint-icon');
    const count = UI.$('btn-hint-count');
    const total = freeHintsLeft + adHintsLeft;

    btn.disabled = total <= 0;
    if (freeHintsLeft > 0) {
      icon.textContent = '💡';
      count.textContent = freeHintsLeft;
      btn.title = `${freeHintsLeft} gợi ý miễn phí còn lại`;
    } else if (adHintsLeft > 0) {
      icon.textContent = '📺 💡';
      count.textContent = adHintsLeft;
      btn.title = `Xem quảng cáo để nhận gợi ý (${adHintsLeft} lần còn lại)`;
    } else {
      icon.textContent = '💡';
      count.textContent = '0';
      btn.title = 'Đã hết gợi ý';
    }
  }

  function consumeHint() {
    usedHint = true;
    const save = SaveManager.get();
    save.stats.totalHints++;
    SaveManager.save();
    applyHintLetter();
    updateHintUI();
  }

  function useHint() {
    if (activeClueIdx < 0) {
      UI.toast('Chọn manh mối cần gợi ý');
      return;
    }
    if (freeHintsLeft > 0) {
      freeHintsLeft--;
      consumeHint();
      return;
    }
    if (adHintsLeft > 0) {
      GVAds.showRewarded(function () {
        adHintsLeft--;
        consumeHint();
      }, function () {
        UI.toast('Quảng cáo chưa sẵn sàng, thử lại sau');
      });
      return;
    }
    UI.toast('Đã hết gợi ý trong màn này');
  }

  function nextLevel() {
    const next = level.id + 1;
    if (next <= 300) startLevel(next);
    else { UI.toast('Bạn đã hoàn thành tất cả 300 màn! 🎉'); UI.show('menu'); UI.updateMenu(SaveManager.get()); }
  }

  function quit() {
    UI.show('menu');
    UI.updateMenu(SaveManager.get());
    AudioManager.startMusic();
  }

  function submitHighScore() {
    AudioManager.sfx.tap();
    const highScore = SaveManager.get().stats.bestScore;
    if (!highScore || highScore <= 0) {
      UI.toast('Chưa có kỷ lục để gửi — hãy hoàn thành màn và ghi điểm trước!');
      return;
    }
    if (typeof GV === 'undefined') {
      UI.toast('Hệ thống bảng điểm chưa sẵn sàng');
      return;
    }
    try {
      new GV().saveScore(highScore);
      UI.toast(`Đã gửi kỷ lục ${highScore} điểm lên Arcade!`);
    } catch (e) {
      console.warn('saveScore:', e);
      UI.toast('Không gửi được điểm, thử lại sau');
    }
  }

  function bindControls() {
    UI.$('btn-check').addEventListener('click', checkWord);
    UI.$('btn-clear-word').addEventListener('click', clearWordInput);
    UI.$('btn-hint').addEventListener('click', useHint);
    UI.$('btn-quit').addEventListener('click', quit);
    UI.$('btn-retry').addEventListener('click', retry);
    UI.$('btn-go-menu').addEventListener('click', quit);
    UI.$('btn-next').addEventListener('click', nextLevel);
    UI.$('btn-win-menu').addEventListener('click', quit);
    UI.$('btn-submit-score').addEventListener('click', submitHighScore);

    document.addEventListener('keydown', e => {
      if (!UI.$('screen-game').classList.contains('active')) return;
      if (e.key === 'Backspace') { e.preventDefault(); deleteKey(); return; }
      if (e.key === 'Enter') { checkWord(); return; }
      if (e.key.length === 1) {
        const ch = ViInput.stripAccents(e.key).charAt(0) || e.key.toUpperCase();
        if (ViInput.isLetterKey(ch)) {
          e.preventDefault();
          typeKey(ch);
        }
      }
    });
  }

  return { startLevel, retry, nextLevel, quit, bindControls, getLevel: () => level };
})();
