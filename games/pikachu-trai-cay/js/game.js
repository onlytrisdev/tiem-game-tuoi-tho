/**
 * game.js — Điều phối gameplay chính
 */
(function () {
  'use strict';

  // ---- DOM references ----
  const menuScreen = document.getElementById('menu-screen');
  const levelSelectScreen = document.getElementById('level-select-screen');
  const gameScreen = document.getElementById('game-screen');
  const boardEl = document.getElementById('board');
  const svgEl = document.getElementById('connection-layer');
  const wrapperEl = document.getElementById('board-wrapper');
  const scoreDisplay = document.getElementById('score-display');
  const timeDisplay = document.getElementById('time-display');
  const hintDisplay = null;
  const shuffleDisplay = null;
  const levelBadge = document.getElementById('level-badge');
  const pauseOverlay = document.getElementById('pause-overlay');
  const resultOverlay = document.getElementById('result-overlay');
  const resultTitle = document.getElementById('result-title');
  const resultMessageLose = document.getElementById('result-message-lose');
  const resultTimeInfo = document.getElementById('result-time-info');
  const resultTimeValue = document.getElementById('result-time-value');
  const resultScore = document.getElementById('result-score');
  const resultIcon = document.getElementById('result-icon');

  const btnPause = document.getElementById('btn-pause');
  const btnHint = document.getElementById('btn-hint');
  const btnShuffle = document.getElementById('btn-shuffle');
  const btnRestart = document.getElementById('btn-restart');
  const btnResume = document.getElementById('btn-resume');
  const btnMenu = document.getElementById('btn-menu');
  const btnPlayAgain = document.getElementById('btn-play-again');
  const btnNextLevel = document.getElementById('btn-next-level');
  const btnBackMenu = document.getElementById('btn-back-menu');
  const hintAdBadge = null;
  const shuffleAdBadge = null;
  const hintBtnAdBadge = document.getElementById('hint-btn-ad-badge');
  const shuffleBtnAdBadge = document.getElementById('shuffle-btn-ad-badge');
  const hintBtnCount = document.getElementById('hint-btn-count');
  const shuffleBtnCount = document.getElementById('shuffle-btn-count');
  const autoShuffleToast = document.getElementById('auto-shuffle-toast');

  // ---- Game state ----
  let boardState = null;
  let score = 0;
  let elapsedSeconds = 0;
  let backgroundFile = null;
  let hintsLeft = 0;
  let shufflesLeft = 0;
  let selectedCell = null;
  let timerId = null;
  let isPaused = false;
  let isGameOver = false;
  let isResolving = false;
  let hintTimeoutId = null;
  /** Gợi ý đang hiển thị — dùng gia hạn highlight */
  let activeHint = null;
  /** Cặp gợi ý để tính điểm — không xóa khi player bấm ô */
  let scoringHintPair = null;
  let resizeTimerId = null;
  let autoShuffleToastId = null;
  let deadlockResolving = false;
  /** Mỗi màn: 3 free + xem QC 1 lần (+3) = tối đa 6 */
  const FREE_HINTS = 3;
  const FREE_SHUFFLES = 3;
  const AD_BONUS_HINTS = 3;
  const AD_BONUS_SHUFFLES = 3;
  const MAX_HINTS_PER_LEVEL = 6;
  const MAX_SHUFFLES_PER_LEVEL = 6;
  let hintAdWatchedThisLevel = false;
  let shuffleAdWatchedThisLevel = false;
  let hintsUsedThisLevel = 0;
  let shufflesUsedThisLevel = 0;
  let matchPointsTotal = 0;
  let adFreezeActive = false;
  let snapshotBeforeAd = null;

  const loadStatus = document.getElementById('load-status');
  const progressPanel = document.getElementById('progress-panel');
  const totalScoreEl = document.getElementById('total-score');
  const resultTotalValue = document.getElementById('result-total-value');
  const btnStart = document.getElementById('btn-start');
  const btnOpenLevels = document.getElementById('btn-open-levels');
  const btnLevelBack = document.getElementById('btn-level-back');
  const levelGrid = document.getElementById('level-grid');

  // ---- Khởi tạo ----
  function init() {
    Renderer.init(boardEl, svgEl, wrapperEl);
    GameAudio.init();
    bindEvents();
    window.addEventListener('resize', onResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', onResize);
    }
    const gameMainEl = document.querySelector('#game-screen .game-main');
    if (gameMainEl && typeof ResizeObserver !== 'undefined') {
      const mainResizeObserver = new ResizeObserver(onResize);
      mainResizeObserver.observe(gameMainEl);
    }
    preloadSprites();
    hideAllAdBadges();
  }

  function hideAllAdBadges() {
    [hintBtnAdBadge, shuffleBtnAdBadge].forEach((el) => {
      setAdBadge(el, false);
    });
    if (hintBtnCount) {
      hintBtnCount.hidden = false;
      hintBtnCount.textContent = '0';
    }
    if (shuffleBtnCount) {
      shuffleBtnCount.hidden = false;
      shuffleBtnCount.textContent = '0';
    }
    btnHint.classList.remove('btn--needs-ad');
    btnShuffle.classList.remove('btn--needs-ad');
    btnHint.classList.remove('btn--exhausted');
    btnShuffle.classList.remove('btn--exhausted');
  }

  /** Tải fruit-01.png … fruit-26.png */
  function preloadSprites() {
    if (loadStatus) {
      loadStatus.textContent = `Đang tải ${FruitAssets.TOTAL} hình trái cây...`;
    }

    FruitAssets.load()
      .then(() => syncAccountProgressOnLoad())
      .then(() => {
        if (loadStatus) {
          loadStatus.hidden = true;
        }
        if (btnStart) btnStart.disabled = false;
        if (btnOpenLevels) btnOpenLevels.disabled = false;
        updateProgressUI();
      })
      .catch(() => {
        if (loadStatus) {
          loadStatus.textContent = 'Lỗi tải hình. Kiểm tra images/fruit-01.png … fruit-26.png';
          loadStatus.classList.add('load-status--error');
        }
      });
  }

  function bindEvents() {
    if (btnStart) {
      btnStart.addEventListener('click', function () { startGame(1); });
    }
    if (btnOpenLevels) {
      btnOpenLevels.addEventListener('click', openLevelSelect);
    }
    if (btnLevelBack) {
      btnLevelBack.addEventListener('click', function () { showScreen(menuScreen); });
    }

    boardEl.addEventListener('click', onTileClick);

    btnPause.addEventListener('click', togglePause);
    btnHint.addEventListener('click', useHint);
    btnShuffle.addEventListener('click', useShuffle);
    btnRestart.addEventListener('click', restartCurrentLevel);
    btnResume.addEventListener('click', resumeGame);
    btnMenu.addEventListener('click', goToMenu);
    btnPlayAgain.addEventListener('click', restartCurrentLevel);
    if (btnNextLevel) {
      btnNextLevel.addEventListener('click', startNextLevel);
    }
    btnBackMenu.addEventListener('click', goToMenu);
  }

  function onResize() {
    if (!boardState || !gameScreen.classList.contains('screen--active')) return;

    if (resizeTimerId) clearTimeout(resizeTimerId);
    resizeTimerId = setTimeout(function () {
      resizeTimerId = null;
      scheduleBoardResize(boardState.playableRows, boardState.playableCols);
    }, 100);
  }

  // ---- Màn hình ----
  function showScreen(screen) {
    [menuScreen, levelSelectScreen, gameScreen].forEach(function (el) {
      if (el) el.classList.remove('screen--active');
    });
    screen.classList.add('screen--active');
  }

  function openLevelSelect() {
    updateProgressUI();
    showScreen(levelSelectScreen);
  }

  function goToMenu() {
    stopTimer();
    hideOverlays();
    dismissHintDisplay();
    GameAudio.stopBgm();
    BackgroundAssets.clearGameScreenBackground();
    adFreezeActive = false;
    snapshotBeforeAd = null;
    isGameOver = false;
    isPaused = false;
    selectedCell = null;
    showScreen(menuScreen);
    updateProgressUI();
  }

  // ---- Bắt đầu game ----
  function startGame(levelId, options) {
    if (!FruitAssets.isReady()) return;

    options = options || {};
    const id = parseInt(levelId, 10) || 1;

    if (!PlayerProgress.isLevelUnlocked(id)) {
      alert('Hoàn thành cấp trước để mở khóa level này!');
      return;
    }

    stopTimer();
    hideOverlays();
    dismissHintDisplay();
    if (autoShuffleToast) autoShuffleToast.hidden = true;
    if (autoShuffleToastId) clearTimeout(autoShuffleToastId);

    const stored = GameSession.getStoredSession();
    let restored = null;

    if (options.forceNew) {
      GameSession.clearLocal();
    } else if (GameSession.canResume(stored, id)) {
      restored = GameSession.restore(stored);
    }

    if (restored) {
      boardState = restored.boardState;
      score = restored.score;
      elapsedSeconds = restored.elapsedSeconds || 0;
      backgroundFile = restored.backgroundFile || null;
      if (backgroundFile && BackgroundAssets.FILES.indexOf(backgroundFile) === -1) {
        backgroundFile = null;
      }
      hintsLeft = restored.hintsLeft;
      shufflesLeft = restored.shufflesLeft;
      hintAdWatchedThisLevel = restored.hintAdWatchedThisLevel;
      shuffleAdWatchedThisLevel = restored.shuffleAdWatchedThisLevel;
      hintsUsedThisLevel = restored.hintsUsedThisLevel || 0;
      shufflesUsedThisLevel = restored.shufflesUsedThisLevel || 0;
      matchPointsTotal = restored.matchPointsTotal;
      if (matchPointsTotal == null) {
        matchPointsTotal = Math.max(0, score
          + hintsUsedThisLevel * Board.SCORE_PENALTY_HINT_USE
          + shufflesUsedThisLevel * Board.SCORE_PENALTY_SHUFFLE_USE);
      }
    } else {
      boardState = Board.create(id);
      score = 0;
      elapsedSeconds = 0;
      backgroundFile = null;
      hintsLeft = FREE_HINTS;
      shufflesLeft = FREE_SHUFFLES;
      hintAdWatchedThisLevel = false;
      shuffleAdWatchedThisLevel = false;
      hintsUsedThisLevel = 0;
      shufflesUsedThisLevel = 0;
      matchPointsTotal = 0;
    }

    applyLevelBackground(id, !restored && options.forceNew);

    selectedCell = null;
    isPaused = false;
    isGameOver = false;
    isResolving = false;

    updateUI();
    updateLevelBadge(boardState);
    showScreen(gameScreen);
    Renderer.buildBoard(boardState);
    scheduleBoardResize(boardState.playableRows, boardState.playableCols);
    GameAudio.startBgm();
    startTimer();
  }

  function scheduleBoardResize(rows, cols) {
    const run = function () {
      Renderer.resizeBoard(rows, cols);
    };
    requestAnimationFrame(function () {
      run();
      requestAnimationFrame(run);
      setTimeout(run, 120);
    });
  }

  function applyLevelBackground(levelId, resetRunIfNeeded) {
    if (resetRunIfNeeded) {
      BackgroundAssets.maybeStartNewRun(levelId, true);
    }
    if (backgroundFile && BackgroundAssets.FILES.indexOf(backgroundFile) === -1) {
      backgroundFile = null;
    }
    if (!backgroundFile) {
      backgroundFile = BackgroundAssets.assignForLevel(levelId);
    }
    const screen = document.getElementById('game-screen');
    if (screen && backgroundFile) {
      screen.style.backgroundImage = 'url("' + BackgroundAssets.getUrl(backgroundFile) + '")';
    }
  }

  function restartCurrentLevel() {
    if (!boardState) return;
    startGame(boardState.levelId, { forceNew: true });
  }

  function updateLevelBadge(bs) {
    if (!levelBadge || !bs) return;
    levelBadge.textContent = String(bs.levelId);
  }

  function startNextLevel() {
    if (!boardState) return;
    const nextId = boardState.levelId + 1;
    if (nextId > Board.LEVEL_COUNT) return;
    startGame(nextId, { forceNew: true });
  }

  function updateResultActions(isVictory) {
    if (!btnPlayAgain || !btnNextLevel || !btnBackMenu) return;

    const hasNext = isVictory && boardState && boardState.levelId < Board.LEVEL_COUNT;

    btnBackMenu.className = 'btn btn--result';
    btnPlayAgain.className = 'btn btn--result';
    btnNextLevel.className = 'btn btn--result';

    if (hasNext) {
      btnNextLevel.hidden = false;
      btnNextLevel.textContent = 'Level tiếp';
    } else {
      btnNextLevel.hidden = true;
    }
  }

  // ---- Đồng hồ đếm thời gian (càng lâu càng trừ điểm khi thắng) ----
  function startTimer() {
    stopTimer();
    timerId = setInterval(() => {
      if (isPaused || isGameOver) return;
      elapsedSeconds++;
      updateTimeDisplay();
    }, 1000);
  }

  function stopTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function formatTimeShort(seconds) {
    const sec = Math.max(0, parseInt(seconds, 10) || 0);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    if (m > 0) return m + 'p' + s + 's';
    return s + 's';
  }

  function updateTimeDisplay() {
    timeDisplay.textContent = formatTime(elapsedSeconds);
    timeDisplay.classList.remove('stat__value--warning');
  }

  function canWatchAd() {
    return typeof GVAdBreak === 'function';
  }

  function canOfferHintAd() {
    return hintsLeft <= 0 && canWatchAd() && !hintAdWatchedThisLevel;
  }

  function canOfferShuffleAd() {
    return shufflesLeft <= 0 && canWatchAd() && !shuffleAdWatchedThisLevel;
  }

  function setAdBadge(el, show) {
    if (!el) return;
    el.hidden = !show;
    if (show) {
      el.removeAttribute('aria-hidden');
    } else {
      el.setAttribute('aria-hidden', 'true');
    }
  }

  function setBtnCount(el, count, showAdMode) {
    if (!el) return;
    if (showAdMode) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.textContent = count;
  }

  /**
   * Icon QC: chỉ khi hết lượt hiện tại VÀ chưa xem QC trong màn này
   */
  function updateItemAdUI(usesLeft, adWatched, maxPerLevel, statBadge, btnBadge, btnCount, btn, label) {
    const showAdMode = usesLeft <= 0 && canWatchAd() && !adWatched;
    const fullyExhausted = usesLeft <= 0 && !showAdMode;

    setAdBadge(statBadge, showAdMode);
    setAdBadge(btnBadge, showAdMode);
    setBtnCount(btnCount, usesLeft, showAdMode);

    if (btn) {
      btn.classList.toggle('btn--needs-ad', showAdMode);
      btn.classList.toggle('btn--exhausted', fullyExhausted);
      btn.disabled = fullyExhausted;

      if (showAdMode) {
        btn.title = `${label} — xem quảng cáo 1 lần để nhận thêm 3 lượt (tối đa ${maxPerLevel}/màn)`;
      } else if (usesLeft > 0) {
        btn.title = `${label} — còn ${usesLeft} lượt (tối đa ${maxPerLevel}/màn)`;
      } else if (adWatched) {
        btn.title = `${label} — đã dùng hết ${maxPerLevel} lượt trong màn này`;
      } else {
        btn.title = label;
      }
    }
  }

  // ---- UI cập nhật ----
  function updateUI() {
    scoreDisplay.textContent = score;
    updateTimeDisplay();

    updateItemAdUI(
      hintsLeft, hintAdWatchedThisLevel, MAX_HINTS_PER_LEVEL,
      null, hintBtnAdBadge, hintBtnCount, btnHint, 'Gợi ý'
    );
    updateItemAdUI(
      shufflesLeft, shuffleAdWatchedThisLevel, MAX_SHUFFLES_PER_LEVEL,
      null, shuffleBtnAdBadge, shuffleBtnCount, btnShuffle, 'Xáo trộn'
    );
  }

  // ---- Click ô ----
  function onTileClick(e) {
    if (isPaused || isGameOver || isResolving || adFreezeActive) return;

    const tile = e.target.closest('.tile');
    if (!tile || tile.classList.contains('tile--empty')) return;

    const row = parseInt(tile.dataset.row, 10);
    const col = parseInt(tile.dataset.col, 10);

    if (boardState.grid[row][col] === 0) return;

    if (activeHint) {
      Renderer.clearHintHighlight();
    }

    if (!selectedCell) {
      selectedCell = { row, col };
      Renderer.setSelected(row, col, true);
      GameAudio.play('click');
      return;
    }

    if (selectedCell.row === row && selectedCell.col === col) {
      Renderer.setSelected(row, col, false);
      selectedCell = null;
      GameAudio.play('click');
      return;
    }

    const r1 = selectedCell.row;
    const c1 = selectedCell.col;
    const r2 = row;
    const c2 = col;

    attemptMatch(r1, c1, r2, c2);
  }

  // ---- Ghép cặp ----
  function attemptMatch(r1, c1, r2, c2) {
    const icon1 = boardState.grid[r1][c1];
    const icon2 = boardState.grid[r2][c2];

    if (icon1 !== icon2) {
      failMatch(r1, c1, r2, c2);
      return;
    }

    Renderer.syncFromGrid(boardState.grid, boardState.bounds);

    const start = { row: r1, col: c1 };
    const end = { row: r2, col: c2 };
    const path = Pathfinder.findPath(boardState.grid, r1, c1, r2, c2, boardState.bounds);

    if (!path
      || !Pathfinder._validatePath(boardState.grid, path, start, end)
      || Pathfinder._pathCrossesOccupied(boardState.grid, path)) {
      failMatch(r1, c1, r2, c2);
      return;
    }

    selectedCell = null;
    isResolving = true;
    Renderer.clearSelection();
    Renderer.drawConnection(path, boardState.grid, r1, c1, r2, c2);
    GameAudio.play('match');

    const hintAssisted = Board.isSameTilePair(r1, c1, r2, c2, scoringHintPair);
    const matchDelay = 400;
    setTimeout(() => {
      Board.removeTiles(boardState.grid, r1, c1, r2, c2);
      Renderer.clearTile(r1, c1);
      Renderer.clearTile(r2, c2);
      Renderer.clearConnection();
      Renderer.clearSelection();

      const matchScore = Board.calcMatchScore(hintAssisted);
      matchPointsTotal += matchScore;
      score = Math.max(0, score + matchScore);
      dismissHintDisplay();
      updateUI();

      isResolving = false;

      checkWinCondition();
    }, matchDelay);
  }

  /** Ghép sai — xóa hết chọn, lượt sau bắt đầu lại từ ô mới */
  function failMatch(r1, c1, r2, c2) {
    Renderer.shakeTiles(r1, c1, r2, c2);
    GameAudio.play('wrong');
    Renderer.clearSelection();
    selectedCell = null;
  }

  function checkWinCondition() {
    const remaining = Board.countRemainingTiles(boardState.grid, boardState.bounds);
    if (remaining === 0) {
      endGame(true);
      return;
    }

    if (!Pathfinder.hasValidPair(boardState.grid, boardState.bounds)) {
      setTimeout(resolveDeadlock, 500);
    }
  }

  /** Bàn kẹt — tự xáo trộn 1 lần miễn phí, không trừ lượt player */
  function resolveDeadlock() {
    if (isGameOver || isResolving || deadlockResolving) return;
    if (!boardState) return;
    if (Pathfinder.hasValidPair(boardState.grid, boardState.bounds)) return;

    deadlockResolving = true;
    const ok = performShuffle({ free: true });
    if (ok) showAutoShuffleToast();
    setTimeout(() => { deadlockResolving = false; }, 800);
  }

  function showAutoShuffleToast() {
    if (!autoShuffleToast) return;
    autoShuffleToast.hidden = false;
    if (autoShuffleToastId) clearTimeout(autoShuffleToastId);
    autoShuffleToastId = setTimeout(() => {
      autoShuffleToast.hidden = true;
      autoShuffleToastId = null;
    }, 2600);
  }

  // ---- Gợi ý ----
  function useHint() {
    if (isPaused || isGameOver || isResolving || adFreezeActive) return;

    // Hết lượt miễn phí → bắt buộc xem QC mới dùng tiếp
    if (hintsLeft <= 0) {
      if (!canOfferHintAd()) {
        alert(hintAdWatchedThisLevel
          ? `Đã dùng hết ${MAX_HINTS_PER_LEVEL} lượt gợi ý trong màn này!`
          : 'Đã hết lượt gợi ý!');
        return;
      }
      requestAdReward('hint');
      return;
    }

    // Đã hiện gợi ý, player chưa chọn 2 ô → chỉ gia hạn hiển thị, không trừ lượt
    if (activeHint) {
      showHint({ refresh: true });
      return;
    }

    if (!showHint({ refresh: false })) return;

    hintsLeft--;
    hintsUsedThisLevel++;
    score = Math.max(0, score - Board.SCORE_PENALTY_HINT_USE);
    updateUI();
  }

  function showHint(options) {
    const refresh = options && options.refresh === true;
    clearHintTimeout();

    if (!refresh) {
      if (!Pathfinder.hasValidPair(boardState.grid, boardState.bounds)) {
        Board.ensureValidPair(boardState.grid, boardState.bounds);
        Renderer.syncFromGrid(boardState.grid, boardState.bounds);
      }
    }

    let hint;
    if (refresh && activeHint) {
      const { r1, c1, r2, c2 } = activeHint;
      const icon1 = boardState.grid[r1][c1];
      const icon2 = boardState.grid[r2][c2];
      if (!icon1 || !icon2 || icon1 !== icon2) {
        activeHint = null;
        scoringHintPair = null;
        return false;
      }
      hint = { r1, c1, r2, c2 };
    } else {
      hint = Pathfinder.findHint(boardState.grid, boardState.bounds);
      if (!hint) return false;
      activeHint = { r1: hint.r1, c1: hint.c1, r2: hint.r2, c2: hint.c2 };
      scoringHintPair = {
        r1: activeHint.r1,
        c1: activeHint.c1,
        r2: activeHint.r2,
        c2: activeHint.c2
      };
    }

    Renderer.highlightHint(hint.r1, hint.c1, hint.r2, hint.c2);

    hintTimeoutId = setTimeout(dismissHintDisplay, 3200);
    return true;
  }

  function dismissHintDisplay() {
    clearHintTimeout();
    activeHint = null;
    scoringHintPair = null;
    Renderer.clearHintHighlight();
  }

  function clearHintTimeout() {
    if (hintTimeoutId) {
      clearTimeout(hintTimeoutId);
      hintTimeoutId = null;
    }
  }

  // ---- Xáo trộn (thủ công — trừ lượt miễn phí) ----
  function useShuffle() {
    if (isPaused || isGameOver || isResolving || adFreezeActive) return;

    if (shufflesLeft <= 0) {
      if (!canOfferShuffleAd()) {
        alert(shuffleAdWatchedThisLevel
          ? `Đã dùng hết ${MAX_SHUFFLES_PER_LEVEL} lượt xáo trộn trong màn này!`
          : 'Đã hết lượt xáo trộn!');
        return;
      }
      requestAdReward('shuffle');
      return;
    }

    if (!performShuffle({ free: false })) return;

    shufflesLeft--;
    shufflesUsedThisLevel++;
    score = Math.max(0, score - Board.SCORE_PENALTY_SHUFFLE_USE);
    updateUI();
  }

  /**
   * @param {{ free?: boolean }} options — free: true = tự động khi kẹt, không trừ lượt
   * @returns {boolean}
   */
  function performShuffle(options) {
    if (!boardState) return false;

    Renderer.clearSelection();
    dismissHintDisplay();
    selectedCell = null;

    const ok = Board.shuffleBoard(boardState.grid, boardState.bounds) ||
               Board.ensureValidPair(boardState.grid, boardState.bounds);
    if (ok) {
      Renderer.syncFromGrid(boardState.grid, boardState.bounds);
    }
    return ok;
  }

  /** Tạm dừng toàn bộ game khi QC chạy */
  function pauseGameForAd() {
    if (adFreezeActive) return;

    adFreezeActive = true;
    snapshotBeforeAd = {
      isPaused: isPaused,
      isGameOver: isGameOver,
      isResolving: isResolving,
      timerWasRunning: timerId !== null
    };

    dismissHintDisplay();
    clearHintTimeout();
    Renderer.clearSelection();
    selectedCell = null;
    isPaused = true;
    stopTimer();
    GameAudio.pauseBgm();
  }

  /** Tiếp tục game sau khi QC kết thúc */
  function resumeGameAfterAd() {
    if (!adFreezeActive) return;

    const snap = snapshotBeforeAd;
    adFreezeActive = false;
    snapshotBeforeAd = null;

    if (!snap || snap.isGameOver || isGameOver) return;

    isPaused = snap.isPaused;
    isResolving = snap.isResolving;

    if (!isPaused) {
      startTimer();
      GameAudio.resumeBgm();
    }
  }

  // ---- Quảng cáo Arcade ----
  function requestAdReward(type) {
    if (type === 'hint') {
      if (!canOfferHintAd()) return;
    } else if (type === 'shuffle') {
      if (!canOfferShuffleAd()) return;
    } else {
      return;
    }

    if (!canWatchAd()) {
      alert('Đã hết lượt! Vui lòng chơi lại để nhận thêm.');
      return;
    }

    pauseGameForAd();

    try {
      GVAdBreak(function () {
        try {
          if (type === 'hint') {
            hintAdWatchedThisLevel = true;
            hintsLeft = Math.min(hintsLeft + AD_BONUS_HINTS, MAX_HINTS_PER_LEVEL);
          } else if (type === 'shuffle') {
            shuffleAdWatchedThisLevel = true;
            shufflesLeft = Math.min(shufflesLeft + AD_BONUS_SHUFFLES, MAX_SHUFFLES_PER_LEVEL);
          }
        } finally {
          resumeGameAfterAd();
          updateUI();
        }
      });
    } catch (err) {
      console.warn('GVAdBreak lỗi:', err);
      resumeGameAfterAd();
    }
  }

  // ---- Pause ----
  function togglePause() {
    if (isGameOver || adFreezeActive) return;
    isPaused = !isPaused;
    if (isPaused) {
      pauseOverlay.hidden = false;
      btnPause.querySelector('.btn__icon').textContent = '▶';
      btnPause.querySelector('.btn__text').textContent = 'Tiếp tục';
    } else {
      resumeGame();
    }
  }

  function resumeGame() {
    isPaused = false;
    pauseOverlay.hidden = true;
    btnPause.querySelector('.btn__icon').textContent = '⏸';
    btnPause.querySelector('.btn__text').textContent = 'Tạm dừng';
  }

  function hideOverlays() {
    pauseOverlay.hidden = true;
    resultOverlay.hidden = true;
    if (btnNextLevel) btnNextLevel.hidden = true;
    btnPause.querySelector('.btn__icon').textContent = '⏸';
    btnPause.querySelector('.btn__text').textContent = 'Tạm dừng';
  }

  // ---- Kết thúc game ----
  function endGame(isVictory) {
    if (isGameOver) return;
    isGameOver = true;
    stopTimer();
    GameAudio.stopBgm();
    dismissHintDisplay();
    Renderer.clearSelection();

    const modal = resultOverlay.querySelector('.modal--result');
    modal.classList.toggle('modal--win', isVictory);
    modal.classList.toggle('modal--lose', !isVictory);

    let finalScore = score;
    let victorySummary = null;

    if (isVictory) {
      victorySummary = Board.finalizeVictoryScore(
        score,
        elapsedSeconds,
        hintsUsedThisLevel,
        shufflesUsedThisLevel
      );
      victorySummary.matchPoints = matchPointsTotal;
      finalScore = victorySummary.finalScore;
      resultIcon.textContent = '🏆';
      resultTitle.textContent = 'Chiến thắng!';
      if (resultMessageLose) resultMessageLose.hidden = true;
      if (resultTimeInfo) {
        resultTimeInfo.hidden = false;
        if (resultTimeValue) {
          resultTimeValue.textContent = formatTimeShort(elapsedSeconds);
        }
      }
      if (resultScore) {
        resultScore.textContent = String(finalScore);
      }
      GameAudio.play('match');
    } else {
      if (resultMessageLose) {
        resultMessageLose.hidden = false;
        resultMessageLose.textContent = 'Chưa hoàn thành cấp. Hãy thử lại nhé!';
      }
      if (resultTimeInfo) resultTimeInfo.hidden = true;
      resultIcon.textContent = '😔';
      resultTitle.textContent = 'Chưa xong!';
      GameAudio.play('wrong');
    }

    score = finalScore;
    if (!isVictory && resultScore) {
      resultScore.textContent = String(finalScore);
    }
    updateUI();
    onGameOverPersist(isVictory);
    updateResultActions(isVictory);
    resultOverlay.hidden = false;
  }

  // ---- Tiến trình tài khoản & lưu khi game over ----

  function updateResultProgressStats(progress) {
    if (!progress) return;
    if (resultTotalValue) {
      resultTotalValue.textContent = progress.totalScore;
    }
  }

  function updateProgressUI() {
    const progress = PlayerProgress.loadLocal();

    if (totalScoreEl) totalScoreEl.textContent = progress.totalScore;

    buildLevelGrid();
  }

  function buildLevelGrid() {
    if (!levelGrid) return;

    levelGrid.innerHTML = '';
    const progress = PlayerProgress.loadLocal();

    Board.LEVELS.forEach(function (lv) {
      const unlocked = PlayerProgress.isLevelUnlocked(lv.id, progress);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'level-btn' + (unlocked ? '' : ' level-btn--locked');
      btn.dataset.levelId = String(lv.id);
      btn.disabled = !unlocked;
      btn.setAttribute('role', 'listitem');
      const cellCount = lv.rows * lv.cols;

      if (unlocked) {
        const best = progress.bestScores[String(lv.id)] || 0;
        btn.innerHTML =
          '<span class="level-btn__title">Level ' + lv.id + '</span>' +
          '<span class="level-btn__line">' + cellCount + ' ô</span>' +
          '<span class="level-btn__line">' + Board.TIER_LABELS[lv.tier] + '</span>' +
          '<span class="level-btn__score">' + best + ' điểm</span>';
        btn.addEventListener('click', function () { startGame(lv.id); });
      } else {
        btn.innerHTML =
          '<span class="level-btn__lock" aria-hidden="true">🔒</span>' +
          '<span class="level-btn__title">Level ' + lv.id + '</span>';
      }

      levelGrid.appendChild(btn);
    });
  }

  function showResumeHintIfAny() {
    if (!loadStatus || loadStatus.classList.contains('load-status--error')) return;

    const levelId = GameSession.getResumeLevelId(GameSession.getStoredSession());
    if (!levelId) return;

    const lv = Board.getLevel(levelId);
    loadStatus.hidden = false;
    loadStatus.textContent = 'Có ván dở (' + (lv ? lv.label : ('Cấp ' + levelId)) + ') — chọn cấp đó để tiếp tục';
    loadStatus.classList.remove('load-status--error');
  }

  /**
   * Load game: GetHistoryGame → gộp điểm + ván dở → localStorage
   */
  function syncAccountProgressOnLoad() {
    updateProgressUI();

    if (!CloudSave.canSync()) {
      showResumeHintIfAny();
      return Promise.resolve();
    }

    if (loadStatus) {
      loadStatus.hidden = false;
      loadStatus.textContent = 'Đang tải tiến độ tài khoản...';
    }

    return CloudSave.loadOnStartup().then(function () {
      updateProgressUI();
      showResumeHintIfAny();
      if (loadStatus && !loadStatus.classList.contains('load-status--error') && !GameSession.getStoredSession()) {
        loadStatus.hidden = true;
      }
    });
  }

  /**
   * Game over: kỷ lục + lưu ván dở (SaveHistoryGame khi có gid/token)
   */
  function onGameOverPersist(isVictory) {
    if (!boardState) return;

    const progress = PlayerProgress.recordRound(boardState.levelId, score, isVictory);
    updateProgressUI();
    updateResultProgressStats(progress);

    const session = GameSession.createSnapshot(boardState, {
      score: score,
      elapsedSeconds: elapsedSeconds,
      backgroundFile: backgroundFile,
      hintsLeft: hintsLeft,
      shufflesLeft: shufflesLeft,
      hintAdWatchedThisLevel: hintAdWatchedThisLevel,
      shuffleAdWatchedThisLevel: shuffleAdWatchedThisLevel,
      hintsUsedThisLevel: hintsUsedThisLevel,
      shufflesUsedThisLevel: shufflesUsedThisLevel,
      matchPointsTotal: matchPointsTotal
    }, isVictory);

    GameSession.saveLocal(session);

    try {
      if (typeof GV !== 'undefined') {
        new GV().saveScore(progress.totalScore);
      }
    } catch (err) {
      console.warn('Không thể gửi điểm Arcade:', err);
    }

    CloudSave.saveOnGameOver(progress, session);
  }

  // ---- Chạy ----
  document.addEventListener('DOMContentLoaded', init);
})();
