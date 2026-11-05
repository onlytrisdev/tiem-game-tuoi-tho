/*<script>*/
var _fgq = [];

(function (d, url, fgJS, firstJS) {
    fgJS = d.createElement('script');
    firstJS = d.getElementsByTagName('script')[0];
    fgJS.src = url;
    fgJS.onload = function () {
        famobi = new fg_api({
            "features": {
                "menu": 1,
                "screenshot": 0,
                "payment": 0,
                "ads": 0
            },
            "game_i18n": {
                "default": {
                	"challengesXml": "fg_i18n/default/xml/challenges.xml",
                    "startscreen": "fg_i18n/default/images/Logo.jpg",
                    "welcome_back": "THẦN TƯỢNG ÂM NHẠC",
                    "welcome": "THẦN TƯỢNG ÂM NHẠC",
                    "level": "Câu <strong><\/strong>",
                    "start_game": "Chơi",
                    "delete_savegame": "Xóa Lưu và Chơi Lại",
                    "screens": "Pictures",
                    "word_guess": "Thần Tượng Âm Nhạc",
                    "searched_letters": "Searched Letters",
                    "letters": "Letters",
                    "help_text_1": "Không còn trợ giúp?",
                    "help_text_2": "Nhờ giúp đỡ từ bạn bè!",
                    "2_pictures_1_word": "Thần Tượng Âm Nhạc",
                    "congrats": "Chúc mừng! Bạn đã vượt qua tất cả câu hỏi",
                    "notice": "Chúng tôi sẽ cập nhật thêm các câu hỏi sớm nhất có thể!",
                    "reset_button": "Xóa lưu và Chơi lại!",
                    "difficulty": "Độ khó:",
                    "easy": "Dễ",
                    "heavy": "Khó",
                    "good_1": "Tốt!",
                    "good_2": "Đúng Rồi!",
                    "good_3": "Hoàn Hảo!",
                    "good_4": "Tuyệt!",
                    "good_5": "Tuyệt Vời!",
                    "good_6": "Tốt!",
                    "good_7": "Quá Giỏi!",
                    "good_8": "Tiếp Tục!",
                    "good_9": "Tốt!",
                    "good_10": "Rất Chính Xác!",
                    "good_11": "Không Tin nổi!",
                    "ask-friends": "Hỏi<br \/>bạn bè:",
                    "iap_back": "Đóng",
                    "iap_headline": "Buy Joker",
                    "iap_intro": "Jokers help to fill the gaps. Choose one of our Joker packages:",
                    "whatsapp_sharetext": "Tôi cần sự giúp đỡ ",
                    "reset_headline": "Xóa lưu game",
                    "reset_intro": "",
                    "reset_button_confirm": "Đúng",
                    "reset_button_reset": "Không",
                    "proceed_with_level": "Tiếp Tục Chơi Câu",
                    "add_jokers": "Thêm gợi ý",
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.payment": "Buy Credits",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.payment_success": "Payment successful!",
                    "api.payment_list": "Purchase List",
                    "api.payment_items": "Items",
                    "api.payment_credits_available": "Credits available",
                    "api.screenshot": "Screenshot",
                    "more_games_image": ".\/gameapi\/branding\/logo.png",
                    "more_games_image2": ".\/gameapi\/branding\/logo.png",
                    "more_games_image3": ".\/gameapi\/branding\/logo.png",
                    "more_games_image\u00b2": ".\/gameapi\/branding\/logo.png",
                    "more_games_image2\u00b2": ".\/gameapi\/branding\/logo.png",
                    "more_games_image3\u00b2": ".\/gameapi\/branding\/logo.png",
                    "more_games_url": "http:\/\/localhost",
                    "preload_image": ".\/gameapi\/invisPreloadImage.png",
                    "test_preload_image": ".\/gameapi\/testPreloadImage.png"
                },
                "de": {
                    "api.back": "&laquo; zur&uuml;ck",
                    "api.more": "&raquo; mehr Spiele",
                    "api.fullscreen": "Vollbildmodus",
                    "api.payment": "Credits kaufen",
                    "api.close": "Schlie&szling;en",
                    "api.ad_modal_header": "Werbung schlie\u00dft automatisch in&hellip;",
                    "api.ad_modal_header2": "Kurze Werbepause&hellip;",
                    "api.payment_success": "Bezahlung erfolgreich!",
                    "api.payment_credits_available": "Credits verf\u00fcgbar",
                    "api.screenshot": "Screenshot"
                },
                "en": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.payment": "Buy Credits",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.payment_success": "Payment successful!",
                    "api.payment_list": "Purchase List",
                    "api.payment_items": "Items",
                    "api.payment_credits_available": "Credits available",
                    "api.screenshot": "Screenshot"
                },
                "tr": {
                    "api.back": "&laquo; Geri",
                    "api.more": "&raquo; Daha Fazla Oyun",
                    "api.fullscreen": "Tam ekran",
                    "api.payment": "Kredi Sat\u0131n Al",
                    "api.close": "Kapat",
                    "api.ad_modal_header": "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
                    "api.ad_modal_header2": "Reklam&hellip;",
                    "api.payment_success": "\u00d6deme ba\u015far\u0131l\u0131 oldu!",
                    "api.payment_credits_available": "Kredi al\u0131nabilir"
                }
            },
            "gameParams": {
                "languages_available": [],
                "flags": {
                    "exclusive": 1
                },
                "orientation": "portrait",
                "screenshot": {
                    "active": true,
                    "areas": {
                        "default": {
                            "x": 0,
                            "y": 0,
                            "width": 100,
                            "height": 100
                        }
                    },
                    "camera": {
                        "position": ["left", "top"],
                        "x": 0,
                        "y": 25
                    }
                },
                "header_image": "WeddingLilyHeader.png"
            },
            "urlRoot": "http://localhost",
            "assetsPath": "gameapi/assets/0.1.30-e72991a",
            "ts": 1425189992000,
            "short_url": "http://localhost",
            "uuid": "7fa142fc-fb7a-4fe7-af88-3f1890cfb9c4",
            "pid": "6112a388-2bcc-4ce6-9ad9-40c907838b79",
            "aid": "A1202-1",
            "name": "\"Wedding Lily\"",
            "languages": [],
            "ads": {
           },
            "i18n": {
                "default": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.payment": "Buy Credits",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.payment_success": "Payment successful!",
                    "api.payment_list": "Purchase List",
                    "api.payment_items": "Items",
                    "api.payment_credits_available": "Credits available",
                    "api.screenshot": "Screenshot"
                },
                "de": {
                    "api.back": "&laquo; zur&uuml;ck",
                    "api.more": "&raquo; mehr Spiele",
                    "api.fullscreen": "Vollbildmodus",
                    "api.payment": "Credits kaufen",
                    "api.close": "Schlie&szling;en",
                    "api.ad_modal_header": "Werbung schlie\u00dft automatisch in&hellip;",
                    "api.ad_modal_header2": "Kurze Werbepause&hellip;",
                    "api.payment_success": "Bezahlung erfolgreich!",
                    "api.payment_credits_available": "Credits verf\u00fcgbar",
                    "api.screenshot": "Screenshot"
                },
                "en": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.payment": "Buy Credits",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.payment_success": "Payment successful!",
                    "api.payment_list": "Purchase List",
                    "api.payment_items": "Items",
                    "api.payment_credits_available": "Credits available",
                    "api.screenshot": "Screenshot"
                },
                "tr": {
                    "api.back": "&laquo; Geri",
                    "api.more": "&raquo; Daha Fazla Oyun",
                    "api.fullscreen": "Tam ekran",
                    "api.payment": "Kredi Sat\u0131n Al",
                    "api.close": "Kapat",
                    "api.ad_modal_header": "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
                    "api.ad_modal_header2": "Reklam&hellip;",
                    "api.payment_success": "\u00d6deme ba\u015far\u0131l\u0131 oldu!",
                    "api.payment_credits_available": "Kredi al\u0131nabilir"
                }
            },
         }, _fgq, '');
    };
    firstJS.parentNode.insertBefore(fgJS, firstJS);
})(document, 'gameapi/gameapi.js');

window.famobi_ts = 1425189992000;
