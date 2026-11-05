/**
 * Arcade tool — Ký túc xá ma ám 4 (Cocos Creator 2.x / sword_lieflat)
 * Cloud save/load, GV.saveScore(điểm tổng hợp), dịch UI TQ→VN, GVAdBreak, xóa data trong Cài đặt.
 * Logo / BXH / nút Gửi điểm HTML: không yêu cầu → khối comment cuối file.
 */
(function (global) {
	"use strict";

	var MODULE_VERSION = "ky-tuc-xa-ma-am-4-tool-v1";
	var GAME_SLUG = "ky-tuc-xa-ma-am-4";
	var SAVE_PREFIX = "sword_lieflat:";
	var LEVEL_KEY = SAVE_PREFIX + "level";
	var SAVE_URL = "https://localhost/account/SaveHistoryGame";
	var LOAD_URL = "https://localhost/account/GetHistoryGame";
	var DELETE_PNG = "xoa-data-gv.png";
	var SaveDebounceMs = 3000;
	var ScoreDebounceMs = 5000;
	var BootTimeoutMs = 8000;
	var KEEP_KEYS = { MUSIC: 1, EFFECT: 1 };
	var SCORE_WATCH_KEYS = {
		weapon: 1,
		skill: 1,
		pet: 1,
		soul: 1,
		auto: 1,
		task: 1
	};

	var qsKill = false;
	var adsOff = false;
	try {
		var qs0 = new URLSearchParams(global.location.search);
		qsKill = qs0.get("gvsave") === "0";
		adsOff = qs0.get("ads") === "0";
	} catch (e0) {
		qsKill = false;
	}

	var state = {
		seeding: false,
		resetting: false,
		dirty: false,
		lastSaveAt: 0,
		pendingSaveTimer: 0,
		pendingSaveReason: "",
		hooksReady: false,
		lastScore: 0,
		settingsOpen: false,
		uiReady: false,
		scorePopupOpen: false,
		pendingScoreTimer: 0,
		pendingSoftScoreTimer: 0
	};

	var readyResolve;
	var ready = new Promise(function (resolve) {
		readyResolve = resolve;
	});

	function finishReady(result) {
		if (readyResolve) {
			readyResolve(result || { ok: true });
			readyResolve = null;
		}
		return result;
	}

	function logInfo(msg, detail) {
		if (global.console && console.info) {
			if (detail !== undefined) console.info("[ArcadeTool] " + msg, detail);
			else console.info("[ArcadeTool] " + msg);
		}
	}

	function logWarn(msg, detail) {
		if (global.console && console.warn) {
			if (detail !== undefined) console.warn("[ArcadeTool] " + msg, detail);
			else console.warn("[ArcadeTool] " + msg);
		}
	}

	/* -------------------------------- credentials -------------------------------- */

	function readQs(search) {
		try {
			return new URLSearchParams(search || "");
		} catch (e) {
			return new URLSearchParams();
		}
	}

	function getCredentials() {
		var local = readQs(global.location && global.location.search);
		var gid = local.get("gid") || "";
		var token = local.get("token") || "";

		if ((!gid || !token) && global.parent !== global) {
			try {
				var parentQs = readQs(global.parent.location.search);
				if (!gid) gid = parentQs.get("gid") || "";
				if (!token) token = parentQs.get("token") || "";
			} catch (e) { /* cross-origin */ }
		}

		if ((!gid || !token) && global.document && global.document.referrer) {
			try {
				var ref = new URL(global.document.referrer);
				var refQs = readQs(ref.search);
				if (!gid) gid = refQs.get("gid") || "";
				if (!token) token = refQs.get("token") || "";
			} catch (e2) { /* ignore */ }
		}

		return { gid: gid, token: token || "" };
	}

	function cloudEnabled() {
		return !qsKill && !!getCredentials().gid;
	}

	/* -------------------------------- storage helpers -------------------------------- */

	function lsGet(key) {
		try {
			return global.localStorage.getItem(key);
		} catch (e) {
			return null;
		}
	}

	function lsSet(key, value) {
		try {
			global.localStorage.setItem(key, String(value));
			return true;
		} catch (e) {
			return false;
		}
	}

	function lsRemove(key) {
		try {
			global.localStorage.removeItem(key);
		} catch (e) { /* ignore */ }
	}

	function isProgressKey(key) {
		return typeof key === "string" && key.indexOf(SAVE_PREFIX) === 0;
	}

	function listProgressKeys() {
		var keys = [];
		try {
			for (var i = 0; i < global.localStorage.length; i++) {
				var k = global.localStorage.key(i);
				if (isProgressKey(k)) keys.push(k);
			}
		} catch (e) { /* private */ }
		return keys;
	}

	function collectProgressBlob() {
		var keys = {};
		listProgressKeys().forEach(function (k) {
			keys[k] = lsGet(k);
		});
		return keys;
	}

	function safeParse(raw, fallback) {
		if (raw == null || raw === "") return fallback;
		try {
			return JSON.parse(raw);
		} catch (e) {
			return fallback;
		}
	}

	function readNowLevel() {
		var data = safeParse(lsGet(LEVEL_KEY), null);
		if (!data || typeof data !== "object") return 1;
		var n = Number(data.nowLevel);
		return isFinite(n) && n > 0 ? Math.floor(n) : 1;
	}

	function parseBlob(suffix) {
		return safeParse(lsGet(SAVE_PREFIX + suffix), null);
	}

	function sumNumArr(arr) {
		if (!Array.isArray(arr)) return 0;
		var s = 0;
		for (var i = 0; i < arr.length; i++) {
			var n = Number(arr[i]);
			if (isFinite(n) && n > 0) s += Math.floor(n);
		}
		return s;
	}

	function countTruthy(arr) {
		if (!Array.isArray(arr)) return 0;
		var n = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i]) n++;
		}
		return n;
	}

	function countMachines(weaponData2) {
		if (!Array.isArray(weaponData2)) return 0;
		var n = 0;
		for (var i = 0; i < weaponData2.length; i++) {
			var e = weaponData2[i];
			if (e == null) continue;
			if (Array.isArray(e) && e.length) n++;
			else if (typeof e === "object" && (e.swordId != null || e.gainIndex != null)) n++;
		}
		return n;
	}

	function sumInten(weaponData2) {
		if (!Array.isArray(weaponData2)) return 0;
		var s = 0;
		for (var i = 0; i < weaponData2.length; i++) {
			var e = weaponData2[i];
			if (Array.isArray(e)) {
				var v = Number(e[3]);
				if (isFinite(v) && v > 0) s += Math.floor(v);
			} else if (e && typeof e === "object") {
				var u = Number(e.intenNum);
				if (isFinite(u) && u > 0) s += Math.floor(u);
			}
		}
		return s;
	}

	function killEnemyCount(task) {
		var list = task && task.taskCount;
		if (!Array.isArray(list)) return 0;
		for (var i = 0; i < list.length; i++) {
			var t = list[i];
			if (t && Number(t.type) === 1) {
				var n = Number(t.taskNum);
				return isFinite(n) && n > 0 ? Math.floor(n) : 0;
			}
		}
		return 0;
	}

	function accountDaysFromSign(sign) {
		if (!sign) return 0;
		var t = Number(sign.firstLoginTime);
		if (!isFinite(t) || t <= 0) return 0;
		/* firstLoginTime có thể là giây hoặc ms */
		if (t < 1e12) t *= 1000;
		var days = Math.floor((Date.now() - t) / 86400000);
		return days > 0 ? days : 0;
	}

	/**
	 * Điểm kỷ lục tổng hợp (không dùng vàng / AFK / online ngày — dễ reset).
	 * nowLevel*20 + nowRiskLevel*10 + maxWeaponStep*50
	 * + machines*20 + upgrades*5 + pets*10 + killEnemy + accountDays*2
	 */
	function computeHighScore() {
		var level = parseBlob("level") || {};
		var weapon = parseBlob("weapon") || {};
		var skill = parseBlob("skill") || {};
		var pet = parseBlob("pet") || {};
		var soul = parseBlob("soul") || {};
		var auto = parseBlob("auto") || {};
		var task = parseBlob("task") || {};
		var sign = parseBlob("sign") || {};

		var nowLevel = Number(level.nowLevel);
		nowLevel = isFinite(nowLevel) && nowLevel > 0 ? Math.floor(nowLevel) : 1;
		var nowRisk = Number(level.nowRiskLevel);
		nowRisk = isFinite(nowRisk) && nowRisk > 0 ? Math.floor(nowRisk) : 0;
		var maxStep = Number(weapon.maxWeaponStep);
		maxStep = isFinite(maxStep) && maxStep > 0 ? Math.floor(maxStep) : 0;
		var machines = countMachines(weapon.WeaponData2);
		var upgrades =
			sumInten(weapon.WeaponData2) +
			sumNumArr(skill.skillLevelArr) +
			sumNumArr(skill.abilityLevelArr) +
			sumNumArr(pet.petLevelArr) +
			sumNumArr(soul.soulLevelArr) +
			(Number(auto.autoLevel) > 0 ? Math.floor(Number(auto.autoLevel)) : 0) +
			(Number(auto.goldLevel) > 0 ? Math.floor(Number(auto.goldLevel)) : 0);
		var pets = countTruthy(pet.petLockArr);
		var kills = killEnemyCount(task);
		var days = accountDaysFromSign(sign);

		var score =
			nowLevel * 20 +
			nowRisk * 10 +
			maxStep * 50 +
			machines * 20 +
			upgrades * 5 +
			pets * 10 +
			kills +
			days * 2;
		return score > 0 ? Math.floor(score) : nowLevel * 20;
	}

	function isScoreWatchKey(key) {
		if (!isProgressKey(key)) return false;
		var suffix = String(key).slice(SAVE_PREFIX.length);
		return !!SCORE_WATCH_KEYS[suffix];
	}

	/* -------------------------------- translate -------------------------------- */

	var EXACT = {
		"第1层": "Tầng 1",
		"生命": "HP",
		"攻击": "ATK",
		"攻击力": "ATK",
		"机器": "Máy",
		"采集": "Thu thập",
		"冒险": "Phiêu lưu",
		"陷阱": "Bẫy",
		"修罗": "Tu La",
		"修炼": "Tu luyện",
		"技能": "Kỹ năng",
		"法阵": "Pháp trận",
		"伙伴": "Đồng đội",
		"去挖矿": "Đi đào",
		"耐久": "Độ bền",
		"耐久度": "Độ bền",
		"未发现": "Chưa mở",
		"未解锁": "Chưa mở",
		"未开启": "Chưa mở",
		"关闭": "Đóng",
		"获取": "Nhận",
		"领取": "Nhận",
		"设置": "Cài đặt",
		"音效": "SFX",
		"音乐": "Nhạc",
		"特效": "Hiệu ứng",
		"返回": "Về",
		"放弃": "Bỏ",
		"保留": "Giữ",
		"升级": "Nâng cấp",
		"召唤": "Triệu hồi",
		"召唤5次": "X5 triệu hồi",
		"确定": "OK",
		"确认": "OK",
		"取消": "Hủy",
		"强化": "Cường hóa",
		"附魔": "Phù phép",
		"洗练": "Luyện lại",
		"洗炼": "Luyện lại",
		"加速": "Tăng tốc",
		"下一关": "Tầng tiếp",
		"下一层": "Tầng tiếp",
		"立即获取": "Nhận ngay",
		"立刻获得": "Nhận ngay",
		"技能正在CD": "Skill đang CD",
		"能量不足": "Thiếu năng lượng",
		"金币不够!": "Thiếu vàng!",
		"金币不够！": "Thiếu vàng!",
		"尚未解锁": "Chưa mở khóa",
		"体力不足": "Thiếu thể lực",
		"灵石不足": "Thiếu linh thạch",
		"奖励已满": "Thưởng đã đầy",
		"上阵": "Ra trận",
		"上阵成功": "Ra trận thành công",
		"下场": "Xuống",
		"再次挑战": "Thách lại",
		"开放中！": "Đang mở!",
		"开放中!": "Đang mở!",
		"未开放！": "Chưa mở!",
		"未开放!": "Chưa mở!",
		"进阶！": "Tiến!",
		"炮台图鉴": "Sổ súng",
		"不了，谢谢": "Không, cảm ơn",
		"选择关卡": "Chọn màn",
		"选择关卡：": "Chọn màn: ",
		"选择关卡:": "Chọn màn: ",
		"出剑速度：": "Tốc xuất kiếm: ",
		"出剑速度:": "Tốc xuất kiếm: ",
		"当前属性：": "Thuộc tính: ",
		"当前属性:": "Thuộc tính: ",
		"当前附魔属性：": "Thuộc tính phù hiện tại: ",
		"当前附魔属性:": "Thuộc tính phù hiện tại: ",
		"自动出剑数量：": "Số kiếm auto: ",
		"自动出剑数量:": "Số kiếm auto: ",
		"挂机时间：": "Thời gian AFK: ",
		"挂机时间:": "Thời gian AFK: ",
		"挂机时间": "Thời gian AFK",
		"开放时间：": "Thời gian mở: ",
		"开放时间:": "Thời gian mở: ",
		"剩余时间：": "Còn lại: ",
		"剩余时间:": "Còn lại: ",
		"奖励：": "Thưởng: ",
		"奖励:": "Thưởng: ",
		"领取步骤：": "Bước nhận: ",
		"领取步骤:": "Bước nhận: ",
		"今日次数": "Lượt hôm nay",
		"每日限1次": "1 lần/ngày",
		"2h内有效": "2h hiệu lực",
		"又没有能量值了?来补充吧！": "Hết năng lượng rồi? Nạp thêm nào!",
		"又没有能量值了？来补充吧！": "Hết năng lượng rồi? Nạp thêm nào!",
		"是否恢复所有体力？": "Hồi full thể lực?",
		"是否恢复所有体力?": "Hồi full thể lực?",
		"未检测到成功添加桌面": "Chưa thêm được ra màn hình",
		"桌面图标添加成功": "Đã thêm icon màn hình",
		"进阶至玄铁剑(No.3)后开放": "Mở sau khi tiến Huyền Thiết (No.3)",
		"2.添加到主屏幕": "2. Thêm màn hình chính",
		"添加桌面领奖励": "Thêm màn hình nhận thưởng",
		"*加速功能永久生效": "*Tăng tốc vĩnh viễn",
		"*加速生效期间，离线奖励提升": "*Khi tăng tốc, thưởng AFK tăng",
		"*离线奖励上限：": "*Trần thưởng AFK: ",
		"*离线奖励上限:": "*Trần thưởng AFK: ",
		"*最高获得S级属性附魔": "*Cao nhất nhận phù cấp S",
		"*永久提升金币获取数量": "*Tăng vàng nhận vĩnh viễn",
		"(仅对本武器生效)": "(Chỉ vũ khí này)",
		"(无需上场也生效)": "(Có hiệu lực dù không ra trận)",
		"(最高获得S级属性)": "(Cao nhất nhận thuộc tính S)",
		"仙界伐魔": "Tiên giới diệt ma",
		"完成第五关试炼": "Xong thí luyện màn 5",
		"周一 周四 周日": "T2 T5 CN",
		"虚假宣传": "Quảng cáo sai",
		"数据丢失": "Mất dữ liệu",
		"游戏卡死": "Game đơ",
		"问题描述": "Mô tả lỗi",
		"新属性:": "Thuộc tính mới: ",
		"新属性：": "Thuộc tính mới: ",
		"最高伤害:": "DMG cao nhất: ",
		"最高伤害：": "DMG cao nhất: ",
		"伤害达到": "DMG đạt",
		"移动速度": "Tốc chạy",
		"闪避率:": "Tỉ lệ né: ",
		"闪避率：": "Tỉ lệ né: ",
		"暴击率:": "Crit: ",
		"暴击率：": "Crit: ",
		"暴击伤害:": "DMG crit: ",
		"暴击伤害：": "DMG crit: ",
		"连击率:": "Tỉ lệ combo: ",
		"连击率：": "Tỉ lệ combo: ",
		"总攻击:": "Tổng ATK: ",
		"总攻击：": "Tổng ATK: ",
		"总耐久:": "Tổng độ bền: ",
		"总耐久：": "Tổng độ bền: ",
		"·Lv.1解锁新属性": "·Lv.1 mở thuộc tính mới",
		"统一剑的攻击、耐久": "Đồng bộ ATK & độ bền kiếm",
		"增加玉佩": "Thêm ngọc bội",
		"攻速提升": "Tăng tốc đánh",
		"金币加成": "Buff vàng",
		"限时": "Giới hạn",
		"每关2次": "2 lần/màn",
		"当前等级": "Cấp hiện tại",
		"召唤令数量": "Số lệnh triệu hồi",
		"普通召唤": "Triệu hồi thường",
		"第{0}名": "Hạng {0}",
		"CD:20秒": "CD:20s",
		"秒": "s",
		"已解锁": "Đã mở",
		"背景音乐": "Nhạc nền",
		"玉佩数量": "Số ngọc bội",
		"金币数量": "Số vàng",
		"石头数量": "Số đá",
		"强化率": "Tỉ lệ cường hóa",
		"矿石制作": "Chế quặng",
		"伤害数字": "Số damage",
		"武器阶级": "Hạng vũ khí",
		"讨伐提示": "Tip đi săn",
		"讨伐剩余时间": "Còn lại đi săn",
		"剑的移动速度": "Tốc chạy kiếm",
		"离线奖励-双倍领取": "Thưởng AFK - Nhận x2",
		"获取一级矿石礼包": "Nhận gói quặng cấp 1",
		"获取二级矿石礼包": "Nhận gói quặng cấp 2",
		"获取三级矿石礼包": "Nhận gói quặng cấp 3",
		"获取需要完成的任务目标": "Nhận mục tiêu nhiệm vụ",
		"之前阶段的强化成功率上升": "Tỉ lệ cường hóa giai đoạn trước tăng",
		"增加采矿获得双倍矿物的概": "Tăng tỉ lệ đào quặng x2",
		"双倍领取": "Nhận x2",
		"能量": "Năng lượng",
		"每日": "Hàng ngày",
		"每日矿石": "Quặng ngày",
		"讨伐": "Đi săn",
		"挑战": "Thách đấu",
		"试炼": "Thí luyện",
		"武器": "Vũ khí",
		"通关": "Clear",
		"已满级": "Đã max",
		"已领取": "Đã nhận",
		"倒计时": "Đếm ngược",
		"新矿石": "Quặng mới",
		"离线奖励": "Thưởng AFK",
		"挂机奖励": "Thưởng AFK",
		"在线奖励": "Thưởng online",
		"自动攻击": "Auto-atk",
		"金币效率": "Hiệu suất vàng",
		"金币加成": "Buff vàng",
		"矿石储备": "Kho quặng",
		"碎片不足": "Thiếu mảnh",
		"添加桌面": "Thêm màn hình",
		"获取钞票": "Nhận tiền",
		"获得钞票": "Nhận tiền",
		"开始建造机器吧": "Bắt đầu dựng máy nào",
		"开始锻造机器吧": "Bắt đầu rèn máy nào",
		"通关第20层后解锁": "Mở sau tầng 20",
		"机器总耐久:": "Máy tổng độ bền:",
		"机器总攻击:": "Máy tổng ATK:",
		"机器总数量:": "Tổng số máy:",
		"机器总耐久": "Máy tổng độ bền",
		"机器总攻击": "Máy tổng ATK",
		"机器总数量": "Tổng số máy",
		"伙伴总加成:": "Tổng buff đồng đội:",
		"伙伴总加成": "Tổng buff đồng đội",
		"已解锁：": "Đã mở: ",
		"已解锁:": "Đã mở: ",
		"当前等级：": "Cấp hiện tại: ",
		"当前等级:": "Cấp hiện tại: ",
		"本日视频强化次数:": "Lượt buff video hôm nay: ",
		"本日视频强化次数：": "Lượt buff video hôm nay: ",
		"新附魔属性:": "Thuộc tính phù mới: ",
		"新附魔属性：": "Thuộc tính phù mới: ",
		"金币不足": "Thiếu vàng",
		"钞票不足": "Thiếu tiền",
		"附魔石不足": "Thiếu đá phù phép",
		"召唤令不足": "Thiếu lệnh triệu hồi",
		"订单所需矿石不足": "Thiếu quặng cho đơn",
		"已通关现有全部关卡": "Đã clear hết màn hiện có",
		"已通关现有全部冒险关卡": "Đã clear hết màn phiêu lưu",
		"今日次数已用尽": "Hết lượt hôm nay",
		"今日次数已用完": "Hết lượt hôm nay",
		"今日视频强化次数已用完": "Hết lượt buff video hôm nay",
		"今日已领取": "Đã nhận hôm nay",
		"自动攻击等级已满": "Auto-atk đã max",
		"已获得永久自动攻击": "Đã có auto-atk vĩnh viễn",
		"已获得自动攻击": "Đã có auto-atk",
		"已关闭自动攻击": "Đã tắt auto-atk",
		"挂机奖励已解锁": "Đã mở thưởng AFK",
		"技能正在使用中": "Skill đang dùng",
		"飞剑槽位已满": "Ô kiếm bay đã đầy",
		"上阵格已满": "Ô ra trận đã đầy",
		"金币加成已满": "Buff vàng đã max",
		"在线时长不足": "Chưa đủ thời gian online",
		"播放广告失败": "Xem QC thất bại",
		"登录失败！": "Đăng nhập thất bại!",
		"请求失败": "Request lỗi",
		"请求超时": "Request timeout",
		"请求错误": "Request lỗi",
		"解析错误": "Parse lỗi",
		"加载中": "Đang tải",
		"开始加载": "Đang tải",
		"提示": "Tip",
		"反馈与投诉": "Góp ý / báo lỗi",
		"请选择道具": "Chọn vật phẩm",
		"不能全部锁定": "Không khóa hết được",
		"请先确定洗练结果": "Xác nhận kết quả luyện trước",
		"请先解锁获取附加属性": "Mở khóa thuộc tính phụ trước",
		"需要完成当前讨伐": "Phải xong cuộc đi săn hiện tại",
		"已经是最小等级": "Đã min cấp",
		"已经是最大等级": "Đã max cấp",
		"制造第二个机器": "Chế máy thứ 2",
		"点击增加机器位": "Bấm thêm ô máy",
		"点击进入下一关": "Bấm vào tầng tiếp",
		"点击领取奖励": "Bấm nhận thưởng",
		"点击采集矿石": "Bấm thu thập quặng",
		"点击采取银矿": "Bấm đào mỏ bạc",
		"点击采取锰矿": "Bấm đào mangan",
		"点击升级技能": "Bấm nâng skill",
		"点击制造机器": "Bấm chế máy",
		"进行一次修炼": "Tu luyện 1 lần",
		"关闭伤害数字": "Tắt số damage",
		"开启伤害数字": "Bật số damage",
		"关闭技能特效": "Tắt FX skill",
		"开启技能特效": "Bật FX skill",
		"关闭受击特效": "Tắt FX chịu đòn",
		"开启受击特效": "Bật FX chịu đòn",
		"关闭受击特效与拖尾": "Tắt FX chịu đòn + trail",
		"开启受击特效与拖尾": "Bật FX chịu đòn + trail",
		"关闭加速回蓝": "Tắt tăng mana",
		"开启加速回蓝": "Bật tăng mana",
		"继续战斗按钮": "Tiếp tục chiến",
		"三倍暴击！！！": "x3 chí mạng!!!",
		"新附魔属性": "Thuộc tính phù mới",
		"当前附魔属性": "Thuộc tính phù hiện tại",
		"解锁新属性": "Mở thuộc tính mới",
		"法阵已解锁": "Đã mở pháp trận",
		"伙伴已解锁": "Đã mở đồng đội",
		"冒险已解锁": "Đã mở phiêu lưu",
		"修炼已解锁": "Đã mở tu luyện",
		"技能已解锁": "Đã mở kỹ năng",
		"讨伐已解锁": "Đã mở đi săn",
		"自动出剑": "Tự xuất kiếm",
		"魂晶获取": "Nhận hồn tinh",
		"钞票获取": "Nhận tiền",
		"补充能量": "Nạp năng lượng",
		"离线时间": "Thời gian offline",
		"秒后可领取": "s sau nhận được",
		"今日剩余次数：": "Lượt còn hôm nay: ",
		"当前攻击速度": "Tốc đánh hiện tại",
		"当前出剑速度": "Tốc xuất kiếm",
		"当前出剑数量": "Số kiếm xuất",
		"下一级攻击速度": "Tốc đánh cấp sau",
		"下一级出剑速度": "Tốc xuất kiếm cấp sau",
		"下一级出剑数量": "Số kiếm cấp sau",
		"增加机器位": "Thêm ô máy",
		"采集中": "Đang thu thập",
		"采集体力": "Thể lực thu thập",
		"修炼加速": "Tăng tốc tu luyện",
		"已通关": "Đã clear",
		"领取奖励": "Nhận thưởng",
		"获得钞票": "Nhận tiền",
		"恢复体力": "Hồi thể lực",
		"伤害显示": "Hiện damage",
		"性能优化": "Tối ưu",
		"金币提升": "Tăng vàng",
		"制作完成": "Xong!",
		"当前属性": "Thuộc tính",
		"点击出剑": "Chạm xuất kiếm",
		"点击攻击": "Chạm đánh",
		"每次攻击": "Mỗi đòn",
		"攻击速度": "Tốc đánh",
		"点击关闭按钮": "Chạm nút Đóng",
		"点击特效": "FX chạm",
		"点击获取": "Chạm nhận",
		"点击领取": "Chạm nhận",
		"点击锻造": "Chạm rèn",
		"点击确定": "Chạm OK",
		"点击取消": "Chạm Hủy",
		"增加金币": "Thêm vàng",
		"加速回蓝": "Tăng mana",
		"伙伴召唤": "Triệu hồi đồng đội",
		"获取伙伴": "Nhận đồng đội",
		"附加属性": "Thuộc tính phụ",
		"伙伴上阵": "Đồng đội ra trận",
		"全局加成": "Buff chung",
		"灵兽技能": "Skill linh thú",
		"进入侧边栏": "Vào sidebar",
		"增加武器位": "Thêm ô vũ khí",
		"增加附魔石": "Thêm đá phù",
		"每日限一次": "1 lần/ngày",
		"上场后生效": "Có hiệu lực khi ra trận",
		"无法看广告": "Không xem QC được",
		"点击空白区域关闭": "Chạm chỗ trống để đóng",
		"是否恢复所有体力": "Hồi full thể lực?",
		"本次离线收益": "Thu offline lần này",
		"离线奖励上限": "Trần thưởng AFK",
		"额外获得奖励": "Thưởng thêm",
		"快来解放双手": "Giải phóng đôi tay nào",
		"添加到主屏幕": "Thêm màn hình chính",
		"自动出剑数量": "Số kiếm auto",
		"攻击速度提升": "Tăng tốc đánh",
		"出剑速度提升": "Tăng tốc xuất kiếm",
		"离线奖励提升": "Tăng thưởng AFK",
		"对所有武器生效": "Áp dụng mọi vũ khí",
		"仅对本武器生效": "Chỉ vũ khí này",
		"(对所有武器生效)": "(Áp dụng mọi vũ khí)",
		"(上场后生效)": "(Có hiệu lực khi ra trận)",
		"(每日限一次)": "(1 lần/ngày)",
		"立即获得永久自动攻击": "Nhận auto-atk vĩnh viễn",
		"永久提升金币获取数量": "Tăng vàng nhận vĩnh viễn",
		"点击获取即可开启自动攻击": "Xem QC để bật auto-atk",
		"点击获取即可补满能量": "Xem QC để full năng lượng",
		"点击获取即可开启": "Xem QC để mở",
		"游戏是本地缓存": "Game lưu trên máy",
		"又没有能量值了": "Hết năng lượng rồi",
		"本日视频强化次数": "Lượt buff video hôm nay",
		"根据挂机时长获得相应奖励": "Thưởng theo thời gian AFK",
		"开始完成每天的签到": "Điểm danh mỗi ngày",
		"输入跳转关卡": "Nhập tầng nhảy tới",
		"出剑速度": "Tốc xuất kiếm",
		"附魔石数量": "Số đá phù",
		"钞票数量": "Số tiền",
		"加速时间": "Thời gian tăng tốc",
		"获取后还可获得": "Nhận xong còn được thêm",
		"【升级后】": "[Sau nâng cấp]",
		"【现在】": "[Hiện tại]",
		"次后必出现": "lần sau chắc xuất",
		"级伙伴": "Đồng đội Lv.",
		"伤害：": "DMG: ",
		"伤害:": "DMG: ",
		"连击": "Combo",
		"连击率": "Tỉ lệ combo",
		"闪避": "Né",
		"闪避率": "Tỉ lệ né",
		"暴击率": "Crit",
		"暴击伤害": "DMG crit",
		"获取电池": "Nhận pin",
		"剧情": "Cốt truyện",
		"订单": "Đơn hàng",
		"进阶": "Tiến giai",
		"进阶!": "Tiến!",
		"锻造": "Rèn",
		"锻造!": "Rèn!",
		"锻造成功": "Rèn thành công",
		"剑灵": "Kiếm linh",
		"剑宠": "Kiếm pet",
		"金币": "Vàng",
		"钞票": "Tiền",
		"武器耐久耗尽,怪物狂暴": "Vũ khí hết độ bền, quái cuồng!",
		"*最高获得A级属性附魔": "*Cao nhất nhận phù cấp A",
		"攻击速度+50%": "Tốc đánh +50%",
		"出剑速度+50%": "Tốc xuất kiếm +50%",
		"[C] 暴击率+10%": "[C] Crit +10%",
		"[V]所有剑的攻击力+6%": "[V] ATK mọi kiếm +6%",
		"配置文件加载": "Đang tải cấu hình",
		"加载用户数据": "Đang tải dữ liệu",
		"加载资源": "Đang tải tài nguyên",
		"进入中...": "Đang vào...",
		"开始加载": "Đang tải",
		"累计在线一定时间 可以领取大量福利": "Online đủ thời gian mỗi ngày nhận quà lớn",
		"累计在线一定时间可以领取大量福利": "Online đủ thời gian mỗi ngày nhận quà lớn",
		"每日累计在线一定时间可以领取大量福利": "Online đủ thời gian mỗi ngày nhận quà lớn",
		"在线 5 分钟": "Online 5 phút",
		"在线 10 分钟": "Online 10 phút",
		"在线 15 分钟": "Online 15 phút",
		"在线 20 分钟": "Online 20 phút",
		"在线 30 分钟": "Online 30 phút",
		"在线5分钟": "Online 5 phút",
		"在线10分钟": "Online 10 phút",
		"在线15分钟": "Online 15 phút",
		"在线20分钟": "Online 20 phút",
		"在线30分钟": "Online 30 phút",
		"在线": "Online",
		"分钟": "phút",
		"商店": "Shop",
		"熔炼": "Luyện",
		"超级猎梦者": "Siêu thợ săn mơ",
		"tips:游戏是本地缓存，如果清除了本地数据会导致游戏进度消失哦~": "Tip: game lưu máy — xóa data là mất tiến trình!",
		"游戏是本地缓存，如果清除了本地数据会导致游戏进度消失哦~": "Game lưu máy — xóa data là mất tiến trình!",
		"每次攻击都要点?快来解放双手!": "Mỗi đòn phải chạm? Auto tay đi!",
		"每次攻击都要点?快来解放双手！": "Mỗi đòn phải chạm? Auto tay đi!",
		"留下联系方式更方便我们联系您": "Để lại liên hệ để mình hỗ trợ bạn",
		"著作权人：实丰（深圳）网络科技有限公司": "Bản quyền: Shifeng (Thâm Quyến) Network Technology Co., Ltd."
	};

	function hasCjk(text) {
		return typeof text === "string" && /[\u4e00-\u9fff]/.test(text);
	}

	function localize(input) {
		if (input === null || input === undefined) return input;
		var s = String(input);
		if (!hasCjk(s)) return s;
		if (EXACT[s]) return EXACT[s];

		/* Unlock / tầng — MUST trước /第N层/ để tránh sót «通关» */
		s = s.replace(/通关第(\d+)层后解锁/g, "Mở sau tầng $1");
		s = s.replace(/通关第(\d+)层后开放/g, "Mở sau tầng $1");
		s = s.replace(/通关第(\d+)/g, "Clear tầng $1");
		s = s.replace(/通关(\d+)层后解锁/g, "Mở sau tầng $1");
		s = s.replace(/通关(\d+)层后开放/g, "Mở sau tầng $1");
		s = s.replace(/(\d+)层后解锁/g, "Mở sau tầng $1");
		s = s.replace(/(\d+)层后开放/g, "Mở sau tầng $1");
		s = s.replace(/试炼第(\d+)层/g, "Thí luyện tầng $1");
		s = s.replace(/每日第(\d+)层/g, "Hàng ngày tầng $1");
		s = s.replace(/挑战冒险第(\d+)层/g, "Thách phiêu lưu tầng $1");
		s = s.replace(/第(\d+)层/g, "Tầng $1");
		s = s.replace(/第\{0\}名/g, "Hạng {0}");
		s = s.replace(/(\d+)级伙伴/g, "Đồng đội Lv.$1");
		s = s.replace(/(\d+)把/g, "$1 cây");
		s = s.replace(/(\d+)h内有效/g, "$1h hiệu lực");
		s = s.replace(/(\d+)关/g, "màn $1");
		s = s.replace(/·Lv\.(\d+)解锁新属性/g, "·Lv.$1 mở thuộc tính mới");

		/* Online rewards — trước token ngắn 每日/在线/领取 */
		s = s.replace(/每日累计在线一定时间可以领取大量福利/g, "Online đủ thời gian mỗi ngày nhận quà lớn");
		s = s.replace(/累计在线一定时间\s*可以领取大量福利/g, "Online đủ thời gian mỗi ngày nhận quà lớn");
		s = s.replace(/在线\s*(\d+)\s*分钟/g, "Online $1 phút");
		s = s.replace(/在线时长达到(\d+)m/g, "Online đạt $1 phút");

		/* Phrase dài / tip — TRƯỚC token ngắn */
		s = s.replace(/又没有能量值了[?？]来补充吧[！!]/g, "Hết năng lượng rồi? Nạp thêm nào!");
		s = s.replace(/是否恢复所有体力[？?]/g, "Hồi full thể lực?");
		s = s.replace(/未检测到成功添加桌面/g, "Chưa thêm được ra màn hình");
		s = s.replace(/进阶至玄铁剑\(No\.3\)后开放/g, "Mở sau khi tiến Huyền Thiết (No.3)");
		s = s.replace(/\*加速生效期间，离线奖励提升/g, "*Khi tăng tốc, thưởng AFK tăng");
		s = s.replace(/\*加速功能永久生效/g, "*Tăng tốc vĩnh viễn");
		s = s.replace(/\*最高获得S级属性附魔/g, "*Cao nhất nhận phù cấp S");
		s = s.replace(/\*永久提升金币获取数量/g, "*Tăng vàng nhận vĩnh viễn");
		s = s.replace(/\*离线奖励上限[：:]/g, "*Trần thưởng AFK: ");
		s = s.replace(/\(最高获得S级属性\)/g, "(Cao nhất nhận thuộc tính S)");
		s = s.replace(/\(无需上场也生效\)/g, "(Có hiệu lực dù không ra trận)");
		s = s.replace(/\(仅对本武器生效\)/g, "(Chỉ vũ khí này)");
		s = s.replace(/永久提升金币获取数量/g, "Tăng vàng nhận vĩnh viễn");
		s = s.replace(/统一剑的攻击、耐久/g, "Đồng bộ ATK & độ bền kiếm");
		s = s.replace(/完成第五关试炼/g, "Xong thí luyện màn 5");
		s = s.replace(/2\.添加到主屏幕/g, "2. Thêm màn hình chính");
		s = s.replace(/添加桌面领奖励/g, "Thêm màn hình nhận thưởng");
		s = s.replace(/技能正在CD/g, "Skill đang CD");
		s = s.replace(/能量不足/g, "Thiếu năng lượng");
		s = s.replace(/金币不够[！!]/g, "Thiếu vàng!");
		s = s.replace(/尚未解锁/g, "Chưa mở khóa");
		s = s.replace(/体力不足/g, "Thiếu thể lực");
		s = s.replace(/灵石不足/g, "Thiếu linh thạch");
		s = s.replace(/奖励已满/g, "Thưởng đã đầy");
		s = s.replace(/立即获取/g, "Nhận ngay");
		s = s.replace(/立刻获得/g, "Nhận ngay");
		s = s.replace(/再次挑战/g, "Thách lại");
		s = s.replace(/下一关/g, "Tầng tiếp");
		s = s.replace(/下一层/g, "Tầng tiếp");
		s = s.replace(/上阵成功/g, "Ra trận thành công");
		s = s.replace(/开放中[！!]/g, "Đang mở!");
		s = s.replace(/未开放[！!]/g, "Chưa mở!");
		s = s.replace(/进阶[！!]/g, "Tiến!");
		s = s.replace(/炮台图鉴/g, "Sổ súng");
		s = s.replace(/不了，谢谢/g, "Không, cảm ơn");
		s = s.replace(/选择关卡[：:]/g, "Chọn màn: ");
		s = s.replace(/选择关卡/g, "Chọn màn");
		s = s.replace(/每日限1次/g, "1 lần/ngày");
		s = s.replace(/仙界伐魔/g, "Tiên giới diệt ma");
		s = s.replace(/周一 周四 周日/g, "T2 T5 CN");

		/* Phrase có : trước token ngắn */
		s = s.replace(/机器总耐久[：:]/g, "Máy tổng độ bền: ");
		s = s.replace(/机器总攻击[：:]/g, "Máy tổng ATK: ");
		s = s.replace(/机器总数量[：:]/g, "Tổng số máy: ");
		s = s.replace(/伙伴总加成[：:]/g, "Tổng buff đồng đội: ");
		s = s.replace(/机器总耐久/g, "Máy tổng độ bền");
		s = s.replace(/机器总攻击/g, "Máy tổng ATK");
		s = s.replace(/机器总数量/g, "Tổng số máy");
		s = s.replace(/伙伴总加成/g, "Tổng buff đồng đội");
		s = s.replace(/已解锁[：:]/g, "Đã mở: ");
		s = s.replace(/已解锁/g, "Đã mở");
		s = s.replace(/当前等级[：:]/g, "Cấp hiện tại: ");
		s = s.replace(/本日视频强化次数[：:]/g, "Lượt buff video hôm nay: ");
		s = s.replace(/新附魔属性[：:]/g, "Thuộc tính phù mới: ");
		s = s.replace(/当前附魔属性[：:]/g, "Thuộc tính phù hiện tại: ");
		s = s.replace(/当前属性[：:]/g, "Thuộc tính: ");
		s = s.replace(/出剑速度[：:]/g, "Tốc xuất kiếm: ");
		s = s.replace(/自动出剑数量[：:]/g, "Số kiếm auto: ");
		s = s.replace(/挂机时间[：:]/g, "Thời gian AFK: ");
		s = s.replace(/开放时间[：:]/g, "Thời gian mở: ");
		s = s.replace(/剩余时间[：:]/g, "Còn lại: ");
		s = s.replace(/领取步骤[：:]/g, "Bước nhận: ");
		s = s.replace(/奖励[：:]/g, "Thưởng: ");
		s = s.replace(/总攻击[：:]/g, "Tổng ATK: ");
		s = s.replace(/总耐久[：:]/g, "Tổng độ bền: ");
		s = s.replace(/新属性[：:]/g, "Thuộc tính mới: ");
		s = s.replace(/最高伤害[：:]/g, "DMG cao nhất: ");
		s = s.replace(/闪避率[：:]/g, "Tỉ lệ né: ");
		s = s.replace(/暴击率[：:]/g, "Crit: ");
		s = s.replace(/暴击伤害[：:]/g, "DMG crit: ");
		s = s.replace(/连击率[：:]/g, "Tỉ lệ combo: ");
		s = s.replace(/今日剩余次数[：:]\s*/g, "Lượt còn hôm nay: ");
		s = s.replace(/秒后可领取/g, "s sau nhận được");
		s = s.replace(/min内有效/g, "phút hiệu lực");
		s = s.replace(/剑的移动速度/g, "Tốc chạy kiếm");
		s = s.replace(/移动速度/g, "Tốc chạy");
		s = s.replace(/背景音乐/g, "Nhạc nền");
		s = s.replace(/玉佩数量/g, "Số ngọc bội");
		s = s.replace(/金币数量/g, "Số vàng");
		s = s.replace(/石头数量/g, "Số đá");
		s = s.replace(/强化率/g, "Tỉ lệ cường hóa");
		s = s.replace(/矿石制作/g, "Chế quặng");
		s = s.replace(/伤害数字/g, "Số damage");
		s = s.replace(/武器阶级/g, "Hạng vũ khí");
		s = s.replace(/讨伐剩余时间/g, "Còn lại đi săn");
		s = s.replace(/讨伐提示/g, "Tip đi săn");
		s = s.replace(/离线奖励-双倍领取/g, "Thưởng AFK - Nhận x2");
		s = s.replace(/获取([一二三])级矿石礼包/g, function (_, n) {
			var map = { "一": "1", "二": "2", "三": "3" };
			return "Nhận gói quặng cấp " + (map[n] || n);
		});
		s = s.replace(/获取需要完成的任务目标/g, "Nhận mục tiêu nhiệm vụ");
		s = s.replace(/之前阶段的强化成功率上升/g, "Tỉ lệ cường hóa giai đoạn trước tăng");
		s = s.replace(/增加采矿获得双倍矿物的概/g, "Tăng tỉ lệ đào quặng x2");
		s = s.replace(/试炼第(?!\d)/g, "Thí luyện tầng ");
		s = s.replace(/每日第(?!\d)/g, "Hàng ngày tầng ");
		s = s.replace(/层后开放/g, "mở sau tầng");
		s = s.replace(/层后解锁/g, "mở sau tầng");
		s = s.replace(/\(最高获得\s*/g, "(Cao nhất nhận ");
		s = s.replace(/级属性\)/g, "thuộc tính)");

		s = s.replace(/金币不足/g, "Thiếu vàng");
		s = s.replace(/钞票不足/g, "Thiếu tiền");
		s = s.replace(/附魔石不足/g, "Thiếu đá phù phép");
		s = s.replace(/召唤令不足/g, "Thiếu lệnh triệu hồi");
		s = s.replace(/碎片不足/g, "Thiếu mảnh");
		s = s.replace(/获取钞票/g, "Nhận tiền");
		s = s.replace(/获得钞票/g, "Nhận tiền");
		s = s.replace(/未发现/g, "Chưa mở");
		s = s.replace(/未解锁/g, "Chưa mở");
		s = s.replace(/未开启/g, "Chưa mở");
		s = s.replace(/去挖矿/g, "Đi đào");
		s = s.replace(/已领取/g, "Đã nhận");
		s = s.replace(/耐久度/g, "Độ bền");
		s = s.replace(/耐久/g, "Độ bền");
		s = s.replace(/法阵/g, "Pháp trận");
		s = s.replace(/伙伴/g, "Đồng đội");
		s = s.replace(/通关/g, "Clear");
		s = s.replace(/锻造成功/g, "Rèn thành công");
		s = s.replace(/锻造!/g, "Rèn!");
		s = s.replace(/锻造/g, "Rèn");
		s = s.replace(/进阶!/g, "Tiến!");
		s = s.replace(/商店/g, "Shop");
		s = s.replace(/熔炼/g, "Luyện");
		s = s.replace(/超级猎梦者/g, "Siêu thợ săn mơ");
		s = s.replace(/配置文件加载/g, "Đang tải cấu hình");
		s = s.replace(/加载用户数据/g, "Đang tải dữ liệu");
		s = s.replace(/加载资源/g, "Đang tải tài nguyên");
		s = s.replace(/进入中\.\.\./g, "Đang vào...");
		s = s.replace(/开始加载/g, "Đang tải");
		/* Phrase có 攻击/关闭/… TRƯỚC token ngắn */
		s = s.replace(/点击攻击/g, "Chạm đánh");
		s = s.replace(/每次攻击/g, "Mỗi đòn");
		s = s.replace(/攻击速度/g, "Tốc đánh");
		s = s.replace(/永久自动攻击/g, "auto-atk vĩnh viễn");
		s = s.replace(/自动攻击/g, "Auto-atk");
		s = s.replace(/点击关闭按钮/g, "Chạm nút Đóng");
		s = s.replace(/点击特效/g, "FX chạm");
		s = s.replace(/点击获取/g, "Chạm nhận");
		s = s.replace(/点击领取/g, "Chạm nhận");
		s = s.replace(/点击锻造/g, "Chạm rèn");
		s = s.replace(/点击确定/g, "Chạm OK");
		s = s.replace(/点击取消/g, "Chạm Hủy");
		s = s.replace(/金币提升/g, "Tăng vàng");
		s = s.replace(/金币加成/g, "Buff vàng");
		s = s.replace(/上阵/g, "Ra trận");
		s = s.replace(/下场/g, "Xuống");
		s = s.replace(/洗炼/g, "Luyện lại");
		s = s.replace(/虚假宣传/g, "Quảng cáo sai");
		s = s.replace(/数据丢失/g, "Mất dữ liệu");
		s = s.replace(/游戏卡死/g, "Game đơ");
		s = s.replace(/问题描述/g, "Mô tả lỗi");
		s = s.replace(/增加玉佩/g, "Thêm ngọc bội");
		s = s.replace(/攻速提升/g, "Tăng tốc đánh");
		s = s.replace(/生命/g, "HP");
		s = s.replace(/攻击力/g, "ATK");
		s = s.replace(/攻击/g, "ATK");
		s = s.replace(/机器/g, "Máy");
		s = s.replace(/采集/g, "Thu thập");
		s = s.replace(/冒险/g, "Phiêu lưu");
		s = s.replace(/修炼/g, "Tu luyện");
		s = s.replace(/技能/g, "Kỹ năng");
		s = s.replace(/设置/g, "Cài đặt");
		s = s.replace(/关闭/g, "Đóng");
		s = s.replace(/获取/g, "Nhận");
		s = s.replace(/领取/g, "Nhận");
		s = s.replace(/返回/g, "Về");
		s = s.replace(/放弃/g, "Bỏ");
		s = s.replace(/保留/g, "Giữ");
		s = s.replace(/升级/g, "Nâng cấp");
		s = s.replace(/召唤/g, "Triệu hồi");
		s = s.replace(/确定/g, "OK");
		s = s.replace(/确认/g, "OK");
		s = s.replace(/取消/g, "Hủy");
		s = s.replace(/强化/g, "Cường hóa");
		s = s.replace(/附魔/g, "Phù phép");
		s = s.replace(/洗练/g, "Luyện lại");
		s = s.replace(/加速/g, "Tăng tốc");
		s = s.replace(/能量/g, "Năng lượng");
		s = s.replace(/每日/g, "Hàng ngày");
		s = s.replace(/在线/g, "Online");
		s = s.replace(/分钟/g, "phút");
		s = s.replace(/讨伐/g, "Đi săn");
		s = s.replace(/挑战/g, "Thách đấu");
		s = s.replace(/试炼/g, "Thí luyện");
		s = s.replace(/武器/g, "Vũ khí");
		s = s.replace(/音效/g, "SFX");
		s = s.replace(/音乐/g, "Nhạc");
		s = s.replace(/特效/g, "Hiệu ứng");
		s = s.replace(/金币/g, "Vàng");
		s = s.replace(/钞票/g, "Tiền");
		/* Cleanup chuỗi bị đập nửa TQ nửa Việt */
		s = s.replace(/点击ATK/g, "Chạm đánh");
		s = s.replace(/每次ATK/g, "Mỗi đòn");
		s = s.replace(/ATK速度/g, "Tốc đánh");
		s = s.replace(/Vàng提升/g, "Tăng vàng");
		s = s.replace(/立即Nhận/g, "Nhận ngay");
		s = s.replace(/再次Thách đấu/g, "Thách lại");
		s = s.replace(/Kỹ năng正在CD/g, "Skill đang CD");
		s = s.replace(/Năng lượng不足/g, "Thiếu năng lượng");
		s = s.replace(/尚Chưa mở/g, "Chưa mở khóa");
		s = s.replace(/Vàng不够[！!]?/g, "Thiếu vàng!");
		s = s.replace(/Clear第/g, "Clear tầng ");
		s = s.replace(/Phù phép属性[：:]/g, "Thuộc tính phù: ");
		s = s.replace(/永久提升VàngNhận数量/g, "Tăng vàng nhận vĩnh viễn");
		s = s.replace(/最高获得S级属性Phù phép/g, "Cao nhất nhận phù cấp S");
		s = s.replace(/Tăng tốc生效期间，离线奖励提升/g, "Khi tăng tốc, thưởng AFK tăng");
		s = s.replace(/Tăng tốc功能永久生效/g, "Tăng tốc vĩnh viễn");
		s = s.replace(/又没有Năng lượng值了[?？]来补充吧[！!]/g, "Hết năng lượng rồi? Nạp thêm nào!");
		s = s.replace(/仅对本Vũ khí生效/g, "Chỉ vũ khí này");
		s = s.replace(/Hàng ngày限1次/g, "1 lần/ngày");
		s = s.replace(/Nhận步骤[：:]/g, "Bước nhận: ");
		s = s.replace(/完成第五关Thí luyện/g, "Xong thí luyện màn 5");
		s = s.replace(/解锁新属性/g, "mở thuộc tính mới");
		s = s.replace(/双倍Nhận/g, "Nhận x2");
		s = s.replace(/Vàng数量/g, "Số vàng");
		s = s.replace(/背景Nhạc/g, "Nhạc nền");
		s = s.replace(/Vũ khí阶级/g, "Hạng vũ khí");
		s = s.replace(/Đi săn剩余时间/g, "Còn lại đi săn");
		s = s.replace(/Đi săn提示/g, "Tip đi săn");
		s = s.replace(/Cường hóa率/g, "Tỉ lệ cường hóa");
		s = s.replace(/剑的Tốc chạy/g, "Tốc chạy kiếm");
		/* Không replace /层/g — dễ phá chuỗi dở dang */

		return s;
	}

	function wrapPropString(Ctor) {
		if (!Ctor || !Ctor.prototype) return false;
		var proto = Ctor.prototype;
		if (proto.__gvLocWrapped) return true;
		var desc = Object.getOwnPropertyDescriptor(proto, "string");
		if (!desc || typeof desc.set !== "function") return false;
		Object.defineProperty(proto, "string", {
			configurable: true,
			enumerable: desc.enumerable,
			get: desc.get,
			set: function (value) {
				desc.set.call(this, localize(value));
			}
		});
		proto.__gvLocWrapped = true;
		return true;
	}

	function wrapLabelLifecycle(Ctor) {
		if (!Ctor || !Ctor.prototype || Ctor.prototype.__gvLocLifeWrapped) return !!Ctor && !!Ctor.prototype && !!Ctor.prototype.__gvLocLifeWrapped;
		var proto = Ctor.prototype;
		function localizeSelf() {
			try {
				if (typeof this.string === "string" && hasCjk(this.string)) {
					this.string = localize(this.string);
				}
			} catch (e) {
				/* ignore */
			}
		}
		["onLoad", "onEnable"].forEach(function (name) {
			var orig = proto[name];
			proto[name] = function () {
				localizeSelf.call(this);
				if (typeof orig === "function") return orig.apply(this, arguments);
			};
		});
		proto.__gvLocLifeWrapped = true;
		return true;
	}

	function scheduleScanBurst() {
		scanLabels();
		if (typeof global.requestAnimationFrame === "function") {
			global.requestAnimationFrame(function () {
				scanLabels();
			});
		}
		global.setTimeout(scanLabels, 0);
		global.setTimeout(scanLabels, 50);
		global.setTimeout(scanLabels, 150);
	}

	function hookUiMgrOpen() {
		try {
			var req = global.__require;
			if (typeof req !== "function") return false;
			var mod = req("UIMgr");
			var UIMgr = mod && (mod.UIMgr || mod.default);
			if (!UIMgr || typeof UIMgr.getInstance !== "function") return false;
			var inst = UIMgr.getInstance();
			if (!inst) return false;
			if (inst.__gvOpenHooked) return true;
			function wrapMethod(name) {
				var orig = inst[name];
				if (typeof orig !== "function") return;
				inst[name] = function () {
					var r = orig.apply(this, arguments);
					scheduleScanBurst();
					return r;
				};
			}
			wrapMethod("openUI");
			wrapMethod("openUIOfCallback");
			inst.__gvOpenHooked = true;
			logInfo("UIMgr.openUI hooked for localize burst");
			return true;
		} catch (e) {
			return false;
		}
	}

	/** Backup: EventName.win ("win") → thử gửi điểm (sau khi setNowLevel thường đã ghi LS). */
	function hookWinEvent() {
		try {
			var req = global.__require;
			if (typeof req !== "function") return false;
			var mod = req("EventMgr");
			var EventMgr = mod && (mod.EventMgr || mod.default);
			if (!EventMgr || typeof EventMgr.getInstance !== "function") return false;
			var inst = EventMgr.getInstance();
			if (!inst || typeof inst.emit !== "function") return false;
			if (inst.__gvWinHooked) return true;
			var orig = inst.emit;
			inst.emit = function (name) {
				var r = orig.apply(this, arguments);
				try {
					if (name === "win") {
						logInfo("EventName.win — scheduleMaybeSaveScoreLevel");
						scheduleMaybeSaveScoreLevel();
					}
				} catch (eWin) {
					/* ignore */
				}
				return r;
			};
			inst.__gvWinHooked = true;
			logInfo("EventMgr.emit hooked for win→saveScore");
			return true;
		} catch (e) {
			return false;
		}
	}

	function walkNodes(node, fn) {
		if (!node || !node.isValid) return;
		fn(node);
		var children = node.children;
		if (!children) return;
		for (var i = 0; i < children.length; i++) walkNodes(children[i], fn);
	}

	function hideLoadingCopyright() {
		var ccRef = global.cc;
		if (!ccRef || !ccRef.director) return;
		var scene = ccRef.director.getScene();
		if (!scene) return;
		var re =
			/Bản quyền|著作权|Shifeng|实丰|2024SA|2024SR|2023SR|Network Technology/i;
		walkNodes(scene, function (node) {
			if (!node || !node.isValid) return;
			var name = String(node.name || "");
			if (name.indexOf("Label_soft") === 0) {
				node.active = false;
				return;
			}
			var label = node.getComponent && node.getComponent(ccRef.Label);
			if (label && typeof label.string === "string" && re.test(label.string)) {
				try {
					label.string = "";
				} catch (e) { /* ignore */ }
				node.active = false;
				return;
			}
			var rich =
				node.getComponent &&
				ccRef.RichText &&
				node.getComponent(ccRef.RichText);
			if (rich && typeof rich.string === "string" && re.test(rich.string)) {
				try {
					rich.string = "";
				} catch (e2) { /* ignore */ }
				node.active = false;
			}
		});
	}

	function scanLabels() {
		var ccRef = global.cc;
		if (!ccRef || !ccRef.director) return;
		var scene = ccRef.director.getScene();
		if (!scene) return;
		walkNodes(scene, function (node) {
			var label = node.getComponent && node.getComponent(ccRef.Label);
			if (label && typeof label.string === "string" && hasCjk(label.string)) {
				label.string = localize(label.string);
			}
			var rich = node.getComponent && (ccRef.RichText ? node.getComponent(ccRef.RichText) : null);
			if (rich && typeof rich.string === "string" && hasCjk(rich.string)) {
				rich.string = localize(rich.string);
			}
		});
		hideLoadingCopyright();
	}

	function installTranslateHooks() {
		var ccRef = global.cc;
		if (!ccRef) return false;
		var ok = wrapPropString(ccRef.Label);
		wrapLabelLifecycle(ccRef.Label);
		if (ccRef.RichText) {
			wrapPropString(ccRef.RichText);
			wrapLabelLifecycle(ccRef.RichText);
		}
		patchTextConfig();
		hookUiMgrOpen();
		hookWinEvent();
		if (ccRef.director && ccRef.Director && !ccRef.director.__gvLocSceneHooked) {
			var eventName = ccRef.Director.EVENT_AFTER_SCENE_LAUNCH;
			if (eventName && typeof ccRef.director.on === "function") {
				ccRef.director.on(eventName, function () {
					scanLabels();
					global.setTimeout(scanLabels, 100);
					global.setTimeout(scanLabels, 300);
					global.setTimeout(scanLabels, 600);
					global.setTimeout(scanLabels, 1200);
					global.setTimeout(scanLabels, 2500);
					global.setTimeout(scanLabels, 5000);
					/* denser scans first 10s for prefab _string bypass */
					if (!ccRef.director.__gvDenseScan) {
						ccRef.director.__gvDenseScan = true;
						var n = 0;
						var dense = global.setInterval(function () {
							scanLabels();
							patchTextConfig();
							hookUiMgrOpen();
							hookWinEvent();
							n++;
							if (n >= 50) global.clearInterval(dense);
						}, 200);
					}
				});
				ccRef.director.__gvLocSceneHooked = true;
			}
		}
		scanLabels();
		return ok;
	}

	function patchTextConfig() {
		try {
			var req = global.__require;
			if (typeof req !== "function") return false;
			var mod = req("TextConfig");
			var tc = mod && (mod.TextConfig || mod.default || mod);
			if (!tc || tc.__gvPatched) return !!tc && !!tc.__gvPatched;
			var map = {
				Guide0: "Đang tải cấu hình",
				Guide1: "Đang tải dữ liệu",
				Guide2: "Đang tải tài nguyên",
				Guide3: "Đang vào...",
				SelectItem: "Chọn vật phẩm",
				No: "Hạng {0}"
			};
			Object.keys(map).forEach(function (k) {
				if (typeof tc[k] === "string") tc[k] = map[k];
			});
			tc.__gvPatched = true;
			logInfo("TextConfig Guide0-3 patched");
			return true;
		} catch (e) {
			return false;
		}
	}

	/**
	 * Poll until Label.string wrap is installed (or timeout), then run cb.
	 * Call before window.boot so loading tips go through localize.
	 */
	function whenTranslateReady(cb) {
		var done = false;
		var finish = function () {
			if (done) return;
			done = true;
			try {
				cb && cb();
			} catch (e) {
				logWarn("whenTranslateReady cb error", e);
			}
		};
		var started = Date.now();
		var timer = global.setInterval(function () {
			if (global.cc && global.cc.Label && installTranslateHooks()) {
				global.clearInterval(timer);
				finish();
				return;
			}
			if (Date.now() - started >= 5000) {
				global.clearInterval(timer);
				logWarn("whenTranslateReady timeout — boot anyway");
				finish();
			}
		}, 50);
		/* also try immediately */
		if (global.cc && global.cc.Label && installTranslateHooks()) {
			global.clearInterval(timer);
			finish();
		}
	}

	/* -------------------------------- cloud save / load -------------------------------- */

	function postForm(url, fields) {
		return fetch(url, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
			},
			body: new URLSearchParams(fields)
		}).then(function (res) {
			return res.json().catch(function () {
				return null;
			});
		});
	}

	function parseMeta(res) {
		if (!res || res.Status !== 1 || !res.Data) return null;
		var raw = res.Data.MetaData || res.Data.metaData || res.Data.metadata;
		if (!raw) return null;
		try {
			return typeof raw === "string" ? JSON.parse(raw) : raw;
		} catch (e) {
			return null;
		}
	}

	function buildMetadata() {
		var level = readNowLevel();
		return {
			CurrentLevel: level,
			CurrentStage: level,
			TotalScore: computeHighScore(),
			SavedAt: new Date().toISOString(),
			GameSlug: GAME_SLUG,
			ModuleVersion: MODULE_VERSION,
			keys: collectProgressBlob()
		};
	}

	function applyCloudKeys(keys) {
		if (!keys || typeof keys !== "object") return 0;
		/* Không ghi đè sau khi đã boot (timeout thắng race) */
		if (!readyResolve) {
			logInfo("Skip late cloud apply (boot already started)");
			return 0;
		}
		state.seeding = true;
		var n = 0;
		try {
			Object.keys(keys).forEach(function (k) {
				if (!isProgressKey(k)) return;
				var v = keys[k];
				if (v == null) return;
				lsSet(k, typeof v === "string" ? v : JSON.stringify(v));
				n++;
			});
		} finally {
			state.seeding = false;
		}
		return n;
	}

	function sendSave(reason) {
		if (state.resetting || state.seeding) return Promise.resolve(false);
		if (!cloudEnabled()) {
			logInfo("Skip save (" + reason + "): cloud off / no gid");
			return Promise.resolve(false);
		}
		var cred = getCredentials();
		var metadata = buildMetadata();
		state.lastSaveAt = Date.now();
		state.dirty = false;
		return postForm(SAVE_URL, {
			gameId: cred.gid,
			token: cred.token,
			metadata: JSON.stringify(metadata),
			metaData: JSON.stringify(metadata),
			CurrentLevel: metadata.CurrentLevel,
			CurrentStage: metadata.CurrentStage,
			TotalScore: metadata.TotalScore
		})
			.then(function (res) {
				var ok = !!(res && res.Status === 1);
				if (ok) logInfo("Save OK (" + reason + ") level=" + metadata.TotalScore);
				else logWarn("Save failed (" + reason + ")", res);
				return ok;
			})
			.catch(function (err) {
				logWarn("Save error (" + reason + "): " + (err && err.message ? err.message : err));
				return false;
			});
	}

	function requestSave(reason) {
		if (state.seeding || state.resetting) return;
		state.dirty = true;
		state.pendingSaveReason = reason || "dirty";
		var elapsed = Date.now() - state.lastSaveAt;
		if (elapsed >= SaveDebounceMs) {
			sendSave(state.pendingSaveReason);
			return;
		}
		if (state.pendingSaveTimer) return;
		state.pendingSaveTimer = global.setTimeout(function () {
			state.pendingSaveTimer = 0;
			sendSave(state.pendingSaveReason);
		}, Math.max(250, SaveDebounceMs - elapsed));
	}

	function pauseGame() {
		try {
			if (global.cc && cc.audioEngine) cc.audioEngine.pauseAll();
		} catch (e0) {
			/* ignore */
		}
		try {
			if (global.cc && cc.director) cc.director.pause();
		} catch (e1) {
			/* ignore */
		}
		state.scorePopupOpen = true;
	}

	function resumeGame() {
		if (!state.scorePopupOpen) return;
		state.scorePopupOpen = false;
		try {
			if (global.cc && cc.director) cc.director.resume();
		} catch (e0) {
			/* ignore */
		}
		try {
			if (global.cc && cc.audioEngine) cc.audioEngine.resumeAll();
		} catch (e1) {
			/* ignore */
		}
	}

	function maybeSaveScore(force) {
		if (state.scorePopupOpen && !force) return;
		var score = computeHighScore();
		if (!force && score <= state.lastScore) {
			logInfo("skip saveScore (score<=last)", { score: score, lastScore: state.lastScore });
			return;
		}
		if (typeof global.GV !== "function") {
			logWarn("skip saveScore: GV missing");
			return;
		}

		var finished = false;
		function done() {
			if (finished) return;
			finished = true;
			resumeGame();
			sendSave("score-close");
			logInfo("score popup closed", { score: score });
		}

		pauseGame();
		try {
			new global.GV().saveScore(score, done);
			logInfo("saveScore(" + score + ")");
			global.setTimeout(function () {
				var dlg = global.document.getElementById("gv_savescore");
				if (dlg) {
					state.lastScore = score;
				} else {
					logWarn("saveScore: no #gv_savescore — keep lastScore=" + state.lastScore);
					done();
				}
			}, 150);
		} catch (e) {
			logWarn("saveScore error", e);
			done();
		}
	}

	/** Soft progress (weapon/task/…) — debounce; không reset timer level. */
	function scheduleMaybeSaveScoreSoft() {
		if (state.seeding || state.resetting || state.scorePopupOpen) return;
		if (state.pendingSoftScoreTimer) {
			global.clearTimeout(state.pendingSoftScoreTimer);
		}
		state.pendingSoftScoreTimer = global.setTimeout(function () {
			state.pendingSoftScoreTimer = 0;
			maybeSaveScore(false);
		}, ScoreDebounceMs);
	}

	/** Thắng tầng / đổi level — gọi ngay (debounce ngắn tránh double-write cùng tick). */
	function scheduleMaybeSaveScoreLevel() {
		if (state.seeding || state.resetting || state.scorePopupOpen) return;
		if (state.pendingScoreTimer) {
			global.clearTimeout(state.pendingScoreTimer);
		}
		state.pendingScoreTimer = global.setTimeout(function () {
			state.pendingScoreTimer = 0;
			maybeSaveScore(false);
		}, 200);
	}

	function loadHistory() {
		if (!cloudEnabled()) {
			logInfo("Skip GetHistoryGame: cloud off / no gid");
			return Promise.resolve({ skipped: true });
		}
		var cred = getCredentials();
		return postForm(LOAD_URL, {
			gameId: cred.gid,
			token: cred.token
		})
			.then(function (res) {
				logInfo("GetHistoryGame Status=" + (res && res.Status));
				var meta = parseMeta(res);
				if (!meta) return { empty: true };
				var applied = 0;
				if (meta.keys) applied = applyCloudKeys(meta.keys);
				else if (meta.GameData || meta.level) {
					/* legacy single-blob fallback unused for this game */
				}
				if (applied > 0) {
					state.lastScore = computeHighScore();
					logInfo("Restored " + applied + " keys, score=" + state.lastScore + " level=" + readNowLevel());
				}
				return { ok: true, applied: applied };
			})
			.catch(function (err) {
				logWarn("GetHistoryGame error: " + (err && err.message ? err.message : err));
				return { error: true };
			});
	}

	function patchLocalStorage() {
		if (global.localStorage.__gvSwordPatched) return;
		var proto = Object.getPrototypeOf(global.localStorage) || global.Storage && global.Storage.prototype;
		if (!proto || !proto.setItem) return;
		var origSet = proto.setItem;
		proto.setItem = function (key, value) {
			origSet.call(this, key, value);
			if (state.seeding || state.resetting) return;
			if (!isProgressKey(String(key))) return;
			requestSave("setItem:" + key);
			if (String(key) === LEVEL_KEY) {
				scheduleMaybeSaveScoreLevel();
			} else if (isScoreWatchKey(String(key))) {
				scheduleMaybeSaveScoreSoft();
			}
		};
		global.localStorage.__gvSwordPatched = true;
		logInfo("localStorage.setItem patched for " + SAVE_PREFIX + "*");
	}

	function bindLifecycleSave() {
		var flush = function () {
			if (state.dirty) sendSave("pagehide");
		};
		global.addEventListener("visibilitychange", function () {
			if (global.document.visibilityState === "hidden") flush();
		});
		global.addEventListener("pagehide", flush);
	}

	/* -------------------------------- delete -------------------------------- */

	function wipeLocalProgress() {
		listProgressKeys().forEach(function (k) {
			lsRemove(k);
		});
		/* keep MUSIC/EFFECT intentionally */
		Object.keys(KEEP_KEYS).forEach(function () {});
	}

	function deleteSave() {
		if (state.resetting) return;
		state.resetting = true;
		wipeLocalProgress();
		var cred = getCredentials();
		var cleared = {
			CurrentLevel: 1,
			CurrentStage: 1,
			TotalScore: 0,
			SavedAt: new Date().toISOString(),
			GameSlug: GAME_SLUG,
			cleared: true,
			keys: {}
		};
		var done = function () {
			global.location.reload();
		};
		if (cloudEnabled()) {
			postForm(SAVE_URL, {
				gameId: cred.gid,
				token: cred.token,
				metadata: JSON.stringify(cleared),
				metaData: JSON.stringify(cleared),
				CurrentLevel: 1,
				CurrentStage: 1,
				TotalScore: 0
			})
				.catch(function () {})
				.then(done);
		} else {
			done();
		}
	}

	function ensureDeleteOverlay() {
		if (global.document.getElementById("gv-delete-overlay")) return;
		var style = global.document.createElement("style");
		style.textContent = [
			"#gv-delete-overlay{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;",
			"background:rgba(0,0,0,.55);font-family:sans-serif}",
			"#gv-delete-overlay[hidden]{display:none!important}",
			"#gv-delete-dialog{background:#fff;color:#222;max-width:320px;width:86%;padding:18px 16px;border-radius:12px;",
			"box-shadow:0 8px 24px rgba(0,0,0,.35)}",
			"#gv-delete-message{margin:0 0 14px;font-size:16px;line-height:1.45}",
			"#gv-delete-actions{display:flex;gap:12px;justify-content:center;margin-top:4px}",
			"#gv-delete-actions button{flex:1;max-width:140px;min-width:96px;padding:10px 14px;font-size:16px;border-radius:8px;border:0;cursor:pointer}",
			"#gv-delete-cancel{background:#e5e5e5;color:#333}",
			"#gv-delete-ok{background:#e23;color:#fff}",
			"#gv-btn-delete{position:fixed;z-index:99990;width:48px;height:48px;padding:0;border:0;background:transparent;",
			"cursor:pointer;opacity:.6;transform:scale(.8);transition:opacity .2s,transform .2s;display:none}",
			"#gv-btn-delete:hover,#gv-btn-delete:focus-visible{opacity:1;transform:scale(1)}",
			"#gv-btn-delete img{width:100%;height:100%;display:block;pointer-events:none}"
		].join("");
		global.document.head.appendChild(style);

		var overlay = global.document.createElement("div");
		overlay.id = "gv-delete-overlay";
		overlay.hidden = true;
		overlay.innerHTML = [
			'<div id="gv-delete-dialog" role="dialog" aria-modal="true">',
			'<p id="gv-delete-message">Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?</p>',
			'<div id="gv-delete-actions">',
			'<button type="button" id="gv-delete-cancel">Hủy</button>',
			'<button type="button" id="gv-delete-ok">Xóa</button>',
			"</div></div>"
		].join("");
		global.document.body.appendChild(overlay);

		var hide = function () {
			overlay.hidden = true;
		};
		overlay.addEventListener("click", function (ev) {
			if (ev.target === overlay) hide();
		});
		global.document.getElementById("gv-delete-cancel").addEventListener("click", hide);
		global.document.getElementById("gv-delete-ok").addEventListener("click", function () {
			hide();
			deleteSave();
		});

		var btn = global.document.createElement("button");
		btn.id = "gv-btn-delete";
		btn.type = "button";
		btn.title = "Xóa dữ liệu";
		btn.setAttribute("aria-label", "Xóa dữ liệu");
		btn.innerHTML = '<img src="' + DELETE_PNG + '" alt="Xóa dữ liệu">';
		btn.addEventListener("click", function () {
			overlay.hidden = false;
		});
		global.document.body.appendChild(btn);
	}

	var hiddenVersionNodes = [];

	function restoreVersionLabels() {
		for (var i = 0; i < hiddenVersionNodes.length; i++) {
			try {
				var n = hiddenVersionNodes[i];
				if (n && n.isValid) n.opacity = 255;
			} catch (e) {
				/* ignore */
			}
		}
		hiddenVersionNodes = [];
	}

	function findVersionLabel(settingsRoot) {
		var ccRef = global.cc;
		if (!ccRef || !ccRef.Label || !settingsRoot) return null;
		var found = null;
		walkNodes(settingsRoot, function (node) {
			if (found || !node || !node.activeInHierarchy) return;
			var label = node.getComponent && node.getComponent(ccRef.Label);
			if (!label || typeof label.string !== "string") return;
			if (/^\d+\.\d+/.test(String(label.string).trim())) {
				found = label;
			}
		});
		return found;
	}

	function findSettingsNode() {
		var ccRef = global.cc;
		if (!ccRef || !ccRef.director) return null;
		var scene = ccRef.director.getScene();
		if (!scene) return null;
		var byName = null;
		var byTitle = null;
		walkNodes(scene, function (node) {
			if (!node || !node.activeInHierarchy) return;
			var name = String(node.name || "");
			if (!byName && (name === "UISetting" || name.indexOf("UISetting") >= 0)) {
				byName = node;
			}
			var label = node.getComponent && ccRef.Label && node.getComponent(ccRef.Label);
			if (label && typeof label.string === "string") {
				var t = label.string.trim();
				if (t === "Cài đặt" || t === "设置" || t === "設置") {
					byTitle = node.parent || node;
				}
			}
		});
		return byName || byTitle;
	}

	function nodeToScreenRect(node) {
		var ccRef = global.cc;
		if (!ccRef || !node || !node.isValid) return null;
		try {
			var wpos = node.convertToWorldSpaceAR(ccRef.v2(0, 0));
			var canvas = global.document.getElementById("GameCanvas");
			if (!canvas) return null;
			var crect = canvas.getBoundingClientRect();
			var vs = ccRef.view.getVisibleSize();
			var sx = crect.width / vs.width;
			var sy = crect.height / vs.height;
			var cx = crect.left + wpos.x * sx;
			var cy = crect.top + (vs.height - wpos.y) * sy;
			var nw = (node.width || 80) * Math.abs(node.scaleX || 1) * sx;
			var nh = (node.height || 80) * Math.abs(node.scaleY || 1) * sy;
			return { left: cx - nw / 2, top: cy - nh / 2, width: nw, height: nh, crect: crect };
		} catch (e) {
			return null;
		}
	}

	function syncDeleteButton() {
		ensureDeleteOverlay();
		var btn = global.document.getElementById("gv-btn-delete");
		if (!btn) return;
		var splash = global.document.getElementById("splash");
		var splashOn = splash && splash.style && splash.style.display !== "none" && splash.offsetParent !== null;
		var wasOpen = state.settingsOpen;
		var settings = findSettingsNode();
		state.settingsOpen = !!(settings && settings.activeInHierarchy !== false && settings.active !== false);
		if (splashOn || !state.settingsOpen) {
			btn.style.display = "none";
			restoreVersionLabels();
			return;
		}
		if (!wasOpen && state.settingsOpen) {
			scheduleScanBurst();
		}
		btn.style.display = "block";
		var size = 48;
		var verLabel = findVersionLabel(settings);
		var rect = null;
		if (verLabel && verLabel.node && verLabel.node.isValid) {
			try {
				if (verLabel.node.opacity !== 0) {
					verLabel.node.opacity = 0;
					hiddenVersionNodes.push(verLabel.node);
				}
			} catch (eHide) {
				/* ignore */
			}
			rect = nodeToScreenRect(verLabel.node);
		}
		if (!rect) {
			rect = nodeToScreenRect(settings);
		}
		var canvas = global.document.getElementById("GameCanvas");
		var crect = canvas
			? canvas.getBoundingClientRect()
			: { left: 0, top: 0, width: global.innerWidth, height: global.innerHeight };
		var left;
		var top;
		if (verLabel && rect) {
			/* giữa chỗ text phiên bản */
			left = rect.left + rect.width / 2 - size / 2;
			top = rect.top + rect.height / 2 - size / 2;
		} else if (rect) {
			/* fallback neo đáy panel */
			left = rect.left + rect.width - size - 12;
			top = rect.top + rect.height - size - 24;
		} else {
			left = crect.left + crect.width * 0.72;
			top = crect.top + crect.height * 0.62;
		}
		btn.style.left = Math.round(left) + "px";
		btn.style.top = Math.round(top) + "px";
		btn.style.width = size + "px";
		btn.style.height = size + "px";
	}

	/* -------------------------------- ads (4399 h5api → GVAdBreak) -------------------------------- */

	function isStubGvAdBreak(fn) {
		try {
			var src = Function.prototype.toString.call(fn);
			return src.length < 80 || /ads\s*=\s*0|stub|noop/i.test(src);
		} catch (e) {
			return false;
		}
	}

	function runRewardAd(onSuccess, onFail) {
		var ok = typeof onSuccess === "function" ? onSuccess : function () {};
		var fail = typeof onFail === "function" ? onFail : function () {};
		var done = false;
		var grant = function () {
			if (done) return;
			done = true;
			ok();
		};
		var deny = function () {
			if (done) return;
			done = true;
			fail();
		};

		var hasGv = typeof global.GVAdBreak === "function";
		var stubOnly = hasGv && isStubGvAdBreak(global.GVAdBreak);

		if (hasGv && (adsOff || !stubOnly)) {
			try {
				logInfo(adsOff ? "GVAdBreak start (ads=0)" : "GVAdBreak start");
				global.GVAdBreak(function () {
					logInfo("GVAdBreak done");
					grant();
				});
				return;
			} catch (err) {
				logWarn("GVAdBreak error", err);
				if (adsOff) grant();
				else deny();
				return;
			}
		}

		if (adsOff) {
			logInfo("QC fallback ads=0 — thưởng luôn");
			grant();
			return;
		}

		logWarn("GVAdBreak missing — không thưởng");
		deny();
	}

	function installH5ApiShim() {
		if (global.h5api && global.h5api.__gvShim) return true;
		global.h5api = {
			__gvShim: true,
			playAd: function (cb) {
				runRewardAd(
					function () {
						if (typeof cb === "function") cb({ code: 10001 });
					},
					function () {
						if (typeof cb === "function") cb({ code: 10002 });
					}
				);
			}
		};
		logInfo("h5api.playAd → GVAdBreak");
		return true;
	}

	function wrapSdkMgrPlayVideo() {
		try {
			var req = global.__require || global.window && global.window.__require;
			if (typeof req !== "function") return false;
			var mod = null;
			try {
				mod = req("SdkMgr");
			} catch (e) {
				return false;
			}
			var SdkMgr = mod && (mod.SdkMgr || mod.default || mod);
			var proto = SdkMgr && SdkMgr.prototype;
			if (!proto || typeof proto.playVideo !== "function" || proto.__gvAdWrapped) {
				return !!proto && !!proto.__gvAdWrapped;
			}
			var orig = proto.playVideo;
			proto.playVideo = function (adType, onSuccess) {
				var self = this;
				/* Keep audio/touch block behavior via original path when possible;
				   prefer h5api shim. Fallback: call GV then success. */
				if (global.h5api && global.h5api.__gvShim) {
					return orig.call(self, adType, onSuccess);
				}
				runRewardAd(
					function () {
						if (typeof onSuccess === "function") onSuccess();
					},
					function () {
						logWarn("playVideo denied");
					}
				);
			};
			proto.__gvAdWrapped = true;
			logInfo("SdkMgr.playVideo wrapped");
			return true;
		} catch (e2) {
			return false;
		}
	}

	/* -------------------------------- runtime poll -------------------------------- */

	function installRuntimeHooks() {
		installH5ApiShim();
		installTranslateHooks();
		hookUiMgrOpen();
		hookWinEvent();
		wrapSdkMgrPlayVideo();
		ensureDeleteOverlay();
		if (!state.uiReady) {
			state.uiReady = true;
			global.setInterval(function () {
				syncDeleteButton();
				installTranslateHooks();
				hookUiMgrOpen();
				hookWinEvent();
				wrapSdkMgrPlayVideo();
			}, 400);
		}
		state.hooksReady = true;
		return true;
	}

	function waitForCcThenHook() {
		var started = Date.now();
		var timer = global.setInterval(function () {
			if (global.cc && global.cc.Label) {
				installRuntimeHooks();
			}
			if (state.hooksReady && Date.now() - started > 2000) {
				/* keep interval for settings btn + late SdkMgr */
			}
			if (Date.now() - started > 120000) {
				global.clearInterval(timer);
			}
		}, 400);
	}

	/* -------------------------------- boot -------------------------------- */

	function start() {
		patchLocalStorage();
		bindLifecycleSave();
		installH5ApiShim();
		state.lastScore = computeHighScore();

		var settled = false;
		var settle = function (result) {
			if (settled) return;
			settled = true;
			finishReady(result || { ok: true });
			waitForCcThenHook();
		};

		global.setTimeout(function () {
			settle({ timeout: true });
		}, BootTimeoutMs);

		loadHistory().then(function (result) {
			settle(result || { ok: true });
		});

		return ready;
	}

	var api = {
		version: MODULE_VERSION,
		ready: ready,
		start: start,
		whenTranslateReady: whenTranslateReady,
		saveNow: function () {
			return sendSave("manual");
		},
		getScoreToSend: computeHighScore,
		deleteSave: deleteSave,
		localize: localize,
		runRewardAd: runRewardAd
	};

	global.ArcadeTool = api;
	start();

	/*
	 * FEATURE: Logo / BXH / nút Gửi điểm HTML — không nằm trong yêu cầu task
	 *
	 * function ensureLogo() { ... }
	 * history-leaderboard.js + data-history-leaderboard
	 * gv-gui-diem.png overlay + new GV().saveScore on click
	 */
})(typeof window !== "undefined" ? window : this);
