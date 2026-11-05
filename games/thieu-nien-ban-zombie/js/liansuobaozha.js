var SG_Game_Played = false;
function main() {
    var r = 'img/' + SG.lang + '/';

    jsGame.initImage([{
        id: "a",
        src: r + "a.png"
    }, {
        id: "btn_sound1",
        src: r + "yx.png"
    }, {
        id: "btn_sound2",
        src: r + "yx2.png"
    }, {
        id: "btn_pause",
        src: r + "zt.png"
    }, {
        id: "pause",
        src: r + "zt3.png"
    }, {
        id: "btn_resume",
        src: r + "jxyx.png"
    }, {
        id: "btn_back",
        src: r + "jsyx.png"
    }, {
        id: "clue1",
        src: r + "clue1.png"
    }, {
        id: "clue2",
        src: r + "clue2.png"
    }, {
        id: "bg",
        src: r + "bj1.png"
    }, {
        id: "blood",
        src: r + "blood.png"
    }, {
        id: "baozha2",
        src: r + "boom.png"
    }, {
        id: "fs",
        src: r + "fs.png"
    }, {
        id: "fs2",
        src: r + "fs2.png"
    }, {
        id: "fs3",
        src: r + "fs3.png"
    }, {
        id: "zl",
        src: r + "zl.png"
    }, {
        id: "zd",
        src: r + "zd.png"
    }, {
        id: "shiyan3",
        src: r + "I-1.png"
    }, {
        id: "shiyan4",
        src: r + "shiyan4.png"
    }, {
        id: "shibai",
        src: r + "gksb.png"
    }, {
        id: "I-1",
        src: r + "I-1.png"
    }, {
        id: "I-2",
        src: r + "I-2.png"
    }, {
        id: "I-3",
        src: r + "I-3.png"
    }, {
        id: "II-1",
        src: r + "II-1.png"
    }, {
        id: "II-2",
        src: r + "II-2.png"
    }, {
        id: "II-3",
        src: r + "II-3.png"
    }, {
        id: "III-1",
        src: r + "III-1.png"
    }, {
        id: "III-2",
        src: r + "III-2.png"
    }, {
        id: "III-3",
        src: r + "III-3.png"
    }, {
        id: "IV-2",
        src: r + "IV-2.png"
    }, {
        id: "IV-3",
        src: r + "IV-3.png"
    }, {
        id: "V-2",
        src: r + "V-2.png"
    }, {
        id: "V-3",
        src: r + "V-3.png"
    }, {
        id: "2I-1",
        src: r + "2I-1.png"
    }, {
        id: "2I-2",
        src: r + "2I-2.png"
    }, {
        id: "2I-3",
        src: r + "2I-3.png"
    }, {
        id: "2II-1",
        src: r + "2II-1.png"
    }, {
        id: "2II-2",
        src: r + "2II-2.png"
    }, {
        id: "2II-3",
        src: r + "2II-3.png"
    }, {
        id: "2III-1",
        src: r + "2III-1.png"
    }, {
        id: "2III-2",
        src: r + "2III-2.png"
    }, {
        id: "2III-3",
        src: r + "2III-3.png"
    }, {
        id: "2IV-2",
        src: r + "2IV-2.png"
    }, {
        id: "jrgk1",
        src: r + "jrgk1.png"
    }, {
        id: "g",
        src: r + "g.png"
    }, {
        id: "jrgk2",
        src: r + "jrgk2.png"
    }, {
        id: "mbjs",
        src: r + "mbjs.png"
    }, {
        id: "tzcg",
        src: r + "tzcg.png"
    }, {
        id: "tzgz",
        src: r + "tzgz.png"
    }, {
        id: "tzsb",
        src: r + "tzsb.png"
    }, {
        id: "ts",
        src: r + "ts.png"
    }, {
        id: "gksb",
        src: r + "gksb.png"
    }, {
        id: "ksyx",
        src: r + "ksyx.png"
    }, {
        id: "logo1",
        src: r + "logo4.png"
    }, {
        id: "gksb",
        src: r + "gksb.png"
    }, {
        id: "gksb",
        src: r + "gksb.png"
    }, {
        id: "btn_sound3",
        src: r + "yx3.png"
    }, {
        id: "btn_sound4",
        src: r + "yx4.png"
    }]);
    var i = {}, s = {
            x: 0,
            y: 0
        };
    i.initTouch = function() {
        jsGame.touch.init(false)
    };
    i.initCanvas = function() {
        i.width = window.innerWidth << 0;
        i.height = window.innerHeight << 0;
        i.offset = 0;
		
		if (i.height > i.width * 690 / 480) {
			i.scale = i.width / 480;
			i.offset = (i.height - i.width * 690 / 480) / 2 << 0;
			i.height = i.width * 690 / 480 << 0
		} else {
			i.width = i.height * 480 / 690 << 0;
			i.scale = i.height / 690
		}

        if (i.height > i.width) {
            
            i.portrait = true
        } /*else if (i.height > 800 || i.width > 800) {
            i.width = i.height * 480 / 690 << 0;
            i.scale = i.height / 690;
            i.portrait = true
        } */else i.portrait = false;
        if (i.height > i.width && (navigator.userAgent.toLowerCase().indexOf("iphone") != -1 || navigator.userAgent.toLowerCase().indexOf("ipod") != -1) && !window.navigator.standalone) {
            /*	i.portrait = true;
			i.height = 616;
			i.width = i.height * 2 / 3 << 0;
			i.scale = i.height / 690;*/
            jsGame.canvas.screen.setWidth(i.width);
            jsGame.canvas.screen.setHeight(i.height)
        } else {
            jsGame.canvas.screen.setWidth(i.width);
            jsGame.canvas.screen.setHeight(window.innerHeight)
        }
        i.canvas = document.getElementById("jsGameScreen");
        i.ctx = i.canvas.getContext("2d");
        i.buffer = document.createElement("canvas");
        i.buffer.width = 480;
        i.buffer.height = 690;
        i.ctxBuf = i.buffer.getContext("2d");
        i.initTouch();
		
		console.log("scale: " + (113 * i.scale << 0));
		if (i.height > window.innerHeight) {
			console.log("to big");
		}
		
        if (i.offset) try {
            i.ctx.drawImage(jsGame.getImage("shiyan3"), 0, 0, i.width, 113 * i.scale << 0);
            i.ctx.drawImage(jsGame.getImage("shiyan4"), 0, window.innerHeight - (125 * i.scale << 0), i.width, 200 * i.scale << 0)
        } catch (e) {}
		
    };
    i.initCanvas();
	orientationsFunction = i.initCanvas;
    jsGame.initImageCallBack(function(e, t) {
        if (e >= t) jsGame.gameFlow.run();
        else try {
            var n = e / t;
            n = n > 1 ? 1 : n;
            i.ctx.fillStyle = "#FFFFFF";
            i.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            i.ctx.drawImage(jsGame.getImage("a"), 0, 0, 250, 81, (i.width - 250) / 2, (i.height - 81) / 2, 250, 81);
            i.ctx.drawImage(jsGame.getImage("a"), 2, 86, 246 * n, 10, (i.width - 246) / 2, (i.height - 81) / 2 + 51, 246 * n, 10)
        } catch (r) {}
    });
    jsGame.pageLoad(function(e) {
        function t(t) {
            i.life = [3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            i.EnemyNum = [5, 6, 7, 8, 9, 9, 9, 10, 12, 11, 11, 11, 11, 11, 11, 11, 11];
            i.SpriteEnemyNum = [0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
            i.jiangshi.length = 0;
            for (var s = i.bianliang = 0; s < i.EnemyNum[t]; s++) {
                var o = e.commandFuns.getRandom(10, 450),
                    u = e.commandFuns.getRandom(10, 500),
                    f = 0;
                i.jiangshi.push(new n(o, u, f))
            }
            for (s = 0; s < i.SpriteEnemyNum[t]; s++) {
                o = e.commandFuns.getRandom(10, 450);
                u = e.commandFuns.getRandom(10, 500);
                f = 1;
                i.jiangshi.push(new r(o, u, f))
            }
            i.jiafenY = 510
        }

        function n(t, n, r) {
            this.data = spriteActionNameSpace.getSpriteAction();
            this.data.x = t;
            this.data.y = n;
            this.jiangshitype = r;
            this.fangxiang = e.commandFuns.getRandom(0, 7);
            this.data.setSprite(this.fangxiang);
            this.move = function() {
                if (this.fangxiang == 0) {
                    this.data.x += 0;
                    this.data.y -= 10
                } else if (this.fangxiang == 1) {
                    this.data.x -= 10;
                    this.data.y -= 10
                } else if (this.fangxiang == 2) {
                    this.data.x += 10;
                    this.data.y -= 10
                } else if (this.fangxiang == 3) {
                    this.data.x -= 10;
                    this.data.y -= 0
                } else if (this.fangxiang == 4) {
                    this.data.x += 10;
                    this.data.y -= 0
                } else if (this.fangxiang == 5) {
                    this.data.x += 0;
                    this.data.y += 10
                } else if (this.fangxiang == 6) {
                    this.data.x -= 10;
                    this.data.y += 10
                } else if (this.fangxiang == 7) {
                    this.data.x += 10;
                    this.data.y += 10
                }
                if (this.data.y >= 540) {
                    this.data.setSprite(1);
                    var t = e.commandFuns.getRandom(0, 2);
                    this.fangxiang = o[0][t]
                } else if (this.data.y <= 50) {
                    this.data.setSprite(7);
                    t = e.commandFuns.getRandom(0, 2);
                    this.fangxiang = o[1][t]
                } else if (this.data.x <= 15) {
                    this.data.setSprite(4);
                    t = e.commandFuns.getRandom(0, 2);
                    this.fangxiang = o[3][t]
                } else if (this.data.x >= 475) {
                    this.data.setSprite(3);
                    t = e.commandFuns.getRandom(0, 2);
                    this.fangxiang = o[2][t]
                }
            };
            this.isAttack = function(e, t, n, r) {
                if (this.data.y + this.getBodyRect()[1] >= t + r || t >= this.data.y + this.getBodyRect()[1] + this.getBodyRect()[3] || this.data.x + this.getBodyRect()[0] >= e + n || e >= this.data.x + this.getBodyRect()[0] + this.getBodyRect()[2]) return false;
                return true
            };
            this.getBodyRect = function() {
                return this.data.getBodyRect()
            };
            this.draw = function() {
                this.data.render(true, i.ctxBuf);
                this.data.getSprite().nextFrame()
            }
        }

        function r(t, n, r) {
            this.data = spriteActionBigNameSpace.getSpriteActionBig();
            this.data.x = t;
            this.data.y = n;
            this.jiangshitype = r;
            this.fangxiang = e.commandFuns.getRandom(0, 7);
            this.data.setSprite(this.fangxiang);
            this.move = function() {
                if (this.fangxiang == 0) {
                    this.data.x += 0;
                    this.data.y -= 10
                } else if (this.fangxiang == 1) {
                    this.data.x -= 10;
                    this.data.y -= 10
                } else if (this.fangxiang == 2) {
                    this.data.x += 10;
                    this.data.y -= 10
                } else if (this.fangxiang == 3) {
                    this.data.x -= 10;
                    this.data.y -= 0
                } else if (this.fangxiang == 4) {
                    this.data.x += 10;
                    this.data.y -= 0
                } else if (this.fangxiang == 5) {
                    this.data.x += 0;
                    this.data.y += 10
                } else if (this.fangxiang == 6) {
                    this.data.x -= 10;
                    this.data.y += 10
                } else if (this.fangxiang == 7) {
                    this.data.x += 10;
                    this.data.y += 10
                }
                if (this.data.y >= 540) {
                    this.data.setSprite(1);
                    var t = e.commandFuns.getRandom(0, 2);
                    this.fangxiang = o[0][t]
                } else if (this.data.y <= 50) {
                    this.data.setSprite(7);
                    t = e.commandFuns.getRandom(0, 2);
                    this.fangxiang = o[1][t]
                } else if (this.data.x <= 15) {
                    this.data.setSprite(4);
                    t = e.commandFuns.getRandom(0, 2);
                    this.fangxiang = o[3][t]
                } else if (this.data.x >= 475) {
                    this.data.setSprite(3);
                    t = e.commandFuns.getRandom(0, 2);
                    this.fangxiang = o[2][t]
                }
            };
            this.isAttack = function(e, t, n, r) {
                if (this.data.y + this.getBodyRect()[1] >= t + r || t >= this.data.y + this.getBodyRect()[1] + this.getBodyRect()[3] || this.data.x + this.getBodyRect()[0] >= e + n || e >= this.data.x + this.getBodyRect()[0] + this.getBodyRect()[2]) return false;
                return true
            };
            this.getBodyRect = function() {
                return this.data.getBodyRect()
            };
            this.draw = function() {
                this.data.render(true, i.ctxBuf);
                this.data.getSprite().nextFrame()
            }
        }
        e.setRunFrequency(50);
        i.showClue = function() {
            i.ctx.fillStyle = "white";
            i.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            i.ctx.drawImage(e.getImage("clue2"), (window.innerWidth - 122) / 2, (window.innerHeight - 145) / 2)
        };
        i.initMusic = function() {
            for (var e = 0; e < 1; e++) {
                i.music[e] = document.createElement("audio");
                var t = "";
                switch (e) {
                    case 0:
                        t = "sound/meishi.mp3"
                }
                i.music[e].setAttribute("src", t);
                i.music[e].setAttribute("preload", true);
                i.music[e].load()
            }
            i.music[0].setAttribute("autoplay", true);
            i.music[0].setAttribute("loop", true);
            i.music[0].addEventListener("canplaythrough", function() {
                i.sound ? i.music[0].play() : i.music[0].pause()
            }, true)
        };
        i.musicControl = function() {
            i.sound ? i.music[0].play() : i.music[0].pause()
        };
        i.init = function() {
            i.scoreArray = [];
            i.life = [];
            i.EnemyNum = [];
            i.WinNum = [];
            i.jiangshi = [];
            i.baozha = [];
            i.zuobiao = [];
            i.dieJS = 0;
            i.bianliang = 0;
            i.level = -1;
            i.mission = 1;
            i.fangxiang = -1;
            i.LOCK = true;
            i.NULL = 0;
            i.jiafenY = 510;
            i.jiafenlock = true;
            i.shenglibianliang = true;
            i.score = 0;
            i.jishu = 0;
            i.nowLevelScore = 0;
            s.x = 0;
            s.y = 0;
            i.pos = {};
            i.WinNum = [2, 5, 6, 7, 9, 8, 9, 10, 11, 12, 12, 12, 12, 12, 12, 12, 12];
            i.timer = 20;
            i.second = 0;
            i.fps = 0;
            i.t = (new Date).getTime();
            i.tmp123 = 0;
            i.over = false;
            i.paused = false;
            i.pauseTimer = 0;
            i.resumeTimer = 0;
            i.ppArr = [];
            i.flashTimer = 0;
            i.flashPos = 0;
            i.logoPosY = 0;
            i.flashV = 0;
            i.logoInTimer = 10;
            i.logoOutTimer = 0;
            i.helpIndex = 0
        };
        i.portrait = true;
        i.initCanvas();
        i.init();
        i.music = [];
        i.btns = {};
        i.id = 0;
        i.ppBuffer = [];
        i.sound = true;
        i.initMusic();
        if (i.offset) {
            i.ctx.drawImage(jsGame.getImage("shiyan3"), 0, 0, i.width, 113 * i.scale << 0);
            i.ctx.drawImage(jsGame.getImage("shiyan4"), 0, window.innerHeight - (125 * i.scale << 0), i.width, 200 * i.scale << 0)
        }
        var o = [
            [1, 0, 2],
            [5, 6, 7],
            [1, 3, 6],
            [2, 4, 7]
        ];
        i.drawNum = function(e, t, n, r, s, o) {
            if (e <= 0) i.ctxBuf.drawImage(r, 0, 0, s, o, t, n, s, o);
            else {
                var u = e / 10 << 0,
                    f = 0;
                e %= 10;
                for (var l = []; u || e;) {
                    l[f++] = e;
                    e = u % 10;
                    u = u / 10 << 0
                }
                e = l.reverse();
                u = e.length;
                for (f = 0; f < u; f++) i.ctxBuf.drawImage(r, s * e[f], 0, s, o, t + s * f, n, s, o)
            }
        };
        i.drawbaozha = function() {
            i.baozhaArea();
            for (var t = 0; t < i.baozha.length; t++)
                if (i.baozha[t].jiangshiclass == 0) {
                    i.baozha[t].number++;
                    if (i.baozha[t].number < 2) {
                        i.baozha[t].tem = 0;
                        i.baozha[t].fanweiX = 53;
                        i.baozha[t].fanweiY = 59
                    } else if (i.baozha[t].number >= 2 && i.baozha[t].number < 4) {
                        i.baozha[t].tem = 1;
                        i.baozha[t].fanweiX = 73;
                        i.baozha[t].fanweiY = 63
                    } else if (i.baozha[t].number >= 4 && i.baozha[t].number < 6) {
                        i.baozha[t].tem = 2;
                        i.baozha[t].fanweiX = 100;
                        i.baozha[t].fanweiY = 79
                    } else if (i.baozha[t].number >= 6 && i.baozha[t].number < 8) {
                        i.baozha[t].tem = 3;
                        i.baozha[t].fanweiX = 115;
                        i.baozha[t].fanweiY = 97
                    } else if (i.baozha[t].number > 12) {
                        i.baozha.splice(t, 1);
                        t--;
                        continue
                    }
                    if (i.baozha[t].type == 1) i.ctxBuf.drawImage(e.getImage("blood"), i.baozha[t].tem * 120, 0, 120, 120, i.baozha[t].x - 60, i.baozha[t].y - 60, 120, 120);
                    else i.baozha[t].type == 2 && i.ctxBuf.drawImage(e.getImage("baozha2"), i.baozha[t].tem * 120, 0, 120, 120, i.baozha[t].x - 60, i.baozha[t].y - 60, 120, 120)
                } else
            if (i.baozha[t].jiangshiclass == 1) {
                i.baozha[t].number++;
                if (i.baozha[t].number < 2) {
                    i.baozha[t].tem = 0;
                    i.baozha[t].fanweiX = 53;
                    i.baozha[t].fanweiY = 59
                } else if (i.baozha[t].number >= 2 && i.baozha[t].number < 4) {
                    i.baozha[t].tem = 1;
                    i.baozha[t].fanweiX = 73;
                    i.baozha[t].fanweiY = 63
                } else if (i.baozha[t].number >= 4 && i.baozha[t].number < 6) {
                    i.baozha[t].tem = 2;
                    i.baozha[t].fanweiX = 100;
                    i.baozha[t].fanweiY = 79
                } else if (i.baozha[t].number >= 6 && i.baozha[t].number < 8) {
                    i.baozha[t].tem = 3;
                    i.baozha[t].fanweiX = 115;
                    i.baozha[t].fanweiY = 97
                } else if (i.baozha[t].number >= 8 && i.baozha[t].number < 10) {
                    i.baozha[t].tem = 4;
                    i.baozha[t].fanweiX = 120;
                    i.baozha[t].fanweiY = 120
                } else if (i.baozha[t].number > 20) {
                    i.baozha.splice(t, 1);
                    t--;
                    continue
                }
                if (i.baozha[t].type == 1) i.ctxBuf.drawImage(e.getImage("blood"), i.baozha[t].tem * 120, 0, 120, 120, i.baozha[t].x - 60, i.baozha[t].y - 60, 120, 120);
                else i.baozha[t].type == 2 && i.ctxBuf.drawImage(e.getImage("baozha2"), i.baozha[t].tem * 120, 0, 120, 120, i.baozha[t].x - 60, i.baozha[t].y - 60, 120, 120)
            }
        };
        i.refresh = function() {
            if (i.paused || i.over) {
                if (i.pauseTimer > 1) i.pauseTimer--;
                else if (i.pauseTimer == 1) {
                    i.ctxBuf.drawImage(e.getImage("pause"), 80, 159);
                    i.showPausePage()
                }
                if (i.resumeTimer > 1) {
                    i.pauseTimer = 0;
                    i.resumeTimer--;
                    i.refreshBuffer()
                } else if (i.resumeTimer == 1) {
                    i.resumeTimer = 0;
                    i.paused = false;
                    i.over && i.init();
                    i.over = false
                }
            } else i.refreshBuffer();
            i.ctx.drawImage(i.buffer, 0, i.offset, i.width, i.height)
        };
        i.touchArea = function() {
            for (var e = 0; e < i.jiangshi.length; e++)
                if (i.jiangshi[e].jiangshitype == 0) {
                    if (i.jiangshi[e].isAttack(s.x, s.y, 1, 1)) {
                        i.baozha.push({
                            x: s.x,
                            y: s.y,
                            number: 0,
                            fanweiX: 0,
                            fanweiY: 0,
                            type: 1,
                            tem: 0,
                            jiangshiclass: 0
                        });
                        i.jiangshi.splice(e, 1);
                        i.bianliang += 1;
                        i.score += 10;
                        return
                    }
                } else
            if (i.jiangshi[e].isAttack(s.x, s.y, 1, 1)) {
                i.baozha.push({
                    x: s.x,
                    y: s.y,
                    number: 0,
                    fanweiX: 0,
                    fanweiY: 0,
                    type: 1,
                    tem: 0,
                    jiangshiclass: 1
                });
                i.jiangshi.splice(e, 1);
                i.bianliang += 1;
                i.score += 10;
                return
            }
            i.baozha.push({
                x: s.x,
                y: s.y,
                number: 0,
                fanweiX: 0,
                fanweiY: 0,
                type: 2,
                tem: 0,
                jiangshiclass: 0
            })
        };
        i.baozhaArea = function() {
            for (var n = 0, r = 0; r < i.jiangshi.length; r++)
                for (var s = 0; s < i.baozha.length; s++)
                    if (i.jiangshi[r].jiangshitype == 0) {
                        if (i.jiangshi[r].isAttack(i.baozha[s].x - 50, i.baozha[s].y - 50, i.baozha[s].fanweiX, i.baozha[s].fanweiY)) {
                            i.baozha.push({
                                x: i.jiangshi[r].data.x,
                                y: i.jiangshi[r].data.y,
                                number: 0,
                                fanweiX: 0,
                                fanweiY: 0,
                                type: 1,
                                tem: 0,
                                jiangshiclass: 0
                            });
                            i.jiangshi.splice(r, 1);
                            r--;
                            i.bianliang += 1;
                            n += 1;
                            i.score += 10;
                            break
                        }
                    } else
            if (i.jiangshi[r].isAttack(i.baozha[s].x - 50, i.baozha[s].y - 50, i.baozha[s].fanweiX, i.baozha[s].fanweiY)) {
                i.baozha.push({
                    x: i.jiangshi[r].data.x,
                    y: i.jiangshi[r].data.y,
                    number: 0,
                    fanweiX: 0,
                    fanweiY: 0,
                    type: 1,
                    tem: 0,
                    jiangshiclass: 1
                });
                i.jiangshi.splice(r, 1);
                r--;
                i.bianliang += 1;
                n += 1;
                i.score += 10;
                break
            }
            n = i.bianliang;
            if (n >= i.WinNum[i.level] && i.life[i.level] >= 0 && i.baozha.length == 0) {
                i.shenglibianliang = true;
                if (i.life[i.level] > 0) {
                    i.jiafenlock = false;
                    if (i.jiafenlock == false) {
                        i.jiafenY--;
                        for (n = 0; n < i.life[i.level]; n++) i.ctxBuf.drawImage(e.getImage("fs2"), 30 + 60 * n, i.jiafenY);
                        if (i.jiafenY <= 490) {
                            i.jiafenY = 510;
                            i.jiafenlock = true
                        }
                    }
                }
                if (i.life[i.level] == 0 || i.jiafenlock == true) {
                    i.state = 4;
                    i.score += i.life[i.level] * 100;
                    i.shenglibianliang == true && i.scoreArray.push(i.score);
                    i.paused = true;
                    if (i.level > 10) i.level = 11;
                    i.jiafenY = 510
                }
            } else {
                i.shenglibianliang = false;
                if (i.life[i.level] <= 0 && i.baozha.length == 0 && n < i.WinNum[i.level]) {
                    SG_Hooks.gameOver(i.level+1,i.score);
                    i.state = 4;
                    i.paused = true;
                    i.jiafenY = 510;
                    i.bianliang = 0;
                    if (!(i.level <= 8)) {
                        i.score = i.scoreArray[8];
                        i.level = 10
                    }
                    t(i.level)
                }
            }
        };
        i.drawBJ = function(t) {
            if (t > 13) t = 13;
            switch (t) {
                case 0:
                    i.ctxBuf.fillStyle = "#396a8d";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                    break;
                case 1:
                    i.ctxBuf.fillStyle = "#396a8d";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                    break;
                case 2:
                    i.ctxBuf.fillStyle = "#396a8d";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                    i.ctxBuf.drawImage(e.getImage("II-2"), 0, 0);
                    break;
                case 3:
                    i.ctxBuf.fillStyle = "#396a8d";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                    i.ctxBuf.drawImage(e.getImage("II-2"), 0, 0);
                    break;
                case 4:
                    i.ctxBuf.fillStyle = "#396a8d";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                    i.ctxBuf.drawImage(e.getImage("III-2"), 0, 0);
                    break;
                case 5:
                    i.ctxBuf.fillStyle = "#396a8d";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                    i.ctxBuf.drawImage(e.getImage("III-2"), 0, 0);
                    break;
                case 6:
                    i.ctxBuf.fillStyle = "#396a8d";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                    i.ctxBuf.drawImage(e.getImage("IV-2"), 0, 0);
                    break;
                case 7:
                    i.ctxBuf.fillStyle = "#396a8d";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                    i.ctxBuf.drawImage(e.getImage("IV-2"), 0, 0);
                    break;
                case 8:
                    i.ctxBuf.fillStyle = "#396a8d";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                    i.ctxBuf.drawImage(e.getImage("V-2"), 0, 0);
                    break;
                case 9:
                    i.ctxBuf.fillStyle = "#474038";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("2I-2"), 0, 0);
                    break;
                case 10:
                    i.ctxBuf.fillStyle = "#474038";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("2II-2"), 0, 0);
                    break;
                case 11:
                    i.ctxBuf.fillStyle = "#474038";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("2III-2"), 0, 0);
                    break;
                case 12:
                    i.ctxBuf.fillStyle = "#474038";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("2IV-2"), 0, 0);
                    break;
                case 13:
                    i.ctxBuf.fillStyle = "#474038";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("2IV-2"), 0, 0)
            }
        };
        i.drawZL = function(t) {
            if (t > 13) t = 13;
            switch (t) {
                case 0:
                    i.ctxBuf.drawImage(e.getImage("I-3"), 0, 490);
                    break;
                case 1:
                    i.ctxBuf.drawImage(e.getImage("I-3"), 0, 490);
                    break;
                case 2:
                    i.ctxBuf.drawImage(e.getImage("II-3"), 0, 490);
                    break;
                case 3:
                    i.ctxBuf.drawImage(e.getImage("II-3"), 0, 490);
                    break;
                case 4:
                    i.ctxBuf.drawImage(e.getImage("III-3"), 0, 490);
                    break;
                case 5:
                    i.ctxBuf.drawImage(e.getImage("III-3"), 0, 490);
                    break;
                case 6:
                    i.ctxBuf.drawImage(e.getImage("IV-3"), 0, 490);
                    break;
                case 7:
                    i.ctxBuf.drawImage(e.getImage("IV-3"), 0, 490);
                    break;
                case 8:
                    i.ctxBuf.drawImage(e.getImage("V-3"), 0, 490);
                    break;
                case 9:
                    i.ctxBuf.drawImage(e.getImage("2I-3"), 0, 490);
                    break;
                case 10:
                    i.ctxBuf.drawImage(e.getImage("2II-3"), 0, 490);
                    break;
                case 11:
                    i.ctxBuf.drawImage(e.getImage("2III-3"), 0, 490);
                    break;
                case 12:
                    i.ctxBuf.drawImage(e.getImage("2III-3"), 0, 490);
                    break;
                case 13:
                    i.ctxBuf.drawImage(e.getImage("2III-3"), 0, 490)
            }
            i.ctxBuf.drawImage(e.getImage("mbjs"), 200, 540);
            i.drawNum(i.bianliang, 213, 560, e.getImage("fs3"), 13, 18);
            i.ctxBuf.drawImage(e.getImage("g"), 238, 560);
            i.drawNum(i.WinNum[t], 255, 560, e.getImage("fs3"), 13, 18)
        };
        i.refreshBuffer = function() {
            i.drawBJ(i.level);
            for (var t = 0; t < i.jiangshi.length; t++) {
                i.jiangshi[t].move();
                i.jiangshi[t].draw()
            }
            i.drawbaozha();
            i.drawZL(i.level);
            for (t = 0; t < i.life[i.level]; t++) i.ctxBuf.drawImage(e.getImage("zd"), 30 + 60 * t, 545);
            i.drawNum(i.score, 80, 625, e.getImage("fs"), 23, 37);
            i.showGamePage()
        };
        i.drawBtns = function(e) {
            i.ctxBuf.drawImage(e.img, e.pressed * e.w, 0, e.w, e.h, e.x - e.w / 2 + .5 << 0, e.y - e.h / 2 + .5 << 0, e.w, e.h)
        };
        i.createClueDialog = function() {
            if (!i.btns.btn_clue1) i.btns.btn_clue1 = {
                img: e.getImage("clue1"),
                x: 157,
                y: 615,
                w: 156,
                h: 63
            }
        };
        i.delClueDialog = function() {
            if (i.btns.btn_clue1) i.btns.btn_clue1 = null
        };
        i.showClueDialog = function() {
            i.btns.btn_clue1 && i.ctxBuf.drawImage(i.btns.btn_clue1.img, 157, 615)
        };
        i.createLogoPage = function() {
            i.paused = true;
            if (!(i.btns.btn_start || i.btns.btn_exit)) {
                i.btns.btn_sound1 = {
                    img: e.getImage("btn_sound4"),
                    x: 445,
                    y: 35,
                    w: 63,
                    h: 62,
                    pressed: 0
                };
                i.btns.btn_sound1.img = i.sound ? e.getImage("btn_sound4") : e.getImage("btn_sound3");
                if ((navigator.userAgent.toLowerCase().indexOf("iphone") != -1 || navigator.userAgent.toLowerCase().indexOf("ipod") != -1) && !window.navigator.standalone) i.createClueDialog()
            }
        };
        i.delLogoPage = function() {
            if (i.btns.btn_sound1) i.btns.btn_sound1 = null
        };
        i.showLogoPage = function() {
            if (i.logoOutTimer > 1) {
                i.logoOutTimer--;
                i.showHelpPage()
            } else if (i.logoOutTimer == 1) {
                i.delLogoPage();
                i.state = 1;
                return
            }
            i.ctxBuf.drawImage(e.getImage("logo1"), 0, 0 - i.logoPosY);
            i.btns.btn_sound1.y -= i.logoPosY;
            i.drawBtns(i.btns.btn_sound1);
            //i.showClueDialog();
            i.ctx.drawImage(i.buffer, 0, i.offset, i.width, i.height)
        };
        i.showHelpPage = function() {
            i.ctxBuf.fillStyle = "#396a8d";
            i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
            i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
            i.ctxBuf.drawImage(e.getImage("I-3"), 0, 490);
            i.ctxBuf.drawImage(e.getImage("ts"), 80, 108);
            i.ctx.drawImage(i.buffer, 0, i.offset, i.width, i.height)
        };
        i.showTishiPage = function() {
            if (i.level <= 8)
                if (i.shenglibianliang == true)
                    if (i.level == -1) {
                        i.ctxBuf.fillStyle = "#396a8d";
                        i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                        i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                        i.ctxBuf.drawImage(e.getImage("jrgk1"), 95, 10);
                        i.drawNum(i.WinNum[i.level + 1], 260, 170, e.getImage("fs3"), 13, 18)
                    } else {
                        i.ctxBuf.fillStyle = "#396a8d";
                        i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                        i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);

                        i.ctxBuf.drawImage(e.getImage("jrgk2"), 95, 90);
                        i.drawNum(i.bianliang, 250, 195, e.getImage("fs3"), 13, 18);
                        i.ctxBuf.drawImage(e.getImage("g"), 280, 195);
                        i.drawNum(i.WinNum[i.level], 310, 195, e.getImage("fs3"), 13, 18);
                        i.drawNum(i.score, 250, 240, e.getImage("fs3"), 13, 18)
                    } else {
                        i.ctxBuf.fillStyle = "#396a8d";
                        i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                        i.ctxBuf.drawImage(e.getImage("I-2"), 0, 0);
                        i.ctxBuf.drawImage(e.getImage("shibai"), 95, 28);
                        i.ctxBuf.drawImage(e.getImage("I-3"), 0, 490);
                        i.drawNum(i.score, 260, 300, e.getImage("fs3"), 13, 18)
                    } else
            if (i.shenglibianliang == true)
                if (i.level == 9) {
                    i.ctxBuf.fillStyle = "#474038";
                    i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                    i.ctxBuf.drawImage(e.getImage("2I-2"), 0, 0);
                    i.ctxBuf.drawImage(e.getImage("2I-3"), 0, 490);
                    i.ctxBuf.drawImage(e.getImage("tzgz"), 80, 90);
                    if (i.pos.x > 270 && i.pos.x < 360 && i.pos.y > 410 && i.pos.y < 445) {
                        i.level += 1;
                        i.mission += 1;
                        console.log(i.level);
                        t(i.level);
                        i.bianliang = 0;
                        i.state = 2;
                        i.paused = false
                    }
                } else {
                    if (i.level >= 10) {
                        i.ctxBuf.fillStyle = "#474038";
                        i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                        i.ctxBuf.drawImage(e.getImage("2I-2"), 0, 0);
                        i.ctxBuf.drawImage(e.getImage("2I-3"), 0, 490);
                        i.ctxBuf.drawImage(e.getImage("tzcg"), 80, 90);
                        i.drawNum(i.score, 250, 275, e.getImage("fs3"), 13, 18)
                    }
                } else
            if (i.shenglibianliang == false) {
                i.ctxBuf.fillStyle = "#474038";
                i.ctxBuf.fillRect(0, 0, 1e3, 1e3);
                i.ctxBuf.drawImage(e.getImage("2I-2"), 0, 0);
                i.ctxBuf.drawImage(e.getImage("2I-3"), 0, 490);
                i.ctxBuf.drawImage(e.getImage("tzsb"), 80, 90);
                i.drawNum(i.score, 240, 200, e.getImage("fs3"), 13, 18)
            }
            i.ctx.drawImage(i.buffer, 0, i.offset, i.width, i.height)
        };
        i.createGamePage = function() {
			if (!SG_Game_Played) { SG_Hooks.start(); SG_Game_Played=true; }
            if (!(i.btns.btn_color || i.btns.btn_bomb || i.btns.btn_stone)) {
                i.btns.btn_sound = {
                    img: e.getImage("btn_sound1"),
                    x: 295,
                    y: 640,
                    w: 25,
                    h: 25,
                    pressed: 0
                };
                i.btns.btn_sound.img = i.sound ? e.getImage("btn_sound1") : e.getImage("btn_sound2");
                i.btns.btn_pause = {
                    img: e.getImage("btn_pause"),
                    x: 400,
                    y: 640,
                    w: 25,
                    h: 25,
                    pressed: 0
                }
            }
        };
        i.delGamePage = function() {
            if (i.btns.btn_color) {
                i.btns.btn_color = null;
                i.btns.btn_bomb = null;
                i.btns.btn_stone = null;
                i.btns.btn_sound = null;
                i.btns.btn_pause = null
            }
        };
        i.showGamePage = function() {
            i.drawBtns(i.btns.btn_sound);
            i.drawBtns(i.btns.btn_pause)
        };
        i.createPausePage = function() {
            if (!i.btns.btn_back) {
                i.btns.btn_back = {
                    img: e.getImage("btn_back"),
                    x: 220,
                    y: 280,
                    w: 134,
                    h: 45,
                    pressed: 0
                };
                if (i.over) i.btns.btn_restart = {
                    img: e.getImage("btn_restart"),
                    x: 220,
                    y: 240,
                    w: 58,
                    h: 53,
                    pressed: 0
                };
                else if (i.paused) i.btns.btn_resume = {
                    img: e.getImage("btn_resume"),
                    x: 220,
                    y: 220,
                    w: 134,
                    h: 45,
                    pressed: 0
                }
            }
        };
        i.delPausePage = function() {
            if (i.btns.btn_back) {
                i.btns.btn_back = null;
                i.btns.btn_restart = null;
                i.btns.btn_resume = null
            }
        };
        i.showPausePage = function() {
            if (i.btns.btn_back) {
                i.drawBtns(i.btns.btn_back);
                if (i.btns.btn_restart) i.drawBtns(i.btns.btn_restart);
                else i.btns.btn_resume && i.drawBtns(i.btns.btn_resume)
            }
        };
        i.delEnemy = function() {
            if (i.btns.btn_enemy) i.btns.btn_enemy = null
        };
        e.touch.touchStart(function() {
            if (i.portrait == true) {
                i.pos = e.touch.getStartPos();
                i.pos.x /= i.scale;
                i.pos.y = (i.pos.y - i.offset) / i.scale;
                if (i.state == 2 && i.baozha.length <= 0 && i.jiafenlock == true && i.life[i.level] > 0) {
                    if (i.LOCK == true) {
                        s.x = i.pos.x;
                        s.y = i.pos.y
                    }
                    if (i.pos.y <= 540 && i.paused == false) {
                        i.touchArea();
                        i.life[i.level] -= 1
                    }
                }
                if (i.paused || i.over)
                    if (i.state == 0)
                        if (i.btns.btn_clue1 && i.pos.x > 150 && i.pos.x < 300 && i.pos.y > 600 && i.pos.y < 670) i.btns.btn_clue1.pressed = 1;
                        else
                if (i.btns.btn_sound1 && i.pos.x > 408 && i.pos.x < 470 && i.pos.y > 0 && i.pos.y < 65) i.btns.btn_sound1.pressed = 1;
                else if (i.btns.btn_start && i.pos.x > 67 && i.pos.x < 253 && i.pos.y > 333 && i.pos.y < 377) i.btns.btn_start.pressed = 1;
                else {
                    if (i.btns.btn_exit && i.pos.x > 67 && i.pos.x < 253 && i.pos.y > 403 && i.pos.y < 447) i.btns.btn_exit.pressed = 1
                } else {
                    if (i.state == 2)
                        if (i.btns.btn_back && i.pos.x > 152 && i.pos.x < 285 && i.pos.y > 258 && i.pos.y < 300) i.btns.btn_back.pressed = 1;
                        else
                    if (i.btns.btn_restart && i.pos.x > 190 && i.pos.x < 250 && i.pos.y > 210 && i.pos.y < 270) i.btns.btn_restart.pressed = 1;
                    else if (i.btns.btn_resume && i.pos.x > 152 && i.pos.x < 285 && i.pos.y > 197 && i.pos.y < 241) i.btns.btn_resume.pressed = 1
                } else if (i.state == 2)
                    if (i.btns.btn_sound && i.pos.x > 290 && i.pos.x < 320 && i.pos.y > 630 && i.pos.y < 660) i.btns.btn_sound.pressed = 1;
                    else
                if (i.btns.btn_pause && i.pos.x > 390 && i.pos.x < 420 && i.pos.y > 630 && i.pos.y < 660) i.btns.btn_pause.pressed = 1
            }
        });
        e.touch.touchEnd(function() {
            if (i.portrait == true) {
                i.pos = e.touch.getReleasePos();
                i.pos.x /= i.scale;
                i.pos.y = (i.pos.y - i.offset) / i.scale;
                if (i.over || i.paused)
                    if (i.state == 0)
                        if (i.btns.btn_clue1 && i.btns.btn_clue1.pressed && i.pos.x > 150 && i.pos.x < 300 && i.pos.y > 600 && i.pos.y < 670) {
                            i.btns.btn_clue1.pressed = 0;
                            i.delClueDialog()
                        } else
                if (i.btns.btn_sound1 && i.btns.btn_sound1.pressed && i.pos.x > 408 && i.pos.x < 470 && i.pos.y > 0 && i.pos.y < 65) {
                    i.btns.btn_sound1.pressed = 0;
                    i.sound = !i.sound;
                    i.btns.btn_sound1.img = i.sound ? e.getImage("btn_sound4") : e.getImage("btn_sound3");
                    i.musicControl()
                } else if (i.pos.x > 149 && i.pos.x < 297 && i.pos.y > 436 && i.pos.y < 499) {
                    i.logoOutTimer = 2;
                    i.createGamePage();
                    i.delClueDialog()
                } else {
                    //if (i.pos.x > 140 && i.pos.x < 300 && i.pos.y > 534 && i.pos.y < 600) history.back();
                } else if (i.state == 1) {
                    if (i.pos.x > 365 && i.pos.x < 415 && i.pos.y > 110 && i.pos.y < 156) {
                        console.log('here3');
                        i.state = 4;
                    }
                } else if (i.state == 4)
                    if (i.shenglibianliang == true)
                        if (i.level < 8)
                            if (i.pos.x > 170 && i.pos.x < 265 && i.pos.y > 220 && i.pos.y < 270 && i.mission == 1 || i.pos.x > 80 && i.pos.x < 380 && i.pos.y > 340 && i.pos.y < 385 && i.mission >= 2) {
                                var startFunc = function(){						
									i.state = 2;
									i.level += 1;
									i.mission += 1;
									t(i.level);
									i.paused = false	
								};
                                                        
							if (i.level>=0) SG_Hooks.levelUp(i.level+2, i.score, startFunc);
                                                                   else startFunc();
								
							} else {
                                if (i.pos.x > 170 && i.pos.x < 265 && i.pos.y > 280 && i.pos.y < 325 && i.mission >= 2) {
                                    i.state = 2;
                                    i.jiafenY = 510;
                                    t(i.level);
                                    i.bianliang = 0;
                                    i.score = i.mission == 2 ? 0 : i.scoreArray[i.level - 1];
                                    i.scoreArray.splice(i.level, 1);
                                    i.paused = false
                                }
                            } else
                if (i.level == 8) {
                    if (i.pos.x > 119 && i.pos.x < 216 && i.pos.y > 344 && i.pos.y < 384) {
                        i.level += 1;
                        i.mission += 1;
                        i.paused = false
                    }
                } else {
                    if (i.level >= 9)
                        if (i.level == 9)
                            if (i.pos.x > 96 && i.pos.x < 182 && i.pos.y > 410 && i.pos.y < 440) {
                                i.init();
                                i.state = 0;
                                i.createLogoPage()
                            } else {
                                if (i.pos.x > 270 && i.pos.x < 355 && i.pos.y > 410 && i.pos.y < 440) {
                                    i.state = 2;
                                    i.level += 1;
                                    i.mission += 1;
                                    t(i.level);
                                    i.paused = false
                                }
                            } else
                    if (i.level >= 9)
                        if (i.pos.x > 270 && i.pos.x < 360 && i.pos.y > 340 && i.pos.y < 376) {
                            i.state = 2;
                            console.log(i.level);
                            t(i.level);
                            i.paused = false
                        } else
                    if (i.pos.x > 96 && i.pos.x < 182 && i.pos.y > 340 && i.pos.y < 376) {
                        i.init();
                        i.state = 0;
                        i.createLogoPage()
                    }
                } else if (i.level <= 8)
                    if (i.pos.x > 269 && i.pos.x < 360 && i.pos.y > 347 && i.pos.y < 380) {
                        i.state = 2;
                        i.jiafenY = 510;
                        if (i.mission != 1) i.score = i.scoreArray[i.level - 1];
                        else {
                            i.level = 0;
                            i.mission = 1;
                            i.score = 0
                        }
                        t(i.level);
                        i.bianliang = 0;
                        i.paused = false
                    } else {
                        if (i.pos.x > 95 && i.pos.x < 183 && i.pos.y > 347 && i.pos.y < 380) {
                            i.init();
                            i.state = 0;
                            i.createLogoPage()
                        }
                    } else
                if (i.pos.x > 269 && i.pos.x < 360 && i.pos.y > 274 && i.pos.y < 307) {
                    i.state = 2;
                    i.jiafenY = 510;
                    i.mission = 11;
                    t(i.level);
                    i.bianliang = 0;
                    i.score = i.scoreArray[8];
                    i.scoreArray.splice(i.level, 1);
                    i.paused = false
                } else {
                    if (i.pos.x > 96 && i.pos.x < 182 && i.pos.y > 274 && i.pos.y < 307) {
                        i.init();
                        i.state = 0;
                        i.createLogoPage()
                    }
                } else {
                    if (i.state == 2)
                        if (i.btns.btn_back && i.btns.btn_back.pressed && i.pos.x > 152 && i.pos.x < 285 && i.pos.y > 258 && i.pos.y < 300) {
                            i.btns.btn_back.pressed = 0;
                            i.delPausePage();
                            i.init();
                            i.state = 0;
                            i.createLogoPage()
                        } else
                    if (i.btns.btn_resume && i.btns.btn_resume.pressed && i.pauseTimer == 1 && i.pos.x > 152 && i.pos.x < 285 && i.pos.y > 197 && i.pos.y < 241) {
                        i.btns.btn_resume.pressed = 0;
                        i.resumeTimer = 10;
                        i.delPausePage()
                    }
                } else if (i.btns.btn_sound.pressed && i.pos.x > 290 && i.pos.x < 320 && i.pos.y > 630 && i.pos.y < 660) {
                    i.sound = !i.sound;
                    i.btns.btn_sound.img = i.sound ? e.getImage("btn_sound1") : e.getImage("btn_sound2");
                    i.musicControl()
                } else if (i.btns.btn_pause.pressed && i.pos.x > 380 && i.pos.x < 430 && i.pos.y > 620 && i.pos.y < 670) {
                    i.paused = true;
                    i.pauseTimer = 10;
                    i.createPausePage()
                }
                switch (i.state) {
                    case 0:
                        i.btns.btn_clue1 && (i.btns.btn_clue1.pressed = 0);
                        i.btns.btn_sound1 && (i.btns.btn_sound1.pressed = 0);
                        i.btns.btn_start && (i.btns.btn_start.pressed = 0);
                        break;
                    case 2:
                        i.btns.btn_back && (i.btns.btn_back.pressed = 0);
                        i.btns.btn_resume && (i.btns.btn_resume.pressed = 0);
                        i.btns.btn_sound && (i.btns.btn_sound.pressed = 0);
                        i.btns.btn_pause && (i.btns.btn_pause.pressed = 0)
                }
            }
        });
        SG.setOrientationHandler(function(orientation) {
            switch (orientation) {
                case 0:
                case 180:
                    i.initCanvas();
                    i.portrait = true;
                    break;
                case -90:
                case 90:
                    i.initCanvas();
                    i.portrait = false
            }
        });

        i.state = 0;
        i.createLogoPage();
        e.run(function() {
            //window.scrollTo(0, 1);
            i.musicControl();
						
			if (isMobileDevice() == false) {
				i.portrait = true;
			}
			
            if (i.portrait) switch (i.state) {
                case 0:
                    i.showLogoPage();
                    break;
                case 1:
                    i.showHelpPage();
                    break;
                case 4:
                    i.showTishiPage();
                    break;
                case 2:
                    i.refresh()
            } else i.showClue()
        });

        SG.setResizeHandler(function() {
            i.initCanvas();
        });
    })
}

var orientationsFunction;
var oldori;

function isMobileDevice() {
	if (navigator.appName == "Microsoft Internet Explorer") return true;
	var ori = window.orientation;
	return (ori == null || ori == undefined) ? false : true;
}

setInterval(function(){
	if (isMobileDevice()) {
		var iw = window.innerWidth;
		var ih = window.innerHeight;
		var ori;
		if (iw > ih) {
			ori = 0;
			document.getElementById("back").style["background-color"] = "#ffffff";
			document.getElementById("jsGameScreen").style.display = "none";
			document.getElementById("ori").style.display = "block";
		} else {
			ori = 1;
			document.getElementById("back").style["background-color"] = "#181818";
			document.getElementById("jsGameScreen").style.display = "inline";
			document.getElementById("ori").style.display = "none";
		}
		
		if (ori != oldori) {
			orientationsFunction();
			oldori = ori;
		}
		
	}
}, 500);
