(function (root) {
  "use strict";
  // Adobe Animate exported many English/Russian labels as vector paths, not Text nodes.
  // Localize the actual movieclip symbols so every newly opened screen stays Vietnamese.
  root.ArcadeVietnameseUI = function (lib) {
    if (!lib || lib.__gvTranslated) return;
    lib.__gvTranslated = true;
    var cjs = root.createjs;
    function text(s, x, y, size, color, width, multiline) {
      var node = new cjs.Text(s, "bold " + size + "px Arial", color || "#FFFFFF");
      node.textAlign = "center";
      node.textBaseline = multiline ? "top" : "middle";
      node.x = x; node.y = y;
      if (width) { node.lineWidth = width; node.lineHeight = size * 1.36; }
      node.mouseEnabled = false;
      return node;
    }
    function eraseVectors(clip) {
      Object.keys(clip).forEach(function (key) {
        if (/^shape(?:_\d+)?$/.test(key) && clip[key] && "visible" in clip[key]) clip[key].visible = false;
      });
    }
    function override(name, label, opts) {
      var Original = lib[name];
      if (typeof Original !== "function") return;
      opts = opts || {};
      lib[name] = function () {
        var clip = new Original(...arguments);
        if (!opts.keepVectors) eraseVectors(clip);
        if (opts.fill) {
          var cover = new cjs.Shape();
          cover.graphics.beginFill(opts.fill).drawRect(opts.left || 0, opts.top || 0, opts.width, opts.height);
          cover.mouseEnabled = false;
          clip.addChild(cover);
        }
        var t = text(label, opts.cx == null ? 97.5 : opts.cx,
          opts.cy == null ? 16 : opts.cy, opts.font || 13,
          opts.color || "#FFFFFF", opts.lineWidth || 0, opts.multiline);
        clip.addChild(t);
        if (opts.dynamic) {
          clip.addEventListener("tick", function () { t.text = opts.dynamic(clip); });
        }
        return clip;
      };
      lib[name].prototype = Original.prototype;
    }

    // Main menu and difficulty.
    override("title", "TRUY KÍCH", { cx: 174, cy: 20, font: 40, color: "#FFC75E" });
    override("playButton", "CHIẾN ĐẤU", { cx: 75, font: 14 });
    override("shopButton", "NÂNG CẤP", { cx: 75, font: 14 });
    override("achievementsbutton", "THÀNH TÍCH", { cx: 75, font: 14 });
    override("DIFFICULTYtXT", "ĐỘ KHÓ", { cx: 41, cy: 9, font: 14, color: "#FFE788" });
    override("easybutton", "DỄ");
    override("normalbutton", "THƯỜNG");
    override("hardbutton", "KHÓ");

    // Settings and result actions.
    override("mainmenubutton", "MENU CHÍNH");
    override("instructionsbutton", "HƯỚNG DẪN");
    override("restartbutton", "CHƠI LẠI");
    override("creditsbutton", "THÔNG TIN");
    override("audiobutton", "TẮT ÂM", {
      cx: 105, dynamic: function (clip) { return clip.currentFrame === 1 ? "BẬT ÂM" : "TẮT ÂM"; }
    });
    override("fullscreenButton", "TOÀN MÀN HÌNH");
    override("tryagainbutton", "THỬ LẠI", { cx: 61 });
    override("playagainbutton", "CHƠI LẠI", { cx: 61 });
    override("levelcompletebutton", "TIẾP TỤC", { cx: 61 });
    override("morefinishbutton", "THÊM GAME", { cx: 61 });
    override("shopButton2", "NÂNG CẤP", { cx: 61 });

    // Upgrade panels, badges and completion headings.
    override("achTitle", "THÀNH TÍCH", { cx: 55, cy: 9, font: 13, color: "#FFE788" });
    override("upgrTitle", "NÂNG CẤP", { cx: 45, cy: 9, font: 14, color: "#FFE788" });
    override("upgradeButtTitle", "NÂNG CẤP", { cx: 23, cy: 7, font: 10 });
    override("tryAgainTitle", "THẤT BẠI", { cx: 59, cy: 9, font: 14, color: "#FFE788" });
    override("levelCompleteTitle", "CHIẾN THẮNG", { cx: 78, cy: 9, font: 14, color: "#FFE788" });
    override("achUnlockTxt", "MỞ KHÓA THÀNH TÍCH", { cx: 88, cy: 9, font: 12, color: "#FFE788" });
    override("armorTxt", "GIÁP", { cx: 75, cy: 22, font: 14 });
    override("weaponTxt", "VŨ KHÍ", { cx: 86, cy: 23, font: 14 });
    override("MEDKITtXT", "HỒI MÁU", { cx: 80, cy: 22, font: 14 });

    var achievements = [
      "Hạ 10 địch liên tiếp", "Hạ 30 địch liên tiếp",
      "Đạt 1.000 điểm", "Đạt 5.000 điểm", "Đạt 10.000 điểm",
      "Đạt 2 sao", "Đạt 3 sao",
      "Phá đảo mức Dễ", "Phá đảo mức Thường", "Phá đảo mức Khó",
      "Thắng với đầy máu", "Thắng không dùng cứu thương"
    ];
    achievements.forEach(function (label, i) {
      override("a" + (i + 1) + "txt", label, {
        cx: 65, cy: 12, font: 10, lineWidth: 125, multiline: true
      });
    });

    // The Options panel contains the title and aiming-speed captions as outlines.
    var OriginalOptions = lib.optionsTxt;
    if (OriginalOptions) {
      lib.optionsTxt = function () {
        var clip = new OriginalOptions(...arguments);
        var titleMask = new cjs.Shape();
        titleMask.graphics.beginFill("#333333").drawRect(0, 50, 120, 27);
        titleMask.mouseEnabled = false; clip.addChild(titleMask);
        clip.addChild(text("CÀI ĐẶT", 60, 63, 15, "#FFE788"));
        var sliderMask = new cjs.Shape();
        sliderMask.graphics.beginFill("#404040").drawRect(0, 263, 264, 39);
        sliderMask.mouseEnabled = false; clip.addChild(sliderMask);
        clip.addChild(text("Tốc độ xoay / ngắm:", 115, 270, 12));
        clip.addChild(text("chậm", 20, 294, 9, "#DDDDDD"));
        clip.addChild(text("nhanh", 240, 294, 9, "#DDDDDD"));
        return clip;
      };
      lib.optionsTxt.prototype = OriginalOptions.prototype;
    }

    // Instruction screen is entirely vector text; replacement uses actual game keys.
    override("instructionsTxt",
      "DI CHUYỂN: WASD / PHÍM MŨI TÊN\nNGẮM: DI CHUYỂN CHUỘT\nBẮN: CHUỘT TRÁI\nNẠP ĐẠN: R\nTẠM DỪNG: P\nKHÓA / MỞ CHUỘT: L\n\nHạ hết địch để hoàn thành thử thách.\nNâng cấp trang bị để chiến đấu tốt hơn.",
      { cx: 248, cy: 16, font: 15, lineWidth: 480, multiline: true });

    // Fixed on-screen gameplay prompt.
    override("lockTxt", "NHẤP ĐỂ KHÓA CHUỘT", { cx: 100, cy: 12, font: 12 });
  };
})(window);
