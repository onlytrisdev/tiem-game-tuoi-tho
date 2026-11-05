function boosterLoaded(a) {
    adSense = a, loadPreAssets()
}

function initSplash() {
    gameState = "splash", resizeCanvas(), 1 != audioType || muted || music.play(), initStartScreen()
}

function initStartScreen() {
    gameState = "start", userInput.removeHitArea("moreGames"), 1 == audioType && (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, 1, {
        volume: .2,
        ease: "Linear.easeNone"
    })), stageNum = 0, background = new Elements.Background(assetLib.getData("menuBg"), assetLib.getData("gameElements"), canvas.width, canvas.height), background.renderState = "menuScroll", userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [644, 0, canvas.width, 54]
    }, !0);
    var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [572, 340],
            id: "play"
        },
        b = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [257, 360],
            id: "moreGames",
            noFloat: !0
        },
        c = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [85, 360],
            id: "credits",
            noFloat: !0
        };
    userInput.addHitArea("showTeamSelect", butEventHandler, null, "image", a), userInput.addHitArea("moreGames", butEventHandler, null, "image", b), userInput.addHitArea("credits", butEventHandler, null, "image", c);
    var d = new Array(a, b, c);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("teamNamesSmall"), assetLib.getData("teamNamesLarge"), assetLib.getData("scoreLarge"), assetLib.getData("endElements"), gameState, d, canvas.width, canvas.height), panel.startTween1(), previousTime = (new Date).getTime(), updateStartScreenEvent()
}

function initCreditsScreen() {
    gameState = "credits";
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [85, 360],
        id: "back"
    };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", a);
    var b = new Array(a);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("teamNamesSmall"), assetLib.getData("teamNamesLarge"), assetLib.getData("scoreLarge"), assetLib.getData("endElements"), gameState, b, canvas.width, canvas.height), panel.startTween2(), previousTime = (new Date).getTime(), updateCreditsScreenEvent()
}

function initTeamSelect() {
    gameState = "teamSelect";
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [85, 360],
        id: "back",
        noFloat: !0
    };
    userInput.addHitArea("backFromTeamSelect", butEventHandler, null, "image", a), background = new Elements.Background(assetLib.getData("menuBlurBg"), assetLib.getData("gameElements"), canvas.width, canvas.height), background.renderState = "menuScroll";
    for (var b = new Array(a), c = 0, d = 0; 3 > d; d++)
        for (var e = 0; 7 > e; e++)(0 != d || 6 != e) && (userInput.addHitArea("chooseTeam", butEventHandler, {
            teamId: c
        }, "rect", {
            aRect: [230 * d + 18, 45 * e + 55, 230 * d + 18 + 210, 45 * e + 55 + 37]
        }), c++);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("teamNamesSmall"), assetLib.getData("teamNamesLarge"), assetLib.getData("scoreLarge"), assetLib.getData("endElements"), gameState, b, canvas.width, canvas.height), panel.startTween1(), previousTime = (new Date).getTime(), updateTeamSelectEvent()
}

function initTree() {
    gameState = "tree";
    var a, b = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [572, 340],
        id: "play"
    };
    userInput.addHitArea("startGame", butEventHandler, null, "image", b);
    var c = new Array(b);
    if (0 == stageNum) {
        var d = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
        d.splice(oMatchInfo.homeTeamId, 1), a = 2 * Math.floor(8 * Math.random()), aTeamsPlaying = new Array, aTeamsPlaying[stageNum] = new Array;
        for (var e = 0; 16 > e; e++)
            if (e != a) {
                var f = Math.floor(Math.random() * d.length);
                e == a + 1 && (oMatchInfo.awayTeamId = d[f]), aTeamsPlaying[stageNum].push(d[f]), d.splice(f, 1)
            } else aTeamsPlaying[stageNum].push(oMatchInfo.homeTeamId)
    } else {
        aTeamsPlaying[stageNum] = new Array;
        for (var e = 0; e < aTeamsPlaying[stageNum - 1].length / 2; e++)
            if (aTeamsPlaying[stageNum - 1][2 * e] != oMatchInfo.homeTeamId) {
                var g = 0;
                aTeamData[aTeamsPlaying[stageNum - 1][2 * e]].skill < aTeamData[aTeamsPlaying[stageNum - 1][2 * e + 1]].skill ? g = 1 : aTeamData[aTeamsPlaying[stageNum - 1][2 * e]].skill < aTeamData[aTeamsPlaying[stageNum - 1][2 * e + 1]].skill && (g = Math.round(1 * Math.random())), aTeamsPlaying[stageNum].push(aTeamsPlaying[stageNum - 1][2 * e + g])
            } else 0 != e % 2 ? (aTeamsPlaying[stageNum][e] = aTeamsPlaying[stageNum][e - 1], aTeamsPlaying[stageNum][e - 1] = oMatchInfo.homeTeamId, a = e) : (aTeamsPlaying[stageNum].push(oMatchInfo.homeTeamId), a = e + 1);
        oMatchInfo.awayTeamId = aTeamsPlaying[stageNum][a]
    }
    setOpKit(), panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("teamNamesSmall"), assetLib.getData("teamNamesLarge"), assetLib.getData("scoreLarge"), assetLib.getData("endElements"), gameState, c, canvas.width, canvas.height), panel.startTween1(), previousTime = (new Date).getTime(), updateTreeEvent()
}

function setOpKit() {
    oMatchInfo.opKit = oShirts.home[oMatchInfo.homeTeamId] == oShirts.home[oMatchInfo.awayTeamId] || 0 == oShirts.home[oMatchInfo.awayTeamId] && 1 == oShirts.home[oMatchInfo.homeTeamId] || 0 == oShirts.home[oMatchInfo.homeTeamId] && 1 == oShirts.home[oMatchInfo.awayTeamId] || 0 == oShirts.home[oMatchInfo.awayTeamId] && 10 == oShirts.home[oMatchInfo.homeTeamId] || 0 == oShirts.home[oMatchInfo.homeTeamId] && 10 == oShirts.home[oMatchInfo.awayTeamId] || 2 == oShirts.home[oMatchInfo.awayTeamId] && 5 == oShirts.home[oMatchInfo.homeTeamId] || 2 == oShirts.home[oMatchInfo.homeTeamId] && 5 == oShirts.home[oMatchInfo.awayTeamId] || 1 == oShirts.home[oMatchInfo.awayTeamId] && 19 == oShirts.home[oMatchInfo.homeTeamId] || 19 == oShirts.home[oMatchInfo.homeTeamId] && 1 == oShirts.home[oMatchInfo.awayTeamId] ? "away" : "home"
}

function initMatch() {
    1 == audioType && (musicTween.kill(), musicTween = TweenLite.to(music, 1, {
        volume: 1,
        ease: "Linear.easeNone"
    })), aParticles = new Array, hud = new Elements.Hud(assetLib.getData("hud"), assetLib.getData("teamNamesLarge"), assetLib.getData("scoreSmall"), assetLib.getData("time"), canvas.width, canvas.height), resultPanel = new Elements.ResultPanel(assetLib.getData("gameElements"), canvas.width, canvas.height), oMatchInfo.round = 0, oMatchInfo.homeScore = 0, oMatchInfo.awayScore = 0, oMatchInfo.time = 0, oMatchInfo.passPercentage = 0, initPass()
}

function initPass() {
    gameState = "pass", userInput.removeHitArea("gloveMove"), userInput.addHitArea("pause", butEventHandler, null, "rect", {
        aRect: [587, 0, 635, 54]
    }, !0), 0 == firstRun && userInput.addHitArea("skipTut1", butEventHandler, null, "rect", {
        aRect: [220, 220, 480, 380]
    }, !0), userInput.addHitArea("gameTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 54, canvas.width, canvas.height]
    }, !0), ball = new Elements.Ball(assetLib.getData("ball"), canvas.width, canvas.height), ball.scale = .75, trail = new Elements.Trail(assetLib.getData("trail")), background = new Elements.Background(assetLib.getData("pitch" + Math.ceil(3 * Math.random()) + "Bg"), assetLib.getData("gameElements"), canvas.width, canvas.height), background.renderState = "pass", aPlayers = new Array;
    var a = new Elements.Player(assetLib.getData("players1"), assetLib.getData("players2"), assetLib.getData("gameElements"), oMatchInfo.homeTeamId, "home", canvas.width, canvas.height),
        b = Math.ceil(3 * Math.random()) + 1;
    if (0 == firstRun ? (a.setPos(4, 350), b = 1) : a.setPos(Math.ceil(4 * Math.random()), getPlayerX("home")), a.renderState = "pass", aPlayers.push(a), b > 0)
        for (var c = 0; b > c; c++) {
            var a = new Elements.Player(assetLib.getData("players1"), assetLib.getData("players2"), assetLib.getData("gameElements"), oMatchInfo.awayTeamId, oMatchInfo.opKit, canvas.width, canvas.height);
            a.setPos(Math.min(aPlayers[0].depth + c, 6), getPlayerX("away")), a.renderState = "pass", aPlayers.push(a)
        }
    background.x = 0 == ball.side ? -50 : 50, swipeState = 0, 0 == oMatchInfo.round ? oMatchInfo.time = Math.round(20 * (oMatchInfo.passPercentage / 100)) : 1 == oMatchInfo.round ? oMatchInfo.time = 30 + Math.round(20 * (oMatchInfo.passPercentage / 100)) : 2 == oMatchInfo.round ? oMatchInfo.time = 60 + Math.round(20 * (oMatchInfo.passPercentage / 100)) : oMatchInfo.round > 2 && (oMatchInfo.time = Math.min(oMatchInfo.time + 1, 94)), previousTime = (new Date).getTime(), updatePassEvent()
}

function initShot() {
    gameState = "pass", userInput.addHitArea("pause", butEventHandler, null, "rect", {
        aRect: [587, 0, 635, 54]
    }, !0), userInput.addHitArea("gameTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 54, canvas.width, canvas.height]
    }, !0), ball = new Elements.Ball(assetLib.getData("ball"), canvas.width, canvas.height), ball.scale = .75, trail = new Elements.Trail(assetLib.getData("trail")), background = new Elements.Background(assetLib.getData("goalBg"), assetLib.getData("gameElements"), canvas.width, canvas.height), background.renderState = "shot", aPlayers = new Array;
    var a = new Elements.Goalie(assetLib.getData("goalie"), canvas.width, canvas.height);
    aPlayers.push(a);
    var b = Math.ceil(2 * Math.random()) + 1;
    if (0 == stageNum && (b = 1), b > 0)
        for (var c = 0; b > c; c++) {
            var d = new Elements.Player(assetLib.getData("players1"), assetLib.getData("players2"), assetLib.getData("gameElements"), oMatchInfo.awayTeamId, oMatchInfo.opKit, canvas.width, canvas.height);
            d.setPos(Math.ceil(3 * Math.random()) + 3, getPlayerX("away")), d.renderState = "pass", aPlayers.push(d)
        }
    background.x = 0 == ball.side ? -50 : 50, swipeState = 0, diveDist = 25 * Math.random() + 200, 0 == oMatchInfo.round ? oMatchInfo.time = 20 + Math.ceil(4 * Math.random()) : 1 == oMatchInfo.round ? oMatchInfo.time = 50 + Math.ceil(4 * Math.random()) : 2 == oMatchInfo.round ? oMatchInfo.time = 80 + Math.ceil(4 * Math.random()) : oMatchInfo.round > 2 && (oMatchInfo.time = Math.min(oMatchInfo.time + 1, 94)), previousTime = (new Date).getTime(), updatePassEvent()
}

function initDefend() {
    gameState = "defend", userInput.addHitArea("pause", butEventHandler, null, "rect", {
        aRect: [587, 0, 635, 54]
    }, !0), ball = new Elements.Ball(assetLib.getData("ball"), canvas.width, canvas.height), ball.hasBounced = !0, gloves = new Elements.Gloves(assetLib.getData("gameElements")), aPlayers = new Array;
    var a = new Elements.Player(assetLib.getData("players1"), assetLib.getData("players2"), assetLib.getData("gameElements"), oMatchInfo.awayTeamId, oMatchInfo.opKit, canvas.width, canvas.height);
    a.setDefendPos(Math.ceil(2 * Math.random()) + 2, Math.random() * canvas.width / 2 + canvas.width / 4), a.renderState = "defend", aPlayers.push(a), a.playerShape = 1, ball.ground = a.y, ball.x = aPlayers[0].x - 1e3, ballTargX = aPlayers[0].x + 20, ball.side = 0, ball.incRot = ball.rotMax, 2 * Math.random() > 1 && (ball.x = aPlayers[0].x + 1e3, ballTargX = aPlayers[0].x - 20, ball.side = 1, ball.incRot = -ball.rotMax), ball.y = ball.ground - 200, ball.shadowY = ball.prevShadowY = ball.ground, ball.incY = 0, ball.scale = .64 * aPlayers[0].scale, 1 == firstRun ? userInput.addHitArea("skipTut2", butEventHandler, null, "rect", {
        aRect: [220, 220, 480, 380]
    }, !0) : (userInput.addHitArea("gloveMove", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0,
        anyMove: !0
    }, "rect", {
        aRect: [0, 54, canvas.width, canvas.height]
    }, !0), kickTween = TweenLite.to(ball, 2.5, {
        x: ballTargX,
        ease: "Circ.easeOut"
    }));
    var b = Math.ceil(3 * Math.random()) + 1;
    if (b > 0)
        for (var c = 0; b > c; c++) {
            var a;
            a = 2 * Math.random() > 1 ? new Elements.Player(assetLib.getData("players1"), assetLib.getData("players2"), assetLib.getData("gameElements"), oMatchInfo.awayTeamId, oMatchInfo.opKit, canvas.width, canvas.height) : new Elements.Player(assetLib.getData("players1"), assetLib.getData("players2"), assetLib.getData("gameElements"), oMatchInfo.homeTeamId, "home", canvas.width, canvas.height), a.setDefendPos(Math.round(3 * Math.random()), getPlayerX("away")), a.renderState = "defend", aPlayers.push(a)
        }
    background.x = 0 == ball.side ? -50 : 50, swipeState = 0, 0 == oMatchInfo.round ? oMatchInfo.time = 24 + Math.ceil(4 * Math.random()) : 1 == oMatchInfo.round ? oMatchInfo.time = 54 + Math.ceil(4 * Math.random()) : 2 == oMatchInfo.round ? oMatchInfo.time = 90 : oMatchInfo.round > 2 && (oMatchInfo.time = Math.min(oMatchInfo.time + 1, 94)), previousTime = (new Date).getTime(), updateDefendEvent()
}

function getPlayerX(a) {
    var b, c = !0;
    if ("home" == a)
        for (var d = 0; c;) {
            c = !1, b = 350 * Math.random() + 175;
            for (var e = 0; e < aPlayers.length; e++) b > aPlayers[e].startX - 75 && b < aPlayers[e].startX + 75 && (c = !0, d++);
            d > 100 && (c = !1)
        } else
            for (var d = 0; c;) {
                c = !1, b = 600 * Math.random() + 50;
                for (var e = 0; e < aPlayers.length; e++) b > aPlayers[e].startX - 75 && b < aPlayers[e].startX + 75 && (c = !0, d++);
                d > 100 && (c = !1)
            }
    return b
}

