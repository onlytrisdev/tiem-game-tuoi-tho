/**
 * Runtime Vietnamese UI fallback for Stickman Kungfu.
 * Translates Label.string / ShowTips when Chinese still appears.
 */
(function (global) {
  'use strict';

  var MAP = {
  "单人模式": "Chơi đơn",
  "对战模式": "Đối kháng",
  "探索模式": "Khám phá",
  "音效": "Âm thanh",
  "音乐": "Nhạc",
  "最高连续击杀:": "Streak cao nhất:",
  "最高连续击杀：": "Streak cao nhất:",
  "最高连续击杀": "Streak cao nhất",
  "上一次比分:": "Tỷ số lần trước:",
  "上一次比分：": "Tỷ số lần trước:",
  "上一次比分": "Tỷ số lần trước",
  "最高分:": "Điểm cao nhất:",
  "最高分：": "Điểm cao nhất:",
  "最高分": "Điểm cao nhất",
  "最佳纪录:": "Kỷ lục tốt nhất:",
  "最佳纪录：": "Kỷ lục tốt nhất:",
  "最佳纪录": "Kỷ lục tốt nhất",
  "开始游戏": "Bắt đầu",
  "再来一局": "Chơi lại",
  "复活": "Hồi sinh",
  "解锁": "Mở khóa",
  "三倍奖励": "Thưởng x3",
  "随机": "Ngẫu nhiên",
  "玩家": "Người chơi",
  "电脑": "Máy",
  "空": "Trống",
  "左手模式": "Tay trái",
  "右手模式": "Tay phải",
  "返回": "Quay lại",
  "确定": "Xác nhận",
  "取消": "Hủy",
  "确认": "Xác nhận",
  "设置": "Cài đặt",
  "暂停": "Tạm dừng",
  "继续": "Tiếp tục",
  "退出": "Thoát",
  "金币": "Vàng",
  "金币不足": "Không đủ vàng",
  "获得": "Nhận được",
  "已解锁": "Đã mở khóa",
  "未解锁": "Chưa mở khóa",
  "试用": "Dùng thử",
  "武器试用结束": "Hết thời gian dùng thử vũ khí",
  "复活并重置位置": "Hồi sinh và đặt lại vị trí",
  "分享视频成功！": "Chia sẻ video thành công!",
  "录屏失败：录屏时长低于3秒": "Ghi hình thất bại: dưới 3 giây",
  "广告异常": "Lỗi quảng cáo",
  "已播放完": "Đã phát xong",
  "播放广告": "Phát quảng cáo",
  "正常加载": "Đang tải",
  "4399玩家": "Người chơi",
  "4399平台": "Nền tảng",
  "复活信息": "Thông tin hồi sinh",
  "加载中": "Đang tải",
  "请稍候": "Vui lòng chờ",
  "成功": "Thành công",
  "失败": "Thất bại",
  "提示": "Gợi ý",
  "皮肤": "Trang phục",
  "武器": "Vũ khí",
  "地图": "Bản đồ",
  "下一关": "Màn tiếp",
  "上一关": "Màn trước",
  "关卡": "Màn chơi",
  "分数": "Điểm",
  "击杀": "Hạ gục",
  "连杀": "Chuỗi hạ",
  "胜利": "Thắng",
  "失败！": "Thua!",
  "你赢了": "Bạn thắng",
  "你输了": "Bạn thua",
  "平局": "Hòa",
  "重新开始": "Bắt đầu lại",
  "返回主页": "Về menu",
  "主页": "Menu",
  "商店": "Cửa hàng",
  "免费": "Miễn phí",
  "看视频": "Xem video",
  "观看视频": "Xem video",
  "领取奖励": "Nhận thưởng",
  "双倍金币": "Vàng x2",
  "三倍金币": "Vàng x3",
  "满血": "Đầy máu",
  "护盾": "Khiên",
  "技能": "Kỹ năng",
  "大招": "Chiêu đặc biệt",
  "生命值": "Máu",
  "攻击力": "Tấn công",
  "已拥有": "Đã sở hữu",
  "购买": "Mua",
  "选择": "Chọn",
  "使用": "Dùng",
  "装备": "Trang bị",
  "卸下": "Tháo",
  "颜色": "Màu",
  "自定义": "Tùy chỉnh",
  "描边": "Viền",
  "同意": "Đồng ý",
  "不同意": "Không đồng ý",
  "用户协议": "Thỏa thuận người dùng",
  "隐私政策": "Chính sách bảo mật",
  "签到": "Điểm danh",
  "已签到": "Đã điểm danh",
  "领取": "Nhận",
  "关闭": "Đóng",
  "打开": "Mở",
  "音量": "Âm lượng",
  "震动": "Rung",
  "开": "Bật",
  "关": "Tắt",
  "是": "Có",
  "否": "Không",
  "新手引导": "Hướng dẫn",
  "跳过": "Bỏ qua",
  "下一步": "Tiếp",
  "完成": "Hoàn thành",
  "网络异常": "Lỗi mạng",
  "请重试": "Thử lại",
  "暂无": "Chưa có",
  "更多游戏": "Thêm game",
  "分享": "Chia sẻ",
  "邀请好友": "Mời bạn",
  "排行榜": "BXH",
  "我的战绩": "Thành tích",
  "连续击杀": "Chuỗi hạ",
  "最高连杀": "Chuỗi hạ cao nhất",
  "当前": "Hiện tại",
  "历史最高": "Cao nhất",
  "挑战": "Thách đấu",
  "匹配中": "Đang ghép",
  "准备": "Sẵn sàng",
  "开始": "Bắt đầu",
  "结束": "Kết thúc",
  "游戏结束": "Hết trận",
  "本局金币": "Vàng trận này",
  "获得金币": "Nhận vàng",
  "已获得": "Đã nhận",
  "点击继续": "Chạm để tiếp tục",
  "点击屏幕继续": "Chạm màn hình để tiếp tục",
  "加载失败": "Tải thất bại",
  "资源加载中": "Đang tải tài nguyên",
  "请观看完整视频": "Hãy xem hết video",
  "视频播放完成！": "Đã xem xong video!",
  "视频播放失败！": "Xem video thất bại!",
  "广告加载中,请稍后": "Đang tải QC, vui lòng chờ",
  "正常播放结束，可以下发游戏奖励": "QC xong, nhận thưởng",
  "请求广告过于频繁，请稍后再试": "Yêu cầu QC quá nhanh; thử lại sau",
  "Tần suất yêu cầu quảng cáo quá cao; vui lòng thử lại sau": "Tần suất yêu cầu quảng cáo quá cao; vui lòng thử lại sau"
};

  function translate(s) {
    if (s == null) return s;
    var str = String(s);
    if (!str) return str;
    if (Object.prototype.hasOwnProperty.call(MAP, str)) return MAP[str];
    // Prefix/suffix patterns like "最高连续击杀:0"
    var keys = Object.keys(MAP).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      var zh = keys[i];
      if (str.indexOf(zh) >= 0) {
        str = str.split(zh).join(MAP[zh]);
      }
    }
    return str;
  }

  function patchTipsManager() {
    try {
      if (typeof global.__require !== 'function') return false;
      var mod = global.__require('TipsManager');
      var tm = mod && (mod.tipsManager || (mod.default && mod.default.tipsManager));
      if (!tm || typeof tm.ShowTips !== 'function' || tm.__gvI18n) return !!tm;
      var orig = tm.ShowTips.bind(tm);
      tm.ShowTips = function (msg, a, b) {
        return orig(translate(msg), a, b);
      };
      tm.__gvI18n = true;
      console.log('GV_I18N_TIPS');
      return true;
    } catch (e) {
      return false;
    }
  }

  function patchLabel() {
    try {
      if (typeof cc === 'undefined' || !cc.Label) return false;
      var proto = cc.Label.prototype;
      if (proto.__gvI18n) return true;
      var desc = Object.getOwnPropertyDescriptor(proto, 'string');
      if (desc && desc.set && desc.get) {
        var oldGet = desc.get;
        var oldSet = desc.set;
        Object.defineProperty(proto, 'string', {
          configurable: true,
          enumerable: desc.enumerable,
          get: function () { return oldGet.call(this); },
          set: function (v) { oldSet.call(this, translate(v)); }
        });
      } else {
        // Fallback: wrap onEnable scan
      }
      proto.__gvI18n = true;
      console.log('GV_I18N_LABEL');
      return true;
    } catch (e) {
      return false;
    }
  }

  function start() {
    var tries = 0;
    function tick() {
      tries++;
      var a = patchTipsManager();
      var b = patchLabel();
      if ((!a || !b) && tries < 300) setTimeout(tick, 100);
    }
    tick();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  global.ArcadeI18n = { translate: translate, MAP: MAP };
})(typeof window !== 'undefined' ? window : this);

