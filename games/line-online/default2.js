// Programming by Philipp Lenssen based on a game idea by Olga Demina

var map = new Array();
var map_cache = new Array();
var g_mapMax = null;
var g_colorMax = null;
var g_ballsPerTurn = null;
var g_tileSize = null;
var g_circleMax = null;
var g_ballsStart = 5;
var g_empty = -1;
var g_completeLine = 5;
var selectedBall = new Position();
var busy = true;
var g_pathIterator = 0;
var g_shortestPath = null;
var g_moveDelay = 50;
var g_moveSegmentMs = 55;
var g_nextBalls = new Array();
var g_nextBallPos = new Array();
var g_previewDomKeys = new Array();
var g_score = 0;
var g_combo = 0;
var g_comboBumpPending = false;
var g_comboFxShown = false;
var g_comboBatchCells = [];
var g_avatars = new Array();
var g_avatarsDelay = 200;
var g_circlesDelay = 80;
var g_circles = new Array();
var g_scoreBarOverlayCounter = 0;

function resetCombo()
{
    g_combo = 0;
    g_comboBumpPending = false;
    g_comboFxShown = false;
    g_comboBatchCells = [];
}

function ensureScoreFxLayer()
{
    var layer = document.getElementById("scoreFxLayer");
    if (layer) {
        return layer;
    }
    var board = document.querySelector(".board");
    if (!board) {
        return null;
    }
    layer = document.createElement("div");
    layer.id = "scoreFxLayer";
    board.appendChild(layer);
    return layer;
}

function cellCenterPx(x, y)
{
    var size = g_tileSize || 48;
    return {
        x: x * size + size / 2,
        y: y * size + size / 2
    };
}

function centroidOfCells(cells)
{
    if (!cells || !cells.length) {
        return { x: 216, y: 216 };
    }
    var sx = 0;
    var sy = 0;
    var n = 0;
    for (var i = 0; i < cells.length; i++) {
        var c = cells[i];
        if (!c || typeof c.x !== "number" || typeof c.y !== "number") {
            continue;
        }
        var p = cellCenterPx(c.x, c.y);
        sx += p.x;
        sy += p.y;
        n++;
    }
    if (!n) {
        return { x: 216, y: 216 };
    }
    return { x: sx / n, y: sy / n };
}

function spawnFxNode(className, text, x, y, durationMs)
{
    var layer = ensureScoreFxLayer();
    if (!layer) {
        return;
    }
    var el = document.createElement("div");
    el.className = className;
    el.textContent = text;
    el.style.left = Math.round(x) + "px";
    el.style.top = Math.round(y) + "px";
    layer.appendChild(el);
    setTimeout(function () {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }, durationMs || 800);
}

function showScoreFly(points, cells)
{
    var center = centroidOfCells(cells);
    spawnFxNode("score-fly", "+" + points, center.x, center.y, 750);
}

function showComboFly(combo, cells)
{
    var center = centroidOfCells(cells);
    spawnFxNode("combo-fly", "COMBO x" + combo, center.x, center.y - 22, 700);
}

function clearBoardArrays()
{
    for (var x = 0; x < g_mapMax; x++) {
        map[x] = new Array();
        map_cache[x] = new Array();
        for (var y = 0; y < g_mapMax; y++) {
            map[x][y] = g_empty;
            // Force render() to refresh every cell (must differ from g_empty).
            map_cache[x][y] = null;
        }
    }
}

function resetAllBallDomClasses()
{
    g_previewDomKeys = [];
    for (var x = 0; x < g_mapMax; x++) {
        for (var y = 0; y < g_mapMax; y++) {
            var elm = document.getElementById("ball" + x + "_" + y);
            if (!elm) {
                continue;
            }
            elm.className = "ball";
            elm.style.transform = "";
            elm.style.opacity = "";
            elm.style.animation = "";
        }
    }
}

function hideGameOver()
{
    var elmGameOver = document.getElementById("gameOver");
    var elmShade = document.getElementById("gameOverShade");
    if (elmGameOver) { elmGameOver.style.display = "none"; }
    if (elmShade) { elmShade.style.display = "none"; }
}

