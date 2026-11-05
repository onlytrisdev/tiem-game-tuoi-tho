/**
 * Arcade cloud save — đồng bộ tiến trình qua gid + token.
 * - LOAD: GetHistoryGame trước UserConfig.Load(); save cloud/local không hợp lệ → game default
 * - SAVE: sau khi game ready + data hợp lệ; theo sự kiện (debounce) + auto 180s
 *
 * Console prefix: [GVHistorySave]
 */
(function (global) {
    'use strict';

    var STORAGE_KEY = 'UserData_wxZombie_16';
    var SYNC_AT_KEY = 'GVHistorySave_syncAt';
    var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
    var GET_URL = 'https://localhost/account/GetHistoryGame';
    var SAVE_INTERVAL_MS = 180000;
    var EVENT_DEBOUNCE_MS = 3000;
    var APPLY_TIMEOUT_MS = 8000;
    var LOG_PREFIX = '[GVHistorySave]';

    var GAME_EVENTS = [
        { key: '2', label: 'GoldChange' },
        { key: '3', label: 'ZuanshiChange1' },
        { key: '10', label: 'HeChengFive' },
        { key: '20', label: 'zhongZhi' },
        { key: '24', label: 'DuanWei' },
        { key: '25', label: 'AutoMerge' },
        { key: '27', label: 'FlushShop' },
        { key: '29', label: 'FlushZhanli' },
        { key: '37', label: 'awardCountDown1' },
        { key: '38', label: 'SeeVideoEnd' }
    ];

    var qs = new URLSearchParams(global.location.search);
    var gameId = qs.get('gid') || '';
    var token = qs.get('token') || '';
    var enabled = !!(gameId && token);

    var serverMeta = null;
    var loadPromise = null;
    var autoSaveTimer = null;
    var debounceTimer = null;
    var bindRetryTimer = null;
    var isSaving = false;
    var applied = false;
    var gameReady = false;
    var eventsBound = false;
    var pendingSaveReason = null;
    var lastUploadFingerprint = '';

    var eventHandler = { onGameEvent: null };

    function log() {
        if (global.console && global.console.info) {
            var args = [LOG_PREFIX].concat(Array.prototype.slice.call(arguments));
            global.console.info.apply(global.console, args);
        }
    }

    function logWarn() {
        if (global.console && global.console.warn) {
            var args = [LOG_PREFIX].concat(Array.prototype.slice.call(arguments));
            global.console.warn.apply(global.console, args);
        }
    }

    function getSyncAt() {
        return parseInt(global.localStorage.getItem(SYNC_AT_KEY) || '0', 10) || 0;
    }

    function setSyncAt(ts) {
        global.localStorage.setItem(SYNC_AT_KEY, String(ts || Date.now()));
    }

    /** Save hợp lệ tối thiểu để game chạy (khớp UserConfig.Load default) */
    function isValidUserData(data) {
        if (!data || typeof data !== 'object') return false;
        if (typeof data.level !== 'number' || data.level < 1) return false;
        if (typeof data.jinbi !== 'number') return false;
        if (typeof data.zuanshi !== 'number') return false;
        if (typeof data.curMaxLevel !== 'number') return false;
        if (typeof data.curLevel !== 'number') return false;
        if (typeof data.zhanli !== 'number') return false;
        if (!Array.isArray(data.shopDatas) || data.shopDatas.length < 1) return false;
        if (!Array.isArray(data.zhiwu)) return false;
        if (typeof data.attack !== 'number') return false;
        if (typeof data.price !== 'number') return false;
        return true;
    }

    function getInMemoryUserData() {
        try {
            if (global.App && global.App.UserConfig && global.App.UserConfig.data) {
                return global.App.UserConfig.data;
            }
        } catch (e) {}
        return null;
    }

    function parseMeta(raw) {
        if (!raw) return null;
        if (typeof raw === 'string') {
            try {
                return JSON.parse(raw);
            } catch (e) {
                return null;
            }
        }
        return typeof raw === 'object' ? raw : null;
    }

    function normalizeMeta(meta) {
        if (!meta) return null;
        if (!meta.userData && meta.upgrades) {
            meta.userData = meta;
        }
        if (meta.userData && !isValidUserData(meta.userData)) {
            return null;
        }
        return isValidUserData(meta.userData) ? meta : null;
    }

    function readLocalUserData() {
        try {
            var raw = global.localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function writeLocalUserData(userData) {
        if (!userData || !isValidUserData(userData)) return false;
        global.localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        return true;
    }

    /** Xóa save local hỏng → UserConfig.Load() tạo default (1000 vàng, level 1, ...) */
    function prepareLocalStorageForLoad() {
        var local = readLocalUserData();
        if (!local) {
            log('LOAD — không có localStorage, game sẽ dùng cấu hình mặc định');
            return false;
        }
        if (isValidUserData(local)) {
            log('LOAD — localStorage hợp lệ');
            return true;
        }
        logWarn('LOAD — localStorage không đủ field, xóa key để UserConfig.Load() tạo game mới');
        global.localStorage.removeItem(STORAGE_KEY);
        return false;
    }

    function snapshotLiveBoard() {
        if (!gameReady) return;
        try {
            if (global.App && global.App.UserConfig && global.App.FightSystem &&
                typeof global.App.FightSystem.getAttacker === 'function') {
                global.App.UserConfig.serilizeZhiWu(global.App.FightSystem.getAttacker());
            }
        } catch (e) {
            logWarn('snapshotLiveBoard bỏ qua', e);
        }
    }

    function syncLocalBeforeCloudSave() {
        if (!gameReady) return;
        var mem = getInMemoryUserData();
        if (!isValidUserData(mem)) {
            logWarn('SAVE — bỏ qua sync local (UserConfig chưa hợp lệ)');
            return;
        }
        snapshotLiveBoard();
        try {
            if (global.App && global.App.UserConfig && typeof global.App.UserConfig.save === 'function') {
                global.App.UserConfig.save();
            }
        } catch (e) {
            logWarn('syncLocalBeforeCloudSave bỏ qua', e);
        }
    }

    function buildUpgrades(userData) {
        return {
            attack: userData.attack || 0,
            price: userData.price || 0,
            level: userData.level || 0,
            jingyan: userData.jingyan || 0,
            curMaxLevel: userData.curMaxLevel || 0,
            curLevel: userData.curLevel || 0,
            unlockMaxid: userData.unlockMaxid || 0,
            zhanli: userData.zhanli || 0,
            range1: userData.range1 || 0,
            bankAward: userData.bankAward || 0
        };
    }

    function buildMetadata(userData) {
        syncLocalBeforeCloudSave();
        userData = userData || readLocalUserData() || getInMemoryUserData();
        if (!isValidUserData(userData)) return null;

        var upgrades = buildUpgrades(userData);
        var savedAt = new Date().toISOString();

        return {
            CurrentLevel: upgrades.curMaxLevel,
            TotalScore: userData.jinbi || 0,
            CurrentStage: upgrades.level,
            savedAt: savedAt,
            zuanshi: userData.zuanshi || 0,
            upgrades: upgrades,
            shopDatas: userData.shopDatas,
            zhuanPanNum: userData.zhuanPanNum || 0,
            zhuanPanTime: userData.zhuanPanTime || 0,
            dateArr: userData.dateArr || [],
            zhiwu: userData.zhiwu,
            userData: userData
        };
    }

    function summarizeMeta(meta) {
        if (!meta) return null;
        return {
            CurrentLevel: meta.CurrentLevel,
            TotalScore: meta.TotalScore,
            CurrentStage: meta.CurrentStage,
            savedAt: meta.savedAt,
            zuanshi: meta.zuanshi,
            upgrades: meta.upgrades,
            plants: meta.zhiwu && meta.zhiwu.length,
            syncAt: getSyncAt()
        };
    }

    function fingerprint(meta) {
        if (!meta || !meta.userData) return '';
        var u = meta.userData;
        return [
            u.jinbi, u.zuanshi, u.level, u.curMaxLevel, u.attack, u.price, u.zhanli,
            (u.zhiwu && u.zhiwu.length) || 0
        ].join('|');
    }

    function shouldApplyServer(meta, localData) {
        if (!meta || !isValidUserData(meta.userData)) return false;

        var serverTs = meta.savedAt ? new Date(meta.savedAt).getTime() : 0;
        var localSyncTs = getSyncAt();

        if (!localData || !isValidUserData(localData)) return true;
        if (serverTs > localSyncTs) return true;
        if (serverTs === localSyncTs && serverTs > 0) return true;

        return false;
    }

    function applyServerMeta(meta) {
        meta = normalizeMeta(meta);
        if (!meta || applied) return false;

        var localData = readLocalUserData();
        log('LOAD — so sánh cloud vs local', {
            server: summarizeMeta(meta),
            localSyncAt: getSyncAt(),
            localValid: isValidUserData(localData)
        });

        if (!shouldApplyServer(meta, localData)) {
            log('LOAD — giữ local / default (cloud không mới hơn hoặc local đã hợp lệ)');
            applied = true;
            return false;
        }

        var userData = meta.userData;
        if (meta.savedAt) {
            userData.loginTime = new Date(meta.savedAt).getTime();
        }

        if (!writeLocalUserData(userData)) {
            logWarn('LOAD — cloud userData không hợp lệ, không ghi localStorage');
            applied = true;
            return false;
        }

        setSyncAt(meta.savedAt ? new Date(meta.savedAt).getTime() : Date.now());
        lastUploadFingerprint = fingerprint(meta);
        applied = true;
        log('LOAD — đã áp dụng cloud → localStorage', summarizeMeta(meta));
        return true;
    }

    function fetchHistory() {
        if (!enabled) return Promise.resolve(null);

        log('LOAD — GetHistoryGame', { gameId: gameId });

        return fetch(GET_URL, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: new URLSearchParams({ gameId: gameId, token: token })
        })
            .then(function (r) {
                log('LOAD — HTTP', r.status);
                return r.json();
            })
            .then(function (res) {
                if (res && res.Status === 1 && res.Data) {
                    var meta = normalizeMeta(parseMeta(res.Data.MetaData));
                    if (meta) {
                        serverMeta = meta;
                        log('LOAD — OK (save cloud hợp lệ)', summarizeMeta(meta));
                        return meta;
                    }
                    logWarn('LOAD — cloud có Data nhưng userData không hợp lệ → coi như game mới');
                } else {
                    log('LOAD — chưa có save cloud (game mới) → UserConfig.Load default');
                }
                serverMeta = null;
                return null;
            })
            .catch(function (err) {
                logWarn('LOAD — lỗi', err);
                serverMeta = null;
                return null;
            });
    }

    function saveNow(reason) {
        if (!enabled) return Promise.resolve(false);
        if (!gameReady) {
            log('SAVE — bỏ qua (game chưa ready)', reason);
            return Promise.resolve(false);
        }

        if (isSaving) {
            pendingSaveReason = reason || pendingSaveReason || 'queued';
            log('SAVE — xếp hàng (đang upload)', pendingSaveReason);
            return Promise.resolve(false);
        }

        var meta = buildMetadata();
        if (!meta) {
            logWarn('SAVE — bỏ qua, dữ liệu không hợp lệ');
            return Promise.resolve(false);
        }

        var fp = fingerprint(meta);
        if (fp === lastUploadFingerprint && reason && reason.indexOf('interval') >= 0) {
            log('SAVE — bỏ qua interval (dữ liệu không đổi)');
            return Promise.resolve(true);
        }

        isSaving = true;
        log('SAVE — SaveHistoryGame', { reason: reason || 'manual', data: summarizeMeta(meta) });

        return fetch(SAVE_URL, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: new URLSearchParams({
                gameId: gameId,
                token: token,
                metadata: JSON.stringify(meta)
            })
        })
            .then(function (r) {
                log('SAVE — HTTP', r.status);
                return r.json();
            })
            .then(function (res) {
                var ok = !!(res && res.Status === 1);
                if (ok) {
                    var ts = meta.savedAt ? new Date(meta.savedAt).getTime() : Date.now();
                    setSyncAt(ts);
                    lastUploadFingerprint = fp;
                    log('SAVE — OK', { reason: reason || 'manual', syncAt: ts });
                } else {
                    logWarn('SAVE — server lỗi', res);
                }
                return ok;
            })
            .catch(function (err) {
                logWarn('SAVE — lỗi mạng', err);
                return false;
            })
            .then(function (ok) {
                isSaving = false;
                if (ok && pendingSaveReason) {
                    var next = pendingSaveReason;
                    pendingSaveReason = null;
                    return saveNow(next);
                }
                return ok;
            });
    }

    function scheduleDebouncedSave(reason) {
        if (!enabled || !gameReady) return;
        pendingSaveReason = reason;
        if (debounceTimer) global.clearTimeout(debounceTimer);
        debounceTimer = global.setTimeout(function () {
            debounceTimer = null;
            var r = pendingSaveReason;
            pendingSaveReason = null;
            saveNow(r);
        }, EVENT_DEBOUNCE_MS);
        log('SAVE — hẹn sau sự kiện', reason, '(' + EVENT_DEBOUNCE_MS / 1000 + 's)');
    }

    function makeEventHandler(label) {
        return function () {
            scheduleDebouncedSave('event:' + label);
        };
    }

    function bindGameEvents() {
        if (!enabled || eventsBound || !gameReady) return;

        var mc = global.App && global.App.MessageCenter;
        if (!mc || typeof mc.addListener !== 'function') {
            if (!bindRetryTimer) {
                bindRetryTimer = global.setTimeout(function () {
                    bindRetryTimer = null;
                    bindGameEvents();
                }, 500);
            }
            return;
        }

        GAME_EVENTS.forEach(function (ev) {
            mc.addListener(ev.key, makeEventHandler(ev.label), eventHandler);
        });

        eventsBound = true;
        log('SAVE — gắn sự kiện game:', GAME_EVENTS.map(function (e) { return e.label; }).join(', '));
    }

    function unbindGameEvents() {
        if (!eventsBound) return;
        var mc = global.App && global.App.MessageCenter;
        if (mc && typeof mc.removeAll === 'function') {
            try {
                mc.removeAll(eventHandler);
            } catch (e) {}
        }
        eventsBound = false;
    }

    function markGameReady() {
        gameReady = true;
        log('Game ready — cho phép cloud save');
    }

    function startAutoSave() {
        if (!enabled || !gameReady) return;

        bindGameEvents();

        if (!autoSaveTimer) {
            autoSaveTimer = global.setInterval(function () {
                saveNow('interval-180s');
            }, SAVE_INTERVAL_MS);
            log('SAVE — auto-save mỗi', SAVE_INTERVAL_MS / 1000, 'giây');
        }
    }

    function stopAutoSave() {
        if (autoSaveTimer) {
            global.clearInterval(autoSaveTimer);
            autoSaveTimer = null;
        }
        if (debounceTimer) {
            global.clearTimeout(debounceTimer);
            debounceTimer = null;
        }
        unbindGameEvents();
        gameReady = false;
        log('SAVE — đã tắt auto-save / sự kiện');
    }

    function applyBeforeLoad() {
        log('LOAD — applyBeforeLoad (trước UserConfig.Load)');

        if (serverMeta) {
            applyServerMeta(serverMeta);
        } else {
            log('LOAD — không có cloud hợp lệ');
        }

        prepareLocalStorageForLoad();
        applied = true;
    }

    function waitForApply(timeoutMs) {
        if (!enabled) return Promise.resolve();

        var waitMs = typeof timeoutMs === 'number' ? timeoutMs : APPLY_TIMEOUT_MS;
        log('LOAD — chờ GetHistoryGame (tối đa', waitMs / 1000, 's)');

        return Promise.race([
            loadPromise || Promise.resolve(),
            new Promise(function (resolve) {
                global.setTimeout(resolve, waitMs);
            })
        ]).then(function () {
            applyBeforeLoad();
        });
    }

    function init() {
        log('Init — enabled:', enabled, '| gameId:', gameId || '(none)');

        if (!enabled) {
            log('Init — tắt (cần ?gid=...&token=...)');
            prepareLocalStorageForLoad();
            return;
        }

        loadPromise = fetchHistory();

        global.addEventListener('beforeunload', function () {
            if (gameReady) {
                syncLocalBeforeCloudSave();
                saveNow('beforeunload');
            }
        });

        global.document.addEventListener('visibilitychange', function () {
            if (global.document.visibilityState === 'hidden' && gameReady) {
                saveNow('tab-hidden');
            }
        });
    }

    init();

    global.GVHistorySave = {
        isEnabled: function () { return enabled; },
        getGameId: function () { return gameId; },
        isValidUserData: isValidUserData,
        applyBeforeLoad: applyBeforeLoad,
        waitForApply: waitForApply,
        markGameReady: markGameReady,
        startAutoSave: startAutoSave,
        stopAutoSave: stopAutoSave,
        bindGameEvents: bindGameEvents,
        saveNow: saveNow,
        buildMetadata: buildMetadata
    };
})(window);
