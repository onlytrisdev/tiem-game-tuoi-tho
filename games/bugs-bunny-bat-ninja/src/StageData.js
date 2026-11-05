//--------------------------------------------------------------------------------------------------------------------------------------------------------

var sd = [{
        // Stage 1
        lizards: [{
                type: 1,
                skin: 3,
                pos: [cc.p(744, 172), cc.p(1247, 172)]
            }, // 0
            {
                type: 1,
                skin: 3,
                pos: [cc.p(654, 314), cc.p(1026, 314)],
                scale: 0.7
            }, // 1
            {
                type: 0,
                skin: 1,
                pos: [cc.p(156, 202), cc.p(226, 202)],
                direction: cc.p(1, 0)
            }, // 2
            {
                type: 0,
                skin: 1,
                pos: [cc.p(472, 280), cc.p(517, 280)],
                direction: cc.p(1, 0),
                scale: 0.8
            }, // 3
            {
                type: 0,
                skin: 1,
                pos: [cc.p(819, 640), cc.p(744, 640)],
                direction: cc.p(-1, 0),
                scale: 0.8,
                flipY: true
            }, // 4
            {
                type: 0,
                skin: 0,
                pos: cc.p(555, 445),
                direction: cc.p(1, 0),
                scale: 0.8
            }, // 5
            {
                type: 0,
                skin: 0,
                pos: cc.p(1226, 481),
                direction: cc.p(-1, 0),
                scale: 0.8
            }, // 6
            {
                type: 0,
                skin: 2,
                pos: cc.p(567, 578),
                direction: cc.p(-1, 0),
                scale: 0.8
            }, // 7
            {
                type: 0,
                skin: 2,
                pos: cc.p(1010, 103),
                direction: cc.p(-1, 0)
            }, // 8
            {
                type: 0,
                skin: 2,
                pos: cc.p(381, 84),
                direction: cc.p(1, 0)
            } // 9
        ],
        masks: [{
                pos: cc.p(802, 645),
                rect: cc.rect(771.5, 577, 131, 136)
            }, // 0
            {
                pos: cc.p(156, 202),
                rect: cc.rect(39, 117.5, 184, 169)
            }, // 1
            {
                pos: cc.p(517, 250),
                rect: cc.rect(395.5, 185, 123, 130)
            }, // 2
            {
                pos: cc.p(654, 314),
                rect: cc.rect(605.5, 257, 127, 114)
            }, // 3
            {
                pos: cc.p(744, 172),
                rect: cc.rect(651, 91, 146, 162)
            }, // 4
            {
                pos: cc.p(1026, 334),
                rect: cc.rect(948, 261.5, 156, 145)
            }, // 5
            {
                pos: cc.p(1247, 195),
                rect: cc.rect(1178, 92.5, 208, 205)
            } // 6
        ],
        character: {
            pos: cc.p(780, 130),
            cheerLoop: 2,
            nagLoop: 2
        },
        balloon: {
            pos: cc.p(920, 490),
            flipped: false
        },
        cheerDialog: [
            "Tôi nghĩ rằng\n những người này giống\n những kẻ cô độc."
        ],
        nagDialog: [
            "Ôi, thân yêu.",
            "Khó khăn thực sự.",
            "Tất cả chúng ta\n không thể là người\n chiến thắng.",
            "Một sự giúp đỡ nho nhỏ?",
            "Nhiều ninja hơn!"
        ]
    },

    {
        // Stage 2
        lizards: [{
                type: 1,
                skin: 3,
                pos: [cc.p(674, 331), cc.p(1002, 331)],
                scale: 0.7
            }, // 0
            {
                type: 0,
                skin: 0,
                pos: cc.p(233, 556),
                direction: cc.p(1, 0.5),
                scale: 0.7
            }, // 1
            {
                type: 0,
                skin: 0,
                pos: cc.p(1191, 499),
                direction: cc.p(1, 0.5),
                scale: 0.7,
                flipX: true
            }, // 2
            {
                type: 0,
                skin: 2,
                pos: cc.p(1001, 606),
                direction: cc.p(0.5, 0.7),
                scale: 0.8,
                flipX: true
            }, // 3
            {
                type: 0,
                skin: 2,
                pos: cc.p(406, 473),
                direction: cc.p(1, 0),
                scale: 0.6,
                flipX: true
            }, // 4
            {
                type: 0,
                skin: 2,
                pos: cc.p(323, 89),
                direction: cc.p(1, 0),
                flipX: true
            }, // 5
            {
                type: 0,
                skin: 1,
                pos: [cc.p(172, 199), cc.p(215, 273)],
                direction: cc.p(1, 0)
            }, // 6
            {
                type: 0,
                skin: 1,
                pos: [cc.p(519, 187), cc.p(604, 187)],
                direction: cc.p(1, 0)
            }, // 7
            {
                type: 0,
                skin: 1,
                pos: [cc.p(1293, 315), cc.p(1226, 315)],
                direction: cc.p(-1, 0)
            }, // 8
            {
                type: 0,
                skin: 1,
                pos: [cc.p(1047, 74), cc.p(923, 74)],
                direction: cc.p(-1, 0)
            } // 9
        ],
        masks: [{
                pos: cc.p(166, 210),
                rect: cc.rect(64.5, 126, 203, 88)
            }, // 0
            {
                pos: cc.p(509, 179),
                rect: cc.rect(413.5, 98.5, 191, 161)
            }, // 1
            {
                pos: cc.p(674, 320),
                rect: cc.rect(610.5, 262.5, 107, 115)
            }, // 2
            {
                pos: cc.p(1002, 331),
                rect: cc.rect(938.5, 259.5, 147, 143)
            }, // 3
            {
                pos: cc.p(1014, 80),
                rect: cc.rect(934, 1, 230, 158)
            }, // 4
            {
                pos: cc.p(1271, 309),
                rect: cc.rect(1235.5, 229, 191, 160)
            } // 5
        ],
        character: {
            pos: cc.p(550, 270),
            cheerLoop: 2,
            nagLoop: 2
        },
        balloon: {
            pos: cc.p(740, 530),
            flipped: false
        },
        cheerDialog: [
            "Bạn đã chọn nhầm chú\n thỏ để gây rối.",
            "Điều đó thật dễ dàng."
        ],
        nagDialog: [
            "Cái gì?",
            "Điều này khó khăn hơn tôi nghĩ.",
            "Tôi không nghĩ chúng ta sẽ làm được.",
            "Aaand găng tay đi ra.",
            "Uh-oh."
        ]
    },

    {
        // Stage 3
        lizards: [{
                type: 1,
                skin: 3,
                pos: [cc.p(401, 96), cc.p(784, 96)],
                scale: 1
            }, // 0
            {
                type: 1,
                skin: 3,
                pos: [cc.p(68, 228), cc.p(312, 228)],
                scale: 0.7
            }, // 1
            {
                type: 0,
                skin: 0,
                pos: cc.p(750, 450),
                direction: cc.p(1, 0),
                scale: 1
            }, // 2
            {
                type: 0,
                skin: 0,
                pos: cc.p(1214, 242),
                direction: cc.p(1, 0),
                scale: 0.7
            }, // 3
            {
                type: 0,
                skin: 2,
                pos: cc.p(345, 210),
                direction: cc.p(-1, 0),
                scale: 1
            }, // 4
            {
                type: 0,
                skin: 2,
                pos: cc.p(173, 395),
                direction: cc.p(-1, 0),
                scale: 0.7
            }, // 5
            {
                type: 0,
                skin: 2,
                pos: cc.p(1225, 485),
                direction: cc.p(0, -1),
                scale: 0.7,
                flipX: true
            }, // 6
            {
                type: 0,
                skin: 1,
                pos: [cc.p(528, 663), cc.p(441, 663)],
                direction: cc.p(-1, 0)
            }, // 7
            {
                type: 0,
                skin: 1,
                pos: [cc.p(980, 308), cc.p(904, 308)],
                direction: cc.p(-1, 0)
            }, // 8
            {
                type: 0,
                skin: 1,
                pos: [cc.p(773, 606), cc.p(844, 554)],
                direction: cc.p(1, 0.5)
            } // 9
        ],
        masks: [{
                pos: cc.p(625, 633),
                rect: cc.rect(451, 498.5, 384, 245)
            }, // 0
            {
                pos: cc.p(68, 218),
                rect: cc.rect(-1.5, 161, 79, 114)
            }, // 1
            {
                pos: cc.p(351, 147),
                rect: cc.rect(209, 1.5, 264, 151)
            }, // 2, bottom
            {
                pos: cc.p(988, 314),
                rect: cc.rect(893, 234, 190, 160)
            }, // 3
            {
                pos: cc.p(793, 96),
                rect: cc.rect(676, 2, 216, 188)
            }, // 4
            {
                pos: cc.p(351, 147),
                rect: cc.rect(249, 221.5, 44, 71),
                index: 2
            } // 2, top
        ],
        character: {
            pos: cc.p(600, 80),
            cheerLoop: 1,
            nagLoop: 2
        },
        balloon: {
            pos: cc.p(380, 400),
            flipped: true
        },
        cheerDialog: [
            "Chỉ cần giữ 'em đến.",
            "Hãy đưa nó lên một tầm cao."
        ],
        nagDialog: [
            "Thở dài, đếm tôi ra trên này.",
            "Có phải chúng ta đã từ bỏ?",
            "Chuyện gì đã xảy ra, bác sĩ?",
            "Làm ơn đừng có ninja nữa.",
            "Tao đã cảnh cáo mày rồi."
        ]
    }
];

//--------------------------------------------------------------------------------------------------------------------------------------------------------