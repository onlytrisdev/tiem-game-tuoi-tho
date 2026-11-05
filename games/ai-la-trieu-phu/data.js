/**
 * data.js
 * - Fetch questions JSON (Google Sheets link will be provided later)
 * - Normalize & validate schema
 * - Provide a small fallback dataset so the game runs immediately
 */

/**
 * Google Sheet you provided (must be public/published to fetch from browser):
 * https://docs.google.com/spreadsheets/d/1ZIz8hzVYo0uIOPmafAJ8-n53GJa22xVowMSDxnS7Qpo/edit?usp=sharing
 *
 * If your sheet is not published, the game will fall back to local questions.
 */
export const GOOGLE_SHEET_ID = "1ZIz8hzVYo0uIOPmafAJ8-n53GJa22xVowMSDxnS7Qpo";
export const GOOGLE_SHEET_GID = "0"; // default first tab

// Optionally set if you want to target a specific sheet tab by name:
export const GOOGLE_SHEET_NAME = ""; // e.g. "Sheet1"

/**
 * If you used "Publish to web" and got an iframe like:
 * https://docs.google.com/spreadsheets/d/e/<PUB_ID>/pubhtml?widget=true&headers=false
 * Paste <PUB_ID> here so we can fetch CSV via:
 * https://docs.google.com/spreadsheets/d/e/<PUB_ID>/pub?output=csv
 */
export const GOOGLE_SHEET_PUB_ID = "2PACX-1vQyEJFQwSk0dHjtyK1VJ-JRRS6GzpJi10WXV6rUwS4ghkKMa5xTTNzEbmZiKmtK--f8Z61ILgJppUDQ";

// You can still override with any JSON endpoint (array or {questions:[]}).
export const DEFAULT_SHEETS_JSON_URL = ""; // optional override

/**
 * Expected question shape:
 * {
 *   question: string,
 *   answers: [string,string,string,string],
 *   correct: 0|1|2|3,
 *   difficulty: "easy"|"medium"|"hard",
 *   category: string
 * }
 */

const DIFF_SET = new Set(["easy", "medium", "hard"]);

function asString(v) {
  return typeof v === "string" ? v.trim() : "";
}

function normalizeDifficulty(v) {
  const s = asString(v).toLowerCase();
  if (DIFF_SET.has(s)) return s;
  // allow Vietnamese / shorthand
  if (s === "de" || s === "dễ" || s === "easy") return "easy";
  if (s === "tb" || s === "trung bình" || s === "medium") return "medium";
  if (s === "kho" || s === "khó" || s === "hard") return "hard";
  return "";
}

function parseCorrect(v) {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  const s = asString(v);
  if (!s) return NaN;
  // allow "A"/"B"/"C"/"D"
  const upper = s.toUpperCase();
  const map = { A: 0, B: 1, C: 2, D: 3 };
  if (upper in map) return map[upper];
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

function normalizeQuestion(raw, idx) {
  const question = asString(raw?.question ?? raw?.Question ?? raw?.q);
  const category = asString(raw?.category ?? raw?.Category ?? raw?.topic) || "Tổng hợp";

  const answersRaw =
    raw?.answers ??
    raw?.Answers ??
    [raw?.A ?? raw?.a, raw?.B ?? raw?.b, raw?.C ?? raw?.c, raw?.D ?? raw?.d];

  const answers = Array.isArray(answersRaw) ? answersRaw.map(asString) : [];
  const correct = parseCorrect(raw?.correct ?? raw?.Correct ?? raw?.answer ?? raw?.Answer);
  const difficulty = normalizeDifficulty(raw?.difficulty ?? raw?.Difficulty ?? raw?.level);

  if (!question) return null;
  if (answers.length !== 4 || answers.some((x) => !x)) return null;
  if (![0, 1, 2, 3].includes(correct)) return null;
  if (!difficulty) return null;

  return {
    id: raw?.id ?? `${difficulty}-${idx}-${hashLite(question)}`,
    question,
    answers,
    correct,
    difficulty,
    category,
  };
}

function hashLite(s) {
  // tiny stable hash for ids (not crypto)
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

function normalizePayload(payload) {
  // Accept: array, or {questions: []}
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.questions)) return payload.questions;
  return null;
}

