/**
 * main.js
 * - App wiring: screens, input, audio, game loop
 */

import { fetchQuestions } from "./data.js";
import {
  PRIZE_LADDER,
  buildRunQuestions,
  clearSave,
  createNewGameState,
  canStopAtCurrentQuestion,
  formatMoneyVND,
  getCurrentQuestion,
  loadSavedGame,
  nextQuestion,
  payoutOnFailure,
  quitGame,
  resolveAnswer,
  resolveTimeout,
  resetTimerForQuestion,
  saveGame,
  startTimer,
  stopTimer,
  tickTimer,
  useAudience,
  useFiftyFifty,
  usePhone,
} from "./game.js";

import {
  buildAudienceOverlay,
  flashButton,
  hideOverlay,
  lockAnswerButtons,
  markCorrect,
  markSelected,
  markWrong,
  qs,
  renderAnswers,
  renderQuestion,
  renderResult,
  renderTimer,
  setContinueVisible,
  setLifelinesUI,
  setScreen,
  setStopVisible,
  showOverlay,
} from "./ui.js";

// -------------------------
// Audio (optional assets)
// -------------------------
const AudioKeys = {
  start: "bat-dau",
  bgm: "nhac-nen",
  correct: "tra-loi-dung",
  wrong: "tra-loi-sai",
};

function makeAudio(src, { loop = false, volume = 0.7 } = {}) {
  const a = new Audio(src);
  a.preload = "auto";
  a.loop = loop;
  a.volume = volume;
  return a;
}

const audio = {
  enabled: true,
  map: new Map(),
  init() {
    // If files missing, play() will reject; we just ignore.
    this.map.set(AudioKeys.start, makeAudio("./sounds/bat-dau.mp3", { volume: 0.8 }));
    this.map.set(AudioKeys.bgm, makeAudio("./sounds/nhac-nen.mp3", { loop: true, volume: 0.35 }));
    this.map.set(AudioKeys.correct, makeAudio("./sounds/tra-loi-dung.mp3", { volume: 0.85 }));
    this.map.set(AudioKeys.wrong, makeAudio("./sounds/tra-loi-sai.mp3", { volume: 0.85 }));
  },
  setEnabled(v) {
    this.enabled = Boolean(v);
    if (!this.enabled) this.stop(AudioKeys.bgm);
  },
  async unlock() {
    // Mobile browsers require user gesture; call on first click.
    if (!this.enabled) return;
    const bgm = this.map.get(AudioKeys.bgm);
    if (!bgm) return;
    try {
      bgm.muted = true;
      await bgm.play();
      bgm.pause();
      bgm.currentTime = 0;
      bgm.muted = false;
    } catch {
      // ignore
    }
  },
  async play(key) {
    if (!this.enabled) return;
    const a = this.map.get(key);
    if (!a) return;
    try {
      a.currentTime = 0;
      await a.play();
    } catch {
      // ignore autoplay/missing file errors
    }
  },
  async playBgm() {
    if (!this.enabled) return;
    const a = this.map.get(AudioKeys.bgm);
    if (!a) return;
    try {
      await a.play();
    } catch {
      // ignore
    }
  },
  stop(key) {
    const a = this.map.get(key);
    if (!a) return;
    try {
      a.pause();
      a.currentTime = 0;
    } catch {
      // ignore
    }
  },
};

// -------------------------
// App state
// -------------------------
let allQuestions = [];
let netMeta = { source: "fallback", error: null };
let state = null; // game state
let raf = 0;

// Question flow: 30s main timer -> optional 3s overtime -> MC confirm (auto yes after 3s) -> resolve
let flow = {
  phase: "idle", // idle | question | overtime | confirm
  pendingIdx: null,
  overtimeTimerId: 0,
  autoConfirmTimerId: 0, // Timer for auto-confirm after 3s
};

function setSoundButton() {
  const btn = qs("#btnToggleSound");
  btn.textContent = audio.enabled ? "Âm thanh: Bật" : "Âm thanh: Tắt";
  btn.setAttribute("aria-pressed", audio.enabled ? "true" : "false");
}