function snapshotProgress(gameOver)
{
    if (typeof ArcadeSave === "undefined" || !ArcadeSave || !ArcadeSave.notifyProgress) {
        return;
    }
    var mapCopy = [];
    for (var x = 0; x < g_mapMax; x++) {
        mapCopy[x] = [];
        for (var y = 0; y < g_mapMax; y++) {
            mapCopy[x][y] = map[x][y];
        }
    }
    var nextCopy = [];
    var nextPosCopy = [];
    for (var i = 0; i < g_nextBalls.length; i++) {
        nextCopy[i] = g_nextBalls[i];
        var p = g_nextBallPos[i];
        if (p && typeof p.x === "number" && typeof p.y === "number") {
            nextPosCopy[i] = { x: p.x, y: p.y };
        } else {
            nextPosCopy[i] = null;
        }
    }
    ArcadeSave.notifyProgress({
        map: mapCopy,
        nextBalls: nextCopy,
        nextBallPos: nextPosCopy,
        score: g_score,
        gameOver: !!gameOver
    });
}

function applyRun(run)
{
    if (!run || !run.map || run.map.length !== g_mapMax) {
        return false;
    }
    for (var x = 0; x < g_mapMax; x++) {
        if (!run.map[x] || run.map[x].length !== g_mapMax) {
            return false;
        }
        for (var y = 0; y < g_mapMax; y++) {
            map[x][y] = run.map[x][y];
            map_cache[x][y] = null;
        }
    }
    g_score = (typeof run.score === "number" && run.score >= 0) ? run.score : 0;
    resetCombo();
    g_nextBalls = new Array();
    g_nextBallPos = new Array();
    var srcNext = run.nextBalls || [];
    var srcPos = run.nextBallPos || [];
    var hasValidPos = false;
    for (var i = 0; i < g_ballsPerTurn; i++) {
        if (typeof srcNext[i] === "number" && srcNext[i] !== g_empty) {
            g_nextBalls[i] = srcNext[i];
        } else {
            g_nextBalls[i] = getRandomBall();
        }
        var p = srcPos[i];
        if (p && typeof p.x === "number" && typeof p.y === "number" &&
            p.x >= 0 && p.x < g_mapMax && p.y >= 0 && p.y < g_mapMax &&
            map[p.x][p.y] == g_empty) {
            g_nextBallPos[i] = { x: p.x, y: p.y };
            hasValidPos = true;
        } else {
            g_nextBallPos[i] = null;
        }
    }
    // Old saves without nextBallPos: assign fresh preview seats.
    if (!hasValidPos) {
        assignNextBallPositions();
    }
    selectedBall.x = null;
    selectedBall.y = null;
    render();
    if (run.gameOver) {
        var elmGameOverScore = document.getElementById("gameOverScore");
        if (elmGameOverScore) {
            elmGameOverScore.innerHTML = g_score;
        }
        showElm("gameOver");
        showElm("gameOverShade");
        busy = true;
    } else {
        hideGameOver();
        busy = false;
    }
    return true;
}

function startFreshGame()
{
    if (typeof ArcadeSave !== "undefined" && ArcadeSave && ArcadeSave.clearRunAndStartFresh) {
        ArcadeSave.clearRunAndStartFresh();
    }
    hideGameOver();
    g_score = 0;
    resetCombo();
    selectedBall.x = null;
    selectedBall.y = null;
    clearBoardArrays();
    resetAllBallDomClasses();
    for (var i = 0; i < g_ballsStart; i++) {
        addBall( getRandomBall() );
    }
    prepareNextBalls();
    render();
    busy = false;
    snapshotProgress(false);
    return false;
}