export async function fetchQuestions(url = DEFAULT_SHEETS_JSON_URL, { timeoutMs = 8000 } = {}) {
  // If no explicit JSON URL:
  // - Try Google Sheets gviz first (best: keeps column labels)
  // - If gviz is blocked, try published CSV endpoint (pub?output=csv)
  const resolvedUrl =
    url ||
    buildGvizUrl({ sheetId: GOOGLE_SHEET_ID, gid: GOOGLE_SHEET_GID, sheetName: GOOGLE_SHEET_NAME }) ||
    buildPublishedCsvUrl({ pubId: GOOGLE_SHEET_PUB_ID });

  if (!resolvedUrl) {
    return { questions: FALLBACK_QUESTIONS, source: "fallback", error: null };
  }

  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);

  try {
    const res = await fetch(resolvedUrl, { signal: ctrl.signal, cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const ct = (res.headers.get("content-type") || "").toLowerCase();
    let rawList = null;

    if (ct.includes("application/json")) {
      const payload = await res.json();
      rawList = normalizePayload(payload);
      if (!rawList) throw new Error("JSON format not supported (expected array or {questions:[]})");
    } else {
      const text = await res.text();
      if (text.includes("google.visualization.Query.setResponse")) {
        // Google Sheets gviz returns JS wrapper text: google.visualization.Query.setResponse(...)
        const gvizRows = parseGviz(text);
        rawList = gvizRowsToRawQuestions(gvizRows);
      } else {
        // Published CSV
        rawList = parseCsvToObjects(text);
      }
    }

    // If coming from your sheet schema: question/A/B/C/D/correct
    // - correct is 0..3 (0=>A) as you described
    // - difficulty is assigned by row order: 1-5 easy, 6-10 medium, 11-15 hard
    const normalized = normalizeFromSheetColumns(rawList);

    if (normalized.length < 15) {
      throw new Error(`Not enough valid questions (${normalized.length}/15)`);
    }

    return { questions: normalized, source: "remote", error: null };
  } catch (err) {
    // If gviz failed and we have pub id, do a second attempt with published CSV.
    const isFirstTryGviz = Boolean(!url && resolvedUrl.includes("/gviz/"));
    if (isFirstTryGviz && GOOGLE_SHEET_PUB_ID) {
      try {
        const csvUrl = buildPublishedCsvUrl({ pubId: GOOGLE_SHEET_PUB_ID });
        const res2 = await fetch(csvUrl, { cache: "no-store" });
        if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
        const text2 = await res2.text();
        const rawList2 = parseCsvToObjects(text2);
        const normalized2 = normalizeFromSheetColumns(rawList2);
        if (normalized2.length < 15) throw new Error(`Not enough valid questions (${normalized2.length}/15)`);
        return { questions: normalized2, source: "remote", error: null };
      } catch (err2) {
        const msg = err2 instanceof Error ? err2.message : String(err2);
        return { questions: FALLBACK_QUESTIONS, source: "fallback", error: msg };
      }
    }

    return { questions: FALLBACK_QUESTIONS, source: "fallback", error: err instanceof Error ? err.message : String(err) };
  } finally {
    clearTimeout(t);
  }
}

function buildGvizUrl({ sheetId, gid = "0", sheetName = "" }) {
  if (!sheetId) return "";
  const base = `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/gviz/tq`;
  const params = new URLSearchParams();
  params.set("tqx", "out:json");
  // Prefer gid (stable). If sheetName is provided, it works too.
  if (sheetName) params.set("sheet", sheetName);
  else params.set("gid", gid);
  return `${base}?${params.toString()}`;
}

function buildPublishedCsvUrl({ pubId }) {
  if (!pubId) return "";
  // For "Publish to the web" share (iframe pubhtml), CSV is available via /pub?output=csv
  return `https://docs.google.com/spreadsheets/d/e/${encodeURIComponent(pubId)}/pub?output=csv`;
}

function parseGviz(text) {
  // gviz response: google.visualization.Query.setResponse({...});
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end < 0 || end <= start) throw new Error("GVIZ parse failed (not public/published?)");
  const json = text.slice(start, end + 1);
  const obj = JSON.parse(json);
  const rows = obj?.table?.rows;
  const cols = obj?.table?.cols;
  if (!Array.isArray(rows) || !Array.isArray(cols)) throw new Error("GVIZ format not recognized");

  // Convert rows -> array of objects keyed by column label
  const labels = cols.map((c, i) => (c?.label ? String(c.label).trim() : `col_${i}`));
  return rows.map((r) => {
    const out = {};
    const cells = Array.isArray(r?.c) ? r.c : [];
    for (let i = 0; i < labels.length; i++) {
      const v = cells[i]?.v ?? "";
      out[labels[i]] = v;
    }
    return out;
  });
}