function stopLoop() {
  if (raf) cancelAnimationFrame(raf);
  raf = 0;
}

function clearOvertime() {
  if (flow.overtimeTimerId) clearTimeout(flow.overtimeTimerId);
  flow.overtimeTimerId = 0;
}

function clearAutoConfirm() {
  if (flow.autoConfirmTimerId) clearTimeout(flow.autoConfirmTimerId);
  flow.autoConfirmTimerId = 0;
}

function resetFlow() {
  clearOvertime();
  clearAutoConfirm();
  flow.phase = "idle";
  flow.pendingIdx = null;
  flow.overtimeEndsAt = 0;
  flow.savedMainRemainingMs = 0;
  flow.savedOvertimeRemainingMs = 0;
  flow.phaseWasOvertime = false;
}

function loop(now) {
  if (!state || state.status !== "playing") return;
  if (flow.phase === "question") {
    const remaining = tickTimer(state, now);
    renderTimer(remaining);
    if (remaining <= 0) {
      enterOvertime();
      return;
    }
  } else if (flow.phase === "overtime") {
    const left = Math.max(0, flow.overtimeEndsAt - Date.now());
    renderTimer(left);
    if (left <= 0) {
      failGame({ reason: "timeout_no_pick" });
      return;
    }
  } else {
    return;
  }
  // save periodically to allow resume even after refresh
  if (Math.random() < 0.02) saveGame(state);
  raf = requestAnimationFrame(loop);
}

function startLoop() {
  stopLoop();
  raf = requestAnimationFrame(loop);
}

function startQuestion() {
  if (!state) return;
  hideOverlay();
  resetFlow();
  state.lock.answering = false;
  renderQuestion(state);
  renderAnswers(state);
  setLifelinesUI(state);
  setStopVisible(canStopAtCurrentQuestion(state));
  resetTimerForQuestion(state);
  renderTimer(state.timer.remainingMs);
  flow.phase = "question";
  startTimer(state);
  startLoop();
  saveGame(state);
}

function finishToResult({ title, desc, money }) {
  stopLoop();
  clearOvertime();
  clearAutoConfirm();
  const moneyText = formatMoneyVND(money);
  renderResult({ title, moneyText, desc });
  clearSave();
  setContinueVisible(false);
  setScreen("result");
  
  // Send score to Arcade
  sendScoreToArcade(money);
}

function enterOvertime() {
  if (!state || state.status !== "playing") return;
  if (flow.phase !== "question") return;

  stopLoop();
  stopTimer(state);
  flow.phase = "overtime";
  flow.overtimeEndsAt = Date.now() + 3000;
  renderTimer(3000);

  showOverlay({
    title: "Hết thời gian",
    mode: "close",
    bodyHtml:
      "<div>Đã hết thời gian suy nghĩ, bạn có thêm <b>3 giây</b> để chọn đáp án!</div>",
  });

  startLoop();
}

function openMcConfirm(idx) {
  if (!state || state.status !== "playing") return;
  const q = getCurrentQuestion(state);
  if (!q) return;

  stopLoop();
  stopTimer(state);

  if (flow.phase === "question") {
    flow.savedMainRemainingMs = tickTimer(state, performance.now());
  } else if (flow.phase === "overtime") {
    flow.savedOvertimeRemainingMs = Math.max(0, flow.overtimeEndsAt - Date.now());
  }

  flow.phase = "confirm";
  flow.pendingIdx = idx;

  const letter = ["A", "B", "C", "D"][idx];
  const text = q.answers?.[idx] ?? "";

  showOverlay({
    title: "Xác nhận",
    mode: "yesno",
    bodyHtml: `<div>MC: Bạn chắc chắn câu trả lời của bạn là <b>${letter}. ${escapeHtml(text)}</b>?</div><div style="margin-top:10px;color:var(--muted);font-size:13px;">Tự động xác nhận sau 3 giây...</div>`,
  });

  // Auto-confirm YES after 3 seconds
  flow.autoConfirmTimerId = setTimeout(() => {
    if (flow.phase === "confirm" && flow.pendingIdx === idx) {
      onConfirmYes();
    }
  }, 3000);
}