function init(mapMax, colorMax, ballsPerTurn, tileSize, circleMax)
{
    g_mapMax = mapMax;
    g_colorMax = colorMax;
    g_ballsPerTurn = ballsPerTurn;
    g_tileSize = tileSize;
    g_circleMax = circleMax;

    clearBoardArrays();

    initAvatars();
    initCircles();

    var restored = false;
    if (typeof ArcadeSave !== "undefined" && ArcadeSave && ArcadeSave.consumePendingRun) {
        var pending = ArcadeSave.consumePendingRun();
        if (pending) {
            restored = applyRun(pending);
        }
    }

    if (!restored) {
        g_score = 0;
        resetCombo();
        for (var i = 0; i < g_ballsStart; i++) {
            addBall( getRandomBall() );
        }
        prepareNextBalls();
        render();
        busy = false;
        snapshotProgress(false);
    }
}

function clickMap(x, y)
{
    if (busy) {
        return;
    }
    busy = true;

    var hasRealSelection =
        selectedBall.x != null &&
        selectedBall.y != null &&
        map[selectedBall.x][selectedBall.y] != g_empty;

    // Toggle off when clicking the same selected real ball.
    if (hasRealSelection && x == selectedBall.x && y == selectedBall.y) {
        doLolite(selectedBall.x, selectedBall.y);
        selectedBall.x = null;
        selectedBall.y = null;
        busy = false;
        return;
    }

    // Empty / preview cell: only as move destination, never select/hilite.
    if (map[x][y] == g_empty) {
        if (hasRealSelection) {
            g_shortestPath = getShortestPath(selectedBall.x, selectedBall.y, x, y);
            if (g_shortestPath.length >= 1) {
                doLolite(selectedBall.x, selectedBall.y);
                startPathMove();
            } else {
                busy = false;
            }
        } else {
            busy = false;
        }
        return;
    }

    // Clicked a real ball: select it.
    if (hasRealSelection) {
        doLolite(selectedBall.x, selectedBall.y);
    }
    selectedBall.x = x;
    selectedBall.y = y;
    doHilite(selectedBall.x, selectedBall.y);
    busy = false;
}

function initAvatars()
{
    var i = 0;
    g_avatars[i] = new Avatar();
    g_avatars[i].x = 60;
    g_avatars[i].speedX = 6;
    g_avatars[i].y = 500;
    g_avatars[i].type = 1;
    g_avatars[i].limitX2 = 415;

    i = 1;
    g_avatars[i] = new Avatar();
    g_avatars[i].x = 470;
    g_avatars[i].y = 500;
    g_avatars[i].speedX = - 4;
    g_avatars[i].type = 2;
    setTimeout("moveAvatars()", g_avatarsDelay);
}

function initCircles()
{
    for (var i = 0; i < g_circleMax; i++) {
        g_circles[i] = new Circle();
        g_circles[i].x = getRandomInt(0, 400);
        g_circles[i].y = getRandomInt(0, 400);
        g_circles[i].visible = false;
    }
    setTimeout("animateCircles()", g_circlesDelay);
}

function moveAvatars()
{
    for (var i = 0; i < g_avatars.length; i++) {
        g_avatars[i].speedX *= .8;
        if (g_avatars[i].speedX >= -0.1 && g_avatars[i].speedX < 0.1) {
            g_avatars[i].speedX = 0;
        }
        g_avatars[i].move();
        g_avatars[i].render();
    }
    setTimeout("moveAvatars()", g_avatarsDelay);
}

function animateCircles()
{
    for (var i = 0; i < g_circleMax; i++) {
        g_circles[i].animate();
        g_circles[i].render();
    }
    setTimeout("animateCircles()", g_circlesDelay);
}

function createCircleAt(x, y, size, source, growth)
{
    for (var i = 0; i < g_circleMax; i++) {
        if (!g_circles[i].visible && g_circles[i].elm) {
            g_circles[i].x = x;
            g_circles[i].y = y;
            g_circles[i].opacity = 100;
            g_circles[i].size = size;
            g_circles[i].growth = growth;
            g_circles[i].source = source;
            g_circles[i].visible = true;
            // alert("Created new circle at " + x + "/" + y);
            break;
        }
    }
}

