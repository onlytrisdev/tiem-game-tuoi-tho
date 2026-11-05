/**
 * Arcade — Việt hóa runtime (DB_i18n + DB_plantName).
 * Không sửa text trên ảnh/sprite title_* (user tự edit).
 */
(function (global) {
  'use strict';

  var LANG = 'Vietnamese';
  var FONT = 'Noto Sans, Arial, Helvetica, sans-serif';

  var UI_VI = {
    'btn-free': 'MIỄN PHÍ ',
    'btn-claim': 'NHẬN',
    'btn-claimed': 'ĐÃ NHẬN',
    'plant-level': 'HỘ VỆ',
    'newItem-title': 'CHÚC MỪNG!',
    'NoCoins': 'Không đủ vàng!',
    'NoGems': 'Không đủ gem!',
    'NoSpaceForPlant': 'Hết chỗ trống',
    'TrashTip': 'Kéo Hộ vệ vào đây\nđể tái chế',
    'skillDescs-slowdown': 'Làm chậm kẻ địch 1 giây với xác suất {0}',
    'skillDescs-crit': 'Gây sát thương x2 với xác suất {0}',
    'skillDescs-freeze': 'Đóng băng kẻ địch 1 giây với xác suất {0}',
    'newPlant-title': 'Hộ vệ mới',
    'mission-login-game': 'Đăng nhập game',
    'mission-merge20-flowers': 'Ghép 20 Hộ vệ',
    'mission-win10-times': 'Đánh bại 10 đợt địch',
    'mission-watch3-videos': 'Xem {0} video',
    'mission-ingame-time': 'Online {0} giây',
    'achieveItem-description': 'Sở hữu {0} Hộ vệ cấp {1}',
    'guide-1': 'Chạm để mua Hộ vệ',
    'guide-2': 'Chạm thêm một lần nữa',
    'guide-3': 'Kéo các Hộ vệ để ghép\nvà tăng sức mạnh!',
    'guide-4': 'Chạm để nhận vàng',
    'guide-5': 'Kéo để di chuyển Hộ vệ',
    'guide-6': 'Chạm để mở Hộp!',
    'guide-7': 'Tấn công quân Ô nhiễm!',
    'guide-8': 'Kéo Hộ vệ vào đây để tái chế\nlấy vàng',
    'guideOver': 'Kiếm thêm vàng để mở khóa\nHộ vệ mới',
    'max-angry-time-150': 'Chế độ Cuồng nộ\ntối đa 900 giây',
    'be-lock': 'ĐÃ KHÓA!',
    'congratulation-get': 'Đã mua!',
    'buy-success': 'Mua thành công',
    'skill_des': 'Kỹ năng',
    'plant-Max': 'Bạn đã mở khóa cấp cao nhất.\nHộ vệ mới sẽ có trong bản cập nhật tới!',
    'is-double-now': 'Đã kích hoạt thưởng vàng x2',
    'max-level-cannt-recovery': 'Không thể tái chế\nHộ vệ mạnh nhất',
    'signed': 'Đã nhận',
    'mission-toggle-button': 'Nhiệm vụ ngày',
    'achievement-toggle-button': 'Thành tựu',
    'noMission-tip': 'Đã hoàn thành tất cả\nnhiệm vụ hôm nay',
    'rage-title': 'Cuồng nộ',
    'rage-speedup-tip-1': 'Tốc độ đánh x2',
    'rage-speedup-tip-2': 'Tăng thời gian thêm 30 giây',
    'getReward-title': 'CHÚC MỪNG!',
    'getReward-checkbox': 'Xem video để nhận thưởng x2',
    'bigResult-win-checkbox': 'Xem video để nhận thưởng x2',
    'bigResult-loss-checkbox': 'Nhận thêm Cuồng nộ',
    'bigResult-loss-reborn': 'Chơi lại màn',
    'doubleCoin-des-1': 'Kẻ địch bị hạ sẽ\nrơi vàng x2!',
    'doubleCoin-des-2': 'Thưởng kéo dài 500 giây',
    'coinExchange-title': 'Đổi vàng',
    'coinExchange-des': 'Số lần đổi còn lại hôm nay',
    'main-level': 'Màn',
    'main-task': 'Nhiệm vụ',
    'main-signIn': 'Thưởng hàng ngày',
    'main-roulette': 'Vòng quay',
    'main-rank': 'Xếp hạng',
    'main-double': 'Vàng x2',
    'main-offline': 'Thu thập',
    'main-rage': 'Cuồng nộ',
    'main-shop': 'Cửa hàng',
    'newRecord-title': 'Màn tiếp',
    'newRecord-level': 'Màn',
    'offline-des': 'Thu nhập offline',
    'offline-checkbox': 'Xem video để nhận thưởng x2',
    'vip-title': 'VIP',
    'uav-title': 'Hỗ trợ tiên',
    'roulette-start': 'Bắt đầu',
    'roulette-timeTip': 'Nút QC hồi sau:',
    'signIn-day': 'Ngày {0}',
    'signIn-checked': 'Đã nhận thưởng hôm nay!\nHãy quay lại vào ngày mai.',
    'signIn-checkbox': 'Xem video để nhận thưởng x2',
    'getPlant-nextLevel': 'Sau',
    'getPlant-checkbox': 'Xem video để nhận thưởng x2',
    'payment-shop': 'Hộ vệ',
    'payment-gem': 'Gem',
    'max-exchange': 'Đã hết lượt đổi hôm nay!\nQuay lại vào ngày mai!',
    'exchangeSuccess': 'Bạn đã đổi được {0} vàng',
    'rankUnavailable': 'Sắp ra mắt',
    'main-buy-plant-tip': 'Chạm để mua thêm\nHộ vệ',
    'main-rage-tip': 'Tăng sức tấn công',
    'main-rubbishTip': 'Kéo Hộ vệ vào đây\nđể tái chế',
    'main-rage-tip': 'Tăng sức tấn công',
    'need-to-complete-guide': 'Hãy hoàn thành hướng dẫn!',
    'guide-move-plant': 'Đưa tôi ra\nchiến đấu!',
    'not-supported': 'Sắp ra mắt',
    'exchange-tip': 'Cần mở khóa Hộ vệ cấp 4\nđể dùng tính năng này',
    'coinExchange-max': 'Bạn đã đạt giới hạn đổi tiền hôm nay!',
    'main-vip': 'VIP',
    'payment-successful': 'Thanh toán thành công',
    'payment-failed': 'Thanh toán thất bại',
    'vip-tip': 'Quay lại vào ngày mai!',
    'shopItem-coming-soon': 'Sắp có trong bản cập nhật tới!',
    'signIn-tip': 'Chơi mỗi ngày để nhận thưởng lớn!',
    'fairyGift-tip': 'NHẬN {0} HỘ VỆ ĐỂ\nTĂNG CƯỜNG PHÒNG THỦ',
    'getPlant-previousLevel': 'Trước',
    'btn-get': 'Nhận',
    'btn-ok': 'OK',
    'beCleared-tip': 'Cảm ơn bạn đã bảo vệ Thiên nhiên và mở khóa cấp Hộ vệ cao nhất.\nQuân Ô nhiễm vẫn còn đe dọa — chúng tôi đang tuyển thêm Hộ vệ mạnh hơn!\nHãy chờ bản cập nhật tiếp theo!',
    'vip-price': 'DÙNG THỬ 3 NGÀY MIỄN PHÍ, SAU ĐÓ {0}/TUẦN',
    'vip-des': 'VIP là gói đăng ký tuần giá {0} sau 3 ngày dùng thử. Trong thời gian đăng ký bạn được:\n1. Mở khóa Pháo đài\n2. Nhận miễn phí 30 Gem/ngày\n3. Tắt banner/quảng cáo xen kẽ\n4. Nhận thưởng x3 cho Thu nhập offline, Thưởng ngày và Nhiệm vụ.\nThanh toán qua tài khoản {1}. Tự gia hạn trừ khi hủy trước ít nhất 24 giờ. Bạn có thể quản lý/hủy trong cài đặt tài khoản trên {2}.',
    'guide-unlock-tip': 'Chạm để mở\nô đất mới!',
    'vip-double-tip': 'VIP nhận thưởng x2',
    'offline-double-tip': 'Thu nhập offline được nhân đôi',
    'starterBundles0title': 'Gói khởi đầu',
    'already-subscribed-vip': 'Sản phẩm này đã nằm trong gói VIP của bạn.',
    'already-subscribed': 'Bạn đã mua sản phẩm này.',
    'plantDetail-title': 'Hộ vệ Thiên nhiên',
    'plantDetail-tip': 'Đã mở khóa',
    'roulette-title': 'Vòng quay',
    'ad-tip': 'QC chưa khởi tạo xong',
    'ad-tip-2': 'Tải QC thất bại',
    'policy-label': 'CHÍNH SÁCH BẢO MẬT',
    'and': 'VÀ',
    'service-label': 'ĐIỀU KHOẢN DỊCH VỤ',
    'dailyBonusTip': 'Nhận Thưởng hàng ngày!',
    'taskTip': 'Nhận thưởng Nhiệm vụ!',
    'zoomTip': 'Bạn có thể phóng to/thu nhỏ tại đây!',
    'vip-tip-01': 'Bạn cần đăng ký VIP trước!',
    'unlock-fort-tip': 'Mở khóa Pháo đài để chiến đấu!',
    'notification-title-1': 'Mẹo Hộ vệ 1',
    'notification-content-1': 'Nhận thưởng ngày lúc 17h–23h để được gem x2!',
    'notification-title-2': 'Cần trợ giúp!',
    'notification-content-2': 'Thiên nhiên cần bạn chống lại quân Ô nhiễm!',
    'notification-title-3': 'Mẹo Hộ vệ 2',
    'notification-content-3': 'Thử bố trí Hộ vệ mới và bảo vệ Thiên nhiên!',
    'notification-title-4': 'Xin chào, Chỉ huy!',
    'notification-content-4': 'Các Hộ vệ đang chờ bạn bảo vệ Thiên nhiên!',
    'notification-title-5': 'Rảnh không?',
    'notification-content-5': 'Hộ vệ đã chiến đấu khi bạn vắng mặt! Quay lại nhận thưởng!',
    'notification-title-6': 'Đừng bỏ cuộc!',
    'notification-content-6': 'Phản công! Cho chúng thấy ai mới là chủ!',
    'notification-title-7': 'Quân Ô nhiễm đang hô hào!',
    'notification-content-7': 'Chúng đến! Chúng thấy! Chúng sẽ chiếm Thiên nhiên!!',
    'free-double-daily-tip': 'Thưởng ngày được nhân đôi\nlúc 17h–23h mỗi ngày!',
    'ad-tip-3': 'Không có QC',
    'payment-max-ad-count-tip': 'Quay lại vào ngày mai!',
    'updateAvailable-tip': 'Chỉ huy! Có bản cập nhật trên {0}. Cập nhật ngay để xem gì mới!',
    'updateAvailable-update-now': 'Cập nhật ngay',
    'updateAvailable-next-time': 'Để sau',
    'enjoyNature-title': 'Thích Nature SB?',
    'enjoyNature-tip': 'Cho chúng tôi biết nếu bạn yêu game!',
    'enjoyNature-next-time': 'Để sau',
    'enjoyNature-rate-now': 'Rất thích',
    'btn-double': 'x2',
    'btn-retry': 'Thử lại',
    'enjoyNature-rated': 'Đã đánh giá',
    'compensation-des': 'Cảm ơn bạn là một trong những chiến binh đầu tiên bảo vệ Thiên nhiên.\nCuộc chiến vẫn tiếp tục!',
    'bad-connection': 'Kết nối mạng không ổn định',
    'recovery-tip': 'Không có dữ liệu',
    'btn-recovery': 'Khôi phục',
    'coinBundle-tip': 'Mua {0} vàng',
    'coinBundle-tip2': 'Ưu đãi có hạn\nMua {0} vàng',
    'specialGridBundle-tip': 'Ưu đãi mở khóa Pháo đài',
    'specialGridBundle-tip2': 'Ưu đãi có hạn\nMở khóa Pháo đài',
    'removeAdBundle-tip': 'Tắt banner/QC xen kẽ',
    'removeAdBundle-tip2': 'Ưu đãi có hạn\nTắt banner/QC xen kẽ',
    'offlineBundle-tip': 'Nhân đôi thu nhập offline',
    'bundle-time-tip': 'Ưu đãi kết thúc sau:',
    'bgm': 'Nhạc nền',
    'sfx': 'Hiệu ứng',
    'set-on': 'BẬT',
    'set-off': 'TẮT',
    'set-version': 'Phiên bản:',
    'set-copy': 'Sao chép ID',
    'restore-coin': 'Vàng',
    'restore-gem': 'Gem',
    'restore-vip': 'Gói VIP',
    'restore-vipExpire': 'Hết hạn VIP',
    'restore-removeAd': 'Đã tắt QC',
    'restore-unlockSpecialGrid': 'Đã mở Pháo đài',
    'restore-offlineDouble': 'Thu nhập offline x2',
    'restore-tip': 'Bồi thường:',
    'restore-tip-2': 'Xin lỗi vì sự cố đã gây ra.\nHy vọng bạn tiếp tục thích game.\nHãy nhận phần thưởng này và\nbáo chúng tôi nếu còn vấn đề!',
    'language-cn': '简体中文',
    'language-en': 'English',
    'language-jp': '日本語',
    'language-tc': '繁體中文',
    'language-ru': 'Русский',
    'buff-auto': 'Tự động ghép',
    'buff-rage': 'Tốc độ đánh x1.5',
    'buff-flame': 'Sát thương x1.5',
    'buff-freeze': 'Tỉ lệ đóng băng x2',
    'buff-crit': 'Tỉ lệ chí mạng x2',
    'max-flame-time-150': 'Chế độ Lửa\ntối đa 900 giây',
    'max-freeze-time-150': 'Chế độ Đóng băng\ntối đa 900 giây',
    'max-crit-time-150': 'Chế độ Chí mạng\ntối đa 900 giây',
    'max-auto-time-300': 'Chế độ Tự động\ntối đa 900 giây',
    'main-buff': 'Kỹ năng',
    'language': 'Ngôn ngữ',
    'vip-week': 'tuần',
    'btn-no-thanks': 'Không, cảm ơn!',
    'btn-treble': 'x3',
    'main-treble': 'Vàng x3',
    'is-treble-now': 'Đã kích hoạt thưởng vàng x3',
    'trebleCoin-des-1': 'Kẻ địch bị hạ sẽ\nrơi vàng x3!',
    'trebleCoin-des-2': 'Thưởng kéo dài 500 giây',
    'getReward-checkbox-treble': 'Xem video để nhận thưởng x3',
    'offline-treble-tip': 'Thu nhập offline được nhân ba',
    'vip-treble-tip': 'VIP nhận thưởng x3',
    'trebleCoin-des-1': 'Kẻ địch bị hạ sẽ rơi vàng x3!',
    'free-treble-daily-tip': 'Thưởng ngày được nhân ba\nlúc 17h–23h mỗi ngày!',
    'main-recycle': 'Tái chế',
    'rank-ranking': 'Hạng',
    'rank-icon': 'Icon',
    'rank-name': 'Tên',
    'rank-top': 'Hộ vệ mạnh nhất',
    'guardian-1': 'Cành Non',
    'guardian-2': 'Gỗ Non',
    'guardian-3': 'Ếch Lá',
    'guardian-4': 'Cây Cỏ',
    'guardian-5': 'Mắt Xoáy',
    'guardian-6': 'Tùng Bách',
    'guardian-7': 'Trứng Gỗ',
    'guardian-8': 'Nón Xanh',
    'guardian-9': 'Nón Đỏ',
    'guardian-10': 'Gạc Hươu',
    'guardian-11': 'Mặt Gỗ',
    'guardian-12': 'Đá Núi',
    'guardian-13': 'Cún Xanh',
    'guardian-14': 'Cún Băng',
    'guardian-15': 'Khỉ Lửa',
    'guardian-16': 'Kỳ Nhông',
    'guardian-17': 'Cóc Chanh',
    'guardian-18': 'Lùn Vườn',
    'guardian-19': 'Tinh Linh',
    'guardian-20': 'Tử Đinh Hương',
    'guardian-21': 'Hoa Nhung',
    'guardian-22': 'Hoa Hồng',
    'guardian-23': 'Cúc Họa Mi',
    'guardian-24': 'Teala',
    'guardian-25': 'Cún Thần Tình',
    'guardian-26': 'Thỏ Xanh',
    'guardian-27': 'Củ Cải',
    'guardian-28': 'Lưỡi Cỏ',
    'guardian-29': 'Đậu Cánh',
    'guardian-30': 'Vỏ Cây Non',
    'guardian-31': 'Vật Tổ',
    'guardian-32': 'Sỏi Nhỏ',
    'guardian-33': 'Đầu Đá',
    'guardian-34': 'Đá Cổ',
    'guardian-35': 'Golem',
    'guardian-36': 'Hạt Điên',
    'guardian-37': 'Cú Sức Mạnh',
    'guardian-38': 'SeanHick',
    'guardian-39': 'Gấu Trúc Rác',
    'guardian-40': 'Justin',
    'guardian-41': 'Thủ Lĩnh',
    'guardian-42': 'Sylvid',
    'guardian-43': 'Onidine',
    'guardian-44': 'Zenine',
    'guardian-45': 'Ba Đuôi',
    'guardian-46': 'Gió Hồng',
    'guardian-47': 'Kỳ Lân',
    'guardian-48': 'Bọ Rùa',
    'guardian-49': 'Nữ Hoàng',
    'guardian-50': 'Bọ Cánh Cứng',
    'guardian-51': 'Monna',
    'guardian-52': 'Bông Gòn',
    'guardian-53': 'Trứng Rồng',
    'guardian-54': 'Rồng Con',
    'guardian-55': 'Wyvern Non',
    'guardian-56': 'Rồng',
    'guardian-57': 'Đại Long',
    'guardian-58': 'Pháp Sư Xanh',
    'guardian-59': 'Pháp Sư Đen',
    'guardian-60': 'Siêu Pháp Sư',
    'guardian-61': 'Picasso',
    'guardian-62': 'Chitinus',
    'guardian-63': 'Neptune',
    'guardian-64': 'Siren',
    'guardian-65': 'MK',
    'guardian-66': 'Mèo Thủy Thủ',
    'guardian-67': 'Bạch Dương',
    'guardian-68': 'Bestet',
    'guardian-69': 'Công',
    'guardian-70': 'Tinkerbell',
    'guardian-71': 'Gấu Teddy',
    'guardian-72': 'Gấu Koala',
    'guardian-73': 'Wombat',
    'guardian-74': 'Cáo Cát',
    'guardian-75': 'Thú Mỏ Vịt',
  };

  var PLANT_VI = {
    'guardian-1': 'Cành Non',
    'guardian-2': 'Gỗ Non',
    'guardian-3': 'Ếch Lá',
    'guardian-4': 'Cây Cỏ',
    'guardian-5': 'Mắt Xoáy',
    'guardian-6': 'Tùng Bách',
    'guardian-7': 'Trứng Gỗ',
    'guardian-8': 'Nón Xanh',
    'guardian-9': 'Nón Đỏ',
    'guardian-10': 'Gạc Hươu',
    'guardian-11': 'Mặt Gỗ',
    'guardian-12': 'Đá Núi',
    'guardian-13': 'Cún Xanh',
    'guardian-14': 'Cún Băng',
    'guardian-15': 'Khỉ Lửa',
    'guardian-16': 'Kỳ Nhông',
    'guardian-17': 'Cóc Chanh',
    'guardian-18': 'Lùn Vườn',
    'guardian-19': 'Tinh Linh',
    'guardian-20': 'Tử Đinh Hương',
    'guardian-21': 'Hoa Nhung',
    'guardian-22': 'Hoa Hồng',
    'guardian-23': 'Cúc Họa Mi',
    'guardian-24': 'Teala',
    'guardian-25': 'Cún Thần Tình',
    'guardian-26': 'Thỏ Xanh',
    'guardian-27': 'Củ Cải',
    'guardian-28': 'Lưỡi Cỏ',
    'guardian-29': 'Đậu Cánh',
    'guardian-30': 'Vỏ Cây Non',
    'guardian-31': 'Vật Tổ',
    'guardian-32': 'Sỏi Nhỏ',
    'guardian-33': 'Đầu Đá',
    'guardian-34': 'Đá Cổ',
    'guardian-35': 'Golem',
    'guardian-36': 'Hạt Điên',
    'guardian-37': 'Cú Sức Mạnh',
    'guardian-38': 'SeanHick',
    'guardian-39': 'Gấu Trúc Rác',
    'guardian-40': 'Justin',
    'guardian-41': 'Thủ Lĩnh',
    'guardian-42': 'Sylvid',
    'guardian-43': 'Onidine',
    'guardian-44': 'Zenine',
    'guardian-45': 'Ba Đuôi',
    'guardian-46': 'Gió Hồng',
    'guardian-47': 'Kỳ Lân',
    'guardian-48': 'Bọ Rùa',
    'guardian-49': 'Nữ Hoàng',
    'guardian-50': 'Bọ Cánh Cứng',
    'guardian-51': 'Monna',
    'guardian-52': 'Bông Gòn',
    'guardian-53': 'Trứng Rồng',
    'guardian-54': 'Rồng Con',
    'guardian-55': 'Wyvern Non',
    'guardian-56': 'Rồng',
    'guardian-57': 'Đại Long',
    'guardian-58': 'Pháp Sư Xanh',
    'guardian-59': 'Pháp Sư Đen',
    'guardian-60': 'Siêu Pháp Sư',
    'guardian-61': 'Picasso',
    'guardian-62': 'Chitinus',
    'guardian-63': 'Neptune',
    'guardian-64': 'Siren',
    'guardian-65': 'MK',
    'guardian-66': 'Mèo Thủy Thủ',
    'guardian-67': 'Bạch Dương',
    'guardian-68': 'Bestet',
    'guardian-69': 'Công',
    'guardian-70': 'Tinkerbell',
    'guardian-71': 'Gấu Teddy',
    'guardian-72': 'Gấu Koala',
    'guardian-73': 'Wombat',
    'guardian-74': 'Cáo Cát',
    'guardian-75': 'Thú Mỏ Vịt',
  };

  var patched = false;
  var fontPatched = false;

  function injectMap(dataObj, map) {
    if (!dataObj || !map) return;
    Object.keys(map).forEach(function (key) {
      if (dataObj[key] && typeof dataObj[key] === 'object') {
        dataObj[key][LANG] = map[key];
      }
    });
  }

  function injectPlantArray(arr, map) {
    if (!arr || !arr.length) return;
    for (var i = 0; i < arr.length; i++) {
      var row = arr[i];
      if (!row || !row.Key) continue;
      if (map[row.Key]) {
        row[LANG] = map[row.Key];
      }
    }
  }

  function forceLanguage() {
    try {
      if (cc.Mgr && cc.Mgr.Config) {
        cc.Mgr.Config.language = LANG;
      }
      if (cc.Mgr && cc.Mgr.game) {
        cc.Mgr.game.setLanguageManually = LANG;
      }
    } catch (e) {}
  }


  /** Chỉ bubble / tip hẹp — không wrap panel rộng (UAV, shop, checkbox…). */
  var NARROW_WRAP_KEYS = {
    'guide-1': 1,
    'guide-2': 1,
    'guide-3': 1,
    'guide-4': 1,
    'guide-5': 1,
    'guide-6': 1,
    'guide-7': 1,
    'guide-8': 1,
    'guideOver': 1,
    'guide-move-plant': 1,
    'guide-unlock-tip': 1,
    'TrashTip': 1,
    'main-buy-plant-tip': 1,
    'main-rubbishTip': 1
  };
  var NARROW_WRAP_MAX = 22;

  /**
   * Ngắt dòng theo khoảng trắng — không cắt giữa từ.
   * Giữ nguyên \n đã có sẵn trong chuỗi.
   */
  function wrapVietnameseByWords(text, maxChars) {
    maxChars = maxChars || NARROW_WRAP_MAX;
    if (text == null || text === '') {
      return text;
    }
    text = String(text);
    if (text.length <= maxChars && text.indexOf('\n') < 0) {
      return text;
    }
    var paragraphs = text.split('\n');
    var outLines = [];
    for (var p = 0; p < paragraphs.length; p++) {
      var paragraph = paragraphs[p];
      if (paragraph === '') {
        outLines.push('');
        continue;
      }
      if (paragraph.length <= maxChars) {
        outLines.push(paragraph);
        continue;
      }
      var words = paragraph.split(/\s+/);
      var line = '';
      for (var w = 0; w < words.length; w++) {
        var word = words[w];
        if (!word) {
          continue;
        }
        var candidate = line ? line + ' ' + word : word;
        if (candidate.length > maxChars && line) {
          outLines.push(line);
          line = word;
        } else {
          line = candidate;
        }
      }
      if (line) {
        outLines.push(line);
      }
    }
    return outLines.join('\n');
  }

  function formatTranslation(text, args) {
    var a = text;
    var t = args || [];
    try {
      switch (t.length) {
        case 1: a = a.format(t[0]); break;
        case 2: a = a.format(t[0], t[1]); break;
        case 3: a = a.format(t[0], t[1], t[2]); break;
        case 4: a = a.format(t[0], t[1], t[2], t[3]); break;
        case 5: a = a.format(t[0], t[1], t[2], t[3], t[4]); break;
      }
    } catch (e) {
      /* ignore */
    }
    return a;
  }

  function readTransMapVi(key) {
    try {
      var data = cc.Mgr && cc.Mgr.MapDataMgr && cc.Mgr.MapDataMgr.transMap && cc.Mgr.MapDataMgr.transMap.data;
      if (data && data[key] && data[key][LANG] != null) {
        return data[key][LANG];
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  var translationPatched = false;

  function patchGetTranslation() {
    try {
      if (!cc.Mgr || !cc.Mgr.Utils || !cc.Mgr.Utils.getTranslation) return;
      if (translationPatched && cc.Mgr.Utils.getTranslation.__gvI18n) return;
      var orig = cc.Mgr.Utils.getTranslation.bind(cc.Mgr.Utils);
      var wrapped = function (key, args) {
        forceLanguage();
        var mapped = UI_VI[key];
        if (mapped == null) {
          mapped = readTransMapVi(key);
        }
        if (mapped != null) {
          var a = mapped;
          if (NARROW_WRAP_KEYS[key]) {
            a = wrapVietnameseByWords(a, NARROW_WRAP_MAX);
          }
          return formatTranslation(a, args);
        }
        return orig(key, args);
      };
      wrapped.__gvI18n = true;
      cc.Mgr.Utils.getTranslation = wrapped;
      translationPatched = true;
    } catch (e) {
      console.warn('[ArcadeI18n] patch getTranslation failed', e);
    }
  }

  function patchDictionaries() {
    try {
      var mm = cc.Mgr && cc.Mgr.MapDataMgr;
      if (mm && mm.transMap && mm.transMap.data) {
        injectMap(mm.transMap.data, UI_VI);
      }
    } catch (e) {}
    try {
      // DB_plantName is required as module; plantGetUI uses e("DB_plantName").data
      var req = typeof __require === 'function' ? __require : null;
      if (req) {
        try {
          var pn = req('DB_plantName');
          if (pn && pn.data) injectPlantArray(pn.data, PLANT_VI);
        } catch (e2) {}
        try {
          var di = req('DB_i18n');
          if (di && di.data) {
            // DB_i18n may be JSON string or already decoded via TransMap
          }
        } catch (e3) {}
      }
    } catch (e) {}
  }

  /** Chuỗi chỉ số / format kinh tế (vàng, gem, giá, timer) — giữ BitmapFont. */
  var NUMERIC_RE = /^(?:Lv\.?\s*)?[\d\s.,xX\/:+\-KkMmGgTtPpEeZzYy%]*$/i;
  /** Có dấu / chữ Latin mở rộng kiểu tiếng Việt. */
  var VIET_RE = /[\u00C0-\u024F\u1E00-\u1EFF]/;

  function getLabelString(label) {
    try {
      if (label.string != null) {
        return String(label.string);
      }
    } catch (e) {}
    return '';
  }

  function isNumericLike(str) {
    if (!str || !String(str).trim()) {
      return true;
    }
    return NUMERIC_RE.test(String(str).trim());
  }

  function hasVietnamese(str) {
    return !!(str && VIET_RE.test(String(str)));
  }

  function hasNumEffect(label) {
    try {
      if (!label || !label.node || !label.node.getComponent) {
        return false;
      }
      return !!label.node.getComponent('NumEffect');
    } catch (e) {
      return false;
    }
  }

  /** Khôi phục BitmapFont cho label số (sau khi bị ép system font). */
  function restoreBitmapFont(label) {
    if (!label) return;
    try {
      if (label.useSystemFont) {
        label.useSystemFont = false;
      }
      if (label._isSystemFontUsed) {
        label._isSystemFontUsed = false;
      }
      if (label.__gvOrigFont) {
        label.font = label.__gvOrigFont;
      }
      if (typeof label.setVertsDirty === 'function') {
        label.setVertsDirty();
      }
    } catch (e) {}
  }

  function applySystemFont(label) {
    if (!label) return;
    try {
      if (!label.__gvOrigFont && label.font) {
        label.__gvOrigFont = label.font;
      }
      // Tách khỏi atlas Bernhard — luôn null font trước
      try {
        label.font = null;
      } catch (eFont) {
        /* ignore */
      }
      if (typeof label.useSystemFont !== 'undefined') {
        label.useSystemFont = true;
      }
      if (label._isSystemFontUsed !== undefined) {
        label._isSystemFontUsed = true;
      }
      if (typeof label.fontFamily !== 'undefined') {
        label.fontFamily = FONT;
      }
      if (label._N$fontFamily !== undefined) {
        label._N$fontFamily = FONT;
      }
      if (typeof label.setFontFamily === 'function') {
        label.setFontFamily(FONT);
      }
      if (typeof label._forceUpdateRenderData === 'function') {
        label._forceUpdateRenderData();
      } else if (typeof label.setVertsDirty === 'function') {
        label.setVertsDirty();
      }
    } catch (e) {}
  }

  /**
   * Chỉ Noto Sans khi text có dấu Việt.
   * Số vàng/gem/giá — giữ / restore BitmapFont.
   * Bỏ qua NumEffect.
   */
  function applyFontToLabel(label) {
    if (!label) return;
    if (hasNumEffect(label)) {
      restoreBitmapFont(label);
      return;
    }
    var str = getLabelString(label);
    if (isNumericLike(str) || !hasVietnamese(str)) {
      if (isNumericLike(str)) {
        restoreBitmapFont(label);
      }
      return;
    }
    applySystemFont(label);
  }

  var labelStringPatched = false;

  /** Gốc: mọi gán Label.string có dấu Việt → Noto ngay, không chờ scan 5s. */
  function patchLabelStringSetter() {
    try {
      if (!cc || !cc.Label || !cc.Label.prototype) {
        return false;
      }
      if (labelStringPatched || cc.Label.prototype.__gvStringPatched) {
        labelStringPatched = true;
        return true;
      }
      var proto = cc.Label.prototype;
      var desc = Object.getOwnPropertyDescriptor(proto, 'string');
      if (!desc || typeof desc.set !== 'function') {
        return false;
      }
      var origGet = desc.get;
      var origSet = desc.set;
      Object.defineProperty(proto, 'string', {
        configurable: true,
        enumerable: desc.enumerable !== false,
        get: function () {
          return origGet.call(this);
        },
        set: function (t) {
          origSet.call(this, t);
          try {
            applyFontToLabel(this);
          } catch (e) {
            /* ignore */
          }
        }
      });
      proto.__gvStringPatched = true;
      labelStringPatched = true;
      console.log('[ArcadeI18n] cc.Label.string patched');
      return true;
    } catch (e) {
      console.warn('[ArcadeI18n] patch Label.string failed', e);
      return false;
    }
  }

  function patchFonts() {
    try {
      if (!cc || !cc.director) return;
      var scene = cc.director.getScene();
      if (!scene) return;
      var labels = scene.getComponentsInChildren(cc.Label);
      if (!labels) return;
      for (var i = 0; i < labels.length; i++) {
        applyFontToLabel(labels[i]);
      }
      fontPatched = true;
    } catch (e) {
      console.warn('[ArcadeI18n] patchFonts failed', e);
    }
  }

  function applyFontToNodeTree(node) {
    if (!node || !node.getComponentsInChildren) return;
    try {
      var labels = node.getComponentsInChildren(cc.Label);
      if (!labels) return;
      for (var i = 0; i < labels.length; i++) {
        applyFontToLabel(labels[i]);
      }
    } catch (e) {
      /* ignore */
    }
  }

  function getCompClass(name) {
    try {
      if (cc && cc.js && typeof cc.js.getClassByName === 'function') {
        var cls = cc.js.getClassByName(name);
        if (cls) return cls;
      }
    } catch (e) {
      /* ignore */
    }
    try {
      if (typeof __require === 'function') {
        return __require(name);
      }
    } catch (e2) {
      /* ignore */
    }
    return null;
  }

  function wrapProtoMethod(Cls, methodName, afterFn) {
    if (!Cls || !Cls.prototype || typeof Cls.prototype[methodName] !== 'function') {
      return false;
    }
    var flag = '__gvFont_' + methodName;
    if (Cls.prototype[methodName][flag]) {
      return true;
    }
    var orig = Cls.prototype[methodName];
    Cls.prototype[methodName] = function () {
      var result = orig.apply(this, arguments);
      try {
        afterFn(this);
      } catch (e) {
        /* ignore */
      }
      return result;
    };
    Cls.prototype[methodName][flag] = true;
    return true;
  }

  var promptHooked = false;
  var plantGetHooked = false;
  var uiHooksDone = {};

  /** Tên Hộ vệ trên plantGetUI — nền bubble sáng, cần màu chữ đậm. */
  var PLANT_NAME_COLOR = { r: 55, g: 30, b: 10, a: 255 };

  function stylePlantNameLabel(label) {
    if (!label) return;
    try {
      applyFontToLabel(label);
      var c = PLANT_NAME_COLOR;
      if (typeof cc !== 'undefined' && cc.color) {
        var col = cc.color(c.r, c.g, c.b, c.a);
        if (label.node) {
          label.node.color = col;
        }
        if (typeof label.color !== 'undefined') {
          label.color = col;
        }
      }
    } catch (e) {
      /* ignore */
    }
  }

  function patchPlantGetUi() {
    try {
      if (plantGetHooked) return true;
      var Cls = getCompClass('plantGetUI');
      if (!Cls || !Cls.prototype || typeof Cls.prototype.showUI !== 'function') {
        return false;
      }
      if (Cls.prototype.showUI.__gvNameStyled) {
        plantGetHooked = true;
        return true;
      }
      var origShowUI = Cls.prototype.showUI;
      Cls.prototype.showUI = function () {
        var result = origShowUI.apply(this, arguments);
        try {
          if (this.nameLabel) {
            stylePlantNameLabel(this.nameLabel);
            var self = this;
            setTimeout(function () {
              stylePlantNameLabel(self.nameLabel);
            }, 50);
            setTimeout(function () {
              stylePlantNameLabel(self.nameLabel);
            }, 400);
          }
          if (this.node) {
            applyFontToNodeTree(this.node);
          }
        } catch (eStyle) {
          /* ignore */
        }
        return result;
      };
      Cls.prototype.showUI.__gvNameStyled = true;
      plantGetHooked = true;
      return true;
    } catch (e) {
      return false;
    }
  }

  function patchPromptUi() {
    try {
      if (promptHooked) return true;
      var Cls = getCompClass('promptUI');
      if (!Cls || !Cls.prototype || typeof Cls.prototype.showDes !== 'function') {
        return false;
      }
      if (Cls.prototype.showDes.__gvFontWrapped) {
        promptHooked = true;
        return true;
      }
      var origShowDes = Cls.prototype.showDes;
      Cls.prototype.showDes = function (e, t) {
        var result = origShowDes.apply(this, arguments);
        try {
          if (this.desLbl) {
            applyFontToLabel(this.desLbl);
          }
        } catch (eFont) {
          /* ignore */
        }
        return result;
      };
      Cls.prototype.showDes.__gvFontWrapped = true;
      promptHooked = true;
      return true;
    } catch (e) {
      return false;
    }
  }

  function patchShowPrompt() {
    try {
      if (!cc.Mgr || !cc.Mgr.UIMgr || typeof cc.Mgr.UIMgr.showPrompt !== 'function') {
        return false;
      }
      if (cc.Mgr.UIMgr.showPrompt.__gvFontWrapped) {
        return true;
      }
      var orig = cc.Mgr.UIMgr.showPrompt.bind(cc.Mgr.UIMgr);
      cc.Mgr.UIMgr.showPrompt = function (msg, iconType, parent) {
        var result = orig(msg, iconType, parent);
        var self = cc.Mgr.UIMgr;
        var tries = 0;
        var timer = setInterval(function () {
          tries++;
          try {
            if (self.currentTip) {
              applyFontToNodeTree(self.currentTip);
              var prompt = self.currentTip.getComponent && self.currentTip.getComponent('promptUI');
              if (prompt && prompt.desLbl) {
                applyFontToLabel(prompt.desLbl);
              }
              clearInterval(timer);
              return;
            }
          } catch (e) {
            /* ignore */
          }
          if (tries > 40) {
            clearInterval(timer);
          }
        }, 50);
        return result;
      };
      cc.Mgr.UIMgr.showPrompt.__gvFontWrapped = true;
      return true;
    } catch (e) {
      return false;
    }
  }

  function restoreTurnTableNumeric(comp) {
    if (!comp) return;
    try {
      var lists = [comp.lblList, comp.lblList_ru];
      for (var L = 0; L < lists.length; L++) {
        var arr = lists[L];
        if (!arr) continue;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]) {
            restoreBitmapFont(arr[i]);
          }
        }
      }
      if (comp.gemLbl) restoreBitmapFont(comp.gemLbl);
      if (comp.gemLabel) restoreBitmapFont(comp.gemLabel);
    } catch (e) {
      /* ignore */
    }
  }

  function applyFontToNodeTreeForce(root) {
    if (!root) return;
    try {
      var labels = root.getComponentsInChildren(cc.Label);
      for (var i = 0; i < labels.length; i++) {
        if (hasNumEffect(labels[i])) {
          restoreBitmapFont(labels[i]);
          continue;
        }
        var str = getLabelString(labels[i]);
        if (isNumericLike(str)) {
          restoreBitmapFont(labels[i]);
          continue;
        }
        // Force Noto cho mọi label chữ (kể cả không dấu) — tránh hộp đen BitmapFont
        applySystemFont(labels[i]);
      }
    } catch (e) {
      /* ignore */
    }
  }

  function scheduleForceFont(node) {
    if (!node) return;
    applyFontToNodeTreeForce(node);
    setTimeout(function () {
      applyFontToNodeTreeForce(node);
    }, 100);
    setTimeout(function () {
      applyFontToNodeTreeForce(node);
    }, 300);
  }

  function patchExtraUiFonts() {
    var specs = [
      { name: 'UnlockTip', methods: ['start'] },
      { name: 'tipMoveAttack', methods: ['showtipMoveAttack'] },
      { name: 'assetGetUI', methods: ['showUI'] },
      { name: 'newRecordUI', methods: ['showUI'], forceAll: true },
      { name: 'exchangeCoinUI', methods: ['onLoad', 'showUI', 'coinNum', 'start'] },
      { name: 'turnTableUI', methods: ['showUI', 'refreshPanel', 'setBlockInfo'] }
    ];
    for (var s = 0; s < specs.length; s++) {
      var spec = specs[s];
      var Cls = getCompClass(spec.name);
      if (!Cls) continue;
      for (var m = 0; m < spec.methods.length; m++) {
        var method = spec.methods[m];
        var key = spec.name + '.' + method;
        if (uiHooksDone[key]) continue;
        var ok = wrapProtoMethod(Cls, method, function (self) {
          if (self && self.node) {
            if (spec.forceAll) {
              scheduleForceFont(self.node);
            } else {
              applyFontToNodeTree(self.node);
            }
          }
          if (spec.name === 'turnTableUI') {
            restoreTurnTableNumeric(self);
          }
          if (spec.name === 'plantGetUI' && self.nameLabel) {
            stylePlantNameLabel(self.nameLabel);
          }
        });
        if (ok) {
          uiHooksDone[key] = true;
        }
      }
    }
  }

  function findGuidesComponents() {
    var list = [];
    try {
      var scene = cc.director.getScene();
      if (!scene) return list;
      var Cls = getCompClass('Guides');
      if (Cls) {
        list = scene.getComponentsInChildren(Cls) || [];
      }
      if ((!list || !list.length) && typeof scene.getComponentsInChildren === 'function') {
        try {
          var byName = scene.getComponentsInChildren('Guides');
          if (byName && byName.length) {
            list = byName;
          }
        } catch (e2) {
          /* ignore */
        }
      }
    } catch (e) {
      /* ignore */
    }
    return list || [];
  }

  function refreshGuideLabels() {
    try {
      var guides = findGuidesComponents();
      for (var g = 0; g < guides.length; g++) {
        var comp = guides[g];
        if (!comp || !comp.guideLbls) {
          continue;
        }
        for (var t = 2; t < 6 && t < comp.guideLbls.length; t++) {
          var key = 'guide-' + (t + 1);
          if (comp.guideLbls[t] && UI_VI[key]) {
            var text = UI_VI[key];
            if (NARROW_WRAP_KEYS[key]) {
              text = wrapVietnameseByWords(text, NARROW_WRAP_MAX);
            }
            comp.guideLbls[t].string = text;
            applyFontToLabel(comp.guideLbls[t]);
          }
        }
      }
    } catch (e) {
      /* ignore */
    }
  }

  function apply() {
    if (!global.cc || !cc.Mgr) return false;
    forceLanguage();
    patchDictionaries();
    patchGetTranslation();
    patchLabelStringSetter();
    patchPromptUi();
    patchShowPrompt();
    patchPlantGetUi();
    patchExtraUiFonts();
    patchFonts();
    refreshGuideLabels();
    if (!patched) {
      console.log('[ArcadeI18n] Vietnamese applied (selective font + word wrap)');
    }
    patched = true;
    return true;
  }

  function start() {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      // Patch Label.string sớm khi cc.Label có mặt (trước/cùng Mgr)
      try {
        if (global.cc && cc.Label) {
          patchLabelStringSetter();
        }
      } catch (e) {
        /* ignore */
      }
      if (apply() || tries > 120) {
        clearInterval(timer);
        setInterval(function () {
          if (patched) {
            patchLabelStringSetter();
            patchPromptUi();
            patchShowPrompt();
            patchPlantGetUi();
            patchExtraUiFonts();
            patchFonts();
            refreshGuideLabels();
          }
        }, 5000);
      }
    }, 500);
  }

  global.ArcadeI18n = {
    LANG: LANG,
    apply: apply,
    start: start,
    UI_VI: UI_VI,
    PLANT_VI: PLANT_VI,
    wrapVietnameseByWords: wrapVietnameseByWords,
    applyFontToLabel: applyFontToLabel
  };
})(window);