async function onConfirmYes() {
  if (!state || state.status !== "playing") return;
  if (flow.phase !== "confirm") return;
  const idx = flow.pendingIdx;
  if (![0, 1, 2, 3].includes(idx)) return;

  clearAutoConfirm(); // Clear auto-confirm timer
  hideOverlay();
  await resolveConfirmedAnswer(idx);
}

function onConfirmNo() {
  if (!state || state.status !== "playing") return;
  if (flow.phase !== "confirm") return;

  clearAutoConfirm(); // Clear auto-confirm timer
  hideOverlay();
  const wasOvertime = Boolean(flow.phaseWasOvertime);
  flow.phaseWasOvertime = false;
  flow.pendingIdx = null;

  if (wasOvertime) {
    flow.phase = "overtime";
    const left = flow.savedOvertimeRemainingMs || 0;
    if (left <= 0) {
      failGame({ reason: "timeout_no_pick" });
      return;
    }
    flow.overtimeEndsAt = Date.now() + left;
    renderTimer(left);
    startLoop();
    return;
  }

  flow.phase = "question";
  state.timer.remainingMs = flow.savedMainRemainingMs || 0;
  renderTimer(state.timer.remainingMs);
  startTimer(state);
  startLoop();
}

async function resolveConfirmedAnswer(idx) {
  const q = getCurrentQuestion(state);
  if (!q) return;

  state.lock.answering = true;
  lockAnswerButtons();
  markSelected(idx);

  const res = resolveAnswer(state, idx);
  const correct = q.correct;

  if (res.outcome === "correct") {
    markCorrect(correct);
    audio.play(AudioKeys.correct);
    await wait(900);

    const qNum = state.index + 1;
    const milestoneLine =
      qNum === 5 || qNum === 10 || qNum === 15
        ? `<div style="margin-top:12px">Bạn đã vượt <b>mốc an toàn</b>: nếu sau này sai hoặc hết giờ, bạn vẫn được tối thiểu <b>${formatMoneyVND(state.safe)}</b>.</div>`
        : "";

    showOverlay({
      title: "Chính xác!",
      mode: "close",
      bodyHtml: `<div>Chúc mừng bạn đã trả lời chính xác! Mức thưởng hiện tại của bạn là <b>${formatMoneyVND(state.earned)}</b>.</div>${milestoneLine}`,
    });
    await wait(1600);
    hideOverlay();

    const step = nextQuestion(state);
    if (step.done && state.status === "won") {
      finishToResult({
        title: "Chiến thắng!",
        desc: "Bạn đã hoàn thành 15 câu và trở thành TRIỆU PHÚ!",
        money: PRIZE_LADDER[14],
      });
      return;
    }
    startQuestion();
    return;
  }

  markWrong(idx);
  markCorrect(correct);
  audio.play(AudioKeys.wrong);

  const correctLetter = ["A", "B", "C", "D"][correct];
  const correctText = q.answers?.[correct] ?? "";

  const payout = payoutOnFailure(state);
  const qNum = state.index + 1;
  const payoutLine =
    qNum <= 5
      ? "Bạn sẽ ra về mà không nhận được phần thưởng nào! Rất cảm ơn bạn đã tham gia thử thách cùng Arcade!"
      : `Bạn sẽ ra về với mức thưởng là <b>${formatMoneyVND(payout)}</b>.`;

  await wait(900);
  showOverlay({
    title: "Rất tiếc!",
    mode: "close",
    bodyHtml: `
      <div>Rất tiếc, đáp án của bạn chưa chính xác. Câu trả lời đúng là <b>${correctLetter}. ${escapeHtml(correctText)}</b>!</div>
      <div style="margin-top:12px">${payoutLine}</div>
    `,
  });
  await wait(2200);
  hideOverlay();

  finishToResult({
    title: "Kết thúc",
    desc:
      qNum <= 5
        ? "Bạn không nhận được phần thưởng ở giai đoạn câu 1–5."
        : "Bạn nhận mức thưởng theo mốc an toàn tương ứng.",
    money: payout,
  });
}

