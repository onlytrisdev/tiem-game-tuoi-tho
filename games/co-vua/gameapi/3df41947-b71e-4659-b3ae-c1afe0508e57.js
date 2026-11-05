/*<script>*/
var _fgq = [];

(function(d, url, fgJS, firstJS) {
    fgJS = d.createElement('script');
    firstJS = d.getElementsByTagName('script')[0];
    fgJS.src = url;
    fgJS.onload = function() {
        if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
            return;
        }

        famobi = new fg_api({
            "features": {
                "highscores": 0,
                "menu": 1,
                "fullscreen": 1,
                "screenshot": 0,
                "payment": 0,
                "ads": 0
            },
            "game_i18n": {
                "de": {
                    "api.back": "&laquo; zur&uuml;ck",
                    "api.more": "&raquo; mehr Spiele",
                    "api.fullscreen": "Vollbildmodus",
                    "api.continue": "Weiter",
                    "api.play_now": "Jetzt spielen",
                    "api.ad_modal_header": "Werbung schlie\u00dft automatisch in&hellip;",
                    "api.ad_modal_header2": "Kurze Werbepause&hellip;",
                    "api.ad_modal_header3": "L\u00e4dt&hellip;",
                    "api.teaser_modal_header": "Spiele jetzt den n\u00e4chsten Teil&hellip;",
                    "api.no_abo": "Kein Abo!",
                    "api.secure_payment": "Sicheres Bezahlen!",
                    "api.paymentmethod_cc": "Kreditkarte",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.payment_cta": "Weiter"
                },
                "en": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.ad_modal_header3": "Loading&hellip;",
                    "api.teaser_modal_header": "Continue with the next episode&hellip;",
                    "api.no_abo": "No Subscription!",
                    "api.secure_payment": "Secure Payment!",
                    "api.paymentmethod_cc": "Credit Card",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.continue": "Continue",
                    "api.play_now": "Play now",
                    "api.payment_cta": "Next"
                },
                "tr": {
                    "api.back": "&laquo; Geri",
                    "api.more": "&raquo; Daha Fazla Oyun",
                    "api.fullscreen": "Tam ekran",
                    "api.continue": "Devam",
                    "api.play_now": "Oyna",
                    "api.ad_modal_header": "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
                    "api.ad_modal_header2": "Reklam&hellip;",
                    "api.ad_modal_header3": "",
                    "api.teaser_modal_header": "Sonraki B\u00f6l\u00fcm&hellip;",
                    "api.no_abo": "Abonelik Yoktur!",
                    "api.secure_payment": "G\u00fcvenli \u00d6deme!",
                    "api.paymentmethod_cc": "Kredi Kart\u0131",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.payment_cta": "Sonraki"
                },
                "es": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.ad_modal_header3": "Loading&hellip;",
                    "api.teaser_modal_header": "Continue with the next episode&hellip;",
                    "api.no_abo": "No Subscription!",
                    "api.secure_payment": "Secure Payment!",
                    "api.paymentmethod_cc": "Credit Card",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.continue": "Continue",
                    "api.play_now": "Play now",
                    "api.payment_cta": "Next"
                },
                "default": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.ad_modal_header3": "Loading&hellip;",
                    "api.teaser_modal_header": "Continue with the next episode&hellip;",
                    "api.no_abo": "No Subscription!",
                    "api.secure_payment": "Secure Payment!",
                    "api.paymentmethod_cc": "Credit Card",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.continue": "Continue",
                    "api.play_now": "Play now",
                    "api.payment_cta": "Next",
            
                    "more_games_image": ".\/gameapi\/branding\/default\/More_Games600x253_onWhite.png",
       
                    "preload_image": ".\/gameapi\/v1\/invisPreloadImage.png",
                    "test_preload_image": ".\/gameapi\/v1\/testPreloadImage.png"
                }
            },
            "gameParams": {
                "languages_available": ["de", "tr", "en"],
                "fullscreen_enabled": 1,
                "flags": {
                    "exclusive": 1
                },
                "aspectRatio": 1,
                "header_image": "ChessClassicHeader.jpg"
            },
            "urlRoot": ".",
            "assetsPath": ".\/gameapi\/assets\/0.1.34-9e0580a5",
            "ts": 1470275810000,
            "short_url": ".\/chess-classic\/A-AGAME?gp=1&siteid=88&channelid=1&siteLocale=en-US&spilStorageId=18602987674",
            "uuid": "9fff4399-7428-43e6-a023-d2ecd21bae37",
            "pid": "3cffdc06-25cb-4ec2-be9a-f6fe435df818",
            "aid": "A-AGAME",
            "name": "\"Chess Classic\"",
            "languages": ["de", "en", "tr", "es"],
            "ads": {
                "adsense_channels": ["6380877393", "2610046591"],
                "adx_channels": ["3726080195"],
                "min_s_between": 0,
                "min_s_before": null,
                "show_initial": true,
                "show_video": false,
                "show_click2play": false,
                "description_url": ".\/sda\/description\/chess-classic?hl=en",
                "provider": "dfp",
                "dfp_available": true
            },
            "i18n": {
                "default": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.ad_modal_header3": "Loading&hellip;",
                    "api.teaser_modal_header": "Continue with the next episode&hellip;",
                    "api.no_abo": "No Subscription!",
                    "api.secure_payment": "Secure Payment!",
                    "api.paymentmethod_cc": "Credit Card",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.continue": "Continue",
                    "api.play_now": "Play now",
                    "api.payment_cta": "Next"
                },
                "en": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.ad_modal_header3": "Loading&hellip;",
                    "api.teaser_modal_header": "Continue with the next episode&hellip;",
                    "api.no_abo": "No Subscription!",
                    "api.secure_payment": "Secure Payment!",
                    "api.paymentmethod_cc": "Credit Card",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.continue": "Continue",
                    "api.play_now": "Play now",
                    "api.payment_cta": "Next"
                },
                "de": {
                    "api.back": "&laquo; zur&uuml;ck",
                    "api.more": "&raquo; mehr Spiele",
                    "api.fullscreen": "Vollbildmodus",
                    "api.continue": "Weiter",
                    "api.play_now": "Jetzt spielen",
                    "api.ad_modal_header": "Werbung schlie\u00dft automatisch in&hellip;",
                    "api.ad_modal_header2": "Kurze Werbepause&hellip;",
                    "api.ad_modal_header3": "L\u00e4dt&hellip;",
                    "api.teaser_modal_header": "Spiele jetzt den n\u00e4chsten Teil&hellip;",
                    "api.no_abo": "Kein Abo!",
                    "api.secure_payment": "Sicheres Bezahlen!",
                    "api.paymentmethod_cc": "Kreditkarte",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.payment_cta": "Weiter"
                },
                "tr": {
                    "api.back": "&laquo; Geri",
                    "api.more": "&raquo; Daha Fazla Oyun",
                    "api.fullscreen": "Tam ekran",
                    "api.continue": "Devam",
                    "api.play_now": "Oyna",
                    "api.ad_modal_header": "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
                    "api.ad_modal_header2": "Reklam&hellip;",
                    "api.ad_modal_header3": "",
                    "api.teaser_modal_header": "Sonraki B\u00f6l\u00fcm&hellip;",
                    "api.no_abo": "Abonelik Yoktur!",
                    "api.secure_payment": "G\u00fcvenli \u00d6deme!",
                    "api.paymentmethod_cc": "Kredi Kart\u0131",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.payment_cta": "Sonraki"
                },
                "es": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.ad_modal_header3": "Loading&hellip;",
                    "api.teaser_modal_header": "Continue with the next episode&hellip;",
                    "api.no_abo": "No Subscription!",
                    "api.secure_payment": "Secure Payment!",
                    "api.paymentmethod_cc": "Credit Card",
                    "api.paymentmethod_paypal": "PayPal",
                    "api.paymentmethod_sms": "SMS",
                    "api.continue": "Continue",
                    "api.play_now": "Play now",
                    "api.payment_cta": "Next"
                }
            },
            "branding": {
            
                "more_games_image": ".\/gameapi\/branding\/default\/More_Games600x253_onWhite.png",
               
                "preload_image": ".\/gameapi\/v1\/invisPreloadImage.png",
                "test_preload_image": ".\/gameapi\/v1\/testPreloadImage.png"
            },
            
        }, _fgq, '');
    };
    firstJS.parentNode.insertBefore(fgJS, firstJS);
})(document, './gameapi/assets/0.1.34-9e0580a5/js/gameapi.js');