function butEventHandler(a, b) {
    switch (a) {
        case "langSelect":
            curLang = b.lang, ctx.clearRect(0, 0, canvas.width, canvas.height), userInput.removeHitArea("langSelect"), preAssetLib = new Utils.AssetLoader(curLang, [{
                id: "preloadImage",
                file: "images/" + curLang + "/preloadImage.jpg"
            }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets);
            break;
        case "showTeamSelect":
            playSound("click"), userInput.removeHitArea("showTeamSelect"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), initTeamSelect();
            break;
        case "chooseTeam":
            playSound("click"), userInput.removeHitArea("backFromTeamSelect"), userInput.removeHitArea("chooseTeam"), oMatchInfo.homeTeamId = b.teamId, initTree();
            break;
        case "credits":
            playSound("click"), userInput.removeHitArea("showTeamSelect"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click"), userInput.removeHitArea("backFromCredits"), initStartScreen();
            break;
        case "backFromTeamSelect":
            playSound("click"), userInput.removeHitArea("backFromTeamSelect"), userInput.removeHitArea("chooseTeam"), initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
            window.open("http://localhost/");
            break;
        case "startGame":
            playSound("click"), userInput.removeHitArea("startGame"), initMatch();
            break;
        case "skipTut1":
            playSound("shortWhistle"), userInput.removeHitArea("skipTut1"), firstRun = 1, previousTime = (new Date).getTime(), updatePassEvent();
            break;
        case "skipTut2":
            playSound("shortWhistle"), userInput.removeHitArea("skipTut2"), userInput.addHitArea("gloveMove", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0,
                anyMove: !0
            }, "rect", {
                aRect: [0, 54, canvas.width, canvas.height]
            }, !0), gloves.reset(), kickTween = TweenLite.to(ball, 2.5, {
                x: ballTargX,
                ease: "Circ.easeOut"
            }), firstRun = 2, previousTime = (new Date).getTime(), updateDefendEvent();
            break;
        case "gameTouch":
            b.isDown ? (swipeState = 1, touchX = b.x, touchY = b.y) : (swipeState = 0, trail.targX = 0, trail.targY = 0, trail.lineNum = 0);
            break;
        case "gloveMove":
            gloves.targX = b.x, gloves.targY = b.y;
            break;
        case "nextFromMatchEnd":
            playSound("click"), userInput.removeHitArea("nextFromMatchEnd"), userInput.removeHitArea("quitFromMatchEnd"), userInput.removeHitArea("moreGames"), stageNum++, initTree();
            break;
        case "againFromMatchEnd":
            playSound("click"), userInput.removeHitArea("againFromMatchEnd"), userInput.removeHitArea("quitFromMatchEnd"), userInput.removeHitArea("moreGames"), stageNum = 0, initTeamSelect();
            break;
        case "quitFromMatchEnd":
            playSound("click"), userInput.removeHitArea("nextFromMatchEnd"), userInput.removeHitArea("quitFromMatchEnd"), userInput.removeHitArea("againFromMatchEnd"), userInput.removeHitArea("moreGames"), initStartScreen();
            break;
        case "mute":
            manualPause || (playSound("click"), toggleMute());
            break;
        case "pause":
        case "resumeFromPause":
            playSound("click"), toggleManualPause();
            break;
        case "quitFromPause":
            playSound("click"), resultPanel.killTween(), toggleManualPause(), kickTween && kickTween.kill(), userInput.removeHitArea("pause"), userInput.removeHitArea("gameTouch"), userInput.removeHitArea("gloveMove"), userInput.removeHitArea("skipTut2"), userInput.removeHitArea("skipTut1"), userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGamesPause"), initStartScreen()
    }
}

function initMatchEnd() {
    gameState = "matchEnd", 1 == audioType && (musicTween.kill(), musicTween = TweenLite.to(music, 1, {
        volume: .25,
        ease: "Linear.easeNone"
    })), userInput.removeHitArea("pause"), userInput.removeHitArea("gloveMove");
    var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [85, 360],
            id: "quit",
            noFloat: !0
        },
        b = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [257, 360],
            id: "moreGames",
            noFloat: !0
        };
    userInput.addHitArea("moreGames", butEventHandler, null, "image", b), userInput.addHitArea("quitFromMatchEnd", butEventHandler, null, "image", a);
    var c, d;
    oMatchInfo.homeScore > oMatchInfo.awayScore && 3 > stageNum ? (c = "matchWon", d = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [572, 340],
        id: "next",
        noFloat: !0
    }, userInput.addHitArea("nextFromMatchEnd", butEventHandler, null, "image", d)) : oMatchInfo.homeScore < oMatchInfo.awayScore ? (c = "matchLost", d = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [572, 340],
        id: "again",
        noFloat: !0
    }, userInput.addHitArea("againFromMatchEnd", butEventHandler, null, "image", d)) : oMatchInfo.homeScore > oMatchInfo.awayScore && 3 == stageNum && (c = "cupWon", d = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [572, 340],
        id: "again",
        noFloat: !0
    }, userInput.addHitArea("againFromMatchEnd", butEventHandler, null, "image", d)), 3 > stageNum || "matchLost" == c ? (background = new Elements.Background(assetLib.getData("menuBlurBg"), assetLib.getData("gameElements"), canvas.width, canvas.height), background.renderState = "menuScroll") : (background = new Elements.Background(assetLib.getData("winBg"), assetLib.getData("gameElements"), canvas.width, canvas.height), background.renderState = "ripple");
    var e = new Array(a, d, b);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("teamNamesSmall"), assetLib.getData("teamNamesLarge"), assetLib.getData("scoreLarge"), assetLib.getData("endElements"), c, e, canvas.width, canvas.height), panel.startTween1(), previousTime = (new Date).getTime(), updateMatchEnd()
}

function addParticle(a, b, c) {
    var d = new Elements.Particle(assetLib.getData("particle"));
    d.x = a, d.y = b, d.scaleX = d.scaleY = c, aParticles.push(d)
}

function ballCallback(a) {
    switch (a) {
        case "kicked":
            gameState = "kick", playSound("kick"), ballEasedX = ball.x, ballIncX = ball.incX, ball.kickY = ball.ground - ball.y - 50, ball.kickX = ball.x, ball.incY = -Math.max(2 * (ball.ground - aPlayers[0].y), 0), addParticle(ball.x, ball.y, ball.scale);
            var b = Math.min((ball.ground - aPlayers[0].y) / Math.sin(Math.PI / 2 - Math.abs(trail.rotation - Math.PI / 2)), 700);
            b *= "shot" != background.renderState ? 1.03 : 1.03 + trail.scale / 10, TweenLite.to(this, 1, {
                ballIncX: 0,
                ease: "Quad.easeOut"
            }), "shot" == background.renderState && (aPlayers[0].ballTargX = ball.kickX - b * Math.cos(trail.rotation) + ball.spinPower / 4), kickTween = TweenMax.to(ball, .2 + (ball.ground - aPlayers[0].y) / 100, {
                incRot: 0,
                kickX: ball.kickX - b * Math.cos(trail.rotation),
                shadowY: ball.shadowY - b * Math.sin(trail.rotation),
                ease: "Circ.easeOut",
                onComplete: ballCallback,
                onCompleteParams: ["ballStill"]
            }), swipeState = 0, userInput.removeHitArea("gameTouch");
            for (var c = 0; c < aPlayers.length; c++) aPlayers[c].renderState = "kick";
            previousTime = (new Date).getTime(), updateKickEvent();
            break;
        case "hitTarget":
            kickTween.kill(), swipeState = 2, playSound("crowdGoodSmall"), resultPanel.renderState = "passSuccess", resultPanel.addPanel();
            for (var d = 1; d < aPlayers.length; d++) aPlayers[d].canHit = !1;
            ball.x < aPlayers[0].x + aPlayers[0].targetWidth / 14 && ball.x > aPlayers[0].x - aPlayers[0].targetWidth / 14 ? (resultPanel.resultFrame = "passResult3", oMatchInfo.passResult = 50) : ball.x < aPlayers[0].x + aPlayers[0].targetWidth / 14 + aPlayers[0].targetWidth / 7 && ball.x > aPlayers[0].x - aPlayers[0].targetWidth / 14 - aPlayers[0].targetWidth / 7 ? (resultPanel.resultFrame = "passResult2", oMatchInfo.passResult = 40) : ball.x < aPlayers[0].x + aPlayers[0].targetWidth / 14 + 2 * (aPlayers[0].targetWidth / 7) && ball.x > aPlayers[0].x - aPlayers[0].targetWidth / 14 - 2 * (aPlayers[0].targetWidth / 7) ? (resultPanel.resultFrame = "passResult1", oMatchInfo.passResult = 30) : (resultPanel.resultFrame = "passResult0", oMatchInfo.passResult = 20);
            break;
        case "ballStill":
        case "offScreen":
            swipeState = 3, userInput.removeHitArea("gameTouch"), playSound("crowdBadSmall"), "pass" == background.renderState ? (resultPanel.renderState = "passMissed", resultPanel.addPanel()) : "shot" != background.renderState || aPlayers[0].canHit ? "shot" == background.renderState && aPlayers[0].canHit && (resultPanel.renderState = "shotMissed", resultPanel.addPanel()) : (resultPanel.renderState = "shotSaved", resultPanel.addPanel());
            break;
        case "nextPass":
            initPass();
            break;
        case "shotPrep":
            initShot(), oMatchInfo.passPercentage = 0;
            break;
        case "youScoredGoal":
            resultPanel.renderState = "youScoredGoal", resultPanel.addPanel(), oMatchInfo.homeScore++;
            break;
        case "oppScoredGoal":
            swipeState = 2, oMatchInfo.round++, userInput.removeHitArea("gloveMove"), playSound("crowdGoodBig"), oMatchInfo.passPercentage = 0, resultPanel.renderState = "oppScoredGoal", resultPanel.addPanel(), oMatchInfo.awayScore++;
            break;
        case "youSavedShot":
            kickTween.kill(), oMatchInfo.round++, ball.bouncePower = .5, playSound("ballBlock"), playSound("crowdBadBig"), oMatchInfo.passPercentage = 0, ball.incRot = ball.x - aPlayers[0].x > 0 ? ball.rotMax / 4 : -ball.rotMax / 4, ball.hasBounced = !0, kickTween = TweenLite.to(ball, 2, {
                scale: .35,
                shadowY: 285,
                x: ball.x + (ball.x - aPlayers[0].x),
                ease: "Circ.easeOut"
            }), userInput.removeHitArea("gloveMove"), addParticle(ball.x, ball.y, ball.scale), resultPanel.renderState = "oppMissedGoal", resultPanel.addPanel(), swipeState = 2;
            break;
        case "defendShot":
            initDefend();
            break;
        case "oppKicked":
            kickTween.kill(), ball.incY = -230 * Math.random() - 200, ball.bouncePower = .75;
            var e = 600 * Math.random() - 300 + (350 - aPlayers[0].x);
            kickTween = TweenLite.to(ball, .5 * Math.random() + 1.5 - stageNum / 6, {
                scale: 1.2,
                shadowY: 500,
                x: e,
                ease: "Circ.easeIn"
            }), aPlayers[0].flipShape(), addParticle(ball.x, ball.y, ball.scale), playSound("kick"), ball.hasBounced = !1, swipeState = 1;
            break;
        case "matchEnd":
            initMatchEnd()
    }
}

function updateDefendEvent() {
    if (!manualPause && !rotatePause && "defend" == gameState) {
        var a = getDelta(),
            b = assetLib.getData("goalieBg");
        ctx.drawImage(b.img, 0, 0);
        for (var c = 0; c < aPlayers.length; c++) aPlayers[c].update(ball.x, 0, a), aPlayers[c].render(ctx);
        for (var c = 0; c < aParticles.length; c++) aParticles[c].update(a), aParticles[c].render(ctx), aParticles[c].removeMe && (aParticles.splice(c, 1), c -= 1);
        if (0 == swipeState && (0 == ball.side && ball.x > aPlayers[0].x || 1 == ball.side && ball.x < aPlayers[0].x) && ballCallback("oppKicked"), ball.shadowY < 355) {
            ball.updateDefend(a), ball.renderDefend(ctx), gloves.update(a), gloves.render(ctx);
            var b = assetLib.getData("net");
            ctx.drawImage(b.img, 0, 0)
        } else {
            gloves.update(a), gloves.render(ctx);
            var b = assetLib.getData("net");
            ctx.drawImage(b.img, 0, 0), ball.updateDefend(a), ball.shadowY < 500 ? ball.renderDefend(ctx) : 1 == swipeState && ballCallback("oppScoredGoal")
        }
        if (ball.shadowY > 345 && ball.shadowY < 365 && ball.x > gloves.x - 45 && ball.x < gloves.x + 45 && ball.y > gloves.y - 45 - 50 && ball.y < gloves.y + 45 - 50) ballCallback("youSavedShot");
        else if (ball.shadowY > 365) {
            var b = assetLib.getData("gameElements"),
                d = b.oData.oAtlasData.goalHole.x,
                e = b.oData.oAtlasData.goalHole.y,
                f = b.oData.oAtlasData.goalHole.width,
                g = b.oData.oAtlasData.goalHole.height;
            0 == ball.scoreX && (ball.scoreX = ball.x, ball.scoreY = ball.y), ctx.drawImage(b.img, d, e, f, g, ball.scoreX - f / 2, ball.scoreY - g / 2, f, g)
        }
        if (1 != firstRun && (resultPanel.update(a), resultPanel.render(ctx)), hud.render(ctx), renderMuteBut(), 1 == firstRun) {
            var b = assetLib.getData("tutorials"),
                d = b.oData.oAtlasData.id1.x,
                e = b.oData.oAtlasData.id1.y,
                f = b.oData.oAtlasData.id1.width,
                g = b.oData.oAtlasData.id1.height;
            return ctx.drawImage(b.img, d, e, f, g, canvas.width / 2 - f / 2, canvas.height / 2 + 20 - g / 2, f, g), void 0
        }
        requestAnimFrame(updateDefendEvent)
    }
}

function updateKickEvent() {
    if (!manualPause && !rotatePause && "kick" == gameState) {
        var a = getDelta();
        ballEasedX += ballIncX * a, background.update(ballEasedX, a), background.render(ctx);
        for (var b = !1, c = 400, d = 0; d < aPlayers.length; d++) ball.shadowY < aPlayers[d].y && aPlayers[d].y < c && (c = aPlayers[d].y);
        for (var d = 0; d < aPlayers.length; d++)
            if (!b && (aPlayers[d].y == c || "shot" == background.renderState && ball.shadowY < 200) && (ball.updateKick(a), ball.renderKick(ctx), b = !0), aPlayers[d].update(ballEasedX, background.scrollMultiplier, a), aPlayers[d].render(ctx), aPlayers[d].canHit && ball.shadowY - ball.y < 250 * aPlayers[d].scale && ball.x > aPlayers[d].x - 50 * aPlayers[d].scale && ball.x < aPlayers[d].x + 50 * aPlayers[d].scale && ball.shadowY > aPlayers[d].y - 25 * aPlayers[d].scale && ball.shadowY < aPlayers[d].y + 25 * aPlayers[d].scale) {
                if (0 == d && "shot" == background.renderState) continue;
                aPlayers[d].flipShape(), playSound("ballBlock"), addParticle(ball.x, ball.y, ball.scale);
                for (var e = 0; e < aPlayers.length; e++) aPlayers[e].canHit = !1;
                kickTween.updateTo({
                    shadowY: ball.shadowY
                }, !1), 0 == d && "pass" == background.renderState && ballCallback("hitTarget")
            }
        b || (ball.updateKick(a), ball.renderKick(ctx));
        for (var d = 0; d < aParticles.length; d++) aParticles[d].update(a), aParticles[d].render(ctx), aParticles[d].removeMe && (aParticles.splice(d, 1), d -= 1);
        if ("shot" == background.renderState && (!background.hasScored && ball.x < background.goalX + 135 - ball.diameter / 2 && ball.x > background.goalX - 135 + ball.diameter / 2 && ball.shadowY < 200 && ball.shadowY > 195 && ball.shadowY - ball.y < 91 && (kickTween.kill(), kickTween = TweenMax.to(ball, 1, {
                incRot: 0,
                shadowY: 195,
                kickX: ball.kickX,
                ease: "Circ.easeOut",
                onComplete: ballCallback,
                onCompleteParams: ["youScoredGoal"]
            }), playSound("crowdGoodBig"), ball.spinPower = 0, background.canHitGoal = !1, background.hasScored = !0), ball.shadowY < diveDist && aPlayers[0].canDive && aPlayers[0].dive(), background.canHitGoal))
            if (aPlayers[0].canHit && ball.x > aPlayers[0].reachXL && ball.x < aPlayers[0].reachXR && ball.shadowY - ball.y > aPlayers[0].reachYT && ball.shadowY - ball.y < aPlayers[0].reachYB && ball.shadowY > 200 && ball.shadowY < 205) playSound("ballBlock"), playSound("crowdBadBig"), aPlayers[0].rotation < 0 ? (kickTween.kill(), kickTween = TweenMax.to(ball, 2, {
                incRot: 0,
                shadowY: 215,
                kickX: ball.x - (50 * Math.random() + 50),
                ease: "Circ.easeOut",
                onComplete: ballCallback,
                onCompleteParams: ["ballStill"]
            })) : aPlayers[0].rotation > 0 ? (kickTween.kill(), kickTween = TweenMax.to(ball, 2, {
                incRot: 0,
                shadowY: 215,
                kickX: ball.x + 50 * Math.random() + 50,
                ease: "Circ.easeOut",
                onComplete: ballCallback,
                onCompleteParams: ["ballStill"]
            })) : (kickTween.kill(), kickTween = TweenMax.to(ball, 2, {
                incRot: 0,
                shadowY: 215,
                kickX: ball.x + 10 * Math.random() + 5,
                ease: "Circ.easeOut",
                onComplete: ballCallback,
                onCompleteParams: ["ballStill"]
            })), ball.spinPower = 0, aPlayers[0].canHit = !1;
            else if (ball.x < background.goalX + 135 + ball.diameter / 2 && ball.x > background.goalX + 135 - ball.diameter / 2 && ball.shadowY < 200 && ball.shadowY - ball.y < 91 - ball.diameter) {
            var f = 200 + 4 * (Math.abs(ball.x - (background.goalX + 135)) - ball.diameter / 4);
            kickTween.kill(), kickTween = TweenMax.to(ball, 2, {
                incRot: 0,
                shadowY: f,
                kickX: ball.x + 10 * (ball.x - (background.goalX + 135)),
                ease: "Circ.easeOut",
                onComplete: ballCallback,
                onCompleteParams: ["ballStill"]
            }), ball.spinPower = 0, background.canHitGoal = !1
        } else if (ball.x < background.goalX - 135 + ball.diameter / 2 && ball.x > background.goalX - 135 - ball.diameter / 2 && ball.shadowY < 200 && ball.shadowY - ball.y < 91 - ball.diameter) {
            var f = 200 + 4 * (Math.abs(ball.x - (background.goalX - 135)) - ball.diameter / 4);
            kickTween.kill(), kickTween = TweenMax.to(ball, 2, {
                incRot: 0,
                shadowY: f,
                kickX: ball.x + 10 * (ball.x - (background.goalX - 135)),
                ease: "Circ.easeOut",
                onComplete: ballCallback,
                onCompleteParams: ["ballStill"]
            }), ball.spinPower = 0, background.canHitGoal = !1
        } else if (ball.x < background.goalX + 135 + ball.diameter / 2 && ball.x > background.goalX - 135 - ball.diameter / 2 && ball.shadowY < 200 && ball.shadowY > 195 && ball.shadowY - ball.y < 91 + ball.diameter / 2 && ball.shadowY - ball.y > 91 - ball.diameter / 2) {
            var f = Math.max(200 + 4 * (Math.abs(ball.shadowY - ball.y - 91) - ball.diameter / 4), 195);
            kickTween.kill(), kickTween = TweenMax.to(ball, 2, {
                incRot: 0,
                shadowY: f,
                ease: "Circ.easeOut",
                onComplete: ballCallback,
                onCompleteParams: ["ballStill"]
            }), background.canHitGoal = !1
        }
        0 == swipeState && aPlayers[0].canHit && 0 == swipeState && ball.x > aPlayers[0].x - aPlayers[0].targetWidth / 2 && ball.x < aPlayers[0].x + aPlayers[0].targetWidth / 2 && ball.shadowY > aPlayers[0].y - aPlayers[0].targetHeight / 2 && ball.shadowY < aPlayers[0].y + aPlayers[0].targetHeight / 2 && (swipeState = 1, playSound("targetHit")), 1 == swipeState && ball.shadowY < aPlayers[0].y && ballCallback("hitTarget"), resultPanel.update(a), resultPanel.render(ctx), hud.render(ctx), renderMuteBut(), requestAnimFrame(updateKickEvent)
    }
}