function assignNextBallPositions()
{
    g_nextBallPos = new Array();
    var reserved = {};
    for (var i = 0; i < g_ballsPerTurn; i++) {
        var tile = getRandomFreeTileExcluding(reserved);
        if (tile.x != null && tile.y != null) {
            g_nextBallPos[i] = { x: tile.x, y: tile.y };
            reserved[tile.x + "_" + tile.y] = true;
        } else {
            g_nextBallPos[i] = null;
        }
    }
}

function countFreeTiles()
{
    return getFreeTiles().length;
}

function countPendingNextBalls()
{
    var n = 0;
    for (var i = 0; i < g_ballsPerTurn; i++) {
        if (typeof g_nextBalls[i] === "number" && g_nextBalls[i] !== g_empty) {
            n++;
        }
    }
    return n;
}

function allNextPositionsAssigned()
{
    for (var i = 0; i < g_ballsPerTurn; i++) {
        if (typeof g_nextBalls[i] !== "number" || g_nextBalls[i] === g_empty) {
            continue;
        }
        var pos = g_nextBallPos[i];
        if (!pos || typeof pos.x !== "number" || typeof pos.y !== "number") {
            return false;
        }
    }
    return true;
}

function triggerGameOver()
{
    var elmGameOver = document.getElementById("gameOver");
    if (elmGameOver && elmGameOver.style.display === "block") {
        return;
    }
    var elmGameOverScore = document.getElementById("gameOverScore");
    if (elmGameOverScore) {
        elmGameOverScore.innerHTML = g_score;
    }
    try {
        if (typeof GV !== "undefined") {
            new GV().saveScore(g_score);
        }
    } catch (e) { /* ignore */ }
    showElm("gameOver");
    showElm("gameOverShade");
    busy = true;
    snapshotProgress(true);
    if (typeof ArcadeSave !== "undefined" && ArcadeSave && ArcadeSave.flushNow) {
        try { ArcadeSave.flushNow(); } catch (e2) { /* ignore */ }
    }
}

function prepareNextBalls()
{
    for (var i = 0; i < g_ballsPerTurn; i++) {
        g_nextBalls[i] = getRandomBall();
    }
    assignNextBallPositions();
    // Not enough empty cells for every next ball → lose (stops infinite 1-empty loop).
    if (!allNextPositionsAssigned()) {
        triggerGameOver();
    }
}

function throwNextBalls()
{
    var pending = countPendingNextBalls();
    var freeAtStart = countFreeTiles();
    var loseForSpace = freeAtStart < pending;

    for (var i = 0; i < g_ballsPerTurn; i++) {
        var color = g_nextBalls[i];
        var pos = g_nextBallPos[i];
        g_nextBalls[i] = g_empty;
        g_nextBallPos[i] = null;
        if (typeof color !== "number" || color === g_empty) {
            continue;
        }
        if (!pos || typeof pos.x !== "number" || typeof pos.y !== "number") {
            continue;
        }
        if (pos.x < 0 || pos.x >= g_mapMax || pos.y < 0 || pos.y >= g_mapMax) {
            continue;
        }
        // Classic Lines 98: if player already occupied the preview cell, cancel spawn.
        if (map[pos.x][pos.y] == g_empty) {
            map[pos.x][pos.y] = color;
        }
    }

    var hasLines = checkHasLines();
    if (hasLines) {
        render();
    }

    if (loseForSpace || countFreeTiles() === 0) {
        triggerGameOver();
    }
}

function clearPreviewDom()
{
    for (var i = 0; i < g_previewDomKeys.length; i++) {
        var key = g_previewDomKeys[i];
        var parts = key.split("_");
        var x = parseInt(parts[0], 10);
        var y = parseInt(parts[1], 10);
        var elm = document.getElementById("ball" + key);
        if (!elm || isNaN(x) || isNaN(y)) {
            continue;
        }
        if ((" " + elm.className + " ").indexOf(" ball-clearing ") >= 0) {
            continue;
        }
        if (map[x][y] == g_empty) {
            elm.className = "ball";
            elm.src = "image2/ball" + g_empty + ".png";
            map_cache[x][y] = g_empty;
        } else if ((" " + elm.className + " ").indexOf(" ball-preview ") >= 0) {
            elm.className = "ball";
        }
    }
    g_previewDomKeys = [];
}

