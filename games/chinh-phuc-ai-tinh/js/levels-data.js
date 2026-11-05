/**
 * Dữ liệu 300 màn chơi Figgerits — chủ đề tình yêu (tiếng Việt)
 * 6 chương × 50 màn
 */
const LoveFiggerits = (function () {
  'use strict';

  const CHAPTERS = [
    { id: 0, name: 'Rung động đầu tiên', icon: '😊', desc: 'Những cảm xúc khi mới thích ai đó' },
    { id: 1, name: 'Hẹn Hò',         icon: '☕', desc: 'Buổi gặp gỡ và hẹn hò' },
    { id: 2, name: 'Yêu Nhau',       icon: '💕', desc: 'Khi tình cảm nảy nở' },
    { id: 3, name: 'Cầu Hôn',        icon: '💍', desc: 'Lời hứa trọn đời' },
    { id: 4, name: 'Đám Cưới',       icon: '👰', desc: 'Ngày trọng đại' },
    { id: 5, name: 'Mãi Mãi',        icon: '♾️', desc: 'Tình yêu vĩnh cửu' }
  ];

  const CATEGORIES = {
    love: 'Tình yêu', romance: 'Lãng mạn', valentine: 'Valentine',
    gifts: 'Quà tặng', flowers: 'Hoa', wedding: 'Đám cưới',
    dating: 'Hẹn hò', emotions: 'Cảm xúc', relationships: 'Mối quan hệ'
  };

  const DIFFICULTIES = ['easy', 'medium', 'hard', 'expert'];
  const DIFF_LABELS = { easy: 'Dễ', medium: 'Trung bình', hard: 'Khó', expert: 'Chuyên gia' };

  // Ngân hàng câu nói & manh mối theo chương
  const PHRASE_BANK = [
    // Chương 0 — Rung động đầu tiên
    { ch: 0, cat: 'emotions', phrase: 'TIM ĐẬP NHANH KHI THẤY EM',
      clues: [
        { q: 'Cơ quan bơm máu, biểu tượng tình yêu', a: 'TIM' },
        { q: 'Nhịp rung động của tim', a: 'ĐẬP' },
        { q: 'Trái nghĩa với chậm', a: 'NHANH' },
        { q: 'Liên từ chỉ thời điểm', a: 'KHI' },
        { q: 'Nhìn thấy người thương', a: 'THẤY' },
        { q: 'Đại từ chỉ người được yêu (nữ)', a: 'EM' }
      ]},
    { ch: 0, cat: 'love', phrase: 'ÁNH MẮT ĐẦU TIÊN RẤT ĐẸP',
      clues: [
        { q: 'Ánh sáng nhẹ', a: 'ÁNH' },
        { q: 'Bộ phận dùng để nhìn', a: 'MẮT' },
        { q: 'Thứ tự số một', a: 'ĐẦU' },
        { q: 'Lần đầu tiên', a: 'TIÊN' },
        { q: 'Mức độ cao', a: 'RẤT' },
        { q: 'Trái nghĩa với xấu', a: 'ĐẸP' }
      ]},
    { ch: 0, cat: 'emotions', phrase: 'MÁ ĐỎ VÌ NGẠI NGÙNG',
      clues: [
        { q: 'Phần hai bên khuôn mặt', a: 'MÁ' },
        { q: 'Màu của trái tim', a: 'ĐỎ' },
        { q: 'Giải thích lý do', a: 'VÌ' },
        { q: 'Cảm giác e thẹn', a: 'NGẠI' },
        { q: 'Xấu hổ khi gặp người mình thích', a: 'NGÙNG' }
      ]},
    { ch: 0, cat: 'dating', phrase: 'NHẮN TIN SUỐT ĐÊM DÀI',
      clues: [
        { q: 'Gửi lời qua điện thoại', a: 'NHẮN' },
        { q: 'Tin nhắn ngắn', a: 'TIN' },
        { q: 'Liên tục không ngừng', a: 'SUỐT' },
        { q: 'Thời gian từ hoàng hôn đến sáng', a: 'ĐÊM' },
        { q: 'Kéo dài, không ngắn', a: 'DÀI' }
      ]},
    { ch: 0, cat: 'love', phrase: 'THẦM THƯƠNG TRỘM NHỚ',
      clues: [
        { q: 'Không nói ra', a: 'THẦM' },
        { q: 'Yêu mến sâu sắc', a: 'THƯƠNG' },
        { q: 'Lén lút', a: 'TRỘM' },
        { q: 'Nhớ nhung ai đó', a: 'NHỚ' }
      ]},
    // Chương 1 — Hẹn hò
    { ch: 1, cat: 'dating', phrase: 'BUỔI HẸN ĐẦU RẤT LÃNG MẠN',
      clues: [
        { q: 'Khoảng thời gian buổi sáng chiều tối', a: 'BUỔI' },
        { q: 'Cuộc gặp đã định trước', a: 'HẸN' },
        { q: 'Thứ tự ban đầu', a: 'ĐẦU' },
        { q: 'Mức độ cao', a: 'RẤT' },
        { q: 'Đầy quyến rũ và tình cảm', a: 'LÃNG MẠN' }
      ]},
    { ch: 1, cat: 'dating', phrase: 'CÙNG UỐNG CÀ PHÊ ẤM',
      clues: [
        { q: 'Cùng nhau', a: 'CÙNG' },
        { q: 'Hành động nuốt đồ uống', a: 'UỐNG' },
        { q: 'Đồ uống đắng phổ biến', a: 'CÀ PHÊ' },
        { q: 'Nóng và dễ chịu', a: 'ẤM' }
      ]},
    { ch: 1, cat: 'romance', phrase: 'DẠO PHỐ CÙNG NẮM TAY',
      clues: [
        { q: 'Đi bộ thong dong', a: 'DẠO' },
        { q: 'Nơi mua sắm ngoài trời', a: 'PHỐ' },
        { q: 'Bên nhau', a: 'CÙNG' },
        { q: 'Hai bàn tay đan vào nhau', a: 'NẮM TAY' }
      ]},
    { ch: 1, cat: 'gifts', phrase: 'TẶNG QUÀ NHỎ BẤT NGỜ',
      clues: [
        { q: 'Đưa cho ai đó', a: 'TẶNG' },
        { q: 'Món đồ biếu', a: 'QUÀ' },
        { q: 'Kích thước không lớn', a: 'NHỎ' },
        { q: 'Không ai ngờ tới', a: 'BẤT NGỜ' }
      ]},
    { ch: 1, cat: 'dating', phrase: 'XEM PHIM TÌNH CẢM HAY',
      clues: [
        { q: 'Ngắm nhìn', a: 'XEM' },
        { q: 'Bộ phim điện ảnh', a: 'PHIM' },
        { q: 'Thể loại yêu đương', a: 'TÌNH CẢM' },
        { q: 'Trái nghĩa với dở', a: 'HAY' }
      ]},
    // Chương 2 — Yêu nhau
    { ch: 2, cat: 'love', phrase: 'TÌNH YÊU CHÂN THÀNH NHẤT',
      clues: [
        { q: 'Cảm xúc sâu sắc giữa hai người', a: 'TÌNH YÊU' },
        { q: 'Thật lòng không giả dối', a: 'CHÂN THÀNH' },
        { q: 'Hơn tất cả', a: 'NHẤT' }
      ]},
    { ch: 2, cat: 'emotions', phrase: 'HẠNH PHÚC KHI BÊN NHAU',
      clues: [
        { q: 'Niềm vui sâu sắc', a: 'HẠNH PHÚC' },
        { q: 'Liên từ chỉ thời điểm', a: 'KHI' },
        { q: 'Ở gần bên', a: 'BÊN' },
        { q: 'Cùng nhau', a: 'NHAU' }
      ]},
    { ch: 2, cat: 'romance', phrase: 'ÔM CHẶT TRONG VÒNG TAY',
      clues: [
        { q: 'Hành động quấn tay', a: 'ÔM' },
        { q: 'Rất chặt', a: 'CHẶT' },
        { q: 'Ở bên trong', a: 'TRONG' },
        { q: 'Vòng tròn của cánh tay', a: 'VÒNG TAY' }
      ]},
    { ch: 2, cat: 'relationships', phrase: 'TIN TƯƠNG LÀ NỀN TẢNG',
      clues: [
        { q: 'Tin cậy không nghi ngờ', a: 'TIN TƯƠNG' },
        { q: 'Là', a: 'LÀ' },
        { q: 'Cơ sở vững chắc', a: 'NỀN TẢNG' }
      ]},
    { ch: 2, cat: 'love', phrase: 'YÊU EM HƠN MỖI NGÀY',
      clues: [
        { q: 'Cảm xúc mãnh liệt', a: 'YÊU' },
        { q: 'Đại từ nữ', a: 'EM' },
        { q: 'Nhiều hơn', a: 'HƠN' },
        { q: 'Từng, hàng', a: 'MỖI' },
        { q: 'Hai mươi bốn giờ', a: 'NGÀY' }
      ]},
    // Chương 3 — Cầu hôn
    { ch: 3, cat: 'romance', phrase: 'QUỲ GỐI CẦU HÔN EM',
      clues: [
        { q: 'Gập đầu gối xuống', a: 'QUỲ GỐI' },
        { q: 'Xin kết duyên', a: 'CẦU HÔN' },
        { q: 'Người yêu (nữ)', a: 'EM' }
      ]},
    { ch: 3, cat: 'gifts', phrase: 'NHẪN KIM CƯƠNG LẤP LÁNH',
      clues: [
        { q: 'Trang sức đeo tay', a: 'NHẪN' },
        { q: 'Đá quý cứng nhất', a: 'KIM CƯƠNG' },
        { q: 'Sáng lóa', a: 'LẤP LÁNH' }
      ]},
    { ch: 3, cat: 'love', phrase: 'ĐỒNG Ý LÀM VỢ ANH',
      clues: [
        { q: 'Gật đầu đồng ý', a: 'ĐỒNG Ý' },
        { q: 'Trở thành', a: 'LÀM' },
        { q: 'Người phụ nữ đã kết hôn', a: 'VỢ' },
        { q: 'Đại từ nam', a: 'ANH' }
      ]},
    { ch: 3, cat: 'emotions', phrase: 'NƯỚC MẮT VUI SƯỚNG RƠI',
      clues: [
        { q: 'Giọt nước từ mắt', a: 'NƯỚC MẮT' },
        { q: 'Niềm vui lớn', a: 'VUI SƯỚNG' },
        { q: 'Rơi xuống', a: 'RƠI' }
      ]},
    { ch: 3, cat: 'relationships', phrase: 'HỨA BÊN NHAU SUỐT ĐỜI',
      clues: [
        { q: 'Cam kết', a: 'HỨA' },
        { q: 'Ở cạnh nhau', a: 'BÊN NHAU' },
        { q: 'Cả cuộc đời', a: 'SUỐT ĐỜI' }
      ]},
    // Chương 4 — Đám cưới
    { ch: 4, cat: 'wedding', phrase: 'NGÀY CƯỚI TRỌNG ĐẠI NHẤT',
      clues: [
        { q: 'Đơn vị thời gian', a: 'NGÀY' },
        { q: 'Lễ kết hôn', a: 'CƯỚI' },
        { q: 'Quan trọng lớn lao', a: 'TRỌNG ĐẠI' },
        { q: 'Hàng đầu', a: 'NHẤT' }
      ]},
    { ch: 4, cat: 'wedding', phrase: 'CÔ DÂU THẬT XINH ĐẸP',
      clues: [
        { q: 'Nữ chính ngày cưới', a: 'CÔ DÂU' },
        { q: 'Thật sự', a: 'THẬT' },
        { q: 'Đẹp lung linh', a: 'XINH ĐẸP' }
      ]},
    { ch: 4, cat: 'flowers', phrase: 'HOA CƯỚI THƠM NGÁT',
      clues: [
        { q: 'Cây có cánh', a: 'HOA' },
        { q: 'Dùng trong lễ cưới', a: 'CƯỚI' },
        { q: 'Hương thơm nồng', a: 'THƠM NGÁT' }
      ]},
    { ch: 4, cat: 'wedding', phrase: 'TRAO NHẪN TRƯỚC HỌ HÀNG',
      clues: [
        { q: 'Đưa cho nhau', a: 'TRAO' },
        { q: 'Trang sức ngón tay', a: 'NHẪN' },
        { q: 'Phía trước', a: 'TRƯỚC' },
        { q: 'Người thân hai bên', a: 'HỌ HÀNG' }
      ]},
    { ch: 4, cat: 'romance', phrase: 'HÔN NHAU GIỮA TIẾNG VỖ TAY',
      clues: [
        { q: 'Môi chạm môi', a: 'HÔN' },
        { q: 'Hai người', a: 'NHAU' },
        { q: 'Ở giữa', a: 'GIỮA' },
        { q: 'Âm thanh hoan hô', a: 'TIẾNG VỖ TAY' }
      ]},
    // Chương 5 — Mãi mãi
    { ch: 5, cat: 'love', phrase: 'TÌNH YÊU VĨNH CỬU KHÔNG PHAI',
      clues: [
        { q: 'Cảm xúc thiêng liêng', a: 'TÌNH YÊU' },
        { q: 'Mãi mãi', a: 'VĨNH CỬU' },
        { q: 'Không', a: 'KHÔNG' },
        { q: 'Phai nhạt theo thời gian', a: 'PHAI' }
      ]},
    { ch: 5, cat: 'relationships', phrase: 'HAI TA MỘT TRÁI TIM',
      clues: [
        { q: 'Đôi ta', a: 'HAI TA' },
        { q: 'Một', a: 'MỘT' },
        { q: 'Cơ quan tình yêu', a: 'TRÁI TIM' }
      ]},
    { ch: 5, cat: 'romance', phrase: 'GIÀ CÙNG NHAU VẪN YÊU',
      clues: [
        { q: 'Tuổi cao', a: 'GIÀ' },
        { q: 'Bên nhau', a: 'CÙNG NHAU' },
        { q: 'Vẫn còn', a: 'VẪN' },
        { q: 'Thương yêu', a: 'YÊU' }
      ]},
    { ch: 5, cat: 'valentine', phrase: 'VALENTINE MỖI NGÀY BÊN EM',
      clues: [
        { q: 'Ngày lễ tình nhân', a: 'VALENTINE' },
        { q: 'Hàng ngày', a: 'MỖI NGÀY' },
        { q: 'Kế bên', a: 'BÊN' },
        { q: 'Người yêu', a: 'EM' }
      ]},
    { ch: 5, cat: 'love', phrase: 'ĐỊNH MỆNH ĐÃ SẮP ĐẶT SẴN',
      clues: [
        { q: 'Số phận', a: 'ĐỊNH MỆNH' },
        { q: 'Đã', a: 'ĐÃ' },
        { q: 'Sắp xếp', a: 'SẮP ĐẶT' },
        { q: 'Từ trước', a: 'SẴN' }
      ]}
  ];

  // Mẫu bổ sung để sinh đủ 300 màn
  const EXTRA_TEMPLATES = [
    { cat: 'flowers', phrase: 'HOA HỒNG ĐỎ TẶNG NGƯỜI YÊU', clues: [
      { q: 'Loài hoa tình yêu', a: 'HOA HỒNG' }, { q: 'Màu của tim', a: 'ĐỎ' },
      { q: 'Biếu tặng', a: 'TẶNG' }, { q: 'Người thương', a: 'NGƯỜI YÊU' }
    ]},
    { cat: 'valentine', phrase: 'THIỆP VALENTINE VIẾT LỜI YÊU', clues: [
      { q: 'Tấm giấy chúc', a: 'THIỆP' }, { q: 'Ngày mười bốn tháng hai', a: 'VALENTINE' },
      { q: 'Ghi chữ', a: 'VIẾT' }, { q: 'Lời tỏ tình', a: 'LỜI YÊU' }
    ]},
    { cat: 'gifts', phrase: 'GẤU BÔNG TO ÔM MỖI ĐÊM', clues: [
      { q: 'Thú nhồi bông', a: 'GẤU BÔNG' }, { q: 'Kích thước lớn', a: 'TO' },
      { q: 'Quấn tay', a: 'ÔM' }, { q: 'Ban đêm', a: 'ĐÊM' }
    ]},
    { cat: 'emotions', phrase: 'NHỚ EM TỪNG PHÚT GIÂY', clues: [
      { q: 'Nhớ nhung', a: 'NHỚ' }, { q: 'Người yêu', a: 'EM' },
      { q: 'Mỗi', a: 'TỪNG' }, { q: 'Đơn vị thời gian ngắn', a: 'PHÚT GIÂY' }
    ]},
    { cat: 'dating', phrase: 'ĂN TỐI NẾN VÀ RƯỢU VANG', clues: [
      { q: 'Bữa buổi tối', a: 'ĂN TỐI' }, { q: 'Ánh sáng lãng mạn', a: 'NẾN' },
      { q: 'Và', a: 'VÀ' }, { q: 'Đồ uống đỏ', a: 'RƯỢU VANG' }
    ]},
    { cat: 'relationships', phrase: 'HẠNH PHÚC LÀ CÓ NHAU', clues: [
      { q: 'Niềm vui trọn vẹn', a: 'HẠNH PHÚC' }, { q: 'Là', a: 'LÀ' },
      { q: 'Sở hữu', a: 'CÓ' }, { q: 'Bên nhau', a: 'NHAU' }
    ]},
    { cat: 'love', phrase: 'ANH YÊU EM NHIỀU LẮM', clues: [
      { q: 'Đại từ nam', a: 'ANH' }, { q: 'Tình cảm', a: 'YÊU' },
      { q: 'Đại từ nữ', a: 'EM' }, { q: 'Rất nhiều', a: 'NHIỀU LẮM' }
    ]},
    { cat: 'romance', phrase: 'DÙ SAO VẪN CHỌN EM', clues: [
      { q: 'Dù thế nào', a: 'DÙ SAO' }, { q: 'Vẫn', a: 'VẪN' },
      { q: 'Lựa chọn', a: 'CHỌN' }, { q: 'Người yêu', a: 'EM' }
    ]},
    { cat: 'wedding', phrase: 'CHÚC MỪNG HẠNH PHÚC ĐÔI TRẺ', clues: [
      { q: 'Lời chúc', a: 'CHÚC MỪNG' }, { q: 'Niềm vui', a: 'HẠNH PHÚC' },
      { q: 'Cặp đôi', a: 'ĐÔI' }, { q: 'Trẻ trung', a: 'TRẺ' }
    ]},
    { cat: 'flowers', phrase: 'BÓ HOA TƯƠI MỪNG NGÀY CƯỚI', clues: [
      { q: 'Bao nhiêu bông gộp lại', a: 'BÓ HOA' }, { q: 'Còn mới', a: 'TƯƠI' },
      { q: 'Chúc mừng', a: 'MỪNG' }, { q: 'Lễ kết hôn', a: 'NGÀY CƯỚI' }
    ]}
  ];

  const VI_LETTERS = 'AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬBCDĐEÈÉẺẼẸÊỀẾỂỄỆFGHIÌÍỈĨỊKLMNOÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢPQRSTUÙÚỦŨỤƯỪỨỬỮỰVXYỲÝỶỸỴ';

  /** Chuẩn hóa chuỗi tiếng Việt */
  function normalize(str) {
    return str.toUpperCase().normalize('NFC').trim();
  }

  const LETTER_RE = /[A-ZÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬĐÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ]/;

  /** Gán số cho từng chữ cái duy nhất trong phrase */
  function buildNumberMap(phrase) {
    const map = {};
    const reverse = {};
    let num = 1;
    normalize(phrase).split('').forEach(ch => {
      if (ch === ' ' || !LETTER_RE.test(ch)) return;
      if (!(ch in reverse)) {
        reverse[ch] = num;
        map[num] = null;
        num++;
      }
    });
    return { letterToNum: reverse, numToLetter: map, totalNums: num - 1 };
  }

  /** Căn manh mối khớp từng từ trong phrase (hỗ trợ đáp án nhiều từ) */
  function alignCluesToPhrase(phrase, rawClues) {
    const pWords = normalize(phrase).split(/\s+/);
    const result = [];
    let pi = 0;
    let ci = 0;

    while (pi < pWords.length) {
      let matched = false;
      if (ci < rawClues.length) {
        const ans = normalize(rawClues[ci].a);
        const ansWords = ans.split(/\s+/);
        const slice = pWords.slice(pi, pi + ansWords.length).join(' ');
        if (slice === ans) {
          result.push({ q: rawClues[ci].q, a: ans });
          pi += ansWords.length;
          ci++;
          matched = true;
        }
      }
      if (!matched) {
        const word = pWords[pi];
        result.push({
          q: `Từ trong câu nói (${word.length} chữ cái)`,
          a: word
        });
        pi++;
      }
    }
    return result;
  }

  /** Sinh 300 màn từ ngân hàng */
  function generateAllLevels() {
    const levels = [];
    const perChapter = 50;

    for (let i = 0; i < 300; i++) {
      const chapter = Math.floor(i / perChapter);
      const bankIdx = i % PHRASE_BANK.length;
      const extraIdx = i % EXTRA_TEMPLATES.length;
      const base = i < PHRASE_BANK.length * 2
        ? PHRASE_BANK[bankIdx]
        : { ch: chapter, ...EXTRA_TEMPLATES[extraIdx] };

      const diff = DIFFICULTIES[i % 4];
      const phrase = normalize(base.phrase || EXTRA_TEMPLATES[extraIdx].phrase);
      const rawClues = base.clues || EXTRA_TEMPLATES[extraIdx].clues;
      const aligned = alignCluesToPhrase(phrase, rawClues);

      const clues = aligned.map((c, ci) => ({
        id: ci + 1,
        question: c.q,
        answer: normalize(c.a),
        solved: false
      }));

      const encoding = buildNumberMap(phrase);

      levels.push({
        id: i + 1,
        chapter,
        chapterName: CHAPTERS[chapter].name,
        difficulty: diff,
        difficultyLabel: DIFF_LABELS[diff],
        category: base.cat || 'love',
        categoryLabel: CATEGORIES[base.cat] || CATEGORIES.love,
        phrase,
        clues,
        encoding
      });
    }
    return levels;
  }

  const ALL_LEVELS = generateAllLevels();

  return {
    CHAPTERS,
    CATEGORIES,
    DIFFICULTIES,
    DIFF_LABELS,
    ALL_LEVELS,
    normalize,
    buildNumberMap,
    VI_LETTERS
  };
})();