function updatePassEvent() {
    if (!manualPause && !rotatePause && "pass" == gameState) {
        var a = getDelta();
        background.update(ball.x, a), background.render(ctx);
        for (var b = 0; b < aPlayers.length; b++) aPlayers[b].update(ball.x, background.scrollMultiplier, a), aPlayers[b].render(ctx);
        ball.updatePass(a), ball.renderPass(ctx), 3 != swipeState ? 0 == ball.side && ball.x > canvas.width ? ballCallback("offScreen") : 1 == ball.side && ball.x < 0 && ballCallback("offScreen") : ball.incX *= .95;
        for (var b = 0; b < aParticles.length; b++) aParticles[b].update(a), aParticles[b].render(ctx), aParticles[b].removeMe && (aParticles.splice(b, 1), b -= 1);
        if (1 == swipeState && (trail.update(touchX, touchY, a), trail.rotation > 0 && trail.rotation < Math.PI && (trail.render(ctx), trail.lineNum > 3 && touchX > ball.x - 75 && touchX < ball.x + 75 && touchY > ball.y - 75 && touchY < ball.y + 50 && (ball.spinPower = .5 * ball.incX, ballCallback("kicked")))), resultPanel.update(a), resultPanel.render(ctx), hud.render(ctx), renderMuteBut(), 0 == firstRun) {
            var c = assetLib.getData("tutorials"),
                d = c.oData.oAtlasData.id0.x,
                e = c.oData.oAtlasData.id0.y,
                f = c.oData.oAtlasData.id0.width,
                g = c.oData.oAtlasData.id0.height;
            return ctx.drawImage(c.img, d, e, f, g, canvas.width / 2 - f / 2, canvas.height / 2 + 20 - g / 2, f, g), void 0
        }
        requestAnimFrame(updatePassEvent)
    }
}

function updateCreditsScreenEvent() {
    if (!rotatePause && "credits" == gameState) {
        var a = getDelta();
        panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateCreditsScreenEvent)
    }
}

function updateMatchEnd() {
    if (!rotatePause && "matchEnd" == gameState) {
        var a = getDelta();
        background.update(0, a), background.render(ctx), panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateMatchEnd)
    }
}

function updateSplashScreenEvent() {
    if (!rotatePause && "splash" == gameState) {
        var a = getDelta();
        if (splashTimer += a, splashTimer > 2.5) return 1 != audioType || muted || music.play(), initStartScreen(), void 0;
        splash.render(ctx, a), requestAnimFrame(updateSplashScreenEvent)
    }
}

function updateStartScreenEvent() {
    if (!rotatePause && "start" == gameState) {
        var a = getDelta();
        background.update(0, a), background.render(ctx), panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateStartScreenEvent)
    }
}

function updateTeamSelectEvent() {
    if (!rotatePause && "teamSelect" == gameState) {
        var a = getDelta();
        background.update(0, a), background.render(ctx), panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateTeamSelectEvent)
    }
}

function updateTreeEvent() {
    if (!rotatePause && "tree" == gameState) {
        var a = getDelta();
        background.update(0, a), background.render(ctx), panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateTreeEvent)
    }
}

function getDelta() {
    var a = (new Date).getTime(),
        b = (a - previousTime) / 1e3;
    return previousTime = a, b > .5 && (b = 0), b
}

function checkSpriteCollision(a, b) {
    var c = a.x,
        d = a.y,
        e = b.x,
        f = b.y,
        g = (c - e) * (c - e) + (d - f) * (d - f),
        h = a.radius * b.radius;
    return h > g ? !0 : !1
}

function getScaleImageToMax(a, b) {
    var c;
    return c = a.isSpriteSheet ? b[0] / a.oData.spriteWidth < b[1] / a.oData.spriteHeight ? Math.min(b[0] / a.oData.spriteWidth, 1) : Math.min(b[1] / a.oData.spriteHeight, 1) : b[0] / a.img.width < b[1] / a.img.height ? Math.min(b[0] / a.img.width, 1) : Math.min(b[1] / a.img.height, 1)
}

function getCentreFromTopLeft(a, b, c) {
    var d = new Array;
    return d.push(a[0] + b.oData.spriteWidth / 2 * c), d.push(a[1] + b.oData.spriteHeight / 2 * c), d
}

function loadPreAssets() {
    aLangs.length > 1 ? (preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "langSelect",
        file: "images/langSelect.jpg"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLangSelect)) : (curLang = aLangs[0], preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "preloadImage",
        file: "images/" + curLang + "/preloadImage.jpg"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets))
}

function initLangSelect() {
    var a = preAssetLib.getData("langSelect");
    ctx.drawImage(a.img, canvas.width / 2 - a.img.width / 2, canvas.height / 2 - a.img.height / 2);
    for (var b = 140, c = 0; c < aLangs.length; c++) {
        var d = canvas.width / 2 - b * aLangs.length / 2 + c * b,
            e = canvas.height / 2 - b / 2;
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[c]
        }, "rect", {
            aRect: [d, e, d + b, e + 140]
        })
    }
}

function initLoadAssets() {
    var a = preAssetLib.getData("preloadImage");
    ctx.drawImage(a.img, 0, 0), loadAssets()
}

function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [{
        id: "pitch1Bg",
        file: "images/pitch1Bg.jpg"
    }, {
        id: "pitch2Bg",
        file: "images/pitch2Bg.jpg"
    }, {
        id: "pitch3Bg",
        file: "images/pitch3Bg.jpg"
    }, {
        id: "goalBg",
        file: "images/goalBg.jpg"
    }, {
        id: "menuBg",
        file: "images/menuBg.jpg"
    }, {
        id: "menuBlurBg",
        file: "images/menuBlurBg.jpg"
    }, {
        id: "goalieBg",
        file: "images/goalieBg.jpg"
    }, {
        id: "net",
        file: "images/net.png"
    }, {
        id: "winBg",
        file: "images/winBg.jpg"
    }, {
        id: "rotateDeviceMessage",
        file: "images/rotateDeviceMessage.jpg"
    }, {
        id: "splash",
        file: "images/splashScreen.jpg"
    }, {
        id: "hud",
        file: "images/hud.png"
    }, {
        id: "tutorials",
        file: "images/" + curLang + "/tutorials.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 322,
                width: 320,
                height: 320
            },
            id1: {
                x: 0,
                y: 0,
                width: 320,
                height: 320
            }
        }
    }, {
        id: "teamNamesLarge",
        file: "images/" + curLang + "/teamNamesLarge.png",
        oAtlasData: {
            id0: {
                x: 160,
                y: 74,
                width: 108,
                height: 35
            },
            id1: {
                x: 0,
                y: 74,
                width: 158,
                height: 35
            },
            id10: {
                x: 133,
                y: 295,
                width: 114,
                height: 34
            },
            id11: {
                x: 0,
                y: 221,
                width: 147,
                height: 35
            },
            id12: {
                x: 267,
                y: 111,
                width: 52,
                height: 37
            },
            id13: {
                x: 0,
                y: 37,
                width: 183,
                height: 35
            },
            id14: {
                x: 203,
                y: 0,
                width: 80,
                height: 35
            },
            id15: {
                x: 0,
                y: 111,
                width: 155,
                height: 35
            },
            id16: {
                x: 149,
                y: 221,
                width: 123,
                height: 35
            },
            id17: {
                x: 0,
                y: 185,
                width: 148,
                height: 34
            },
            id18: {
                x: 0,
                y: 148,
                width: 151,
                height: 35
            },
            id19: {
                x: 0,
                y: 258,
                width: 136,
                height: 35
            },
            id2: {
                x: 157,
                y: 111,
                width: 108,
                height: 34
            },
            id3: {
                x: 185,
                y: 37,
                width: 105,
                height: 35
            },
            id4: {
                x: 0,
                y: 0,
                width: 201,
                height: 35
            },
            id5: {
                x: 153,
                y: 148,
                width: 109,
                height: 34
            },
            id6: {
                x: 249,
                y: 295,
                width: 63,
                height: 33
            },
            id7: {
                x: 138,
                y: 258,
                width: 125,
                height: 35
            },
            id8: {
                x: 0,
                y: 295,
                width: 131,
                height: 34
            },
            id9: {
                x: 150,
                y: 185,
                width: 121,
                height: 34
            }
        }
    }, {
        id: "teamNamesSmall",
        file: "images/" + curLang + "/teamNamesSmall.png",
        oAtlasData: {
            id0: {
                x: 121,
                y: 136,
                width: 108,
                height: 24
            },
            id1: {
                x: 0,
                y: 110,
                width: 120,
                height: 24
            },
            id10: {
                x: 120,
                y: 163,
                width: 109,
                height: 24
            },
            id11: {
                x: 0,
                y: 215,
                width: 117,
                height: 25
            },
            id12: {
                x: 152,
                y: 27,
                width: 93,
                height: 24
            },
            id13: {
                x: 0,
                y: 83,
                width: 126,
                height: 25
            },
            id14: {
                x: 133,
                y: 56,
                width: 100,
                height: 25
            },
            id15: {
                x: 0,
                y: 136,
                width: 119,
                height: 25
            },
            id16: {
                x: 119,
                y: 189,
                width: 110,
                height: 24
            },
            id17: {
                x: 0,
                y: 189,
                width: 117,
                height: 24
            },
            id18: {
                x: 0,
                y: 163,
                width: 118,
                height: 24
            },
            id19: {
                x: 0,
                y: 242,
                width: 114,
                height: 24
            },
            id2: {
                x: 122,
                y: 110,
                width: 107,
                height: 24
            },
            id20: {
                x: 0,
                y: 0,
                width: 150,
                height: 54
            },
            id3: {
                x: 128,
                y: 83,
                width: 106,
                height: 24
            },
            id4: {
                x: 0,
                y: 56,
                width: 131,
                height: 25
            },
            id5: {
                x: 119,
                y: 215,
                width: 108,
                height: 24
            },
            id6: {
                x: 152,
                y: 0,
                width: 96,
                height: 25
            },
            id7: {
                x: 115,
                y: 268,
                width: 112,
                height: 24
            },
            id8: {
                x: 0,
                y: 268,
                width: 113,
                height: 24
            },
            id9: {
                x: 116,
                y: 242,
                width: 111,
                height: 24
            }
        }
    }, {
        id: "uiButs",
        file: "images/" + curLang + "/uiButs.png",
        oAtlasData: {
            credits: {
                x: 254,
                y: 76,
                width: 157,
                height: 74
            },
            back: {
                x: 254,
                y: 0,
                width: 157,
                height: 74
            },
            moreGames: {
                x: 0,
                y: 339,
                width: 205,
                height: 74
            },
            play: {
                x: 0,
                y: 0,
                width: 252,
                height: 111
            },
            again: {
                x: 0,
                y: 226,
                width: 252,
                height: 111
            },
            next: {
                x: 0,
                y: 113,
                width: 252,
                height: 111
            },
            quit: {
                x: 207,
                y: 339,
                width: 157,
                height: 74
            }
        }
    }, {
        id: "players1",
        file: "images/players1.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 0,
                width: 156,
                height: 263
            },
            id1: {
                x: 0,
                y: 265,
                width: 156,
                height: 263
            },
            id10: {
                x: 667,
                y: 408,
                width: 77,
                height: 134
            },
            id11: {
                x: 512,
                y: 0,
                width: 77,
                height: 134
            },
            id12: {
                x: 471,
                y: 136,
                width: 77,
                height: 134
            },
            id13: {
                x: 468,
                y: 344,
                width: 77,
                height: 134
            },
            id14: {
                x: 433,
                y: 0,
                width: 77,
                height: 134
            },
            id15: {
                x: 430,
                y: 577,
                width: 77,
                height: 134
            },
            id16: {
                x: 667,
                y: 544,
                width: 77,
                height: 134
            },
            id17: {
                x: 670,
                y: 0,
                width: 77,
                height: 134
            },
            id18: {
                x: 351,
                y: 577,
                width: 77,
                height: 134
            },
            id19: {
                x: 509,
                y: 480,
                width: 77,
                height: 134
            },
            id2: {
                x: 158,
                y: 0,
                width: 156,
                height: 263
            },
            id20: {
                x: 392,
                y: 208,
                width: 77,
                height: 134
            },
            id21: {
                x: 275,
                y: 369,
                width: 115,
                height: 102
            },
            id22: {
                x: 275,
                y: 265,
                width: 115,
                height: 102
            },
            id23: {
                x: 234,
                y: 577,
                width: 115,
                height: 102
            },
            id24: {
                x: 234,
                y: 473,
                width: 115,
                height: 102
            },
            id25: {
                x: 158,
                y: 369,
                width: 115,
                height: 102
            },
            id26: {
                x: 316,
                y: 0,
                width: 115,
                height: 102
            },
            id27: {
                x: 117,
                y: 634,
                width: 115,
                height: 102
            },
            id28: {
                x: 117,
                y: 530,
                width: 115,
                height: 102
            },
            id29: {
                x: 158,
                y: 265,
                width: 115,
                height: 102
            },
            id3: {
                x: 629,
                y: 136,
                width: 77,
                height: 134
            },
            id30: {
                x: 0,
                y: 634,
                width: 115,
                height: 102
            },
            id31: {
                x: 0,
                y: 530,
                width: 115,
                height: 102
            },
            id32: {
                x: 351,
                y: 473,
                width: 115,
                height: 102
            },
            id33: {
                x: 316,
                y: 104,
                width: 115,
                height: 102
            },
            id4: {
                x: 626,
                y: 272,
                width: 77,
                height: 134
            },
            id5: {
                x: 588,
                y: 544,
                width: 77,
                height: 134
            },
            id6: {
                x: 588,
                y: 408,
                width: 77,
                height: 134
            },
            id7: {
                x: 591,
                y: 0,
                width: 77,
                height: 134
            },
            id8: {
                x: 550,
                y: 136,
                width: 77,
                height: 134
            },
            id9: {
                x: 547,
                y: 272,
                width: 77,
                height: 134
            }
        }
    }, {
        id: "players2",
        file: "images/players2.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 0,
                width: 144,
                height: 265
            },
            id1: {
                x: 0,
                y: 267,
                width: 144,
                height: 265
            },
            id10: {
                x: 594,
                y: 608,
                width: 87,
                height: 150
            },
            id11: {
                x: 453,
                y: 152,
                width: 87,
                height: 150
            },
            id12: {
                x: 416,
                y: 492,
                width: 87,
                height: 150
            },
            id13: {
                x: 416,
                y: 340,
                width: 87,
                height: 150
            },
            id14: {
                x: 401,
                y: 0,
                width: 87,
                height: 150
            },
            id15: {
                x: 364,
                y: 188,
                width: 87,
                height: 150
            },
            id16: {
                x: 631,
                y: 152,
                width: 87,
                height: 150
            },
            id17: {
                x: 668,
                y: 0,
                width: 87,
                height: 150
            },
            id18: {
                x: 327,
                y: 455,
                width: 87,
                height: 150
            },
            id19: {
                x: 490,
                y: 0,
                width: 87,
                height: 150
            },
            id2: {
                x: 146,
                y: 0,
                width: 144,
                height: 265
            },
            id20: {
                x: 327,
                y: 607,
                width: 87,
                height: 150
            },
            id21: {
                x: 255,
                y: 267,
                width: 107,
                height: 92
            },
            id22: {
                x: 218,
                y: 643,
                width: 107,
                height: 92
            },
            id23: {
                x: 218,
                y: 549,
                width: 107,
                height: 92
            },
            id24: {
                x: 218,
                y: 455,
                width: 107,
                height: 92
            },
            id25: {
                x: 146,
                y: 361,
                width: 107,
                height: 92
            },
            id26: {
                x: 255,
                y: 361,
                width: 107,
                height: 92
            },
            id27: {
                x: 109,
                y: 628,
                width: 107,
                height: 92
            },
            id28: {
                x: 109,
                y: 534,
                width: 107,
                height: 92
            },
            id29: {
                x: 146,
                y: 267,
                width: 107,
                height: 92
            },
            id3: {
                x: 594,
                y: 456,
                width: 87,
                height: 150
            },
            id30: {
                x: 0,
                y: 628,
                width: 107,
                height: 92
            },
            id31: {
                x: 0,
                y: 534,
                width: 107,
                height: 92
            },
            id32: {
                x: 292,
                y: 94,
                width: 107,
                height: 92
            },
            id33: {
                x: 292,
                y: 0,
                width: 107,
                height: 92
            },
            id4: {
                x: 594,
                y: 304,
                width: 87,
                height: 150
            },
            id5: {
                x: 505,
                y: 608,
                width: 87,
                height: 150
            },
            id6: {
                x: 505,
                y: 456,
                width: 87,
                height: 150
            },
            id7: {
                x: 579,
                y: 0,
                width: 87,
                height: 150
            },
            id8: {
                x: 542,
                y: 152,
                width: 87,
                height: 150
            },
            id9: {
                x: 505,
                y: 304,
                width: 87,
                height: 150
            }
        }
    }, {
        id: "gameElements",
        file: "images/" + curLang + "/gameElements.png",
        oAtlasData: {
            goal: {
                x: 484,
                y: 905,
                width: 275,
                height: 94
            },
            highlight1: {
                x: 736,
                y: 1001,
                width: 231,
                height: 76
            },
            highlight2: {
                x: 629,
                y: 208,
                width: 353,
                height: 202
            },
            resultPanel: {
                x: 0,
                y: 0,
                width: 697,
                height: 206
            },
            passPanelBg: {
                x: 373,
                y: 1016,
                width: 361,
                height: 75
            },
            passPanelBar: {
                x: 0,
                y: 1075,
                width: 288,
                height: 40
            },
            passResult0: {
                x: 699,
                y: 0,
                width: 280,
                height: 142
            },
            passResult1: {
                x: 953,
                y: 711,
                width: 122,
                height: 143
            },
            passResult2: {
                x: 949,
                y: 563,
                width: 194,
                height: 146
            },
            passResult3: {
                x: 629,
                y: 412,
                width: 335,
                height: 149
            },
            opponentAttackResult: {
                x: 0,
                y: 631,
                width: 627,
                height: 51
            },
            playerGoalResult: {
                x: 0,
                y: 890,
                width: 482,
                height: 124
            },
            failedGoalResult: {
                x: 0,
                y: 420,
                width: 627,
                height: 103
            },
            shotSavedResult: {
                x: 0,
                y: 1016,
                width: 371,
                height: 57
            },
            takeShotResult: {
                x: 484,
                y: 764,
                width: 467,
                height: 139
            },
            goalScored: {
                x: 629,
                y: 563,
                width: 318,
                height: 132
            },
            glove: {
                x: 548,
                y: 697,
                width: 48,
                height: 56
            },
            matchEndResult: {
                x: 0,
                y: 684,
                width: 546,
                height: 78
            },
            playerShadow: {
                x: 290,
                y: 1093,
                width: 186,
                height: 49
            },
            pass0: {
                x: 939,
                y: 905,
                width: 87,
                height: 67
            },
            pass1: {
                x: 850,
                y: 905,
                width: 87,
                height: 67
            },
            pass2: {
                x: 761,
                y: 905,
                width: 87,
                height: 67
            },
            pass3: {
                x: 966,
                y: 412,
                width: 87,
                height: 67
            },
            pass4: {
                x: 969,
                y: 974,
                width: 87,
                height: 67
            },
            pass5: {
                x: 966,
                y: 481,
                width: 87,
                height: 67
            },
            goalHole: {
                x: 969,
                y: 1043,
                width: 83,
                height: 88
            },
            opponentGoalResult: {
                x: 0,
                y: 764,
                width: 482,
                height: 124
            },
            playerShotMissed: {
                x: 0,
                y: 314,
                width: 627,
                height: 104
            },
            playerShotSaved: {
                x: 0,
                y: 208,
                width: 627,
                height: 104
            },
            badPass: {
                x: 0,
                y: 525,
                width: 627,
                height: 104
            }
        }
    }, {
        id: "ball",
        file: "images/ball.png",
        oAtlasData: {
            ballStill: {
                x: 0,
                y: 117,
                width: 86,
                height: 86
            },
            ballSpin0: {
                x: 88,
                y: 29,
                width: 86,
                height: 86
            },
            ballSpin1: {
                x: 88,
                y: 117,
                width: 86,
                height: 86
            },
            ballSpin2: {
                x: 0,
                y: 29,
                width: 86,
                height: 86
            },
            ballShadow: {
                x: 0,
                y: 0,
                width: 103,
                height: 27
            }
        }
    }, {
        id: "endElements",
        file: "images/" + curLang + "/endElements.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 598,
                width: 144,
                height: 151
            },
            id1: {
                x: 591,
                y: 35,
                width: 144,
                height: 151
            },
            id2: {
                x: 584,
                y: 516,
                width: 144,
                height: 151
            },
            id3: {
                x: 465,
                y: 363,
                width: 144,
                height: 151
            },
            id4: {
                x: 465,
                y: 210,
                width: 144,
                height: 151
            },
            id5: {
                x: 438,
                y: 551,
                width: 144,
                height: 151
            },
            id6: {
                x: 319,
                y: 398,
                width: 144,
                height: 151
            },
            id7: {
                x: 319,
                y: 245,
                width: 144,
                height: 151
            },
            id8: {
                x: 292,
                y: 563,
                width: 144,
                height: 151
            },
            id9: {
                x: 146,
                y: 598,
                width: 144,
                height: 151
            },
            id10: {
                x: 611,
                y: 188,
                width: 144,
                height: 151
            },
            glare: {
                x: 0,
                y: 245,
                width: 317,
                height: 316
            },
            quarterFinals: {
                x: 0,
                y: 0,
                width: 603,
                height: 33
            },
            semiFinals: {
                x: 0,
                y: 105,
                width: 534,
                height: 33
            },
            "final": {
                x: 0,
                y: 210,
                width: 416,
                height: 33
            },
            gameOver0: {
                x: 0,
                y: 35,
                width: 589,
                height: 33
            },
            gameOver1: {
                x: 0,
                y: 70,
                width: 571,
                height: 33
            },
            gameOver2: {
                x: 0,
                y: 140,
                width: 502,
                height: 33
            },
            gameOver3: {
                x: 0,
                y: 175,
                width: 493,
                height: 33
            },
            cupWinners: {
                x: 0,
                y: 563,
                width: 254,
                height: 33
            }
        }
    }, {
        id: "panels1",
        file: "images/" + curLang + "/panels1_700x400.png"
    }, {
        id: "panels2",
        file: "images/" + curLang + "/panels2_700x400.png"
    }, {
        id: "scoreLarge",
        file: "images/scoreLarge_28x41.png"
    }, {
        id: "scoreSmall",
        file: "images/scoreSmall_20x29.png"
    }, {
        id: "time",
        file: "images/time_44x35.png"
    }, {
        id: "muteBut",
        file: "images/mute_69x55.png"
    }, {
        id: "goalie",
        file: "images/goalie_63x90.png"
    }, {
        id: "trail",
        file: "images/trail.png"
    }, {
        id: "particle",
        file: "images/particle_112x111.png",
        oAnims: {
            burst: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }], ctx, canvas.width, canvas.height), assetLib.onReady(initSplash)
}

