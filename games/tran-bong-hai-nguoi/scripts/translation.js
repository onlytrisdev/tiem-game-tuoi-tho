(function(exports) {
    exports.drawTranslationScreen = function() {
        exports.drawImage('translation_screen.png', 0, 0);
    };

    var translateImages = function() {
        translations.images.forEach(function(imageName) {
            var img = new Image();
            img.src = 'Assets/Images/' + exports.language + '/' + imageName;
            exports.resources[imageName] = img;
        });
    };

    var translations = {};


    exports.translate = function(text) {
        if (text in translations && exports.language !== 'English') {
            return translations[text][exports.language];
        } else {
            return text;
        }
    };

    exports.initTranslateScreen = function() {

        var callback = function(translations) {
            var parseUrlParamsToJSON = function() {
                var ret = {},
                    seg = window.location.search.replace(/^\?/, '').split('&'),
                    len = seg.length,
                    i = 0,
                    s;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    s = seg[i].split('=');
                    ret[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
                }
                return ret;
            };
            var urlParams = parseUrlParamsToJSON();
            
            var softgamesLanguage = SG.lang;
            
            var availableLocales = {
                "en": "English",
                "fr": "French",
                "es": "Spanish",
                "pt": "Portuguese",
                "de": "Deutsch",
                "it": "Italian"
            };
           
            if (typeof availableLocales[softgamesLanguage] !== 'string') {
                availableLocales[softgamesLanguage] = "English";
            }

            exports.language = availableLocales[softgamesLanguage];
            if (exports.language !== 'English') {
                translateImages();
            }
            exports.screen = 'main';
            exports.addAllButtons();
            exports.initTree();
            exports.screen = 'main';
            exports.draw();
        };
        if (location.protocol !== 'file:') {
            var XHR = new XMLHttpRequest();
            XHR.open('GET', 'Translations/translations.json', false);
            XHR.onreadystatechange = function() {
                if (XHR.status === 200 && XHR.readyState === 4) {
                    //console.log(XHR.responseText);
                    translations = JSON.parse(XHR.responseText);
                    callback(translations);
                }
            };
            XHR.send();
        } else {
            translations = {
                "languages": ["English", "French"],
                "images": [],
                "Select": {
                    "French": "Selezionare"
                }
            };
            callback(translations);
        }
    };

})(window.head);