/*!
 *
 * GAME SETTING CUSTOMIZATION START
 *
 */
var keyboard_arr = {
    left: [65, 37],
    right: [68, 39],
    up: [87, 38],
    down: [83, 40]
};
var randomMaze = [{
    type: 'easy',
    column: 20,
    row: 15,
    timer: 30000
}, {
    type: 'normal',
    column: 30,
    row: 20,
    timer: 40000
}, {
    type: 'hard',
    column: 40,
    row: 25,
    timer: 40000
}]
var mazeOptions = {
    pathSize: 20,
    wallSize: 10,
    wallColor: '#fff',
    pathColor: '#000',
    pathTransparent: true,
    shadow: true,
    shadowX: 0,
    shadowY: 5,
    shadowOpacity: .2,
    shadowColor: '#000'
}
var pointOptions = {
    radius: 8,
    color: '#00B259'
}
var moveOptions = {
    trail: true,
    trailType: 'stroke',
    trailColor: '#ccff00',
    trailStroke: 7
}
var exitMessage = 'BẠN MUỐN\nQUAY VỀ MENU?';
var mazeComplete = 'HOÀN THÀNH';
var mazeFail = 'HẾT\GIỜ!';
var resultTitleWinText = 'KỶ LỤC : [TIME]';
var resultTitleLoseText = 'KẾT THÚC!';
var shareEnable = true;
var shareText = 'CHIA SẺ NGAY';
var shareTitle = 'Thời gian hoàn thành Mê cung siêu to khổng lồ - Arcade là [TIME].';
var shareMessage = '[TIME] là kỷ lục để vượt qua Mê cung Arcade! Hãy thử sức!';
/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
$.editor = {
    enable: false
};
var playerData = {
    time: 0,
    win: false
};
var gameData = {
    paused: true,
    mazeNum: 0,
    mode: -1,
    keyControl: false,
    tapControl: false,
    timer: false,
    startDate: 0,
    countdownDate: 15000
};
var mazeData = {
    moves: [],
    maze: [],
    startX: 1,
    startY: 1,
    endX: 1,
    endY: 1
};
var pointData = {
    move: false,
    x: 0,
    y: 0,
    column: 1,
    row: 1,
    lastColumn: 1,
    lastRow: 1,
    init: false,
    delay: 10,
    delayCount: 0
};
var keyData = {
    left: false,
    right: false,
    up: false,
    down: false,
    delay: 3,
    delayCount: 0
};
var mazeOptionsData = {
    column: 30,
    row: 20,
    pathSize: 25,
    wallSize: 5,
    wallColor: '#fff',
    pathColor: '#000',
    pathTransparent: true,
}
var pointOptionsData = {
    radius: 10,
    color: '#ccff00'
}
var moveOptionsData = {
    trail: true,
    trailType: 'stroke',
    trailColor: '#ccff00',
    trailStroke: 5
}
/*!
 *
 * GAME BUTTONS - This is the function that runs to setup button event
 *
 */