function resizeCanvas() {
    var a = window.innerWidth,
        b = window.innerHeight;
    a > 480 && (a -= 1, b -= 1), window.innerWidth < window.innerHeight && isMobile ? ("loading" != gameState && rotatePauseOn(), canvas.style.width = a + "px", canvas.style.height = a / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (b - a / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / a, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : isMobile ? (rotatePause && rotatePauseOff(), a / canvas.width < b / canvas.height ? (canvas.style.width = a + "px", canvas.style.height = a / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (b - a / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / a, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : (canvas.style.width = b / canvas.height * canvas.width + "px", canvas.style.height = b + "px", canvasX = (a - b / canvas.height * canvas.width) / 2, canvasY = 0, canvasScaleX = canvasScaleY = canvas.height / b, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px")) : (rotatePause && rotatePauseOff(), a / canvas.width < b / canvas.height ? (canvas.style.width = a + "px", canvas.style.height = a / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (b - a / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / a, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : (canvas.style.width = b / canvas.height * canvas.width + "px", canvas.style.height = b + "px", canvasX = (a - b / canvas.height * canvas.width) / 2, canvasY = 0, canvasScaleX = canvasScaleY = canvas.height / b, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px")), userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY)
}

function playSound(a) {
    1 == audioType && sound.play(a)
}

function toggleMute() {
    muted = !muted, 1 == audioType ? muted ? Howler.mute() : Howler.unmute() : 2 == audioType && (muted ? music.pause() : music.play()), renderMuteBut()
}

function renderMuteBut() {
    if (0 != audioType) {
        var a = assetLib.getData("muteBut"),
            b = 0;
        muted && (b = 1);
        var c = b * a.oData.spriteWidth % a.img.width,
            d = Math.floor(b / (a.img.width / a.oData.spriteWidth)) * a.oData.spriteHeight;
        ctx.drawImage(a.img, c, d, a.oData.spriteWidth, a.oData.spriteHeight, 632, 3, a.oData.spriteWidth, a.oData.spriteHeight)
    }
}

function toggleManualPause() {
    if (manualPause) manualPause = !1, userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGamesPause"), pauseCoreOff();
    else {
        manualPause = !0, pauseCoreOn();
        var a = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [150, canvas.height / 2],
                id: "quit"
            },
            b = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2, canvas.height / 2],
                id: "play"
            },
            c = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [572, canvas.height / 2],
                id: "moreGames"
            },
            d = new Array(a, b, c);
        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", a), userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", b), userInput.addHitArea("moreGamesPause", butEventHandler, null, "image", c), panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("teamNamesSmall"), assetLib.getData("teamNamesLarge"), assetLib.getData("scoreLarge"), assetLib.getData("endElements"), "pause", d, canvas.width, canvas.height), panel.render(ctx), userInput.addHitArea("pause", butEventHandler, null, "rect", {
            aRect: [587, 0, 635, 54]
        }, !0)
    }
}

function rotatePauseOn() {
    rotatePause = !0, ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0), userInput.pauseIsOn = !0, pauseCoreOn()
}

function rotatePauseOff() {
    rotatePause = !1, userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGamesPause"), pauseCoreOff()
}

function pauseCoreOn() {
    switch (1 == audioType ? Howler.mute() : 2 == audioType && music.pause(), gameState) {
        case "start":
            break;
        case "teamSelect":
            break;
        case "tree":
            break;
        case "pass":
            userInput.removeHitArea("gameTouch"), userInput.removeHitArea("skipTut1");
            break;
        case "defend":
            userInput.removeHitArea("gloveMove"), userInput.removeHitArea("skipTut2");
            break;
        case "kick":
            userInput.removeHitArea("gameTouch");
            break;
        case "matchEnd":
    }
}