function gvizRowsToRawQuestions(rows) {
  // rows already objects with column labels.
  return rows;
}

function parseCsvToObjects(csvText) {
  // Minimal RFC4180-ish CSV parser (supports quoted fields with commas and newlines)
  const rows = parseCsv(csvText);
  if (!rows.length) return [];
  const headers = rows[0].map((h) => String(h || "").trim());
  const out = [];
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    // skip fully empty lines
    if (!row.some((c) => String(c || "").trim() !== "")) continue;
    const obj = {};
    for (let i = 0; i < headers.length; i++) {
      const key = headers[i] || `col_${i}`;
      obj[key] = row[i] ?? "";
    }
    out.push(obj);
  }
  return out;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = "";
  let i = 0;
  let inQuotes = false;

  while (i < text.length) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === "\"") {
        const next = text[i + 1];
        if (next === "\"") {
          cur += "\"";
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      cur += ch;
      i += 1;
      continue;
    }

    if (ch === "\"") {
      inQuotes = true;
      i += 1;
      continue;
    }

    if (ch === ",") {
      row.push(cur);
      cur = "";
      i += 1;
      continue;
    }

    if (ch === "\r") {
      // ignore \r, handle \r\n with \n below
      i += 1;
      continue;
    }

    if (ch === "\n") {
      row.push(cur);
      rows.push(row);
      row = [];
      cur = "";
      i += 1;
      continue;
    }

    cur += ch;
    i += 1;
  }

  // last cell
  row.push(cur);
  rows.push(row);
  return rows;
}

function normalizeFromSheetColumns(rawList) {
  // Accept both our existing JSON schema and the Sheet columns schema.
  const normalized = [];
  let sheetIndex = 0;

  for (const raw of rawList) {
    // If it already matches our internal schema (has difficulty), keep existing path.
    if (raw && (raw.difficulty || raw.Difficulty || raw.level)) {
      const q = normalizeQuestion(raw, normalized.length);
      if (q) normalized.push(q);
      continue;
    }

    const question = asString(raw?.question ?? raw?.Question ?? raw?.QUESTION);
    const A = asString(raw?.A ?? raw?.a);
    const B = asString(raw?.B ?? raw?.b);
    const C = asString(raw?.C ?? raw?.c);
    const D = asString(raw?.D ?? raw?.d);
    const correct = parseCorrect(raw?.correct ?? raw?.Correct);

    if (!question || !A || !B || !C || !D) continue;
    if (![0, 1, 2, 3].includes(correct)) continue;

    // Difficulty by order (1–5 easy, 6–10 medium, 11–15 hard)
    sheetIndex += 1;
    const difficulty = sheetIndex <= 5 ? "easy" : sheetIndex <= 10 ? "medium" : "hard";

    normalized.push({
      id: `${difficulty}-${sheetIndex}-${hashLite(question)}`,
      question,
      answers: [A, B, C, D],
      correct,
      difficulty,
      category: "Tổng hợp",
    });
  }

  return normalized;
}

export function splitByDifficulty(questions) {
  const easy = [];
  const medium = [];
  const hard = [];
  for (const q of questions) {
    if (q.difficulty === "easy") easy.push(q);
    else if (q.difficulty === "medium") medium.push(q);
    else if (q.difficulty === "hard") hard.push(q);
  }
  return { easy, medium, hard };
}

