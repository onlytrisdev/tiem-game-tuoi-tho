/* Daily rewards screen for PUBG bắn Zombie.
 * The original UIMain handler was disabled and UI_Rewards asset pack is
 * missing from this H5 repository. This view uses the game's own user data,
 * reward configuration and claim methods; no second balance is maintained.
 */
(function (root) {
    "use strict";
    var overlay = null;
    var busy = false;
    var removeListeners = null;

    function gameUser() {
        var game = root.cc && root.cc.find && root.cc.find("Game");
        var data = game && game.getComponent("Data");
        return data && data.userdata;
    }

    function rewardFor(day) {
        try {
            var config = root.cc.ex.config.getConfig("rewards", day);
            if (!config) return null;
            var reward = {};
            ["gold", "diamond", "material"].forEach(function (type) {
                var value = Number(config[type] || 0);
                if (!Number.isSafeInteger(value) || value < 0) throw new Error("Invalid reward");
                if (value > 0) reward[type] = value;
            });
            return Object.keys(reward).length ? reward : null;
        } catch (error) {
            root.console.warn("[Arcade H5] Missing daily reward config for day " + day, error);
            return null;
        }
    }

    function dayNumber(user) {
        if (typeof user.dailyRewardToday === "function") return user.dailyRewardToday();
        var date = new Date();
        return 365 * date.getFullYear() + 30 * date.getMonth() + date.getDate();
    }

    function claimState(user) {
        var claims = user.dailyRewards || {};
        var consecutive = 0;
        while (consecutive < 7 && claims[String(consecutive + 1)]) consecutive++;
        var valid = Object.keys(claims).every(function (key) {
            return /^[1-7]$/.test(key) && Number(key) <= consecutive;
        });
        var next = consecutive + 1;
        var ready = valid && next <= 7 &&
            (consecutive === 0 || dayNumber(user) > Number(claims[String(consecutive)]));
        return {claims: claims, claimed: consecutive, next: next, ready: ready};
    }

    function rewardLabel(reward) {
        if (!reward) return "Không có dữ liệu phần thưởng";
        var labels = [];
        if (reward.gold) labels.push("Vàng x " + reward.gold.toLocaleString("vi-VN"));
        if (reward.diamond) labels.push("Kim cương x " + reward.diamond.toLocaleString("vi-VN"));
        if (reward.material) labels.push("Vật chất x " + reward.material.toLocaleString("vi-VN"));
        return labels.join(" + ");
    }

    function rewardIcon(reward) {
        if (reward && reward.diamond) return "💎";
        if (reward && reward.gold) return "🪙";
        return "🔨";
    }

    function placeOverCanvas(element) {
        var canvas = root.document.getElementById("GameCanvas");
        var box = canvas && canvas.getBoundingClientRect();
        if (!box || !box.width || !box.height) {
            box = {left: 0, top: 0, width: root.innerWidth, height: root.innerHeight};
        }
        element.style.left = box.left + "px";
        element.style.top = box.top + "px";
        element.style.width = box.width + "px";
        element.style.height = box.height + "px";
    }

    function make(tag, className, text) {
        var el = root.document.createElement(tag);
        if (className) el.className = className;
        if (text != null) el.textContent = text;
        return el;
    }

    function close() {
        if (!overlay) return;
        if (removeListeners) removeListeners();
        removeListeners = null;
        overlay.remove();
        overlay = null;
        busy = false;
    }

    function refresh() {
        if (!overlay) return;
        var user = gameUser();
        if (!user) {
            close();
            return;
        }
        var state = claimState(user);
        var list = overlay.querySelector(".gv-dr-list");
        var scroll = list.scrollTop;
        list.textContent = "";
        for (var day = 1; day <= 7; day++) {
            var reward = rewardFor(day);
            var taken = !!state.claims[String(day)];
            var current = day === state.next && state.ready;
            var row = make("div", "gv-dr-reward" + (taken ? " gv-dr-taken" : "") + (current ? " gv-dr-current" : ""));
            var symbol = make("span", "gv-dr-icon", rewardIcon(reward));
            symbol.setAttribute("aria-hidden", "true");
            var detail = make("div", "gv-dr-detail");
            detail.appendChild(make("div", "gv-dr-day", "NGÀY " + day));
            detail.appendChild(make("div", "gv-dr-amount", rewardLabel(reward)));
            row.appendChild(symbol);
            row.appendChild(detail);
            if (taken) row.appendChild(make("span", "gv-dr-status", "ĐÃ NHẬN ✓"));
            list.appendChild(row);
        }
        list.scrollTop = scroll;
        var button = overlay.querySelector(".gv-dr-claim");
        button.disabled = busy || !state.ready || !rewardFor(state.next);
        button.textContent = state.claimed === 7 ? "ĐÃ NHẬN ĐỦ 7 NGÀY" :
            state.ready ? "YÊU CẦU" : "NGÀY MAI";
    }

    function claim() {
        if (busy || !overlay) return;
        var user = gameUser();
        if (!user) return;
        var state = claimState(user);
        var reward = rewardFor(state.next);
        if (!state.ready || !reward) return;
        busy = true;
        refresh();
        try {
            // Mark the claim through the game's own method before crediting.
            // A second click cannot claim the same day twice.
            user.dailyRewardClaim(state.next);
            if (!user.dailyRewards || !user.dailyRewards[String(state.next)]) {
                throw new Error("Daily reward claim was not saved");
            }
            user.add(reward);
            root.console.info("[Arcade H5] Claimed daily reward day " + state.next);
        } catch (error) {
            root.console.error("[Arcade H5] Daily reward claim failed", error);
        } finally {
            busy = false;
            refresh();
        }
    }

    function open() {
        if (overlay) return;
        var user = gameUser();
        if (!user || !root.cc || !root.cc.ex || !root.cc.ex.config) {
            root.console.warn("[Arcade H5] Daily rewards cannot open before game data is ready");
            return;
        }
        try {
            // Mirror the native seven-day cycle reset logic.
            if (typeof user.dailyRewardReset === "function") user.dailyRewardReset();
        } catch (error) {
            root.console.warn("[Arcade H5] Daily cycle reset failed", error);
        }

        var doc = root.document;
        var el = make("section", "gv-daily-rewards");
        el.id = "gv-daily-rewards";
        el.setAttribute("role", "dialog");
        el.setAttribute("aria-modal", "true");
        el.setAttribute("aria-label", "Phần thưởng hàng ngày");
        var head = make("header", "gv-dr-head");
        var back = make("button", "gv-dr-back", "❮");
        back.type = "button";
        back.setAttribute("aria-label", "Quay lại");
        back.addEventListener("click", close);
        head.appendChild(back);
        head.appendChild(make("strong", "gv-dr-title", "PHẦN THƯỞNG 🎁"));
        el.appendChild(head);
        el.appendChild(make("div", "gv-dr-list"));
        var foot = make("footer", "gv-dr-footer");
        var button = make("button", "gv-dr-claim", "YÊU CẦU");
        button.type = "button";
        button.addEventListener("click", claim);
        foot.appendChild(button);
        el.appendChild(foot);

        overlay = el;
        placeOverCanvas(el);
        doc.body.appendChild(el);
        refresh();

        var onResize = function () { if (overlay) placeOverCanvas(overlay); };
        var onKey = function (event) {
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopImmediatePropagation();
                close();
            }
        };
        root.addEventListener("resize", onResize);
        doc.addEventListener("keydown", onKey, true);
        removeListeners = function () {
            root.removeEventListener("resize", onResize);
            doc.removeEventListener("keydown", onKey, true);
        };
        back.focus();
    }

    root.ArcadeDailyRewards = {open: open, close: close};
    var style = root.document.createElement("style");
    style.id = "gv-daily-rewards-style";
    style.textContent =
      "#gv-daily-rewards{position:fixed;z-index:2147482900;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;background:linear-gradient(180deg,#243d69,#35325b 65%,#28243e);color:white;font-family:Arial,sans-serif;touch-action:pan-y;box-shadow:0 0 0 2px #20243a inset;}" +
      "#gv-daily-rewards *{box-sizing:border-box;}" +
      ".gv-dr-head{display:flex;align-items:center;justify-content:center;min-height:9%;position:relative;background:#1e3158;font-size:clamp(16px,3vh,29px);text-shadow:1px 2px #111a31;}" +
      ".gv-dr-back{position:absolute;left:0;top:8%;height:84%;min-width:14%;background:#1274d1;color:white;border:2px solid #184069;font-size:25px;cursor:pointer;}" +
      ".gv-dr-list{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:4% 4% 2%;}" +
      ".gv-dr-reward{position:relative;display:flex;align-items:center;gap:4%;min-height:17%;margin:2.5% 0 4%;padding:3.5%;background:#168efa;border:4px solid #19244b;box-shadow:3px 4px 0 #171d3f;clip-path:polygon(0 0,100% 0,96% 100%,0 100%);}" +
      ".gv-dr-current{background:#e88c3f;}.gv-dr-taken{background:#48648e;opacity:.88;}" +
      ".gv-dr-icon{display:flex;align-items:center;justify-content:center;flex:0 0 22%;aspect-ratio:1;background:#1f558b;border:3px solid #132441;border-radius:16%;font-size:clamp(25px,5vh,46px);box-shadow:0 0 0 2px #51baf3 inset;}" +
      ".gv-dr-detail{min-width:0;display:flex;flex-direction:column;gap:7px;}.gv-dr-day{font-weight:900;font-size:clamp(17px,3.5vh,30px);color:#ffb34b;text-shadow:-1px -1px #593314,1px 2px #593314;}" +
      ".gv-dr-amount{font-weight:800;font-size:clamp(13px,2.4vh,21px);line-height:1.2;}.gv-dr-status{position:absolute;right:8%;top:12%;font-size:12px;font-weight:900;color:#d8ff9f;}" +
      ".gv-dr-footer{min-height:13%;display:flex;align-items:center;justify-content:center;border-top:1px solid #5b5679;background:#282638;}" +
      ".gv-dr-claim{width:48%;min-height:56%;padding:10px 7px;background:#08ae51;border:4px solid #184e35;box-shadow:3px 4px #131d24;color:white;font-weight:900;font-size:clamp(15px,2.7vh,23px);cursor:pointer;text-shadow:1px 2px #124b27;}" +
      ".gv-dr-claim:disabled{background:#6f7384;border-color:#444a5a;cursor:default;}";
    root.document.head.appendChild(style);
})(window);
