/**
 * Arcade i18n — dịch Label Trung → Việt, bật system font Arial cho dấu.
 */
(function (global) {
  'use strict';

  var dictionary = {
    "播放成功": "Phát OK!",
    "达人捕鱼千炮版": "Cao thủ bắn cá",
    "达人捕鱼千炮版达人捕鱼千炮版": "Cao thủ bắn cá",
    "我要当国王": "Bảo vệ nhà vua 2",
    "魔性模拟国王人生游戏": "Game vua hài hước",
    "太难了!": "Khó quá!",
    "353535太难了!": "Khó quá!",
    "奖励": "Thưởng",
    "特斯拉": "Tesla",
    "开始游戏": "Chơi ngay",
    "观看视频": "Xem QC nhận quà",
    "领取奖励": "Nhận thưởng",
    "分享成功": "Chia sẻ OK",
    "分享失败": "Chia sẻ lỗi",
    "视频中途关闭，播放未完成": "Chưa xem hết QC",
    "视频播放成功": "QC xong",
    "暂无视频，请稍后再试": "Hết QC, thử lại sau",
    "吹口哨": "Huýt sáo"
  };

  function translateText(text) {
    if (!text || typeof text !== 'string') return text;
    if (dictionary[text]) return dictionary[text];
    var next = text;
    Object.keys(dictionary).forEach(function (zh) {
      if (next.indexOf(zh) >= 0) next = next.split(zh).join(dictionary[zh]);
    });
    return next;
  }

  function hasCjk(text) {
    return /[\u4e00-\u9fff]/.test(text || '');
  }

  function applySystemFont(label) {
    try {
      label.useSystemFont = true;
      if (label.fontFamily !== undefined) label.fontFamily = 'Arial';
      if (label._isSystemFontUsed !== undefined) label._isSystemFontUsed = true;
      if (typeof label._updateRenderData === 'function') label._updateRenderData(true);
    } catch (e) {
      /* ignored */
    }
  }

  function translateLabel(label) {
    if (!label || typeof label.string !== 'string') return;
    var translated = translateText(label.string);
    if (translated !== label.string || hasCjk(label.string)) {
      if (translated !== label.string) label.string = translated;
      applySystemFont(label);
    }
  }

  function translateTree(node) {
    if (!node) return;
    if (global.cc && global.cc.Label) {
      translateLabel(node.getComponent && node.getComponent(global.cc.Label));
    }
    var children = node.children || [];
    for (var i = 0; i < children.length; i++) translateTree(children[i]);
  }

  function update() {
    try {
      var scene = global.cc && global.cc.director && global.cc.director.getScene();
      if (scene) translateTree(scene);
    } catch (error) {
      /* i18n must never affect the game loop */
    }
    global.setTimeout(update, 1500);
  }

  global.setTimeout(update, 500);
  global.ArcadeI18n = { dictionary: dictionary, translateText: translateText };
})(window);
