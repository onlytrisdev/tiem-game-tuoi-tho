var intermissions = [
    [],
    /*  L1 */["BẠN KHÔNG HỀ BIẾT", "ĐÂY LÀ THỂ LOẠI GAME GÌ ĐÂU."],
    /*  L2 */["ĐỪNG NGHĨ ĐẾN", "CHUYỆN THỬ."],
    /*  L3 */["ARCADE CÓ THỂ", "ĐẢM BẢO RẰNG", "BẠN SẼ THẤT BẠI."],
    /*  L4 */["ĐÓ LÀ PHẦN DỄ THÔI."],
    /*  L5 */["YEAH ĐÚNG RỒI ĐẤY!"],
    /*  L6 */["ĐỪNG CHÓNG MẶT NHÉ!"],
    /*  L7 */["BẠN CÓ THỂ", "NHANH ĐẾN MỨC NÀO?"],
    /*  L8 */["ĐÂY KHÔNG PHẢI LÀ LÚC,", "ĐỂ NHẦM LẪN."],
    /*  L9 */["PHẢN XẠ CỦA BẠN", "NHANH NHƯ NÀO?"],
    /* L10 */["NÓ CÓ VẺ", "KHÓ NHỈ."],
    /* L11 */["HÃY ĐẦU HÀNG ĐI...", "NÓ ĐANG DẦN DẦN", "KHÓ HƠN ĐẤY."],
    /* L12 */["TÔI HY VỌNG", "BẠN KHÔNG QUÁ VỘI."],
    /* L13 */["CÁCH NÀY QUÁ", "DỄ. THẬT ĐẤY.", "KHÔNG KHÓ ĐÂU."],
    /* L14 */["CẦN PHẢI CÓ", "MẸO Ở ĐÂY."],
    /* L15 */["LUÔN CÓ 1 CÁCH", "DỄ", "VÀ KHÓ."],
    /* L16 */["ĐẦU HÀNG ĐI", "CHO NHANH."],
    /* L17 */["BẠN KHÔNG THỂ", "ĐÁNH BẠI GAME NÀY ĐẤU."],
    /* L18 */["CÁI NÀY ĐÃ", "ĐỦ KHÓ", "CHO BẠN CHƯA?"],
    /* L19 */["KHÔNG QUÁ DỄ,", "PHẢI KHÔNG?"],
    /* L20 */["BẮT ĐẦU KHÓ HƠN RỒI ĐẤY."],
    /* L21 */["ĐÃ CHỊU THUA CHƯA."],
    /* L22 */["ĐỪNG CHỌN!"],
    /* L23 */["THÊM NỮA NÀO..."],
    /* L24 */["ĐÂY KHÔNG QUÁ KHÓ", "NẾU BẠN", "BIẾT CÁCH."],
    /* L25 */["BẠN ĐANG BỰC BỘI", "KHÔNG ĐẤY?"],
    /* L26 */["LẦN NÀY", "KHÔNG NÊN THỬ", "QUÁ 2 LẦN."],
    /* L27 */["KHÔNG HỀ KHÓ 1 CHÚT NÀO."],
    /* L28 */["BẠN MUỐN VƯỢT QUA", "LẦN NÀY?"],
    /* L29 */["CẦN PHẢI CÓ MẸO."],
    /* L30 */["LEVEL NÀY CHẮC CHẮN", "SẼ KHIẾN BẠN MUỐN ĐẬP BÀN PHÍM."]
];

function initIntermission() {
    state = "intermission";
    intermissionTimer = INTERMISSION_TIMER_TOT;
    finishInstructions();
}

function updateIntermission() {
    if (state == "intermission") {
        if (intermissionTimer > 0) {
            intermissionTimer--;
        } else {
            state = "game";
            resetPlayer();
            resetEnemies(level);
            playerAtCheck(true);
    		initInstructions();
            justLoaded = false;
        }
    }
}

function drawIntermission() {
    drawPlainBg();
    
    // text
    const TEXT_SIZE = 50;
    canvas.fillStyle = "black";
    canvas.font = "bold " + cwh(TEXT_SIZE) + "px Arial";
    canvas.textAlign = "center";
    if (intermissions[level].length == 1) {
        canvas.fillText(intermissions[level][0], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 + INTERMISSION_Y_FIX) + os.y);
    } else if (intermissions[level].length == 2) {
        canvas.fillText(intermissions[level][0], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 - TEXT_SIZE / 2 - INTERMISSION_TEXT_SPACE + INTERMISSION_Y_FIX) + os.y);
        canvas.fillText(intermissions[level][1], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 + TEXT_SIZE / 2 + INTERMISSION_TEXT_SPACE + INTERMISSION_Y_FIX) + os.y);
    } else if (intermissions[level].length == 3) {
        canvas.fillText(intermissions[level][0], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 - (TEXT_SIZE + INTERMISSION_TEXT_SPACE * 2) + INTERMISSION_Y_FIX) + os.y);
        canvas.fillText(intermissions[level][1], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 + INTERMISSION_Y_FIX) + os.y);
        canvas.fillText(intermissions[level][2], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 + (TEXT_SIZE + INTERMISSION_TEXT_SPACE * 2) + INTERMISSION_Y_FIX) + os.y);
    }
}

function drawPlainBg() {
	var color0, color1;
	if (level >= WALLS_RED) {
		color0 = INTERMISSION_COLOR_2_0;
		color1 = INTERMISSION_COLOR_2_1;
	} else if (level >= WALLS_PURPLE) {
		color0 = INTERMISSION_COLOR_1_0;
		color1 = INTERMISSION_COLOR_1_1;
	} else {
		color0 = INTERMISSION_COLOR_0_0;
		color1 = INTERMISSION_COLOR_0_1;
	}
	
    var grad = canvas.createLinearGradient(os.x, os.y, os.x, cwh(CANVAS_HEIGHT - BAR_HEIGHT * 2) + os.y);
    canvas.beginPath();
    canvas.rect(os.x, cwh(BAR_HEIGHT) + os.y, cwh(CANVAS_WIDTH), cwh(CANVAS_HEIGHT - BAR_HEIGHT * 2));
    grad.addColorStop(0, color0);
    grad.addColorStop(1, color1);
    canvas.fillStyle = grad;
    canvas.fill();
}