function renderPreviews()
{
    clearPreviewDom();
    for (var i = 0; i < g_ballsPerTurn; i++) {
        var color = g_nextBalls[i];
        var pos = g_nextBallPos[i];
        if (typeof color !== "number" || color === g_empty || !pos) {
            continue;
        }
        if (typeof pos.x !== "number" || typeof pos.y !== "number") {
            continue;
        }
        if (pos.x < 0 || pos.x >= g_mapMax || pos.y < 0 || pos.y >= g_mapMax) {
            continue;
        }
        if (map[pos.x][pos.y] != g_empty) {
            continue;
        }
        var elm = document.getElementById("ball" + pos.x + "_" + pos.y);
        if (!elm) {
            continue;
        }
        if ((" " + elm.className + " ").indexOf(" ball-clearing ") >= 0) {
            continue;
        }
        // Full sprite + CSS scale reads sharper than 24px small PNGs.
        elm.src = "image2/ball" + color + ".png";
        elm.className = "ball ball-preview";
        g_previewDomKeys.push(pos.x + "_" + pos.y);
        map_cache[pos.x][pos.y] = "preview-" + color;
    }
}

function buildPathWaypoints(startX, startY, path)
{
    var points = [{ x: startX, y: startY }];
    var x = startX;
    var y = startY;
    for (var i = 0; i < path.length; i++) {
        switch (path[i]) {
            case "L": x--; break;
            case "U": y--; break;
            case "R": x++; break;
            case "D": y++; break;
        }
        points.push({ x: x, y: y });
    }
    return points;
}

function startPathMove()
{
    var startX = selectedBall.x;
    var startY = selectedBall.y;
    var color = map[startX][startY];
    var path = g_shortestPath;
    if (color == g_empty || !path || path.length < 1) {
        busy = false;
        return;
    }

    var waypoints = buildPathWaypoints(startX, startY, path);
    var dest = waypoints[waypoints.length - 1];

    map[startX][startY] = g_empty;
    render();

    var mover = document.getElementById("ballMover");
    if (!mover) {
        map[dest.x][dest.y] = color;
        selectedBall.x = null;
        selectedBall.y = null;
        render();
        setTimeout(checkMove, g_moveDelay * 4);
        return;
    }

    mover.src = "image2/ball" + color + ".png";
    mover.style.left = (startX * g_tileSize) + "px";
    mover.style.top = (startY * g_tileSize) + "px";
    mover.className = "ball ball-mover is-moving";

    animatePathMove(mover, waypoints, color, dest);
}

function animatePathMove(mover, waypoints, color, dest)
{
    var segmentMs = g_moveSegmentMs;
    var segIndex = 0;
    var segStart = null;
    var from = waypoints[0];
    var to = waypoints[1];

    function finishMove()
    {
        mover.className = "ball ball-mover";
        mover.style.left = "";
        mover.style.top = "";
        map[dest.x][dest.y] = color;
        selectedBall.x = null;
        selectedBall.y = null;
        render();
        setTimeout(checkMove, g_moveDelay * 4);
    }

    function frame(now)
    {
        if (segStart === null) {
            segStart = now;
        }
        var t = (now - segStart) / segmentMs;
        if (t > 1) {
            t = 1;
        }
        var lx = from.x + (to.x - from.x) * t;
        var ly = from.y + (to.y - from.y) * t;
        mover.style.left = Math.round(lx * g_tileSize) + "px";
        mover.style.top = Math.round(ly * g_tileSize) + "px";

        if (t >= 1) {
            var excess = (now - segStart) - segmentMs;
            segIndex++;
            if (segIndex >= waypoints.length - 1) {
                finishMove();
                return;
            }
            from = waypoints[segIndex];
            to = waypoints[segIndex + 1];
            segStart = now - Math.max(0, Math.min(excess, segmentMs * 0.9));
        }
        if (window.requestAnimationFrame) {
            requestAnimationFrame(frame);
        } else {
            setTimeout(function () { frame(Date.now()); }, 16);
        }
    }

    if (window.requestAnimationFrame) {
        requestAnimationFrame(frame);
    } else {
        setTimeout(function () { frame(Date.now()); }, 16);
    }
}