function pauseCoreOff() {
    switch (1 == audioType ? muted || Howler.unmute() : 2 == audioType && (muted || music.play()), previousTime = (new Date).getTime(), userInput.pauseIsOn = !1, gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        case "teamSelect":
            initTeamSelect();
            break;
        case "tree":
            initTree();
            break;
        case "credits":
            initCreditsScreen();
            break;
        case "pass":
            manualPause = !1, 0 == firstRun && userInput.addHitArea("skipTut1", butEventHandler, null, "rect", {
                aRect: [220, 220, 480, 380]
            }, !0), userInput.addHitArea("pause", butEventHandler, null, "rect", {
                aRect: [587, 0, 635, 54]
            }, !0), userInput.addHitArea("gameTouch", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0
            }, "rect", {
                aRect: [0, 0, canvas.width, canvas.height]
            }, !0), updatePassEvent();
            break;
        case "defend":
            manualPause = !1, 1 == firstRun && userInput.addHitArea("skipTut2", butEventHandler, null, "rect", {
                aRect: [220, 220, 480, 380]
            }, !0), userInput.addHitArea("pause", butEventHandler, null, "rect", {
                aRect: [587, 0, 635, 54]
            }, !0), userInput.addHitArea("gloveMove", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0,
                anyMove: !0
            }, "rect", {
                aRect: [0, 54, canvas.width, canvas.height]
            }, !0), updateDefendEvent();
            break;
        case "kick":
            manualPause = !1, updateKickEvent();
            break;
        case "matchEnd":
            updateMatchEnd()
    }
}
var Utils;
! function(a) {
    var b = function() {
        function a(a, b, c, d, e, f) {
            "undefined" == typeof f && (f = !0), this.oAssetData = {}, this.assetsLoaded = 0, this.totalAssets = b.length, this.ctx = c, this.canvasWidth = d, this.canvasHeight = e, this.showBar = f, this.topLeftX = this.canvasWidth / 2 - d / 8, this.topLeftY = 230, this.showBar && (ctx.strokeStyle = "#333646", ctx.lineWidth = 2, ctx.fillStyle = "#F5A343", ctx.moveTo(this.topLeftX, this.topLeftY), ctx.lineTo(this.topLeftX + d / 4, this.topLeftY + 0), ctx.lineTo(this.topLeftX + d / 4, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0), ctx.stroke());
            for (var g = 0; g < b.length; g++) this.loadImage(b[g])
        }
        return a.prototype.loadImage = function(a) {
            var b = this,
                c = new Image;
            c.onload = function() {
                b.oAssetData[a.id] = {}, b.oAssetData[a.id].img = c, b.oAssetData[a.id].oData = {};
                var d = b.getSpriteSize(a.file);
                0 != d[0] ? (b.oAssetData[a.id].oData.spriteWidth = d[0], b.oAssetData[a.id].oData.spriteHeight = d[1]) : (b.oAssetData[a.id].oData.spriteWidth = b.oAssetData[a.id].img.width, b.oAssetData[a.id].oData.spriteHeight = b.oAssetData[a.id].img.height), a.oAnims && (b.oAssetData[a.id].oData.oAnims = a.oAnims), b.oAssetData[a.id].oData.oAtlasData = a.oAtlasData ? a.oAtlasData : {
                    none: {
                        x: 0,
                        y: 0,
                        width: b.oAssetData[a.id].oData.spriteWidth,
                        height: b.oAssetData[a.id].oData.spriteHeight
                    }
                }, ++b.assetsLoaded, b.showBar && ctx.fillRect(b.topLeftX + 2, b.topLeftY + 2, (b.canvasWidth / 4 - 4) / b.totalAssets * b.assetsLoaded, 16), b.checkLoadComplete()
            }, c.src = a.file
        }, a.prototype.getSpriteSize = function(a) {
            for (var b = new Array, c = "", d = "", e = 0, f = a.lastIndexOf("."), g = !0; g;) f--, 0 == e && this.isNumber(a.charAt(f)) ? c = a.charAt(f) + c : 0 == e && c.length > 0 && "x" == a.charAt(f) ? (f--, e = 1, d = a.charAt(f) + d) : 1 == e && this.isNumber(a.charAt(f)) ? d = a.charAt(f) + d : 1 == e && d.length > 0 && "_" == a.charAt(f) ? (g = !1, b = [parseInt(d), parseInt(c)]) : (g = !1, b = [0, 0]);
            return b
        }, a.prototype.isNumber = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, a.prototype.checkLoadComplete = function() {
            this.assetsLoaded == this.totalAssets && this.loadedCallback()
        }, a.prototype.onReady = function(a) {
            this.loadedCallback = a
        }, a.prototype.getImg = function(a) {
            return this.oAssetData[a].img
        }, a.prototype.getData = function(a) {
            return this.oAssetData[a]
        }, a
    }();
    a.AssetLoader = b
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a, b, c, d) {
            this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.frameInc = 0, this.animType = "loop", this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.alpha = 1, this.oImgData = a, this.oAnims = this.oImgData.oData.oAnims, this.fps = b, this.radius = c, this.animId = d, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2)
        }
        return a.prototype.updateAnimation = function(a) {
            this.frameInc += this.fps * a
        }, a.prototype.changeImgData = function(a, b) {
            this.oImgData = a, this.oAnims = this.oImgData.oData.oAnims, this.animId = b, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2), this.resetAnim()
        }, a.prototype.resetAnim = function() {
            this.frameInc = 0
        }, a.prototype.setFrame = function(a) {
            this.fixedFrame = a
        }, a.prototype.setAnimType = function(a, b, c) {
            switch ("undefined" == typeof c && (c = !0), this.animId = b, this.animType = a, c && this.resetAnim(), a) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1
            }
        }, a.prototype.render = function(a) {
            if (a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scaleX, this.scaleY), a.globalAlpha = this.alpha, null != this.animId) {
                var b = this.oAnims[this.animId].length,
                    c = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][c % b];
                var d = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    e = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && c > this.maxIdx) {
                    if (this.fixedFrame = this.oAnims[this.animId][b - 1], this.animId = null, null != this.animEndedFunc) return this.animEndedFunc(), a.restore(), void 0;
                    var d = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        e = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var d = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                e = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            a.drawImage(this.oImgData.img, d, e, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), a.restore()
        }, a
    }();
    a.AnimSprite = b
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            "undefined" == typeof c && (c = 0), this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = a, this.radius = b, this.setFrame(c)
        }
        return a.prototype.setFrame = function(a) {
            this.frameNum = a
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scaleX, this.scaleY);
            var b = this.frameNum * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                c = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            a.drawImage(this.oImgData.img, b, c, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), a.restore()
        }, a
    }();
    a.BasicSprite = b
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a, b) {
            var c = this;
            this.canvasX = 0, this.canvasY = 0, this.canvasScaleX = 1, this.canvasScaleY = 1, this.prevHitTime = 0, this.pauseIsOn = !1, this.isDown = !1, this.isDetectingKeys = !1, this.anyMove = !1, this.isBugBrowser = b, a.addEventListener("touchstart", function(a) {
                for (var b = 0; b < a.changedTouches.length; b++) c.hitDown(a, a.changedTouches[b].pageX, a.changedTouches[b].pageY, a.changedTouches[b].identifier)
            }, !1), a.addEventListener("touchend", function(a) {
                for (var b = 0; b < a.changedTouches.length; b++) c.hitUp(a, a.changedTouches[b].pageX, a.changedTouches[b].pageY, a.changedTouches[b].identifier)
            }, !1), a.addEventListener("touchmove", function(a) {
                for (var b = 0; b < c.aHitAreas.length; b++) c.move(a, a.changedTouches[b].pageX, a.changedTouches[b].pageY, a.changedTouches[b].identifier, !0)
            }, !1), a.addEventListener("mousedown", function(a) {
                c.isDown = !0, c.hitDown(a, a.pageX, a.pageY, 1)
            }, !1), a.addEventListener("mouseup", function(a) {
                c.isDown = !1, c.hitUp(a, a.pageX, a.pageY, 1)
            }, !1), a.addEventListener("mousemove", function(a) {
                c.move(a, a.pageX, a.pageY, 1, c.isDown)
            }, !1), this.aHitAreas = new Array, this.aKeys = new Array
        }
        return a.prototype.setCanvas = function(a, b, c, d) {
            this.canvasX = a, this.canvasY = b, this.canvasScaleX = c, this.canvasScaleY = d
        }, a.prototype.hitDown = function(a, b, c, d) {
            if (!this.pauseIsOn) {
                var e = (new Date).getTime();
                if (!(e - this.prevHitTime < 500 && isBugBrowser)) {
                    this.prevHitTime = e, a.preventDefault(), a.stopPropagation(), b = (b - this.canvasX) * this.canvasScaleX, c = (c - this.canvasY) * this.canvasScaleY;
                    for (var f = 0; f < this.aHitAreas.length; f++)
                        if (this.aHitAreas[f].rect && b > this.aHitAreas[f].area[0] && c > this.aHitAreas[f].area[1] && b < this.aHitAreas[f].area[2] && c < this.aHitAreas[f].area[3]) {
                            this.aHitAreas[f].aTouchIdentifiers.push(d), this.aHitAreas[f].oData.hasLeft = !1, this.aHitAreas[f].oData.isDown || (this.aHitAreas[f].oData.isDown = !0, this.aHitAreas[f].oData.x = b, this.aHitAreas[f].oData.y = c, this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData));
                            break
                        }
                }
            }
        }, a.prototype.hitUp = function(a, b, c, d) {
            if (!this.pauseIsOn) {
                a.preventDefault(), a.stopPropagation(), b = (b - this.canvasX) * this.canvasScaleX, c = (c - this.canvasY) * this.canvasScaleY;
                for (var e = 0; e < this.aHitAreas.length; e++)
                    if (this.aHitAreas[e].rect && b > this.aHitAreas[e].area[0] && c > this.aHitAreas[e].area[1] && b < this.aHitAreas[e].area[2] && c < this.aHitAreas[e].area[3]) {
                        for (var f = 0; f < this.aHitAreas[e].aTouchIdentifiers.length; f++) this.aHitAreas[e].aTouchIdentifiers[f] == d && (this.aHitAreas[e].aTouchIdentifiers.splice(f, 1), f -= 1);
                        0 == this.aHitAreas[e].aTouchIdentifiers.length && (this.aHitAreas[e].oData.isDown = !1, this.aHitAreas[e].oData.multiTouch && (this.aHitAreas[e].oData.x = b, this.aHitAreas[e].oData.y = c, this.aHitAreas[e].callback(this.aHitAreas[e].id, this.aHitAreas[e].oData)));
                        break
                    }
            }
        }, a.prototype.move = function(a, b, c, d, e) {
            if (!this.pauseIsOn && (e || this.anyMove)) {
                b = (b - this.canvasX) * this.canvasScaleX, c = (c - this.canvasY) * this.canvasScaleY;
                for (var f = 0; f < this.aHitAreas.length; f++)
                    if (this.aHitAreas[f].rect)
                        if (b > this.aHitAreas[f].area[0] && c > this.aHitAreas[f].area[1] && b < this.aHitAreas[f].area[2] && c < this.aHitAreas[f].area[3] && (this.aHitAreas[f].oData.anyMove || !this.anyMove)) this.aHitAreas[f].oData.hasLeft = !1, this.aHitAreas[f].oData.isDown || (this.aHitAreas[f].oData.isDown = !0, this.aHitAreas[f].oData.x = b, this.aHitAreas[f].oData.y = c, this.aHitAreas[f].aTouchIdentifiers.push(d), this.aHitAreas[f].oData.multiTouch && this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData)), this.aHitAreas[f].oData.isDraggable && (this.aHitAreas[f].oData.isBeingDragged = !0, this.aHitAreas[f].oData.x = b, this.aHitAreas[f].oData.y = c, this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData), this.aHitAreas[f].oData.isBeingDragged = !1);
                        else if (this.aHitAreas[f].oData.isDown && !this.aHitAreas[f].oData.hasLeft) {
                    for (var g = 0; g < this.aHitAreas[f].aTouchIdentifiers.length; g++) this.aHitAreas[f].aTouchIdentifiers[g] == d && (this.aHitAreas[f].aTouchIdentifiers.splice(g, 1), g -= 1);
                    0 == this.aHitAreas[f].aTouchIdentifiers.length && (this.aHitAreas[f].oData.hasLeft = !0, this.aHitAreas[f].oData.isBeingDragged || (this.aHitAreas[f].oData.isDown = !1), this.aHitAreas[f].oData.multiTouch && this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData))
                }
            }
        }, a.prototype.keyDown = function(a) {
            for (var b = 0; b < this.aKeys.length; b++) a.keyCode == this.aKeys[b].keyCode && (this.aKeys[b].oData.isDown = !0, this.aKeys[b].callback(this.aKeys[b].id, this.aKeys[b].oData))
        }, a.prototype.keyUp = function(a) {
            for (var b = 0; b < this.aKeys.length; b++) a.keyCode == this.aKeys[b].keyCode && (this.aKeys[b].oData.isDown = !1, this.aKeys[b].callback(this.aKeys[b].id, this.aKeys[b].oData))
        }, a.prototype.addKey = function(a, b, c, d) {
            var e = this;
            this.isDetectingKeys || (window.addEventListener("keydown", function(a) {
                e.keyDown(a)
            }, !1), window.addEventListener("keyup", function(a) {
                e.keyUp(a)
            }, !1), this.isDetectingKeys = !0), null == c && (c = new Object), this.aKeys.push({
                id: a,
                callback: b,
                oData: c,
                keyCode: d
            })
        }, a.prototype.removeKey = function(a) {
            for (var b = 0; b < this.aKeys.length; b++) this.aKeys[b].id == a && (this.aKeys.splice(b, 1), b -= 1)
        }, a.prototype.addHitArea = function(a, b, c, d, e, f) {
            "undefined" == typeof f && (f = !1), null == c && (c = new Object), f && this.removeHitArea(a), c.anyMove && (this.anyMove = !0);
            var g = new Array;
            switch (d) {
                case "image":
                    var h;
                    h = new Array(e.aPos[0] - e.oImgData.oData.oAtlasData[e.id].width / 2, e.aPos[1] - e.oImgData.oData.oAtlasData[e.id].height / 2, e.aPos[0] + e.oImgData.oData.oAtlasData[e.id].width / 2, e.aPos[1] + e.oImgData.oData.oAtlasData[e.id].height / 2), this.aHitAreas.push({
                        id: a,
                        aTouchIdentifiers: g,
                        callback: b,
                        oData: c,
                        rect: !0,
                        area: h
                    });
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: a,
                        aTouchIdentifiers: g,
                        callback: b,
                        oData: c,
                        rect: !0,
                        area: e.aRect
                    })
            }
        }, a.prototype.removeHitArea = function(a) {
            this.isDown = !1;
            for (var b = 0; b < this.aHitAreas.length; b++) this.aHitAreas[b].id == a && (this.aHitAreas[b].oData.anyMove && (this.anyMove = !1), this.aHitAreas.splice(b, 1), b -= 1)
        }, a
    }();
    a.UserInput = b
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a) {
            this.updateFreq = 10, this.updateInc = 0, this.frameAverage = 0, this.display = 1, this.log = "", this.render = function(a) {
                this.frameAverage += this.delta / this.updateFreq, ++this.updateInc >= this.updateFreq && (this.updateInc = 0, this.display = this.frameAverage, this.frameAverage = 0), a.textAlign = "left", ctx.font = "10px Helvetica", a.fillStyle = "#333333", a.beginPath(), a.rect(0, this.canvasHeight - 15, 40, 15), a.closePath(), a.fill(), a.fillStyle = "#ffffff", a.fillText(Math.round(1e3 / (1e3 * this.display)) + " fps " + this.log, 5, this.canvasHeight - 5)
            }, this.canvasHeight = a
        }
        return a.prototype.update = function(a) {
            this.delta = a
        }, a
    }();
    a.FpsMeter = b
}(Utils || (Utils = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c, d) {
            this.x = 0, this.y = 0, this.targY = 0, this.inc = 0, this.menuSegs = 50, this.gameSegs = 10, this.renderState = null, this.canHitGoal = !0, this.hasScored = !1, this.oImgData = a, this.oGameElementsImgData = b, this.canvasWidth = c, this.canvasHeight = d, this.scrollMultiplier = 50 * Math.random() + 50, 2 * Math.random() > 1 && (this.scrollMultiplier *= -1)
        }
        return a.prototype.update = function(a, b) {
            switch (this.renderState) {
                case "menuScroll":
                    this.inc += b, this.x = 5 * Math.sin(this.inc);
                    break;
                case "pass":
                    this.x = this.scrollMultiplier / (this.canvasWidth + 400) * (a + 200) - this.scrollMultiplier / 2;
                    break;
                case "shot":
                    this.x = this.scrollMultiplier / (this.canvasWidth + 400) * (a + 200) - this.scrollMultiplier / 2;
                    break;
                case "ripple":
                    this.inc += 5 * b
            }
        }, a.prototype.render = function(a) {
            switch (this.renderState) {
                case "menuScroll":
                    for (var b = 0; b <= this.menuSegs; b++) {
                        var c = 0,
                            d = 285;
                        b > 0 && (c = d + (b - 1) * 115 * (1 / this.menuSegs), d = 115 * (1 / this.menuSegs)), a.drawImage(this.oImgData.img, this.x * (b / 5 + 5) + 75, c, this.canvasWidth, d, 0, c, this.canvasWidth, d)
                    }
                    break;
                case "pass":
                    for (var b = 0; b <= this.gameSegs; b++) {
                        var c = 0,
                            d = 175;
                        b > 0 && (c = d + (b - 1) * 225 * (1 / this.gameSegs), d = 225 * (1 / this.gameSegs)), a.drawImage(this.oImgData.img, this.x * (b / 2 + 2) + 350, c, this.canvasWidth, d, 0, c, this.canvasWidth, d)
                    }
                    break;
                case "shot":
                    for (var b = 0; b <= this.gameSegs; b++) {
                        var c = 0,
                            d = 175;
                        b > 0 && (c = d + (b - 1) * 225 * (1 / this.gameSegs), d = 225 * (1 / this.gameSegs)), a.drawImage(this.oImgData.img, this.x * (b / 2 + 2) + 350, c, this.canvasWidth, d, 0, c, this.canvasWidth, d)
                    }
                    if (this.hasScored) {
                        var e = this.oGameElementsImgData.oData.oAtlasData.goalScored.x,
                            f = this.oGameElementsImgData.oData.oAtlasData.goalScored.y,
                            g = this.oGameElementsImgData.oData.oAtlasData.goalScored.width,
                            h = this.oGameElementsImgData.oData.oAtlasData.goalScored.height;
                        this.goalX = this.canvasWidth / 2 - 3 * this.x, this.goalY = this.y + 200 - h, a.drawImage(this.oGameElementsImgData.img, e, f, g, h, this.goalX - g / 2, this.goalY + 20, g, h)
                    } else {
                        var e = this.oGameElementsImgData.oData.oAtlasData.goal.x,
                            f = this.oGameElementsImgData.oData.oAtlasData.goal.y,
                            g = this.oGameElementsImgData.oData.oAtlasData.goal.width,
                            h = this.oGameElementsImgData.oData.oAtlasData.goal.height;
                        this.goalX = this.canvasWidth / 2 - 3 * this.x, this.goalY = this.y + 200 - h, a.drawImage(this.oGameElementsImgData.img, e, f, g, h, this.goalX - g / 2, this.goalY, g, h)
                    }
                    break;
                case "ripple":
                    var i = 100;
                    a.drawImage(this.oImgData.img, 0, 0);
                    for (var b = 0; i > b; b++) a.drawImage(this.oImgData.img, b * (this.canvasWidth / i), 0, this.canvasWidth / i, this.canvasHeight, b * (this.canvasWidth / i), 5 * Math.sin(this.inc + b / 20), this.canvasWidth / i, this.canvasHeight);
                    break;
                case "none":
                    a.drawImage(this.oImgData.img, 0, 0)
            }
        }, a
    }();
    a.Background = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            this.inc = 0, this.oSplashScreenImgData = a, this.canvasWidth = b, this.canvasHeight = c, this.posY = -this.canvasHeight, TweenLite.to(this, .5, {
                posY: 0
            })
        }
        return a.prototype.render = function(a, b) {
            this.inc += 5 * b, a.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY)
        }, a
    }();
    a.Splash = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c, d, e, f, g, h, i, j) {
            this.timer = .3, this.endTime = 0, this.posY = 0, this.numberSpace = 17, this.incY = 0, this.aShields = new Array(0, 1, 1, 2, 3, 2, 4, 2, 0, 5, 0, 6, 7, 8, 8, 8, 9, 9, 9, 10), this.aTreePos = new Array({
                x: 161,
                y: [36, 58, 80, 102, 124, 146, 168, 190, 212, 234, 256, 278, 300, 322, 344, 366]
            }, {
                x: 331,
                y: [95, 117, 159, 181, 221, 243, 284, 306]
            }, {
                x: 502,
                y: [159, 181, 221, 243]
            }, {
                x: 671,
                y: [189, 211]
            }), this.oPanels1ImgData = a, this.oPanels2ImgData = b, this.oTeamNamesSmallImgData = c, this.oTeamNamesLargeImgData = d, this.oScoreLargeImgData = e, this.oEndElementsImgData = f, this.panelType = g, this.aButs = h, this.canvasWidth = i, this.canvasHeight = j
        }
        return a.prototype.update = function(a) {
            this.incY += 5 * a
        }, a.prototype.startTween1 = function() {
            this.posY = 550, TweenLite.to(this, .8, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, a.prototype.startTween2 = function() {
            this.posY = 550, TweenLite.to(this, .5, {
                posY: 0,
                ease: "Quad.easeOut"
            })
        }, a.prototype.render = function(a, b) {
            switch ("undefined" == typeof b && (b = !0), b || this.addButs(a), this.panelType) {
                case "start":
                    var c = 0,
                        d = c * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width,
                        e = Math.floor(c / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, d, e + 1, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    break;
                case "credits":
                    var c = 1,
                        d = c * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width,
                        e = Math.floor(c / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, d, e, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    break;
                case "teamSelect":
                    var c = 2,
                        d = c * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width,
                        e = Math.floor(c / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, d, e, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    break;
                case "tree":
                    var c = 3,
                        d = c * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width,
                        e = Math.floor(c / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, d, e, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    for (var f = 0; f < aTeamsPlaying[stageNum].length; f++)
                        if (aTeamsPlaying[stageNum][f] == oMatchInfo.homeTeamId) {
                            var g = this.oTeamNamesSmallImgData.oData.oAtlasData.id20.x,
                                h = this.oTeamNamesSmallImgData.oData.oAtlasData.id20.y,
                                i = this.oTeamNamesSmallImgData.oData.oAtlasData.id20.width,
                                j = this.oTeamNamesSmallImgData.oData.oAtlasData.id20.height;
                            a.drawImage(this.oTeamNamesSmallImgData.img, g, h, i, j, this.aTreePos[stageNum].x - 142, this.aTreePos[stageNum].y[f] - 17 + this.posY, i, j);
                            break
                        }
                    for (var f = 0; f < aTeamsPlaying.length; f++)
                        for (var k = 0; k < aTeamsPlaying[f].length; k++) {
                            var g = this.oTeamNamesSmallImgData.oData.oAtlasData["id" + aTeamsPlaying[f][k]].x,
                                h = this.oTeamNamesSmallImgData.oData.oAtlasData["id" + aTeamsPlaying[f][k]].y,
                                i = this.oTeamNamesSmallImgData.oData.oAtlasData["id" + aTeamsPlaying[f][k]].width,
                                j = this.oTeamNamesSmallImgData.oData.oAtlasData["id" + aTeamsPlaying[f][k]].height;
                            a.drawImage(this.oTeamNamesSmallImgData.img, g, h, i, j, this.aTreePos[f].x - i, this.aTreePos[f].y[k] - j / 2 + this.posY, i, j)
                        }
                    break;
                case "matchWon":
                    var g = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].x,
                        h = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].y,
                        i = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].width,
                        j = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, 382 - i / 2, 155 - j / 2 + this.posY, i, j);
                    var g = this.oEndElementsImgData.oData.oAtlasData.glare.x,
                        h = this.oEndElementsImgData.oData.oAtlasData.glare.y,
                        i = this.oEndElementsImgData.oData.oAtlasData.glare.width,
                        j = this.oEndElementsImgData.oData.oAtlasData.glare.height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, 318 - i / 2, 155 - j / 2 + this.posY, i, j);
                    var g = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].x,
                        h = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].y,
                        i = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].width,
                        j = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, 318 - i / 2, 155 - j / 2 + this.posY, i, j);
                    var c = 0,
                        d = c * this.oPanels2ImgData.oData.spriteWidth % this.oPanels2ImgData.img.width,
                        e = Math.floor(c / (this.oPanels2ImgData.img.width / this.oPanels2ImgData.oData.spriteWidth)) * this.oPanels2ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels2ImgData.img, d, e + 1, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight);
                    for (var l = oMatchInfo.homeScore, f = 0; f < l.toString().length; f++) {
                        c = parseFloat(l.toString().charAt(f));
                        var d = c * this.oScoreLargeImgData.oData.spriteWidth % this.oScoreLargeImgData.img.width,
                            e = Math.floor(c / (this.oScoreLargeImgData.img.width / this.oScoreLargeImgData.oData.spriteWidth)) * this.oScoreLargeImgData.oData.spriteHeight;
                        a.drawImage(this.oScoreLargeImgData.img, d, e, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight, 315 + 25 * f - 25 * l.toString().length / 2, 134 + this.posY, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight)
                    }
                    for (var l = oMatchInfo.awayScore, f = 0; f < l.toString().length; f++) {
                        c = parseFloat(l.toString().charAt(f));
                        var d = c * this.oScoreLargeImgData.oData.spriteWidth % this.oScoreLargeImgData.img.width,
                            e = Math.floor(c / (this.oScoreLargeImgData.img.width / this.oScoreLargeImgData.oData.spriteWidth)) * this.oScoreLargeImgData.oData.spriteHeight;
                        a.drawImage(this.oScoreLargeImgData.img, d, e, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight, 383 + 25 * f - 25 * l.toString().length / 2, 134 + this.posY, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight)
                    }
                    var g = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].x,
                        h = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].y,
                        i = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].width,
                        j = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].height;
                    a.drawImage(this.oTeamNamesLargeImgData.img, g, h, i, j, 276 - i, 139 + this.posY, i, j);
                    var g = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].x,
                        h = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].y,
                        i = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].width,
                        j = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].height;
                    a.drawImage(this.oTeamNamesLargeImgData.img, g, h, i, j, 424, 139 + this.posY, i, j);
                    var m;
                    0 == stageNum ? m = "quarterFinals" : 1 == stageNum ? m = "semiFinals" : 2 == stageNum && (m = "final");
                    var g = this.oEndElementsImgData.oData.oAtlasData[m].x,
                        h = this.oEndElementsImgData.oData.oAtlasData[m].y,
                        i = this.oEndElementsImgData.oData.oAtlasData[m].width,
                        j = this.oEndElementsImgData.oData.oAtlasData[m].height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, this.canvasWidth / 2 - i / 2, 263 - j / 2 + this.posY, i, j);
                    break;
                case "matchLost":
                    var g = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].x,
                        h = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].y,
                        i = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].width,
                        j = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, 318 - i / 2, 155 - j / 2 + this.posY, i, j);
                    var g = this.oEndElementsImgData.oData.oAtlasData.glare.x,
                        h = this.oEndElementsImgData.oData.oAtlasData.glare.y,
                        i = this.oEndElementsImgData.oData.oAtlasData.glare.width,
                        j = this.oEndElementsImgData.oData.oAtlasData.glare.height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, 382 - i / 2, 155 - j / 2 + this.posY, i, j);
                    var g = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].x,
                        h = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].y,
                        i = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].width,
                        j = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, 382 - i / 2, 155 - j / 2 + this.posY, i, j);
                    var c = 1,
                        d = c * this.oPanels2ImgData.oData.spriteWidth % this.oPanels2ImgData.img.width,
                        e = Math.floor(c / (this.oPanels2ImgData.img.width / this.oPanels2ImgData.oData.spriteWidth)) * this.oPanels2ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels2ImgData.img, d, e + 1, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight);
                    for (var l = oMatchInfo.homeScore, f = 0; f < l.toString().length; f++) {
                        c = parseFloat(l.toString().charAt(f));
                        var d = c * this.oScoreLargeImgData.oData.spriteWidth % this.oScoreLargeImgData.img.width,
                            e = Math.floor(c / (this.oScoreLargeImgData.img.width / this.oScoreLargeImgData.oData.spriteWidth)) * this.oScoreLargeImgData.oData.spriteHeight;
                        a.drawImage(this.oScoreLargeImgData.img, d, e, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight, 315 + 25 * f - 25 * l.toString().length / 2, 134 + this.posY, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight)
                    }
                    for (var l = oMatchInfo.awayScore, f = 0; f < l.toString().length; f++) {
                        c = parseFloat(l.toString().charAt(f));
                        var d = c * this.oScoreLargeImgData.oData.spriteWidth % this.oScoreLargeImgData.img.width,
                            e = Math.floor(c / (this.oScoreLargeImgData.img.width / this.oScoreLargeImgData.oData.spriteWidth)) * this.oScoreLargeImgData.oData.spriteHeight;
                        a.drawImage(this.oScoreLargeImgData.img, d, e, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight, 383 + 25 * f - 25 * l.toString().length / 2, 134 + this.posY, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight)
                    }
                    var g = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].x,
                        h = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].y,
                        i = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].width,
                        j = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].height;
                    a.drawImage(this.oTeamNamesLargeImgData.img, g, h, i, j, 276 - i, 139 + this.posY, i, j);
                    var g = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].x,
                        h = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].y,
                        i = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].width,
                        j = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].height;
                    a.drawImage(this.oTeamNamesLargeImgData.img, g, h, i, j, 424, 139 + this.posY, i, j);
                    var m;
                    0 == stageNum ? m = "gameOver0" : 1 == stageNum ? m = "gameOver1" : 2 == stageNum ? m = "gameOver2" : 3 == stageNum && (m = "gameOver3");
                    var g = this.oEndElementsImgData.oData.oAtlasData[m].x,
                        h = this.oEndElementsImgData.oData.oAtlasData[m].y,
                        i = this.oEndElementsImgData.oData.oAtlasData[m].width,
                        j = this.oEndElementsImgData.oData.oAtlasData[m].height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, this.canvasWidth / 2 - i / 2, 263 - j / 2 + this.posY, i, j);
                    break;
                case "cupWon":
                    var g = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].x,
                        h = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].y,
                        i = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].width,
                        j = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.awayTeamId]].height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, 382 - i / 2, 155 - j / 2 + this.posY, i, j);
                    var g = this.oEndElementsImgData.oData.oAtlasData.glare.x,
                        h = this.oEndElementsImgData.oData.oAtlasData.glare.y,
                        i = this.oEndElementsImgData.oData.oAtlasData.glare.width,
                        j = this.oEndElementsImgData.oData.oAtlasData.glare.height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, 318 - i / 2, 155 - j / 2 + this.posY, i, j);
                    var g = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].x,
                        h = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].y,
                        i = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].width,
                        j = this.oEndElementsImgData.oData.oAtlasData["id" + this.aShields[oMatchInfo.homeTeamId]].height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, 318 - i / 2, 155 - j / 2 + this.posY, i, j);
                    var c = 2,
                        d = c * this.oPanels2ImgData.oData.spriteWidth % this.oPanels2ImgData.img.width,
                        e = Math.floor(c / (this.oPanels2ImgData.img.width / this.oPanels2ImgData.oData.spriteWidth)) * this.oPanels2ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels2ImgData.img, d, e + 1, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight);
                    for (var l = oMatchInfo.homeScore, f = 0; f < l.toString().length; f++) {
                        c = parseFloat(l.toString().charAt(f));
                        var d = c * this.oScoreLargeImgData.oData.spriteWidth % this.oScoreLargeImgData.img.width,
                            e = Math.floor(c / (this.oScoreLargeImgData.img.width / this.oScoreLargeImgData.oData.spriteWidth)) * this.oScoreLargeImgData.oData.spriteHeight;
                        a.drawImage(this.oScoreLargeImgData.img, d, e, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight, 315 + 25 * f - 25 * l.toString().length / 2, 134 + this.posY, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight)
                    }
                    for (var l = oMatchInfo.awayScore, f = 0; f < l.toString().length; f++) {
                        c = parseFloat(l.toString().charAt(f));
                        var d = c * this.oScoreLargeImgData.oData.spriteWidth % this.oScoreLargeImgData.img.width,
                            e = Math.floor(c / (this.oScoreLargeImgData.img.width / this.oScoreLargeImgData.oData.spriteWidth)) * this.oScoreLargeImgData.oData.spriteHeight;
                        a.drawImage(this.oScoreLargeImgData.img, d, e, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight, 383 + 25 * f - 25 * l.toString().length / 2, 134 + this.posY, this.oScoreLargeImgData.oData.spriteWidth, this.oScoreLargeImgData.oData.spriteHeight)
                    }
                    var g = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].x,
                        h = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].y,
                        i = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].width,
                        j = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].height;
                    a.drawImage(this.oTeamNamesLargeImgData.img, g, h, i, j, 276 - i, 139 + this.posY, i, j);
                    var g = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].x,
                        h = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].y,
                        i = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].width,
                        j = this.oTeamNamesLargeImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].height;
                    a.drawImage(this.oTeamNamesLargeImgData.img, g, h, i, j, 424, 139 + this.posY, i, j);
                    var g = this.oEndElementsImgData.oData.oAtlasData.cupWinners.x,
                        h = this.oEndElementsImgData.oData.oAtlasData.cupWinners.y,
                        i = this.oEndElementsImgData.oData.oAtlasData.cupWinners.width,
                        j = this.oEndElementsImgData.oData.oAtlasData.cupWinners.height;
                    a.drawImage(this.oEndElementsImgData.img, g, h, i, j, this.canvasWidth / 2 - i / 2, 263 - j / 2 + this.posY, i, j);
                    break;
                case "pause":
                    a.fillStyle = "rgba(0, 0, 0, 0.75)", a.fillRect(0, 0, this.canvasWidth, this.canvasHeight), console.log("pause")
            }
            b && this.addButs(a)
        }, a.prototype.addButs = function(a) {
            for (var b = 0; b < this.aButs.length; b++) {
                var c = this.posY,
                    d = 0;
                this.aButs[b].noFloat || (d = 3 * Math.sin(this.incY + 45 * b));
                var e = this.aButs[b].oImgData.oData.oAtlasData[this.aButs[b].id].x,
                    f = this.aButs[b].oImgData.oData.oAtlasData[this.aButs[b].id].y,
                    g = this.aButs[b].oImgData.oData.oAtlasData[this.aButs[b].id].width,
                    h = this.aButs[b].oImgData.oData.oAtlasData[this.aButs[b].id].height;
                a.drawImage(this.aButs[b].oImgData.img, e, f, g, h, this.aButs[b].aPos[0] - g / 2 + c, this.aButs[b].aPos[1] - h / 2 - d, g, h)
            }
        }, a
    }();
    a.Panel = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c, d, e, f) {
            this.bonusScore = 0, this.letterSpace = 15, this.oHudImgData = a, this.oLargeTeamNamesImgData = b, this.oSmallNumbersImgData = c, this.oTimeImgData = d, this.canvasWidth = e, this.canvasHeight = f
        }
        return a.prototype.render = function(a) {
            a.drawImage(this.oHudImgData.img, 0, 0);
            for (var b = 0; b < oMatchInfo.homeScore.toString().length; b++) {
                var c = parseFloat(oMatchInfo.homeScore.toString().charAt(b)),
                    d = c * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width,
                    e = Math.floor(c / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                a.drawImage(this.oSmallNumbersImgData.img, d, e, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 307 + b * this.letterSpace - this.letterSpace * oMatchInfo.homeScore.toString().length / 2, 11, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
            }
            for (var b = 0; b < oMatchInfo.awayScore.toString().length; b++) {
                var c = parseFloat(oMatchInfo.awayScore.toString().charAt(b)),
                    d = c * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width,
                    e = Math.floor(c / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                a.drawImage(this.oSmallNumbersImgData.img, d, e, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 348 + b * this.letterSpace - this.letterSpace * oMatchInfo.awayScore.toString().length / 2, 11, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
            }
            var f = this.oLargeTeamNamesImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].x,
                g = this.oLargeTeamNamesImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].y,
                h = this.oLargeTeamNamesImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].width,
                i = this.oLargeTeamNamesImgData.oData.oAtlasData["id" + oMatchInfo.homeTeamId].height;
            a.drawImage(this.oLargeTeamNamesImgData.img, f, g, h, i, 287 - h, 7, h, i);
            var f = this.oLargeTeamNamesImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].x,
                g = this.oLargeTeamNamesImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].y,
                h = this.oLargeTeamNamesImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].width,
                i = this.oLargeTeamNamesImgData.oData.oAtlasData["id" + oMatchInfo.awayTeamId].height;
            if (a.drawImage(this.oLargeTeamNamesImgData.img, f, g, h, i, 374, 7, h, i), oMatchInfo.time < 91) {
                for (var b = 0; b < oMatchInfo.time.toString().length; b++) {
                    var c = parseFloat(oMatchInfo.time.toString().charAt(b)),
                        d = c * this.oTimeImgData.oData.spriteWidth % this.oTimeImgData.img.width,
                        e = Math.floor(c / (this.oTimeImgData.img.width / this.oTimeImgData.oData.spriteWidth)) * this.oTimeImgData.oData.spriteHeight;
                    a.drawImage(this.oTimeImgData.img, d, e, this.oTimeImgData.oData.spriteWidth, this.oTimeImgData.oData.spriteHeight, 4 + b * (this.letterSpace + 1), 7, this.oTimeImgData.oData.spriteWidth, this.oTimeImgData.oData.spriteHeight)
                }
                var c = 10,
                    d = c * this.oTimeImgData.oData.spriteWidth % this.oTimeImgData.img.width,
                    e = Math.floor(c / (this.oTimeImgData.img.width / this.oTimeImgData.oData.spriteWidth)) * this.oTimeImgData.oData.spriteHeight;
                a.drawImage(this.oTimeImgData.img, d, e, this.oTimeImgData.oData.spriteWidth, this.oTimeImgData.oData.spriteHeight, 4 + oMatchInfo.time.toString().length * (this.letterSpace + 1), 7, this.oTimeImgData.oData.spriteWidth, this.oTimeImgData.oData.spriteHeight)
            } else {
                var c = 11,
                    d = c * this.oTimeImgData.oData.spriteWidth % this.oTimeImgData.img.width,
                    e = Math.floor(c / (this.oTimeImgData.img.width / this.oTimeImgData.oData.spriteWidth)) * this.oTimeImgData.oData.spriteHeight;
                a.drawImage(this.oTimeImgData.img, d, e, this.oTimeImgData.oData.spriteWidth, this.oTimeImgData.oData.spriteHeight, 4, 7, this.oTimeImgData.oData.spriteWidth, this.oTimeImgData.oData.spriteHeight)
            }
        }, a
    }();
    a.Hud = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            this.x = 0, this.shadowY = 0, this.y = 0, this.scale = 1, this.rotation = 0, this.alpha = 1, this.ground = 370, this.rotMax = 15, this.incSpin = 0, this.bouncePower = .5, this.scoreX = 0, this.scoreY = 0, this.hasBounced = !1, this.spinFrameInc = 0, this.oGameElementsImgData = a, this.canvasWidth = b, this.canvasHeight = c, this.side = Math.floor(2 * Math.random()), 0 == this.side ? (this.x = -200, this.incX = 100 * Math.random() + 150 + 40 * stageNum) : (this.x = this.canvasWidth + 200, this.incX = -(100 * Math.random() + 150 + 10 * stageNum)), this.y = 120 * Math.random() + 150, this.incY = this.y < 200 ? 50 * Math.random() : 50 * Math.random() + 100, this.incRot = Math.random() * this.rotMax - this.rotMax / 2, this.incRot < 0 ? this.incRot = Math.min(this.incRot, -3) : this.incRot > 0 && (this.incRot = Math.max(this.incRot, 3))
        }
        return a.prototype.updatePass = function(a) {
            this.x += this.incX * a, this.y += this.incY * a, this.shadowY = this.ground, this.incY = Math.min(this.incY + 400 * a, 350), this.rotation += this.incRot * a, this.y > this.ground - 40 && (this.y = this.ground - 40, playSound("ballBounce"), this.incY = 0 == this.side && this.incRot < 0 || 1 == this.side && this.incRot > 0 ? -this.incY * (1 + .25 / this.rotMax * Math.abs(this.incRot)) : -this.incY * (1 - .25 / this.rotMax * Math.abs(this.incRot)), this.incRot *= .5)
        }, a.prototype.renderPass = function(a) {
            var b = this.oGameElementsImgData.oData.oAtlasData.ballShadow.x,
                c = this.oGameElementsImgData.oData.oAtlasData.ballShadow.y,
                d = this.oGameElementsImgData.oData.oAtlasData.ballShadow.width,
                e = this.oGameElementsImgData.oData.oAtlasData.ballShadow.height;
            a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2 * this.scale, this.shadowY - e / 2 * this.scale, d * this.scale, e * this.scale), a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scale, this.scale), a.globalAlpha = this.alpha;
            var b = this.oGameElementsImgData.oData.oAtlasData.ballStill.x,
                c = this.oGameElementsImgData.oData.oAtlasData.ballStill.y,
                d = this.oGameElementsImgData.oData.oAtlasData.ballStill.width,
                e = this.oGameElementsImgData.oData.oAtlasData.ballStill.height;
            a.drawImage(this.oGameElementsImgData.img, b, c, d, e, -d / 2, -e / 2, d, e), a.restore()
        }, a.prototype.updateKick = function(a) {
            this.scale = .95 * (1 - Math.min(this.ground - this.shadowY, 350) / 350), this.kickY -= this.incY * a, this.incY = Math.min(this.incY + 800 * a, 350), this.spinFrameInc += 25 * a, this.incSpin += this.spinPower * (this.scale - .3) * a, this.x = this.kickX + this.incSpin, this.rotation = 0, this.y = this.shadowY - (40 + this.kickY) * this.scale, this.y > this.shadowY - 40 * (this.scale - .3) && (this.y = this.shadowY - 40 * (this.scale - .3), this.kickY += this.incY * a, this.incY > 75 && playSound("ballBounce"), this.spinPower *= .5, this.hasBounced = !0, this.incY *= -this.bouncePower, this.bouncePower > 0 && (this.bouncePower -= .05))
        }, a.prototype.renderKick = function(a) {
            var b = this.oGameElementsImgData.oData.oAtlasData.ballShadow.x,
                c = this.oGameElementsImgData.oData.oAtlasData.ballShadow.y,
                d = this.oGameElementsImgData.oData.oAtlasData.ballShadow.width,
                e = this.oGameElementsImgData.oData.oAtlasData.ballShadow.height;
            a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2 * (this.scale - .3), this.shadowY - e / 2 * (this.scale - .3), d * (this.scale - .3), e * (this.scale - .3)), a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scale - .35, this.scale - .35);
            var f = "ballStill";
            this.hasBounced || (f = "ballSpin" + Math.round(this.spinFrameInc) % 3);
            var b = this.oGameElementsImgData.oData.oAtlasData[f].x,
                c = this.oGameElementsImgData.oData.oAtlasData[f].y,
                d = this.oGameElementsImgData.oData.oAtlasData[f].width,
                e = this.oGameElementsImgData.oData.oAtlasData[f].height;
            this.diameter = d * (this.scale - .35), a.drawImage(this.oGameElementsImgData.img, b, c, d, e, -(d / 2), -(e / 2), d, e), a.restore()
        }, a.prototype.updateDefend = function(a) {
            this.y += this.incY * a, this.prevShadowY != this.shadowY && (this.y += this.shadowY - this.prevShadowY, this.prevShadowY = this.shadowY), this.spinFrameInc += 25 * a, this.incY = Math.min(this.incY + 400 * a, 350), this.rotation += this.incRot * a, this.y > this.shadowY - 40 * this.scale && (this.y = this.shadowY - 40 * this.scale, this.incY > 75 && playSound("ballBounce"), this.incY *= -this.bouncePower, this.bouncePower > 0 && (this.bouncePower -= .05), this.incRot *= .5)
        }, a.prototype.renderDefend = function(a) {
            var b = this.oGameElementsImgData.oData.oAtlasData.ballShadow.x,
                c = this.oGameElementsImgData.oData.oAtlasData.ballShadow.y,
                d = this.oGameElementsImgData.oData.oAtlasData.ballShadow.width,
                e = this.oGameElementsImgData.oData.oAtlasData.ballShadow.height;
            a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2 * this.scale, this.shadowY - e / 2 * this.scale, d * this.scale, e * this.scale), a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scale, this.scale);
            var f = "ballStill";
            this.hasBounced || (f = "ballSpin" + Math.round(this.spinFrameInc) % 3);
            var b = this.oGameElementsImgData.oData.oAtlasData[f].x,
                c = this.oGameElementsImgData.oData.oAtlasData[f].y,
                d = this.oGameElementsImgData.oData.oAtlasData[f].width,
                e = this.oGameElementsImgData.oData.oAtlasData[f].height;
            this.diameter = d * this.scale, a.drawImage(this.oGameElementsImgData.img, b, c, d, e, -(d / 2), -(e / 2), d, e), a.restore()
        }, a
    }();
    a.Ball = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c, d, e, f, g) {
            this.x = 0, this.y = 0, this.scale = 1, this.renderState = null, this.canHit = !0, this.faceAngle = 1, this.aOffsets = new Array([11, -260, 16, -230], [11, -262, 2, -230]), this.passMessage = Math.floor(6 * Math.random()), this.oPlayers1ImgData = a, this.oPlayers2ImgData = b, this.oGameElementsImgData = c, this.canvasWidth = f, this.canvasHeight = g, this.homeOrAway = e, this.teamId = d, this.playerShape = Math.floor(2 * Math.random()), this.skinColour = Math.floor(3 * Math.random()), this.stageScale = 1 - stageNum / 12, 1 * Math.random() > .5 && (this.faceAngle = -1)
        }
        return a.prototype.flipShape = function() {
            this.playerShape = 1 == this.playerShape ? 0 : 1
        }, a.prototype.setPos = function(a, b) {
            this.depth = a, this.y = 180 + 22 * (this.depth - 1), this.startX = b, this.scale = .75 * (this.depth / 10) + .15
        }, a.prototype.setDefendPos = function(a, b) {
            this.depth = a, this.y = 218 + this.depth * .2 * 33, this.startX = this.x = b, this.scale = .3 * (this.depth / 5) + .1
        }, a.prototype.update = function(a, b) {
            switch (this.renderState) {
                case "pass":
                    this.x = this.startX - (b / (this.canvasWidth + 400) * (a + 200) - b / 2) * (this.depth / 2 + 2);
                    break;
                case "kick":
                    this.x = this.startX - (b / (this.canvasWidth + 400) * (a + 200) - b / 2) * (this.depth / 2 + 2);
                    break;
                case "defend":
            }
        }, a.prototype.render = function(a) {
            switch (this.renderState) {
                case "pass":
                    if (this.teamId == oMatchInfo.homeTeamId) {
                        var b = this.oGameElementsImgData.oData.oAtlasData.highlight1.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.highlight1.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.highlight1.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.highlight1.height;
                        if (this.targetWidth = d * (.5 + this.scale / 2) * this.stageScale, this.targetHeight = e * (.5 + this.scale / 2) * this.stageScale, a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2 * (.5 + this.scale / 2) * this.stageScale, this.y - 45 * (.5 + this.scale / 2) * this.stageScale, this.targetWidth, this.targetHeight), 0 != firstRun) {
                            var b = this.oGameElementsImgData.oData.oAtlasData["pass" + this.passMessage].x,
                                c = this.oGameElementsImgData.oData.oAtlasData["pass" + this.passMessage].y,
                                d = this.oGameElementsImgData.oData.oAtlasData["pass" + this.passMessage].width,
                                e = this.oGameElementsImgData.oData.oAtlasData["pass" + this.passMessage].height;
                            this.targetWidth = d * (.5 + this.scale / 2) * this.stageScale, this.targetHeight = e * (.5 + this.scale / 2) * this.stageScale, a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e - 275 * this.scale, d, e)
                        }
                    } else {
                        var b = this.oGameElementsImgData.oData.oAtlasData.playerShadow.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.playerShadow.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.playerShadow.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.playerShadow.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2 * this.scale, this.y - e / 2 * this.scale, d * this.scale, e * this.scale)
                    }
                    this.renderPlayer(a);
                    break;
                case "kick":
                    if (this.teamId == oMatchInfo.homeTeamId)
                        if (0 == swipeState || 3 == swipeState) {
                            var b = this.oGameElementsImgData.oData.oAtlasData.highlight1.x,
                                c = this.oGameElementsImgData.oData.oAtlasData.highlight1.y,
                                d = this.oGameElementsImgData.oData.oAtlasData.highlight1.width,
                                e = this.oGameElementsImgData.oData.oAtlasData.highlight1.height;
                            this.targetWidth = d * (.5 + this.scale / 2) * this.stageScale, this.targetHeight = e * (.5 + this.scale / 2) * this.stageScale, a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2 * (.5 + this.scale / 2) * this.stageScale, this.y - 45 * (.5 + this.scale / 2) * this.stageScale, this.targetWidth, this.targetHeight)
                        } else {
                            var b = this.oGameElementsImgData.oData.oAtlasData.highlight2.x,
                                c = this.oGameElementsImgData.oData.oAtlasData.highlight2.y,
                                d = this.oGameElementsImgData.oData.oAtlasData.highlight2.width,
                                e = this.oGameElementsImgData.oData.oAtlasData.highlight2.height;
                            this.targetWidth = d * (.5 + this.scale / 2) * this.stageScale, this.targetHeight = e * (.5 + this.scale / 2) * this.stageScale, a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2 * (.5 + this.scale / 2) * this.stageScale, this.y - 161 * (.5 + this.scale / 2) * this.stageScale, this.targetWidth, this.targetHeight)
                        } else {
                        var b = this.oGameElementsImgData.oData.oAtlasData.playerShadow.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.playerShadow.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.playerShadow.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.playerShadow.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2 * this.scale, this.y - e / 2 * this.scale, d * this.scale, e * this.scale)
                    }
                    this.renderPlayer(a);
                    break;
                case "defend":
                    var b = this.oGameElementsImgData.oData.oAtlasData.playerShadow.x,
                        c = this.oGameElementsImgData.oData.oAtlasData.playerShadow.y,
                        d = this.oGameElementsImgData.oData.oAtlasData.playerShadow.width,
                        e = this.oGameElementsImgData.oData.oAtlasData.playerShadow.height;
                    a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2 * this.scale, this.y - e / 2 * this.scale, d * this.scale, e * this.scale), this.renderPlayer(a)
            }
        }, a.prototype.renderPlayer = function(a) {
            this.oPlayersChosenImgData = 1 == this.playerShape ? this.oPlayers2ImgData : this.oPlayers1ImgData, a.save(), a.translate(this.x, this.y), a.scale(this.faceAngle, 1);
            var b = this.oPlayersChosenImgData.oData.oAtlasData["id" + this.skinColour].x,
                c = this.oPlayersChosenImgData.oData.oAtlasData["id" + this.skinColour].y,
                d = this.oPlayersChosenImgData.oData.oAtlasData["id" + this.skinColour].width,
                e = this.oPlayersChosenImgData.oData.oAtlasData["id" + this.skinColour].height;
            a.drawImage(this.oPlayersChosenImgData.img, b, c, d, e, -(d / 2 + this.aOffsets[this.playerShape][0]) * this.scale, this.aOffsets[this.playerShape][1] * this.scale, d * this.scale, e * this.scale);
            var b = this.oPlayersChosenImgData.oData.oAtlasData["id" + (oShorts[this.homeOrAway][this.teamId] + 3)].x,
                c = this.oPlayersChosenImgData.oData.oAtlasData["id" + (oShorts[this.homeOrAway][this.teamId] + 3)].y,
                d = this.oPlayersChosenImgData.oData.oAtlasData["id" + (oShorts[this.homeOrAway][this.teamId] + 3)].width,
                e = this.oPlayersChosenImgData.oData.oAtlasData["id" + (oShorts[this.homeOrAway][this.teamId] + 3)].height;
            a.drawImage(this.oPlayersChosenImgData.img, b, c, d, e, -(d / 2) * this.scale, -e * this.scale, d * this.scale, e * this.scale);
            var b = this.oPlayersChosenImgData.oData.oAtlasData["id" + (oShirts[this.homeOrAway][this.teamId] + 21)].x,
                c = this.oPlayersChosenImgData.oData.oAtlasData["id" + (oShirts[this.homeOrAway][this.teamId] + 21)].y,
                d = this.oPlayersChosenImgData.oData.oAtlasData["id" + (oShirts[this.homeOrAway][this.teamId] + 21)].width,
                e = this.oPlayersChosenImgData.oData.oAtlasData["id" + (oShirts[this.homeOrAway][this.teamId] + 21)].height;
            a.drawImage(this.oPlayersChosenImgData.img, b, c, d, e, -(d / 2 + this.aOffsets[this.playerShape][2]) * this.scale, this.aOffsets[this.playerShape][3] * this.scale, d * this.scale, e * this.scale), a.restore()
        }, a
    }();
    a.Player = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a) {
            this.x = 0, this.y = 0, this.scale = 1, this.rotation = 0, this.alpha = 1, this.targX = 0, this.targY = 0, this.lineNum = 0, this.oTrailImgData = a
        }
        return a.prototype.update = function(a, b, c) {
            0 == this.targX && (this.targX = a, this.targY = b), this.lineNum++, this.prevX = this.targX, this.prevY = this.targY, this.targX += (a - this.targX) / .2 * c, this.targY += (b - this.targY) / .2 * c;
            var d = a - this.targX,
                e = b - this.targY;
            this.scale = Math.min((d * d + e * e) / (5e5 * c), 3), this.rotation = Math.atan2(this.prevY - this.targY, this.prevX - this.targX), this.x = a, this.y = b
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scale, 1), a.globalAlpha = this.alpha, a.drawImage(this.oTrailImgData.img, 0, 0, this.oTrailImgData.img.width, this.oTrailImgData.img.height, 0, -this.oTrailImgData.img.height / 2, this.oTrailImgData.img.width, this.oTrailImgData.img.height), a.restore()
        }, a
    }();
    a.Trail = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            this.renderState = null, this.oGameElementsImgData = a, this.canvasWidth = b, this.canvasHeight = c
        }
        return a.prototype.killTween = function() {
            this.resultTween && TweenMax.killAll(!1, !0, !0)
        }, a.prototype.addPanel = function() {
            this.x = 2 * this.canvasWidth, this.y = this.canvasHeight / 2, this.resultTween && this.resultTween.kill(), this.resultTween = TweenMax.to(this, 1, {
                x: this.canvasWidth / 2,
                ease: "Cubic.easeIn",
                onComplete: this.panelIn,
                onCompleteParams: [this]
            })
        }, a.prototype.panelIn = function(a) {
            switch (a.renderState) {
                case "passSuccess":
                    playSound("barUp"), this.resultTween = TweenMax.to(oMatchInfo, 2, {
                        passPercentage: Math.min(oMatchInfo.passPercentage + oMatchInfo.passResult, 100),
                        ease: "Cubic.easeInOut",
                        onComplete: a.barIn,
                        onCompleteParams: [a]
                    });
                    break;
                case "youScoredGoal":
                    this.resultTween = oMatchInfo.round > 2 && oMatchInfo.homeScore > oMatchInfo.awayScore ? TweenMax.to(a, 1, {
                        delay: 2,
                        x: a.canvasWidth / 2,
                        ease: "Elastic.easeOut",
                        startAt: {
                            onComplete: function() {
                                playSound("whistle"), a.renderState = "matchEnd", a.x = a.canvasWidth / 2 + 200
                            }
                        },
                        onComplete: a.panelIn,
                        onCompleteParams: [a]
                    }) : TweenMax.to(a, 1, {
                        delay: 2,
                        x: a.canvasWidth / 2,
                        ease: "Elastic.easeOut",
                        startAt: {
                            onComplete: function() {
                                a.renderState = "opponentAttack", a.x = a.canvasWidth / 2 + 200
                            }
                        },
                        onComplete: a.panelIn,
                        onCompleteParams: [a]
                    });
                    break;
                case "oppScoredGoal":
                    this.resultTween = TweenMax.to(a, 1, {
                        x: a.canvasWidth / 2,
                        ease: "Elastic.easeOut",
                        onComplete: a.barIn,
                        onCompleteParams: [a]
                    });
                    break;
                case "oppMissedGoal":
                    this.resultTween = TweenMax.to(a, 1, {
                        x: a.canvasWidth / 2,
                        ease: "Elastic.easeOut",
                        onComplete: a.barIn,
                        onCompleteParams: [a]
                    });
                    break;
                case "opponentAttack":
                    this.resultTween = TweenMax.to(a, 1, {
                        delay: 2,
                        x: 2 * -a.canvasWidth,
                        ease: "Cubic.easeOut",
                        onComplete: a.panelOut,
                        onStart: function() {
                            ballCallback("defendShot")
                        },
                        onCompleteParams: [a]
                    });
                    break;
                case "passMissed":
                case "shotMissed":
                case "shotSaved":
                    this.resultTween = TweenMax.to(a, 1, {
                        delay: 2,
                        x: 2 * -a.canvasWidth,
                        ease: "Cubic.easeOut",
                        onComplete: a.panelOut,
                        onStart: function() {
                            ballCallback("defendShot")
                        },
                        onCompleteParams: [a]
                    });
                    break;
                case "matchEnd":
                    this.resultTween = TweenMax.to(a, 1, {
                        delay: 2,
                        x: 2 * -a.canvasWidth,
                        ease: "Cubic.easeOut",
                        onStart: function() {
                            ballCallback("matchEnd")
                        }
                    })
            }
        }, a.prototype.barIn = function(a) {
            switch (a.renderState) {
                case "passSuccess":
                    oMatchInfo.passPercentage < 100 ? (ballCallback("nextPass"), this.resultTween = TweenMax.to(a, 1, {
                        x: 2 * -a.canvasWidth,
                        ease: "Cubic.easeOut",
                        onComplete: a.panelOut,
                        onCompleteParams: [a]
                    })) : (a.renderState = "shotPrep", playSound("takeShot"), a.x = a.canvasWidth / 2 + 200, this.resultTween = TweenMax.to(a, 1, {
                        x: a.canvasWidth / 2,
                        ease: "Elastic.easeOut",
                        onComplete: a.shotPrep,
                        onCompleteParams: [a]
                    }));
                    break;
                case "oppScoredGoal":
                case "oppMissedGoal":
                    oMatchInfo.round > 2 && oMatchInfo.homeScore != oMatchInfo.awayScore ? (a.renderState = "matchEnd", playSound("whistle"), a.x = a.canvasWidth / 2 + 200, this.resultTween = TweenMax.to(a, 1, {
                        x: a.canvasWidth / 2,
                        ease: "Elastic.easeOut",
                        onComplete: a.panelIn,
                        onCompleteParams: [a]
                    })) : this.resultTween = TweenMax.to(a, 1, {
                        delay: 1,
                        x: 2 * -a.canvasWidth,
                        ease: "Cubic.easeOut",
                        onStart: function() {
                            ballCallback("nextPass")
                        },
                        onComplete: a.panelOut,
                        onCompleteParams: [a]
                    })
            }
        }, a.prototype.shotPrep = function(a) {
            ballCallback("shotPrep"), this.resultTween = TweenMax.to(a, 1, {
                x: 2 * -a.canvasWidth,
                ease: "Cubic.easeOut",
                onComplete: a.panelOut,
                onCompleteParams: [a]
            })
        }, a.prototype.panelOut = function(a) {
            a.renderState = null
        }, a.prototype.update = function() {}, a.prototype.render = function(a) {
            if (null != this.renderState) {
                var b = this.oGameElementsImgData.oData.oAtlasData.resultPanel.x,
                    c = this.oGameElementsImgData.oData.oAtlasData.resultPanel.y,
                    d = this.oGameElementsImgData.oData.oAtlasData.resultPanel.width,
                    e = this.oGameElementsImgData.oData.oAtlasData.resultPanel.height;
                switch (a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e), this.renderState) {
                    case "passSuccess":
                        var b = this.oGameElementsImgData.oData.oAtlasData.passPanelBg.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.passPanelBg.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.passPanelBg.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.passPanelBg.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2 + 20, d, e);
                        var b = this.oGameElementsImgData.oData.oAtlasData.passPanelBar.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.passPanelBar.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.passPanelBar.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.passPanelBar.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d * (oMatchInfo.passPercentage / 100), e, this.x - d / 2 - 27, this.y - e / 2 + 16, d * (oMatchInfo.passPercentage / 100), e);
                        var b = this.oGameElementsImgData.oData.oAtlasData[this.resultFrame].x,
                            c = this.oGameElementsImgData.oData.oAtlasData[this.resultFrame].y,
                            d = this.oGameElementsImgData.oData.oAtlasData[this.resultFrame].width,
                            e = this.oGameElementsImgData.oData.oAtlasData[this.resultFrame].height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e);
                        break;
                    case "shotPrep":
                        var b = this.oGameElementsImgData.oData.oAtlasData.takeShotResult.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.takeShotResult.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.takeShotResult.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.takeShotResult.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2 + 20, d, e);
                        break;
                    case "youScoredGoal":
                        var b = this.oGameElementsImgData.oData.oAtlasData.playerGoalResult.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.playerGoalResult.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.playerGoalResult.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.playerGoalResult.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e);
                        break;
                    case "oppScoredGoal":
                        var b = this.oGameElementsImgData.oData.oAtlasData.opponentGoalResult.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.opponentGoalResult.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.opponentGoalResult.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.opponentGoalResult.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e);
                        break;
                    case "passMissed":
                        var b = this.oGameElementsImgData.oData.oAtlasData.badPass.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.badPass.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.badPass.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.badPass.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e);
                        break;
                    case "shotMissed":
                        var b = this.oGameElementsImgData.oData.oAtlasData.playerShotMissed.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.playerShotMissed.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.playerShotMissed.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.playerShotMissed.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e);
                        break;
                    case "shotSaved":
                        var b = this.oGameElementsImgData.oData.oAtlasData.playerShotSaved.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.playerShotSaved.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.playerShotSaved.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.playerShotSaved.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e);
                        break;
                    case "opponentAttack":
                        var b = this.oGameElementsImgData.oData.oAtlasData.opponentAttackResult.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.opponentAttackResult.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.opponentAttackResult.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.opponentAttackResult.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e);
                        break;
                    case "oppMissedGoal":
                        var b = this.oGameElementsImgData.oData.oAtlasData.shotSavedResult.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.shotSavedResult.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.shotSavedResult.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.shotSavedResult.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e);
                        break;
                    case "matchEnd":
                        var b = this.oGameElementsImgData.oData.oAtlasData.matchEndResult.x,
                            c = this.oGameElementsImgData.oData.oAtlasData.matchEndResult.y,
                            d = this.oGameElementsImgData.oData.oAtlasData.matchEndResult.width,
                            e = this.oGameElementsImgData.oData.oAtlasData.matchEndResult.height;
                        a.drawImage(this.oGameElementsImgData.img, b, c, d, e, this.x - d / 2, this.y - e / 2, d, e)
                }
            }
        }, a
    }();
    a.ResultPanel = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            this.x = 0, this.y = 0, this.scale = 1, this.canHit = !0, this.canDive = !0, this.frameId = 0, this.rotation = 0, this.oGoalieImgData = a, this.canvasWidth = b, this.canvasHeight = c, this.depth = 2, this.y = 203, this.startX = this.canvasWidth / 2 + 120 * Math.random() - 60, this.scale = .75 * (this.depth / 10) + .1
        }
        return a.prototype.dive = function() {
            this.canDive = !1, this.ballTargX = ball.x;
            var a = !0;
            1 * Math.random() > .5 && (a = !1), a && this.ballTargX > this.x + 25 ? (this.frameId = 1, this.incY = -(50 * Math.random() + 100), TweenLite.to(this, .5, {
                rotation: Math.PI / 2,
                ease: "Quad.easeOut"
            }), TweenLite.to(this, 2, {
                startX: this.startX + 50 * Math.random() + 25,
                ease: "Quad.easeOut"
            })) : a && this.ballTargX < this.x - 25 ? (this.frameId = 2, this.incY = -(50 * Math.random() + 100), TweenLite.to(this, .5, {
                rotation: -Math.PI / 2,
                ease: "Quad.easeOut"
            }), TweenLite.to(this, 2, {
                startX: this.startX - (50 * Math.random() + 25),
                ease: "Quad.easeOut"
            })) : (this.incY = -150, this.frameId = 1, this.ballTargX > this.x ? TweenLite.to(this, 1.5, {
                startX: this.startX - (25 * Math.random() + 25),
                ease: "Quad.easeOut"
            }) : TweenLite.to(this, 1.5, {
                startX: this.startX - (25 * Math.random() + 25),
                ease: "Quad.easeOut"
            }))
        }, a.prototype.update = function(a, b, c) {
            this.x = this.startX - (b / (this.canvasWidth + 400) * (a + 200) - b / 2) * (this.depth / 2 + 2), this.canDive || (this.y += this.incY * c, this.incY = Math.min(this.incY + 400 * c, 350), this.incY > 0 && this.y > 203 && (this.frameId = this.rotation < 0 ? 4 : this.rotation > 0 ? 3 : 0, this.incY *= -.5))
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), this.rotation < 0 ? (this.reachXL = this.x - this.oGoalieImgData.oData.spriteHeight, this.reachXR = this.x, this.reachYT = 200 - this.y - 12, this.reachYB = 200 - this.y + 12) : this.rotation > 0 ? (this.reachXL = this.x, this.reachXR = this.x + this.oGoalieImgData.oData.spriteHeight, this.reachYT = 200 - this.y - 12, this.reachYB = 200 - this.y + 12) : (this.reachXL = this.x - this.oGoalieImgData.oData.spriteWidth / 2, this.reachXR = this.x + this.oGoalieImgData.oData.spriteWidth / 2, this.reachYT = 200 - this.y, this.reachYB = 200 - this.y + 66);
            var b = this.frameId * this.oGoalieImgData.oData.spriteWidth % this.oGoalieImgData.img.width,
                c = Math.floor(this.frameId / (this.oGoalieImgData.img.width / this.oGoalieImgData.oData.spriteWidth)) * this.oGoalieImgData.oData.spriteHeight;
            a.drawImage(this.oGoalieImgData.img, b, c, this.oGoalieImgData.oData.spriteWidth, this.oGoalieImgData.oData.spriteHeight - 2, -this.oGoalieImgData.oData.spriteWidth / 2, -this.oGoalieImgData.oData.spriteHeight, this.oGoalieImgData.oData.spriteWidth, this.oGoalieImgData.oData.spriteHeight), a.restore()
        }, a
    }();
    a.Goalie = b
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var b = function() {
        function a(a) {
            this.rotation = 0, this.oGameElementsImgData = a, this.reset()
        }
        return a.prototype.reset = function() {
            this.x = this.targX = 350, this.y = this.targY = 330
        }, a.prototype.update = function() {
            this.x = Math.min(Math.max(this.targX, 40), 660), this.y = Math.min(Math.max(this.targY, 155), 370), this.rotation = (this.x - 350) / 350
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x - 25, this.y - 50), a.rotate(this.rotation + .5);
            var b = this.oGameElementsImgData.oData.oAtlasData.glove.x,
                c = this.oGameElementsImgData.oData.oAtlasData.glove.y,
                d = this.oGameElementsImgData.oData.oAtlasData.glove.width,
                e = this.oGameElementsImgData.oData.oAtlasData.glove.height;
            a.drawImage(this.oGameElementsImgData.img, b, c, d, e, -d / 2, -e / 2, d, e), a.restore(), a.save(), a.translate(this.x + 25, this.y - 50), a.scale(-1, 1), a.rotate(-this.rotation + .5);
            var b = this.oGameElementsImgData.oData.oAtlasData.glove.x,
                c = this.oGameElementsImgData.oData.oAtlasData.glove.y,
                d = this.oGameElementsImgData.oData.oAtlasData.glove.width,
                e = this.oGameElementsImgData.oData.oAtlasData.glove.height;
            a.drawImage(this.oGameElementsImgData.img, b, c, d, e, -d / 2, -e / 2, d, e), a.restore()
        }, a
    }();
    a.Gloves = b
}(Elements || (Elements = {}));
var __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        c.prototype = b.prototype, a.prototype = new c
    },
    Elements;
