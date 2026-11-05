/**
 * Arcade integration module for "Đột kích 6".
 *
 * Responsibilities (kept fully separate from the game bundle so gameplay logic
 * stays untouched):
 *   - Cloud save / load of the player's progress via Arcade account APIs
 *     (SaveHistoryGame / GetHistoryGame), keyed by gameId (gid) + token.
 *   - Submitting the reached stage as a score to Arcade on every battle end.
 *   - Clear-data confirm dialog (triggered from Cocos Home side menu).
 *     Leaderboard is opened from the same Cocos menu via HistoryLeaderboard.
 *
 * The game persists its whole state as a single JSON object in
 * localStorage under the key "bl2". We piggy-back on that key so we never have
 * to understand the individual fields: the entire object is stored inside the
 * cloud metadata under "playerData" and restored verbatim.
 */
(function () {
    "use strict";

    var SAVE_URL = "https://localhost/account/SaveHistoryGame";
    var LOAD_URL = "https://localhost/account/GetHistoryGame";
    var STORAGE_KEY = "bl2";
    var CLEAR_BTN_ID = "gv-clear-data-btn";
    var LEADERBOARD_BTN_ID = "gv-leaderboard-btn";
    var HOME_TOOLS_ID = "gv-home-tools";
    var HOME_TOOLS_PANEL_ID = "gv-home-tools-panel";
    var HOME_TOOLS_TOGGLE_ID = "gv-home-tools-toggle";
    var DIALOG_ID = "gv-confirm-dialog";
    var SCORE_OVERLAY_ID = "gv-score-saving-overlay";
    var _directorWasRunning = false;
    var _homeToolsOpen = false;

    function getQueryParams() {
        var qs = new URLSearchParams(location.search);
        return { gid: qs.get("gid"), token: qs.get("token") };
    }

    function isEnabled() {
        var p = getQueryParams();
        return !!(p.gid && p.token);
    }

    function getStorage() {
        if (typeof cc !== "undefined" && cc.sys && cc.sys.localStorage) {
            return cc.sys.localStorage;
        }
        return localStorage;
    }

    function readLocal() {
        try {
            var raw = getStorage().getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function writeLocal(data) {
        try {
            getStorage().setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {}
    }

    function todayString() {
        var d = new Date();
        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    }

    // Default player state, matching the object the game itself builds when no
    // save exists. Used when resetting so the cloud copy is also wiped.
    function getDefaultPlayerData() {
        var nowSec = Math.floor(Date.now() / 1000);
        var today = todayString();
        return {
            sound: true,
            qdiamonda: 0,
            qmoneya: 1560,
            qenergya: 100,
            qlastRecoverEnergyTimea: nowSec,
            qlastHangupTimea: nowSec,
            qlastHangupSaveTimea: nowSec,
            qhangupMoneya: 1000,
            qmaxHpLva: 1,
            qhangupMoneyLva: 1,
            qdamageLva: 1,
            qweaponIDa: 200001,
            qsecondWeaponIDa: 0,
            qunlockWeaponArra: [200001],
            stageID: 1,
            qcurStageIDa: 1,
            qinviteIdGetLista: [],
            qguideIda: 1,
            qshareNuma: 0,
            qhangUpPopa: today,
            qsignDatea: "",
            qsignNuma: 0,
            qfreeMoneyDatea: "",
            qfreeMoneyNuma: 0,
            qlotteryDatea: "",
            qlotteryDataa: null,
            qlotteryNuma: 0,
            qhelmeta: 0,
            qhelmetGuidea: 0,
            qlotteryGuidea: 0,
            qisShowFreeLotterya: false,
            qisShowFreeShielda: false,
            qgunChipa: 0,
            qmustGetChipa: false
        };
    }

    function buildMetadata(data) {
        return JSON.stringify({
            CurrentLevel: data && data.stageID ? data.stageID : 0,
            TotalScore: data && data.qcurStageIDa ? data.qcurStageIDa : 0,
            CurrentStage: data && data.qcurStageIDa ? data.qcurStageIDa : 0,
            savedAt: new Date().toISOString(),
            playerData: data || null
        });
    }

    function saveToCloud(data) {
        saveToCloudAsync(data);
    }

    function saveToCloudAsync(data) {
        return new Promise(function (resolve) {
            if (!isEnabled()) {
                resolve(false);
                return;
            }
            var payload = data || readLocal();
            if (!payload) {
                resolve(false);
                return;
            }
            var p = getQueryParams();
            try {
                fetch(SAVE_URL, {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
                    body: new URLSearchParams({
                        gameId: p.gid,
                        token: p.token,
                        metadata: buildMetadata(payload)
                    })
                })
                    .then(function (r) { return r.json(); })
                    .then(function (res) {
                        console.log("[GVGameSave] saved", res);
                        resolve(true);
                    })
                    .catch(function (err) {
                        console.warn("[GVGameSave] save failed", err);
                        resolve(false);
                    });
            } catch (e) {
                console.warn("[GVGameSave] save error", e);
                resolve(false);
            }
        });
    }

    /**
     * Fetch the cloud save and merge it into localStorage before the game reads
     * it. Keeps whichever copy has more progress (higher stageID); when tied,
     * prefers the more recently saved copy. Always invokes cb (even on failure
     * or when disabled) so the boot flow never stalls.
     */
    function loadFromCloud(cb) {
        var done = false;
        function finish() {
            if (done) return;
            done = true;
            if (cb) cb();
        }
        if (!isEnabled()) { finish(); return; }
        var p = getQueryParams();
        // Safety net so a hung request can't block boot forever.
        var timer = setTimeout(finish, 8000);
        try {
            fetch(LOAD_URL, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
                body: new URLSearchParams({ gameId: p.gid, token: p.token })
            })
                .then(function (r) { return r.json(); })
                .then(function (res) {
                    clearTimeout(timer);
                    try {
                        if (res && res.Status === 1 && res.Data && res.Data.MetaData) {
                            var meta = JSON.parse(res.Data.MetaData);
                            var cloud = meta && meta.playerData ? meta.playerData : null;
                            if (cloud) mergeCloudIntoLocal(cloud, meta.savedAt);
                        } else {
                            console.log("[GVGameSave] no cloud save");
                        }
                    } catch (e) {
                        console.warn("[GVGameSave] parse cloud failed", e);
                    }
                    finish();
                })
                .catch(function (err) {
                    clearTimeout(timer);
                    console.warn("[GVGameSave] load failed", err);
                    finish();
                });
        } catch (e) {
            clearTimeout(timer);
            console.warn("[GVGameSave] load error", e);
            finish();
        }
    }

    function mergeCloudIntoLocal(cloud, cloudSavedAt) {
        var local = readLocal();
        if (!local) {
            writeLocal(cloud);
            console.log("[GVGameSave] restored cloud save (no local)");
            return;
        }
        var localStage = parseInt(local.stageID, 10) || 0;
        var cloudStage = parseInt(cloud.stageID, 10) || 0;
        var useCloud;
        if (cloudStage !== localStage) {
            useCloud = cloudStage > localStage;
        } else {
            // Tie-break on savedAt if the local copy carries one; otherwise keep local.
            useCloud = !!cloudSavedAt && (!local.__savedAt || cloudSavedAt > local.__savedAt);
        }
        if (useCloud) {
            writeLocal(cloud);
            console.log("[GVGameSave] restored cloud save (stage " + cloudStage + ")");
        } else {
            console.log("[GVGameSave] kept local save (stage " + localStage + ")");
        }
    }

    function saveScore(stage) {
        var s = parseInt(stage, 10) || 0;
        try {
            if (typeof GV !== "undefined") {
                new GV().saveScore(s);
                console.log("[GVGameSave] score submitted", s);
            }
        } catch (e) {
            console.warn("[GVGameSave] saveScore failed", e);
        }
    }

    function showScoreSavingOverlay() {
        if (document.getElementById(SCORE_OVERLAY_ID)) return;
        var overlay = document.createElement("div");
        overlay.id = SCORE_OVERLAY_ID;
        overlay.style.cssText =
            "position:fixed;left:0;top:0;right:0;bottom:0;z-index:100001;" +
            "background:rgba(0,0,0,0.45);display:flex;align-items:center;" +
            "justify-content:center;font-family:Arial,Helvetica,sans-serif;pointer-events:all;";

        var box = document.createElement("div");
        box.style.cssText =
            "background:#1e2a45;border-radius:12px;padding:20px 28px;" +
            "box-shadow:0 8px 30px rgba(0,0,0,0.5);text-align:center;";

        var text = document.createElement("div");
        text.textContent = "Đang gửi điểm...";
        text.style.cssText = "color:#fff;font-size:18px;font-weight:bold;letter-spacing:0.5px;";

        box.appendChild(text);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }

    function hideScoreSavingOverlay() {
        var el = document.getElementById(SCORE_OVERLAY_ID);
        if (el && el.parentNode) el.parentNode.removeChild(el);
    }

    function pauseGameStates(showOverlay) {
        _directorWasRunning = false;
        try {
            if (typeof cc !== "undefined") {
                if (cc.audioEngine && cc.audioEngine.pauseAll) cc.audioEngine.pauseAll();
                if (cc.director && cc.director.isPaused && !cc.director.isPaused()) {
                    cc.director.pause();
                    _directorWasRunning = true;
                }
            }
        } catch (e) {
            console.warn("[GVGameSave] pause failed", e);
        }
        if (showOverlay) showScoreSavingOverlay();
    }

    function resumeGameStates() {
        hideScoreSavingOverlay();
        try {
            if (typeof cc !== "undefined") {
                if (_directorWasRunning && cc.director && cc.director.resume) cc.director.resume();
                if (cc.audioEngine && cc.audioEngine.resumeAll) cc.audioEngine.resumeAll();
            }
        } catch (e) {
            console.warn("[GVGameSave] resume failed", e);
        }
        _directorWasRunning = false;
    }

    function getGid() {
        try {
            return getQueryParams().gid || "";
        } catch (e) {
            return "";
        }
    }

    function ensureGvPopupOnTop() {
        var el = document.getElementById("gv_savescore");
        if (el) {
            el.style.zIndex = "2147483646";
            el.style.position = "fixed";
        }
    }

    /**
     * Victory flow: pause game → show Arcade score popup → cloud save → resume → cb.
     * Must run BEFORE opening the reward card screen (ViewWin).
     */
    function submitVictoryScore(cb, stageId) {
        var data = readLocal();
        var stage = parseInt(stageId, 10) || (data && parseInt(data.qcurStageIDa, 10)) || 0;

        function finish() {
            resumeGameStates();
            if (cb) cb();
        }

        function afterCloudSave() {
            saveToCloudAsync(data).then(finish).catch(finish);
        }

        pauseGameStates(false);

        if (typeof GV !== "undefined" && stage > 0 && getGid()) {
            try {
                console.log("[GVGameSave] showing Arcade score popup, stage=" + stage);
                var gv = new GV();
                var closed = false;
                var onClose = function () {
                    if (closed) return;
                    closed = true;
                    console.log("[GVGameSave] Arcade score popup closed");
                    if (data) afterCloudSave();
                    else finish();
                };
                gv.saveScore(stage, onClose);
                setTimeout(ensureGvPopupOnTop, 0);
                setTimeout(ensureGvPopupOnTop, 100);
                setTimeout(function () {
                    if (!closed && !document.getElementById("gv_savescore")) onClose();
                }, 500);
                return;
            } catch (e) {
                console.warn("[GVGameSave] GV.saveScore failed", e);
            }
        }

        pauseGameStates(true);
        if (stage > 0) saveScore(stage);
        if (data) afterCloudSave();
        else finish();
    }

    function saveCloudOnly() {
        var data = readLocal();
        if (data) saveToCloud(data);
    }

    // Called on lose battle end. Win path uses submitVictoryScore on the victory screen.
    function onBattleEnd() {
        var data = readLocal();
        if (!data) return;
        saveToCloud(data);
        saveScore(data.qcurStageIDa);
    }

    function resetAllData() {
        // Overwrite the cloud copy with defaults first so a reload (which pulls
        // from the cloud) can't restore the old progress.
        var def = getDefaultPlayerData();
        saveToCloud(def);
        try {
            getStorage().removeItem(STORAGE_KEY);
        } catch (e) {}
        // Give the save request a brief moment, then restart.
        setTimeout(function () {
            location.reload();
        }, 400);
    }

    // ---- Clear-data UI --------------------------------------------------------

    function showConfirmDialog(message, onOk, onCancel) {
        if (document.getElementById(DIALOG_ID)) return;

        var overlay = document.createElement("div");
        overlay.id = DIALOG_ID;
        overlay.style.cssText =
            "position:fixed;left:0;top:0;right:0;bottom:0;z-index:100000;" +
            "background:rgba(0,0,0,0.55);display:flex;align-items:center;" +
            "justify-content:center;font-family:Arial,Helvetica,sans-serif;";

        var box = document.createElement("div");
        box.style.cssText =
            "max-width:80%;min-width:260px;background:#2b3245;border-radius:12px;" +
            "padding:22px 20px;box-shadow:0 8px 30px rgba(0,0,0,0.5);text-align:center;";

        var text = document.createElement("div");
        text.textContent = message;
        text.style.cssText = "color:#fff;font-size:16px;line-height:1.5;margin-bottom:20px;";

        var btnRow = document.createElement("div");
        btnRow.style.cssText = "display:flex;gap:12px;justify-content:center;";

        var okBtn = document.createElement("button");
        okBtn.textContent = "OK";
        okBtn.style.cssText =
            "flex:1;max-width:120px;padding:10px 0;border:none;border-radius:8px;" +
            "background:#e04a4a;color:#fff;font-size:16px;cursor:pointer;";

        var cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Hủy";
        cancelBtn.style.cssText =
            "flex:1;max-width:120px;padding:10px 0;border:none;border-radius:8px;" +
            "background:#4a5169;color:#fff;font-size:16px;cursor:pointer;";

        function close() {
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }

        okBtn.onclick = function () { close(); if (onOk) onOk(); };
        cancelBtn.onclick = function () { close(); if (onCancel) onCancel(); };

        btnRow.appendChild(okBtn);
        btnRow.appendChild(cancelBtn);
        box.appendChild(text);
        box.appendChild(btnRow);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }

    /** Legacy HTML flyout removed — BXH / clear live in Cocos Home side menu. */
    function initClearDataButton() {
        hideClearDataButton();
    }

    function hideClearDataButton() {
        _homeToolsOpen = false;
        var root = document.getElementById(HOME_TOOLS_ID);
        if (root) root.style.display = "none";
        var panel = document.getElementById(HOME_TOOLS_PANEL_ID);
        if (panel) panel.style.display = "none";
        var clearBtn = document.getElementById(CLEAR_BTN_ID);
        if (clearBtn) clearBtn.style.display = "none";
        var lbBtn = document.getElementById(LEADERBOARD_BTN_ID);
        if (lbBtn) lbBtn.style.display = "none";
    }

    window.GVGameSave = {
        getQueryParams: getQueryParams,
        isEnabled: isEnabled,
        buildMetadata: buildMetadata,
        saveToCloud: saveToCloud,
        saveToCloudAsync: saveToCloudAsync,
        loadFromCloud: loadFromCloud,
        saveScore: saveScore,
        submitVictoryScore: submitVictoryScore,
        saveCloudOnly: saveCloudOnly,
        onBattleEnd: onBattleEnd,
        resetAllData: resetAllData,
        initClearDataButton: initClearDataButton,
        hideClearDataButton: hideClearDataButton,
        showHomeToolsMenu: initClearDataButton,
        hideHomeToolsMenu: hideClearDataButton,
        showConfirmDialog: showConfirmDialog
    };
})();
