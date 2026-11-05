/**
 * cloudSave.js — Đồng bộ tiến trình tài khoản Arcade (gameId + token)
 *
 * Dùng SaveHistoryGame / GetHistoryGame để lưu & khôi phục:
 * - CurrentLevel, TotalScore, CurrentStage (chuẩn Arcade — đồng bộ đa thiết bị)
 * - bestScores, maxUnlockedLevel (kỷ lục 6 cấp)
 * - currentSession (JSON bàn chơi dở: grid, điểm, thời gian)
 *
 * URL cần có ?gid=...&token=... (token gắn userId phía server Arcade).
 */
const CloudSave = (function () {
  'use strict';

  const SAVE_URL = 'https://localhost/account/SaveHistoryGame';
  const GET_URL = 'https://localhost/account/GetHistoryGame';
  const VERSION = PlayerProgress.VERSION;

  function getCredentials() {
    const qs = new URLSearchParams(location.search);
    const gameId = qs.get('gid');
    const token = qs.get('token');
    if (!gameId || !token) return null;
    return { gameId: gameId, token: token };
  }

  /** Có đủ gameId + token để gọi API */
  function canSync() {
    return getCredentials() !== null;
  }

  function postForm(url, fields) {
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams(fields)
    }).then(function (r) { return r.json(); });
  }

  function parseMetaData(raw) {
    if (!raw) return null;
    try {
      return typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch (err) {
      console.warn('CloudSave: MetaData không hợp lệ', err);
      return null;
    }
  }

  /**
   * Gói metadata gửi SaveHistoryGame — đúng format Arcade + dữ liệu game
   * @param {object} progress — sau PlayerProgress.recordRound
   * @param {object|null} sessionSnapshot — ván dở (null nếu thắng / hết giờ hết ô)
   */
  function buildMetadata(progress, sessionSnapshot) {
    const data = PlayerProgress.toMetadata(progress);
    const snap = GameSession.normalizeSession(sessionSnapshot);
    const maxUnlocked = parseInt(data.maxUnlockedLevel, 10) || 1;

    return {
      CurrentLevel: Math.max(0, maxUnlocked - 1),
      TotalScore: data.totalScore,
      CurrentStage: 0,
      version: VERSION,
      bestScores: data.bestScores,
      maxUnlockedLevel: maxUnlocked,
      lastRound: data.lastRound,
      currentSession: snap,
      savedAt: new Date().toISOString()
    };
  }

  /**
   * GetHistoryGame — tải metadata từ server
   * @returns {Promise<object|null>}
   */
  function loadMetadata() {
    const cred = getCredentials();
    if (!cred) return Promise.resolve(null);

    return postForm(GET_URL, {
      gameId: cred.gameId,
      token: cred.token
    })
      .then(function (res) {
        if (!res || res.Status !== 1 || !res.Data) return null;
        return parseMetaData(res.Data.MetaData);
      })
      .catch(function (err) {
        console.warn('CloudSave.loadMetadata:', err);
        return null;
      });
  }

  /**
   * SaveHistoryGame — đẩy metadata lên server
   * @returns {Promise<boolean>}
   */
  function saveMetadata(metadata) {
    const cred = getCredentials();
    if (!cred || !metadata) return Promise.resolve(false);

    const payload = Object.assign({}, metadata, {
      savedAt: new Date().toISOString()
    });

    return postForm(SAVE_URL, {
      gameId: cred.gameId,
      token: cred.token,
      metadata: JSON.stringify(payload)
    })
      .then(function (res) { return !!(res && res.Status === 1); })
      .catch(function (err) {
        console.warn('CloudSave.saveMetadata:', err);
        return false;
      });
  }

  /**
   * Gộp metadata server vào localStorage (kỷ lục + ván dở)
   */
  function applyServerMetadata(meta) {
    if (!meta) {
      return {
        progress: PlayerProgress.loadLocal(),
        session: GameSession.getStoredSession()
      };
    }

    return {
      progress: PlayerProgress.applyFromServer(meta),
      session: GameSession.applyFromServer(meta)
    };
  }

  /**
   * Gọi khi load game (sau preload asset) — local trước, server merge sau
   */
  function loadOnStartup() {
    PlayerProgress.loadLocal();
    GameSession.loadLocal();

    if (!canSync()) {
      return Promise.resolve(applyServerMetadata(null));
    }

    return loadMetadata().then(function (meta) {
      return applyServerMetadata(meta);
    });
  }

  /**
   * Gọi khi game over — lưu local + đồng bộ server
   */
  function saveOnGameOver(progress, sessionSnapshot) {
    GameSession.saveLocal(sessionSnapshot);
    const metadata = buildMetadata(progress, sessionSnapshot);

    if (!canSync()) {
      return Promise.resolve(false);
    }

    return saveMetadata(metadata);
  }

  return {
    VERSION,
    canSync,
    getCredentials,
    buildMetadata,
    loadMetadata,
    saveMetadata,
    applyServerMetadata,
    loadOnStartup,
    saveOnGameOver
  };
})();