! function(a) {
    var b = function(a) {
        function b(b) {
            a.call(this, b, 20, 30, "burst"), this.setAnimType("once", "burst"), this.animEndedFunc = function() {
                this.removeMe = !0
            }
        }
        return __extends(b, a), b.prototype.update = function(b) {
            a.prototype.updateAnimation.call(this, b)
        }, b
    }(Utils.AnimSprite);
    a.Particle = b
}(Elements || (Elements = {}));
var Utils;
! function(a) {
    var b = function() {
        function a(a, b) {
            this.saveDataId = a, this.totalLevels = b, this.clearData(), this.setInitialData()
        }
        return a.prototype.clearData = function() {
            this.aLevelStore = new Array, this.aLevelStore.push(0), this.aLevelStore.push(0);
            for (var a = 0; a < this.totalLevels - 1; a++) 0 == (a + 2) % 4 ? this.aLevelStore.push(5) : this.aLevelStore.push(1), this.aLevelStore.push(0)
        }, a.prototype.setInitialData = function() {
            if ("undefined" != typeof Storage)
                if (null != localStorage.getItem(this.saveDataId)) {
                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                    for (var a in this.aLevelStore) this.aLevelStore[a] = parseInt(this.aLevelStore[a])
                } else this.saveData()
        }, a.prototype.saveData = function() {
            if ("undefined" != typeof Storage) {
                for (var a = "", b = 0; b < this.aLevelStore.length; b++) a += this.aLevelStore[b], b < this.aLevelStore.length - 1 && (a += ",");
                localStorage.setItem(this.saveDataId, a)
            }
        }, a
    }();
    a.SaveDataHandler = b
}(Utils || (Utils = {}));
var requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60, (new Date).getTime())
        }
    }(),
    previousTime, canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.width = 700, canvas.height = 400;
