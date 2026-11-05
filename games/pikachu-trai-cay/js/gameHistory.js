/**
 * gameHistory.js — Alias tương thích (delegate sang CloudSave)
 * @deprecated Dùng CloudSave trực tiếp trong code mới
 */
const GameHistory = (function () {
  'use strict';

  return {
    VERSION: CloudSave.VERSION,
    canUseApi: CloudSave.canSync,
    save: CloudSave.saveMetadata,
    load: CloudSave.loadMetadata
  };
})();