function buildGameButton() {
    mobileControllerContainer.visible = false;
    if ($.browser.mobile || isTablet) {
        mobileControllerContainer.visible = true;
    } else {
        var isInIframe = (window.location != window.parent.location) ? true : false;
        if (isInIframe) {
            this.document.onkeydown = keydown;
            this.document.onkeyup = keyup;
            $(window).blur(function() {
                appendFocusFrame();
            });
            appendFocusFrame();
        } else {
            this.document.onkeydown = keydown;
            this.document.onkeyup = keyup;
        }
    }
    buttonLevels.cursor = "pointer";
    buttonLevels.addEventListener("click", function(evt) {
        playSound('soundClick');
        goPage('select');
    });
    buttonRandom.cursor = "pointer";
    buttonRandom.addEventListener("click", function(evt) {
        playSound('soundClick');
        toggleRandomNav(true);
    });
    buttonEasy.cursor = "pointer";
    buttonEasy.addEventListener("click", function(evt) {
        playSound('soundConfirm');
        gameData.mode = 0;
        goPage('game')
    });
    buttonNormal.cursor = "pointer";
    buttonNormal.addEventListener("click", function(evt) {
        playSound('soundConfirm');
        gameData.mode = 1;
        goPage('game')
    });
    buttonHard.cursor = "pointer";
    buttonHard.addEventListener("click", function(evt) {
        playSound('soundConfirm');
        gameData.mode = 2;
        goPage('game')
    });
    buttonLeft.cursor = "pointer";
    buttonLeft.addEventListener("click", function(evt) {
        playSound('soundClick');
        toggleGameMaze(false);
    });
    buttonRight.cursor = "pointer";
    buttonRight.addEventListener("click", function(evt) {
        playSound('soundClick');
        toggleGameMaze(true);
    });
    buttonPlay.cursor = "pointer";
    buttonPlay.addEventListener("click", function(evt) {
        playSound('soundConfirm');
        goPage('game');
    });
    dragShape.cursor = "pointer";
    dragShape.addEventListener("mousedown", function(evt) {
        startPointMove();
    });
    dragShape.cursor = "pointer";
    dragShape.addEventListener("pressup", function(evt) {
        stopPointMove();
    });
    buttonContinue.cursor = "pointer";
    buttonContinue.addEventListener("click", function(evt) {
        playSound('soundConfirm');
        goPage('main');
    });
    buttonFacebook.cursor = "pointer";
    buttonFacebook.addEventListener("click", function(evt) {
        share('facebook');
    });
    buttonTwitter.cursor = "pointer";
    buttonTwitter.addEventListener("click", function(evt) {
        share('twitter');
    });
    buttonWhatsapp.cursor = "pointer";
    buttonWhatsapp.addEventListener("click", function(evt) {
        share('whatsapp');
    });
    buttonSoundOff.cursor = "pointer";
    buttonSoundOff.addEventListener("click", function(evt) {
        toggleGameMute(true);
    });
    buttonSoundOn.cursor = "pointer";
    buttonSoundOn.addEventListener("click", function(evt) {
        toggleGameMute(false);
    });
    buttonFullscreen.cursor = "pointer";
    buttonFullscreen.addEventListener("click", function(evt) {
        toggleFullScreen();
    });
    buttonSettings.cursor = "pointer";
    buttonSettings.addEventListener("click", function(evt) {
        toggleOption();
    });
    buttonExit.cursor = "pointer";
    buttonExit.addEventListener("click", function(evt) {
        toggleConfirm(true);
        toggleOption();
    });
    buttonConfirm.cursor = "pointer";
    buttonConfirm.addEventListener("click", function(evt) {
        toggleConfirm(false);
        goPage('result');
    });
    itemExit.addEventListener("click", function(evt) {});
    buttonCancel.cursor = "pointer";
    buttonCancel.addEventListener("click", function(evt) {
        toggleConfirm(false);
    });
    updateGameMaze();
    totalMobileDirection = ['left', 'right', 'up', 'down'];
    for (var n = 0; n < totalMobileButtons.length; n++) {
        $.buttons[totalMobileButtons[n]].name = totalMobileButtons[n];
        $.buttons[totalMobileButtons[n]].direction = totalMobileDirection[n];
        $.buttons[totalMobileButtons[n]].addEventListener("mousedown", function(evt) {
            toggleKeyPress(evt.target.name, evt.target.direction, true);
        });
        $.buttons[totalMobileButtons[n]].addEventListener("pressup", function(evt) {
            toggleKeyPress(evt.target.name, evt.target.direction, false);
        });
    }
}

function toggleRandomNav(con) {
    if (con) {
        buttonLevels.visible = buttonRandom.visible = false;
        buttonEasy.visible = buttonNormal.visible = buttonHard.visible = true;
    } else {
        buttonLevels.visible = buttonRandom.visible = true;
        buttonEasy.visible = buttonNormal.visible = buttonHard.visible = false;
    }
}