var canvasX, canvasY, canvasScaleX, canvasScaleY, div = document.getElementById("viewporter"),
    sound, music, audioType = 0,
    muted = !1,
    splash, splashTimer = 0,
    assetLib, preAssetLib, rotatePause = !1,
    manualPause = !1,
    isMobile = !1,
    gameState = "loading",
    aLangs = new Array("EN"),
    curLang = "",
    isBugBrowser = !1,
    isIE10 = !1;
navigator.userAgent.match(/MSIE\s([\d]+)/) && (isIE10 = !0);
var deviceAgent = navigator.userAgent.toLowerCase();
(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) && (isMobile = !0, deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent) && (isBugBrowser = !0));
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas(), window.onresize = function() {
    setTimeout(function() {
        resizeCanvas()
    }, 1)
}, document.addEventListener("visibilitychange", function() {
    document.hidden ? Howler.mute() : muted || Howler.unmute()
}, !1), window.addEventListener("load", function() {
    setTimeout(function() {
        resizeCanvas()
    }, 0), window.addEventListener("orientationchange", function() {
        setTimeout(function() {
            resizeCanvas()
        }, 500)
    }, !1)
});
var adSense;
isIE10 || "undefined" == typeof window.AudioContext && "undefined" == typeof window.webkitAudioContext && -1 != navigator.userAgent.indexOf("Android") ? audioType = 0 : (audioType = 1, sound = new Howl({
    urls: ["audio/sound.ogg", "audio/sound.m4a"],
    sprite: {
        ballBounce: [0, 300],
        ballBlock: [500, 300],
        kick: [1e3, 400],
        whistle: [1500, 1600],
        crowdBadBig: [3500, 3500],
        crowdGoodBig: [7500, 5e3],
        crowdGoodSmall: [13e3, 4500],
        crowdBadSmall: [18e3, 2e3],
        click: [20500, 400],
        targetHit: [21e3, 1200],
        shortWhistle: [22500, 300],
        takeShot: [23e3, 1300],
        barUp: [24500, 2e3]
    }
}), music = new Howl({
    urls: ["audio/music.ogg", "audio/music.m4a"],
    volume: .25,
    loop: !0
}));
var panel, hud, background, stageNum, aTeamData = [{
        team: "arsenal",
        skill: 5
    }, {
        team: "astonVilla",
        skill: 3
    }, {
        team: "burnley",
        skill: 1
    }, {
        team: "chelsea",
        skill: 5
    }, {
        team: "crystalPalace",
        skill: 3
    }, {
        team: "everton",
        skill: 3
    }, {
        team: "hull",
        skill: 1
    }, {
        team: "leicester",
        skill: 2
    }, {
        team: "liverpool",
        skill: 5
    }, {
        team: "manCity",
        skill: 5
    }, {
        team: "manUtd",
        skill: 4
    }, {
        team: "newcastle",
        skill: 2
    }, {
        team: "qpr",
        skill: 1
    }, {
        team: "southampton",
        skill: 3
    }, {
        team: "stoke",
        skill: 3
    }, {
        team: "sunderland",
        skill: 2
    }, {
        team: "swansea",
        skill: 2
    }, {
        team: "tottenham",
        skill: 4
    }, {
        team: "westBrom",
        skill: 1
    }, {
        team: "westHam",
        skill: 2
    }],
    aTeamsPlaying, oMatchInfo = {
        homeTeamId: null,
        round: 0,
        homeScore: 0,
        awayTeamId: null,
        awayScore: 0,
        time: 0,
        passPercentage: 0,
        passResult: 0
    },
    ball, matchCount = 0,
    aPlayers, swipeState, trail, touchX, touchY, ballEasedX, ballIncX, kickTween, resultPanel, gloves, oShirts = {
        home: [0, 1, 1, 2, 3, 2, 4, 2, 0, 5, 0, 6, 7, 8, 8, 8, 9, 9, 9, 10],
        away: [11, 9, 12, 11, 11, 12, 12, 11, 11, 2, 9, 9, 9, 2, 2, 5, 0, 12, 0, 5]
    },
    oShorts = {
        home: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 9, 10, 0, 0, 9, 6, 4, 11],
        away: [12, 13, 6, 14, 15, 4, 6, 6, 14, 6, 16, 5, 9, 4, 17, 15, 8, 6, 8, 17]
    },
    firstRun = 0,
    ballTargX, aParticles, musicTween, diveDist;