/**
 * Xử lý nhập chữ cái không dấu (A–Z) và so khớp đáp án tiếng Việt
 */
const ViInput = (function () {
  'use strict';

  function normalize(ch) {
    return (ch || '').toUpperCase().normalize('NFC');
  }

  /** Bỏ dấu tiếng Việt để so khớp / nhập không dấu */
  function stripAccents(str) {
    return (str || '')
      .toUpperCase()
      .normalize('NFC')
      .replace(/Đ/g, 'D')
      .normalize('NFD')
      .replace(/\p{M}/gu, '');
  }

  function normalizeWord(str) {
    return stripAccents(str).trim();
  }

  function wordsMatch(guess, target) {
    return normalizeWord(guess) === normalizeWord(target);
  }

  function isLetterKey(key) {
    const k = normalize(key);
    return k.length === 1 && k >= 'A' && k <= 'Z';
  }

  return {
    normalize,
    stripAccents,
    normalizeWord,
    wordsMatch,
    isLetterKey
  };
})();