function appendFocusFrame() {
    $('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
    $('#focus').click(function() {
        $('#focus').remove();
    });
}
/*!
 *
 * MAZE SELECT - This is the function that runs for maze select
 *
 */
function toggleGameMaze(con) {
    if (con) {
        gameData.mazeNum++;
        gameData.mazeNum = gameData.mazeNum > maze_array.length - 1 ? 0 : gameData.mazeNum;
    } else {
        gameData.mazeNum--;
        gameData.mazeNum = gameData.mazeNum < 0 ? maze_array.length - 1 : gameData.mazeNum;
    }
    updateGameMaze();
}

function updateGameMaze() {
    for (var n = 0; n < maze_array.length; n++) {
        $.thumbs[n].visible = false;
    }
    $.thumbs[gameData.mazeNum].visible = true;
}
/*!
 *
 * KEYBOARD EVENTS - This is the function that runs for keyboard events
 *
 */
function keydown(event) {
    if (!gameData.keyControl) {
        return;
    }
    if (keyboard_arr.left.indexOf(event.keyCode) != -1) {
        keyData.left = true;
    }
    if (keyboard_arr.right.indexOf(event.keyCode) != -1) {
        keyData.right = true;
    }
    if (keyboard_arr.up.indexOf(event.keyCode) != -1) {
        keyData.up = true;
    }
    if (keyboard_arr.down.indexOf(event.keyCode) != -1) {
        keyData.down = true;
    }
}

function keyup(event) {
    if (!gameData.keyControl) {
        return;
    }
    if (keyboard_arr.left.indexOf(event.keyCode) != -1 && keyData.left) {
        keyData.left = false
    }
    if (keyboard_arr.right.indexOf(event.keyCode) != -1 && keyData.right) {
        keyData.right = false;
    }
    if (keyboard_arr.up.indexOf(event.keyCode) != -1 && keyData.up) {
        keyData.up = false;
    }
    if (keyboard_arr.down.indexOf(event.keyCode) != -1 && keyData.down) {
        keyData.down = false;
    }
}

function toggleKeyPress(name, side, con) {
    if (con) {
        $.buttons[name].gotoAndStop('press');
    } else {
        $.buttons[name].gotoAndStop('static');
    }
    if (side == 'left') {
        keyData.left = con;
    } else if (side == 'right') {
        keyData.right = con;
    } else if (side == 'up') {
        keyData.up = con;
    } else if (side == 'down') {
        keyData.down = con;
    }
}
/*!
 *
 * DISPLAY PAGES - This is the function that runs to display pages
 *
 */
var curPage = ''

function goPage(page) {
    curPage = page;
    mainContainer.visible = false;
    selectContainer.visible = false;
    gameContainer.visible = false;
    editContainer.visible = false;
    resultContainer.visible = false;
    stopSoundLoop('musicGame');
    var targetContainer = null;
    switch (page) {
        case 'main':
            playSoundLoop('musicMain');
            gameData.mode = -1;
            toggleRandomNav(false);
            targetContainer = mainContainer;
            break;
        case 'select':
            targetContainer = selectContainer;
            break;
        case 'game':
            targetContainer = gameContainer;
            if (!$.editor.enable) {
                stopSoundLoop('musicMain');
                playSoundLoop('musicGame');
                startGame();
            }
            break;
        case 'edit':
            targetContainer = editContainer;
            buttonSettings.visible = false;
            stopSoundLoop('musicMain');
            break;
        case 'result':
            targetContainer = resultContainer;
            stopSoundLoop('musicGame');
            playSoundLoop('musicMain');
            stopGame();
            saveGame(playerData.time);
            if (playerData.win) {
                resultTitleTxt.text = resultTitleWinText.replace('[TIME]', millisecondsToTime(playerData.time));
            } else {
                resultTitleTxt.text = resultTitleLoseText;
            }
            break;
    }
    if (targetContainer != null) {
        targetContainer.visible = true;
        targetContainer.alpha = 0;
        TweenMax.to(targetContainer, .5, {
            alpha: 1,
            overwrite: true
        });
    }
    resizeCanvas();
}

function toggleConfirm(con) {
    confirmContainer.visible = con;
    if (con) {
        TweenMax.pauseAll(true, true);
        gameData.paused = true;
    } else {
        TweenMax.resumeAll(true, true)
        gameData.paused = false;
    }
}
/*!
 *
 * START GAME - This is the function that runs to start play game
 *
 */
function startGame() {
    playerData.win = false;
    loadMazeSettings();
    gameData.keyControl = true;
    gameData.tapControl = true;
    drawMaze();
    toggleGameTimer(true);
}
/*!
 *
 * STOP GAME - This is the function that runs to stop play game
 *
 */
function stopGame() {
    TweenMax.killAll();
    gameData.paused = true;
    pointData.move = false;
    gameData.keyControl = false;
    gameData.tapControl = false;
    keyData.left = keyData.right = keyData.up = keyData.down = false;
}
/*!
 *
 * SAVE GAME - This is the function that runs to save game
 *
 */
function saveGame(score) {}
/*!
 *
 * MAZE SETTINGS - This is the function that runs to load maze settings
 *
 */
function loadMazeSettings() {
    for (var n = 0; n < maze_array.length; n++) {
        if (typeof $.background[n] !== "undefined") {
            $.background[n].visible = false;
        }
    }
    if (gameData.mode != -1) {
        mazeOptionsData.column = randomMaze[gameData.mode].column;
        mazeOptionsData.row = randomMaze[gameData.mode].row;
        mazeOptionsData.column = isEven(mazeOptionsData.column) ? mazeOptionsData.column + 1 : mazeOptionsData.column;
        mazeOptionsData.row = isEven(mazeOptionsData.row) ? mazeOptionsData.row + 1 : mazeOptionsData.row;
        mazeData.startX = 1;
        mazeData.startY = 1;
        mazeData.endX = mazeOptionsData.column - 2;
        mazeData.endY = mazeOptionsData.row - 2;
        mazeOptionsData.pathSize = mazeOptions.pathSize
        mazeOptionsData.wallSize = mazeOptions.wallSize
        mazeOptionsData.wallColor = mazeOptions.wallColor
        mazeOptionsData.pathColor = mazeOptions.pathColor
        mazeOptionsData.pathTransparent = mazeOptions.pathTransparent
        mazeOptionsData.shadow = mazeOptions.shadow
        mazeOptionsData.shadowX = mazeOptions.shadowX
        mazeOptionsData.shadowY = mazeOptions.shadowY
        mazeOptionsData.shadowOpacity = mazeOptions.shadowOpacity
        mazeOptionsData.shadowColor = mazeOptions.shadowColor
        pointOptionsData.radius = pointOptions.radius;
        pointOptionsData.color = pointOptions.color;
        moveOptionsData.trail = moveOptions.trail;
        moveOptionsData.trailType = moveOptions.trailType;
        moveOptionsData.trailColor = moveOptions.trailColor;
        moveOptionsData.trailStroke = moveOptions.trailStroke;
        createMaze();
        gameData.countdownDate = randomMaze[gameData.mode].timer;
    } else {
        mazeData.moves = [];
        mazeData.maze = maze_array[gameData.mazeNum].maze;
        mazeData.startX = maze_array[gameData.mazeNum].start[0];
        mazeData.startY = maze_array[gameData.mazeNum].start[1];
        mazeData.endX = maze_array[gameData.mazeNum].end[0];
        mazeData.endY = maze_array[gameData.mazeNum].end[1];
        gameData.countdownDate = maze_array[gameData.mazeNum].timer;
        mazeOptionsData.column = maze_array[gameData.mazeNum].column;
        mazeOptionsData.row = maze_array[gameData.mazeNum].row;
        mazeOptionsData.pathSize = maze_array[gameData.mazeNum].pathSize;
        mazeOptionsData.wallSize = maze_array[gameData.mazeNum].wallSize;
        mazeOptionsData.wallColor = maze_array[gameData.mazeNum].wallColor;
        mazeOptionsData.pathColor = maze_array[gameData.mazeNum].pathColor;
        mazeOptionsData.pathTransparent = maze_array[gameData.mazeNum].pathTransparent;
        mazeOptionsData.shadow = maze_array[gameData.mazeNum].shadow;
        mazeOptionsData.shadowX = maze_array[gameData.mazeNum].shadowX;
        mazeOptionsData.shadowY = maze_array[gameData.mazeNum].shadowY;
        mazeOptionsData.shadowOpacity = maze_array[gameData.mazeNum].shadowOpacity;
        mazeOptionsData.shadowColor = maze_array[gameData.mazeNum].shadowColor;
        pointOptionsData.radius = maze_array[gameData.mazeNum].pointRadius;
        pointOptionsData.color = maze_array[gameData.mazeNum].pointColor;
        moveOptionsData.trail = maze_array[gameData.mazeNum].trail;
        moveOptionsData.trailType = maze_array[gameData.mazeNum].trailType;
        moveOptionsData.trailColor = maze_array[gameData.mazeNum].trailColor;
        moveOptionsData.trailStroke = maze_array[gameData.mazeNum].trailStroke;
        if (!$.editor.enable) {
            $.background[gameData.mazeNum].visible = true;
        }
    }
}

function loadMazeMode(mode) {
    mazeOptionsData.column = randomMaze[mode].column;
    mazeOptionsData.row = randomMaze[mode].row;
}
/*!
 *
 * CREATE MAZE - This is the function that runs to create maze
 *
 */
function createMaze() {
    mazeOptionsData.column = isEven(mazeOptionsData.column) ? mazeOptionsData.column + 1 : mazeOptionsData.column;
    mazeOptionsData.row = isEven(mazeOptionsData.row) ? mazeOptionsData.row + 1 : mazeOptionsData.row;
    mazeData.moves = [];
    mazeData.maze = [];
    for (var h = 0; h < mazeOptionsData.row; h++) {
        mazeData.maze[h] = [];
        for (var w = 0; w < mazeOptionsData.column; w++) {
            mazeData.maze[h][w] = 1;
        }
    }
    var posX = mazeData.startX;
    var posY = mazeData.startY;
    mazeData.maze[posX][posY] = 0;
    mazeData.moves.push(posY + posY * mazeOptionsData.column);
    while (mazeData.moves.length) {
        var possibleDirections = "";
        if (posX + 2 > 0 && posX + 2 < mazeOptionsData.row - 1 && mazeData.maze[posX + 2][posY] == 1) {
            possibleDirections += "D";
        }
        if (posX - 2 > 0 && posX - 2 < mazeOptionsData.row - 1 && mazeData.maze[posX - 2][posY] == 1) {
            possibleDirections += "U";
        }
        if (posY - 2 > 0 && posY - 2 < mazeOptionsData.column - 1 && mazeData.maze[posX][posY - 2] == 1) {
            possibleDirections += "L";
        }
        if (posY + 2 > 0 && posY + 2 < mazeOptionsData.column - 1 && mazeData.maze[posX][posY + 2] == 1) {
            possibleDirections += "R";
        }
        if (possibleDirections) {
            var move = randomIntFromInterval(0, possibleDirections.length - 1);
            switch (possibleDirections[move]) {
                case "U":
                    mazeData.maze[posX - 2][posY] = 0;
                    mazeData.maze[posX - 1][posY] = 0;
                    posX -= 2;
                    break;
                case "D":
                    mazeData.maze[posX + 2][posY] = 0;
                    mazeData.maze[posX + 1][posY] = 0;
                    posX += 2;
                    break;
                case "L":
                    mazeData.maze[posX][posY - 2] = 0;
                    mazeData.maze[posX][posY - 1] = 0;
                    posY -= 2;
                    break;
                case "R":
                    mazeData.maze[posX][posY + 2] = 0;
                    mazeData.maze[posX][posY + 1] = 0;
                    posY += 2;
                    break;
            }
            mazeData.moves.push(posY + posX * mazeOptionsData.column);
        } else {
            var backTile = mazeData.moves.pop();
            posX = Math.floor(backTile / mazeOptionsData.column);
            posY = backTile % mazeOptionsData.column;
        }
    }
}
/*!
 *
 * DRAW MAZE - This is the function that runs to draw maze
 *
 */
function drawMaze() {
    pointData.init = false;
    pointData.column = pointData.lastColumn = mazeData.startX;
    pointData.row = pointData.lastRow = mazeData.startY;
    var tile = mazeOptionsData.pathSize - mazeOptionsData.wallSize;
    var totalWidth = (mazeOptionsData.column * mazeOptionsData.pathSize) - (tile);
    var totalHeight = (mazeOptionsData.row * mazeOptionsData.pathSize) - (tile);
    mazeHolderContainer.x = canvasW / 2 - (totalWidth / 2);
    mazeHolderContainer.y = canvasH / 2 - (totalHeight / 2);
    mazeShape.graphics.clear();
    trailShape.graphics.clear();
    solveShape.graphics.clear();
    mazeContainer.cache(0, 0, canvasW, canvasH);
    for (var h = 0; h < mazeOptionsData.row; h++) {
        for (var w = 0; w < mazeOptionsData.column; w++) {
            if (mazeData.maze[h][w] == 1) {
                var tileW = mazeOptionsData.pathSize;
                var tileH = mazeOptionsData.pathSize;
                if (h == mazeOptionsData.row - 1) {
                    tileH = mazeOptionsData.wallSize;
                }
                if (w == mazeOptionsData.column - 1) {
                    tileW = mazeOptionsData.wallSize;
                }
                mazeShape.graphics.beginFill(mazeOptionsData.wallColor).drawRect(w * mazeOptionsData.pathSize, h * mazeOptionsData.pathSize, tileW, tileH);
            }
        }
    }
    mazeContainer.updateCache("source-over");
    mazeShape.graphics.clear();
    var tile = mazeOptionsData.pathSize - mazeOptionsData.wallSize;
    for (var h = 0; h < mazeOptionsData.row; h++) {
        for (var w = 0; w < mazeOptionsData.column; w++) {
            if (mazeData.maze[h][w] == 0) {
                mazeShape.graphics.beginFill(mazeOptionsData.pathColor).drawRect((w * mazeOptionsData.pathSize) - tile, (h * mazeOptionsData.pathSize) - tile, mazeOptionsData.pathSize + (tile), mazeOptionsData.pathSize + (tile));
            }
        }
    }
    if (mazeOptionsData.pathTransparent) {
        mazeContainer.updateCache("destination-out");
        mazeShape.graphics.clear();
    } else {
        mazeContainer.updateCache("source-over");
        mazeShape.graphics.clear();
    }
    var tile = mazeOptionsData.pathSize - mazeOptionsData.wallSize;
    for (var h = 0; h < mazeOptionsData.row; h++) {
        for (var w = 0; w < mazeOptionsData.column; w++) {
            if (mazeData.maze[h][w] == 2) {
                mazeShape.graphics.beginFill(mazeOptionsData.pathColor).drawRect((w * mazeOptionsData.pathSize) - tile, (h * mazeOptionsData.pathSize) - tile, mazeOptionsData.pathSize + (tile), mazeOptionsData.pathSize + (tile));
            }
        }
    }
    mazeContainer.updateCache("destination-out");
    mazeShape.graphics.clear();
    var tileSize = mazeOptionsData.pathSize + (tile);
    var tile = (mazeOptionsData.wallSize) / 2;
    pointShape.graphics.clear();
    pointShape.graphics.beginFill(pointOptionsData.color).drawCircle(0, 0, pointOptionsData.radius);
    pointShape.x = (mazeData.startX * mazeOptionsData.pathSize) + tile;
    pointShape.y = (mazeData.startY * mazeOptionsData.pathSize) + tile;
    pointData.x = pointShape.x;
    pointData.y = pointShape.y;
    dragShape.x = pointShape.x;
    dragShape.y = pointShape.y;
    mazeHolderContainer.removeChild(iconTrohpy);
    iconTrohpy.visible = true;
    if ($.editor.enable) {
        if (maze_array[gameData.mazeNum].trophyImage != '') {
            iconTrohpy = new createjs.Bitmap(mazeLoader.getResult('trophyImage'));
            centerReg(iconTrohpy);
        } else {
            iconTrohpy.visible = false;
        }
    } else {
        if (gameData.mode == -1) {
            if (maze_array[gameData.mazeNum].trophyImage != '') {
                iconTrohpy = new createjs.Bitmap(loader.getResult('trophyIcon' + gameData.mazeNum));
                centerReg(iconTrohpy);
            } else {
                iconTrohpy.visible = false;
            }
        } else {
            iconTrohpy = new createjs.Bitmap(loader.getResult('iconTrohpy'));
            centerReg(iconTrohpy);
        }
    }
    mazeHolderContainer.addChild(iconTrohpy);
    iconTrohpy.x = (mazeData.endX * mazeOptionsData.pathSize) + tile;
    iconTrohpy.y = (mazeData.endY * mazeOptionsData.pathSize) + tile;
    drawMazeShadow();
}

function drawMazeShadow() {
    mazeShadowShape.graphics.clear();
    mazeShadowContainer.cache(0, 0, canvasW, canvasH);
    for (var h = 0; h < mazeOptionsData.row; h++) {
        for (var w = 0; w < mazeOptionsData.column; w++) {
            if (mazeData.maze[h][w] == 1) {
                var tileW = mazeOptionsData.pathSize;
                var tileH = mazeOptionsData.pathSize;
                if (h == mazeOptionsData.row - 1) {
                    tileH = mazeOptionsData.wallSize;
                }
                if (w == mazeOptionsData.column - 1) {
                    tileW = mazeOptionsData.wallSize;
                }
                mazeShadowShape.graphics.beginFill(mazeOptionsData.shadowColor).drawRect(w * mazeOptionsData.pathSize, h * mazeOptionsData.pathSize, tileW, tileH);
            }
        }
    }
    mazeShadowContainer.updateCache("source-over");
    mazeShadowShape.graphics.clear();
    var tile = mazeOptionsData.pathSize - mazeOptionsData.wallSize;
    for (var h = 0; h < mazeOptionsData.row; h++) {
        for (var w = 0; w < mazeOptionsData.column; w++) {
            if (mazeData.maze[h][w] == 0) {
                mazeShadowShape.graphics.beginFill(mazeOptionsData.pathColor).drawRect((w * mazeOptionsData.pathSize) - tile, (h * mazeOptionsData.pathSize) - tile, mazeOptionsData.pathSize + (tile), mazeOptionsData.pathSize + (tile));
            }
        }
    }
    mazeShadowContainer.updateCache("destination-out");
    mazeShadowShape.graphics.clear();
    var tile = mazeOptionsData.pathSize - mazeOptionsData.wallSize;
    for (var h = 0; h < mazeOptionsData.row; h++) {
        for (var w = 0; w < mazeOptionsData.column; w++) {
            if (mazeData.maze[h][w] == 2) {
                mazeShape.graphics.beginFill(mazeOptionsData.pathColor).drawRect((w * mazeOptionsData.pathSize) - tile, (h * mazeOptionsData.pathSize) - tile, mazeOptionsData.pathSize + (tile), mazeOptionsData.pathSize + (tile));
            }
        }
    }
    mazeShadowContainer.updateCache("destination-out");
    mazeShadowShape.graphics.clear();
    mazeShadowContainer.x = mazeOptionsData.shadowX;
    mazeShadowContainer.y = mazeOptionsData.shadowY;
    mazeShadowContainer.alpha = mazeOptionsData.shadowOpacity;
    if (mazeOptionsData.shadow) {
        mazeShadowContainer.visible = true;
    } else {
        mazeShadowContainer.visible = false;
    }
}
/*!
 *
 * POINT MOVE - This is the function that runs for point movement
 *
 */
function startPointMove() {
    pointData.oldX = stage.mouseX;
    pointData.oldY = stage.mouseY;
    pointData.move = true;
}

function stopPointMove() {
    pointData.move = false;
}

function detectNextMove() {
    if (pointData.move) {
        var posX = stage.mouseX - pointData.oldX;
        var posY = stage.mouseY - pointData.oldY;
        var nextDirection = '';
        var movePath = mazeOptionsData.pathSize;
        if (posX > (movePath / 2)) {
            nextDirection = 'R';
        } else if (posX < -(movePath / 2)) {
            nextDirection = 'L';
        } else if (posY > (movePath / 2)) {
            nextDirection = 'D';
        } else if (posY < -(movePath / 2)) {
            nextDirection = 'U';
        }
        placeNextMove(nextDirection);
    } else {
        var nextDirection = '';
        if (keyData.left) {
            nextDirection = 'L';
        } else if (keyData.right) {
            nextDirection = 'R';
        } else if (keyData.up) {
            nextDirection = 'U';
        } else if (keyData.down) {
            nextDirection = 'D';
        }
        if (nextDirection != '') {
            if (keyData.delayCount > 0) {
                keyData.delayCount--;
            } else {
                keyData.delayCount = keyData.delay;
                placeNextMove(nextDirection);
            }
        }
    }
}

function placeNextMove(nextDirection) {
    if (nextDirection != '') {
        var newColumn = pointData.column;
        var newRow = pointData.row;
        switch (nextDirection) {
            case 'R':
                newColumn++;
                break;
            case 'L':
                newColumn--;
                break;
            case 'U':
                newRow--;
                break;
            case 'D':
                newRow++;
                break;
            default:
        }
        if (typeof mazeData.maze[newRow] !== "undefined") {
            if (typeof mazeData.maze[newRow][newColumn] !== "undefined") {
                if (mazeData.maze[newRow][newColumn] == 0) {
                    drawTrail(newColumn, newRow);
                    pointData.column = newColumn;
                    pointData.row = newRow;
                    var tile = (mazeOptionsData.wallSize) / 2;
                    var newPosX = (pointData.column * mazeOptionsData.pathSize) + tile;
                    var newPosY = (pointData.row * mazeOptionsData.pathSize) + tile;
                    pointData.x = newPosX;
                    pointData.y = newPosY;
                    pointData.oldX = stage.mouseX
                    pointData.oldY = stage.mouseY
                    pointData.delayCount = 0;
                    TweenMax.to(pointShape, .2, {
                        x: newPosX,
                        y: newPosY,
                        overwrite: true
                    });
                    if (pointData.column == mazeData.endX && pointData.row == mazeData.endY) {
                        playSound('soundTrophy');
                        toggleGameStatus('complete');
                        endGame(true);
                    }
                }
            }
        }
    }
}
/*!
 *
 * END GAME - This is the function that runs for end game
 *
 */
function endGame(win) {
    iconTrohpy.visible = false;
    pointData.move = false;
    gameData.keyControl = false;
    gameData.tapControl = false;
    playerData.win = win;
    toggleGameTimer(false);
    if (!$.editor.enable) {
        TweenMax.to(gameContainer, 3.5, {
            overwrite: true,
            onComplete: function() {
                goPage('result');
            }
        });
    }
}
/*!
 *
 * GAME STATUS - This is the function that runs for game status
 *
 */
function toggleGameStatus(status) {
    var statusShow = false;
    if (status == 'complete') {
        statusShow = true;
        gameStatusTxt.text = mazeComplete;
    } else if (status == 'fail') {
        statusShow = true;
        gameStatusTxt.text = mazeFail;
    }
    if (statusShow) {
        gameStatusContainer.visible = true;
        gameStatusContainer.alpha = 0;
        TweenMax.to(gameStatusContainer, .5, {
            delay: .5,
            alpha: 1,
            overwrite: true,
            onComplete: function() {
                if (status == 'complete') {
                    playSound('soundComplete');
                } else {
                    playSound('soundFail');
                }
                TweenMax.to(gameStatusContainer, .5, {
                    delay: 1.5,
                    alpha: 0,
                    overwrite: true,
                    onComplete: function() {
                        toggleGameStatus();
                    }
                });
            }
        });
    } else {
        gameStatusContainer.visible = false;
    }
}
/*!
 *
 * DRAW TRAIL - This is the function that runs to draw trail
 *
 */
function drawTrail(column, row) {
    if (moveOptionsData.trail) {
        var tile = mazeOptionsData.pathSize - mazeOptionsData.wallSize;
        if (moveOptionsData.trailType == 'fill') {
            if (!pointData.init) {
                pointData.init = true;
                trailShape.graphics.beginFill(moveOptionsData.trailColor).drawRect((mazeData.startX * mazeOptionsData.pathSize + 1) - tile, (mazeData.startY * mazeOptionsData.pathSize + 1) - tile, (mazeOptionsData.pathSize - 2) + (tile), (mazeOptionsData.pathSize - 2) + (tile));
            }
            TweenMax.to(trailShape, .2, {
                onComplete: function() {
                    trailShape.graphics.beginFill(moveOptionsData.trailColor).drawRect((column * mazeOptionsData.pathSize + 1) - tile, (row * mazeOptionsData.pathSize + 1) - tile, (mazeOptionsData.pathSize - 2) + (tile), (mazeOptionsData.pathSize - 2) + (tile));
                }
            });
        } else {
            var tile = mazeOptionsData.wallSize / 2;
            if (!pointData.init) {
                pointData.init = true;
                trailShape.graphics.setStrokeStyle(moveOptionsData.trailStroke).beginStroke(moveOptionsData.trailColor).moveTo((mazeData.startX * mazeOptionsData.pathSize) + tile, (mazeData.startY * mazeOptionsData.pathSize) + tile).lineTo((column * mazeOptionsData.pathSize) + tile, (row * mazeOptionsData.pathSize) + tile);
                pointData.lastColumn = column;
                pointData.lastRow = row;
            }
            TweenMax.to(trailShape, .1, {
                onComplete: function() {
                    trailShape.graphics.setStrokeStyle(moveOptionsData.trailStroke).beginStroke(moveOptionsData.trailColor).moveTo((pointData.lastColumn * mazeOptionsData.pathSize) + tile, (pointData.lastRow * mazeOptionsData.pathSize) + tile).lineTo((column * mazeOptionsData.pathSize) + tile, (row * mazeOptionsData.pathSize) + tile);
                    pointData.lastColumn = column;
                    pointData.lastRow = row;
                }
            });
        }
    }
}
/*!
 *
 * LOOP GAME - This is the function that runs to loop game
 *
 */
function updateGame() {
    if (gameData.timer) {
        var currentTime = new Date();
        var datenumber = currentTime - gameData.startDate;
        playerData.time = gameData.countdownDate - datenumber;
        if (playerData.time <= 0) {
            playerData.time = 0;
            toggleGameStatus('fail');
            toggleGameTimer(false);
            endGame(false)
        }
        var timerText = millisecondsToTime(playerData.time);
        gameTimerTxt.text = timerText;
    }
    if (pointData.move) {
        if (pointData.delayCount > 0) {
            pointData.delayCount--;
        } else {
            pointData.oldX = stage.mouseX
            pointData.oldY = stage.mouseY
            pointData.delayCount = pointData.delay;
        }
    }
    dragShape.x = pointData.x;
    dragShape.y = pointData.y;
    detectNextMove();
}
/*!
 *
 * UPDATE GAME TIMER - This is the function that runs to update game timer
 *
 */
function toggleGameTimer(con) {
    gameData.timer = con;
    if (con) {
        gameData.startDate = new Date();
    }
}
/*!
 *
 * OPTIONS - This is the function that runs to toggle options
 *
 */
function toggleOption() {
    if (optionsContainer.visible) {
        optionsContainer.visible = false;
    } else {
        optionsContainer.visible = true;
    }
}
/*!
 *
 * OPTIONS - This is the function that runs to mute and fullscreen
 *
 */
function toggleGameMute(con) {
    buttonSoundOff.visible = false;
    buttonSoundOn.visible = false;
    toggleMute(con);
    if (con) {
        buttonSoundOn.visible = true;
    } else {
        buttonSoundOff.visible = true;
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}
/*!
 *
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 *
 */
function millisecondsToTime(milli) {
    var milliseconds = milli % 1000;
    var seconds = Math.floor((milli / 1000) % 60);
    var minutes = Math.floor((milli / (60 * 1000)) % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return minutes + ':' + seconds;
}
/*!
 *
 * SHARE - This is the function that runs to open share url
 *
 */
function share(action) {
   /*  gtag('event', 'click', {
        'event_category': 'share',
        'event_label': action
    }); */
    var loc = "https://localhost/me-cung-sieu-to-khong-lo/game";
    var title = '';
    var text = '';
    title = shareTitle.replace("[TIME]", millisecondsToTime(playerData.time));
    text = shareMessage.replace("[TIME]", millisecondsToTime(playerData.time));
    var shareurl = '';
    if (action == 'twitter') {
        shareurl = 'https://twitter.com/intent/tweet?url=' + loc + '&text=' + text;
    } else if (action == 'facebook') {
        shareurl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(loc + 'share.php?desc=' + text + '&title=' + title + '&url=' + loc + '&thumb=' + loc + 'share.jpg&width=590&height=300');
    } else if (action == 'whatsapp') {
        shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
    }
    window.open(shareurl);
}
var sortFunction = function(obj1, obj2, options) {
    if (obj1.y > obj2.y) {
        return 1;
    }
    if (obj1.y < obj2.y) {
        return -1;
    }
    return 0;
}