function continuePath()
{
    // Legacy hop-per-cell move; replaced by startPathMove / animatePathMove.
    startPathMove();
}

function checkMove()
{
    if ( checkHasLines() ) {
        render();
        busy = false;
        snapshotProgress(false);
    }
    else {
        // Missed clear: break combo before next balls spawn.
        resetCombo();
        throwNextBalls();
        var elmGameOver = document.getElementById("gameOver");
        var isGameOver = elmGameOver && elmGameOver.style.display === "block";
        if (!isGameOver) {
            prepareNextBalls();
            isGameOver = elmGameOver && elmGameOver.style.display === "block";
        }
        g_avatars[0].speedX = -2;
        render();
        if (!isGameOver) {
            busy = false;
            snapshotProgress(false);
        }
    }
}

function checkHasLines()
{
    var hasLines = false;
    g_comboBumpPending = true;
    g_comboFxShown = false;
    g_comboBatchCells = [];

    var map_check = new Array();
    for (var x = 0; x < g_mapMax; x++) {
        map_check[x] = new Array();
        for (var y = 0; y < g_mapMax; y++) {
            map_check[x][y] = map[x][y];
        }
    }

    // Checking --
    for (var y = -1; y < g_mapMax + 1; y++) {
        var x = -1;
        var thisHasLines = checkHasLinesDirection(map_check, x, y, 1, 0);
        if (thisHasLines) { hasLines = true; }
    }

    // Checking |
    for (var x = -1; x < g_mapMax + 1; x++) {
        var y = -1;
        var thisHasLines = checkHasLinesDirection(map_check, x, y, 0, 1);
        if (thisHasLines) { hasLines = true; }
    }

    // Checking \
    for (var x = -1; x < g_mapMax + 1; x++) {
        var y = -1;
        var thisHasLines = checkHasLinesDirection(map_check, x, y, 1, 1);
        if (thisHasLines) { hasLines = true; }
    }
    for (var y = 0; y < g_mapMax + 1; y++) {
        var x = -1;
        var thisHasLines = checkHasLinesDirection(map_check, x, y, 1, 1);
        if (thisHasLines) { hasLines = true; }
    }

    // Checking /
    for (var x = -1; x < g_mapMax + 1; x++) {
        var y = -1;
        var thisHasLines = checkHasLinesDirection(map_check, x, y, -1, 1);
        if (thisHasLines) { hasLines = true; }
    }
    for (var y = 0; y < g_mapMax + 1; y++) {
        var x = g_mapMax;
        var thisHasLines = checkHasLinesDirection(map_check, x, y, -1, 1);
        if (thisHasLines) { hasLines = true; }
    }

    if (hasLines && g_combo >= 2 && !g_comboFxShown) {
        g_comboFxShown = true;
        showComboFly(g_combo, g_comboBatchCells);
    }

    g_comboBumpPending = false;
    return hasLines;
}

function checkHasLinesDirection(map_check, x, y, speedX, speedY)
{
    var hasLines = false;
    var onEdge = false;
    var marked = new Array();

    while (!onEdge) {
        x += speedX;
        y += speedY;

        var i = marked.length;
        marked[i] = new PositionColor();
        marked[i].x = x;
        marked[i].y = y;
        marked[i].color = (x >= 0 && x < g_mapMax && y >= 0 && y < g_mapMax) ? map_check[x][y] : g_empty;
        onEdge = (x + speedX <= -1) || (y + speedY <= -1) || (x + speedX >= g_mapMax) || (y + speedY >= g_mapMax);

        var oldColor = (i >= 1) ? marked[i - 1].color : g_empty;
        var sameColor = marked[i].color != g_empty && marked[i].color == oldColor;
        if (!sameColor || onEdge || map_check[x][y] == g_empty) {
            var thisLine = (sameColor) ? marked.length : marked.length - 1;
            if (thisLine >= g_completeLine) {
                removeMarkedBalls(marked, thisLine);
                hasLines = true;
            }

            marked = new Array();
            i = marked.length;
            marked[i] = new PositionColor();
            marked[i].x = x;
            marked[i].y = y;
            marked[i].color = (x >= 0 && x < g_mapMax && y >= 0 && y < g_mapMax) ? map_check[x][y] : g_empty;
        }
    }

    return hasLines;
}

