/**
 * ui.js
 * - DOM rendering + screen transitions
 * - Animations and overlays for lifelines
 */

import { PRIZE_LADDER, formatMoneyVND, getQuestionNumber } from "./game.js";

const SCREEN_IDS = ["start", "intro", "game", "result"];

export function qs(sel, root = document) {
  const el = root.querySelector(sel);
  if (!el) throw new Error(`Missing element: ${sel}`);
  return el;
}

export function setScreen(screenId) {
  if (!SCREEN_IDS.includes(screenId)) throw new Error(`Unknown screen: ${screenId}`);
  const screens = document.querySelectorAll(".screen");
  screens.forEach((s) => s.classList.remove("screen--active"));
  const next = document.querySelector(`.screen[data-screen="${screenId}"]`);
  if (!next) throw new Error(`Screen not found: ${screenId}`);
  // allow transition: force reflow by toggling display via class only
  next.classList.add("screen--active");

  // App state class for UI rules (e.g. hide prize ladder while playing)
  document.body.classList.toggle("is-playing", screenId === "game");
}

export function renderLadder(currentIndex0) {
  const list = qs("#ladderList");
  list.innerHTML = "";
  for (let i = 0; i < PRIZE_LADDER.length; i++) {
    const li = document.createElement("li");
    li.className = "ladder-item";
    if (i === currentIndex0) li.classList.add("ladder-item--current");
    if (i < currentIndex0) li.classList.add("ladder-item--passed");

    const idx = document.createElement("div");
    idx.className = "ladder-item__idx";
    idx.textContent = String(i + 1).padStart(2, "0");

    const money = document.createElement("div");
    money.className = "ladder-item__money";
    money.textContent = formatMoneyVND(PRIZE_LADDER[i]);

    li.append(idx, money);
    list.appendChild(li);
  }
}

export function renderQuestion(state) {
  const q = state.runQuestions[state.index];
  qs("#qIndex").textContent = `${getQuestionNumber(state)}/15`;
  qs("#qCategory").textContent = q?.category || "—";
  qs("#qText").textContent = q?.question || "—";
  renderLadder(state.index);
}

export function renderTimer(msRemaining) {
  const s = Math.ceil(msRemaining / 1000);
  qs("#timerText").textContent = String(s);
}

export function renderAnswers(state, { disabled = false } = {}) {
  const q = state.runQuestions[state.index];
  const removed = state.lifelines.fifty.used ? state.lifelines.fifty.removed : [];

  for (let i = 0; i < 4; i++) {
    const btn = qs(`.quiz-answer[data-idx="${i}"]`);
    const textEl = qs(`#ansText${i}`);
    textEl.textContent = q?.answers?.[i] ?? "—";

    btn.classList.remove("quiz-answer--disabled", "quiz-answer--selected", "quiz-answer--correct", "quiz-answer--wrong");
    btn.disabled = Boolean(disabled || state.lock.answering);

    if (removed.includes(i)) {
      btn.disabled = true;
      btn.classList.add("quiz-answer--disabled");
    }
  }
}

export function lockAnswerButtons() {
  const btns = document.querySelectorAll(".quiz-answer");
  btns.forEach((b) => (b.disabled = true));
}

export function markSelected(idx) {
  const btn = document.querySelector(`.quiz-answer[data-idx="${idx}"]`);
  if (btn) btn.classList.add("quiz-answer--selected");
}

export function markCorrect(idx) {
  const btn = document.querySelector(`.quiz-answer[data-idx="${idx}"]`);
  if (btn) btn.classList.add("quiz-answer--correct");
}

export function markWrong(idx) {
  const btn = document.querySelector(`.quiz-answer[data-idx="${idx}"]`);
  if (btn) btn.classList.add("quiz-answer--wrong");
}

export function setLifelinesUI(state) {
  qs("#life5050").disabled = state.lifelines.fifty.used;
  qs("#lifeAudience").disabled = state.lifelines.audience.used;
  qs("#lifePhone").disabled = state.lifelines.phone.used;
}

export function showOverlay({ title, bodyHtml, mode = "close" }) {
  const panel = qs("#overlayPanel");
  panel.dataset.mode = mode;
  
  qs("#overlayTitle").textContent = title;
  qs("#overlayBody").innerHTML = bodyHtml;

  const btnClose = qs("#btnOverlayClose");
  const btnYes = qs("#btnOverlayYes");
  const btnNo = qs("#btnOverlayNo");

  if (mode === "yesno") {
    btnClose.hidden = true;
    btnYes.hidden = false;
    btnNo.hidden = false;
  } else {
    btnClose.hidden = false;
    btnYes.hidden = true;
    btnNo.hidden = true;
  }

  panel.hidden = false;
}

export function hideOverlay() {
  const panel = qs("#overlayPanel");
  panel.hidden = true;
  delete panel.dataset.mode;
}

export function buildAudienceOverlay(votes) {
  const keys = ["A", "B", "C", "D"];
  const rows = votes
    .map((pct, i) => {
      const safe = Math.max(0, Math.min(100, pct));
      return `
        <div class="bar">
          <div class="bar__key">${keys[i]}</div>
          <div class="bar__track"><div class="bar__fill" style="width:${safe}%"></div></div>
          <div class="bar__pct">${safe}%</div>
        </div>
      `;
    })
    .join("");
  return `
    <div>Khán giả bình chọn như sau:</div>
    <div class="bars">${rows}</div>
  `;
}

export function renderResult({ title, moneyText, desc }) {
  qs("#resultTitle").textContent = title;
  qs("#resultMoney").textContent = moneyText;
  qs("#resultDesc").textContent = desc;
}

export function setStopVisible(isVisible) {
  const btn = qs("#btnStop");
  btn.hidden = !isVisible;
  btn.disabled = !isVisible;
}

export function setContinueVisible(isVisible) {
  const btn = qs("#btnContinue");
  btn.hidden = !isVisible;
}

export function flashButton(el) {
  el.animate(
    [
      { transform: "scale(1)", filter: "brightness(1)" },
      { transform: "scale(1.02)", filter: "brightness(1.12)" },
      { transform: "scale(1)", filter: "brightness(1)" },
    ],
    { duration: 260, easing: "ease-out" },
  );
}