function failGame({ reason }) {
  if (!state || state.status !== "playing") return;
  stopLoop();
  stopTimer(state);
  clearOvertime();

  const payout = payoutOnFailure(state);
  const qNum = state.index + 1;

  const msg =
    qNum <= 5
      ? "Bạn sẽ ra về mà không nhận được phần thưởng nào! Rất cảm ơn bạn đã tham gia thử thách cùng Arcade!"
      : `Bạn sẽ ra về với mức thưởng là <b>${formatMoneyVND(payout)}</b>.`;

  showOverlay({
    title: "Hết thời gian",
    mode: "close",
    bodyHtml: `<div>${msg}</div>`,
  });

  window.setTimeout(() => {
    hideOverlay();
    resolveTimeout(state);
    audio.play(AudioKeys.wrong);
    finishToResult({
      title: "Kết thúc",
      desc:
        reason === "timeout_no_pick"
          ? "Bạn không chọn đáp án trong thời gian cho phép."
          : "Bạn không hoàn thành câu hỏi.",
      money: payout,
    });
  }, 1600);
}

function wireAnswerClicks() {
  const host = qs("#quizBoard");
  host.addEventListener("click", (e) => {
    const btn = e.target?.closest?.(".quiz-answer");
    if (!btn || btn.disabled) return;
    const idx = Number(btn.dataset.idx);
    if (![0, 1, 2, 3].includes(idx)) return;
    if (!state || state.status !== "playing") return;
    if (flow.phase !== "question" && flow.phase !== "overtime") return;
    if (state.lock.answering) return;

    flow.phaseWasOvertime = flow.phase === "overtime";
    openMcConfirm(idx);
  });
}

function wireLifelines() {
  qs("#life5050").addEventListener("click", () => {
    if (!state) return;
    const removed = useFiftyFifty(state);
    if (!removed) return;
    renderAnswers(state);
    setLifelinesUI(state);
    flashButton(qs("#life5050"));
    saveGame(state);
  });

  qs("#lifeAudience").addEventListener("click", () => {
    if (!state) return;
    const votes = useAudience(state);
    if (!votes) return;
    setLifelinesUI(state);
    showOverlay({
      title: "Hỏi ý kiến khán giả",
      mode: "close",
      bodyHtml: buildAudienceOverlay(votes),
    });
    flashButton(qs("#lifeAudience"));
    saveGame(state);
  });

  qs("#lifePhone").addEventListener("click", () => {
    if (!state) return;
    const hint = usePhone(state);
    if (!hint) return;
    setLifelinesUI(state);
    showOverlay({ title: "Gọi điện thoại", mode: "close", bodyHtml: `<div>${escapeHtml(hint)}</div>` });
    flashButton(qs("#lifePhone"));
    saveGame(state);
  });

  qs("#btnOverlayClose").addEventListener("click", () => hideOverlay());
  qs("#btnOverlayYes").addEventListener("click", () => onConfirmYes());
  qs("#btnOverlayNo").addEventListener("click", () => onConfirmNo());
  qs("#overlayPanel").addEventListener("click", (e) => {
    const panel = qs("#overlayPanel");
    if (e.target?.id !== "overlayPanel") return;
    if (panel.dataset.mode === "yesno") return;
    hideOverlay();
  });
}

