/**
 * Arcade tool — Hoa Tiên Xinh Đẹp (我的小花仙 / LayaAir)
 * Cloud save/load (record_game80), Gửi điểm, Xóa data, GVAdBreak, dịch tip runtime.
 */
(function (global) {
	"use strict";

	var MODULE_VERSION = "hoa-tien-xinh-dep-tool-v16";
	var SAVE_KEY = "record_game80";
	var NAME_MIGRATE_FLAG = "gvNameMigrateV1";
	var ZH_RE = /[\u4e00-\u9fff]/;
	var SAVE_URL = "https://localhost/account/SaveHistoryGame";
	var LOAD_URL = "https://localhost/account/GetHistoryGame";
	var SEND_IMG = "gv-gui-diem.png";
	var DELETE_IMG = "xoa-data-gv.png";
	var SAVE_DEBOUNCE_MS = 4000;
	var SAVE_HEARTBEAT_MS = 60000;
	var BOOT_TIMEOUT_MS = 8000;

	/* Stash before Laya domparserinone overwrites window.DOMParser (xmldom has no querySelector). */
	var NativeDOMParser = global.DOMParser;

	var qsKill = false;
	var qsAdsOff = false;
	try {
		var _qs0 = new URLSearchParams(global.location.search);
		qsKill = _qs0.get("gvsave") === "0";
		qsAdsOff = _qs0.get("ads") === "0";
	} catch (e0) {
		qsKill = false;
		qsAdsOff = false;
	}

	var state = {
		seeding: false,
		resetting: false,
		dirty: false,
		lastSaveAt: 0,
		pendingSaveTimer: 0,
		lsPatched: false,
		uiReady: false,
		uiVisible: false,
		sceneOpenPatched: false,
		hooksReady: false,
		msgTipPatched: false,
		itemTipPatched: false,
		labelPatched: false,
		h5apiPatched: false,
		h5apiWatching: false,
		canvasFitReady: false,
		canvasFitWatching: false,
		resizeFitTimer: 0,
		overlayPauseDepth: 0,
		savedTimerScale: 1,
		savedMusicMuted: false,
		savedSoundMuted: false,
		heartbeatTimer: 0,
		domParserWatching: false,
		domParserRestored: false,
		domParserLocked: false,
		xmldomQsPatched: false,
		wsMuted: false
	};

	var readyResolve;
	var ready = new Promise(function (resolve) {
		readyResolve = resolve;
	});

	function finishReady(result) {
		if (readyResolve) {
			readyResolve(result || {});
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

	/* ---------- tip / UI string map (runtime) ---------- */
	var TIP_MAP = {
		" 参赛成功 ": " Tham gia thành công ",
		"参赛成功": "Tham gia thành công",
		"cop调试模式已关闭": "Đã tắt chế độ debug COP",
		"人气值不够, 快去收集吧!": "Chưa đủ độ nổi — đi thu thập thôi!",
		"体力不足!": "Không đủ thể lực!",
		"冷却中, 请稍后": "Đang hồi, chờ chút",
		"冷却中,请稍后再试": "Đang hồi, thử lại sau",
		"分享失败": "Chia sẻ thất bại",
		"分享成功": "Chia sẻ thành công",
		"分享成功!!!": "Chia sẻ thành công!!!",
		"发生了不可预知的错误, 这个不应该弹出的!!!": "Lỗi không mong đợi!",
		"在线..": "Online..",
		"复制成功!": "Đã copy!",
		"尚未解锁": "Chưa mở khóa",
		"已开启cop调试模式，策略将在下次启动游戏时生效": "Đã bật debug COP — áp dụng lần mở sau",
		"已签到": "Đã điểm danh",
		"已经购买了喔！": "Đã mua rồi!",
		"已通过!": "Đã qua!",
		"已重新请求cop，不能保证所有功能生效": "Đã xin lại COP — không chắc mọi chức năng OK",
		"已领取": "Đã nhận",
		"已领取!": "Đã nhận!",
		"今日已签到": "Hôm nay đã điểm danh",
		"快去看广告吧!": "Xem QC đi nào!",
		"成长中...": "Đang lớn...",
		"我现在已经精神奕奕了!": "Giờ mình tỉnh táo rồi!",
		"所有关卡已解锁": "Đã mở hết màn",
		"投票次数不够哦": "Không đủ lượt vote",
		"提示": "Thông báo",
		"支付中...": "Đang thanh toán...",
		"星石不足, 通过许愿获得哦!": "Thiếu đá sao — đi ước nguyện nhé!",
		"暂未实现!!!": "Chưa làm!",
		"有商品正在支付中，请稍后再购买": "Đang thanh toán — mua sau nhé",
		"未完成!": "Chưa xong!",
		"未解锁!": "Chưa mở!",
		"未上榜": "Chưa lên bảng",
		"未链接存档服务器！": "Chưa nối server save!",
		"正在努力恢复中, 请稍后...": "Đang khôi phục, chờ chút...",
		"活跃度不足，请完成更多任务": "Thiếu điểm năng động — làm thêm nhiệm vụ",
		"点击按钮2": "Bấm nút 2",
		"看完广告才能获得奖励哦!": "Xem hết QC mới nhận thưởng!",
		"离线..": "Offline..",
		"粘贴成功!": "Đã dán!",
		"补发订单...": "Bù đơn...",
		"解锁成功!": "Mở khóa thành công!",
		"请稍等...": "Chờ chút...",
		"谢谢!": "Cảm ơn!",
		"还有奖励没有领取哦!": "Còn thưởng chưa nhận!",
		"还没有收集完毕, 点击卡片查看详情": "Chưa thu đủ — chạm thẻ xem chi tiết",
		"需要依次签到哟~": "Điểm danh lần lượt nhé~",
		"领取中，请稍后再领取": "Đang nhận — thử lại sau",
		"领取中...": "Đang nhận...",
		"领取": "Nhận",
		"签 到": "Điểm danh",
		"签到": "Điểm danh",
		"前往签到": "Đến điểm danh",
		"前往购买": "Đến mua",
		"前往许愿": "Đến ước nguyện",
		"前往种花": "Đến trồng hoa",
		"确 定": "OK",
		"确定": "OK",
		"关闭": "Đóng",
		"视频免费": "QC miễn phí",
		"加载中...": "Đang tải...",
		"去种花": "Đi trồng hoa",
		"打开卡包": "Mở gói thẻ",
		"已升级到最高称号": "Đã lên danh hiệu cao nhất",
		"领奖": "Nhận thưởng",
		"采摘": "Hái",
		"浇水": "Tưới",
		"施肥": "Bón phân",
		"金币": "Vàng",
		"钻石": "Kim cương",
		"少量金币": "Ít vàng",
		"大量金币": "Nhiều vàng",
		"加": "+",
		"对": "Đúng",
		"错": "Sai",
		"问": "?",
		"获赞数:???": "Lượt thích:???",
		"文字": "Chữ",
		"小粉丝": "Fan nhỏ",
		"练习生": "Thực tập sinh",
		"预备生": "Dự bị",
		"超新星": "Siêu tân tinh",
		"实力新人": "Tân binh cứng",
		"人气偶像": "Idol nổi",
		"闪耀偶像": "Idol tỏa sáng",
		"菲梦之星": "Sao Feimeng",
		"新手园丁": "Thợ vườn mới",
		"种花达人": "Cao thủ trồng hoa",
		"花园老板": "Chủ vườn",
		"鲜花女王": "Nữ hoàng hoa",
		"至尊花仙": "Hoa tiên tối cao",
		/* PvP / room danmaku (labelTM*) */
		"嗯,好漂亮呀！": "Ừm, đẹp quá đi!",
		"应该还能再美一些！": "Chắc còn có thể đẹp hơn nữa!",
		"不错！": "Không tệ!",
		"很棒呀！": "Tuyệt quá!",
		"还好吧，我就觉的一般般！": "Cũng được thôi, mình thấy bình thường!",
		"我也要打扮的美美的！": "Mình cũng muốn diện thật xinh!",
		"只比我的好看那么一点点。": "Chỉ đẹp hơn của mình một chút thôi.",
		"哇！这样搭配出来，真好看。": "Wow! Phối thế này đẹp thật.",
		"这样搭配真的很不错！": "Phối vậy đúng là ổn!",
		"和我自己的一对比真的差别好大！": "So với mình thì chênh lệch lớn thật!",
		"外表不代表一切，内在的自我肯定才是最重要的。": "Bề ngoài không phải tất cả — tự tin bên trong mới quan trọng.",
		"我也想打扮成这样！": "Mình cũng muốn diện như vậy!",
		"真的超喜欢这种装扮。": "Thích kiểu trang phục này cực!",
		"强力支持！": "Ủng hộ mạnh!",
		"好漂亮！我好喜欢！": "Đẹp quá! Thích lắm!",
		"怎么看怎么好看。": "Nhìn kiểu gì cũng đẹp.",
		"你的打扮最美丽！": "Bạn diện đẹp nhất!",
		"今天又美了！": "Hôm nay lại thêm xinh!",
		"小花仙不管怎样都很美！": "Hoa tiên dù sao cũng rất đẹp!",
		"我是来参观学习的！": "Mình đến xem và học hỏi đây!",
		"还是很不错的嘛，就比我的差一点！": "Vẫn ổn đấy, chỉ kém mình một chút!",
		"我永远喜欢夏安安。": "Mãi thích Hạ An An.",
		"漂亮小裙子谁不喜欢呢？": "Váy xinh ai mà chẳng thích?",
		"喜欢能多点小花仙的套装。": "Thích thêm nhiều bộ đồ Hoa tiên.",
		"*玩家名*给你点了一个赞": "*Tên người chơi* đã thích bạn"
	};

	/* Nickname fragments (no spaces — mgrWordFilter.hasSymbol) */
	var NICK_PREFIXES = [
		"Bé", "Na", "Mi", "Lan", "Hoa", "Mây", "Cún", "Miu", "An", "Vy", "My", "Chi", "Nhi", "Boo",
		"Amy", "Lily", "Neko", "Momo", "Hana", "Kute", "Pink", "Soft", "Baby", "Ngọc", "Trà", "Đào",
		"Sen", "Mai", "Đan", "Hà", "Ly", "Yến", "Linh", "Thảo", "Xuân", "Hạnh", "Tiểu"
	];
	var NICK_SUFFIXES = [
		"Na", "Mi", "Vy", "My", "Chi", "Nhi", "Miu", "Boo", "Lan", "Hoa", "Anh", "Love"
	];

	function pickVnNick(used) {
		used = used || {};
		var i;
		for (i = 0; i < 300; i++) {
			var a = NICK_PREFIXES[(Math.random() * NICK_PREFIXES.length) | 0];
			var b = NICK_SUFFIXES[(Math.random() * NICK_SUFFIXES.length) | 0];
			var n = a + b;
			if (n.length > 10 || ZH_RE.test(n) || /\s/.test(n)) continue;
			if (used[n]) continue;
			used[n] = true;
			return n;
		}
		var fallback = "BeNa" + (((Math.random() * 900) | 0) + 100);
		used[fallback] = true;
		return fallback;
	}

	function replaceHanName(value, used, stats) {
		if (typeof value !== "string" || !ZH_RE.test(value)) return value;
		stats.count++;
		return pickVnNick(used);
	}

	function migratePlayerBlock(player, used, stats) {
		if (!player || typeof player !== "object") return;
		if (player.playerName != null) player.playerName = replaceHanName(player.playerName, used, stats);
		if (player.name != null) player.name = replaceHanName(player.name, used, stats);
	}

	function migrateNameArray(arr, used, stats) {
		if (!Array.isArray(arr)) return;
		for (var i = 0; i < arr.length; i++) {
			var row = arr[i];
			if (!row || typeof row !== "object") continue;
			if (row.name != null) row.name = replaceHanName(row.name, used, stats);
		}
	}

	function migrateNameMap(map, used, stats) {
		if (!map || typeof map !== "object" || Array.isArray(map)) return;
		for (var uid in map) {
			if (!Object.prototype.hasOwnProperty.call(map, uid)) continue;
			var row = map[uid];
			if (!row || typeof row !== "object") continue;
			if (row.name != null) row.name = replaceHanName(row.name, used, stats);
		}
	}

	function migrateNearbyPlayers(players, used, stats) {
		if (!players || typeof players !== "object") return;
		for (var rankId in players) {
			if (!Object.prototype.hasOwnProperty.call(players, rankId)) continue;
			migrateNameArray(players[rankId], used, stats);
		}
	}

	/**
	 * Rewrite Chinese player/fake-rank names inside record_game80 → VN nicknames.
	 * Must run before Laya mgrRecord loads.
	 */
	function migrateHanNamesInSave() {
		var raw = lsGet(SAVE_KEY);
		if (!raw) return { changed: 0 };
		var rec = safeParse(raw, null);
		if (!rec || typeof rec !== "object") return { changed: 0 };

		var used = {};
		var stats = { count: 0 };

		migratePlayerBlock(rec.player, used, stats);

		if (rec.offline_pvp) migrateNameArray(rec.offline_pvp.pvpDatas, used, stats);
		if (rec.offline_arena) migrateNameArray(rec.offline_arena.pvpDatas, used, stats);
		if (rec.offline_part_rank) migrateNameMap(rec.offline_part_rank._partRankDatas, used, stats);
		if (rec.mgrOfflineLevelRank) migrateNameMap(rec.mgrOfflineLevelRank._levelRankDatas, used, stats);
		if (rec.mgrOfflineNearbyRank) migrateNearbyPlayers(rec.mgrOfflineNearbyRank.players, used, stats);

		if (stats.count === 0) {
			if (!rec[NAME_MIGRATE_FLAG]) {
				rec[NAME_MIGRATE_FLAG] = 1;
				state.seeding = true;
				try {
					lsSet(SAVE_KEY, JSON.stringify(rec));
				} finally {
					state.seeding = false;
				}
			}
			return { changed: 0 };
		}

		rec[NAME_MIGRATE_FLAG] = 1;
		state.seeding = true;
		try {
			lsSet(SAVE_KEY, JSON.stringify(rec));
		} finally {
			state.seeding = false;
		}
		logInfo("GV_NAME_MIGRATE", { changed: stats.count });
		return { changed: stats.count };
	}

	function translateText(s) {
		if (s == null) return s;
		var str = String(s);
		if (TIP_MAP[str] != null) return TIP_MAP[str];
		if (/^stage not found!/.test(str)) return str.replace("stage not found!", "Không tìm thấy màn!");

		var m;
		if ((m = str.match(/^冷却中\s*(\d{1,2}:\d{2})$/))) return "Hồi: " + m[1];
		if ((m = str.match(/^冷却中(.+)$/))) return "Hồi: " + m[1].replace(/^\s+/, "");
		if ((m = str.match(/^等级:\s*(.+)$/))) return "Cấp: " + m[1];
		if ((m = str.match(/^积分:\s*(.+)$/))) return "Điểm: " + m[1];
		if ((m = str.match(/^部件:\s*(.+)$/))) return "Phụ kiện: " + m[1];
		if ((m = str.match(/^部件数:\s*(.+)$/))) return "Số phụ kiện: " + m[1];
		if ((m = str.match(/^人气值:\s*(.+)$/))) return "Độ nổi: " + m[1];
		if ((m = str.match(/^点赞数:\s*(.+)$/))) return "Lượt thích: " + m[1];
		if ((m = str.match(/^获赞数:\s*(.+)$/))) return "Lượt thích: " + m[1];
		if ((m = str.match(/^今日剩余次数:\s*(.+)$/))) return "Lượt hôm nay: " + m[1];
		if ((m = str.match(/^剩余次数:\s*(.+)$/))) return "Còn: " + m[1];
		if ((m = str.match(/^我的排名:\s*(.+)$/))) return "Hạng của tôi: " + m[1];
		if ((m = str.match(/^第(\d+)关$/))) return "Màn " + m[1];
		if ((m = str.match(/^通过第(\d+)关$/))) return "Qua màn " + m[1];
		if ((m = str.match(/^立即获得(.+)$/))) return "Nhận ngay " + translateText(m[1]);
		if ((m = str.match(/^成功分享录屏,\s*可获得:\s*(.+)$/))) return "Chia sẻ quay màn OK, nhận: " + m[1];
		if ((m = str.match(/^成功分享,\s*可获得:\s*(.+)$/))) return "Chia sẻ OK, nhận: " + m[1];
		if ((m = str.match(/^成功分享,\s*可获得:(.+)$/))) return "Chia sẻ OK, nhận:" + m[1];
		if ((m = str.match(/^普通卡包:\s*(.+)$/))) return "Gói thường: " + m[1];
		if ((m = str.match(/^稀有卡包:\s*(.+)$/))) return "Gói hiếm: " + m[1];
		if ((m = str.match(/^看广告恢复(\d+)次关卡挑战次数$/))) return "Xem QC hồi " + m[1] + " lượt thách đấu";
		if ((m = str.match(/^(\d+)级获得$/))) return "Lv." + m[1] + " nhận";
		if ((m = str.match(/^(\d+)级$/))) return "Lv." + m[1];
		if ((m = str.match(/^通关分数:\s*(.+)$/))) return "Điểm qua màn: " + m[1];
		if ((m = str.match(/^当前分数:\s*(.+)$/))) return "Điểm: " + m[1];
		if ((m = str.match(/^当前分数:(.+)$/))) return "Điểm:" + m[1];
		if ((m = str.match(/^收集数量:\s*(.+)$/))) return "Thu thập: " + m[1];
		if ((m = str.match(/^网络好像丢失了,\s*res:(.+)$/))) return "Mất mạng, res:" + m[1];
		if ((m = str.match(/^剧情Id:\s*(.+)$/))) return "ID cốt truyện: " + m[1];
		if ((m = str.match(/^3D场景数量:\s*(.+)$/))) return "Số scene 3D: " + m[1];
		if ((m = str.match(/^播种\s*(.+?)\s*可以解锁哟!?$/))) return "Gieo " + m[1] + " để mở khóa nhé!";
		if ((m = str.match(/^(.+?)不足[!！]?$/))) return "Không đủ " + translateText(m[1]) + "!";
		if ((m = str.match(/^(\d+)级解锁!快去和小花仙互动吧$/)))
			return "Mở ở Lv." + m[1] + "! Hãy tương tác với Hoa tiên nhé";
		if ((m = str.match(/^没有找到:(.+)$/))) return "Không tìm thấy:" + m[1];
		if ((m = str.match(/^\*(.+)\*给你点了一个赞$/))) return "*" + m[1] + "* đã thích bạn";
		if (/小时/.test(str) && /分/.test(str) && /秒/.test(str)) {
			return str.replace(/小时/g, " giờ ").replace(/分/g, " phút ").replace(/秒/g, " giây").replace(/\s+/g, " ").trim();
		}
		return str;
	}

	function readQs(search) {
		try {
			return new URLSearchParams(search || "");
		} catch (e) {
			return new URLSearchParams();
		}
	}

	function getCredentials() {
		var local = readQs(global.location.search);
		var gid = local.get("gid") || "";
		var token = local.get("token") || "";

		if ((!gid || !token) && global.parent !== global) {
			try {
				var parentQs = readQs(global.parent.location.search);
				if (!gid) gid = parentQs.get("gid") || "";
				if (!token) token = parentQs.get("token") || "";
			} catch (e1) { /* cross-origin */ }
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

	function isOfflineCloudHost() {
		try {
			var host = String((global.location && global.location.hostname) || "").toLowerCase();
			if (!host || host === "localhost" || host === "127.0.0.1") return true;
			if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
			if (host === "test.game" || host.indexOf(".test.game") >= 0) return true;
			if (host === "localhost" || host === "www.localhost" || host === "e.localhost") return false;
			if (host.indexOf(".localhost") >= 0) return false;
			return false;
		} catch (e) {
			return true;
		}
	}

	function cloudEnabled() {
		return !qsKill && !!getCredentials().gid;
	}

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

	function safeParse(raw, fallback) {
		if (raw == null || raw === "") return fallback;
		try {
			return JSON.parse(raw);
		} catch (e) {
			return fallback;
		}
	}

	/* Minimal LZ-String (compressToBase64 / decompressFromBase64) — MIT, pieroxy/lz-string */
	var LZ = (function () {
		var f = String.fromCharCode;
		var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var baseReverseDic = {};
		function getBaseValue(alphabet, character) {
			if (!baseReverseDic[alphabet]) {
				baseReverseDic[alphabet] = {};
				for (var i = 0; i < alphabet.length; i++) {
					baseReverseDic[alphabet][alphabet.charAt(i)] = i;
				}
			}
			return baseReverseDic[alphabet][character];
		}
		function compress(uncompressed, bitsPerChar, getCharFromInt) {
			if (uncompressed == null) return "";
			var i, value, context_dictionary = {}, context_dictionaryToCreate = {},
				context_c = "", context_wc = "", context_w = "",
				context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2,
				context_data = [], context_data_val = 0, context_data_position = 0,
				ii;
			for (ii = 0; ii < uncompressed.length; ii += 1) {
				context_c = uncompressed.charAt(ii);
				if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
					context_dictionary[context_c] = context_dictSize++;
					context_dictionaryToCreate[context_c] = true;
				}
				context_wc = context_w + context_c;
				if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
					context_w = context_wc;
				} else {
					if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
						if (context_w.charCodeAt(0) < 256) {
							for (i = 0; i < context_numBits; i++) {
								context_data_val = (context_data_val << 1);
								if (context_data_position == bitsPerChar - 1) {
									context_data_position = 0;
									context_data.push(getCharFromInt(context_data_val));
									context_data_val = 0;
								} else context_data_position++;
							}
							value = context_w.charCodeAt(0);
							for (i = 0; i < 8; i++) {
								context_data_val = (context_data_val << 1) | (value & 1);
								if (context_data_position == bitsPerChar - 1) {
									context_data_position = 0;
									context_data.push(getCharFromInt(context_data_val));
									context_data_val = 0;
								} else context_data_position++;
								value = value >> 1;
							}
						} else {
							value = 1;
							for (i = 0; i < context_numBits; i++) {
								context_data_val = (context_data_val << 1) | value;
								if (context_data_position == bitsPerChar - 1) {
									context_data_position = 0;
									context_data.push(getCharFromInt(context_data_val));
									context_data_val = 0;
								} else context_data_position++;
								value = 0;
							}
							value = context_w.charCodeAt(0);
							for (i = 0; i < 16; i++) {
								context_data_val = (context_data_val << 1) | (value & 1);
								if (context_data_position == bitsPerChar - 1) {
									context_data_position = 0;
									context_data.push(getCharFromInt(context_data_val));
									context_data_val = 0;
								} else context_data_position++;
								value = value >> 1;
							}
						}
						context_enlargeIn--;
						if (context_enlargeIn == 0) {
							context_enlargeIn = Math.pow(2, context_numBits);
							context_numBits++;
						}
						delete context_dictionaryToCreate[context_w];
					} else {
						value = context_dictionary[context_w];
						for (i = 0; i < context_numBits; i++) {
							context_data_val = (context_data_val << 1) | (value & 1);
							if (context_data_position == bitsPerChar - 1) {
								context_data_position = 0;
								context_data.push(getCharFromInt(context_data_val));
								context_data_val = 0;
							} else context_data_position++;
							value = value >> 1;
						}
					}
					context_enlargeIn--;
					if (context_enlargeIn == 0) {
						context_enlargeIn = Math.pow(2, context_numBits);
						context_numBits++;
					}
					context_dictionary[context_wc] = context_dictSize++;
					context_w = String(context_c);
				}
			}
			if (context_w !== "") {
				if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
					if (context_w.charCodeAt(0) < 256) {
						for (i = 0; i < context_numBits; i++) {
							context_data_val = (context_data_val << 1);
							if (context_data_position == bitsPerChar - 1) {
								context_data_position = 0;
								context_data.push(getCharFromInt(context_data_val));
								context_data_val = 0;
							} else context_data_position++;
						}
						value = context_w.charCodeAt(0);
						for (i = 0; i < 8; i++) {
							context_data_val = (context_data_val << 1) | (value & 1);
							if (context_data_position == bitsPerChar - 1) {
								context_data_position = 0;
								context_data.push(getCharFromInt(context_data_val));
								context_data_val = 0;
							} else context_data_position++;
							value = value >> 1;
						}
					} else {
						value = 1;
						for (i = 0; i < context_numBits; i++) {
							context_data_val = (context_data_val << 1) | value;
							if (context_data_position == bitsPerChar - 1) {
								context_data_position = 0;
								context_data.push(getCharFromInt(context_data_val));
								context_data_val = 0;
							} else context_data_position++;
							value = 0;
						}
						value = context_w.charCodeAt(0);
						for (i = 0; i < 16; i++) {
							context_data_val = (context_data_val << 1) | (value & 1);
							if (context_data_position == bitsPerChar - 1) {
								context_data_position = 0;
								context_data.push(getCharFromInt(context_data_val));
								context_data_val = 0;
							} else context_data_position++;
							value = value >> 1;
						}
					}
					context_enlargeIn--;
					if (context_enlargeIn == 0) {
						context_enlargeIn = Math.pow(2, context_numBits);
						context_numBits++;
					}
					delete context_dictionaryToCreate[context_w];
				} else {
					value = context_dictionary[context_w];
					for (i = 0; i < context_numBits; i++) {
						context_data_val = (context_data_val << 1) | (value & 1);
						if (context_data_position == bitsPerChar - 1) {
							context_data_position = 0;
							context_data.push(getCharFromInt(context_data_val));
							context_data_val = 0;
						} else context_data_position++;
						value = value >> 1;
					}
				}
				context_enlargeIn--;
				if (context_enlargeIn == 0) {
					context_enlargeIn = Math.pow(2, context_numBits);
					context_numBits++;
				}
			}
			value = 2;
			for (i = 0; i < context_numBits; i++) {
				context_data_val = (context_data_val << 1) | (value & 1);
				if (context_data_position == bitsPerChar - 1) {
					context_data_position = 0;
					context_data.push(getCharFromInt(context_data_val));
					context_data_val = 0;
				} else context_data_position++;
				value = value >> 1;
			}
			while (true) {
				context_data_val = (context_data_val << 1);
				if (context_data_position == bitsPerChar - 1) {
					context_data.push(getCharFromInt(context_data_val));
					break;
				} else context_data_position++;
			}
			return context_data.join("");
		}
		function decompress(length, resetValue, getNextValue) {
			var dictionary = [], enlargeIn = 4, dictSize = 4, numBits = 3,
				entry = "", result = [], w, bits, resb, maxpower, power, c,
				data = { val: getNextValue(0), position: resetValue, index: 1 };
			for (var i = 0; i < 3; i++) dictionary[i] = i;
			bits = 0; maxpower = Math.pow(2, 2); power = 1;
			while (power != maxpower) {
				resb = data.val & data.position;
				data.position >>= 1;
				if (data.position == 0) {
					data.position = resetValue;
					data.val = getNextValue(data.index++);
				}
				bits |= (resb > 0 ? 1 : 0) * power;
				power <<= 1;
			}
			switch (bits) {
				case 0:
					bits = 0; maxpower = Math.pow(2, 8); power = 1;
					while (power != maxpower) {
						resb = data.val & data.position;
						data.position >>= 1;
						if (data.position == 0) {
							data.position = resetValue;
							data.val = getNextValue(data.index++);
						}
						bits |= (resb > 0 ? 1 : 0) * power;
						power <<= 1;
					}
					c = f(bits);
					break;
				case 1:
					bits = 0; maxpower = Math.pow(2, 16); power = 1;
					while (power != maxpower) {
						resb = data.val & data.position;
						data.position >>= 1;
						if (data.position == 0) {
							data.position = resetValue;
							data.val = getNextValue(data.index++);
						}
						bits |= (resb > 0 ? 1 : 0) * power;
						power <<= 1;
					}
					c = f(bits);
					break;
				case 2:
					return "";
			}
			dictionary[3] = c;
			w = c;
			result.push(c);
			while (true) {
				if (data.index > length) return "";
				bits = 0; maxpower = Math.pow(2, numBits); power = 1;
				while (power != maxpower) {
					resb = data.val & data.position;
					data.position >>= 1;
					if (data.position == 0) {
						data.position = resetValue;
						data.val = getNextValue(data.index++);
					}
					bits |= (resb > 0 ? 1 : 0) * power;
					power <<= 1;
				}
				switch ((c = bits)) {
					case 0:
						bits = 0; maxpower = Math.pow(2, 8); power = 1;
						while (power != maxpower) {
							resb = data.val & data.position;
							data.position >>= 1;
							if (data.position == 0) {
								data.position = resetValue;
								data.val = getNextValue(data.index++);
							}
							bits |= (resb > 0 ? 1 : 0) * power;
							power <<= 1;
						}
						dictionary[dictSize++] = f(bits);
						c = dictSize - 1;
						enlargeIn--;
						break;
					case 1:
						bits = 0; maxpower = Math.pow(2, 16); power = 1;
						while (power != maxpower) {
							resb = data.val & data.position;
							data.position >>= 1;
							if (data.position == 0) {
								data.position = resetValue;
								data.val = getNextValue(data.index++);
							}
							bits |= (resb > 0 ? 1 : 0) * power;
							power <<= 1;
						}
						dictionary[dictSize++] = f(bits);
						c = dictSize - 1;
						enlargeIn--;
						break;
					case 2:
						return result.join("");
				}
				if (enlargeIn == 0) {
					enlargeIn = Math.pow(2, numBits);
					numBits++;
				}
				if (dictionary[c]) entry = dictionary[c];
				else if (c === dictSize) entry = w + w.charAt(0);
				else return null;
				result.push(entry);
				dictionary[dictSize++] = w + entry.charAt(0);
				enlargeIn--;
				w = entry;
				if (enlargeIn == 0) {
					enlargeIn = Math.pow(2, numBits);
					numBits++;
				}
			}
		}
		return {
			compressToBase64: function (input) {
				if (input == null) return "";
				var res = compress(input, 6, function (a) { return keyStrBase64.charAt(a); });
				switch (res.length % 4) {
					default:
					case 0: return res;
					case 1: return res + "===";
					case 2: return res + "==";
					case 3: return res + "=";
				}
			},
			decompressFromBase64: function (input) {
				if (input == null) return "";
				if (input == "") return null;
				return decompress(input.length, 32, function (index) {
					return getBaseValue(keyStrBase64, input.charAt(index));
				});
			}
		};
	})();

	function tokenUserHint(token) {
		if (!token) return "";
		try {
			var parts = String(token).split(".");
			if (parts.length < 2) return "";
			var b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
			while (b64.length % 4) b64 += "=";
			var json = JSON.parse(global.atob(b64));
			return String(json.username || json.userid || json.userId || json.sub || "");
		} catch (e) {
			return "";
		}
	}

	function isSizeLimitError(res) {
		if (!res) return false;
		var msg = String(res.Message || res.message || "");
		return /giới hạn|gioi han|limit|too large|quá lớn|qua lon|vượt quá|vuot qua/i.test(msg);
	}

	function blobFromMeta(meta) {
		if (!meta || typeof meta !== "object") return null;
		if (meta.lz && meta.record_game80_lz) {
			try {
				var dec = LZ.decompressFromBase64(String(meta.record_game80_lz));
				if (dec != null && dec !== "") return dec;
			} catch (eLz) {
				logWarn("LZ decompress failed", eLz);
			}
		}
		if (meta.record_game80 != null && meta.record_game80 !== "") {
			return typeof meta.record_game80 === "string"
				? meta.record_game80
				: JSON.stringify(meta.record_game80);
		}
		return null;
	}

	function getRecord() {
		return safeParse(lsGet(SAVE_KEY), null);
	}

	/** upgradeExp per role level 1..30 from role_level_db (mergeForm) */
	var ROLE_LEVEL_UPGRADE_EXP = [
		2, 15, 20, 30, 40, 50, 60, 70, 80, 100, 140, 165, 190, 210, 235, 285, 330, 380, 425, 470, 650, 760, 865, 975, 1100, 1300, 1450, 1600, 1800, 2000
	];
	var PART_ID_MIN = 11001;
	var PART_ID_MAX = 21036;
	var ACHIEVEMENT_STATE_RECEIVED = 4;

	function calcRoleLevel(exp) {
		exp = Math.max(0, exp | 0);
		var level = 1;
		for (var i = 0; i < ROLE_LEVEL_UPGRADE_EXP.length; i++) {
			var need = ROLE_LEVEL_UPGRADE_EXP[i] | 0;
			if (exp >= need) {
				level++;
				exp -= need;
			} else {
				break;
			}
		}
		return Math.max(1, level);
	}

	function countOwnedParts(items) {
		var n = 0;
		if (!items || typeof items !== "object") return 0;
		for (var k in items) {
			if (!Object.prototype.hasOwnProperty.call(items, k)) continue;
			var id = +k;
			var amt = +items[k] || 0;
			if (amt > 0 && id >= PART_ID_MIN && id <= PART_ID_MAX) n++;
		}
		return n;
	}

	function countClearedStages(stageDatas) {
		var n = 0;
		if (!stageDatas || typeof stageDatas !== "object") return 0;
		for (var k in stageDatas) {
			if (!Object.prototype.hasOwnProperty.call(stageDatas, k)) continue;
			var d = stageDatas[k];
			if (d && (d.rating | 0) >= 1) n++;
		}
		return n;
	}

	function countAchievementsDone(achievementDatas) {
		var n = 0;
		if (!achievementDatas || typeof achievementDatas !== "object") return 0;
		for (var k in achievementDatas) {
			if (!Object.prototype.hasOwnProperty.call(achievementDatas, k)) continue;
			var d = achievementDatas[k];
			if (d && (d.state | 0) === ACHIEVEMENT_STATE_RECEIVED) n++;
		}
		return n;
	}

	function countGardenDepth(garden) {
		if (!garden || typeof garden !== "object") return 0;
		var pots = garden.flowerpots;
		var n = 0;
		if (pots && typeof pots === "object") {
			for (var k in pots) {
				if (Object.prototype.hasOwnProperty.call(pots, k)) n++;
			}
		}
		return n;
	}

	/**
	 * High score formula (BXH) — hệ số thu gọn:
	 * roleLevel×100 + stageProgress×50 + cleared×20 + parts×10
	 * + achievements×5 + gardenDepth×3 + floor((ball+rope)/10)
	 */
	function computeHighScore(record) {
		var rec = record;
		if (typeof rec === "string") rec = safeParse(rec, null);
		if (!rec || typeof rec !== "object") rec = getRecord() || {};

		var player = rec.player || {};
		var items = player.items || {};
		var stage = rec.stage || {};
		var interaction = rec.mgrInteraction || {};
		var achievement = rec.achievement || {};
		var garden = rec.mgrGarden || {};

		var exp = +items[21] || 0;
		var roleLevel = Math.max(0, calcRoleLevel(exp));
		var stageProgress = Math.max(0, stage.stageProgress | 0);
		var clearedStageCount = Math.max(0, countClearedStages(stage.stageDatas));
		var ownPartCount = Math.max(0, countOwnedParts(items));
		var achievementDone = Math.max(0, countAchievementsDone(achievement.achievementDatas));
		var gardenDepth = Math.max(0, countGardenDepth(garden));
		var miniRaw =
			Math.max(0, interaction.playBallMaxScore | 0) + Math.max(0, interaction.ropeSkippingMaxScore | 0);
		var miniGameScore = Math.floor(miniRaw / 10);

		var total =
			roleLevel * 100 +
			stageProgress * 50 +
			clearedStageCount * 20 +
			ownPartCount * 10 +
			achievementDone * 5 +
			gardenDepth * 3 +
			miniGameScore;

		return {
			TotalScore: total | 0,
			roleLevel: roleLevel,
			stageProgress: stageProgress,
			clearedStageCount: clearedStageCount,
			ownPartCount: ownPartCount,
			achievementDone: achievementDone,
			gardenDepth: gardenDepth,
			miniGameScore: miniGameScore
		};
	}

	function getStageProgress() {
		var rec = getRecord();
		if (rec && rec.stage && typeof rec.stage.stageProgress === "number") {
			return rec.stage.stageProgress | 0;
		}
		try {
			if (global.mgrStage && typeof global.mgrStage.getStageProgress === "function") {
				return global.mgrStage.getStageProgress() | 0;
			}
		} catch (e) { /* ignore */ }
		return 0;
	}

	function getCurrentStageId() {
		var rec = getRecord();
		if (rec && rec.stage && rec.stage.currentStageId != null) {
			return rec.stage.currentStageId;
		}
		var p = getStageProgress();
		return p > 0 ? p : 1;
	}

	function getRoleLevel() {
		return computeHighScore(getRecord()).roleLevel;
	}

	function buildMetadata(recordOverride, opts) {
		opts = opts || {};
		var compress = !!opts.compress;
		var blob = recordOverride != null ? recordOverride : lsGet(SAVE_KEY);
		if (blob == null) blob = "";
		else blob = String(blob);
		var parsed = safeParse(blob, null);
		var scoreInfo = computeHighScore(parsed || getRecord());
		var stageId = 1;
		if (parsed && parsed.stage && parsed.stage.currentStageId != null) {
			stageId = parsed.stage.currentStageId;
		} else {
			stageId = scoreInfo.stageProgress > 0 ? scoreInfo.stageProgress : 1;
		}
		var meta = {
			CurrentLevel: scoreInfo.roleLevel,
			CurrentStage: stageId,
			TotalScore: scoreInfo.TotalScore,
			savedAt: Date.now()
		};
		if (compress && blob) {
			try {
				var packed = LZ.compressToBase64(blob);
				/* Prefer LZ whenever it helps, or when raw is already large (CMS MetaData cap). */
				if (packed && (packed.length < blob.length || blob.length > 12000)) {
					meta.lz = 1;
					meta.record_game80_lz = packed;
					return meta;
				}
			} catch (ePack) {
				logWarn("LZ compress failed — raw blob", ePack);
			}
		}
		meta.record_game80 = blob;
		return meta;
	}

	function defaultMetadata() {
		return {
			CurrentLevel: 1,
			CurrentStage: 1,
			TotalScore: 0,
			savedAt: Date.now(),
			record_game80: ""
		};
	}

	function postForm(url, fields) {
		return new Promise(function (resolve, reject) {
			try {
				if (global.$ && typeof global.$.ajax === "function") {
					global.$.ajax({
						url: url,
						type: "POST",
						data: fields,
						xhrFields: { withCredentials: true },
						success: function (data) { resolve(data); },
						error: function (xhr, status, err) { reject(err || status || "ajax error"); }
					});
					return;
				}
			} catch (eAjax) { /* fall through */ }

			var body = Object.keys(fields)
				.map(function (k) {
					return encodeURIComponent(k) + "=" + encodeURIComponent(fields[k] == null ? "" : fields[k]);
				})
				.join("&");
			global
				.fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
					credentials: "include",
					body: body
				})
				.then(function (r) {
					return r.text().then(function (t) {
						try {
							return JSON.parse(t);
						} catch (e) {
							return t;
						}
					});
				})
				.then(resolve)
				.catch(reject);
		});
	}

	function extractMeta(resp) {
		if (!resp || resp.Status !== 1 || !resp.Data) return null;
		var raw = resp.Data.MetaData || resp.Data.metaData || resp.Data.metadata;
		if (!raw) return null;
		var meta = typeof raw === "string" ? safeParse(raw, null) : raw;
		return meta && typeof meta === "object" ? meta : null;
	}

	function loadCloudSave() {
		if (!cloudEnabled()) {
			logInfo("No gid or gvsave=0 → local fallback");
			return Promise.resolve({ ok: false, reason: "disabled" });
		}
		var cred = getCredentials();
		logInfo("GetHistoryGame", {
			gid: cred.gid,
			hasToken: !!cred.token,
			tokenUser: tokenUserHint(cred.token)
		});
		return postForm(LOAD_URL, { gameId: cred.gid, token: cred.token })
			.then(function (resp) {
				var meta = extractMeta(resp);
				if (!meta) {
					logInfo("Cloud empty / no MetaData", {
						Status: resp && resp.Status,
						hasData: !!(resp && resp.Data),
						gid: cred.gid,
						hasToken: !!cred.token,
						tokenUser: tokenUserHint(cred.token)
					});
					return { ok: false, reason: "empty" };
				}
				var blob = blobFromMeta(meta);
				if (blob == null || blob === "") {
					logInfo("Cloud meta without record_game80", {
						hasLz: !!(meta.lz && meta.record_game80_lz)
					});
					return { ok: false, reason: "no-blob", meta: meta };
				}
				state.seeding = true;
				try {
					lsSet(SAVE_KEY, blob);
					logInfo("Seeded record_game80 from cloud", {
						bytes: blob.length,
						fromLz: !!(meta.lz && meta.record_game80_lz)
					});
				} finally {
					state.seeding = false;
				}
				migrateHanNamesInSave();
				return { ok: true, meta: meta };
			})
			.catch(function (err) {
				logWarn("GetHistoryGame failed", err);
				return { ok: false, reason: "error", error: err };
			});
	}

	function postSavePayload(cred, meta, reason, compressed) {
		var metaJson = JSON.stringify(meta);
		var payload = {
			gameId: cred.gid,
			token: cred.token,
			metadata: metaJson,
			CurrentLevel: meta.CurrentLevel | 0,
			CurrentStage: meta.CurrentStage | 0,
			TotalScore: meta.TotalScore | 0
		};
		logInfo("SaveHistoryGame", {
			reason: reason || "debounce",
			gid: cred.gid,
			TotalScore: meta.TotalScore | 0,
			CurrentLevel: meta.CurrentLevel | 0,
			metaChars: metaJson.length,
			compressed: !!compressed,
			hasLz: !!meta.lz
		});
		return postForm(SAVE_URL, payload);
	}

	function saveCloud(reason) {
		if (!cloudEnabled() || state.resetting || state.seeding) return Promise.resolve(false);
		var cred = getCredentials();
		var rawBlob = lsGet(SAVE_KEY);
		var force = reason === "force" || reason === "delete";
		if (!force && (!rawBlob || rawBlob === "" || rawBlob === "{}")) {
			logInfo("SaveHistoryGame skipped (empty record_game80)", reason || "debounce");
			return Promise.resolve(false);
		}

		/* Always prefer compressed payload — raw Laya blob often exceeds CMS MetaData limit. */
		var meta = buildMetadata(rawBlob, { compress: true });
		var compressed = !!meta.lz;

		return postSavePayload(cred, meta, reason, compressed)
			.then(function (res) {
				if (res && res.Status === 1) {
					state.lastSaveAt = Date.now();
					state.dirty = false;
					return true;
				}
				if (isSizeLimitError(res) && !compressed) {
					logWarn("Save size limit — retry with LZ", res);
					var meta2 = buildMetadata(rawBlob, { compress: true });
					return postSavePayload(cred, meta2, (reason || "debounce") + "+lz", true).then(function (res2) {
						if (res2 && res2.Status === 1) {
							state.lastSaveAt = Date.now();
							state.dirty = false;
							return true;
						}
						logWarn("SaveHistoryGame still over limit after LZ", {
							res: res2,
							metaChars: JSON.stringify(meta2).length
						});
						return false;
					});
				}
				logWarn("SaveHistoryGame Status != 1", res);
				return false;
			})
			.catch(function (err) {
				logWarn("SaveHistoryGame failed", err);
				return false;
			});
	}

	function scheduleSave(reason) {
		state.dirty = true;
		if (state.pendingSaveTimer) {
			global.clearTimeout(state.pendingSaveTimer);
		}
		state.pendingSaveTimer = global.setTimeout(function () {
			state.pendingSaveTimer = 0;
			saveCloud(reason || "debounce");
		}, SAVE_DEBOUNCE_MS);
	}

	function flushSave(reason) {
		if (state.pendingSaveTimer) {
			global.clearTimeout(state.pendingSaveTimer);
			state.pendingSaveTimer = 0;
		}
		if (state.dirty || reason === "force" || reason === "beforeScore") {
			return saveCloud(reason || "flush");
		}
		return Promise.resolve(false);
	}

	function startSaveHeartbeat() {
		if (state.heartbeatTimer) return;
		state.heartbeatTimer = global.setInterval(function () {
			if (state.dirty && cloudEnabled() && !state.resetting && !state.seeding) {
				saveCloud("heartbeat");
			}
		}, SAVE_HEARTBEAT_MS);
	}

	function patchLocalStorage() {
		if (state.lsPatched) return;
		var proto = Storage.prototype;
		var origSet = proto.setItem;
		proto.setItem = function (key, value) {
			origSet.call(this, key, value);
			if (key === SAVE_KEY && !state.seeding && !state.resetting) {
				scheduleSave("setItem");
			}
		};
		state.lsPatched = true;

		global.addEventListener("visibilitychange", function () {
			if (global.document.visibilityState === "hidden") flushSave("visibilitychange");
		});
		global.addEventListener("pagehide", function () {
			flushSave("pagehide");
		});
		startSaveHeartbeat();
	}

	/* ---------- Label / tip translation ---------- */
	function patchLabelText() {
		if (state.labelPatched) return false;
		if (!global.Laya || !global.Laya.Label) return false;
		try {
			var proto = global.Laya.Label.prototype;
			var desc = Object.getOwnPropertyDescriptor(proto, "text");
			if (desc && desc.set && desc.get) {
				var origGet = desc.get;
				var origSet = desc.set;
				Object.defineProperty(proto, "text", {
					configurable: true,
					enumerable: desc.enumerable,
					get: function () {
						return origGet.call(this);
					},
					set: function (v) {
						origSet.call(this, translateText(v));
					}
				});
				state.labelPatched = true;
				logInfo("Patched Laya.Label.text");
				return true;
			}
			// fallback: wrap changeText if present
			if (typeof proto.changeText === "function") {
				var origChange = proto.changeText;
				proto.changeText = function (text) {
					return origChange.call(this, translateText(text));
				};
				state.labelPatched = true;
				logInfo("Patched Laya.Label.changeText");
				return true;
			}
		} catch (e) {
			logWarn("Label patch failed", e);
		}
		return false;
	}

	function watchLabelPatch() {
		var tries = 0;
		var timer = global.setInterval(function () {
			tries++;
			patchLabelText();
			patchMsgTipShow();
			patchItemTipShow();
			if ((state.labelPatched && state.msgTipPatched && state.itemTipPatched) || tries > 80) {
				global.clearInterval(timer);
			}
		}, 250);
	}

	function patchMsgTipShow() {
		if (state.msgTipPatched) return true;
		try {
			var tip = global.mgrTip;
			if (!tip && global.Laya && global.Laya.mgrTip) tip = global.Laya.mgrTip;
			if (!tip || typeof tip.showMsgTip !== "function") return false;
			if (tip.showMsgTip.__gvPatched) {
				state.msgTipPatched = true;
				return true;
			}
			var orig = tip.showMsgTip;
			function wrapped(text, screenPos) {
				return orig.call(this, translateText(text), screenPos);
			}
			wrapped.__gvPatched = true;
			tip.showMsgTip = wrapped;
			state.msgTipPatched = true;
			logInfo("Patched mgrTip.showMsgTip");
			return true;
		} catch (e) {
			logWarn("mgrTip patch failed", e);
		}
		return false;
	}

	function patchItemTipShow() {
		if (state.itemTipPatched) return true;
		try {
			var tip = global.mgrTip;
			if (!tip && global.Laya && global.Laya.mgrTip) tip = global.Laya.mgrTip;
			if (!tip || typeof tip.showItemTip !== "function") return false;
			if (tip.showItemTip.__gvPatched) {
				state.itemTipPatched = true;
				return true;
			}
			var orig = tip.showItemTip;
			function wrapped(itemId, amount, pointStr) {
				var translated =
					pointStr == null || pointStr === "" ? pointStr : translateText(pointStr);
				return orig.call(this, itemId, amount, translated);
			}
			wrapped.__gvPatched = true;
			tip.showItemTip = wrapped;
			state.itemTipPatched = true;
			logInfo("Patched mgrTip.showItemTip");
			return true;
		} catch (e) {
			logWarn("mgrTip.showItemTip patch failed", e);
		}
		return false;
	}

	/* ---------- Reward ads via h5api → GVAdBreak ---------- */
	function shouldStubAds() {
		if (qsAdsOff) return true;
		try {
			var host = String((global.location && global.location.hostname) || "").toLowerCase();
			if (!host || host === "localhost" || host === "127.0.0.1") return true;
			if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
			if (host === "test.game" || host.indexOf(".test.game") >= 0) return true;
		} catch (e) { /* ignore */ }
		return false;
	}

	function runRewardAd(onSuccess, onFail) {
		if (shouldStubAds()) {
			logInfo("GV_AD_BREAK_DONE stub (localhost/ads=0/test.game)");
			if (onSuccess) onSuccess();
			return;
		}
		var fn = global.GVAdBreak;
		if (typeof fn === "function") {
			try {
				logInfo("GV_AD_BREAK_START");
				fn(function () {
					logInfo("GV_AD_BREAK_DONE");
					if (onSuccess) onSuccess();
				});
				return;
			} catch (e) {
				logWarn("GVAdBreak error", e);
				if (onFail) onFail();
				return;
			}
		}
		logWarn("GV_ADBREAK_MISSING → ad fail");
		if (onFail) onFail();
	}

	function buildH5ApiBridge(prev) {
		var bridge = {
			canPlayAd: function (cb) {
				try {
					if (
						prev &&
						typeof prev.canPlayAd === "function" &&
						!shouldStubAds() &&
						typeof global.GVAdBreak !== "function"
					) {
						return prev.canPlayAd(cb);
					}
				} catch (e) { /* ignore */ }
				if (typeof cb === "function") cb({ canPlayAd: true, remain: 99 });
			},
			playAd: function (cb) {
				logInfo("h5api.playAd → GVAdBreak");
				runRewardAd(
					function () {
						/* ULAdv4399MiniGame: 10000=show, 10001=close → grant reward */
						if (typeof cb === "function") {
							try {
								cb({ code: 10000 });
							} catch (e0) {
								logWarn("playAd 10000 handler error", e0);
							}
							global.setTimeout(function () {
								try {
									cb({ code: 10001 });
								} catch (e1) {
									logWarn("playAd 10001 handler error", e1);
								}
							}, 50);
						}
					},
					function () {
						if (typeof cb === "function") {
							try {
								cb({ code: 10002 });
							} catch (e2) {
								logWarn("playAd 10002 handler error", e2);
							}
						}
					}
				);
			}
		};
		if (prev && typeof prev === "object") {
			Object.keys(prev).forEach(function (k) {
				if (bridge[k] == null) {
					try {
						bridge[k] = typeof prev[k] === "function" ? prev[k].bind(prev) : prev[k];
					} catch (e3) {
						bridge[k] = prev[k];
					}
				}
			});
		}
		return bridge;
	}

	function installH5ApiBridge() {
		if (state.h5apiPatched) {
			/* Re-assert bridge if something overwrote window.h5api */
			try {
				var cur = global.h5api;
				if (cur && cur.__gvBridge) return;
			} catch (e) { /* ignore */ }
		}

		var prev = null;
		try {
			prev = global.h5api;
			if (prev && prev.__gvBridge) prev = prev.__gvPrev || null;
		} catch (e0) {
			prev = null;
		}

		var bridge = buildH5ApiBridge(prev);
		bridge.__gvBridge = true;
		bridge.__gvPrev = prev;

		try {
			Object.defineProperty(global, "h5api", {
				configurable: true,
				enumerable: true,
				get: function () {
					return bridge;
				},
				set: function (v) {
					if (v && v.__gvBridge) {
						bridge = v;
						return;
					}
					/* Merge new SDK methods but keep canPlayAd/playAd owned by Arcade */
					prev = v;
					bridge = buildH5ApiBridge(v);
					bridge.__gvBridge = true;
					bridge.__gvPrev = v;
					logInfo("h5api reassigned — Arcade bridge retained");
				}
			});
		} catch (eDef) {
			global.h5api = bridge;
			logWarn("defineProperty h5api failed — plain assign", eDef);
		}

		state.h5apiPatched = true;
		logInfo("Installed h5api → GVAdBreak bridge (locked)");

		/* Keep bridge alive if engine overwrites without setter */
		if (!state.h5apiWatching) {
			state.h5apiWatching = true;
			global.setInterval(function () {
				try {
					var h = global.h5api;
					if (!h || !h.__gvBridge) {
						state.h5apiPatched = false;
						installH5ApiBridge();
					}
				} catch (eW) { /* ignore */ }
			}, 2000);
		}
	}

	/* ---------- Canvas autofit (override score.min.css max-width) ---------- */
	function ensureCanvasFitStyles() {
		if (!global.document || !global.document.head) return;
		if (global.document.getElementById("gv-canvas-fit-styles")) return;
		var css = global.document.createElement("style");
		css.id = "gv-canvas-fit-styles";
		css.textContent =
			"html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#000;}" +
			"canvas{max-width:none!important;max-height:none!important;}";
		global.document.head.appendChild(css);
		logInfo("Injected canvas fit CSS (override score.min.css)");
	}

	function applyLayaFit() {
		var Laya = global.Laya;
		if (!Laya || !Laya.stage || !Laya.Stage) return false;
		try {
			var stage = Laya.stage;
			stage.scaleMode = Laya.Stage.SCALE_SHOWALL || "showall";
			stage.alignH = Laya.Stage.ALIGN_MIDDLE || "middle";
			stage.alignV = Laya.Stage.ALIGN_MIDDLE || "middle";
			if (typeof stage.size === "function" && stage.designWidth && stage.designHeight) {
				stage.size(stage.designWidth, stage.designHeight);
			}
			if (Laya.stage && typeof Laya.stage["_setStageSize"] === "function") {
				/* no-op: private API varies by version */
			}
			if (typeof stage.setScreenSize === "function") {
				var w = (Laya.Browser && Laya.Browser.clientWidth) || global.innerWidth || 0;
				var h = (Laya.Browser && Laya.Browser.clientHeight) || global.innerHeight || 0;
				if (w > 0 && h > 0) stage.setScreenSize(w, h);
			}
			state.canvasFitReady = true;
			burstLayout();
			return true;
		} catch (e) {
			logWarn("applyLayaFit failed", e);
			return false;
		}
	}

	function scheduleLayaFit() {
		if (state.resizeFitTimer) global.clearTimeout(state.resizeFitTimer);
		state.resizeFitTimer = global.setTimeout(function () {
			state.resizeFitTimer = 0;
			applyLayaFit();
		}, 80);
	}

	function watchCanvasFit() {
		if (state.canvasFitWatching) return;
		state.canvasFitWatching = true;
		ensureCanvasFitStyles();

		var tries = 0;
		var timer = global.setInterval(function () {
			tries++;
			if (applyLayaFit() || tries > 120) {
				global.clearInterval(timer);
				if (state.canvasFitReady) logInfo("Laya canvas fit applied (SHOWALL + center)");
			}
		}, 250);

		["resize", "orientationchange", "fullscreenchange"].forEach(function (ev) {
			global.addEventListener(ev, scheduleLayaFit);
		});
		if (global.visualViewport) {
			global.visualViewport.addEventListener("resize", scheduleLayaFit);
			global.visualViewport.addEventListener("scroll", scheduleLayaFit);
		}
	}

	/* ---------- DOM: Gửi điểm + Xóa data ---------- */
	function ensureStyles() {
		if (global.document.getElementById("gv-tool-styles")) return;
		var css = global.document.createElement("style");
		css.id = "gv-tool-styles";
		css.textContent =
			"#gv-action-wrap{position:fixed;z-index:2147483000;pointer-events:none;" +
			"user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;" +
			"display:flex;flex-direction:row;align-items:flex-start;gap:10px;" +
			"transform-origin:top right;}" +
			"#gv-action-wrap[hidden]{display:none!important;}" +
			"#gv-action-wrap button{pointer-events:auto;cursor:pointer;border:0;background:transparent;" +
			"padding:0;margin:0;display:block;" +
			"opacity:.6;transform:scale(.8);transform-origin:top center;" +
			"transition:transform .2s ease,opacity .2s ease;}" +
			"#gv-action-wrap button:hover,#gv-action-wrap button:focus-visible{" +
			"opacity:1;transform:scale(1);}" +
			"#gv-action-wrap img{width:56px;height:auto;pointer-events:none;-webkit-user-drag:none;display:block;}" +
			"#gv-confirm-mask{position:fixed;inset:0;z-index:2147483646;background:rgba(0,0,0,.55);" +
			"display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;}" +
			"#gv-confirm-box{background:#fff;border-radius:12px;max-width:360px;width:100%;padding:18px 16px;" +
			"box-shadow:0 8px 28px rgba(0,0,0,.35);font-family:system-ui,-apple-system,sans-serif;}" +
			"#gv-confirm-box p{margin:0 0 16px;font-size:16px;line-height:1.45;color:#222;text-align:center;}" +
			"#gv-confirm-actions{display:flex;gap:12px;justify-content:center;width:100%;box-sizing:border-box;}" +
			"#gv-confirm-actions button{flex:1;min-width:0;min-height:44px;border:0;border-radius:8px;" +
			"font-size:16px;font-weight:600;cursor:pointer;padding:8px 14px;}" +
			"#gv-confirm-ok{background:#e53935;color:#fff;}" +
			"#gv-confirm-cancel{background:#43a047;color:#fff;}";
		global.document.head.appendChild(css);
	}

	function pauseGameForOverlay() {
		state.overlayPauseDepth = (state.overlayPauseDepth | 0) + 1;
		if (state.overlayPauseDepth !== 1) return;
		try {
			var Laya = global.Laya;
			if (Laya && Laya.timer) {
				var scale = Laya.timer.scale;
				state.savedTimerScale = typeof scale === "number" && scale > 0 ? scale : 1;
				Laya.timer.scale = 0;
			}
			if (Laya && Laya.SoundManager) {
				state.savedMusicMuted = !!Laya.SoundManager.musicMuted;
				state.savedSoundMuted = !!Laya.SoundManager.soundMuted;
				Laya.SoundManager.musicMuted = true;
				Laya.SoundManager.soundMuted = true;
			}
		} catch (e) {
			logWarn("pauseGameForOverlay", e);
		}
	}

	function resumeGameFromOverlay() {
		if ((state.overlayPauseDepth | 0) <= 0) {
			state.overlayPauseDepth = 0;
			return;
		}
		state.overlayPauseDepth -= 1;
		if (state.overlayPauseDepth > 0) return;
		try {
			var Laya = global.Laya;
			if (Laya && Laya.timer) {
				var restore = state.savedTimerScale;
				Laya.timer.scale = typeof restore === "number" && restore > 0 ? restore : 1;
			}
			if (Laya && Laya.SoundManager) {
				Laya.SoundManager.musicMuted = !!state.savedMusicMuted;
				Laya.SoundManager.soundMuted = !!state.savedSoundMuted;
			}
		} catch (e) {
			logWarn("resumeGameFromOverlay", e);
		}
	}

	function isLoadingSceneUrl(url) {
		var s = String(url == null ? "" : url);
		return /loading|splash|boot/i.test(s);
	}

	function setActionButtonsVisible(visible) {
		var wrap = global.document.getElementById("gv-action-wrap");
		if (!wrap) return;
		var show = !!visible;
		if (show === state.uiVisible && wrap.hidden === !show) return;
		state.uiVisible = show;
		if (show) {
			wrap.hidden = false;
			wrap.removeAttribute("hidden");
			burstLayout();
			logInfo("Action buttons shown");
		} else {
			wrap.hidden = true;
			wrap.setAttribute("hidden", "");
		}
	}

	function syncActionButtonsFromSceneUrl(url) {
		if (isLoadingSceneUrl(url)) {
			setActionButtonsVisible(false);
			return;
		}
		setActionButtonsVisible(true);
	}

	function getActiveSceneUrl() {
		try {
			var Laya = global.Laya;
			if (!Laya || !Laya.stage) return "";
			var layer2d = Laya.stage.getChildByName && Laya.stage.getChildByName("Layer2D");
			if (layer2d) {
				var sceneLayer = layer2d.getChildByName && layer2d.getChildByName("Layer2DScene");
				if (sceneLayer && sceneLayer.numChildren > 0) {
					var child = sceneLayer.getChildAt(sceneLayer.numChildren - 1);
					if (child && child.name) return String(child.name);
				}
			}
			if (Laya.scene) {
				var sc = Laya.scene;
				return String(
					(sc.url != null && sc.url) ||
						(sc.name != null && sc.name) ||
						(sc.constructor && sc.constructor.name) ||
						""
				);
			}
		} catch (e) {}
		return "";
	}

	function patchLayaSceneOpenForActions() {
		if (state.sceneOpenPatched) return true;
		var Laya = global.Laya;
		if (!Laya || !Laya.Scene || typeof Laya.Scene.open !== "function") return false;
		var orig = Laya.Scene.open;
		if (orig.__gvActionPatched) {
			state.sceneOpenPatched = true;
			return true;
		}
		function wrapped(url) {
			try {
				syncActionButtonsFromSceneUrl(url);
			} catch (eSync) {}
			return orig.apply(this, arguments);
		}
		wrapped.__gvActionPatched = true;
		Laya.Scene.open = wrapped;
		state.sceneOpenPatched = true;
		logInfo("Laya.Scene.open patched for action visibility");
		return true;
	}

	function watchActionVisibility() {
		patchLayaSceneOpenForActions();
		var tries = 0;
		global.setInterval(function () {
			tries++;
			if (!state.sceneOpenPatched) patchLayaSceneOpenForActions();
			var url = getActiveSceneUrl();
			if (url) {
				syncActionButtonsFromSceneUrl(url);
			} else if (tries > 60 && state.uiReady && !state.uiVisible) {
				var Laya = global.Laya;
				if (Laya && Laya.stage) setActionButtonsVisible(true);
			}
		}, 500);
	}

	function getCanvasRect() {
		var c =
			global.document.querySelector("canvas") ||
			global.document.getElementById("layaCanvas") ||
			global.document.body;
		if (!c || !c.getBoundingClientRect) {
			return { top: 0, left: 0, right: global.innerWidth, bottom: global.innerHeight, width: global.innerWidth, height: global.innerHeight };
		}
		return c.getBoundingClientRect();
	}

	function layoutActions() {
		var wrap = global.document.getElementById("gv-action-wrap");
		if (!wrap || wrap.hidden) return;
		var rect = getCanvasRect();
		var s = Math.max(0.55, Math.min(1.15, (rect.width || global.innerWidth) / 720));
		wrap.style.transform = "scale(" + s + ")";
		wrap.style.top = Math.round(rect.top + 8 * s) + "px";
		wrap.style.left = Math.round(rect.right - 8 * s - wrap.offsetWidth) + "px";
	}

	function burstLayout() {
		var n = 0;
		function tick() {
			layoutActions();
			n++;
			if (n < 24) global.requestAnimationFrame(tick);
		}
		global.requestAnimationFrame(tick);
	}

	function armResumeAfterGvPopup() {
		var done = false;
		function cleanup() {
			global.removeEventListener("focus", onReturn);
			global.document.removeEventListener("visibilitychange", onVisibility);
			global.document.removeEventListener("pointerdown", onReturn, true);
		}
		function onReturn() {
			if (done) return;
			if (global.document && global.document.visibilityState === "hidden") return;
			done = true;
			cleanup();
			resumeGameFromOverlay();
		}
		function onVisibility() {
			if (global.document.visibilityState === "visible") onReturn();
		}
		global.addEventListener("focus", onReturn);
		global.document.addEventListener("visibilitychange", onVisibility);
		// Same-tab Arcade UI: resume on next tap after open (does not steal window focus)
		global.setTimeout(function () {
			if (!done) {
				global.document.addEventListener("pointerdown", onReturn, true);
			}
		}, 400);
	}

	function patchXmldomQuerySelector() {
		if (state.xmldomQsPatched) return false;
		var Poly = global.Parser && global.Parser.DOMParser;
		if (!Poly || Poly === NativeDOMParser) return false;
		try {
			var sample = new Poly().parseFromString("<root><key>x</key></root>", "text/xml");
			if (!sample || typeof sample.querySelector === "function") {
				state.xmldomQsPatched = true;
				return false;
			}
			var proto = Object.getPrototypeOf(sample);
			if (!proto) return false;
			proto.querySelector = function (sel) {
				var tag = String(sel || "").replace(/[^a-zA-Z0-9_:-]/g, "");
				if (!tag || typeof this.getElementsByTagName !== "function") return null;
				var list = this.getElementsByTagName(tag);
				return list && list.length ? list[0] : null;
			};
			proto.querySelectorAll = function (sel) {
				var tag = String(sel || "").replace(/[^a-zA-Z0-9_:-]/g, "");
				if (!tag || typeof this.getElementsByTagName !== "function") return [];
				return this.getElementsByTagName(tag);
			};
			state.xmldomQsPatched = true;
			logInfo("Patched xmldom querySelector for score.min.js");
			return true;
		} catch (e) {
			logWarn("patchXmldomQuerySelector failed", e);
			return false;
		}
	}

	function ensureNativeDOMParser() {
		if (!NativeDOMParser) return false;
		try {
			if (!state.domParserLocked) {
				Object.defineProperty(global, "DOMParser", {
					get: function () {
						return NativeDOMParser;
					},
					set: function () {
						/* Ignore Laya domparserinone overwrite */
					},
					configurable: true
				});
				state.domParserLocked = true;
				state.domParserRestored = true;
				logInfo("Locked native DOMParser (ignore Laya overwrite)");
			}
		} catch (e) {
			try {
				global.DOMParser = NativeDOMParser;
				if (!state.domParserRestored) {
					state.domParserRestored = true;
					logInfo("Restored native DOMParser (fallback assign)");
				}
			} catch (e2) {
				logWarn("ensureNativeDOMParser failed", e2);
			}
		}
		patchXmldomQuerySelector();
		return state.domParserLocked || state.domParserRestored;
	}

	function watchNativeDOMParser() {
		if (state.domParserWatching) return;
		state.domParserWatching = true;
		ensureNativeDOMParser();
		var tries = 0;
		var timer = global.setInterval(function () {
			tries++;
			ensureNativeDOMParser();
			if (tries > 240) {
				global.clearInterval(timer);
			}
		}, 250);
	}

	function muteLocalSaveWebSocket() {
		if (state.wsMuted) return;
		var Orig = global.WebSocket;
		if (typeof Orig !== "function") return;
		state.wsMuted = true;
		function WrappedWebSocket(url, protocols) {
			var u = String(url || "");
			if (/^wss?:\/\/(127\.0\.0\.1|localhost):8081\b/i.test(u)) {
				logInfo("Muted local save WebSocket", u);
				var fake = {
					readyState: 3,
					CLOSE: 3,
					close: function () {},
					send: function () {},
					addEventListener: function () {},
					removeEventListener: function () {}
				};
				Object.defineProperty(fake, "onopen", { set: function () {}, get: function () { return null; } });
				Object.defineProperty(fake, "onclose", { set: function () {}, get: function () { return null; } });
				Object.defineProperty(fake, "onmessage", { set: function () {}, get: function () { return null; } });
				Object.defineProperty(fake, "onerror", {
					set: function (fn) {
						if (typeof fn === "function") {
							global.setTimeout(function () {
								try {
									fn({ type: "error" });
								} catch (eErr) { /* ignore */ }
							}, 0);
						}
					},
					get: function () {
						return null;
					}
				});
				return fake;
			}
			if (protocols !== undefined) return new Orig(url, protocols);
			return new Orig(url);
		}
		WrappedWebSocket.prototype = Orig.prototype;
		WrappedWebSocket.CONNECTING = Orig.CONNECTING;
		WrappedWebSocket.OPEN = Orig.OPEN;
		WrappedWebSocket.CLOSING = Orig.CLOSING;
		WrappedWebSocket.CLOSED = Orig.CLOSED;
		global.WebSocket = WrappedWebSocket;
	}

	function ensureScoreQueryParams() {
		var cred = getCredentials();
		if (!cred.gid) {
			logWarn("ensureScoreQueryParams: no gid");
			return false;
		}
		try {
			var url = new URL(global.location.href);
			var changed = false;
			if (!url.searchParams.get("gid")) {
				url.searchParams.set("gid", String(cred.gid));
				changed = true;
			}
			if (cred.token && !url.searchParams.get("token")) {
				url.searchParams.set("token", String(cred.token));
				changed = true;
			}
			if (changed) {
				global.history.replaceState(null, "", url.toString());
				logInfo("Injected gid/token into location.search for score.min.js", {
					gid: cred.gid,
					hasToken: !!cred.token
				});
			}
			return true;
		} catch (e) {
			logWarn("ensureScoreQueryParams failed", e);
			return !!cred.gid;
		}
	}

	function resolveGVConstructor() {
		if (typeof global.GV === "function") return global.GV;
		return null;
	}

	function sendScore() {
		var info = computeHighScore(getRecord());
		var n = info.TotalScore | 0;
		logInfo("saveScore", info);
		ensureNativeDOMParser();
		ensureScoreQueryParams();
		flushSave("beforeScore");

		var GVc = resolveGVConstructor();
		if (!GVc) {
			logWarn("GV missing — skip saveScore");
			return;
		}

		try {
			new GVc().saveScore(n);
		} catch (e) {
			logWarn("GV.saveScore error", e);
			resumeGameFromOverlay();
			return;
		}

		global.requestAnimationFrame(function () {
			ensureNativeDOMParser();
			pauseGameForOverlay();
			armResumeAfterGvPopup();
			/* Re-lock before user taps Gửi điểm inside GV popup (getuserinfo onload uses DOMParser). */
			global.setTimeout(ensureNativeDOMParser, 0);
			global.setTimeout(ensureNativeDOMParser, 400);
		});
	}

	function closeConfirmMask(mask) {
		if (!mask) return;
		try {
			mask.remove();
		} catch (eRem) {}
		resumeGameFromOverlay();
	}

	/**
	 * @param {{ message: string, onOk?: function(): void }} opts
	 */
	function showConfirm(opts) {
		if (global.document.getElementById("gv-confirm-mask")) return;
		opts = opts || {};
		var message = opts.message || "";
		var onOk = typeof opts.onOk === "function" ? opts.onOk : null;
		ensureStyles();
		var mask = global.document.createElement("div");
		mask.id = "gv-confirm-mask";
		mask.innerHTML =
			'<div id="gv-confirm-box" role="dialog" aria-modal="true">' +
			"<p></p>" +
			'<div id="gv-confirm-actions">' +
			'<button type="button" id="gv-confirm-cancel">Hủy</button>' +
			'<button type="button" id="gv-confirm-ok">OK</button>' +
			"</div></div>";
		mask.querySelector("#gv-confirm-box p").textContent = message;
		global.document.body.appendChild(mask);
		pauseGameForOverlay();

		var closed = false;
		function dismiss(runOk) {
			if (closed) return;
			closed = true;
			closeConfirmMask(mask);
			if (runOk && onOk) {
				try {
					onOk();
				} catch (eOk) {
					logWarn("confirm onOk", eOk);
				}
			}
		}

		mask.querySelector("#gv-confirm-cancel").onclick = function (e) {
			e.preventDefault();
			e.stopPropagation();
			dismiss(false);
		};
		mask.querySelector("#gv-confirm-ok").onclick = function (e) {
			e.preventDefault();
			e.stopPropagation();
			dismiss(true);
		};
		mask.querySelector("#gv-confirm-box").onclick = function (e) {
			e.stopPropagation();
		};
		mask.onclick = function () {
			dismiss(false);
		};
	}

	function showDeleteConfirm() {
		showConfirm({
			message: "Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?",
			onOk: doDeleteAll
		});
	}

	function doDeleteAll() {
		state.resetting = true;
		lsRemove(SAVE_KEY);
		lsRemove("gameObj");
		var cred = getCredentials();
		var finish = function () {
			global.location.reload();
		};
		if (cloudEnabled()) {
			var cleared = defaultMetadata();
			var clearedJson = JSON.stringify(cleared);
			postForm(SAVE_URL, {
				gameId: cred.gid,
				token: cred.token,
				metadata: clearedJson,
				CurrentLevel: 1,
				CurrentStage: 1,
				TotalScore: 0
			})
				.then(finish)
				.catch(finish);
		} else {
			finish();
		}
	}

	function mountActionButtons() {
		if (state.uiReady) return;
		if (!global.document.body) return;
		ensureStyles();
		var wrap = global.document.createElement("div");
		wrap.id = "gv-action-wrap";
		wrap.hidden = true;
		wrap.setAttribute("hidden", "");
		wrap.innerHTML =
			'<button type="button" id="gv-delete-btn" title="Xóa dữ liệu" aria-label="Xóa dữ liệu">' +
			'<img src="' +
			DELETE_IMG +
			'" alt="" width="56" height="56" draggable="false"></button>' +
			'<button type="button" id="gv-send-score-btn" title="Gửi điểm" aria-label="Gửi điểm">' +
			'<img src="' +
			SEND_IMG +
			'" alt="" width="56" height="56" draggable="false"></button>';
		global.document.body.appendChild(wrap);
		wrap.querySelector("#gv-send-score-btn").addEventListener("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			sendScore();
		});
		wrap.querySelector("#gv-delete-btn").addEventListener("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			showDeleteConfirm();
		});
		state.uiReady = true;
		state.uiVisible = false;
		["resize", "orientationchange", "fullscreenchange"].forEach(function (ev) {
			global.addEventListener(ev, burstLayout);
		});
		if (global.visualViewport) {
			global.visualViewport.addEventListener("resize", burstLayout);
			global.visualViewport.addEventListener("scroll", burstLayout);
		}
		global.setInterval(layoutActions, 2000);
		patchLayaSceneOpenForActions();
		watchActionVisibility();
		logInfo("Action buttons mounted hidden (icon-only; show after loading)");
	}

	function watchUiMount() {
		var tries = 0;
		var timer = global.setInterval(function () {
			tries++;
			var hasCanvas = !!global.document.querySelector("canvas");
			if ((hasCanvas && global.document.body) || tries > 60) {
				global.clearInterval(timer);
				mountActionButtons();
			}
		}, 500);
	}

	/* ---------- boot ---------- */
	function afterBootHooks() {
		if (state.hooksReady) return;
		state.hooksReady = true;
		patchLocalStorage();
		installH5ApiBridge();
		watchCanvasFit();
		watchLabelPatch();
		watchUiMount();
		watchNativeDOMParser();
		muteLocalSaveWebSocket();
		logInfo("Hooks armed", MODULE_VERSION);
	}

	function init() {
		logInfo("init", MODULE_VERSION);
		muteLocalSaveWebSocket();
		ensureNativeDOMParser();
		ensureCanvasFitStyles();
		installH5ApiBridge();
		patchLocalStorage();
		watchCanvasFit();
		watchNativeDOMParser();
		migrateHanNamesInSave();

		var bootPromise = loadCloudSave().then(function (r) {
			migrateHanNamesInSave();
			finishReady(r);
			return r;
		});

		var timeoutPromise = new Promise(function (resolve) {
			global.setTimeout(function () {
				migrateHanNamesInSave();
				finishReady({ ok: false, reason: "timeout" });
				resolve({ ok: false, reason: "timeout" });
			}, BOOT_TIMEOUT_MS);
		});

		Promise.race([bootPromise, timeoutPromise]).then(function () {
			afterBootHooks();
		});

		return ready;
	}

	var api = {
		ready: ready,
		init: init,
		version: MODULE_VERSION,
		getStageProgress: getStageProgress,
		getRoleLevel: getRoleLevel,
		computeHighScore: computeHighScore,
		saveCloud: saveCloud,
		flushSave: flushSave,
		translateText: translateText,
		sendScore: sendScore,
		applyLayaFit: applyLayaFit
	};

	global.ArcadeTool = api;
	init();
})(typeof window !== "undefined" ? window : this);