function finishClearBallAnim(elm, x, y)
{
    if (!elm) {
        return;
    }
    if ((" " + elm.className + " ").indexOf(" ball-clearing ") < 0) {
        return;
    }
    elm.className = "ball";
    elm.style.transform = "";
    elm.style.opacity = "";
    elm.style.animation = "";
    elm.src = "image2/ball" + g_empty + ".png";
    if (x >= 0 && x < g_mapMax && y >= 0 && y < g_mapMax) {
        map_cache[x][y] = g_empty;
    }
}

function playClearBallAnim(x, y)
{
    var elm = document.getElementById("ball" + x + "_" + y);
    if (!elm) {
        return;
    }
    // Restart animation if the same cell clears again quickly.
    elm.className = "ball";
    // Force reflow so re-adding the class retriggers CSS animation.
    void elm.offsetWidth;
    elm.className = "ball ball-clearing";

    var done = false;
    function onDone()
    {
        if (done) {
            return;
        }
        done = true;
        elm.removeEventListener("animationend", onDone);
        finishClearBallAnim(elm, x, y);
    }
    elm.addEventListener("animationend", onDone);
    setTimeout(onDone, 320);
}

function removeMarkedBalls(marked, lineLength)
{
    if (g_comboBumpPending) {
        g_combo += 1;
        g_comboBumpPending = false;
    }
    if (g_combo < 1) {
        g_combo = 1;
    }

    var cells = [];
    for (var i = 0; i < lineLength; i++) {
        var x = marked[i].x;
        var y = marked[i].y;
        if (x >= 0 && x < g_mapMax && y >= 0 && y < g_mapMax) {
            playClearBallAnim(x, y);
            map[x][y] = g_empty;
            cells.push({ x: x, y: y });
            g_comboBatchCells.push({ x: x, y: y });
        }
    }

    var bonus = lineLength - g_completeLine;
    if (bonus > 0) {
        bonus *= (bonus + 1);

        if (g_scoreBarOverlayCounter == 0) {
            var elm = document.getElementById("scoreBarOverlay");
            elm.style.MozOpacity = 1;
            elm.style.filter = "alpha(opacity=100)";
            elm.style.display = "block";
            g_scoreBarOverlayCounter = 100;
            fadeOutScoreBarOverlay();
        }
    }
    else if (bonus < 0) { bonus = 0; }

    var base = lineLength * 2 + bonus;
    var points = base * g_combo;
    g_score += points;
    showScoreFly(points, cells);

    g_avatars[0].speedX = 4;
}

function fadeOutScoreBarOverlay()
{
    var elm = document.getElementById("scoreBarOverlay");
    g_scoreBarOverlayCounter -= 5;
    if (g_scoreBarOverlayCounter >= 10) {
        elm.style.MozOpacity = "." + g_scoreBarOverlayCounter;
        elm.style.filter = "alpha(opacity=" + g_scoreBarOverlayCounter + ")";
        setTimeout( "fadeOutScoreBarOverlay()", 100 );
    }
    else {
        g_scoreBarOverlayCounter = 0;
        elm.style.display = "none";
    }
}

function lolite(x, y)
{
    if (!busy) { doLolite(x, y); }
}

function hilite(x, y)
{
    if (!busy) { doHilite(x, y); }
}