// Small embedded dataset (15+) so game runs without Sheets link.
const FALLBACK_QUESTIONS = [
  // easy (>=5)
  {
    question: "HTML viết tắt của cụm từ nào?",
    answers: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Marking Language", "Home Tool Markup Language"],
    correct: 0,
    difficulty: "easy",
    category: "Công nghệ",
  },
  {
    question: "Trong CSS, thuộc tính nào dùng để đổi màu chữ?",
    answers: ["font-color", "text-color", "color", "foreground"],
    correct: 2,
    difficulty: "easy",
    category: "Công nghệ",
  },
  {
    question: "Số 0 trong hệ nhị phân biểu diễn giá trị nào?",
    answers: ["Đúng", "Sai", "Âm", "Vô cực"],
    correct: 1,
    difficulty: "easy",
    category: "Khoa học",
  },
  {
    question: "Cơ quan nào bơm máu đi khắp cơ thể?",
    answers: ["Gan", "Phổi", "Tim", "Thận"],
    correct: 2,
    difficulty: "easy",
    category: "Sức khỏe",
  },
  {
    question: "Môn thể thao nào thường dùng vợt và quả bóng nhỏ màu vàng?",
    answers: ["Bóng chuyền", "Cầu lông", "Tennis", "Bóng rổ"],
    correct: 2,
    difficulty: "easy",
    category: "Thể thao",
  },
  {
    question: "Trong âm nhạc, ký hiệu 'Do Re Mi' thuộc hệ thống nào?",
    answers: ["Solfege", "Morse", "ASCII", "Braille"],
    correct: 0,
    difficulty: "easy",
    category: "Âm nhạc",
  },

  // medium (>=5)
  {
    question: "Trong JavaScript, toán tử nào dùng để so sánh bằng nghiêm ngặt?",
    answers: ["==", "===", "=", "!="],
    correct: 1,
    difficulty: "medium",
    category: "Công nghệ",
  },
  {
    question: "Đâu là đơn vị đo cường độ dòng điện?",
    answers: ["Volt", "Watt", "Ampere", "Ohm"],
    correct: 2,
    difficulty: "medium",
    category: "Khoa học",
  },
  {
    question: "Vitamin nào thường liên quan đến việc hấp thụ canxi và sức khỏe xương?",
    answers: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correct: 3,
    difficulty: "medium",
    category: "Sức khỏe",
  },
  {
    question: "Giải đấu bóng đá lớn nhất thế giới cấp đội tuyển quốc gia là gì?",
    answers: ["UEFA Champions League", "FIFA World Cup", "Europa League", "Copa America"],
    correct: 1,
    difficulty: "medium",
    category: "Thể thao",
  },
  {
    question: "Nốt nhạc có cao độ chuẩn thường dùng để lên dây nhạc cụ là gì?",
    answers: ["La 440Hz", "Do 256Hz", "Mi 330Hz", "Sol 392Hz"],
    correct: 0,
    difficulty: "medium",
    category: "Âm nhạc",
  },
  {
    question: "Trong hệ tọa độ, trục hoành thường ký hiệu là gì?",
    answers: ["X", "Y", "Z", "W"],
    correct: 0,
    difficulty: "medium",
    category: "Khoa học",
  },

  // hard (>=5)
  {
    question: "Trong HTTP, mã trạng thái 304 có ý nghĩa gì?",
    answers: ["Not Found", "Not Modified", "Moved Permanently", "Bad Request"],
    correct: 1,
    difficulty: "hard",
    category: "Công nghệ",
  },
  {
    question: "Hiện tượng nào mô tả sự bẻ cong ánh sáng khi đi từ môi trường này sang môi trường khác?",
    answers: ["Nhiễu xạ", "Giao thoa", "Khúc xạ", "Phản xạ"],
    correct: 2,
    difficulty: "hard",
    category: "Khoa học",
  },
  {
    question: "Chỉ số BMI được tính theo công thức nào?",
    answers: ["Cân nặng / (chiều cao)^2", "Cân nặng * chiều cao", "(chiều cao)^2 / cân nặng", "Cân nặng / chiều cao"],
    correct: 0,
    difficulty: "hard",
    category: "Sức khỏe",
  },
  {
    question: "Trong bóng đá, luật việt vị xét theo bộ phận nào của cầu thủ có thể ghi bàn?",
    answers: ["Bất kỳ bộ phận nào", "Chỉ chân", "Bất kỳ bộ phận nào trừ tay/cánh tay", "Chỉ đầu"],
    correct: 2,
    difficulty: "hard",
    category: "Thể thao",
  },
  {
    question: "Hợp âm trưởng (major) được cấu tạo từ khoảng cách nào (tính từ nốt gốc)?",
    answers: ["Quãng 3 thứ + quãng 5 đúng", "Quãng 3 trưởng + quãng 5 đúng", "Quãng 4 đúng + quãng 6 trưởng", "Quãng 2 trưởng + quãng 7 thứ"],
    correct: 1,
    difficulty: "hard",
    category: "Âm nhạc",
  },
  {
    question: "Trong mạng máy tính, thuật ngữ 'MTU' thường liên quan đến điều gì?",
    answers: ["Tốc độ đường truyền", "Kích thước gói tin tối đa", "Mã hóa dữ liệu", "Địa chỉ IP tĩnh"],
    correct: 1,
    difficulty: "hard",
    category: "Công nghệ",
  },
];