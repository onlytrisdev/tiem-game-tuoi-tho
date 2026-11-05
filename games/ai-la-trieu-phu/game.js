/**
 * game.js
 * - Core game logic (no DOM)
 * - Question selection by difficulty (5/5/5), no repeats
 * - Timer, answer resolution, lifelines
 * - Save/restore state to localStorage
 */

import { splitByDifficulty } from "./data.js";

export const PRIZE_LADDER = [
  1_000_000,
  2_000_000,
  3_000_000,
  4_000_000,
  5_000_000,  // mốc quan trọng 1
  6_000_000,
  8_000_000,
  10_000_000,
  14_000_000,
  22_000_000, // mốc quan trọng 2
  30_000_000,
  60_000_000,
  120_000_000,
  250_000_000,
  500_000_000, // TRIỆU PHÚ
];

export const STORAGE_KEY = "altp_h5_save_v1";

export function formatMoneyVND(n) {
  const x = Number(n) || 0;
  return `${x.toLocaleString("vi-VN")} đồng`;
}

function sampleWithoutReplacement(arr, count, rng = Math.random) {
  if (arr.length < count) return null;
  const copy = arr.slice();
  // Fisher-Yates partial shuffle
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

export function buildRunQuestions(allQuestions, rng = Math.random) {
  const { easy, medium, hard } = splitByDifficulty(allQuestions);
  const pickEasy = sampleWithoutReplacement(easy, 5, rng);
  const pickMedium = sampleWithoutReplacement(medium, 5, rng);
  const pickHard = sampleWithoutReplacement(hard, 5, rng);
  if (!pickEasy || !pickMedium || !pickHard) {
    const e = easy.length, m = medium.length, h = hard.length;
    throw new Error(`Not enough questions by difficulty (easy=${e}, medium=${m}, hard=${h})`);
  }
  // Randomize answer positions per run (prevents "A is always correct")
  return [...pickEasy, ...pickMedium, ...pickHard].map((q) => shuffleQuestionAnswers(q, rng));
}

export function createNewGameState(runQuestions) {
  return {
    version: 1,
    startedAt: Date.now(),
    runQuestions,
    index: 0,
    earned: 0,
    safe: 0, // guaranteed milestone payout (Q5/Q10/Q15)
    status: "playing", // playing | won | lost | quit
    lastOutcome: null, // {type:"correct"|"wrong"|"timeout", correctIndex:number, chosenIndex:number|null}
    lifelines: {
      fifty: { used: false, removed: [] }, // removed indices for current question
      audience: { used: false, votes: null },
      phone: { used: false, hint: null },
    },
    // internal
    timer: { remainingMs: 30000, running: false, startedAtMs: 0 },
    lock: { answering: false },
  };
}

export function getCurrentQuestion(state) {
  return state.runQuestions[state.index] || null;
}

export function getQuestionNumber(state) {
  return state.index + 1;
}

export function getPrizeForIndex(questionIdx0) {
  return PRIZE_LADDER[questionIdx0] ?? 0;
}

export function computeEarnedIfCorrect(state) {
  return getPrizeForIndex(state.index);
}

export function startTimer(state, nowMs = performance.now()) {
  state.timer.running = true;
  state.timer.startedAtMs = nowMs;
}

export function stopTimer(state) {
  state.timer.running = false;
}

export function tickTimer(state, nowMs = performance.now()) {
  if (!state.timer.running) return state.timer.remainingMs;
  const delta = nowMs - state.timer.startedAtMs;
  const next = Math.max(0, state.timer.remainingMs - delta);
  state.timer.remainingMs = next;
  state.timer.startedAtMs = nowMs;
  return next;
}

export function resetTimerForQuestion(state) {
  state.timer.remainingMs = 30000;
  state.timer.running = false;
  state.timer.startedAtMs = 0;
}

export function canUseLifeline(state, key) {
  if (state.status !== "playing") return false;
  if (state.lock.answering) return false;
  if (key === "fifty") return !state.lifelines.fifty.used;
  if (key === "audience") return !state.lifelines.audience.used;
  if (key === "phone") return !state.lifelines.phone.used;
  return false;
}

export function useFiftyFifty(state, rng = Math.random) {
  const q = getCurrentQuestion(state);
  if (!q) return null;
  if (state.lifelines.fifty.used) return state.lifelines.fifty.removed;

  const wrong = [0, 1, 2, 3].filter((i) => i !== q.correct);
  // remove 2 wrong answers randomly
  const removed = [];
  while (removed.length < 2) {
    const i = wrong.splice(Math.floor(rng() * wrong.length), 1)[0];
    removed.push(i);
  }
  state.lifelines.fifty.used = true;
  state.lifelines.fifty.removed = removed;
  return removed;
}

export function useAudience(state, rng = Math.random) {
  const q = getCurrentQuestion(state);
  if (!q) return null;
  if (state.lifelines.audience.used) return state.lifelines.audience.votes;

  // Correct should be between 50-80%
  const correctPct = 50 + Math.floor(rng() * 31); // 50..80
  let remaining = 100 - correctPct;
  const others = [0, 1, 2, 3].filter((i) => i !== q.correct);
  const votes = [0, 0, 0, 0];
  votes[q.correct] = correctPct;

  // distribute remaining among other 3 with some randomness
  for (let k = 0; k < others.length; k++) {
    const isLast = k === others.length - 1;
    const give = isLast ? remaining : Math.floor(rng() * (remaining + 1));
    votes[others[k]] = give;
    remaining -= give;
  }

  // If 50-50 already used, reduce removed answers votes to 0 and re-normalize
  const removed = state.lifelines.fifty.used ? state.lifelines.fifty.removed : [];
  if (removed.length) {
    for (const r of removed) votes[r] = 0;
    const sum = votes.reduce((a, b) => a + b, 0) || 1;
    // scale to 100
    for (let i = 0; i < 4; i++) votes[i] = Math.round((votes[i] * 100) / sum);
    // fix rounding drift
    const drift = 100 - votes.reduce((a, b) => a + b, 0);
    votes[q.correct] += drift;
  }

  state.lifelines.audience.used = true;
  state.lifelines.audience.votes = votes;
  return votes;
}

export function usePhone(state, rng = Math.random) {
  const q = getCurrentQuestion(state);
  if (!q) return null;
  if (state.lifelines.phone.used) return state.lifelines.phone.hint;

  const isCorrect = rng() < 0.7;
  const suggest = isCorrect ? q.correct : pickWrong(q.correct, state.lifelines.fifty.removed, rng);
  const key = ["A", "B", "C", "D"][suggest];
  const confidence = isCorrect ? ["khá chắc", "gần như chắc chắn", "mình nghĩ là"] : ["không chắc lắm nhưng", "cảm giác là", "mình đoán là"];
  const msg = `Người thân: Mình ${confidence[Math.floor(rng() * confidence.length)]} đáp án ${key}.`;

  state.lifelines.phone.used = true;
  state.lifelines.phone.hint = msg;
  return msg;
}

function pickWrong(correct, removed = [], rng = Math.random) {
  const wrong = [0, 1, 2, 3].filter((i) => i !== correct && !removed.includes(i));
  return wrong[Math.floor(rng() * wrong.length)];
}

export function beginAnswer(state) {
  state.lock.answering = true;
  stopTimer(state);
}

export function resolveAnswer(state, chosenIndex) {
  const q = getCurrentQuestion(state);
  if (!q) return { outcome: "lost", correct: -1 };

  const correct = q.correct;
  if (chosenIndex === correct) {
    const earned = computeEarnedIfCorrect(state);
    state.earned = earned;
    // Update safe milestones at Q5/Q10/Q15
    const qNum = state.index + 1;
    if (qNum === 5 || qNum === 10 || qNum === 15) state.safe = earned;
    state.lastOutcome = { type: "correct", correctIndex: correct, chosenIndex };
    return { outcome: "correct", correct, earned };
  }

  state.status = "lost";
  state.lastOutcome = { type: "wrong", correctIndex: correct, chosenIndex };
  return { outcome: "wrong", correct, earned: state.earned };
}

export function resolveTimeout(state) {
  const q = getCurrentQuestion(state);
  const correct = q ? q.correct : -1;
  state.status = "lost";
  state.lastOutcome = { type: "timeout", correctIndex: correct, chosenIndex: null };
  stopTimer(state);
  return { outcome: "timeout", correct, earned: state.earned };
}

export function payoutOnFailure(state) {
  const qNum = state.index + 1;
  if (qNum <= 5) return 0;
  if (qNum <= 10) return PRIZE_LADDER[4]; // 5.000.000
  return PRIZE_LADDER[9]; // 22.000.000
}

export function nextQuestion(state) {
  state.index += 1;
  // reset per-question lifeline artifacts
  state.lifelines.fifty.removed = [];
  state.lifelines.audience.votes = null;
  state.lifelines.phone.hint = null;
  state.lock.answering = false;
  resetTimerForQuestion(state);

  if (state.index >= 15) {
    state.status = "won";
    return { done: true, status: "won" };
  }
  return { done: false, status: "playing" };
}

export function quitGame(state) {
  state.status = "quit";
  stopTimer(state);
}

export function isGameOver(state) {
  return state.status === "lost" || state.status === "won" || state.status === "quit";
}

export function saveGame(state) {
  const payload = {
    version: state.version,
    startedAt: state.startedAt,
    runQuestions: state.runQuestions,
    index: state.index,
    earned: state.earned,
    safe: state.safe,
    status: state.status,
    lifelines: state.lifelines,
    timer: { remainingMs: state.timer.remainingMs },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function clearSave() {
  localStorage.removeItem(STORAGE_KEY);
}

export function loadSavedGame() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const saved = JSON.parse(raw);
    if (!saved || !Array.isArray(saved.runQuestions) || typeof saved.index !== "number") return null;
    // rebuild runtime fields
    const state = createNewGameState(saved.runQuestions);
    state.startedAt = saved.startedAt || Date.now();
    state.index = saved.index;
    state.earned = saved.earned || 0;
    state.safe = saved.safe || 0;
    state.status = saved.status || "playing";
    state.lifelines = saved.lifelines || state.lifelines;
    state.timer.remainingMs = saved.timer?.remainingMs ?? 30000;
    state.timer.running = false;
    state.lock.answering = false;
    // If already ended, don't allow continuing
    if (isGameOver(state)) return null;
    return state;
  } catch {
    return null;
  }
}

export function canStopAtCurrentQuestion(state) {
  if (state.status !== "playing") return false;
  if (state.lock.answering) return false;
  const qNum = state.index + 1;
  // Stop option only at non-milestones
  return qNum !== 5 && qNum !== 10 && qNum !== 15;
}

function shuffleQuestionAnswers(q, rng = Math.random) {
  const idx = [0, 1, 2, 3];
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  const answers = idx.map((i) => q.answers[i]);
  const correct = idx.indexOf(q.correct);
  return { ...q, answers, correct };
}