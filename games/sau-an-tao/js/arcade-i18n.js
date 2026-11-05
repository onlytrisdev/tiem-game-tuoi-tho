/**
 * Arcade i18n — TQ → VI (câu liền mạch).
 * Exact match trước; partial chỉ cụm dài; regex mẫu số.
 */
(function (global) {
  'use strict';

  var MAP = {
    "制作关卡": "Tạo màn",
    "制作蛇形切割关卡": "Tạo màn cắt rắn",
    "制作功夫蛙关卡": "Tạo màn ếch",
    "暂不添加": "Để sau",
    "立即添加": "Thêm ngay",
    "一秒极速下载安装!!!": "Tải siêu nhanh!!!",
    "第 0 层": "Tầng 0",
    "皮肤体验": "Dùng thử skin",
    "狠心放弃": "Bỏ cuộc",
    "限时体验  不容错过": "Dùng thử có hạn — đừng bỏ lỡ!",
    "邀请好友": "Mời bạn",
    "请上传关卡让各路英雄挑战吧！": "Upload màn để mọi người thử!",
    "生效日期": "Ngày hiệu lực",
    "升级树洞": "Nâng hốc cây",
    "升级小窝": "Nâng ổ nhỏ",
    "升级篝火": "Nâng lửa trại",
    "升级小树": "Nâng cây nhỏ",
    "传奇母蛇可有概率获得SSS级皮肤！！": "Mẹ rắn huyền thoại — có chance skin SSS!!",
    "点击增加生命，为你的母蛇增加次数！": "Chạm để thêm mạng cho mẹ rắn!",
    "玩法说明": "Hướng dẫn",
    "挑战": "Thách đấu",
    "挑战蛇王试炼可获得体力，提示次数奖励": "Thử luyện Rắn Vương — nhận thể lực + gợi ý",
    "免费": "Miễn phí",
    "继续游戏": "Chơi tiếp",
    "我全都要": "Lấy hết",
    "分享到互动广场": "Share cộng đồng",
    "SSS技能皮肤": "Skin skill SSS",
    "海量金币": "Nhiều vàng",
    "进入": "Vào",
    "网红模式20关解锁": "Phá 20 màn Hot trend để mở",
    "解锁提示": "Mở gợi ý",
    "正在加载数据...": "Đang tải data…",
    "发布到互动广场": "Đăng cộng đồng",
    "用户名用户名": "Tên người chơi",
    "提速": "Tăng tốc",
    "请输入兑换码": "Nhập mã đổi thưởng",
    "您的建议和遇到的问题": "Góp ý / lỗi gặp phải",
    "点我来提提速吧": "Chạm để tăng tốc",
    "自动战斗": "Tự đánh",
    "自动下一关": "Tự màn tiếp",
    "显示路径": "Hiện đường",
    "跳关": "Bỏ màn",
    "模式": "Mode",
    "去看看": "Xem ngay",
    "我的用时：": "Thời gian:",
    "已成功挑战：2次": "Đã phá: 2 lần",
    "第1名": "Hạng 1",
    "完成挑战次数领取皮肤": "Đủ lần thách để nhận skin",
    "跳过": "Bỏ qua",
    "对战中": "Đang đấu",
    "提示：请添加完整的蛇": "Gợi ý: thêm đủ thân rắn",
    "获得": "Nhận",
    "观战中": "Đang xem",
    "匹配中...": "Đang ghép…",
    "获取次数": "Số lần nhận",
    "前去制作": "Đi tạo",
    "观看一次视频可以解锁3次制作关卡体验。": "Xem 1 QC mở 3 lượt tạo màn.",
    "观战": "Xem trận",
    "加入": "Tham gia",
    "创建": "Tạo",
    "创建房间": "Tạo phòng",
    "输入房间号,仅在加入房间时有效": "Nhập mã phòng (khi tham gia)",
    "房间号：": "Mã phòng:",
    "加载资源": "Tải tài nguyên",
    "我的操作": "Thao tác của tôi",
    "我的应用": "Ứng dụng",
    "请适度试玩，还有其他彩蛋关卡及自创玩法敬请体验": "Chơi vừa phải — còn nhiều màn trứng & mode tự tạo!",
    "通过普通玩法            关解锁": "Phá màn Thường để mở",
    "观看#次视频即可获得24小时无限体力!": "Xem # lần QC để nhận thể lực vô hạn 24h!",
    "我们已经收到您的反馈，\n我们会尽快处理": "Đã nhận góp ý!\nSẽ xử lý sớm.",
    "我已仔细阅读并同意隐私政策和服务协议": "Đã đọc và đồng ý chính sách & điều khoản",
    "看提示会被视为认输，你确定要看吗？": "Xem gợi ý = bỏ cuộc. Đồng ý?",
    "挑战自己，和朋友一起突破所有难关！": "Thách thức bản thân cùng bạn bè!",
    "这么简单还看提示，隔壁小孩刚过！": "Dễ vậy mà xem gợi ý? Hàng xóm vừa qua rồi!",
    "盲盒关卡可能会让提示意想不到哦": "Màn hộp bí — gợi ý có thể bất ngờ!",
    "只有第一次添加桌面能获得奖励哦": "Chỉ lần đầu ghim desktop mới có thưởng!",
    "看视频查看今日挑战关卡缩略图": "Xem QC xem trước thử thách hôm nay",
    "现在返回将消耗一次制作次数哦": "Quay lại sẽ mất 1 lượt tạo!",
    "要看一个视频解锁地狱难度吗？": "Xem QC mở Địa ngục?",
    "要看一个视频解锁末日难度吗？": "Xem QC mở Tận thế?",
    "要看一个视频解锁热门关卡吗？": "Xem QC mở màn hot?",
    "要看一个视频解锁搜索关卡吗？": "Xem QC mở tìm màn?",
    "要看一个视频解锁最新关卡吗？": "Xem QC mở màn mới?",
    "观看视屏进入趣味玩法模式：": "Xem QC vào mode vui:",
    "您已反馈过，\n感谢您的参与": "Đã gửi góp ý.\nCảm ơn bạn!",
    "完整观看视频才能获得奖励哦": "Xem hết QC mới nhận thưởng!",
    "新版本下载失败，请稍后再试": "Tải bản mới lỗi, thử lại sau",
    "《贪吃的苹果蛇》官方团队": "Team Rắn Ăn Táo",
    "点击邀请，马上开始挑战！": "Mời bạn — bắt đầu ngay!",
    "分享游戏也可领取视频奖励": "Share game cũng nhận thưởng QC",
    "恭喜你发现新的彩蛋关卡！": "Phát hiện màn trứng phục sinh!",
    "关卡编号:9999999": "Mã màn: 9999999",
    "广告展示失败，请稍后重试": "QC lỗi, thử lại sau",
    "金苹果奖励金币双倍成功！": "Táo vàng — vàng x2!",
    "苹果加载失败，请检查网络": "Tải táo lỗi, kiểm tra mạng",
    "是否要看视频进入匹配模式": "Xem QC vào match?",
    "不！这关卡，我不会过！": "Không! Màn này mình chưa qua!",
    "吃下的体力在过关后增加": "Thể lực ăn được cộng sau khi qua màn",
    "登录失败，请重新登录。": "Đăng nhập lỗi, thử lại.",
    "分享好友即可获得体力!": "Share bạn bè để nhận thể lực!",
    "后续奖励请之后再来领取": "Quay lại sau để nhận thưởng tiếp",
    "看视频获得制作关卡次数": "Xem QC nhận lượt tạo màn",
    "看视频体验明日挑战关卡": "Xem QC mở thử thách mai",
    "是否要看视频解锁此模式": "Xem QC mở mode này?",
    "通过普通玩法20关解锁": "Phá 20 màn Thường để mở!",
    "<通关彩蛋关卡>获得": "<Phá màn trứng>",
    "<主玩法20关>获得": "<Thường 20 màn>",
    "把石头推到毒刺上踏脚": "Đẩy đá lên gai làm bàn đạp",
    "把石头推到锯子上踏脚": "Đẩy đá lên cưa làm bàn đạp",
    "吃一个苹果回到楼梯上": "Ăn 1 táo rồi lên cầu thang",
    "稀有皮肤统统打包带走": "Gói hết skin hiếm!",
    "先继续挑战其他模式吧": "Thử mode khác trước nhé!",
    "已经解锁全部普通皮肤": "Đã mở hết skin thường!",
    "左边拐角留个苹果踏脚": "Góc trái để lại 1 táo đạp",
    "(24小时后清零)": "(Hết hạn sau 24 giờ)",
    "<爬塔20关>获得": "<Leo tháp 20 màn>",
    "把石头推到右边踏脚": "Đẩy đá sang phải làm bàn đạp",
    "把石头推到左边踏脚": "Đẩy đá sang trái làm bàn đạp",
    "当前盲盒随机列表：": "Danh sách hộp bí:",
    "关卡编号：9999": "Mã màn: 9999",
    "获得大量体力和提示": "Nhận nhiều thể lực + gợi ý",
    "看广告获取提示模式": "QC lấy gợi ý",
    "看视频提前解锁关卡": "QC mở màn sớm",
    "留两个苹果用来踏脚": "Để lại 2 táo làm bàn đạp",
    "苹果垫着就可以上去": "Kê táo là lên được",
    "请先通关前面的关卡": "Phải phá màn trước đã!",
    "全部宝箱奖励已领取": "Hết quà rương rồi!",
    "确定要退出匹配吗？": "Thoát match?",
    "商店看视频解锁皮肤": "Shop: QC mở skin",
    "外面留一个苹果踏脚": "Ngoài để lại 1 táo đạp",
    "谢谢参与，没有奖励": "Hết quà lần này!",
    "一个视频 三倍回报": "1 QC → x3 thưởng",
    "已经获得100金币": "Nhận +100 vàng!",
    "用这两颗毒苹果踏脚": "Dùng 2 táo độc làm bàn đạp",
    "(今天即将到期)": "(Sắp hết hạn hôm nay)",
    "(每日0点清零)": "(Reset 0h mỗi ngày)",
    "/蔚蓝回声/场景": "Cảnh: Xanh vọng",
    "<蛇窝>开蛋获取": "<Ổ rắn> nở trứng",
    "<蛇影塔尖>获得": "<Đỉnh tháp>",
    "<限时活动>获得": "<Sự kiện>",
    "<幸运宝箱>获得": "<Rương may mắn>",
    "不要贪吃太多苹果": "Đừng ăn quá nhiều táo",
    "成功次数：999": "Số lần thắng: 999",
    "点击贪吃的苹果蛇": "Chạm Rắn Ăn Táo",
    "关卡还在更新中哦": "Màn đang cập nhật!",
    "观看视频获得奖励": "Xem QC để nhận thưởng",
    "你确定要退出吗？": "Thoát khỏi màn?",
    "你确定要重开吗？": "Chơi lại màn này?",
    "苹果，石块，墙体": "Táo, đá, tường",
    "苹果用来垫着就好": "Dùng táo kê là đủ",
    "请先挑战前面的哦": "Phải chơi màn trước đã!",
    "请先完成今日挑战": "Phải xong thử thách hôm nay!",
    "请先完成前面关卡": "Phải phá màn trước đã!",
    "挑战次数：999": "Số lần thách: 999",
    "已经获得10体力": "Nhận +10 thể lực!",
    "已经获得所有奖励": "Nhận hết quà rồi!",
    "已经解锁全部关卡": "Đã mở hết màn!",
    "已经领取过该奖励": "Đã nhận quà này rồi!",
    "已经领取过奖励了": "Đã nhận quà rồi!",
    "用这两个苹果踏脚": "Dùng 2 táo này làm bàn đạp",
    "用这两颗苹果踏脚": "Dùng 2 táo này làm bàn đạp",
    "用这三个苹果踏脚": "Dùng 3 táo này làm bàn đạp",
    "注意吃苹果的顺序": "Chú ý thứ tự ăn táo",
    "最后再吃这个苹果": "Cuối cùng ăn táo này",
    "作者：admin": "Tác giả: admin",
    "不要急着吃苹果": "Đừng vội ăn táo",
    "不要做个贪吃鬼": "Đừng tham quá!",
    "彩虹门是传送门": "Cổng cầu vồng = dịch chuyển",
    "此皮肤已经拥有": "Đã có skin này!",
    "段位更新时间：": "Cập nhật rank:",
    "段位显示规则：": "Quy tắc rank:",
    "关即可领取奖励": " màn để nhận thưởng",
    "关注获得奖励哦": "Follow để nhận quà!",
    "今天已经签过了": "Hôm nay đã điểm danh!",
    "看广告获取提示": "QC lấy gợi ý",
    "看广告金币加倍": "QC nhân đôi vàng",
    "看广告跳过关卡": "QC bỏ qua màn",
    "留两个苹果踏脚": "Để lại 2 táo làm bàn đạp",
    "留三个苹果踏脚": "Để lại 3 táo làm bàn đạp",
    "留一个苹果踏脚": "Để lại 1 táo làm bàn đạp",
    "留这个苹果踏脚": "Để lại táo này làm bàn đạp",
    "您已经分享过了": "Đã share rồi!",
    "皮肤领取成功！": "Nhận skin OK!",
    "破掉所有碎石块": "Phá hết gạch vỡ",
    "七天登录送皮肤": "Đăng nhập 7 ngày nhận skin",
    "确定要修复吗?": "Xác nhận sửa?",
    "势均力敌的对手": "Đối thủ ngang cơ",
    "首页-开始游戏": "Home - Chơi",
    "未完整观看视频": "Xem hết QC mới nhận!",
    "先吃里面的苹果": "Ăn táo bên trong trước",
    "先吃下层的苹果": "Ăn táo tầng dưới trước",
    "先吃下面的苹果": "Ăn táo phía dưới trước",
    "先吃这两个苹果": "Ăn 2 táo này trước",
    "先吃左边的苹果": "Ăn táo bên trái trước",
    "用这个苹果踏脚": "Dùng táo này làm bàn đạp",
    "用这个石块踏脚": "Dùng đá này làm bàn đạp",
    "用这个石头踏脚": "Dùng đá này làm bàn đạp",
    "用这颗苹果踏脚": "Dùng táo này làm bàn đạp",
    "用这块石头踏脚": "Dùng đá này làm bàn đạp",
    "游戏胜利了！！": "Thắng rồi!!",
    "游戏失败了！！": "Thua rồi!!",
    "右边苹果不要吃": "Đừng ăn táo bên phải",
    "这个苹果不要吃": "Đừng ăn táo này",
    "只显示前一百名": "Chỉ top 100",
    "最后吃这个苹果": "Ăn táo này cuối",
    "(30分钟)": "(30 phút)",
    "《隐私政策》": "《Chính sách》",
    "成功：999": "Thành công: 999",
    "成功领取皮肤": "Nhận skin OK!",
    "从上面吃苹果": "Ăn táo từ trên",
    "大厅选择关卡": "Chọn màn",
    "点击召唤苹果": "Chạm để gọi táo",
    "毒苹果是关键": "Táo độc là tường",
    "端午节彩蛋2": "Trứng P.Ngọ 2",
    "功夫蛙双舌头": "Ếch 2 lưỡi",
    "关卡宝箱免费": "Rương miễn phí",
    "关卡宝箱视频": "QC rương màn",
    "关卡创作者：": "Tác giả:",
    "广告点击领取": "QC để nhận",
    "解锁无限体力": "Mở thể lực vô hạn",
    "金币x200": "Vàng x200",
    "金币x400": "Vàng x400",
    "每三分钟更新": "Cập nhật mỗi 3 phút",
    "输入你的名字": "Nhập tên bạn",
    "贪吃的苹果蛇": "Rắn Ăn Táo",
    "提示次数：5": "Gợi ý còn: 5",
    "提示道具x3": "Gợi ý x3",
    "挑战：999": "Thách: 999",
    "先吃这个苹果": "Ăn táo này trước",
    "先吃左边苹果": "Ăn táo trái trước",
    "需要苹果踏脚": "Cần táo làm bàn đạp",
    "邀请好友模式": "Mời bạn",
    "已成功挑战：": "Đã phá:",
    "已经解锁皮肤": "Đã mở skin!",
    "已经解锁无限": "Đã mở vô hạn!",
    "(已领取)": "(Đã nhận)",
    "9999胜": "9999 thắng",
    "不耗费体力": "Không tốn thể lực",
    "不要贪吃哦": "Đừng tham!",
    "超级中分王": "Vua điểm giữa",
    "吃这个苹果": "Ăn táo này",
    "大冒险模式": "Phiêu lưu",
    "垫两个石块": "Kê 2 khối đá",
    "毒苹果模式": "Táo độc",
    "端午节彩蛋": "Trứng P.Ngọ",
    "关卡编号：": "Mã màn:",
    "金币不足！": "Không đủ vàng!",
    "金币X20": "Vàng x20",
    "进入侧边栏": "Vào sidebar",
    "晋级条件：": "Điều kiện lên hạng:",
    "留一个踏脚": "Để lại 1 chỗ đạp",
    "排位赛模式": "Rank",
    "配置表下载": "Tải config",
    "破碎的砖块": "Gạch vỡ",
    "破砖块是墙": "Gạch vỡ là tường",
    "请输入内容": "Nhập nội dung đi!",
    "蛇回家模式": "Về nhà",
    "蛇蛇通行证": "Pass rắn",
    "数据已恢复": "Đã khôi phục data!",
    "双头蛇模式": "Hai đầu",
    "提示20步": "Gợi ý 20 bước",
    "提示次数：": "Gợi ý còn:",
    "体力x10": "Thể lực x10",
    "未传递目的": "Chưa rõ mục đích",
    "小心毒苹果": "Cẩn thận táo độc",
    "学会垫石块": "Học kê đá",
    "要学会掉头": "Học quay đầu",
    "已发送催更": "Đã gửi đòi update!",
    "(简单)": "(Dễ)",
    "(中等)": "(Thường)",
    "(困难)": "(Khó)",
    "简单": "Dễ",
    "中等": "Thường",
    "困难": "Khó",
    "(重玩)": "(Chơi lại)",
    "100关": "100 màn",
    "999胜": "999 thắng",
    "补偿福利": "Quà bù",
    "补发皮肤": "Bù skin",
    "残忍拒绝": "Từ chối",
    "测试模式": "Test",
    "场景皮肤": "Skin cảnh",
    "成功：0": "Thành công: 0",
    "传说皮肤": "Skin huyền thoại",
    "地狱难度": "Độ khó Địa ngục",
    "登录失败": "Đăng nhập lỗi",
    "点击领取": "Chạm nhận",
    "返回大厅": "Về sảnh",
    "飞天模式": "Chế độ Bay",
    "毒苹果会使贪吃的苹果蛇的身体断层，需要调整角度去吃毒苹果，\n达到左脚踩右脚推动断节的身体前进来进入黑洞":
      "Táo độc làm thân rắn bị đứt đoạn; cần chỉnh góc để ăn táo độc,\nrồi đẩy đoạn thân đứt tiến vào hố đen",
    "操作上下左右进入黑洞": "Vuốt lên xuống trái phải để vào hố đen",
    "我知道一条进黑洞的小路，跟紧": "Tôi biết đường vào hố đen, đi theo nhé",
    "主蛇与母蛇靠近时即可交配，点击爱心开始交配，交配结束后会生成蛇蛋，开启即可获得超值奖励！每条母蛇交配三次后将会消失！":
      "Khi rắn chính gần rắn cái có thể giao phối — chạm trái tim để bắt đầu. Sau đó sinh trứng rắn, mở trứng nhận thưởng lớn! Mỗi rắn cái giao phối 3 lần rồi biến mất!",
    "游玩过程中，会随机掉落苹果，玩家可以点击苹果拾取，一定数量后生成金苹果或宝箱，开启获得金币等奖励。":
      "Trong lúc chơi, táo có thể rơi ngẫu nhiên — chạm để nhặt. Đủ số lượng sẽ tạo táo vàng hoặc rương; mở ra nhận vàng và thưởng.",
    "玩家可对蛇窝中的装饰进行升级，所有装饰升到MAX后，即可获得神秘皮肤大奖！":
      "Bạn có thể nâng cấp trang trí hang rắn. Khi tất cả đạt MAX sẽ nhận skin bí ẩn!",
    "金币可购买三种不同品种的母蛇，品种越高，孵化蛇蛋的奖励越好。":
      "Dùng vàng mua 3 loại rắn cái khác nhau — loại càng cao, thưởng trứng càng tốt.",
    "尊敬的各位玩家,为庆祝《贪吃的苹果蛇》上线一周年,特开启周年庆典嘉年华活动,所有玩家上线即可获得丰厚的皮肤金币等奖励,并且为各位玩家更新了超多皮肤以及全新玩法,非常感谢大家对游戏的认可以及陪伴,让我们一起欢度假期!!":
      "Kính gửi người chơi! Nhân kỷ niệm 1 năm Rắn Ăn Táo, mở sự kiện lễ hội — đăng nhập nhận skin, vàng và nhiều phần thưởng. Đã cập nhật nhiều skin cùng chế độ mới. Cảm ơn các bạn đã đồng hành — cùng vui chơi!",
    "更新时间：2024年10月10日  生效时间：2024年10月10日": "Cập nhật: 10/10/2024  Hiệu lực: 10/10/2024",
    "更新时间：2024年10月1日  生效时间：2024年10月3日": "Cập nhật: 01/10/2024  Hiệu lực: 03/10/2024",
    "自创关卡，通过审核后可以在创意大厅展示": "Tự tạo màn — sau duyệt sẽ hiện ở sảnh sáng tạo",
    "上传成功!正在等待审核!": "Tải lên OK! Đang chờ duyệt!",
    "你的关卡编号为：": "Mã màn của bạn: ",
    "审核通过后会在大厅展示。": "Sau duyệt sẽ hiện ở sảnh.",
    "审核已通过！": "Đã duyệt!",
    "已拒绝过审": "Từ chối duyệt",
    "验证通过 : ": "Xác minh OK : ",
    "请把你的意见和建议告诉我们让您来获得更好体验\n（不超过50字 每天一次）":
      "Gửi góp ý để trải nghiệm tốt hơn\n(tối đa 50 ký tự, 1 lần/ngày)",
    "当玩家达成下列胜场时\n会晋级对应段位": "Đạt số trận thắng sau\nsẽ lên hạng tương ứng",
    "关闭后\n不再出现": "Đóng rồi\nkhông hiện lại",
    "点击订阅\n优先体验": "Chạm đăng ký\ntrải nghiệm sớm",
    "暂未拥有\n带技能皮肤": "Chưa có\nskin kèm skill",
    "一步到位，\n直达通关！": "Một bước xong,\nphá màn ngay!",
    "提供100步解题思路，\n探索通关趣味性！": "Gợi ý tối đa 100 bước,\nkhám phá cách phá màn!",
    "闯关数已经超过#，\n炫耀一下吧！": "Đã phá hơn # màn,\nkhoe một phát nào!",
    "体力：5\n提示次数：5": "Thể lực: 5\nSố gợi ý: 5",
    "分享获得": "Nhận từ share",
    "分享奖励": "Thưởng share",
    "分享有奖": "Share nhận quà",
    "服务协议": "Điều khoản",
    "更多玩法": "Thêm mode",
    "更新版本": "Cập nhật",
    "功夫蛙双": "Ếch 2 lưỡi",
    "恭喜获得": "Nhận được",
    "关卡编号": "Mã màn",
    "关卡审核": "Duyệt màn",
    "关卡提示": "Gợi ý màn",
    "关卡重玩": "Chơi lại màn",
    "关注抖音": "Follow Douyin",
    "观看视频": "Xem QC",
    "还是算了": "Thôi!",
    "红柿苹果": "Táo hồng",
    "火眼金睛": "Tìm chữ",
    "获得奖励": "Nhận thưởng",
    "获得金币": "Nhận vàng",
    "获得皮肤": "Nhận skin",
    "获得体力": "Nhận thể lực",
    "获客模式": "Săn khách",
    "获取金币": "Nhận vàng",
    "获取体力": "Nhận thể lực",
    "获取钻石": "Nhận kim cương",
    "技能名字": "Tên skill",
    "技能升级": "Nâng skill",
    "苹果雨": "Mưa táo",
    "金币雨": "Mưa vàng",
    "尾部生长": "Mọc đuôi",
    "召唤#value#颗苹果随机落在地面上": "Triệu hồi #value# táo rơi ngẫu nhiên xuống đất",
    "召唤#value#个金币随机落在地面上": "Triệu hồi #value# vàng rơi ngẫu nhiên xuống đất",
    "如果尾部有空间,可以连续长出#value#个尾巴": "Nếu đuôi còn chỗ, có thể mọc thêm #value# đoạn đuôi",
    "召唤1颗苹果随机落在地面上": "Triệu hồi 1 táo rơi ngẫu nhiên xuống đất",
    "召唤1个金币随机落在地面上": "Triệu hồi 1 vàng rơi ngẫu nhiên xuống đất",
    "如果尾部有空间,可以连续长出1个尾巴": "Nếu đuôi còn chỗ, có thể mọc thêm 1 đoạn đuôi",
    "加载失败": "Tải thất bại",
    "箭头模式": "Mũi tên",
    "金币不足": "Không đủ vàng!",
    "金币奖励": "Thưởng vàng",
    "禁止跳跃": "Cấm nhảy",
    "经典模式": "Cổ điển",
    "经典皮肤": "Skin thường",
    "经典苹果": "Táo thường",
    "拒绝过审": "Từ chối duyệt",
    "开裂苹果": "Táo nứt",
    "开始匹配": "Bắt đầu match",
    "开始欣赏": "Xem ngay",
    "开始游戏": "Chơi ngay",
    "辣椒模式": "Ớt",
    "来一个！": "Chơi luôn!",
    "立即欣赏": "Xem ngay",
    "连接超时": "Kết nối timeout!",
    "连接成功": "Kết nối OK!",
    "落雪苹果": "Táo tuyết",
    "盲盒模式": "Hộp bí",
    "盲盒玩法": "Hộp bí",
    "每日挑战": "Thử thách ngày",
    "末日难度": "Độ khó Tận thế",
    "南瓜苹果": "Táo bí",
    "内容过长": "Dài quá rồi!",
    "爬塔模式": "Leo tháp",
    "皮肤奖励": "Thưởng skin",
    "匹配模式": "Ghép trận",
    "拼图模式": "Ghép hình",
    "普通模式": "Thường",
    "上传关卡": "Upload màn",
    "蛇皮商城": "Shop skin",
    "蛇王试炼": "Thử luyện",
    "蛇形切割": "Cắt rắn",
    "蛇形万象": "Vạn tượng",
    "蛇影塔尖": "Đỉnh tháp",
    "失败重玩": "Thua — chơi lại",
    "石头是墙": "Đá là tường",
    "视频获得": "Nhận từ QC",
    "数据恢复": "Khôi phục",
    "双蛇模式": "Hai rắn",
    "双头模式": "Hai đầu",
    "随机关卡": "Màn random",
    "碎地模式": "Đất vỡ",
    "汤圆苹果": "Táo bánh",
    "提示道具": "Gợi ý",
    "体力：5": "Thể lực: 5",
    "体力奖励": "Thưởng thể lực",
    "体力x5": "Thể lực x5",
    "添加桌面": "Ghim desktop",
    "挑战次数": "Số lần thách",
    "通过审核": "Duyệt OK",
    "头别朝下": "Đừng quay đầu xuống",
    "蛙趣虫虫": "Ếch vui",
    "网红模式": "Hot trend",
    "蔚蓝回声": "Xanh vọng",
    "温馨提示": "Lưu ý",
    "文字提示": "Gợi ý chữ",
    "我的蛇窝": "Ổ rắn",
    "无限体力": "Thể lực vô hạn",
    "稀有皮肤": "Skin hiếm",
    "限时奖励": "Thưởng giới hạn",
    "幸运开箱": "Rương may mắn",
    "学会掉头": "Học quay đầu",
    "烟花迎福": "Pháo hoa",
    "隐私政策": "Chính sách",
    "永久获得": "Nhận vĩnh viễn",
    "幽灵古堡": "Lâu đài ma",
    "幽灵苹果": "Táo ma",
    "再次签到": "Điểm danh lại",
    "暂不欣赏": "Bỏ qua",
    "炸弹模式": "Bom",
    "召唤神龙": "Gọi rồng",
    "正在加载": "Đang tải…",
    "制作次数": "Lượt tạo",
    "重新开始": "Chơi lại",
    "装扮商城": "Shop trang phục",
    "增加5个<苹果>道具": "Thêm 5 quả táo",
    "暂不需要": "Để sau",
    "来来来": "Xem ngay",
    "左脚踩右脚": "Chồng chân",
    "彩蛋关卡:": "Màn trứng:",
    "彩蛋关卡": "Màn trứng",
    "神秘关卡": "Màn bí ẩn",
    "福利关卡": "Màn thưởng",
    "双头彩蛋:": "Trứng 2 đầu:",
    "双头彩蛋": "Trứng 2 đầu",
    "天后奖励重置": " ngày nữa sẽ reset thưởng",
    "奖励重置": "Reset thưởng",
    "奖励：": "Thưởng:",
    "奖励": "Thưởng",
    "已收集": "Đã thu",
    "再闯过": "Còn phá thêm ",
    "需要先制作好一个关卡测试通过后才能匹配哦": "Cần tạo và test qua 1 màn trước khi ghép trận",
    "在下列字中找到(      )": "Tìm chữ ",
    "在下列字中找到": "Tìm chữ",
    "帮助小跳蛙消灭所有蚊子": "Giúp ếch nhỏ diệt hết muỗi",
    "提示操作(确定/取消)": "Thao tác gợi ý (Đồng ý/Hủy)",
    "忍痛不看": "Bỏ qua",
    "石头": "Đá",
    // --- lose/win tips + short banter ---
    "令人惊艳，闪耀着灿烂的金光，仿佛是财富的象征。充满活力，总是在人群中吸引视线。": "Lấp lánh vàng óng — biểu tượng của sự giàu có, luôn nổi bật giữa đám đông.",
    "身形修长，散发着深邃而神秘的气息。它的蓝色皮肤在阳光下闪烁着微弱的光芒。": "Thân hình thon dài, khí chất bí ẩn; da xanh lấp lánh nhẹ dưới nắng.",
    "拥有华丽的外表，亮丽的紫色映射出庄重与优雅，宛如夜空中璀璨的星辰。": "Ngoại hình lộng lẫy, tím sang trọng như sao trên bầu trời đêm.",
    "菜！过不去没事，多试几次你会发现，一样过不去的。": "Yếu! Không qua cũng không sao — thử thêm vài lần, vẫn không qua.",
    "蛇已在垂直线上且只能向上移动，陷入绝境！": "Rắn đã trên đường thẳng đứng và chỉ đi lên — hết đường!",
    "这个游戏也太好玩了，友友们都来试一下吧！": "Game vui quá, mọi người vào thử đi!",
    "不出意外的话，现在应该是出意外了": "Nếu không có gì bất ngờ… thì đây chính là bất ngờ.",
    "这一关根本就无解，不信你来试试！": "Màn này vô nghiệm — không tin thì thử đi!",
    "卡关啦，卡关啦，谁来帮帮我呀！": "Kẹt màn rồi, kẹt màn rồi, ai cứu với!",
    "不出意外的话你刚差点过去了。": "Vừa rồi gần qua lắm rồi đó.",
    "不是蛇在闯关，而是你的脑袋！": "Không phải rắn đang phá màn — là cái đầu bạn!",
    "加入我们，探索蛇的奇妙冒险！": "Tham gia cùng khám phá cuộc phiêu lưu của rắn!",
    "你重生了，重生在走错前的一步": "Bạn đã hồi sinh — ngay trước bước đi sai.",
    "长按！长按！我让你长按吐舌！": "Giữ! Giữ! Bảo giữ để thè lưỡi cơ mà!",
    "这都过不去？评论区人均大神！": "Cỡ này cũng không qua? Comment toàn cao thủ!",
    "别光嘴上说，快证明给我看！": "Đừng chỉ nói — chứng minh đi!",
    "高处不胜寒，兄弟们快来啊！": "Cao thì lạnh — anh em vào đi!",
    "高处不胜寒，友友们快来啊！": "Cao thì lạnh — mọi người vào đi!",
    "换条路也许会有不一样的风景": "Đổi đường có khi thấy cảnh khác.",
    "利用石头拉伸可以意想不到哦": "Dùng đá kéo giãn — bất ngờ lắm đó.",
    "四周都被堵住了，无路可走！": "Bốn phía bị chặn — hết đường đi!",
    "有时候你没有你想的那么耐摔": "Đôi khi bạn không bền như bạn nghĩ.",
    "我也没想到，这玩意劲儿这么大...": "Cũng không ngờ thứ này mạnh vậy...",
    "发现了豹纹蛇!": "Tìm thấy Rắn da báo!",
    "发现了端午金龙!": "Tìm thấy Rồng vàng Đoan Ngọ!",
    "发现了好粗的蟒蛇!": "Tìm thấy Trăn to!",
    "这个圆圆的东西一定很好吃吧...呃！": "Cái tròn này chắc ngon... ờ!",
    "偶尔扎一下也是没事的...吧？": "Thỉnh thoảng đâm một cái cũng... không sao chứ?",
    "你输给了对手": "Bạn thua đối thủ",
    "你打败了对手": "Bạn thắng đối thủ",
    "会跑的蚊子也难不倒你吧。": "Muỗi biết chạy cũng không làm khó bạn chứ?",
    "前方都是危险，无处可逃！": "Phía trước toàn nguy hiểm — không lối thoát!",
    "为什么退不出？？？？？？": "Sao thoát không được??????",
    "一起来玩贪吃的苹果蛇吧！": "Cùng chơi Rắn Ăn Táo nào!",
    "不好意思，我也不知道！": "Xin lỗi, mình cũng không biết!",
    "提示判断：请添加终点。": "Gợi ý: hãy thêm điểm đích.",
    "桌面图标创建成功！！！": "Tạo icon desktop thành công!!!",
    "并肩作战，突破难关！": "Cùng nhau phá ải!",
    "或许你有更好的想法？": "Có lẽ bạn có ý hay hơn?",
    "啊对对对，你走得对": "À đúng đúng, bạn đi đúng rồi.",
    "长按吐舌再按方向！": "Giữ thè lưỡi rồi bấm hướng!",
    "边儿到底有谁在啊": "Bên cạnh rốt cuộc ai vậy?",
    "看信号！看信号！": "Nhìn tín hiệu! Nhìn tín hiệu!",
    "你又觉得你行了！": "Lại tưởng mình giỏi rồi à!",
    "叛逆期是吧？？？": "Tuổi nổi loạn hả???",
    "那你就是信不过我咯": "Vậy là không tin tôi rồi?",
    "不听蛙蛙言,吃亏在眼前！": "Không nghe lời ếch, thiệt ngay trước mắt!",
    "小眼睛看方向!": "Mắt tinh nhìn hướng!",
    "往&!!我是说往&!!!": "Đi &!!, bảo đi &!!!",
    "你的舌头需要长按+方向拉长。": "Lưỡi cần giữ lâu + kéo theo hướng.",
    "谁是最强解谜王？": "Ai là vua giải đố?",
    "证据、证明、铁证": "Bằng chứng, chứng minh, chứng chắc!",
    "不要乱动啊喂！": "Đừng cựa quậy lung tung!",
    "大开盲盒！！！": "Mở hộp mù!!!",
    "用户登录了吗？": "Đã đăng nhập chưa?",
    "怎么辉石？？？": "Sao lại thế???",
    "注意不要贪吃哦": "Nhớ đừng tham ăn nhé",
    "第几关？？？": "Màn thứ mấy???",
    "是双头的尾吧": "Là đuôi rắn 2 đầu chứ gì",
    "要全部吃完哦": "Phải ăn hết đó nha",
    "正在重连……": "Đang kết nối lại…",
    // --- dialog/toast batch (showDialogBox + showMessageBox) ---
    "你太厉害了 关卡还在更新中哦 先继续挑战其他模式吧": "Bạn quá đỉnh! Màn đang cập nhật — thử mode khác nhé",
    "页面加载超时,请尝试重启游戏或联系客服解决:": "Tải trang quá lâu, thử mở lại hoặc liên hệ hỗ trợ:",
    "游戏资源丢失,请尝试重启游戏或联系客服解决:": "Mất tài nguyên game, thử mở lại hoặc liên hệ hỗ trợ:",
    "你获得一颗龙珠！集齐七颗即可召唤神龙！": "Nhận 1 ngọc rồng! Đủ 7 viên để gọi thần long!",
    "很需要的一个东西，\n大幅缩短交配时间": "Rất hữu ích —\nrút ngắn thời gian giao phối",
    "另一个玩家已经胜利了,是否继续游玩？": "Người kia đã thắng — tiếp tục chơi?",
    "增加所有蛇的血量，可以更顺利的产出。": "Tăng máu mọi rắn để sản xuất suôn sẻ hơn.",
    "现在退出算作认输，你确定要退出吗？": "Thoát bây giờ = đầu hàng. Thoát chứ?",
    "保存会覆盖之前画作,是否保存<": "Lưu sẽ ghi đè tranh cũ, lưu chứ? <",
    "当前关卡没有变动,可以直接开始": "Màn không đổi — có thể bắt đầu ngay",
    "更多好玩加载失败~请稍后重试~": "Tải mục vui thất bại — thử lại sau",
    "互推盒子显示失败~请稍后重试": "Hiện hộp gợi ý thất bại — thử lại sau",
    "实名认证失败，请检查你的输入": "Xác minh thất bại — kiểm tra lại thông tin",
    "必须与蛇的身子或者蛇头相连": "Phải nối với thân hoặc đầu rắn",
    "编辑界面尺寸最大10*10": "Kích thước tối đa 10×10",
    "你说话太快了，喝口水再说吧": "Nói nhanh quá — nghỉ một chút đã",
    "删除后不可恢复,是否删除<": "Xóa không hoàn tác được — xóa chứ? <",
    "双方准备完成，即将开始游戏": "Cả hai sẵn sàng — bắt đầu!",
    "先创建一个关卡用于匹配对战": "Tạo 1 màn trước để ghép trận",
    "分享视频时长不能少于3秒": "Video share tối thiểu 3 giây",
    "拉取次数过多暂时无法显示": "Gọi quá nhiều — tạm không hiện",
    "领取的人太多了 稍后再试": "Quá đông nhận — thử lại sau",
    "请授予复制到剪贴板的权限": "Cần quyền sao chép clipboard",
    "你的对手已经结束了比赛": "Đối thủ đã kết thúc trận",
    "你的对手已经离开了比赛": "Đối thủ đã rời trận",
    "请输入正确的身份证号码": "Nhập đúng số CMND/CCCD",
    "停止失败 录屏时间过短": "Dừng thất bại — quay quá ngắn",
    "成功解锁好粗的蟒蛇!": "Đã mở Trăn to!",
    "复制失败，权限被拒绝": "Copy thất bại — bị từ chối quyền",
    "获得双倍金币20奖励": "Nhận thưởng vàng x2 (+20)",
    "每局只能使用一次技能": "Mỗi ván chỉ dùng skill 1 lần",
    "你确定要退出观战吗？": "Thoát chế độ xem?",
    "请先放置荷叶或者地块": "Đặt lá sen hoặc ô đất trước",
    "是否要看视频解锁当天": "Xem QC mở hôm nay?",
    "提交分数到排行榜失败": "Gửi điểm xếp hạng thất bại",
    "现在退出的话算认输哦": "Thoát bây giờ = đầu hàng",
    "必须从尾巴开始操作": "Phải thao tác từ đuôi",
    "必须从尾巴开始删除": "Phải xóa từ đuôi",
    "超时，已经自动退出": "Hết giờ — đã tự thoát",
    "成功解锁端午翠龙!": "Đã mở Rồng xanh Đoan Ngọ!",
    "成功解锁端午金龙!": "Đã mở Rồng vàng Đoan Ngọ!",
    "穿墙可不是个好习惯": "Đi xuyên tường không hay đâu",
    "复制失败，复制失败": "Copy thất bại",
    "获取排行榜数据失败": "Lấy bảng xếp hạng thất bại",
    "交配时间增速成功！": "Tăng tốc giao phối OK!",
    "开关必须放在地面上": "Công tắc phải đặt trên đất",
    "录屏失败，不能分享": "Quay màn thất bại — không share được",
    "你需要选择一个选项": "Cần chọn một lựa chọn",
    "请按照提示路线移动": "Di chuyển theo đường gợi ý",
    "输入的房间号不合法": "Mã phòng không hợp lệ",
    "跳转失败 稍后再试": "Chuyển thất bại — thử lại sau",
    "已经获得300金币": "Đã nhận +300 vàng",
    "成功解锁豹纹蛇!": "Đã mở Rắn da báo!",
    "格子上已经有物体": "Ô đã có vật",
    "关卡数据格式错误": "Lỗi định dạng dữ liệu màn",
    "激励视频加载错误": "Lỗi tải QC thưởng",
    "没有找到该画作<": "Không tìm thấy tranh <",
    "请输入正确的姓名": "Nhập đúng họ tên",
    "视频广告播放失败": "Phát QC thất bại",
    "是否要看视频进入": "Xem QC để vào?",
    "完成挑战上报失败": "Báo hoàn thành thử thách thất bại",
    "页面没有挂载脚本": "Trang chưa gắn script",
    "已经解锁中秋月色": "Đã mở Trăng Trung thu",
    "只能帮你到这里了": "Chỉ giúp được đến đây thôi",
    "不能放多个蛇头": "Không đặt nhiều đầu rắn",
    "告诉你一个消息": "Có tin nhắn",
    "还不能开始录音": "Chưa bắt đầu ghi âm được",
    "还没有开始录音": "Chưa bắt đầu ghi âm",
    "获取排行榜失败": "Lấy xếp hạng thất bại",
    "目标区不能为空": "Vùng đích không được trống",
    "您操作的太快了": "Thao tác quá nhanh",
    "匹配房间失败:": "Ghép phòng thất bại:",
    "请选择正确类型": "Chọn đúng loại",
    "实名认证成功.": "Xác minh thành công.",
    "血量增加成功！": "Tăng máu thành công!",
    "已获得过补偿 ": "Đã nhận bồi thường ",
    "已经领取过福利": "Đã nhận phúc lợi rồi",
    "已预设盲盒产物": "Đã đặt sẵn quà hộp mù",
    "这个已经有了哦": "Cái này đã có rồi",
    "必须先放蛇头": "Phải đặt đầu rắn trước",
    "不能重复分享": "Không share trùng",
    "但是仅次于你": "Nhưng chỉ sau bạn",
    "点击其他的蛇": "Chạm rắn khác",
    "兑换码已兑换": "Mã đã dùng rồi",
    "关卡上传失败": "Upload màn thất bại",
    "关卡搜索失败": "Tìm màn thất bại",
    "获得场景皮肤": "Nhận skin cảnh",
    "获得体验  ": "Nhận dùng thử  ",
    "奖励已经领取": "Đã nhận thưởng rồi",
    "没有录音操作": "Không có thao tác ghi âm",
    "请先同意协议": "Đồng ý điều khoản trước",
    "日期格式不对": "Sai định dạng ngày",
    "视频观看失败": "Xem QC thất bại",
    "已达最大等级": "Đã max cấp",
    "已经撤到家了": "Đã hoàn tác hết",
    "已有桌面图标": "Đã có icon desktop",
    "用户取消录屏": "Người chơi hủy quay",
    "这里不能放置": "Không đặt được ở đây",
    "只能放一只哦": "Chỉ đặt được một thôi",
    "成功解锁 ": "Đã mở ",
    "兑换码错误": "Sai mã đổi",
    "复制失败 ": "Copy thất bại ",
    "购买成功！": "Mua thành công!",
    "获得皮肤 ": "Nhận skin ",
    "叛逆期是吧": "Tuổi nổi loạn hả?",
    "请放置青蛙": "Hãy đặt ếch",
    "请放置蚊子": "Hãy đặt muỗi",
    "蛇群已满！": "Đàn rắn đã đầy!",
    "未输入名字": "Chưa nhập tên",
    "谢谢参与！": "Cảm ơn đã tham gia!",
    "已经放满了": "Đã đặt đầy",
    "正在播放中": "Đang phát…",
    "不能为空": "Không được trống",
    "成功解锁": "Đã mở",
    "对手说：": "Đối thủ:",
    "发现彩蛋": "Tìm thấy trứng",
    "放置无效": "Đặt không hợp lệ",
    "分享失败": "Share thất bại",
    "复制成功": "Copy OK",
    "加载超时": "Tải quá lâu",
    "交配加速": "Tăng tốc giao phối",
    "金币加倍": "Nhân đôi vàng",
    "敬请期待": "Sắp ra mắt",
    "匹配失败": "Ghép trận thất bại",
    "取消分享": "Hủy share",
    "删除文件": "Xóa file",
    "添加失败": "Thêm thất bại",
    "退出观战": "Thoát xem",
    "我知道了": "Đã hiểu",
    "增加血量": "Tăng máu",
    "资源丢失": "Mất tài nguyên",
    "你说：": "Bạn:",
    "玩得好": "Chơi hay!",
    "已保存": "Đã lưu",
    "保存": "Lưu",
    "技能": "Skill",
    "通过": "Phá",
    "经典地砖": "Gạch cổ điển",
    "地砖": "Gạch nền",
    "翠绿丘陵": "Đồi xanh",
    "寂静竹林": "Rừng tre",
    "端午大棕": "Bánh ú Đoan Ngọ",
    "神秘夜空": "Đêm huyền bí",
    "万家灯火": "Muôn nhà đèn",
    "眺望沙丘": "Đồi cát",
    "漫天星斗": "Trời đầy sao",
    "中秋月色": "Trăng Trung thu",
    "落日余辉": "Hoàng hôn",
    "星穹雪境": "Tuyết dưới trời sao",
    "眼珠苹果": "Táo mắt",
    "招财猫": "Mèo thần tài",
    "魔法猫头鹰": "Cú phép",
    "小灰熊": "Gấu xám",
    "流氓犬": "Chó tinh nghịch",
    "小棕猫": "Mèo nâu",
    "视频解锁": "Mở bằng QC",
    "(已装备)": "(Đã trang bị)",
    "已装备": "Đã trang bị",
    "(已到期)": "(Hết hạn)",
    "已到期": "Hết hạn",
    "继续制作": "Tiếp tục tạo",
    "排\n行\n榜": "B\nX\nH",
    "规\n则": "Luật\nchơi",
    "提示广告选择1": "Chọn QC gợi ý 1",
    "提示广告选择2": "Chọn QC gợi ý 2",
    "蛇": "Rắn",
    "是否要看视频解锁当天创造房间模式": "Xem QC mở tạo phòng hôm nay?",
    "是否要看视频进入创造房间模式": "Xem QC vào tạo phòng?",
    "是否要看视频解锁当天匹配模式": "Xem QC mở match hôm nay?",
    "视频解锁模式": "Mở mode bằng QC",
    "看视频解锁": "QC mở khóa",
    "看视频跳关": "QC bỏ màn",
    "看视频获得制作关卡次数": "QC nhận lượt tạo màn",
    "看视频上传关卡": "QC tải màn lên",
    "看视频加速": "QC tăng tốc",
    "看视频复活": "QC hồi sinh",
    "看一次视频": "Xem 1 QC",
    "看多次视频": "Xem nhiều QC",
    "你需要观看一个视频来得到一个东西": "Cần xem 1 QC để nhận vật phẩm",
    "你需要观看多个视频来得到一个东西": "Cần xem nhiều QC để nhận vật phẩm",
    "视频显示错误~请稍后重试": "Lỗi hiện QC — thử lại sau",
    "视频加载失败~请稍后重试": "Tải QC lỗi — thử lại sau",
    "完整观看视频才能获得奖励哦~": "Xem hết QC mới nhận thưởng!",
    "准备完成": "Sẵn sàng",
    "自制模式": "Tự tạo",
    "自制挑战": "Thử thách tự tạo",
    "最新关卡": "Màn mới",
    "豹纹蛇": "Rắn da báo",
    "爆竹蛇": "Rắn pháo",
    "不是吧": "Thật á?",
    "彩蛋3": "Trứng 3",
    "彩蛋4": "Trứng 4",
    "彩虹蛇": "Rắn cầu vồng",
    "侧边栏": "Sidebar",
    "第1天": "Ngày 1",
    "第2天": "Ngày 2",
    "第3天": "Ngày 3",
    "第4天": "Ngày 4",
    "第5天": "Ngày 5",
    "第6天": "Ngày 6",
    "第7天": "Ngày 7",
    "第一层": "Tầng 1",
    "功夫蛙": "Ếch kungfu",
    "关卡底": "Nền màn",
    "哈士奇": "Husky",
    "回首页": "Về home",
    "加载中": "Đang tải…",
    "金币：": "Vàng:",
    "看视频": "Xem QC",
    "排位赛": "Rank",
    "排行榜": "BXH",
    "生命底": "Nền máu",
    "十字光": "Chữ thập",
    "体力：": "Thể lực:",
    "未配置": "Chưa cấu hình",
    "下一关": "Màn tiếp",
    "小浣熊": "Gấu trúc",
    "选项一": "Lựa chọn 1",
    "知道了": "Đã hiểu",
    "背景": "Nền",
    "擦除": "Xóa",
    "财神": "Thần tài",
    "藏狐": "Cáo",
    "测试": "Test",
    "撤回": "Hoàn tác",
    "催更": "Đòi update",
    "道具": "Vật phẩm",
    "地块": "Ô đất",
    "兑换": "Đổi",
    "反馈": "Góp ý",
    "返回": "Quay lại",
    "分享": "Share",
    "格子": "Ô",
    "公告": "Thông báo",
    "恭喜": "Chúc mừng",
    "关卡": "Màn",
    "荷叶": "Lá sen",
    "获取": "Nhận",
    "继续": "Tiếp tục",
    "金币": "Vàng",
    "拒绝": "Từ chối",
    "拒审": "Từ chối",
    "领取": "Nhận",
    "今日已签": "Hôm nay đã điểm danh",
    "今日已签到": "Hôm nay đã điểm danh",
    "录屏": "Quay màn",
    "苹果": "Táo",
    "签到": "Điểm danh",
    "清除": "Xóa",
    "取消": "Hủy",
    "确定": "OK",
    "删除": "Xóa",
    "闪光": "Flash",
    "舌头": "Lưỡi",
    "设置": "Cài đặt",
    "胜利": "Thắng!",
    "失败": "Thua!",
    "双蛇": "Hai rắn",
    "算了": "Thôi",
    "提示": "Gợi ý",
    "体力": "Thể lực",
    "添加": "Thêm",
    "同意": "Đồng ý",
    "退出": "Thoát",
    "完成": "Xong",
    "玩家": "Người chơi",
    "蚊子": "Muỗi",
    "相位": "Pha",
    "修复": "Sửa",
    "选关": "Chọn màn",
    "音乐": "Nhạc",
    "音效": "SFX",
    "暂停": "Tạm dừng",
    "长按": "Giữ lâu",
    "振动": "Rung",
    "重玩": "Chơi lại",
    "重做": "Làm lại",
    /* --- tips ModeTip (auto) --- */
    "一共有十个": "Có tất cả mười cái",
    "上下两个毒苹果要吃掉": "Ăn hai quả táo độc ở trên và dưới",
    "上方冰块卡到上方缺口处": "Kẹt khối băng phía trên vào chỗ hở phía trên",
    "上方的苹果从这颗开始吃": "Bắt đầu ăn táo phía trên từ quả này",
    "上面苹果不要第一个吃": "Đừng ăn táo phía trên đầu tiên",
    "下方冰块留个缝隙垫着": "Chừa khe cạnh khối băng dưới để kê",
    "不要吃右边两排毒苹果": "Đừng ăn hai hàng táo độc bên phải",
    "不要吃红苹果": "Đừng ăn táo đỏ",
    "不要直接吃苹果": "Đừng ăn táo ngay",
    "两个冰块叠加成一个楼梯": "Chồng hai khối băng thành cầu thang",
    "两个冰块叠着在缺口里": "Chồng hai khối băng trong chỗ hở",
    "两个石头要在中间叠着放": "Chồng hai tảng đá ở giữa",
    "两侧的苹果不要连着吃": "Đừng ăn liền táo ở hai bên",
    "两块石头要并排垫着": "Kê hai tảng đá cạnh nhau",
    "两块石头都要推下去垫着": "Đẩy cả hai tảng đá xuống để kê",
    "两边都是陷阱": "Hai bên đều là bẫy",
    "中间全部吃完": "Ăn hết ở giữa",
    "中间有两个苹果先不吃": "Tạm đừng ăn hai quả táo ở giữa",
    "中间留一个苹果踏脚": "Chừa một quả táo giữa làm bàn đạp",
    "中间留个苹果踏脚": "Chừa một quả táo giữa làm bàn đạp",
    "中间留苹果踏脚": "Chừa táo giữa làm bàn đạp",
    "互相垫着吃右边苹果": "Kê lên nhau để ăn táo bên phải",
    "从下方清理多余石头": "Dọn đá thừa từ phía dưới",
    "从下绕到毒苹果上方": "Vòng từ dưới lên trên táo độc",
    "从右边开始吃到这颗苹果为止": "Ăn từ bên phải đến quả táo này",
    "从左边下到传送门位置": "Đi xuống từ bên trái đến cổng dịch chuyển",
    "从石头绕回去再吃剩下的苹果": "Vòng qua đá rồi ăn số táo còn lại",
    "从边上两个苹果开始吃": "Bắt đầu ăn từ hai quả táo bên cạnh",
    "依靠落下的石头搭建平台": "Dùng đá rơi xuống để dựng nền",
    "保持在中间三格移动": "Chỉ di chuyển trong ba ô giữa",
    "保证冰块的形状不变": "Giữ nguyên hình dạng khối băng",
    "借助砖块绕回起点": "Dùng gạch để vòng về điểm đầu",
    "先不要吃上面的苹果": "Tạm đừng ăn táo phía trên",
    "先去右边转个弯再吃苹果": "Sang phải rẽ một vòng rồi ăn táo",
    "先吃上面的两颗苹果": "Ăn hai quả táo phía trên trước",
    "先吃上面的苹果": "Ăn táo phía trên trước",
    "先吃做左边的苹果": "Ăn táo bên trái trước",
    "先吃单独的那颗苹果": "Ăn quả táo đứng riêng trước",
    "先吃右边的苹果": "Ăn táo bên phải trước",
    "先吃右边的苹果再吃左边的苹果": "Ăn táo bên phải rồi mới ăn bên trái",
    "先吃右边的苹果再吃毒苹果": "Ăn táo bên phải rồi mới ăn táo độc",
    "先吃外围苹果": "Ăn táo vòng ngoài trước",
    "先吃完左侧的苹果": "Ăn hết táo bên trái trước",
    "先吃左边的这四个苹果": "Ăn bốn quả táo bên trái này trước",
    "先吃掉右边第四颗苹果": "Ăn quả táo thứ tư bên phải trước",
    "先吃掉左边的三个苹果": "Ăn ba quả táo bên trái trước",
    "先吃掉的辣椒不要用来破毒刺": "Đừng dùng quả ớt ăn trước để phá gai độc",
    "先吃毒苹果": "Ăn táo độc trước",
    "先吃苹果再吃毒苹果": "Ăn táo rồi mới ăn táo độc",
    "先垫着等上去重新调整再吃": "Kê trước, lên chỉnh lại rồi mới ăn",
    "先平行吃下面的苹果": "Ăn ngang hàng táo phía dưới trước",
    "先把石头往左侧推两格": "Đẩy đá sang trái hai ô trước",
    "先把苹果全部吃完": "Ăn hết táo trước",
    "先推上面的石头": "Đẩy tảng đá phía trên trước",
    "先推石头再吃苹果": "Đẩy đá trước rồi ăn táo",
    "先破掉外层石头再吃毒苹果": "Phá đá lớp ngoài rồi ăn táo độc",
    "其余的苹果吃完掉头": "Ăn hết số táo còn lại rồi quay đầu",
    "其余的苹果都吃完": "Ăn hết số táo còn lại",
    "再吃上层苹果": "Sau đó ăn táo tầng trên",
    "再吃下面的苹果": "Sau đó ăn táo phía dưới",
    "再吃中间层的苹果": "Sau đó ăn táo tầng giữa",
    "再推一个石头到顶上右边": "Đẩy thêm một tảng đá lên góc phải trên",
    "再竖着吃上面的苹果": "Sau đó ăn dọc táo phía trên",
    "出去掉头回来吃剩下的苹果": "Ra ngoài quay đầu rồi về ăn táo còn lại",
    "利用断掉的身体踏脚": "Dùng thân bị đứt làm bàn đạp",
    "利用毒苹果创造⊃型平台": "Dùng táo độc tạo nền hình ⊃",
    "利用毒苹果吃掉上面的两个苹果": "Dùng táo độc để ăn hai quả táo phía trên",
    "利用毒苹果生成的平台挡住踏脚": "Dùng nền tạo từ táo độc để chặn bàn đạp",
    "利用石头往右搭平台": "Dùng đá dựng nền về bên phải",
    "利用苹果和毒苹果搭建初始平台": "Dùng táo và táo độc dựng nền ban đầu",
    "利用这两个苹果踏脚": "Dùng hai quả táo này làm bàn đạp",
    "利用这个石头下垂到底下平台": "Dùng tảng đá này thả xuống nền dưới",
    "利用这个苹果搭建1✖4踏脚高台": "Dùng quả táo này dựng đài 1✖4 làm bàn đạp",
    "到最左边调整蛇头的位置": "Sang tận trái để chỉnh vị trí đầu rắn",
    "前往右边吃苹果时留三块碎石踏脚": "Khi sang phải ăn táo, chừa ba đá vụn làm bàn đạp",
    "只吃下面两排苹果": "Chỉ ăn hai hàng táo phía dưới",
    "只吃拐角第一个苹果": "Chỉ ăn quả táo đầu tiên ở góc",
    "只用吃一个苹果": "Chỉ cần ăn một quả táo",
    "右下角的石头往右推": "Đẩy tảng đá góc phải dưới sang phải",
    "右边两个单独砖块的苹果先吃": "Ăn trước táo trên hai viên gạch riêng bên phải",
    "右边底下两个不要吃": "Đừng ăn hai quả dưới bên phải",
    "右边底下苹果不能吃": "Không được ăn táo dưới bên phải",
    "右边拐角留个苹果踏脚": "Chừa một quả táo ở góc phải làm bàn đạp",
    "右边留一个苹果不要吃": "Chừa một quả táo bên phải, đừng ăn",
    "右边的冰块要从右边推": "Đẩy khối băng bên phải từ phía phải",
    "右边的苹果全部吃完": "Ăn hết táo bên phải",
    "右边苹果需要调整方向吃": "Chỉnh hướng để ăn táo bên phải",
    "吃一个毒苹果": "Ăn một quả táo độc",
    "吃三个苹果后吃掉毒苹果": "Ăn ba quả táo rồi ăn táo độc",
    "吃下面的苹果要调整方向": "Chỉnh hướng để ăn táo phía dưới",
    "吃右边苹果注意调整方向": "Nhớ chỉnh hướng khi ăn táo bên phải",
    "吃右边苹果要注意调整方向": "Nhớ chỉnh hướng để ăn táo bên phải",
    "吃完下层的四个苹果": "Ăn hết bốn quả táo tầng dưới",
    "吃完中间和右边的苹果": "Ăn hết táo ở giữa và bên phải",
    "吃完全部苹果掉头回来": "Ăn hết táo rồi quay đầu trở lại",
    "吃完其余全部苹果": "Ăn hết toàn bộ số táo còn lại",
    "吃完剩余的苹果": "Ăn hết số táo còn lại",
    "吃完所有苹果贴墙下去": "Ăn hết táo rồi men theo tường đi xuống",
    "吃完毒苹果后把石块往左推一格": "Ăn táo độc xong, đẩy đá sang trái một ô",
    "吃完毒苹果后生成⊃形平台": "Ăn táo độc xong, tạo nền hình ⊃",
    "吃完第一个苹果调头": "Ăn quả táo đầu tiên rồi quay đầu",
    "吃完苹果之后在左边绕成s形2×7格": "Ăn táo xong, uốn thành hình S 2×7 ô bên trái",
    "吃完苹果从下面转弯": "Ăn táo xong, rẽ từ phía dưới",
    "吃完苹果从格子左边走": "Ăn táo xong, đi bên trái ô",
    "吃完苹果借助破砖块踏脚": "Ăn táo xong, dùng gạch vỡ làm bàn đạp",
    "吃完苹果后从左侧重新调整方向": "Ăn táo xong, chỉnh lại hướng từ bên trái",
    "吃完苹果要重新调整方向": "Ăn táo xong, chỉnh lại hướng",
    "吃完辣椒有很强后坐力": "Ăn ớt xong sẽ bị giật lùi rất mạnh",
    "吃完这两个苹果回头": "Ăn hai quả táo này rồi quay lại",
    "吃完闪光的苹果进洞": "Ăn hết táo sáng rồi vào hang",
    "吃掉上层的五个苹果": "Ăn năm quả táo tầng trên",
    "吃掉上层的苹果再吃掉毒苹果": "Ăn táo tầng trên rồi ăn táo độc",
    "吃掉上层第一个苹果": "Ăn quả táo đầu tiên ở tầng trên",
    "吃掉上方毒苹果生成z形平台": "Ăn táo độc phía trên để tạo nền hình Z",
    "吃掉下层三个苹果": "Ăn ba quả táo tầng dưới",
    "吃掉下层的三个苹果": "Ăn ba quả táo ở tầng dưới",
    "吃掉下层的四个苹果": "Ăn bốn quả táo ở tầng dưới",
    "吃掉中间的三个苹果": "Ăn ba quả táo ở giữa",
    "吃掉中间的六个苹果": "Ăn sáu quả táo ở giữa",
    "吃掉中间第一个苹果": "Ăn quả táo đầu tiên ở giữa",
    "吃掉六个辣椒": "Ăn sáu quả ớt",
    "吃掉其余的全部苹果": "Ăn hết toàn bộ số táo còn lại",
    "吃掉剩下的辣椒和毒苹果": "Ăn số ớt còn lại và táo độc",
    "吃掉剩余的三个苹果": "Ăn ba quả táo còn lại",
    "吃掉右边一个苹果": "Ăn một quả táo bên phải",
    "吃掉右边两个苹果": "Ăn hai quả táo bên phải",
    "吃掉右边五个苹果": "Ăn năm quả táo bên phải",
    "吃掉右边的一个辣椒清理尖刺": "Ăn một quả ớt bên phải để dọn gai",
    "吃掉右边的四个苹果": "Ăn bốn quả táo bên phải",
    "吃掉左边三个苹果": "Ăn ba quả táo bên trái",
    "吃掉左边两列苹果": "Ăn hai cột táo bên trái",
    "吃掉左边全部苹果": "Ăn hết táo bên trái",
    "吃掉左边四个苹果": "Ăn bốn quả táo bên trái",
    "吃掉左边的一个辣椒清理尖刺": "Ăn một quả ớt bên trái để dọn gai",
    "吃掉左边砖块上面的苹果": "Ăn táo phía trên viên gạch bên trái",
    "吃掉所有苹果": "Ăn hết táo",
    "吃掉最下层的毒苹果": "Ăn táo độc ở tầng dưới cùng",
    "吃掉最右边的苹果": "Ăn quả táo ngoài cùng bên phải",
    "吃掉最底下的一个苹果": "Ăn một quả táo dưới cùng",
    "吃掉毒苹果": "Ăn táo độc",
    "吃掉毒苹果再吃苹果": "Ăn táo độc rồi ăn táo",
    "吃掉毒苹果后生成⊃形平台": "Ăn táo độc rồi tạo nền hình ⊃",
    "吃掉毒苹果后生成的平台推到这三格": "Đẩy nền tạo sau khi ăn táo độc đến ba ô này",
    "吃掉毒苹果和苹果开始搭建阶梯": "Ăn táo độc và táo để bắt đầu dựng bậc thang",
    "吃掉毒苹果往上": "Ăn táo độc rồi đi lên",
    "吃掉毒苹果生成⊃形平台": "Ăn táo độc để tạo nền hình ⊃",
    "吃掉毒苹果踏脚": "Ăn táo độc để làm bàn đạp",
    "吃掉苹果和毒苹果生成的平台推到左侧石头上踏脚": "Đẩy nền tạo từ táo và táo độc lên đá bên trái làm bàn đạp",
    "吃掉边上和底下的苹果": "Ăn táo ở cạnh và phía dưới",
    "吃掉这个毒苹果": "Ăn quả táo độc này",
    "吃掉这个毒苹果,别的毒苹果不能吃": "Ăn quả táo độc này, không được ăn những quả khác",
    "吃掉这个苹果": "Ăn quả táo này",
    "吃掉这个辣椒回到下层": "Ăn quả ớt này rồi trở xuống tầng dưới",
    "吃掉面前和下层的苹果": "Ăn táo trước mặt và ở tầng dưới",
    "吃掉顶上的红苹果": "Ăn táo đỏ trên cùng",
    "吃毒苹果把身体断节成L型": "Ăn táo độc để thân bị đứt thành hình L",
    "吃苹果时注意别被堵住了": "Khi ăn táo, đừng để bị chặn",
    "吃苹果注意角度": "Chú ý góc khi ăn táo",
    "吃这两颗苹果": "Ăn hai quả táo này",
    "吃这个毒苹果在毒刺处搭建平台": "Ăn táo độc này để dựng nền ở gai độc",
    "吃这颗毒苹果": "Ăn quả táo độc này",
    "吃里面的苹果注意调整方向": "Nhớ chỉnh hướng khi ăn táo bên trong",
    "后吃掉的辣椒用来破毒刺": "Dùng quả ớt ăn sau để phá gai độc",
    "向上吃掉毒苹果": "Đi lên ăn táo độc",
    "回头吃左边的五个苹果": "Quay lại ăn năm quả táo bên trái",
    "回来吃这个苹果": "Quay lại ăn quả táo này",
    "围绕着四个角吃苹果": "Ăn táo vòng quanh bốn góc",
    "圈内最后吃这个苹果": "Ăn quả táo này cuối cùng trong vòng",
    "在右边顶着帅气蛇上去": "Ở bên phải, đỡ rắn ngầu đi lên",
    "在平台上搭一个阶梯": "Dựng một bậc thang trên nền",
    "在最上面两条都平行": "Giữ cả hai con song song ở trên cùng",
    "在这块石头的任意一侧搭建高台踏脚": "Dựng đài cao làm bàn đạp ở một bên tảng đá này",
    "在里面绕一圈出来吃苹果": "Vòng một lượt bên trong rồi ra ăn táo",
    "在里面调转方向再吃苹果": "Đổi hướng bên trong rồi ăn táo",
    "地面尽头往上走一下再去吃": "Cuối nền, đi lên một bước rồi mới ăn",
    "垫着石头走上面": "Kê đá để đi phía trên",
    "外面的苹果要垫着": "Dùng táo bên ngoài để kê",
    "多次上去调整角度": "Đi lên nhiều lần để chỉnh góc",
    "多次用这个平台破掉碎石块": "Dùng nền này nhiều lần để phá đá vụn",
    "多次转弯注意尖刺": "Cẩn thận gai khi rẽ nhiều lần",
    "头上两个苹果不要吃": "Đừng ăn hai quả táo trên đầu",
    "头朝上落下": "Rơi xuống với đầu hướng lên",
    "头朝上落地": "Tiếp đất với đầu hướng lên",
    "学会把石头叠加垫着": "Chồng đá để kê",
    "将⊃形平台推至双层毒刺处": "Đẩy nền hình ⊃ đến chỗ gai độc hai tầng",
    "将这个石块推到右边锯子上方": "Đẩy tảng đá này lên trên cưa bên phải",
    "小心中间的掉落": "Cẩn thận khi rơi ở giữa",
    "左上角红苹果留在最后吃": "Chừa táo đỏ góc trái trên ăn cuối",
    "左下角留两个苹果不要吃": "Chừa hai quả táo góc trái dưới, đừng ăn",
    "左下角的土块留着踏脚": "Chừa khối đất góc trái dưới làm bàn đạp",
    "左下角苹果先不吃": "Tạm đừng ăn táo góc trái dưới",
    "左右两边的苹果不要吃": "Đừng ăn táo ở hai bên",
    "左边两个苹果可以吃": "Có thể ăn hai quả táo bên trái",
    "左边先吃这两颗苹果": "Ăn hai quả táo này bên trái trước",
    "左边底下两个不要吃": "Đừng ăn hai quả dưới bên trái",
    "左边底下留一个踏脚": "Chừa một cái dưới bên trái làm bàn đạp",
    "左边留一个苹果踏脚": "Chừa một quả táo bên trái làm bàn đạp",
    "左边留一个苹果踮着最后吃": "Chừa một quả táo bên trái để kê và ăn cuối",
    "左边的最后吃": "Ăn bên trái cuối cùng",
    "左边的苹果全部吃完": "Ăn hết táo bên trái",
    "左边的苹果是陷阱": "Táo bên trái là bẫy",
    "左边的苹果用来垫着": "Dùng táo bên trái để kê",
    "左边的苹果需要先垫着": "Dùng táo bên trái kê trước",
    "左边竖排苹果先不要吃": "Tạm đừng ăn hàng táo dọc bên trái",
    "左边缺口的苹果用来踏脚": "Dùng táo ở chỗ hở bên trái làm bàn đạp",
    "左边苹果是陷阱": "Táo bên trái là bẫy",
    "左边苹果要先垫着最后吃": "Kê bằng táo bên trái trước, ăn cuối",
    "左边苹果踮着即可": "Chỉ cần kê bằng táo bên trái",
    "左边苹果需要从左边去吃": "Ăn táo bên trái từ phía trái",
    "帅气蛇为Z形垫着": "Để rắn ngầu hình Z làm vật kê",
    "帅气蛇做一个传送门内部形状": "Cho rắn ngầu tạo hình bên trong cổng dịch chuyển",
    "帅气蛇到右边平台顶起冰块": "Cho rắn ngầu sang nền phải nâng khối băng",
    "帅气蛇去补上缺口": "Cho rắn ngầu lấp chỗ hở",
    "帅气蛇吃完所有苹果": "Cho rắn ngầu ăn hết táo",
    "帅气蛇吃完苹果垫着": "Rắn ngầu ăn hết táo rồi kê",
    "帅气蛇吃完苹果推上去": "Rắn ngầu ăn hết táo rồi đẩy lên",
    "帅气蛇吃苹果走传送门": "Cho rắn ngầu ăn táo rồi qua cổng dịch chuyển",
    "帅气蛇吃苹果躺平": "Rắn ngầu ăn táo rồi nằm ngang",
    "帅气蛇在传送门下顶着冰块": "Cho rắn ngầu đỡ khối băng dưới cổng dịch chuyển",
    "帅气蛇垫着冰块和漂亮蛇": "Dùng rắn ngầu kê khối băng và rắn đẹp",
    "帅气蛇垫着延长平台": "Dùng rắn ngầu kê để nối dài nền",
    "帅气蛇当做平台垫着": "Dùng rắn ngầu làm nền kê",
    "帅气蛇立起来垫着": "Dựng rắn ngầu đứng lên để kê",
    "帅气蛇顶起冰块吃苹果": "Cho rắn ngầu nâng khối băng để ăn táo",
    "开始之前记住能走的格子": "Ghi nhớ các ô đi được trước khi bắt đầu",
    "往下吃掉毒苹果": "Đi xuống ăn táo độc",
    "往右推动断节身体": "Đẩy đoạn thân sang phải",
    "往右推动生成的断节身体": "Đẩy đoạn thân vừa tạo sang phải",
    "往右边堆1×2的石块踏脚": "Xếp khối đá 1×2 bên phải làm bàn đạp",
    "往右边把苹果吃完": "Sang phải ăn hết táo",
    "把3×1平台推到锯子上踏脚": "Đẩy nền 3×1 lên cưa làm bàn đạp",
    "把T形冰块推到平台左边": "Đẩy khối băng hình T sang trái nền",
    "把T形冰块推到石头右边": "Đẩy khối băng hình T sang phải tảng đá",
    "把⊃形平台推至下行毒刺处": "Đẩy nền hình ⊃ đến gai độc phía dưới",
    "把三个石头叠在一起吃苹果": "Chồng ba tảng đá để ăn táo",
    "把上面的冰块放到最上面": "Đặt khối băng phía trên lên cao nhất",
    "把下层石头堆到上层石头上方": "Xếp đá tầng dưới lên trên đá tầng trên",
    "把两个石头叠一起上去": "Chồng hai tảng đá để đi lên",
    "把冰块一步步的推向左边": "Đẩy khối băng từng bước sang trái",
    "把冰块推到中间缺口": "Đẩy khối băng vào chỗ hở giữa",
    "把冰块推到缺口位置": "Đẩy khối băng đến chỗ hở",
    "把冰块推成台阶": "Đẩy khối băng thành bậc thang",
    "把山推上去踮着": "Đẩy hình núi lên để kê",
    "把断掉的身体推到左边": "Đẩy thân bị đứt sang trái",
    "把断掉的身体推到左边踏脚": "Đẩy thân bị đứt sang trái làm bàn đạp",
    "把断节身体推到传送点上方": "Đẩy đoạn thân lên trên điểm dịch chuyển",
    "把桥梁推到梯形毒刺上": "Đẩy cây cầu lên gai độc hình thang",
    "把毒苹果生成的平台推到右边锯子处": "Đẩy nền tạo từ táo độc đến cưa bên phải",
    "把毒苹果生成的身体推到左边凹槽踏脚": "Đẩy thân tạo từ táo độc vào rãnh trái làm bàn đạp",
    "把生成的3×1平台推到锯子上": "Đẩy nền 3×1 vừa tạo lên cưa",
    "把生成的4×1平台往上推": "Đẩy nền 4×1 vừa tạo lên trên",
    "把生成的阶梯推到右边踏脚": "Đẩy bậc thang vừa tạo sang phải làm bàn đạp",
    "把石块推到左边凹槽踏脚": "Đẩy đá vào rãnh trái làm bàn đạp",
    "把石块推到左边毒刺上踏脚": "Đẩy đá lên gai độc bên trái làm bàn đạp",
    "把石块推到毒刺上": "Đẩy đá lên gai độc",
    "把石块推到锯子上踏脚": "Đẩy đá lên cưa làm bàn đạp",
    "把石头堆到左边1×2石头上": "Xếp đá lên khối đá 1×2 bên trái",
    "把石头堆到左边1×4石头上": "Xếp đá lên khối đá 1×4 bên trái",
    "把石头尽可能推到下层腾出空间": "Đẩy đá xuống thấp nhất có thể để lấy chỗ",
    "把石头往上推两格": "Đẩy đá lên hai ô",
    "把石头往前面推一格踏脚": "Đẩy đá tới trước một ô làm bàn đạp",
    "把石头往左推2格": "Đẩy đá sang trái 2 ô",
    "把石头推到下面平台踏脚": "Đẩy đá xuống nền dưới làm bàn đạp",
    "把石头推到右边平台踏脚": "Đẩy đá lên nền phải làm bàn đạp",
    "把石头推到右边毒刺上": "Đẩy đá lên gai độc bên phải",
    "把石头推到右边锯子上": "Đẩy đá lên cưa bên phải",
    "把石头推到右边锯子上踏脚": "Đẩy đá lên cưa bên phải làm bàn đạp",
    "把石头推到左侧尖刺处": "Đẩy đá đến chỗ gai bên trái",
    "把石头推到左侧毒刺踏脚": "Đẩy đá lên gai độc bên trái làm bàn đạp",
    "把石头推到左边锯子上": "Đẩy đá lên cưa bên trái",
    "把石头推到平台踏脚": "Đẩy đá lên nền làm bàn đạp",
    "把石头推到最左边": "Đẩy đá sang tận trái",
    "把石头推到毒刺处踏脚": "Đẩy đá đến gai độc làm bàn đạp",
    "把石头推到第三个苹果下面": "Đẩy đá xuống dưới quả táo thứ ba",
    "把石头推到苹果下面": "Đẩy đá xuống dưới táo",
    "把石头推到钉刺上": "Đẩy đá lên gai",
    "把石头推到锯子上面": "Đẩy đá lên trên cưa",
    "把石头推到锯子处踏脚": "Đẩy đá đến cưa làm bàn đạp",
    "把石头推回右边踏脚": "Đẩy đá về bên phải làm bàn đạp",
    "把石头推往凹槽处": "Đẩy đá vào rãnh",
    "把石头顶到苹果上面": "Nâng đá lên trên táo",
    "把这两个石块推到锯子上": "Đẩy hai tảng đá này lên cưa",
    "把这两块石头推到右边苹果上": "Đẩy hai tảng đá này lên táo bên phải",
    "把这两块石头推到苹果上": "Đẩy hai tảng đá này lên táo",
    "把这两块石头推到锯子上": "Đẩy hai tảng đá này lên cưa",
    "把这两颗石头堆到右边踏脚": "Xếp hai tảng đá này bên phải làm bàn đạp",
    "把这个毒苹果生成的1✖3平台推到右边踏脚": "Đẩy nền 1✖3 tạo từ táo độc này sang phải làm bàn đạp",
    "把这个石头往右边推一格踏脚": "Đẩy tảng đá này sang phải một ô làm bàn đạp",
    "把这个石头推到锯子上踏脚": "Đẩy tảng đá này lên cưa làm bàn đạp",
    "把这块石头往左推": "Đẩy tảng đá này sang trái",
    "把这块石头往左推踏脚": "Đẩy tảng đá này sang trái làm bàn đạp",
    "把这块石头推到右边毒刺上": "Đẩy tảng đá này lên gai độc bên phải",
    "把这块石头推到右边踏脚": "Đẩy tảng đá này sang phải làm bàn đạp",
    "把这块石头推到左侧锯子上踏脚": "Đẩy tảng đá này lên cưa bên trái làm bàn đạp",
    "把这块石头推到左边平台踏脚": "Đẩy tảng đá này lên nền trái làm bàn đạp",
    "把这块石头推到左边毒刺上": "Đẩy tảng đá này lên gai độc bên trái",
    "把这块石头推到左边毒刺踏脚": "Đẩy tảng đá này lên gai độc bên trái làm bàn đạp",
    "把这块石头推进凹槽": "Đẩy tảng đá này vào rãnh",
    "把这颗石头往右边平台推": "Đẩy tảng đá này về nền bên phải",
    "把顶上的石头推到上层右边": "Đẩy đá trên cùng sang phải tầng trên",
    "拐角留一个苹果踏脚": "Chừa một quả táo ở góc làm bàn đạp",
    "拐角留个苹果踏脚": "Chừa quả táo ở góc làm bàn đạp",
    "拐角的苹果不要吃": "Đừng ăn táo ở góc",
    "掉头回去吃掉右边的": "Quay đầu về ăn quả bên phải",
    "接住石头别掉下去": "Đỡ lấy đá, đừng để rơi",
    "推一个石头用来踏脚": "Đẩy một tảng đá làm bàn đạp",
    "推到右侧位置": "Đẩy đến vị trí bên phải",
    "推动平台前往传送门处": "Đẩy nền đến cổng dịch chuyển",
    "推掉最底下的石块": "Đẩy tảng đá dưới cùng xuống",
    "推着漂亮蛇上去": "Đẩy rắn đẹp lên trên",
    "搭成桥梁形状然后吃毒苹果": "Dựng thành hình cầu rồi ăn táo độc",
    "最上面的苹果用来垫着": "Dùng táo trên cùng để kê",
    "最下层的苹果不要吃": "Đừng ăn táo tầng dưới cùng",
    "最下面一排苹果不要直接吃": "Đừng ăn ngay hàng táo dưới cùng",
    "最右边的苹果最后吃": "Ăn quả táo ngoài cùng bên phải cuối",
    "最右边的苹果留着踏脚": "Chừa quả táo ngoài cùng bên phải làm bàn đạp",
    "最后一个毒苹果把身体断成L型": "Dùng táo độc cuối làm thân đứt thành hình L",
    "最后吃下层苹果": "Ăn táo tầng dưới cuối cùng",
    "最后吃掉红辣椒": "Ăn ớt đỏ cuối cùng",
    "最后吃掉这颗苹果": "Ăn quả táo này cuối cùng",
    "最后要垫着石头出去": "Cuối cùng kê đá để đi ra",
    "最左边的苹果不能吃": "Không được ăn quả táo ngoài cùng bên trái",
    "最底下一排苹果不要吃": "Đừng ăn hàng táo dưới cùng",
    "最底下的双头果不能吃": "Không được ăn quả hai đầu dưới cùng",
    "最底下的苹果不能吃": "Không được ăn táo dưới cùng",
    "毒苹果可以吃完": "Có thể ăn hết táo độc",
    "毒苹果断掉的身体推到毒刺": "Đẩy thân bị đứt do táo độc đến gai độc",
    "毒苹果边上一排苹果吃完": "Ăn hết hàng táo cạnh táo độc",
    "注意传送后的固定姿势": "Chú ý tư thế cố định sau khi dịch chuyển",
    "注意吃完苹果从哪里过去": "Chú ý đường đi sau khi ăn hết táo",
    "注意头的朝向": "Chú ý hướng đầu",
    "注意掉头方向": "Chú ý hướng quay đầu",
    "注意掉落方向": "Chú ý hướng rơi",
    "注意要从上面绕去吃最后一个苹果": "Vòng từ trên để ăn quả táo cuối",
    "注意要从最右边上去": "Đi lên từ ngoài cùng bên phải",
    "注意调整方向后掉落": "Chỉnh hướng rồi mới rơi",
    "注意调整方向掉落": "Chú ý chỉnh hướng khi rơi",
    "注意转弯方式": "Chú ý cách rẽ",
    "漂亮蛇为Z形垫着": "Để rắn đẹp hình Z làm vật kê",
    "漂亮蛇从下面举高帅气蛇": "Cho rắn đẹp nâng rắn ngầu từ dưới",
    "漂亮蛇做一个直立形": "Cho rắn đẹp tạo dáng thẳng đứng",
    "漂亮蛇先吃中间和右边苹果": "Cho rắn đẹp ăn táo giữa và bên phải trước",
    "漂亮蛇先在下面垫着": "Cho rắn đẹp kê ở dưới trước",
    "漂亮蛇先垫着帅气蛇上去": "Cho rắn đẹp kê để rắn ngầu lên trước",
    "漂亮蛇到右边搭建落脚点": "Cho rắn đẹp sang phải tạo điểm đặt chân",
    "漂亮蛇吃完苹果上来垫着": "Rắn đẹp ăn hết táo rồi lên kê",
    "漂亮蛇吃完苹果到右边": "Rắn đẹp ăn hết táo rồi sang phải",
    "漂亮蛇吃完苹果后到右边": "Sau khi ăn hết táo, cho rắn đẹp sang phải",
    "漂亮蛇吃完苹果后到左边": "Sau khi ăn hết táo, cho rắn đẹp sang trái",
    "漂亮蛇吃完苹果后回来垫着": "Rắn đẹp ăn hết táo rồi quay lại kê",
    "漂亮蛇吃完苹果后垫着": "Rắn đẹp ăn hết táo rồi kê",
    "漂亮蛇在凸起处再垫着": "Cho rắn đẹp kê thêm ở chỗ nhô lên",
    "漂亮蛇在石头上垫着": "Cho rắn đẹp kê trên đá",
    "漂亮蛇垫着帅气蛇上去吃苹果": "Cho rắn đẹp kê để rắn ngầu lên ăn táo",
    "漂亮蛇平着卡到那个缺口": "Đặt rắn đẹp nằm ngang kẹt vào chỗ hở đó",
    "漂亮蛇把帅气蛇当平台": "Cho rắn đẹp dùng rắn ngầu làm nền",
    "漂亮蛇把帅气蛇推出来": "Cho rắn đẹp đẩy rắn ngầu ra",
    "漂亮蛇挡在下方缺口处": "Cho rắn đẹp chặn chỗ hở phía dưới",
    "漂亮蛇绕到右边顶着": "Cho rắn đẹp vòng sang phải để đỡ",
    "漂亮蛇顶着帅气蛇上去": "Cho rắn đẹp đỡ rắn ngầu đi lên",
    "生成一个倒着的L形平台": "Tạo một nền hình L lộn ngược",
    "生成一个倒着的大U形状": "Tạo một hình U lớn lộn ngược",
    "生成一个倒着的小U形状": "Tạo một hình U nhỏ lộn ngược",
    "生成一个山的形状": "Tạo hình ngọn núi",
    "生成一个很长的平台": "Tạo một nền thật dài",
    "生成一个横着的一": "Tạo hình số 1 nằm ngang",
    "生成一个船形平台": "Tạo nền hình con thuyền",
    "生成一个驾驶舱的形状": "Tạo hình buồng lái",
    "生成平台后吃掉剩余苹果": "Tạo nền xong rồi ăn số táo còn lại",
    "生成的平台推到右边锯子上踏脚": "Đẩy nền vừa tạo lên cưa bên phải làm bàn đạp",
    "用一个合适的形状飞到传送门旁边": "Dùng hình phù hợp để bay đến cạnh cổng dịch chuyển",
    "用两个平台上前往最上层": "Dùng hai nền để lên tầng cao nhất",
    "用毒苹果生成2×1平台踏脚": "Dùng táo độc tạo nền 2×1 làm bàn đạp",
    "用毒苹果生成⊃型平台": "Dùng táo độc tạo nền hình ⊃",
    "用毒苹果生成平台推到右边尖刺处踏脚": "Dùng táo độc tạo nền, đẩy đến gai phải làm bàn đạp",
    "用毒苹果生成特殊形状平台": "Dùng táo độc tạo nền hình đặc biệt",
    "用毒苹果生成的4✖1平台推到右边锯子上": "Đẩy nền 4✖1 tạo từ táo độc lên cưa bên phải",
    "用毒苹果生成的平台推到锯子上踏脚": "Đẩy nền tạo từ táo độc lên cưa làm bàn đạp",
    "用毒苹果生成的平台破掉碎石块": "Dùng nền tạo từ táo độc phá đá vụn",
    "用毒苹果生成的平台踏脚": "Dùng nền tạo từ táo độc làm bàn đạp",
    "用毒苹果踏脚": "Dùng táo độc làm bàn đạp",
    "用石块在右边搭建1×3高台踏脚": "Dùng đá dựng đài 1×3 bên phải làm bàn đạp",
    "用石块踏脚上右边高台": "Dùng đá làm bàn đạp lên đài phải",
    "用石头把最下面两排铺满": "Dùng đá lấp kín hai hàng dưới cùng",
    "用石头铺一个平台": "Dùng đá xếp thành một nền",
    "用辣椒烧掉一个毒苹果": "Dùng ớt đốt một quả táo độc",
    "用这两个石块踏脚": "Dùng hai tảng đá này làm bàn đạp",
    "用这两块石头踏脚": "Dùng hai tảng đá này làm bàn đạp",
    "用这两颗苹果踏脚破掉石块": "Dùng hai quả táo này làm bàn đạp để phá đá",
    "用这个毒苹果生成的平台推到锯子上": "Đẩy nền tạo từ táo độc này lên cưa",
    "用这个毒苹果踏脚": "Dùng quả táo độc này làm bàn đạp",
    "用这个石头上到上层": "Dùng tảng đá này để lên tầng trên",
    "用这个石头踏脚吃掉右边苹果": "Dùng đá này làm bàn đạp để ăn táo bên phải",
    "用这个苹果踏脚吃掉右侧苹果": "Dùng táo này làm bàn đạp để ăn táo bên phải",
    "用这个苹果踏脚，吃完上层苹果再吃掉它": "Dùng táo này làm bàn đạp, ăn hết táo trên rồi mới ăn nó",
    "用这个辣椒踏脚": "Dùng quả ớt này làm bàn đạp",
    "用这四个苹果踏脚": "Dùng bốn quả táo này làm bàn đạp",
    "用这块石头挡住左边尖刺": "Dùng tảng đá này chặn gai bên trái",
    "用这块石头挡住左边毒刺": "Dùng tảng đá này chặn gai độc bên trái",
    "用这块石头搭到毒刺上": "Đặt tảng đá này lên gai độc",
    "用这块石头搭建1×2的高台踏脚": "Dùng đá này dựng đài 1×2 làm bàn đạp",
    "用这颗毒苹果踏脚": "Dùng quả táo độc này làm bàn đạp",
    "用这颗苹果踏脚吃完其他所有苹果": "Dùng táo này làm bàn đạp để ăn hết số táo khác",
    "留一个侧面的苹果垫着": "Chừa một quả táo bên cạnh để kê",
    "留一个破砖块回头踏脚": "Chừa một viên gạch vỡ làm bàn đạp khi quay lại",
    "留一个破砖块踏脚": "Chừa một viên gạch vỡ làm bàn đạp",
    "留两个踏脚的苹果": "Chừa hai quả táo làm bàn đạp",
    "留四个苹果用来踏脚": "Chừa bốn quả táo làm bàn đạp",
    "留最左边的一颗苹果": "Chừa quả táo ngoài cùng bên trái",
    "留这两个苹果踏脚": "Chừa hai quả táo này làm bàn đạp",
    "留这个格子踏脚": "Chừa ô này làm bàn đạp",
    "直接掉头回来": "Quay đầu trở lại ngay",
    "石块要推到下面垫着": "Đẩy đá xuống dưới để kê",
    "石块要盖住尖刺": "Dùng đá che gai",
    "石头可以盖住尖刺": "Có thể dùng đá che gai",
    "石头垫着才能上去": "Phải kê đá mới lên được",
    "石头需要推到最左边踏脚": "Đẩy đá sang tận trái làm bàn đạp",
    "破掉脚底下的砖块": "Phá viên gạch dưới chân",
    "第一个吃左边的苹果": "Ăn táo bên trái đầu tiên",
    "第一层中间的砖块往上顶": "Đẩy viên gạch giữa tầng một lên",
    "第一层要吃三苹果": "Ăn ba quả táo ở tầng một",
    "第一排吃到缺口往上": "Ăn hàng đầu đến chỗ hở rồi đi lên",
    "紫苹果要吃完": "Ăn hết táo tím",
    "绕上去吃上面的苹果": "Vòng lên ăn táo phía trên",
    "绕到左边吃最下面的苹果": "Vòng sang trái ăn táo dưới cùng",
    "绕回中间吃剩下的苹果": "Vòng về giữa ăn số táo còn lại",
    "苹果全部吃完": "Ăn hết toàn bộ táo",
    "苹果要掉头以后再吃": "Quay đầu rồi mới ăn táo",
    "苹果需要都吃完": "Cần ăn hết táo",
    "蛇头贴近毒刺再吃其他苹果": "Đưa đầu rắn sát gai độc rồi ăn táo khác",
    "要垫着石头上去": "Kê đá để đi lên",
    "调整出一个能吃辣椒的姿势": "Chỉnh tư thế để ăn được ớt",
    "调整好角度才能躲开尖刺": "Chỉnh đúng góc để tránh gai",
    "调整方向吃苹果": "Chỉnh hướng để ăn táo",
    "调整方向垫着石头过去": "Chỉnh hướng, kê đá để đi qua",
    "调整方向垫石头上去": "Chỉnh hướng, kê đá để đi lên",
    "调整方向落下": "Chỉnh hướng rồi rơi xuống",
    "贴着石块往上吃": "Men theo đá đi lên ăn",
    "转个弯再吃苹果": "Rẽ một vòng rồi ăn táo",
    "这两个苹果先不吃": "Tạm đừng ăn hai quả táo này",
    "这两个苹果用来踏脚": "Dùng hai quả táo này làm bàn đạp",
    "这个石头没有用": "Tảng đá này không dùng được",
    "这个苹果不能吃": "Không được ăn quả táo này",
    "这五个苹果不能吃": "Không được ăn năm quả táo này",
    "这四颗毒苹果不要吃": "Đừng ăn bốn quả táo độc này",
    "里面六个苹果吃完": "Ăn hết sáu quả táo bên trong",
    "里面的苹果都吃完": "Ăn hết táo bên trong",
    "里面苹果只吃一边": "Chỉ ăn táo một bên ở trong",
    "需要两块石头叠加垫着出去": "Chồng hai tảng đá để kê đường ra",
    "需要到右边调整方向": "Sang phải để chỉnh hướng",
    "需要垫着苹果推石头": "Kê bằng táo để đẩy đá",
    "需要多次调整方向": "Cần chỉnh hướng nhiều lần",
    "需要头朝上落地": "Cần tiếp đất với đầu hướng lên",
    "需要石头盖住尖刺": "Cần dùng đá che gai",
    "顶上一排苹果可以先吃": "Có thể ăn hàng táo trên cùng trước",
    "顶上断掉的身体推下去": "Đẩy thân bị đứt trên cùng xuống",
    "顶上留一个苹果踏脚": "Chừa một quả táo trên cùng làm bàn đạp",
    "顶上留个苹果踏脚": "Chừa quả táo trên cùng làm bàn đạp",
    "顶上的石头往右推": "Đẩy đá trên cùng sang phải",
    "黑洞下面是陷阱": "Bên dưới hố đen là bẫy",

    /* --- display UI sweep --- */
    "按钮位置": "Vị trí nút",
    "开启数字显示": "Bật hiện số",
    "加载黑洞": "Đang tải hố đen",
    "加载石块": "Đang tải đá",
    "加载尖刺": "Đang tải gai",
    "加载小蛇皮肤": "Đang tải skin rắn",
    "加载小蛇表情": "Đang tải biểu cảm rắn",
    "加载小蛇动作": "Đang tải động tác rắn",
    "加载蛇皮技能": "Đang tải skill rắn",
    "小蛇正在初始化": "Rắn đang khởi tạo",
    "苹果正在初始化": "Táo đang khởi tạo",
    "苹果初始化完毕": "Khởi tạo táo xong",
    "初始化": "Khởi tạo",
    "正在初始化": "Đang khởi tạo",
    "准备进入贪吃的苹果蛇世界": "Chuẩn bị vào thế giới Rắn Ăn Táo",
    "正在连接服务器": "Đang kết nối server",
    "与服务器断开连接，正在重连": "Mất kết nối server, đang kết nối lại",
    "正在认证…": "Đang xác thực…",
    "正在加载画册": "Đang tải album",
    "   《健康游戏忠告》\n抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。": "   《Lời khuyên chơi game》\nTừ chối game xấu / bản lậu. Tự bảo vệ, cảnh giác lừa đảo.\nChơi vừa phải tốt cho trí óc; nghiện game hại sức. Sắp xếp thời gian, sống lành mạnh.",
    "《健康游戏忠告》": "《Lời khuyên chơi game》",
    "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。": "Từ chối game xấu / bản lậu. Tự bảo vệ, cảnh giác lừa đảo.",
    "适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。": "Chơi vừa phải tốt cho trí óc; nghiện game hại sức. Sắp xếp thời gian, sống lành mạnh.",

    // --- batch display-cjk-miss (player-facing) ---
    "6.打完不要走，我要跟你三局两胜，五局三胜!": "6. Đánh xong đừng đi — best of 3, best of 5!",
    "检测到该用户在修复配置中，发放补偿奖励": "Phát hiện tài khoản cần bù — đang phát thưởng.",
    "4.不是吧铁子，摆这么多刺刁难我？": "4. Thật á bro, bày nhiều gai vậy để khó mình?",
    "1.快点啊，等的我草儿都枯了！": "1. Nhanh lên, đợi cỏ héo hết rồi!",
    "2.行不行啊，不行我帮你设计。": "2. Được không? Không được để mình thiết kế.",
    "3.你这设计不太行，等我虐你。": "3. Thiết kế vậy yếu — để mình dạy cho!",
    "身体必须与头部或已有身体相邻": "Thân phải kề đầu hoặc thân đã có.",
    "8.我编辑好了！决斗吧！": "8. Edit xong! Quyết đấu thôi!",
    "推动成功，自己也移动": "Đẩy OK, bản thân cũng di chuyển",
    "动态宝箱视频分享成功": "Chia sẻ QC rương động OK!",
    "5.你这苹果保熟吗？": "5. Táo này chín thật không?",
    "退出游戏，返回大厅": "Thoát game, về sảnh",
    "重新开始当前关卡": "Chơi lại màn hiện tại",
    "从大厅返回主菜单": "Từ sảnh về menu chính",
    "开始发放补偿奖励": "Bắt đầu phát thưởng bù",
    "用户数据恢复完成": "Khôi phục data xong",
    "宝箱视频分享成功": "Chia sẻ QC rương OK!",
    "获取关卡补偿福利": "Nhận quà bù màn",
    "获取皮肤补偿福利": "Nhận quà bù skin",
    "我的累计过关次数": "Tổng số màn đã phá",
    "添加桌面成功": "Thêm desktop OK",
    "添加桌面失败": "Thêm desktop lỗi",
    "通关成功": "Phá màn thành công",
    "通关失败": "Phá màn thất bại",
    "退出游戏": "Thoát game",
    "失败界面": "Màn thất bại",
    "打开提示": "Mở gợi ý",
    "推动失败": "Đẩy thất bại",
    "广告次数": "Số lần QC",
    "更新提示": "Cập nhật gợi ý",
    "爆弹开关": "Công tắc bom",
    "体力食物": "Thức ăn thể lực",
    "热门关卡": "Màn hot",
    "搜索关卡": "Tìm màn",
    "坚毅铜蛇": "Rắn Đồng Kiên",
    "勇猛银蛇": "Rắn Bạc Dũng",
    "稳健金蛇": "Rắn Vàng Vững",
    "璀璨钻蛇": "Rắn Kim Cương",
    "最强蛇王": "Rắn Vương mạnh nhất",

    // --- rescan supplement (player UI) ---
    "视频拉取失败,分享游戏也可领取视频奖励": "Tải QC lỗi — chia sẻ game cũng nhận thưởng QC",
    "更新版本信息加载失败，即将跳过更新": "Tải thông tin bản mới lỗi — bỏ qua cập nhật",
    "未匹配到本地版本文件，即将跳过更新": "Không khớp file phiên bản local — bỏ qua cập nhật",
    "新版本已经准备好，是否重启小游戏？": "Bản mới sẵn sàng — khởi động lại game?",
    "远程版本匹配加载失败，即将跳过更新": "Tải khớp bản remote lỗi — bỏ qua cập nhật",
    "未找到本地版本文件，即将跳过更新": "Không thấy file phiên bản local — bỏ qua cập nhật",
    "此功能需要授权登录账号才可使用": "Cần đăng nhập ủy quyền để dùng tính năng này",
    "非法盗用游戏资源将受到法律制裁": "Đạo tài nguyên game sẽ bị xử lý theo pháp luật",
    "看广告设置接下来的盲盒出什么": "Xem QC để chọn hộp bí tiếp theo",
    "闯关数已经超过#，炫耀一下吧。": "Số màn phá đã vượt # — khoe một phát đi.",
    "我已经闯到#关了，等你来挑战。": "Mình đã tới màn # — chờ bạn thách đấu.",
    "已跨过重置点，需要重置体力": "Đã qua mốc reset — cần reset thể lực",
    "未跨过重置点，无需重置": "Chưa qua mốc reset — không cần reset",
    "观看视屏当天解锁模式：": "Xem QC mở mode hôm nay:",
    "观看视屏当天解锁模式": "Xem QC mở mode hôm nay",
    "广告显示错误,错误原因：": "Lỗi hiện QC, lý do:",
    "订阅失败, 错误详情:": "Đăng ký lỗi, chi tiết:",
    "保存失败，未获取到数据": "Lưu lỗi — không lấy được data",
    "获取失败，未获取到数据": "Lấy lỗi — không có data",
    "展示分享好友奖励页面": "Hiện trang thưởng chia sẻ bạn",
    "一键添加到我的小程序": "Thêm nhanh vào mini app",
    "看视频自助餐进化大爆发": "QC buffet tiến hóa bùng nổ",
    "拼图模式获取苹果道具": "Mode xếp hình nhận táo",
    "第二赛季王者段位奖励": "Thưởng rank Vương giả mùa 2",
    "之后可以看下一次视频": "Sau đó có thể xem QC tiếp",
    "提示判断：请添加完整的蛇\n(至少两节：头+尾)": "Gợi ý: thêm đủ thân rắn\n(ít nhất 2 đốt: đầu+đuôi)",
    "步解题思路,\n探索通关趣味性！": "bước gợi ý,\nkhám phá cách phá màn!",

  };

  var LONG_PARTIAL = [
    "观看#次视频即可获得24小时无限体力!",
    "分享好友即可获得体力!",
    "完整观看视频才能获得奖励哦",
    "观看视频获得奖励",
    "一个视频 三倍回报",
    "看视频提前解锁关卡",
    "看广告获取提示",
    "通过普通玩法20关解锁",
    "现在返回将消耗一次制作次数哦",
    "请先完成前面关卡",
    "请先通关前面的关卡",
    "请适度试玩，还有其他彩蛋关卡及自创玩法敬请体验",
    "看提示会被视为认输，你确定要看吗？",
    "挑战自己，和朋友一起突破所有难关！",
    "这么简单还看提示，隔壁小孩刚过！",
    "看视频查看今日挑战关卡缩略图",
    "观看视屏进入趣味玩法模式：",
    "七天登录送皮肤"
  ].sort(function (a, b) { return b.length - a.length; });

  function hasCjk(s) {
    return /[\u4e00-\u9fff]/.test(s);
  }

  function tr(s) {
    if (s == null) return s;
    var str = String(s);
    if (!str) return str;
    if (MAP[str] != null) return MAP[str];

    var out = str;

    // Numbered / templated full-phrase rewrites
    out = out.replace(/增加(\d+)个<苹果>道具/g, 'Thêm $1 quả táo');
    out = out.replace(/(\d+)天后奖励重置/g, 'Còn $1 ngày sẽ reset thưởng');
    out = out.replace(/再闯过(\d+)关即可领取奖励/g, 'Còn phá thêm $1 màn để nhận thưởng');
    out = out.replace(/左脚踩右脚\s*(\d+)/g, 'Chồng chân $1');
    out = out.replace(/彩蛋关卡[:：]?\s*(\d+)/g, 'Màn trứng: $1');
    out = out.replace(/双头彩蛋[:：]?\s*(\d+)/g, 'Trứng 2 đầu: $1');
    out = out.replace(/视频\((\d+)\/(\d+)\)/g, 'QC($1/$2)');
    out = out.replace(/成功解锁\s*/g, 'Đã mở ');
    out = out.replace(/(\d+)分钟后到期/g, 'Hết hạn sau $1 phút');
    out = out.replace(/观看一次视频可以解锁(\d+)次制作关卡体验。/g, 'Xem 1 QC mở $1 lượt tạo màn.');
    out = out.replace(/是否要看视频解锁当天(.+)/g, function (_, mode) {
      return 'Xem QC mở ' + (MAP[mode] || mode) + ' hôm nay?';
    });
    out = out.replace(/是否要看视频进入(.+)/g, function (_, mode) {
      return 'Xem QC vào ' + (MAP[mode] || mode) + '?';
    });
    out = out.replace(/保存会覆盖之前画作,是否保存<?(.*)/g, function (_, rest) {
      return 'Lưu sẽ ghi đè tranh cũ, lưu chứ?' + (rest ? ' ' + rest : '');
    });
    out = out.replace(/删除后不可恢复,是否删除<?(.*)/g, function (_, rest) {
      return 'Xóa không hoàn tác được — xóa chứ?' + (rest ? ' ' + rest : '');
    });
    out = out.replace(/没有找到该画作<?(.*)/g, function (_, rest) {
      return 'Không tìm thấy tranh' + (rest ? ' ' + rest : '');
    });
    out = out.replace(/匹配房间失败:?/g, 'Ghép phòng thất bại:');
    out = out.replace(/游戏资源丢失,请尝试重启游戏或联系客服解决:?/g, 'Mất tài nguyên game, thử mở lại hoặc liên hệ hỗ trợ:');
    out = out.replace(/页面加载超时,请尝试重启游戏或联系客服解决:?/g, 'Tải trang quá lâu, thử mở lại hoặc liên hệ hỗ trợ:');
    out = out.replace(/获得双倍金币(\d+)奖励/g, 'Nhận thưởng vàng x2 (+$1)');
    out = out.replace(/已经获得(\d+)金币/g, 'Đã nhận +$1 vàng');
    out = out.replace(/商店看视频解锁皮肤[:：]?\s*(.*)/g, function (_, name) {
      return 'Shop: QC mở skin' + (name ? ': ' + (MAP[name] || name) : '');
    });
    out = out.replace(/看视频解锁皮肤[:：]?\s*(.*)/g, function (_, name) {
      return 'QC mở skin' + (name ? ': ' + (MAP[name] || name) : '');
    });
    out = out.replace(/第(\d+)天/g, 'Ngày $1');
    out = out.replace(/第\s*(\d+)\s*关/g, 'Màn $1');
    out = out.replace(/第\s*(\d+)\s*层/g, 'Tầng $1');
    out = out.replace(/第(\d+)关已解锁/g, 'Đã mở màn $1!');
    out = out.replace(/第(\d+)名/g, 'Hạng $1');
    // TipAdPage / StepTipAdPage: "提供{N}步解题思路" (must run before residual MAP)
    out = out.replace(/提供(\d+)步解题思路[，,]\s*\n?探索通关趣味性！/g,
      'Gợi ý tối đa $1 bước,\nkhám phá cách phá màn!');
    out = out.replace(/提供(\d+)步解题思路/g, 'Gợi ý $1 bước');
    // Wrong-step tip toasts after QC gợi ý (头/尾巴 × hướng)
    out = out.replace(/(头|尾巴)往(上|右|下|左)!!,我是说\1往\2!!!/g, function (_, part, dir) {
      var p = part === '头' ? 'Đầu' : 'Đuôi';
      var p2 = part === '头' ? 'đầu' : 'đuôi';
      var d = { 上: 'lên', 右: 'phải', 下: 'xuống', 左: 'trái' }[dir] || dir;
      return p + ' đi ' + d + '!!, bảo ' + p2 + ' đi ' + d + '!!!';
    });
    out = out.replace(/往(上|右|下|左)!M3\?/g, function (_, dir) {
      var d = { 上: 'Lên', 右: 'Phải', 下: 'Xuống', 左: 'Trái' }[dir] || dir;
      return d + '! M3?';
    });
    out = out.replace(/非得往(上|右|下|左)，\1边儿到底有谁在啊/g, function (_, dir) {
      var d = { 上: 'lên', 右: 'phải', 下: 'xuống', 左: 'trái' }[dir] || dir;
      return 'Cứ phải đi ' + d + ', phía đó có ai vậy?';
    });
    // skillConfig descs (UnlockSkinPage / SkillUpPage / InGame)
    out = out.replace(/召唤((?:<[^>]*>)*)(\d+)((?:<\/[^>]*>)*)颗苹果随机落在地面上/g,
      'Triệu hồi $1$2$3 táo rơi ngẫu nhiên xuống đất');
    out = out.replace(/召唤((?:<[^>]*>)*)(\d+)((?:<\/[^>]*>)*)个金币随机落在地面上/g,
      'Triệu hồi $1$2$3 vàng rơi ngẫu nhiên xuống đất');
    out = out.replace(/如果尾部有空间,可以连续长出\s*((?:<[^>]*>)*)(\d+)((?:<\/[^>]*>)*)\s*个尾巴/g,
      'Nếu đuôi còn chỗ, có thể mọc thêm $1$2$3 đoạn đuôi');
    // SkillUpPage inserts space + color tags around value
    out = out.replace(/召唤\s*((?:<[^>]*>)+)\s*(\d+)\s*((?:<\/[^>]*>)+)\s*颗苹果随机落在地面上/g,
      'Triệu hồi $1$2$3 táo rơi ngẫu nhiên xuống đất');
    out = out.replace(/召唤\s*((?:<[^>]*>)+)\s*(\d+)\s*((?:<\/[^>]*>)+)\s*个金币随机落在地面上/g,
      'Triệu hồi $1$2$3 vàng rơi ngẫu nhiên xuống đất');
    out = out.replace(/金币[x×](\d+)/g, 'Vàng x$1');
    out = out.replace(/体力[x×](\d+)/g, 'Thể lực x$1');
    out = out.replace(/提示道具[x×](\d+)/g, 'Gợi ý x$1');
    out = out.replace(/提示次数[：:]\s*(\d+)/g, 'Gợi ý còn: $1');
    out = out.replace(/获得(\d+)次提示次数/g, 'Nhận +$1 gợi ý!');
    out = out.replace(/获得(\d+)点体力奖励/g, 'Nhận +$1 thể lực!');
    out = out.replace(/通过(.+?)(\d+)关后解锁/g, function (_, mode, n) {
      var m = MAP[mode] || mode;
      return 'Phá ' + n + ' màn ' + m + ' để mở';
    });
    out = out.replace(/观看#次视频即可获得24小时无限体力!/g,
      'Xem # lần QC để nhận thể lực vô hạn 24h!');
    out = out.replace(/成功领取皮肤\[(.+?)\]/g, 'Nhận skin [$1] OK!');

    if (MAP[out] != null) return MAP[out];
    if (!hasCjk(out)) return out;

    for (var i = 0; i < LONG_PARTIAL.length; i++) {
      var k = LONG_PARTIAL[i];
      if (k.length < 4) continue;
      if (out.indexOf(k) === -1) continue;
      var v = MAP[k];
      if (v == null) continue;
      out = out.split(k).join(v);
    }

    // Residual: replace remaining CJK MAP keys inside rich text / templates
    // Never rewrite tip/path/item type keys; never rewrite text inside <...>
    if (hasCjk(out)) {
      var RESIDUAL_SKIP = {
        苹果: 1,
        格子: 1,
        毒苹果: 1
      };
      if (!tr._keys) {
        tr._keys = Object.keys(MAP)
          .filter(function (key) {
            return (
              key.length >= 2 &&
              /[\u4e00-\u9fff]/.test(key) &&
              !RESIDUAL_SKIP[key]
            );
          })
          .sort(function (a, b) {
            return b.length - a.length;
          });
      }
      for (var j = 0; j < tr._keys.length; j++) {
        var mk = tr._keys[j];
        if (out.indexOf(mk) === -1) continue;
        // Replace only occurrences NOT inside <...>
        var parts = out.split(/<[^>]*>/);
        var tags = out.match(/<[^>]*>/g) || [];
        var changed = false;
        for (var pi = 0; pi < parts.length; pi++) {
          if (parts[pi].indexOf(mk) === -1) continue;
          parts[pi] = parts[pi].split(mk).join(MAP[mk]);
          changed = true;
        }
        if (!changed) continue;
        var rebuilt = parts[0] || '';
        for (var ti = 0; ti < tags.length; ti++) {
          rebuilt += tags[ti] + (parts[ti + 1] || '');
        }
        out = rebuilt;
        if (!hasCjk(out)) break;
      }
    }

    if (MAP[out] != null) return MAP[out];
    return out;
  }

  var installed = false;

  function ensureLabelOverlay(parent, name, text, y, fontSize) {
    if (!parent || !parent.isValid) return;
    var node = parent.getChildByName(name);
    if (!node) {
      node = new cc.Node(name);
      parent.addChild(node);
      node.addComponent(cc.Label);
      node.setSiblingIndex(parent.childrenCount - 1);
    }
    var lb = node.getComponent(cc.Label);
    if (!lb) lb = node.addComponent(cc.Label);
    lb.string = text;
    lb.fontSize = fontSize || 28;
    lb.lineHeight = (fontSize || 28) + 4;
    lb.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    lb.verticalAlign = cc.Label.VerticalAlign.CENTER;
    if (lb.overflow != null) lb.overflow = cc.Label.Overflow.SHRINK;
    node.y = y || 0;
    node.x = 0;
    node.color = cc.Color.WHITE;
  }

  function findNodeByName(root, name) {
    if (!root || !name) return null;
    if (root.name === name) return root;
    for (var i = 0; i < root.childrenCount; i++) {
      var f = findNodeByName(root.children[i], name);
      if (f) return f;
    }
    return null;
  }

  function hideSpriteShowLabel(spriteNode, overlayName, text, fontSize) {
    if (!spriteNode || !spriteNode.isValid) return;
    try {
      spriteNode.opacity = 0;
    } catch (e0) { /* ignore */ }
    var parent = spriteNode.parent || spriteNode;
    var y = spriteNode.y || 0;
    ensureLabelOverlay(parent, overlayName, text, y, fontSize || 34);
    var ov = parent.getChildByName(overlayName);
    if (ov) {
      ov.x = spriteNode.x || 0;
      ov.y = y;
      try {
        ov.color = new cc.Color(255, 255, 255, 255);
      } catch (e1) {
        ov.color = cc.Color.WHITE;
      }
    }
  }

  function overlaySpriteTitles(root) {
    if (!root || !cc) return;
    try {
      var sign = findNodeByName(root, 'SignPage');
      if (sign) {
        // Title is baked into BG image — overlay VI text near top
        ensureLabelOverlay(sign, 'gv_vi_sign_title', 'Đăng nhập 7 ngày nhận skin', 280, 30);
        var getBtn = sign.getChildByName('btGet') || cc.find('btGet', sign);
        if (getBtn) {
          ensureLabelOverlay(getBtn, 'gv_vi_get', 'Nhận', 0, 32);
        }
      }

      // FeiTianModePage: purple title is PNG (飞天模式) — hide sprite, overlay Label
      var feiTian = findNodeByName(root, 'FeiTianModePage');
      if (feiTian) {
        var titleSp =
          feiTian.getChildByName('feitianTitle') ||
          findNodeByName(feiTian, 'feitianTitle');
        if (titleSp) {
          hideSpriteShowLabel(titleSp, 'gv_vi_feitian_title', 'Chế độ Bay', 36);
        }
      }

      // findWordMode: tip button sprite has 提示 baked in — hide face, show VI label
      var tipBtn = findNodeByName(root, 'tip');
      if (tipBtn && tipBtn.getComponent && tipBtn.getComponent(cc.Sprite)) {
        // Only the hanging tip button (wide board), not tipAns highlight
        if (tipBtn.width >= 150 || (tipBtn.getContentSize && tipBtn.getContentSize().width >= 150)) {
          hideSpriteShowLabel(tipBtn, 'gv_vi_fw_tip', 'Gợi ý', 30);
        }
      }

      // TipAdPage / StepTipAdPage: tab 提示 is PNG only — do NOT hide idealBtn
      // (hideSpriteShowLabel set opacity=0 and made QC unusable / "disappear")
      function overlayTipAdTitle(page) {
        if (!page) return;
        var tishi = page.getChildByName('tishi') || findNodeByName(page, 'tishi');
        if (tishi) hideSpriteShowLabel(tishi, 'gv_vi_tipad_title', 'Gợi ý', 32);
      }
      var tipAdPage = findNodeByName(root, 'TipAdPage');
      if (tipAdPage) {
        overlayTipAdTitle(tipAdPage);
        var idealBtn = findNodeByName(tipAdPage, 'idealBtn');
        if (idealBtn) {
          // Restore if a prior buggy overlay zeroed the button
          try {
            if (idealBtn.opacity === 0) idealBtn.opacity = 255;
          } catch (eOp) { /* ignore */ }
          var staleOv = idealBtn.parent && idealBtn.parent.getChildByName('gv_vi_tipad_unlock');
          if (staleOv) {
            try {
              staleOv.destroy();
            } catch (eDes) { /* ignore */ }
          }
          // Baked 解锁提示 on tipAd sprite — disable face only; keep Button + AD + Label
          var btnSp = idealBtn.getComponent(cc.Sprite);
          if (btnSp) btnSp.enabled = false;
          var btnLb = idealBtn.getComponent(cc.Label);
          if (btnLb) {
            btnLb.string = 'Mở gợi ý';
            if (btnLb.fontSize < 26) btnLb.fontSize = 28;
          }
        }
      }
      overlayTipAdTitle(findNodeByName(root, 'StepTipAdPage'));
    } catch (e) { /* ignore */ }
  }

  function translateNodeTree(root) {
    if (!root || !cc) return;
    try {
      var labels = root.getComponentsInChildren(cc.Label);
      for (var i = 0; i < labels.length; i++) {
        var lb = labels[i];
        if (lb && lb.string != null && hasCjk(lb.string)) {
          lb.string = tr(lb.string);
        }
      }
    } catch (e1) { /* ignore */ }
    try {
      if (cc.RichText) {
        var rts = root.getComponentsInChildren(cc.RichText);
        for (var j = 0; j < rts.length; j++) {
          var rt = rts[j];
          if (rt && rt.string != null && hasCjk(rt.string)) {
            rt.string = tr(rt.string);
          }
        }
      }
    } catch (e2) { /* ignore */ }
    overlaySpriteTitles(root);
  }

  function hookProp(proto, propName) {
    var desc = Object.getOwnPropertyDescriptor(proto, propName);
    if (!desc || !desc.set) return false;
    var rawSet = desc.set;
    var rawGet = desc.get;
    Object.defineProperty(proto, propName, {
      configurable: true,
      enumerable: true,
      get: function () {
        return rawGet.call(this);
      },
      set: function (v) {
        rawSet.call(this, tr(v));
      }
    });
    return true;
  }

  function install() {
    if (installed) return;
    installed = true;

    try {
      if (global.cc && cc.Label) {
        if (hookProp(cc.Label.prototype, 'string')) {
          console.log('[ArcadeI18n] Label.string hooked');
        }
      }
      if (global.cc && cc.RichText) {
        if (hookProp(cc.RichText.prototype, 'string')) {
          console.log('[ArcadeI18n] RichText.string hooked');
        }
      }
    } catch (e) {
      console.warn('[ArcadeI18n] hook failed', e);
    }

    try {
      if (global.cc && cc.director) {
        translateNodeTree(cc.director.getScene());
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
          setTimeout(function () {
            translateNodeTree(cc.director.getScene());
          }, 0);
        });
      }
    } catch (e2) { /* ignore */ }

    try {
      setInterval(function () {
        if (!global.cc || !cc.director) return;
        var scene = cc.director.getScene();
        if (scene) translateNodeTree(scene);
      }, 2000);
    } catch (e3) { /* ignore */ }
  }

  global.ArcadeI18n = {
    tr: tr,
    install: install,
    MAP: MAP,
    translateNodeTree: translateNodeTree
  };
})(typeof window !== 'undefined' ? window : this);