(function(){var M=window.ArcadeI18n&&window.ArcadeI18n.MAP;if(!M)return;var E={"广告播放成功，复活并重置位置":"QC thành công, hồi sinh và đặt lại vị trí","广告播放失败，复活失败":"QC thất bại, không hồi sinh được","暂无合适广告，请稍后再试":"Chưa có QC phù hợp, thử lại sau","暂停中，请先取消暂停":"Đang tạm dừng, hãy hủy tạm dừng trước","视频播放完成，获得三倍奖励":"Xem video xong, nhận thưởng x3","视频没有播放完，获得三倍奖励失败":"Chưa xem hết video, không nhận thưởng x3","只有单人模式和冒险模式才会获得金币":"Chỉ chế độ Chơi đơn và Khám phá mới nhận vàng","广告播放成功，恢复100%血量":"QC thành công, hồi phục 100% máu","广告播放失败，恢复血量失败":"QC thất bại, không hồi máu được","广告播放成功，抵挡下次伤害":"QC thành công, chặn đòn kế tiếp","广告播放失败，护盾获取失败":"QC thất bại, không nhận khiên","广告播放成功，施放大招":"QC thành công, dùng chiêu đặc biệt","广告播放失败，施放大招失败":"QC thất bại, không dùng được chiêu","已解锁过该武器":"Đã mở khóa vũ khí này","视频播放完成，解锁武器":"Xem video xong, mở khóa vũ khí","视频没有播放完，解锁武器失败":"Chưa xem hết video, không mở khóa vũ khí","获得一次护盾":"Nhận được một lần khiên","恢复血量":"Hồi máu","右边伤害增加":"Tăng sát thương bên phải","左边伤害增加":"Tăng sát thương bên trái","QC thành công, hồi sinh và đặt lại vị trí":"QC thành công, hồi sinh và đặt lại vị trí","QC thất bại, không hồi sinh được":"QC thất bại, không hồi sinh được","Chưa có QC phù hợp, thử lại sau":"Chưa có QC phù hợp, thử lại sau","Đang tạm dừng, hãy hủy tạm dừng trước":"Đang tạm dừng, hãy hủy tạm dừng trước"};Object.keys(E).forEach(function(k){M[k]=E[k];});})();

