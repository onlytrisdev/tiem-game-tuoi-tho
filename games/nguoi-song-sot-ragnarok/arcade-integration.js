/* Arcade adapter for the HTML5/Cocos Ragnarok build. No engine/save-schema replacement. */
(function (root) {
  "use strict";
  const GAME = "nguoi-song-sot-ragnarok";
  const API = "https://localhost/account/";
  const qs = new URLSearchParams(root.location.search);
  const gid = qs.get("gid") || "";
  const token = qs.get("token") || "";
  const authenticated = Boolean(gid && token);
  function accountIdentity(value) {
    if (!value) return "guest";
    try {
      const base64 = value.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      const data = JSON.parse(decodeURIComponent(Array.from(root.atob(base64),
        c => "%" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("")));
      const id = data.userid || data.userId || data.sub || data.username;
      if (id != null) return String(id);
    } catch (_) { /* opaque tokens have no readable account claim */ }
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
    return "opaque-" + (hash >>> 0).toString(36);
  }
  const namespace = "gv:ragnarok:h5:v2:" + encodeURIComponent(gid || "guest") + ":" +
    encodeURIComponent(accountIdentity(token)) + ":";
  const store = root.localStorage;
  const dbKeys = ("DBHead PrivacyDB LoadDB SoundDB SceneDB ItemDB XinFaDB Terrain WeaponDB FaBaoDB FaQiDB GongFaDB SkillDB MainMenu DrawCardDB Sign EveryDaySign Role ZhenBaoGe GuideDB StoryDB MonumentDB AnalyseDB IntroDB TipsDB RankDB PetDB PerformanceDB FunctionOpenDB TaskDB XiuLianDB ShopDB EquipmentDB SuoYaoTaDB CompensationDB ActivityDB AdDB").split(" ");
  const dbSet = new Set(dbKeys);
  const log = (...args) => console.info("[Arcade H5]", ...args);
  let enabled = false, initialized = false, saving = false, changed = false, revision = 0;
  let expectedStamp = null, resetId = "", lastSignature = "", lastCloud = null;
  let timer = null, pending = null, restoring = false, adBusy = false;
  let resetting = false, scorePopupBusy = false, lastBattleId = "";

  // Weighted Arcade scoring (metadata SchemaVersion 2 remains backward compatible).
  const MONSTER_POINTS=Object.freeze({normal:1,advanced:5,elite:10,miniBoss:25,boss:50});
  const ITEM_POINTS=Object.freeze({1:2,2:2,3:5,4:10,5:20,6:20,7:20});
  const LOOT_TYPES=new Set([1004,1006,1010,2000,2001,2002,2003,2004,2005,2006]);
  const BMONSTER_IDS=new Set([230001,230002,230003,230004,240001,330002,330004,331001,331003,340001,340002,340003,340004,340005,340006,390001]);
  const NG_ELITES=new Set([990031,990032,991033,991034]);
  const NG_BOSSES=new Set([991015,991035]);
  const emptyKills=()=>({normal:0,advanced:0,elite:0,miniBoss:0,boss:0});
  const newStats=()=>({scoreVersion:3,totalWins:0,battles:0,losses:0,bestKills:0,
    totalBattleScore:0,bestBattleScore:0,totalSurvivalSeconds:0,totalKills:0,
    totalItemsCollected:0,killsByTier:emptyKills(),itemsByQuality:{},lastBattle:null,history:[]});
  let scoreStats=newStats(),activeBattle=null;
  function asNum(x){const n=Number(x);return Number.isFinite(n)&&n>0?Math.min(1e9,Math.floor(n)):0;}
  function scoreFrom(x){
    x=x&&typeof x==="object"&&!Array.isArray(x)?x:{};
    const previousWins=asNum(x.totalWins);
    return {scoreVersion:3,totalWins:previousWins,battles:asNum(x.battles),losses:asNum(x.losses),
      bestKills:asNum(x.bestKills),totalBattleScore:asNum(x.totalBattleScore==null?previousWins:x.totalBattleScore),
      bestBattleScore:asNum(x.bestBattleScore),totalSurvivalSeconds:asNum(x.totalSurvivalSeconds),
      totalKills:asNum(x.totalKills),totalItemsCollected:asNum(x.totalItemsCollected),
      killsByTier:Object.fromEntries(Object.keys(MONSTER_POINTS).map(k=>[k,asNum((x.killsByTier||{})[k])])),
      itemsByQuality:Object.fromEntries(Object.entries(x.itemsByQuality||{}).map(([k,v])=>[k,asNum(v)])),
      lastBattle:x.lastBattle||null,history:Array.isArray(x.history)?x.history.slice(-20):[]};
  }
  function onBattleStart(id){
    if(!initialized||resetting||!id)return;
    activeBattle={id:String(id),kills:emptyKills(),itemsByQuality:{},itemsById:{},itemCount:0,itemScore:0};
  }
  function monsterTier(ev){
    if(!ev||typeof ev!=="object")return null;
    const id=asNum(ev.monsterId),type=Number(ev.type);
    if(type===10003)return null; // Group node is not a monster.
    if(type===10006||(id&&id===asNum(ev.finalBossId))||NG_BOSSES.has(id))return "boss";
    if(type===10005||BMONSTER_IDS.has(id))return "miniBoss";
    if(type===10004||NG_ELITES.has(id))return "elite";
    if(type===10009||(id>=990000&&id<1000000))return "advanced";
    return type===10002?"normal":null;
  }
  function onMonsterKilled(ev){
    if(!activeBattle||resetting||!ev||String(ev.battleId||"")!==activeBattle.id)return;
    const tier=monsterTier(ev);
    if(tier)activeBattle.kills[tier]++;
  }
  function onItemCollected(ev){
    if(!activeBattle||resetting||!ev)return;
    const id=asNum(ev.id),num=Math.min(1000,asNum(ev.quantity||1));
    const kind=Math.floor(id/1000),quality=Math.max(1,Math.min(7,asNum(ev.quality)||1));
    // Real pickup only; exclude EXP/HP orbs, currencies and altar energy to avoid exploit.
    if(!num||!LOOT_TYPES.has(kind))return;
    activeBattle.itemCount+=num;
    activeBattle.itemScore+=num*(ITEM_POINTS[quality]||2);
    activeBattle.itemsByQuality[quality]=(activeBattle.itemsByQuality[quality]||0)+num;
    activeBattle.itemsById[id]=(activeBattle.itemsById[id]||0)+num;
  }
  function cloudFingerprint(progress, stats) {
    return JSON.stringify({ progress: progress || null, score: scoreFrom(stats) });
  }
  function loadScore() {
    try { return scoreFrom(JSON.parse(kv("scoreStats") || "null")); } catch (_) { return newStats(); }
  }
  function keepScore() { kv("scoreStats", JSON.stringify(scoreStats)); }
  function clearedWins(progress) {
    const chapters = progress && progress.DB && progress.DB.Terrain && progress.DB.Terrain.chapters || {};
    let result = 0;
    for (const c of Object.values(chapters)) for (const wins of Object.values(c && c.clearNums || {})) result += asNum(wins);
    return Math.min(1e9, result);
  }

  function kv(key, value) {
    const name = namespace + key;
    if (value === undefined) return store.getItem(name);
    if (value === null) store.removeItem(name);
    else store.setItem(name, value);
  }
  function parse(raw) { return typeof raw === "string" ? JSON.parse(raw) : raw; }
  function stamp(data) { return data && (data.updatedAt || data.UpdatedAt || data.NgaySua || data.ngaySua) || null; }
  function response(raw) {
    const obj = parse(raw);
    if (!obj || typeof obj !== "object") throw Error("Invalid response");
    if (obj.Status != null && Number(obj.Status) !== 1) throw Error("History rejected");
    if (obj.success === false || obj.Success === false) throw Error("History rejected");
    return obj;
  }
  function normalize(progress) {
    if (!progress || typeof progress !== "object" || Array.isArray(progress) || !progress.DB ||
        typeof progress.DB !== "object" || Array.isArray(progress.DB)) throw Error("Invalid H5 DB");
    const db = {};
    for (const [key, value] of Object.entries(progress.DB)) {
      if (!dbSet.has(key) || !value || typeof value !== "object" || Array.isArray(value)) throw Error("Invalid DB key");
      db[key] = value;
    }
    return { DB: db };
  }
  function snapshot() {
    const db = {};
    for (const key of dbKeys) {
      const raw = store.getItem(key);
      if (raw == null) continue;
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) db[key] = parsed;
      } catch (_) { /* ignore damaged entries without transmitting them */ }
    }
    return { DB: db };
  }
  function roleLevel(p) {
    const infos = (p.DB.Role || {}).roleInfos || {};
    return Object.keys(infos).reduce((best, key) => Math.max(best, Math.max(0, Number((infos[key] || {}).lv) || 0)), 0);
  }
  function metadata(progress) {
    const lv = roleLevel(progress);
    return { Game: GAME, SchemaVersion: 2, CurrentLevel: lv, CurrentStage: lv,
      TotalScore: scoreStats.totalBattleScore, BestScore: scoreStats.totalBattleScore,
      ScoreStats: scoreStats, SavedAt: new Date().toISOString(),
      ResetNonce: resetId, Progress: progress };
  }
  function decode(raw) {
    const envelope = response(raw);
    if (!("Data" in envelope) && !("data" in envelope)) throw Error("History Data missing");
    const record = parse("Data" in envelope ? envelope.Data : envelope.data);
    if (record == null || record === "" || Array.isArray(record) && !record.length)
      return { progress: null, nonce: "", updatedAt: stamp(envelope) };
    const rec = parse(record);
    const mk = ["MetaData", "Metadata", "metadata"].find(k => Object.prototype.hasOwnProperty.call(rec, k));
    if (!mk) throw Error("History metadata missing");
    const meta = parse(rec[mk]);
    if (!meta || typeof meta !== "object" || !Object.keys(meta).length)
      return { progress: null, nonce: "", updatedAt: stamp(rec) || stamp(envelope) };
    if (meta.Game !== GAME || meta.SchemaVersion !== 2) throw Error("Foreign or incompatible H5 metadata");
    return { progress: normalize(meta.Progress), nonce: meta.ResetNonce || "",
      score: scoreFrom(meta.ScoreStats || { totalWins: meta.TotalScore }),
      updatedAt: stamp(rec) || stamp(envelope) };
  }
  function request(endpoint, data) {
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timeout = setTimeout(() => controller && controller.abort(), 6500);
    return fetch(API + endpoint, { method: "POST", credentials: "include",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: new URLSearchParams(data).toString(), signal: controller ? controller.signal : undefined
    }).then(async r => {
      const payload = await r.text();
      if (!r.ok) throw Error("History HTTP " + r.status);
      return response(payload);
    }).finally(() => clearTimeout(timeout));
  }
  async function load() {
    return decode(await request("GetHistoryGame", { gameId: gid, token }));
  }
  function apply(progress) {
    restoring = true;
    try {
      for (const key of dbKeys) {
        if (Object.prototype.hasOwnProperty.call(progress.DB, key)) {
          store.setItem(key, JSON.stringify(progress.DB[key]));
        } else store.removeItem(key);
      }
    } finally { restoring = false; }
  }
  function switchAccount() {
    const ownerKey = "gv:ragnarok:active-owner";
    const previous = store.getItem(ownerKey);
    if (previous && previous !== namespace) {
      // Never show a former account's inventory or currency to the next login.
      if (previous.startsWith("gv:ragnarok:h5:v2:")) {
        store.setItem(previous + "localDB", JSON.stringify(snapshot()));
      }
      for (const key of dbKeys) store.removeItem(key);
      try {
        const saved = kv("localDB");
        if (saved) apply(normalize(JSON.parse(saved)));
      } catch (_) { /* keep a clean account, never use another account's DB */ }
    }
    store.setItem(ownerKey, namespace);
  }
  function signature() { return JSON.stringify(snapshot()); }
  function dirty() {
    if (restoring || resetting) return;
    changed = true;
    revision++;
    kv("dirty", "1");
    schedule();
  }
  function schedule() {
    if (!initialized || !enabled || !changed || timer) return;
    timer = setTimeout(() => { timer = null; flush(); }, 1500);
  }
  async function flush() {
    if (resetting || !initialized || !enabled || !changed || saving) return false;
    saving = true;
    const before = revision;
    try {
      const remote = await load();
      if (remote.nonce !== resetId) {
        enabled = false;
        log("Remote reset marker changed; blocked stale upload");
        return false;
      }
      const local = snapshot();
      // This game has intertwined inventories/currencies: never field-merge a stale DB.
      // If cloud changed since our initial GET, fail closed instead of erasing player progress.
      if (lastCloud !== null && cloudFingerprint(remote.progress, remote.score) !== lastCloud) {
        enabled = false;
        log("Cloud changed in another session; blocked conflicting upload");
        return false;
      }
      const meta = metadata(local);
      const result = await request("SaveHistoryGame", {
        gameId: gid, token, metadata: JSON.stringify(meta), score: String(meta.TotalScore),
        expectedUpdatedAt: remote.updatedAt == null ? "" : String(remote.updatedAt)
      });
      expectedStamp = stamp(result.Data || result.data) || stamp(result);
      lastCloud = cloudFingerprint(local, scoreStats);
      if (before === revision) {
        changed = false;
        kv("dirty", "0");
        lastSignature = JSON.stringify(local);
      } else schedule();
      log("SaveHistory OK", Object.keys(local.DB).length, "DB");
      return true;
    } catch (error) {
      log("SaveHistory failed; retain local progress", error.message);
      return false;
    } finally { saving = false; }
  }
  async function init() {
    if (pending) return pending;
    pending = (async () => {
      switchAccount();
      const local = snapshot();
      const hadLocal = Object.keys(local.DB).length > 0;
      changed = kv("dirty") === "1";
      scoreStats = loadScore();
      scoreStats.totalWins = Math.max(scoreStats.totalWins, clearedWins(local));
      if(scoreStats.totalBattleScore<scoreStats.totalWins&&scoreStats.battles===0)
        scoreStats.totalBattleScore=scoreStats.totalWins;
      keepScore();
      try {
        if (authenticated) {
          const remote = await load();
          enabled = true;
          expectedStamp = remote.updatedAt;
          resetId = remote.nonce;
          lastCloud = cloudFingerprint(remote.progress, remote.score);
          const prevNonce = kv("nonce");
          if (!changed || prevNonce !== resetId) {
            scoreStats = scoreFrom(remote.score);
            scoreStats.totalWins = Math.max(scoreStats.totalWins, clearedWins(remote.progress));
            keepScore();
          }
          // Unsent local edits from same account may be newer, but don't mix unknown DB revisions.
          if (remote.progress && !(changed && prevNonce === resetId && hadLocal)) {
            apply(remote.progress);
            changed = false;
            kv("dirty", "0");
            log("Restored all H5 player DBs from Arcade");
          } else if (remote.progress && changed && prevNonce === resetId) {
            log("Pending local progress retained for conflict-safe sync");
          } else if (!remote.progress && hadLocal && (prevNonce === resetId || !prevNonce)) {
            changed = true;
          }
          kv("nonce", resetId);
        } else {
          log("No authenticated gid/token: H5 local save only");
        }
      } catch (error) {
        // Critical: if GET fails or record is not recognized, never upload defaults.
        enabled = false;
        log("Cloud restore unavailable; uploads disabled", error.message);
      }
      initialized = true;
      lastBattleId = String(scoreStats.lastBattle && scoreStats.lastBattle.id || "");
      lastSignature = signature();
      kv("localDB", lastSignature);
      root.setInterval(function () {
        const now = signature();
        if (now !== lastSignature) {
          lastSignature = now;
          kv("localDB", now);
          dirty();
        }
        if (changed) flush();
      }, 10000);
      if (changed) schedule();
      return true;
    })();
    return pending;
  }
  function onNativeSave() {
    if (!initialized || resetting) return;
    const now = signature();
    if (now !== lastSignature) { lastSignature = now; kv("localDB", now); dirty(); }
  }
  function isResetting() { return resetting; }
  function removePlayerKeys() {
    // The actual DataConst key is "Terrain", not "TerrainDB".
    for (const key of dbKeys.concat(["TerrainDB"])) store.removeItem(key);
    for (let i = store.length - 1; i >= 0; i--) {
      const key = store.key(i);
      if (key && key.startsWith(namespace)) store.removeItem(key);
    }
    scoreStats = newStats();
    activeBattle = null;
    lastBattleId = "";
    changed = false;
    lastSignature = JSON.stringify({ DB: {} });
  }
  async function clearData() {
    if (resetting || saving) return false;
    const before = resetId;
    const fresh = "reset-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
    resetting = true; enabled = false;
    if (timer) { clearTimeout(timer); timer = null; }
    try {
      if (authenticated) {
        const cloud = await load();
        if (cloud.nonce !== before) throw Error("Cloud changed");
        resetId = fresh; scoreStats = newStats();
        const meta = metadata({ DB: {} });
        await request("SaveHistoryGame", {
          gameId: gid, token, metadata: JSON.stringify(meta), score: "0",
          expectedUpdatedAt: cloud.updatedAt == null ? "" : String(cloud.updatedAt)
        });
      } else {
        resetId = fresh;
        log("gid without token: local H5 reset only; cloud requires authentication");
      }
      removePlayerKeys();
      kv("nonce", resetId); kv("dirty", "0"); keepScore();
      root.location.reload();
      return true;
    } catch (error) {
      resetId = before; scoreStats = loadScore();
      resetting = false; enabled = authenticated;
      if (changed) schedule();
      log("Data reset rejected; current progress retained", error.message);
      return false;
    }
  }

  function onBattleEnd(result){
    if(!initialized||resetting||!result||typeof result!=="object")return false;
    const id=String(result.battleId||"");
    if(id&&id===lastBattleId)return false;
    lastBattleId=id;
    const win=result.win===true;
    let role={},equipment={};
    try{role=JSON.parse(store.getItem("Role")||"{}");}catch(_){}
    try{equipment=JSON.parse(store.getItem("EquipmentDB")||"{}");}catch(_){}
    const roleId=asNum(role.roleId),roleInfo=role.roleInfos&&role.roleInfos[roleId]||{};
    const gear=(Array.isArray(result.gear)?result.gear:Object.values(equipment.usingEquipmentDatas||{}))
      .filter(x=>x&&typeof x==="object").slice(0,16)
      .map(x=>({id:asNum(x.id),level:asNum(x.lv),quality:asNum(x.quality),
        uid:asNum(x.uid),part:asNum(x.part),group:asNum(x.group)}));
    const battle=activeBattle&&activeBattle.id===id?activeBattle:null;
    const killTiers=battle?{...battle.kills}:emptyKills();
    const scoredKills=Object.values(killTiers).reduce((sum,n)=>sum+n,0);
    const durationSeconds=asNum(result.durationSeconds);
    const timeScore=Math.floor(durationSeconds/10);
    const killScore=Object.entries(MONSTER_POINTS).reduce((sum,[tier,pts])=>sum+(killTiers[tier]||0)*pts,0);
    const itemScore=battle?battle.itemScore:0,winScore=win?100:0;
    const battleScore=timeScore+killScore+itemScore+winScore;
    const entry={
      id:id||"battle-"+Date.now(),timestamp:new Date().toISOString(),win,
      terrainId:asNum(result.terrainId),chapter:asNum(result.chapter),
      difficulty:asNum(result.difficulty),kills:asNum(result.kills),
      scoredKills,killTiers,wave:asNum(result.wave),durationSeconds,
      battleLevel:asNum(result.battleLevel),roleId,roleLevel:asNum(roleInfo.lv),gear,
      itemsCollected:battle?battle.itemCount:0,
      itemsByQuality:battle?{...battle.itemsByQuality}:{},
      itemsById:battle?{...battle.itemsById}:{},
      points:{survival:timeScore,monsters:killScore,items:itemScore,win:winScore},
      battleScore
    };
    activeBattle=null;
    scoreStats.battles++;
    if(win)scoreStats.totalWins++;else scoreStats.losses++;
    scoreStats.bestKills=Math.max(scoreStats.bestKills,entry.kills);
    scoreStats.totalBattleScore=Math.min(1e9,scoreStats.totalBattleScore+battleScore);
    scoreStats.bestBattleScore=Math.max(scoreStats.bestBattleScore,battleScore);
    scoreStats.totalSurvivalSeconds+=durationSeconds;
    scoreStats.totalKills+=scoredKills;
    scoreStats.totalItemsCollected+=entry.itemsCollected;
    for(const tier of Object.keys(MONSTER_POINTS))scoreStats.killsByTier[tier]+=killTiers[tier];
    for(const [q,n] of Object.entries(entry.itemsByQuality))
      scoreStats.itemsByQuality[q]=(scoreStats.itemsByQuality[q]||0)+n;
    scoreStats.lastBattle=entry;
    scoreStats.history.push(entry);
    if(scoreStats.history.length>20)scoreStats.history.shift();
    keepScore();dirty();
    // Invoke Arcade's built-in popup on both victory and defeat.
    if(scorePopupBusy||typeof root.GV!=="function"){
      if(typeof root.GV!=="function")log("Arcade score SDK absent; points kept locally");
      return true;
    }
    scorePopupBusy=true;
    let finished=false;
    const close=()=>{if(finished)return;finished=true;clearTimeout(timeout);scorePopupBusy=false;};
    const timeout=setTimeout(close,20000);
    try{new root.GV().saveScore(scoreStats.totalBattleScore,close);}
    catch(error){log("saveScore error",error.message);close();}
    return true;
  }
  function getScoreStats() { return scoreFrom(scoreStats); }

  function resolveAd() {
    for (const host of [root, root.parent, root.top]) {
      try { if (host && typeof host.GVAdBreak === "function") return host.GVAdBreak.bind(host); }
      catch (_) { /* cross-origin parent */ }
    }
    return null;
  }
  function rewarded(point) {
    if (adBusy) return Promise.resolve(-1);
    adBusy = true;
    return new Promise(resolve => {
      let complete = false;
      const done = ok => {
        if (complete) return;
        complete = true;
        clearTimeout(watchdog);
        adBusy = false;
        console.info("[Arcade Ads] rewarded", point, ok ? "success" : "not completed");
        resolve(ok ? 1 : -1);
      };
      const watchdog = setTimeout(() => done(false), 45000);
      const ad = resolveAd();
      if (ad) {
        try { ad(() => done(true)); } catch (err) { console.warn("[Arcade Ads]", err); done(false); }
      } else if (qs.get("ads") === "0" &&
        /^(localhost|127\.0\.0\.1|test\.game)$/.test(root.location.hostname)) {
        // Local-only dry run; never grant free rewards on a production host.
        console.info("[Arcade Ads] local simulation, GVAdBreak unavailable", point);
        done(true);
      } else done(false);
    });
  }

  // Only touch rendered Cocos Label/RichText. Never modify config tables, DB fields,
  // variable names, API parameters, identifiers, or text baked into image assets.
  const uiTerms = {
    "点击领取":"Nhấn để nhận", "领取奖励":"Nhận thưởng", "每日签到":"Điểm danh hằng ngày",
    "签到奖励":"Quà điểm danh", "第七天":"Ngày 7", "第二天":"Ngày 2",
    "第一天":"Ngày 1", "第三天":"Ngày 3", "第四天":"Ngày 4",
    "第五天":"Ngày 5", "第六天":"Ngày 6", "第八天":"Ngày 8",
    "开始游戏":"Vào game", "继续游戏":"Chơi tiếp", "游戏结束":"Kết thúc",
    "挑战成功":"Thắng rồi!", "挑战失败":"Thất bại!", "闯关成功":"Vượt ải!",
    "闯关失败":"Thất bại!", "点击关闭":"Nhấn để đóng",
    "获得奖励":"Nhận thưởng", "领取双倍":"Nhận x2", "双倍奖励":"Thưởng x2",
    "看广告领取":"Xem QC nhận quà", "观看广告":"Xem quảng cáo",
    "免费领取":"Nhận miễn phí", "免费升级":"Nâng cấp miễn phí",
    "广告次数":"Lượt QC", "广告":"Quảng cáo", "跳过":"Bỏ qua",
    "设置":"Cài đặt", "设置中心":"Cài đặt", "隐私政策":"Chính sách bảo mật",
    "用户协议":"Điều khoản", "开启":"Bật", "关闭":"Tắt",
    "确定":"OK", "取消":"Hủy", "确认":"Xác nhận",
    "返回":"Quay lại", "退出":"Thoát", "重新开始":"Chơi lại",
    "再来一次":"Thử lại", "确认退出":"Xác nhận thoát",
    "装备详情":"Chi tiết trang bị", "装备强化":"Cường hóa",
    "装备升级":"Nâng cấp trang bị", "装备合成":"Ghép trang bị",
    "装备分解":"Phân giải", "装备":"Trang bị", "神装":"Thần trang",
    "天尊斗冠":"Mũ Thiên Tôn", "套装属性":"Thuộc tính bộ",
    "基础属性":"Thuộc tính cơ bản", "附加属性":"Thuộc tính cộng thêm",
    "属性排行":"Xếp hạng thuộc tính", "属性":"Thuộc tính",
    "未激活":"Chưa kích hoạt", "已激活":"Đã kích hoạt",
    "未解锁":"Chưa mở khóa", "解锁":"Mở khóa",
    "品质":"Phẩm chất", "攻击速度":"Tốc đánh", "攻击力":"Công",
    "攻击":"Tấn công", "防御":"Phòng thủ", "暴击率":"Tỷ lệ bạo kích",
    "暴击":"Bạo kích", "生命恢复":"Hồi HP", "血量恢复":"Hồi HP",
    "最大生命":"HP tối đa", "生命":"Sinh mệnh", "血量":"HP",
    "闪避":"Né tránh", "命中":"Chính xác", "伤害":"Sát thương",
    "等级上限":"Giới hạn cấp", "当前等级":"Cấp hiện tại",
    "突破":"Đột phá", "晋升":"Thăng bậc", "升级":"Nâng cấp",
    "装备中":"Đang trang bị", "穿戴":"Trang bị", "卸下":"Tháo",
    "升阶":"Tăng bậc", "强化":"Cường hóa", "升星":"Tăng sao",
    "材料不足":"Thiếu nguyên liệu", "金币不足":"Thiếu vàng",
    "钻石不足":"Thiếu kim cương", "升级成功":"Nâng cấp thành công",
    "突破成功":"Đột phá thành công", "解锁成功":"Mở khóa thành công",
    "资源不足":"Thiếu tài nguyên", "不足":"Không đủ",
    "战斗力":"Lực chiến", "战斗":"Chiến đấu", "角色":"Nhân vật",
    "副本":"Phó bản", "关卡":"Màn", "章节":"Chương",
    "通关":"Qua ải", "挑战":"Thử thách", "关":"Ải",
    "第":"", "日":"Ngày", "天":"ngày", "级":" cấp",
    "上限":"Tối đa", "排名":"Thứ hạng", "排行榜":"BXH",
    "背包":"Túi đồ", "商店":"Cửa hàng", "兑换":"Đổi",
    "购买":"Mua", "出售":"Bán", "刷新":"Làm mới",
    "免费":"Miễn phí", "收集":"Thu thập", "已领取":"Đã nhận",
    "领取":"Nhận", "奖励":"Phần thưởng", "任务":"Nhiệm vụ",
    "完成":"Hoàn thành", "进行中":"Đang diễn ra", "未完成":"Chưa xong",
    "成就":"Thành tựu", "每日":"Hằng ngày", "签到":"Điểm danh",
    "体力":"Thể lực", "钻石":"Kim cương", "金币":"Vàng",
    "元宝":"Nguyên bảo", "仙玉":"Ngọc tiên", "经验":"EXP",
    "技能":"Kỹ năng", "宠物":"Linh thú", "召唤":"Triệu hồi",
    "修炼":"Tu luyện", "灵气":"Linh khí", "法宝":"Pháp bảo",
    "功法":"Công pháp", "心法":"Tâm pháp", "武器":"Vũ khí",
    "重生":"Hồi sinh", "复活":"Hồi sinh", "继续":"Tiếp tục",
    "领取成功":"Nhận quà thành công", "保存成功":"Đã lưu",
    "存档":"Dữ liệu lưu", "新手引导":"Hướng dẫn tân thủ",
    "跳过引导":"Bỏ hướng dẫn", "加载中":"Đang tải",
    "网络异常":"Lỗi kết nối", "系统提示":"Thông báo",
    "战斗胜利":"Chiến thắng", "战斗失败":"Thua trận"
  };

  // Translate only presentation strings, not source config, game data or identifiers.
  Object.assign(uiTerms,{
    "仙界幸存者":"Người sống sót Tiên giới","雷劫":"Lôi kiếp","天劫":"Thiên kiếp",
    "渡劫":"Vượt kiếp","修仙":"Tu tiên","修为":"Tu vi","境界":"Cảnh giới",
    "寻宝收益加成":"Tăng lợi ích tìm báu","寻宝收益":"Lợi ích tìm kho báu",
    "寻宝":"Tìm kho báu","每日宝藏":"Kho báu hằng ngày",
    "藏宝图碎片":"Mảnh bản đồ kho báu","藏宝图":"Bản đồ kho báu",
    "宝藏":"Kho báu","宝箱":"Rương","宝物":"Báu vật",
    "魔魂":"Ma hồn","魔晶":"Ma tinh","魔石":"Ma thạch",
    "魔焰":"Ma diễm","神魂":"Thần hồn","魂石":"Hồn thạch",
    "魂魄":"Hồn phách","灵魂":"Linh hồn","仙魂":"Tiên hồn",
    "妖魂":"Yêu hồn","灵石":"Linh thạch","仙石":"Tiên thạch",
    "仙晶":"Tiên tinh","灵珠":"Linh châu","灵根":"Linh căn",
    "妖兽":"Yêu thú","灵兽":"Linh thú","妖丹":"Yêu đan",
    "仙丹":"Tiên đan","丹药":"Đan dược","炼丹":"Luyện đan",
    "炼器":"Luyện khí","法术":"Pháp thuật","仙器":"Tiên khí",
    "法器":"Pháp khí","法宝碎片":"Mảnh pháp bảo",
    "装备碎片":"Mảnh trang bị","碎片":"Mảnh","图纸":"Bản vẽ",
    "强化石":"Đá cường hóa","升级石":"Đá nâng cấp",
    "精炼":"Tinh luyện","洗炼":"Tẩy luyện","镶嵌":"Khảm",
    "合成":"Ghép","分解":"Phân giải","进阶":"Tiến bậc",
    "角色属性":"Thuộc tính nhân vật","生命值":"HP",
    "暴击伤害":"Sát thương bạo kích","伤害减免":"Giảm sát thương",
    "吸血":"Hút máu","回血":"Hồi HP","护盾":"Khiên",
    "护甲":"Giáp","闪避率":"Tỷ lệ né","移动速度":"Tốc chạy",
    "攻速":"Tốc đánh","战力":"Lực chiến",
    "击杀":"Tiêu diệt","击败":"Đánh bại","怪物":"Quái",
    "魔王":"Ma vương","首领":"Thủ lĩnh",
    "无尽模式":"Chế độ vô tận","生存模式":"Chế độ sinh tồn",
    "下一波":"Đợt tiếp","关卡奖励":"Thưởng vượt ải",
    "通关奖励":"Thưởng qua ải","主线任务":"Nhiệm vụ chính",
    "支线任务":"Nhiệm vụ phụ","日常任务":"Nhiệm vụ ngày",
    "任务奖励":"Thưởng nhiệm vụ","离线收益":"Thưởng offline",
    "挂机收益":"Thưởng treo máy","收益":"Lợi tức",
    "免费抽奖":"Quay miễn phí","幸运转盘":"Vòng quay may mắn",
    "抽奖":"Quay thưởng","剩余次数":"Lượt còn lại",
    "次日刷新":"Làm mới ngày mai","明日刷新":"Làm mới ngày mai",
    "明日":"Ngày mai","每日刷新":"Làm mới mỗi ngày",
    "倒计时":"Đếm ngược","奖励预览":"Xem trước phần thưởng",
    "额外奖励":"Thưởng thêm","双倍领取":"Nhận gấp đôi",
    "立即领取":"Nhận ngay","立即前往":"Đến ngay",
    "可领取":"Có thể nhận","今日已领取":"Hôm nay đã nhận",
    "获得":"Nhận","掉落":"Rơi ra","概率":"Tỷ lệ",
    "随机":"Ngẫu nhiên","稀有":"Hiếm","普通":"Thường",
    "史诗":"Sử thi","传说":"Truyền thuyết",
    "邮件":"Thư","一键领取":"Nhận tất cả",
    "背包已满":"Túi đồ đầy","数量":"Số lượng","需要":"Cần",
    "消耗":"Tiêu hao","价格":"Giá","折扣":"Giảm giá",
    "礼包":"Gói quà","商城":"Cửa hàng",
    "说明":"Hướng dẫn","提示":"Gợi ý","帮助":"Trợ giúp",
    "公告":"Thông báo","活动":"Sự kiện","好友":"Bạn bè",
    "分享":"Chia sẻ","最高分":"Điểm cao nhất",
    "主界面":"Menu chính","暂停":"Tạm dừng",
    "音效":"Âm thanh hiệu ứng","音乐":"Nhạc",
    "重置":"Đặt lại","加载失败":"Tải thất bại"
  });
  // RPG strings catalogued from Config/Item, Pet, Skill, Intro and ZhenBaoGe.
  Object.assign(uiTerms, {"小仙魂":"Tiểu tiên hồn","一些仙魂":"Một ít tiên hồn","一包仙魂":"Túi tiên hồn","蓝经石":"Đá kinh mạch lam","紫经石":"Đá kinh mạch tím","血经石":"Đá huyết kinh","回复丹":"Đan hồi phục","妖兽宝匣":"Hộp báu yêu thú","吸魂石":"Đá hút hồn","神防符":"Phù hộ thân","狼魂":"Hồn sói","救心丸":"Hoàn cứu tâm","禁咒宝箱":"Rương cấm chú","重生丹":"Đan hồi sinh","悟性点":"Điểm ngộ tính","锁妖塔金币":"Xu Tháp Khóa Yêu","种子":"Hạt giống","小龙虾":"Tôm hùm nhỏ","小琳琳":"Linh Linh","小兔子":"Thỏ con","龙虾":"Tôm hùm","麒麟":"Kỳ Lân","兔子":"Thỏ","天赐":"Thiên Tứ","不屈":"Bất Khuất","刚毅":"Kiên Cường","无双":"Vô Song","通关第13章节解锁":"Qua Chương 13 để mở khóa","通关第9章解锁":"Qua Chương 9 để mở khóa","通关第17章解锁":"Qua Chương 17 để mở khóa","通关第5章解锁":"Qua Chương 5 để mở khóa","登录活动解锁":"Mở khóa qua sự kiện đăng nhập","新年活动解锁":"Mở khóa qua sự kiện năm mới","抽卡和宝箱出现高品质概率增加":"Tăng tỷ lệ vật phẩm phẩm chất cao từ quay thẻ và rương","每5秒生命恢复":"Hồi HP mỗi 5 giây","主角防御增加":"Tăng phòng thủ nhân vật","主角所有伤害增加":"Tăng toàn bộ sát thương nhân vật","凌霄剑":"Kiếm Lăng Tiêu","连云":"Liên Vân","凌波":"Lăng Ba","日蚀":"Nhật Thực","残月":"Trăng Khuyết","追风":"Truy Phong","连珠":"Liên Châu","鸣镜":"Minh Kính","魔炎斩":"Ma Viêm Trảm","魔炎闪":"Ma Viêm Thiểm","魔龙息":"Hơi Thở Ma Long","护法戒":"Nhẫn Hộ Pháp","流火轮":"Luân Lưu Hỏa","醉仙壶":"Bầu Túy Tiên","五叶火莲":"Hỏa Liên Ngũ Diệp","武神":"Võ Thần","金灵花":"Kim Linh Hoa","天击剑":"Kiếm Thiên Kích","雷炎剑":"Kiếm Lôi Viêm","金斧头":"Rìu Vàng","银斧头":"Rìu Bạc","剑气造成穿透伤害":"Kiếm khí gây sát thương xuyên thấu","增加剑式多段斩击":"Tăng số lần chém của kiếm thức","阵内造成100%暴击":"Trong kiếm trận, bạo kích 100%","吸收造成高频伤害":"Hấp thụ và gây sát thương liên tục","为月金轮增加残影":"Tăng phân thân cho Kim Luân","日月停息时间静止":"Thời gian ngưng đọng","蓄力造成穿透伤害":"Tụ lực gây sát thương xuyên thấu","增加额外箭矢":"Tăng số mũi tên","召唤千鸣镜":"Triệu hồi Thiên Minh Kính","造成两段范围伤害":"Gây hai đợt sát thương diện rộng","随机造成穿透伤害":"Ngẫu nhiên gây sát thương xuyên thấu","造成高频穿透伤害":"Gây sát thương xuyên thấu liên tục","激活护盾吸收":"Kích hoạt khiên hấp thụ","对最强妖兽发起攻击":"Tấn công yêu thú mạnh nhất","妖兽死亡引爆符咒":"Yêu thú bị hạ kích nổ phù chú","妖兽死亡引爆连锁符咒":"Yêu thú bị hạ kích nổ chuỗi phù chú","召唤金角大王协助战斗":"Triệu hồi Kim Giác hỗ trợ chiến đấu","召唤银角大王协助战斗":"Triệu hồi Ngân Giác hỗ trợ chiến đấu","召唤武神协助作战":"Triệu hồi Võ Thần hỗ trợ","召唤石拳造成伤害":"Triệu hồi quyền đá gây sát thương","随机召唤":"Triệu hồi ngẫu nhiên","随机释放":"Thi triển ngẫu nhiên","穿透伤害":"Sát thương xuyên thấu","多段伤害":"Sát thương nhiều đòn","范围伤害":"Sát thương diện rộng","伤害增加":"Tăng sát thương","攻击目标":"Mục tiêu","释放":"Thi triển","持续时间":"Thời gian hiệu lực","增加":"Tăng","减少":"Giảm","少量":"một ít","大量":"rất nhiều","大范围":"phạm vi lớn","小范围":"phạm vi nhỏ","所有":"toàn bộ","召唤":"Triệu hồi","协助战斗":"Hỗ trợ chiến đấu","暴击率":"Tỷ lệ bạo kích","经验石":"Đá EXP","拾取范围":"Phạm vi nhặt","等级提升":"Tăng cấp","通关第":"Vượt Chương ","章节解锁":"để mở khóa","再探索":"Khám phá thêm","必然发现":"Chắc chắn nhận","蓝色":"Xanh lam","紫色":"Tím","绿色":"Xanh lá","良品":"Phẩm tốt","稀有能力":"Kỹ năng hiếm","观看视频":"Xem quảng cáo","即可领取":"để nhận","累计观看":"Tổng lượt xem","提前领取":"Nhận sớm","登录可领取":"Đăng nhập để nhận","离线修炼时间":"Thời gian tu luyện offline","小时":"giờ","分钟":"phút","获得经验":"Nhận EXP","所有伤害":"Toàn bộ sát thương","所有技能":"Tất cả kỹ năng","神兵":"Thần binh","神器":"Thần khí","左右面向进行多段斩击":"Chém liên tiếp theo hướng nhân vật","面向方向进行远程散射":"Bắn tản xa theo hướng nhìn","环绕角色周身进行攻击":"Tấn công quanh nhân vật","合成需要":"Cần để ghép","召唤多束天雷":"Triệu hồi nhiều tia thiên lôi","增加抵御伤害的护盾":"Tạo khiên chống sát thương","新手引导":"Hướng dẫn tân thủ","灵草":"Linh thảo","草园":"Vườn thảo","每10分钟":"Mỗi 10 phút","击杀妖兽":"Tiêu diệt yêu thú","拾取经验":"Nhặt EXP","积累经验":"Tích lũy EXP","提升等级":"Tăng cấp","选择能力":"Chọn năng lực","变的更强":"Trở nên mạnh hơn","探索场景":"Khám phá bản đồ","收集狼魂":"Thu thập hồn sói","返回祭坛":"Quay về tế đàn","交付狼魂":"Giao hồn sói","召唤狼灵":"Triệu hồi linh sói"});
  // Expanded terms from original Equipment, Task, FaBao, XiuLian, Spell and FaQi configs.
  Object.assign(uiTerms, {"彩灵":"Thải Linh","冥王":"Minh Vương","日月":"Nhật Nguyệt","剑宗":"Kiếm Tông","天尊":"Thiên Tôn","道盟":"Đạo Minh","玉佩":"Ngọc bội","羽带":"Đai lụa","仙服":"Tiên y","头冠":"Mũ","鞋子":"Giày","白装":"Trang bị trắng","绿装":"Trang bị xanh lá","蓝装":"Trang bị xanh lam","紫装":"Trang bị tím","橙装":"Trang bị cam","红装":"Trang bị đỏ","震裂护法戒":"Nhẫn Hộ Pháp Chấn Liệt","真武焚魔刃":"Đao Chân Võ Trảm Ma","残阳流火轮":"Luân Tàn Dương Lưu Hỏa","佛怒火莲":"Hỏa Liên Phật Nộ","天仙壶":"Bầu Thiên Tiên","金绽灵花":"Kim Trán Linh Hoa","绽灵花":"Linh Hoa Nở Rộ","冷霜印":"Ấn Lãnh Sương","天霜巨印":"Đại Ấn Thiên Sương","龙火幡":"Phướn Long Hỏa","炎龙火幡":"Phướn Viêm Long","萤火孤灯":"Đèn Đom Đóm","萤火明灯":"Đèn Linh Quang","荧火孤灯":"Đèn Đom Đóm","荧火明灯":"Đèn Linh Quang","双剑合璧":"Song Kiếm Hợp Bích","女娲神石":"Thần Thạch Nữ Oa","金角大王":"Kim Giác Đại Vương","银角大王":"Ngân Giác Đại Vương","角力大魔王":"Ma Vương Giác Lực","河神":"Hà Thần","乾坤云环":"Vòng Mây Càn Khôn","天师符":"Phù Thiên Sư","淬体经":"Kinh Tôi Thể","多重法诀":"Pháp Quyết Đa Trọng","水柔心经":"Tâm Kinh Thủy Nhu","截脉功法":"Công Pháp Tiệt Mạch","疾影术":"Thuật Tật Ảnh","白虹贯日":"Bạch Hồng Quán Nhật","空明心法":"Tâm Pháp Không Minh","三清决要":"Bí Quyết Tam Thanh","养命决":"Quyết Dưỡng Mệnh","破影":"Phá Ảnh","生机谱":"Phổ Sinh Cơ","先天":"Tiên Thiên","一重":"Tầng 1","二重":"Tầng 2","三重":"Tầng 3","四重":"Tầng 4","五重":"Tầng 5","六重":"Tầng 6","七重":"Tầng 7","八重":"Tầng 8","九重":"Tầng 9","炼气":"Luyện Khí","筑基":"Trúc Cơ","结丹":"Kết Đan","元婴":"Nguyên Anh","化神":"Hóa Thần","返虚":"Phản Hư","合体":"Hợp Thể","大乘":"Đại Thừa","真仙":"Chân Tiên","金仙":"Kim Tiên","圆满":"Viên Mãn","土灵珠":"Thổ Linh Châu","雷灵珠":"Lôi Linh Châu","火灵珠":"Hỏa Linh Châu","水灵珠":"Thủy Linh Châu","金灵珠":"Kim Linh Châu","任意灵珠":"Linh châu bất kỳ","烧火棍":"Gậy Đốt Lửa","化妖葫":"Hồ Lô Hóa Yêu","金银斧":"Rìu Vàng Bạc","封印的神像":"Tượng thần bị phong ấn","龙灵":"Long Linh","无双剑灵":"Kiếm Linh Vô Song","金钱镖":"Phi Tiêu Tiền Đồng","焚魔刀法":"Đao Pháp Trảm Ma","仙雾术":"Thuật Sương Tiên","流火术":"Thuật Lưu Hỏa","符咒术":"Thuật Phù Chú","灵花召唤":"Triệu Hồi Linh Hoa","减伤回复":"Giảm sát thương và hồi HP","暴击爆伤":"Bạo kích và sát thương bạo kích","进行1次战斗":"Chiến đấu 1 trận","进行5次战斗":"Chiến đấu 5 trận","进行20次战斗":"Chiến đấu 20 trận","进行30次战斗":"Chiến đấu 30 trận","战斗可携带的法宝数":"Số pháp bảo mang vào trận","战斗可携带的功法数":"Số công pháp mang vào trận","解锁神兵":"Mở khóa thần binh","一级":"Cấp 1","二级":"Cấp 2","三级":"Cấp 3","四级":"Cấp 4","五级":"Cấp 5","六级":"Cấp 6","七级":"Cấp 7","八级":"Cấp 8","九级":"Cấp 9","十级":"Cấp 10","十一级":"Cấp 11","武神咒":"Chú Võ Thần","魔灵咒":"Chú Ma Linh","秘术咒":"Chú Bí Thuật","诛仙咒":"Chú Tru Tiên","魔爆咒":"Chú Ma Bạo","飞星咒":"Chú Phi Tinh","巨灵咒":"Chú Cự Linh","如律令":"Như Luật Lệnh","盘山令":"Lệnh Bàn Sơn","永生咒":"Chú Vĩnh Sinh","残血咒":"Chú Tàn Huyết","情故咒":"Chú Tình Cố","无悔咒":"Chú Vô Hối","武学系伤害":"Sát thương hệ võ học","唤灵系伤害":"Sát thương hệ triệu linh","秘术伤害":"Sát thương bí thuật","武学系体积":"Phạm vi chiêu võ học","唤灵系持续时间":"Thời gian hệ triệu linh","几率释放":"Xác suất thi triển","直接击杀":"Tiêu diệt ngay","首次伤害暴击":"Đòn đầu bạo kích","多重几率":"Tỷ lệ đa kích","弹道速度":"Tốc độ đạn","技能体积":"Phạm vi kỹ năng","技能飞行速度":"Tốc độ bay kỹ năng","技能二次释放":"Tái thi triển kỹ năng","技能冷却":"Hồi chiêu","攻击距离":"Tầm đánh","攻击范围":"Phạm vi tấn công","经验加成":"Thưởng EXP","经验加成率":"Tỷ lệ EXP thêm","怒气消耗":"Tiêu hao nộ","移速":"Tốc chạy","击退":"Đẩy lùi","飞剑伤害":"Sát thương phi kiếm","飞剑数量":"Số phi kiếm","聚气效率":"Hiệu suất tụ khí","升星强化":"Cường hóa tăng sao","神力槽满后自动释放":"Tự kích hoạt khi đầy thanh thần lực","追踪妖兽并造成伤害":"Truy đuổi yêu thú và gây sát thương","造成全屏伤害":"Gây sát thương toàn màn","自动拾取经验石":"Tự nhặt đá EXP","通关第一章简单难度可解锁":"Vượt Chương 1 độ khó Dễ để mở khóa","第2日登录":"Đăng nhập ngày 2","仙界福利":"Phúc lợi Tiên giới","新神器开发中":"Thần khí mới đang phát triển","未解锁描述":"Chưa mở khóa","这里是描述":"Mô tả chưa cập nhật","这里是法宝描述":"Mô tả pháp bảo chưa cập nhật","这里是法器描述":"Mô tả pháp khí chưa cập nhật","努力开发中":"Đang phát triển","开发中":"Đang phát triển","女主角":"Nhân vật nữ","降损印记":"Ấn Giảm Hao Tổn","灵王印记":"Ấn Linh Vương","群狼印记":"Ấn Bầy Sói","狼灵":"Linh Sói","狼灵王":"Vua Linh Sói","召唤狼灵":"Triệu hồi Linh Sói","降低召唤狼灵消耗":"Giảm chi phí triệu hồi Linh Sói","有几率":"Có xác suất","获得经验增加":"Tăng EXP nhận được","提升体力上限":"Tăng giới hạn thể lực","体力上限":"Giới hạn thể lực","额外经验石":"Đá EXP bổ sung","再探索":"Khám phá thêm","必然发现":"Chắc chắn tìm thấy"});
  // Chinese phrases from Skill, Task, Pet and ComNameConfig.
  Object.assign(uiTerms, {"火莲叶":"cánh hỏa liên","流火":"lưu hỏa","火莲花":"hoa sen lửa","仙云":"mây tiên","金盏灵花":"kim linh hoa","天雷":"thiên lôi","龙卷风":"lốc xoáy","移动的":"di chuyển","水柱":"cột nước","冰印":"ấn băng","炎龙":"Viêm Long","火柱":"cột lửa","冰柱":"cột băng","火球":"cầu lửa","剑阵持续时间":"Thời gian kiếm trận","剑阵":"kiếm trận","月残影":"ảo ảnh trăng","连珠箭矢":"tên Liên Châu","炎魔闪":"Ma Viêm Thiểm","魔炎闪":"Ma Viêm Thiểm","范围":"phạm vi","火灵珠":"Hỏa Linh Châu","护身并造成":"hộ thân và gây","天降":"Từ trời rơi xuống","区域":"diện rộng","大量区域":"diện rộng lớn","造成":"gây","连续":"liên tiếp","持续造成":"liên tục gây","自动攻击":"tự tấn công","周围妖兽":"yêu thú xung quanh","周围":"xung quanh","随机召唤":"Triệu hồi ngẫu nhiên","随机释放":"Thi triển ngẫu nhiên","抛出":"Ném","有几率造成":"có xác suất gây","砸晕妖兽":"làm choáng yêu thú","该妖兽死亡时会产生爆炸":"yêu thú phát nổ khi bị tiêu diệt","符咒":"phù chú","途经":"đi qua","回旋":"xoay vòng","碎裂时":"khi vỡ","吸收":"hấp thụ","攻击周围":"tấn công xung quanh","火莲":"hỏa liên","拾取":"nhặt","移动":"di chuyển","增加暴击率":"Tăng tỷ lệ bạo kích","穿梭":"xuyên qua","日轨":"vòng nhật luân","持续":"duy trì","发起攻击":"tấn công","被击杀":"bị tiêu diệt","爆炸":"phát nổ","触碰":"va chạm","盾":"khiên","千叶火莲":"Hỏa Liên Thiên Diệp","修罗武神":"Tu La Võ Thần","天霜印":"Ấn Thiên Sương","天境乾坤":"Thiên Cảnh Càn Khôn","万剑归宗":"Vạn Kiếm Quy Tông","彩灵护体":"Thải Linh Hộ Thể","逐日追月":"Trục Nhật Truy Nguyệt","无间雷狱":"Lôi Ngục Vô Gian","拾遗":"Nhặt Đồ","帮助拾取掉落的物品":"Hỗ trợ nhặt vật phẩm rơi","剧情":"Cốt truyện","大王":"Đại vương","双剑":"Song kiếm","毒圈":"vòng độc","魔刃":"Ma nhận","火龙":"Hỏa Long","攻击目标":"Mục tiêu tấn công","攻击":"Tấn công","探宝":"Tìm báu","吐纳":"Thổ nạp","登录游戏":"Đăng nhập","商店购买":"Mua ở cửa hàng","死亡":"Tử trận","累计获得":"Tích lũy nhận","任意角色":"Nhân vật bất kỳ","任意宠物":"Linh thú bất kỳ","从草园收获":"Thu hoạch tại vườn thảo","妖王":"Yêu vương","击杀":"Tiêu diệt","获得":"Nhận","升至":"đạt","战斗":"Trận","古井":"Giếng cổ","神像":"Tượng thần","金银斧":"Rìu Vàng Bạc","回旋标":"Phi tiêu quay","冰印术":"Thuật Ấn Băng","莫邪剑灵":"Kiếm Linh Mạc Tà","火莲咒":"Chú Hỏa Liên","金角召唤":"Triệu Hồi Kim Giác","风火轮":"Phong Hỏa Luân","天劫符":"Phù Thiên Kiếp","存钱罐":"Heo đất","五毒瓶":"Lọ Ngũ Độc","焚魔刃":"Lưỡi Đao Trảm Ma","观看视频":"Xem quảng cáo","即可领取":"để nhận","累计观看":"Tổng lượt xem","提前领取":"Nhận sớm","登录可领取":"Đăng nhập để nhận","含保底综合概率":"Tỷ lệ tổng đã gồm bảo đảm","综合概率":"Tỷ lệ tổng","还差":"Còn thiếu","软件著作人":"Chủ sở hữu phần mềm","丰碑":"Bia vinh danh","悟性点":"Điểm ngộ tính","观看次数":"Lượt xem","仙界幸存游戏酱":"Người sống sót Tiên giới","将丢失本次战斗奖励":"Bạn sẽ mất thưởng trận này","输入密令":"Nhập mã bí mật","获得经验":"Nhận EXP"});
  const uiExact = {"土":"Thổ","雷":"Lôi","火":"Hỏa","为我解开枷锁,\n我来助你降妖!":"Hãy tháo xiềng xích cho ta,\nta sẽ giúp ngươi trừ yêu!","你掉的是金斧头\n还是这把银斧头呢?":"Ngươi đánh rơi rìu vàng\nhay chiếc rìu bạc này?","我已入魔,\n佛奈我何?":"Ta đã hóa ma,\nPhật có thể làm gì ta?","无双剑灵,\n万恶不寝!":"Kiếm Linh Vô Song,\nquét sạch tà ma!","在\"第1章\"找到遗失的土灵珠":"Tìm Thổ Linh Châu bị thất lạc ở Chương 1","在\"第2章\"找到遗失的雷灵珠":"Tìm Lôi Linh Châu bị thất lạc ở Chương 2","在\"第5章\"找到遗失的火灵珠":"Tìm Hỏa Linh Châu bị thất lạc ở Chương 5","在\"第11章\"废墟中找到烧火棍":"Tìm Gậy Đốt Lửa trong phế tích Chương 11","在\"第9章\"找到并击毁被封印的神像":"Tìm và phá tượng thần phong ấn ở Chương 9","在\"第3章\"的古井中\"找到水灵珠":"Tìm Thủy Linh Châu ở giếng cổ Chương 3","在\"第7章\"找到池塘中的金银斧":"Tìm Rìu Vàng Bạc dưới ao ở Chương 7","在\"第13章\"击杀入魔的龙灵":"Tiêu diệt Long Linh hóa ma ở Chương 13","在\"第15章\"找到被封印的无双剑灵":"Tìm Kiếm Linh Vô Song bị phong ấn ở Chương 15","通关第13章节解锁":"Vượt Chương 13 để mở khóa","通关第9章解锁":"Vượt Chương 9 để mở khóa","通关第17章解锁":"Vượt Chương 17 để mở khóa","通关第5章解锁":"Vượt Chương 5 để mở khóa","通关第一章简单难度可解锁":"Vượt Chương 1 độ khó Dễ để mở khóa"};
  const uiPatterns = [
    [/进行(\d+)次吐纳/g,(_,n)=>"Thổ nạp "+n+" lần"],
    [/商店购买(\d+)次东西/g,(_,n)=>"Mua vật phẩm "+n+" lần trong cửa hàng"],
    [/探宝(\d+)次/g,(_,n)=>"Tìm báu "+n+" lượt"],
    [/登录游戏(\d+)天/g,(_,n)=>"Đăng nhập "+n+" ngày"],
    [/死亡(\d+)次/g,(_,n)=>"Tử trận "+n+" lần"],
    [/进行(\d+)次战斗/g,(_,n)=>"Chiến đấu "+n+" trận"],
    [/累计获得(\d+)钻石/g,(_,n)=>"Tích lũy "+n+" kim cương"],
    [/击杀(\d+)只妖兽/g,(_,n)=>"Diệt "+n+" yêu thú"],
    [/击杀(\d+)只怪/g,(_,n)=>"Diệt "+n+" quái"],
    [/任意角色升至(\d+)级/g,(_,n)=>"Nâng nhân vật bất kỳ lên cấp "+n],
    [/任意宠物升至(\d+)级/g,(_,n)=>"Nâng linh thú bất kỳ lên cấp "+n],
    [/从草园收获(\d+)颗灵草/g,(_,n)=>"Thu hoạch "+n+" linh thảo tại vườn"],
    [/获得(\d+)件(紫|绿|蓝)装/g,(_,n,q)=>"Nhận "+n+" trang bị "+({紫:"tím",绿:"xanh lá",蓝:"xanh lam"}[q])],
    [/进行(\d+)次主线关卡/g,(_,n)=>"Chơi "+n+" màn cốt truyện"],
    [/进行(\d+)次挑战关卡/g,(_,n)=>"Chơi "+n+" màn thử thách"],
    [/领取(\d+)次锁妖塔奖励/g,(_,n)=>"Nhận "+n+" lượt thưởng Tháp Khóa Yêu"],
    [/进行(\d+)次锁妖塔闭关修炼/g,(_,n)=>"Bế quan tu luyện "+n+" lần tại Tháp Khóa Yêu"],
    [/进行(\d+)次修炼/g,(_,n)=>"Tu luyện "+n+" lần"],
    [/击败(\d+)个妖王/g,(_,n)=>"Hạ "+n+" yêu vương"],
    [/^(剑|轮|弓|戟)(\d+)$/g,(_,w,n)=>({剑:"Kiếm",轮:"Luân",弓:"Cung",戟:"Kích"}[w])+" "+n]
  ];
  // Exact player-visible descriptions from treasure, artifact and quest tables.
  Object.assign(uiTerms, {"金盏灵花弹射":"kim linh hoa bật nảy","弹射":"bật nảy","水柱对妖兽造成":"cột nước gây lên yêu thú","对妖兽造成":"gây cho yêu thú","小范围伤害":"sát thương phạm vi nhỏ","在妖兽群中":"giữa bầy yêu thú","会进行":"thực hiện","会在":"sẽ ở","几率":"xác suất","伤害和暴击率":"sát thương và tỷ lệ bạo kích","造成击晕伤害":"gây sát thương làm choáng","周身生成":"Quanh nhân vật tạo","萤火光环":"vòng sáng đom đóm","石拳":"nắm đấm đá","升级减少冷却":"nâng cấp giảm hồi chiêu","吸取经验石":"hút đá EXP","可召唤":"Có thể triệu hồi","飞剑发动攻击":"phi kiếm tấn công","日轨环绕触碰":"vòng nhật luân xoay quanh gây va chạm","护盾破碎":"Khiên bị vỡ","火焰花瓣":"cánh hoa lửa","仙云中毒效果":"hiệu ứng mây độc","小面积":"vùng nhỏ","大型":"lớn","多处":"nhiều luồng","锁定最强妖兽":"Khóa yêu thú mạnh nhất","灵花绽放":"Linh hoa bung nở","巨灵花绽放":"Đại linh hoa bung nở","巨型冰印":"Ấn băng khổng lồ","冰印从天而降":"ấn băng rơi từ trời","减速":"làm chậm","巨龙":"rồng lớn","陨火":"lửa thiên thạch","光环":"vòng sáng","持续造成":"liên tục gây","小回旋":"vòng xoáy nhỏ","大回旋":"vòng xoáy lớn","丢出多个":"Ném nhiều","合成巨剑":"Ghép đại kiếm","会进行回旋攻击":"tấn công xoay vòng","生命回复":"Hồi HP","可额外重生":"Thêm lượt hồi sinh","所有法宝初始等级":"Cấp pháp bảo ban đầu","所有功法初始等级":"Cấp công pháp ban đầu","初始等级":"Cấp ban đầu","仙魂获得量":"Lượng tiên hồn nhận","幸运值提高":"Tăng điểm may mắn","神石合成":"Ghép thần thạch","开启宝箱可合成法宝":"Mở rương để ghép pháp bảo","吸收场景内所有经验石":"Hút mọi đá EXP trên bản đồ","立即回复":"Hồi ngay","生命值":"HP","角色进入无敌状态":"Nhân vật nhận trạng thái bất tử","道具":"Vật phẩm","和":"và","武学系":"Hệ võ học","秘术系":"Hệ bí thuật","唤灵系":"Hệ triệu linh","秘术技能":"Kỹ năng bí thuật","的几率":"xác suất","以下的怪":"quái còn dưới mức","倍伤害":"lần sát thương","站立伤害":"sát thương khi đứng yên","满血加伤害":"Đầy HP tăng sát thương","生命低于":"HP dưới","加伤害":"tăng sát thương","额外经验":"EXP thêm","宝箱率":"tỷ lệ xuất hiện rương","高级卡":"thẻ cao cấp","秘术":"bí thuật","飞剑会":"Phi kiếm sẽ","登录":"Đăng nhập","封印的剑":"Kiếm bị phong ấn","火龙幡":"Phướn Hỏa Long","草园":"Vườn thảo","每5秒生命恢复":"Hồi HP mỗi 5 giây","金丹":"Kim đan","入魔":"hóa ma","或":"hoặc","技能体积":"Phạm vi kỹ năng","领取成功":"Nhận thưởng thành công","登录可领取":"Đăng nhập để nhận"});
  Object.assign(uiExact, {"草1":"Thảo 1","草2":"Thảo 2","草3":"Thảo 3","草4":"Thảo 4","草5":"Thảo 5","火路 ":"Đường lửa ","云环":"Vòng mây","符":"Phù","火圈":"Vòng lửa","风":"Gió","激光":"Tia sáng","金花":"Hoa vàng","天印":"Thiên Ấn","封印的剑33401":"Kiếm bị phong ấn 33401","面向方向进行多次穿透攻击":"Tấn công xuyên thấu nhiều lần theo hướng nhìn","全屏伤害吸收范围内所有经验石":"Gây sát thương toàn màn và hút toàn bộ đá EXP trong phạm vi","可释放万剑诀自动追踪妖兽":"Thi triển Vạn Kiếm Quyết tự đuổi theo yêu thú","护盾破碎时会造成伤害":"Khi khiên vỡ sẽ gây sát thương","释放火焰花瓣":"Thi triển cánh hoa lửa","释放小面积仙云中毒效果":"Tạo vùng mây độc nhỏ","释放大范围仙云中毒效果":"Tạo vùng mây độc lớn","锁定最强妖兽+50%暴击":"Khóa yêu thú mạnh nhất, tăng 50% bạo kích","锁定最强妖兽+100%暴击":"Khóa yêu thú mạnh nhất, tăng 100% bạo kích","召唤多处流火":"Triệu hồi nhiều luồng lửa","召唤多处大型火柱":"Triệu hồi nhiều cột lửa lớn","灵花绽放范围伤害":"Linh hoa nở gây sát thương diện rộng","巨灵花绽放大范围伤害":"Đại linh hoa nở gây sát thương diện rộng","召唤冰印从天而降":"Triệu hồi ấn băng rơi từ trời","巨型冰印还可造成减速":"Ấn băng khổng lồ còn làm chậm","召唤巨龙释放陨火\n":"Triệu hồi rồng lớn phóng lửa thiên thạch\n","小范围光环持续造成伤害":"Vòng sáng nhỏ gây sát thương liên tục","大范围光环持续造成伤害":"Vòng sáng lớn gây sát thương liên tục","释放小回旋造成伤害":"Thi triển vòng xoáy nhỏ gây sát thương","释放大回旋造成伤害":"Thi triển vòng xoáy lớn gây sát thương","丢出多个金斧头几率暴击伤害":"Ném nhiều rìu vàng, có tỷ lệ bạo kích","丢出多个银斧头几率击晕伤害":"Ném nhiều rìu bạc, có tỷ lệ làm choáng","合成需要：金角+银角":"Cần ghép: Kim Giác + Ngân Giác","天击剑会进行穿梭攻击":"Kiếm Thiên Kích tấn công xuyên qua mục tiêu","雷炎剑会进行回旋攻击":"Kiếm Lôi Viêm tấn công xoay vòng","合成巨剑会回旋穿梭":"Đại kiếm hợp thể xoay vòng xuyên thấu","召唤多个龙卷风":"Triệu hồi nhiều lốc xoáy","召唤多个火球":"Triệu hồi nhiều cầu lửa","召唤多个水柱":"Triệu hồi nhiều cột nước","合成需要：任意3颗灵珠":"Cần ghép: 3 linh châu bất kỳ","神石合成全屏伤害":"Ghép thần thạch gây sát thương toàn màn","可额外重生1次":"Có thể hồi sinh thêm 1 lần","所有法宝初始等级+1":"Cấp ban đầu tất cả pháp bảo +1","所有功法初始等级+1":"Cấp ban đầu tất cả công pháp +1","幸运值提高":"Tăng may mắn","仙魂获得量增加":"Tăng lượng tiên hồn nhận","开启宝箱可合成法宝":"Mở rương để ghép pháp bảo","吸收场景内所有经验石":"Hút toàn bộ đá EXP trên bản đồ","立即回复30点生命值":"Hồi ngay 30 HP","角色进入无敌状态，10秒":"Nhân vật bất tử trong 10 giây","神力槽满后自动释放，飞剑会追踪妖兽并造成伤害。":"Khi đầy thanh thần lực, phi kiếm tự truy đuổi yêu thú và gây sát thương.","第2日登录，在仙界福利处领取":"Đăng nhập ngày 2 để nhận ở Phúc lợi Tiên giới","神力槽满后自动释放，造成全屏伤害并自动拾取经验石":"Khi đầy thanh thần lực, gây sát thương toàn màn và tự nhặt đá EXP"});
  // Last confirmed gameplay descriptions and in-game help labels.
  Object.assign(uiExact, {"天击剑会在妖兽群中穿梭，造成穿透伤害":"Kiếm Thiên Kích xuyên qua bầy yêu thú, gây sát thương xuyên thấu","对回旋途经的妖兽造成伤害升级减少冷却":"Gây sát thương cho yêu thú trên đường xoay, nâng cấp giảm hồi chiêu","天境乾坤:全屏伤害+30%,并吸取经验石":"Thiên Cảnh Càn Khôn: Sát thương toàn màn +30%, hút đá EXP","击晕":"Choáng","秘术伤害+30%\n秘术技能10%的几率释放2次":"Sát thương bí thuật +30%\nKỹ năng bí thuật có 10% xác suất thi triển 2 lần","·点击输入密令":"· Nhấn để nhập mã bí mật","按步骤添加小程序，获得订阅奖励":"Làm theo hướng dẫn để nhận thưởng đăng ký","仙界幸存游戏酱\n扫码或搜索公众号":"Người sống sót Tiên giới\nQuét mã hoặc tìm kênh chính thức","QQ群号：346116942\n仙界幸存者官方④群":"Nhóm QQ: 346116942\nNgười sống sót Tiên giới, nhóm chính thức ④","升级\"丰碑\"可提升体力上限":"Nâng cấp Bia vinh danh để tăng giới hạn thể lực","累计观看(已完成)":"Tổng lượt xem (Đã hoàn thành)","<i>必出一个<color=#ffb930>稀有</color>能力</i>":"<i>Chắc chắn nhận một năng lực <color=#ffb930>hiếm</color></i>","<color=#565f90>流云套装</color><color=#6682de>（良品）</color>":"<color=#565f90>Bộ Lưu Vân</color><color=#6682de> (Phẩm tốt)</color>","或累计观看视频30次<size=34>提前领取</size>":"Hoặc xem QC đủ 30 lần<size=34> để nhận sớm</size>","或累计观看视频15次<size=34>提前领取</size>":"Hoặc xem QC đủ 15 lần<size=34> để nhận sớm</size>"});
  for(const ch of ["第","关","级","天","日"])delete uiTerms[ch];
  const sortedTerms=Object.keys(uiTerms).sort((a,b)=>b.length-a.length);
  const hasHan=/[\u3400-\u9fff]/;
  const unresolved=new Map();
  let uiEngine=null;
  function translateSegment(input){
    if(Object.prototype.hasOwnProperty.call(uiExact,input))return uiExact[input];
    if(Object.prototype.hasOwnProperty.call(uiTerms,input))return uiTerms[input];
    const nums={"一":"1","二":"2","三":"3","四":"4","五":"5","六":"6","七":"7","八":"8","九":"9","十":"10"};
    if(/^每\d+秒生命恢复\d+(?:\.\d+)?$/.test(input)){const m=input.match(/^每(\d+)秒生命恢复(\d+(?:\.\d+)?)$/);return 'Hồi '+m[2]+' HP mỗi '+m[1]+' giây';}
    if(/^将".+"升至\d+级$/.test(input)){const m=input.match(/^将"(.+)"升至(\d+)级$/);return 'Nâng '+translateSegment(m[1])+' lên cấp '+m[2];}
    let output=input;
    for(const [rx,fn] of uiPatterns)output=output.replace(rx,fn);
    output=output.replace(/第([一二三四五六七八九十0-9]+)(天|日|关|章|波|层|次|级)/g,(_,n,u)=>{
      const title={"天":"Ngày","日":"Ngày","关":"Ải","章":"Chương","波":"Đợt","层":"Tầng","次":"Lượt","级":"Cấp"}[u];
      return title+" "+(nums[n]||n);
    }).replace(/([0-9]+)级/g,"Cấp $1").replace(/([0-9]+)天/g,"$1 ngày").replace(/([0-9]+)次/g,"$1 lượt").replace(/([0-9]+)(片|处|颗|个|道|块|只|张|件|名|秒)/g,(_,n,u)=>n+" "+({片:"cánh",处:"luồng",颗:"viên",个:"cái",道:"tia",块:"khối",只:"con",张:"lá",件:"món",名:"người",秒:"giây"}[u])).replace(/%s次/g,"%s lượt").replace(/%s阶/g,"%s bậc");
    if(Object.prototype.hasOwnProperty.call(uiTerms,output))return uiTerms[output];
    for(const term of sortedTerms)if(output.includes(term))output=output.split(term).join(uiTerms[term]);
    return output.replace(/([a-zA-ZÀ-ỹ])([xX])(?=[0-9])/g,"$1 $2");
  }
  function translateUI(text){
    if(typeof text!=="string"||!hasHan.test(text))return text;
    if(Object.prototype.hasOwnProperty.call(uiExact,text))return uiExact[text];
    // Preserve Cocos RichText tags, color codes, font and click attributes.
    return text.split(/(<[^>]*>)/g).map((s,i)=>i%2?s:translateSegment(s)).join("");
  }
  function untranslatedUI(){return Array.from(unresolved.values()).sort((a,b)=>b.count-a.count);}
  function auditUI(){
    const cc=uiEngine,scene=cc&&cc.director&&cc.director.getScene();
    if(!scene)return {count:0,samples:[],note:"Scene not ready"};
    const entries=[];
    function scan(node){
      if(!node||!node.activeInHierarchy)return;
      for(const Cls of [cc.Label,cc.RichText]){
        if(!Cls)continue;
        const comp=node.getComponent(Cls);
        if(comp&&typeof comp.string==="string"&&hasHan.test(comp.string))
          entries.push({node:node.name,text:comp.string});
      }
      for(const child of node.children||[])scan(child);
    }
    scan(scene);
    console.info("[Arcade VI] Active untranslated strings",entries.length,entries.slice(0,100));
    return {count:entries.length,samples:entries.slice(0,100)};
  }
  function installVietnameseUI(engine){
    uiEngine=engine;
    for(const name of ["Label","RichText"]){
      const cls=engine[name];
      // Use own-property guard: RichText inherits Label.prototype!
      if(!cls||!cls.prototype||Object.prototype.hasOwnProperty.call(cls.prototype,"__gvViInstalled"))continue;
      const proto=cls.prototype;
      function translateField(inst){
        if(typeof inst._string!=="string"||!hasHan.test(inst._string))return false;
        const translated=translateUI(inst._string);
        if(hasHan.test(translated)){
          const key=translated.slice(0,200),known=unresolved.get(key);
          if(known)known.count++;
          else if(unresolved.size<250)unresolved.set(key,{text:key,node:inst.node&&inst.node.name,count:1});
        }
        if(inst._string===translated)return false;
        inst._string=translated;return true;
      }
      const method=name==="Label"?"markForUpdateRenderData":"_updateRichTextStatus";
      const originalRender=proto[method];
      if(typeof originalRender==="function")proto[method]=function(){
        translateField(this);return originalRender.apply(this,arguments);
      };
      let owner=proto,d;
      while(owner&&!(d=Object.getOwnPropertyDescriptor(owner,"string")))owner=Object.getPrototypeOf(owner);
      if(d&&typeof d.get==="function"&&typeof d.set==="function"){
        try{Object.defineProperty(proto,"string",{
          configurable:true,enumerable:d.enumerable,
          get(){return d.get.call(this);},
          set(v){return d.set.call(this,translateUI(v));}
        });}catch(err){console.warn("[Arcade VI] setter hook unavailable",name,err);}
      }
      const enable=proto.onEnable;
      proto.onEnable=function(){
        if(enable)enable.apply(this,arguments);
        if(translateField(this)&&typeof this[method]==="function")this[method]();
      };
      proto.__gvViInstalled=true;
    }
  }
  root.ArcadeH5 = { init, flush, onNativeSave, clearData, isResetting, onBattleStart, onMonsterKilled, onItemCollected, onBattleEnd, getScoreStats,
    rewarded, snapshot, installVietnameseUI, translateUI, auditUI, untranslatedUI };
  root.addEventListener("pagehide", onNativeSave);
  root.document.addEventListener("visibilitychange", function () {
    if (root.document.visibilityState === "hidden") { onNativeSave(); flush(); }
  });
})(window);
