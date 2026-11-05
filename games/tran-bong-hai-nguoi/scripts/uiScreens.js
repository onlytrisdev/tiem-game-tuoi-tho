(function (exports){
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');

    exports.wantMusic = true;
    var music = document.getElementById('music');
    music.addEventListener('ended', function (){
        if(exports.wantMusic === true){
            this.play();
        }
    }, false);
    music.addEventListener('timeupdate', function (){
        if(Date.now() - exports.lastSeen > 100){
            this.pause();
        }
    }, false);
    
    var crowd = document.getElementById('crowd');
    crowd.addEventListener('ended', function (){
        if(exports.wantMusic === true){
            this.play();
        }
    }, false);
    crowd.addEventListener('timeupdate', function (){
        if(Date.now() - exports.lastSeen > 100){
            this.pause();
        }
    }, false);
    var halfTimeClick = false;
    var endGameClick = false;
    var tapToContinue = function (){
        if(exports.screen === 'halftime' && halfTimeClick === true){
            halfTimeClick = false;
            exports.screen = 'game';
            var ball = exports.ball;
            ball.x = canvas.width;
            ball.y = 20;
            ball.radius = 40;
            ball.width = 80;
            ball.height = 80;
            ball.disx = -20;
            ball.disy = -20;
        }
        else if(endGameClick && (exports.screen === 'won' || exports.screen === 'lost')){
            endGameClick = false;
            exports.screen = 'select';
        }
    };

    var musicScreens = {
        'main': 1,
        'translation': 1,
        'credits': 0,
        'select': 1,
        'quickselect': 1,
        'tournamentstart': 1
    };
    var crowdMusicScreens = {
        'game': 1,
        'readyPopup': 1,
        'halftime': 1,
        'won': 1,
        'lost': 1,
        'inter': 1
    };

    var noButtonsClicked = function (e){
        var noButtonsClicked = true;
        var x = (e.changedTouches && e.changedTouches[0].pageX) || e.pageX;
        var y = (e.changedTouches && e.changedTouches[0].pageY) || e.pageY;
		
		x = (x - canvasX) / ratioX;
		y = (y - canvasY) / ratioY;
		
        exports.buttons.forEach(function (button){
            if(button.conditionFn() && exports.inBounds(x, y, button)){
                noButtonsClicked = false;
            }
        });
        return noButtonsClicked;
    };

    document.body.addEventListener('touchstart', function (e){
        if(exports.screen === 'halftime' && noButtonsClicked(e)){
            halfTimeClick = true;
        }
        else if( (exports.screen === 'won' || exports.screen === 'lost') && noButtonsClicked(e) ){
            endGameClick = true;
        }
    }, false);
    document.body.addEventListener('touchend', function (){
        if(exports.wantMusic){
            if(exports.screen in musicScreens){
                crowd.pause();
                music.play();
            }
            else if(exports.screen in crowdMusicScreens){
                music.pause();
                crowd.play();
            }
        }
        tapToContinue();
    }, false);

    document.body.addEventListener('mousedown', function (e){
        if(exports.screen === 'halftime' && noButtonsClicked(e)){
            halfTimeClick = true;
        }
        else if( (exports.screen === 'won' || exports.screen === 'lost') && noButtonsClicked(e) ){
            endGameClick = true;
        }
    }, false);
    document.body.addEventListener('mouseup', function (){
        tapToContinue();

        if(exports.wantMusic){
            if(exports.screen in musicScreens){
                crowd.pause();
                music.play();
            }
            else if(exports.screen in crowdMusicScreens){
                music.pause();
                crowd.play();
            }
        }
        tapToContinue();
    }, false);


    var navShown = false;
    var dismissNav = function (e){
        var x = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        var y = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
		
		x = (x - canvasX) / ratioX;
		y = (y - canvasY) / ratioY;

        if(!(x / exports.scaleX < 160 && y / exports.scaleY > 60)){
            navShown = false;
        }
    };
    // To dismiss the nav bar
    document.body.addEventListener('mousedown', dismissNav, false);
    document.body.addEventListener('touchstart', dismissNav, false);

    var selectedTeam;
    var selectedFrameX, selectedFrameY;
    
    var currentText = '';
    var numInGroup = 16;
    exports.addAllButtons = function (){
        var flagX, flagY;
        var randomChosen = Math.floor(exports.flags.length * Math.random());
        exports.flags.forEach(function (flag, i){
            flagX = 65 + 112 * (i % 4);
            flagY = 86 + 110 * Math.floor(i / 4);
            if(i % 4 >= 2){
                flagX += 127;
            }
            if(Math.floor(i / 4) >= 2){
                flagY += 87;
            }
            if(i === randomChosen){
                selectedTeam = flag;
                selectedFrameX = flagX;
                selectedFrameY = flagY;
            }

            exports.addButton('', flagX, flagY,
                function (){
                    return exports.screen === 'tournamentstart';
                },
                function (button){
                    selectedTeam = flag;
                    selectedFrameX = button.x;
                    selectedFrameY = button.y;
                },
                false,
                flag,
                'flags.png'
            );
        });
        
        exports.addButton('Chọn', 680, 380,
            function (){
                return exports.screen === 'tournamentstart';
            },
            function (){
                exports.initTree();
                exports.startGame();
                exports.playerTeam = selectedTeam;
                var i = groups.indexOf(selectedTeam);
                exports.botTeam = (i % 2 === 0) ? groups[i + 1] : groups[i - 1];
            },
            true,
            undefined, undefined,
            true
        );

        exports.addButton('Chơi', 'center', 380,
            function (){
                return exports.screen === 'main';
            },
            function (){
                exports.screen = 'select';
            },
            true
        );

        exports.canPlayOn = true;
        exports.addButton('Chơi', 750, 510,
            function (){
                return exports.screen === 'tree' && exports.canPlayOn;
            },
            function (){
                exports.startGame();
            },
            true
        );

        var paused = false;
        exports.addButton('', 8.4, 5.7,
            function (){
                return exports.screen === 'game';
            },
            function (){
                paused = true;
            },
            true,
            'pause_btn.png'
        );

        
        var gameMute = exports.addButton('', 100, 5.7,
            function (){
                return exports.screen === 'game';
            },
            function (button){
                if(button.imgName === 'mute_btn.png'){
                    button.imgName = playMute.imgName = 'pressed_mute_btn.png';
                    music.pause();
                    crowd.pause();
                    exports.wantMusic = false;
                }
                else {
                    button.imgName = playMute.imgName = 'mute_btn.png';
                    if(exports.screen !== 'game'){
                        music.play();
                    }
                    else {
                        crowd.play();
                    }
                    exports.wantMusic = true;
                }
            },
            false,
            'mute_btn.png'
        );

        var noMuteScreens = {
            'splash': 1,
            'game': 1,
            'inter': 1,
            'readyPopup': 1,
            'halftime': 1,
            'won': 1,
            'lost': 1,
            'translation': 1
        };
        var playMute = exports.addButton('', 873, 10,
            function (){
                return !(exports.screen in noMuteScreens);
            },
            function (button){
                if(button.imgName === 'mute_btn.png'){
                    button.imgName = gameMute.imgName = 'pressed_mute_btn.png';
                    music.pause();
                    exports.wantMusic = false;
                }
                else {
                    button.imgName = gameMute.imgName = 'mute_btn.png';
                    music.play();
                    exports.wantMusic = true;
                }
            },
            false,
            'mute_btn.png'
        );

        /*exports.addButton('Credits', 'center', 500,
            function (){
                return exports.screen === 'main';
            },
            function (){
                exports.screen = 'credits';
            },
            true
        );*/
        exports.addButton('Back', 'center', 530,
            function (){
                return exports.screen === 'credits';
            },
            function (){
                exports.screen = 'main';
            },
            true
        );

        exports.addButton('', 110, 70,
            function (){
                return exports.screen === 'select';
            },
            function (){
                exports.screen = 'quickselect';
            },
            true,
            'quick_match_btn.png'
        );

        exports.addButton('', 560, 70,
            function (){
                return exports.screen === 'select';
            },
            function (){
                exports.screen = 'tournamentstart';
                exports.tournament = true;
            },
            true,
            'tournament_btn.png'
        );

        exports.addButton('', 40, 330,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                leftIndex--;
                if(leftIndex < 0){
                    leftIndex = exports.flags.length - 1;
                }
            },
            true,
            'arrow_btn.png'
        );

        exports.addButton('rotate', 340, 330,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                leftIndex++;
                if(leftIndex >= exports.flags.length){
                    leftIndex = 0;
                }
            },
            true,
            'arrow_btn.png'
        );


        exports.addButton('', 490, 330,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                rightIndex--;
                if(rightIndex < 0){
                    rightIndex = exports.flags.length - 1;
                }
            },
            true,
            'arrow_btn.png'
        );

        exports.addButton('rotate', 800, 330,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                rightIndex++;
                if(rightIndex >= exports.flags.length){
                    rightIndex = 0;
                }
            },
            true,
            'arrow_btn.png'
        );

        exports.addButton('00:30', 45, 500,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                exports.startGame(30);
                exports.playerTeam = exports.flags[leftIndex];
                exports.botTeam = exports.flags[rightIndex];
            },
            true
        );

        exports.addButton('01:00', 'center', 500,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                exports.startGame(60);
                exports.playerTeam = exports.flags[leftIndex];
                exports.botTeam = exports.flags[rightIndex];
            },
            true
        );

        exports.addButton('01:30', 645, 500,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                exports.startGame(90);
                exports.playerTeam = exports.flags[leftIndex];
                exports.botTeam = exports.flags[rightIndex];
            },
            true
        );

        var tournamentText = {
            '16': 'Group match',
            '8': 'Quarter-final',
            '4': 'Semi-final',
            '2': 'Final!'
        };

        var goFunc = function (){
            currentText = 'Go!';
            setTimeout(function (){
                exports.screen = 'game';
            }, 1000);
        };
        var ready = function (){
            currentText = 'Ready?';
            setTimeout(goFunc, 2000);
        };

        var interContinue = function (){
            if(paused){
                exports.screen = 'game';
            }
            else {
                exports.screen = 'readyPopup';
                if(exports.tournament === true){
                    currentText = tournamentText[numInGroup];
                    setTimeout(ready, 1500);
                }
                else {
                    ready();
                }
            }
        };
        exports.addButton('Keep playing', 'center', 500,
            function (){
                return exports.screen === 'inter';
            },
            interContinue,
            true
        );

        exports.addButton('', 850, 10,
            function (){
                return exports.screen === 'inter';
            },
            interContinue,
            true,
            'exit_btn.png'
        );

        var twitLink = function (text){
            return 'https://twitter.com/intent/tweet?' + encodeURI('related=AmaanC,CodeHeads&text=' + text + '&url=' + location.href);
        };
        var facebookLink = function (text){
            return 'https://www.facebook.com/sharer/sharer.php?s=100&p[title]=' + text + '&p[url]=' + location.href + '&p[summary]=' + 'Play Pedestrians are Crossing!';
        };

        var navPlaces = {
            'main': 1,
            'inter': 1,
            'credits': 1,
            'select': 1
        };

        exports.addButton('', 10, 570,
            function (){
                return exports.screen in navPlaces;
            },
            function (){
                navShown = !navShown;
            },
            true,
            'nav_btn.png'
        );

        exports.addButton('', 15, 220,
            function (){
                return navShown === true;
            },
            function (){
                window.open('http://bugs.code-heads.co.uk');
            },
            true,
            'bugs_btn.png'
        );

        exports.addButton('', 15, 340,
            function (){
                return navShown === true;
            },
            function (){
                window.open(twitLink('I\'m playing Header Champ. Join me and see if you\'re one of the best!'));
            },
            true,
            'twitter_btn.png'
        );
        exports.addButton('', 15, 460,
            function (){
                return navShown === true;
            },
            function (){
                window.open(facebookLink('I\'m playing Header Champ. Join me and see if you\'re one of the best!'));
            },
            true,
            'facebook_btn.png'
        );


        exports.addButton('', 350, 300,
            function (){
                return exports.screen === 'lost';
            },
            function (){
                if(exports.tournament){
                    window.open(twitLink('Tôi chỉ có bị loại ra khỏi giải đấu. Bạn có thể làm tốt hơn?'));
                }
                else {
                    window.open(twitLink('Tôi đang tham gia giải đấu này! bạn có muốn cùng tham gia!'));
                }
            },
            true,
            'twitter_btn.png'
        );
        exports.addButton('', 500, 300,
            function (){
                return exports.screen === 'lost';
            },
            function (){
                if(exports.tournament){
                    window.open(facebookLink('Tôi chỉ có bị loại ra khỏi giải đấu. Bạn có thể làm tốt hơn?'));
                }
                else {
                    window.open(facebookLink('Tôi đang tham gia giải đấu này! bạn có muốn cùng tham gia!'));
                }
            },
            true,
            'facebook_btn.png'
        );

        exports.addButton('', 350, 300,
            function (){
                return exports.screen === 'won';
            },
            function (){
                if(exports.tournament){
                    window.open(twitLink('Tôi chỉ có bị loại ra khỏi giải đấu. Bạn có thể làm tốt hơn?'));
                }
                else {
                    window.open(twitLink('Tôi đang tham gia giải đấu này! bạn có muốn cùng tham gia!'));
                }
            },
            true,
            'twitter_btn.png'
        );
        exports.addButton('', 500, 300,
            function (){
                return exports.screen === 'won';
            },
            function (){
                if(exports.tournament){
                    window.open(facebookLink('Tôi chỉ có bị loại ra khỏi giải đấu. Bạn có thể làm tốt hơn?'));
                }
                else {
                    window.open(facebookLink('Tôi đang tham gia giải đấu này! bạn có muốn cùng tham gia!'));
                }
            },
            true,
            'facebook_btn.png'
        );
    };

    exports.drawMainScreen = function (){
        exports.drawImage('main_screen.png', 0, 0);
    };

    exports.creditsScreen = function (){
        exports.drawImage('credits_screen.png', 0, 0);
        exports.write('Credits', 'center', 80, function (ctx){
            ctx.fillStyle = 'white';
            ctx.font = '44pt Megalopolis';
        });
        exports.write('Credits', 'center', 80, function (ctx){
            ctx.font = '44pt Megalopolis';
        }, true);
    };

    exports.drawHalfTime = function (){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '44pt Megalopolis';
        exports.write('Hết Hiệp 1!', 'center', 250);
        exports.write('Hết Hiệp 1!', 'center', 250, undefined, true);
        exports.write('Bấm để tiếp tục', 'center', 350);
        exports.write('Bấm để tiếp tục', 'center', 350, undefined, true);
    };

    exports.popup = function (text){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '42pt Megalopolis';
        exports.write(text, 'center', 230);
        exports.write(text, 'center', 230, undefined, true);

        ctx.font = '35pt Megalopolis';
        exports.write('Chia Sẻ', 'center', 290);
        exports.write('Chia Sẻ', 'center', 290, undefined, true);

        ctx.font = '24pt Megalopolis';
        exports.write('Bấm để tiếp tục', 'center', 450);
        exports.write('Bấm để tiếp tục', 'center', 450, undefined, true);
    };

    exports.wonPopup = function (){
        exports.popup('Bạn Thắng!');
    };
    exports.lostPopup = function (){
        exports.popup('Bạn Thua!');
    };
    exports.selectScreen = function (){
        exports.drawImage('game_background.png', 0, 0);

        ctx.font = '34pt Megalopolis';
        ctx.fillStyle = 'white';
        exports.write('Giao Hữu', 110 + (300 - ctx.measureText(exports.translate('Giao Hữu')).width) / 2, 550);
        exports.write('Thi Đấu', 560 + (300 - ctx.measureText(exports.translate('Thi Đấu')).width) / 2, 550);
    };

    var leftIndex = 0;
    var rightIndex = 1;
    var selectionY = 30;
    var text, textSize;
    exports.teamSelect = function (){
        exports.drawImage('game_background.png', 0, 0);
        exports.drawImage(exports.flags[leftIndex], 300, selectionY, 'flags.png');
        exports.drawImage('team_holder_left.png', 100, selectionY, 'bits.png');
        exports.drawImage('player_idle.png', 180, 130, 'players', 'player_' + exports.flags[leftIndex]);
        ctx.font = '25px ' + exports.font;
        ctx.fillStyle = 'white';
        text = exports.flags[leftIndex].slice(0, -4).toUpperCase();
        textSize = ctx.measureText(text);
        ctx.fillText(text, 100 + (294 - textSize.width) / 2, selectionY + 350);

        exports.drawImage(exports.flags[rightIndex], 550, selectionY, 'flags.png');
        exports.drawImage('team_holder_right.png', 550, selectionY, 'bits.png');
        ctx.save();
        ctx.translate(760, 130);
        ctx.scale(-1, 1);
        exports.drawImage('player_idle.png', 0, 0, 'players', 'player_' + exports.flags[rightIndex]);
        ctx.restore();
        text = exports.flags[rightIndex].slice(0, -4).toUpperCase();
        textSize = ctx.measureText(text);
        ctx.fillText(text, 550 + (294 - textSize.width) / 2, selectionY + 350);
    };

    exports.drawGameUI = function (){
        exports.drawImage(exports.playerTeam, 318, 9.25, 'flags.png', undefined, 68, 68);
        exports.drawImage('flag_frame.png', 318, 9.25, 'bits.png');
        exports.drawImage(exports.botTeam, 580, 9.25, 'flags.png', undefined, 68, 68);
        exports.drawImage('flag_frame.png', 580, 9.25, 'bits.png');

        ctx.font = '40pt ' + exports.font;
        ctx.fillText(exports.playerScore, 400, 59);
        ctx.strokeText(exports.playerScore, 400, 59);

        ctx.fillText('-', 469, 50);
        ctx.strokeText('-', 469, 50);

        ctx.fillText(exports.botScore, 505, 59);
        ctx.strokeText(exports.botScore, 505, 59);

        ctx.fillText(exports.timeString, 821, 50);
        ctx.strokeText(exports.timeString, 821, 50);
    };

    var interAd = document.getElementById('inter-ads');
    exports.showInterAd = function (){
        interAd.style.left = (window.innerWidth - 300) / 2 + 'px';
        interAd.style.top = (window.innerHeight - 250) / 2 + 'px';
        interAd.style.display = 'block';
    };

    exports.drawInterScreen = function (){
        exports.drawImage('pause_inter_screen.png', 0, 0);
        //exports.showInterAd();
    };

    exports.tournamentStartScreen = function (){
        exports.drawImage('tour_team_select_screen.png', 30, 15);
        if(selectedTeam){
            exports.drawImage('player_idle.png', 755, 100, 'players', 'player_' + selectedTeam);
            exports.drawImage('selected_team_frame.png', selectedFrameX, selectedFrameY, 'bits.png');
            ctx.font = '25px ' + exports.font;
            ctx.fillStyle = 'white';
            text = selectedTeam.slice(0, -4).toUpperCase();
            textSize = ctx.measureText(text);
            ctx.fillText(text, 705 + (228 - textSize.width) / 2, 320);
        }
    };

    var groups;
    var treePositions = [];
    var makeTreeObj = function (flag, x, y, w, h){
        var obj = {};
        obj.img = flag;
        obj.x = x;
        obj.y = y;
        obj.w = w;
        obj.h = h;
        treePositions.push(obj);
        return true;
    };

    exports.initTree = function (){
        var tmp;
        groups = exports.flags.slice(0);
        tmp = groups[2];
        groups[2] = groups[4];
        groups[4] = tmp;


        tmp = groups[3];
        groups[3] = groups[5];
        groups[5] = tmp;


        tmp = groups[10];
        groups[10] = groups[12];
        groups[12] = tmp;

        tmp = groups[11];
        groups[11] = groups[13];
        groups[13] = tmp;
        treePositions = [];

        var x, y;
        groups.forEach(function (flag, i){
            x = 50 + (i % 2) * 60;
            y = 18 + Math.floor(i / 2) * 60;

            y += Math.floor(i / 4) * 41;
            makeTreeObj(flag, x, y, 60, 60);
        });
    };

    var sizes = {
        '8': 47,
        '4': 90,
        '2': 120,
        '1': 120
    };

    exports.nextGroup = function (playerWon){
        var curGroupDone = false;
        var ret = [];
        for(var i = 0, len = groups.length; i < len; i++){
            if(i % 2 === 0){
                curGroupDone = false;
                if(playerWon && (groups[i] === exports.playerTeam || groups[i + 1] === exports.playerTeam)){
                    curGroupDone = true;
                    ret.push(exports.playerTeam);
                }
            }
            if(curGroupDone === false && Math.random() > 0.5){
                ret.push(groups[i]);
                curGroupDone = true;
            }
            else if(curGroupDone === false && (i - 1) % 2 === 0){
                ret.push(groups[i]);
                curGroupDone = true;
            }
        }
        groups = ret;
        numInGroup = groups.length;
        var size;
        var x, y;
        groups.forEach(function (flag, i){
            if(groups.length === 8){
                size = sizes[groups.length];
                x = 251;
                y = 19 + i * 75;
                y += Math.floor(i / 2) * 10;
                makeTreeObj(flag, x, y, size, size);
            }
            else if(groups.length === 4){
                size = sizes[groups.length];
                x = 381;
                y = 38 + i * 160;

                makeTreeObj(flag, x, y, size, size);
            }
            else if(groups.length <= 2){
                size = sizes[groups.length];
                x = (groups.length === 2) ? 564 : 807;
                y = 105 + i * 321;
                if(groups.length === 1){
                    y = 270;
                }
                makeTreeObj(flag, x, y, size, size);
            }

            if(flag === exports.playerTeam){
                exports.botTeam = (i % 2 === 0) ? groups[i + 1] : groups[i - 1];
            }
        });

        exports.canPlayOn = groups.length !== 1;
        if(exports.canPlayOn === false){
            exports.screen = 'won';
        }

        return true;
    };

    exports.tournamentTree = function (){
        exports.drawImage('tournament_screen.png', 0, 0);
        treePositions.forEach(function (obj){
            exports.drawImage(obj.img, obj.x, obj.y, 'flags.png', undefined, obj.w, obj.h);
        });
        exports.drawImage('tournament_screen_overlay.png', 40, 10);
    };

    exports.drawReadyPopup = function (){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '44pt Megalopolis';
        exports.write(currentText, 'center', 250);
        exports.write(currentText, 'center', 250, undefined, true);
    };

    exports.drawPopup = function (){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '44pt Megalopolis';
        exports.write('Hòa!', 'center', 250);
        exports.write('Hòa!', 'center', 250, undefined, true);
    };

    exports.extraTime = function (){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '44pt Megalopolis';
        exports.write('Thêm thời gian!', 'center', 250);
        exports.write('Thêm thời gian!', 'center', 250, undefined, true);
    };

    var splashAlpha = 0.1;
    var fadeAway = false;
    var controlSplashScreen = function (){
    	console.trace();
        if(fadeAway === false){
            if(splashAlpha < 1){
                splashAlpha += 0.05;
            }
            else {
                setTimeout(function (){
                    fadeAway = true;
                }, 1200);
            }
        }
        if(fadeAway === true){
            splashAlpha -= 0.05;
            if(splashAlpha <= 0){
                exports.screen = 'main';
            }
        }
    };

    exports.drawSplash = function (){
    	console.trace();
        ctx.save();
        ctx.globalAlpha = splashAlpha;
        controlSplashScreen();
        exports.drawImage('splash.png', 0, 0);
        ctx.restore();
        
    };
})(window.head);