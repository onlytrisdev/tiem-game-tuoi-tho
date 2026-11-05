/**
 * Cloud save/load tiến trình Bắt Chữ — Arcade API (?gid= & ?token=).
 * File độc lập: không sửa gameplay; main.min.js chỉ chờ BCGameHistory.whenReady().
 *
 * Save: sau mỗi câu hoàn thành (result/gameover) + các thao tác quan trọng.
 * Load: trước khi game boot, ghi vào localStorage rồi resumeStage().
 */
(function (window, $) {
    'use strict';

    var SCHEMA_VERSION = 2;
    var BC_KEY = 'abcdeghiklmnopqrstuvxy';
    var GAME_KEYS = ['l', 'p', 's', 'h', 'sound'];
    var PICS_PREFIX = 'assets/pics/';

    var saveTimer = null;
    var historyLoaded = false;
    var historyReady = false;
    var readyQueue = [];
    var lastLoadedStage = 'start';

    /** Cùng chuẩn score.min.js: URLSearchParams(location.search) */
    function getUrlParams() {
        return new URLSearchParams(window.location.search);
    }

    /** Giải mã JWT token — cùng hàm ut() trong score.min.js */
    function parseTokenPayload(token) {
        if (!token) return null;
        try {
            var parts = token.split('.');
            if (parts.length < 2) return null;
            var base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
            var json = decodeURIComponent(
                window.atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join('')
            );
            return JSON.parse(json);
        } catch (e) {
            return null;
        }
    }

    function logInfo() {
        if (window.console && console.log) {
            console.log.apply(console, arguments);
        }
    }

    function logWarn() {
        if (window.console && console.warn) {
            console.warn.apply(console, arguments);
        }
    }

    function getGameId() {
        return getUrlParams().get('gid') || '';
    }

    function getToken() {
        return getUrlParams().get('token') || '';
    }

    function getUserId() {
        var payload = parseTokenPayload(getToken());
        if (!payload) return '';
        if (payload.userid != null && String(payload.userid) !== '') {
            return String(payload.userid);
        }
        if (payload.username != null && String(payload.username).trim() !== '') {
            return String(payload.username).trim();
        }
        return '';
    }

    function isLocalDevHost() {
        var host = (location.hostname || '').toLowerCase();
        return (
            host === 'localhost' ||
            host === '127.0.0.1' ||
            host === '' ||
            host.indexOf('.local') === host.length - 6
        );
    }

    /**
     * API account luôn trên https://localhost (score.min.js).
     * Không dùng location.host — e.localhost không có /account/* → 404.
     */
    function getApiUrls() {
        if (isLocalDevHost()) {
            return {
                save: 'history-api.aspx?action=save',
                get: 'history-api.aspx?action=get'
            };
        }

        return {
            save: 'https://localhost/account/SaveHistoryGame',
            get: 'https://localhost/account/GetHistoryGame'
        };
    }

    /** Cùng điều kiện score.min.js: phải có cả gid và token trên URL */
    function isEnabled() {
        var qs = getUrlParams();
        var gid = qs.get('gid');
        var token = qs.get('token');
        return !!(gid && token);
    }

    function lsGet(key) {
        try {
            return window.localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    }

    function lsSet(key, value) {
        try {
            window.localStorage.setItem(key, String(value));
        } catch (e) {
            logWarn('[game-history] setItem failed', key, e);
        }
    }

    function lsRemove(key) {
        try {
            window.localStorage.removeItem(key);
        } catch (e) {
            logWarn('[game-history] removeItem failed', key, e);
        }
    }

    function clearGameLocalKeys() {
        var i;
        for (i = 0; i < GAME_KEYS.length; i++) {
            lsRemove(GAME_KEYS[i]);
        }
    }

    /* --- RC4 (tương thích main.min.js: key p, s) --- */

    function rc4Calculate(plain, key) {
        var sbox = [], k = [], b = 0, temp, i, j, idx, kval, out = [];
        for (i = 0; i <= 255; i++) {
            k[i] = key[i % key.length];
            sbox[i] = i;
        }
        for (i = 0; i <= 255; i++) {
            b = (b + sbox[i] + k[i]) % 256;
            temp = sbox[i];
            sbox[i] = sbox[b];
            sbox[b] = temp;
        }
        i = 0; j = 0;
        for (var n = 0; n < plain.length; n++) {
            i = (i + 1) % 256;
            j = (j + sbox[i]) % 256;
            temp = sbox[i];
            sbox[i] = sbox[j];
            sbox[j] = temp;
            idx = (sbox[i] + sbox[j]) % 256;
            kval = sbox[idx];
            out.push(plain[n] ^ kval);
        }
        return out;
    }

    function strToChars(str) {
        var c = [], i;
        for (i = 0; i < str.length; i++) c.push(str.charCodeAt(i));
        return c;
    }

    function charsToHex(chars) {
        var hexes = '0123456789abcdef', result = '', i;
        for (i = 0; i < chars.length; i++) {
            result += hexes[chars[i] >> 4] + hexes[chars[i] & 15];
        }
        return result;
    }

    function hexToChars(hex) {
        var codes = [], t = hex.substr(0, 2) === '0x' ? 2 : 0;
        for (; t < hex.length; t += 2) codes.push(parseInt(hex.substr(t, 2), 16));
        return codes;
    }

    function charsToStr(chars) {
        var result = '', i;
        for (i = 0; i < chars.length; i++) result += String.fromCharCode(chars[i]);
        return result;
    }

    function rc4Encrypt(value, key) {
        return charsToHex(rc4Calculate(strToChars(String(value)), strToChars(key)));
    }

    function rc4Decrypt(hex, key) {
        return charsToStr(rc4Calculate(hexToChars(hex), strToChars(key)));
    }

    function readNumericLocal(key, decrypt) {
        var raw = lsGet(key);
        if (raw === undefined || raw === null || raw === '') return 0;
        if (decrypt) {
            try {
                raw = rc4Decrypt(raw, BC_KEY);
            } catch (e) {
                return 0;
            }
        }
        return $.isNumeric(raw) ? parseInt(raw, 10) : 0;
    }

    function writeNumericLocal(key, value, encrypt) {
        if (!$.isNumeric(value)) return;
        lsSet(key, encrypt ? rc4Encrypt(value, BC_KEY) : String(value));
    }

    /* --- Đọc trạng thái game từ DOM + localStorage --- */

    function getCurrentStage() {
        if (!$('#start.stage').hasClass('hide')) return 'start';
        if (!$('#play.stage').hasClass('hide')) return 'play';
        if (!$('#result.stage').hasClass('hide')) return 'result';
        if (!$('#gameover.stage').hasClass('hide')) return 'gameover';
        if (!$('#share.stage').hasClass('hide')) return 'share';
        return 'start';
    }

    function stageToId(stage) {
        var map = { start: 0, play: 1, result: 2, gameover: 3, share: 4 };
        return map[stage] != null ? map[stage] : 0;
    }

    /**
     * Màn result chỉ là chuyển tiếp sau khi trả lời đúng.
     * CurrentLevel lúc đó đã là bài TIẾP THEO (chưa chơi) → lưu play.
     */
    function normalizeStageForSave(stage) {
        if (stage === 'result' || stage === 'share') return 'play';
        return stage;
    }

    /** Khi login: không bao giờ mở lại màn result của bài đã xong. */
    function normalizeStageForResume(stage) {
        if (stage === 'result' || stage === 'share') return 'play';
        return stage;
    }

    function getLevelIndex() {
        var l = lsGet('l');
        if ($.isNumeric(l)) {
            var n = parseInt(l, 10);
            return n < 1 ? 1 : n;
        }
        return 1;
    }

    function getTotalLevels() {
        return (typeof bc !== 'undefined' && bc.data && bc.data.length) ? bc.data.length : 0;
    }

    function decodeAnswerFromEntry(raw) {
        if (!raw || typeof raw !== 'string') return '';
        var base = raw.split('.')[0];
        if (window.bc && typeof bc.decrypt === 'function' && typeof bc.decodeToneString === 'function') {
            try {
                return bc.decodeToneString(bc.decrypt(base));
            } catch (e) {
                return '';
            }
        }
        return '';
    }

    /**
     * @param {number} level — level 1-based
     * @param {string} [rawEntry] — bc.data[i] hoặc tự tra từ bc.data
     */
    function buildQuestionSnapshot(level, rawEntry) {
        if (!level || level < 1) return null;

        var total = getTotalLevels();
        if (total && level > total) return null;

        var dataIndex = level - 1;
        var raw = rawEntry;

        if (!raw && typeof bc !== 'undefined' && bc.data && bc.data[dataIndex]) {
            raw = bc.data[dataIndex];
        }
        if (!raw || typeof raw !== 'string') return null;

        var encoded = raw.split('.')[0];

        return {
            level: level,
            dataIndex: dataIndex,
            imageFile: raw,
            answerEncoded: encoded,
            answerDisplay: decodeAnswerFromEntry(raw),
            imageUrl: PICS_PREFIX + raw,
            letterCount: decodeAnswerFromEntry(raw).replace(/\s+/g, '').length
        };
    }

    /**
     * Xác định câu vừa hoàn thành và câu đang/ sắp chơi theo stage + level.
     */
    function resolveLevelContext() {
        var level = getLevelIndex();
        var stage = getCurrentStage();
        var total = getTotalLevels();
        var completedLevel = null;
        var activeLevel = level;

        if (stage === 'result') {
            completedLevel = level > 1 ? level - 1 : null;
            activeLevel = level;
        } else if (stage === 'play') {
            completedLevel = null;
            activeLevel = level;
        } else if (stage === 'gameover') {
            completedLevel = total > 0 ? total : level - 1;
            activeLevel = total > 0 ? total + 1 : level;
        } else {
            activeLevel = level;
        }

        return {
            stage: stage,
            currentLevel: level,
            completedLevel: completedLevel,
            activeLevel: activeLevel,
            lastCompletedQuestion: completedLevel ? buildQuestionSnapshot(completedLevel) : null,
            currentQuestion: (activeLevel && total && activeLevel <= total)
                ? buildQuestionSnapshot(activeLevel)
                : null
        };
    }

    function buildMetadata() {
        var ctx = resolveLevelContext();
        var stage = normalizeStageForSave(ctx.stage);

        return {
            schemaVersion: SCHEMA_VERSION,
            gameId: getGameId(),
            userId: getUserId(),
            tokenPresent: getToken() !== '',

            CurrentLevel: ctx.currentLevel,
            TotalScore: readNumericLocal('p', true),
            Xeng: readNumericLocal('s', true),
            HintState: lsGet('h') != null ? String(lsGet('h')) : '',
            Sound: lsGet('sound') != null ? String(lsGet('sound')) : '1',
            CurrentStage: stage,
            CurrentStageId: stageToId(stage),

            totalLevels: getTotalLevels(),
            LastCompletedLevel: ctx.completedLevel || 0,
            LastCompletedQuestion: ctx.lastCompletedQuestion,
            CurrentQuestion: ctx.currentQuestion,

            currentLevelData: ctx.currentQuestion
                ? ctx.currentQuestion.imageFile
                : (ctx.lastCompletedQuestion ? ctx.lastCompletedQuestion.imageFile : null),

            savedAt: new Date().toISOString()
        };
    }

    function parseMetaData(raw) {
        if (!raw) return null;
        if (typeof raw === 'object') return raw;
        if (typeof raw === 'string') {
            var trimmed = raw.trim();
            if (!trimmed) return null;
            return JSON.parse(trimmed);
        }
        return null;
    }

    function extractMetaFromResponse(res) {
        if (!res || res.Status !== 1 || !res.Data) return null;
        var raw = res.Data.MetaData;
        if (raw == null) raw = res.Data.Metadata;
        if (raw == null) raw = res.Data.metadata;
        return parseMetaData(raw);
    }

    function normalizeStage(meta) {
        if (meta.CurrentStage && typeof meta.CurrentStage === 'string') {
            return meta.CurrentStage;
        }
        if ($.isNumeric(meta.CurrentStageId)) {
            var ids = ['start', 'play', 'result', 'gameover', 'share'];
            return ids[parseInt(meta.CurrentStageId, 10)] || 'start';
        }
        if ($.isNumeric(meta.CurrentStage)) {
            var idMap = ['start', 'play', 'result', 'gameover', 'share'];
            return idMap[parseInt(meta.CurrentStage, 10)] || 'start';
        }
        return 'start';
    }

    function clampLevel(lv) {
        var total = getTotalLevels();
        if (lv < 1) lv = 1;
        if (total > 0 && lv > total + 1) lv = total + 1;
        return lv;
    }

    function applyMetadata(meta) {
        if (!meta || typeof meta !== 'object') return false;

        clearGameLocalKeys();

        if ($.isNumeric(meta.CurrentLevel)) {
            lsSet('l', String(clampLevel(parseInt(meta.CurrentLevel, 10))));
        }

        if ($.isNumeric(meta.TotalScore)) {
            writeNumericLocal('p', meta.TotalScore, true);
        }

        if ($.isNumeric(meta.Xeng)) {
            writeNumericLocal('s', meta.Xeng, true);
        }

        if (meta.HintState !== undefined && meta.HintState !== null) {
            lsSet('h', String(meta.HintState));
        }

        if (meta.Sound !== undefined && meta.Sound !== null) {
            lsSet('sound', String(meta.Sound));
        }

        lastLoadedStage = normalizeStageForResume(normalizeStage(meta));

        var level = getLevelIndex();
        var savedQ = meta.CurrentQuestion || meta.LastCompletedQuestion;
        var raw = meta.currentLevelData;

        if (!raw && savedQ && savedQ.imageFile) {
            raw = savedQ.imageFile;
        }

        if (raw && typeof bc !== 'undefined' && bc.data && bc.data.length) {
            var idx = bc.data.indexOf(raw);
            if (idx >= 0 && (!$.isNumeric(meta.CurrentLevel) || meta.CurrentLevel < 1)) {
                lsSet('l', String(idx + 1));
            }
        }

        logInfo('[game-history] applied', {
            level: getLevelIndex(),
            score: readNumericLocal('p', true),
            xeng: readNumericLocal('s', true),
            stage: lastLoadedStage
        });

        return true;
    }

    function postHistory(action, extraFields) {
        var urls = getApiUrls();
        var url = action === 'save' ? urls.save : urls.get;
        var body = new URLSearchParams({
            gameId: getGameId(),
            token: getToken()
        });

        if (extraFields) {
            Object.keys(extraFields).forEach(function (key) {
                body.append(key, extraFields[key]);
            });
        }

        var bodyStr = body.toString();

        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr.onload = function () {
                try {
                    var res = JSON.parse(xhr.responseText);
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(res);
                    } else {
                        reject(new Error('HTTP ' + xhr.status));
                    }
                } catch (e) {
                    reject(e);
                }
            };
            xhr.onerror = function () {
                reject(new Error('network error'));
            };
            xhr.send(bodyStr);
        });
    }

    function saveHistory() {
        if (!isEnabled()) return Promise.resolve(false);

        var meta = buildMetadata();
        return postHistory('save', { metadata: JSON.stringify(meta) })
            .then(function (res) {
                if (res && res.Status === 1) {
                    logInfo('[game-history] saved ok', meta);
                    return true;
                }
                logWarn('[game-history] save rejected', res);
                return false;
            })
            .catch(function (err) {
                logWarn('[game-history] save failed', err);
                return false;
            });
    }

    function scheduleSave() {
        if (!isEnabled()) return;
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(saveHistory, 300);
    }

    function saveOnQuestionComplete() {
        if (!isEnabled()) return;
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(saveHistory, 500);
    }

    function loadHistory(callback) {
        if (!isEnabled()) {
            if (callback) callback(false);
            return;
        }

        postHistory('get')
            .then(function (res) {
                var meta = extractMetaFromResponse(res);
                if (meta && applyMetadata(meta)) {
                    historyLoaded = true;
                    logInfo('[game-history] loaded ok', meta);
                    if (callback) callback(true);
                    return;
                }
                logInfo('[game-history] no cloud save yet', res);
                if (callback) callback(false);
            })
            .catch(function (err) {
                logWarn('[game-history] load failed', err);
                if (callback) callback(false);
            });
    }

    function flushReady(ok) {
        historyReady = true;
        var q = readyQueue.slice();
        readyQueue = [];
        q.forEach(function (cb) { cb(ok); });
    }

    function whenReady(callback) {
        if (typeof callback !== 'function') return;
        if (historyReady) {
            callback(historyLoaded);
        } else {
            readyQueue.push(callback);
        }
    }

    function resumeStage() {
        if (!historyLoaded || !window.BCGame || typeof BCGame.showStage !== 'function') {
            return;
        }

        var stage = normalizeStageForResume(lastLoadedStage || 'start');

        // Đã có tiến trình → vào bài hiện tại (chưa hoàn thành), không dừng ở menu
        if (stage === 'start' && getLevelIndex() > 1) {
            stage = 'play';
        }

        if (stage === 'start' || stage === 'unknown') {
            return;
        }

        if (stage === 'play' || stage === 'gameover') {
            BCGame.showStage(stage);
        }
    }

    function watchStageChanges() {
        var stages = document.getElementById('stages');
        if (!stages || !window.MutationObserver) return;

        new MutationObserver(function () {
            if (!$('#result.stage').hasClass('hide') || !$('#gameover.stage').hasClass('hide')) {
                saveOnQuestionComplete();
            }
        }).observe(stages, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class']
        });
    }

    function bindSaveHooks() {
        $(document).on('click', '#abackhome, .button.btn-replay, .button.btn-continue', function () {
            setTimeout(scheduleSave, 50);
        });
        $(window).on('beforeunload', function () {
            if (isEnabled()) saveHistory();
        });
    }

    function init() {
        if (!isEnabled()) {
            flushReady(false);
            return;
        }

        logInfo('[game-history] init', {
            gid: getGameId(),
            userId: getUserId(),
            api: getApiUrls()
        });

        loadHistory(function (ok) {
            historyLoaded = !!ok;
            flushReady(historyLoaded);
            watchStageChanges();
            bindSaveHooks();
        });
    }

    window.BCGameHistory = {
        SCHEMA_VERSION: SCHEMA_VERSION,
        isEnabled: isEnabled,
        whenReady: whenReady,
        load: loadHistory,
        save: saveHistory,
        resumeStage: resumeStage,
        buildMetadata: buildMetadata,
        buildQuestionSnapshot: buildQuestionSnapshot,
        resolveLevelContext: resolveLevelContext,
        wasLoaded: function () { return historyLoaded; },
        parseTokenPayload: parseTokenPayload,
        getApiUrls: getApiUrls,
        getGameId: getGameId,
        getToken: getToken,
        getUserId: getUserId
    };

    $(init);
}(window, jQuery));