function wireScreens() {
  const btnStartNew = qs("#btnStartNew");
  const btnContinue = qs("#btnContinue");
  const btnIntro = qs("#btnIntro");
  const btnIntroBack = qs("#btnIntroBack");
  const btnIntroStart = qs("#btnIntroStart");
  const btnPlayAgain = qs("#btnPlayAgain");
  const btnBackHome = qs("#btnBackHome");
  const btnQuit = qs("#btnQuit");
  const btnStop = qs("#btnStop");

  btnIntro.addEventListener("click", () => setScreen("intro"));
  btnIntroBack.addEventListener("click", () => setScreen("start"));
  btnIntroStart.addEventListener("click", async () => {
    await audio.unlock();
    audio.playBgm();
    startNewGame();
  });

  btnStartNew.addEventListener("click", async () => {
    await audio.unlock();
    audio.play(AudioKeys.start);
    audio.playBgm();
    startNewGame();
  });

  btnContinue.addEventListener("click", async () => {
    await audio.unlock();
    audio.playBgm();
    const saved = loadSavedGame();
    if (!saved) {
      setContinueVisible(false);
      return;
    }
    state = saved;
    setScreen("game");
    startQuestion();
  });

  btnPlayAgain.addEventListener("click", async () => {
    await audio.unlock();
    audio.play(AudioKeys.start);
    audio.playBgm();
    startNewGame();
  });

  btnBackHome.addEventListener("click", () => {
    stopLoop();
    audio.stop(AudioKeys.bgm);
    setScreen("start");
  });

  btnQuit.addEventListener("click", () => {
    if (!state) {
      setScreen("start");
      return;
    }
    quitGame(state);
    clearSave();
    stopLoop();
    clearOvertime();
    audio.stop(AudioKeys.bgm);
    setScreen("start");
  });

  btnStop.addEventListener("click", () => {
    if (!state || state.status !== "playing") return;
    if (!canStopAtCurrentQuestion(state)) return;
    stopLoop();
    // Người chơi dừng cuộc chơi: nhận phần thưởng hiện tại (state.earned)
    finishToResult({
      title: "Dừng cuộc chơi",
      desc: "Bạn đã chọn dừng cuộc chơi và nhận phần thưởng hiện tại.",
      money: state.earned,
    });
  });
}

function wireSoundToggle() {
  qs("#btnToggleSound").addEventListener("click", () => {
    audio.setEnabled(!audio.enabled);
    setSoundButton();
  });
  setSoundButton();
}

function wireKeyboard() {
  window.addEventListener("keydown", (e) => {
    if (!state || state.status !== "playing") return;
    if (state.lock.answering) return;
    if (flow.phase !== "question" && flow.phase !== "overtime") return;
    const map = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 };
    const k = String(e.key || "").toLowerCase();
    if (!(k in map)) return;
    const idx = map[k];
    flow.phaseWasOvertime = flow.phase === "overtime";
    openMcConfirm(idx);
  });
}

function startNewGame() {
  clearSave();
  const run = buildRunQuestions(allQuestions);
  state = createNewGameState(run);
  setScreen("game");
  startQuestion();
}

// -------------------------
// Utils
// -------------------------
function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function sendScoreToArcade(score) {
  // Send score to Arcade
  try {
    if (typeof GV !== "undefined") {
      new GV().saveScore(score);
      console.log("Score sent to Arcade:", score);
    }
  } catch (err) {
    console.error("Failed to send score to Arcade:", err);
  }
}

// -------------------------
// Boot
// -------------------------
async function boot() {
  // Show loading screen
  const loadingScreen = document.getElementById("loadingScreen");
  const appContainer = document.getElementById("app");
  
  audio.init();

  const saved = loadSavedGame();
  setContinueVisible(Boolean(saved));

  const { questions, source, error } = await fetchQuestions();
  allQuestions = questions;
  netMeta = { source, error };

  wireAnswerClicks();
  wireLifelines();
  wireScreens();
  wireSoundToggle();
  wireKeyboard();

  // If refresh while in-game, stay on start and allow continue
  setScreen("start");
  
  // Hide loading screen and show app with fade effect
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    appContainer.style.display = "block";
    
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }, 800);
}

boot();