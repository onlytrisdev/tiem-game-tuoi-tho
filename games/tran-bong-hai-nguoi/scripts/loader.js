var startgame = function (exports){
    var imgPath = 'Assets/Images/';
    exports.imageList = [
        'bits.png',
        'buttons.png',
        'credits_screen.png',
        'flags.png',
        'game_background.png',
        'loading_bar.png',
        'loading_screen.png',
        'main_screen.png',
        'pause_inter_screen.png',
        'player_argentina.png',
        'player_brazil.png',
        'player_denmark.png',
        'player_england.png',
        'player_france.png',
        'player_germany.png',
        'player_greece.png',
        'player_ireland.png',
        'player_italy.png',
        'player_netherlands.png',
        'player_portugal.png',
        'player_russia.png',
        'player_spain.png',
        'player_sweden.png',
        'player_uruguay.png',
        'player_usa.png',
        'rotation_logo_portrait.png',
        'splash.png',
        'tournament_screen.png',
        'tournament_screen_overlay.png',
        'tour_team_select_screen.png',
        'translation_buttons.png',
        'translation_screen.png'
    ];
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');
    var imagesLoaded = 0;
    var bgLoaded = false;
    var loader;
    var updateLoad = function (){
        imagesLoaded++;
        if(exports.screen === ''){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        if(bgLoaded === true){
            ctx.drawImage(exports.resources['loading_screen.png'], 0, 0);
        }
        if(loader){
            ctx.drawImage(loader, (canvas.width - loader.width) / 2, 447, imagesLoaded / exports.imageList.length * loader.width, loader.height);
        }
        else if('loading_bar.png' in exports.resources){
            loader = exports.resources['loading_bar.png'];
        }

        if(imagesLoaded === exports.imageList.length){
            exports.logic();
            exports.loaded = true;
            if(exports.screen !== 'translation'){
                exports.screen = 'main';
                //exports.screen = 'splash';
                exports.addAllButtons();
            }
        }
    };

    exports.resources = {};
    exports.imageList.forEach(function (imgName){
        var img = new Image();
        img.src = imgPath + imgName;
        exports.resources[imgName] = img;
        img.addEventListener('load', updateLoad, false);
        if(imgName === 'loading_bg.png'){
            img.addEventListener('load', function (){
                bgLoaded = true;
                exports.drawImage(imgName, 0, 0);
            }, false);
        }
        else if(imgName === 'translation_screen.png'){
            img.addEventListener('load', function (){
                exports.screen = 'translation';
                exports.initTranslateScreen();
            }, false);
        }
    });
};







































































































