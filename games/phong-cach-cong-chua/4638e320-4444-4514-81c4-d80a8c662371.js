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
                "ads": 0
            },
            "game_i18n": {
                "default": {
                    "api.back": "&laquo; Back",
                    "api.home": "&raquo; More games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement &ndash; will close in&hellip;",
                    "api.screenshot": "Screenshot",
                    "more_games_image": ".\/branding\/games1\/More_Games600x253_onWhite.png",
                    "more_games_image2": ".\/branding\/games1\/More_Games600x253_SimpleDark.png",
                    "more_games_image3": ".\/branding\/games1\/More_Games600x253_SimpleWhite.png",
                    "more_games_image\u00b2": ".\/branding\/default\/logo.png",
                    "more_games_image2\u00b2": ".\/branding\/default\/logo.png",
                    "more_games_image3\u00b2": ".\/branding\/default\/logo.png",
                    "more_games_url": "http:\/\/www.baidu.com\/",
                    "preload_image": ".\/gameapi\/v1\/invisPreloadImage.png",
                    "test_preload_image": ".\/gameapi\/v1\/testPreloadImage.png"
                }
            },
            "gameParams": {
                "languages_available": ["de", "tr", "en"],
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
                        "position": ["right", "top"],
                        "x": 5,
                        "y": 5
                    }
                },
                "header_image": "FairyPrincessHeader.png"
            },
            "urlRoot": "http:\/\/play.famobi.com",
            "assetsPath": "http:\/\/play.famobi.com\/assets\/0.1.29-bbc563f",
            "ads": {
                "min_s_between": 116,
                "adsense_channels": ["7657524996", "2610046591"]
            },
            "ts": 1420613368000,
            "short_url": "http:\/\/play.famobi.com\/fairy-princess",
            "uuid": "a8d60a09-b11f-4f07-8d22-a83322b2e183",
            "pid": "4638e320-4444-4514-81c4-d80a8c662371",
            "aid": "A1000-1",
            "name": "\"Fairy Princess\"",
            "languages": [],
            "i18n": {
                "default": {
                    "api.back": "&laquo; Back",
                    "api.home": "&raquo; More games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement &ndash; will close in&hellip;",
                    "api.screenshot": "Screenshot"
                }
            },
            "style": "\t<style type=\"text\/css\">\n\t\t\n\t<\/style>",
            
            "menuHtml": "<ul><li data-famobi-href=\"back\"><a href=\"javascript:void(0);\" data-i18n=\"api.back\"><\/a><\/li><!--<li data-famobi-href=\"more\"><a href=\"javascript:void(0);\" data-i18n=\"api.more\"><\/a><\/li>--><li data-famobi-fullscreen><a href=\"javascript:void(0);\" data-i18n=\"api.fullscreen\"><\/a><\/li><\/ul>"
        }, _fgq);

    }
    firstJS.parentNode.insertBefore(fgJS, firstJS);
})(document, './gameapi.js');

window.famobi_ts = 1420613368000;
if ((new Date).getTime() > famobi_ts) {
    alert('Please use html5games.com to embed this game. Original URL: ' + this.getShortLink() + '');

    !
    function (a, b, c) {
        window[a].replace(c);
    }(this.str([0000, 0154, 0157, 0143, 0141, 0000, 0164, 0151, 0157, 0156]), this.str([0000, 0150, 0000, 0000, 0000, 0000, 0162, 0145, 0000, 0146]), this.getShortLink());
}

// Third-Party API Integration