function doLolite(x, y)
{
    var elm = document.getElementById("ball" + x + "_" + y);
    if (!elm) {
        return;
    }
    elm.className = "ball";
    elm.style.MozOpacity = "";
    elm.style.filter = "";
    elm.style.opacity = "";
    elm.style.height = "";
    elm.style.marginTop = "";
    elm.style.transform = "";
}

function doHilite(x, y)
{
    var elm = document.getElementById("ball" + x + "_" + y);
    if (!elm) {
        return;
    }
    // Clear legacy inline highlight so CSS pulse owns the look.
    elm.style.MozOpacity = "";
    elm.style.filter = "";
    elm.style.opacity = "";
    elm.style.height = "";
    elm.style.marginTop = "";
    elm.className = "ball ball-selected";
}

function render()
{
    for (var x = 0; x < g_mapMax; x++) {
        for (var y = 0; y < g_mapMax; y++) {
            if (map[x][y] != map_cache[x][y]) {
                var elm = document.getElementById("ball" + x + "_" + y);
                if (!elm) {
                    continue;
                }
                // Keep colored sprite visible while clear-pop animation runs.
                if ((" " + elm.className + " ").indexOf(" ball-clearing ") >= 0) {
                    continue;
                }
                elm.className = "ball";
                elm.src = "image2/ball" + map[x][y] + ".png";
                map_cache[x][y] = map[x][y];
            }
        }
    }

    for (var i = 0; i < g_ballsPerTurn; i++) {
        var elmNext = document.getElementById("nextBall" + i);
        if (elmNext && typeof g_nextBalls[i] === "number" && g_nextBalls[i] !== g_empty) {
            elmNext.src = "image2/ball" + g_nextBalls[i] + ".png";
        }
    }

    renderPreviews();

    var elmScoreValue = document.getElementById("scoreValue");
    elmScoreValue.innerHTML = g_score;

    // Score box width is fixed in CSS (classic header layout).
    if (g_avatars && g_avatars[0]) {
        g_avatars[0].limitX1 = 120;
    }
}

function addBall(ball)
{
    var gameOver = false;
    var tile = new getRandomFreeTile();
    if (tile.x != null) {
        map[tile.x][tile.y] = ball;
        // createCircleAt( tile.x * g_tileSize + g_tileSize / 2, (tile.y + 1) * g_tileSize + g_tileSize / 2, g_tileSize - 8, "circle-new", -2 );
		
    }
    else {
        gameOver = true;
    }
    return gameOver;
}

function getRandomBall()
{
    return getRandomInt(0, g_colorMax - 1);
}

function getRandomInt(min, max)
{
    return Math.floor( ( (max + 1 - min) * Math.random() ) + min );
}

function getRandomFreeTile()
{
    return getRandomFreeTileExcluding(null);
}

function getRandomFreeTileExcluding(reserved)
{
    var pos = new Position();
    var freeTiles = getFreeTiles();
    var candidates = [];
    for (var i = 0; i < freeTiles.length; i++) {
        var key = freeTiles[i].x + "_" + freeTiles[i].y;
        if (reserved && reserved[key]) {
            continue;
        }
        candidates.push(freeTiles[i]);
    }
    if (candidates.length >= 1) {
        var r = getRandomInt(0, candidates.length - 1);
        pos.x = candidates[r].x;
        pos.y = candidates[r].y;
    }
    return pos;
}

function getFreeTiles()
{
    var freeTiles = new Array();
    for (var x = 0; x < g_mapMax; x++) {
        for (var y = 0; y < g_mapMax; y++) {
            if (map[x][y] == g_empty) {
                var i = freeTiles.length;
                freeTiles[i] = new Position();
                freeTiles[i].x = x;
                freeTiles[i].y = y;
            }
        }
    }
    return freeTiles;
}

function inArray(arr, v)
{
    var isIn = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == v) {
            isIn = true;
            break;
        }
    }
    return isIn;
}

function Position()
{
    this.x = null;
    this.y = null;
}

function PositionColor()
{
    this.x = null;
    this.y = null;
    this.color = null;
}

function showElm(id)
{
    var elm = document.getElementById(id);
    if (elm) {
        elm.style.display = "block";
    }
}
