/* Arcade duck: account-scoped H5 progress bridge and UI localization. */
(function (root) {
  "use strict";
  var GAME = "tran-chien-cua-vit-con", VERSION = 1;
  var API = "https://localhost/account/", PREFIX = "gv_duck:v1:";
  var OWNER = PREFIX + "owner";
  var query = new URLSearchParams(root.location.search);
  var gid = query.get("gid") || "", token = query.get("token") || "";
  var authenticated = !!(gid && token), store = root.localStorage;
  var ready = false, enabled = false, dirty = false, inFlight = null, last = "", baseline = null, resetNonce = "", timer = null, popup = false;
  var translationMisses = Object.create(null);
  var HIGH_KEY = "perMapBest:v2", pendingScorePopup = false;
  var run = { mode: "", chapter: 0, kills: 0, bosses: 0, damage: 0, seen: false };
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619); return (h >>> 0).toString(16); }
  function userIdentity() {
    if (!authenticated) return "guest";
    var account = "";
    try {
      var p = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      var obj = JSON.parse(root.atob(p));
      account = String(obj.userid || obj.userId || obj.sub || obj.username || "");
    } catch (_) {}
    return "account:" + hash(gid + "|" + (account || token));
  }
  var identity = userIdentity();
  function isGameKey(k) {
    return k === "gd" || /^gb_[^:]{1,160}$/.test(k) ||
      /^redDot(?:Data|ForeverReadData|TodayReadData|TodayReadRefreshTimeMs|Version)$/.test(k) ||
      k === "guideGroupId" || k === "systemSetting";
  }
  function snapshot() {
    var out = {};
    for (var i = 0; i < store.length; i++) {
      var k = store.key(i);
      if (isGameKey(k)) {
        var v = store.getItem(k);
        if (v !== null) out[k] = v;
      }
    }
    return out;
  }
  function validate(keys) {
    if (!keys || typeof keys !== "object" || Array.isArray(keys)) throw Error("Dữ liệu lưu không hợp lệ");
    var result = {}, total = 0;
    Object.keys(keys).forEach(function (k) {
      if (!isGameKey(k) || typeof keys[k] !== "string" || keys[k].length > 1800000) throw Error("Trường lưu không hợp lệ: " + k);
      total += keys[k].length;
      if (total > 4000000) throw Error("Dữ liệu lưu vượt dung lượng");
      result[k] = keys[k];
    });
    return result;
  }
  function apply(keys) {
    keys = validate(keys);
    Object.keys(snapshot()).forEach(function (k) { store.removeItem(k); });
    Object.keys(keys).forEach(function (k) { store.setItem(k, keys[k]); });
  }
  function own(k) { return PREFIX + k + ":" + identity; }
  function get(k) { return store.getItem(own(k)); }
  function put(k, v) { store.setItem(own(k), v); }
  function switchPlayer() {
    var prev = store.getItem(OWNER);
    if (prev === identity) return;
    if (prev !== null) {
      store.setItem(PREFIX + "cache:" + prev, JSON.stringify(snapshot()));
    } else {
      store.setItem(PREFIX + "legacyBackup", JSON.stringify(snapshot()));
    }
    Object.keys(snapshot()).forEach(function (k) { store.removeItem(k); });
    var cached = store.getItem(PREFIX + "cache:" + identity);
    if (cached) try { apply(JSON.parse(cached)); } catch (err) { console.warn("[Arcade] Cache bị lỗi:", err); }
    else if (!authenticated && prev === null) {
      var old = store.getItem(PREFIX + "legacyBackup");
      if (old) try { apply(JSON.parse(old)); } catch (_) {}
    }
    store.setItem(OWNER, identity);
  }
  function request(path, params) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", API + path, true);
      xhr.timeout = 8000;
      xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.onload = function () {
        if (xhr.status < 200 || xhr.status > 299) { reject(Error("Arcade HTTP " + xhr.status)); return; }
        try {
          var r = JSON.parse(xhr.responseText);
          if (!r || (r.Status != null && Number(r.Status) !== 1) || r.success === false || r.Success === false)
            throw Error("Arcade từ chối yêu cầu");
          resolve(r);
        } catch (err) { reject(err); }
      };
      xhr.onerror = xhr.ontimeout = function () { reject(Error("Không truy cập được Arcade")); };
      xhr.send(new URLSearchParams(params).toString());
    });
  }
  function decode(body) {
    var data = body.Data != null ? body.Data : body.data;
    if (typeof data === "string") data = JSON.parse(data);
    var raw = data && (data.MetaData != null ? data.MetaData : data.metadata != null ? data.metadata : data.Metadata);
    if (typeof raw === "string") raw = raw ? JSON.parse(raw) : null;
    if (!raw || Array.isArray(raw) && !raw.length || typeof raw === "object" && !Object.keys(raw).length)
      return { meta: null, fingerprint: "" };
    if (raw.Game !== GAME || raw.SchemaVersion !== VERSION || !raw.Record || !raw.Record.localKeys)
      throw Error("Metadata Arcade khác phiên bản, không ghi đè");
    validate(raw.Record.localKeys);
    return { meta: raw, fingerprint: JSON.stringify(raw) };
  }
  function cloudGet() { return request("GetHistoryGame", { gameId: gid, token: token }).then(decode); }
  function asInt(x) { x = Number(x); return Number.isSafeInteger(x) && x >= 0 ? x : 0; }
  function readState(keys) {
    var rootSave = null;
    try {
      var key = Object.keys(keys).find(function (k) { return /^gb_/.test(k); }) || "gd";
      rootSave = JSON.parse(keys[key] || "{}");
    } catch (_) {}
    return rootSave && typeof rootSave === "object" ? rootSave : {};
  }
  function bestRecords() {
    try {
      var saved = JSON.parse(get(HIGH_KEY) || "{}");
      if (saved && typeof saved === "object" && !Array.isArray(saved)) return saved;
    } catch (_) {}
    return {};
  }
  function totalScore(best) {
    return Object.keys(best).reduce(function (sum, key) {
      var v = best[key];
      return sum + (v && Number.isSafeInteger(v.score) && v.score >= 0 ? v.score : 0);
    }, 0);
  }
  function metadata(keys) {
    var game = readState(keys), progress = game.TrunkInstance || {}, battle = game.bagLike || {};
    var active = battle.battleDatas && battle.battleDatas.TRUNK_INSTANCE || {};
    var best = bestRecords();
    return {
      Game: GAME, SchemaVersion: VERSION, ResetNonce: resetNonce,
      SavedAt: new Date().toISOString(), CurrentLevel: asInt(progress.historyId || active.chapterId),
      CurrentStage: asInt(progress.historyRoundIdx || active.roundIdx),
      ActiveBattle: { ChapterId: asInt(active.chapterId), RoundIndex: asInt(active.roundIdx) },
      ScoreFormula: "per-map-mode-best-v2", BestPerMap: best, TotalScore: totalScore(best),
      ActiveScoringRun: run,
      Record: { localKeys: keys }
    };
  }
  function pending() {
    dirty = true; put("dirty", "1"); put("lastChanged", String(Date.now()));
  }
  function changed() {
    if (!ready) return;
    var current = JSON.stringify(snapshot());
    if (current !== last) { last = current; pending(); }
  }
  function flush() {
    if (!ready || !enabled || !dirty || popup) return Promise.resolve(false);
    if (inFlight) return inFlight;
    inFlight = (async function () {
      try {
        var remote = await cloudGet();
        if (remote.fingerprint !== baseline) {
          enabled = false;
          throw Error("Dữ liệu đã thay đổi ở phiên khác, dừng ghi đè");
        }
        var keys = snapshot(), revision = JSON.stringify(keys);
        var meta = metadata(keys);
        await request("SaveHistoryGame", {
          gameId: gid, token: token, metadata: JSON.stringify(meta), score: String(meta.TotalScore)
        });
        baseline = JSON.stringify(meta);
        if (JSON.stringify(snapshot()) === revision) {
          dirty = false; put("dirty", "0");
        }
        return true;
      } catch (error) {
        console.warn("[Arcade] SaveHistoryGame:", error.message);
        return false;
      }
    })().finally(function () { inFlight = null; });
    return inFlight;
  }
  async function init() {
    switchPlayer();
    resetNonce = get("nonce") || "";
    dirty = get("dirty") === "1";
    if (authenticated) {
      try {
        var cloud = await cloudGet();
        if (cloud.meta) {
          var remoteTime = Date.parse(cloud.meta.SavedAt || "") || 0;
          var localTime = Number(get("lastChanged") || 0);
          if (!(dirty && cloud.meta.ResetNonce === resetNonce && localTime > remoteTime)) {
            apply(cloud.meta.Record.localKeys);
            if (cloud.meta.BestPerMap && typeof cloud.meta.BestPerMap === "object" && !Array.isArray(cloud.meta.BestPerMap))
              put(HIGH_KEY, JSON.stringify(cloud.meta.BestPerMap));
            if (cloud.meta.ActiveScoringRun && typeof cloud.meta.ActiveScoringRun === "object")
              put("run", JSON.stringify(cloud.meta.ActiveScoringRun));
            resetNonce = String(cloud.meta.ResetNonce || "");
            put("nonce", resetNonce);
            dirty = false; put("dirty", "0");
          }
        } else if (Object.keys(snapshot()).length) dirty = true;
        baseline = cloud.fingerprint;
        enabled = true;
      } catch (error) {
        console.warn("[Arcade] Không thể GetHistoryGame; chỉ dùng dữ liệu local:", error.message);
      }
    }
    try {
      var savedRun = JSON.parse(get("run") || "null");
      if (savedRun && typeof savedRun === "object" &&
          (savedRun.mode === "TRUNK_INSTANCE" || savedRun.mode === "TRUNK_ELITE") &&
          Number.isSafeInteger(savedRun.chapter) && savedRun.chapter > 0)
        run = { mode: savedRun.mode, chapter: savedRun.chapter,
          kills: asInt(savedRun.kills), bosses: asInt(savedRun.bosses),
          damage: asInt(savedRun.damage), seen: !!savedRun.seen };
    } catch (_) {}
    ready = true; last = JSON.stringify(snapshot());
    if (dirty) pending();
    timer = root.setInterval(function () { changed(); if (dirty) flush(); }, 2500);
    root.addEventListener("pagehide", changed);
    root.document.addEventListener("visibilitychange", function () { if (root.document.visibilityState === "hidden") { changed(); flush(); } });
    if (enabled && dirty) flush();
    return true;
  }
  // Actual native campaign modes: NORMAL and ELITE. No fabricated EASY/HARD modes.
  // One personal best per chapter and actual mode. Replays never accumulate.
  function campaignMode(value) {
    return value === "TRUNK_INSTANCE" || value === "TRUNK_ELITE" ? value : "";
  }
  function onRoundStart(info) {
    if (!info || !campaignMode(info.fightType)) { run.seen = false; return; }
    var mode = campaignMode(info.fightType), chapter = asInt(info.chapterId);
    if (!run.seen || run.mode !== mode || run.chapter !== chapter || asInt(info.roundIdx) === 0) {
      run = { mode: mode, chapter: chapter, kills: 0, bosses: 0, damage: 0, seen: true };
      put("run", JSON.stringify(run));
      if (ready) pending();
    }
  }
  function onMonsterDie(info) {
    if (!run.seen || !info || info.noReward) return;
    run.kills++;
    if (info.monsterType === "BOSS") run.bosses++;
    put("run", JSON.stringify(run));
    if (ready && run.kills % 5 === 0) pending();
  }
  function validNumber(n) {
    return typeof n === "number" && Number.isFinite(n) && n >= 0 ? n : null;
  }
  function onBattleEnd(info) {
    if (!info || !campaignMode(info.fightType)) return;
    var mode = campaignMode(info.fightType), chapter = asInt(info.chapterId);
    if (!chapter) return;
    if (!run.seen || run.mode !== mode || run.chapter !== chapter) onRoundStart(info);
    var damage = validNumber(info.totalHurt);
    if (damage !== null) run.damage += damage;
    put("run", JSON.stringify(run));
    var rounds = asInt(info.roundsCleared);
    // Bonus ceiling 18; each cleared wave earns 20, keeping progress paramount.
    var bonuses = {
      kills: Math.min(10, run.kills),
      bosses: Math.min(2, run.bosses),
      damage: Math.min(3, Math.floor(Math.log10(1 + run.damage))),
      hp: validNumber(info.homeHp) > 0 ? 1 : 0,
      shield: validNumber(info.homeShield) > 0 ? 1 : 0,
      noAdRevive: info.adReviveTimes === 0 ? 1 : 0
    };
    var bonusTotal = Object.keys(bonuses).reduce(function(sum, key) { return sum + bonuses[key]; }, 0);
    var score = rounds * 20 + bonusTotal;
    var key = mode + ":" + chapter, best = bestRecords(), previous = best[key];
    if (!previous || score > previous.score) {
      best[key] = { mode: mode, chapter: chapter, rounds: rounds, score: score,
        kills: run.kills, bosses: run.bosses, damage: Math.round(run.damage),
        hp: validNumber(info.homeHp), shield: validNumber(info.homeShield),
        adReviveTimes: info.adReviveTimes, bonuses: bonuses };
      put(HIGH_KEY, JSON.stringify(best));
      pending();
      pendingScorePopup = true;
    }
    changed();
  }
  function onResultShown() {
    run.seen = false;
    put("run", JSON.stringify(run));
    pending();
    changed();
    if (!pendingScorePopup || popup) { flush(); return; }
    pendingScorePopup = false;
    var points = totalScore(bestRecords());
    if (points <= 0 || typeof root.GV !== "function") { flush(); return; }
    popup = true;
    root.setTimeout(function () {
      function close() { popup = false; flush(); }
      try { new root.GV().saveScore(points, close); }
      catch (err) { console.warn("[Arcade] Gửi điểm:", err); close(); }
    }, 600);
  }
  function scoreDetails() { return { total: totalScore(bestRecords()), bestPerMap: bestRecords() }; }
  // Display-only translation: code keys, asset names and protobuf data remain untouched.
  var dictionary = {
    "请选择增益":"Chọn bổ trợ","历史最高波次":"Đợt cao nhất","历史最高波次：":"Đợt cao nhất: ",
    "狼齿匕首":"Dao Nanh Sói","坚守之盾":"Khiên Kiên Cố","箭矢强化":"Cường hóa tên",
    "暴击伤害+10%":"ST chí mạng +10%","英雄免伤率+10%":"Giảm ST tướng +10%",
    "反击弓箭伤害+25%":"ST cung phản kích +25%","请选择一个增益":"Chọn một bổ trợ",
    "剩余次数":"Lượt còn","换一批":"Đổi lượt","全部要":"Nhận tất cả","更高概率出高级技能":"Tăng tỉ lệ nhận kỹ năng xịn",
    "推荐":"Đề cử","增益":"Bổ trợ","确认":"Xác nhận","取消":"Hủy","确定":"OK","继续":"Tiếp tục",
    "返回":"Quay lại","开始":"Bắt đầu","开始游戏":"Vào game","战斗":"Chiến đấu","继续游戏":"Chơi tiếp",
    "重试":"Thử lại","重新开始":"Chơi lại","退出":"Thoát","设置":"Cài đặt","音乐":"Nhạc",
    "音效":"Âm thanh","声音":"Âm thanh","关闭":"Đóng","开启":"Bật","打开":"Mở","跳过":"Bỏ qua",
    "领取":"Nhận","领取奖励":"Nhận thưởng","奖励":"Phần thưởng","免费":"Miễn phí","免费领取":"Nhận miễn phí",
    "观看广告":"Xem quảng cáo","看广告":"Xem QC","广告":"Quảng cáo","双倍":"Gấp đôi","双倍领取":"Nhận x2",
    "复活":"Hồi sinh","免费复活":"Hồi sinh miễn phí","血量":"Máu","生命":"Sinh lực","攻击":"Tấn công",
    "攻击力":"Công kích","防御":"Phòng thủ","防御力":"Phòng thủ","速度":"Tốc độ","攻速":"Tốc đánh",
    "暴击":"Chí mạng","暴击率":"Tỉ lệ chí mạng","暴击伤害":"Sát thương chí mạng","伤害":"Sát thương",
    "伤害减免":"Giảm sát thương","英雄免伤率":"Giảm ST cho tướng","反击弓箭伤害":"ST cung phản kích",
    "闪避":"Né tránh","闪避率":"Tỉ lệ né","回复":"Hồi phục","生命恢复":"Hồi máu","吸血":"Hút máu",
    "穿透":"Xuyên giáp","护盾":"Lá chắn","格挡":"Chặn đòn","反击":"Phản kích","反伤":"Phản sát thương",
    "金币":"Vàng","银币":"Bạc","钻石":"Kim cương","货币":"Tiền","商店":"Cửa hàng","购买":"Mua",
    "升级":"Nâng cấp","强化":"Cường hóa","升星":"Tăng sao","装备":"Trang bị","武器":"Vũ khí",
    "合成":"Ghép","背包":"Túi đồ","英雄":"Tướng","角色":"Nhân vật","技能":"Kỹ năng",
    "稀有":"Hiếm","普通":"Thường","史诗":"Sử thi","传说":"Huyền thoại","神话":"Thần thoại",
    "挑战":"Thử thách","关卡":"Màn","章节":"Chương","地图":"Bản đồ","波次":"Đợt",
    "当前波次":"Đợt hiện tại","最高波次":"Đợt cao nhất","第一章":"Chương 1","第二章":"Chương 2",
    "胜利":"Chiến thắng","失败":"Thất bại","通关":"Qua màn","战斗胜利":"Chiến thắng",
    "战斗失败":"Thất bại","击杀":"Tiêu diệt","怪物":"Quái","首领":"Trùm","精英":"Tinh anh",
    "今日":"Hôm nay","每日":"Hằng ngày","每日任务":"Nhiệm vụ ngày","任务":"Nhiệm vụ",
    "签到":"Điểm danh","排行榜":"BXH","排名":"Xếp hạng","战力":"Lực chiến","等级":"Cấp",
    "等级提升":"Lên cấp","经验":"Kinh nghiệm","离线收益":"Thưởng offline","挂机":"Treo máy",
    "成就":"Thành tựu","邮件":"Thư","活动":"Sự kiện","图鉴":"Sổ tay","收藏品":"Bộ sưu tập",
    "无尽模式":"Vô tận","每日首领":"Boss ngày","普通模式":"Thường","困难模式":"Khó",
    "剩余时间":"Thời gian còn","时间":"Thời gian","秒":"giây","分钟":"phút","小时":"giờ",
    "天":"ngày","年":"năm","月":"tháng","周":"tuần","次":"lượt",
    "点击领取":"Nhấn để nhận","点击继续":"Nhấn để tiếp tục","点击任意位置继续":"Chạm để tiếp tục",
    "是否继续上次战斗？":"Tiếp tục trận trước?","继续上次战斗":"Tiếp tục trận trước",
    "本次获得":"Lần này nhận","总伤害":"Tổng sát thương","击杀怪物":"Quái tiêu diệt",
    "基础属性":"Chỉ số cơ bản","战斗力":"Lực chiến","战斗加速":"Tăng tốc trận",
    "更多游戏":"Thêm game","隐私政策":"Chính sách bảo mật","用户协议":"Điều khoản sử dụng"
  };
  // Extra display-only translations for FairyGUI and onboarding, never save IDs.
  var moreUIText = {
  "鱼人大军来袭": "Quân người cá tấn công",
  "鱼人大军": "Quân người cá",
  "鱼人": "Người cá",
  "来袭": "Tấn công",
  "守卫小岛": "Bảo vệ đảo",
  "反曲弓": "Cung Cong",
  "拖动上阵反曲弓": "Kéo Cung Cong vào trận",
  "拖动反曲弓上阵": "Kéo Cung Cong vào trận",
  "鱼人大军来袭，拖动上阵反曲弓，守卫小岛！": "Người cá đến! Kéo Cung Cong vào trận giữ đảo!",
  "鱼人大军来袭，拖动反曲弓上阵，守卫小岛！": "Người cá đến! Kéo Cung Cong vào trận giữ đảo!",
  "挣扎无用，整个小岛都会被我的鱼人军团吞噬！": "Chống cự vô ích! Quân ta sẽ chiếm cả đảo!",
  "挣扎无用": "Chống cự vô ích",
  "整体": "Toàn bộ",
  "《健康游戏忠告》": "Lưu ý chơi game lành mạnh",
  "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。": "Nói không với game xấu và game lậu. Tự bảo vệ mình, cảnh giác lừa đảo.",
  "适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。": "Chơi game điều độ, tránh quá đà. Sắp xếp thời gian hợp lý, sống lành mạnh.",
  "资源加载中......": "Đang tải tài nguyên...",
  "资源加载中...": "Đang tải tài nguyên...",
  "获取资源": "Đang lấy tài nguyên",
  "加载配置": "Đang tải cấu hình",
  "加载资源": "Đang tải tài nguyên",
  "加载字体": "Đang tải phông chữ",
  "登录中": "Đang đăng nhập",
  "进入游戏中": "Đang vào game",
  "获取角色数据": "Đang tải dữ liệu nhân vật",
  "天命宝库": "Kho Báu Thiên Mệnh",
  "小小冲鸭": "Vịt Con Xung Trận",
  "幽灵船长": "Thuyền Trưởng Ma",
  "涡轮增鸭": "Vịt Tăng Tốc",
  "开战": "Xuất trận",
  "刷新": "Làm mới",
  "暂存处": "Kho Tạm",
  "获得全部": "Nhận tất cả",
  "试用": "Dùng thử",
  "海盗之岛": "Đảo Hải Tặc",
  "闪电图腾": "Tổ Sét",
  "小火龙吐息": "Hơi Rồng",
  "继续拖动上阵闪电图腾。": "Kéo Tổ Sét vào đội hình.",
  "继续拖动上阵闪电图腾": "Kéo Tổ Sét vào đội hình",
  "这是我们的家园！你和鱼人别想前进一步！": "Đây là nhà ta! Người cá đừng hòng tiến lên!",
  "第2波解锁": "Mở khóa ở đợt 2",
  "第1波解锁": "Mở khóa ở đợt 1",
  "解锁成功": "Mở khóa thành công",
  "获得奖励": "Nhận thưởng",
  "免费刷新": "Làm mới miễn phí",
  "开始战斗": "Vào trận",
  "战斗开始": "Bắt đầu chiến đấu",
  "战斗结束": "Kết thúc trận",
  "战斗中": "Đang chiến đấu",
  "自动战斗": "Tự động chiến đấu",
  "继续挑战": "Tiếp tục thử thách",
  "加速": "Tăng tốc",
  "停止": "Dừng",
  "跳过剧情": "Bỏ qua cốt truyện",
  "解锁": "Mở khóa",
  "暂停": "Tạm dừng",
  "放置": "Đặt vào",
  "上阵": "Ra trận",
  "下阵": "Rút khỏi đội",
  "拖动上阵": "Kéo vào đội hình",
  "拖动": "Kéo",
  "点击": "Chạm",
  "生命值": "Sinh lực",
  "当前生命": "Máu hiện tại",
  "关卡解锁": "Mở khóa màn",
  "波次解锁": "Mở khóa đợt",
  "请稍候": "Vui lòng chờ",
  "保存中": "Đang lưu",
  "加载中": "Đang tải",
  "确定要退出吗？": "Bạn có chắc muốn thoát?",
  "恭喜获得": "Chúc mừng nhận được",
  "已达上限": "Đã đạt giới hạn",
  "数量不足": "Không đủ số lượng",
  "资源不足": "Không đủ tài nguyên",
  "免费试用": "Dùng thử miễn phí",
  "已解锁": "Đã mở khóa",
  "未解锁": "Chưa mở khóa",
  "无法挑战": "Chưa thể khiêu chiến"
};
  Object.keys(moreUIText).forEach(function (key) { dictionary[key] = moreUIText[key]; });
  // Runtime UI translations across code and FairyGUI; display only.
  var runtimeUITranslations = {
  "已获得技能": "Kỹ năng đã có",
  "已获得": "Đã nhận",
  "技能": "Kỹ năng",
  "藏品": "Bộ sưu tập",
  "收藏品": "Bộ sưu tập",
  "退出战斗": "Thoát trận",
  "继续战斗": "Tiếp tục trận",
  "退出挑战": "Thoát thử thách",
  "退出挑战将不会获得任何奖励": "Thoát thử thách sẽ không nhận được thưởng",
  "确认退出": "Xác nhận thoát",
  "选择这个强力的词条，让战斗如虎添翼！": "Chọn bổ trợ mạnh để chiến đấu dễ dàng hơn!",
  "选择这个强力的词条": "Chọn bổ trợ mạnh này",
  "词条": "Bổ trợ",
  "选择": "Chọn",
  "点击选择": "Chạm để chọn",
  "请选择": "Hãy chọn",
  "推荐": "Đề cử",
  "电流强化": "Cường hóa điện",
  "闪电链传导次数+1": "Sét liên hoàn thêm 1 lần",
  "闪电链传导次数": "Số lần dẫn điện",
  "闪电链": "Sét liên hoàn",
  "闪电": "Sấm sét",
  "伤害": "Sát thương",
  "连射": "Bắn liên tiếp",
  "穿透": "Xuyên phá",
  "分裂": "Phân tách",
  "箭矢连射": "Tên liên hoàn",
  "箭矢穿透": "Tên xuyên phá",
  "箭矢分裂": "Tên phân tách",
  "箭矢": "Mũi tên",
  "暴击": "Chí mạng",
  "暴击伤害": "Sát thương chí mạng",
  "攻击力": "Sức tấn công",
  "攻击速度": "Tốc đánh",
  "伤害提升": "Tăng sát thương",
  "坚守到": "Trụ đến",
  "坚持到": "Trụ đến",
  "即可体验": "để trải nghiệm",
  "召唤神龙": "Triệu hồi Thần Long",
  "神龙": "Thần Long",
  "图腾": "Vật tổ",
  "第2波": "Đợt 2",
  "波数": "Số đợt",
  "当前波次": "Đợt hiện tại",
  "金": "Vàng",
  "紫": "Tím",
  "蓝": "Lam",
  "绿": "Lục",
  "普通": "Thường",
  "稀有": "Hiếm",
  "史诗": "Sử thi",
  "传说": "Huyền thoại",
  "神话": "Thần thoại",
  "战斗": "Chiến đấu",
  "战斗中": "Đang chiến đấu",
  "备战": "Chuẩn bị",
  "开战": "Xuất trận",
  "退出": "Thoát",
  "继续": "Tiếp tục",
  "挑战": "Thử thách",
  "关卡": "Màn",
  "章节": "Chương",
  "主线": "Cốt truyện",
  "精英": "Tinh anh",
  "无尽模式": "Chế độ vô tận",
  "装备": "Trang bị",
  "道具": "Vật phẩm",
  "商店": "Cửa hàng",
  "商店购买": "Mua tại cửa hàng",
  "商店刷新": "Làm mới cửa hàng",
  "商店免费宝箱": "Rương cửa hàng miễn phí",
  "购买": "Mua",
  "刷新": "Làm mới",
  "领取": "Nhận",
  "已领取": "Đã nhận",
  "可领取": "Có thể nhận",
  "全部获得": "Nhận hết",
  "获得全部": "Nhận tất cả",
  "免费": "Miễn phí",
  "广告解锁": "Mở bằng quảng cáo",
  "广告获得武器": "Xem QC nhận vũ khí",
  "广告合成武器": "Xem QC để ghép vũ khí",
  "广告武器到缓存区": "Xem QC chuyển vũ khí vào kho tạm",
  "是否观看视频": "Xem quảng cáo?",
  "是否观看视频获得强力装备": "Xem QC để nhận trang bị mạnh?",
  "是否观看视频获得强力空格": "Xem QC để mở ô mạnh?",
  "已解锁": "Đã mở khóa",
  "未解锁": "Chưa mở khóa",
  "解锁新装备": "Mở trang bị mới",
  "解锁装备格子": "Mở ô trang bị",
  "解锁拖动缓存区": "Mở kho tạm",
  "暂存处": "Kho tạm",
  "暂存区": "Kho tạm",
  "拖动到战斗区获取装备": "Kéo vào khu chiến đấu để nhận trang bị",
  "至少上阵一个装备后可开战": "Cần trang bị ít nhất 1 món để ra trận",
  "开战后将不再进入备战阶段": "Xuất trận sẽ kết thúc giai đoạn chuẩn bị",
  "上阵成功": "Ra trận thành công",
  "上阵": "Ra trận",
  "下阵": "Rút quân",
  "拖动": "Kéo",
  "拖动上阵": "Kéo vào đội hình",
  "普通装备盒": "Hộp trang bị thường",
  "豪华装备盒": "Hộp trang bị cao cấp",
  "快速挂机": "Treo máy nhanh",
  "金币副本": "Ải kiếm vàng",
  "金币": "Vàng",
  "银币": "Bạc",
  "钻石": "Kim cương",
  "获取银币": "Nhận bạc",
  "道具不足": "Không đủ vật phẩm",
  "资源不足": "Không đủ tài nguyên",
  "次数不足": "Không đủ lượt",
  "今日次数不足": "Hết lượt hôm nay",
  "剩余次数": "Lượt còn",
  "今日剩余次数已用完": "Đã hết lượt hôm nay",
  "剩余挑战次数": "Lượt thử thách còn",
  "挑战次数": "Lượt thử thách",
  "在线奖励": "Thưởng online",
  "累计奖励": "Thưởng tích lũy",
  "每日任务": "Nhiệm vụ ngày",
  "活动奖励": "Thưởng sự kiện",
  "等级礼包": "Quà cấp độ",
  "分享有礼": "Quà chia sẻ",
  "分享成功": "Chia sẻ thành công",
  "今日广告次数已达上限": "Hết lượt xem quảng cáo hôm nay",
  "历史最高波次": "Đợt cao nhất",
  "最高记录": "Kỷ lục cao nhất",
  "已通关": "Đã qua màn",
  "战斗结束": "Trận kết thúc",
  "战斗胜利": "Chiến thắng",
  "战斗失败": "Thất bại",
  "时间结束": "Hết thời gian",
  "时间过半": "Qua nửa thời gian",
  "双方伤害提升": "Cả hai bên tăng sát thương",
  "双方伤害翻倍": "Cả hai bên x2 sát thương",
  "完成波数": "Số đợt hoàn thành",
  "护盾": "Lá chắn",
  "血量": "Máu",
  "防御": "Phòng thủ",
  "闪避": "Né tránh",
  "无敌": "Bất tử",
  "首领": "Trùm",
  "确认": "Xác nhận",
  "取消": "Hủy",
  "确定": "Đồng ý",
  "返回": "Quay lại",
  "暂停": "Tạm dừng",
  "跳过": "Bỏ qua",
  "新藏品解锁": "Mở bộ sưu tập mới",
  "收藏品十连": "Mở bộ sưu tập x10",
  "收藏品单抽": "Mở bộ sưu tập x1",
  "已满级": "Đã đạt cấp tối đa",
  "当前已经最大等级": "Đã đạt cấp tối đa",
  "请先升级其他属性": "Hãy nâng thuộc tính khác trước",
  "技能尚未完成充能": "Kỹ năng chưa hồi xong",
  "主动": "Chủ động",
  "被动": "Bị động",
  "光环": "Hào quang",
  "排行榜": "BXH",
  "排名": "Xếp hạng",
  "段位": "Hạng",
  "赛季已结束": "Mùa giải đã kết thúc",
  "匿名用户": "Người chơi ẩn danh",
  "未上榜": "Chưa có thứ hạng",
  "虚位以待": "Đang chờ người chơi",
  "青铜": "Đồng",
  "白银": "Bạc",
  "黄金": "Vàng",
  "战力": "Lực chiến",
  "总伤害": "Tổng sát thương",
  "邮件": "Thư",
  "没有邮件可以删除": "Không có thư để xóa",
  "没有奖励可领取": "Không có thưởng để nhận",
  "皮肤": "Trang phục",
  "解锁新皮肤": "Mở trang phục mới",
  "皮肤免费宝箱": "Rương trang phục miễn phí",
  "道具补给": "Tiếp tế vật phẩm",
  "补给": "Tiếp tế",
  "合成": "Ghép",
  "装配": "Lắp",
  "装配成功": "Lắp thành công",
  "升级": "Nâng cấp",
  "等级": "Cấp",
  "技能升级": "Nâng cấp kỹ năng",
  "天赋升级成功": "Nâng cấp thiên phú thành công",
  "最高伤害": "Sát thương cao nhất",
  "击杀": "Hạ gục",
  "击杀进度": "Tiến độ hạ quái",
  "普通领取": "Nhận thường",
  "今日": "Hôm nay",
  "每日": "Hằng ngày",
  "明日": "Ngày mai",
  "小时": "giờ",
  "分钟": "phút",
  "刚刚": "Vừa xong",
  "登录失败": "Đăng nhập thất bại",
  "请检查网络后重试": "Kiểm tra mạng rồi thử lại",
  "确定要退出吗？": "Bạn có chắc muốn thoát?",
  "获得新装备": "Nhận trang bị mới",
  "获得奖励": "Nhận thưởng",
  "每个装备碎片的概率": "Xác suất mỗi mảnh trang bị",
  "剩余免广告次数": "Số lượt miễn QC còn",
  "已售罄": "Đã bán hết",
  "限购": "Giới hạn mua",
  "昵称已修改": "Đã đổi tên",
  "该头像未解锁": "Chưa mở ảnh đại diện",
  "该头像框未解锁": "Chưa mở khung đại diện",
  "今日分享次数已达上限": "Hết lượt chia sẻ hôm nay",
  "战斗复活": "Hồi sinh",
  "战斗加速": "Tăng tốc trận",
  "获得": "Nhận",
  "基础属性": "Thuộc tính gốc",
  "可选择词条": "Có thể chọn bổ trợ",
  "自动选择增益": "Tự chọn bổ trợ",
  "战斗点击武器": "Chọn vũ khí trong trận",
  "刷新武器": "Làm mới vũ khí"
};
  Object.keys(runtimeUITranslations).forEach(function (key) { dictionary[key] = runtimeUITranslations[key]; });
  // More user-facing strings extracted from game scripts (no ID changes).
  var moreNativeUIText = {
  "基地满血": "Căn cứ đầy máu",
  "活动组奖励": "Thưởng nhóm sự kiện",
  "战斗结果双倍": "X2 thưởng trận đấu",
  "获取皮肤碎片": "Nhận mảnh trang phục",
  "解锁表情": "Mở biểu cảm",
  "金币副本扫荡": "Quét ải kiếm vàng",
  "装备全部免费": "Toàn bộ trang bị miễn phí",
  "刷新天地宝库": "Làm mới Kho Báu Thiên Địa",
  "扭蛋机": "Máy gacha",
  "玩家": "Người chơi",
  "秒前": "giây trước",
  "后过期": "nữa hết hạn",
  "已过期": "Đã hết hạn",
  "天前": "ngày trước",
  "小时前": "giờ trước",
  "分钟前": "phút trước",
  "天后过期": "ngày nữa hết hạn",
  "小时后过期": "giờ nữa hết hạn",
  "分钟后过期": "phút nữa hết hạn",
  "不足": "Không đủ",
  "剩余": "Còn",
  "次数": "lượt",
  "今日剩余": "Còn hôm nay",
  "提示": "Thông báo",
  "今日累计": "Tích lũy hôm nay",
  "再领一次": "Nhận thêm lần nữa",
  "免费倒计时": "Đếm ngược miễn phí",
  "头像": "Ảnh đại diện",
  "头像框": "Khung đại diện",
  "表情": "Biểu cảm",
  "自动刷新": "Tự làm mới",
  "游客": "Khách",
  "后刷新": "nữa làm mới",
  "英雄碎片": "Mảnh tướng",
  "装备碎片": "Mảnh trang bị",
  "普攻": "Đánh thường",
  "免费碎片": "Mảnh miễn phí",
  "兑换码不存在": "Mã quà không tồn tại",
  "兑换码已领取": "Đã dùng mã quà",
  "兑换码不能为空": "Vui lòng nhập mã quà",
  "分享失败": "Chia sẻ thất bại",
  "必出": "Chắc chắn nhận",
  "解锁新活动": "Mở sự kiện mới",
  "可与": "Có thể ghép với",
  "融合进化为": "Hợp nhất tiến hóa thành",
  "是否确认": "Bạn có chắc không?",
  "获取": "Nhận",
  "再观看": "Xem thêm",
  "次后": "lần nữa",
  "可永久生效": "để có hiệu lực vĩnh viễn",
  "格子不可放在暂存处": "Không thể đặt ô vào kho tạm",
  "获取格子": "Nhận ô",
  "备选区有免费装备尚未使用": "Vẫn còn trang bị miễn phí chưa dùng",
  "备选区没有需要免费的装备": "Không còn trang bị miễn phí ở khu dự phòng",
  "上阵装备": "Trang bị ra trận",
  "是否继续上次战斗": "Tiếp tục trận trước?",
  "通关章节": "Hoàn thành chương",
  "通关精英章节": "Qua chương tinh anh",
  "波解锁": "đợt mở khóa",
  "解锁新功能": "Mở tính năng mới",
  "累计在线": "Online tích lũy",
  "累计观看广告": "Tổng lượt xem quảng cáo",
  "是否确认退出": "Bạn chắc chắn muốn thoát?",
  "进度": "Tiến độ",
  "已加入": "Đã tham gia",
  "提前解锁": "Mở sớm",
  "已出现": "Đã xuất hiện",
  "开始抢夺": "Bắt đầu tranh đoạt",
  "正在装配": "Đang lắp",
  "昵称不能为空": "Tên không được để trống",
  "昵称限": "Giới hạn tên",
  "表情已解锁": "Đã mở biểu cảm",
  "快速巡逻次数": "Lượt tuần tra nhanh",
  "最长巡视时间": "Thời gian tuần tra tối đa",
  "通过章节越高": "Qua chương càng cao",
  "收益越大": "Thưởng càng lớn",
  "胜场": "Trận thắng",
  "未上阵任意装备": "Chưa trang bị món nào",
  "无法进行挑战": "Chưa thể thử thách",
  "有未上阵的装备槽位": "Còn ô trang bị chưa sử dụng",
  "恭喜进入": "Chúc mừng vào",
  "该段位下将不再获得段位积分": "Hạng này không nhận thêm điểm hạng",
  "不断战斗提升您的王者排名": "Chiến đấu để tăng hạng cao thủ",
  "排名吧": "thứ hạng!",
  "您上赛季结算段位为": "Hạng mùa trước của bạn là",
  "本赛季段位被重置为": "Hạng mùa này được đặt lại thành",
  "血量高胜": "Bên còn nhiều máu hơn thắng",
  "时间将尽": "Sắp hết giờ",
  "删除成功": "Xóa thành công",
  "阶段": "Giai đoạn",
  "赛季倒计时": "Đếm ngược mùa giải",
  "需领取前置礼包": "Cần nhận quà trước đó",
  "阶奖励": "Thưởng bậc",
  "历史最高": "Kỷ lục cao nhất",
  "深渊": "Vực sâu",
  "总等级": "Tổng cấp",
  "突破下一阶": "Đột phá bậc kế tiếp",
  "特权": "Đặc quyền",
  "个视频": "video",
  "可晋升至": "Có thể thăng lên",
  "已达最大": "Đã đạt tối đa",
  "造成伤害": "Gây sát thương",
  "剩余视频挑战次数": "Lượt thử thách QC còn",
  "本期倒计时": "Đếm ngược kỳ này",
  "进入玩法获得积分后可上榜": "Chơi để kiếm điểm và lên BXH",
  "保持排名至本日结算后将晋级到": "Giữ thứ hạng đến lúc chốt hôm nay để lên",
  "升级全部": "Nâng cấp tất cả",
  "恭喜您进入": "Chúc mừng bạn vào",
  "请继续保持排名": "Hãy giữ vững thứ hạng",
  "已有其他设备登录": "Tài khoản đang đăng nhập trên thiết bị khác",
  "当前进度失效": "Tiến độ hiện tại không còn hiệu lực",
  "周一": "Thứ Hai",
  "周二": "Thứ Ba",
  "周三": "Thứ Tư",
  "周四": "Thứ Năm",
  "周五": "Thứ Sáu",
  "周六": "Thứ Bảy",
  "周日": "Chủ Nhật",
  "正在下载更新包": "Đang tải bản cập nhật",
  "重试中": "Đang thử lại",
  "更新失败": "Cập nhật thất bại",
  "复制成功": "Đã sao chép",
  "等待账号登录": "Đang đợi đăng nhập"
};
  Object.keys(moreNativeUIText).forEach(function (key) { dictionary[key] = moreNativeUIText[key]; });
  // Additional short gameplay labels and rarity indicators.
  var shortLabels = {
  "（金＞紫＞蓝＞绿）": "(Vàng > Tím > Lam > Lục)",
  "（金 > 紫 > 蓝 > 绿）": "(Vàng > Tím > Lam > Lục)",
  "( 金 > 紫 > 蓝 > 绿 )": "(Vàng > Tím > Lam > Lục)",
  "（金>紫>蓝>绿）": "(Vàng > Tím > Lam > Lục)",
  "锯齿匕首": "Dao Răng Cưa",
  "坚守之盾": "Khiên Kiên Cố",
  "强化箭矢": "Cường hóa tên",
  "闪电链伤害": "Sát thương sét liên hoàn",
  "连锁闪电": "Sét liên hoàn",
  "所有伤害提升": "Tăng mọi sát thương",
  "技能伤害": "Sát thương kỹ năng",
  "攻速提升": "Tăng tốc đánh",
  "召唤神龙【电流强化】图腾": "Triệu hồi vật tổ Thần Long",
  "选择词条": "Chọn bổ trợ",
  "已获得技能": "Kỹ năng đã có",
  "额外伤害": "Sát thương thêm",
  "暴击几率": "Tỉ lệ chí mạng",
  "弓箭": "Cung tên",
  "出战": "Ra trận",
  "守卫家园": "Bảo vệ quê nhà",
  "图腾解锁": "Mở khóa vật tổ",
  "继续战斗": "Tiếp tục trận",
  "退出战斗": "Thoát trận"
};
  Object.keys(shortLabels).forEach(function (key) { dictionary[key] = shortLabels[key]; });
  // Additional dynamic UI text confirmed by October 29 gameplay screenshots.
  var screenshotUIText = {
  "珍惜钻石，稀有货币。": "Kim cương là đơn vị tiền tệ quý hiếm.",
  "用于升级武器": "Dùng để nâng cấp vũ khí",
  "提速道具": "Vật phẩm tăng tốc",
  "武器合成": "Ghép vũ khí",
  "海兽之岛": "Đảo Hải Thú",
  "海兽": "Hải Thú",
  "海兽岛": "Đảo Hải Thú",
  "1-1 海兽之岛": "1-1 Đảo Hải Thú",
  "1-2 海兽之岛": "1-2 Đảo Hải Thú",
  "海盗之岛": "Đảo Hải Tặc",
  "鱼人": "Người cá",
  "鱼人大军来袭，拖动上阵反曲弓，守卫小岛！": "Quân người cá tấn công! Kéo Cung Cong ra trận bảo vệ đảo!",
  "鱼人大军来袭，拖动反曲弓上阵，守卫小岛！": "Quân người cá tấn công! Kéo Cung Cong ra trận bảo vệ đảo!",
  "鱼人大军来袭": "Quân người cá tấn công!",
  "守卫小岛": "Bảo vệ đảo",
  "鱼人大军来袭，拖动": "Người cá tấn công! Kéo",
  "上阵反曲弓": "Cho Cung Cong ra trận",
  "合成可以让装备变得更强": "Ghép trang bị để tăng sức mạnh!",
  "合成可以让装备": "Ghép trang bị",
  "变得更强": "mạnh hơn",
  "血量道具大大提升我们的生存，上阵后可恢复基地血量": "Vật phẩm máu tăng khả năng sống sót. Trang bị để hồi máu căn cứ!",
  "血量道具": "Vật phẩm máu",
  "基地血量": "Máu căn cứ",
  "恢复基地血量": "Hồi máu căn cứ",
  "提升我们的生存": "Tăng khả năng sống sót",
  "获得更强": "mạnh hơn",
  "上阵后可": "Khi trang bị sẽ",
  "合成": "Ghép",
  "坚守到第2波即可体验": "Trụ đến đợt 2 để trải nghiệm",
  "坚守到2波即可体验": "Trụ đến đợt 2 để trải nghiệm",
  "坚守到": "Trụ đến",
  "召唤神龙": "Triệu hồi Thần Long",
  "【电龙之召】": "【Triệu Hồi Lôi Long】",
  "电龙之召": "Triệu Hồi Lôi Long",
  "召唤神龙【电龙之召】图腾": "Triệu hồi Vật Tổ Lôi Long",
  "召唤神龙【电龙之召】图腾：": "Triệu hồi Vật Tổ Lôi Long:",
  "龙息强化": "Cường hóa Hơi Rồng",
  "火焰龙息伤害": "Sát thương Hơi Rồng Lửa",
  "全都要": "Lấy tất cả",
  "全部要": "Lấy tất cả",
  "魔法水晶箭": "Tên Pha Lê",
  "魔法水晶": "Pha lê ma thuật",
  "心之钢": "Tim Thép",
  "黑火药": "Thuốc Súng Đen",
  "基础免伤概率": "Tỉ lệ miễn sát thương",
  "最大生命": "Máu tối đa",
  "提速": "Tăng tốc",
  "反跑": "Đổi hướng",
  "反刍": "Nhai lại",
  "反弹": "Bật ngược",
  "反弹弓": "Cung Phản Đòn",
  "龙息": "Hơi Rồng",
  "反曲弓": "Cung Cong",
  "魔法水晶箭每累计射出20支": "Cứ 20 mũi tên sẽ kích hoạt",
  "黑火药II": "Thuốc Súng Đen II",
  "心之钢II": "Tim Thép II",
  "宝箱": "Rương",
  "血量道具大大提升我们的生存": "Vật phẩm máu giúp tăng khả năng sống sót",
  "拼合": "Ghép",
  "射出": "Bắn",
  "概率": "Tỉ lệ",
  "高额": "Lớn",
  "额外": "Thêm",
  "火焰": "Lửa"
};
  Object.keys(screenshotUIText).forEach(function (key) { dictionary[key] = screenshotUIText[key]; });
  // Vietnamese labels from the map details, player menus and daily rewards.
  // Display-only dictionary: item IDs, store keys, gameplay, score and ads are unchanged.
  var outerUITranslations = {
  "风歌草原": "Thảo Nguyên Phong Ca",
  "黑石堡垒": "Pháo Đài Hắc Thạch",
  "森林之岛": "Đảo Rừng Xanh",
  "2-1 风歌草原": "2-1 Thảo Nguyên Phong Ca",
  "3-1 黑石堡垒": "3-1 Pháo Đài Hắc Thạch",
  "第1章 森林之岛": "Chương 1 - Đảo Rừng Xanh",
  "默认头像": "Ảnh đại diện mặc định",
  "七": "Bảy",
  "七天签到": "Điểm danh 7 ngày",
  "七日签到": "Điểm danh 7 ngày",
  "三日赠礼": "Quà tặng 3 ngày",
  "主角": "Nhân vật chính",
  "使用中": "Đang sử dụng",
  "僵尸": "Thây Ma",
  "兑换码": "Mã quà tặng",
  "前往最新章节": "Đến chương mới nhất",
  "副本": "Phó bản",
  "在海里遇见它，快跑就对啦，不然准被它咬成碎屑": "Gặp nó dưới biển thì chạy ngay, kẻo bị cắn nát!",
  "大幅提升受到的物理伤害": "Tăng mạnh sát thương vật lý phải chịu",
  "大战": "Đại chiến",
  "奔波霸": "Bôn Ba Bá",
  "宝剑配英雄": "Kiếm quý xứng anh hùng",
  "快速巡视可获得：": "Tuần tra nhanh nhận:",
  "快速巡逻": "Tuần tra nhanh",
  "快速巡视": "Tuần tra nhanh",
  "我": "Tôi",
  "我的排名": "Hạng của tôi",
  "打龙": "Săn Rồng",
  "挂机奖励": "Thưởng treo máy",
  "推荐装备": "Trang bị đề xuất",
  "新敌人": "Kẻ địch mới",
  "日签到": "Điểm danh ngày",
  "暴躁鲨": "Cá Mập Hung Dữ",
  "本关怪物": "Quái trong màn",
  "本关阵型": "Đội hình màn này",
  "潮汐水怪": "Quái Thủy Triều",
  "玩家信息": "Thông tin người chơi",
  "电鳗": "Lươn Điện",
  "精英模式": "Chế độ Tinh Anh",
  "首领试炼": "Thử thách Boss",
  "鲨鱼炮": "Pháo Cá Mập",
  "第1天": "Ngày 1",
  "第2天": "Ngày 2",
  "第3天": "Ngày 3",
  "第4天": "Ngày 4",
  "第5天": "Ngày 5",
  "第6天": "Ngày 6",
  "第7天": "Ngày 7"
};
  Object.keys(outerUITranslations).forEach(function (key) {
    dictionary[key] = outerUITranslations[key];
  });
  // Supplementary UI localization for achievements, daily missions, mail and
  // gear names observed in the Arcade untranslated diagnostics.
  // Text-only: never rewrite IDs, save payloads, sprite names or gameplay logic.
  var missionAndGearUIText = {
  "一键删除": "Xóa tất cả",
  "一键领取": "Nhận tất cả",
  "侏儒射线枪": "Súng Tia Người Lùn",
  "兽王的哨子": "Còi Vua Thú",
  "击败6000个怪物": "Tiêu diệt 6000 quái",
  "升级天赋5次": "Nâng thiên phú 5 lần",
  "升级天赋": "Nâng thiên phú",
  "升级武器3次": "Nâng vũ khí 3 lần",
  "商店购买5次道具": "Mua vật phẩm 5 lần tại Shop",
  "圣银箭弩": "Nỏ Bạc Thánh",
  "堕落王子剑": "Kiếm Hoàng Tử Sa Ngã",
  "天赋20级解锁": "Mở ở thiên phú cấp 20",
  "天赋110级解锁": "Mở ở thiên phú cấp 110",
  "天赋170级解锁": "Mở ở thiên phú cấp 170",
  "弹簧拳": "Nắm Đấm Lò Xo",
  "挑战3次章节": "Thử thách chương 3 lần",
  "未完成": "Chưa hoàn thành",
  "每日登录游戏": "Đăng nhập game mỗi ngày",
  "没有邮件": "Không có thư",
  "混乱战刃": "Chiến Đao Hỗn Loạn",
  "激光射线": "Tia Laser",
  "火箭靴": "Giày Tên Lửa",
  "炎爆魔杖": "Trượng Nổ Lửa",
  "电龙图腾": "Vật Tổ Lôi Long",
  "矮人直升机": "Trực Thăng Người Lùn",
  "精英杀手": "Sát Thủ Tinh Anh",
  "观看广告10次": "Xem quảng cáo 10 lần",
  "进行2次快速挂机": "Treo máy nhanh 2 lần",
  "逐风者之剑": "Kiếm Truy Phong",
  "雷神之锤": "Búa Thần Sấm",
  "青龙偃月刀": "Đao Thanh Long",
  "领取1次挂机奖励": "Nhận thưởng treo máy 1 lần",
  "一键出售": "Bán tất cả",
  "一键合成": "Ghép tất cả",
  "已完成": "Đã hoàn thành",
  "任务完成": "Hoàn thành nhiệm vụ",
  "天赋": "Thiên phú",
  "武器": "Vũ khí",
  "激光": "Laser",
  "邮件": "Thư",
  "领取奖励": "Nhận thưởng",
  "今日任务": "Nhiệm vụ hôm nay",
  "任务": "Nhiệm vụ"
};
  Object.keys(missionAndGearUIText).forEach(function (key) {
    dictionary[key] = missionAndGearUIText[key];
  });
  // Skill tooltips can include nested FairyGUI color/outline markup.
  // Translate only visible fragments; preserve multiplier values and all tags.
  var combatTooltipAndChestUIText = {
  "发射出": "Bắn ",
  "颗炮弹，爆炸留下燃烧区域": " viên đạn pháo, vụ nổ để lại vùng cháy",
  "喷吐持续时间": "Thời gian phun ",
  "电流可弹射": "Tia điện nảy ",
  "箭支数量": "Số mũi tên ",
  "它游过的地方会留下“噼里啪啦”的银亮轨迹，攻击像给你“触电式按摩”": "Bơi đến đâu, nó để lại vệt điện sáng bạc đến đó. Trúng đòn là được “mát-xa điện”!",
  "开启1个普通宝箱": "Mở 1 rương thường",
  "开启1个高级宝箱": "Mở 1 rương cao cấp",
  "快速": "Nhanh",
  "银币不足": "Không đủ bạc",
  "开启普通宝箱": "Mở rương thường",
  "开启高级宝箱": "Mở rương cao cấp",
  "爆炸留下燃烧区域": "Vụ nổ để lại vùng cháy",
  "持续时间": "Thời gian duy trì"
};
  Object.keys(combatTooltipAndChestUIText).forEach(function (key) {
    dictionary[key] = combatTooltipAndChestUIText[key];
  });
  // Additional localized battle text and upgrade descriptions.
  // Data only: no resource IDs, save metadata or battle logic changes.
  var battleDescriptionsVI = {
  "肉盾怪": "Quái Đỡ Đòn",
  // Enemy discovery popup: name, lore and elemental weakness.
  "红蛇": "Rắn Đỏ",
  "草原上最弱的捕食者，战斗力约等于一只青蛙": "Kẻ săn mồi yếu nhất thảo nguyên, sức mạnh chỉ ngang một con ếch.",
  "大幅提升受到的光系伤害": "Chịu thêm nhiều sát thương hệ Ánh Sáng",
  "大幅提升受到的暗影伤害": "Tăng mạnh sát thương Bóng Tối phải chịu",
  "大幅提升受到的火系伤害": "Tăng mạnh sát thương hệ Lửa phải chịu",
  "大幅提升受到的电系伤害": "Tăng mạnh sát thương hệ Điện phải chịu",
  "当海面出现鲨鱼鳍时，有可能是更恐怖的怪物在海面之下蛰伏": "Nếu thấy vây cá mập, có thể con quái nguy hiểm hơn đang ẩn dưới biển.",
  "水域的常驻嘉宾，脑袋顶红鳍、浑身绿油油，它好像还有一个兄弟": "Kẻ quen mặt ở vùng nước, vây đỏ, mình xanh lè. Hình như nó còn một người anh em.",
  "它在腐水与瘴气间游弋，猎物靠近时，毒牙会撕开虚假的平静": "Nó bơi trong nước độc, sẵn sàng dùng nanh độc tấn công con mồi.",
  "保留反曲弓当前能力": "Giữ sức mạnh hiện tại của Cung Cong",
  "反曲弓箭矢伤害": "Sát thương tên Cung Cong ",
  "发射": "Bắn ",
  "火焰箭矢": "Tên Lửa",
  "造成火焰伤害": " gây sát thương Lửa",
  "基地免伤概率": "Tỉ lệ miễn sát thương căn cứ ",
  "多支": "Bắn nhiều ",
  "冰箭齐射": "tên băng",
  "并且获得": " và gây ",
  "击退": "đẩy lùi",
  "效果": " ",
  "英雄跑动速度": "Tốc chạy của tướng ",
  "鲨鱼炮弹爆炸伤害": "Sát thương nổ đạn Cá Mập ",
  "投射旋转战刃，对沿途敌人造成伤害和减速效果": "Phóng đao xoay, gây sát thương và làm chậm địch trên đường.",
  "恢复基地": "Hồi máu căn cứ ",
  "提升主角": "Tăng cho nhân vật ",
  "跑动速度": "tốc chạy",
  "伤害统计": "Thống kê sát thương",
  "反曲之弓": "Cung Cong",
  "坚定守卫Ⅲ": "Phòng Thủ Kiên Cố III",
  "寒冰之弓": "Cung Băng",
  "急速逃亡Ⅰ": "Tháo Chạy Nhanh I",
  "水蛇": "Rắn Nước",
  "火焰之弓": "Cung Lửa",
  "炮弹强化": "Cường Hóa Đạn Pháo",
  "篝火附近出生": "Xuất hiện gần đống lửa",
  "请选择升级路线": "Hãy chọn nhánh nâng cấp",
  "主角功能已解锁，快来看看吧！": "Tính năng nhân vật đã mở khóa! Vào xem ngay!",
  "恭喜合成彩色武器，快选择这个进化路线试试吧！": "Chúc mừng ghép thành vũ khí đa sắc! Thử chọn nhánh tiến hóa này!",
  "彩色武器": "vũ khí đa sắc",
  "进化路线": "nhánh tiến hóa",
  "主角功能": "Tính năng nhân vật",
  "已解锁，快来看看吧！": " đã mở khóa, vào xem ngay!",
  "恭喜合成": "Chúc mừng ghép thành ",
  "快选择这个": " Hãy chọn ",
  "试试吧！": " để thử nhé!",
  "火焰伤害": "sát thương Lửa"
};
  Object.keys(battleDescriptionsVI).forEach(function (key) {
    dictionary[key] = battleDescriptionsVI[key];
  });
  // Remaining game UI strings from the 2026-10-29 untranslated console report.
  // Display-only: keep Chinese source identifiers, RichText tags and save keys intact.
  var remainingUITranslations = {
    "Lv2解锁": "Mở ở cấp 2",
    "Lv3解锁": "Mở ở cấp 3",
    "Lv4解锁": "Mở ở cấp 4",
    "Lv5解锁": "Mở ở cấp 5",
    "Lv6解锁": "Mở ở cấp 6",
    "【燃烧扩散】": "【Lan Rộng Vùng Cháy】",
    "燃烧扩散": "Lan Rộng Vùng Cháy",
    "燃烧区域面积": "Diện tích vùng cháy ",
    "【进化链】": "【Chuỗi Tiến Hóa】",
    "进化链": "Chuỗi Tiến Hóa",
    "解锁鲨鱼炮的进化选项：": "Mở nhánh tiến hóa cho Pháo Cá Mập:",
    "【持续燃烧】": "【Cháy Dai Dẳng】",
    "持续燃烧": "Cháy Dai Dẳng",
    "燃烧区域持续时间": "Thời gian duy trì vùng cháy ",
    "【猛烈火焰】": "【Lửa Dữ】",
    "猛烈火焰": "Lửa Dữ",
    "燃烧区域伤害": "Sát thương vùng cháy ",
    "【火上浇油】": "【Thêm Dầu Vào Lửa】",
    "火上浇油": "Thêm Dầu Vào Lửa",
    "对已在冰焰中的敌人造成攻击时，暴击率": "Đánh địch trong vùng băng hỏa, tỉ lệ chí mạng ",
    "必出高级玩具": "Chắc chắn nhận đồ chơi Cao cấp",
    "必出稀有玩具": "Chắc chắn nhận đồ chơi Hiếm",
    "必出": "Chắc chắn nhận ",
    "玩具": "đồ chơi",
    "[小火龙吐息]碎片": "Mảnh [Hơi Thở Rồng Lửa Nhỏ]",
    "小火龙吐息": "Hơi Thở Rồng Lửa Nhỏ",
    "[逐风者之剑]碎片": "Mảnh [Kiếm Truy Phong]",
    "碎片": "Mảnh",
    "【召唤鲨鱼炮】": "【Triệu Hồi Pháo Cá Mập】",
    "召唤鲨鱼炮": "Triệu Hồi Pháo Cá Mập",
    "一点金币": "Một ít vàng",
    "一箱金币": "Một rương vàng",
    "一袋金币": "Một túi vàng",
    "优惠": "Ưu đãi",
    "使用": "Sử dụng",
    "充能": "Nạp năng lượng",
    "勇者1阶": "Dũng Giả bậc 1",
    "广告券宝箱": "Rương Vé Quảng Cáo",
    "有概率获得1~10张免广告券。": "Có cơ hội nhận 1–10 vé miễn quảng cáo.",
    "有概率获得1～10张免广告券。": "Có cơ hội nhận 1–10 vé miễn quảng cáo.",
    "挑战2次精英章节": "Thử thách chương Tinh Anh 2 lần",
    "每日商店": "Cửa hàng hằng ngày",
    "炮弹轰击目标区域，并留下冰焰": "Bắn phá khu vực mục tiêu, để lại vùng băng hỏa",
    "王者4阶": "Vương Giả bậc 4",
    "王者5阶": "Vương Giả bậc 5",
    "王者一节": "Vương Giả bậc 1",
    "等级解锁预览": "Xem trước mở khóa theo cấp",
    "跑速": "Tốc chạy",
    "金币商店": "Cửa hàng Vàng",
    "青铜0阶": "Đồng bậc 0",
    "青铜1阶": "Đồng bậc 1",
    "高级": "Cao cấp"
  };
  Object.keys(remainingUITranslations).forEach(function (key) {
    dictionary[key] = remainingUITranslations[key];
  });
  // UI translations for weapon upgrades, chest rewards, fragment shortages,
  // evolutions and rank labels reported by the 2026-10-29 in-game diagnostics.
  // These strings are display-only; never replace gameplay identifiers.
  var richerSkillUIText = {
    "宝箱奖励": "Thưởng mở rương",
    "开宝箱提升等级，增加宝箱奖励": "Mở rương để tăng cấp và nhận nhiều thưởng hơn",
    "鸿运当头": "May Mắn Ngập Tràn",
    "白银1阶": "Bạc bậc 1",
    "白银2阶": "Bạc bậc 2",
    "白银3阶": "Bạc bậc 3",
    "黄金1阶": "Vàng bậc 1",
    "黄金2阶": "Vàng bậc 2",
    "黄金3阶": "Vàng bậc 3",
    "【感电效应】": "【Hiệu Ứng Điện Giật】",
    "感电效应": "Hiệu Ứng Điện Giật",
    "闪电链伤害": "Sát thương Sét Liên Hoàn ",
    "【箭矢连射】": "【Tên Bắn Liên Tiếp】",
    "箭矢连射": "Tên Bắn Liên Tiếp",
    "每支箭矢概率连射": "Mỗi mũi tên có cơ hội bắn thêm ",
    "，连发箭矢造成": ", tên bắn thêm gây ",
    "【飞速移动】": "【Di Chuyển Thần Tốc】",
    "飞速移动": "Di Chuyển Thần Tốc",
    "混乱战刃移动速度": "Tốc độ di chuyển Chiến Đao Hỗn Loạn ",
    "【龙炎强化】": "【Cường Hóa Long Viêm】",
    "龙炎强化": "Cường Hóa Long Viêm",
    "火焰龙息的暴击率": "Tỉ lệ chí mạng Hơi Rồng Lửa ",
    "【持久喷火】": "【Phun Lửa Bền Bỉ】",
    "持久喷火": "Phun Lửa Bền Bỉ",
    "火焰龙息每参与击杀1个敌人则持续时间": "Mỗi lần Hơi Rồng Lửa góp công hạ địch, thời gian duy trì ",
    "【断筋】": "【Cắt Gân】",
    "断筋": "Cắt Gân",
    "击中使怪物速度": "Đánh trúng làm tốc độ quái ",
    "【箭矢穿透】": "【Tên Xuyên Thấu】",
    "箭矢穿透": "Độ xuyên của tên ",
    "，穿透箭矢造成": ", tên xuyên thấu gây ",
    "解锁闪电图腾的进化选项：": "Mở nhánh tiến hóa cho Tổ Sét:",
    "【持续切割】": "【Chém Cắt Liên Tục】",
    "持续切割": "Chém Cắt Liên Tục",
    "混乱战刃持续时间": "Thời gian tồn tại Chiến Đao Hỗn Loạn ",
    "【摇头吐息】": "【Hơi Thở Quét Ngang】",
    "摇头吐息": "Hơi Thở Quét Ngang",
    "火焰龙息变为": "Hơi Rồng Lửa quét góc ",
    "旋转喷射": " khi phun",
    "【箭矢分裂】": "【Tên Phân Tách】",
    "箭矢分裂": "Tên Phân Tách",
    "箭矢命中后分裂出": "Tên trúng địch sẽ tách thành ",
    "颗箭矢，分裂箭矢造成": " mũi tên, mỗi tên tách gây ",
    "【超高压电】": "【Điện Siêu Cao Áp】",
    "超高压电": "Điện Siêu Cao Áp",
    "闪电链的暴击率": "Tỉ lệ chí mạng Sét Liên Hoàn ",
    "【强风射击】": "【Bắn Tên Cuồng Phong】",
    "强风射击": "Bắn Tên Cuồng Phong",
    "箭矢飞行速度": "Tốc độ bay của tên ",
    "，伤害": ", sát thương ",
    "吐息流血中的敌人时": "Phun vào địch đang chảy máu: ",
    "暴击+50": "Chí mạng +50",
    "伤害+50": "Sát thương +50",
    "解锁混乱战刃的进化选项：": "Mở nhánh tiến hóa cho Chiến Đao Hỗn Loạn:",
    "【递增传导】": "【Dẫn Truyền Tăng Tiến】",
    "递增传导": "Dẫn Truyền Tăng Tiến",
    "闪电链每次传导弹射的伤害": "Sát thương mỗi lần Sét Liên Hoàn lan truyền ",
    "【大型战刃】": "【Chiến Đao Khổng Lồ】",
    "大型战刃": "Chiến Đao Khổng Lồ",
    "混乱战刃体型": "Kích thước Chiến Đao Hỗn Loạn ",
    "【强能电流分裂】": "【Phân Tách Dòng Điện Mạnh】",
    "强能电流分裂": "Phân Tách Dòng Điện Mạnh",
    "闪电链每次传导时有": "Mỗi lần Sét Liên Hoàn lan truyền, có ",
    "概率分裂出红电【红电：继承闪电链所有伤害加成并造成普通闪电链": " cơ hội tạo Sét Đỏ 【Sét Đỏ: nhận mọi tăng sát thương, gây ",
    "伤害，可传导": " sát thương của Sét Liên Hoàn, truyền tối đa ",
    "【战刃强化】": "【Cường Hóa Chiến Đao】",
    "战刃强化": "Cường Hóa Chiến Đao",
    "混乱战刃伤害": "Sát thương Chiến Đao Hỗn Loạn ",
    "解锁反曲弓的进化选项：": "Mở nhánh tiến hóa cho Cung Cong:",
    "解锁小火龙的进化选项：": "Mở nhánh tiến hóa cho Rồng Lửa Nhỏ:",
    "[反曲弓]碎片不足": "Không đủ mảnh [Cung Cong]",
    "[闪电图腾]碎片不足": "Không đủ mảnh [Tổ Sét]",
    "碎片不足": "Không đủ mảnh",
    "【冰霜吐息】": "【Hơi Thở Băng Giá】",
    "冰霜吐息": "Hơi Thở Băng Giá",
    "【暗影吐息】": "【Hơi Thở Bóng Tối】",
    "暗影吐息": "Hơi Thở Bóng Tối",
    "【暗影战刃】": "【Chiến Đao Bóng Tối】",
    "暗影战刃": "Chiến Đao Bóng Tối",
    "【闪光图腾】": "【Vật Tổ Chớp Sáng】",
    "闪光图腾": "Vật Tổ Chớp Sáng",
    "【雷电战刃】": "【Chiến Đao Sấm Sét】",
    "雷电战刃": "Chiến Đao Sấm Sét",
    "发射箭支，可攻击目标": "Bắn tên tấn công mục tiêu",
    "召唤闪电链，可在目标间弹射": "Triệu hồi Sét Liên Hoàn, nảy giữa các mục tiêu",
    "呆萌小火龙，随时准备喷吐毁灭龙焰": "Rồng Lửa Nhỏ đáng yêu, sẵn sàng phun lửa hủy diệt",
    "闪电图腾": "Tổ Sét",
    "小火龙": "Rồng Lửa Nhỏ",
    "闪电链": "Sét Liên Hoàn",
    "红电": "Sét Đỏ",
    "火焰龙息": "Hơi Rồng Lửa",
    "混乱战刃": "Chiến Đao Hỗn Loạn"
  };
  Object.keys(richerSkillUIText).forEach(function (key) {
    dictionary[key] = richerSkillUIText[key];
  });
  // Text-only translations: hero skins, skill descriptions and boosts.
  // Never alter persistent game identifiers or asset keys.
  var heroAndSkinUIText = {
    "皮肤属性": "Chỉ số trang phục",
    "主角技能": "Kỹ năng nhân vật",
    "主角技": "Kỹ năng nhân vật",
    "主角技能已解锁，可以让我们的速度大幅提升！": "Kỹ năng nhân vật đã mở khóa, giúp tăng mạnh tốc độ!",
    "速度大幅提升": "Tốc độ tăng mạnh",
    "分头行动": "Tách Đội",
    "无敌斩": "Chém Vô Địch",
    "涡轮增鸭": "Vịt Siêu Tốc",
    "站起来!仆人": "Đứng Dậy, Đầy Tớ!",
    "主动技": "Kỹ năng chủ động",
    "被动技": "Kỹ năng bị động",
    "分身成为": "Phân thân thành ",
    "没头脑": "Ngốc Nghếch",
    "不高兴": "Khó Ở",
    "两个单位同时行动": " cùng hoạt động",
    "立即加速": "Tăng tốc ngay ",
    "快跑": "chạy nhanh",
    "无敌": "Vô địch",
    "召唤12把大剑围绕自身旋转打击敌人": "Triệu hồi 12 đại kiếm xoay quanh người tấn công kẻ địch",
    "每波战斗首次踩到堕落王子剑": "Lần đầu giẫm lên Kiếm Hoàng Tử Sa Ngã ở mỗi đợt",
    "充能": "Nạp năng lượng",
    "可大幅提升跑格子速度": "Tăng mạnh tốc độ di chuyển qua các ô",
    "击退所有敌人": "Đẩy lùi toàn bộ kẻ địch",
    "一定距离": " một khoảng",
    "释放": "Phóng ",
    "个战刃在战场弹射": " chiến đao nảy trên chiến trường",
    "全攻击": "Tấn công toàn đội ",
    "全生命": "Máu toàn đội ",
    "剑圣": "Kiếm Thánh",
    "升阶可大幅提升属性": "Tăng bậc để tăng mạnh chỉ số",
    "巫妖汪": "Cún Pháp Sư Bóng Tối",
    "掉血时优先扣除护盾": "Khi nhận sát thương, trừ lá chắn trước",
    "登录7日领取": "Đăng nhập 7 ngày để nhận",
    "获得2倍提升": "Nhận hiệu quả gấp đôi",
    "蓝胖": "Mập Xanh",
    "螺旋丸": "Rasengan",
    "观看视频，本场游戏全部轮次获得2倍提升": "Xem quảng cáo để được tăng gấp đôi trong mọi đợt của trận này",
    "通关主线4-1领取": "Vượt ải chính 4-1 để nhận",
    "金币不足": "Không đủ vàng",
    "首领试炼达成王者段位（0/4）": "Đạt hạng Vương Giả trong Thử thách Boss (0/4)",
    "高品质词条刷新概率+5%": "Tỉ lệ làm mới bổ trợ chất lượng cao +5%",
    "高品质词条刷新概率": "Tỉ lệ làm mới bổ trợ chất lượng cao ",
    "首领试炼达成王者段位": "Đạt hạng Vương Giả trong Thử thách Boss",
    "主线": "Ải chính",
    "段位": "Bậc xếp hạng",
    "主角": "Nhân vật",
    "秒": " giây"
  };
  Object.keys(heroAndSkinUIText).forEach(function (key) {
    dictionary[key] = heroAndSkinUIText[key];
  });
  // Display-only localization for buffs, enemies and descriptions.
  var extraCombatTooltipVI = {
    "头发自带“自然卷”，不知道箭上有没有蛇毒": "Mái tóc xoăn tự nhiên, chẳng biết mũi tên có tẩm nọc rắn không.",
    "来自幽蓝深海的幽灵船长，骷髅帽压着不灭执念，幽绿身躯散发死亡低语": "Thuyền trưởng ma từ biển sâu thăm thẳm, đội mũ đầu lâu, thân xanh u ám văng vẳng tiếng thì thầm chết chóc.",
    "水域的常驻嘉宾，脑袋顶黄鳍、浑身蓝靛靛，它好像还有一个兄弟": "Kẻ quen mặt vùng nước, vây vàng, mình xanh chàm. Hình như nó còn một người anh em.",
    "保留火焰吐息当前效果": "Giữ nguyên hiệu ứng hiện tại của Hơi Thở Lửa",
    "保留闪电图腾当前能力": "Giữ nguyên sức mạnh hiện tại của Tổ Sét",
    "反曲弓有概率连射": "Cung Cong có cơ hội bắn thêm ",
    "发射歼灭光线攻击": "Bắn tia hủy diệt tấn công ",
    "全场": "toàn chiến trường",
    "敌人造成光系伤害": "kẻ địch, gây sát thương hệ Ánh Sáng",
    "召唤电龙": "Triệu hồi Lôi Long",
    "电龙": "Lôi Long",
    "在场中游走攻击": " di chuyển và tấn công khắp chiến trường",
    "攻击提升": "Tăng tấn công ",
    "进化为": "Tiến hóa thành ",
    "，造成冰霜伤害": ", gây sát thương Băng",
    "，造成暗影伤害": ", gây sát thương Bóng Tối",
    "发射激光射线锁定单体敌人造成持续高额伤害": "Bắn tia laser khóa một mục tiêu, liên tục gây sát thương lớn",
    "坚定守卫Ⅰ": "Phòng Thủ Kiên Cố I",
    "坚定守卫Ⅱ": "Phòng Thủ Kiên Cố II",
    "打磨利刃Ⅰ": "Mài Sắc Lưỡi Kiếm I",
    "火焰吐息": "Hơi Thở Lửa",
    "美杜莎": "Medusa",
    "血量低于50%时，攻击提升50%": "Khi máu dưới 50%, tăng tấn công 50%",
    "远程": "Tầm xa",
    "远程攻击": "Tấn công tầm xa",
    "霸波奔": "Bá Ba Bôn",
    "发射激光射线": "Bắn tia laser",
    "坚定守卫": "Phòng Thủ Kiên Cố",
    "打磨利刃": "Mài Sắc Lưỡi Kiếm",
    "光系伤害": "sát thương hệ Ánh Sáng",
    "冰霜伤害": "sát thương Băng",
    "暗影伤害": "sát thương Bóng Tối"
  };
  Object.keys(extraCombatTooltipVI).forEach(function (key) {
    dictionary[key] = extraCombatTooltipVI[key];
  });
  var exactFormattedVI = {
  "<color=ffffff><outline color=#0b0b0b width=4>珍惜钻石，稀有货币。</outline></color>": "<color=ffffff><outline color=#0b0b0b width=4>Kim cương là đơn vị tiền tệ quý hiếm.</outline></color>",
  "<color=ffffff><outline color=#0b0b0b width=4>用于升级武器</outline></color>": "<color=ffffff><outline color=#0b0b0b width=4>Dùng để nâng cấp vũ khí</outline></color>",
  "<color=ffffff><outline color=#0a0909 width=3>恢复基地<color=#93E449>血量</color></outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Hồi <color=#93E449>máu</color> cho căn cứ</outline></color>",
  "<color=ffffff><outline color=#0e0d0d width=3>恢复基地<color=#93E449>血量</color></outline></color>": "<color=ffffff><outline color=#0e0d0d width=3>Hồi <color=#93E449>máu</color> cho căn cứ</outline></color>",
  "<color=ffffff><outline color=#0e0d0d width=3>提升主角<color=#93E449>跑动速度</color></outline></color>": "<color=ffffff><outline color=#0e0d0d width=3>Tăng <color=#93E449>tốc chạy</color> cho nhân vật</outline></color>",
  "<color=ffffff><outline color=#0a0909 width=3>提升主角<color=#93E449>跑动速度</color></outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Tăng <color=#93E449>tốc chạy</color> cho nhân vật</outline></color>"
};
  // Battle pickup tooltip descriptions. Preserve source RichText structure,
  // exact colors, outline widths and all game-internal data/identifiers.
  ["#0e0d0d", "#0a0909"].forEach(function (outline) {
    var open = "<color=ffffff><outline color=" + outline + " width=3>";
    var green = "<color=#93E449>";
    var close = "</outline></color>";
    exactFormattedVI[open + "获得战内" + green + "银币</color>" + close] =
      open + "Nhận " + green + "bạc</color> trong trận" + close;
    exactFormattedVI[open + green + "反向</color>跑动" + close] =
      open + "Chạy " + green + "ngược hướng</color>" + close;
    exactFormattedVI[open + "增加基地" + green + "护盾</color>" + close] =
      open + "Tăng " + green + "lá chắn</color> cho căn cứ" + close;
  });

  // Exact RichText messages retain color and outline attributes verbatim.
  // Only the text rendered between tags is localized.
  var heroRichTextVI = {
    "<color=ffe680><outline color=#000000 width=3>主动技【分头行动】：分身成为\"没头脑\"和\"不高兴\"两个单位同时行动，持续<color=#28f27d>10</color>秒</outline></color>": "<color=ffe680><outline color=#000000 width=3>Kỹ năng chủ động 【Tách Đội】: Phân thân thành \"Ngốc Nghếch\" và \"Khó Ở\" cùng hành động trong <color=#28f27d>10</color> giây</outline></color>",
    "<color=ffe680><outline color=#000000 width=3>主动技【无敌斩】：无敌<color=#28f27d>3</color>秒；召唤12把大剑围绕自身旋转打击敌人，持续<color=#28f27d>15</color>秒</outline></color>": "<color=ffe680><outline color=#000000 width=3>Kỹ năng chủ động 【Chém Vô Địch】: Vô địch <color=#28f27d>3</color> giây; triệu hồi 12 đại kiếm xoay quanh tấn công địch trong <color=#28f27d>15</color> giây</outline></color>",
    "<color=ffe680><outline color=#000000 width=3>主动技【涡轮增鸭】：立即加速<color=#28f27d>100%</color>快跑，持续<color=#28f27d>6</color>秒</outline></color>": "<color=ffe680><outline color=#000000 width=3>Kỹ năng chủ động 【Vịt Siêu Tốc】: Tăng ngay <color=#28f27d>100%</color> tốc chạy trong <color=#28f27d>6</color> giây</outline></color>",
    "<color=ffe680><outline color=#000000 width=3>被动技【站起来!仆人】：每波战斗首次踩到堕落王子剑，立即使其<color=#28f27d>100%</color>充能</outline></color>": "<color=ffe680><outline color=#000000 width=3>Kỹ năng bị động 【Đứng Dậy, Đầy Tớ!】: Mỗi đợt, lần đầu chạm Kiếm Hoàng Tử Sa Ngã sẽ lập tức nạp <color=#28f27d>100%</color> năng lượng cho kiếm</outline></color>",
    "<color=ffffff><outline color=#0a0909 width=4>可大幅提升跑格子速度</outline></color>": "<color=ffffff><outline color=#0a0909 width=4>Tăng mạnh tốc độ di chuyển qua các ô</outline></color>",
    "<color=ffffff><outline color=#0e0d0d width=3><color=#93E449>击退所有敌人</color>一定距离</outline></color>": "<color=ffffff><outline color=#0e0d0d width=3><color=#93E449>Đẩy lùi toàn bộ kẻ địch</color> một khoảng</outline></color>",
    "<color=ffffff><outline color=#0e0d0d width=3>释放<color=#93E449>*1</color>个战刃在战场弹射</outline></color>": "<color=ffffff><outline color=#0e0d0d width=3>Phóng <color=#93E449>*1</color> chiến đao nảy trên chiến trường</outline></color>",
    "<color=ffffff><outline color=#000000 width=3>全攻击<color=#51f337>+5%</color></outline></color>": "<color=ffffff><outline color=#000000 width=3>Tấn công toàn đội <color=#51f337>+5%</color></outline></color>",
    "<color=ffffff><outline color=#000000 width=3>全攻击<color=#51f337>+10%</color></outline></color>": "<color=ffffff><outline color=#000000 width=3>Tấn công toàn đội <color=#51f337>+10%</color></outline></color>",
    "<color=ffffff><outline color=#000000 width=3>全攻击<color=#51f337>+15%</color></outline></color>": "<color=ffffff><outline color=#000000 width=3>Tấn công toàn đội <color=#51f337>+15%</color></outline></color>",
    "<color=ffffff><outline color=#000000 width=3>全生命<color=#51f337>+5%</color></outline></color>": "<color=ffffff><outline color=#000000 width=3>Máu toàn đội <color=#51f337>+5%</color></outline></color>",
    "<color=ffffff><outline color=#000000 width=3>全生命<color=#51f337>+8%</color></outline></color>": "<color=ffffff><outline color=#000000 width=3>Máu toàn đội <color=#51f337>+8%</color></outline></color>",
    "<color=ffffff><outline color=#000000 width=3>全生命<color=#51f337>+10%</color></outline></color>": "<color=ffffff><outline color=#000000 width=3>Máu toàn đội <color=#51f337>+10%</color></outline></color>"
  };
  Object.keys(heroRichTextVI).forEach(function (key) {
    exactFormattedVI[key] = heroRichTextVI[key];
  });
  // Exact RichText translations preserve every markup tag and all numeric values.
  var extraCombatRichVI = {
    "<color=ffffff><outline color=#0a0909 width=3>保留火焰吐息当前效果</outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Giữ nguyên hiệu ứng hiện tại của Hơi Thở Lửa</outline></color>",
    "<color=ffffff><outline color=#0a0909 width=3>保留闪电图腾当前能力</outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Giữ nguyên sức mạnh hiện tại của Tổ Sét</outline></color>",
    "<color=ffffff><outline color=#0a0909 width=3>反曲弓有概率连射<color=#28f27d>+1</color></outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Cung Cong có cơ hội bắn thêm <color=#28f27d>+1</color> mũi tên</outline></color>",
    "<color=ffffff><outline color=#0a0909 width=3>发射歼灭光线攻击<color=#28f27d>全场</color>敌人造成光系伤害</outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Bắn tia hủy diệt tấn công kẻ địch trên <color=#28f27d>toàn chiến trường</color>, gây sát thương hệ Ánh Sáng</outline></color>",
    "<color=ffffff><outline color=#0a0909 width=3>召唤<color=#28f27d>电龙</color>在场中游走攻击</outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Triệu hồi <color=#28f27d>Lôi Long</color> di chuyển và tấn công khắp chiến trường</outline></color>",
    "<color=ffffff><outline color=#0a0909 width=3>攻击提升<color=#28f27d>1%</color></outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Tăng tấn công <color=#28f27d>1%</color></outline></color>",
    "<color=ffffff><outline color=#0a0909 width=3>攻击提升<color=#28f27d>10%</color></outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Tăng tấn công <color=#28f27d>10%</color></outline></color>",
    "<color=ffffff><outline color=#0a0909 width=3>进化为<color=#28f27d>冰霜吐息</color>，造成冰霜伤害</outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Tiến hóa thành <color=#28f27d>Hơi Thở Băng Giá</color>, gây sát thương Băng</outline></color>",
    "<color=ffffff><outline color=#0a0909 width=3>进化为<color=#28f27d>暗影吐息</color>，造成暗影伤害</outline></color>": "<color=ffffff><outline color=#0a0909 width=3>Tiến hóa thành <color=#28f27d>Hơi Thở Bóng Tối</color>, gây sát thương Bóng Tối</outline></color>",
    "<color=ffffff><outline color=#0a0909 width=4>发射激光射线锁定单体敌人造成持续高额伤害</outline></color>": "<color=ffffff><outline color=#0a0909 width=4>Bắn tia laser khóa một mục tiêu, liên tục gây sát thương lớn</outline></color>"
  };
  Object.keys(extraCombatRichVI).forEach(function (key) {
    exactFormattedVI[key] = extraCombatRichVI[key];
  });
  // Display-only localization for the Night Hunter and Revenge Arrow Rain.
  var revengeArrowUITranslations = {
    "暗夜猎手": "Thợ Săn Bóng Đêm",
    "主角天赋里程碑解锁": "Mở khóa tại mốc Thiên Phú nhân vật",
    "复仇箭雨": "Mưa Tên Báo Thù",
    "【复仇箭雨】": "【Mưa Tên Báo Thù】",
    "黑夜降临": "Bóng đêm buông xuống",
    "发射箭雨攻击所有敌人": "bắn mưa tên tấn công toàn bộ kẻ địch",
    "对精英和首领伤害提升": "Sát thương lên Tinh Anh và Boss tăng gấp ",
    "圣银箭弩总等级": "Tổng cấp Nỏ Bạc Thánh"
  };
  Object.keys(revengeArrowUITranslations).forEach(function (key) {
    dictionary[key] = revengeArrowUITranslations[key];
  });
  // Preserve RichText attributes and the ×3 skill scaling factor.
  exactFormattedVI["<color=ffe680><outline color=#000000 width=3>主动技【复仇箭雨】：黑夜降临，发射箭雨攻击所有敌人；对精英和首领伤害提升<color=#28f27d>(圣银箭弩总等级)×3</color>倍</outline></color>"] = "<color=ffe680><outline color=#000000 width=3>Kỹ năng chủ động 【Mưa Tên Báo Thù】: Bóng đêm buông xuống, mưa tên tấn công toàn bộ kẻ địch; sát thương lên Tinh Anh và Boss tăng gấp <color=#28f27d>(Tổng cấp Nỏ Bạc Thánh)×3</color> lần</outline></color>";
  // Shop equipment / weapon evolution descriptions (2026-10-31).
  // Translate display strings only. Keep all original RichText attributes,
  // numeric bonuses, gameplay identifiers, serialization and asset keys.
  var shopEquipmentNamesVI = {
    "堕落强化":"Cường Hóa Sa Ngã",
    "大力冲撞":"Cú Húc Uy Lực",
    "强化炎爆":"Cường Hóa Viêm Bạo",
    "强风":"Gió Mạnh",
    "更大的刀":"Đao Khổng Lồ",
    "电圈加大":"Mở Rộng Vòng Điện",
    "秘银箭矢":"Tên Bí Ngân",
    "超速跑":"Chạy Siêu Tốc",
    "配置改装":"Cải Tiến Cấu Hình",
    "重拳":"Trọng Quyền",
    "镭射延时":"Laser Kéo Dài",
    "充能加速":"Tăng Tốc Nạp Năng Lượng",
    "大号电池":"Pin Dung Lượng Lớn",
    "天灾强化":"Cường Hóa Thiên Tai",
    "快速吟唱":"Niệm Chú Nhanh",
    "快速射击":"Bắn Nhanh",
    "快速挥拳":"Tung Đòn Nhanh",
    "改装!净化装置":"Cải Tiến! Bộ Thanh Tẩy",
    "暴伤之刃":"Đao Sát Thương Chí Mạng",
    "野蛮撞击":"Va Chạm Hung Bạo",
    "镭射增伤":"Laser Tăng Sát Thương",
    "黑洞风眼":"Mắt Bão Hố Đen",
    "冲击回响":"Dư Chấn",
    "削弱之风":"Gió Suy Yếu",
    "大大熊熊":"Gấu Khổng Lồ",
    "天灾爆破":"Thiên Tai Bộc Phá",
    "延迟爆发":"Bùng Nổ Trì Hoãn",
    "强能射线":"Tia Năng Lượng Mạnh",
    "改装!弹跳装置":"Cải Tiến! Bộ Nhảy Kép",
    "暴击之刃":"Đao Chí Mạng",
    "超重拳":"Siêu Trọng Quyền",
    "连续触发":"Kích Hoạt Liên Tiếp",
    "高速射击":"Bắn Siêu Tốc",
    "击碎护盾":"Phá Tan Lá Chắn",
    "加速召唤":"Triệu Hồi Nhanh",
    "天灾进化":"Tiến Hóa Thiên Tai",
    "巨人杀手":"Sát Thủ Khổng Lồ",
    "改装!自愈装置":"Cải Tiến! Bộ Tự Hồi Phục",
    "死亡之兆":"Điềm Báo Tử Vong",
    "狂暴之风":"Cuồng Phong",
    "破坏防御":"Phá Phòng Thủ",
    "镭射分裂":"Laser Phân Tách",
    "顷刻炼化":"Luyện Hóa Tức Thì",
    "飞速旋转":"Xoay Siêu Tốc",
    "天灾超进化":"Siêu Tiến Hóa Thiên Tai",
    "改装!生命装置":"Cải Tiến! Bộ Gia Tăng Sinh Lực",
    "炎术师之威":"Uy Lực Pháp Sư Lửa",
    "猎杀黑暗":"Săn Đuổi Bóng Đêm",
    "纯粹的暴力":"Bạo Lực Thuần Túy",
    "野兽狂奔":"Mãnh Thú Cuồng Lao",
    "铁皮回收":"Tái Chế Kim Loại",
    "风力提升":"Tăng Sức Gió",
    "飞刃投掷":"Phóng Phi Đao",
    "喵喵锤":"Búa Mèo Meo",
    "天灾统御":"Thống Lĩnh Thiên Tai",
    "改装!守护装置":"Cải Tiến! Bộ Bảo Hộ",
    "火力轰炸":"Oanh Tạc Hỏa Lực",
    "疾风之刃":"Lưỡi Đao Cuồng Phong",
    "精英杀手":"Sát Thủ Tinh Anh",
    "荒野之力":"Sức Mạnh Hoang Dã",
    "饮血之刀":"Huyết Đao",
    "奥丁之锤":"Búa Odin",
    "火焰射线":"Tia Lửa",
    "神圣射线":"Tia Thánh",
    "红武装色":"Sắc Vũ Trang Đỏ",
    "蓝武装色":"Sắc Vũ Trang Xanh",
    "陨石魔杖":"Trượng Thiên Thạch",
    "风暴战斧":"Rìu Chiến Bão Tố",
    "魔导师权杖":"Quyền Trượng Đại Pháp Sư"
  };
  Object.keys(shopEquipmentNamesVI).forEach(function (key) {
    dictionary[key] = shopEquipmentNamesVI[key];
    dictionary["【" + key + "】"] = "【" + shopEquipmentNamesVI[key] + "】";
  });
  var shopEquipmentUIText = {
    "压制怪物Ⅰ":"Áp Chế Quái I",
    "怪物速度":"Tốc độ quái ",
    "堕落王子剑伤害":"Sát thương Kiếm Hoàng Tử Sa Ngã ",
    "熊熊冲撞的击退效果":"Khả năng đẩy lùi của Gấu Xung Kích ",
    "炎爆球伤害":"Sát thương Cầu Lửa Bùng Nổ ",
    "龙卷风伤害":"Sát thương Lốc Xoáy ",
    "青龙刀体积":"Kích thước Thanh Long Đao ",
    "电圈的攻击范围":"Phạm vi tấn công của Vòng Điện ",
    "圣银箭弩伤害":"Sát thương Nỏ Bạc Thánh ",
    "火箭靴加速跑效果":"Hiệu quả tăng tốc của Giày Phản Lực ",
    "+1格子":"+1 ô",
    "直升机的伤害+30%":"Sát thương Trực Thăng +30%",
    "弹簧拳伤害":"Sát thương Cú Đấm Lò Xo ",
    "镭射光持续时长":"Thời gian duy trì tia laser ",
    "每次踩到雷神之锤的充能":"Mỗi lần giẫm lên Búa Thần Sấm, năng lượng nạp ",
    "强化直升机电池，使持续时间":"Nâng cấp pin Trực Thăng, tăng thời gian hoạt động ",
    "召唤的天灾军团属性":"Chỉ số quân đoàn Thiên Tai được triệu hồi ",
    "炎爆球延迟时间":"Độ trễ của Cầu Lửa Bùng Nổ ",
    "圣银箭弩充能效率":"Hiệu suất nạp Nỏ Bạc Thánh ",
    "每次充能的效率":"Hiệu suất mỗi lần nạp năng lượng ",
    "火箭靴可解除自身随机":"Giày Phản Lực loại bỏ ngẫu nhiên ",
    "层负面状态":" tầng hiệu ứng bất lợi",
    "青龙刀的暴击伤害":"Sát thương chí mạng Thanh Long Đao ",
    "熊熊冲撞的伤害":"Sát thương Gấu Xung Kích ",
    "镭射光持续期间造成伤害":"Sát thương tia laser tăng ",
    "递增":"dần",
    "龙卷风会将敌人吸附至":"Lốc Xoáy hút địch về ",
    "中心":"trung tâm",
    "位置":"vị trí",
    "炎爆结束后，令所有击中的敌人眩晕":"Sau vụ nổ, tất cả địch trúng đòn bị choáng ",
    "龙卷风削弱敌人的攻击力":"Lốc Xoáy giảm sức tấn công của địch ",
    "熊熊体型":"Kích thước Gấu Xung Kích ",
    "所有天灾军团死亡后会造成小范围爆炸":"Mỗi đơn vị Thiên Tai khi bị hạ sẽ phát nổ trong phạm vi nhỏ",
    "圣银箭弩命中后会打上死亡印记，若2 giây后敌人依然存活，则会再次造成":"Nỏ Bạc Thánh đánh dấu tử vong khi trúng địch. Nếu mục tiêu còn sống sau 2 giây, gây thêm ",
    "武器伤害":" sát thương vũ khí",
    "镭射光暴击率":"Tỉ lệ chí mạng tia laser ",
    "火箭靴的下一格子有概率触发":"Giày Phản Lực có cơ hội kích hoạt ",
    "二段跳":"nhảy kép",
    "青龙刀的暴击率":"Tỉ lệ chí mạng Thanh Long Đao ",
    "弹簧拳中心区域伤害":"Sát thương vùng trung tâm của Cú Đấm Lò Xo ",
    "结束后再次触发":"Sau khi kết thúc, kích hoạt thêm ",
    "次弱电圈效果":" lần hiệu ứng Vòng Điện yếu",
    "直升机的攻击速度":"Tốc đánh Trực Thăng ",
    "弹簧拳攻击能够直接消除怪物的护盾":"Cú Đấm Lò Xo phá trực tiếp lá chắn của quái",
    "每次踩到熊熊冲撞充能":"Mỗi lần giẫm lên Gấu Xung Kích, năng lượng nạp ",
    "小食尸鬼有概率升级为女妖":"Ghoul Nhỏ có cơ hội tiến hóa thành Nữ Yêu",
    "直升机对精英或首领敌人造成伤害":"Sát thương Trực Thăng lên quái Tinh Anh hoặc Boss ",
    "火箭靴可以恢复":"Giày Phản Lực hồi ",
    "单次触发的攻击，子弹连续命中相同目标伤害提升，每次伤害":"Trong một lần kích hoạt, đạn liên tiếp trúng cùng mục tiêu sẽ mạnh dần; mỗi phát ",
    "龙卷风的暴击伤害":"Sát thương chí mạng Lốc Xoáy ",
    "电圈的攻击使敌人易伤":"Đòn đánh Vòng Điện khiến địch chịu thêm sát thương ",
    "格外增加":"Thêm ",
    "条镭射光线索敌,造成":" tia laser truy mục tiêu, gây ",
    "炎爆球每击杀1个敌人则叠加":"Mỗi địch bị Cầu Lửa Bùng Nổ hạ sẽ cộng dồn ",
    "火球范围和":" phạm vi cầu lửa và ",
    "火球增伤;整局生效":" sát thương cầu lửa; có hiệu lực cả trận",
    "青龙刀的旋转速度":"Tốc độ xoay Thanh Long Đao ",
    "小食尸鬼有概率升级为憎恶":"Ghoul Nhỏ có cơ hội tiến hóa thành Quái Ghép",
    "每次触发，本场战斗最大生命值":"Mỗi lần kích hoạt, máu tối đa trong trận ",
    "场上所有武器造成的火焰伤害":"Sát thương Lửa từ mọi vũ khí đang dùng ",
    "圣银箭弩箭矢击杀敌人时的溢出伤害会扩散至附近随机":"Sát thương dư khi Nỏ Bạc Thánh hạ địch sẽ lan sang ",
    "个敌人身上":" kẻ địch ngẫu nhiên gần đó",
    "单次攻击击中的怪物越多伤害越高，最高提升至":"Một đòn trúng càng nhiều quái càng mạnh, tăng tối đa ",
    "；面对单一敌人时所有拳攻击此敌人":"; nếu chỉ còn một địch, mọi cú đấm sẽ tập trung vào mục tiêu đó",
    "解锁射线枪的进化选项：":"Mở nhánh tiến hóa Súng Tia Năng Lượng:",
    "解锁雷神之锤的进化选项：":"Mở nhánh tiến hóa Búa Thần Sấm:",
    "熊熊冲撞的车速":"Tốc độ lao của Gấu Xung Kích ",
    ",暴击率":", tỉ lệ chí mạng ",
    "直升机销毁时为主角增加":"Khi Trực Thăng bị phá hủy, nhân vật nhận thêm ",
    "少量":"một ít",
    "护盾值":" lá chắn",
    "龙卷风随移动距离增加自身范围逐渐增大":"Lốc Xoáy di chuyển càng xa, phạm vi càng lớn",
    "青龙刀在结束时会按当前朝向直线投掷出":"Khi kết thúc, Thanh Long Đao được phóng thẳng theo hướng hiện tại",
    "电圈持续期间每击杀":"Khi Vòng Điện còn hoạt động, mỗi lần hạ ",
    "个敌人则增加":" địch sẽ tăng ",
    "充能进度":" tiến độ nạp năng lượng",
    "提升堕落王子剑的充能速度，提升高级天灾的进化概率":"Tăng tốc nạp Kiếm Hoàng Tử Sa Ngã và tỉ lệ tiến hóa Thiên Tai cấp cao",
    "叠加":"Cộng dồn ",
    "伤害减免，至多":" giảm sát thương, tối đa ",
    "层":" tầng",
    "直升机每造成":"Mỗi khi Trực Thăng gây ",
    "次伤害会发射一颗火箭弹进行轰炸，火箭弹爆炸造成小范围火焰伤害":" lần sát thương sẽ bắn rocket gây sát thương Lửa trong vùng nhỏ",
    "龙卷风向周围发射刀刃造成大额伤害":"Lốc Xoáy phóng lưỡi dao xung quanh, gây sát thương lớn",
    "镭射光优先锁定精英并且伤害":"Tia laser ưu tiên khóa quái Tinh Anh, sát thương ",
    "熊熊冲撞有概率直接":"Gấu Xung Kích có cơ hội ",
    "秒杀":"hạ ngay",
    "小型怪物":" quái nhỏ",
    "解锁炎爆魔杖的进化选项：":"Mở nhánh tiến hóa Trượng Viêm Bạo:",
    "获得额外最大生命值":"Tăng công bằng ",
    "攻击力，杀敌后恢复生命值":" máu tối đa; hạ địch hồi ",
    "解锁弹簧拳的进化选项：":"Mở nhánh tiến hóa Cú Đấm Lò Xo:",
    "【七日登录】活动获得":"Nhận từ sự kiện 【Đăng Nhập 7 Ngày】",
    "使用雷电之力，攻击圆形大范围敌人":"Dùng sức mạnh sấm sét tấn công địch trong phạm vi tròn rộng",
    "召唤巨大火球轰击指定区域":"Triệu hồi cầu lửa khổng lồ oanh tạc khu vực chỉ định",
    "召唤旋转的激光青龙刀":"Triệu hồi Thanh Long Đao laser xoay tròn",
    "召唤无人机单位协助作战":"Triệu hồi máy bay không người lái hỗ trợ chiến đấu",
    "召唤熊熊冲撞，对沿途敌人造成击退":"Triệu hồi Gấu Xung Kích, đẩy lùi địch trên đường lao tới",
    "召唤龙卷风，持续攻击风暴附近的敌人":"Triệu hồi Lốc Xoáy, liên tục tấn công địch xung quanh",
    "堕落之力攻击敌人，并召唤天灾为自身作战":"Dùng sức mạnh sa ngã tấn công địch và triệu hồi quân đoàn Thiên Tai hỗ trợ",
    "大范围伤害，并附带眩晕效果":"Gây sát thương diện rộng kèm hiệu ứng choáng",
    "神圣的终极武器，必定暴击，溢出的暴击率转化为爆伤":"Vũ khí thánh tối thượng, luôn chí mạng; tỉ lệ chí mạng dư chuyển thành sát thương chí mạng"
  };
  Object.keys(shopEquipmentUIText).forEach(function (key) {
    dictionary[key] = shopEquipmentUIText[key];
  });

  var typewriterDialogues = [
    { cn: "这是我们的家园！你和鱼人别想前进一步！",
      vi: "Đây là nhà ta! Người cá đừng hòng tiến lên!" },
    { cn: "挣扎无用，整个小岛都会被我的鱼人军团吞噬！",
      vi: "Chống cự vô ích! Quân ta sẽ chiếm cả đảo!" },
    { cn: "鱼人大军来袭，拖动上阵反曲弓，守卫小岛！",
      vi: "Người cá đến! Kéo Cung Cong vào trận giữ đảo!" },
    { cn: "鱼人大军来袭，拖动反曲弓上阵，守卫小岛！",
      vi: "Người cá đến! Kéo Cung Cong vào trận giữ đảo!" },
    { cn: "选择这个强力的词条，让战斗如虎添翼！",
      vi: "Chọn bổ trợ mạnh để chiến đấu dễ dàng hơn!" }
  ];
  // Do not substitute single-character keys inside arbitrary names or data.
  var phraseKeys = Object.keys(dictionary).filter(function (key) {
    return key.length >= 3 && /[\u3400-\u9fff]/.test(key) && key.indexOf("\n") < 0;
  }).sort(function (a, b) { return b.length - a.length; });
  // The actual visible characters are independent of FairyGUI <color> markup.
  // Typewriter prefixes can contain half-open tags, which must never be fed
  // through a phrase-by-phrase translator.
  var extraTypedDialogues = [
  {
    "cn": "鱼人大军来袭，拖动上阵反曲弓，守卫小岛！",
    "vi": "Người cá tấn công! Kéo Cung Cong ra trận giữ đảo!"
  },
  {
    "cn": "鱼人大军来袭，拖动反曲弓上阵，守卫小岛！",
    "vi": "Người cá tấn công! Kéo Cung Cong ra trận giữ đảo!"
  },
  {
    "cn": "合成可以让装备变得更强",
    "vi": "Ghép trang bị để mạnh hơn!"
  },
  {
    "cn": "血量道具大大提升我们的生存，上阵后可恢复基地血量",
    "vi": "Vật phẩm máu tăng sức sống. Trang bị để hồi máu căn cứ!"
  }
];
  var styledTypedDialogues = [
  { cn: "主角技能已解锁，可以让我们的速度大幅提升！",
    vi: "Kỹ năng nhân vật đã mở khóa, giúp tăng mạnh tốc độ!",
    rich: "<color=2a292f><color=#158a24>Kỹ năng nhân vật</color> đã mở khóa, giúp <color=#158a24>tăng mạnh tốc độ</color>!</color>" },

    { cn: "主角功能已解锁，快来看看吧！",
      vi: "Tính năng nhân vật đã mở khóa, vào xem ngay!",
      rich: "<color=2a292f><color=#158a24>Tính năng nhân vật</color> đã mở khóa, vào xem ngay!</color>" },
    { cn: "恭喜合成彩色武器，快选择这个进化路线试试吧！",
      vi: "Đã ghép thành vũ khí đa sắc! Hãy thử chọn nhánh tiến hóa này!",
      rich: "<color=2a292f>Đã ghép thành <color=#158a24>vũ khí đa sắc</color>! Hãy thử chọn <color=#158a24>nhánh tiến hóa</color> này!</color>" }
  ];
  var allTypedDialogues = typewriterDialogues.concat(extraTypedDialogues, styledTypedDialogues);

  // Shared guide renderer: match source Chinese and intermediate strings
  // partially translated by the Cocos typewriter; never mutate game data.
  var tutorialLinesVI = [
    {
      cn: "升级可提升武器属性",
      segments: [["升级可提升武器属性"]],
      parts: [["Nâng cấp để tăng chỉ số vũ khí", false]]
    },
    {
      cn: "升级天赋可以大幅提升作战能力！",
      segments: [
        ["升级天赋", "Nâng thiên phú"],
        ["可以大幅", "giúp", "có thể", "có thể tăng mạnh"],
        ["提升", "tăng", "tăng mạnh"],
        ["作战能力！", "sức chiến đấu!", "lực chiến!"]
      ],
      parts: [["Nâng thiên phú", true], [" giúp ", false],
              ["tăng mạnh", true], [" sức chiến đấu!", false]]
    },
    {
      cn: "提速道具可以让我们的速度大幅提升，快试试吧！",
      segments: [
        ["提速道具", "Vật phẩm tăng tốc"],
        ["可以让我们的"],
        ["速度大幅提升", "Tốc độ tăng mạnh"],
        ["，快"],
        ["试试吧！", " để thử nhé!"]
      ],
      parts: [["Vật phẩm tăng tốc", true], [" giúp tăng mạnh ", false],
              ["tốc độ", true], [", thử ngay nhé!", false]]
    },
    {
      cn: "武器合成至4阶后可进化为彩色武器，不仅酷炫，而且输出超强，快试试吧！",
      segments: [
        ["武器合成至4阶后可"],
        ["进化为", "Tiến hóa thành "],
        ["彩色武器", "vũ khí đa sắc"],
        ["，不仅酷炫，而且输出超强，快"],
        ["试试吧！", " để thử nhé!"]
      ],
      parts: [["Ghép vũ khí lên bậc 4 sẽ tiến hóa thành ", false],
              ["vũ khí đa sắc", true], [": vừa đẹp mắt vừa cực mạnh! Thử ngay!", false]]
    },
    {
      cn: "继续拖动上阵小火龙吐息",
      segments: [["继续拖动上阵小火龙吐息"]],
      parts: [["Tiếp tục ", false], ["kéo", true], [" Hơi Thở Rồng Lửa Nhỏ vào trận", false]]
    },
    {
      cn: "继续拖动上阵闪电图腾",
      segments: [["继续拖动上阵闪电图腾"]],
      parts: [["Tiếp tục ", false], ["kéo", true], [" Tổ Sét vào trận", false]]
    }
  ];
  function tutorialPlain(s) { return s.replace(/\s+/g, ""); }
  function tutorialProgress(visible, guide) {
    var segments = guide.segments;
    function matchSegment(n, pos, done) {
      if (pos === visible.length) return done;
      if (n >= segments.length) return -1;
      var options = segments[n], width = tutorialPlain(options[0]).length;
      var left = visible.slice(pos), best = -1;
      for (var i = 0; i < options.length; i++) {
        var option = tutorialPlain(options[i]);
        if (!option) continue;
        if (option.indexOf(left) === 0) {
          best = Math.max(best, done + width * left.length / option.length);
        }
        if (left.indexOf(option) === 0) {
          best = Math.max(best, matchSegment(n + 1, pos + option.length, done + width));
        }
      }
      return best;
    }
    return matchSegment(0, 0, 0);
  }
  function translateGuidePrefix(value) {
    if (typeof value !== "string") return null;
    var dark = /^\s*<color\s*=\s*#?2a292f>/i.test(value);
    var marked = /<color\s*=\s*#?158a24>/i.test(value);
    var visible = tutorialPlain(value.replace(/<[^>]*>/g, "").replace(/<[^>]*$/, ""));
    if (!visible) return null;
    for (var i = 0; i < tutorialLinesVI.length; i++) {
      var guide = tutorialLinesVI[i];
      if (!dark && !marked && visible !== tutorialPlain(guide.cn)) continue;
      var progress = tutorialProgress(visible, guide);
      if (progress < 0) continue;
      var total = 0;
      for (var j = 0; j < guide.parts.length; j++) total += guide.parts[j][0].length;
      var remaining = Math.min(total, Math.max(1, Math.ceil(total * progress / tutorialPlain(guide.cn).length)));
      var out = dark ? "<color=#2a292f>" : "";
      for (var j = 0; j < guide.parts.length && remaining > 0; j++) {
        var part = guide.parts[j], chars = part[0].slice(0, remaining);
        out += part[1] ? "<color=#158a24>" + chars + "</color>" : chars;
        remaining -= chars.length;
      }
      return out + (dark ? "</color>" : "");
    }
    return null;
  }

  function translateUI(value) {
    if (typeof value !== "string" || !/[\u3400-\u9fff]/.test(value)) return value;
    var input = value.replace(/\r\n/g, "\n");
    var guideVI = translateGuidePrefix(input);
    if (guideVI !== null) return guideVI;
    if (Object.prototype.hasOwnProperty.call(exactFormattedVI, input)) return exactFormattedVI[input];
    if (Object.prototype.hasOwnProperty.call(dictionary, input)) return dictionary[input];

    // Ignore markup while counting displayed Han characters for typed dialogs.
    // Completely replace recognized partial dialogs so no broken tags survive.
    var plain = input.replace(/<[^>]*>/g, "").replace(/<[^>]*$/, "").replace(/\s+/g, "");
    for (var t = 0; t < allTypedDialogues.length; t++) {
      var dialog = allTypedDialogues[t];
      var source = dialog.cn.replace(/\s+/g, "");
      if (plain && plain.length <= source.length && source.indexOf(plain) === 0) {
        var count = Math.max(1, Math.ceil(plain.length * dialog.vi.length / source.length));
        if (dialog.rich && plain.length === source.length) return dialog.rich;
        return dialog.vi.slice(0, count);
      }
    }

    var output = input
      // Preserve the colored rarity markup while keeping Vietnamese word order.
      .replace(/火箭靴可以恢复(<color[^>]*>)([^<]*)(<\/color>)生命值/g, function (_, open, amount, close) {
        return "Giày Phản Lực hồi " + open + amount + close + " máu";
      })
      .replace(/必出(<color[^>]*>)(高级|稀有)(<\/color>)玩具/g, function (_, open, rarity, close) {
        return "Chắc chắn nhận đồ chơi " + open + (rarity === "高级" ? "Cao cấp" : "Hiếm") + close;
      })
      .replace(/龙卷风会将敌人吸附至(<color[^>]*>)中心(<\/color>)位置/g, "Lốc Xoáy hút địch về vị trí $1trung tâm$2")
      .replace(/Lv(\d+)解锁/g, "Mở ở cấp $1")
      .replace(/挑战\s*(\d+)\s*次精英章节/g, "Thử thách chương Tinh Anh $1 lần")
      .replace(/青铜\s*(\d+)\s*阶/g, "Đồng bậc $1")
      .replace(/勇者\s*(\d+)\s*阶/g, "Dũng Giả bậc $1")
      .replace(/王者\s*(\d+)\s*阶/g, "Vương Giả bậc $1")
      .replace(/白银\s*(\d+)\s*阶/g, "Bạc bậc $1")
      .replace(/黄金\s*(\d+)\s*阶/g, "Vàng bậc $1")
      .replace(/\[([^\]]+)\]碎片不足/g, function (_, item) {
        var name = Object.prototype.hasOwnProperty.call(dictionary, item) ? dictionary[item] : item;
        return "Không đủ mảnh [" + name + "]";
      })
      .replace(/(\d+(?:\.\d+)?)秒/g, "$1 giây")
      .replace(/(\d+(?:\.\d+)?)度/g, "$1 độ")
      .replace(/(\d+)次(?=<\/color>)/g, "$1 lần")
      .replace(/(<\/color>)伤害(?=(?:<\/outline>|$))/g, "$1 sát thương")
      // Full task patterns must be replaced BEFORE generic substrings such as
      // 商店购买 or 领取, so Vietnamese word order and quantities stay intact.
      .replace(/开启\s*(\d+)\s*个普通宝箱/g, "Mở $1 rương thường")
      .replace(/开启\s*(\d+)\s*个高级宝箱/g, "Mở $1 rương cao cấp")
      .replace(/击败\s*(\d+)\s*个怪物/g, "Tiêu diệt $1 quái")
      .replace(/升级天赋\s*(\d+)\s*次/g, "Nâng thiên phú $1 lần")
      .replace(/升级武器\s*(\d+)\s*次/g, "Nâng vũ khí $1 lần")
      .replace(/商店购买\s*(\d+)\s*次道具/g, "Mua vật phẩm $1 lần tại Shop")
      .replace(/天赋\s*(\d+)\s*级解锁/g, "Mở ở thiên phú cấp $1")
      .replace(/挑战\s*(\d+)\s*次章节/g, "Thử thách chương $1 lần")
      .replace(/观看广告\s*(\d+)\s*次/g, "Xem quảng cáo $1 lần")
      .replace(/进行\s*(\d+)\s*次快速挂机/g, "Treo máy nhanh $1 lần")
      .replace(/领取\s*(\d+)\s*次挂机奖励/g, "Nhận thưởng treo máy $1 lần")
      .replace(/坚守到第?\s*(\d+)\s*波即可体验/g, "Trụ đến đợt $1 để trải nghiệm ")
      .replace(/召唤神龙【电龙之召】图腾/g, "Vật Tổ Lôi Long")
      .replace(/第\s*(\d+)\s*波解锁/g, "Mở khóa ở đợt $1")
      .replace(/第\s*(\d+)\s*波/g, "Đợt $1")
      .replace(/第\s*(\d+)\s*关/g, "Màn $1")
      .replace(/第\s*(\d+)\s*天/g, "Ngày $1")
      .replace(/第\s*(\d+)\s*章/g, "Chương $1")
      .replace(/资源加载中[.。…]+/g, "Đang tải tài nguyên...");

    // Never rewrite attribute names, HTML-like markup, color values or URLs.
    // Translate the visible segments, including short Chinese labels.
    output = output.split(/(<[^>]*>)/g).map(function (segment) {
      if (!/[\u3400-\u9fff]/.test(segment) || /^</.test(segment)) return segment;
      if (Object.prototype.hasOwnProperty.call(dictionary, segment)) return dictionary[segment];
      for (var i = 0; i < phraseKeys.length; i++) {
        var key = phraseKeys[i];
        if (segment.indexOf(key) !== -1) segment = segment.split(key).join(dictionary[key]);
      }
      return segment.replace(/[\u3400-\u9fff]{2,}/g, function (part) {
        return Object.prototype.hasOwnProperty.call(dictionary, part) ? dictionary[part] : part;
      });
    }).join("");
    if (input.indexOf("电流可弹射") !== -1) {
      output = output.replace(/(<\/color>)\s*lượt(?=<\/outline>)/g, "$1 lần");
    }
    // Preserve unknown text for future review, but not half-typed dialogs.
    if (/[\u3400-\u9fff]/.test(output)) translationMisses[input] = (translationMisses[input] || 0) + 1;
    return output;
  }
  root.ArcadeDuck = {
    init: init, flush: flush, changed: changed, snapshot: snapshot,
    // Stable Cocos key across browsers. Account-specific data is isolated by
    // the Arcade authenticated cloud record and switchPlayer cache.
    nativeSaveAccount: function () { return authenticated ? "gvduck" : ""; },
    metadata: function () { return metadata(snapshot()); },
    translateUI: translateUI, translateGuidePrefix: translateGuidePrefix, untranslated: function () { return Object.assign({}, translationMisses); },
    onRoundStart: onRoundStart, onMonsterDie: onMonsterDie, onBattleEnd: onBattleEnd,
    onResultShown: onResultShown, scoreDetails: scoreDetails,
    status: function () { return { ready: ready, cloudEnabled: enabled, authenticated: authenticated, dirty: dirty, user: identity }; }
  };
})(window);