/* __GV_UI_MAP_EXT__ */
(function () {
  var M = window.ArcadeI18n && window.ArcadeI18n.MAP;
  if (!M) return;
  var E = {
  "不了，谢谢": "Không, cảm ơn",
  "Dùng thử一次": "Dùng thử",
  "试用一次": "Dùng thử",
  "Vũ khíDùng thử": "Dùng thử vũ khí",
  "武器试用": "Dùng thử vũ khí",
  "可以Dùng thử得Vũ khí不足三个": "Chưa đủ 3 vũ khí để dùng thử",
  "可以试用得武器不足三个": "Chưa đủ 3 vũ khí để dùng thử",
  "再玩一次": "Chơi lại",
  "新手豪华Vũ khí": "Vũ khí tân thủ cao cấp",
  "新手豪华武器": "Vũ khí tân thủ cao cấp",
  "添加到桌面拿Vũ khí": "Thêm ra màn hình để nhận vũ khí",
  "添加到桌面拿武器": "Thêm ra màn hình để nhận vũ khí",
  "Nhận được新Vũ khí": "Nhận vũ khí mới",
  "获得新武器": "Nhận vũ khí mới",
  "音效": "Âm thanh",
  "音乐": "Nhạc",
  "功夫火柴人": "Người que Kungfu",
  "火柴人Chiêu đặc biệt版": "Người que — bản đặc biệt",
  "火柴人大对决": "Người que đại chiến",
  "火柴人特别版": "Người que — bản đặc biệt",
  "运气也Có实力的一部分": "May mắn cũng là một phần thực lực",
  "运气也是实力的一部分": "May mắn cũng là một phần thực lực",
  "Thông tin hồi sinh重置": "Đặt lại thông tin hồi sinh",
  "复活信息重置": "Đặt lại thông tin hồi sinh",
  "Chia sẻ本局": "Chia sẻ trận này",
  "分享本局": "Chia sẻ trận này",
  "回复血量": "Hồi máu",
  "重置Máu": "Đặt lại máu",
  "重置血量": "Đặt lại máu",
  "格挡一次": "Chặn một đòn",
  "Dùng道具": "Dùng vật phẩm",
  "使用道具": "Dùng vật phẩm",
  "Dùng后回复所有血量": "Dùng để hồi đầy máu",
  "使用后回复所有血量": "Dùng để hồi đầy máu",
  "Dùng后抵挡下一次伤害": "Dùng để chặn đòn kế tiếp",
  "使用后抵挡下一次伤害": "Dùng để chặn đòn kế tiếp",
  "一起来战斗吧！": "Cùng chiến đấu nào!",
  "只需一刀！": "Chỉ cần một đòn!",
  "Có鞋子": "Có giày",
  "有鞋子": "Có giày",
  "待会再来拿": "Lát nữa nhận",
  "领  取": "Nhận",
  "领取": "Nhận",
  "算了": "Thôi",
  "特别Cửa hàng": "Cửa hàng đặc biệt",
  "特别商店": "Cửa hàng đặc biệt",
  "新手礼包": "Gói tân thủ",
  "桌面礼包": "Gói màn hình chính",
  "联系客服": "Liên hệ CSKH",
  "客服联系": "Liên hệ CSKH",
  "补足差价": "Bù chênh lệch",
  "温馨Gợi ý": "Gợi ý",
  "温馨提示": "Gợi ý",
  "使  用": "Dùng",
  "使用": "Dùng",
  "攻": "Công",
  "我已阅读": "Tôi đã đọc",
  "Đồng ý并进入游戏": "Đồng ý và vào game",
  "同意并进入游戏": "Đồng ý và vào game",
  "点击查看《Thỏa thuận người dùng》详细内容。": "Chạm để xem chi tiết Thỏa thuận người dùng.",
  "点击查看《Chính sách bảo mật》详细内容。": "Chạm để xem chi tiết Chính sách bảo mật.",
  "点击查看《用户协议》详细内容。": "Chạm để xem chi tiết Thỏa thuận người dùng.",
  "点击查看《隐私政策》详细内容。": "Chạm để xem chi tiết Chính sách bảo mật.",
  "Thoát游戏1": "Thoát game 1",
  "Thoát游戏2": "Thoát game 2",
  "Thoát游戏3": "Thoát game 3",
  "Thoát游戏4": "Thoát game 4",
  "退出游戏1": "Thoát game 1",
  "退出游戏2": "Thoát game 2",
  "退出游戏3": "Thoát game 3",
  "退出游戏4": "Thoát game 4",
  "录制中": "Đang ghi",
  "录制": "Ghi hình",
  "未创建": "Chưa tạo",
  "已创建": "Đã tạo",
  "已经点击了一次": "Đã chạm một lần",
  "钩锁": "Móc xích",
  "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。": "Chơi game lành mạnh, từ chối bản lậu. Tự bảo vệ, cảnh giác lừa đảo. Chơi vừa phải tốt cho não, nghiện game hại sức. Sắp xếp thời gian hợp lý, tận hưởng cuộc sống.",
  "大剑": "Kiếm lớn",
  "大锤": "Búa lớn",
  "手枪": "Súng lục",
  "法杖": "Trượng phép",
  "链锤": "Búa xích",
  "长弓": "Cung dài",
  "回旋镖": "Boomerang",
  "拳套": "Găng tay",
  "冰淇淋": "Kem",
  "鞋子": "Giày",
  "短剑": "Kiếm ngắn",
  "吉他": "Guitar",
  "武士刀": "Katana",
  "炸弹": "Bom",
  "传送枪": "Súng dịch chuyển",
  "镰刀": "Lưỡi hái",
  "圆锯": "Cưa đĩa",
  "双刃斧": "Rìu hai lưỡi",
  "能量长矛": "Thương năng lượng",
  "狙击枪": "Súng bắn tỉa",
  "盾牌": "Khiên",
  "金属手套": "Găng kim loại",
  "长枪": "Thương dài",
  "光剑": "Kiếm ánh sáng",
  "火箭筒": "Ống phóng tên lửa",
  "稿": "Cuốc",
  "手里剑": "Shuriken",
  "钢铁手腕": "Cổ tay thép",
  "画笔": "Cọ vẽ",
  "战斧": "Rìu chiến",
  "加农炮": "Pháo",
  "塔罗牌": "Bài Tarot",
  "指挥棒": "Đũa chỉ huy",
  "药水": "Thuốc",
  "棒棒糖": "Kẹo mút",
  "琴": "Đàn",
  "弩": "Nỏ",
  "提灯": "Đèn lồng",
  "飞镖": "Phi tiêu",
  "大于": "Lớn hơn",
  "小于": "Nhỏ hơn",
  "加载错误": "Lỗi tải",
  "判断图标": "Kiểm tra icon"
};
  Object.keys(E).forEach(function (k) { M[k] = E[k]; });
})();
